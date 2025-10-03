import { Task } from "../../tasks-page"
import { TaskCard } from "../widgets/task-card"

interface TabSectionProps {
  title: string
  tasks: Task[]
}

const TabSection: React.FC<TabSectionProps> = ({ title, tasks }) => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6 rounded-3xl bg-slate-100 p-5">
      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
      <div className="grid grid-cols-2 gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export { TabSection }
