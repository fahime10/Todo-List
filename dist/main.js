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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n}\r\n\r\n#todo-list-title {\r\n    background-color: rgb(216, 63, 63);\r\n    color: white;\r\n    height: 8vh;\r\n    font-size: 37px;\r\n    text-align: center;\r\n}\r\n\r\n#main-container {\r\n    display: grid;\r\n    grid-template-columns: 45vw 55vw;\r\n}\r\n\r\n#menu-project-buttons {\r\n    display: flex;\r\n    width: 45vw;\r\n    background-color: rgb(231, 224, 224);\r\n    border: 1px solid black;\r\n}\r\n\r\n#menu-todo-buttons {\r\n    display: flex;\r\n    width: 55vw;\r\n    background-color: rgb(231, 224, 224);\r\n    border: 1px solid black;\r\n}\r\n\r\n#menu-project-buttons button, #menu-todo-buttons button {\r\n    background-color: greenyellow;\r\n    margin: 0.5rem;\r\n    cursor: pointer;\r\n    padding: 0.4rem;\r\n}\r\n\r\n#menu-project-buttons button:hover,\r\n#menu-todo-buttons button:hover {\r\n    background-color: rgb(148, 148, 231);\r\n}\r\n\r\n#project-container {\r\n    width: 45vw;\r\n    background-color: rgb(231, 224, 224);\r\n    font-size: 18px;\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n}\r\n\r\n#form-project, #edit-form-project, #remove-form-project,\r\n#form-todo, #edit-form-todo, #remove-form-todo {\r\n    display: none;\r\n    height: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n#form-todo input {\r\n    height: 1rem;\r\n}\r\n\r\n#form-project button, #edit-form-project button, #remove-form-project button,\r\n#form-todo button, #edit-form-todo button, #remove-form-todo button {\r\n    background-color: aqua;\r\n}\r\n\r\n#form-project button:hover, #edit-form-project button:hover, #remove-form-project button:hover,\r\n#form-todo button:hover, #edit-form-todo button:hover, #remove-form-todo button:hover {\r\n    background-color: rgb(205, 228, 170);\r\n}\r\n\r\n.project {\r\n    text-align: center;\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n    padding: 0.5rem 0;\r\n}\r\n\r\n.project:hover {\r\n    background-color: rgb(75, 143, 232);\r\n}\r\n\r\n#todos-container {\r\n    width: 55vw;\r\n    grid-column: 2;\r\n}\r\n\r\n.todo {\r\n    text-align: center;\r\n    border: 1px solid black;\r\n    cursor: pointer;\r\n    padding: 0.5rem 0;\r\n}\r\n\r\n.todo:hover {\r\n    background-color: rgb(75, 143, 232);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo.js */ \"./src/modules/todo.js\");\n\r\n\r\n\r\n\r\nlet projects = [];\r\nlet todos = [];\r\n\r\nfunction loadProjects() {\r\n    const projectsContainer = document.querySelector('#project-container');\r\n\r\n    // const todo = new Todo(\"First todo\", \"Description normal\", \"06/06/2023\", \"High\", \"No\");\r\n    // const todo2 = new Todo(\"Second todo\", \"Description new\", \"06/06/2023\", \"High\", \"No\");\r\n    // const todo3 = new Todo(\"Third todo\", \"Description normal\", \"06/06/2023\", \"High\", \"No\");\r\n    // const todo4 = new Todo(\"Fourth todo\", \"Description new\", \"06/06/2023\", \"High\", \"No\");\r\n    // const todo5 = new Todo(\"Fifth todo\", \"Description normal\", \"06/06/2023\", \"High\", \"No\");\r\n    // const todo6 = new Todo(\"Sixth todo\", \"Description new\", \"06/06/2023\", \"High\", \"No\");\r\n\r\n    const items = {...localStorage};\r\n\r\n    for (let i = 0; i <= localStorage.length + 1; i++) {\r\n        if (JSON.parse(items[i] !== undefined)) {\r\n            let item = JSON.parse(items[i]);\r\n            if (!isNaN(item.id)) {\r\n                if (item !== null) {\r\n                    projects.push(item);\r\n                    const projectDiv = document.createElement('div');\r\n                    projectDiv.classList.add('project');\r\n                    projectDiv.innerHTML = item.project_name;\r\n                    projectDiv.id = item.id;\r\n                    projectsContainer.appendChild(projectDiv);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    applyEventListener();\r\n}\r\nloadProjects();\r\n\r\nfunction applyEventListener() {\r\n    const allProjects = document.querySelectorAll('.project');\r\n    allProjects.forEach((project) => {\r\n        project.addEventListener(\"click\", () => {\r\n            allProjects.forEach((project) => {\r\n                project.style.backgroundColor = \"rgb(231, 224, 224)\";\r\n            });\r\n            project.style.backgroundColor = \"rgb(75, 143, 232)\";\r\n            loadTodos(JSON.parse(localStorage.getItem(project.id)).todos, project.id);\r\n        });\r\n    });\r\n}\r\n\r\nfunction loadTodos(allTodos, project_id) {\r\n    const todosContainer = document.querySelector('#todos-container');\r\n\r\n    todos = [];\r\n    \r\n    allTodos.forEach((todo) => {\r\n        todos.push(todo);\r\n        const todoDiv = document.createElement('div');\r\n        todoDiv.innerHTML = `${todo.title} - ${todo.description}, due by ${todo.date}, priority: ${todo.priority}`;\r\n        let checkbox = document.createElement('input');\r\n        checkbox.setAttribute('type', 'checkbox');\r\n        todoDiv.append(checkbox);\r\n        todoDiv.classList.add('todo');\r\n        todoDiv.id = project_id;\r\n\r\n        todosContainer.appendChild(todoDiv);\r\n    });\r\n\r\n\r\n\r\n    // const projects = document.querySelectorAll('.project');\r\n    // projects.forEach((project) => {\r\n    //     if (project.style.backgroundColor == \"rgb(75, 143, 232)\") {\r\n    //         const todos = projectSelected.viewTodos();\r\n    //         todos.forEach((todo) => {\r\n    //             const todoDiv = document.createElement('div');\r\n    //             todoDiv.innerHTML = projectSelected.stringFormat(todo);\r\n    //             todoDiv.classList.add('todo');\r\n\r\n    //             todosContainer.appendChild(todoDiv);\r\n    //         });\r\n    //     }\r\n    // });\r\n}\r\n\r\nfunction displayAddForm() {\r\n    document.querySelectorAll('.project').forEach((project) => {\r\n        project.style.display = \"none\";\r\n    });\r\n    document.getElementById('form-project').style.display = \"block\";\r\n}\r\ndocument.querySelector('#add-project').addEventListener('click', displayAddForm);\r\n\r\nfunction submitProject(event) {\r\n    event.preventDefault();\r\n    const projectName = document.querySelector('#project-name');\r\n    \r\n    if (validateProjectName(projectName.value)) {\r\n        const newProject = new _modules_project_js__WEBPACK_IMPORTED_MODULE_1__.Project(localStorage.length + 1, `${projectName.value}`, []);\r\n        const projectsContainer = document.querySelector('#project-container');\r\n        const newProjectDiv = document.createElement('div');\r\n        newProjectDiv.textContent = newProject.name;\r\n        newProjectDiv.classList.add('project');\r\n        newProjectDiv.id = newProject.id;\r\n        projectsContainer.appendChild(newProjectDiv);\r\n        \r\n        applyEventListener();\r\n\r\n        const data = {\r\n            id: newProject.id,\r\n            project_name: newProject.name,\r\n            todos: newProject.todos\r\n        };\r\n\r\n        localStorage.setItem(`${newProject.id}`, JSON.stringify(data));\r\n        projects.push(`${newProject.name}`);\r\n\r\n        document.querySelectorAll('.project').forEach((project) => {\r\n            project.style.display = \"flex\";\r\n        });\r\n\r\n        document.querySelector('#form-project').style.display = \"none\";\r\n        projectName.value = \"\";\r\n    }\r\n}\r\ndocument.querySelector('#submit-project').addEventListener('click', submitProject);\r\n\r\nfunction validateProjectName(projectName) {\r\n    if (projectName.length > 0) {\r\n        return true;\r\n    } else {\r\n        return false;\r\n    }\r\n}\r\n\r\nfunction cancelProject(event) {\r\n    event.preventDefault();\r\n    document.querySelector('#form-project').style.display = \"none\";\r\n    document.querySelectorAll('.project').forEach((project) => {\r\n        project.style.display = \"block\";\r\n    });\r\n}\r\ndocument.querySelector('#cancel-project').addEventListener('click', cancelProject);\r\n//////////////////////////////////////////////////////////////////////////////////////////\r\n\r\nfunction displayEditProject() {\r\n    const allProjects = document.querySelectorAll('.project');\r\n    allProjects.forEach((project) => {\r\n        if (project.style.backgroundColor == \"rgb(75, 143, 232)\") {\r\n            document.getElementById('edit-form-project').style.display = \"block\";\r\n            document.querySelectorAll('.project').forEach((project) => {\r\n                project.style.display = \"none\";\r\n            });\r\n            document.querySelector('#edit-project-name').value = project.innerHTML;\r\n        }\r\n    });\r\n}\r\ndocument.querySelector('#edit-project').addEventListener('click', displayEditProject);\r\n\r\nfunction editSelectedProject() {\r\n    let value = document.querySelector('#edit-project-name').value;\r\n\r\n    const allProjects = document.querySelectorAll('.project');\r\n    allProjects.forEach((project) => {\r\n        if (project.style.backgroundColor == \"rgb(75, 143, 232)\") {\r\n            const data = {\r\n                id: project.id,\r\n                project_name: value,\r\n                todos: localStorage.getItem(project.id).todos\r\n            };\r\n        \r\n            localStorage.setItem(project.id, JSON.stringify(data));\r\n            projects = [];\r\n            loadProjects();\r\n            document.querySelector('#edit-form-project').style.display = \"none\";\r\n        }\r\n    });\r\n}\r\ndocument.querySelector('#submit-edit-project').addEventListener('click', editSelectedProject);\r\n\r\nfunction cancelEditProject(event) {\r\n    event.preventDefault();\r\n    document.querySelector('#edit-form-project').style.display = \"none\";\r\n    document.querySelectorAll('.project').forEach((project) => {\r\n        project.style.display = \"block\";\r\n    });\r\n}\r\ndocument.querySelector('#cancel-edit-project').addEventListener('click', cancelEditProject);\r\n////////////////////////////////////////////////////////////////////////////\r\n\r\nfunction displayDeleteProject() {\r\n    const allProjects = document.querySelectorAll('.project');\r\n    allProjects.forEach((project) => {\r\n        if (project.style.backgroundColor == \"rgb(75, 143, 232)\") {\r\n            document.getElementById('remove-form-project').style.display = \"block\";\r\n            document.querySelectorAll('.project').forEach((project) => {\r\n                project.style.display = \"none\";\r\n            });\r\n            document.querySelector('#delete-project-name').value = project.innerHTML;\r\n        }\r\n    });\r\n}\r\ndocument.querySelector('#remove-project').addEventListener('click', displayDeleteProject);\r\n\r\nfunction deleteSelectedProject() {\r\n    const allProjects = document.querySelectorAll('.project');\r\n    allProjects.forEach((project) => {\r\n        if (project.style.backgroundColor == \"rgb(75, 143, 232)\") {\r\n            localStorage.removeItem(project.id);\r\n\r\n            projects = [];\r\n            loadProjects();\r\n            document.querySelector('#remove-form-project').style.display = \"none\";\r\n        }\r\n    });\r\n}\r\ndocument.querySelector('#submit-delete-project').addEventListener('click', deleteSelectedProject);\r\n\r\nfunction cancelDeleteProject(event) {\r\n    event.preventDefault();\r\n    document.querySelector('#remove-form-project').style.display = \"none\";\r\n    document.querySelectorAll('.project').forEach((project) => {\r\n        project.style.display = \"block\";\r\n    });\r\n}\r\ndocument.querySelector('#cancel-delete-project').addEventListener('click', cancelDeleteProject);\r\n////////////////////////////////////////////////////////////////////////////\r\n\r\nfunction displayAddTodo() {\r\n    const allProjects = document.querySelectorAll('.project');\r\n    allProjects.forEach((project) => {\r\n        if (project.style.backgroundColor == \"rgb(75, 143, 232)\") {\r\n            document.querySelector('#form-todo').style.display = \"grid\";\r\n        }\r\n    });\r\n\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    allTodos.forEach((todo) => {\r\n        todo.style.display = \"none\";\r\n    });\r\n}\r\ndocument.querySelector('#add-todo').addEventListener('click', displayAddTodo);\r\n\r\nfunction addTodo() {\r\n    let title = document.querySelector('#title').value;\r\n    let description = document.querySelector('#description').value;\r\n    let date = document.querySelector('#date').value;\r\n    let priority = document.querySelector('#priority').value;\r\n    let project_id;\r\n    let name;\r\n\r\n    const allProjects = document.querySelectorAll('.project');\r\n    allProjects.forEach((project) => {\r\n        if (project.style.backgroundColor == \"rgb(75, 143, 232)\") {\r\n            project_id = project.id;\r\n            name = project.innerHTML;\r\n        }\r\n    });\r\n\r\n    if (validateTodo(title, description, date, priority)) {\r\n        let newTodo = new _modules_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo(project_id, title, description, date, priority, false);\r\n        const todosContainer = document.querySelector('#todos-container');\r\n        const newTodoDiv = document.createElement('div');\r\n        newTodoDiv.classList.add('todo');\r\n        newTodoDiv.id = project_id;\r\n        todosContainer.appendChild(newTodoDiv);\r\n\r\n        todos.push(newTodo);\r\n\r\n        // applyTodoListener();\r\n\r\n        const data = {\r\n            id: project_id,\r\n            project_name: name,\r\n            todos: todos\r\n        };\r\n\r\n        localStorage.setItem(`${project_id}`, JSON.stringify(data));\r\n\r\n        document.querySelectorAll('.todo').forEach((todo) => {\r\n            todo.style.display = \"flex\";\r\n        });\r\n\r\n        document.querySelector('#form-todo').style.display = \"none\";\r\n\r\n\r\n    }\r\n}\r\ndocument.querySelector('#submit-todo').addEventListener('click', addTodo)\r\n\r\nfunction validateTodo(title, description, date, priority) {\r\n    if (title.length > 0 && description.length > 0 && date.length > 0 && priority.length > 0) {\r\n        return true;\r\n    } else {\r\n        return false;\r\n    }\r\n}\r\n\r\nfunction cancelAddTodo() {\r\n    document.querySelector('#form-todo').style.display = \"none\";\r\n\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    allTodos.forEach((todo) => {\r\n        todo.style.display = \"flex\";\r\n    });\r\n}\r\ndocument.querySelector('#cancel-todo').addEventListener('click', cancelAddTodo);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(id, name, todos) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.todos = todos;\r\n    }\r\n\r\n    addTodo(todo) {\r\n        this.todos.push(todo);\r\n    }\r\n\r\n    editTodo(todo) {\r\n\r\n    }\r\n\r\n    deleteTodo(todo) {\r\n\r\n    }\r\n\r\n    viewTodos() {\r\n        return this.todos;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n    constructor(project_id, title, description, date, priority, completed) {\r\n        this.project_id = project_id;\r\n        this.title = title;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.priority = priority;\r\n        this.completed = completed;\r\n    }\r\n\r\n    stringFormat(todo) {\r\n        return todo.title + \" - \" + todo.description + \", to do by \" + todo.date +\r\n                \", priority: \" + todo.priority + \", completed: \" + todo.completed;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;