import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { getFormattedDateTime } from "@/utils/dateUtils";
import { UserTabProps } from "../Prescription/Prescription";
import { downloadFile } from "@/utils/dowloadUrl";
import { Box, Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";

export const DocumentTable = ({ medicalRecords }: UserTabProps) => {
  return (
    <Box>
      <TableContainer component={Box} sx={{ borderRadius: 1 }}>
        <Table>
          <Thead>
            <Tr>
              <Td className="font-extrabold text-center text-xl border-none">
                Date & Time
              </Td>
              <Td className="font-extrabold text-center text-xl border-none">
                Treatment
              </Td>
              <Td className="font-extrabold text-center text-xl border-none">
                Dowload
              </Td>
            </Tr>
          </Thead>

          <Tbody>
            {medicalRecords?.map((event: any, index: number) => (
              <Tr key={index}>
                <Td className="text-center text-sm  border-none">
                  {getFormattedDateTime(event.date, true)}
                </Td>

                <Td className="text-center text-sm   border-none">
                  {event.prescription}
                </Td>
                <Td
                  className="text-center text-sm cursor-pointer   border-none"
                  onClick={() => {
                    downloadFile(event.document);
                  }}
                >
                  <DownloadIcon />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {medicalRecords?.length === 0 && (
        <h1>
          No Documents Found
        </h1>
      )}
    </Box>
  );
};
