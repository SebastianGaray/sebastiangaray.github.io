export const localeConfig = {
  en: {
    alternate: "es",
    label: "English",
    ogLocale: "en_US",
  },
  es: {
    alternate: "en",
    label: "Español",
    ogLocale: "es_CL",
  },
} as const;

export type Locale = keyof typeof localeConfig;

export function getLocaleConfig(locale: Locale) {
  return localeConfig[locale];
}
