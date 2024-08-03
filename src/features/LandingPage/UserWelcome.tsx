import { Typography, Box, Button } from "@mui/material";
import React from "react";

const UserWelcome = () => {
  return (
    <div className="bg-digiWhiteGray flex gap-16 p-4 px-8 items-center justify-center">
      <Typography className="font-bold">
        Hii, <span className="text-digiRed">Ajay</span> <br /> Welcome Back!
      </Typography>
      <Box mt={2} className="flex justify-center">
        <Button
          className="bg-black text-lg text-white rounded-lg p-2 px-8 capitalize hover:bg-gray-800"
          type="submit"
        >
          Check Appointment
        </Button>
      </Box>
    </div>
  );
};

export default UserWelcome;
