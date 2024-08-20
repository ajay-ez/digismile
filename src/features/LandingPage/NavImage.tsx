import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { home_1, home_2, home_3 } from "@/assets/images";
import Image from "next/image";
import { Button, AppBar, Typography, Box } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";

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

const NavImage = () => {
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
          {/* <Box className="flex gap-4 items-center ">
            <DigiSmileLogo />
            <Button
              className="text-white hover:bg-green-300 p-1 font-bold rounded-3xl px-4 font-atkinson"
              sx={{ flexGrow: 1 }}
              onClick={() => navigateToSection("about-us")}
            >
              About
            </Button>
            <Button
              className="text-white hover:bg-green-300 p-1 font-bold rounded-3xl px-4 font-atkinson"
              sx={{ flexGrow: 1 }}
              onClick={() => navigateToSection("clinic-services")}
            >
              Services
            </Button>
            <Button
              className="text-white hover:bg-green-300 p-1 font-bold rounded-3xl px-4 font-atkinson"
              sx={{ flexGrow: 1 }}
              onClick={() => navigateToSection("#contact")}
            >
              Contact Us
            </Button>
            <Button
              className="text-white hover:bg-green-300 p-1 font-bold rounded-3xl px-4 font-atkinson"
              sx={{ flexGrow: 1 }}
              onClick={() => navigateToSection("signup")}
            >
              Sign up
            </Button>
          </Box> */}
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
          <div key={index} className="relative h-[80vh]">
            <Image className="w-full" src={item.src} alt={item.alt} />

            <div className="absolute inset-0 flex   items-center justify-start text-white text-3xl font-bold m-2 mx-12">
              <Box>
                <Typography variant="h4" className="font-bold font-league">
                  DENTAL CARE
                  <br /> FOR LIFE
                </Typography>
                <Box className="mt-2">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ position: "absolute", zIndex: 20 }}
                    className="bg-red-900 text-white px-6 font-bold hover:bg-red-600 "
                    onClick={() => navigateToSection("#book_appointment")}
                  >
                    Book Appointment
                    <KeyboardDoubleArrowRightIcon />
                  </Button>
                </Box>
              </Box>
            </div>

            <div className="absolute inset-0 flex items-center justify-start m-2"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavImage;
