import { cn } from "@/shared/lib/utils"

interface ContainerLayoutProps {
  children: React.ReactNode
  className?: string
}

/*
  Desktop content max width: 1240px; +64px paddings; max: 1304px;
*/

export default function ContainerLayout({ children, className }: ContainerLayoutProps) {
  return <div className={cn("mx-auto box-border w-full max-w-[1304px] px-4 sm:px-8", className)}>{children}</div>
}
