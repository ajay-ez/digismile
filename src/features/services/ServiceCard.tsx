import { KeyboardArrowRight } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import React from "react";
interface Properties {
  title: string;
  desc: string;
  image: StaticImageData;
  alt: string;
}
const ServiceCard = ({ title, desc, image, alt }: Properties) => {
  return (
    <div className="bg-white border-[1px] rounded-lg shadow-service-shadow flex flex-col gap-3 justify-center items-center p-6">
      <Image src={image} alt={alt} className="bg-blue-300 rounded-lg" />
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body1" className="text-center">
        {desc}
      </Typography>
      <Button className="capitalize" variant="text">
        Learn More
        <KeyboardArrowRight />
      </Button>
    </div>
  );
};

export default ServiceCard;
