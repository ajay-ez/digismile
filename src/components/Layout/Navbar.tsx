"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Image from "next/image";
import { digismileLogoImage, dummy_profile } from "@/assets/images";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useAuthToken from "@/hooks/useAuthToken";

export default function Navbar() {
  const { data, isError } = useGetUserDetailsQuery();
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileVisit = () => {
    navigateToSection(`profile/${userId}?tab=user-profile&subTab=prescription`);
    handleClose();
  };

  const handleChangePassword = () => {
    handleClose();
    router.push(`/profile/${userId}?tab=change-password`);
  };

  const handleLogout = () => {
    handleClose();
    clearAuthToken();
    location.reload();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#1E285F"
      }}
      className="bg-[#1E285F]"
    >
      <Toolbar className="flex justify-between items-center p-4 rounded-3xl">
        <Image
          onClick={() => navigateToSection("/")}
          src={digismileLogoImage}
          height={50}
          alt="digismile"
          className="cursor-pointer"
        />
        <Box className="flex">
          <Button
            onClick={() => navigateToSection("/")}
            className="font-bold capitalize"
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
        <Box className="flex gap-2">
          {data && (
            <IconButton onClick={handleMenuClick}>
              <Image
                src={dummy_profile}
                alt="Profile"
                width={66}
                height={66}
                className="rounded-full cursor-pointer"
              />
            </IconButton>
          )}
          <Button
            variant="contained"
            className="bg-white text-[#1E285F] hover:bg-white font-bold rounded-xl capitalize p-2 px-4"
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
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleProfileVisit}>Visit Profile</MenuItem>
        <MenuItem onClick={handleChangePassword}>Change Password</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
