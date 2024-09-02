"use client";

import { Tabs as MuiTabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useSearchParams } from "next/navigation";
import { type ReactNode } from "react";
import { OptionKey, useTabOptions } from "./hooks/useTabOptions";
import UserTabs from "./User/UserTabs";
import { AppointmentTabs } from "./Appointments/AppointmentTabs";

type TabsProps = {
  userId: string;
};
export function Tabs({ userId }: TabsProps) {
  const { menuItems } = useTabOptions({ userId });

  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  const categoryRenderer: Record<OptionKey, ReactNode> = {
    "user-profile": <UserTabs />,
    appointments: <AppointmentTabs />
  };

  return (
    <>
      <MuiTabs
        value={tab}
        aria-label="secondary tabs example "
        sx={{
          marginBottom: "15px"
        }}
      >
        {menuItems.map((item) => (
          <Tab
            key={item.value}
            value={item.value}
            label={item.title}
            onClick={item.onClick}
          />
        ))}
      </MuiTabs>
      {tab && categoryRenderer[tab as OptionKey]}
    </>
  );
}
