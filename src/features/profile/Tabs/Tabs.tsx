'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { AppointmentTabs } from './Appointments/Tabs/AppointmentTabs';
import { UserProfile } from './User/UserProfile';
import Sidebar from '@/components/common/Sidebar';

export function Tabs() {
  const searchParams = useSearchParams();
  const { userId } = useParams() as { userId: string };

  const tab = searchParams.get('tab');

  return (
    <div className="flex gap-4">
      <div className=" ">
        <Sidebar />
      </div>
      <div>
        {tab === 'user-profile' && <UserProfile userId={userId} />}
        {tab === 'appointments' && <AppointmentTabs userId={userId} />}
      </div>
    </div>
  );
}
