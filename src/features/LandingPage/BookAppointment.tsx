import { dentist } from "@/assets/images";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AppointmentForm from "./AppointmentForm";

const BookAppointment = () => {
  return (
    <div className="bg-digiRed p-3">
      <Typography className="text-3xl font-semibold">
        Make an{" "}
        <span className="text-white text-5xl font-serif ">Appointment</span>
      </Typography>
      <div className="flex justify-between mt-3">
        <Box width={"40%"} height={"100%"}>
          <Image src={dentist} alt="book-appointemnt" />
        </Box>
        <Box width={"50%"}>
          <AppointmentForm />
        </Box>
      </div>
    </div>
  );
};

export default BookAppointment;
