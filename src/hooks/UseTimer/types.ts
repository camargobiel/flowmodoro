export type UseTimerProps = {
  initialSeconds?: number;
  initiallyRunning?: boolean;
}

export type UseTimerResult = {
  running: boolean;
  seconds: number;
  paused: boolean;
  dates: Record<string, Date> | undefined;
  resting: boolean;
  task: string | undefined;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  pause: () => void;
  reset: () => void;
  start: (initial?: number) => void;
  stop: () => void;
  stopResting: () => void;
}
