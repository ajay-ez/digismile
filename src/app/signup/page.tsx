"use client";
import React from "react";
import { Typography, Container, Box } from "@mui/material";
import FieldInput from "@/components/common/FieldInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { emailValidation, passwordValidation } from "@/validations";
import { SignupFormValues } from "@/types";
import DigiSmileLogo from "@/components/icons/DigiSmileLogo";

const SignupSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const SignupPage: React.FC = () => {
  const initialSignupValues: SignupFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Container
      maxWidth="sm"
      className="flex flex-col items-center justify-center h-screen"
    >
      <Box className="flex gap-2 justify-center items-center">
        <DigiSmileLogo />
        <Typography variant="h4" component="h1">
          Signup
        </Typography>
      </Box>
      <Formik
        initialValues={initialSignupValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="w-full">
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
            <Box mb={2}>
              <FieldInput
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                required
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Signup
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignupPage;
