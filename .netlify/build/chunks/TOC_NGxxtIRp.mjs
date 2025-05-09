import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BYb8n1xT.mjs';

const html = "<ul>\n<li><a href=\"../../guides/introduction\">虎鲸笔记简介 - Introduction</a></li>\n<li><a href=\"https://github.com/sethyuan/orca-note\">GitHub 仓库 - GitHub Repository</a></li>\n<li><a href=\"../../guides/shortcuts\">虎鲸笔记快捷键 - Shortcut Keys</a></li>\n</ul>\n<h2 id=\"更多参考\">更多参考</h2>\n<ul>\n<li>更多资料参考虎鲸笔记官方文档 <a href=\"https://orca-note.com/reference/\">about reference</a>。</li>\n</ul>";

				const frontmatter = {"title":"参考资料TOC","description":"orca-note-docs-toc"};
				const file = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/reference/TOC.md";
				const url = undefined;
				function rawContent() {
					return "\n- [虎鲸笔记简介 - Introduction](../../guides/introduction)\n- [GitHub 仓库 - GitHub Repository](https://github.com/sethyuan/orca-note)\n- [虎鲸笔记快捷键 - Shortcut Keys](../../guides/shortcuts)\n\n## 更多参考\n\n- 更多资料参考虎鲸笔记官方文档 [about reference](https://orca-note.com/reference/)。\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"更多参考","text":"更多参考"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
