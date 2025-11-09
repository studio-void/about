import * as React from 'react';

import { useTranslation } from 'react-i18next';

export const LangSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  };

  return (
    <button
      aria-label="Toggle language"
      onClick={toggle}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center h-10 px-3 rounded-md border border-border bg-card text-foreground shadow-sm hover:opacity-95"
    >
      {i18n.language === 'en' ? 'EN' : 'KR'}
    </button>
  );
};

export default LangSwitch;
