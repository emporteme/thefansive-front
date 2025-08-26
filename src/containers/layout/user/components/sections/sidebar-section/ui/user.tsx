import Image from "next/image"
import { Copy as CopyIcon } from "@/shared/icons"
import { alert } from "@/shared/lib"

const User: React.FC = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    alert.success("Copied to clipboard")
  }

  return (
    <div className="mb-12 flex items-center gap-3">
      <Image src="/user-image.png" alt="user image" width={60} height={60} className="rounded-2xl" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="text-xl leading-none font-semibold text-black">Name</div>
          <CopyIcon className="h-4 w-4 cursor-pointer" onClick={() => handleCopy("Name")} />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="leading-none font-semibold text-black">
            <span className="font-normal text-slate-500">ID:</span> 1234567890
          </div>
          <CopyIcon className="h-4 w-4 cursor-pointer" onClick={() => handleCopy("1234567890")} />
        </div>
      </div>
    </div>
  )
}

export default User
