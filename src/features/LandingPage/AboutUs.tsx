import { doctor } from "@/assets/images";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <Box className="flex justify-between p-3">
        <Box
          className="bg-digiDarkGray border-l border-t rounded-tl-[100px] rounded-br-[100px] p-8"
          width={"50%"}
        >
          <Typography variant="h3" className="text-center mb-8 font-bold">
            Who are We
          </Typography>
          <Typography className="text-center">
            Smile Experts Dental provides dental services, The owner and Founder
            of Smile Experts is Dr. Abdeel Mahmood with over 15 years of
            experience, She treats patients like family, providing personalized,
            high-quality dental treatment. We offer routine check-ups, Virtual
            Consultations, online appointments, and personalized dashboards for
            every particular patient. We provide many services, from tooth
            cleanings to dental implants, and cosmetic dentistry. Our services
            are designed to be budget-friendly, ensuring high-quality dental
            care is accessible and affordable for all patients.
          </Typography>

          <Box mt={2} className="flex justify-center">
            <Button
              className="bg-digiRed text-lg text-white rounded-lg p-2 px-8 capitalize hover:bg-red-800"
              type="submit"
            >
              Read More
            </Button>
          </Box>
        </Box>
        <Box width={"40%"}>
          <Image className="rounded-full" src={doctor} alt="dr. image" />
          <Typography className="text-digiRed font-semibold text-center">
            Dr. Abdeel Mahmood
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
