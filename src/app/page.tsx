'use client';
import TranslationProvider from '@/components/TranslationProvider';

function Home() {
    return (
        <div>
            Hello world!
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
