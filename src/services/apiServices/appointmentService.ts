import {
  appointmentForUnauthUser,
  appointmentForUser,
  getAppointments,
  getSlots
} from "@/utils/breakPoints";
import { api } from "../api";

export const appointmentService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: (userId: string) => ({
        url: getAppointments(userId)
      })
    }),
    unAuthUserAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: appointmentForUnauthUser(),
        method: "POST",
        body: appointmentData
      })
    }),
    requestUserAppointment: builder.mutation({
      query: (userAppointmentData) => ({
        url: appointmentForUser(),
        method: "POST",
        body: userAppointmentData
      })
    }),
    getSlots: builder.mutation({
      query: (slotsPayload) => ({
        url: getSlots(),
        method: "POST",
        body: slotsPayload
      })
    })
  })
});

export const {
  useGetAppointmentsQuery,
  useUnAuthUserAppointmentMutation,
  useGetSlotsMutation,
  useRequestUserAppointmentMutation
} = appointmentService;
