import { Layout } from '@/components';
import { useTranslation } from '@/i18n';

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
  linkedin?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    nameKo: '임정훈',
    nameEn: 'JeongHoon Lim',
    titleKo: '대표',
    titleEn: 'CEO',
    department: 'leadership',
    rolesKo: ['PM', '기획', 'IR/PR', 'DevOps', 'FE'],
    rolesEn: ['PM', 'Planning', 'IR/PR', 'DevOps', 'FE'],
    descKo:
      '제품 전략과 투자 유치를 이끌며, 프론트엔드와 데브옵스까지 넓은 영역을 커버합니다. 팀의 비전과 실행을 연결하는 역할을 합니다.',
    descEn:
      'Leads product strategy and fundraising, covering everything from frontend to DevOps. Connects team vision with execution.',
    email: 'jeonghoon@vo.id',
    github: 'https://github.com/jeonghoon',
  },
  {
    nameKo: '최재원',
    nameEn: 'Charles Choi',
    titleKo: '부대표',
    titleEn: 'VP',
    department: 'leadership',
    rolesKo: ['기획', 'IR/PR', '마케팅'],
    rolesEn: ['Planning', 'IR/PR', 'Marketing'],
    descKo:
      '비즈니스 개발과 마케팅 전략을 담당하며, 투자자 및 파트너 관계를 구축합니다. 브랜드와 시장 포지셔닝을 책임집니다.',
    descEn:
      'Drives business development and marketing strategy, building investor and partner relationships. Owns brand and market positioning.',
    email: 'charles@vo.id',
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
      'Designs full-stack architecture and implements design systems. Sets technical direction for the engineering team.',
    email: 'hyunseung@vo.id',
    github: 'https://github.com/hyunseung',
  },
  {
    nameKo: '박예은',
    nameEn: 'Yeeun Park',
    titleKo: '팀장',
    titleEn: 'Lead',
    department: 'customerExperience',
    rolesKo: ['기획', '디자인', 'FE'],
    rolesEn: ['Planning', 'Design', 'FE'],
    descKo:
      '사용자 경험 설계와 프론트엔드 구현을 주도하며, 제품의 첫인상을 만듭니다. 고객의 목소리를 제품에 반영합니다.',
    descEn:
      'Leads UX design and frontend implementation, crafting the first impression of products. Translates customer voice into features.',
    email: 'yeeun@vo.id',
  },
  {
    nameKo: '장민서',
    nameEn: 'Minseo Jang',
    titleKo: '엔지니어',
    titleEn: 'Engineer',
    department: 'engineering',
    rolesKo: ['하드웨어'],
    rolesEn: ['Hardware'],
    descKo:
      '임베디드 시스템과 하드웨어 프로토타입을 설계하고 제작합니다. 물리적 제품과 소프트웨어를 연결하는 핵심 인력입니다.',
    descEn:
      'Designs and builds embedded systems and hardware prototypes. Bridges physical products with software.',
    email: 'minseo@vo.id',
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
    email: 'gamchan@vo.id',
    github: 'https://github.com/gamchan',
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
    email: 'dohyun@vo.id',
  },
];

export const TeamMainPage: React.FC = () => {
  const { t, lang } = useTranslation();

  const grouped = {
    leadership: teamMembers.filter((m) => m.department === 'leadership'),
    engineering: teamMembers.filter((m) => m.department === 'engineering'),
    customerExperience: teamMembers.filter(
      (m) => m.department === 'customerExperience',
    ),
  };

  return (
    <Layout disableHeaderHeight>
      <div className="mx-auto max-w-5xl py-24 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold">{t('teamVoids')}</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            {t('teamIntro')}
          </p>
        </header>

        {/* Leadership */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t('leadership')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {grouped.leadership.map((m) => (
              <MemberCard key={m.nameEn} member={m} lang={lang} />
            ))}
          </div>
        </section>

        {/* Engineering */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t('engineering')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {grouped.engineering.map((m) => (
              <MemberCard key={m.nameEn} member={m} lang={lang} />
            ))}
          </div>
        </section>

        {/* Customer Experience */}
        {grouped.customerExperience.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              {t('customerExperience')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {grouped.customerExperience.map((m) => (
                <MemberCard key={m.nameEn} member={m} lang={lang} />
              ))}
            </div>
          </section>
        )}

        <section className="p-6 border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            {t('investorRelations')}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            {t('openToPartners')}
          </p>
          <a
            href="mailto:invest@vo.id"
            className="inline-block rounded-md bg-primary text-primary-foreground px-4 py-2"
          >
            {t('requestDeck')}
          </a>
        </section>
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
    <div className="p-6 border border-border rounded-lg">
      <div className="mb-3">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {title}
        </p>
      </div>

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

      <div className="flex items-center gap-3 text-sm">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="text-neutral-600 dark:text-neutral-400 hover:underline"
          >
            Email
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:underline"
          >
            GitHub
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:underline"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};
