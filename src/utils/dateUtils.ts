import dayjs from "dayjs";

export function getFormattedDateTime(
  date: string | Date,
  includeTime: boolean = false
) {
  const format = includeTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD";
  return dayjs(date).format(format);
}
