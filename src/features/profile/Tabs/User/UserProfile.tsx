import React from "react";
import { UserTabs } from "./Tabs/UserTabs";
import { ProfileCard } from "@/features/profile/Tabs/User/Components/ProfileCard";
import UpcomingAppointmentCalendar from "./Components/UpcomingAppointmentCalendar";
import { Stack } from "@chakra-ui/react";
interface UserProfileProps {
  userId: string;
  userData: any;
}
export const UserProfile = ({ userId, userData }: UserProfileProps) => {
  return (
    <Stack>
      <div className="flex flex-col md:flex-row m-4 p-4 gap-8 items-center justify-center">
        <ProfileCard userData={userData} />
        <UpcomingAppointmentCalendar />
      </div>
      <UserTabs userId={userId} />
    </Stack>
  );
};
