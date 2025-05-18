// lib/i18n.ts
import { I18n } from 'i18n-js';
import { getLocales } from 'expo-localization';

const translations = {
  en: { welcome: 'Hello', name: 'Charlie' },
  fr: { welcome: 'Salut' },
};

const i18n = new I18n(translations);
i18n.locale = getLocales()[0]?.languageCode ?? 'en';
i18n.enableFallback = true;

export default i18n;