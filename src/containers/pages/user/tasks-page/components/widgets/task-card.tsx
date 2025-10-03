import Image from "next/image"

interface TaskCardProps {
  task: {
    id: string
    title: string
    description: string
    points: number
    image: string
  }
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="flex w-full cursor-pointer gap-3 rounded-xl bg-white p-3">
      <div className="h-[110px] w-[110px] flex-shrink-0 overflow-hidden rounded-[6.875px]">
        <Image src={task.image} alt="task image" width={110} height={110} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between py-0">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[22px] leading-[22px] font-medium text-[#0F1743]">{task.title}</h3>
          <p className="text-[19px] leading-[19px] text-[#455570]">{task.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[22px] leading-[22px] font-medium text-[#0F1743]">+{task.points} points</span>
          <button className="flex h-8 items-center gap-1.5 rounded-lg bg-[#0F1743] px-2.5 text-white">
            <PlayIcon />
            <span className="text-base font-medium">Go</span>
            <AddCircleIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1.75 1.16667L12.8333 7L1.75 12.8333V1.16667Z" fill="white" />
  </svg>
)

const AddCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1.16667C3.77834 1.16667 1.16667 3.77834 1.16667 7C1.16667 10.2217 3.77834 12.8333 7 12.8333C10.2217 12.8333 12.8333 10.2217 12.8333 7C12.8333 3.77834 10.2217 1.16667 7 1.16667ZM7.58333 4.08333C7.58333 3.76117 7.32216 3.5 7 3.5C6.67784 3.5 6.41667 3.76117 6.41667 4.08333V6.41667H4.08333C3.76117 6.41667 3.5 6.67784 3.5 7C3.5 7.32216 3.76117 7.58333 4.08333 7.58333H6.41667V9.91667C6.41667 10.2388 6.67784 10.5 7 10.5C7.32216 10.5 7.58333 10.2388 7.58333 9.91667V7.58333H9.91667C10.2388 7.58333 10.5 7.32216 10.5 7C10.5 6.67784 10.2388 6.41667 9.91667 6.41667H7.58333V4.08333Z"
      fill="white"
    />
  </svg>
)

export { TaskCard }
