import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Birv8ea4.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.18_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/routes/static/404.astro", _page1],
    ["node_modules/.pnpm/@astrojs+starlight@0.29.3_astro@4.16.18/node_modules/@astrojs/starlight/routes/static/index.astro", _page2]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "29a40d35-5b9e-4130-8f8f-3f02a9e7caeb"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
