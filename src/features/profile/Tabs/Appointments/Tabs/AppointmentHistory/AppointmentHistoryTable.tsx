import React from "react";
import { getFormattedDateTime } from "@/utils/dateUtils";
import Image from "next/image";
import { doctor } from "@/assets/images";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import { formatTimeToHoursAndMinutes } from "@/utils/dateUtils";
import { Box, Button, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
type AppointmentHistoryTableProps = {
  previous_appointments?: any;
};

export const AppointmentHistoryTable = ({
  previous_appointments
}: AppointmentHistoryTableProps) => {
  return (
    <Box>
      <TableContainer  sx={{ borderRadius: 1 }}>
        <Table>
          <Tbody>
            {previous_appointments?.map((event: any, index: number) => (
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
                <Td className="text-center border-none font-semibold text-xl">
                  Dr. Mahmood
                  <h1 className="text-xs text-left">
                    Dental Specialist
                  </h1>
                </Td>
                <Td className="text-center border-none text-lg ">
                  {event.description}
                </Td>
                <Td className="text-left border-none text-lg ">
                  {`${getFormattedDateTime(event.date)} ${formatTimeToHoursAndMinutes(event.start_time) + "-" + formatTimeToHoursAndMinutes(event.end_time)}`}
                  <h1 className="text-left text-sm">Dc</h1>
                  <Button
                    variant="text"
                    className="capitalize text-black text-left"
                  >
                    <CalendarMonth className="text-blue-500 mx-2" />
                    Reschedule
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {previous_appointments?.length === 0 && (
        <h1>
          No Appointment Found
        </h1>
      )}
    </Box>
  );
};
