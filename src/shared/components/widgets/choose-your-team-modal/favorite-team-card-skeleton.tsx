import React from "react"
import { cn } from "@/shared/lib"

interface FavoriteTeamCardSkeletonProps {
  className?: string
}

const FavoriteTeamCardSkeleton: React.FC<FavoriteTeamCardSkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border border-[#CAD5E2] bg-white",
        className
      )}
    >
      <div className="h-13.5 w-11.5 overflow-hidden rounded-lg">
        <div className="h-full w-full animate-pulse rounded-lg bg-slate-200"></div>
      </div>
    </div>
  )
}

export { FavoriteTeamCardSkeleton }
