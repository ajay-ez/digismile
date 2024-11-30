// import React, { useRef, useState } from "react";
// import "./smilecard.scss";
// import { Box } from "@chakra-ui/react";

// // Importing images

// const SmileCard = () => {
//   const sliderRef = useRef<HTMLDivElement | null>(null); // Ref for the slider container
//   const [sliderPosition, setSliderPosition] = useState<number>(50); // Initial slider position at 50%

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!sliderRef.current) return;

//     const bounds = sliderRef.current.getBoundingClientRect();
//     const x = e.clientX - bounds.left; // Mouse X position relative to slider
//     const newPosition = (x / bounds.width) * 100; // Convert to percentage
//     setSliderPosition(Math.max(0, Math.min(newPosition, 100))); // Clamp between 0 and 100
//   };

//   const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
//     if (!sliderRef.current) return;

//     const bounds = sliderRef.current.getBoundingClientRect();
//     const x = e.touches[0].clientX - bounds.left; // Touch X position relative to slider
//     const newPosition = (x / bounds.width) * 100; // Convert to percentage
//     setSliderPosition(Math.max(0, Math.min(newPosition, 100))); // Clamp between 0 and 100
//   };

//   return (
//     <Box
//       ref={sliderRef}
//       className="slider-container"
//       onMouseMove={handleMouseMove}
//       onTouchMove={handleTouchMove}
//     >
//       <Box
//         className="slider-before"
//         style={{
//           width: `${sliderPosition}%`
//         }}
//       ></Box>
//       <Box className="slider-after"></Box>
//       <Box
//         className="slider-handle"
//         style={{ left: `${sliderPosition}%` }}
//         draggable="false"
//       ></Box>
//     </Box>
//   );
// };

// export default SmileCard;

import React, { useRef, useState } from "react";
import "./smilecard.scss";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { slider } from "@/assets/images";

const SmileCard = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null); // Ref for the slider container
  const [sliderPosition, setSliderPosition] = useState<number>(50); // Initial slider position at 50%
  const [isDragging, setIsDragging] = useState<boolean>(false); // To track drag state

  const updatePosition = (clientX: number) => {
    if (!sliderRef.current) return;

    const bounds = sliderRef.current.getBoundingClientRect();
    const x = clientX - bounds.left; // Mouse X position relative to slider
    const newPosition = (x / bounds.width) * 100; // Convert to percentage
    setSliderPosition(Math.max(0, Math.min(newPosition, 100))); // Clamp between 0 and 100
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return; // Only update position if dragging
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return; // Only update position if dragging
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <Box
      ref={sliderRef}
      className="slider-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the slider area
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Box
        className="slider-before"
        style={{
          width: `${sliderPosition}%`
        }}
      ></Box>
      <Box className="slider-after"></Box>
      <Box
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        draggable="false"
      >
        <Image
          className="slider-icon"
          src={slider}
          alt=""
          height={40}
          width={40}
        ></Image>
      </Box>
    </Box>
  );
};

export default SmileCard;
