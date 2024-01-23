import { Button, CardBase } from "@/components";
import { TimerContext } from "@/context";
import { secondsToHourString } from "@/utils";
import { XMarkIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import { useContext } from "react";

type FinishCardProps = {
  restTime: number;
  setRestTime: React.Dispatch<React.SetStateAction<number>>;
}

export const FinishCard = ({
  restTime,
  setRestTime,
}: FinishCardProps) => {
  const {
    seconds,
    dates,
    start,
    reset,
  } = useContext(TimerContext);

  const startedAt = dayjs(dates?.startedAt).format("HH:mm")
  const stoppedAt = dayjs(dates?.stoppedAt).format("HH:mm")

  return (
    <CardBase className="justify-start text-start gap-4">
      <h1 className="font-semibold text-3xl">Parabéns!</h1>
      <div className="flex flex-col gap-1">
        <span className="font-medium text-lg">
          Tempo focado:
          <span className="text-purple-500">{secondsToHourString(seconds)}</span>
        </span>
        <span className="font-medium text-lg">
          Descanso:
          <span className="text-purple-500"> {secondsToHourString(restTime)}</span>
        </span>
        <span className="font-medium text-lg">
          Período:
          <span className="text-purple-500"> {startedAt} - {stoppedAt}</span>
        </span>
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
          start(-restTime)
          setRestTime(0);
        }}
        variant="bg-emerald-600 hover:bg-emerald-700"
      >
        Aplicar descanso
      </Button>
    </CardBase>
  )
}
