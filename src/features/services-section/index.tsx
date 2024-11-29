import { userImage, userImage1 } from "@/assets/images";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const [isLaptop] = useMediaQuery("(max-width: 1315px)");
  const [isTablet] = useMediaQuery("(max-width: 1000px)");

  const leftItems = [
    {
      id: 1,
      heading: "Root Canals",
      description:
        "Save your tooth with a root canal! Remove infection, decay, and preserve your smile."
    },
    {
      id: 2,
      heading: "Exam & Cleaning",
      description:
        "Regular checkups ensure optimal oral health, detect issues early, and keep your smile fresh."
    },
    {
      id: 3,
      heading: "Fillings",
      description:
        "Restore your teeth with durable fillings, stopping decay, and preventing further damage to your smile."
    }
  ];

  const rightItems = [
    {
      id: 1,
      heading: "Dentures",
      description:
        "Custom dentures offer a natural look and comfortable fit, replacing missing teeth and restoring confidence."
    },
    {
      id: 2,
      heading: "Teeth Whitening",
      description:
        "Achieve a bright, radiant smile by removing stains from smoking, coffee, and daily habits."
    },
    {
      id: 3,
      heading: "Orthodontics",
      description:
        "Straighten your teeth with braces or aligners, achieving a beautiful, aligned smile over time."
    }
  ];

  return (
    <Box className="service-section" background={"#F7F7F7"} color={"brand.100"}>
      <Flex
        flexDir={"column"}
        className="responsive-service-section"
        width={"100%"}
        textAlign={"center"}
      >
        <Box textAlign={"center"} width={"100%"}>
          <Text as={"h6"}>Our services</Text>
          <Text as={"h1"}>Comprehensive Services for Optimal Oral Health.</Text>
        </Box>
        <Flex paddingTop={"4rem"} gap={8}>
          <Flex width={"40%"} flexDir={"column"} gap={20}>
            {leftItems.map((item, index) => (
              <ServiceCard
                key={item.id}
                heading={item.heading}
                description={item.description}
                alignment={"left"}
                isLeftCenter={index === 1}
              />
            ))}
          </Flex>
          <Image src={userImage1} alt="" style={{ width: "20%" }}></Image>
          <Flex width={"40%"} flexDir={"column"} gap={20}>
            {rightItems.map((item, index) => (
              <ServiceCard
                key={item.id}
                heading={item.heading}
                description={item.description}
                alignment={"right"}
                isRightCenter={index === 1}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ServiceSection;
