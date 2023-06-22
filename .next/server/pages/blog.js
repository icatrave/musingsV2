(() => {
var exports = {};
exports.id = 195;
exports.ids = [195,839,58];
exports.modules = {

/***/ 8812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./an_ode_to_my_love.md": 5839,
	"./apocalypse.md": 58,
	"./pink_mountain.md": 6542,
	"./quack_quack.md": 1034,
	"./theethum_nandrum.md": 4128
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8812;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9713:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./an_ode_to_my_love.md": 5839,
	"./apocalypse.md": 58,
	"./pink_mountain.md": 6542,
	"./quack_quack.md": 1034,
	"./theethum_nandrum.md": 4128
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9713;

/***/ }),

/***/ 5839:
/***/ ((module) => {

module.exports = { 
      attributes: {"title":"An Ode to my love","date":"2019-09-06T08:28:44.549Z","thumbnail":null},
    
      html: "<p>I have never told you\nhow much I loved you</p>\n<p>You supported me in\nEvery step I take</p>\n<p>You have been the ground\nBeneath my feet</p>\n<p>You stood with me\nIn times of need</p>\n<p>No matter how much we age and wear,\nMy sole truly longs for you.</p>\n<p>-To my favourite pair of\nshoes.</p>\n",
     }

/***/ }),

/***/ 58:
/***/ ((module) => {

module.exports = { 
      attributes: {"title":"Apocalypse","date":"2023-05-06T08:28:44.549Z","thumbnail":null},
    
      html: "<p>After a world ends\nThe stars still shine,\nthe earth still spins around</p>\n<p>The rain still falls,\nthe wind still blows</p>\n<p>The rivers still run,\nMountains still stand,</p>\n<p>Broken hearts still beat,\ncold lips still smile,\nAnd tears fall without a sound.</p>\n",
     }

/***/ }),

/***/ 8855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fblog_absolutePagePath_private_next_pages_2Fblog_2Findex_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fblog_absolutePagePath_private_next_pages_2Fblog_2Findex_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/blog/index.js
var blog_namespaceObject = {};
__webpack_require__.r(blog_namespaceObject);
__webpack_require__.d(blog_namespaceObject, {
  "default": () => (blog),
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(8769);
;// CONCATENATED MODULE: ./pages/blog/index.js




const importBlogPosts = async ()=>{
    // https://webpack.js.org/guides/dependency-management/#requirecontext
    const markdownFiles = __webpack_require__(9713).keys().map((relativePath)=>relativePath.substring(2));
    return Promise.all(markdownFiles.map(async (path)=>{
        const markdown = await __webpack_require__(8812)(`./${path}`);
        return {
            ...markdown,
            slug: path.substring(0, path.length - 3)
        };
    }));
};
const Blog = ({ postsList })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* default */.Z, {
        children: [
            postsList.map((post)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-a5a87f9bfd0b0ba2" + " " + "post",
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/blog/post/[slug]",
                        as: `/blog/post/${post.slug}`,
                        legacyBehavior: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            className: "jsx-a5a87f9bfd0b0ba2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: post.attributes.thumbnail,
                                    className: "jsx-a5a87f9bfd0b0ba2"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    className: "jsx-a5a87f9bfd0b0ba2",
                                    children: post.attributes.title
                                })
                            ]
                        })
                    })
                }, post.slug)),
            jsx_runtime.jsx((style_default()), {
                id: "a5a87f9bfd0b0ba2",
                children: ".post.jsx-a5a87f9bfd0b0ba2{text-align:center}img.jsx-a5a87f9bfd0b0ba2{max-width:100%;max-height:300px}"
            })
        ]
    });
async function getStaticProps() {
    const postsList = await importBlogPosts();
    return {
        props: {
            postsList
        }
    };
}
/* harmony default export */ const blog = (Blog);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fblog&absolutePagePath=private-next-pages%2Fblog%2Findex.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fblog_absolutePagePath_private_next_pages_2Fblog_2Findex_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(blog_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fblog_absolutePagePath_private_next_pages_2Fblog_2Findex_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(blog_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(blog_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(blog_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(blog_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/blog","pathname":"/blog","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: blog_namespaceObject })
        
        
    

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [869,769,128,542,34], () => (__webpack_exec__(8855)));
module.exports = __webpack_exports__;

})();