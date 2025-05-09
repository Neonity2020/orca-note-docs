const id = "en/index.mdx";
						const collection = "docs";
						const slug = "en";
						const body = "\nimport { Card, CardGrid } from '@astrojs/starlight/components';\n\n## Features\n\n<CardGrid stagger>\n\t<Card title=\"Bi-directional link\" icon=\"pencil\">\n\t\tUse bi-directional link to navigate between notes and pages.\n\t</Card>\n\t<Card title=\"Local first\" icon=\"add-document\">\n\t\tOrca-Note is a local first note app, which means that all your notes are stored locally on your device.\n\t</Card>\n\t<Card title=\"Configure your Orca-Note\" icon=\"setting\">\n\t\tSet your own Orca-Note style.\n\t</Card>\n\t<Card title=\"Read the docs\" icon=\"open-book\">\n\t\tLearn more in the [Orca-Note Official Docs](https://orca-note.org/).\n\t</Card>\n</CardGrid>\n";
						const data = {title:"Welcome to Neonity's Orca-Note Manual",description:"non-official manual for Orca-Note",editUrl:true,head:[],template:"splash",hero:{tagline:"non-official manual for Orca-Note",image:{alt:"",file:
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
					},actions:[{text:"Get Started",link:"/en/guides/example/",variant:"primary",icon:{type:"icon",name:"right-arrow"}},{text:"Read the official docs",link:"https://www.orca-studio.com/",variant:"minimal",icon:{type:"icon",name:"external"}}]},sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/en/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
