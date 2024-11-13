import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // site-level options
  title: 'Test Wiki Version',
  description: 'Just playing around.',
  base: "/test-wiki-version-control/",
  head: [['link', { rel: 'icon', href: '/test-wiki-version-control/favicon.ico' }]]
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
