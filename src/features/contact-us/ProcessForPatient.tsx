import React from "react";
import {
  appointment_icon,
  confirmation_icon,
  cosmetic,
  location_icon
} from "@/assets/images";
import { Stack, Typography } from "@mui/material";
import { ProcessCard } from "./ProcessCard";
import ForwardIcon from "@mui/icons-material/Forward";

export const ProcessForPatient = () => {
  return (
    <div className=" flex flex-col gap-8 items-center">
      <Typography variant="h1" className="text-center">
        Process For New Patients
      </Typography>
      <Stack className="flex flex-col md:flex-row  items-center  justify-center">
        <div className="flex flex-col md:flex-row  items-center">
          <ProcessCard
            alt="image"
            image={appointment_icon}
            desc="Initiate Appointment Request via call or appointment form."
          />
          <ForwardIcon className="w-[110px] h-[40px]" />
        </div>

        <div className=" flex flex-col md:flex-row  gap-2 items-center">
          <ProcessCard
            alt="image"
            image={location_icon}
            desc="Select location (Burke or Washington, DC) and an available date ."
          />
          <ForwardIcon className="w-[110px] h-[40px]" />
        </div>
        <div className="flex gap-2 items-center">
          <ProcessCard
            alt="image"
            image={confirmation_icon}
            desc="Our team will reach out to confirm your appointment details."
          />
        </div>
      </Stack>
    </div>
  );
};
