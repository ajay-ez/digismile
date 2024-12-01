import React from "react";
import {
  appointment_icon,
  confirmation_icon,
  location_icon
} from "@/assets/images";
import { ProcessCard } from "./ProcessCard";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export const ProcessForPatient = () => {
  return (
    // <div className=" flex flex-col gap-8 items-center">
    //   <h1 className="text-center">
    //     Process For New Patients
    //   </h1>
    //   <Stack className="flex flex-col md:flex-row  items-center  justify-center">
    //     <div className="flex flex-col md:flex-row  items-center">
    //       <ProcessCard
    //         alt="image"
    //         image={appointment_icon}
    //         desc="Initiate Appointment Request via call or appointment form."
    //       />
    //       <ForwardIcon className="w-[110px] h-[40px]" />
    //     </div>

    //     <div className=" flex flex-col md:flex-row  gap-2 items-center">
    //       <ProcessCard
    //         alt="image"
    //         image={location_icon}
    //         desc="Select location (Burke or Washington, DC) and an available date ."
    //       />
    //       <ForwardIcon className="w-[110px] h-[40px]" />
    //     </div>
    //     <div className="flex gap-2 items-center">
    //       <ProcessCard
    //         alt="image"
    //         image={confirmation_icon}
    //         desc="Our team will reach out to confirm your appointment details."
    //       />
    //     </div>
    //   </Stack>
    // </div>
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
        <Flex alignItems={"center"} gap={10}>
          <ProcessCard
            alt="image"
            image={appointment_icon}
            desc="Initiate Appointment Request via call or appointment form."
          />
          <IoMdArrowRoundForward size={40} />
          <ProcessCard
            alt="image"
            image={appointment_icon}
            desc="Initiate Appointment Request via call or appointment form."
          />
          <IoMdArrowRoundForward size={40} />
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
