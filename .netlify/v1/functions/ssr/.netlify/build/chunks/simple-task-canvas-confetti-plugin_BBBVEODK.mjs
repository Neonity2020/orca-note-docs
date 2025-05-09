import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BYb8n1xT.mjs';

const html = "<p>在simple-task插件基础上，简单添加了全屏纸屑特效</p>\n<iframe style=\"width:100%; max-width:1280px; height:720px;\" src=\"//player.bilibili.com/player.html?isOutside=true&#x26;aid=113735632946974&#x26;bvid=BV1iK68YQEZx&#x26;cid=27593277797&#x26;p=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\">\n</iframe>";

				const frontmatter = {"title":"虎鲸笔记 - simple-task-canvas-confetti插件","description":"simple-task-confetti插件使用小指南"};
				const file = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/simple-task-canvas-confetti-plugin.md";
				const url = undefined;
				function rawContent() {
					return "在simple-task插件基础上，简单添加了全屏纸屑特效\n\n\n<iframe\n    style=\"width:100%; max-width:1280px; height:720px;\"\n    src=\"//player.bilibili.com/player.html?isOutside=true&aid=113735632946974&bvid=BV1iK68YQEZx&cid=27593277797&p=1\"\n    scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\">\n</iframe>\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
