import Link from "next/link"

const currentYear = new Date().getFullYear()

const BottomSection = () => {
  const linkClassnames = "text-xs font-normal text-slate-900 tracking-[0] text-slate-900 underline"

  return (
    <div className="flex items-center justify-between border-t border-gray-200 py-5">
      <span className="text-xs font-normal tracking-[0] text-slate-900">
        thefansive — © Copyright {currentYear}. All Rights Reserved.
      </span>
      <ul className="flex gap-2.5">
        <li>
          <Link href="/privacy-policy" target="_blank" className={linkClassnames}>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms-of-service" target="_blank" className={linkClassnames}>
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href="/cookies-settings" target="_blank" className={linkClassnames}>
            Cookies setting
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BottomSection
