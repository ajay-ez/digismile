import { digismileLogoImage } from "@/assets/images";
import { LocationOnOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FollowUsSection } from "./FollowUsSection";
const Footer = () => {
  const title = "font-bold text-lg text-white";
  return (
    <footer className="bg-[#1E285F] text-white py-4 mt-auto p-5">
      <div className="flex flex-col    gap-8 justify-between">
        <div className="flex flex-col justify-center items-center">
          <Image src={digismileLogoImage} alt="logo" width={200} height={100} />
          <Typography className="mt-2 text-center text-2xl text-white">
            Brighten Your Smile Today
          </Typography>
        </div>

        <div className="flex flex-col justify-between   gap-8">
          <div className="flex justify-between gap-8">
            <div className="flex flex-col">
              <Typography className={title}>Pages</Typography>

              <Link href="/" className="text-white text-lg">
                Home
              </Link>
              <Link href="/clinic-services" className="text-white text-lg">
                Services
              </Link>
              <Link href="/about-us" className="text-white text-lg">
                About
              </Link>
            </div>
            <div>
              <Typography className={title}>Contact</Typography>
              <Typography className="text-white">
                (202) 545-6336 (D.C )
              </Typography>
              <Typography className="text-white">
                (571) 374-8000 (Burke)
              </Typography>
            </div>
            <FollowUsSection />
          </div>
          <div className="flex flex-col lg:max-w-[40%]">
            <Typography className={title}>Location</Typography>
            <Typography className="text-white">
              <LocationOnOutlined /> Washington D.C.1747 Pennsylvania Aven
              NWSuite 100 Washington, DC 20006
            </Typography>
            <Typography className="text-white">
              <LocationOnOutlined />
              Burke, VA 9570 Burke Road Unit A Burke, VA 22015{" "}
            </Typography>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6">
        <p className="text-center">
          &copy; {new Date().getFullYear()} DigiSmile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
