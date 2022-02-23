export default function formatDate(timestamp: string): string {
  const date = timestamp.split("T")[0];
  const dateParts = date.split("-");
  return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
}
