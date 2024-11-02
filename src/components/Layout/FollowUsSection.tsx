"use client";
import { naviageToAnotherWebsite } from "@/utils/navigateToAnotherWebsite";
import { Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const FollowUsSection = () => {
  return (
    <div className="flex flex-col   gap-2">
      <Typography className="font-bold text-xl mt-4 text-white">
        Follow us
      </Typography>
      <div className="flex flex-col  gap-2 ">
        <div className="cursor-pointer">
          <Typography
            onClick={() => naviageToAnotherWebsite("")}
            className=" text-white"
          >
            Washington D.C.
            <InstagramIcon className="mx-2" />
            <FacebookIcon className="mx-2" />
          </Typography>
        </div>
        <div className="cursor-pointer ">
          <Typography
            onClick={() =>
              naviageToAnotherWebsite(
                "https://www.instagram.com/smile_experts_dental_dc?igsh=eTZ1dzRxdmI1M3Bs"
              )
            }
            className=" text-white"
          >
            <span className="text-white w-[300px]"> Burke V.A. </span>
            <InstagramIcon className="mx-2 ml-12" />
            <FacebookIcon className="mx-2" />
          </Typography>
        </div>
      </div>
      {/* 
      <div className="flex flex-col  gap-2 md:flex-row">
        <div className="w-[163px] cursor-pointer">
          <Typography
            onClick={() => naviageToAnotherWebsite("")}
            className="text-start text-white"
          >
            <FacebookIcon className="mx-2" />
            <InstagramIcon className="mx-2" />
            Burke, VA
          </Typography>
        </div>

        <div className="cursor-pointer ">
          <Typography
            onClick={() =>
              naviageToAnotherWebsite(
                "https://www.instagram.com/smile_experts_dental_burke?igsh=MTJ1cm1tNWdhdWN5ag=="
              )
            }
            className="text-start text-white"
          >
            <InstagramIcon className="mx-2" />
            Burke, VA
          </Typography>
        </div>
      </div> */}
    </div>
  );
};
