import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { service_detail } from "@/assets/images";

export const NewPatients = () => {
  return (
    <Stack className="items-center  ">
      <Typography variant="h1" className="my-5 text-center">
        We’re welcoming new patients <br />
        <span>and can’t wait to meet you.</span>
      </Typography>
      <Typography variant="subtitle2" className="my-3">
        Come Experience Care with a Personal Touch!😄
      </Typography>
      <Image src={service_detail} alt="Care with a Personal Touch" />
    </Stack>
  );
};
