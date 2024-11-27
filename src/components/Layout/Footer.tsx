import { digismileLogoImage } from "@/assets/images";
import { LocationOnOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FollowUsSection } from "./FollowUsSection";
import { Grid } from "@chakra-ui/react";
const Footer = () => {
  const title = "font-bold text-xl mt-4 text-white";
  return (
    <footer className="bg-footer-blue-gradient text-white py-4 mt-auto p-5">
      <div className="flex flex-col    gap-8 justify-between">
        <div className="flex flex-col justify-center items-center">
          <Image src={digismileLogoImage} alt="logo" width={200} height={100} />
          <h1 className="mt-2 text-center text-2xl text-white">
            Brighten Your Smile Today
          </h1>
        </div>

        <div>
          <Grid justifyContent="space-between">
            <Grid>
              <h1 className={title}>Pages</h1>
              <h1 className="text-white mt-2">
                <Link href="/" color="inherit">
                  Home
                </Link>
              </h1>
              <h1 className="text-white mt-2">
                <Link href="/clinic-services" color="inherit">
                  Services
                </Link>
              </h1>
              <h1 className="text-white mt-2">
                <Link href="/about-us" color="inherit">
                  About
                </Link>
              </h1>
            </Grid>

            <Grid>
              <h1 className={title}>Contact</h1>
              <h1 className="text-white mt-2">
                (202) 545-6336 (D.C)
              </h1>
              <h1 className="text-white mt-2">
                (571) 374-8000 (Burke)
              </h1>
            </Grid>

            <Grid>
              <FollowUsSection />
            </Grid>

            <Grid>
              <h1 className={title}>Location</h1>
              <h1 className="text-white mt-2">
                <LocationOnOutlined /> Washington D.C. 1747 Pennsylvania Ave NW,
                Suite 100, Washington, DC 20006
              </h1>
              <h1 className="text-white mt-2">
                <LocationOnOutlined /> Burke, VA 9570 Burke Road, Unit A, Burke,
                VA 22015
              </h1>
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
