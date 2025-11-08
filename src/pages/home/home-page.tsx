import { Button, Layout } from '@/components';
import { useTranslation } from '@/i18n';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout disableHeaderHeight>
      <section className="min-h-[78vh] flex items-center">
        <div className="mx-auto w-full max-w-5xl text-center py-24">
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-4">
            VO!D
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 mb-6">
            {t('slogan')}
          </p>

          <p className="max-w-3xl mx-auto text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            {t('buildAha')}
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button variant="default" className="px-6 py-3">
              {t('requestDeck')}
            </Button>
            <a href="mailto:invest@vo.id" className="inline-block">
              <Button variant="outline" className="px-6 py-3">
                {t('contact')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg text-center">
              <h3 className="font-semibold mb-2">{t('traction')}</h3>
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t('monthlyUsers')}
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg text-center">
              <h3 className="font-semibold mb-2">{t('growth')}</h3>
              <p className="text-3xl font-bold">+28% MoM</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t('organicGrowth')}
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg text-center">
              <h3 className="font-semibold mb-2">{t('teamCount')}</h3>
              <p className="text-3xl font-bold">5</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t('coreTeam')}
              </p>
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg">
            <h3 className="font-semibold mb-4">{t('whyVoidTitle')}</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              {t('mission')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
