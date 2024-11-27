/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Image from "next/image";
import {
  formatTimeToHoursAndMinutes,
  getFormattedDateTime
} from "@/utils/dateUtils";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { doctor } from "@/assets/images";
import CancelBookingPopup from "@/components/common/CancelBookingPopup";
import { SuccessPopup } from "@/components/common/SuccessPopup";
import { useCancelAppointmentMutation } from "@/services/apiServices/appointmentService";
import { RSC_PREFETCH_SUFFIX } from "next/dist/lib/constants";
import { Box, Button, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";

type UpcommingAppointmentProps = {
  upcoming_appointments: any;
  refetch: () => void;
};
export const UpcommingAppointmentTable = ({
  upcoming_appointments,
  refetch
}: UpcommingAppointmentProps) => {
  const [isCancelPopup, setIsCancelPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [cancelAppointment, { isLoading }] = useCancelAppointmentMutation();

  const handleCancelClick = (rowData: any) => {
    setIsCancelPopup(true);
    setSelectedRow(rowData);
  };

  const handleClosePopup = () => {
    setSelectedRow(null);
    setIsCancelPopup(false);
  };

  const onCancelBooking = () => {
    cancelAppointment({ appointment_id: selectedRow?.appointment_id }).then(
      (response: any) => {
        if (response?.data?.status_code === 200) {
          handleClosePopup();
          refetch();
        }
      }
    );
  };
  return (
    <Box>
      <CancelBookingPopup
        onClose={handleClosePopup}
        open={isCancelPopup}
        onCancelBooking={onCancelBooking}
        isLoading={isLoading}
      />

      <TableContainer>
        <Table>
          <Tbody>
            {upcoming_appointments?.map((event: any, index: number) => (
              <Tr key={index}>
                <Td className="text-center border-none">
                  <Image
                    src={doctor}
                    alt="Doctor"
                    height={158}
                    width={158}
                    className="rounded-full"
                  />
                </Td>
                <Td className="border-none font-semibold text-xl text-left">
                  Dr. Mahmood
                  <h1 className="text-xs text-left">
                    Dental Specialist
                  </h1>
                </Td>
                <Td className="text-center border-none text-lg">
                  {event.description}
                </Td>
                <Td className="text-right border-none text-lg">
                  {`${getFormattedDateTime(event.date)} ${formatTimeToHoursAndMinutes(event.start_time) + "-" + formatTimeToHoursAndMinutes(event.end_time)}`}
                  <h1 className="text-right text-sm">Dc</h1>
                  <Button
                    variant="text"
                    className="capitalize text-black"
                    onClick={() => handleCancelClick(event)}
                  >
                    <CancelOutlinedIcon className="text-red-500 mx-2" />
                    Cancel
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {upcoming_appointments?.length === 0 && (
        <h1>
          No Appointments Found
        </h1>
      )}
    </Box>
  );
};
