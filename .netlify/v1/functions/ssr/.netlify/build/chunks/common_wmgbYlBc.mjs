import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as createAstro, d as renderSlot, a as renderComponent, e as addAttribute, F as Fragment, f as defineStyleVars, s as spreadAttributes, g as renderHead } from './astro/server_BYb8n1xT.mjs';
import { s as starlightConfig, B as BuiltInDefaultLocale, a as getCollection, p as pickLang, D as DeprecatedLabelsPropProxy, u as useTranslations, b as arrayType, o as objectType, e as enumType, r as recordType, c as unionType, d as stringType, f as booleanType, h as undefinedType } from './translations_CNwWyVB0.mjs';
import { g as AstroUserError } from './astro/assets-service_YMRiflFs.mjs';
/* empty css                         */
import { $ as $$Icon, a as $$LinkButton, b as $$Badge } from './Code_BDH1PbIW.mjs';
import { $ as $$Image } from './_astro_assets_O7SCoehR.mjs';

const project = {"build":{"format":"directory"},"root":"file:///Users/andi/Documents/GitHub/orca-note-docs/","srcDir":"file:///Users/andi/Documents/GitHub/orca-note-docs/src/","trailingSlash":"ignore"};

const PAGE_TITLE_ID = "_top";

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings) injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

const makeAPI = (data) => {
  const trackedDocsFiles = new Map(data);
  return {
    getNewestCommitDate: (file) => {
      const timestamp = trackedDocsFiles.get(file);
      if (!timestamp) throw new Error(`Failed to retrieve the git history for file "${file}"`);
      return new Date(timestamp);
    }
  };
};

const api = makeAPI([["en/index.mdx",1746785117000],["index.mdx",1746785117000],["zh-cn/guides/simple-task-canvas-confetti-plugin.md",1746785117000],["zh-cn/guides/download-links.md",1735396438000],["zh-cn/guides/image.png",1735396438000],["zh-cn/guides/simple-task-plugin.md",1735396438000],["zh-cn/guides/simple-task.gif",1735396438000],["zh-cn/guides/simple-task.jpg",1735396438000],["zh-cn/guides/introduction.md",1734169817000],["zh-cn/assets/shortcuts.jpg",1733997701000],["zh-cn/guides/shortcuts.md",1733997701000],["zh-cn/reference/TOC.md",1733997701000],["zh-cn/reference/example.md",1733997701000],["zh-cn/assets/orca-note-ui.mp4",1733994867000],["en/guides/introduction.md",1733991721000],["en/reference/example.md",1733991721000],["zh-cn/assets/Seth-wechat.jpg",1733991721000],["zh-cn/assets/orca-note-ui-01.png",1733991721000],["zh-cn/index.mdx",1733991721000],["guides/example.md",1733981370000],["reference/example.md",1733981370000]]);const getNewestCommitDate = api.getNewestCommitDate;

function ensureLeadingSlash(href) {
  if (href[0] !== "/") href = "/" + href;
  return href;
}
function ensureTrailingSlash(href) {
  if (href[href.length - 1] !== "/") href += "/";
  return href;
}
function stripLeadingSlash(href) {
  if (href[0] === "/") href = href.slice(1);
  return href;
}
function stripTrailingSlash(href) {
  if (href[href.length - 1] === "/") href = href.slice(0, -1);
  return href;
}
function stripLeadingAndTrailingSlashes(href) {
  href = stripLeadingSlash(href);
  href = stripTrailingSlash(href);
  return href;
}
function stripHtmlExtension(path) {
  const pathWithoutTrailingSlash = stripTrailingSlash(path);
  return pathWithoutTrailingSlash.endsWith(".html") ? pathWithoutTrailingSlash.slice(0, -5) : path;
}
function ensureHtmlExtension(path) {
  path = stripLeadingAndTrailingSlashes(path);
  if (!path.endsWith(".html")) {
    path = path ? path + ".html" : "/index.html";
  }
  return ensureLeadingSlash(path);
}

const base = stripTrailingSlash("/");
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}

const defaultFormatStrategy = {
  addBase: pathWithBase,
  handleExtension: (href) => stripHtmlExtension(href)
};
const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: defaultFormatStrategy,
  preserve: defaultFormatStrategy
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.handleExtension(href);
  href = formatStrategy.addBase(href);
  if (format === "file") return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}

const formatPath = createPathFormatter({
  format: project.build.format,
  trailingSlash: project.trailingSlash
});

function slugToLocale$1(slug, config) {
  const localesConfig = config.locales ?? {};
  const baseSegment = slug?.split("/")[0];
  if (baseSegment && localesConfig[baseSegment]) return baseSegment;
  if (!localesConfig.root) return config.defaultLocale.locale;
  return void 0;
}

function slugToLocale(slug) {
  return slugToLocale$1(slug, starlightConfig);
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function localeToDir(locale) {
  const dir = locale ? starlightConfig.locales?.[locale]?.dir : starlightConfig.locales?.root?.dir;
  return dir || starlightConfig.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" ? void 0 : slug.endsWith("/index") ? slug.slice(0, -6) : slug;
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedSlug(slug, locale) {
  const slugLocale = slugToLocale(slug);
  if (slugLocale === locale) return slug;
  locale = locale || "";
  if (slugLocale === slug) return locale;
  if (slugLocale) {
    return stripTrailingSlash(slug.replace(slugLocale + "/", locale ? locale + "/" : ""));
  }
  return slug ? locale + "/" + slug : locale;
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}

const logos = {};

function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err) throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
const docs = (await getCollection("docs", ({ data }) => {
  return data.draft === false;
}) ?? []).map(({ slug, ...entry }) => ({
  ...entry,
  slug: normalizeIndexSlug(slug)
}));
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  if (starlightConfig.isMultilingual) {
    const defaultLocaleDocs = getLocaleDocs(
      starlightConfig.defaultLocale?.locale === "root" ? void 0 : starlightConfig.defaultLocale?.locale
    );
    for (const key in starlightConfig.locales) {
      if (key === starlightConfig.defaultLocale.locale) continue;
      const localeConfig = starlightConfig.locales[key];
      if (!localeConfig) continue;
      const locale = key === "root" ? void 0 : key;
      const localeDocs = getLocaleDocs(locale);
      for (const fallback of defaultLocaleDocs) {
        const slug = localizedSlug(fallback.slug, locale);
        const id = localizedId(fallback.id, locale);
        const doesNotNeedFallback = localeDocs.some((doc) => doc.slug === slug);
        if (doesNotNeedFallback) continue;
        routes2.push({
          entry: fallback,
          slug,
          id,
          isFallback: true,
          lang: localeConfig.lang || BuiltInDefaultLocale.lang,
          locale,
          dir: localeConfig.dir,
          entryMeta: slugToLocaleData(fallback.slug)
        });
      }
    }
  }
  return routes2;
}
const routes = getRoutes();
function getParamRouteMapping() {
  const map = /* @__PURE__ */ new Map();
  for (const route of routes) {
    map.set(slugToParam(route.slug), route);
  }
  return map;
}
getParamRouteMapping();
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function getLocaleDocs(locale) {
  return filterByLocale(docs, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
const neverPathFormatter = createPathFormatter({ trailingSlash: "never" });
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromSidebarLinkItem(item, locale);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else if ("slug" in item) {
    return linkFromInternalSidebarLinkItem(item, locale);
  } else {
    const label = pickLang(item.translations, localeToLang(locale)) || item.label;
    return {
      type: "group",
      label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes2)),
      collapsed: item.collapsed,
      badge: getSidebarBadge(item.badge, locale, label)
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter(
    (doc) => (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(doc.id) === localeDir || // Match against `foo/anything/else.md`.
      doc.id.startsWith(localeDir + "/")
    )
  );
  const tree = treeify(dirDocs, localeDir);
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return {
    type: "group",
    label,
    entries: sidebarFromDir(tree, currentPathname, locale, subgroupCollapsed ?? item.collapsed),
    collapsed: item.collapsed,
    badge: getSidebarBadge(item.badge, locale, label)
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromSidebarLinkItem(item, locale) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale) href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeSidebarLink(href, label, getSidebarBadge(item.badge, locale, label), item.attrs);
}
function linkFromInternalSidebarLinkItem(item, locale) {
  const slug = item.slug === "index" ? "" : item.slug;
  const localizedSlug = locale ? slug ? locale + "/" + slug : locale : slug;
  const route = routes.find((entry) => localizedSlug === entry.slug);
  if (!route) {
    const hasExternalSlashes = item.slug.at(0) === "/" || item.slug.at(-1) === "/";
    if (hasExternalSlashes) {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config must not start or end with a slash.`,
        `Please try updating \`"${item.slug}"\` to \`"${stripLeadingAndTrailingSlashes(item.slug)}"\`.`
      );
    } else {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config does not exist.`,
        "Update the Starlight config to reference a valid entry slug in the docs content collection.\nLearn more about Astro content collection slugs at https://docs.astro.build/en/reference/modules/astro-content/#getentry"
      );
    }
  }
  const frontmatter = route.entry.data;
  const label = pickLang(item.translations, localeToLang(locale)) || item.label || frontmatter.sidebar?.label || frontmatter.title;
  const badge = item.badge ?? frontmatter.sidebar?.badge;
  const attrs = { ...frontmatter.sidebar?.attrs, ...item.attrs };
  return makeSidebarLink(route.slug, label, getSidebarBadge(badge, locale, label), attrs);
}
function makeSidebarLink(href, label, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  return makeLink({ label, href, badge, attrs });
}
function makeLink({
  attrs = {},
  badge = void 0,
  ...opts
}) {
  return { type: "link", ...opts, badge, isCurrent: false, attrs };
}
function pathsMatch(pathA, pathB) {
  return neverPathFormatter(pathA) === neverPathFormatter(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir) return [];
  baseDir = ensureTrailingSlash(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function treeify(routes2, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes2.filter((doc) => !doc.entry.data.sidebar.hidden).sort((a, b) => b.id.split("/").length - a.id.split("/").length).forEach((doc) => {
    const parts = getBreadcrumbs(doc.id, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && currentNode.hasOwnProperty(part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route) {
  return makeSidebarLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    route.entry.data.sidebar.badge,
    route.entry.data.sidebar.attrs
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) : linkFromRoute(dirOrRoute);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed)
  );
}
const intermediateSidebars = /* @__PURE__ */ new Map();
function getSidebar(pathname, locale) {
  let intermediateSidebar = intermediateSidebars.get(locale);
  if (!intermediateSidebar) {
    intermediateSidebar = getIntermediateSidebarFromConfig(starlightConfig.sidebar, pathname, locale);
    intermediateSidebars.set(locale, intermediateSidebar);
  }
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (sidebarConfig) {
    return sidebarConfig.map((group) => configItemToEntry(group, pathname, locale, routes2));
  } else {
    const tree = treeify(routes2, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function getSidebarFromIntermediateSidebar(intermediateSidebar, pathname) {
  const sidebar = structuredClone(intermediateSidebar);
  setIntermediateSidebarCurrentEntry(sidebar, pathname);
  return sidebar;
}
function setIntermediateSidebarCurrentEntry(intermediateSidebar, pathname) {
  for (const entry of intermediateSidebar) {
    if (entry.type === "link" && pathsMatch(encodeURI(entry.href), pathname)) {
      entry.isCurrent = true;
      return true;
    }
    if (entry.type === "group" && setIntermediateSidebarCurrentEntry(entry.entries, pathname)) {
      return true;
    }
  }
  return false;
}
function getSidebarHash(sidebar) {
  let hash = 0;
  const sidebarIdentity = recursivelyBuildSidebarIdentity(sidebar);
  for (let i = 0; i < sidebarIdentity.length; i++) {
    const char = sidebarIdentity.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return (hash >>> 0).toString(36).padStart(7, "0");
}
function recursivelyBuildSidebarIdentity(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? entry.label + recursivelyBuildSidebarIdentity(entry.entries) : entry.label + entry.href
  ).join("");
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false) return void 0;
  else if (config2 === true) return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink({ href: config2.link, label: config2.label });
    }
  }
  return paginationEnabled ? link : void 0;
}
function stripExtension(path) {
  const periodIndex = path.lastIndexOf(".");
  return path.slice(0, periodIndex > -1 ? periodIndex : void 0);
}
function getSidebarBadge(config2, locale, itemLabel) {
  if (!config2) return;
  if (typeof config2 === "string") {
    return { variant: "default", text: config2 };
  }
  return { ...config2, text: getSidebarBadgeText(config2.text, locale, itemLabel) };
}
function getSidebarBadgeText(text, locale, itemLabel) {
  if (typeof text === "string") return text;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const defaultText = text[defaultLang];
  if (!defaultText) {
    throw new AstroUserError(
      `The badge text for "${itemLabel}" must have a key for the default language "${defaultLang}".`,
      "Update the Starlight config to include a badge text for the default language.\nLearn more about sidebar badges internationalization at https://starlight.astro.build/guides/sidebar/#internationalization-with-badges"
    );
  }
  return pickLang(text, localeToLang(locale)) || defaultText;
}

function generateRouteData({
  props,
  url
}) {
  const { entry, locale, lang } = props;
  const sidebar = getSidebar(url.pathname, locale);
  const siteTitle = getSiteTitle(lang);
  return {
    ...props,
    siteTitle,
    siteTitleHref: getSiteTitleHref(locale),
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props),
    labels: DeprecatedLabelsPropProxy
  };
}
function getToC({ entry, lang, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig) return;
  const t = useTranslations(lang);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(entry.id);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry, id, isFallback }) {
  const { editUrl } = entry.data;
  if (editUrl === false) return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else if (starlightConfig.editLink.baseUrl) {
    const srcPath = project.srcDir.replace(project.root, "");
    const filePath = isFallback ? localizedId(id, starlightConfig.defaultLocale.locale) : id;
    url = ensureTrailingSlash(starlightConfig.editLink.baseUrl) + srcPath + "content/docs/" + filePath;
  }
  return url ? new URL(url) : void 0;
}
function getSiteTitle(lang) {
  const defaultLang = starlightConfig.defaultLocale.lang;
  if (lang && starlightConfig.title[lang]) {
    return starlightConfig.title[lang];
  }
  return starlightConfig.title[defaultLang];
}
function getSiteTitleHref(locale) {
  return formatPath(locale || "/");
}

const $$Astro$v = createAstro();
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.props.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-7sno5hvy">${unescapeHTML(banner.content)}</div>`}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-vrnp4ffd"> <div class="sl-container astro-vrnp4ffd">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const $$Astro$u = createAstro();
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { icon, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-b7rb7gpt"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-b7rb7gpt" })} <span class="astro-b7rb7gpt">${label}</span> </p> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/ContentNotice.astro", void 0);

const $$Astro$t = createAstro();
const $$FallbackContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("i18n.untranslatedContent") })}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$s = createAstro();
const $$DraftContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$DraftContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("page.draft") })}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/DraftContentNotice.astro", void 0);

const $$Astro$r = createAstro();
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl } = Astro2.props;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")} class="sl-flex astro-xm4cupf3">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-xm4cupf3" })}${Astro2.locals.t("page.editLink")}</a>`}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/EditLink.astro", void 0);

const $$Astro$q = createAstro();
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lang, lastUpdated } = Astro2.props;
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>${Astro2.locals.t("page.lastUpdated")}${" "}<time${addAttribute(lastUpdated.toISOString(), "datetime")}>${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}</time></p>`}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);

const $$Astro$p = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { dir, pagination } = Astro2.props;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links astro-3bhyuebf"${addAttribute(dir, "dir")}> ${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-3bhyuebf"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-3bhyuebf" })} <span class="astro-3bhyuebf"> ${Astro2.locals.t("page.previousLink")} <br class="astro-3bhyuebf"> <span class="link-title astro-3bhyuebf">${prev.label}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-3bhyuebf"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-3bhyuebf" })} <span class="astro-3bhyuebf"> ${Astro2.locals.t("page.nextLink")} <br class="astro-3bhyuebf"> <span class="link-title astro-3bhyuebf">${next.label}</span> </span> </a>`} </div> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);

const $$Astro$o = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="sl-flex astro-rocmitzc"> <div class="meta sl-flex astro-rocmitzc"> ${renderComponent($$result, "EditLink", $$EditLink, { ...Astro2.props, "class": "astro-rocmitzc" })} ${renderComponent($$result, "LastUpdated", $$LastUpdated, { ...Astro2.props, "class": "astro-rocmitzc" })} </div> ${renderComponent($$result, "Pagination", $$Pagination, { ...Astro2.props, "class": "astro-rocmitzc" })} ${starlightConfig.credits && renderTemplate`<a class="kudos sl-flex astro-rocmitzc" href="https://starlight.astro.build"> ${renderComponent($$result, "Icon", $$Icon, { "name": "starlight", "class": "astro-rocmitzc" })} ${Astro2.locals.t("builtWithStarlight.label")} </a>`} </footer> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Footer.astro", void 0);

const version = "0.29.3";

const HeadConfigSchema = () => arrayType(
  objectType({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: enumType(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: recordType(unionType([stringType(), booleanType(), undefinedType()])).default({}),
    /** Content to place inside the tag (optional). */
    content: stringType().default("")
  })
).default([]);

const HeadSchema = HeadConfigSchema();
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    case "link":
      return head.some(({ attrs }) => attrs.rel === "canonical");
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr) return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title") return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

function localizedUrl(url, locale, trailingSlash) {
  url = new URL(url);
  if (!starlightConfig.locales) {
    return url;
  }
  if (locale === "root") locale = "";
  const base = stripTrailingSlash("/");
  const hasBase = url.pathname.startsWith(base);
  if (hasBase) url.pathname = url.pathname.replace(base, "");
  const [_leadingSlash, baseSegment] = url.pathname.split("/");
  const htmlExt = ".html";
  const isRootHtml = baseSegment?.endsWith(htmlExt);
  const baseSlug = isRootHtml ? baseSegment?.slice(0, -1 * htmlExt.length) : baseSegment;
  if (baseSlug && baseSlug in starlightConfig.locales) {
    if (locale) {
      url.pathname = url.pathname.replace(baseSlug, locale);
    } else if (isRootHtml) {
      url.pathname = "/index.html";
    } else {
      url.pathname = url.pathname.replace("/" + baseSlug, "");
    }
  } else if (locale) {
    if (baseSegment === "index.html") {
      url.pathname = "/" + locale + ".html";
    } else {
      url.pathname = "/" + locale + url.pathname;
    }
  }
  if (hasBase) url.pathname = base + url.pathname;
  return url;
}

const $$Astro$n = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Head;
  const { entry, lang, siteTitle } = Astro2.props;
  const { data } = entry;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${siteTitle}` },
    { tag: "link", attrs: { rel: "canonical", href: canonical?.href } },
    { tag: "meta", attrs: { name: "generator", content: Astro2.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonical?.href } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: siteTitle } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (canonical && starlightConfig.isMultilingual) {
    for (const locale in starlightConfig.locales) {
      const localeOpts = starlightConfig.locales[locale];
      if (!localeOpts) continue;
      headDefaults.push({
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: localeOpts.lang,
          href: localizedUrl(canonical, locale).href
        }
      });
    }
  }
  if (Astro2.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  if (starlightConfig.social?.twitter) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(starlightConfig.social.twitter.url).pathname
      }
    });
  }
  const head = createHead(headDefaults, starlightConfig.head, data.head);
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const $$Astro$m = createAstro();
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-ov3ty3pm"> <span class="sr-only astro-ov3ty3pm">${Astro2.props.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-ov3ty3pm" })} <select${addAttribute(Astro2.props.value, "value")} class="astro-ov3ty3pm"> ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-ov3ty3pm">${unescapeHTML(label)}</option>`)} </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-ov3ty3pm" })} </label> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Select.astro", void 0);

const $$Astro$l = createAstro();
const $$LanguageSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  function localizedPathname(locale) {
    return localizedUrl(Astro2.url, locale).pathname;
  }
  return renderTemplate`${starlightConfig.isMultilingual && renderTemplate`${renderComponent($$result, "starlight-lang-select", "starlight-lang-select", {}, { "default": () => renderTemplate`${renderComponent($$result, "Select", $$Select, { "icon": "translate", "label": Astro2.locals.t("languageSelect.accessibleLabel"), "value": localizedPathname(Astro2.props.locale), "options": Object.entries(starlightConfig.locales).map(([code, locale]) => ({
    value: localizedPathname(code),
    selected: code === Astro2.props.locale,
    label: locale.label
  })), "width": "7em" })}` })}`}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$k = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Search;
  const pagefindTranslations = {
    placeholder: Astro2.locals.t("search.label"),
    ...Object.fromEntries(
      Object.entries(Astro2.locals.t.all()).filter(([key]) => key.startsWith("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "  <script>\n	(() => {\n		const openBtn = document.querySelector('button[data-open-modal]');\n		const shortcut = openBtn?.querySelector('kbd');\n		if (!openBtn || !(shortcut instanceof HTMLElement)) return;\n		const platformKey = shortcut.querySelector('kbd');\n		if (platformKey && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {\n			platformKey.textContent = '⌘';\n			openBtn.setAttribute('aria-keyshortcuts', 'Meta+K');\n		}\n		shortcut.style.display = '';\n	})();\n</script>   "])), renderComponent($$result, "site-search", "site-search", { "data-translations": JSON.stringify(pagefindTranslations), "data-strip-trailing-slash": project.trailingSlash === "never", "class": "astro-3zvdn776" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled${addAttribute(Astro2.locals.t("search.label"), "aria-label")} aria-keyshortcuts="Control+K" class="astro-3zvdn776"> ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "class": "astro-3zvdn776" })} <span class="sl-hidden md:sl-block astro-3zvdn776" aria-hidden="true">${Astro2.locals.t("search.label")}</span> <kbd class="sl-hidden md:sl-flex astro-3zvdn776" style="display: none;"> <kbd class="astro-3zvdn776">${Astro2.locals.t("search.ctrlKey")}</kbd><kbd class="astro-3zvdn776">K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(Astro2.locals.t("search.label"), "aria-label")} class="astro-3zvdn776"> <div class="dialog-frame sl-flex astro-3zvdn776">  <button data-close-modal class="sl-flex md:sl-hidden astro-3zvdn776"> ${Astro2.locals.t("search.cancelLabel")} </button> ${renderTemplate`<div class="search-container astro-3zvdn776"> <div id="starlight__search" class="astro-3zvdn776"></div> </div>`} </div> </dialog> ` }));
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Search.astro", void 0);

const $$Astro$j = createAstro();
const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const { siteTitle, siteTitleHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(siteTitleHref, "href")} class="site-title sl-flex astro-5w4tgoe2"> ${starlightConfig.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-5w4tgoe2" }, { "default": ($$result2) => renderTemplate` <img${addAttribute([{ "light:sl-hidden": !("src" in starlightConfig.logo) }, "astro-5w4tgoe2"], "class:list")}${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}> ${!("src" in starlightConfig.logo) && renderTemplate`<img class="dark:sl-hidden astro-5w4tgoe2"${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`} <span${addAttribute([{ "sr-only": starlightConfig.logo?.replacesTitle }, "astro-5w4tgoe2"], "class:list")}> ${siteTitle} </span> </a> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/SiteTitle.astro", void 0);

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const links = Object.entries(starlightConfig.social || {});
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-4kthyrva" }, { "default": ($$result2) => renderTemplate`${links.map(([platform, { label, url }]) => renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} rel="me" class="sl-flex astro-4kthyrva"><span class="sr-only astro-4kthyrva">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": platform, "class": "astro-4kthyrva" })}</a>`)}` })}`}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$i = createAstro();
const $$ThemeSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n	StarlightThemeProvider.updatePickers();\n<\/script> "])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`  ${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": Astro2.locals.t("themeSelect.accessibleLabel"), "value": "auto", "options": [
    { label: Astro2.locals.t("themeSelect.dark"), selected: false, value: "dark" },
    { label: Astro2.locals.t("themeSelect.light"), selected: false, value: "light" },
    { label: Astro2.locals.t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })} ` }));
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);

const $$Astro$h = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Header;
  const shouldRenderSearch = starlightConfig.pagefind || starlightConfig.components.Search !== "@astrojs/starlight/components/Search.astro";
  return renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-ywztfy7z"> <div class="title-wrapper sl-flex astro-ywztfy7z"> ${renderComponent($$result, "SiteTitle", $$SiteTitle, { ...Astro2.props, "class": "astro-ywztfy7z" })} </div> <div class="sl-flex astro-ywztfy7z"> ${shouldRenderSearch && renderTemplate`${renderComponent($$result, "Search", $$Search, { ...Astro2.props, "class": "astro-ywztfy7z" })}`} </div> <div class="sl-hidden md:sl-flex right-group astro-ywztfy7z"> <div class="sl-flex social-icons astro-ywztfy7z"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { ...Astro2.props, "class": "astro-ywztfy7z" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { ...Astro2.props, "class": "astro-ywztfy7z" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { ...Astro2.props, "class": "astro-ywztfy7z" })} </div> </div> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Header.astro", void 0);

const $$Astro$g = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-wunydyb6"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-wunydyb6"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-wunydyb6" })}`} ${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-wunydyb6">${unescapeHTML(rawHtml)}</div>`} <div class="sl-flex stack astro-wunydyb6"> <div class="sl-flex copy astro-wunydyb6"> <h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-wunydyb6">${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="tagline astro-wunydyb6">${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-wunydyb6"> ${actions.map(
    ({ attrs: { class: className, ...attrs } = {}, icon, link: href, text, variant }) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": href, "variant": variant, "icon": icon?.name, "class:list": [[className], "astro-wunydyb6"], ...attrs }, { "default": ($$result2) => renderTemplate`${text}${icon?.html && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon.html)}` })}`}` })}`
  )} </div>`} </div> </div> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Hero.astro", void 0);

const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);

const $$Astro$f = createAstro();
const $$MobileMenuToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "astro-ih6isnvx" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button aria-expanded="false"${addAttribute(Astro2.locals.t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-ih6isnvx"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "astro-ih6isnvx" })} </button> ` })}   `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$e = createAstro();
const $$PageFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-4jpf6r6e"> <header class="header astro-4jpf6r6e">${renderSlot($$result, $$slots["header"])}</header> ${hasSidebar && renderTemplate`<nav class="sidebar astro-4jpf6r6e"${addAttribute(Astro2.locals.t("sidebarNav.accessibleLabel"), "aria-label")}> ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { ...Astro2.props, "class": "astro-4jpf6r6e" })} <div id="starlight__sidebar" class="sidebar-pane astro-4jpf6r6e"> <div class="sidebar-content sl-flex astro-4jpf6r6e"> ${renderSlot($$result, $$slots["sidebar"])} </div> </div> </nav>`} <div class="main-frame astro-4jpf6r6e">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$d = createAstro();
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-3g52ohus"], "class:list")}${addAttribute($$definedVars, "style")}> ${toc.map((heading) => renderTemplate`<li class="astro-3g52ohus"${addAttribute($$definedVars, "style")}> <a${addAttribute("#" + heading.slug, "href")} class="astro-3g52ohus"${addAttribute($$definedVars, "style")}> <span class="astro-3g52ohus"${addAttribute($$definedVars, "style")}>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-3g52ohus" })}`} </li>`)} </ul> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$c = createAstro();
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { toc } = Astro2.props;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-lnes4lck" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-lnes4lck"><details id="starlight__mobile-toc" class="astro-lnes4lck"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-lnes4lck"><div class="toggle sl-flex astro-lnes4lck">${Astro2.locals.t("tableOfContents.onThisPage")}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-lnes4lck", "size": "1rem" })}</div><span class="display-current astro-lnes4lck"></span></summary><div class="dropdown astro-lnes4lck">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-lnes4lck" })}</div></details></nav>` })}`}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);

const $$Astro$b = createAstro();
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { toc } = Astro2.props;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${Astro2.locals.t("tableOfContents.onThisPage")}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);

const $$Astro$a = createAstro();
const $$PageSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${Astro2.props.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-mq2voedr" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-mq2voedr">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { ...Astro2.props, "class": "astro-mq2voedr" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-mq2voedr"><div class="sl-container astro-mq2voedr">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { ...Astro2.props, "class": "astro-mq2voedr" })}</div></div>` })}`}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);

const $$Astro$9 = createAstro();
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$PageTitle;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(PAGE_TITLE_ID, "id")} class="astro-a6gltyla">${Astro2.props.entry.data.title}</h1> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/PageTitle.astro", void 0);

const $$Astro$8 = createAstro();
const $$MobileMenuFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MobileMenuFooter;
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-osdtxb5c"> <div class="sl-flex social-icons astro-osdtxb5c"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { ...Astro2.props, "class": "astro-osdtxb5c" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { ...Astro2.props, "class": "astro-osdtxb5c" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { ...Astro2.props, "class": "astro-osdtxb5c" })} </div> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro();
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const hash = getSidebarHash(Astro2.props.sidebar);
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "class": "astro-prwiarto" }, { "default": () => renderTemplate(_a$1 || (_a$1 = __template$1([` <script aria-hidden="true">
		(() => {
			try {
				if (!matchMedia('(min-width: 50em)').matches) return;
				/** @type {HTMLElement | null} */
				const target = document.querySelector('sl-sidebar-state-persist');
				const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
				if (!target || !state || target.dataset.hash !== state.hash) return;
				window._starlightScrollRestore = state.scroll;
				customElements.define(
					'sl-sidebar-restore',
					class SidebarRestore extends HTMLElement {
						connectedCallback() {
							try {
								const idx = parseInt(this.dataset.index || '');
								const details = this.closest('details');
								if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
							} catch {}
						}
					}
				);
			} catch {}
		})();
	<\/script> `, ` <script aria-hidden="true">
		(() => {
			const scroller = document.getElementById('starlight__sidebar');
			if (!window._starlightScrollRestore || !scroller) return;
			scroller.scrollTop = window._starlightScrollRestore;
			delete window._starlightScrollRestore;
		})();
	<\/script> `])), renderSlot($$result, $$slots["default"])) })} `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/SidebarPersister.astro", void 0);

const $$Astro$6 = createAstro();
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("starlight-sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals[currentGroupIndexSymbol] || 0;
  locals[currentGroupIndexSymbol] = index + 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": index })}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/SidebarRestorePoint.astro", void 0);

const $$Astro$5 = createAstro();
const $$SidebarSublist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-bdxgk3gn"], "class:list")}> ${sublist.map((entry) => renderTemplate`<li class="astro-bdxgk3gn"> ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-bdxgk3gn"], "class:list")}${spreadAttributes(entry.attrs)}> <span class="astro-bdxgk3gn">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-bdxgk3gn", "text": entry.badge.text })}`} </a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-bdxgk3gn"> ${renderComponent($$result, "SidebarRestorePoint", $$SidebarRestorePoint, { "class": "astro-bdxgk3gn" })} <summary class="astro-bdxgk3gn"> <div class="group-label astro-bdxgk3gn"> <span class="large astro-bdxgk3gn">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-bdxgk3gn", "text": entry.badge.text })}`} </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-bdxgk3gn", "size": "1.25rem" })} </summary> ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-bdxgk3gn" })} </details>`} </li>`)} </ul> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const $$Astro$4 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SidebarPersister", $$SidebarPersister, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })} ` })} ${maybeRenderHead()}<div class="md:sl-hidden"> ${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, { ...Astro2.props })} </div>`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);

const $$Astro$3 = createAstro();
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-c7x7rv4g">${Astro2.locals.t("skipLink.label")}</a> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const $$Astro$2 = createAstro();
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-znyak6om"> ${Astro2.props.toc && renderTemplate`<aside class="right-sidebar-container astro-znyak6om"> <div class="right-sidebar astro-znyak6om"> ${renderSlot($$result, $$slots["right-sidebar"])} </div> </aside>`} <div class="main-pane astro-znyak6om">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro$1 = createAstro();
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const pagefindEnabled = Astro2.props.entry.slug !== "404" && !Astro2.props.entry.slug.endsWith("/404") && Astro2.props.entry.data.pagefind !== false;
  return renderTemplate`<html${addAttribute(Astro2.props.lang, "lang")}${addAttribute(Astro2.props.dir, "dir")}${addAttribute(Boolean(Astro2.props.toc), "data-has-toc")}${addAttribute(Astro2.props.hasSidebar, "data-has-sidebar")}${addAttribute(Boolean(Astro2.props.entry.data.hero), "data-has-hero")} data-theme="dark" class="astro-rxct4x4y"> <head>${renderComponent($$result, "Head", $$Head, { ...Astro2.props, "class": "astro-rxct4x4y" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { ...Astro2.props, "class": "astro-rxct4x4y" })}${renderHead()}</head> <body class="astro-rxct4x4y"> ${renderComponent($$result, "SkipLink", $$SkipLink, { ...Astro2.props, "class": "astro-rxct4x4y" })} ${renderComponent($$result, "PageFrame", $$PageFrame, { ...Astro2.props, "class": "astro-rxct4x4y" }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { ...Astro2.props, "class": "astro-rxct4x4y" }, { "default": ($$result3) => renderTemplate`  <main${addAttribute(pagefindEnabled, "data-pagefind-body")}${addAttribute(Astro2.props.entryMeta.lang, "lang")}${addAttribute(Astro2.props.entryMeta.dir, "dir")} class="astro-rxct4x4y">  ${renderComponent($$result3, "Banner", $$Banner, { ...Astro2.props, "class": "astro-rxct4x4y" })} ${Astro2.props.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-rxct4x4y" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Hero, { ...Astro2.props, "class": "astro-rxct4x4y" })} ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { ...Astro2.props, "class": "astro-rxct4x4y" }, { "default": ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ${renderComponent($$result4, "Footer", $$Footer, { ...Astro2.props, "class": "astro-rxct4x4y" })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-rxct4x4y" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-rxct4x4y" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PageTitle", $$PageTitle, { ...Astro2.props, "class": "astro-rxct4x4y" })} ${Astro2.props.entry.data.draft && renderTemplate`${renderComponent($$result5, "DraftContentNotice", $$DraftContentNotice, { ...Astro2.props, "class": "astro-rxct4x4y" })}`}${Astro2.props.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { ...Astro2.props, "class": "astro-rxct4x4y" })}`}` })} ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { ...Astro2.props, "class": "astro-rxct4x4y" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { ...Astro2.props, "class": "astro-rxct4x4y" }, { "default": ($$result6) => renderTemplate` ${renderSlot($$result6, $$slots["default"])} ` })} ${renderComponent($$result5, "Footer", $$Footer, { ...Astro2.props, "class": "astro-rxct4x4y" })} ` })} ` })}`} </main> `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", ...Astro2.props, "class": "astro-rxct4x4y" })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", ...Astro2.props, "class": "astro-rxct4x4y" })}`, "sidebar": ($$result2) => renderTemplate`${Astro2.props.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", ...Astro2.props, "class": "astro-rxct4x4y" })}`}` })} </body></html>`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/components/Page.astro", void 0);

const $$Astro = createAstro();
const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Common;
  const { route } = Astro2.props;
  const { Content, headings } = await route.entry.render();
  const routeData = generateRouteData({ props: { ...route, headings }, url: Astro2.url });
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...routeData }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": route.entry.data })}` })}`;
}, "/Users/andi/Documents/GitHub/orca-note-docs/node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/routes/common.astro", void 0);

export { $$Common as $, paths as p, slugToLocale$1 as s };
