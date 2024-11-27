import { getFormattedDateTime } from "@/utils/dateUtils";
import { Stack } from "@chakra-ui/react";
import React from "react";
interface CardProps {
  doctorName?: string;
  date: string;
  prescription: string;
}
export const PrescriptionCard = ({
  doctorName = "Dr Mahmood",
  date,
  prescription
}: CardProps) => {
  return (
    <Stack className="gap-4 bg-[#ADF0D1] m-5 p-10 rounded-2xl">
      <Stack className="flex-row justify-between items-center">
        <h1 className="text-xl font-semibold text-[#282828]">
          {doctorName}
        </h1>
        <h1 className="text-[#282828]">
          {getFormattedDateTime(date, true)}
        </h1>
      </Stack>
      <h1 className="text-lg font-semibold text-blue-500">
        {prescription}
      </h1>
    </Stack>
  );
};
