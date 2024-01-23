import { ButtonGroup, CardBase, Timer } from "@/components"
import { TimerContext } from "@/context";
import { useContext } from "react";
import { PauseIcon, PlayIcon, TvIcon } from "@heroicons/react/24/solid";

export const TimerCard = () => {
  const {
    running,
    paused,
    resting,
    seconds,
    dates,
  } = useContext(TimerContext);

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
    if (running) {
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
    if (running) {
      return PlayIcon;
    }
    return undefined;
  })()

  return (
    <CardBase className="justify-end items-center gap-10" borderColor={borderColor}>
      {Icon && (
        <div className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer hover:bg-gray-800 rounded-full p-2 flex gap-2">
          <Icon
            width={20}
          />
        </div>
      )}
      <Timer seconds={seconds} />
      <ButtonGroup />
    </CardBase>
  )
}
