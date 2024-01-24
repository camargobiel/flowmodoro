import { Button } from "@/components/atoms"
import { TimerContext } from "@/context";
import { PlayIcon, PauseIcon, CakeIcon, StopIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";

export const ButtonGroup = () => {
  const {
    running,
    seconds,
    task,
    pause,
    stop,
    start,
    reset,
  } = useContext(TimerContext);

  return (
    <div className='flex gap-5'>
      {!running ? (
        <Button
          onClick={() => start()}
          icon={<PlayIcon width={20}/>}
          variant={!task ? "bg-indigo-500 cursor-not-allowed" :"bg-indigo-600 hover:bg-indigo-700"}
          disabled={!task}
        >
          {seconds ? "Voltar" : "Começar"}
        </Button>
      ) : (
        <Button
          onClick={pause}
          icon={<PauseIcon width={20}/>}
          variant="bg-pink-600 hover:bg-pink-700"
        >
          Pausar
        </Button>
      )}
      {
        seconds < 10 ? (
          <Button
            onClick={reset}
            disabled={!running && !seconds}
            icon={<StopIcon width={20}/>}
            variant={`${!running && !seconds ? `bg-red-400` : `bg-red-600 hover:bg-red-700`}`}
          >
            Parar
          </Button>
        ) : (
          <Button
            onClick={stop}
            disabled={!running && !seconds}
            icon={<CakeIcon width={20}/>}
            variant={`${!running && !seconds ? `bg-fuchsia-400` : `bg-fuchsia-600 hover:bg-fuchsia-700`}`}
          >
          Cansei
          </Button>
        )
      }
    </div>
  )
}
