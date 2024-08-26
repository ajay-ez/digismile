import { faq } from "@/assets/images";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AppointmentForm from "./AppointmentForm";

const BookAppointment = () => {
  return (
    <div className="bg-[#003060] m-4 p-4 rounded-lg">
      <Typography className="text-3xl text-white  font-semibold">
        Make an <span className="text-5xl font-serif">Appointment</span>
      </Typography>
      <div className="flex justify-around items-center mt-3">
        <Box width={"40%"} className="flex justify-end ">
          <Image
            src={faq}
            alt="book-appointemnt"
            className="rounded-xl w-full flip"
          />
        </Box>
        <Box
          width={"50%"}
          className="bg-seviceBg p-3 rounded-lg shadow-appointment-card"
        >
          <AppointmentForm />
        </Box>
      </div>
    </div>
  );
};

export default BookAppointment;
