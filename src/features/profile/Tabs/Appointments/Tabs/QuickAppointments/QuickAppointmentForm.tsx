import FieldInput from "@/components/common/FieldInput";
import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { requiredCharField } from "@/validations";
import Image from "next/image";
import { testimonial_3 } from "@/assets/images";
const LoginSchema = Yup.object().shape({
  city: requiredCharField("City"),
  problem: requiredCharField("Problem")
});
export const QuickAppointmentForm = () => {
  const initialLoginValues = {
    city: "",
    problem: ""
  };
  const handleSubmit = () => {};

  return (
    <Box className="bg-digiLightBlue rounded-2xl p-12 px-24 mb-4 flex flex-col justify-center items-center ">
      <Image
        height={80}
        width={80}
        src={testimonial_3}
        alt="Doctor Mahmood"
        className="rounded-2xl"
      />
      <Formik
        initialValues={initialLoginValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Box mb={2}>
              <FieldInput
                name="city"
                type="text"
                label="City"
                placeholder="City"
                required
              />
            </Box>
            <Box mb={2}>
              <FieldInput
                name="problem"
                type="text"
                label="Problem"
                placeholder="Proble .."
                required
              />
            </Box>
            <Box className="flex justify-center">
              <Button
                type="submit"
                variant="contained"
                className="bg-green-400 hover:bg-green-500 rounded-lg font-bold max-w-md capitalize"
                fullWidth
              >
                Request Now
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
