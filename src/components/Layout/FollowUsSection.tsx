"use client";
import { naviageToAnotherWebsite } from "@/utils/navigateToAnotherWebsite";
import { Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const FollowUsSection = () => {
  return (
    <div className="flex flex-col   gap-2">
      <Typography className="font-bold text-lg text-center text-white">
        Follow us
      </Typography>
      <div className="flex flex-col  gap-2 md:flex-row">
        <div className="cursor-pointer">
          <Typography
            onClick={() => naviageToAnotherWebsite("")}
            className="text-center text-white"
          >
            <FacebookIcon className="mx-2" />
            Facebook Washington D.C.
          </Typography>
        </div>
        <div className="cursor-pointer text-center">
          <Typography
            onClick={() =>
              naviageToAnotherWebsite(
                "https://www.instagram.com/smile_experts_dental_dc?igsh=eTZ1dzRxdmI1M3Bs"
              )
            }
            className="text-center text-white"
          >
            <InstagramIcon className="mx-2" />
            Instagram Washington D.C.
          </Typography>
        </div>
      </div>

      <div className="flex flex-col  gap-2 md:flex-row">
        <div className="w-[240px] cursor-pointer">
          <Typography
            onClick={() => naviageToAnotherWebsite("")}
            className="text-start text-white"
          >
            <FacebookIcon className="mx-2" />
            Facebook Burke, VA
          </Typography>
        </div>

        <div className="cursor-pointer text-center">
          <Typography
            onClick={() =>
              naviageToAnotherWebsite(
                "https://www.instagram.com/smile_experts_dental_burke?igsh=MTJ1cm1tNWdhdWN5ag=="
              )
            }
            className="text-start text-white"
          >
            <InstagramIcon className="mx-2" />
            Instagram Burke, VA
          </Typography>
        </div>
      </div>
    </div>
  );
};
