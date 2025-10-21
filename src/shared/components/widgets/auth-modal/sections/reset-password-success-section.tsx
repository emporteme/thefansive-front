import { Button, CachedImage } from "@/shared/components/ui"
import { AuthModalMode } from "../types"
import { WelcomeText } from "../ui"

interface ResetPasswordSuccessSectionProps {
  onClose?: () => void
  onModeChange?: (mode: AuthModalMode) => void
}

const ResetPasswordSuccessSection = ({ onModeChange }: ResetPasswordSuccessSectionProps) => {
  const handleLogin = () => {
    onModeChange?.("login")
  }

  return (
    <>
      <WelcomeText />

      <div className="flex flex-col items-center">
        <CachedImage
          src="/images/success-screen-man.png"
          alt="Success"
          className="mt-8 mb-5 object-contain opacity-90"
          priority
          width={280}
          height={280}
        />

        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl leading-[44px] font-bold text-slate-900">Password Reset Successful!</h2>
          <p className="max-w-[465px] text-xl font-semibold text-slate-900">
            Your password has been updated. You can now log in with your new password.
          </p>
        </div>

        <Button size="xl" className="w-[220px]" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </>
  )
}

export default ResetPasswordSuccessSection
