import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_BYb8n1xT.mjs';
import { a as getImage } from './_astro_assets_O7SCoehR.mjs';

const Astro__r7BsY = new Proxy({"src":"/_astro/shortcuts.2Cpu5jeR.jpg","width":1224,"height":740,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/assets/shortcuts.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./assets/shortcuts\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../assets/shortcuts.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__r7BsY, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../assets/shortcuts.jpg&#x22;,&#x22;alt&#x22;:&#x22;快捷键&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>按<code dir=\"auto\">Ctrl/CMD + P</code>打开命令面板，输入以下命令：</p>\n<h2 id=\"快捷键\">快捷键</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td><code dir=\"auto\">Ctrl/cmd + P</code></td><td>命令面板</td></tr><tr><td><code dir=\"auto\">Ctrl/cmd + W</code></td><td>关闭当前面板</td></tr><tr><td><code dir=\"auto\">Ctrl/cmd + Enter</code></td><td>在当前块之后追加新块</td></tr><tr><td><code dir=\"auto\">Ctrl/cmd + Shift + X</code></td><td>清除当前选中文本的格式</td></tr><tr><td><code dir=\"auto\">Ctrl/cmd + L</code></td><td>将选中的文本转化为链接</td></tr><tr><td><code dir=\"auto\">Ctrl/cmd + O</code></td><td>将选中的文本转换为指向现有或新标签的引用</td></tr></tbody></table>");
	

				const frontmatter = {"title":"虎鲸笔记快捷键","description":"orca-note shortcuts"};
				const file = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/shortcuts.md";
				const url = undefined;
				function rawContent() {
					return "\n![快捷键](../assets/shortcuts.jpg)\n\n按`Ctrl/CMD + P`打开命令面板，输入以下命令：\n\n\n## 快捷键\n\n| 快捷键 | 功能 |\n| --- | --- |\n| `Ctrl/cmd + P` | 命令面板 |\n| `Ctrl/cmd + W` | 关闭当前面板 |\n| `Ctrl/cmd + Enter` | 在当前块之后追加新块 |\n| `Ctrl/cmd + Shift + X` | 清除当前选中文本的格式 |\n| `Ctrl/cmd + L` | 将选中的文本转化为链接 |\n| `Ctrl/cmd + O` | 将选中的文本转换为指向现有或新标签的引用 |\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"快捷键","text":"快捷键"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
