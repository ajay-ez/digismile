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
import Image from "next/image";
import { getFormattedDateTime } from "@/utils/dateUtils";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { doctor } from "@/assets/images";

export const UpcommingAppointmentTable = () => {
  const events = [
    {
      id: 1,
      name: "Annual Meetup",
      type: "Conference",
      startDate: "2024-09-07 12:34:56",
      endDate: "2024-09-12",
      description: "A conference for industry professionals.",
      handledBy: "John Doe",
      organisation: "Tech Corp",
      subEvents: "Workshops, Panels"
    },
    {
      id: 2,
      name: "Product Launch",
      type: "Launch",
      startDate: "2024-09-07 12:34:56",
      endDate: "2024-10-01",
      description: "Launch of the new product line.",
      handledBy: "Jane Smith",
      organisation: "Innovate Ltd",
      subEvents: "Live Demo, Q&A"
    },
    {
      id: 3,
      name: "Charity Auction",
      type: "Fundraiser",
      startDate: "2024-09-07 12:34:56",
      endDate: "2024-11-15",
      description: "An auction to raise funds for charity.",
      handledBy: "Emily Brown",
      organisation: "Helping Hands",
      subEvents: "Auction, Networking"
    }
  ];

  return (
    <Box>
      <TableContainer component={Box} sx={{ borderRadius: 1 }}>
        <Table>
          <TableBody>
            {events.map((event: any, index: number) => (
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
                <TableCell className="text-center border-none text-lg">
                  {event.description}
                </TableCell>
                <TableCell className="text-center border-none text-lg">
                  {getFormattedDateTime(event.startDate, true)}
                  <Typography className="text-left text-sm">Dc</Typography>
                  <Button variant="text" className="capitalize text-black">
                    <CancelOutlinedIcon className="text-red-500 mx-2" />
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {events.length === 0 && (
        <Typography textAlign={"center"} mt={2}>
          No Appointments Found
        </Typography>
      )}
    </Box>
  );
};
