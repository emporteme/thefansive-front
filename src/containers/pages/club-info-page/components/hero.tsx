import Image from "next/image"
import React from "react"
import { useCurrentLocale } from "@/locale/client"
import { Button } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { Favorite, LinkCircle } from "@/shared/icons"
import { Team } from "@/shared/types/team"
import SocialsList from "./socials-list"

const Hero = ({ team }: { team: Partial<Team> }) => {
  const locale = useCurrentLocale()

  return (
    <div className={`relative h-full min-h-[400px] w-full bg-red-500 py-8 text-white`}>
      {/* TODO: Add bgColor as a class name or use gradient background with css variables, and add color text ${bgColor} text-${color} */}
      <ContainerLayout>
        <div className="flex justify-between">
          <div>
            <div className="mb-8 h-40 w-fit min-w-40">
              <Image
                src={team.websiteUrl || ""}
                alt={`${team.name?.[locale] || "Image not found"}`}
                width={160}
                height={160}
                className="h-full w-auto object-cover"
              />
            </div>
            <h1 className="mb-2 text-4xl font-extrabold">{team.name?.[locale]}</h1>
            <a
              href={team.websiteUrl || ""}
              className="mb-8 flex items-center gap-2 font-medium text-inherit"
              target="_blank"
            >
              {team.websiteUrl || ""}
              <LinkCircle />
            </a>
            <Button size="lg" className="flex w-fit items-center justify-center rounded-2xl bg-black/40 p-4">
              <Favorite />
            </Button>
          </div>
          <div>{team.socialLinks && <SocialsList socials={team.socialLinks} />}</div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Hero
