import Image from "next/image"
import { ArrowRightSmallRound as ArrowRightIcon } from "@/shared/icons"

interface TaskCardProps {
  task: {
    id: string
    title: string
    points: number
    image: string
  }
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg bg-slate-100 p-4">
      <div className="flex items-center gap-2.5">
        <Image src={task.image} alt="task image" width={36} height={36} />
        <div className="flex flex-col gap-1">
          <p className="text-base font-medium text-black">{task.title}</p>
          <p className="text-sm font-semibold text-slate-600">+ {task.points} points</p>
        </div>
      </div>

      <button className="flex cursor-pointer items-center justify-center rounded-lg bg-slate-300 px-7.5 py-3">
        <ArrowRightIcon />
      </button>
    </div>
  )
}

export { TaskCard }
