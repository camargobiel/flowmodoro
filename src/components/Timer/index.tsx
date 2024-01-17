import { formatSeconds } from "../../utils";

type TimerProps = {
  seconds: number;
}

export const Timer = ({ seconds }: TimerProps) => {
  const [minutes, secondsLeft] = formatSeconds(seconds);

  return (
    <div className="flex gap-1 text-7xl font-semibold items-center w-40">
      <div>{minutes}</div>
      <div className="mb-3">:</div>
      <div>{secondsLeft}</div>
    </div>
  )
}
