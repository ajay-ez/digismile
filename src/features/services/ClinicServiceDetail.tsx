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
      className={`${index % 2 === 0 ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"}  flex justify-between items-center gap-2 p-3 `}
    >
      <div className="md:w-[40%]  ">
        <div className="flex gap-3 ">
          <Typography className="text-digiDarkBlue mb-2 text-left" variant="h4">
            {header}
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <Typography variant="body1">{desc}</Typography>
          <YoutubeVideoDialog videoUrl={videoUrl} />
        </div>
      </div>
      <div className="md:w-[50%]">
        <Image src={asset} alt={header} />
      </div>
    </div>
  );
};

export default ClinicServiceDetail;
