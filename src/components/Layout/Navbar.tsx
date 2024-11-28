"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { digismileLogoImage, dummy_profile } from "@/assets/images";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";
import useAuthToken from "@/hooks/useAuthToken";
import {
  Box,
  Button,
  Flex,
  IconButton,
  List,
  ListItem,
  useMediaQuery
} from "@chakra-ui/react";
import { HEADER_HEIGHT } from "@/utils/constant";

export default function Navbar() {
  const { data, isError } = useGetUserDetailsQuery();
  const router = useRouter();
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [userId, setUserId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // For profile menu
  const { clearAuthToken } = useAuthToken();

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
    if (data?.user_type === "staff") {
      navigateToSection("add-medical-records");
    } else {
      navigateToSection(
        `profile/${userId}?tab=appointments&subTab=quick-appointments`
      );
    }
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
    <Box
      id="header"
      position={"fixed"}
      top={0}
      zIndex={3}
      width={"100%"}
      bg={isMobile ? "brand.100" : "transparent"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        px={8}
        py={4}
      >
        <Image
          onClick={() => navigateToSection("/")}
          src={digismileLogoImage}
          height={60}
          alt="digismile"
        />

        {!isMobile ? (
          // Desktop view
          <Flex alignItems={"center"} gap={8}>
            <Button variant={"header"}>ABOUT</Button>
            <Button
              variant={"header"}
              onClick={() => navigateToSection("clinic-services")}
            >
              SERVICES
            </Button>
            <Button
              variant={"header"}
              onClick={() => navigateToSection("contact-us")}
            >
              CONTACT US
            </Button>
            {isError && (
              <>
                <Button
                  variant={"header"}
                  className="font-bold capitalize text-[1rem]"
                  onClick={() => navigateToSection("signup")}
                >
                  SIGNUP
                </Button>
                <Button
                  variant={"header"}
                  onClick={() => navigateToSection("login")}
                >
                  LOGIN
                </Button>
              </>
            )}
            <Box>
              {data && (
                <IconButton
                  aria-label="profile"
                  onClick={handleProfileMenuClick}
                >
                  <Image
                    src={dummy_profile}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                  />
                </IconButton>
              )}
              {data?.user_type !== "staff" ? (
                <Button
                  variant="appointment"
                  onClick={() =>
                    navigateToSection(
                      isError
                        ? "contact-us"
                        : `profile/${userId}?tab=appointments&subTab=quick-appointments`
                    )
                  }
                >
                  Request Appointment
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#1E285F",
                    // fontWeight: "bold",
                    padding: "8px 16px",
                    display: isMobile ? "none" : "block"
                  }}
                  onClick={() => navigateToSection("add-medical-records")}
                >
                  Add Medical Record
                </Button>
              )}
            </Box>
          </Flex>
        ) : (
          <IconButton
            aria-label="menu"
            color="white.800"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Flex>

      {/* Profile Menu for profile image click */}
      {/* <Menu
        onClose={handleCloseProfileMenu}
      >
        <MenuItem onClick={handleProfileVisit}>Visit Profile</MenuItem>
        <MenuItem onClick={handleChangePassword}>Change Password</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu> */}

      {/* Drawer for mobile menu */}
      {isMobile && drawerOpen && (
        <Box
          border={"1px red solid"}
          width={"100%"}
          position={"fixed"}
          display={"inherit"}
          top={HEADER_HEIGHT}
          role="presentation"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <List>
            <ListItem
              className="cursor-pointer "
              onClick={() => navigateToSection("/")}
            >
              <h1 className="text-[1rem] text-digiDarkBlue font-bold">Home</h1>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBlue"
              onClick={() => navigateToSection("about-us")}
            >
              <h1 className="text-[1rem] text-digiDarkBluek font-bold">
                About Us
              </h1>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBluek"
              onClick={() => navigateToSection("clinic-services")}
            >
              <h1 className="text-[1rem] text-digiDarkBluek font-bold">
                Services
              </h1>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBluek"
              onClick={() => navigateToSection("contact-us")}
            >
              <h1 className="text-[1rem] text-digiDarkBluek font-bold">
                Contact Us
              </h1>
            </ListItem>

            {isError && (
              <>
                <ListItem
                  className="cursor-pointer text-[1rem] text-digiDarkBlue"
                  onClick={() => navigateToSection("signup")}
                >
                  <h1 className="text-[1rem] text-digiDarkBlue font-bold">
                    Signup
                  </h1>
                </ListItem>
                <ListItem
                  className="cursor-pointer text-[1rem] text-digiDarkBlue"
                  onClick={() => navigateToSection("login")}
                >
                  <h1 className="text-[1rem] text-digiDarkBlue font-bold">
                    Login
                  </h1>
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
              <h1 className="text-[1rem] text-digiDarkBlue font-bold">
                Request Appointment
              </h1>
            </ListItem>
          </List>
        </Box>
      )}
    </Box>
  );
}
