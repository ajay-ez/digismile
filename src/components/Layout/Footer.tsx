import { digismileLogoImage } from "@/assets/images";
import { LocationOnOutlined } from "@mui/icons-material";
import { Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FollowUsSection } from "./FollowUsSection";
const Footer = () => {
  const title = "font-bold text-xl mt-4 text-white";
  return (
    <footer className="bg-footer-blue-gradient text-white py-4 mt-auto p-5">
      <div className="flex flex-col    gap-8 justify-between">
        <div className="flex flex-col justify-center items-center">
          <Image src={digismileLogoImage} alt="logo" width={200} height={100} />
          <Typography className="mt-2 text-center text-2xl text-white">
            Brighten Your Smile Today
          </Typography>
        </div>

        <div>
          <Grid container justifyContent="space-between">
            <Grid item sm={6} xs={7} md={3}>
              <Typography className={title}>Pages</Typography>
              <Typography className="text-white mt-2">
                <Link href="/" color="inherit">
                  Home
                </Link>
              </Typography>
              <Typography className="text-white mt-2">
                <Link href="/clinic-services" color="inherit">
                  Services
                </Link>
              </Typography>
              <Typography className="text-white mt-2">
                <Link href="/about-us" color="inherit">
                  About
                </Link>
              </Typography>
            </Grid>

            <Grid item sm={6} xs={5} md={3}>
              <Typography className={title}>Contact</Typography>
              <Typography className="text-white mt-2">
                (202) 545-6336 (D.C)
              </Typography>
              <Typography className="text-white mt-2">
                (571) 374-8000 (Burke)
              </Typography>
            </Grid>

            <Grid item sm={6} xs={7} md={3}>
              <FollowUsSection />
            </Grid>

            <Grid item sm={6} xs={5} md={3}>
              <Typography className={title}>Location</Typography>
              <Typography className="text-white mt-2">
                <LocationOnOutlined /> Washington D.C. 1747 Pennsylvania Ave NW,
                Suite 100, Washington, DC 20006
              </Typography>
              <Typography className="text-white mt-2">
                <LocationOnOutlined /> Burke, VA 9570 Burke Road, Unit A, Burke,
                VA 22015
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="container mx-auto mt-6">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Smile Expert Dental. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
