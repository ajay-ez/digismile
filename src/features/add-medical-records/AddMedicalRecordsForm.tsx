import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FieldInput from "@/components/common/FieldInput";
import { Button, Typography } from "@mui/material";
import { uploadFileToS3WithCreds } from "@/utils/uploadToS3";
import { useAddMedicalRcordMutation } from "@/services/apiServices/profileService";

export const AddMedicalRecordForm: React.FC = () => {
  const initialValues = {
    email: "",
    prescription: "",
    problem: "",
    document: null,
    date: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    prescription: Yup.string().required("Prescription is required"),
    problem: Yup.string().required("Problem description is required"),
    document: Yup.mixed().nullable().required("Document is required"),
    date: Yup.date()
      .required("Date is required")
      .typeError("Invalid date format")
  });
  const [addMedicalRecord, { isLoading, error }] = useAddMedicalRcordMutation();

  const handleSubmit = async (values: typeof initialValues) => {
    const document = await uploadFileToS3WithCreds(values.document);
    addMedicalRecord({ ...values, document });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl    rounded-lg p-16">
        <Typography variant="subtitle1" className="text-center my-8">
          Submit Prescription Details
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <FieldInput label="Email" name="email" type="email" />

                <FieldInput
                  label="Prescription"
                  name="prescription"
                  type="text"
                />

                <FieldInput label="Problem" name="problem" type="text" />

                <div className="mb-4">
                  <label
                    htmlFor="document"
                    className="block text-[1rem] font-bold text-digiDarkBlue"
                  >
                    Document
                  </label>
                  <input
                    type="file"
                    id="document"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                    accept="image/*,application/pdf"
                    onChange={(event) => {
                      setFieldValue("document", event.target.files?.[0]);
                    }}
                  />
                  <ErrorMessage
                    name="document"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <FieldInput label="Date" name="date" type="date" />
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  type="submit"
                  className="w-full max-w-80 bg-blue-500 hover:bg-blue-800 text-white p-3 font-bold rounded-3xl"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
