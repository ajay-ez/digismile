import React, { useEffect, useRef, useState } from "react";
import QuickAppointmentForm from "./QuickAppointmentForm";
import { Box, Button, CircularProgress } from "@mui/material";
import AvailableSlots, { TimeSlot } from "./AvailableSlots";
import {
  useGetSlotsMutation,
  useRequestUserAppointmentMutation
} from "@/services/apiServices/appointmentService";
import { QuickAppointmentCalendar } from "./QuickAppointmentCalendar";
import { FormikProps } from "formik";
import { getFormattedDateTime } from "@/utils/dateUtils";
import { useParams } from "next/navigation";
import moment from "moment";
export const QuickAppointment = () => {
  const [requestAppointment, { isLoading }] =
    useRequestUserAppointmentMutation();
  const [selectedDate, setSelectedDate] = useState<string | Date | null>(
    moment(new Date()).format("YYYY-MM-DD")
  );

  const [selectedSlots, setSelectedSlots] = useState<TimeSlot | null>(null);
  const [selectedCity, setSelectedCity] = useState("dc");
  const { userId } = useParams();
  const [getSlots, { data }] = useGetSlotsMutation();
  const ref = useRef<FormikProps<{ city: string; problem: string }>>(null);

  const getSelectedSlots = (slot: TimeSlot) => {
    setSelectedSlots(slot);
  };

  const getSelectedDate = (date: string) => {
    setSelectedDate(date);
    setSelectedSlots(null);
  };

  const handleRequestAppointment = () => {
    ref?.current?.submitForm();

    if (ref?.current && Object.keys(ref?.current?.errors).length <= 0) {
      requestAppointment({
        appointment_date: getFormattedDateTime(selectedDate),
        start_time: selectedSlots?.start_time + ":00",
        end_time: selectedSlots?.end_time + ":00",
        description: ref?.current?.values?.problem,
        user_id: userId
      });
    }
  };
  const isButtonDisabled = () => {
    return !selectedSlots || !selectedDate;
  };
  useEffect(() => {
    if (selectedDate && selectedCity) {
      getSlots({
        appointment_date: selectedDate,
        city: selectedCity
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, selectedCity]);

  const onSelectCity = (e: any) => {
    setSelectedCity(e.target.value);
    setSelectedSlots(null);
    ref?.current?.setFieldValue("city", e.target.value);
  };

  return (
    <>
      <div className="flex gap-12 justify-center">
        <QuickAppointmentForm ref={ref} onSelectCity={onSelectCity} />
        <div className="flex flex-col align-middle">
          <QuickAppointmentCalendar
            onChange={(date: string) => getSelectedDate(date)}
          />
          <AvailableSlots
            data={data}
            onSlotSelect={getSelectedSlots}
            selectedSlot={selectedSlots}
          />
        </div>
      </div>
      <div>
        <Box className="flex justify-center mt-4">
          <Button
            type="submit"
            variant="contained"
            className="bg-green-400 hover:bg-green-500 rounded-lg font-bold max-w-md capitalize"
            fullWidth
            onClick={handleRequestAppointment}
            disabled={isButtonDisabled()}
          >
            {isLoading ? <CircularProgress /> : "Request Now"}
          </Button>
        </Box>
      </div>
    </>
  );
};
