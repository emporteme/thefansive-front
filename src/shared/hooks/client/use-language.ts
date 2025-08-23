import { useChangeLocale, useCurrentLocale } from "@/locale/client"
import { getLanguageFlag, getLanguageName, getLanguageNativeName } from "@/shared/constants/languages"
import type { Language } from "@/shared/constants/languages"

export const useLanguage = () => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()

  return {
    currentLocale: currentLocale as Language,
    changeLocale,
    flag: getLanguageFlag(currentLocale as Language),
    name: getLanguageName(currentLocale as Language),
    nativeName: getLanguageNativeName(currentLocale as Language),
  }
}
