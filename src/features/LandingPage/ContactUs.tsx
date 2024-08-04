import { Box, Typography } from "@mui/material";
import React from "react";
import ContactUsForm from "./ContactForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  return (
    <div>
      <Typography variant="h3" className="text-center p-4 font-bold">
        Contact Us
      </Typography>

      <div className="flex p-3 justify-between bg-digiLightBlue rounded-xl m-3">
        <Box width={"50%"} className="flex flex-col justify-center gap-4">
          <Typography variant="h5">Smile Experts Dental</Typography>
          <Box className="flex items-center gap-2">
            <LocationOnIcon />
            <Typography variant="body1">
              Burke, VA 9570 Burke Road Unit A Burke, VA 22015 (571) 374-8000
            </Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <LocationOnIcon />
            <Typography variant="body1">
              Washington D.C.1747 Pennsylvania Aven NWSuite 100 Washington, DC
              20006 (202) 545-6336
            </Typography>
          </Box>
        </Box>
        <Box width={"40%"}>
          <ContactUsForm />
        </Box>
      </div>
    </div>
  );
};

export default ContactUs;
