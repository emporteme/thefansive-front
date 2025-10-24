import Link from "next/link"

interface LinkListProps {
  title: string
  links: {
    title: string
    href: string
  }[]
}

const LinkList = ({ title, links }: LinkListProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-2xl font-semibold text-slate-900">{title}</span>
      <ul className="flex flex-col gap-1.5">
        {links.map((link) => (
          <li key={link.href} className="text-sm font-medium text-slate-600">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkList
