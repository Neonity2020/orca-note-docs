import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BYb8n1xT.mjs';

const html = "<p>v0.22.2发布了。主要变化：</p>\n<ul>\n<li>错误修复（主要为编辑、Markdown粘贴以及导出方面的）</li>\n<li>块引用及别名块现在也显示它们各自配置的图标了（如有）</li>\n</ul>\n<p>虎鲸笔记讨论群，您有任何反馈我们都可以在这里讨论。公测版本下载地址：\n<a href=\"https://github.com/sethyuan/orca-note\">https://github.com/sethyuan/orca-note</a></p>\n<p><a href=\"https://github.com/sethyuan/orca-note/releases\">https://github.com/sethyuan/orca-note/releases</a></p>\n<p><a href=\"https://www.123684.com/s/Dt97jv-UzUwd\">https://www.123684.com/s/Dt97jv-UzUwd</a></p>\n<p>网盘登录即可下载，不用支付费用。</p>\n<p>macOS首次运行需在命令行中运行以下命令，因为目前是没有签名的，所以这个步骤是必须的：\n<code dir=\"auto\">xattr -r -d com.apple.quarantine /Applications/Orca\\ Note.app</code></p>\n<h2 id=\"v018发布了\">v0.18发布了</h2>\n<h3 id=\"主要变化\">主要变化：</h3>\n<ul>\n<li>Bug fixes\n<ul>\n<li>查询结果现在默认按照最后修改时间倒排了</li>\n<li>新增别名块列表，所有有别名的块（除了显示在标签列表中的）都会显示在此，包括用 @ 等方法创建的块</li>\n<li>块引用类型的标签属性支持点击跳转了</li>\n</ul>\n</li>\n</ul>\n<p>虎鲸笔记讨论群，您有任何反馈我们都可以在这里讨论。</p>\n<h3 id=\"公测版本下载地址\">公测版本下载地址：</h3>\n<ul>\n<li>\n<p><a href=\"https://github.com/sethyuan/orca-note\">https://github.com/sethyuan/orca-note</a></p>\n</li>\n<li>\n<p><a href=\"https://github.com/sethyuan/orca-note/releases\">https://github.com/sethyuan/orca-note/releases</a></p>\n</li>\n<li>\n<p><a href=\"https://www.123684.com/s/Dt97jv-UzUwd\">https://www.123684.com/s/Dt97jv-UzUwd</a></p>\n</li>\n</ul>\n<h3 id=\"macos\">MacOS</h3>\n<p>macOS首次运行需在命令行中运行以下命令，因为目前是没有签名的，所以这个步骤是必须的：</p>\n<p><code dir=\"auto\">xattr -r -d com.apple.quarantine /Applications/Orca\\ Note.app</code></p>";

				const frontmatter = {"title":"虎鲸笔记v0.22.2更新","description":"虎鲸笔记下载链接"};
				const file = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/download-links.md";
				const url = undefined;
				function rawContent() {
					return "v0.22.2发布了。主要变化：\n\n- 错误修复（主要为编辑、Markdown粘贴以及导出方面的）\n- 块引用及别名块现在也显示它们各自配置的图标了（如有）\n\n虎鲸笔记讨论群，您有任何反馈我们都可以在这里讨论。公测版本下载地址：\nhttps://github.com/sethyuan/orca-note\n\nhttps://github.com/sethyuan/orca-note/releases\n\nhttps://www.123684.com/s/Dt97jv-UzUwd\n\n网盘登录即可下载，不用支付费用。\n\nmacOS首次运行需在命令行中运行以下命令，因为目前是没有签名的，所以这个步骤是必须的：\n`xattr -r -d com.apple.quarantine /Applications/Orca\\ Note.app`\n## v0.18发布了\n\n### 主要变化：\n\n- Bug fixes\n    - 查询结果现在默认按照最后修改时间倒排了\n    - 新增别名块列表，所有有别名的块（除了显示在标签列表中的）都会显示在此，包括用 @ 等方法创建的块\n    - 块引用类型的标签属性支持点击跳转了\n\n虎鲸笔记讨论群，您有任何反馈我们都可以在这里讨论。\n\n### 公测版本下载地址：\n\n- https://github.com/sethyuan/orca-note\n\n- https://github.com/sethyuan/orca-note/releases\n\n- https://www.123684.com/s/Dt97jv-UzUwd\n\n\n### MacOS\n\nmacOS首次运行需在命令行中运行以下命令，因为目前是没有签名的，所以这个步骤是必须的：\n\n`xattr -r -d com.apple.quarantine /Applications/Orca\\ Note.app`\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"v018发布了","text":"v0.18发布了"},{"depth":3,"slug":"主要变化","text":"主要变化："},{"depth":3,"slug":"公测版本下载地址","text":"公测版本下载地址："},{"depth":3,"slug":"macos","text":"MacOS"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
