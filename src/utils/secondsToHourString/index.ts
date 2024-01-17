export const secondsToHourString = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const minutesString = minutes === 1 ? "minuto" : "minutos";
  if (hours === 0) return `${minutes} ${minutesString}`;
  return `${hours} hora e ${minutes} ${minutesString}`;
}
