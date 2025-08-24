import Image from "next/image"
import { toast } from "react-toastify"
import { Copy as CopyIcon } from "@/shared/icons"

const User: React.FC = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  }

  return (
    <div className="mb-11 flex items-center gap-3">
      <Image src="/user-image.png" alt="user image" width={60} height={60} className="rounded-2xl" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="font-semibold">Name</div>
          <CopyIcon className="h-4 w-4 cursor-pointer" onClick={() => handleCopy("Name")} />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="font-semibold">
            <span className="font-normal text-gray-400">ID:</span> 1234567890
          </div>
          <CopyIcon className="h-4 w-4 cursor-pointer" onClick={() => handleCopy("1234567890")} />
        </div>
      </div>
    </div>
  )
}

export default User
