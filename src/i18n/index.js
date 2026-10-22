import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ruMain from './locales/ru/main.json'
import ruErrors from './locales/ru/errors.json'
import enMain from './locales/en/main.json'
import enErrors from './locales/en/errors.json'

const resources = {
  ru: {
    translation: {
      ...ruMain,
      errors: ruErrors,
    },
  },
  en: {
    translation: {
      ...enMain,
      errors: enErrors,
    },
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n