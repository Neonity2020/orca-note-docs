const id = "zh-cn/index.mdx";
						const collection = "docs";
						const slug = "zh-cn";
						const body = "\nimport { Card, CardGrid } from '@astrojs/starlight/components';\n\n## 功能特性\n\n<CardGrid stagger>\n\t<Card title=\"双向链接\" icon=\"pencil\">\n\t\t使用双向链接在笔记和页面之间导航。\n\t</Card>\n\t<Card title=\"本地优先\" icon=\"add-document\">\n\t\t虎鲸笔记是一个本地优先的笔记应用，所有笔记都存储在您的设备上。\n\t</Card>\n\t<Card title=\"配置您的虎鲸笔记\" icon=\"setting\">\n\t\t配置您自己独一无二的虎鲸笔记。\n\t</Card>\n\t<Card title=\"了解更多\" icon=\"open-book\">\n\t\t了解更多在 [虎鲸笔记官方网站](https://orca-note.org/).\n\t</Card>\n</CardGrid>\n";
						const data = {title:"欢迎来到 Neonity 的 {虎鲸笔记} 使用手册",description:"unofficial manual for Orca-Note",editUrl:true,head:[],template:"splash",hero:{tagline:"非官方，虎鲸笔记爱好者手册",image:{alt:"",file:
						new Proxy({"src":"/_astro/orca-note-logo.DjfZeskK.png","width":512,"height":512,"format":"png","fsPath":"/Users/andi/Documents/GitHub/orca-note-docs/src/assets/orca-note-logo.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andi/Documents/GitHub/orca-note-docs/src/assets/orca-note-logo.png";
							}
							
							return target[name];
						}
					})
					},actions:[{text:"开始使用",link:"/zh-cn/guides/introduction/",variant:"primary",icon:{type:"icon",name:"right-arrow"}},{text:"阅读官方手册",link:"https://docs.orca-note.org/",variant:"minimal",icon:{type:"icon",name:"external"}}]},sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
