import React from "react";

import { UserTabProps } from "../Prescription/Prescription";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr
} from "@chakra-ui/react";

export const CheckupTable = ({ medicalRecords }: UserTabProps) => {
  return (
    <Box>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Td className="font-extrabold text-center text-xl border-none">
                Date & Time
              </Td>
              <Td className="font-extrabold text-center text-xl border-none">
                Problem
              </Td>
              <Td className="font-extrabold text-center text-xl border-none">
                Treatment
              </Td>
              <Td className="font-extrabold text-center text-xl border-none">
                Doctor
              </Td>
            </Tr>
          </Thead>

          <Tbody>
            {medicalRecords?.map((event: any, index: number) => (
              <Tr key={index}>
                <Td className="text-center text-sm border-none">
                  {event.date}
                </Td>
                <Td className="text-center border-none text-sm">
                  {event.problem}
                </Td>
                <Td className="text-center border-none text-sm">
                  {event.prescription}
                </Td>

                <Td className="text-center text-sm border-none">Dr. Mahmood</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {medicalRecords?.length === 0 && <h1>No Checkups Found</h1>}
    </Box>
  );
};
