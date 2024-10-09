"use client";
import { dummy_profile } from "@/assets/images";
import { calculateAge } from "@/utils/dateUtils";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export interface ProfileCardProps {
  userData: any;
}
export const ProfileCard = ({ userData }: ProfileCardProps) => {
  return (
    <div className="w-[100%] md:w-[60%]  shadow-2xl rounded-2xl p-4 py-8 m-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image
          src={dummy_profile}
          alt="profile image"
          className="w-[100px] h-[100px] border-[2px] rounded-lg bg-gray-300"
        />
        <div className="flex flex-col gap-1">
          <Typography className="font-bold text-xl">
            {userData?.name}
          </Typography>
          <div className="flex justify-between">
            <Typography className="font-bold text-xl">
              Age: {userData ? calculateAge(userData.dob) : ""}
            </Typography>
            {/* <Typography className="font-bold text-xl">Sex:M</Typography> */}
          </div>
          <Typography variant="body1">
            Phone Number : {userData?.phone_number}
          </Typography>
          <Typography variant="body1">Email : {userData?.email}</Typography>
          <Typography variant="body1">Address : {userData?.address}</Typography>
        </div>
      </div>
    </div>
  );
};
