import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FieldInput from "@/components/common/FieldInput";
import { Box, Button, Grid } from "@mui/material";
import {
  requiredCharField,
  contactNumberValidation,
  booleanValidation,
  emailValidation
} from "@/validations";
import { useUnAuthUserAppointmentMutation } from "@/services/apiServices/appointmentService";

const validationSchema = Yup.object({
  first_name: requiredCharField("First Name"),
  last_name: requiredCharField("Last Name"),
  phone_number: contactNumberValidation,
  problem: requiredCharField("Health Problem"),
  date_of_birth: Yup.date().required("Date of Birth is required").nullable(),
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
  privacyPolicy: false
};

const AppointmentForm = () => {
  const [createBooking, { isLoading }] = useUnAuthUserAppointmentMutation();

  const handleSubmit = (values: any) => {
    delete values.privacyPolicy;
    (values.start_time = "10:00:00"), (values.end_time = "11:00:00");
    createBooking(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FieldInput label="First Name" name="first_name" type="text" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FieldInput label="Last Name" name="last_name" type="text" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FieldInput label="Contact" name="phone_number" type="text" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FieldInput label="Email" name="email" type="text" />
            </Grid>

            <Grid item xs={12} md={6}>
              <FieldInput
                label="Date of Birth"
                name="date_of_birth"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FieldInput
                label="Appointment Date"
                name="appointment_date"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FieldInput label="Problem" name="problem" type="text" />
            </Grid>
            <Grid item xs={12} md={6}>
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
                  className="text-red-600 mt-1"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mt={2} className="flex justify-center">
                <Button
                  className="bg-[#065084] text-lg text-white rounded-lg p-2 px-8 capitalize hover:bg-blue-800"
                  type="submit"
                >
                  {isLoading ? "Confirming..." : "Confirm Appointment"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AppointmentForm;
