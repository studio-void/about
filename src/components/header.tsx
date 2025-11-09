import { forwardRef } from 'react';

import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Header = forwardRef<
  HTMLElementTagNameMap['header'],
  React.HTMLAttributes<HTMLElementTagNameMap['header']>
>((_, ref) => {
  const { t } = useTranslation();

  return (
    <header
      ref={ref}
      className="p-4 flex items-center justify-between bg-background text-foreground border-b"
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
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {t('slogan')}
        </div>
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
        <a
          href="mailto:ceo@wevoid.com"
          className="inline-block rounded-md bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium hover:opacity-90"
        >
          {t('invest')}
        </a>
      </div>
    </header>
  );
});
