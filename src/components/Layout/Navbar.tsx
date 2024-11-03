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
  Menu,
  MenuItem,
  Typography
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // For profile menu
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

  const handleProfileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorEl(null);
  };

  const handleProfileVisit = () => {
    navigateToSection(`profile/${userId}?tab=user-profile&subTab=prescription`);
    handleCloseProfileMenu();
  };

  const handleChangePassword = () => {
    navigateToSection(`profile/${userId}?tab=change-password`);
    handleCloseProfileMenu();
  };

  const handleLogout = () => {
    clearAuthToken();
    location.reload();
    handleCloseProfileMenu();
  };

  return (
    <AppBar position="sticky" className="bg-footer-blue-gradient">
      <Toolbar className="flex justify-between items-center p-4  rounded-3xl">
        <Image
          onClick={() => navigateToSection("/")}
          src={digismileLogoImage}
          height={90}
          alt="digismile"
          className="cursor-pointer"
        />

        {!isMobile ? (
          // Desktop view
          <Box className="flex gap-2">
            <Button
              className="font-bold capitalize text-[1rem]"
              onClick={() => navigateToSection("/")}
              color="inherit"
            >
              Home
            </Button>
            <Button
              className="font-bold capitalize text-[1rem]"
              color="inherit"
            >
              <Link href={"about-us"} prefetch>
                About
              </Link>
            </Button>
            <Button
              onClick={() => navigateToSection("clinic-services")}
              className="font-bold capitalize text-[1rem]"
              color="inherit"
            >
              Services
            </Button>
            <Button
              onClick={() => navigateToSection("contact-us")}
              className="font-bold capitalize text-[1rem]"
              color="inherit"
            >
              Contact Us
            </Button>

            {isError && (
              <>
                <Button
                  className="font-bold capitalize text-[1rem]"
                  color="inherit"
                  onClick={() => navigateToSection("signup")}
                >
                  Signup
                </Button>
                <Button
                  className="font-bold capitalize text-[1rem]"
                  color="inherit"
                  onClick={() => navigateToSection("login")}
                >
                  Login
                </Button>
              </>
            )}
          </Box>
        ) : (
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Box className="flex gap-2">
          {data && (
            <IconButton onClick={handleProfileMenuClick}>
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
            className="capitalize hover:bg-white"
            sx={{
              backgroundColor: "white",
              color: "#1E285F",
              fontWeight: "bold",
              padding: "8px 16px",
              display: isMobile ? "none" : "block"
            }}
            onClick={() =>
              navigateToSection(
                isError
                  ? "contact-us"
                  : `profile/${userId}?tab=appointments&subTab=quick-appointments`
              )
            }
          >
            Request An Appointment
          </Button>
        </Box>
      </Toolbar>

      {/* Profile Menu for profile image click */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseProfileMenu}
      >
        <MenuItem onClick={handleProfileVisit}>Visit Profile</MenuItem>
        <MenuItem onClick={handleChangePassword}>Change Password</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

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
            <ListItem
              className="cursor-pointer "
              onClick={() => navigateToSection("/")}
            >
              <Typography
                variant="subtitle1"
                className="text-[1rem] text-digiDarkBlue font-bold"
              >
                Home
              </Typography>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBlue"
              onClick={() => navigateToSection("about-us")}
            >
              <Typography
                variant="subtitle1"
                className="text-[1rem] text-digiDarkBluek font-bold"
              >
                About Us
              </Typography>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBluek"
              onClick={() => navigateToSection("clinic-services")}
            >
              <Typography
                variant="subtitle1"
                className="text-[1rem] text-digiDarkBluek font-bold"
              >
                Services
              </Typography>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBluek"
              onClick={() => navigateToSection("contact-us")}
            >
              <Typography
                variant="subtitle1"
                className="text-[1rem] text-digiDarkBluek font-bold"
              >
                Contact Us
              </Typography>
            </ListItem>

            {isError && (
              <>
                <ListItem
                  className="cursor-pointer text-[1rem] text-digiDarkBlue"
                  onClick={() => navigateToSection("signup")}
                >
                  <Typography
                    variant="subtitle1"
                    className="text-[1rem] text-digiDarkBlue font-bold"
                  >
                    Signup
                  </Typography>
                </ListItem>
                <ListItem
                  className="cursor-pointer text-[1rem] text-digiDarkBlue"
                  onClick={() => navigateToSection("login")}
                >
                  <Typography
                    variant="subtitle1"
                    className="text-[1rem] text-digiDarkBlue font-bold"
                  >
                    Login
                  </Typography>
                </ListItem>
              </>
            )}
            <ListItem
              onClick={() =>
                navigateToSection(
                  isError
                    ? "contact-us"
                    : `profile/${userId}?tab=appointments&subTab=quick-appointments`
                )
              }
            >
              <Typography
                variant="subtitle1"
                className="text-[1rem] text-digiDarkBlue font-bold"
              >
                Request An Appointment
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
