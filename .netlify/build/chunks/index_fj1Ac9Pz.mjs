import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_BYb8n1xT.mjs';
import { $ as $$Image } from './_astro_assets_O7SCoehR.mjs';
import { e as $$CardGrid, f as $$Card } from './Code_BDH1PbIW.mjs';

const frontmatter = {
  "title": "Welcome to Neonity's Orca-Note Manual",
  "description": "non-official manual for Orca-Note",
  "template": "splash",
  "hero": {
    "tagline": "non-official manual for Orca-Note",
    "image": {
      "file": "../../../assets/orca-note-logo.png"
    },
    "actions": [{
      "text": "Get Started",
      "link": "/en/guides/example/",
      "icon": "right-arrow"
    }, {
      "text": "Read the official docs",
      "link": "https://www.orca-studio.com/",
      "icon": "external",
      "variant": "minimal"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "features",
    "text": "Features"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"features\">Features</h2>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Bi-directional link",
        icon: "pencil",
        "set:html": "<p>Use bi-directional link to navigate between notes and pages.</p>"
      }), createVNode($$Card, {
        title: "Local first",
        icon: "add-document",
        "set:html": "<p>Orca-Note is a local first note app, which means that all your notes are stored locally on your device.</p>"
      }), createVNode($$Card, {
        title: "Configure your Orca-Note",
        icon: "setting",
        "set:html": "<p>Set your own Orca-Note style.</p>"
      }), createVNode($$Card, {
        title: "Read the docs",
        icon: "open-book",
        "set:html": "<p>Learn more in the <a href=\"https://orca-note.org/\">Orca-Note Official Docs</a>.</p>"
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

const url = "src/content/docs/en/index.mdx";
const file = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/en/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/andi/Documents/GitHub/orca-note-docs/src/content/docs/en/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
