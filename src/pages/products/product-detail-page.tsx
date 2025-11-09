import { IconExternalLink } from '@tabler/icons-react';
import { useParams } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { Button, Layout } from '@/components';
import { IgardenLogo } from '@/components/igarden-logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Award {
  titleKey: string;
  link?: string;
}

interface ProductDetail {
  id: string;
  name: string;
  sloganKey: string;
  descKey: string;
  website: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  awards: Award[];
}

const productDetails: Record<string, ProductDetail> = {
  shimter: {
    id: 'shimter',
    name: 'I_Garden',
    sloganKey: 'igardenSlogan',
    descKey: 'igardenDesc',
    website: 'https://shimter.wevoid.com',
    logo: IgardenLogo,
    color: '#3EC893',
    awards: [
      {
        titleKey: 'award1',
        link: undefined,
      },
      {
        titleKey: 'award2',
        link: undefined,
      },
    ],
  },
};

export const ProductDetailPage: React.FC = () => {
  const params = useParams({ from: '/product/$projectId' });
  const { t } = useTranslation();

  const product = params.projectId
    ? productDetails[params.projectId]
    : undefined;

  if (!product) {
    return (
      <Layout disableHeaderHeight>
        <div className="mx-auto max-w-5xl py-24 px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Product Not Found</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </Layout>
    );
  }

  const Logo = product.logo;

  return (
    <Layout disableHeaderHeight>
      <div className="mx-auto max-w-5xl py-24 px-4">
        <div className="mb-8">
          <Logo className="h-20 w-auto mb-6" style={{ color: product.color }} />
          <h1 className="text-4xl font-extrabold mb-3">{product.name}</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
            {t(product.sloganKey)}
          </p>
          <a href={product.website} target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="gap-2">
              {t('visitWebsite')}
              <IconExternalLink size={18} />
            </Button>
          </a>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 dark:text-neutral-300">
              {t(product.descKey)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('awards')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {product.awards.map((award, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300"
                >
                  <span className="text-primary mt-1">•</span>
                  {award.link ? (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      {t(award.titleKey)}
                      <IconExternalLink size={16} />
                    </a>
                  ) : (
                    <span>{t(award.titleKey)}</span>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
