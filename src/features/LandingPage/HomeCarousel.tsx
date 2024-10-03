import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { home_1, home_2, home_3 } from "@/assets/images";
import Image from "next/image";
import { AppBar, Typography, Box, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";
import { Call } from "@mui/icons-material";

const carouselItems = [
  { src: home_1, alt: "Image 1", text: "Text over Image 1" },
  { src: home_2, alt: "Image 2", text: "Text over Image 2" },
  { src: home_3, alt: "Image 3", text: "Text over Image 2" }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

const HomeCarousel = () => {
  const router = useRouter();

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <div className="relative">
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10
        }}
      >
        <Box className="flex justify-end items-center p-3">
          <Box className="flex flex-col gap-2">
            <Box className="flex items-center gap-2">
              <LocationOnIcon color="error" />
              <Typography className="text-white" variant="body1">
                Washington D.C.
              </Typography>
            </Box>
            <Box className="flex items-center gap-2">
              <LocationOnIcon color="error" />
              <Typography className="text-white" variant="body1">
                Burke, VA
              </Typography>
            </Box>
          </Box>
        </Box>
      </AppBar>

      {/* Carousel */}
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-[90vh]">
            <Image className="w-full" src={item.src} alt={item.alt} />

            <div className="absolute inset-0 flex  items-center justify-center text-white text-3xl font-bold">
              <Box>
                <Typography
                  variant="h5"
                  className="font-bold font-league text-digiDarkBlue text-center"
                >
                  Welcome Back!
                </Typography>
                <Typography
                  variant="h4"
                  className="font-bold font-league text-digiDarkBlue text-center mt-2"
                >
                  Get your best ever
                  <br /> Dental Experience!
                </Typography>
              </Box>
            </div>

            <div className="absolute inset-0 flex flex-col  justify-end m-12">
              <div className="flex gap-8 items-center">
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
                <div className="border-[1px] border-blue-600 p-2 px-4 bg-blue-white-gradient rounded-2xl">
                  <Call className="text-blue-600" />
                </div>
                <div>
                  <Typography className="font-bold">Call us</Typography>
                  <Typography>(571) 374-8000</Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
