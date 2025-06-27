// app/signup/page.js

"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button, Box, Typography } from "@mui/material";

const SignUpForm = () => {
  const router = useRouter();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef.current) {
        nextRef.current.focus();
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!form.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
      isValid = false;
    } else if (!/^\d{10,}$/.test(form.phone)) {
      newErrors.phone = 'Phone number must be at least 10 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form data submitted:", form);
      alert("Sign-up successful! Redirecting to home page.");
      router.push("/");
    } else {
      if (errors.firstName) firstNameRef.current.focus();
      else if (errors.lastName) lastNameRef.current.focus();
      else if (errors.email) emailRef.current.focus();
      else if (errors.phone) phoneRef.current.focus();
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, margin: "auto", mt: 5 }}
    >
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>

      {/* First Name Field */}
      <label htmlFor="firstName" style={{ marginBottom: "5px", display: "block", fontWeight: "bold" }}>First Name:</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        ref={firstNameRef}
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: `1px solid ${errors.firstName ? "red" : "#ccc"}`,
        }}
      />
      {errors.firstName && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-8px", marginBottom: "10px" }}>{errors.firstName}</p>}

      {/* Last Name Field */}
      <label htmlFor="lastName" style={{ marginBottom: "5px", display: "block", fontWeight: "bold" }}>Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        ref={lastNameRef}
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, emailRef)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: `1px solid ${errors.lastName ? "red" : "#ccc"}`,
        }}
      />
      {errors.lastName && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-8px", marginBottom: "10px" }}>{errors.lastName}</p>}

      {/* Email Field */}
      <label htmlFor="email" style={{ marginBottom: "5px", display: "block", fontWeight: "bold" }}>Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        ref={emailRef}
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e, phoneRef)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: `1px solid ${errors.email ? "red" : "#ccc"}`,
        }}
      />
      {errors.email && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-8px", marginBottom: "10px" }}>{errors.email}</p>}

      {/* Phone Number Field */}
      <label htmlFor="phone" style={{ marginBottom: "5px", display: "block", fontWeight: "bold" }}>Phone Number:</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        ref={phoneRef}
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: `1px solid ${errors.phone ? "red" : "#ccc"}`,
        }}
      />
      {errors.phone && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "-8px", marginBottom: "10px" }}>{errors.phone}</p>}

      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default SignUpForm;
