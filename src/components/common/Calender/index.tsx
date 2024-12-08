"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calender.scss";

interface DatePickerProps {}

const dummyData = {
  "2024-12-05": true,
  "2024-12-10": true,
  "2024-12-15": true,
  "2024-12-20": true
};

const fetchAvailableDates = async (
  year: number,
  month: number
): Promise<string[]> => {
  // Simulating an API call with dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      const availableDates = Object.keys(dummyData).filter((date) => {
        const d = new Date(date);
        return d.getFullYear() === year && d.getMonth() + 1 === month;
      });
      resolve(availableDates);
    }, 500); // Simulate a delay
  });
};

const DatePickerComponent: React.FC<DatePickerProps> = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    loadAvailableDates(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
  }, [currentMonth]);

  const loadAvailableDates = async (year: number, month: number) => {
    const dates = await fetchAvailableDates(year, month);
    setAvailableDates(dates);
  };

  const isDateAvailable = (date: Date): boolean => {
    const dateString = format(date, "yyyy-MM-dd");
    return availableDates.includes(dateString);
  };

  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
  };

  return (
    <div className="date-picker">
      <h4>Select Date and Time</h4>
      <div className="divider"></div>

      <DatePicker
        selected={selectedDate}
        onChange={(date: any) => setSelectedDate(date)}
        highlightDates={[
          {
            "react-datepicker__day--highlighted-custom-available":
              availableDates.map((d) => new Date(d))
          }
        ]}
        inline
        onMonthChange={handleMonthChange}
        dayClassName={(date: any) =>
          isDateAvailable(date) ? "available" : "disabled"
        }
      />
    </div>
  );
};

export default DatePickerComponent;
