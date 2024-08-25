import { about_1, about_2, dr_image } from "@/assets/images";
import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export const AboutDoctor = () => {
  return (
    <div className="flex gap-2 mt-3 items-center justify-center">
      <div className="bg-white p-3 w-[50%] rounded-lg">
        <Typography variant="h4" className="text-left mb-5">
          Dr. Andleeb Mahmood
        </Typography>
        <Typography className="text-left">
          Dr. Andleeb Mahmood, a dentist with over 15 years of experience,
          treats patients like family, providing personalized, high-quality
          dental treatment. With three offices in DMV, she offers routine
          check-ups, cleanings, dental implants, and cosmetic dentistry. With
          extensive training and a focus on patient-centric care, her practice
          aims to transform lives.
        </Typography>
        <div className="flex justify-around items-center mt-8">
          <div>
            <Image src={about_1} alt="about-1" />
            <Typography className="text-center font-bold text-2xl text-[#011632]">
              Happy Clients
            </Typography>
            <Typography className="text-center font-bold text-2xl text-[#011632]">
              380
            </Typography>
          </div>
          <div>
            <Image src={about_2} alt="about-2" />
            <Typography className="text-center font-bold text-2xl text-[#011632]">
              Success Rate
            </Typography>
            <Typography className="text-center font-bold text-2xl text-[#011632]">
              95%
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Image src={dr_image} alt="d-1" />
      </div>
    </div>
  );
};
