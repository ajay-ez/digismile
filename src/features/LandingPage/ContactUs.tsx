import { Box, Typography } from "@mui/material";
import React from "react";
import ContactUsForm from "./ContactForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Map from "@/components/common/Map";
const ContactUs = () => {
  return (
    <div>
      <Typography variant="h1" className="text-center p-4 font-bold">
        Contact Us
      </Typography>

      <div className="flex p-3 flex-col gap-8 md:flex-row justify-between bg-digiLightBlue rounded-xl m-3">
        <Box className="flex flex-col justify-center gap-4 md:w-[40%]">
          <Map />
          <Typography variant="subtitle1">Smile Experts Dental</Typography>
          <Box className="flex items-center gap-2">
            <LocationOnIcon />
            <Typography variant="subtitle2">
              Burke, VA 9570 Burke Road Unit A Burke, VA 22015 (571) 374-8000
            </Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <LocationOnIcon />
            <Typography variant="subtitle2">
              Washington D.C.1747 Pennsylvania Aven NWSuite 100 Washington, DC
              20006 (202) 545-6336
            </Typography>
          </Box>
        </Box>
        <Box className="px-4 md:w-[40%]">
          <ContactUsForm />
        </Box>
      </div>
    </div>
  );
};

export default ContactUs;
