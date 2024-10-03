"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Button, Typography, Box, Grid } from "@mui/material";
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

const SignupSchema = Yup.object().shape({
  name: requiredCharField("Name"),
  date_of_birth: requiredCharField("Date of Birth"),
  address: requiredCharField("Address"),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  phone_number: contactNumberValidation
});

const SignupPage = () => {
  const router = useRouter();
  const [registerUser, { error, isLoading }] = useRegisterMutation();
  const initialSignupValues: SignupFormValues = {
    name: "",
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
        router.push("/login");
      }
    });
  };

  return (
    <SignupContainer>
      <Container
        maxWidth="md"
        className="p-8 flex justify-center items-center "
      >
        <Box
          mt={8}
          className="overflow-scroll shadow-signup-shadow p-8 rounded-lg bg-signup-child-gradient"
        >
          <Box className="mb-4">
            <Typography variant="h4" component="h1">
              Create an Account
            </Typography>
            <Typography variant="body1" className="text-[#737373]">
              Enter your details below to create your account and get started
            </Typography>
          </Box>
          <Formik
            initialValues={initialSignupValues}
            validationSchema={SignupSchema}
            onSubmit={handleSignup}
          >
            {() => (
              <Form>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box mb={2}>
                      <FieldInput
                        name="name"
                        type="text"
                        label="Name"
                        placeholder="Enter your name"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={2}>
                      <FieldInput
                        name="date_of_birth"
                        type="date"
                        label="Date of Birth"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={2}>
                      <FieldInput
                        name="address"
                        type="text"
                        label="Address"
                        placeholder="Enter your address"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={2}>
                      <FieldInput
                        name="problem"
                        type="text"
                        label="Problem"
                        placeholder="Enter your Problem"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
                    <Box mb={2}>
                      <FieldInput
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={2}>
                      <FieldInput
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    {error && (
                      <Typography className="text-red-500 capitalize my-2 text-center">
                        {error?.data?.message}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="flex justify-between items-center">
                      <Box>
                        <Button
                          type="submit"
                          variant="text"
                          className=" rounded-lg font-bold max-w-md text-black"
                          onClick={() => router.push("/")}
                        >
                          Cancel
                        </Button>
                      </Box>

                      <Button
                        type="submit"
                        variant="contained"
                        className="bg-[#00A1FC9C] rounded-lg font-bold max-w-md  p-2 px-16"
                        size="medium"
                      >
                        {isLoading ? "loading" : "Confirm"}
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <Typography variant="body2" align="center">
                      Already have an account?{" "}
                      <Link href="/login" className="text-blue-900 text-lg">
                        Login
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </SignupContainer>
  );
};

export default SignupPage;
