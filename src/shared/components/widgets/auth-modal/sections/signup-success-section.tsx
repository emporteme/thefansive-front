import Image from "next/image"
import { Button } from "@/shared/components/ui"
import { WelcomeText } from "../ui"

interface SignUpSuccessSectionProps {
  onClose?: () => void
}

const SignUpSuccessSection = ({ onClose }: SignUpSuccessSectionProps) => {
  return (
    <>
      <WelcomeText />

      <div className="flex flex-col items-center">
        <Image
          src="/images/success-screen-man.png"
          alt="Success"
          className="mt-8 mb-5 object-contain opacity-90"
          priority
          width={280}
          height={280}
        />

        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl leading-[44px] font-bold text-slate-900">Account created successfully!</h2>
          <p className="max-w-[465px] text-xl font-semibold text-slate-900">
            Be more than a fan, visit your club’s page and show your true support.
          </p>
        </div>

        <Button size="xl" className="w-[220px]" onClick={onClose}>
          Login
        </Button>
      </div>
    </>
  )
}

export default SignUpSuccessSection
