import React from "react";
import ServiceExplore from "@/components/common/ServiceExplore";
import { pediatric_dentis, root_canal, tooth_whitening } from "@/assets/images";
import { Box, Typography } from "@mui/material";

const Services = () => {
  return (
    <div className=" bg-digiWhiteGray p-3">
      <Typography
        variant="h3"
        className="text-center bg-digiWhiteGray p-3 font-bold"
      >
        Our Services
      </Typography>
      <Typography className="text-center m-2 font-medium">
        Comprehensive Services for
        <span className="text-digiRed"> Optimal Oral Health.</span>
      </Typography>
      <Box className="flex" gap={4}>
        <ServiceExplore alt="service 1" image={root_canal} title="Root canal" />
        <ServiceExplore
          alt="service 1"
          image={tooth_whitening}
          title="Tooth whitening "
        />
        <ServiceExplore
          alt="service 1"
          image={pediatric_dentis}
          title="Pediatric-dentistry"
        />
      </Box>
      <Typography className="font-medium text-center mt-2">
        Our state-of-the-art facilities are equipped with the
        <span className="text-digiRed"> latest technology </span>
        to ensure optimal care for both children and adults
      </Typography>
    </div>
  );
};

export default Services;
