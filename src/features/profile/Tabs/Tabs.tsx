"use client";

import { useParams, useSearchParams } from "next/navigation";
import { AppointmentTabs } from "./Appointments/Tabs/AppointmentTabs";
import { UserProfile } from "./User/UserProfile";
import Sidebar from "@/components/common/Sidebar";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";
import PasswordChange from "./User/Components/ChangePassword";

export function Tabs() {
  const searchParams = useSearchParams();
  const { userId } = useParams() as { userId: string };

  const tab = searchParams.get("tab");
  const { data: userData } = useGetUserDetailsQuery();
  return (
    <div className="flex gap-4 w-[100%]">
      <div className=" w-[320px]">
        <Sidebar userData={userData} />
      </div>
      <div
        className={`${tab === "change-password" ? " w-[100%] flex flex-col justify-center items-center align-middle" : ""}`}
      >
        <div>
          {tab === "user-profile" && (
            <UserProfile userId={userId} userData={userData} />
          )}
          {tab === "appointments" && <AppointmentTabs userId={userId} />}
          {tab === "change-password" && <PasswordChange />}
        </div>
      </div>
    </div>
  );
}
