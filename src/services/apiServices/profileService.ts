import { getUserDetail } from "@/utils/breakPoints";
import { api } from "../api";

export const profileService = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: getUserDetail()
      })
    })
  })
});

export const { useGetUserDetailsQuery } = profileService;
