// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const oceanicNext = require('prism-react-renderer/themes/oceanicNext')
const duotoneLight = require('prism-react-renderer/themes/duotoneLight')
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: '📚 Bienvenue dans le Wiki, n\'hésitez pas à explorer ',
  url: 'https://wiki.404Lab.top',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'WikiWoop', // Usually your GitHub org/user name.
  projectName: "WikiWoop", // Usually your repo name.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  scripts: process.env.track_url && process.env.track_id
      ? [
        {
          src: process.env.track_url,
          'data-website-id': process.env.track_id,
          async: true,
        },
      ]
      : [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-K06FBEHD1R',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/HiChen404/MyWikiSite/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/home',

          // ... configuration object here
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
      algolia: {
        // The application ID provided by Algolia
        appId: 'L4NYMVDYG7',

        // Public API key: it is safe to commit it
        apiKey: '2dc197c65a9a3bc16515f64933bb50b5',

        indexName: 'wiki-404lab-top',

        // Optional: see doc section below
        // contextualSearch: true,
      },

      navbar: {
        title: 'WikiWoop',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '📗Wiki',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Thomas Project, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: oceanicNext,
        // theme: duotoneLight,
        // darkTheme: oceanicNext,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🚀 Si tu trouves ça sympa, laisse une ⭐️ étoile ~ <a target="_blank" rel="noopener noreferrer" href="https://github.com/HiChen404/MyWikiSite/tree/master/">Clique ici</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      metadata: [
        {
          name: '🧠 Il s\'agit d\'une base de connaissances partagée (Wiki Database), couvrant des sujets tels que le partage de logiciels, des notes d\'apprentissage (JavaScript, Vue, Python, Go, Flutter, React), des astuces de bidouillage mobile, ainsi que des techniques pour mieux naviguer sur Internet.v',
          content: 'Wiki, Base de données, JavaScript, Vue.js, Python, Go, Flutter, React, Astuces de déblocage, Hacks, Bidouillage mobile, Base de connaissances, GitHub, Hacking, iOS, iPhone',
        },
      ],
    }),
}

module.exports = config
