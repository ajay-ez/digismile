"use client";
import React from "react";
import { Box } from "@mui/material";

import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const UpcomingAppointmentCalendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DateCalendar />
      </Box>
    </LocalizationProvider>
  );
};

export default UpcomingAppointmentCalendar;
