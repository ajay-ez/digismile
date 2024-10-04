"use client";
import { Box } from "@mui/material";
import FieldInput from "@/components/common/FieldInput";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import React, { ForwardedRef } from "react";
import { requiredCharField } from "@/validations";
import Image from "next/image";
import { doctor } from "@/assets/images";
import OptionsField from "@/components/common/InputFields/OptionsField";
import { city } from "./city";

const LoginSchema = Yup.object().shape({
  city: requiredCharField("City"),
  problem: requiredCharField("Problem")
});

interface QuickAppointmentFormProps {
  // eslint-disable-next-line no-unused-vars
  onSelectCity: (value: any) => void;
}

const QuickAppointmentForm = React.forwardRef(
  (
    props: QuickAppointmentFormProps,
    ref: ForwardedRef<FormikProps<{ city: string; problem: string }>>
  ) => {
    const { onSelectCity } = props;

    const initialLoginValues = {
      city: "dc",
      problem: ""
    };

    const handleSubmit = (values: { city: string; problem: string }) => {
      // eslint-disable-next-line no-console
      console.log(values);
    };

    return (
      <Box className="bg-digiLightBlue rounded-2xl p-12 px-24 mb-4 flex flex-col justify-center items-center ">
        <Image
          src={doctor}
          alt="Doctor"
          height={158}
          width={158}
          className="rounded-full p-2"
        />

        <Formik
          innerRef={ref}
          initialValues={initialLoginValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Box mb={2}>
                <OptionsField
                  options={city}
                  name="city"
                  label="Select City"
                  required
                  handleChange={onSelectCity}
                />
              </Box>
              <Box mb={2}>
                <FieldInput
                  name="problem"
                  type="text"
                  label="Problem"
                  placeholder="Problem.."
                  required
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    );
  }
);

QuickAppointmentForm.displayName = "QuickAppointmentForm";

export default QuickAppointmentForm;
