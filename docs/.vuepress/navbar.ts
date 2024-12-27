import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', icon: 'line-md:home', link: '/' },
  { text: '博客', icon: 'line-md:pencil', link: '/blog/' },
  { text: '笔记', icon: 'emojione-monotone:books', link: '/notes/'},
  { text: '放松一下', icon: 'line-md:coffee-filled-loop', link: '/relax/'},
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', icon: 'line-md:home', link: '/en/' },
  { text: 'Blog', icon: 'line-md:pencil', link: '/en/blog/' },
  { text: 'Notes', icon: 'emojione-monotone:books', link: '/en/notes/'},
  { text: 'Relax Corner', icon: 'line-md:coffee-filled-loop', link: '/en/notes/relax/'},
])

