import React from "react";
import { appointment_icon } from "@/assets/images";
import { ProcessCard } from "./ProcessCard";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { FaArrowDownLong, FaArrowRight } from "react-icons/fa6";

export const ProcessForPatient = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box className="home-section">
      <Flex
        flexDir={"column"}
        className="responsive-section"
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
      >
        <Text as={"h1"} color={"brand.100"} fontWeight={900}>
          Process For New Patients
        </Text>
        <Flex
          alignItems={"center"}
          gap={10}
          flexDir={isMobile ? "column" : "row"}
          width={"100%"}
        >
          <ProcessCard
            alt="image"
            image={appointment_icon}
            desc="Initiate Appointment Request via call or appointment form."
          />
          {isMobile ? (
            <FaArrowDownLong size={20} />
          ) : (
            <FaArrowRight size={40} />
          )}
          <ProcessCard
            alt="image"
            image={appointment_icon}
            desc="Initiate Appointment Request via call or appointment form."
          />
          {isMobile ? (
            <FaArrowDownLong size={20} />
          ) : (
            <FaArrowRight size={40} />
          )}
          <ProcessCard
            alt="image"
            image={appointment_icon}
            desc="Initiate Appointment Request via call or appointment form."
          />
        </Flex>
      </Flex>
    </Box>
  );
};
