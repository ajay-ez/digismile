"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { digismileLogoImage, dummy_profile, logo } from "@/assets/images";
import { useRouter } from "next/navigation";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";
import useAuthToken from "@/hooks/useAuthToken";
import {
  Box,
  Button,
  Flex,
  IconButton,
  List,
  ListItem,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { HEADER_HEIGHT } from "@/utils/constant";
import { useSelector } from "react-redux";
import { getHeaderStatus } from "@/redux/SharedSlice";

export default function Navbar() {
  const { data, isError } = useGetUserDetailsQuery();
  const router = useRouter();
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  const [userId, setUserId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const headerStatus = useSelector(getHeaderStatus);

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
      className={`header-container ${isMobile ? "mobile-header" : "desktop-header"} ${headerStatus === true ? "sticky-header" : ""}`}
      position={"fixed"}
      top={0}
      zIndex={3}
      width={"100%"}
      bg={"transparent"}
      borderBottom={isMobile ? "1px white solid" : "unset"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        px={8}
        py={2}
      >
        <Image
          id="header-sticky-image"
          onClick={() => navigateToSection("/")}
          src={headerStatus === true ? logo : digismileLogoImage}
          width={110}
          height={70}
          alt="digismile"
          style={{ cursor: "pointer" }}
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
            color={headerStatus === true ? "brand.100" : "white.800"}
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
          backgroundColor={headerStatus === true ? "#963f36" : "#faf7f5"}
          color={headerStatus === true ? "#fff" : "#963f36"}
          width={"100%"}
          position={"fixed"}
          display={"inherit"}
          top={HEADER_HEIGHT}
          role="presentation"
          onClick={() => setDrawerOpen(!drawerOpen)}
          padding={8}
          className="responsive-header"
        >
          <List
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            gap={4}
          >
            <ListItem
              className="cursor-pointer "
              onClick={() => navigateToSection("/")}
              marginY={2}
            >
              <Text as={"h4"} fontWeight={"bold"}>
                Home
              </Text>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBlue"
              onClick={() => navigateToSection("about-us")}
              marginY={2}
            >
              <Text as={"h4"} fontWeight={"bold"}>
                About Us
              </Text>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBluek"
              onClick={() => navigateToSection("clinic-services")}
              marginY={2}
            >
              <Text as={"h4"} fontWeight={"bold"}>
                Services
              </Text>
            </ListItem>
            <ListItem
              className="cursor-pointer text-[1rem] text-digiDarkBluek"
              onClick={() => navigateToSection("contact-us")}
              marginY={2}
            >
              <Text as={"h4"} fontWeight={"bold"}>
                Contact Us
              </Text>
            </ListItem>

            {isError && (
              <>
                <ListItem
                  onClick={() => navigateToSection("signup")}
                  width={"fit-content"}
                  background={"#963f36"}
                  color={"#fff"}
                  padding={".7rem 5rem"}
                  borderRadius={"lg"}
                  border={"1px #faf7f5 solid"}
                >
                  <Text as={"h4"} fontWeight={"bold"}>
                    Signup
                  </Text>
                </ListItem>
                <ListItem
                  onClick={() => navigateToSection("login")}
                  width={"fit-content"}
                  background={"#fff"}
                  color={"#963f36"}
                  padding={".7rem 5.3rem"}
                  borderRadius={"lg"}
                  border={
                    headerStatus === true ? "1px #fff solid" : "1px black solid"
                  }
                >
                  <Text as={"h4"} fontWeight={"bold"}>
                    Login
                  </Text>
                </ListItem>
              </>
            )}
            {/* <ListItem
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
            </ListItem> */}
          </List>
        </Box>
      )}
    </Box>
  );
}
