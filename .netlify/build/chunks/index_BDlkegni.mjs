import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_BYb8n1xT.mjs';
import { $ as $$Image } from './_astro_assets_O7SCoehR.mjs';
import { e as $$CardGrid, f as $$Card } from './Code_BDH1PbIW.mjs';

const frontmatter = {
  "title": "欢迎来到 Neonity 的 {虎鲸笔记} 使用手册",
  "description": "unofficial manual for Orca-Note",
  "template": "splash",
  "hero": {
    "tagline": "非官方，虎鲸笔记爱好者手册",
    "image": {
      "file": "../../assets/orca-note-logo.png"
    },
    "actions": [{
      "text": "开始使用",
      "link": "/zh-cn/guides/introduction/",
      "icon": "right-arrow"
    }, {
      "text": "阅读官方手册",
      "link": "https://www.orca-studio.com/",
      "icon": "external",
      "variant": "minimal"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "功能特性",
    "text": "功能特性"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"功能特性\">功能特性</h2>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "双向链接",
        icon: "pencil",
        "set:html": "<p>使用双向链接在笔记和页面之间导航。</p>"
      }), createVNode($$Card, {
        title: "本地优先",
        icon: "add-document",
        "set:html": "<p>虎鲸笔记是一个本地优先的笔记应用，所有笔记都存储在您的设备上。</p>"
      }), createVNode($$Card, {
        title: "配置您的虎鲸笔记",
        icon: "setting",
        "set:html": "<p>配置您自己独一无二的虎鲸笔记。</p>"
      }), createVNode($$Card, {
        title: "了解更多",
        icon: "open-book",
        "set:html": "<p>了解更多在 <a href=\"https://orca-note.org/\">虎鲸笔记官方网站</a>.</p>"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/index.mdx";
const file = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
