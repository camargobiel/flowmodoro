import { Card } from "@/components"
import { TimerContext } from "@/context"
import { useTimer } from "@/hooks";

export const Content = () => {
  const timer = useTimer();

  return (
    <TimerContext.Provider value={timer}>
      <Card />
    </TimerContext.Provider>
  )
}
