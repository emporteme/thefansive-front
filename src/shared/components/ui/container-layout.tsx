import { cn } from "@/shared/lib/utils"

interface ContainerLayoutProps {
  children: React.ReactNode
  className?: string
}
export default function ContainerLayout({ children, className }: ContainerLayoutProps) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-4 md:px-8 2xl:px-25", className)}>{children}</div>
}
