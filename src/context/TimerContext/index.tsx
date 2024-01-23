import { UseTimerResult } from "@/hooks";
import { createContext } from "react";

export const TimerContext = createContext<UseTimerResult>({} as UseTimerResult)
