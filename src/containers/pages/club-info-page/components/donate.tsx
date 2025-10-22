import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"
import { useCurrentLocale } from "@/locale/client"
import { Button } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import Input from "@/shared/components/ui/input"
import { CertificateOutlined, DollarCircle, Partnership } from "@/shared/icons"
import { getCurrencySymbol } from "@/shared/store/currency-store"
import { Team } from "@/shared/types/team"

const Donate = ({
  team,
  imageHeight,
  onSubmit,
}: {
  team: Partial<Team>
  imageHeight?: string
  onSubmit: (data: number) => void
}) => {
  const locale = useCurrentLocale()
  const [imageError, setImageError] = useState(false)
  const { register } = useForm<{ donation: number }>({
    resolver: zodResolver(
      z.object({
        donation: z.number().min(1),
      })
    ),
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const donation = formData.get("donation") as string
    onSubmit(Number(donation))
  }

  return (
    <div className="py-10">
      <ContainerLayout>
        <h2 className="mb-6 flex gap-2">
          {team.logoUrl}
          <span className="text-[32px] font-semibold">Donate</span>
        </h2>
        <div className="flex items-stretch rounded-lg bg-slate-100 px-4 py-6">
          <div className="flex grow flex-col border-r-4 border-slate-200 pr-4">
            <div className="mb-6 flex justify-between">
              <h3 className="text-2xl font-semibold">Support your team by making a donation</h3>
              <Image
                src="/images/icons/donate.png"
                alt="donate"
                width={26}
                height={26}
                className="h-auto max-w-[26px]"
              />
            </div>
            <div className="flex grow gap-4">
              <div
                className="relative w-full grow overflow-hidden rounded-[10px] bg-gray-200"
                style={{
                  height: imageHeight || "auto",
                  minHeight: "200px",
                }}
              >
                {!imageError ? (
                  <Image
                    src={team?.coverImageUrl || "/images/dev/real-madrid-banner.jpg"}
                    alt={`${team?.name?.[locale] || "Image not found"}`}
                    fill
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gray-200 text-gray-500">
                    <div className="text-center">
                      <div className="mb-2 text-4xl">🏆</div>
                      <p className="text-sm">Image not found</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex min-w-[250px] flex-none flex-col gap-4">
                <div className="flex flex-col gap-3 rounded-lg bg-white px-3 py-2">
                  <p className="flex justify-between gap-2 text-[15px] whitespace-nowrap">
                    <span className="font-medium text-slate-600">Total Donations:</span>
                    <span className="text-right font-semibold text-black">15.250.164 {getCurrencySymbol("USD")}</span>
                  </p>
                  <hr className="border-gray-300" />
                  <p className="flex justify-between gap-2 text-[15px] whitespace-nowrap">
                    <span className="font-medium text-slate-600">Participants:</span>
                    <span className="text-right font-semibold text-black">371.105</span>
                  </p>
                </div>
                <div className="mt-auto flex flex-col">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <Input
                      type="number"
                      placeholder="Enter your donation"
                      label="Donation"
                      value=""
                      id="donation"
                      registerProps={register("donation")}
                      leftIcon={<DollarCircle className="text-slate-800" />}
                    />
                    <Button type="submit" size="lg" className="w-full">
                      Donate
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] flex-none pl-4">
            <div className="mb-8 flex justify-center">
              <Button size="sm" className="bg-[#E2E8F0]" variant="ghost">
                Donation Tracker
              </Button>
            </div>
            <p className="mb-10 font-medium text-slate-600">
              Show your passion and support your team with contributions that make a real impact by purchasing a special
              certificate.
            </p>
            <div className="mb-6">
              <h4 className="mb-3 gap-1 text-sm font-semibold">
                <Partnership className="inline" />{" "}
                <span className="mt-[2px]">Official partnership with Liverpool FC</span>
              </h4>
              <p className="text-xs font-medium text-slate-600">
                This donation is collected in partnership with Liverpool FC
              </p>
            </div>
            <div className="mb-6">
              <h4 className="mb-3 flex gap-1 text-sm font-semibold">
                <CertificateOutlined className="inline" />{" "}
                <span className="mt-[2px]">Digital Certificate Digital Certificate</span>
              </h4>
              <p className="text-xs font-medium text-slate-600">
                Earn a digital certificate in recognition of your support for your club
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Donate
