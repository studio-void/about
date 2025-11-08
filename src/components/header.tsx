import { forwardRef } from 'react';

import { Link } from '@tanstack/react-router';

import { useTranslation } from '@/i18n';

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
        <div className="px-2 font-extrabold text-xl tracking-tight">
          <Link to="/">VO!D</Link>
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {t('slogan')}
        </div>
      </nav>
      <div className="flex items-center gap-4">
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
