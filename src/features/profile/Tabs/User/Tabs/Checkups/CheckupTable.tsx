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
import { UserTabProps } from "../Prescription/Prescription";

export const CheckupTable = ({ medicalRecords }: UserTabProps) => {
  return (
    <Box>
      <TableContainer component={Box} sx={{ borderRadius: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-extrabold text-center text-xl border-none">
                Date & Time
              </TableCell>
              <TableCell className="font-extrabold text-center text-xl border-none">
                Problem
              </TableCell>
              <TableCell className="font-extrabold text-center text-xl border-none">
                Treatment
              </TableCell>
              <TableCell className="font-extrabold text-center text-xl border-none">
                Doctor
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {medicalRecords?.map((event: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="text-center text-sm border-none">
                  {event.date}
                </TableCell>
                <TableCell className="text-center border-none text-sm">
                  {event.problem}
                </TableCell>
                <TableCell className="text-center border-none text-sm">
                  {event.prescription}
                </TableCell>

                <TableCell className="text-center text-sm border-none">
                  Dr. Mahmood
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {medicalRecords?.length === 0 && (
        <Typography textAlign={"center"} mt={2}>
          No Checkups Found
        </Typography>
      )}
    </Box>
  );
};
