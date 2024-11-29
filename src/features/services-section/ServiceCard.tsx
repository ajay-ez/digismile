import { logo } from "@/assets/images";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

interface Properties {
  alignment: String;
  isLeftCenter?: boolean;
  isRightCenter?: boolean;
  heading: String;
  description: String;
}

const ServiceCard = ({
  alignment,
  isLeftCenter,
  isRightCenter,
  description,
  heading
}: Properties) => {
  const [isLaptop] = useMediaQuery("(max-width: 1315px)");
  const [isTablet] = useMediaQuery("(max-width: 1000px)");

  return (
    <Flex
      justifyContent={alignment === "left" ? "end" : "start"}
      gap={6}
      margin={isLeftCenter ? "0 4rem 0 0 " : isRightCenter ? "0 0 0 4rem" : ""}
    >
      <Image
        src={logo}
        alt=""
        style={{
          borderRadius: "50%",
          border: "1px solid black",
          height: `${isLaptop ? "60px" : "100px"}`,
          width: `${isLaptop ? "60px" : "100px"}`,
          padding: "8px"
        }}
      ></Image>
      <Box
        width={
          alignment === "left"
            ? isLaptop
              ? "200px"
              : "250px"
            : isLaptop
              ? "200px"
              : "300px"
        }
        textAlign={alignment === "left" ? "end" : "start"}
      >
        <Text as={isLaptop ? "h3" : "h2"}>{heading}</Text>
        <Text as={isLaptop ? "h6" : "h5"}>{description}</Text>
      </Box>
    </Flex>
  );
};

export default ServiceCard;
