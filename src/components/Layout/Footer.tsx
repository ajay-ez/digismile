import { digismileLogoImage } from "@/assets/images";
import { LocationOnOutlined } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { FollowUsSection } from "./FollowUsSection";
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";

const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box background={"brand.100"} className="home-section">
      <Flex
        flexDir={"column"}
        className="responsive-footer-section"
        alignItems={"center"}
        justifyContent={"center"}
        gap={16}
        width={"100%"}
      >
        <Image src={digismileLogoImage} alt="logo" width={200} height={100} />
        <Flex
          justifyContent="space-between"
          alignItems={"center"}
          gap={20}
          width={"100%"}
          padding={"0 2rem"}
          flexDir={isMobile ? "column" : "row"}
        >
          <Flex width={"100%"} flexDir={"column"} gap={8}>
            <Flex
              flexDir={"column"}
              width={"100%"}
              padding={"0 0 2rem 0"}
              alignItems={isMobile ? "center" : "start"}
              borderBottom={"1px white solid"}
            >
              <Text as={"h1"} className="footer-heading">
                Washington D.C
              </Text>
              <Text as={"h1"} className="footer-heading">
                Dental Studio
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Flex width={"100%"} flexDir={"column"} gap={6}>
                <Text as={"h5"}>hello@test.com</Text>
                <Text as={"h5"}>+1 415-857-0150</Text>
                <Text as={"h5"}>hello@test.com</Text>
              </Flex>
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>
                  Washington D.C. 1747 Pennsylvania Ave NW, Suite 100,
                  Washington, DC 20006
                </Text>
                <div className="footer-location-hours">
                  Hours <br /> Mon, Tue, Fri: 8am-5pm Hours <br /> Mon, Tue,
                  Fri: 8am-5pm
                </div>
              </Flex>
            </Flex>
            <Button
              mt={4}
              variant={"footer-button"}
              width={isMobile ? "100%" : "300px"}
            >
              Book a consultation
            </Button>
          </Flex>
          <Flex width={"100%"} flexDir={"column"} gap={8}>
            <Flex
              flexDir={"column"}
              width={"100%"}
              padding={"0 0 2rem 0"}
              alignItems={isMobile ? "center" : "start"}
              borderBottom={"1px white solid"}
            >
              <Text as={"h1"} className="footer-heading">
                Washington D.C
              </Text>
              <Text as={"h1"} className="footer-heading">
                Dental Studio
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Flex width={"100%"} flexDir={"column"} gap={6}>
                <Text as={"h5"}>hello@test.com</Text>
                <Text as={"h5"}>+1 415-857-0150</Text>
                <Text as={"h5"}>hello@test.com</Text>
              </Flex>
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>
                  Washington D.C. 1747 Pennsylvania Ave NW, Suite 100,
                  Washington, DC 20006
                </Text>
                <div className="footer-location-hours">
                  Hours <br /> Mon, Tue, Fri: 8am-5pm Hours <br /> Mon, Tue,
                  Fri: 8am-5pm
                </div>
              </Flex>
            </Flex>
            <Button
              mt={4}
              variant={"footer-button"}
              width={isMobile ? "100%" : "300px"}
            >
              Book a consultation
            </Button>
          </Flex>
        </Flex>
        <p>
          &copy; {new Date().getFullYear()} Smile Expert Dental. All rights
          reserved.
        </p>
      </Flex>
    </Box>
  );
};

export default Footer;
