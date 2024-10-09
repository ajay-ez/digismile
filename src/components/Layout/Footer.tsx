import { digismileLogoImage } from "@/assets/images";
import { LocationOnOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const title = "font-bold text-lg";
  // const value = "";
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto p-5">
      <div className="flex flex-col  lg:flex-row gap-8 justify-between">
        <div className="lg:w-[20%]">
          <Image src={digismileLogoImage} alt="logo" />
          <Typography className="mt-2 text-center text-xl">
            Brighten your smile today
          </Typography>
        </div>

        <div className="flex flex-col justify-between lg:flex-row gap-8">
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
              <Typography>(202) 545-6336 (D.C )</Typography>
              <Typography>(571) 374-8000 (Burke)</Typography>
            </div>
            <div className="flex flex-col items-center">
              <Typography className={title}>Follow us</Typography>
              <div>
                <p className="text-center">
                  <FacebookIcon className="mx-2" />
                  Facebook
                </p>
              </div>
              <div className="text-center">
                <InstagramIcon className="mx-2" />
                Instagram
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:max-w-[40%]">
            <Typography className={title}>Location</Typography>
            <Typography>
              <LocationOnOutlined /> Washington D.C.1747 Pennsylvania Aven
              NWSuite 100 Washington, DC 20006
            </Typography>
            <Typography>
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
