"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Image from "next/image";
import { digismileLogoImage, dummy_profile } from "@/assets/images";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#1E285F"
      }}
      className="bg-[#1E285F]"
    >
      <Toolbar className="flex justify-between items-center p-2">
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
          <Button
            // onClick={() => navigateToSection("about-us")}
            className="font-bold capitalize"
            color="inherit"
          >
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
          <Button
            className="font-bold capitalize"
            color="inherit"
            onClick={() => navigateToSection("signup")}
          >
            Signup
          </Button>
        </Box>
        <Box className="flex gap-2">
          <Image
            src={dummy_profile}
            alt="Profile"
            width={66}
            height={66}
            className="rounded-full"
          />
          <Button
            variant="contained"
            className="bg-white text-[#1E285F] hover:bg-white font-bold rounded-xl capitalize"
          >
            Book Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
