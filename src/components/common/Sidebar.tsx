"use client";
import { digismileLogoImage, dummy_profile } from "@/assets/images";
import Image from "next/image";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@chakra-ui/react";

const Sidebar = ({ userData }: any) => {
  const router = useRouter();
  const { userId } = useParams();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  return (
    <div className="h-[100vh] w-[320px] p-4 bg-[#104F7C]  rounded-2xl flex flex-col justify-between items-center">
      <Image
        src={digismileLogoImage}
        alt="digismile"
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <div className="flex flex-col gap-8 justify-end items-end">
        <div>
          <Button
            // fullWidth
            onClick={() =>
              router.push(
                `/profile/${userId}?tab=user-profile&subTab=prescription`
              )
            }
            variant={tab === "user-profile" ? "contained" : "outlined"}
            className="w-[320px] text-white capitalize p-3 text-center text-lg rounded-bl-full rounded-tl-full"
          >
            <SingleBedIcon className="text-3xl mx-2 text-center" />
            Profile
          </Button>
        </div>
        <div>
          <Button
            onClick={() =>
              router.push(
                `/profile/${userId}?tab=appointments&subTab=appointment-history`
              )
            }
            // fullWidth
            variant={tab === "appointments" ? "contained" : "outlined"}
            className="w-[320px] text-white   capitalize p-3 text-lg rounded-bl-full rounded-tl-full"
          >
            <CalendarMonthIcon className="text-3xl mx-2" />
            Appointments
          </Button>
        </div>
      </div>
      <div>
        <Image src={dummy_profile} alt="profile picture" className="mb-4" />
        <h1 className="font-bold text-white text-xl ">
          {userData?.name}
        </h1>
        <h1 className="text-white text-center">
          {userData?.email}
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
