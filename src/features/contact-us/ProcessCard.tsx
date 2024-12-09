import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";

interface ProcessCardProps {
  image: StaticImageData;
  alt: string;
  desc: string;
  height?: number;
  width?: number;
}

export const ProcessCard = ({
  image,
  alt,
  desc,
  height,
  width
}: ProcessCardProps) => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Flex
      flexDir={"column"}
      maxW={isMobile ? "100%" : "300px"}
      alignItems={"center"}
      p={8}
      gap={height && width ? 2 : 4}
      background={"#fff"}
      borderRadius={"10px"}
      boxShadow={"0px 4px 4px rgb(210 198 198 / 25%)"}
    >
      <Image src={image} alt={alt} height={height || 50} width={width || 50} />
      <Text as={"h4"} textAlign={"center"}>
        {desc}
      </Text>
    </Flex>
  );
};
