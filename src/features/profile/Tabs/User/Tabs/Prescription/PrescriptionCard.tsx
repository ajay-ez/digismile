import { getFormattedDateTime } from "@/utils/dateUtils";
import { Stack, Typography } from "@mui/material";
import React from "react";

export const PrescriptionCard = () => {
  return (
    <Stack className="gap-4 bg-[#ADF0D1] m-5 p-10 rounded-2xl">
      <Stack className="flex-row justify-between items-center">
        <Typography className="text-xl font-semibold text-[#282828]">
          Dr Mahmood{" "}
        </Typography>
        <Typography className="text-[#282828]">
          {getFormattedDateTime("2024-09-07 12:34:56", true)}
        </Typography>
      </Stack>
      <Typography className="text-lg font-semibold text-blue-500">
        Use Crest Pro-Health toothpaste to fight cavities and gingivitis
      </Typography>
    </Stack>
  );
};
