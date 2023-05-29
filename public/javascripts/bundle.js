/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@geolonia/mbgl-export-control/src/icons.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@geolonia/mbgl-export-control/src/icons.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.download = exports.loading = void 0;\nexports.loading = `\n  <svg style=\"width: 100%; height: 100%;\" width=\"45\" height=\"45\" viewBox=\"0 0 45 45\" stroke=\"#fff\">\n    <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1 1)\" stroke-width=\"2\">\n      <circle cx=\"22\" cy=\"22\" r=\"6\" stroke-opacity=\"0\">\n        <animate attributeName=\"r\"\n              begin=\"1.5s\" dur=\"3s\"\n              values=\"6;22\"\n              calcMode=\"linear\"\n              repeatCount=\"indefinite\" />\n        <animate attributeName=\"stroke-opacity\"\n              begin=\"1.5s\" dur=\"3s\"\n              values=\"1;0\" calcMode=\"linear\"\n              repeatCount=\"indefinite\" />\n        <animate attributeName=\"stroke-width\"\n              begin=\"1.5s\" dur=\"3s\"\n              values=\"2;0\" calcMode=\"linear\"\n              repeatCount=\"indefinite\" />\n      </circle>\n      <circle cx=\"22\" cy=\"22\" r=\"6\" stroke-opacity=\"0\">\n        <animate attributeName=\"r\"\n              begin=\"3s\" dur=\"3s\"\n              values=\"6;22\"\n              calcMode=\"linear\"\n              repeatCount=\"indefinite\" />\n        <animate attributeName=\"stroke-opacity\"\n              begin=\"3s\" dur=\"3s\"\n              values=\"1;0\" calcMode=\"linear\"\n              repeatCount=\"indefinite\" />\n        <animate attributeName=\"stroke-width\"\n              begin=\"3s\" dur=\"3s\"\n              values=\"2;0\" calcMode=\"linear\"\n              repeatCount=\"indefinite\" />\n      </circle>\n      <circle cx=\"22\" cy=\"22\" r=\"8\">\n        <animate attributeName=\"r\"\n              begin=\"0s\" dur=\"1.5s\"\n              values=\"6;1;2;3;4;5;6\"\n              calcMode=\"linear\"\n              repeatCount=\"indefinite\" />\n      </circle>\n    </g>\n  </svg>\n  `;\nexports.download = `\n  <svg height=\"19px\" viewBox=\"0 0 14 19\" width=\"14px\" xmlns=\"http://www.w3.org/2000/svg\">\n    <title/><desc/><defs/>\n    <g fill=\"none\" fill-rule=\"evenodd\" id=\"Page-1\" stroke=\"none\" stroke-width=\"1\">\n      <g fill=\"#000000\" id=\"Core\" transform=\"translate(-383.000000, -213.000000)\">\n        <g id=\"file-download\" transform=\"translate(383.000000, 213.500000)\">\n          <path d=\"M14,6 L10,6 L10,0 L4,0 L4,6 L0,6 L7,13 L14,6 L14,6 Z M0,15 L0,17 L14,17 L14,15 L0,15 L0,15 Z\" id=\"Shape\"/>\n        </g>\n      </g>\n    </g>\n  </svg>\n  `;\n\n\n//# sourceURL=webpack://express-generator-sample/./node_modules/@geolonia/mbgl-export-control/src/icons.js?");

/***/ }),

/***/ "./node_modules/@geolonia/mbgl-export-control/src/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@geolonia/mbgl-export-control/src/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! canvas-toBlob */ \"./node_modules/canvas-toBlob/canvas-toBlob.js\");\nconst file_saver_1 = __importDefault(__webpack_require__(/*! file-saver */ \"./node_modules/file-saver/FileSaver.js\"));\nconst icons_1 = __webpack_require__(/*! ./icons */ \"./node_modules/@geolonia/mbgl-export-control/src/icons.js\");\nconst defaultOptions = {\n    dpi: 300,\n    attribution: \"© OpenStreetMap Contributors\",\n    textFont: [],\n};\nclass ExportControl {\n    constructor(options = {}) {\n        this.container = null;\n        this.options = Object.assign(Object.assign({}, defaultOptions), options);\n    }\n    onAdd(map) {\n        this.container = document.createElement('div');\n        this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group maplibregl-ctrl maplibregl-ctrl-group';\n        const btn = document.createElement('button');\n        btn.className = 'mapboxgl-ctrl-icon mapbox-gl-download maplibregl-ctrl-icon maplibre-gl-download';\n        btn.type = \"button\";\n        btn.setAttribute(\"aria-label\", \"Download\");\n        btn.innerHTML = icons_1.download;\n        this.container.appendChild(btn);\n        btn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\n            const actualPixelRatio = window.devicePixelRatio;\n            Object.defineProperty(window, 'devicePixelRatio', {\n                get: () => this.options.dpi / 96\n            });\n            const _loading = this.loading();\n            const _container = document.createElement('div');\n            document.body.appendChild(_container);\n            const width = map.getContainer().offsetWidth;\n            const height = map.getContainer().offsetHeight;\n            const bottomRight = map.unproject([width, height]).toArray();\n            this.setStyles(_container, {\n                visibility: \"hidden\",\n                position: \"absolute\",\n                top: '0',\n                bottom: '0',\n                width: `${width}px`,\n                height: `${height}px`,\n            });\n            let fontFamily = 'Noto Sans Regular';\n            if (map.style.glyphManager && map.style.glyphManager.localIdeographFontFamily) {\n                fontFamily = map.style.glyphManager.localIdeographFontFamily;\n            }\n            let Map;\n            if ('undefined' !== typeof window.geolonia) {\n                Map = window.geolonia.Map;\n            }\n            else {\n                // @ts-ignore\n                Map = mapboxgl.Map;\n            }\n            const copiedStyle = JSON.parse(JSON.stringify(map.getStyle()));\n            const _map = new Map({\n                container: _container,\n                center: map.getCenter(),\n                zoom: map.getZoom(),\n                bearing: map.getBearing(),\n                pitch: map.getPitch(),\n                style: copiedStyle,\n                localIdeographFontFamily: fontFamily,\n                hash: false,\n                preserveDrawingBuffer: true,\n                interactive: false,\n                attributionControl: false,\n            });\n            _map.once('load', () => {\n                const geojson = {\n                    type: 'FeatureCollection',\n                    features: [{\n                            type: 'Feature',\n                            geometry: {\n                                type: 'Point',\n                                coordinates: bottomRight\n                            },\n                            properties: {\n                                text: this.options.attribution\n                            }\n                        }]\n                };\n                _map.addSource(\"attribution-for-image\", {\n                    type: \"geojson\",\n                    data: geojson\n                });\n                let textFont = [];\n                if (this.options.textFont.length) {\n                    textFont = this.options.textFont;\n                }\n                else {\n                    const layers = map.getStyle().layers;\n                    for (let i = 0; i < layers.length; i++) {\n                        try {\n                            const fonts = map.getLayoutProperty(layers[i].id, 'text-font');\n                            if (fonts && fonts.length) {\n                                textFont = fonts;\n                                break;\n                            }\n                        }\n                        catch (e) {\n                            // Nothing to do.\n                        }\n                    }\n                }\n                _map.addLayer({\n                    \"id\": \"markers\",\n                    \"type\": \"symbol\",\n                    \"source\": \"attribution-for-image\",\n                    \"paint\": {\n                        \"text-color\": \"#000000\",\n                        \"text-halo-color\": \"rgba(255, 255, 255, 1)\",\n                        \"text-halo-width\": 2,\n                    },\n                    \"layout\": {\n                        \"text-field\": \"{text}\",\n                        \"text-font\": textFont,\n                        \"text-size\": 18,\n                        \"text-anchor\": \"bottom-right\",\n                        \"text-max-width\": 28,\n                        \"text-offset\": [-0.5, -0.5],\n                        \"text-allow-overlap\": true,\n                    }\n                });\n                setTimeout(() => {\n                    _map.getCanvas().toBlob((blob) => {\n                        if (blob) {\n                            file_saver_1.default.saveAs(blob, `${_map.getCenter().toArray().join('-')}.png`);\n                        }\n                        _map.remove();\n                        _container.parentNode.removeChild(_container);\n                        _loading.parentNode.removeChild(_loading);\n                        Object.defineProperty(window, 'devicePixelRatio', {\n                            get: () => actualPixelRatio\n                        });\n                    });\n                }, 3000);\n            });\n        }));\n        return this.container;\n    }\n    onRemove() {\n        if (this.container && this.container.parentNode) {\n            this.container.parentNode.removeChild(this.container);\n        }\n    }\n    loading() {\n        const container = document.createElement('div');\n        document.body.appendChild(container);\n        this.setStyles(container, {\n            position: \"absolute\",\n            top: '0',\n            bottom: '0',\n            width: \"100%\",\n            backgroundColor: \"rgba(0, 0, 0, 0.6)\",\n            zIndex: '9999',\n        });\n        const icon = document.createElement('div');\n        icon.innerHTML = icons_1.loading;\n        this.setStyles(icon, {\n            position: \"absolute\",\n            top: '0',\n            bottom: '0',\n            left: '0',\n            right: '0',\n            zIndex: '9999',\n            margin: \"auto\",\n            width: \"120px\",\n            height: \"120px\",\n        });\n        container.appendChild(icon);\n        return container;\n    }\n    setStyles(element, styles) {\n        for (const style in styles) {\n            // @ts-ignore\n            element.style[style] = styles[style];\n        }\n    }\n}\nexports[\"default\"] = ExportControl;\n\n\n//# sourceURL=webpack://express-generator-sample/./node_modules/@geolonia/mbgl-export-control/src/index.js?");

/***/ }),

/***/ "./node_modules/canvas-toBlob/canvas-toBlob.js":
/*!*****************************************************!*\
  !*** ./node_modules/canvas-toBlob/canvas-toBlob.js ***!
  \*****************************************************/
/***/ (function() {

eval("/* canvas-toBlob.js\n * A canvas.toBlob() implementation.\n * 2016-05-26\n * \n * By Eli Grey, http://eligrey.com and Devin Samarin, https://github.com/eboyjr\n * License: MIT\n *   See https://github.com/eligrey/canvas-toBlob.js/blob/master/LICENSE.md\n */\n\n/*global self */\n/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,\n  plusplus: true */\n\n/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */\n\n(function(view) {\n\"use strict\";\nvar\n\t  Uint8Array = view.Uint8Array\n\t, HTMLCanvasElement = view.HTMLCanvasElement\n\t, canvas_proto = HTMLCanvasElement && HTMLCanvasElement.prototype\n\t, is_base64_regex = /\\s*;\\s*base64\\s*(?:;|$)/i\n\t, to_data_url = \"toDataURL\"\n\t, base64_ranks\n\t, decode_base64 = function(base64) {\n\t\tvar\n\t\t\t  len = base64.length\n\t\t\t, buffer = new Uint8Array(len / 4 * 3 | 0)\n\t\t\t, i = 0\n\t\t\t, outptr = 0\n\t\t\t, last = [0, 0]\n\t\t\t, state = 0\n\t\t\t, save = 0\n\t\t\t, rank\n\t\t\t, code\n\t\t\t, undef\n\t\t;\n\t\twhile (len--) {\n\t\t\tcode = base64.charCodeAt(i++);\n\t\t\trank = base64_ranks[code-43];\n\t\t\tif (rank !== 255 && rank !== undef) {\n\t\t\t\tlast[1] = last[0];\n\t\t\t\tlast[0] = code;\n\t\t\t\tsave = (save << 6) | rank;\n\t\t\t\tstate++;\n\t\t\t\tif (state === 4) {\n\t\t\t\t\tbuffer[outptr++] = save >>> 16;\n\t\t\t\t\tif (last[1] !== 61 /* padding character */) {\n\t\t\t\t\t\tbuffer[outptr++] = save >>> 8;\n\t\t\t\t\t}\n\t\t\t\t\tif (last[0] !== 61 /* padding character */) {\n\t\t\t\t\t\tbuffer[outptr++] = save;\n\t\t\t\t\t}\n\t\t\t\t\tstate = 0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t// 2/3 chance there's going to be some null bytes at the end, but that\n\t\t// doesn't really matter with most image formats.\n\t\t// If it somehow matters for you, truncate the buffer up outptr.\n\t\treturn buffer;\n\t}\n;\nif (Uint8Array) {\n\tbase64_ranks = new Uint8Array([\n\t\t  62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1\n\t\t, -1, -1,  0, -1, -1, -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9\n\t\t, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25\n\t\t, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35\n\t\t, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51\n\t]);\n}\nif (HTMLCanvasElement && (!canvas_proto.toBlob || !canvas_proto.toBlobHD)) {\n\tif (!canvas_proto.toBlob)\n\tcanvas_proto.toBlob = function(callback, type /*, ...args*/) {\n\t\t  if (!type) {\n\t\t\ttype = \"image/png\";\n\t\t} if (this.mozGetAsFile) {\n\t\t\tcallback(this.mozGetAsFile(\"canvas\", type));\n\t\t\treturn;\n\t\t} if (this.msToBlob && /^\\s*image\\/png\\s*(?:$|;)/i.test(type)) {\n\t\t\tcallback(this.msToBlob());\n\t\t\treturn;\n\t\t}\n\n\t\tvar\n\t\t\t  args = Array.prototype.slice.call(arguments, 1)\n\t\t\t, dataURI = this[to_data_url].apply(this, args)\n\t\t\t, header_end = dataURI.indexOf(\",\")\n\t\t\t, data = dataURI.substring(header_end + 1)\n\t\t\t, is_base64 = is_base64_regex.test(dataURI.substring(0, header_end))\n\t\t\t, blob\n\t\t;\n\t\tif (Blob.fake) {\n\t\t\t// no reason to decode a data: URI that's just going to become a data URI again\n\t\t\tblob = new Blob\n\t\t\tif (is_base64) {\n\t\t\t\tblob.encoding = \"base64\";\n\t\t\t} else {\n\t\t\t\tblob.encoding = \"URI\";\n\t\t\t}\n\t\t\tblob.data = data;\n\t\t\tblob.size = data.length;\n\t\t} else if (Uint8Array) {\n\t\t\tif (is_base64) {\n\t\t\t\tblob = new Blob([decode_base64(data)], {type: type});\n\t\t\t} else {\n\t\t\t\tblob = new Blob([decodeURIComponent(data)], {type: type});\n\t\t\t}\n\t\t}\n\t\tcallback(blob);\n\t};\n\n\tif (!canvas_proto.toBlobHD && canvas_proto.toDataURLHD) {\n\t\tcanvas_proto.toBlobHD = function() {\n\t\t\tto_data_url = \"toDataURLHD\";\n\t\t\tvar blob = this.toBlob();\n\t\t\tto_data_url = \"toDataURL\";\n\t\t\treturn blob;\n\t\t}\n\t} else {\n\t\tcanvas_proto.toBlobHD = canvas_proto.toBlob;\n\t}\n}\n}(typeof self !== \"undefined\" && self || typeof window !== \"undefined\" && window || this.content || this));\n\n\n//# sourceURL=webpack://express-generator-sample/./node_modules/canvas-toBlob/canvas-toBlob.js?");

/***/ }),

/***/ "./node_modules/file-saver/FileSaver.js":
/*!**********************************************!*\
  !*** ./node_modules/file-saver/FileSaver.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js\n * A saveAs() FileSaver implementation.\n * 1.3.2\n * 2016-06-16 18:25:19\n *\n * By Eli Grey, http://eligrey.com\n * License: MIT\n *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md\n */\n\n/*global self */\n/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */\n\n/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */\n\nvar saveAs = saveAs || (function(view) {\n\t\"use strict\";\n\t// IE <10 is explicitly unsupported\n\tif (typeof view === \"undefined\" || typeof navigator !== \"undefined\" && /MSIE [1-9]\\./.test(navigator.userAgent)) {\n\t\treturn;\n\t}\n\tvar\n\t\t  doc = view.document\n\t\t  // only get URL when necessary in case Blob.js hasn't overridden it yet\n\t\t, get_URL = function() {\n\t\t\treturn view.URL || view.webkitURL || view;\n\t\t}\n\t\t, save_link = doc.createElementNS(\"http://www.w3.org/1999/xhtml\", \"a\")\n\t\t, can_use_save_link = \"download\" in save_link\n\t\t, click = function(node) {\n\t\t\tvar event = new MouseEvent(\"click\");\n\t\t\tnode.dispatchEvent(event);\n\t\t}\n\t\t, is_safari = /constructor/i.test(view.HTMLElement) || view.safari\n\t\t, is_chrome_ios =/CriOS\\/[\\d]+/.test(navigator.userAgent)\n\t\t, throw_outside = function(ex) {\n\t\t\t(view.setImmediate || view.setTimeout)(function() {\n\t\t\t\tthrow ex;\n\t\t\t}, 0);\n\t\t}\n\t\t, force_saveable_type = \"application/octet-stream\"\n\t\t// the Blob API is fundamentally broken as there is no \"downloadfinished\" event to subscribe to\n\t\t, arbitrary_revoke_timeout = 1000 * 40 // in ms\n\t\t, revoke = function(file) {\n\t\t\tvar revoker = function() {\n\t\t\t\tif (typeof file === \"string\") { // file is an object URL\n\t\t\t\t\tget_URL().revokeObjectURL(file);\n\t\t\t\t} else { // file is a File\n\t\t\t\t\tfile.remove();\n\t\t\t\t}\n\t\t\t};\n\t\t\tsetTimeout(revoker, arbitrary_revoke_timeout);\n\t\t}\n\t\t, dispatch = function(filesaver, event_types, event) {\n\t\t\tevent_types = [].concat(event_types);\n\t\t\tvar i = event_types.length;\n\t\t\twhile (i--) {\n\t\t\t\tvar listener = filesaver[\"on\" + event_types[i]];\n\t\t\t\tif (typeof listener === \"function\") {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tlistener.call(filesaver, event || filesaver);\n\t\t\t\t\t} catch (ex) {\n\t\t\t\t\t\tthrow_outside(ex);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t, auto_bom = function(blob) {\n\t\t\t// prepend BOM for UTF-8 XML and text/* types (including HTML)\n\t\t\t// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF\n\t\t\tif (/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(blob.type)) {\n\t\t\t\treturn new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});\n\t\t\t}\n\t\t\treturn blob;\n\t\t}\n\t\t, FileSaver = function(blob, name, no_auto_bom) {\n\t\t\tif (!no_auto_bom) {\n\t\t\t\tblob = auto_bom(blob);\n\t\t\t}\n\t\t\t// First try a.download, then web filesystem, then object URLs\n\t\t\tvar\n\t\t\t\t  filesaver = this\n\t\t\t\t, type = blob.type\n\t\t\t\t, force = type === force_saveable_type\n\t\t\t\t, object_url\n\t\t\t\t, dispatch_all = function() {\n\t\t\t\t\tdispatch(filesaver, \"writestart progress write writeend\".split(\" \"));\n\t\t\t\t}\n\t\t\t\t// on any filesys errors revert to saving with object URLs\n\t\t\t\t, fs_error = function() {\n\t\t\t\t\tif ((is_chrome_ios || (force && is_safari)) && view.FileReader) {\n\t\t\t\t\t\t// Safari doesn't allow downloading of blob urls\n\t\t\t\t\t\tvar reader = new FileReader();\n\t\t\t\t\t\treader.onloadend = function() {\n\t\t\t\t\t\t\tvar url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');\n\t\t\t\t\t\t\tvar popup = view.open(url, '_blank');\n\t\t\t\t\t\t\tif(!popup) view.location.href = url;\n\t\t\t\t\t\t\turl=undefined; // release reference before dispatching\n\t\t\t\t\t\t\tfilesaver.readyState = filesaver.DONE;\n\t\t\t\t\t\t\tdispatch_all();\n\t\t\t\t\t\t};\n\t\t\t\t\t\treader.readAsDataURL(blob);\n\t\t\t\t\t\tfilesaver.readyState = filesaver.INIT;\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t// don't create more object URLs than needed\n\t\t\t\t\tif (!object_url) {\n\t\t\t\t\t\tobject_url = get_URL().createObjectURL(blob);\n\t\t\t\t\t}\n\t\t\t\t\tif (force) {\n\t\t\t\t\t\tview.location.href = object_url;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar opened = view.open(object_url, \"_blank\");\n\t\t\t\t\t\tif (!opened) {\n\t\t\t\t\t\t\t// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html\n\t\t\t\t\t\t\tview.location.href = object_url;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tfilesaver.readyState = filesaver.DONE;\n\t\t\t\t\tdispatch_all();\n\t\t\t\t\trevoke(object_url);\n\t\t\t\t}\n\t\t\t;\n\t\t\tfilesaver.readyState = filesaver.INIT;\n\n\t\t\tif (can_use_save_link) {\n\t\t\t\tobject_url = get_URL().createObjectURL(blob);\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\tsave_link.href = object_url;\n\t\t\t\t\tsave_link.download = name;\n\t\t\t\t\tclick(save_link);\n\t\t\t\t\tdispatch_all();\n\t\t\t\t\trevoke(object_url);\n\t\t\t\t\tfilesaver.readyState = filesaver.DONE;\n\t\t\t\t});\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tfs_error();\n\t\t}\n\t\t, FS_proto = FileSaver.prototype\n\t\t, saveAs = function(blob, name, no_auto_bom) {\n\t\t\treturn new FileSaver(blob, name || blob.name || \"download\", no_auto_bom);\n\t\t}\n\t;\n\t// IE 10+ (native saveAs)\n\tif (typeof navigator !== \"undefined\" && navigator.msSaveOrOpenBlob) {\n\t\treturn function(blob, name, no_auto_bom) {\n\t\t\tname = name || blob.name || \"download\";\n\n\t\t\tif (!no_auto_bom) {\n\t\t\t\tblob = auto_bom(blob);\n\t\t\t}\n\t\t\treturn navigator.msSaveOrOpenBlob(blob, name);\n\t\t};\n\t}\n\n\tFS_proto.abort = function(){};\n\tFS_proto.readyState = FS_proto.INIT = 0;\n\tFS_proto.WRITING = 1;\n\tFS_proto.DONE = 2;\n\n\tFS_proto.error =\n\tFS_proto.onwritestart =\n\tFS_proto.onprogress =\n\tFS_proto.onwrite =\n\tFS_proto.onabort =\n\tFS_proto.onerror =\n\tFS_proto.onwriteend =\n\t\tnull;\n\n\treturn saveAs;\n}(\n\t   typeof self !== \"undefined\" && self\n\t|| typeof window !== \"undefined\" && window\n\t|| this.content\n));\n// `self` is undefined in Firefox for Android content script context\n// while `this` is nsIContentFrameMessageManager\n// with an attribute `content` that corresponds to the window\n\nif ( true && module.exports) {\n  module.exports.saveAs = saveAs;\n} else if (( true && __webpack_require__.amdD !== null) && (__webpack_require__.amdO !== null)) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n    return saveAs;\n  }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n}\n\n\n//# sourceURL=webpack://express-generator-sample/./node_modules/file-saver/FileSaver.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _geolonia_mbgl_export_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @geolonia/mbgl-export-control */ \"./node_modules/@geolonia/mbgl-export-control/src/index.js\");\n/* harmony import */ var _geolonia_mbgl_export_control__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_geolonia_mbgl_export_control__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst map = new geolonia.Map( '#map' )\n\n// Add the control to download png.\nmap.addControl(new (_geolonia_mbgl_export_control__WEBPACK_IMPORTED_MODULE_0___default())({\n  dpi: 300,\n  attribution: \"© OpenStreetMap Contributors\",\n}), 'top-left');\n\n//# sourceURL=webpack://express-generator-sample/./src/js/app.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;