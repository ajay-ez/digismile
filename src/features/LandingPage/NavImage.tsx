import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dentist, doctor_2 } from "@/assets/images";
import Image from "next/image";
import { Button, AppBar, Typography, Box } from "@mui/material";
import DigiSmileLogo from "@/components/icons/DigiSmileLogo";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";

const carouselItems = [
  { src: dentist, alt: "Image 1", text: "Text over Image 1" },
  { src: doctor_2, alt: "Image 2", text: "Text over Image 2" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const NavImage = () => {
  const router = useRouter();

  const navigateToSection = (id: string) => {
    router.push(`#${id}`);
  };

  return (
    <div className="relative mb-4">
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Box className="flex justify-between items-center p-3">
          <Box className="flex gap-4 items-center ">
            <DigiSmileLogo />
            <Button
              className="text-white hover:bg-green-300 p-1 font-bold rounded-3xl px-4"
              sx={{ flexGrow: 1 }}
              onClick={() => navigateToSection("about")}
            >
              About
            </Button>
            <Button
              className="text-white hover:bg-green-300 p-1 font-bold rounded-3xl px-4"
              sx={{ flexGrow: 1 }}
              onClick={() => navigateToSection("services")}
            >
              Services
            </Button>
            <Button
              className="text-white hover:bg-green-300 p-1 font-bold rounded-3xl px-4"
              sx={{ flexGrow: 1 }}
              onClick={() => navigateToSection("contact")}
            >
              Contact Us
            </Button>
          </Box>
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
          <div key={index} className="relative">
            <Box height={"70vh"}>
              <Image className="w-full" src={item.src} alt={item.alt} />
            </Box>

            <div className="absolute inset-0 flex items-center justify-start text-white text-3xl font-bold m-2">
              DENTAL CARE
              <br /> FOR LIFE
            </div>

            <div className="absolute inset-0 flex items-center justify-start m-2">
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ position: "absolute", bottom: "90px", zIndex: 20 }}
                className="bg-red-900 text-white px-6 font-bold hover:bg-red-600 "
                onClick={() => navigateToSection("book_appointment")}
              >
                Book Appointment
                <KeyboardDoubleArrowRightIcon />
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NavImage;
