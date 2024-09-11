export function formatTime(time: string) {
  const date = new Date(`2000-01-01T${time}`);
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

export function getCurrentDate(): string {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const date = `${day}/${month}/${today.getFullYear()}`;
  return date;
}

export function parseDateWithZeroedTime(dateString: string): Date {
  const [day, month, year] = dateString.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  date.setHours(0, 0, 0, 0);
  return date;
}
