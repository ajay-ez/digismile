import React from "react";
import ServiceExplore from "@/components/common/ServiceExplore";
import { dentist } from "@/assets/images";
import { Box, Typography } from "@mui/material";

const Services = () => {
  return (
    <div className=" bg-digiWhiteGray p-3">
      <Typography variant="h3" className="text-center bg-digiWhiteGray p-3">
        Our Services
      </Typography>
      <Typography className="text-center m-2 font-medium">
        Comprehensive Services for
        <span className="text-digiRed"> Optimal Oral Health.</span>
      </Typography>
      <Box className="flex" gap={4}>
        <ServiceExplore alt="service 1" image={dentist} title="Root canal" />
        <ServiceExplore
          alt="service 1"
          image={dentist}
          title="Tooth whitening "
        />
        <ServiceExplore
          alt="service 1"
          image={dentist}
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
