"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { digismileLogoImage, dummy_profile } from "@/assets/images";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";
import useAuthToken from "@/hooks/useAuthToken";

export default function Navbar() {
  const { data, isError } = useGetUserDetailsQuery();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [userId, setUserId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { clearAuthToken } = useAuthToken();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      setUserId(storedUserId);
    }
  }, []);

  const navigateToSection = (url: string) => {
    router.push(`/${url}`);
  };

  const handleProfileVisit = () => {
    navigateToSection(`profile/${userId}?tab=user-profile&subTab=prescription`);
    setDrawerOpen(false);
  };

  const handleChangePassword = () => {
    setDrawerOpen(false);
    router.push(`/profile/${userId}?tab=change-password`);
  };

  const handleLogout = () => {
    setDrawerOpen(false);
    clearAuthToken();
    location.reload();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1E285F" }}>
      <Toolbar className="flex justify-between items-center p-4 rounded-3xl">
        <Image
          onClick={() => navigateToSection("/")}
          src={digismileLogoImage}
          height={50}
          alt="digismile"
          className="cursor-pointer"
        />

        {!isMobile ? (
          // Desktop view
          <Box className="flex gap-2">
            <Button
              className="font-bold capitalize"
              onClick={() => navigateToSection("/")}
              color="inherit"
            >
              Home
            </Button>
            <Button className="font-bold capitalize" color="inherit">
              <Link href={"about-us"} prefetch>
                About
              </Link>
            </Button>
            <Button
              onClick={() => navigateToSection("clinic-services")}
              className="font-bold capitalize"
              color="inherit"
            >
              Services
            </Button>
            <Button className="font-bold capitalize" color="inherit">
              Contact
            </Button>
            {isError && (
              <Button
                className="font-bold capitalize"
                color="inherit"
                onClick={() => navigateToSection("signup")}
              >
                Signup
              </Button>
            )}
          </Box>
        ) : (
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Box className="flex gap-2">
          {data && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <Image
                src={dummy_profile}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </IconButton>
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#1E285F",
              fontWeight: "bold",
              padding: "8px 16px",
              display: isMobile ? "none" : "block" // Hide in mobile
            }}
            onClick={() =>
              navigateToSection(
                isError
                  ? "#book_appointment"
                  : `profile/${userId}?tab=appointments&subTab=quick-appointments`
              )
            }
          >
            Request An Appointment
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          width={250}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <List>
            <ListItem onClick={() => navigateToSection("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem onClick={() => navigateToSection("about-us")}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem onClick={() => navigateToSection("clinic-services")}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem onClick={() => navigateToSection("contact")}>
              <ListItemText primary="Contact" />
            </ListItem>
            {isError && (
              <ListItem onClick={() => navigateToSection("signup")}>
                <ListItemText primary="Signup" />
              </ListItem>
            )}
            <ListItem
              onClick={() =>
                navigateToSection(
                  isError
                    ? "#book_appointment"
                    : `profile/${userId}?tab=appointments&subTab=quick-appointments`
                )
              }
            >
              <ListItemText primary="Request An Appointment" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
