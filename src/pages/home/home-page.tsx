import { useTranslation } from 'react-i18next';

import { Button, Layout } from '@/components';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout disableHeaderHeight>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 animate-gradient" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="mx-auto w-full max-w-5xl text-center px-4 relative z-10">
          {/* Logo + Wordmark in one line with fade-in animation */}
          <div className="mb-8 flex items-center justify-center gap-4 animate-fade-in-up">
            <img
              src="/android-chrome-512x512.png"
              alt="VO!D logo"
              className="w-16 h-16 animate-float-once"
            />
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight animate-float-once">
              VO!D
            </h1>
          </div>

          <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 animate-fade-in-up animation-delay-100">
            {t('slogan')}
          </p>

          <p className="max-w-3xl mx-auto text-lg text-neutral-700 dark:text-neutral-300 mb-8 animate-fade-in-up animation-delay-200">
            {t('buildAha')}
          </p>

          <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a href="mailto:ceo@wevoid.com" className="inline-block">
              <Button
                variant="default"
                className="px-6 py-3 hover:scale-105 transition-transform duration-300"
              >
                {t('requestDeck')}
              </Button>
            </a>
            <a href="mailto:ceo@wevoid.com" className="inline-block">
              <Button
                variant="outline"
                className="px-6 py-3 hover:scale-105 transition-transform duration-300"
              >
                {t('contact')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
