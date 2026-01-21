import { useTranslation } from 'react-i18next';

import { Layout } from '@/components';

export const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-2">{t('privacyPolicy')}</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            {t('privacyPolicyEffectiveDate')}
          </p>

          <div className="space-y-8 text-neutral-700 dark:text-neutral-300">
            {/* Introduction */}
            <section>
              <p>{t('privacyPolicyIntro')}</p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. {t('privacyPolicyPurpose')}
              </h2>
              <p>{t('privacyPolicyPurposeDesc')}</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. {t('privacyPolicyCollectionPrinciples')}
              </h2>
              <p>{t('privacyPolicyCollectionPrinciplesDesc')}</p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. {t('privacyPolicyDisclosure')}
              </h2>
              <p>{t('privacyPolicyDisclosureDesc')}</p>
              <p className="mt-4">{t('privacyPolicyDisclosureP2')}</p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. {t('privacyPolicyChanges')}
              </h2>
              <p>{t('privacyPolicyChangesDesc')}</p>
              <p className="mt-4">{t('privacyPolicyChangesP2')}</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>{t('privacyPolicyChangesMethod1')}</li>
                <li>{t('privacyPolicyChangesMethod2')}</li>
              </ul>
              <p className="mt-4">{t('privacyPolicyChangesP3')}</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. {t('privacyPolicySignUp')}
              </h2>
              <p className="mb-4">{t('privacyPolicySignUpDesc')}</p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>{t('privacyPolicyRequired')}</strong>:{' '}
                  {t('privacyPolicySignUpRequired')}
                </li>
                <li>
                  <strong>{t('privacyPolicyOptional')}</strong>:{' '}
                  {t('privacyPolicySignUpOptional')}
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. {t('privacyPolicyServiceInfo')}
              </h2>
              <p className="mb-4">{t('privacyPolicyServiceInfoDesc')}</p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>{t('privacyPolicyRequired')}</strong>:{' '}
                  {t('privacyPolicyServiceInfoRequired')}
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. {t('privacyPolicyUsageInfo')}
              </h2>
              <p className="mb-4">{t('privacyPolicyUsageInfoDesc')}</p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>{t('privacyPolicyRequired')}</strong>:{' '}
                  {t('privacyPolicyUsageInfoRequired')}
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. {t('privacyPolicyCollectionMethod')}
              </h2>
              <p className="mb-4">{t('privacyPolicyCollectionMethodDesc')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyPolicyCollectionMethod1')}</li>
                <li>{t('privacyPolicyCollectionMethod2')}</li>
                <li>{t('privacyPolicyCollectionMethod3')}</li>
                <li>{t('privacyPolicyCollectionMethod4')}</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                9. {t('privacyPolicyUse')}
              </h2>
              <p className="mb-4">{t('privacyPolicyUseDesc')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyPolicyUse1')}</li>
                <li>{t('privacyPolicyUse2')}</li>
                <li>{t('privacyPolicyUse3')}</li>
                <li>{t('privacyPolicyUse4')}</li>
                <li>{t('privacyPolicyUse5')}</li>
                <li>{t('privacyPolicyUse6')}</li>
                <li>{t('privacyPolicyUse7')}</li>
                <li>{t('privacyPolicyUse8')}</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                10. {t('privacyPolicyThirdParty')}
              </h2>
              <p className="mb-4">{t('privacyPolicyThirdPartyDesc')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyPolicyThirdParty1')}</li>
              </ul>
              <p className="mt-4">{t('privacyPolicyThirdPartyP2')}</p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                11. {t('privacyPolicyRetention')}
              </h2>
              <p>{t('privacyPolicyRetentionP1')}</p>
              <p className="mt-4">{t('privacyPolicyRetentionP2')}</p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                12. {t('privacyPolicyLegalRetention')}
              </h2>
              <p className="mb-4">{t('privacyPolicyLegalRetentionDesc')}</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">
                    {t('privacyPolicyLegalRetention1Title')}
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>{t('privacyPolicyLegalRetention1_1')}</li>
                    <li>{t('privacyPolicyLegalRetention1_2')}</li>
                    <li>{t('privacyPolicyLegalRetention1_3')}</li>
                    <li>{t('privacyPolicyLegalRetention1_4')}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">
                    {t('privacyPolicyLegalRetention2Title')}
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>{t('privacyPolicyLegalRetention2_1')}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">
                    {t('privacyPolicyLegalRetention3Title')}
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>{t('privacyPolicyLegalRetention3_1')}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">
                    {t('privacyPolicyLegalRetention4Title')}
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>{t('privacyPolicyLegalRetention4_1')}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                13. {t('privacyPolicyDestruction')}
              </h2>
              <p>{t('privacyPolicyDestructionDesc')}</p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                14. {t('privacyPolicyDestructionProcess')}
              </h2>
              <p>{t('privacyPolicyDestructionProcessP1')}</p>
              <p className="mt-4">{t('privacyPolicyDestructionProcessP2')}</p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                15. {t('privacyPolicyDestructionMethod')}
              </h2>
              <p>{t('privacyPolicyDestructionMethodDesc')}</p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                16. {t('privacyPolicyAdvertising')}
              </h2>
              <p className="mb-4">{t('privacyPolicyAdvertisingP1')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('privacyPolicyAdvertising1')}</li>
                <li>{t('privacyPolicyAdvertising2')}</li>
              </ul>
              <p className="mb-4">{t('privacyPolicyAdvertisingP2')}</p>
              <p className="mb-4">{t('privacyPolicyAdvertisingP3')}</p>
              <p className="mb-4">{t('privacyPolicyAdvertisingP4')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('privacyPolicyAdvertising4_1')}</li>
                <li>{t('privacyPolicyAdvertising4_2')}</li>
              </ul>
              <p className="mb-4">{t('privacyPolicyAdvertisingP5')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyPolicyAdvertising5_1')}</li>
                <li>{t('privacyPolicyAdvertising5_2')}</li>
                <li>{t('privacyPolicyAdvertising5_3')}</li>
                <li>{t('privacyPolicyAdvertising5_4')}</li>
                <li>{t('privacyPolicyAdvertising5_5')}</li>
              </ul>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                17. {t('privacyPolicyChildren')}
              </h2>
              <p>{t('privacyPolicyChildrenP1')}</p>
              <p className="mt-4">{t('privacyPolicyChildrenP2')}</p>
              <p className="mt-4">{t('privacyPolicyChildrenP3')}</p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                18. {t('privacyPolicyAccess')}
              </h2>
              <p>{t('privacyPolicyAccessP1')}</p>
              <p className="mt-4">{t('privacyPolicyAccessP2')}</p>
            </section>

            {/* Section 19 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                19. {t('privacyPolicyCorrection')}
              </h2>
              <p>{t('privacyPolicyCorrectionP1')}</p>
              <p className="mt-4">{t('privacyPolicyCorrectionP2')}</p>
            </section>

            {/* Section 20 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                20. {t('privacyPolicyUserObligation')}
              </h2>
              <p>{t('privacyPolicyUserObligationP1')}</p>
              <p className="mt-4">{t('privacyPolicyUserObligationP2')}</p>
              <p className="mt-4">{t('privacyPolicyUserObligationP3')}</p>
            </section>

            {/* Section 21 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                21. {t('privacyPolicyManagement')}
              </h2>
              <p>{t('privacyPolicyManagementDesc')}</p>
            </section>

            {/* Section 22 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                22. {t('privacyPolicyDeletedInfo')}
              </h2>
              <p>{t('privacyPolicyDeletedInfoDesc')}</p>
            </section>

            {/* Section 23 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                23. {t('privacyPolicyPasswordEncryption')}
              </h2>
              <p>{t('privacyPolicyPasswordEncryptionDesc')}</p>
            </section>

            {/* Section 24 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                24. {t('privacyPolicyHackingPrevention')}
              </h2>
              <p>{t('privacyPolicyHackingPreventionP1')}</p>
              <p className="mt-4">{t('privacyPolicyHackingPreventionP2')}</p>
              <p className="mt-4">{t('privacyPolicyHackingPreventionP3')}</p>
              <p className="mt-4">{t('privacyPolicyHackingPreventionP4')}</p>
            </section>

            {/* Section 25 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                25. {t('privacyPolicyTraining')}
              </h2>
              <p>{t('privacyPolicyTrainingDesc')}</p>
            </section>

            {/* Section 26 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                26. {t('privacyPolicyBreach')}
              </h2>
              <p className="mb-4">{t('privacyPolicyBreachDesc')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyPolicyBreach1')}</li>
                <li>{t('privacyPolicyBreach2')}</li>
                <li>{t('privacyPolicyBreach3')}</li>
                <li>{t('privacyPolicyBreach4')}</li>
                <li>{t('privacyPolicyBreach5')}</li>
              </ul>
            </section>

            {/* Section 27 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                27. {t('privacyPolicyBreachException')}
              </h2>
              <p>{t('privacyPolicyBreachExceptionDesc')}</p>
            </section>

            {/* Section 28 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                28. {t('privacyPolicyCookies')}
              </h2>
              <p className="mb-4">{t('privacyPolicyCookiesP1')}</p>
              <p className="mb-4">{t('privacyPolicyCookiesP2')}</p>
              <p>{t('privacyPolicyCookiesP3')}</p>
            </section>

            {/* Section 29 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                29. {t('privacyPolicyCookieSettings')}
              </h2>
              <p className="mb-4">{t('privacyPolicyCookieSettingsDesc')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyPolicyCookieSettingsEdge')}</li>
                <li>{t('privacyPolicyCookieSettingsChrome')}</li>
                <li>{t('privacyPolicyCookieSettingsWhale')}</li>
              </ul>
            </section>

            {/* Section 30 - Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                30. {t('privacyPolicyContactResponsible')}
              </h2>
              <p className="mb-4">{t('privacyPolicyContactResponsibleDesc')}</p>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg space-y-2">
                <p className="font-semibold">{t('privacyPolicyOfficer')}</p>
                <p>
                  {t('privacyPolicyName')}: {t('privacyPolicyNameValue')}
                </p>
                <p>
                  {t('privacyPolicyTitle')}: {t('privacyPolicyTitleValue')}
                </p>
                <p>
                  {t('privacyPolicyPhone')}: {t('privacyPolicyPhoneValue')}
                </p>
                <p>
                  {t('privacyPolicyEmail')}: {t('privacyPolicyEmailValue')}
                </p>
              </div>
            </section>

            {/* Section 31 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                31. {t('privacyPolicyRemedies')}
              </h2>
              <p className="mb-4">{t('privacyPolicyRemediesP1')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('privacyPolicyRemedies1')}</li>
                <li>{t('privacyPolicyRemedies2')}</li>
                <li>{t('privacyPolicyRemedies3')}</li>
                <li>{t('privacyPolicyRemedies4')}</li>
              </ul>
              <p className="mb-4">{t('privacyPolicyRemediesP2')}</p>
              <p className="mb-4">{t('privacyPolicyRemediesP3')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacyPolicyRemedies5')}</li>
              </ul>
            </section>

            {/* Addendum */}
            <section className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">
                {t('privacyPolicyAddendum')}
              </h3>
              <p>1. {t('privacyPolicyEffectiveDateValue')}</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
