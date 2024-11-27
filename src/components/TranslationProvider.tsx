'use client';

import { appWithTranslation } from 'next-i18next';

type Props = {
    children: React.ReactNode;
};

function TranslationProvider({ children }: Props) {
    return <>{children}</>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default appWithTranslation(TranslationProvider);
