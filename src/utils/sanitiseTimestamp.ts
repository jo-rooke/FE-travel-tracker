import formatDate from "./formatDate";
import formatTime from "./formatTime";

export default function sanitiseTimestamp(timestamp: string): string {
  const date = formatDate(timestamp);
  const time = formatTime(timestamp);
  return `${time}, ${date}`;
}
