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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("electron-is");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("electron-log");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["getCount"] = getCount;
/* harmony export (immutable) */ __webpack_exports__["getPath"] = getPath;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron_is__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_electron__);




var count = 0;

function create(opts) {
  count += 1;
  var win = new __WEBPACK_IMPORTED_MODULE_2_electron__["BrowserWindow"](opts);
  win.on('close', function () {
    count -= 1;
    win = null;
  });
  return win;
}

function getCount() {
  return count;
}

function getPath() {
  var path = 'file://' + Object(__WEBPACK_IMPORTED_MODULE_1_path__["join"])(__dirname, '..', 'dist') + '/index.html';
  if (__WEBPACK_IMPORTED_MODULE_0_electron_is___default.a.dev()) {
    path = 'http://127.0.0.1:3000';
  }
  return path;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron_is__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_electron_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_electron_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_electron_log___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_electron_log__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_application__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_window__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_menu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_db__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configs_config__ = __webpack_require__(10);










var dbstore = __WEBPACK_IMPORTED_MODULE_7__services_db__["a" /* init */]();

__WEBPACK_IMPORTED_MODULE_3_electron_log___default.a.transports.file.level = 'info';

__WEBPACK_IMPORTED_MODULE_3_electron_log___default.a.info('(main/index) >>>>>>>>>>>>>>>>>>');
__WEBPACK_IMPORTED_MODULE_3_electron_log___default.a.info('(main/index) app start');
__WEBPACK_IMPORTED_MODULE_3_electron_log___default.a.info('(main/index) log file at ' + __WEBPACK_IMPORTED_MODULE_3_electron_log___default.a.findLogPath());

if (__WEBPACK_IMPORTED_MODULE_1_electron_is___default.a.dev()) {
  __webpack_require__(12)(); // eslint-disable-line global-require
}

__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on('ready', function () {
  __WEBPACK_IMPORTED_MODULE_3_electron_log___default.a.info('(main/index) app ready');
  __WEBPACK_IMPORTED_MODULE_4__services_application__["init"]();
  __WEBPACK_IMPORTED_MODULE_6__services_menu__["a" /* init */]();

  // 加载 devtools extension
  if (__WEBPACK_IMPORTED_MODULE_1_electron_is___default.a.dev()) {
    __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"].addDevToolsExtension(Object(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(__dirname, '../../extensions/redux-devtools/2.11.1_0'));
    // BrowserWindow.addDevToolsExtension(join($dirname, '../../extensions/react-developer-tools/0.15.4_0'));
  }
});

__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    __WEBPACK_IMPORTED_MODULE_0_electron__["app"].quit();
  }
});

__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on('activate', function () {
  if (__WEBPACK_IMPORTED_MODULE_5__services_window__["getCount"]() === 0) {
    __WEBPACK_IMPORTED_MODULE_4__services_application__["init"]();
  }
});

__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on('quit', function () {
  __WEBPACK_IMPORTED_MODULE_3_electron_log___default.a.info('(main/index) app quit');
  __WEBPACK_IMPORTED_MODULE_3_electron_log___default.a.info('(main/index) <<<<<<<<<<<<<<<<<<<');
});

// Register to global, so renderer can access these with remote.getGlobal
global.services = {
  application: __WEBPACK_IMPORTED_MODULE_4__services_application__,
  window: __WEBPACK_IMPORTED_MODULE_5__services_window__,
  dbstore: dbstore
};
global.configs = {
  config: __WEBPACK_IMPORTED_MODULE_8__configs_config__
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(4);


function init() {
  var win = Object(__WEBPACK_IMPORTED_MODULE_0__window__["create"])({
    width: 1000,
    height: 680,
    minWidth: 1000,
    minHeight: 680,
    titleBarStyle: 'hidden'
  });
  win.loadURL(Object(__WEBPACK_IMPORTED_MODULE_0__window__["getPath"])());
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron_log__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron_log___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_electron_log__);



function getTemplate() {
  return [{
    label: 'MyApp',
    submenu: [{ role: 'hide' }, { role: 'hideothers' }, { role: 'unhide' }, { type: 'separator' }, { role: 'quit' }]
  }, {
    label: 'Edit',
    submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'selectall' }]
  }, {
    label: 'View',
    submenu: [{ role: 'reload' }, { role: 'toggledevtools' }, { type: 'separator' }, { role: 'togglefullscreen' }]
  }, {
    role: 'window',
    label: 'Window',
    submenu: [{ role: 'minimize' }, { role: 'close' }]
  }];
}

function init() {
  __WEBPACK_IMPORTED_MODULE_1_electron_log___default.a.info('(menu) init');
  var menu = __WEBPACK_IMPORTED_MODULE_0_electron__["Menu"].buildFromTemplate(getTemplate());
  __WEBPACK_IMPORTED_MODULE_0_electron__["Menu"].setApplicationMenu(menu);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron_is__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_electron_is__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_electron__);




var Datastore = __webpack_require__(9);

// filename: `${join($dirname, '..', 'assets')}/db/data.db`,
var db = {};
var normalPath = __WEBPACK_IMPORTED_MODULE_2_electron__["app"].getPath('userData') + '/dotflow/db';

if (__WEBPACK_IMPORTED_MODULE_1_electron_is___default.a.dev()) {
  normalPath = Object(__WEBPACK_IMPORTED_MODULE_0_path__["join"])(__dirname, '..', 'dist') + '/db';
}

db.flowList = new Datastore({
  filename: normalPath + '/flowList.db'
});

db.projectList = new Datastore({
  filename: normalPath + '/projectList.db'
});

db.flowList.loadDatabase();
db.projectList.loadDatabase();

function init() {
  return db;
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("nedb");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron_config__);


/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0_electron_config___default.a({ name: 'config' }));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("electron-config");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("electron-debug");

/***/ })
/******/ ]);