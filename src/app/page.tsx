'use client';

import Footer from '@/components/Footer';
import ProjectCarousel from '@/components/ProjectCarousel';
import TranslationProvider from '@/components/TranslationProvider';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import '../i18n';

function Home() {
    const { i18n, t } = useTranslation();
    const [language] = useState(i18n.language);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
                    {t('welcome_werules')}
                </h1>
                <p className="text-center mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('we_are_devs')}
                </p>
                <p className="text-center mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('explore_our_apps')}
                </p>
                <ProjectCarousel />
            </div>
            <Footer />
        </main>
    )
}

export default function Page() {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <TranslationProvider>
            <Home/>
        </TranslationProvider>
    );
}
