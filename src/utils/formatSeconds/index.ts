export const formatSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const formattedSeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  return [formattedMinutes, formattedSeconds];
}
