import { Typography } from "@mui/material";
import React from "react";
interface Props {
  renderToHome: boolean;
}
export const ClinicSchedule = ({ renderToHome }: Props) => {
  return (
    <div
      className={`${renderToHome ? "bg-blue-white-gradient" : ""} flex flex-col items-center`}
    >
      <Typography variant="h1" className="text-center  mb-8">
        Schedule
      </Typography>
      <div
        className={` p-8 shadow-schedule-shadow rounded-lg ${renderToHome ? " bg-schedule-home-gradient w-[100%]" : "bg-schedule-gradient w-[70%]"}`}
      >
        <div
          className={`${renderToHome ? "flex justify-between flex-col sm:flex-row" : ""}`}
        >
          <div>
            <Typography variant="subtitle1" className="my-8">
              DC Office
            </Typography>
            <div className="flex gap-3 justify-between">
              <Typography>Monday</Typography>
              <Typography> 10:00 am - 5:00 pm</Typography>
            </div>
            <div className="flex gap-3 justify-between">
              <Typography>Wednesday</Typography>
              <Typography> 10:00 am - 5:00 pm</Typography>
            </div>
            <div className="flex gap-3 justify-between">
              <Typography>Friday</Typography>
              <Typography> 10:00 am - 5:00 pm</Typography>
            </div>
          </div>
          <div>
            <Typography variant="subtitle1" className="my-8">
              Burke Office
            </Typography>
            <div className="flex gap-3 justify-between">
              <Typography>Tuesday</Typography>
              <Typography>09:00 am - 4:00 pm</Typography>
            </div>
            <div className="flex gap-3 justify-between">
              <Typography>Thursday</Typography>
              <Typography>09:00 am - 4:00 pm</Typography>
            </div>
            <div className="flex gap-3 justify-between">
              <Typography>Saturday</Typography>
              <Typography>09:00 am - 4:00 pm</Typography>
            </div>
          </div>
        </div>
        <Typography className="text-center my-4 font-bold text-lg">
          Enjoy Your Sunday—We’ll Be Ready to Welcome You Back on Monday😉
        </Typography>
      </div>
    </div>
  );
};
