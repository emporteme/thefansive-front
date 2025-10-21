import { NextRequest, NextResponse } from "next/server"
import { createI18nMiddleware } from "next-international/middleware"

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ru"],
  defaultLocale: "en",
  urlMappingStrategy: "rewriteDefault", // Можно убрать, тогда дефолтный будет как /en
  resolveLocaleFromRequest: () => "en", // Всегда использовать английский по умолчанию, игнорируя настройки браузера
})

export function middleware(request: NextRequest) {
  // Add caching headers for images
  if (
    request.nextUrl.pathname.startsWith("/_next/image") ||
    request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)
  ) {
    const response = NextResponse.next()
    response.headers.set("Cache-Control", "public, max-age=600, s-maxage=600") // 10 minutes cache
    return response
  }

  return I18nMiddleware(request)
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)", "/_next/image(.*)"],
}
