import React from "react";
import { TextImageOverlay } from "@/components/common/TextImageOverlay";
import { Stack, Typography } from "@mui/material";

export const Title = () => {
  return (
    <>
      <TextImageOverlay title="Contact Us" />
      <Stack
        justifyContent="center"
        direction="row"
        className="flex flex-col md:flex-row items-center p-8 gap-16"
      >
        <div>
          <Typography variant="h1" className="text-4xl">
            Call Us Now
          </Typography>
          <Typography className="text-2xl">
            We are available at two locations
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2">
            Washington D.C - (202) 545-6336
          </Typography>
          <Typography variant="subtitle2">
            Burke VA - (571) 374-8000{" "}
          </Typography>
        </div>
      </Stack>
    </>
  );
};

export default Title;
