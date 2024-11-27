'use client';
import TranslationProvider from '@/components/TranslationProvider';
import Main from '@/components/main';
import { useTranslation } from 'next-i18next';

function TermsAndConditions() {
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Main showMenuItems={false}>
            <div className="container mx-auto px-4 py-8 md:py-16">
                <h1 className="text-4xl font-bold mb-4">{t('terms_and_conditions')}</h1>
                <p className="text-sm text-gray-600 mb-4">{t('last_updated')}</p>
                <p className="mb-4">{t('terms_intro')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('interpretation_definitions')}</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">{t('interpretation')}</h3>
                <p className="mb-4">{t('interpretation_text')}</p>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('definitions')}</h3>
                <p className="mb-4">{t('definitions_intro_terms')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2"><strong>{t('application')}</strong> {t('application_text_terms')}</li>
                    <li className="mb-2"><strong>{t('application_store')}</strong> {t('application_store_text')}</li>
                    <li className="mb-2"><strong>{t('affiliate')}</strong> {t('affiliate_text_terms')}</li>
                    <li className="mb-2"><strong>{t('country')}</strong> {t('country_text')}</li>
                    <li className="mb-2"><strong>{t('company')}</strong> {t('company_text')}</li>
                    <li className="mb-2"><strong>{t('device')}</strong> {t('device_text')}</li>
                    <li className="mb-2"><strong>{t('service')}</strong> {t('service_text')}</li>
                    <li className="mb-2"><strong>{t('terms_and_conditions')}</strong> {t('terms_and_conditions_text')}</li>
                    <li className="mb-2"><strong>{t('third_party_social_media_service')}</strong> {t('third_party_social_media_service_text')}</li>
                    <li className="mb-2"><strong>{t('you')}</strong> {t('you_text_terms')}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('acknowledgment')}</h2>
                <p className="mb-4">{t('acknowledgment_text')}</p>
                <p className="mb-4">{t('acknowledgment_access_use')}</p>
                <p className="mb-4">{t('acknowledgment_represent')}</p>
                <p className="mb-4">{t('acknowledgment_privacy_policy')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('links_other_websites')}</h2>
                <p className="mb-4">{t('links_other_websites_text_terms')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('termination')}</h2>
                <p className="mb-4">{t('termination_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('limitation_liability')}</h2>
                <p className="mb-4">{t('limitation_liability_text')}</p>
                <p className="mb-4">{t('limitation_liability_some_states')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('as_is_disclaimer')}</h2>
                <p className="mb-4">{t('as_is_disclaimer_text')}</p>
                <p className="mb-4">{t('as_is_disclaimer_jurisdictions')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('governing_law')}</h2>
                <p className="mb-4">{t('governing_law_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('disputes_resolution')}</h2>
                <p className="mb-4">{t('disputes_resolution_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('eu_users')}</h2>
                <p className="mb-4">{t('eu_users_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('us_compliance')}</h2>
                <p className="mb-4">{t('us_compliance_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('severability_waiver')}</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">{t('severability')}</h3>
                <p className="mb-4">{t('severability_text')}</p>
                <h3 className="text-xl font-bold mt-4 mb-2">{t('waiver')}</h3>
                <p className="mb-4">{t('waiver_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('translation_interpretation')}</h2>
                <p className="mb-4">{t('translation_interpretation_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('changes_terms')}</h2>
                <p className="mb-4">{t('changes_terms_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('contact_us')}</h2>
                <p className="mb-4">{t('contact_us_intro_terms')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">{t('contact_us_email')}</li>
                </ul>
            </div>
        </Main>
    );
}

export default function Page() {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <TranslationProvider>
            <TermsAndConditions />
        </TranslationProvider>
    );
};
