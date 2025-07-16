"use client";

import React from "react";
import Button from "./components/Button";
import DangerButton from "./components/DangerButton";
import TextInput from "./components/TextInput";
import ProfileImage from "./components/ProfileImage";

export default function Page() {
  return (
    <div>
      <h1>My App - Part 2</h1>
      <Button />
      <DangerButton />
      <TextInput />
      <ProfileImage />
    </div>
  );
}
