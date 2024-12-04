'use client';
import TranslationProvider from '@/components/TranslationProvider';
import Main from '@/components/main';
import { useTranslation } from 'next-i18next';

function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Main showMenuItems={false}>
            <div className="container mx-auto px-4 py-8 md:py-16">
                <h1 className="text-4xl font-bold mb-4">{t('privacy_policy')}</h1>
                <p className="text-sm text-gray-600 mb-4">{t('last_updated')}</p>
                <p className="mb-4">{t('introduction')}</p>
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('introduction_link') }}></p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('interpretation_definitions')}</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">{t('interpretation')}</h3>
                <p className="mb-4">{t('interpretation_text')}</p>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('definitions')}</h3>
                <p className="mb-4">{t('definitions_intro')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2"><strong>{t('account')}</strong> {t('account_text')}</li>
                    <li className="mb-2"><strong>{t('affiliate')}</strong> {t('affiliate_text')}</li>
                    <li className="mb-2"><strong>{t('application')}</strong> {t('application_text')}</li>
                    <li className="mb-2"><strong>{t('company')}</strong> {t('company_text')}</li>
                    <li className="mb-2"><strong>{t('country')}</strong> {t('country_text')}</li>
                    <li className="mb-2"><strong>{t('device')}</strong> {t('device_text')}</li>
                    <li className="mb-2"><strong>{t('personal_data')}</strong> {t('personal_data_text')}</li>
                    <li className="mb-2"><strong>{t('service')}</strong> {t('service_text')}</li>
                    <li className="mb-2"><strong>{t('service_provider')}</strong> {t('service_provider_text')}</li>
                    <li className="mb-2"><strong>{t('usage_data')}</strong> {t('usage_data_text')}</li>
                    <li className="mb-2"><strong>{t('device_identifiers')}</strong> {t('device_identifiers_text')}</li>
                    <li className="mb-2"><strong>{t('you')}</strong> {t('you_text')}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('collecting_using_personal_data')}</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">{t('types_data_collected')}</h3>
                <h4 className="text-lg font-bold mt-4 mb-2">{t('personal_data')}</h4>
                <p className="mb-4">{t('personal_data_text')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">{t('first_name_last_name')}</li>
                    <li className="mb-2">{t('usage_data')}</li>
                    <li className="mb-2">{t('device_identifiers')}</li>
                </ul>

                <h4 className="text-lg font-bold mt-4 mb-2">{t('device_identifiers')}</h4>
                <p className="mb-4">{t('device_identifiers_description')}</p>

                <h4 className="text-lg font-bold mt-4 mb-2">{t('google_oauth_data')}</h4>
                <p className="mb-4">{t('google_oauth_description')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">{t('google_oauth_name')}</li>
                    <li className="mb-2">{t('google_oauth_ai_access')}</li>
                    <li className="mb-2"><b>{t('google_oauth_offline')}</b></li>
                    <li className="mb-2"><b>{t('google_oauth_not_shared')}</b></li>
                    <li className="mb-2">{t('google_oauth_optional')}</li>
                </ul>

                <h4 className="text-lg font-bold mt-4 mb-2">{t('usage_data')}</h4>
                <p className="mb-4">{t('usage_data_text')}</p>

                <h4 className="text-lg font-bold mt-4 mb-2">{t('information_collected_application')}</h4>
                <p className="mb-4">{t('information_collected_application_text')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">{t('activity_recognition')}</li>
                    <li className="mb-2">{t('body_sensor')}</li>
                    <li className="mb-2">{t('internet_access')}</li>
                    <li className="mb-2">{t('calendar_data')}</li>
                    <li className="mb-2">{t('external_storage')}</li>
                    <li className="mb-2">{t('boot_completed')}</li>
                    <li className="mb-2">{t('system_alert_window')}</li>
                    <li className="mb-2">{t('vibrate')}</li>
                    <li className="mb-2">{t('wake_lock')}</li>
                    <li className="mb-2">{t('health_data')}</li>
                </ul>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('use_personal_data')}</h3>
                <p className="mb-4">{t('use_personal_data_intro')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>{t('provide_maintain_service')}</strong> {t('provide_maintain_service_text')}</li>
                    <li className="mb-2"><strong>{t('analyze_user_data')}</strong> {t('analyze_user_data_text')}</li>
                    <li className="mb-2"><strong>{t('manage_account')}</strong> {t('manage_account_text')}</li>
                    <li className="mb-2"><strong>{t('performance_contract')}</strong> {t('performance_contract_text')}
                    </li>
                    <li className="mb-2"><strong>{t('contact_you')}</strong> {t('contact_you_text')}</li>
                    <li className="mb-2"><strong>{t('provide_news_offers')}</strong> {t('provide_news_offers_text')}
                    </li>
                    <li className="mb-2"><strong>{t('manage_requests')}</strong> {t('manage_requests_text')}</li>
                    <li className="mb-2"><strong>{t('business_transfers')}</strong> {t('business_transfers_text')}</li>
                    <li className="mb-2"><strong>{t('other_purposes')}</strong> {t('other_purposes_text')}</li>
                </ul>
                <p className="mb-4">{t('share_personal_info_intro')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                        <strong>{t('with_service_providers')}</strong> {t('with_service_providers_text')}</li>
                    <li className="mb-2">
                        <strong>{t('for_business_transfers')}</strong> {t('for_business_transfers_text')}</li>
                    <li className="mb-2"><strong>{t('with_affiliates')}</strong> {t('with_affiliates_text')}</li>
                    <li className="mb-2">
                        <strong>{t('with_business_partners')}</strong> {t('with_business_partners_text')}</li>
                    <li className="mb-2"><strong>{t('with_other_users')}</strong> {t('with_other_users_text')}</li>
                    <li className="mb-2"><strong>{t('with_your_consent')}</strong> {t('with_your_consent_text')}</li>
                </ul>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('retention_personal_data')}</h3>
                <p className="mb-4">{t('retention_personal_data_text')}</p>
                <p className="mb-4">{t('retention_usage_data')}</p>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('transfer_personal_data')}</h3>
                <p className="mb-4">{t('transfer_personal_data_text')}</p>
                <p className="mb-4">{t('transfer_personal_data_consent')}</p>
                <p className="mb-4">{t('transfer_personal_data_secure')}</p>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('delete_personal_data')}</h3>
                <p className="mb-4">{t('delete_personal_data_intro')}</p>
                <p className="mb-4">{t('delete_personal_data_service')}</p>
                <p className="mb-4">{t('delete_personal_data_update')}</p>
                <p className="mb-4">{t('delete_personal_data_note')}</p>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('disclosure_personal_data')}</h3>
                <h4 className="text-lg font-bold mt-4 mb-2">{t('business_transactions')}</h4>
                <p className="mb-4">{t('business_transactions_text')}</p>

                <h4 className="text-lg font-bold mt-4 mb-2">{t('law_enforcement')}</h4>
                <p className="mb-4">{t('law_enforcement_text')}</p>

                <h4 className="text-lg font-bold mt-4 mb-2">{t('other_legal_requirements')}</h4>
                <p className="mb-4">{t('other_legal_requirements_intro')}</p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">{t('comply_legal_obligation')}</li>
                    <li className="mb-2">{t('protect_rights')}</li>
                    <li className="mb-2">{t('prevent_wrongdoing')}</li>
                    <li className="mb-2">{t('protect_safety')}</li>
                    <li className="mb-2">{t('protect_against_liability')}</li>
                </ul>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('security_personal_data')}</h3>
                <p className="mb-4">{t('security_personal_data_text')}</p>

                <h3 className="text-xl font-bold mt-4 mb-2">{t('data_protection_mechanisms')}</h3>
                <p className="mb-4">{t('data_protection_mechanisms_text')}</p>
                <p className="mb-4">{t('additional_data_protection_measures')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('children_privacy')}</h2>
                <p className="mb-4">{t('children_privacy_intro')}</p>
                <p className="mb-4">{t('children_privacy_parent')}</p>
                <p className="mb-4">{t('children_privacy_consent')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('links_other_websites')}</h2>
                <p className="mb-4">{t('links_other_websites_text')}</p>
                <p className="mb-4">{t('links_other_websites_control')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('changes_privacy_policy')}</h2>
                <p className="mb-4">{t('changes_privacy_policy_intro')}</p>
                <p className="mb-4">{t('changes_privacy_policy_notice')}</p>
                <p className="mb-4">{t('changes_privacy_policy_review_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('play_store_data_safety')}</h2>
                <p className="mb-4">{t('play_store_data_safety_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('data_usage_improvement')}</h2>
                <p className="mb-4">{t('data_usage_improvement_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('user_consent_access')}</h2>
                <p className="mb-4">{t('user_consent_access_text')}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('contact_us')}</h2>
                <p className="mb-4">{t('contact_us_intro')}</p>
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
            <PrivacyPolicy />
        </TranslationProvider>
    );
};
