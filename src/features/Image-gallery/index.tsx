import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import {
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
  gallery_8
} from "@/assets/images";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  { id: 2, src: gallery_2, alt: "Image 2" },
  { id: 1, src: gallery_1, alt: "Image 1" },
  { id: 4, src: gallery_3, alt: "Image 3" },
  { id: 4, src: gallery_4, alt: "Image 4" },
  { id: 5, src: gallery_5, alt: "Image 5" },
  { id: 6, src: gallery_6, alt: "Image 6" },
  { id: 8, src: gallery_8, alt: "Image 8" }
];

const ImageGallery = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const MotionBox = motion("Box");

  const handleNext = () => {
    setDirection(1);
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box className="home-section">
      <Flex
        flexDir={"column"}
        className="responsive-section"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text
          as={"h1"}
          color={"brand.100"}
          fontWeight={900}
          className="heading"
        >
          A place for transformation
        </Text>
        {isMobile ? (
          <Text as={"h3"} mt={4} color={"brand.100"} textAlign={"center"}>
            Receive exceptional dental care within spaces designed for personal
          </Text>
        ) : (
          <>
            <Text as={"h3"} color={"brand.100"} mt={4}>
              Receive exceptional dental care within spaces designed for
              personal rejuvenation and renewal
            </Text>
            <Text as={"h3"} color={"brand.100"}>
              rejuvenation and renewal
            </Text>
          </>
        )}
        <Flex flexDir={"column"} width={"100%"} mt={16}>
          <AnimatePresence initial={false} custom={direction}>
            <MotionBox
              key={imageIndex}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={{
                enter: (direction) => ({
                  x: direction > 0 ? "100%" : "-100%",
                  opacity: 0
                }),
                center: {
                  x: 0,
                  opacity: 1
                },
                exit: (direction) => ({
                  x: direction > 0 ? "-100%" : "100%",
                  opacity: 0
                })
              }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              style={{
                height: "100%"
              }}
            >
              <Image
                key={images[imageIndex].src}
                src={images[imageIndex].src}
                alt={images[imageIndex].alt}
                // layout="fill"
                objectFit="cover"
                style={{
                  borderRadius: "10px"
                }}
              />
            </MotionBox>
          </AnimatePresence>
          <Flex
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={8}
            position={"relative"}
            mt={8}
          >
            <div className="button-up" onClick={handlePrevious}></div>
            <div className="button-down" onClick={handleNext}></div>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageGallery;
