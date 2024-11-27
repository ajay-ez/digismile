import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";
import { Box, Button } from "@chakra-ui/react";

const LandingPageVideo = () => {
  const router = useRouter();

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <div className="relative h-[90vh]">
      {/* <div
        color="transparent"
      >
        <Box className="flex justify-end items-center p-3">
          <Box className="flex flex-col gap-2">
            <Box className="flex items-center gap-2">
              <LocationOnIcon color="error" />
              <h1 className="text-white font-poppins" >
                Washington D.C.
              </h1>
            </Box>
            <Box className="flex items-center gap-2">
              <LocationOnIcon color="error" />
              <h1 className="text-white font-poppins" >
                Burke, VA
              </h1>
            </Box>
          </Box>
        </Box>
      </div> */}

      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/landing_page_video.mp4"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
        <Box>
          <h1
            
            className="font-bold  text-black text-center font-poppins"
          >
            Welcome,
          </h1>
          <h1
            
            className="font-bold font-poppins text-black text-center mt-2"
          >
            Get your best ever
            <br /> Dental Experience !
          </h1>
        </Box>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end m-12">
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

          {/* <div className="flex gap-8">
            <div className="border-[1px] border-blue-600 p-2 px-4 bg-blue-white-gradient rounded-2xl">
              <Call className="text-blue-600" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPageVideo;
