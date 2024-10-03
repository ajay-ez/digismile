import { Dialog, Box, Typography } from "@mui/material";
import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";

type SuccessPopupProps = {
  open: boolean;
  onClose: () => void;
  successMessage: string;
};
export const SuccessPopup = ({
  open,
  onClose,
  successMessage
}: SuccessPopupProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box className="w-80 h-64 flex flex-col justify-center items-center gap-3">
        <Box className="w-20 h-20 bg-digiDarkBlue rounded-full flex items-center justify-center">
          <DoneAllIcon className="text-white text-5xl" />
        </Box>
        <Typography className="font-bold text-2xl">{successMessage}</Typography>
      </Box>
    </Dialog>
  );
};
