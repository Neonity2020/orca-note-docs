import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: {
              en: 'Neonity\'s Orca-note Manual',
              'zh-CN': 'Neonity的{虎鲸笔记}使用手册',
          },
          // 为此网站设置英语为默认语言。
          defaultLocale: 'zh-cn',
          locales: {
            // 英文文档在 `src/content/docs/en/` 中。
            en: {
              label: 'English',
            },
              // 简体中文文档在 `src/content/docs/zh-cn/` 中。
              'zh-cn': {
                  label: '简体中文',
                  lang: 'zh-CN',
              },
          },	
          social: {
              github: 'https://github.com/Neonity2020/orca-note-docs',
          },
          sidebar: [
              {
                  label: '非官方指南',
                  translations: {
                      'en': 'Non-official Guides',
                  },
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: '虎鲸笔记简介', slug: 'guides/introduction',
                          translations: {
                              'en': 'Introduction to Orca-Note',
                          },
                       },
                       { label: '下载链接', slug: 'guides/download-links',
                          translations: {
                              'en': 'Download Links',
                          },
                       },
                       { label: '快捷键', slug: 'guides/shortcuts',
                          translations: {
                              'en': 'Shortcuts',
                          },
                        },
                        { label: 'simple-task插件', slug: 'guides/simple-task-plugin',
                            translations: {
                                'en': 'Simple-task-plugin',
                            },
                        },                        
                        { label: 'simple-task彩屑插件', slug: 'guides/simple-task-canvas-confetti-plugin',
                            translations: {
                                'en': 'Simple-task-canvas-confetti-plugin',
                            },
                        },
                       
                  ],
              },
              {
                  label: '参考',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  output: 'server',
  adapter: netlify(),
});