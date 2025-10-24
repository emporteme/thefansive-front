import Link from "next/link"

const currentYear = new Date().getFullYear()

const BottomSection = () => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 py-5">
      <span className="text-center text-xs font-normal text-slate-900">
        thefansive — © Copyright {currentYear}. All Rights Reserved.
      </span>
      <ul className="flex gap-2.5">
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms-of-service">Terms of Service</Link>
        </li>
      </ul>
    </div>
  )
}

export default BottomSection
