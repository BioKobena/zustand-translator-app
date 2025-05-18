import { I18n } from 'i18n-js';
import { getLocales } from 'expo-localization';
import en from '@/json/en.json'
import fr from '@/json/fr.json'

const translations = {
  en: en,
  fr: fr,
};

const i18n = new I18n(translations);
i18n.locale = getLocales()[0]?.languageCode ?? 'en';
i18n.enableFallback = true;

export default i18n;