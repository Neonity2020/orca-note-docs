import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_BYb8n1xT.mjs';
import { a as getImage } from './_astro_assets_O7SCoehR.mjs';

const Astro__Z12uPms = new Proxy({"src":"/_astro/image.BcjiwasZ.png","width":1150,"height":790,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/image.png";
							}
							
							return target[name];
						}
					});

const Astro__qF8Jb = new Proxy({"src":"/_astro/simple-task.Ce2tF0CM.jpg","width":2200,"height":1480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/simple-task.jpg";
							}
							
							return target[name];
						}
					});

const Astro__qF7Tl = new Proxy({"src":"/_astro/simple-task.B9pRbfEL.gif","width":600,"height":403,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/simple-task.gif";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z12uPms, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "simple-task\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "simple-task.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__qF8Jb, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "simple-task\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "simple-task.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__qF7Tl, ...props});
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
			const html = await updateImageReferences("<p>一个创建任务的虎鲸笔记插件</p>\n<p>同时也是创建虎鲸笔记插件的模板</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image.png&#x22;,&#x22;alt&#x22;:&#x22;alt text&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"使用方法\">使用方法</h2>\n<p>将项目的文件夹放入虎鲸笔记的插件文件夹中（虎鲸笔记的文件夹在你的用户文件夹中，如/Users/username/Documents/orca, C:\\Users\\username\\Documents\\orca）。</p>\n<p>在项目的根目录中运行<code dir=\"auto\">pnpm build</code>，以构建插件。</p>\n<p>开启/重新启动虎鲸笔记，你可以找到应用的设置项下的插件选项，激活插件即可愉快地使用了。</p>\n<p>在你想创建任务的块上按下 <code dir=\"auto\">Alt+Enter</code>，插件会为你自动添加一个任务标签，当你再次按下<code dir=\"auto\">Alt+Enter</code>，它会循环切换任务状态。</p>\n<h2 id=\"插件使用示例\">插件使用示例</h2>\n<ol>\n<li>\n<p>下载GitHub中或官方123网盘中的<code dir=\"auto\">simple-task-1.2.zip</code>插件压缩包</p>\n</li>\n<li>\n<p>将解压后的<code dir=\"auto\">simple-task</code>文件夹放置于虎鲸笔记的plugin文件夹</p>\n</li>\n<li>\n<p>打开笔记软件的设置（快捷键<code dir=\"auto\">⌘+,</code>），激活simple-task插件</p>\n</li>\n</ol>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;simple-task.jpg&#x22;,&#x22;alt&#x22;:&#x22;alt text&#x22;,&#x22;index&#x22;:0}\"></p>\n<ol start=\"4\">\n<li>在想要转换为任务的笔记块上点击<code dir=\"auto\">Alt+Enter</code>，即可完成任务状态的切换（ TODO / DOING / DONE 三种任务状态循环）。</li>\n</ol>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;simple-task.gif&#x22;,&#x22;alt&#x22;:&#x22;alt text&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"title":"虎鲸笔记 - simple-task插件","description":"simple-task插件使用小指南"};
				const file = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/simple-task-plugin.md";
				const url = undefined;
				function rawContent() {
					return "一个创建任务的虎鲸笔记插件\n\n同时也是创建虎鲸笔记插件的模板\n\n![alt text](image.png)\n\n## 使用方法\n\n将项目的文件夹放入虎鲸笔记的插件文件夹中（虎鲸笔记的文件夹在你的用户文件夹中，如/Users/username/Documents/orca, C:\\Users\\username\\Documents\\orca）。\n\n在项目的根目录中运行`pnpm build`，以构建插件。\n\n开启/重新启动虎鲸笔记，你可以找到应用的设置项下的插件选项，激活插件即可愉快地使用了。\n\n在你想创建任务的块上按下 `Alt+Enter`，插件会为你自动添加一个任务标签，当你再次按下`Alt+Enter`，它会循环切换任务状态。\n\n## 插件使用示例\n\n1. 下载GitHub中或官方123网盘中的`simple-task-1.2.zip`插件压缩包\n\n2. 将解压后的`simple-task`文件夹放置于虎鲸笔记的plugin文件夹\n\n3. 打开笔记软件的设置（快捷键`⌘+,`），激活simple-task插件\n\n![alt text](simple-task.jpg)\n\n4. 在想要转换为任务的笔记块上点击`Alt+Enter`，即可完成任务状态的切换（ TODO / DOING / DONE 三种任务状态循环）。\n\n![alt text](simple-task.gif)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"使用方法","text":"使用方法"},{"depth":2,"slug":"插件使用示例","text":"插件使用示例"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
