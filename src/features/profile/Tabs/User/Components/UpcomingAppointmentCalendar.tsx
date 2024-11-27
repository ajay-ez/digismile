'use client';
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import {
  LocalizationProvider,
  DateCalendar,
  PickersDay,
  PickersDayProps
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Box } from '@chakra-ui/react';

function AppointmentDay(props: PickersDayProps<Dayjs>) {
  const { day, ...other } = props;
  const isToday = dayjs().isSame(day, 'day');
  return (
    <>
      <PickersDay
        {...other}
        day={day}
        disableHighlightToday
        outsideCurrentMonth={false}
      />

      {isToday && (
        <FiberManualRecordIcon className="size-3 text-red-500 align-text-bottom mt-5 -ml-6" />
      )}
    </>
  );
}
const UpcomingAppointmentCalendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DateCalendar
          readOnly={true}
          slots={{
            day: AppointmentDay
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default UpcomingAppointmentCalendar;
