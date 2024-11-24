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
    <div className="relative bg-white border-[1px] rounded-3xl p-4 shadow-service-shadow flex flex-col gap-3 justify-center items-center h-[350px] transition-transform duration-500 hover:scale-105 hover:shadow-xl hover:border-blue-500">
      {/* Decorative Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 rounded-3xl transition-opacity duration-500 hover:opacity-100 z-[-1]" />

      <Image
        src={image}
        alt={alt}
        className="bg-blue-300 rounded-lg transition-transform duration-500 hover:scale-125 hover:rotate-3"
      />
      <Typography
        variant="subtitle1"
        className="text-gray-800 font-semibold transition-colors duration-300 hover:text-blue-700"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        className="text-center font-poppins text-gray-600 transition-transform duration-300 hover:scale-105"
      >
        {desc}
      </Typography>
      {showLearnMore && (
        <Button
          className="capitalize text-blue-600 hover:text-blue-800 hover:underline transition-transform duration-300 hover:translate-x-2"
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
