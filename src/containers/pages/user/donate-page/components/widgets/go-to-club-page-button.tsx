import { ArrowRightRound as ArrowRightRoundIcon } from "@/shared/icons"

const GoToClubPageButton: React.FC = () => {
  return (
    <button className="flex cursor-pointer items-center justify-center gap-1 rounded-xl bg-slate-200 p-3">
      <p className="text-sm font-normal text-[#778CAC]">Go Liverpool Page</p>
      <ArrowRightRoundIcon className="size-5 text-[#778CAC]" />
    </button>
  )
}

export { GoToClubPageButton }
