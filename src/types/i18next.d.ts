import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      en: typeof import('../locales/en.json');
      pl: typeof import('../locales/pl.json');
      it: typeof import('../locales/it.json');
      fr: typeof import('../locales/fr.json');
      de: typeof import('../locales/de.json');
      es: typeof import('../locales/es.json');
      ko: typeof import('../locales/ko.json');
      ja: typeof import('../locales/ja.json');
      zh: typeof import('../locales/zh.json');
    };
  }
}
