import { Stack, Typography } from "@mui/material";
import React from "react";

export const Discount = () => {
  return (
    <Stack gap="15px" alignItems="center" padding="15px">
      <Typography variant="subtitle1" className="text-3xl">
        Special Discount offer for New patient
      </Typography>

      <Typography variant="body1" className="text-2xl">
        Complete Oral Exam & Digital X-Rays for Just{" "}
        <span className="text-red-600">$89!</span>
      </Typography>
    </Stack>
  );
};
