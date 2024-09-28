import React from 'react';

import { Typography } from '@mui/material';
import projectConstants from '@/projectContants';
import ServiceCard from '../services/ServiceCard';

const Services = () => {
  return (
    <div className="bg-blue-white-gradient py-3">
      <Typography variant="h3" className="text-center p-3 font-bold">
        Our Services
      </Typography>
      <Typography className="text-center m-2 font-bold">
        Comprehensive Services for Optimal Oral Health.
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projectConstants.clinicService.slice(0, 3).map((service) => (
          <ServiceCard
            key={service.alt}
            title={service.title}
            desc={service.desc}
            image={service.image}
            alt={service.alt}
          />
        ))}
      </div>
      <Typography className="font-semibold text-center mt-2">
        Our state-of-the-art facilities are equipped with the latest technology
        to <br />
        ensure optimal care for both children and adults
      </Typography>
    </div>
  );
};

export default Services;
