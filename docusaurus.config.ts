import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Wuilb docs',
    favicon: 'logo/favicon.ico',

    url: 'https://docs.wuilb.com',
    baseUrl: '/',

    organizationName: 'Wuilb',
    projectName: 'docs',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts'
                },
                blog: {
                    showReadingTime: true
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            } satisfies Preset.Options
        ]
    ],

    themeConfig: {
        image: 'logo/logo_big.png',
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false
        },
        navbar: {
            title: 'Wuilb docs',
            logo: {
                alt: 'My Site Logo',
                src: 'logo/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'defaultSidebar',
                    position: 'left',
                    label: 'Tutorial'
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                }
            ]
        }
    } satisfies Preset.ThemeConfig
};

export default config;
