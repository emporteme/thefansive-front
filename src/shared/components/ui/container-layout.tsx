interface ContainerLayoutProps {
  children: React.ReactNode
}
export default function ContainerLayout({ children }: ContainerLayoutProps) {
  return <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 2xl:px-25">{children}</div>
}
