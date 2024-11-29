"use client";
import { digismileLogoImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@chakra-ui/react";

const MobileSidebar = () => {
  const router = useRouter();
  const { userId } = useParams();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div className="w-full h-[80px] bg-[#104F7C] px-4 flex items-center justify-between">
      <Image
        src={digismileLogoImage}
        alt="digismile"
        onClick={() => router.push("/")}
        className="cursor-pointer h-[60px] w-auto"
      />
      {/* <div className="flex gap-4"> */}
      <Button
        onClick={() =>
          router.push(`/profile/${userId}?tab=user-profile&subTab=prescription`)
        }
        variant={tab === "user-profile" ? "contained" : "outlined"}
        className="text-white capitalize px-4 py-2 text-lg"
      >
        <SingleBedIcon className="mr-2" />
        {/* Profile */}
      </Button>
      <Button
        onClick={() =>
          router.push(
            `/profile/${userId}?tab=appointments&subTab=appointment-history`
          )
        }
        variant={tab === "appointments" ? "contained" : "outlined"}
        className="text-white capitalize px-4 py-2 text-lg"
      >
        <CalendarMonthIcon className="mr-2" />
        {/* Appointments */}
      </Button>
      {/* </div> */}
      {/* Uncomment for user information
      <div className="flex items-center gap-2">
        <Image src={dummy_profile} alt="profile picture" className="h-10 w-10 rounded-full" />
        <div className="text-white">
          <Typography className="font-bold text-lg">{userData?.name}</Typography>
          <Typography>{userData?.email}</Typography>
        </div>
      </div> */}
    </div>
  );
};

export default MobileSidebar;
