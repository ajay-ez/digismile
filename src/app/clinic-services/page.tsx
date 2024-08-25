import ClinicService from "@/features/services/ClinicService";
import React from "react";
import projectConstants from "@/projectContants";
import { Stack, Typography } from "@mui/material";
import DigiLayout from "@/components/Layout";
import FAQ from "@/features/services/Faqs";
import { faq } from "@/assets/images";
import Image from "next/image";
import SmileJourney from "@/features/services/SmileJourney";
import ClinicServiceDetail from "@/features/services/ClinicServiceDetail";
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
      <div className="bg-[#CEE5FE]">
        <div className="flex items-center justify-center mx-3">
          <SmileJourney />
        </div>
        <div className="flex gap-10 p-8 ">
          <div className="w-[50%]">
            <Typography variant="h3" className="text-center mb-16  underline">
              Frequently Ask Question
            </Typography>
            <FAQ />
          </div>
          <Image src={faq} alt="Faq's" className="w-[40%]" />
        </div>
        <div>
          <Stack gap="15px" className="p-4">
            {projectConstants.clinicServiceDetails.map(
              (serviceDetail: any, index: number) => (
                <ClinicServiceDetail
                  header={serviceDetail.header}
                  asset={serviceDetail.asset}
                  desc={serviceDetail.desc}
                  headerImage={serviceDetail.headerImage}
                  index={index}
                  key={serviceDetail.header}
                />
              )
            )}
          </Stack>
        </div>
      </div>
    </DigiLayout>
  );
};

export default ClinicServices;
