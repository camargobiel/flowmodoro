import { ButtonGroup, Timer } from ".."
import { useTimer } from "../../hooks";

export const Card = () => {
  const { seconds, ...rest } = useTimer();

  return (
    <div className='flex items-center justify-center'>
      <div className="text-white flex flex-col justify-center items-center mt-44 gap-10 p-10 bg-gray-900 w-fit border rounded-xl border-none">
        <Timer seconds={seconds} />
        <ButtonGroup
          {...rest}
          seconds={seconds}
        />
      </div>
    </div>
  )
}
