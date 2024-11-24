import { service_detail } from "@/assets/images";
import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

interface TextImageOverlayProps {
  title: string;
}
export const TextImageOverlay = ({ title }: TextImageOverlayProps) => {
  return (
    <div className="relative w-full h-36">
      <Image
        src={service_detail}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0  "
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Typography variant="h1" className="  text-4xl   font-poppins">
          {title}
        </Typography>
      </div>
    </div>
  );
};
