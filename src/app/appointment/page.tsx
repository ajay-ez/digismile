"use client";

import DatePickerComponent from "@/components/common/Calender";
import FormField from "@/components/common/FormFields";
import { Box, Button, Flex, Spinner, useMediaQuery } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import AppointmentCard from "./Card";
import FormPhone from "@/components/common/FormPhone";
import FormSelect from "@/components/common/FormMenu";
import appointmentSchema from "@/validations/schema/AppointmentFormSchema";

const initialFormValues = {
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  appointment_date: "",
  city: "",
  problem: ""
};

const BookAppointment = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  const handleLogin = async (
    values: any,
    // eslint-disable-next-line no-unused-vars
    setSubmitting: (data: boolean) => void
  ) => {
    console.log(values);
  };

  return (
    <Box className="home-section">
      <Formik
        initialValues={initialFormValues}
        validationSchema={appointmentSchema}
        onSubmit={(form, { setSubmitting }) => {
          handleLogin(form, setSubmitting);
        }}
      >
        {({ errors, touched, isSubmitting }: any) => (
          <Form>
            <Flex
              className="responsive-footer-section appointment-form-section"
              justifyContent={"center"}
              background={"#fff"}
              color={"#000"}
              gap={10}
              flexWrap={isMobile ? "wrap" : "nowrap"}
            >
              <Flex width={"100%"} flexDir={"column"} p={4}>
                <FormField
                  label="First Name*"
                  name="first_name"
                  type="text"
                  placeholder="Enter your first name"
                  disabled={isSubmitting}
                  error={errors.first_name}
                  touched={touched.first_name}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormField
                  label="Last Name*"
                  name="last_name"
                  type="text"
                  placeholder="Enter your last name"
                  disabled={isSubmitting}
                  error={errors.last_name}
                  touched={touched.last_name}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormPhone
                  label="Phone Number*"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                  error={errors.phone_number}
                  touched={touched.phone_number}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormField
                  label="Email address*"
                  name="email"
                  type="text"
                  placeholder="mail@trellis.com"
                  disabled={isSubmitting}
                  error={errors.email}
                  touched={touched.email}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormSelect
                  label="Clinic Location*"
                  name="city"
                  disabled={isSubmitting}
                  options={[
                    {
                      label: "Option 1",
                      value: "option1"
                    }
                  ]}
                  placeholder="Select option"
                  error={errors.city}
                  touched={touched.city}
                  styles={{ marginBottom: "1.5rem" }}
                />
                <FormSelect
                  label="Reason For Visit*"
                  name="problem"
                  disabled={isSubmitting}
                  options={[
                    {
                      label: "Option 1",
                      value: "option1"
                    }
                  ]}
                  placeholder="Select option"
                  error={errors.problem}
                  touched={touched.problem}
                  styles={{ marginBottom: "1.5rem" }}
                />
              </Flex>
              <Flex width={"100%"}>
                <DatePickerComponent />
              </Flex>
              <Flex width={"100%"} flexDir={"column"} p={8} gap={3}>
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
              </Flex>
            </Flex>
            <Flex width={"100%"} justifyContent={"center"} my={4}>
              <Button
                type="submit"
                variant="authentication"
                isDisabled={isSubmitting}
                width={"300px"}
                height={"100%"}
                py={3}
              >
                Sign In {isSubmitting && <Spinner ml={"4"} />}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BookAppointment;
