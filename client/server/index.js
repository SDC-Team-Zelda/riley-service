/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server-Postgres/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Introduction_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Introduction.jsx */ \"./client/src/components/Introduction.jsx\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      intro: []\n    };\n    _this.getPhotosAndIntro = _this.getPhotosAndIntro.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getPhotosAndIntro();\n    }\n  }, {\n    key: \"getPhotosAndIntro\",\n    value: function getPhotosAndIntro() {\n      var _this2 = this;\n\n      var endPoint = window.location.href.split('=')[1];\n      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"http://18.222.28.53:3002/api/intro/?id=\".concat(endPoint)).then(function (res) {\n        console.log(res.data);\n\n        _this2.setState({\n          intro: [res.data]\n        });\n      })[\"catch\"](function (err) {\n        console.log('GET error', err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Introduction_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        info: this.state.intro\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack:///./client/src/components/App.jsx?");

/***/ }),

/***/ "./client/src/components/Introduction.jsx":
/*!************************************************!*\
  !*** ./client/src/components/Introduction.jsx ***!
  \************************************************/
/*! exports provided: default, Introduction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Introduction\", function() { return Introduction; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _introduction_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduction.module.css */ \"./client/src/components/introduction.module.css\");\n/* harmony import */ var _introduction_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_introduction_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_styleable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-styleable */ \"react-styleable\");\n/* harmony import */ var react_styleable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_styleable__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Introduction = /*#__PURE__*/function (_React$Component) {\n  _inherits(Introduction, _React$Component);\n\n  function Introduction(props) {\n    var _this;\n\n    _classCallCheck(this, Introduction);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Introduction).call(this, props));\n    _this.state = {\n      photos: '',\n      pictures: []\n    };\n    return _this;\n  }\n\n  _createClass(Introduction, [{\n    key: \"openModal\",\n    value: function openModal(url, pictures) {\n      this.setState({\n        photos: url,\n        pictures: pictures\n      });\n      var modal = document.getElementById('modal');\n      var span = document.getElementById('close');\n      modal.style.display = 'block';\n\n      span.onclick = function () {\n        modal.style.display = 'none';\n      };\n\n      window.onclick = function (event) {\n        if (event.target === modal) {\n          modal.style.display = 'none';\n        }\n      };\n    }\n  }, {\n    key: \"showSlides\",\n    value: function showSlides(n) {\n      var currentSlide = this.state.photos;\n      var currentIndex = this.state.pictures.indexOf(currentSlide);\n      var nextIndex = currentIndex + n;\n\n      if (nextIndex >= this.state.pictures.length) {\n        var nextSlide = this.state.pictures[0];\n        this.setState({\n          photos: nextSlide\n        });\n      } else if (nextIndex < 0) {\n        nextSlide = this.state.pictures[this.state.pictures.length - 1];\n        this.setState({\n          photos: nextSlide\n        });\n      } else {\n        nextSlide = this.state.pictures[nextIndex];\n        this.setState({\n          photos: nextSlide\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var style = this.props.css;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.props.info.map(function (oneInfo, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: index\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.gridContainer,\n          id: style.photos\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.pic1\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          className: style.img,\n          src: oneInfo.photos[0],\n          onClick: function onClick() {\n            return _this2.openModal(oneInfo.photos[0], oneInfo.photos);\n          }\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.pic2\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          className: style.img,\n          src: oneInfo.photos[4],\n          onClick: function onClick() {\n            return _this2.openModal(oneInfo.photos[4], oneInfo.photos);\n          }\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.pic3\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          className: style.img,\n          src: oneInfo.photos[1],\n          onClick: function onClick() {\n            return _this2.openModal(oneInfo.photos[1], oneInfo.photos);\n          }\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.pic4\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          className: style.img,\n          src: oneInfo.photos[2],\n          onClick: function onClick() {\n            return _this2.openModal(oneInfo.photos[2], oneInfo.photos);\n          }\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.pic5\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          className: style.img,\n          src: oneInfo.photos[3],\n          onClick: function onClick() {\n            return _this2.openModal(oneInfo.photos[3], oneInfo.photos);\n          }\n        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.gridContainer2\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n          className: style.title\n        }, oneInfo.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.gridContainer3\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fas fa-home\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Private room in house\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fas fa-spray-can\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Sparkling clean\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fas fa-map-marker-alt\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Great location\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.line\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: style.description\n        }, oneInfo.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.gridContainer4\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.line\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Amenities\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fas fa-wifi\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Wifi\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fas fa-parking\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Free parking\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fas fa-swimming-pool\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Pool\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fas fa-tv\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Cable TV\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.gridContainer5\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.line\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Sleeping Arrangements\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: style.gridContainer6\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"fas fa-bed\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Bedroom 1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"2 single beds\")))));\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: style.modal,\n        id: \"modal\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: style.close,\n        id: \"close\"\n      }, \"\\xD7\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: style.modalContent\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: this.state.photos\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: style.prev,\n        onClick: function onClick() {\n          return _this2.showSlides(-1);\n        }\n      }, \"\\u276E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: style.next,\n        onClick: function onClick() {\n          return _this2.showSlides(1);\n        }\n      }, \"\\u276F\"))));\n    }\n  }]);\n\n  return Introduction;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_styleable__WEBPACK_IMPORTED_MODULE_2___default()(_introduction_module_css__WEBPACK_IMPORTED_MODULE_1___default.a)(Introduction));\n\n\n//# sourceURL=webpack:///./client/src/components/Introduction.jsx?");

/***/ }),

/***/ "./client/src/components/introduction.module.css":
/*!*******************************************************!*\
  !*** ./client/src/components/introduction.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./introduction.module.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/src/components/introduction.module.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./client/src/components/introduction.module.css?");

/***/ }),

/***/ "./database-Postgres/index.js":
/*!************************************!*\
  !*** ./database-Postgres/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Pool = _require.Pool;\n\nvar pool = new Pool({\n  user: 'power_user',\n  password: 'pgpw',\n  host: 'ec2-18-222-75-0.us-east-2.compute.amazonaws.com',\n  port: '5432',\n  database: 'sdc',\n  max: 20,\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 6000\n});\npool.on('error', function (err, client) {\n  console.error('Unexpected error on idle client', err);\n  process.exit(-1);\n});\npool.connect(function (err, client, release) {\n  if (err) {\n    return console.error('Error acquiring client', err.stack);\n  }\n\n  client.query('SELECT NOW()', function (err, result) {\n    release();\n\n    if (err) {\n      return console.error('Error executing query', err.stack);\n    }\n\n    console.log(result.rows);\n  });\n});\n\nexports.getListing = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, callback) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return pool.query(\"SELECT * FROM listings WHERE id = \".concat(id));\n\n          case 3:\n            res = _context.sent;\n            // console.log('DONE')\n            callback(null, res.rows[0]);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            callback(_context.t0, null);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nexports.postListing = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(object, callback) {\n    var text, values, res;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            // console.log('POST: ', object)\n            text = 'INSERT INTO listings(title, description, photos) VALUES($1, $2, $3) RETURNING *';\n            values = Object.values(object);\n            _context2.next = 5;\n            return pool.query(text, values);\n\n          case 5:\n            res = _context2.sent;\n            // console.log(res.rows[0])\n            callback(null, res.rows[0]);\n            _context2.next = 13;\n            break;\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.log(_context2.t0.stack);\n            callback(_context2.t0.stack, null);\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 9]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nexports.putListing = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, object, callback) {\n    var values, keys, key, text, res;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            values = [];\n            keys = Object.keys(object);\n\n            for (key in object) {\n              values.push(object[key]);\n            } // values = values.slice(0, -2);\n\n\n            text = \"UPDATE listings SET description = $1 WHERE id = \".concat(id, \" RETURNING *\");\n            _context3.next = 7;\n            return pool.query(text, values);\n\n          case 7:\n            res = _context3.sent;\n            // console.log(res.rows[0])\n            callback(null, res.rows[0]);\n            _context3.next = 15;\n            break;\n\n          case 11:\n            _context3.prev = 11;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.log(_context3.t0.stack);\n            callback(_context3.t0.stack, null);\n\n          case 15:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 11]]);\n  }));\n\n  return function (_x5, _x6, _x7) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nexports.deleteListing = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, callback) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return pool.query(\"DELETE FROM listings WHERE id = \".concat(id));\n\n          case 3:\n            res = _context4.sent;\n            // console.log(res.rows[0])\n            callback(null, res.rows[0]);\n            _context4.next = 11;\n            break;\n\n          case 7:\n            _context4.prev = 7;\n            _context4.t0 = _context4[\"catch\"](0);\n            console.log(_context4.t0.stack);\n            callback(_context4.t0.stack, null);\n\n          case 11:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 7]]);\n  }));\n\n  return function (_x8, _x9) {\n    return _ref4.apply(this, arguments);\n  };\n}(); // module.exports = {\n//   getListing: getListing,\n//   postListing: postListing,\n//   putListing: putListing,\n//   deleteListing: deleteListing\n// };\n\n//# sourceURL=webpack:///./database-Postgres/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/src/components/introduction.module.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/src/components/introduction.module.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".gridContainer___3f_Ha {\\n  display: grid;\\n  grid-template-columns: auto auto auto;\\n  grid-gap: 5px;\\n  object-fit: contain;\\n  height: 400px;\\n}\\n\\n.gridContainer___3f_Ha > div {\\n  background-color: rgba(255, 255, 255, 0.8);\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.gridContainer2___2Lyiu {\\n  display: grid;\\n  grid-template-rows: auto auto auto;\\n  width: 40%;\\n  margin-left: 10vw;\\n}\\n\\n.gridContainer3___2P-vv {\\n  display: grid;\\n  grid-template-columns: 5% auto;\\n}\\n\\n.gridContainer3___2P-vv i {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin-top: 16px;\\n}\\n\\n.gridContainer4___17pMi {\\n  display:grid;\\n  grid-template-columns: 5% auto 5% auto;\\n  margin-bottom: 16px;\\n}\\n\\n.gridContainer4___17pMi h4 {\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n}\\n\\n.gridContainer4___17pMi i {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.gridContainer5___3DaqJ {\\n  display: grid;\\n  grid-auto-rows: auto auto;\\n}\\n\\n.gridContainer6___GMLGx {\\n  text-align: center;\\n  width: 150px;\\n  height: 150px;\\n  display: grid;\\n  border-width: 1px;\\n  border-style: solid;\\n  border-color: rgb(235, 235, 235);\\n  border-image: initial;\\n  border-radius: 4px;\\n  padding: 16px;\\n}\\n\\n.title___1uQWR {\\n  overflow-wrap: break-word;\\n  font-family: Roboto, \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 32px;\\n  font-weight: 800;\\n  line-height: 1.125em;\\n  color: rgb(72, 72, 72);\\n  padding-top: 6px;\\n  padding-bottom: 6px;\\n  margin: 0px;\\n  position: relative;\\n  text-align: left;\\n  float: left;\\n  padding: 4px;\\n  width: 100%;\\n}\\n\\n.description___1Rzv- {\\n  overflow-wrap: break-word;\\n  font-family: Roboto,\\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 1.375em;\\n  color: rgb(72, 72, 72);\\n  margin: 0px;\\n  position: relative;\\n  float: left;\\n  padding: 4px;\\n  box-sizing: border-box;\\n  width: 100%;\\n}\\n\\n\\n.pic1___31gpt {\\n  grid-row-start: 1;\\n  grid-row-end: 3;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n\\n.img___3Cwh2 {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n\\n#photos___3TLwt {\\n  cursor: pointer;\\n  transition: 0.3s;\\n}\\n\\n#photos___3TLwt img:hover {opacity: 0.7;}\\n\\n\\n.modal___13ixC {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  padding-top: 100px;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 80%;\\n  overflow: auto;\\n  background-color: white;\\n  background-color: rgba(255, 255, 255, 0.8);\\n}\\n\\n.modalContent___1FReN img{\\n  margin: auto;\\n  display: block;\\n  width: 100%;\\n  height: 80%;\\n  max-width: 700px;\\n  border-radius: 5px;\\n}\\n\\n.close___2yY0K {\\n  position: absolute;\\n  top: 15px;\\n  right: 35px;\\n  color: grey;\\n  font-size: 40px;\\n  font-weight: bold;\\n  transition: 0.3s;\\n}\\n\\n.close___2yY0K:hover,\\n.close___2yY0K:focus {\\n  color: #bbb;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.prev___A-C9u,\\n.next___12-Yo {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  width: auto;\\n  padding: 16px;\\n  margin-top: -50px;\\n  color:grey;\\n  font-weight: bold;\\n  font-size: 20px;\\n  transition: 0.6s ease;\\n  border-radius: 0 3px 3px 0;\\n  user-select: none;\\n  -webkit-user-select: none;\\n}\\n\\n.next___12-Yo {\\n  right: 0;\\n  border-radius: 3px 0 0 3px;\\n}\\n\\n.prev___A-C9u:hover,\\n.next___12-Yo:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n}\\n\\n\\n.img___3Cwh2.demo___1nhgU {\\n  opacity: 0.6;\\n}\\n\\n.demo___1nhgU:hover {\\n  opacity: 1;\\n}\\n\\n.img___3Cwh2.hover-shadow___ouTgT {\\n  transition: 0.3s;\\n}\\n\\n.line___5fvwi {\\n  margin-top: 24px;\\n  margin-bottom: 24px;\\n  border-bottom-width: 1px;\\n  border-bottom-color: #c4c3cd;\\n  border-bottom-style: solid;\\n}\\n\\n.gridContainer4___17pMi h4 {\\n  overflow-wrap: break-word;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 16px;\\n  font-weight: 600;\\n  line-height: 1.375em;\\n  color: rgb(72, 72, 72);\\n  margin-bottom: 16px;\\n}\\n\\n.gridContainer5___3DaqJ h4{\\n  overflow-wrap: break-word;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 16px;\\n  font-weight: 600;\\n  line-height: 1.375em;\\n  color: rgb(72, 72, 72);\\n  margin-bottom: 16px;\\n}\\n\\n.gridContainer5___3DaqJ h5{\\n  overflow-wrap: break-word;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 16px;\\n  font-weight: 600;\\n  line-height: 1.375em;\\n  color: rgb(72, 72, 72);\\n  margin-bottom: 16px;\\n}\\n\\n.gridContainer6___GMLGx p{\\n  overflow-wrap: break-word;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 1.375em;\\n  color: rgb(72, 72, 72);\\n  margin: 0px;\\n}\\n\\n.gridContainer3___2P-vv p {\\n  overflow-wrap: break-word;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 1.375em;\\n  color: rgb(72, 72, 72);\\n  margin-top: 16px\\n}\\n\\n.gridContainer4___17pMi p {\\n  overflow-wrap: break-word;\\n  font-family: \\\"Helvetica Neue\\\", sans-serif;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 1.375em;\\n  color: rgb(72, 72, 72);\\n  margin-bottom: auto;\\n}\\n\\n.gridContainer4___17pMi .line___5fvwi{\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n}\\n\\n.gridContainer5___3DaqJ i {\\n  align-items: center;\\n  margin-bottom: 24px;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"gridContainer\": \"gridContainer___3f_Ha\",\n\t\"gridContainer2\": \"gridContainer2___2Lyiu\",\n\t\"gridContainer3\": \"gridContainer3___2P-vv\",\n\t\"gridContainer4\": \"gridContainer4___17pMi\",\n\t\"gridContainer5\": \"gridContainer5___3DaqJ\",\n\t\"gridContainer6\": \"gridContainer6___GMLGx\",\n\t\"title\": \"title___1uQWR\",\n\t\"description\": \"description___1Rzv-\",\n\t\"pic1\": \"pic1___31gpt\",\n\t\"img\": \"img___3Cwh2\",\n\t\"photos\": \"photos___3TLwt\",\n\t\"modal\": \"modal___13ixC\",\n\t\"modalContent\": \"modalContent___1FReN\",\n\t\"close\": \"close___2yY0K\",\n\t\"prev\": \"prev___A-C9u\",\n\t\"next\": \"next___12-Yo\",\n\t\"demo\": \"demo___1nhgU\",\n\t\"hover-shadow\": \"hover-shadow___ouTgT\",\n\t\"line\": \"line___5fvwi\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./client/src/components/introduction.module.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./server-Postgres/index.js":
/*!**********************************!*\
  !*** ./server-Postgres/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {__webpack_require__(/*! newrelic */ \"newrelic\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar _require = __webpack_require__(/*! ../database-Postgres/index.js */ \"./database-Postgres/index.js\"),\n    getListing = _require.getListing,\n    postListing = _require.postListing,\n    putListing = _require.putListing,\n    deleteListing = _require.deleteListing;\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar App = __webpack_require__(/*! ../client/src/components/App.jsx */ \"./client/src/components/App.jsx\");\n\nvar compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar app = express();\napp.use(cors());\napp.use(express[\"static\"](path.join(__dirname, '../client/public/dist')));\napp.use(morgan('dev'));\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use(function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', '*');\n  next();\n});\napp.get('/*', function (req, res) {\n  var app = ReactDOMServer.renderToString(React.createElement(App, null));\n  var indexFile = path.resolve('../client/public/dist/index.html');\n  fs.readFile(indexFile, 'utf-8', function (err, data) {\n    if (err) {\n      console.error('readFile error', err);\n      return res.status(500).send('Something went wrong...');\n    }\n\n    return res.send(data.replace('<div id=\"app\"></div>', '<div id=\"app\">${app}</div>'));\n  });\n});\napp.get('/loaderio-93cffc9f82bef84e057f9e4feb3d4980.txt', cors(), function (req, res) {\n  res.sendFile(path.join(__dirname, './client/public/dist/loaderio-93cffc9f82bef84e057f9e4feb3d4980.txt'));\n});\napp.get('/app.js', cors(), function (req, res) {\n  res.sendFile(path.join(__dirname, './client/public/dist/app.js'));\n});\napp.get('/api/intro/', function (req, res) {\n  var id = req.query.id;\n  getListing(id, function (err, result) {\n    if (err) {\n      res.sendStatus(400);\n    } else {\n      res.json(result);\n    }\n  });\n}); ////////\n\napp.post('/api/intro/', function (req, res) {\n  postListing(req.body, function (err, result) {\n    if (err) {\n      console.log('Error: POST');\n      res.sendStatus(400);\n    } else {\n      res.end();\n    }\n  });\n});\napp.put('/api/intro/', function (req, res) {\n  var id = req.query.id;\n  putListing(id, req.body, function (err, result) {\n    if (err) {\n      console.log('Error: PUT');\n      res.sendStatus(400);\n    } else {\n      res.end();\n    }\n  });\n});\napp[\"delete\"]('/api/intro/', cors(), function (req, res) {\n  console.log('DELETE', req.query.id);\n  var id = req.query.id;\n  deleteListing(id, function (err, result) {\n    if (err) {\n      console.log('Error: DELETE');\n      res.sendStatus(204);\n    } else {\n      res.end();\n    }\n  });\n}); ////////\n\nvar port = process.env.PORT || 3002;\napp.listen(port, function () {\n  console.log(\"listening on port \".concat(port));\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server-Postgres/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jquery\");\n\n//# sourceURL=webpack:///external_%22jquery%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "newrelic":
/*!***************************!*\
  !*** external "newrelic" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"newrelic\");\n\n//# sourceURL=webpack:///external_%22newrelic%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-styleable":
/*!**********************************!*\
  !*** external "react-styleable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-styleable\");\n\n//# sourceURL=webpack:///external_%22react-styleable%22?");

/***/ })

/******/ });