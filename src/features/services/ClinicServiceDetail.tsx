import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
interface Props {
  header: string;
  desc: string;
  asset: any;
  headerImage: any;
  index: number;
}
const ClinicServiceDetail = ({
  header,
  desc,
  asset,
  index,
  // eslint-disable-next-line no-unused-vars
  headerImage
}: Props) => {
  return (
    <div
      className={`${index % 2 === 0 ? "flex" : "flex flex-row-reverse"} justify-between items-centerp-3 `}
    >
      <div className="w-[40%]">
        <div className="flex gap-2 ">
          <Typography className="text-digiDarkBlue mb-2" variant="h4">
            {header}
          </Typography>
          {/* <Image src={headerImage} alt={header} /> */}
        </div>
        <Typography variant="body1">{desc}</Typography>
      </div>
      <div className="w-[50%]">
        <Image src={asset} alt={header} />
      </div>
    </div>
  );
};

export default ClinicServiceDetail;
