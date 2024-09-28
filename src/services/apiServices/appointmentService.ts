import { getAppointments } from "@/utils/breakPoints";
import { api } from "../api";

export const appointmentService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: (userId: string) => ({
        url: getAppointments(userId)
      })
    })
  })
});

export const { useGetAppointmentsQuery } = appointmentService;
