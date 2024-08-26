export function formatTime(time: string) {
  const date = new Date(`2000-01-01T${time}`);
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
