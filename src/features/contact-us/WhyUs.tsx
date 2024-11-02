import { service_detail } from "@/assets/images";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

export const WhyUs = () => {
  return (
    <Stack
      gap="50px"
      mx="20px"
      className="flex flex-col-reverse md:flex-row mb-48 items-center"
    >
      <div className="md:w-[40%] mt-20">
        <Typography variant="body1">
          At Smile Experts Dental, we simplify patient care by creating a
          personalized account for each patient, enabling easy access to their
          profile, can make appointment in just a click, and ongoing care all in
          one place.
        </Typography>
        <div className="flex flex-col gap-28 mt-10 ">
          <div className="flex gap-10  ">
            <div>
              <Typography>
                <CheckIcon className="mx-2 shadow-blue-500" />
                Treatment History
              </Typography>
              <Typography>
                <CheckIcon className="mx-2" />
                Seamless Access
              </Typography>
            </div>
            <div>
              <Typography>
                <CheckIcon className="mx-2" />
                Treatment History
              </Typography>
              <Typography>
                <CheckIcon className="mx-2" />
                Seamless Access
              </Typography>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <Image src={service_detail} alt="why-us" />
      </div>
    </Stack>
  );
};
