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
    const url = new URL(src, window.location.origin)
    url.searchParams.set("w", width.toString())
    url.searchParams.set("q", (quality || 90).toString())
    url.searchParams.set("cache", cacheTime.toString())
    return url.toString()
  }

  return <Image {...props} loader={loader} unoptimized={false} />
}

export { CachedImage }
export type { CachedImageProps }
