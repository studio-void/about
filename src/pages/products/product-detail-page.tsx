import { IconExternalLink } from '@tabler/icons-react';
import { useParams } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { Button, Layout } from '@/components';
import { CodicueLogo } from '@/components/codicue-logo';
import { IgardenLogo } from '@/components/igarden-logo';
import { MyttLogo } from '@/components/mytt-logo';
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
  website?: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color?: string;
  logoClassName?: string;
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
      {
        titleKey: 'award4',
        link: undefined,
      },
      {
        titleKey: 'award5',
        link: undefined,
      },
    ],
  },
  codicue: {
    id: 'codicue',
    name: 'CodiCue',
    sloganKey: 'codicueSlogan',
    descKey: 'codicueDesc',
    logo: CodicueLogo,
    color: '#C83E81',
    awards: [
      {
        titleKey: 'award3',
        link: undefined,
      },
    ],
  },
  mytt: {
    id: 'mytt',
    name: 'MyTT',
    sloganKey: 'myttSlogan',
    descKey: 'myttDesc',
    website: 'https://mytt.wevoid.com/',
    logo: MyttLogo,
    logoClassName: 'text-black dark:text-white',
    awards: [],
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
      <Layout>
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
    <Layout>
      <div className="relative">
        {/* Background gradient animation */}
        <div className="fixed inset-0 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 animate-gradient -z-10" />

        {/* Floating particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="mx-auto max-w-5xl py-24 px-4 relative">
          <div className="mb-8 animate-fade-in-up">
            <Logo
              className={`h-20 w-auto mb-6 ${product.logoClassName ?? ''}`}
              style={product.color ? { color: product.color } : undefined}
            />
            <h1 className="text-4xl font-extrabold mb-3">{product.name}</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
              {t(product.sloganKey)}
            </p>
            {product.website && (
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" className="gap-2">
                  {t('visitWebsite')}
                  <IconExternalLink size={18} />
                </Button>
              </a>
            )}
          </div>

          <Card className="mb-8 animate-fade-in-up animation-delay-100">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">
                {t(product.descKey)}
              </p>
            </CardContent>
          </Card>

          {product.awards.length > 0 && (
            <Card className="animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle>{t('awards')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.awards.map((award, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="text-primary dark:text-primary-foreground">
                        •
                      </span>
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
          )}
        </div>
      </div>
    </Layout>
  );
};
