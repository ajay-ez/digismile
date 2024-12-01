"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

import FieldInput from "@/components/common/FieldInput";
import {
  emailValidation,
  passwordValidation,
  requiredCharField,
  contactNumberValidation
} from "@/validations";
import { SignupFormValues } from "@/types";
import SignupContainer from "@/components/common/SignupContainer";
import Link from "next/link";
import { useRegisterMutation } from "@/services/apiServices/authService";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SuccessPopup } from "@/components/common/SuccessPopup";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Flex,
  Grid,
  IconButton
} from "@chakra-ui/react";
const SignupSchema = Yup.object().shape({
  first_name: requiredCharField("First Name"),
  last_name: requiredCharField("Last Name"),
  date_of_birth: requiredCharField("Date of Birth"),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  phone_number: contactNumberValidation
});

interface ErrorResponse {
  message?: string;
}

const isFetchBaseQueryError = (
  error: any
): error is FetchBaseQueryError & { data: ErrorResponse } => {
  return error?.data !== undefined;
};

const SignupPage = () => {
  const router = useRouter();
  const [registerUser, { error, isLoading }] = useRegisterMutation();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialSignupValues: SignupFormValues = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    problem: ""
  };

  const handleSignup = async (values: SignupFormValues) => {
    delete values.confirmPassword;

    registerUser(values).then((response) => {
      if (response.data?.status_code === 201) {
        setShowSuccessPopup(true);

        router.push("/login");
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 2000);
      }
    });
  };

  return (
    <Flex
      maxW={{ base: "100%", md: "max-content" }}
      w="100%"
      alignItems="start"
      justifyContent="center"
      p={{ base: "25px", md: "0px" }}
      flexDirection="column"
      border={"1px red solid"}
    >
      <Box
        mt={8}
        className="overflow-scroll shadow-signup-shadow p-8 rounded-lg bg-signup-child-gradient"
      >
        <Box className="mb-4">
          <h1>Create an Account</h1>
          <h1 className="text-[#737373]">
            Enter your details below to create your account and get started
          </h1>
        </Box>
        <Formik
          initialValues={initialSignupValues}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {() => (
            <Form>
              <Grid>
                <Grid>
                  <Box mb={2}>
                    <FieldInput
                      name="first_name"
                      type="text"
                      label="First Name"
                      placeholder="Enter your name"
                      required
                    />
                  </Box>
                </Grid>
                <Grid>
                  <Box mb={2}>
                    <FieldInput
                      name="last_name"
                      type="text"
                      label="Last Name"
                      placeholder="Enter your name"
                      required
                    />
                  </Box>
                </Grid>
                <Grid>
                  <Box mb={2}>
                    <FieldInput
                      name="date_of_birth"
                      type="date"
                      label="Date of Birth"
                      required
                    />
                  </Box>
                </Grid>
                {/* <Grid >
                    <Box mb={2}>
                      <FieldInput
                        name="address"
                        type="text"
                        label="Address"
                        placeholder="Enter your address"
                      />
                    </Box>
                  </Grid> */}
                <Grid>
                  <Box mb={2}>
                    <FieldInput
                      name="problem"
                      type="text"
                      label="Reason For Visit"
                      placeholder="Enter Reason For Visit"
                    />
                  </Box>
                </Grid>
                <Grid>
                  <Box mb={2}>
                    <FieldInput
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      required
                    />
                  </Box>
                </Grid>
                <Grid>
                  <Box mb={2}>
                    <FieldInput
                      name="phone_number"
                      type="tel"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      required
                    />
                  </Box>
                </Grid>
                <Grid>
                  <Box mb={2}>
                    <Box position="relative">
                      <FieldInput
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        placeholder="Enter your password"
                        required
                      />
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prev) => !prev)}
                        style={{
                          position: "absolute",
                          right: 0,
                          top: "70%",
                          transform: "translateY(-50%)"
                        }}
                      >
                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
                <Grid>
                  <Box mb={2}>
                    <Box position="relative">
                      <FieldInput
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        required
                      />
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        style={{
                          position: "absolute",
                          right: 0,
                          top: "70%",
                          transform: "translateY(-50%)"
                        }}
                      >
                        {/* {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )} */}
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
                <Grid>
                  {error && (
                    <h1 className="text-red-500 capitalize my-2 text-center">
                      {isFetchBaseQueryError(error) && error.data?.message
                        ? error.data.message
                        : "An unexpected error occurred."}
                    </h1>
                  )}
                </Grid>
                <Grid>
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Button
                        type="submit"
                        variant="text"
                        className="rounded-lg font-bold max-w-md text-black"
                        onClick={() => router.push("/")}
                      >
                        Cancel
                      </Button>
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      className="bg-[#00A1FC9C] rounded-lg font-bold max-w-md p-2 px-16 capitalize"
                      size="medium"
                    >
                      {isLoading ? <CircularProgress /> : "Confirm"}
                    </Button>
                  </Box>
                </Grid>
                <Grid>
                  <h1>
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-900 text-lg">
                      Login
                    </Link>
                  </h1>
                </Grid>
                <Grid>
                  <h1 className="text-center">
                    <Link
                      href="/"
                      className="text-blue-900 text-lg text-center"
                    >
                      Continue Without Registration
                    </Link>
                  </h1>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default SignupPage;
