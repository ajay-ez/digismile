import React from "react";
import { Title } from "./Title";
import { Discount } from "./Discount";
import { ClinicSchedule } from "@/components/common/ClinicSchedule";
import { WhyUs } from "./WhyUs";
import BookAppointment from "./BookAppointment";
import { ProcessForPatient } from "./ProcessForPatient";
import { Stack } from "@chakra-ui/react";

export const ContactUs = () => {
  return (
    <Stack className="gap-12 bg-seviceBg">
      <Title />
      <BookAppointment />
      <ProcessForPatient />
      <Discount />
      <ClinicSchedule renderToHome showTitle={false} />
      <WhyUs />
    </Stack>
  );
};
