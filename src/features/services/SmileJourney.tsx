import { smile_journey } from '@/assets/images';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const SmileJourney = () => {
  return (
    <div className="w-[90%] bg-digiDarkBlue p-3 rounded-2xl">
      <div className="flex gap-2 justify-between">
        <Stack justifyContent={'space-around'}>
          <Typography className="text-white font-bold text-2xl">
            Say Goodbye to Braces Clear Aligners Will Transform Your Smile
            Journey.
          </Typography>
          <div>
            <Button className="capitalize rounded-xl" variant="contained">
              Learn More <KeyboardArrowRight />
            </Button>
          </div>
        </Stack>
        <Image src={smile_journey} alt="smile" />
      </div>
    </div>
  );
};

export default SmileJourney;
