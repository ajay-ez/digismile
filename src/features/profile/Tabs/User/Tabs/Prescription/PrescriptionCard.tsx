import { getFormattedDateTime } from "@/utils/dateUtils";
import { Stack, Typography } from "@mui/material";
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
        <Typography className="text-xl font-semibold text-[#282828]">
          {doctorName}
        </Typography>
        <Typography className="text-[#282828]">
          {getFormattedDateTime(date, true)}
        </Typography>
      </Stack>
      <Typography className="text-lg font-semibold text-blue-500">
        {prescription}
      </Typography>
    </Stack>
  );
};
