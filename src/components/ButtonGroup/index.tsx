import { Button } from ".."
import { PlayIcon, PauseIcon, StopIcon } from '@heroicons/react/24/solid'

type ButtonGroupProps = {
  start: () => void;
  stop: () => void;
  pause: () => void;
  running: boolean;
  seconds: number;
}

export const ButtonGroup = ({
  start,
  stop,
  pause,
  running,
  seconds
}: ButtonGroupProps) => {
  return (
    <div className='flex gap-5'>
      <Button
        onClick={start}
        disabled={running}
        icon={<PlayIcon width={20}/>}
      >
          Start
      </Button>
      <Button
        onClick={pause}
        disabled={!running}
        icon={<PauseIcon width={20}/>}
      >
          Pause
      </Button>
      <Button
        onClick={stop}
        disabled={!running && !seconds}
        icon={<StopIcon width={20}/>}
      >
          Stop
      </Button>
    </div>
  )
}
