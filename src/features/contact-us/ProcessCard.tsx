import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";

interface ProcessCardProps {
  image: StaticImageData;
  alt: string;
  desc: string;
}

export const ProcessCard = ({ image, alt, desc }: ProcessCardProps) => {
  return (
    <Flex
      flexDir={"column"}
      width={"300px"}
      alignItems={"center"}
      p={8}
      gap={4}
      background={"#fff"}
      borderRadius={"10px"}
      boxShadow={"0px 4px 4px rgb(210 198 198 / 25%)"}
    >
      <Image src={image} alt={alt} height={50} width={50} />
      <Text as={"h4"} textAlign={"center"}>
        {desc}
      </Text>
    </Flex>
  );
};
