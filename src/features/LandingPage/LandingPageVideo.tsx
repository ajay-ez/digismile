import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const LandingPageVideo = () => {
  const router = useRouter();

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <Box>
      {/* <div
        color="transparent"
      >
        <Box className="flex justify-end items-center p-3">
          <Box className="flex flex-col gap-2">
            <Box className="flex items-center gap-2">
              <LocationOnIcon color="error" />
              <Text as={'h1'} className="text-white font-poppins" >
                Washington D.C.
              </Text>
            </Box>
            <Box className="flex items-center gap-2">
              <LocationOnIcon color="error" />
              <Text as={'h1'} className="text-white font-poppins" >
                Burke, VA
              </Text>
            </Box>
          </Box>
        </Box>
      </div> */}
      {/* Video Background */}
      <Box height={"100vh"} width={"100vw"} position={"relative"}>
        <video
          autoPlay
          loop
          muted
          playsInline
          // src="/landing_page_video.mp4"
          src="/landing_page4.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(50%)"
          }}
        />
        <Flex
          flexDir={"column"}
          width={"-webkit-fill-available"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"absolute"}
          transform={"translate(0, -50%)"}
          top={"50%"}
          zIndex={2}
          marginX={"4rem"}
          color={"white.800"}
        >
          {/* <Text as={"h1"} className="heading">
            Your smile deserves the best.
          </Text>
          <Text as={"h1"} className="heading">
            crafted just for you
          </Text> */}
          <Text as={"h1"} className="heading">
            Transform your smile with care as unique as you
          </Text>
          {/* <Text as={"h1"} className="heading">
            crafted just for you
          </Text> */}
          {/* <Text as={"h4"} mt={8}>
            Your smile deserves the best—gentle cleanings and personalized
            whitening, crafted just for you.
          </Text> */}
          <Text as={"h4"} mt={8}>
            Your smile deserves the best—gentle jkkjuih uhui hiuhiuh
          </Text>
          <Text as={"h4"}>Your smile deserves the best—gentle</Text>
          <Button mt={8} variant={"brand"}>
            Request Appointment
          </Button>
          {/* <Button mt={3} variant={"brand-second"}>
            Request Appointment
          </Button> */}
        </Flex>
      </Box>

      {/* Overlay Content */}
      {/* <div className="absolute inset-0 flex flex-col justify-end m-12">
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 sm:items-center items-start justify-start">
          <div className="flex gap-8">
            <Button
              variant="contained"
              className="rounded-xl capitalize p-2 px-4"
              onClick={() => {
                navigateToSection("/login");
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              className="rounded-xl capitalize p-2 px-4"
              onClick={() => {
                navigateToSection("/signup");
              }}
            >
              Signup
            </Button>
          </div>
        </div>
      </div> */}
    </Box>
  );
};

export default LandingPageVideo;
