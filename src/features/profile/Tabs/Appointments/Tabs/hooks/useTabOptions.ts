import { useRouter } from "next/navigation";

export type TabsItems = {
  value: string;
  title: string;
  onClick: () => void;
};

export const categories = {
  "appointment-history": "Appointment History",
  "upcoming-appointments": "Upcoming Appointments",
  "quick-appointments": "Quick Appointments"
};

export type OptionKey = keyof typeof categories;

export type UseTabOptionsArgs = {
  userId: string;
  isMobile: boolean;
};

export const useTabOptions = ({ userId, isMobile }: UseTabOptionsArgs) => {
  const router = useRouter();

  const menuItems: TabsItems[] = [
    {
      value: "appointment-history",
      title: isMobile ? "History" : "Appointment History",
      onClick: () =>
        router.push(
          `/profile/${userId}?tab=appointments&subTab=appointment-history`
        )
    },
    {
      value: "upcoming-appointments",
      title: isMobile ? "Upcoming" : "Upcoming Appointments",
      onClick: () =>
        router.push(
          `/profile/${userId}?tab=appointments&subTab=upcoming-appointments`
        )
    },
    {
      value: "quick-appointments",
      title: isMobile ? "Quick" : "Quick Appointments",
      onClick: () =>
        router.push(
          `/profile/${userId}?tab=appointments&subTab=quick-appointments`
        )
    }
  ];

  return { menuItems };
};
