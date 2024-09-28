import { dummy_profile } from '@/assets/images';
import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const ProfileCard = () => {
  return (
    <div className="w-[60%] shadow-2xl rounded-2xl p-4 py-8 m-4">
      <div className="flex gap-8 items-center">
        <Image
          src={dummy_profile}
          alt="profile image"
          className="w-[100px] h-[100px] border-[2px] rounded-lg bg-gray-300"
        />
        <div className="flex flex-col gap-1">
          <Typography className="font-bold text-xl">Satya</Typography>
          <div className="flex justify-between">
            <Typography className="font-bold text-xl">Age: 22</Typography>
            <Typography className="font-bold text-xl">Sex:M</Typography>
          </div>
          <Typography variant="body1">Phone Number : 43242323</Typography>
          <Typography variant="body1">Email : 43242323</Typography>
          <Typography variant="body1">Address : 43242323</Typography>
        </div>
      </div>
    </div>
  );
};
