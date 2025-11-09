import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { Button, Layout } from '@/components';
import { IgardenLogo } from '@/components/igarden-logo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  sloganKey: string;
  descKey: string;
  website: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const products: Product[] = [
  {
    id: 'shimter',
    name: 'I_Garden',
    sloganKey: 'igardenSlogan',
    descKey: 'igardenDesc',
    website: 'https://shimter.wevoid.com',
    logo: IgardenLogo,
    color: '#3EC893',
  },
];

export const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout disableHeaderHeight>
      <div className="mx-auto max-w-5xl py-24 px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold mb-4">{t('ourProducts')}</h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            {t('productsIntro')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => {
            const Logo = product.logo;
            return (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mb-4">
                    <Logo
                      className="h-16 w-auto"
                      style={{ color: product.color }}
                    />
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {t(product.sloganKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                    {t(product.descKey)}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={product.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default">{t('visitWebsite')}</Button>
                    </a>
                    <Link
                      to="/product/$projectId"
                      params={{ projectId: product.id }}
                    >
                      <Button variant="outline">{t('learnMore')}</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
