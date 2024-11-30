import ServiceCard from "@/features/services/ServiceCard";
import React from "react";
import projectConstants from "@/projectContants";
import DigiLayout from "@/components/Layout";
import FAQ from "@/features/services/Faqs";
import { faq } from "@/assets/images";
import Image from "next/image";
import SmileJourney from "@/features/services/SmileJourney";
import ClinicServiceDetail from "@/features/services/ClinicServiceDetail";
import { TextImageOverlay } from "@/components/common/TextImageOverlay";
import { Stack } from "@chakra-ui/react";

const ClinicServices = () => {
  return (
    <DigiLayout>
      <div className="bg-seviceBg min-h-screen pb-16  ">
        <TextImageOverlay title="Services" />
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 p-4 mt-24">
          {projectConstants.clinicService.map((service) => (
            <ServiceCard
              key={service.alt}
              title={service.title}
              desc={service.desc}
              image={service.image}
              alt={service.alt}
              showLearnMore={false}
            />
          ))}
        </div>
      </div>

      <div className="bg-blue-white-gradient flex flex-col gap-24">
        <div className="flex items-center justify-center mx-3 pt-16">
          <SmileJourney />
        </div>

        {/* Faqs */}
        <div className="flex gap-10 p-8 ">
          <div className="md:w-[50%]">
            <h1 className="text-center mb-16  ">Frequently Ask Question</h1>
            <FAQ />
          </div>
          <Image src={faq} alt="Faq's" className="w-[40%] hidden sm:block" />
        </div>

        {/* Services with video */}
        <div>
          <h1 className="text-center  mb-2  ">
            Comprehensive Dental SERVICES by Smile Experts Dental
          </h1>
          <h1 className="text-center mb-16  ">Your Path to a Radiant Smile</h1>
          <Stack gap={4} className="p-4 ">
            {projectConstants.clinicServiceDetails.map(
              (serviceDetail: any, index: number) => (
                <ClinicServiceDetail
                  header={serviceDetail.header}
                  asset={serviceDetail.asset}
                  desc={serviceDetail.desc}
                  videoUrl={serviceDetail.videoUrl}
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
