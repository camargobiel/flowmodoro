export const formatSeconds = (seconds: number) => {
  seconds = Math.abs(seconds);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const secondsLeft = seconds % 60;
  const minutesLeft = minutes % 60;
  const formattedSeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
  const formattedMinutes = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft
  const formattedHours = hours < 10 ? `0${hours}` : hours
  return [formattedHours, formattedMinutes, formattedSeconds];
}
