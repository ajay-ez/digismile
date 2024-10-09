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
import { useParams, useRouter } from "next/navigation";
import moment from "moment";
import { SuccessPopup } from "@/components/common/SuccessPopup";
export const QuickAppointment = () => {
  const [requestAppointment, { isLoading }] =
    useRequestUserAppointmentMutation();
  const [selectedDate, setSelectedDate] = useState<string | Date | null>(
    moment(new Date()).format("YYYY-MM-DD")
  );

  const [selectedSlots, setSelectedSlots] = useState<TimeSlot | null>(null);
  const [selectedCity, setSelectedCity] = useState("dc");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const router = useRouter();
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
      }).then((response) => {
        if (response.data?.status_code === 201) {
          setShowSuccessPopup(true);

          setTimeout(() => {
            router.push(
              `/profile/${userId}?tab=appointments&subTab=upcoming-appointments`
            );
            setShowSuccessPopup(false);
          }, 2000);
        }
      });
    }
  };
  const isButtonDisabled = () => {
    return !selectedSlots || !selectedDate;
  };

  const onSelectCity = (e: any) => {
    setSelectedCity(e.target.value);
    setSelectedSlots(null);
    ref?.current?.setFieldValue("city", e.target.value);
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
  return (
    <>
      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        successMessage="Appointment Requested"
        subMessage="We looking forward to see you !!"
      />
      <div className="flex flex-col md:flex-row gap-12 justify-center p-3">
        <QuickAppointmentForm ref={ref} onSelectCity={onSelectCity} />
        <div className="flex flex-col items-center">
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
        <Box className="flex justify-center mt-4 p-4">
          <Button
            type="submit"
            variant="contained"
            className="bg-green-400 hover:bg-green-500 rounded-lg font-bold max-w-md capitalize"
            fullWidth
            onClick={handleRequestAppointment}
            disabled={isButtonDisabled() || isLoading}
          >
            {isLoading ? (
              <CircularProgress className="bg-green-400 text-green-400" />
            ) : (
              "Request Now"
            )}
          </Button>
        </Box>
      </div>
    </>
  );
};
