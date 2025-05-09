const id = "zh-cn/guides/simple-task-plugin.md";
						const collection = "docs";
						const slug = "zh-cn/guides/simple-task-plugin";
						const body = "一个创建任务的虎鲸笔记插件\n\n同时也是创建虎鲸笔记插件的模板\n\n![alt text](image.png)\n\n## 使用方法\n\n将项目的文件夹放入虎鲸笔记的插件文件夹中（虎鲸笔记的文件夹在你的用户文件夹中，如/Users/username/Documents/orca, C:\\Users\\username\\Documents\\orca）。\n\n在项目的根目录中运行`pnpm build`，以构建插件。\n\n开启/重新启动虎鲸笔记，你可以找到应用的设置项下的插件选项，激活插件即可愉快地使用了。\n\n在你想创建任务的块上按下 `Alt+Enter`，插件会为你自动添加一个任务标签，当你再次按下`Alt+Enter`，它会循环切换任务状态。\n\n## 插件使用示例\n\n1. 下载GitHub中或官方123网盘中的`simple-task-1.2.zip`插件压缩包\n\n2. 将解压后的`simple-task`文件夹放置于虎鲸笔记的plugin文件夹\n\n3. 打开笔记软件的设置（快捷键`⌘+,`），激活simple-task插件\n\n![alt text](simple-task.jpg)\n\n4. 在想要转换为任务的笔记块上点击`Alt+Enter`，即可完成任务状态的切换（ TODO / DOING / DONE 三种任务状态循环）。\n\n![alt text](simple-task.gif)";
						const data = {title:"虎鲸笔记 - simple-task插件",description:"simple-task插件使用小指南",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/zh-cn/guides/simple-task-plugin.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
