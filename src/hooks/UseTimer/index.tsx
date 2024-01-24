import { useCallback, useEffect, useState } from "react";
import { formatSeconds } from "../../utils";
import { UseTimerProps, UseTimerResult } from "./types";

const ONE_SECOND = 1000;

const interval = (delay = 0) => (callback: TimerHandler) =>
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback]);

const useSecondsInterval = interval(ONE_SECOND);

export const useTimer = ({
  initialSeconds = 0,
  initiallyRunning = false
}: UseTimerProps = {}): UseTimerResult => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [running, setRunning] = useState<boolean>(initiallyRunning);
  const [resting, setResting] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [dates, setDates] = useState<Record<string, Date>>();
  const [task, setTask] = useState<string>("");

  const tick = useCallback(
    () => {
      return running ? setSeconds((seconds) => seconds + 1) : undefined
    },
    [running]
  );

  useEffect(() => {
    if (seconds) {
      const [formattedHours, formattedMinutes, formattedSeconds] = formatSeconds(seconds);
      document.title = `${task} - ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  }, [seconds, task])

  const start = (initial?: number) => {
    if (initial) {
      setSeconds(initial);
    }
    if (initial && initial < 0) {
      setResting(true);
    }
    setRunning(true);
    setPaused(false);
    setDates({
      startedAt: new Date(),
    });
  };

  const pause = () => {
    setRunning(false);
    setPaused(true);
  }

  const stopResting = () => {
    setResting(false);
    reset();
  }

  const reset = () => {
    setSeconds(0);
    setPaused(false);
    setRunning(false);
    setDates(undefined);
    setResting(false);
    document.title = `Flowmodoro`;
  };

  const stop = () => {
    setDates({
      ...dates,
      stoppedAt: new Date(),
    })
  };

  useSecondsInterval(tick);

  return {
    running,
    seconds,
    paused,
    dates,
    resting,
    task,
    pause,
    reset,
    start,
    stop,
    stopResting,
    setTask,
  };
};
