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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "E1C8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("JcFu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_timer__ = __webpack_require__("lEIB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_animate__ = __webpack_require__("vBoo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_animate__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var renderParticule = function renderParticule() {
	var canvasEl = document.querySelector('#bgCanvas');
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
		var angle = __WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(0, 360) * Math.PI / 180;
		var value = __WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(50, 180);
		var radius = [-1, 1][__WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(0, 1)] * value;
		return {
			x: p.x + radius * Math.cos(angle),
			y: p.y + radius * Math.sin(angle)
		};
	}

	function createParticule(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.color = colors[__WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(0, colors.length - 1)];
		p.radius = __WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(16, 32);
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
		__WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.timeline().add({
			targets: particules,
			x: function x(p) {
				return p.endPos.x;
			},
			y: function y(p) {
				return p.endPos.y;
			},
			radius: 0.1,
			duration: __WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(1200, 1800),
			easing: 'easeOutExpo',
			update: renderParticule
		}).add({
			targets: circle,
			radius: __WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(80, 160),
			lineWidth: 0,
			alpha: {
				value: 0,
				easing: 'linear',
				duration: __WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(600, 800)
			},
			duration: __WEBPACK_IMPORTED_MODULE_2__utils_animate___default.a.random(1200, 1800),
			easing: 'easeOutExpo',
			update: renderParticule,
			offset: 0
		});
	}

	var render = __WEBPACK_IMPORTED_MODULE_2__utils_animate___default()({
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

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ className: 'container' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('canvas', { id: 'bgCanvas' }),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		{ className: 'item' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: 'heart heartbeat' }),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__components_timer__["a" /* default */], null),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ className: 'copyright' },
			'\u51B7\u54E5\u54E5 & \u738B\u5F2F\u5F2F ',
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'span',
				{ className: 'desc' },
				' \u957F\u8DD1\uFF0C\u4E00\u76F4\u4FDD\u6301\u5FC3\u8DF3\u2026\u2026'
			)
		)
	)
);

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Home.prototype.componentDidMount = function componentDidMount() {
		renderParticule();
	};

	Home.prototype.render = function render() {
		return _ref;
	};

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "JcFu":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__("rq4c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_app__ = __webpack_require__("qLaj");



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__components_app__["a" /* default */]);

/***/ }),

/***/ "Tv6c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"profile":"profile__t2Dqz"};

/***/ }),

/***/ "V03K":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fZlY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("JcFu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	if (opts === void 0) opts = EMPTY$1;

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
	var aAttr = a.attributes || EMPTY$1,
	    bAttr = b.attributes || EMPTY$1;
	if (aAttr.default) {
		return 1;
	}
	if (bAttr.default) {
		return -1;
	}
	var diff = rank(aAttr.path) - rank(bAttr.path);
	return diff || aAttr.path.length - bAttr.path.length;
}

function segmentize(url) {
	return strip(url).split('/');
}

function rank(url) {
	return (strip(url).match(/\/+/g) || '').length;
}

function strip(url) {
	return url.replace(/(^\/+|\/+$)/g, '');
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
				return routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
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
		return children.slice().sort(pathRankSort).map(function (vnode) {
			var attrs = vnode.attributes || {},
			    path = attrs.path,
			    matches = exec(url, path, attrs);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
			return false;
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
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["default"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ "gNuw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("JcFu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("Tv6c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Profile = function (_Component) {
	_inherits(Profile, _Component);

	function Profile() {
		var _temp, _this, _ret;

		_classCallCheck(this, Profile);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			time: Date.now(),
			count: 10
		}, _this.updateTime = function () {
			_this.setState({ time: Date.now() });
		}, _this.increment = function () {
			_this.setState({ count: _this.state.count + 1 });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// gets called when this route is navigated to
	Profile.prototype.componentDidMount = function componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	};

	// gets called just before navigating away from the route


	Profile.prototype.componentWillUnmount = function componentWillUnmount() {
		clearInterval(this.timer);
	};

	// update the current time


	// Note: `user` comes from the URL, courtesy of our router
	Profile.prototype.render = function render(_ref, _ref2) {
		var user = _ref.user;
		var time = _ref2.time,
		    count = _ref2.count;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.profile },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'h1',
				null,
				'Profile: ',
				user
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'p',
				null,
				'This is the user profile for a user named ',
				user,
				'.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				'Current time: ',
				new Date(time).toLocaleString()
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'p',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'button',
					{ onClick: this.increment },
					'Click Me'
				),
				' ',
				'Clicked ',
				count,
				' times.'
			)
		);
	};

	return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "hH6L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Link = exports.Match = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _preact = __webpack_require__("JcFu");

var _preactRouter = __webpack_require__("fZlY");

function _objectWithoutProperties(obj, keys) {
	var target = {};for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	}return target;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Match = exports.Match = function (_Component) {
	_inherits(Match, _Component);

	function Match() {
		var _temp, _this, _ret;

		_classCallCheck(this, Match);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
			_this.nextUrl = url;
			_this.setState({});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Match.prototype.componentDidMount = function componentDidMount() {
		_preactRouter.subscribers.push(this.update);
	};

	Match.prototype.componentWillUnmount = function componentWillUnmount() {
		_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
	};

	Match.prototype.render = function render(props) {
		var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
		    path = url.replace(/\?.+$/, '');
		this.nextUrl = null;
		return props.children[0] && props.children[0]({
			url: url,
			path: path,
			matches: path === props.path
		});
	};

	return Match;
}(_preact.Component);

var Link = function Link(_ref) {
	var activeClassName = _ref.activeClassName,
	    path = _ref.path,
	    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

	return (0, _preact.h)(Match, { path: path || props.href }, function (_ref2) {
		var matches = _ref2.matches;
		return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
	});
};

exports.Link = Link;
exports.default = Match;

Match.Link = Link;

/***/ }),

/***/ "lEIB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("JcFu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_time__ = __webpack_require__("nEss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_time___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_time__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("V03K");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Timer = function (_Component) {
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

    var dist = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_time__["timeMinus"])(baseTime);
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

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'timer' },
      dist.years,
      ' \u5E74 ',
      dist.months,
      ' \u6708 ',
      dist.days,
      ' \u65E5 ',
      dist.hours,
      ' \u65F6 ',
      dist.minutes,
      ' \u5206 ',
      dist.seconds,
      ' \u79D2'
    );
  };

  return Timer;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

Timer.defaultProps = {
  // 颜色渐变列表
  baseTime: new Date('2015-9-19 22:00:00').valueOf()
};
/* harmony default export */ __webpack_exports__["a"] = (Timer);

/***/ }),

/***/ "nEss":
/***/ (function(module, exports) {

function getDaysInMonth(month) {
  var data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return data[month];
}

/**
 * 时间减法，参考借位减法
 * 
 * @param {Date} date 传入时间（过去）
 * @return {Object} 时间差
 */
function timeMinus(date, current) {
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
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return {
    years: years,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    passed: passed
  };
}

exports.timeMinus = timeMinus;

/***/ }),

/***/ "qLaj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("JcFu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("fZlY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__("sIAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_home__ = __webpack_require__("E1C8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_profile__ = __webpack_require__("gNuw");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// import Home from 'async!./home';
// import Profile from 'async!./profile';

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__routes_home__["a" /* default */], { path: '/' });

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__routes_profile__["a" /* default */], { path: '/profile/', user: 'me' });

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__routes_profile__["a" /* default */], { path: '/profile/:user' });

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
			_this.currentUrl = e.url;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}
	/** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */


	App.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ id: 'app' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_router__["Router"],
				{ onChange: this.handleRoute },
				_ref,
				_ref2,
				_ref3
			)
		);
	};

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sIAo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("JcFu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router_match__ = __webpack_require__("hH6L");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("u3et");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h1',
	null,
	'Preact App'
);

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Header.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'header',
			{ 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.header },
			_ref,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'nav',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_router_match__["Link"],
					{ activeClassName: __WEBPACK_IMPORTED_MODULE_2__style___default.a.active, href: '/' },
					'Home'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_router_match__["Link"],
					{ activeClassName: __WEBPACK_IMPORTED_MODULE_2__style___default.a.active, href: '/profile' },
					'Me'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_router_match__["Link"],
					{ activeClassName: __WEBPACK_IMPORTED_MODULE_2__style___default.a.active, href: '/profile/john' },
					'John'
				)
			)
		);
	};

	return Header;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "u3et":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__3QGkI","active":"active__3gItZ"};

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