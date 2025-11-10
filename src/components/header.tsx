import { forwardRef } from 'react';

import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { ThemeToggle } from './theme-toggle';

export const Header = forwardRef<
  HTMLElementTagNameMap['header'],
  React.HTMLAttributes<HTMLElementTagNameMap['header']>
>((_, ref) => {
  const { t } = useTranslation();

  return (
    <header
      ref={ref}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl px-6 py-3 flex items-center justify-between rounded-full backdrop-blur-xl bg-background/70 dark:bg-background/50 border border-border/50 shadow-lg"
    >
      <nav className="flex items-center gap-4">
        <Link to="/">
          <div className="flex font-extrabold text-xl tracking-tight gap-2 items-center">
            <img
              src="/android-chrome-512x512.png"
              alt="VO!D logo"
              className="w-6 h-6"
            />
            VO!D
          </div>
        </Link>
        {/* <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {t('slogan')}
        </div> */}
      </nav>
      <div className="flex items-center gap-4">
        <Link
          to="/products"
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:underline"
        >
          {t('products')}
        </Link>
        <Link
          to="/team"
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:underline"
        >
          {t('team')}
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
});
