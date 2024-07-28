"use client";

import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Container, Button, Typography, Box } from "@mui/material";

import FieldInput from "@/components/common/FieldInput";
import { emailValidation, passwordValidation } from "@/validations";
import { LoginFormValues } from "@/types";
import DigismileLogo from "@/components/icons/DigiSmileLogo";

const LoginSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

const LoginPage = () => {
  const initialLoginValues: LoginFormValues = {
    email: "",
    password: "",
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Box className="flex gap-2 justify-center items-center">
          <DigismileLogo />
          <Typography variant="h4" component="h1">
            Login
          </Typography>
        </Box>
        <Formik
          initialValues={initialLoginValues}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default LoginPage;
