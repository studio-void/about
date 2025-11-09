import { useTranslation } from 'react-i18next';

import { Button, Layout } from '@/components';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout disableHeaderHeight>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-particle-1" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-particle-2" />
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-particle-3" />
          <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-particle-4" />
          <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-violet-500/25 rounded-full blur-3xl animate-particle-5" />
          <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-particle-6" />
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
