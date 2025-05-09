import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BYb8n1xT.mjs';

const html = "<h1 id=\"虎鲸笔记\">虎鲸笔记</h1>\n<p>一个易于使用的笔记应用，适合大纲与长文写作。</p>\n<p><img src=\"https://github.com/user-attachments/assets/761ff0f6-a4c2-4420-9c3f-4c4028c50937\" alt=\"zh\"></p>\n<p><a href=\"https://github.com/user-attachments/assets/47eaeae5-4bc3-4702-a817-9fb2cde33b3f\">https://github.com/user-attachments/assets/47eaeae5-4bc3-4702-a817-9fb2cde33b3f</a></p>\n<h2 id=\"注意\">注意</h2>\n<p>目前应用处于公测阶段，因此可能会出现一些bug。请定期备份您的数据（虎鲸笔记也会在您保持运行的情况下每小时自动备份您的数据）。</p>\n<h2 id=\"在macos上运行\">在macOS上运行</h2>\n<p>由于该应用仍在早期开发阶段，它尚未被签名。要运行它，您必须在安装应用后打开系统终端并执行以下命令：</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">xattr -r -d com.apple.quarantine /Applications/Orca\\ Note.app</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"xattr -r -d com.apple.quarantine /Applications/Orca\\ Note.app\"><div></div></button></div></figure></div>\n<h2 id=\"社区\">社区</h2>\n<p>如果您对软件的使用有任何疑问，或者您想分享您使用虎鲸笔记的方法，请加入我们的微信群。请扫描下面我的二维码，我拉您入群。</p>\n<p><img src=\"https://github.com/user-attachments/assets/340d879d-b812-40f9-adfe-925b4dc875ab\" alt=\"wx\"></p>\n<h2 id=\"插件开发\">插件开发</h2>\n<p>如果您是开发人员并且对开发虎鲸笔记插件有兴趣，那么您可以参考我写的 <a href=\"https://github.com/sethyuan/orca-simple-task\">simple-task</a> 插件，您可以将其作为插件开发的模板来使用。该插件是个功能完整的插件，非开发人员用户也可以使用。虎鲸笔记官方 README 文件</p>\n<p><a href=\"https://github.com/sethyuan/orca-note/blob/main/README.zh.md\">https://github.com/sethyuan/orca-note/blob/main/README.zh.md</a></p>";

				const frontmatter = {"title":"虎鲸笔记","description":"虎鲸笔记官方简介"};
				const file = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/introduction.md";
				const url = undefined;
				function rawContent() {
					return "\n# 虎鲸笔记\n\n一个易于使用的笔记应用，适合大纲与长文写作。\n\n![zh](https://github.com/user-attachments/assets/761ff0f6-a4c2-4420-9c3f-4c4028c50937)\n\nhttps://github.com/user-attachments/assets/47eaeae5-4bc3-4702-a817-9fb2cde33b3f\n\n## 注意\n\n目前应用处于公测阶段，因此可能会出现一些bug。请定期备份您的数据（虎鲸笔记也会在您保持运行的情况下每小时自动备份您的数据）。\n\n## 在macOS上运行\n\n由于该应用仍在早期开发阶段，它尚未被签名。要运行它，您必须在安装应用后打开系统终端并执行以下命令：\n\n```\nxattr -r -d com.apple.quarantine /Applications/Orca\\ Note.app\n```\n\n## 社区\n\n如果您对软件的使用有任何疑问，或者您想分享您使用虎鲸笔记的方法，请加入我们的微信群。请扫描下面我的二维码，我拉您入群。\n\n![wx](https://github.com/user-attachments/assets/340d879d-b812-40f9-adfe-925b4dc875ab)\n\n## 插件开发\n\n如果您是开发人员并且对开发虎鲸笔记插件有兴趣，那么您可以参考我写的 [simple-task](https://github.com/sethyuan/orca-simple-task) 插件，您可以将其作为插件开发的模板来使用。该插件是个功能完整的插件，非开发人员用户也可以使用。虎鲸笔记官方 README 文件\n\nhttps://github.com/sethyuan/orca-note/blob/main/README.zh.md\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"虎鲸笔记","text":"虎鲸笔记"},{"depth":2,"slug":"注意","text":"注意"},{"depth":2,"slug":"在macos上运行","text":"在macOS上运行"},{"depth":2,"slug":"社区","text":"社区"},{"depth":2,"slug":"插件开发","text":"插件开发"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
