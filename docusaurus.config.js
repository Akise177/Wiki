// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Valor Wiki',
  tagline: 'The #1 source for everything related to Valor.',
  url: 'https://wiki.valorserver.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://i.imgur.com/HKW5Kyw.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Valor', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        //we dont use the blog feature
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Valor-Inc/Wiki/blob/main',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Valor',
        logo: {
          alt: 'Valor Logo',
          src: 'https://i.imgur.com/HKW5Kyw.png',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/introduction',
            position: 'left',
            label: 'Valor Guides',
        },
        items: [
          {
            type: 'doc',
            docId: 'items/showcase',
            position: 'left',
            label: 'Item Showcase',
          },
          {to: 'https://blog.valorserver.com', label: 'Patchnotes', position: 'left'},
          {to: 'https://valorserver.com/ranks', label: 'Donate', position: 'left'},
          {to: 'https://discord.gg/valormc', label: 'Discord', position: 'left'},
          {
            href: 'https://github.com/Valor-inc/Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Valor Guides',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.valorserver.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Main Site',
                href: 'https://valorserver.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.valorserver.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.valorserver.com',
              },
            ],
          },
  
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Valor.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
