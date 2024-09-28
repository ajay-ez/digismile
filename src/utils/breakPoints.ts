export const login = () => "login";

export const register = () => "register";

export const getAppointments = (userId: string) =>
  `api/get_user_appointments/${userId}`;
