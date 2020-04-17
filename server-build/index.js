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
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (37:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|   render () {\\n|     return (\\n>       <div>\\n|         <Introduction info={this.state.intro}/>\\n|       </div>\");\n\n//# sourceURL=webpack:///./client/src/components/App.jsx?");

/***/ }),

/***/ "./database-Postgres/index.js":
/*!************************************!*\
  !*** ./database-Postgres/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Pool = _require.Pool;\n\nvar pool = new Pool({\n  user: 'power_user',\n  password: 'pgpw',\n  host: 'ec2-18-222-75-0.us-east-2.compute.amazonaws.com',\n  port: '5432',\n  database: 'sdc',\n  max: 20,\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 6000\n});\npool.on('error', function (err, client) {\n  console.error('Unexpected error on idle client', err);\n  process.exit(-1);\n});\npool.connect(function (err, client, release) {\n  if (err) {\n    return console.error('Error acquiring client', err.stack);\n  }\n\n  client.query('SELECT NOW()', function (err, result) {\n    release();\n\n    if (err) {\n      return console.error('Error executing query', err.stack);\n    }\n\n    console.log(result.rows);\n  });\n});\n\nexports.getListing = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, callback) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return pool.query(\"SELECT * FROM listings WHERE id = \".concat(id));\n\n          case 3:\n            res = _context.sent;\n            // console.log('DONE')\n            callback(null, res.rows[0]);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            callback(_context.t0, null);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nexports.postListing = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(object, callback) {\n    var text, values, res;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            // console.log('POST: ', object)\n            text = 'INSERT INTO listings(title, description, photos) VALUES($1, $2, $3) RETURNING *';\n            values = Object.values(object);\n            _context2.next = 5;\n            return pool.query(text, values);\n\n          case 5:\n            res = _context2.sent;\n            // console.log(res.rows[0])\n            callback(null, res.rows[0]);\n            _context2.next = 13;\n            break;\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.log(_context2.t0.stack);\n            callback(_context2.t0.stack, null);\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 9]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nexports.putListing = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, object, callback) {\n    var values, keys, key, text, res;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            values = [];\n            keys = Object.keys(object);\n\n            for (key in object) {\n              values.push(object[key]);\n            } // values = values.slice(0, -2);\n\n\n            text = \"UPDATE listings SET description = $1 WHERE id = \".concat(id, \" RETURNING *\");\n            _context3.next = 7;\n            return pool.query(text, values);\n\n          case 7:\n            res = _context3.sent;\n            // console.log(res.rows[0])\n            callback(null, res.rows[0]);\n            _context3.next = 15;\n            break;\n\n          case 11:\n            _context3.prev = 11;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.log(_context3.t0.stack);\n            callback(_context3.t0.stack, null);\n\n          case 15:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 11]]);\n  }));\n\n  return function (_x5, _x6, _x7) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nexports.deleteListing = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, callback) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return pool.query(\"DELETE FROM listings WHERE id = \".concat(id));\n\n          case 3:\n            res = _context4.sent;\n            // console.log(res.rows[0])\n            callback(null, res.rows[0]);\n            _context4.next = 11;\n            break;\n\n          case 7:\n            _context4.prev = 7;\n            _context4.t0 = _context4[\"catch\"](0);\n            console.log(_context4.t0.stack);\n            callback(_context4.t0.stack, null);\n\n          case 11:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 7]]);\n  }));\n\n  return function (_x8, _x9) {\n    return _ref4.apply(this, arguments);\n  };\n}(); // module.exports = {\n//   getListing: getListing,\n//   postListing: postListing,\n//   putListing: putListing,\n//   deleteListing: deleteListing\n// };\n\n//# sourceURL=webpack:///./database-Postgres/index.js?");

/***/ }),

/***/ "./server-Postgres/index.js":
/*!**********************************!*\
  !*** ./server-Postgres/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {__webpack_require__(/*! newrelic */ \"newrelic\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar _require = __webpack_require__(/*! ../database-Postgres/index.js */ \"./database-Postgres/index.js\"),\n    getListing = _require.getListing,\n    postListing = _require.postListing,\n    putListing = _require.putListing,\n    deleteListing = _require.deleteListing;\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar App = __webpack_require__(/*! ../client/src/components/App.jsx */ \"./client/src/components/App.jsx\");\n\nvar app = express();\napp.use(cors());\napp.use(express[\"static\"](path.join(__dirname, '../client/public/dist')));\napp.use(morgan('dev'));\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use(function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', '*');\n  next();\n});\napp.get('/*', function (req, res) {\n  var app = ReactDOMServer.renderToString(React.createElement(App, null));\n  var indexFile = path.resolve('../client/public/dist/index.html');\n  fs.readFile(indexFile, 'utf-8', function (err, data) {\n    if (err) {\n      console.error('readFile error', err);\n      return res.status(500).send('Something went wrong...');\n    }\n\n    return res.send(data.replace('<div id=\"app\"></div>', '<div id=\"app\">${app}</div>'));\n  });\n});\napp.get('/loaderio-93cffc9f82bef84e057f9e4feb3d4980.txt', cors(), function (req, res) {\n  res.sendFile(path.join(__dirname, './client/public/dist/loaderio-93cffc9f82bef84e057f9e4feb3d4980.txt'));\n});\napp.get('/app.js', cors(), function (req, res) {\n  res.sendFile(path.join(__dirname, './client/public/dist/app.js'));\n});\napp.get('/api/intro/', function (req, res) {\n  var id = req.query.id;\n  getListing(id, function (err, result) {\n    if (err) {\n      res.sendStatus(400);\n    } else {\n      res.json(result);\n    }\n  });\n}); ////////\n\napp.post('/api/intro/', function (req, res) {\n  postListing(req.body, function (err, result) {\n    if (err) {\n      console.log('Error: POST');\n      res.sendStatus(400);\n    } else {\n      res.end();\n    }\n  });\n});\napp.put('/api/intro/', function (req, res) {\n  var id = req.query.id;\n  putListing(id, req.body, function (err, result) {\n    if (err) {\n      console.log('Error: PUT');\n      res.sendStatus(400);\n    } else {\n      res.end();\n    }\n  });\n});\napp[\"delete\"]('/api/intro/', cors(), function (req, res) {\n  console.log('DELETE', req.query.id);\n  var id = req.query.id;\n  deleteListing(id, function (err, result) {\n    if (err) {\n      console.log('Error: DELETE');\n      res.sendStatus(204);\n    } else {\n      res.end();\n    }\n  });\n}); ////////\n\nvar port = process.env.PORT || 3002;\napp.listen(port, function () {\n  console.log(\"listening on port \".concat(port));\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server-Postgres/index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

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

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });