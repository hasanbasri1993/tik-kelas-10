import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kisi-Kisi Belajar UAS',
  tagline: 'Berpikir Komputasional dan Google Sheets - Kelas 10 SMA',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // Set the production url of your site here
  url: 'https://hasanbasri1993.github.io', // Your GitHub Pages URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus-site/', // Your repo name

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hasanbasri1993', // Your GitHub username
  projectName: 'docusaurus-site', // Your repo name

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-username/kisi-kisi-belajar/tree/main/', // Ganti dengan URL repo Anda
        },
        blog: false, // Disable blog untuk fokus pada docs
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kisi-Kisi Belajar',
      logo: {
        alt: 'Kisi-Kisi Belajar Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Materi',
        },
        {
          href: 'https://github.com/your-username/kisi-kisi-belajar', // Ganti dengan URL repo Anda
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Materi',
          items: [
            {
              label: 'Berpikir Komputasional',
              to: '/docs/intro',
            },
            {
              label: 'Google Sheets',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-username/kisi-kisi-belajar', // Ganti dengan URL repo Anda
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kisi-Kisi Belajar UAS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
