import React from 'react';
import { UserTabs } from './Tabs/UserTabs';
import { Stack } from '@mui/material';
import { ProfileCard } from '@/features/profile/Tabs/User/Components/ProfileCard';
import UpcomingAppointmentCalendar from './Components/UpcomingAppointmentCalendar';
interface UserProfileProps {
  userId: string;
}
export const UserProfile = ({ userId }: UserProfileProps) => {
  return (
    <Stack>
      <div className="flex m-4 p-4 gap-8 items-center justify-center">
        <ProfileCard />
        <UpcomingAppointmentCalendar />
      </div>
      <UserTabs userId={userId} />
    </Stack>
  );
};
