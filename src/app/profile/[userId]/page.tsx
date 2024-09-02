import DigiLayout from "@/components/Layout";
import { UserProfile } from "@/features/profile/UserProfile";
import React from "react";

const Profile = () => {
  return (
    <div>
      <DigiLayout>
        <UserProfile />
      </DigiLayout>
    </div>
  );
};

export default Profile;
