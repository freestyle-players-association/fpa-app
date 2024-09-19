type DateInput = Date | string | null | undefined;

export function formatDate(date: DateInput): string {
  if (!date) {
    return "";
  }
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatTime(date: DateInput): string {
  if (!date) {
    return "";
  }
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(date));
}

export function formatDateTime(date: DateInput): string {
  const time = formatTime(date);
  const formattedDate = formatDate(date);
  return `${time}, ${formattedDate}`;
}
