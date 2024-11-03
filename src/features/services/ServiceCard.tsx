"use client";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
interface Properties {
  title: string;
  desc: string;
  image: StaticImageData;
  alt: string;
  showLearnMore?: boolean;
}
const ServiceCard = ({
  title,
  desc,
  image,
  alt,
  showLearnMore = true
}: Properties) => {
  const router = useRouter();
  return (
    <div className="bg-white border-[1px] rounded-lg shadow-service-shadow flex flex-col gap-3 justify-center items-center p-6 h-[350px]">
      <Image src={image} alt={alt} className="bg-blue-300 rounded-lg" />
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body1" className="text-center">
        {desc}
      </Typography>
      {showLearnMore && (
        <Button
          className="capitalize"
          variant="text"
          onClick={() => router.push("clinic-services")}
        >
          Learn More
          <KeyboardArrowRight />
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;
