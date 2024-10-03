import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserWelcome = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      setUserId(storedUserId);
    }
  }, []);
  return (
    <div className="bg-digiWhiteGray flex gap-16 p-4 px-8 items-center justify-center">
      <Typography className="font-bold font-league text-3xl">
        Hii,
        {/* <span className="text-digiRed">Ajay</span> <br /> */}
        Welcome Back!
      </Typography>
      <Box mt={2} className="flex justify-center">
        <Button
          className="bg-black text-lg text-white rounded-lg p-2 px-8 capitalize hover:bg-gray-800 font-league"
          onClick={() => {
            router.push(
              `/profile/${userId}?tab=appointments&subTab=upcoming-appointments`
            );
          }}
        >
          Check Appointments
        </Button>
      </Box>
    </div>
  );
};

export default UserWelcome;
