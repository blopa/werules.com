'use client';
import TranslationProvider from '@/components/TranslationProvider';
import Main from '@/components/main';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

function DeleteAccount() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent('Request to Delete Account');
        const body = encodeURIComponent(
            `Hi Musclog Team,\n\nI would like to request the deletion of my account.\n\nName: ${name}\nEmail: ${email}\nReason: ${reason}\n\nThank you.`
        );

        // Construct the mailto link
        const mailtoLink = `mailto:musclog@werules.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Main showMenuItems={false}>
            <div className="container mx-auto px-4 py-8 md:py-16">
                <h1 className="text-4xl font-bold mb-4">{t('delete_account_title')}</h1>
                <p className="mb-4">{t('delete_account_message')}</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium" htmlFor="name">
                            {t('delete_account_name_label')}
                        </label>
                        <input
                            className="w-full p-2 border rounded"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t('delete_account_name_placeholder')}
                            required
                            type="text"
                            value={name}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium" htmlFor="email">
                            {t('delete_account_email_label')}
                        </label>
                        <input
                            className="w-full p-2 border rounded"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('delete_account_email_placeholder')}
                            required
                            type="email"
                            value={email}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium" htmlFor="reason">
                            {t('delete_account_reason_label')}
                        </label>
                        <textarea
                            className="w-full p-2 border rounded"
                            id="reason"
                            onChange={(e) => setReason(e.target.value)}
                            placeholder={t('delete_account_reason_placeholder')}
                            value={reason}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-transform transform hover:-translate-y-0.5"
                    >
                        {t('delete_account_submit')}
                    </button>
                </form>
            </div>
        </Main>
    );
}

export default function Page() {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <TranslationProvider>
            <DeleteAccount/>
        </TranslationProvider>
    );
}
