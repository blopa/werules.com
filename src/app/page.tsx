'use client';
import TranslationProvider from '@/components/TranslationProvider';

function Home() {
    return (
        <div>
            <a href="https://werules.com/musclog/privacy-policy">Privacy Policy for Musclog app</a>
        </div>
    );
}

export default function Page() {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <TranslationProvider>
            <Home />
        </TranslationProvider>
    );
}
