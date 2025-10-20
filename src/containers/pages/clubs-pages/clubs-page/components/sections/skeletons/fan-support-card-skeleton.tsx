import React from "react"

const FanSupportCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col items-stretch gap-3 p-3 md:flex-row">
      <div className="relative aspect-square h-[275px] w-[275px]">
        <div className="absolute top-0 left-0 h-6 w-24 animate-pulse rounded-md bg-slate-200"></div>
        <div className="h-full w-full animate-pulse rounded-md bg-slate-200"></div>
      </div>
      <div className="flex w-full flex-col justify-between gap-1">
        <div className="flex flex-col">
          <div className="mb-2 h-7 w-3/4 animate-pulse rounded bg-slate-200"></div>
          <div className="mb-3 h-6 w-20 animate-pulse rounded-md bg-slate-200"></div>
          <div className="h-4 w-full animate-pulse rounded bg-slate-200"></div>
          <div className="mt-1 h-4 w-2/3 animate-pulse rounded bg-slate-200"></div>
        </div>
        <div>
          <div className="mb-2.5 flex flex-col gap-2">
            <div className="h-4 w-32 animate-pulse rounded bg-slate-200"></div>
            <div className="h-4 w-28 animate-pulse rounded bg-slate-200"></div>
            <div className="h-4 w-36 animate-pulse rounded bg-slate-200"></div>
          </div>
          <div className="mb-1 flex items-center justify-between gap-1">
            <div className="h-6 w-20 animate-pulse rounded bg-slate-200"></div>
            <div className="h-4 w-24 animate-pulse rounded bg-slate-200"></div>
          </div>
          <div className="h-12 w-full animate-pulse rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  )
}

export default FanSupportCardSkeleton
