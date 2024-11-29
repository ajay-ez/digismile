"use client";

import { useSearchParams } from "next/navigation";
import { type ReactNode } from "react";
import { OptionKey, useTabOptions } from "./hooks/useTabOptions";
import { DocumentTable } from "./Documents/DocumentTable";
import { CheckupTable } from "./Checkups/CheckupTable";
import { Prescription } from "./Prescription/Prescription";
import { useGetUserMedicalRecordsQuery } from "@/services/apiServices/profileService";
import { TabList, TabPanel, Tabs, useMediaQuery } from "@chakra-ui/react";

type TabsProps = {
  userId: string;
};
export function UserTabs({ userId }: TabsProps) {
  const { menuItems } = useTabOptions({ userId });
  const isMobile = useMediaQuery("(max-width:764px)");
  const { data } = useGetUserMedicalRecordsQuery(userId);

  const searchParams = useSearchParams();

  const tab = searchParams.get("subTab");

  const categoryRenderer: Record<OptionKey, ReactNode> = {
    prescription: <Prescription medicalRecords={data?.medical_records} />,
    checkups: <CheckupTable medicalRecords={data?.medical_records} />,
    documents: <DocumentTable medicalRecords={data?.medical_records} />
  };

  return (
    <>
      <Tabs
        aria-label="secondary tabs example "
        sx={{
          marginBottom: "15px"
        }}
      >
        {menuItems.map((item) => (
          <Tabs
          index={0}
            key={0}
            // value={0}
            onChange={() => {}}
            sx={{
              width: isMobile ? "130px" : "233px",
              height: "50px",
              minHeight: "50px",
              mx: isMobile ? "8px" : "20px",
              alignItems: "center",
              textTransform: "capitalize",
              p: "3px",
              borderRadius: "60px",
              border: "1px solid #D6D6D6",
              fontWeight: "590",
              backgroundColor: item.value === tab ? "#65C0FF" : "",
              color: item.value === tab ? "white !important" : ""
            }}
            // key={item.value}
            // value={item.value}
            // label={item.title}
            onClick={item.onClick}
          >
            <TabList></TabList>
            <TabPanel></TabPanel>
          </Tabs>
        ))}
      </Tabs>
      {tab && categoryRenderer[tab as OptionKey]}
    </>
  );
}
