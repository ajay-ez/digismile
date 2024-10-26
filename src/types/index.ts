export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignupFormValues extends LoginFormValues {
  name: string;
  last_name: string;
  date_of_birth: string;
  address: string;
  phone_number: string;
  confirmPassword?: string;
  problem: string;
}
