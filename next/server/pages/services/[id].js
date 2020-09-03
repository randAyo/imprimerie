module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/fA6":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blue": "#264653",
	"gray": "#4b595b",
	"orange": "#e76f51",
	"accordionSection": "Accordion_accordionSection__pf7j2",
	"accordion": "Accordion_accordion__1aSjY",
	"active": "Accordion_active__21GHH",
	"accordionTitle": "Accordion_accordionTitle__2FMSN",
	"accordionIcon": "Accordion_accordionIcon__z4MtT",
	"rotate": "Accordion_rotate__1Mnjr",
	"accordionContent": "Accordion_accordionContent__1LknM",
	"accordionText": "Accordion_accordionText__2WvPg"
};


/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1N5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SQJ2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const WhatsApp = () => {
  return __jsx(_SvgHolder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    viewBox: "0 0 24 24",
    width: "20px",
    height: "20px"
  }, __jsx("path", {
    d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
  }));
};

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WFJs");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7ogj":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blue": "#264653",
	"gray": "#4b595b",
	"orange": "#e76f51",
	"container": "ServiceWrapper_container__p3eGb"
};


/***/ }),

/***/ "AIEE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blue": "#264653",
	"gray": "#4b595b",
	"orange": "#e76f51",
	"sidenav": "SideNav_sidenav__-pNbf",
	"btn": "SideNav_btn__a3qTF",
	"unordered": "SideNav_unordered__3PnhN"
};


/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "FFQU":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blue": "#264653",
	"gray": "#4b595b",
	"orange": "#e76f51",
	"Ccontainer": "ServiceContent_Ccontainer__3y-xs",
	"heading": "ServiceContent_heading__17uQz",
	"content": "ServiceContent_content__1oMMk",
	"image": "ServiceContent_image__23U6a",
	"calc": "ServiceContent_calc__2vvKv",
	"details": "ServiceContent_details__2Q6U7",
	"text": "ServiceContent_text__53JOt",
	"accordionContainer": "ServiceContent_accordionContainer__3urMx"
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "SQJ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SvgHolder = ({
  width = "300px",
  height = "300px",
  viewBox = "0 0 1000 600",
  fill = "none",
  className,
  children
}) => {
  return __jsx("svg", {
    width: width,
    height: height,
    viewBox: viewBox,
    fill: fill,
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("g", {
    className: className
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(SvgHolder));

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "WFJs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.tsx + 5 modules
var Layout = __webpack_require__("apO0");

// CONCATENATED MODULE: ./config.js
const dev = false;
const server = dev ? 'http://localhost:3000' : 'https://test-project-5hq8k5ur4.vercel.app/';
// EXTERNAL MODULE: ./hoc/useWindow.tsx
var useWindow = __webpack_require__("jqOM");

// EXTERNAL MODULE: ./components/ServiceWrapper/ServiceWrapper.module.scss
var ServiceWrapper_module = __webpack_require__("7ogj");
var ServiceWrapper_module_default = /*#__PURE__*/__webpack_require__.n(ServiceWrapper_module);

// CONCATENATED MODULE: ./components/ServiceWrapper/ServiceWrapper.tsx
var __jsx = external_react_default.a.createElement;



const ServiceWrapper = ({
  children
}) => {
  return __jsx("main", {
    className: ServiceWrapper_module_default.a.container
  }, children);
};

/* harmony default export */ var ServiceWrapper_ServiceWrapper = (ServiceWrapper);
// EXTERNAL MODULE: ./components/SideNav/SideNav.module.scss
var SideNav_module = __webpack_require__("AIEE");
var SideNav_module_default = /*#__PURE__*/__webpack_require__.n(SideNav_module);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/SideNav/SideNav.tsx

var SideNav_jsx = external_react_default.a.createElement;




const SideNav = ({
  nameList
}) => {
  const {
    sidenav,
    unordered,
    btn
  } = SideNav_module_default.a;
  let {
    0: state,
    1: setstate
  } = Object(external_react_["useState"])(null);

  const showList = () => {
    const state = [];
    nameList.map(ex => {
      state.push(SideNav_jsx("li", {
        key: ex.id,
        className: btn
      }, SideNav_jsx(link_default.a, {
        href: `/services/${ex.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`
      }, SideNav_jsx("p", null, ex.name))));
    });
    setstate(state);
  };

  if (!state && nameList.length) {
    showList();
  }

  return SideNav_jsx("aside", {
    className: sidenav
  }, SideNav_jsx("h1", null, "Produits: "), SideNav_jsx("ul", {
    className: unordered
  }, state));
};

/* harmony default export */ var SideNav_SideNav = (SideNav);
// EXTERNAL MODULE: ./components/ServiceContent/ServiceContent.module.scss
var ServiceContent_module = __webpack_require__("FFQU");
var ServiceContent_module_default = /*#__PURE__*/__webpack_require__.n(ServiceContent_module);

// EXTERNAL MODULE: ./components/Accordion/Accordion.module.scss
var Accordion_module = __webpack_require__("/fA6");
var Accordion_module_default = /*#__PURE__*/__webpack_require__.n(Accordion_module);

// CONCATENATED MODULE: ./components/svg/Chevron.tsx

var Chevron_jsx = external_react_default.a.createElement;
const Chevron = ({
  className,
  height,
  width,
  fill
}) => {
  return Chevron_jsx("svg", {
    className: className,
    height: height,
    width: width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, Chevron_jsx("path", {
    fill: fill,
    d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
  }));
};
// CONCATENATED MODULE: ./components/Accordion/Accordion.tsx
var Accordion_jsx = external_react_default.a.createElement;



const Accordion = ({
  answer,
  title
}) => {
  const {
    accordion,
    accordionSection,
    accordionTitle,
    accordionContent,
    active,
    accordionIcon,
    rotate,
    accordiontext
  } = Accordion_module_default.a;
  const {
    0: setActive,
    1: setActiveState
  } = Object(external_react_["useState"])("");
  const {
    0: setHeight,
    1: setHeightState
  } = Object(external_react_["useState"])("0px");
  const {
    0: setRotate,
    1: setRotateState
  } = Object(external_react_["useState"])(accordionIcon);
  const {
    0: setId,
    1: setChangeId
  } = Object(external_react_["useState"])(false);
  const contents = Object(external_react_["useRef"])(null);

  function toggleAccordion() {
    setChangeId(!setId);
    setActiveState(setActive === "" ? active : "");
    setHeightState( //@ts-ignore
    setActive === active ? "0px" : `${contents.current.scrollHeight}px`);
    setRotateState(setActive === active ? accordionIcon : [accordionIcon, rotate].join(' '));
  }

  return Accordion_jsx("div", {
    className: accordionSection
  }, Accordion_jsx("button", {
    onClick: toggleAccordion,
    className: [accordion, setActive].join(' ')
  }, Accordion_jsx("p", {
    className: accordionTitle
  }, title), Accordion_jsx(Chevron, {
    className: `${setRotate}`,
    width: 10,
    fill: "#003459"
  })), Accordion_jsx("div", {
    className: accordionContent,
    ref: contents,
    style: {
      maxHeight: `${setHeight}`
    }
  }, Accordion_jsx("div", {
    className: accordiontext,
    dangerouslySetInnerHTML: {
      __html: answer
    }
  })));
};
// CONCATENATED MODULE: ./components/ServiceContent/ServiceContent.tsx
var ServiceContent_jsx = external_react_default.a.createElement;




const ServiceContent = ({
  name,
  src,
  minPrice,
  description,
  accordionArray
}) => {
  const {
    Ccontainer,
    heading,
    content,
    details,
    image,
    text,
    accordionContainer
  } = ServiceContent_module_default.a;
  return ServiceContent_jsx("div", {
    className: Ccontainer
  }, ServiceContent_jsx("h1", {
    className: heading
  }, name), ServiceContent_jsx("div", {
    className: content
  }, ServiceContent_jsx("div", {
    className: details
  }, ServiceContent_jsx("div", {
    className: image
  }, ServiceContent_jsx("img", {
    src: src,
    alt: name
  })), ServiceContent_jsx("div", {
    className: text
  }, description.map((ex, index) => ServiceContent_jsx("p", {
    key: index,
    dangerouslySetInnerHTML: {
      __html: ex
    }
  })), ServiceContent_jsx("h2", null, "a partir de : ", ServiceContent_jsx("span", null, " ", minPrice), " dh")), ServiceContent_jsx("div", {
    className: accordionContainer
  }, accordionArray.map(ex => ServiceContent_jsx(Accordion, {
    key: ex.id,
    title: ex.title,
    answer: ex.answer
  }))))));
};

/* harmony default export */ var ServiceContent_ServiceContent = (ServiceContent);
// CONCATENATED MODULE: ./pages/services/[id]/index.tsx

var _id_jsx = external_react_default.a.createElement;





 // import dynamic from 'next/dynamic'
// const SideNav = dynamic(() => import('../../../components/SideNav/SideNav'));
// const ServiceContent = dynamic(() => import('../../../components/ServiceContent/ServiceContent'));
// const ServiceWrapper = dynamic(() => import('../../../components/ServiceWrapper/ServiceWrapper'));

const Product = ({
  name,
  accordion,
  nameList,
  src,
  description,
  minPrice
}) => {
  if (typeof name === 'undefined') {
    return _id_jsx("h1", null, " Error ");
  }

  if (false) { var width; }

  return _id_jsx(Layout["a" /* default */], {
    title: "Express Imprimerie Services"
  }, _id_jsx(ServiceWrapper_ServiceWrapper, null, width > 900 && _id_jsx(SideNav_SideNav, {
    nameList: nameList
  }), _id_jsx(ServiceContent_ServiceContent, {
    accordionArray: accordion,
    name: name,
    src: src,
    minPrice: minPrice,
    description: description
  })));
};

Product.getInitialProps = async ({
  query
}) => {
  const res = await fetch(`${server}/api/product/${query.id}`);
  const post = await res.json();
  return post;
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "WuiG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const carte = {
  minPrice: 249,
  values: {
    Taille: [{
      name: " ",
      value: " "
    }, {
      name: "8.5*5.5cm",
      value: "8.5*5.5cm"
    }, {
      name: "9*5.5cm",
      value: "9*5.5cm"
    }, {
      name: "9.5*5.5cm",
      value: "9.5*5.5cm"
    }],
    Quantité: [{
      name: " ",
      value: " "
    }, {
      name: "500",
      value: "500"
    }, {
      name: "1000",
      value: "1000"
    }, {
      name: "1500",
      value: "1500"
    }, {
      name: "2000",
      value: "2000"
    }],
    Conception: [{
      name: " ",
      value: " "
    }, {
      name: 'Oui',
      value: 'Oui'
    }, {
      name: 'Non',
      value: 'Non'
    }],
    Faces: [{
      name: " ",
      value: " "
    }, {
      name: "Recto",
      value: "Recto"
    }, {
      name: "Recto Verso",
      value: "Recto Verso"
    }],
    Pélliculage: [{
      name: " ",
      value: " "
    }, {
      name: 'mat',
      value: 'mat'
    }, {
      name: 'brillant',
      value: 'brillant'
    }],
    Papier: [{
      name: " ",
      value: " "
    }, {
      name: "300gr",
      value: "300gr"
    }]
  }
};
const flyer = {
  minPrice: 300,
  values: {
    Taille: [{
      name: " ",
      value: " "
    }, {
      name: "A6",
      value: "A6"
    }, {
      name: "A5",
      value: "A5"
    }, {
      name: "A4",
      value: "A4"
    }],
    Quantité: [{
      name: " ",
      value: " "
    }, {
      name: "500",
      value: "500"
    }, {
      name: "1000",
      value: "1000"
    }, {
      name: "1500",
      value: "1500"
    }, {
      name: "2000",
      value: "2000"
    }],
    Conception: [{
      name: " ",
      value: " "
    }, {
      name: 'Oui',
      value: 'Oui'
    }, {
      name: 'Non',
      value: 'Non'
    }],
    Papier: [{
      name: '',
      value: ''
    }, {
      name: '135g Brilant',
      value: '135g Brilant'
    }]
  }
};
const brochure = {
  minPrice: 100,
  values: {
    Taille: [{
      name: " ",
      value: " "
    }, {
      name: "A6",
      value: "A6"
    }, {
      name: "A5",
      value: "A5"
    }, {
      name: "A4",
      value: "A4"
    }],
    Quantité: [{
      name: " ",
      value: " "
    }, {
      name: "500",
      value: "500"
    }, {
      name: "1000",
      value: "1000"
    }, {
      name: "1500",
      value: "1500"
    }, {
      name: "2000",
      value: "2000"
    }],
    Conception: [{
      name: " ",
      value: " "
    }, {
      name: 'Oui',
      value: 'Oui'
    }, {
      name: 'Non',
      value: 'Non'
    }],
    Faces: [{
      name: " ",
      value: " "
    }, {
      name: "Recto",
      value: "Recto"
    }, {
      name: "Recto Verso",
      value: "Recto Verso"
    }]
  }
};
const poster = {
  minPrice: 299,
  values: {
    Taille: [{
      name: " ",
      value: " "
    }, {
      name: `15*15cm - Carré`,
      value: `15*15cm - Carré`
    }, {
      name: `20*20 cm - Carré`,
      value: `20*20 cm - Carré`
    }, {
      name: `30*30 cm - Carré`,
      value: `30*30 cm - Carré`
    }, {
      name: `40*50 cm - Rectangle`,
      value: `40*50 cm - Rectangle`
    }, {
      name: `50*75 cm - Rectangle`,
      value: `50*75 cm - Rectangle`
    }, {
      name: `70*100 cm - Rectangle`,
      value: `70*100 cm - Rectangle`
    }],
    Support: [{
      name: '',
      value: ''
    }, {
      name: 'Aliminium',
      value: 'Aliminium'
    }]
  }
};
const entete = {
  minPrice: 519,
  values: {
    Taille: [{
      name: " ",
      value: " "
    }, {
      name: "A4",
      value: "A4"
    }],
    Quantité: [{
      name: " ",
      value: " "
    }, {
      name: "500",
      value: "500"
    }, {
      name: "1000",
      value: "1000"
    }, {
      name: "1500",
      value: "1500"
    }, {
      name: "2000",
      value: "2000"
    }],
    Conception: [{
      name: " ",
      value: " "
    }, {
      name: 'Oui',
      value: 'Oui'
    }, {
      name: 'Non',
      value: 'Non'
    }],
    Faces: [{
      name: " ",
      value: " "
    }, {
      name: "Recto",
      value: "Recto"
    }, {
      name: "Recto Verso",
      value: "Recto Verso"
    }],
    Papier: [{
      name: " ",
      value: " "
    }, {
      name: "90gr",
      value: "90gr"
    }]
  }
};
const depliant = {
  minPrice: 100,
  values: {
    Taille: [{
      name: " ",
      value: " "
    }, {
      name: "A5",
      value: "A5"
    }, {
      name: "A4",
      value: "A4"
    }],
    Quantité: [{
      name: " ",
      value: " "
    }, {
      name: "25",
      value: "25"
    }, {
      name: "50",
      value: "50"
    }, {
      name: "100",
      value: "100"
    }, {
      name: "200",
      value: "200"
    }, {
      name: "500",
      value: "500"
    }, {
      name: "1000",
      value: "1000"
    }]
  }
};
const test = {
  minPrice: 100,
  values: {
    Taille: [{
      name: " ",
      value: " "
    }, {
      name: "A6",
      value: "A6"
    }, {
      name: "A5",
      value: "A5"
    }, {
      name: "A4",
      value: "A4"
    }, {
      name: "A4",
      value: "A4"
    }, {
      name: "A4",
      value: "A4"
    }]
  }
};
const details = [{
  name: `Sacs Publicitaire`,
  id: 0,
  src: '/assets/image11.webp',
  obj: test,
  content: {
    description: [`Parmi les nombreux objets promotionnels, le sac publicitaire est, aujourd’hui, un article incontournable pour mettre en avant votre communication. Sac en papier, en coton personnalisable, sac shopping ou cabas, le sac publicitaire est décliné dans de nombreux modèles et se retrouve dans tous les foyers. Offrant une grande surface de marquage, ce cadeau personnalisable pas cher est le moyen de se différencier auprès d’un large public à moindre coût.`],
    accordion: [{
      title: 'Modèle Classique',
      answer: 'Répondant à l’immense majorité des besoins, en polyester 175 µm de type bâche Blockout (qui enpêche la lumière de le traverser)',
      id: 0
    }, {
      title: 'Modèle XXL',
      answer: 'En tissu polyester Airtex, 330g/m2. Idéal pour un impact maximal et très pratique pour créer une séparation. Attention ce modèle grand format est beaucoup plus lourd et nécessite deux personnes pour le montage.',
      id: 1
    }, {
      title: 'Modèle Outdoor',
      answer: 'En tissus polyester 330g/m2. Prévu pour un usage en extérieur, imprimé sur deux faces. Ce Roll-up est montés sur un système à suspensions pour réduire la prise au vent.',
      id: 2
    }]
  }
}, {
  name: 'Cartes de Visite',
  id: 1,
  src: '/assets/image7.webp',
  obj: carte,
  content: {
    description: [` Element indispensable de votre communication personnelle ou professionnelle , votre carte de visite reflète votre personnalité ou l’image de votre entreprise.`, `Nous offrons un large éventail de possibilités pour produire une carte de visite à votre image : Carton jusqu’à 400g/m2, vernis UV, pelliculage mat, brillant ou soft touch (effet “peau de pêche”)`, `Le format 85×55 mm ne se limite pas à la simple carte de visite. Adoptez ce format pour tous vos besoins tels que l’impression de cartes
  de rendez-vous, cartes de fidélité ou tout autre élément de communication / marketing de votre activité professionnelle.`, `L’impression offset n’est pas recommandée pour les tirages inférieurs à 1’000 cartes de visite, optez plutôt pour l’impression numérique.
  C’est en revanche la solution idéale pour des tirages plus importants.`],
    accordion: [{
      title: 'Dans quels délais mes cartes seront-elles disponibles ?',
      answer: '<strong>Les impressions offset nécessitent un délai de production d’environ 10 jours</strong> (du jour de la commande à la mise à disposition). Pour des commandes plus urgentes nous vous proposons d’opter pour l’impression numérique.',
      id: 0
    }, {
      title: 'Quelle différence entre papier non couché et papier couché ?',
      answer: 'Notre papier offset non couché est un papier en cellulose sur lequel il est possible d’écrire et d’imprimer. Il est donc possible de le réutiliser dans les photocopieurs ou les imprimantes.<br> Le papier couché est recouvert d’une couche\n' + '                synthétique mate ou brillante qui permet d’obtenir une surface lisse et stable, plus élégante avec un rendu de qualité supérieure.',
      id: 1
    }, {
      title: "Proposez-vous d'autres types de papier ?",
      answer: 'Oui, nous proposons un choix important de papiers avec des aspects et des grammages différents. Des échantillons d’impressions sont disponibles dans nos succursales.',
      id: 2
    }, {
      title: 'Comment choisir entre numérique et offset ?',
      answer: 'De nombreux critères sont à prendre en compte. Nos collaborateurs sauront vous orienter vers de meilleur choix en fonction de vos besoins. Les critères principaux sont fonction du volume à imprimer (n fois la même page), du délai (environ\n' + '                    10 jours pour l’offset), du résultat attendu et des finitions souhaitées (échantillons avec l’ensemble des variantes disponibles dans nos succursales)<br>',
      id: 3
    }, {
      title: 'Quels formats de fichiers acceptez-vous ?',
      answer: 'Nous acceptons une grande variété de formats de fichiers, mais pour une impression offset réussie un certain nombre de paramètres doivent-être respectés. Consultez notre guide de préparation des documents dans la rubrique d’aide.',
      id: 4
    }, {
      title: "Peut-on imprimer dans d'autres dimensions ?",
      answer: 'Nos cartes de visite adoptent le format standard de 85 x 55 mm mais nous proposons de nombreuses alternatives en impression numérique ou impression offset.',
      id: 5
    }, {
      title: 'Proposez-vous des couleurs Pantone ?',
      answer: 'Oui, pour ce type de besoin veuillez demander un devis gratuit.',
      id: 6
    }]
  }
}, {
  name: 'Papier en-tête',
  id: 2,
  src: '/assets/image6.webp',
  obj: entete,
  content: {
    description: [`Vous devez imprimer plus d’une centaine de fois le même document A4 ? Papier à lettre, affichette, notice d’utilisation, courrier commercial, documentation interne ? La procédé d’impression offset est particulièrement recommandé pour allier qualité
  d’impression et maîtrise des coûts de production.`, `Nous imprimons vos documents en noir ou couleurs quadri, en recto ou recto/verso sur du papier offset jusqu’à 120g/m².`, `Pour des impressions à but marketing ou d’autres dimensions que le A4 nous vous recommandons de découvrir nos offres d’impression de  flyers et dépliants .`, `Pour vous permettre de comparer, nous tenons à votre disposition des échantillons d’impression dans chacune de nos filiales.`],
    accordion: [{
      title: 'Dans quels délais mes impressions seront-elles disponibles ?',
      answer: '<strong>Les impressions offset nécessitent un délai de production d’environ 8 à 10 jours</strong> (du jour de la commande à la mise à disposition). Pour des commandes plus urgentes nous vous proposons d’opter pour l’impression numérique.',
      id: 0
    }, {
      title: 'Quelle différence entre papier non couché et papier couché ?',
      answer: 'Notre papier offset non couché est un papier en cellulose sur lequel il est possible d’écrire et d’imprimer. Il est donc possible de le réutiliser dans les photocopieurs ou les imprimantes.<br> Le papier couché est recouvert d’une couche synthétique\n' + '                    mate ou brillante qui permet d’obtenir une surface lisse et stable, plus élégante avec un rendu de qualité supérieure.',
      id: 1
    }, {
      title: "Proposez-vous d'autres types de papier ?",
      answer: 'Oui, nous proposons un choix important de papiers avec des aspects et des grammages différents. Des échantillons d’impressions sont disponibles dans nos succursales.',
      id: 2
    }, {
      title: 'Comment choisir entre numérique et offset ?',
      answer: 'De nombreux critères sont à prendre en compte. Nos collaborateurs sauront vous orienter vers de meilleur choix en fonction de vos besoins. Les critères principaux sont fonction du volume à imprimer (n fois la même page), du délai (environ\n' + '                        10 jours pour l’offset), du résultat attendu et des finitions souhaitées (échantillons avec l’ensemble des variantes disponibles dans nos succursales)<br>',
      id: 3
    }, {
      title: 'Quels formats de fichiers acceptez-vous ?',
      answer: 'Nous acceptons une grande variété de formats de fichiers, mais pour une impression offset réussie un certain nombre de paramètres doivent-être respectés. Consultez notre guide de préparation des documents dans la rubrique d’aide.',
      id: 4
    }, {
      title: 'Peut-on imprimer sur un format autre que le A4 ?',
      answer: 'Oui, nous proposons de nombreux formats de papier, vous pouvez par exemple regarder les formats disponibles pour les flyers.',
      id: 5
    }, {
      title: 'Proposez-vous des couleurs Pantone ?',
      answer: 'Oui, pour ce type de besoin veuillez demander un devis gratuit.',
      id: 6
    }]
  }
}, {
  name: 'FLYERS',
  id: 3,
  src: '/assets/image8.webp',
  obj: flyer,
  content: {
    description: [`Vecteur de communication de main à main par excellence, le flyer est le moyen idéal pour annoncer un événement, promouvoir un service, mettre en lumière une activité.`, `Vos flyers véhiculent l’image de votre entreprise ou association, il est donc essentiel d’obtenir un résultat conforme à vos attentes.`, `Nous vous proposons une qualité d’impression premium tout en offrant un niveau de prix extrêmement attractif.`],
    accordion: [{
      title: 'Dans quels délais mes impressions seront-elles disponibles ?',
      answer: 'Les impressions offset nécessitent un délai de production de 10 jours (du jour de la commande à la mise à disposition). Pour des commandes plus urgentes nous vous proposons d’opter pour l’impression numérique.',
      id: 0
    }, {
      title: 'Quelle différence entre papier couché et non couché ?',
      answer: 'Notre papier offset non couché est un papier en cellulose sur lequel il est possible d’écrire et d’imprimer. Il est donc possible de le réutiliser dans les photocopieurs ou les imprimantes.<br> Le papier couché est recouvert d’une couche\n' + '                    synthétique mate ou brillante qui permet d’obtenir une surface lisse et stable, plus élégante avec un rendu de qualité supérieure.',
      id: 1
    }, {
      title: 'Comment choisir entre numérique et offset ?',
      answer: 'De nombreux critères sont à prendre en compte. Nos collaborateurs sauront vous orienter vers de meilleur choix en fonction de vos besoins. Les critères principaux sont fonction du volume à imprimer (n fois la même page), du délai (environ\n' + '                        10 jours pour l’offset), du résultat attendu et des finitions souhaitées (échantillons avec l’ensemble des variantes disponibles dans nos succursales)',
      id: 2
    }, {
      title: 'Quels formats de fichiers acceptez-vous ?',
      answer: 'Nous acceptons une grande variété de formats de fichiers, mais pour une impression offset réussie un certain nombre de paramètres doivent-être respectés. Consultez notre guide de préparation des documents dans la rubrique d’aide.',
      id: 3
    }, {
      title: "Peut-on imprimer sur d'autres formats de papier ?",
      answer: 'Oui, nous proposons un vaste choix de formats. Pour ces demandes spécifiques qui ne figurent pas sur le site vous pouvez demander un devis gratuit',
      id: 4
    }, {
      title: "Proposez-vous d'autres types de papier ?",
      answer: 'Oui, nous proposons un choix important de papiers avec des aspects et des grammages différents. Des échantillons d’impressions sont disponibles dans nos succursales.',
      id: 5
    }, {
      title: 'Proposez-vous des couleurs Pantone ?',
      answer: 'Oui, munissez vous de la référence de votre couleur et demandez un devis gratuit.',
      id: 6
    }]
  }
}, {
  name: 'DÉPLIANTS',
  id: 4,
  src: '/assets/image4.webp',
  obj: depliant,
  content: {
    description: [`Les dépliants sont le moyen idéal pour présenter les services de votre entreprise, le menu de votre restaurant, les tarifs de vos prestations, vos offres de voyages ou de croisières etc.`, `<b>Classiques dépliants </b>3 volets au format DL ou dépliants originaux carrés, nous proposons un vaste choix de formats et de finitions qui sauront s’adapter à vos exigences.`],
    accordion: [{
      title: "Qu'est-ce qu'un pli roulé ?",
      answer: 'Le document est plié sur lui même au tiers de sa longueur. C’est le format idéal pour l’ouverture progressive du document, afin que les pages soient lues dans un ordre précis.',
      id: 0
    }, {
      title: "Qu'est-ce qu'un pli accordéon ?",
      answer: 'C’est le pli en “Z” classique. Il est idéal pour que le contenu de la page soit lu “d’un bloc”',
      id: 1
    }, {
      title: 'Dans quels délais mes dépliants seront-ils disponibles ?',
      answer: '<strong>Les impressions offset nécessitent un délai de production d’environ 10 jours</strong> (du jour de la commande à la mise à disposition)',
      id: 2
    }, {
      title: 'Quelle différence entre papier non couché et papier couché ?',
      answer: 'Notre papier offset non couché est un papier en cellulose sur lequel il est possible d’écrire et d’imprimer. Il est donc possible de le réutiliser dans les photocopieurs ou les imprimantes.<br> Le papier couché est recouvert d’une couche\n' + '                    synthétique mate ou brillante qui permet d’obtenir une surface lisse et stable, plus élégante avec un rendu de qualité supérieure.',
      id: 3
    }, {
      title: "Proposez-vous d'autres types de papier ?",
      answer: 'Oui, nous proposons un choix important de papiers avec des aspects et des grammages différents. Des échantillons d’impressions sont disponibles dans nos succursales.',
      id: 4
    }, {
      title: 'Quels formats de fichiers acceptez-vous ?',
      answer: 'Nous acceptons une grande variété de formats de fichiers, mais pour une impression offset réussie un certain nombre de paramètres doivent-être respectés. Consultez notre guide de préparation des documents dans la rubrique d’aide.',
      id: 5
    }, {
      title: 'Proposez-vous des couleurs Pantone ?',
      answer: 'Oui, pour ce type de besoin veuillez demander un devis gratuit',
      id: 6
    }]
  }
}, {
  name: `BLOC-NOTES`,
  id: 5,
  obj: brochure,
  src: '/assets/image5.webp',
  content: {
    description: [`Prises de notes, prises de commande, objets publicitaires … Imprimez vos bloc-notes à l’image de votre entreprise, c’est le support idéal pour véhiculer votre image par le biais d’un objet utile. Nos tarifs sont particulièrement avantageux : Imprimez par exemple 100 bloc-notes A4 pour seulement CHF 4.54 / pièce TTC !`, `Les bloc-notes sont également indispensables en restauration. Pour la prise de vos commandes, vos 100 bloc-notes 105 x 210 mm ne vous coûteront que&nbsp;CHF 2.41 / pièce TTC !`],
    accordion: [{
      title: 'Dans quels délais mes bloc-notes seront-ils disponibles ?',
      answer: '<strong>Les impressions offset nécessitent un délai de production d’environ 10 jours</strong> (du jour de la commande à la mise à disposition). Pour des commandes plus urgentes nous vous proposons d’opter pour l’impression numérique.',
      id: 0
    }, {
      title: 'Le contenu des pages est-il libre ?',
      answer: 'Totalement. Comme pour des impressions classiques, nous imprimons exactement ce que vous désirez voir apparaître sur les pages.',
      id: 1
    }, {
      title: 'Quelle différence entre papier non couché et papier couché ?',
      answer: 'Notre papier offset non couché est un papier en cellulose sur lequel il est possible d’écrire et d’imprimer. Il est donc possible de le réutiliser dans les photocopieurs ou les imprimantes.<br> Le papier couché est recouvert d’une couche synthétique\n' + '                    mate ou brillante qui permet d’obtenir une surface lisse et stable, plus élégante avec un rendu de qualité supérieure.',
      id: 2
    }, {
      title: "Proposez-vous d'autres types de papier ?",
      answer: 'Tous les types de papiers disponibles pour l’impression de bloc-notes sont intégrés dans notre calculateur. Vous pouvez voir des échantillons dans chacune de nos succursales.',
      id: 3
    }, {
      title: 'Quels formats de fichiers acceptez-vous ?',
      answer: 'Nous acceptons une grande variété de formats de fichiers, mais pour une impression offset réussie un certain nombre de paramètres doivent-être respectés. Consultez notre guide de préparation des documents dans la rubrique d’aide.',
      id: 4
    }, {
      title: 'Proposez-vous des couleurs Pantone ?',
      answer: 'Nous ne proposons pas de couleur Pantone pour l’impression de bloc-notes',
      id: 5
    }]
  }
}, {
  name: `ROLL-UPS`,
  id: 6,
  src: '/assets/image10.webp',
  obj: brochure,
  content: {
    description: [`Conçu pour signaler efficacement votre activité, le roll-up est le support idéal pour toutes les manifestations, foires ou expositions. C’est aussi un allié publicitaire efficace pour un point de vente ou un restaurant si vous souhaitez attirer l’attention
  sur un élément particulier.`, `Facile à transporter et à monter, le roll-up vous accompagne partout.`, `Nous proposons divers formats adaptés à un usage en intérieur ou en extérieur.`, `Tous nos Roll-ups sont livrés prêts à être utilisés. L’étui de transport est inclus dans le prix de chaque modèle.`],
    accordion: [{
      title: 'Modèle Classique',
      answer: 'Répondant à l’immense majorité des besoins, en polyester 175 µm de type bâche Blockout (qui enpêche la lumière de le traverser)',
      id: 0
    }, {
      title: 'Modèle XXL',
      answer: 'En tissu polyester Airtex, 330g/m2. Idéal pour un impact maximal et très pratique pour créer une séparation. Attention ce modèle grand format est beaucoup plus lourd et nécessite deux personnes pour le montage.',
      id: 1
    }, {
      title: 'Modèle Outdoor',
      answer: 'En tissus polyester 330g/m2. Prévu pour un usage en extérieur, imprimé sur deux faces. Ce Roll-up est montés sur un système à suspensions pour réduire la prise au vent.',
      id: 2
    }]
  }
}, {
  name: `POSTERS`,
  id: 7,
  src: '/assets/image8.webp',
  obj: poster,
  content: {
    description: [`Exposition, séminaire, stand, affichage sur le lieu de vente ou toutes formes d’affichage commercial … L’affiche est un puissant vecteur de communication aux multiples déclinaisons.`, `Nous imprimons vos affiches sur de nombreux formats, du A3 au A0.`, `Le procédé d’impression offset est recommandé pour tous les tirages supérieurs à 10 affiches. Pour des petits tirages ( moins de 10 affiches ), privilégiez l’impression numérique`, `Il s’agit de la solution idéale pour allier rendu professionnel et maîtrise des coûts.`, `Pour vous permettre de comparer, nous tenons à votre disposition des échantillons d’impression dans chacune de nos filiales.`],
    accordion: [{
      title: 'Dans quels délais mes impressions seront-elles disponibles ?',
      answer: '<strong><strong>Les impressions offset nécessitent un délai de production d’environ 10 jours</strong> (du jour de la commande à la mise à disposition). Pour des commandes plus urgentes nous vous proposons d’opter pour l’impression numérique.</strong>',
      id: 0
    }, {
      title: 'Quelle différence entre papier non couché et papier couché ?',
      answer: '<strong>Notre papier offset non couché est un papier en cellulose sur lequel il est possible d’écrire et d’imprimer. Il est donc possible de le réutiliser dans les photocopieurs ou les imprimantes.<br>\n' + '                    Le papier couché est recouvert d’une couche synthétique mate ou brillante qui permet d’obtenir une surface lisse et stable, plus élégante avec un rendu de qualité supérieure.</strong>',
      id: 1
    }, {
      title: "Proposez-vous d'autres types de papier ?",
      answer: '<strong>Oui, nous proposons un choix important de papiers avec des aspects et des grammages différents. Des échantillons d’impressions sont disponibles dans nos succursales.</strong>',
      id: 2
    }, {
      title: 'Comment choisir entre numérique et offset ?',
      answer: '<strong>De nombreux critères sont à prendre en compte. Nos collaborateurs sauront vous orienter vers de meilleur choix en fonction de vos besoins. Les critères principaux sont fonction du volume à imprimer (n fois la même page), du délai (environ 10 jours pour l’offset), du résultat attendu et des finitions souhaitées (échantillons avec l’ensemble des variantes disponibles dans nos succursales)<br>\n' + '                    </strong>',
      id: 3
    }, {
      title: 'Quels formats de fichiers acceptez-vous ?',
      answer: '<strong>Nous acceptons une grande variété de formats de fichiers, mais pour une impression offset réussie un certain nombre de paramètres doivent-être respectés.  Consultez notre guide de préparation des documents dans la rubrique d’aide.</strong>',
      id: 4
    }, {
      title: 'Peut-on imprimer un format irrégulier ?',
      answer: '<strong>Pour continuer à appliquer un tarif très avantageux nous restreignons les formats disponibles aux standards usuels. Pour un format spécifique nous vous recommandons l’impression numérique.</strong>',
      id: 5
    }]
  }
}, {
  name: `Boite`,
  id: 8,
  src: '/assets/image12.webp',
  obj: poster,
  content: {
    description: [`description`],
    accordion: [{
      title: 'question ?',
      answer: '<strong>answer</strong>',
      id: 0
    }]
  }
}, {
  name: `Bonde`,
  id: 9,
  src: '/assets/image13.webp',
  obj: poster,
  content: {
    description: [`description`],
    accordion: [{
      title: 'question ?',
      answer: '<strong>answer</strong>',
      id: 0
    }]
  }
}];
/* harmony default export */ __webpack_exports__["a"] = (details);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "a6wa":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blue": "#264653",
	"gray": "#4b595b",
	"orange": "#e76f51",
	"dropdown": "DropDown_dropdown__10rBW",
	"dropdownContent": "DropDown_dropdownContent__1w5NQ",
	"dropdownUl": "DropDown_dropdownUl__suYsj",
	"dropdownLi": "DropDown_dropdownLi__15nXw"
};


/***/ }),

/***/ "apO0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__("yzvi");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// CONCATENATED MODULE: ./components/Header/Logo.tsx
var __jsx = external_react_default.a.createElement;

const Logo = ({
  colors,
  width,
  height,
  className,
  viewBox = "0 0 240 50"
}) => {
  const {
    stroke,
    fill
  } = colors;
  return __jsx("svg", {
    width: width,
    height: height,
    viewBox: viewBox,
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, __jsx("line", {
    className: "svg-line",
    stroke: stroke,
    y1: "-0.5",
    x2: "170.37",
    y2: "0.478023",
    transform: "matrix(0.999987 -0.00519196 0.00539179 0.999985 10 38.98)"
  }), __jsx("path", {
    className: "svg-circles",
    stroke: stroke,
    fill: fill,
    d: "M54.3323 40.2483C50.4144 44.2621 45.1028 47.0904 39.1774 48.3181C33.2519 49.5457 27.0247 49.1079 21.41 47.069C15.7952 45.0302 11.0888 41.4976 7.98152 36.9899C4.87428 32.4822 3.52995 27.237 4.1459 22.0241C4.76185 16.8113 7.30563 11.9055 11.4038 8.02701C15.5019 4.14852 20.9386 1.50163 26.9155 0.474941C32.8925 -0.551751 39.0949 0.095841 44.6122 2.32264C50.1295 4.54944 54.671 8.23815 57.57 12.8472L56.0658 13.5464C53.3407 9.21386 49.0717 5.74648 43.8855 3.65328C38.6992 1.56009 32.8689 0.951354 27.2506 1.91644C21.6323 2.88153 16.5218 5.36961 12.6696 9.01539C8.81729 12.6612 6.42614 17.2726 5.84715 22.1727C5.26815 27.0727 6.53182 32.0033 9.45263 36.2405C12.3734 40.4777 16.7975 43.7984 22.0754 45.7149C27.3532 47.6314 33.2068 48.0429 38.7767 46.889C44.3467 45.735 49.3395 43.0764 53.0223 39.3034L54.3323 40.2483Z"
  }), __jsx("g", {
    className: "express"
  }, __jsx("path", {
    className: "lettre letter-0",
    stroke: stroke,
    fill: fill,
    d: "M24.2656 28.9453L24.5 30C23.8906 30 22.7812 30.0234 21.1719 30.0703C19.5781 30.1328 18.4219 30.1641 17.7031 30.1641C16.5469 30.1641 15.7578 30.1094 15.3359 30C15.4922 28.2812 15.5859 25.4062 15.6172 21.375C15.6484 17.3438 15.75 14.5312 15.9219 12.9375C16.4531 12.9844 17.8594 13.0234 20.1406 13.0547C22.4375 13.0859 23.9375 13.1562 24.6406 13.2656L24.8984 14.3203C24.1953 14.4453 22.7891 14.5938 20.6797 14.7656C18.5703 14.9375 17.4609 15.0312 17.3516 15.0469C17.3672 15.4062 17.3984 16.1406 17.4453 17.25C17.5078 18.3594 17.5469 19.2734 17.5625 19.9922C18.0938 20.0547 19.0625 20.1484 20.4688 20.2734C21.875 20.3828 22.7656 20.4531 23.1406 20.4844L23.375 21.5625C20.0781 21.8594 18.1484 22.0156 17.5859 22.0312C17.5859 22.7188 17.5703 23.7656 17.5391 25.1719C17.5234 26.5625 17.5156 27.5859 17.5156 28.2422C21.0938 28.5703 23.3438 28.8047 24.2656 28.9453Z"
  }), __jsx("path", {
    className: "lettre letter-1",
    stroke: stroke,
    fill: fill,
    d: "M26.3516 30.5859L25.3438 30.0469C25.75 29.0312 26.8125 27.0625 28.5312 24.1406C27.625 22.9062 26.5938 20.8516 25.4375 17.9766H26.4688C27.0469 19.1953 28.0234 20.7812 29.3984 22.7344C29.6328 22.4062 29.9375 21.8984 30.3125 21.2109C30.7031 20.5234 31.0781 19.9297 31.4375 19.4297C31.8125 18.9297 32.2344 18.4922 32.7031 18.1172C33.2656 18.4297 33.5469 18.7969 33.5469 19.2188C33.5469 19.4531 33.4922 19.6797 33.3828 19.8984C32.9609 20.4141 32.4219 21.2266 31.7656 22.3359C31.1094 23.4453 30.7031 24.1172 30.5469 24.3516C32.2031 26.6641 33.3203 28.4062 33.8984 29.5781C33.8984 30.1719 33.6328 30.4688 33.1016 30.4688C32.5703 30.4688 32.1641 30.2109 31.8828 29.6953C31.6016 28.7578 30.8594 27.4297 29.6562 25.7109C29.3906 26.1484 28.8438 26.9453 28.0156 28.1016C27.2031 29.2422 26.6484 30.0703 26.3516 30.5859Z"
  }), __jsx("path", {
    className: "lettre letter-2",
    stroke: stroke,
    fill: fill,
    d: "M35.1172 17.6719L36.4297 17.9062C36.4297 18.2344 36.4375 18.4766 36.4531 18.6328C37.3125 18.0859 38.1797 17.8125 39.0547 17.8125C40.4766 17.8125 41.5859 18.4219 42.3828 19.6406C43.1797 20.8594 43.5781 22.2422 43.5781 23.7891C43.5781 24.5703 43.5156 25.3203 43.3906 26.0391C43.2812 26.7422 43.0781 27.4688 42.7812 28.2188C42.4844 28.9531 42.0234 29.5469 41.3984 30C40.7891 30.4375 40.0469 30.6562 39.1719 30.6562C38.3438 30.6562 37.5469 30.4375 36.7812 30C36.8438 32.7344 36.8984 34.7656 36.9453 36.0938C36.8047 36.5781 36.5312 36.8203 36.125 36.8203C35.8438 36.8203 35.5703 36.7031 35.3047 36.4688C35.0547 36.25 34.8984 35.9766 34.8359 35.6484L35.1172 17.6719ZM36.6406 20.1562L36.7109 27.7266C36.8984 28.1016 37.1875 28.4062 37.5781 28.6406C37.9688 28.8594 38.3984 28.9688 38.8672 28.9688C39.4766 28.9688 39.9922 28.7734 40.4141 28.3828C40.8516 27.9922 41.1562 27.4766 41.3281 26.8359C41.5156 26.1797 41.6406 25.5703 41.7031 25.0078C41.7812 24.4453 41.8203 23.8516 41.8203 23.2266C41.8203 20.5703 40.9219 19.2422 39.125 19.2422C38.5469 19.2422 38.0078 19.3281 37.5078 19.5C37.0234 19.6562 36.7344 19.875 36.6406 20.1562Z"
  }), __jsx("path", {
    className: "lettre letter-3",
    stroke: stroke,
    fill: fill,
    d: "M53.2109 21.0703L52.1797 21C51.8516 20.125 51.2969 19.6875 50.5156 19.6875C50.1719 19.6875 49.8047 19.7656 49.4141 19.9219C49.0391 20.0781 48.7266 20.2422 48.4766 20.4141C48.2266 20.5703 47.8984 20.8047 47.4922 21.1172C47.4922 21.3359 47.4844 22.0469 47.4688 23.25C47.4688 24.4531 47.4766 25.7891 47.4922 27.2578C47.5234 28.7266 47.5547 29.5156 47.5859 29.625C47.4453 30.0938 47.1719 30.3281 46.7656 30.3281C46.4844 30.3281 46.2109 30.2188 45.9453 30C45.6953 29.7656 45.5391 29.4844 45.4766 29.1562C45.7734 24.1406 46.0391 20.3516 46.2734 17.7891L47.3281 18.0234L47.3984 19.5938C48.4922 18.6875 49.4297 18.2344 50.2109 18.2344C51.0703 18.2344 51.7891 18.4297 52.3672 18.8203C52.9609 19.2109 53.2578 19.7812 53.2578 20.5312C53.2578 20.7656 53.2422 20.9453 53.2109 21.0703Z"
  }), __jsx("path", {
    className: "lettre letter-4",
    stroke: stroke,
    fill: fill,
    d: "M63.6406 27.7266L63.875 28.7578C63.1875 29.0078 62.1641 29.2891 60.8047 29.6016C59.4609 29.8984 58.4609 30.0469 57.8047 30.0469C57.1328 30.0469 56.5469 29.8281 56.0469 29.3906C55.5469 28.9375 55.1719 28.3672 54.9219 27.6797C54.6719 26.9766 54.4844 26.2891 54.3594 25.6172C54.25 24.9297 54.1953 24.2578 54.1953 23.6016C54.1953 19.6953 55.9609 17.7422 59.4922 17.7422C60.3359 17.7422 61.0781 18.0156 61.7188 18.5625C62.3594 19.0938 62.6797 19.7891 62.6797 20.6484C62.6797 21.1172 62.5469 21.5312 62.2812 21.8906C62.0312 22.25 61.7188 22.5391 61.3438 22.7578C60.9844 22.9609 60.5156 23.1484 59.9375 23.3203C59.375 23.4922 58.875 23.6172 58.4375 23.6953C58 23.7734 57.4766 23.8594 56.8672 23.9531C56.2578 24.0469 55.8359 24.1172 55.6016 24.1641C55.6172 24.6172 55.6406 25.0156 55.6719 25.3594C55.7188 25.7031 55.7969 26.0781 55.9062 26.4844C56.0312 26.875 56.1875 27.2031 56.375 27.4688C56.5781 27.7188 56.8516 27.9297 57.1953 28.1016C57.5391 28.2734 57.9453 28.3594 58.4141 28.3594C58.9766 28.3594 59.6641 28.3125 60.4766 28.2188C61.2891 28.1094 62.0078 28 62.6328 27.8906C63.2734 27.7812 63.6094 27.7266 63.6406 27.7266ZM55.6953 22.7109C57.8203 22.1016 59.5625 21.4609 60.9219 20.7891C60.8125 20.2734 60.6641 19.8984 60.4766 19.6641C60.2891 19.4297 60.0078 19.3125 59.6328 19.3125C58.6797 19.3125 57.8125 19.6406 57.0312 20.2969C56.2656 20.9531 55.8203 21.7578 55.6953 22.7109Z"
  }), __jsx("path", {
    className: "lettre letter-5",
    stroke: stroke,
    fill: fill,
    d: "M72.0312 18.7031L71.7969 19.6406C70.2812 19.0156 69.1016 18.7031 68.2578 18.7031C67.5078 18.7031 66.9766 18.8203 66.6641 19.0547C66.3672 19.2734 66.2188 19.75 66.2188 20.4844C66.2188 21.0781 66.4297 21.5703 66.8516 21.9609C67.2891 22.3516 67.8125 22.6641 68.4219 22.8984C69.0312 23.1172 69.6406 23.3594 70.25 23.625C70.875 23.875 71.3984 24.25 71.8203 24.75C72.2578 25.25 72.4766 25.8672 72.4766 26.6016C72.4766 27.6016 72.1094 28.4766 71.375 29.2266C70.6406 29.9766 69.6875 30.3594 68.5156 30.375C67.6562 30.375 66.8516 30.1953 66.1016 29.8359C65.3516 29.4766 64.7578 29.0234 64.3203 28.4766L65 27.7734C65.1875 27.8516 65.4609 27.9766 65.8203 28.1484C66.1953 28.3203 66.4609 28.4375 66.6172 28.5C66.7734 28.5469 67 28.6016 67.2969 28.6641C67.6094 28.7266 67.9375 28.7578 68.2812 28.7578C69.0156 28.7578 69.6172 28.5938 70.0859 28.2656C70.5547 27.9375 70.7891 27.4766 70.7891 26.8828C70.7891 26.4922 70.6797 26.1641 70.4609 25.8984C70.2422 25.6172 69.9531 25.3906 69.5938 25.2188C69.2344 25.0469 68.8359 24.8828 68.3984 24.7266C67.9766 24.5703 67.5469 24.3984 67.1094 24.2109C66.6875 24.0078 66.2969 23.7734 65.9375 23.5078C65.5781 23.2266 65.2891 22.8516 65.0703 22.3828C64.8516 21.9141 64.7422 21.3594 64.7422 20.7188C64.7422 19.7812 64.9922 19 65.4922 18.375C66.0078 17.7344 66.7266 17.4141 67.6484 17.4141C68.0078 17.4141 68.4141 17.4688 68.8672 17.5781C69.3203 17.6875 69.6797 17.7891 69.9453 17.8828C70.2109 17.9766 70.6016 18.1328 71.1172 18.3516C71.6484 18.5547 71.9531 18.6719 72.0312 18.7031Z"
  }), __jsx("path", {
    className: "lettre letter-6",
    stroke: stroke,
    fill: fill,
    d: "M81.125 18.7031L80.8906 19.6406C79.375 19.0156 78.1953 18.7031 77.3516 18.7031C76.6016 18.7031 76.0703 18.8203 75.7578 19.0547C75.4609 19.2734 75.3125 19.75 75.3125 20.4844C75.3125 21.0781 75.5234 21.5703 75.9453 21.9609C76.3828 22.3516 76.9062 22.6641 77.5156 22.8984C78.125 23.1172 78.7344 23.3594 79.3438 23.625C79.9688 23.875 80.4922 24.25 80.9141 24.75C81.3516 25.25 81.5703 25.8672 81.5703 26.6016C81.5703 27.6016 81.2031 28.4766 80.4688 29.2266C79.7344 29.9766 78.7812 30.3594 77.6094 30.375C76.75 30.375 75.9453 30.1953 75.1953 29.8359C74.4453 29.4766 73.8516 29.0234 73.4141 28.4766L74.0938 27.7734C74.2812 27.8516 74.5547 27.9766 74.9141 28.1484C75.2891 28.3203 75.5547 28.4375 75.7109 28.5C75.8672 28.5469 76.0938 28.6016 76.3906 28.6641C76.7031 28.7266 77.0312 28.7578 77.375 28.7578C78.1094 28.7578 78.7109 28.5938 79.1797 28.2656C79.6484 27.9375 79.8828 27.4766 79.8828 26.8828C79.8828 26.4922 79.7734 26.1641 79.5547 25.8984C79.3359 25.6172 79.0469 25.3906 78.6875 25.2188C78.3281 25.0469 77.9297 24.8828 77.4922 24.7266C77.0703 24.5703 76.6406 24.3984 76.2031 24.2109C75.7812 24.0078 75.3906 23.7734 75.0312 23.5078C74.6719 23.2266 74.3828 22.8516 74.1641 22.3828C73.9453 21.9141 73.8359 21.3594 73.8359 20.7188C73.8359 19.7812 74.0859 19 74.5859 18.375C75.1016 17.7344 75.8203 17.4141 76.7422 17.4141C77.1016 17.4141 77.5078 17.4688 77.9609 17.5781C78.4141 17.6875 78.7734 17.7891 79.0391 17.8828C79.3047 17.9766 79.6953 18.1328 80.2109 18.3516C80.7422 18.5547 81.0469 18.6719 81.125 18.7031Z"
  })), __jsx("g", {
    className: "imprimerie"
  }, __jsx("path", {
    className: "lettre letter-7",
    stroke: stroke,
    fill: fill,
    d: "M89.3047 30.0703L89.2578 28.9219C90.6953 28.6875 91.5859 28.5625 91.9297 28.5469C91.9453 28.0156 91.9531 27.2188 91.9531 26.1562C91.9531 24.75 91.9219 22.7266 91.8594 20.0859C91.7969 17.4297 91.7578 15.6719 91.7422 14.8125L89.375 14.6953L89.2109 13.3359C89.8516 13.3516 90.8438 13.3594 92.1875 13.3594C93.5625 13.3594 94.5859 13.3672 95.2578 13.3828L95.3281 14.5547C95.0625 14.6641 94.6875 14.7344 94.2031 14.7656C93.7188 14.7812 93.4141 14.7969 93.2891 14.8125C93.3359 15.25 93.3594 16.3516 93.3594 18.1172C93.375 19.8828 93.3828 21.8359 93.3828 23.9766C93.3828 26.1172 93.3984 27.6406 93.4297 28.5469C93.6797 28.5938 94.1562 28.6484 94.8594 28.7109C95.5625 28.7734 96 28.8203 96.1719 28.8516L96.125 30.0703C95.6562 30.0547 94.9141 30.0469 93.8984 30.0469C93.3672 30.0469 92.5781 30.0469 91.5312 30.0469C90.4844 30.0625 89.7422 30.0703 89.3047 30.0703Z"
  }), __jsx("path", {
    className: "lettre letter-8",
    stroke: stroke,
    fill: fill,
    d: "M104 20.7188C104.062 21.5938 104.109 22.6328 104.141 23.8359C104.172 25.0234 104.195 26.2266 104.211 27.4453C104.242 28.6641 104.266 29.4922 104.281 29.9297C103.938 30.0234 103.617 30.0703 103.32 30.0703C103.086 30.0703 102.867 30.0312 102.664 29.9531C102.617 29.3438 102.586 28.6484 102.57 27.8672C102.555 27.0859 102.547 26.3984 102.547 25.8047C102.547 25.1953 102.531 24.5625 102.5 23.9062C102.484 23.25 102.445 22.6875 102.383 22.2188C102.32 21.75 102.227 21.3203 102.102 20.9297C101.977 20.5234 101.797 20.2109 101.562 19.9922C101.344 19.7734 101.07 19.6562 100.742 19.6406C100.414 19.6406 100.148 19.7109 99.9453 19.8516C99.7422 19.9922 99.5234 20.25 99.2891 20.625V29.9062C99.0547 30.0312 98.7734 30.0938 98.4453 30.0938C98.1953 30.0938 97.9141 30.0547 97.6016 29.9766C97.6484 28.9922 97.6797 27.0547 97.6953 24.1641C97.7109 21.2734 97.7734 19.1328 97.8828 17.7422L98.9375 17.9766L99.0078 19.1719C99.4766 18.4375 100.07 18.0703 100.789 18.0703C101.852 18.0703 102.75 18.5391 103.484 19.4766C103.938 18.5391 104.672 18.0703 105.688 18.0703C106.094 18.0703 106.445 18.1172 106.742 18.2109C108.445 18.6953 109.297 20.875 109.297 24.75C109.297 25.3125 109.273 26.0703 109.227 27.0234C109.195 27.9609 109.18 28.5938 109.18 28.9219C109.18 29.3594 109.203 29.7188 109.25 30C108.438 30.2188 107.945 30.3281 107.773 30.3281C107.617 30.3281 107.508 30.3125 107.445 30.2812C107.383 30.0781 107.352 29.7031 107.352 29.1562C107.352 28.8125 107.375 28.1094 107.422 27.0469C107.469 25.9688 107.492 25.125 107.492 24.5156C107.492 21.2656 106.852 19.625 105.57 19.5938C105.273 19.6094 105.016 19.7031 104.797 19.875C104.578 20.0312 104.312 20.3125 104 20.7188Z"
  }), __jsx("path", {
    className: "lettre letter-9",
    stroke: stroke,
    fill: fill,
    d: "M111.477 17.6719L112.789 17.9062C112.789 18.2344 112.797 18.4766 112.812 18.6328C113.672 18.0859 114.539 17.8125 115.414 17.8125C116.836 17.8125 117.945 18.4219 118.742 19.6406C119.539 20.8594 119.938 22.2422 119.938 23.7891C119.938 24.5703 119.875 25.3203 119.75 26.0391C119.641 26.7422 119.438 27.4688 119.141 28.2188C118.844 28.9531 118.383 29.5469 117.758 30C117.148 30.4375 116.406 30.6562 115.531 30.6562C114.703 30.6562 113.906 30.4375 113.141 30C113.203 32.7344 113.258 34.7656 113.305 36.0938C113.164 36.5781 112.891 36.8203 112.484 36.8203C112.203 36.8203 111.93 36.7031 111.664 36.4688C111.414 36.25 111.258 35.9766 111.195 35.6484L111.477 17.6719ZM113 20.1562L113.07 27.7266C113.258 28.1016 113.547 28.4062 113.938 28.6406C114.328 28.8594 114.758 28.9688 115.227 28.9688C115.836 28.9688 116.352 28.7734 116.773 28.3828C117.211 27.9922 117.516 27.4766 117.688 26.8359C117.875 26.1797 118 25.5703 118.062 25.0078C118.141 24.4453 118.18 23.8516 118.18 23.2266C118.18 20.5703 117.281 19.2422 115.484 19.2422C114.906 19.2422 114.367 19.3281 113.867 19.5C113.383 19.6562 113.094 19.875 113 20.1562Z"
  }), __jsx("path", {
    className: "lettre letter-10",
    stroke: stroke,
    fill: fill,
    d: "M129.57 21.0703L128.539 21C128.211 20.125 127.656 19.6875 126.875 19.6875C126.531 19.6875 126.164 19.7656 125.773 19.9219C125.398 20.0781 125.086 20.2422 124.836 20.4141C124.586 20.5703 124.258 20.8047 123.852 21.1172C123.852 21.3359 123.844 22.0469 123.828 23.25C123.828 24.4531 123.836 25.7891 123.852 27.2578C123.883 28.7266 123.914 29.5156 123.945 29.625C123.805 30.0938 123.531 30.3281 123.125 30.3281C122.844 30.3281 122.57 30.2188 122.305 30C122.055 29.7656 121.898 29.4844 121.836 29.1562C122.133 24.1406 122.398 20.3516 122.633 17.7891L123.688 18.0234L123.758 19.5938C124.852 18.6875 125.789 18.2344 126.57 18.2344C127.43 18.2344 128.148 18.4297 128.727 18.8203C129.32 19.2109 129.617 19.7812 129.617 20.5312C129.617 20.7656 129.602 20.9453 129.57 21.0703Z"
  }), __jsx("path", {
    className: "lettre letter-11",
    stroke: stroke,
    fill: fill,
    d: "M131.07 17.9531L132.148 18.1875C132.273 19.4688 132.383 21.4844 132.477 24.2344C132.57 26.9688 132.633 28.6641 132.664 29.3203C132.523 29.8047 132.25 30.0469 131.844 30.0469C131.562 30.0469 131.289 29.9375 131.023 29.7188C130.773 29.4844 130.617 29.2031 130.555 28.875C130.586 28.2344 130.648 26.5703 130.742 23.8828C130.836 21.1797 130.945 19.2031 131.07 17.9531ZM131.398 13.7578C131.82 13.7578 132.172 13.9453 132.453 14.3203C132.734 14.6797 132.875 15.0938 132.875 15.5625C132.875 15.9062 132.789 16.1875 132.617 16.4062C132.461 16.6094 132.242 16.7109 131.961 16.7109C131.523 16.7109 131.18 16.5312 130.93 16.1719C130.68 15.8125 130.555 15.3906 130.555 14.9062C130.555 14.5625 130.625 14.2891 130.766 14.0859C130.922 13.8672 131.133 13.7578 131.398 13.7578Z"
  }), __jsx("path", {
    className: "lettre letter-12",
    stroke: stroke,
    fill: fill,
    d: "M141.195 20.7188C141.258 21.5938 141.305 22.6328 141.336 23.8359C141.367 25.0234 141.391 26.2266 141.406 27.4453C141.438 28.6641 141.461 29.4922 141.477 29.9297C141.133 30.0234 140.812 30.0703 140.516 30.0703C140.281 30.0703 140.062 30.0312 139.859 29.9531C139.812 29.3438 139.781 28.6484 139.766 27.8672C139.75 27.0859 139.742 26.3984 139.742 25.8047C139.742 25.1953 139.727 24.5625 139.695 23.9062C139.68 23.25 139.641 22.6875 139.578 22.2188C139.516 21.75 139.422 21.3203 139.297 20.9297C139.172 20.5234 138.992 20.2109 138.758 19.9922C138.539 19.7734 138.266 19.6562 137.938 19.6406C137.609 19.6406 137.344 19.7109 137.141 19.8516C136.938 19.9922 136.719 20.25 136.484 20.625V29.9062C136.25 30.0312 135.969 30.0938 135.641 30.0938C135.391 30.0938 135.109 30.0547 134.797 29.9766C134.844 28.9922 134.875 27.0547 134.891 24.1641C134.906 21.2734 134.969 19.1328 135.078 17.7422L136.133 17.9766L136.203 19.1719C136.672 18.4375 137.266 18.0703 137.984 18.0703C139.047 18.0703 139.945 18.5391 140.68 19.4766C141.133 18.5391 141.867 18.0703 142.883 18.0703C143.289 18.0703 143.641 18.1172 143.938 18.2109C145.641 18.6953 146.492 20.875 146.492 24.75C146.492 25.3125 146.469 26.0703 146.422 27.0234C146.391 27.9609 146.375 28.5938 146.375 28.9219C146.375 29.3594 146.398 29.7188 146.445 30C145.633 30.2188 145.141 30.3281 144.969 30.3281C144.812 30.3281 144.703 30.3125 144.641 30.2812C144.578 30.0781 144.547 29.7031 144.547 29.1562C144.547 28.8125 144.57 28.1094 144.617 27.0469C144.664 25.9688 144.688 25.125 144.688 24.5156C144.688 21.2656 144.047 19.625 142.766 19.5938C142.469 19.6094 142.211 19.7031 141.992 19.875C141.773 20.0312 141.508 20.3125 141.195 20.7188Z"
  }), __jsx("path", {
    className: "lettre letter-13",
    stroke: stroke,
    fill: fill,
    d: "M157.836 27.7266L158.07 28.7578C157.383 29.0078 156.359 29.2891 155 29.6016C153.656 29.8984 152.656 30.0469 152 30.0469C151.328 30.0469 150.742 29.8281 150.242 29.3906C149.742 28.9375 149.367 28.3672 149.117 27.6797C148.867 26.9766 148.68 26.2891 148.555 25.6172C148.445 24.9297 148.391 24.2578 148.391 23.6016C148.391 19.6953 150.156 17.7422 153.688 17.7422C154.531 17.7422 155.273 18.0156 155.914 18.5625C156.555 19.0938 156.875 19.7891 156.875 20.6484C156.875 21.1172 156.742 21.5312 156.477 21.8906C156.227 22.25 155.914 22.5391 155.539 22.7578C155.18 22.9609 154.711 23.1484 154.133 23.3203C153.57 23.4922 153.07 23.6172 152.633 23.6953C152.195 23.7734 151.672 23.8594 151.062 23.9531C150.453 24.0469 150.031 24.1172 149.797 24.1641C149.812 24.6172 149.836 25.0156 149.867 25.3594C149.914 25.7031 149.992 26.0781 150.102 26.4844C150.227 26.875 150.383 27.2031 150.57 27.4688C150.773 27.7188 151.047 27.9297 151.391 28.1016C151.734 28.2734 152.141 28.3594 152.609 28.3594C153.172 28.3594 153.859 28.3125 154.672 28.2188C155.484 28.1094 156.203 28 156.828 27.8906C157.469 27.7812 157.805 27.7266 157.836 27.7266ZM149.891 22.7109C152.016 22.1016 153.758 21.4609 155.117 20.7891C155.008 20.2734 154.859 19.8984 154.672 19.6641C154.484 19.4297 154.203 19.3125 153.828 19.3125C152.875 19.3125 152.008 19.6406 151.227 20.2969C150.461 20.9531 150.016 21.7578 149.891 22.7109Z"
  }), __jsx("path", {
    className: "lettre letter-14",
    stroke: stroke,
    fill: fill,
    d: "M166.742 21.0703L165.711 21C165.383 20.125 164.828 19.6875 164.047 19.6875C163.703 19.6875 163.336 19.7656 162.945 19.9219C162.57 20.0781 162.258 20.2422 162.008 20.4141C161.758 20.5703 161.43 20.8047 161.023 21.1172C161.023 21.3359 161.016 22.0469 161 23.25C161 24.4531 161.008 25.7891 161.023 27.2578C161.055 28.7266 161.086 29.5156 161.117 29.625C160.977 30.0938 160.703 30.3281 160.297 30.3281C160.016 30.3281 159.742 30.2188 159.477 30C159.227 29.7656 159.07 29.4844 159.008 29.1562C159.305 24.1406 159.57 20.3516 159.805 17.7891L160.859 18.0234L160.93 19.5938C162.023 18.6875 162.961 18.2344 163.742 18.2344C164.602 18.2344 165.32 18.4297 165.898 18.8203C166.492 19.2109 166.789 19.7812 166.789 20.5312C166.789 20.7656 166.773 20.9453 166.742 21.0703Z"
  }), __jsx("path", {
    className: "lettre letter-15",
    stroke: stroke,
    fill: fill,
    d: "M168.242 17.9531L169.32 18.1875C169.445 19.4688 169.555 21.4844 169.648 24.2344C169.742 26.9688 169.805 28.6641 169.836 29.3203C169.695 29.8047 169.422 30.0469 169.016 30.0469C168.734 30.0469 168.461 29.9375 168.195 29.7188C167.945 29.4844 167.789 29.2031 167.727 28.875C167.758 28.2344 167.82 26.5703 167.914 23.8828C168.008 21.1797 168.117 19.2031 168.242 17.9531ZM168.57 13.7578C168.992 13.7578 169.344 13.9453 169.625 14.3203C169.906 14.6797 170.047 15.0938 170.047 15.5625C170.047 15.9062 169.961 16.1875 169.789 16.4062C169.633 16.6094 169.414 16.7109 169.133 16.7109C168.695 16.7109 168.352 16.5312 168.102 16.1719C167.852 15.8125 167.727 15.3906 167.727 14.9062C167.727 14.5625 167.797 14.2891 167.938 14.0859C168.094 13.8672 168.305 13.7578 168.57 13.7578Z"
  }), __jsx("path", {
    className: "lettre letter-16",
    stroke: stroke,
    fill: fill,
    d: "M181.414 27.7266L181.648 28.7578C180.961 29.0078 179.938 29.2891 178.578 29.6016C177.234 29.8984 176.234 30.0469 175.578 30.0469C174.906 30.0469 174.32 29.8281 173.82 29.3906C173.32 28.9375 172.945 28.3672 172.695 27.6797C172.445 26.9766 172.258 26.2891 172.133 25.6172C172.023 24.9297 171.969 24.2578 171.969 23.6016C171.969 19.6953 173.734 17.7422 177.266 17.7422C178.109 17.7422 178.852 18.0156 179.492 18.5625C180.133 19.0938 180.453 19.7891 180.453 20.6484C180.453 21.1172 180.32 21.5312 180.055 21.8906C179.805 22.25 179.492 22.5391 179.117 22.7578C178.758 22.9609 178.289 23.1484 177.711 23.3203C177.148 23.4922 176.648 23.6172 176.211 23.6953C175.773 23.7734 175.25 23.8594 174.641 23.9531C174.031 24.0469 173.609 24.1172 173.375 24.1641C173.391 24.6172 173.414 25.0156 173.445 25.3594C173.492 25.7031 173.57 26.0781 173.68 26.4844C173.805 26.875 173.961 27.2031 174.148 27.4688C174.352 27.7188 174.625 27.9297 174.969 28.1016C175.312 28.2734 175.719 28.3594 176.188 28.3594C176.75 28.3594 177.438 28.3125 178.25 28.2188C179.062 28.1094 179.781 28 180.406 27.8906C181.047 27.7812 181.383 27.7266 181.414 27.7266ZM173.469 22.7109C175.594 22.1016 177.336 21.4609 178.695 20.7891C178.586 20.2734 178.438 19.8984 178.25 19.6641C178.062 19.4297 177.781 19.3125 177.406 19.3125C176.453 19.3125 175.586 19.6406 174.805 20.2969C174.039 20.9531 173.594 21.7578 173.469 22.7109Z"
  })));
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/DropDown/DropDown.module.scss
var DropDown_module = __webpack_require__("a6wa");
var DropDown_module_default = /*#__PURE__*/__webpack_require__.n(DropDown_module);

// CONCATENATED MODULE: ./components/DropDown/DropDown.tsx
var DropDown_jsx = external_react_default.a.createElement;



const DropDown = ({
  toggleDropDown,
  toggleNav,
  content
}) => {
  const {
    dropdownContent,
    dropdownUl,
    dropdownLi
  } = DropDown_module_default.a;
  return DropDown_jsx("div", {
    onMouseLeave: toggleDropDown,
    className: dropdownContent
  }, DropDown_jsx("ul", {
    className: dropdownUl
  }, content.map((ex, index) => {
    let url = `/services/${ex.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
    return DropDown_jsx(link_default.a, {
      key: index,
      as: url,
      href: `/services/${ex}`
    }, DropDown_jsx("li", {
      className: dropdownLi,
      onClick: () => {
        toggleDropDown();
        toggleNav();
      }
    }, DropDown_jsx("a", null, ex)));
  })));
};
// EXTERNAL MODULE: ./utils/sample-data.ts
var sample_data = __webpack_require__("WuiG");

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// CONCATENATED MODULE: ./components/Header/Header.tsx
var Header_jsx = external_react_default.a.createElement;








const Burger = () => Header_jsx(external_react_default.a.Fragment, null, Header_jsx("div", null), Header_jsx("div", null), Header_jsx("div", null));

const {
  bubble,
  headerStyle,
  Nav,
  navbarContentList,
  navbarAnchor,
  dropdown,
  blue,
  orange,
  burger,
  burgerX
} = Header_module_default.a;
const Header = ({
  height
}) => {
  const {
    0: isNavVisible,
    1: setIsNavVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: isSmallScreen,
    1: setisSmallScreen
  } = Object(external_react_["useState"])(false);
  const {
    0: isDropVisible,
    1: setisDropVisible
  } = Object(external_react_["useState"])(false); //change color on scroll

  Object(external_react_["useEffect"])(() => {
    if (height) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (height) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  Object(external_react_["useEffect"])(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    return mediaQuery.matches ? setisSmallScreen(false) : setisSmallScreen(true);
  };

  const headerColorChange = () => {
    const pageHeight = window.pageYOffset;
    const element = document.querySelector("header");

    if (pageHeight > height) {
      element.style.backgroundColor = blue;
    } else {
      element.style.backgroundColor = orange;
    }
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleDropDown = () => {
    // onOneHover(0)
    setisDropVisible(!isDropVisible);
  };

  const onOneHover = id => {
    const styl = document.querySelector(`.${bubble}`);

    if (id === 0) {
      styl.style.width = '0px';
      styl.style.height = '0px';
    } else {
      const elem = document.getElementsByClassName(`${navbarAnchor}`)[id];
      const firstElem = elem.getBoundingClientRect();
      const left = elem.offsetLeft;
      styl.style.left = `${left}px`;
      styl.style.width = `${firstElem.width}px`;
      styl.style.height = `${firstElem.height / 4}px`;
    }
  };

  const nameList = [];
  Object.values(sample_data["a" /* default */]).map(ex => nameList.push(ex.name));
  return Header_jsx("header", {
    className: headerStyle
  }, Header_jsx(link_default.a, {
    href: "/"
  }, Header_jsx("a", null, Header_jsx(Logo, {
    colors: {
      stroke: "#fdfffc",
      fill: "none"
    },
    width: "250",
    height: "60",
    className: "logo-svg"
  }))), Header_jsx(external_react_transition_group_["CSSTransition"], {
    in: isSmallScreen || isNavVisible,
    timeout: 350,
    classNames: "NavAnimation",
    unmountOnExit: true
  }, Header_jsx("nav", {
    className: Nav
  }, Header_jsx("ul", {
    className: navbarContentList
  }, Header_jsx("li", {
    onClick: () => isDropVisible ? null : toggleDropDown(),
    onMouseEnter: () => isDropVisible ? null : toggleDropDown(),
    className: dropdown
  }, Header_jsx("a", {
    onMouseOver: () => onOneHover(0),
    className: [navbarAnchor].join()
  }, "SERVICES"), Header_jsx(external_react_transition_group_["CSSTransition"], {
    in: isDropVisible,
    timeout: 350,
    classNames: "DropAnimation",
    unmountOnExit: true
  }, Header_jsx(DropDown, {
    toggleDropDown: toggleDropDown,
    toggleNav: toggleNav,
    content: nameList
  }))), Header_jsx("li", null, Header_jsx("a", {
    onMouseOver: () => onOneHover(1),
    className: navbarAnchor,
    href: "/#section-about"
  }, "Pourquoi Nous?")), Header_jsx("li", null, Header_jsx("a", {
    onMouseOver: () => onOneHover(2),
    className: navbarAnchor,
    href: "/#section-contact"
  }, "Contact")), Header_jsx("div", {
    className: bubble
  })))), Header_jsx("div", {
    onClick: toggleNav,
    className: !isNavVisible ? burger : [burger, burgerX].join(' ')
  }, Header_jsx(Burger, null)));
};
// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__("kzqI");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// EXTERNAL MODULE: ./components/svg/Facebook.tsx
var Facebook = __webpack_require__("wUH0");

// EXTERNAL MODULE: ./components/svg/Instagram.tsx
var Instagram = __webpack_require__("ogQf");

// EXTERNAL MODULE: ./components/svg/WhatsApp.tsx
var WhatsApp = __webpack_require__("1N5A");

// CONCATENATED MODULE: ./components/Footer/Footer.tsx
var Footer_jsx = external_react_default.a.createElement;






const Footer = ({}) => {
  const {
    footer,
    content,
    aboutUs,
    socials,
    icons
  } = Footer_module_default.a;
  return Footer_jsx("footer", {
    className: footer
  }, Footer_jsx("div", {
    className: content
  }, Footer_jsx("nav", {
    className: aboutUs
  }, Footer_jsx("h1", null, "A Propos"), Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx("a", {
    href: "#section-contact"
  }, " Contact")), Footer_jsx("li", null, " ", Footer_jsx("a", {
    href: "#section-about"
  }, "Pourqoui Nous?"), " "), Footer_jsx("li", null, Footer_jsx("a", {
    href: "#section-products"
  }, " Products")))), Footer_jsx("nav", {
    className: socials
  }, Footer_jsx("h1", null, "Socials"), Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "https://www.facebook.com/Limprimeur-107384444097355/?ref=bookmarks"
  }, Footer_jsx("a", {
    className: icons,
    target: "blank"
  }, Footer_jsx(Facebook["a" /* Facebook */], null)))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "https://www.instagram.com/express.imprimerie/"
  }, Footer_jsx("a", {
    className: icons,
    target: "blank"
  }, Footer_jsx(Instagram["a" /* Instagram */], null)))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/"
  }, Footer_jsx("a", {
    className: icons
  }, Footer_jsx(WhatsApp["a" /* WhatsApp */], null))))))));
};
// EXTERNAL MODULE: ./components/Socials/Socials.module.scss
var Socials_module = __webpack_require__("q836");
var Socials_module_default = /*#__PURE__*/__webpack_require__.n(Socials_module);

// CONCATENATED MODULE: ./components/Socials/Socials.tsx
var Socials_jsx = external_react_default.a.createElement;





const Socials = ({}) => {
  const {
    container,
    ul
  } = Socials_module_default.a;
  return Socials_jsx("div", {
    className: container
  }, Socials_jsx("ul", {
    className: ul
  }, Socials_jsx("li", null, Socials_jsx("a", {
    target: "blank",
    href: "https://www.instagram.com/express.imprimerie/"
  }, Socials_jsx(Instagram["a" /* Instagram */], null))), Socials_jsx("li", null, Socials_jsx("a", {
    target: "blank",
    href: "https://www.facebook.com/Limprimeur-107384444097355/?ref=bookmarks"
  }, Socials_jsx(Facebook["a" /* Facebook */], null))), Socials_jsx("li", null, Socials_jsx("a", {
    href: "https://wa.me/212663152249"
  }, Socials_jsx(WhatsApp["a" /* WhatsApp */], null)))));
};
// CONCATENATED MODULE: ./components/Layout.tsx
var Layout_jsx = external_react_default.a.createElement;






const Layout = ({
  children,
  title = 'This is the default title'
}) => Layout_jsx("main", null, Layout_jsx(head_default.a, null, Layout_jsx("title", null, title), Layout_jsx("meta", {
  charSet: "utf-8"
}), Layout_jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
}), Layout_jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/apple-touch-icon.png"
}), Layout_jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicon-32x32.png"
}), Layout_jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicon-16x16.png"
}), Layout_jsx("link", {
  rel: "manifest",
  href: "/site.webmanifest"
}), Layout_jsx("link", {
  rel: "mask-icon",
  href: "/safari-pinned-tab.svg",
  color: "#5bbad5"
}), Layout_jsx("meta", {
  name: "msapplication-TileColor",
  content: "#da532c"
}), Layout_jsx("meta", {
  name: "theme-color",
  content: "#dcdada"
}), Layout_jsx("script", {
  defer: true,
  dangerouslySetInnerHTML: {
    __html: `
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5f07505b67771f3813c0be7d/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
        `
  }
})), Layout_jsx(Header, {
  height: 400
}), Layout_jsx(Socials, null), children, Layout_jsx(Footer, null));

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _utils = __webpack_require__("kYf9");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "jqOM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getWindowDimensions() {
  const {
    innerWidth: width
  } = window;
  return {
    width
  };
}

function useWindowDimensions() {
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWindowDimensions());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kzqI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blue": "#264653",
	"gray": "#4b595b",
	"orange": "#e76f51",
	"icons": "Footer_icons__1kJgl",
	"footer": "Footer_footer__3f33N",
	"content": "Footer_content__1bpu6",
	"aboutUs": "Footer_aboutUs__3IlbQ",
	"socials": "Footer_socials__3zRTC",
	"credit": "Footer_credit__3-qP8"
};


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "ogQf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Instagram; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SQJ2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Instagram = () => {
  return __jsx(_SvgHolder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    viewBox: "0 0 24 24",
    width: "20px",
    height: "20px"
  }, __jsx("path", {
    d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  }));
};

/***/ }),

/***/ "q836":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blue": "#264653",
	"gray": "#4b595b",
	"orange": "#e76f51",
	"container": "Socials_container__2KFrR",
	"all": "Socials_all__3DjTr",
	"ul": "Socials_ul__snw5c"
};


/***/ }),

/***/ "wUH0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facebook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SQJ2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Facebook = () => {
  return __jsx(_SvgHolder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    viewBox: "0 0 24 24",
    width: "20px",
    height: "20px"
  }, __jsx("path", {
    d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
  }));
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yzvi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blue": "#264653",
	"gray": "#4b595b",
	"orange": "#e76f51",
	"burger": "Header_burger__1XfcK",
	"BurgerX": "Header_BurgerX__15_6t",
	"dropdown": "Header_dropdown__2MFms",
	"headerStyle": "Header_headerStyle__3TpZw",
	"Nav": "Header_Nav__2cKO_",
	"navbarContentList": "Header_navbarContentList__3eucL",
	"Logo": "Header_Logo__39LML",
	"navbarAnchor": "Header_navbarAnchor__K6FI6",
	"dropbtn": "Header_dropbtn__3DX6k",
	"bubble": "Header_bubble__1ABrk"
};


/***/ })

/******/ });