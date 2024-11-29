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
import { Box, Button, CircularProgress, IconButton } from "@chakra-ui/react";

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
  const [showPassword, setShowPassword] = useState(false);

  const initialLoginValues: LoginFormValues = {
    email: "",
    password: ""
  };

  const handleLogin = async (values: LoginFormValues) => {
    userLogin(values).then((response: any) => {
      if (response?.data?.status_code === 200) {
        setAuthToken(response.data);
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
          router.push("/");
        }, 1000);
      }
    });
  };

  return (
    <div className="flex justify-center  border-red-600 p-8 ">
      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        successMessage="Success!"
      />
      <div className="flex bg-gray-200   mx-8   gap-8 items-center rounded-3xl">
        <div className="w-[40%] ml-6 hidden md:block">
          <Image
            src={login_image}
            alt="loginImage"
            className=" w-[500px] h-[80vh] rounded-3xl  "
          />
        </div>
        <Box className="flex justify-center items-center align-middle bg-gray-200 rounded-3xl p-8">
          <Box className="  p-8 rounded-lg">
            <Box>
              <Box className="mb-4">
                <h1 className="text-center">
                  Welcome Back
                </h1>
                <h1
                  className="text-[#737373] text-center"
                >
                  Glad to See You Again!
                </h1>
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

                    {error && (
                      <h1 className="text-red-500 capitalize my-2 text-center">
                        {isFetchBaseQueryError(error)
                          ? error.data?.message
                          : "An unexpected error occurred."}
                      </h1>
                    )}

                    <Box className="flex justify-center">
                      <Button
                        type="submit"
                        variant="contained"
                        className="bg-[#00A1FC9C] rounded-lg font-bold max-w-md"
                        // fullWidth
                      >
                        {isLoading ? <CircularProgress /> : "Login"}
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
            <h1 className="mt-4">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-900 text-lg">
                Sign up
              </Link>
            </h1>

            <h1 className="text-center mt-2">
              <Link href="/" className="text-blue-900 text-lg text-center mt-2">
                Continue Without Account 
              </Link>
            </h1>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
