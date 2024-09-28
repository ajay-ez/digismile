import React from 'react';
import { QuickAppointmentForm } from './QuickAppointmentForm';
import UpcomingAppointmentCalendar from '../../../User/Components/UpcomingAppointmentCalendar';

export const QuickAppointment = () => {
  return (
    <div className="flex gap-12 justify-center">
      <QuickAppointmentForm />
      <UpcomingAppointmentCalendar />
    </div>
  );
};
