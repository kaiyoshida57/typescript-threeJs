/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/common/common.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/common/common.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n/* 使い方：\\n.hoge {\\n\\tfont-size: 12px;\\n\\t@include var.responsive(md) {\\n\\t\\tfont-size: 14px;\\n\\t}\\n}\\n*/\\n/* A Modern CSS Reset */\\n/* https://coliss.com/articles/build-websites/operation/css/css-reset-for-modern-browser.html */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nspan,\\nbutton,\\ninput,\\nselect,\\nfigure,\\nblockquote,\\ndiv,\\ndd,\\ndl,\\ndt,\\ntable,\\ntd,\\nth {\\n  margin: 0;\\n}\\n\\nul,\\nol {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n[role=list],\\nol[role=list],\\nli {\\n  list-style: none;\\n}\\n\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  height: 100%;\\n  min-height: 100vh;\\n}\\n\\nbody {\\n  font-size: 1.6rem;\\n  line-height: 1.5;\\n  color: #363636;\\n  font-family: \\\"Roboto Condensed\\\", \\\"Noto Sans JP\\\", \\\"Helvetica Neue\\\", Arial, \\\"Hiragino Kaku Gothic ProN\\\", \\\"Hiragino Sans\\\", Meiryo, sans-serif;\\n  text-rendering: optimizeSpeed;\\n}\\n\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\nsmall {\\n  font-size: 1rem;\\n}\\n\\npicture {\\n  display: block;\\n}\\n\\nimg,\\npicture {\\n  display: block;\\n  max-width: 100%;\\n}\\n\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n}\\n\\nbutton {\\n  background: inherit;\\n  cursor: pointer;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\ntable {\\n  width: 100%;\\n  border-spacing: 0;\\n}\\n\\nth,\\ntd {\\n  padding: 0;\\n}\\n\\naddress {\\n  font-style: normal;\\n}\\n\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n.body {\\n  background-color: #f1e08e;\\n}\\n\\n.wrapper {\\n  margin: 0 auto;\\n  width: 100%;\\n  max-width: 1200px;\\n  padding: 40px 16px;\\n}\\n\\n.text {\\n  color: #363636;\\n  font-size: 3rem;\\n  text-align: center;\\n  padding: 0 0 20px;\\n  margin: 0 0 20px;\\n}\\n\\n.myCanvas {\\n  margin: 0 auto;\\n}\\n\\n.control-list {\\n  display: flex;\\n  padding: 0 40px;\\n  gap: 0 16px;\\n  margin: 8px auto 0;\\n}\\n\\n.control-list__btn {\\n  border: solid 1px #555;\\n  background-color: #ddd;\\n  border-radius: 2px;\\n  padding: 2px 10px;\\n  margin-right: 8px;\\n  margin-bottom: 8px;\\n  min-width: 117px;\\n}\\n@media (hover: hover) and (pointer: fine) {\\n  .control-list__btn:hover {\\n    background-color: #efefef;\\n  }\\n}\\n\\n.voice {\\n  color: #4a78bd;\\n  font-weight: bold;\\n  font-size: 20px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/sass/common/common.scss\",\"webpack://./src/sass/_modules/_variables.scss\",\"webpack://./src/sass/_modules/_base.scss\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;AC4BhB;;;;;;;CAAA;AC1BA,uBAAA;AACA,+FAAA;AAEA;;;EAGC,sBAAA;AFOD;;AEJA;;;;;;;;;;;;;;;;;;;;;EAqBC,SAAA;AFOD;;AEJA;;EAEC,SAAA;EACA,UAAA;AFOD;;AEJA;;;EAGC,gBAAA;AFOD;;AEJA;EACC,uBAAA;AFOD;;AEJA;EACC,gBAAA;EACA,YAAA;EACA,iBAAA;AFOD;;AEJA;EACC,iBAAA;EACA,gBAAA;EACA,cD1DW;EC2DX,0IAAA;EAEA,6BAAA;AFMD;;AEHA;EACC,8BAAA;AFMD;;AEHA;EACC,eAAA;AFMD;;AEHA;EACC,cAAA;AFMD;;AEHA;;EAEC,cAAA;EACA,eAAA;AFMD;;AEHA;;;;EAIC,aAAA;EACA,SAAA;EACA,UAAA;EACA,SAAA;AFMD;;AEHA;EACC,mBAAA;EACA,eAAA;AFMD;;AEHA;EACC,qBAAA;AFMD;;AEHA;EACC,WAAA;EACA,iBAAA;AFMD;;AEJA;;EAEC,UAAA;AFOD;;AELA;EACC,kBAAA;AFQD;;AELA;EACC;IACC,qBAAA;EFQA;EELD;;;IAGC,qCAAA;IACA,uCAAA;IACA,sCAAA;IACA,gCAAA;EFOA;AACF;AAlIA;EACC,yBAAA;AAoID;;AAjIA;EACC,cAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;AAoID;;AAjIA;EACC,cCdW;EDeX,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AAoID;;AAjIA;EACC,cAAA;AAoID;;AAjIA;EACC,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AAoID;;AAlIA;EACC,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAqID;AAnIE;EADD;IAEE,yBAAA;EAsID;AACF;;AAlIA;EAEC,cAAA;EACA,iBAAA;EACA,eAAA;AAoID\",\"sourcesContent\":[\"@use \\\"../_modules/index\\\";\\n\\n@use \\\"../_modules/_variables\\\" as v;\\n\\n.body {\\n\\tbackground-color: #f1e08e;\\n}\\n\\n.wrapper {\\n\\tmargin: 0 auto;\\n\\twidth: 100%;\\n\\tmax-width: 1200px;\\n\\tpadding: 40px 16px;\\n}\\n\\n.text {\\n\\tcolor: v.$textBlack;\\n\\tfont-size: 3rem;\\n\\ttext-align: center;\\n\\tpadding: 0 0 20px;\\n\\tmargin: 0 0 20px;\\n}\\n\\n.myCanvas {\\n\\tmargin: 0 auto;\\n}\\n\\n.control-list {\\n\\tdisplay: flex;\\n\\tpadding: 0 40px;\\n\\tgap: 0 16px;\\n\\tmargin: 8px auto 0;\\n}\\n.control-list__btn {\\n\\tborder: solid 1px #555;\\n\\tbackground-color: #ddd;\\n\\tborder-radius: 2px;\\n\\tpadding: 2px 10px;\\n\\tmargin-right: 8px;\\n\\tmargin-bottom: 8px;\\n\\tmin-width: 117px;\\n\\t&:hover {\\n\\t\\t@media (hover: hover) and (pointer: fine) {\\n\\t\\t\\tbackground-color: #efefef;\\n\\t\\t}\\n\\t}\\n}\\n\\n.voice {\\n\\t// display: none;\\n\\tcolor: #4a78bd;\\n\\tfont-weight: bold;\\n\\tfont-size: 20px;\\n}\\n\",\"// color\\r\\n$baseGreen: #009944;\\r\\n$textBlack: #363636;\\r\\n$bgGrey: #F2F2F2;\\r\\n\\r\\n\\r\\n// breakpoints\\r\\n$breakpoints: (\\r\\n\\t'xl': (max-width: 1279px),\\r\\n\\t'lg': (max-width: 1023px),\\r\\n\\t'mdmin': (min-width: 768px),\\r\\n\\t'md': (max-width: 767px),\\r\\n\\t'sm': (max-width: 639px),\\r\\n\\t'xs': (max-width: 339px),\\r\\n) !default;\\r\\n\\r\\n@mixin responsive($breakpoint) {\\r\\n  @if map-has-key($breakpoints, $breakpoint) {\\r\\n    @media screen and #{inspect(map-get($breakpoints, $breakpoint))} {\\r\\n      @content;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  // マップ型で定義されていない値が呼び出された時はエラーを返す\\r\\n  @else {\\r\\n    @error \\\"指定されたブレークポイントは定義されていません。\\\" + \\\"指定できるブレークポイントは次のとおりです。 -> #{map-keys($breakpoints)}\\\";\\r\\n  }\\r\\n}\\r\\n/* 使い方：\\r\\n.hoge {\\r\\n\\tfont-size: 12px;\\r\\n\\t@include var.responsive(md) {\\r\\n\\t\\tfont-size: 14px;\\r\\n\\t}\\r\\n}\\r\\n*/\\r\\n\",\"@use \\\"./variables\\\" as var;\\n\\n/* A Modern CSS Reset */\\n/* https://coliss.com/articles/build-websites/operation/css/css-reset-for-modern-browser.html */\\n\\n*,\\n*::before,\\n*::after {\\n\\tbox-sizing: border-box;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nspan,\\nbutton,\\ninput,\\nselect,\\nfigure,\\nblockquote,\\ndiv,\\ndd,\\ndl,\\ndt,\\ntable,\\ntd,\\nth {\\n\\tmargin: 0;\\n}\\n\\nul,\\nol {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n}\\n\\n[role=\\\"list\\\"],\\nol[role=\\\"list\\\"],\\nli {\\n\\tlist-style: none;\\n}\\n\\nhtml:focus-within {\\n\\tscroll-behavior: smooth;\\n}\\n\\nhtml {\\n\\tfont-size: 62.5%;\\n\\theight: 100%;\\n\\tmin-height: 100vh;\\n}\\n\\nbody {\\n\\tfont-size: 1.6rem;\\n\\tline-height: 1.5;\\n\\tcolor: var.$textBlack;\\n\\tfont-family: \\\"Roboto Condensed\\\", \\\"Noto Sans JP\\\", \\\"Helvetica Neue\\\", Arial,\\n\\t\\t\\\"Hiragino Kaku Gothic ProN\\\", \\\"Hiragino Sans\\\", Meiryo, sans-serif;\\n\\ttext-rendering: optimizeSpeed;\\n}\\n\\na:not([class]) {\\n\\ttext-decoration-skip-ink: auto;\\n}\\n\\nsmall {\\n\\tfont-size: 1rem;\\n}\\n\\npicture {\\n\\tdisplay: block;\\n}\\n\\nimg,\\npicture {\\n\\tdisplay: block;\\n\\tmax-width: 100%;\\n}\\n\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n\\tfont: inherit;\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n}\\n\\nbutton {\\n\\tbackground: inherit;\\n\\tcursor: pointer;\\n}\\n\\na {\\n\\ttext-decoration: none;\\n}\\n\\ntable {\\n\\twidth: 100%;\\n\\tborder-spacing: 0;\\n}\\nth,\\ntd {\\n\\tpadding: 0;\\n}\\naddress {\\n\\tfont-style: normal;\\n}\\n\\n@media (prefers-reduced-motion: reduce) {\\n\\thtml:focus-within {\\n\\t\\tscroll-behavior: auto;\\n\\t}\\n\\n\\t*,\\n\\t*::before,\\n\\t*::after {\\n\\t\\tanimation-duration: 0.01ms !important;\\n\\t\\tanimation-iteration-count: 1 !important;\\n\\t\\ttransition-duration: 0.01ms !important;\\n\\t\\tscroll-behavior: auto !important;\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tutorial-typescript-three/./src/sass/common/common.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tutorial-typescript-three/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    return [content].concat([sourceMapping]).join(\"\\n\");\n  }\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack://tutorial-typescript-three/./node_modules/css-loader/dist/runtime/sourceMaps.js?");

/***/ }),

/***/ "./src/sass/common/common.scss":
/*!*************************************!*\
  !*** ./src/sass/common/common.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./common.scss */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/common/common.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tutorial-typescript-three/./src/sass/common/common.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tutorial-typescript-three/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tutorial-typescript-three/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tutorial-typescript-three/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tutorial-typescript-three/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tutorial-typescript-three/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tutorial-typescript-three/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/_modules/init.ts":
/*!*********************************!*\
  !*** ./src/js/_modules/init.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _sass_common_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sass/common/common.scss */ \"./src/sass/common/common.scss\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// ※TypeScript解説コメントには★を付けています。\n// import 文を使ってscssファイルを読み込む。\n\n\nfunction init() {\n    // サイズを指定\n    // ★TSでは変数宣言に型を宣言させられる。以下の場合number型。\n    const width = 800;\n    const height = 500;\n    // レンダラーを作成\n    // ★TSではas構文や<型>表記とのような型アサーションの指定方法がある。JSXとの混同避ける為に基本的に前者を使うのが良さそう。\n    const canvasElement = document.querySelector(\"#myCanvas\");\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n        canvas: canvasElement,\n    });\n    // サイズ指定。デフォルトは300,150\n    renderer.setSize(width, height);\n    // シーンを作成\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    // カメラを作成\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(45, width / height);\n    camera.position.set(0, 250, +1000);\n    camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0)); // 指定座標に強制的に向かせる\n    // 箱を作成\n    // *箱などのメッシュという表示オブジェクトを作るには、ジオメトリ（形状）とマテリアル（素材）の二種類を用意する必要がある。\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(400, 400, 400);\n    const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshNormalMaterial();\n    const box = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material);\n    scene.add(box);\n    //let id: number = 0; // キャンセルするためのID（数字）\n    let isStop = true; // 止めるor動かす為の真偽値\n    let isReverse = false; // 逆に動かす為の真偽値\n    tick();\n    // 毎フレーム時に実行されるループイベントです\n    function tick() {\n        // アニメーション処理をここに書く\n        if (isReverse) {\n            box.rotation.y += -0.05;\n        }\n        else {\n            box.rotation.y += 0.05;\n        }\n        // box.rotation.z += 0.01;\n        renderer.render(scene, camera); // レンダリング\n        if (!isStop) {\n            requestAnimationFrame(tick);\n        }\n    }\n    // 早める/遅らす場合に実行されるイベント\n    const tickFastSlowly = (mes, num) => {\n        if (num > 0) {\n            box.rotation.y += num;\n            isReverse = false;\n        }\n        else {\n            box.rotation.y += num;\n            isReverse = true;\n        }\n        // console.log(box.rotation.y);\n        const voiceElm = document.querySelector(\".voice\");\n        voiceElm.style.display = \"block\";\n        voiceElm.innerHTML = mes;\n        renderer.render(scene, camera); // レンダリング\n        if (!isStop) {\n            requestAnimationFrame(tick);\n        }\n    };\n    // | ここからボタン操作処理 |\n    const btnStopStart = document.querySelector(\".stopOrStart\");\n    const btnFast = document.querySelector(\".fast\");\n    const btnSlowly = document.querySelector(\".slowly\");\n    // *** 止めるボタン ***\n    if (btnStopStart) {\n        btnStopStart.addEventListener(\"click\", (e) => {\n            const target = e.target;\n            if (target.classList.contains(\"is-stop\")) {\n                // 文字のclass付け替え\n                target.classList.toggle(\"is-stop\");\n                target.innerHTML = \"回転を止める\";\n                // 動かす処理\n                isStop = false;\n                requestAnimationFrame(tick);\n            }\n            else {\n                // 文字のclass付け替え\n                target.classList.toggle(\"is-stop\");\n                target.innerHTML = \"回転させる\";\n                // 止める為の変数代入\n                isStop = true;\n            }\n        });\n        // cancelAnimationFrame(id);\n    }\n    // *** 早めるボタン ***\n    if (btnFast) {\n        btnFast.addEventListener(\"click\", () => {\n            tickFastSlowly(\"早めました！\", 0.05);\n        });\n    }\n    // *** 遅らすボタン ***\n    if (btnSlowly) {\n        btnSlowly.addEventListener(\"click\", () => {\n            tickFastSlowly(\"逆に早めました！\", -0.05);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://tutorial-typescript-three/./src/js/_modules/init.ts?");

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_modules/init */ \"./src/js/_modules/init.ts\");\n\n// ページの読み込みを待つ\nwindow.addEventListener(\"DOMContentLoaded\", _modules_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://tutorial-typescript-three/./src/js/index.ts?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.ts");
/******/ 	
/******/ })()
;