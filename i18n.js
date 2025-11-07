import { createI18n } from "vue-i18n"
import en from "./src/locales/en/translation.json"
import ar from "./src/locales/ar/translation.json"
export const i18n = createI18n({
    locale: 'ar',
    fallbackLocale: 'ar',
    messages: { 
      en : {
        message : en,
      },
      ar : {
        message : ar,
      }
    }
})