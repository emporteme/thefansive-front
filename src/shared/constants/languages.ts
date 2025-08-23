export type Language = "en" | "ru"

export interface LanguageInfo {
  code: Language
  name: string
  nativeName: string
  flag: string
  locale: string
}

export const LANGUAGES: Record<Language, LanguageInfo> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    locale: "en-US",
  },
  ru: {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    locale: "ru-RU",
  },
}

export const getLanguageName = (language: Language): string => {
  return LANGUAGES[language].name
}

export const getLanguageNativeName = (language: Language): string => {
  return LANGUAGES[language].nativeName
}

export const getLanguageFlag = (language: Language): string => {
  return LANGUAGES[language].flag
}
