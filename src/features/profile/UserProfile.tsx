import React from "react";
import { ProfileCard } from "../../components/common/ProfileCard";
import { Tabs } from "./Tabs/Tabs";

export const UserProfile = () => {
  return (
    <div>
      <ProfileCard />
      <Tabs userId="34223" />
    </div>
  );
};
