(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-vendors"],{

/***/ "./node_modules/@ks/ks-bridge/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@ks/ks-bridge/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
    /* eslint-disable */
     true ? module.exports = factory() :
	undefined;
    /* eslint-enable */
}(this, function () {
    'use strict';
    __webpack_require__(/*! ./ks-bridge.2.0.0.js */ "./node_modules/@ks/ks-bridge/ks-bridge.2.0.0.js");
    var index = global.ksBridge;
    return index;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ks/ks-bridge/ks-bridge.2.0.0.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ks/ks-bridge/ks-bridge.2.0.0.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * ===============================================================
 *  Ks-Bridge - Javascript Library
 *
 *  Copyright (c) 2018
 *  JasonFang and other contributors in KuaiShou.
 *
 *  ks-bridge.2.0.0.js 2.0.0 build at Tue Jul 14 2020 11:43:49 GMT+0800 (GMT+08:00) .
 *
 * ===============================================================
 */

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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = isFunction;
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["a"] = assignOptions;
/* harmony export (immutable) */ __webpack_exports__["c"] = generateUUCallbackFunction;
/* harmony export (immutable) */ __webpack_exports__["b"] = generateHandlerFunction;
/* harmony export (immutable) */ __webpack_exports__["g"] = transformFuncToURL;
/* harmony export (immutable) */ __webpack_exports__["d"] = getUrlParam;
/* harmony export (immutable) */ __webpack_exports__["f"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_index_of__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_index_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_index_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_some__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_for_each__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_for_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_for_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_array_is_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_array_is_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_array_is_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_sniff__ = __webpack_require__(7);








var toStr = Object.prototype.toString;

var origin = function origin(o) {
  return o;
};

function isFunction(fn) {
  return typeof fn === 'function';
}
function isArray(arr) {
  if (typeof __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_array_is_array___default.a === 'function') {
    return __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_array_is_array___default()(arr);
  }

  return toStr.call(arr) === '[object Array]';
}
function assignOptions() {
  var _context;

  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extra = arguments.length > 1 ? arguments[1] : undefined;

  // Object.assign(target, extra);
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_for_each___default()(_context = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_keys___default()(extra)).call(_context, function (key) {
    // 因为有的桥传的值就是 false，所以单独检查下，过滤掉值是 undefined，空字符串等
    if (extra[key] || extra[key] === false) {
      target[key] = extra[key];
    }
  });

  return target;
}
/**
 *
 * 生成唯一的id
 * @export
 * @returns
 */

function generateUUID() {
  var rc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
  var d = new Date().getTime();

  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }

  var pattern = rc ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}
/**
 *
 * 生成临时唯一的方法挂接到window上，给客户端回调用
 * @name generateUUCallbackFunction
 * @private
 * @param {function} callback 回调函数，客户端方法执行完后会执行该方法
 * @param {boolean} notDelete 是否删除当前回调，留在当前页面的内存中
 * @param {function} 返回参数处理函数 对 native 返回的参数进行预处理
 * @returns
 */


function generateUUCallbackFunction(callback, notDelete) {
  var resHandle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : origin;
  var name = 'kwai_bridge_callback_' + generateUUID(false);

  window[name] = function (data) {
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        console.warn(e); // eslint-disable-line
      }
    }

    callback && callback.call(window, resHandle(data));

    if (!notDelete) {
      delete window[name];
    }
  };

  return name;
} // 处理事件相关的 api 的 handler 回调

var handlerCbMap = {};
function generateHandlerFunction(callback) {
  var _context2;

  var handlerName = '';
  var cb = null;

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_some___default()(_context2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_keys___default()(handlerCbMap)).call(_context2, function (cbName) {
    var handlerCb = handlerCbMap[cbName];

    if (handlerCb === callback) {
      cb = handlerCb;
      handlerName = cbName;
      return true;
    }
  }); // 当传递的 handler 回调之前已经挂载过，就不再重新挂载，重新生成 handler 回调名


  if (cb !== callback && callback) {
    var name = generateUUCallbackFunction(callback, true);
    handlerCbMap[name] = callback;
    handlerName = name;
  }

  return handlerName;
} // 用于 showDialog 相关 api 中，将回调转化成接口需要的 URL

function transformFuncToURL(btn) {
  var tmpBtn = btn;

  if (btn && __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_array_is_array___default()(btn.actions)) {
    var _context3;

    tmpBtn.actions = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_map___default()(_context3 = btn.actions).call(_context3, function (action) {
      if (action && action.url && isFunction(action.url)) {
        action.url = generateUUCallbackFunction(action.url, true);
      }

      return action;
    });
  }

  return tmpBtn;
}
/**
 * 根据字符串的特点获取字符串中某个字段值，可以用于获取url的参数，cookie的参数
 * @name getValueByNameAccordToSplit
 * @private
 * @param {any} str 目标字符串
 * @param {any} name 获得的字符串名字
 * @param {string} [spliter='&']  分隔符
 * @returns
 */

function getValueByNameAccordToSpliter(str, name) {
  var spliter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '&';
  var arr = str.substr(1).split(spliter);

  if (!arr.length) {
    return null;
  }

  for (var i = 0; i < arr.length; i++) {
    var _context4;

    var indexOfEqual = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_index_of___default()(_context4 = arr[i]).call(_context4, '=');

    if (indexOfEqual === -1 && arr[i] === name) {
      return null;
    }

    if (arr[i].substr(0, indexOfEqual) === name) {
      return arr[i].substr(indexOfEqual + 1, arr[i].length);
    }
  }

  return null;
}
/**
 * 从url的search区域获取某个参数的值
 * @name getUrlParam
 * @private
 * @param {any} name
 * @returns
 */


function getUrlParam(name) {
  // array split is more faster then regexp even the code length is much more then the latter;
  // https://jsperf.com/regexp-vs-array-to-get-url-param1
  return decodeURIComponent(getValueByNameAccordToSpliter(window.location.search.substr(1), name, '&'));
}
function log(key) {
  if (!window.ksLog) {
    __webpack_require__(33);
  }

  if (__WEBPACK_IMPORTED_MODULE_7__lib_sniff__["a" /* default */].isInApp && ksLog && ksLog.sendCountTag && isFunction(ksLog.sendCountTag) && key) {
    // 由于 ksLog 是单例的，此处通过 ksLog config 方法修改采样率可能会对外部页面的 ksLog 上报打点产生影响，
    // 所以改成自己实现采样逻辑
    // isForce，强制上报，使 ksLog 不受其他方式设置的采样率影响
    var isForce = true;
    var shouldSendLog = this.shouldSendLog;

    if (shouldSendLog) {
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout___default()(function () {
        var param = {
          event: 'task',
          action: 'COUNT',
          tag: key,
          category: "2.0.0"
        };
        ksLog.sendAction(param, isForce);
      }, this.conf.logDelay);
    } else {
      // eslint-disable-next-line
      console.log("event was randomly skipped (overall rate: ".concat(this.conf.logSampleRate, ")"));
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_helpers_esm_typeof__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_helpers_esm_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_helpers_esm_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_array_is_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_array_is_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_array_is_array__);


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
  if (typeof __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_array_is_array___default.a === 'function') {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_array_is_array___default()(arr);
  }

  return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
  if (!obj || toStr.call(obj) !== '[object Object]') {
    return false;
  }

  var hasOwnConstructor = hasOwn.call(obj, 'constructor'),
      hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');

  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }

  return true;
};
/**
 *
 * @private
 * @param {Object | Boolean} target
 * @param {Object} source1
 * @param {Object} source2
 * ...
 */


function extend() {
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0],
      i = 1,
      length = arguments.length,
      deep = false;

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  } else if (__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_helpers_esm_typeof___default()(target) !== 'object' && typeof target !== 'function' || target == null) {
    target = {};
  }

  for (; i < length; ++i) {
    options = arguments[i];

    if (options != null) {
      for (name in options) {
        if (options.hasOwnProperty(name)) {
          src = target[name];
          copy = options[name];

          if (target !== copy) {
            if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && isArray(src) ? src : [];
              } else {
                clone = src && isPlainObject(src) ? src : {};
              }

              target[name] = extend(deep, clone, copy);
            } else if (typeof copy !== 'undefined') {
              target[name] = copy;
            }
          }
        }
      }
    }
  }

  return target;
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js/object/assign.js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js/json/stringify.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @ks/yoda-js-sdk */ "./node_modules/@ks/yoda-js-sdk/dist/yoda.common.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js/instance/for-each.js");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_parse_int__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_parse_float__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_index_of__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_index_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_index_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk__);



// 环境设备判断等

/**
 * sniff <br />
 * 使用场景：查看运行环境，设备，系统等信息
 * @property ksBridge.sniff
 * @category Base
 *
 * @description
 * | 字段 | 类型 | 说明 |
 * | :--: | :--: | :--: |
 * | browserDesc | String | 浏览器类型，例如 "uc" |
 * | deviceHeightAndWidth | Object | 例如 { dph: 1334, dpw: 750 } |
 * | iOSVersion | Number | iOS 系统版本，例如 11 |
 * | isAndroid | Bool | |
 * | isIOS | Bool | |
 * | isInApp | Bool | 快手主 APP，概念版，极速版，直播伴侣等 |
 * | isInKwai | Bool | 快手，现不推荐使用，后续该字段将被废弃，请改使用 isInApp |
 * | isInAcFun | Bool | AcFun 客户端，ks-bridge 1.0.14 版本新增 |
 * | isInBaidu | Bool | 百度手机客户端 |
 * | isInWeChat | Bool | 微信 |
 * | isInEnterpriseWeChat | Bool | 企业微信 |
 * | isInQQ | Bool | QQ |
 * | isInQQWebBrowser | Bool | QQ浏览器 |
 * | isInQzone | Bool | QQ空间 |
 * | isInTBS | Bool | 腾讯浏览服务(Tencent Browser Service) 简称TBS |
 * | isInUC | Bool | UC浏览器 |
 * | isInWeibo | Bool | 微博 |
 * | isInXiaomi | Bool | 小米 |
 * | isInKakaoTalk | Bool | KaKaoTalk |
 * | isInPinterest | Bool | Pinterest |
 * | isInZalo | Bool | Zalo |
 * | supportUniversalLink | Bool | |
 *
*/

var sniff = {};
var ua = navigator && navigator.userAgent;
sniff.isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
sniff.isAndroid = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_index_of___default()(ua).call(ua, 'Android') > -1 || __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_index_of___default()(ua).call(ua, 'Adr') > -1;

function getIOSVersion() {
  if (!sniff.isIOS) {
    return false;
  }

  var match = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);

  if (!match || match.length < 3) {
    return false;
  }

  var version = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_parse_float___default()(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_parse_int___default()(match[1], 10) + 0.1 * match[2]);

  if (version > 0) {
    return version;
  }

  return false;
}

sniff.iOSVersion = getIOSVersion();

function getCookie(objName) {
  // 获取指定名称的cookie的值
  var arrStr = document.cookie.split('; ');
  var temp;

  for (var i = 0; i < arrStr.length; i++) {
    temp = arrStr[i].split('=');

    if (temp[0] == objName) {
      return unescape(temp[1] || '');
    }
  }

  return '';
}

sniff.isInYoda = __WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk___default.a.isInYoda;
sniff.isInKwai = / (Kwai|Kwai_Lite|Kwai_Pro|ksthanos|ksNebula|livemate|kswv)\//i.test(ua) || getCookie('appver').length > 0; // isInApp 代替 isInKwai，后者表义不再合适，需要逐渐被废弃

sniff.isInApp = sniff.isInKwai;
sniff.isInAcFun = /ACVideoCore/i.test(ua);
sniff.isInWeChat = /MicroMessenger/i.test(ua);
sniff.isInEnterpriseWeChat = / wxwork\//i.test(ua);
sniff.isInWeibo = /Weibo/i.test(ua);
sniff.isInQQ = / QQ\//i.test(ua);
sniff.isInQzone = /Qzone\//i.test(ua); // 腾讯浏览服务(Tencent Browser Service) 简称TBS

sniff.isInTBS = / TBS\//i.test(ua);
sniff.isInQQWebBrowser = /MQQBrowser/i.test(ua) && !sniff.isInWeChat && !sniff.isInQQ && !sniff.isInQzone && !sniff.isInTBS; // 百度手机客户端

sniff.isInBaidu = / baiduboxapp\//i.test(ua); // UC浏览器

sniff.isInUC = / UCBrowser\//i.test(ua);
sniff.isInXiaomi = / XiaoMi\//i.test(ua); // KaKaoTalk

sniff.isInKakaoTalk = /KAKAOTALK/i.test(ua); // Pinterest

sniff.isInPinterest = /Pinterest\//i.test(ua); // Zalo

sniff.isInZalo = /Zalo/i.test(ua);
sniff.supportUniversalLink = sniff.iOSVersion >= 9;

function getBrowserDesc() {
  if (sniff.isInQQ) {
    return 'qq';
  }

  if (sniff.isInWeChat) {
    return 'wechat';
  }

  if (sniff.isInQzone) {
    return 'qzone';
  }

  if (sniff.isInWeibo) {
    return 'weibo';
  }

  if (sniff.isInBaidu) {
    return 'baidu';
  }

  if (sniff.isInUC) {
    return 'uc';
  }

  if (sniff.isIOS) {
    return 'ios';
  }

  if (sniff.isAndroid) {
    return 'android';
  }

  return '';
}

sniff.browserDesc = getBrowserDesc();

function getDeviceHeightAndWidth() {
  var result = {
    dph: window && window.screen && window.screen.availHeight || 1,
    dpw: window && window.screen && window.screen.availWidth || 1
  };

  if (window.devicePixelRatio !== undefined) {
    result.dph *= window.devicePixelRatio;
    result.dpw *= window.devicePixelRatio;
  }

  return result;
}

sniff.deviceHeightAndWidth = getDeviceHeightAndWidth();
/* harmony default export */ __webpack_exports__["a"] = (sniff);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js/set-timeout.js");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ "./node_modules/@babel/runtime-corejs3/core-js/promise.js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js/object/keys.js");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setUpFunction;
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_concat__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bridge__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(0);




// 普通 api 挂载逻辑


var fns = {};

var NOOP = function NOOP() {};

var origin = function origin(o) {
  return o;
}; // 在内存中构建一个 map，key 对应前端定义的 api，val 对应一个函数（函数主体是对客户端挂载的桥的封装）


function setUpFunction(key, api, nameSpace) {
  var _this = this;

  var conf = this.conf;
  var supportPromise = conf.supportPromise;
  var bridgeName = api.key || key;
  fns[key] = nameSpace ? fns[key] || {} : null;
  var optHandle = api.optHandle || origin;

  var func = function func(options) {
    var _context, _context2;

    var promiseChain = null;
    var opt = optHandle(options);
    var success = opt.success,
        fail = opt.fail,
        complete = opt.complete;

    if (supportPromise && opt && !opt.notPromise && !Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* isFunction */])(success) && !Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* isFunction */])(fail) && !Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* isFunction */])(complete)) {
      promiseChain = new __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_promise___default.a(function (resolve, reject) {
        opt.success = function (ret) {
          Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* isFunction */])(success) && success(ret);
          Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* isFunction */])(resolve) && resolve(ret);
        };

        opt.fail = function (err) {
          Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* isFunction */])(fail) && fail(err);
          Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* isFunction */])(reject) && reject(err);
        };
      });
    } else {
      opt.success = opt.success || NOOP;
      opt.fail = opt.fail || NOOP;
    }

    __WEBPACK_IMPORTED_MODULE_4__bridge__["b" /* invoke */].call(_this, bridgeName, api, opt);
    conf.debug && alert(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_concat___default()(_context = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_instance_concat___default()(_context2 = "[Ks-Bridge] Key => ".concat(key, ", BridgeName => ")).call(_context2, bridgeName, ", options => ")).call(_context, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify___default()(opt)));
    return promiseChain;
  };

  if (nameSpace) {
    fns[key][nameSpace] = func;
  } else {
    fns[key] = func;
  }
} // 在前端全局生成 ksBridge 对象，key 对应定义的 api，val 是一个函数（主体是对 setUpFunction 函数生成的 map 中的函数的一次封装调用）

function register(key, nameSpace) {
  var _this2 = this;

  var process = function process(opt) {
    var fn = nameSpace ? fns[key][nameSpace] : fns[key];

    if (fn) {
      try {
        return fn.call(_this2, opt);
      } catch (e) {
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout___default()(function () {
          throw e;
        });
      }
    } else {
      // TODO: 处理 api 不存在的情况
      opt && opt.callback && opt.callback(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify___default()({
        result: _this2.conf.notSupportErrorCode,
        error_msg: "".concat(key, " not support")
      }));
      _this2.conf.debug && alert("[Ks-Bridge] \"".concat(key, "\" not support!"));
    }
  };

  return function () {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return process(option);
  };
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js/instance/concat.js");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCallback;
/* harmony export (immutable) */ __webpack_exports__["b"] = invoke;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_set_timeout__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_set_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_set_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_for_each__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_for_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_for_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_assign__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ready__ = __webpack_require__(16);






// jsbridge




var NOOP = function NOOP() {};

var origin = function origin(o) {
  return o;
};

var SKIP_PARAM_OPTION_SELF = '__self__';
var logPrefix = __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a.isInYoda ? '_yoda_' : '_';
function getCallback() {
  var _this = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var namespace = arguments.length > 1 ? arguments[1] : undefined;
  var bridgeName = arguments.length > 2 ? arguments[2] : undefined;
  var notSupportErrorCode = this.conf.notSupportErrorCode;
  var successCb = options.success;
  var failCb = options.fail;
  var completeCb = options.complete;
  delete options.success;
  delete options.fail;
  delete options.complete;
  return function (data) {
    var _context7, _context8;

    if (!data || data && typeof data === 'boolean') {
      var _context, _context2;

      Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* isFunction */])(successCb) && successCb(); // 桥调用成功打点

      __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(_this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context2 = "ksbridge".concat(logPrefix, "success_")).call(_context2, namespace, "_")).call(_context, bridgeName));
    } else if (+data.result === 1) {
      var _context3, _context4;

      Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* isFunction */])(successCb) && successCb(data); // 桥调用成功打点

      __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(_this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context3 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context4 = "ksbridge".concat(logPrefix, "success_")).call(_context4, namespace, "_")).call(_context3, bridgeName));
    } else {
      var _context5, _context6;

      Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* isFunction */])(failCb) && failCb(data); // 桥调用失败打点(result === notSupportErrorCode 的情况已经在桥不存在的 case 中统计)

      +data.result !== notSupportErrorCode && __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(_this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context5 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context6 = "ksbridge".concat(logPrefix, "fail_")).call(_context6, namespace, "_")).call(_context5, bridgeName));
    }

    Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* isFunction */])(completeCb) && completeCb(data); // 桥回调触发打点，无论成功失败

    __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(_this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context7 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context8 = "ksbridge".concat(logPrefix, "complete_")).call(_context8, namespace, "_")).call(_context7, bridgeName));
  };
} // 调用 native api

function invoke(bridgeName, api, options) {
  var _this2 = this;

  __WEBPACK_IMPORTED_MODULE_8__ready__["b" /* ready */].call(this, function () {
    invokeBridge.call(_this2, bridgeName, api, options);
  });
}

function invokeBridge(bridgeName, api, options) {
  var _context9, _context10;

  // 桥调用打点，无论成功失败还是异常，都统计上报
  var yodaBridge = api.yodaBridge,
      _api$resHandle = api.resHandle,
      resHandle = _api$resHandle === void 0 ? origin : _api$resHandle;
  bridgeName = __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a.isInYoda && yodaBridge && yodaBridge.bridge || bridgeName;
  var namespace = this.conf.name || 'Kwai';
  __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context9 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context10 = "ksbridge".concat(logPrefix)).call(_context10, namespace, "_")).call(_context9, bridgeName));
  var notDelete = !!options.notDelete;
  var _this$conf = this.conf,
      skipOptionsParam = _this$conf.skipOptionsParam,
      notSupportErrorCode = _this$conf.notSupportErrorCode;
  var opts = {};

  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_object_assign___default()(opts, options);

  var skipParamSelf = opts[SKIP_PARAM_OPTION_SELF];

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_for_each___default()(skipOptionsParam).call(skipOptionsParam, function (param) {
    if (opts.hasOwnProperty(param)) {
      delete opts[param];
    }
  });

  var cb = getCallback.call(this, opts, namespace, bridgeName);

  if (cb) {
    var cbName = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* generateUUCallbackFunction */])(cb, notDelete, resHandle);
    opts.callback = cbName;
  }

  if (!__WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a.isInYoda && (!window[namespace] || !window[namespace][bridgeName])) {
    var _context11, _context12;

    // 桥调用异常打点：桥不存在情况
    __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context11 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context12 = "ksbridge".concat(logPrefix, "not_exists_")).call(_context12, namespace, "_")).call(_context11, bridgeName)); // 当该方法不存在时, 直接回调

    handleError();
    return false;
  }

  try {
    if (skipParamSelf === false) {
      // window[name][bridgeName]();
      callNative.call(this, bridgeName, null);
    } else if (__WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a.isInYoda && yodaBridge) {
      // 针对一些特殊 bridge 需要调 yoda 公共的桥
      callYodaBridge.call(this, yodaBridge, opts);
    } else {
      callNative.call(this, bridgeName, opts);
    }
  } catch (e) {
    var _context13, _context14;

    // 桥调用异常打点：桥调用直接报错情况
    __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context13 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context14 = "ksbridge".concat(logPrefix, "throw_error_")).call(_context14, namespace, "_")).call(_context13, bridgeName)); // 发生异常, 直接回调

    handleError();

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_core_js_set_timeout___default()(function () {
      var _context15;

      e.message += __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context15 = " (from window.".concat(namespace, ".")).call(_context15, bridgeName, ")"); // 异步上报错误 不阻断当前代码

      throw e;
    });

    return false;
  }

  function callYodaBridge(yodaBridge, opts) {
    var namespace = yodaBridge.namespace,
        bridge = yodaBridge.bridge;
    var type = opts.type,
        handler = opts.handler,
        callback = opts.callback;
    var handlerFn = window[handler] || NOOP;
    var callbackFn = window[callback] || NOOP;
    var bridgeFn = __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a[namespace] && __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a[namespace][bridge];

    if (Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* isFunction */])(bridgeFn)) {
      // 为方便接入H5秒开方案
      // 在 yoda webview 下对 addEventListener、removeEventListener 进行特殊适配
      if (bridge === 'addEventListener' || bridge === 'removeEventListener') {
        bridgeFn(type, handlerFn, callbackFn);
      } else {
        bridgeFn(opts, callbackFn);
      }
    } else {
      var _context16, _context17;

      __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context16 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context17 = "ksbridge".concat(logPrefix, "not_exists_")).call(_context17, namespace, "_")).call(_context16, bridge));
    }
  }

  function callNative(bridgeName, params) {
    var _this$conf2 = this.conf,
        name = _this$conf2.name,
        debug = _this$conf2.debug;
    var namespace = name || 'Kwai';

    if (__WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a.isInYoda) {
      var _yodaBridge = __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a[namespace] && __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a[namespace][bridgeName];

      if (Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* isFunction */])(_yodaBridge)) {
        var _context18, _context19;

        __WEBPACK_IMPORTED_MODULE_6__ks_yoda_js_sdk___default.a[namespace][bridgeName](params, function () {});
        debug && alert(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context18 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context19 = "[Ks-Bridge] namespace => ".concat(namespace, " BridgeName => ")).call(_context19, bridgeName, " params => ")).call(_context18, params));
      } else {
        var _context20, _context21, _context22;

        // 桥调用异常打点：桥不存在情况
        __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* log */].call(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context20 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context21 = "ksbridge".concat(logPrefix, "not_exists_")).call(_context21, namespace, "_")).call(_context20, bridgeName)); // 当该方法不存在时, 直接回调

        handleError();
        debug && alert(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_instance_concat___default()(_context22 = "[Ks-Bridge] yoda.".concat(namespace, ".")).call(_context22, bridgeName, " \u4E0D\u5B58\u5728"));
      }
    } else {
      var strParam;

      try {
        strParam = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify___default()(params);
      } catch (e) {
        e.message += ' in JSON.stringify';
        throw e;
      }

      if (params && strParam) {
        window[namespace][bridgeName](strParam);
      } else {
        window[namespace][bridgeName]();
      }
    }
  }

  function handleError() {
    var language = window.navigator && (window.navigator.languages || window.navigator.language) || [];
    var errorMsg = language.length && __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of___default()(language).call(language, 'zh') === -1 && __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of___default()(language).call(language, 'zh-CN') === -1 ? 'Error occurred, please upgrade your app' : '出错啦, 请升级客户端至最新版本';
    opts.callback && window[opts.callback] && window[opts.callback](__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_json_stringify___default()({
      result: notSupportErrorCode,
      error_msg: errorMsg
    }));
  }

  return true;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = ready;
/* harmony export (immutable) */ __webpack_exports__["a"] = bridgeReadyCheck;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sniff__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk__);

// 桥 ready 检测


 // ready之前的缓冲队列

var queue = [];
var times = 0;
var self = null;
var timeId = null;
var interval = 100;
function ready(listener) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* isFunction */])(listener)) {
    if (__WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk___default.a.isInYoda) {
      __WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk___default.a.ready(function () {
        listener();
      });
    } else {
      if (this.isReady) {
        listener();
      } else {
        queue.push(listener);
      }
    }
  }
} // 1 探测

function bridgeReadyCheck() {
  if (!__WEBPACK_IMPORTED_MODULE_3__ks_yoda_js_sdk___default.a.isInYoda) {
    self = this;
    var nameSpace = self.conf.name;
    var checkReadyBridge = self.conf.checkReadyBridge;
    var cbName = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* generateUUCallbackFunction */])(bridgeReadyCb, false);

    try {
      window[nameSpace][checkReadyBridge]("{\"callback\":\"".concat(cbName, "\"}"));
    } catch (e) {
      bridgeReadyCb();
    }
  }
} // 2 探测结果, 可能继续探测 或 完成

function bridgeReadyCb(arg) {
  if (arg) {
    onReady();
  } else {
    times++;

    if (times < self.conf.defaultPollingTimes) {
      clearTimeout(timeId);
      timeId = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_set_timeout___default()(function () {
        bridgeReadyCheck.call(self);
      }, interval);
    } else {
      onReady();
    }
  }
} // 3 探测结束


function onReady() {
  timeId = null;
  self.isReady = true; // 执行之前队列

  for (var i = 0; i < queue.length; i++) {
    var fn = queue[i];
    fn();
  }

  queue = [];
  times = 0;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(18);

var ksBridge = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */]();
ksBridge.config();

if (window !== undefined) {
  window.ksBridge = ksBridge;
}

/* harmony default export */ __webpack_exports__["default"] = (ksBridge);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KsBridge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_regenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_helpers_esm_asyncToGenerator__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_helpers_esm_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_helpers_esm_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_index_of__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_index_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_index_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_array_is_array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_array_is_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_array_is_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_object_assign__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_instance_for_each__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_instance_for_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_instance_for_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs3_core_js_json_stringify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs3_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs3_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs3_helpers_esm_classCallCheck__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs3_helpers_esm_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs3_helpers_esm_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_corejs3_helpers_esm_createClass__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_corejs3_helpers_esm_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__babel_runtime_corejs3_helpers_esm_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_sniff__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib_init__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_register__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib_bridge__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk__);










// KsBridge






 // 表示options自己，就是不要传参的意思

var SKIP_PARAM_OPTION_SELF = '__self__';
var DEFAULT_CONFIG = {
  version: "2.0.0" || false,
  name: 'Kwai',
  notSupportErrorCode: 118003,
  appType: Object(__WEBPACK_IMPORTED_MODULE_15__utils__["d" /* getUrlParam */])('appType'),
  // 默认不需要传给客户端的参数，只给前端使用的
  // 例如是否强制fallback，回调函数是否常驻内存，
  // 以及是否有些桥不让传参（这是早期约定的问题，居然还有这种约定。。。。变参。。。。。，android某些bridge不让传参）
  skipOptionsParam: ['notDelete', SKIP_PARAM_OPTION_SELF],
  supportPromise: false,
  hasNameSpace: false,
  // 检查桥是否 ready 时默认的轮询次数
  defaultPollingTimes: 10,
  checkReadyBridge: 'gete2',
  // bridge 调用日志上报比例，默认 50%
  logSampleRate: 0.5,
  // 日志上报延迟时间设置，默认 2s
  logDelay: 2000,
  debug: false
};

function checkRunEnv() {
  var ua = navigator && navigator.userAgent; // 直播伴侣

  if (/ livemate\//.test(ua)) {
    DEFAULT_CONFIG.name = 'livemate';
  }
} // 随机确定是否上报 bridge 调用打点


function checkLogSendStatus(config) {
  var logSampleRate = config.logSampleRate;
  var random = Math.random();
  return random < logSampleRate;
}

var KsBridge = /*#__PURE__*/function () {
  function KsBridge() {
    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_corejs3_helpers_esm_classCallCheck___default()(this, KsBridge);

    checkRunEnv();
    this.conf = Object(__WEBPACK_IMPORTED_MODULE_10__utils_extend__["a" /* default */])(true, {}, DEFAULT_CONFIG);
    this.isInit = false;
    this.isReady = false;
    this.shouldSendLog = false;
    this.sniff = __WEBPACK_IMPORTED_MODULE_11__lib_sniff__["a" /* default */];
    this.plugins = [];
    this.generateUUCallbackFunction = __WEBPACK_IMPORTED_MODULE_15__utils__["c" /* generateUUCallbackFunction */];
    this.yodaApiMap = {};
    this.yoda = __WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default.a;
  }
  /**
   * 配置 KsBridge <br />
   * 使用场景：对 KsBridge 默认配置项进行覆盖。<br/>
   * 对接人： fangchangquan
   * @method ksBridge.config
   * @category Base
   * @version >=1.0.0
   * @example ./config.demo
   * @demo base/config
   * @description
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | debug | Bool | 是否支持调试模式 | X | 常用参数，默认false |
   * | name | String | 客户端在 window 上挂载的变量名，如果是其他客户端，例如直播伴侣，可以指定 'livemate' | X | 默认是 'Kwai' |
   * | supportPromise | Bool | 是否开启 promise，取代传统的回调方式，部分 bridge 不支持，具体使用细节请查看下方说明，从 1.0.13 版本开始支持 | X | 默认是 false |
   * | logSampleRate | number | bridge 调用打点日志上报采样率 | X | v2.x 版本默认为 0.5，即 50%；v1.x 版本（除1.0.17）默认为 1，即 100%；v1.0.17 版默认值为 0.01（春节版本） |
   * | logDelay | number | bridge 调用打点日志上报延迟时间设置 | X| 默认 2000，即2s |
   * | checkReadyBridge | string | bridge 名，用于 ks-bridge 内部检查当前桥的注入是否 ready，如果需要修改，请注意不要使用会引起 UI 变化的 bridge | X |默认是 gete2 |
   *
   * **说明**：
   * + 不是所有 bridge 均支持 promise 方式调用，只支持“可以被 Promise 化”的 bridge，可以理解为”回调期望被调用一次且仅一次“的 bridge
   * + 不支持 promise 的 bridge：同步方法（没有回调）；回调期望被调用多次的异步方法，如 postVideo bridge 的回调会持续触发，直至上传完成
   * + 使用示例请参考 getDeviceInfo 和 commonShare bridge 的示例 demo
   *
   * 不支持 promise 的 api：
   * + 同步方法：startGatewayWithdraw、startPlayLongVideo、collapseKeyboard、setPageTitle、setStatusBarStyle、showToast、exitWebView、loadUrlOnNewPage、popBack、setMiddleSlideBack、setSlideBack、previewIntownVideo
   * + 多次回调的方法：download、postVideo、verifyThirdPartyLogin、setPhysicalBackButton、setTopLeftBtn、setTopLeftSecondBtn、
   * setTopRightBtn、setTopRightSecondBtn、showAlertDialog、showConfirmDialog、showDialog、emit、on、off、reuploadIntownVideo、uploadIntownVideo、downloadThirdPartyAPP
   * + 如有遗漏，欢迎补充
   *
   */


  __WEBPACK_IMPORTED_MODULE_9__babel_runtime_corejs3_helpers_esm_createClass___default()(KsBridge, [{
    key: "config",
    value: function config(conf) {
      var _this = this;

      if (!this.isInit || conf) {
        var _context;

        var config = Object(__WEBPACK_IMPORTED_MODULE_10__utils_extend__["a" /* default */])(true, {}, this.conf, conf) || {};
        this.conf = config;
        this.isInit = true;
        this.shouldSendLog = checkLogSendStatus(config);
        config.debug && alert("\u8C03\u7528 config\uFF0C\u53C2\u6570\uFF1A".concat(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_corejs3_core_js_json_stringify___default()(conf)));

        __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_instance_for_each___default()(_context = this.plugins).call(_context, function (plugin) {
          plugin.call(_this, config);
        });

        __WEBPACK_IMPORTED_MODULE_12__lib_init__["a" /* default */].call(this, config);

        if (__WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default.a.isInYoda) {
          // 获取 bridge 列表，用于 isSupport
          __WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default.a.ready(function () {
            __WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default.a.tool.getApiList({}, function (_ref) {
              var result = _ref.result,
                  apiList = _ref.apiList;

              if (result === 1) {
                __WEBPACK_IMPORTED_MODULE_6__babel_runtime_corejs3_core_js_instance_for_each___default()(apiList).call(apiList, function (api) {
                  var namespace = api.namespace,
                      name = api.name;
                  _this.yodaApiMap[namespace] = _this.yodaApiMap[namespace] || [];

                  _this.yodaApiMap[namespace].push(name);
                });
              }
            });
          });
        }
      }
    } // 拓展插件

  }, {
    key: "plugin",
    value: function plugin(_plugin) {
      Object(__WEBPACK_IMPORTED_MODULE_15__utils__["e" /* isFunction */])(_plugin) && this.plugins.push(_plugin);
    } // 临时注册客户端 api，避免每加一个 api 都要发版

    /**
     * 通过register扩展接口<br />
     * 使用场景：临时向 KsBridge 上挂载一个 api，避免每新增一个 api，都需要 KsBridge 发版<br />
     * 对接人： fangchangquan
     * @method ksBridge.register
     * @category Base
     * @version >=1.0.0
     * @example ./register.demo
     * @demo base/register
     * @description
     * 
     * 调用参数：
     * 
     * | 参数 | 类型 | 描述 | 必选 | 注明 |
     * | :--: | :--: | :--: | :--: | :--: |
     * | name | String | 接口名称 | √ | 常用参数 |
     * | bridgeName | String | 对应native桥名字 | √ | 常用参数 |
     * | namespace | String | 命名空间 | x | 常用参数，默认无 |
     * | option | Object | native桥额外配置 | x | 默认值为 { notDelete: false } |
     * 
     * 注意事项：
     * **一定记得先注册再使用，否则会报undefined**
     */

  }, {
    key: "register",
    value: function register(name, bridgeName) {
      var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        notDelete: false
      };

      if (!name || !bridgeName) {
        console.error('参数name、bridgeName必传'); // eslint-disable-line

        return;
      }

      var api = {
        key: bridgeName
      }; // TODO: 这里实现总觉得不优雅，后续期望能有更好的实现方式

      api.optHandle = function (opt) {
        __WEBPACK_IMPORTED_MODULE_5__babel_runtime_corejs3_core_js_object_assign___default()(opt, option);

        if (opt.onClick) {
          opt.onClick = Object(__WEBPACK_IMPORTED_MODULE_15__utils__["c" /* generateUUCallbackFunction */])(opt.onClick, true);
        }

        if (opt.handler) {
          opt.handler = Object(__WEBPACK_IMPORTED_MODULE_15__utils__["b" /* generateHandlerFunction */])(opt.handler, true);
        }

        return opt;
      };

      var self = this;
      this._apis = this._apis || {};
      __WEBPACK_IMPORTED_MODULE_13__lib_register__["b" /* setUpFunction */].call(this, name, api, namespace);

      if (namespace) {
        this[namespace] = this[namespace] || {};
        this._apis[namespace] = this._apis[namespace] || {};
        this._apis[namespace][name] = api;
        self = this[namespace];
      } else {
        this._apis[name] = api;
      }

      self[name] = __WEBPACK_IMPORTED_MODULE_13__lib_register__["a" /* register */].call(this, name, namespace);
    }
    /**
     * 检查是否支持指定JS接口<br />
     * 使用场景：在不确定当前客户端对API支持情况下检测，yoda 下检测不准，推荐使用 isSupportAsync<br />
     * 对接人： fangchangquan
     * @method ksBridge.isSupport
     * @category Base
     * @version >=1.0.0
     * @example ./isSupport.demo
     * @demo base/isSupport
     * @description
     *
     * 调用参数：
     *
     * | 参数 | 类型 | 描述 | 必选 | 注明 |
     * | :--: | :--: | :--: | :--: | :--: |
     * | api | String | api 名字 | √ | - |
     * | namespace | String | api 命名空间，当通过 register 方法注册的 api 时指定了命名空间，检测时也要指定，其他情况不要传该值，参考示例3 | X | - |
     *
     * 返回参数：
     * 直接返回一个布尔值，true 表示支持，false 表示不支持
     */

  }, {
    key: "isSupport",
    value: function isSupport() {
      var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var res = false;

      if (!api) {
        this.conf.debug && alert('api 为必传参数');
      }

      var apis = this._apis && namespace ? this._apis[namespace] : this._apis;

      if (!apis || !apis[api]) {
        this.conf.debug && alert("\u8BF7\u68C0\u67E5 ".concat(api, " \u662F\u5426\u5C01\u88C5"));
        return res;
      }

      var bridgeName = apis[api].key || api;

      try {
        var name = this.conf.name || 'Kwai';

        if (__WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default.a.isInYoda) {
          var apiList = this.yodaApiMap[name];
          res = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs3_core_js_array_is_array___default()(apiList) && __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs3_core_js_instance_index_of___default()(apiList).call(apiList, bridgeName) > -1;
        } else {
          res = !!window[name][bridgeName];
        }
      } catch (e) {// nothing
      }

      return res;
    }
    /**
     * 检查是否支持指定JS接口<br />
     * 使用场景：在不确定当前客户端对API支持情况下检测，异步返回结果<br />
     * 对接人： fangchangquan
     * @method ksBridge.isSupportAsync
     * @category Base
     * @version >=2.0.0
     * @example ./isSupportAsync.demo
     * @demo base/isSupportAsync
     * @description
     *
     * 调用参数：
     *
     * | 参数 | 类型 | 描述 | 必选 | 注明 |
     * | :--: | :--: | :--: | :--: | :--: |
     * | api | String | api 名字 | √ | - |
     * | namespace | String | api 命名空间，当通过 register 方法注册的 api 时指定了命名空间，检测时也要指定，其他情况不要传该值，参考示例3 | X | - |
     *
     * 返回参数：
     * 
     * | 参数 | 类型 | 描述 |
     * | :--: | :--: | :--: |
     * | canUse | bool | 是否可用 |
     */

  }, {
    key: "isSupportAsync",
    value: function () {
      var _isSupportAsync = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs3_helpers_esm_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_regenerator___default.a.mark(function _callee(param) {
        var ns, cb, _param$namespace, namespace, _param$api, api, apis, bridgeName, returnPromise, res, ret;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_regenerator___default.a.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ns = this.conf.name || 'Kwai';
                cb = __WEBPACK_IMPORTED_MODULE_14__lib_bridge__["a" /* getCallback */].call(this, param, ns, 'isSupportAsync');
                _param$namespace = param.namespace, namespace = _param$namespace === void 0 ? '' : _param$namespace, _param$api = param.api, api = _param$api === void 0 ? '' : _param$api;

                if (!api) {
                  this.conf.debug && alert('api 为必传参数');
                }

                apis = this._apis && namespace ? this._apis[namespace] : this._apis;
                bridgeName = apis && apis[api] && apis[api].key || api;

                if (!__WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default.a.isInYoda) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 9;
                return __WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default.a.ready();

              case 9:
                _context2.next = 11;
                return __WEBPACK_IMPORTED_MODULE_16__ks_yoda_js_sdk___default.a.tool.canIUse({
                  namespace: ns,
                  name: bridgeName
                });

              case 11:
                ret = _context2.sent;
                res = !!(ret && ret.result === 1 && ret.canUse);
                returnPromise = new __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_promise___default.a(function (resolve) {
                  return resolve(res);
                });
                cb(res);
                _context2.next = 20;
                break;

              case 17:
                res = !!(window[ns] && window[ns][bridgeName]);
                returnPromise = new __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_promise___default.a(function (resolve) {
                  return resolve(res);
                });
                cb(res);

              case 20:
                return _context2.abrupt("return", returnPromise);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));

      function isSupportAsync(_x) {
        return _isSupportAsync.apply(this, arguments);
      }

      return isSupportAsync;
    }()
  }]);

  return KsBridge;
}();



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js/parse-int.js");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/parse-float */ "./node_modules/@babel/runtime-corejs3/core-js/parse-float.js");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_for_each__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_for_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_for_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apis__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ready__ = __webpack_require__(16);


// 初始化




function init() {
  var _context,
      _this = this;

  this._apis = {};
  var hasNameSpace = this.conf.hasNameSpace;
  var self = this;

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_for_each___default()(_context = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_keys___default()(__WEBPACK_IMPORTED_MODULE_3__apis__["a" /* default */])).call(_context, function (nameSpace) {
    var _context2;

    // TODO: 需要确认下是否符合当时定的动态支持命名空间的预期
    var ns = hasNameSpace ? nameSpace : '';
    var apiList = __WEBPACK_IMPORTED_MODULE_3__apis__["a" /* default */][nameSpace];
    _this._apis = Object(__WEBPACK_IMPORTED_MODULE_2__utils_extend__["a" /* default */])(true, _this._apis, apiList);
    _this._apis[nameSpace] = apiList;

    if (hasNameSpace) {
      _this[nameSpace] = _this[nameSpace] || {};
      self = _this[nameSpace];
    }

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_core_js_instance_for_each___default()(_context2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_keys___default()(apiList)).call(_context2, function (key) {
      __WEBPACK_IMPORTED_MODULE_4__register__["b" /* setUpFunction */].call(_this, key, apiList[key], ns);
      var fn = __WEBPACK_IMPORTED_MODULE_4__register__["a" /* register */].call(_this, key, ns);
      self[key] = fn;
    });
  });

  __WEBPACK_IMPORTED_MODULE_5__ready__["a" /* bridgeReadyCheck */].call(this);
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webview__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__intown__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__third__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__merchant__ = __webpack_require__(137);











/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_1__component__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__data__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__page__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__system__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__ui__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__webview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__event__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__intown__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__third__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__merchant__["a" /* default */]));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runSequencialTasks__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verifyRealNameInfo__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectImage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectAndUploadMedia__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postVideo__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bindWithdrawType__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__injectCookie__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__verifySMSCode__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__socialShare__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fansTopPay__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__couponPay__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__commonShare__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__startGatewayPay__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__startPlayLongVideo__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__startAudioRecord__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logout__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__deleteAccount__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__verifyThirdPartyLogin__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__selectCountryPhoneCode__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__captureCertVideo__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__uploadCertVideo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__uploadContacts__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sendSMS__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__decryptContactsName__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__bindPhone__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__download__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__selectCity__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__verifyLiveUser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__publishWorks__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__verifyAccount__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__enterGroupChat__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__startGatewayWithdraw__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__saveImage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__sendImFriendMessage__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__selectScreenshot__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__wechatLogin__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__authThirdPartyAccount__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__downloadProgress__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__installApk__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__iAPCurrency__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__share__ = __webpack_require__(72);











































var component = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_41__iAPCurrency__["a" /* default */], __WEBPACK_IMPORTED_MODULE_40__installApk__["a" /* default */], __WEBPACK_IMPORTED_MODULE_39__downloadProgress__["a" /* default */], __WEBPACK_IMPORTED_MODULE_38__authThirdPartyAccount__["a" /* default */], __WEBPACK_IMPORTED_MODULE_37__wechatLogin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_36__selectScreenshot__["a" /* default */], __WEBPACK_IMPORTED_MODULE_35__sendImFriendMessage__["a" /* default */], __WEBPACK_IMPORTED_MODULE_34__saveImage__["a" /* default */], __WEBPACK_IMPORTED_MODULE_33__startGatewayWithdraw__["a" /* default */], __WEBPACK_IMPORTED_MODULE_32__enterGroupChat__["a" /* default */], __WEBPACK_IMPORTED_MODULE_19__verifyThirdPartyLogin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_16__login__["a" /* default */], __WEBPACK_IMPORTED_MODULE_17__logout__["a" /* default */], __WEBPACK_IMPORTED_MODULE_18__deleteAccount__["a" /* default */], __WEBPACK_IMPORTED_MODULE_20__selectCountryPhoneCode__["a" /* default */], __WEBPACK_IMPORTED_MODULE_21__captureCertVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_22__uploadCertVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__verifyRealNameInfo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__selectImage__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__selectAndUploadMedia__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__postVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_26__bindPhone__["a" /* default */], __WEBPACK_IMPORTED_MODULE_23__uploadContacts__["a" /* default */], __WEBPACK_IMPORTED_MODULE_31__verifyAccount__["a" /* default */], __WEBPACK_IMPORTED_MODULE_24__sendSMS__["a" /* default */], __WEBPACK_IMPORTED_MODULE_25__decryptContactsName__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__socialShare__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__commonShare__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__bindWithdrawType__["a" /* default */], __WEBPACK_IMPORTED_MODULE_27__download__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__injectCookie__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__fansTopPay__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__couponPay__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__startGatewayPay__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__startPlayLongVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_15__startAudioRecord__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__verifySMSCode__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__runSequencialTasks__["a" /* default */], __WEBPACK_IMPORTED_MODULE_28__selectCity__["a" /* default */], __WEBPACK_IMPORTED_MODULE_29__verifyLiveUser__["a" /* default */], __WEBPACK_IMPORTED_MODULE_30__publishWorks__["a" /* default */], __WEBPACK_IMPORTED_MODULE_42__share__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  component: component
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 执行任务队列<br />
   * 对应native接口：runSequencialTasks<br/>
   * 支持版本：客户端2017.11.28版本<br/>
   * 对接人： songyunlu
   * @method ksBridge.runSequencialTasks
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/runSequencialTasks.demo
   * @demo component/runSequencialTasks
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | tasks | Array | 任务数组 | √ | task目前只支持示例代码中的几种类型，可以为一个，也可以为多个，调用顺序严格按照tasks数组里的顺序执行，数组元素：{ taskName: 'bindPhone', info: '绑定手机号，确认你的直播账号安全' } |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // result 四种结果：1: 成功、0: 用户取消、其他：出错、100: 无法识别task
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  runSequencialTasks: true
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 调起腾讯实名认证服务(直播认证)<br />
   * 对应native接口：verifyRealNameInfo<br/>
   * 支持版本：客户端17年6月版本<br/>
   * 注意：需要登录<br/>
   * 对接人： songyunlu
   * @method ksBridge.verifyRealNameInfo
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/verifyRealNameInfo.demo
   * @demo component/verifyRealNameInfo
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | data | Object | 腾讯实名认证SDK所需字段 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     //result 不为1时返回错误信息(国际化)
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  verifyRealNameInfo: true
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 从系统相册选择图片<br />
   * 对应native接口：selectImage<br/>
   * 注意：从18年8月，开始支持上传多张，并多次触发回调<br />
   * 支持版本：客户端2017.6月版本<br/>
   * 对接人： songyunlu
   * @method ksBridge.selectImage
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/selectImage.demo
   * @demo component/selectImage
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | count | Number | 选择图片数量 | X |  |
   * | sourceType | Array | 可以指定来源是相册还是相机，默认二者都有 | X | 默认 ['album', 'camera'] |
   * | maxFileSize | Number | 字节单位 | X | 不存在则为不限制，原图超过该值时自动压缩 |
   * | maxWidth | Number | 像素单位 | X | 不存在则为不限制，原图超过该值时自动压缩，建议设置，否则图太大 |
   * | maxHeight | Number | 像素单位 | X | 不存在则为不限制，原图超过该值时自动压缩，建议设置，否则图太大 |
   * | title | String | 设置 naviBar 的 title 文案 | X | Android 6.4.2，ios 6.4.1 版本开始支持 |
   * | confirmTitle | String | 完成按钮文案 | X | Android 6.4.2，ios 6.4.1 版本开始支持 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',//result 不为1时返回错误信息(国际化)
   *     data:[{
   *         base64: 'xxxxx',
   *         width: 1024, // 单位px
   *         height: 768,
   *         fileType: 'png'
   *     }, {...}, {...}]
   * }
   * ```
   */
  selectImage: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js/instance/map.js");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/some */ "./node_modules/@babel/runtime-corejs3/core-js/instance/some.js");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! ks-log */ "./node_modules/ks-log/src/index.js");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 从相册选择媒体资源上传<br />
   * 对应native接口：selectAndUploadMedia<br/>
   * 注意：需要登录，一次只支持上传1个资源，目前快接单里有使用<br/>
   * 支持版本：客户端2017.6月版本<br/>
   * 对接人： songyunlu
   * @method ksBridge.selectAndUploadMedia
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/selectAndUploadMedia.demo
   * @demo component/selectAndUploadMedia
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | sourceType | Array | 可以指定来源是相册还是相机，或二者都有 | √ | 默认 ['album', 'camera'] |
   * | uploadToken | String | 用上传key，客户端透传 | √ | - |
   * | mediaType | String | image 为图片 video 为视频 | √ | - |
   * | fileType | String | mediaType = image 只支持 jpeg/png，mediaType = video 只支持 mp4 | √ | - |
   * | maxFileSize | Number | 字节单位，不存在则为不限制，超过该值时自动压缩(视频暂不能完美支持支持)| √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: ''
   * }
   * ```
   */
  selectAndUploadMedia: true
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 视频拍摄和发布<br />
   * 对应native接口：postVideo<br/>
   * 注意：回调多次，前端可根据 progress 显示上传进度；从 ks-bridge 1.0.11 版本开始，returnToWeb 参数默认为 true<br/>
   * 对接人： fangchangquan
   * @method ksBridge.postVideo
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/postVideo.demo
   * @demo component/postVideo
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | param | Object | picker 内容配置 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * param 参数：
   * 
   * | 可以带入拍摄页的内容 | 参数 |
   * | :--: | --:: |
   * | 文本tag | tag: 话题名称（支持添加多个标签，多个标签通过一个空格和一个#号分隔，例如:金月饼 #竞猜活动 #中秋，如需添加多个标签必须设置showNativeTagPage=false）|
   * | 话题Topic <br/> (rich tag) | topic: // 分享一个话题（带头图的tag）<br/> magicFaceId // 如果带魔法表情，必传 <br/> magicName // 如果带魔法表情，必传 <br/> imageUrl <br/> resourceUrl <br/> tag <br/> version |
   * | 魔法表情 | magicName // 识别附带魔法表情(带入魔表时必传) <br/> magicFaceId // 识别附带魔法表情(带入魔表时必传) <br/> imageUrl <br/> resourceUrl <br/> tag <br/> version |
   * | 地理位置 | poiId // 识别附带地理位置(带入地理位置时必传) <br/> address <br/> id <br/> longitude <br/> latitude <br/> title |
   * | 显示native tag聚合页 | showNativeTagPage. // 是否显示native tag聚合页 <br/> 背景：从app外的h5 tag聚合页呼起native的拍摄页时，会在native的拍摄页下补一个native的tag聚合页 <br/> 备注：由于这个字段添加的时候iOS已经有了会打开native的tag聚合页的功能，所以这个字段的定义为：如果不下发或者下发为true，展示native的tag聚合页，反之不展示 |
   * | 回到h5页面 | returnToWeb // 是否回到h5页面。ks-bridge 从 1.0.11 版本开始，默认值为 true，低于 1.0.11 版本，需要手动传值 <br/> 背景：调用 postVideo 拍摄视频，点击发布按钮后，可能命中 ab 实验，跳转到首页关注页，一般活动等 h5 页面希望在调桥拍摄发布后回到 h5 页面，所以通过传 returnToWeb 参数，可以强制回到 h5 页面，而不会跳到首页的关注页（不管是否命中 ab 实验）<br/>当 returnToWeb 值为 true 时，会强制回到 h5 页面；当 returnToWeb 值为 false 或直接不传该参数，具体跳转页面根据当前用户是否命中 ab 实验进行跳转，命中实验则跳转到首页的关注页，未命中则回到 h5 页面<br/>iOS 6.0.4 及以上版本支持 returnToWeb 参数；Android 预计 6.2.2 及以上版本支持
   * | 活动id | activity // 用于区分视频的拍摄来源，具体使用方式请参考示例 demo |
   * | 音乐原声 | musicId // 音乐原声 id <br/> musicType // 音乐类型<br/> 带入音乐原声时，musicId 和 musicType 都要传，客户端从 6.3.2 版本开始支持 |
   * | 是否新启动一个拍摄页 | allowGoBackVideoPost，一般不需要管该字段，值为 ture 表示返回之前的拍摄 false 新起一个拍摄，当 allowGoBackVideoPost 为 true 且客户端真的发现存在一个现有的录制页时，returnToWeb 会不起作用，客户端从 6.3.2 版本开始支持 |
   * | 是否开启“同框”、“跟拍”、“合唱”模式拍摄 | pairedPhoto // 值为包含 photoId、type 属性的对象。photoId 为作品 id，type 为拍摄模式，同框为 "sameFrame", 跟拍为 "followShoot", 合唱为 "chorus",目前仅支持同框。android 6.6.2  ios 6.6.3 及以上版本支持该功能 |
   * 
   * 
   * 返回参数：
   * ```
   * {
   *     // 1成功 0用户取消
   *     result: 1,
   *     data: {
   *         "uploadId": "94015796-3862-483E-9EA6-FB053D6667B3",   // 用于预览、重传
   *         "coverUrl": "http://ali2.a.yximgs.com/bs2/intownImage/MjAyMTY_o.jpg",   // 视频封面 url，progress 为 100 时才有
   *         "coverKey": "1531293052316_qUkZkqISQ9qv4QLIVI600ssoq", 
   *         "videoUrl": "http://ali2.a.yximgs.com/bs2/intownVideo/MjAyMTY.mp4",   // 视频 url，progress 为 100 时才有
   *         "progress": "100",  // 进度
   *         "filePath": "/var/mobile/Containers/Data/Application/27B876FE-7014-4ED2-9A21-D6943CBEA61F/Documents/gifs/152B184D-C134-4B06-B009-F5813AC46EA8.MOV",   // 用于预览、重传
   *         "photoId": "5xwyk9vaarq9w6u"
   *     }
   * }
   * ```
   */
  postVideo: {
    optHandle: function optHandle() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opt.param = opt.param || {};
      opt.param.returnToWeb = typeof opt.param.returnToWeb === 'boolean' ? opt.param.returnToWeb : true;
      var data = {
        notPromise: true,
        notDelete: true
      };
      Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* assignOptions */])(data, opt);
      var ua = navigator && navigator.userAgent || ''; // ios 且主 app 客户端版本为 6.2.1 时，需要把 opt.param 数据打平传给客户端，兼容客户端 bug

      if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_instance_index_of___default()(ua).call(ua, 'Kwai/6.2.1') > -1) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* assignOptions */])(data, opt.param);
      }

      return data;
    }
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 提现绑定微信或支付宝<br />
   * 对应native接口：bindWithdrawType<br/>
   * 支持版本：客户端17年7月版本，仅 Android 支持<br/>
   * 对接人： songyunlu
   * @method ksBridge.bindWithdrawType
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/bindWithdrawType.demo
   * @demo component/bindWithdrawType
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | category | String | 业务类型，如: sf2018 | √ | - |
   * | type | String | 目前支持： 'wechat', 'alipay' | √ | - |
   * | session | String | 手机验证码 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  bindWithdrawType: true
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 在webview中给指定快手域名注入cookie<br />
   * 使用场景：该接口主要用于安卓客户端注入cookie仅能在页面请求时注入，前端在进行跨子域的ajax请求和jsonp请求时，需要调手动注入快手相关cookie<br/>
   * 对应native接口：injectCookie<br/>
   * 支持版本：客户端17.07版本，仅支持 Android<br/>
   * 对接人： songyunlu
   * @method ksBridge.injectCookie
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/injectCookie.demo
   * @demo component/injectCookie
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | url | String | 要注入cookie的地址 | √ | 需要在快手相关域名白名单里 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  injectCookie: true
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 验证短信验证码?<br />
   * 对应native接口：verifySMSCode<br/>
   * 支持版本：待添加?<br/>
   * 对接人： songyunlu
   * @method ksBridge.verifySMSCode
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/verifySMSCode.demo
   * @demo component/verifySMSCode
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | title | String | 可空，没有的话客户端默认 账号验证 | X | - |
   * | info | String | 可空，显示再上面的界面信息 | X | - |
   * | type | Number | 验证码的用途，如绑定手机号等 | √ | - |
   * | needMobile | Bool | 是否需要显示输入手机号和国家，如果为false，显示当前账号的手机号（混淆后），国家不可选择，否则显示手机号输入框且国家可以选择，如果账号未绑定手机号，也显示手机号输入框，国家可选择 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     data: {
   *         mobileCode: '123456'// 用户填写的验证码
   *         // 用户对应手机号的counttryCode，逻辑同mobile
   *         mobileCountryCode: '86',
   *         // needMobile为true时用户填写的手机号，
   *         // 以及needMobile为 false时，
   *         // 用户未绑定过手机号，也需要填写的手机号
   *         mobile: ''
   *     }
   * }
   * ```
   */
  verifySMSCode: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 社交分享<br />
   * 对应native接口：socialShare<br/>
   * 注意：需要登录<br/>
   * 对接人： songyunlu
   * @method ksBridge.socialShare
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/socialShare.demo
   * @demo component/socialShare
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | paramObject | Object | 分享设置 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  socialShare: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 粉丝支付<br />
   * 对应native接口：fansTopPay<br/>
   * 支持版本：未上线？<br/>
   * 注意：需要登录<br/>
   * 对接人： songyunlu
   * @method ksBridge.fansTopPay
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/fansTopPay.demo
   * @demo component/fansTopPay
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | provider | Number | 支付渠道，微信2，支付宝3 | √ | - |
   * | photoId | Number | 视频ID | √ | - |
   * | fen | Number | 订单总金额，金额单位都是分 | √ | - |
   * | followAmountFen | Number | 关注页购买金额 | √ | - |
   * | exploreAmountFen | Number | 发现页购买金额 | √ | - |
   * | nearbyAmountFen | Number | 同城页购买金额 | √ | - |
   * | trackingData | Object | 保留参数 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1, // 支付结果，1为成功
   *     error_msg: '',
   *     data: {
   *         provider: 2, // 支付渠道
   *         ksOrderId: 'Egtg7g9zfsy-2dy20g'
   *     }
   * }
   * ```
   */
  fansTopPay: true
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 代金券支付<br />
   * 对应native接口：couponPay<br/>
   * 注意：需要登录<br/>
   * 对接人： zhuchao、zhangruifeng
   * @method ksBridge.couponPay
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/couponPay.demo
   * @demo component/couponPay
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | ksCouponId | String | 代金券No | √ | - |
   * | fen | Number | 金额 | √ | - |
   * | provider | Number | 渠道 2：微信 3：支付宝 | √ | - |
   * | ksCoin | Number | 快币数 | √ | - |
   * | iapItemName | String | ios支付号 | √ | - |
   * | disableSuccessAlert | Bool |设置 true 时不提示成功弹窗 | X | - |
   * | disableFailAlert | Bool |设置 true 时不提示失败弹窗 | X | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 注意：两端必传参数不一样
   * android 必传 provider/fen/ksCoin/ksCouponId 字段
   * 
   * iOS 必传 ksCoin/fen/iapItemName 字段，
   * disableSuccessAlert、disableFailAlert 为 iOS 7.3.30及以上版本新增字段
   * 
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   *     data: {
   *         provider: 2, // 支付渠道
   *         ksOrderId: 'Egtg7g9zfsy-2dy20g'
   *     }
   * }
   * ```
   */
  couponPay: true
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 通用分享<br />
   * 对应native接口：commonShare<br/>
   * 注意：需要登录<br/>
   * 对接人： songyunlu
   * @method ksBridge.commonShare
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/commonShare.demo
   * @demo component/commonShare
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | param | Object | 分享设置 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * param:
   *
   * | 参数 | 类型 | 描述 |
   * | :--: | :--: | :--: |
   * | platform | Array | 分享的平台 |
   * | imgUrl | String | 图片URL，与 hdImageData 二选一 |
   * | caption | String | 标题 |
   * | desc | String | 描述 |
   * | siteName | String | 显示在分享卡片上的文案 |
   * | siteUrl | String | 实际URL |
   * | smallApp | Object | 小程序参数，例如：{"path":xxx, "app_id":xxxxx} |
   * | hdImageData | String | 高清大图数据，base64String，与 imgUrl 二选一 |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  commonShare: {
    optHandle: function optHandle(opt) {
      var defaultImgUrl = 'https://ali.static.yximgs.com/s1/archive/i/common/logo.png';
      opt.param = opt.param || {};
      opt.param.imgUrl = opt.param.imgUrl || defaultImgUrl;
      return opt;
    }
  }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 调起第三方支付<br />
   * 对应native接口：startGatewayPay<br/>
   * 对接人： zhujiahui
   * @method ksBridge.startGatewayPay
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/startGatewayPay.demo
   * @demo component/startGatewayPay
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | data | Object | version,format,sign,timestamp,biz_content等等 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // ?四种结果：1: 成功、0: 用户取消，其他：出错
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  startGatewayPay: true
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 播放快手课堂的长视频<br />
   * 对应native接口：startPlayLongVideo<br/>
   * 对接人： zhaorong
   * @method ksBridge.startPlayLongVideo
   * @category Component
   * @version >=1.0.1
   * @example ./apis/component/startPlayLongVideo.demo
   * @demo component/startPlayLongVideo
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | title | String | 标题 | √ | - |
   * | coverUrl | String | 封面URL | √ | - |
   * | contentUrl | String | 视频URL | √ | - |
   * | contentWidth | Number | ？ | √ | - |
   * | contentHeight | Number | ？ | √ | - |
   * | duration | Number | ？ | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   */
  startPlayLongVideo: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 录音<br />
   * 对应native接口：startAudioRecord<br/>
   * 对接人： fangchangquan
   * @method ksBridge.startAudioRecord
   * @category Component
   * @version >=1.0.3
   * @example ./apis/component/startAudioRecord.demo
   * @demo component/startAudioRecord
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | timeLimit | number | 录制时长 | √ | 单位 ms，值必须大于 0 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   */
  startAudioRecord: true
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 登录<br />
   * 对应native接口：login<br/>
   * 支持版本：客户端17.09版本<br/>
   * 对接人： songyunlu
   * @method ksBridge.login
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/login.demo
   * @demo component/login
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  login: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 登出<br />
   * 对应native接口：logout<br/>
   * 对接人： songyunlu
   * @method ksBridge.logout
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/logout.demo
   * @demo component/logout
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  logout: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 删除账号？<br />
   * 对应native接口：deleteAccount<br/>
   * 支持版本：暂未上线?<br/>
   * 对接人： songyunlu
   * @method ksBridge.deleteAccount
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/deleteAccount.demo
   * @demo component/deleteAccount
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | info | Object | 信息？| √ | { reasonId: 3, extraInfo: 'text' } |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  deleteAccount: true
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 第三方登录<br />
   * 对应native接口：verifyThirdPartyLogin<br/>
   * 对接人： songyunlu
   * @method ksBridge.verifyThirdPartyLogin
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/verifyThirdPartyLogin.demo
   * @demo component/verifyThirdPartyLogin
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | platform | String | 10几种 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '', //result 不为1时返回错误信息(国际化)
   *     accessToken:'xsdfsdf',
   *     ...
   * }
   * ```
   */
  verifyThirdPartyLogin: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 选择手机国家区号<br />
   * 对应native接口：selectCountryPhoneCode<br/>
   * 对接人： songyunlu
   * @method ksBridge.selectCountryPhoneCode
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/selectCountryPhoneCode.demo
   * @demo component/selectCountryPhoneCode
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     phoneCode: '86'
   * }
   * ```
   */
  selectCountryPhoneCode: true
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 调起录制视频(直播身份认证，已过期)<br />
   * 对应native接口：captureCertVideo<br/>
   * 注意：需要登录，是否还要在 ksbridge 中添加？<br/>
   * 对接人： songyunlu
   * @method ksBridge.captureCertVideo
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/captureCertVideo.demo
   * @demo component/captureCertVideo
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | showUserPortrait | Bool | 是否显示用户轮廓 | X | 默认false |
   * | steps | Array | 验证步骤 | √ | 长度不限，对象数组，{ text: '眨眨眼', startTime: 0, duration: 3300 } |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   *     napshot: 'base 64 image data',
   *     uploadToken: 'xxx',
   *     ticket: 'xxxx'
   * }// positive绿色, negative 红色, neutral
   * ```
   */
  captureCertVideo: true
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 身份证视频上传接口（业务通用）<br />
   * 对应native接口：uploadCertVideo<br/>
   * 支持版本：客户端2017.11月版本<br/>
   * 注意：需要登录<br/>
   * 对接人： songyunlu
   * @method ksBridge.uploadCertVideo
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/uploadCertVideo.demo
   * @demo component/uploadCertVideo
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | uploadToken | String | - | √ | - |
   * | showUserPortrait | Bool | 是否显示用户轮廓 | X | 默认false |
   * | steps | Array | 验证步骤 | √ | 长度不限，对象数组，{ text: '眨眨眼', startTime: 0, duration: 3300 } |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   *     napshot: 'base 64 image data',
   *     uploadToken: 'xxx',
   *     ticket: 'xxxx'
   * }// positive绿色, negative 红色, neutral
   * ```
   */
  uploadCertVideo: true
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 绑定通讯录<br />
   * 对应native接口：uploadContacts<br/>
   * 注意：需要登录<br/>
   * 对接人： songyunlu
   * @method ksBridge.uploadContacts
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/uploadContacts.demo
   * @demo component/uploadContacts
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  uploadContacts: true
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 发送短信<br />
   * 对应native接口：sendSMS<br/>
   * 支持版本：客户端2018.7月新用户邀请活动更新<br/>
   * 对接人： songyunlu
   * @method ksBridge.sendSMS
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/sendSMS.demo
   * @demo component/sendSMS
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | encryptedMobile | String | 加密后的发送者的手机号，支持多个，逗号分割 | X | - |
   * | mobile | String | 手机号，改成支持多个，逗号分割 | √ | - |
   * | content | String | 短信内容 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: ''
   * }
   * ```
   */
  sendSMS: true
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 根据加密后通讯录名称获取原始名称<br />
   * 对应native接口：decryptContactsName<br/>
   * 支持版本：客户端18.7月新用户邀请活动更新<br/>
   * 对接人： songyunlu
   * @method ksBridge.decryptContactsName
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/decryptContactsName.demo
   * @demo component/decryptContactsName
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | encryptedName | String | 加密后的通讯录名称 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     data: [{
   *         encryptedName: 'key1',
   *         name: '小白'
   *     }
   *     ...
   *     ],
   *     error_msg: '',
   * }
   * ```
   */
  decryptContactsName: true
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 绑定手机号<br />
   * 对应native接口：bindPhone<br/>
   * 注意：需要登录<br/>
   * 对接人： songyunlu
   * @method ksBridge.bindPhone
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/bindPhone.demo
   * @demo component/bindPhone
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  bindPhone: true
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 下载<br />
   * 对应native接口：download<br/>
   * 支持版本：客户端18.01月底上线<br/>
   * 对接人： songyunlu
   * @method ksBridge.download
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/download.demo
   * @demo component/download
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | action | String | 类型，start 重新开始 resume 继续或重新下载  pause 暂停 stop 停止 | √ | - |
   * | url | String | 下载地址 | √ | 使用 https 协议有问题 |
   * | fileType | String | 安卓上文件类型为video或image放在相册目录, 其它放在Download目录 | X | - |
   * | photoId | Number | ? | X | - |
   * | clickType | Number | actionBar类型 | X | - |
   * | downloadId | String | 下载id，自定义的 ID，估计是用于唯一标示当前的下载，如果较真可以找客户端确认下 | X | - |
   * | notificationHidden | Bool | ? | X | - |
   * | extraInfo | String | 目前仅支持 game | X - |
   * | downloadName | String | 下载文件名（apk时用包名） | X | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * 注意：
   * 如果要实现 apk 安装包下载一次，第二次再调直接安装不重新下载的效果，必须要配合 downloadProgress、installApk 一起使用
   * 详细调用参考 downloadProgress demo，且 download 中的 extraInfo 必传 game，
   * download、downloadProgress、installApk 三个 bridge 是通过 downloadId 进行关联的
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   *     // fail resume cancel pause start complete progress
   *     stage: "resume",
   *     percent: 33 // 0~100
   * }
   * ```
   */
  download: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 城市选择<br />
   * 对应native接口：selectCity<br/>
   * 支持版本：客户端预计2017.12.26上线版本<br/>
   * 对接人： songyunlu
   * @method ksBridge.selectCity
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/selectCity.demo
   * @demo component/selectCity
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1, // 1成功 0用户取消
   *     error_msg: '',
   *     data: {
   *         code: '', // 选中城市代码
   *         provinceName: '', // 省名称
   *         cityName: '' // 城市名称
   *     }
   * }
   * ```
   */
  selectCity: true
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * MMU活体验证接口<br />
   * 对应native接口：verifyLiveUser<br/>
   * 支持版本：客户端18.06版本，账号申诉需求<br/>
   * 对接人： songyunlu
   * @method ksBridge.verifyLiveUser
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/verifyLiveUser.demo
   * @demo component/verifyLiveUser
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | category | String | 业务分类，目前只有申诉 | √ | - |
   * | preStartDuration | Number | 毫秒 | √ | - |
   * | preStartHint | Array | 提示？ | √ | - |
   * | steps | Array | 验证任务 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // ?四种结果：1: 成功、0: 用户取消，其他：出错
   *     result: 1,
   *     error_msg: '',
   * }
   * ```
   */
  verifyLiveUser: true
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 发布作品<br />
   * 注意：该 bridge 商业化业务特有的<br/>
   * 对应native接口：publishWorks<br/>
   * 对接人： songyunlu
   * @method ksBridge.publishWorks
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/publishWorks.demo
   * @demo component/publishWorks
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | triggerType | Number | 0前端调用（查询是否有发布中作品）,1用户主动点击（触发发布流程）,2 show, 3 hide | √ | - |
   * | photoId | String | 需要编辑去水印的photoId | √ | - |
   * | bottomDistance | Number | 发布状态栏距离底部距离，单位px | √ | - |
   * | success | Function | 成功回调函数 | X | 当作品发布状态发生变化时会调用 |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // 0失败，1成功，2发布中，3取消，4未知（查询无作品发布）
   *     result: 1,
   *     error_msg: '',
   *     // string类型，上传成功的photoId
   *     photoId: 'xxxxxxxx'
   * }
   * ```
   */
  publishWorks: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 对通过手机登录的用户进行短信验证码验证<br />
   * 对应native接口：verifyAccount<br/>
   * 对接人： songyunlu
   * @method ksBridge.verifyAccount
   * @category Component
   * @version >=1.0.0
   * @example ./apis/component/verifyAccount.demo
   * @demo component/verifyAccount
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | info | String | 提示信息，可空 | X | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // 四种结果：成功、用户取消、未登录、未绑定手机
   *     result: 1,
   *     error_msg: '',
   *     data: {}
   * }
   * ```
   */
  verifyAccount: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 调起并进入私信群聊<br/>
   * 对应native接口：enterGroupChat<br/>
   * 对接人：hanchen<br/>
   * @method ksBridge.enterGroupChat
   * @category Component
   * @version >=1.0.6
   * @example ./apis/component/enterGroupChat.demo
   * @demo component/enterGroupChat
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | groupId | String | 群聊ID | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  enterGroupChat: true
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 支付网关提现<br/>
   * 对应native接口：startGatewayWithdraw<br/>
   * 对接人：zhujiahui<br/>
   * @method ksBridge.startGatewayWithdraw
   * @category Component
   * @version >=1.0.7
   * @example ./apis/component/startGatewayWithdraw.demo
   * @demo component/startGatewayWithdraw
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | url | String | 需要在支付网关隔离环境里打开的页面地址 | √ | - |
   **/
  startGatewayWithdraw: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 通过base64保存图片到手机相册<br/>
   * 客户端的支持版本： android 6.5.3，iOS 6.5.5以上<br/>
   * 对应native接口：saveImage<br/>
   * 对接人：zhaorong<br/>
   * @method ksBridge.saveImage
   * @category Component
   * @version >=1.0.14
   * @example ./apis/component/saveImage.demo
   * @demo component/saveImage
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | base64String | String | 图片base64编码 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  saveImage: true
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 给好友发送私信<br/>
   * 对应native接口：sendImFriendMessage<br/>
   * 对接人：lianxin<br/>
   * @method ksBridge.sendImFriendMessage
   * @category Component
   * @version >=1.0.14
   * @example ./apis/component/sendImFriendMessage.demo
   * @demo component/sendImFriendMessage
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | targetType | Number | 发送对象类型 | 必选 | 0 是单聊， 4是群聊 |
   * | targetId | Number | 对象ID | 必选 | 如果是用户，则为用户id, 如果是群，则是groupId |
   * | msgType | Number | 消息类型 | 必选 | 0 是文本，2 是 图片   9 是Link  |
   * | text | String | 文本消息类型时对应发送内容 | 必选 | 与image属性 link属性互斥 |
   * | image | Object | 图片消息类型时对应发送内容 | 必选 | 与text属性 link属性互斥 |
   * | link | Object | link消息类型时对应发送内容 | 必选 | 与text属性 image属性互斥 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  sendImFriendMessage: true
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取客户端默认截图（提供裁剪压缩功能）<br/>
   * 对应native接口：selectScreenshot<br/>
   * 支持版本：Android、iOS >=6.6.6版本<br/>
   * 对接人：hanchen<br/>
   * @method ksBridge.selectScreenshot
   * @category Component
   * @version >=1.0.15
   * @example ./apis/component/selectScreenshot.demo
   * @demo component/selectScreenshot
   * @description 
   * 
   * 调用参数：
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | maxFileSize | Number | 字节单位 | X | 不存在则为不限制，原图超过该值时自动压缩，建议设置，否则图太大 |
   * | maxWidth | Number | 像素单位 | X | 不存在则为不限制，原图超过该值时自动压缩，建议设置，否则图太大 |
   * | maxHeight | Number | 像素单位 | X | 不存在则为不限制，原图超过该值时自动压缩，建议设置，否则图太大 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  selectScreenshot: true
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 直接调起微信登录，并且native也会变为登录状态。<br/>
   * 对应native接口：wechatLogin<br/>
   * 对接人：chenxiaolong<br/>
   * @method ksBridge.wechatLogin
   * @category Component
   * @version >=1.0.16
   * @example ./apis/component/wechatLogin.demo
   * @demo component/wechatLogin
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  wechatLogin: true
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 通用的绑定第三方账号（微信/支付宝）<br/>
   * 对应native接口：authThirdPartyAccount<br/>
   * 对接人：zhujiahui<br/>
   * @method ksBridge.authThirdPartyAccount
   * @category Component
   * @version >=1.0.16
   * @example ./apis/component/authThirdPartyAccount.demo
   * @demo component/authThirdPartyAccount
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | provider | String | 平台标识 | X | wechat | alipay |
   * | auth_param | String | 授权参数 | X | 微信或支付宝的授权参数 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  authThirdPartyAccount: true
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 查看当前下载进度<br />
   * 对应native接口：downloadProgress<br/>
   * 支持版本：仅支持 Android<br/>
   * 对接人： xinyangxi
   * @method ksBridge.downloadProgress
   * @category Component
   * @version >=1.0.18
   * @example ./apis/component/downloadProgress.demo
   * @demo component/downloadProgress
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | action | String | 类型，start 重新开始 resume 继续或重新下载  pause 暂停 stop 停止 | √ | - |
   * | url | String | 下载地址 | √ | - |
   * | downloadId | String | 下载id，自定义的 ID，估计是用于唯一标示当前的下载，如果较真可以找客户端确认下 | √ | - |
   * | downloadName | String | 下载文件名（apk时用包名） | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     // 当进度为 100 时可以调用 installApk 进行安装
   *     percent: 33 // 0~100
   * }
   * ```
   */
  downloadProgress: true
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 安装 apk 包<br />
   * 对应native接口：installApk<br/>
   * 支持版本：仅支持 Android<br/>
   * 对接人： xinyangxi
   * @method ksBridge.installApk
   * @category Component
   * @version >=1.0.18
   * @example ./apis/component/installApk.demo
   * @demo component/installApk
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | action | String | 类型，start 重新开始 resume 继续或重新下载  pause 暂停 stop 停止 | √ | - |
   * | url | String | 下载地址 | √ | - |
   * | downloadId | String | 下载id，自定义的 ID，估计是用于唯一标示当前的下载，如果较真可以找客户端确认下 | √ | - |
   * | downloadName | String | 下载文件名（apk时用包名） | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   */
  installApk: true
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取 currency 参数<br />
   * 对应native接口：iapCurrencyWithParams<br/>
   * 支持版本：仅支持 iOS 客户端 7.3.20 及以上版本<br/>
   * 对接人： zhuchao
   * @method ksBridge.iAPCurrency
   * @category Component
   * @version >=2.0.0
   * @example ./apis/component/iAPCurrency.demo
   * @demo component/iAPCurrency
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数:
   * ```
   * {
   *     result: 1, // 1成功
   *     currency: 'xxxx', // currency 参数
   * }
   * ```
   */
  iAPCurrency: true
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 通用分享<br />
   * 对应native接口：share<br/>
   * 注意：需要登录<br/>
   * 对接人： xuming
   * @method ksBridge.share
   * @category Component
   * @version >=2.0.0
   * @example ./apis/component/share.demo
   * @demo component/share
   * @description
   *
   * 接入wiki:https://wiki.corp.kuaishou.com/pages/viewpage.action?pageId=429799993
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | param | Object | 分享设置 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * param:
   *
   * | 参数 | 类型 | 描述 | 必选 |
   * | :--: | :--: | :--: | :--: |
   * | subBiz | String | 分享对应的业务 | √ |
   * | shareResourceType | String | 分享业务对象的类型（可以用来区分场景） | X |
   * | shareObjectId | String | 分享业务对象的唯一标识，非空的字符串，举例：userId，photoId等 | √ |
   * | showSharePanel | Bool | 是否展示面板 | X |
   * | shareDirectActionUrl | String | 直接发起分享的必要参数 | X |
   * | logParams | String | JSON字符串，该字段传的内容，客户端将直接透传到打点平台 | X |
   * | tokenStoreParams | Object | 定制化回流的文案，图片等，具体会在中台的show/any接口生效，参考下面示例 | X |
   * | commonConfigs | Object | 通用的期望configs，这里的configs回和channel中的expectedConfigs作合并，以custom的为准，这里的参数会传给server，。这里的config会带到show/any的请求中，期望使用这些参数，是否使用sever 端决定。参考下面示例 | X |
   * | forceCommonConfigs | Object | 通用的强制设置configs，这里的configs回和channel中的forceConfigs作合并，以custom的为准，这里的参数不会传给server。这里的config会覆盖show/any的返回值，参考下面示例 | X |
   * | extraChannelOptions | Array | 不同的分享渠道特殊配置，参考下面示例 | X |
   * 
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   *     share: {
   *         result: 1, // 和result 完全相同
   *         errorMsg: null, // 用来展示错误信息的
   *         shareMethod: "TOKEN", // 分享方式
   *         shareChannel: "COPY_LINK", // 分享渠道
   *         shareMode: "APP", // 分享模式 只有 system 和 app两种
   *         kpn: "KUAISHOU",
   *         subBiz: "IM",
   *         appName: "ztShareTest", // 应用的名字
   *         appIconUrl: "", // 应用的icon图标
   *         shareObject: {  // 主要变化的就是这里面的数据。
   *             shareObjectId: "100021728", // 业务对象唯一标识 一定存在的
   *             shareResourceType: "", // 业务场景标识 一定存在的
   *             shareId: "63146521687", // 此次分享唯一标识  一定存在的
   *             shareMessage: "我和4个人正在快手群聊【小吃货们】里聊天， http://www.gifshow.com/s/y2irAQ9n 点击链接加入我们；或者复制这条消息后打开快手",
   *             extParams: {} // 业务扩展字段  一定存在的
   *        }
   *    }
   * }
   * ```
   */
  share: true
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gete2__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getFeed__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queryKCardStatus__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__submitData__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getClientLogInfo__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setClientLogCurrentUrl__ = __webpack_require__(79);







var data = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_5__getClientLogInfo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__setClientLogCurrentUrl__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__gete2__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__getFeed__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__queryKCardStatus__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__submitData__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  data: data
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取imsi<br />
   * 对应native接口：gete2<br/>
   * 对接人： songyunlu
   * @method ksBridge.gete2
   * @category Data
   * @version >=1.0.0
   * @example ./apis/data/gete2.demo
   * @demo data/gete2
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1, // 1为成功, 其他为失败
   *     error_msg: '',
   *     data: {
   *         e2: xxx, // 机密后imsi
   *         iv2: xxx // 初始向量
   *     }
   * }
   * ```
   */
  gete2: true
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取视频详细信息<br />
   * 对应native接口：getFeed<br/>
   * 支持版本：客户端18.01月底上线版本<br/>
   * 注意：兼容转义字符问题，该接口 iOS 返回 object，使用时注意。<br/>
   * 对接人： songyunlu
   * @method ksBridge.getFeed
   * @category Data
   * @version >=1.0.0
   * @example ./apis/data/getFeed.demo
   * @demo data/getFeed
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | photoId | String | photoId | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     result: 1, // 1为成功, 其他为失败
   *     error_msg: '' // result 不为1时返回错误信息(国际化)
   *     data: feedObject,
   *     ext_data: {
   *         photo_id: "", // String
   *         user_id: "", // String
   *         llsid: "" // String
   *     }
   * }
   * ```
   * 
   * feedObject:
   * ```
   * {
   *     actionBarRatio: 1,
   *     adType: "1",
   *     alertNetMobile: true,
   *     appName: "蜀门手游.apk",
   *     backgroundColor: "#ff61d575",
   *     chargeInfo: "xxxxxxxxxx",
   *     conversionType: 1,
   *     creativeId: 96097,
   *     displayType: "2",
   *     extData: "",
   *     hideLabel: false,
   *     orderId: 0,
   *     packageName: "com.ycgame.t11",
   *     photoPage: "",
   *     preloadLandingPage: false,
   *     showEndOption: true,
   *     sourceDescription: "广告",
   *     sourceType: 1,
   *     textColor: "#ffffffff",
   *     title: "立即下载",
   *     tracks: [{…}],
   *     url: "download://dlp.shumensy.com/t11_1192_618.apk",
   *     useH5: false
   * }
   * ```
   */
  getFeed: true
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  queryKCardStatus: true
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * A 启动 B，B 回传数据给 A；A 从 B 中获取值<br />
   * 对应native接口：submitData<br/>
   * 对接人： songyunlu
   * @method ksBridge.submitData
   * @category Data
   * @version >=1.0.0
   * @example ./apis/data/submitData.demo
   * @demo data/submitData
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | type | String | 业务类型，例如 captcha | √ | - |
   * | data | Object | 数据内容 | √ | { token: 'xxxxx' } |
   *
   */
  submitData: true
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 用于打通端内h5页面和客户端页面的pv打点。获取客户端打点相关信息。<br/>
   * 对应native接口：getClientLogInfo<br/>
   * 对接人：miaowei<br/>
   * @method ksBridge.getClientLogInfo
   * @category Data
   * @version >=1.0.15
   * @example ./apis/data/getClientLogInfo.demo
   * @demo data/getClientLogInfo
   * @description
   *
   * 都是从 `logsdk` 中获取，包括refer页信息，当前页信息，和sessinId等。注意：没有result字段（bug）。
   *
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   *
   * 返回参数：
   *
   * ```js
   * {
   *     // 当前webview的页面信息
   *     currentUrlPackage:{
   *         cachedSize: -1,
   *         category: 0,
   *         entryPageId: "",
   *         entryPageSource: "",
   *         identity: "f03bd21e-e3ab-42c8-8d96-9093ebcb4e73",
   *         page: 0,
   *         pageSeq: 0,
   *         params: "",
   *         subPages: "",
   *     },
   *     // 来源页面
   *     referUrlPackage:{
   *         cachedSize: -1,
   *         // 页面分类
   *         category: 1,
   *         // 入口页面(需要继承)
   *         entryPageId: "02c4d0ea-3d4d-4822-b6d5-95c41bd610d8",
   *         // 入口页面(需要继承)
   *         entryPageSource: "MENU",
   *         // pv唯一ID
   *         identity: "02c4d0ea-3d4d-4822-b6d5-95c41bd610d8",
   *         // 页面ID （因技术限制只能用数字）
   *         page: 5,
   *         // 页面被访问的序号
   *         pageSeq: 7,
   *         // 对应打点平台的 params
   *         params: "",
   *         // 对应打点平台的 subPages
   *         subPages: "",
   *     },
   *     // 通过哪个按钮点进来的
   *     referElementPackage:{
   *         // element action （因技术限制只能用数字）
   *         action: 1239,
   *         cachedSize: 17,
   *         index: 0,
   *         name: "LABORATORY",
   *         params: "",
   *         status: 0,
   *         type: 15,
   *         value: 0,
   *     },
   *     sessionId: "1b9de626-6014-4818-8c20-cebcf6adce7b"
   * }
   * ```
   **/
  getClientLogInfo: true
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 对 clientLog 设定当前页面信息<br/>
   * 对应native接口：setClientLogCurrentUrl<br/>
   * 对接人：miaowei<br/>
   * @method ksBridge.setClientLogCurrentUrl
   * @category Data
   * @version >=1.0.15
   * @example ./apis/data/setClientLogCurrentUrl.demo
   * @demo data/setClientLogCurrentUrl
   * @description
   *
   * 注意：没有result字段（bug）
   *
   * 操作 `logsdk` 改变当前webview的页面信息。第一次调用会发送pv打点。后续是跳页动作，会发送leave和pv。
   *
   * 通过当前bridge将h5页面变成客户端页面（在clientLog层面）。这样h5页面的pv和refer都会被正确的处理。解决了之前refer丢失的问题。并且页面展现时长也交由客户端logsdk维护，更准确。
   *
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | currentUrlPackage | Object | 当前页面的信息 | O | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   *
   * currentUrlPackage 示例（参数都是必传）：
   *
   *
   * ```js
   * {
   *     // 页面类型 一般是 1
   *     category: 1,
   *     // 打点平台页面名（因技术限制只能是数字）
   *     page: 554,
   *     // 打点平台 sub_pages
   *     subPages: 'titleSearchView',
   *     // 打点平台 params
   *     params: 'foo=bar'
   * }
   * ```
   *
   * 返回值示例：
   *
   * ```
   * {
   *     result:1,
   *     currentUrlPackage: {
   *         cachedSize: -1,
   *         // 页面分类
   *         category: 1211,
   *         // 入口页面(后续打点需要带上)
   *         entryPageId: "02c4d0ea-3d4d-4822-b6d5-95c41bd610d8",
   *         // 入口页面(后续打点需要带上)
   *         entryPageSource: "MENU",
   *         // pv唯一ID
   *         identity: "3de0aac5-6661-4617-bc5b-46b6a16f2381",
   *         // 打点平台页面名 （因技术限制只能用数字）
   *         page: 554,
   *         // 页面被访问的序号
   *         pageSeq: 8,
   *         // 打点平台 params
   *         params: "foo=bar",
   *         // 打点平台 subPages
   *         subPages: "",
   *     }
   * }
   * ```
   **/
  setClientLogCurrentUrl: true
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__openWechatMiniProgram__ = __webpack_require__(81);


var page = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_1__openWechatMiniProgram__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  page: page
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 打开微信小程序<br />
   * 对应native接口：openWechatMiniProgram<br/>
   * 对接人： chenyuzhe
   * @method ksBridge.openWechatMiniProgram
   * @category Page
   * @version >=1.0.0
   * @example ./apis/page/openWechatMiniProgram.demo
   * @demo page/openWechatMiniProgram
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | originalID | String | 微信小程序原始ID，AES加密，一般由服务端加密给到前端 | √ | 常用参数 |
   * | path | String | 跳转到微信小程序对应的path页面 | √ | 常用参数 |
   * | success | Function | 成功回调函数 | X | 常用参数 |
   * | fail | Function | 失败回调函数 | X | 常用参数 |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * 加密规则详见：https://wiki.corp.kuaishou.com/pages/viewpage.action?pageId=382765812 【感谢@zhaopeng05大佬的总结】
   * 
   * 加密秘钥：https://wiki.corp.kuaishou.com/pages/viewpage.action?pageId=382766285 【有权限控制，如有需要请联系@songyunlu、@fangchangquan】
   *
   * 返回参数：
   * ```
   * {
   *     extMsg：对应JsApi navigateBackApplication中的extraData字段数据
   *     type：未知
   *     errCode：错误码，1代表成功，-2代表小程序未上线，-3代表未关联（猜测，目前未找到相关错误码文档）
   *     errStr：错误描述，当前code= -2、-3未返回错误描述
   * }
   * ```
   */
  openWechatMiniProgram: true
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDeviceInfo__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getLocation__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hasInstalledApp__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__launchApp__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emitFreeTrafficUpdate__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getDeviceSecretInfo__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scanCode__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setClipBoard__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__installedAppVersion__ = __webpack_require__(91);










var system = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_9__installedAppVersion__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__setClipBoard__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__scanCode__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__getDeviceSecretInfo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__getDeviceInfo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__getLocation__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__hasInstalledApp__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__launchApp__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__emitFreeTrafficUpdate__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  system: system
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取设备信息<br />
   * 使用场景：根据设备信息进行特殊判断或逻辑处理<br />
   * 对应native接口：getDeviceInfo<br/>
   * 支持版本：客户端预计18年-01月底上线版本，有更新<br/>
   * 对接人： songyunlu
   * @method ksBridge.getDeviceInfo
   * @category System
   * @version >=1.0.0
   * @example ./apis/system/getDeviceInfo.demo
   * @demo system/getDeviceInfo
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * 
   * iOS：
   * ```
   * {
   *     result: 1, // 1为成功, 其他为失败
   *     error_msg: '' // result不为1时回传错误信息
   *     data: {
   *         appVersion: '1.23.34.3',
   *         networkType: '3G',
   *         manufacturer: 'Apple',
   *         model: 'iPhone 5',
   *         systemVersion: '9.0',
   *         locale: 'en-US',
   *         uuid: '123ksdf-123dfs-sdfsd-sdfs',
   *         idfa: 'xxxxxxx'  // ios独有？android里没有
   *         screenWidth: 320,
   *         screenHeight: 640,
   *         statusBarHeight: 40, // 状态栏高度
   *         titleBarHeight: 88, // 导航栏高度
   *         imei: 'xxx',
   *         androidId: 'xxx',
   *         mac: 'xxx'
   *     }
   * }
   * ```
   * 
   * Android：
   * ```
   * {
   *     result: 1, // 1为成功, 其他为失败
   *     error_msg: '' // result不为1时回传错误信息
   *     data: {
   *         appVersion: '5.5.2.9999',
   *         networkType: 'WIFI',
   *         manufacturer: 'HUAWEI(MHA-L29)',
   *         model: 'MHA-L29',
   *         systemVersion: 'ANDROID_7.0',
   *         locale: 'zh_CN_#Hans',
   *         uuid: 'ANDROID_5bc489e5e0effdbd',
   *         screenWidth: 320,
   *         screenHeight: 640,
   *         statusBarHeight: 72,
   *         titleBarHeight: 150,
   *         imei: '861957039491310',
   *         androidId: '5bc489e5e0effdbd',
   *         mac: '44:C3:46:2E:9C:F8'
   *     }
   * }
   * ```
   * 
   * iOS 端关于 networkType 的说明：
   * 这个字段值是拼接的，格式：运营商_网络类型，例如：中国移动_5
   * 运营商的值可能为：
   * 0：未知
   * 1：中国移动
   * 2：中国联通
   * 3：中国电信
   * 9：其他运营商
   * 
   * 网络类型值可能为：
   * 0：无网络
   * 1：2G
   * 2：3G
   * 3：4G
   * 4：未知
   * 5：WIFI
   * 6：5G
   */
  getDeviceInfo: true
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取经纬度<br />
   * 对应native接口：getLocation<br/>
   * 支持版本：18年12月中旬上线版本<br/>
   * 对接人： fangchangquan
   * @method ksBridge.getLocation
   * @category System
   * @version >=1.0.6
   * @example ./apis/system/getLocation.demo
   * @demo system/getLocation
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   *
   * ```
   * {
   *     result: 1,
   *     data: {
   *         latitude: 40.008365156510884,
   *         longitude: 116.34678248968665,
   *     }
   * }
   * ```
   */
  getLocation: true
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_sniff__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 检查是否安装某个客户端<br />
   * 对应native接口：hasInstalledApp<br/>
   * 对接人： songyunlu
   * @method ksBridge.hasInstalledApp
   * @category System
   * @version >=1.0.0
   * @example ./apis/system/hasInstalledApp.demo
   * @demo system/hasInstalledApp
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | identifier | String | 应用名称或包名，Android 填包名，iOS 填 scheme【对于 iOS，待检查的客户端的 scheme 需要在白名单中，可找gaoke确认添加】 | √ | 常用参数 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * identifier 参数补充说明：
   * 检查是否安装微信或支付宝时，无论 iOS 还是 Android，identifier 只需传 wechat 或 alipay
   * ks-bridge 内部针对 Android 平台，会自动将其映射到 com.tencent.mm 或 com.eg.android.AlipayGphone
   *
   * 返回参数：
   * 
   * ```
   * {
   *     result: 1, // 1为已安装
   * }
   * ```
   */
  hasInstalledApp: {
    optHandle: function optHandle(opt) {
      var identifier = opt.identifier || '';

      if (__WEBPACK_IMPORTED_MODULE_0__lib_sniff__["a" /* default */].isAndroid) {
        switch (identifier) {
          case 'wechat':
            identifier = 'com.tencent.mm';
            break;

          case 'alipay':
            identifier = 'com.eg.android.AlipayGphone';
            break;
        }
      }

      opt.identifier = identifier;
      return opt;
    }
  }
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 打开本地安装的某个app<br />
   * 使用场景：在客户端中唤起第三方的客户端，仅 Android 支持，iOS 可以考虑通过 scheme 打开<br/>
   * 对应native接口：launchApp<br/>
   * 支持版本：客户端18年07月初上线版本<br/>
   * 对接人： songyunlu
   * @method ksBridge.launchApp
   * @category System
   * @version >=1.0.0
   * @example ./apis/system/launchApp.demo
   * @demo system/launchApp
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | identifier | String | 应用名称或包名 | √ | 常用参数 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // 无意义
   *     result: 1
   * }
   * ```
   */
  launchApp: true
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 向客户端发送免流状态更新事件<br />
   * 对应native接口：emitFreeTrafficUpdate<br/>
   * 支持版本：客户端预计18年-01月底上线版本，有更新<br/>
   * 对接人： songyunlu
   * @method ksBridge.emitFreeTrafficUpdate
   * @category System
   * @version >=1.0.0
   * @example ./apis/system/emitFreeTrafficUpdate.demo
   * @demo system/emitFreeTrafficUpdate
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | 常用参数 |
   * | fail | Function | 失败回调函数 | X | 常用参数 |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   */
  emitFreeTrafficUpdate: true
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取设备加密信息<br/>
   * 对应native接口：getDeviceSecretInfo<br/>
   * 对接人：lifang<br/>
   * @method ksBridge.getDeviceSecretInfo
   * @category System
   * @version >=1.0.10
   * @example ./apis/system/getDeviceSecretInfo.demo
   * @demo system/getDeviceSecretInfo
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   **/
  getDeviceSecretInfo: true
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 扫描条形码<br/>
   * 对应native接口：scanCode<br/>
   * 对接人：chenyuzhe<br/>
   * @method ksBridge.scanCode
   * @category System
   * @version >=1.0.12
   * @example ./apis/system/scanCode.demo
   * @demo system/scanCode
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | scene | String | 业务场景 | X | 数据上报用 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  scanCode: true
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 复制到剪贴板<br/>
   * 对应native接口：setClipBoard<br/>
   * 对接人：chenyuzhe<br/>
   * @method ksBridge.setClipBoard
   * @category System
   * @version >=1.0.12
   * @example ./apis/system/setClipBoard.demo
   * @demo system/setClipBoard
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | text | String | 复制的内容 | X | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  setClipBoard: true
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取已安装app的版本信息.仅Android支持<br/>
   * 对应native接口：installedAppVersion<br/>
   * 对接人：xinyangxi<br/>
   * @method ksBridge.installedAppVersion
   * @category System
   * @version >=1.0.13
   * @example ./apis/system/installedAppVersion.demo
   * @demo system/installedAppVersion
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | identifier | string | android包名 | X | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * 返回参数：
   * 
   * ```
   * {
   *     result: 1,
   *     appVersion: '7.0.3'
   * }
   * ```
   **/
  installedAppVersion: true
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setPageTitle__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setStatusBarStyle__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setPhysicalBackButton__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__showToast__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showDialog__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__showAlertDialog__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__showConfirmDialog__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resetTopButtons__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__showBottomSheet__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__setTopLeftBtn__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__setTopLeftSecondBtn__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__setTopRightBtn__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__setTopRightSecondBtn__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__showPicker__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__collapseKeyboard__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__businessAction__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__hideNavigationBar__ = __webpack_require__(109);


















var ui = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_17__hideNavigationBar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_16__businessAction__["a" /* default */], __WEBPACK_IMPORTED_MODULE_15__collapseKeyboard__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__setPageTitle__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__setTopLeftBtn__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__setTopLeftSecondBtn__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__setTopRightBtn__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__setTopRightSecondBtn__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__resetTopButtons__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__setPhysicalBackButton__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__showToast__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__showDialog__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__showAlertDialog__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__showConfirmDialog__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__showBottomSheet__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__showPicker__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__setStatusBarStyle__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  ui: ui
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置 title<br />
   * 对应native接口：setPageTitle<br/>
   * 注意：UI接口访问时不限制域名<br/>
   * 对接人： songyunlu
   * @method ksBridge.setPageTitle
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/setPageTitle.demo
   * @demo ui/setPageTitle
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | title | String | 标题 | √ | - |
   * | titleTextColor | String | 标题颜色 | X | - |
   * | titleBackgroundColor | String | 标题栏背景色 | X | - |
   * 
   * titleTextColor、titleBackgroundColor 新增参数，支持完整的16进制颜色色值，双端 7.3.40 及以上版本支持
   */
  setPageTitle: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置电池栏图标文字颜色<br />
   * 对应native接口：setStatusBarStyle<br/>
   * 注意：Android 系统 5.x 以上电池栏背景色是透明的，5.x 及以下版本不支持沉浸式，电池栏背景色固定是黑色<br/>
   * 对接人： songyunlu
   * @method ksBridge.setStatusBarStyle
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/setStatusBarStyle.demo
   * @demo ui/setStatusBarStyle
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | style | Number | 状态栏文字颜色, 0：黑色，1: 白色，不支持自定义颜色 | √ | - |
   */
  setStatusBarStyle: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 安卓返回按钮事件绑定<br />
   * 对应native接口：setPhysicalBackButton<br/>
   * 注意：仅支持 Android<br/>
   * 对接人： songyunlu
   * @method ksBridge.setPhysicalBackButton
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/setPhysicalBackButton.demo
   * @demo ui/setPhysicalBackButton
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | onClick | Function | 按钮点击事件回调 | √ | - |
   */
  setPhysicalBackButton: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        onClick: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* generateUUCallbackFunction */])(opt.onClick, true)
      });
    }
  }
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 显示 toast<br />
   * 对应native接口：showToast<br/>
   * 对接人： songyunlu
   * @method ksBridge.showToast
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/showToast.demo
   * @demo ui/showToast
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | type | String | toast类型，normal(灰色)，success(绿色)，error(红色) | √ | - |
   * | text | String | toast 内容 | √ | - |
   */
  showToast: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 显示提示框<br />
   * 对应native接口：showDialog<br/>
   * 注意：请不要单独使用 negativeButton、neutralButton 或 positiveButton+neutralButton、negativeButton+neutralButton 组合使用，否则会导致 app 崩溃<br/>
   * 对接人： songyunlu
   * @method ksBridge.showDialog
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/showDialog.demo
   * @demo ui/showDialog
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | title | String | 提示框标题 | X | - |
   * | content | String | 提示框内容 | √ | - |
   * | positiveButton | Object | 确认按钮设置 | ？ | 参见示例代码 |
   * | negativeButton | Object | 取消按钮设置 | X | 参见示例代码 |
   * | neutralButton | Object | ? | X | 参见示例代码 |
   */
  showDialog: {
    key: 'showDialog',
    optHandle: function optHandle(opt) {
      var tmp = {
        notPromise: true
      };

      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign___default()(tmp, opt);

      var positiveButton = tmp.positiveButton,
          negativeButton = tmp.negativeButton,
          neutralButton = tmp.neutralButton;

      if (positiveButton) {
        tmp.positiveButton = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* transformFuncToURL */])(positiveButton);
      }

      if (negativeButton) {
        tmp.negativeButton = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* transformFuncToURL */])(negativeButton);
      }

      if (neutralButton) {
        tmp.neutralButton = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* transformFuncToURL */])(neutralButton);
      }

      return tmp;
    }
  }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 显示提示框<br />
   * 对应native接口：showDialog<br/>
   * 注意：基于 showDialog 组件进行的二次封装，简化调用<br/>
   * 对接人： songyunlu
   * @method ksBridge.showAlertDialog
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/showAlertDialog.demo
   * @demo ui/showAlertDialog
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | title | String | 提示框标题 | X | - |
   * | content | String | 提示框内容 | √ | - |
   * | confirmBtnText | String | 确定按钮文案，默认为 '确定' | X | - |
   * | onConfirm | Function | 确认回调事件 | √ | - |
   */
  showAlertDialog: {
    key: 'showDialog',
    optHandle: function optHandle(opt) {
      var tmp = {
        notPromise: true,
        title: '',
        content: '',
        confirmBtnText: '确定',
        onConfirm: function onConfirm() {}
      };

      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign___default()(tmp, opt);

      return {
        title: tmp.title,
        content: tmp.content,
        positiveButton: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* transformFuncToURL */])({
          text: tmp.confirmBtnText,
          actions: [{
            actionType: 'JS_CALLBACK',
            url: tmp.onConfirm
          }]
        })
      };
    }
  }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 显示提示框<br />
   * 对应native接口：showDialog<br/>
   * 注意：基于 showDialog 组件进行的二次封装，简化调用<br/>
   * 对接人： songyunlu
   * @method ksBridge.showConfirmDialog
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/showConfirmDialog.demo
   * @demo ui/showConfirmDialog
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | title | String | 提示框标题 | X | - |
   * | content | String | 提示框内容 | √ | - |
   * | confirmBtnText | String | 确定按钮文案，默认为 '确定' | X | - |
   * | cancelBtnText | String | 取消按钮文案，默认为 '取消' | X | - |
   * | onConfirm | Function | 确认回调事件 | √ | - |
   * | onCancel | Function | 取消回调事件 | √ | - |
   */
  showConfirmDialog: {
    key: 'showDialog',
    optHandle: function optHandle(opt) {
      var tmp = {
        notPromise: true,
        title: '',
        content: '',
        confirmBtnText: '确定',
        cancelBtnText: '取消',
        onConfirm: function onConfirm() {},
        onCancel: function onCancel() {}
      };

      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_object_assign___default()(tmp, opt);

      return {
        title: tmp.title,
        content: tmp.content,
        cancelable: tmp.cancelable,
        positiveButton: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* transformFuncToURL */])({
          text: tmp.confirmBtnText,
          actions: [{
            actionType: 'JS_CALLBACK',
            url: tmp.onConfirm
          }]
        }),
        negativeButton: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* transformFuncToURL */])({
          text: tmp.cancelBtnText,
          actions: [{
            actionType: 'JS_CALLBACK',
            url: tmp.onCancel
          }]
        })
      };
    }
  }
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 重设顶部nav bar的按钮状态<br />
   * 对应native接口：resetTopButtons<br/>
   * 支持版本：客户端18.05月版本<br/>
   * 对接人： songyunlu
   * @method ksBridge.resetTopButtons
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/resetTopButtons.demo
   * @demo ui/resetTopButtons
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   */
  resetTopButtons: true
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 显示底部ActionSheet<br />
   * 对应native接口：showBottomSheet<br/>
   * 注意：Native 固定添加取消操作，点击取消回调无value<br/>
   * 对接人： songyunlu
   * @method ksBridge.showBottomSheet
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/showBottomSheet.demo
   * @demo ui/showBottomSheet
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | title | String | 标题 | √ | - |
   * | options | Object | 选项，对象数组 | √ | 例如 { text: '1', value: 1, type: 0 } |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * 返回参数：
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   *     // 选项的value值
   *     value: ''
   * }
   * ```
   */
  showBottomSheet: true
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置顶部左侧按钮<br />
   * 对应native接口：setTopLeftBtn<br/>
   * 注意：不调用时默认为back类型, 每次打开页面时使用默认配置, 不使用上个页面的配置<br/>
   * 对接人： songyunlu
   * @method ksBridge.setTopLeftBtn
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/setTopLeftBtn.demo
   * @demo ui/setTopLeftBtn
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | show | Bool | 是否显示 | √ | - |
   * | icon | String | wallet，back，camera，chat，close，edit，question，info，more，refresh，share，custom，done，可选，默认为 back | X | iOS: 支持icon和text同时设置，Android: 存在icon时使用icon, 否则使用text |
   * | iconUrl | Object | icon为custom是，指定图片url，{ normal: '默认按钮图片url', pressed: '点击时按钮图片url，未设置时使用normal的设置' } | X | - |
   * | text | String | 可为空 | X | - |
   * | textColor | String | 文字颜色, 仅作用于text类button | X | - |
   * | onClick | Function | 按钮点击事件回调 | X | - |
   * 
   * 注意：
   * 在 Android 5 且设置 layoutType=4 时，沉浸式有兼容问题，导航条虽然隐藏但是会盖在 h5 上面，导致导航栏位置点击不响应，可以考虑使用 hideNavigationBar 隐藏
   */
  setTopLeftBtn: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true,
        onClick: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* generateUUCallbackFunction */])(opt.onClick, true)
      });
    }
  }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置左侧第二个按钮<br />
   * 对应native接口：setTopLeftSecondBtn<br/>
   * 对接人： songyunlu
   * @method ksBridge.setTopLeftSecondBtn
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/setTopLeftSecondBtn.demo
   * @demo ui/setTopLeftSecondBtn
   * @description
   *
   * 调用参数：
   * 与 setTopLeftBtn 相同
   * **android 平台仅在广告详情页可用**
   */
  setTopLeftSecondBtn: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true,
        onClick: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* generateUUCallbackFunction */])(opt.onClick, true)
      });
    }
  }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置顶部右侧按钮<br />
   * 对应native接口：setTopRightBtn<br/>
   * 注意：不调用时默认为back类型, 每次打开页面时使用默认配置, 不使用上个页面的配置<br/>
   * 对接人： songyunlu
   * @method ksBridge.setTopRightBtn
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/setTopRightBtn.demo
   * @demo ui/setTopRightBtn
   * @description
   *
   * 调用参数：
   * 与 setTopLeftBtn 相同
   */
  setTopRightBtn: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true,
        onClick: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* generateUUCallbackFunction */])(opt.onClick, true)
      });
    }
  }
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置右侧第二个按钮<br />
   * 对应native接口：setTopRightSecondBtn<br/>
   * 对接人： songyunlu
   * @method ksBridge.setTopRightSecondBtn
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/setTopRightSecondBtn.demo
   * @demo ui/setTopRightSecondBtn
   * @description
   *
   * 调用参数：
   * 与 setTopLeftBtn 相同
   */
  setTopRightSecondBtn: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true,
        onClick: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* generateUUCallbackFunction */])(opt.onClick, true)
      });
    }
  }
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 通用单选组件<br />
   * 对应native接口：showPicker<br/>
   * 对接人： songyunlu
   * @method ksBridge.showPicker
   * @category UI
   * @version >=1.0.0
   * @example ./apis/ui/showPicker.demo
   * @demo ui/showPicker
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | param | Object | picker 内容配置 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * 返回参数：
   * ```
   * {
   *     // 1成功 0用户取消
   *     result: 1,
   *     error_msg: '',
   *     data: {
   *         // selectedData是个数组，分别是选中的第一列的值，第二列的值，第三列的值
   *         selectedData: [
   *             { //选中的第一列的值
   *                 text: '',
   *                 id: ''
   *             },
   *             { //选中的第二列的值
   *                 text: '',
   *                 id: ''
   *             }
   *         ]
   *     }
   * }
   * ```
   */
  showPicker: true
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 收起软键盘<br/>
   * 对应native接口：collapseKeyboard<br/>
   * 对接人：zhengmeiyu<br/>
   * @method ksBridge.collapseKeyboard
   * @category UI
   * @version >=1.0.4
   * @example ./apis/ui/collapseKeyboard.demo
   * @demo ui/collapseKeyboard
   **/
  collapseKeyboard: {
    optHandle: function optHandle() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 唤起native时间控件<br/>
   * 对应native接口：businessAction<br/>
   * 对接人：liguohui<br/>
   * @method ksBridge.businessAction
   * @category UI
   * @version >=1.0.16
   * @example ./apis/ui/businessAction.demo
   * @demo ui/businessAction
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | action | String | bridge名称 | true | LaunchDatePicker |
   * | data | JSON | 相关参数 | true | - |
   * | complete | Function | 结束回调| false | - |
   * 
   * data内容：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | datePickerInfo | Object | 参数容器 | true ||
   * 
   * datePickerInfo内容：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | title | String | 标题| true ||
   * | startTimestamp | Number | 可选范围开始时间| false |时间戳ms|
   * | endTimestamp | Number | 可选范围结束时间 | false |时间戳ms|
   * | defaultTimestamp | Number | 默认时间 | false |时间戳ms|
   **/
  businessAction: true
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 隐藏导航栏区域，对所有layoutType生效<br/>
   * 对应native接口：hideNavigationBar<br/>
   * 对接人：lianxin<br/>
   * @method ksBridge.hideNavigationBar
   * @category UI
   * @version >=1.0.16
   * @example ./apis/ui/hideNavigationBar.demo
   * @demo ui/hideNavigationBar
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  hideNavigationBar: true
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadUrlOnNewPage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joinGroup__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setSlideBack__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setMiddleSlideBack__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popBack__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exitWebView__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__exitCurrentWebview__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setBounceStyle__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__openYodaPage__ = __webpack_require__(119);










var webview = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_9__openYodaPage__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__setBounceStyle__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__exitCurrentWebview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__popBack__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__exitWebView__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__loadUrlOnNewPage__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__joinGroup__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__setMiddleSlideBack__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__setSlideBack__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  webview: webview
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 打开新的 webview<br />
   * 对应native接口：loadUrlOnNewPage<br/>
   * 对接人： songyunlu
   * @method ksBridge.loadUrlOnNewPage
   * @category WebView
   * @version >=1.0.0
   * @example ./apis/webview/loadUrlOnNewPage.demo
   * @demo webview/loadUrlOnNewPage
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | url | String | 新打开的页面的 URL 地址 | √ | 常用参数 |
   * | type | String | 类型？ | √ | 常用参数，值可选 'close' 或 'back' |
   *
   */
  loadUrlOnNewPage: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 调起bridge加入群聊<br />
   * 对应native接口：joinGroup<br/>
   * 对接人： hanchen
   * @method ksBridge.joinGroup
   * @category WebView
   * @version >=1.0.1
   * @example ./apis/webview/joinGroup.demo
   * @demo webview/joinGroup
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | groupid | String | 群聊id | √ | - |
   * | signData | String | 标识群聊分享信息的签名 | √ | - |
   * | inviterid | String | 邀请人id | √ | - |
   * | closeWebViewOnSuccess | Bool | 是否在成功调起bridge后关闭当前页面webview | X | 默认值：true |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   */
  joinGroup: true
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置页面是否开启滑动返回<br />
   * 对应native接口：setSlideBack<br/>
   * 注意：控制不能???<br/>
   * 对接人： songyunlu
   * @method ksBridge.setSlideBack
   * @category WebView
   * @version >=1.0.0
   * @example ./apis/webview/setSlideBack.demo
   * @demo webview/setSlideBack
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | enabled | Bool | 是否开启 | √ | - |
   *
   */
  setSlideBack: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置页面中部滑动返回功能<br />
   * 对应native接口：setMiddleSlideBack<br/>
   * 注意：边缘返回不受控制，仅 iOS 支持<br/>
   * 对接人： songyunlu
   * @method ksBridge.setMiddleSlideBack
   * @category WebView
   * @version >=1.0.0
   * @example ./apis/webview/setMiddleSlideBack.demo
   * @demo webview/setMiddleSlideBack
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | enabled | Bool | 打开滑动返回，false关闭滑动返回 | √ | - |
   *
   */
  setMiddleSlideBack: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 退出<br />
   * 对应native接口：popBack<br/>
   * 注意：如果当前是第一个，就退出webview，否则就history.back()<br/>
   * 对接人： songyunlu
   * @method ksBridge.popBack
   * @category WebView
   * @version >=1.0.0
   * @example ./apis/webview/popBack.demo
   * @demo webview/popBack
   * @description
   * 
   */
  popBack: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        // 因为这种参数约定不规范的约定太恶心
        // 所以我决定用这个恶心的使用方式来强烈提示
        // 一定要规范定义和native的交互参数
        // 这两个桥不需要参数
        '__self__': false
      });
    }
  }
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 退出当前web page<br />
   * 对应native接口：exitWebView<br/>
   * 注意：ios如果不在当前webview, exitWebview可能会失效<br/>
   * 对接人： songyunlu
   * @method ksBridge.exitWebView
   * @category WebView
   * @version >=1.0.0
   * @example ./apis/webview/exitWebView.demo
   * @demo webview/exitWebView
   */
  exitWebView: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        // 因为这种参数约定不规范的约定太恶心
        // 所以我决定用这个恶心的使用方式来强烈提示
        // 一定要规范定义和native的交互参数
        // 这两个桥不需要参数
        '__self__': false
      });
    }
  }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 关闭执行该代码的webview<br/>
   * 对应native接口：exitCurrentWebview<br/>
   * 对接人：leijie<br/>
   * @method ksBridge.exitCurrentWebview
   * @category WebView
   * @version >=1.0.16
   * @example ./apis/webview/exitCurrentWebview.demo
   * @demo webview/exitCurrentWebview
   * @description 
   * 
   * 作用与 exitWebView 类似
   * 
   * 使用场景：当前 h5 页面将打开一个 native 页，同时需要关闭当前 h5 页面时，Android 调用 exitWebView，iOS 使用 exitCurrentWebview 即可。
   * 
   * 新增 exitCurrentWebview 的原因是因为 iOS 端调用 exitWebView 会关闭路由堆栈最顶上的页面，即新开的 native 页，考虑改动 exitWebView 影响范围过大，故新增 exitCurrentWebview 支持
   * 
   * 具体使用可以参考「leijie」封装的模块：http://git.corp.kuaishou.com/leijie/ks-exitwebview，有相关问题可联系 leijie
   **/
  exitCurrentWebview: true
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置页面上下拉回调效果(仅iOS)，最低版本6.10.4<br/>
   * 对应native接口：setBounceStyle<br/>
   * 对接人：songyunlu<br/>
   * @method ksBridge.setBounceStyle
   * @category WebView
   * @version >=1.0.16
   * @example ./apis/webview/setBounceStyle.demo
   * @demo webview/setBounceStyle
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | enable | boolean | 是否允许页页上拉下滑，默认为true | Y | 仅iOS生效，安卓都是关闭状态 |
   **/
  setBounceStyle: true
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 用 yoda webview 打开页面<br />
   * 对应native接口：openYodaPage<br/>
   * 支持版本：ios 预计2020.03.03封版<br/>
   * 对接人： fangchangquan
   * @method ksBridge.openYodaPage
   * @category WebView
   * @version >=1.0.18
   * @example ./apis/webview/openYodaPage.demo
   * @demo webview/openYodaPage
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | bizId | String | bizId有对应的url和launchOptions，如果继续传url和launchOptions则会覆盖bizId中相应的配置建议传了bizId就不要传url和launchOption，防止后续更新线上配置不能影响到这里 | X | - |
   * | url | String | 新打开的页面的 URL 地址，指定了bizId 可为空 | √ | 常用参数 |
   * | launchOptions | Object | webview 相关的配置，参考http://zt.corp.kuaishou.com/user/document/detail?serviceId=8&portalType=1&docId=113 | X | - |
   * | data | Object | 携带给新 webview 的数据,可以被 yoda 的 getLaunchParams bridge 获取 | X | - |
   *
   */
  openYodaPage: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__on__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addEventListener__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__off__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__removeEventListener__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emit__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dispatchEvent__ = __webpack_require__(126);







var event = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_1__on__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__addEventListener__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__off__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__removeEventListener__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__emit__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__dispatchEvent__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  event: event
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 监听事件<br />
   * 使用场景：页面监听一个事件，由客户端触发或前端通过 emit 方法来触发事件回调<br/>
   * 注意：on、off 方法指定回调 handler 时，使用方式与 addEventListener、removeEventListener 类似，不能传匿名函数<br/>
   * 对应native接口：on<br/>
   * 对接人： fangchangquan
   * @method ksBridge.on
   * @category Event
   * @version >=1.0.0
   * @example ./apis/event/on.demo
   * @demo event/on
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | type | String | 事件名称，支持客户端定义的事件，也可以自定义 | √ | 客户端定义的事件详见下文 |
   * | handler | Function | type 对应的事件的回调 | √ | - |
   * | success | Function | on 调用的成功回调 | X | - |
   * | fail | Function | on 调用的失败回调 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * | type | 可能的 value | 解释 | 备注 |
   * | :--: | :--: | :--: |:--: |
   * | native_pageFinished |  | 加载页面完毕 |  |
   * | native_background |  | 进入后台 |  |
   * | native_foreground |  | 进入前台 |  |
   * | native_leave |  | 切换到App内其它页面（or webview） |  |
   * | native_reentry |  | 从其他页面（or webview）切换回来 |  |
   * | native_loadPage |  | 在当前webview打开新页面 |  |
   * | h5_XXXXXXX |  | 由不同webview之间发起和处理的事件，需要H5_前缀 |  |
   *
   * 返回参数：
   *
   * on 调用的回调:
   * ```
   * {
   *     result: 1
   * }
   * ```
   *
   * handler:
   * 具体的值根据触发事件时回传的数据来定，数据类型与 emit 回传的数据类型一致。
   * ```
   * {
   *     key: 'value'
   * }
   * ```
   */
  on: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        handler: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* generateHandlerFunction */])(opt.handler)
      });
    }
  }
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 监听事件<br />
   * 使用场景：监听事件<br/>
   * 对应native接口：on<br/>
   * 对接人： fangchangquan
   * @method ksBridge.addEventListener
   * @category Event
   * @version >=2.0.0
   * @example ./apis/event/addEventListener.demo
   * @demo event/addEventListener
   * @description
   * 
   * 注意：
   * 调用方式与 on 一样
   * 
   * 与 on 的区别：
   * 在主 APP 旧容器中实际是使用 on bridge 进行事件监听，在 yoda 容器中，使用 yoda.event.addEventListener 进行监听
   * 所以使用该方法监听事件时，需要保证该事件在两个 webview 中支持，目前仅支持 data-fetch-change 事件
   */
  addEventListener: {
    key: 'on',
    // 适配 yoda webview 下 event.addEventListener bridge
    yodaBridge: {
      namespace: 'event',
      bridge: 'addEventListener'
    },
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        handler: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* generateHandlerFunction */])(opt.handler)
      });
    }
  }
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 解绑事件<br />
   * 注意：on、off 方法指定回调 handler 时，使用方式与 addEventListener、removeEventListener 类似，不能传匿名函数<br/>
   * 对应native接口：off<br/>
   * 对接人： fangchangquan
   * @method ksBridge.off
   * @category Event
   * @version >=1.0.0
   * @example ./apis/event/off.demo
   * @demo event/off
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | type | String | 事件名称，支持客户端定义的事件，也可以自定义 | X | 客户端事件请查阅 on 方法相关说明 |
   * | handler | Function | type 对应的事件的回调 | X | 解绑 handler 需要与调用 on 监听时传的 handler 为同一个回调 |
   * | success | Function | on 调用的成功回调 | X | - |
   * | fail | Function | on 调用的失败回调 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * off 解绑规则：
   * 如果只有type存在，则解绑该type下所有handler，如果只有handler存在，则解绑所有type下的该handler，
   * 如果type，handler都有， 则只解绑该type下的该handler；如果type，handler都不存在， 则清除所有通过on绑定的事件
   */
  off: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        handler: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* generateHandlerFunction */])(opt.handler)
      });
    }
  }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 解绑事件<br />
   * 使用场景：解绑事件监听<br/>
   * 对应native接口：off<br/>
   * 对接人： fangchangquan
   * @method ksBridge.removeEventListener
   * @category Event
   * @version >=2.0.0
   * @example ./apis/event/removeEventListener.demo
   * @demo event/removeEventListener
   * @description
   * 
   * * 注意：
   * 调用方式与 off 一样
   * 
   * 与 off 的区别：
   * 在主 APP 旧容器中实际是使用 off bridge 进行事件解除监听，在 yoda 容器中，使用 yoda.event.removeEventListener 进行监听
   * 所以使用该方法解除监听事件时，需要保证该事件在两个 webview 中支持，目前仅支持 data-fetch-change 事件
   * 
   */
  removeEventListener: {
    key: 'off',
    // 适配 yoda webview 下 event.removeEventListener bridge
    yodaBridge: {
      namespace: 'event',
      bridge: 'removeEventListener'
    },
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        handler: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* generateHandlerFunction */])(opt.handler)
      });
    }
  }
});

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_json_stringify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_helpers_esm_typeof__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_helpers_esm_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_helpers_esm_typeof__);


/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 发送一个事件，与 on 方法配合使用<br />
   * 对应native接口：emit<br/>
   * 对接人： fangchangquan
   * @method ksBridge.emit
   * @category Event
   * @version >=1.0.0
   * @example ./apis/event/emit.demo
   * @demo event/emit
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | type | String | 事件名称 | √ | 客户端事件请查阅 on 方法相关说明 |
   * | data | Object/String | 回传的数据 | √ | - |
   * | success | Function | 成功回调 | X | - |
   * | fail | Function | 失败回调 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   */
  emit: {
    optHandle: function optHandle(opt) {
      if (opt && __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_helpers_esm_typeof___default()(opt.data) === 'object' && opt.data !== null) {
        opt.data = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_json_stringify___default()(opt.data);
      }

      opt.notPromise = true;
      return opt;
    }
  }
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_json_stringify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_helpers_esm_typeof__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_helpers_esm_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_helpers_esm_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ks_yoda_js_sdk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ks_yoda_js_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ks_yoda_js_sdk__);



/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 发送一个事件，与 addEventListener 方法配合使用<br />
   * 对应native接口：emit<br/>
   * 对接人： fangchangquan
   * @method ksBridge.dispatchEvent
   * @category Event
   * @version >=1.0.0
   * @example ./apis/event/dispatchEvent.demo
   * @demo event/dispatchEvent
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | type | String | 事件名称 | √ | 客户端事件请查阅 on 方法相关说明 |
   * | data | Object | 回传的数据 | √ | - |
   * | success | Function | 成功回调 | X | - |
   * | fail | Function | 失败回调 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   */
  dispatchEvent: {
    key: 'emit',
    yodaBridge: {
      namespace: 'event',
      bridge: 'dispatchEvent'
    },
    optHandle: function optHandle(opt) {
      if (!__WEBPACK_IMPORTED_MODULE_2__ks_yoda_js_sdk___default.a.isInYoda && opt && __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs3_helpers_esm_typeof___default()(opt.data) === 'object' && opt.data !== null) {
        opt.data = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs3_core_js_json_stringify___default()(opt.data);
      }

      opt.notPromise = true;
      return opt;
    }
  }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploadIntownVideo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previewIntownVideo__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reuploadIntownVideo__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intownShare__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accessIntownInfo__ = __webpack_require__(132);






var intown = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_1__uploadIntownVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__previewIntownVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__reuploadIntownVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__intownShare__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__accessIntownInfo__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  intown: intown
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 同乡拍摄并上传视频<br />
   * 对应native接口：uploadIntownVideo<br/>
   * 注意：回调多次，前端可根据 progress 显示上传进度<br/>
   * 对接人： miaowei
   * @method ksBridge.uploadIntownVideo
   * @category Intown
   * @version >=1.0.0
   * @example ./apis/intown/uploadIntownVideo.demo
   * @demo intown/uploadIntownVideo
   * @description
   * 
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // 1: 正常; 0: 取消; 其他: 失败/异常
   *     result: 1,
   *     data: {
   *         // 用于预览、重传
   *         uploadId: '94015796-3862-483E-9EA6-FB053D6667B3',
   *         // 视频封面 url，progress 为 100 时才有
   *         coverUrl: 'http://ali2.a.yximgs.com/bs2/intownImage/MjAyMTY_o.jpg',
   *         coverKey: '1531293052316_qUkZkqISQ9qv4QLIVI600ssoq',
   *         // 视频 url，progress 为 100 时才有
   *         videoUrl: 'http://ali2.a.yximgs.com/bs2/intownVideo/MjAyMTY.mp4',
   *         // 进度
   *         progress: '100',
   *         // 用于预览、重传
   *         filePath: '/var/mobile/Containers/Data/Application/27B876FE-7014-4ED2-9A21-D6943CBEA61F/Documents/gifs/152B184D-C134-4B06-B009-F5813AC46EA8.MOV',
   *         photoId': '5xwyk9vaarq9w6u'
   *     }
   * }
   * ```
   */
  uploadIntownVideo: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 同乡视频预览<br />
   * 对应native接口：previewIntownVideo<br/>
   * 注意：没有回调<br/>
   * 对接人： miaowei
   * @method ksBridge.previewIntownVideo
   * @category Intown
   * @version >=1.0.0
   * @example ./apis/intown/previewIntownVideo.demo
   * @demo intown/previewIntownVideo
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | uploadId | String | uploadIntownVideo 方法返回的 uploadId | √ | - |
   * | filePath | String | uploadIntownVideo 方法返回的 filePath | √ | - |
   *
   */
  previewIntownVideo: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 同乡视频预览<br />
   * 对应native接口：reuploadIntownVideo<br/>
   * 对接人： miaowei
   * @method ksBridge.reuploadIntownVideo
   * @category Intown
   * @version >=1.0.0
   * @example ./apis/intown/reuploadIntownVideo.demo
   * @demo intown/reuploadIntownVideo
   * @description
   * 
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | uploadId | String | uploadIntownVideo 方法返回的 uploadId | √ | - |
   * | filePath | String | uploadIntownVideo 方法返回的 filePath | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * 返回参数：
   * 与**uploadIntownVideo**一样，详见**uploadIntownVideo**
   */
  reuploadIntownVideo: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 同乡社交平台分享<br />
   * 对应native接口：intownShare<br/>
   * 对接人： miaowei
   * @method ksBridge.intownShare
   * @category Intown
   * @version >=1.0.0
   * @example ./apis/intown/intownShare.demo
   * @demo intown/intownShare
   * @description
   * 
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | hideResultToast | Bool | 分享后是否显示  “分享成功”/“分享失败” 的 toast | X | 新增字段，具体可咨询chenxiaolong |
   * | param | Object | 分享设置，具体可查看示例代码 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // 1: 正常; 0: 取消; 其他: 失败/异常
   *     result: 1
   * }
   * ```
   */
  intownShare: true
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 设置或者读取同乡信息<br />
   * 对应native接口：accessIntownInfo<br/>
   * 对接人： miaowei
   * @method ksBridge.accessIntownInfo
   * @category Intown
   * @version >=1.0.0
   * @example ./apis/intown/accessIntownInfo.demo
   * @demo intown/accessIntownInfo
   * @description
   * 
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | intownInfo | String | 同乡信息，对象字符串？ | X | 设置信息时需要该字段，读取时不需要 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // 1: 正常; 0: 取消; 其他: 失败
   *     result: 1,
   *     // 读取和设置都需要返回
   *     intownInfo : "{ \"intownId\": \"efa3r23\", \"mtime\": 123131231 }"
   * }
   * ```
   */
  accessIntownInfo: true
});

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startAuthActivity__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startThirdPartyPaymentForWebActivity__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__downloadThirdPartyAPP__ = __webpack_require__(136);




var third = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_1__startAuthActivity__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__startThirdPartyPaymentForWebActivity__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__downloadThirdPartyAPP__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  third: third
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 授权<br />
   * 对应native接口：startAuthActivity<br/>
   * 注意：仅 Android 支持<br />
   * 对接人： songyunlu
   * @method ksBridge.startAuthActivity
   * @category Third
   * @version >=1.0.0
   * @example ./apis/third/startAuthActivity.demo
   * @demo third/startAuthActivity
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | kwai_request_app_id | String | - | √ | - |
   * | kwai_request_type | String | - | √ | - |
   * | kwai_request_scope | String | - | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * 
   * 成功：
   * ```
   * {
   *     result: 1,
   *     kwai_response_open_id: '',
   *     kwai_response_code: '',
   *     kwai_response_access_token: ''
   * }
   * ```
   * 
   * 失败：
   * ```
   * {
   *     result: kwai_response_error_code,
   *     error_msg: kwai_response_error_msg
   * }
   * ```
   */
  startAuthActivity: true
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 支付<br />
   * 对应native接口：startThirdPartyPaymentForWebActivity<br/>
   * 注意：客户端将要下线，客户端将要下线，客户端将要下线，请不要再使用<br />
   * 对接人： songyunlu、zhangruifeng（客户端）
   * @method ksBridge.startThirdPartyPaymentForWebActivity
   * @category Third
   * @version >=1.0.0
   * @description
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | kwai_request_prepay_id | String | - | √ | - |
   * | kwai_order_id | String | - | √ | - |
   * | kwai_request_app_id | String | - | √ | - |
   * | kwai_request_sign | String | - | √ | - |
   * | kwai_request_timestamp | String | - | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * 
   * ```
   * {
   *     result: 1,
   *     error_msg: '',
   *     kwai_order_id: ''
   * }
   * ```
   */
  startThirdPartyPaymentForWebActivity: true
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 下载<br />
   * 对应native接口：downloadThirdPartyAPP<br/>
   * 注意：仅 Android 支持<br/>
   * 对接人： songyunlu
   * @method ksBridge.downloadThirdPartyAPP
   * @category Third
   * @version >=1.0.0
   * @example ./apis/third/downloadThirdPartyAPP.demo
   * @demo third/downloadThirdPartyAPP
   * @description
   *
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | action | String | 类型，start 重新开始 resume 继续或重新下载  pause 暂停 stop 停止 | √ | - |
   * | url | String | 下载地址 | √ | 使用 https 协议有问题 |
   * | fileType | String | 安卓上文件类型为video或image放在相册目录, 其它放在Download目录？ | X | - |
   * | photoId | Number | ? | X | - |
   * | clickType | Number | actionBar类型 | X | - |
   * | kwai_request_app_id | String | ? | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * 与**download**一致，请参考**download**的文档
   */
  downloadThirdPartyAPP: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_extend__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploadShopVideo__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previewVideo__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reuploadShopVideo__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__merchantShare__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__querySessionIsStickyOnTop__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reqSessionStickyOnTopWithThread__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__getSidToken__ = __webpack_require__(144);








var merchant = Object(__WEBPACK_IMPORTED_MODULE_0__utils_extend__["a" /* default */])(true, __WEBPACK_IMPORTED_MODULE_7__getSidToken__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__reqSessionStickyOnTopWithThread__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__querySessionIsStickyOnTop__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__uploadShopVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__previewVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__reuploadShopVideo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__merchantShare__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
  merchant: merchant
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 评价视频上传（支持拍摄，选择视频）<br />
   * 对应native接口：uploadShopVideo<br/>
   * 支持版本：android >= 6.3.2 ios >= 6.3.0<br/>
   * 注意：回调多次，前端可根据 progress 显示上传进度<br/>
   * 对接人： baiyunpeng
   * @method ksBridge.uploadShopVideo
   * @category Merchant
   * @version >=1.0.14
   * @example ./apis/merchant/uploadShopVideo.demo
   * @demo merchant/uploadShopVideo
   * @description
   * 
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | taskId | String | 任务id | √ | 由特定接口下发 |
   * | token | String | 上传token | √ | 由特定接口下发 |
   * | coverUploadUrl | String | 上传封面图接口 | √ | 由特定接口下发 |
   * | endpointList | Array | 上传配置（客户端skd用） | √ | 由特定接口下发 |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // 1: 正常; 0: 取消; 其他: 失败/异常
   *     result: 1,
   *     data: {
   *         // 用于预览、重传
   *         uploadId: '94015796-3862-483E-9EA6-FB053D6667B3',
   *         // 本地文件路径，用于预览视频
   *         filePath: '/var/mobile/Containers/Data/Application/27B876FE-7014-4ED2-9A21-D6943CBEA61F/Documents/gifs/152B184D-C134-4B06-B009-F5813AC46EA8.MOV',
   *         // 视频封面 base64值，用于预览展示（只有第一次回调返回，前端可直接使用）
   *         thumbnail: 'data:image/png:xxxxxxxxxxxxxxxxx',
   *         // 上传状态 success | fail
   *         status: 'success'
   *         // 进度 (进度100并且success的时候可判定上传成功)
   *         progress: '100',
   * 
   *     }
   * }
   * ```
   */
  uploadShopVideo: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 评价视频预览<br />
   * 对应native接口：previewVideo<br/>
   * 注意：没有回调<br/>
   * 支持版本：android >= 6.3.2 ios >= 6.3.0<br/>
   * 对接人： baiyunpeng
   * @method ksBridge.previewVideo
   * @category Merchant
   * @version >=1.0.14
   * @example ./apis/merchant/previewVideo.demo
   * @demo merchant/previewVideo
   * @description
   *
   * 调用参数（优先使用filePath）：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | videoUrl | String | 视频cdn地址 | √ | - |
   * | filePath | String | uploadShopVideo 方法返回的 filePath | √ | - |
   *
   */
  previewVideo: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true
      });
    }
  }
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 评价视频重传<br />
   * 对应native接口：reUploadShopVideo<br/>
   * 支持版本：android >= 6.3.2 ios >= 6.3.0<br/>
   * 对接人： baiyunpeng
   * @method ksBridge.reUploadShopVideo
   * @category Merchant
   * @version >=1.0.14
   * @example ./apis/merchant/reUploadShopVideo.demo
   * @demo merchant/reUploadShopVideo
   * @description
   * 
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | uploadId | String | uploadShopVideo 方法返回的 uploadId | X | uploadId与filePath至少填写1个，如果都有优先使用filePath |
   * | filePath | String | uploadShopVideo 方法返回的 filePath | X | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   * 
   * 返回参数：
   * 与**uploadShopVideo**一样，详见**uploadShopVideo**
   */
  reUploadShopVideo: {
    optHandle: function optHandle(opt) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* assignOptions */])(opt, {
        notPromise: true,
        notDelete: true
      });
    }
  }
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 快手电商定制化分享<br />
   * 对应native接口：merchantShare<br/>
   * 支持版本：android >= 6.5.3 ios >= 6.5.6<br/>
   * 对接人： baiyunpeng
   * @method ksBridge.merchantShare
   * @category Merchant
   * @version >=1.0.14
   * @example ./apis/merchant/merchantShare.demo
   * @demo merchant/merchantShare
   * @description
   * 
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | param | Object | 分享设置，具体可查看示例代码 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * ```
   * {
   *     // 1: 正常; 0: 取消; 其他: 失败/异常
   *     result: 1
   * }
   * ```
   */
  merchantShare: true
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取某个会话在私信是否处于置顶状态<br/>
   * 对应native接口：querySessionIsStickyOnTop<br/>
   * 对接人：chenjihong<br/>
   * @method ksBridge.querySessionIsStickyOnTop
   * @category Merchant
   * @version >=1.0.15
   * @example ./apis/merchant/querySessionIsStickyOnTop.demo
   * @demo merchant/querySessionIsStickyOnTop
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | threadId | String | 会话ID | √ | - |
   * | type | Number | 聊天类型，目前仅支持0(单聊)和4(群聊) | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  querySessionIsStickyOnTop: true
});

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 对指定会话进行置顶/取消置顶操作<br/>
   * 对应native接口：reqSessionStickyOnTopWithThread<br/>
   * 对接人：chenjihong<br/>
   * @method ksBridge.reqSessionStickyOnTopWithThread
   * @category Merchant
   * @version >=1.0.15
   * @example ./apis/merchant/reqSessionStickyOnTopWithThread.demo
   * @demo merchant/reqSessionStickyOnTopWithThread
   * @description 
   * 
   * 调用参数：
   * 
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | threadId | String | 会话ID | √ | - |
   * | type | Number | 聊天类型，目前仅支持0(单聊)和4(群聊) | √ | - |
   * | stickyOnTop | Boolean | 是否置顶， true: 置顶，false: 取消置顶 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   **/
  reqSessionStickyOnTopWithThread: true
});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 获取Token<br />
   * 对应native接口：getSidToken<br/>
   * 对接人： chenjihong
   * @method ksBridge.getSidToken
   * @category Merchant
   * @version >=1.0.18
   * @example ./apis/merchant/getSidToken.demo
   * @demo merchant/getSidToken
   * @description
   * 
   * 调用参数：
   *
   * | 参数 | 类型 | 描述 | 必选 | 注明 |
   * | :--: | :--: | :--: | :--: | :--: |
   * | sid | String | 现在只支持 kuaishou.shop.im | √ | - |
   * | forceRefresh | Bool | 是true, 则会发起网络请求最新的token；是false，则获取本地，如果本地为空，再去请求网络。 | √ | - |
   * | success | Function | 成功回调函数 | X | - |
   * | fail | Function | 失败回调函数 | X | - |
   * | complete | Function | 回调函数，默认都会执行 | X | - |
   *
   * 返回参数：
   * 如果传入的sid 参数不是 kuaishou.shop.im , 则返回401的错误码。如果是后端返回，则返回后端的错误码；如果是未知，则返回412 未知错误码
   * 如果传入的sid 为kuaishou.shop.im， 则返回   { "result":1 , "token" :"xxxxx"，"ssecurity" : "xxxxx"}
   * 
   */
  getSidToken: true
});

/***/ })
/******/ ]);


/***/ }),

/***/ "./node_modules/@ks/weblogger/dist/log.bridge.common.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ks/weblogger/dist/log.bridge.common.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:!0});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};function e(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var n=function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function o(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function a(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var s,c,u,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(){void 0===l.window&&(l.window={addEventListener:function(){},removeEventListener:function(){},setTimeout:function(){},setInterval:function(){},_WEBLOGGER_MOCKED_WINDOW_:!0,global:l}),void 0===l.document&&(l.document=l.window.document||{cookie:"",addEventListener:function(){},removeEventListener:function(){},querySelector:function(){},querySelectorAll:function(){}},void 0===l.window.document&&(l.window.document=l.document)),void 0===l.navigator&&(l.navigator=l.window.navigator||{userAgent:""},void 0===l.window.navigator&&(l.window.navigator=l.navigator)),void 0===l.screen&&(l.screen=l.window.screen||{},void 0===l.window.screen&&(l.window.screen=l.screen)),void 0===l.history&&(l.history=l.window.history||{},void 0===l.window.history&&(l.window.history=l.history)),void 0===l.location&&(l.location=l.window.location||{hostname:"",search:"",href:"",origin:""},void 0===l.window.location&&(l.window.location=l.location));try{void 0===l.localStorage&&(l.localStorage=l.window.localStorage||{getItem:function(){},setItem:function(){}},void 0===l.window.localStorage&&(l.window.localStorage=l.localStorage))}catch(t){}}(),Object.defineProperty||(Object.defineProperty=function(t,e,n){t[e]="[object Object]"===Object.prototype.toString.call(n)&&n.hasOwnProperty("value")?n.value:n}),Object.assign||Object.defineProperty(Object,"assign",{value:function(t){if(null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},writable:!0,configurable:!0}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){var o=this instanceof r?this:t;return n.apply(o,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),o.prototype=new r,o}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var n;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),o=r.length>>>0;if(0===o)return-1;var i=+e||0;if(Math.abs(i)===1/0&&(i=0),i>=o)return-1;for(n=Math.max(i>=0?i:o-Math.abs(i),0);n<o;){if(n in r&&r[n]===t)return n;n++}return-1}),Object.keys||(Object.keys=(s=Object.prototype.hasOwnProperty,c=!{toString:null}.propertyIsEnumerable("toString"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on non-object");var e=[];for(var n in t)s.call(t,n)&&e.push(n);if(c)for(var r=0,o=u;r<o.length;r++){var i=o[r];s.call(t,i)&&e.push(i)}return e})),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,r;if(null==this)throw new TypeError(" this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(n=e),r=0;r<i;){var a=void 0;r in o&&(a=o[r],t.call(n,a,r,o)),r++}});var p,d,f={unknown:0,none:1,wifi:2,"4g":3,"3g":4,"2g":5,"5g":7,"slow-2g":5};!function(t){t.CLICK="CLICK",t.DOUBLE_CLICK="DOUBLE_CLICK",t.TRIPLE_CLICK="TRIPLE_CLICK",t.LONG_PRESS="LONG_PRESS",t.PULL="PULL",t.DRAG="DRAG",t.SCALE="SCALE",t.PULL_DOWN="PULL_DOWN",t.PULL_UP="PULL_UP"}(p||(p={})),function(t){t.PV="PV",t.SHOW="SHOW",t.VIDEO="VIDEO",t.CUSTOM="CUSTOM",t.RADAR="RADAR"}(d||(d={}));var h={sessionId:"",appDevicePackageReady:!1,identityPackageReady:!1},g=function(){function t(t,e){switch(this.page="",this.identity="",e){case"web":this.page_type=2;break;case"native":this.page_type=1;break;case"mina":this.page_type=3;break;default:this.page_type=0}this.update(t.page,t.params)}return t.prototype.update=function(t,e){void 0===t&&(t=""),t&&t!==this.page&&(this.page=t,this.identity=this.generatePageId(t)),e&&(this.params=Object.assign(this.params||{},e))},t.prototype.toJSON=function(){return{page:this.page,identity:this.identity,page_type:this.page_type,params:JSON.stringify(this.params)}},t.prototype.generatePageId=function(t){return t+(new Date).getTime()},t}(),m=["Kwai","Kwai_Lite","Kwai_Pro","livemate","ksthanos","ksNebula","ksnebula","kwaiying","pearl","kinder","m2u","LOLita","XFunCore","ACVideoCore","ZIKZAK"].concat(["UVideo","Vstatus","Kwaigo","MvMaster"]);function v(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return null===console||void 0===console?void 0:(t=console.warn).call.apply(t,a([null],e))}function y(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return null===console||void 0===console?void 0:(t=console.error).call.apply(t,a([null],e))}function _(t,e,n,r){return"attachEvent"in t?t.attachEvent("on"+e,n):t.addEventListener(e,n,r)}function w(t,e,n,r){return"attachEvent"in t?t.detachEvent("on"+e,n):t.removeEventListener(e,n,r)}function S(t,e,n){if(void 0===n&&(n=" "),(e-=t.length)<=0)return t;for(var r="";e;)1&e&&(r+=n),e>>=1,n+=n;return r+t}var b=function(){var t=null;return function(){try{if(null===t)for(var e=window.navigator.userAgent.toLowerCase(),n=0;n<m.length;n++)if(e.indexOf(m[n].toLowerCase())>-1)return t=!0}catch(t){return!1}}}();function E(t){for(var e={},n=0,r=t.split("&");n<r.length;n++){var o=r[n].split("="),i=o[0],a=o[1];i in e?e[i]instanceof Array?e[i].push(a):e[i]=[e[i],a]:e[i]=a}return e}function k(t){var e="";if("string"==typeof t)e=t;else try{e=JSON.stringify(t)}catch(n){e=String(t)}for(var n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);n+=o<128?1:o<2048?2:o<65536?3:o<1<<21?4:o<1<<26?5:o<1<<31?6:Number.NaN}return n}function P(t){void 0===t&&(t=location.href);var e=t.lastIndexOf("?");return-1===e?{page:t}:{page:t.slice(0,e),params:E(t.slice(e+1))}}var O=function(t,e){var n=t.url,r=t.page,o=t.params,i=t.pageId;if(!r&&"string"==typeof n){var a=P(n);r=a.page,o=a.params}if("function"==typeof e)try{var s=e({url:n,page:r,params:o});"string"==typeof s?r=s:"object"==typeof s&&(s.page&&(r=s.page),s.params&&(o=s.params),s.pageId&&(i=s.pageId))}catch(t){}else if("object"==typeof e){var c="";for(var u in e)if((n||r||"").indexOf(u)>-1){c=e[u];break}c&&(r=c)}return{page:r,params:o,pageId:i}},T=function(t){return t&&"object"==typeof t&&!Array.isArray(t)};function L(t){return!t||!/^(https?:)?\/\//.test(t)||(y("[error 108]","请注意当前埋点页面信息为 "+t+"，不符合规范，上报失败！"),!1)}var C,N=(C="",function(){if(C)return C;try{var t=window.devicePixelRatio||1,e=Math.floor(screen.width*t),n=Math.floor(screen.height*t);return C=e+"x"+n}catch(t){return""}});var U,R=function(){return!(!((null===window||void 0===window?void 0:window.Worker)&&(null===window||void 0===window?void 0:window.Uint8Array)&&window.URL)||function(){var t,e,n=(null===(t=null===window||void 0===window?void 0:window.navigator)||void 0===t?void 0:t.userAgent)||"",r=/mobile|tablet|ip(ad|hone|od)|android|(windows phone)/i.test(n),o="MacIntel"===(null===window||void 0===window?void 0:window.navigator.platform)&&(null===(e=null===window||void 0===window?void 0:window.navigator)||void 0===e?void 0:e.maxTouchPoints)>1;return r||o}())},x=function(){function t(){this.events={}}return t.prototype.on=function(t,e){e&&"function"==typeof e&&(this.events[t]=this.events[t]||[],this.events[t].push(e))},t.prototype.off=function(t,e){this.events[t]&&(e&&"function"==typeof e&&function(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}(this.events[t],e),e||(this.events[t]=[]))},t.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this.events[t]&&this.events[t].forEach((function(t){t.apply(void 0,e)}))},t}();"undefined"!=typeof window&&("object"!=typeof window._WEBLOGGER&&(window._WEBLOGGER={_silenced:!1,constructors:[],instances:[],silence:function(t){try{t?sessionStorage.setItem("WEBLOGGER_SILENCED","1"):sessionStorage.removeItem("WEBLOGGER_SILENCED"),window._WEBLOGGER.instances.forEach((function(e){null==e||e.silence(t)}))}catch(t){}}}),U=window._WEBLOGGER);var I=0,A=function(t){function r(e,o){var i,a=t.call(this)||this;return a.version="3.9.30",a.plugins={},a.flush=function(){a.logger.flush()},a.baseOption=n({},o),a.logConfig=(i=e,n({env:"production",proto:"v3",timeout:3e4,wait:1e3,maxBatchLength:50,sampleRate:1,yoda:"undefined"!=typeof window&&window.yoda,forbidV2HttpUrlPage:!0},i||{})),a.initUrlPackage(),r.__instance||(r.__instance=a),function(t){(null==U?void 0:U.instances)&&t&&-1===U.instances.indexOf(t)&&(U.instances.push(t),U._silenced&&(null==t||t.silence(!0)))}(a),a}return e(r,t),Object.defineProperty(r.prototype,"sessionId",{get:function(){return h.sessionId},enumerable:!1,configurable:!0}),r.prototype.initUrlPackage=function(){this.updateCurrentUrlPackage()},r.prototype.updateCurrentUrlPackage=function(t,e){if(void 0===t&&(t={}),void 0===e&&(e="web"),"object"==typeof t&&t.page&&this.currentUrlPackage&&t.page===this.currentUrlPackage.page)return this.currentUrlPackage.update(t.page,t.params);this.currentUrlPackage=new g(t,e)},r.prototype.updateReferUrlPackage=function(t,e){void 0===t&&(t=this.currentUrlPackage),void 0===e&&(e="web"),this.referUrlPackage=t instanceof g?t:new g(t,e)},r.prototype.updateBase=function(t){this.updateCommonPackage(t)},r.prototype.updateCommonPackage=function(t){"object"==typeof t&&this.commonPackage.update(t)},r.prototype.addPlugins=function(){var t=this;this.logConfig.plugins&&this.logConfig.plugins.length&&this.logConfig.plugins.forEach((function(e){"object"==typeof e&&"function"==typeof e.apply&&t.addPluginInstance(e)}))},r.prototype.addPluginInstance=function(t){if(t){var e=t.key||t.constructor&&t.constructor.key||"plugin_auto_key_"+I++;"function"!=typeof t.apply||t.weblog&&t.weblog===this||t.apply(this),this.plugins[e]=t}},r.prototype.plug=function(t,e){if(this.plugins[t.key])return y("[code 301]",t.key+" 插件重复加载！");this.addPluginInstance(new t(this,e))},r.prototype.unplug=function(t){var e=this.plugins[t];e&&(e.destroy(),delete this.plugins[t])},r.prototype.unplugAll=function(){for(var t in this.plugins)this.plugins[t]&&this.unplug(t)},r.prototype.generateLog=function(t,e){return{}},r.prototype.send=function(t,e,n){void 0===t&&(t=p.CLICK);var r=this.generateLog(t.toUpperCase(),e),o="object"==typeof e&&e.callback||void 0;return"function"==typeof this.beforeSend&&this.beforeSend(t,e,r),this.logger.send(r,!!n,o)},r.prototype.collect=function(t,e){this.send(t,e)},r.prototype.sendImmediately=function(t,e){this.send(t,e,!0)},r.prototype.sendPackage=function(t,e){this.logger.sendPackage(t,e)},r.prototype.destroy=function(){this.unplugAll(),function(t){if(null==U?void 0:U.instances){var e=U.instances.indexOf(t);-1!==e&&U.instances.splice(e,1)}}(this)},r}(x);function D(t,e,n){var r={};if(t.length>0)for(var o=e?decodeURIComponent:function(t){return t},i=t.split(/;\s/g),a=null,s=null,c=null,u=0,l=i.length;u<l;u++){if(null!==(c=i[u].match(/([^=]+)=/i)))try{a=decodeURIComponent(c[1]),s=o(i[u].substring(c[1].length+1))}catch(t){}else a=decodeURIComponent(i[u]),s="";null!==a&&(r[a]=s)}return r}var M,j={};function K(t,e,n){void 0===e&&(e={}),void 0===n&&(n=!1);try{if(!n&&t in j)return j[t];if(!(null===window||void 0===window?void 0:window.document))return;var r=document.cookie||"";return r===M?j[t]:(M=r,(j=D(r,!e.raw))[t])}catch(t){}}function W(t,e,n){void 0===n&&(n={});try{document.cookie=function(t,e,n,r){void 0===r&&(r={});var o=encodeURIComponent(t)+"="+(n?encodeURIComponent(e):e),i=r.expires,a=r.path||"/",s=r.domain||"";return i instanceof Date&&(o+="; expires="+i.toUTCString()),"number"==typeof i&&(o+="; max-age=="+i),""!==a&&(o+="; path="+a),""!==s&&(o+="; domain="+s),!0===r.secure&&(o+="; secure"),o}(t,e,!n.raw,n),j[t]=e}catch(t){}}var V={getCookie:K,setCookie:W,parseCookieString:D};function B(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}function G(t){if(void 0===t&&(t="undefined"!=typeof location?location.hostname:""),!t)return"";var e=t.split("."),n=e.length;return n<=2?"":"."+e[n-2]+"."+e[n-1]}var F="";function H(){if(F)return F;try{if(!(F=K("did")||K("_did"))){F="web_"+function(){for(var t=1e9*Math.random()>>>0,e=[],n=0;n<7;n++)e.push("0123456789ABCDEF".charAt(16*Math.random()));return t+e.join("")}();var t=new Date;t.setFullYear(t.getFullYear()+1),W("_did",F,{expires:t,domain:G(),path:"/"})}return F}catch(t){return""}}var q,J,z,Q=function(t){function r(e,n,r){var o=t.call(this,{},n)||this;if("string"==typeof e){var i=P(e);o.page=i.page,o.params=i.params}else o.page=(e||{}).page||"",o.params=(e||{}).params||void 0;return o.identity=o.generatePageId(),r&&"string"==typeof e&&o.init(e,r),o}return e(r,t),r.prototype.init=function(t,e){void 0===e&&(e={});var n=O({url:t,page:this.page,params:this.params},e),r=n.page,o=n.params;this.update(r,o)},r.prototype.attachUrl=function(){this.params||(this.params={}),this.params.origin_url=this.params.origin_url||(null===location||void 0===location?void 0:location.href)},r.prototype.getRealUrlPackage=function(){var t=P(location.href);t.page;var e=t.params;return{page:this.page,params:JSON.stringify(n({url:location.href,query:e},e)),page_type:this.page_type,identity:this.identity}},r.prototype.generatePageId=function(){return B()},r}(g),Y=function(){function t(t){if(this.identity_package={device_id:void 0,global_id:void 0,user_id:void 0,union_id:void 0,open_id:void 0,iu_id:void 0},this.app_package={product:void 0,language:void 0,platform:void 0,container:"H5",package_name:void 0,product_name:void 0,version_name:void 0,channel:void 0,version_code:void 0},this.experiment=void 0,this.service_name=void 0,this.safety_id=void 0,this.sub_biz=void 0,this.device_package={os_version:void 0,model:void 0,ua:void 0},this.need_encrypt=!1,this.network_package={type:f.unknown},this.h5_extra_attr={sdk_name:"webLogger",sdk_version:"3.9.30",sdk_bundle:"log.bridge.common.js"},this.global_attr={entry_tag:[]},this.update(t),this.app_package.version_name){var e=this.app_package.version_name.lastIndexOf(".");this.app_package.version_code=+this.app_package.version_name.slice(e+1)||0}this.app_package.version_name||(this.app_package.version_name=void 0),this.app_package.version_code||(this.app_package.version_code=void 0)}return t.prototype.getH5ExtraAttr=function(t){return Object.assign({},this.h5_extra_attr,t)},t.prototype.update=function(t){if("object"==typeof t){!function(t,e){if(T(t)&&T(e)){var n=function(t,e,n){T(t[n])&&T(e[n])?Object.assign(t[n],e[n]):T(t[n])||T(e[n])||(t[n]=e[n])};for(var r in e)if(t.hasOwnProperty(r))n(t,e,r);else for(var o in t)T(t[o])&&t[o].hasOwnProperty(r)&&n(t[o],e,r)}}(this,t);var e=t.network_type;e&&f[e]&&(this.network_package.type=f[e])}},t.prototype.updateGlobalAttr=function(t){Object.assign(this.global_attr||{},t)},t.prototype.toJSON=function(){this.identity_package.user_id||(this.identity_package.user_id=void 0);var t=n(n({},this),{toJSON:function(){return n(n({},t),{h5_extra_attr:JSON.stringify(t.h5_extra_attr),global_attr:JSON.stringify(t.global_attr)})}});return t.global_attr=n({},this.global_attr),this.global_attr.entry_tag&&this.global_attr.entry_tag.length?t.global_attr.entry_tag=this.global_attr.entry_tag.slice():delete t.global_attr.entry_tag,Object.keys(this.global_attr).length||delete t.global_attr,t},t}(),X="https://data-track.corp.kuaishou.com",$=X+"/",Z="production",tt="rest/wd/common/log/collect/",et=[Z,"test","development","logger","oversea"],nt={v2:"rest/kd/log/collect?_json=1&biz=",v3:tt+"misc2",radar:tt+"radar"},rt={v2:{production:["https://wlog.ksapisrv.com/","https://wlog.gifshow.com/"][Math.round(Math.random())],development:$,test:$,oversea:"https://logsdk.kwai-pro.com/"},v3:{production:"https://log-sdk.ksapisrv.com/",development:$,test:$,oversea:"https://logsdk.kwai-pro.com/"}},ot=function(t,e,n){return void 0===t&&(t=Z),void 0===e&&(e=!1),void 0===n&&(n="v3"),-1===et.indexOf(t)?t+nt[n]:e&&rt.v3[t]?rt.v3[t]+nt.radar:rt[n][t]&&nt[n]?rt[n][t]+nt[n]:rt.v3.production+nt.v3},it=function(t,e){if(!e)return t;try{return/\?(.+?)$/.test(t)?t.replace(/\?(.+?)$/,"?"+e+"&$1"):t+"?"+e}catch(e){return t}},at=function(){function t(t,e){var n=this;this.asyncQueue=[],this.throttleQueue=[],this.errorQueue=[],this.sendingQueue={},this.url="",this.isV2=!1,this.isDebug=!1,this.radarUrl="",this.drained=!1,this.batchCount=50,this.sendingYield=null,this.flush=function(t){n.sendLogs(n.throttleQueue.concat(n.asyncQueue),t),n.throttleQueue=[],n.asyncQueue=[]},this.drain=function(){n.drained=!0,n.flush(),n.flushErrorLogs(),setTimeout((function(){n.drained=!1}),1e3)},this.config=t,this.config.maxBatchLength&&this.config.maxBatchLength>1&&(this.batchCount=Math.min(50,this.config.maxBatchLength)),this.commonPackage=e,this.isDebug=this.config.logger||"logger"===this.config.env,this.isV2="v2"===this.config.proto,this.updateUrls()}return t.prototype.sendData=function(t,e){return"function"==typeof this.config.sender?this.config.sender(t,e):this.baseSendData(t,e)},t.prototype.updateUrls=function(){var t=this.config.env;t&&/^(https?:)?\/\//.test(t)?this.url=t:this.url=ot(t),this.formatUrl()},t.prototype.formatUrl=function(){this.radarUrl||(this.radarUrl=this.url.replace(-1!==this.url.indexOf(nt.v2)?nt.v2:nt.v3,nt.radar),-1!==this.radarUrl.indexOf(rt.v2.production)&&this.radarUrl.replace(rt.v2.production,rt.v3.production));var t=this.commonPackage.app_package,e=t.product_name,n=t.product,r="v=3.9.30&kpn="+(e||n);this.url=it(this.url,r),this.radarUrl=it(this.radarUrl,r)},t.prototype.getCommonPackageJSON=function(){return this.commonPackage.toJSON()},t.prototype.send=function(t,e,n){if(void 0===e&&(e=!1),n||this.drained)return this.sendLogs([t],n);e?this.sendAsync(t,n):this.sendThrottle(t)},t.prototype.sendAsync=function(t,e){return o(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return this.asyncQueue.push(t),this.asyncQueue.length>=this.batchCount?(this.flush(),[2]):this.sendingYield?[4,this.sendingYield]:[3,2];case 1:e.sent(),this.sendingYield=null,e.label=2;case 2:return e.trys.push([2,4,,5]),[4,Promise.resolve()];case 3:case 4:return e.sent(),[3,5];case 5:return this.asyncQueue.length?(this.flush(),[2]):[2]}}))}))},t.prototype.sendThrottle=function(t){var e=this;this.throttleQueue.push(t),this.throttleQueue.length>=this.batchCount?this.flush():(clearTimeout(this.batchWaitTimer),this.batchWaitTimer=setTimeout((function(){e.flush()}),this.config.wait))},t.prototype.sendLogs=function(t,e){var n=this;if(!t||!t.length)return"function"==typeof e&&e();var r=this.buildLogPackage(t,this.url);this.sendPackage(r,(function(t){t?n.errHandler(r):n.flushErrorLogs(),"function"==typeof e&&e(t)}))},t.prototype.sendPackage=function(t,e){var r=this.config.timeout;try{this.sendData(n(n({},t),{isDebug:this.isDebug,timeout:r}),e)}catch(t){"function"==typeof e&&e(t)}},t.prototype.buildLogPackage=function(t,e){return this.isV2?this.buildV2Package(t,e):this.buildV3Package(t,e)},t.prototype.buildV2Package=function(t,e){return{url:e,data:{log:{event:t}}}},t.prototype.buildV3Package=function(t,e,n){var r=this.getCommonPackageJSON();return n&&Object.assign(r,n),{url:e,data:{common:r,logs:t}}},t.prototype.errHandler=function(t){var e;if(this.isV2)this.errorQueue.unshift(t);else{var n=t.data;if(n.logs.length){delete n.common.h5_extra_attr.http_seq_id,delete n.common.h5_extra_attr.client_timestamp;for(var r=!1,o=0;o<this.errorQueue.length;o++){var i=this.errorQueue[o];if(i.url===t.url&&i.data.logs.length+n.logs.length<=100&&JSON.stringify(i.data.common)===JSON.stringify(n.common)){r=!0,(e=i.data.logs).push.apply(e,n.logs);break}}r||(this.errorQueue.length>=5&&this.errorQueue.pop(),this.errorQueue.unshift(t))}}},t.prototype.flushErrorLogs=function(){var t=this;this.errorQueue.forEach((function(e){t.sendPackage(e)})),this.errorQueue=[]},t.prototype.destory=function(){this.batchWaitTimer&&clearTimeout(this.batchWaitTimer),this.compensateTimer&&clearTimeout(this.compensateTimer)},t.prototype.sendRadar=function(t,e){var n=e?{service_name:e}:void 0,r=this.buildV3Package([t],this.radarUrl||this.url,n);this.sendPackage(r)},t}(),st=(null===(q=null===window||void 0===window?void 0:window.navigator)||void 0===q?void 0:q.userAgent)||"",ct=function(){if(J)return J;var t="unknow",e=/android/i,n="Mac OS",r="Windows",o="Android",i="iPhone",a="iPhone",s="Windows Phone",c="Linux";J={os:{name:t,version:t},model:t};try{var u=st.match(/\((.*?)\)/);if(!u)return e.test(st)&&(J.os.name=o),J;var l=u[1]+")",p=l.split(";").map((function(t){return t.trim()})),d=void 0,f=void 0,h=void 0;if(st.indexOf(s)>-1)h=d=s,(v=l.match(/Windows\sPhone\s(.*?)[;\)\s]/))&&(f=v[1]),h=p[p.length-1].replace(")","");else if(e.test(st)){d=o;var g=l.match(/android.*?;(.*?)build\//i);g&&(h=(h=g[1].split(";").pop())&&h.trim());for(var m=0;m<p.length;m++)if(e.test(p[m])){f=p[m].replace(e,""),h||(h=p[m+1]);break}}else if(st.indexOf(i)>-1||st.indexOf(a)>-1){h=st.indexOf(i)>-1?i:a,d="iOS",(v=l.match(/OS\s(.*?)\slike/))&&(f=v[1])}else if(st.indexOf(n)>-1){h=d=n,(v=l.match(/OS\sX\s(.*?)[;\)\s]/))&&(f=v[1])}else if(st.indexOf(r)>-1){var v;h=d=r,(v=l.match(/Windows\s(.*?)[;\)]/))&&(f=v[1])}else if(st.indexOf("Nokia")>-1){d="Symbian";var y=st.match(/Symbian.*?\/(.*?);/);y&&(f=y[1]);var _=st.match(/Nokia(.*?)\//);_&&(h=_[1])}else l.indexOf(c)>-1&&(d=h=c);J={os:{name:d||t,version:f&&f.replace(/_/g,".").trim()||t},model:h||t}}catch(t){}return J};function ut(){return void 0===z&&(z=b()&&K("kpn")||function(){if("undefined"==typeof window)return"";for(var t=window.navigator.userAgent,e=[[/ wxwork\//,"workWechat"],[/ MicroMessenger\//,"wechat"],[/ Kwai\//,"KUAISHOU"],[/ ksthanos\//,"THANOS"],[/ ksNebula\//i,"NEBULA"],[/ QQ\//,"qq"],[/__weibo__([^_]+)/,"weibo"],[/ livemate\//,"livemate"],[/ baiduboxapp\//,"baidu"],[/ MQQBrowser\//,"qqBrowser"],[/\(MSIE ([^;]+);/,"ie"]],n=0;n<e.length;n++){var r=e[n],o=r[0],i=r[1];if(o.exec(t))return i}return""}()||""),z}var lt={supportsPushState:function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},getUAInfo:ct,getDefaultKpn:ut},pt=[["a7","640x1136",["iPhone 5","iPhone 5s"]],["a7","1536x2048",["iPad Air","iPad Mini 2","iPad Mini 3"]],["a8","640x1136",["iPod touch (6th gen)"]],["a8","750x1334",["iPhone 6"]],["a8","1242x2208",["iPhone 6 Plus"]],["a8","1536x2048",["iPad Air 2","iPad Mini 4"]],["a9","640x1136",["iPhone SE"]],["a9","750x1334",["iPhone 6s"]],["a9","1242x2208",["iPhone 6s Plus"]],["a9x","1536x2048",["iPad Pro (1st gen 9.7-inch)"]],["a9x","2048x2732",["iPad Pro (1st gen 12.9-inch)"]],["a10","750x1334",["iPhone 7"]],["a10","1242x2208",["iPhone 7 Plus"]],["a10x","1668x2224",["iPad Pro (2th gen 10.5-inch)"]],["a10x","2048x2732",["iPad Pro (2th gen 12.9-inch)"]],["a11","750x1334",["iPhone 8"]],["a11","1242x2208",["iPhone 8 Plus"]],["a11","1125x2436",["iPhone X"]],["a12","828x1792",["iPhone Xr"]],["a12","1125x2436",["iPhone Xs"]],["a12","1242x2688",["iPhone Xs Max"]],["a12x","1668x2388",["iPad Pro (3rd gen 11-inch)"]],["a12x","2048x2732",["iPad Pro (3rd gen 12.9-inch)"]]],dt=function(){try{var t=ct(),e=b(),n=t.model||t.os.name||"unknown";if("iOS"!==t.os.name||e)return n;var r=function(){for(var t=N(),e=[],n=0,r=pt;n<r.length;n++){var o=r[n];t===o[1]&&(e=e.concat(o[2]))}return e.length&&e}();return r?r.join(" or "):n}catch(t){return"unknown"}},ft={},ht=function(t){try{if(window&&window.localStorage&&"undefined"!=typeof Storage&&window.localStorage instanceof Storage){var e=Number(function(t){try{if(window&&window.localStorage){var e=window.localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(t){return e}}}catch(t){return null}return null}(t))||0;return e+1>1e8&&(e=0),function(t,e){try{if(window&&window.localStorage)return window.localStorage.setItem(t,JSON.stringify(e)),!0}catch(t){return!1}}(t,e+1),e}}catch(t){}return ft[t]||(ft[t]=0),ft[t]++},gt=0,mt=b();function vt(){try{var t=ct().os.name;return gt=t?"Android"===t?mt?6:8:"iOS"===t?mt?7:9:10:0}catch(t){return 0}}function yt(){var t="unknown",e=null===window||void 0===window?void 0:window.navigator,n=(null==e?void 0:e.connection)||(null==e?void 0:e.mozConnection)||(null==e?void 0:e.webkitConnection);return n&&(t=n.type||n.effectiveType),t}var _t=function(t){function r(e){var r=t.call(this,n({platform:vt(),container:10===gt?"WEB":"H5",version_name:mt&&K("appver",void 0,!0)||"",network_type:yt(),device_id:H(),global_id:mt&&K("egid")||"",app_package:{language:navigator.language},device_package:{os_version:ct().os.version,model:dt(),ua:navigator.userAgent}},e))||this;return Object.assign(r.h5_extra_attr,{host_product:ut(),resolution:N(),screen_with:screen.width,screen_height:screen.height,device_pixel_ratio:window.devicePixelRatio||1,domain:window.location.origin},e.h5_extra_attr),r}return e(r,t),r.prototype.getVersionName=function(){return this.app_package.version_name},r.prototype.update=function(e){t.prototype.update.call(this,e);var n=this.app_package.version_name;if("string"==typeof n){var r=n.lastIndexOf(".");this.app_package.version_code=+n.slice(r+1)||0,this.h5_extra_attr.app_version_name=n}},r.prototype.setAdditionalSeqIdPackage=function(t){var e,n;this.additional_seq_id_package={channel:3,channel_seq_id:(n="NORMAL",void 0===n&&(n=""),ht("WEBLOGGER_CHANNEL_SEQ_ID_"+n)),custom_type:t,custom_seq_id:(e=t,ht("WEBLOGGER_V2_SEQ_ID_"+e))}},r.prototype.increaseH5SeqId=function(t){this.h5_extra_attr.client_timestamp=(new Date).valueOf(),this.h5_extra_attr.seq_id=ht(t?"WEBLOGGER_H5_CUSTOM_SEQ_ID":"WEBLOGGER_H5_SEQ_ID")},r}(Y),wt=function(t,e,n){return y("[error 400]","埋点上报接口请求报错","\nurl:",e,"\ndata",n,"\nerror:",t||"server decode log failed")};function St(t,e){var n=t.url,r=t.data,o=t.timeout,i=new XMLHttpRequest;i.open("POST",n),i.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),"object"!=typeof r||r instanceof Uint8Array||(r=JSON.stringify(r)),o&&(i.timeout=o),i.onload=function(){var t=function(t,e,n,r){var o;if(t<200||t>=300&&304!==t);else try{var i=JSON.parse(e),a=i.exception,s=i.result,c=i.error_msg;a&&(o=a),1!==s&&(o=c||"result is "+s)}catch(t){o=t.message}return o&&wt(o,n,r),o}(i.status,i.response,n,r);e&&e(t)},i.ontimeout=i.onerror=function(t){t&&wt(t,n,r),e&&e(t?"networkTimeout":"")},i.send(r)}var bt=function(t){var e=function(e){return y("[error 401]","GET 请求出错 url: "+t,e)};try{var n=new XMLHttpRequest;n.open("GET",t),n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),n.send(),n.onerror=e}catch(t){e(t)}},Et=null===window||void 0===window?void 0:window.navigator,kt=Et&&-1!==Et.userAgent.indexOf("Chrome")&&"function"==typeof Et.sendBeacon;function Pt(t,e){var n=t.url,r=t.data,o=t.timeout,i=t.isDebug;if(r=JSON.stringify(r),!i&&function(t){var e=t.url,n=t.data;if(!kt)return!1;"object"==typeof n&&n.fd&&(n=n.fd);try{return Et.sendBeacon(e,n)}catch(t){return y("[error 403]","navigator.sendBeacon 报错",t),!1}}({url:n,data:r}))return e&&e();St({url:n,data:r,timeout:o},e)}var Ot,Tt=function(t,e,n){return void 0===t&&(t=X),function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];null===console||void 0===console||(t=console.log).call.apply(t,a([null],e))}("%c埋点抓包校验: %c"+(t+"/#/logger/index?sessionId="+n),"color:#1abf89;font-size:1.2em;line-height:2.4em;","font-size:1.2em;"),e+"/"+n+"/"};!function(t){t.loading="loading",t.loaded="loaded"}(Ot||(Ot={}));var Lt,Ct,Nt,Ut=Object.create(null),Rt="weblogger_switch",xt=function(t){var e=function(){try{var t=K(Rt)||"undefined"!=typeof sessionStorage&&sessionStorage.getItem(Rt);if(!t)return;var e=JSON.parse(t),n=e.loggerSessionId,r=e.reportHost,o=e.loggerHost,i=e.handshakeApi;return n?(bt(i||r+"/"+n),Tt(o,r,n)):""}catch(t){return""}}()||function(t){void 0===t&&(t=location.href);var e=t.lastIndexOf("?");if(-1===e)return"";var n=E(t.slice(e+1)).webloggerSwitch;if(!n)return"";try{var r=decodeURIComponent(n),o=JSON.parse(r),i=o.loggerSessionId,a=o.reportHost,s=o.loggerHost,c=o.handshakeApi;return i?("undefined"!=typeof sessionStorage&&sessionStorage.setItem(Rt,r),bt(c||a+"/"+i),Tt(s,a,i)):""}catch(t){return""}}();if(e)return ot(e,!1,t)},It=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.baseSendData=r.sendLog,r}return e(n,t),n.prototype.updateUrls=function(){var t=this.config,e=t.env,n=void 0===e?Z:e,r=t.logger,o=t.proto,i=t.isBridge,a=!i&&xt();if(a)this.url=a,this.isDebug=!0;else if(r||"logger"===n||"logger-oversea"===n){var s=function(t,e){void 0===t&&(t=H()),void 0===e&&(e=!1);var n=e?"https://data-track-sgp.corp.kuaishou.com":X;return bt(n+"/rest/"+t),Tt(n,n+"/rest",t)}(this.commonPackage.identity_package.device_id,"logger-oversea"===n);this.url=ot(s,!1,o),this.isDebug=!0}else n&&/^(https?:)?\/\//.test(n)?this.url=n:(this.isDebug=n!==Z,this.url=ot(n,!1,o),this.radarUrl=ot(n,!0,o));this.enableAsyncGzip="v3"===o&&!i&&R()&&n===Z&&!a&&!r,this.enableAsyncGzip&&function(t,e,n){if(void 0===e&&(e=!0),Ut[t])return n&&n(t+" load repeat");var r=Ut[t]={state:Ot.loading},o=document.createElement("script");o.src=t,e&&(o.async=!0);var i=document.getElementsByTagName("script")[0];i&&i.parentNode?i.parentNode.insertBefore(o,i):document.head.appendChild(o),o.onload=function(){r.state=Ot.loaded,n&&n()},o.onerror=function(e){r.state=Ot.loaded,n&&n(t+" loaded failed, "+e)}}("https://static.yximgs.com/udata/pkg/ks-track-platform-new/weblogger/3.9.30/async/gzipper.min.js"),this.formatUrl()},n.prototype.sendLog=function(t,e){!this.drained&&this.enableAsyncGzip&&this.sendGzip(t,e)||Pt(t,e)},n.prototype.sendGzip=function(t,e){var r;if(!(null===(r=n.Gzipper)||void 0===r?void 0:r.sendData))return!1;return n.Gzipper.sendData(t,(function(n){n&&Pt(t,e)}))},n.prototype.getCommonPackageJSON=function(){return this.commonPackage.toJSON()},n.prototype.send=function(e,n,r){void 0===n&&(n=!1),this.isV2&&(this.commonPackage.setAdditionalSeqIdPackage(e.getEventType()),e.common_package=this.getCommonPackageJSON()),t.prototype.send.call(this,e,n,r)},n}(at);!function(t){var e,n,r,o,i,a,s,c;(e=t.ElementStatus||(t.ElementStatus={}))[e.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",e[e.CHECKED=1]="CHECKED",e[e.UNCHECKED=2]="UNCHECKED",(n=t.PageShowAction||(t.PageShowAction={}))[n.UNKNOWN_ACTION=0]="UNKNOWN_ACTION",n[n.ENTER=1]="ENTER",n[n.LEAVE=2]="LEAVE",n[n.RESUME=3]="RESUME",(r=t.ActionStatus||(t.ActionStatus={}))[r.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",r[r.SUCCESS=1]="SUCCESS",r[r.FAIL=2]="FAIL",(o=t.ActionType||(t.ActionType={}))[o.UNKNOWN_ACTION_TYPE=0]="UNKNOWN_ACTION_TYPE",o[o.CLICK=1]="CLICK",o[o.LEFT_PULL=2]="LEFT_PULL",o[o.RIGHT_PULL=3]="RIGHT_PULL",o[o.UP_PULL=4]="UP_PULL",o[o.DOWN_PULL=5]="DOWN_PULL",(i=t.SubAction||(t.SubAction={}))[i.UNKNOWN_SUB_ACTION=0]="UNKNOWN_SUB_ACTION",i[i.PAGE_ENTER=1]="PAGE_ENTER",i[i.PAGE_LEAVE=2]="PAGE_LEAVE",i[i.PAGE_RESUME=3]="PAGE_RESUME",i[i.PAGE_PAUSE=4]="PAGE_PAUSE",(a=t.Direction||(t.Direction={}))[a.UNKNOWN2=0]="UNKNOWN2",a[a.UP=1]="UP",a[a.DOWN=2]="DOWN",a[a.LEFT=3]="LEFT",a[a.RIGHT=4]="RIGHT",(s=t.TaskStatus||(t.TaskStatus={}))[s.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",s[s.START=1]="START",s[s.RETRY=2]="RETRY",s[s.PAUSE=3]="PAUSE",s[s.RESUME=4]="RESUME",s[s.PENDING=5]="PENDING",s[s.PROCESSING=6]="PROCESSING",s[s.SUCCESS=7]="SUCCESS",s[s.FAIL=8]="FAIL",s[s.CANCEL=9]="CANCEL",s[s.FINISH=10]="FINISH",(c=t.OperationType||(t.OperationType={}))[c.UNKNOWN_OPERATION=0]="UNKNOWN_OPERATION",c[c.CLICK=1]="CLICK",c[c.DOUBLE_CLICK=2]="DOUBLE_CLICK",c[c.TRIPLE_CLICK=3]="TRIPLE_CLICK",c[c.LONG_PRESS=4]="LONG_PRESS",c[c.PULL=5]="PULL",c[c.DRAG=6]="DRAG",c[c.SCALE=7]="SCALE",c[c.PULL_DOWN=8]="PULL_DOWN",c[c.PULL_UP=9]="PULL_UP",c[c.RIGHT_CLICK=10]="RIGHT_CLICK",c[c.AUTO=11]="AUTO"}(Lt||(Lt={})),function(t){var e,n;(e=t.ShowType||(t.ShowType={}))[e.UNKNOWN_TYPE=0]="UNKNOWN_TYPE",e[e.PAGE_AUTO=10]="PAGE_AUTO",e[e.PAGE_CUSTOM=11]="PAGE_CUSTOM",e[e.ELEMENT=12]="ELEMENT",(n=t.TaskEventType||(t.TaskEventType={}))[n.UNKNOWN_TYPE=0]="UNKNOWN_TYPE",n[n.USER_OPERATION=1]="USER_OPERATION",n[n.STAY_LENGTH_STAT_EVENT=2]="STAY_LENGTH_STAT_EVENT",n[n.BACKGROUND_TASK_EVENT=3]="BACKGROUND_TASK_EVENT"}(Ct||(Ct={})),function(t){var e;(e=t.ShowType||(t.ShowType={}))[e.UNKNOWN2=0]="UNKNOWN2",e[e.PAGE=1]="PAGE"}(Nt||(Nt={}));var At,Dt,Mt=!0,jt=(new Date).valueOf(),Kt=function(t,e){var r,o;void 0===e&&(e=!1);var i=t.type,a=t.currentUrlPackage,s=t.referUrlPackage,c=t.name,u=void 0===c?"":c,l=t.action,p=t.beginTime,d=t.params,f=t.contentPackage,h=t.status,g=t.actionType,m=t.auto,v=((r={status:h?Lt.ActionStatus[h]||Lt.ActionStatus.UNKNOWN_STATUS:Lt.ActionStatus.SUCCESS})[e?"show_type":"action_type"]=g?Lt.ActionType[g]||Lt.ActionType.UNKNOWN_ACTION_TYPE:Lt.ActionType.CLICK,r.url_package=a,r.refer_url_package=s,r[e?"content_wrapper":"content_package"]=f,r);if("PV"===i){var y=Lt.SubAction.PAGE_ENTER,_=Lt.PageShowAction.ENTER,w=Mt,S=0;switch(Mt=!1,l){case"leave":_=Lt.PageShowAction.LEAVE,y=Lt.SubAction.PAGE_LEAVE,S=(new Date).valueOf()-(p||jt);break;case"enter":_=Lt.PageShowAction.ENTER,y=Lt.SubAction.PAGE_ENTER,jt=(new Date).valueOf();break;case"visible":_=Lt.PageShowAction.RESUME,y=Lt.SubAction.PAGE_RESUME,jt=(new Date).valueOf();break;case"hidden":_=Lt.PageShowAction.LEAVE,y=Lt.SubAction.PAGE_PAUSE,S=(new Date).valueOf()-(p||jt)}var b=m?Ct.ShowType.PAGE_AUTO:Ct.ShowType.PAGE_CUSTOM;return e&&(w=void 0,b=Nt.ShowType.PAGE),{show_event:n({action:_,sub_action:y,type:b,first_load:w,time_cost:0,stay_length:S},v)}}return{show_event:n({action:e?0:Lt.PageShowAction.ENTER,type:e?0:Ct.ShowType.ELEMENT,sub_action:e?0:Lt.SubAction.PAGE_ENTER,element_package:(o={},o[e?"action2":"action"]=u,o.params=JSON.stringify(d),o)},v)}},Wt=function(t,e){var r,o;void 0===e&&(e=!1);var i=t.sessionId,a=t.currentUrlPackage,s=t.referUrlPackage,c=t.name,u=t.params,l=t.type,p=t.contentPackage,d=t.status,f=t.taskType,h=t.operationDirection,g=((r={url_package:a,refer_url_package:s,element_package:(o={},o[e?"action2":"action"]=c,o.params=JSON.stringify(u),o)})[e?"content_wrapper":"content_package"]=p,r);return e?"CLICK"===l?{click_event:n({type:f&&Lt.OperationType[f]||Lt.OperationType.CLICK,direction:h&&Lt.Direction[h]||Lt.Direction.UNKNOWN2},g)}:{task_event:n({action2:l,status:d&&Lt.TaskStatus[d]||Lt.TaskStatus.UNKNOWN_STATUS},g)}:{task_event:n({type:f&&Ct.TaskEventType[f]||Ct.TaskEventType.USER_OPERATION,status:d&&Lt.TaskStatus[d]||Lt.TaskStatus.UNKNOWN_STATUS,operation_type:Lt.OperationType[l]||Lt.OperationType.CLICK,operation_direction:h&&Lt.Direction[h]||Lt.Direction.UNKNOWN2,session_id:i},g)}},Vt=function(t){var e=t.name,o=t.params,i=t.currentUrlPackage,a=t.referUrlPackage,s=r(t,["name","params","currentUrlPackage","referUrlPackage"]);return{key:e,value:JSON.stringify(n(n({url_package:i,refer_url_package:a},o),s))}},Bt=function(t){var e=t.currentUrlPackage,r=t.referUrlPackage,o=t.options;return{video_stat_event:n(n({},o),{url_package:e,refer_url_package:r})}},Gt=(At=(new Date).getTimezoneOffset()/60)<=0?"GMT+"+S(-At+"",2,"0")+":00":"GMT-"+S(At+"",2,"0")+":00",Ft=function(){function t(t,e){void 0===e&&(e=!1),this.client_timestamp=(new Date).valueOf(),this.client_increment_id=0,this.session_id=h.sessionId,this.event_id="",e||(this.time_zone=Gt),Object.assign(this,t),this.genIncrementId()}return t.prototype.genIncrementId=function(){this.client_increment_id=this.isCustomStatEvent()?ht("WEBLOGGER_CUSTOM_INCREAMENT_ID_KEY"):ht("WEBLOGGER_INCREAMENT_ID_KEY")},t.prototype.isCustomStatEvent=function(){return!(!this.stat_package||!("custom_stat_event"in this.stat_package))},t.prototype.getEventType=function(){if(this.event_package){var t=this.event_package,e=t.task_event,n=t.show_event,r=t.click_event,o=t.custom_event;if(n)return"showEvent";if(r)return"clickEvent";if(e)return"taskEvent";if(o)return"customEvent"}return"customEvent"},t}();function Ht(t,e,n){var o;void 0===n&&(n=!1);var i,a=e.eventId,s=e.currentUrlPackage,c=e.referUrlPackage,u=e.contentPackage,l=e.name,p=e.params;switch(n&&"RADAR"!==t&&"CUSTOM"!==t&&(s&&(s.page2=s.page,delete s.page),c&&(c.page2=c.page,delete c.page)),t){case"PV":case"SHOW":return new Ft({event_package:Kt({type:t,status:e.status,currentUrlPackage:s,referUrlPackage:c,action:e.type,beginTime:e.beginTime,actionType:e.actionType,name:l,params:p,contentPackage:u,operationDirection:e.operationDirection,auto:e.auto},n),event_id:a},n);case"CUSTOM":case"CUSTOM_STAT_EVENT":var d=Vt({name:l,params:p,currentUrlPackage:s,referUrlPackage:c});return new Ft(n?{event_package:{custom_event:d},event_id:a}:{stat_package:{custom_stat_event:d},event_id:a},n);case"RADAR":return new Ft({stat_package:{custom_stat_event:Vt({name:l,params:p,currentUrlPackage:s,referUrlPackage:c})},event_id:a},n);case"HEART_BEAT_EVENT":case"LAUNCH_EVENT":case"APP_USAGE_STAT_EVENT":case"EXCEPTION_EVENT":case"DEVICE_STAT_EVENT":return new Ft({stat_package:(o={},o[t.toLowerCase()]=(i=e,i.currentUrlPackage,i.referUrlPackage,r(i,["currentUrlPackage","referUrlPackage"])),o)},n);case"VIDEO":return new Ft(n?{stat_package:Bt({currentUrlPackage:s,referUrlPackage:c,options:p.params})}:{event_package:Wt({type:t,status:e.status,taskType:e.taskType,sessionId:h.sessionId,currentUrlPackage:s,referUrlPackage:c,name:l,params:p.params,contentPackage:u},n),event_id:a},n);default:return new Ft({event_package:Wt({type:t,status:e.status,taskType:e.taskType,sessionId:h.sessionId,currentUrlPackage:s,referUrlPackage:c,name:l,params:p,contentPackage:u},n),event_id:a},n)}}var qt,Jt,zt=null,Qt="tool",Yt=!1,Xt=function(t){return void 0===t&&(t=Dt||"undefined"!=typeof window&&window.yoda),Dt&&Dt.isInYoda?Dt:t&&t.isInYoda?Dt=t:null},$t=function(){return o(void 0,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:if(!Dt||Yt)return[2];t.label=1;case 1:return t.trys.push([1,6,,7]),zt?[4,zt]:[3,3];case 2:return t.sent(),[3,5];case 3:return[4,zt=Dt.ready()];case 4:t.sent(),Dt.register({namespace:"webview",name:"getPageLoadData"}),Dt.register({namespace:"tool",name:"setClientLog"}),Dt.register({namespace:"tool",name:"sendRadarLog"}),Dt.register({namespace:"tool",name:"getKswitchData"}),t.label=5;case 5:return zt=null,Yt=!0,[3,7];case 6:return t.sent(),[3,7];case 7:return[2]}}))}))},Zt=function(t,e){return void 0===e&&(e="tool"),o(void 0,void 0,void 0,(function(){var n,r,o;return i(this,(function(i){switch(i.label){case 0:return n=!1,Dt?Yt?[3,2]:[4,$t()]:[3,5];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,Dt.tool.canIUse({namespace:e,name:t})];case 3:return r=i.sent().canUse,n=r,[3,5];case 4:return o=i.sent(),y("[error 206]","yoda.tool.canIUse({ '"+e+"', '"+t+"' }) 报错: "+o.message),[3,5];case 5:return[2,n]}}))}))},te=function(t,e){return o(void 0,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return Dt?Yt?[3,2]:[4,$t()]:[2];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,Dt[Qt].setClientLog({type:t,data:e},(function(n,r){n&&1!==n.result&&y("[error 203]","yoda.tool.setClientLog 埋点发送失败",JSON.stringify({type:t,data:e}),"result: "+n+", message: "+r)}))];case 3:return[2,r.sent()];case 4:return n=r.sent(),y("[error 209]","yoda."+Qt+".setClientLog() 报错: "+n.message),[3,5];case 5:return[2]}}))}))},ee=function(){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return Dt?Yt?[3,2]:[4,$t()]:[2,!1];case 1:e.sent(),e.label=2;case 2:return[4,Zt(t="setClientLog","tool")];case 3:return e.sent()?(Qt="tool",[2,!0]):[4,Zt(t,"platform")];case 4:return e.sent()?(Qt="platform",[2,!0]):[2,!1]}}))}))},ne=void 0,re=function(t,e){return o(void 0,void 0,void 0,(function(){var n,r;return i(this,(function(o){switch(o.label){case 0:return Dt?Yt?[3,2]:[4,$t()]:[2];case 1:o.sent(),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,null===(r=Dt.tool)||void 0===r?void 0:r.handleEntryTag({type:t,params:e})];case 3:return(n=o.sent())&&n.data&&n.data.entryTag?[2,n.data.entryTag]:[3,5];case 4:return y("[error 213]","操作染色参数报错",o.sent()),[3,5];case 5:return[2,null]}}))}))},oe={isSupportBridgeLog:ee,isSupportBridge:Zt,getWebviewLoadPerf:function(t){return void 0===t&&(t={}),o(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return Dt?Yt?[3,2]:[4,$t()]:[2];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,null===(e=Dt.webview)||void 0===e?void 0:e.getPageLoadData(t)];case 3:return[2,n.sent()];case 4:return y("[error 207]","yoda.webview.getPageLoadData() 报错: "+n.sent().message),[3,5];case 5:return[2]}}))}))},sendRadarLog:function(t){return void 0===t&&(t={}),o(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return Dt?Yt?[3,2]:[4,$t()]:[2];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,null===(e=Dt.tool)||void 0===e?void 0:e.sendRadarLog(t,(function(e,n){e&&1!==e.result&&y("[error 205]","yoda.tool.sendRadarLog 埋点发送失败",JSON.stringify(t),"result: "+e+", message: "+n)}))];case 3:return[2,n.sent()];case 4:return y("[error 207]","yoda.tool.sendRadarLog() 报错: "+n.sent().message),[3,5];case 5:return[2]}}))}))},setClientLog:te,initYoda:$t,yodaAlready:Yt,getKDSWebviewLoadPerf:function(t){return void 0===t&&(t={}),o(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return Dt?Yt?[3,2]:[4,$t()]:[2];case 1:n.sent(),n.label=2;case 2:return[4,Zt("getPageLoadData","system")];case 3:if(!n.sent())return[3,7];n.label=4;case 4:return n.trys.push([4,6,,7]),[4,null===(e=Dt.system)||void 0===e?void 0:e.getPageLoadData(t)];case 5:return[2,n.sent()];case 6:return y("[error 212]","yoda.system.getPageLoadData() 报错",n.sent().message),[3,7];case 7:return[2]}}))}))},sendSummarizedLog:function(t){return void 0===t&&(t={}),o(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:if(!Dt)return[2];n.label=1;case 1:return n.trys.push([1,5,,6]),Yt?[3,3]:[4,$t()];case 2:n.sent(),n.label=3;case 3:return[4,null===(e=Dt.tool)||void 0===e?void 0:e.sendSummarizedLog(t)];case 4:return[2,n.sent()];case 5:return y("[error 208]","yoda.tool.sendSummarizedLog() 报错: "+n.sent().message),[3,6];case 6:return[2]}}))}))}},ie=function(t,e,n,r){void 0===t&&(t=p.CLICK),void 0===e&&(e={}),"string"!=typeof t&&(t=t.type),t=t.toUpperCase();var o={};return"string"==typeof e?(o.contentPackage=r,"CUSTOM"===t?(o.key=e,o.value=n):(o.params=n,"PV"===t?o.page=e:o.action=e)):o=e,[t,o]},ae=!1,se=Math.random(),ce=function(t){function r(e,n){void 0===e&&(e={});var r,o,i,a=t.call(this,e,n)||this;return a.yoda=null,a.SampledPageMap={},a.beforeUnload=function(t){if(!ae){for(var e in a.logger.drain(),a.plugins){var n=a.plugins[e];"function"==typeof n.beforeUnload&&n.beforeUnload(t)}ae=!0,setTimeout((function(){ae=!1}),2e3)}},a.isBridge=e.bridgeMode&&e.yoda&&e.yoda.isInYoda,a.logConfig.isBridge=a.isBridge,r="sessionId",o=n&&n.session_id||K("sid")||(i="",b()&&(i=K("session_id")||K("sid"))?i:B()),h[r]=o,a.isV2="v2"===a.logConfig.proto,a.getSampled(e),a.presetBaseOption(a.baseOption),a.commonPackage=new _t(a.baseOption),a.logger=new It(a.logConfig,a.commonPackage),a.initYoda(),a.addPlugins(),_(window,"pagehide",a.beforeUnload),_(window,"beforeunload",a.beforeUnload),a}return e(r,t),r.prototype.getSampled=function(t){"function"==typeof t.sampleRateFn?this.sampled=!!t.sampleRateFn():void 0!==t.sampleRate&&(this.sampled=se<Number(t.sampleRate))},r.prototype.presetBaseOption=function(t){this.isBridge||(this.isV2?("number"!=typeof t.product&&y("[error 101]","请设置有效的 product 值，值类型为 number!"),delete t.product_name):(t.product_name&&"string"==typeof t.product_name||y("[error 100]","请设置有效的 product_name 值，值类型为 string!"),delete t.product),t.user_id||(t.user_id=K("userId")||K("userName")||void 0,t.user_id||v("[warn 102]","user_id 为空，请确定是否传入，如果是异步通过 updateCommonPackage 接口传入，可以忽略该提示!")),t.device_id||(t.device_id=H(),t.device_id||y("[error 103]","device_id 为空，请设置有效的设备 id!")),!t.global_id&&b()&&(t.global_id=K("egid")||""))},Object.defineProperty(r.prototype,"Utils",{get:function(){return{yoda:this.yoda&&oe,cookie:V,ua:lt,io:{sendData:Pt}}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isKSwitchSampled",{get:function(){return void 0!==typeof ne},enumerable:!1,configurable:!0}),r.prototype.initYoda=function(){return o(this,void 0,void 0,(function(){var t=this;return i(this,(function(e){switch(e.label){case 0:return this.logConfig.yoda&&!this.yoda&&(this.yoda=Xt(this.logConfig.yoda)),this.yoda?[4,$t()]:[3,2];case 1:e.sent(),e.label=2;case 2:return o(void 0,void 0,void 0,(function(){var t,e,n,r,o;return i(this,(function(i){switch(i.label){case 0:if(!Dt)return[2,ne=null];if(void 0!==ne)return[2,ne];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,Zt("getKswitchData","tool")];case 2:return i.sent()?[4,Dt.tool.getKswitchData({keys:[{key:"webloggerSampling"}]})]:[2,ne=null];case 3:if((t=i.sent())&&t.data&&("string"==typeof(e=t.data[0])&&(e=JSON.parse(e)),n=e?e.value:null)){for(o in"string"==typeof n&&(n=JSON.parse(n)),r="undefined"!=typeof location?location.host:"*",n)"*"!==o&&-1===o.indexOf(r)||(ne||(ne={}),ne[o]=n[o]);if(ne)return[2,ne]}return[3,5];case 4:return y("[error 201]","yoda.tool.getKswitchData 采样配置获取出错",i.sent().message),[3,5];case 5:return[2,ne=null]}}))})).then((function(){t.currentUrlPackage&&(t.currentUrlPackage.sampled=t.getPageSampled())})),o(void 0,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return Dt?[4,Zt("getDeviceInfo","system")]:[2,null];case 1:if(!e.sent())return[3,5];e.label=2;case 2:return e.trys.push([2,4,,5]),[4,null===(t=Dt.system)||void 0===t?void 0:t.getDeviceInfo()];case 3:return[2,e.sent()];case 4:return y("[error 210]","yoda.system.getDeviceInfo() 报错",e.sent().message),[3,5];case 5:return[2]}}))})).then((function(e){e&&e.mod&&(t.commonPackage.device_package.model=e.mod)})),o(void 0,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return Dt?[4,Zt("getAppInfo","system")]:[2,null];case 1:if(!e.sent())return[3,5];e.label=2;case 2:return e.trys.push([2,4,,5]),[4,null===(t=Dt.system)||void 0===t?void 0:t.getAppInfo()];case 3:return[2,e.sent()];case 4:return y("[error 209]","yoda.system.getAppInfo() 报错",e.sent().message),[3,5];case 5:return[2]}}))})).then((function(e){e&&(e.did&&(t.commonPackage.identity_package.device_id=e.did),e.userId&&!t.commonPackage.identity_package.user_id&&(t.commonPackage.identity_package.user_id=e.userId),e.appver&&(t.commonPackage.app_package.version_name=e.appver))})),[2]}}))}))},r.prototype.initUrlPackage=function(){t.prototype.initUrlPackage.call(this);var e,n=this.logConfig.referer,r="web";n?(e=n.value,r=n.type&&n.type||r):"undefined"!=typeof document&&document.referrer&&(e=document.referrer),e&&this.updateReferUrlPackage(e,r)},r.prototype.updateCurrentUrlPackage=function(t,e){if(void 0===t&&(t=(null===location||void 0===location?void 0:location.href)||""),void 0===e&&(e="web"),"object"==typeof t&&t.page&&!t.force&&this.currentUrlPackage&&t.page===this.currentUrlPackage.page)return this.currentUrlPackage.update(t.page,t.params);this.currentUrlPackage=new Q(t,e,this.logConfig.urlMap),this.currentUrlPackage.sampled=this.getPageSampled(),this.logConfig.attachUrl&&this.currentUrlPackage.attachUrl()},r.prototype.updateReferUrlPackage=function(t,e){void 0===t&&(t=this.currentUrlPackage),void 0===e&&(e="web"),this.referUrlPackage=t instanceof Q?t:new Q(t,e,this.logConfig.urlMap)},r.prototype.getPageSampled=function(){if(!ne)return"boolean"!=typeof this.sampled||this.sampled;var t="undefined"!=typeof location?location.href.replace(/https?:\/\//,"").split("?")[0]:"*";if(this.SampledPageMap&&void 0!==this.SampledPageMap[t])return this.SampledPageMap[t];if(ne){var e=void 0,n=0,r=null,o=[];for(var i in ne)if(ne.hasOwnProperty(i)){var a=0;if("*"===i?a=1:0===t.indexOf(i)&&(i===t?a=100:"/"===i[i.length-1]&&(a=11-1/i.length)),!a)continue;var s=ne[i],c=s.radar,u=s.overwrite,l=s.overall;a+=u?1e3:0,c&&o.push({radar:c,level:a}),a>n&&(n=a,e=l)}n&&(r={},o.sort((function(t,e){return t.level-e.level})).forEach((function(t){Object.assign(r,t.radar)})));var p=void 0;p=n>1e3||void 0===this.sampled?Math.random()<Number(e)&&(!r||{radar:r}):"boolean"!=typeof this.sampled||this.sampled,this.SampledPageMap&&(this.SampledPageMap[t]=p)}return this.SampledPageMap&&this.SampledPageMap[t]},Object.defineProperty(r.prototype,"isSendSampled",{get:function(){return this.currentUrlPackage&&this.currentUrlPackage.sampled||this.logger.isDebug},enumerable:!1,configurable:!0}),r.prototype.generateLog=function(t,e,r){void 0===r&&(r=Ht);var o,i=e,a=i.action,s=i.params,c=i.status,u=i.type,l=i.eventId,p=i.contentPackage,f=i.urlPage;if(p&&(p="string"==typeof p?p:JSON.stringify(p)),t===d.PV){var h=e,g=h.page,m=h.type;m||(e.type=m="enter"),"enter"===m&&g?this.updateCurrentUrlPackage({page:g,params:s}):this.currentUrlPackage.update(g,s)}else f&&f.page&&(o={page:f.page,identity:f.identity||B(),params:JSON.stringify(f.params),page_type:this.currentUrlPackage.page_type});var v={currentUrlPackage:o||this.currentUrlPackage.toJSON(),referUrlPackage:this.referUrlPackage?this.referUrlPackage.toJSON():void 0,contentPackage:p};if(t!==d.RADAR&&v.currentUrlPackage.page.indexOf("http"),t===d.PV){var y=e.type;return r(t,n(n(n({},e),{type:y}),v),this.isV2)}if(t===d.SHOW)return r(t,n(n(n({},e),{name:a}),v),this.isV2);if(t===d.VIDEO)return r(t,n({params:e,name:"VIDEO"},v),this.isV2);if(t===d.RADAR)return r(t,e,this.isV2);if(t===d.CUSTOM){var _=e,w=_.key,S=_.value,b=_.eventId;return r(t,n(n(n({},e),{params:S,eventId:b,name:w}),v),this.isV2)}return r(t,n(n(n({},e),{params:s,status:c,taskType:u,eventId:l,name:a}),v),this.isV2)},r.prototype.collect=function(t,e,n,r){var o=ie(t,e,n,r),i=o[0],a=o[1];return this.send(i,a,!1)},r.prototype.sendImmediately=function(t,e,n,r){var o=ie(t,e,n,r),i=o[0],a=o[1];return this.send(i,a,!0)},r.prototype.beforeSend=function(t,e,r){var a,s,c=this;if(this.emit("event",{type:t,action:e.type||e.action,data:r}),"CLICK"===t){var u=null===(a=e)||void 0===a?void 0:a.entryTag;this.yoda&&u&&re("setPendingEntryTag",{entryTag:n({page_name:this.currentUrlPackage.page,element_action:null==e?void 0:e.action},u)})}else if("PV"===t&&this.yoda&&!this.isBridge){if("enter"===((null===(s=e)||void 0===s?void 0:s.type)||"enter")){this.logger.sendingYield=o(c,void 0,void 0,(function(){var t,e;return i(this,(function(n){switch(n.label){case 0:return t=this.currentUrlPackage.identity,[4,re("clearEntryTag",{subPage:t})];case 1:return n.sent(),[4,re("consumeEntryTag",{subPage:t})];case 2:return e=n.sent(),this.commonPackage.updateGlobalAttr({entry_tag:e}),[2]}}))}))}}},r.prototype.send=function(t,e,n){if(!this._silenced){var r=this.generateLog(t,e);if(this.beforeSend(t,e,r),"RADAR"===t)return this.logger.sendRadar(r,null==e?void 0:e.serviceName);if((!this.isV2||!this.logConfig.forbidV2HttpUrlPage||L(this.currentUrlPackage.page))&&this.isSendSampled){var o="object"==typeof e&&e.callback||void 0;this.logger.send(r,!!n,o)}}},r.prototype.destroy=function(){t.prototype.destroy.call(this),w(window,"pagehide",this.beforeUnload),w(window,"beforeunload",this.beforeUnload)},r.prototype.silence=function(t){this._silenced=t},r.Logger=It,r}(A);try{var ue=__webpack_require__(/*! @ks/yoda-js-sdk */ "./node_modules/@ks/yoda-js-sdk/dist/yoda.common.js");Jt=Xt(ue.default||ue)}catch(t){Jt=Xt("undefined"!=typeof window&&(window.yoda||window.KSYoda))}var le=null===(qt=null===window||void 0===window?void 0:window.navigator)||void 0===qt?void 0:qt.platform,pe=le&&-1!==["iOS","Android"].indexOf(le),de=function(t){function r(e,r){return t.call(this,n(n({},e),{yoda:Jt||void 0,bridgeMode:!(null==e?void 0:e.disableBridge)}),r)||this}return e(r,t),r.prototype.checkSupport=function(){return o(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return this.logConfig.disableBridge?(this.isSupportBridgeLogger=!1,[3,3]):[3,1];case 1:return t=this,[4,ee()];case 2:t.isSupportBridgeLogger=e.sent(),e.label=3;case 3:return[2]}}))}))},r.prototype.sendByBridge=function(t,e,r){void 0===t&&(t=p.CLICK);var o=e.contentPackage;if(o&&(o="string"==typeof o?o:JSON.stringify(o)),"PV"===t){var i=e,a=i.page,s=i.type,c=i.params,u=i.coPage;s||(e.type=s="enter"),"enter"===s?(this.updateCurrentUrlPackage({page:a||this.currentUrlPackage.page,params:c||this.currentUrlPackage.params,force:!0}),u&&(this.currentUrlPackage.coPage=u)):this.currentUrlPackage.update(a,c)}var l=!!this.currentUrlPackage.coPage,d=function(t,e){var r=e,o=r.action,i=r.params,a=r.eventId,s=r.contentPackage,c=r.currentUrlPackage,u=r.status;r.name;var l=r.feedLogCtx;switch(t){case"PV":var p=e,d=p.type,f=p.beginTime;return n(n({},c),{actionType:d,contentPackage:s,pageType:"H5",status:u||"SUCCESS",beginTime:f,eventId:a});case"SHOW":return{action:o,params:JSON.stringify(i),contentPackage:s,feedLogCtx:l,eventId:a};case"RADAR":case"CUSTOM":var h=e,g=h.key,m=h.value,v=h.biz;return{key:g,value:JSON.stringify(n(n({},m),{url_package:c})),biz:v,eventId:a};default:var y=e.type;return{action:o,params:JSON.stringify(i),contentPackage:s,type:y||"USER_OPERATION",status:u||"UNKNOWN_STATUS",operationType:t,operationDirection:"UNKNOWN2",feedLogCtx:l,eventId:a}}}(t,n(n({},e),{contentPackage:o,currentUrlPackage:this.currentUrlPackage.toJSON()})),f=-1!==["CUSTOM","RADAR"].indexOf(t);this.commonPackage.increaseH5SeqId(f);var h=this.baseOption,g=h.service_name,m=h.sub_biz,v=h.need_encrypt;if(d.h5ExtraAttr=JSON.stringify(this.commonPackage.getH5ExtraAttr({bridge_info:(null==Jt?void 0:Jt.version)||!0,coPage:l})),d.realtime=!!r,d.serviceName=g||"",d.subBiz=m||"",d.needEncrypt=v||!1,d.container=pe?"REACT_NATIVE":"H5",this.emit("event",{type:t,action:e.type||e.action,data:d}),"PV"!==t)return this.currentUrlPackage&&!this.logConfig.disablePV&&(d.urlPage={page:this.currentUrlPackage.page,params:JSON.stringify(this.currentUrlPackage.params),identity:this.currentUrlPackage.identity,coPage:l}),"SHOW"===t?te("addElementShowEvent",d):f?(this.logConfig.biz&&!d.biz&&(d.biz=this.logConfig.biz),te("addCustomStatEvent",d)):te("addTaskEvent",d);this.logConfig.disablePV||L(this.currentUrlPackage.page)&&("enter"!==(s=e.type)&&"visible"!==s||(d.coPage=l,d.pageType=pe?"NATIVE":"H5",te("setCurrentPage",d)))},r.prototype.sendByHttp=function(e,n,r){return void 0===e&&(e=p.CLICK),t.prototype.send.call(this,e,n,r)},r.prototype.send=function(t,e,n){return void 0===t&&(t=p.CLICK),o(this,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return void 0!==this.isSupportBridgeLogger?[3,2]:[4,this.checkSupport()];case 1:r.sent(),r.label=2;case 2:return this.isSupportBridgeLogger?(this.logConfig.openHttpSender&&this.sendByHttp(t,e,n),this.beforeSend(t,e),[2,this.sendByBridge(t,e,n)]):(this.sendByHttp(t,e,n),[2])}}))}))},r}(ce),fe=function(){function t(){this.weblog="undefined"!=typeof window&&window._GLOBAL_KS_WEBLOGGER_&&window._GLOBAL_KS_WEBLOGGER_.weblog}return t.prototype.apply=function(t){this.weblog=t},t}(),he={updateInterval:2e4,crashThreshold:1e4},ge=function(t){function r(e){var r=t.call(this)||this;return r.eventName="onpagehide"in window?"pagehide":"beforeunload",r.options=n({},he),r.historyMoniorInfo=null,r.stop=function(){clearInterval(r.updateIntervalId);try{localStorage.removeItem(r.monitorId)}catch(t){}},e&&e.logger&&r.apply(e),_(window,r.eventName,r.stop),r}return e(r,t),r.prototype.apply=function(t){t&&(this.weblog=t,this.monitorId="@ks.monitor.crash_"+this.weblog.sessionId,this.start())},r.prototype.destroy=function(){this.stop(),w(window,this.eventName,this.stop)},r.prototype.pickHistoryInfo=function(){for(var t in localStorage)if(0===t.indexOf("@ks.monitor.crash_"))try{var e=localStorage.getItem(t),n=JSON.parse(e);this.checkHistoryCrash(n)}catch(t){}},r.prototype.checkHistoryCrash=function(t){var e=(new Date).valueOf();t&&t.time&&e-t.time>this.options.crashThreshold&&this.weblog.collect("CUSTOM",{key:"crash",value:t})},r.prototype.start=function(){var t=this;this.pickHistoryInfo(),this.updateIntervalId=window.setInterval((function(){t.update()}),this.options.updateInterval),this.update()},r.prototype.update=function(){var t,e;if(window.performance&&window.performance.memory){var n={time:(new Date).valueOf(),memory:{limit:Math.floor(window.performance.memory.jsHeapSizeLimit/1024),total:Math.floor(window.performance.memory.totalJSHeapSize/1024),used:Math.floor(window.performance.memory.usedJSHeapSize/1024)},href:null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.href,sessionId:null===(e=this.weblog)||void 0===e?void 0:e.sessionId};try{localStorage.setItem(this.monitorId,JSON.stringify(n))}catch(t){}}},r.key="crachMonitor",r}(fe),me={interval:1e4,decimals:2};function ve(t){return setTimeout(t,62.5)}var ye=clearTimeout,_e=function(t){function r(e,r){var o=t.call(this)||this;return o.options=n({},me),o.count=0,r||e&&e.logger&&o.apply(e),Object.assign(o.options,r),o.start(),o}return e(r,t),r.prototype.destroy=function(){this.stop()},r.prototype.start=function(){this.loop(),this.fpsTick()},r.prototype.fpsTick=function(){var t=this;this.fpsTickId=function(t){return(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||ve).call(this,t)}((function(){t.count++,t.fpsTick()}))},r.prototype.loop=function(){var t=this;this.loopBeginTime=(new Date).valueOf(),this.loopId=window.setTimeout((function(){t.loopEndTime=(new Date).valueOf();var e=t.calculate();t.weblog.collect("CUSTOM",{key:"fps",value:{key:"fps",value:e}}),t.count=0,t.loop()}),this.options.interval)},r.prototype.stop=function(){!function(t){(window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||ye).call(this,t)}(this.fpsTickId),window.clearTimeout(this.loopId)},r.prototype.calculate=function(){return+(1e3/((this.loopEndTime-this.loopBeginTime)/this.count)).toFixed(this.options.decimals)},r.key="fpsMonitor",r}(fe),we="undefined"!=typeof window?window.performance:null,Se=we&&we.timing||null;we&&we.getEntriesByType&&we.getEntriesByType("navigation")[0];var be={dnsLookup:{end:"domainLookupEnd",start:"domainLookupStart"},tcpConnection:{end:"connectEnd",start:"connectStart"},resourceLoad:{end:"responseEnd",start:"requestStart"},jsCost:{custom:function(){if("function"!=typeof performance.getEntries)return 0;var t=performance.getEntries(),e=t[0],n=t.filter((function(t){return"script"===t.initiatorType}))[0];return n?e.domComplete-n.fetchStart:0}},documentContentLoaded:{end:"domComplete",start:"fetchStart"},load:{end:"loadEventEnd",start:"fetchStart"},timeToFirstByte:{end:"loadEventEnd",start:"fetchStart"},firstScreen:{custom:function(t,e){var n=(e||{}).endPoint,r=void 0!==n?n:(new Date).valueOf();return Se&&r-Se.fetchStart||0}},whiteScreen:{custom:function(t,e){var n=(e||{}).endPoint,r=void 0!==n?n:(new Date).valueOf();return Se&&r-Se.fetchStart||0}}},Ee=function(t){function n(e){var n=t.call(this)||this;return n.load=function(){setTimeout((function(){var t=n.collect();t&&["load","documentContentLoaded","dnsLookup","tcpConnection","jsCost","timeToFirstByte"].forEach((function(e){var r;"jsCost"===e&&0===t[e]||n.weblog.collect("CUSTOM",{key:ke[e],value:(r={},r[ke[e]]=t[e],r)})}))}))},Se?(e&&n.apply(e),n):(y("The Timing Monitor need performance APIs to Support!"),n)}return e(n,t),n.prototype.apply=function(t){this.weblog=t,_(window,"load",this.load)},n.prototype.destroy=function(){w(window,"load",this.load)},n.prototype.calculate=function(t,e){var n=be[t];if(!n)throw new Error("The perf key is not correct!");return"function"==typeof n.custom?n.custom(t,e):Se[be[t].end]-Se[be[t].start]},n.prototype.mark=function(t,e){var n,r=this.collect(t,e);r&&this.weblog.collect("CUSTOM",{key:ke[t],value:(n={},n[ke[t]]=r[t],n)})},n.prototype.collect=function(t,e){var n,r=this;if(Se){if(t)return(n={})[t]=this.calculate(t,e),n;return Object.keys(be).reduce((function(t,n){return t[n]=r.calculate(n,e),t}),{})}},n.key="timingMonitor",n}(fe),ke={load:"total_download_cost",documentContentLoaded:"operational_cost",dnsLookup:"dns_query_cost",tcpConnection:"tcp_cost",jsCost:"js_cost",whiteScreen:"white_screen_cost",firstScreen:"first_screen_cost",timeToFirstByte:"ttfb_cost"};!function(t,e,n){if("undefined"!=typeof window&&void 0!==window._GLOBAL_KS_WEBLOGGER_&&"function"==typeof t){var r=window._GLOBAL_KS_WEBLOGGER_,o=r.weblog,i=r.config,a=e&&i.plugins[e]?i.plugins[e].options:void 0;if("radar"===e){var s=a||o.logConfig[e];if(!s)return;if(s.sampling=s.sampling||1,!t.samplingControl(s))return o.plug(n)}o.addPluginInstance(new t(a))}}(Ee);var Pe=function(){var t="undefined"!=typeof window?window.performance:null;if(t&&t.timing){if("function"==typeof t.timing.toJSON){var e=t.timing.toJSON();return e&&!e.redirectStart&&(e.redirectStart=e.navigationStart),e}return t.timing}return null};var Oe,Te,Le,Ce="radar_log";!function(t){t.LOAD="load",t.RES="resource",t.API="api",t.ERROR="error",t.SDK_ERROR="sdk_error",t.CUSTOM="custom",t.BATCH="batch",t.EVENT="event"}(Oe||(Oe={})),function(t){t.LOAD="load_statistics",t.RES="resource_statistics",t.API="api_statistics",t.ERROR="error_statistics",t.SDK_ERROR="sdk_error",t.CUSTOM="custom_statistics"}(Te||(Te={})),function(t){t.SCRIPT="script",t.RES="res",t.API="api",t.VIDEO="video"}(Le||(Le={}));var Ne,Ue,Re={redirect:{end:"fetchStart",start:"navigationStart"},dns:{end:"domainLookupEnd",start:"domainLookupStart"},dns_start:{end:"domainLookupEnd",start:"navigationStart"},tcp:{end:"connectEnd",start:"connectStart"},tcp_start:{end:"connectEnd",start:"navigationStart"},redirect_count:{custom:function(t,e){return e.redirectCount}},ssl:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ssl_start:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.secureConnectionStart-e.redirectStart}},ttfb:{end:"responseStart",start:"requestStart"},trans:{end:"responseEnd",start:"responseStart"},dom_parse:{end:"domInteractive",start:"responseEnd"},dom_parse_start:{end:"domInteractive",start:"navigationStart"},blank:{end:"domLoading",start:"navigationStart"},fb:{end:"responseStart",start:"navigationStart"},dom_ready:{end:"domContentLoadedEventEnd",start:"navigationStart"},total:{end:"loadEventStart",start:"navigationStart"},resource:{end:"loadEventStart",start:"domContentLoadedEventEnd"},fp:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=performance.getEntries().filter((function(t){return"first-paint"===t.name}))[0];return t?Math.ceil(t.startTime+t.duration):null}},js_cost:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=Pe(),e=performance.getEntries(),n=performance.getEntries().filter((function(t){return"navigation"===t.initiatorType}))[0],r=e.filter((function(t){return"script"===t.initiatorType}))[0],o=n?n.domComplete:t.domComplete-t.navigationStart;return r&&o?o-r.fetchStart:null}},tti:{end:"domInteractive",start:"navigationStart"},protocol:{custom:function(t,e){return e.nextHopProtocol}},dom_num:{custom:function(){return"undefined"!=typeof document?document.all.length:null}}},xe={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)}},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},Ie={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)},noThrottle:!0},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},Ae=["//wlog.kuaishou.com/rest/n/log/web/collect","/rest/wd/common/log/collect/misc2","/rest/wd/common/log/collect/radar","/rest/kd/log/collect"],De={to_webview_page_start:{end:"pageStart",start:"userStart"},to_webview_page_show:{end:"pageShow",start:"userStart"},to_webview_pre_create:{end:"preCreate",start:"userStart"},to_webview_created:{end:"created",start:"userStart"},to_webview_start_load:{end:"startLoad",start:"userStart"},to_webview_did_start_load:{end:"didStartLoad",start:"userStart"},to_webview_did_end_load:{end:"didEndLoad",start:"userStart"},to_navigation_start:{end:"navigationStart",start:"userStart"},to_fetch_start:{end:"fetchStart",start:"userStart"},to_connect_start:{end:"connectStart",start:"userStart"},to_dom_ready:{end:"domContentLoadedEventEnd",start:"userStart"},to_total:{end:"loadEventStart",start:"userStart"},to_fmp:{end:"radarFmp",start:"userStart",notCatchIfUndefined:!0},to_main_data_receive_end:{end:"main_data_receive_end",start:"userStart",notCatchIfUndefined:!0}},Me={navigation_start_time:"navigationStart",fetch_start_time:"fetchStart",dns_start_time:"domainLookupStart",dns_end_time:"domainLookupEnd",connect_start_time:"connect_start",ssl_start_time:"secureConnectionStart",request_start_time:"requestStart",response_start_time:"responseStart",response_end_time:"responseEnd",dom_interactive_time:"domInteractive",dom_loading_time:"domLoading",dom_ready_time:"domContentLoadedEventEnd",load_event_time:"loadEventStart",fmp_time:"radarFmp"},je=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},Ke=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:e,delta:0,entries:[],id:je(),isFinal:!1}},We=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},Ve=!1,Be=!1,Ge=function(t){Ve=!t.persisted},Fe=function(){addEventListener("pagehide",Ge),addEventListener("beforeunload",(function(){}))},He=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Be||(Fe(),Be=!0),addEventListener("visibilitychange",(function(e){var n=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:Ve})}),{capture:!0,once:e})},qe=function(t,e,n,r){var o;return function(){n&&e.isFinal&&n.disconnect(),e.value>=0&&(r||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(o||0),(e.delta||e.isFinal||void 0===o)&&(t(e),o=e.value))}},Je=function(){return void 0===Ne&&(Ne="hidden"===document.visibilityState?0:1/0,He((function(t){var e=t.timeStamp;return Ne=e}),!0)),{get timeStamp(){return Ne}}},ze=function(){return Ue||(Ue=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})}))}))),Ue},Qe=/^(https?:)?\/\//;function Ye(t){if("string"!=typeof t)return"";try{var e=t.lastIndexOf(".");return t.substr(e+1)}catch(t){return""}}function Xe(t,e){if(!t)return!1;var n=t.replace(Qe,"");return e.some((function(t){return n.indexOf(t)>=0}))}var $e={};function Ze(t,e){var n=$e[t];n?n.endTime||(n.endTime=(new Date).getTime(),n.duration=n.endTime-n.startTime,delete n.startTime,delete n.endTime):$e[t]={startTime:(new Date).getTime()}}var tn={},en=[{name:"fid",collectFn:function(t){var e=Ke("FID"),n=Je(),r=function(t){t.startTime<n.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,i())},o=We("first-input",r),i=qe(t,e,o);o?He((function(){o.takeRecords().map(r),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,r){r.timeStamp<n.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+t}],i())}))}},{name:"lcp",collectFn:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Ke("LCP"),o=Je(),i=function(t){var n=t.startTime;n<o.timeStamp?(r.value=n,r.entries.push(t)):r.isFinal=!0,e()},a=We("largest-contentful-paint",i);if(a){e=qe(t,r,a,n);var s=function(){r.isFinal||(a.takeRecords().map(i),r.isFinal=!0,e())};ze().then(s),He(s,!0)}}},{name:"cls",collectFn:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Ke("CLS",0),o=function(t){t.hadRecentInput||(r.value+=t.value,r.entries.push(t),e())},i=We("layout-shift",o);i&&(e=qe(t,r,i,n),He((function(t){var n=t.isUnloading;i.takeRecords().map(o),n&&(r.isFinal=!0),e()})))}},{name:"fcp",collectFn:function(t){var e,n=Ke("FCP"),r=Je(),o=We("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<r.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),e())}));o&&(e=qe(t,n,o))}}],nn=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=E(location.search.slice(1));1==+r.debug&&v.apply(void 0,a(["[radar] "+t+": "],e))};var rn=function(){var t=window.navigator.userAgent,e={};return t.split(" ").map((function(t){var n=t.split("/");e[n[0]]=n[1]})),e},on=function(){var t=window.navigator.userAgent;if(-1!==t.indexOf("Android"))return"WebView";if(-1!==t.indexOf("iPhone")){var e=rn();return e.Yoda&&"WK"===e.WebViewType?"YodaWKWebView":e.Yoda||"WKWebView"!==e.WebView?"UIWebView":"WKWebView"}return""},an=function(t,e){var n={};return Object.keys(e).forEach((function(r){t[e[r]]>0&&(n[r]=t[e[r]])})),n};function sn(t){return Array.isArray(t)?t.map((function(t){var e=t.tagName,n=void 0===e?"":e,r=t.id,o=t.getAttribute?t.getAttribute("class"):t.className||"",i=n.toLowerCase();return r&&(i+="#"+r),o&&(i+=o.split(/\s+/g).map((function(t){return"."+t})).join("")),i})).filter((function(t){return t})).join(","):""}function cn(t){return JSON.parse(JSON.stringify(t))}var un=function(t){try{if(window&&window.localStorage&&"undefined"!=typeof Storage&&window.localStorage instanceof Storage){var e=Number(function(t){try{if(window&&window.localStorage){var e=window.localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(t){return e}}}catch(t){return null}return null}(t))||0;return e+1>1e8&&(e=0),function(t,e){try{if(window&&window.localStorage)return window.localStorage.setItem(t,JSON.stringify(e)),!0}catch(t){return!1}}(t,e+1),e}}catch(t){}},ln={},pn=function(t){return ln[t]||(ln[t]=0),ln[t]++};function dn(t){if(!(null==t?void 0:t.name))throw new Error("[Radar] 关键动作上报必须配置name");if((null==t?void 0:t.extra_info)&&!(t.extra_info instanceof Object))throw new Error("[Radar] 关键动作上报 extra_info 必须为 plain object")}var fn,hn,gn=function(){function t(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.middlewares=[],(t=this.middlewares).push.apply(t,e)}return t.prototype.use=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=this.middlewares.pop();(t=this.middlewares).push.apply(t,e),this.middlewares.push(r)},t.prototype.invoke=function(t){var e;return(e=this.middlewares,function(t,n){var r=-1;return function o(i){if(i<=r)return new Error("`next` 被重复调用");r=i;var a=e[i];if(i===e.length&&(a=n),a)try{return a(t,o.bind(null,i+1))}catch(t){return t}}(0)})(t)},t}(),mn=["KUAISHOU","THANOS","NEBULA"],vn=function(t){function r(e,r){var o,i,s=t.call(this)||this;return s.kpn="",s.plugins=[],s.logQueue=[],s.logQueueNext=[],s.queueConfig={wait:1e3,maxBatchLength:200},s.eventName="onpagehide"in window?"pagehide":"beforeunload",s.batchTimer=0,s.batchTimerNext=0,s.startedLoadReport=!1,s.radarSessionId="",s.radarSessionIdNext="",s.chromeMetric=en,s.isInKwai=!1,s.isUsingBridge=null,s.isUsingLegacy=null,s.isUsingDetachedReport=null,s.isSupportedYodaConcat=null,s.customDimension={},s.webviewData=null,s.webviewStart=null,s.webviewStartTime=null,s.finalSampling={},s.sampleData=null,s.sampleList=[Oe.LOAD,Oe.API,Oe.CUSTOM,Oe.ERROR,Oe.EVENT,Oe.RES],s.defaultSampleList={load:1,api:1,resource:.1,error:1,event:1,custom:1,isHit:!0},s.ignoreList=["https://web-trace.ksapisrv.com/ktrace/collect"],s.lastRadarLogId="",s.computedSamplingAgain=!0,s.realSampledList=[],s.hasFmp=!1,s.customPerfList={},s.observeResource=function(t){t.getEntriesByType("resource").forEach((function(t){return s.reportPerformance(t)}))},s.asyncReportTiming=function(){Ze("radarCreatedToOnload"),Ze("onloadToFirstReport"),setTimeout((function(){Ze("asyncReportTiming"),s.reportPerformance(Pe()),s.startedLoadReport=!0;try{s.observeResource(performance),s.observeChromeMetrics(s.chromeMetric),new PerformanceObserver(s.observeResource).observe({entryTypes:["resource"]})}catch(t){}Ze("radarCreatedToFirstReport"),Ze("onloadToFirstReport"),Ze("asyncReportTiming")}),0)},s.chromeMetricCallback=function(t){var e,n,r=t.name,o=t.value;r=r.toLocaleLowerCase();var i={key:Oe.CUSTOM,value:(e={},e[r]=o,e)};s.logCollect(i),s.logCollectNext({key:Oe.EVENT,dimension:{name:r},value:{duration:o}}),Ze(r+"Collect"),function(t){Object.assign(tn,t)}(((n={})[r]=o,n))},s.observeChromeMetrics=function(t){var e=s.options;t.forEach((function(t){var n=t.name;e&&!e[n]||(Ze(n+"Collect"),t.collectFn(s.chromeMetricCallback))}))},s.asyncMetricCollectDone=function(){var t={};Object.keys($e).forEach((function(e){var n=$e[e];!n.duration&&n.startTime&&(n.duration=0,delete n.startTime),t[e]=n.duration}));var e={key:Oe.CUSTOM,value:t};s.logCollect(e),s.flush(),s.weblog.flush(),w(window,s.eventName,s.asyncMetricCollectDone)},s.flush=function(){if(s.beforeFlush(),s.options&&!(s.logQueue.length<=0)&&s.startedLoadReport){var t=JSON.stringify(n(n({},s.weblog.commonPackage.getH5ExtraAttr()),{url:location.href,hash:location.hash,webviewStart:s.webviewStart,webviewStartTime:s.webviewStartTime,sampling_list:s.finalSampling?JSON.stringify(s.finalSampling):""})),e={project_id:s.options.projectId,radar_session_id:s.radarSessionId,h5_extra_attr:t},r=s.weblog.commonPackage,o=r.service_name,i=r.sub_biz,c=r.need_encrypt,u=r.app_package,l=s.currentUrlPackage&&s.currentUrlPackage.toJSON(),p=null;s.options.httpReportFirst||(p=s.addRadarStatEvent({key:Ce,value:n(n({},e),{data:a(s.logQueue),url_package:l,app_version_name:u.version_name}),serviceName:o||"",subBiz:i||"",needEncrypt:c||!1,container:u.container,realtime:!1,h5ExtraAttr:t})),p&&!s.options.httpReportFirst||s.weblog.collect("RADAR",{name:Ce,params:n(n({},e),{data:a(s.logQueue)}),currentUrlPackage:l,referUrlPackage:s.referUrlPackage&&s.referUrlPackage.toJSON(),serviceName:o||"radar_service_name"}),s.logQueue=[]}},s.flushNext=function(){if(s.options&&!(s.logQueueNext.length<=0)){var t=null;s.options.httpReportFirst||(t=s.reportByBridge()),t&&!s.options.httpReportFirst||s.reportByHttp(),s.logQueueNext=[]}},s.getCommonData=function(){var t,e=s.weblog.commonPackage.app_package,r=JSON.stringify(n(n({},s.weblog.commonPackage.getH5ExtraAttr()),{app_version_name:e.version_name,url:location.href,hash:location.hash,online:null===navigator||void 0===navigator?void 0:navigator.onLine})),o=s.currentUrlPackage&&s.currentUrlPackage.toJSON(),i=null===(t=s.options)||void 0===t?void 0:t.projectId;return{h5_extra_attr:r,url_package:o,app_version_name:e.version_name,project_id:i}},r&&(o=r),e&&(e.logger?s.apply(e):o=e),Ze("radarCreatedToFirstReport"),Ze("radarCreatedToOnload"),s.options=o,s.queueConfig=n(n({},s.queueConfig),s.options?s.options.queue:{}),s.ignoreList=s.ignoreList.concat((void 0===(i=s.options&&s.options.ignoreList)&&(i=[]),i.concat(Ae).map((function(t){return t.replace(Qe,"")})))),s}return e(r,t),Object.defineProperty(r.prototype,"KSwitchSampled",{get:function(){return this.weblog.currentUrlPackage.sampled},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isKSwitchSampled",{get:function(){return this.weblog.isKSwitchSampled},enumerable:!1,configurable:!0}),r.prototype.samplingControl=function(t){if(!t)return!1;var e=Math.random();return"number"==typeof t?e<t:e<t.sampling},r.prototype.use=function(t,e){var n=new t(e,this.options);this.plugins.push(n),this.weblog&&n.created()},r.prototype.apply=function(t){var e,n;this.weblog=t,this.kpn=this.weblog.Utils.ua.getDefaultKpn(),this.isInKwai=mn.indexOf(this.kpn)>=0,this.upadteUrlPackage(),this.register(),this.ignoreList.push(null===(n=null===(e=this.weblog)||void 0===e?void 0:e.logger)||void 0===n?void 0:n.url),this.created()},r.prototype.created=function(){this.plugins.forEach((function(t){t.created()}))},r.prototype.destroy=function(){w(window,"load",this.asyncReportTiming),this.plugins.forEach((function(t){t.destroy()}))},r.prototype.computedRealSampled=function(t,e){if(this.isKSwitchSampled){var n=void 0;if("object"==typeof this.KSwitchSampled&&this.KSwitchSampled.radar){var r=this.KSwitchSampled.radar.all;r="number"!=typeof r?1:r;var o=this.KSwitchSampled.radar[e];n="number"!=typeof o?r:o*r}else n=this.KSwitchSampled?1:0;return n*t}return 1},r.prototype.getWebviewData=function(){if(window.__yodaCommonDataObject__&&window.__yodaCommonDataObject__.pageLoadData){var t=null;try{var e=window.__yodaCommonDataObject__.pageLoadData;t="string"==typeof e?JSON.parse(e):e}catch(t){return}var r=t.created,o=t.pageStart,i=t.userStart;this.webviewData=n({webviewStart:i||o||r},t);var a={key:Oe.EVENT,value:null,dimension:{name:"客户端数据注入成功",event_type:"radar_inject_success"}};this.logCollect(a),this.logCollectNext(a)}},r.prototype.getSampleData=function(){var t=this,e=this.weblog.Utils.yoda;if(e&&(this.sampleData=this.defaultSampleList,window.updateYodaSampleRateWithParams=function(e){t.updateSampleData(e),t.handleSample()}),window.__yodaCommonDataObject__&&window.__yodaCommonDataObject__.sampleData){this.updateSampleData(),this.handleSample();var n={key:Oe.EVENT,value:null,dimension:{name:"客户端采样率注入成功",event_type:"radar_sample_inject_success"}};this.logCollect(n),this.logCollectNext(n)}else e&&e.getWebviewLoadPerf().then((function(e){e.sampleData&&(t.updateSampleData(e.sampleData),t.handleSample())}))},r.prototype.updateSampleData=function(t){var e=this,n=null;try{var r=window.__yodaCommonDataObject__.sampleData||t;n="string"==typeof r?JSON.parse(r):r}catch(t){return}this.sampleData=this.defaultSampleList,n&&Object.keys(n).forEach((function(t){e.sampleData[t]=n[t]}))},r.prototype.register=function(){return o(this,void 0,void 0,(function(){var t,e,n;return i(this,(function(r){switch(r.label){case 0:return Pe()?("undefined"!=typeof window&&window.yodaCollectErrorDataDestroy&&window.yodaCollectErrorDataDestroy(),performance.timing.loadEventStart>0?this.asyncReportTiming():_(window,"load",this.asyncReportTiming),this.options&&this.options.radarCost&&_(window,this.eventName,this.asyncMetricCollectDone),_(window,this.eventName,this.flush),_(window,this.eventName,this.flushNext),this.getSampleData(),this.getWebviewData(),this.radarSessionId=this.nanoId(),this.radarSessionIdNext=this.uuid(),(t=this.weblog.Utils.yoda)?[3,1]:(this.isUsingBridge=!1,this.isSupportedYodaConcat=!1,this.isUsingLegacy=!1,[3,6])):[2];case 1:return null!=this.isUsingBridge?[3,3]:(e=this,[4,t.isSupportBridgeLog()]);case 2:e.isUsingBridge=r.sent(),r.label=3;case 3:return null!=this.isSupportedYodaConcat?[3,5]:(n=this,[4,t.isSupportBridge("sendRadarLog")]);case 4:n.isSupportedYodaConcat=r.sent(),r.label=5;case 5:this.isUsingLegacy=this.isUsingBridge&&!this.isSupportedYodaConcat,r.label=6;case 6:return this.isUsingDetachedReport=this.isInKwai&&!this.isUsingBridge||this.isUsingLegacy,[2]}}))}))},r.prototype.throttle=function(t,e,n,r){if(void 0===r&&(r={}),e.noThrottle||"number"!=typeof t)return t;var o=r.startPoint,i=r.endPoint;if(t>6e4||t<0||isNaN(t)){if(Math.random()<.1){var a="["+n+" 异常]: "+t+"，原始数据为："+e.end+": "+i+" - "+e.start+": "+o,s={key:Oe.EVENT,value:null,dimension:{name:"雷达数据异常",event_type:"radar_error",message:a,src:location.href,webViewType:on(),yoda_version:rn().yoda_version||""}};this.logCollect(s),this.logCollectNext(s)}return null}return Math.round(t)},r.prototype.reportPerformance=function(t){this.plugins.forEach((function(e){t&&e.when(t)&&e.onPerfReport(t)}))},r.prototype.calculate=function(t,e,n){var r=e[t];if(r){if(r.cachedSkip)if(this.calculate("cached",e,n))return;if("function"==typeof r.custom){var o=r.custom(t,n);return this.throttle(o,r,t)}var i=r.end,a=r.start,s=+n[i]||performance.timing[i],c=+n[a]||performance.timing[a],u=s-c;if(!r.notCatchIfUndefined||void 0!==s&&void 0!==c)return this.throttle(u,r,t,{startPoint:c,endPoint:s})}else y("[warn 310]","[Radar] perf key "+t+" is unexpected!")},r.prototype.calculateNext=function(t,e,n){var r=e[t];if(r){if(r.cachedSkip)if(this.calculateNext("cached",e,n))return;if("function"==typeof r.custom)return r.custom(t,n);var o=r.end,i=r.start,a=+n[o]||performance.timing[o],s=+n[i]||performance.timing[i],c=a-s;if(!r.notCatchIfUndefined||void 0!==a&&void 0!==s)return c}},r.prototype.generateLog=function(t,e,n){var r=this;void 0===n&&(n=!0);var o={};return Object.keys(t).forEach((function(i){var a=i,s=n?r.calculate(a,t,e):r.calculateNext(a,t,e);null!=s&&(o[a]=s)})),o},r.prototype.subDimension=function(t){this.customDimension&&(t.dimension||(t.dimension={}),Object.assign(t.dimension,this.customDimension))},r.prototype.nanoId=function(){for(var t=1e9*Math.random()>>>0,e=[],n=0;n<7;n++)e.push("0123456789ABCDEF".charAt(16*Math.random()));return t+e.join("")},r.prototype.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))},r.prototype.beforeFlush=function(){var t=this;if(this.computedSamplingAgain){var e={radarLoadSampling:{sampling:1,type:"load"},radarApiSampling:{sampling:this.options&&this.options.apiSampling||1,type:"api"},radarErrorSampling:{sampling:this.options&&this.options.errorSampling||1,type:"error"},radarResourceSampling:{sampling:this.options&&this.options.resourceSampling||.1,type:"resource"},radarCustomSampling:{sampling:this.options&&this.options.customSampling||1,type:"custom"},radarEventSampling:{sampling:this.options&&this.options.eventSampling||1,type:"event"}};this.realSampledList=[],Object.keys(e).forEach((function(n){var r=t.isKSwitchSampled?t.computedRealSampled(e[n].sampling,e[n].type):e[n],o=t.samplingControl(r);t.finalSampling[e[n].type]=r,o&&t.realSampledList.push(e[n].type)})),this.isKSwitchSampled&&(this.computedSamplingAgain=!1)}this.logQueue=this.logQueue.filter((function(e){return-1!==t.realSampledList.indexOf(e.key)}))},r.prototype.upadteUrlPackage=function(){this.weblog&&(this.computedSamplingAgain=!0,this.currentUrlPackage=this.weblog.currentUrlPackage,this.referUrlPackage=this.weblog.referUrlPackage)},r.prototype.decorateLog=function(t){this.currentUrlPackage||this.upadteUrlPackage(),this.customDimension&&this.subDimension(t),this.currentUrlPackage&&this.currentUrlPackage.page!==this.weblog.currentUrlPackage.page&&(this.flushNext(),this.flush(),this.upadteUrlPackage())},r.prototype.logCollect=function(t){var e=this;if(this.options){this.decorateLog(t);try{window.dispatchEvent(new CustomEvent("get-radar-data",{detail:{kv:t}}))}catch(t){}var n=!0;if("load"===t.key)for(var r=0;r<this.logQueue.length;r++){var o=this.logQueue[r];if("load"===o.key){Object.assign(o,t),n=!1;break}}n&&this.logQueue.push(t),nn("radarLog",JSON.parse(JSON.stringify(t))),this.batchTimer||(this.logQueue.length>this.queueConfig.maxBatchLength?this.flush():this.batchTimer=window.setTimeout((function(){e.flush(),clearTimeout(e.batchTimer),e.batchTimer=0}),this.queueConfig.wait))}},r.prototype.addRadarStatEvent=function(t){var e=this;try{var r=this.weblog.Utils.yoda;if(!r)return!1;var o=function(t){var e,r;if(!t.value)return t;var o=t.value,i=function(t){var e,n=[];return t.forEach((function(t){"load"===t.key?e=t:n.push(t)})),[e,n]}(o.data),a=i[0],s=i[1],c={project_id:o.project_id,app_version_name:o.app_version_name,url_package:o.url_package,h5_extra_attr:t.h5ExtraAttr};return{loadLog:a?{removeStashedLog:[],sendImmediate:null!==(r=null===(e=a.dimension)||void 0===e?void 0:e.sendImmediate)&&void 0!==r&&r,customData:n({data:[a]},c)}:null,commonLog:s.length?{removeStashedLog:[],sendImmediate:!0,customData:n({data:s},c)}:null}}(t),i=o.loadLog,a=o.commonLog;if(i){if(this.lastRadarLogId&&(i.removeStashedLog=[this.lastRadarLogId],i.sendImmediate)){var s={removeStashedLog:[this.lastRadarLogId],sendImmediate:!1,customData:{"":""}};r.sendRadarLog(s).then((function(t){t&&t.logId&&(e.lastRadarLogId=t.logId)}))}r.sendRadarLog(i).then((function(t){t&&t.logId&&(e.lastRadarLogId=t.logId)}))}return a&&r.sendRadarLog(a),!0}catch(t){return!1}},r.prototype.calculateSample=function(t){var e=(null==t?void 0:t.load)||1,n={};return t&&Object.keys(t).forEach((function(r){var o=t[r]/e;n[r]=o>1?1:o})),n},r.prototype.handleSample=function(){var t,e,n,r,o,i,a,s,c=this,u=this.weblog.Utils.yoda;u||this.sampleData||(this.sampleData={load:(null===(t=this.options)||void 0===t?void 0:t.sampling)||1,api:(null===(e=this.options)||void 0===e?void 0:e.apiSampling)||1,resource:(null===(n=this.options)||void 0===n?void 0:n.resourceSampling)||.1,error:(null===(r=this.options)||void 0===r?void 0:r.errorSampling)||1,event:(null===(o=this.options)||void 0===o?void 0:o.eventSampling)||1,custom:(null===(i=this.options)||void 0===i?void 0:i.customSampling)||1}),s=this.calculateSample(this.sampleData),a={radarLoadSampling:{sampling:1,type:"load"},radarApiSampling:{sampling:(null==s?void 0:s.api)||1,type:"api"},radarErrorSampling:{sampling:(null==s?void 0:s.error)||1,type:"error"},radarResourceSampling:{sampling:(null==s?void 0:s.resource)||.1,type:"resource"},radarCustomSampling:{sampling:(null==s?void 0:s.custom)||1,type:"custom"},radarEventSampling:{sampling:(null==s?void 0:s.event)||1,type:"event"}},this.sampleList=[],Object.keys(a).forEach((function(t){var e=a[t];c.samplingControl(e)&&c.sampleList.push(a[t].type)}))},r.prototype.logCollectNext=function(t){var e=this,r=cn(t);if(this.options&&(!this.sampleData||!1!==this.sampleData.isHit)&&this.sampleList.some((function(t){return t===r.key}))){var o=this.getCommonData(),i=o.app_version_name;delete o.app_version_name;var a=new gn((function(t,r){return t.dimension.app_version_name=i,t=n(n(n({},t),o),{event_client_timestamp:Date.now(),event_trigger_source:"H5",radar_session_id:e.radarSessionIdNext})}));if(a.use((function(t,e){return t.key&&"load"===t.key&&(t.dimension=n(n({},t.dimension),{load_device_increase_id:un("LOAD_DEVICE_INCREASE_ID"),load_session_increase_id:pn("LOAD_SESSION_INCREASE_ID")})),t.key&&"load"!==t.key&&(t.dimension=n(n({},t.dimension),{other_device_increase_id:un("OTHER_DEVICE_INCREASE_ID"),other_session_increase_id:pn("OTHER_SESSION_INCREASE_ID")})),e()}),(function(t,n){return t.dimension.sample_rate=e.sampleData&&e.sampleData[t.key]||1,n()})),(r=a.invoke(r))instanceof Error)throw r;this.decorateLog(r);try{window.dispatchEvent(new CustomEvent("get-radar-next-data",{detail:{kv:r}}))}catch(t){}var s=!0;if("load"===r.key)for(var c=0;c<this.logQueueNext.length;c++){var u=this.logQueueNext[c];if("load"===u.key){Object.assign(u,r),s=!1;break}}s&&this.logQueueNext.push(r),nn("radarLogNext",JSON.parse(JSON.stringify(r))),this.batchTimerNext||(this.logQueueNext.length>this.queueConfig.maxBatchLength?this.flushNext():this.batchTimerNext=window.setTimeout((function(){e.flushNext(),clearTimeout(e.batchTimerNext),e.batchTimerNext=0}),this.queueConfig.wait))}},r.prototype.reportByHttp=function(){var t,e=this.getCommonData(),n={project_id:null===(t=this.options)||void 0===t?void 0:t.projectId,radar_session_id:this.radarSessionIdNext,h5_extra_attr:e.h5_extra_attr},r=this.logQueueNext.filter((function(t){return"load"===t.key})),o=this.logQueueNext.filter((function(t){return"load"!==t.key}));Array.isArray(r)&&r.length&&this.collectLog(n,r,"radarSDK"),Array.isArray(o)&&o.length&&this.collectLog(n,o,"radarSDKSupplement")},r.prototype.collectLog=function(t,e,r){this.weblog.collect("RADAR",{name:Ce,params:n(n({},t),{data:a(e)}),serviceName:r})},r.prototype.reportByBridge=function(){var t=this.weblog.Utils.yoda;if(!t)return!1;var e=this.logQueueNext.filter((function(t){return"load"===t.key})),n=this.logQueueNext.filter((function(t){return"load"!==t.key}));if(!e.length&&!n.length)return!0;try{if(e.length){var r=e[0];t.sendSummarizedLog({key:"h5_load",data:r})}return n.length&&t.sendRadarLog({data:n}),!0}catch(t){return!1}},r}(fe),yn=function(t,e){this.radar=t,this.options=e},_n=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="navigation",e.logData={},e.logSended=!1,e.saveWebviewEntry={},e.hasReportBase=!1,e.record={fmp:!1,base:!1,webviewPerf:!1},e.loadTimeout=null,e.gettingWebview=!1,e.REPEAT_TIME=5,e.getWebviewTimes=e.REPEAT_TIME,e.reportOnUnload=function(t){e.logSended||e.radar.isSupportedYodaConcat||(e.logSended=!0,e.reportFirstScreen(Object.assign(e.logData,tn)),e.radar.logCollect(e.data),"noflush"!==t&&(e.radar.flush(),e.radar.weblog.flush()))},e}return e(n,t),Object.defineProperty(n.prototype,"sendImmediate",{get:function(){return this.record.fmp&&this.record.base&&this.record.webviewPerf&&!(!(t=window.navigator.userAgent.match(/tbht\/([\w]+)/i))||"0"===t[1]);var t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"data",{get:function(){return this.sepDimension({key:Oe.LOAD,value:this.logData})},enumerable:!1,configurable:!0}),n.prototype.created=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))},n.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;return["fmp","play_clicked","play_idr","webViewPerf"].indexOf(e)>-1}return!t.entryType||"navigation"===t.entryType},n.prototype.getWebviewLoadData=function(){return o(this,void 0,void 0,(function(){var t,e,n,r,o,a,s;return i(this,(function(i){switch(i.label){case 0:return this.record.webviewPerf?[2,!0]:(t=this.radar.weblog.Utils.yoda,(n=t)?[4,t.getWebviewLoadPerf()]:[3,2]);case 1:n=i.sent(),i.label=2;case 2:return(e=n)&&e.timeData?(this.record.webviewPerf=!0,r=e.timeData,o=r.userStart,a=r.pageStart,s=r.created,this.radar.webviewStart="userStart",this.radar.webviewStartTime=o,o||(a?(e.timeData.userStart=a,this.radar.webviewStart="pageStart",this.radar.webviewStartTime=a):(e.timeData.userStart=s,this.radar.webviewStart="created",this.radar.webviewStartTime=s)),this.onPerfReport({custom:!0,entry:{key:"webViewPerf",value:e.timeData}}),[2,!0]):[2,!1]}}))}))},n.prototype.webviewPatch=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return this.gettingWebview?[2]:(this.gettingWebview=!0,[4,this.repeatWebview()]);case 1:return t.sent(),this.gettingWebview=!1,[2]}}))}))},n.prototype.repeatWebview=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.getWebviewLoadData()];case 1:return!t.sent()&&this.getWebviewTimes>0?(this.getWebviewTimes--,[4,this.repeatWebview()]):[3,3];case 2:t.sent(),t.label=3;case 3:return this.getWebviewTimes=this.REPEAT_TIME,[2]}}))}))},n.prototype.onPerfReport=function(t){return o(this,void 0,void 0,(function(){var e,n,r,o,a,s,c,u,l,p=this;return i(this,(function(i){if(t.custom){if((e=t.entry)&&(n=e.key,r=e.value,o=t.renderTime,"fmp"===n&&(performance.timing.radarFmp=o,this.record.fmp=!0,u=an(performance.timing,Me),Object.assign(this.logData,((l={})[n]=r,l),u),this.webviewPatch(),this.record.webviewPerf&&(s=this.radar.generateLog(De,this.saveWebviewEntry),Object.assign(this.logData,s))),"webViewPerf"===n)){if(!(a=e.value))return[2];this.saveWebviewEntry=a,s=this.radar.generateLog(De,a),Object.assign(this.logData,s)}}else c=this.radar.generateLog(Re,t),u=an(performance.timing,Me),Object.assign(this.logData,c,u),this.record.base=!0;return this.radar.isSupportedYodaConcat?(this.webviewPatch(),this.radar.logCollect(this.data)):this.radar.isUsingDetachedReport&&this.record.webviewPerf&&this.record.fmp&&this.record.base?this.reportOnUnload("noflush"):this.record.fmp&&this.record.base&&!this.hasReportBase?(clearTimeout(this.loadTimeout),this.loadTimeout=null,this.loadReport()):!this.hasReportBase&&this.record.base&&(this.loadTimeout=setTimeout((function(){p.loadReport(),p.hasReportBase=!0}),2e3)),[2]}))}))},n.prototype.destroy=function(){clearTimeout(this.delay)},n.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.protocol;return{key:e,value:r(n,["protocol"]),dimension:{protocol:o,sendImmediate:this.sendImmediate}}},n.prototype.reportFirstScreen=function(t){if(t.play_clicked&&t.play_idr){var e=t.play_idr-t.play_clicked;e>0&&e<6e4&&(this.logData.play_first_screen=e)}},n.prototype.loadReport=function(){Object.assign(this.logData,tn),this.radar.logCollect(cn(this.data)),this.radar.flush(),this.radar.weblog.flush()},n}(yn);!function(t){t.LOAD="load",t.RES="resource",t.API="api",t.ERROR="error",t.SDK_ERROR="sdk_error",t.CUSTOM="custom",t.BATCH="batch",t.EVENT="event"}(fn||(fn={})),function(t){t.SCRIPT="script",t.RES="res",t.API="api",t.VIDEO="video"}(hn||(hn={}));var wn={redirect:{end:"redirectEnd",start:"redirectStart"},dns:{end:"domainLookupEnd",start:"domainLookupStart"},dns_start:{end:"domainLookupEnd",start:"navigationStart"},tcp:{end:"connectEnd",start:"connectStart"},tcp_start:{end:"connectEnd",start:"navigationStart"},redirect_count:{custom:function(t,e){return e.redirectCount}},ssl:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.requestStart-e.secureConnectionStart}},ssl_start:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.secureConnectionStart-e.redirectStart}},ttfb:{end:"responseStart",start:"requestStart"},request_start:{end:"requestStart",start:"navigationStart"},trans:{end:"responseEnd",start:"responseStart"},dom_parse:{end:"domInteractive",start:"responseEnd"},dom_parse_start:{end:"domInteractive",start:"navigationStart"},blank:{end:"domLoading",start:"navigationStart"},fb:{end:"responseStart",start:"navigationStart"},dom_ready:{end:"domContentLoadedEventEnd",start:"navigationStart"},total:{end:"loadEventStart",start:"navigationStart"},resource:{end:"loadEventStart",start:"domInteractive"},fp:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=performance.getEntries().filter((function(t){return"first-paint"===t.name}))[0];return t?Math.ceil(t.startTime+t.duration):null}},js_cost:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=Pe(),e=performance.getEntries(),n=performance.getEntries().filter((function(t){return"navigation"===t.initiatorType}))[0],r=e.filter((function(t){return"script"===t.initiatorType}))[0],o=n?n.domComplete:t.domComplete-t.navigationStart;return r&&o?o-r.fetchStart:null}},tti:{end:"domInteractive",start:"navigationStart"},protocol:{custom:function(t,e){return e.nextHopProtocol}},dom_num:{custom:function(){return"undefined"!=typeof document?document.all.length:null}}},Sn={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)},noThrottle:!0},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.requestStart-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},bn={main_api:{end:"apiEnd",start:"apiStart"},main_api_offset:{end:"apiStart",start:"domLoading"}},En={navigation_start_time:"navigationStart",fetch_start_time:"fetchStart",dns_start_time:"domainLookupStart",dns_end_time:"domainLookupEnd",connect_start_time:"connect_start",ssl_start_time:"secureConnectionStart",request_start_time:"requestStart",response_start_time:"responseStart",response_end_time:"responseEnd",dom_interactive_time:"domInteractive",dom_loading_time:"domLoading",dom_ready_time:"domContentLoadedEventEnd",load_event_time:"loadEventStart",fmp_time:"radarFmp"},kn=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="navigation-radar-plus",e.logData={},e}return e(n,t),Object.defineProperty(n.prototype,"data",{get:function(){return this.sepDimension({key:fn.LOAD,value:this.logData})},enumerable:!1,configurable:!0}),n.prototype.created=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){return this.onPerfReport({custom:!0,entry:{key:"radar_init",value:null}}),[2]}))}))},n.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;return["fmp","customPerf"].indexOf(e)>-1}return!t.entryType||"navigation"===t.entryType},n.prototype.onPerfReport=function(t){return o(this,void 0,void 0,(function(){var e,n,r,o,a,s;return i(this,(function(i){return t.custom?(e=t.entry)&&(n=e.key,r=e.value,o=t.renderTime,"radar_init"===n&&Object.assign(this.logData,{event_name:"radar_init"}),"fmp"===n&&(performance.timing.radarFmp=o,a=this.radar.generateLog(bn,performance.timing,!1),Object.assign(this.logData,((s={})[n]=r,s),{event_name:"fmp"},a)),"customPerf"===n&&Object.assign(this.logData,{event_name:"h5_custom_metric",custom_metric_name:r,custom_metric_timestamp:this.radar.customPerfList[r].time})):Object.assign(this.logData,{event_name:"h5_load"}),this.getCommonLog(t),this.loadReport(),[2]}))}))},n.prototype.destroy=function(){},n.prototype.getCommonLog=function(t){var e=this.radar.generateLog(wn,t,!1),n=an(performance.timing,En);Object.assign(this.logData,e,n)},n.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.protocol,i=n.event_name,a=n.custom_metric,s=n.custom_metric_name;return{key:e,value:r(n,["protocol","event_name","custom_metric","custom_metric_name"]),dimension:{protocol:o,event_name:i,custom_metric:a,custom_metric_name:s}}},n.prototype.loadReport=function(){Object.assign(this.logData,tn),this.collectAndFlush()},n.prototype.collectAndFlush=function(){this.radar.logCollectNext(cn(this.data)),this.radar.flushNext(),this.radar.weblog.flush()},n}(yn),Pn=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="resource",e.onResError=function(t){e.isScriptError(t)||e.radar.logCollect(e.sepDimension({key:Oe.RES,value:{failed:!0,file:t.target.src,res_path:sn(t.path||t.composedPath&&t.composedPath())}}))},e}return e(n,t),n.prototype.created=function(){_(window,"error",this.onResError,!0)},n.prototype.when=function(t){return!Xe(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&"fetch"!==t.initiatorType&&"xmlhttprequest"!==t.initiatorType)},n.prototype.isScriptError=function(t){return t.message||null!=t.lineno},n.prototype.onPerfReport=function(t){var e=this.radar.generateLog(Ie,t);this.radar.logCollect(this.sepDimension({key:Oe.RES,value:e}))},n.prototype.destroy=function(){w(window,"error",this.onResError,!0)},n.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.protocol,i=n.file,a=n.cached,s=n.res_path,c=n.failed,u=n.res_type;return{key:e,value:r(n,["protocol","file","cached","res_path","failed","res_type"]),dimension:{protocol:o,file:i,cached:a,failed:c,res_path:s,res_type:u}}},n}(yn),On=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="resource",e.onResError=function(t){e.isScriptError(t)||e.radar.logCollectNext(e.sepDimension({key:fn.RES,value:{failed:!0,file:t.target.src,res_path:sn(t.path||t.composedPath&&t.composedPath())}}))},e}return e(o,t),o.prototype.created=function(){_(window,"error",this.onResError,!0)},o.prototype.when=function(t){return!Xe(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&"fetch"!==t.initiatorType&&"xmlhttprequest"!==t.initiatorType||"resource"===t.entryType&&("fetch"===t.initiatorType||"xmlhttprequest"===t.initiatorType)&&("js"===Ye(t.name)||"css"===Ye(t.name)))},o.prototype.isScriptError=function(t){return t.message||null!=t.lineno},o.prototype.onPerfReport=function(t){var e=this.radar.generateLog(Sn,t,!1);this.radar.logCollectNext(this.sepDimension({key:fn.RES,value:n(n({},e),{failed:!1})}))},o.prototype.destroy=function(){w(window,"error",this.onResError,!0)},o.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.protocol,i=n.file,a=n.cached,s=n.res_path,c=n.failed,u=n.res_type;return{key:e,value:r(n,["protocol","file","cached","res_path","failed","res_type"]),dimension:{protocol:o,file:i,cached:a,failed:c,res_path:s,res_type:u}}},o}(yn);function Tn(t){return void 0===t&&(t=""),"__radar_"+t+Math.random().toString(36).substring(2,8)}function Ln(t,e){var n=window.XMLHttpRequest;if(!n)return y("HAS NOT XMLHttpRequest!"),!1;window.XMLHttpRequest=function(){var t=new n;t._request=Object.create(null),t._response=Object.create(null);var r=Tn();t._request.id=r;var o=function(){var e,n,r,o;for(e in t._response.status=t.status,t._response.statusText=t.statusText,o=function(t,e){switch(null==e&&(e={}),typeof t){case"object":var n=[];for(var r in t){var o=t[r],i=r.toLowerCase();n.push(i+":\t"+o)}return n.join("\n")+"\n";case"string":for(var a=0,s=(n=t.split("\n")).length;a<s;a++){var c=n[a];if(/([^:]+):\s*(.+)/.test(c)){var u=RegExp.$1,l=null!=u?u.toLowerCase():void 0;o=RegExp.$2,null==e[l]&&(e[l]=o)}}return e}}(t.getAllResponseHeaders()))r=o[e],t._response.headers[e]||(n=e.toLowerCase(),t._response.headers[n]=r)};return t.addEventListener("readystatechange",(function(){switch(t.readyState){case 4:"function"==typeof e&&(o(),function(){if(t.responseType&&"text"!==t.responseType)"document"===t.responseType?(t._response.xml=t.responseXML,t._response.data=t.responseXML):t._response.data=t.response;else{t._response.text=t.responseText,t._response.data=t.responseText;try{t._response.xml=t.responseXML}catch(t){}}"responseURL"in t&&(t._response.finalUrl=t.responseURL)}(),e(t._request,t._response))}})),t},["DONE","HEADERS_RECEIVED","LOADING","OPENED","UNSENT"].forEach((function(t){window.XMLHttpRequest[t]=n[t]})),window.XMLHttpRequest.prototype=n.prototype,window.XMLHttpRequest.prototype._request=Object.create(null),window.XMLHttpRequest.prototype._response=Object.create(null);var r=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(t,e,n,o,i){return this._request={method:t,url:e,async:n,user:o,pass:i},this._response.headers={},r.apply(this,arguments)};var o=window.XMLHttpRequest.prototype.send;return window.XMLHttpRequest.prototype.send=function(){return"function"==typeof t&&t(this._request),o.apply(this,arguments)},function(){n&&(window.XMLHttpRequest=n),r&&(window.XMLHttpRequest.prototype.open=r),o&&(window.XMLHttpRequest.prototype.send=o)}}function Cn(t,e){var n,r=function(t){if("function"!=typeof t.fetch)return null;var e=t.fetch;return t.fetch=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Un.apply(void 0,a([t],e))}}(t.fetch),{register:function(t){return Nn.push(t),function(){var e=Nn.indexOf(t);e>=0&&Nn.splice(e,1)}},clear:function(){Nn=[]},unRegister:function(){e&&(t.fetch=e)}}}("function"==typeof importScripts?self:window);return r&&r.register({request:function(e,r){"function"==typeof t&&((n="string"==typeof e?new Request(e,r):e).id=Tn(),t(n))},response:function(t){"function"==typeof e&&e(n,t)},responseError:function(t){"function"==typeof e&&e(n,{status:0,statusText:t})}}),null==r?void 0:r.unRegister}var Nn=[];function Un(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Nn.reduce((function(t,e){return[e].concat(t)}),[]);r.forEach((function(t){var n=t.request;e=n.apply(void 0,e)||e}));var o=t.apply(void 0,e),i=null;return o.then((function(t){i=t;var e=t.headers.get("content-type");return e&&e.indexOf("application/json")||e&&e.indexOf("text/html")?t.clone().text():(item.responseType="","[object Object]")})).then((function(t){var e=i.clone();return e.data=t,r.forEach((function(t){var n=t.response;n&&(e=n(e)||e)})),i}),(function(t){return r.forEach((function(e){var n=e.responseError;n&&(t=n(t)||t)})),i}))}var Rn=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.queue=[],e.key="api",e.logList=[],e.perfList=[],e.unhookXML=null,e.unhookFetch=null,e.beforeHook=function(t){if(!Xe(t.url,e.radar.ignoreList)&&"js"!==Ye(t.url)&&"css"!==Ye(t.url)){var n={api:e.requestURLCompletion(t.url),method:t.method,request:t,startTime:Date.now()};e.queue.push(n)}},e.afterHook=function(t,o){var i=e.queue.filter((function(e){return e.request===t}))[0];if(i){delete i.request;var a=i.startTime,s=r(i,["startTime"]),c=Date.now(),u=c-a,l=o.status;"function"==typeof e.options.customizeRadarStatus&&(l=e.options.customizeRadarStatus(o));var p=e.customHook({request:t,response:o,duration:u}),d=xn(o.headers),f=n(n({duration:u,total:u,status:l,size:+d,custom_failed:!(l>=200&&l<300)},s),p);"string"==typeof o.text&&(f.responseData=o.text);var h=n(n({},o),{status:l});if(e.isResponseError(h))e.radar.logCollect(e.sepDimension({key:Oe.API,value:f})),e.radar.logCollectNext(e.sepDimension({key:Oe.API,value:f}));else{if(!e.radar.hasFmp){var g=performance.timing.apiStart;performance.timing.apiStart=g?Math.min(g,a):a;var m=performance.timing.apiEnd;performance.timing.apiEnd=m?Math.max(m,c):c}!e.mergeAPIPerf(null,f)&&e.logList.push(f)}e.queue=e.queue.filter((function(e){return e.request&&e.request!==t}))}},e}return e(o,t),o.prototype.when=function(t){return!Xe(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&("fetch"===t.initiatorType||"xmlhttprequest"===t.initiatorType)&&"js"!==Ye(t.name)&&"css"!==Ye(t.name))},o.prototype.onPerfReport=function(t){var e=this.radar.generateLog(xe,t,!1);!this.mergeAPIPerf(n(n({},e),{api:e.file}))&&this.perfList.push(n(n({},e),{api:e.file}))},o.prototype.mergeAPIPerf=function(t,e){var n=t||e,r=t?this.logList:this.perfList;if(!n)return!1;for(var o=-1,i=0,a=r.length;i<a;i++){var s=r[i],c=(n.api||"").replace(/\?.+$/,""),u=(s.api||"").replace(/\?.+$/,""),l=n.size;c===u&&(Object.assign(n,s),delete n.file,l&&(n.size=l),!n.size&&n.responseData&&(n.size=k(n.responseData)),delete n.responseData,o=i)}return-1!==o&&(r.splice(o,1),this.radar.logCollect(this.sepDimension({key:Oe.API,value:n})),this.radar.logCollectNext(this.sepDimension({key:Oe.API,value:n})),!0)},o.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.res_type,i=n.protocol,a=n.cached,s=n.custom_failed,c=n.status,u=n.api,l=n.method,p=n.response_code,d=n.response_msg;return{key:e,value:r(n,["res_type","protocol","cached","custom_failed","status","api","method","response_code","response_msg"]),dimension:{res_type:o,protocol:i,api:u,custom_failed:s,status:c,cached:a,method:l,response_code:p,response_msg:d}}},o.prototype.requestURLCompletion=function(t){var e=document.location,n=e.protocol,r=e.host;return 0===t.indexOf("//")?n+t:0===t.indexOf("/")?n+"//"+r+t:t},o.prototype.isResponseError=function(t){return 0===t.status},o.prototype.created=function(){this.unhookXML=Ln(this.beforeHook,this.afterHook),this.unhookFetch=Cn(this.beforeHook,this.afterHook)},o.prototype.destroy=function(){this.unhookXML&&this.unhookXML(),this.unhookFetch&&this.unhookFetch()},o.prototype.customHook=function(t){var e={};if("function"!=typeof this.options.APIHook)return e;var n={};try{n=this.options.APIHook(t)}catch(t){return{}}if(!n)return e;var r=n.response_msg,o=n.response_code,i=n.status,a=n.custom_failed;try{e.response_msg=JSON.stringify(r).slice(0,100)}catch(t){e.response_msg="radar error: 传入的response_msg有错误"}return e.response_code=Number(o),void 0!==i&&(e.status=i),void 0!==a&&(e.custom_failed=a),e},o}(yn);function xn(t){return t?"function"==typeof t.get?+t.get("Content-Length")||0:+t["content-length"]||0:0}var In=[];function An(t,e){Mn(e)>=0||(In.push(e),setTimeout((function(){In.splice(Mn(e),1)}),2e3),Dn(t,e))}function Dn(t,e){var n=function(t){var e=Oe.ERROR,n=t.error_cons_type,o=t.file,i=t.error_type,a=t.msg,s=t.col,c=t.line,u=t.stack,l=r(t,["error_cons_type","file","error_type","msg","col","line","stack"]);return{key:e,value:l,dimension:{error_cons_type:n,file:o,error_type:i,msg:a,col:s,line:c,stack:u}}}(e);t.logCollect(n)}function Mn(t){for(var e=0;e<In.length;e++)if(n=In[e],r=t,n.msg===r.msg&&n.stack===r.stack&&n.file===r.file&&n.line===r.line&&n.col===r.col)return e;var n,r;return-1}function jn(t){return t.message||null!=t.lineno}function Kn(t,e,n){var r,o,i,a;if((a=e)&&(a instanceof Error||"object"==typeof a&&"string"==typeof a.message))r=e.name||"ErrorLikeObject",o=e.message||"",i=e.stack||void 0;else if(function(t,e){return null==t&&"Script error."===(null==e?void 0:e.message)}(e,n))r="CrossOriginError",o="* cross origin "+t+" with message: "+((null==n?void 0:n.message)||"<UNKNOWN>")+"\n -- by WebLogger Radar Plugin";else{r=null==e?""+e:typeof e,o="* "+t+" with value: "+function(t){var e;try{e=t.toString()}catch(t){}"string"!=typeof e||""===e?e=null===t?"<NULL>":void 0===t?"<UNDEFINED>":""===e?"<EMPTY>":"<UNKNOWN>":e.length>2e3&&(e=e.substring(0,2e3)+"<<< ……");return e}(e)+"\n  -- by WebLogger Radar Plugin"}return{error_type:Le.SCRIPT,error_cons_type:r,msg:o,stack:i}}var Wn=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="error",e.onError=function(t){if(jn(t)){var r=n(n({},Kn("global error",t.error,t)),{file:t.filename,line:t.lineno,col:t.colno});An(e.radar,r)}},e.onPromiseError=function(t){var n=Kn("promise error",t.reason);An(e.radar,n)},e}return e(r,t),r.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;if(["play_block","play_error"].indexOf(e)>-1)return!0}return!1},r.prototype.onPerfReport=function(t){if(t.custom){var e=t.entry||{},n=e.key,r=e.value;Dn(this.radar,{error_type:Le.VIDEO,error_cons_type:n,msg:r})}},r.prototype.created=function(){_(window,"error",this.onError,!0),_(window,"unhandledrejection",this.onPromiseError)},r.prototype.destroy=function(){w(window,"error",this.onError,!0),w(window,"unhandledrejection",this.onPromiseError)},r}(yn),Vn=[];function Bn(t,e){Fn(e)>=0||(Vn.push(e),setTimeout((function(){Vn.splice(Fn(e),1)}),2e3),Gn(t,e))}function Gn(t,e){var n=function(t){var e=fn.ERROR,n=t.error_cons_type,o=t.file,i=t.error_type,a=t.msg,s=t.col,c=t.line,u=t.stack,l=r(t,["error_cons_type","file","error_type","msg","col","line","stack"]);return{key:e,value:l,dimension:{error_cons_type:n,file:o,error_type:i,msg:a,col:s,line:c,stack:u}}}(e);t.logCollectNext(n)}function Fn(t){for(var e=0;e<Vn.length;e++)if(n=Vn[e],r=t,n.msg===r.msg&&n.stack===r.stack&&n.file===r.file&&n.line===r.line&&n.col===r.col)return e;var n,r;return-1}function Hn(t){return t.message||null!=t.lineno}function qn(t,e,n){var r,o,i,a;if((a=e)&&(a instanceof Error||"object"==typeof a&&"string"==typeof a.message))r=e.name||"ErrorLikeObject",o=e.message||"",i=e.stack||void 0;else if(function(t,e){return null==t&&"Script error."===(null==e?void 0:e.message)}(e,n))r="CrossOriginError",o=t+" - message: "+((null==n?void 0:n.message)||"<UNKNOWN>");else{r=null==e?""+e:typeof e,o=t+" - value: "+function(t){var e;try{e=t.toString()}catch(t){}"string"!=typeof e||""===e?e=null===t?"<NULL>":void 0===t?"<UNDEFINED>":""===e?"<EMPTY>":"<UNKNOWN>":e.length>2e3&&(e=e.substring(0,2e3)+"<<< ……");return e}(e)}return{error_type:hn.SCRIPT,error_cons_type:r,msg:o,stack:i}}var Jn,zn,Qn,Yn=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="error",e.onError=function(t){if(Hn(t)){var r=n(n({},qn("Global Uncaught Exception",t.error,t)),{file:t.filename,line:t.lineno,col:t.colno});Bn(e.radar,r)}},e.onPromiseError=function(t){var n=qn("Unhandled Promise Rejection",t.reason);Bn(e.radar,n)},e}return e(r,t),r.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;if(["play_block","play_error"].indexOf(e)>-1)return!0}return!1},r.prototype.onPerfReport=function(t){if(t.custom){var e=t.entry||{},n=e.key,r=e.value;Gn(this.radar,{error_type:hn.VIDEO,error_cons_type:n,msg:r})}},r.prototype.created=function(){_(window,"error",this.onError,!0),_(window,"unhandledrejection",this.onPromiseError)},r.prototype.destroy=function(){w(window,"error",this.onError,!0),w(window,"unhandledrejection",this.onPromiseError)},r}(yn),Xn=["play_block","play_error"],$n=["c_dimension1","c_dimension2","c_dimension3"],Zn=["main_data_receive_end"],tr=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.radarIgnoreList=["https://web-trace.ksapisrv.com/ktrace/collect"],r.radarFmp=0,r.customReported=[],r.customKeyList=[],r.timelineLastTime=null,r.action={start:function(t){dn(t),r.event({name:t.name,extra_info:t.extra_info||"",event_type:"radar_action_start"})},end:function(t){dn(t),r.event({name:t.name,extra_info:t.extra_info||"",result_type:t.result_type||"",event_type:"radar_action_end"})}},r.validOption()?(r.use(_n,r),r.use(kn,r),r.options&&r.options.unuseResourcePlugin||(r.use(Pn,r),r.use(On,r)),r.options&&r.options.unuseAPIPlugin||r.use(Rn,r),r.options&&r.options.unuseErrorPlugin||(r.use(Wn,r),r.use(Yn,r)),r):r}return e(n,t),n.samplingControl=function(t){if(!t)return!1;var e=Math.random();return"number"==typeof t?e<t:e<t.sampling},n.prototype.collect=function(t,e){if(0!==t.indexOf("c_")&&Zn.indexOf(t)<0)y("[error 305]","[Radar] 传入的自定义指标 "+t+" 必须为 c_ 开头");else if(Zn.indexOf(t)>-1)this.handleCollectKey(t);else{v("[radar]:Radar+之后将不再支持collect方法，请用event方法替代。");var n={key:Oe.CUSTOM,value:{metric_value:e},dimension:{metric_name:t}};this.logCollect(n),this.logCollectNext({key:Oe.EVENT,value:{duration:e},dimension:{name:t}})}},n.prototype.handleCollectKey=function(t){switch(t){case"main_data_receive_end":var e=Date.now();try{performance.timing&&(performance.timing[t]=e)}catch(t){}nn(t,e)}},n.prototype.reportTimePoint=function(t,e){if(this.customReported.indexOf(t)>-1)return null;-1===Xn.indexOf(t)&&this.customReported.push(t);var n=e;if("string"!=typeof e){var r=function(t){var e="undefined"!=typeof window?window.performance:null;if(!e)return{value:null};if(null!=t)return{value:t-e.timing.navigationStart,detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"customTime",endPoint:t}};if("function"==typeof e.now)return{value:e.now(),detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"perfNowAPI",endPoint:e.now()}};var n=Date.now();return{value:n-e.timing.navigationStart,detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"dateNow",endPoint:n}}}(e);if(null==r.value)return;n=this.throttle(r.value,r.detail,"fmp",r.detail)}return null!=n?(this.reportPerformance({custom:!0,entry:{key:t,value:n},renderTime:e}),n):void 0},n.prototype.fmp=function(t){this.radarFmp=t||Date.now();var e=this.reportTimePoint("fmp",this.radarFmp);if(e){this.hasFmp=!0;try{performance.timing&&(performance.timing.fmp=e,performance.timing.radarFmp=this.radarFmp)}catch(t){}nn("fmp",e);var n={key:Oe.CUSTOM,value:{fmp:e,fmp_time:this.radarFmp,merge:!0}};this.logCollect(n),this.logCollectNext({key:Oe.EVENT,value:{duration:e},dimension:{name:"fmp"}})}},n.prototype.event=function(t,e){if(t&&t.name)if("string"==typeof t.name){t.name.length>127&&(y("[radar]:事件名称长度不能超过127字符，超过会截取后上报，请限制"),t.name=t.name.slice(0,127));var n=rn();t.extra_info&&t.extra_info instanceof Object&&(t.extra_info=JSON.stringify(t.extra_info)),void 0===t.yoda_version&&(t.yoda_version=n.Yoda||""),void 0===t.webview_type&&(t.webview_type=on());var r={key:Oe.EVENT,value:e,dimension:t};this.logCollect(r),this.logCollectNext(r)}else y("[radar]:name字段需要为String类型");else y("[radar]:事件名称为必填字段，用于监控展示、报警配置，请填写")},n.prototype.customStage=function(t,e){if(!(this.customKeyList.length>2)){if(e=e||{sendTimeline:!0},this.customKeyList.indexOf(t)>-1)return null;this.customKeyList.push(t);var n=Date.now();"production"!==this.weblog.logConfig.env&&(this.timelineLastTime?this.timelineLastTime:this.timelineLastTime=n),this.customPerfList[t]={options:e,time:n},this.reportPerformance({custom:!0,entry:{key:"customPerf",value:t},renderTime:n})}},n.prototype.headlessTestReport=function(){-1===window.navigator.userAgent.indexOf("headless")||this.asyncReportTiming()},n.prototype.playClicked=function(t){this.reportTimePoint("play_clicked",t)},n.prototype.playIDR=function(t){this.reportTimePoint("play_idr",t)},n.prototype.playBlock=function(t){this.reportTimePoint("play_block",t)},n.prototype.playError=function(t){this.reportTimePoint("play_error",t)},n.prototype.setDimensions=function(t){var e=this,n=Object.keys(t);n.some((function(t){return-1===$n.indexOf(t)}))&&y("[error 306]","[Radar] 传入的自定义维度只能为 "+$n.join("、")+"，目前传入的是："+n.join("、")),n.forEach((function(n){var r=n;null==t[r]?delete e.customDimension[r]:e.customDimension[r]=t[r]}))},n.prototype.validOption=function(){var t=this;if(!this.options)return!1;var e=this.options,n=e.sampling;return"string"!=typeof e.projectId?(y("[error 303]","[Radar] 必须配置 projectId 属性，类型为 string!"),!1):n>1||n<0?(y("[error 304]","[Radar] 采样率 sampling 必须为 0~1 之间的数字"),!1):(["apiSampling","errorSampling","resourceSampling","customSampling","eventSampling"].forEach((function(e){var n=t.options[e];"number"==typeof n&&0===n&&y("[error 304]","[Radar] 采样率 "+e+" 不能被设置为 0，将改用默认值")})),!0)},n.prototype.captureException=function(t){An(this,Kn("capture exception",t)),Bn(this,qn("Captured Exception",t))},n.__test__={MORE_REPORTED:Xn,CUSTOM_DIM_KEY:$n,CUSTOM_COLLECT_KEY:Zn},n.key="radar",n}(vn),er=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.action={start:function(){},end:function(){}},e}return e(n,t),n.prototype.fmp=function(){},n.prototype.event=function(){},n.prototype.headlessTestReport=function(){},n.prototype.customStage=function(){},n.prototype.playClicked=function(){},n.prototype.playIDR=function(){},n.prototype.playBlock=function(){},n.prototype.playError=function(){},n.prototype.setDimensions=function(){},n.prototype.destroy=function(){},n.prototype.captureException=function(){},n.key="radar",n}(fe),nr=!1,rr="hashchange",or=function(t){function n(e,n){var r=t.call(this)||this;return r.beginTime=(new Date).valueOf(),r.visibilityChange=function(){var t=document.visibilityState;"visible"===t&&(nr=!1),r.weblog&&!nr&&r.autoPVFilter(location.href,null,t)&&("hidden"!==t&&"visible"!==t||("visible"===t&&(r.beginTime=(new Date).valueOf()),r.weblog.sendImmediately("PV",{type:t,auto:!0,beginTime:r.beginTime})))},r.proxyPushState=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.urlChange(),Jn.apply(history,t)},r.proxyReplaceState=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.urlChange(),zn.apply(history,t)},r.urlChange=function(){r.weblog&&setTimeout((function(){var t=O({url:location.href},r.weblog.logConfig.urlMap),e=t.page,n=t.params,o=t.pageId;e&&e===r.weblog.currentUrlPackage.page?r.weblog.currentUrlPackage.update(e,n,o):(r.autoPVFilter(location.href,r.weblog.currentUrlPackage.page,"leave")&&r.weblog.sendImmediately("PV",{type:"leave",auto:!0,beginTime:r.beginTime,urlPage:r.weblog.currentUrlPackage.toJSON()}),r.autoPVFilter(location.href,r.weblog.currentUrlPackage.page,"enter")&&(r.weblog.updateReferUrlPackage(r.weblog.currentUrlPackage),r.weblog.updateCurrentUrlPackage(location.href),r.weblog.currentUrlPackage.page.indexOf("http"),r.beginTime=(new Date).valueOf(),r.weblog.sendImmediately("PV",{type:"enter",auto:!0})))}),0)},r.beforeUnload=function(){nr=!0,r.weblog&&r.autoPVFilter(location.href,null,"leave")&&r.weblog.sendImmediately("PV",{type:"leave",auto:!0,beginTime:r.beginTime})},r.autoPVFilter=function(){return!0},e&&("function"==typeof e?r.autoPVFilter=e:"collect"in e&&"function"==typeof e.collect?((null==n?void 0:n.autoPVFilter)&&(r.autoPVFilter=n.autoPVFilter),r.apply(e)):"autoPVFilter"in e&&"function"==typeof e.autoPVFilter&&(r.autoPVFilter=e.autoPVFilter)),n&&"function"==typeof n.autoPVFilter&&(r.autoPVFilter=n.autoPVFilter),r}return e(n,t),n.prototype.apply=function(t){if(t&&t.sendImmediately){this.weblog=t,this.autoPVFilter(location.href,null,"enter")&&this.weblog.sendImmediately("PV",{type:"enter",auto:!0}),Jn=history.pushState,zn=history.replaceState,history.pushState=this.proxyPushState,history.replaceState=this.proxyReplaceState;var e=t.Utils.ua.supportsPushState;rr=e()?"popstate":"hashchange",_(window,rr,this.urlChange),_(document,"visibilitychange",this.visibilityChange)}},n.prototype.destroy=function(){w(window,rr,this.urlChange),w(document,"visibilitychange",this.visibilityChange),Jn&&(history.pushState=Jn),zn&&(history.replaceState=zn)},n.key="autoPV",n}(fe),ir=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.initBuildInPlugins(),r}return e(n,t),n.prototype.initBuildInPlugins=function(){var t=this.logConfig,e=t.autoPV,n=t.radar,r=t.fps,o=t.timing,i=t.crash,a=t.autoPVFilter;r&&this.plug(_e),o&&this.plug(Ee),i&&this.plug(ge),(e||void 0===e)&&this.plug(or,{autoPVFilter:a}),n&&(n.sampling=n.sampling||1,tr.samplingControl(n)?this.plug(tr,n):this.plug(er))},n}(de);Qn=ir,void 0!==window._GLOBAL_KS_WEBLOGGER_?window._GLOBAL_KS_WEBLOGGER_.Factory=Qn:window.Weblog=Qn,(null==U?void 0:U.constructors)&&Qn&&-1===U.constructors.indexOf(Qn)&&(Qn._classId=U.constructors.length,U.constructors.push(Qn)),function(){if(null==U?void 0:U.silence)try{U._silenced=!!sessionStorage.getItem("WEBLOGGER_SILENCED")}catch(t){}}(),exports.BasePlugin=fe,exports.Weblog=ir,exports.default=ir;
//# sourceMappingURL=log.bridge.common.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ks/weblogger/dist/log.common.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ks/weblogger/dist/log.common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:!0});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};function e(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var n=function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function o(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function a(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var s,c,u,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(){void 0===l.window&&(l.window={addEventListener:function(){},removeEventListener:function(){},setTimeout:function(){},setInterval:function(){},_WEBLOGGER_MOCKED_WINDOW_:!0,global:l}),void 0===l.document&&(l.document=l.window.document||{cookie:"",addEventListener:function(){},removeEventListener:function(){},querySelector:function(){},querySelectorAll:function(){}},void 0===l.window.document&&(l.window.document=l.document)),void 0===l.navigator&&(l.navigator=l.window.navigator||{userAgent:""},void 0===l.window.navigator&&(l.window.navigator=l.navigator)),void 0===l.screen&&(l.screen=l.window.screen||{},void 0===l.window.screen&&(l.window.screen=l.screen)),void 0===l.history&&(l.history=l.window.history||{},void 0===l.window.history&&(l.window.history=l.history)),void 0===l.location&&(l.location=l.window.location||{hostname:"",search:"",href:"",origin:""},void 0===l.window.location&&(l.window.location=l.location));try{void 0===l.localStorage&&(l.localStorage=l.window.localStorage||{getItem:function(){},setItem:function(){}},void 0===l.window.localStorage&&(l.window.localStorage=l.localStorage))}catch(t){}}(),Object.defineProperty||(Object.defineProperty=function(t,e,n){t[e]="[object Object]"===Object.prototype.toString.call(n)&&n.hasOwnProperty("value")?n.value:n}),Object.assign||Object.defineProperty(Object,"assign",{value:function(t){if(null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},writable:!0,configurable:!0}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){var o=this instanceof r?this:t;return n.apply(o,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),o.prototype=new r,o}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var n;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),o=r.length>>>0;if(0===o)return-1;var i=+e||0;if(Math.abs(i)===1/0&&(i=0),i>=o)return-1;for(n=Math.max(i>=0?i:o-Math.abs(i),0);n<o;){if(n in r&&r[n]===t)return n;n++}return-1}),Object.keys||(Object.keys=(s=Object.prototype.hasOwnProperty,c=!{toString:null}.propertyIsEnumerable("toString"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on non-object");var e=[];for(var n in t)s.call(t,n)&&e.push(n);if(c)for(var r=0,o=u;r<o.length;r++){var i=o[r];s.call(t,i)&&e.push(i)}return e})),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,r;if(null==this)throw new TypeError(" this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(n=e),r=0;r<i;){var a=void 0;r in o&&(a=o[r],t.call(n,a,r,o)),r++}});var p,d,f={sessionId:"",appDevicePackageReady:!1,identityPackageReady:!1},h={unknown:0,none:1,wifi:2,"4g":3,"3g":4,"2g":5,"5g":7,"slow-2g":5};!function(t){t.CLICK="CLICK",t.DOUBLE_CLICK="DOUBLE_CLICK",t.TRIPLE_CLICK="TRIPLE_CLICK",t.LONG_PRESS="LONG_PRESS",t.PULL="PULL",t.DRAG="DRAG",t.SCALE="SCALE",t.PULL_DOWN="PULL_DOWN",t.PULL_UP="PULL_UP"}(p||(p={})),function(t){t.PV="PV",t.SHOW="SHOW",t.VIDEO="VIDEO",t.CUSTOM="CUSTOM",t.RADAR="RADAR"}(d||(d={}));var g=function(){function t(t,e){switch(this.page="",this.identity="",e){case"web":this.page_type=2;break;case"native":this.page_type=1;break;case"mina":this.page_type=3;break;default:this.page_type=0}this.update(t.page,t.params)}return t.prototype.update=function(t,e){void 0===t&&(t=""),t&&t!==this.page&&(this.page=t,this.identity=this.generatePageId(t)),e&&(this.params=Object.assign(this.params||{},e))},t.prototype.toJSON=function(){return{page:this.page,identity:this.identity,page_type:this.page_type,params:JSON.stringify(this.params)}},t.prototype.generatePageId=function(t){return t+(new Date).getTime()},t}(),m=["Kwai","Kwai_Lite","Kwai_Pro","livemate","ksthanos","ksNebula","ksnebula","kwaiying","pearl","kinder","m2u","LOLita","XFunCore","ACVideoCore","ZIKZAK"].concat(["UVideo","Vstatus","Kwaigo","MvMaster"]);function v(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return null===console||void 0===console?void 0:(t=console.warn).call.apply(t,a([null],e))}function y(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return null===console||void 0===console?void 0:(t=console.error).call.apply(t,a([null],e))}function _(t,e,n,r){return"attachEvent"in t?t.attachEvent("on"+e,n):t.addEventListener(e,n,r)}function w(t,e,n,r){return"attachEvent"in t?t.detachEvent("on"+e,n):t.removeEventListener(e,n,r)}function S(t,e,n){if(void 0===n&&(n=" "),(e-=t.length)<=0)return t;for(var r="";e;)1&e&&(r+=n),e>>=1,n+=n;return r+t}var b=function(){var t=null;return function(){try{if(null===t)for(var e=window.navigator.userAgent.toLowerCase(),n=0;n<m.length;n++)if(e.indexOf(m[n].toLowerCase())>-1)return t=!0}catch(t){return!1}}}();function E(t){for(var e={},n=0,r=t.split("&");n<r.length;n++){var o=r[n].split("="),i=o[0],a=o[1];i in e?e[i]instanceof Array?e[i].push(a):e[i]=[e[i],a]:e[i]=a}return e}function k(t){var e="";if("string"==typeof t)e=t;else try{e=JSON.stringify(t)}catch(n){e=String(t)}for(var n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);n+=o<128?1:o<2048?2:o<65536?3:o<1<<21?4:o<1<<26?5:o<1<<31?6:Number.NaN}return n}function P(t){void 0===t&&(t=location.href);var e=t.lastIndexOf("?");return-1===e?{page:t}:{page:t.slice(0,e),params:E(t.slice(e+1))}}var O=function(t,e){var n=t.url,r=t.page,o=t.params,i=t.pageId;if(!r&&"string"==typeof n){var a=P(n);r=a.page,o=a.params}if("function"==typeof e)try{var s=e({url:n,page:r,params:o});"string"==typeof s?r=s:"object"==typeof s&&(s.page&&(r=s.page),s.params&&(o=s.params),s.pageId&&(i=s.pageId))}catch(t){}else if("object"==typeof e){var c="";for(var u in e)if((n||r||"").indexOf(u)>-1){c=e[u];break}c&&(r=c)}return{page:r,params:o,pageId:i}},T=function(t){return t&&"object"==typeof t&&!Array.isArray(t)};var L,C=(L="",function(){if(L)return L;try{var t=window.devicePixelRatio||1,e=Math.floor(screen.width*t),n=Math.floor(screen.height*t);return L=e+"x"+n}catch(t){return""}});var N,U=function(){return!(!((null===window||void 0===window?void 0:window.Worker)&&(null===window||void 0===window?void 0:window.Uint8Array)&&window.URL)||function(){var t,e,n=(null===(t=null===window||void 0===window?void 0:window.navigator)||void 0===t?void 0:t.userAgent)||"",r=/mobile|tablet|ip(ad|hone|od)|android|(windows phone)/i.test(n),o="MacIntel"===(null===window||void 0===window?void 0:window.navigator.platform)&&(null===(e=null===window||void 0===window?void 0:window.navigator)||void 0===e?void 0:e.maxTouchPoints)>1;return r||o}())},R=function(){function t(){this.events={}}return t.prototype.on=function(t,e){e&&"function"==typeof e&&(this.events[t]=this.events[t]||[],this.events[t].push(e))},t.prototype.off=function(t,e){this.events[t]&&(e&&"function"==typeof e&&function(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}(this.events[t],e),e||(this.events[t]=[]))},t.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this.events[t]&&this.events[t].forEach((function(t){t.apply(void 0,e)}))},t}();"undefined"!=typeof window&&("object"!=typeof window._WEBLOGGER&&(window._WEBLOGGER={_silenced:!1,constructors:[],instances:[],silence:function(t){try{t?sessionStorage.setItem("WEBLOGGER_SILENCED","1"):sessionStorage.removeItem("WEBLOGGER_SILENCED"),window._WEBLOGGER.instances.forEach((function(e){null==e||e.silence(t)}))}catch(t){}}}),N=window._WEBLOGGER);var x=0,I=function(t){function r(e,o){var i,a=t.call(this)||this;return a.version="3.9.30",a.plugins={},a.flush=function(){a.logger.flush()},a.baseOption=n({},o),a.logConfig=(i=e,n({env:"production",proto:"v3",timeout:3e4,wait:1e3,maxBatchLength:50,sampleRate:1,yoda:"undefined"!=typeof window&&window.yoda,forbidV2HttpUrlPage:!0},i||{})),a.initUrlPackage(),r.__instance||(r.__instance=a),function(t){(null==N?void 0:N.instances)&&t&&-1===N.instances.indexOf(t)&&(N.instances.push(t),N._silenced&&(null==t||t.silence(!0)))}(a),a}return e(r,t),Object.defineProperty(r.prototype,"sessionId",{get:function(){return f.sessionId},enumerable:!1,configurable:!0}),r.prototype.initUrlPackage=function(){this.updateCurrentUrlPackage()},r.prototype.updateCurrentUrlPackage=function(t,e){if(void 0===t&&(t={}),void 0===e&&(e="web"),"object"==typeof t&&t.page&&this.currentUrlPackage&&t.page===this.currentUrlPackage.page)return this.currentUrlPackage.update(t.page,t.params);this.currentUrlPackage=new g(t,e)},r.prototype.updateReferUrlPackage=function(t,e){void 0===t&&(t=this.currentUrlPackage),void 0===e&&(e="web"),this.referUrlPackage=t instanceof g?t:new g(t,e)},r.prototype.updateBase=function(t){this.updateCommonPackage(t)},r.prototype.updateCommonPackage=function(t){"object"==typeof t&&this.commonPackage.update(t)},r.prototype.addPlugins=function(){var t=this;this.logConfig.plugins&&this.logConfig.plugins.length&&this.logConfig.plugins.forEach((function(e){"object"==typeof e&&"function"==typeof e.apply&&t.addPluginInstance(e)}))},r.prototype.addPluginInstance=function(t){if(t){var e=t.key||t.constructor&&t.constructor.key||"plugin_auto_key_"+x++;"function"!=typeof t.apply||t.weblog&&t.weblog===this||t.apply(this),this.plugins[e]=t}},r.prototype.plug=function(t,e){if(this.plugins[t.key])return y("[code 301]",t.key+" 插件重复加载！");this.addPluginInstance(new t(this,e))},r.prototype.unplug=function(t){var e=this.plugins[t];e&&(e.destroy(),delete this.plugins[t])},r.prototype.unplugAll=function(){for(var t in this.plugins)this.plugins[t]&&this.unplug(t)},r.prototype.generateLog=function(t,e){return{}},r.prototype.send=function(t,e,n){void 0===t&&(t=p.CLICK);var r=this.generateLog(t.toUpperCase(),e),o="object"==typeof e&&e.callback||void 0;return"function"==typeof this.beforeSend&&this.beforeSend(t,e,r),this.logger.send(r,!!n,o)},r.prototype.collect=function(t,e){this.send(t,e)},r.prototype.sendImmediately=function(t,e){this.send(t,e,!0)},r.prototype.sendPackage=function(t,e){this.logger.sendPackage(t,e)},r.prototype.destroy=function(){this.unplugAll(),function(t){if(null==N?void 0:N.instances){var e=N.instances.indexOf(t);-1!==e&&N.instances.splice(e,1)}}(this)},r}(R);function A(t,e,n){var r={};if(t.length>0)for(var o=e?decodeURIComponent:function(t){return t},i=t.split(/;\s/g),a=null,s=null,c=null,u=0,l=i.length;u<l;u++){if(null!==(c=i[u].match(/([^=]+)=/i)))try{a=decodeURIComponent(c[1]),s=o(i[u].substring(c[1].length+1))}catch(t){}else a=decodeURIComponent(i[u]),s="";null!==a&&(r[a]=s)}return r}var D,M={};function j(t,e,n){void 0===e&&(e={}),void 0===n&&(n=!1);try{if(!n&&t in M)return M[t];if(!(null===window||void 0===window?void 0:window.document))return;var r=document.cookie||"";return r===D?M[t]:(D=r,(M=A(r,!e.raw))[t])}catch(t){}}function K(t,e,n){void 0===n&&(n={});try{document.cookie=function(t,e,n,r){void 0===r&&(r={});var o=encodeURIComponent(t)+"="+(n?encodeURIComponent(e):e),i=r.expires,a=r.path||"/",s=r.domain||"";return i instanceof Date&&(o+="; expires="+i.toUTCString()),"number"==typeof i&&(o+="; max-age=="+i),""!==a&&(o+="; path="+a),""!==s&&(o+="; domain="+s),!0===r.secure&&(o+="; secure"),o}(t,e,!n.raw,n),M[t]=e}catch(t){}}var W={getCookie:j,setCookie:K,parseCookieString:A};function V(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}function G(t){if(void 0===t&&(t="undefined"!=typeof location?location.hostname:""),!t)return"";var e=t.split("."),n=e.length;return n<=2?"":"."+e[n-2]+"."+e[n-1]}var F="";function B(){if(F)return F;try{if(!(F=j("did")||j("_did"))){F="web_"+function(){for(var t=1e9*Math.random()>>>0,e=[],n=0;n<7;n++)e.push("0123456789ABCDEF".charAt(16*Math.random()));return t+e.join("")}();var t=new Date;t.setFullYear(t.getFullYear()+1),K("_did",F,{expires:t,domain:G(),path:"/"})}return F}catch(t){return""}}var H,q,J,Q=function(t){function r(e,n,r){var o=t.call(this,{},n)||this;if("string"==typeof e){var i=P(e);o.page=i.page,o.params=i.params}else o.page=(e||{}).page||"",o.params=(e||{}).params||void 0;return o.identity=o.generatePageId(),r&&"string"==typeof e&&o.init(e,r),o}return e(r,t),r.prototype.init=function(t,e){void 0===e&&(e={});var n=O({url:t,page:this.page,params:this.params},e),r=n.page,o=n.params;this.update(r,o)},r.prototype.attachUrl=function(){this.params||(this.params={}),this.params.origin_url=this.params.origin_url||(null===location||void 0===location?void 0:location.href)},r.prototype.getRealUrlPackage=function(){var t=P(location.href);t.page;var e=t.params;return{page:this.page,params:JSON.stringify(n({url:location.href,query:e},e)),page_type:this.page_type,identity:this.identity}},r.prototype.generatePageId=function(){return V()},r}(g),z=function(){function t(t){if(this.identity_package={device_id:void 0,global_id:void 0,user_id:void 0,union_id:void 0,open_id:void 0,iu_id:void 0},this.app_package={product:void 0,language:void 0,platform:void 0,container:"H5",package_name:void 0,product_name:void 0,version_name:void 0,channel:void 0,version_code:void 0},this.experiment=void 0,this.service_name=void 0,this.safety_id=void 0,this.sub_biz=void 0,this.device_package={os_version:void 0,model:void 0,ua:void 0},this.need_encrypt=!1,this.network_package={type:h.unknown},this.h5_extra_attr={sdk_name:"webLogger",sdk_version:"3.9.30",sdk_bundle:"log.common.js"},this.global_attr={entry_tag:[]},this.update(t),this.app_package.version_name){var e=this.app_package.version_name.lastIndexOf(".");this.app_package.version_code=+this.app_package.version_name.slice(e+1)||0}this.app_package.version_name||(this.app_package.version_name=void 0),this.app_package.version_code||(this.app_package.version_code=void 0)}return t.prototype.getH5ExtraAttr=function(t){return Object.assign({},this.h5_extra_attr,t)},t.prototype.update=function(t){if("object"==typeof t){!function(t,e){if(T(t)&&T(e)){var n=function(t,e,n){T(t[n])&&T(e[n])?Object.assign(t[n],e[n]):T(t[n])||T(e[n])||(t[n]=e[n])};for(var r in e)if(t.hasOwnProperty(r))n(t,e,r);else for(var o in t)T(t[o])&&t[o].hasOwnProperty(r)&&n(t[o],e,r)}}(this,t);var e=t.network_type;e&&h[e]&&(this.network_package.type=h[e])}},t.prototype.updateGlobalAttr=function(t){Object.assign(this.global_attr||{},t)},t.prototype.toJSON=function(){this.identity_package.user_id||(this.identity_package.user_id=void 0);var t=n(n({},this),{toJSON:function(){return n(n({},t),{h5_extra_attr:JSON.stringify(t.h5_extra_attr),global_attr:JSON.stringify(t.global_attr)})}});return t.global_attr=n({},this.global_attr),this.global_attr.entry_tag&&this.global_attr.entry_tag.length?t.global_attr.entry_tag=this.global_attr.entry_tag.slice():delete t.global_attr.entry_tag,Object.keys(this.global_attr).length||delete t.global_attr,t},t}(),Y="https://data-track.corp.kuaishou.com",X=Y+"/",$="production",Z="rest/wd/common/log/collect/",tt=[$,"test","development","logger","oversea"],et={v2:"rest/kd/log/collect?_json=1&biz=",v3:Z+"misc2",radar:Z+"radar"},nt={v2:{production:["https://wlog.ksapisrv.com/","https://wlog.gifshow.com/"][Math.round(Math.random())],development:X,test:X,oversea:"https://logsdk.kwai-pro.com/"},v3:{production:"https://log-sdk.ksapisrv.com/",development:X,test:X,oversea:"https://logsdk.kwai-pro.com/"}},rt=function(t,e,n){return void 0===t&&(t=$),void 0===e&&(e=!1),void 0===n&&(n="v3"),-1===tt.indexOf(t)?t+et[n]:e&&nt.v3[t]?nt.v3[t]+et.radar:nt[n][t]&&et[n]?nt[n][t]+et[n]:nt.v3.production+et.v3},ot=function(t,e){if(!e)return t;try{return/\?(.+?)$/.test(t)?t.replace(/\?(.+?)$/,"?"+e+"&$1"):t+"?"+e}catch(e){return t}},it=function(){function t(t,e){var n=this;this.asyncQueue=[],this.throttleQueue=[],this.errorQueue=[],this.sendingQueue={},this.url="",this.isV2=!1,this.isDebug=!1,this.radarUrl="",this.drained=!1,this.batchCount=50,this.sendingYield=null,this.flush=function(t){n.sendLogs(n.throttleQueue.concat(n.asyncQueue),t),n.throttleQueue=[],n.asyncQueue=[]},this.drain=function(){n.drained=!0,n.flush(),n.flushErrorLogs(),setTimeout((function(){n.drained=!1}),1e3)},this.config=t,this.config.maxBatchLength&&this.config.maxBatchLength>1&&(this.batchCount=Math.min(50,this.config.maxBatchLength)),this.commonPackage=e,this.isDebug=this.config.logger||"logger"===this.config.env,this.isV2="v2"===this.config.proto,this.updateUrls()}return t.prototype.sendData=function(t,e){return"function"==typeof this.config.sender?this.config.sender(t,e):this.baseSendData(t,e)},t.prototype.updateUrls=function(){var t=this.config.env;t&&/^(https?:)?\/\//.test(t)?this.url=t:this.url=rt(t),this.formatUrl()},t.prototype.formatUrl=function(){this.radarUrl||(this.radarUrl=this.url.replace(-1!==this.url.indexOf(et.v2)?et.v2:et.v3,et.radar),-1!==this.radarUrl.indexOf(nt.v2.production)&&this.radarUrl.replace(nt.v2.production,nt.v3.production));var t=this.commonPackage.app_package,e=t.product_name,n=t.product,r="v=3.9.30&kpn="+(e||n);this.url=ot(this.url,r),this.radarUrl=ot(this.radarUrl,r)},t.prototype.getCommonPackageJSON=function(){return this.commonPackage.toJSON()},t.prototype.send=function(t,e,n){if(void 0===e&&(e=!1),n||this.drained)return this.sendLogs([t],n);e?this.sendAsync(t,n):this.sendThrottle(t)},t.prototype.sendAsync=function(t,e){return o(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return this.asyncQueue.push(t),this.asyncQueue.length>=this.batchCount?(this.flush(),[2]):this.sendingYield?[4,this.sendingYield]:[3,2];case 1:e.sent(),this.sendingYield=null,e.label=2;case 2:return e.trys.push([2,4,,5]),[4,Promise.resolve()];case 3:case 4:return e.sent(),[3,5];case 5:return this.asyncQueue.length?(this.flush(),[2]):[2]}}))}))},t.prototype.sendThrottle=function(t){var e=this;this.throttleQueue.push(t),this.throttleQueue.length>=this.batchCount?this.flush():(clearTimeout(this.batchWaitTimer),this.batchWaitTimer=setTimeout((function(){e.flush()}),this.config.wait))},t.prototype.sendLogs=function(t,e){var n=this;if(!t||!t.length)return"function"==typeof e&&e();var r=this.buildLogPackage(t,this.url);this.sendPackage(r,(function(t){t?n.errHandler(r):n.flushErrorLogs(),"function"==typeof e&&e(t)}))},t.prototype.sendPackage=function(t,e){var r=this.config.timeout;try{this.sendData(n(n({},t),{isDebug:this.isDebug,timeout:r}),e)}catch(t){"function"==typeof e&&e(t)}},t.prototype.buildLogPackage=function(t,e){return this.isV2?this.buildV2Package(t,e):this.buildV3Package(t,e)},t.prototype.buildV2Package=function(t,e){return{url:e,data:{log:{event:t}}}},t.prototype.buildV3Package=function(t,e,n){var r=this.getCommonPackageJSON();return n&&Object.assign(r,n),{url:e,data:{common:r,logs:t}}},t.prototype.errHandler=function(t){var e;if(this.isV2)this.errorQueue.unshift(t);else{var n=t.data;if(n.logs.length){delete n.common.h5_extra_attr.http_seq_id,delete n.common.h5_extra_attr.client_timestamp;for(var r=!1,o=0;o<this.errorQueue.length;o++){var i=this.errorQueue[o];if(i.url===t.url&&i.data.logs.length+n.logs.length<=100&&JSON.stringify(i.data.common)===JSON.stringify(n.common)){r=!0,(e=i.data.logs).push.apply(e,n.logs);break}}r||(this.errorQueue.length>=5&&this.errorQueue.pop(),this.errorQueue.unshift(t))}}},t.prototype.flushErrorLogs=function(){var t=this;this.errorQueue.forEach((function(e){t.sendPackage(e)})),this.errorQueue=[]},t.prototype.destory=function(){this.batchWaitTimer&&clearTimeout(this.batchWaitTimer),this.compensateTimer&&clearTimeout(this.compensateTimer)},t.prototype.sendRadar=function(t,e){var n=e?{service_name:e}:void 0,r=this.buildV3Package([t],this.radarUrl||this.url,n);this.sendPackage(r)},t}(),at=(null===(H=null===window||void 0===window?void 0:window.navigator)||void 0===H?void 0:H.userAgent)||"",st=function(){if(q)return q;var t="unknow",e=/android/i,n="Mac OS",r="Windows",o="Android",i="iPhone",a="iPhone",s="Windows Phone",c="Linux";q={os:{name:t,version:t},model:t};try{var u=at.match(/\((.*?)\)/);if(!u)return e.test(at)&&(q.os.name=o),q;var l=u[1]+")",p=l.split(";").map((function(t){return t.trim()})),d=void 0,f=void 0,h=void 0;if(at.indexOf(s)>-1)h=d=s,(v=l.match(/Windows\sPhone\s(.*?)[;\)\s]/))&&(f=v[1]),h=p[p.length-1].replace(")","");else if(e.test(at)){d=o;var g=l.match(/android.*?;(.*?)build\//i);g&&(h=(h=g[1].split(";").pop())&&h.trim());for(var m=0;m<p.length;m++)if(e.test(p[m])){f=p[m].replace(e,""),h||(h=p[m+1]);break}}else if(at.indexOf(i)>-1||at.indexOf(a)>-1){h=at.indexOf(i)>-1?i:a,d="iOS",(v=l.match(/OS\s(.*?)\slike/))&&(f=v[1])}else if(at.indexOf(n)>-1){h=d=n,(v=l.match(/OS\sX\s(.*?)[;\)\s]/))&&(f=v[1])}else if(at.indexOf(r)>-1){var v;h=d=r,(v=l.match(/Windows\s(.*?)[;\)]/))&&(f=v[1])}else if(at.indexOf("Nokia")>-1){d="Symbian";var y=at.match(/Symbian.*?\/(.*?);/);y&&(f=y[1]);var _=at.match(/Nokia(.*?)\//);_&&(h=_[1])}else l.indexOf(c)>-1&&(d=h=c);q={os:{name:d||t,version:f&&f.replace(/_/g,".").trim()||t},model:h||t}}catch(t){}return q};function ct(){return void 0===J&&(J=b()&&j("kpn")||function(){if("undefined"==typeof window)return"";for(var t=window.navigator.userAgent,e=[[/ wxwork\//,"workWechat"],[/ MicroMessenger\//,"wechat"],[/ Kwai\//,"KUAISHOU"],[/ ksthanos\//,"THANOS"],[/ ksNebula\//i,"NEBULA"],[/ QQ\//,"qq"],[/__weibo__([^_]+)/,"weibo"],[/ livemate\//,"livemate"],[/ baiduboxapp\//,"baidu"],[/ MQQBrowser\//,"qqBrowser"],[/\(MSIE ([^;]+);/,"ie"]],n=0;n<e.length;n++){var r=e[n],o=r[0],i=r[1];if(o.exec(t))return i}return""}()||""),J}var ut={supportsPushState:function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},getUAInfo:st,getDefaultKpn:ct},lt=[["a7","640x1136",["iPhone 5","iPhone 5s"]],["a7","1536x2048",["iPad Air","iPad Mini 2","iPad Mini 3"]],["a8","640x1136",["iPod touch (6th gen)"]],["a8","750x1334",["iPhone 6"]],["a8","1242x2208",["iPhone 6 Plus"]],["a8","1536x2048",["iPad Air 2","iPad Mini 4"]],["a9","640x1136",["iPhone SE"]],["a9","750x1334",["iPhone 6s"]],["a9","1242x2208",["iPhone 6s Plus"]],["a9x","1536x2048",["iPad Pro (1st gen 9.7-inch)"]],["a9x","2048x2732",["iPad Pro (1st gen 12.9-inch)"]],["a10","750x1334",["iPhone 7"]],["a10","1242x2208",["iPhone 7 Plus"]],["a10x","1668x2224",["iPad Pro (2th gen 10.5-inch)"]],["a10x","2048x2732",["iPad Pro (2th gen 12.9-inch)"]],["a11","750x1334",["iPhone 8"]],["a11","1242x2208",["iPhone 8 Plus"]],["a11","1125x2436",["iPhone X"]],["a12","828x1792",["iPhone Xr"]],["a12","1125x2436",["iPhone Xs"]],["a12","1242x2688",["iPhone Xs Max"]],["a12x","1668x2388",["iPad Pro (3rd gen 11-inch)"]],["a12x","2048x2732",["iPad Pro (3rd gen 12.9-inch)"]]],pt=function(){try{var t=st(),e=b(),n=t.model||t.os.name||"unknown";if("iOS"!==t.os.name||e)return n;var r=function(){for(var t=C(),e=[],n=0,r=lt;n<r.length;n++){var o=r[n];t===o[1]&&(e=e.concat(o[2]))}return e.length&&e}();return r?r.join(" or "):n}catch(t){return"unknown"}},dt={},ft=function(t){try{if(window&&window.localStorage&&"undefined"!=typeof Storage&&window.localStorage instanceof Storage){var e=Number(function(t){try{if(window&&window.localStorage){var e=window.localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(t){return e}}}catch(t){return null}return null}(t))||0;return e+1>1e8&&(e=0),function(t,e){try{if(window&&window.localStorage)return window.localStorage.setItem(t,JSON.stringify(e)),!0}catch(t){return!1}}(t,e+1),e}}catch(t){}return dt[t]||(dt[t]=0),dt[t]++},ht=0,gt=b();function mt(){try{var t=st().os.name;return ht=t?"Android"===t?gt?6:8:"iOS"===t?gt?7:9:10:0}catch(t){return 0}}function vt(){var t="unknown",e=null===window||void 0===window?void 0:window.navigator,n=(null==e?void 0:e.connection)||(null==e?void 0:e.mozConnection)||(null==e?void 0:e.webkitConnection);return n&&(t=n.type||n.effectiveType),t}var yt=function(t){function r(e){var r=t.call(this,n({platform:mt(),container:10===ht?"WEB":"H5",version_name:gt&&j("appver",void 0,!0)||"",network_type:vt(),device_id:B(),global_id:gt&&j("egid")||"",app_package:{language:navigator.language},device_package:{os_version:st().os.version,model:pt(),ua:navigator.userAgent}},e))||this;return Object.assign(r.h5_extra_attr,{host_product:ct(),resolution:C(),screen_with:screen.width,screen_height:screen.height,device_pixel_ratio:window.devicePixelRatio||1,domain:window.location.origin},e.h5_extra_attr),r}return e(r,t),r.prototype.getVersionName=function(){return this.app_package.version_name},r.prototype.update=function(e){t.prototype.update.call(this,e);var n=this.app_package.version_name;if("string"==typeof n){var r=n.lastIndexOf(".");this.app_package.version_code=+n.slice(r+1)||0,this.h5_extra_attr.app_version_name=n}},r.prototype.setAdditionalSeqIdPackage=function(t){var e,n;this.additional_seq_id_package={channel:3,channel_seq_id:(n="NORMAL",void 0===n&&(n=""),ft("WEBLOGGER_CHANNEL_SEQ_ID_"+n)),custom_type:t,custom_seq_id:(e=t,ft("WEBLOGGER_V2_SEQ_ID_"+e))}},r.prototype.increaseH5SeqId=function(t){this.h5_extra_attr.client_timestamp=(new Date).valueOf(),this.h5_extra_attr.seq_id=ft(t?"WEBLOGGER_H5_CUSTOM_SEQ_ID":"WEBLOGGER_H5_SEQ_ID")},r}(z),_t=function(t,e,n){return y("[error 400]","埋点上报接口请求报错","\nurl:",e,"\ndata",n,"\nerror:",t||"server decode log failed")};function wt(t,e){var n=t.url,r=t.data,o=t.timeout,i=new XMLHttpRequest;i.open("POST",n),i.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),"object"!=typeof r||r instanceof Uint8Array||(r=JSON.stringify(r)),o&&(i.timeout=o),i.onload=function(){var t=function(t,e,n,r){var o;if(t<200||t>=300&&304!==t);else try{var i=JSON.parse(e),a=i.exception,s=i.result,c=i.error_msg;a&&(o=a),1!==s&&(o=c||"result is "+s)}catch(t){o=t.message}return o&&_t(o,n,r),o}(i.status,i.response,n,r);e&&e(t)},i.ontimeout=i.onerror=function(t){t&&_t(t,n,r),e&&e(t?"networkTimeout":"")},i.send(r)}var St=function(t){var e=function(e){return y("[error 401]","GET 请求出错 url: "+t,e)};try{var n=new XMLHttpRequest;n.open("GET",t),n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),n.send(),n.onerror=e}catch(t){e(t)}},bt=null===window||void 0===window?void 0:window.navigator,Et=bt&&-1!==bt.userAgent.indexOf("Chrome")&&"function"==typeof bt.sendBeacon;function kt(t,e){var n=t.url,r=t.data,o=t.timeout,i=t.isDebug;if(r=JSON.stringify(r),!i&&function(t){var e=t.url,n=t.data;if(!Et)return!1;"object"==typeof n&&n.fd&&(n=n.fd);try{return bt.sendBeacon(e,n)}catch(t){return y("[error 403]","navigator.sendBeacon 报错",t),!1}}({url:n,data:r}))return e&&e();wt({url:n,data:r,timeout:o},e)}var Pt,Ot=function(t,e,n){return void 0===t&&(t=Y),function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];null===console||void 0===console||(t=console.log).call.apply(t,a([null],e))}("%c埋点抓包校验: %c"+(t+"/#/logger/index?sessionId="+n),"color:#1abf89;font-size:1.2em;line-height:2.4em;","font-size:1.2em;"),e+"/"+n+"/"};!function(t){t.loading="loading",t.loaded="loaded"}(Pt||(Pt={}));var Tt,Lt,Ct,Nt=Object.create(null),Ut="weblogger_switch",Rt=function(t){var e=function(){try{var t=j(Ut)||"undefined"!=typeof sessionStorage&&sessionStorage.getItem(Ut);if(!t)return;var e=JSON.parse(t),n=e.loggerSessionId,r=e.reportHost,o=e.loggerHost,i=e.handshakeApi;return n?(St(i||r+"/"+n),Ot(o,r,n)):""}catch(t){return""}}()||function(t){void 0===t&&(t=location.href);var e=t.lastIndexOf("?");if(-1===e)return"";var n=E(t.slice(e+1)).webloggerSwitch;if(!n)return"";try{var r=decodeURIComponent(n),o=JSON.parse(r),i=o.loggerSessionId,a=o.reportHost,s=o.loggerHost,c=o.handshakeApi;return i?("undefined"!=typeof sessionStorage&&sessionStorage.setItem(Ut,r),St(c||a+"/"+i),Ot(s,a,i)):""}catch(t){return""}}();if(e)return rt(e,!1,t)},xt=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.baseSendData=r.sendLog,r}return e(n,t),n.prototype.updateUrls=function(){var t=this.config,e=t.env,n=void 0===e?$:e,r=t.logger,o=t.proto,i=t.isBridge,a=!i&&Rt();if(a)this.url=a,this.isDebug=!0;else if(r||"logger"===n||"logger-oversea"===n){var s=function(t,e){void 0===t&&(t=B()),void 0===e&&(e=!1);var n=e?"https://data-track-sgp.corp.kuaishou.com":Y;return St(n+"/rest/"+t),Ot(n,n+"/rest",t)}(this.commonPackage.identity_package.device_id,"logger-oversea"===n);this.url=rt(s,!1,o),this.isDebug=!0}else n&&/^(https?:)?\/\//.test(n)?this.url=n:(this.isDebug=n!==$,this.url=rt(n,!1,o),this.radarUrl=rt(n,!0,o));this.enableAsyncGzip="v3"===o&&!i&&U()&&n===$&&!a&&!r,this.enableAsyncGzip&&function(t,e,n){if(void 0===e&&(e=!0),Nt[t])return n&&n(t+" load repeat");var r=Nt[t]={state:Pt.loading},o=document.createElement("script");o.src=t,e&&(o.async=!0);var i=document.getElementsByTagName("script")[0];i&&i.parentNode?i.parentNode.insertBefore(o,i):document.head.appendChild(o),o.onload=function(){r.state=Pt.loaded,n&&n()},o.onerror=function(e){r.state=Pt.loaded,n&&n(t+" loaded failed, "+e)}}("https://static.yximgs.com/udata/pkg/ks-track-platform-new/weblogger/3.9.30/async/gzipper.min.js"),this.formatUrl()},n.prototype.sendLog=function(t,e){!this.drained&&this.enableAsyncGzip&&this.sendGzip(t,e)||kt(t,e)},n.prototype.sendGzip=function(t,e){var r;if(!(null===(r=n.Gzipper)||void 0===r?void 0:r.sendData))return!1;return n.Gzipper.sendData(t,(function(n){n&&kt(t,e)}))},n.prototype.getCommonPackageJSON=function(){return this.commonPackage.toJSON()},n.prototype.send=function(e,n,r){void 0===n&&(n=!1),this.isV2&&(this.commonPackage.setAdditionalSeqIdPackage(e.getEventType()),e.common_package=this.getCommonPackageJSON()),t.prototype.send.call(this,e,n,r)},n}(it);!function(t){var e,n,r,o,i,a,s,c;(e=t.ElementStatus||(t.ElementStatus={}))[e.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",e[e.CHECKED=1]="CHECKED",e[e.UNCHECKED=2]="UNCHECKED",(n=t.PageShowAction||(t.PageShowAction={}))[n.UNKNOWN_ACTION=0]="UNKNOWN_ACTION",n[n.ENTER=1]="ENTER",n[n.LEAVE=2]="LEAVE",n[n.RESUME=3]="RESUME",(r=t.ActionStatus||(t.ActionStatus={}))[r.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",r[r.SUCCESS=1]="SUCCESS",r[r.FAIL=2]="FAIL",(o=t.ActionType||(t.ActionType={}))[o.UNKNOWN_ACTION_TYPE=0]="UNKNOWN_ACTION_TYPE",o[o.CLICK=1]="CLICK",o[o.LEFT_PULL=2]="LEFT_PULL",o[o.RIGHT_PULL=3]="RIGHT_PULL",o[o.UP_PULL=4]="UP_PULL",o[o.DOWN_PULL=5]="DOWN_PULL",(i=t.SubAction||(t.SubAction={}))[i.UNKNOWN_SUB_ACTION=0]="UNKNOWN_SUB_ACTION",i[i.PAGE_ENTER=1]="PAGE_ENTER",i[i.PAGE_LEAVE=2]="PAGE_LEAVE",i[i.PAGE_RESUME=3]="PAGE_RESUME",i[i.PAGE_PAUSE=4]="PAGE_PAUSE",(a=t.Direction||(t.Direction={}))[a.UNKNOWN2=0]="UNKNOWN2",a[a.UP=1]="UP",a[a.DOWN=2]="DOWN",a[a.LEFT=3]="LEFT",a[a.RIGHT=4]="RIGHT",(s=t.TaskStatus||(t.TaskStatus={}))[s.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",s[s.START=1]="START",s[s.RETRY=2]="RETRY",s[s.PAUSE=3]="PAUSE",s[s.RESUME=4]="RESUME",s[s.PENDING=5]="PENDING",s[s.PROCESSING=6]="PROCESSING",s[s.SUCCESS=7]="SUCCESS",s[s.FAIL=8]="FAIL",s[s.CANCEL=9]="CANCEL",s[s.FINISH=10]="FINISH",(c=t.OperationType||(t.OperationType={}))[c.UNKNOWN_OPERATION=0]="UNKNOWN_OPERATION",c[c.CLICK=1]="CLICK",c[c.DOUBLE_CLICK=2]="DOUBLE_CLICK",c[c.TRIPLE_CLICK=3]="TRIPLE_CLICK",c[c.LONG_PRESS=4]="LONG_PRESS",c[c.PULL=5]="PULL",c[c.DRAG=6]="DRAG",c[c.SCALE=7]="SCALE",c[c.PULL_DOWN=8]="PULL_DOWN",c[c.PULL_UP=9]="PULL_UP",c[c.RIGHT_CLICK=10]="RIGHT_CLICK",c[c.AUTO=11]="AUTO"}(Tt||(Tt={})),function(t){var e,n;(e=t.ShowType||(t.ShowType={}))[e.UNKNOWN_TYPE=0]="UNKNOWN_TYPE",e[e.PAGE_AUTO=10]="PAGE_AUTO",e[e.PAGE_CUSTOM=11]="PAGE_CUSTOM",e[e.ELEMENT=12]="ELEMENT",(n=t.TaskEventType||(t.TaskEventType={}))[n.UNKNOWN_TYPE=0]="UNKNOWN_TYPE",n[n.USER_OPERATION=1]="USER_OPERATION",n[n.STAY_LENGTH_STAT_EVENT=2]="STAY_LENGTH_STAT_EVENT",n[n.BACKGROUND_TASK_EVENT=3]="BACKGROUND_TASK_EVENT"}(Lt||(Lt={})),function(t){var e;(e=t.ShowType||(t.ShowType={}))[e.UNKNOWN2=0]="UNKNOWN2",e[e.PAGE=1]="PAGE"}(Ct||(Ct={}));var It,At,Dt=!0,Mt=(new Date).valueOf(),jt=function(t,e){var r,o;void 0===e&&(e=!1);var i=t.type,a=t.currentUrlPackage,s=t.referUrlPackage,c=t.name,u=void 0===c?"":c,l=t.action,p=t.beginTime,d=t.params,f=t.contentPackage,h=t.status,g=t.actionType,m=t.auto,v=((r={status:h?Tt.ActionStatus[h]||Tt.ActionStatus.UNKNOWN_STATUS:Tt.ActionStatus.SUCCESS})[e?"show_type":"action_type"]=g?Tt.ActionType[g]||Tt.ActionType.UNKNOWN_ACTION_TYPE:Tt.ActionType.CLICK,r.url_package=a,r.refer_url_package=s,r[e?"content_wrapper":"content_package"]=f,r);if("PV"===i){var y=Tt.SubAction.PAGE_ENTER,_=Tt.PageShowAction.ENTER,w=Dt,S=0;switch(Dt=!1,l){case"leave":_=Tt.PageShowAction.LEAVE,y=Tt.SubAction.PAGE_LEAVE,S=(new Date).valueOf()-(p||Mt);break;case"enter":_=Tt.PageShowAction.ENTER,y=Tt.SubAction.PAGE_ENTER,Mt=(new Date).valueOf();break;case"visible":_=Tt.PageShowAction.RESUME,y=Tt.SubAction.PAGE_RESUME,Mt=(new Date).valueOf();break;case"hidden":_=Tt.PageShowAction.LEAVE,y=Tt.SubAction.PAGE_PAUSE,S=(new Date).valueOf()-(p||Mt)}var b=m?Lt.ShowType.PAGE_AUTO:Lt.ShowType.PAGE_CUSTOM;return e&&(w=void 0,b=Ct.ShowType.PAGE),{show_event:n({action:_,sub_action:y,type:b,first_load:w,time_cost:0,stay_length:S},v)}}return{show_event:n({action:e?0:Tt.PageShowAction.ENTER,type:e?0:Lt.ShowType.ELEMENT,sub_action:e?0:Tt.SubAction.PAGE_ENTER,element_package:(o={},o[e?"action2":"action"]=u,o.params=JSON.stringify(d),o)},v)}},Kt=function(t,e){var r,o;void 0===e&&(e=!1);var i=t.sessionId,a=t.currentUrlPackage,s=t.referUrlPackage,c=t.name,u=t.params,l=t.type,p=t.contentPackage,d=t.status,f=t.taskType,h=t.operationDirection,g=((r={url_package:a,refer_url_package:s,element_package:(o={},o[e?"action2":"action"]=c,o.params=JSON.stringify(u),o)})[e?"content_wrapper":"content_package"]=p,r);return e?"CLICK"===l?{click_event:n({type:f&&Tt.OperationType[f]||Tt.OperationType.CLICK,direction:h&&Tt.Direction[h]||Tt.Direction.UNKNOWN2},g)}:{task_event:n({action2:l,status:d&&Tt.TaskStatus[d]||Tt.TaskStatus.UNKNOWN_STATUS},g)}:{task_event:n({type:f&&Lt.TaskEventType[f]||Lt.TaskEventType.USER_OPERATION,status:d&&Tt.TaskStatus[d]||Tt.TaskStatus.UNKNOWN_STATUS,operation_type:Tt.OperationType[l]||Tt.OperationType.CLICK,operation_direction:h&&Tt.Direction[h]||Tt.Direction.UNKNOWN2,session_id:i},g)}},Wt=function(t){var e=t.name,o=t.params,i=t.currentUrlPackage,a=t.referUrlPackage,s=r(t,["name","params","currentUrlPackage","referUrlPackage"]);return{key:e,value:JSON.stringify(n(n({url_package:i,refer_url_package:a},o),s))}},Vt=function(t){var e=t.currentUrlPackage,r=t.referUrlPackage,o=t.options;return{video_stat_event:n(n({},o),{url_package:e,refer_url_package:r})}},Gt=(It=(new Date).getTimezoneOffset()/60)<=0?"GMT+"+S(-It+"",2,"0")+":00":"GMT-"+S(It+"",2,"0")+":00",Ft=function(){function t(t,e){void 0===e&&(e=!1),this.client_timestamp=(new Date).valueOf(),this.client_increment_id=0,this.session_id=f.sessionId,this.event_id="",e||(this.time_zone=Gt),Object.assign(this,t),this.genIncrementId()}return t.prototype.genIncrementId=function(){this.client_increment_id=this.isCustomStatEvent()?ft("WEBLOGGER_CUSTOM_INCREAMENT_ID_KEY"):ft("WEBLOGGER_INCREAMENT_ID_KEY")},t.prototype.isCustomStatEvent=function(){return!(!this.stat_package||!("custom_stat_event"in this.stat_package))},t.prototype.getEventType=function(){if(this.event_package){var t=this.event_package,e=t.task_event,n=t.show_event,r=t.click_event,o=t.custom_event;if(n)return"showEvent";if(r)return"clickEvent";if(e)return"taskEvent";if(o)return"customEvent"}return"customEvent"},t}();function Bt(t,e,n){var o;void 0===n&&(n=!1);var i,a=e.eventId,s=e.currentUrlPackage,c=e.referUrlPackage,u=e.contentPackage,l=e.name,p=e.params;switch(n&&"RADAR"!==t&&"CUSTOM"!==t&&(s&&(s.page2=s.page,delete s.page),c&&(c.page2=c.page,delete c.page)),t){case"PV":case"SHOW":return new Ft({event_package:jt({type:t,status:e.status,currentUrlPackage:s,referUrlPackage:c,action:e.type,beginTime:e.beginTime,actionType:e.actionType,name:l,params:p,contentPackage:u,operationDirection:e.operationDirection,auto:e.auto},n),event_id:a},n);case"CUSTOM":case"CUSTOM_STAT_EVENT":var d=Wt({name:l,params:p,currentUrlPackage:s,referUrlPackage:c});return new Ft(n?{event_package:{custom_event:d},event_id:a}:{stat_package:{custom_stat_event:d},event_id:a},n);case"RADAR":return new Ft({stat_package:{custom_stat_event:Wt({name:l,params:p,currentUrlPackage:s,referUrlPackage:c})},event_id:a},n);case"HEART_BEAT_EVENT":case"LAUNCH_EVENT":case"APP_USAGE_STAT_EVENT":case"EXCEPTION_EVENT":case"DEVICE_STAT_EVENT":return new Ft({stat_package:(o={},o[t.toLowerCase()]=(i=e,i.currentUrlPackage,i.referUrlPackage,r(i,["currentUrlPackage","referUrlPackage"])),o)},n);case"VIDEO":return new Ft(n?{stat_package:Vt({currentUrlPackage:s,referUrlPackage:c,options:p.params})}:{event_package:Kt({type:t,status:e.status,taskType:e.taskType,sessionId:f.sessionId,currentUrlPackage:s,referUrlPackage:c,name:l,params:p.params,contentPackage:u},n),event_id:a},n);default:return new Ft({event_package:Kt({type:t,status:e.status,taskType:e.taskType,sessionId:f.sessionId,currentUrlPackage:s,referUrlPackage:c,name:l,params:p,contentPackage:u},n),event_id:a},n)}}var Ht=null,qt="tool",Jt=!1,Qt=function(){return o(void 0,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:if(!At||Jt)return[2];t.label=1;case 1:return t.trys.push([1,6,,7]),Ht?[4,Ht]:[3,3];case 2:return t.sent(),[3,5];case 3:return[4,Ht=At.ready()];case 4:t.sent(),At.register({namespace:"webview",name:"getPageLoadData"}),At.register({namespace:"tool",name:"setClientLog"}),At.register({namespace:"tool",name:"sendRadarLog"}),At.register({namespace:"tool",name:"getKswitchData"}),t.label=5;case 5:return Ht=null,Jt=!0,[3,7];case 6:return t.sent(),[3,7];case 7:return[2]}}))}))},zt=function(t,e){return void 0===e&&(e="tool"),o(void 0,void 0,void 0,(function(){var n,r,o;return i(this,(function(i){switch(i.label){case 0:return n=!1,At?Jt?[3,2]:[4,Qt()]:[3,5];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,4,,5]),[4,At.tool.canIUse({namespace:e,name:t})];case 3:return r=i.sent().canUse,n=r,[3,5];case 4:return o=i.sent(),y("[error 206]","yoda.tool.canIUse({ '"+e+"', '"+t+"' }) 报错: "+o.message),[3,5];case 5:return[2,n]}}))}))},Yt=void 0,Xt=function(t,e){return o(void 0,void 0,void 0,(function(){var n,r;return i(this,(function(o){switch(o.label){case 0:return At?Jt?[3,2]:[4,Qt()]:[2];case 1:o.sent(),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,null===(r=At.tool)||void 0===r?void 0:r.handleEntryTag({type:t,params:e})];case 3:return(n=o.sent())&&n.data&&n.data.entryTag?[2,n.data.entryTag]:[3,5];case 4:return y("[error 213]","操作染色参数报错",o.sent()),[3,5];case 5:return[2,null]}}))}))},$t={isSupportBridgeLog:function(){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return At?Jt?[3,2]:[4,Qt()]:[2,!1];case 1:e.sent(),e.label=2;case 2:return[4,zt(t="setClientLog","tool")];case 3:return e.sent()?(qt="tool",[2,!0]):[4,zt(t,"platform")];case 4:return e.sent()?(qt="platform",[2,!0]):[2,!1]}}))}))},isSupportBridge:zt,getWebviewLoadPerf:function(t){return void 0===t&&(t={}),o(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return At?Jt?[3,2]:[4,Qt()]:[2];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,null===(e=At.webview)||void 0===e?void 0:e.getPageLoadData(t)];case 3:return[2,n.sent()];case 4:return y("[error 207]","yoda.webview.getPageLoadData() 报错: "+n.sent().message),[3,5];case 5:return[2]}}))}))},sendRadarLog:function(t){return void 0===t&&(t={}),o(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return At?Jt?[3,2]:[4,Qt()]:[2];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,null===(e=At.tool)||void 0===e?void 0:e.sendRadarLog(t,(function(e,n){e&&1!==e.result&&y("[error 205]","yoda.tool.sendRadarLog 埋点发送失败",JSON.stringify(t),"result: "+e+", message: "+n)}))];case 3:return[2,n.sent()];case 4:return y("[error 207]","yoda.tool.sendRadarLog() 报错: "+n.sent().message),[3,5];case 5:return[2]}}))}))},setClientLog:function(t,e){return o(void 0,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return At?Jt?[3,2]:[4,Qt()]:[2];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,At[qt].setClientLog({type:t,data:e},(function(n,r){n&&1!==n.result&&y("[error 203]","yoda.tool.setClientLog 埋点发送失败",JSON.stringify({type:t,data:e}),"result: "+n+", message: "+r)}))];case 3:return[2,r.sent()];case 4:return n=r.sent(),y("[error 209]","yoda."+qt+".setClientLog() 报错: "+n.message),[3,5];case 5:return[2]}}))}))},initYoda:Qt,yodaAlready:Jt,getKDSWebviewLoadPerf:function(t){return void 0===t&&(t={}),o(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return At?Jt?[3,2]:[4,Qt()]:[2];case 1:n.sent(),n.label=2;case 2:return[4,zt("getPageLoadData","system")];case 3:if(!n.sent())return[3,7];n.label=4;case 4:return n.trys.push([4,6,,7]),[4,null===(e=At.system)||void 0===e?void 0:e.getPageLoadData(t)];case 5:return[2,n.sent()];case 6:return y("[error 212]","yoda.system.getPageLoadData() 报错",n.sent().message),[3,7];case 7:return[2]}}))}))},sendSummarizedLog:function(t){return void 0===t&&(t={}),o(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:if(!At)return[2];n.label=1;case 1:return n.trys.push([1,5,,6]),Jt?[3,3]:[4,Qt()];case 2:n.sent(),n.label=3;case 3:return[4,null===(e=At.tool)||void 0===e?void 0:e.sendSummarizedLog(t)];case 4:return[2,n.sent()];case 5:return y("[error 208]","yoda.tool.sendSummarizedLog() 报错: "+n.sent().message),[3,6];case 6:return[2]}}))}))}},Zt=function(t,e,n,r){void 0===t&&(t=p.CLICK),void 0===e&&(e={}),"string"!=typeof t&&(t=t.type),t=t.toUpperCase();var o={};return"string"==typeof e?(o.contentPackage=r,"CUSTOM"===t?(o.key=e,o.value=n):(o.params=n,"PV"===t?o.page=e:o.action=e)):o=e,[t,o]},te=!1,ee=Math.random(),ne=function(t){function r(e,n){void 0===e&&(e={});var r,o,i,a=t.call(this,e,n)||this;return a.yoda=null,a.SampledPageMap={},a.beforeUnload=function(t){if(!te){for(var e in a.logger.drain(),a.plugins){var n=a.plugins[e];"function"==typeof n.beforeUnload&&n.beforeUnload(t)}te=!0,setTimeout((function(){te=!1}),2e3)}},a.isBridge=e.bridgeMode&&e.yoda&&e.yoda.isInYoda,a.logConfig.isBridge=a.isBridge,r="sessionId",o=n&&n.session_id||j("sid")||(i="",b()&&(i=j("session_id")||j("sid"))?i:V()),f[r]=o,a.isV2="v2"===a.logConfig.proto,a.getSampled(e),a.presetBaseOption(a.baseOption),a.commonPackage=new yt(a.baseOption),a.logger=new xt(a.logConfig,a.commonPackage),a.initYoda(),a.addPlugins(),_(window,"pagehide",a.beforeUnload),_(window,"beforeunload",a.beforeUnload),a}return e(r,t),r.prototype.getSampled=function(t){"function"==typeof t.sampleRateFn?this.sampled=!!t.sampleRateFn():void 0!==t.sampleRate&&(this.sampled=ee<Number(t.sampleRate))},r.prototype.presetBaseOption=function(t){this.isBridge||(this.isV2?("number"!=typeof t.product&&y("[error 101]","请设置有效的 product 值，值类型为 number!"),delete t.product_name):(t.product_name&&"string"==typeof t.product_name||y("[error 100]","请设置有效的 product_name 值，值类型为 string!"),delete t.product),t.user_id||(t.user_id=j("userId")||j("userName")||void 0,t.user_id||v("[warn 102]","user_id 为空，请确定是否传入，如果是异步通过 updateCommonPackage 接口传入，可以忽略该提示!")),t.device_id||(t.device_id=B(),t.device_id||y("[error 103]","device_id 为空，请设置有效的设备 id!")),!t.global_id&&b()&&(t.global_id=j("egid")||""))},Object.defineProperty(r.prototype,"Utils",{get:function(){return{yoda:this.yoda&&$t,cookie:W,ua:ut,io:{sendData:kt}}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isKSwitchSampled",{get:function(){return void 0!==typeof Yt},enumerable:!1,configurable:!0}),r.prototype.initYoda=function(){return o(this,void 0,void 0,(function(){var t=this;return i(this,(function(e){switch(e.label){case 0:return this.logConfig.yoda&&!this.yoda&&(this.yoda=(void 0===(n=this.logConfig.yoda)&&(n=At||"undefined"!=typeof window&&window.yoda),At&&At.isInYoda?At:n&&n.isInYoda?At=n:null)),this.yoda?[4,Qt()]:[3,2];case 1:e.sent(),e.label=2;case 2:return o(void 0,void 0,void 0,(function(){var t,e,n,r,o;return i(this,(function(i){switch(i.label){case 0:if(!At)return[2,Yt=null];if(void 0!==Yt)return[2,Yt];i.label=1;case 1:return i.trys.push([1,4,,5]),[4,zt("getKswitchData","tool")];case 2:return i.sent()?[4,At.tool.getKswitchData({keys:[{key:"webloggerSampling"}]})]:[2,Yt=null];case 3:if((t=i.sent())&&t.data&&("string"==typeof(e=t.data[0])&&(e=JSON.parse(e)),n=e?e.value:null)){for(o in"string"==typeof n&&(n=JSON.parse(n)),r="undefined"!=typeof location?location.host:"*",n)"*"!==o&&-1===o.indexOf(r)||(Yt||(Yt={}),Yt[o]=n[o]);if(Yt)return[2,Yt]}return[3,5];case 4:return y("[error 201]","yoda.tool.getKswitchData 采样配置获取出错",i.sent().message),[3,5];case 5:return[2,Yt=null]}}))})).then((function(){t.currentUrlPackage&&(t.currentUrlPackage.sampled=t.getPageSampled())})),o(void 0,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return At?[4,zt("getDeviceInfo","system")]:[2,null];case 1:if(!e.sent())return[3,5];e.label=2;case 2:return e.trys.push([2,4,,5]),[4,null===(t=At.system)||void 0===t?void 0:t.getDeviceInfo()];case 3:return[2,e.sent()];case 4:return y("[error 210]","yoda.system.getDeviceInfo() 报错",e.sent().message),[3,5];case 5:return[2]}}))})).then((function(e){e&&e.mod&&(t.commonPackage.device_package.model=e.mod)})),o(void 0,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return At?[4,zt("getAppInfo","system")]:[2,null];case 1:if(!e.sent())return[3,5];e.label=2;case 2:return e.trys.push([2,4,,5]),[4,null===(t=At.system)||void 0===t?void 0:t.getAppInfo()];case 3:return[2,e.sent()];case 4:return y("[error 209]","yoda.system.getAppInfo() 报错",e.sent().message),[3,5];case 5:return[2]}}))})).then((function(e){e&&(e.did&&(t.commonPackage.identity_package.device_id=e.did),e.userId&&!t.commonPackage.identity_package.user_id&&(t.commonPackage.identity_package.user_id=e.userId),e.appver&&(t.commonPackage.app_package.version_name=e.appver))})),[2]}var n}))}))},r.prototype.initUrlPackage=function(){t.prototype.initUrlPackage.call(this);var e,n=this.logConfig.referer,r="web";n?(e=n.value,r=n.type&&n.type||r):"undefined"!=typeof document&&document.referrer&&(e=document.referrer),e&&this.updateReferUrlPackage(e,r)},r.prototype.updateCurrentUrlPackage=function(t,e){if(void 0===t&&(t=(null===location||void 0===location?void 0:location.href)||""),void 0===e&&(e="web"),"object"==typeof t&&t.page&&!t.force&&this.currentUrlPackage&&t.page===this.currentUrlPackage.page)return this.currentUrlPackage.update(t.page,t.params);this.currentUrlPackage=new Q(t,e,this.logConfig.urlMap),this.currentUrlPackage.sampled=this.getPageSampled(),this.logConfig.attachUrl&&this.currentUrlPackage.attachUrl()},r.prototype.updateReferUrlPackage=function(t,e){void 0===t&&(t=this.currentUrlPackage),void 0===e&&(e="web"),this.referUrlPackage=t instanceof Q?t:new Q(t,e,this.logConfig.urlMap)},r.prototype.getPageSampled=function(){if(!Yt)return"boolean"!=typeof this.sampled||this.sampled;var t="undefined"!=typeof location?location.href.replace(/https?:\/\//,"").split("?")[0]:"*";if(this.SampledPageMap&&void 0!==this.SampledPageMap[t])return this.SampledPageMap[t];if(Yt){var e=void 0,n=0,r=null,o=[];for(var i in Yt)if(Yt.hasOwnProperty(i)){var a=0;if("*"===i?a=1:0===t.indexOf(i)&&(i===t?a=100:"/"===i[i.length-1]&&(a=11-1/i.length)),!a)continue;var s=Yt[i],c=s.radar,u=s.overwrite,l=s.overall;a+=u?1e3:0,c&&o.push({radar:c,level:a}),a>n&&(n=a,e=l)}n&&(r={},o.sort((function(t,e){return t.level-e.level})).forEach((function(t){Object.assign(r,t.radar)})));var p=void 0;p=n>1e3||void 0===this.sampled?Math.random()<Number(e)&&(!r||{radar:r}):"boolean"!=typeof this.sampled||this.sampled,this.SampledPageMap&&(this.SampledPageMap[t]=p)}return this.SampledPageMap&&this.SampledPageMap[t]},Object.defineProperty(r.prototype,"isSendSampled",{get:function(){return this.currentUrlPackage&&this.currentUrlPackage.sampled||this.logger.isDebug},enumerable:!1,configurable:!0}),r.prototype.generateLog=function(t,e,r){void 0===r&&(r=Bt);var o,i=e,a=i.action,s=i.params,c=i.status,u=i.type,l=i.eventId,p=i.contentPackage,f=i.urlPage;if(p&&(p="string"==typeof p?p:JSON.stringify(p)),t===d.PV){var h=e,g=h.page,m=h.type;m||(e.type=m="enter"),"enter"===m&&g?this.updateCurrentUrlPackage({page:g,params:s}):this.currentUrlPackage.update(g,s)}else f&&f.page&&(o={page:f.page,identity:f.identity||V(),params:JSON.stringify(f.params),page_type:this.currentUrlPackage.page_type});var v={currentUrlPackage:o||this.currentUrlPackage.toJSON(),referUrlPackage:this.referUrlPackage?this.referUrlPackage.toJSON():void 0,contentPackage:p};if(t!==d.RADAR&&v.currentUrlPackage.page.indexOf("http"),t===d.PV){var y=e.type;return r(t,n(n(n({},e),{type:y}),v),this.isV2)}if(t===d.SHOW)return r(t,n(n(n({},e),{name:a}),v),this.isV2);if(t===d.VIDEO)return r(t,n({params:e,name:"VIDEO"},v),this.isV2);if(t===d.RADAR)return r(t,e,this.isV2);if(t===d.CUSTOM){var _=e,w=_.key,S=_.value,b=_.eventId;return r(t,n(n(n({},e),{params:S,eventId:b,name:w}),v),this.isV2)}return r(t,n(n(n({},e),{params:s,status:c,taskType:u,eventId:l,name:a}),v),this.isV2)},r.prototype.collect=function(t,e,n,r){var o=Zt(t,e,n,r),i=o[0],a=o[1];return this.send(i,a,!1)},r.prototype.sendImmediately=function(t,e,n,r){var o=Zt(t,e,n,r),i=o[0],a=o[1];return this.send(i,a,!0)},r.prototype.beforeSend=function(t,e,r){var a,s,c=this;if(this.emit("event",{type:t,action:e.type||e.action,data:r}),"CLICK"===t){var u=null===(a=e)||void 0===a?void 0:a.entryTag;this.yoda&&u&&Xt("setPendingEntryTag",{entryTag:n({page_name:this.currentUrlPackage.page,element_action:null==e?void 0:e.action},u)})}else if("PV"===t&&this.yoda&&!this.isBridge){if("enter"===((null===(s=e)||void 0===s?void 0:s.type)||"enter")){this.logger.sendingYield=o(c,void 0,void 0,(function(){var t,e;return i(this,(function(n){switch(n.label){case 0:return t=this.currentUrlPackage.identity,[4,Xt("clearEntryTag",{subPage:t})];case 1:return n.sent(),[4,Xt("consumeEntryTag",{subPage:t})];case 2:return e=n.sent(),this.commonPackage.updateGlobalAttr({entry_tag:e}),[2]}}))}))}}},r.prototype.send=function(t,e,n){if(!this._silenced){var r,o=this.generateLog(t,e);if(this.beforeSend(t,e,o),"RADAR"===t)return this.logger.sendRadar(o,null==e?void 0:e.serviceName);if(!(this.isV2&&this.logConfig.forbidV2HttpUrlPage&&(r=this.currentUrlPackage.page,r&&/^(https?:)?\/\//.test(r)&&(y("[error 108]","请注意当前埋点页面信息为 "+r+"，不符合规范，上报失败！"),1))))if(this.isSendSampled){var i="object"==typeof e&&e.callback||void 0;this.logger.send(o,!!n,i)}}},r.prototype.destroy=function(){t.prototype.destroy.call(this),w(window,"pagehide",this.beforeUnload),w(window,"beforeunload",this.beforeUnload)},r.prototype.silence=function(t){this._silenced=t},r.Logger=xt,r}(I),re=function(){function t(){this.weblog="undefined"!=typeof window&&window._GLOBAL_KS_WEBLOGGER_&&window._GLOBAL_KS_WEBLOGGER_.weblog}return t.prototype.apply=function(t){this.weblog=t},t}(),oe={updateInterval:2e4,crashThreshold:1e4},ie=function(t){function r(e){var r=t.call(this)||this;return r.eventName="onpagehide"in window?"pagehide":"beforeunload",r.options=n({},oe),r.historyMoniorInfo=null,r.stop=function(){clearInterval(r.updateIntervalId);try{localStorage.removeItem(r.monitorId)}catch(t){}},e&&e.logger&&r.apply(e),_(window,r.eventName,r.stop),r}return e(r,t),r.prototype.apply=function(t){t&&(this.weblog=t,this.monitorId="@ks.monitor.crash_"+this.weblog.sessionId,this.start())},r.prototype.destroy=function(){this.stop(),w(window,this.eventName,this.stop)},r.prototype.pickHistoryInfo=function(){for(var t in localStorage)if(0===t.indexOf("@ks.monitor.crash_"))try{var e=localStorage.getItem(t),n=JSON.parse(e);this.checkHistoryCrash(n)}catch(t){}},r.prototype.checkHistoryCrash=function(t){var e=(new Date).valueOf();t&&t.time&&e-t.time>this.options.crashThreshold&&this.weblog.collect("CUSTOM",{key:"crash",value:t})},r.prototype.start=function(){var t=this;this.pickHistoryInfo(),this.updateIntervalId=window.setInterval((function(){t.update()}),this.options.updateInterval),this.update()},r.prototype.update=function(){var t,e;if(window.performance&&window.performance.memory){var n={time:(new Date).valueOf(),memory:{limit:Math.floor(window.performance.memory.jsHeapSizeLimit/1024),total:Math.floor(window.performance.memory.totalJSHeapSize/1024),used:Math.floor(window.performance.memory.usedJSHeapSize/1024)},href:null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.href,sessionId:null===(e=this.weblog)||void 0===e?void 0:e.sessionId};try{localStorage.setItem(this.monitorId,JSON.stringify(n))}catch(t){}}},r.key="crachMonitor",r}(re),ae={interval:1e4,decimals:2};function se(t){return setTimeout(t,62.5)}var ce=clearTimeout,ue=function(t){function r(e,r){var o=t.call(this)||this;return o.options=n({},ae),o.count=0,r||e&&e.logger&&o.apply(e),Object.assign(o.options,r),o.start(),o}return e(r,t),r.prototype.destroy=function(){this.stop()},r.prototype.start=function(){this.loop(),this.fpsTick()},r.prototype.fpsTick=function(){var t=this;this.fpsTickId=function(t){return(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||se).call(this,t)}((function(){t.count++,t.fpsTick()}))},r.prototype.loop=function(){var t=this;this.loopBeginTime=(new Date).valueOf(),this.loopId=window.setTimeout((function(){t.loopEndTime=(new Date).valueOf();var e=t.calculate();t.weblog.collect("CUSTOM",{key:"fps",value:{key:"fps",value:e}}),t.count=0,t.loop()}),this.options.interval)},r.prototype.stop=function(){!function(t){(window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||ce).call(this,t)}(this.fpsTickId),window.clearTimeout(this.loopId)},r.prototype.calculate=function(){return+(1e3/((this.loopEndTime-this.loopBeginTime)/this.count)).toFixed(this.options.decimals)},r.key="fpsMonitor",r}(re),le="undefined"!=typeof window?window.performance:null,pe=le&&le.timing||null;le&&le.getEntriesByType&&le.getEntriesByType("navigation")[0];var de={dnsLookup:{end:"domainLookupEnd",start:"domainLookupStart"},tcpConnection:{end:"connectEnd",start:"connectStart"},resourceLoad:{end:"responseEnd",start:"requestStart"},jsCost:{custom:function(){if("function"!=typeof performance.getEntries)return 0;var t=performance.getEntries(),e=t[0],n=t.filter((function(t){return"script"===t.initiatorType}))[0];return n?e.domComplete-n.fetchStart:0}},documentContentLoaded:{end:"domComplete",start:"fetchStart"},load:{end:"loadEventEnd",start:"fetchStart"},timeToFirstByte:{end:"loadEventEnd",start:"fetchStart"},firstScreen:{custom:function(t,e){var n=(e||{}).endPoint,r=void 0!==n?n:(new Date).valueOf();return pe&&r-pe.fetchStart||0}},whiteScreen:{custom:function(t,e){var n=(e||{}).endPoint,r=void 0!==n?n:(new Date).valueOf();return pe&&r-pe.fetchStart||0}}},fe=function(t){function n(e){var n=t.call(this)||this;return n.load=function(){setTimeout((function(){var t=n.collect();t&&["load","documentContentLoaded","dnsLookup","tcpConnection","jsCost","timeToFirstByte"].forEach((function(e){var r;"jsCost"===e&&0===t[e]||n.weblog.collect("CUSTOM",{key:he[e],value:(r={},r[he[e]]=t[e],r)})}))}))},pe?(e&&n.apply(e),n):(y("The Timing Monitor need performance APIs to Support!"),n)}return e(n,t),n.prototype.apply=function(t){this.weblog=t,_(window,"load",this.load)},n.prototype.destroy=function(){w(window,"load",this.load)},n.prototype.calculate=function(t,e){var n=de[t];if(!n)throw new Error("The perf key is not correct!");return"function"==typeof n.custom?n.custom(t,e):pe[de[t].end]-pe[de[t].start]},n.prototype.mark=function(t,e){var n,r=this.collect(t,e);r&&this.weblog.collect("CUSTOM",{key:he[t],value:(n={},n[he[t]]=r[t],n)})},n.prototype.collect=function(t,e){var n,r=this;if(pe){if(t)return(n={})[t]=this.calculate(t,e),n;return Object.keys(de).reduce((function(t,n){return t[n]=r.calculate(n,e),t}),{})}},n.key="timingMonitor",n}(re),he={load:"total_download_cost",documentContentLoaded:"operational_cost",dnsLookup:"dns_query_cost",tcpConnection:"tcp_cost",jsCost:"js_cost",whiteScreen:"white_screen_cost",firstScreen:"first_screen_cost",timeToFirstByte:"ttfb_cost"};!function(t,e,n){if("undefined"!=typeof window&&void 0!==window._GLOBAL_KS_WEBLOGGER_&&"function"==typeof t){var r=window._GLOBAL_KS_WEBLOGGER_,o=r.weblog,i=r.config,a=e&&i.plugins[e]?i.plugins[e].options:void 0;if("radar"===e){var s=a||o.logConfig[e];if(!s)return;if(s.sampling=s.sampling||1,!t.samplingControl(s))return o.plug(n)}o.addPluginInstance(new t(a))}}(fe);var ge=function(){var t="undefined"!=typeof window?window.performance:null;if(t&&t.timing){if("function"==typeof t.timing.toJSON){var e=t.timing.toJSON();return e&&!e.redirectStart&&(e.redirectStart=e.navigationStart),e}return t.timing}return null};var me,ve,ye,_e="radar_log";!function(t){t.LOAD="load",t.RES="resource",t.API="api",t.ERROR="error",t.SDK_ERROR="sdk_error",t.CUSTOM="custom",t.BATCH="batch",t.EVENT="event"}(me||(me={})),function(t){t.LOAD="load_statistics",t.RES="resource_statistics",t.API="api_statistics",t.ERROR="error_statistics",t.SDK_ERROR="sdk_error",t.CUSTOM="custom_statistics"}(ve||(ve={})),function(t){t.SCRIPT="script",t.RES="res",t.API="api",t.VIDEO="video"}(ye||(ye={}));var we,Se,be={redirect:{end:"fetchStart",start:"navigationStart"},dns:{end:"domainLookupEnd",start:"domainLookupStart"},dns_start:{end:"domainLookupEnd",start:"navigationStart"},tcp:{end:"connectEnd",start:"connectStart"},tcp_start:{end:"connectEnd",start:"navigationStart"},redirect_count:{custom:function(t,e){return e.redirectCount}},ssl:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ssl_start:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.secureConnectionStart-e.redirectStart}},ttfb:{end:"responseStart",start:"requestStart"},trans:{end:"responseEnd",start:"responseStart"},dom_parse:{end:"domInteractive",start:"responseEnd"},dom_parse_start:{end:"domInteractive",start:"navigationStart"},blank:{end:"domLoading",start:"navigationStart"},fb:{end:"responseStart",start:"navigationStart"},dom_ready:{end:"domContentLoadedEventEnd",start:"navigationStart"},total:{end:"loadEventStart",start:"navigationStart"},resource:{end:"loadEventStart",start:"domContentLoadedEventEnd"},fp:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=performance.getEntries().filter((function(t){return"first-paint"===t.name}))[0];return t?Math.ceil(t.startTime+t.duration):null}},js_cost:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=ge(),e=performance.getEntries(),n=performance.getEntries().filter((function(t){return"navigation"===t.initiatorType}))[0],r=e.filter((function(t){return"script"===t.initiatorType}))[0],o=n?n.domComplete:t.domComplete-t.navigationStart;return r&&o?o-r.fetchStart:null}},tti:{end:"domInteractive",start:"navigationStart"},protocol:{custom:function(t,e){return e.nextHopProtocol}},dom_num:{custom:function(){return"undefined"!=typeof document?document.all.length:null}}},Ee={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)}},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},ke={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)},noThrottle:!0},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},Pe=["//wlog.kuaishou.com/rest/n/log/web/collect","/rest/wd/common/log/collect/misc2","/rest/wd/common/log/collect/radar","/rest/kd/log/collect"],Oe={to_webview_page_start:{end:"pageStart",start:"userStart"},to_webview_page_show:{end:"pageShow",start:"userStart"},to_webview_pre_create:{end:"preCreate",start:"userStart"},to_webview_created:{end:"created",start:"userStart"},to_webview_start_load:{end:"startLoad",start:"userStart"},to_webview_did_start_load:{end:"didStartLoad",start:"userStart"},to_webview_did_end_load:{end:"didEndLoad",start:"userStart"},to_navigation_start:{end:"navigationStart",start:"userStart"},to_fetch_start:{end:"fetchStart",start:"userStart"},to_connect_start:{end:"connectStart",start:"userStart"},to_dom_ready:{end:"domContentLoadedEventEnd",start:"userStart"},to_total:{end:"loadEventStart",start:"userStart"},to_fmp:{end:"radarFmp",start:"userStart",notCatchIfUndefined:!0},to_main_data_receive_end:{end:"main_data_receive_end",start:"userStart",notCatchIfUndefined:!0}},Te={navigation_start_time:"navigationStart",fetch_start_time:"fetchStart",dns_start_time:"domainLookupStart",dns_end_time:"domainLookupEnd",connect_start_time:"connect_start",ssl_start_time:"secureConnectionStart",request_start_time:"requestStart",response_start_time:"responseStart",response_end_time:"responseEnd",dom_interactive_time:"domInteractive",dom_loading_time:"domLoading",dom_ready_time:"domContentLoadedEventEnd",load_event_time:"loadEventStart",fmp_time:"radarFmp"},Le=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},Ce=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:e,delta:0,entries:[],id:Le(),isFinal:!1}},Ne=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},Ue=!1,Re=!1,xe=function(t){Ue=!t.persisted},Ie=function(){addEventListener("pagehide",xe),addEventListener("beforeunload",(function(){}))},Ae=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Re||(Ie(),Re=!0),addEventListener("visibilitychange",(function(e){var n=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:Ue})}),{capture:!0,once:e})},De=function(t,e,n,r){var o;return function(){n&&e.isFinal&&n.disconnect(),e.value>=0&&(r||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(o||0),(e.delta||e.isFinal||void 0===o)&&(t(e),o=e.value))}},Me=function(){return void 0===we&&(we="hidden"===document.visibilityState?0:1/0,Ae((function(t){var e=t.timeStamp;return we=e}),!0)),{get timeStamp(){return we}}},je=function(){return Se||(Se=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})}))}))),Se},Ke=/^(https?:)?\/\//;function We(t){if("string"!=typeof t)return"";try{var e=t.lastIndexOf(".");return t.substr(e+1)}catch(t){return""}}function Ve(t,e){if(!t)return!1;var n=t.replace(Ke,"");return e.some((function(t){return n.indexOf(t)>=0}))}var Ge={};function Fe(t,e){var n=Ge[t];n?n.endTime||(n.endTime=(new Date).getTime(),n.duration=n.endTime-n.startTime,delete n.startTime,delete n.endTime):Ge[t]={startTime:(new Date).getTime()}}var Be={},He=[{name:"fid",collectFn:function(t){var e=Ce("FID"),n=Me(),r=function(t){t.startTime<n.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,i())},o=Ne("first-input",r),i=De(t,e,o);o?Ae((function(){o.takeRecords().map(r),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,r){r.timeStamp<n.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+t}],i())}))}},{name:"lcp",collectFn:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Ce("LCP"),o=Me(),i=function(t){var n=t.startTime;n<o.timeStamp?(r.value=n,r.entries.push(t)):r.isFinal=!0,e()},a=Ne("largest-contentful-paint",i);if(a){e=De(t,r,a,n);var s=function(){r.isFinal||(a.takeRecords().map(i),r.isFinal=!0,e())};je().then(s),Ae(s,!0)}}},{name:"cls",collectFn:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Ce("CLS",0),o=function(t){t.hadRecentInput||(r.value+=t.value,r.entries.push(t),e())},i=Ne("layout-shift",o);i&&(e=De(t,r,i,n),Ae((function(t){var n=t.isUnloading;i.takeRecords().map(o),n&&(r.isFinal=!0),e()})))}},{name:"fcp",collectFn:function(t){var e,n=Ce("FCP"),r=Me(),o=Ne("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<r.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),e())}));o&&(e=De(t,n,o))}}],qe=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=E(location.search.slice(1));1==+r.debug&&v.apply(void 0,a(["[radar] "+t+": "],e))};var Je=function(){var t=window.navigator.userAgent,e={};return t.split(" ").map((function(t){var n=t.split("/");e[n[0]]=n[1]})),e},Qe=function(){var t=window.navigator.userAgent;if(-1!==t.indexOf("Android"))return"WebView";if(-1!==t.indexOf("iPhone")){var e=Je();return e.Yoda&&"WK"===e.WebViewType?"YodaWKWebView":e.Yoda||"WKWebView"!==e.WebView?"UIWebView":"WKWebView"}return""},ze=function(t,e){var n={};return Object.keys(e).forEach((function(r){t[e[r]]>0&&(n[r]=t[e[r]])})),n};function Ye(t){return Array.isArray(t)?t.map((function(t){var e=t.tagName,n=void 0===e?"":e,r=t.id,o=t.getAttribute?t.getAttribute("class"):t.className||"",i=n.toLowerCase();return r&&(i+="#"+r),o&&(i+=o.split(/\s+/g).map((function(t){return"."+t})).join("")),i})).filter((function(t){return t})).join(","):""}function Xe(t){return JSON.parse(JSON.stringify(t))}var $e=function(t){try{if(window&&window.localStorage&&"undefined"!=typeof Storage&&window.localStorage instanceof Storage){var e=Number(function(t){try{if(window&&window.localStorage){var e=window.localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(t){return e}}}catch(t){return null}return null}(t))||0;return e+1>1e8&&(e=0),function(t,e){try{if(window&&window.localStorage)return window.localStorage.setItem(t,JSON.stringify(e)),!0}catch(t){return!1}}(t,e+1),e}}catch(t){}},Ze={},tn=function(t){return Ze[t]||(Ze[t]=0),Ze[t]++};function en(t){if(!(null==t?void 0:t.name))throw new Error("[Radar] 关键动作上报必须配置name");if((null==t?void 0:t.extra_info)&&!(t.extra_info instanceof Object))throw new Error("[Radar] 关键动作上报 extra_info 必须为 plain object")}var nn,rn,on=function(){function t(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.middlewares=[],(t=this.middlewares).push.apply(t,e)}return t.prototype.use=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=this.middlewares.pop();(t=this.middlewares).push.apply(t,e),this.middlewares.push(r)},t.prototype.invoke=function(t){var e;return(e=this.middlewares,function(t,n){var r=-1;return function o(i){if(i<=r)return new Error("`next` 被重复调用");r=i;var a=e[i];if(i===e.length&&(a=n),a)try{return a(t,o.bind(null,i+1))}catch(t){return t}}(0)})(t)},t}(),an=["KUAISHOU","THANOS","NEBULA"],sn=function(t){function r(e,r){var o,i,s=t.call(this)||this;return s.kpn="",s.plugins=[],s.logQueue=[],s.logQueueNext=[],s.queueConfig={wait:1e3,maxBatchLength:200},s.eventName="onpagehide"in window?"pagehide":"beforeunload",s.batchTimer=0,s.batchTimerNext=0,s.startedLoadReport=!1,s.radarSessionId="",s.radarSessionIdNext="",s.chromeMetric=He,s.isInKwai=!1,s.isUsingBridge=null,s.isUsingLegacy=null,s.isUsingDetachedReport=null,s.isSupportedYodaConcat=null,s.customDimension={},s.webviewData=null,s.webviewStart=null,s.webviewStartTime=null,s.finalSampling={},s.sampleData=null,s.sampleList=[me.LOAD,me.API,me.CUSTOM,me.ERROR,me.EVENT,me.RES],s.defaultSampleList={load:1,api:1,resource:.1,error:1,event:1,custom:1,isHit:!0},s.ignoreList=["https://web-trace.ksapisrv.com/ktrace/collect"],s.lastRadarLogId="",s.computedSamplingAgain=!0,s.realSampledList=[],s.hasFmp=!1,s.customPerfList={},s.observeResource=function(t){t.getEntriesByType("resource").forEach((function(t){return s.reportPerformance(t)}))},s.asyncReportTiming=function(){Fe("radarCreatedToOnload"),Fe("onloadToFirstReport"),setTimeout((function(){Fe("asyncReportTiming"),s.reportPerformance(ge()),s.startedLoadReport=!0;try{s.observeResource(performance),s.observeChromeMetrics(s.chromeMetric),new PerformanceObserver(s.observeResource).observe({entryTypes:["resource"]})}catch(t){}Fe("radarCreatedToFirstReport"),Fe("onloadToFirstReport"),Fe("asyncReportTiming")}),0)},s.chromeMetricCallback=function(t){var e,n,r=t.name,o=t.value;r=r.toLocaleLowerCase();var i={key:me.CUSTOM,value:(e={},e[r]=o,e)};s.logCollect(i),s.logCollectNext({key:me.EVENT,dimension:{name:r},value:{duration:o}}),Fe(r+"Collect"),function(t){Object.assign(Be,t)}(((n={})[r]=o,n))},s.observeChromeMetrics=function(t){var e=s.options;t.forEach((function(t){var n=t.name;e&&!e[n]||(Fe(n+"Collect"),t.collectFn(s.chromeMetricCallback))}))},s.asyncMetricCollectDone=function(){var t={};Object.keys(Ge).forEach((function(e){var n=Ge[e];!n.duration&&n.startTime&&(n.duration=0,delete n.startTime),t[e]=n.duration}));var e={key:me.CUSTOM,value:t};s.logCollect(e),s.flush(),s.weblog.flush(),w(window,s.eventName,s.asyncMetricCollectDone)},s.flush=function(){if(s.beforeFlush(),s.options&&!(s.logQueue.length<=0)&&s.startedLoadReport){var t=JSON.stringify(n(n({},s.weblog.commonPackage.getH5ExtraAttr()),{url:location.href,hash:location.hash,webviewStart:s.webviewStart,webviewStartTime:s.webviewStartTime,sampling_list:s.finalSampling?JSON.stringify(s.finalSampling):""})),e={project_id:s.options.projectId,radar_session_id:s.radarSessionId,h5_extra_attr:t},r=s.weblog.commonPackage,o=r.service_name,i=r.sub_biz,c=r.need_encrypt,u=r.app_package,l=s.currentUrlPackage&&s.currentUrlPackage.toJSON(),p=null;s.options.httpReportFirst||(p=s.addRadarStatEvent({key:_e,value:n(n({},e),{data:a(s.logQueue),url_package:l,app_version_name:u.version_name}),serviceName:o||"",subBiz:i||"",needEncrypt:c||!1,container:u.container,realtime:!1,h5ExtraAttr:t})),p&&!s.options.httpReportFirst||s.weblog.collect("RADAR",{name:_e,params:n(n({},e),{data:a(s.logQueue)}),currentUrlPackage:l,referUrlPackage:s.referUrlPackage&&s.referUrlPackage.toJSON(),serviceName:o||"radar_service_name"}),s.logQueue=[]}},s.flushNext=function(){if(s.options&&!(s.logQueueNext.length<=0)){var t=null;s.options.httpReportFirst||(t=s.reportByBridge()),t&&!s.options.httpReportFirst||s.reportByHttp(),s.logQueueNext=[]}},s.getCommonData=function(){var t,e=s.weblog.commonPackage.app_package,r=JSON.stringify(n(n({},s.weblog.commonPackage.getH5ExtraAttr()),{app_version_name:e.version_name,url:location.href,hash:location.hash,online:null===navigator||void 0===navigator?void 0:navigator.onLine})),o=s.currentUrlPackage&&s.currentUrlPackage.toJSON(),i=null===(t=s.options)||void 0===t?void 0:t.projectId;return{h5_extra_attr:r,url_package:o,app_version_name:e.version_name,project_id:i}},r&&(o=r),e&&(e.logger?s.apply(e):o=e),Fe("radarCreatedToFirstReport"),Fe("radarCreatedToOnload"),s.options=o,s.queueConfig=n(n({},s.queueConfig),s.options?s.options.queue:{}),s.ignoreList=s.ignoreList.concat((void 0===(i=s.options&&s.options.ignoreList)&&(i=[]),i.concat(Pe).map((function(t){return t.replace(Ke,"")})))),s}return e(r,t),Object.defineProperty(r.prototype,"KSwitchSampled",{get:function(){return this.weblog.currentUrlPackage.sampled},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isKSwitchSampled",{get:function(){return this.weblog.isKSwitchSampled},enumerable:!1,configurable:!0}),r.prototype.samplingControl=function(t){if(!t)return!1;var e=Math.random();return"number"==typeof t?e<t:e<t.sampling},r.prototype.use=function(t,e){var n=new t(e,this.options);this.plugins.push(n),this.weblog&&n.created()},r.prototype.apply=function(t){var e,n;this.weblog=t,this.kpn=this.weblog.Utils.ua.getDefaultKpn(),this.isInKwai=an.indexOf(this.kpn)>=0,this.upadteUrlPackage(),this.register(),this.ignoreList.push(null===(n=null===(e=this.weblog)||void 0===e?void 0:e.logger)||void 0===n?void 0:n.url),this.created()},r.prototype.created=function(){this.plugins.forEach((function(t){t.created()}))},r.prototype.destroy=function(){w(window,"load",this.asyncReportTiming),this.plugins.forEach((function(t){t.destroy()}))},r.prototype.computedRealSampled=function(t,e){if(this.isKSwitchSampled){var n=void 0;if("object"==typeof this.KSwitchSampled&&this.KSwitchSampled.radar){var r=this.KSwitchSampled.radar.all;r="number"!=typeof r?1:r;var o=this.KSwitchSampled.radar[e];n="number"!=typeof o?r:o*r}else n=this.KSwitchSampled?1:0;return n*t}return 1},r.prototype.getWebviewData=function(){if(window.__yodaCommonDataObject__&&window.__yodaCommonDataObject__.pageLoadData){var t=null;try{var e=window.__yodaCommonDataObject__.pageLoadData;t="string"==typeof e?JSON.parse(e):e}catch(t){return}var r=t.created,o=t.pageStart,i=t.userStart;this.webviewData=n({webviewStart:i||o||r},t);var a={key:me.EVENT,value:null,dimension:{name:"客户端数据注入成功",event_type:"radar_inject_success"}};this.logCollect(a),this.logCollectNext(a)}},r.prototype.getSampleData=function(){var t=this,e=this.weblog.Utils.yoda;if(e&&(this.sampleData=this.defaultSampleList,window.updateYodaSampleRateWithParams=function(e){t.updateSampleData(e),t.handleSample()}),window.__yodaCommonDataObject__&&window.__yodaCommonDataObject__.sampleData){this.updateSampleData(),this.handleSample();var n={key:me.EVENT,value:null,dimension:{name:"客户端采样率注入成功",event_type:"radar_sample_inject_success"}};this.logCollect(n),this.logCollectNext(n)}else e&&e.getWebviewLoadPerf().then((function(e){e.sampleData&&(t.updateSampleData(e.sampleData),t.handleSample())}))},r.prototype.updateSampleData=function(t){var e=this,n=null;try{var r=window.__yodaCommonDataObject__.sampleData||t;n="string"==typeof r?JSON.parse(r):r}catch(t){return}this.sampleData=this.defaultSampleList,n&&Object.keys(n).forEach((function(t){e.sampleData[t]=n[t]}))},r.prototype.register=function(){return o(this,void 0,void 0,(function(){var t,e,n;return i(this,(function(r){switch(r.label){case 0:return ge()?("undefined"!=typeof window&&window.yodaCollectErrorDataDestroy&&window.yodaCollectErrorDataDestroy(),performance.timing.loadEventStart>0?this.asyncReportTiming():_(window,"load",this.asyncReportTiming),this.options&&this.options.radarCost&&_(window,this.eventName,this.asyncMetricCollectDone),_(window,this.eventName,this.flush),_(window,this.eventName,this.flushNext),this.getSampleData(),this.getWebviewData(),this.radarSessionId=this.nanoId(),this.radarSessionIdNext=this.uuid(),(t=this.weblog.Utils.yoda)?[3,1]:(this.isUsingBridge=!1,this.isSupportedYodaConcat=!1,this.isUsingLegacy=!1,[3,6])):[2];case 1:return null!=this.isUsingBridge?[3,3]:(e=this,[4,t.isSupportBridgeLog()]);case 2:e.isUsingBridge=r.sent(),r.label=3;case 3:return null!=this.isSupportedYodaConcat?[3,5]:(n=this,[4,t.isSupportBridge("sendRadarLog")]);case 4:n.isSupportedYodaConcat=r.sent(),r.label=5;case 5:this.isUsingLegacy=this.isUsingBridge&&!this.isSupportedYodaConcat,r.label=6;case 6:return this.isUsingDetachedReport=this.isInKwai&&!this.isUsingBridge||this.isUsingLegacy,[2]}}))}))},r.prototype.throttle=function(t,e,n,r){if(void 0===r&&(r={}),e.noThrottle||"number"!=typeof t)return t;var o=r.startPoint,i=r.endPoint;if(t>6e4||t<0||isNaN(t)){if(Math.random()<.1){var a="["+n+" 异常]: "+t+"，原始数据为："+e.end+": "+i+" - "+e.start+": "+o,s={key:me.EVENT,value:null,dimension:{name:"雷达数据异常",event_type:"radar_error",message:a,src:location.href,webViewType:Qe(),yoda_version:Je().yoda_version||""}};this.logCollect(s),this.logCollectNext(s)}return null}return Math.round(t)},r.prototype.reportPerformance=function(t){this.plugins.forEach((function(e){t&&e.when(t)&&e.onPerfReport(t)}))},r.prototype.calculate=function(t,e,n){var r=e[t];if(r){if(r.cachedSkip)if(this.calculate("cached",e,n))return;if("function"==typeof r.custom){var o=r.custom(t,n);return this.throttle(o,r,t)}var i=r.end,a=r.start,s=+n[i]||performance.timing[i],c=+n[a]||performance.timing[a],u=s-c;if(!r.notCatchIfUndefined||void 0!==s&&void 0!==c)return this.throttle(u,r,t,{startPoint:c,endPoint:s})}else y("[warn 310]","[Radar] perf key "+t+" is unexpected!")},r.prototype.calculateNext=function(t,e,n){var r=e[t];if(r){if(r.cachedSkip)if(this.calculateNext("cached",e,n))return;if("function"==typeof r.custom)return r.custom(t,n);var o=r.end,i=r.start,a=+n[o]||performance.timing[o],s=+n[i]||performance.timing[i],c=a-s;if(!r.notCatchIfUndefined||void 0!==a&&void 0!==s)return c}},r.prototype.generateLog=function(t,e,n){var r=this;void 0===n&&(n=!0);var o={};return Object.keys(t).forEach((function(i){var a=i,s=n?r.calculate(a,t,e):r.calculateNext(a,t,e);null!=s&&(o[a]=s)})),o},r.prototype.subDimension=function(t){this.customDimension&&(t.dimension||(t.dimension={}),Object.assign(t.dimension,this.customDimension))},r.prototype.nanoId=function(){for(var t=1e9*Math.random()>>>0,e=[],n=0;n<7;n++)e.push("0123456789ABCDEF".charAt(16*Math.random()));return t+e.join("")},r.prototype.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))},r.prototype.beforeFlush=function(){var t=this;if(this.computedSamplingAgain){var e={radarLoadSampling:{sampling:1,type:"load"},radarApiSampling:{sampling:this.options&&this.options.apiSampling||1,type:"api"},radarErrorSampling:{sampling:this.options&&this.options.errorSampling||1,type:"error"},radarResourceSampling:{sampling:this.options&&this.options.resourceSampling||.1,type:"resource"},radarCustomSampling:{sampling:this.options&&this.options.customSampling||1,type:"custom"},radarEventSampling:{sampling:this.options&&this.options.eventSampling||1,type:"event"}};this.realSampledList=[],Object.keys(e).forEach((function(n){var r=t.isKSwitchSampled?t.computedRealSampled(e[n].sampling,e[n].type):e[n],o=t.samplingControl(r);t.finalSampling[e[n].type]=r,o&&t.realSampledList.push(e[n].type)})),this.isKSwitchSampled&&(this.computedSamplingAgain=!1)}this.logQueue=this.logQueue.filter((function(e){return-1!==t.realSampledList.indexOf(e.key)}))},r.prototype.upadteUrlPackage=function(){this.weblog&&(this.computedSamplingAgain=!0,this.currentUrlPackage=this.weblog.currentUrlPackage,this.referUrlPackage=this.weblog.referUrlPackage)},r.prototype.decorateLog=function(t){this.currentUrlPackage||this.upadteUrlPackage(),this.customDimension&&this.subDimension(t),this.currentUrlPackage&&this.currentUrlPackage.page!==this.weblog.currentUrlPackage.page&&(this.flushNext(),this.flush(),this.upadteUrlPackage())},r.prototype.logCollect=function(t){var e=this;if(this.options){this.decorateLog(t);try{window.dispatchEvent(new CustomEvent("get-radar-data",{detail:{kv:t}}))}catch(t){}var n=!0;if("load"===t.key)for(var r=0;r<this.logQueue.length;r++){var o=this.logQueue[r];if("load"===o.key){Object.assign(o,t),n=!1;break}}n&&this.logQueue.push(t),qe("radarLog",JSON.parse(JSON.stringify(t))),this.batchTimer||(this.logQueue.length>this.queueConfig.maxBatchLength?this.flush():this.batchTimer=window.setTimeout((function(){e.flush(),clearTimeout(e.batchTimer),e.batchTimer=0}),this.queueConfig.wait))}},r.prototype.addRadarStatEvent=function(t){var e=this;try{var r=this.weblog.Utils.yoda;if(!r)return!1;var o=function(t){var e,r;if(!t.value)return t;var o=t.value,i=function(t){var e,n=[];return t.forEach((function(t){"load"===t.key?e=t:n.push(t)})),[e,n]}(o.data),a=i[0],s=i[1],c={project_id:o.project_id,app_version_name:o.app_version_name,url_package:o.url_package,h5_extra_attr:t.h5ExtraAttr};return{loadLog:a?{removeStashedLog:[],sendImmediate:null!==(r=null===(e=a.dimension)||void 0===e?void 0:e.sendImmediate)&&void 0!==r&&r,customData:n({data:[a]},c)}:null,commonLog:s.length?{removeStashedLog:[],sendImmediate:!0,customData:n({data:s},c)}:null}}(t),i=o.loadLog,a=o.commonLog;if(i){if(this.lastRadarLogId&&(i.removeStashedLog=[this.lastRadarLogId],i.sendImmediate)){var s={removeStashedLog:[this.lastRadarLogId],sendImmediate:!1,customData:{"":""}};r.sendRadarLog(s).then((function(t){t&&t.logId&&(e.lastRadarLogId=t.logId)}))}r.sendRadarLog(i).then((function(t){t&&t.logId&&(e.lastRadarLogId=t.logId)}))}return a&&r.sendRadarLog(a),!0}catch(t){return!1}},r.prototype.calculateSample=function(t){var e=(null==t?void 0:t.load)||1,n={};return t&&Object.keys(t).forEach((function(r){var o=t[r]/e;n[r]=o>1?1:o})),n},r.prototype.handleSample=function(){var t,e,n,r,o,i,a,s,c=this,u=this.weblog.Utils.yoda;u||this.sampleData||(this.sampleData={load:(null===(t=this.options)||void 0===t?void 0:t.sampling)||1,api:(null===(e=this.options)||void 0===e?void 0:e.apiSampling)||1,resource:(null===(n=this.options)||void 0===n?void 0:n.resourceSampling)||.1,error:(null===(r=this.options)||void 0===r?void 0:r.errorSampling)||1,event:(null===(o=this.options)||void 0===o?void 0:o.eventSampling)||1,custom:(null===(i=this.options)||void 0===i?void 0:i.customSampling)||1}),s=this.calculateSample(this.sampleData),a={radarLoadSampling:{sampling:1,type:"load"},radarApiSampling:{sampling:(null==s?void 0:s.api)||1,type:"api"},radarErrorSampling:{sampling:(null==s?void 0:s.error)||1,type:"error"},radarResourceSampling:{sampling:(null==s?void 0:s.resource)||.1,type:"resource"},radarCustomSampling:{sampling:(null==s?void 0:s.custom)||1,type:"custom"},radarEventSampling:{sampling:(null==s?void 0:s.event)||1,type:"event"}},this.sampleList=[],Object.keys(a).forEach((function(t){var e=a[t];c.samplingControl(e)&&c.sampleList.push(a[t].type)}))},r.prototype.logCollectNext=function(t){var e=this,r=Xe(t);if(this.options&&(!this.sampleData||!1!==this.sampleData.isHit)&&this.sampleList.some((function(t){return t===r.key}))){var o=this.getCommonData(),i=o.app_version_name;delete o.app_version_name;var a=new on((function(t,r){return t.dimension.app_version_name=i,t=n(n(n({},t),o),{event_client_timestamp:Date.now(),event_trigger_source:"H5",radar_session_id:e.radarSessionIdNext})}));if(a.use((function(t,e){return t.key&&"load"===t.key&&(t.dimension=n(n({},t.dimension),{load_device_increase_id:$e("LOAD_DEVICE_INCREASE_ID"),load_session_increase_id:tn("LOAD_SESSION_INCREASE_ID")})),t.key&&"load"!==t.key&&(t.dimension=n(n({},t.dimension),{other_device_increase_id:$e("OTHER_DEVICE_INCREASE_ID"),other_session_increase_id:tn("OTHER_SESSION_INCREASE_ID")})),e()}),(function(t,n){return t.dimension.sample_rate=e.sampleData&&e.sampleData[t.key]||1,n()})),(r=a.invoke(r))instanceof Error)throw r;this.decorateLog(r);try{window.dispatchEvent(new CustomEvent("get-radar-next-data",{detail:{kv:r}}))}catch(t){}var s=!0;if("load"===r.key)for(var c=0;c<this.logQueueNext.length;c++){var u=this.logQueueNext[c];if("load"===u.key){Object.assign(u,r),s=!1;break}}s&&this.logQueueNext.push(r),qe("radarLogNext",JSON.parse(JSON.stringify(r))),this.batchTimerNext||(this.logQueueNext.length>this.queueConfig.maxBatchLength?this.flushNext():this.batchTimerNext=window.setTimeout((function(){e.flushNext(),clearTimeout(e.batchTimerNext),e.batchTimerNext=0}),this.queueConfig.wait))}},r.prototype.reportByHttp=function(){var t,e=this.getCommonData(),n={project_id:null===(t=this.options)||void 0===t?void 0:t.projectId,radar_session_id:this.radarSessionIdNext,h5_extra_attr:e.h5_extra_attr},r=this.logQueueNext.filter((function(t){return"load"===t.key})),o=this.logQueueNext.filter((function(t){return"load"!==t.key}));Array.isArray(r)&&r.length&&this.collectLog(n,r,"radarSDK"),Array.isArray(o)&&o.length&&this.collectLog(n,o,"radarSDKSupplement")},r.prototype.collectLog=function(t,e,r){this.weblog.collect("RADAR",{name:_e,params:n(n({},t),{data:a(e)}),serviceName:r})},r.prototype.reportByBridge=function(){var t=this.weblog.Utils.yoda;if(!t)return!1;var e=this.logQueueNext.filter((function(t){return"load"===t.key})),n=this.logQueueNext.filter((function(t){return"load"!==t.key}));if(!e.length&&!n.length)return!0;try{if(e.length){var r=e[0];t.sendSummarizedLog({key:"h5_load",data:r})}return n.length&&t.sendRadarLog({data:n}),!0}catch(t){return!1}},r}(re),cn=function(t,e){this.radar=t,this.options=e},un=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="navigation",e.logData={},e.logSended=!1,e.saveWebviewEntry={},e.hasReportBase=!1,e.record={fmp:!1,base:!1,webviewPerf:!1},e.loadTimeout=null,e.gettingWebview=!1,e.REPEAT_TIME=5,e.getWebviewTimes=e.REPEAT_TIME,e.reportOnUnload=function(t){e.logSended||e.radar.isSupportedYodaConcat||(e.logSended=!0,e.reportFirstScreen(Object.assign(e.logData,Be)),e.radar.logCollect(e.data),"noflush"!==t&&(e.radar.flush(),e.radar.weblog.flush()))},e}return e(n,t),Object.defineProperty(n.prototype,"sendImmediate",{get:function(){return this.record.fmp&&this.record.base&&this.record.webviewPerf&&!(!(t=window.navigator.userAgent.match(/tbht\/([\w]+)/i))||"0"===t[1]);var t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"data",{get:function(){return this.sepDimension({key:me.LOAD,value:this.logData})},enumerable:!1,configurable:!0}),n.prototype.created=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))},n.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;return["fmp","play_clicked","play_idr","webViewPerf"].indexOf(e)>-1}return!t.entryType||"navigation"===t.entryType},n.prototype.getWebviewLoadData=function(){return o(this,void 0,void 0,(function(){var t,e,n,r,o,a,s;return i(this,(function(i){switch(i.label){case 0:return this.record.webviewPerf?[2,!0]:(t=this.radar.weblog.Utils.yoda,(n=t)?[4,t.getWebviewLoadPerf()]:[3,2]);case 1:n=i.sent(),i.label=2;case 2:return(e=n)&&e.timeData?(this.record.webviewPerf=!0,r=e.timeData,o=r.userStart,a=r.pageStart,s=r.created,this.radar.webviewStart="userStart",this.radar.webviewStartTime=o,o||(a?(e.timeData.userStart=a,this.radar.webviewStart="pageStart",this.radar.webviewStartTime=a):(e.timeData.userStart=s,this.radar.webviewStart="created",this.radar.webviewStartTime=s)),this.onPerfReport({custom:!0,entry:{key:"webViewPerf",value:e.timeData}}),[2,!0]):[2,!1]}}))}))},n.prototype.webviewPatch=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return this.gettingWebview?[2]:(this.gettingWebview=!0,[4,this.repeatWebview()]);case 1:return t.sent(),this.gettingWebview=!1,[2]}}))}))},n.prototype.repeatWebview=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.getWebviewLoadData()];case 1:return!t.sent()&&this.getWebviewTimes>0?(this.getWebviewTimes--,[4,this.repeatWebview()]):[3,3];case 2:t.sent(),t.label=3;case 3:return this.getWebviewTimes=this.REPEAT_TIME,[2]}}))}))},n.prototype.onPerfReport=function(t){return o(this,void 0,void 0,(function(){var e,n,r,o,a,s,c,u,l,p=this;return i(this,(function(i){if(t.custom){if((e=t.entry)&&(n=e.key,r=e.value,o=t.renderTime,"fmp"===n&&(performance.timing.radarFmp=o,this.record.fmp=!0,u=ze(performance.timing,Te),Object.assign(this.logData,((l={})[n]=r,l),u),this.webviewPatch(),this.record.webviewPerf&&(s=this.radar.generateLog(Oe,this.saveWebviewEntry),Object.assign(this.logData,s))),"webViewPerf"===n)){if(!(a=e.value))return[2];this.saveWebviewEntry=a,s=this.radar.generateLog(Oe,a),Object.assign(this.logData,s)}}else c=this.radar.generateLog(be,t),u=ze(performance.timing,Te),Object.assign(this.logData,c,u),this.record.base=!0;return this.radar.isSupportedYodaConcat?(this.webviewPatch(),this.radar.logCollect(this.data)):this.radar.isUsingDetachedReport&&this.record.webviewPerf&&this.record.fmp&&this.record.base?this.reportOnUnload("noflush"):this.record.fmp&&this.record.base&&!this.hasReportBase?(clearTimeout(this.loadTimeout),this.loadTimeout=null,this.loadReport()):!this.hasReportBase&&this.record.base&&(this.loadTimeout=setTimeout((function(){p.loadReport(),p.hasReportBase=!0}),2e3)),[2]}))}))},n.prototype.destroy=function(){clearTimeout(this.delay)},n.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.protocol;return{key:e,value:r(n,["protocol"]),dimension:{protocol:o,sendImmediate:this.sendImmediate}}},n.prototype.reportFirstScreen=function(t){if(t.play_clicked&&t.play_idr){var e=t.play_idr-t.play_clicked;e>0&&e<6e4&&(this.logData.play_first_screen=e)}},n.prototype.loadReport=function(){Object.assign(this.logData,Be),this.radar.logCollect(Xe(this.data)),this.radar.flush(),this.radar.weblog.flush()},n}(cn);!function(t){t.LOAD="load",t.RES="resource",t.API="api",t.ERROR="error",t.SDK_ERROR="sdk_error",t.CUSTOM="custom",t.BATCH="batch",t.EVENT="event"}(nn||(nn={})),function(t){t.SCRIPT="script",t.RES="res",t.API="api",t.VIDEO="video"}(rn||(rn={}));var ln={redirect:{end:"redirectEnd",start:"redirectStart"},dns:{end:"domainLookupEnd",start:"domainLookupStart"},dns_start:{end:"domainLookupEnd",start:"navigationStart"},tcp:{end:"connectEnd",start:"connectStart"},tcp_start:{end:"connectEnd",start:"navigationStart"},redirect_count:{custom:function(t,e){return e.redirectCount}},ssl:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.requestStart-e.secureConnectionStart}},ssl_start:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.secureConnectionStart-e.redirectStart}},ttfb:{end:"responseStart",start:"requestStart"},request_start:{end:"requestStart",start:"navigationStart"},trans:{end:"responseEnd",start:"responseStart"},dom_parse:{end:"domInteractive",start:"responseEnd"},dom_parse_start:{end:"domInteractive",start:"navigationStart"},blank:{end:"domLoading",start:"navigationStart"},fb:{end:"responseStart",start:"navigationStart"},dom_ready:{end:"domContentLoadedEventEnd",start:"navigationStart"},total:{end:"loadEventStart",start:"navigationStart"},resource:{end:"loadEventStart",start:"domInteractive"},fp:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=performance.getEntries().filter((function(t){return"first-paint"===t.name}))[0];return t?Math.ceil(t.startTime+t.duration):null}},js_cost:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=ge(),e=performance.getEntries(),n=performance.getEntries().filter((function(t){return"navigation"===t.initiatorType}))[0],r=e.filter((function(t){return"script"===t.initiatorType}))[0],o=n?n.domComplete:t.domComplete-t.navigationStart;return r&&o?o-r.fetchStart:null}},tti:{end:"domInteractive",start:"navigationStart"},protocol:{custom:function(t,e){return e.nextHopProtocol}},dom_num:{custom:function(){return"undefined"!=typeof document?document.all.length:null}}},pn={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)},noThrottle:!0},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.requestStart-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},dn={main_api:{end:"apiEnd",start:"apiStart"},main_api_offset:{end:"apiStart",start:"domLoading"}},fn={navigation_start_time:"navigationStart",fetch_start_time:"fetchStart",dns_start_time:"domainLookupStart",dns_end_time:"domainLookupEnd",connect_start_time:"connect_start",ssl_start_time:"secureConnectionStart",request_start_time:"requestStart",response_start_time:"responseStart",response_end_time:"responseEnd",dom_interactive_time:"domInteractive",dom_loading_time:"domLoading",dom_ready_time:"domContentLoadedEventEnd",load_event_time:"loadEventStart",fmp_time:"radarFmp"},hn=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="navigation-radar-plus",e.logData={},e}return e(n,t),Object.defineProperty(n.prototype,"data",{get:function(){return this.sepDimension({key:nn.LOAD,value:this.logData})},enumerable:!1,configurable:!0}),n.prototype.created=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){return this.onPerfReport({custom:!0,entry:{key:"radar_init",value:null}}),[2]}))}))},n.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;return["fmp","customPerf"].indexOf(e)>-1}return!t.entryType||"navigation"===t.entryType},n.prototype.onPerfReport=function(t){return o(this,void 0,void 0,(function(){var e,n,r,o,a,s;return i(this,(function(i){return t.custom?(e=t.entry)&&(n=e.key,r=e.value,o=t.renderTime,"radar_init"===n&&Object.assign(this.logData,{event_name:"radar_init"}),"fmp"===n&&(performance.timing.radarFmp=o,a=this.radar.generateLog(dn,performance.timing,!1),Object.assign(this.logData,((s={})[n]=r,s),{event_name:"fmp"},a)),"customPerf"===n&&Object.assign(this.logData,{event_name:"h5_custom_metric",custom_metric_name:r,custom_metric_timestamp:this.radar.customPerfList[r].time})):Object.assign(this.logData,{event_name:"h5_load"}),this.getCommonLog(t),this.loadReport(),[2]}))}))},n.prototype.destroy=function(){},n.prototype.getCommonLog=function(t){var e=this.radar.generateLog(ln,t,!1),n=ze(performance.timing,fn);Object.assign(this.logData,e,n)},n.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.protocol,i=n.event_name,a=n.custom_metric,s=n.custom_metric_name;return{key:e,value:r(n,["protocol","event_name","custom_metric","custom_metric_name"]),dimension:{protocol:o,event_name:i,custom_metric:a,custom_metric_name:s}}},n.prototype.loadReport=function(){Object.assign(this.logData,Be),this.collectAndFlush()},n.prototype.collectAndFlush=function(){this.radar.logCollectNext(Xe(this.data)),this.radar.flushNext(),this.radar.weblog.flush()},n}(cn),gn=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="resource",e.onResError=function(t){e.isScriptError(t)||e.radar.logCollect(e.sepDimension({key:me.RES,value:{failed:!0,file:t.target.src,res_path:Ye(t.path||t.composedPath&&t.composedPath())}}))},e}return e(n,t),n.prototype.created=function(){_(window,"error",this.onResError,!0)},n.prototype.when=function(t){return!Ve(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&"fetch"!==t.initiatorType&&"xmlhttprequest"!==t.initiatorType)},n.prototype.isScriptError=function(t){return t.message||null!=t.lineno},n.prototype.onPerfReport=function(t){var e=this.radar.generateLog(ke,t);this.radar.logCollect(this.sepDimension({key:me.RES,value:e}))},n.prototype.destroy=function(){w(window,"error",this.onResError,!0)},n.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.protocol,i=n.file,a=n.cached,s=n.res_path,c=n.failed,u=n.res_type;return{key:e,value:r(n,["protocol","file","cached","res_path","failed","res_type"]),dimension:{protocol:o,file:i,cached:a,failed:c,res_path:s,res_type:u}}},n}(cn),mn=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="resource",e.onResError=function(t){e.isScriptError(t)||e.radar.logCollectNext(e.sepDimension({key:nn.RES,value:{failed:!0,file:t.target.src,res_path:Ye(t.path||t.composedPath&&t.composedPath())}}))},e}return e(o,t),o.prototype.created=function(){_(window,"error",this.onResError,!0)},o.prototype.when=function(t){return!Ve(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&"fetch"!==t.initiatorType&&"xmlhttprequest"!==t.initiatorType||"resource"===t.entryType&&("fetch"===t.initiatorType||"xmlhttprequest"===t.initiatorType)&&("js"===We(t.name)||"css"===We(t.name)))},o.prototype.isScriptError=function(t){return t.message||null!=t.lineno},o.prototype.onPerfReport=function(t){var e=this.radar.generateLog(pn,t,!1);this.radar.logCollectNext(this.sepDimension({key:nn.RES,value:n(n({},e),{failed:!1})}))},o.prototype.destroy=function(){w(window,"error",this.onResError,!0)},o.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.protocol,i=n.file,a=n.cached,s=n.res_path,c=n.failed,u=n.res_type;return{key:e,value:r(n,["protocol","file","cached","res_path","failed","res_type"]),dimension:{protocol:o,file:i,cached:a,failed:c,res_path:s,res_type:u}}},o}(cn);function vn(t){return void 0===t&&(t=""),"__radar_"+t+Math.random().toString(36).substring(2,8)}function yn(t,e){var n=window.XMLHttpRequest;if(!n)return y("HAS NOT XMLHttpRequest!"),!1;window.XMLHttpRequest=function(){var t=new n;t._request=Object.create(null),t._response=Object.create(null);var r=vn();t._request.id=r;var o=function(){var e,n,r,o;for(e in t._response.status=t.status,t._response.statusText=t.statusText,o=function(t,e){switch(null==e&&(e={}),typeof t){case"object":var n=[];for(var r in t){var o=t[r],i=r.toLowerCase();n.push(i+":\t"+o)}return n.join("\n")+"\n";case"string":for(var a=0,s=(n=t.split("\n")).length;a<s;a++){var c=n[a];if(/([^:]+):\s*(.+)/.test(c)){var u=RegExp.$1,l=null!=u?u.toLowerCase():void 0;o=RegExp.$2,null==e[l]&&(e[l]=o)}}return e}}(t.getAllResponseHeaders()))r=o[e],t._response.headers[e]||(n=e.toLowerCase(),t._response.headers[n]=r)};return t.addEventListener("readystatechange",(function(){switch(t.readyState){case 4:"function"==typeof e&&(o(),function(){if(t.responseType&&"text"!==t.responseType)"document"===t.responseType?(t._response.xml=t.responseXML,t._response.data=t.responseXML):t._response.data=t.response;else{t._response.text=t.responseText,t._response.data=t.responseText;try{t._response.xml=t.responseXML}catch(t){}}"responseURL"in t&&(t._response.finalUrl=t.responseURL)}(),e(t._request,t._response))}})),t},["DONE","HEADERS_RECEIVED","LOADING","OPENED","UNSENT"].forEach((function(t){window.XMLHttpRequest[t]=n[t]})),window.XMLHttpRequest.prototype=n.prototype,window.XMLHttpRequest.prototype._request=Object.create(null),window.XMLHttpRequest.prototype._response=Object.create(null);var r=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(t,e,n,o,i){return this._request={method:t,url:e,async:n,user:o,pass:i},this._response.headers={},r.apply(this,arguments)};var o=window.XMLHttpRequest.prototype.send;return window.XMLHttpRequest.prototype.send=function(){return"function"==typeof t&&t(this._request),o.apply(this,arguments)},function(){n&&(window.XMLHttpRequest=n),r&&(window.XMLHttpRequest.prototype.open=r),o&&(window.XMLHttpRequest.prototype.send=o)}}function _n(t,e){var n,r=function(t){if("function"!=typeof t.fetch)return null;var e=t.fetch;return t.fetch=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Sn.apply(void 0,a([t],e))}}(t.fetch),{register:function(t){return wn.push(t),function(){var e=wn.indexOf(t);e>=0&&wn.splice(e,1)}},clear:function(){wn=[]},unRegister:function(){e&&(t.fetch=e)}}}("function"==typeof importScripts?self:window);return r&&r.register({request:function(e,r){"function"==typeof t&&((n="string"==typeof e?new Request(e,r):e).id=vn(),t(n))},response:function(t){"function"==typeof e&&e(n,t)},responseError:function(t){"function"==typeof e&&e(n,{status:0,statusText:t})}}),null==r?void 0:r.unRegister}var wn=[];function Sn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=wn.reduce((function(t,e){return[e].concat(t)}),[]);r.forEach((function(t){var n=t.request;e=n.apply(void 0,e)||e}));var o=t.apply(void 0,e),i=null;return o.then((function(t){i=t;var e=t.headers.get("content-type");return e&&e.indexOf("application/json")||e&&e.indexOf("text/html")?t.clone().text():(item.responseType="","[object Object]")})).then((function(t){var e=i.clone();return e.data=t,r.forEach((function(t){var n=t.response;n&&(e=n(e)||e)})),i}),(function(t){return r.forEach((function(e){var n=e.responseError;n&&(t=n(t)||t)})),i}))}var bn=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.queue=[],e.key="api",e.logList=[],e.perfList=[],e.unhookXML=null,e.unhookFetch=null,e.beforeHook=function(t){if(!Ve(t.url,e.radar.ignoreList)&&"js"!==We(t.url)&&"css"!==We(t.url)){var n={api:e.requestURLCompletion(t.url),method:t.method,request:t,startTime:Date.now()};e.queue.push(n)}},e.afterHook=function(t,o){var i=e.queue.filter((function(e){return e.request===t}))[0];if(i){delete i.request;var a=i.startTime,s=r(i,["startTime"]),c=Date.now(),u=c-a,l=o.status;"function"==typeof e.options.customizeRadarStatus&&(l=e.options.customizeRadarStatus(o));var p=e.customHook({request:t,response:o,duration:u}),d=En(o.headers),f=n(n({duration:u,total:u,status:l,size:+d,custom_failed:!(l>=200&&l<300)},s),p);"string"==typeof o.text&&(f.responseData=o.text);var h=n(n({},o),{status:l});if(e.isResponseError(h))e.radar.logCollect(e.sepDimension({key:me.API,value:f})),e.radar.logCollectNext(e.sepDimension({key:me.API,value:f}));else{if(!e.radar.hasFmp){var g=performance.timing.apiStart;performance.timing.apiStart=g?Math.min(g,a):a;var m=performance.timing.apiEnd;performance.timing.apiEnd=m?Math.max(m,c):c}!e.mergeAPIPerf(null,f)&&e.logList.push(f)}e.queue=e.queue.filter((function(e){return e.request&&e.request!==t}))}},e}return e(o,t),o.prototype.when=function(t){return!Ve(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&("fetch"===t.initiatorType||"xmlhttprequest"===t.initiatorType)&&"js"!==We(t.name)&&"css"!==We(t.name))},o.prototype.onPerfReport=function(t){var e=this.radar.generateLog(Ee,t,!1);!this.mergeAPIPerf(n(n({},e),{api:e.file}))&&this.perfList.push(n(n({},e),{api:e.file}))},o.prototype.mergeAPIPerf=function(t,e){var n=t||e,r=t?this.logList:this.perfList;if(!n)return!1;for(var o=-1,i=0,a=r.length;i<a;i++){var s=r[i],c=(n.api||"").replace(/\?.+$/,""),u=(s.api||"").replace(/\?.+$/,""),l=n.size;c===u&&(Object.assign(n,s),delete n.file,l&&(n.size=l),!n.size&&n.responseData&&(n.size=k(n.responseData)),delete n.responseData,o=i)}return-1!==o&&(r.splice(o,1),this.radar.logCollect(this.sepDimension({key:me.API,value:n})),this.radar.logCollectNext(this.sepDimension({key:me.API,value:n})),!0)},o.prototype.sepDimension=function(t){var e=t.key,n=t.value,o=n.res_type,i=n.protocol,a=n.cached,s=n.custom_failed,c=n.status,u=n.api,l=n.method,p=n.response_code,d=n.response_msg;return{key:e,value:r(n,["res_type","protocol","cached","custom_failed","status","api","method","response_code","response_msg"]),dimension:{res_type:o,protocol:i,api:u,custom_failed:s,status:c,cached:a,method:l,response_code:p,response_msg:d}}},o.prototype.requestURLCompletion=function(t){var e=document.location,n=e.protocol,r=e.host;return 0===t.indexOf("//")?n+t:0===t.indexOf("/")?n+"//"+r+t:t},o.prototype.isResponseError=function(t){return 0===t.status},o.prototype.created=function(){this.unhookXML=yn(this.beforeHook,this.afterHook),this.unhookFetch=_n(this.beforeHook,this.afterHook)},o.prototype.destroy=function(){this.unhookXML&&this.unhookXML(),this.unhookFetch&&this.unhookFetch()},o.prototype.customHook=function(t){var e={};if("function"!=typeof this.options.APIHook)return e;var n={};try{n=this.options.APIHook(t)}catch(t){return{}}if(!n)return e;var r=n.response_msg,o=n.response_code,i=n.status,a=n.custom_failed;try{e.response_msg=JSON.stringify(r).slice(0,100)}catch(t){e.response_msg="radar error: 传入的response_msg有错误"}return e.response_code=Number(o),void 0!==i&&(e.status=i),void 0!==a&&(e.custom_failed=a),e},o}(cn);function En(t){return t?"function"==typeof t.get?+t.get("Content-Length")||0:+t["content-length"]||0:0}var kn=[];function Pn(t,e){Tn(e)>=0||(kn.push(e),setTimeout((function(){kn.splice(Tn(e),1)}),2e3),On(t,e))}function On(t,e){var n=function(t){var e=me.ERROR,n=t.error_cons_type,o=t.file,i=t.error_type,a=t.msg,s=t.col,c=t.line,u=t.stack,l=r(t,["error_cons_type","file","error_type","msg","col","line","stack"]);return{key:e,value:l,dimension:{error_cons_type:n,file:o,error_type:i,msg:a,col:s,line:c,stack:u}}}(e);t.logCollect(n)}function Tn(t){for(var e=0;e<kn.length;e++)if(n=kn[e],r=t,n.msg===r.msg&&n.stack===r.stack&&n.file===r.file&&n.line===r.line&&n.col===r.col)return e;var n,r;return-1}function Ln(t){return t.message||null!=t.lineno}function Cn(t,e,n){var r,o,i,a;if((a=e)&&(a instanceof Error||"object"==typeof a&&"string"==typeof a.message))r=e.name||"ErrorLikeObject",o=e.message||"",i=e.stack||void 0;else if(function(t,e){return null==t&&"Script error."===(null==e?void 0:e.message)}(e,n))r="CrossOriginError",o="* cross origin "+t+" with message: "+((null==n?void 0:n.message)||"<UNKNOWN>")+"\n -- by WebLogger Radar Plugin";else{r=null==e?""+e:typeof e,o="* "+t+" with value: "+function(t){var e;try{e=t.toString()}catch(t){}"string"!=typeof e||""===e?e=null===t?"<NULL>":void 0===t?"<UNDEFINED>":""===e?"<EMPTY>":"<UNKNOWN>":e.length>2e3&&(e=e.substring(0,2e3)+"<<< ……");return e}(e)+"\n  -- by WebLogger Radar Plugin"}return{error_type:ye.SCRIPT,error_cons_type:r,msg:o,stack:i}}var Nn=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="error",e.onError=function(t){if(Ln(t)){var r=n(n({},Cn("global error",t.error,t)),{file:t.filename,line:t.lineno,col:t.colno});Pn(e.radar,r)}},e.onPromiseError=function(t){var n=Cn("promise error",t.reason);Pn(e.radar,n)},e}return e(r,t),r.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;if(["play_block","play_error"].indexOf(e)>-1)return!0}return!1},r.prototype.onPerfReport=function(t){if(t.custom){var e=t.entry||{},n=e.key,r=e.value;On(this.radar,{error_type:ye.VIDEO,error_cons_type:n,msg:r})}},r.prototype.created=function(){_(window,"error",this.onError,!0),_(window,"unhandledrejection",this.onPromiseError)},r.prototype.destroy=function(){w(window,"error",this.onError,!0),w(window,"unhandledrejection",this.onPromiseError)},r}(cn),Un=[];function Rn(t,e){In(e)>=0||(Un.push(e),setTimeout((function(){Un.splice(In(e),1)}),2e3),xn(t,e))}function xn(t,e){var n=function(t){var e=nn.ERROR,n=t.error_cons_type,o=t.file,i=t.error_type,a=t.msg,s=t.col,c=t.line,u=t.stack,l=r(t,["error_cons_type","file","error_type","msg","col","line","stack"]);return{key:e,value:l,dimension:{error_cons_type:n,file:o,error_type:i,msg:a,col:s,line:c,stack:u}}}(e);t.logCollectNext(n)}function In(t){for(var e=0;e<Un.length;e++)if(n=Un[e],r=t,n.msg===r.msg&&n.stack===r.stack&&n.file===r.file&&n.line===r.line&&n.col===r.col)return e;var n,r;return-1}function An(t){return t.message||null!=t.lineno}function Dn(t,e,n){var r,o,i,a;if((a=e)&&(a instanceof Error||"object"==typeof a&&"string"==typeof a.message))r=e.name||"ErrorLikeObject",o=e.message||"",i=e.stack||void 0;else if(function(t,e){return null==t&&"Script error."===(null==e?void 0:e.message)}(e,n))r="CrossOriginError",o=t+" - message: "+((null==n?void 0:n.message)||"<UNKNOWN>");else{r=null==e?""+e:typeof e,o=t+" - value: "+function(t){var e;try{e=t.toString()}catch(t){}"string"!=typeof e||""===e?e=null===t?"<NULL>":void 0===t?"<UNDEFINED>":""===e?"<EMPTY>":"<UNKNOWN>":e.length>2e3&&(e=e.substring(0,2e3)+"<<< ……");return e}(e)}return{error_type:rn.SCRIPT,error_cons_type:r,msg:o,stack:i}}var Mn,jn,Kn,Wn=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="error",e.onError=function(t){if(An(t)){var r=n(n({},Dn("Global Uncaught Exception",t.error,t)),{file:t.filename,line:t.lineno,col:t.colno});Rn(e.radar,r)}},e.onPromiseError=function(t){var n=Dn("Unhandled Promise Rejection",t.reason);Rn(e.radar,n)},e}return e(r,t),r.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;if(["play_block","play_error"].indexOf(e)>-1)return!0}return!1},r.prototype.onPerfReport=function(t){if(t.custom){var e=t.entry||{},n=e.key,r=e.value;xn(this.radar,{error_type:rn.VIDEO,error_cons_type:n,msg:r})}},r.prototype.created=function(){_(window,"error",this.onError,!0),_(window,"unhandledrejection",this.onPromiseError)},r.prototype.destroy=function(){w(window,"error",this.onError,!0),w(window,"unhandledrejection",this.onPromiseError)},r}(cn),Vn=["play_block","play_error"],Gn=["c_dimension1","c_dimension2","c_dimension3"],Fn=["main_data_receive_end"],Bn=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.radarIgnoreList=["https://web-trace.ksapisrv.com/ktrace/collect"],r.radarFmp=0,r.customReported=[],r.customKeyList=[],r.timelineLastTime=null,r.action={start:function(t){en(t),r.event({name:t.name,extra_info:t.extra_info||"",event_type:"radar_action_start"})},end:function(t){en(t),r.event({name:t.name,extra_info:t.extra_info||"",result_type:t.result_type||"",event_type:"radar_action_end"})}},r.validOption()?(r.use(un,r),r.use(hn,r),r.options&&r.options.unuseResourcePlugin||(r.use(gn,r),r.use(mn,r)),r.options&&r.options.unuseAPIPlugin||r.use(bn,r),r.options&&r.options.unuseErrorPlugin||(r.use(Nn,r),r.use(Wn,r)),r):r}return e(n,t),n.samplingControl=function(t){if(!t)return!1;var e=Math.random();return"number"==typeof t?e<t:e<t.sampling},n.prototype.collect=function(t,e){if(0!==t.indexOf("c_")&&Fn.indexOf(t)<0)y("[error 305]","[Radar] 传入的自定义指标 "+t+" 必须为 c_ 开头");else if(Fn.indexOf(t)>-1)this.handleCollectKey(t);else{v("[radar]:Radar+之后将不再支持collect方法，请用event方法替代。");var n={key:me.CUSTOM,value:{metric_value:e},dimension:{metric_name:t}};this.logCollect(n),this.logCollectNext({key:me.EVENT,value:{duration:e},dimension:{name:t}})}},n.prototype.handleCollectKey=function(t){switch(t){case"main_data_receive_end":var e=Date.now();try{performance.timing&&(performance.timing[t]=e)}catch(t){}qe(t,e)}},n.prototype.reportTimePoint=function(t,e){if(this.customReported.indexOf(t)>-1)return null;-1===Vn.indexOf(t)&&this.customReported.push(t);var n=e;if("string"!=typeof e){var r=function(t){var e="undefined"!=typeof window?window.performance:null;if(!e)return{value:null};if(null!=t)return{value:t-e.timing.navigationStart,detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"customTime",endPoint:t}};if("function"==typeof e.now)return{value:e.now(),detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"perfNowAPI",endPoint:e.now()}};var n=Date.now();return{value:n-e.timing.navigationStart,detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"dateNow",endPoint:n}}}(e);if(null==r.value)return;n=this.throttle(r.value,r.detail,"fmp",r.detail)}return null!=n?(this.reportPerformance({custom:!0,entry:{key:t,value:n},renderTime:e}),n):void 0},n.prototype.fmp=function(t){this.radarFmp=t||Date.now();var e=this.reportTimePoint("fmp",this.radarFmp);if(e){this.hasFmp=!0;try{performance.timing&&(performance.timing.fmp=e,performance.timing.radarFmp=this.radarFmp)}catch(t){}qe("fmp",e);var n={key:me.CUSTOM,value:{fmp:e,fmp_time:this.radarFmp,merge:!0}};this.logCollect(n),this.logCollectNext({key:me.EVENT,value:{duration:e},dimension:{name:"fmp"}})}},n.prototype.event=function(t,e){if(t&&t.name)if("string"==typeof t.name){t.name.length>127&&(y("[radar]:事件名称长度不能超过127字符，超过会截取后上报，请限制"),t.name=t.name.slice(0,127));var n=Je();t.extra_info&&t.extra_info instanceof Object&&(t.extra_info=JSON.stringify(t.extra_info)),void 0===t.yoda_version&&(t.yoda_version=n.Yoda||""),void 0===t.webview_type&&(t.webview_type=Qe());var r={key:me.EVENT,value:e,dimension:t};this.logCollect(r),this.logCollectNext(r)}else y("[radar]:name字段需要为String类型");else y("[radar]:事件名称为必填字段，用于监控展示、报警配置，请填写")},n.prototype.customStage=function(t,e){if(!(this.customKeyList.length>2)){if(e=e||{sendTimeline:!0},this.customKeyList.indexOf(t)>-1)return null;this.customKeyList.push(t);var n=Date.now();"production"!==this.weblog.logConfig.env&&(this.timelineLastTime?this.timelineLastTime:this.timelineLastTime=n),this.customPerfList[t]={options:e,time:n},this.reportPerformance({custom:!0,entry:{key:"customPerf",value:t},renderTime:n})}},n.prototype.headlessTestReport=function(){-1===window.navigator.userAgent.indexOf("headless")||this.asyncReportTiming()},n.prototype.playClicked=function(t){this.reportTimePoint("play_clicked",t)},n.prototype.playIDR=function(t){this.reportTimePoint("play_idr",t)},n.prototype.playBlock=function(t){this.reportTimePoint("play_block",t)},n.prototype.playError=function(t){this.reportTimePoint("play_error",t)},n.prototype.setDimensions=function(t){var e=this,n=Object.keys(t);n.some((function(t){return-1===Gn.indexOf(t)}))&&y("[error 306]","[Radar] 传入的自定义维度只能为 "+Gn.join("、")+"，目前传入的是："+n.join("、")),n.forEach((function(n){var r=n;null==t[r]?delete e.customDimension[r]:e.customDimension[r]=t[r]}))},n.prototype.validOption=function(){var t=this;if(!this.options)return!1;var e=this.options,n=e.sampling;return"string"!=typeof e.projectId?(y("[error 303]","[Radar] 必须配置 projectId 属性，类型为 string!"),!1):n>1||n<0?(y("[error 304]","[Radar] 采样率 sampling 必须为 0~1 之间的数字"),!1):(["apiSampling","errorSampling","resourceSampling","customSampling","eventSampling"].forEach((function(e){var n=t.options[e];"number"==typeof n&&0===n&&y("[error 304]","[Radar] 采样率 "+e+" 不能被设置为 0，将改用默认值")})),!0)},n.prototype.captureException=function(t){Pn(this,Cn("capture exception",t)),Rn(this,Dn("Captured Exception",t))},n.__test__={MORE_REPORTED:Vn,CUSTOM_DIM_KEY:Gn,CUSTOM_COLLECT_KEY:Fn},n.key="radar",n}(sn),Hn=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.action={start:function(){},end:function(){}},e}return e(n,t),n.prototype.fmp=function(){},n.prototype.event=function(){},n.prototype.headlessTestReport=function(){},n.prototype.customStage=function(){},n.prototype.playClicked=function(){},n.prototype.playIDR=function(){},n.prototype.playBlock=function(){},n.prototype.playError=function(){},n.prototype.setDimensions=function(){},n.prototype.destroy=function(){},n.prototype.captureException=function(){},n.key="radar",n}(re),qn=!1,Jn="hashchange",Qn=function(t){function n(e,n){var r=t.call(this)||this;return r.beginTime=(new Date).valueOf(),r.visibilityChange=function(){var t=document.visibilityState;"visible"===t&&(qn=!1),r.weblog&&!qn&&r.autoPVFilter(location.href,null,t)&&("hidden"!==t&&"visible"!==t||("visible"===t&&(r.beginTime=(new Date).valueOf()),r.weblog.sendImmediately("PV",{type:t,auto:!0,beginTime:r.beginTime})))},r.proxyPushState=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.urlChange(),Mn.apply(history,t)},r.proxyReplaceState=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.urlChange(),jn.apply(history,t)},r.urlChange=function(){r.weblog&&setTimeout((function(){var t=O({url:location.href},r.weblog.logConfig.urlMap),e=t.page,n=t.params,o=t.pageId;e&&e===r.weblog.currentUrlPackage.page?r.weblog.currentUrlPackage.update(e,n,o):(r.autoPVFilter(location.href,r.weblog.currentUrlPackage.page,"leave")&&r.weblog.sendImmediately("PV",{type:"leave",auto:!0,beginTime:r.beginTime,urlPage:r.weblog.currentUrlPackage.toJSON()}),r.autoPVFilter(location.href,r.weblog.currentUrlPackage.page,"enter")&&(r.weblog.updateReferUrlPackage(r.weblog.currentUrlPackage),r.weblog.updateCurrentUrlPackage(location.href),r.weblog.currentUrlPackage.page.indexOf("http"),r.beginTime=(new Date).valueOf(),r.weblog.sendImmediately("PV",{type:"enter",auto:!0})))}),0)},r.beforeUnload=function(){qn=!0,r.weblog&&r.autoPVFilter(location.href,null,"leave")&&r.weblog.sendImmediately("PV",{type:"leave",auto:!0,beginTime:r.beginTime})},r.autoPVFilter=function(){return!0},e&&("function"==typeof e?r.autoPVFilter=e:"collect"in e&&"function"==typeof e.collect?((null==n?void 0:n.autoPVFilter)&&(r.autoPVFilter=n.autoPVFilter),r.apply(e)):"autoPVFilter"in e&&"function"==typeof e.autoPVFilter&&(r.autoPVFilter=e.autoPVFilter)),n&&"function"==typeof n.autoPVFilter&&(r.autoPVFilter=n.autoPVFilter),r}return e(n,t),n.prototype.apply=function(t){if(t&&t.sendImmediately){this.weblog=t,this.autoPVFilter(location.href,null,"enter")&&this.weblog.sendImmediately("PV",{type:"enter",auto:!0}),Mn=history.pushState,jn=history.replaceState,history.pushState=this.proxyPushState,history.replaceState=this.proxyReplaceState;var e=t.Utils.ua.supportsPushState;Jn=e()?"popstate":"hashchange",_(window,Jn,this.urlChange),_(document,"visibilitychange",this.visibilityChange)}},n.prototype.destroy=function(){w(window,Jn,this.urlChange),w(document,"visibilitychange",this.visibilityChange),Mn&&(history.pushState=Mn),jn&&(history.replaceState=jn)},n.key="autoPV",n}(re),zn=function(t){function n(e,n){var r=t.call(this,e,n)||this;return r.initBuildInPlugins(),r}return e(n,t),n.prototype.initBuildInPlugins=function(){var t=this.logConfig,e=t.autoPV,n=t.radar,r=t.fps,o=t.timing,i=t.crash,a=t.autoPVFilter;r&&this.plug(ue),o&&this.plug(fe),i&&this.plug(ie),(e||void 0===e)&&this.plug(Qn,{autoPVFilter:a}),n&&(n.sampling=n.sampling||1,Bn.samplingControl(n)?this.plug(Bn,n):this.plug(Hn))},n}(ne);Kn=zn,void 0!==window._GLOBAL_KS_WEBLOGGER_?window._GLOBAL_KS_WEBLOGGER_.Factory=Kn:window.Weblog=Kn,(null==N?void 0:N.constructors)&&Kn&&-1===N.constructors.indexOf(Kn)&&(Kn._classId=N.constructors.length,N.constructors.push(Kn)),function(){if(null==N?void 0:N.silence)try{N._silenced=!!sessionStorage.getItem("WEBLOGGER_SILENCED")}catch(t){}}(),exports.BasePlugin=re,exports.Weblog=zn,exports.default=zn;
//# sourceMappingURL=log.common.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ks/weblogger/lib/log.hybrid.js":
/*!******************************************************!*\
  !*** ./node_modules/@ks/weblogger/lib/log.hybrid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):undefined}(this,(function(e){"use strict";var t,n,r,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(){void 0===o.window&&(o.window={addEventListener:function(){},removeEventListener:function(){},setTimeout:function(){},setInterval:function(){},_WEBLOGGER_MOCKED_WINDOW_:!0,global:o}),void 0===o.document&&(o.document=o.window.document||{cookie:"",addEventListener:function(){},removeEventListener:function(){},querySelector:function(){},querySelectorAll:function(){}},void 0===o.window.document&&(o.window.document=o.document)),void 0===o.navigator&&(o.navigator=o.window.navigator||{userAgent:""},void 0===o.window.navigator&&(o.window.navigator=o.navigator)),void 0===o.screen&&(o.screen=o.window.screen||{},void 0===o.window.screen&&(o.window.screen=o.screen)),void 0===o.history&&(o.history=o.window.history||{},void 0===o.window.history&&(o.window.history=o.history)),void 0===o.location&&(o.location=o.window.location||{hostname:"",search:"",href:"",origin:""},void 0===o.window.location&&(o.window.location=o.location));try{void 0===o.localStorage&&(o.localStorage=o.window.localStorage||{getItem:function(){},setItem:function(){}},void 0===o.window.localStorage&&(o.window.localStorage=o.localStorage))}catch(e){}}(),Object.defineProperty||(Object.defineProperty=function(e,t,n){e[t]="[object Object]"===Object.prototype.toString.call(n)&&n.hasOwnProperty("value")?n.value:n}),Object.assign||Object.defineProperty(Object,"assign",{value:function(e){if(null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},writable:!0,configurable:!0}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){var o=this instanceof r?this:e;return n.apply(o,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),o.prototype=new r,o}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var n;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),o=r.length>>>0;if(0===o)return-1;var a=+t||0;if(Math.abs(a)===1/0&&(a=0),a>=o)return-1;for(n=Math.max(a>=0?a:o-Math.abs(a),0);n<o;){if(n in r&&r[n]===e)return n;n++}return-1}),Object.keys||(Object.keys=(t=Object.prototype.hasOwnProperty,n=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],function(e){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.keys called on non-object");var o=[];for(var a in e)t.call(e,a)&&o.push(a);if(n)for(var i=0,s=r;i<s.length;i++){var c=s[i];t.call(e,c)&&o.push(c)}return o})),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n,r;if(null==this)throw new TypeError(" this is null or not defined");var o=Object(this),a=o.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(n=t),r=0;r<a;){var i=void 0;r in o&&(i=o[r],e.call(n,i,r,o)),r++}})
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */;var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function i(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function l(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)r[o]=a[i];return r}var p,g,f={unknown:0,none:1,wifi:2,"4g":3,"3g":4,"2g":5,"5g":7,"slow-2g":5};!function(e){e.CLICK="CLICK",e.DOUBLE_CLICK="DOUBLE_CLICK",e.TRIPLE_CLICK="TRIPLE_CLICK",e.LONG_PRESS="LONG_PRESS",e.PULL="PULL",e.DRAG="DRAG",e.SCALE="SCALE",e.PULL_DOWN="PULL_DOWN",e.PULL_UP="PULL_UP"}(p||(p={})),function(e){e.PV="PV",e.SHOW="SHOW",e.VIDEO="VIDEO",e.CUSTOM="CUSTOM",e.RADAR="RADAR"}(g||(g={}));var h={sessionId:"",appDevicePackageReady:!1,identityPackageReady:!1},v=function(){function e(e,t){switch(this.page="",this.identity="",t){case"web":this.page_type=2;break;case"native":this.page_type=1;break;case"mina":this.page_type=3;break;default:this.page_type=0}this.update(e.page,e.params)}return e.prototype.update=function(e,t){void 0===e&&(e=""),e&&e!==this.page&&(this.page=e,this.identity=this.generatePageId(e)),t&&(this.params=Object.assign(this.params||{},t))},e.prototype.toJSON=function(){return{page:this.page,identity:this.identity,page_type:this.page_type,params:JSON.stringify(this.params)}},e.prototype.generatePageId=function(e){return e+(new Date).getTime()},e}(),y=["Kwai","Kwai_Lite","Kwai_Pro","livemate","ksthanos","ksNebula","ksnebula","kwaiying","pearl","kinder","m2u","LOLita","XFunCore","ACVideoCore","ZIKZAK"].concat(["UVideo","Vstatus","Kwaigo","MvMaster"]);function m(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return null===console||void 0===console?void 0:(e=console.error).call.apply(e,l([null],t))}function _(e,t,n,r){return"attachEvent"in e?e.attachEvent("on"+t,n):e.addEventListener(t,n,r)}function w(e,t,n,r){return"attachEvent"in e?e.detachEvent("on"+t,n):e.removeEventListener(t,n,r)}function P(e,t,n){if(void 0===n&&(n=" "),(t-=e.length)<=0)return e;for(var r="";t;)1&t&&(r+=n),t>>=1,n+=n;return r+e}var b=function(){var e=null;return function(){try{if(null===e)for(var t=window.navigator.userAgent.toLowerCase(),n=0;n<y.length;n++)if(t.indexOf(y[n].toLowerCase())>-1)return e=!0}catch(e){return!1}}}();function k(e){for(var t={},n=0,r=e.split("&");n<r.length;n++){var o=r[n].split("="),a=o[0],i=o[1];a in t?t[a]instanceof Array?t[a].push(i):t[a]=[t[a],i]:t[a]=i}return t}function S(e){void 0===e&&(e=location.href);var t=e.lastIndexOf("?");return-1===t?{page:e}:{page:e.slice(0,t),params:k(e.slice(t+1))}}var E=function(e){return e&&"object"==typeof e&&!Array.isArray(e)};function O(e){return!e||!/^(https?:)?\/\//.test(e)||(m("[error 108]","请注意当前埋点页面信息为 "+e+"，不符合规范，上报失败！"),!1)}var U,T=(U="",function(){if(U)return U;try{var e=window.devicePixelRatio||1,t=Math.floor(screen.width*e),n=Math.floor(screen.height*e);return U=t+"x"+n}catch(e){return""}});var N,A=function(){return!(!((null===window||void 0===window?void 0:window.Worker)&&(null===window||void 0===window?void 0:window.Uint8Array)&&window.URL)||function(){var e,t,n=(null===(e=null===window||void 0===window?void 0:window.navigator)||void 0===e?void 0:e.userAgent)||"",r=/mobile|tablet|ip(ad|hone|od)|android|(windows phone)/i.test(n),o="MacIntel"===(null===window||void 0===window?void 0:window.navigator.platform)&&(null===(t=null===window||void 0===window?void 0:window.navigator)||void 0===t?void 0:t.maxTouchPoints)>1;return r||o}())},L=function(){function e(){this.events={}}return e.prototype.on=function(e,t){t&&"function"==typeof t&&(this.events[e]=this.events[e]||[],this.events[e].push(t))},e.prototype.off=function(e,t){var n,r,o;this.events[e]&&(t&&"function"==typeof t&&(n=this.events[e],r=t,(o=n.indexOf(r))>-1&&n.splice(o,1)),t||(this.events[e]=[]))},e.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.events[e]&&this.events[e].forEach((function(e){e.apply(void 0,t)}))},e}(),C="WEBLOGGER_SILENCED";"undefined"!=typeof window&&("object"!=typeof window._WEBLOGGER&&(window._WEBLOGGER={_silenced:!1,constructors:[],instances:[],silence:function(e){try{e?sessionStorage.setItem(C,"1"):sessionStorage.removeItem(C),window._WEBLOGGER.instances.forEach((function(t){null==t||t.silence(e)}))}catch(e){}}}),N=window._WEBLOGGER);var I=0,x=function(e){function t(n,r){var o,a,i=e.call(this)||this;return i.version="3.9.30",i.plugins={},i.flush=function(){i.logger.flush()},i.baseOption=s({},r),i.logConfig=(o=n,s({env:"production",proto:"v3",timeout:3e4,wait:1e3,maxBatchLength:50,sampleRate:1,yoda:"undefined"!=typeof window&&window.yoda,forbidV2HttpUrlPage:!0},o||{})),i.initUrlPackage(),t.__instance||(t.__instance=i),a=i,(null==N?void 0:N.instances)&&a&&-1===N.instances.indexOf(a)&&(N.instances.push(a),N._silenced&&(null==a||a.silence(!0))),i}return i(t,e),Object.defineProperty(t.prototype,"sessionId",{get:function(){return h.sessionId},enumerable:!1,configurable:!0}),t.prototype.initUrlPackage=function(){this.updateCurrentUrlPackage()},t.prototype.updateCurrentUrlPackage=function(e,t){if(void 0===e&&(e={}),void 0===t&&(t="web"),"object"==typeof e&&e.page&&this.currentUrlPackage&&e.page===this.currentUrlPackage.page)return this.currentUrlPackage.update(e.page,e.params);this.currentUrlPackage=new v(e,t)},t.prototype.updateReferUrlPackage=function(e,t){void 0===e&&(e=this.currentUrlPackage),void 0===t&&(t="web"),this.referUrlPackage=e instanceof v?e:new v(e,t)},t.prototype.updateBase=function(e){this.updateCommonPackage(e)},t.prototype.updateCommonPackage=function(e){"object"==typeof e&&this.commonPackage.update(e)},t.prototype.addPlugins=function(){var e=this;this.logConfig.plugins&&this.logConfig.plugins.length&&this.logConfig.plugins.forEach((function(t){"object"==typeof t&&"function"==typeof t.apply&&e.addPluginInstance(t)}))},t.prototype.addPluginInstance=function(e){if(e){var t=e.key||e.constructor&&e.constructor.key||"plugin_auto_key_"+I++;"function"!=typeof e.apply||e.weblog&&e.weblog===this||e.apply(this),this.plugins[t]=e}},t.prototype.plug=function(e,t){if(this.plugins[e.key])return m("[code 301]",e.key+" 插件重复加载！");this.addPluginInstance(new e(this,t))},t.prototype.unplug=function(e){var t=this.plugins[e];t&&(t.destroy(),delete this.plugins[e])},t.prototype.unplugAll=function(){for(var e in this.plugins)this.plugins[e]&&this.unplug(e)},t.prototype.generateLog=function(e,t){return{}},t.prototype.send=function(e,t,n){void 0===e&&(e=p.CLICK);var r=this.generateLog(e.toUpperCase(),t),o="object"==typeof t&&t.callback||void 0;return"function"==typeof this.beforeSend&&this.beforeSend(e,t,r),this.logger.send(r,!!n,o)},t.prototype.collect=function(e,t){this.send(e,t)},t.prototype.sendImmediately=function(e,t){this.send(e,t,!0)},t.prototype.sendPackage=function(e,t){this.logger.sendPackage(e,t)},t.prototype.destroy=function(){this.unplugAll(),function(e){if(null==N?void 0:N.instances){var t=N.instances.indexOf(e);-1!==t&&N.instances.splice(t,1)}}(this)},t}(L);function R(e,t,n){var r={};if(e.length>0)for(var o=t?decodeURIComponent:function(e){return e},a=e.split(/;\s/g),i=null,s=null,c=null,u=0,d=a.length;u<d;u++){if(null!==(c=a[u].match(/([^=]+)=/i)))try{i=decodeURIComponent(c[1]),s=o(a[u].substring(c[1].length+1))}catch(e){}else i=decodeURIComponent(a[u]),s="";null!==i&&(r[i]=s)}return r}var D,G={};function K(e,t,n){void 0===t&&(t={}),void 0===n&&(n=!1);try{if(!n&&e in G)return G[e];if(!(null===window||void 0===window?void 0:window.document))return;var r=document.cookie||"";return r===D?G[e]:(D=r,(G=R(r,!t.raw))[e])}catch(e){}}function W(e,t,n){void 0===n&&(n={});try{document.cookie=function(e,t,n,r){void 0===r&&(r={});var o=encodeURIComponent(e)+"="+(n?encodeURIComponent(t):t),a=r.expires,i=r.path||"/",s=r.domain||"";return a instanceof Date&&(o+="; expires="+a.toUTCString()),"number"==typeof a&&(o+="; max-age=="+a),""!==i&&(o+="; path="+i),""!==s&&(o+="; domain="+s),!0===r.secure&&(o+="; secure"),o}(e,t,!n.raw,n),G[e]=t}catch(e){}}var M={getCookie:K,setCookie:W,parseCookieString:R};function B(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function V(e){if(void 0===e&&(e="undefined"!=typeof location?location.hostname:""),!e)return"";var t=e.split("."),n=t.length;return n<=2?"":"."+t[n-2]+"."+t[n-1]}var j="";function H(){if(j)return j;try{if(!(j=K("did")||K("_did"))){j="web_"+function(){for(var e=1e9*Math.random()>>>0,t=[],n=0;n<7;n++)t.push("0123456789ABCDEF".charAt(16*Math.random()));return e+t.join("")}();var e=new Date;e.setFullYear(e.getFullYear()+1),W("_did",j,{expires:e,domain:V(),path:"/"})}return j}catch(e){return""}}var J,Q,Y,z=function(e){function t(t,n,r){var o=e.call(this,{},n)||this;if("string"==typeof t){var a=S(t);o.page=a.page,o.params=a.params}else o.page=(t||{}).page||"",o.params=(t||{}).params||void 0;return o.identity=o.generatePageId(),r&&"string"==typeof t&&o.init(t,r),o}return i(t,e),t.prototype.init=function(e,t){void 0===t&&(t={});var n=function(e,t){var n=e.url,r=e.page,o=e.params,a=e.pageId;if(!r&&"string"==typeof n){var i=S(n);r=i.page,o=i.params}if("function"==typeof t)try{var s=t({url:n,page:r,params:o});"string"==typeof s?r=s:"object"==typeof s&&(s.page&&(r=s.page),s.params&&(o=s.params),s.pageId&&(a=s.pageId))}catch(e){}else if("object"==typeof t){var c="";for(var u in t)if((n||r||"").indexOf(u)>-1){c=t[u];break}c&&(r=c)}return{page:r,params:o,pageId:a}}({url:e,page:this.page,params:this.params},t),r=n.page,o=n.params;this.update(r,o)},t.prototype.attachUrl=function(){this.params||(this.params={}),this.params.origin_url=this.params.origin_url||(null===location||void 0===location?void 0:location.href)},t.prototype.getRealUrlPackage=function(){var e=S(location.href);e.page;var t=e.params;return{page:this.page,params:JSON.stringify(s({url:location.href,query:t},t)),page_type:this.page_type,identity:this.identity}},t.prototype.generatePageId=function(){return B()},t}(v),F=function(){function e(e){if(this.identity_package={device_id:void 0,global_id:void 0,user_id:void 0,union_id:void 0,open_id:void 0,iu_id:void 0},this.app_package={product:void 0,language:void 0,platform:void 0,container:"H5",package_name:void 0,product_name:void 0,version_name:void 0,channel:void 0,version_code:void 0},this.experiment=void 0,this.service_name=void 0,this.safety_id=void 0,this.sub_biz=void 0,this.device_package={os_version:void 0,model:void 0,ua:void 0},this.need_encrypt=!1,this.network_package={type:f.unknown},this.h5_extra_attr={sdk_name:"webLogger",sdk_version:"3.9.30",sdk_bundle:"log.hybrid.js"},this.global_attr={entry_tag:[]},this.update(e),this.app_package.version_name){var t=this.app_package.version_name.lastIndexOf(".");this.app_package.version_code=+this.app_package.version_name.slice(t+1)||0}this.app_package.version_name||(this.app_package.version_name=void 0),this.app_package.version_code||(this.app_package.version_code=void 0)}return e.prototype.getH5ExtraAttr=function(e){return Object.assign({},this.h5_extra_attr,e)},e.prototype.update=function(e){if("object"==typeof e){!function(e,t){if(E(e)&&E(t)){var n=function(e,t,n){E(e[n])&&E(t[n])?Object.assign(e[n],t[n]):E(e[n])||E(t[n])||(e[n]=t[n])};for(var r in t)if(e.hasOwnProperty(r))n(e,t,r);else for(var o in e)E(e[o])&&e[o].hasOwnProperty(r)&&n(e[o],t,r)}}(this,e);var t=e.network_type;t&&f[t]&&(this.network_package.type=f[t])}},e.prototype.updateGlobalAttr=function(e){Object.assign(this.global_attr||{},e)},e.prototype.toJSON=function(){this.identity_package.user_id||(this.identity_package.user_id=void 0);var e=s(s({},this),{toJSON:function(){return s(s({},e),{h5_extra_attr:JSON.stringify(e.h5_extra_attr),global_attr:JSON.stringify(e.global_attr)})}});return e.global_attr=s({},this.global_attr),this.global_attr.entry_tag&&this.global_attr.entry_tag.length?e.global_attr.entry_tag=this.global_attr.entry_tag.slice():delete e.global_attr.entry_tag,Object.keys(this.global_attr).length||delete e.global_attr,e},e}(),q="https://data-track.corp.kuaishou.com",X=q+"/",$="production",Z="logger",ee="logger-oversea",te="rest/wd/common/log/collect/",ne=[$,"test","development",Z,"oversea"],re="https://logsdk.kwai-pro.com/",oe={v2:"rest/kd/log/collect?_json=1&biz=",v3:te+"misc2",radar:te+"radar"},ae={v2:{production:["https://wlog.ksapisrv.com/","https://wlog.gifshow.com/"][Math.round(Math.random())],development:X,test:X,oversea:re},v3:{production:"https://log-sdk.ksapisrv.com/",development:X,test:X,oversea:re}},ie=function(e,t,n){return void 0===e&&(e=$),void 0===t&&(t=!1),void 0===n&&(n="v3"),-1===ne.indexOf(e)?e+oe[n]:t&&ae.v3[e]?ae.v3[e]+oe.radar:ae[n][e]&&oe[n]?ae[n][e]+oe[n]:ae.v3.production+oe.v3},se=function(e,t){if(!t)return e;try{return/\?(.+?)$/.test(e)?e.replace(/\?(.+?)$/,"?"+t+"&$1"):e+"?"+t}catch(t){return e}},ce=function(){function e(e,t){var n=this;this.asyncQueue=[],this.throttleQueue=[],this.errorQueue=[],this.sendingQueue={},this.url="",this.isV2=!1,this.isDebug=!1,this.radarUrl="",this.drained=!1,this.batchCount=50,this.sendingYield=null,this.flush=function(e){n.sendLogs(n.throttleQueue.concat(n.asyncQueue),e),n.throttleQueue=[],n.asyncQueue=[]},this.drain=function(){n.drained=!0,n.flush(),n.flushErrorLogs(),setTimeout((function(){n.drained=!1}),1e3)},this.config=e,this.config.maxBatchLength&&this.config.maxBatchLength>1&&(this.batchCount=Math.min(50,this.config.maxBatchLength)),this.commonPackage=t,this.isDebug=this.config.logger||"logger"===this.config.env,this.isV2="v2"===this.config.proto,this.updateUrls()}return e.prototype.sendData=function(e,t){return"function"==typeof this.config.sender?this.config.sender(e,t):this.baseSendData(e,t)},e.prototype.updateUrls=function(){var e=this.config.env;e&&/^(https?:)?\/\//.test(e)?this.url=e:this.url=ie(e),this.formatUrl()},e.prototype.formatUrl=function(){this.radarUrl||(this.radarUrl=this.url.replace(-1!==this.url.indexOf(oe.v2)?oe.v2:oe.v3,oe.radar),-1!==this.radarUrl.indexOf(ae.v2.production)&&this.radarUrl.replace(ae.v2.production,ae.v3.production));var e=this.commonPackage.app_package,t=e.product_name,n=e.product,r="v=3.9.30&kpn="+(t||n);this.url=se(this.url,r),this.radarUrl=se(this.radarUrl,r)},e.prototype.getCommonPackageJSON=function(){return this.commonPackage.toJSON()},e.prototype.send=function(e,t,n){if(void 0===t&&(t=!1),n||this.drained)return this.sendLogs([e],n);t?this.sendAsync(e,n):this.sendThrottle(e)},e.prototype.sendAsync=function(e,t){return u(this,void 0,void 0,(function(){return d(this,(function(t){switch(t.label){case 0:return this.asyncQueue.push(e),this.asyncQueue.length>=this.batchCount?(this.flush(),[2]):this.sendingYield?[4,this.sendingYield]:[3,2];case 1:t.sent(),this.sendingYield=null,t.label=2;case 2:return t.trys.push([2,4,,5]),[4,Promise.resolve()];case 3:case 4:return t.sent(),[3,5];case 5:return this.asyncQueue.length?(this.flush(),[2]):[2]}}))}))},e.prototype.sendThrottle=function(e){var t=this;this.throttleQueue.push(e),this.throttleQueue.length>=this.batchCount?this.flush():(clearTimeout(this.batchWaitTimer),this.batchWaitTimer=setTimeout((function(){t.flush()}),this.config.wait))},e.prototype.sendLogs=function(e,t){var n=this;if(!e||!e.length)return"function"==typeof t&&t();var r=this.buildLogPackage(e,this.url);this.sendPackage(r,(function(e){e?n.errHandler(r):n.flushErrorLogs(),"function"==typeof t&&t(e)}))},e.prototype.sendPackage=function(e,t){var n=this.config.timeout;try{this.sendData(s(s({},e),{isDebug:this.isDebug,timeout:n}),t)}catch(e){"function"==typeof t&&t(e)}},e.prototype.buildLogPackage=function(e,t){return this.isV2?this.buildV2Package(e,t):this.buildV3Package(e,t)},e.prototype.buildV2Package=function(e,t){return{url:t,data:{log:{event:e}}}},e.prototype.buildV3Package=function(e,t,n){var r=this.getCommonPackageJSON();return n&&Object.assign(r,n),{url:t,data:{common:r,logs:e}}},e.prototype.errHandler=function(e){var t;if(this.isV2)this.errorQueue.unshift(e);else{var n=e.data;if(n.logs.length){delete n.common.h5_extra_attr.http_seq_id,delete n.common.h5_extra_attr.client_timestamp;for(var r=!1,o=0;o<this.errorQueue.length;o++){var a=this.errorQueue[o];if(a.url===e.url&&a.data.logs.length+n.logs.length<=100&&JSON.stringify(a.data.common)===JSON.stringify(n.common)){r=!0,(t=a.data.logs).push.apply(t,n.logs);break}}r||(this.errorQueue.length>=5&&this.errorQueue.pop(),this.errorQueue.unshift(e))}}},e.prototype.flushErrorLogs=function(){var e=this;this.errorQueue.forEach((function(t){e.sendPackage(t)})),this.errorQueue=[]},e.prototype.destory=function(){this.batchWaitTimer&&clearTimeout(this.batchWaitTimer),this.compensateTimer&&clearTimeout(this.compensateTimer)},e.prototype.sendRadar=function(e,t){var n=t?{service_name:t}:void 0,r=this.buildV3Package([e],this.radarUrl||this.url,n);this.sendPackage(r)},e}(),ue=(null===(J=null===window||void 0===window?void 0:window.navigator)||void 0===J?void 0:J.userAgent)||"",de=function(){if(Q)return Q;var e="unknow",t=/android/i,n="Mac OS",r="Windows",o="Android",a="iPhone",i="iPhone",s="Windows Phone",c="Linux";Q={os:{name:e,version:e},model:e};try{var u=ue.match(/\((.*?)\)/);if(!u)return t.test(ue)&&(Q.os.name=o),Q;var d=u[1]+")",l=d.split(";").map((function(e){return e.trim()})),p=void 0,g=void 0,f=void 0;if(ue.indexOf(s)>-1)f=p=s,(y=d.match(/Windows\sPhone\s(.*?)[;\)\s]/))&&(g=y[1]),f=l[l.length-1].replace(")","");else if(t.test(ue)){p=o;var h=d.match(/android.*?;(.*?)build\//i);h&&(f=(f=h[1].split(";").pop())&&f.trim());for(var v=0;v<l.length;v++)if(t.test(l[v])){g=l[v].replace(t,""),f||(f=l[v+1]);break}}else if(ue.indexOf(a)>-1||ue.indexOf(i)>-1){f=ue.indexOf(a)>-1?a:i,p="iOS",(y=d.match(/OS\s(.*?)\slike/))&&(g=y[1])}else if(ue.indexOf(n)>-1){f=p=n,(y=d.match(/OS\sX\s(.*?)[;\)\s]/))&&(g=y[1])}else if(ue.indexOf(r)>-1){var y;f=p=r,(y=d.match(/Windows\s(.*?)[;\)]/))&&(g=y[1])}else if(ue.indexOf("Nokia")>-1){p="Symbian";var m=ue.match(/Symbian.*?\/(.*?);/);m&&(g=m[1]);var _=ue.match(/Nokia(.*?)\//);_&&(f=_[1])}else d.indexOf(c)>-1&&(p=f=c);Q={os:{name:p||e,version:g&&g.replace(/_/g,".").trim()||e},model:f||e}}catch(e){}return Q};function le(){return void 0===Y&&(Y=b()&&K("kpn")||function(){if("undefined"==typeof window)return"";for(var e=window.navigator.userAgent,t=[[/ wxwork\//,"workWechat"],[/ MicroMessenger\//,"wechat"],[/ Kwai\//,"KUAISHOU"],[/ ksthanos\//,"THANOS"],[/ ksNebula\//i,"NEBULA"],[/ QQ\//,"qq"],[/__weibo__([^_]+)/,"weibo"],[/ livemate\//,"livemate"],[/ baiduboxapp\//,"baidu"],[/ MQQBrowser\//,"qqBrowser"],[/\(MSIE ([^;]+);/,"ie"]],n=0;n<t.length;n++){var r=t[n],o=r[0],a=r[1];if(o.exec(e))return a}return""}()||""),Y}var pe={supportsPushState:function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},getUAInfo:de,getDefaultKpn:le},ge=[["a7","640x1136",["iPhone 5","iPhone 5s"]],["a7","1536x2048",["iPad Air","iPad Mini 2","iPad Mini 3"]],["a8","640x1136",["iPod touch (6th gen)"]],["a8","750x1334",["iPhone 6"]],["a8","1242x2208",["iPhone 6 Plus"]],["a8","1536x2048",["iPad Air 2","iPad Mini 4"]],["a9","640x1136",["iPhone SE"]],["a9","750x1334",["iPhone 6s"]],["a9","1242x2208",["iPhone 6s Plus"]],["a9x","1536x2048",["iPad Pro (1st gen 9.7-inch)"]],["a9x","2048x2732",["iPad Pro (1st gen 12.9-inch)"]],["a10","750x1334",["iPhone 7"]],["a10","1242x2208",["iPhone 7 Plus"]],["a10x","1668x2224",["iPad Pro (2th gen 10.5-inch)"]],["a10x","2048x2732",["iPad Pro (2th gen 12.9-inch)"]],["a11","750x1334",["iPhone 8"]],["a11","1242x2208",["iPhone 8 Plus"]],["a11","1125x2436",["iPhone X"]],["a12","828x1792",["iPhone Xr"]],["a12","1125x2436",["iPhone Xs"]],["a12","1242x2688",["iPhone Xs Max"]],["a12x","1668x2388",["iPad Pro (3rd gen 11-inch)"]],["a12x","2048x2732",["iPad Pro (3rd gen 12.9-inch)"]]],fe=function(){try{var e=de(),t=b(),n=e.model||e.os.name||"unknown";if("iOS"!==e.os.name||t)return n;var r=function(){for(var e=T(),t=[],n=0,r=ge;n<r.length;n++){var o=r[n];e===o[1]&&(t=t.concat(o[2]))}return t.length&&t}();return r?r.join(" or "):n}catch(e){return"unknown"}},he={},ve=function(e){try{if(window&&window.localStorage&&"undefined"!=typeof Storage&&window.localStorage instanceof Storage){var t=Number(function(e){try{if(window&&window.localStorage){var t=window.localStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){return t}}}catch(e){return null}return null}(e))||0;return t+1>1e8&&(t=0),function(e,t){try{if(window&&window.localStorage)return window.localStorage.setItem(e,JSON.stringify(t)),!0}catch(e){return!1}}(e,t+1),t}}catch(e){}return he[e]||(he[e]=0),he[e]++},ye=0,me=b();function _e(){try{var e=de().os.name;return ye=e?"Android"===e?me?6:8:"iOS"===e?me?7:9:10:0}catch(e){return 0}}function we(){var e="unknown",t=null===window||void 0===window?void 0:window.navigator,n=(null==t?void 0:t.connection)||(null==t?void 0:t.mozConnection)||(null==t?void 0:t.webkitConnection);return n&&(e=n.type||n.effectiveType),e}var Pe=function(e){function t(t){var n=e.call(this,s({platform:_e(),container:10===ye?"WEB":"H5",version_name:me&&K("appver",void 0,!0)||"",network_type:we(),device_id:H(),global_id:me&&K("egid")||"",app_package:{language:navigator.language},device_package:{os_version:de().os.version,model:fe(),ua:navigator.userAgent}},t))||this;return Object.assign(n.h5_extra_attr,{host_product:le(),resolution:T(),screen_with:screen.width,screen_height:screen.height,device_pixel_ratio:window.devicePixelRatio||1,domain:window.location.origin},t.h5_extra_attr),n}return i(t,e),t.prototype.getVersionName=function(){return this.app_package.version_name},t.prototype.update=function(t){e.prototype.update.call(this,t);var n=this.app_package.version_name;if("string"==typeof n){var r=n.lastIndexOf(".");this.app_package.version_code=+n.slice(r+1)||0,this.h5_extra_attr.app_version_name=n}},t.prototype.setAdditionalSeqIdPackage=function(e){var t,n;this.additional_seq_id_package={channel:3,channel_seq_id:(n="NORMAL",void 0===n&&(n=""),ve("WEBLOGGER_CHANNEL_SEQ_ID_"+n)),custom_type:e,custom_seq_id:(t=e,ve("WEBLOGGER_V2_SEQ_ID_"+t))}},t.prototype.increaseH5SeqId=function(e){this.h5_extra_attr.client_timestamp=(new Date).valueOf(),this.h5_extra_attr.seq_id=ve(e?"WEBLOGGER_H5_CUSTOM_SEQ_ID":"WEBLOGGER_H5_SEQ_ID")},t}(F),be=function(e,t,n){return m("[error 400]","埋点上报接口请求报错","\nurl:",t,"\ndata",n,"\nerror:",e||"server decode log failed")};function ke(e,t){var n=e.url,r=e.data,o=e.timeout,a=new XMLHttpRequest;a.open("POST",n),a.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),"object"!=typeof r||r instanceof Uint8Array||(r=JSON.stringify(r)),o&&(a.timeout=o),a.onload=function(){var e=function(e,t,n,r){var o;if(e<200||e>=300&&304!==e);else try{var a=JSON.parse(t),i=a.exception,s=a.result,c=a.error_msg;i&&(o=i),1!==s&&(o=c||"result is "+s)}catch(e){o=e.message}return o&&be(o,n,r),o}(a.status,a.response,n,r);t&&t(e)},a.ontimeout=a.onerror=function(e){e&&be(e,n,r),t&&t(e?"networkTimeout":"")},a.send(r)}var Se=function(e){var t=function(t){return m("[error 401]","GET 请求出错 url: "+e,t)};try{var n=new XMLHttpRequest;n.open("GET",e),n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),n.send(),n.onerror=t}catch(e){t(e)}},Ee=null===window||void 0===window?void 0:window.navigator,Oe=Ee&&-1!==Ee.userAgent.indexOf("Chrome")&&"function"==typeof Ee.sendBeacon;function Ue(e,t){var n=e.url,r=e.data,o=e.timeout,a=e.isDebug;if(r=JSON.stringify(r),!a&&function(e){var t=e.url,n=e.data;if(!Oe)return!1;"object"==typeof n&&n.fd&&(n=n.fd);try{return Ee.sendBeacon(t,n)}catch(e){return m("[error 403]","navigator.sendBeacon 报错",e),!1}}({url:n,data:r}))return t&&t();ke({url:n,data:r,timeout:o},t)}var Te,Ne=function(e,t,n){return void 0===e&&(e=q),function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];null===console||void 0===console||(e=console.log).call.apply(e,l([null],t))}("%c埋点抓包校验: %c"+(e+"/#/logger/index?sessionId="+n),"color:#1abf89;font-size:1.2em;line-height:2.4em;","font-size:1.2em;"),t+"/"+n+"/"};!function(e){e.loading="loading",e.loaded="loaded"}(Te||(Te={}));var Ae,Le,Ce,Ie=Object.create(null),xe="weblogger_switch",Re=function(e){var t=function(){try{var e=K(xe)||"undefined"!=typeof sessionStorage&&sessionStorage.getItem(xe);if(!e)return;var t=JSON.parse(e),n=t.loggerSessionId,r=t.reportHost,o=t.loggerHost,a=t.handshakeApi;return n?(Se(a||r+"/"+n),Ne(o,r,n)):""}catch(e){return""}}()||function(e){void 0===e&&(e=location.href);var t=e.lastIndexOf("?");if(-1===t)return"";var n=k(e.slice(t+1)).webloggerSwitch;if(!n)return"";try{var r=decodeURIComponent(n),o=JSON.parse(r),a=o.loggerSessionId,i=o.reportHost,s=o.loggerHost,c=o.handshakeApi;return a?("undefined"!=typeof sessionStorage&&sessionStorage.setItem(xe,r),Se(c||i+"/"+a),Ne(s,i,a)):""}catch(e){return""}}();if(t)return ie(t,!1,e)},De=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.baseSendData=r.sendLog,r}return i(t,e),t.prototype.updateUrls=function(){var e=this.config,t=e.env,n=void 0===t?$:t,r=e.logger,o=e.proto,a=e.isBridge,i=!a&&Re();if(i)this.url=i,this.isDebug=!0;else if(r||n===Z||n===ee){var s=function(e,t){void 0===e&&(e=H()),void 0===t&&(t=!1);var n=t?"https://data-track-sgp.corp.kuaishou.com":q;return Se(n+"/rest/"+e),Ne(n,n+"/rest",e)}(this.commonPackage.identity_package.device_id,n===ee);this.url=ie(s,!1,o),this.isDebug=!0}else n&&/^(https?:)?\/\//.test(n)?this.url=n:(this.isDebug=n!==$,this.url=ie(n,!1,o),this.radarUrl=ie(n,!0,o));this.enableAsyncGzip="v3"===o&&!a&&A()&&n===$&&!i&&!r,this.enableAsyncGzip&&function(e,t,n){if(void 0===t&&(t=!0),Ie[e])return n&&n(e+" load repeat");var r=Ie[e]={state:Te.loading},o=document.createElement("script");o.src=e,t&&(o.async=!0);var a=document.getElementsByTagName("script")[0];a&&a.parentNode?a.parentNode.insertBefore(o,a):document.head.appendChild(o),o.onload=function(){r.state=Te.loaded,n&&n()},o.onerror=function(t){r.state=Te.loaded,n&&n(e+" loaded failed, "+t)}}("https://static.yximgs.com/udata/pkg/ks-track-platform-new/weblogger/3.9.30/async/gzipper.min.js"),this.formatUrl()},t.prototype.sendLog=function(e,t){!this.drained&&this.enableAsyncGzip&&this.sendGzip(e,t)||Ue(e,t)},t.prototype.sendGzip=function(e,n){var r;if(!(null===(r=t.Gzipper)||void 0===r?void 0:r.sendData))return!1;return t.Gzipper.sendData(e,(function(t){t&&Ue(e,n)}))},t.prototype.getCommonPackageJSON=function(){return this.commonPackage.toJSON()},t.prototype.send=function(t,n,r){void 0===n&&(n=!1),this.isV2&&(this.commonPackage.setAdditionalSeqIdPackage(t.getEventType()),t.common_package=this.getCommonPackageJSON()),e.prototype.send.call(this,t,n,r)},t}(ce);!function(e){var t,n,r,o,a,i,s,c;(t=e.ElementStatus||(e.ElementStatus={}))[t.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",t[t.CHECKED=1]="CHECKED",t[t.UNCHECKED=2]="UNCHECKED",(n=e.PageShowAction||(e.PageShowAction={}))[n.UNKNOWN_ACTION=0]="UNKNOWN_ACTION",n[n.ENTER=1]="ENTER",n[n.LEAVE=2]="LEAVE",n[n.RESUME=3]="RESUME",(r=e.ActionStatus||(e.ActionStatus={}))[r.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",r[r.SUCCESS=1]="SUCCESS",r[r.FAIL=2]="FAIL",(o=e.ActionType||(e.ActionType={}))[o.UNKNOWN_ACTION_TYPE=0]="UNKNOWN_ACTION_TYPE",o[o.CLICK=1]="CLICK",o[o.LEFT_PULL=2]="LEFT_PULL",o[o.RIGHT_PULL=3]="RIGHT_PULL",o[o.UP_PULL=4]="UP_PULL",o[o.DOWN_PULL=5]="DOWN_PULL",(a=e.SubAction||(e.SubAction={}))[a.UNKNOWN_SUB_ACTION=0]="UNKNOWN_SUB_ACTION",a[a.PAGE_ENTER=1]="PAGE_ENTER",a[a.PAGE_LEAVE=2]="PAGE_LEAVE",a[a.PAGE_RESUME=3]="PAGE_RESUME",a[a.PAGE_PAUSE=4]="PAGE_PAUSE",(i=e.Direction||(e.Direction={}))[i.UNKNOWN2=0]="UNKNOWN2",i[i.UP=1]="UP",i[i.DOWN=2]="DOWN",i[i.LEFT=3]="LEFT",i[i.RIGHT=4]="RIGHT",(s=e.TaskStatus||(e.TaskStatus={}))[s.UNKNOWN_STATUS=0]="UNKNOWN_STATUS",s[s.START=1]="START",s[s.RETRY=2]="RETRY",s[s.PAUSE=3]="PAUSE",s[s.RESUME=4]="RESUME",s[s.PENDING=5]="PENDING",s[s.PROCESSING=6]="PROCESSING",s[s.SUCCESS=7]="SUCCESS",s[s.FAIL=8]="FAIL",s[s.CANCEL=9]="CANCEL",s[s.FINISH=10]="FINISH",(c=e.OperationType||(e.OperationType={}))[c.UNKNOWN_OPERATION=0]="UNKNOWN_OPERATION",c[c.CLICK=1]="CLICK",c[c.DOUBLE_CLICK=2]="DOUBLE_CLICK",c[c.TRIPLE_CLICK=3]="TRIPLE_CLICK",c[c.LONG_PRESS=4]="LONG_PRESS",c[c.PULL=5]="PULL",c[c.DRAG=6]="DRAG",c[c.SCALE=7]="SCALE",c[c.PULL_DOWN=8]="PULL_DOWN",c[c.PULL_UP=9]="PULL_UP",c[c.RIGHT_CLICK=10]="RIGHT_CLICK",c[c.AUTO=11]="AUTO"}(Ae||(Ae={})),function(e){var t,n;(t=e.ShowType||(e.ShowType={}))[t.UNKNOWN_TYPE=0]="UNKNOWN_TYPE",t[t.PAGE_AUTO=10]="PAGE_AUTO",t[t.PAGE_CUSTOM=11]="PAGE_CUSTOM",t[t.ELEMENT=12]="ELEMENT",(n=e.TaskEventType||(e.TaskEventType={}))[n.UNKNOWN_TYPE=0]="UNKNOWN_TYPE",n[n.USER_OPERATION=1]="USER_OPERATION",n[n.STAY_LENGTH_STAT_EVENT=2]="STAY_LENGTH_STAT_EVENT",n[n.BACKGROUND_TASK_EVENT=3]="BACKGROUND_TASK_EVENT"}(Le||(Le={})),function(e){var t;(t=e.ShowType||(e.ShowType={}))[t.UNKNOWN2=0]="UNKNOWN2",t[t.PAGE=1]="PAGE"}(Ce||(Ce={}));var Ge,Ke,We=!0,Me=(new Date).valueOf(),Be=function(e,t){var n,r;void 0===t&&(t=!1);var o=e.type,a=e.currentUrlPackage,i=e.referUrlPackage,c=e.name,u=void 0===c?"":c,d=e.action,l=e.beginTime,p=e.params,g=e.contentPackage,f=e.status,h=e.actionType,v=e.auto,y=((n={status:f?Ae.ActionStatus[f]||Ae.ActionStatus.UNKNOWN_STATUS:Ae.ActionStatus.SUCCESS})[t?"show_type":"action_type"]=h?Ae.ActionType[h]||Ae.ActionType.UNKNOWN_ACTION_TYPE:Ae.ActionType.CLICK,n.url_package=a,n.refer_url_package=i,n[t?"content_wrapper":"content_package"]=g,n);if("PV"===o){var m=Ae.SubAction.PAGE_ENTER,_=Ae.PageShowAction.ENTER,w=We,P=0;switch(We=!1,d){case"leave":_=Ae.PageShowAction.LEAVE,m=Ae.SubAction.PAGE_LEAVE,P=(new Date).valueOf()-(l||Me);break;case"enter":_=Ae.PageShowAction.ENTER,m=Ae.SubAction.PAGE_ENTER,Me=(new Date).valueOf();break;case"visible":_=Ae.PageShowAction.RESUME,m=Ae.SubAction.PAGE_RESUME,Me=(new Date).valueOf();break;case"hidden":_=Ae.PageShowAction.LEAVE,m=Ae.SubAction.PAGE_PAUSE,P=(new Date).valueOf()-(l||Me)}var b=v?Le.ShowType.PAGE_AUTO:Le.ShowType.PAGE_CUSTOM;return t&&(w=void 0,b=Ce.ShowType.PAGE),{show_event:s({action:_,sub_action:m,type:b,first_load:w,time_cost:0,stay_length:P},y)}}return{show_event:s({action:t?0:Ae.PageShowAction.ENTER,type:t?0:Le.ShowType.ELEMENT,sub_action:t?0:Ae.SubAction.PAGE_ENTER,element_package:(r={},r[t?"action2":"action"]=u,r.params=JSON.stringify(p),r)},y)}},Ve=function(e,t){var n,r;void 0===t&&(t=!1);var o=e.sessionId,a=e.currentUrlPackage,i=e.referUrlPackage,c=e.name,u=e.params,d=e.type,l=e.contentPackage,p=e.status,g=e.taskType,f=e.operationDirection,h=((n={url_package:a,refer_url_package:i,element_package:(r={},r[t?"action2":"action"]=c,r.params=JSON.stringify(u),r)})[t?"content_wrapper":"content_package"]=l,n);return t?"CLICK"===d?{click_event:s({type:g&&Ae.OperationType[g]||Ae.OperationType.CLICK,direction:f&&Ae.Direction[f]||Ae.Direction.UNKNOWN2},h)}:{task_event:s({action2:d,status:p&&Ae.TaskStatus[p]||Ae.TaskStatus.UNKNOWN_STATUS},h)}:{task_event:s({type:g&&Le.TaskEventType[g]||Le.TaskEventType.USER_OPERATION,status:p&&Ae.TaskStatus[p]||Ae.TaskStatus.UNKNOWN_STATUS,operation_type:Ae.OperationType[d]||Ae.OperationType.CLICK,operation_direction:f&&Ae.Direction[f]||Ae.Direction.UNKNOWN2,session_id:o},h)}},je=function(e){var t=e.name,n=e.params,r=e.currentUrlPackage,o=e.referUrlPackage,a=c(e,["name","params","currentUrlPackage","referUrlPackage"]);return{key:t,value:JSON.stringify(s(s({url_package:r,refer_url_package:o},n),a))}},He=function(e){var t=e.currentUrlPackage,n=e.referUrlPackage,r=e.options;return{video_stat_event:s(s({},r),{url_package:t,refer_url_package:n})}},Je=(Ge=(new Date).getTimezoneOffset()/60)<=0?"GMT+"+P(-Ge+"",2,"0")+":00":"GMT-"+P(Ge+"",2,"0")+":00",Qe=function(){function e(e,t){void 0===t&&(t=!1),this.client_timestamp=(new Date).valueOf(),this.client_increment_id=0,this.session_id=h.sessionId,this.event_id="",t||(this.time_zone=Je),Object.assign(this,e),this.genIncrementId()}return e.prototype.genIncrementId=function(){this.client_increment_id=this.isCustomStatEvent()?ve("WEBLOGGER_CUSTOM_INCREAMENT_ID_KEY"):ve("WEBLOGGER_INCREAMENT_ID_KEY")},e.prototype.isCustomStatEvent=function(){return!(!this.stat_package||!("custom_stat_event"in this.stat_package))},e.prototype.getEventType=function(){if(this.event_package){var e=this.event_package,t=e.task_event,n=e.show_event,r=e.click_event,o=e.custom_event;if(n)return"showEvent";if(r)return"clickEvent";if(t)return"taskEvent";if(o)return"customEvent"}return"customEvent"},e}();function Ye(e,t,n){var r;void 0===n&&(n=!1);var o,a=t.eventId,i=t.currentUrlPackage,s=t.referUrlPackage,u=t.contentPackage,d=t.name,l=t.params;switch(n&&"RADAR"!==e&&"CUSTOM"!==e&&(i&&(i.page2=i.page,delete i.page),s&&(s.page2=s.page,delete s.page)),e){case"PV":case"SHOW":return new Qe({event_package:Be({type:e,status:t.status,currentUrlPackage:i,referUrlPackage:s,action:t.type,beginTime:t.beginTime,actionType:t.actionType,name:d,params:l,contentPackage:u,operationDirection:t.operationDirection,auto:t.auto},n),event_id:a},n);case"CUSTOM":case"CUSTOM_STAT_EVENT":var p=je({name:d,params:l,currentUrlPackage:i,referUrlPackage:s});return new Qe(n?{event_package:{custom_event:p},event_id:a}:{stat_package:{custom_stat_event:p},event_id:a},n);case"RADAR":return new Qe({stat_package:{custom_stat_event:je({name:d,params:l,currentUrlPackage:i,referUrlPackage:s})},event_id:a},n);case"HEART_BEAT_EVENT":case"LAUNCH_EVENT":case"APP_USAGE_STAT_EVENT":case"EXCEPTION_EVENT":case"DEVICE_STAT_EVENT":return new Qe({stat_package:(r={},r[e.toLowerCase()]=(o=t,o.currentUrlPackage,o.referUrlPackage,c(o,["currentUrlPackage","referUrlPackage"])),r)},n);case"VIDEO":return new Qe(n?{stat_package:He({currentUrlPackage:i,referUrlPackage:s,options:l.params})}:{event_package:Ve({type:e,status:t.status,taskType:t.taskType,sessionId:h.sessionId,currentUrlPackage:i,referUrlPackage:s,name:d,params:l.params,contentPackage:u},n),event_id:a},n);default:return new Qe({event_package:Ve({type:e,status:t.status,taskType:t.taskType,sessionId:h.sessionId,currentUrlPackage:i,referUrlPackage:s,name:d,params:l,contentPackage:u},n),event_id:a},n)}}var ze,Fe,qe=null,Xe="tool",$e=!1,Ze=function(e){return void 0===e&&(e=Ke||"undefined"!=typeof window&&window.yoda),Ke&&Ke.isInYoda?Ke:e&&e.isInYoda?Ke=e:null},et=function(){return u(void 0,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:if(!Ke||$e)return[2];e.label=1;case 1:return e.trys.push([1,6,,7]),qe?[4,qe]:[3,3];case 2:return e.sent(),[3,5];case 3:return[4,qe=Ke.ready()];case 4:e.sent(),Ke.register({namespace:"webview",name:"getPageLoadData"}),Ke.register({namespace:"tool",name:"setClientLog"}),Ke.register({namespace:"tool",name:"sendRadarLog"}),Ke.register({namespace:"tool",name:"getKswitchData"}),e.label=5;case 5:return qe=null,$e=!0,[3,7];case 6:return e.sent(),[3,7];case 7:return[2]}}))}))},tt=function(e,t){return void 0===t&&(t="tool"),u(void 0,void 0,void 0,(function(){var n,r,o;return d(this,(function(a){switch(a.label){case 0:return n=!1,Ke?$e?[3,2]:[4,et()]:[3,5];case 1:a.sent(),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,Ke.tool.canIUse({namespace:t,name:e})];case 3:return r=a.sent().canUse,n=r,[3,5];case 4:return o=a.sent(),m("[error 206]","yoda.tool.canIUse({ '"+t+"', '"+e+"' }) 报错: "+o.message),[3,5];case 5:return[2,n]}}))}))},nt=function(e,t){return u(void 0,void 0,void 0,(function(){var n;return d(this,(function(r){switch(r.label){case 0:return Ke?$e?[3,2]:[4,et()]:[2];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,Ke[Xe].setClientLog({type:e,data:t},(function(n,r){n&&1!==n.result&&m("[error 203]","yoda.tool.setClientLog 埋点发送失败",JSON.stringify({type:e,data:t}),"result: "+n+", message: "+r)}))];case 3:return[2,r.sent()];case 4:return n=r.sent(),m("[error 209]","yoda."+Xe+".setClientLog() 报错: "+n.message),[3,5];case 5:return[2]}}))}))},rt=function(){return u(void 0,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return Ke?$e?[3,2]:[4,et()]:[2,!1];case 1:t.sent(),t.label=2;case 2:return[4,tt(e="setClientLog","tool")];case 3:return t.sent()?(Xe="tool",[2,!0]):[4,tt(e,"platform")];case 4:return t.sent()?(Xe="platform",[2,!0]):[2,!1]}}))}))},ot=void 0,at=function(e,t){return u(void 0,void 0,void 0,(function(){var n,r;return d(this,(function(o){switch(o.label){case 0:return Ke?$e?[3,2]:[4,et()]:[2];case 1:o.sent(),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,null===(r=Ke.tool)||void 0===r?void 0:r.handleEntryTag({type:e,params:t})];case 3:return(n=o.sent())&&n.data&&n.data.entryTag?[2,n.data.entryTag]:[3,5];case 4:return m("[error 213]","操作染色参数报错",o.sent()),[3,5];case 5:return[2,null]}}))}))},it={isSupportBridgeLog:rt,isSupportBridge:tt,getWebviewLoadPerf:function(e){return void 0===e&&(e={}),u(void 0,void 0,void 0,(function(){var t;return d(this,(function(n){switch(n.label){case 0:return Ke?$e?[3,2]:[4,et()]:[2];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,null===(t=Ke.webview)||void 0===t?void 0:t.getPageLoadData(e)];case 3:return[2,n.sent()];case 4:return m("[error 207]","yoda.webview.getPageLoadData() 报错: "+n.sent().message),[3,5];case 5:return[2]}}))}))},sendRadarLog:function(e){return void 0===e&&(e={}),u(void 0,void 0,void 0,(function(){var t;return d(this,(function(n){switch(n.label){case 0:return Ke?$e?[3,2]:[4,et()]:[2];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,5]),[4,null===(t=Ke.tool)||void 0===t?void 0:t.sendRadarLog(e,(function(t,n){t&&1!==t.result&&m("[error 205]","yoda.tool.sendRadarLog 埋点发送失败",JSON.stringify(e),"result: "+t+", message: "+n)}))];case 3:return[2,n.sent()];case 4:return m("[error 207]","yoda.tool.sendRadarLog() 报错: "+n.sent().message),[3,5];case 5:return[2]}}))}))},setClientLog:nt,initYoda:et,yodaAlready:$e,getKDSWebviewLoadPerf:function(e){return void 0===e&&(e={}),u(void 0,void 0,void 0,(function(){var t;return d(this,(function(n){switch(n.label){case 0:return Ke?$e?[3,2]:[4,et()]:[2];case 1:n.sent(),n.label=2;case 2:return[4,tt("getPageLoadData","system")];case 3:if(!n.sent())return[3,7];n.label=4;case 4:return n.trys.push([4,6,,7]),[4,null===(t=Ke.system)||void 0===t?void 0:t.getPageLoadData(e)];case 5:return[2,n.sent()];case 6:return m("[error 212]","yoda.system.getPageLoadData() 报错",n.sent().message),[3,7];case 7:return[2]}}))}))},sendSummarizedLog:function(e){return void 0===e&&(e={}),u(void 0,void 0,void 0,(function(){var t;return d(this,(function(n){switch(n.label){case 0:if(!Ke)return[2];n.label=1;case 1:return n.trys.push([1,5,,6]),$e?[3,3]:[4,et()];case 2:n.sent(),n.label=3;case 3:return[4,null===(t=Ke.tool)||void 0===t?void 0:t.sendSummarizedLog(e)];case 4:return[2,n.sent()];case 5:return m("[error 208]","yoda.tool.sendSummarizedLog() 报错: "+n.sent().message),[3,6];case 6:return[2]}}))}))}},st=function(e,t,n,r){void 0===e&&(e=p.CLICK),void 0===t&&(t={}),"string"!=typeof e&&(e=e.type),e=e.toUpperCase();var o={};return"string"==typeof t?(o.contentPackage=r,"CUSTOM"===e?(o.key=t,o.value=n):(o.params=n,"PV"===e?o.page=t:o.action=t)):o=t,[e,o]},ct=!1,ut=Math.random(),dt=function(e){function t(t,n){void 0===t&&(t={});var r,o,a,i=e.call(this,t,n)||this;return i.yoda=null,i.SampledPageMap={},i.beforeUnload=function(e){if(!ct){for(var t in i.logger.drain(),i.plugins){var n=i.plugins[t];"function"==typeof n.beforeUnload&&n.beforeUnload(e)}ct=!0,setTimeout((function(){ct=!1}),2e3)}},i.isBridge=t.bridgeMode&&t.yoda&&t.yoda.isInYoda,i.logConfig.isBridge=i.isBridge,r="sessionId",o=n&&n.session_id||K("sid")||(a="",b()&&(a=K("session_id")||K("sid"))?a:B()),h[r]=o,i.isV2="v2"===i.logConfig.proto,i.getSampled(t),i.presetBaseOption(i.baseOption),i.commonPackage=new Pe(i.baseOption),i.logger=new De(i.logConfig,i.commonPackage),i.initYoda(),i.addPlugins(),_(window,"pagehide",i.beforeUnload),_(window,"beforeunload",i.beforeUnload),i}return i(t,e),t.prototype.getSampled=function(e){"function"==typeof e.sampleRateFn?this.sampled=!!e.sampleRateFn():void 0!==e.sampleRate&&(this.sampled=ut<Number(e.sampleRate))},t.prototype.presetBaseOption=function(e){this.isBridge||(this.isV2?("number"!=typeof e.product&&m("[error 101]","请设置有效的 product 值，值类型为 number!"),delete e.product_name):(e.product_name&&"string"==typeof e.product_name||m("[error 100]","请设置有效的 product_name 值，值类型为 string!"),delete e.product),e.user_id||(e.user_id=K("userId")||K("userName")||void 0,e.user_id||function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];null===console||void 0===console||(e=console.warn).call.apply(e,l([null],t))}("[warn 102]","user_id 为空，请确定是否传入，如果是异步通过 updateCommonPackage 接口传入，可以忽略该提示!")),e.device_id||(e.device_id=H(),e.device_id||m("[error 103]","device_id 为空，请设置有效的设备 id!")),!e.global_id&&b()&&(e.global_id=K("egid")||""))},Object.defineProperty(t.prototype,"Utils",{get:function(){return{yoda:this.yoda&&it,cookie:M,ua:pe,io:{sendData:Ue}}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isKSwitchSampled",{get:function(){return void 0!==typeof ot},enumerable:!1,configurable:!0}),t.prototype.initYoda=function(){return u(this,void 0,void 0,(function(){var e=this;return d(this,(function(t){switch(t.label){case 0:return this.logConfig.yoda&&!this.yoda&&(this.yoda=Ze(this.logConfig.yoda)),this.yoda?[4,et()]:[3,2];case 1:t.sent(),t.label=2;case 2:return u(void 0,void 0,void 0,(function(){var e,t,n,r,o;return d(this,(function(a){switch(a.label){case 0:if(!Ke)return[2,ot=null];if(void 0!==ot)return[2,ot];a.label=1;case 1:return a.trys.push([1,4,,5]),[4,tt("getKswitchData","tool")];case 2:return a.sent()?[4,Ke.tool.getKswitchData({keys:[{key:"webloggerSampling"}]})]:[2,ot=null];case 3:if((e=a.sent())&&e.data&&("string"==typeof(t=e.data[0])&&(t=JSON.parse(t)),n=t?t.value:null)){for(o in"string"==typeof n&&(n=JSON.parse(n)),r="undefined"!=typeof location?location.host:"*",n)"*"!==o&&-1===o.indexOf(r)||(ot||(ot={}),ot[o]=n[o]);if(ot)return[2,ot]}return[3,5];case 4:return m("[error 201]","yoda.tool.getKswitchData 采样配置获取出错",a.sent().message),[3,5];case 5:return[2,ot=null]}}))})).then((function(){e.currentUrlPackage&&(e.currentUrlPackage.sampled=e.getPageSampled())})),u(void 0,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return Ke?[4,tt("getDeviceInfo","system")]:[2,null];case 1:if(!t.sent())return[3,5];t.label=2;case 2:return t.trys.push([2,4,,5]),[4,null===(e=Ke.system)||void 0===e?void 0:e.getDeviceInfo()];case 3:return[2,t.sent()];case 4:return m("[error 210]","yoda.system.getDeviceInfo() 报错",t.sent().message),[3,5];case 5:return[2]}}))})).then((function(t){t&&t.mod&&(e.commonPackage.device_package.model=t.mod)})),u(void 0,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return Ke?[4,tt("getAppInfo","system")]:[2,null];case 1:if(!t.sent())return[3,5];t.label=2;case 2:return t.trys.push([2,4,,5]),[4,null===(e=Ke.system)||void 0===e?void 0:e.getAppInfo()];case 3:return[2,t.sent()];case 4:return m("[error 209]","yoda.system.getAppInfo() 报错",t.sent().message),[3,5];case 5:return[2]}}))})).then((function(t){t&&(t.did&&(e.commonPackage.identity_package.device_id=t.did),t.userId&&!e.commonPackage.identity_package.user_id&&(e.commonPackage.identity_package.user_id=t.userId),t.appver&&(e.commonPackage.app_package.version_name=t.appver))})),[2]}}))}))},t.prototype.initUrlPackage=function(){e.prototype.initUrlPackage.call(this);var t,n=this.logConfig.referer,r="web";n?(t=n.value,r=n.type&&n.type||r):"undefined"!=typeof document&&document.referrer&&(t=document.referrer),t&&this.updateReferUrlPackage(t,r)},t.prototype.updateCurrentUrlPackage=function(e,t){if(void 0===e&&(e=(null===location||void 0===location?void 0:location.href)||""),void 0===t&&(t="web"),"object"==typeof e&&e.page&&!e.force&&this.currentUrlPackage&&e.page===this.currentUrlPackage.page)return this.currentUrlPackage.update(e.page,e.params);this.currentUrlPackage=new z(e,t,this.logConfig.urlMap),this.currentUrlPackage.sampled=this.getPageSampled(),this.logConfig.attachUrl&&this.currentUrlPackage.attachUrl()},t.prototype.updateReferUrlPackage=function(e,t){void 0===e&&(e=this.currentUrlPackage),void 0===t&&(t="web"),this.referUrlPackage=e instanceof z?e:new z(e,t,this.logConfig.urlMap)},t.prototype.getPageSampled=function(){if(!ot)return"boolean"!=typeof this.sampled||this.sampled;var e="undefined"!=typeof location?location.href.replace(/https?:\/\//,"").split("?")[0]:"*";if(this.SampledPageMap&&void 0!==this.SampledPageMap[e])return this.SampledPageMap[e];if(ot){var t=void 0,n=0,r=null,o=[];for(var a in ot)if(ot.hasOwnProperty(a)){var i=0;if("*"===a?i=1:0===e.indexOf(a)&&(a===e?i=100:"/"===a[a.length-1]&&(i=11-1/a.length)),!i)continue;var s=ot[a],c=s.radar,u=s.overwrite,d=s.overall;i+=u?1e3:0,c&&o.push({radar:c,level:i}),i>n&&(n=i,t=d)}n&&(r={},o.sort((function(e,t){return e.level-t.level})).forEach((function(e){Object.assign(r,e.radar)})));var l=void 0;l=n>1e3||void 0===this.sampled?Math.random()<Number(t)&&(!r||{radar:r}):"boolean"!=typeof this.sampled||this.sampled,this.SampledPageMap&&(this.SampledPageMap[e]=l)}return this.SampledPageMap&&this.SampledPageMap[e]},Object.defineProperty(t.prototype,"isSendSampled",{get:function(){return this.currentUrlPackage&&this.currentUrlPackage.sampled||this.logger.isDebug},enumerable:!1,configurable:!0}),t.prototype.generateLog=function(e,t,n){void 0===n&&(n=Ye);var r,o=t,a=o.action,i=o.params,c=o.status,u=o.type,d=o.eventId,l=o.contentPackage,p=o.urlPage;if(l&&(l="string"==typeof l?l:JSON.stringify(l)),e===g.PV){var f=t,h=f.page,v=f.type;v||(t.type=v="enter"),"enter"===v&&h?this.updateCurrentUrlPackage({page:h,params:i}):this.currentUrlPackage.update(h,i)}else p&&p.page&&(r={page:p.page,identity:p.identity||B(),params:JSON.stringify(p.params),page_type:this.currentUrlPackage.page_type});var y={currentUrlPackage:r||this.currentUrlPackage.toJSON(),referUrlPackage:this.referUrlPackage?this.referUrlPackage.toJSON():void 0,contentPackage:l};if(e!==g.RADAR&&y.currentUrlPackage.page.indexOf("http"),e===g.PV){var m=t.type;return n(e,s(s(s({},t),{type:m}),y),this.isV2)}if(e===g.SHOW)return n(e,s(s(s({},t),{name:a}),y),this.isV2);if(e===g.VIDEO)return n(e,s({params:t,name:"VIDEO"},y),this.isV2);if(e===g.RADAR)return n(e,t,this.isV2);if(e===g.CUSTOM){var _=t,w=_.key,P=_.value,b=_.eventId;return n(e,s(s(s({},t),{params:P,eventId:b,name:w}),y),this.isV2)}return n(e,s(s(s({},t),{params:i,status:c,taskType:u,eventId:d,name:a}),y),this.isV2)},t.prototype.collect=function(e,t,n,r){var o=st(e,t,n,r),a=o[0],i=o[1];return this.send(a,i,!1)},t.prototype.sendImmediately=function(e,t,n,r){var o=st(e,t,n,r),a=o[0],i=o[1];return this.send(a,i,!0)},t.prototype.beforeSend=function(e,t,n){var r,o,a=this;if(this.emit("event",{type:e,action:t.type||t.action,data:n}),"CLICK"===e){var i=null===(r=t)||void 0===r?void 0:r.entryTag;this.yoda&&i&&at("setPendingEntryTag",{entryTag:s({page_name:this.currentUrlPackage.page,element_action:null==t?void 0:t.action},i)})}else if("PV"===e&&this.yoda&&!this.isBridge){if("enter"===((null===(o=t)||void 0===o?void 0:o.type)||"enter")){this.logger.sendingYield=u(a,void 0,void 0,(function(){var e,t;return d(this,(function(n){switch(n.label){case 0:return e=this.currentUrlPackage.identity,[4,at("clearEntryTag",{subPage:e})];case 1:return n.sent(),[4,at("consumeEntryTag",{subPage:e})];case 2:return t=n.sent(),this.commonPackage.updateGlobalAttr({entry_tag:t}),[2]}}))}))}}},t.prototype.send=function(e,t,n){if(!this._silenced){var r=this.generateLog(e,t);if(this.beforeSend(e,t,r),"RADAR"===e)return this.logger.sendRadar(r,null==t?void 0:t.serviceName);if((!this.isV2||!this.logConfig.forbidV2HttpUrlPage||O(this.currentUrlPackage.page))&&this.isSendSampled){var o="object"==typeof t&&t.callback||void 0;this.logger.send(r,!!n,o)}}},t.prototype.destroy=function(){e.prototype.destroy.call(this),w(window,"pagehide",this.beforeUnload),w(window,"beforeunload",this.beforeUnload)},t.prototype.silence=function(e){this._silenced=e},t.Logger=De,t}(x);try{var lt=__webpack_require__(/*! @ks/yoda-js-sdk */ "./node_modules/@ks/yoda-js-sdk/dist/yoda.common.js");Fe=Ze(lt.default||lt)}catch(e){Fe=Ze("undefined"!=typeof window&&(window.yoda||window.KSYoda))}var pt,gt=null===(ze=null===window||void 0===window?void 0:window.navigator)||void 0===ze?void 0:ze.platform,ft=gt&&-1!==["iOS","Android"].indexOf(gt),ht=function(e){function t(t,n){return e.call(this,s(s({},t),{yoda:Fe||void 0,bridgeMode:!(null==t?void 0:t.disableBridge)}),n)||this}return i(t,e),t.prototype.checkSupport=function(){return u(this,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return this.logConfig.disableBridge?(this.isSupportBridgeLogger=!1,[3,3]):[3,1];case 1:return e=this,[4,rt()];case 2:e.isSupportBridgeLogger=t.sent(),t.label=3;case 3:return[2]}}))}))},t.prototype.sendByBridge=function(e,t,n){void 0===e&&(e=p.CLICK);var r=t.contentPackage;if(r&&(r="string"==typeof r?r:JSON.stringify(r)),"PV"===e){var o=t,a=o.page,i=o.type,c=o.params,u=o.coPage;i||(t.type=i="enter"),"enter"===i?(this.updateCurrentUrlPackage({page:a||this.currentUrlPackage.page,params:c||this.currentUrlPackage.params,force:!0}),u&&(this.currentUrlPackage.coPage=u)):this.currentUrlPackage.update(a,c)}var d=!!this.currentUrlPackage.coPage,l=function(e,t){var n=t,r=n.action,o=n.params,a=n.eventId,i=n.contentPackage,c=n.currentUrlPackage,u=n.status;n.name;var d=n.feedLogCtx;switch(e){case"PV":var l=t,p=l.type,g=l.beginTime;return s(s({},c),{actionType:p,contentPackage:i,pageType:"H5",status:u||"SUCCESS",beginTime:g,eventId:a});case"SHOW":return{action:r,params:JSON.stringify(o),contentPackage:i,feedLogCtx:d,eventId:a};case"RADAR":case"CUSTOM":var f=t,h=f.key,v=f.value,y=f.biz;return{key:h,value:JSON.stringify(s(s({},v),{url_package:c})),biz:y,eventId:a};default:var m=t.type;return{action:r,params:JSON.stringify(o),contentPackage:i,type:m||"USER_OPERATION",status:u||"UNKNOWN_STATUS",operationType:e,operationDirection:"UNKNOWN2",feedLogCtx:d,eventId:a}}}(e,s(s({},t),{contentPackage:r,currentUrlPackage:this.currentUrlPackage.toJSON()})),g=-1!==["CUSTOM","RADAR"].indexOf(e);this.commonPackage.increaseH5SeqId(g);var f=this.baseOption,h=f.service_name,v=f.sub_biz,y=f.need_encrypt;if(l.h5ExtraAttr=JSON.stringify(this.commonPackage.getH5ExtraAttr({bridge_info:(null==Fe?void 0:Fe.version)||!0,coPage:d})),l.realtime=!!n,l.serviceName=h||"",l.subBiz=v||"",l.needEncrypt=y||!1,l.container=ft?"REACT_NATIVE":"H5",this.emit("event",{type:e,action:t.type||t.action,data:l}),"PV"!==e)return this.currentUrlPackage&&!this.logConfig.disablePV&&(l.urlPage={page:this.currentUrlPackage.page,params:JSON.stringify(this.currentUrlPackage.params),identity:this.currentUrlPackage.identity,coPage:d}),"SHOW"===e?nt("addElementShowEvent",l):g?(this.logConfig.biz&&!l.biz&&(l.biz=this.logConfig.biz),nt("addCustomStatEvent",l)):nt("addTaskEvent",l);this.logConfig.disablePV||O(this.currentUrlPackage.page)&&("enter"!==(i=t.type)&&"visible"!==i||(l.coPage=d,l.pageType=ft?"NATIVE":"H5",nt("setCurrentPage",l)))},t.prototype.sendByHttp=function(t,n,r){return void 0===t&&(t=p.CLICK),e.prototype.send.call(this,t,n,r)},t.prototype.send=function(e,t,n){return void 0===e&&(e=p.CLICK),u(this,void 0,void 0,(function(){return d(this,(function(r){switch(r.label){case 0:return void 0!==this.isSupportBridgeLogger?[3,2]:[4,this.checkSupport()];case 1:r.sent(),r.label=2;case 2:return this.isSupportBridgeLogger?(this.logConfig.openHttpSender&&this.sendByHttp(e,t,n),this.beforeSend(e,t),[2,this.sendByBridge(e,t,n)]):(this.sendByHttp(e,t,n),[2])}}))}))},t}(dt),vt=function(){function e(){this.weblog="undefined"!=typeof window&&window._GLOBAL_KS_WEBLOGGER_&&window._GLOBAL_KS_WEBLOGGER_.weblog}return e.prototype.apply=function(e){this.weblog=e},e}();pt=ht,void 0!==window._GLOBAL_KS_WEBLOGGER_?window._GLOBAL_KS_WEBLOGGER_.Factory=pt:window.Weblog=pt,(null==N?void 0:N.constructors)&&pt&&-1===N.constructors.indexOf(pt)&&(pt._classId=N.constructors.length,N.constructors.push(pt)),function(){if(null==N?void 0:N.silence)try{N._silenced=!!sessionStorage.getItem(C)}catch(e){}}(),e.BasePlugin=vt,e.Weblog=ht,e.default=ht,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=log.hybrid.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ks/weblogger/lib/plugins/autopv.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ks/weblogger/lib/plugins/autopv.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};var t=function(){function e(){this.weblog="undefined"!=typeof window&&window._GLOBAL_KS_WEBLOGGER_&&window._GLOBAL_KS_WEBLOGGER_.weblog}return e.prototype.apply=function(e){this.weblog=e},e}();function n(e,t,n,a){return"attachEvent"in e?e.attachEvent("on"+t,n):e.addEventListener(t,n,a)}function a(e,t,n,a){return"attachEvent"in e?e.detachEvent("on"+t,n):e.removeEventListener(t,n,a)}function o(e){for(var t={},n=0,a=e.split("&");n<a.length;n++){var o=a[n].split("="),i=o[0],r=o[1];i in t?t[i]instanceof Array?t[i].push(r):t[i]=[t[i],r]:t[i]=r}return t}var i,r,l=function(e,t){var n=e.url,a=e.page,i=e.params,r=e.pageId;if(!a&&"string"==typeof n){var l=function(e){void 0===e&&(e=location.href);var t=e.lastIndexOf("?");return-1===t?{page:e}:{page:e.slice(0,t),params:o(e.slice(t+1))}}(n);a=l.page,i=l.params}if("function"==typeof t)try{var u=t({url:n,page:a,params:i});"string"==typeof u?a=u:"object"==typeof u&&(u.page&&(a=u.page),u.params&&(i=u.params),u.pageId&&(r=u.pageId))}catch(e){}else if("object"==typeof t){var p="";for(var c in t)if((n||a||"").indexOf(c)>-1){p=t[c];break}p&&(a=p)}return{page:a,params:i,pageId:r}},u=!1,p="hashchange";return function(t){function o(e,n){var a=t.call(this)||this;return a.beginTime=(new Date).valueOf(),a.visibilityChange=function(){var e=document.visibilityState;"visible"===e&&(u=!1),a.weblog&&!u&&a.autoPVFilter(location.href,null,e)&&("hidden"!==e&&"visible"!==e||("visible"===e&&(a.beginTime=(new Date).valueOf()),a.weblog.sendImmediately("PV",{type:e,auto:!0,beginTime:a.beginTime})))},a.proxyPushState=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.urlChange(),i.apply(history,e)},a.proxyReplaceState=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.urlChange(),r.apply(history,e)},a.urlChange=function(){a.weblog&&setTimeout((function(){var e=l({url:location.href},a.weblog.logConfig.urlMap),t=e.page,n=e.params,o=e.pageId;t&&t===a.weblog.currentUrlPackage.page?a.weblog.currentUrlPackage.update(t,n,o):(a.autoPVFilter(location.href,a.weblog.currentUrlPackage.page,"leave")&&a.weblog.sendImmediately("PV",{type:"leave",auto:!0,beginTime:a.beginTime,urlPage:a.weblog.currentUrlPackage.toJSON()}),a.autoPVFilter(location.href,a.weblog.currentUrlPackage.page,"enter")&&(a.weblog.updateReferUrlPackage(a.weblog.currentUrlPackage),a.weblog.updateCurrentUrlPackage(location.href),a.weblog.currentUrlPackage.page.indexOf("http"),a.beginTime=(new Date).valueOf(),a.weblog.sendImmediately("PV",{type:"enter",auto:!0})))}),0)},a.beforeUnload=function(){u=!0,a.weblog&&a.autoPVFilter(location.href,null,"leave")&&a.weblog.sendImmediately("PV",{type:"leave",auto:!0,beginTime:a.beginTime})},a.autoPVFilter=function(){return!0},e&&("function"==typeof e?a.autoPVFilter=e:"collect"in e&&"function"==typeof e.collect?((null==n?void 0:n.autoPVFilter)&&(a.autoPVFilter=n.autoPVFilter),a.apply(e)):"autoPVFilter"in e&&"function"==typeof e.autoPVFilter&&(a.autoPVFilter=e.autoPVFilter)),n&&"function"==typeof n.autoPVFilter&&(a.autoPVFilter=n.autoPVFilter),a}return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}(o,t),o.prototype.apply=function(e){if(e&&e.sendImmediately){this.weblog=e,this.autoPVFilter(location.href,null,"enter")&&this.weblog.sendImmediately("PV",{type:"enter",auto:!0}),i=history.pushState,r=history.replaceState,history.pushState=this.proxyPushState,history.replaceState=this.proxyReplaceState;var t=e.Utils.ua.supportsPushState;p=t()?"popstate":"hashchange",n(window,p,this.urlChange),n(document,"visibilitychange",this.visibilityChange)}},o.prototype.destroy=function(){a(window,p,this.urlChange),a(document,"visibilitychange",this.visibilityChange),i&&(history.pushState=i),r&&(history.replaceState=r)},o.key="autoPV",o}(t)}));
//# sourceMappingURL=autopv.js.map


/***/ }),

/***/ "./node_modules/@ks/weblogger/lib/plugins/radar.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ks/weblogger/lib/plugins/radar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};function e(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var r=function(){return(r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function n(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function o(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))}function i(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function a(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function s(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return null===console||void 0===console?void 0:(t=console.warn).call.apply(t,a([null],e))}function c(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return null===console||void 0===console?void 0:(t=console.error).call.apply(t,a([null],e))}function u(t,e,r,n){return"attachEvent"in t?t.attachEvent("on"+e,r):t.addEventListener(e,r,n)}function l(t,e,r,n){return"attachEvent"in t?t.detachEvent("on"+e,r):t.removeEventListener(e,r,n)}function p(t){for(var e={},r=0,n=t.split("&");r<n.length;r++){var o=n[r].split("="),i=o[0],a=o[1];i in e?e[i]instanceof Array?e[i].push(a):e[i]=[e[i],a]:e[i]=a}return e}function d(t){var e="";if("string"==typeof t)e=t;else try{e=JSON.stringify(t)}catch(r){e=String(t)}for(var r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);r+=o<128?1:o<2048?2:o<65536?3:o<1<<21?4:o<1<<26?5:o<1<<31?6:Number.NaN}return r}var f=function(){function t(){this.weblog="undefined"!=typeof window&&window._GLOBAL_KS_WEBLOGGER_&&window._GLOBAL_KS_WEBLOGGER_.weblog}return t.prototype.apply=function(t){this.weblog=t},t}(),m=function(){var t="undefined"!=typeof window?window.performance:null;if(t&&t.timing){if("function"==typeof t.timing.toJSON){var e=t.timing.toJSON();return e&&!e.redirectStart&&(e.redirectStart=e.navigationStart),e}return t.timing}return null};var h,g,v,y="radar_log";!function(t){t.LOAD="load",t.RES="resource",t.API="api",t.ERROR="error",t.SDK_ERROR="sdk_error",t.CUSTOM="custom",t.BATCH="batch",t.EVENT="event"}(h||(h={})),function(t){t.LOAD="load_statistics",t.RES="resource_statistics",t.API="api_statistics",t.ERROR="error_statistics",t.SDK_ERROR="sdk_error",t.CUSTOM="custom_statistics"}(g||(g={})),function(t){t.SCRIPT="script",t.RES="res",t.API="api",t.VIDEO="video"}(v||(v={}));var _,S,w={redirect:{end:"fetchStart",start:"navigationStart"},dns:{end:"domainLookupEnd",start:"domainLookupStart"},dns_start:{end:"domainLookupEnd",start:"navigationStart"},tcp:{end:"connectEnd",start:"connectStart"},tcp_start:{end:"connectEnd",start:"navigationStart"},redirect_count:{custom:function(t,e){return e.redirectCount}},ssl:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ssl_start:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.secureConnectionStart-e.redirectStart}},ttfb:{end:"responseStart",start:"requestStart"},trans:{end:"responseEnd",start:"responseStart"},dom_parse:{end:"domInteractive",start:"responseEnd"},dom_parse_start:{end:"domInteractive",start:"navigationStart"},blank:{end:"domLoading",start:"navigationStart"},fb:{end:"responseStart",start:"navigationStart"},dom_ready:{end:"domContentLoadedEventEnd",start:"navigationStart"},total:{end:"loadEventStart",start:"navigationStart"},resource:{end:"loadEventStart",start:"domContentLoadedEventEnd"},fp:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=performance.getEntries().filter((function(t){return"first-paint"===t.name}))[0];return t?Math.ceil(t.startTime+t.duration):null}},js_cost:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=m(),e=performance.getEntries(),r=performance.getEntries().filter((function(t){return"navigation"===t.initiatorType}))[0],n=e.filter((function(t){return"script"===t.initiatorType}))[0],o=r?r.domComplete:t.domComplete-t.navigationStart;return n&&o?o-n.fetchStart:null}},tti:{end:"domInteractive",start:"navigationStart"},protocol:{custom:function(t,e){return e.nextHopProtocol}},dom_num:{custom:function(){return"undefined"!=typeof document?document.all.length:null}}},b={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)}},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},E={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)},noThrottle:!0},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.connectEnd-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},k=["//wlog.kuaishou.com/rest/n/log/web/collect","/rest/wd/common/log/collect/misc2","/rest/wd/common/log/collect/radar","/rest/kd/log/collect"],L={to_webview_page_start:{end:"pageStart",start:"userStart"},to_webview_page_show:{end:"pageShow",start:"userStart"},to_webview_pre_create:{end:"preCreate",start:"userStart"},to_webview_created:{end:"created",start:"userStart"},to_webview_start_load:{end:"startLoad",start:"userStart"},to_webview_did_start_load:{end:"didStartLoad",start:"userStart"},to_webview_did_end_load:{end:"didEndLoad",start:"userStart"},to_navigation_start:{end:"navigationStart",start:"userStart"},to_fetch_start:{end:"fetchStart",start:"userStart"},to_connect_start:{end:"connectStart",start:"userStart"},to_dom_ready:{end:"domContentLoadedEventEnd",start:"userStart"},to_total:{end:"loadEventStart",start:"userStart"},to_fmp:{end:"radarFmp",start:"userStart",notCatchIfUndefined:!0},to_main_data_receive_end:{end:"main_data_receive_end",start:"userStart",notCatchIfUndefined:!0}},T={navigation_start_time:"navigationStart",fetch_start_time:"fetchStart",dns_start_time:"domainLookupStart",dns_end_time:"domainLookupEnd",connect_start_time:"connect_start",ssl_start_time:"secureConnectionStart",request_start_time:"requestStart",response_start_time:"responseStart",response_end_time:"responseEnd",dom_interactive_time:"domInteractive",dom_loading_time:"domLoading",dom_ready_time:"domContentLoadedEventEnd",load_event_time:"loadEventStart",fmp_time:"radarFmp"},R=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:e,delta:0,entries:[],id:R(),isFinal:!1}},x=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return r.observe({type:t,buffered:!0}),r}}catch(t){}},C=!1,D=!1,P=function(t){C=!t.persisted},N=function(){addEventListener("pagehide",P),addEventListener("beforeunload",(function(){}))},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];D||(N(),D=!0),addEventListener("visibilitychange",(function(e){var r=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:r,isUnloading:C})}),{capture:!0,once:e})},j=function(t,e,r,n){var o;return function(){r&&e.isFinal&&r.disconnect(),e.value>=0&&(n||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(o||0),(e.delta||e.isFinal||void 0===o)&&(t(e),o=e.value))}},U=function(){return void 0===_&&(_="hidden"===document.visibilityState?0:1/0,I((function(t){var e=t.timeStamp;return _=e}),!0)),{get timeStamp(){return _}}},A=function(){return S||(S=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})}))}))),S},M=/^(https?:)?\/\//;function q(t){if("string"!=typeof t)return"";try{var e=t.lastIndexOf(".");return t.substr(e+1)}catch(t){return""}}function F(t,e){if(!t)return!1;var r=t.replace(M,"");return e.some((function(t){return r.indexOf(t)>=0}))}var H={};function W(t,e){var r=H[t];r?r.endTime||(r.endTime=(new Date).getTime(),r.duration=r.endTime-r.startTime,delete r.startTime,delete r.endTime):H[t]={startTime:(new Date).getTime()}}var K={},B=[{name:"fid",collectFn:function(t){var e=O("FID"),r=U(),n=function(t){t.startTime<r.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,i())},o=x("first-input",n),i=j(t,e,o);o?I((function(){o.takeRecords().map(n),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,n){n.timeStamp<r.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+t}],i())}))}},{name:"lcp",collectFn:function(t){var e,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=O("LCP"),o=U(),i=function(t){var r=t.startTime;r<o.timeStamp?(n.value=r,n.entries.push(t)):n.isFinal=!0,e()},a=x("largest-contentful-paint",i);if(a){e=j(t,n,a,r);var s=function(){n.isFinal||(a.takeRecords().map(i),n.isFinal=!0,e())};A().then(s),I(s,!0)}}},{name:"cls",collectFn:function(t){var e,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=O("CLS",0),o=function(t){t.hadRecentInput||(n.value+=t.value,n.entries.push(t),e())},i=x("layout-shift",o);i&&(e=j(t,n,i,r),I((function(t){var r=t.isUnloading;i.takeRecords().map(o),r&&(n.isFinal=!0),e()})))}},{name:"fcp",collectFn:function(t){var e,r=O("FCP"),n=U(),o=x("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<n.timeStamp&&(r.value=t.startTime,r.isFinal=!0,r.entries.push(t),e())}));o&&(e=j(t,r,o))}}],V=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=p(location.search.slice(1));1==+n.debug&&s.apply(void 0,a(["[radar] "+t+": "],e))};var z=function(){var t=window.navigator.userAgent,e={};return t.split(" ").map((function(t){var r=t.split("/");e[r[0]]=r[1]})),e},Q=function(){var t=window.navigator.userAgent;if(-1!==t.indexOf("Android"))return"WebView";if(-1!==t.indexOf("iPhone")){var e=z();return e.Yoda&&"WK"===e.WebViewType?"YodaWKWebView":e.Yoda||"WKWebView"!==e.WebView?"UIWebView":"WKWebView"}return""},J=function(t,e){var r={};return Object.keys(e).forEach((function(n){t[e[n]]>0&&(r[n]=t[e[n]])})),r};function X(t){return Array.isArray(t)?t.map((function(t){var e=t.tagName,r=void 0===e?"":e,n=t.id,o=t.getAttribute?t.getAttribute("class"):t.className||"",i=r.toLowerCase();return n&&(i+="#"+n),o&&(i+=o.split(/\s+/g).map((function(t){return"."+t})).join("")),i})).filter((function(t){return t})).join(","):""}function Y(t){return JSON.parse(JSON.stringify(t))}var G=function(t){try{if(window&&window.localStorage&&"undefined"!=typeof Storage&&window.localStorage instanceof Storage){var e=Number(function(t){try{if(window&&window.localStorage){var e=window.localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(t){return e}}}catch(t){return null}return null}(t))||0;return e+1>1e8&&(e=0),function(t,e){try{if(window&&window.localStorage)return window.localStorage.setItem(t,JSON.stringify(e)),!0}catch(t){return!1}}(t,e+1),e}}catch(t){}},$={},Z=function(t){return $[t]||($[t]=0),$[t]++};function tt(t){if(!(null==t?void 0:t.name))throw new Error("[Radar] 关键动作上报必须配置name");if((null==t?void 0:t.extra_info)&&!(t.extra_info instanceof Object))throw new Error("[Radar] 关键动作上报 extra_info 必须为 plain object")}var et,rt,nt=function(){function t(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.middlewares=[],(t=this.middlewares).push.apply(t,e)}return t.prototype.use=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=this.middlewares.pop();(t=this.middlewares).push.apply(t,e),this.middlewares.push(n)},t.prototype.invoke=function(t){var e;return(e=this.middlewares,function(t,r){var n=-1;return function o(i){if(i<=n)return new Error("`next` 被重复调用");n=i;var a=e[i];if(i===e.length&&(a=r),a)try{return a(t,o.bind(null,i+1))}catch(t){return t}}(0)})(t)},t}(),ot=["KUAISHOU","THANOS","NEBULA"],it=function(t){function n(e,n){var o,i,s=t.call(this)||this;return s.kpn="",s.plugins=[],s.logQueue=[],s.logQueueNext=[],s.queueConfig={wait:1e3,maxBatchLength:200},s.eventName="onpagehide"in window?"pagehide":"beforeunload",s.batchTimer=0,s.batchTimerNext=0,s.startedLoadReport=!1,s.radarSessionId="",s.radarSessionIdNext="",s.chromeMetric=B,s.isInKwai=!1,s.isUsingBridge=null,s.isUsingLegacy=null,s.isUsingDetachedReport=null,s.isSupportedYodaConcat=null,s.customDimension={},s.webviewData=null,s.webviewStart=null,s.webviewStartTime=null,s.finalSampling={},s.sampleData=null,s.sampleList=[h.LOAD,h.API,h.CUSTOM,h.ERROR,h.EVENT,h.RES],s.defaultSampleList={load:1,api:1,resource:.1,error:1,event:1,custom:1,isHit:!0},s.ignoreList=["https://web-trace.ksapisrv.com/ktrace/collect"],s.lastRadarLogId="",s.computedSamplingAgain=!0,s.realSampledList=[],s.hasFmp=!1,s.customPerfList={},s.observeResource=function(t){t.getEntriesByType("resource").forEach((function(t){return s.reportPerformance(t)}))},s.asyncReportTiming=function(){W("radarCreatedToOnload"),W("onloadToFirstReport"),setTimeout((function(){W("asyncReportTiming"),s.reportPerformance(m()),s.startedLoadReport=!0;try{s.observeResource(performance),s.observeChromeMetrics(s.chromeMetric),new PerformanceObserver(s.observeResource).observe({entryTypes:["resource"]})}catch(t){}W("radarCreatedToFirstReport"),W("onloadToFirstReport"),W("asyncReportTiming")}),0)},s.chromeMetricCallback=function(t){var e,r,n=t.name,o=t.value;n=n.toLocaleLowerCase();var i={key:h.CUSTOM,value:(e={},e[n]=o,e)};s.logCollect(i),s.logCollectNext({key:h.EVENT,dimension:{name:n},value:{duration:o}}),W(n+"Collect"),function(t){Object.assign(K,t)}(((r={})[n]=o,r))},s.observeChromeMetrics=function(t){var e=s.options;t.forEach((function(t){var r=t.name;e&&!e[r]||(W(r+"Collect"),t.collectFn(s.chromeMetricCallback))}))},s.asyncMetricCollectDone=function(){var t={};Object.keys(H).forEach((function(e){var r=H[e];!r.duration&&r.startTime&&(r.duration=0,delete r.startTime),t[e]=r.duration}));var e={key:h.CUSTOM,value:t};s.logCollect(e),s.flush(),s.weblog.flush(),l(window,s.eventName,s.asyncMetricCollectDone)},s.flush=function(){if(s.beforeFlush(),s.options&&!(s.logQueue.length<=0)&&s.startedLoadReport){var t=JSON.stringify(r(r({},s.weblog.commonPackage.getH5ExtraAttr()),{url:location.href,hash:location.hash,webviewStart:s.webviewStart,webviewStartTime:s.webviewStartTime,sampling_list:s.finalSampling?JSON.stringify(s.finalSampling):""})),e={project_id:s.options.projectId,radar_session_id:s.radarSessionId,h5_extra_attr:t},n=s.weblog.commonPackage,o=n.service_name,i=n.sub_biz,c=n.need_encrypt,u=n.app_package,l=s.currentUrlPackage&&s.currentUrlPackage.toJSON(),p=null;s.options.httpReportFirst||(p=s.addRadarStatEvent({key:y,value:r(r({},e),{data:a(s.logQueue),url_package:l,app_version_name:u.version_name}),serviceName:o||"",subBiz:i||"",needEncrypt:c||!1,container:u.container,realtime:!1,h5ExtraAttr:t})),p&&!s.options.httpReportFirst||s.weblog.collect("RADAR",{name:y,params:r(r({},e),{data:a(s.logQueue)}),currentUrlPackage:l,referUrlPackage:s.referUrlPackage&&s.referUrlPackage.toJSON(),serviceName:o||"radar_service_name"}),s.logQueue=[]}},s.flushNext=function(){if(s.options&&!(s.logQueueNext.length<=0)){var t=null;s.options.httpReportFirst||(t=s.reportByBridge()),t&&!s.options.httpReportFirst||s.reportByHttp(),s.logQueueNext=[]}},s.getCommonData=function(){var t,e=s.weblog.commonPackage.app_package,n=JSON.stringify(r(r({},s.weblog.commonPackage.getH5ExtraAttr()),{app_version_name:e.version_name,url:location.href,hash:location.hash,online:null===navigator||void 0===navigator?void 0:navigator.onLine})),o=s.currentUrlPackage&&s.currentUrlPackage.toJSON(),i=null===(t=s.options)||void 0===t?void 0:t.projectId;return{h5_extra_attr:n,url_package:o,app_version_name:e.version_name,project_id:i}},n&&(o=n),e&&(e.logger?s.apply(e):o=e),W("radarCreatedToFirstReport"),W("radarCreatedToOnload"),s.options=o,s.queueConfig=r(r({},s.queueConfig),s.options?s.options.queue:{}),s.ignoreList=s.ignoreList.concat((void 0===(i=s.options&&s.options.ignoreList)&&(i=[]),i.concat(k).map((function(t){return t.replace(M,"")})))),s}return e(n,t),Object.defineProperty(n.prototype,"KSwitchSampled",{get:function(){return this.weblog.currentUrlPackage.sampled},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isKSwitchSampled",{get:function(){return this.weblog.isKSwitchSampled},enumerable:!1,configurable:!0}),n.prototype.samplingControl=function(t){if(!t)return!1;var e=Math.random();return"number"==typeof t?e<t:e<t.sampling},n.prototype.use=function(t,e){var r=new t(e,this.options);this.plugins.push(r),this.weblog&&r.created()},n.prototype.apply=function(t){var e,r;this.weblog=t,this.kpn=this.weblog.Utils.ua.getDefaultKpn(),this.isInKwai=ot.indexOf(this.kpn)>=0,this.upadteUrlPackage(),this.register(),this.ignoreList.push(null===(r=null===(e=this.weblog)||void 0===e?void 0:e.logger)||void 0===r?void 0:r.url),this.created()},n.prototype.created=function(){this.plugins.forEach((function(t){t.created()}))},n.prototype.destroy=function(){l(window,"load",this.asyncReportTiming),this.plugins.forEach((function(t){t.destroy()}))},n.prototype.computedRealSampled=function(t,e){if(this.isKSwitchSampled){var r=void 0;if("object"==typeof this.KSwitchSampled&&this.KSwitchSampled.radar){var n=this.KSwitchSampled.radar.all;n="number"!=typeof n?1:n;var o=this.KSwitchSampled.radar[e];r="number"!=typeof o?n:o*n}else r=this.KSwitchSampled?1:0;return r*t}return 1},n.prototype.getWebviewData=function(){if(window.__yodaCommonDataObject__&&window.__yodaCommonDataObject__.pageLoadData){var t=null;try{var e=window.__yodaCommonDataObject__.pageLoadData;t="string"==typeof e?JSON.parse(e):e}catch(t){return}var n=t.created,o=t.pageStart,i=t.userStart;this.webviewData=r({webviewStart:i||o||n},t);var a={key:h.EVENT,value:null,dimension:{name:"客户端数据注入成功",event_type:"radar_inject_success"}};this.logCollect(a),this.logCollectNext(a)}},n.prototype.getSampleData=function(){var t=this,e=this.weblog.Utils.yoda;if(e&&(this.sampleData=this.defaultSampleList,window.updateYodaSampleRateWithParams=function(e){t.updateSampleData(e),t.handleSample()}),window.__yodaCommonDataObject__&&window.__yodaCommonDataObject__.sampleData){this.updateSampleData(),this.handleSample();var r={key:h.EVENT,value:null,dimension:{name:"客户端采样率注入成功",event_type:"radar_sample_inject_success"}};this.logCollect(r),this.logCollectNext(r)}else e&&e.getWebviewLoadPerf().then((function(e){e.sampleData&&(t.updateSampleData(e.sampleData),t.handleSample())}))},n.prototype.updateSampleData=function(t){var e=this,r=null;try{var n=window.__yodaCommonDataObject__.sampleData||t;r="string"==typeof n?JSON.parse(n):n}catch(t){return}this.sampleData=this.defaultSampleList,r&&Object.keys(r).forEach((function(t){e.sampleData[t]=r[t]}))},n.prototype.register=function(){return o(this,void 0,void 0,(function(){var t,e,r;return i(this,(function(n){switch(n.label){case 0:return m()?("undefined"!=typeof window&&window.yodaCollectErrorDataDestroy&&window.yodaCollectErrorDataDestroy(),performance.timing.loadEventStart>0?this.asyncReportTiming():u(window,"load",this.asyncReportTiming),this.options&&this.options.radarCost&&u(window,this.eventName,this.asyncMetricCollectDone),u(window,this.eventName,this.flush),u(window,this.eventName,this.flushNext),this.getSampleData(),this.getWebviewData(),this.radarSessionId=this.nanoId(),this.radarSessionIdNext=this.uuid(),(t=this.weblog.Utils.yoda)?[3,1]:(this.isUsingBridge=!1,this.isSupportedYodaConcat=!1,this.isUsingLegacy=!1,[3,6])):[2];case 1:return null!=this.isUsingBridge?[3,3]:(e=this,[4,t.isSupportBridgeLog()]);case 2:e.isUsingBridge=n.sent(),n.label=3;case 3:return null!=this.isSupportedYodaConcat?[3,5]:(r=this,[4,t.isSupportBridge("sendRadarLog")]);case 4:r.isSupportedYodaConcat=n.sent(),n.label=5;case 5:this.isUsingLegacy=this.isUsingBridge&&!this.isSupportedYodaConcat,n.label=6;case 6:return this.isUsingDetachedReport=this.isInKwai&&!this.isUsingBridge||this.isUsingLegacy,[2]}}))}))},n.prototype.throttle=function(t,e,r,n){if(void 0===n&&(n={}),e.noThrottle||"number"!=typeof t)return t;var o=n.startPoint,i=n.endPoint;if(t>6e4||t<0||isNaN(t)){if(Math.random()<.1){var a="["+r+" 异常]: "+t+"，原始数据为："+e.end+": "+i+" - "+e.start+": "+o,s={key:h.EVENT,value:null,dimension:{name:"雷达数据异常",event_type:"radar_error",message:a,src:location.href,webViewType:Q(),yoda_version:z().yoda_version||""}};this.logCollect(s),this.logCollectNext(s)}return null}return Math.round(t)},n.prototype.reportPerformance=function(t){this.plugins.forEach((function(e){t&&e.when(t)&&e.onPerfReport(t)}))},n.prototype.calculate=function(t,e,r){var n=e[t];if(n){if(n.cachedSkip)if(this.calculate("cached",e,r))return;if("function"==typeof n.custom){var o=n.custom(t,r);return this.throttle(o,n,t)}var i=n.end,a=n.start,s=+r[i]||performance.timing[i],u=+r[a]||performance.timing[a],l=s-u;if(!n.notCatchIfUndefined||void 0!==s&&void 0!==u)return this.throttle(l,n,t,{startPoint:u,endPoint:s})}else c("[warn 310]","[Radar] perf key "+t+" is unexpected!")},n.prototype.calculateNext=function(t,e,r){var n=e[t];if(n){if(n.cachedSkip)if(this.calculateNext("cached",e,r))return;if("function"==typeof n.custom)return n.custom(t,r);var o=n.end,i=n.start,a=+r[o]||performance.timing[o],s=+r[i]||performance.timing[i],c=a-s;if(!n.notCatchIfUndefined||void 0!==a&&void 0!==s)return c}},n.prototype.generateLog=function(t,e,r){var n=this;void 0===r&&(r=!0);var o={};return Object.keys(t).forEach((function(i){var a=i,s=r?n.calculate(a,t,e):n.calculateNext(a,t,e);null!=s&&(o[a]=s)})),o},n.prototype.subDimension=function(t){this.customDimension&&(t.dimension||(t.dimension={}),Object.assign(t.dimension,this.customDimension))},n.prototype.nanoId=function(){for(var t=1e9*Math.random()>>>0,e=[],r=0;r<7;r++)e.push("0123456789ABCDEF".charAt(16*Math.random()));return t+e.join("")},n.prototype.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))},n.prototype.beforeFlush=function(){var t=this;if(this.computedSamplingAgain){var e={radarLoadSampling:{sampling:1,type:"load"},radarApiSampling:{sampling:this.options&&this.options.apiSampling||1,type:"api"},radarErrorSampling:{sampling:this.options&&this.options.errorSampling||1,type:"error"},radarResourceSampling:{sampling:this.options&&this.options.resourceSampling||.1,type:"resource"},radarCustomSampling:{sampling:this.options&&this.options.customSampling||1,type:"custom"},radarEventSampling:{sampling:this.options&&this.options.eventSampling||1,type:"event"}};this.realSampledList=[],Object.keys(e).forEach((function(r){var n=t.isKSwitchSampled?t.computedRealSampled(e[r].sampling,e[r].type):e[r],o=t.samplingControl(n);t.finalSampling[e[r].type]=n,o&&t.realSampledList.push(e[r].type)})),this.isKSwitchSampled&&(this.computedSamplingAgain=!1)}this.logQueue=this.logQueue.filter((function(e){return-1!==t.realSampledList.indexOf(e.key)}))},n.prototype.upadteUrlPackage=function(){this.weblog&&(this.computedSamplingAgain=!0,this.currentUrlPackage=this.weblog.currentUrlPackage,this.referUrlPackage=this.weblog.referUrlPackage)},n.prototype.decorateLog=function(t){this.currentUrlPackage||this.upadteUrlPackage(),this.customDimension&&this.subDimension(t),this.currentUrlPackage&&this.currentUrlPackage.page!==this.weblog.currentUrlPackage.page&&(this.flushNext(),this.flush(),this.upadteUrlPackage())},n.prototype.logCollect=function(t){var e=this;if(this.options){this.decorateLog(t);try{window.dispatchEvent(new CustomEvent("get-radar-data",{detail:{kv:t}}))}catch(t){}var r=!0;if("load"===t.key)for(var n=0;n<this.logQueue.length;n++){var o=this.logQueue[n];if("load"===o.key){Object.assign(o,t),r=!1;break}}r&&this.logQueue.push(t),V("radarLog",JSON.parse(JSON.stringify(t))),this.batchTimer||(this.logQueue.length>this.queueConfig.maxBatchLength?this.flush():this.batchTimer=window.setTimeout((function(){e.flush(),clearTimeout(e.batchTimer),e.batchTimer=0}),this.queueConfig.wait))}},n.prototype.addRadarStatEvent=function(t){var e=this;try{var n=this.weblog.Utils.yoda;if(!n)return!1;var o=function(t){var e,n;if(!t.value)return t;var o=t.value,i=function(t){var e,r=[];return t.forEach((function(t){"load"===t.key?e=t:r.push(t)})),[e,r]}(o.data),a=i[0],s=i[1],c={project_id:o.project_id,app_version_name:o.app_version_name,url_package:o.url_package,h5_extra_attr:t.h5ExtraAttr};return{loadLog:a?{removeStashedLog:[],sendImmediate:null!==(n=null===(e=a.dimension)||void 0===e?void 0:e.sendImmediate)&&void 0!==n&&n,customData:r({data:[a]},c)}:null,commonLog:s.length?{removeStashedLog:[],sendImmediate:!0,customData:r({data:s},c)}:null}}(t),i=o.loadLog,a=o.commonLog;if(i){if(this.lastRadarLogId&&(i.removeStashedLog=[this.lastRadarLogId],i.sendImmediate)){var s={removeStashedLog:[this.lastRadarLogId],sendImmediate:!1,customData:{"":""}};n.sendRadarLog(s).then((function(t){t&&t.logId&&(e.lastRadarLogId=t.logId)}))}n.sendRadarLog(i).then((function(t){t&&t.logId&&(e.lastRadarLogId=t.logId)}))}return a&&n.sendRadarLog(a),!0}catch(t){return!1}},n.prototype.calculateSample=function(t){var e=(null==t?void 0:t.load)||1,r={};return t&&Object.keys(t).forEach((function(n){var o=t[n]/e;r[n]=o>1?1:o})),r},n.prototype.handleSample=function(){var t,e,r,n,o,i,a,s,c=this,u=this.weblog.Utils.yoda;u||this.sampleData||(this.sampleData={load:(null===(t=this.options)||void 0===t?void 0:t.sampling)||1,api:(null===(e=this.options)||void 0===e?void 0:e.apiSampling)||1,resource:(null===(r=this.options)||void 0===r?void 0:r.resourceSampling)||.1,error:(null===(n=this.options)||void 0===n?void 0:n.errorSampling)||1,event:(null===(o=this.options)||void 0===o?void 0:o.eventSampling)||1,custom:(null===(i=this.options)||void 0===i?void 0:i.customSampling)||1}),s=this.calculateSample(this.sampleData),a={radarLoadSampling:{sampling:1,type:"load"},radarApiSampling:{sampling:(null==s?void 0:s.api)||1,type:"api"},radarErrorSampling:{sampling:(null==s?void 0:s.error)||1,type:"error"},radarResourceSampling:{sampling:(null==s?void 0:s.resource)||.1,type:"resource"},radarCustomSampling:{sampling:(null==s?void 0:s.custom)||1,type:"custom"},radarEventSampling:{sampling:(null==s?void 0:s.event)||1,type:"event"}},this.sampleList=[],Object.keys(a).forEach((function(t){var e=a[t];c.samplingControl(e)&&c.sampleList.push(a[t].type)}))},n.prototype.logCollectNext=function(t){var e=this,n=Y(t);if(this.options&&(!this.sampleData||!1!==this.sampleData.isHit)&&this.sampleList.some((function(t){return t===n.key}))){var o=this.getCommonData(),i=o.app_version_name;delete o.app_version_name;var a=new nt((function(t,n){return t.dimension.app_version_name=i,t=r(r(r({},t),o),{event_client_timestamp:Date.now(),event_trigger_source:"H5",radar_session_id:e.radarSessionIdNext})}));if(a.use((function(t,e){return t.key&&"load"===t.key&&(t.dimension=r(r({},t.dimension),{load_device_increase_id:G("LOAD_DEVICE_INCREASE_ID"),load_session_increase_id:Z("LOAD_SESSION_INCREASE_ID")})),t.key&&"load"!==t.key&&(t.dimension=r(r({},t.dimension),{other_device_increase_id:G("OTHER_DEVICE_INCREASE_ID"),other_session_increase_id:Z("OTHER_SESSION_INCREASE_ID")})),e()}),(function(t,r){return t.dimension.sample_rate=e.sampleData&&e.sampleData[t.key]||1,r()})),(n=a.invoke(n))instanceof Error)throw n;this.decorateLog(n);try{window.dispatchEvent(new CustomEvent("get-radar-next-data",{detail:{kv:n}}))}catch(t){}var s=!0;if("load"===n.key)for(var c=0;c<this.logQueueNext.length;c++){var u=this.logQueueNext[c];if("load"===u.key){Object.assign(u,n),s=!1;break}}s&&this.logQueueNext.push(n),V("radarLogNext",JSON.parse(JSON.stringify(n))),this.batchTimerNext||(this.logQueueNext.length>this.queueConfig.maxBatchLength?this.flushNext():this.batchTimerNext=window.setTimeout((function(){e.flushNext(),clearTimeout(e.batchTimerNext),e.batchTimerNext=0}),this.queueConfig.wait))}},n.prototype.reportByHttp=function(){var t,e=this.getCommonData(),r={project_id:null===(t=this.options)||void 0===t?void 0:t.projectId,radar_session_id:this.radarSessionIdNext,h5_extra_attr:e.h5_extra_attr},n=this.logQueueNext.filter((function(t){return"load"===t.key})),o=this.logQueueNext.filter((function(t){return"load"!==t.key}));Array.isArray(n)&&n.length&&this.collectLog(r,n,"radarSDK"),Array.isArray(o)&&o.length&&this.collectLog(r,o,"radarSDKSupplement")},n.prototype.collectLog=function(t,e,n){this.weblog.collect("RADAR",{name:y,params:r(r({},t),{data:a(e)}),serviceName:n})},n.prototype.reportByBridge=function(){var t=this.weblog.Utils.yoda;if(!t)return!1;var e=this.logQueueNext.filter((function(t){return"load"===t.key})),r=this.logQueueNext.filter((function(t){return"load"!==t.key}));if(!e.length&&!r.length)return!0;try{if(e.length){var n=e[0];t.sendSummarizedLog({key:"h5_load",data:n})}return r.length&&t.sendRadarLog({data:r}),!0}catch(t){return!1}},n}(f),at=function(t,e){this.radar=t,this.options=e},st=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="navigation",e.logData={},e.logSended=!1,e.saveWebviewEntry={},e.hasReportBase=!1,e.record={fmp:!1,base:!1,webviewPerf:!1},e.loadTimeout=null,e.gettingWebview=!1,e.REPEAT_TIME=5,e.getWebviewTimes=e.REPEAT_TIME,e.reportOnUnload=function(t){e.logSended||e.radar.isSupportedYodaConcat||(e.logSended=!0,e.reportFirstScreen(Object.assign(e.logData,K)),e.radar.logCollect(e.data),"noflush"!==t&&(e.radar.flush(),e.radar.weblog.flush()))},e}return e(r,t),Object.defineProperty(r.prototype,"sendImmediate",{get:function(){return this.record.fmp&&this.record.base&&this.record.webviewPerf&&!(!(t=window.navigator.userAgent.match(/tbht\/([\w]+)/i))||"0"===t[1]);var t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"data",{get:function(){return this.sepDimension({key:h.LOAD,value:this.logData})},enumerable:!1,configurable:!0}),r.prototype.created=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))},r.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;return["fmp","play_clicked","play_idr","webViewPerf"].indexOf(e)>-1}return!t.entryType||"navigation"===t.entryType},r.prototype.getWebviewLoadData=function(){return o(this,void 0,void 0,(function(){var t,e,r,n,o,a,s;return i(this,(function(i){switch(i.label){case 0:return this.record.webviewPerf?[2,!0]:(t=this.radar.weblog.Utils.yoda,(r=t)?[4,t.getWebviewLoadPerf()]:[3,2]);case 1:r=i.sent(),i.label=2;case 2:return(e=r)&&e.timeData?(this.record.webviewPerf=!0,n=e.timeData,o=n.userStart,a=n.pageStart,s=n.created,this.radar.webviewStart="userStart",this.radar.webviewStartTime=o,o||(a?(e.timeData.userStart=a,this.radar.webviewStart="pageStart",this.radar.webviewStartTime=a):(e.timeData.userStart=s,this.radar.webviewStart="created",this.radar.webviewStartTime=s)),this.onPerfReport({custom:!0,entry:{key:"webViewPerf",value:e.timeData}}),[2,!0]):[2,!1]}}))}))},r.prototype.webviewPatch=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return this.gettingWebview?[2]:(this.gettingWebview=!0,[4,this.repeatWebview()]);case 1:return t.sent(),this.gettingWebview=!1,[2]}}))}))},r.prototype.repeatWebview=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.getWebviewLoadData()];case 1:return!t.sent()&&this.getWebviewTimes>0?(this.getWebviewTimes--,[4,this.repeatWebview()]):[3,3];case 2:t.sent(),t.label=3;case 3:return this.getWebviewTimes=this.REPEAT_TIME,[2]}}))}))},r.prototype.onPerfReport=function(t){return o(this,void 0,void 0,(function(){var e,r,n,o,a,s,c,u,l,p=this;return i(this,(function(i){if(t.custom){if((e=t.entry)&&(r=e.key,n=e.value,o=t.renderTime,"fmp"===r&&(performance.timing.radarFmp=o,this.record.fmp=!0,u=J(performance.timing,T),Object.assign(this.logData,((l={})[r]=n,l),u),this.webviewPatch(),this.record.webviewPerf&&(s=this.radar.generateLog(L,this.saveWebviewEntry),Object.assign(this.logData,s))),"webViewPerf"===r)){if(!(a=e.value))return[2];this.saveWebviewEntry=a,s=this.radar.generateLog(L,a),Object.assign(this.logData,s)}}else c=this.radar.generateLog(w,t),u=J(performance.timing,T),Object.assign(this.logData,c,u),this.record.base=!0;return this.radar.isSupportedYodaConcat?(this.webviewPatch(),this.radar.logCollect(this.data)):this.radar.isUsingDetachedReport&&this.record.webviewPerf&&this.record.fmp&&this.record.base?this.reportOnUnload("noflush"):this.record.fmp&&this.record.base&&!this.hasReportBase?(clearTimeout(this.loadTimeout),this.loadTimeout=null,this.loadReport()):!this.hasReportBase&&this.record.base&&(this.loadTimeout=setTimeout((function(){p.loadReport(),p.hasReportBase=!0}),2e3)),[2]}))}))},r.prototype.destroy=function(){clearTimeout(this.delay)},r.prototype.sepDimension=function(t){var e=t.key,r=t.value,o=r.protocol;return{key:e,value:n(r,["protocol"]),dimension:{protocol:o,sendImmediate:this.sendImmediate}}},r.prototype.reportFirstScreen=function(t){if(t.play_clicked&&t.play_idr){var e=t.play_idr-t.play_clicked;e>0&&e<6e4&&(this.logData.play_first_screen=e)}},r.prototype.loadReport=function(){Object.assign(this.logData,K),this.radar.logCollect(Y(this.data)),this.radar.flush(),this.radar.weblog.flush()},r}(at);!function(t){t.LOAD="load",t.RES="resource",t.API="api",t.ERROR="error",t.SDK_ERROR="sdk_error",t.CUSTOM="custom",t.BATCH="batch",t.EVENT="event"}(et||(et={})),function(t){t.SCRIPT="script",t.RES="res",t.API="api",t.VIDEO="video"}(rt||(rt={}));var ct={redirect:{end:"redirectEnd",start:"redirectStart"},dns:{end:"domainLookupEnd",start:"domainLookupStart"},dns_start:{end:"domainLookupEnd",start:"navigationStart"},tcp:{end:"connectEnd",start:"connectStart"},tcp_start:{end:"connectEnd",start:"navigationStart"},redirect_count:{custom:function(t,e){return e.redirectCount}},ssl:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.requestStart-e.secureConnectionStart}},ssl_start:{custom:function(t,e){return 0===e.secureConnectionStart?0:e.secureConnectionStart-e.redirectStart}},ttfb:{end:"responseStart",start:"requestStart"},request_start:{end:"requestStart",start:"navigationStart"},trans:{end:"responseEnd",start:"responseStart"},dom_parse:{end:"domInteractive",start:"responseEnd"},dom_parse_start:{end:"domInteractive",start:"navigationStart"},blank:{end:"domLoading",start:"navigationStart"},fb:{end:"responseStart",start:"navigationStart"},dom_ready:{end:"domContentLoadedEventEnd",start:"navigationStart"},total:{end:"loadEventStart",start:"navigationStart"},resource:{end:"loadEventStart",start:"domInteractive"},fp:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=performance.getEntries().filter((function(t){return"first-paint"===t.name}))[0];return t?Math.ceil(t.startTime+t.duration):null}},js_cost:{custom:function(){if("function"!=typeof performance.getEntries)return null;var t=m(),e=performance.getEntries(),r=performance.getEntries().filter((function(t){return"navigation"===t.initiatorType}))[0],n=e.filter((function(t){return"script"===t.initiatorType}))[0],o=r?r.domComplete:t.domComplete-t.navigationStart;return n&&o?o-n.fetchStart:null}},tti:{end:"domInteractive",start:"navigationStart"},protocol:{custom:function(t,e){return e.nextHopProtocol}},dom_num:{custom:function(){return"undefined"!=typeof document?document.all.length:null}}},ut={fetch_start:{custom:function(t,e){return Math.round(e.fetchStart)},noThrottle:!0},dns:{end:"domainLookupEnd",start:"domainLookupStart",cachedSkip:!0},tcp:{end:"connectEnd",start:"connectStart",cachedSkip:!0},ssl:{cachedSkip:!0,custom:function(t,e){return 0===e.secureConnectionStart?0:e.requestStart-e.secureConnectionStart}},ttfb:{end:"responseStart",start:"requestStart",cachedSkip:!0},trans:{end:"responseEnd",start:"responseStart",cachedSkip:!0},fb:{end:"responseStart",start:"fetchStart",cachedSkip:!0},total:{end:"responseEnd",start:"fetchStart"},duration:{end:"responseEnd",start:"fetchStart"},size:{cachedSkip:!0,custom:function(t,e){return e.encodedBodySize},noThrottle:!0},protocol:{custom:function(t,e){return e.nextHopProtocol}},file:{custom:function(t,e){return e.name},noThrottle:!0},res_type:{custom:function(t,e){return e.initiatorType}},cached:{custom:function(t,e){return 0===e.transferSize||null==e.transferSize&&0===e.domainLookupStart},noThrottle:!0}},lt={main_api:{end:"apiEnd",start:"apiStart"},main_api_offset:{end:"apiStart",start:"domLoading"}},pt={navigation_start_time:"navigationStart",fetch_start_time:"fetchStart",dns_start_time:"domainLookupStart",dns_end_time:"domainLookupEnd",connect_start_time:"connect_start",ssl_start_time:"secureConnectionStart",request_start_time:"requestStart",response_start_time:"responseStart",response_end_time:"responseEnd",dom_interactive_time:"domInteractive",dom_loading_time:"domLoading",dom_ready_time:"domContentLoadedEventEnd",load_event_time:"loadEventStart",fmp_time:"radarFmp"},dt=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="navigation-radar-plus",e.logData={},e}return e(r,t),Object.defineProperty(r.prototype,"data",{get:function(){return this.sepDimension({key:et.LOAD,value:this.logData})},enumerable:!1,configurable:!0}),r.prototype.created=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){return this.onPerfReport({custom:!0,entry:{key:"radar_init",value:null}}),[2]}))}))},r.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;return["fmp","customPerf"].indexOf(e)>-1}return!t.entryType||"navigation"===t.entryType},r.prototype.onPerfReport=function(t){return o(this,void 0,void 0,(function(){var e,r,n,o,a,s;return i(this,(function(i){return t.custom?(e=t.entry)&&(r=e.key,n=e.value,o=t.renderTime,"radar_init"===r&&Object.assign(this.logData,{event_name:"radar_init"}),"fmp"===r&&(performance.timing.radarFmp=o,a=this.radar.generateLog(lt,performance.timing,!1),Object.assign(this.logData,((s={})[r]=n,s),{event_name:"fmp"},a)),"customPerf"===r&&Object.assign(this.logData,{event_name:"h5_custom_metric",custom_metric_name:n,custom_metric_timestamp:this.radar.customPerfList[n].time})):Object.assign(this.logData,{event_name:"h5_load"}),this.getCommonLog(t),this.loadReport(),[2]}))}))},r.prototype.destroy=function(){},r.prototype.getCommonLog=function(t){var e=this.radar.generateLog(ct,t,!1),r=J(performance.timing,pt);Object.assign(this.logData,e,r)},r.prototype.sepDimension=function(t){var e=t.key,r=t.value,o=r.protocol,i=r.event_name,a=r.custom_metric,s=r.custom_metric_name;return{key:e,value:n(r,["protocol","event_name","custom_metric","custom_metric_name"]),dimension:{protocol:o,event_name:i,custom_metric:a,custom_metric_name:s}}},r.prototype.loadReport=function(){Object.assign(this.logData,K),this.collectAndFlush()},r.prototype.collectAndFlush=function(){this.radar.logCollectNext(Y(this.data)),this.radar.flushNext(),this.radar.weblog.flush()},r}(at),ft=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="resource",e.onResError=function(t){e.isScriptError(t)||e.radar.logCollect(e.sepDimension({key:h.RES,value:{failed:!0,file:t.target.src,res_path:X(t.path||t.composedPath&&t.composedPath())}}))},e}return e(r,t),r.prototype.created=function(){u(window,"error",this.onResError,!0)},r.prototype.when=function(t){return!F(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&"fetch"!==t.initiatorType&&"xmlhttprequest"!==t.initiatorType)},r.prototype.isScriptError=function(t){return t.message||null!=t.lineno},r.prototype.onPerfReport=function(t){var e=this.radar.generateLog(E,t);this.radar.logCollect(this.sepDimension({key:h.RES,value:e}))},r.prototype.destroy=function(){l(window,"error",this.onResError,!0)},r.prototype.sepDimension=function(t){var e=t.key,r=t.value,o=r.protocol,i=r.file,a=r.cached,s=r.res_path,c=r.failed,u=r.res_type;return{key:e,value:n(r,["protocol","file","cached","res_path","failed","res_type"]),dimension:{protocol:o,file:i,cached:a,failed:c,res_path:s,res_type:u}}},r}(at),mt=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="resource",e.onResError=function(t){e.isScriptError(t)||e.radar.logCollectNext(e.sepDimension({key:et.RES,value:{failed:!0,file:t.target.src,res_path:X(t.path||t.composedPath&&t.composedPath())}}))},e}return e(o,t),o.prototype.created=function(){u(window,"error",this.onResError,!0)},o.prototype.when=function(t){return!F(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&"fetch"!==t.initiatorType&&"xmlhttprequest"!==t.initiatorType||"resource"===t.entryType&&("fetch"===t.initiatorType||"xmlhttprequest"===t.initiatorType)&&("js"===q(t.name)||"css"===q(t.name)))},o.prototype.isScriptError=function(t){return t.message||null!=t.lineno},o.prototype.onPerfReport=function(t){var e=this.radar.generateLog(ut,t,!1);this.radar.logCollectNext(this.sepDimension({key:et.RES,value:r(r({},e),{failed:!1})}))},o.prototype.destroy=function(){l(window,"error",this.onResError,!0)},o.prototype.sepDimension=function(t){var e=t.key,r=t.value,o=r.protocol,i=r.file,a=r.cached,s=r.res_path,c=r.failed,u=r.res_type;return{key:e,value:n(r,["protocol","file","cached","res_path","failed","res_type"]),dimension:{protocol:o,file:i,cached:a,failed:c,res_path:s,res_type:u}}},o}(at);function ht(t){return void 0===t&&(t=""),"__radar_"+t+Math.random().toString(36).substring(2,8)}function gt(t,e){var r=window.XMLHttpRequest;if(!r)return c("HAS NOT XMLHttpRequest!"),!1;window.XMLHttpRequest=function(){var t=new r;t._request=Object.create(null),t._response=Object.create(null);var n=ht();t._request.id=n;var o=function(){var e,r,n,o;for(e in t._response.status=t.status,t._response.statusText=t.statusText,o=function(t,e){switch(null==e&&(e={}),typeof t){case"object":var r=[];for(var n in t){var o=t[n],i=n.toLowerCase();r.push(i+":\t"+o)}return r.join("\n")+"\n";case"string":for(var a=0,s=(r=t.split("\n")).length;a<s;a++){var c=r[a];if(/([^:]+):\s*(.+)/.test(c)){var u=RegExp.$1,l=null!=u?u.toLowerCase():void 0;o=RegExp.$2,null==e[l]&&(e[l]=o)}}return e}}(t.getAllResponseHeaders()))n=o[e],t._response.headers[e]||(r=e.toLowerCase(),t._response.headers[r]=n)};return t.addEventListener("readystatechange",(function(){switch(t.readyState){case 4:"function"==typeof e&&(o(),function(){if(t.responseType&&"text"!==t.responseType)"document"===t.responseType?(t._response.xml=t.responseXML,t._response.data=t.responseXML):t._response.data=t.response;else{t._response.text=t.responseText,t._response.data=t.responseText;try{t._response.xml=t.responseXML}catch(t){}}"responseURL"in t&&(t._response.finalUrl=t.responseURL)}(),e(t._request,t._response))}})),t},["DONE","HEADERS_RECEIVED","LOADING","OPENED","UNSENT"].forEach((function(t){window.XMLHttpRequest[t]=r[t]})),window.XMLHttpRequest.prototype=r.prototype,window.XMLHttpRequest.prototype._request=Object.create(null),window.XMLHttpRequest.prototype._response=Object.create(null);var n=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(t,e,r,o,i){return this._request={method:t,url:e,async:r,user:o,pass:i},this._response.headers={},n.apply(this,arguments)};var o=window.XMLHttpRequest.prototype.send;return window.XMLHttpRequest.prototype.send=function(){return"function"==typeof t&&t(this._request),o.apply(this,arguments)},function(){r&&(window.XMLHttpRequest=r),n&&(window.XMLHttpRequest.prototype.open=n),o&&(window.XMLHttpRequest.prototype.send=o)}}function vt(t,e){var r,n=function(t){if("function"!=typeof t.fetch)return null;var e=t.fetch;return t.fetch=function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return _t.apply(void 0,a([t],e))}}(t.fetch),{register:function(t){return yt.push(t),function(){var e=yt.indexOf(t);e>=0&&yt.splice(e,1)}},clear:function(){yt=[]},unRegister:function(){e&&(t.fetch=e)}}}("function"==typeof importScripts?self:window);return n&&n.register({request:function(e,n){"function"==typeof t&&((r="string"==typeof e?new Request(e,n):e).id=ht(),t(r))},response:function(t){"function"==typeof e&&e(r,t)},responseError:function(t){"function"==typeof e&&e(r,{status:0,statusText:t})}}),null==n?void 0:n.unRegister}var yt=[];function _t(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=yt.reduce((function(t,e){return[e].concat(t)}),[]);n.forEach((function(t){var r=t.request;e=r.apply(void 0,e)||e}));var o=t.apply(void 0,e),i=null;return o.then((function(t){i=t;var e=t.headers.get("content-type");return e&&e.indexOf("application/json")||e&&e.indexOf("text/html")?t.clone().text():(item.responseType="","[object Object]")})).then((function(t){var e=i.clone();return e.data=t,n.forEach((function(t){var r=t.response;r&&(e=r(e)||e)})),i}),(function(t){return n.forEach((function(e){var r=e.responseError;r&&(t=r(t)||t)})),i}))}var St=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.queue=[],e.key="api",e.logList=[],e.perfList=[],e.unhookXML=null,e.unhookFetch=null,e.beforeHook=function(t){if(!F(t.url,e.radar.ignoreList)&&"js"!==q(t.url)&&"css"!==q(t.url)){var r={api:e.requestURLCompletion(t.url),method:t.method,request:t,startTime:Date.now()};e.queue.push(r)}},e.afterHook=function(t,o){var i=e.queue.filter((function(e){return e.request===t}))[0];if(i){delete i.request;var a=i.startTime,s=n(i,["startTime"]),c=Date.now(),u=c-a,l=o.status;"function"==typeof e.options.customizeRadarStatus&&(l=e.options.customizeRadarStatus(o));var p=e.customHook({request:t,response:o,duration:u}),d=wt(o.headers),f=r(r({duration:u,total:u,status:l,size:+d,custom_failed:!(l>=200&&l<300)},s),p);"string"==typeof o.text&&(f.responseData=o.text);var m=r(r({},o),{status:l});if(e.isResponseError(m))e.radar.logCollect(e.sepDimension({key:h.API,value:f})),e.radar.logCollectNext(e.sepDimension({key:h.API,value:f}));else{if(!e.radar.hasFmp){var g=performance.timing.apiStart;performance.timing.apiStart=g?Math.min(g,a):a;var v=performance.timing.apiEnd;performance.timing.apiEnd=v?Math.max(v,c):c}!e.mergeAPIPerf(null,f)&&e.logList.push(f)}e.queue=e.queue.filter((function(e){return e.request&&e.request!==t}))}},e}return e(o,t),o.prototype.when=function(t){return!F(t.name,this.radar.ignoreList)&&("resource"===t.entryType&&("fetch"===t.initiatorType||"xmlhttprequest"===t.initiatorType)&&"js"!==q(t.name)&&"css"!==q(t.name))},o.prototype.onPerfReport=function(t){var e=this.radar.generateLog(b,t,!1);!this.mergeAPIPerf(r(r({},e),{api:e.file}))&&this.perfList.push(r(r({},e),{api:e.file}))},o.prototype.mergeAPIPerf=function(t,e){var r=t||e,n=t?this.logList:this.perfList;if(!r)return!1;for(var o=-1,i=0,a=n.length;i<a;i++){var s=n[i],c=(r.api||"").replace(/\?.+$/,""),u=(s.api||"").replace(/\?.+$/,""),l=r.size;c===u&&(Object.assign(r,s),delete r.file,l&&(r.size=l),!r.size&&r.responseData&&(r.size=d(r.responseData)),delete r.responseData,o=i)}return-1!==o&&(n.splice(o,1),this.radar.logCollect(this.sepDimension({key:h.API,value:r})),this.radar.logCollectNext(this.sepDimension({key:h.API,value:r})),!0)},o.prototype.sepDimension=function(t){var e=t.key,r=t.value,o=r.res_type,i=r.protocol,a=r.cached,s=r.custom_failed,c=r.status,u=r.api,l=r.method,p=r.response_code,d=r.response_msg;return{key:e,value:n(r,["res_type","protocol","cached","custom_failed","status","api","method","response_code","response_msg"]),dimension:{res_type:o,protocol:i,api:u,custom_failed:s,status:c,cached:a,method:l,response_code:p,response_msg:d}}},o.prototype.requestURLCompletion=function(t){var e=document.location,r=e.protocol,n=e.host;return 0===t.indexOf("//")?r+t:0===t.indexOf("/")?r+"//"+n+t:t},o.prototype.isResponseError=function(t){return 0===t.status},o.prototype.created=function(){this.unhookXML=gt(this.beforeHook,this.afterHook),this.unhookFetch=vt(this.beforeHook,this.afterHook)},o.prototype.destroy=function(){this.unhookXML&&this.unhookXML(),this.unhookFetch&&this.unhookFetch()},o.prototype.customHook=function(t){var e={};if("function"!=typeof this.options.APIHook)return e;var r={};try{r=this.options.APIHook(t)}catch(t){return{}}if(!r)return e;var n=r.response_msg,o=r.response_code,i=r.status,a=r.custom_failed;try{e.response_msg=JSON.stringify(n).slice(0,100)}catch(t){e.response_msg="radar error: 传入的response_msg有错误"}return e.response_code=Number(o),void 0!==i&&(e.status=i),void 0!==a&&(e.custom_failed=a),e},o}(at);function wt(t){return t?"function"==typeof t.get?+t.get("Content-Length")||0:+t["content-length"]||0:0}var bt=[];function Et(t,e){Lt(e)>=0||(bt.push(e),setTimeout((function(){bt.splice(Lt(e),1)}),2e3),kt(t,e))}function kt(t,e){var r=function(t){var e=h.ERROR,r=t.error_cons_type,o=t.file,i=t.error_type,a=t.msg,s=t.col,c=t.line,u=t.stack,l=n(t,["error_cons_type","file","error_type","msg","col","line","stack"]);return{key:e,value:l,dimension:{error_cons_type:r,file:o,error_type:i,msg:a,col:s,line:c,stack:u}}}(e);t.logCollect(r)}function Lt(t){for(var e=0;e<bt.length;e++)if(r=bt[e],n=t,r.msg===n.msg&&r.stack===n.stack&&r.file===n.file&&r.line===n.line&&r.col===n.col)return e;var r,n;return-1}function Tt(t){return t.message||null!=t.lineno}function Rt(t,e,r){var n,o,i,a;if((a=e)&&(a instanceof Error||"object"==typeof a&&"string"==typeof a.message))n=e.name||"ErrorLikeObject",o=e.message||"",i=e.stack||void 0;else if(function(t,e){return null==t&&"Script error."===(null==e?void 0:e.message)}(e,r))n="CrossOriginError",o="* cross origin "+t+" with message: "+((null==r?void 0:r.message)||"<UNKNOWN>")+"\n -- by WebLogger Radar Plugin";else{n=null==e?""+e:typeof e,o="* "+t+" with value: "+function(t){var e;try{e=t.toString()}catch(t){}"string"!=typeof e||""===e?e=null===t?"<NULL>":void 0===t?"<UNDEFINED>":""===e?"<EMPTY>":"<UNKNOWN>":e.length>2e3&&(e=e.substring(0,2e3)+"<<< ……");return e}(e)+"\n  -- by WebLogger Radar Plugin"}return{error_type:v.SCRIPT,error_cons_type:n,msg:o,stack:i}}var Ot=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="error",e.onError=function(t){if(Tt(t)){var n=r(r({},Rt("global error",t.error,t)),{file:t.filename,line:t.lineno,col:t.colno});Et(e.radar,n)}},e.onPromiseError=function(t){var r=Rt("promise error",t.reason);Et(e.radar,r)},e}return e(n,t),n.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;if(["play_block","play_error"].indexOf(e)>-1)return!0}return!1},n.prototype.onPerfReport=function(t){if(t.custom){var e=t.entry||{},r=e.key,n=e.value;kt(this.radar,{error_type:v.VIDEO,error_cons_type:r,msg:n})}},n.prototype.created=function(){u(window,"error",this.onError,!0),u(window,"unhandledrejection",this.onPromiseError)},n.prototype.destroy=function(){l(window,"error",this.onError,!0),l(window,"unhandledrejection",this.onPromiseError)},n}(at),xt=[];function Ct(t,e){Pt(e)>=0||(xt.push(e),setTimeout((function(){xt.splice(Pt(e),1)}),2e3),Dt(t,e))}function Dt(t,e){var r=function(t){var e=et.ERROR,r=t.error_cons_type,o=t.file,i=t.error_type,a=t.msg,s=t.col,c=t.line,u=t.stack,l=n(t,["error_cons_type","file","error_type","msg","col","line","stack"]);return{key:e,value:l,dimension:{error_cons_type:r,file:o,error_type:i,msg:a,col:s,line:c,stack:u}}}(e);t.logCollectNext(r)}function Pt(t){for(var e=0;e<xt.length;e++)if(r=xt[e],n=t,r.msg===n.msg&&r.stack===n.stack&&r.file===n.file&&r.line===n.line&&r.col===n.col)return e;var r,n;return-1}function Nt(t){return t.message||null!=t.lineno}function It(t,e,r){var n,o,i,a;if((a=e)&&(a instanceof Error||"object"==typeof a&&"string"==typeof a.message))n=e.name||"ErrorLikeObject",o=e.message||"",i=e.stack||void 0;else if(function(t,e){return null==t&&"Script error."===(null==e?void 0:e.message)}(e,r))n="CrossOriginError",o=t+" - message: "+((null==r?void 0:r.message)||"<UNKNOWN>");else{n=null==e?""+e:typeof e,o=t+" - value: "+function(t){var e;try{e=t.toString()}catch(t){}"string"!=typeof e||""===e?e=null===t?"<NULL>":void 0===t?"<UNDEFINED>":""===e?"<EMPTY>":"<UNKNOWN>":e.length>2e3&&(e=e.substring(0,2e3)+"<<< ……");return e}(e)}return{error_type:rt.SCRIPT,error_cons_type:n,msg:o,stack:i}}var jt=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.key="error",e.onError=function(t){if(Nt(t)){var n=r(r({},It("Global Uncaught Exception",t.error,t)),{file:t.filename,line:t.lineno,col:t.colno});Ct(e.radar,n)}},e.onPromiseError=function(t){var r=It("Unhandled Promise Rejection",t.reason);Ct(e.radar,r)},e}return e(n,t),n.prototype.when=function(t){if(t.custom){var e=(t.entry||{}).key;if(["play_block","play_error"].indexOf(e)>-1)return!0}return!1},n.prototype.onPerfReport=function(t){if(t.custom){var e=t.entry||{},r=e.key,n=e.value;Dt(this.radar,{error_type:rt.VIDEO,error_cons_type:r,msg:n})}},n.prototype.created=function(){u(window,"error",this.onError,!0),u(window,"unhandledrejection",this.onPromiseError)},n.prototype.destroy=function(){l(window,"error",this.onError,!0),l(window,"unhandledrejection",this.onPromiseError)},n}(at),Ut=["play_block","play_error"],At=["c_dimension1","c_dimension2","c_dimension3"],Mt=["main_data_receive_end"];return function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.radarIgnoreList=["https://web-trace.ksapisrv.com/ktrace/collect"],n.radarFmp=0,n.customReported=[],n.customKeyList=[],n.timelineLastTime=null,n.action={start:function(t){tt(t),n.event({name:t.name,extra_info:t.extra_info||"",event_type:"radar_action_start"})},end:function(t){tt(t),n.event({name:t.name,extra_info:t.extra_info||"",result_type:t.result_type||"",event_type:"radar_action_end"})}},n.validOption()?(n.use(st,n),n.use(dt,n),n.options&&n.options.unuseResourcePlugin||(n.use(ft,n),n.use(mt,n)),n.options&&n.options.unuseAPIPlugin||n.use(St,n),n.options&&n.options.unuseErrorPlugin||(n.use(Ot,n),n.use(jt,n)),n):n}return e(r,t),r.samplingControl=function(t){if(!t)return!1;var e=Math.random();return"number"==typeof t?e<t:e<t.sampling},r.prototype.collect=function(t,e){if(0!==t.indexOf("c_")&&Mt.indexOf(t)<0)c("[error 305]","[Radar] 传入的自定义指标 "+t+" 必须为 c_ 开头");else if(Mt.indexOf(t)>-1)this.handleCollectKey(t);else{s("[radar]:Radar+之后将不再支持collect方法，请用event方法替代。");var r={key:h.CUSTOM,value:{metric_value:e},dimension:{metric_name:t}};this.logCollect(r),this.logCollectNext({key:h.EVENT,value:{duration:e},dimension:{name:t}})}},r.prototype.handleCollectKey=function(t){switch(t){case"main_data_receive_end":var e=Date.now();try{performance.timing&&(performance.timing[t]=e)}catch(t){}V(t,e)}},r.prototype.reportTimePoint=function(t,e){if(this.customReported.indexOf(t)>-1)return null;-1===Ut.indexOf(t)&&this.customReported.push(t);var r=e;if("string"!=typeof e){var n=function(t){var e="undefined"!=typeof window?window.performance:null;if(!e)return{value:null};if(null!=t)return{value:t-e.timing.navigationStart,detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"customTime",endPoint:t}};if("function"==typeof e.now)return{value:e.now(),detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"perfNowAPI",endPoint:e.now()}};var r=Date.now();return{value:r-e.timing.navigationStart,detail:{start:"navigationStart",startPoint:e.timing.navigationStart,end:"dateNow",endPoint:r}}}(e);if(null==n.value)return;r=this.throttle(n.value,n.detail,"fmp",n.detail)}return null!=r?(this.reportPerformance({custom:!0,entry:{key:t,value:r},renderTime:e}),r):void 0},r.prototype.fmp=function(t){this.radarFmp=t||Date.now();var e=this.reportTimePoint("fmp",this.radarFmp);if(e){this.hasFmp=!0;try{performance.timing&&(performance.timing.fmp=e,performance.timing.radarFmp=this.radarFmp)}catch(t){}V("fmp",e);var r={key:h.CUSTOM,value:{fmp:e,fmp_time:this.radarFmp,merge:!0}};this.logCollect(r),this.logCollectNext({key:h.EVENT,value:{duration:e},dimension:{name:"fmp"}})}},r.prototype.event=function(t,e){if(t&&t.name)if("string"==typeof t.name){t.name.length>127&&(c("[radar]:事件名称长度不能超过127字符，超过会截取后上报，请限制"),t.name=t.name.slice(0,127));var r=z();t.extra_info&&t.extra_info instanceof Object&&(t.extra_info=JSON.stringify(t.extra_info)),void 0===t.yoda_version&&(t.yoda_version=r.Yoda||""),void 0===t.webview_type&&(t.webview_type=Q());var n={key:h.EVENT,value:e,dimension:t};this.logCollect(n),this.logCollectNext(n)}else c("[radar]:name字段需要为String类型");else c("[radar]:事件名称为必填字段，用于监控展示、报警配置，请填写")},r.prototype.customStage=function(t,e){if(!(this.customKeyList.length>2)){if(e=e||{sendTimeline:!0},this.customKeyList.indexOf(t)>-1)return null;this.customKeyList.push(t);var r=Date.now();"production"!==this.weblog.logConfig.env&&(this.timelineLastTime?this.timelineLastTime:this.timelineLastTime=r),this.customPerfList[t]={options:e,time:r},this.reportPerformance({custom:!0,entry:{key:"customPerf",value:t},renderTime:r})}},r.prototype.headlessTestReport=function(){-1===window.navigator.userAgent.indexOf("headless")||this.asyncReportTiming()},r.prototype.playClicked=function(t){this.reportTimePoint("play_clicked",t)},r.prototype.playIDR=function(t){this.reportTimePoint("play_idr",t)},r.prototype.playBlock=function(t){this.reportTimePoint("play_block",t)},r.prototype.playError=function(t){this.reportTimePoint("play_error",t)},r.prototype.setDimensions=function(t){var e=this,r=Object.keys(t);r.some((function(t){return-1===At.indexOf(t)}))&&c("[error 306]","[Radar] 传入的自定义维度只能为 "+At.join("、")+"，目前传入的是："+r.join("、")),r.forEach((function(r){var n=r;null==t[n]?delete e.customDimension[n]:e.customDimension[n]=t[n]}))},r.prototype.validOption=function(){var t=this;if(!this.options)return!1;var e=this.options,r=e.sampling;return"string"!=typeof e.projectId?(c("[error 303]","[Radar] 必须配置 projectId 属性，类型为 string!"),!1):r>1||r<0?(c("[error 304]","[Radar] 采样率 sampling 必须为 0~1 之间的数字"),!1):(["apiSampling","errorSampling","resourceSampling","customSampling","eventSampling"].forEach((function(e){var r=t.options[e];"number"==typeof r&&0===r&&c("[error 304]","[Radar] 采样率 "+e+" 不能被设置为 0，将改用默认值")})),!0)},r.prototype.captureException=function(t){Et(this,Rt("capture exception",t)),Ct(this,It("Captured Exception",t))},r.__test__={MORE_REPORTED:Ut,CUSTOM_DIM_KEY:At,CUSTOM_COLLECT_KEY:Mt},r.key="radar",r}(it)}));
//# sourceMappingURL=radar.js.map


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.4.0
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cache
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value) ? value.map(function (v) { return '' + v; }) : '' + value;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      // Fix #3072 no warn if `pathMatch` is string
      warn(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("RouterLink with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ( true && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  }
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function handlePopState (e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected when going from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(
      to
    )) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  var error = createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  );
  // backwards compatible with the first introduction of Errors
  error.name = 'NavigationDuplicated';
  return error
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isNavigationFailure (err, errorType) {
  return (
    isError(err) &&
    err._isRouter &&
    (errorType == null || err.type === errorType)
  )
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route;
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    });
    // Exception should still be thrown
    throw e
  }
  this.confirmTransition(
    route,
    function () {
      var prev = this$1.current;
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
      this$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        // Initial redirection should still trigger the onReady onSuccess
        // https://github.com/vuejs/vue-router/issues/3225
        if (!isNavigationFailure(err, NavigationFailureType.redirected)) {
          this$1.readyErrorCbs.forEach(function (cb) {
            cb(err);
          });
        } else {
          this$1.readyCbs.forEach(function (cb) {
            cb(route);
          });
        }
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL();
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardownListeners = function teardownListeners () {
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
      next(cb);
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === this$1._startLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) {
      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
    } else { href = decodeURI(href); }
  } else {
    href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      },
      function (err) {
        if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback =
    mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true &&
    assert(
      install.installed,
      "not installed. Make sure to call `Vue.use(VueRouter)` " +
        "before creating root instance."
    );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

    if (!this$1.app) {
      // clean up event listeners
      // https://github.com/vuejs/vue-router/issues/2341
      this$1.history.teardownListeners();
    }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      var from = history.current;
      var expectScroll = this$1.options.scrollBehavior;
      var supportsScroll = supportsPushState && expectScroll;

      if (supportsScroll && 'fullPath' in routeOrError) {
        handleScroll(this$1, routeOrError, from, false);
      }
    };
    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupListeners,
      setupListeners
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply(
    [],
    route.matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return m.components[key]
      })
    })
  )
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.4.0';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
  if (!valid && haveExpectedTypes) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType (value, type, vm) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

var functionTypeCheckRE = /^\s*function (\w+)/;

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  // check if we need to specify expected value
  if (
    expectedTypes.length === 1 &&
    isExplicable(expectedType) &&
    isExplicable(typeof value) &&
    !isBoolean(expectedType, receivedType)
  ) {
    message += " with value " + (styleValue(value, expectedType));
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + (styleValue(value, receivedType)) + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable (value) {
  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (
      !vnode ||
      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallbackRender,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  // we know it's MountedComponentVNode but flow doesn't
  vnode,
  // activeInstance in lifecycle state
  parent
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && vm.$scopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = "callback for watcher \"" + (this.expression) + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */





function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  updated: function updated () {
    this.cacheVNode();
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.14';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=chunk-vendors.js.map