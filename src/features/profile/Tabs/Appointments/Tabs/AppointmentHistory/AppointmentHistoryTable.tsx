import React from "react";
import {
  Box,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Button
} from "@mui/material";
import { getFormattedDateTime } from "@/utils/dateUtils";
import Image from "next/image";
import { doctor } from "@/assets/images";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import { formatTimeToHoursAndMinutes } from "@/utils/dateUtils";
type AppointmentHistoryTableProps = {
  previous_appointments?: any;
};

export const AppointmentHistoryTable = ({
  previous_appointments
}: AppointmentHistoryTableProps) => {
  return (
    <Box>
      <TableContainer component={Box} sx={{ borderRadius: 1 }}>
        <Table>
          <TableBody>
            {previous_appointments?.map((event: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="text-center border-none">
                  <Image
                    src={doctor}
                    alt="Doctor"
                    height={158}
                    width={158}
                    className="rounded-full"
                  />
                </TableCell>
                <TableCell className="text-center border-none font-semibold text-xl">
                  Dr. Mahmood
                  <Typography className="text-xs text-left">
                    Dental Specialist
                  </Typography>
                </TableCell>
                <TableCell className="text-center border-none text-lg ">
                  {event.description}
                </TableCell>
                <TableCell className="text-left border-none text-lg ">
                  {`${getFormattedDateTime(event.date)} ${formatTimeToHoursAndMinutes(event.start_time) + "-" + formatTimeToHoursAndMinutes(event.end_time)}`}
                  <Typography className="text-left text-sm">Dc</Typography>
                  <Button
                    variant="text"
                    className="capitalize text-black text-left"
                  >
                    <CalendarMonth className="text-blue-500 mx-2" />
                    Reschedule
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {previous_appointments?.length === 0 && (
        <Typography textAlign={"center"} mt={2}>
          No Event Found
        </Typography>
      )}
    </Box>
  );
};
