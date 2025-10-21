import { Button, CachedImage } from "@/shared/components/ui"
import { Task } from "../../tasks-page"

interface TaskCardProps {
  task: Task
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="rounded-2lg flex w-full cursor-pointer gap-3 bg-white p-3">
      <div className="h-[110px] w-[110px] flex-shrink-0 overflow-hidden rounded-[6.875px]">
        <CachedImage
          src={task.image}
          alt="task image"
          width={110}
          height={110}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-base leading-[1.4] font-semibold text-slate-900">{task.title}</h3>
          <p className="text-sm leading-[1.4] font-normal text-slate-600">{task.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base leading-[1.4] font-semibold text-slate-900">+{task.points} points</span>
          <Button className="flex h-8 w-35 items-center justify-center text-xs font-semibold">
            {task.action.title}
          </Button>
        </div>
      </div>
    </div>
  )
}

export { TaskCard }
