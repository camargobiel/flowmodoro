import { useEffect, useState } from "react";
import { Button, ButtonGroup, CardBase, Timer } from ".."
import { useTimer } from "../../hooks";
import { secondsToHourString } from "../../utils";
import { PauseIcon, PlayIcon, TvIcon, XMarkIcon } from "@heroicons/react/24/solid";

const TEN_PERCENT = 0.1;

export const Card = () => {
  const { seconds, paused, reset, dates, stopResting, resting, ...remaining } = useTimer();
  const [restTime, setRestTime] = useState(0);
  const startedAt = dates?.startedAt?.toLocaleTimeString().slice(0,5);
  const stoppedAt = dates?.stoppedAt?.toLocaleTimeString().slice(0,5);

  const borderColor = (() => {
    if (dates?.stoppedAt) {
      return "border-pink-600";
    }
    if (paused) {
      return "border-pink-600";
    }
    if (resting) {
      return "border-emerald-600";
    }
    if (remaining.running) {
      return "border-indigo-600";
    }
    return "border-gray-900";
  })()

  const Icon = (() => {
    if (paused) {
      return PauseIcon;
    }
    if (resting) {
      return TvIcon;
    }
    if (remaining.running) {
      return PlayIcon;
    }
    return undefined;
  })()

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
          <CardBase className="justify-start text-start gap-4" borderColor={borderColor}>
            <h1 className="font-semibold text-3xl">Parabéns!</h1>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-lg">Tempo focado: <span className="text-purple-500">{secondsToHourString(seconds)}</span> </span>
              <span className="font-medium text-lg">Descanso: <span className="text-purple-500">{secondsToHourString(restTime)}</span></span>
              <span className="font-medium text-lg">Período: <span className="text-purple-500">{startedAt} - {stoppedAt}</span></span>
            </div>
            <div className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer hover:bg-gray-800 rounded-full p-2">
              <XMarkIcon
                width={20}
                onClick={() => {
                  reset();
                  setRestTime(0);
                }}
              />
            </div>
            <Button
              onClick={() => {
                reset();
                remaining.start(-restTime)
                setRestTime(0);
              }}
              variant="bg-emerald-600 hover:bg-emerald-700"
            >
              Aplicar descanso
            </Button>
          </CardBase>
        ): (
          <CardBase className="justify-end items-center gap-10" borderColor={borderColor}>
            {Icon && <div className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer hover:bg-gray-800 rounded-full p-2">
              <Icon
                width={20}
                onClick={() => {
                  reset();
                  setRestTime(0);
                }}
              />
            </div>}
            <Timer seconds={seconds} />
            <ButtonGroup
              {...remaining}
              reset={reset}
              seconds={seconds}
            />
          </CardBase>
        )
      }
    </div>
  )
}
