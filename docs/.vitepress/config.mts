import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // site-level options
  title: 'Test Wiki Version',
  description: 'Just playing around.',
  base: "/test-wiki-version-control/",
  head: [['link', { rel: 'icon', href: '/test-wiki-version-control/favicon.ico' }]],
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/systemhorizons/test-wiki-version-control' }
    ],
    sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'Home', link: '/Home.md' },
          { text: 'Introduction', link: '/Introduction.md' },

        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'About', link: '/Content1.md' },
          { text: 'Principles', link: '/Content2.md' },

        ]
      }

    ]
  }
})
