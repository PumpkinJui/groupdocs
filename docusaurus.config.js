// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '量筒测试群 群文档',
    tagline: '记录群内大小事务的文档',
    favicon: 'img/yzbwdlt.webp',

    // Set the production url of your site here
    url: 'https://docs.nekoawa.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'PumpkinJui', // Usually your GitHub org/user name.
    projectName: 'groupdocs', // Usually your repo name.

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace 'en' with 'zh-Hans'.
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/PumpkinJui/groupdocs/tree/main/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true
                },
                blog: {
                    routeBasePath: 'blog/anno',
                    showReadingTime: true,
                    feedOptions: {
                      type: ['rss', 'atom'],
                      xslt: true,
                    },
                    blogSidebarCount: 'ALL',
                    editUrl:
                      'https://github.com/PumpkinJui/groupdocs/tree/main/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'ignore',
                  },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ themeConfig: ({

        // Replace with your project's social card
        image: 'img/yzbwdlt.webp',

        docs: {
            sidebar: {
                hideable: true,
            }
        },

        // 网站颜色主题
        colorMode: {
            /** 默认颜色 */ defaultMode: 'light',
            /** 是否跟随系统主题 */ respectPrefersColorScheme: true
        },

        // 顶部栏
        navbar: {
            title: '量筒测试群 群文档',
            logo: { alt: 'Logo', src: 'img/yzbwdlt.webp', },
            items: [
                { label: '群规', position: 'left', type: 'docSidebar', sidebarId: 'rule' },
                { label: '群资源', position: 'left', type: 'docSidebar', sidebarId: 'resource' },
                { label: '服务器', position: 'left', type: 'docSidebar', sidebarId: 'server' },
                { label: '工具', position: 'left', type: 'docSidebar', sidebarId: 'tool' },
                { label: '公告', position: 'left', to: '/blog/anno' },
                { label: '关于', position: 'left', type: 'docSidebar', sidebarId: 'about' },
                { 
                    html: `
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="vertical-align: middle;">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        `,
                    position: 'right',
                    href: 'https://github.com/PumpkinJui/groupdocs',
                },
                { type: 'search', position: 'right', }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '我们的优质资源',
                    items: [
                        { label: '30 种死法 2', to: '/docs/resources/completed/ways_to_die_2/homepage', },
                        { label: '量筒的起床战争', to: 'docs/resources/developing/bedwars/homepage' },
                        { label: '冒险世界：苏醒', to: 'docs/resources/planning/adventure_world_2/homepage', },
                        { label: '冒险小世界：剑之试炼', to: 'docs/resources/completed/adventure_world_4/homepage', },
                        { label: '冒险世界：筑梦', to: 'docs/resources/developing/adventure_world_5/homepage' },
                        { label: 'Minecraft Picross', to: 'docs/resources/completed/minecraft_picross/homepage' },
                        { label: '触发', to: 'docs/resources/completed/trigger/homepage' },
                    ],
                },
                {
                    title: '常用链接与工具',
                    items: [
                        { label: '中文 Minecraft Wiki', href: 'https://zh.minecraft.wiki/' },
                        { label: '量筒的 Minecraft 基岩版开发文档', href: 'https://mcdevdoc.nekoawa.com/' },
                        { label: 'ChunkBase', href: 'https://www.chunkbase.com/apps/' },
                        { label: '下载国际基岩版 Minecraft', to: 'docs/tools/urls/mcbe' },
                        { label: 'MC 开发者常用链接合集', to: '/docs/tools/urls/develop' }
                    ]
                },
                {
                    title: '授权许可',
                    items: [
                        { label: 'CC-BY-4.0', href: 'https://creativecommons.org/licenses/by/4.0/deed.zh-hans' },
                        { label: '许可证概览', to: '/docs/about/license_overview' }
                    ],
                },
                {
                    title: '关于我们',
                    items: [
                        { label: '入群必读', to: 'docs/rules/new' },
                        { label: '群规', to: 'docs/rules/rules_main_text' },
                        { label: '本群名菜（划掉）', to: '/docs/about/menu' },
                        { label: '群历史', to: '/docs/about/group_history' },
                        { label: '群文档历史', to: '/docs/about/groupdocs_history' },
                        { label: '关于群文档', to: '/docs/about/about_groupdocs' }
                    ]

                },
            ],
            copyright: `版权归 © 2019 - ${new Date().getFullYear()} 极筑 · 量筒地图测试群所有。本站使用 Docusaurus 构建。`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['json','bash','shell-session'],
        },
        algolia: {
            appId: '3QTPE6WI9R',
            apiKey: 'c5e49d41ac48f55da991d4a10221e1b2',
            indexName: 'grouppages',
        },
    }),
};

export default config;
