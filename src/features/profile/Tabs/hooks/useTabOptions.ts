import { useRouter } from "next/navigation";

export type TabsItems = {
  value: string;
  title: string;
  onClick: () => void;
};

export const categories = {
  "user-profile": "User Profile",
  appointments: "Appointments"
};

export type OptionKey = keyof typeof categories;

export type UseTabOptionsArgs = {
  userId: string;
};

export const useTabOptions = ({ userId }: UseTabOptionsArgs) => {
  const router = useRouter();

  const menuItems: TabsItems[] = [
    {
      value: "user-profile",
      title: "Profile",
      onClick: () => router.push(`/profile/${userId}?tab=user-profile`)
    },
    {
      value: "appointments",
      title: "Appointments",
      onClick: () => router.push(`/profile/${userId}?tab=appointments`)
    }
  ];

  return { menuItems };
};
