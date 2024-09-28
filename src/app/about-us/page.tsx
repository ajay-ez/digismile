import DigiLayout from '@/components/Layout';
import { AboutDoctor } from '@/features/about-us/AboutDoctor';
import { CommunityCare } from '@/features/about-us/CommunityCare';
import { NewPatients } from '@/features/about-us/NewPatients';
import { AboutClinic } from '@/features/about-us/AboutClinic';
import { Stack, Typography } from '@mui/material';

import React from 'react';

const AboutUs = () => {
  return (
    <DigiLayout>
      <Stack className="bg-seviceBg min-h-screen gap-8 p-2">
        <Typography variant="h3" className="text-center underline">
          About Us
        </Typography>
        <AboutDoctor />
        <AboutClinic />
        <CommunityCare />
        <NewPatients />
      </Stack>
    </DigiLayout>
  );
};

export default AboutUs;
