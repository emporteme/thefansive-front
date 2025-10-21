import React from "react"
import { cn } from "@/shared/lib/utils"

interface TeamsCardItemSkeletonProps {
  className?: string
}

const TeamsCardItemSkeleton: React.FC<TeamsCardItemSkeletonProps> = ({ className }) => {
  return (
    <div className={cn(`h-[232px] w-40 rounded-2xl bg-white`, className)}>
      <div className="p-1.5 pb-2.5">
        {/* Logo skeleton */}
        <div className="relative mx-auto mb-1.5 h-[148px] w-[148px]">
          <div className="h-full w-full animate-pulse rounded-lg bg-slate-200"></div>
        </div>

        <div className="flex-between flex flex-col gap-1.5">
          {/* Team name skeleton */}
          <div className="line-clamp-2 min-h-[32px]">
            <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200"></div>
            <div className="mt-1 h-4 w-1/2 animate-pulse rounded bg-slate-200"></div>
          </div>

          {/* Follow button skeleton */}
          <div className="flex justify-end">
            <div className="flex h-6 items-center gap-1.5 rounded-sm border border-transparent px-2 py-1">
              <div className="h-3 w-12 animate-pulse rounded bg-slate-200"></div>
              <div className="h-3 w-3 animate-pulse rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { TeamsCardItemSkeleton }
