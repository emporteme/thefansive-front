import { TaskCard } from "../widgets/task-card"

const tasks = [
  {
    id: "1",
    title: "Daily Rewards",
    description: "The reward is given out every day.",
    points: 100,
    image: "/images/tasks/daily-reward.png",
  },
  {
    id: "2",
    title: "Daily Watch",
    description: "Watch videos to earn points.",
    points: 150,
    image: "/images/tasks/youtube-reward.png",
  },
  {
    id: "3",
    title: "Make a transaction with Base",
    description: "Earn points by trading on the base platform.",
    points: 300,
    image: "/images/tasks/base-reward.png",
  },
]

const DailyTabSection: React.FC = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-6 rounded-3xl bg-slate-100 p-5">
      <h3 className="text-2xl font-semibold text-slate-900">Daily Tasks</h3>
      <div className="grid grid-cols-2 gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export { DailyTabSection }
