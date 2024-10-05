"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  Typography,
  Box,
  CircularProgress,
  IconButton
} from "@mui/material";
import FieldInput from "@/components/common/FieldInput";
import { passwordValidation } from "@/validations";
import { useChangePasswordMutation } from "@/services/apiServices/profileService";
import { SuccessPopup } from "@/components/common/SuccessPopup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
const PasswordChangeSchema = Yup.object().shape({
  old_password: passwordValidation,
  new_password: passwordValidation
});

interface PasswordChangeFormValues {
  old_password: string;
  new_password: string;
}

interface ErrorResponse {
  message?: string;
}
const isFetchBaseQueryError = (
  error: any
): error is FetchBaseQueryError & { data: ErrorResponse } => {
  return error?.data !== undefined;
};

const PasswordChange = () => {
  const [changePassword, { isLoading, error }] = useChangePasswordMutation();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const router = useRouter();

  const initialPasswordChangeValues: PasswordChangeFormValues = {
    old_password: "",
    new_password: ""
  };
  const handleChangePassword = async (values: PasswordChangeFormValues) => {
    changePassword(values).then((response: any) => {
      if (response?.data?.status_code === 200) {
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
          router.push("/");
        }, 1000);
      }
    });
  };

  return (
    <div className="w-[100%]">
      <div>
        <SuccessPopup
          open={showSuccessPopup}
          onClose={() => setShowSuccessPopup(false)}
          successMessage="Password Changed!"
        />
        <Box className="flex justify-center items-center align-middle">
          <Box className="shadow-signup-shadow p-8 rounded-lg">
            <Box>
              <Box className="mb-4">
                <Typography variant="h4" component="h1" className="text-center">
                  Change Password
                </Typography>
                <Typography
                  variant="body1"
                  className="text-[#737373] text-center"
                >
                  Secure your account with a new password.
                </Typography>
              </Box>
              <Formik
                initialValues={initialPasswordChangeValues}
                validationSchema={PasswordChangeSchema}
                onSubmit={handleChangePassword}
              >
                {() => (
                  <Form>
                    <Box mb={2}>
                      <Box position="relative">
                        <FieldInput
                          name="old_password"
                          type={showOldPassword ? "text" : "password"}
                          label="Old Password"
                          placeholder="Enter your old password"
                          required
                        />
                        <IconButton
                          onClick={() => setShowOldPassword((prev) => !prev)}
                          style={{
                            position: "absolute",
                            right: 0,
                            top: "70%",
                            transform: "translateY(-50%)"
                          }}
                        >
                          {showOldPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </Box>
                    </Box>
                    <Box mb={2}>
                      <Box position="relative">
                        <FieldInput
                          name="new_password"
                          type={showNewPassword ? "text" : "password"}
                          label="New Password"
                          placeholder="Enter your new password"
                          required
                        />
                        <IconButton
                          onClick={() => setShowNewPassword((prev) => !prev)}
                          style={{
                            position: "absolute",
                            right: 0,
                            top: "70%",
                            transform: "translateY(-50%)"
                          }}
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </Box>
                    </Box>

                    {error && (
                      <Typography className="text-red-500 capitalize my-2 text-center">
                        {isFetchBaseQueryError(error)
                          ? error.data?.message
                          : "An unexpected error occurred."}
                      </Typography>
                    )}

                    <Box className="flex justify-center">
                      <Button
                        type="submit"
                        variant="contained"
                        className="bg-[#00A1FC9C] rounded-lg font-bold max-w-md"
                        fullWidth
                      >
                        {isLoading ? <CircularProgress /> : "Change Password"}
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PasswordChange;
