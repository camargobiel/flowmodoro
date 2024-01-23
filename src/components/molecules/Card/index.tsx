import { useContext, useEffect, useState } from "react";
import { FinishCard, TimerCard } from "@/components";
import { TimerContext } from "@/context";

const TEN_PERCENT = 0.1;

export const Card = () => {
  const {
    resting,
    seconds,
    dates,
    reset,
    stopResting,
  } = useContext(TimerContext);

  const [restTime, setRestTime] = useState(0);

  useEffect(() => {
    if (dates?.stoppedAt) {
      const time = Math.floor(seconds * TEN_PERCENT)
      setRestTime(time);
    }
    if (resting && seconds === 0) {
      stopResting();
    }
  }, [dates?.stoppedAt, seconds, reset, resting, stopResting])

  return (
    <div className='flex items-center justify-center'>
      {
        restTime > 0 ? (
          <FinishCard
            restTime={restTime}
            setRestTime={setRestTime}
          />
        ): (
          <TimerCard />
        )
      }
    </div>
  )
}
