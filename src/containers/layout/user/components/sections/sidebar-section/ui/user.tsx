import Image from "next/image"
import { CopyOutlined } from "@/shared/icons"
import { alert } from "@/shared/lib/alert"

const User: React.FC = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    alert.success("Copied to clipboard")
  }

  return (
    <div className="mb-6 flex items-center gap-3">
      <Image src="/images/dev/user-image.png" alt="user image" width={60} height={60} className="rounded-full" />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold text-slate-900">Name</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="font-semibold text-slate-900">
            <span className="font-normal text-slate-500">ID:</span> 1234567890
          </div>
          <CopyOutlined className="h-5 w-5 text-slate-500" onClick={() => handleCopy("1234567890")} />
        </div>
      </div>
    </div>
  )
}

export default User
