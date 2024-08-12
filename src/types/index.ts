export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignupFormValues extends LoginFormValues {
  name: string;
  dob: string;
  address: string;
  phoneNumber: string;
  confirmPassword: string;
  problem: string;
}
