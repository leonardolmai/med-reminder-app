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
