import { dummy_profile } from "@/assets/images";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProfileCard = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src={dummy_profile}
        alt="profile image"
        className="w-[100px] h-[100px] border-[2px] rounded-lg bg-gray-300"
      />
      <div className="flex flex-col gap-1">
        <Typography variant="h5" className="font-bold">
          Satya The Truth
        </Typography>
        <div className="flex justify-between">
          <Typography variant="h5" className="font-bold">
            Age: 22
          </Typography>
          <Typography variant="h5" className="font-bold">
            Sex:M
          </Typography>
        </div>
        <Typography variant="body1">Phone Number : 43242323</Typography>
        <Typography variant="body1">Email : 43242323</Typography>
        <Typography variant="body1">Address : 43242323</Typography>
      </div>
    </div>
  );
};
