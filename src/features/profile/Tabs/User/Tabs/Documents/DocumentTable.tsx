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
import DownloadIcon from "@mui/icons-material/Download";
import { getFormattedDateTime } from "@/utils/dateUtils";
import { UserTabProps } from "../Prescription/Prescription";
import { downloadFile } from "@/utils/dowloadUrl";

export const DocumentTable = ({ medicalRecords }: UserTabProps) => {
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
                Treatment
              </TableCell>
              <TableCell className="font-extrabold text-center text-xl border-none">
                Dowload
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {medicalRecords?.map((event: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="text-center text-sm  border-none">
                  {getFormattedDateTime(event.date, true)}
                </TableCell>

                <TableCell className="text-center text-sm   border-none">
                  {event.prescription}
                </TableCell>
                <TableCell
                  className="text-center text-sm cursor-pointer   border-none"
                  onClick={() => {
                    downloadFile(event.document);
                  }}
                >
                  <DownloadIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {medicalRecords?.length === 0 && (
        <Typography textAlign={"center"} mt={2}>
          No Documents Found
        </Typography>
      )}
    </Box>
  );
};
