import { useTranslation } from 'react-i18next';

import { Layout } from '@/components';

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">{t('termsOfService')}</h1>

          <div className="space-y-8 text-neutral-700 dark:text-neutral-300">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. {t('termsPurpose')}
              </h2>
              <p>{t('termsPurposeDesc')}</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. {t('termsDefinitions')}
              </h2>
              <p className="mb-4">{t('termsDefinitionsDesc')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('termsDefinition1')}</li>
                <li>{t('termsDefinition2')}</li>
                <li>{t('termsDefinition3')}</li>
                <li>{t('termsDefinition4')}</li>
                <li>{t('termsDefinition5')}</li>
                <li>{t('termsDefinition6')}</li>
                <li>{t('termsDefinition7')}</li>
                <li>{t('termsDefinition8')}</li>
                <li>{t('termsDefinition9')}</li>
                <li>{t('termsDefinition10')}</li>
                <li>{t('termsDefinition11')}</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. {t('termsOtherRules')}
              </h2>
              <p>{t('termsOtherRulesDesc')}</p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. {t('termsEffectAndChange')}
              </h2>
              <p className="mb-4">{t('termsEffectAndChangeP1')}</p>
              <p className="mb-4">{t('termsEffectAndChangeP2')}</p>
              <p>{t('termsEffectAndChangeP3')}</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. {t('termsNoticeToUsers')}
              </h2>
              <p className="mb-4">{t('termsNoticeToUsersP1')}</p>
              <p className="mb-4">{t('termsNoticeToUsersP2')}</p>
              <p>{t('termsNoticeToUsersP3')}</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. {t('termsContractFormation')}
              </h2>
              <p className="mb-4">{t('termsContractFormationDesc')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('termsContractFormation1')}</li>
                <li>{t('termsContractFormation2')}</li>
                <li>{t('termsContractFormation3')}</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. {t('termsMembershipApproval')}
              </h2>
              <p className="mb-4">{t('termsMembershipApprovalP1')}</p>
              <p className="mb-4">{t('termsMembershipApprovalP2')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('termsMembershipApproval1')}</li>
                <li>{t('termsMembershipApproval2')}</li>
                <li>{t('termsMembershipApproval3')}</li>
                <li>{t('termsMembershipApproval4')}</li>
                <li>{t('termsMembershipApproval5')}</li>
                <li>{t('termsMembershipApproval6')}</li>
                <li>{t('termsMembershipApproval7')}</li>
                <li>{t('termsMembershipApproval8')}</li>
              </ul>
              <p className="mb-4">{t('termsMembershipApprovalP3')}</p>
              <p className="mb-4">{t('termsMembershipApprovalP4')}</p>
              <p className="mb-4">{t('termsMembershipApprovalP5')}</p>
              <p className="mb-4">{t('termsMembershipApprovalP6')}</p>
              <p className="mb-4">{t('termsMembershipApprovalP7')}</p>
              <p>{t('termsMembershipApprovalP8')}</p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. {t('termsMemberInfoChange')}
              </h2>
              <p className="mb-4">{t('termsMemberInfoChangeP1')}</p>
              <p className="mb-4">{t('termsMemberInfoChangeP2')}</p>
              <p>{t('termsMemberInfoChangeP3')}</p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                9. {t('termsMemberInfoManagement')}
              </h2>
              <p className="mb-4">{t('termsMemberInfoManagementP1')}</p>
              <p className="mb-4">{t('termsMemberInfoManagementP2')}</p>
              <p className="mb-4">{t('termsMemberInfoManagementP3')}</p>
              <p>{t('termsMemberInfoManagementP4')}</p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                10. {t('termsCompanyObligations')}
              </h2>
              <p className="mb-4">{t('termsCompanyObligationsP1')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('termsCompanyObligations1')}</li>
                <li>{t('termsCompanyObligations2')}</li>
                <li>{t('termsCompanyObligations3')}</li>
                <li>{t('termsCompanyObligations4')}</li>
              </ul>
              <p className="mb-4">{t('termsCompanyObligationsP2')}</p>
              <p>{t('termsCompanyObligationsP3')}</p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                11. {t('termsPrivacyProtection')}
              </h2>
              <p className="mb-4">{t('termsPrivacyProtectionP1')}</p>
              <p>{t('termsPrivacyProtectionP2')}</p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                12. {t('termsUserObligations')}
              </h2>
              <p className="mb-4">{t('termsUserObligationsP1')}</p>
              <p className="mb-4">{t('termsUserObligationsP2')}</p>
              <p className="mb-4">{t('termsUserObligationsP3')}</p>
              <p className="mb-4">{t('termsUserObligationsP4')}</p>
              <p className="mb-4">{t('termsUserObligationsP5')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('termsUserObligations1')}</li>
                <li>{t('termsUserObligations2')}</li>
                <li>{t('termsUserObligations3')}</li>
                <li>{t('termsUserObligations4')}</li>
                <li>{t('termsUserObligations5')}</li>
              </ul>
              <p className="mb-4">{t('termsUserObligationsP6')}</p>
              <p>{t('termsUserObligationsP7')}</p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                13. {t('termsServiceProvision')}
              </h2>
              <p className="mb-4">{t('termsServiceProvisionP1')}</p>
              <p className="mb-4">{t('termsServiceProvisionP2')}</p>
              <p className="mb-4">{t('termsServiceProvisionP3')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('termsServiceProvision1')}</li>
                <li>{t('termsServiceProvision2')}</li>
                <li>{t('termsServiceProvision3')}</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                14. {t('termsServiceRestrictions')}
              </h2>
              <p className="mb-4">{t('termsServiceRestrictionsP1')}</p>
              <p className="mb-4">{t('termsServiceRestrictionsP2')}</p>
              <p className="mb-4">{t('termsServiceRestrictionsP3')}</p>
              <p>{t('termsServiceRestrictionsP4')}</p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                15. {t('termsTermination')}
              </h2>
              <p className="mb-4">{t('termsTerminationP1')}</p>
              <p className="mb-4">{t('termsTerminationP2')}</p>
              <p>{t('termsTerminationP3')}</p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                16. {t('termsDamages')}
              </h2>
              <p className="mb-4">{t('termsDamagesP1')}</p>
              <p>{t('termsDamagesP2')}</p>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                17. {t('termsDisclaimer')}
              </h2>
              <p className="mb-4">{t('termsDisclaimerP1')}</p>
              <p className="mb-4">{t('termsDisclaimerP2')}</p>
              <p className="mb-4">{t('termsDisclaimerP3')}</p>
              <p>{t('termsDisclaimerP4')}</p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                18. {t('termsInformationAndAds')}
              </h2>
              <p className="mb-4">{t('termsInformationAndAdsP1')}</p>
              <p className="mb-4">{t('termsInformationAndAdsP2')}</p>
              <p className="mb-4">{t('termsInformationAndAdsP3')}</p>
              <p className="mb-4">{t('termsInformationAndAdsP4')}</p>
              <p>{t('termsInformationAndAdsP5')}</p>
            </section>

            {/* Section 19 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                19. {t('termsPaidServicePayment')}
              </h2>
              <p className="mb-4">{t('termsPaidServicePaymentP1')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('termsPaidServicePayment1')}</li>
                <li>{t('termsPaidServicePayment2')}</li>
              </ul>
              <p className="mb-4">{t('termsPaidServicePaymentP2')}</p>
              <p className="mb-4">{t('termsPaidServicePaymentP3')}</p>
              <p>{t('termsPaidServicePaymentP4')}</p>
            </section>

            {/* Section 20 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                20. {t('termsRefund')}
              </h2>
              <p className="mb-4">{t('termsRefundP1')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('termsRefund1')}</li>
                <li>{t('termsRefund2')}</li>
              </ul>
              <p className="mb-4">{t('termsRefundP2')}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>{t('termsRefund3')}</li>
                <li>{t('termsRefund4')}</li>
                <li>{t('termsRefund5')}</li>
                <li>{t('termsRefund6')}</li>
                <li>{t('termsRefund7')}</li>
              </ul>
              <p className="mb-4">{t('termsRefundP3')}</p>
              <p className="mb-4">{t('termsRefundP4')}</p>
              <p>{t('termsRefundP5')}</p>
            </section>

            {/* Section 21 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                21. {t('termsRightsOwnership')}
              </h2>
              <p className="mb-4">{t('termsRightsOwnershipP1')}</p>
              <p className="mb-4">{t('termsRightsOwnershipP2')}</p>
              <p>{t('termsRightsOwnershipP3')}</p>
            </section>

            {/* Section 22 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                22. {t('termsContentManagement')}
              </h2>
              <p className="mb-4">{t('termsContentManagementP1')}</p>
              <p>{t('termsContentManagementP2')}</p>
            </section>

            {/* Section 23 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                23. {t('termsContentCopyright')}
              </h2>
              <p className="mb-4">{t('termsContentCopyrightP1')}</p>
              <p className="mb-4">{t('termsContentCopyrightP2')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('termsContentCopyright1')}</li>
                <li>{t('termsContentCopyright2')}</li>
                <li>{t('termsContentCopyright3')}</li>
              </ul>
            </section>

            {/* Section 24 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                24. {t('termsJurisdiction')}
              </h2>
              <p>{t('termsJurisdictionDesc')}</p>
            </section>

            {/* Addendum */}
            <section className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">{t('termsAddendum')}</h3>
              <p>{t('termsEffectiveDate')}</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};
