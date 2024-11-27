import { DumbbellIcon } from '@/components/ui/icons';
import Link from 'next/link';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import '../i18n';

type MainProps = {
    children: React.ReactNode;
    showMenuItems?: boolean;
};

function Main({ children, showMenuItems = true }: MainProps) {
    const { i18n, t } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
    };

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur w-full">
                <div className="container mx-auto flex items-center justify-between h-14 px-4 md:px-6">
                    <Link className="flex items-center gap-2" href="#" prefetch={false}>
                        <DumbbellIcon className="w-6 h-6"/>
                        <span className="font-bold text-lg">{t('app_name')}</span>
                    </Link>
                    {showMenuItems && (
                        <>
                            <nav className="hidden md:flex items-center gap-4">
                                <Link className="text-sm font-medium hover:underline" href="#" prefetch={false}>
                                    {t('nav_home')}
                                </Link>
                                <Link className="text-sm font-medium hover:underline" href="#features" prefetch={false}>
                                    {t('nav_features')}
                                </Link>
                                <Link className="text-sm font-medium hover:underline" href="#workouts" prefetch={false}>
                                    {t('nav_workouts')}
                                </Link>
                                <Link className="text-sm font-medium hover:underline" href="#testimonials" prefetch={false}>
                                    {t('nav_testimonials')}
                                </Link>
                                <Link className="text-sm font-medium hover:underline" href="#download" prefetch={false}>
                                    {t('nav_download')}
                                </Link>
                            </nav>
                        </>
                    )}
                    <select
                        aria-label={t('select_language')}
                        className="ml-4 p-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        onChange={handleLanguageChange}
                        value={language}
                    >
                        <option value="en-US">English</option>
                        <option value="nl-NL">Nederlands</option>
                        <option value="pt-BR">Português</option>
                        <option value="es-ES">Español</option>
                    </select>
                </div>
            </header>
            <main className="flex-1 w-full">
                {children}
            </main>
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default appWithTranslation(Main);
