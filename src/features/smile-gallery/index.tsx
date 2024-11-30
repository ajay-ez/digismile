"use client";

import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import SmileCard from "./SmileCard";

// const SmileGallery = ({ beforeImage, afterImage }) => {
const SmileGallery = () => {
  return (
    <Box className="home-section" background={"#F7F7F7"} color={"brand.100"}>
      <Flex
        flexDir={"column"}
        className="responsive-service-section"
        width={"100%"}
        textAlign={"center"}
        gap={10}
      >
        <Text as={"h1"} color={"brand.100"} fontWeight={900}>
          Smile Gallery
        </Text>
        <Flex gap={10} justifyContent={"space-between"}>
          <SmileCard />
          <SmileCard />
          <SmileCard />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SmileGallery;
