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
  IconButton,
  Text
} from "@chakra-ui/react";
import FormField from "@/components/common/FormFields";
import FormCalendar from "@/components/common/FormCalender";
import FormPhone from "@/components/common/FormPhone";
import PasswordField from "@/components/common/PasswordField";
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
      height={"100vh"}
      width={"100vw"}
      alignItems="center"
      justifyContent="center"
      p={2}
    >
      <Flex
        flexDir={"column"}
        background={"#fff"}
        color={"black.200"}
        width={"auto"}
        px={16}
        py={8}
        maxWidth={"auto"}
        borderRadius={"sm"}
        boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
        textAlign={"center"}
      >
        <Box mb={4}>
          <Text as={"h1"}>Create an account</Text>
          <Text as={"h5"}>
            Enter your details below to create your account and get started
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={"100%"}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          mb={{ base: "20px", md: "auto" }}
          maxH={"50vh"}
          overflow={"auto"}
          paddingRight={"1rem"}
          className="scroll"
        >
          <Formik
            initialValues={initialSignupValues}
            validationSchema={SignupSchema}
            onSubmit={handleSignup}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <FormField
                  label="First Name*"
                  name="first_name"
                  type="text"
                  placeholder="Enter your first name"
                  disabled={isSubmitting}
                  error={errors.first_name}
                  touched={touched.first_name}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormField
                  label="Last Name*"
                  name="last_name"
                  type="text"
                  placeholder="Enter your last name"
                  disabled={isSubmitting}
                  error={errors.last_name}
                  touched={touched.last_name}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormField
                  label="Reason For Visit"
                  name="problem"
                  type="text"
                  placeholder="Enter Reason For Visit"
                  disabled={isSubmitting}
                  error={errors.problem}
                  touched={touched.problem}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormField
                  label="Email*"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  error={errors.email}
                  touched={touched.email}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormPhone
                  label="Phone Number*"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                  error={errors.phone_number}
                  touched={touched.phone_number}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <PasswordField
                  label="Password*"
                  name="password"
                  placeholder="Enter your password"
                  disabled={isSubmitting}
                  error={errors.password}
                  touched={touched.password}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <PasswordField
                  label="Confirm Password*"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  disabled={isSubmitting}
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <Grid>
                  {error && (
                    <h1 className="text-red-500 capitalize my-2 text-center">
                      {isFetchBaseQueryError(error) && error.data?.message
                        ? error.data.message
                        : "An unexpected error occurred."}
                    </h1>
                  )}
                </Grid>
                <Button type="submit" variant="authentication">
                  {isLoading ? <CircularProgress /> : "Confirm"}
                </Button>
                <Text
                  mt={2}
                  as={"h5"}
                  textAlign={"center"}
                  cursor={"pointer"}
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Already have an account? Login
                </Text>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignupPage;
