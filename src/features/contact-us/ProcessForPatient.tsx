import React from "react";
import {
  appointment_icon,
  confirmation_icon,
  location_icon
} from "@/assets/images";
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
            desc="Initiate An Appointment Request via call or appointment form."
          />
          {isMobile ? (
            <FaArrowDownLong size={20} />
          ) : (
            <FaArrowRight size={40} />
          )}
          <ProcessCard
            alt="image"
            height={60}
            width={60}
            image={location_icon}
            desc="Select location (Burke or Washington, DC) and an available date."
          />
          {isMobile ? (
            <FaArrowDownLong size={20} />
          ) : (
            <FaArrowRight size={40} />
          )}
          <ProcessCard
            image={confirmation_icon}
            alt="image"
            desc="Our team will reach out to confirm your appointment details."
          />
        </Flex>
      </Flex>
    </Box>
  );
};
