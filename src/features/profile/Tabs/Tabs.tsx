"use client";

import { useParams, useSearchParams } from "next/navigation";
import { AppointmentTabs } from "./Appointments/Tabs/AppointmentTabs";
import { UserProfile } from "./User/UserProfile";
import Sidebar from "@/components/common/Sidebar";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";
import PasswordChange from "./User/Components/ChangePassword";
import MobileSidebar from "@/components/common/MobileSidebar";

export function Tabs() {
  const searchParams = useSearchParams();
  const { userId } = useParams() as { userId: string };

  const tab = searchParams.get("tab");
  const { data: userData } = useGetUserDetailsQuery();
  return (
    <div className="flex flex-col md:flex-row gap-4 w-[100%]">
      <div>
        <div className="block md:hidden">
          <MobileSidebar />
        </div>

        <div className=" w-[320px] sticky top-0 h-[100vh] hidden md:block">
          <Sidebar userData={userData} />
        </div>
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
