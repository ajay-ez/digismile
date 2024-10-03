"use client";

import { useParams, useSearchParams } from "next/navigation";
import { AppointmentTabs } from "./Appointments/Tabs/AppointmentTabs";
import { UserProfile } from "./User/UserProfile";
import Sidebar from "@/components/common/Sidebar";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";

export function Tabs() {
  const searchParams = useSearchParams();
  const { userId } = useParams() as { userId: string };

  const tab = searchParams.get("tab");
  const { data: userData } = useGetUserDetailsQuery();
  return (
    <div className="flex gap-4">
      <div className=" ">
        <Sidebar userData={userData} />
      </div>
      <div>
        {tab === "user-profile" && (
          <UserProfile userId={userId} userData={userData} />
        )}
        {tab === "appointments" && <AppointmentTabs userId={userId} />}
      </div>
    </div>
  );
}
