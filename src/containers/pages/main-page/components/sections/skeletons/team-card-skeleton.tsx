import React from "react"

const TeamCardSkeleton: React.FC = () => {
  return (
    <div className="flex w-[230px] flex-col gap-3">
      <div className="h-[260px] w-full animate-pulse rounded-md bg-slate-200"></div>
      <div className="mx-auto h-6 w-3/4 animate-pulse rounded bg-slate-200"></div>
    </div>
  )
}

export default TeamCardSkeleton
