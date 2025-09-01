import { TaskCard } from "../widgets/task-card"

const tasks = [
  {
    id: "1",
    title: "Daily Rewards",
    points: 100,
    image: "/images/tasks/calendar.png",
  },
  {
    id: "2",
    title: "Daily Watch",
    points: 150,
    image: "/images/tasks/film-slate.png",
  },
  {
    id: "3",
    title: "Make a transaction with Base",
    points: 300,
    image: "/images/tasks/base-logo.png",
  },
]

const DailyTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export { DailyTabSection }
