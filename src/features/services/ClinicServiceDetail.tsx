import { YoutubeVideoDialog } from "@/components/common/YoutubeVideoDialog";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  header: string;
  desc: string;
  asset: any;
  videoUrl: string;
  index: number;
}

const ClinicServiceDetail = ({
  header,
  desc,
  asset,
  index,
  videoUrl
}: Props) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl  shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 
        ${index % 2 === 0 ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"}
        flex justify-between items-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 gap-4
      `}
    >
      <div className="md:w-[45%] relative p-4 space-y-4 bg-white/70 rounded-lg shadow-md backdrop-blur-md transition duration-300 ease-in-out transform hover:scale-105 px-8">
        <Typography variant="h5" className="font-bold text-blue-900">
          {header}
        </Typography>
        <Typography variant="body1" className="text-gray-700 leading-relaxed">
          {desc}
        </Typography>

        <div className="flex justify-start">
          <YoutubeVideoDialog videoUrl={videoUrl} />
        </div>
      </div>

      <div className="md:w-[50%] p-4 flex justify-center relative">
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src={asset}
            alt={header}
            className="transition-transform duration-500 ease-in-out hover:scale-110 rounded-lg"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent    opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default ClinicServiceDetail;
