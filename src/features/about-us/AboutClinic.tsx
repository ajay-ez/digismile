import React from 'react';
import { Typography } from '@mui/material';
import { ClinicSchedule } from '@/components/common/ClinicSchedule';

export const AboutClinic = () => {
  return (
    <div className="flex gap-8 mt-3 items-center justify-center ">
      <div className="p-3 w-[50%] rounded-lg">
        <Typography variant="h4" className="text-left mb-5">
          Our Practice and Services
        </Typography>
        <Typography className="text-left">
          Smile Experts Dental provides a wide range of services, including
          routine check ups, cleanings, dental implants, and cosmetic dentistry.
          Our state of the art facilities and expert team ensure top quality
          care for both children and adults. Dr. Mahmood’s commitment to
          excellence and patient-centric approach aim to transform lives, one
          smile at a time.
        </Typography>
        <Typography variant="h4" className="text-left my-8">
          Values and Mission
        </Typography>
        <Typography className="text-left">
          Dr. Andleeb Mahmood is a visionary leader in dentistry, dedicated to
          patient care, continuous learning, and community involvement. Her
          mission is to enhance lives one smile at a time with personalized
          care. At Smile Experts Dental, we uphold her values with state of the
          art technology and a compassionate approach, ensuring the highest
          standard of dental excellence.
        </Typography>
      </div>
      <ClinicSchedule renderToHome={false} />
    </div>
  );
};
