import { faq } from "@/assets/images";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AppointmentForm from "./AppointmentForm";

const BookAppointment = () => {
  return (
    <div className="bg-[#003060] m-4 p-4  py-8 pb-24 rounded-lg">
      <Typography className="text-3xl text-white  font-semibold">
        Request an <span className="text-5xl font-serif">Appointment</span>
      </Typography>
      <div className="flex flex-col gap-4 md:flex-row justify-around items-center mt-3">
        <Box className="flex md:w-[40%] justify-end ">
          <Image
            src={faq}
            alt="book-appointemnt"
            className="rounded-xl w-full flip"
          />
        </Box>
        <Box className="bg-seviceBg md:w-[50%] p-3 rounded-lg shadow-appointment-card py-8">
          <AppointmentForm />
        </Box>
      </div>
    </div>
  );
};

export default BookAppointment;
