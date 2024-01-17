import { useCallback, useEffect, useState } from "react";
import { formatSeconds } from "../../utils";

const interval = (delay = 0) => (callback: TimerHandler) =>
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback]);

const useSecondsInterval = interval(1000);

export const useTimer = ({
  initialSeconds = 0,
  initiallyRunning = false
} = {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const [resting, setResting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [dates, setDates] = useState<Record<string, Date>>();

  const tick = useCallback(
    () => {
      return running ? setSeconds((seconds) => seconds + 1) : undefined
    },
    [running]
  );

  useEffect(() => {
    if (seconds) {
      const [formattedHours, formattedMinutes, formattedSeconds] = formatSeconds(seconds);
      document.title = `Focado - ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  }, [seconds])

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
  };
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
  };
  const stop = () => {
    setDates({
      ...dates,
      stoppedAt: new Date(),
    })
  };
  useSecondsInterval(tick);
  return { pause, reset, running, seconds, start, stop, paused, dates, resting, stopResting };
};
