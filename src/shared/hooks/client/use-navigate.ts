import { useRouter } from "@bprogress/next/app"
import { usePathname } from "next/navigation"

interface NavigateOptions {
  isReplace?: boolean
}

export const useNavigate = () => {
  const router = useRouter()
  const pathname = usePathname()

  const navigate = (path: string, options?: NavigateOptions) => {
    if (pathname === path) {
      return
    }

    if (options?.isReplace) {
      router.replace(path)
    } else {
      router.push(path)
    }
  }

  return navigate
}
