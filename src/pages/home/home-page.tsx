import { Button, Layout } from '@/components';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
            <a href="mailto:ceo@wevoid.com" className="inline-block">
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
            <Card>
              <CardHeader>
                <CardTitle>{t('traction')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">10k+</p>
                <CardDescription>{t('monthlyUsers')}</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('growth')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">+28% MoM</p>
                <CardDescription>{t('organicGrowth')}</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('teamCount')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5</p>
                <CardDescription>{t('coreTeam')}</CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('whyVoidTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                {t('mission')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};
