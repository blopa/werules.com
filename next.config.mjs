/** @type {import('next').NextConfig} */

const PATH = process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '';

const nextConfig = {
    basePath: PATH,
    output: 'export',
    reactStrictMode: true,
    // async rewrites() {
    //     return {
    //         beforeFiles: [
    //             {
    //                 destination:
    //                     '/musclog-website/locales/en-US/translation.json',
    //                 source: '/locales/en-US/translation.json',
    //             },
    //             {
    //                 destination:
    //                     '/musclog-website/locales/pt-BR/translation.json',
    //                 source: '/locales/pt-BR/translation.json',
    //             },
    //             {
    //                 destination:
    //                     '/musclog-website/locales/nl-NL/translation.json',
    //                 source: '/locales/nl-NL/translation.json',
    //             },
    //             {
    //                 destination:
    //                     '/musclog-website/locales/es-ES/translation.json',
    //                 source: '/locales/es-ES/translation.json',
    //             },
    //         ]
    //     }
    // },
    // i18n: {
    //     locales: ['en-US', 'pt-BR', 'nl-NL', 'es-ES'],
    //     defaultLocale: 'en-US',
    // },
};

export default nextConfig;
