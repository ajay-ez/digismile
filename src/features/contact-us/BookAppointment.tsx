import { Box, Typography } from "@mui/material";
import React from "react";
import AppointmentForm from "./AppointmentForm";

const BookAppointment = () => {
  return (
    <div className="  m-4 p-4  py-8 pb-24 rounded-lg">
      <Typography className="text-3xl text-digiDarkBlue  font-semibold text-center my-8">
        Request an Appointment
      </Typography>
      <div className="flex flex-col gap-4 md:flex-row justify-around items-center mt-3 mx-8">
        {/* <Box className="flex md:w-[40%] justify-end ">
          <Image
            src={faq}
            alt="book-appointemnt"
            className="rounded-xl w-full flip"
          />
        </Box> */}
        <Box className="bg-white   p-24 rounded-3xl shadow-appointment-card py-20">
          <AppointmentForm />
        </Box>
      </div>
    </div>
  );
};

export default BookAppointment;
