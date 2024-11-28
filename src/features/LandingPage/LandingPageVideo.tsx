import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "@/utils/constant";

const LandingPageVideo = () => {
  const router = useRouter();

  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <Box
      height={isMobile ? "initial" : "100vh"}
      marginTop={isMobile ? HEADER_HEIGHT : "unset"}
      width={"100vw"}
      position={"relative"}
    >
      <Flex
        flexDir={"column"}
        width={"-webkit-fill-available"}
        alignItems={"center"}
        justifyContent={"center"}
        position={isMobile ? "relative" : "absolute"}
        transform={isMobile ? "unset" : "translate(0, -50%)"}
        top={isMobile ? "unset" : "50%"}
        zIndex={2}
        marginX={isMobile ? "0" : "4rem"}
        padding={isMobile ? "3rem 1rem" : "0"}
        color={"white.800"}
        bg={isMobile ? "brand.100" : "transparent"}
      >
        <Text as={"h1"} className="heading">
          Your smile deserves the best.
        </Text>
        <Text as={"h1"} className="heading">
          crafted just for you
        </Text>
        <Text as={"h4"} mt={8}>
          Your smile deserves the best—gentle jkkjuih uhui hiuhiuh
        </Text>
        <Text as={"h4"}>Your smile deserves the best—gentle</Text>
        <Button mt={8} variant={"brand"}>
          Request Appointment
        </Button>
        <Button mt={3} variant={"brand-second"}>
          Services
        </Button>
      </Flex>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/landing_page4.mp4"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(50%)"
        }}
      />
    </Box>
  );
};

export default LandingPageVideo;
