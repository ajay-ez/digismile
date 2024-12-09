import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const LocationSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box
      className="home-section location-section"
      background={"brand.100"}
      color={"brand.200"}
    >
      <Flex
        flexDir={"row"}
        className="responsive-section"
        justifyContent={"space-between"}
        gap={isMobile ? 10 : 20}
        flexWrap={isMobile ? "wrap" : "nowrap"}
      >
        <Box width={"100%"} textAlign={isMobile ? "center" : "left"}>
          {isMobile ? (
            <Text as={"h1"}>
              Two Bay Area dental offices worth smiling about
            </Text>
          ) : (
            <>
              <Text as={"h1"}>Two Bay Area dental offices</Text>
              <Text as={"h1"}>worth smiling about</Text>
            </>
          )}
        </Box>
        <Flex
          width={"100%"}
          justifyContent={isMobile ? "center" : "space-between"}
          gap={isMobile ? 10 : 0}
          flexWrap={"wrap"}
        >
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text as={"h1"}>Washington D.C</Text>
            <Text as={"h5"}>Mon, Wed, Fri: 10am-5pm Hours</Text>
            <Text as={"h5"}>(202) 545-6336</Text>
            <Button mt={4} variant={"location-section-button"}>
              Book a consultation
            </Button>
          </Flex>
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text as={"h1"}>Burke, VA</Text>
            <Text as={"h5"}>Tue, Thu, Sat: 9am-4pm Hours</Text>
            <Text as={"h5"}>(571) 374-8000</Text>
            <Button mt={4} variant={"location-section-button"}>
              Book a consultation
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LocationSection;
