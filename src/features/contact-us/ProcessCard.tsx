import { Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface ProcessCardProps {
  image: StaticImageData;
  alt: string;
  desc: string;
}
export const ProcessCard = ({ image, alt, desc }: ProcessCardProps) => {
  return (
    <div className="p-8 flex flex-col items-center bg-white gap-4 rounded-2xl w-[300px] h-[200px] font-poppins">
      <Image src={image} alt={alt} className="bg-blue-400 w-[50px] h-[50px]" />
      <Typography variant="body1" className="text-center">
        {desc}
      </Typography>
    </div>
  );
};
