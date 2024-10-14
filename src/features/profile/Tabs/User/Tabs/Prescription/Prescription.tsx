import React from "react";
import { PrescriptionCard } from "./PrescriptionCard";

export type UserTabProps = {
  medicalRecords: any;
};
export const Prescription = ({ medicalRecords }: UserTabProps) => {
  return (
    <div>
      {medicalRecords?.length > 0 ? (
        <div>
          {medicalRecords?.map((record: any) => (
            <PrescriptionCard
              key={record.prescription}
              date={record.date}
              prescription={record.prescription}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No Records Found</p>
      )}
    </div>
  );
};
