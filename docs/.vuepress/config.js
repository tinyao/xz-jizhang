import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',
  base: '/jizhang',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    sidebar: [
      { text: '获取模板', link: '/'},
      '/tutorial/v3'
    ]

  }),

  bundler: viteBundler(),
})
