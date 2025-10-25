import { useQueryClient } from "@tanstack/react-query"
import Image from "next/image"
import { useParams } from "next/navigation"
import React from "react"
import { useCurrentLocale } from "@/locale/client"
import { favoriteTeamsKeys, useCheckFavoriteTeam, useToggleFavoriteTeam } from "@/shared/api/hooks"
import { Button } from "@/shared/components/ui"
import ContainerLayout from "@/shared/components/ui/container-layout"
import { Favorite, LinkCircle } from "@/shared/icons"
import { Team } from "@/shared/types/team"
import SocialsList from "./socials-list"

const Hero = ({ team }: { team?: Team }) => {
  const params = useParams<{ id: string }>()
  const teamId = Number(params?.id)
  const locale = useCurrentLocale()
  const { data: isFavoriteTeam } = useCheckFavoriteTeam(teamId)
  const { toggleFavoriteOptimistic } = useToggleFavoriteTeam()
  const queryClient = useQueryClient()

  if (!team) return null

  const handleToggleFavorite = async () => {
    if (isFavoriteTeam === undefined) return
    queryClient.setQueryData(favoriteTeamsKeys.check(teamId), { isFavorite: !isFavoriteTeam })
    toggleFavoriteOptimistic(team, isFavoriteTeam)
  }

  return (
    <div className={`relative h-full min-h-[400px] w-full bg-red-500 pt-8 pb-14 text-white`}>
      <Image
        src="/images/banner-club-dark-pattern.png"
        alt="Banner Pattern"
        fill
        className="absolute inset-8 z-9 object-cover opacity-15"
      />
      <ContainerLayout className="relative z-10">
        <div className="flex justify-between">
          <div>
            <div className="mb-4 h-39 w-fit min-w-39">
              <Image
                src={team.logoUrl || ""}
                alt={`${team.name?.[locale] || "Image not found"}`}
                width={156}
                height={156}
                className="h-full w-auto object-cover"
              />
            </div>
            <h1 className="mb-2 text-4xl font-extrabold">{team.name?.[locale]}</h1>
            <a
              href={team.websiteUrl || ""}
              className="mb-5 flex items-center gap-2 font-medium hover:underline"
              target="_blank"
            >
              Official club site
              <LinkCircle className="size-4" />
            </a>
            <Button
              onClick={handleToggleFavorite}
              size="lg"
              className="rounded-2lg flex h-14 w-14 items-center justify-center bg-black/40 active:bg-black/60"
            >
              {isFavoriteTeam !== undefined && <Favorite className="size-6" fill={isFavoriteTeam} />}
            </Button>
          </div>
          <div>{team.socialLinks && <SocialsList socials={team.socialLinks} />}</div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Hero
