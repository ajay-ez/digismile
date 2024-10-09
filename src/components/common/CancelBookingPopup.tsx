import React from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Dialog
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
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4
        }}
      >
        <Typography variant="h6" component="h2" className="font-bold">
          Cancel Booking
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Are you sure you want to cancel this booking?
        </Typography>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            onClick={onClose}
            className="rounded-lg capitalize font-bold"
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onCancelBooking}
            className="rounded-lg capitalize font-bold"
          >
            {isLoading ? <CircularProgress /> : "Confirm Cancellation"}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CancelBookingPopup;
