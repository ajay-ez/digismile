"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button, Typography, Container, Box } from "@mui/material";
import LandingPage from "@/features/LandingPage/LandingPage";

const HomePage: React.FC = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToSignup = () => {
    router.push("/signup");
  };

  return (
    <Box>
      <LandingPage />
    </Box>
    // <Container
    //   maxWidth="sm"
    //   className="flex flex-col items-center justify-center h-screen"
    // >
    //   <Typography variant="h3" className="mb-4 text-center">
    //     Welcome to Our Application!
    //   </Typography>
    //   <Box className="mb-6 text-center">
    //     <Typography variant="h6">
    //       Please login or signup to continue.
    //     </Typography>
    //   </Box>
    //   <Box className="flex space-x-4">
    //     <Button variant="contained" color="primary" onClick={navigateToLogin}>
    //       Login
    //     </Button>
    //     <Button variant="outlined" color="primary" onClick={navigateToSignup}>
    //       Signup
    //     </Button>
    //   </Box>
    // </Container>
  );
};

export default HomePage;
