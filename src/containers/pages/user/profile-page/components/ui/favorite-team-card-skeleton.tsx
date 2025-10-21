import React from "react"

const FavoriteTeamCardSkeleton: React.FC = () => {
  return (
    <div className="relative flex flex-shrink-0 flex-col rounded-2xl bg-white px-[5px] py-2.5">
      {/* Cancel button skeleton */}
      <div className="absolute top-0 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white">
        <div className="h-3.5 w-3.5 animate-pulse rounded bg-slate-200"></div>
      </div>

      {/* Logo skeleton */}
      <div className="mx-auto h-[130px] w-[130px] overflow-hidden rounded-lg">
        <div className="h-full w-full animate-pulse rounded-lg bg-slate-200"></div>
      </div>

      {/* Name skeleton */}
      <div className="mt-2.5 h-[32px] w-full pl-1.5">
        <div className="h-3 w-3/4 animate-pulse rounded bg-slate-200"></div>
      </div>
    </div>
  )
}

export { FavoriteTeamCardSkeleton }
