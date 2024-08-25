"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Typography, Box } from "@mui/material";
import FieldInput from "@/components/common/FieldInput";
import { emailValidation, passwordValidation } from "@/validations";
import { LoginFormValues } from "@/types";
import SignupContainer from "@/components/common/SignupContainer";
import Link from "next/link";

const LoginSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation
});

const LoginPage = () => {
  const router = useRouter();

  const initialLoginValues: LoginFormValues = {
    email: "",
    password: ""
  };

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem("token", token);
        router.push("/");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <SignupContainer>
      <Box className="flex justify-center items-center align-middle">
        <Box className="shadow-signup-shadow p-8 rounded-lg">
          <Box>
            <Box className="mb-4">
              <Typography variant="h4" component="h1" className="text-center">
                Welcome Back
              </Typography>
              <Typography
                variant="body1"
                className="text-[#737373] text-center"
              >
                Glad to See You Again!
              </Typography>
            </Box>
            <Formik
              initialValues={initialLoginValues}
              validationSchema={LoginSchema}
              onSubmit={handleLogin}
            >
              {() => (
                <Form>
                  <Box mb={2}>
                    <FieldInput
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      required
                    />
                  </Box>
                  <Box mb={2}>
                    <FieldInput
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="Enter your password"
                      required
                    />
                  </Box>
                  <Box className="flex justify-center">
                    <Button
                      type="submit"
                      variant="contained"
                      className="bg-[#00A1FC9C] rounded-lg font-bold max-w-md"
                      fullWidth
                    >
                      Login
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
          <Typography variant="body2" align="center" className="mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-900 text-lg">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </SignupContainer>
  );
};

export default LoginPage;
