import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  CircularProgress
} from "@mui/material";

interface CancelBookingPopupProps {
  open: boolean;
  onClose: () => void;
  onCancelBooking: () => void;
  isLoading: boolean;
}

const CancelBookingPopup: React.FC<CancelBookingPopupProps> = ({
  open,
  onClose,
  onCancelBooking,
  isLoading
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4
        }}
      >
        <Typography variant="h6" component="h2">
          Cancel Booking
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Are you sure you want to cancel this booking?
        </Typography>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
          <Button variant="contained" color="error" onClick={onCancelBooking}>
            {isLoading ? <CircularProgress /> : "Confirm Cancellation"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CancelBookingPopup;
