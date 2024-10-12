import {
  getMedicalRecords,
  getUserDetail,
  passwordChange
} from "@/utils/breakPoints";
import { api } from "../api";

export const profileService = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserMedicalRecords: builder.query({
      query: (userId: string) => ({
        url: getMedicalRecords(userId)
      })
    }),

    getUserDetails: builder.query<any, void>({
      query: () => ({
        url: getUserDetail()
      })
    }),

    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: passwordChange(),
        method: "POST",
        body: passwordData
      })
    })
  })
});

export const {
  useGetUserDetailsQuery,
  useGetUserMedicalRecordsQuery,
  useChangePasswordMutation
} = profileService;
