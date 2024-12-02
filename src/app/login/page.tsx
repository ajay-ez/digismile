"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldInput from "@/components/common/FieldInput";
import { emailValidation, passwordValidation } from "@/validations";
import { LoginFormValues } from "@/types";
import Link from "next/link";
import { useLoginMutation } from "@/services/apiServices/authService";
import useAuthToken from "@/hooks/useAuthToken";
import { useRouter } from "next/navigation";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SuccessPopup } from "@/components/common/SuccessPopup";
import Image from "next/image";
import { login_image } from "@/assets/images";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  IconButton,
  Spinner,
  Text
} from "@chakra-ui/react";
import FormField from "@/components/common/FormFields";
import PasswordField from "@/components/common/PasswordField";

const LoginSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation
});

interface ErrorResponse {
  message?: string;
}

const isFetchBaseQueryError = (
  error: any
): error is FetchBaseQueryError & { data: ErrorResponse } => {
  return error?.data !== undefined;
};

const LoginPage = () => {
  const [userLogin, { isLoading, error }] = useLoginMutation();
  const router = useRouter();
  const { setAuthToken } = useAuthToken();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const initialLoginValues: LoginFormValues = {
    email: "",
    password: ""
  };

  const handleLogin = async (
    values: LoginFormValues,
    setSubmitting: (data: boolean) => void
  ) => {
    userLogin(values).then((response: any) => {
      console.log("response", response);
      // if (response?.data?.status_code === 200) {
      //   setAuthToken(response.data);
      //   setShowSuccessPopup(true);

      //   setTimeout(() => {
      //     setShowSuccessPopup(false);
      //     router.push("/");
      //   }, 1000);
      // }
    });
  };

  console.log("error", error);
  console.log("error2", isFetchBaseQueryError(error));

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
        width={"500px"}
        px={16}
        py={8}
        borderRadius={"sm"}
        boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
      >
        <Text as={"h1"} mb="1rem" textAlign={"center"}>
          Sign In
        </Text>
        <Flex
          zIndex="2"
          direction="column"
          w={"100%"}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          mb={{ base: "20px", md: "auto" }}
        >
          <Formik
            initialValues={initialLoginValues}
            validationSchema={LoginSchema}
            onSubmit={(form, { setSubmitting }) => {
              handleLogin(form, setSubmitting);
            }}
          >
            {({ errors, touched, isSubmitting }: any) => (
              <Form>
                <FormField
                  label="Email address*"
                  name="email"
                  type="text"
                  placeholder="mail@trellis.com"
                  disabled={isSubmitting}
                  error={errors.email}
                  touched={touched.email}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <PasswordField
                  label="Password*"
                  name="password"
                  placeholder="Min. 8 characters"
                  disabled={isSubmitting}
                  error={errors.password}
                  touched={touched.password}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <Button
                  type="submit"
                  variant="authentication"
                  w="100%"
                  isDisabled={isSubmitting}
                >
                  Sign In {isSubmitting && <Spinner ml={"4"} />}
                </Button>
                <Text
                  mt={2}
                  as={"h5"}
                  textAlign={"center"}
                  cursor={"pointer"}
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  Don&apos;t have an account? Sign UP
                </Text>
                {error && (
                  <Text as={"h5"}>
                    {isFetchBaseQueryError(error)
                      ? error.data?.message
                      : "An unexpected error occurred."}
                  </Text>
                )}
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
