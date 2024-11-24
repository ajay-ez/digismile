import { Typography, Divider } from "@mui/material";
import React from "react";
interface Props {
  renderToHome: boolean;
  showTitle?: boolean;
}
export const ClinicSchedule = ({ renderToHome, showTitle = true }: Props) => {
  return (
    <div
      className={`${renderToHome ? "bg font-poppins-white " : ""} flex flex-col items-center`}
    >
      {showTitle && (
        <Typography
          variant="h1"
          className="text-centr font font-poppins-poppins  mb-8"
        >
          Schedule
        </Typography>
      )}
      <div
        className={` p-8 shadow font-poppins-schedule-shadow rounded-lg ${renderToHome ? " bg-gray-200 w-[100%]" : "bg-white w-[70%]"}`}
      >
        <div
          className={`${renderToHome ? "flex font-poppins justify-between md:justify-center md:gap-[10%] flex-col md:flex-row" : ""}`}
        >
          <div>
            <Typography
              variant="subtitle1"
              className="my-8 font font-poppins-poppins"
            >
              DC Office
            </Typography>
            <div className="flex gap-3 font-poppins justify-between">
              <Typography className="text-blue-700   font-poppins">
                Monday
              </Typography>
              <Typography className="text-blue-700 font-poppins">
                10:00 am - 5:00 pm
              </Typography>
            </div>
            <div className="flex gap-3 font-poppins justify-between">
              <Typography className="text-blue-700 font-poppins">
                Wednesday
              </Typography>
              <Typography className="text-blue-700 font-poppins">
                10:00 am - 5:00 pm
              </Typography>
            </div>
            <div className="flex gap-3 font-poppins justify-between">
              <Typography className="text-blue-700 font-poppins">
                Friday
              </Typography>
              <Typography className="text-blue-700 font-poppins">
                {" "}
                10:00 am - 5:00 pm
              </Typography>
            </div>
          </div>

          {renderToHome && (
            <Divider
              orientation="vertical"
              flexItem
              className="mx-4 w font-poppins-[3px] bg-black mt-8"
            />
          )}

          <div>
            <Typography variant="subtitle1" className="my-8">
              {" "}
              Burke Office
            </Typography>
            <div className="flex gap-3 font-poppins justify-between">
              <Typography>Tuesday</Typography>
              <Typography>09:00 am - 4:00 pm</Typography>
            </div>
            <div className="flex gap-3 font-poppins justify-between">
              <Typography>Thursday</Typography>
              <Typography>09:00 am - 4:00 pm</Typography>
            </div>
            <div className="flex gap-3 font-poppins justify-between">
              <Typography>Saturday</Typography>
              <Typography>09:00 am - 4:00 pm</Typography>
            </div>
          </div>
        </div>
        <Typography className="text-center my font-poppins-4 font-bold text-lg mt-8">
          Enjoy Your Sunday—We’ll Be Ready to Welcome You Back on Monday 😉
        </Typography>
      </div>
    </div>
  );
};
