import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconWorld,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@/components';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface TeamMember {
  nameKo: string;
  nameEn: string;
  titleKo: string;
  titleEn: string;
  department: 'leadership' | 'engineering' | 'customerExperience';
  rolesKo: string[];
  rolesEn: string[];
  descKo: string;
  descEn: string;
  email?: string;
  github?: string;
  website?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    nameKo: '임정훈',
    nameEn: 'JeongHoon Lim',
    titleKo: '대표',
    titleEn: 'CEO & Founder',
    department: 'leadership',
    rolesKo: ['PM', '기획', 'IR/PR', 'DevOps', 'FE'],
    rolesEn: ['PM', 'Planning', 'IR/PR', 'DevOps', 'FE'],
    descKo:
      '제품 전략과 투자 유치를 이끌며, 프론트엔드와 데브옵스까지 넓은 영역을 커버합니다. 팀의 비전과 실행을 연결하는 역할을 합니다.',
    descEn:
      'Leads the overall team vision, product strategy, and investor relations, covering a wide range from frontend to DevOps.',
    email: 'ceo@wevoid.com',
    github: 'https://github.com/hoony6134',
    website: 'https://me.scian.xyz',
    linkedin: 'https://www.linkedin.com/in/hoony6134',
  },
  {
    nameKo: '최재원',
    nameEn: 'Charles Choi',
    titleKo: '부대표',
    titleEn: 'Vice President',
    department: 'leadership',
    rolesKo: ['기획', 'IR/PR', '마케팅'],
    rolesEn: ['Planning', 'IR/PR', 'Marketing'],
    descKo:
      '비즈니스 개발과 마케팅 전략을 담당하며, 투자자 및 파트너 관계를 구축합니다. 브랜드와 시장 포지셔닝을 책임집니다.',
    descEn:
      'Drives business development and marketing strategy, building investor and partner relationships. Owns brand and market positioning.',
    email: 'choijw1202@wevoid.com',
  },
  {
    nameKo: '류현승',
    nameEn: 'Hyunseung Ryu',
    titleKo: '기술이사',
    titleEn: 'CTO',
    department: 'engineering',
    rolesKo: ['FE', 'BE', '디자인'],
    rolesEn: ['FE', 'BE', 'Design'],
    descKo:
      '풀스택 개발과 시스템 아키텍처를 설계하며, 디자인 시스템까지 직접 구현합니다. 기술팀의 방향성을 제시합니다.',
    descEn:
      'Designs full-stack architecture and implements design systems. Sets technical direction for the entire engineering team.',
    email: 'rhseungg@wevoid.com',
    github: 'https://github.com/rhseung',
    website: 'https://rhseung.me',
    linkedin: 'https://www.linkedin.com/in/hyunseung-ryu-a340b02a7',
  },
  {
    nameKo: '박예은',
    nameEn: 'Yeeun Park',
    titleKo: '기획자',
    titleEn: 'Planner',
    department: 'customerExperience',
    rolesKo: ['기획', 'FE'],
    rolesEn: ['Planning', 'FE'],
    descKo:
      '제품을 기획하고 사용자 경험을 설계하며, 프론트엔드 구현까지 담당합니다. 제품의 첫인상을 책임집니다.',
    descEn:
      "Plans products, designs user experiences, and handles frontend implementation. Responsible for the product's first impression.",
    email: 'yetwin05@gm.gist.ac.kr',
  },
  {
    nameKo: '홍수아',
    nameEn: 'Sooa Hong',
    titleKo: '수석 디자이너',
    titleEn: 'Senior Designer',
    department: 'customerExperience',
    rolesKo: ['디자인', '기획'],
    rolesEn: ['Design', 'Strategy'],
    descKo:
      '사용자 경험을 중심으로 제품을 설계하고, 전략적 기획을 통해 비즈니스 가치를 창출합니다.',
    descEn:
      'Designs user-centered products and creates business value through strategic planning.',
    email: 'hong_sooa@wevoid.com',
  },
  {
    nameKo: '강감찬',
    nameEn: 'Gamchan Kang',
    titleKo: '개발자',
    titleEn: 'Developer',
    department: 'engineering',
    rolesKo: ['AI'],
    rolesEn: ['AI'],
    descKo:
      '머신러닝 모델을 연구하고 프로덕션 환경에 배포합니다. 데이터 기반 인사이트를 제품에 녹여냅니다.',
    descEn:
      'Researches and deploys machine learning models to production. Integrates data-driven insights into products.',
    email: 'gamchan11@gm.gist.ac.kr',
  },
  {
    nameKo: '김도현',
    nameEn: 'Dohyun Kim',
    titleKo: '개발자',
    titleEn: 'Developer',
    department: 'engineering',
    rolesKo: ['BE', 'AI', 'DevOps'],
    rolesEn: ['BE', 'AI', 'DevOps'],
    descKo:
      '백엔드 서비스와 AI 파이프라인을 구축하고, 인프라를 안정적으로 운영합니다. 시스템의 확장성과 신뢰성을 책임집니다.',
    descEn:
      'Builds backend services and AI pipelines, ensuring stable infrastructure. Responsible for scalability and reliability.',
    email: 'dohyun06@gm.gist.ac.kr',
    github: 'https://github.com/dohyun06',
  },
];

export const TeamMainPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ko';

  const grouped = {
    leadership: teamMembers.filter((m) => m.department === 'leadership'),
    engineering: teamMembers.filter((m) => m.department === 'engineering'),
    customerExperience: teamMembers.filter(
      (m) => m.department === 'customerExperience',
    ),
  };

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
          <header className="mb-8 animate-fade-in-up text-center">
            <h1 className="text-4xl font-extrabold">{t('teamVoids')}</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              {t('teamIntro')}
            </p>
          </header>

          {/* Leadership */}
          <section className="mb-12 animate-fade-in-up animation-delay-100">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {t('leadership')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {grouped.leadership.map((m) => (
                <MemberCard key={m.nameEn} member={m} lang={lang} />
              ))}
            </div>
          </section>

          {/* Engineering */}
          <section className="mb-12 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {t('engineering')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {grouped.engineering.map((m) => (
                <MemberCard key={m.nameEn} member={m} lang={lang} />
              ))}
            </div>
          </section>

          {/* Customer Experience */}
          {grouped.customerExperience.length > 0 && (
            <section className="mb-12 animate-fade-in-up animation-delay-300">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {t('customerExperience')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {grouped.customerExperience.map((m) => (
                  <MemberCard key={m.nameEn} member={m} lang={lang} />
                ))}
              </div>
            </section>
          )}

          <Card className="animate-fade-in-up animation-delay-400">
            <CardHeader>
              <CardTitle>{t('contactUs')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {t('contactUsDesc')}
              </p>
              <a
                href="mailto:ceo@wevoid.com"
                className="inline-block rounded-md bg-primary text-primary-foreground px-4 py-2 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                {t('contact')}
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

const MemberCard: React.FC<{ member: TeamMember; lang: 'en' | 'ko' }> = ({
  member,
  lang,
}) => {
  const name = lang === 'ko' ? member.nameKo : member.nameEn;
  const title = lang === 'ko' ? member.titleKo : member.titleEn;
  const roles = lang === 'ko' ? member.rolesKo : member.rolesEn;
  const desc = lang === 'ko' ? member.descKo : member.descEn;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {roles.map((role) => (
            <span
              key={role}
              className="inline-block px-2 py-0.5 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {role}
            </span>
          ))}
        </div>

        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
          {desc}
        </p>

        <div className="flex items-center gap-3">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <IconMail size={20} />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:scale-110 transition-all duration-200"
              aria-label="Website"
            >
              <IconWorld size={20} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
