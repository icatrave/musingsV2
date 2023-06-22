(() => {
var exports = {};
exports.id = 671;
exports.ids = [671];
exports.modules = {

/***/ 6632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./an_ode_to_my_love.md": [
		5839,
		839
	],
	"./apocalypse.md": [
		58,
		58
	],
	"./pink_mountain.md": [
		6542,
		542
	],
	"./quack_quack.md": [
		1034,
		34
	],
	"./theethum_nandrum.md": [
		4128,
		128
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 6632;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblog_2Fpost_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fblog_2Fpost_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2Fblog_2Fpost_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fblog_2Fpost_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fblog_2Fpost_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fblog_2Fpost_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/blog/post/[slug].js
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (_slug_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(8769);
;// CONCATENATED MODULE: ./pages/blog/post/[slug].js





const Post = ({ blogpost })=>{
    if (!blogpost) return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: "not found"
    });
    const { html, attributes } = blogpost;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                className: "jsx-15ddaadb0cb14024",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "jsx-15ddaadb0cb14024",
                        children: attributes.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: attributes.thumbnail,
                        className: "jsx-15ddaadb0cb14024"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: html
                        },
                        className: "jsx-15ddaadb0cb14024"
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "15ddaadb0cb14024",
                children: "article.jsx-15ddaadb0cb14024{margin:0 auto}h1.jsx-15ddaadb0cb14024{text-align:center}"
            })
        ]
    });
};
async function getStaticPaths() {
    const paths = external_fs_default().readdirSync(external_path_default().join(process.cwd(), "content/blogPosts")).map((blogName)=>{
        const trimmedName = blogName.substring(0, blogName.length - 3);
        return {
            params: {
                slug: trimmedName
            }
        };
    });
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params }) {
    const { slug } = params;
    const blogpost = await __webpack_require__(6632)(`./${slug}.md`).catch(()=>null);
    return {
        props: {
            blogpost: blogpost.default
        }
    };
}
/* harmony default export */ const _slug_ = (Post);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblog%2Fpost%2F%5Bslug%5D&absolutePagePath=private-next-pages%2Fblog%2Fpost%2F%5Bslug%5D.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblog_2Fpost_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fblog_2Fpost_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fblog_2Fpost_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fblog_2Fpost_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2Fblog_2Fpost_2F_5Bslug_5D_absolutePagePath_private_next_pages_2Fblog_2Fpost_2F_5Bslug_5D_js_preferredRegion_middlewareConfig_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blog/post/[slug]","pathname":"/blog/post/[slug]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _slug_namespaceObject })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [869,769], () => (__webpack_exec__(5030)));
module.exports = __webpack_exports__;

})();