import { useLogout } from "@/shared/api/hooks/use-auth"
import { Button, ModalLayout } from "@/shared/components/ui"
import { useNavigate } from "@/shared/hooks/client/use-navigate"
import { useRoutes } from "@/shared/hooks/client/use-routes"

interface LogoutModalProps {
  isOpen: boolean
  onClose: () => void
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose }) => {
  const { logout } = useLogout()
  const routes = useRoutes()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate(routes.home())
    onClose()
  }

  if (!isOpen) return null

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col p-[128px] text-center">
        <h1 className="mb-3 text-4xl leading-[1.5] font-semibold tracking-[0] text-slate-900">Are you sure?</h1>
        <p className="text-slate-60 mx-auto mb-8 max-w-[330px] text-xl leading-[1.5] font-normal tracking-[0]">
          To continue helping your team, don't forget to <span className="font-bold">login</span> to the service.
        </p>
        <div className="flex gap-8">
          <Button onClick={handleLogout} size="xl" variant="gray">
            Yes, I want to leave
          </Button>
          <Button onClick={onClose} size="xl">
            No, I'll stay to support.
          </Button>
        </div>
      </div>
    </ModalLayout>
  )
}

export default LogoutModal
