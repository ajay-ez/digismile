import React, { useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment, { Moment } from "moment";
import { DateCalendar } from "@mui/x-date-pickers";

interface QuickAppointmentProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (date: string) => void;
}

export const QuickAppointmentCalendar = ({
  onChange
}: QuickAppointmentProps) => {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(moment());

  const handleDateChange = (newValue: Moment | null) => {
    setSelectedDate(newValue);
    if (newValue) {
      onChange(newValue.format("YYYY-MM-DD"));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateCalendar
        onChange={handleDateChange}
        value={selectedDate}
        disablePast
      />
    </LocalizationProvider>
  );
};
