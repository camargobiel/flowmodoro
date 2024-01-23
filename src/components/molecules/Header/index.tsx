import { PlayPauseIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  return (
    <h1 className="text-white text-2xl font-semibold flex gap-2">
      <PlayPauseIcon width={20} className="text-indigo-400" />
        Flowmodoro
    </h1>
  )
}
