// middleware.ts
import { NextRequest } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewriteDefault' // Можно убрать, тогда дефолтный будет как /en
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}