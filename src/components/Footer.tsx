'use client'

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import * as React from 'react'

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-muted py-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center gap-4">
                    <Link
                        className="text-muted-foreground hover:text-primary transition-colors"
                        href="/musclog/terms"
                    >
                        {t('terms_of_service')}
                    </Link>
                    <Link
                        className="text-muted-foreground hover:text-primary transition-colors"
                        href="/musclog/privacy-policy"
                    >
                        {t('privacy_policy')}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
