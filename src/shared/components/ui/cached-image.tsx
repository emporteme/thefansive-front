"use client"

import Image, { ImageProps } from "next/image"
import React from "react"

interface CachedImageProps extends Omit<ImageProps, "loader"> {
  cacheTime?: number // in minutes
}

const CachedImage: React.FC<CachedImageProps> = ({
  cacheTime = 10, // Default 10 minutes cache
  ...props
}) => {
  const loader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    const isExternalUrl = src.startsWith("http://") || src.startsWith("https://")

    if (isExternalUrl) {
      return src
    }

    const url = new URL(src, window.location.origin)
    url.searchParams.set("w", width.toString())
    url.searchParams.set("q", (quality || 90).toString())
    url.searchParams.set("cache", cacheTime.toString())
    return url.toString()
  }

  const isExternalSrc = typeof props.src === "string" && props.src.startsWith("http")
  return <Image {...props} loader={loader} unoptimized={isExternalSrc} />
}

export { CachedImage }
export type { CachedImageProps }
