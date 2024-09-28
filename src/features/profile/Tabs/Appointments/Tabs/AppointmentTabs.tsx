"use client";

import { Tabs as MuiTabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useSearchParams } from "next/navigation";
import { type ReactNode } from "react";
import { OptionKey, useTabOptions } from "./hooks/useTabOptions";
import { AppointmentHistoryTable } from "./AppointmentHistory/AppointmentHistoryTable";
import { UpcommingAppointmentTable } from "./UpcomingAppointment/UpcommingAppointmentTable";
import { QuickAppointment } from "./QuickAppointments/QuickAppointment";
import { useGetAppointmentsQuery } from "@/services/apiServices/appointmentService";

type TabsProps = {
  userId: string;
};
export function AppointmentTabs({ userId }: TabsProps) {
  const { data } = useGetAppointmentsQuery(userId);

  const { menuItems } = useTabOptions({ userId });

  const searchParams = useSearchParams();

  const tab = searchParams.get("subTab");

  const categoryRenderer: Record<OptionKey, ReactNode> = {
    "appointment-history": (
      <AppointmentHistoryTable
        previous_appointments={data?.previous_appointments}
      />
    ),
    "upcoming-appointments": (
      <UpcommingAppointmentTable
        upcoming_appointments={data?.upcoming_appointments}
      />
    ),
    "quick-appointments": <QuickAppointment />
  };

  return (
    <>
      <MuiTabs
        value={tab}
        aria-label="secondary tabs example "
        sx={{
          margin: "15px",
          display: "flex",
          gap: "15px !important"
        }}
        centered
      >
        {menuItems.map((item) => (
          <Tab
            sx={{
              width: "233px",
              height: "50px",
              minHeight: "50px",
              mx: "20px",
              alignItems: "center",
              textTransform: "capitalize",
              p: "3px",
              borderRadius: "60px",
              border: "1px solid #D6D6D6",
              fontWeight: "590",
              backgroundColor: item.value === tab ? "#65C0FF" : "",
              color: item.value === tab ? "white !important" : ""
            }}
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
