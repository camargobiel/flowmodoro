import { TimerContext } from "@/context";
import { useContext } from "react";

export const Task = () => {
  const {
    task,
    setTask,
    running
  } = useContext(TimerContext);

  return (
    <div className="flex flex-col">
      <input
        id="task"
        type="text"
        className="w-96 h-10 p-2 pl-4 text-lg font-medium text-center text-white bg-gray-900 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Digite a atividade para iniciar"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        disabled={running}
        autoComplete="off"
      />
    </div>
  )
}
