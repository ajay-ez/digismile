import React from "react";
import {
  Box,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { getFormattedDateTime } from "@/utils/dateUtils";

export const AppointmentHistoryTable = () => {
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
          <TableHead>
            <TableRow className="font-bold">
              <TableCell className="font-bold text-center border-none">
                Date & Time
              </TableCell>
              <TableCell className="font-bold text-center border-none">
                Treatment
              </TableCell>
              <TableCell className="font-bold text-center border-none">
                Dowload
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {events.map((event: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="text-center border-none">
                  {getFormattedDateTime(event.startDate, true)}
                </TableCell>

                <TableCell className="text-center border-none">
                  {event.name}
                </TableCell>
                <TableCell className="text-center border-none">
                  {event.handledBy}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {events.length === 0 && (
        <Typography textAlign={"center"} mt={2}>
          No Event Found
        </Typography>
      )}
    </Box>
  );
};
