import { formatSeconds } from "@/utils";

type TimerProps = {
  seconds: number;
}

export const Timer = ({ seconds }: TimerProps) => {
  const [hours, minutes, secondsLeft] = formatSeconds(seconds);

  return (
    <div className="flex gap-1 text-7xl font-semibold items-center w-fit absolute top-0 mt-16">
      <div>{hours}</div>
      <div className="mb-3">:</div>
      <div>{minutes}</div>
      <div className="mb-3">:</div>
      <div>{secondsLeft}</div>
    </div>
  )
}
