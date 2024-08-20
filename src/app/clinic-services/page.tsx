import ClinicService from "@/features/services/ClinicService";
import React from "react";
import projectConstants from "@/projectContants";
import { Typography } from "@mui/material";
import DigiLayout from "@/components/Layout";

const ClinicServices = () => {
  return (
    <DigiLayout>
      <div className="bg-seviceBg min-h-screen">
        <Typography variant="h3" className="text-center  underline">
          Services
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {projectConstants.clinicService.map((service) => (
            <ClinicService
              key={service.alt}
              title={service.title}
              desc={service.desc}
              image={service.image}
              alt={service.alt}
            />
          ))}
        </div>
      </div>
    </DigiLayout>
  );
};

export default ClinicServices;
