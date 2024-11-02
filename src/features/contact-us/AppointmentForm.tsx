"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FieldInput from "@/components/common/FieldInput";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import {
  requiredCharField,
  contactNumberValidation,
  booleanValidation,
  emailValidation
} from "@/validations";
import { useUnAuthUserAppointmentMutation } from "@/services/apiServices/appointmentService";
import { SuccessPopup } from "@/components/common/SuccessPopup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OptionsField from "@/components/common/InputFields/OptionsField";
import { city } from "../profile/Tabs/Appointments/Tabs/QuickAppointments/city";

const validationSchema = Yup.object({
  first_name: requiredCharField("First Name"),
  last_name: requiredCharField("Last Name"),
  phone_number: contactNumberValidation,
  problem: requiredCharField("Reason for visit"),
  appointment_date: Yup.date()
    .required("Appointment Date is required")
    .nullable(),
  email: emailValidation,
  privacyPolicy: booleanValidation
});

const initialValues = {
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  problem: "",
  date_of_birth: "",
  appointment_date: "",
  city: "dc",
  privacyPolicy: false
};

const AppointmentForm = () => {
  const [createBooking, { isLoading }] = useUnAuthUserAppointmentMutation();
  const router = useRouter();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleSubmit = (values: any) => {
    delete values.privacyPolicy;
    (values.start_time = "10:00:00"), (values.end_time = "11:00:00");
    createBooking(values).then((response) => {
      if (response.data?.status_code === 201) {
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
          router.push("/login");
        }, 3000);
      }
    });
  };
  const onSelectCity = () => {};
  return (
    <>
      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        successMessage="Appointment requested!"
        subMessage="Please login to track details!"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <FieldInput label="First Name" name="first_name" type="text" />
              </Grid>
              <Grid item xs={12} md={4}>
                <FieldInput label="Last Name" name="last_name" type="text" />
              </Grid>
              <Grid item xs={12} md={4}>
                <FieldInput
                  label="Contact Number"
                  name="phone_number"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FieldInput label="Email" name="email" type="text" />
              </Grid>

              <Grid item xs={12} md={4}>
                <FieldInput
                  label="Date of Birth"
                  name="date_of_birth"
                  type="date"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FieldInput
                  label="Appointment Date"
                  name="appointment_date"
                  type="date"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <OptionsField
                  options={city}
                  name="city"
                  label="Location"
                  handleChange={onSelectCity}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <FieldInput
                  label="Reason For Visit"
                  name="problem"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex flex-col" alignItems="center">
                  <Field name="privacyPolicy">
                    {({ field }: { field: any; meta: any }) => (
                      <Box display="flex" alignItems="center">
                        <input
                          type="checkbox"
                          {...field}
                          checked={field.value}
                          id="privacyPolicy"
                        />
                        <label
                          htmlFor="privacyPolicy"
                          style={{ marginLeft: "8px" }}
                        >
                          I agree to the Privacy Policy
                        </label>
                      </Box>
                    )}
                  </Field>
                  <ErrorMessage
                    name="privacyPolicy"
                    component="div"
                    className="text-red-400 mt-1"
                  />
                </Box>
              </Grid>

              <Typography className="text-center text-sm mx-8">
                Your Appointment will be Confirmed once Slot is Available
              </Typography>

              <Grid item xs={12}>
                <Box mt={2} className="flex justify-center">
                  <Button
                    className="bg-[#045084] text-lg text-white rounded-lg p-2 px-8 capitalize hover:bg-blue-800"
                    type="submit"
                  >
                    {isLoading ? (
                      <>
                        Requesting..
                        <CircularProgress />
                      </>
                    ) : (
                      "Request Appointment"
                    )}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AppointmentForm;
