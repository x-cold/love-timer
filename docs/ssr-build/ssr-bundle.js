module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "035x":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = M;for (i = arguments.length; i-- > 2;) {
      T.push(arguments[i]);
    }t && null != t.children && (T.length || T.push(t.children), delete t.children);while (T.length) {
      if ((o = T.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        T.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === M ? l = [o] : l.push(o), n = r;
    }var a = new S();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== L.vnode && L.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function o(e) {
    !e.__d && (e.__d = !0) && 1 == D.push(e) && (L.debounceRendering || P)(r);
  }function r() {
    var e,
        t = D;D = [];while (e = t.pop()) {
      e.__d && C(e);
    }
  }function i(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function l(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function a(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function p(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function s(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function u(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === W.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, c, l) : e.removeEventListener(t, c, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) {
        try {
          e[t] = null == o ? "" : o;
        } catch (e) {}null != o && !1 !== o || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function c(e) {
    return this.__l[e.type](L.event && L.event(e) || e);
  }function _() {
    var e;while (e = E.pop()) {
      L.afterMount && L.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    V++ || (A = null != r && void 0 !== r.ownerSVGElement, H = null != e && !("__preactattr_" in e));var l = f(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --V || (H = !1, i || _()), l;
  }function f(e, t, n, o, r) {
    var i = e,
        a = A;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0))), i.__preactattr_ = !0, i;var s = t.nodeName;if ("function" == typeof s) return x(e, t, n, o);if (A = "svg" === s || "foreignObject" !== s && A, s += "", (!e || !l(e, s)) && (i = p(s, A), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0);
    }var u = i.firstChild,
        c = i.__preactattr_,
        _ = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var d = i.attributes, f = d.length; f--;) {
        c[d[f].name] = d[f].value;
      }
    }return !H && _ && 1 === _.length && "string" == typeof _[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != _[0] && (u.nodeValue = _[0]) : (_ && _.length || null != u) && h(i, _, n, o, H || null != c.dangerouslySetInnerHTML), b(i, t.attributes, c), A = a, i;
  }function h(e, t, n, o, r) {
    var l,
        a,
        p,
        u,
        c,
        _ = e.childNodes,
        d = [],
        h = {},
        v = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (v++, h[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (d[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      u = t[C], c = null;var k = u.key;if (null != k) v && void 0 !== h[k] && (c = h[k], h[k] = void 0, v--);else if (b < g) for (l = b; l < g; l++) {
        if (void 0 !== d[l] && i(a = d[l], u, r)) {
          c = a, d[l] = void 0, l === g - 1 && g--, l === b && b++;break;
        }
      }c = f(c, u, n, o), p = _[C], c && c !== e && c !== p && (null == p ? e.appendChild(c) : c === p.nextSibling ? s(p) : e.insertBefore(c, p));
    }if (v) for (var C in h) {
      void 0 !== h[C] && m(h[C], !1);
    }while (b <= g) {
      void 0 !== (c = d[g--]) && m(c, !1);
    }
  }function m(e, t) {
    var n = e._component;n ? N(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || s(e), v(e));
  }function v(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;m(e, !0), e = t;
    }
  }function b(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || u(e, o, n[o], n[o] = void 0, A);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || u(e, o, n[o], n[o] = t[o], A);
    }
  }function y(e, t, n) {
    var o,
        r = B.length;e.prototype && e.prototype.render ? (o = new e(t, n), k.call(o, t, n)) : (o = new k(t, n), o.constructor = e, o.render = g);while (r--) {
      if (B[r].constructor === e) return o.__b = B[r].__b, B.splice(r, 1), o;
    }return o;
  }function g(e, t, n) {
    return this.constructor(e, n);
  }function w(e, t, n, r, i) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.__c || (e.__c = e.context), e.context = r), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === L.syncComponentUpdates && e.base ? o(e) : C(e, 1, i)), e.__r && e.__r(e));
  }function C(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          p,
          s = e.props,
          u = e.state,
          c = e.context,
          f = e.__p || s,
          h = e.__s || u,
          v = e.__c || c,
          b = e.base,
          g = e.__b,
          x = b || g,
          k = e._component,
          U = !1,
          S = v;if (e.constructor.getDerivedStateFromProps && (u = t(t({}, u), e.constructor.getDerivedStateFromProps(s, u)), e.state = u), b && (e.props = f, e.state = h, e.context = v, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, u, c) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(s, u, c), e.props = s, e.state = u, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(s, u, c), e.getChildContext && (c = t(t({}, c), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(f, h));var T,
            M,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = a(i);l = k, l && l.constructor === P && W.key == l.__k ? w(l, W, 1, c, !1) : (T = l, e._component = l = y(P, W, c), l.__b = l.__b || g, l.__u = e, w(l, W, 0, c, !1), C(l, 1, o, !0)), M = l.base;
        } else p = x, T = k, T && (p = e._component = null), (x || 1 === n) && (p && (p._component = null), M = d(p, i, c, o || !b, x && x.parentNode, !0));if (x && M !== x && l !== k) {
          var D = x.parentNode;D && M !== D && (D.replaceChild(M, x), T || (x._component = null, m(x, !1)));
        }if (T && N(T), e.base = M, M && !r) {
          var A = e,
              H = e;while (H = H.__u) {
            (A = H).base = M;
          }M._component = A, M._componentConstructor = A.constructor;
        }
      }!b || o ? E.unshift(e) : U || (e.componentDidUpdate && e.componentDidUpdate(f, h, S), L.afterUpdate && L.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }V || r || _();
    }
  }function x(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        p = r && e._componentConstructor === t.nodeName,
        s = p,
        u = a(t);while (r && !s && (r = r.__u)) {
      s = r.constructor === t.nodeName;
    }return r && s && (!o || r._component) ? (w(r, u, 3, n, o), e = r.base) : (i && !p && (N(i), e = l = null), r = y(t.nodeName, u, n), e && !r.__b && (r.__b = e, l = null), w(r, u, 1, n, o), e = r.base, l && e !== l && (l._component = null, m(l, !1))), e;
  }function N(e) {
    L.beforeUnmount && L.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? N(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, s(t), B.push(e), v(t)), e.__r && e.__r(null);
  }function k(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function U(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }var S = function S() {},
      L = {},
      T = [],
      M = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      W = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      D = [],
      E = [],
      V = 0,
      A = !1,
      H = !1,
      B = [];t(k.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), o(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), C(this, 2);
    }, render: function render() {} });var F = { h: e, createElement: e, cloneElement: n, Component: k, render: U, rerender: r, options: L }; true ? module.exports = F : self.preact = F;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "3BYo":
/***/ (function(module, exports) {

function getDaysInMonth(month) {
  var data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return data[month];
}

/**
 * 时间减法，参考借位减法
 * 
 * @param {Date|Number} date 被减数
 * @param {Date|Number} date 减数
 * 
 * @return {Object} date 时间差
 * @return {Number} date.passed 是否为过去时间
 * @return {Number} date.date 被减数
 * @return {Number} date.current 减数
 * @return {Number} date.years 年
 * @return {Number} date.months 月
 * @return {Number} date.days 日
 * @return {Number} date.hours 
 * @return {Number} date.minutes 分
 * @return {Number} date.seconds 秒
 */
function dateMinus(date, current) {
  if (typeof current !== 'object') {
    current = current ? new Date(current) : new Date();
  }
  if (typeof date !== 'object') {
    date = date ? new Date(date) : new Date();
  }

  // 传入的时间是过去
  var passed = true;
  if (date.valueOf() > current.valueOf()) {
    var tmpDate = date;
    date = current;
    current = tmpDate;
    passed = false;
  }

  var years = 0;
  var months = 0;
  var days = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  seconds = current.getSeconds() - date.getSeconds();
  if (seconds < 0) {
    seconds += 60;
    current.setMinutes(current.getMinutes() - 1);
  }

  minutes = current.getMinutes() - date.getMinutes();
  if (minutes < 0) {
    minutes += 60;
    current.setHours(current.getHours() - 1);
  }

  hours = current.getHours() - date.getHours();
  if (hours < 0) {
    hours += 24;
    current.setDate(current.getDate() - 1);
  }

  days = current.getDate() - date.getDate();
  if (days < 0) {
    days += getDaysInMonth(current.getMonth());
    current.setMonth(current.getMonth() - 1);
  }

  months = current.getMonth() - date.getMonth();
  if (months < 0) {
    months += 12;
    current.setYear(current.getFullYear() - 1);
  }

  years = current.getFullYear() - date.getFullYear();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return {
    years: years,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    passed: passed,
    date: date,
    current: current
  };
}

exports.dateMinus = dateMinus;

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: /usr/local/lib/node_modules/preact-cli/node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("035x");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: /usr/local/lib/node_modules/preact-cli/node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["h"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["h"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ../node_modules/date-minus/index.js
var date_minus = __webpack_require__("3BYo");
var date_minus_default = /*#__PURE__*/__webpack_require__.n(date_minus);

// EXTERNAL MODULE: ./components/timer/style.css
var timer_style = __webpack_require__("V03K");
var timer_style_default = /*#__PURE__*/__webpack_require__.n(timer_style);

// CONCATENATED MODULE: ./components/timer/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var timer_Timer = function (_Component) {
  _inherits(Timer, _Component);

  function Timer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Timer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      log: [],
      dist: {},
      timer: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Timer.prototype.computeDist = function computeDist() {
    var baseTime = this.props.baseTime;

    var dist = Object(date_minus["dateMinus"])(baseTime);
    this.setState({
      dist: dist
    });
  };

  Timer.prototype.computeRun = function computeRun() {
    this.computeDist();
    setTimeout(this.computeRun.bind(this), 1000);
  };

  Timer.prototype.clearTimer = function clearTimer() {
    this.setState({
      timer: null
    });
  };

  Timer.prototype.componentWillMount = function componentWillMount() {
    this.clearTimer();
    this.computeRun();
  };

  Timer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearTimer();
  };

  Timer.prototype.render = function render() {
    var dist = this.state.dist;

    return Object(preact_min["h"])(
      'div',
      { 'class': timer_style_default.a.timer },
      Object(preact_min["h"])(
        'span',
        null,
        dist.years
      ),
      ' \u5E74 ',
      Object(preact_min["h"])(
        'span',
        null,
        dist.months
      ),
      ' \u6708 ',
      Object(preact_min["h"])(
        'span',
        null,
        dist.days
      ),
      ' \u65E5',
      Object(preact_min["h"])(
        'span',
        null,
        dist.hours
      ),
      ' \u65F6 ',
      Object(preact_min["h"])(
        'span',
        null,
        dist.minutes
      ),
      ' \u5206 ',
      Object(preact_min["h"])(
        'span',
        null,
        dist.seconds,
        ' '
      ),
      ' \u79D2'
    );
  };

  return Timer;
}(preact_min["Component"]);

timer_Timer.defaultProps = {
  // 初始化时间
  baseTime: new Date('2015-9-19 22:10:00').valueOf()
};

/* harmony default export */ var timer = (timer_Timer);
// EXTERNAL MODULE: ./utils/animate.js
var animate = __webpack_require__("vBoo");
var animate_default = /*#__PURE__*/__webpack_require__.n(animate);

// EXTERNAL MODULE: ./components/particule/style.css
var particule_style = __webpack_require__("pWUa");
var particule_style_default = /*#__PURE__*/__webpack_require__.n(particule_style);

// CONCATENATED MODULE: ./components/particule/index.js


function particule__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function particule__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function particule__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var particule_renderParticule = function renderParticule(canvasEl) {
	canvasEl = canvasEl || document.querySelector('#bgCanvas');
	var ctx = canvasEl.getContext('2d');
	var numberOfParticules = Number(location.href.split('?')[1]) || 40;
	var pointerX = 0;
	var pointerY = 0;
	var tap = 'ontouchstart' in window || navigator.msMaxTouchPoints ? 'touchstart' : 'mousedown';
	var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

	function setCanvasSize() {
		canvasEl.width = window.innerWidth * 2;
		canvasEl.height = window.innerHeight * 2;
		canvasEl.style.width = window.innerWidth + 'px';
		canvasEl.style.height = window.innerHeight + 'px';
		canvasEl.getContext('2d').scale(2, 2);
	}

	function updateCoords(e) {
		pointerX = e.clientX || e.touches[0].clientX;
		pointerY = e.clientY || e.touches[0].clientY;
	}

	function setParticuleDirection(p) {
		var angle = animate_default.a.random(0, 360) * Math.PI / 180;
		var value = animate_default.a.random(50, 180);
		var radius = [-1, 1][animate_default.a.random(0, 1)] * value;
		return {
			x: p.x + radius * Math.cos(angle),
			y: p.y + radius * Math.sin(angle)
		};
	}

	function createParticule(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.color = colors[animate_default.a.random(0, colors.length - 1)];
		p.radius = animate_default.a.random(16, 32);
		p.endPos = setParticuleDirection(p);
		p.draw = function () {
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
			ctx.fillStyle = p.color;
			ctx.fill();
		};
		return p;
	}

	function createCircle(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.color = '#FFF';
		p.radius = 0.1;
		p.alpha = .5;
		p.lineWidth = 6;
		p.draw = function () {
			ctx.globalAlpha = p.alpha;
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
			ctx.lineWidth = p.lineWidth;
			ctx.strokeStyle = p.color;
			ctx.stroke();
			ctx.globalAlpha = 1;
		};
		return p;
	}

	function renderParticule(anim) {
		for (var i = 0; i < anim.animatables.length; i++) {
			anim.animatables[i].target.draw();
		}
	}

	function animateParticules(x, y) {
		var circle = createCircle(x, y);
		var particules = [];
		for (var i = 0; i < numberOfParticules; i++) {
			particules.push(createParticule(x, y));
		}
		animate_default.a.timeline().add({
			targets: particules,
			x: function x(p) {
				return p.endPos.x;
			},
			y: function y(p) {
				return p.endPos.y;
			},
			radius: 0.1,
			duration: animate_default.a.random(1200, 1800),
			easing: 'easeOutExpo',
			update: renderParticule
		}).add({
			targets: circle,
			radius: animate_default.a.random(80, 160),
			lineWidth: 0,
			alpha: {
				value: 0,
				easing: 'linear',
				duration: animate_default.a.random(600, 800)
			},
			duration: animate_default.a.random(1200, 1800),
			easing: 'easeOutExpo',
			update: renderParticule,
			offset: 0
		});
	}

	var render = animate_default()({
		duration: Infinity,
		update: function update() {
			ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
		}
	});

	document.addEventListener(tap, function (e) {
		window.human = true;
		render.play();
		updateCoords(e);
		animateParticules(pointerX, pointerY);
	}, false);

	window.addEventListener('resize', setCanvasSize, false);

	return {
		render: render,
		setCanvasSize: setCanvasSize,
		animateParticules: animateParticules
	};
};

var particule_Particule = function (_Component) {
	particule__inherits(Particule, _Component);

	function Particule() {
		particule__classCallCheck(this, Particule);

		return particule__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Particule.prototype.componentDidMount = function componentDidMount() {
		particule_renderParticule();
	};

	Particule.prototype.render = function render() {
		return Object(preact_min["h"])('canvas', { 'class': particule_style_default.a.bgCanvas, id: 'bgCanvas' });
	};

	return Particule;
}(preact_min["Component"]);

/* harmony default export */ var particule = (particule_Particule);
// EXTERNAL MODULE: ./components/heart/style.css
var heart_style = __webpack_require__("UKZy");
var heart_style_default = /*#__PURE__*/__webpack_require__.n(heart_style);

// CONCATENATED MODULE: ./components/heart/index.js


function heart__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function heart__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function heart__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var heart_Heart = function (_Component) {
	heart__inherits(Heart, _Component);

	function Heart() {
		heart__classCallCheck(this, Heart);

		return heart__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Heart.prototype.render = function render() {
		var dist = this.state.dist;

		return Object(preact_min["h"])('div', { 'class': heart_style_default.a.heart });
	};

	return Heart;
}(preact_min["Component"]);

/* harmony default export */ var heart = (heart_Heart);
// CONCATENATED MODULE: ./routes/home/index.js


function home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = Object(preact_min["h"])(
	'div',
	{ className: 'container' },
	Object(preact_min["h"])(particule, null),
	Object(preact_min["h"])(
		'div',
		{ className: 'content' },
		Object(preact_min["h"])(heart, null),
		Object(preact_min["h"])(timer, null),
		Object(preact_min["h"])(
			'div',
			{ className: 'copyright' },
			'\u51B7\u54E5\u54E5 & \u738B\u5F2F\u5F2F ',
			Object(preact_min["h"])(
				'span',
				{ className: 'desc' },
				' \u957F\u8DD1\uFF0C\u4E00\u76F4\u4FDD\u6301\u5FC3\u8DF3\u2026\u2026'
			)
		)
	)
);

var Home = function (_Component) {
	home__inherits(Home, _Component);

	function Home() {
		home__classCallCheck(this, Home);

		return home__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Home.prototype.render = function render() {
		return _ref;
	};

	return Home;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var app__ref = Object(preact_min["h"])(Home, { path: '/' });

var app_App = function (_Component) {
	app__inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		app__classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
			_this.currentUrl = e.url;
		}, _temp), app__possibleConstructorReturn(_this, _ret);
	}
	/** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */


	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ id: 'app' },
			Object(preact_min["h"])(
				preact_router_es_Router,
				{ onChange: this.handleRoute },
				app__ref
			)
		);
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "UKZy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"heart":"heart__6Al7C","heartbeat":"heartbeat__2WBcH"};

/***/ }),

/***/ "V03K":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"timer":"timer__3mfTz"};

/***/ }),

/***/ "pWUa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bgCanvas":"bgCanvas__1_9YZ"};

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vBoo":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _this = this;

/**
 * http://animejs.com
 * JavaScript animation engine
 * @version v2.1.0
 * @author Julian Garnier
 * @copyright ©2017 Julian Garnier
 * Released under the MIT license
**/

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.anime = factory();
  }
})(this, function () {

  // Defaults

  var defaultInstanceSettings = {
    update: undefined,
    begin: undefined,
    run: undefined,
    complete: undefined,
    loop: 1,
    direction: 'normal',
    autoplay: true,
    offset: 0
  };

  var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    easing: 'easeOutElastic',
    elasticity: 500,
    round: 0
  };

  var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY', 'perspective'];
  var transformString = void 0;

  // Utils

  function stringContains(str, text) {
    return str.indexOf(text) > -1;
  }

  var is = {
    arr: function arr(a) {
      return Array.isArray(a);
    },
    obj: function obj(a) {
      return stringContains(Object.prototype.toString.call(a), 'Object');
    },
    svg: function svg(a) {
      return a instanceof SVGElement;
    },
    dom: function dom(a) {
      return a.nodeType || is.svg(a);
    },
    str: function str(a) {
      return typeof a === 'string';
    },
    fnc: function fnc(a) {
      return typeof a === 'function';
    },
    und: function und(a) {
      return typeof a === 'undefined';
    },
    hex: function hex(a) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      );
    },
    rgb: function rgb(a) {
      return (/^rgb/.test(a)
      );
    },
    hsl: function hsl(a) {
      return (/^hsl/.test(a)
      );
    },
    col: function col(a) {
      return is.hex(a) || is.rgb(a) || is.hsl(a);
    }

    // BezierEasing https://github.com/gre/bezier-easing

  };var bezier = function () {

    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

    function A(aA1, aA2) {
      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    };
    function B(aA1, aA2) {
      return 3.0 * aA2 - 6.0 * aA1;
    };
    function C(aA1) {
      return 3.0 * aA1;
    };

    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    };
    function getSlope(aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    };

    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX = void 0,
          currentT = void 0,
          i = 0;
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        };
      } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
      return currentT;
    }

    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < 4; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }

    function bezier(mX1, mY1, mX2, mY2) {

      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
      var sampleValues = new Float32Array(kSplineTableSize);

      if (mX1 !== mY1 || mX2 !== mY2) {
        for (var i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      }

      function getTForX(aX) {

        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }

        --currentSample;

        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= 0.001) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }

      return function (x) {
        if (mX1 === mY1 && mX2 === mY2) return x;
        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(getTForX(x), mY1, mY2);
      };
    }

    return bezier;
  }();

  var easings = function () {

    var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic'];

    // Elastic easing adapted from jQueryUI http://api.jqueryui.com/easings/

    function elastic(t, p) {
      return t === 0 || t === 1 ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2.0) * Math.asin(1)) * (Math.PI * 2) / p);
    }

    // Approximated Penner equations http://matthewlein.com/ceaser/

    var equations = {
      In: [[0.550, 0.085, 0.680, 0.530], /* InQuad */
      [0.550, 0.055, 0.675, 0.190], /* InCubic */
      [0.895, 0.030, 0.685, 0.220], /* InQuart */
      [0.755, 0.050, 0.855, 0.060], /* InQuint */
      [0.470, 0.000, 0.745, 0.715], /* InSine */
      [0.950, 0.050, 0.795, 0.035], /* InExpo */
      [0.600, 0.040, 0.980, 0.335], /* InCirc */
      [0.600, -0.280, 0.735, 0.045], /* InBack */
      elastic /* InElastic */
      ], Out: [[0.250, 0.460, 0.450, 0.940], /* OutQuad */
      [0.215, 0.610, 0.355, 1.000], /* OutCubic */
      [0.165, 0.840, 0.440, 1.000], /* OutQuart */
      [0.230, 1.000, 0.320, 1.000], /* OutQuint */
      [0.390, 0.575, 0.565, 1.000], /* OutSine */
      [0.190, 1.000, 0.220, 1.000], /* OutExpo */
      [0.075, 0.820, 0.165, 1.000], /* OutCirc */
      [0.175, 0.885, 0.320, 1.275], /* OutBack */
      function (t, f) {
        return 1 - elastic(1 - t, f);
      } /* OutElastic */
      ], InOut: [[0.455, 0.030, 0.515, 0.955], /* InOutQuad */
      [0.645, 0.045, 0.355, 1.000], /* InOutCubic */
      [0.770, 0.000, 0.175, 1.000], /* InOutQuart */
      [0.860, 0.000, 0.070, 1.000], /* InOutQuint */
      [0.445, 0.050, 0.550, 0.950], /* InOutSine */
      [1.000, 0.000, 0.000, 1.000], /* InOutExpo */
      [0.785, 0.135, 0.150, 0.860], /* InOutCirc */
      [0.680, -0.550, 0.265, 1.550], /* InOutBack */
      function (t, f) {
        return t < .5 ? elastic(t * 2, f) / 2 : 1 - elastic(t * -2 + 2, f) / 2;
      } /* InOutElastic */
      ]
    };

    var functions = {
      linear: bezier(0.250, 0.250, 0.750, 0.750)
    };

    var _loop = function _loop(type) {
      equations[type].forEach(function (f, i) {
        functions['ease' + type + names[i]] = is.fnc(f) ? f : bezier.apply(_this, f);
      });
    };

    for (var type in equations) {
      _loop(type);
    }

    return functions;
  }();

  // Strings

  function stringToHyphens(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  function selectString(str) {
    if (is.col(str)) return;
    try {
      var nodes = document.querySelectorAll(str);
      return nodes;
    } catch (e) {
      return;
    }
  }

  // Arrays

  function flattenArray(arr) {
    return arr.reduce(function (a, b) {
      return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
  }

  function toArray(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [o];
  }

  function arrayContains(arr, val) {
    return arr.some(function (a) {
      return a === val;
    });
  }

  // Objects

  function objectHas(obj, prop) {
    return obj.hasOwnProperty(prop);
  }

  function cloneObject(o) {
    var clone = {};
    for (var p in o) {
      clone[p] = o[p];
    }return clone;
  }

  function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
    for (var p in o1) {
      o[p] = objectHas(o2, p) ? o2[p] : o1[p];
    }return o;
  }

  function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
    for (var p in o2) {
      o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    }return o;
  }

  // Colors

  function hexToRgb(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  function hslToRgb(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue);
    var h = parseInt(hsl[1]) / 360;
    var s = parseInt(hsl[2]) / 100;
    var l = parseInt(hsl[3]) / 100;
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    var r = void 0,
        g = void 0,
        b = void 0;
    if (s == 0) {
      r = g = b = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return 'rgb(' + r * 255 + ',' + g * 255 + ',' + b * 255 + ')';
  }

  function colorToRgb(val) {
    if (is.rgb(val)) return val;
    if (is.hex(val)) return hexToRgb(val);
    if (is.hsl(val)) return hslToRgb(val);
  }

  // Units

  function getUnit(val) {
    var split = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) return split[2];
  }

  function getTransformUnit(propName) {
    if (stringContains(propName, 'translate') || propName === 'perspective') return 'px';
    if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) return 'deg';
  }

  // Values

  function minMaxValue(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) return val;
    return val(animatable.target, animatable.id, animatable.total);
  }

  function getCSSValue(el, prop) {
    if (prop in el.style) {
      return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0';
    }
  }

  function getAnimationType(el, prop) {
    if (is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
    if (is.dom(el) && (el.getAttribute(prop) || is.svg(el) && el[prop])) return 'attribute';
    if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) return 'css';
    if (el[prop] != null) return 'object';
  }

  function getTransformValue(el, propName) {
    var defaultUnit = getTransformUnit(propName);
    var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + defaultUnit;
    var str = el.style.transform;
    if (!str) return defaultVal;
    var match = [];
    var props = [];
    var values = [];
    var rgx = /(\w+)\((.+?)\)/g;
    while (match = rgx.exec(str)) {
      props.push(match[1]);
      values.push(match[2]);
    }
    var value = values.filter(function (val, i) {
      return props[i] === propName;
    });
    return value.length ? value[0] : defaultVal;
  }

  function getOriginalTargetValue(target, propName) {
    switch (getAnimationType(target, propName)) {
      case 'transform':
        return getTransformValue(target, propName);
      case 'css':
        return getCSSValue(target, propName);
      case 'attribute':
        return target.getAttribute(propName);
    }
    return target[propName] || 0;
  }

  function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) return to;
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ''));
    switch (operator[0][0]) {
      case '+':
        return x + y + u;
      case '-':
        return x - y + u;
      case '*':
        return x * y + u;
    }
  }

  function validateValue(val, unit) {
    if (is.col(val)) return colorToRgb(val);
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    return unit && !/\s/g.test(val) ? unitLess + unit : unitLess;
  }

  // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes. 
  // adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  function getCircleLength(el) {
    return 2 * Math.PI * el.getAttribute('r');
  }

  function getRectLength(el) {
    return el.getAttribute('width') * 2 + el.getAttribute('height') * 2;
  }

  function getLineLength(el) {
    return getDistance({ x: el.getAttribute('x1'), y: el.getAttribute('y1') }, { x: el.getAttribute('x2'), y: el.getAttribute('y2') });
  }

  function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos = void 0;
    for (var i = 0; i < points.numberOfItems; i++) {
      var currentPos = points.getItem(i);
      if (i > 0) totalLength += getDistance(previousPos, currentPos);
      previousPos = currentPos;
    }
    return totalLength;
  }

  function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
  }

  // Path animation

  function getTotalLength(el) {
    if (el.getTotalLength) return el.getTotalLength();
    switch (el.tagName.toLowerCase()) {
      case 'circle':
        return getCircleLength(el);
      case 'rect':
        return getRectLength(el);
      case 'line':
        return getLineLength(el);
      case 'polyline':
        return getPolylineLength(el);
      case 'polygon':
        return getPolygonLength(el);
    }
  }

  function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute('stroke-dasharray', pathLength);
    return pathLength;
  }

  // Motion path

  function isPath(val) {
    return is.obj(val) && objectHas(val, 'totalLength');
  }

  function getPath(path, percent) {
    var el = is.str(path) ? selectString(path)[0] : path;
    var p = percent || 100;
    return function (prop) {
      return {
        el: el,
        property: prop,
        totalLength: getTotalLength(el) * (p / 100)
      };
    };
  }

  function getPathProgress(path, progress) {
    function point() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var l = progress + offset >= 1 ? progress + offset : 0;
      return path.el.getPointAtLength(l);
    }
    var p = point();
    var p0 = point(-1);
    var p1 = point(+1);
    switch (path.property) {
      case 'x':
        return p.x;
      case 'y':
        return p.y;
      case 'angle':
        return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
  }

  // Decompose / recompose functions adapted from Animate Plus https://github.com/bendc/animateplus

  function decomposeValue(val, unit) {
    var rgx = /-?\d*\.?\d+/g;
    var value = validateValue(isPath(val) ? val.totalLength : val, unit) + '';
    return {
      original: value,
      numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
      strings: is.str(val) || unit ? value.split(rgx) : []
    };
  }

  function recomposeValue(numbers, strings) {
    return strings.length === 0 ? numbers[0] : strings.reduce(function (a, b, i) {
      return a + numbers[i - 1] + (b ? b : ' ');
    });
  }

  // Animatables

  function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return targetsArray.filter(function (item, pos, self) {
      return self.indexOf(item) === pos;
    });
  }

  function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function (t, i) {
      return { target: t, id: i, total: parsed.length };
    });
  }

  // Properties

  function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    if (is.arr(prop)) {
      var l = prop.length;
      var isFromTo = l === 2 && !is.obj(prop[0]);
      if (!isFromTo) {
        // Duration divided by the number of tweens
        if (!is.fnc(tweenSettings.duration)) settings.duration = tweenSettings.duration / l;
      } else {
        // Transform [from, to] values shorthand to a valid tween value
        prop = { value: prop };
      }
    }
    return toArray(prop).map(function (v, i) {
      // Default delay value should be applied only on the first tween
      var delay = !i ? tweenSettings.delay : 0;
      // Use path object as a tween value
      var obj = is.obj(v) && !isPath(v) ? v : { value: v };
      // Set default delay value
      if (is.und(obj.delay)) obj.delay = delay;
      return obj;
    }).map(function (k) {
      return mergeObjects(k, settings);
    });
  }

  function getProperties(instanceSettings, tweenSettings, params) {
    var properties = [];
    var settings = mergeObjects(instanceSettings, tweenSettings);
    for (var p in params) {
      if (!objectHas(settings, p) && p !== 'targets') {
        properties.push({
          name: p,
          offset: settings['offset'],
          tweens: normalizePropertyTweens(params[p], tweenSettings)
        });
      }
    }
    return properties;
  }

  // Tweens

  function normalizeTweenValues(tween, animatable) {
    var t = {};
    for (var p in tween) {
      var value = getFunctionValue(tween[p], animatable);
      if (is.arr(value)) {
        value = value.map(function (v) {
          return getFunctionValue(v, animatable);
        });
        if (value.length === 1) value = value[0];
      }
      t[p] = value;
    }
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
  }

  function normalizeEasing(val) {
    return is.arr(val) ? bezier.apply(this, val) : easings[val];
  }

  function normalizeTweens(prop, animatable) {
    var previousTween = void 0;
    return prop.tweens.map(function (t) {
      var tween = normalizeTweenValues(t, animatable);
      var tweenValue = tween.value;
      var originalValue = getOriginalTargetValue(animatable.target, prop.name);
      var previousValue = previousTween ? previousTween.to.original : originalValue;
      var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
      var to = getRelativeValue(is.arr(tweenValue) ? tweenValue[1] : tweenValue, from);
      var unit = getUnit(to) || getUnit(from) || getUnit(originalValue);
      tween.isPath = isPath(tweenValue);
      tween.from = decomposeValue(from, unit);
      tween.to = decomposeValue(to, unit);
      tween.start = previousTween ? previousTween.end : prop.offset;
      tween.end = tween.start + tween.delay + tween.duration;
      tween.easing = normalizeEasing(tween.easing);
      tween.elasticity = (1000 - minMaxValue(tween.elasticity, 1, 999)) / 1000;
      if (is.col(tween.from.original)) tween.round = 1;
      previousTween = tween;
      return tween;
    });
  }

  // Tween progress

  var setTweenProgress = {
    css: function css(t, p, v) {
      return t.style[p] = v;
    },
    attribute: function attribute(t, p, v) {
      return t.setAttribute(p, v);
    },
    object: function object(t, p, v) {
      return t[p] = v;
    },
    transform: function transform(t, p, v, transforms, id) {
      if (!transforms[id]) transforms[id] = [];
      transforms[id].push(p + '(' + v + ')');
    }

    // Animations

  };function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
      var tweens = normalizeTweens(prop, animatable);
      return {
        type: animType,
        property: prop.name,
        animatable: animatable,
        tweens: tweens,
        duration: tweens[tweens.length - 1].end,
        delay: tweens[0].delay
      };
    }
  }

  function getAnimations(animatables, properties) {
    return flattenArray(animatables.map(function (animatable) {
      return properties.map(function (prop) {
        return createAnimation(animatable, prop);
      });
    })).filter(function (a) {
      return !is.und(a);
    });
  }

  // Create Instance

  function getInstanceTimings(type, animations, tweenSettings) {
    var math = type === 'delay' ? Math.min : Math.max;
    return animations.length ? math.apply(Math, animations.map(function (anim) {
      return anim[type];
    })) : tweenSettings[type];
  }

  function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var properties = getProperties(instanceSettings, tweenSettings, params);
    var animations = getAnimations(animatables, properties);
    return mergeObjects(instanceSettings, {
      children: [],
      animatables: animatables,
      animations: animations,
      duration: getInstanceTimings('duration', animations, tweenSettings),
      delay: getInstanceTimings('delay', animations, tweenSettings)
    });
  }

  // Core

  var activeInstances = [];
  var raf = 0;

  var engine = function () {
    function play() {
      raf = requestAnimationFrame(step);
    };
    function step(t) {
      var activeLength = activeInstances.length;
      if (activeLength) {
        var i = 0;
        while (i < activeLength) {
          if (activeInstances[i]) activeInstances[i].tick(t);
          i++;
        }
        play();
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }
    return play;
  }();

  // Public Instance

  function anime() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    var now = void 0,
        startTime = void 0,
        lastTime = 0;

    var resolve = null;

    function makePromise() {
      return window.Promise && new Promise(function (_resolve) {
        return resolve = _resolve;
      });
    }

    var promise = makePromise();

    var instance = createNewInstance(params);

    function toggleInstanceDirection() {
      instance.reversed = !instance.reversed;
    }

    function adjustTime(time) {
      return instance.reversed ? instance.duration - time : time;
    }

    function syncInstanceChildren(time) {
      var children = instance.children;
      if (time >= instance.currentTime) {
        for (var i = 0; i < children.length; i++) {
          children[i].seek(time);
        }
      } else {
        for (var _i = children.length; _i--;) {
          children[_i].seek(time);
        }
      }
    }

    function setAnimationsProgress(insTime) {
      var i = 0;
      var transforms = {};
      var animations = instance.animations;

      var _loop2 = function _loop2() {
        var anim = animations[i];
        var animatable = anim.animatable;
        var tweens = anim.tweens;
        var tween = tweens.filter(function (t) {
          return insTime < t.end;
        })[0] || tweens[tweens.length - 1];
        var elapsed = minMaxValue(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
        var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed, tween.elasticity);
        var round = tween.round;
        var progress = recomposeValue(tween.to.numbers.map(function (number, p) {
          var start = tween.from.numbers[p];
          var value = start + eased * (number - start);
          if (tween.isPath) value = getPathProgress(tween.value, value);
          if (round) value = Math.round(value * round) / round;
          return value;
        }), tween.to.strings);
        setTweenProgress[anim.type](animatable.target, anim.property, progress, transforms, animatable.id);
        anim.currentValue = progress;
        i++;
      };

      while (i < animations.length) {
        _loop2();
      }
      if (transforms) {
        var id = void 0;for (id in transforms) {
          if (!transformString) {
            var t = 'transform';
            transformString = getCSSValue(document.body, t) ? t : '-webkit-' + t;
          }
          instance.animatables[id].target.style[transformString] = transforms[id].join(' ');
        }
      }
      instance.currentTime = insTime;
      instance.progress = insTime / instance.duration * 100;
    }

    function setCallback(cb) {
      if (instance[cb]) instance[cb](instance);
    }

    function countIteration() {
      if (instance.remaining && instance.remaining !== true) {
        instance.remaining--;
      }
    }

    function setInstanceProgress(engineTime) {
      var insDuration = instance.duration;
      var insOffset = instance.offset;
      var insDelay = instance.delay;
      var insCurrentTime = instance.currentTime;
      var insReversed = instance.reversed;
      var insTime = adjustTime(engineTime);
      if (instance.children.length) syncInstanceChildren(insTime);
      if (insTime >= insDelay) {
        setCallback('run');
        if (!instance.began) {
          instance.began = true;
          setCallback('begin');
        }
      }
      if (insTime > insOffset && insTime < insDuration) {
        setAnimationsProgress(insTime);
      } else {
        if (insTime <= insOffset && insCurrentTime !== 0) {
          setAnimationsProgress(0);
          if (insReversed) countIteration();
        }
        if (insTime >= insDuration && insCurrentTime !== insDuration) {
          setAnimationsProgress(insDuration);
          if (!insReversed) countIteration();
        }
      }
      setCallback('update');
      if (engineTime >= insDuration) {
        if (instance.remaining) {
          startTime = now;
          if (instance.direction === 'alternate') toggleInstanceDirection();
        } else {
          instance.pause();
          if (!instance.completed) {
            instance.completed = true;
            setCallback('complete');
            if ('Promise' in window) {
              resolve();
              promise = makePromise();
            }
          }
        }
        lastTime = 0;
      }
    }

    instance.reset = function () {
      var direction = instance.direction;
      var loops = instance.loop;
      instance.currentTime = 0;
      instance.progress = 0;
      instance.paused = true;
      instance.began = false;
      instance.completed = false;
      instance.reversed = direction === 'reverse';
      instance.remaining = direction === 'alternate' && loops === 1 ? 2 : loops;
      setAnimationsProgress(0);
      for (var i = instance.children.length; i--;) {
        instance.children[i].reset();
      }
    };

    instance.tick = function (t) {
      now = t;
      if (!startTime) startTime = now;
      var engineTime = (lastTime + now - startTime) * anime.speed;
      setInstanceProgress(engineTime);
    };

    instance.seek = function (time) {
      setInstanceProgress(adjustTime(time));
    };

    instance.pause = function () {
      var i = activeInstances.indexOf(instance);
      if (i > -1) activeInstances.splice(i, 1);
      instance.paused = true;
    };

    instance.play = function () {
      if (!instance.paused) return;
      instance.paused = false;
      startTime = 0;
      lastTime = adjustTime(instance.currentTime);
      activeInstances.push(instance);
      if (!raf) engine();
    };

    instance.reverse = function () {
      toggleInstanceDirection();
      startTime = 0;
      lastTime = adjustTime(instance.currentTime);
    };

    instance.restart = function () {
      instance.pause();
      instance.reset();
      instance.play();
    };

    instance.finished = promise;

    instance.reset();

    if (instance.autoplay) instance.play();

    return instance;
  }

  // Remove targets from animation

  function removeTargets(targets) {
    var targetsArray = parseTargets(targets);
    for (var i = activeInstances.length; i--;) {
      var instance = activeInstances[i];
      var animations = instance.animations;
      for (var a = animations.length; a--;) {
        if (arrayContains(targetsArray, animations[a].animatable.target)) {
          animations.splice(a, 1);
          if (!animations.length) instance.pause();
        }
      }
    }
  }

  // Timeline

  function timeline(params) {
    var tl = anime(params);
    tl.pause();
    tl.duration = 0;
    tl.add = function (instancesParams) {
      tl.children.forEach(function (i) {
        i.began = true;i.completed = true;
      });
      toArray(instancesParams).forEach(function (instanceParams) {
        var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params || {}));
        insParams.targets = insParams.targets || params.targets;
        var tlDuration = tl.duration;
        var insOffset = insParams.offset;
        insParams.autoplay = false;
        insParams.offset = is.und(insOffset) ? tlDuration : getRelativeValue(insOffset, tlDuration);
        tl.began = true;
        tl.completed = true;
        tl.seek(insParams.offset);
        var ins = anime(insParams);
        ins.began = true;
        ins.completed = true;
        if (ins.duration > tlDuration) tl.duration = ins.duration;
        tl.children.push(ins);
      });
      tl.seek(0);
      tl.reset();
      if (tl.autoplay) tl.restart();
      return tl;
    };
    return tl;
  }

  anime.version = '2.1.0';
  anime.speed = 1;
  anime.running = activeInstances;
  anime.remove = removeTargets;
  anime.getValue = getOriginalTargetValue;
  anime.path = getPath;
  anime.setDashoffset = setDashoffset;
  anime.bezier = bezier;
  anime.easings = easings;
  anime.timeline = timeline;
  anime.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return anime;
});

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map