"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";

// Navbar items with title and path
const navbarItems = [
  { title: "HOME", link: "/" },
  { title: "BLOGS", link: "/blogs" },
  { title: "MARS ROVER PHOTOS", link: "/mars-rover-photos" },
  { title: "NASA EPIC", link: "/nasa-epic" },
  { title: "NASA PIC", link: "/nasa-pic" },
];

export const Navbar = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleNavigate = (link) => {
    router.push(link);
    setDrawerOpen(false);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <Link href="/" className={styles.navbarLogo}>
          <img src="/shared/logo.svg" alt="Logo" />
          <span className={styles.logoText}>GALACTICA</span>
        </Link>
      </div>

      <div className={styles.decorativeLine} />

      {!isMobile ? (
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            {navbarItems.map((item, index) => (
              <li
                key={item.link}
                className={`${styles.navbarLinks} ${
                  item.link === currentPath ? styles.isLinkActive : ""
                }`}
              >
                <Link href={item.link}>
                  <b>0{index + 1}</b> {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box className={styles.mobileDrawer}>
              {navbarItems.map((item, index) => (
                <div
                  key={item.link}
                  className={styles.mobileDrawerItem}
                  onClick={() => handleNavigate(item.link)}
                >
                  <b>0{index + 1}</b> {item.title}
                </div>
              ))}
            </Box>
          </Drawer>
        </>
      )}
    </header>
  );
};
