import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    react: {
      useSuspense: false,
    },
    fallbackLng: 'en', // default language if no language is detected by LanguageDetector
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
  })

export default i18n