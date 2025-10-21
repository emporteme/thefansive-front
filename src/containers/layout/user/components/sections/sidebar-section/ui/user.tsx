import { getCurrentUser } from "@/shared/api"
import { CachedImage } from "@/shared/components/ui"
import { CopyOutlined } from "@/shared/icons"
import { alert } from "@/shared/lib/alert"

const User: React.FC = () => {
  const currentUser = getCurrentUser()

  const handleCopy = (text?: string) => {
    if (text) {
      navigator.clipboard.writeText(text)
      alert.success("Copied to clipboard")
    }
  }

  return (
    <div className="mb-6 flex items-center gap-3">
      <CachedImage src="/images/dev/user-image.png" alt="user image" width={60} height={60} className="rounded-full" />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold text-slate-900">{currentUser?.email.split("@")[0]}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="font-semibold text-slate-900">
            <span className="font-normal text-slate-500">ID:</span> {currentUser?.id}
          </div>
          <CopyOutlined className="h-5 w-5 text-slate-500" onClick={() => handleCopy(String(currentUser?.id))} />
        </div>
      </div>
    </div>
  )
}

export default User
