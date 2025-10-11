"use client"

import { ProgressProvider } from "@bprogress/next/app"
import { useCurrentLocale } from "@/locale/client"

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  const currentLocale = useCurrentLocale()

  // Нормализуем URL для правильного сравнения с учетом локалей
  const targetPreprocessor = (url: URL) => {
    const targetUrl = new URL(url)
    const currentUrl = new URL(window.location.href)

    // Извлекаем pathname без локали
    const getPathnameWithoutLocale = (pathname: string, locale: string) => {
      // Дефолтная локаль (en) не отображается в URL
      if (locale === "en") {
        return pathname
      }
      // Убираем префикс локали из пути
      if (pathname.startsWith(`/${locale}`)) {
        return pathname.slice(`/${locale}`.length) || "/"
      }
      return pathname
    }

    const targetPathname = getPathnameWithoutLocale(targetUrl.pathname, currentLocale)
    const currentPathname = getPathnameWithoutLocale(currentUrl.pathname, currentLocale)

    // Если пути совпадают (без учета локали), значит это та же страница
    if (targetPathname === currentPathname && targetUrl.search === currentUrl.search) {
      // Возвращаем текущий URL, чтобы @bprogress определил это как same URL
      return currentUrl
    }

    return targetUrl
  }

  return (
    <ProgressProvider
      height="3px"
      color="#ffffff"
      options={{ showSpinner: false }}
      shallowRouting
      disableSameURL={true}
      targetPreprocessor={targetPreprocessor}
    >
      {children}
    </ProgressProvider>
  )
}

export { ProgressBarProvider }
