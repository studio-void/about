import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Lang = 'en' | 'ko';

const DEFAULT: Lang = 'en';

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextValue>({
  lang: DEFAULT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLang: () => {},
  t: (k: string) => k,
  isLoading: true,
});

export const I18nProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Lang>(DEFAULT);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${lang}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error(`Failed to load translations for ${lang}:`, error);
        setTranslations({});
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [lang]);

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
      return translations[key] ?? key;
    };
  }, [translations]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);

export type { Lang };
