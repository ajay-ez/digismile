import { useRouter } from 'next/navigation';

export type TabsItems = {
  value: string;
  title: string;
  onClick: () => void;
};

export const categories = {
  prescription: 'Prescription',
  checkups: 'Checkups',
  documents: 'Documents'
};

export type OptionKey = keyof typeof categories;

export type UseTabOptionsArgs = {
  userId: string;
};

export const useTabOptions = ({ userId }: UseTabOptionsArgs) => {
  const router = useRouter();

  const menuItems: TabsItems[] = [
    {
      value: 'prescription',
      title: 'Prescription',
      onClick: () =>
        router.push(`/profile/${userId}?tab=user-profile&subTab=prescription`)
    },
    {
      value: 'checkups',
      title: 'Checkups',
      onClick: () =>
        router.push(`/profile/${userId}?tab=user-profile&subTab=checkups`)
    },
    {
      value: 'documents',
      title: 'Documents',
      onClick: () =>
        router.push(`/profile/${userId}?tab=user-profile&subTab=documents`)
    }
  ];

  return { menuItems };
};
