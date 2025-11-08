import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import enTranslations from './locales/en.json';
import koTranslations from './locales/ko.json';

type Lang = 'en' | 'ko';

const DEFAULT: Lang = 'ko';

const translations: Record<Lang, Record<string, string>> = {
  en: enTranslations,
  ko: koTranslations,
};

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  lang: DEFAULT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLang: () => {},
  t: (k: string) => k,
});

export const I18nProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      if (typeof window !== 'undefined') {
        const stored = window.localStorage.getItem('lang') as Lang | null;
        if (stored && (stored === 'en' || stored === 'ko')) return stored;
        const nav = (navigator.language || '').startsWith('en') ? 'en' : 'ko';
        return (nav as Lang) || DEFAULT;
      }
    } catch (e) {
      // ignore
    }
    return DEFAULT;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = useMemo(() => {
    return (key: string) => {
      return translations[lang]?.[key] ?? translations[DEFAULT]?.[key] ?? key;
    };
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);

export type { Lang };
