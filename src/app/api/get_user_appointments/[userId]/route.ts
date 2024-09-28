import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      previous_appointments: [
        {
          date: "2024-08-31",
          description: "Routine dental check-Routine dental check-upup",
          end_time: "11:00:00",
          start_time: "10:00:00"
        },
        {
          date: "2024-08-31",
          description: "Routine dental check-up",
          end_time: "12:00",
          start_time: "11:00"
        },
        {
          date: "2024-08-31",
          description: "Routine dental check-up",
          end_time: "14:00:00",
          start_time: "13:00:00"
        },
        {
          date: "2024-09-01",
          description: "Routine dental check-up",
          end_time: "11:00:00",
          start_time: "10:00:00"
        },
        {
          date: "2024-09-02",
          description: "Routine dental check-up",
          end_time: "11:00:00",
          start_time: "10:00:00"
        },
        {
          date: "2024-09-03",
          description: "Routine dental check-up",
          end_time: "11:00:00",
          start_time: "10:00:00"
        },
        {
          date: "2024-09-04",
          description: "Routine dental check-up",
          end_time: "11:00:00",
          start_time: "10:00:00"
        },
        {
          date: "2024-09-04",
          description: "Routine dental check-up",
          end_time: "11:00:00",
          start_time: "10:00:00"
        },
        {
          date: "2024-09-04",
          description: "Routine dental check-up",
          end_time: "11:00:00",
          start_time: "10:00:00"
        }
      ],
      upcoming_appointments: [
        {
          date: "2024-09-16",
          description: "Routine dental check-up",
          end_time: "11:00:00",
          start_time: "10:00:00"
        }
      ],
      user_id: "1b62f968-69b8-48aa-8b9a-a8360a4fcf4a"
    },
    { status: 200 }
  );
}
