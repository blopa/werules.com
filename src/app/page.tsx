'use client';
import TranslationProvider from '@/components/TranslationProvider';

const PATH = process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '';

function Home() {
    return (
        <div>
            <img
                alt="Musclog App"
                className="rounded-xl object-cover"
                height={500}
                src={`${PATH}/musclog-logo.png`}
                width={700}
            />
            <a href="https://werules.com/musclog/privacy-policy">Privacy Policy for Musclog app</a>
        </div>
    );
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
