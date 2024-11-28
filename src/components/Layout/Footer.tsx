import { digismileLogoImage } from "@/assets/images";
import { LocationOnOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FollowUsSection } from "./FollowUsSection";
import { Box, Flex, Grid } from "@chakra-ui/react";

const Footer = () => {
  return (
    //   <Box className="home-section">
    // <Flex
    //   flexDir={"column"}
    //   className="responsive-section"
    //   alignItems={"center"}
    //   justifyContent={"center"}
    // ></Flex>
    <Box background={"brand.100"} p={"4vw"} className="home-section">
      <Flex
        flexDir={"column"}
        className="responsive-section"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={digismileLogoImage} alt="logo" width={200} height={100} />
        <Grid justifyContent="space-between">
          <Grid>
            <h1>Pages</h1>
            <h1>
              <Link href="/" color="inherit">
                Home
              </Link>
            </h1>
            <h1>
              <Link href="/clinic-services" color="inherit">
                Services
              </Link>
            </h1>
            <h1>
              <Link href="/about-us" color="inherit">
                About
              </Link>
            </h1>
          </Grid>

          <Grid>
            <h1>Contact</h1>
            <h1>(202) 545-6336 (D.C)</h1>
            <h1>(571) 374-8000 (Burke)</h1>
          </Grid>

          <Grid>
            <FollowUsSection />
          </Grid>

          <Grid>
            <h1>Location</h1>
            <h1>
              <LocationOnOutlined /> Washington D.C. 1747 Pennsylvania Ave NW,
              Suite 100, Washington, DC 20006
            </h1>
            <h1>
              <LocationOnOutlined /> Burke, VA 9570 Burke Road, Unit A, Burke,
              VA 22015
            </h1>
          </Grid>
        </Grid>
        <p>
          &copy; {new Date().getFullYear()} Smile Expert Dental. All rights
          reserved.
        </p>
      </Flex>
    </Box>
  );
};

export default Footer;
