import { Stack } from "@chakra-ui/react";
import React from "react";

export const Discount = () => {
  return (
    <Stack gap="15px" alignItems="center" padding="15px">
      <h1 className="text-3xl">
        Special Discount offer for New patient
      </h1>

      <h1 className="text-2xl">
        Complete Oral Exam & Digital X-Rays for Just{" "}
        <span className="text-red-600">$89!</span>
      </h1>
    </Stack>
  );
};
