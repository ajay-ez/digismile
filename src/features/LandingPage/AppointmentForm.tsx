// BookAppointmentForm.tsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FieldInput from "@/components/common/FieldInput";
import { Box, Button, Grid } from "@mui/material";
import {
  requiredCharField,
  contactNumberValidation,
  booleanValidation,
} from "@/validations";

const validationSchema = Yup.object({
  firstName: requiredCharField("First Name"),
  lastName: requiredCharField("Last Name"),
  contact: contactNumberValidation,
  problem: requiredCharField("Health Problem"),
  dob: Yup.date().required("Date of Birth is required").nullable(),
  privacyPolicy: booleanValidation,
});

const initialValues = {
  firstName: "",
  lastName: "",
  contact: "",
  problem: "",
  dob: "",
  privacyPolicy: false,
};

const AppointmentForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FieldInput label="First Name" name="firstName" type="text" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FieldInput label="Last Name" name="lastName" type="text" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FieldInput label="Contact" name="contact" type="text" />
            </Grid>

            <Grid item xs={12} md={6}>
              <FieldInput label="Date of Birth" name="dob" type="date" />
            </Grid>
            <Grid item xs={12} md={12}>
              <FieldInput label="Problem" name="problem" type="text" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
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
                  className="bg-black text-lg text-white rounded-lg p-2 px-8 capitalize hover:bg-gray-800"
                  type="submit"
                >
                  Confirm Appointment
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
