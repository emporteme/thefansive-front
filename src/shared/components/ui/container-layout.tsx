interface ContainerLayoutProps {
  children: React.ReactNode
}
export default function ContainerLayout({ children }: ContainerLayoutProps) {
  return <div className="mx-auto max-w-[1300px] px-4 md:px-8 2xl:px-24">{children}</div>
}
