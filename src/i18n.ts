import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import pl from './locales/pl.json';
import it from './locales/it.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';

const resources = {
  en: { translation: en },
  pl: { translation: pl },
  it: { translation: it },
  fr: { translation: fr },
  de: { translation: de },
  es: { translation: es },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
