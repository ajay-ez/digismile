export const login = () => "login";

export const register = () => "register";

export const getAppointments = (userId: string) =>
  `get_user_appointments/${userId}`;

export const getUserDetail = () => "get_user_details";

export const appointmentForUnauthUser = () => "new_user_appointment";
export const appointmentForUser = () => "book_appointment_existing_user";

export const getSlots = () => "get_appointments";
