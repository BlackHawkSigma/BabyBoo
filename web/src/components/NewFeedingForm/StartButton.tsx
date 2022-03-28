import { Submit } from '@redwoodjs/forms'

type StartButtonProps = {
  loading?: boolean
}

const StartButton = ({ loading = false }: StartButtonProps) => {
  return (
    <div className="flex pt-2">
      <Submit
        disabled={loading}
        // className="rw-button rw-button-green disabled:animate-pulse disabled:bg-green-400 disabled:text-gray-400"
        className="w-full rounded-full bg-green-300 px-4 py-2 disabled:animate-pulse disabled:bg-green-100 disabled:text-slate-400"
      >
        Start
      </Submit>
    </div>
  )
}

export default StartButton
