! function(e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "./", i(i.s = 147)
}([function(e, t, i) {
    var n = i(3),
        r = i(41),
        o = i(5),
        s = i(42),
        a = i(46),
        c = i(67),
        l = r("wks"),
        h = n.Symbol,
        u = c ? h : h && h.withoutSetter || s;
    e.exports = function(e) {
        return o(l, e) || (a && o(h, e) ? l[e] = h[e] : l[e] = u("Symbol." + e)), l[e]
    }
}, function(e, t, i) {
    var n = i(3),
        r = i(16).f,
        o = i(11),
        s = i(13),
        a = i(40),
        c = i(60),
        l = i(66);
    e.exports = function(e, t) {
        var i, h, u, d, g, f = e.target,
            p = e.global,
            m = e.stat;
        if (i = p ? n : m ? n[f] || a(f, {}) : (n[f] || {}).prototype)
            for (h in t) {
                if (d = t[h], u = e.noTargetGet ? (g = r(i, h)) && g.value : i[h], !l(p ? h : f + (m ? "." : "#") + h, e.forced) && void 0 !== u) {
                    if (typeof d == typeof u) continue;
                    c(d, u)
                }(e.sham || u && u.sham) && o(d, "sham", !0), s(i, h, d, e)
            }
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, i) {
    (function(t) {
        var i = function(e) {
            return e && e.Math == Math && e
        };
        e.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || Function("return this")()
    }).call(this, i(90))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    var i = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return i.call(e, t)
    }
}, function(e, t, i) {
    var n = i(2);
    e.exports = !n((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }))
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, i) {
    var n = i(6),
        r = i(56),
        o = i(9),
        s = i(20),
        a = Object.defineProperty;
    t.f = n ? a : function(e, t, i) {
        if (o(e), t = s(t, !0), o(i), r) try {
            return a(e, t, i)
        } catch (e) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
        return "value" in i && (e[t] = i.value), e
    }
}, function(e, t, i) {
    var n = i(7);
    e.exports = function(e) {
        if (!n(e)) throw TypeError(String(e) + " is not an object");
        return e
    }
}, function(e, t, i) {
    var n = i(24),
        r = i(18);
    e.exports = function(e) {
        return n(r(e))
    }
}, function(e, t, i) {
    var n = i(6),
        r = i(8),
        o = i(19);
    e.exports = n ? function(e, t, i) {
        return r.f(e, t, o(1, i))
    } : function(e, t, i) {
        return e[t] = i, e
    }
}, function(e, t, i) {
    var n = i(6),
        r = i(2),
        o = i(5),
        s = Object.defineProperty,
        a = {},
        c = function(e) {
            throw e
        };
    e.exports = function(e, t) {
        if (o(a, e)) return a[e];
        t || (t = {});
        var i = [][e],
            l = !!o(t, "ACCESSORS") && t.ACCESSORS,
            h = o(t, 0) ? t[0] : c,
            u = o(t, 1) ? t[1] : void 0;
        return a[e] = !!i && !r((function() {
            if (l && !n) return !0;
            var e = {
                length: -1
            };
            l ? s(e, 1, {
                enumerable: !0,
                get: c
            }) : e[1] = 1, i.call(e, h, u)
        }))
    }
}, function(e, t, i) {
    var n = i(3),
        r = i(11),
        o = i(5),
        s = i(40),
        a = i(58),
        c = i(25),
        l = c.get,
        h = c.enforce,
        u = String(String).split("String");
    (e.exports = function(e, t, i, a) {
        var c = !!a && !!a.unsafe,
            l = !!a && !!a.enumerable,
            d = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof t || o(i, "name") || r(i, "name", t), h(i).source = u.join("string" == typeof t ? t : "")), e !== n ? (c ? !d && e[t] && (l = !0) : delete e[t], l ? e[t] = i : r(e, t, i)) : l ? e[t] = i : s(t, i)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && l(this).source || a(this)
    }))
}, function(e, t, i) {
    var n = i(44),
        r = Math.min;
    e.exports = function(e) {
        return e > 0 ? r(n(e), 9007199254740991) : 0
    }
}, function(e, t, i) {
    var n = i(18);
    e.exports = function(e) {
        return Object(n(e))
    }
}, function(e, t, i) {
    var n = i(6),
        r = i(55),
        o = i(19),
        s = i(10),
        a = i(20),
        c = i(5),
        l = i(56),
        h = Object.getOwnPropertyDescriptor;
    t.f = n ? h : function(e, t) {
        if (e = s(e), t = a(t, !0), l) try {
            return h(e, t)
        } catch (e) {}
        if (c(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function(e, t) {
    var i = {}.toString;
    e.exports = function(e) {
        return i.call(e).slice(8, -1)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, i) {
    var n = i(7);
    e.exports = function(e, t) {
        if (!n(e)) return e;
        var i, r;
        if (t && "function" == typeof(i = e.toString) && !n(r = i.call(e))) return r;
        if ("function" == typeof(i = e.valueOf) && !n(r = i.call(e))) return r;
        if (!t && "function" == typeof(i = e.toString) && !n(r = i.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, i) {
    var n = i(70),
        r = i(24),
        o = i(15),
        s = i(14),
        a = i(71),
        c = [].push,
        l = function(e) {
            var t = 1 == e,
                i = 2 == e,
                l = 3 == e,
                h = 4 == e,
                u = 6 == e,
                d = 5 == e || u;
            return function(g, f, p, m) {
                for (var v, w, b = o(g), y = r(b), C = n(f, p, 3), S = s(y.length), k = 0, x = m || a, $ = t ? x(g, S) : i ? x(g, 0) : void 0; S > k; k++)
                    if ((d || k in y) && (w = C(v = y[k], k, b), e))
                        if (t) $[k] = w;
                        else if (w) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return k;
                    case 2:
                        c.call($, v)
                } else if (h) return !1;
                return u ? -1 : l || h ? h : $
            }
        };
    e.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6)
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t, i) {
    (function(e) {
        (function() {
            var e = function() {
                return this
            }();
            !e && "undefined" != typeof window && (e = window);
            var t = function(e, i, n) {
                "string" == typeof e ? (2 == arguments.length && (n = i), t.modules[e] || (t.payloads[e] = n, t.modules[e] = null)) : t.original ? t.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace())
            };
            t.modules = {}, t.payloads = {};
            var i = function(e, t, i) {
                    if ("string" == typeof t) {
                        var r = o(e, t);
                        if (null != r) return i && i(), r
                    } else if ("[object Array]" === Object.prototype.toString.call(t)) {
                        for (var s = [], a = 0, c = t.length; a < c; ++a) {
                            var l = o(e, t[a]);
                            if (null == l && n.original) return;
                            s.push(l)
                        }
                        return i && i.apply(null, s) || !0
                    }
                },
                n = function(e, t) {
                    var r = i("", e, t);
                    return null == r && n.original ? n.original.apply(this, arguments) : r
                },
                r = function(e, t) {
                    if (-1 !== t.indexOf("!")) {
                        var i = t.split("!");
                        return r(e, i[0]) + "!" + r(e, i[1])
                    }
                    if ("." == t.charAt(0))
                        for (t = e.split("/").slice(0, -1).join("/") + "/" + t; - 1 !== t.indexOf(".") && n != t;) {
                            var n = t;
                            t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
                        }
                    return t
                },
                o = function(e, n) {
                    n = r(e, n);
                    var o = t.modules[n];
                    if (!o) {
                        if ("function" == typeof(o = t.payloads[n])) {
                            var s = {},
                                a = {
                                    id: n,
                                    uri: "",
                                    exports: s,
                                    packaged: !0
                                };
                            s = o((function(e, t) {
                                return i(n, e, t)
                            }), s, a) || a.exports, t.modules[n] = s, delete t.payloads[n]
                        }
                        o = t.modules[n] = s || o
                    }
                    return o
                };
            ! function(i) {
                var r = e;
                i && (e[i] || (e[i] = {}), r = e[i]), r.define && r.define.packaged || (t.original = r.define, r.define = t, r.define.packaged = !0), r.require && r.require.packaged || (n.original = r.require, r.require = n, r.require.packaged = !0)
            }("ace")
        })(), ace.define("ace/lib/regexp", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
            }

            function r(e, t, i) {
                if (Array.prototype.indexOf) return e.indexOf(t, i);
                for (var n = i || 0; n < e.length; n++)
                    if (e[n] === t) return n;
                return -1
            }
            var o = {
                    exec: RegExp.prototype.exec,
                    test: RegExp.prototype.test,
                    match: String.prototype.match,
                    replace: String.prototype.replace,
                    split: String.prototype.split
                },
                s = void 0 === o.exec.call(/()??/, "")[1],
                a = function() {
                    var e = /^/g;
                    return o.test.call(e, ""), !e.lastIndex
                }();
            a && s || (RegExp.prototype.exec = function(e) {
                var t, i, c = o.exec.apply(this, arguments);
                if ("string" == typeof e && c) {
                    if (!s && c.length > 1 && r(c, "") > -1 && (i = RegExp(this.source, o.replace.call(n(this), "g", "")), o.replace.call(e.slice(c.index), i, (function() {
                            for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (c[e] = void 0)
                        }))), this._xregexp && this._xregexp.captureNames)
                        for (var l = 1; l < c.length; l++)(t = this._xregexp.captureNames[l - 1]) && (c[t] = c[l]);
                    !a && this.global && !c[0].length && this.lastIndex > c.index && this.lastIndex--
                }
                return c
            }, a || (RegExp.prototype.test = function(e) {
                var t = o.exec.call(this, e);
                return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t
            }))
        })), ace.define("ace/lib/es5-shim", [], (function(e, t, i) {
            function n() {}

            function r(e) {
                try {
                    return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
                } catch (e) {}
            }

            function o(e) {
                return (e = +e) != e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
            }
            Function.prototype.bind || (Function.prototype.bind = function(e) {
                var t = this;
                if ("function" != typeof t) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                var i = f.call(arguments, 1),
                    r = function() {
                        if (this instanceof r) {
                            var n = t.apply(this, i.concat(f.call(arguments)));
                            return Object(n) === n ? n : this
                        }
                        return t.apply(e, i.concat(f.call(arguments)))
                    };
                return t.prototype && (n.prototype = t.prototype, r.prototype = new n, n.prototype = null), r
            });
            var s, a, c, l, h, u = Function.prototype.call,
                d = Array.prototype,
                g = Object.prototype,
                f = d.slice,
                p = u.bind(g.toString),
                m = u.bind(g.hasOwnProperty);
            if ((h = m(g, "__defineGetter__")) && (s = u.bind(g.__defineGetter__), a = u.bind(g.__defineSetter__), c = u.bind(g.__lookupGetter__), l = u.bind(g.__lookupSetter__)), 2 != [1, 2].splice(0).length)
                if (function() {
                        function e(e) {
                            var t = new Array(e + 2);
                            return t[0] = t[1] = 0, t
                        }
                        var t, i = [];
                        if (i.splice.apply(i, e(20)), i.splice.apply(i, e(26)), t = i.length, i.splice(5, 0, "XXX"), i.length, t + 1 == i.length) return !0
                    }()) {
                    var v = Array.prototype.splice;
                    Array.prototype.splice = function(e, t) {
                        return arguments.length ? v.apply(this, [void 0 === e ? 0 : e, void 0 === t ? this.length - e : t].concat(f.call(arguments, 2))) : []
                    }
                } else Array.prototype.splice = function(e, t) {
                    var i = this.length;
                    e > 0 ? e > i && (e = i) : null == e ? e = 0 : e < 0 && (e = Math.max(i + e, 0)), e + t < i || (t = i - e);
                    var n = this.slice(e, e + t),
                        r = f.call(arguments, 2),
                        o = r.length;
                    if (e === i) o && this.push.apply(this, r);
                    else {
                        var s = Math.min(t, i - e),
                            a = e + s,
                            c = a + o - s,
                            l = i - a,
                            h = i - s;
                        if (c < a)
                            for (var u = 0; u < l; ++u) this[c + u] = this[a + u];
                        else if (c > a)
                            for (u = l; u--;) this[c + u] = this[a + u];
                        if (o && e === h) this.length = h, this.push.apply(this, r);
                        else
                            for (this.length = h + o, u = 0; u < o; ++u) this[e + u] = r[u]
                    }
                    return n
                };
            Array.isArray || (Array.isArray = function(e) {
                return "[object Array]" == p(e)
            });
            var w, b = Object("a"),
                y = "a" != b[0] || !(0 in b);
            if (Array.prototype.forEach || (Array.prototype.forEach = function(e) {
                    var t = T(this),
                        i = y && "[object String]" == p(this) ? this.split("") : t,
                        n = arguments[1],
                        r = -1,
                        o = i.length >>> 0;
                    if ("[object Function]" != p(e)) throw new TypeError;
                    for (; ++r < o;) r in i && e.call(n, i[r], r, t)
                }), Array.prototype.map || (Array.prototype.map = function(e) {
                    var t = T(this),
                        i = y && "[object String]" == p(this) ? this.split("") : t,
                        n = i.length >>> 0,
                        r = Array(n),
                        o = arguments[1];
                    if ("[object Function]" != p(e)) throw new TypeError(e + " is not a function");
                    for (var s = 0; s < n; s++) s in i && (r[s] = e.call(o, i[s], s, t));
                    return r
                }), Array.prototype.filter || (Array.prototype.filter = function(e) {
                    var t, i = T(this),
                        n = y && "[object String]" == p(this) ? this.split("") : i,
                        r = n.length >>> 0,
                        o = [],
                        s = arguments[1];
                    if ("[object Function]" != p(e)) throw new TypeError(e + " is not a function");
                    for (var a = 0; a < r; a++) a in n && (t = n[a], e.call(s, t, a, i) && o.push(t));
                    return o
                }), Array.prototype.every || (Array.prototype.every = function(e) {
                    var t = T(this),
                        i = y && "[object String]" == p(this) ? this.split("") : t,
                        n = i.length >>> 0,
                        r = arguments[1];
                    if ("[object Function]" != p(e)) throw new TypeError(e + " is not a function");
                    for (var o = 0; o < n; o++)
                        if (o in i && !e.call(r, i[o], o, t)) return !1;
                    return !0
                }), Array.prototype.some || (Array.prototype.some = function(e) {
                    var t = T(this),
                        i = y && "[object String]" == p(this) ? this.split("") : t,
                        n = i.length >>> 0,
                        r = arguments[1];
                    if ("[object Function]" != p(e)) throw new TypeError(e + " is not a function");
                    for (var o = 0; o < n; o++)
                        if (o in i && e.call(r, i[o], o, t)) return !0;
                    return !1
                }), Array.prototype.reduce || (Array.prototype.reduce = function(e) {
                    var t = T(this),
                        i = y && "[object String]" == p(this) ? this.split("") : t,
                        n = i.length >>> 0;
                    if ("[object Function]" != p(e)) throw new TypeError(e + " is not a function");
                    if (!n && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
                    var r, o = 0;
                    if (arguments.length >= 2) r = arguments[1];
                    else
                        for (;;) {
                            if (o in i) {
                                r = i[o++];
                                break
                            }
                            if (++o >= n) throw new TypeError("reduce of empty array with no initial value")
                        }
                    for (; o < n; o++) o in i && (r = e.call(void 0, r, i[o], o, t));
                    return r
                }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(e) {
                    var t = T(this),
                        i = y && "[object String]" == p(this) ? this.split("") : t,
                        n = i.length >>> 0;
                    if ("[object Function]" != p(e)) throw new TypeError(e + " is not a function");
                    if (!n && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                    var r, o = n - 1;
                    if (arguments.length >= 2) r = arguments[1];
                    else
                        for (;;) {
                            if (o in i) {
                                r = i[o--];
                                break
                            }
                            if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value")
                        }
                    do {
                        o in this && (r = e.call(void 0, r, i[o], o, t))
                    } while (o--);
                    return r
                }), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function(e) {
                    var t = y && "[object String]" == p(this) ? this.split("") : T(this),
                        i = t.length >>> 0;
                    if (!i) return -1;
                    var n = 0;
                    for (arguments.length > 1 && (n = o(arguments[1])), n = n >= 0 ? n : Math.max(0, i + n); n < i; n++)
                        if (n in t && t[n] === e) return n;
                    return -1
                }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function(e) {
                    var t = y && "[object String]" == p(this) ? this.split("") : T(this),
                        i = t.length >>> 0;
                    if (!i) return -1;
                    var n = i - 1;
                    for (arguments.length > 1 && (n = Math.min(n, o(arguments[1]))), n = n >= 0 ? n : i - Math.abs(n); n >= 0; n--)
                        if (n in t && e === t[n]) return n;
                    return -1
                }), Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
                    return e.__proto__ || (e.constructor ? e.constructor.prototype : g)
                }), !Object.getOwnPropertyDescriptor) {
                Object.getOwnPropertyDescriptor = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + e);
                    if (m(e, t)) {
                        var i;
                        if (i = {
                                enumerable: !0,
                                configurable: !0
                            }, h) {
                            var n = e.__proto__;
                            e.__proto__ = g;
                            var r = c(e, t),
                                o = l(e, t);
                            if (e.__proto__ = n, r || o) return r && (i.get = r), o && (i.set = o), i
                        }
                        return i.value = e[t], i
                    }
                }
            }(Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
                return Object.keys(e)
            }), Object.create) || (w = null === Object.prototype.__proto__ ? function() {
                return {
                    __proto__: null
                }
            } : function() {
                var e = {};
                for (var t in e) e[t] = null;
                return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e
            }, Object.create = function(e, t) {
                var i;
                if (null === e) i = w();
                else {
                    if ("object" != typeof e) throw new TypeError("typeof prototype[" + typeof e + "] != 'object'");
                    var n = function() {};
                    n.prototype = e, (i = new n).__proto__ = e
                }
                return void 0 !== t && Object.defineProperties(i, t), i
            });
            if (Object.defineProperty) {
                var C = r({}),
                    S = "undefined" == typeof document || r(document.createElement("div"));
                if (!C || !S) var k = Object.defineProperty
            }
            if (!Object.defineProperty || k) {
                Object.defineProperty = function(e, t, i) {
                    if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.defineProperty called on non-object: " + e);
                    if ("object" != typeof i && "function" != typeof i || null === i) throw new TypeError("Property description must be an object: " + i);
                    if (k) try {
                        return k.call(Object, e, t, i)
                    } catch (e) {}
                    if (m(i, "value"))
                        if (h && (c(e, t) || l(e, t))) {
                            var n = e.__proto__;
                            e.__proto__ = g, delete e[t], e[t] = i.value, e.__proto__ = n
                        } else e[t] = i.value;
                    else {
                        if (!h) throw new TypeError("getters & setters can not be defined on this javascript engine");
                        m(i, "get") && s(e, t, i.get), m(i, "set") && a(e, t, i.set)
                    }
                    return e
                }
            }
            Object.defineProperties || (Object.defineProperties = function(e, t) {
                for (var i in t) m(t, i) && Object.defineProperty(e, i, t[i]);
                return e
            }), Object.seal || (Object.seal = function(e) {
                return e
            }), Object.freeze || (Object.freeze = function(e) {
                return e
            });
            try {
                Object.freeze((function() {}))
            } catch (e) {
                Object.freeze = function(e) {
                    return function(t) {
                        return "function" == typeof t ? t : e(t)
                    }
                }(Object.freeze)
            }
            if (Object.preventExtensions || (Object.preventExtensions = function(e) {
                    return e
                }), Object.isSealed || (Object.isSealed = function(e) {
                    return !1
                }), Object.isFrozen || (Object.isFrozen = function(e) {
                    return !1
                }), Object.isExtensible || (Object.isExtensible = function(e) {
                    if (Object(e) === e) throw new TypeError;
                    for (var t = ""; m(e, t);) t += "?";
                    e[t] = !0;
                    var i = m(e, t);
                    return delete e[t], i
                }), !Object.keys) {
                var x = !0,
                    $ = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    A = $.length;
                for (var E in {
                        toString: null
                    }) x = !1;
                Object.keys = function(e) {
                    if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.keys called on a non-object");
                    var t = [];
                    for (var i in e) m(e, i) && t.push(i);
                    if (x)
                        for (var n = 0, r = A; n < r; n++) {
                            var o = $[n];
                            m(e, o) && t.push(o)
                        }
                    return t
                }
            }
            Date.now || (Date.now = function() {
                return (new Date).getTime()
            });
            var L = "\t\n\v\f\r                　\u2028\u2029\ufeff";
            if (!String.prototype.trim) {
                L = "[" + L + "]";
                var R = new RegExp("^" + L + L + "*"),
                    _ = new RegExp(L + L + "*$");
                String.prototype.trim = function() {
                    return String(this).replace(R, "").replace(_, "")
                }
            }
            var T = function(e) {
                if (null == e) throw new TypeError("can't convert " + e + " to object");
                return Object(e)
            }
        })), ace.define("ace/lib/fixoldbrowsers", [], (function(e, t, i) {
            "use strict";
            e("./regexp"), e("./es5-shim"), "undefined" != typeof Element && !Element.prototype.remove && Object.defineProperty(Element.prototype, "remove", {
                enumerable: !1,
                writable: !0,
                configurable: !0,
                value: function() {
                    this.parentNode && this.parentNode.removeChild(this)
                }
            })
        })), ace.define("ace/lib/useragent", [], (function(e, t, i) {
            "use strict";
            t.OS = {
                LINUX: "LINUX",
                MAC: "MAC",
                WINDOWS: "WINDOWS"
            }, t.getOS = function() {
                return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
            };
            var n = "object" == typeof navigator ? navigator : {},
                r = (/mac|win|linux/i.exec(n.platform) || ["other"])[0].toLowerCase(),
                o = n.userAgent || "",
                s = n.appName || "";
            t.isWin = "win" == r, t.isMac = "mac" == r, t.isLinux = "linux" == r, t.isIE = "Microsoft Internet Explorer" == s || s.indexOf("MSAppHost") >= 0 ? parseFloat((o.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((o.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = o.match(/ Gecko\/\d+/), t.isOpera = "object" == typeof opera && "[object Opera]" == Object.prototype.toString.call(window.opera), t.isWebKit = parseFloat(o.split("WebKit/")[1]) || void 0, t.isChrome = parseFloat(o.split(" Chrome/")[1]) || void 0, t.isEdge = parseFloat(o.split(" Edge/")[1]) || void 0, t.isAIR = o.indexOf("AdobeAIR") >= 0, t.isAndroid = o.indexOf("Android") >= 0, t.isChromeOS = o.indexOf(" CrOS ") >= 0, t.isIOS = /iPad|iPhone|iPod/.test(o) && !window.MSStream, t.isIOS && (t.isMac = !0), t.isMobile = t.isIOS || t.isAndroid
        })), ace.define("ace/lib/dom", [], (function(e, t, i) {
            "use strict";
            var n = e("./useragent");
            if (t.buildDom = function e(t, i, n) {
                    if ("string" == typeof t && t) {
                        var r = document.createTextNode(t);
                        return i && i.appendChild(r), r
                    }
                    if (!Array.isArray(t)) return t;
                    if ("string" != typeof t[0] || !t[0]) {
                        for (var o = [], s = 0; s < t.length; s++) {
                            var a = e(t[s], i, n);
                            a && o.push(a)
                        }
                        return o
                    }
                    var c = document.createElement(t[0]),
                        l = t[1],
                        h = 1;
                    l && "object" == typeof l && !Array.isArray(l) && (h = 2);
                    for (s = h; s < t.length; s++) e(t[s], c, n);
                    return 2 == h && Object.keys(l).forEach((function(e) {
                        var t = l[e];
                        "class" === e ? c.className = Array.isArray(t) ? t.join(" ") : t : "function" == typeof t || "value" == e ? c[e] = t : "ref" === e ? n && (n[t] = c) : null != t && c.setAttribute(e, t)
                    })), i && i.appendChild(c), c
                }, t.getDocumentHead = function(e) {
                    return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement
                }, t.createElement = function(e, t) {
                    return document.createElementNS ? document.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : document.createElement(e)
                }, t.removeChildren = function(e) {
                    e.innerHTML = ""
                }, t.createTextNode = function(e, t) {
                    return (t ? t.ownerDocument : document).createTextNode(e)
                }, t.createFragment = function(e) {
                    return (e ? e.ownerDocument : document).createDocumentFragment()
                }, t.hasCssClass = function(e, t) {
                    return -1 !== (e.className + "").split(/\s+/g).indexOf(t)
                }, t.addCssClass = function(e, i) {
                    t.hasCssClass(e, i) || (e.className += " " + i)
                }, t.removeCssClass = function(e, t) {
                    for (var i = e.className.split(/\s+/g);;) {
                        var n = i.indexOf(t);
                        if (-1 == n) break;
                        i.splice(n, 1)
                    }
                    e.className = i.join(" ")
                }, t.toggleCssClass = function(e, t) {
                    for (var i = e.className.split(/\s+/g), n = !0;;) {
                        var r = i.indexOf(t);
                        if (-1 == r) break;
                        n = !1, i.splice(r, 1)
                    }
                    return n && i.push(t), e.className = i.join(" "), n
                }, t.setCssClass = function(e, i, n) {
                    n ? t.addCssClass(e, i) : t.removeCssClass(e, i)
                }, t.hasCssString = function(e, t) {
                    var i, n = 0;
                    if (i = (t = t || document).querySelectorAll("style"))
                        for (; n < i.length;)
                            if (i[n++].id === e) return !0
                }, t.importCssString = function(e, i, n) {
                    var r = n;
                    n && n.getRootNode && (r = n.getRootNode()) && r != n || (r = document);
                    var o = r.ownerDocument || r;
                    if (i && t.hasCssString(i, r)) return null;
                    i && (e += "\n/*# sourceURL=ace/css/" + i + " */");
                    var s = t.createElement("style");
                    s.appendChild(o.createTextNode(e)), i && (s.id = i), r == o && (r = t.getDocumentHead(o)), r.insertBefore(s, r.firstChild)
                }, t.importCssStylsheet = function(e, i) {
                    t.buildDom(["link", {
                        rel: "stylesheet",
                        href: e
                    }], t.getDocumentHead(i))
                }, t.scrollbarWidth = function(e) {
                    var i = t.createElement("ace_inner");
                    i.style.width = "100%", i.style.minWidth = "0px", i.style.height = "200px", i.style.display = "block";
                    var n = t.createElement("ace_outer"),
                        r = n.style;
                    r.position = "absolute", r.left = "-10000px", r.overflow = "hidden", r.width = "200px", r.minWidth = "0px", r.height = "150px", r.display = "block", n.appendChild(i);
                    var o = e.documentElement;
                    o.appendChild(n);
                    var s = i.offsetWidth;
                    r.overflow = "scroll";
                    var a = i.offsetWidth;
                    return s == a && (a = n.clientWidth), o.removeChild(n), s - a
                }, "undefined" == typeof document && (t.importCssString = function() {}), t.computedStyle = function(e, t) {
                    return window.getComputedStyle(e, "") || {}
                }, t.setStyle = function(e, t, i) {
                    e[t] !== i && (e[t] = i)
                }, t.HAS_CSS_ANIMATION = !1, t.HAS_CSS_TRANSFORMS = !1, t.HI_DPI = !n.isWin || "undefined" != typeof window && window.devicePixelRatio >= 1.5, "undefined" != typeof document) {
                var r = document.createElement("div");
                t.HI_DPI && void 0 !== r.style.transform && (t.HAS_CSS_TRANSFORMS = !0), !n.isEdge && void 0 !== r.style.animationName && (t.HAS_CSS_ANIMATION = !0), r = null
            }
            t.HAS_CSS_TRANSFORMS ? t.translate = function(e, t, i) {
                e.style.transform = "translate(" + Math.round(t) + "px, " + Math.round(i) + "px)"
            } : t.translate = function(e, t, i) {
                e.style.top = Math.round(i) + "px", e.style.left = Math.round(t) + "px"
            }
        })), ace.define("ace/lib/oop", [], (function(e, t, i) {
            "use strict";
            t.inherits = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }, t.mixin = function(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            }, t.implement = function(e, i) {
                t.mixin(e, i)
            }
        })), ace.define("ace/lib/keys", [], (function(e, t, i) {
            "use strict";
            var n = e("./oop"),
                r = function() {
                    var e, t, i = {
                        MODIFIER_KEYS: {
                            16: "Shift",
                            17: "Ctrl",
                            18: "Alt",
                            224: "Meta",
                            91: "MetaLeft",
                            92: "MetaRight",
                            93: "ContextMenu"
                        },
                        KEY_MODS: {
                            ctrl: 1,
                            alt: 2,
                            option: 2,
                            shift: 4,
                            super: 8,
                            meta: 8,
                            command: 8,
                            cmd: 8,
                            control: 1
                        },
                        FUNCTION_KEYS: {
                            8: "Backspace",
                            9: "Tab",
                            13: "Return",
                            19: "Pause",
                            27: "Esc",
                            32: "Space",
                            33: "PageUp",
                            34: "PageDown",
                            35: "End",
                            36: "Home",
                            37: "Left",
                            38: "Up",
                            39: "Right",
                            40: "Down",
                            44: "Print",
                            45: "Insert",
                            46: "Delete",
                            96: "Numpad0",
                            97: "Numpad1",
                            98: "Numpad2",
                            99: "Numpad3",
                            100: "Numpad4",
                            101: "Numpad5",
                            102: "Numpad6",
                            103: "Numpad7",
                            104: "Numpad8",
                            105: "Numpad9",
                            "-13": "NumpadEnter",
                            112: "F1",
                            113: "F2",
                            114: "F3",
                            115: "F4",
                            116: "F5",
                            117: "F6",
                            118: "F7",
                            119: "F8",
                            120: "F9",
                            121: "F10",
                            122: "F11",
                            123: "F12",
                            144: "Numlock",
                            145: "Scrolllock"
                        },
                        PRINTABLE_KEYS: {
                            32: " ",
                            48: "0",
                            49: "1",
                            50: "2",
                            51: "3",
                            52: "4",
                            53: "5",
                            54: "6",
                            55: "7",
                            56: "8",
                            57: "9",
                            59: ";",
                            61: "=",
                            65: "a",
                            66: "b",
                            67: "c",
                            68: "d",
                            69: "e",
                            70: "f",
                            71: "g",
                            72: "h",
                            73: "i",
                            74: "j",
                            75: "k",
                            76: "l",
                            77: "m",
                            78: "n",
                            79: "o",
                            80: "p",
                            81: "q",
                            82: "r",
                            83: "s",
                            84: "t",
                            85: "u",
                            86: "v",
                            87: "w",
                            88: "x",
                            89: "y",
                            90: "z",
                            107: "+",
                            109: "-",
                            110: ".",
                            186: ";",
                            187: "=",
                            188: ",",
                            189: "-",
                            190: ".",
                            191: "/",
                            192: "`",
                            219: "[",
                            220: "\\",
                            221: "]",
                            222: "'",
                            111: "/",
                            106: "*"
                        }
                    };
                    for (t in i.FUNCTION_KEYS) e = i.FUNCTION_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
                    for (t in i.PRINTABLE_KEYS) e = i.PRINTABLE_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
                    return n.mixin(i, i.MODIFIER_KEYS), n.mixin(i, i.PRINTABLE_KEYS), n.mixin(i, i.FUNCTION_KEYS), i.enter = i.return, i.escape = i.esc, i.del = i.delete, i[173] = "-",
                        function() {
                            for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e.length); t--;) i.KEY_MODS[t] = e.filter((function(e) {
                                return t & i.KEY_MODS[e]
                            })).join("-") + "-"
                        }(), i.KEY_MODS[0] = "", i.KEY_MODS[-1] = "input-", i
                }();
            n.mixin(t, r), t.keyCodeToString = function(e) {
                var t = r[e];
                return "string" != typeof t && (t = String.fromCharCode(e)), t.toLowerCase()
            }
        })), ace.define("ace/lib/event", [], (function(e, t, i) {
            "use strict";

            function n() {
                return null == s && function() {
                    s = !1;
                    try {
                        document.createComment("").addEventListener("test", (function() {}), {
                            get passive() {
                                s = {
                                    passive: !1
                                }
                            }
                        })
                    } catch (e) {}
                }(), s
            }

            function r(e, t, i) {
                var n = u(t);
                if (!c.isMac && l) {
                    if (t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win")) && (n |= 8), l.altGr) {
                        if (3 == (3 & n)) return;
                        l.altGr = 0
                    }
                    if (18 === i || 17 === i) {
                        var r = "location" in t ? t.location : t.keyLocation;
                        if (17 === i && 1 === r) 1 == l[i] && (h = t.timeStamp);
                        else if (18 === i && 3 === n && 2 === r) {
                            t.timeStamp - h < 50 && (l.altGr = !0)
                        }
                    }
                }
                if ((i in a.MODIFIER_KEYS && (i = -1), !n && 13 === i) && (3 === (r = "location" in t ? t.location : t.keyLocation) && (e(t, n, -i), t.defaultPrevented))) return;
                if (c.isChromeOS && 8 & n) {
                    if (e(t, n, i), t.defaultPrevented) return;
                    n &= -9
                }
                return !!(n || i in a.FUNCTION_KEYS || i in a.PRINTABLE_KEYS) && e(t, n, i)
            }

            function o() {
                l = Object.create(null)
            }
            var s, a = e("./keys"),
                c = e("./useragent"),
                l = null,
                h = 0;
            t.addListener = function(e, t, i) {
                return e.addEventListener(t, i, n())
            }, t.removeListener = function(e, t, i) {
                return e.removeEventListener(t, i, n())
            }, t.stopEvent = function(e) {
                return t.stopPropagation(e), t.preventDefault(e), !1
            }, t.stopPropagation = function(e) {
                e.stopPropagation && e.stopPropagation()
            }, t.preventDefault = function(e) {
                e.preventDefault && e.preventDefault()
            }, t.getButton = function(e) {
                return "dblclick" == e.type ? 0 : "contextmenu" == e.type || c.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.button
            }, t.capture = function(e, i, n) {
                function r(e) {
                    i && i(e), n && n(e), t.removeListener(document, "mousemove", i, !0), t.removeListener(document, "mouseup", r, !0), t.removeListener(document, "dragstart", r, !0)
                }
                return t.addListener(document, "mousemove", i, !0), t.addListener(document, "mouseup", r, !0), t.addListener(document, "dragstart", r, !0), r
            }, t.addMouseWheelListener = function(e, i) {
                "onmousewheel" in e ? t.addListener(e, "mousewheel", (function(e) {
                    void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX / 8, e.wheelY = -e.wheelDeltaY / 8) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / 8), i(e)
                })) : "onwheel" in e ? t.addListener(e, "wheel", (function(e) {
                    switch (e.deltaMode) {
                        case e.DOM_DELTA_PIXEL:
                            e.wheelX = .35 * e.deltaX || 0, e.wheelY = .35 * e.deltaY || 0;
                            break;
                        case e.DOM_DELTA_LINE:
                        case e.DOM_DELTA_PAGE:
                            e.wheelX = 5 * (e.deltaX || 0), e.wheelY = 5 * (e.deltaY || 0)
                    }
                    i(e)
                })) : t.addListener(e, "DOMMouseScroll", (function(e) {
                    e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 * (e.detail || 0), e.wheelY = 0) : (e.wheelX = 0, e.wheelY = 5 * (e.detail || 0)), i(e)
                }))
            }, t.addMultiMouseDownListener = function(e, i, n, r) {
                function o(e) {
                    if (0 !== t.getButton(e) ? h = 0 : e.detail > 1 ? ++h > 4 && (h = 1) : h = 1, c.isIE) {
                        var o = Math.abs(e.clientX - s) > 5 || Math.abs(e.clientY - a) > 5;
                        l && !o || (h = 1), l && clearTimeout(l), l = setTimeout((function() {
                            l = null
                        }), i[h - 1] || 600), 1 == h && (s = e.clientX, a = e.clientY)
                    }
                    if (e._clicks = h, n[r]("mousedown", e), h > 4) h = 0;
                    else if (h > 1) return n[r](u[h], e)
                }
                var s, a, l, h = 0,
                    u = {
                        2: "dblclick",
                        3: "tripleclick",
                        4: "quadclick"
                    };
                Array.isArray(e) || (e = [e]), e.forEach((function(e) {
                    t.addListener(e, "mousedown", o)
                }))
            };
            var u = function(e) {
                return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
            };
            if (t.getModifierString = function(e) {
                    return a.KEY_MODS[u(e)]
                }, t.addCommandKeyListener = function(e, i) {
                    var n = t.addListener;
                    if (c.isOldGecko || c.isOpera && !("KeyboardEvent" in window)) {
                        var s = null;
                        n(e, "keydown", (function(e) {
                            s = e.keyCode
                        })), n(e, "keypress", (function(e) {
                            return r(i, e, s)
                        }))
                    } else {
                        var a = null;
                        n(e, "keydown", (function(e) {
                            l[e.keyCode] = (l[e.keyCode] || 0) + 1;
                            var t = r(i, e, e.keyCode);
                            return a = e.defaultPrevented, t
                        })), n(e, "keypress", (function(e) {
                            a && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), a = null)
                        })), n(e, "keyup", (function(e) {
                            l[e.keyCode] = null
                        })), l || (o(), n(window, "focus", o))
                    }
                }, "object" == typeof window && window.postMessage && !c.isOldIE) {
                var d = 1;
                t.nextTick = function(e, i) {
                    i = i || window;
                    var n = "zero-timeout-message-" + d++,
                        r = function(o) {
                            o.data == n && (t.stopPropagation(o), t.removeListener(i, "message", r), e())
                        };
                    t.addListener(i, "message", r), i.postMessage(n, "*")
                }
            }
            t.$idleBlocked = !1, t.onIdle = function(e, i) {
                return setTimeout((function i() {
                    t.$idleBlocked ? setTimeout(i, 100) : e()
                }), i)
            }, t.$idleBlockId = null, t.blockIdle = function(e) {
                t.$idleBlockId && clearTimeout(t.$idleBlockId), t.$idleBlocked = !0, t.$idleBlockId = setTimeout((function() {
                    t.$idleBlocked = !1
                }), e || 100)
            }, t.nextFrame = "object" == typeof window && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), t.nextFrame ? t.nextFrame = t.nextFrame.bind(window) : t.nextFrame = function(e) {
                setTimeout(e, 17)
            }
        })), ace.define("ace/range", [], (function(e, t, i) {
            "use strict";
            var n = function(e, t, i, n) {
                this.start = {
                    row: e,
                    column: t
                }, this.end = {
                    row: i,
                    column: n
                }
            };
            (function() {
                this.isEqual = function(e) {
                    return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
                }, this.toString = function() {
                    return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
                }, this.contains = function(e, t) {
                    return 0 == this.compare(e, t)
                }, this.compareRange = function(e) {
                    var t, i = e.end,
                        n = e.start;
                    return 1 == (t = this.compare(i.row, i.column)) ? 1 == (t = this.compare(n.row, n.column)) ? 2 : 0 == t ? 1 : 0 : -1 == t ? -2 : -1 == (t = this.compare(n.row, n.column)) ? -1 : 1 == t ? 42 : 0
                }, this.comparePoint = function(e) {
                    return this.compare(e.row, e.column)
                }, this.containsRange = function(e) {
                    return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
                }, this.intersects = function(e) {
                    var t = this.compareRange(e);
                    return -1 == t || 0 == t || 1 == t
                }, this.isEnd = function(e, t) {
                    return this.end.row == e && this.end.column == t
                }, this.isStart = function(e, t) {
                    return this.start.row == e && this.start.column == t
                }, this.setStart = function(e, t) {
                    "object" == typeof e ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)
                }, this.setEnd = function(e, t) {
                    "object" == typeof e ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)
                }, this.inside = function(e, t) {
                    return 0 == this.compare(e, t) && (!this.isEnd(e, t) && !this.isStart(e, t))
                }, this.insideStart = function(e, t) {
                    return 0 == this.compare(e, t) && !this.isEnd(e, t)
                }, this.insideEnd = function(e, t) {
                    return 0 == this.compare(e, t) && !this.isStart(e, t)
                }, this.compare = function(e, t) {
                    return this.isMultiLine() || e !== this.start.row ? e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -1 : t > this.end.column ? 1 : 0
                }, this.compareStart = function(e, t) {
                    return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
                }, this.compareEnd = function(e, t) {
                    return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
                }, this.compareInside = function(e, t) {
                    return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
                }, this.clipRows = function(e, t) {
                    if (this.end.row > t) var i = {
                        row: t + 1,
                        column: 0
                    };
                    else if (this.end.row < e) i = {
                        row: e,
                        column: 0
                    };
                    if (this.start.row > t) var r = {
                        row: t + 1,
                        column: 0
                    };
                    else if (this.start.row < e) r = {
                        row: e,
                        column: 0
                    };
                    return n.fromPoints(r || this.start, i || this.end)
                }, this.extend = function(e, t) {
                    var i = this.compare(e, t);
                    if (0 == i) return this;
                    if (-1 == i) var r = {
                        row: e,
                        column: t
                    };
                    else var o = {
                        row: e,
                        column: t
                    };
                    return n.fromPoints(r || this.start, o || this.end)
                }, this.isEmpty = function() {
                    return this.start.row === this.end.row && this.start.column === this.end.column
                }, this.isMultiLine = function() {
                    return this.start.row !== this.end.row
                }, this.clone = function() {
                    return n.fromPoints(this.start, this.end)
                }, this.collapseRows = function() {
                    return 0 == this.end.column ? new n(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new n(this.start.row, 0, this.end.row, 0)
                }, this.toScreenRange = function(e) {
                    var t = e.documentToScreenPosition(this.start),
                        i = e.documentToScreenPosition(this.end);
                    return new n(t.row, t.column, i.row, i.column)
                }, this.moveBy = function(e, t) {
                    this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t
                }
            }).call(n.prototype), n.fromPoints = function(e, t) {
                return new n(e.row, e.column, t.row, t.column)
            }, n.comparePoints = function(e, t) {
                return e.row - t.row || e.column - t.column
            }, n.comparePoints = function(e, t) {
                return e.row - t.row || e.column - t.column
            }, t.Range = n
        })), ace.define("ace/lib/lang", [], (function(e, t, i) {
            "use strict";
            t.last = function(e) {
                return e[e.length - 1]
            }, t.stringReverse = function(e) {
                return e.split("").reverse().join("")
            }, t.stringRepeat = function(e, t) {
                for (var i = ""; t > 0;) 1 & t && (i += e), (t >>= 1) && (e += e);
                return i
            };
            var n = /^\s\s*/,
                r = /\s\s*$/;
            t.stringTrimLeft = function(e) {
                return e.replace(n, "")
            }, t.stringTrimRight = function(e) {
                return e.replace(r, "")
            }, t.copyObject = function(e) {
                var t = {};
                for (var i in e) t[i] = e[i];
                return t
            }, t.copyArray = function(e) {
                for (var t = [], i = 0, n = e.length; i < n; i++) e[i] && "object" == typeof e[i] ? t[i] = this.copyObject(e[i]) : t[i] = e[i];
                return t
            }, t.deepCopy = function e(t) {
                if ("object" != typeof t || !t) return t;
                var i;
                if (Array.isArray(t)) {
                    i = [];
                    for (var n = 0; n < t.length; n++) i[n] = e(t[n]);
                    return i
                }
                if ("[object Object]" !== Object.prototype.toString.call(t)) return t;
                for (var n in i = {}, t) i[n] = e(t[n]);
                return i
            }, t.arrayToMap = function(e) {
                for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = 1;
                return t
            }, t.createMap = function(e) {
                var t = Object.create(null);
                for (var i in e) t[i] = e[i];
                return t
            }, t.arrayRemove = function(e, t) {
                for (var i = 0; i <= e.length; i++) t === e[i] && e.splice(i, 1)
            }, t.escapeRegExp = function(e) {
                return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
            }, t.escapeHTML = function(e) {
                return ("" + e).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
            }, t.getMatchOffsets = function(e, t) {
                var i = [];
                return e.replace(t, (function(e) {
                    i.push({
                        offset: arguments[arguments.length - 2],
                        length: e.length
                    })
                })), i
            }, t.deferredCall = function(e) {
                var t = null,
                    i = function() {
                        t = null, e()
                    },
                    n = function(e) {
                        return n.cancel(), t = setTimeout(i, e || 0), n
                    };
                return n.schedule = n, n.call = function() {
                    return this.cancel(), e(), n
                }, n.cancel = function() {
                    return clearTimeout(t), t = null, n
                }, n.isPending = function() {
                    return t
                }, n
            }, t.delayedCall = function(e, t) {
                var i = null,
                    n = function() {
                        i = null, e()
                    },
                    r = function(e) {
                        null == i && (i = setTimeout(n, e || t))
                    };
                return r.delay = function(e) {
                    i && clearTimeout(i), i = setTimeout(n, e || t)
                }, r.schedule = r, r.call = function() {
                    this.cancel(), e()
                }, r.cancel = function() {
                    i && clearTimeout(i), i = null
                }, r.isPending = function() {
                    return i
                }, r
            }
        })), ace.define("ace/clipboard", [], (function(e, t, i) {
            "use strict";
            var n;
            i.exports = {
                lineMode: !1,
                pasteCancelled: function() {
                    return !!(n && n > Date.now() - 50) || (n = !1)
                },
                cancel: function() {
                    n = Date.now()
                }
            }
        })), ace.define("ace/keyboard/textinput", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/event"),
                r = e("../lib/useragent"),
                o = e("../lib/dom"),
                s = e("../lib/lang"),
                a = e("../clipboard"),
                c = r.isChrome < 18,
                l = r.isIE,
                h = r.isChrome > 63,
                u = 400,
                d = e("../lib/keys"),
                g = d.KEY_MODS,
                f = r.isIOS,
                p = f ? /\s/ : /\n/;
            t.TextInput = function(e, t) {
                function i() {
                    x = !0, v.blur(), v.focus(), x = !1
                }

                function m() {
                    clearTimeout(U), U = setTimeout((function() {
                        S && (v.style.cssText = S, S = ""), t.renderer.$isMousePressed = !1, t.renderer.$keepTextAreaAtCursor && t.renderer.$moveTextAreaToCursor()
                    }), 0)
                }
                var v = o.createElement("textarea");
                v.className = "ace_text-input", v.setAttribute("wrap", "off"), v.setAttribute("autocorrect", "off"), v.setAttribute("autocapitalize", "off"), v.setAttribute("spellcheck", !1), v.style.opacity = "0", e.insertBefore(v, e.firstChild);
                var w = !1,
                    b = !1,
                    y = !1,
                    C = !1,
                    S = "";
                r.isMobile || (v.style.fontSize = "1px");
                var k = !1,
                    x = !1,
                    $ = "",
                    A = 0,
                    E = 0,
                    L = 0;
                try {
                    var R = document.activeElement === v
                } catch (e) {}
                n.addListener(v, "blur", (function(e) {
                    x || (t.onBlur(e), R = !1)
                })), n.addListener(v, "focus", (function(e) {
                    if (!x) {
                        if (R = !0, r.isEdge) try {
                            if (!document.hasFocus()) return
                        } catch (e) {}
                        t.onFocus(e), r.isEdge ? setTimeout(_) : _()
                    }
                })), this.$focusScroll = !1, this.focus = function() {
                    if (S || h || "browser" == this.$focusScroll) return v.focus({
                        preventScroll: !0
                    });
                    var e = v.style.top;
                    v.style.position = "fixed", v.style.top = "0px";
                    try {
                        var t = 0 != v.getBoundingClientRect().top
                    } catch (e) {
                        return
                    }
                    var i = [];
                    if (t)
                        for (var n = v.parentElement; n && 1 == n.nodeType;) i.push(n), n.setAttribute("ace_nocontext", !0), n = !n.parentElement && n.getRootNode ? n.getRootNode().host : n.parentElement;
                    v.focus({
                        preventScroll: !0
                    }), t && i.forEach((function(e) {
                        e.removeAttribute("ace_nocontext")
                    })), setTimeout((function() {
                        v.style.position = "", "0px" == v.style.top && (v.style.top = e)
                    }), 0)
                }, this.blur = function() {
                    v.blur()
                }, this.isFocused = function() {
                    return R
                }, t.on("beforeEndOperation", (function() {
                    t.curOp && "insertstring" == t.curOp.command.name || (y && ($ = v.value = "", H()), _())
                }));
                var _ = f ? function(e) {
                    if (R && (!w || e) && !C) {
                        e || (e = "");
                        var i = "\n ab" + e + "cde fg\n";
                        i != v.value && (v.value = $ = i);
                        var n = 4 + (e.length || (t.selection.isEmpty() ? 0 : 1));
                        (4 != A || E != n) && v.setSelectionRange(4, n), A = 4, E = n
                    }
                } : function() {
                    if (!y && !C && (R || M)) {
                        y = !0;
                        var e = t.selection,
                            i = e.getRange(),
                            n = e.cursor.row,
                            r = i.start.column,
                            o = i.end.column,
                            s = t.session.getLine(n);
                        if (i.start.row != n) {
                            var a = t.session.getLine(n - 1);
                            r = i.start.row < n - 1 ? 0 : r, o += a.length + 1, s = a + "\n" + s
                        } else if (i.end.row != n) {
                            var c = t.session.getLine(n + 1);
                            o = i.end.row > n + 1 ? c.length : o, o += s.length + 1, s = s + "\n" + c
                        }
                        s.length > u && (r < u && o < u ? s = s.slice(0, u) : (s = "\n", r = 0, o = 1));
                        var l = s + "\n\n";
                        if (l != $ && (v.value = $ = l, A = E = l.length), M && (A = v.selectionStart, E = v.selectionEnd), E != o || A != r || v.selectionEnd != E) try {
                            v.setSelectionRange(r, o), A = r, E = o
                        } catch (e) {}
                        y = !1
                    }
                };
                R && t.onFocus();
                var T = null;
                this.setInputHandler = function(e) {
                    T = e
                }, this.getInputHandler = function() {
                    return T
                };
                var M = !1,
                    O = function(e, i) {
                        if (M && (M = !1), b) return _(), e && t.onPaste(e), b = !1, "";
                        for (var n = v.selectionStart, r = v.selectionEnd, o = A, s = $.length - E, a = e, c = e.length - n, l = e.length - r, h = 0; o > 0 && $[h] == e[h];) h++, o--;
                        for (a = a.slice(h), h = 1; s > 0 && $.length - h > A - 1 && $[$.length - h] == e[e.length - h];) h++, s--;
                        c -= h - 1, l -= h - 1;
                        var u = a.length - h + 1;
                        return u < 0 && (o = -u, u = 0), a = a.slice(0, u), i || a || c || o || s || l ? (C = !0, a && !o && !s && !c && !l || k ? t.onTextInput(a) : t.onTextInput(a, {
                            extendLeft: o,
                            extendRight: s,
                            restoreStart: c,
                            restoreEnd: l
                        }), C = !1, $ = e, A = n, E = r, L = l, a) : ""
                    },
                    F = function(e) {
                        if (y) return P();
                        if (e && e.inputType) {
                            if ("historyUndo" == e.inputType) return t.execCommand("undo");
                            if ("historyRedo" == e.inputType) return t.execCommand("redo")
                        }
                        var i = v.value,
                            n = O(i, !0);
                        (i.length > 500 || p.test(n)) && _()
                    },
                    I = function(e, t, i) {
                        var n = e.clipboardData || window.clipboardData;
                        if (n && !c) {
                            var r = l || i ? "Text" : "text/plain";
                            try {
                                return t ? !1 !== n.setData(r, t) : n.getData(r)
                            } catch (e) {
                                if (!i) return I(e, t, !0)
                            }
                        }
                    },
                    W = function(e, i) {
                        var r = t.getCopyText();
                        if (!r) return n.preventDefault(e);
                        I(e, r) ? (f && (_(r), w = r, setTimeout((function() {
                            w = !1
                        }), 10)), i ? t.onCut() : t.onCopy(), n.preventDefault(e)) : (w = !0, v.value = r, v.select(), setTimeout((function() {
                            w = !1, _(), i ? t.onCut() : t.onCopy()
                        })))
                    },
                    B = function(e) {
                        W(e, !0)
                    },
                    N = function(e) {
                        W(e, !1)
                    },
                    D = function(e) {
                        var i = I(e);
                        a.pasteCancelled() || ("string" == typeof i ? (i && t.onPaste(i, e), r.isIE && setTimeout(_), n.preventDefault(e)) : (v.value = "", b = !0))
                    };
                n.addCommandKeyListener(v, t.onCommandKey.bind(t)), n.addListener(v, "select", (function(e) {
                    y || (w ? w = !1 : function(e) {
                        return 0 === e.selectionStart && e.selectionEnd >= $.length && e.value === $ && $ && e.selectionEnd !== E
                    }(v) && (t.selectAll(), _()))
                })), n.addListener(v, "input", F), n.addListener(v, "cut", B), n.addListener(v, "copy", N), n.addListener(v, "paste", D), (!("oncut" in v) || !("oncopy" in v) || !("onpaste" in v)) && n.addListener(e, "keydown", (function(e) {
                    if ((!r.isMac || e.metaKey) && e.ctrlKey) switch (e.keyCode) {
                        case 67:
                            N(e);
                            break;
                        case 86:
                            D(e);
                            break;
                        case 88:
                            B(e)
                    }
                }));
                var P = function() {
                        if (y && t.onCompositionUpdate && !t.$readOnly) {
                            if (k) return i();
                            if (y.useTextareaForIME) t.onCompositionUpdate(v.value);
                            else {
                                var e = v.value;
                                O(e), y.markerRange && (y.context && (y.markerRange.start.column = y.selectionStart = y.context.compositionStartOffset), y.markerRange.end.column = y.markerRange.start.column + E - y.selectionStart + L)
                            }
                        }
                    },
                    H = function(e) {
                        t.onCompositionEnd && !t.$readOnly && (y = !1, t.onCompositionEnd(), t.off("mousedown", i), e && F())
                    },
                    z = s.delayedCall(P, 50).schedule.bind(null, null);
                n.addListener(v, "compositionstart", (function(e) {
                    if (!y && t.onCompositionStart && !t.$readOnly && (y = {}, !k)) {
                        setTimeout(P, 0), t.on("mousedown", i);
                        var n = t.getSelectionRange();
                        n.end.row = n.start.row, n.end.column = n.start.column, y.markerRange = n, y.selectionStart = A, t.onCompositionStart(y), y.useTextareaForIME ? (v.value = "", $ = "", A = 0, E = 0) : (v.msGetInputContext && (y.context = v.msGetInputContext()), v.getInputContext && (y.context = v.getInputContext()))
                    }
                })), n.addListener(v, "compositionupdate", P), n.addListener(v, "keyup", (function(e) {
                    27 == e.keyCode && v.value.length < v.selectionStart && (y || ($ = v.value), A = E = -1, _()), z()
                })), n.addListener(v, "keydown", z), n.addListener(v, "compositionend", H), this.getElement = function() {
                    return v
                }, this.setCommandMode = function(e) {
                    k = e, v.readOnly = !1
                }, this.setReadOnly = function(e) {
                    k || (v.readOnly = e)
                }, this.setCopyWithEmptySelection = function(e) {}, this.onContextMenu = function(e) {
                    M = !0, _(), t._emit("nativecontextmenu", {
                        target: t,
                        domEvent: e
                    }), this.moveToMouse(e, !0)
                }, this.moveToMouse = function(e, i) {
                    S || (S = v.style.cssText), v.style.cssText = (i ? "z-index:100000;" : "") + (r.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (A + E) * t.renderer.characterWidth * .5 + "px;";
                    var s = t.container.getBoundingClientRect(),
                        a = o.computedStyle(t.container),
                        c = s.top + (parseInt(a.borderTopWidth) || 0),
                        l = s.left + (parseInt(s.borderLeftWidth) || 0),
                        h = s.bottom - c - v.clientHeight - 2,
                        u = function(e) {
                            o.translate(v, e.clientX - l - 2, Math.min(e.clientY - c - 2, h))
                        };
                    u(e), "mousedown" == e.type && (t.renderer.$isMousePressed = !0, clearTimeout(U), r.isWin && n.capture(t.container, u, m))
                }, this.onContextMenuClose = m;
                var U, K = function(e) {
                    t.textInput.onContextMenu(e), m()
                };
                n.addListener(v, "mouseup", K), n.addListener(v, "mousedown", (function(e) {
                    e.preventDefault(), m()
                })), n.addListener(t.renderer.scroller, "contextmenu", K), n.addListener(v, "contextmenu", K), f && function(e, t, i) {
                    var n = null,
                        r = !1;
                    i.addEventListener("keydown", (function(e) {
                        n && clearTimeout(n), r = !0
                    }), !0), i.addEventListener("keyup", (function(e) {
                        n = setTimeout((function() {
                            r = !1
                        }), 100)
                    }), !0);
                    var o = function(e) {
                        if (document.activeElement === i && !(r || y || t.$mouseHandler.isMousePressed || w)) {
                            var n = i.selectionStart,
                                o = i.selectionEnd,
                                s = null,
                                a = 0;
                            if (0 == n ? s = d.up : 1 == n ? s = d.home : o > E && "\n" == $[o] ? s = d.end : n < A && " " == $[n - 1] ? (s = d.left, a = g.option) : n < A || n == A && E != A && n == o ? s = d.left : o > E && $.slice(0, o).split("\n").length > 2 ? s = d.down : o > E && " " == $[o - 1] ? (s = d.right, a = g.option) : (o > E || o == E && E != A && n == o) && (s = d.right), n !== o && (a |= g.shift), s) {
                                if (!t.onCommandKey({}, a, s) && t.commands) {
                                    s = d.keyCodeToString(s);
                                    var c = t.commands.findKeyCommand(a, s);
                                    c && t.execCommand(c)
                                }
                                A = n, E = o, _("")
                            }
                        }
                    };
                    document.addEventListener("selectionchange", o), t.on("destroy", (function() {
                        document.removeEventListener("selectionchange", o)
                    }))
                }(0, t, v)
            }
        })), ace.define("ace/mouse/default_handlers", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                e.$clickSelection = null;
                var t = e.editor;
                t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
                ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"].forEach((function(t) {
                    e[t] = this[t]
                }), this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
            }

            function r(e, t) {
                if (e.start.row == e.end.row) var i = 2 * t.column - e.start.column - e.end.column;
                else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column) i = 2 * t.row - e.start.row - e.end.row;
                else var i = t.column - 4;
                return i < 0 ? {
                    cursor: e.start,
                    anchor: e.end
                } : {
                    cursor: e.end,
                    anchor: e.start
                }
            }
            var o = e("../lib/useragent");
            (function() {
                this.onMouseDown = function(e) {
                    var t = e.inSelection(),
                        i = e.getDocumentPosition();
                    this.mousedownEvent = e;
                    var n = this.editor,
                        r = e.getButton();
                    return 0 !== r ? ((n.getSelectionRange().isEmpty() || 1 == r) && n.selection.moveToPosition(i), void(2 == r && (n.textInput.onContextMenu(e.domEvent), o.isMozilla || e.preventDefault()))) : (this.mousedownEvent.time = Date.now(), !t || n.isFocused() || (n.focus(), !this.$focusTimeout || this.$clickSelection || n.inMultiSelectMode) ? (this.captureMouse(e), this.startSelect(i, e.domEvent._clicks > 1), e.preventDefault()) : (this.setState("focusWait"), void this.captureMouse(e)))
                }, this.startSelect = function(e, t) {
                    e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
                    var i = this.editor;
                    this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? i.selection.selectToPosition(e) : t || i.selection.moveToPosition(e), t || this.select(), i.renderer.scroller.setCapture && i.renderer.scroller.setCapture(), i.setStyle("ace_selecting"), this.setState("select"))
                }, this.select = function() {
                    var e, t = this.editor,
                        i = t.renderer.screenToTextCoordinates(this.x, this.y);
                    if (this.$clickSelection) {
                        var n = this.$clickSelection.comparePoint(i);
                        if (-1 == n) e = this.$clickSelection.end;
                        else if (1 == n) e = this.$clickSelection.start;
                        else {
                            var o = r(this.$clickSelection, i);
                            i = o.cursor, e = o.anchor
                        }
                        t.selection.setSelectionAnchor(e.row, e.column)
                    }
                    t.selection.selectToPosition(i), t.renderer.scrollCursorIntoView()
                }, this.extendSelectionBy = function(e) {
                    var t, i = this.editor,
                        n = i.renderer.screenToTextCoordinates(this.x, this.y),
                        o = i.selection[e](n.row, n.column);
                    if (this.$clickSelection) {
                        var s = this.$clickSelection.comparePoint(o.start),
                            a = this.$clickSelection.comparePoint(o.end);
                        if (-1 == s && a <= 0) t = this.$clickSelection.end, o.end.row == n.row && o.end.column == n.column || (n = o.start);
                        else if (1 == a && s >= 0) t = this.$clickSelection.start, o.start.row == n.row && o.start.column == n.column || (n = o.end);
                        else if (-1 == s && 1 == a) n = o.end, t = o.start;
                        else {
                            var c = r(this.$clickSelection, n);
                            n = c.cursor, t = c.anchor
                        }
                        i.selection.setSelectionAnchor(t.row, t.column)
                    }
                    i.selection.selectToPosition(n), i.renderer.scrollCursorIntoView()
                }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function() {
                    this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
                }, this.focusWait = function() {
                    var e = function(e, t, i, n) {
                            return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
                        }(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y),
                        t = Date.now();
                    (e > 0 || t - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
                }, this.onDoubleClick = function(e) {
                    var t = e.getDocumentPosition(),
                        i = this.editor,
                        n = i.session.getBracketRange(t);
                    n ? (n.isEmpty() && (n.start.column--, n.end.column++), this.setState("select")) : (n = i.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = n, this.select()
                }, this.onTripleClick = function(e) {
                    var t = e.getDocumentPosition(),
                        i = this.editor;
                    this.setState("selectByLines");
                    var n = i.getSelectionRange();
                    n.isMultiLine() && n.contains(t.row, t.column) ? (this.$clickSelection = i.selection.getLineRange(n.start.row), this.$clickSelection.end = i.selection.getLineRange(n.end.row).end) : this.$clickSelection = i.selection.getLineRange(t.row), this.select()
                }, this.onQuadClick = function(e) {
                    var t = this.editor;
                    t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll")
                }, this.onMouseWheel = function(e) {
                    if (!e.getAccelKey()) {
                        e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
                        var t = this.editor;
                        this.$lastScroll || (this.$lastScroll = {
                            t: 0,
                            vx: 0,
                            vy: 0,
                            allowed: 0
                        });
                        var i = this.$lastScroll,
                            n = e.domEvent.timeStamp,
                            r = n - i.t,
                            o = r ? e.wheelX / r : i.vx,
                            s = r ? e.wheelY / r : i.vy;
                        r < 550 && (o = (o + i.vx) / 2, s = (s + i.vy) / 2);
                        var a = Math.abs(o / s),
                            c = !1;
                        if (a >= 1 && t.renderer.isScrollableBy(e.wheelX * e.speed, 0) && (c = !0), a <= 1 && t.renderer.isScrollableBy(0, e.wheelY * e.speed) && (c = !0), c) i.allowed = n;
                        else if (n - i.allowed < 550) {
                            Math.abs(o) <= 1.5 * Math.abs(i.vx) && Math.abs(s) <= 1.5 * Math.abs(i.vy) ? (c = !0, i.allowed = n) : i.allowed = 0
                        }
                        return i.t = n, i.vx = o, i.vy = s, c ? (t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()) : void 0
                    }
                }
            }).call(n.prototype), t.DefaultHandlers = n
        })), ace.define("ace/tooltip", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                this.isOpen = !1, this.$element = null, this.$parentNode = e
            }
            e("./lib/oop");
            var r = e("./lib/dom");
            (function() {
                this.$init = function() {
                    return this.$element = r.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
                }, this.getElement = function() {
                    return this.$element || this.$init()
                }, this.setText = function(e) {
                    this.getElement().textContent = e
                }, this.setHtml = function(e) {
                    this.getElement().innerHTML = e
                }, this.setPosition = function(e, t) {
                    this.getElement().style.left = e + "px", this.getElement().style.top = t + "px"
                }, this.setClassName = function(e) {
                    r.addCssClass(this.getElement(), e)
                }, this.show = function(e, t, i) {
                    null != e && this.setText(e), null != t && null != i && this.setPosition(t, i), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
                }, this.hide = function() {
                    this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1)
                }, this.getHeight = function() {
                    return this.getElement().offsetHeight
                }, this.getWidth = function() {
                    return this.getElement().offsetWidth
                }, this.destroy = function() {
                    this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element)
                }
            }).call(n.prototype), t.Tooltip = n
        })), ace.define("ace/mouse/default_gutter_handler", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                a.call(this, e)
            }
            var r = e("../lib/dom"),
                o = e("../lib/oop"),
                s = e("../lib/event"),
                a = e("../tooltip").Tooltip;
            o.inherits(n, a),
                function() {
                    this.setPosition = function(e, t) {
                        var i = window.innerWidth || document.documentElement.clientWidth,
                            n = window.innerHeight || document.documentElement.clientHeight,
                            r = this.getWidth(),
                            o = this.getHeight();
                        (e += 15) + r > i && (e -= e + r - i), (t += 15) + o > n && (t -= 20 + o), a.prototype.setPosition.call(this, e, t)
                    }
                }.call(n.prototype), t.GutterHandler = function(e) {
                    function t() {
                        var t = c.getDocumentPosition().row,
                            n = u.$annotations[t];
                        if (!n) return i();
                        if (t == h.session.getLength()) {
                            var r = h.renderer.pixelToScreenCoordinates(0, c.y).row,
                                s = c.$pos;
                            if (r > h.session.documentToScreenRow(s.row, s.column)) return i()
                        }
                        if (l != n)
                            if (l = n.text.join("<br/>"), d.setHtml(l), d.show(), h._signal("showGutterTooltip", d), h.on("mousewheel", i), e.$tooltipFollowsMouse) o(c);
                            else {
                                var a = c.domEvent.target.getBoundingClientRect(),
                                    g = d.getElement().style;
                                g.left = a.right + "px", g.top = a.bottom + "px"
                            }
                    }

                    function i() {
                        a && (a = clearTimeout(a)), l && (d.hide(), l = null, h._signal("hideGutterTooltip", d), h.removeEventListener("mousewheel", i))
                    }

                    function o(e) {
                        d.setPosition(e.x, e.y)
                    }
                    var a, c, l, h = e.editor,
                        u = h.renderer.$gutterLayer,
                        d = new n(h.container);
                    e.editor.setDefaultHandler("guttermousedown", (function(t) {
                        if (h.isFocused() && 0 == t.getButton() && "foldWidgets" != u.getRegion(t)) {
                            var i = t.getDocumentPosition().row,
                                n = h.session.selection;
                            if (t.getShiftKey()) n.selectTo(i, 0);
                            else {
                                if (2 == t.domEvent.detail) return h.selectAll(), t.preventDefault();
                                e.$clickSelection = h.selection.getLineRange(i)
                            }
                            return e.setState("selectByLines"), e.captureMouse(t), t.preventDefault()
                        }
                    })), e.editor.setDefaultHandler("guttermousemove", (function(n) {
                        var s = n.domEvent.target || n.domEvent.srcElement;
                        if (r.hasCssClass(s, "ace_fold-widget")) return i();
                        l && e.$tooltipFollowsMouse && o(n), c = n, a || (a = setTimeout((function() {
                            a = null, c && !e.isMousePressed ? t() : i()
                        }), 50))
                    })), s.addListener(h.renderer.$gutter, "mouseout", (function(e) {
                        c = null, l && !a && (a = setTimeout((function() {
                            a = null, i()
                        }), 50))
                    })), h.on("changeSession", i)
                }
        })), ace.define("ace/mouse/mouse_event", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/event"),
                r = e("../lib/useragent"),
                o = t.MouseEvent = function(e, t) {
                    this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
                };
            (function() {
                this.stopPropagation = function() {
                    n.stopPropagation(this.domEvent), this.propagationStopped = !0
                }, this.preventDefault = function() {
                    n.preventDefault(this.domEvent), this.defaultPrevented = !0
                }, this.stop = function() {
                    this.stopPropagation(), this.preventDefault()
                }, this.getDocumentPosition = function() {
                    return this.$pos || (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY)), this.$pos
                }, this.inSelection = function() {
                    if (null !== this.$inSelection) return this.$inSelection;
                    var e = this.editor.getSelectionRange();
                    if (e.isEmpty()) this.$inSelection = !1;
                    else {
                        var t = this.getDocumentPosition();
                        this.$inSelection = e.contains(t.row, t.column)
                    }
                    return this.$inSelection
                }, this.getButton = function() {
                    return n.getButton(this.domEvent)
                }, this.getShiftKey = function() {
                    return this.domEvent.shiftKey
                }, this.getAccelKey = r.isMac ? function() {
                    return this.domEvent.metaKey
                } : function() {
                    return this.domEvent.ctrlKey
                }
            }).call(o.prototype)
        })), ace.define("ace/mouse/dragdrop_handler", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                function t() {
                    var e = C;
                    (function(e, t) {
                        var i = Date.now(),
                            n = !t || e.row != t.row,
                            o = !t || e.column != t.column;
                        !$ || n || o ? (f.moveCursorToPosition(e), $ = i, A = {
                            x: v,
                            y: w
                        }) : r(A.x, A.y, v, w) > h ? $ = null : i - $ >= l && (f.renderer.scrollCursorIntoView(), $ = null)
                    })(C = f.renderer.screenToTextCoordinates(v, w), e),
                    function(e, t) {
                        var i = Date.now(),
                            n = f.renderer.layerConfig.lineHeight,
                            r = f.renderer.layerConfig.characterWidth,
                            o = f.renderer.scroller.getBoundingClientRect(),
                            s = {
                                x: {
                                    left: v - o.left,
                                    right: o.right - v
                                },
                                y: {
                                    top: w - o.top,
                                    bottom: o.bottom - w
                                }
                            },
                            a = Math.min(s.x.left, s.x.right),
                            l = Math.min(s.y.top, s.y.bottom),
                            h = {
                                row: e.row,
                                column: e.column
                            };
                        a / r <= 2 && (h.column += s.x.left < s.x.right ? -3 : 2), l / n <= 1 && (h.row += s.y.top < s.y.bottom ? -1 : 1);
                        var u = e.row != h.row,
                            d = e.column != h.column,
                            g = !t || e.row != t.row;
                        u || d && !g ? x ? i - x >= c && f.renderer.scrollCursorIntoView(h) : x = i : x = null
                    }(C, e)
                }

                function i() {
                    y = f.selection.toOrientedRange(), m = f.session.addMarker(y, "ace_selection", f.getSelectionStyle()), f.clearSelection(), f.isFocused() && f.renderer.$cursorLayer.setBlinking(!1), clearInterval(b), t(), b = setInterval(t, 20), L = 0, s.addListener(document, "mousemove", u)
                }

                function n() {
                    clearInterval(b), f.session.removeMarker(m), m = null, f.selection.fromOrientedRange(y), f.isFocused() && !k && f.$resetCursorStyle(), y = null, C = null, L = 0, x = null, $ = null, s.removeListener(document, "mousemove", u)
                }

                function u() {
                    null == R && (R = setTimeout((function() {
                        null != R && m && n()
                    }), 20))
                }

                function d(e) {
                    var t = e.types;
                    return !t || Array.prototype.some.call(t, (function(e) {
                        return "text/plain" == e || "Text" == e
                    }))
                }

                function g(e) {
                    var t = ["copy", "copymove", "all", "uninitialized"],
                        i = a.isMac ? e.altKey : e.ctrlKey,
                        n = "uninitialized";
                    try {
                        n = e.dataTransfer.effectAllowed.toLowerCase()
                    } catch (e) {}
                    var r = "none";
                    return i && t.indexOf(n) >= 0 ? r = "copy" : ["move", "copymove", "linkmove", "all", "uninitialized"].indexOf(n) >= 0 ? r = "move" : t.indexOf(n) >= 0 && (r = "copy"), r
                }
                var f = e.editor,
                    p = o.createElement("img");
                p.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", a.isOpera && (p.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
                ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"].forEach((function(t) {
                    e[t] = this[t]
                }), this), f.addEventListener("mousedown", this.onMouseDown.bind(e));
                var m, v, w, b, y, C, S, k, x, $, A, E = f.container,
                    L = 0;
                this.onDragStart = function(e) {
                    if (this.cancelDrag || !E.draggable) {
                        var t = this;
                        return setTimeout((function() {
                            t.startSelect(), t.captureMouse(e)
                        }), 0), e.preventDefault()
                    }
                    y = f.getSelectionRange();
                    var i = e.dataTransfer;
                    i.effectAllowed = f.getReadOnly() ? "copy" : "copyMove", a.isOpera && (f.container.appendChild(p), p.scrollTop = 0), i.setDragImage && i.setDragImage(p, 0, 0), a.isOpera && f.container.removeChild(p), i.clearData(), i.setData("Text", f.session.getTextRange()), k = !0, this.setState("drag")
                }, this.onDragEnd = function(e) {
                    if (E.draggable = !1, k = !1, this.setState(null), !f.getReadOnly()) {
                        var t = e.dataTransfer.dropEffect;
                        !S && "move" == t && f.session.remove(f.getSelectionRange()), f.$resetCursorStyle()
                    }
                    this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
                }, this.onDragEnter = function(e) {
                    if (!f.getReadOnly() && d(e.dataTransfer)) return v = e.clientX, w = e.clientY, m || i(), L++, e.dataTransfer.dropEffect = S = g(e), s.preventDefault(e)
                }, this.onDragOver = function(e) {
                    if (!f.getReadOnly() && d(e.dataTransfer)) return v = e.clientX, w = e.clientY, m || (i(), L++), null !== R && (R = null), e.dataTransfer.dropEffect = S = g(e), s.preventDefault(e)
                }, this.onDragLeave = function(e) {
                    if (--L <= 0 && m) return n(), S = null, s.preventDefault(e)
                }, this.onDrop = function(e) {
                    if (C) {
                        var t = e.dataTransfer;
                        if (k) switch (S) {
                            case "move":
                                y = y.contains(C.row, C.column) ? {
                                    start: C,
                                    end: C
                                } : f.moveText(y, C);
                                break;
                            case "copy":
                                y = f.moveText(y, C, !0)
                        } else {
                            var i = t.getData("Text");
                            y = {
                                start: C,
                                end: f.session.insert(C, i)
                            }, f.focus(), S = null
                        }
                        return n(), s.preventDefault(e)
                    }
                }, s.addListener(E, "dragstart", this.onDragStart.bind(e)), s.addListener(E, "dragend", this.onDragEnd.bind(e)), s.addListener(E, "dragenter", this.onDragEnter.bind(e)), s.addListener(E, "dragover", this.onDragOver.bind(e)), s.addListener(E, "dragleave", this.onDragLeave.bind(e)), s.addListener(E, "drop", this.onDrop.bind(e));
                var R = null
            }

            function r(e, t, i, n) {
                return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
            }
            var o = e("../lib/dom"),
                s = e("../lib/event"),
                a = e("../lib/useragent"),
                c = 200,
                l = 200,
                h = 5;
            (function() {
                this.dragWait = function() {
                    Date.now() - this.mousedownEvent.time > this.editor.getDragDelay() && this.startDrag()
                }, this.dragWaitEnd = function() {
                    this.editor.container.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
                }, this.dragReadyEnd = function(e) {
                    this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
                }, this.startDrag = function() {
                    this.cancelDrag = !1;
                    var e = this.editor;
                    e.container.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
                    var t = a.isWin ? "default" : "move";
                    e.renderer.setCursorStyle(t), this.setState("dragReady")
                }, this.onMouseDrag = function(e) {
                    var t = this.editor.container;
                    a.isIE && "dragReady" == this.state && (r(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 3 && t.dragDrop());
                    "dragWait" === this.state && (r(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition())))
                }, this.onMouseDown = function(e) {
                    if (this.$dragEnabled) {
                        this.mousedownEvent = e;
                        var t = this.editor,
                            i = e.inSelection(),
                            n = e.getButton();
                        if (1 === (e.domEvent.detail || 1) && 0 === n && i) {
                            if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) return;
                            this.mousedownEvent.time = Date.now();
                            var r = e.domEvent.target || e.domEvent.srcElement;
                            if ("unselectable" in r && (r.unselectable = "on"), t.getDragDelay()) {
                                if (a.isWebKit) this.cancelDrag = !0, t.container.draggable = !0;
                                this.setState("dragWait")
                            } else this.startDrag();
                            this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0
                        }
                    }
                }
            }).call(n.prototype), t.DragdropHandler = n
        })), ace.define("ace/mouse/touch_handler", [], (function(e, t, i) {
            "use strict";
            var n = e("./mouse_event").MouseEvent,
                r = e("../lib/event"),
                o = e("../lib/dom");
            t.addTouchListeners = function(e, t) {
                function i() {
                    var e = window.navigator && window.navigator.clipboard,
                        i = !1,
                        n = function() {
                            var n = t.getCopyText(),
                                r = t.session.getUndoManager().hasUndo();
                            v.replaceChild(o.buildDom(i ? ["span", !n && ["span", {
                                    class: "ace_mobile-button",
                                    action: "selectall"
                                }, "Select All"], n && ["span", {
                                    class: "ace_mobile-button",
                                    action: "copy"
                                }, "Copy"], n && ["span", {
                                    class: "ace_mobile-button",
                                    action: "cut"
                                }, "Cut"], e && ["span", {
                                    class: "ace_mobile-button",
                                    action: "paste"
                                }, "Paste"], r && ["span", {
                                    class: "ace_mobile-button",
                                    action: "undo"
                                }, "Undo"],
                                ["span", {
                                    class: "ace_mobile-button",
                                    action: "find"
                                }, "Find"],
                                ["span", {
                                    class: "ace_mobile-button",
                                    action: "openCommandPallete"
                                }, "Pallete"]
                            ] : ["span"]), v.firstChild)
                        },
                        r = function(r) {
                            var o = r.target.getAttribute("action");
                            if ("more" == o || !i) return i = !i, n();
                            "paste" == o ? e.readText().then((function(e) {
                                t.execCommand(o, e)
                            })) : o && ("cut" != o && "copy" != o || (e ? e.writeText(t.getCopyText()) : document.execCommand("copy")), t.execCommand(o)), v.firstChild.style.display = "none", i = !1, "openCommandPallete" != o && t.focus()
                        };
                    v = o.buildDom(["div", {
                            class: "ace_mobile-menu",
                            ontouchstart: function(e) {
                                w = "menu", e.stopPropagation(), e.preventDefault(), t.textInput.focus()
                            },
                            ontouchend: function(e) {
                                e.stopPropagation(), e.preventDefault(), r(e)
                            },
                            onclick: r
                        },
                        ["span"],
                        ["span", {
                            class: "ace_mobile-button",
                            action: "more"
                        }, "..."]
                    ], t.container)
                }

                function s() {
                    v || i();
                    var e = t.selection.cursor,
                        n = t.renderer.textToScreenCoordinates(e.row, e.column),
                        r = t.container.getBoundingClientRect();
                    v.style.top = n.pageY - r.top - 3 + "px", v.style.right = "10px", v.style.display = "", v.firstChild.style.display = "none", t.on("input", a)
                }

                function a(e) {
                    v && (v.style.display = "none"), t.off("input", a)
                }

                function c() {
                    g = null, clearTimeout(g);
                    var e = t.selection.getRange(),
                        i = e.contains(p.row, p.column);
                    !e.isEmpty() && i || (t.selection.moveToPosition(p), t.selection.selectWord()), w = "wait", s()
                }
                var l, h, u, d, g, f, p, m, v, w = "scroll",
                    b = 0,
                    y = 0,
                    C = 0,
                    S = 0;
                r.addListener(e, "contextmenu", (function(e) {
                    m && t.textInput.getElement().focus()
                })), r.addListener(e, "touchstart", (function(e) {
                    var i = e.touches;
                    if (g || i.length > 1) return clearTimeout(g), g = null, u = -1, void(w = "zoom");
                    m = t.$mouseHandler.isMousePressed = !0;
                    var r = t.renderer.layerConfig.lineHeight,
                        o = t.renderer.layerConfig.lineHeight,
                        s = e.timeStamp;
                    d = s;
                    var a = i[0],
                        f = a.clientX,
                        v = a.clientY;
                    Math.abs(l - f) + Math.abs(h - v) > r && (u = -1), l = e.clientX = f, h = e.clientY = v, C = S = 0;
                    var k = new n(e, t);
                    if (p = k.getDocumentPosition(), s - u < 500 && 1 == i.length && !b) y++, e.preventDefault(), e.button = 0,
                        function() {
                            g = null, clearTimeout(g), t.selection.moveToPosition(p);
                            var e = y >= 2 ? t.selection.getLineRange(p.row) : t.session.getBracketRange(p);
                            e && !e.isEmpty() ? t.selection.setRange(e) : t.selection.selectWord(), w = "wait"
                        }();
                    else {
                        y = 0;
                        var x = t.selection.cursor,
                            $ = t.selection.isEmpty() ? x : t.selection.anchor,
                            A = t.renderer.$cursorLayer.getPixelPosition(x, !0),
                            E = t.renderer.$cursorLayer.getPixelPosition($, !0),
                            L = t.renderer.scroller.getBoundingClientRect(),
                            R = function(e, t) {
                                return (e /= o) * e + (t = t / r - .75) * t
                            };
                        if (e.clientX < L.left) return void(w = "zoom");
                        var _ = R(e.clientX - L.left - A.left, e.clientY - L.top - A.top),
                            T = R(e.clientX - L.left - E.left, e.clientY - L.top - E.top);
                        _ < 3.5 && T < 3.5 && (w = _ > T ? "cursor" : "anchor"), w = T < 3.5 ? "anchor" : _ < 3.5 ? "cursor" : "scroll", g = setTimeout(c, 450)
                    }
                    u = s
                })), r.addListener(e, "touchend", (function(e) {
                    m = t.$mouseHandler.isMousePressed = !1, f && clearInterval(f), "zoom" == w ? (w = "", b = 0) : g ? (t.selection.moveToPosition(p), b = 0, s()) : "scroll" == w ? (b += 60, f = setInterval((function() {
                        b-- <= 0 && (clearInterval(f), f = null), Math.abs(C) < .01 && (C = 0), Math.abs(S) < .01 && (S = 0), b < 20 && (C *= .9), b < 20 && (S *= .9);
                        var e = t.session.getScrollTop();
                        t.renderer.scrollBy(10 * C, 10 * S), e == t.session.getScrollTop() && (b = 0)
                    }), 10), a()) : s(), clearTimeout(g), g = null
                })), r.addListener(e, "touchmove", (function(e) {
                    g && (clearTimeout(g), g = null);
                    var i = e.touches;
                    if (!(i.length > 1 || "zoom" == w)) {
                        var r = i[0],
                            o = l - r.clientX,
                            s = h - r.clientY;
                        if ("wait" == w) {
                            if (!(o * o + s * s > 4)) return e.preventDefault();
                            w = "cursor"
                        }
                        l = r.clientX, h = r.clientY, e.clientX = r.clientX, e.clientY = r.clientY;
                        var a = e.timeStamp,
                            c = a - d;
                        if (d = a, "scroll" == w) {
                            var u = new n(e, t);
                            u.speed = 1, u.wheelX = o, u.wheelY = s, 10 * Math.abs(o) < Math.abs(s) && (o = 0), 10 * Math.abs(s) < Math.abs(o) && (s = 0), 0 != c && (C = o / c, S = s / c), t._emit("mousewheel", u), u.propagationStopped || (C = S = 0)
                        } else {
                            var f = new n(e, t).getDocumentPosition();
                            "cursor" == w ? t.selection.moveCursorToPosition(f) : "anchor" == w && t.selection.setSelectionAnchor(f.row, f.column), t.renderer.scrollCursorIntoView(f), e.preventDefault()
                        }
                    }
                }))
            }
        })), ace.define("ace/lib/net", [], (function(e, t, i) {
            "use strict";
            var n = e("./dom");
            t.get = function(e, t) {
                var i = new XMLHttpRequest;
                i.open("GET", e, !0), i.onreadystatechange = function() {
                    4 === i.readyState && t(i.responseText)
                }, i.send(null)
            }, t.loadScript = function(e, t) {
                var i = n.getDocumentHead(),
                    r = document.createElement("script");
                r.src = e, i.appendChild(r), r.onload = r.onreadystatechange = function(e, i) {
                    !i && r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (r = r.onload = r.onreadystatechange = null, i || t())
                }
            }, t.qualifyURL = function(e) {
                var t = document.createElement("a");
                return t.href = e, t.href
            }
        })), ace.define("ace/lib/event_emitter", [], (function(e, t, i) {
            "use strict";
            var n = {},
                r = function() {
                    this.propagationStopped = !0
                },
                o = function() {
                    this.defaultPrevented = !0
                };
            n._emit = n._dispatchEvent = function(e, t) {
                this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
                var i = this._eventRegistry[e] || [],
                    n = this._defaultHandlers[e];
                if (i.length || n) {
                    "object" == typeof t && t || (t = {}), t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = r), t.preventDefault || (t.preventDefault = o), i = i.slice();
                    for (var s = 0; s < i.length && (i[s](t, this), !t.propagationStopped); s++);
                    return n && !t.defaultPrevented ? n(t, this) : void 0
                }
            }, n._signal = function(e, t) {
                var i = (this._eventRegistry || {})[e];
                if (i) {
                    i = i.slice();
                    for (var n = 0; n < i.length; n++) i[n](t, this)
                }
            }, n.once = function(e, t) {
                var i = this;
                if (this.addEventListener(e, (function n() {
                        i.removeEventListener(e, n), t.apply(null, arguments)
                    })), !t) return new Promise((function(e) {
                    t = e
                }))
            }, n.setDefaultHandler = function(e, t) {
                var i = this._defaultHandlers;
                if (i || (i = this._defaultHandlers = {
                        _disabled_: {}
                    }), i[e]) {
                    var n = i[e],
                        r = i._disabled_[e];
                    r || (i._disabled_[e] = r = []), r.push(n);
                    var o = r.indexOf(t); - 1 != o && r.splice(o, 1)
                }
                i[e] = t
            }, n.removeDefaultHandler = function(e, t) {
                var i = this._defaultHandlers;
                if (i) {
                    var n = i._disabled_[e];
                    if (i[e] == t) n && this.setDefaultHandler(e, n.pop());
                    else if (n) {
                        var r = n.indexOf(t); - 1 != r && n.splice(r, 1)
                    }
                }
            }, n.on = n.addEventListener = function(e, t, i) {
                this._eventRegistry = this._eventRegistry || {};
                var n = this._eventRegistry[e];
                return n || (n = this._eventRegistry[e] = []), -1 == n.indexOf(t) && n[i ? "unshift" : "push"](t), t
            }, n.off = n.removeListener = n.removeEventListener = function(e, t) {
                this._eventRegistry = this._eventRegistry || {};
                var i = this._eventRegistry[e];
                if (i) {
                    var n = i.indexOf(t); - 1 !== n && i.splice(n, 1)
                }
            }, n.removeAllListeners = function(e) {
                this._eventRegistry && (this._eventRegistry[e] = [])
            }, t.EventEmitter = n
        })), ace.define("ace/lib/app_config", [], (function(e, t, i) {
            function n(e) {
                "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
            }

            function r(e, t) {
                var i = new Error(e);
                i.data = t, "object" == typeof console && console.error && console.error(i), setTimeout((function() {
                    throw i
                }))
            }
            var o = e("./oop"),
                s = e("./event_emitter").EventEmitter,
                a = {
                    setOptions: function(e) {
                        Object.keys(e).forEach((function(t) {
                            this.setOption(t, e[t])
                        }), this)
                    },
                    getOptions: function(e) {
                        var t = {};
                        if (e) Array.isArray(e) || (t = e, e = Object.keys(t));
                        else {
                            var i = this.$options;
                            e = Object.keys(i).filter((function(e) {
                                return !i[e].hidden
                            }))
                        }
                        return e.forEach((function(e) {
                            t[e] = this.getOption(e)
                        }), this), t
                    },
                    setOption: function(e, t) {
                        if (this["$" + e] !== t) {
                            var i = this.$options[e];
                            return i ? i.forwardTo ? this[i.forwardTo] && this[i.forwardTo].setOption(e, t) : (i.handlesSet || (this["$" + e] = t), void(i && i.set && i.set.call(this, t))) : n('misspelled option "' + e + '"')
                        }
                    },
                    getOption: function(e) {
                        var t = this.$options[e];
                        return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : n('misspelled option "' + e + '"')
                    }
                },
                c = function() {
                    this.$defaultOptions = {}
                };
            (function() {
                o.implement(this, s), this.defineOptions = function(e, t, i) {
                    return e.$options || (this.$defaultOptions[t] = e.$options = {}), Object.keys(i).forEach((function(t) {
                        var n = i[t];
                        "string" == typeof n && (n = {
                            forwardTo: n
                        }), n.name || (n.name = t), e.$options[n.name] = n, "initialValue" in n && (e["$" + n.name] = n.initialValue)
                    })), o.implement(e, a), this
                }, this.resetOptions = function(e) {
                    Object.keys(e.$options).forEach((function(t) {
                        var i = e.$options[t];
                        "value" in i && e.setOption(t, i.value)
                    }))
                }, this.setDefaultValue = function(e, t, i) {
                    if (!e) {
                        for (e in this.$defaultOptions)
                            if (this.$defaultOptions[e][t]) break;
                        if (!this.$defaultOptions[e][t]) return !1
                    }
                    var n = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
                    n[t] && (n.forwardTo ? this.setDefaultValue(n.forwardTo, t, i) : n[t].value = i)
                }, this.setDefaultValues = function(e, t) {
                    Object.keys(t).forEach((function(i) {
                        this.setDefaultValue(e, i, t[i])
                    }), this)
                }, this.warn = n, this.reportError = r
            }).call(c.prototype), t.AppConfig = c
        })), ace.define("ace/config", [], (function(e, t, n) {
            function r(e) {
                return e.replace(/-(.)/g, (function(e, t) {
                    return t.toUpperCase()
                }))
            }
            var o = e("./lib/lang"),
                s = (e("./lib/oop"), e("./lib/net")),
                a = e("./lib/app_config").AppConfig;
            n.exports = t = new a;
            var c = function() {
                    return this || "undefined" != typeof window && window
                }(),
                l = {
                    packaged: !1,
                    workerPath: null,
                    modePath: null,
                    themePath: null,
                    basePath: "",
                    suffix: ".js",
                    $moduleUrls: {},
                    loadWorkerFromBlob: !0,
                    sharedPopups: !1
                };
            t.get = function(e) {
                if (!l.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
                return l[e]
            }, t.set = function(e, t) {
                if (l.hasOwnProperty(e)) l[e] = t;
                else if (0 == this.setDefaultValue("", e, t)) throw new Error("Unknown config key: " + e)
            }, t.all = function() {
                return o.copyObject(l)
            }, t.$modes = {}, t.moduleUrl = function(e, t) {
                if (l.$moduleUrls[e]) return l.$moduleUrls[e];
                var i = e.split("/"),
                    n = "snippets" == (t = t || i[i.length - 2] || "") ? "/" : "-",
                    r = i[i.length - 1];
                if ("worker" == t && "-" == n) {
                    var o = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
                    r = r.replace(o, "")
                }(!r || r == t) && i.length > 1 && (r = i[i.length - 2]);
                var s = l[t + "Path"];
                return null == s ? s = l.basePath : "/" == n && (t = n = ""), s && "/" != s.slice(-1) && (s += "/"), s + t + n + r + this.get("suffix")
            }, t.setModuleUrl = function(e, t) {
                return l.$moduleUrls[e] = t
            }, t.$loading = {}, t.loadModule = function(i, n) {
                var r, o;
                Array.isArray(i) && (o = i[0], i = i[1]);
                try {
                    r = e(i)
                } catch (e) {}
                if (r && !t.$loading[i]) return n && n(r);
                if (t.$loading[i] || (t.$loading[i] = []), t.$loading[i].push(n), !(t.$loading[i].length > 1)) {
                    var a = function() {
                        e([i], (function(e) {
                            t._emit("load.module", {
                                name: i,
                                module: e
                            });
                            var n = t.$loading[i];
                            t.$loading[i] = null, n.forEach((function(t) {
                                t && t(e)
                            }))
                        }))
                    };
                    if (!t.get("packaged")) return a();
                    s.loadScript(t.moduleUrl(i, o), a), h()
                }
            };
            var h = function() {
                !l.basePath && !l.workerPath && !l.modePath && !l.themePath && !Object.keys(l.$moduleUrls).length && (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), h = function() {})
            };
            t.init = function(o) {
                if (c && c.document) {
                    l.packaged = o || e.packaged || n.packaged || c.define && i(86).packaged;
                    for (var s = {}, a = "", h = document.currentScript || document._currentScript, u = (h && h.ownerDocument || document).getElementsByTagName("script"), d = 0; d < u.length; d++) {
                        var g = u[d],
                            f = g.src || g.getAttribute("src");
                        if (f) {
                            for (var p = g.attributes, m = 0, v = p.length; m < v; m++) {
                                var w = p[m];
                                0 === w.name.indexOf("data-ace-") && (s[r(w.name.replace(/^data-ace-/, ""))] = w.value)
                            }
                            var b = f.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                            b && (a = b[1])
                        }
                    }
                    for (var y in a && (s.base = s.base || a, s.packaged = !0), s.basePath = s.base, s.workerPath = s.workerPath || s.base, s.modePath = s.modePath || s.base, s.themePath = s.themePath || s.base, delete s.base, s) void 0 !== s[y] && t.set(y, s[y])
                }
            }, t.version = "1.4.8"
        })), ace.define("ace/mouse/mouse_handler", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/event"),
                r = e("../lib/useragent"),
                o = e("./default_handlers").DefaultHandlers,
                s = e("./default_gutter_handler").GutterHandler,
                a = e("./mouse_event").MouseEvent,
                c = e("./dragdrop_handler").DragdropHandler,
                l = e("./touch_handler").addTouchListeners,
                h = e("../config"),
                u = function(e) {
                    var t = this;
                    this.editor = e, new o(this), new s(this), new c(this);
                    var i = function(t) {
                            (!document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement())) && window.focus(), e.focus()
                        },
                        a = e.renderer.getMouseEventTarget();
                    n.addListener(a, "click", this.onMouseEvent.bind(this, "click")), n.addListener(a, "mousemove", this.onMouseMove.bind(this, "mousemove")), n.addMultiMouseDownListener([a, e.renderer.scrollBarV && e.renderer.scrollBarV.inner, e.renderer.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent"), n.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel")), l(e.container, e);
                    var h = e.renderer.$gutter;
                    n.addListener(h, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), n.addListener(h, "click", this.onMouseEvent.bind(this, "gutterclick")), n.addListener(h, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), n.addListener(h, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), n.addListener(a, "mousedown", i), n.addListener(h, "mousedown", i), r.isIE && e.renderer.scrollBarV && (n.addListener(e.renderer.scrollBarV.element, "mousedown", i), n.addListener(e.renderer.scrollBarH.element, "mousedown", i)), e.on("mousemove", (function(i) {
                        if (!t.state && !t.$dragDelay && t.$dragEnabled) {
                            var n = e.renderer.screenToTextCoordinates(i.x, i.y),
                                r = e.session.selection.getRange(),
                                o = e.renderer;
                            !r.isEmpty() && r.insideStart(n.row, n.column) ? o.setCursorStyle("default") : o.setCursorStyle("")
                        }
                    }))
                };
            (function() {
                this.onMouseEvent = function(e, t) {
                    this.editor._emit(e, new a(t, this.editor))
                }, this.onMouseMove = function(e, t) {
                    var i = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
                    i && i.length && this.editor._emit(e, new a(t, this.editor))
                }, this.onMouseWheel = function(e, t) {
                    var i = new a(t, this.editor);
                    i.speed = 2 * this.$scrollSpeed, i.wheelX = t.wheelX, i.wheelY = t.wheelY, this.editor._emit(e, i)
                }, this.setState = function(e) {
                    this.state = e
                }, this.captureMouse = function(e, t) {
                    this.x = e.x, this.y = e.y, this.isMousePressed = !0;
                    var i = this.editor,
                        o = this.editor.renderer;
                    o.$isMousePressed = !0;
                    var s = this,
                        c = function(e) {
                            if (e) return r.isWebKit && !e.which && s.releaseMouse ? s.releaseMouse() : (s.x = e.clientX, s.y = e.clientY, t && t(e), s.mouseEvent = new a(e, s.editor), void(s.$mouseMoved = !0))
                        },
                        l = function(e) {
                            i.off("beforeEndOperation", u), clearInterval(d), h(), s[s.state + "End"] && s[s.state + "End"](e), s.state = "", s.isMousePressed = o.$isMousePressed = !1, o.$keepTextAreaAtCursor && o.$moveTextAreaToCursor(), s.$onCaptureMouseMove = s.releaseMouse = null, e && s.onMouseEvent("mouseup", e), i.endOperation()
                        },
                        h = function() {
                            s[s.state] && s[s.state](), s.$mouseMoved = !1
                        };
                    if (r.isOldIE && "dblclick" == e.domEvent.type) return setTimeout((function() {
                        l(e)
                    }));
                    var u = function(e) {
                        s.releaseMouse && i.curOp.command.name && i.curOp.selectionChanged && (s[s.state + "End"] && s[s.state + "End"](), s.state = "", s.releaseMouse())
                    };
                    i.on("beforeEndOperation", u), i.startOperation({
                        command: {
                            name: "mouse"
                        }
                    }), s.$onCaptureMouseMove = c, s.releaseMouse = n.capture(this.editor.container, c, l);
                    var d = setInterval(h, 20)
                }, this.releaseMouse = null, this.cancelContextMenu = function() {
                    var e = function(t) {
                        t && t.domEvent && "contextmenu" != t.domEvent.type || (this.editor.off("nativecontextmenu", e), t && t.domEvent && n.stopEvent(t.domEvent))
                    }.bind(this);
                    setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
                }
            }).call(u.prototype), h.defineOptions(u.prototype, "mouseHandler", {
                scrollSpeed: {
                    initialValue: 2
                },
                dragDelay: {
                    initialValue: r.isMac ? 150 : 0
                },
                dragEnabled: {
                    initialValue: !0
                },
                focusTimeout: {
                    initialValue: 0
                },
                tooltipFollowsMouse: {
                    initialValue: !0
                }
            }), t.MouseHandler = u
        })), ace.define("ace/mouse/fold_handler", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/dom");
            t.FoldHandler = function(e) {
                e.on("click", (function(t) {
                    var i = t.getDocumentPosition(),
                        r = e.session,
                        o = r.getFoldAt(i.row, i.column, 1);
                    o && (t.getAccelKey() ? r.removeFold(o) : r.expandFold(o), t.stop());
                    var s = t.domEvent && t.domEvent.target;
                    s && n.hasCssClass(s, "ace_inline_button") && n.hasCssClass(s, "ace_toggle_wrap") && (r.setOption("wrap", !r.getUseWrapMode()), e.renderer.scrollCursorIntoView())
                })), e.on("gutterclick", (function(t) {
                    if ("foldWidgets" == e.renderer.$gutterLayer.getRegion(t)) {
                        var i = t.getDocumentPosition().row,
                            n = e.session;
                        n.foldWidgets && n.foldWidgets[i] && e.session.onFoldWidgetClick(i, t), e.isFocused() || e.focus(), t.stop()
                    }
                })), e.on("gutterdblclick", (function(t) {
                    if ("foldWidgets" == e.renderer.$gutterLayer.getRegion(t)) {
                        var i = t.getDocumentPosition().row,
                            n = e.session,
                            r = n.getParentFoldRangeData(i, !0),
                            o = r.range || r.firstRange;
                        if (o) {
                            i = o.start.row;
                            var s = n.getFoldAt(i, n.getLine(i).length, 1);
                            s ? n.removeFold(s) : (n.addFold("...", o), e.renderer.scrollCursorIntoView({
                                row: o.start.row,
                                column: 0
                            }))
                        }
                        t.stop()
                    }
                }))
            }
        })), ace.define("ace/keyboard/keybinding", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/keys"),
                r = e("../lib/event"),
                o = function(e) {
                    this.$editor = e, this.$data = {
                        editor: e
                    }, this.$handlers = [], this.setDefaultHandler(e.commands)
                };
            (function() {
                this.setDefaultHandler = function(e) {
                    this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0)
                }, this.setKeyboardHandler = function(e) {
                    var t = this.$handlers;
                    if (t[t.length - 1] != e) {
                        for (; t[t.length - 1] && t[t.length - 1] != this.$defaultHandler;) this.removeKeyboardHandler(t[t.length - 1]);
                        this.addKeyboardHandler(e, 1)
                    }
                }, this.addKeyboardHandler = function(e, t) {
                    if (e) {
                        "function" == typeof e && !e.handleKeyboard && (e.handleKeyboard = e);
                        var i = this.$handlers.indexOf(e); - 1 != i && this.$handlers.splice(i, 1), null == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), -1 == i && e.attach && e.attach(this.$editor)
                    }
                }, this.removeKeyboardHandler = function(e) {
                    var t = this.$handlers.indexOf(e);
                    return -1 != t && (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
                }, this.getKeyboardHandler = function() {
                    return this.$handlers[this.$handlers.length - 1]
                }, this.getStatusText = function() {
                    var e = this.$data,
                        t = e.editor;
                    return this.$handlers.map((function(i) {
                        return i.getStatusText && i.getStatusText(t, e) || ""
                    })).filter(Boolean).join(" ")
                }, this.$callKeyboardHandlers = function(e, t, i, n) {
                    for (var o, s = !1, a = this.$editor.commands, c = this.$handlers.length; c-- && !((o = this.$handlers[c].handleKeyboard(this.$data, e, t, i, n)) && o.command && ((s = "null" == o.command || a.exec(o.command, this.$editor, o.args, n)) && n && -1 != e && 1 != o.passEvent && 1 != o.command.passEvent && r.stopEvent(n), s)););
                    return !s && -1 == e && (o = {
                        command: "insertstring"
                    }, s = a.exec("insertstring", this.$editor, t)), s && this.$editor._signal && this.$editor._signal("keyboardActivity", o), s
                }, this.onCommandKey = function(e, t, i) {
                    var r = n.keyCodeToString(i);
                    return this.$callKeyboardHandlers(t, r, i, e)
                }, this.onTextInput = function(e) {
                    return this.$callKeyboardHandlers(-1, e)
                }
            }).call(o.prototype), t.KeyBinding = o
        })), ace.define("ace/lib/bidiutil", [], (function(e, t, i) {
            "use strict";

            function n(e, t, i, n) {
                var r = a ? g : d,
                    f = null,
                    p = null,
                    m = null,
                    v = 0,
                    w = null,
                    b = -1,
                    S = null,
                    x = null,
                    $ = [];
                if (!n)
                    for (S = 0, n = []; S < i; S++) n[S] = s(e[S]);
                for (c = a, l = !1, !1, h = !1, u = !1, x = 0; x < i; x++) {
                    if (f = v, $[x] = p = o(e, n, $, x), w = 240 & (v = r[f][p]), v &= 15, t[x] = m = r[v][5], w > 0)
                        if (16 == w) {
                            for (S = b; S < x; S++) t[S] = 1;
                            b = -1
                        } else b = -1;
                    if (r[v][6]) - 1 == b && (b = x);
                    else if (b > -1) {
                        for (S = b; S < x; S++) t[S] = m;
                        b = -1
                    }
                    n[x] == y && (t[x] = 0), c |= m
                }
                if (u)
                    for (S = 0; S < i; S++)
                        if (n[S] == C) {
                            t[S] = a;
                            for (var A = S - 1; A >= 0 && n[A] == k; A--) t[A] = a
                        }
            }

            function r(e, t, i) {
                if (!(c < e))
                    if (1 != e || a != f || h)
                        for (var n, r, o, s, l = i.length, u = 0; u < l;) {
                            if (t[u] >= e) {
                                for (n = u + 1; n < l && t[n] >= e;) n++;
                                for (r = u, o = n - 1; r < o; r++, o--) s = i[r], i[r] = i[o], i[o] = s;
                                u = n
                            }
                            u++
                        } else i.reverse()
            }

            function o(e, t, i, n) {
                var r, o, s, c, d = t[n];
                switch (d) {
                    case p:
                    case m:
                        l = !1;
                    case b:
                    case w:
                        return d;
                    case v:
                        return l ? w : v;
                    case S:
                        return l = !0, !0, m;
                    case k:
                        return b;
                    case x:
                        return n < 1 || n + 1 >= t.length || (r = i[n - 1]) != v && r != w || (o = t[n + 1]) != v && o != w ? b : (l && (o = w), o == r ? o : b);
                    case $:
                        return (r = n > 0 ? i[n - 1] : y) == v && n + 1 < t.length && t[n + 1] == v ? v : b;
                    case A:
                        if (n > 0 && i[n - 1] == v) return v;
                        if (l) return b;
                        for (c = n + 1, s = t.length; c < s && t[c] == A;) c++;
                        return c < s && t[c] == v ? v : b;
                    case E:
                        for (s = t.length, c = n + 1; c < s && t[c] == E;) c++;
                        if (c < s) {
                            var g = e[n],
                                f = g >= 1425 && g <= 2303 || 64286 == g;
                            if (r = t[c], f && (r == m || r == S)) return m
                        }
                        return n < 1 || (r = t[n - 1]) == y ? b : i[n - 1];
                    case y:
                        return l = !1, h = !0, a;
                    case C:
                        return u = !0, b;
                    case L:
                    case R:
                    case T:
                    case M:
                    case _:
                        l = !1;
                    case O:
                        return b
                }
            }

            function s(e) {
                var t = e.charCodeAt(0),
                    i = t >> 8;
                return 0 == i ? t > 191 ? p : F[t] : 5 == i ? /[\u0591-\u05f4]/.test(e) ? m : p : 6 == i ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e) ? E : /[\u0660-\u0669\u066b-\u066c]/.test(e) ? w : 1642 == t ? A : /[\u06f0-\u06f9]/.test(e) ? v : S : 32 == i && t <= 8287 ? I[255 & t] : 254 == i && t >= 65136 ? S : b
            }
            var a = 0,
                c = 0,
                l = !1,
                h = !1,
                u = !1,
                d = [
                    [0, 3, 0, 1, 0, 0, 0],
                    [0, 3, 0, 1, 2, 2, 0],
                    [0, 3, 0, 17, 2, 0, 1],
                    [0, 3, 5, 5, 4, 1, 0],
                    [0, 3, 21, 21, 4, 0, 1],
                    [0, 3, 5, 5, 4, 2, 0]
                ],
                g = [
                    [2, 0, 1, 1, 0, 1, 0],
                    [2, 0, 1, 1, 0, 2, 0],
                    [2, 0, 2, 1, 3, 2, 0],
                    [2, 0, 2, 33, 3, 1, 1]
                ],
                f = 1,
                p = 0,
                m = 1,
                v = 2,
                w = 3,
                b = 4,
                y = 5,
                C = 6,
                S = 7,
                k = 8,
                x = 9,
                $ = 10,
                A = 11,
                E = 12,
                L = 13,
                R = 14,
                _ = 15,
                T = 16,
                M = 17,
                O = 18,
                F = [O, O, O, O, O, O, O, O, O, C, y, C, k, y, O, O, O, O, O, O, O, O, O, O, O, O, O, O, y, y, y, C, k, b, b, A, A, A, b, b, b, b, b, $, x, $, x, x, v, v, v, v, v, v, v, v, v, v, x, b, b, b, b, b, b, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, b, b, b, b, b, b, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, b, b, b, b, O, O, O, O, O, O, y, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, x, b, A, A, A, A, b, b, b, b, p, b, b, O, b, b, A, A, v, v, b, p, b, b, b, v, p, b, b, b, b, b],
                I = [k, k, k, k, k, k, k, k, k, k, k, O, O, O, p, m, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, k, y, L, R, _, T, M, x, A, A, A, A, A, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, x, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, k];
            t.L = p, t.R = m, t.EN = v, t.ON_R = 3, t.AN = 4, t.R_H = 5, t.B = 6, t.RLE = 7, t.DOT = "·", t.doBidiReorder = function(e, i, o) {
                if (e.length < 2) return {};
                var s = e.split(""),
                    c = new Array(s.length),
                    l = new Array(s.length),
                    h = [];
                a = o ? f : 0, n(s, h, s.length, i);
                for (var u = 0; u < c.length; c[u] = u, u++);
                r(2, h, c), r(1, h, c);
                for (u = 0; u < c.length - 1; u++) i[u] === w ? h[u] = t.AN : h[u] === m && (i[u] > S && i[u] < L || i[u] === b || i[u] === O) ? h[u] = t.ON_R : u > 0 && "ل" === s[u - 1] && /\u0622|\u0623|\u0625|\u0627/.test(s[u]) && (h[u - 1] = h[u] = t.R_H, u++);
                s[s.length - 1] === t.DOT && (h[s.length - 1] = t.B), "‫" === s[0] && (h[0] = t.RLE);
                for (u = 0; u < c.length; u++) l[u] = h[c[u]];
                return {
                    logicalFromVisual: c,
                    bidiLevels: l
                }
            }, t.hasBidiCharacters = function(e, t) {
                for (var i = !1, n = 0; n < e.length; n++) t[n] = s(e.charAt(n)), !i && (t[n] == m || t[n] == S || t[n] == w) && (i = !0);
                return i
            }, t.getVisualFromLogicalIdx = function(e, t) {
                for (var i = 0; i < t.logicalFromVisual.length; i++)
                    if (t.logicalFromVisual[i] == e) return i;
                return 0
            }
        })), ace.define("ace/bidihandler", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/bidiutil"),
                r = e("./lib/lang"),
                o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,
                s = function(e) {
                    this.session = e, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = n, this.charWidths = [], this.EOL = "¬", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "¶", this.RLE = "‫", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = o.test(e.getValue())
                };
            (function() {
                this.isBidiRow = function(e, t, i) {
                    return !!this.seenBidi && (e !== this.currentRow && (this.currentRow = e, this.updateRowLine(t, i), this.updateBidiMap()), this.bidiMap.bidiLevels)
                }, this.onChange = function(e) {
                    this.seenBidi ? this.currentRow = null : "insert" == e.action && o.test(e.lines.join("\n")) && (this.seenBidi = !0, this.currentRow = null)
                }, this.getDocumentRow = function() {
                    var e = 0,
                        t = this.session.$screenRowCache;
                    if (t.length) {
                        var i = this.session.$getRowCacheIndex(t, this.currentRow);
                        i >= 0 && (e = this.session.$docRowCache[i])
                    }
                    return e
                }, this.getSplitIndex = function() {
                    var e = 0,
                        t = this.session.$screenRowCache;
                    if (t.length)
                        for (var i, n = this.session.$getRowCacheIndex(t, this.currentRow); this.currentRow - e > 0 && (i = this.session.$getRowCacheIndex(t, this.currentRow - e - 1)) === n;) n = i, e++;
                    else e = this.currentRow;
                    return e
                }, this.updateRowLine = function(e, t) {
                    void 0 === e && (e = this.getDocumentRow());
                    var i = e === this.session.getLength() - 1 ? this.EOF : this.EOL;
                    if (this.wrapIndent = 0, this.line = this.session.getLine(e), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
                        var o = this.session.$wrapData[e];
                        o && (void 0 === t && (t = this.getSplitIndex()), t > 0 && o.length ? (this.wrapIndent = o.indent, this.wrapOffset = this.wrapIndent * this.charWidths[n.L], this.line = t < o.length ? this.line.substring(o[t - 1], o[t]) : this.line.substring(o[o.length - 1])) : this.line = this.line.substring(0, o[t])), t == o.length && (this.line += this.showInvisibles ? i : n.DOT)
                    } else this.line += this.showInvisibles ? i : n.DOT;
                    var s, a = this.session,
                        c = 0;
                    this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, (function(e, t) {
                        return "\t" === e || a.isFullWidth(e.charCodeAt(0)) ? (s = "\t" === e ? a.getScreenTabSize(t + c) : 2, c += s - 1, r.stringRepeat(n.DOT, s)) : e
                    })), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == n.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width)
                }, this.updateBidiMap = function() {
                    var e = [];
                    n.hasBidiCharacters(this.line, e) || this.isRtlDir ? this.bidiMap = n.doBidiReorder(this.line, e, this.isRtlDir) : this.bidiMap = {}
                }, this.markAsDirty = function() {
                    this.currentRow = null
                }, this.updateCharacterWidths = function(e) {
                    if (this.characterWidth !== e.$characterSize.width) {
                        this.fontMetrics = e;
                        var t = this.characterWidth = e.$characterSize.width,
                            i = e.$measureCharWidth("ה");
                        this.charWidths[n.L] = this.charWidths[n.EN] = this.charWidths[n.ON_R] = t, this.charWidths[n.R] = this.charWidths[n.AN] = i, this.charWidths[n.R_H] = .45 * i, this.charWidths[n.B] = this.charWidths[n.RLE] = 0, this.currentRow = null
                    }
                }, this.setShowInvisibles = function(e) {
                    this.showInvisibles = e, this.currentRow = null
                }, this.setEolChar = function(e) {
                    this.EOL = e
                }, this.setContentWidth = function(e) {
                    this.contentWidth = e
                }, this.isRtlLine = function(e) {
                    return !!this.$isRtl || (null != e ? this.session.getLine(e).charAt(0) == this.RLE : this.isRtlDir)
                }, this.setRtlDirection = function(e, t) {
                    for (var i = e.getCursorPosition(), n = e.selection.getSelectionAnchor().row; n <= i.row; n++) t || e.session.getLine(n).charAt(0) !== e.session.$bidiHandler.RLE ? t && e.session.getLine(n).charAt(0) !== e.session.$bidiHandler.RLE && e.session.doc.insert({
                        column: 0,
                        row: n
                    }, e.session.$bidiHandler.RLE) : e.session.doc.removeInLine(n, 0, 1)
                }, this.getPosLeft = function(e) {
                    e -= this.wrapIndent;
                    var t = this.line.charAt(0) === this.RLE ? 1 : 0,
                        i = e > t ? this.session.getOverwrite() ? e : e - 1 : t,
                        r = n.getVisualFromLogicalIdx(i, this.bidiMap),
                        o = this.bidiMap.bidiLevels,
                        s = 0;
                    !this.session.getOverwrite() && e <= t && o[r] % 2 != 0 && r++;
                    for (var a = 0; a < r; a++) s += this.charWidths[o[a]];
                    return !this.session.getOverwrite() && e > t && o[r] % 2 == 0 && (s += this.charWidths[o[r]]), this.wrapIndent && (s += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (s += this.rtlLineOffset), s
                }, this.getSelections = function(e, t) {
                    var i, n = this.bidiMap,
                        r = n.bidiLevels,
                        o = [],
                        s = 0,
                        a = Math.min(e, t) - this.wrapIndent,
                        c = Math.max(e, t) - this.wrapIndent,
                        l = !1,
                        h = !1,
                        u = 0;
                    this.wrapIndent && (s += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
                    for (var d, g = 0; g < r.length; g++) d = n.logicalFromVisual[g], i = r[g], (l = d >= a && d < c) && !h ? u = s : !l && h && o.push({
                        left: u,
                        width: s - u
                    }), s += this.charWidths[i], h = l;
                    if (l && g === r.length && o.push({
                            left: u,
                            width: s - u
                        }), this.isRtlDir)
                        for (var f = 0; f < o.length; f++) o[f].left += this.rtlLineOffset;
                    return o
                }, this.offsetToCol = function(e) {
                    this.isRtlDir && (e -= this.rtlLineOffset);
                    var t = 0,
                        i = (e = Math.max(e, 0), 0),
                        n = 0,
                        r = this.bidiMap.bidiLevels,
                        o = this.charWidths[r[n]];
                    for (this.wrapIndent && (e -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); e > i + o / 2;) {
                        if (i += o, n === r.length - 1) {
                            o = 0;
                            break
                        }
                        o = this.charWidths[r[++n]]
                    }
                    return n > 0 && r[n - 1] % 2 != 0 && r[n] % 2 == 0 ? (e < i && n--, t = this.bidiMap.logicalFromVisual[n]) : n > 0 && r[n - 1] % 2 == 0 && r[n] % 2 != 0 ? t = 1 + (e > i ? this.bidiMap.logicalFromVisual[n] : this.bidiMap.logicalFromVisual[n - 1]) : this.isRtlDir && n === r.length - 1 && 0 === o && r[n - 1] % 2 == 0 || !this.isRtlDir && 0 === n && r[n] % 2 != 0 ? t = 1 + this.bidiMap.logicalFromVisual[n] : (n > 0 && r[n - 1] % 2 != 0 && 0 !== o && n--, t = this.bidiMap.logicalFromVisual[n]), 0 === t && this.isRtlDir && t++, t + this.wrapIndent
                }
            }).call(s.prototype), t.BidiHandler = s
        })), ace.define("ace/selection", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/oop"),
                r = e("./lib/lang"),
                o = e("./lib/event_emitter").EventEmitter,
                s = e("./range").Range,
                a = function(e) {
                    this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
                    var t = this;
                    this.cursor.on("change", (function(e) {
                        t.$cursorChanged = !0, t.$silent || t._emit("changeCursor"), !t.$isEmpty && !t.$silent && t._emit("changeSelection"), !t.$keepDesiredColumnOnChange && e.old.column != e.value.column && (t.$desiredColumn = null)
                    })), this.anchor.on("change", (function() {
                        t.$anchorChanged = !0, !t.$isEmpty && !t.$silent && t._emit("changeSelection")
                    }))
                };
            (function() {
                n.implement(this, o), this.isEmpty = function() {
                    return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
                }, this.isMultiLine = function() {
                    return !this.$isEmpty && this.anchor.row != this.cursor.row
                }, this.getCursor = function() {
                    return this.lead.getPosition()
                }, this.setSelectionAnchor = function(e, t) {
                    this.$isEmpty = !1, this.anchor.setPosition(e, t)
                }, this.getAnchor = this.getSelectionAnchor = function() {
                    return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
                }, this.getSelectionLead = function() {
                    return this.lead.getPosition()
                }, this.isBackwards = function() {
                    var e = this.anchor,
                        t = this.lead;
                    return e.row > t.row || e.row == t.row && e.column > t.column
                }, this.getRange = function() {
                    var e = this.anchor,
                        t = this.lead;
                    return this.$isEmpty ? s.fromPoints(t, t) : this.isBackwards() ? s.fromPoints(t, e) : s.fromPoints(e, t)
                }, this.clearSelection = function() {
                    this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
                }, this.selectAll = function() {
                    this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE)
                }, this.setRange = this.setSelectionRange = function(e, t) {
                    var i = t ? e.end : e.start,
                        n = t ? e.start : e.end;
                    this.$setSelection(i.row, i.column, n.row, n.column)
                }, this.$setSelection = function(e, t, i, n) {
                    if (!this.$silent) {
                        var r = this.$isEmpty,
                            o = this.inMultiSelectMode;
                        this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(e, t), this.cursor.setPosition(i, n), this.$isEmpty = !s.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || r != this.$isEmpty || o) && this._emit("changeSelection")
                    }
                }, this.$moveSelection = function(e) {
                    var t = this.lead;
                    this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
                }, this.selectTo = function(e, t) {
                    this.$moveSelection((function() {
                        this.moveCursorTo(e, t)
                    }))
                }, this.selectToPosition = function(e) {
                    this.$moveSelection((function() {
                        this.moveCursorToPosition(e)
                    }))
                }, this.moveTo = function(e, t) {
                    this.clearSelection(), this.moveCursorTo(e, t)
                }, this.moveToPosition = function(e) {
                    this.clearSelection(), this.moveCursorToPosition(e)
                }, this.selectUp = function() {
                    this.$moveSelection(this.moveCursorUp)
                }, this.selectDown = function() {
                    this.$moveSelection(this.moveCursorDown)
                }, this.selectRight = function() {
                    this.$moveSelection(this.moveCursorRight)
                }, this.selectLeft = function() {
                    this.$moveSelection(this.moveCursorLeft)
                }, this.selectLineStart = function() {
                    this.$moveSelection(this.moveCursorLineStart)
                }, this.selectLineEnd = function() {
                    this.$moveSelection(this.moveCursorLineEnd)
                }, this.selectFileEnd = function() {
                    this.$moveSelection(this.moveCursorFileEnd)
                }, this.selectFileStart = function() {
                    this.$moveSelection(this.moveCursorFileStart)
                }, this.selectWordRight = function() {
                    this.$moveSelection(this.moveCursorWordRight)
                }, this.selectWordLeft = function() {
                    this.$moveSelection(this.moveCursorWordLeft)
                }, this.getWordRange = function(e, t) {
                    if (void 0 === t) {
                        var i = e || this.lead;
                        e = i.row, t = i.column
                    }
                    return this.session.getWordRange(e, t)
                }, this.selectWord = function() {
                    this.setSelectionRange(this.getWordRange())
                }, this.selectAWord = function() {
                    var e = this.getCursor(),
                        t = this.session.getAWordRange(e.row, e.column);
                    this.setSelectionRange(t)
                }, this.getLineRange = function(e, t) {
                    var i, n = "number" == typeof e ? e : this.lead.row,
                        r = this.session.getFoldLine(n);
                    return r ? (n = r.start.row, i = r.end.row) : i = n, !0 === t ? new s(n, 0, i, this.session.getLine(i).length) : new s(n, 0, i + 1, 0)
                }, this.selectLine = function() {
                    this.setSelectionRange(this.getLineRange())
                }, this.moveCursorUp = function() {
                    this.moveCursorBy(-1, 0)
                }, this.moveCursorDown = function() {
                    this.moveCursorBy(1, 0)
                }, this.wouldMoveIntoSoftTab = function(e, t, i) {
                    var n = e.column,
                        r = e.column + t;
                    return i < 0 && (n = e.column - t, r = e.column), this.session.isTabStop(e) && this.doc.getLine(e.row).slice(n, r).split(" ").length - 1 == t
                }, this.moveCursorLeft = function() {
                    var e, t = this.lead.getPosition();
                    if (e = this.session.getFoldAt(t.row, t.column, -1)) this.moveCursorTo(e.start.row, e.start.column);
                    else if (0 === t.column) t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length);
                    else {
                        var i = this.session.getTabSize();
                        this.wouldMoveIntoSoftTab(t, i, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -i) : this.moveCursorBy(0, -1)
                    }
                }, this.moveCursorRight = function() {
                    var e, t = this.lead.getPosition();
                    if (e = this.session.getFoldAt(t.row, t.column, 1)) this.moveCursorTo(e.end.row, e.end.column);
                    else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
                    else {
                        var i = this.session.getTabSize();
                        t = this.lead;
                        this.wouldMoveIntoSoftTab(t, i, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, i) : this.moveCursorBy(0, 1)
                    }
                }, this.moveCursorLineStart = function() {
                    var e = this.lead.row,
                        t = this.lead.column,
                        i = this.session.documentToScreenRow(e, t),
                        n = this.session.screenToDocumentPosition(i, 0),
                        r = this.session.getDisplayLine(e, null, n.row, n.column).match(/^\s*/);
                    r[0].length != t && !this.session.$useEmacsStyleLineStart && (n.column += r[0].length), this.moveCursorToPosition(n)
                }, this.moveCursorLineEnd = function() {
                    var e = this.lead,
                        t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
                    if (this.lead.column == t.column) {
                        var i = this.session.getLine(t.row);
                        if (t.column == i.length) {
                            var n = i.search(/\s+$/);
                            n > 0 && (t.column = n)
                        }
                    }
                    this.moveCursorTo(t.row, t.column)
                }, this.moveCursorFileEnd = function() {
                    var e = this.doc.getLength() - 1,
                        t = this.doc.getLine(e).length;
                    this.moveCursorTo(e, t)
                }, this.moveCursorFileStart = function() {
                    this.moveCursorTo(0, 0)
                }, this.moveCursorLongWordRight = function() {
                    var e = this.lead.row,
                        t = this.lead.column,
                        i = this.doc.getLine(e),
                        n = i.substring(t);
                    this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
                    var r = this.session.getFoldAt(e, t, 1);
                    if (r) this.moveCursorTo(r.end.row, r.end.column);
                    else {
                        if (this.session.nonTokenRe.exec(n) && (t += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, n = i.substring(t)), t >= i.length) return this.moveCursorTo(e, i.length), this.moveCursorRight(), void(e < this.doc.getLength() - 1 && this.moveCursorWordRight());
                        this.session.tokenRe.exec(n) && (t += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(e, t)
                    }
                }, this.moveCursorLongWordLeft = function() {
                    var e, t = this.lead.row,
                        i = this.lead.column;
                    if (e = this.session.getFoldAt(t, i, -1)) this.moveCursorTo(e.start.row, e.start.column);
                    else {
                        var n = this.session.getFoldStringAt(t, i, -1);
                        null == n && (n = this.doc.getLine(t).substring(0, i));
                        var o = r.stringReverse(n);
                        if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(o) && (i -= this.session.nonTokenRe.lastIndex, o = o.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), i <= 0) return this.moveCursorTo(t, 0), this.moveCursorLeft(), void(t > 0 && this.moveCursorWordLeft());
                        this.session.tokenRe.exec(o) && (i -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, i)
                    }
                }, this.$shortWordEndIndex = function(e) {
                    var t, i = 0,
                        n = /\s/,
                        r = this.session.tokenRe;
                    if (r.lastIndex = 0, this.session.tokenRe.exec(e)) i = this.session.tokenRe.lastIndex;
                    else {
                        for (;
                            (t = e[i]) && n.test(t);) i++;
                        if (i < 1)
                            for (r.lastIndex = 0;
                                (t = e[i]) && !r.test(t);)
                                if (r.lastIndex = 0, i++, n.test(t)) {
                                    if (i > 2) {
                                        i--;
                                        break
                                    }
                                    for (;
                                        (t = e[i]) && n.test(t);) i++;
                                    if (i > 2) break
                                }
                    }
                    return r.lastIndex = 0, i
                }, this.moveCursorShortWordRight = function() {
                    var e = this.lead.row,
                        t = this.lead.column,
                        i = this.doc.getLine(e),
                        n = i.substring(t),
                        r = this.session.getFoldAt(e, t, 1);
                    if (r) return this.moveCursorTo(r.end.row, r.end.column);
                    if (t == i.length) {
                        var o = this.doc.getLength();
                        do {
                            e++, n = this.doc.getLine(e)
                        } while (e < o && /^\s*$/.test(n));
                        /^\s+/.test(n) || (n = ""), t = 0
                    }
                    var s = this.$shortWordEndIndex(n);
                    this.moveCursorTo(e, t + s)
                }, this.moveCursorShortWordLeft = function() {
                    var e, t = this.lead.row,
                        i = this.lead.column;
                    if (e = this.session.getFoldAt(t, i, -1)) return this.moveCursorTo(e.start.row, e.start.column);
                    var n = this.session.getLine(t).substring(0, i);
                    if (0 === i) {
                        do {
                            t--, n = this.doc.getLine(t)
                        } while (t > 0 && /^\s*$/.test(n));
                        i = n.length, /\s+$/.test(n) || (n = "")
                    }
                    var o = r.stringReverse(n),
                        s = this.$shortWordEndIndex(o);
                    return this.moveCursorTo(t, i - s)
                }, this.moveCursorWordRight = function() {
                    this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
                }, this.moveCursorWordLeft = function() {
                    this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
                }, this.moveCursorBy = function(e, t) {
                    var i, n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
                    if (0 === t && (0 !== e && (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row) ? (i = this.session.$bidiHandler.getPosLeft(n.column), n.column = Math.round(i / this.session.$bidiHandler.charWidths[0])) : i = n.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column), 0 != e && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
                        var r = this.session.lineWidgets[this.lead.row];
                        e < 0 ? e -= r.rowsAbove || 0 : e > 0 && (e += r.rowCount - (r.rowsAbove || 0))
                    }
                    var o = this.session.screenToDocumentPosition(n.row + e, n.column, i);
                    0 !== e && 0 === t && o.row === this.lead.row && (o.column, this.lead.column), this.moveCursorTo(o.row, o.column + t, 0 === t)
                }, this.moveCursorToPosition = function(e) {
                    this.moveCursorTo(e.row, e.column)
                }, this.moveCursorTo = function(e, t, i) {
                    var n = this.session.getFoldAt(e, t, 1);
                    n && (e = n.start.row, t = n.start.column), this.$keepDesiredColumnOnChange = !0;
                    var r = this.session.getLine(e);
                    /[\uDC00-\uDFFF]/.test(r.charAt(t)) && r.charAt(t - 1) && (this.lead.row == e && this.lead.column == t + 1 ? t -= 1 : t += 1), this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, i || (this.$desiredColumn = null)
                }, this.moveCursorToScreen = function(e, t, i) {
                    var n = this.session.screenToDocumentPosition(e, t);
                    this.moveCursorTo(n.row, n.column, i)
                }, this.detach = function() {
                    this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
                }, this.fromOrientedRange = function(e) {
                    this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
                }, this.toOrientedRange = function(e) {
                    var t = this.getRange();
                    return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
                }, this.getRangeOfMovements = function(e) {
                    var t = this.getCursor();
                    try {
                        e(this);
                        var i = this.getCursor();
                        return s.fromPoints(t, i)
                    } catch (e) {
                        return s.fromPoints(t, t)
                    } finally {
                        this.moveCursorToPosition(t)
                    }
                }, this.toJSON = function() {
                    if (this.rangeCount) var e = this.ranges.map((function(e) {
                        var t = e.clone();
                        return t.isBackwards = e.cursor == e.start, t
                    }));
                    else(e = this.getRange()).isBackwards = this.isBackwards();
                    return e
                }, this.fromJSON = function(e) {
                    if (null == e.start) {
                        if (this.rangeList && e.length > 1) {
                            this.toSingleRange(e[0]);
                            for (var t = e.length; t--;) {
                                var i = s.fromPoints(e[t].start, e[t].end);
                                e[t].isBackwards && (i.cursor = i.start), this.addRange(i, !0)
                            }
                            return
                        }
                        e = e[0]
                    }
                    this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards)
                }, this.isEqual = function(e) {
                    if ((e.length || this.rangeCount) && e.length != this.rangeCount) return !1;
                    if (!e.length || !this.ranges) return this.getRange().isEqual(e);
                    for (var t = this.ranges.length; t--;)
                        if (!this.ranges[t].isEqual(e[t])) return !1;
                    return !0
                }
            }).call(a.prototype), t.Selection = a
        })), ace.define("ace/tokenizer", [], (function(e, t, i) {
            "use strict";
            var n = e("./config"),
                r = 2e3,
                o = function(e) {
                    for (var t in this.states = e, this.regExps = {}, this.matchMappings = {}, this.states) {
                        for (var i = this.states[t], n = [], r = 0, o = this.matchMappings[t] = {
                                defaultToken: "text"
                            }, s = "g", a = [], c = 0; c < i.length; c++) {
                            var l = i[c];
                            if (l.defaultToken && (o.defaultToken = l.defaultToken), l.caseInsensitive && (s = "gi"), null != l.regex) {
                                l.regex instanceof RegExp && (l.regex = l.regex.toString().slice(1, -1));
                                var h = l.regex,
                                    u = new RegExp("(?:(" + h + ")|(.))").exec("a").length - 2;
                                Array.isArray(l.token) ? 1 == l.token.length || 1 == u ? l.token = l.token[0] : u - 1 != l.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                                    rule: l,
                                    groupCount: u - 1
                                }), l.token = l.token[0]) : (l.tokenArray = l.token, l.token = null, l.onMatch = this.$arrayTokens) : "function" == typeof l.token && !l.onMatch && (l.onMatch = u > 1 ? this.$applyToken : l.token), u > 1 && (/\\\d/.test(l.regex) ? h = l.regex.replace(/\\([0-9]+)/g, (function(e, t) {
                                    return "\\" + (parseInt(t, 10) + r + 1)
                                })) : (u = 1, h = this.removeCapturingGroups(l.regex)), !l.splitRegex && "string" != typeof l.token && a.push(l)), o[r] = c, r += u, n.push(h), l.onMatch || (l.onMatch = null)
                            }
                        }
                        n.length || (o[0] = 0, n.push("$")), a.forEach((function(e) {
                            e.splitRegex = this.createSplitterRegexp(e.regex, s)
                        }), this), this.regExps[t] = new RegExp("(" + n.join(")|(") + ")|($)", s)
                    }
                };
            (function() {
                this.$setMaxTokenCount = function(e) {
                    r = 0 | e
                }, this.$applyToken = function(e) {
                    var t = this.splitRegex.exec(e).slice(1),
                        i = this.token.apply(this, t);
                    if ("string" == typeof i) return [{
                        type: i,
                        value: e
                    }];
                    for (var n = [], r = 0, o = i.length; r < o; r++) t[r] && (n[n.length] = {
                        type: i[r],
                        value: t[r]
                    });
                    return n
                }, this.$arrayTokens = function(e) {
                    if (!e) return [];
                    var t = this.splitRegex.exec(e);
                    if (!t) return "text";
                    for (var i = [], n = this.tokenArray, r = 0, o = n.length; r < o; r++) t[r + 1] && (i[i.length] = {
                        type: n[r],
                        value: t[r + 1]
                    });
                    return i
                }, this.removeCapturingGroups = function(e) {
                    return e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g, (function(e, t) {
                        return t ? "(?:" : e
                    }))
                }, this.createSplitterRegexp = function(e, t) {
                    if (-1 != e.indexOf("(?=")) {
                        var i = 0,
                            n = !1,
                            r = {};
                        e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, (function(e, t, o, s, a, c) {
                            return n ? n = "]" != a : a ? n = !0 : s ? (i == r.stack && (r.end = c + 1, r.stack = -1), i--) : o && (i++, 1 != o.length && (r.stack = i, r.start = c)), e
                        })), null != r.end && /^\)*$/.test(e.substr(r.end)) && (e = e.substring(0, r.start) + e.substr(r.end))
                    }
                    return "^" != e.charAt(0) && (e = "^" + e), "$" != e.charAt(e.length - 1) && (e += "$"), new RegExp(e, (t || "").replace("g", ""))
                }, this.getLineTokens = function(e, t) {
                    if (t && "string" != typeof t) {
                        var i = t.slice(0);
                        "#tmp" === (t = i[0]) && (i.shift(), t = i.shift())
                    } else i = [];
                    var n = t || "start",
                        o = this.states[n];
                    o || (n = "start", o = this.states[n]);
                    var s = this.matchMappings[n],
                        a = this.regExps[n];
                    a.lastIndex = 0;
                    for (var c, l = [], h = 0, u = 0, d = {
                            type: null,
                            value: ""
                        }; c = a.exec(e);) {
                        var g = s.defaultToken,
                            f = null,
                            p = c[0],
                            m = a.lastIndex;
                        if (m - p.length > h) {
                            var v = e.substring(h, m - p.length);
                            d.type == g ? d.value += v : (d.type && l.push(d), d = {
                                type: g,
                                value: v
                            })
                        }
                        for (var w = 0; w < c.length - 2; w++)
                            if (void 0 !== c[w + 1]) {
                                g = (f = o[s[w]]).onMatch ? f.onMatch(p, n, i, e) : f.token, f.next && (n = "string" == typeof f.next ? f.next : f.next(n, i), (o = this.states[n]) || (this.reportError("state doesn't exist", n), n = "start", o = this.states[n]), s = this.matchMappings[n], h = m, (a = this.regExps[n]).lastIndex = m), f.consumeLineEnd && (h = m);
                                break
                            } if (p)
                            if ("string" == typeof g) f && !1 === f.merge || d.type !== g ? (d.type && l.push(d), d = {
                                type: g,
                                value: p
                            }) : d.value += p;
                            else if (g) {
                            d.type && l.push(d), d = {
                                type: null,
                                value: ""
                            };
                            for (w = 0; w < g.length; w++) l.push(g[w])
                        }
                        if (h == e.length) break;
                        if (h = m, u++ > r) {
                            for (u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
                                    startState: t,
                                    line: e
                                }); h < e.length;) d.type && l.push(d), d = {
                                value: e.substring(h, h += 500),
                                type: "overflow"
                            };
                            n = "start", i = [];
                            break
                        }
                    }
                    return d.type && l.push(d), i.length > 1 && i[0] !== n && i.unshift("#tmp", n), {
                        tokens: l,
                        state: i.length ? i : n
                    }
                }, this.reportError = n.reportError
            }).call(o.prototype), t.Tokenizer = o
        })), ace.define("ace/mode/text_highlight_rules", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/lang"),
                r = function() {
                    this.$rules = {
                        start: [{
                            token: "empty_line",
                            regex: "^$"
                        }, {
                            defaultToken: "text"
                        }]
                    }
                };
            (function() {
                this.addRules = function(e, t) {
                    if (t)
                        for (var i in e) {
                            for (var n = e[i], r = 0; r < n.length; r++) {
                                var o = n[r];
                                (o.next || o.onMatch) && ("string" == typeof o.next && 0 !== o.next.indexOf(t) && (o.next = t + o.next), o.nextState && 0 !== o.nextState.indexOf(t) && (o.nextState = t + o.nextState))
                            }
                            this.$rules[t + i] = n
                        } else
                            for (var i in e) this.$rules[i] = e[i]
                }, this.getRules = function() {
                    return this.$rules
                }, this.embedRules = function(e, t, i, r, o) {
                    var s = "function" == typeof e ? (new e).getRules() : e;
                    if (r)
                        for (var a = 0; a < r.length; a++) r[a] = t + r[a];
                    else
                        for (var c in r = [], s) r.push(t + c);
                    if (this.addRules(s, t), i) {
                        var l = Array.prototype[o ? "push" : "unshift"];
                        for (a = 0; a < r.length; a++) l.apply(this.$rules[r[a]], n.deepCopy(i))
                    }
                    this.$embeds || (this.$embeds = []), this.$embeds.push(t)
                }, this.getEmbeds = function() {
                    return this.$embeds
                };
                var e = function(e, t) {
                        return ("start" != e || t.length) && t.unshift(this.nextState, e), this.nextState
                    },
                    t = function(e, t) {
                        return t.shift(), t.shift() || "start"
                    };
                this.normalizeRules = function() {
                    var i = 0,
                        n = this.$rules;
                    Object.keys(n).forEach((function r(o) {
                        var s = n[o];
                        s.processed = !0;
                        for (var a = 0; a < s.length; a++) {
                            var c = s[a],
                                l = null;
                            Array.isArray(c) && (l = c, c = {}), !c.regex && c.start && (c.regex = c.start, c.next || (c.next = []), c.next.push({
                                defaultToken: c.token
                            }, {
                                token: c.token + ".end",
                                regex: c.end || c.start,
                                next: "pop"
                            }), c.token = c.token + ".start", c.push = !0);
                            var h = c.next || c.push;
                            if (h && Array.isArray(h)) {
                                var u = c.stateName;
                                u || ("string" != typeof(u = c.token) && (u = u[0] || ""), n[u] && (u += i++)), n[u] = h, c.next = u, r(u)
                            } else "pop" == h && (c.next = t);
                            if (c.push && (c.nextState = c.next || c.push, c.next = e, delete c.push), c.rules)
                                for (var d in c.rules) n[d] ? n[d].push && n[d].push.apply(n[d], c.rules[d]) : n[d] = c.rules[d];
                            var g = "string" == typeof c ? c : c.include;
                            if (g && (l = Array.isArray(g) ? g.map((function(e) {
                                    return n[e]
                                })) : n[g]), l) {
                                var f = [a, 1].concat(l);
                                c.noEscape && (f = f.filter((function(e) {
                                    return !e.next
                                }))), s.splice.apply(s, f), a--
                            }
                            c.keywordMap && (c.token = this.createKeywordMapper(c.keywordMap, c.defaultToken || "text", c.caseInsensitive), delete c.defaultToken)
                        }
                    }), this)
                }, this.createKeywordMapper = function(e, t, i, n) {
                    var r = Object.create(null);
                    return Object.keys(e).forEach((function(t) {
                        var o = e[t];
                        i && (o = o.toLowerCase());
                        for (var s = o.split(n || "|"), a = s.length; a--;) r[s[a]] = t
                    })), Object.getPrototypeOf(r) && (r.__proto__ = null), this.$keywordList = Object.keys(r), e = null, i ? function(e) {
                        return r[e.toLowerCase()] || t
                    } : function(e) {
                        return r[e] || t
                    }
                }, this.getKeywords = function() {
                    return this.$keywords
                }
            }).call(r.prototype), t.TextHighlightRules = r
        })), ace.define("ace/mode/behaviour", [], (function(e, t, i) {
            "use strict";
            var n = function() {
                this.$behaviours = {}
            };
            (function() {
                this.add = function(e, t, i) {
                    switch (void 0) {
                        case this.$behaviours:
                            this.$behaviours = {};
                        case this.$behaviours[e]:
                            this.$behaviours[e] = {}
                    }
                    this.$behaviours[e][t] = i
                }, this.addBehaviours = function(e) {
                    for (var t in e)
                        for (var i in e[t]) this.add(t, i, e[t][i])
                }, this.remove = function(e) {
                    this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
                }, this.inherit = function(e, t) {
                    if ("function" == typeof e) var i = (new e).getBehaviours(t);
                    else i = e.getBehaviours(t);
                    this.addBehaviours(i)
                }, this.getBehaviours = function(e) {
                    if (!e) return this.$behaviours;
                    for (var t = {}, i = 0; i < e.length; i++) this.$behaviours[e[i]] && (t[e[i]] = this.$behaviours[e[i]]);
                    return t
                }
            }).call(n.prototype), t.Behaviour = n
        })), ace.define("ace/token_iterator", [], (function(e, t, i) {
            "use strict";
            var n = e("./range").Range,
                r = function(e, t, i) {
                    this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
                    var n = e.getTokenAt(t, i);
                    this.$tokenIndex = n ? n.index : -1
                };
            (function() {
                this.stepBackward = function() {
                    for (this.$tokenIndex -= 1; this.$tokenIndex < 0;) {
                        if (this.$row -= 1, this.$row < 0) return this.$row = 0, null;
                        this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
                    }
                    return this.$rowTokens[this.$tokenIndex]
                }, this.stepForward = function() {
                    var e;
                    for (this.$tokenIndex += 1; this.$tokenIndex >= this.$rowTokens.length;) {
                        if (this.$row += 1, e || (e = this.$session.getLength()), this.$row >= e) return this.$row = e - 1, null;
                        this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
                    }
                    return this.$rowTokens[this.$tokenIndex]
                }, this.getCurrentToken = function() {
                    return this.$rowTokens[this.$tokenIndex]
                }, this.getCurrentTokenRow = function() {
                    return this.$row
                }, this.getCurrentTokenColumn = function() {
                    var e = this.$rowTokens,
                        t = this.$tokenIndex,
                        i = e[t].start;
                    if (void 0 !== i) return i;
                    for (i = 0; t > 0;) i += e[t -= 1].value.length;
                    return i
                }, this.getCurrentTokenPosition = function() {
                    return {
                        row: this.$row,
                        column: this.getCurrentTokenColumn()
                    }
                }, this.getCurrentTokenRange = function() {
                    var e = this.$rowTokens[this.$tokenIndex],
                        t = this.getCurrentTokenColumn();
                    return new n(this.$row, t, this.$row, t + e.value.length)
                }
            }).call(r.prototype), t.TokenIterator = r
        })), ace.define("ace/mode/behaviour/cstyle", [], (function(e, t, i) {
            "use strict";
            var n, r = e("../../lib/oop"),
                o = e("../behaviour").Behaviour,
                s = e("../../token_iterator").TokenIterator,
                a = e("../../lib/lang"),
                c = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"],
                l = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"],
                h = {},
                u = {
                    '"': '"',
                    "'": "'"
                },
                d = function(e) {
                    var t = -1;
                    if (e.multiSelect && (t = e.selection.index, h.rangeCount != e.multiSelect.rangeCount && (h = {
                            rangeCount: e.multiSelect.rangeCount
                        })), h[t]) return n = h[t];
                    n = h[t] = {
                        autoInsertedBrackets: 0,
                        autoInsertedRow: -1,
                        autoInsertedLineEnd: "",
                        maybeInsertedBrackets: 0,
                        maybeInsertedRow: -1,
                        maybeInsertedLineStart: "",
                        maybeInsertedLineEnd: ""
                    }
                },
                g = function(e, t, i, n) {
                    var r = e.end.row - e.start.row;
                    return {
                        text: i + t + n,
                        selection: [0, e.start.column + 1, r, e.end.column + (r ? 0 : 1)]
                    }
                },
                f = function(e) {
                    this.add("braces", "insertion", (function(t, i, r, o, s) {
                        var c = r.getCursorPosition(),
                            l = o.doc.getLine(c.row);
                        if ("{" == s) {
                            d(r);
                            var h = r.getSelectionRange(),
                                u = o.doc.getTextRange(h);
                            if ("" !== u && "{" !== u && r.getWrapBehavioursEnabled()) return g(h, u, "{", "}");
                            if (f.isSaneInsertion(r, o)) return /[\]\}\)]/.test(l[c.column]) || r.inMultiSelectMode || e && e.braces ? (f.recordAutoInsert(r, o, "}"), {
                                text: "{}",
                                selection: [1, 1]
                            }) : (f.recordMaybeInsert(r, o, "{"), {
                                text: "{",
                                selection: [1, 1]
                            })
                        } else if ("}" == s) {
                            if (d(r), "}" == l.substring(c.column, c.column + 1))
                                if (null !== o.$findOpeningBracket("}", {
                                        column: c.column + 1,
                                        row: c.row
                                    }) && f.isAutoInsertedClosing(c, l, s)) return f.popAutoInsertedClosing(), {
                                    text: "",
                                    selection: [1, 1]
                                }
                        } else {
                            if ("\n" == s || "\r\n" == s) {
                                d(r);
                                var p = "";
                                if (f.isMaybeInsertedClosing(c, l) && (p = a.stringRepeat("}", n.maybeInsertedBrackets), f.clearMaybeInsertedClosing()), "}" === l.substring(c.column, c.column + 1)) {
                                    var m = o.findMatchingBracket({
                                        row: c.row,
                                        column: c.column + 1
                                    }, "}");
                                    if (!m) return null;
                                    var v = this.$getIndent(o.getLine(m.row))
                                } else {
                                    if (!p) return void f.clearMaybeInsertedClosing();
                                    v = this.$getIndent(l)
                                }
                                var w = v + o.getTabString();
                                return {
                                    text: "\n" + w + "\n" + v + p,
                                    selection: [1, w.length, 1, w.length]
                                }
                            }
                            f.clearMaybeInsertedClosing()
                        }
                    })), this.add("braces", "deletion", (function(e, t, i, r, o) {
                        var s = r.doc.getTextRange(o);
                        if (!o.isMultiLine() && "{" == s) {
                            if (d(i), "}" == r.doc.getLine(o.start.row).substring(o.end.column, o.end.column + 1)) return o.end.column++, o;
                            n.maybeInsertedBrackets--
                        }
                    })), this.add("parens", "insertion", (function(e, t, i, n, r) {
                        if ("(" == r) {
                            d(i);
                            var o = i.getSelectionRange(),
                                s = n.doc.getTextRange(o);
                            if ("" !== s && i.getWrapBehavioursEnabled()) return g(o, s, "(", ")");
                            if (f.isSaneInsertion(i, n)) return f.recordAutoInsert(i, n, ")"), {
                                text: "()",
                                selection: [1, 1]
                            }
                        } else if (")" == r) {
                            d(i);
                            var a = i.getCursorPosition(),
                                c = n.doc.getLine(a.row);
                            if (")" == c.substring(a.column, a.column + 1))
                                if (null !== n.$findOpeningBracket(")", {
                                        column: a.column + 1,
                                        row: a.row
                                    }) && f.isAutoInsertedClosing(a, c, r)) return f.popAutoInsertedClosing(), {
                                    text: "",
                                    selection: [1, 1]
                                }
                        }
                    })), this.add("parens", "deletion", (function(e, t, i, n, r) {
                        var o = n.doc.getTextRange(r);
                        if (!r.isMultiLine() && "(" == o && (d(i), ")" == n.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2))) return r.end.column++, r
                    })), this.add("brackets", "insertion", (function(e, t, i, n, r) {
                        if ("[" == r) {
                            d(i);
                            var o = i.getSelectionRange(),
                                s = n.doc.getTextRange(o);
                            if ("" !== s && i.getWrapBehavioursEnabled()) return g(o, s, "[", "]");
                            if (f.isSaneInsertion(i, n)) return f.recordAutoInsert(i, n, "]"), {
                                text: "[]",
                                selection: [1, 1]
                            }
                        } else if ("]" == r) {
                            d(i);
                            var a = i.getCursorPosition(),
                                c = n.doc.getLine(a.row);
                            if ("]" == c.substring(a.column, a.column + 1))
                                if (null !== n.$findOpeningBracket("]", {
                                        column: a.column + 1,
                                        row: a.row
                                    }) && f.isAutoInsertedClosing(a, c, r)) return f.popAutoInsertedClosing(), {
                                    text: "",
                                    selection: [1, 1]
                                }
                        }
                    })), this.add("brackets", "deletion", (function(e, t, i, n, r) {
                        var o = n.doc.getTextRange(r);
                        if (!r.isMultiLine() && "[" == o && (d(i), "]" == n.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2))) return r.end.column++, r
                    })), this.add("string_dquotes", "insertion", (function(e, t, i, n, r) {
                        var o = n.$mode.$quotes || u;
                        if (1 == r.length && o[r]) {
                            if (this.lineCommentStart && -1 != this.lineCommentStart.indexOf(r)) return;
                            d(i);
                            var s = r,
                                a = i.getSelectionRange(),
                                c = n.doc.getTextRange(a);
                            if ("" !== c && (1 != c.length || !o[c]) && i.getWrapBehavioursEnabled()) return g(a, c, s, s);
                            if (!c) {
                                var l = i.getCursorPosition(),
                                    h = n.doc.getLine(l.row),
                                    f = h.substring(l.column - 1, l.column),
                                    p = h.substring(l.column, l.column + 1),
                                    m = n.getTokenAt(l.row, l.column),
                                    v = n.getTokenAt(l.row, l.column + 1);
                                if ("\\" == f && m && /escape/.test(m.type)) return null;
                                var w, b = m && /string|escape/.test(m.type),
                                    y = !v || /string|escape/.test(v.type);
                                if (p == s)(w = b !== y) && /string\.end/.test(v.type) && (w = !1);
                                else {
                                    if (b && !y) return null;
                                    if (b && y) return null;
                                    var C = n.$mode.tokenRe;
                                    C.lastIndex = 0;
                                    var S = C.test(f);
                                    C.lastIndex = 0;
                                    var k = C.test(f);
                                    if (S || k) return null;
                                    if (p && !/[\s;,.})\]\\]/.test(p)) return null;
                                    var x = h[l.column - 2];
                                    if (f == s && (x == s || C.test(x))) return null;
                                    w = !0
                                }
                                return {
                                    text: w ? s + s : "",
                                    selection: [1, 1]
                                }
                            }
                        }
                    })), this.add("string_dquotes", "deletion", (function(e, t, i, n, r) {
                        var o = n.$mode.$quotes || u,
                            s = n.doc.getTextRange(r);
                        if (!r.isMultiLine() && o.hasOwnProperty(s) && (d(i), n.doc.getLine(r.start.row).substring(r.start.column + 1, r.start.column + 2) == s)) return r.end.column++, r
                    }))
                };
            f.isSaneInsertion = function(e, t) {
                var i = e.getCursorPosition(),
                    n = new s(t, i.row, i.column);
                if (!this.$matchTokenType(n.getCurrentToken() || "text", c)) {
                    if (/[)}\]]/.test(e.session.getLine(i.row)[i.column])) return !0;
                    var r = new s(t, i.row, i.column + 1);
                    if (!this.$matchTokenType(r.getCurrentToken() || "text", c)) return !1
                }
                return n.stepForward(), n.getCurrentTokenRow() !== i.row || this.$matchTokenType(n.getCurrentToken() || "text", l)
            }, f.$matchTokenType = function(e, t) {
                return t.indexOf(e.type || e) > -1
            }, f.recordAutoInsert = function(e, t, i) {
                var r = e.getCursorPosition(),
                    o = t.doc.getLine(r.row);
                this.isAutoInsertedClosing(r, o, n.autoInsertedLineEnd[0]) || (n.autoInsertedBrackets = 0), n.autoInsertedRow = r.row, n.autoInsertedLineEnd = i + o.substr(r.column), n.autoInsertedBrackets++
            }, f.recordMaybeInsert = function(e, t, i) {
                var r = e.getCursorPosition(),
                    o = t.doc.getLine(r.row);
                this.isMaybeInsertedClosing(r, o) || (n.maybeInsertedBrackets = 0), n.maybeInsertedRow = r.row, n.maybeInsertedLineStart = o.substr(0, r.column) + i, n.maybeInsertedLineEnd = o.substr(r.column), n.maybeInsertedBrackets++
            }, f.isAutoInsertedClosing = function(e, t, i) {
                return n.autoInsertedBrackets > 0 && e.row === n.autoInsertedRow && i === n.autoInsertedLineEnd[0] && t.substr(e.column) === n.autoInsertedLineEnd
            }, f.isMaybeInsertedClosing = function(e, t) {
                return n.maybeInsertedBrackets > 0 && e.row === n.maybeInsertedRow && t.substr(e.column) === n.maybeInsertedLineEnd && t.substr(0, e.column) == n.maybeInsertedLineStart
            }, f.popAutoInsertedClosing = function() {
                n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1), n.autoInsertedBrackets--
            }, f.clearMaybeInsertedClosing = function() {
                n && (n.maybeInsertedBrackets = 0, n.maybeInsertedRow = -1)
            }, r.inherits(f, o), t.CstyleBehaviour = f
        })), ace.define("ace/unicode", [], (function(e, t, i) {
            "use strict";
            for (var n = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], r = 0, o = [], s = 0; s < n.length; s += 2) o.push(r += n[s]), n[s + 1] && o.push(45, r += n[s + 1]);
            t.wordChars = String.fromCharCode.apply(null, o)
        })), ace.define("ace/mode/text", [], (function(e, t, i) {
            "use strict";
            var n = e("../config"),
                r = e("../tokenizer").Tokenizer,
                o = e("./text_highlight_rules").TextHighlightRules,
                s = e("./behaviour/cstyle").CstyleBehaviour,
                a = e("../unicode"),
                c = e("../lib/lang"),
                l = e("../token_iterator").TokenIterator,
                h = e("../range").Range,
                u = function() {
                    this.HighlightRules = o
                };
            (function() {
                this.$defaultBehaviour = new s, this.tokenRe = new RegExp("^[" + a.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + a.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
                    return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new r(this.$highlightRules.getRules())), this.$tokenizer
                }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(e, t, i, n) {
                    function r(e) {
                        for (var t = i; t <= n; t++) e(o.getLine(t), t)
                    }
                    var o = t.doc,
                        s = !0,
                        a = !0,
                        l = 1 / 0,
                        h = t.getTabSize(),
                        u = !1;
                    if (this.lineCommentStart) {
                        if (Array.isArray(this.lineCommentStart)) m = this.lineCommentStart.map(c.escapeRegExp).join("|"), f = this.lineCommentStart[0];
                        else m = c.escapeRegExp(this.lineCommentStart), f = this.lineCommentStart;
                        m = new RegExp("^(\\s*)(?:" + m + ") ?"), u = t.getUseSoftTabs();
                        b = function(e, t) {
                            var i = e.match(m);
                            if (i) {
                                var n = i[1].length,
                                    r = i[0].length;
                                !g(e, n, r) && " " == i[0][r - 1] && r--, o.removeInLine(t, n, r)
                            }
                        };
                        var d = f + " ",
                            g = (w = function(e, t) {
                                s && !/\S/.test(e) || (g(e, l, l) ? o.insertInLine({
                                    row: t,
                                    column: l
                                }, d) : o.insertInLine({
                                    row: t,
                                    column: l
                                }, f))
                            }, y = function(e, t) {
                                return m.test(e)
                            }, function(e, t, i) {
                                for (var n = 0; t-- && " " == e.charAt(t);) n++;
                                if (n % h != 0) return !1;
                                for (n = 0;
                                    " " == e.charAt(i++);) n++;
                                return h > 2 ? n % h != h - 1 : n % h == 0
                            })
                    } else {
                        if (!this.blockComment) return !1;
                        var f = this.blockComment.start,
                            p = this.blockComment.end,
                            m = new RegExp("^(\\s*)(?:" + c.escapeRegExp(f) + ")"),
                            v = new RegExp("(?:" + c.escapeRegExp(p) + ")\\s*$"),
                            w = function(e, t) {
                                y(e, t) || s && !/\S/.test(e) || (o.insertInLine({
                                    row: t,
                                    column: e.length
                                }, p), o.insertInLine({
                                    row: t,
                                    column: l
                                }, f))
                            },
                            b = function(e, t) {
                                var i;
                                (i = e.match(v)) && o.removeInLine(t, e.length - i[0].length, e.length), (i = e.match(m)) && o.removeInLine(t, i[1].length, i[0].length)
                            },
                            y = function(e, i) {
                                if (m.test(e)) return !0;
                                for (var n = t.getTokens(i), r = 0; r < n.length; r++)
                                    if ("comment" === n[r].type) return !0
                            }
                    }
                    var C = 1 / 0;
                    r((function(e, t) {
                        var i = e.search(/\S/); - 1 !== i ? (i < l && (l = i), a && !y(e, t) && (a = !1)) : C > e.length && (C = e.length)
                    })), l == 1 / 0 && (l = C, s = !1, a = !1), u && l % h != 0 && (l = Math.floor(l / h) * h), r(a ? b : w)
                }, this.toggleBlockComment = function(e, t, i, n) {
                    var r = this.blockComment;
                    if (r) {
                        !r.start && r[0] && (r = r[0]);
                        var o, s, a = (p = new l(t, n.row, n.column)).getCurrentToken(),
                            c = (t.selection, t.selection.toOrientedRange());
                        if (a && /comment/.test(a.type)) {
                            for (var u, d; a && /comment/.test(a.type);) {
                                if (-1 != (m = a.value.indexOf(r.start))) {
                                    var g = p.getCurrentTokenRow(),
                                        f = p.getCurrentTokenColumn() + m;
                                    u = new h(g, f, g, f + r.start.length);
                                    break
                                }
                                a = p.stepBackward()
                            }
                            var p;
                            for (a = (p = new l(t, n.row, n.column)).getCurrentToken(); a && /comment/.test(a.type);) {
                                var m;
                                if (-1 != (m = a.value.indexOf(r.end))) {
                                    g = p.getCurrentTokenRow(), f = p.getCurrentTokenColumn() + m;
                                    d = new h(g, f, g, f + r.end.length);
                                    break
                                }
                                a = p.stepForward()
                            }
                            d && t.remove(d), u && (t.remove(u), o = u.start.row, s = -r.start.length)
                        } else s = r.start.length, o = i.start.row, t.insert(i.end, r.end), t.insert(i.start, r.start);
                        c.start.row == o && (c.start.column += s), c.end.row == o && (c.end.column += s), t.selection.fromOrientedRange(c)
                    }
                }, this.getNextLineIndent = function(e, t, i) {
                    return this.$getIndent(t)
                }, this.checkOutdent = function(e, t, i) {
                    return !1
                }, this.autoOutdent = function(e, t, i) {}, this.$getIndent = function(e) {
                    return e.match(/^\s*/)[0]
                }, this.createWorker = function(e) {
                    return null
                }, this.createModeDelegates = function(e) {
                    for (var t in this.$embeds = [], this.$modes = {}, e)
                        if (e[t]) {
                            var i = e[t],
                                r = i.prototype.$id,
                                o = n.$modes[r];
                            o || (n.$modes[r] = o = new i), n.$modes[t] || (n.$modes[t] = o), this.$embeds.push(t), this.$modes[t] = o
                        } var s = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"];
                    for (t = 0; t < s.length; t++) ! function(e) {
                        var i = s[t],
                            n = e[i];
                        e[s[t]] = function() {
                            return this.$delegator(i, arguments, n)
                        }
                    }(this)
                }, this.$delegator = function(e, t, i) {
                    var n = t[0] || "start";
                    if ("string" != typeof n) {
                        if (Array.isArray(n[2])) {
                            var r = n[2][n[2].length - 1];
                            if (s = this.$modes[r]) return s[e].apply(s, [n[1]].concat([].slice.call(t, 1)))
                        }
                        n = n[0] || "start"
                    }
                    for (var o = 0; o < this.$embeds.length; o++)
                        if (this.$modes[this.$embeds[o]]) {
                            var s, a = n.split(this.$embeds[o]);
                            if (!a[0] && a[1]) return t[0] = a[1], (s = this.$modes[this.$embeds[o]])[e].apply(s, t)
                        } var c = i.apply(this, t);
                    return i ? c : void 0
                }, this.transformAction = function(e, t, i, n, r) {
                    if (this.$behaviour) {
                        var o = this.$behaviour.getBehaviours();
                        for (var s in o)
                            if (o[s][t]) {
                                var a = o[s][t].apply(this, arguments);
                                if (a) return a
                            }
                    }
                }, this.getKeywords = function(e) {
                    if (!this.completionKeywords) {
                        var t = this.$tokenizer.rules,
                            i = [];
                        for (var n in t)
                            for (var r = t[n], o = 0, s = r.length; o < s; o++)
                                if ("string" == typeof r[o].token) /keyword|support|storage/.test(r[o].token) && i.push(r[o].regex);
                                else if ("object" == typeof r[o].token)
                            for (var a = 0, c = r[o].token.length; a < c; a++)
                                if (/keyword|support|storage/.test(r[o].token[a])) {
                                    n = r[o].regex.match(/\(.+?\)/g)[a];
                                    i.push(n.substr(1, n.length - 2))
                                } this.completionKeywords = i
                    }
                    return e ? i.concat(this.$keywordList || []) : this.$keywordList
                }, this.$createKeywordList = function() {
                    return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
                }, this.getCompletions = function(e, t, i, n) {
                    return (this.$keywordList || this.$createKeywordList()).map((function(e) {
                        return {
                            name: e,
                            value: e,
                            score: 0,
                            meta: "keyword"
                        }
                    }))
                }, this.$id = "ace/mode/text"
            }).call(u.prototype), t.Mode = u
        })), ace.define("ace/apply_delta", [], (function(e, t, i) {
            "use strict";
            t.applyDelta = function(e, t, i) {
                var n = t.start.row,
                    r = t.start.column,
                    o = e[n] || "";
                switch (t.action) {
                    case "insert":
                        if (1 === t.lines.length) e[n] = o.substring(0, r) + t.lines[0] + o.substring(r);
                        else {
                            var s = [n, 1].concat(t.lines);
                            e.splice.apply(e, s), e[n] = o.substring(0, r) + e[n], e[n + t.lines.length - 1] += o.substring(r)
                        }
                        break;
                    case "remove":
                        var a = t.end.column,
                            c = t.end.row;
                        n === c ? e[n] = o.substring(0, r) + o.substring(a) : e.splice(n, c - n + 1, o.substring(0, r) + e[c].substring(a))
                }
            }
        })), ace.define("ace/anchor", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/oop"),
                r = e("./lib/event_emitter").EventEmitter,
                o = t.Anchor = function(e, t, i) {
                    this.$onChange = this.onChange.bind(this), this.attach(e), void 0 === i ? this.setPosition(t.row, t.column) : this.setPosition(t, i)
                };
            (function() {
                function e(e, t, i) {
                    var n = i ? e.column <= t.column : e.column < t.column;
                    return e.row < t.row || e.row == t.row && n
                }

                function t(t, i, n) {
                    var r = "insert" == t.action,
                        o = (r ? 1 : -1) * (t.end.row - t.start.row),
                        s = (r ? 1 : -1) * (t.end.column - t.start.column),
                        a = t.start,
                        c = r ? a : t.end;
                    return e(i, a, n) ? {
                        row: i.row,
                        column: i.column
                    } : e(c, i, !n) ? {
                        row: i.row + o,
                        column: i.column + (i.row == c.row ? s : 0)
                    } : {
                        row: a.row,
                        column: a.column
                    }
                }
                n.implement(this, r), this.getPosition = function() {
                    return this.$clipPositionToDocument(this.row, this.column)
                }, this.getDocument = function() {
                    return this.document
                }, this.$insertRight = !1, this.onChange = function(e) {
                    if (!(e.start.row == e.end.row && e.start.row != this.row || e.start.row > this.row)) {
                        var i = t(e, {
                            row: this.row,
                            column: this.column
                        }, this.$insertRight);
                        this.setPosition(i.row, i.column, !0)
                    }
                }, this.setPosition = function(e, t, i) {
                    var n;
                    if (n = i ? {
                            row: e,
                            column: t
                        } : this.$clipPositionToDocument(e, t), this.row != n.row || this.column != n.column) {
                        var r = {
                            row: this.row,
                            column: this.column
                        };
                        this.row = n.row, this.column = n.column, this._signal("change", {
                            old: r,
                            value: n
                        })
                    }
                }, this.detach = function() {
                    this.document.removeEventListener("change", this.$onChange)
                }, this.attach = function(e) {
                    this.document = e || this.document, this.document.on("change", this.$onChange)
                }, this.$clipPositionToDocument = function(e, t) {
                    var i = {};
                    return e >= this.document.getLength() ? (i.row = Math.max(0, this.document.getLength() - 1), i.column = this.document.getLine(i.row).length) : e < 0 ? (i.row = 0, i.column = 0) : (i.row = e, i.column = Math.min(this.document.getLine(i.row).length, Math.max(0, t))), t < 0 && (i.column = 0), i
                }
            }).call(o.prototype)
        })), ace.define("ace/document", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/oop"),
                r = e("./apply_delta").applyDelta,
                o = e("./lib/event_emitter").EventEmitter,
                s = e("./range").Range,
                a = e("./anchor").Anchor,
                c = function(e) {
                    this.$lines = [""], 0 === e.length ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({
                        row: 0,
                        column: 0
                    }, e) : this.insert({
                        row: 0,
                        column: 0
                    }, e)
                };
            (function() {
                n.implement(this, o), this.setValue = function(e) {
                    var t = this.getLength() - 1;
                    this.remove(new s(0, 0, t, this.getLine(t).length)), this.insert({
                        row: 0,
                        column: 0
                    }, e)
                }, this.getValue = function() {
                    return this.getAllLines().join(this.getNewLineCharacter())
                }, this.createAnchor = function(e, t) {
                    return new a(this, e, t)
                }, 0 === "aaa".split(/a/).length ? this.$split = function(e) {
                    return e.replace(/\r\n|\r/g, "\n").split("\n")
                } : this.$split = function(e) {
                    return e.split(/\r\n|\r|\n/)
                }, this.$detectNewLine = function(e) {
                    var t = e.match(/^.*?(\r\n|\r|\n)/m);
                    this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode")
                }, this.getNewLineCharacter = function() {
                    switch (this.$newLineMode) {
                        case "windows":
                            return "\r\n";
                        case "unix":
                            return "\n";
                        default:
                            return this.$autoNewLine || "\n"
                    }
                }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function(e) {
                    this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"))
                }, this.getNewLineMode = function() {
                    return this.$newLineMode
                }, this.isNewLine = function(e) {
                    return "\r\n" == e || "\r" == e || "\n" == e
                }, this.getLine = function(e) {
                    return this.$lines[e] || ""
                }, this.getLines = function(e, t) {
                    return this.$lines.slice(e, t + 1)
                }, this.getAllLines = function() {
                    return this.getLines(0, this.getLength())
                }, this.getLength = function() {
                    return this.$lines.length
                }, this.getTextRange = function(e) {
                    return this.getLinesForRange(e).join(this.getNewLineCharacter())
                }, this.getLinesForRange = function(e) {
                    var t;
                    if (e.start.row === e.end.row) t = [this.getLine(e.start.row).substring(e.start.column, e.end.column)];
                    else {
                        (t = this.getLines(e.start.row, e.end.row))[0] = (t[0] || "").substring(e.start.column);
                        var i = t.length - 1;
                        e.end.row - e.start.row == i && (t[i] = t[i].substring(0, e.end.column))
                    }
                    return t
                }, this.insertLines = function(e, t) {
                    return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, t)
                }, this.removeLines = function(e, t) {
                    return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, t)
                }, this.insertNewLine = function(e) {
                    return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""])
                }, this.insert = function(e, t) {
                    return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(e, this.$split(t))
                }, this.insertInLine = function(e, t) {
                    var i = this.clippedPos(e.row, e.column),
                        n = this.pos(e.row, e.column + t.length);
                    return this.applyDelta({
                        start: i,
                        end: n,
                        action: "insert",
                        lines: [t]
                    }, !0), this.clonePos(n)
                }, this.clippedPos = function(e, t) {
                    var i = this.getLength();
                    void 0 === e ? e = i : e < 0 ? e = 0 : e >= i && (e = i - 1, t = void 0);
                    var n = this.getLine(e);
                    return null == t && (t = n.length), {
                        row: e,
                        column: t = Math.min(Math.max(t, 0), n.length)
                    }
                }, this.clonePos = function(e) {
                    return {
                        row: e.row,
                        column: e.column
                    }
                }, this.pos = function(e, t) {
                    return {
                        row: e,
                        column: t
                    }
                }, this.$clipPosition = function(e) {
                    var t = this.getLength();
                    return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : (e.row = Math.max(0, e.row), e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)), e
                }, this.insertFullLines = function(e, t) {
                    var i = 0;
                    (e = Math.min(Math.max(e, 0), this.getLength())) < this.getLength() ? (t = t.concat([""]), i = 0) : (t = [""].concat(t), e--, i = this.$lines[e].length), this.insertMergedLines({
                        row: e,
                        column: i
                    }, t)
                }, this.insertMergedLines = function(e, t) {
                    var i = this.clippedPos(e.row, e.column),
                        n = {
                            row: i.row + t.length - 1,
                            column: (1 == t.length ? i.column : 0) + t[t.length - 1].length
                        };
                    return this.applyDelta({
                        start: i,
                        end: n,
                        action: "insert",
                        lines: t
                    }), this.clonePos(n)
                }, this.remove = function(e) {
                    var t = this.clippedPos(e.start.row, e.start.column),
                        i = this.clippedPos(e.end.row, e.end.column);
                    return this.applyDelta({
                        start: t,
                        end: i,
                        action: "remove",
                        lines: this.getLinesForRange({
                            start: t,
                            end: i
                        })
                    }), this.clonePos(t)
                }, this.removeInLine = function(e, t, i) {
                    var n = this.clippedPos(e, t),
                        r = this.clippedPos(e, i);
                    return this.applyDelta({
                        start: n,
                        end: r,
                        action: "remove",
                        lines: this.getLinesForRange({
                            start: n,
                            end: r
                        })
                    }, !0), this.clonePos(n)
                }, this.removeFullLines = function(e, t) {
                    e = Math.min(Math.max(0, e), this.getLength() - 1);
                    var i = (t = Math.min(Math.max(0, t), this.getLength() - 1)) == this.getLength() - 1 && e > 0,
                        n = t < this.getLength() - 1,
                        r = i ? e - 1 : e,
                        o = i ? this.getLine(r).length : 0,
                        a = n ? t + 1 : t,
                        c = n ? 0 : this.getLine(a).length,
                        l = new s(r, o, a, c),
                        h = this.$lines.slice(e, t + 1);
                    return this.applyDelta({
                        start: l.start,
                        end: l.end,
                        action: "remove",
                        lines: this.getLinesForRange(l)
                    }), h
                }, this.removeNewLine = function(e) {
                    e < this.getLength() - 1 && e >= 0 && this.applyDelta({
                        start: this.pos(e, this.getLine(e).length),
                        end: this.pos(e + 1, 0),
                        action: "remove",
                        lines: ["", ""]
                    })
                }, this.replace = function(e, t) {
                    return e instanceof s || (e = s.fromPoints(e.start, e.end)), 0 === t.length && e.isEmpty() ? e.start : t == this.getTextRange(e) ? e.end : (this.remove(e), t ? this.insert(e.start, t) : e.start)
                }, this.applyDeltas = function(e) {
                    for (var t = 0; t < e.length; t++) this.applyDelta(e[t])
                }, this.revertDeltas = function(e) {
                    for (var t = e.length - 1; t >= 0; t--) this.revertDelta(e[t])
                }, this.applyDelta = function(e, t) {
                    var i = "insert" == e.action;
                    (i ? e.lines.length <= 1 && !e.lines[0] : !s.comparePoints(e.start, e.end)) || (i && e.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(e, 2e4) : (r(this.$lines, e, t), this._signal("change", e)))
                }, this.$splitAndapplyLargeDelta = function(e, t) {
                    for (var i = e.lines, n = i.length - t + 1, r = e.start.row, o = e.start.column, s = 0, a = 0; s < n; s = a) {
                        a += t - 1;
                        var c = i.slice(s, a);
                        c.push(""), this.applyDelta({
                            start: this.pos(r + s, o),
                            end: this.pos(r + a, o = 0),
                            action: e.action,
                            lines: c
                        }, !0)
                    }
                    e.lines = i.slice(s), e.start.row = r + s, e.start.column = o, this.applyDelta(e, !0)
                }, this.revertDelta = function(e) {
                    this.applyDelta({
                        start: this.clonePos(e.start),
                        end: this.clonePos(e.end),
                        action: "insert" == e.action ? "remove" : "insert",
                        lines: e.lines.slice()
                    })
                }, this.indexToPosition = function(e, t) {
                    for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, r = t || 0, o = i.length; r < o; r++)
                        if ((e -= i[r].length + n) < 0) return {
                            row: r,
                            column: e + i[r].length + n
                        };
                    return {
                        row: o - 1,
                        column: e + i[o - 1].length + n
                    }
                }, this.positionToIndex = function(e, t) {
                    for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, r = 0, o = Math.min(e.row, i.length), s = t || 0; s < o; ++s) r += i[s].length + n;
                    return r + e.column
                }
            }).call(c.prototype), t.Document = c
        })), ace.define("ace/background_tokenizer", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/oop"),
                r = e("./lib/event_emitter").EventEmitter,
                o = function(e, t) {
                    this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
                    var i = this;
                    this.$worker = function() {
                        if (i.running) {
                            for (var e = new Date, t = i.currentLine, n = -1, r = i.doc, o = t; i.lines[t];) t++;
                            var s = r.getLength(),
                                a = 0;
                            for (i.running = !1; t < s;) {
                                i.$tokenizeRow(t), n = t;
                                do {
                                    t++
                                } while (i.lines[t]);
                                if (++a % 5 == 0 && new Date - e > 20) {
                                    i.running = setTimeout(i.$worker, 20);
                                    break
                                }
                            }
                            i.currentLine = t, -1 == n && (n = t), o <= n && i.fireUpdateEvent(o, n)
                        }
                    }
                };
            (function() {
                n.implement(this, r), this.setTokenizer = function(e) {
                    this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
                }, this.setDocument = function(e) {
                    this.doc = e, this.lines = [], this.states = [], this.stop()
                }, this.fireUpdateEvent = function(e, t) {
                    var i = {
                        first: e,
                        last: t
                    };
                    this._signal("update", {
                        data: i
                    })
                }, this.start = function(e) {
                    this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
                }, this.scheduleStart = function() {
                    this.running || (this.running = setTimeout(this.$worker, 700))
                }, this.$updateOnChange = function(e) {
                    var t = e.start.row,
                        i = e.end.row - t;
                    if (0 === i) this.lines[t] = null;
                    else if ("remove" == e.action) this.lines.splice(t, i + 1, null), this.states.splice(t, i + 1, null);
                    else {
                        var n = Array(i + 1);
                        n.unshift(t, 1), this.lines.splice.apply(this.lines, n), this.states.splice.apply(this.states, n)
                    }
                    this.currentLine = Math.min(t, this.currentLine, this.doc.getLength()), this.stop()
                }, this.stop = function() {
                    this.running && clearTimeout(this.running), this.running = !1
                }, this.getTokens = function(e) {
                    return this.lines[e] || this.$tokenizeRow(e)
                }, this.getState = function(e) {
                    return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
                }, this.$tokenizeRow = function(e) {
                    var t = this.doc.getLine(e),
                        i = this.states[e - 1],
                        n = this.tokenizer.getLineTokens(t, i, e);
                    return this.states[e] + "" != n.state + "" ? (this.states[e] = n.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = n.tokens
                }
            }).call(o.prototype), t.BackgroundTokenizer = o
        })), ace.define("ace/search_highlight", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/lang"),
                r = (e("./lib/oop"), e("./range").Range),
                o = function(e, t, i) {
                    this.setRegexp(e), this.clazz = t, this.type = i || "text"
                };
            (function() {
                this.MAX_RANGES = 500, this.setRegexp = function(e) {
                    this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
                }, this.update = function(e, t, i, o) {
                    if (this.regExp)
                        for (var s = o.firstRow, a = o.lastRow, c = s; c <= a; c++) {
                            var l = this.cache[c];
                            null == l && ((l = n.getMatchOffsets(i.getLine(c), this.regExp)).length > this.MAX_RANGES && (l = l.slice(0, this.MAX_RANGES)), l = l.map((function(e) {
                                return new r(c, e.offset, c, e.offset + e.length)
                            })), this.cache[c] = l.length ? l : "");
                            for (var h = l.length; h--;) t.drawSingleLineMarker(e, l[h].toScreenRange(i), this.clazz, o)
                        }
                }
            }).call(o.prototype), t.SearchHighlight = o
        })), ace.define("ace/edit_session/fold_line", [], (function(e, t, i) {
            "use strict";

            function n(e, t) {
                this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
                var i = t[t.length - 1];
                this.range = new r(t[0].start.row, t[0].start.column, i.end.row, i.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach((function(e) {
                    e.setFoldLine(this)
                }), this)
            }
            var r = e("../range").Range;
            (function() {
                this.shiftRow = function(e) {
                    this.start.row += e, this.end.row += e, this.folds.forEach((function(t) {
                        t.start.row += e, t.end.row += e
                    }))
                }, this.addFold = function(e) {
                    if (e.sameRow) {
                        if (e.start.row < this.startRow || e.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
                        this.folds.push(e), this.folds.sort((function(e, t) {
                            return -e.range.compareEnd(t.start.row, t.start.column)
                        })), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column)
                    } else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column;
                    else {
                        if (e.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                        this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
                    }
                    e.foldLine = this
                }, this.containsRow = function(e) {
                    return e >= this.start.row && e <= this.end.row
                }, this.walk = function(e, t, i) {
                    var n, r, o = 0,
                        s = this.folds,
                        a = !0;
                    null == t && (t = this.end.row, i = this.end.column);
                    for (var c = 0; c < s.length; c++) {
                        if (-1 == (r = (n = s[c]).range.compareStart(t, i))) return void e(null, t, i, o, a);
                        if (!e(null, n.start.row, n.start.column, o, a) && e(n.placeholder, n.start.row, n.start.column, o) || 0 === r) return;
                        a = !n.sameRow, o = n.end.column
                    }
                    e(null, t, i, o, a)
                }, this.getNextFoldTo = function(e, t) {
                    for (var i, n, r = 0; r < this.folds.length; r++) {
                        if (-1 == (n = (i = this.folds[r]).range.compareEnd(e, t))) return {
                            fold: i,
                            kind: "after"
                        };
                        if (0 === n) return {
                            fold: i,
                            kind: "inside"
                        }
                    }
                    return null
                }, this.addRemoveChars = function(e, t, i) {
                    var n, r, o = this.getNextFoldTo(e, t);
                    if (o)
                        if (n = o.fold, "inside" == o.kind && n.start.column != t && n.start.row != e) window.console && window.console.log(e, t, n);
                        else if (n.start.row == e) {
                        var s = (r = this.folds).indexOf(n);
                        for (0 === s && (this.start.column += i); s < r.length; s++) {
                            if ((n = r[s]).start.column += i, !n.sameRow) return;
                            n.end.column += i
                        }
                        this.end.column += i
                    }
                }, this.split = function(e, t) {
                    var i = this.getNextFoldTo(e, t);
                    if (!i || "inside" == i.kind) return null;
                    var r = i.fold,
                        o = this.folds,
                        s = this.foldData,
                        a = o.indexOf(r),
                        c = o[a - 1];
                    this.end.row = c.end.row, this.end.column = c.end.column;
                    var l = new n(s, o = o.splice(a, o.length - a));
                    return s.splice(s.indexOf(this) + 1, 0, l), l
                }, this.merge = function(e) {
                    for (var t = e.folds, i = 0; i < t.length; i++) this.addFold(t[i]);
                    var n = this.foldData;
                    n.splice(n.indexOf(e), 1)
                }, this.toString = function() {
                    var e = [this.range.toString() + ": ["];
                    return this.folds.forEach((function(t) {
                        e.push("  " + t.toString())
                    })), e.push("]"), e.join("\n")
                }, this.idxToPosition = function(e) {
                    for (var t = 0, i = 0; i < this.folds.length; i++) {
                        var n = this.folds[i];
                        if ((e -= n.start.column - t) < 0) return {
                            row: n.start.row,
                            column: n.start.column + e
                        };
                        if ((e -= n.placeholder.length) < 0) return n.start;
                        t = n.end.column
                    }
                    return {
                        row: this.end.row,
                        column: this.end.column + e
                    }
                }
            }).call(n.prototype), t.FoldLine = n
        })), ace.define("ace/range_list", [], (function(e, t, i) {
            "use strict";
            var n = e("./range").Range.comparePoints,
                r = function() {
                    this.ranges = [], this.$bias = 1
                };
            (function() {
                this.comparePoints = n, this.pointIndex = function(e, t, i) {
                    for (var r = this.ranges, o = i || 0; o < r.length; o++) {
                        var s = r[o],
                            a = n(e, s.end);
                        if (!(a > 0)) {
                            var c = n(e, s.start);
                            return 0 === a ? t && 0 !== c ? -o - 2 : o : c > 0 || 0 === c && !t ? o : -o - 1
                        }
                    }
                    return -o - 1
                }, this.add = function(e) {
                    var t = !e.isEmpty(),
                        i = this.pointIndex(e.start, t);
                    i < 0 && (i = -i - 1);
                    var n = this.pointIndex(e.end, t, i);
                    return n < 0 ? n = -n - 1 : n++, this.ranges.splice(i, n - i, e)
                }, this.addList = function(e) {
                    for (var t = [], i = e.length; i--;) t.push.apply(t, this.add(e[i]));
                    return t
                }, this.substractPoint = function(e) {
                    var t = this.pointIndex(e);
                    if (t >= 0) return this.ranges.splice(t, 1)
                }, this.merge = function() {
                    for (var e, t = [], i = this.ranges, r = (i = i.sort((function(e, t) {
                            return n(e.start, t.start)
                        })))[0], o = 1; o < i.length; o++) {
                        e = r, r = i[o];
                        var s = n(e.end, r.start);
                        s < 0 || (0 != s || e.isEmpty() || r.isEmpty()) && (n(e.end, r.end) < 0 && (e.end.row = r.end.row, e.end.column = r.end.column), i.splice(o, 1), t.push(r), r = e, o--)
                    }
                    return this.ranges = i, t
                }, this.contains = function(e, t) {
                    return this.pointIndex({
                        row: e,
                        column: t
                    }) >= 0
                }, this.containsPoint = function(e) {
                    return this.pointIndex(e) >= 0
                }, this.rangeAtPoint = function(e) {
                    var t = this.pointIndex(e);
                    if (t >= 0) return this.ranges[t]
                }, this.clipRows = function(e, t) {
                    var i = this.ranges;
                    if (i[0].start.row > t || i[i.length - 1].start.row < e) return [];
                    var n = this.pointIndex({
                        row: e,
                        column: 0
                    });
                    n < 0 && (n = -n - 1);
                    var r = this.pointIndex({
                        row: t,
                        column: 0
                    }, n);
                    r < 0 && (r = -r - 1);
                    for (var o = [], s = n; s < r; s++) o.push(i[s]);
                    return o
                }, this.removeAll = function() {
                    return this.ranges.splice(0, this.ranges.length)
                }, this.attach = function(e) {
                    this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
                }, this.detach = function() {
                    this.session && (this.session.removeListener("change", this.onChange), this.session = null)
                }, this.$onChange = function(e) {
                    for (var t = e.start, i = e.end, n = t.row, r = i.row, o = this.ranges, s = 0, a = o.length; s < a; s++) {
                        if ((h = o[s]).end.row >= n) break
                    }
                    if ("insert" == e.action)
                        for (var c = r - n, l = -t.column + i.column; s < a; s++) {
                            if ((h = o[s]).start.row > n) break;
                            if (h.start.row == n && h.start.column >= t.column && (h.start.column == t.column && this.$bias <= 0 || (h.start.column += l, h.start.row += c)), h.end.row == n && h.end.column >= t.column) {
                                if (h.end.column == t.column && this.$bias < 0) continue;
                                h.end.column == t.column && l > 0 && s < a - 1 && h.end.column > h.start.column && h.end.column == o[s + 1].start.column && (h.end.column -= l), h.end.column += l, h.end.row += c
                            }
                        } else
                            for (c = n - r, l = t.column - i.column; s < a; s++) {
                                if ((h = o[s]).start.row > r) break;
                                h.end.row < r && (n < h.end.row || n == h.end.row && t.column < h.end.column) ? (h.end.row = n, h.end.column = t.column) : h.end.row == r ? h.end.column <= i.column ? (c || h.end.column > t.column) && (h.end.column = t.column, h.end.row = t.row) : (h.end.column += l, h.end.row += c) : h.end.row > r && (h.end.row += c), h.start.row < r && (n < h.start.row || n == h.start.row && t.column < h.start.column) ? (h.start.row = n, h.start.column = t.column) : h.start.row == r ? h.start.column <= i.column ? (c || h.start.column > t.column) && (h.start.column = t.column, h.start.row = t.row) : (h.start.column += l, h.start.row += c) : h.start.row > r && (h.start.row += c)
                            }
                    if (0 != c && s < a)
                        for (; s < a; s++) {
                            var h;
                            (h = o[s]).start.row += c, h.end.row += c
                        }
                }
            }).call(r.prototype), t.RangeList = r
        })), ace.define("ace/edit_session/fold", [], (function(e, t, i) {
            "use strict";

            function n(e, t) {
                e.row -= t.row, 0 == e.row && (e.column -= t.column)
            }

            function r(e, t) {
                n(e.start, t), n(e.end, t)
            }

            function o(e, t) {
                0 == e.row && (e.column += t.column), e.row += t.row
            }
            var s = e("../range_list").RangeList,
                a = e("../lib/oop"),
                c = t.Fold = function(e, t) {
                    this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = []
                };
            a.inherits(c, s),
                function() {
                    this.toString = function() {
                        return '"' + this.placeholder + '" ' + this.range.toString()
                    }, this.setFoldLine = function(e) {
                        this.foldLine = e, this.subFolds.forEach((function(t) {
                            t.setFoldLine(e)
                        }))
                    }, this.clone = function() {
                        var e = this.range.clone(),
                            t = new c(e, this.placeholder);
                        return this.subFolds.forEach((function(e) {
                            t.subFolds.push(e.clone())
                        })), t.collapseChildren = this.collapseChildren, t
                    }, this.addSubFold = function(e) {
                        if (!this.range.isEqual(e)) {
                            r(e, this.start);
                            for (var t = e.start.row, i = e.start.column, n = 0, o = -1; n < this.subFolds.length && 1 == (o = this.subFolds[n].range.compare(t, i)); n++);
                            var s = this.subFolds[n],
                                a = 0;
                            if (0 == o) {
                                if (s.range.containsRange(e)) return s.addSubFold(e);
                                a = 1
                            }
                            t = e.range.end.row, i = e.range.end.column;
                            var c = n;
                            for (o = -1; c < this.subFolds.length && 1 == (o = this.subFolds[c].range.compare(t, i)); c++);
                            0 == o && c++;
                            for (var l = this.subFolds.splice(n, c - n, e), h = 0 == o ? l.length - 1 : l.length, u = a; u < h; u++) e.addSubFold(l[u]);
                            return e.setFoldLine(this.foldLine), e
                        }
                    }, this.restoreRange = function(e) {
                        return function(e, t) {
                            o(e.start, t), o(e.end, t)
                        }(e, this.start)
                    }
                }.call(c.prototype)
        })), ace.define("ace/edit_session/folding", [], (function(e, t, i) {
            "use strict";
            var n = e("../range").Range,
                r = e("./fold_line").FoldLine,
                o = e("./fold").Fold,
                s = e("../token_iterator").TokenIterator;
            t.Folding = function() {
                this.getFoldAt = function(e, t, i) {
                    var n = this.getFoldLine(e);
                    if (!n) return null;
                    for (var r = n.folds, o = 0; o < r.length; o++) {
                        var s = r[o].range;
                        if (s.contains(e, t)) {
                            if (1 == i && s.isEnd(e, t) && !s.isEmpty()) continue;
                            if (-1 == i && s.isStart(e, t) && !s.isEmpty()) continue;
                            return r[o]
                        }
                    }
                }, this.getFoldsInRange = function(e) {
                    var t = e.start,
                        i = e.end,
                        n = this.$foldData,
                        r = [];
                    t.column += 1, i.column -= 1;
                    for (var o = 0; o < n.length; o++) {
                        var s = n[o].range.compareRange(e);
                        if (2 != s) {
                            if (-2 == s) break;
                            for (var a = n[o].folds, c = 0; c < a.length; c++) {
                                var l = a[c];
                                if (-2 == (s = l.range.compareRange(e))) break;
                                if (2 != s) {
                                    if (42 == s) break;
                                    r.push(l)
                                }
                            }
                        }
                    }
                    return t.column -= 1, i.column += 1, r
                }, this.getFoldsInRangeList = function(e) {
                    if (Array.isArray(e)) {
                        var t = [];
                        e.forEach((function(e) {
                            t = t.concat(this.getFoldsInRange(e))
                        }), this)
                    } else t = this.getFoldsInRange(e);
                    return t
                }, this.getAllFolds = function() {
                    for (var e = [], t = this.$foldData, i = 0; i < t.length; i++)
                        for (var n = 0; n < t[i].folds.length; n++) e.push(t[i].folds[n]);
                    return e
                }, this.getFoldStringAt = function(e, t, i, n) {
                    if (!(n = n || this.getFoldLine(e))) return null;
                    for (var r, o, s = {
                            end: {
                                column: 0
                            }
                        }, a = 0; a < n.folds.length; a++) {
                        var c = (o = n.folds[a]).range.compareEnd(e, t);
                        if (-1 == c) {
                            r = this.getLine(o.start.row).substring(s.end.column, o.start.column);
                            break
                        }
                        if (0 === c) return null;
                        s = o
                    }
                    return r || (r = this.getLine(o.start.row).substring(s.end.column)), -1 == i ? r.substring(0, t - s.end.column) : 1 == i ? r.substring(t - s.end.column) : r
                }, this.getFoldLine = function(e, t) {
                    var i = this.$foldData,
                        n = 0;
                    for (t && (n = i.indexOf(t)), -1 == n && (n = 0); n < i.length; n++) {
                        var r = i[n];
                        if (r.start.row <= e && r.end.row >= e) return r;
                        if (r.end.row > e) return null
                    }
                    return null
                }, this.getNextFoldLine = function(e, t) {
                    var i = this.$foldData,
                        n = 0;
                    for (t && (n = i.indexOf(t)), -1 == n && (n = 0); n < i.length; n++) {
                        var r = i[n];
                        if (r.end.row >= e) return r
                    }
                    return null
                }, this.getFoldedRowCount = function(e, t) {
                    for (var i = this.$foldData, n = t - e + 1, r = 0; r < i.length; r++) {
                        var o = i[r],
                            s = o.end.row,
                            a = o.start.row;
                        if (s >= t) {
                            a < t && (a >= e ? n -= t - a : n = 0);
                            break
                        }
                        s >= e && (n -= a >= e ? s - a : s - e + 1)
                    }
                    return n
                }, this.$addFoldLine = function(e) {
                    return this.$foldData.push(e), this.$foldData.sort((function(e, t) {
                        return e.start.row - t.start.row
                    })), e
                }, this.addFold = function(e, t) {
                    var i, n = this.$foldData,
                        s = !1;
                    e instanceof o ? i = e : (i = new o(t, e)).collapseChildren = t.collapseChildren, this.$clipRangeToDocument(i.range);
                    var a = i.start.row,
                        c = i.start.column,
                        l = i.end.row,
                        h = i.end.column,
                        u = this.getFoldAt(a, c, 1),
                        d = this.getFoldAt(l, h, -1);
                    if (u && d == u) return u.addSubFold(i);
                    u && !u.range.isStart(a, c) && this.removeFold(u), d && !d.range.isEnd(l, h) && this.removeFold(d);
                    var g = this.getFoldsInRange(i.range);
                    g.length > 0 && (this.removeFolds(g), g.forEach((function(e) {
                        i.addSubFold(e)
                    })));
                    for (var f = 0; f < n.length; f++) {
                        var p = n[f];
                        if (l == p.start.row) {
                            p.addFold(i), s = !0;
                            break
                        }
                        if (a == p.end.row) {
                            if (p.addFold(i), s = !0, !i.sameRow) {
                                var m = n[f + 1];
                                if (m && m.start.row == l) {
                                    p.merge(m);
                                    break
                                }
                            }
                            break
                        }
                        if (l <= p.start.row) break
                    }
                    return s || (p = this.$addFoldLine(new r(this.$foldData, i))), this.$useWrapMode ? this.$updateWrapData(p.start.row, p.start.row) : this.$updateRowLengthCache(p.start.row, p.start.row), this.$modified = !0, this._signal("changeFold", {
                        data: i,
                        action: "add"
                    }), i
                }, this.addFolds = function(e) {
                    e.forEach((function(e) {
                        this.addFold(e)
                    }), this)
                }, this.removeFold = function(e) {
                    var t = e.foldLine,
                        i = t.start.row,
                        n = t.end.row,
                        r = this.$foldData,
                        o = t.folds;
                    if (1 == o.length) r.splice(r.indexOf(t), 1);
                    else if (t.range.isEnd(e.end.row, e.end.column)) o.pop(), t.end.row = o[o.length - 1].end.row, t.end.column = o[o.length - 1].end.column;
                    else if (t.range.isStart(e.start.row, e.start.column)) o.shift(), t.start.row = o[0].start.row, t.start.column = o[0].start.column;
                    else if (e.sameRow) o.splice(o.indexOf(e), 1);
                    else {
                        var s = t.split(e.start.row, e.start.column);
                        (o = s.folds).shift(), s.start.row = o[0].start.row, s.start.column = o[0].start.column
                    }
                    this.$updating || (this.$useWrapMode ? this.$updateWrapData(i, n) : this.$updateRowLengthCache(i, n)), this.$modified = !0, this._signal("changeFold", {
                        data: e,
                        action: "remove"
                    })
                }, this.removeFolds = function(e) {
                    for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
                    t.forEach((function(e) {
                        this.removeFold(e)
                    }), this), this.$modified = !0
                }, this.expandFold = function(e) {
                    this.removeFold(e), e.subFolds.forEach((function(t) {
                        e.restoreRange(t), this.addFold(t)
                    }), this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = []
                }, this.expandFolds = function(e) {
                    e.forEach((function(e) {
                        this.expandFold(e)
                    }), this)
                }, this.unfold = function(e, t) {
                    var i, r;
                    if (null == e ? (i = new n(0, 0, this.getLength(), 0), t = !0) : i = "number" == typeof e ? new n(e, 0, e, this.getLine(e).length) : "row" in e ? n.fromPoints(e, e) : e, r = this.getFoldsInRangeList(i), t) this.removeFolds(r);
                    else
                        for (var o = r; o.length;) this.expandFolds(o), o = this.getFoldsInRangeList(i);
                    if (r.length) return r
                }, this.isRowFolded = function(e, t) {
                    return !!this.getFoldLine(e, t)
                }, this.getRowFoldEnd = function(e, t) {
                    var i = this.getFoldLine(e, t);
                    return i ? i.end.row : e
                }, this.getRowFoldStart = function(e, t) {
                    var i = this.getFoldLine(e, t);
                    return i ? i.start.row : e
                }, this.getFoldDisplayLine = function(e, t, i, n, r) {
                    null == n && (n = e.start.row), null == r && (r = 0), null == t && (t = e.end.row), null == i && (i = this.getLine(t).length);
                    var o = this.doc,
                        s = "";
                    return e.walk((function(e, t, i, a) {
                        if (!(t < n)) {
                            if (t == n) {
                                if (i < r) return;
                                a = Math.max(r, a)
                            }
                            s += null != e ? e : o.getLine(t).substring(a, i)
                        }
                    }), t, i), s
                }, this.getDisplayLine = function(e, t, i, n) {
                    var r, o = this.getFoldLine(e);
                    return o ? this.getFoldDisplayLine(o, e, t, i, n) : (r = this.doc.getLine(e)).substring(n || 0, t || r.length)
                }, this.$cloneFoldData = function() {
                    var e = [];
                    return e = this.$foldData.map((function(t) {
                        var i = t.folds.map((function(e) {
                            return e.clone()
                        }));
                        return new r(e, i)
                    }))
                }, this.toggleFold = function(e) {
                    var t, i, n = this.selection.getRange();
                    if (n.isEmpty()) {
                        var r = n.start;
                        if (t = this.getFoldAt(r.row, r.column)) return void this.expandFold(t);
                        (i = this.findMatchingBracket(r)) ? 1 == n.comparePoint(i) ? n.end = i : (n.start = i, n.start.column++, n.end.column--): (i = this.findMatchingBracket({
                            row: r.row,
                            column: r.column + 1
                        })) ? (1 == n.comparePoint(i) ? n.end = i : n.start = i, n.start.column++) : n = this.getCommentFoldRange(r.row, r.column) || n
                    } else {
                        var o = this.getFoldsInRange(n);
                        if (e && o.length) return void this.expandFolds(o);
                        1 == o.length && (t = o[0])
                    }
                    if (t || (t = this.getFoldAt(n.start.row, n.start.column)), t && t.range.toString() == n.toString()) this.expandFold(t);
                    else {
                        var s = "...";
                        if (!n.isMultiLine()) {
                            if ((s = this.getTextRange(n)).length < 4) return;
                            s = s.trim().substring(0, 2) + ".."
                        }
                        this.addFold(s, n)
                    }
                }, this.getCommentFoldRange = function(e, t, i) {
                    var r = new s(this, e, t),
                        o = r.getCurrentToken(),
                        a = o.type;
                    if (o && /^comment|string/.test(a)) {
                        "comment" == (a = a.match(/comment|string/)[0]) && (a += "|doc-start");
                        var c = new RegExp(a),
                            l = new n;
                        if (1 != i) {
                            do {
                                o = r.stepBackward()
                            } while (o && c.test(o.type));
                            r.stepForward()
                        }
                        if (l.start.row = r.getCurrentTokenRow(), l.start.column = r.getCurrentTokenColumn() + 2, r = new s(this, e, t), -1 != i) {
                            var h = -1;
                            do {
                                if (o = r.stepForward(), -1 == h) {
                                    var u = this.getState(r.$row);
                                    c.test(u) || (h = r.$row)
                                } else if (r.$row > h) break
                            } while (o && c.test(o.type));
                            o = r.stepBackward()
                        } else o = r.getCurrentToken();
                        return l.end.row = r.getCurrentTokenRow(), l.end.column = r.getCurrentTokenColumn() + o.value.length - 2, l
                    }
                }, this.foldAll = function(e, t, i) {
                    null == i && (i = 1e5);
                    var n = this.foldWidgets;
                    if (n) {
                        t = t || this.getLength();
                        for (var r = e = e || 0; r < t; r++)
                            if (null == n[r] && (n[r] = this.getFoldWidget(r)), "start" == n[r]) {
                                var o = this.getFoldWidgetRange(r);
                                if (o && o.isMultiLine() && o.end.row <= t && o.start.row >= e) {
                                    r = o.end.row;
                                    try {
                                        var s = this.addFold("...", o);
                                        s && (s.collapseChildren = i)
                                    } catch (e) {}
                                }
                            }
                    }
                }, this.$foldStyles = {
                    manual: 1,
                    markbegin: 1,
                    markbeginend: 1
                }, this.$foldStyle = "markbegin", this.setFoldStyle = function(e) {
                    if (!this.$foldStyles[e]) throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
                    if (this.$foldStyle != e) {
                        this.$foldStyle = e, "manual" == e && this.unfold();
                        var t = this.$foldMode;
                        this.$setFolding(null), this.$setFolding(t)
                    }
                }, this.$setFolding = function(e) {
                    this.$foldMode != e && (this.$foldMode = e, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), e && "manual" != this.$foldStyle ? (this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)) : this.foldWidgets = null)
                }, this.getParentFoldRangeData = function(e, t) {
                    var i = this.foldWidgets;
                    if (!i || t && i[e]) return {};
                    for (var n, r = e - 1; r >= 0;) {
                        var o = i[r];
                        if (null == o && (o = i[r] = this.getFoldWidget(r)), "start" == o) {
                            var s = this.getFoldWidgetRange(r);
                            if (n || (n = s), s && s.end.row >= e) break
                        }
                        r--
                    }
                    return {
                        range: -1 !== r && s,
                        firstRange: n
                    }
                }, this.onFoldWidgetClick = function(e, t) {
                    var i = {
                        children: (t = t.domEvent).shiftKey,
                        all: t.ctrlKey || t.metaKey,
                        siblings: t.altKey
                    };
                    if (!this.$toggleFoldWidget(e, i)) {
                        var n = t.target || t.srcElement;
                        n && /ace_fold-widget/.test(n.className) && (n.className += " ace_invalid")
                    }
                }, this.$toggleFoldWidget = function(e, t) {
                    if (this.getFoldWidget) {
                        var i = this.getFoldWidget(e),
                            n = this.getLine(e),
                            r = "end" === i ? -1 : 1,
                            o = this.getFoldAt(e, -1 === r ? 0 : n.length, r);
                        if (o) return t.children || t.all ? this.removeFold(o) : this.expandFold(o), o;
                        var s = this.getFoldWidgetRange(e, !0);
                        if (s && !s.isMultiLine() && (o = this.getFoldAt(s.start.row, s.start.column, 1)) && s.isEqual(o.range)) return this.removeFold(o), o;
                        if (t.siblings) {
                            var a = this.getParentFoldRangeData(e);
                            if (a.range) var c = a.range.start.row + 1,
                                l = a.range.end.row;
                            this.foldAll(c, l, t.all ? 1e4 : 0)
                        } else t.children ? (l = s ? s.end.row : this.getLength(), this.foldAll(e + 1, l, t.all ? 1e4 : 0)) : s && (t.all && (s.collapseChildren = 1e4), this.addFold("...", s));
                        return s
                    }
                }, this.toggleFoldWidget = function(e) {
                    var t = this.selection.getCursor().row;
                    t = this.getRowFoldStart(t);
                    var i = this.$toggleFoldWidget(t, {});
                    if (!i) {
                        var n = this.getParentFoldRangeData(t, !0);
                        if (i = n.range || n.firstRange) {
                            t = i.start.row;
                            var r = this.getFoldAt(t, this.getLine(t).length, 1);
                            r ? this.removeFold(r) : this.addFold("...", i)
                        }
                    }
                }, this.updateFoldWidgets = function(e) {
                    var t = e.start.row,
                        i = e.end.row - t;
                    if (0 === i) this.foldWidgets[t] = null;
                    else if ("remove" == e.action) this.foldWidgets.splice(t, i + 1, null);
                    else {
                        var n = Array(i + 1);
                        n.unshift(t, 1), this.foldWidgets.splice.apply(this.foldWidgets, n)
                    }
                }, this.tokenizerUpdateFoldWidgets = function(e) {
                    var t = e.data;
                    t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length)
                }
            }
        })), ace.define("ace/edit_session/bracket_match", [], (function(e, t, i) {
            "use strict";
            var n = e("../token_iterator").TokenIterator,
                r = e("../range").Range;
            t.BracketMatch = function() {
                this.findMatchingBracket = function(e, t) {
                    if (0 == e.column) return null;
                    var i = t || this.getLine(e.row).charAt(e.column - 1);
                    if ("" == i) return null;
                    var n = i.match(/([\(\[\{])|([\)\]\}])/);
                    return n ? n[1] ? this.$findClosingBracket(n[1], e) : this.$findOpeningBracket(n[2], e) : null
                }, this.getBracketRange = function(e) {
                    var t, i = this.getLine(e.row),
                        n = !0,
                        o = i.charAt(e.column - 1),
                        s = o && o.match(/([\(\[\{])|([\)\]\}])/);
                    if (s || (o = i.charAt(e.column), e = {
                            row: e.row,
                            column: e.column + 1
                        }, s = o && o.match(/([\(\[\{])|([\)\]\}])/), n = !1), !s) return null;
                    if (s[1]) {
                        if (!(a = this.$findClosingBracket(s[1], e))) return null;
                        t = r.fromPoints(e, a), n || (t.end.column++, t.start.column--), t.cursor = t.end
                    } else {
                        var a;
                        if (!(a = this.$findOpeningBracket(s[2], e))) return null;
                        t = r.fromPoints(a, e), n || (t.start.column++, t.end.column--), t.cursor = t.start
                    }
                    return t
                }, this.getMatchingBracketRanges = function(e) {
                    var t = this.getLine(e.row),
                        i = t.charAt(e.column - 1),
                        n = i && i.match(/([\(\[\{])|([\)\]\}])/);
                    if (n || (i = t.charAt(e.column), e = {
                            row: e.row,
                            column: e.column + 1
                        }, n = i && i.match(/([\(\[\{])|([\)\]\}])/)), !n) return null;
                    var o = new r(e.row, e.column - 1, e.row, e.column),
                        s = n[1] ? this.$findClosingBracket(n[1], e) : this.$findOpeningBracket(n[2], e);
                    return s ? [o, new r(s.row, s.column, s.row, s.column + 1)] : [o]
                }, this.$brackets = {
                    ")": "(",
                    "(": ")",
                    "]": "[",
                    "[": "]",
                    "{": "}",
                    "}": "{",
                    "<": ">",
                    ">": "<"
                }, this.$findOpeningBracket = function(e, t, i) {
                    var r = this.$brackets[e],
                        o = 1,
                        s = new n(this, t.row, t.column),
                        a = s.getCurrentToken();
                    if (a || (a = s.stepForward()), a) {
                        i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));
                        for (var c = t.column - s.getCurrentTokenColumn() - 2, l = a.value;;) {
                            for (; c >= 0;) {
                                var h = l.charAt(c);
                                if (h == r) {
                                    if (0 == (o -= 1)) return {
                                        row: s.getCurrentTokenRow(),
                                        column: c + s.getCurrentTokenColumn()
                                    }
                                } else h == e && (o += 1);
                                c -= 1
                            }
                            do {
                                a = s.stepBackward()
                            } while (a && !i.test(a.type));
                            if (null == a) break;
                            c = (l = a.value).length - 1
                        }
                        return null
                    }
                }, this.$findClosingBracket = function(e, t, i) {
                    var r = this.$brackets[e],
                        o = 1,
                        s = new n(this, t.row, t.column),
                        a = s.getCurrentToken();
                    if (a || (a = s.stepForward()), a) {
                        i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));
                        for (var c = t.column - s.getCurrentTokenColumn();;) {
                            for (var l = a.value, h = l.length; c < h;) {
                                var u = l.charAt(c);
                                if (u == r) {
                                    if (0 == (o -= 1)) return {
                                        row: s.getCurrentTokenRow(),
                                        column: c + s.getCurrentTokenColumn()
                                    }
                                } else u == e && (o += 1);
                                c += 1
                            }
                            do {
                                a = s.stepForward()
                            } while (a && !i.test(a.type));
                            if (null == a) break;
                            c = 0
                        }
                        return null
                    }
                }
            }
        })), ace.define("ace/edit_session", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/oop"),
                r = e("./lib/lang"),
                o = e("./bidihandler").BidiHandler,
                s = e("./config"),
                a = e("./lib/event_emitter").EventEmitter,
                c = e("./selection").Selection,
                l = e("./mode/text").Mode,
                h = e("./range").Range,
                u = e("./document").Document,
                d = e("./background_tokenizer").BackgroundTokenizer,
                g = e("./search_highlight").SearchHighlight,
                f = function(e, t) {
                    this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++f.$uid, this.$foldData.toString = function() {
                        return this.join("\n")
                    }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == typeof e && e.getLine || (e = new u(e)), this.setDocument(e), this.selection = new c(this), this.$bidiHandler = new o(this), s.resetOptions(this), this.setMode(t), s._signal("session", this)
                };
            f.$uid = 0,
                function() {
                    function e(e) {
                        return !(e < 4352) && (e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510)
                    }
                    n.implement(this, a), this.setDocument = function(e) {
                        this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
                    }, this.getDocument = function() {
                        return this.doc
                    }, this.$resetRowCache = function(e) {
                        if (!e) return this.$docRowCache = [], void(this.$screenRowCache = []);
                        var t = this.$docRowCache.length,
                            i = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
                        t > i && (this.$docRowCache.splice(i, t), this.$screenRowCache.splice(i, t))
                    }, this.$getRowCacheIndex = function(e, t) {
                        for (var i = 0, n = e.length - 1; i <= n;) {
                            var r = i + n >> 1,
                                o = e[r];
                            if (t > o) i = r + 1;
                            else {
                                if (!(t < o)) return r;
                                n = r - 1
                            }
                        }
                        return i - 1
                    }, this.resetCaches = function() {
                        this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
                    }, this.onChangeFold = function(e) {
                        var t = e.data;
                        this.$resetRowCache(t.start.row)
                    }, this.onChange = function(e) {
                        this.$modified = !0, this.$bidiHandler.onChange(e), this.$resetRowCache(e.start.row);
                        var t = this.$updateInternalDataOnChange(e);
                        !this.$fromUndo && this.$undoManager && (t && t.length && (this.$undoManager.add({
                            action: "removeFolds",
                            folds: t
                        }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(e, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(e), this._signal("change", e)
                    }, this.setValue = function(e) {
                        this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
                    }, this.getValue = this.toString = function() {
                        return this.doc.getValue()
                    }, this.getSelection = function() {
                        return this.selection
                    }, this.getState = function(e) {
                        return this.bgTokenizer.getState(e)
                    }, this.getTokens = function(e) {
                        return this.bgTokenizer.getTokens(e)
                    }, this.getTokenAt = function(e, t) {
                        var i, n = this.bgTokenizer.getTokens(e),
                            r = 0;
                        if (null == t) {
                            var o = n.length - 1;
                            r = this.getLine(e).length
                        } else
                            for (o = 0; o < n.length && !((r += n[o].value.length) >= t); o++);
                        return (i = n[o]) ? (i.index = o, i.start = r - i.value.length, i) : null
                    }, this.setUndoManager = function(e) {
                        if (this.$undoManager = e, this.$informUndoManager && this.$informUndoManager.cancel(), e) {
                            var t = this;
                            e.addSession(this), this.$syncInformUndoManager = function() {
                                t.$informUndoManager.cancel(), t.mergeUndoDeltas = !1
                            }, this.$informUndoManager = r.delayedCall(this.$syncInformUndoManager)
                        } else this.$syncInformUndoManager = function() {}
                    }, this.markUndoGroup = function() {
                        this.$syncInformUndoManager && this.$syncInformUndoManager()
                    }, this.$defaultUndoManager = {
                        undo: function() {},
                        redo: function() {},
                        hasUndo: function() {},
                        hasRedo: function() {},
                        reset: function() {},
                        add: function() {},
                        addSelection: function() {},
                        startNewGroup: function() {},
                        addSession: function() {}
                    }, this.getUndoManager = function() {
                        return this.$undoManager || this.$defaultUndoManager
                    }, this.getTabString = function() {
                        return this.getUseSoftTabs() ? r.stringRepeat(" ", this.getTabSize()) : "\t"
                    }, this.setUseSoftTabs = function(e) {
                        this.setOption("useSoftTabs", e)
                    }, this.getUseSoftTabs = function() {
                        return this.$useSoftTabs && !this.$mode.$indentWithTabs
                    }, this.setTabSize = function(e) {
                        this.setOption("tabSize", e)
                    }, this.getTabSize = function() {
                        return this.$tabSize
                    }, this.isTabStop = function(e) {
                        return this.$useSoftTabs && e.column % this.$tabSize == 0
                    }, this.setNavigateWithinSoftTabs = function(e) {
                        this.setOption("navigateWithinSoftTabs", e)
                    }, this.getNavigateWithinSoftTabs = function() {
                        return this.$navigateWithinSoftTabs
                    }, this.$overwrite = !1, this.setOverwrite = function(e) {
                        this.setOption("overwrite", e)
                    }, this.getOverwrite = function() {
                        return this.$overwrite
                    }, this.toggleOverwrite = function() {
                        this.setOverwrite(!this.$overwrite)
                    }, this.addGutterDecoration = function(e, t) {
                        this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {})
                    }, this.removeGutterDecoration = function(e, t) {
                        this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {})
                    }, this.getBreakpoints = function() {
                        return this.$breakpoints
                    }, this.setBreakpoints = function(e) {
                        this.$breakpoints = [];
                        for (var t = 0; t < e.length; t++) this.$breakpoints[e[t]] = "ace_breakpoint";
                        this._signal("changeBreakpoint", {})
                    }, this.clearBreakpoints = function() {
                        this.$breakpoints = [], this._signal("changeBreakpoint", {})
                    }, this.setBreakpoint = function(e, t) {
                        void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
                    }, this.clearBreakpoint = function(e) {
                        delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
                    }, this.addMarker = function(e, t, i, n) {
                        var r = this.$markerId++,
                            o = {
                                range: e,
                                type: i || "line",
                                renderer: "function" == typeof i ? i : null,
                                clazz: t,
                                inFront: !!n,
                                id: r
                            };
                        return n ? (this.$frontMarkers[r] = o, this._signal("changeFrontMarker")) : (this.$backMarkers[r] = o, this._signal("changeBackMarker")), r
                    }, this.addDynamicMarker = function(e, t) {
                        if (e.update) {
                            var i = this.$markerId++;
                            return e.id = i, e.inFront = !!t, t ? (this.$frontMarkers[i] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[i] = e, this._signal("changeBackMarker")), e
                        }
                    }, this.removeMarker = function(e) {
                        var t = this.$frontMarkers[e] || this.$backMarkers[e];
                        t && (delete(t.inFront ? this.$frontMarkers : this.$backMarkers)[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
                    }, this.getMarkers = function(e) {
                        return e ? this.$frontMarkers : this.$backMarkers
                    }, this.highlight = function(e) {
                        if (!this.$searchHighlight) {
                            var t = new g(null, "ace_selected-word", "text");
                            this.$searchHighlight = this.addDynamicMarker(t)
                        }
                        this.$searchHighlight.setRegexp(e)
                    }, this.highlightLines = function(e, t, i, n) {
                        "number" != typeof t && (i = t, t = e), i || (i = "ace_step");
                        var r = new h(e, 0, t, 1 / 0);
                        return r.id = this.addMarker(r, i, "fullLine", n), r
                    }, this.setAnnotations = function(e) {
                        this.$annotations = e, this._signal("changeAnnotation", {})
                    }, this.getAnnotations = function() {
                        return this.$annotations || []
                    }, this.clearAnnotations = function() {
                        this.setAnnotations([])
                    }, this.$detectNewLine = function(e) {
                        var t = e.match(/^.*?(\r?\n)/m);
                        this.$autoNewLine = t ? t[1] : "\n"
                    }, this.getWordRange = function(e, t) {
                        var i = this.getLine(e),
                            n = !1;
                        if (t > 0 && (n = !!i.charAt(t - 1).match(this.tokenRe)), n || (n = !!i.charAt(t).match(this.tokenRe)), n) var r = this.tokenRe;
                        else if (/^\s+$/.test(i.slice(t - 1, t + 1))) r = /\s/;
                        else r = this.nonTokenRe;
                        var o = t;
                        if (o > 0) {
                            do {
                                o--
                            } while (o >= 0 && i.charAt(o).match(r));
                            o++
                        }
                        for (var s = t; s < i.length && i.charAt(s).match(r);) s++;
                        return new h(e, o, e, s)
                    }, this.getAWordRange = function(e, t) {
                        for (var i = this.getWordRange(e, t), n = this.getLine(i.end.row); n.charAt(i.end.column).match(/[ \t]/);) i.end.column += 1;
                        return i
                    }, this.setNewLineMode = function(e) {
                        this.doc.setNewLineMode(e)
                    }, this.getNewLineMode = function() {
                        return this.doc.getNewLineMode()
                    }, this.setUseWorker = function(e) {
                        this.setOption("useWorker", e)
                    }, this.getUseWorker = function() {
                        return this.$useWorker
                    }, this.onReloadTokenizer = function(e) {
                        var t = e.data;
                        this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e)
                    }, this.$modes = s.$modes, this.$mode = null, this.$modeId = null, this.setMode = function(e, t) {
                        if (e && "object" == typeof e) {
                            if (e.getTokenizer) return this.$onChangeMode(e);
                            var i = e,
                                n = i.path
                        } else n = e || "ace/mode/text";
                        if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new l), this.$modes[n] && !i) return this.$onChangeMode(this.$modes[n]), void(t && t());
                        this.$modeId = n, s.loadModule(["mode", n], function(e) {
                            if (this.$modeId !== n) return t && t();
                            this.$modes[n] && !i ? this.$onChangeMode(this.$modes[n]) : e && e.Mode && (e = new e.Mode(i), i || (this.$modes[n] = e, e.$id = n), this.$onChangeMode(e)), t && t()
                        }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)
                    }, this.$onChangeMode = function(e, t) {
                        if (t || (this.$modeId = e.$id), this.$mode !== e) {
                            this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();
                            var i = e.getTokenizer();
                            if (void 0 !== i.addEventListener) {
                                var n = this.onReloadTokenizer.bind(this);
                                i.addEventListener("update", n)
                            }
                            if (this.bgTokenizer) this.bgTokenizer.setTokenizer(i);
                            else {
                                this.bgTokenizer = new d(i);
                                var r = this;
                                this.bgTokenizer.addEventListener("update", (function(e) {
                                    r._signal("tokenizerUpdate", e)
                                }))
                            }
                            this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
                        }
                    }, this.$stopWorker = function() {
                        this.$worker && (this.$worker.terminate(), this.$worker = null)
                    }, this.$startWorker = function() {
                        try {
                            this.$worker = this.$mode.createWorker(this)
                        } catch (e) {
                            s.warn("Could not load worker", e), this.$worker = null
                        }
                    }, this.getMode = function() {
                        return this.$mode
                    }, this.$scrollTop = 0, this.setScrollTop = function(e) {
                        this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e, this._signal("changeScrollTop", e))
                    }, this.getScrollTop = function() {
                        return this.$scrollTop
                    }, this.$scrollLeft = 0, this.setScrollLeft = function(e) {
                        this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e, this._signal("changeScrollLeft", e))
                    }, this.getScrollLeft = function() {
                        return this.$scrollLeft
                    }, this.getScreenWidth = function() {
                        return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
                    }, this.getLineWidgetMaxWidth = function() {
                        if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
                        var e = 0;
                        return this.lineWidgets.forEach((function(t) {
                            t && t.screenWidth > e && (e = t.screenWidth)
                        })), this.lineWidgetWidth = e
                    }, this.$computeWidth = function(e) {
                        if (this.$modified || e) {
                            if (this.$modified = !1, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
                            for (var t = this.doc.getAllLines(), i = this.$rowLengthCache, n = 0, r = 0, o = this.$foldData[r], s = o ? o.start.row : 1 / 0, a = t.length, c = 0; c < a; c++) {
                                if (c > s) {
                                    if ((c = o.end.row + 1) >= a) break;
                                    s = (o = this.$foldData[r++]) ? o.start.row : 1 / 0
                                }
                                null == i[c] && (i[c] = this.$getStringScreenWidth(t[c])[0]), i[c] > n && (n = i[c])
                            }
                            this.screenWidth = n
                        }
                    }, this.getLine = function(e) {
                        return this.doc.getLine(e)
                    }, this.getLines = function(e, t) {
                        return this.doc.getLines(e, t)
                    }, this.getLength = function() {
                        return this.doc.getLength()
                    }, this.getTextRange = function(e) {
                        return this.doc.getTextRange(e || this.selection.getRange())
                    }, this.insert = function(e, t) {
                        return this.doc.insert(e, t)
                    }, this.remove = function(e) {
                        return this.doc.remove(e)
                    }, this.removeFullLines = function(e, t) {
                        return this.doc.removeFullLines(e, t)
                    }, this.undoChanges = function(e, t) {
                        if (e.length) {
                            this.$fromUndo = !0;
                            for (var i = e.length - 1; - 1 != i; i--) {
                                var n = e[i];
                                "insert" == n.action || "remove" == n.action ? this.doc.revertDelta(n) : n.folds && this.addFolds(n.folds)
                            }!t && this.$undoSelect && (e.selectionBefore ? this.selection.fromJSON(e.selectionBefore) : this.selection.setRange(this.$getUndoSelection(e, !0))), this.$fromUndo = !1
                        }
                    }, this.redoChanges = function(e, t) {
                        if (e.length) {
                            this.$fromUndo = !0;
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                ("insert" == n.action || "remove" == n.action) && this.doc.applyDelta(n)
                            }!t && this.$undoSelect && (e.selectionAfter ? this.selection.fromJSON(e.selectionAfter) : this.selection.setRange(this.$getUndoSelection(e, !1))), this.$fromUndo = !1
                        }
                    }, this.setUndoSelect = function(e) {
                        this.$undoSelect = e
                    }, this.$getUndoSelection = function(e, t) {
                        function i(e) {
                            return t ? "insert" !== e.action : "insert" === e.action
                        }
                        for (var n, r, o = 0; o < e.length; o++) {
                            var s = e[o];
                            s.start && (n ? i(s) ? (r = s.start, -1 == n.compare(r.row, r.column) && n.setStart(r), r = s.end, 1 == n.compare(r.row, r.column) && n.setEnd(r), !0) : (r = s.start, -1 == n.compare(r.row, r.column) && (n = h.fromPoints(s.start, s.start)), !1) : i(s) ? (n = h.fromPoints(s.start, s.end), !0) : (n = h.fromPoints(s.start, s.start), !1))
                        }
                        return n
                    }, this.replace = function(e, t) {
                        return this.doc.replace(e, t)
                    }, this.moveText = function(e, t, i) {
                        var n = this.getTextRange(e),
                            r = this.getFoldsInRange(e),
                            o = h.fromPoints(t, t);
                        if (!i) {
                            this.remove(e);
                            var s = e.start.row - e.end.row;
                            (l = s ? -e.end.column : e.start.column - e.end.column) && (o.start.row == e.end.row && o.start.column > e.end.column && (o.start.column += l), o.end.row == e.end.row && o.end.column > e.end.column && (o.end.column += l)), s && o.start.row >= e.end.row && (o.start.row += s, o.end.row += s)
                        }
                        if (o.end = this.insert(o.start, n), r.length) {
                            var a = e.start,
                                c = o.start,
                                l = (s = c.row - a.row, c.column - a.column);
                            this.addFolds(r.map((function(e) {
                                return (e = e.clone()).start.row == a.row && (e.start.column += l), e.end.row == a.row && (e.end.column += l), e.start.row += s, e.end.row += s, e
                            })))
                        }
                        return o
                    }, this.indentRows = function(e, t, i) {
                        i = i.replace(/\t/g, this.getTabString());
                        for (var n = e; n <= t; n++) this.doc.insertInLine({
                            row: n,
                            column: 0
                        }, i)
                    }, this.outdentRows = function(e) {
                        for (var t = e.collapseRows(), i = new h(0, 0, 0, 0), n = this.getTabSize(), r = t.start.row; r <= t.end.row; ++r) {
                            var o = this.getLine(r);
                            i.start.row = r, i.end.row = r;
                            for (var s = 0; s < n && " " == o.charAt(s); ++s);
                            s < n && "\t" == o.charAt(s) ? (i.start.column = s, i.end.column = s + 1) : (i.start.column = 0, i.end.column = s), this.remove(i)
                        }
                    }, this.$moveLines = function(e, t, i) {
                        if (e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t), i < 0) {
                            if ((r = this.getRowFoldStart(e + i)) < 0) return 0;
                            var n = r - e
                        } else if (i > 0) {
                            var r;
                            if ((r = this.getRowFoldEnd(t + i)) > this.doc.getLength() - 1) return 0;
                            n = r - t
                        } else {
                            e = this.$clipRowToDocument(e);
                            n = (t = this.$clipRowToDocument(t)) - e + 1
                        }
                        var o = new h(e, 0, t, Number.MAX_VALUE),
                            s = this.getFoldsInRange(o).map((function(e) {
                                return (e = e.clone()).start.row += n, e.end.row += n, e
                            })),
                            a = 0 == i ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t);
                        return this.doc.insertFullLines(e + n, a), s.length && this.addFolds(s), n
                    }, this.moveLinesUp = function(e, t) {
                        return this.$moveLines(e, t, -1)
                    }, this.moveLinesDown = function(e, t) {
                        return this.$moveLines(e, t, 1)
                    }, this.duplicateLines = function(e, t) {
                        return this.$moveLines(e, t, 0)
                    }, this.$clipRowToDocument = function(e) {
                        return Math.max(0, Math.min(e, this.doc.getLength() - 1))
                    }, this.$clipColumnToRow = function(e, t) {
                        return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t)
                    }, this.$clipPositionToDocument = function(e, t) {
                        if (t = Math.max(0, t), e < 0) e = 0, t = 0;
                        else {
                            var i = this.doc.getLength();
                            e >= i ? (e = i - 1, t = this.doc.getLine(i - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
                        }
                        return {
                            row: e,
                            column: t
                        }
                    }, this.$clipRangeToDocument = function(e) {
                        e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
                        var t = this.doc.getLength() - 1;
                        return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
                    }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
                        min: null,
                        max: null
                    }, this.setUseWrapMode = function(e) {
                        if (e != this.$useWrapMode) {
                            if (this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0), e) {
                                var t = this.getLength();
                                this.$wrapData = Array(t), this.$updateWrapData(0, t - 1)
                            }
                            this._signal("changeWrapMode")
                        }
                    }, this.getUseWrapMode = function() {
                        return this.$useWrapMode
                    }, this.setWrapLimitRange = function(e, t) {
                        this.$wrapLimitRange.min === e && this.$wrapLimitRange.max === t || (this.$wrapLimitRange = {
                            min: e,
                            max: t
                        }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"))
                    }, this.adjustWrapLimit = function(e, t) {
                        var i = this.$wrapLimitRange;
                        i.max < 0 && (i = {
                            min: t,
                            max: t
                        });
                        var n = this.$constrainWrapLimit(e, i.min, i.max);
                        return n != this.$wrapLimit && n > 1 && (this.$wrapLimit = n, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0)
                    }, this.$constrainWrapLimit = function(e, t, i) {
                        return t && (e = Math.max(t, e)), i && (e = Math.min(i, e)), e
                    }, this.getWrapLimit = function() {
                        return this.$wrapLimit
                    }, this.setWrapLimit = function(e) {
                        this.setWrapLimitRange(e, e)
                    }, this.getWrapLimitRange = function() {
                        return {
                            min: this.$wrapLimitRange.min,
                            max: this.$wrapLimitRange.max
                        }
                    }, this.$updateInternalDataOnChange = function(e) {
                        var t = this.$useWrapMode,
                            i = e.action,
                            n = e.start,
                            r = e.end,
                            o = n.row,
                            s = r.row,
                            a = s - o,
                            c = null;
                        if (this.$updating = !0, 0 != a)
                            if ("remove" === i) {
                                this[t ? "$wrapData" : "$rowLengthCache"].splice(o, a);
                                var l = this.$foldData;
                                c = this.getFoldsInRange(e), this.removeFolds(c);
                                var h = 0;
                                if (p = this.getFoldLine(r.row)) {
                                    p.addRemoveChars(r.row, r.column, n.column - r.column), p.shiftRow(-a);
                                    var u = this.getFoldLine(o);
                                    u && u !== p && (u.merge(p), p = u), h = l.indexOf(p) + 1
                                }
                                for (; h < l.length; h++) {
                                    (p = l[h]).start.row >= r.row && p.shiftRow(-a)
                                }
                                s = o
                            } else {
                                var d = Array(a);
                                d.unshift(o, 0);
                                var g = t ? this.$wrapData : this.$rowLengthCache;
                                g.splice.apply(g, d);
                                l = this.$foldData, h = 0;
                                if (p = this.getFoldLine(o)) {
                                    var f = p.range.compareInside(n.row, n.column);
                                    0 == f ? (p = p.split(n.row, n.column)) && (p.shiftRow(a), p.addRemoveChars(s, 0, r.column - n.column)) : -1 == f && (p.addRemoveChars(o, 0, r.column - n.column), p.shiftRow(a)), h = l.indexOf(p) + 1
                                }
                                for (; h < l.length; h++) {
                                    var p;
                                    (p = l[h]).start.row >= o && p.shiftRow(a)
                                }
                            }
                        else a = Math.abs(e.start.column - e.end.column), "remove" === i && (c = this.getFoldsInRange(e), this.removeFolds(c), a = -a), (p = this.getFoldLine(o)) && p.addRemoveChars(o, n.column, a);
                        return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, t ? this.$updateWrapData(o, s) : this.$updateRowLengthCache(o, s), c
                    }, this.$updateRowLengthCache = function(e, t, i) {
                        this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
                    }, this.$updateWrapData = function(e, n) {
                        var r, o, s = this.doc.getAllLines(),
                            a = this.getTabSize(),
                            c = this.$wrapData,
                            l = this.$wrapLimit,
                            h = e;
                        for (n = Math.min(n, s.length - 1); h <= n;)(o = this.getFoldLine(h, o)) ? (r = [], o.walk(function(e, n, o, a) {
                            var c;
                            if (null != e) {
                                (c = this.$getDisplayTokens(e, r.length))[0] = t;
                                for (var l = 1; l < c.length; l++) c[l] = i
                            } else c = this.$getDisplayTokens(s[n].substring(a, o), r.length);
                            r = r.concat(c)
                        }.bind(this), o.end.row, s[o.end.row].length + 1), c[o.start.row] = this.$computeWrapSplits(r, l, a), h = o.end.row + 1) : (r = this.$getDisplayTokens(s[h]), c[h] = this.$computeWrapSplits(r, l, a), h++)
                    };
                    var t = 3,
                        i = 4;
                    this.$computeWrapSplits = function(e, n, r) {
                        function o() {
                            var t = 0;
                            if (0 === g) return t;
                            if (d)
                                for (var i = 0; i < e.length; i++) {
                                    var n = e[i];
                                    if (10 == n) t += 1;
                                    else {
                                        if (11 != n) {
                                            if (12 == n) continue;
                                            break
                                        }
                                        t += r
                                    }
                                }
                            return u && !1 !== d && (t += r), Math.min(t, g)
                        }

                        function s(t) {
                            for (var i = t - l, n = l; n < t; n++) {
                                var r = e[n];
                                12 !== r && 2 !== r || (i -= 1)
                            }
                            a.length || (f = o(), a.indent = f), h += i, a.push(h), l = t
                        }
                        if (0 == e.length) return [];
                        for (var a = [], c = e.length, l = 0, h = 0, u = this.$wrapAsCode, d = this.$indentedSoftWrap, g = n <= Math.max(2 * r, 8) || !1 === d ? 0 : Math.floor(n / 2), f = 0; c - l > n - f;) {
                            var p = l + n - f;
                            if (e[p - 1] >= 10 && e[p] >= 10) s(p);
                            else if (e[p] != t && e[p] != i) {
                                for (var m = Math.max(p - (n - (n >> 2)), l - 1); p > m && e[p] < t;) p--;
                                if (u) {
                                    for (; p > m && e[p] < t;) p--;
                                    for (; p > m && 9 == e[p];) p--
                                } else
                                    for (; p > m && e[p] < 10;) p--;
                                p > m ? s(++p) : (2 == e[p = l + n] && p--, s(p - f))
                            } else {
                                for (; p != l - 1 && e[p] != t; p--);
                                if (p > l) {
                                    s(p);
                                    continue
                                }
                                for (p = l + n; p < e.length && e[p] == i; p++);
                                if (p == e.length) break;
                                s(p)
                            }
                        }
                        return a
                    }, this.$getDisplayTokens = function(t, i) {
                        var n, r = [];
                        i = i || 0;
                        for (var o = 0; o < t.length; o++) {
                            var s = t.charCodeAt(o);
                            if (9 == s) {
                                n = this.getScreenTabSize(r.length + i), r.push(11);
                                for (var a = 1; a < n; a++) r.push(12)
                            } else 32 == s ? r.push(10) : s > 39 && s < 48 || s > 57 && s < 64 ? r.push(9) : s >= 4352 && e(s) ? r.push(1, 2) : r.push(1)
                        }
                        return r
                    }, this.$getStringScreenWidth = function(t, i, n) {
                        if (0 == i) return [0, 0];
                        var r, o;
                        for (null == i && (i = 1 / 0), n = n || 0, o = 0; o < t.length && (9 == (r = t.charCodeAt(o)) ? n += this.getScreenTabSize(n) : r >= 4352 && e(r) ? n += 2 : n += 1, !(n > i)); o++);
                        return [n, o]
                    }, this.lineWidgets = null, this.getRowLength = function(e) {
                        var t = 1;
                        return this.lineWidgets && (t += this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0), this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + t : t
                    }, this.getRowLineCount = function(e) {
                        return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
                    }, this.getRowWrapIndent = function(e) {
                        if (this.$useWrapMode) {
                            var t = this.screenToDocumentPosition(e, Number.MAX_VALUE),
                                i = this.$wrapData[t.row];
                            return i.length && i[0] < t.column ? i.indent : 0
                        }
                        return 0
                    }, this.getScreenLastRowColumn = function(e) {
                        var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
                        return this.documentToScreenColumn(t.row, t.column)
                    }, this.getDocumentLastRowColumn = function(e, t) {
                        var i = this.documentToScreenRow(e, t);
                        return this.getScreenLastRowColumn(i)
                    }, this.getDocumentLastRowColumnPosition = function(e, t) {
                        var i = this.documentToScreenRow(e, t);
                        return this.screenToDocumentPosition(i, Number.MAX_VALUE / 10)
                    }, this.getRowSplitData = function(e) {
                        return this.$useWrapMode ? this.$wrapData[e] : void 0
                    }, this.getScreenTabSize = function(e) {
                        return this.$tabSize - (e % this.$tabSize | 0)
                    }, this.screenToDocumentRow = function(e, t) {
                        return this.screenToDocumentPosition(e, t).row
                    }, this.screenToDocumentColumn = function(e, t) {
                        return this.screenToDocumentPosition(e, t).column
                    }, this.screenToDocumentPosition = function(e, t, i) {
                        if (e < 0) return {
                            row: 0,
                            column: 0
                        };
                        var n, r, o = 0,
                            s = 0,
                            a = 0,
                            c = 0,
                            l = this.$screenRowCache,
                            h = this.$getRowCacheIndex(l, e),
                            u = l.length;
                        if (u && h >= 0) {
                            a = l[h], o = this.$docRowCache[h];
                            var d = e > l[u - 1]
                        } else d = !u;
                        for (var g = this.getLength() - 1, f = this.getNextFoldLine(o), p = f ? f.start.row : 1 / 0; a <= e && !(a + (c = this.getRowLength(o)) > e || o >= g);) a += c, ++o > p && (o = f.end.row + 1, p = (f = this.getNextFoldLine(o, f)) ? f.start.row : 1 / 0), d && (this.$docRowCache.push(o), this.$screenRowCache.push(a));
                        if (f && f.start.row <= o) n = this.getFoldDisplayLine(f), o = f.start.row;
                        else {
                            if (a + c <= e || o > g) return {
                                row: g,
                                column: this.getLine(g).length
                            };
                            n = this.getLine(o), f = null
                        }
                        var m = 0,
                            v = Math.floor(e - a);
                        if (this.$useWrapMode) {
                            var w = this.$wrapData[o];
                            w && (r = w[v], v > 0 && w.length && (m = w.indent, s = w[v - 1] || w[w.length - 1], n = n.substring(s)))
                        }
                        return void 0 !== i && this.$bidiHandler.isBidiRow(a + v, o, v) && (t = this.$bidiHandler.offsetToCol(i)), s += this.$getStringScreenWidth(n, t - m)[1], this.$useWrapMode && s >= r && (s = r - 1), f ? f.idxToPosition(s) : {
                            row: o,
                            column: s
                        }
                    }, this.documentToScreenPosition = function(e, t) {
                        if (void 0 === t) var i = this.$clipPositionToDocument(e.row, e.column);
                        else i = this.$clipPositionToDocument(e, t);
                        e = i.row, t = i.column;
                        var n, r = 0,
                            o = null;
                        (n = this.getFoldAt(e, t, 1)) && (e = n.start.row, t = n.start.column);
                        var s, a = 0,
                            c = this.$docRowCache,
                            l = this.$getRowCacheIndex(c, e),
                            h = c.length;
                        if (h && l >= 0) {
                            a = c[l], r = this.$screenRowCache[l];
                            var u = e > c[h - 1]
                        } else u = !h;
                        for (var d = this.getNextFoldLine(a), g = d ? d.start.row : 1 / 0; a < e;) {
                            if (a >= g) {
                                if ((s = d.end.row + 1) > e) break;
                                g = (d = this.getNextFoldLine(s, d)) ? d.start.row : 1 / 0
                            } else s = a + 1;
                            r += this.getRowLength(a), a = s, u && (this.$docRowCache.push(a), this.$screenRowCache.push(r))
                        }
                        var f = "";
                        d && a >= g ? (f = this.getFoldDisplayLine(d, e, t), o = d.start.row) : (f = this.getLine(e).substring(0, t), o = e);
                        var p = 0;
                        if (this.$useWrapMode) {
                            var m = this.$wrapData[o];
                            if (m) {
                                for (var v = 0; f.length >= m[v];) r++, v++;
                                f = f.substring(m[v - 1] || 0, f.length), p = v > 0 ? m.indent : 0
                            }
                        }
                        return this.lineWidgets && this.lineWidgets[a] && this.lineWidgets[a].rowsAbove && (r += this.lineWidgets[a].rowsAbove), {
                            row: r,
                            column: p + this.$getStringScreenWidth(f)[0]
                        }
                    }, this.documentToScreenColumn = function(e, t) {
                        return this.documentToScreenPosition(e, t).column
                    }, this.documentToScreenRow = function(e, t) {
                        return this.documentToScreenPosition(e, t).row
                    }, this.getScreenLength = function() {
                        var e = 0,
                            t = null;
                        if (this.$useWrapMode)
                            for (var i = this.$wrapData.length, n = 0, r = (a = 0, (t = this.$foldData[a++]) ? t.start.row : 1 / 0); n < i;) {
                                var o = this.$wrapData[n];
                                e += o ? o.length + 1 : 1, ++n > r && (n = t.end.row + 1, r = (t = this.$foldData[a++]) ? t.start.row : 1 / 0)
                            } else {
                                e = this.getLength();
                                for (var s = this.$foldData, a = 0; a < s.length; a++) e -= (t = s[a]).end.row - t.start.row
                            }
                        return this.lineWidgets && (e += this.$getWidgetScreenLength()), e
                    }, this.$setFontMetrics = function(e) {
                        this.$enableVarChar && (this.$getStringScreenWidth = function(t, i, n) {
                            if (0 === i) return [0, 0];
                            var r, o;
                            for (i || (i = 1 / 0), n = n || 0, o = 0; o < t.length && !((n += "\t" === (r = t.charAt(o)) ? this.getScreenTabSize(n) : e.getCharacterWidth(r)) > i); o++);
                            return [n, o]
                        })
                    }, this.destroy = function() {
                        this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker()
                    }, this.isFullWidth = e
                }.call(f.prototype), e("./edit_session/folding").Folding.call(f.prototype), e("./edit_session/bracket_match").BracketMatch.call(f.prototype), s.defineOptions(f.prototype, "session", {
                    wrap: {
                        set: function(e) {
                            if (e && "off" != e ? "free" == e ? e = !0 : "printMargin" == e ? e = -1 : "string" == typeof e && (e = parseInt(e, 10) || !1) : e = !1, this.$wrap != e)
                                if (this.$wrap = e, e) {
                                    var t = "number" == typeof e ? e : null;
                                    this.setWrapLimitRange(t, t), this.setUseWrapMode(!0)
                                } else this.setUseWrapMode(!1)
                        },
                        get: function() {
                            return this.getUseWrapMode() ? -1 == this.$wrap ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
                        },
                        handlesSet: !0
                    },
                    wrapMethod: {
                        set: function(e) {
                            (e = "auto" == e ? "text" != this.$mode.type : "text" != e) != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)))
                        },
                        initialValue: "auto"
                    },
                    indentedSoftWrap: {
                        set: function() {
                            this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0))
                        },
                        initialValue: !0
                    },
                    firstLineNumber: {
                        set: function() {
                            this._signal("changeBreakpoint")
                        },
                        initialValue: 1
                    },
                    useWorker: {
                        set: function(e) {
                            this.$useWorker = e, this.$stopWorker(), e && this.$startWorker()
                        },
                        initialValue: !0
                    },
                    useSoftTabs: {
                        initialValue: !0
                    },
                    tabSize: {
                        set: function(e) {
                            (e = parseInt(e)) > 0 && this.$tabSize !== e && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize"))
                        },
                        initialValue: 4,
                        handlesSet: !0
                    },
                    navigateWithinSoftTabs: {
                        initialValue: !1
                    },
                    foldStyle: {
                        set: function(e) {
                            this.setFoldStyle(e)
                        },
                        handlesSet: !0
                    },
                    overwrite: {
                        set: function(e) {
                            this._signal("changeOverwrite")
                        },
                        initialValue: !1
                    },
                    newLineMode: {
                        set: function(e) {
                            this.doc.setNewLineMode(e)
                        },
                        get: function() {
                            return this.doc.getNewLineMode()
                        },
                        handlesSet: !0
                    },
                    mode: {
                        set: function(e) {
                            this.setMode(e)
                        },
                        get: function() {
                            return this.$modeId
                        },
                        handlesSet: !0
                    }
                }), t.EditSession = f
        })), ace.define("ace/search", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/lang"),
                r = e("./lib/oop"),
                o = e("./range").Range,
                s = function() {
                    this.$options = {}
                };
            (function() {
                this.set = function(e) {
                    return r.mixin(this.$options, e), this
                }, this.getOptions = function() {
                    return n.copyObject(this.$options)
                }, this.setOptions = function(e) {
                    this.$options = e
                }, this.find = function(e) {
                    var t = this.$options,
                        i = this.$matchIterator(e, t);
                    if (!i) return !1;
                    var n = null;
                    return i.forEach((function(e, i, r, s) {
                        return n = new o(e, i, r, s), !(i == s && t.start && t.start.start && 0 != t.skipCurrent && n.isEqual(t.start)) || (n = null, !1)
                    })), n
                }, this.findAll = function(e) {
                    var t = this.$options;
                    if (!t.needle) return [];
                    this.$assembleRegExp(t);
                    var i = t.range,
                        r = i ? e.getLines(i.start.row, i.end.row) : e.doc.getAllLines(),
                        s = [],
                        a = t.re;
                    if (t.$isMultiLine) {
                        var c, l = a.length,
                            h = r.length - l;
                        e: for (var u = a.offset || 0; u <= h; u++) {
                            for (var d = 0; d < l; d++)
                                if (-1 == r[u + d].search(a[d])) continue e;
                            var g = r[u],
                                f = r[u + l - 1],
                                p = g.length - g.match(a[0])[0].length,
                                m = f.match(a[l - 1])[0].length;
                            c && c.end.row === u && c.end.column > p || (s.push(c = new o(u, p, u + l - 1, m)), l > 2 && (u = u + l - 2))
                        }
                    } else
                        for (var v = 0; v < r.length; v++) {
                            var w = n.getMatchOffsets(r[v], a);
                            for (d = 0; d < w.length; d++) {
                                var b = w[d];
                                s.push(new o(v, b.offset, v, b.offset + b.length))
                            }
                        }
                    if (i) {
                        var y = i.start.column,
                            C = i.start.column;
                        for (v = 0, d = s.length - 1; v < d && s[v].start.column < y && s[v].start.row == i.start.row;) v++;
                        for (; v < d && s[d].end.column > C && s[d].end.row == i.end.row;) d--;
                        for (s = s.slice(v, d + 1), v = 0, d = s.length; v < d; v++) s[v].start.row += i.start.row, s[v].end.row += i.start.row
                    }
                    return s
                }, this.replace = function(e, t) {
                    var i = this.$options,
                        n = this.$assembleRegExp(i);
                    if (i.$isMultiLine) return t;
                    if (n) {
                        var r = n.exec(e);
                        if (!r || r[0].length != e.length) return null;
                        if (t = e.replace(n, t), i.preserveCase) {
                            t = t.split("");
                            for (var o = Math.min(e.length, e.length); o--;) {
                                var s = e[o];
                                s && s.toLowerCase() != s ? t[o] = t[o].toUpperCase() : t[o] = t[o].toLowerCase()
                            }
                            t = t.join("")
                        }
                        return t
                    }
                }, this.$assembleRegExp = function(e, t) {
                    if (e.needle instanceof RegExp) return e.re = e.needle;
                    var i = e.needle;
                    if (!e.needle) return e.re = !1;
                    e.regExp || (i = n.escapeRegExp(i)), e.wholeWord && (i = function(e, t) {
                        function i(e) {
                            return /\w/.test(e) || t.regExp ? "\\b" : ""
                        }
                        return i(e[0]) + e + i(e[e.length - 1])
                    }(i, e));
                    var r = e.caseSensitive ? "gm" : "gmi";
                    if (e.$isMultiLine = !t && /[\n\r]/.test(i), e.$isMultiLine) return e.re = this.$assembleMultilineRegExp(i, r);
                    try {
                        var o = new RegExp(i, r)
                    } catch (e) {
                        o = !1
                    }
                    return e.re = o
                }, this.$assembleMultilineRegExp = function(e, t) {
                    for (var i = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), n = [], r = 0; r < i.length; r++) try {
                        n.push(new RegExp(i[r], t))
                    } catch (e) {
                        return !1
                    }
                    return n
                }, this.$matchIterator = function(e, t) {
                    var i = this.$assembleRegExp(t);
                    if (!i) return !1;
                    var n = 1 == t.backwards,
                        r = 0 != t.skipCurrent,
                        o = t.range,
                        s = t.start;
                    s || (s = o ? o[n ? "end" : "start"] : e.selection.getRange()), s.start && (s = s[r != n ? "end" : "start"]);
                    var a = o ? o.start.row : 0,
                        c = o ? o.end.row : e.getLength() - 1;
                    if (n) var l = function(e) {
                        var i = s.row;
                        if (!u(i, s.column, e)) {
                            for (i--; i >= a; i--)
                                if (u(i, Number.MAX_VALUE, e)) return;
                            if (0 != t.wrap)
                                for (i = c, a = s.row; i >= a; i--)
                                    if (u(i, Number.MAX_VALUE, e)) return
                        }
                    };
                    else l = function(e) {
                        var i = s.row;
                        if (!u(i, s.column, e)) {
                            for (i += 1; i <= c; i++)
                                if (u(i, 0, e)) return;
                            if (0 != t.wrap)
                                for (i = a, c = s.row; i <= c; i++)
                                    if (u(i, 0, e)) return
                        }
                    };
                    if (t.$isMultiLine) var h = i.length,
                        u = function(t, r, o) {
                            var s = n ? t - h + 1 : t;
                            if (!(s < 0)) {
                                var a = e.getLine(s),
                                    c = a.search(i[0]);
                                if (!(!n && c < r || -1 === c)) {
                                    for (var l = 1; l < h; l++)
                                        if (-1 == (a = e.getLine(s + l)).search(i[l])) return;
                                    var u = a.match(i[h - 1])[0].length;
                                    if (!(n && u > r)) return !!o(s, c, s + h - 1, u) || void 0
                                }
                            }
                        };
                    else if (n) u = function(t, n, r) {
                        var o, s = e.getLine(t),
                            a = [],
                            c = 0;
                        for (i.lastIndex = 0; o = i.exec(s);) {
                            var l = o[0].length;
                            if (c = o.index, !l) {
                                if (c >= s.length) break;
                                i.lastIndex = c += 1
                            }
                            if (o.index + l > n) break;
                            a.push(o.index, l)
                        }
                        for (var h = a.length - 1; h >= 0; h -= 2) {
                            var u = a[h - 1];
                            if (r(t, u, t, u + (l = a[h]))) return !0
                        }
                    };
                    else u = function(t, n, r) {
                        var o, s, a = e.getLine(t);
                        for (i.lastIndex = n; s = i.exec(a);) {
                            var c = s[0].length;
                            if (r(t, o = s.index, t, o + c)) return !0;
                            if (!c && (i.lastIndex = o += 1, o >= a.length)) return !1
                        }
                    };
                    return {
                        forEach: l
                    }
                }
            }).call(s.prototype), t.Search = s
        })), ace.define("ace/keyboard/hash_handler", [], (function(e, t, i) {
            "use strict";

            function n(e, t) {
                this.platform = t || (s.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0
            }

            function r(e, t) {
                n.call(this, e, t), this.$singleCommand = !1
            }
            var o = e("../lib/keys"),
                s = e("../lib/useragent"),
                a = o.KEY_MODS;
            r.prototype = n.prototype,
                function() {
                    function e(e) {
                        return "object" == typeof e && e.bindKey && e.bindKey.position || (e.isDefault ? -100 : 0)
                    }
                    this.addCommand = function(e) {
                        this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
                    }, this.removeCommand = function(e, t) {
                        var i = e && ("string" == typeof e ? e : e.name);
                        e = this.commands[i], t || delete this.commands[i];
                        var n = this.commandKeyBinding;
                        for (var r in n) {
                            var o = n[r];
                            if (o == e) delete n[r];
                            else if (Array.isArray(o)) {
                                var s = o.indexOf(e); - 1 != s && (o.splice(s, 1), 1 == o.length && (n[r] = o[0]))
                            }
                        }
                    }, this.bindKey = function(e, t, i) {
                        if ("object" == typeof e && e && (null == i && (i = e.position), e = e[this.platform]), e) return "function" == typeof t ? this.addCommand({
                            exec: t,
                            bindKey: e,
                            name: t.name || e
                        }) : void e.split("|").forEach((function(e) {
                            var n = "";
                            if (-1 != e.indexOf(" ")) {
                                var r = e.split(/\s+/);
                                e = r.pop(), r.forEach((function(e) {
                                    var t = this.parseKeys(e),
                                        i = a[t.hashId] + t.key;
                                    n += (n ? " " : "") + i, this._addCommandToBinding(n, "chainKeys")
                                }), this), n += " "
                            }
                            var o = this.parseKeys(e),
                                s = a[o.hashId] + o.key;
                            this._addCommandToBinding(n + s, t, i)
                        }), this)
                    }, this._addCommandToBinding = function(t, i, n) {
                        var r, o = this.commandKeyBinding;
                        if (i)
                            if (!o[t] || this.$singleCommand) o[t] = i;
                            else {
                                Array.isArray(o[t]) ? -1 != (r = o[t].indexOf(i)) && o[t].splice(r, 1) : o[t] = [o[t]], "number" != typeof n && (n = e(i));
                                var s = o[t];
                                for (r = 0; r < s.length; r++) {
                                    if (e(s[r]) > n) break
                                }
                                s.splice(r, 0, i)
                            }
                        else delete o[t]
                    }, this.addCommands = function(e) {
                        e && Object.keys(e).forEach((function(t) {
                            var i = e[t];
                            if (i) {
                                if ("string" == typeof i) return this.bindKey(i, t);
                                "function" == typeof i && (i = {
                                    exec: i
                                }), "object" == typeof i && (i.name || (i.name = t), this.addCommand(i))
                            }
                        }), this)
                    }, this.removeCommands = function(e) {
                        Object.keys(e).forEach((function(t) {
                            this.removeCommand(e[t])
                        }), this)
                    }, this.bindKeys = function(e) {
                        Object.keys(e).forEach((function(t) {
                            this.bindKey(t, e[t])
                        }), this)
                    }, this._buildKeyHash = function(e) {
                        this.bindKey(e.bindKey, e)
                    }, this.parseKeys = function(e) {
                        var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter((function(e) {
                                return e
                            })),
                            i = t.pop(),
                            n = o[i];
                        if (o.FUNCTION_KEYS[n]) i = o.FUNCTION_KEYS[n].toLowerCase();
                        else {
                            if (!t.length) return {
                                key: i,
                                hashId: -1
                            };
                            if (1 == t.length && "shift" == t[0]) return {
                                key: i.toUpperCase(),
                                hashId: -1
                            }
                        }
                        for (var r = 0, s = t.length; s--;) {
                            var a = o.KEY_MODS[t[s]];
                            if (null == a) return "undefined" != typeof console && console.error("invalid modifier " + t[s] + " in " + e), !1;
                            r |= a
                        }
                        return {
                            key: i,
                            hashId: r
                        }
                    }, this.findKeyCommand = function(e, t) {
                        var i = a[e] + t;
                        return this.commandKeyBinding[i]
                    }, this.handleKeyboard = function(e, t, i, n) {
                        if (!(n < 0)) {
                            var r = a[t] + i,
                                o = this.commandKeyBinding[r];
                            return e.$keyChain && (e.$keyChain += " " + r, o = this.commandKeyBinding[e.$keyChain] || o), !o || "chainKeys" != o && "chainKeys" != o[o.length - 1] ? (e.$keyChain && (t && 4 != t || 1 != i.length ? (-1 == t || n > 0) && (e.$keyChain = "") : e.$keyChain = e.$keyChain.slice(0, -r.length - 1)), {
                                command: o
                            }) : (e.$keyChain = e.$keyChain || r, {
                                command: "null"
                            })
                        }
                    }, this.getStatusText = function(e, t) {
                        return t.$keyChain || ""
                    }
                }.call(n.prototype), t.HashHandler = n, t.MultiHashHandler = r
        })), ace.define("ace/commands/command_manager", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/oop"),
                r = e("../keyboard/hash_handler").MultiHashHandler,
                o = e("../lib/event_emitter").EventEmitter,
                s = function(e, t) {
                    r.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", (function(e) {
                        return e.command.exec(e.editor, e.args || {})
                    }))
                };
            n.inherits(s, r),
                function() {
                    n.implement(this, o), this.exec = function(e, t, i) {
                        if (Array.isArray(e)) {
                            for (var n = e.length; n--;)
                                if (this.exec(e[n], t, i)) return !0;
                            return !1
                        }
                        if ("string" == typeof e && (e = this.commands[e]), !e) return !1;
                        if (t && t.$readOnly && !e.readOnly) return !1;
                        if (0 != this.$checkCommandState && e.isAvailable && !e.isAvailable(t)) return !1;
                        var r = {
                            editor: t,
                            command: e,
                            args: i
                        };
                        return r.returnValue = this._emit("exec", r), this._signal("afterExec", r), !1 !== r.returnValue
                    }, this.toggleRecording = function(e) {
                        if (!this.$inReplay) return e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function(e) {
                            this.macro.push([e.command, e.args])
                        }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0)
                    }, this.replay = function(e) {
                        if (!this.$inReplay && this.macro) {
                            if (this.recording) return this.toggleRecording(e);
                            try {
                                this.$inReplay = !0, this.macro.forEach((function(t) {
                                    "string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
                                }), this)
                            } finally {
                                this.$inReplay = !1
                            }
                        }
                    }, this.trimMacro = function(e) {
                        return e.map((function(e) {
                            return "string" != typeof e[0] && (e[0] = e[0].name), e[1] || (e = e[0]), e
                        }))
                    }
                }.call(s.prototype), t.CommandManager = s
        })), ace.define("ace/commands/default_commands", [], (function(e, t, i) {
            "use strict";

            function n(e, t) {
                return {
                    win: e,
                    mac: t
                }
            }
            var r = e("../lib/lang"),
                o = e("../config"),
                s = e("../range").Range;
            t.commands = [{
                name: "showSettingsMenu",
                bindKey: n("Ctrl-,", "Command-,"),
                exec: function(e) {
                    o.loadModule("ace/ext/settings_menu", (function(t) {
                        t.init(e), e.showSettingsMenu()
                    }))
                },
                readOnly: !0
            }, {
                name: "goToNextError",
                bindKey: n("Alt-E", "F4"),
                exec: function(e) {
                    o.loadModule("./ext/error_marker", (function(t) {
                        t.showErrorMarker(e, 1)
                    }))
                },
                scrollIntoView: "animate",
                readOnly: !0
            }, {
                name: "goToPreviousError",
                bindKey: n("Alt-Shift-E", "Shift-F4"),
                exec: function(e) {
                    o.loadModule("./ext/error_marker", (function(t) {
                        t.showErrorMarker(e, -1)
                    }))
                },
                scrollIntoView: "animate",
                readOnly: !0
            }, {
                name: "selectall",
                description: "Select all",
                bindKey: n("Ctrl-A", "Command-A"),
                exec: function(e) {
                    e.selectAll()
                },
                readOnly: !0
            }, {
                name: "centerselection",
                description: "Center selection",
                bindKey: n(null, "Ctrl-L"),
                exec: function(e) {
                    e.centerSelection()
                },
                readOnly: !0
            }, {
                name: "gotoline",
                description: "Go to line...",
                bindKey: n("Ctrl-L", "Command-L"),
                exec: function(e, t) {
                    "number" == typeof t && !isNaN(t) && e.gotoLine(t), e.prompt({
                        $type: "gotoLine"
                    })
                },
                readOnly: !0
            }, {
                name: "fold",
                bindKey: n("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
                exec: function(e) {
                    e.session.toggleFold(!1)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "unfold",
                bindKey: n("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
                exec: function(e) {
                    e.session.toggleFold(!0)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "toggleFoldWidget",
                bindKey: n("F2", "F2"),
                exec: function(e) {
                    e.session.toggleFoldWidget()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "toggleParentFoldWidget",
                bindKey: n("Alt-F2", "Alt-F2"),
                exec: function(e) {
                    e.session.toggleFoldWidget(!0)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "foldall",
                description: "Fold all",
                bindKey: n(null, "Ctrl-Command-Option-0"),
                exec: function(e) {
                    e.session.foldAll()
                },
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "foldOther",
                description: "Fold other",
                bindKey: n("Alt-0", "Command-Option-0"),
                exec: function(e) {
                    e.session.foldAll(), e.session.unfold(e.selection.getAllRanges())
                },
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "unfoldall",
                description: "Unfold all",
                bindKey: n("Alt-Shift-0", "Command-Option-Shift-0"),
                exec: function(e) {
                    e.session.unfold()
                },
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "findnext",
                description: "Find next",
                bindKey: n("Ctrl-K", "Command-G"),
                exec: function(e) {
                    e.findNext()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "findprevious",
                description: "Find previous",
                bindKey: n("Ctrl-Shift-K", "Command-Shift-G"),
                exec: function(e) {
                    e.findPrevious()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0
            }, {
                name: "selectOrFindNext",
                description: "Select or find next",
                bindKey: n("Alt-K", "Ctrl-G"),
                exec: function(e) {
                    e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
                },
                readOnly: !0
            }, {
                name: "selectOrFindPrevious",
                description: "Select or find previous",
                bindKey: n("Alt-Shift-K", "Ctrl-Shift-G"),
                exec: function(e) {
                    e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
                },
                readOnly: !0
            }, {
                name: "find",
                description: "Find",
                bindKey: n("Ctrl-F", "Command-F"),
                exec: function(e) {
                    o.loadModule("ace/ext/searchbox", (function(t) {
                        t.Search(e)
                    }))
                },
                readOnly: !0
            }, {
                name: "overwrite",
                description: "Overwrite",
                bindKey: "Insert",
                exec: function(e) {
                    e.toggleOverwrite()
                },
                readOnly: !0
            }, {
                name: "selecttostart",
                description: "Select to start",
                bindKey: n("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
                exec: function(e) {
                    e.getSelection().selectFileStart()
                },
                multiSelectAction: "forEach",
                readOnly: !0,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump"
            }, {
                name: "gotostart",
                description: "Go to start",
                bindKey: n("Ctrl-Home", "Command-Home|Command-Up"),
                exec: function(e) {
                    e.navigateFileStart()
                },
                multiSelectAction: "forEach",
                readOnly: !0,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump"
            }, {
                name: "selectup",
                description: "Select up",
                bindKey: n("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
                exec: function(e) {
                    e.getSelection().selectUp()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "golineup",
                description: "Go line up",
                bindKey: n("Up", "Up|Ctrl-P"),
                exec: function(e, t) {
                    e.navigateUp(t.times)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selecttoend",
                description: "Select to end",
                bindKey: n("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
                exec: function(e) {
                    e.getSelection().selectFileEnd()
                },
                multiSelectAction: "forEach",
                readOnly: !0,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump"
            }, {
                name: "gotoend",
                description: "Go to end",
                bindKey: n("Ctrl-End", "Command-End|Command-Down"),
                exec: function(e) {
                    e.navigateFileEnd()
                },
                multiSelectAction: "forEach",
                readOnly: !0,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump"
            }, {
                name: "selectdown",
                description: "Select down",
                bindKey: n("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
                exec: function(e) {
                    e.getSelection().selectDown()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "golinedown",
                description: "Go line down",
                bindKey: n("Down", "Down|Ctrl-N"),
                exec: function(e, t) {
                    e.navigateDown(t.times)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectwordleft",
                description: "Select word left",
                bindKey: n("Ctrl-Shift-Left", "Option-Shift-Left"),
                exec: function(e) {
                    e.getSelection().selectWordLeft()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "gotowordleft",
                description: "Go to word left",
                bindKey: n("Ctrl-Left", "Option-Left"),
                exec: function(e) {
                    e.navigateWordLeft()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selecttolinestart",
                description: "Select to line start",
                bindKey: n("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
                exec: function(e) {
                    e.getSelection().selectLineStart()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "gotolinestart",
                description: "Go to line start",
                bindKey: n("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
                exec: function(e) {
                    e.navigateLineStart()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectleft",
                description: "Select left",
                bindKey: n("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
                exec: function(e) {
                    e.getSelection().selectLeft()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "gotoleft",
                description: "Go to left",
                bindKey: n("Left", "Left|Ctrl-B"),
                exec: function(e, t) {
                    e.navigateLeft(t.times)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectwordright",
                description: "Select word right",
                bindKey: n("Ctrl-Shift-Right", "Option-Shift-Right"),
                exec: function(e) {
                    e.getSelection().selectWordRight()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "gotowordright",
                description: "Go to word right",
                bindKey: n("Ctrl-Right", "Option-Right"),
                exec: function(e) {
                    e.navigateWordRight()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selecttolineend",
                description: "Select to line end",
                bindKey: n("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
                exec: function(e) {
                    e.getSelection().selectLineEnd()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "gotolineend",
                description: "Go to line end",
                bindKey: n("Alt-Right|End", "Command-Right|End|Ctrl-E"),
                exec: function(e) {
                    e.navigateLineEnd()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectright",
                description: "Select right",
                bindKey: n("Shift-Right", "Shift-Right"),
                exec: function(e) {
                    e.getSelection().selectRight()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "gotoright",
                description: "Go to right",
                bindKey: n("Right", "Right|Ctrl-F"),
                exec: function(e, t) {
                    e.navigateRight(t.times)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectpagedown",
                description: "Select page down",
                bindKey: "Shift-PageDown",
                exec: function(e) {
                    e.selectPageDown()
                },
                readOnly: !0
            }, {
                name: "pagedown",
                description: "Page down",
                bindKey: n(null, "Option-PageDown"),
                exec: function(e) {
                    e.scrollPageDown()
                },
                readOnly: !0
            }, {
                name: "gotopagedown",
                description: "Go to page down",
                bindKey: n("PageDown", "PageDown|Ctrl-V"),
                exec: function(e) {
                    e.gotoPageDown()
                },
                readOnly: !0
            }, {
                name: "selectpageup",
                description: "Select page up",
                bindKey: "Shift-PageUp",
                exec: function(e) {
                    e.selectPageUp()
                },
                readOnly: !0
            }, {
                name: "pageup",
                description: "Page up",
                bindKey: n(null, "Option-PageUp"),
                exec: function(e) {
                    e.scrollPageUp()
                },
                readOnly: !0
            }, {
                name: "gotopageup",
                description: "Go to page up",
                bindKey: "PageUp",
                exec: function(e) {
                    e.gotoPageUp()
                },
                readOnly: !0
            }, {
                name: "scrollup",
                description: "Scroll up",
                bindKey: n("Ctrl-Up", null),
                exec: function(e) {
                    e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
                },
                readOnly: !0
            }, {
                name: "scrolldown",
                description: "Scroll down",
                bindKey: n("Ctrl-Down", null),
                exec: function(e) {
                    e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
                },
                readOnly: !0
            }, {
                name: "selectlinestart",
                description: "Select line start",
                bindKey: "Shift-Home",
                exec: function(e) {
                    e.getSelection().selectLineStart()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectlineend",
                description: "Select line end",
                bindKey: "Shift-End",
                exec: function(e) {
                    e.getSelection().selectLineEnd()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "togglerecording",
                description: "Toggle recording",
                bindKey: n("Ctrl-Alt-E", "Command-Option-E"),
                exec: function(e) {
                    e.commands.toggleRecording(e)
                },
                readOnly: !0
            }, {
                name: "replaymacro",
                description: "Replay macro",
                bindKey: n("Ctrl-Shift-E", "Command-Shift-E"),
                exec: function(e) {
                    e.commands.replay(e)
                },
                readOnly: !0
            }, {
                name: "jumptomatching",
                description: "Jump to matching",
                bindKey: n("Ctrl-\\|Ctrl-P", "Command-\\"),
                exec: function(e) {
                    e.jumpToMatching()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: !0
            }, {
                name: "selecttomatching",
                description: "Select to matching",
                bindKey: n("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
                exec: function(e) {
                    e.jumpToMatching(!0)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: !0
            }, {
                name: "expandToMatching",
                description: "Expand to matching",
                bindKey: n("Ctrl-Shift-M", "Ctrl-Shift-M"),
                exec: function(e) {
                    e.jumpToMatching(!0, !0)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: !0
            }, {
                name: "passKeysToBrowser",
                description: "Pass keys to browser",
                bindKey: n(null, null),
                exec: function() {},
                passEvent: !0,
                readOnly: !0
            }, {
                name: "copy",
                description: "Copy",
                exec: function(e) {},
                readOnly: !0
            }, {
                name: "cut",
                description: "Cut",
                exec: function(e) {
                    var t = e.$copyWithEmptySelection && e.selection.isEmpty() ? e.selection.getLineRange() : e.selection.getRange();
                    e._emit("cut", t), t.isEmpty() || e.session.remove(t), e.clearSelection()
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach"
            }, {
                name: "paste",
                description: "Paste",
                exec: function(e, t) {
                    e.$handlePaste(t)
                },
                scrollIntoView: "cursor"
            }, {
                name: "removeline",
                description: "Remove line",
                bindKey: n("Ctrl-D", "Command-D"),
                exec: function(e) {
                    e.removeLines()
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEachLine"
            }, {
                name: "duplicateSelection",
                description: "Duplicate selection",
                bindKey: n("Ctrl-Shift-D", "Command-Shift-D"),
                exec: function(e) {
                    e.duplicateSelection()
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach"
            }, {
                name: "sortlines",
                description: "Sort lines",
                bindKey: n("Ctrl-Alt-S", "Command-Alt-S"),
                exec: function(e) {
                    e.sortLines()
                },
                scrollIntoView: "selection",
                multiSelectAction: "forEachLine"
            }, {
                name: "togglecomment",
                description: "Toggle comment",
                bindKey: n("Ctrl-/", "Command-/"),
                exec: function(e) {
                    e.toggleCommentLines()
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart"
            }, {
                name: "toggleBlockComment",
                description: "Toggle block comment",
                bindKey: n("Ctrl-Shift-/", "Command-Shift-/"),
                exec: function(e) {
                    e.toggleBlockComment()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart"
            }, {
                name: "modifyNumberUp",
                description: "Modify number up",
                bindKey: n("Ctrl-Shift-Up", "Alt-Shift-Up"),
                exec: function(e) {
                    e.modifyNumber(1)
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach"
            }, {
                name: "modifyNumberDown",
                description: "Modify number down",
                bindKey: n("Ctrl-Shift-Down", "Alt-Shift-Down"),
                exec: function(e) {
                    e.modifyNumber(-1)
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach"
            }, {
                name: "replace",
                description: "Replace",
                bindKey: n("Ctrl-H", "Command-Option-F"),
                exec: function(e) {
                    o.loadModule("ace/ext/searchbox", (function(t) {
                        t.Search(e, !0)
                    }))
                }
            }, {
                name: "undo",
                description: "Undo",
                bindKey: n("Ctrl-Z", "Command-Z"),
                exec: function(e) {
                    e.undo()
                }
            }, {
                name: "redo",
                description: "Redo",
                bindKey: n("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
                exec: function(e) {
                    e.redo()
                }
            }, {
                name: "copylinesup",
                description: "Copy lines up",
                bindKey: n("Alt-Shift-Up", "Command-Option-Up"),
                exec: function(e) {
                    e.copyLinesUp()
                },
                scrollIntoView: "cursor"
            }, {
                name: "movelinesup",
                description: "Move lines up",
                bindKey: n("Alt-Up", "Option-Up"),
                exec: function(e) {
                    e.moveLinesUp()
                },
                scrollIntoView: "cursor"
            }, {
                name: "copylinesdown",
                description: "Copy lines down",
                bindKey: n("Alt-Shift-Down", "Command-Option-Down"),
                exec: function(e) {
                    e.copyLinesDown()
                },
                scrollIntoView: "cursor"
            }, {
                name: "movelinesdown",
                description: "Move lines down",
                bindKey: n("Alt-Down", "Option-Down"),
                exec: function(e) {
                    e.moveLinesDown()
                },
                scrollIntoView: "cursor"
            }, {
                name: "del",
                description: "Delete",
                bindKey: n("Delete", "Delete|Ctrl-D|Shift-Delete"),
                exec: function(e) {
                    e.remove("right")
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "backspace",
                description: "Backspace",
                bindKey: n("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
                exec: function(e) {
                    e.remove("left")
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "cut_or_delete",
                description: "Cut or delete",
                bindKey: n("Shift-Delete", null),
                exec: function(e) {
                    if (!e.selection.isEmpty()) return !1;
                    e.remove("left")
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "removetolinestart",
                description: "Remove to line start",
                bindKey: n("Alt-Backspace", "Command-Backspace"),
                exec: function(e) {
                    e.removeToLineStart()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "removetolineend",
                description: "Remove to line end",
                bindKey: n("Alt-Delete", "Ctrl-K|Command-Delete"),
                exec: function(e) {
                    e.removeToLineEnd()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "removetolinestarthard",
                description: "Remove to line start hard",
                bindKey: n("Ctrl-Shift-Backspace", null),
                exec: function(e) {
                    var t = e.selection.getRange();
                    t.start.column = 0, e.session.remove(t)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "removetolineendhard",
                description: "Remove to line end hard",
                bindKey: n("Ctrl-Shift-Delete", null),
                exec: function(e) {
                    var t = e.selection.getRange();
                    t.end.column = Number.MAX_VALUE, e.session.remove(t)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "removewordleft",
                description: "Remove word left",
                bindKey: n("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
                exec: function(e) {
                    e.removeWordLeft()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "removewordright",
                description: "Remove word right",
                bindKey: n("Ctrl-Delete", "Alt-Delete"),
                exec: function(e) {
                    e.removeWordRight()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "outdent",
                description: "Outdent",
                bindKey: n("Shift-Tab", "Shift-Tab"),
                exec: function(e) {
                    e.blockOutdent()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart"
            }, {
                name: "indent",
                description: "Indent",
                bindKey: n("Tab", "Tab"),
                exec: function(e) {
                    e.indent()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart"
            }, {
                name: "blockoutdent",
                description: "Block outdent",
                bindKey: n("Ctrl-[", "Ctrl-["),
                exec: function(e) {
                    e.blockOutdent()
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart"
            }, {
                name: "blockindent",
                description: "Block indent",
                bindKey: n("Ctrl-]", "Ctrl-]"),
                exec: function(e) {
                    e.blockIndent()
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart"
            }, {
                name: "insertstring",
                description: "Insert string",
                exec: function(e, t) {
                    e.insert(t)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "inserttext",
                description: "Insert text",
                exec: function(e, t) {
                    e.insert(r.stringRepeat(t.text || "", t.times || 1))
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "splitline",
                description: "Split line",
                bindKey: n(null, "Ctrl-O"),
                exec: function(e) {
                    e.splitLine()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "transposeletters",
                description: "Transpose letters",
                bindKey: n("Alt-Shift-X", "Ctrl-T"),
                exec: function(e) {
                    e.transposeLetters()
                },
                multiSelectAction: function(e) {
                    e.transposeSelections(1)
                },
                scrollIntoView: "cursor"
            }, {
                name: "touppercase",
                description: "To uppercase",
                bindKey: n("Ctrl-U", "Ctrl-U"),
                exec: function(e) {
                    e.toUpperCase()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "tolowercase",
                description: "To lowercase",
                bindKey: n("Ctrl-Shift-U", "Ctrl-Shift-U"),
                exec: function(e) {
                    e.toLowerCase()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "expandtoline",
                description: "Expand to line",
                bindKey: n("Ctrl-Shift-L", "Command-Shift-L"),
                exec: function(e) {
                    var t = e.selection.getRange();
                    t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1)
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "joinlines",
                description: "Join lines",
                bindKey: n(null, null),
                exec: function(e) {
                    for (var t = e.selection.isBackwards(), i = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), n = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), o = e.session.doc.getLine(i.row).length, a = e.session.doc.getTextRange(e.selection.getRange()).replace(/\n\s*/, " ").length, c = e.session.doc.getLine(i.row), l = i.row + 1; l <= n.row + 1; l++) {
                        var h = r.stringTrimLeft(r.stringTrimRight(e.session.doc.getLine(l)));
                        0 !== h.length && (h = " " + h), c += h
                    }
                    n.row + 1 < e.session.doc.getLength() - 1 && (c += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new s(i.row, 0, n.row + 2, 0), c), a > 0 ? (e.selection.moveCursorTo(i.row, i.column), e.selection.selectTo(i.row, i.column + a)) : (o = e.session.doc.getLine(i.row).length > o ? o + 1 : o, e.selection.moveCursorTo(i.row, o))
                },
                multiSelectAction: "forEach",
                readOnly: !0
            }, {
                name: "invertSelection",
                description: "Invert selection",
                bindKey: n(null, null),
                exec: function(e) {
                    var t = e.session.doc.getLength() - 1,
                        i = e.session.doc.getLine(t).length,
                        n = e.selection.rangeList.ranges,
                        r = [];
                    n.length < 1 && (n = [e.selection.getRange()]);
                    for (var o = 0; o < n.length; o++) o == n.length - 1 && (n[o].end.row !== t || n[o].end.column !== i) && r.push(new s(n[o].end.row, n[o].end.column, t, i)), 0 === o ? (0 !== n[o].start.row || 0 !== n[o].start.column) && r.push(new s(0, 0, n[o].start.row, n[o].start.column)) : r.push(new s(n[o - 1].end.row, n[o - 1].end.column, n[o].start.row, n[o].start.column));
                    e.exitMultiSelectMode(), e.clearSelection();
                    for (o = 0; o < r.length; o++) e.selection.addRange(r[o], !1)
                },
                readOnly: !0,
                scrollIntoView: "none"
            }, {
                name: "addLineAfter",
                exec: function(e) {
                    e.selection.clearSelection(), e.navigateLineEnd(), e.insert("\n")
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "addLineBefore",
                exec: function(e) {
                    e.selection.clearSelection();
                    var t = e.getCursorPosition();
                    e.selection.moveTo(t.row - 1, Number.MAX_VALUE), e.insert("\n"), 0 === t.row && e.navigateUp()
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            }, {
                name: "openCommandPallete",
                description: "Open command pallete",
                bindKey: n("F1", "F1"),
                exec: function(e) {
                    e.prompt({
                        $type: "commands"
                    })
                },
                readOnly: !0
            }, {
                name: "modeSelect",
                description: "Change language mode...",
                bindKey: n(null, null),
                exec: function(e) {
                    e.prompt({
                        $type: "modes"
                    })
                },
                readOnly: !0
            }]
        })), ace.define("ace/editor", [], (function(e, t, i) {
            "use strict";
            e("./lib/fixoldbrowsers");
            var n = e("./lib/oop"),
                r = e("./lib/dom"),
                o = e("./lib/lang"),
                s = e("./lib/useragent"),
                a = e("./keyboard/textinput").TextInput,
                c = e("./mouse/mouse_handler").MouseHandler,
                l = e("./mouse/fold_handler").FoldHandler,
                h = e("./keyboard/keybinding").KeyBinding,
                u = e("./edit_session").EditSession,
                d = e("./search").Search,
                g = e("./range").Range,
                f = e("./lib/event_emitter").EventEmitter,
                p = e("./commands/command_manager").CommandManager,
                m = e("./commands/default_commands").commands,
                v = e("./config"),
                w = e("./token_iterator").TokenIterator,
                b = e("./clipboard"),
                y = function(e, t, i) {
                    var n = e.getContainerElement();
                    this.container = n, this.renderer = e, this.id = "editor" + ++y.$uid, this.commands = new p(s.isMac ? "mac" : "win", m), "object" == typeof document && (this.textInput = new a(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new c(this), new l(this)), this.keyBinding = new h(this), this.$search = (new d).set({
                        wrap: !0
                    }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = o.delayedCall(function() {
                        this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
                    }.bind(this)), this.on("change", (function(e, t) {
                        t._$emitInputEvent.schedule(31)
                    })), this.setSession(t || i && i.session || new u("")), v.resetOptions(this), i && this.setOptions(i), v._signal("editor", this)
                };
            y.$uid = 0,
                function() {
                    n.implement(this, f), this.$initOperationListeners = function() {
                        this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = o.delayedCall(this.endOperation.bind(this, !0)), this.on("change", function() {
                            this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.docChanged = !0
                        }.bind(this), !0), this.on("changeSelection", function() {
                            this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.selectionChanged = !0
                        }.bind(this), !0)
                    }, this.curOp = null, this.prevOp = {}, this.startOperation = function(e) {
                        if (this.curOp) {
                            if (!e || this.curOp.command) return;
                            this.prevOp = this.curOp
                        }
                        e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = this.session.curOp = {
                            command: e.command || {},
                            args: e.args,
                            scrollTop: this.renderer.scrollTop
                        }, this.curOp.selectionBefore = this.selection.toJSON()
                    }, this.endOperation = function(e) {
                        if (this.curOp) {
                            if (e && !1 === e.returnValue || !this.session) return this.curOp = null;
                            if (1 == e && this.curOp.command && "mouse" == this.curOp.command.name) return;
                            if (this._signal("beforeEndOperation"), !this.curOp) return;
                            var t = this.curOp.command,
                                i = t && t.scrollIntoView;
                            if (i) {
                                switch (i) {
                                    case "center-animate":
                                        i = "animate";
                                    case "center":
                                        this.renderer.scrollCursorIntoView(null, .5);
                                        break;
                                    case "animate":
                                    case "cursor":
                                        this.renderer.scrollCursorIntoView();
                                        break;
                                    case "selectionPart":
                                        var n = this.selection.getRange(),
                                            r = this.renderer.layerConfig;
                                        (n.start.row >= r.lastRow || n.end.row <= r.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
                                }
                                "animate" == i && this.renderer.animateScrolling(this.curOp.scrollTop)
                            }
                            var o = this.selection.toJSON();
                            this.curOp.selectionAfter = o, this.$lastSel = this.selection.toJSON(), this.session.getUndoManager().addSelection(o), this.prevOp = this.curOp, this.curOp = null
                        }
                    }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function(e) {
                        if (this.$mergeUndoDeltas) {
                            var t = this.prevOp,
                                i = this.$mergeableCommands,
                                n = t.command && e.command.name == t.command.name;
                            if ("insertstring" == e.command.name) {
                                var r = e.args;
                                void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0), n = n && this.mergeNextCommand && (!/\s/.test(r) || /\s/.test(t.args)), this.mergeNextCommand = !0
                            } else n = n && -1 !== i.indexOf(e.command.name);
                            "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (n = !1), n ? this.session.mergeUndoDeltas = !0 : -1 !== i.indexOf(e.command.name) && (this.sequenceStartTime = Date.now())
                        }
                    }, this.setKeyboardHandler = function(e, t) {
                        if (e && "string" == typeof e && "ace" != e) {
                            this.$keybindingId = e;
                            var i = this;
                            v.loadModule(["keybinding", e], (function(n) {
                                i.$keybindingId == e && i.keyBinding.setKeyboardHandler(n && n.handler), t && t()
                            }))
                        } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e), t && t()
                    }, this.getKeyboardHandler = function() {
                        return this.keyBinding.getKeyboardHandler()
                    }, this.setSession = function(e) {
                        if (this.session != e) {
                            this.curOp && this.endOperation(), this.curOp = {};
                            var t = this.session;
                            if (t) {
                                this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
                                var i = this.session.getSelection();
                                i.off("changeCursor", this.$onCursorChange), i.off("changeSelection", this.$onSelectionChange)
                            }
                            this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.on("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", {
                                session: e,
                                oldSession: t
                            }), this.curOp = null, t && t._signal("changeEditor", {
                                oldEditor: this
                            }), e && e._signal("changeEditor", {
                                editor: this
                            }), e && e.bgTokenizer && e.bgTokenizer.scheduleStart()
                        }
                    }, this.getSession = function() {
                        return this.session
                    }, this.setValue = function(e, t) {
                        return this.session.doc.setValue(e), t ? 1 == t ? this.navigateFileEnd() : -1 == t && this.navigateFileStart() : this.selectAll(), e
                    }, this.getValue = function() {
                        return this.session.getValue()
                    }, this.getSelection = function() {
                        return this.selection
                    }, this.resize = function(e) {
                        this.renderer.onResize(e)
                    }, this.setTheme = function(e, t) {
                        this.renderer.setTheme(e, t)
                    }, this.getTheme = function() {
                        return this.renderer.getTheme()
                    }, this.setStyle = function(e) {
                        this.renderer.setStyle(e)
                    }, this.unsetStyle = function(e) {
                        this.renderer.unsetStyle(e)
                    }, this.getFontSize = function() {
                        return this.getOption("fontSize") || r.computedStyle(this.container).fontSize
                    }, this.setFontSize = function(e) {
                        this.setOption("fontSize", e)
                    }, this.$highlightBrackets = function() {
                        if (!this.$highlightPending) {
                            var e = this;
                            this.$highlightPending = !0, setTimeout((function() {
                                e.$highlightPending = !1;
                                var t = e.session;
                                if (t && t.bgTokenizer) {
                                    t.$bracketHighlight && (t.$bracketHighlight.markerIds.forEach((function(e) {
                                        t.removeMarker(e)
                                    })), t.$bracketHighlight = null);
                                    var i = t.getMatchingBracketRanges(e.getCursorPosition());
                                    if (!i && t.$mode.getMatching && (i = t.$mode.getMatching(e.session)), i) {
                                        var n = "ace_bracket";
                                        Array.isArray(i) ? 1 == i.length && (n = "ace_error_bracket") : i = [i], 2 == i.length && (0 == g.comparePoints(i[0].end, i[1].start) ? i = [g.fromPoints(i[0].start, i[1].end)] : 0 == g.comparePoints(i[0].start, i[1].end) && (i = [g.fromPoints(i[1].start, i[0].end)])), t.$bracketHighlight = {
                                            ranges: i,
                                            markerIds: i.map((function(e) {
                                                return t.addMarker(e, n, "text")
                                            }))
                                        }
                                    }
                                }
                            }), 50)
                        }
                    }, this.$highlightTags = function() {
                        if (!this.$highlightTagPending) {
                            var e = this;
                            this.$highlightTagPending = !0, setTimeout((function() {
                                e.$highlightTagPending = !1;
                                var t = e.session;
                                if (t && t.bgTokenizer) {
                                    var i = e.getCursorPosition(),
                                        n = new w(e.session, i.row, i.column),
                                        r = n.getCurrentToken();
                                    if (!r || !/\b(?:tag-open|tag-name)/.test(r.type)) return t.removeMarker(t.$tagHighlight), void(t.$tagHighlight = null);
                                    if (-1 == r.type.indexOf("tag-open") || (r = n.stepForward())) {
                                        var o = r.value,
                                            s = 0,
                                            a = n.stepBackward();
                                        if ("<" == a.value)
                                            do {
                                                a = r, (r = n.stepForward()) && r.value === o && -1 !== r.type.indexOf("tag-name") && ("<" === a.value ? s++ : "</" === a.value && s--)
                                            } while (r && s >= 0);
                                        else {
                                            do {
                                                r = a, a = n.stepBackward(), r && r.value === o && -1 !== r.type.indexOf("tag-name") && ("<" === a.value ? s++ : "</" === a.value && s--)
                                            } while (a && s <= 0);
                                            n.stepForward()
                                        }
                                        if (!r) return t.removeMarker(t.$tagHighlight), void(t.$tagHighlight = null);
                                        var c = n.getCurrentTokenRow(),
                                            l = n.getCurrentTokenColumn(),
                                            h = new g(c, l, c, l + r.value.length),
                                            u = t.$backMarkers[t.$tagHighlight];
                                        t.$tagHighlight && null != u && 0 !== h.compareRange(u.range) && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = null), t.$tagHighlight || (t.$tagHighlight = t.addMarker(h, "ace_bracket", "text"))
                                    }
                                }
                            }), 50)
                        }
                    }, this.focus = function() {
                        var e = this;
                        setTimeout((function() {
                            e.isFocused() || e.textInput.focus()
                        })), this.textInput.focus()
                    }, this.isFocused = function() {
                        return this.textInput.isFocused()
                    }, this.blur = function() {
                        this.textInput.blur()
                    }, this.onFocus = function(e) {
                        this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e))
                    }, this.onBlur = function(e) {
                        this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e))
                    }, this.$cursorChange = function() {
                        this.renderer.updateCursor()
                    }, this.onDocumentChange = function(e) {
                        var t = this.session.$useWrapMode,
                            i = e.start.row == e.end.row ? e.end.row : 1 / 0;
                        this.renderer.updateLines(e.start.row, i, t), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine()
                    }, this.onTokenizerUpdate = function(e) {
                        var t = e.data;
                        this.renderer.updateLines(t.first, t.last)
                    }, this.onScrollTopChange = function() {
                        this.renderer.scrollToY(this.session.getScrollTop())
                    }, this.onScrollLeftChange = function() {
                        this.renderer.scrollToX(this.session.getScrollLeft())
                    }, this.onCursorChange = function() {
                        this.$cursorChange(), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection")
                    }, this.$updateHighlightActiveLine = function() {
                        var e, t = this.getSession();
                        if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (e = !1), this.renderer.$maxLines && 1 === this.session.getLength() && !(this.renderer.$minLines > 1) && (e = !1)), t.$highlightLineMarker && !e) t.removeMarker(t.$highlightLineMarker.id), t.$highlightLineMarker = null;
                        else if (!t.$highlightLineMarker && e) {
                            var i = new g(e.row, e.column, e.row, 1 / 0);
                            i.id = t.addMarker(i, "ace_active-line", "screenLine"), t.$highlightLineMarker = i
                        } else e && (t.$highlightLineMarker.start.row = e.row, t.$highlightLineMarker.end.row = e.row, t.$highlightLineMarker.start.column = e.column, t._signal("changeBackMarker"))
                    }, this.onSelectionChange = function(e) {
                        var t = this.session;
                        if (t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine();
                        else {
                            var i = this.selection.getRange(),
                                n = this.getSelectionStyle();
                            t.$selectionMarker = t.addMarker(i, "ace_selection", n)
                        }
                        var r = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
                        this.session.highlight(r), this._signal("changeSelection")
                    }, this.$getSelectionHighLightRegexp = function() {
                        var e = this.session,
                            t = this.getSelectionRange();
                        if (!t.isEmpty() && !t.isMultiLine()) {
                            var i = t.start.column,
                                n = t.end.column,
                                r = e.getLine(t.start.row),
                                o = r.substring(i, n);
                            if (!(o.length > 5e3) && /[\w\d]/.test(o)) {
                                var s = this.$search.$assembleRegExp({
                                        wholeWord: !0,
                                        caseSensitive: !0,
                                        needle: o
                                    }),
                                    a = r.substring(i - 1, n + 1);
                                if (s.test(a)) return s
                            }
                        }
                    }, this.onChangeFrontMarker = function() {
                        this.renderer.updateFrontMarkers()
                    }, this.onChangeBackMarker = function() {
                        this.renderer.updateBackMarkers()
                    }, this.onChangeBreakpoint = function() {
                        this.renderer.updateBreakpoints()
                    }, this.onChangeAnnotation = function() {
                        this.renderer.setAnnotations(this.session.getAnnotations())
                    }, this.onChangeMode = function(e) {
                        this.renderer.updateText(), this._emit("changeMode", e)
                    }, this.onChangeWrapLimit = function() {
                        this.renderer.updateFull()
                    }, this.onChangeWrapMode = function() {
                        this.renderer.onResize(!0)
                    }, this.onChangeFold = function() {
                        this.$updateHighlightActiveLine(), this.renderer.updateFull()
                    }, this.getSelectedText = function() {
                        return this.session.getTextRange(this.getSelectionRange())
                    }, this.getCopyText = function() {
                        var e = this.getSelectedText(),
                            t = this.session.doc.getNewLineCharacter(),
                            i = !1;
                        if (!e && this.$copyWithEmptySelection) {
                            i = !0;
                            for (var n = this.selection.getAllRanges(), r = 0; r < n.length; r++) {
                                var o = n[r];
                                r && n[r - 1].start.row == o.start.row || (e += this.session.getLine(o.start.row) + t)
                            }
                        }
                        var s = {
                            text: e
                        };
                        return this._signal("copy", s), b.lineMode = i ? s.text : "", s.text
                    }, this.onCopy = function() {
                        this.commands.exec("copy", this)
                    }, this.onCut = function() {
                        this.commands.exec("cut", this)
                    }, this.onPaste = function(e, t) {
                        var i = {
                            text: e,
                            event: t
                        };
                        this.commands.exec("paste", this, i)
                    }, this.$handlePaste = function(e) {
                        "string" == typeof e && (e = {
                            text: e
                        }), this._signal("paste", e);
                        var t = e.text,
                            i = t == b.lineMode,
                            n = this.session;
                        if (!this.inMultiSelectMode || this.inVirtualSelectionMode) i ? n.insert({
                            row: this.selection.lead.row,
                            column: 0
                        }, t) : this.insert(t);
                        else if (i) this.selection.rangeList.ranges.forEach((function(e) {
                            n.insert({
                                row: e.start.row,
                                column: 0
                            }, t)
                        }));
                        else {
                            var r = t.split(/\r\n|\r|\n/),
                                o = this.selection.rangeList.ranges,
                                s = !(2 != r.length || r[0] && r[1]);
                            if (r.length != o.length || s) return this.commands.exec("insertstring", this, t);
                            for (var a = o.length; a--;) {
                                var c = o[a];
                                c.isEmpty() || n.remove(c), n.insert(c.start, r[a])
                            }
                        }
                    }, this.execCommand = function(e, t) {
                        return this.commands.exec(e, this, t)
                    }, this.insert = function(e, t) {
                        var i = this.session,
                            n = i.getMode(),
                            r = this.getCursorPosition();
                        if (this.getBehavioursEnabled() && !t) {
                            var o = n.transformAction(i.getState(r.row), "insertion", this, i, e);
                            o && (e !== o.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), e = o.text)
                        }
                        if ("\t" == e && (e = this.session.getTabString()), this.selection.isEmpty()) {
                            if (this.session.getOverwrite() && -1 == e.indexOf("\n")) {
                                (s = new g.fromPoints(r, r)).end.column += e.length, this.session.remove(s)
                            }
                        } else {
                            var s = this.getSelectionRange();
                            r = this.session.remove(s), this.clearSelection()
                        }
                        if ("\n" == e || "\r\n" == e) {
                            var a = i.getLine(r.row);
                            if (r.column > a.search(/\S|$/)) {
                                var c = a.substr(r.column).search(/\S|$/);
                                i.doc.removeInLine(r.row, r.column, r.column + c)
                            }
                        }
                        this.clearSelection();
                        var l = r.column,
                            h = i.getState(r.row),
                            u = (a = i.getLine(r.row), n.checkOutdent(h, a, e));
                        if (i.insert(r, e), o && o.selection && (2 == o.selection.length ? this.selection.setSelectionRange(new g(r.row, l + o.selection[0], r.row, l + o.selection[1])) : this.selection.setSelectionRange(new g(r.row + o.selection[0], o.selection[1], r.row + o.selection[2], o.selection[3]))), i.getDocument().isNewLine(e)) {
                            var d = n.getNextLineIndent(h, a.slice(0, r.column), i.getTabString());
                            i.insert({
                                row: r.row + 1,
                                column: 0
                            }, d)
                        }
                        u && n.autoOutdent(h, i, r.row)
                    }, this.onTextInput = function(e, t) {
                        if (!t) return this.keyBinding.onTextInput(e);
                        this.startOperation({
                            command: {
                                name: "insertstring"
                            }
                        });
                        var i = this.applyComposition.bind(this, e, t);
                        this.selection.rangeCount ? this.forEachSelection(i) : i(), this.endOperation()
                    }, this.applyComposition = function(e, t) {
                        var i;
                        (t.extendLeft || t.extendRight) && ((i = this.selection.getRange()).start.column -= t.extendLeft, i.end.column += t.extendRight, this.selection.setRange(i), !e && !i.isEmpty() && this.remove());
                        ((e || !this.selection.isEmpty()) && this.insert(e, !0), t.restoreStart || t.restoreEnd) && ((i = this.selection.getRange()).start.column -= t.restoreStart, i.end.column -= t.restoreEnd, this.selection.setRange(i))
                    }, this.onCommandKey = function(e, t, i) {
                        return this.keyBinding.onCommandKey(e, t, i)
                    }, this.setOverwrite = function(e) {
                        this.session.setOverwrite(e)
                    }, this.getOverwrite = function() {
                        return this.session.getOverwrite()
                    }, this.toggleOverwrite = function() {
                        this.session.toggleOverwrite()
                    }, this.setScrollSpeed = function(e) {
                        this.setOption("scrollSpeed", e)
                    }, this.getScrollSpeed = function() {
                        return this.getOption("scrollSpeed")
                    }, this.setDragDelay = function(e) {
                        this.setOption("dragDelay", e)
                    }, this.getDragDelay = function() {
                        return this.getOption("dragDelay")
                    }, this.setSelectionStyle = function(e) {
                        this.setOption("selectionStyle", e)
                    }, this.getSelectionStyle = function() {
                        return this.getOption("selectionStyle")
                    }, this.setHighlightActiveLine = function(e) {
                        this.setOption("highlightActiveLine", e)
                    }, this.getHighlightActiveLine = function() {
                        return this.getOption("highlightActiveLine")
                    }, this.setHighlightGutterLine = function(e) {
                        this.setOption("highlightGutterLine", e)
                    }, this.getHighlightGutterLine = function() {
                        return this.getOption("highlightGutterLine")
                    }, this.setHighlightSelectedWord = function(e) {
                        this.setOption("highlightSelectedWord", e)
                    }, this.getHighlightSelectedWord = function() {
                        return this.$highlightSelectedWord
                    }, this.setAnimatedScroll = function(e) {
                        this.renderer.setAnimatedScroll(e)
                    }, this.getAnimatedScroll = function() {
                        return this.renderer.getAnimatedScroll()
                    }, this.setShowInvisibles = function(e) {
                        this.renderer.setShowInvisibles(e)
                    }, this.getShowInvisibles = function() {
                        return this.renderer.getShowInvisibles()
                    }, this.setDisplayIndentGuides = function(e) {
                        this.renderer.setDisplayIndentGuides(e)
                    }, this.getDisplayIndentGuides = function() {
                        return this.renderer.getDisplayIndentGuides()
                    }, this.setShowPrintMargin = function(e) {
                        this.renderer.setShowPrintMargin(e)
                    }, this.getShowPrintMargin = function() {
                        return this.renderer.getShowPrintMargin()
                    }, this.setPrintMarginColumn = function(e) {
                        this.renderer.setPrintMarginColumn(e)
                    }, this.getPrintMarginColumn = function() {
                        return this.renderer.getPrintMarginColumn()
                    }, this.setReadOnly = function(e) {
                        this.setOption("readOnly", e)
                    }, this.getReadOnly = function() {
                        return this.getOption("readOnly")
                    }, this.setBehavioursEnabled = function(e) {
                        this.setOption("behavioursEnabled", e)
                    }, this.getBehavioursEnabled = function() {
                        return this.getOption("behavioursEnabled")
                    }, this.setWrapBehavioursEnabled = function(e) {
                        this.setOption("wrapBehavioursEnabled", e)
                    }, this.getWrapBehavioursEnabled = function() {
                        return this.getOption("wrapBehavioursEnabled")
                    }, this.setShowFoldWidgets = function(e) {
                        this.setOption("showFoldWidgets", e)
                    }, this.getShowFoldWidgets = function() {
                        return this.getOption("showFoldWidgets")
                    }, this.setFadeFoldWidgets = function(e) {
                        this.setOption("fadeFoldWidgets", e)
                    }, this.getFadeFoldWidgets = function() {
                        return this.getOption("fadeFoldWidgets")
                    }, this.remove = function(e) {
                        this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
                        var t = this.getSelectionRange();
                        if (this.getBehavioursEnabled()) {
                            var i = this.session,
                                n = i.getState(t.start.row),
                                r = i.getMode().transformAction(n, "deletion", this, i, t);
                            if (0 === t.end.column) {
                                var o = i.getTextRange(t);
                                if ("\n" == o[o.length - 1]) {
                                    var s = i.getLine(t.end.row);
                                    /^\s+$/.test(s) && (t.end.column = s.length)
                                }
                            }
                            r && (t = r)
                        }
                        this.session.remove(t), this.clearSelection()
                    }, this.removeWordRight = function() {
                        this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                    }, this.removeWordLeft = function() {
                        this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                    }, this.removeToLineStart = function() {
                        this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                    }, this.removeToLineEnd = function() {
                        this.selection.isEmpty() && this.selection.selectLineEnd();
                        var e = this.getSelectionRange();
                        e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
                    }, this.splitLine = function() {
                        this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
                        var e = this.getCursorPosition();
                        this.insert("\n"), this.moveCursorToPosition(e)
                    }, this.transposeLetters = function() {
                        if (this.selection.isEmpty()) {
                            var e = this.getCursorPosition(),
                                t = e.column;
                            if (0 !== t) {
                                var i, n, r = this.session.getLine(e.row);
                                t < r.length ? (i = r.charAt(t) + r.charAt(t - 1), n = new g(e.row, t - 1, e.row, t + 1)) : (i = r.charAt(t - 1) + r.charAt(t - 2), n = new g(e.row, t - 2, e.row, t)), this.session.replace(n, i), this.session.selection.moveToPosition(n.end)
                            }
                        }
                    }, this.toLowerCase = function() {
                        var e = this.getSelectionRange();
                        this.selection.isEmpty() && this.selection.selectWord();
                        var t = this.getSelectionRange(),
                            i = this.session.getTextRange(t);
                        this.session.replace(t, i.toLowerCase()), this.selection.setSelectionRange(e)
                    }, this.toUpperCase = function() {
                        var e = this.getSelectionRange();
                        this.selection.isEmpty() && this.selection.selectWord();
                        var t = this.getSelectionRange(),
                            i = this.session.getTextRange(t);
                        this.session.replace(t, i.toUpperCase()), this.selection.setSelectionRange(e)
                    }, this.indent = function() {
                        var e = this.session,
                            t = this.getSelectionRange();
                        if (!(t.start.row < t.end.row)) {
                            if (t.start.column < t.end.column) {
                                var i = e.getTextRange(t);
                                if (!/^\s+$/.test(i)) {
                                    h = this.$getSelectedRows();
                                    return void e.indentRows(h.first, h.last, "\t")
                                }
                            }
                            var n = e.getLine(t.start.row),
                                r = t.start,
                                s = e.getTabSize(),
                                a = e.documentToScreenColumn(r.row, r.column);
                            if (this.session.getUseSoftTabs()) var c = s - a % s,
                                l = o.stringRepeat(" ", c);
                            else {
                                for (c = a % s;
                                    " " == n[t.start.column - 1] && c;) t.start.column--, c--;
                                this.selection.setSelectionRange(t), l = "\t"
                            }
                            return this.insert(l)
                        }
                        var h = this.$getSelectedRows();
                        e.indentRows(h.first, h.last, "\t")
                    }, this.blockIndent = function() {
                        var e = this.$getSelectedRows();
                        this.session.indentRows(e.first, e.last, "\t")
                    }, this.blockOutdent = function() {
                        var e = this.session.getSelection();
                        this.session.outdentRows(e.getRange())
                    }, this.sortLines = function() {
                        for (var e = this.$getSelectedRows(), t = this.session, i = [], n = e.first; n <= e.last; n++) i.push(t.getLine(n));
                        i.sort((function(e, t) {
                            return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
                        }));
                        var r = new g(0, 0, 0, 0);
                        for (n = e.first; n <= e.last; n++) {
                            var o = t.getLine(n);
                            r.start.row = n, r.end.row = n, r.end.column = o.length, t.replace(r, i[n - e.first])
                        }
                    }, this.toggleCommentLines = function() {
                        var e = this.session.getState(this.getCursorPosition().row),
                            t = this.$getSelectedRows();
                        this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
                    }, this.toggleBlockComment = function() {
                        var e = this.getCursorPosition(),
                            t = this.session.getState(e.row),
                            i = this.getSelectionRange();
                        this.session.getMode().toggleBlockComment(t, this.session, i, e)
                    }, this.getNumberAt = function(e, t) {
                        var i = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                        i.lastIndex = 0;
                        for (var n = this.session.getLine(e); i.lastIndex < t;) {
                            var r = i.exec(n);
                            if (r.index <= t && r.index + r[0].length >= t) return {
                                value: r[0],
                                start: r.index,
                                end: r.index + r[0].length
                            }
                        }
                        return null
                    }, this.modifyNumber = function(e) {
                        var t = this.selection.getCursor().row,
                            i = this.selection.getCursor().column,
                            n = new g(t, i - 1, t, i),
                            r = this.session.getTextRange(n);
                        if (!isNaN(parseFloat(r)) && isFinite(r)) {
                            var o = this.getNumberAt(t, i);
                            if (o) {
                                var s = o.value.indexOf(".") >= 0 ? o.start + o.value.indexOf(".") + 1 : o.end,
                                    a = o.start + o.value.length - s,
                                    c = parseFloat(o.value);
                                c *= Math.pow(10, a), s !== o.end && i < s ? e *= Math.pow(10, o.end - i - 1) : e *= Math.pow(10, o.end - i), c += e;
                                var l = (c /= Math.pow(10, a)).toFixed(a),
                                    h = new g(t, o.start, t, o.end);
                                this.session.replace(h, l), this.moveCursorTo(t, Math.max(o.start + 1, i + l.length - o.value.length))
                            }
                        } else this.toggleWord()
                    }, this.$toggleWordPairs = [
                        ["first", "last"],
                        ["true", "false"],
                        ["yes", "no"],
                        ["width", "height"],
                        ["top", "bottom"],
                        ["right", "left"],
                        ["on", "off"],
                        ["x", "y"],
                        ["get", "set"],
                        ["max", "min"],
                        ["horizontal", "vertical"],
                        ["show", "hide"],
                        ["add", "remove"],
                        ["up", "down"],
                        ["before", "after"],
                        ["even", "odd"],
                        ["in", "out"],
                        ["inside", "outside"],
                        ["next", "previous"],
                        ["increase", "decrease"],
                        ["attach", "detach"],
                        ["&&", "||"],
                        ["==", "!="]
                    ], this.toggleWord = function() {
                        var e = this.selection.getCursor().row,
                            t = this.selection.getCursor().column;
                        this.selection.selectWord();
                        var i = this.getSelectedText(),
                            n = this.selection.getWordRange().start.column,
                            r = i.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/),
                            s = t - n - 1;
                        s < 0 && (s = 0);
                        var a = 0,
                            c = 0,
                            l = this;
                        i.match(/[A-Za-z0-9_]+/) && r.forEach((function(t, r) {
                            c = a + t.length, s >= a && s <= c && (i = t, l.selection.clearSelection(), l.moveCursorTo(e, a + n), l.selection.selectTo(e, c + n)), a = c
                        }));
                        for (var h, u = this.$toggleWordPairs, d = 0; d < u.length; d++)
                            for (var g = u[d], f = 0; f <= 1; f++) {
                                var p = +!f,
                                    m = i.match(new RegExp("^\\s?_?(" + o.escapeRegExp(g[f]) + ")\\s?$", "i"));
                                if (m) i.match(new RegExp("([_]|^|\\s)(" + o.escapeRegExp(m[1]) + ")($|\\s)", "g")) && (h = i.replace(new RegExp(o.escapeRegExp(g[f]), "i"), (function(e) {
                                    var t = g[p];
                                    return e.toUpperCase() == e ? t = t.toUpperCase() : e.charAt(0).toUpperCase() == e.charAt(0) && (t = t.substr(0, 0) + g[p].charAt(0).toUpperCase() + t.substr(1)), t
                                })), this.insert(h), h = "")
                            }
                    }, this.removeLines = function() {
                        var e = this.$getSelectedRows();
                        this.session.removeFullLines(e.first, e.last), this.clearSelection()
                    }, this.duplicateSelection = function() {
                        var e = this.selection,
                            t = this.session,
                            i = e.getRange(),
                            n = e.isBackwards();
                        if (i.isEmpty()) {
                            var r = i.start.row;
                            t.duplicateLines(r, r)
                        } else {
                            var o = n ? i.start : i.end,
                                s = t.insert(o, t.getTextRange(i), !1);
                            i.start = o, i.end = s, e.setSelectionRange(i, n)
                        }
                    }, this.moveLinesDown = function() {
                        this.$moveLines(1, !1)
                    }, this.moveLinesUp = function() {
                        this.$moveLines(-1, !1)
                    }, this.moveText = function(e, t, i) {
                        return this.session.moveText(e, t, i)
                    }, this.copyLinesUp = function() {
                        this.$moveLines(-1, !0)
                    }, this.copyLinesDown = function() {
                        this.$moveLines(1, !0)
                    }, this.$moveLines = function(e, t) {
                        var i, n, r = this.selection;
                        if (!r.inMultiSelectMode || this.inVirtualSelectionMode) {
                            var o = r.toOrientedRange();
                            i = this.$getSelectedRows(o), n = this.session.$moveLines(i.first, i.last, t ? 0 : e), t && -1 == e && (n = 0), o.moveBy(n, 0), r.fromOrientedRange(o)
                        } else {
                            var s = r.rangeList.ranges;
                            r.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
                            for (var a = 0, c = 0, l = s.length, h = 0; h < l; h++) {
                                var u = h;
                                s[h].moveBy(a, 0);
                                for (var d = (i = this.$getSelectedRows(s[h])).first, g = i.last; ++h < l;) {
                                    c && s[h].moveBy(c, 0);
                                    var f = this.$getSelectedRows(s[h]);
                                    if (t && f.first != g) break;
                                    if (!t && f.first > g + 1) break;
                                    g = f.last
                                }
                                for (h--, a = this.session.$moveLines(d, g, t ? 0 : e), t && -1 == e && (u = h + 1); u <= h;) s[u].moveBy(a, 0), u++;
                                t || (a = 0), c += a
                            }
                            r.fromOrientedRange(r.ranges[0]), r.rangeList.attach(this.session), this.inVirtualSelectionMode = !1
                        }
                    }, this.$getSelectedRows = function(e) {
                        return e = (e || this.getSelectionRange()).collapseRows(), {
                            first: this.session.getRowFoldStart(e.start.row),
                            last: this.session.getRowFoldEnd(e.end.row)
                        }
                    }, this.onCompositionStart = function(e) {
                        this.renderer.showComposition(e)
                    }, this.onCompositionUpdate = function(e) {
                        this.renderer.setCompositionText(e)
                    }, this.onCompositionEnd = function() {
                        this.renderer.hideComposition()
                    }, this.getFirstVisibleRow = function() {
                        return this.renderer.getFirstVisibleRow()
                    }, this.getLastVisibleRow = function() {
                        return this.renderer.getLastVisibleRow()
                    }, this.isRowVisible = function(e) {
                        return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
                    }, this.isRowFullyVisible = function(e) {
                        return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
                    }, this.$getVisibleRowCount = function() {
                        return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
                    }, this.$moveByPage = function(e, t) {
                        var i = this.renderer,
                            n = this.renderer.layerConfig,
                            r = e * Math.floor(n.height / n.lineHeight);
                        !0 === t ? this.selection.$moveSelection((function() {
                            this.moveCursorBy(r, 0)
                        })) : !1 === t && (this.selection.moveCursorBy(r, 0), this.selection.clearSelection());
                        var o = i.scrollTop;
                        i.scrollBy(0, r * n.lineHeight), null != t && i.scrollCursorIntoView(null, .5), i.animateScrolling(o)
                    }, this.selectPageDown = function() {
                        this.$moveByPage(1, !0)
                    }, this.selectPageUp = function() {
                        this.$moveByPage(-1, !0)
                    }, this.gotoPageDown = function() {
                        this.$moveByPage(1, !1)
                    }, this.gotoPageUp = function() {
                        this.$moveByPage(-1, !1)
                    }, this.scrollPageDown = function() {
                        this.$moveByPage(1)
                    }, this.scrollPageUp = function() {
                        this.$moveByPage(-1)
                    }, this.scrollToRow = function(e) {
                        this.renderer.scrollToRow(e)
                    }, this.scrollToLine = function(e, t, i, n) {
                        this.renderer.scrollToLine(e, t, i, n)
                    }, this.centerSelection = function() {
                        var e = this.getSelectionRange(),
                            t = {
                                row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                                column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
                            };
                        this.renderer.alignCursor(t, .5)
                    }, this.getCursorPosition = function() {
                        return this.selection.getCursor()
                    }, this.getCursorPositionScreen = function() {
                        return this.session.documentToScreenPosition(this.getCursorPosition())
                    }, this.getSelectionRange = function() {
                        return this.selection.getRange()
                    }, this.selectAll = function() {
                        this.selection.selectAll()
                    }, this.clearSelection = function() {
                        this.selection.clearSelection()
                    }, this.moveCursorTo = function(e, t) {
                        this.selection.moveCursorTo(e, t)
                    }, this.moveCursorToPosition = function(e) {
                        this.selection.moveCursorToPosition(e)
                    }, this.jumpToMatching = function(e, t) {
                        var i = this.getCursorPosition(),
                            n = new w(this.session, i.row, i.column),
                            r = n.getCurrentToken(),
                            o = r || n.stepForward();
                        if (o) {
                            var s, a, c = !1,
                                l = {},
                                h = i.column - o.start,
                                u = {
                                    ")": "(",
                                    "(": "(",
                                    "]": "[",
                                    "[": "[",
                                    "{": "{",
                                    "}": "{"
                                };
                            do {
                                if (o.value.match(/[{}()\[\]]/g)) {
                                    for (; h < o.value.length && !c; h++)
                                        if (u[o.value[h]]) switch (a = u[o.value[h]] + "." + o.type.replace("rparen", "lparen"), isNaN(l[a]) && (l[a] = 0), o.value[h]) {
                                            case "(":
                                            case "[":
                                            case "{":
                                                l[a]++;
                                                break;
                                            case ")":
                                            case "]":
                                            case "}":
                                                l[a]--, -1 === l[a] && (s = "bracket", c = !0)
                                        }
                                } else - 1 !== o.type.indexOf("tag-name") && (isNaN(l[o.value]) && (l[o.value] = 0), "<" === r.value ? l[o.value]++ : "</" === r.value && l[o.value]--, -1 === l[o.value] && (s = "tag", c = !0));
                                c || (r = o, o = n.stepForward(), h = 0)
                            } while (o && !c);
                            if (s) {
                                var d, f;
                                if ("bracket" === s)(d = this.session.getBracketRange(i)) || (f = (d = new g(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + h - 1, n.getCurrentTokenRow(), n.getCurrentTokenColumn() + h - 1)).start, (t || f.row === i.row && Math.abs(f.column - i.column) < 2) && (d = this.session.getBracketRange(f)));
                                else if ("tag" === s) {
                                    if (!o || -1 === o.type.indexOf("tag-name")) return;
                                    var p = o.value;
                                    if (0 === (d = new g(n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2, n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2)).compare(i.row, i.column)) {
                                        c = !1;
                                        do {
                                            o = r, (r = n.stepBackward()) && (-1 !== r.type.indexOf("tag-close") && d.setEnd(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + 1), o.value === p && -1 !== o.type.indexOf("tag-name") && ("<" === r.value ? l[p]++ : "</" === r.value && l[p]--, 0 === l[p] && (c = !0)))
                                        } while (r && !c)
                                    }
                                    o && o.type.indexOf("tag-name") && ((f = d.start).row == i.row && Math.abs(f.column - i.column) < 2 && (f = d.end))
                                }(f = d && d.cursor || f) && (e ? d && t ? this.selection.setRange(d) : d && d.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(f.row, f.column) : this.selection.moveTo(f.row, f.column))
                            }
                        }
                    }, this.gotoLine = function(e, t, i) {
                        this.selection.clearSelection(), this.session.unfold({
                            row: e - 1,
                            column: t || 0
                        }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, i)
                    }, this.navigateTo = function(e, t) {
                        this.selection.moveTo(e, t)
                    }, this.navigateUp = function(e) {
                        if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                            var t = this.selection.anchor.getPosition();
                            return this.moveCursorToPosition(t)
                        }
                        this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0)
                    }, this.navigateDown = function(e) {
                        if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                            var t = this.selection.anchor.getPosition();
                            return this.moveCursorToPosition(t)
                        }
                        this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0)
                    }, this.navigateLeft = function(e) {
                        if (this.selection.isEmpty())
                            for (e = e || 1; e--;) this.selection.moveCursorLeft();
                        else {
                            var t = this.getSelectionRange().start;
                            this.moveCursorToPosition(t)
                        }
                        this.clearSelection()
                    }, this.navigateRight = function(e) {
                        if (this.selection.isEmpty())
                            for (e = e || 1; e--;) this.selection.moveCursorRight();
                        else {
                            var t = this.getSelectionRange().end;
                            this.moveCursorToPosition(t)
                        }
                        this.clearSelection()
                    }, this.navigateLineStart = function() {
                        this.selection.moveCursorLineStart(), this.clearSelection()
                    }, this.navigateLineEnd = function() {
                        this.selection.moveCursorLineEnd(), this.clearSelection()
                    }, this.navigateFileEnd = function() {
                        this.selection.moveCursorFileEnd(), this.clearSelection()
                    }, this.navigateFileStart = function() {
                        this.selection.moveCursorFileStart(), this.clearSelection()
                    }, this.navigateWordRight = function() {
                        this.selection.moveCursorWordRight(), this.clearSelection()
                    }, this.navigateWordLeft = function() {
                        this.selection.moveCursorWordLeft(), this.clearSelection()
                    }, this.replace = function(e, t) {
                        t && this.$search.set(t);
                        var i = this.$search.find(this.session),
                            n = 0;
                        return i ? (this.$tryReplace(i, e) && (n = 1), this.selection.setSelectionRange(i), this.renderer.scrollSelectionIntoView(i.start, i.end), n) : n
                    }, this.replaceAll = function(e, t) {
                        t && this.$search.set(t);
                        var i = this.$search.findAll(this.session),
                            n = 0;
                        if (!i.length) return n;
                        var r = this.getSelectionRange();
                        this.selection.moveTo(0, 0);
                        for (var o = i.length - 1; o >= 0; --o) this.$tryReplace(i[o], e) && n++;
                        return this.selection.setSelectionRange(r), n
                    }, this.$tryReplace = function(e, t) {
                        var i = this.session.getTextRange(e);
                        return null !== (t = this.$search.replace(i, t)) ? (e.end = this.session.replace(e, t), e) : null
                    }, this.getLastSearchOptions = function() {
                        return this.$search.getOptions()
                    }, this.find = function(e, t, i) {
                        t || (t = {}), "string" == typeof e || e instanceof RegExp ? t.needle = e : "object" == typeof e && n.mixin(t, e);
                        var r = this.selection.getRange();
                        null == t.needle && ((e = this.session.getTextRange(r) || this.$search.$options.needle) || (r = this.session.getWordRange(r.start.row, r.start.column), e = this.session.getTextRange(r)), this.$search.set({
                            needle: e
                        })), this.$search.set(t), t.start || this.$search.set({
                            start: r
                        });
                        var o = this.$search.find(this.session);
                        return t.preventScroll ? o : o ? (this.revealRange(o, i), o) : (t.backwards ? r.start = r.end : r.end = r.start, void this.selection.setRange(r))
                    }, this.findNext = function(e, t) {
                        this.find({
                            skipCurrent: !0,
                            backwards: !1
                        }, e, t)
                    }, this.findPrevious = function(e, t) {
                        this.find(e, {
                            skipCurrent: !0,
                            backwards: !0
                        }, t)
                    }, this.revealRange = function(e, t) {
                        this.session.unfold(e), this.selection.setSelectionRange(e);
                        var i = this.renderer.scrollTop;
                        this.renderer.scrollSelectionIntoView(e.start, e.end, .5), !1 !== t && this.renderer.animateScrolling(i)
                    }, this.undo = function() {
                        this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, .5)
                    }, this.redo = function() {
                        this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, .5)
                    }, this.destroy = function() {
                        this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.session = null
                    }, this.setAutoScrollEditorIntoView = function(e) {
                        if (e) {
                            var t, i = this,
                                n = !1;
                            this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                            var r = this.$scrollAnchor;
                            r.style.cssText = "position:absolute", this.container.insertBefore(r, this.container.firstChild);
                            var o = this.on("changeSelection", (function() {
                                    n = !0
                                })),
                                s = this.renderer.on("beforeRender", (function() {
                                    n && (t = i.renderer.container.getBoundingClientRect())
                                })),
                                a = this.renderer.on("afterRender", (function() {
                                    if (n && t && (i.isFocused() || i.searchBox && i.searchBox.isFocused())) {
                                        var e = i.renderer,
                                            o = e.$cursorLayer.$pixelPos,
                                            s = e.layerConfig,
                                            a = o.top - s.offset;
                                        null != (n = o.top >= 0 && a + t.top < 0 || !(o.top < s.height && o.top + t.top + s.lineHeight > window.innerHeight) && null) && (r.style.top = a + "px", r.style.left = o.left + "px", r.style.height = s.lineHeight + "px", r.scrollIntoView(n)), n = t = null
                                    }
                                }));
                            this.setAutoScrollEditorIntoView = function(e) {
                                e || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", o), this.renderer.off("afterRender", a), this.renderer.off("beforeRender", s))
                            }
                        }
                    }, this.$resetCursorStyle = function() {
                        var e = this.$cursorStyle || "ace",
                            t = this.renderer.$cursorLayer;
                        t && (t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && "wide" != e, r.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e)))
                    }, this.prompt = function(e, t, i) {
                        var n = this;
                        v.loadModule("./ext/prompt", (function(r) {
                            r.prompt(n, e, t, i)
                        }))
                    }
                }.call(y.prototype), v.defineOptions(y.prototype, "editor", {
                    selectionStyle: {
                        set: function(e) {
                            this.onSelectionChange(), this._signal("changeSelectionStyle", {
                                data: e
                            })
                        },
                        initialValue: "line"
                    },
                    highlightActiveLine: {
                        set: function() {
                            this.$updateHighlightActiveLine()
                        },
                        initialValue: !0
                    },
                    highlightSelectedWord: {
                        set: function(e) {
                            this.$onSelectionChange()
                        },
                        initialValue: !0
                    },
                    readOnly: {
                        set: function(e) {
                            this.textInput.setReadOnly(e), this.$resetCursorStyle()
                        },
                        initialValue: !1
                    },
                    copyWithEmptySelection: {
                        set: function(e) {
                            this.textInput.setCopyWithEmptySelection(e)
                        },
                        initialValue: !1
                    },
                    cursorStyle: {
                        set: function(e) {
                            this.$resetCursorStyle()
                        },
                        values: ["ace", "slim", "smooth", "wide"],
                        initialValue: "ace"
                    },
                    mergeUndoDeltas: {
                        values: [!1, !0, "always"],
                        initialValue: !0
                    },
                    behavioursEnabled: {
                        initialValue: !0
                    },
                    wrapBehavioursEnabled: {
                        initialValue: !0
                    },
                    autoScrollEditorIntoView: {
                        set: function(e) {
                            this.setAutoScrollEditorIntoView(e)
                        }
                    },
                    keyboardHandler: {
                        set: function(e) {
                            this.setKeyboardHandler(e)
                        },
                        get: function() {
                            return this.$keybindingId
                        },
                        handlesSet: !0
                    },
                    value: {
                        set: function(e) {
                            this.session.setValue(e)
                        },
                        get: function() {
                            return this.getValue()
                        },
                        handlesSet: !0,
                        hidden: !0
                    },
                    session: {
                        set: function(e) {
                            this.setSession(e)
                        },
                        get: function() {
                            return this.session
                        },
                        handlesSet: !0,
                        hidden: !0
                    },
                    showLineNumbers: {
                        set: function(e) {
                            this.renderer.$gutterLayer.setShowLineNumbers(e), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), e && this.$relativeLineNumbers ? C.attach(this) : C.detach(this)
                        },
                        initialValue: !0
                    },
                    relativeLineNumbers: {
                        set: function(e) {
                            this.$showLineNumbers && e ? C.attach(this) : C.detach(this)
                        }
                    },
                    placeholder: {
                        set: function(e) {
                            this.$updatePlaceholder || (this.$updatePlaceholder = function() {
                                var e = this.renderer.$composition || this.getValue();
                                if (e && this.renderer.placeholderNode) this.renderer.off("afterRender", this.$updatePlaceholder), r.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null;
                                else if (e || this.renderer.placeholderNode) !e && this.renderer.placeholderNode && (this.renderer.placeholderNode.textContent = this.$placeholder || "");
                                else {
                                    this.renderer.on("afterRender", this.$updatePlaceholder), r.addCssClass(this.container, "ace_hasPlaceholder");
                                    var t = r.createElement("div");
                                    t.className = "ace_placeholder", t.textContent = this.$placeholder || "", this.renderer.placeholderNode = t, this.renderer.content.appendChild(this.renderer.placeholderNode)
                                }
                            }.bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder()
                        }
                    },
                    hScrollBarAlwaysVisible: "renderer",
                    vScrollBarAlwaysVisible: "renderer",
                    highlightGutterLine: "renderer",
                    animatedScroll: "renderer",
                    showInvisibles: "renderer",
                    showPrintMargin: "renderer",
                    printMarginColumn: "renderer",
                    printMargin: "renderer",
                    fadeFoldWidgets: "renderer",
                    showFoldWidgets: "renderer",
                    displayIndentGuides: "renderer",
                    showGutter: "renderer",
                    fontSize: "renderer",
                    fontFamily: "renderer",
                    maxLines: "renderer",
                    minLines: "renderer",
                    scrollPastEnd: "renderer",
                    fixedWidthGutter: "renderer",
                    theme: "renderer",
                    hasCssTransforms: "renderer",
                    maxPixelHeight: "renderer",
                    useTextareaForIME: "renderer",
                    scrollSpeed: "$mouseHandler",
                    dragDelay: "$mouseHandler",
                    dragEnabled: "$mouseHandler",
                    focusTimeout: "$mouseHandler",
                    tooltipFollowsMouse: "$mouseHandler",
                    firstLineNumber: "session",
                    overwrite: "session",
                    newLineMode: "session",
                    useWorker: "session",
                    useSoftTabs: "session",
                    navigateWithinSoftTabs: "session",
                    tabSize: "session",
                    wrap: "session",
                    indentedSoftWrap: "session",
                    foldStyle: "session",
                    mode: "session"
                });
            var C = {
                getText: function(e, t) {
                    return (Math.abs(e.selection.lead.row - t) || t + 1 + (t < 9 ? "·" : "")) + ""
                },
                getWidth: function(e, t, i) {
                    return Math.max(t.toString().length, (i.lastRow + 1).toString().length, 2) * i.characterWidth
                },
                update: function(e, t) {
                    t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER)
                },
                attach: function(e) {
                    e.renderer.$gutterLayer.$renderer = this, e.on("changeSelection", this.update), this.update(null, e)
                },
                detach: function(e) {
                    e.renderer.$gutterLayer.$renderer == this && (e.renderer.$gutterLayer.$renderer = null), e.off("changeSelection", this.update), this.update(null, e)
                }
            };
            t.Editor = y
        })), ace.define("ace/undomanager", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                return {
                    row: e.row,
                    column: e.column
                }
            }

            function r(e) {
                if (e = e || this, Array.isArray(e)) return e.map(r).join("\n");
                var t = "";
                return e.action ? (t = "insert" == e.action ? "+" : "-", t += "[" + e.lines + "]") : e.value && (t = Array.isArray(e.value) ? e.value.map(o).join("\n") : o(e.value)), e.start && (t += o(e)), (e.id || e.rev) && (t += "\t(" + (e.id || e.rev) + ")"), t
            }

            function o(e) {
                return e.start.row + ":" + e.start.column + "=>" + e.end.row + ":" + e.end.column
            }

            function s(e, t) {
                var i = "insert" == e.action,
                    n = "insert" == t.action;
                if (i && n)
                    if (p(t.start, e.end) >= 0) l(t, e, -1);
                    else {
                        if (!(p(t.start, e.start) <= 0)) return null;
                        l(e, t, 1)
                    }
                else if (i && !n)
                    if (p(t.start, e.end) >= 0) l(t, e, -1);
                    else {
                        if (!(p(t.end, e.start) <= 0)) return null;
                        l(e, t, -1)
                    }
                else if (!i && n)
                    if (p(t.start, e.start) >= 0) l(t, e, 1);
                    else {
                        if (!(p(t.start, e.start) <= 0)) return null;
                        l(e, t, 1)
                    }
                else if (!i && !n)
                    if (p(t.start, e.start) >= 0) l(t, e, 1);
                    else {
                        if (!(p(t.end, e.start) <= 0)) return null;
                        l(e, t, -1)
                    } return [t, e]
            }

            function a(e, t) {
                for (var i = e.length; i--;)
                    for (var n = 0; n < t.length; n++)
                        if (!s(e[i], t[n])) {
                            for (; i < e.length;) {
                                for (; n--;) s(t[n], e[i]);
                                n = t.length, i++
                            }
                            return [e, t]
                        } return e.selectionBefore = t.selectionBefore = e.selectionAfter = t.selectionAfter = null, [t, e]
            }

            function c(e, t) {
                var i = "insert" == e.action,
                    n = "insert" == t.action;
                if (i && n) p(e.start, t.start) < 0 ? l(t, e, 1) : l(e, t, 1);
                else if (i && !n) p(e.start, t.end) >= 0 ? l(e, t, -1) : (p(e.start, t.start) <= 0 || l(e, f.fromPoints(t.start, e.start), -1), l(t, e, 1));
                else if (!i && n) p(t.start, e.end) >= 0 ? l(t, e, -1) : (p(t.start, e.start) <= 0 || l(t, f.fromPoints(e.start, t.start), -1), l(e, t, 1));
                else if (!i && !n)
                    if (p(t.start, e.end) >= 0) l(t, e, -1);
                    else {
                        var r, o;
                        if (!(p(t.end, e.start) <= 0)) return p(e.start, t.start) < 0 && (r = e, e = u(e, t.start)), p(e.end, t.end) > 0 && (o = u(e, t.end)), h(t.end, e.start, e.end, -1), o && !r && (e.lines = o.lines, e.start = o.start, e.end = o.end, o = e), [t, r, o].filter(Boolean);
                        l(e, t, -1)
                    } return [t, e]
            }

            function l(e, t, i) {
                h(e.start, t.start, t.end, i), h(e.end, t.start, t.end, i)
            }

            function h(e, t, i, n) {
                e.row == (1 == n ? t : i).row && (e.column += n * (i.column - t.column)), e.row += n * (i.row - t.row)
            }

            function u(e, t) {
                var i = e.lines,
                    r = e.end;
                e.end = n(t);
                var o = e.end.row - e.start.row,
                    s = i.splice(o, i.length),
                    a = o ? t.column : t.column - e.start.column;
                return i.push(s[0].substring(0, a)), s[0] = s[0].substr(a), {
                    start: n(t),
                    end: r,
                    lines: s,
                    action: e.action
                }
            }

            function d(e, t) {
                t = function(e) {
                    return {
                        start: n(e.start),
                        end: n(e.end),
                        action: e.action,
                        lines: e.lines.slice()
                    }
                }(t);
                for (var i = e.length; i--;) {
                    for (var r = e[i], o = 0; o < r.length; o++) {
                        var s = c(r[o], t);
                        t = s[0], 2 != s.length && (s[2] ? (r.splice(o + 1, 1, s[1], s[2]), o++) : s[1] || (r.splice(o, 1), o--))
                    }
                    r.length || e.splice(i, 1)
                }
                return e
            }
            var g = function() {
                this.$maxRev = 0, this.$fromUndo = !1, this.reset()
            };
            (function() {
                this.addSession = function(e) {
                    this.$session = e
                }, this.add = function(e, t, i) {
                    this.$fromUndo || e != this.$lastDelta && (this.$keepRedoStack || (this.$redoStack.length = 0), !1 !== t && this.lastDeltas || (this.lastDeltas = [], this.$undoStack.push(this.lastDeltas), e.id = this.$rev = ++this.$maxRev), "remove" != e.action && "insert" != e.action || (this.$lastDelta = e), this.lastDeltas.push(e))
                }, this.addSelection = function(e, t) {
                    this.selections.push({
                        value: e,
                        rev: t || this.$rev
                    })
                }, this.startNewGroup = function() {
                    return this.lastDeltas = null, this.$rev
                }, this.markIgnored = function(e, t) {
                    null == t && (t = this.$rev + 1);
                    for (var i = this.$undoStack, n = i.length; n--;) {
                        var r = i[n][0];
                        if (r.id <= e) break;
                        r.id < t && (r.ignore = !0)
                    }
                    this.lastDeltas = null
                }, this.getSelection = function(e, t) {
                    for (var i = this.selections, n = i.length; n--;) {
                        var r = i[n];
                        if (r.rev < e) return t && (r = i[n + 1]), r
                    }
                }, this.getRevision = function() {
                    return this.$rev
                }, this.getDeltas = function(e, t) {
                    null == t && (t = this.$rev + 1);
                    for (var i = this.$undoStack, n = null, r = 0, o = i.length; o--;) {
                        var s = i[o][0];
                        if (s.id < t && !n && (n = o + 1), s.id <= e) {
                            r = o + 1;
                            break
                        }
                    }
                    return i.slice(r, n)
                }, this.getChangedRanges = function(e, t) {
                    null == t && (t = this.$rev + 1)
                }, this.getChangedLines = function(e, t) {
                    null == t && (t = this.$rev + 1)
                }, this.validateDeltaBoundaries = function(e, t, i) {
                    return !!e && e.every((function(e) {
                        var n = e.action;
                        switch (i && "insert" === e.action && (n = "remove"), i && "remove" === e.action && (n = "insert"), n) {
                            case "insert":
                                return e.start.row <= t;
                            case "remove":
                                return e.start.row < t && e.end.row < t;
                            default:
                                return !0
                        }
                    }))
                }, this.undo = function(e, t) {
                    this.lastDeltas = null;
                    var i = this.$undoStack;
                    if (function(e, t) {
                            for (var i = t; i--;) {
                                var n = e[i];
                                if (n && !n[0].ignore) {
                                    for (; i < t - 1;) {
                                        var r = a(e[i], e[i + 1]);
                                        e[i] = r[0], e[i + 1] = r[1], i++
                                    }
                                    return !0
                                }
                            }
                        }(i, i.length)) {
                        e || (e = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
                        var n = i.pop(),
                            r = null;
                        return this.validateDeltaBoundaries(n, e.getLength(), !0) && (r = e.undoChanges(n, t), this.$redoStack.push(n), this.$syncRev()), this.$fromUndo = !1, r
                    }
                }, this.redo = function(e, t) {
                    if (this.lastDeltas = null, e || (e = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
                        var i = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
                        (function(e, t) {
                            for (var i = 0; i < t.length; i++)
                                for (var n = t[i], r = 0; r < n.length; r++) d(e, n[r])
                        })(this.$redoStack, i), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach((function(e) {
                            e[0].id = ++this.$maxRev
                        }), this)
                    }
                    var n = this.$redoStack.pop(),
                        r = null;
                    return this.validateDeltaBoundaries(n, e.getLength(), !1) && (r = e.redoChanges(n, t), this.$undoStack.push(n), this.$syncRev()), this.$fromUndo = !1, r
                }, this.$syncRev = function() {
                    var e = this.$undoStack,
                        t = e[e.length - 1],
                        i = t && t[0].id || 0;
                    this.$redoStackBaseRev = i, this.$rev = i
                }, this.reset = function() {
                    this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = []
                }, this.canUndo = function() {
                    return this.$undoStack.length > 0
                }, this.canRedo = function() {
                    return this.$redoStack.length > 0
                }, this.bookmark = function(e) {
                    null == e && (e = this.$rev), this.mark = e
                }, this.isAtBookmark = function() {
                    return this.$rev === this.mark
                }, this.toJSON = function() {}, this.fromJSON = function() {}, this.hasUndo = this.canUndo, this.hasRedo = this.canRedo, this.isClean = this.isAtBookmark, this.markClean = this.bookmark, this.$prettyPrint = function(e) {
                    return e ? r(e) : r(this.$undoStack) + "\n---\n" + r(this.$redoStack)
                }
            }).call(g.prototype);
            var f = e("./range").Range,
                p = f.comparePoints;
            f.comparePoints;
            t.UndoManager = g
        })), ace.define("ace/layer/lines", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/dom"),
                r = function(e, t) {
                    this.element = e, this.canvasHeight = t || 5e5, this.element.style.height = 2 * this.canvasHeight + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0
                };
            (function() {
                this.moveContainer = function(e) {
                    n.translate(this.element, 0, -e.firstRowScreen * e.lineHeight % this.canvasHeight - e.offset * this.$offsetCoefficient)
                }, this.pageChanged = function(e, t) {
                    return Math.floor(e.firstRowScreen * e.lineHeight / this.canvasHeight) !== Math.floor(t.firstRowScreen * t.lineHeight / this.canvasHeight)
                }, this.computeLineTop = function(e, t, i) {
                    var n = t.firstRowScreen * t.lineHeight,
                        r = Math.floor(n / this.canvasHeight);
                    return i.documentToScreenRow(e, 0) * t.lineHeight - r * this.canvasHeight
                }, this.computeLineHeight = function(e, t, i) {
                    return t.lineHeight * i.getRowLineCount(e)
                }, this.getLength = function() {
                    return this.cells.length
                }, this.get = function(e) {
                    return this.cells[e]
                }, this.shift = function() {
                    this.$cacheCell(this.cells.shift())
                }, this.pop = function() {
                    this.$cacheCell(this.cells.pop())
                }, this.push = function(e) {
                    if (Array.isArray(e)) {
                        this.cells.push.apply(this.cells, e);
                        for (var t = n.createFragment(this.element), i = 0; i < e.length; i++) t.appendChild(e[i].element);
                        this.element.appendChild(t)
                    } else this.cells.push(e), this.element.appendChild(e.element)
                }, this.unshift = function(e) {
                    if (Array.isArray(e)) {
                        this.cells.unshift.apply(this.cells, e);
                        for (var t = n.createFragment(this.element), i = 0; i < e.length; i++) t.appendChild(e[i].element);
                        this.element.firstChild ? this.element.insertBefore(t, this.element.firstChild) : this.element.appendChild(t)
                    } else this.cells.unshift(e), this.element.insertAdjacentElement("afterbegin", e.element)
                }, this.last = function() {
                    return this.cells.length ? this.cells[this.cells.length - 1] : null
                }, this.$cacheCell = function(e) {
                    e && (e.element.remove(), this.cellCache.push(e))
                }, this.createCell = function(e, t, i, r) {
                    var o = this.cellCache.pop();
                    if (!o) {
                        var s = n.createElement("div");
                        r && r(s), this.element.appendChild(s), o = {
                            element: s,
                            text: "",
                            row: e
                        }
                    }
                    return o.row = e, o
                }
            }).call(r.prototype), t.Lines = r
        })), ace.define("ace/layer/gutter", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                var t = document.createTextNode("");
                e.appendChild(t);
                var i = r.createElement("span");
                return e.appendChild(i), e
            }
            var r = e("../lib/dom"),
                o = e("../lib/oop"),
                s = e("../lib/lang"),
                a = e("../lib/event_emitter").EventEmitter,
                c = e("./lines").Lines,
                l = function(e) {
                    this.element = r.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new c(this.element), this.$lines.$offsetCoefficient = 1
                };
            (function() {
                o.implement(this, a), this.setSession = function(e) {
                    this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations)
                }, this.addGutterDecoration = function(e, t) {
                    window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
                }, this.removeGutterDecoration = function(e, t) {
                    window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
                }, this.setAnnotations = function(e) {
                    this.$annotations = [];
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t],
                            n = i.row,
                            r = this.$annotations[n];
                        r || (r = this.$annotations[n] = {
                            text: []
                        });
                        var o = i.text;
                        o = o ? s.escapeHTML(o) : i.html || "", -1 === r.text.indexOf(o) && r.text.push(o);
                        var a = i.type;
                        "error" == a ? r.className = " ace_error" : "warning" == a && " ace_error" != r.className ? r.className = " ace_warning" : "info" == a && !r.className && (r.className = " ace_info")
                    }
                }, this.$updateAnnotations = function(e) {
                    if (this.$annotations.length) {
                        var t = e.start.row,
                            i = e.end.row - t;
                        if (0 !== i)
                            if ("remove" == e.action) this.$annotations.splice(t, i + 1, null);
                            else {
                                var n = new Array(i + 1);
                                n.unshift(t, 1), this.$annotations.splice.apply(this.$annotations, n)
                            }
                    }
                }, this.update = function(e) {
                    this.config = e;
                    var t = this.session,
                        i = e.firstRow,
                        r = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1);
                    this.oldLastRow = r, this.config = e, this.$lines.moveContainer(e), this.$updateCursorRow();
                    for (var o = t.getNextFoldLine(i), s = o ? o.start.row : 1 / 0, a = null, c = -1, l = i;;) {
                        if (l > s && (l = o.end.row + 1, s = (o = t.getNextFoldLine(l, o)) ? o.start.row : 1 / 0), l > r) {
                            for (; this.$lines.getLength() > c + 1;) this.$lines.pop();
                            break
                        }(a = this.$lines.get(++c)) ? a.row = l: (a = this.$lines.createCell(l, e, this.session, n), this.$lines.push(a)), this.$renderCell(a, e, o, l), l++
                    }
                    this._signal("afterRender"), this.$updateGutterWidth(e)
                }, this.$updateGutterWidth = function(e) {
                    var t = this.session,
                        i = t.gutterRenderer || this.$renderer,
                        n = t.$firstLineNumber,
                        r = this.$lines.last() ? this.$lines.last().text : "";
                    (this.$fixedWidth || t.$useWrapMode) && (r = t.getLength() + n - 1);
                    var o = i ? i.getWidth(t, r, e) : r.toString().length * e.characterWidth,
                        s = this.$padding || this.$computePadding();
                    (o += s.left + s.right) !== this.gutterWidth && !isNaN(o) && (this.gutterWidth = o, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", o))
                }, this.$updateCursorRow = function() {
                    if (this.$highlightGutterLine) {
                        var e = this.session.selection.getCursor();
                        this.$cursorRow !== e.row && (this.$cursorRow = e.row)
                    }
                }, this.updateLineHighlight = function() {
                    if (this.$highlightGutterLine) {
                        var e = this.session.selection.cursor.row;
                        if (this.$cursorRow = e, !this.$cursorCell || this.$cursorCell.row != e) {
                            this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
                            var t = this.$lines.cells;
                            this.$cursorCell = null;
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                if (n.row >= this.$cursorRow) {
                                    if (n.row > this.$cursorRow) {
                                        var r = this.session.getFoldLine(this.$cursorRow);
                                        if (!(i > 0 && r && r.start.row == t[i - 1].row)) break;
                                        n = t[i - 1]
                                    }
                                    n.element.className = "ace_gutter-active-line " + n.element.className, this.$cursorCell = n;
                                    break
                                }
                            }
                        }
                    }
                }, this.scrollLines = function(e) {
                    var t = this.config;
                    if (this.config = e, this.$updateCursorRow(), this.$lines.pageChanged(t, e)) return this.update(e);
                    this.$lines.moveContainer(e);
                    var i = Math.min(e.lastRow + e.gutterOffset, this.session.getLength() - 1),
                        n = this.oldLastRow;
                    if (this.oldLastRow = i, !t || n < e.firstRow) return this.update(e);
                    if (i < t.firstRow) return this.update(e);
                    if (t.firstRow < e.firstRow)
                        for (var r = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); r > 0; r--) this.$lines.shift();
                    if (n > i)
                        for (r = this.session.getFoldedRowCount(i + 1, n); r > 0; r--) this.$lines.pop();
                    e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLines(e, e.firstRow, t.firstRow - 1)), i > n && this.$lines.push(this.$renderLines(e, n + 1, i)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(e)
                }, this.$renderLines = function(e, t, i) {
                    for (var r = [], o = t, s = this.session.getNextFoldLine(o), a = s ? s.start.row : 1 / 0; o > a && (o = s.end.row + 1, a = (s = this.session.getNextFoldLine(o, s)) ? s.start.row : 1 / 0), !(o > i);) {
                        var c = this.$lines.createCell(o, e, this.session, n);
                        this.$renderCell(c, e, s, o), r.push(c), o++
                    }
                    return r
                }, this.$renderCell = function(e, t, i, n) {
                    var o = e.element,
                        s = this.session,
                        a = o.childNodes[0],
                        c = o.childNodes[1],
                        l = s.$firstLineNumber,
                        h = s.$breakpoints,
                        u = s.$decorations,
                        d = s.gutterRenderer || this.$renderer,
                        g = this.$showFoldWidgets && s.foldWidgets,
                        f = i ? i.start.row : Number.MAX_VALUE,
                        p = "ace_gutter-cell ";
                    if (this.$highlightGutterLine && (n == this.$cursorRow || i && n < this.$cursorRow && n >= f && this.$cursorRow <= i.end.row) && (p += "ace_gutter-active-line ", this.$cursorCell != e && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = e)), h[n] && (p += h[n]), u[n] && (p += u[n]), this.$annotations[n] && (p += this.$annotations[n].className), o.className != p && (o.className = p), g) {
                        var m = g[n];
                        null == m && (m = g[n] = s.getFoldWidget(n))
                    }
                    if (m) {
                        p = "ace_fold-widget ace_" + m;
                        "start" == m && n == f && n < i.end.row ? p += " ace_closed" : p += " ace_open", c.className != p && (c.className = p);
                        var v = t.lineHeight + "px";
                        r.setStyle(c.style, "height", v), r.setStyle(c.style, "display", "inline-block")
                    } else c && r.setStyle(c.style, "display", "none");
                    var w = (d ? d.getText(s, n) : n + l).toString();
                    return w !== a.data && (a.data = w), r.setStyle(e.element.style, "height", this.$lines.computeLineHeight(n, t, s) + "px"), r.setStyle(e.element.style, "top", this.$lines.computeLineTop(n, t, s) + "px"), e.text = w, e
                }, this.$fixedWidth = !1, this.$highlightGutterLine = !0, this.$renderer = "", this.setHighlightGutterLine = function(e) {
                    this.$highlightGutterLine = e
                }, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function(e) {
                    this.$renderer = !e && {
                        getWidth: function() {
                            return 0
                        },
                        getText: function() {
                            return ""
                        }
                    }
                }, this.getShowLineNumbers = function() {
                    return this.$showLineNumbers
                }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function(e) {
                    e ? r.addCssClass(this.element, "ace_folding-enabled") : r.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
                }, this.getShowFoldWidgets = function() {
                    return this.$showFoldWidgets
                }, this.$computePadding = function() {
                    if (!this.element.firstChild) return {
                        left: 0,
                        right: 0
                    };
                    var e = r.computedStyle(this.element.firstChild);
                    return this.$padding = {}, this.$padding.left = (parseInt(e.borderLeftWidth) || 0) + (parseInt(e.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(e.borderRightWidth) || 0) + (parseInt(e.paddingRight) || 0), this.$padding
                }, this.getRegion = function(e) {
                    var t = this.$padding || this.$computePadding(),
                        i = this.element.getBoundingClientRect();
                    return e.x < t.left + i.left ? "markers" : this.$showFoldWidgets && e.x > i.right - t.right ? "foldWidgets" : void 0
                }
            }).call(l.prototype), t.Gutter = l
        })), ace.define("ace/layer/marker", [], (function(e, t, i) {
            "use strict";
            var n = e("../range").Range,
                r = e("../lib/dom"),
                o = function(e) {
                    this.element = r.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
                };
            (function() {
                function e(e, t, i, n) {
                    return (e ? 1 : 0) | (t ? 2 : 0) | (i ? 4 : 0) | (n ? 8 : 0)
                }
                this.$padding = 0, this.setPadding = function(e) {
                    this.$padding = e
                }, this.setSession = function(e) {
                    this.session = e
                }, this.setMarkers = function(e) {
                    this.markers = e
                }, this.elt = function(e, t) {
                    var i = -1 != this.i && this.element.childNodes[this.i];
                    i ? this.i++ : (i = document.createElement("div"), this.element.appendChild(i), this.i = -1), i.style.cssText = t, i.className = e
                }, this.update = function(e) {
                    if (e) {
                        var t;
                        for (var i in this.config = e, this.i = 0, this.markers) {
                            var n = this.markers[i];
                            if (n.range) {
                                var r = n.range.clipRows(e.firstRow, e.lastRow);
                                if (!r.isEmpty())
                                    if (r = r.toScreenRange(this.session), n.renderer) {
                                        var o = this.$getTop(r.start.row, e),
                                            s = this.$padding + r.start.column * e.characterWidth;
                                        n.renderer(t, r, s, o, e)
                                    } else "fullLine" == n.type ? this.drawFullLineMarker(t, r, n.clazz, e) : "screenLine" == n.type ? this.drawScreenLineMarker(t, r, n.clazz, e) : r.isMultiLine() ? "text" == n.type ? this.drawTextMarker(t, r, n.clazz, e) : this.drawMultiLineMarker(t, r, n.clazz, e) : this.drawSingleLineMarker(t, r, n.clazz + " ace_start ace_br15", e)
                            } else n.update(t, this, this.session, e)
                        }
                        if (-1 != this.i)
                            for (; this.i < this.element.childElementCount;) this.element.removeChild(this.element.lastChild)
                    }
                }, this.$getTop = function(e, t) {
                    return (e - t.firstRowScreen) * t.lineHeight
                }, this.drawTextMarker = function(t, i, r, o, s) {
                    for (var a = this.session, c = i.start.row, l = i.end.row, h = c, u = 0, d = 0, g = a.getScreenLastRowColumn(h), f = new n(h, i.start.column, h, d); h <= l; h++) f.start.row = f.end.row = h, f.start.column = h == c ? i.start.column : a.getRowWrapIndent(h), f.end.column = g, u = d, d = g, g = h + 1 < l ? a.getScreenLastRowColumn(h + 1) : h == l ? 0 : i.end.column, this.drawSingleLineMarker(t, f, r + (h == c ? " ace_start" : "") + " ace_br" + e(h == c || h == c + 1 && i.start.column, u < d, d > g, h == l), o, h == l ? 0 : 1, s)
                }, this.drawMultiLineMarker = function(e, t, i, n, r) {
                    var o = this.$padding,
                        s = n.lineHeight,
                        a = this.$getTop(t.start.row, n),
                        c = o + t.start.column * n.characterWidth;
                    (r = r || "", this.session.$bidiHandler.isBidiRow(t.start.row)) ? ((l = t.clone()).end.row = l.start.row, l.end.column = this.session.getLine(l.start.row).length, this.drawBidiSingleLineMarker(e, l, i + " ace_br1 ace_start", n, null, r)) : this.elt(i + " ace_br1 ace_start", "height:" + s + "px;right:0;top:" + a + "px;left:" + c + "px;" + (r || ""));
                    if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
                        var l;
                        (l = t.clone()).start.row = l.end.row, l.start.column = 0, this.drawBidiSingleLineMarker(e, l, i + " ace_br12", n, null, r)
                    } else {
                        a = this.$getTop(t.end.row, n);
                        var h = t.end.column * n.characterWidth;
                        this.elt(i + " ace_br12", "height:" + s + "px;width:" + h + "px;top:" + a + "px;left:" + o + "px;" + (r || ""))
                    }
                    if (!((s = (t.end.row - t.start.row - 1) * n.lineHeight) <= 0)) {
                        a = this.$getTop(t.start.row + 1, n);
                        var u = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
                        this.elt(i + (u ? " ace_br" + u : ""), "height:" + s + "px;right:0;top:" + a + "px;left:" + o + "px;" + (r || ""))
                    }
                }, this.drawSingleLineMarker = function(e, t, i, n, r, o) {
                    if (this.session.$bidiHandler.isBidiRow(t.start.row)) return this.drawBidiSingleLineMarker(e, t, i, n, r, o);
                    var s = n.lineHeight,
                        a = (t.end.column + (r || 0) - t.start.column) * n.characterWidth,
                        c = this.$getTop(t.start.row, n),
                        l = this.$padding + t.start.column * n.characterWidth;
                    this.elt(i, "height:" + s + "px;width:" + a + "px;top:" + c + "px;left:" + l + "px;" + (o || ""))
                }, this.drawBidiSingleLineMarker = function(e, t, i, n, r, o) {
                    var s = n.lineHeight,
                        a = this.$getTop(t.start.row, n),
                        c = this.$padding;
                    this.session.$bidiHandler.getSelections(t.start.column, t.end.column).forEach((function(e) {
                        this.elt(i, "height:" + s + "px;width:" + e.width + (r || 0) + "px;top:" + a + "px;left:" + (c + e.left) + "px;" + (o || ""))
                    }), this)
                }, this.drawFullLineMarker = function(e, t, i, n, r) {
                    var o = this.$getTop(t.start.row, n),
                        s = n.lineHeight;
                    t.start.row != t.end.row && (s += this.$getTop(t.end.row, n) - o), this.elt(i, "height:" + s + "px;top:" + o + "px;left:0;right:0;" + (r || ""))
                }, this.drawScreenLineMarker = function(e, t, i, n, r) {
                    var o = this.$getTop(t.start.row, n),
                        s = n.lineHeight;
                    this.elt(i, "height:" + s + "px;top:" + o + "px;left:0;right:0;" + (r || ""))
                }
            }).call(o.prototype), t.Marker = o
        })), ace.define("ace/layer/text", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/oop"),
                r = e("../lib/dom"),
                o = e("../lib/lang"),
                s = e("./lines").Lines,
                a = e("../lib/event_emitter").EventEmitter,
                c = function(e) {
                    this.dom = r, 
					this.element = this.dom.createElement("div"), 
					this.element.className = "ace_layer ace_text-layer", 
					e.appendChild(this.element), 
					this.$updateEolChar = this.$updateEolChar.bind(this), 
					this.$lines = new s(this.element)
                };
            (function() {
                n.implement(this, a), this.EOF_CHAR = "¶", this.EOL_CHAR_LF = "¬", this.EOL_CHAR_CRLF = "¤", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "—", this.SPACE_CHAR = "·", this.$padding = 0, this.MAX_LINE_LENGTH = 1e4, this.$updateEolChar = function() {
                    var e = this.session.doc,
                        t = "\n" == e.getNewLineCharacter() && "windows" != e.getNewLineMode() ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
                    if (this.EOL_CHAR != t) return this.EOL_CHAR = t, !0
                }, this.setPadding = function(e) {
                    this.$padding = e, this.element.style.margin = "0 " + e + "px"
                }, this.getLineHeight = function() {
                    return this.$fontMetrics.$characterSize.height || 0
                }, this.getCharacterWidth = function() {
                    return this.$fontMetrics.$characterSize.width || 0
                }, this.$setFontMetrics = function(e) {
                    this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function(e) {
                        this._signal("changeCharacterSize", e)
                    }.bind(this)), this.$pollSizeChanges()
                }, this.checkForSizeChanges = function() {
                    this.$fontMetrics.checkForSizeChanges()
                }, this.$pollSizeChanges = function() {
                    return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
                }, this.setSession = function(e) {
                    this.session = e, e && this.$computeTabString()
                }, this.showInvisibles = !1, this.setShowInvisibles = function(e) {
                    return this.showInvisibles != e && (this.showInvisibles = e, this.$computeTabString(), !0)
                }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function(e) {
                    return this.displayIndentGuides != e && (this.displayIndentGuides = e, this.$computeTabString(), !0)
                }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function() {
                    var e = this.session.getTabSize();
                    this.tabSize = e;
                    for (var t = this.$tabStrings = [0], i = 1; i < e + 1; i++)
                        if (this.showInvisibles) {
                            (n = this.dom.createElement("span")).className = "ace_invisible ace_invisible_tab", n.textContent = o.stringRepeat(this.TAB_CHAR, i), t.push(n)
                        } else t.push(this.dom.createTextNode(o.stringRepeat(" ", i), this.element));
                    if (this.displayIndentGuides) {
                        this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                        var n, r = "ace_indent-guide",
                            s = "",
                            a = "";
                        if (this.showInvisibles) {
                            r += " ace_invisible", s = " ace_invisible_space", a = " ace_invisible_tab";
                            var c = o.stringRepeat(this.SPACE_CHAR, this.tabSize),
                                l = o.stringRepeat(this.TAB_CHAR, this.tabSize)
                        } else l = c = o.stringRepeat(" ", this.tabSize);
                        (n = this.dom.createElement("span")).className = r + s, n.textContent = c, this.$tabStrings[" "] = n, (n = this.dom.createElement("span")).className = r + a, n.textContent = l, this.$tabStrings["\t"] = n
                    }
                }, this.updateLines = function(e, t, i) {
                    if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) return this.update(e);
                    this.config = e;
                    for (var n = Math.max(t, e.firstRow), r = Math.min(i, e.lastRow), o = this.element.childNodes, s = 0, a = e.firstRow; a < n; a++) {
                        if (c = this.session.getFoldLine(a)) {
                            if (c.containsRow(n)) {
                                n = c.start.row;
                                break
                            }
                            a = c.end.row
                        }
                        s++
                    }
                    for (var c, l = !1, h = (a = n, (c = this.session.getNextFoldLine(a)) ? c.start.row : 1 / 0); a > h && (a = c.end.row + 1, h = (c = this.session.getNextFoldLine(a, c)) ? c.start.row : 1 / 0), !(a > r);) {
                        var u = o[s++];
                        if (u) {
                            this.dom.removeChildren(u), this.$renderLine(u, a, a == h && c), l && (u.style.top = this.$lines.computeLineTop(a, e, this.session) + "px");
                            var d = e.lineHeight * this.session.getRowLength(a) + "px";
                            u.style.height != d && (l = !0, u.style.height = d)
                        }
                        a++
                    }
                    if (l)
                        for (; s < this.$lines.cells.length;) {
                            var g = this.$lines.cells[s++];
                            g.element.style.top = this.$lines.computeLineTop(g.row, e, this.session) + "px"
                        }
                }, this.scrollLines = function(e) {
                    var t = this.config;
                    if (this.config = e, this.$lines.pageChanged(t, e)) return this.update(e);
                    this.$lines.moveContainer(e);
                    var i = e.lastRow,
                        n = t ? t.lastRow : -1;
                    if (!t || n < e.firstRow) return this.update(e);
                    if (i < t.firstRow) return this.update(e);
                    if (!t || t.lastRow < e.firstRow) return this.update(e);
                    if (e.lastRow < t.firstRow) return this.update(e);
                    if (t.firstRow < e.firstRow)
                        for (var r = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); r > 0; r--) this.$lines.shift();
                    if (t.lastRow > e.lastRow)
                        for (r = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); r > 0; r--) this.$lines.pop();
                    e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1)), e.lastRow > t.lastRow && this.$lines.push(this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow))
                }, this.$renderLinesFragment = function(e, t, i) {
                    for (var n = [], o = t, s = this.session.getNextFoldLine(o), a = s ? s.start.row : 1 / 0; o > a && (o = s.end.row + 1, a = (s = this.session.getNextFoldLine(o, s)) ? s.start.row : 1 / 0), !(o > i);) {
                        var c = this.$lines.createCell(o, e, this.session),
                            l = c.element;
                        this.dom.removeChildren(l), 
						r.setStyle(l.style, "height", 
						this.$lines.computeLineHeight(o, e, this.session) + "px"), 
						r.setStyle(l.style, "top", this.$lines.computeLineTop(o, e, this.session) + "px"), 
						this.$renderLine(l, o, o == a && s), 
						this.$useLineGroups() ? l.className = "ace_line_group" : l.className = "ace_line",
						n.push(c), 
						o++
                    }
                    return n
                }, this.update = function(e) {
                    this.$lines.moveContainer(e), this.config = e;
                    for (var t = e.firstRow, i = e.lastRow, n = this.$lines; n.getLength();) n.pop();
                    n.push(this.$renderLinesFragment(e, t, i))
                }, this.$textToken = {
                    text: !0,
                    rparen: !0,
                    lparen: !0
                }, this.$renderToken = function(e, t, i, n) {
                    for (var r, s = this, a = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, c = this.dom.createFragment(this.element), l = 0; r = a.exec(n);) {
                        var h = r[1],
                            u = r[2],
                            d = r[3],
                            g = r[4],
                            f = r[5];
                        if (s.showInvisibles || !u) {
                            var p = l != r.index ? n.slice(l, r.index) : "";
                            if (l = r.index + r[0].length, p && c.appendChild(this.dom.createTextNode(p, this.element)), h) {
                                var m = s.session.getScreenTabSize(t + r.index);
                                c.appendChild(s.$tabStrings[m].cloneNode(!0)), t += m - 1
                            } else if (u) {
                                if (s.showInvisibles)(w = this.dom.createElement("span")).className = "ace_invisible ace_invisible_space", w.textContent = o.stringRepeat(s.SPACE_CHAR, u.length), c.appendChild(w);
                                else c.appendChild(this.com.createTextNode(u, this.element))
                            } else if (d) {
                                (w = this.dom.createElement("span")).className = "ace_invisible ace_invisible_space ace_invalid", w.textContent = o.stringRepeat(s.SPACE_CHAR, d.length), c.appendChild(w)
                            } else if (g) {
                                t += 1, (w = this.dom.createElement("span")).style.width = 2 * s.config.characterWidth + "px", w.className = s.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", w.textContent = s.showInvisibles ? s.SPACE_CHAR : g, c.appendChild(w)
                            } else if (f) {
                                t += 1, (w = this.dom.createElement("span")).style.width = 2 * s.config.characterWidth + "px", w.className = "ace_cjk", w.textContent = f, c.appendChild(w)
                            }
                        }
                    }
                    if (c.appendChild(this.dom.createTextNode(l ? n.slice(l) : n, this.element)), this.$textToken[i.type]) e.appendChild(c);
                    else {
                        var v = "ace_" + i.type.replace(/\./g, " ace_"),
                            w = this.dom.createElement("span");
                        "fold" == i.type && (w.style.width = i.value.length * this.config.characterWidth + "px"), w.className = v, w.appendChild(c), e.appendChild(w)
                    }
                    return t + n.length
                }, this.renderIndentGuide = function(e, t, i) {
                    var n = t.search(this.$indentGuideRe);
                    if (n <= 0 || n >= i) return t;
                    if (" " == t[0]) {
                        for (var r = (n -= n % this.tabSize) / this.tabSize, o = 0; o < r; o++) e.appendChild(this.$tabStrings[" "].cloneNode(!0));
                        return t.substr(n)
                    }
                    if ("\t" == t[0]) {
                        for (o = 0; o < n; o++) e.appendChild(this.$tabStrings["\t"].cloneNode(!0));
                        return t.substr(n)
                    }
                    return t
                }, this.$createLineElement = function(e) {
                    var t = this.dom.createElement("div");
                    return t.className = "ace_line", t.style.height = this.config.lineHeight + "px", t
                }, this.$renderWrappedLine = function(e, t, i) {
                    var n = 0,
                        r = 0,
                        s = i[0],
                        a = 0,
                        c = this.$createLineElement();
                    e.appendChild(c);
                    for (var l = 0; l < t.length; l++) {
                        var h = t[l],
                            u = h.value;
                        if (0 == l && this.displayIndentGuides) {
                            if (n = u.length, !(u = this.renderIndentGuide(c, u, s))) continue;
                            n -= u.length
                        }
                        if (n + u.length < s) a = this.$renderToken(c, a, h, u), n += u.length;
                        else {
                            for (; n + u.length >= s;) a = this.$renderToken(c, a, h, u.substring(0, s - n)), u = u.substring(s - n), n = s, c = this.$createLineElement(), e.appendChild(c), c.appendChild(this.dom.createTextNode(o.stringRepeat(" ", i.indent), this.element)), a = 0, s = i[++r] || Number.MAX_VALUE;
                            0 != u.length && (n += u.length, a = this.$renderToken(c, a, h, u))
                        }
                    }
                    i[i.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(c, a, null, "", !0)
                }, this.$renderSimpleLine = function(e, t) {
                    var i = 0,
                        n = t[0],
                        r = n.value;
                    this.displayIndentGuides && (r = this.renderIndentGuide(e, r)), r && (i = this.$renderToken(e, i, n, r));
                    for (var o = 1; o < t.length; o++) {
                        if (i + (r = (n = t[o]).value).length > this.MAX_LINE_LENGTH) return this.$renderOverflowMessage(e, i, n, r);
                        i = this.$renderToken(e, i, n, r)
                    }
                }, this.$renderOverflowMessage = function(e, t, i, n, r) {
                    i && this.$renderToken(e, t, i, n.slice(0, this.MAX_LINE_LENGTH - t));
                    var o = this.dom.createElement("span");
                    o.className = "ace_inline_button ace_keyword ace_toggle_wrap", o.textContent = r ? "<hide>" : "<click to see more...>", e.appendChild(o)
                }, this.$renderLine = function(e, t, i) {
                    if (!i && 0 != i && (i = this.session.getFoldLine(t)), i) var n = this.$getFoldLineTokens(t, i);
                    else n = this.session.getTokens(t);
                    var r = e;
                    if (n.length) {
                        var o = this.session.getRowSplitData(t);
                        if (o && o.length) {
                            this.$renderWrappedLine(e, n, o);
                            r = e.lastChild
                        } else {
                            r = e;
                            this.$useLineGroups() && (r = this.$createLineElement(), e.appendChild(r)), this.$renderSimpleLine(r, n)
                        }
                    } else this.$useLineGroups() && (r = this.$createLineElement(), e.appendChild(r));
                    if (this.showInvisibles && r) {
                        i && (t = i.end.row);
                        var s = this.dom.createElement("span");
                        s.className = "ace_invisible ace_invisible_eol", s.textContent = t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, r.appendChild(s)
                    }
                }, this.$getFoldLineTokens = function(e, t) {
                    var i = this.session,
                        n = [],
                        r = i.getTokens(e);
                    return t.walk((function(e, t, o, s, a) {
                        null != e ? n.push({
                            type: "fold",
                            value: e
                        }) : (a && (r = i.getTokens(t)), r.length && function(e, t, i) {
                            for (var r = 0, o = 0; o + e[r].value.length < t;)
                                if (o += e[r].value.length, ++r == e.length) return;
                            for (o != t && ((s = e[r].value.substring(t - o)).length > i - t && (s = s.substring(0, i - t)), n.push({
                                    type: e[r].type,
                                    value: s
                                }), o = t + s.length, r += 1); o < i && r < e.length;) {
                                var s;
                                (s = e[r].value).length + o > i ? n.push({
                                    type: e[r].type,
                                    value: s.substring(0, i - o)
                                }) : n.push(e[r]), o += s.length, r += 1
                            }
                        }(r, s, o))
                    }), t.end.row, this.session.getLine(t.end.row).length), n
                }, this.$useLineGroups = function() {
                    return this.session.getUseWrapMode()
                }, this.destroy = function() {}
            }).call(c.prototype), t.Text = c
        })), ace.define("ace/layer/cursor", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/dom"),
                r = function(e) {
                    this.element = n.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), n.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this)
                };
            (function() {
                this.$updateOpacity = function(e) {
                    for (var t = this.cursors, i = t.length; i--;) n.setStyle(t[i].style, "opacity", e ? "" : "0")
                }, this.$startCssAnimation = function() {
                    for (var e = this.cursors, t = e.length; t--;) e[t].style.animationDuration = this.blinkInterval + "ms";
                    setTimeout(function() {
                        n.addCssClass(this.element, "ace_animate-blinking")
                    }.bind(this))
                }, this.$stopCssAnimation = function() {
                    n.removeCssClass(this.element, "ace_animate-blinking")
                }, this.$padding = 0, this.setPadding = function(e) {
                    this.$padding = e
                }, this.setSession = function(e) {
                    this.session = e
                }, this.setBlinking = function(e) {
                    e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
                }, this.setBlinkInterval = function(e) {
                    e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
                }, this.setSmoothBlinking = function(e) {
                    e != this.smoothBlinking && (this.smoothBlinking = e, n.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.restartTimer())
                }, this.addCursor = function() {
                    var e = n.createElement("div");
                    return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
                }, this.removeCursor = function() {
                    if (this.cursors.length > 1) {
                        var e = this.cursors.pop();
                        return e.parentNode.removeChild(e), e
                    }
                }, this.hideCursor = function() {
                    this.isVisible = !1, n.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
                }, this.showCursor = function() {
                    this.isVisible = !0, n.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
                }, this.restartTimer = function() {
                    var e = this.$updateCursors;
                    if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && n.removeCssClass(this.element, "ace_smooth-blinking"), e(!0), this.isBlinking && this.blinkInterval && this.isVisible)
                        if (this.smoothBlinking && setTimeout(function() {
                                n.addCssClass(this.element, "ace_smooth-blinking")
                            }.bind(this)), n.HAS_CSS_ANIMATION) this.$startCssAnimation();
                        else {
                            var t = function() {
                                this.timeoutId = setTimeout((function() {
                                    e(!1)
                                }), .6 * this.blinkInterval)
                            }.bind(this);
                            this.intervalId = setInterval((function() {
                                e(!0), t()
                            }), this.blinkInterval), t()
                        }
                    else this.$stopCssAnimation()
                }, this.getPixelPosition = function(e, t) {
                    if (!this.config || !this.session) return {
                        left: 0,
                        top: 0
                    };
                    e || (e = this.session.selection.getCursor());
                    var i = this.session.documentToScreenPosition(e);
                    return {
                        left: this.$padding + (this.session.$bidiHandler.isBidiRow(i.row, e.row) ? this.session.$bidiHandler.getPosLeft(i.column) : i.column * this.config.characterWidth),
                        top: (i.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight
                    }
                }, this.isCursorInView = function(e, t) {
                    return e.top >= 0 && e.top < t.maxHeight
                }, this.update = function(e) {
                    this.config = e;
                    var t = this.session.$selectionMarkers,
                        i = 0,
                        r = 0;
                    void 0 !== t && 0 !== t.length || (t = [{
                        cursor: null
                    }]);
                    i = 0;
                    for (var o = t.length; i < o; i++) {
                        var s = this.getPixelPosition(t[i].cursor, !0);
                        if (!((s.top > e.height + e.offset || s.top < 0) && i > 1)) {
                            var a = this.cursors[r++] || this.addCursor(),
                                c = a.style;
                            this.drawCursor ? this.drawCursor(a, s, e, t[i], this.session) : this.isCursorInView(s, e) ? (n.setStyle(c, "display", "block"), n.translate(a, s.left, s.top), n.setStyle(c, "width", Math.round(e.characterWidth) + "px"), n.setStyle(c, "height", e.lineHeight + "px")) : n.setStyle(c, "display", "none")
                        }
                    }
                    for (; this.cursors.length > r;) this.removeCursor();
                    var l = this.session.getOverwrite();
                    this.$setOverwrite(l), this.$pixelPos = s, this.restartTimer()
                }, this.drawCursor = null, this.$setOverwrite = function(e) {
                    e != this.overwrite && (this.overwrite = e, e ? n.addCssClass(this.element, "ace_overwrite-cursors") : n.removeCssClass(this.element, "ace_overwrite-cursors"))
                }, this.destroy = function() {
                    clearInterval(this.intervalId), clearTimeout(this.timeoutId)
                }
            }).call(r.prototype), t.Cursor = r
        })), ace.define("ace/scrollbar", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/oop"),
                r = e("./lib/dom"),
                o = e("./lib/event"),
                s = e("./lib/event_emitter").EventEmitter,
                a = 32768,
                c = function(e) {
                    this.element = r.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = r.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = " ", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, o.addListener(this.element, "scroll", this.onScroll.bind(this)), o.addListener(this.element, "mousedown", o.preventDefault)
                };
            (function() {
                n.implement(this, s), this.setVisible = function(e) {
                    this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1
                }
            }).call(c.prototype);
            var l = function(e, t) {
                c.call(this, e), this.scrollTop = 0, this.scrollHeight = 0, t.$scrollbarWidth = this.width = r.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px", this.$minWidth = 0
            };
            n.inherits(l, c),
                function() {
                    this.classSuffix = "-v", this.onScroll = function() {
                        if (!this.skipEvent) {
                            if (this.scrollTop = this.element.scrollTop, 1 != this.coeff) {
                                var e = this.element.clientHeight / this.scrollHeight;
                                this.scrollTop = this.scrollTop * (1 - e) / (this.coeff - e)
                            }
                            this._emit("scroll", {
                                data: this.scrollTop
                            })
                        }
                        this.skipEvent = !1
                    }, this.getWidth = function() {
                        return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0)
                    }, this.setHeight = function(e) {
                        this.element.style.height = e + "px"
                    }, this.setInnerHeight = this.setScrollHeight = function(e) {
                        this.scrollHeight = e, e > a ? (this.coeff = a / e, e = a) : 1 != this.coeff && (this.coeff = 1), this.inner.style.height = e + "px"
                    }, this.setScrollTop = function(e) {
                        this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = e, this.element.scrollTop = e * this.coeff)
                    }
                }.call(l.prototype);
            var h = function(e, t) {
                c.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
            };
            n.inherits(h, c),
                function() {
                    this.classSuffix = "-h", this.onScroll = function() {
                        this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {
                            data: this.scrollLeft
                        })), this.skipEvent = !1
                    }, this.getHeight = function() {
                        return this.isVisible ? this.height : 0
                    }, this.setWidth = function(e) {
                        this.element.style.width = e + "px"
                    }, this.setInnerWidth = function(e) {
                        this.inner.style.width = e + "px"
                    }, this.setScrollWidth = function(e) {
                        this.inner.style.width = e + "px"
                    }, this.setScrollLeft = function(e) {
                        this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e)
                    }
                }.call(h.prototype), t.ScrollBar = l, t.ScrollBarV = l, t.ScrollBarH = h, t.VScrollBar = l, t.HScrollBar = h
        })), ace.define("ace/renderloop", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/event"),
                r = function(e, t) {
                    this.onRender = e, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = t || window;
                    var i = this;
                    this._flush = function(e) {
                        i.pending = !1;
                        var t = i.changes;
                        if (t && (n.blockIdle(100), i.changes = 0, i.onRender(t)), i.changes) {
                            if (i.$recursionLimit-- < 0) return;
                            i.schedule()
                        } else i.$recursionLimit = 2
                    }
                };
            (function() {
                this.schedule = function(e) {
                    this.changes = this.changes | e, this.changes && !this.pending && (n.nextFrame(this._flush), this.pending = !0)
                }, this.clear = function(e) {
                    var t = this.changes;
                    return this.changes = 0, t
                }
            }).call(r.prototype), t.RenderLoop = r
        })), ace.define("ace/layer/font_metrics", [], (function(e, t, i) {
            var n = e("../lib/oop"),
                r = e("../lib/dom"),
                o = e("../lib/lang"),
                s = e("../lib/event"),
                a = e("../lib/useragent"),
                c = e("../lib/event_emitter").EventEmitter,
                l = 256,
                h = "function" == typeof ResizeObserver,
                u = 200,
                d = t.FontMetrics = function(e) {
                    this.el = r.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = r.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = r.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), this.$measureNode.textContent = o.stringRepeat("X", l), this.$characterSize = {
                        width: 0,
                        height: 0
                    }, h ? this.$addObserver() : this.checkForSizeChanges()
                };
            (function() {
                n.implement(this, c), this.$characterSize = {
                    width: 0,
                    height: 0
                }, this.$setMeasureNodeStyles = function(e, t) {
                    e.width = e.height = "auto", e.left = e.top = "0px", e.visibility = "hidden", e.position = "absolute", e.whiteSpace = "pre", a.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible"
                }, this.checkForSizeChanges = function(e) {
                    if (void 0 === e && (e = this.$measureSizes()), e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                        this.$measureNode.style.fontWeight = "bold";
                        var t = this.$measureSizes();
                        this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {
                            data: e
                        })
                    }
                }, this.$addObserver = function() {
                    var e = this;
                    this.$observer = new window.ResizeObserver((function(t) {
                        var i = t[0].contentRect;
                        e.checkForSizeChanges({
                            height: i.height,
                            width: i.width / l
                        })
                    })), this.$observer.observe(this.$measureNode)
                }, this.$pollSizeChanges = function() {
                    if (this.$pollSizeChangesTimer || this.$observer) return this.$pollSizeChangesTimer;
                    var e = this;
                    return this.$pollSizeChangesTimer = s.onIdle((function t() {
                        e.checkForSizeChanges(), s.onIdle(t, 500)
                    }), 500)
                }, this.setPolling = function(e) {
                    e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0)
                }, this.$measureSizes = function(e) {
                    var t = {
                        height: (e || this.$measureNode).clientHeight,
                        width: (e || this.$measureNode).clientWidth / l
                    };
                    return 0 === t.width || 0 === t.height ? null : t
                }, this.$measureCharWidth = function(e) {
                    return this.$main.textContent = o.stringRepeat(e, l), this.$main.getBoundingClientRect().width / l
                }, this.getCharacterWidth = function(e) {
                    var t = this.charSizes[e];
                    return void 0 === t && (t = this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t
                }, this.destroy = function() {
                    clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
                }, this.$getZoom = function e(t) {
                    return t ? (window.getComputedStyle(t).zoom || 1) * e(t.parentElement) : 1
                }, this.$initTransformMeasureNodes = function() {
                    var e = function(e, t) {
                        return ["div", {
                            style: "position: absolute;top:" + e + "px;left:" + t + "px;"
                        }]
                    };
                    this.els = r.buildDom([e(0, 0), e(u, 0), e(0, u), e(u, u)], this.el)
                }, this.transformCoordinates = function(e, t) {
                    function i(e, t, i) {
                        var n = e[1] * t[0] - e[0] * t[1];
                        return [(-t[1] * i[0] + t[0] * i[1]) / n, (+e[1] * i[0] - e[0] * i[1]) / n]
                    }

                    function n(e, t) {
                        return [e[0] - t[0], e[1] - t[1]]
                    }

                    function r(e, t) {
                        return [e[0] + t[0], e[1] + t[1]]
                    }

                    function o(e, t) {
                        return [e * t[0], e * t[1]]
                    }

                    function s(e) {
                        var t = e.getBoundingClientRect();
                        return [t.left, t.top]
                    }
                    e && (e = o(1 / this.$getZoom(this.el), e));
                    this.els || this.$initTransformMeasureNodes();
                    var a = s(this.els[0]),
                        c = s(this.els[1]),
                        l = s(this.els[2]),
                        h = s(this.els[3]),
                        d = i(n(h, c), n(h, l), n(r(c, l), r(h, a))),
                        g = o(1 + d[0], n(c, a)),
                        f = o(1 + d[1], n(l, a));
                    if (t) {
                        var p = t,
                            m = d[0] * p[0] / u + d[1] * p[1] / u + 1,
                            v = r(o(p[0], g), o(p[1], f));
                        return r(o(1 / m / u, v), a)
                    }
                    var w = n(e, a),
                        b = i(n(g, o(d[0], w)), n(f, o(d[1], w)), w);
                    return o(u, b)
                }
            }).call(d.prototype)
        })), ace.define("ace/virtual_renderer", [], (function(e, t, i) {
            "use strict";
            var n = e("./lib/oop"),
                r = e("./lib/dom"),
                o = e("./config"),
                s = e("./layer/gutter").Gutter,
                a = e("./layer/marker").Marker,
                c = e("./layer/text").Text,
                l = e("./layer/cursor").Cursor,
                h = e("./scrollbar").HScrollBar,
                u = e("./scrollbar").VScrollBar,
                d = e("./renderloop").RenderLoop,
                g = e("./layer/font_metrics").FontMetrics,
                f = e("./lib/event_emitter").EventEmitter,
                p = '.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}',
                m = e("./lib/useragent"),
                v = m.isIE;
            r.importCssString(p, "ace_editor.css");
            var w = function(e, t) {
                var i = this;
                this.container = e || r.createElement("div"), r.addCssClass(this.container, "ace_editor"), r.HI_DPI && r.addCssClass(this.container, "ace_hidpi"), this.setTheme(t), this.$gutter = r.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = r.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = r.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new s(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new a(this.content);
                var n = this.$textLayer = new c(this.content);
                this.canvas = n.element, this.$markerFront = new a(this.content), this.$cursorLayer = new l(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new u(this.container, this), this.scrollBarH = new h(this.container, this), this.scrollBarV.addEventListener("scroll", (function(e) {
                    i.$scrollAnimation || i.session.setScrollTop(e.data - i.scrollMargin.top)
                })), this.scrollBarH.addEventListener("scroll", (function(e) {
                    i.$scrollAnimation || i.session.setScrollLeft(e.data - i.scrollMargin.left)
                })), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
                    row: 0,
                    column: 0
                }, this.$fontMetrics = new g(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", (function(e) {
                    i.updateCharacterSize(), i.onResize(!0, i.gutterWidth, i.$size.width, i.$size.height), i._signal("changeCharacterSize", e)
                })), this.$size = {
                    width: 0,
                    height: 0,
                    scrollerHeight: 0,
                    scrollerWidth: 0,
                    $dirty: !0
                }, this.layerConfig = {
                    width: 1,
                    padding: 0,
                    firstRow: 0,
                    firstRowScreen: 0,
                    lastRow: 0,
                    lineHeight: 0,
                    characterWidth: 0,
                    minHeight: 1,
                    maxHeight: 1,
                    offset: 0,
                    height: 1,
                    gutterOffset: 1
                }, this.scrollMargin = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    v: 0,
                    h: 0
                }, this.margin = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    v: 0,
                    h: 0
                }, this.$keepTextAreaAtCursor = !m.isIOS, this.$loop = new d(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), o.resetOptions(this), o._signal("renderer", this)
            };
            (function() {
                this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, n.implement(this, f), this.updateCharacterSize = function() {
                    this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), r.setStyle(this.scroller.style, "line-height", this.lineHeight + "px")
                }, this.setSession = function(e) {
                    this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e), e && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
                }, this.updateLines = function(e, t, i) {
                    if (void 0 === t && (t = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {
                            firstRow: e,
                            lastRow: t
                        }, this.$changedLines.lastRow < this.layerConfig.firstRow) {
                        if (!i) return;
                        this.$changedLines.lastRow = this.layerConfig.lastRow
                    }
                    this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
                }, this.onChangeNewLineMode = function() {
                    this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)
                }, this.onChangeTabSize = function() {
                    this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
                }, this.updateText = function() {
                    this.$loop.schedule(this.CHANGE_TEXT)
                }, this.updateFull = function(e) {
                    e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
                }, this.updateFontSize = function() {
                    this.$textLayer.checkForSizeChanges()
                }, this.$changes = 0, this.$updateSizeAsync = function() {
                    this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
                }, this.onResize = function(e, t, i, n) {
                    if (!(this.resizing > 2)) {
                        this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
                        var r = this.container;
                        n || (n = r.clientHeight || r.scrollHeight), i || (i = r.clientWidth || r.scrollWidth);
                        var o = this.$updateCachedSize(e, t, i, n);
                        if (!this.$size.scrollerHeight || !i && !n) return this.resizing = 0;
                        e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(o | this.$changes, !0) : this.$loop.schedule(o | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null
                    }
                }, this.$updateCachedSize = function(e, t, i, n) {
                    n -= this.$extraHeight || 0;
                    var o = 0,
                        s = this.$size,
                        a = {
                            width: s.width,
                            height: s.height,
                            scrollerHeight: s.scrollerHeight,
                            scrollerWidth: s.scrollerWidth
                        };
                    if (n && (e || s.height != n) && (s.height = n, o |= this.CHANGE_SIZE, s.scrollerHeight = s.height, this.$horizScroll && (s.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", o |= this.CHANGE_SCROLL), i && (e || s.width != i)) {
                        o |= this.CHANGE_SIZE, s.width = i, null == t && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, r.setStyle(this.scrollBarH.element.style, "left", t + "px"), r.setStyle(this.scroller.style, "left", t + this.margin.left + "px"), s.scrollerWidth = Math.max(0, i - t - this.scrollBarV.getWidth() - this.margin.h), r.setStyle(this.$gutter.style, "left", this.margin.left + "px");
                        var c = this.scrollBarV.getWidth() + "px";
                        r.setStyle(this.scrollBarH.element.style, "right", c), r.setStyle(this.scroller.style, "right", c), r.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (o |= this.CHANGE_FULL)
                    }
                    return s.$dirty = !i || !n, o && this._signal("resize", a), o
                }, this.onGutterResize = function(e) {
                    var t = this.$showGutter ? e : 0;
                    t != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, t, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() || this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig()
                }, this.adjustWrapLimit = function() {
                    var e = this.$size.scrollerWidth - 2 * this.$padding,
                        t = Math.floor(e / this.characterWidth);
                    return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
                }, this.setAnimatedScroll = function(e) {
                    this.setOption("animatedScroll", e)
                }, this.getAnimatedScroll = function() {
                    return this.$animatedScroll
                }, this.setShowInvisibles = function(e) {
                    this.setOption("showInvisibles", e), this.session.$bidiHandler.setShowInvisibles(e)
                }, this.getShowInvisibles = function() {
                    return this.getOption("showInvisibles")
                }, this.getDisplayIndentGuides = function() {
                    return this.getOption("displayIndentGuides")
                }, this.setDisplayIndentGuides = function(e) {
                    this.setOption("displayIndentGuides", e)
                }, this.setShowPrintMargin = function(e) {
                    this.setOption("showPrintMargin", e)
                }, this.getShowPrintMargin = function() {
                    return this.getOption("showPrintMargin")
                }, this.setPrintMarginColumn = function(e) {
                    this.setOption("printMarginColumn", e)
                }, this.getPrintMarginColumn = function() {
                    return this.getOption("printMarginColumn")
                }, this.getShowGutter = function() {
                    return this.getOption("showGutter")
                }, this.setShowGutter = function(e) {
                    return this.setOption("showGutter", e)
                }, this.getFadeFoldWidgets = function() {
                    return this.getOption("fadeFoldWidgets")
                }, this.setFadeFoldWidgets = function(e) {
                    this.setOption("fadeFoldWidgets", e)
                }, this.setHighlightGutterLine = function(e) {
                    this.setOption("highlightGutterLine", e)
                }, this.getHighlightGutterLine = function() {
                    return this.getOption("highlightGutterLine")
                }, this.$updatePrintMargin = function() {
                    if (this.$showPrintMargin || this.$printMarginEl) {
                        if (!this.$printMarginEl) {
                            var e = r.createElement("div");
                            e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = r.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
                        }
                        var t = this.$printMarginEl.style;
                        t.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && -1 == this.session.$wrap && this.adjustWrapLimit()
                    }
                }, this.getContainerElement = function() {
                    return this.container
                }, this.getMouseEventTarget = function() {
                    return this.scroller
                }, this.getTextAreaContainer = function() {
                    return this.container
                }, this.$moveTextAreaToCursor = function() {
                    if (!this.$isMousePressed) {
                        var e = this.textarea.style,
                            t = this.$composition;
                        if (this.$keepTextAreaAtCursor || t) {
                            var i = this.$cursorLayer.$pixelPos;
                            if (i) {
                                t && t.markerRange && (i = this.$cursorLayer.getPixelPosition(t.markerRange.start, !0));
                                var n = this.layerConfig,
                                    o = i.top,
                                    s = i.left;
                                o -= n.offset;
                                var a = t && t.useTextareaForIME ? this.lineHeight : v ? 0 : 1;
                                if (o < 0 || o > n.height - a) r.translate(this.textarea, 0, 0);
                                else {
                                    var c = 1,
                                        l = this.$size.height - a;
                                    if (t)
                                        if (t.useTextareaForIME) {
                                            var h = this.textarea.value;
                                            c = this.characterWidth * this.session.$getStringScreenWidth(h)[0]
                                        } else o += this.lineHeight + 2;
                                    else o += this.lineHeight;
                                    (s -= this.scrollLeft) > this.$size.scrollerWidth - c && (s = this.$size.scrollerWidth - c), s += this.gutterWidth + this.margin.left, r.setStyle(e, "height", a + "px"), r.setStyle(e, "width", c + "px"), r.translate(this.textarea, Math.min(s, this.$size.scrollerWidth - c), Math.min(o, l))
                                }
                            }
                        } else r.translate(this.textarea, -100, 0)
                    }
                }, this.getFirstVisibleRow = function() {
                    return this.layerConfig.firstRow
                }, this.getFirstFullyVisibleRow = function() {
                    return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
                }, this.getLastFullyVisibleRow = function() {
                    var e = this.layerConfig,
                        t = e.lastRow;
                    return this.session.documentToScreenRow(t, 0) * e.lineHeight - this.session.getScrollTop() > e.height - e.lineHeight ? t - 1 : t
                }, this.getLastVisibleRow = function() {
                    return this.layerConfig.lastRow
                }, this.$padding = null, this.setPadding = function(e) {
                    this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
                }, this.setScrollMargin = function(e, t, i, n) {
                    var r = this.scrollMargin;
                    r.top = 0 | e, r.bottom = 0 | t, r.right = 0 | n, r.left = 0 | i, r.v = r.top + r.bottom, r.h = r.left + r.right, r.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-r.top), this.updateFull()
                }, this.setMargin = function(e, t, i, n) {
                    var r = this.margin;
                    r.top = 0 | e, r.bottom = 0 | t, r.right = 0 | n, r.left = 0 | i, r.v = r.top + r.bottom, r.h = r.left + r.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull()
                }, this.getHScrollBarAlwaysVisible = function() {
                    return this.$hScrollBarAlwaysVisible
                }, this.setHScrollBarAlwaysVisible = function(e) {
                    this.setOption("hScrollBarAlwaysVisible", e)
                }, this.getVScrollBarAlwaysVisible = function() {
                    return this.$vScrollBarAlwaysVisible
                }, this.setVScrollBarAlwaysVisible = function(e) {
                    this.setOption("vScrollBarAlwaysVisible", e)
                }, this.$updateScrollBarV = function() {
                    var e = this.layerConfig.maxHeight,
                        t = this.$size.scrollerHeight;
                    !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
                }, this.$updateScrollBarH = function() {
                    this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
                }, this.$frozen = !1, this.freeze = function() {
                    this.$frozen = !0
                }, this.unfreeze = function() {
                    this.$frozen = !1
                }, this.$renderChanges = function(e, t) {
                    if (this.$changes && (e |= this.$changes, this.$changes = 0), this.session && this.container.offsetWidth && !this.$frozen && (e || t)) {
                        if (this.$size.$dirty) return this.$changes |= e, this.onResize(!0);
                        this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", e), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
                        var i = this.layerConfig;
                        if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                            if (e |= this.$computeLayerConfig() | this.$loop.clear(), i.firstRow != this.layerConfig.firstRow && i.firstRowScreen == this.layerConfig.firstRowScreen) {
                                var n = this.scrollTop + (i.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                                n > 0 && (this.scrollTop = n, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig() | this.$loop.clear())
                            }
                            i = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), r.translate(this.content, -this.scrollLeft, -i.offset);
                            var o = i.width + 2 * this.$padding + "px",
                                s = i.minHeight + "px";
                            r.setStyle(this.content.style, "width", o), r.setStyle(this.content.style, "height", s)
                        }
                        return e & this.CHANGE_H_SCROLL && (r.translate(this.content, -this.scrollLeft, -i.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), e & this.CHANGE_FULL ? (this.$changedLines = null, this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), void this._signal("afterRender", e)) : e & this.CHANGE_SCROLL ? (this.$changedLines = null, e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(i) : this.$textLayer.scrollLines(i), this.$showGutter && (e & this.CHANGE_GUTTER || e & this.CHANGE_LINES ? this.$gutterLayer.update(i) : this.$gutterLayer.scrollLines(i)), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), void this._signal("afterRender", e)) : (e & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(i) : e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER ? this.$showGutter && this.$gutterLayer.update(i) : e & this.CHANGE_CURSOR && this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(i), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(i), this.$moveTextAreaToCursor()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(i), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(i), void this._signal("afterRender", e))
                    }
                    this.$changes |= e
                }, this.$autosize = function() {
                    var e = this.session.getScreenLength() * this.lineHeight,
                        t = this.$maxLines * this.lineHeight,
                        i = Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0);
                    this.$horizScroll && (i += this.scrollBarH.getHeight()), this.$maxPixelHeight && i > this.$maxPixelHeight && (i = this.$maxPixelHeight);
                    var n = !(i <= 2 * this.lineHeight) && e > t;
                    if (i != this.desiredHeight || this.$size.height != this.desiredHeight || n != this.$vScroll) {
                        n != this.$vScroll && (this.$vScroll = n, this.scrollBarV.setVisible(n));
                        var r = this.container.clientWidth;
                        this.container.style.height = i + "px", this.$updateCachedSize(!0, this.$gutterWidth, r, i), this.desiredHeight = i, this._signal("autosize")
                    }
                }, this.$computeLayerConfig = function() {
                    var e = this.session,
                        t = this.$size,
                        i = t.height <= 2 * this.lineHeight,
                        n = this.session.getScreenLength() * this.lineHeight,
                        r = this.$getLongestLine(),
                        o = !i && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - r - 2 * this.$padding < 0),
                        s = this.$horizScroll !== o;
                    s && (this.$horizScroll = o, this.scrollBarH.setVisible(o));
                    var a = this.$vScroll;
                    this.$maxLines && this.lineHeight > 1 && this.$autosize();
                    var c = t.scrollerHeight + this.lineHeight,
                        l = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
                    n += l;
                    var h = this.scrollMargin;
                    this.session.setScrollTop(Math.max(-h.top, Math.min(this.scrollTop, n - t.scrollerHeight + h.bottom))), this.session.setScrollLeft(Math.max(-h.left, Math.min(this.scrollLeft, r + 2 * this.$padding - t.scrollerWidth + h.right)));
                    var u = !i && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - n + l < 0 || this.scrollTop > h.top),
                        d = a !== u;
                    d && (this.$vScroll = u, this.scrollBarV.setVisible(u));
                    var g, f, p = this.scrollTop % this.lineHeight,
                        m = Math.ceil(c / this.lineHeight) - 1,
                        v = Math.max(0, Math.round((this.scrollTop - p) / this.lineHeight)),
                        w = v + m,
                        b = this.lineHeight;
                    v = e.screenToDocumentRow(v, 0);
                    var y = e.getFoldLine(v);
                    y && (v = y.start.row), g = e.documentToScreenRow(v, 0), f = e.getRowLength(v) * b, w = Math.min(e.screenToDocumentRow(w, 0), e.getLength() - 1), c = t.scrollerHeight + e.getRowLength(w) * b + f, p = this.scrollTop - g * b;
                    var C = 0;
                    return (this.layerConfig.width != r || s) && (C = this.CHANGE_H_SCROLL), (s || d) && (C |= this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), d && (r = this.$getLongestLine())), this.layerConfig = {
                        width: r,
                        padding: this.$padding,
                        firstRow: v,
                        firstRowScreen: g,
                        lastRow: w,
                        lineHeight: b,
                        characterWidth: this.characterWidth,
                        minHeight: c,
                        maxHeight: n,
                        offset: p,
                        gutterOffset: b ? Math.max(0, Math.ceil((p + t.height - t.scrollerHeight) / b)) : 0,
                        height: this.$size.scrollerHeight
                    }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(r - this.$padding), C
                }, this.$updateLines = function() {
                    if (this.$changedLines) {
                        var e = this.$changedLines.firstRow,
                            t = this.$changedLines.lastRow;
                        this.$changedLines = null;
                        var i = this.layerConfig;
                        if (!(e > i.lastRow + 1 || t < i.firstRow)) return t === 1 / 0 ? (this.$showGutter && this.$gutterLayer.update(i), void this.$textLayer.update(i)) : (this.$textLayer.updateLines(i, e, t), !0)
                    }
                }, this.$getLongestLine = function() {
                    var e = this.session.getScreenWidth();
                    return this.showInvisibles && !this.session.$useWrapMode && (e += 1), this.$textLayer && e > this.$textLayer.MAX_LINE_LENGTH && (e = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
                }, this.updateFrontMarkers = function() {
                    this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
                }, this.updateBackMarkers = function() {
                    this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
                }, this.addGutterDecoration = function(e, t) {
                    this.$gutterLayer.addGutterDecoration(e, t)
                }, this.removeGutterDecoration = function(e, t) {
                    this.$gutterLayer.removeGutterDecoration(e, t)
                }, this.updateBreakpoints = function(e) {
                    this.$loop.schedule(this.CHANGE_GUTTER)
                }, this.setAnnotations = function(e) {
                    this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
                }, this.updateCursor = function() {
                    this.$loop.schedule(this.CHANGE_CURSOR)
                }, this.hideCursor = function() {
                    this.$cursorLayer.hideCursor()
                }, this.showCursor = function() {
                    this.$cursorLayer.showCursor()
                }, this.scrollSelectionIntoView = function(e, t, i) {
                    this.scrollCursorIntoView(e, i), this.scrollCursorIntoView(t, i)
                }, this.scrollCursorIntoView = function(e, t, i) {
                    if (0 !== this.$size.scrollerHeight) {
                        var n = this.$cursorLayer.getPixelPosition(e),
                            r = n.left,
                            o = n.top,
                            s = i && i.top || 0,
                            a = i && i.bottom || 0,
                            c = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                        c + s > o ? (t && c + s > o + this.lineHeight && (o -= t * this.$size.scrollerHeight), 0 === o && (o = -this.scrollMargin.top), this.session.setScrollTop(o)) : c + this.$size.scrollerHeight - a < o + this.lineHeight && (t && c + this.$size.scrollerHeight - a < o - this.lineHeight && (o += t * this.$size.scrollerHeight), this.session.setScrollTop(o + this.lineHeight + a - this.$size.scrollerHeight));
                        var l = this.scrollLeft;
                        l > r ? (r < this.$padding + 2 * this.layerConfig.characterWidth && (r = -this.scrollMargin.left), this.session.setScrollLeft(r)) : l + this.$size.scrollerWidth < r + this.characterWidth ? this.session.setScrollLeft(Math.round(r + this.characterWidth - this.$size.scrollerWidth)) : l <= this.$padding && r - l < this.characterWidth && this.session.setScrollLeft(0)
                    }
                }, this.getScrollTop = function() {
                    return this.session.getScrollTop()
                }, this.getScrollLeft = function() {
                    return this.session.getScrollLeft()
                }, this.getScrollTopRow = function() {
                    return this.scrollTop / this.lineHeight
                }, this.getScrollBottomRow = function() {
                    return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
                }, this.scrollToRow = function(e) {
                    this.session.setScrollTop(e * this.lineHeight)
                }, this.alignCursor = function(e, t) {
                    "number" == typeof e && (e = {
                        row: e,
                        column: 0
                    });
                    var i = this.$cursorLayer.getPixelPosition(e),
                        n = this.$size.scrollerHeight - this.lineHeight,
                        r = i.top - n * (t || 0);
                    return this.session.setScrollTop(r), r
                }, this.STEPS = 8, this.$calcSteps = function(e, t) {
                    var i = 0,
                        n = this.STEPS,
                        r = [],
                        o = function(e, t, i) {
                            return i * (Math.pow(e - 1, 3) + 1) + t
                        };
                    for (i = 0; i < n; ++i) r.push(o(i / this.STEPS, e, t - e));
                    return r
                }, this.scrollToLine = function(e, t, i, n) {
                    var r = this.$cursorLayer.getPixelPosition({
                        row: e,
                        column: 0
                    }).top;
                    t && (r -= this.$size.scrollerHeight / 2);
                    var o = this.scrollTop;
                    this.session.setScrollTop(r), !1 !== i && this.animateScrolling(o, n)
                }, this.animateScrolling = function(e, t) {
                    var i = this.scrollTop;
                    if (this.$animatedScroll) {
                        var n = this;
                        if (e != i) {
                            if (this.$scrollAnimation) {
                                var r = this.$scrollAnimation.steps;
                                if (r.length && (e = r[0]) == i) return
                            }
                            var o = n.$calcSteps(e, i);
                            this.$scrollAnimation = {
                                from: e,
                                to: i,
                                steps: o
                            }, clearInterval(this.$timer), n.session.setScrollTop(o.shift()), n.session.$scrollTop = i, this.$timer = setInterval((function() {
                                o.length ? (n.session.setScrollTop(o.shift()), n.session.$scrollTop = i) : null != i ? (n.session.$scrollTop = -1, n.session.setScrollTop(i), i = null) : (n.$timer = clearInterval(n.$timer), n.$scrollAnimation = null, t && t())
                            }), 10)
                        }
                    }
                }, this.scrollToY = function(e) {
                    this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
                }, this.scrollToX = function(e) {
                    this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
                }, this.scrollTo = function(e, t) {
                    this.session.setScrollTop(t), this.session.setScrollLeft(t)
                }, this.scrollBy = function(e, t) {
                    t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
                }, this.isScrollableBy = function(e, t) {
                    return t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || (t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || (e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || (e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right || void 0)))
                }, this.pixelToScreenCoordinates = function(e, t) {
                    var i;
                    if (this.$hasCssTransforms) {
                        i = {
                            top: 0,
                            left: 0
                        };
                        var n = this.$fontMetrics.transformCoordinates([e, t]);
                        e = n[1] - this.gutterWidth - this.margin.left, t = n[0]
                    } else i = this.scroller.getBoundingClientRect();
                    var r = e + this.scrollLeft - i.left - this.$padding,
                        o = r / this.characterWidth,
                        s = Math.floor((t + this.scrollTop - i.top) / this.lineHeight),
                        a = this.$blockCursor ? Math.floor(o) : Math.round(o);
                    return {
                        row: s,
                        column: a,
                        side: o - a > 0 ? 1 : -1,
                        offsetX: r
                    }
                }, this.screenToTextCoordinates = function(e, t) {
                    var i;
                    if (this.$hasCssTransforms) {
                        i = {
                            top: 0,
                            left: 0
                        };
                        var n = this.$fontMetrics.transformCoordinates([e, t]);
                        e = n[1] - this.gutterWidth - this.margin.left, t = n[0]
                    } else i = this.scroller.getBoundingClientRect();
                    var r = e + this.scrollLeft - i.left - this.$padding,
                        o = r / this.characterWidth,
                        s = this.$blockCursor ? Math.floor(o) : Math.round(o),
                        a = Math.floor((t + this.scrollTop - i.top) / this.lineHeight);
                    return this.session.screenToDocumentPosition(a, Math.max(s, 0), r)
                }, this.textToScreenCoordinates = function(e, t) {
                    var i = this.scroller.getBoundingClientRect(),
                        n = this.session.documentToScreenPosition(e, t),
                        r = this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, e) ? this.session.$bidiHandler.getPosLeft(n.column) : Math.round(n.column * this.characterWidth)),
                        o = n.row * this.lineHeight;
                    return {
                        pageX: i.left + r - this.scrollLeft,
                        pageY: i.top + o - this.scrollTop
                    }
                }, this.visualizeFocus = function() {
                    r.addCssClass(this.container, "ace_focus")
                }, this.visualizeBlur = function() {
                    r.removeCssClass(this.container, "ace_focus")
                }, this.showComposition = function(e) {
                    this.$composition = e, e.cssText || (e.cssText = this.textarea.style.cssText), e.useTextareaForIME = this.$useTextareaForIME, this.$useTextareaForIME ? (r.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : e.markerId = this.session.addMarker(e.markerRange, "ace_composition_marker", "text")
                }, this.setCompositionText = function(e) {
                    var t = this.session.selection.cursor;
                    this.addToken(e, "composition_placeholder", t.row, t.column), this.$moveTextAreaToCursor()
                }, this.hideComposition = function() {
                    this.$composition && (this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), r.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText, this.$composition = null, this.$cursorLayer.element.style.display = "")
                }, this.addToken = function(e, t, i, n) {
                    var r = this.session;
                    r.bgTokenizer.lines[i] = null;
                    var o = {
                            type: t,
                            value: e
                        },
                        s = r.getTokens(i);
                    if (null == n) s.push(o);
                    else
                        for (var a = 0, c = 0; c < s.length; c++) {
                            var l = s[c];
                            if (n <= (a += l.value.length)) {
                                var h = l.value.length - (a - n),
                                    u = l.value.slice(0, h),
                                    d = l.value.slice(h);
                                s.splice(c, 1, {
                                    type: l.type,
                                    value: u
                                }, o, {
                                    type: l.type,
                                    value: d
                                });
                                break
                            }
                        }
                    this.updateLines(i, i)
                }, this.setTheme = function(e, t) {
                    function i(i) {
                        if (n.$themeId != e) return t && t();
                        if (!i || !i.cssClass) throw new Error("couldn't load module " + e + " or it didn't call define");
                        i.$id && (n.$themeId = i.$id), r.importCssString(i.cssText, i.cssClass, n.container), n.theme && r.removeCssClass(n.container, n.theme.cssClass);
                        var o = "padding" in i ? i.padding : "padding" in (n.theme || {}) ? 4 : n.$padding;
                        n.$padding && o != n.$padding && n.setPadding(o), n.$theme = i.cssClass, n.theme = i, r.addCssClass(n.container, i.cssClass), r.setCssClass(n.container, "ace_dark", i.isDark), n.$size && (n.$size.width = 0, n.$updateSizeAsync()), n._dispatchEvent("themeLoaded", {
                            theme: i
                        }), t && t()
                    }
                    var n = this;
                    if (this.$themeId = e, n._dispatchEvent("themeChange", {
                            theme: e
                        }), e && "string" != typeof e) i(e);
                    else {
                        var s = e || this.$options.theme.initialValue;
                        o.loadModule(["theme", s], i)
                    }
                }, this.getTheme = function() {
                    return this.$themeId
                }, this.setStyle = function(e, t) {
                    r.setCssClass(this.container, e, !1 !== t)
                }, this.unsetStyle = function(e) {
                    r.removeCssClass(this.container, e)
                }, this.setCursorStyle = function(e) {
                    r.setStyle(this.scroller.style, "cursor", e)
                }, this.setMouseCursor = function(e) {
                    r.setStyle(this.scroller.style, "cursor", e)
                }, this.attachToShadowRoot = function() {
                    r.importCssString(p, "ace_editor.css", this.container)
                }, this.destroy = function() {
                    this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy()
                }
            }).call(w.prototype), o.defineOptions(w.prototype, "renderer", {
                animatedScroll: {
                    initialValue: !1
                },
                showInvisibles: {
                    set: function(e) {
                        this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
                    },
                    initialValue: !1
                },
                showPrintMargin: {
                    set: function() {
                        this.$updatePrintMargin()
                    },
                    initialValue: !0
                },
                printMarginColumn: {
                    set: function() {
                        this.$updatePrintMargin()
                    },
                    initialValue: 80
                },
                printMargin: {
                    set: function(e) {
                        "number" == typeof e && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin()
                    },
                    get: function() {
                        return this.$showPrintMargin && this.$printMarginColumn
                    }
                },
                showGutter: {
                    set: function(e) {
                        this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
                    },
                    initialValue: !0
                },
                fadeFoldWidgets: {
                    set: function(e) {
                        r.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
                    },
                    initialValue: !1
                },
                showFoldWidgets: {
                    set: function(e) {
                        this.$gutterLayer.setShowFoldWidgets(e), this.$loop.schedule(this.CHANGE_GUTTER)
                    },
                    initialValue: !0
                },
                displayIndentGuides: {
                    set: function(e) {
                        this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
                    },
                    initialValue: !0
                },
                highlightGutterLine: {
                    set: function(e) {
                        this.$gutterLayer.setHighlightGutterLine(e), this.$loop.schedule(this.CHANGE_GUTTER)
                    },
                    initialValue: !0
                },
                hScrollBarAlwaysVisible: {
                    set: function(e) {
                        (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
                    },
                    initialValue: !1
                },
                vScrollBarAlwaysVisible: {
                    set: function(e) {
                        (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
                    },
                    initialValue: !1
                },
                fontSize: {
                    set: function(e) {
                        "number" == typeof e && (e += "px"), this.container.style.fontSize = e, this.updateFontSize()
                    },
                    initialValue: 12
                },
                fontFamily: {
                    set: function(e) {
                        this.container.style.fontFamily = e, this.updateFontSize()
                    }
                },
                maxLines: {
                    set: function(e) {
                        this.updateFull()
                    }
                },
                minLines: {
                    set: function(e) {
                        this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull()
                    }
                },
                maxPixelHeight: {
                    set: function(e) {
                        this.updateFull()
                    },
                    initialValue: 0
                },
                scrollPastEnd: {
                    set: function(e) {
                        e = +e || 0, this.$scrollPastEnd != e && (this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL))
                    },
                    initialValue: 0,
                    handlesSet: !0
                },
                fixedWidthGutter: {
                    set: function(e) {
                        this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER)
                    }
                },
                theme: {
                    set: function(e) {
                        this.setTheme(e)
                    },
                    get: function() {
                        return this.$themeId || this.theme
                    },
                    initialValue: "./theme/textmate",
                    handlesSet: !0
                },
                hasCssTransforms: {},
                useTextareaForIME: {
                    initialValue: !m.isMobile && !m.isIE
                }
            }), t.VirtualRenderer = w
        })), ace.define("ace/worker/worker_client", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                if ("undefined" == typeof Worker) return {
                    postMessage: function() {},
                    terminate: function() {}
                };
                if (a.get("loadWorkerFromBlob")) {
                    var t = function(e) {
                            var t = "importScripts('" + o.qualifyURL(e) + "');";
                            try {
                                return new Blob([t], {
                                    type: "application/javascript"
                                })
                            } catch (e) {
                                var i = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
                                return i.append(t), i.getBlob("application/javascript")
                            }
                        }(e),
                        i = (window.URL || window.webkitURL).createObjectURL(t);
                    return new Worker(i)
                }
                return new Worker(e)
            }
            var r = e("../lib/oop"),
                o = e("../lib/net"),
                s = e("../lib/event_emitter").EventEmitter,
                a = e("../config"),
                c = function(e) {
                    e.postMessage || (e = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = e, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
                };
            (function() {
                r.implement(this, s), this.$createWorkerFromOldConfig = function(t, i, r, o, s) {
                    if (e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl), a.get("packaged") || !e.toUrl) o = o || a.moduleUrl(i, "worker");
                    else {
                        var c = this.$normalizePath;
                        o = o || c(e.toUrl("ace/worker/worker.js", null, "_"));
                        var l = {};
                        t.forEach((function(t) {
                            l[t] = c(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
                        }))
                    }
                    return this.$worker = n(o), s && this.send("importScripts", s), this.$worker.postMessage({
                        init: !0,
                        tlns: l,
                        module: i,
                        classname: r
                    }), this.$worker
                }, this.onMessage = function(e) {
                    var t = e.data;
                    switch (t.type) {
                        case "event":
                            this._signal(t.name, {
                                data: t.data
                            });
                            break;
                        case "call":
                            var i = this.callbacks[t.id];
                            i && (i(t.data), delete this.callbacks[t.id]);
                            break;
                        case "error":
                            this.reportError(t.data);
                            break;
                        case "log":
                            window.console && console.log && console.log.apply(console, t.data)
                    }
                }, this.reportError = function(e) {
                    window.console && console.error && console.error(e)
                }, this.$normalizePath = function(e) {
                    return o.qualifyURL(e)
                }, this.terminate = function() {
                    this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null
                }, this.send = function(e, t) {
                    this.$worker.postMessage({
                        command: e,
                        args: t
                    })
                }, this.call = function(e, t, i) {
                    if (i) {
                        var n = this.callbackId++;
                        this.callbacks[n] = i, t.push(n)
                    }
                    this.send(e, t)
                }, this.emit = function(e, t) {
                    try {
                        t.data && t.data.err && (t.data.err = {
                            message: t.data.err.message,
                            stack: t.data.err.stack,
                            code: t.data.err.code
                        }), this.$worker.postMessage({
                            event: e,
                            data: {
                                data: t.data
                            }
                        })
                    } catch (e) {
                        console.error(e.stack)
                    }
                }, this.attachToDocument = function(e) {
                    this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener)
                }, this.changeListener = function(e) {
                    this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), "insert" == e.action ? this.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e.start, e.end)
                }, this.$sendDeltaQueue = function() {
                    var e = this.deltaQueue;
                    e && (this.deltaQueue = null, e.length > 50 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {
                        data: e
                    }))
                }
            }).call(c.prototype);
            t.UIWorkerClient = function(e, t, i) {
                var n = null,
                    r = !1,
                    o = Object.create(s),
                    l = [],
                    h = new c({
                        messageBuffer: l,
                        terminate: function() {},
                        postMessage: function(e) {
                            l.push(e), n && (r ? setTimeout(u) : u())
                        }
                    });
                h.setEmitSync = function(e) {
                    r = e
                };
                var u = function() {
                    var e = l.shift();
                    e.command ? n[e.command].apply(n, e.args) : e.event && o._signal(e.event, e.data)
                };
                return o.postMessage = function(e) {
                    h.onMessage({
                        data: e
                    })
                }, o.callback = function(e, t) {
                    this.postMessage({
                        type: "call",
                        id: t,
                        data: e
                    })
                }, o.emit = function(e, t) {
                    this.postMessage({
                        type: "event",
                        name: e,
                        data: t
                    })
                }, a.loadModule(["worker", t], (function(e) {
                    for (n = new e[i](o); l.length;) u()
                })), h
            }, t.WorkerClient = c, t.createWorker = n
        })), ace.define("ace/placeholder", [], (function(e, t, i) {
            "use strict";
            var n = e("./range").Range,
                r = e("./lib/event_emitter").EventEmitter,
                o = e("./lib/oop"),
                s = function(e, t, i, n, r, o) {
                    var s = this;
                    this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = r, this.othersClass = o, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = n, this.$onCursorChange = function() {
                        setTimeout((function() {
                            s.onCursorChange()
                        }))
                    }, this.$pos = i;
                    var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {
                        length: -1
                    };
                    this.$undoStackDepth = a.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
                };
            (function() {
                o.implement(this, r), this.setup = function() {
                    var e = this,
                        t = this.doc,
                        i = this.session;
                    this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = t.createAnchor(this.$pos.row, this.$pos.column);
                    var r = this.pos;
                    r.$insertRight = !0, r.detach(), r.markerId = i.addMarker(new n(r.row, r.column, r.row, r.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach((function(i) {
                        var n = t.createAnchor(i.row, i.column);
                        n.$insertRight = !0, n.detach(), e.others.push(n)
                    })), i.setUndoSelect(!1)
                }, this.showOtherMarkers = function() {
                    if (!this.othersActive) {
                        var e = this.session,
                            t = this;
                        this.othersActive = !0, this.others.forEach((function(i) {
                            i.markerId = e.addMarker(new n(i.row, i.column, i.row, i.column + t.length), t.othersClass, null, !1)
                        }))
                    }
                }, this.hideOtherMarkers = function() {
                    if (this.othersActive) {
                        this.othersActive = !1;
                        for (var e = 0; e < this.others.length; e++) this.session.removeMarker(this.others[e].markerId)
                    }
                }, this.onUpdate = function(e) {
                    if (this.$updating) return this.updateAnchors(e);
                    var t = e;
                    if (t.start.row === t.end.row && t.start.row === this.pos.row) {
                        this.$updating = !0;
                        var i = "insert" === e.action ? t.end.column - t.start.column : t.start.column - t.end.column,
                            r = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1,
                            o = t.start.column - this.pos.column;
                        if (this.updateAnchors(e), r && (this.length += i), r && !this.session.$fromUndo)
                            if ("insert" === e.action)
                                for (var s = this.others.length - 1; s >= 0; s--) {
                                    var a = {
                                        row: (c = this.others[s]).row,
                                        column: c.column + o
                                    };
                                    this.doc.insertMergedLines(a, e.lines)
                                } else if ("remove" === e.action)
                                    for (s = this.others.length - 1; s >= 0; s--) {
                                        var c;
                                        a = {
                                            row: (c = this.others[s]).row,
                                            column: c.column + o
                                        };
                                        this.doc.remove(new n(a.row, a.column, a.row, a.column - i))
                                    }
                        this.$updating = !1, this.updateMarkers()
                    }
                }, this.updateAnchors = function(e) {
                    this.pos.onChange(e);
                    for (var t = this.others.length; t--;) this.others[t].onChange(e);
                    this.updateMarkers()
                }, this.updateMarkers = function() {
                    if (!this.$updating) {
                        var e = this,
                            t = this.session,
                            i = function(i, r) {
                                t.removeMarker(i.markerId), i.markerId = t.addMarker(new n(i.row, i.column, i.row, i.column + e.length), r, null, !1)
                            };
                        i(this.pos, this.mainClass);
                        for (var r = this.others.length; r--;) i(this.others[r], this.othersClass)
                    }
                }, this.onCursorChange = function(e) {
                    if (!this.$updating && this.session) {
                        var t = this.session.selection.getCursor();
                        t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
                    }
                }, this.detach = function() {
                    this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null
                }, this.cancel = function() {
                    if (-1 !== this.$undoStackDepth) {
                        for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, i = 0; i < t; i++) e.undo(this.session, !0);
                        this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
                    }
                }
            }).call(s.prototype), t.PlaceHolder = s
        })), ace.define("ace/mouse/multi_select_handler", [], (function(e, t, i) {
            function n(e, t) {
                return e.row == t.row && e.column == t.column
            }
            var r = e("../lib/event"),
                o = e("../lib/useragent");
            t.onMouseDown = function(e) {
                var t = e.domEvent,
                    i = t.altKey,
                    s = t.shiftKey,
                    a = t.ctrlKey,
                    c = e.getAccelKey(),
                    l = e.getButton();
                if (a && o.isMac && (l = t.button), e.editor.inMultiSelectMode && 2 == l) e.editor.textInput.onContextMenu(e.domEvent);
                else if (a || i || c) {
                    if (0 === l) {
                        var h, u = e.editor,
                            d = u.selection,
                            g = u.inMultiSelectMode,
                            f = e.getDocumentPosition(),
                            p = d.getCursor(),
                            m = e.inSelection() || d.isEmpty() && n(f, p),
                            v = e.x,
                            w = e.y,
                            b = u.session,
                            y = u.renderer.pixelToScreenCoordinates(v, w),
                            C = y;
                        if (u.$mouseHandler.$enableJumpToDef) a && i || c && i ? h = s ? "block" : "add" : i && u.$blockSelectEnabled && (h = "block");
                        else if (c && !i) {
                            if (h = "add", !g && s) return
                        } else i && u.$blockSelectEnabled && (h = "block");
                        if (h && o.isMac && t.ctrlKey && u.$mouseHandler.cancelContextMenu(), "add" == h) {
                            if (!g && m) return;
                            if (!g) {
                                var S = d.toOrientedRange();
                                u.addSelectionMarker(S)
                            }
                            var k = d.rangeList.rangeAtPoint(f);
                            u.inVirtualSelectionMode = !0, s && (k = null, S = d.ranges[0] || S, u.removeSelectionMarker(S)), u.once("mouseup", (function() {
                                var e = d.toOrientedRange();
                                k && e.isEmpty() && n(k.cursor, e.cursor) ? d.substractPoint(e.cursor) : (s ? d.substractPoint(S.cursor) : S && (u.removeSelectionMarker(S), d.addRange(S)), d.addRange(e)), u.inVirtualSelectionMode = !1
                            }))
                        } else if ("block" == h) {
                            e.stop(), u.inVirtualSelectionMode = !0;
                            var x, $ = [],
                                A = function() {
                                    var e = u.renderer.pixelToScreenCoordinates(v, w),
                                        t = b.screenToDocumentPosition(e.row, e.column, e.offsetX);
                                    n(C, e) && n(t, d.lead) || (C = e, u.selection.moveToPosition(t), u.renderer.scrollCursorIntoView(), u.removeSelectionMarkers($), $ = d.rectangularRangeBlock(C, y), u.$mouseHandler.$clickSelection && 1 == $.length && $[0].isEmpty() && ($[0] = u.$mouseHandler.$clickSelection.clone()), $.forEach(u.addSelectionMarker, u), u.updateSelectionMarkers())
                                };
                            g && !c ? d.toSingleRange() : !g && c && (x = d.toOrientedRange(), u.addSelectionMarker(x)), s ? y = b.documentToScreenPosition(d.lead) : d.moveToPosition(f), C = {
                                row: -1,
                                column: -1
                            };
                            var E = A;
                            r.capture(u.container, (function(e) {
                                v = e.clientX, w = e.clientY
                            }), (function(e) {
                                A(), clearInterval(L), u.removeSelectionMarkers($), $.length || ($ = [d.toOrientedRange()]), x && (u.removeSelectionMarker(x), d.toSingleRange(x));
                                for (var t = 0; t < $.length; t++) d.addRange($[t]);
                                u.inVirtualSelectionMode = !1, u.$mouseHandler.$clickSelection = null
                            }));
                            var L = setInterval((function() {
                                E()
                            }), 20);
                            return e.preventDefault()
                        }
                    }
                } else 0 === l && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode()
            }
        })), ace.define("ace/commands/multi_select_commands", [], (function(e, t, i) {
            t.defaultCommands = [{
                name: "addCursorAbove",
                description: "Add cursor above",
                exec: function(e) {
                    e.selectMoreLines(-1)
                },
                bindKey: {
                    win: "Ctrl-Alt-Up",
                    mac: "Ctrl-Alt-Up"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "addCursorBelow",
                description: "Add cursor below",
                exec: function(e) {
                    e.selectMoreLines(1)
                },
                bindKey: {
                    win: "Ctrl-Alt-Down",
                    mac: "Ctrl-Alt-Down"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "addCursorAboveSkipCurrent",
                description: "Add cursor above (skip current)",
                exec: function(e) {
                    e.selectMoreLines(-1, !0)
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Up",
                    mac: "Ctrl-Alt-Shift-Up"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "addCursorBelowSkipCurrent",
                description: "Add cursor below (skip current)",
                exec: function(e) {
                    e.selectMoreLines(1, !0)
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Down",
                    mac: "Ctrl-Alt-Shift-Down"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectMoreBefore",
                description: "Select more before",
                exec: function(e) {
                    e.selectMore(-1)
                },
                bindKey: {
                    win: "Ctrl-Alt-Left",
                    mac: "Ctrl-Alt-Left"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectMoreAfter",
                description: "Select more after",
                exec: function(e) {
                    e.selectMore(1)
                },
                bindKey: {
                    win: "Ctrl-Alt-Right",
                    mac: "Ctrl-Alt-Right"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectNextBefore",
                description: "Select next before",
                exec: function(e) {
                    e.selectMore(-1, !0)
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Left",
                    mac: "Ctrl-Alt-Shift-Left"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "selectNextAfter",
                description: "Select next after",
                exec: function(e) {
                    e.selectMore(1, !0)
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Right",
                    mac: "Ctrl-Alt-Shift-Right"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }, {
                name: "toggleSplitSelectionIntoLines",
                description: "Split into lines",
                exec: function(e) {
                    e.multiSelect.rangeCount > 1 ? e.multiSelect.joinSelections() : e.multiSelect.splitIntoLines()
                },
                bindKey: {
                    win: "Ctrl-Alt-L",
                    mac: "Ctrl-Alt-L"
                },
                readOnly: !0
            }, {
                name: "splitSelectionIntoLines",
                description: "Split into lines",
                exec: function(e) {
                    e.multiSelect.splitIntoLines()
                },
                readOnly: !0
            }, {
                name: "alignCursors",
                description: "Align cursors",
                exec: function(e) {
                    e.alignCursors()
                },
                bindKey: {
                    win: "Ctrl-Alt-A",
                    mac: "Ctrl-Alt-A"
                },
                scrollIntoView: "cursor"
            }, {
                name: "findAll",
                description: "Find all",
                exec: function(e) {
                    e.findAll()
                },
                bindKey: {
                    win: "Ctrl-Alt-K",
                    mac: "Ctrl-Alt-G"
                },
                scrollIntoView: "cursor",
                readOnly: !0
            }], t.multiSelectCommands = [{
                name: "singleSelection",
                description: "Single selection",
                bindKey: "esc",
                exec: function(e) {
                    e.exitMultiSelectMode()
                },
                scrollIntoView: "cursor",
                readOnly: !0,
                isAvailable: function(e) {
                    return e && e.inMultiSelectMode
                }
            }];
            var n = e("../keyboard/hash_handler").HashHandler;
            t.keyboardHandler = new n(t.multiSelectCommands)
        })), ace.define("ace/multi_select", [], (function(e, t, i) {
            function n(e, t) {
                return e.row == t.row && e.column == t.column
            }

            function r(e) {
                e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", c), e.commands.addCommands(u.defaultCommands), function(e) {
                    function t(t) {
                        n && (e.renderer.setMouseCursor(""), n = !1)
                    }
                    if (!e.textInput) return;
                    var i = e.textInput.getElement(),
                        n = !1;
                    l.addListener(i, "keydown", (function(i) {
                        var r = 18 == i.keyCode && !(i.ctrlKey || i.shiftKey || i.metaKey);
                        e.$blockSelectEnabled && r ? n || (e.renderer.setMouseCursor("crosshair"), n = !0) : n && t()
                    })), l.addListener(i, "keyup", t), l.addListener(i, "blur", t)
                }(e))
            }
            var o = e("./range_list").RangeList,
                s = e("./range").Range,
                a = e("./selection").Selection,
                c = e("./mouse/multi_select_handler").onMouseDown,
                l = e("./lib/event"),
                h = e("./lib/lang"),
                u = e("./commands/multi_select_commands");
            t.commands = u.defaultCommands.concat(u.multiSelectCommands);
            var d = new(0, e("./search").Search),
                g = e("./edit_session").EditSession;
            (function() {
                this.getSelectionMarkers = function() {
                    return this.$selectionMarkers
                }
            }).call(g.prototype),
                function() {
                    this.ranges = null, this.rangeList = null, this.addRange = function(e, t) {
                        if (e) {
                            if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                                var i = this.toOrientedRange();
                                if (this.rangeList.add(i), this.rangeList.add(e), 2 != this.rangeList.ranges.length) return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
                                this.rangeList.removeAll(), this.rangeList.add(i), this.$onAddRange(i)
                            }
                            e.cursor || (e.cursor = e.end);
                            var n = this.rangeList.add(e);
                            return this.$onAddRange(e), n.length && this.$onRemoveRange(n), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
                        }
                    }, this.toSingleRange = function(e) {
                        e = e || this.ranges[0];
                        var t = this.rangeList.removeAll();
                        t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
                    }, this.substractPoint = function(e) {
                        var t = this.rangeList.substractPoint(e);
                        if (t) return this.$onRemoveRange(t), t[0]
                    }, this.mergeOverlappingRanges = function() {
                        var e = this.rangeList.merge();
                        e.length && this.$onRemoveRange(e)
                    }, this.$onAddRange = function(e) {
                        this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", {
                            range: e
                        })
                    }, this.$onRemoveRange = function(e) {
                        if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
                            var t = this.rangeList.ranges.pop();
                            e.push(t), this.rangeCount = 0
                        }
                        for (var i = e.length; i--;) {
                            var n = this.ranges.indexOf(e[i]);
                            this.ranges.splice(n, 1)
                        }
                        this._signal("removeRange", {
                            ranges: e
                        }), 0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), (t = t || this.ranges[0]) && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
                    }, this.$initRangeList = function() {
                        this.rangeList || (this.rangeList = new o, this.ranges = [], this.rangeCount = 0)
                    }, this.getAllRanges = function() {
                        return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
                    }, this.splitIntoLines = function() {
                        for (var e = this.ranges.length ? this.ranges : [this.getRange()], t = [], i = 0; i < e.length; i++) {
                            var n = e[i],
                                r = n.start.row,
                                o = n.end.row;
                            if (r === o) t.push(n.clone());
                            else {
                                for (t.push(new s(r, n.start.column, r, this.session.getLine(r).length)); ++r < o;) t.push(this.getLineRange(r, !0));
                                t.push(new s(o, 0, o, n.end.column))
                            }
                            0 == i && !this.isBackwards() && (t = t.reverse())
                        }
                        this.toSingleRange();
                        for (i = t.length; i--;) this.addRange(t[i])
                    }, this.joinSelections = function() {
                        var e = this.rangeList.ranges,
                            t = e[e.length - 1],
                            i = s.fromPoints(e[0].start, t.end);
                        this.toSingleRange(), this.setSelectionRange(i, t.cursor == t.start)
                    }, this.toggleBlockSelection = function() {
                        if (this.rangeCount > 1) {
                            var e = this.rangeList.ranges,
                                t = e[e.length - 1],
                                i = s.fromPoints(e[0].start, t.end);
                            this.toSingleRange(), this.setSelectionRange(i, t.cursor == t.start)
                        } else {
                            var n = this.session.documentToScreenPosition(this.cursor),
                                r = this.session.documentToScreenPosition(this.anchor);
                            this.rectangularRangeBlock(n, r).forEach(this.addRange, this)
                        }
                    }, this.rectangularRangeBlock = function(e, t, i) {
                        var r = [],
                            o = e.column < t.column;
                        if (o) var a = e.column,
                            c = t.column,
                            l = e.offsetX,
                            h = t.offsetX;
                        else a = t.column, c = e.column, l = t.offsetX, h = e.offsetX;
                        var u, d = e.row < t.row;
                        if (d) var g = e.row,
                            f = t.row;
                        else g = t.row, f = e.row;
                        a < 0 && (a = 0), g < 0 && (g = 0), g == f && (i = !0);
                        for (var p = g; p <= f; p++) {
                            var m = s.fromPoints(this.session.screenToDocumentPosition(p, a, l), this.session.screenToDocumentPosition(p, c, h));
                            if (m.isEmpty()) {
                                if (u && n(m.end, u)) break;
                                u = m.end
                            }
                            m.cursor = o ? m.start : m.end, r.push(m)
                        }
                        if (d && r.reverse(), !i) {
                            for (var v = r.length - 1; r[v].isEmpty() && v > 0;) v--;
                            if (v > 0)
                                for (var w = 0; r[w].isEmpty();) w++;
                            for (var b = v; b >= w; b--) r[b].isEmpty() && r.splice(b, 1)
                        }
                        return r
                    }
                }.call(a.prototype);
            var f = e("./editor").Editor;
            (function() {
                this.updateSelectionMarkers = function() {
                    this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                }, this.addSelectionMarker = function(e) {
                    e.cursor || (e.cursor = e.end);
                    var t = this.getSelectionStyle();
                    return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
                }, this.removeSelectionMarker = function(e) {
                    if (e.marker) {
                        this.session.removeMarker(e.marker);
                        var t = this.session.$selectionMarkers.indexOf(e); - 1 != t && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
                    }
                }, this.removeSelectionMarkers = function(e) {
                    for (var t = this.session.$selectionMarkers, i = e.length; i--;) {
                        var n = e[i];
                        if (n.marker) {
                            this.session.removeMarker(n.marker);
                            var r = t.indexOf(n); - 1 != r && t.splice(r, 1)
                        }
                    }
                    this.session.selectionMarkerCount = t.length
                }, this.$onAddRange = function(e) {
                    this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                }, this.$onRemoveRange = function(e) {
                    this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                }, this.$onMultiSelect = function(e) {
                    this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(u.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
                }, this.$onSingleSelect = function(e) {
                    this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(u.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"))
                }, this.$onMultiSelectExec = function(e) {
                    var t = e.command,
                        i = e.editor;
                    if (i.multiSelect) {
                        if (t.multiSelectAction) "forEach" == t.multiSelectAction ? n = i.forEachSelection(t, e.args) : "forEachLine" == t.multiSelectAction ? n = i.forEachSelection(t, e.args, !0) : "single" == t.multiSelectAction ? (i.exitMultiSelectMode(), n = t.exec(i, e.args || {})) : n = t.multiSelectAction(i, e.args || {});
                        else {
                            var n = t.exec(i, e.args || {});
                            i.multiSelect.addRange(i.multiSelect.toOrientedRange()), i.multiSelect.mergeOverlappingRanges()
                        }
                        return n
                    }
                }, this.forEachSelection = function(e, t, i) {
                    if (!this.inVirtualSelectionMode) {
                        var n, r = i && i.keepOrder,
                            o = 1 == i || i && i.$byLines,
                            s = this.session,
                            c = this.selection,
                            l = c.rangeList,
                            h = (r ? c : l).ranges;
                        if (!h.length) return e.exec ? e.exec(this, t || {}) : e(this, t || {});
                        var u = c._eventRegistry;
                        c._eventRegistry = {};
                        var d = new a(s);
                        this.inVirtualSelectionMode = !0;
                        for (var g = h.length; g--;) {
                            if (o)
                                for (; g > 0 && h[g].start.row == h[g - 1].end.row;) g--;
                            d.fromOrientedRange(h[g]), d.index = g, this.selection = s.selection = d;
                            var f = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                            !n && void 0 !== f && (n = f), d.toOrientedRange(h[g])
                        }
                        d.detach(), this.selection = s.selection = c, this.inVirtualSelectionMode = !1, c._eventRegistry = u, c.mergeOverlappingRanges(), c.ranges[0] && c.fromOrientedRange(c.ranges[0]);
                        var p = this.renderer.$scrollAnimation;
                        return this.onCursorChange(), this.onSelectionChange(), p && p.from == p.to && this.renderer.animateScrolling(p.from), n
                    }
                }, this.exitMultiSelectMode = function() {
                    this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
                }, this.getSelectedText = function() {
                    var e = "";
                    if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                        for (var t = this.multiSelect.rangeList.ranges, i = [], n = 0; n < t.length; n++) i.push(this.session.getTextRange(t[n]));
                        var r = this.session.getDocument().getNewLineCharacter();
                        (e = i.join(r)).length == (i.length - 1) * r.length && (e = "")
                    } else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
                    return e
                }, this.$checkMultiselectChange = function(e, t) {
                    if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                        var i = this.multiSelect.ranges[0];
                        if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) return;
                        var n = t == this.multiSelect.anchor ? i.cursor == i.start ? i.end : i.start : i.cursor;
                        n.row != t.row || this.session.$clipPositionToDocument(n.row, n.column).column != t.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges()
                    }
                }, this.findAll = function(e, t, i) {
                    if ((t = t || {}).needle = e || t.needle, null == t.needle) {
                        var n = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                        t.needle = this.session.getTextRange(n)
                    }
                    this.$search.set(t);
                    var r = this.$search.findAll(this.session);
                    if (!r.length) return 0;
                    var o = this.multiSelect;
                    i || o.toSingleRange(r[0]);
                    for (var s = r.length; s--;) o.addRange(r[s], !0);
                    return n && o.rangeList.rangeAtPoint(n.start) && o.addRange(n, !0), r.length
                }, this.selectMoreLines = function(e, t) {
                    var i = this.selection.toOrientedRange(),
                        n = i.cursor == i.end,
                        r = this.session.documentToScreenPosition(i.cursor);
                    this.selection.$desiredColumn && (r.column = this.selection.$desiredColumn);
                    var o, a = this.session.screenToDocumentPosition(r.row + e, r.column);
                    if (i.isEmpty()) l = a;
                    else var c = this.session.documentToScreenPosition(n ? i.end : i.start),
                        l = this.session.screenToDocumentPosition(c.row + e, c.column);
                    n ? (o = s.fromPoints(a, l)).cursor = o.start : (o = s.fromPoints(l, a)).cursor = o.end;
                    if (o.desiredColumn = r.column, this.selection.inMultiSelectMode) {
                        if (t) var h = i.cursor
                    } else this.selection.addRange(i);
                    this.selection.addRange(o), h && this.selection.substractPoint(h)
                }, this.transposeSelections = function(e) {
                    for (var t = this.session, i = t.multiSelect, n = i.ranges, r = n.length; r--;) {
                        if ((a = n[r]).isEmpty()) {
                            var o = t.getWordRange(a.start.row, a.start.column);
                            a.start.row = o.start.row, a.start.column = o.start.column, a.end.row = o.end.row, a.end.column = o.end.column
                        }
                    }
                    i.mergeOverlappingRanges();
                    var s = [];
                    for (r = n.length; r--;) {
                        var a = n[r];
                        s.unshift(t.getTextRange(a))
                    }
                    e < 0 ? s.unshift(s.pop()) : s.push(s.shift());
                    for (r = n.length; r--;) {
                        o = (a = n[r]).clone();
                        t.replace(a, s[r]), a.start.row = o.start.row, a.start.column = o.start.column
                    }
                    i.fromOrientedRange(i.ranges[0])
                }, this.selectMore = function(e, t, i) {
                    var n = this.session,
                        r = n.multiSelect.toOrientedRange();
                    if (!r.isEmpty() || ((r = n.getWordRange(r.start.row, r.start.column)).cursor = -1 == e ? r.start : r.end, this.multiSelect.addRange(r), !i)) {
                        var o = n.getTextRange(r),
                            s = function(e, t, i) {
                                return d.$options.wrap = !0, d.$options.needle = t, d.$options.backwards = -1 == i, d.find(e)
                            }(n, o, e);
                        s && (s.cursor = -1 == e ? s.start : s.end, this.session.unfold(s), this.multiSelect.addRange(s), this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(r.cursor)
                    }
                }, this.alignCursors = function() {
                    var e = this.session,
                        t = e.multiSelect,
                        i = t.ranges,
                        n = -1,
                        r = i.filter((function(e) {
                            if (e.cursor.row == n) return !0;
                            n = e.cursor.row
                        }));
                    if (i.length && r.length != i.length - 1) {
                        r.forEach((function(e) {
                            t.substractPoint(e.cursor)
                        }));
                        var o = 0,
                            a = 1 / 0,
                            c = i.map((function(t) {
                                var i = t.cursor,
                                    n = e.getLine(i.row).substr(i.column).search(/\S/g);
                                return -1 == n && (n = 0), i.column > o && (o = i.column), n < a && (a = n), n
                            }));
                        i.forEach((function(t, i) {
                            var n = t.cursor,
                                r = o - n.column,
                                l = c[i] - a;
                            r > l ? e.insert(n, h.stringRepeat(" ", r - l)) : e.remove(new s(n.row, n.column, n.row, n.column - r + l)), t.start.column = t.end.column = o, t.start.row = t.end.row = n.row, t.cursor = t.end
                        })), t.fromOrientedRange(i[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                    } else {
                        var l = this.selection.getRange(),
                            u = l.start.row,
                            d = l.end.row,
                            g = u == d;
                        if (g) {
                            var f, p = this.session.getLength();
                            do {
                                f = this.session.getLine(d)
                            } while (/[=:]/.test(f) && ++d < p);
                            do {
                                f = this.session.getLine(u)
                            } while (/[=:]/.test(f) && --u > 0);
                            u < 0 && (u = 0), d >= p && (d = p - 1)
                        }
                        var m = this.session.removeFullLines(u, d);
                        m = this.$reAlignText(m, g), this.session.insert({
                            row: u,
                            column: 0
                        }, m.join("\n") + "\n"), g || (l.start.column = 0, l.end.column = m[m.length - 1].length), this.selection.setRange(l)
                    }
                }, this.$reAlignText = function(e, t) {
                    function i(e) {
                        return h.stringRepeat(" ", e)
                    }

                    function n(e) {
                        return e[2] ? i(r) + e[2] + i(o - e[2].length + s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                    }
                    var r, o, s, a = !0,
                        c = !0;
                    return e.map((function(e) {
                        var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                        return t ? null == r ? (r = t[1].length, o = t[2].length, s = t[3].length, t) : (r + o + s != t[1].length + t[2].length + t[3].length && (c = !1), r != t[1].length && (a = !1), r > t[1].length && (r = t[1].length), o < t[2].length && (o = t[2].length), s > t[3].length && (s = t[3].length), t) : [e]
                    })).map(t ? n : a ? c ? function(e) {
                        return e[2] ? i(r + o - e[2].length) + e[2] + i(s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                    } : n : function(e) {
                        return e[2] ? i(r) + e[2] + i(s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                    })
                }
            }).call(f.prototype), t.onSessionChange = function(e) {
                var t = e.session;
                t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;
                var i = e.oldSession;
                i && (i.multiSelect.off("addRange", this.$onAddRange), i.multiSelect.off("removeRange", this.$onRemoveRange), i.multiSelect.off("multiSelect", this.$onMultiSelect), i.multiSelect.off("singleSelect", this.$onSingleSelect), i.multiSelect.lead.off("change", this.$checkMultiselectChange), i.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
            }, t.MultiSelect = r, e("./config").defineOptions(f.prototype, "editor", {
                enableMultiselect: {
                    set: function(e) {
                        r(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", c)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", c))
                    },
                    value: !0
                },
                enableBlockSelect: {
                    set: function(e) {
                        this.$blockSelectEnabled = e
                    },
                    value: !0
                }
            })
        })), ace.define("ace/mode/folding/fold_mode", [], (function(e, t, i) {
            "use strict";
            var n = e("../../range").Range,
                r = t.FoldMode = function() {};
            (function() {
                this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(e, t, i) {
                    var n = e.getLine(i);
                    return this.foldingStartMarker.test(n) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(n) ? "end" : ""
                }, this.getFoldWidgetRange = function(e, t, i) {
                    return null
                }, this.indentationBlock = function(e, t, i) {
                    var r = /\S/,
                        o = e.getLine(t),
                        s = o.search(r);
                    if (-1 != s) {
                        for (var a = i || o.length, c = e.getLength(), l = t, h = t; ++t < c;) {
                            var u = e.getLine(t).search(r);
                            if (-1 != u) {
                                if (u <= s) {
                                    var d = e.getTokenAt(t, 0);
                                    if (!d || "string" !== d.type) break
                                }
                                h = t
                            }
                        }
                        if (h > l) {
                            var g = e.getLine(h).length;
                            return new n(l, a, h, g)
                        }
                    }
                }, this.openingBracketBlock = function(e, t, i, r, o) {
                    var s = {
                            row: i,
                            column: r + 1
                        },
                        a = e.$findClosingBracket(t, s, o);
                    if (a) {
                        var c = e.foldWidgets[a.row];
                        return null == c && (c = e.getFoldWidget(a.row)), "start" == c && a.row > s.row && (a.row--, a.column = e.getLine(a.row).length), n.fromPoints(s, a)
                    }
                }, this.closingBracketBlock = function(e, t, i, r, o) {
                    var s = {
                            row: i,
                            column: r
                        },
                        a = e.$findOpeningBracket(t, s);
                    if (a) return a.column++, s.column--, n.fromPoints(a, s)
                }
            }).call(r.prototype)
        })), ace.define("ace/theme/textmate", [], (function(e, t, i) {
            "use strict";
            t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', t.$id = "ace/theme/textmate", e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.define("ace/line_widgets", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor)
            }
            var r = e("./lib/dom");
            (function() {
                this.getRowLength = function(e) {
                    var t;
                    return t = this.lineWidgets && this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0, this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
                }, this.$getWidgetScreenLength = function() {
                    var e = 0;
                    return this.lineWidgets.forEach((function(t) {
                        t && t.rowCount && !t.hidden && (e += t.rowCount)
                    })), e
                }, this.$onChangeEditor = function(e) {
                    this.attach(e.editor)
                }, this.attach = function(e) {
                    e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach(), this.editor != e && (this.detach(), this.editor = e, e && (e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets)))
                }, this.detach = function(e) {
                    var t = this.editor;
                    if (t) {
                        this.editor = null, t.widgetManager = null, t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);
                        var i = this.session.lineWidgets;
                        i && i.forEach((function(e) {
                            e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el))
                        }))
                    }
                }, this.updateOnFold = function(e, t) {
                    var i = t.lineWidgets;
                    if (i && e.action) {
                        for (var n = e.data, r = n.start.row, o = n.end.row, s = "add" == e.action, a = r + 1; a < o; a++) i[a] && (i[a].hidden = s);
                        i[o] && (s ? i[r] ? i[o].hidden = s : i[r] = i[o] : (i[r] == i[o] && (i[r] = void 0), i[o].hidden = s))
                    }
                }, this.updateOnChange = function(e) {
                    var t = this.session.lineWidgets;
                    if (t) {
                        var i = e.start.row,
                            n = e.end.row - i;
                        if (0 !== n)
                            if ("remove" == e.action) {
                                var r = t.splice(i + 1, n);
                                !t[i] && r[r.length - 1] && (t[i] = r.pop()), r.forEach((function(e) {
                                    e && this.removeLineWidget(e)
                                }), this), this.$updateRows()
                            } else {
                                var o = new Array(n);
                                t[i] && null != t[i].column && e.start.column > t[i].column && i++, o.unshift(i, 0), t.splice.apply(t, o), this.$updateRows()
                            }
                    }
                }, this.$updateRows = function() {
                    var e = this.session.lineWidgets;
                    if (e) {
                        var t = !0;
                        e.forEach((function(e, i) {
                            if (e)
                                for (t = !1, e.row = i; e.$oldWidget;) e.$oldWidget.row = i, e = e.$oldWidget
                        })), t && (this.session.lineWidgets = null)
                    }
                }, this.$registerLineWidget = function(e) {
                    this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
                    var t = this.session.lineWidgets[e.row];
                    return t && (e.$oldWidget = t, t.el && t.el.parentNode && (t.el.parentNode.removeChild(t.el), t._inDocument = !1)), this.session.lineWidgets[e.row] = e, e
                }, this.addLineWidget = function(e) {
                    if (this.$registerLineWidget(e), e.session = this.session, !this.editor) return e;
                    var t = this.editor.renderer;
                    e.html && !e.el && (e.el = r.createElement("div"), e.el.innerHTML = e.html), e.el && (r.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = "absolute", e.el.style.zIndex = 5, t.container.appendChild(e.el), e._inDocument = !0, e.coverGutter || (e.el.style.zIndex = 3), null == e.pixelHeight && (e.pixelHeight = e.el.offsetHeight)), null == e.rowCount && (e.rowCount = e.pixelHeight / t.layerConfig.lineHeight);
                    var i = this.session.getFoldAt(e.row, 0);
                    if (e.$fold = i, i) {
                        var n = this.session.lineWidgets;
                        e.row != i.end.row || n[i.start.row] ? e.hidden = !0 : n[i.start.row] = e
                    }
                    return this.session._emit("changeFold", {
                        data: {
                            start: {
                                row: e.row
                            }
                        }
                    }), this.$updateRows(), this.renderWidgets(null, t), this.onWidgetChanged(e), e
                }, this.removeLineWidget = function(e) {
                    if (e._inDocument = !1, e.session = null, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el), e.editor && e.editor.destroy) try {
                        e.editor.destroy()
                    } catch (e) {}
                    if (this.session.lineWidgets) {
                        var t = this.session.lineWidgets[e.row];
                        if (t == e) this.session.lineWidgets[e.row] = e.$oldWidget, e.$oldWidget && this.onWidgetChanged(e.$oldWidget);
                        else
                            for (; t;) {
                                if (t.$oldWidget == e) {
                                    t.$oldWidget = e.$oldWidget;
                                    break
                                }
                                t = t.$oldWidget
                            }
                    }
                    this.session._emit("changeFold", {
                        data: {
                            start: {
                                row: e.row
                            }
                        }
                    }), this.$updateRows()
                }, this.getWidgetsAtRow = function(e) {
                    for (var t = this.session.lineWidgets, i = t && t[e], n = []; i;) n.push(i), i = i.$oldWidget;
                    return n
                }, this.onWidgetChanged = function(e) {
                    this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull()
                }, this.measureWidgets = function(e, t) {
                    var i = this.session._changedWidgets,
                        n = t.layerConfig;
                    if (i && i.length) {
                        for (var r = 1 / 0, o = 0; o < i.length; o++) {
                            var s = i[o];
                            if (s && s.el && s.session == this.session) {
                                if (!s._inDocument) {
                                    if (this.session.lineWidgets[s.row] != s) continue;
                                    s._inDocument = !0, t.container.appendChild(s.el)
                                }
                                s.h = s.el.offsetHeight, s.fixedWidth || (s.w = s.el.offsetWidth, s.screenWidth = Math.ceil(s.w / n.characterWidth));
                                var a = s.h / n.lineHeight;
                                s.coverLine && ((a -= this.session.getRowLineCount(s.row)) < 0 && (a = 0)), s.rowCount != a && (s.rowCount = a, s.row < r && (r = s.row))
                            }
                        }
                        r != 1 / 0 && (this.session._emit("changeFold", {
                            data: {
                                start: {
                                    row: r
                                }
                            }
                        }), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
                    }
                }, this.renderWidgets = function(e, t) {
                    var i = t.layerConfig,
                        n = this.session.lineWidgets;
                    if (n) {
                        for (var r = Math.min(this.firstRow, i.firstRow), o = Math.max(this.lastRow, i.lastRow, n.length); r > 0 && !n[r];) r--;
                        this.firstRow = i.firstRow, this.lastRow = i.lastRow, t.$cursorLayer.config = i;
                        for (var s = r; s <= o; s++) {
                            var a = n[s];
                            if (a && a.el)
                                if (a.hidden) a.el.style.top = -100 - (a.pixelHeight || 0) + "px";
                                else {
                                    a._inDocument || (a._inDocument = !0, t.container.appendChild(a.el));
                                    var c = t.$cursorLayer.getPixelPosition({
                                        row: s,
                                        column: 0
                                    }, !0).top;
                                    a.coverLine || (c += i.lineHeight * this.session.getRowLineCount(a.row)), a.el.style.top = c - i.offset + "px";
                                    var l = a.coverGutter ? 0 : t.gutterWidth;
                                    a.fixedWidth || (l -= t.scrollLeft), a.el.style.left = l + "px", a.fullWidth && a.screenWidth && (a.el.style.minWidth = i.width + 2 * i.padding + "px"), a.fixedWidth ? a.el.style.right = t.scrollBar.getWidth() + "px" : a.el.style.right = ""
                                }
                        }
                    }
                }
            }).call(n.prototype), t.LineWidgets = n
        })), ace.define("ace/ext/error_marker", [], (function(e, t, i) {
            "use strict";

            function n(e, t, i) {
                var n = e.getAnnotations().sort(s.comparePoints);
                if (n.length) {
                    var r = function(e, t, i) {
                        for (var n = 0, r = e.length - 1; n <= r;) {
                            var o = n + r >> 1,
                                s = i(t, e[o]);
                            if (s > 0) n = o + 1;
                            else {
                                if (!(s < 0)) return o;
                                r = o - 1
                            }
                        }
                        return -(n + 1)
                    }(n, {
                        row: t,
                        column: -1
                    }, s.comparePoints);
                    r < 0 && (r = -r - 1), r >= n.length ? r = i > 0 ? 0 : n.length - 1 : 0 === r && i < 0 && (r = n.length - 1);
                    var o = n[r];
                    if (o && i) {
                        if (o.row === t) {
                            do {
                                o = n[r += i]
                            } while (o && o.row === t);
                            if (!o) return n.slice()
                        }
                        var a = [];
                        t = o.row;
                        do {
                            a[i < 0 ? "unshift" : "push"](o), o = n[r += i]
                        } while (o && o.row == t);
                        return a.length && a
                    }
                }
            }
            var r = e("../line_widgets").LineWidgets,
                o = e("../lib/dom"),
                s = e("../range").Range;
            t.showErrorMarker = function(e, t) {
                var i = e.session;
                i.widgetManager || (i.widgetManager = new r(i), i.widgetManager.attach(e));
                var s = e.getCursorPosition(),
                    a = s.row,
                    c = i.widgetManager.getWidgetsAtRow(a).filter((function(e) {
                        return "errorMarker" == e.type
                    }))[0];
                c ? c.destroy() : a -= t;
                var l, h = n(i, a, t);
                if (h) {
                    var u = h[0];
                    s.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u.column) || 0, s.row = u.row, l = e.renderer.$gutterLayer.$annotations[s.row]
                } else {
                    if (c) return;
                    l = {
                        text: ["Looks good!"],
                        className: "ace_ok"
                    }
                }
                e.session.unfold(s.row), e.selection.moveToPosition(s);
                var d = {
                        row: s.row,
                        fixedWidth: !0,
                        coverGutter: !0,
                        el: o.createElement("div"),
                        type: "errorMarker"
                    },
                    g = d.el.appendChild(o.createElement("div")),
                    f = d.el.appendChild(o.createElement("div"));
                f.className = "error_widget_arrow " + l.className;
                var p = e.renderer.$cursorLayer.getPixelPosition(s).left;
                f.style.left = p + e.renderer.gutterWidth - 5 + "px", d.el.className = "error_widget_wrapper", g.className = "error_widget " + l.className, g.innerHTML = l.text.join("<br>"), g.appendChild(o.createElement("div"));
                var m = function(e, t, i) {
                    if (0 === t && ("esc" === i || "return" === i)) return d.destroy(), {
                        command: "null"
                    }
                };
                d.destroy = function() {
                    e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler(m), i.widgetManager.removeLineWidget(d), e.off("changeSelection", d.destroy), e.off("changeSession", d.destroy), e.off("mouseup", d.destroy), e.off("change", d.destroy))
                }, e.keyBinding.addKeyboardHandler(m), e.on("changeSelection", d.destroy), e.on("changeSession", d.destroy), e.on("mouseup", d.destroy), e.on("change", d.destroy), e.session.widgetManager.addLineWidget(d), d.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, {
                    bottom: d.el.offsetHeight
                })
            }, o.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
        })), ace.define("ace/ace", [], (function(e, t, n) {
            "use strict";
            e("./lib/fixoldbrowsers");
            var r = e("./lib/dom"),
                o = e("./lib/event"),
                s = e("./range").Range,
                a = e("./editor").Editor,
                c = e("./edit_session").EditSession,
                l = e("./undomanager").UndoManager,
                h = e("./virtual_renderer").VirtualRenderer;
            e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.require = e, t.define = i(86), t.edit = function(e, i) {
                if ("string" == typeof e) {
                    var n = e;
                    if (!(e = document.getElementById(n))) throw new Error("ace.edit can't find div #" + n)
                }
                if (e && e.env && e.env.editor instanceof a) return e.env.editor;
                var s = "";
                if (e && /input|textarea/i.test(e.tagName)) {
                    var c = e;
                    s = c.value, e = r.createElement("pre"), c.parentNode.replaceChild(e, c)
                } else e && (s = e.textContent, e.innerHTML = "");
                var l = t.createEditSession(s),
                    u = new a(new h(e), l, i),
                    d = {
                        document: l,
                        editor: u,
                        onResize: u.resize.bind(u, null)
                    };
                return c && (d.textarea = c), o.addListener(window, "resize", d.onResize), u.on("destroy", (function() {
                    o.removeListener(window, "resize", d.onResize), d.editor.container.env = null
                })), u.container.env = u.env = d, u
            }, t.createEditSession = function(e, t) {
                var i = new c(e, t);
                return i.setUndoManager(new l), i
            }, t.Range = s, t.Editor = a, t.EditSession = c, t.UndoManager = l, t.VirtualRenderer = h, t.version = t.config.version
        })), ace.require(["ace/ace"], (function(t) {
            for (var i in t && (t.config.init(!0), t.define = ace.define), window.ace || (window.ace = t), t) t.hasOwnProperty(i) && (window.ace[i] = t[i]);
            window.ace.default = window.ace, e && (e.exports = window.ace)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    var n = i(2),
        r = i(17),
        o = "".split;
    e.exports = n((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(e) {
        return "String" == r(e) ? o.call(e, "") : Object(e)
    } : Object
}, function(e, t, i) {
    var n, r, o, s = i(91),
        a = i(3),
        c = i(7),
        l = i(11),
        h = i(5),
        u = i(26),
        d = i(28),
        g = a.WeakMap;
    if (s) {
        var f = new g,
            p = f.get,
            m = f.has,
            v = f.set;
        n = function(e, t) {
            return v.call(f, e, t), t
        }, r = function(e) {
            return p.call(f, e) || {}
        }, o = function(e) {
            return m.call(f, e)
        }
    } else {
        var w = u("state");
        d[w] = !0, n = function(e, t) {
            return l(e, w, t), t
        }, r = function(e) {
            return h(e, w) ? e[w] : {}
        }, o = function(e) {
            return h(e, w)
        }
    }
    e.exports = {
        set: n,
        get: r,
        has: o,
        enforce: function(e) {
            return o(e) ? r(e) : n(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var i;
                if (!c(t) || (i = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return i
            }
        }
    }
}, function(e, t, i) {
    var n = i(41),
        r = i(42),
        o = n("keys");
    e.exports = function(e) {
        return o[e] || (o[e] = r(e))
    }
}, function(e, t) {
    e.exports = !1
}, function(e, t) {
    e.exports = {}
}, function(e, t, i) {
    var n = i(62),
        r = i(3),
        o = function(e) {
            return "function" == typeof e ? e : void 0
        };
    e.exports = function(e, t) {
        return arguments.length < 2 ? o(n[e]) || o(r[e]) : n[e] && n[e][t] || r[e] && r[e][t]
    }
}, function(e, t, i) {
    var n = i(63),
        r = i(45).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return n(e, r)
    }
}, function(e, t, i) {
    var n = i(17);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}, function(e, t, i) {
    var n, r = i(9),
        o = i(92),
        s = i(45),
        a = i(28),
        c = i(93),
        l = i(57),
        h = i(26),
        u = h("IE_PROTO"),
        d = function() {},
        g = function(e) {
            return "<script>" + e + "<\/script>"
        },
        f = function() {
            try {
                n = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            f = n ? function(e) {
                e.write(g("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(n) : ((t = l("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(g("document.F=Object")), e.close(), e.F);
            for (var i = s.length; i--;) delete f.prototype[s[i]];
            return f()
        };
    a[u] = !0, e.exports = Object.create || function(e, t) {
        var i;
        return null !== e ? (d.prototype = r(e), i = new d, d.prototype = null, i[u] = e) : i = f(), void 0 === t ? i : o(i, t)
    }
}, function(e, t, i) {
    "use strict";
    var n = i(20),
        r = i(8),
        o = i(19);
    e.exports = function(e, t, i) {
        var s = n(t);
        s in e ? r.f(e, s, o(0, i)) : e[s] = i
    }
}, function(e, t, i) {
    "use strict";
    var n = i(2);
    e.exports = function(e, t) {
        var i = [][e];
        return !!i && n((function() {
            i.call(null, t || function() {
                throw 1
            }, 1)
        }))
    }
}, function(e, t, i) {
    var n = i(2),
        r = i(0),
        o = i(79),
        s = r("species");
    e.exports = function(e) {
        return o >= 51 || !n((function() {
            var t = [];
            return (t.constructor = {})[s] = function() {
                return {
                    foo: 1
                }
            }, 1 !== t[e](Boolean).foo
        }))
    }
}, function(e, t, i) {
    "use strict";
    var n, r, o = i(81),
        s = i(109),
        a = RegExp.prototype.exec,
        c = String.prototype.replace,
        l = a,
        h = (n = /a/, r = /b*/g, a.call(n, "a"), a.call(r, "a"), 0 !== n.lastIndex || 0 !== r.lastIndex),
        u = s.UNSUPPORTED_Y || s.BROKEN_CARET,
        d = void 0 !== /()??/.exec("")[1];
    (h || d || u) && (l = function(e) {
        var t, i, n, r, s = this,
            l = u && s.sticky,
            g = o.call(s),
            f = s.source,
            p = 0,
            m = e;
        return l && (-1 === (g = g.replace("y", "")).indexOf("g") && (g += "g"), m = String(e).slice(s.lastIndex), s.lastIndex > 0 && (!s.multiline || s.multiline && "\n" !== e[s.lastIndex - 1]) && (f = "(?: " + f + ")", m = " " + m, p++), i = new RegExp("^(?:" + f + ")", g)), d && (i = new RegExp("^" + f + "$(?!\\s)", g)), h && (t = s.lastIndex), n = a.call(l ? i : s, m), l ? n ? (n.input = n.input.slice(p), n[0] = n[0].slice(p), n.index = s.lastIndex, s.lastIndex += n[0].length) : s.lastIndex = 0 : h && n && (s.lastIndex = s.global ? n.index + n[0].length : t), d && n && n.length > 1 && c.call(n[0], i, (function() {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (n[r] = void 0)
        })), n
    }), e.exports = l
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(87);
    n({
        target: "Array",
        proto: !0,
        forced: [].forEach != r
    }, {
        forEach: r
    })
}, function(e, t, i) {
    var n = i(3),
        r = i(85),
        o = i(87),
        s = i(11);
    for (var a in r) {
        var c = n[a],
            l = c && c.prototype;
        if (l && l.forEach !== o) try {
            s(l, "forEach", o)
        } catch (e) {
            l.forEach = o
        }
    }
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(3),
        o = i(29),
        s = i(27),
        a = i(6),
        c = i(46),
        l = i(67),
        h = i(2),
        u = i(5),
        d = i(31),
        g = i(7),
        f = i(9),
        p = i(15),
        m = i(10),
        v = i(20),
        w = i(19),
        b = i(32),
        y = i(47),
        C = i(30),
        S = i(94),
        k = i(65),
        x = i(16),
        $ = i(8),
        A = i(55),
        E = i(11),
        L = i(13),
        R = i(41),
        _ = i(26),
        T = i(28),
        M = i(42),
        O = i(0),
        F = i(68),
        I = i(69),
        W = i(48),
        B = i(25),
        N = i(21).forEach,
        D = _("hidden"),
        P = O("toPrimitive"),
        H = B.set,
        z = B.getterFor("Symbol"),
        U = Object.prototype,
        K = r.Symbol,
        V = o("JSON", "stringify"),
        G = x.f,
        j = $.f,
        J = S.f,
        Y = A.f,
        Q = R("symbols"),
        q = R("op-symbols"),
        Z = R("string-to-symbol-registry"),
        X = R("symbol-to-string-registry"),
        ee = R("wks"),
        te = r.QObject,
        ie = !te || !te.prototype || !te.prototype.findChild,
        ne = a && h((function() {
            return 7 != b(j({}, "a", {
                get: function() {
                    return j(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(e, t, i) {
            var n = G(U, t);
            n && delete U[t], j(e, t, i), n && e !== U && j(U, t, n)
        } : j,
        re = function(e, t) {
            var i = Q[e] = b(K.prototype);
            return H(i, {
                type: "Symbol",
                tag: e,
                description: t
            }), a || (i.description = t), i
        },
        oe = l ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof K
        },
        se = function(e, t, i) {
            e === U && se(q, t, i), f(e);
            var n = v(t, !0);
            return f(i), u(Q, n) ? (i.enumerable ? (u(e, D) && e[D][n] && (e[D][n] = !1), i = b(i, {
                enumerable: w(0, !1)
            })) : (u(e, D) || j(e, D, w(1, {})), e[D][n] = !0), ne(e, n, i)) : j(e, n, i)
        },
        ae = function(e, t) {
            f(e);
            var i = m(t),
                n = y(i).concat(ue(i));
            return N(n, (function(t) {
                a && !ce.call(i, t) || se(e, t, i[t])
            })), e
        },
        ce = function(e) {
            var t = v(e, !0),
                i = Y.call(this, t);
            return !(this === U && u(Q, t) && !u(q, t)) && (!(i || !u(this, t) || !u(Q, t) || u(this, D) && this[D][t]) || i)
        },
        le = function(e, t) {
            var i = m(e),
                n = v(t, !0);
            if (i !== U || !u(Q, n) || u(q, n)) {
                var r = G(i, n);
                return !r || !u(Q, n) || u(i, D) && i[D][n] || (r.enumerable = !0), r
            }
        },
        he = function(e) {
            var t = J(m(e)),
                i = [];
            return N(t, (function(e) {
                u(Q, e) || u(T, e) || i.push(e)
            })), i
        },
        ue = function(e) {
            var t = e === U,
                i = J(t ? q : m(e)),
                n = [];
            return N(i, (function(e) {
                !u(Q, e) || t && !u(U, e) || n.push(Q[e])
            })), n
        };
    (c || (L((K = function() {
        if (this instanceof K) throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = M(e),
            i = function(e) {
                this === U && i.call(q, e), u(this, D) && u(this[D], t) && (this[D][t] = !1), ne(this, t, w(1, e))
            };
        return a && ie && ne(U, t, {
            configurable: !0,
            set: i
        }), re(t, e)
    }).prototype, "toString", (function() {
        return z(this).tag
    })), L(K, "withoutSetter", (function(e) {
        return re(M(e), e)
    })), A.f = ce, $.f = se, x.f = le, C.f = S.f = he, k.f = ue, F.f = function(e) {
        return re(O(e), e)
    }, a && (j(K.prototype, "description", {
        configurable: !0,
        get: function() {
            return z(this).description
        }
    }), s || L(U, "propertyIsEnumerable", ce, {
        unsafe: !0
    }))), n({
        global: !0,
        wrap: !0,
        forced: !c,
        sham: !c
    }, {
        Symbol: K
    }), N(y(ee), (function(e) {
        I(e)
    })), n({
        target: "Symbol",
        stat: !0,
        forced: !c
    }, {
        for: function(e) {
            var t = String(e);
            if (u(Z, t)) return Z[t];
            var i = K(t);
            return Z[t] = i, X[i] = t, i
        },
        keyFor: function(e) {
            if (!oe(e)) throw TypeError(e + " is not a symbol");
            if (u(X, e)) return X[e]
        },
        useSetter: function() {
            ie = !0
        },
        useSimple: function() {
            ie = !1
        }
    }), n({
        target: "Object",
        stat: !0,
        forced: !c,
        sham: !a
    }, {
        create: function(e, t) {
            return void 0 === t ? b(e) : ae(b(e), t)
        },
        defineProperty: se,
        defineProperties: ae,
        getOwnPropertyDescriptor: le
    }), n({
        target: "Object",
        stat: !0,
        forced: !c
    }, {
        getOwnPropertyNames: he,
        getOwnPropertySymbols: ue
    }), n({
        target: "Object",
        stat: !0,
        forced: h((function() {
            k.f(1)
        }))
    }, {
        getOwnPropertySymbols: function(e) {
            return k.f(p(e))
        }
    }), V) && n({
        target: "JSON",
        stat: !0,
        forced: !c || h((function() {
            var e = K();
            return "[null]" != V([e]) || "{}" != V({
                a: e
            }) || "{}" != V(Object(e))
        }))
    }, {
        stringify: function(e, t, i) {
            for (var n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = t, (g(t) || void 0 !== e) && !oe(e)) return d(t) || (t = function(e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !oe(t)) return t
            }), r[1] = t, V.apply(null, r)
        }
    });
    K.prototype[P] || E(K.prototype, P, K.prototype.valueOf), W(K, "Symbol"), T[D] = !0
}, function(e, t, i) {
    var n = i(3),
        r = i(11);
    e.exports = function(e, t) {
        try {
            r(n, e, t)
        } catch (i) {
            n[e] = t
        }
        return t
    }
}, function(e, t, i) {
    var n = i(27),
        r = i(59);
    (e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.6.5",
        mode: n ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    var i = 0,
        n = Math.random();
    e.exports = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++i + n).toString(36)
    }
}, function(e, t, i) {
    var n = i(10),
        r = i(14),
        o = i(64),
        s = function(e) {
            return function(t, i, s) {
                var a, c = n(t),
                    l = r(c.length),
                    h = o(s, l);
                if (e && i != i) {
                    for (; l > h;)
                        if ((a = c[h++]) != a) return !0
                } else
                    for (; l > h; h++)
                        if ((e || h in c) && c[h] === i) return e || h || 0;
                return !e && -1
            }
        };
    e.exports = {
        includes: s(!0),
        indexOf: s(!1)
    }
}, function(e, t) {
    var i = Math.ceil,
        n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : i)(e)
    }
}, function(e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(e, t, i) {
    var n = i(2);
    e.exports = !!Object.getOwnPropertySymbols && !n((function() {
        return !String(Symbol())
    }))
}, function(e, t, i) {
    var n = i(63),
        r = i(45);
    e.exports = Object.keys || function(e) {
        return n(e, r)
    }
}, function(e, t, i) {
    var n = i(8).f,
        r = i(5),
        o = i(0)("toStringTag");
    e.exports = function(e, t, i) {
        e && !r(e = i ? e : e.prototype, o) && n(e, o, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }
}, function(e, t, i) {
    var n = {};
    n[i(0)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
}, function(e, t, i) {
    var n = i(0),
        r = i(32),
        o = i(8),
        s = n("unscopables"),
        a = Array.prototype;
    null == a[s] && o.f(a, s, {
        configurable: !0,
        value: r(null)
    }), e.exports = function(e) {
        a[s][e] = !0
    }
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(7),
        o = i(31),
        s = i(64),
        a = i(14),
        c = i(10),
        l = i(33),
        h = i(0),
        u = i(35),
        d = i(12),
        g = u("slice"),
        f = d("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        p = h("species"),
        m = [].slice,
        v = Math.max;
    n({
        target: "Array",
        proto: !0,
        forced: !g || !f
    }, {
        slice: function(e, t) {
            var i, n, h, u = c(this),
                d = a(u.length),
                g = s(e, d),
                f = s(void 0 === t ? d : t, d);
            if (o(u) && ("function" != typeof(i = u.constructor) || i !== Array && !o(i.prototype) ? r(i) && null === (i = i[p]) && (i = void 0) : i = void 0, i === Array || void 0 === i)) return m.call(u, g, f);
            for (n = new(void 0 === i ? Array : i)(v(f - g, 0)), h = 0; g < f; g++, h++) g in u && l(n, h, u[g]);
            return n.length = h, n
        }
    })
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(36);
    n({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== r
    }, {
        exec: r
    })
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(21).filter,
        o = i(35),
        s = i(12),
        a = o("filter"),
        c = s("filter");
    n({
        target: "Array",
        proto: !0,
        forced: !a || !c
    }, {
        filter: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, t, i) {
    "use strict";
    var n = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        o = r && !n.call({
            1: 2
        }, 1);
    t.f = o ? function(e) {
        var t = r(this, e);
        return !!t && t.enumerable
    } : n
}, function(e, t, i) {
    var n = i(6),
        r = i(2),
        o = i(57);
    e.exports = !n && !r((function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(e, t, i) {
    var n = i(3),
        r = i(7),
        o = n.document,
        s = r(o) && r(o.createElement);
    e.exports = function(e) {
        return s ? o.createElement(e) : {}
    }
}, function(e, t, i) {
    var n = i(59),
        r = Function.toString;
    "function" != typeof n.inspectSource && (n.inspectSource = function(e) {
        return r.call(e)
    }), e.exports = n.inspectSource
}, function(e, t, i) {
    var n = i(3),
        r = i(40),
        o = n["__core-js_shared__"] || r("__core-js_shared__", {});
    e.exports = o
}, function(e, t, i) {
    var n = i(5),
        r = i(61),
        o = i(16),
        s = i(8);
    e.exports = function(e, t) {
        for (var i = r(t), a = s.f, c = o.f, l = 0; l < i.length; l++) {
            var h = i[l];
            n(e, h) || a(e, h, c(t, h))
        }
    }
}, function(e, t, i) {
    var n = i(29),
        r = i(30),
        o = i(65),
        s = i(9);
    e.exports = n("Reflect", "ownKeys") || function(e) {
        var t = r.f(s(e)),
            i = o.f;
        return i ? t.concat(i(e)) : t
    }
}, function(e, t, i) {
    var n = i(3);
    e.exports = n
}, function(e, t, i) {
    var n = i(5),
        r = i(10),
        o = i(43).indexOf,
        s = i(28);
    e.exports = function(e, t) {
        var i, a = r(e),
            c = 0,
            l = [];
        for (i in a) !n(s, i) && n(a, i) && l.push(i);
        for (; t.length > c;) n(a, i = t[c++]) && (~o(l, i) || l.push(i));
        return l
    }
}, function(e, t, i) {
    var n = i(44),
        r = Math.max,
        o = Math.min;
    e.exports = function(e, t) {
        var i = n(e);
        return i < 0 ? r(i + t, 0) : o(i, t)
    }
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, i) {
    var n = i(2),
        r = /#|\.prototype\./,
        o = function(e, t) {
            var i = a[s(e)];
            return i == l || i != c && ("function" == typeof t ? n(t) : !!t)
        },
        s = o.normalize = function(e) {
            return String(e).replace(r, ".").toLowerCase()
        },
        a = o.data = {},
        c = o.NATIVE = "N",
        l = o.POLYFILL = "P";
    e.exports = o
}, function(e, t, i) {
    var n = i(46);
    e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(e, t, i) {
    var n = i(0);
    t.f = n
}, function(e, t, i) {
    var n = i(62),
        r = i(5),
        o = i(68),
        s = i(8).f;
    e.exports = function(e) {
        var t = n.Symbol || (n.Symbol = {});
        r(t, e) || s(t, e, {
            value: o.f(e)
        })
    }
}, function(e, t, i) {
    var n = i(49);
    e.exports = function(e, t, i) {
        if (n(e), void 0 === t) return e;
        switch (i) {
            case 0:
                return function() {
                    return e.call(t)
                };
            case 1:
                return function(i) {
                    return e.call(t, i)
                };
            case 2:
                return function(i, n) {
                    return e.call(t, i, n)
                };
            case 3:
                return function(i, n, r) {
                    return e.call(t, i, n, r)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, i) {
    var n = i(7),
        r = i(31),
        o = i(0)("species");
    e.exports = function(e, t) {
        var i;
        return r(e) && ("function" != typeof(i = e.constructor) || i !== Array && !r(i.prototype) ? n(i) && null === (i = i[o]) && (i = void 0) : i = void 0), new(void 0 === i ? Array : i)(0 === t ? 0 : t)
    }
}, function(e, t, i) {
    var n = i(50),
        r = i(17),
        o = i(0)("toStringTag"),
        s = "Arguments" == r(function() {
            return arguments
        }());
    e.exports = n ? r : function(e) {
        var t, i, n;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(i = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), o)) ? i : s ? r(t) : "Object" == (n = r(t)) && "function" == typeof t.callee ? "Arguments" : n
    }
}, function(e, t, i) {
    "use strict";
    var n = i(10),
        r = i(51),
        o = i(22),
        s = i(25),
        a = i(74),
        c = s.set,
        l = s.getterFor("Array Iterator");
    e.exports = a(Array, "Array", (function(e, t) {
        c(this, {
            type: "Array Iterator",
            target: n(e),
            index: 0,
            kind: t
        })
    }), (function() {
        var e = l(this),
            t = e.target,
            i = e.kind,
            n = e.index++;
        return !t || n >= t.length ? (e.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == i ? {
            value: n,
            done: !1
        } : "values" == i ? {
            value: t[n],
            done: !1
        } : {
            value: [n, t[n]],
            done: !1
        }
    }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(103),
        o = i(76),
        s = i(77),
        a = i(48),
        c = i(11),
        l = i(13),
        h = i(0),
        u = i(27),
        d = i(22),
        g = i(75),
        f = g.IteratorPrototype,
        p = g.BUGGY_SAFARI_ITERATORS,
        m = h("iterator"),
        v = function() {
            return this
        };
    e.exports = function(e, t, i, h, g, w, b) {
        r(i, t, h);
        var y, C, S, k = function(e) {
                if (e === g && L) return L;
                if (!p && e in A) return A[e];
                switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new i(this, e)
                        }
                }
                return function() {
                    return new i(this)
                }
            },
            x = t + " Iterator",
            $ = !1,
            A = e.prototype,
            E = A[m] || A["@@iterator"] || g && A[g],
            L = !p && E || k(g),
            R = "Array" == t && A.entries || E;
        if (R && (y = o(R.call(new e)), f !== Object.prototype && y.next && (u || o(y) === f || (s ? s(y, f) : "function" != typeof y[m] && c(y, m, v)), a(y, x, !0, !0), u && (d[x] = v))), "values" == g && E && "values" !== E.name && ($ = !0, L = function() {
                return E.call(this)
            }), u && !b || A[m] === L || c(A, m, L), d[t] = L, g)
            if (C = {
                    values: k("values"),
                    keys: w ? L : k("keys"),
                    entries: k("entries")
                }, b)
                for (S in C)(p || $ || !(S in A)) && l(A, S, C[S]);
            else n({
                target: t,
                proto: !0,
                forced: p || $
            }, C);
        return C
    }
}, function(e, t, i) {
    "use strict";
    var n, r, o, s = i(76),
        a = i(11),
        c = i(5),
        l = i(0),
        h = i(27),
        u = l("iterator"),
        d = !1;
    [].keys && ("next" in (o = [].keys()) ? (r = s(s(o))) !== Object.prototype && (n = r) : d = !0), null == n && (n = {}), h || c(n, u) || a(n, u, (function() {
        return this
    })), e.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: d
    }
}, function(e, t, i) {
    var n = i(5),
        r = i(15),
        o = i(26),
        s = i(104),
        a = o("IE_PROTO"),
        c = Object.prototype;
    e.exports = s ? Object.getPrototypeOf : function(e) {
        return e = r(e), n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
    }
}, function(e, t, i) {
    var n = i(9),
        r = i(105);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var e, t = !1,
            i = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), t = i instanceof Array
        } catch (e) {}
        return function(i, o) {
            return n(i), r(o), t ? e.call(i, o) : i.__proto__ = o, i
        }
    }() : void 0)
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(24),
        o = i(10),
        s = i(34),
        a = [].join,
        c = r != Object,
        l = s("join", ",");
    n({
        target: "Array",
        proto: !0,
        forced: c || !l
    }, {
        join: function(e) {
            return a.call(o(this), void 0 === e ? "," : e)
        }
    })
}, function(e, t, i) {
    var n, r, o = i(3),
        s = i(106),
        a = o.process,
        c = a && a.versions,
        l = c && c.v8;
    l ? r = (n = l.split("."))[0] + n[1] : s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (r = n[1]), e.exports = r && +r
}, function(e, t, i) {
    var n = i(6),
        r = i(8).f,
        o = Function.prototype,
        s = o.toString,
        a = /^\s*function ([^ (]*)/;
    n && !("name" in o) && r(o, "name", {
        configurable: !0,
        get: function() {
            try {
                return s.call(this).match(a)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function(e, t, i) {
    "use strict";
    var n = i(9);
    e.exports = function() {
        var e = n(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function(e, t, i) {
    var n = i(44),
        r = i(18),
        o = function(e) {
            return function(t, i) {
                var o, s, a = String(r(t)),
                    c = n(i),
                    l = a.length;
                return c < 0 || c >= l ? e ? "" : void 0 : (o = a.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === l || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? e ? a.charAt(c) : o : e ? a.slice(c, c + 2) : s - 56320 + (o - 55296 << 10) + 65536
            }
        };
    e.exports = {
        codeAt: o(!1),
        charAt: o(!0)
    }
}, function(e, t, i) {
    "use strict";
    var n = i(112),
        r = i(84),
        o = i(9),
        s = i(18),
        a = i(113),
        c = i(114),
        l = i(14),
        h = i(115),
        u = i(36),
        d = i(2),
        g = [].push,
        f = Math.min,
        p = !d((function() {
            return !RegExp(4294967295, "y")
        }));
    n("split", 2, (function(e, t, i) {
        var n;
        return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, i) {
            var n = String(s(this)),
                o = void 0 === i ? 4294967295 : i >>> 0;
            if (0 === o) return [];
            if (void 0 === e) return [n];
            if (!r(e)) return t.call(n, e, o);
            for (var a, c, l, h = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, p = new RegExp(e.source, d + "g");
                (a = u.call(p, n)) && !((c = p.lastIndex) > f && (h.push(n.slice(f, a.index)), a.length > 1 && a.index < n.length && g.apply(h, a.slice(1)), l = a[0].length, f = c, h.length >= o));) p.lastIndex === a.index && p.lastIndex++;
            return f === n.length ? !l && p.test("") || h.push("") : h.push(n.slice(f)), h.length > o ? h.slice(0, o) : h
        } : "0".split(void 0, 0).length ? function(e, i) {
            return void 0 === e && 0 === i ? [] : t.call(this, e, i)
        } : t, [function(t, i) {
            var r = s(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, r, i) : n.call(String(r), t, i)
        }, function(e, r) {
            var s = i(n, e, this, r, n !== t);
            if (s.done) return s.value;
            var u = o(e),
                d = String(this),
                g = a(u, RegExp),
                m = u.unicode,
                v = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "y" : "g"),
                w = new g(p ? u : "^(?:" + u.source + ")", v),
                b = void 0 === r ? 4294967295 : r >>> 0;
            if (0 === b) return [];
            if (0 === d.length) return null === h(w, d) ? [d] : [];
            for (var y = 0, C = 0, S = []; C < d.length;) {
                w.lastIndex = p ? C : 0;
                var k, x = h(w, p ? d : d.slice(C));
                if (null === x || (k = f(l(w.lastIndex + (p ? 0 : C)), d.length)) === y) C = c(d, C, m);
                else {
                    if (S.push(d.slice(y, C)), S.length === b) return S;
                    for (var $ = 1; $ <= x.length - 1; $++)
                        if (S.push(x[$]), S.length === b) return S;
                    C = y = k
                }
            }
            return S.push(d.slice(y)), S
        }]
    }), !p)
}, function(e, t, i) {
    var n = i(7),
        r = i(17),
        o = i(0)("match");
    e.exports = function(e) {
        var t;
        return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e))
    }
}, function(e, t) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(e, t, i) {
    "use strict";
    var n = i(21).forEach,
        r = i(34),
        o = i(12),
        s = r("forEach"),
        a = o("forEach");
    e.exports = s && a ? [].forEach : function(e) {
        return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
}, function(e, t, i) {
    var n = i(1),
        r = i(15),
        o = i(47);
    n({
        target: "Object",
        stat: !0,
        forced: i(2)((function() {
            o(1)
        }))
    }, {
        keys: function(e) {
            return o(r(e))
        }
    })
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/snippets", [], (function(e, t, i) {
            "use strict";

            function n(e) {
                var t = (new Date).toLocaleString("en-us", e);
                return 1 == t.length ? "0" + t : t
            }
            var r = e("./lib/oop"),
                o = e("./lib/event_emitter").EventEmitter,
                s = e("./lib/lang"),
                a = e("./range").Range,
                c = e("./range_list").RangeList,
                l = e("./keyboard/hash_handler").HashHandler,
                h = e("./tokenizer").Tokenizer,
                u = e("./clipboard"),
                d = {
                    CURRENT_WORD: function(e) {
                        return e.session.getTextRange(e.session.getWordRange())
                    },
                    SELECTION: function(e, t, i) {
                        var n = e.session.getTextRange();
                        return i ? n.replace(/\n\r?([ \t]*\S)/g, "\n" + i + "$1") : n
                    },
                    CURRENT_LINE: function(e) {
                        return e.session.getLine(e.getCursorPosition().row)
                    },
                    PREV_LINE: function(e) {
                        return e.session.getLine(e.getCursorPosition().row - 1)
                    },
                    LINE_INDEX: function(e) {
                        return e.getCursorPosition().row
                    },
                    LINE_NUMBER: function(e) {
                        return e.getCursorPosition().row + 1
                    },
                    SOFT_TABS: function(e) {
                        return e.session.getUseSoftTabs() ? "YES" : "NO"
                    },
                    TAB_SIZE: function(e) {
                        return e.session.getTabSize()
                    },
                    CLIPBOARD: function(e) {
                        return u.getText && u.getText()
                    },
                    FILENAME: function(e) {
                        return /[^/\\]*$/.exec(this.FILEPATH(e))[0]
                    },
                    FILENAME_BASE: function(e) {
                        return /[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/, "")
                    },
                    DIRECTORY: function(e) {
                        return this.FILEPATH(e).replace(/[^/\\]*$/, "")
                    },
                    FILEPATH: function(e) {
                        return "/not implemented.txt"
                    },
                    WORKSPACE_NAME: function() {
                        return "Unknown"
                    },
                    FULLNAME: function() {
                        return "Unknown"
                    },
                    BLOCK_COMMENT_START: function(e) {
                        var t = e.session.$mode || {};
                        return t.blockComment && t.blockComment.start || ""
                    },
                    BLOCK_COMMENT_END: function(e) {
                        var t = e.session.$mode || {};
                        return t.blockComment && t.blockComment.end || ""
                    },
                    LINE_COMMENT: function(e) {
                        return (e.session.$mode || {}).lineCommentStart || ""
                    },
                    CURRENT_YEAR: n.bind(null, {
                        year: "numeric"
                    }),
                    CURRENT_YEAR_SHORT: n.bind(null, {
                        year: "2-digit"
                    }),
                    CURRENT_MONTH: n.bind(null, {
                        month: "numeric"
                    }),
                    CURRENT_MONTH_NAME: n.bind(null, {
                        month: "long"
                    }),
                    CURRENT_MONTH_NAME_SHORT: n.bind(null, {
                        month: "short"
                    }),
                    CURRENT_DATE: n.bind(null, {
                        day: "2-digit"
                    }),
                    CURRENT_DAY_NAME: n.bind(null, {
                        weekday: "long"
                    }),
                    CURRENT_DAY_NAME_SHORT: n.bind(null, {
                        weekday: "short"
                    }),
                    CURRENT_HOUR: n.bind(null, {
                        hour: "2-digit",
                        hour12: !1
                    }),
                    CURRENT_MINUTE: n.bind(null, {
                        minute: "2-digit"
                    }),
                    CURRENT_SECOND: n.bind(null, {
                        second: "2-digit"
                    })
                };
            d.SELECTED_TEXT = d.SELECTION;
            var g = function() {
                this.snippetMap = {}, this.snippetNameMap = {}
            };
            (function() {
                r.implement(this, o), this.getTokenizer = function() {
                    return g.$tokenizer || this.createTokenizer()
                }, this.createTokenizer = function() {
                    function e(e) {
                        return e = e.substr(1), /^\d+$/.test(e) ? [{
                            tabstopId: parseInt(e, 10)
                        }] : [{
                            text: e
                        }]
                    }

                    function t(e) {
                        return "(?:[^\\\\" + e + "]|\\\\.)"
                    }
                    var i = {
                        regex: "/(" + t("/") + "+)/",
                        onMatch: function(e, t, i) {
                            var n = i[0];
                            return n.fmtString = !0, n.guard = e.slice(1, -1), n.flag = "", ""
                        },
                        next: "formatString"
                    };
                    return g.$tokenizer = new h({
                        start: [{
                            regex: /\\./,
                            onMatch: function(e, t, i) {
                                var n = e[1];
                                return ("}" == n && i.length || -1 != "`$\\".indexOf(n)) && (e = n), [e]
                            }
                        }, {
                            regex: /}/,
                            onMatch: function(e, t, i) {
                                return [i.length ? i.shift() : e]
                            }
                        }, {
                            regex: /\$(?:\d+|\w+)/,
                            onMatch: e
                        }, {
                            regex: /\$\{[\dA-Z_a-z]+/,
                            onMatch: function(t, i, n) {
                                var r = e(t.substr(1));
                                return n.unshift(r[0]), r
                            },
                            next: "snippetVar"
                        }, {
                            regex: /\n/,
                            token: "newline",
                            merge: !1
                        }],
                        snippetVar: [{
                            regex: "\\|" + t("\\|") + "*\\|",
                            onMatch: function(e, t, i) {
                                var n = e.slice(1, -1).replace(/\\[,|\\]|,/g, (function(e) {
                                    return 2 == e.length ? e[1] : "\0"
                                })).split("\0");
                                return i[0].choices = n, [n[0]]
                            },
                            next: "start"
                        }, i, {
                            regex: "([^:}\\\\]|\\\\.)*:?",
                            token: "",
                            next: "start"
                        }],
                        formatString: [{
                            regex: /:/,
                            onMatch: function(e, t, i) {
                                return i.length && i[0].expectElse ? (i[0].expectElse = !1, i[0].ifEnd = {
                                    elseEnd: i[0]
                                }, [i[0].ifEnd]) : ":"
                            }
                        }, {
                            regex: /\\./,
                            onMatch: function(e, t, i) {
                                var n = e[1];
                                return "}" == n && i.length || -1 != "`$\\".indexOf(n) ? e = n : "n" == n ? e = "\n" : "t" == n ? e = "\t" : -1 != "ulULE".indexOf(n) && (e = {
                                    changeCase: n,
                                    local: n > "a"
                                }), [e]
                            }
                        }, {
                            regex: "/\\w*}",
                            onMatch: function(e, t, i) {
                                var n = i.shift();
                                return n && (n.flag = e.slice(1, -1)), this.next = n && n.tabstopId ? "start" : "", [n || e]
                            },
                            next: "start"
                        }, {
                            regex: /\$(?:\d+|\w+)/,
                            onMatch: function(e, t, i) {
                                return [{
                                    text: e.slice(1)
                                }]
                            }
                        }, {
                            regex: /\${\w+/,
                            onMatch: function(e, t, i) {
                                var n = {
                                    text: e.slice(2)
                                };
                                return i.unshift(n), [n]
                            },
                            next: "formatStringVar"
                        }, {
                            regex: /\n/,
                            token: "newline",
                            merge: !1
                        }, {
                            regex: /}/,
                            onMatch: function(e, t, i) {
                                var n = i.shift();
                                return this.next = n && n.tabstopId ? "start" : "", [n || e]
                            },
                            next: "start"
                        }],
                        formatStringVar: [{
                            regex: /:\/\w+}/,
                            onMatch: function(e, t, i) {
                                return i[0].formatFunction = e.slice(2, -1), [i.shift()]
                            },
                            next: "formatString"
                        }, i, {
                            regex: /:[\?\-+]?/,
                            onMatch: function(e, t, i) {
                                "+" == e[1] && (i[0].ifEnd = i[0]), "?" == e[1] && (i[0].expectElse = !0)
                            },
                            next: "formatString"
                        }, {
                            regex: "([^:}\\\\]|\\\\.)*:?",
                            token: "",
                            next: "formatString"
                        }]
                    })
                }, this.tokenizeTmSnippet = function(e, t) {
                    return this.getTokenizer().getLineTokens(e, t).tokens.map((function(e) {
                        return e.value || e
                    }))
                }, this.getVariableValue = function(e, t, i) {
                    if (/^\d+$/.test(t)) return (this.variables.__ || {})[t] || "";
                    if (/^[A-Z]\d+$/.test(t)) return (this.variables[t[0] + "__"] || {})[t.substr(1)] || "";
                    if (t = t.replace(/^TM_/, ""), !this.variables.hasOwnProperty(t)) return "";
                    var n = this.variables[t];
                    return "function" == typeof n && (n = this.variables[t](e, t, i)), null == n ? "" : n
                }, this.variables = d, this.tmStrFormat = function(e, t, i) {
                    if (!t.fmt) return e;
                    var n = t.flag || "",
                        r = t.guard;
                    r = new RegExp(r, n.replace(/[^gim]/g, ""));
                    var o = "string" == typeof t.fmt ? this.tokenizeTmSnippet(t.fmt, "formatString") : t.fmt,
                        s = this;
                    return e.replace(r, (function() {
                        var e = s.variables.__;
                        s.variables.__ = [].slice.call(arguments);
                        for (var t = s.resolveVariables(o, i), n = "E", r = 0; r < t.length; r++) {
                            var a = t[r];
                            if ("object" == typeof a)
                                if (t[r] = "", a.changeCase && a.local) {
                                    var c = t[r + 1];
                                    c && "string" == typeof c && ("u" == a.changeCase ? t[r] = c[0].toUpperCase() : t[r] = c[0].toLowerCase(), t[r + 1] = c.substr(1))
                                } else a.changeCase && (n = a.changeCase);
                            else "U" == n ? t[r] = a.toUpperCase() : "L" == n && (t[r] = a.toLowerCase())
                        }
                        return s.variables.__ = e, t.join("")
                    }))
                }, this.tmFormatFunction = function(e, t, i) {
                    return "upcase" == t.formatFunction ? e.toUpperCase() : "downcase" == t.formatFunction ? e.toLowerCase() : e
                }, this.resolveVariables = function(e, t) {
                    function i(t) {
                        var i = e.indexOf(t, s + 1); - 1 != i && (s = i)
                    }
                    for (var n = [], r = "", o = !0, s = 0; s < e.length; s++) {
                        var a = e[s];
                        if ("string" != typeof a) {
                            if (a) {
                                if (o = !1, a.fmtString) {
                                    var c = e.indexOf(a, s + 1); - 1 == c && (c = e.length), a.fmt = e.slice(s + 1, c), s = c
                                }
                                if (a.text) {
                                    var l = this.getVariableValue(t, a.text, r) + "";
                                    a.fmtString && (l = this.tmStrFormat(l, a, t)), a.formatFunction && (l = this.tmFormatFunction(l, a, t)), l && !a.ifEnd ? (n.push(l), i(a)) : !l && a.ifEnd && i(a.ifEnd)
                                } else a.elseEnd ? i(a.elseEnd) : (null != a.tabstopId || null != a.changeCase) && n.push(a)
                            }
                        } else n.push(a), "\n" == a ? (o = !0, r = "") : o && (r = /^\t*/.exec(a)[0], o = /\S/.test(a))
                    }
                    return n
                }, this.insertSnippetForSelection = function(e, t) {
                    function i(e) {
                        for (var t = [], i = 0; i < e.length; i++) {
                            var n = e[i];
                            if ("object" == typeof n) {
                                if (l[n.tabstopId]) continue;
                                n = t[e.lastIndexOf(n, i - 1)] || {
                                    tabstopId: n.tabstopId
                                }
                            }
                            t[i] = n
                        }
                        return t
                    }
                    var n = e.getCursorPosition(),
                        r = e.session.getLine(n.row),
                        o = e.session.getTabString(),
                        s = r.match(/^\s*/)[0];
                    n.column < s.length && (s = s.slice(0, n.column)), t = t.replace(/\r/g, "");
                    var a = this.tokenizeTmSnippet(t);
                    a = (a = this.resolveVariables(a, e)).map((function(e) {
                        return "\n" == e ? e + s : "string" == typeof e ? e.replace(/\t/g, o) : e
                    }));
                    var c = [];
                    a.forEach((function(e, t) {
                        if ("object" == typeof e) {
                            var i = e.tabstopId,
                                n = c[i];
                            if (n || ((n = c[i] = []).index = i, n.value = "", n.parents = {}), -1 === n.indexOf(e)) {
                                e.choices && !n.choices && (n.choices = e.choices), n.push(e);
                                var r = a.indexOf(e, t + 1);
                                if (-1 !== r) {
                                    var o = a.slice(t + 1, r);
                                    o.some((function(e) {
                                        return "object" == typeof e
                                    })) && !n.value ? n.value = o : o.length && (!n.value || "string" != typeof n.value) && (n.value = o.join(""))
                                }
                            }
                        }
                    })), c.forEach((function(e) {
                        e.length = 0
                    }));
                    for (var l = {}, h = 0; h < a.length; h++) {
                        var u = a[h];
                        if ("object" == typeof u) {
                            var d = u.tabstopId,
                                g = c[d],
                                p = a.indexOf(u, h + 1);
                            if (l[d]) l[d] === u && (delete l[d], Object.keys(l).forEach((function(e) {
                                g.parents[e] = !0
                            })));
                            else {
                                l[d] = u;
                                var m = g.value;
                                "string" != typeof m ? m = i(m) : u.fmt && (m = this.tmStrFormat(m, u, e)), a.splice.apply(a, [h + 1, Math.max(0, p - h)].concat(m, u)), -1 === g.indexOf(u) && g.push(u)
                            }
                        }
                    }
                    var v = 0,
                        w = 0,
                        b = "";
                    a.forEach((function(e) {
                        if ("string" == typeof e) {
                            var t = e.split("\n");
                            t.length > 1 ? (w = t[t.length - 1].length, v += t.length - 1) : w += e.length, b += e
                        } else e && (e.start ? e.end = {
                            row: v,
                            column: w
                        } : e.start = {
                            row: v,
                            column: w
                        })
                    }));
                    var y = e.getSelectionRange(),
                        C = e.session.replace(y, b),
                        S = new f(e),
                        k = e.inVirtualSelectionMode && e.selection.index;
                    S.addTabstops(c, y.start, C, k)
                }, this.insertSnippet = function(e, t) {
                    var i = this;
                    if (e.inVirtualSelectionMode) return i.insertSnippetForSelection(e, t);
                    e.forEachSelection((function() {
                        i.insertSnippetForSelection(e, t)
                    }), null, {
                        keepOrder: !0
                    }), e.tabstopManager && e.tabstopManager.tabNext()
                }, this.$getScope = function(e) {
                    var t = e.session.$mode.$id || "";
                    if ("html" === (t = t.split("/").pop()) || "php" === t) {
                        "php" === t && !e.session.$mode.inlinePhp && (t = "html");
                        var i = e.getCursorPosition(),
                            n = e.session.getState(i.row);
                        "object" == typeof n && (n = n[0]), n.substring && ("js-" == n.substring(0, 3) ? t = "javascript" : "css-" == n.substring(0, 4) ? t = "css" : "php-" == n.substring(0, 4) && (t = "php"))
                    }
                    return t
                }, this.getActiveScopes = function(e) {
                    var t = this.$getScope(e),
                        i = [t],
                        n = this.snippetMap;
                    return n[t] && n[t].includeScopes && i.push.apply(i, n[t].includeScopes), i.push("_"), i
                }, this.expandWithTab = function(e, t) {
                    var i = this,
                        n = e.forEachSelection((function() {
                            return i.expandSnippetForSelection(e, t)
                        }), null, {
                            keepOrder: !0
                        });
                    return n && e.tabstopManager && e.tabstopManager.tabNext(), n
                }, this.expandSnippetForSelection = function(e, t) {
                    var i, n = e.getCursorPosition(),
                        r = e.session.getLine(n.row),
                        o = r.substring(0, n.column),
                        s = r.substr(n.column),
                        a = this.snippetMap;
                    return this.getActiveScopes(e).some((function(e) {
                        var t = a[e];
                        return t && (i = this.findMatchingSnippet(t, o, s)), !!i
                    }), this), !!i && (t && t.dryRun || (e.session.doc.removeInLine(n.row, n.column - i.replaceBefore.length, n.column + i.replaceAfter.length), this.variables.M__ = i.matchBefore, this.variables.T__ = i.matchAfter, this.insertSnippetForSelection(e, i.content), this.variables.M__ = this.variables.T__ = null), !0)
                }, this.findMatchingSnippet = function(e, t, i) {
                    for (var n = e.length; n--;) {
                        var r = e[n];
                        if ((!r.startRe || r.startRe.test(t)) && ((!r.endRe || r.endRe.test(i)) && (r.startRe || r.endRe))) return r.matchBefore = r.startRe ? r.startRe.exec(t) : [""], r.matchAfter = r.endRe ? r.endRe.exec(i) : [""], r.replaceBefore = r.triggerRe ? r.triggerRe.exec(t)[0] : "", r.replaceAfter = r.endTriggerRe ? r.endTriggerRe.exec(i)[0] : "", r
                    }
                }, this.snippetMap = {}, this.snippetNameMap = {}, this.register = function(e, t) {
                    function i(e) {
                        return e && !/^\^?\(.*\)\$?$|^\\b$/.test(e) && (e = "(?:" + e + ")"), e || ""
                    }

                    function n(e, t, n) {
                        return e = i(e), t = i(t), n ? (e = t + e) && "$" != e[e.length - 1] && (e += "$") : (e += t) && "^" != e[0] && (e = "^" + e), new RegExp(e)
                    }

                    function r(e) {
                        e.scope || (e.scope = t || "_"), t = e.scope, o[t] || (o[t] = [], a[t] = {});
                        var i = a[t];
                        if (e.name) {
                            var r = i[e.name];
                            r && c.unregister(r), i[e.name] = e
                        }
                        o[t].push(e), e.tabTrigger && !e.trigger && (!e.guard && /^\w/.test(e.tabTrigger) && (e.guard = "\\b"), e.trigger = s.escapeRegExp(e.tabTrigger)), (e.trigger || e.guard || e.endTrigger || e.endGuard) && (e.startRe = n(e.trigger, e.guard, !0), e.triggerRe = new RegExp(e.trigger), e.endRe = n(e.endTrigger, e.endGuard, !0), e.endTriggerRe = new RegExp(e.endTrigger))
                    }
                    var o = this.snippetMap,
                        a = this.snippetNameMap,
                        c = this;
                    e || (e = []), e && e.content ? r(e) : Array.isArray(e) && e.forEach(r), this._signal("registerSnippets", {
                        scope: t
                    })
                }, this.unregister = function(e, t) {
                    function i(e) {
                        var i = r[e.scope || t];
                        if (i && i[e.name]) {
                            delete i[e.name];
                            var o = n[e.scope || t],
                                s = o && o.indexOf(e);
                            s >= 0 && o.splice(s, 1)
                        }
                    }
                    var n = this.snippetMap,
                        r = this.snippetNameMap;
                    e.content ? i(e) : Array.isArray(e) && e.forEach(i)
                }, this.parseSnippetFile = function(e) {
                    e = e.replace(/\r/g, "");
                    for (var t, i = [], n = {}, r = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm; t = r.exec(e);) {
                        if (t[1]) try {
                            n = JSON.parse(t[1]), i.push(n)
                        } catch (e) {}
                        if (t[4]) n.content = t[4].replace(/^\t/gm, ""), i.push(n), n = {};
                        else {
                            var o = t[2],
                                s = t[3];
                            if ("regex" == o) {
                                var a = /\/((?:[^\/\\]|\\.)*)|$/g;
                                n.guard = a.exec(s)[1], n.trigger = a.exec(s)[1], n.endTrigger = a.exec(s)[1], n.endGuard = a.exec(s)[1]
                            } else "snippet" == o ? (n.tabTrigger = s.match(/^\S*/)[0], n.name || (n.name = s)) : n[o] = s
                        }
                    }
                    return i
                }, this.getSnippetByName = function(e, t) {
                    var i, n = this.snippetNameMap;
                    return this.getActiveScopes(t).some((function(t) {
                        var r = n[t];
                        return r && (i = r[e]), !!i
                    }), this), i
                }
            }).call(g.prototype);
            var f = function(e) {
                if (e.tabstopManager) return e.tabstopManager;
                e.tabstopManager = this, this.$onChange = this.onChange.bind(this), this.$onChangeSelection = s.delayedCall(this.onChangeSelection.bind(this)).schedule, this.$onChangeSession = this.onChangeSession.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), this.attach(e)
            };
            (function() {
                this.attach = function(e) {
                    this.index = 0, this.ranges = [], this.tabstops = [], this.$openTabstops = null, this.selectedTabstop = null, this.editor = e, this.editor.on("change", this.$onChange), this.editor.on("changeSelection", this.$onChangeSelection), this.editor.on("changeSession", this.$onChangeSession), this.editor.commands.on("afterExec", this.$onAfterExec), this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
                }, this.detach = function() {
                    this.tabstops.forEach(this.removeTabstopMarkers, this), this.ranges = null, this.tabstops = null, this.selectedTabstop = null, this.editor.removeListener("change", this.$onChange), this.editor.removeListener("changeSelection", this.$onChangeSelection), this.editor.removeListener("changeSession", this.$onChangeSession), this.editor.commands.removeListener("afterExec", this.$onAfterExec), this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.tabstopManager = null, this.editor = null
                }, this.onChange = function(e) {
                    for (var t = "r" == e.action[0], i = this.selectedTabstop || {}, n = i.parents || {}, r = (this.tabstops || []).slice(), o = 0; o < r.length; o++) {
                        var s = r[o],
                            a = s == i || n[s.index];
                        if (s.rangeList.$bias = a ? 0 : 1, "remove" == e.action && s !== i) {
                            var c = s.parents && s.parents[i.index],
                                l = s.rangeList.pointIndex(e.start, c);
                            l = l < 0 ? -l - 1 : l + 1;
                            var h = s.rangeList.pointIndex(e.end, c);
                            h = h < 0 ? -h - 1 : h - 1;
                            for (var u = s.rangeList.ranges.slice(l, h), d = 0; d < u.length; d++) this.removeRange(u[d])
                        }
                        s.rangeList.$onChange(e)
                    }
                    var g = this.editor.session;
                    !this.$inChange && t && 1 == g.getLength() && !g.getValue() && this.detach()
                }, this.updateLinkedFields = function() {
                    var e = this.selectedTabstop;
                    if (e && e.hasLinkedRanges && e.firstNonLinked) {
                        this.$inChange = !0;
                        for (var i = this.editor.session, n = i.getTextRange(e.firstNonLinked), r = 0; r < e.length; r++) {
                            var o = e[r];
                            if (o.linked) {
                                var s = o.original,
                                    a = t.snippetManager.tmStrFormat(n, s, this.editor);
                                i.replace(o, a)
                            }
                        }
                        this.$inChange = !1
                    }
                }, this.onAfterExec = function(e) {
                    e.command && !e.command.readOnly && this.updateLinkedFields()
                }, this.onChangeSelection = function() {
                    if (this.editor) {
                        for (var e = this.editor.selection.lead, t = this.editor.selection.anchor, i = this.editor.selection.isEmpty(), n = 0; n < this.ranges.length; n++)
                            if (!this.ranges[n].linked) {
                                var r = this.ranges[n].contains(e.row, e.column),
                                    o = i || this.ranges[n].contains(t.row, t.column);
                                if (r && o) return
                            } this.detach()
                    }
                }, this.onChangeSession = function() {
                    this.detach()
                }, this.tabNext = function(e) {
                    var t = this.tabstops.length,
                        i = this.index + (e || 1);
                    (i = Math.min(Math.max(i, 1), t)) == t && (i = 0), this.selectTabstop(i), 0 === i && this.detach()
                }, this.selectTabstop = function(e) {
                    this.$openTabstops = null;
                    var t = this.tabstops[this.index];
                    if (t && this.addTabstopMarkers(t), this.index = e, (t = this.tabstops[this.index]) && t.length) {
                        this.selectedTabstop = t;
                        var i = t.firstNonLinked || t;
                        if (this.editor.inVirtualSelectionMode) this.editor.selection.setRange(i);
                        else {
                            var n = this.editor.multiSelect;
                            n.toSingleRange(i.clone());
                            for (var r = 0; r < t.length; r++) t.hasLinkedRanges && t[r].linked || n.addRange(t[r].clone(), !0);
                            n.ranges[0] && n.addRange(n.ranges[0].clone())
                        }
                        this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler), this.selectedTabstop && this.selectedTabstop.choices && this.editor.execCommand("startAutocomplete", {
                            matches: this.selectedTabstop.choices
                        })
                    }
                }, this.addTabstops = function(e, t, i) {
                    var n = this.useLink || !this.editor.getOption("enableMultiselect");
                    if (this.$openTabstops || (this.$openTabstops = []), !e[0]) {
                        var r = a.fromPoints(i, i);
                        m(r.start, t), m(r.end, t), e[0] = [r], e[0].index = 0
                    }
                    var o = [this.index + 1, 0],
                        s = this.ranges;
                    e.forEach((function(e, i) {
                        for (var r = this.$openTabstops[i] || e, l = 0; l < e.length; l++) {
                            var h = e[l],
                                u = a.fromPoints(h.start, h.end || h.start);
                            p(u.start, t), p(u.end, t), u.original = h, u.tabstop = r, s.push(u), r != e ? r.unshift(u) : r[l] = u, h.fmtString || r.firstNonLinked && n ? (u.linked = !0, r.hasLinkedRanges = !0) : r.firstNonLinked || (r.firstNonLinked = u)
                        }
                        r.firstNonLinked || (r.hasLinkedRanges = !1), r === e && (o.push(r), this.$openTabstops[i] = r), this.addTabstopMarkers(r), r.rangeList = r.rangeList || new c, r.rangeList.$bias = 0, r.rangeList.addList(r)
                    }), this), o.length > 2 && (this.tabstops.length && o.push(o.splice(2, 1)[0]), this.tabstops.splice.apply(this.tabstops, o))
                }, this.addTabstopMarkers = function(e) {
                    var t = this.editor.session;
                    e.forEach((function(e) {
                        e.markerId || (e.markerId = t.addMarker(e, "ace_snippet-marker", "text"))
                    }))
                }, this.removeTabstopMarkers = function(e) {
                    var t = this.editor.session;
                    e.forEach((function(e) {
                        t.removeMarker(e.markerId), e.markerId = null
                    }))
                }, this.removeRange = function(e) {
                    var t = e.tabstop.indexOf(e); - 1 != t && e.tabstop.splice(t, 1), -1 != (t = this.ranges.indexOf(e)) && this.ranges.splice(t, 1), -1 != (t = e.tabstop.rangeList.ranges.indexOf(e)) && e.tabstop.splice(t, 1), this.editor.session.removeMarker(e.markerId), e.tabstop.length || (-1 != (t = this.tabstops.indexOf(e.tabstop)) && this.tabstops.splice(t, 1), this.tabstops.length || this.detach())
                }, this.keyboardHandler = new l, this.keyboardHandler.bindKeys({
                    Tab: function(e) {
                        t.snippetManager && t.snippetManager.expandWithTab(e) || (e.tabstopManager.tabNext(1), e.renderer.scrollCursorIntoView())
                    },
                    "Shift-Tab": function(e) {
                        e.tabstopManager.tabNext(-1), e.renderer.scrollCursorIntoView()
                    },
                    Esc: function(e) {
                        e.tabstopManager.detach()
                    }
                })
            }).call(f.prototype);
            var p = function(e, t) {
                    0 == e.row && (e.column += t.column), e.row += t.row
                },
                m = function(e, t) {
                    e.row == t.row && (e.column -= t.column), e.row -= t.row
                };
            e("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"), t.snippetManager = new g;
            var v = e("./editor").Editor;
            (function() {
                this.insertSnippet = function(e, i) {
                    return t.snippetManager.insertSnippet(this, e, i)
                }, this.expandSnippet = function(e) {
                    return t.snippetManager.expandWithTab(this, e)
                }
            }).call(v.prototype)
        })), ace.define("ace/autocomplete/popup", [], (function(e, t, i) {
            "use strict";
            var n = e("../virtual_renderer").VirtualRenderer,
                r = e("../editor").Editor,
                o = e("../range").Range,
                s = e("../lib/event"),
                a = e("../lib/lang"),
                c = e("../lib/dom"),
                l = function(e) {
                    var t = new n(e);
                    t.$maxLines = 4;
                    var i = new r(t);
                    return i.setHighlightActiveLine(!1), i.setShowPrintMargin(!1), i.renderer.setShowGutter(!1), i.renderer.setHighlightGutterLine(!1), i.$mouseHandler.$focusTimeout = 0, i.$highlightTagPending = !0, i
                };
            c.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}", "autocompletion.css"), t.AcePopup = function(e) {
                var t = c.createElement("div"),
                    i = new l(t);
                e && e.appendChild(t), t.style.display = "none", i.renderer.content.style.cursor = "default", i.renderer.setStyle("ace_autocomplete"), i.setOption("displayIndentGuides", !1), i.setOption("dragDelay", 150);
                var n = function() {};
                i.focus = n, i.$isFocused = !0, i.renderer.$cursorLayer.restartTimer = n, i.renderer.$cursorLayer.element.style.opacity = 0, i.renderer.$maxLines = 8, i.renderer.$keepTextAreaAtCursor = !1, i.setHighlightActiveLine(!1), i.session.highlight(""), i.session.$searchHighlight.clazz = "ace_highlight-marker", i.on("mousedown", (function(e) {
                    var t = e.getDocumentPosition();
                    i.selection.moveToPosition(t), u.start.row = u.end.row = t.row, e.stop()
                }));
                var r, h = new o(-1, 0, -1, 1 / 0),
                    u = new o(-1, 0, -1, 1 / 0);
                u.id = i.session.addMarker(u, "ace_active-line", "fullLine"), i.setSelectOnHover = function(e) {
                    e ? h.id && (i.session.removeMarker(h.id), h.id = null) : h.id = i.session.addMarker(h, "ace_line-hover", "fullLine")
                }, i.setSelectOnHover(!1), i.on("mousemove", (function(e) {
                    if (r) {
                        if (r.x != e.x || r.y != e.y) {
                            (r = e).scrollTop = i.renderer.scrollTop;
                            var t = r.getDocumentPosition().row;
                            h.start.row != t && (h.id || i.setRow(t), g(t))
                        }
                    } else r = e
                })), i.renderer.on("beforeRender", (function() {
                    if (r && -1 != h.start.row) {
                        r.$pos = null;
                        var e = r.getDocumentPosition().row;
                        h.id || i.setRow(e), g(e, !0)
                    }
                })), i.renderer.on("afterRender", (function() {
                    var e = i.getRow(),
                        t = i.renderer.$textLayer,
                        n = t.element.childNodes[e - t.config.firstRow];
                    n !== t.selectedNode && t.selectedNode && c.removeCssClass(t.selectedNode, "ace_selected"), t.selectedNode = n, n && c.addCssClass(n, "ace_selected")
                }));
                var d = function() {
                        g(-1)
                    },
                    g = function(e, t) {
                        e !== h.start.row && (h.start.row = h.end.row = e, t || i.session._emit("changeBackMarker"), i._emit("changeHoverMarker"))
                    };
                i.getHoveredRow = function() {
                    return h.start.row
                }, s.addListener(i.container, "mouseout", d), i.on("hide", d), i.on("changeSelection", d), i.session.doc.getLength = function() {
                    return i.data.length
                }, i.session.doc.getLine = function(e) {
                    var t = i.data[e];
                    return "string" == typeof t ? t : t && t.value || ""
                };
                var f = i.session.bgTokenizer;
                return f.$tokenizeRow = function(e) {
                    function t(e, t) {
                        e && r.push({
                            type: (n.className || "") + (t || ""),
                            value: e
                        })
                    }
                    var n = i.data[e],
                        r = [];
                    if (!n) return r;
                    "string" == typeof n && (n = {
                        value: n
                    });
                    for (var o = n.caption || n.value || n.name, s = o.toLowerCase(), a = (i.filterText || "").toLowerCase(), c = 0, l = 0, h = 0; h <= a.length; h++)
                        if (h != l && (n.matchMask & 1 << h || h == a.length)) {
                            var u = a.slice(l, h);
                            l = h;
                            var d = s.indexOf(u, c);
                            if (-1 == d) continue;
                            t(o.slice(c, d), ""), c = d + u.length, t(o.slice(d, c), "completion-highlight")
                        } return t(o.slice(c, o.length), ""), n.meta && r.push({
                        type: "completion-meta",
                        value: n.meta
                    }), n.message && r.push({
                        type: "completion-message",
                        value: n.message
                    }), r
                }, f.$updateOnChange = n, f.start = n, i.session.$computeWidth = function() {
                    return this.screenWidth = 0
                }, i.isOpen = !1, i.isTopdown = !1, i.autoSelect = !0, i.filterText = "", i.data = [], i.setData = function(e, t) {
                    i.filterText = t || "", i.setValue(a.stringRepeat("\n", e.length), -1), i.data = e || [], i.setRow(0)
                }, i.getData = function(e) {
                    return i.data[e]
                }, i.getRow = function() {
                    return u.start.row
                }, i.setRow = function(e) {
                    e = Math.max(this.autoSelect ? 0 : -1, Math.min(this.data.length, e)), u.start.row != e && (i.selection.clearSelection(), u.start.row = u.end.row = e || 0, i.session._emit("changeBackMarker"), i.moveCursorTo(e || 0, 0), i.isOpen && i._signal("select"))
                }, i.on("changeSelection", (function() {
                    i.isOpen && i.setRow(i.selection.lead.row), i.renderer.scrollCursorIntoView()
                })), i.hide = function() {
                    this.container.style.display = "none", this._signal("hide"), i.isOpen = !1
                }, i.show = function(e, t, n) {
                    var o = this.container,
                        s = window.innerHeight,
                        a = window.innerWidth,
                        c = this.renderer,
                        l = c.$maxLines * t * 1.4,
                        h = e.top + this.$borderSize;
                    h > s / 2 && !n && h + t + l > s ? (c.$maxPixelHeight = h - 2 * this.$borderSize, o.style.top = "", o.style.bottom = s - h + "px", i.isTopdown = !1) : (h += t, c.$maxPixelHeight = s - h - .2 * t, o.style.top = h + "px", o.style.bottom = "", i.isTopdown = !0), o.style.display = "";
                    var u = e.left;
                    u + o.offsetWidth > a && (u = a - o.offsetWidth), o.style.left = u + "px", this._signal("show"), r = null, i.isOpen = !0
                }, i.goTo = function(e) {
                    var t = this.getRow(),
                        i = this.session.getLength() - 1;
                    switch (e) {
                        case "up":
                            t = t <= 0 ? i : t - 1;
                            break;
                        case "down":
                            t = t >= i ? -1 : t + 1;
                            break;
                        case "start":
                            t = 0;
                            break;
                        case "end":
                            t = i
                    }
                    this.setRow(t)
                }, i.getTextLeftOffset = function() {
                    return this.$borderSize + this.renderer.$padding + this.$imageSize
                }, i.$imageSize = 0, i.$borderSize = 1, i
            }, t.$singleLineEditor = l
        })), ace.define("ace/autocomplete/util", [], (function(e, t, i) {
            "use strict";
            t.parForEach = function(e, t, i) {
                var n = 0,
                    r = e.length;
                0 === r && i();
                for (var o = 0; o < r; o++) t(e[o], (function(e, t) {
                    ++n === r && i(e, t)
                }))
            };
            var n = /[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;
            t.retrievePrecedingIdentifier = function(e, t, i) {
                i = i || n;
                for (var r = [], o = t - 1; o >= 0 && i.test(e[o]); o--) r.push(e[o]);
                return r.reverse().join("")
            }, t.retrieveFollowingIdentifier = function(e, t, i) {
                i = i || n;
                for (var r = [], o = t; o < e.length && i.test(e[o]); o++) r.push(e[o]);
                return r
            }, t.getCompletionPrefix = function(e) {
                var t, i = e.getCursorPosition(),
                    n = e.session.getLine(i.row);
                return e.completers.forEach(function(e) {
                    e.identifierRegexps && e.identifierRegexps.forEach(function(e) {
                        !t && e && (t = this.retrievePrecedingIdentifier(n, i.column, e))
                    }.bind(this))
                }.bind(this)), t || this.retrievePrecedingIdentifier(n, i.column)
            }
        })), ace.define("ace/autocomplete", [], (function(e, t, i) {
            "use strict";
            var n = e("./keyboard/hash_handler").HashHandler,
                r = e("./autocomplete/popup").AcePopup,
                o = e("./autocomplete/util"),
                s = e("./lib/lang"),
                a = e("./lib/dom"),
                c = e("./snippets").snippetManager,
                l = e("./config"),
                h = function() {
                    this.autoInsert = !1, this.autoSelect = !0, this.exactMatch = !1, this.gatherCompletionsId = 0, this.keyboardHandler = new n, this.keyboardHandler.bindKeys(this.commands), this.blurListener = this.blurListener.bind(this), this.changeListener = this.changeListener.bind(this), this.mousedownListener = this.mousedownListener.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this), this.changeTimer = s.delayedCall(function() {
                        this.updateCompletions(!0)
                    }.bind(this)), this.tooltipTimer = s.delayedCall(this.updateDocTooltip.bind(this), 50)
                };
            (function() {
                this.$init = function() {
                    return this.popup = new r(document.body || document.documentElement), this.popup.on("click", function(e) {
                        this.insertMatch(), e.stop()
                    }.bind(this)), this.popup.focus = this.editor.focus.bind(this.editor), this.popup.on("show", this.tooltipTimer.bind(null, null)), this.popup.on("select", this.tooltipTimer.bind(null, null)), this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null)), this.popup
                }, this.getPopup = function() {
                    return this.popup || this.$init()
                }, this.openPopup = function(e, t, i) {
                    this.popup || this.$init(), this.popup.autoSelect = this.autoSelect, this.popup.setData(this.completions.filtered, this.completions.filterText), e.keyBinding.addKeyboardHandler(this.keyboardHandler);
                    var n = e.renderer;
                    if (this.popup.setRow(this.autoSelect ? 0 : -1), i) i && !t && this.detach();
                    else {
                        this.popup.setTheme(e.getTheme()), this.popup.setFontSize(e.getFontSize());
                        var r = n.layerConfig.lineHeight,
                            o = n.$cursorLayer.getPixelPosition(this.base, !0);
                        o.left -= this.popup.getTextLeftOffset();
                        var s = e.container.getBoundingClientRect();
                        o.top += s.top - n.layerConfig.offset, o.left += s.left - e.renderer.scrollLeft, o.left += n.gutterWidth, this.popup.show(o, r)
                    }
                }, this.detach = function() {
                    this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.off("changeSelection", this.changeListener), this.editor.off("blur", this.blurListener), this.editor.off("mousedown", this.mousedownListener), this.editor.off("mousewheel", this.mousewheelListener), this.changeTimer.cancel(), this.hideDocTooltip(), this.gatherCompletionsId += 1, this.popup && this.popup.isOpen && this.popup.hide(), this.base && this.base.detach(), this.activated = !1, this.completions = this.base = null
                }, this.changeListener = function(e) {
                    var t = this.editor.selection.lead;
                    (t.row != this.base.row || t.column < this.base.column) && this.detach(), this.activated ? this.changeTimer.schedule() : this.detach()
                }, this.blurListener = function(e) {
                    var t = document.activeElement,
                        i = this.editor.textInput.getElement(),
                        n = e.relatedTarget && this.tooltipNode && this.tooltipNode.contains(e.relatedTarget),
                        r = this.popup && this.popup.container;
                    t != i && t.parentNode != r && !n && t != this.tooltipNode && e.relatedTarget != i && this.detach()
                }, this.mousedownListener = function(e) {
                    this.detach()
                }, this.mousewheelListener = function(e) {
                    this.detach()
                }, this.goTo = function(e) {
                    this.popup.goTo(e)
                }, this.insertMatch = function(e, t) {
                    if (e || (e = this.popup.getData(this.popup.getRow())), !e) return !1;
                    if (e.completer && e.completer.insertMatch) e.completer.insertMatch(this.editor, e);
                    else {
                        if (this.completions.filterText)
                            for (var i, n = this.editor.selection.getAllRanges(), r = 0; i = n[r]; r++) i.start.column -= this.completions.filterText.length, this.editor.session.remove(i);
                        e.snippet ? c.insertSnippet(this.editor, e.snippet) : this.editor.execCommand("insertstring", e.value || e)
                    }
                    this.detach()
                }, this.commands = {
                    Up: function(e) {
                        e.completer.goTo("up")
                    },
                    Down: function(e) {
                        e.completer.goTo("down")
                    },
                    "Ctrl-Up|Ctrl-Home": function(e) {
                        e.completer.goTo("start")
                    },
                    "Ctrl-Down|Ctrl-End": function(e) {
                        e.completer.goTo("end")
                    },
                    Esc: function(e) {
                        e.completer.detach()
                    },
                    Return: function(e) {
                        return e.completer.insertMatch()
                    },
                    "Shift-Return": function(e) {
                        e.completer.insertMatch(null, {
                            deleteSuffix: !0
                        })
                    },
                    Tab: function(e) {
                        var t = e.completer.insertMatch();
                        if (t || e.tabstopManager) return t;
                        e.completer.goTo("down")
                    },
                    PageUp: function(e) {
                        e.completer.popup.gotoPageUp()
                    },
                    PageDown: function(e) {
                        e.completer.popup.gotoPageDown()
                    }
                }, this.gatherCompletions = function(e, t) {
                    var i = e.getSession(),
                        n = e.getCursorPosition(),
                        r = o.getCompletionPrefix(e);
                    this.base = i.doc.createAnchor(n.row, n.column - r.length), this.base.$insertRight = !0;
                    var s = [],
                        a = e.completers.length;
                    return e.completers.forEach((function(c, l) {
                        c.getCompletions(e, i, n, r, (function(i, n) {
                            !i && n && (s = s.concat(n)), t(null, {
                                prefix: o.getCompletionPrefix(e),
                                matches: s,
                                finished: 0 == --a
                            })
                        }))
                    })), !0
                }, this.showPopup = function(e, t) {
                    this.editor && this.detach(), this.activated = !0, this.editor = e, e.completer != this && (e.completer && e.completer.detach(), e.completer = this), e.on("changeSelection", this.changeListener), e.on("blur", this.blurListener), e.on("mousedown", this.mousedownListener), e.on("mousewheel", this.mousewheelListener), this.updateCompletions(!1, t)
                }, this.updateCompletions = function(e, t) {
                    if (e && this.base && this.completions) {
                        var i = this.editor.getCursorPosition(),
                            n = this.editor.session.getTextRange({
                                start: this.base,
                                end: i
                            });
                        if (n == this.completions.filterText) return;
                        return this.completions.setFilter(n), this.completions.filtered.length ? 1 != this.completions.filtered.length || this.completions.filtered[0].value != n || this.completions.filtered[0].snippet ? void this.openPopup(this.editor, n, e) : this.detach() : this.detach()
                    }
                    if (t && t.matches) {
                        i = this.editor.getSelectionRange().start;
                        return this.base = this.editor.session.doc.createAnchor(i.row, i.column), this.base.$insertRight = !0, this.completions = new u(t.matches), this.openPopup(this.editor, "", e)
                    }
                    var r = this.gatherCompletionsId;
                    this.gatherCompletions(this.editor, function(t, i) {
                        var n = function() {
                                if (i.finished) return this.detach()
                            }.bind(this),
                            o = i.prefix,
                            s = i && i.matches;
                        if (!s || !s.length) return n();
                        if (0 === o.indexOf(i.prefix) && r == this.gatherCompletionsId) {
                            this.completions = new u(s), this.exactMatch && (this.completions.exactMatch = !0), this.completions.setFilter(o);
                            var a = this.completions.filtered;
                            return a.length && (1 != a.length || a[0].value != o || a[0].snippet) ? this.autoInsert && 1 == a.length && i.finished ? this.insertMatch(a[0]) : void this.openPopup(this.editor, o, e) : n()
                        }
                    }.bind(this))
                }, this.cancelContextMenu = function() {
                    this.editor.$mouseHandler.cancelContextMenu()
                }, this.updateDocTooltip = function() {
                    var e = this.popup,
                        t = e.data,
                        i = t && (t[e.getHoveredRow()] || t[e.getRow()]),
                        n = null;
                    return i && this.editor && this.popup.isOpen ? (this.editor.completers.some((function(e) {
                        return e.getDocTooltip && (n = e.getDocTooltip(i)), n
                    })), !n && "string" != typeof i && (n = i), "string" == typeof n && (n = {
                        docText: n
                    }), n && (n.docHTML || n.docText) ? void this.showDocTooltip(n) : this.hideDocTooltip()) : this.hideDocTooltip()
                }, this.showDocTooltip = function(e) {
                    this.tooltipNode || (this.tooltipNode = a.createElement("div"), this.tooltipNode.className = "ace_tooltip ace_doc-tooltip", this.tooltipNode.style.margin = 0, this.tooltipNode.style.pointerEvents = "auto", this.tooltipNode.tabIndex = -1, this.tooltipNode.onblur = this.blurListener.bind(this), this.tooltipNode.onclick = this.onTooltipClick.bind(this));
                    var t = this.tooltipNode;
                    e.docHTML ? t.innerHTML = e.docHTML : e.docText && (t.textContent = e.docText), t.parentNode || document.body.appendChild(t);
                    var i = this.popup,
                        n = i.container.getBoundingClientRect();
                    t.style.top = i.container.style.top, t.style.bottom = i.container.style.bottom, t.style.display = "block", window.innerWidth - n.right < 320 ? n.left < 320 ? i.isTopdown ? (t.style.top = n.bottom + "px", t.style.left = n.left + "px", t.style.right = "", t.style.bottom = "") : (t.style.top = i.container.offsetTop - t.offsetHeight + "px", t.style.left = n.left + "px", t.style.right = "", t.style.bottom = "") : (t.style.right = window.innerWidth - n.left + "px", t.style.left = "") : (t.style.left = n.right + 1 + "px", t.style.right = "")
                }, this.hideDocTooltip = function() {
                    if (this.tooltipTimer.cancel(), this.tooltipNode) {
                        var e = this.tooltipNode;
                        !this.editor.isFocused() && document.activeElement == e && this.editor.focus(), this.tooltipNode = null, e.parentNode && e.parentNode.removeChild(e)
                    }
                }, this.onTooltipClick = function(e) {
                    for (var t = e.target; t && t != this.tooltipNode;) {
                        if ("A" == t.nodeName && t.href) {
                            t.rel = "noreferrer", t.target = "_blank";
                            break
                        }
                        t = t.parentNode
                    }
                }, this.destroy = function() {
                    if (this.detach(), this.popup) {
                        this.popup.destroy();
                        var e = this.popup.container;
                        e && e.parentNode && e.parentNode.removeChild(e)
                    }
                    this.editor && this.editor.completer == this && this.editor.completer, this.popup = null
                }
            }).call(h.prototype), h.for = function(e) {
                return e.completer || (l.get("sharedPopups") ? (h.$shared || (h.$sharedInstance = new h), e.completer = h.$sharedInstance) : (e.completer = new h, e.once("destroy", (function(e, t) {
                    t.completer.destroy()
                })))), e.completer
            }, h.startCommand = {
                name: "startAutocomplete",
                exec: function(e, t) {
                    var i = h.for(e);
                    i.autoInsert = !1, i.autoSelect = !0, i.showPopup(e, t), i.cancelContextMenu()
                },
                bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
            };
            var u = function(e, t) {
                this.all = e, this.filtered = e, this.filterText = t || "", this.exactMatch = !1
            };
            (function() {
                this.setFilter = function(e) {
                    if (e.length > this.filterText && 0 === e.lastIndexOf(this.filterText, 0)) var t = this.filtered;
                    else t = this.all;
                    this.filterText = e, t = (t = this.filterCompletions(t, this.filterText)).sort((function(e, t) {
                        return t.exactMatch - e.exactMatch || t.$score - e.$score || (e.caption || e.value).localeCompare(t.caption || t.value)
                    }));
                    var i = null;
                    t = t.filter((function(e) {
                        var t = e.snippet || e.caption || e.value;
                        return t !== i && (i = t, !0)
                    })), this.filtered = t
                }, this.filterCompletions = function(e, t) {
                    var i = [],
                        n = t.toUpperCase(),
                        r = t.toLowerCase();
                    e: for (var o, s = 0; o = e[s]; s++) {
                        var a = o.caption || o.value || o.snippet;
                        if (a) {
                            var c, l, h = -1,
                                u = 0,
                                d = 0;
                            if (this.exactMatch) {
                                if (t !== a.substr(0, t.length)) continue e
                            } else {
                                var g = a.toLowerCase().indexOf(r);
                                if (g > -1) d = g;
                                else
                                    for (var f = 0; f < t.length; f++) {
                                        var p = a.indexOf(r[f], h + 1),
                                            m = a.indexOf(n[f], h + 1);
                                        if ((c = p >= 0 && (m < 0 || p < m) ? p : m) < 0) continue e;
                                        (l = c - h - 1) > 0 && (-1 === h && (d += 10), d += l, u |= 1 << f), h = c
                                    }
                            }
                            o.matchMask = u, o.exactMatch = d ? 0 : 1, o.$score = (o.score || 0) - d, i.push(o)
                        }
                    }
                    return i
                }
            }).call(u.prototype), t.Autocomplete = h, t.FilteredList = u
        })), ace.define("ace/autocomplete/text_completer", [], (function(e, t, i) {
            function n(e, t) {
                return e.getTextRange(o.fromPoints({
                    row: 0,
                    column: 0
                }, t)).split(s).length - 1
            }

            function r(e, t) {
                var i = n(e, t),
                    r = e.getValue().split(s),
                    o = Object.create(null),
                    a = r[i];
                return r.forEach((function(e, t) {
                    if (e && e !== a) {
                        var n = Math.abs(i - t),
                            s = r.length - n;
                        o[e] ? o[e] = Math.max(s, o[e]) : o[e] = s
                    }
                })), o
            }
            var o = e("../range").Range,
                s = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;
            t.getCompletions = function(e, t, i, n, o) {
                var s = r(t, i);
                o(null, Object.keys(s).map((function(e) {
                    return {
                        caption: e,
                        value: e,
                        score: s[e],
                        meta: "local"
                    }
                })))
            }
        })), ace.define("ace/ext/language_tools", [], (function(e, t, i) {
            "use strict";
            var n = e("../snippets").snippetManager,
                r = e("../autocomplete").Autocomplete,
                o = e("../config"),
                s = e("../lib/lang"),
                a = e("../autocomplete/util"),
                c = e("../autocomplete/text_completer"),
                l = {
                    getCompletions: function(e, t, i, n, r) {
                        if (t.$mode.completer) return t.$mode.completer.getCompletions(e, t, i, n, r);
                        var o = e.session.getState(i.row);
                        r(null, t.$mode.getCompletions(o, t, i, n))
                    }
                },
                h = {
                    getCompletions: function(e, t, i, r, o) {
                        var s = [],
                            a = t.getTokenAt(i.row, i.column);
                        a && a.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/) ? s.push("html-tag") : s = n.getActiveScopes(e);
                        var c = n.snippetMap,
                            l = [];
                        s.forEach((function(e) {
                            for (var t = c[e] || [], i = t.length; i--;) {
                                var n = t[i],
                                    r = n.name || n.tabTrigger;
                                r && l.push({
                                    caption: r,
                                    snippet: n.content,
                                    meta: n.tabTrigger && !n.name ? n.tabTrigger + "⇥ " : "snippet",
                                    type: "snippet"
                                })
                            }
                        }), this), o(null, l)
                    },
                    getDocTooltip: function(e) {
                        "snippet" == e.type && !e.docHTML && (e.docHTML = ["<b>", s.escapeHTML(e.caption), "</b>", "<hr></hr>", s.escapeHTML(e.snippet)].join(""))
                    }
                },
                u = [h, c, l];
            t.setCompleters = function(e) {
                u.length = 0, e && u.push.apply(u, e)
            }, t.addCompleter = function(e) {
                u.push(e)
            }, t.textCompleter = c, t.keyWordCompleter = l, t.snippetCompleter = h;
            var d = {
                    name: "expandSnippet",
                    exec: function(e) {
                        return n.expandWithTab(e)
                    },
                    bindKey: "Tab"
                },
                g = function(e, t) {
                    f(t.session.$mode)
                },
                f = function(e) {
                    var t = e.$id;
                    n.files || (n.files = {}), p(t), e.modes && e.modes.forEach(f)
                },
                p = function(e) {
                    if (e && !n.files[e]) {
                        var t = e.replace("mode", "snippets");
                        n.files[e] = {}, o.loadModule(t, (function(t) {
                            t && (n.files[e] = t, !t.snippets && t.snippetText && (t.snippets = n.parseSnippetFile(t.snippetText)), n.register(t.snippets || [], t.scope), t.includeScopes && (n.snippetMap[t.scope].includeScopes = t.includeScopes, t.includeScopes.forEach((function(e) {
                                p("ace/mode/" + e)
                            }))))
                        }))
                    }
                },
                m = function(e) {
                    var t = e.editor,
                        i = t.completer && t.completer.activated;
                    if ("backspace" === e.command.name) i && !a.getCompletionPrefix(t) && t.completer.detach();
                    else if ("insertstring" === e.command.name) {
                        if (a.getCompletionPrefix(t) && !i) {
                            var n = r.for(t);
                            n.autoInsert = !1, n.showPopup(t)
                        }
                    }
                },
                v = e("../editor").Editor;
            e("../config").defineOptions(v.prototype, "editor", {
                enableBasicAutocompletion: {
                    set: function(e) {
                        e ? (this.completers || (this.completers = Array.isArray(e) ? e : u), this.commands.addCommand(r.startCommand)) : this.commands.removeCommand(r.startCommand)
                    },
                    value: !1
                },
                enableLiveAutocompletion: {
                    set: function(e) {
                        e ? (this.completers || (this.completers = Array.isArray(e) ? e : u), this.commands.on("afterExec", m)) : this.commands.removeListener("afterExec", m)
                    },
                    value: !1
                },
                enableSnippets: {
                    set: function(e) {
                        e ? (this.commands.addCommand(d), this.on("changeMode", g), g(0, this)) : (this.commands.removeCommand(d), this.off("changeMode", g))
                    },
                    value: !1
                }
            })
        })), ace.require(["ace/ext/language_tools"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function(e, t, i) {
    var n = i(3),
        r = i(58),
        o = n.WeakMap;
    e.exports = "function" == typeof o && /native code/.test(r(o))
}, function(e, t, i) {
    var n = i(6),
        r = i(8),
        o = i(9),
        s = i(47);
    e.exports = n ? Object.defineProperties : function(e, t) {
        o(e);
        for (var i, n = s(t), a = n.length, c = 0; a > c;) r.f(e, i = n[c++], t[i]);
        return e
    }
}, function(e, t, i) {
    var n = i(29);
    e.exports = n("document", "documentElement")
}, function(e, t, i) {
    var n = i(10),
        r = i(30).f,
        o = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return s && "[object Window]" == o.call(e) ? function(e) {
            try {
                return r(e)
            } catch (e) {
                return s.slice()
            }
        }(e) : r(n(e))
    }
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(6),
        o = i(3),
        s = i(5),
        a = i(7),
        c = i(8).f,
        l = i(60),
        h = o.Symbol;
    if (r && "function" == typeof h && (!("description" in h.prototype) || void 0 !== h().description)) {
        var u = {},
            d = function() {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof d ? new h(e) : void 0 === e ? h() : h(e);
                return "" === e && (u[t] = !0), t
            };
        l(d, h);
        var g = d.prototype = h.prototype;
        g.constructor = d;
        var f = g.toString,
            p = "Symbol(test)" == String(h("test")),
            m = /^Symbol\((.*)\)[^)]+$/;
        c(g, "description", {
            configurable: !0,
            get: function() {
                var e = a(this) ? this.valueOf() : this,
                    t = f.call(e);
                if (s(u, e)) return "";
                var i = p ? t.slice(7, -1) : t.replace(m, "$1");
                return "" === i ? void 0 : i
            }
        }), n({
            global: !0,
            forced: !0
        }, {
            Symbol: d
        })
    }
}, function(e, t, i) {
    i(69)("iterator")
}, function(e, t, i) {
    var n = i(1),
        r = i(98);
    n({
        target: "Array",
        stat: !0,
        forced: !i(102)((function(e) {
            Array.from(e)
        }))
    }, {
        from: r
    })
}, function(e, t, i) {
    "use strict";
    var n = i(70),
        r = i(15),
        o = i(99),
        s = i(100),
        a = i(14),
        c = i(33),
        l = i(101);
    e.exports = function(e) {
        var t, i, h, u, d, g, f = r(e),
            p = "function" == typeof this ? this : Array,
            m = arguments.length,
            v = m > 1 ? arguments[1] : void 0,
            w = void 0 !== v,
            b = l(f),
            y = 0;
        if (w && (v = n(v, m > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b))
            for (i = new p(t = a(f.length)); t > y; y++) g = w ? v(f[y], y) : f[y], c(i, y, g);
        else
            for (d = (u = b.call(f)).next, i = new p; !(h = d.call(u)).done; y++) g = w ? o(u, v, [h.value, y], !0) : h.value, c(i, y, g);
        return i.length = y, i
    }
}, function(e, t, i) {
    var n = i(9);
    e.exports = function(e, t, i, r) {
        try {
            return r ? t(n(i)[0], i[1]) : t(i)
        } catch (t) {
            var o = e.return;
            throw void 0 !== o && n(o.call(e)), t
        }
    }
}, function(e, t, i) {
    var n = i(0),
        r = i(22),
        o = n("iterator"),
        s = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || s[o] === e)
    }
}, function(e, t, i) {
    var n = i(72),
        r = i(22),
        o = i(0)("iterator");
    e.exports = function(e) {
        if (null != e) return e[o] || e["@@iterator"] || r[n(e)]
    }
}, function(e, t, i) {
    var n = i(0)("iterator"),
        r = !1;
    try {
        var o = 0,
            s = {
                next: function() {
                    return {
                        done: !!o++
                    }
                },
                return: function() {
                    r = !0
                }
            };
        s[n] = function() {
            return this
        }, Array.from(s, (function() {
            throw 2
        }))
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !r) return !1;
        var i = !1;
        try {
            var o = {};
            o[n] = function() {
                return {
                    next: function() {
                        return {
                            done: i = !0
                        }
                    }
                }
            }, e(o)
        } catch (e) {}
        return i
    }
}, function(e, t, i) {
    "use strict";
    var n = i(75).IteratorPrototype,
        r = i(32),
        o = i(19),
        s = i(48),
        a = i(22),
        c = function() {
            return this
        };
    e.exports = function(e, t, i) {
        var l = t + " Iterator";
        return e.prototype = r(n, {
            next: o(1, i)
        }), s(e, l, !1, !0), a[l] = c, e
    }
}, function(e, t, i) {
    var n = i(2);
    e.exports = !n((function() {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }))
}, function(e, t, i) {
    var n = i(7);
    e.exports = function(e) {
        if (!n(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e
    }
}, function(e, t, i) {
    var n = i(29);
    e.exports = n("navigator", "userAgent") || ""
}, function(e, t, i) {
    var n = i(50),
        r = i(13),
        o = i(108);
    n || r(Object.prototype, "toString", o, {
        unsafe: !0
    })
}, function(e, t, i) {
    "use strict";
    var n = i(50),
        r = i(72);
    e.exports = n ? {}.toString : function() {
        return "[object " + r(this) + "]"
    }
}, function(e, t, i) {
    "use strict";
    var n = i(2);

    function r(e, t) {
        return RegExp(e, t)
    }
    t.UNSUPPORTED_Y = n((function() {
        var e = r("a", "y");
        return e.lastIndex = 2, null != e.exec("abcd")
    })), t.BROKEN_CARET = n((function() {
        var e = r("^r", "gy");
        return e.lastIndex = 2, null != e.exec("str")
    }))
}, function(e, t, i) {
    "use strict";
    var n = i(13),
        r = i(9),
        o = i(2),
        s = i(81),
        a = RegExp.prototype,
        c = a.toString,
        l = o((function() {
            return "/a/b" != c.call({
                source: "a",
                flags: "b"
            })
        })),
        h = "toString" != c.name;
    (l || h) && n(RegExp.prototype, "toString", (function() {
        var e = r(this),
            t = String(e.source),
            i = e.flags;
        return "/" + t + "/" + String(void 0 === i && e instanceof RegExp && !("flags" in a) ? s.call(e) : i)
    }), {
        unsafe: !0
    })
}, function(e, t, i) {
    "use strict";
    var n = i(82).charAt,
        r = i(25),
        o = i(74),
        s = r.set,
        a = r.getterFor("String Iterator");
    o(String, "String", (function(e) {
        s(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }), (function() {
        var e, t = a(this),
            i = t.string,
            r = t.index;
        return r >= i.length ? {
            value: void 0,
            done: !0
        } : (e = n(i, r), t.index += e.length, {
            value: e,
            done: !1
        })
    }))
}, function(e, t, i) {
    "use strict";
    i(53);
    var n = i(13),
        r = i(2),
        o = i(0),
        s = i(36),
        a = i(11),
        c = o("species"),
        l = !r((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        h = "$0" === "a".replace(/./, "$0"),
        u = o("replace"),
        d = !!/./ [u] && "" === /./ [u]("a", "$0"),
        g = !r((function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var i = "ab".split(e);
            return 2 !== i.length || "a" !== i[0] || "b" !== i[1]
        }));
    e.exports = function(e, t, i, u) {
        var f = o(e),
            p = !r((function() {
                var t = {};
                return t[f] = function() {
                    return 7
                }, 7 != "" [e](t)
            })),
            m = p && !r((function() {
                var t = !1,
                    i = /a/;
                return "split" === e && ((i = {}).constructor = {}, i.constructor[c] = function() {
                    return i
                }, i.flags = "", i[f] = /./ [f]), i.exec = function() {
                    return t = !0, null
                }, i[f](""), !t
            }));
        if (!p || !m || "replace" === e && (!l || !h || d) || "split" === e && !g) {
            var v = /./ [f],
                w = i(f, "" [e], (function(e, t, i, n, r) {
                    return t.exec === s ? p && !r ? {
                        done: !0,
                        value: v.call(t, i, n)
                    } : {
                        done: !0,
                        value: e.call(i, t, n)
                    } : {
                        done: !1
                    }
                }), {
                    REPLACE_KEEPS_$0: h,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
                }),
                b = w[0],
                y = w[1];
            n(String.prototype, e, b), n(RegExp.prototype, f, 2 == t ? function(e, t) {
                return y.call(e, this, t)
            } : function(e) {
                return y.call(e, this)
            })
        }
        u && a(RegExp.prototype[f], "sham", !0)
    }
}, function(e, t, i) {
    var n = i(9),
        r = i(49),
        o = i(0)("species");
    e.exports = function(e, t) {
        var i, s = n(e).constructor;
        return void 0 === s || null == (i = n(s)[o]) ? t : r(i)
    }
}, function(e, t, i) {
    "use strict";
    var n = i(82).charAt;
    e.exports = function(e, t, i) {
        return t + (i ? n(e, t).length : 1)
    }
}, function(e, t, i) {
    var n = i(17),
        r = i(36);
    e.exports = function(e, t) {
        var i = e.exec;
        if ("function" == typeof i) {
            var o = i.call(e, t);
            if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== n(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return r.call(e, t)
    }
}, function(e, t, i) {
    var n = i(3),
        r = i(85),
        o = i(73),
        s = i(11),
        a = i(0),
        c = a("iterator"),
        l = a("toStringTag"),
        h = o.values;
    for (var u in r) {
        var d = n[u],
            g = d && d.prototype;
        if (g) {
            if (g[c] !== h) try {
                s(g, c, h)
            } catch (e) {
                g[c] = h
            }
            if (g[l] || s(g, l, u), r[u])
                for (var f in o)
                    if (g[f] !== o[f]) try {
                        s(g, f, o[f])
                    } catch (e) {
                        g[f] = o[f]
                    }
        }
    }
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(21).find,
        o = i(51),
        s = i(12),
        a = !0,
        c = s("find");
    "find" in [] && Array(1).find((function() {
        a = !1
    })), n({
        target: "Array",
        proto: !0,
        forced: a || !c
    }, {
        find: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("find")
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(43).indexOf,
        o = i(34),
        s = i(12),
        a = [].indexOf,
        c = !!a && 1 / [1].indexOf(1, -0) < 0,
        l = o("indexOf"),
        h = s("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    n({
        target: "Array",
        proto: !0,
        forced: c || !l || !h
    }, {
        indexOf: function(e) {
            return c ? a.apply(this, arguments) || 0 : r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(21).map,
        o = i(35),
        s = i(12),
        a = o("map"),
        c = s("map");
    n({
        target: "Array",
        proto: !0,
        forced: !a || !c
    }, {
        map: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(2),
        o = i(31),
        s = i(7),
        a = i(15),
        c = i(14),
        l = i(33),
        h = i(71),
        u = i(35),
        d = i(0),
        g = i(79),
        f = d("isConcatSpreadable"),
        p = g >= 51 || !r((function() {
            var e = [];
            return e[f] = !1, e.concat()[0] !== e
        })),
        m = u("concat"),
        v = function(e) {
            if (!s(e)) return !1;
            var t = e[f];
            return void 0 !== t ? !!t : o(e)
        };
    n({
        target: "Array",
        proto: !0,
        forced: !p || !m
    }, {
        concat: function(e) {
            var t, i, n, r, o, s = a(this),
                u = h(s, 0),
                d = 0;
            for (t = -1, n = arguments.length; t < n; t++)
                if (o = -1 === t ? s : arguments[t], v(o)) {
                    if (d + (r = c(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (i = 0; i < r; i++, d++) i in o && l(u, d, o[i])
                } else {
                    if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    l(u, d++, o)
                } return u.length = d, u
        }
    })
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(43).includes,
        o = i(51);
    n({
        target: "Array",
        proto: !0,
        forced: !i(12)("indexOf", {
            ACCESSORS: !0,
            1: 0
        })
    }, {
        includes: function(e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(123).left,
        o = i(34),
        s = i(12),
        a = o("reduce"),
        c = s("reduce", {
            1: 0
        });
    n({
        target: "Array",
        proto: !0,
        forced: !a || !c
    }, {
        reduce: function(e) {
            return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, t, i) {
    var n = i(49),
        r = i(15),
        o = i(24),
        s = i(14),
        a = function(e) {
            return function(t, i, a, c) {
                n(i);
                var l = r(t),
                    h = o(l),
                    u = s(l.length),
                    d = e ? u - 1 : 0,
                    g = e ? -1 : 1;
                if (a < 2)
                    for (;;) {
                        if (d in h) {
                            c = h[d], d += g;
                            break
                        }
                        if (d += g, e ? d < 0 : u <= d) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? d >= 0 : u > d; d += g) d in h && (c = i(c, h[d], d, l));
                return c
            }
        };
    e.exports = {
        left: a(!1),
        right: a(!0)
    }
}, function(e, t, i) {
    "use strict";
    var n = i(1),
        r = i(125),
        o = i(18);
    n({
        target: "String",
        proto: !0,
        forced: !i(126)("includes")
    }, {
        includes: function(e) {
            return !!~String(o(this)).indexOf(r(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, t, i) {
    var n = i(84);
    e.exports = function(e) {
        if (n(e)) throw TypeError("The method doesn't accept regular expressions");
        return e
    }
}, function(e, t, i) {
    var n = i(0)("match");
    e.exports = function(e) {
        var t = /./;
        try {
            "/./" [e](t)
        } catch (i) {
            try {
                return t[n] = !1, "/./" [e](t)
            } catch (e) {}
        }
        return !1
    }
}, function(e, t, i) {
    var n = i(1),
        r = i(2),
        o = i(10),
        s = i(16).f,
        a = i(6),
        c = r((function() {
            s(1)
        }));
    n({
        target: "Object",
        stat: !0,
        forced: !a || c,
        sham: !a
    }, {
        getOwnPropertyDescriptor: function(e, t) {
            return s(o(e), t)
        }
    })
}, function(e, t, i) {
    var n = i(1),
        r = i(6),
        o = i(61),
        s = i(10),
        a = i(16),
        c = i(33);
    n({
        target: "Object",
        stat: !0,
        sham: !r
    }, {
        getOwnPropertyDescriptors: function(e) {
            for (var t, i, n = s(e), r = a.f, l = o(n), h = {}, u = 0; l.length > u;) void 0 !== (i = r(n, t = l[u++])) && c(h, t, i);
            return h
        }
    })
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/textmate", [], (function(e, t, i) {
            "use strict";
            t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', t.$id = "ace/theme/textmate", e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/textmate"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/eclipse", [], (function(e, t, i) {
            "use strict";
            t.isDark = !1, t.cssText = '.ace-eclipse .ace_gutter {background: #ebebeb;border-right: 1px solid rgb(159, 159, 159);color: rgb(136, 136, 136);}.ace-eclipse .ace_print-margin {width: 1px;background: #ebebeb;}.ace-eclipse {background-color: #FFFFFF;color: black;}.ace-eclipse .ace_fold {background-color: rgb(60, 76, 114);}.ace-eclipse .ace_cursor {color: black;}.ace-eclipse .ace_storage,.ace-eclipse .ace_keyword,.ace-eclipse .ace_variable {color: rgb(127, 0, 85);}.ace-eclipse .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-eclipse .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-eclipse .ace_function {color: rgb(60, 76, 114);}.ace-eclipse .ace_string {color: rgb(42, 0, 255);}.ace-eclipse .ace_comment {color: rgb(113, 150, 130);}.ace-eclipse .ace_comment.ace_doc {color: rgb(63, 95, 191);}.ace-eclipse .ace_comment.ace_doc.ace_tag {color: rgb(127, 159, 191);}.ace-eclipse .ace_constant.ace_numeric {color: darkblue;}.ace-eclipse .ace_tag {color: rgb(25, 118, 116);}.ace-eclipse .ace_type {color: rgb(127, 0, 127);}.ace-eclipse .ace_xml-pe {color: rgb(104, 104, 91);}.ace-eclipse .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-eclipse .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-eclipse .ace_meta.ace_tag {color:rgb(25, 118, 116);}.ace-eclipse .ace_invisible {color: #ddd;}.ace-eclipse .ace_entity.ace_other.ace_attribute-name {color:rgb(127, 0, 127);}.ace-eclipse .ace_marker-layer .ace_step {background: rgb(255, 255, 0);}.ace-eclipse .ace_active-line {background: rgb(232, 242, 254);}.ace-eclipse .ace_gutter-active-line {background-color : #DADADA;}.ace-eclipse .ace_marker-layer .ace_selected-word {border: 1px solid rgb(181, 213, 255);}.ace-eclipse .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', t.cssClass = "ace-eclipse", e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/eclipse"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/monokai", [], (function(e, t, i) {
            t.isDark = !0, t.cssClass = "ace-monokai", t.cssText = ".ace-monokai .ace_gutter {background: #2F3129;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #272822;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #49483E}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #202020}.ace-monokai .ace_gutter-active-line {background-color: #272727}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}", e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/monokai"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/ambiance", [], (function(e, t, i) {
            t.isDark = !0, t.cssClass = "ace-ambiance", t.cssText = ".ace-ambiance .ace_gutter {background-color: #3d3d3d;background-image: linear-gradient(left, #3D3D3D, #333);background-repeat: repeat-x;border-right: 1px solid #4d4d4d;text-shadow: 0px 1px 1px #4d4d4d;color: #222;}.ace-ambiance .ace_gutter-layer {background: repeat left top;}.ace-ambiance .ace_gutter-active-line {background-color: #3F3F3F;}.ace-ambiance .ace_fold-widget {text-align: center;}.ace-ambiance .ace_fold-widget:hover {color: #777;}.ace-ambiance .ace_fold-widget.ace_start,.ace-ambiance .ace_fold-widget.ace_end,.ace-ambiance .ace_fold-widget.ace_closed{background: none !important;border: none;box-shadow: none;}.ace-ambiance .ace_fold-widget.ace_start:after {content: '▾'}.ace-ambiance .ace_fold-widget.ace_end:after {content: '▴'}.ace-ambiance .ace_fold-widget.ace_closed:after {content: '‣'}.ace-ambiance .ace_print-margin {border-left: 1px dotted #2D2D2D;right: 0;background: #262626;}.ace-ambiance .ace_scroller {-webkit-box-shadow: inset 0 0 10px black;-moz-box-shadow: inset 0 0 10px black;-o-box-shadow: inset 0 0 10px black;box-shadow: inset 0 0 10px black;}.ace-ambiance {color: #E6E1DC;background-color: #202020;}.ace-ambiance .ace_cursor {border-left: 1px solid #7991E8;}.ace-ambiance .ace_overwrite-cursors .ace_cursor {border: 1px solid #FFE300;background: #766B13;}.ace-ambiance.normal-mode .ace_cursor-layer {z-index: 0;}.ace-ambiance .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20);}.ace-ambiance .ace_marker-layer .ace_selected-word {border-radius: 4px;border: 8px solid #3f475d;box-shadow: 0 0 4px black;}.ace-ambiance .ace_marker-layer .ace_step {background: rgb(198, 219, 174);}.ace-ambiance .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25);}.ace-ambiance .ace_marker-layer .ace_active-line {background: rgba(255, 255, 255, 0.031);}.ace-ambiance .ace_invisible {color: #333;}.ace-ambiance .ace_paren {color: #24C2C7;}.ace-ambiance .ace_keyword {color: #cda869;}.ace-ambiance .ace_keyword.ace_operator {color: #fa8d6a;}.ace-ambiance .ace_punctuation.ace_operator {color: #fa8d6a;}.ace-ambiance .ace_identifier {}.ace-ambiance .ace-statement {color: #cda869;}.ace-ambiance .ace_constant {color: #CF7EA9;}.ace-ambiance .ace_constant.ace_language {color: #CF7EA9;}.ace-ambiance .ace_constant.ace_library {}.ace-ambiance .ace_constant.ace_numeric {color: #78CF8A;}.ace-ambiance .ace_invalid {text-decoration: underline;}.ace-ambiance .ace_invalid.ace_illegal {color:#F8F8F8;background-color: rgba(86, 45, 86, 0.75);}.ace-ambiance .ace_invalid,.ace-ambiance .ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1;}.ace-ambiance .ace_support {color: #9B859D;}.ace-ambiance .ace_support.ace_function {color: #DAD085;}.ace-ambiance .ace_function.ace_buildin {color: #9b859d;}.ace-ambiance .ace_string {color: #8f9d6a;}.ace-ambiance .ace_string.ace_regexp {color: #DAD085;}.ace-ambiance .ace_comment {font-style: italic;color: #555;}.ace-ambiance .ace_comment.ace_doc {}.ace-ambiance .ace_comment.ace_doc.ace_tag {color: #666;font-style: normal;}.ace-ambiance .ace_definition,.ace-ambiance .ace_type {color: #aac6e3;}.ace-ambiance .ace_variable {color: #9999cc;}.ace-ambiance .ace_variable.ace_language {color: #9b859d;}.ace-ambiance .ace_xml-pe {color: #494949;}.ace-ambiance .ace_gutter-layer,.ace-ambiance .ace_text-layer {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAQAAAAHUWYVAABFFUlEQVQYGbzBCeDVU/74/6fj9HIcx/FRHx9JCFmzMyGRURhLZIkUsoeRfUjS2FNDtr6WkMhO9sm+S8maJfu+Jcsg+/o/c+Z4z/t97/vezy3z+z8ekGlnYICG/o7gdk+wmSHZ1z4pJItqapjoKXWahm8NmV6eOTbWUOp6/6a/XIg6GQqmenJ2lDHyvCFZ2cBDbmtHA043VFhHwXxClWmeYAdLhV00Bd85go8VmaFCkbVkzlQENzfBDZ5gtN7HwF0KDrTwJ0dypSOzpaKCMwQHKTIreYIxlmhXTzTWkVm+LTynZhiSBT3RZQ7aGfjGEd3qyXQ1FDymqbKxpspERQN2MiRjNZlFFQXfCNFm9nM1zpAsoYjmtRTc5ajwuaXc5xrWskT97RaKzAGe5ARHhVUsDbjKklziiX5WROcJwSNCNI+9w1Jwv4Zb2r7lCMZ4oq5C0EdTx+2GzNuKpJ+iFf38JEWkHJn9DNF7mmBDITrWEg0VWL3pHU20tSZnuqWu+R3BtYa8XxV1HO7GyD32UkOpL/yDloINFTmvtId+nmAjxRw40VMwVKiwrKLE4bK5UOVntYwhOcSSXKrJHKPJedocpGjVz/ZMIbnYUPB10/eKCrs5apqpgVmWzBYWpmtKHecJPjaUuEgRDDaU0oZghCJ6zNMQ5ZhDYx05r5v2muQdM0EILtXUsaKiQX9WMEUotagQzFbUNN6NUPC2nm5pxEWGCjMc3GdJHjSU2kORLK/JGSrkfGEIjncU/CYUnOipoYemwj8tST9NsJmB7TUVXtbUtXATJVZXBMvYeTXJfobgJUPmGMP/yFaWonaa6BcFO3nqcIqCozSZoZoSr1g4zJOzuyGnxTEX3lUEJ7WcZgme8ddaWvWJo2AJR9DZU3CUIbhCSG6ybSwN6qtJVnCU2svDTP2ZInOw2cBTrqtQahtNZn9NcJ4l2NaSmSkkP1noZWnVwkLmdUPOwLZEwy2Z3S3R+4rIG9hcbpPXHFVWcQdZkn2FOta3cKWQnNRC5g1LsJah4GCzSVsKnCOY5OAFRTBekyyryeyilhFKva75r4Mc0aWanGEaThcy31s439KKxTzJYY5WTHPU1FtIHjQU3Oip4xlNzj/lBw23dYZVliQa7WAXf4shetcQfatI+jWRDBPmyNeW6A1P5kdDgyYJlba0BIM8BZu1JfrFwItyjcAMR3K0BWOIrtMEXyhyrlVEx3ui5dUBjmB/Q3CXW85R4mBD0s7B+4q5tKUjOlb9qqmhi5AZ6GFIC5HXtOobdYGlVdMVbNJ8toNTFcHxnoL+muBagcctjWnbNMuR00uI7nQESwg5q2qqrKWIfrNUmeQocY6HuyxJV02wj36w00yhpmUFenv4p6fUkZYqLyuinx2RGOjhCXYyJF84oiU00YMOOhhquNdfbOB7gU88pY4xJO8LVdp6/q2voeB4R04vIdhSE40xZObx1HGGJ/ja0LBthFInKaLPPFzuCaYaoj8JjPME8yoyxo6zlBqkiUZYgq00OYMswbWO5NGmq+xhipxHLRW29ARjNKXO0wRnear8XSg4XFPLKEPUS1GqvyLwiuBUoa7zpZ0l5xxFwWmWZC1H5h5FwU8eQ7K+g8UcVY6TMQreVQT/8uQ8Z+ALIXnSEa2pYZQneE9RZbSBNYXfWYJzW/h/4j4Dp1tYVcFIC5019Vyi4ThPqSFCzjGWaHQTBU8q6vrVwgxP9Lkm840imWKpcLCjYTtrKuwvsKSnrvHCXGkSMk9p6lhckfRpIeis+N2PiszT+mFLspyGleUhDwcLrZqmyeylxwjBcKHEapqkmyangyLZRVOijwOtCY5SsG5zL0OwlCJ4y5KznF3EUNDDrinwiyLZRzOXtlBbK5ITHFGLp8Q0R6ab6mS7enI2cFrxOyHvOCFaT1HThS1krjCwqWeurCkk+willhCC+RSZnRXBiZaC5RXRIZYKp2lyfrHwiKPKR0JDzrdU2EFgpidawlFDR6FgXUMNa+g1FY3bUQh2cLCwosRdnuQTS/S+JVrGLeWIvtQUvONJxlqSQYYKpwoN2kaocLjdVsis4Mk80ESF2YpSkzwldjHkjFCUutI/r+EHDU8oCs6yzL3PhWiEooZdFMkymlas4AcI3KmoMMNSQ3tHzjGWCrcJJdYyZC7QFGwjRL9p+MrRkAGWzIaWCn9W0F3TsK01c2ZvQw0byvxuQU0r1lM0qJO7wW0kRIMdDTtXEdzi4VIh+EoIHm0mWtAtpCixlabgn83fKTI7anJe9ST7WIK1DMGpQmYeA58ImV6ezOGOzK2Kgq01pd60cKWiUi9Lievb/0vIDPHQ05Kzt4ddPckQBQtoaurjyHnek/nKzpQLrVgKPjIkh2v4uyezpv+Xoo7fPFXaGFp1vaLKxQ4uUpQQS5VuQs7BCq4xRJv7fwpVvvFEB3j+620haOuocqMhWd6TTPAEx+mdFNGHdranFe95WrWmIvlY4F1Dle2ECgc6cto7SryuqGGGha0tFQ5V53migUKmg6XKAo4qS3mik+0OZpAhOLeZKicacgaYcyx5hypYQE02ZA4xi/pNhOQxR4klNKyqacj+mpxnLTnnGSo85++3ZCZq6lrZkXlGEX3o+C9FieccJbZWVFjC0Yo1FZnJhoYMFoI1hEZ9r6hwg75HwzBNhbZCdJEfJwTPGzJvaKImw1yYX1HDAmpXR+ZJQ/SmgqMNVQb5vgamGwLtt7VwvP7Qk1xpiM5x5Cyv93E06MZmgs0Nya2azIKOYKCGBQQW97RmhKNKF02JZqHEJ4o58qp7X5EcZmc56trXEqzjCBZ1MFGR87Ql2tSTs6CGxS05PTzRQorkbw7aKoKXFDXsYW42VJih/q+FP2BdTzDTwVqOYB13liM50vG7wy28qagyuIXMeQI/Oqq8bcn5wJI50xH00CRntyfpL1T4hydYpoXgNiFzoIUTDZnLNRzh4TBHwbYGDvZkxmlyJloyr6tRihpeUG94GnKtIznREF0tzJG/OOr73JBcrSh1k6WuTprgLU+mnSGnv6Zge0NNz+kTDdH8nuAuTdJDCNb21LCiIuqlYbqGzT3RAoZofQfjFazkqeNWdYaGvYTM001EW2oKPvVk1ldUGSgUtHFwjKM1h9jnFcmy5lChoLNaQMGGDsYbKixlaMBmmsx1QjCfflwTfO/gckW0ruZ3jugKR3R5W9hGUWqCgxuFgsuaCHorotGKzGaeZB9DMsaTnKCpMtwTvOzhYk0rdrArKCqcaWmVk1+F372ur1YkKxgatI8Qfe1gIX9wE9FgS8ESmuABIXnRUbCapcKe+nO7slClSZFzpV/LkLncEb1qiO42fS3R855Su2mCLh62t1SYZZYVmKwIHjREF2uihTzB20JOkz7dkxzYQnK0UOU494wh+VWRc6Un2kpTaVgLDFEkJ/uhzRcI0YKGgpGWOlocBU/a4fKoJ/pEaNV6jip3+Es9VXY078rGnmAdf7t9ylPXS34RBSuYPs1UecZTU78WanhBCHpZ5sAoTz0LGZKjPf9TRypqWEiTvOFglL1fCEY3wY/++rbk7C8bWebA6p6om6PgOL2kp44TFJlVNBXae2rqqdZztOJpT87GQsE9jqCPIe9VReZuQ/CIgacsyZdCpIScSYqcZk8r+nsyCzhyfhOqHGOIvrLknC8wTpFcaYiGC/RU1NRbUeUpocQOnkRpGOrIOcNRx+1uA0UrzhSSt+VyS3SJpnFWkzNDqOFGIWcfR86DnmARTQ1HKIL33ExPiemeOhYSSjzlSUZZuE4TveoJLnBUOFof6KiysCbnAEcZgcUNTDOwkqWu3RWtmGpZwlHhJENdZ3miGz0lJlsKnjbwqSHQjpxnFDlTLLwqJPMZMjd7KrzkSG7VsxXBZE+F8YZkb01Oe00yyRK9psh5SYh29ySPKBo2ylNht7ZkZnsKenjKNJu9PNEyZpaCHv4Kt6RQsLvAVp7M9kIimmCUwGeWqLMmGuIotYMmWNpSahkhZw9FqZsVnKJhsjAHvtHMsTM9fCI06Dx/u3vfUXCqfsKRc4oFY2jMsoo/7DJDwZ1CsIKnJu+J9ldkpmiCxQx1rWjI+T9FwcWWzOuaYH0Hj7klNRVWEQpmaqosakiGNTFHdjS/qnUdmf0NJW5xsL0HhimCCZZSRzmSPTXJQ4aaztAwtZnoabebJ+htCaZ7Cm535ByoqXKbX1WRc4Eh2MkRXWzImVc96Cj4VdOKVxR84VdQsIUM8Psoou2byVHyZFuq7O8otbSQ2UAoeEWTudATLGSpZzVLlXVkPU2Jc+27lsw2jmg5T5VhbeE3BT083K9WsTTkFU/Osi0rC5lRlpwRHUiesNS0sOvmqGML1aRbPAxTJD9ZKtxuob+hhl8cwYGWpJ8nub7t5p6coYbMovZ1BTdaKn1jYD6h4GFDNFyT/Kqe1XCXphXHOKLZmuRSRdBPEfVUXQzJm5YGPGGJdvAEr7hHNdGZnuBvrpciGmopOLf5N0uVMy0FfYToJk90uUCbJupaVpO53UJXR2bVpoU00V2KOo4zMFrBd0Jtz2pa0clT5Q5L8IpQ177mWQejPMEJhuQjS10ref6HHjdEhy1P1EYR7GtO0uSsKJQYLiTnG1rVScj5lyazpqWGl5uBbRWl7m6ixGOOnEsMJR7z8J0n6KMnCdxhiNYQCoZ6CmYLnO8omC3MkW3bktlPmEt/VQQHejL3+dOE5FlPdK/Mq8hZxxJtLyRrepLThYKbLZxkSb5W52vYxNOaOxUF0yxMUPwBTYqCzy01XayYK0sJyWBLqX0MwU5CzoymRzV0EjjeUeLgDpTo6ij42ZAzvD01dHUUTPLU96MdLbBME8nFBn7zJCMtJcZokn8YoqU0FS5WFKyniHobguMcmW8N0XkWZjkyN3hqOMtS08r+/xTBwpZSZ3qiVRX8SzMHHjfUNFjgHEPmY9PL3ykEzxkSre/1ZD6z/NuznuB0RcE1TWTm9zRgfUWVJiG6yrzgmWPXC8EAR4Wxhlad0ZbgQyEz3pG5RVEwwDJH2mgKpjcTiCOzn1lfUWANFbZ2BA8balnEweJC9J0iuaeZoI+ippFCztEKVvckR2iice1JvhVytrQwUAZpgsubCPaU7xUe9vWnaOpaSBEspalykhC9bUlOMpT42ZHca6hyrqKmw/wMR8H5ZmdFoBVJb03O4UL0tSNnvIeRmkrLWqrs78gcrEn2tpcboh0UPOW3UUR9PMk4T4nnNKWmCjlrefhCwxRNztfmIQVdDElvS4m1/WuOujoZCs5XVOjtKPGokJzsYCtFYoWonSPT21DheU/wWhM19FcElwqNGOsp9Q8N/cwXaiND1MmeL1Q5XROtYYgGeFq1aTMsoMmcrKjQrOFQTQ1fmBYhmW6o8Jkjc7iDJRTBIo5kgJD5yMEYA3srCg7VFKwiVJkmRCc5ohGOKhsYMn/XBLdo5taZjlb9YAlGWRimqbCsoY7HFAXLa5I1HPRxMMsQDHFkWtRNniqT9UEeNjcE7RUlrCJ4R2CSJuqlKHWvJXjAUNcITYkenuBRB84TbeepcqTj3zZyFJzgYQdHnqfgI0ddUwS6GqWpsKWhjq9cV0vBAEMN2znq+EBfIWT+pClYw5xsTlJU6GeIBsjGmmANTzJZiIYpgrM0Oa8ZMjd7NP87jxhqGOhJlnQtjuQpB+8aEE00wZFznSJPyHxgH3HkPOsJFvYk8zqCHzTs1BYOa4J3PFU+UVRZxlHDM4YavlNUuMoRveiZA2d7grMNc2g+RbSCEKzmgYsUmWmazFJyoiOZ4KnyhKOGRzWJa0+moyV4TVHDzn51Awtqaphfk/lRQ08FX1iiqxTB/kLwd0VynKfEvI6cd4XMV5bMhZ7gZUWVzYQ6Nm2BYzxJbw3bGthEUUMfgbGeorae6DxHtJoZ6alhZ0+ytiVoK1R4z5PTrOECT/SugseEOlb1MMNR4VRNcJy+V1Hg9ONClSZFZjdHlc6W6FBLdJja2MC5hhpu0DBYEY1TFGwiFAxRRCsYkiM9JRb0JNMVkW6CZYT/2EiTGWmo8k+h4FhDNE7BvppoTSFnmCV5xZKzvcCdDo7VVPnIU+I+Rc68juApC90MwcFCsJ5hDqxgScYKreruyQwTqrzoqDCmhWi4IbhB0Yrt3RGa6GfDv52rKXWhh28dyZaWUvcZeMTBaZoSGyiCtRU5J8iviioHaErs7Jkj61syVzTTgOcUOQ8buFBTYWdL5g3T4qlpe0+wvD63heAXRfCCIed9RbCsp2CiI7raUOYOTU13N8PNHvpaGvayo4a3LLT1lDrVEPT2zLUlheB1R+ZTRfKWJ+dcocLJfi11vyJ51lLqJ0WD7tRwryezjiV5W28uJO9qykzX8JDe2lHl/9oyBwa2UMfOngpXCixvKdXTk3wrsKmiVYdZIqsoWEERjbcUNDuiaQomGoIbFdEHmsyWnuR+IeriKDVLnlawlyNHKwKlSU631PKep8J4Q+ayjkSLKYLhalNHlYvttb6fHm0p6OApsZ4l2VfdqZkjuysy6ysKLlckf1KUutCTs39bmCgEyyoasIWlVaMF7mgmWtBT8Kol5xpH9IGllo8cJdopcvZ2sImlDmMIbtDk3KIpeNiS08lQw11NFPTwVFlPP6pJ2gvRfI7gQUfmNAtf6Gs0wQxDsKGlVBdF8rCa3jzdwMaGHOsItrZk7hAyOzpK9VS06j5F49b0VNGOOfKs3lDToMsMBe9ZWtHFEgxTJLs7qrygKZjUnmCYoeAqeU6jqWuLJup4WghOdvCYJnrSkSzoyRkm5M2StQwVltPkfCAk58tET/CSg+8MUecmotMEnhBKfWBIZsg2ihruMJQaoIm+tkTLKEqspMh00w95gvFCQRtDwTT1gVDDSEVdlwqZfxoQRbK0g+tbiBZxzKlpnpypejdDwTaeOvorMk/IJE10h9CqRe28hhLbe0pMsdSwv4ZbhKivo2BjDWfL8UKJgeavwlwb5KlwhyE4u4XkGE2ytZCznKLCDZZq42VzT8HLCrpruFbIfOIINmh/qCdZ1ZBc65kLHR1Bkyf5zn6pN3SvGKIlFNGplhrO9QSXanLOMQTLCa0YJCRrCZm/CZmrLTm7WzCK4GJDiWUdFeYx1LCFg3NMd0XmCuF3Y5rITLDUsYS9zoHVzwnJoYpSTQoObyEzr4cFBNqYTopoaU/wkyLZ2lPhX/5Y95ulxGTV7KjhWrOZgl8MyUUafjYraNjNU1N3IWcjT5WzWqjwtoarHSUObGYO3GCJZpsBlnJGPd6ZYLyl1GdCA2625IwwJDP8GUKymbzuyPlZlvTUsaUh5zFDhRWFzPKKZLAlWdcQbObgF9tOqOsmB1dqcqYJmWstFbZRRI9poolmqiLnU0POvxScpah2iSL5UJNzgScY5+AuIbpO0YD3NCW+dLMszFSdFCWGqG6eVq2uYVNDdICGD6W7EPRWZEY5gpsE9rUkS3mijzzJnm6UpUFXG1hCUeVoS5WfNcFpblELL2qqrCvMvRfd45oalvKU2tiQ6ePJOVMRXase9iTtLJztPxJKLWpo2CRDcJwn2sWSLKIO1WQWNTCvpVUvOZhgSC40JD0dOctaSqzkCRbXsKlb11Oip6PCJ0IwSJM31j3akRxlP7Rwn6aGaUL0qiLnJkvB3xWZ2+Q1TfCwpQH3G0o92UzmX4o/oJNQMMSQc547wVHhdk+VCw01DFYEnTxzZKAm74QmeNNR1w6WzEhNK15VJzuCdxQ53dRUDws5KvwgBMOEgpcVNe0hZI6RXT1Jd0cyj5nsaEAHgVmGaJIlWdsc5Ui2ElrRR6jrRAttNMEAIWrTDFubkZaok7/AkzfIwfuWVq0jHzuCK4QabtLUMVPB3kJ0oyHTSVFlqMALilJf2Rf8k5aaHtMfayocLBS8L89oKoxpJvnAkDPa0qp5DAUTHKWmCcnthlou8iCKaFFLHWcINd1nyIwXqrSxMNmSs6KmoL2QrKuWtlQ5V0120xQ5vRyZS1rgFkWwhiOwiuQbR0OOVhQM9iS3tiXp4RawRPMp5tDletOOBL95MpM01dZTBM9pkn5qF010rIeHFcFZhmSGpYpTsI6nwhqe5C9ynhlpp5ophuRb6WcJFldkVnVEwwxVfrVkvnWUuNLCg5bgboFHPDlDPDmnK7hUrWiIbjadDclujlZcaokOFup4Ri1kacV6jmrrK1hN9bGwpKEBQ4Q6DvIUXOmo6U5LqQM6EPyiKNjVkPnJkDPNEaxhiFay5ExW1NXVUGqcpYYdPcGiCq7z/TSlbhL4pplWXKd7NZO5QQFrefhRQW/NHOsqcIglc4UhWklR8K0QzbAw08CBDnpbgqXdeD/QUsM4RZXDFBW6WJKe/mFPdH0LtBgiq57wFLzlyQzz82qYx5D5WJP5yVJDW01BfyHnS6HKO/reZqId1WGa4Hkh2kWodJ8i6KoIPlAj2hPt76CzXsVR6koPRzWTfKqIentatYpQw2me4AA3y1Kind3SwoOKZDcFXTwl9tWU6mfgRk9d71sKtlNwrjnYw5tC5n5LdKiGry3JKNlHEd3oaMCFHrazBPMp/uNJ+V7IudcSbeOIdjUEdwl0VHCOZo5t6YluEuaC9mQeMgSfOyKnYGFHcIeQ84yQWbuJYJpZw5CzglDH7gKnWqqM9ZTaXcN0TeYhR84eQtJT76JJ1lREe7WnnvsMmRc9FQ7SBBM9mV3lCUdmHk/S2RAMt0QjFNFqQpWjDPQ01DXWUdDBkXziKPjGEP3VP+zIWU2t7im41FOloyWzn/L6dkUy3VLDaZ6appgDLHPjJEsyvJngWEPUyVBiAaHCTEXwrLvSEbV1e1gKJniicWorC1MUrVjB3uDhJE/wgSOzk1DXpk0k73qCM8xw2UvD5kJmDUfOomqMpWCkJRlvKXGmoeBm18USjVIk04SClxTB6YrgLAPLWYK9HLUt5cmc0vYES8GnTeRc6skZbQkWdxRsIcyBRzx1DbTk9FbU0caTPOgJHhJKnOGIVhQqvKmo0llRw9sabrZkDtdg3PqaKi9oatjY8B+G371paMg6+mZFNNtQ04mWBq3rYLOmtWWQp8KJnpy9DdFensyjdqZ+yY40VJlH8wcdLzC8PZnvHMFUTZUrDTkLyQaGus5X5LzpYAf3i+e/ZlhqGqWhh6Ou6xTR9Z6oi5AZZtp7Mj2EEm8oSpxiYZCHU/1fbGdNNNRRoZMhmilEb2gqHOEJDtXkHK/JnG6IrvbPCwV3NhONVdS1thBMs1T4QOBcTWa2IzhMk2nW5Kyn9tXUtpv9RsG2msxk+ZsQzRQacJncpgke0+T8y5Fzj8BiGo7XlJjaTIlpQs7KFjpqGnKuoyEPeIKnFMkZHvopgh81ySxNFWvJWcKRs70j2FOT012IllEEO1n4pD1513Yg2ssQPOThOkvyrqHUdEXOSEsihmBbTbKX1kLBPWqWkLOqJbjB3GBIZmoa8qWl4CG/iZ7oiA72ZL7TJNeZUY7kFQftDcHHluBzRbCegzMtrRjVQpX2lgoPKKLJAkcbMl01XK2p7yhL8pCBbQ3BN2avJgKvttcrWDK3CiUOVxQ8ZP+pqXKyIxnmBymCg5vJjNfkPK4+c8cIfK8ocVt7kmfd/I5SR1hKvCzUtb+lhgc00ZaO6CyhIQP1Uv4yIZjload72PXX0OIJvnFU+0Zf6MhsJwTfW0r0UwQfW4LNLZl5HK261JCZ4qnBaAreVAS3WrjV0LBnNDUNNDToCEeFfwgcb4gOEqLRhirWkexrCEYKVV711DLYEE1XBEsp5tpTGjorkomKYF9FDXv7fR3BGwbettSxnyL53MBPjsxDZjMh+VUW9NRxq1DhVk+FSxQcaGjV9Pawv6eGByw5qzoy7xk4RsOShqjJwWKe/1pEEfzkobeD/dQJmpqedcyBTy2sr4nGNRH0c0SPWTLrqAc0OQcb/gemKgqucQT7ySWKCn2EUotoCvpZct7RO2sy/QW0IWcXd7pQRQyZVwT2USRO87uhjioTLKV2brpMUcMQRbKH/N2T+UlTpaMls6cmc6CCNy3JdYYSUzzJQ4oSD3oKLncULOiJvjBEC2oqnCJkJluCYy2ZQ5so9YYlZ1VLlQU1mXEW1jZERwj/MUSRc24TdexlqLKfQBtDTScJUV8FszXBEY5ktpD5Ur9hYB4Nb1iikw3JoYpkKX+RodRKFt53MMuRnKSpY31PwYaGaILh3wxJGz9TkTPEETxoCWZrgvOlmyMzxFEwVJE5xZKzvyJ4WxEc16Gd4Xe3Weq4XH2jKRikqOkGQ87hQnC7wBmGYLAnesX3M+S87eFATauuN+Qcrh7xIxXJbUIdMw3JGE3ylCWzrieaqCn4zhGM19TQ3z1oH1AX+pWEqIc7wNGAkULBo/ZxRaV9NNyh4Br3rCHZzbzmSfawBL0dNRwpW1kK9mxPXR9povcdrGSZK9c2k0xwFGzjuniCtRSZCZ6ccZ7gaktmgAOtKbG/JnOkJrjcQTdFMsxRQ2cLY3WTIrlCw1eWKn8R6pvt4GFDso3QoL4a3nLk3G6JrtME3dSenpx7PNFTmga0EaJTLQ061sEeQoWXhSo9LTXsaSjoJQRXeZLtDclbCrYzfzHHeaKjHCVOUkQHO3JeEepr56mhiyaYYKjjNU+Fed1wS5VlhWSqI/hYUdDOkaxiKehoyOnrCV5yBHtbWFqTHCCwtpDcYolesVR5yUzTZBb3RNMd0d6WP+SvhuBmRcGxnuQzT95IC285cr41cLGQ6aJJhmi4TMGempxeimBRQw1tFKV+8jd6KuzoSTqqDxzRtpZkurvKEHxlqXKRIjjfUNNXQsNOsRScoWFLT+YeRZVD3GRN0MdQcKqQjHDMrdGGVu3iYJpQx3WGUvfbmxwFfR20WBq0oYY7LMFhhgYtr8jpaEnaOzjawWWaTP8mMr0t/EPDPoqcnxTBI5o58L7uoWnMrpoqPwgVrlAUWE+V+TQl9rawoyP6QGAlQw2TPRX+YSkxyBC8Z6jhHkXBgQL7WII3DVFnRfCrBfxewv9D6xsyjys4VkhWb9pUU627JllV0YDNHMku/ldNMMXDEo4aFnAkk4U6frNEU4XgZUPmEKHUl44KrzmYamjAbh0JFvGnaTLPu1s9jPCwjFpYiN7z1DTOk/nc07CfDFzmCf7i+bfNHXhDtLeBXzTBT5rkMvWOIxpl4EMh2LGJBu2syDnAEx2naEhHDWMMzPZEhygyS1mS5RTJr5ZkoKbEUoYqr2kqdDUE8ztK7OaIntJkFrIECwv8LJTaVx5XJE86go8dFeZ3FN3rjabCAYpoYEeC9zzJVULBbmZhDyd7ko09ydpNZ3nm2Kee4FPPXHnYEF1nqOFEC08LUVcDvYXkJHW8gTaKCk9YGOeIJhqiE4ToPEepdp7IWFjdwnWaufGMwJJCMtUTTBBK9BGCOy2tGGrJTHIwyEOzp6aPzNMOtlZkDvcEWpP5SVNhfkvDxhmSazTJXYrM9U1E0xwFVwqZQwzJxw6+kGGGUj2FglGGmnb1/G51udRSMNlTw6GGnCcUwVcOpmsqTHa06o72sw1RL02p9z0VbnMLOaIX3QKaYKSCFQzBKEUNHTSc48k53RH9wxGMtpQa5KjjW0W0n6XCCCG4yxNNdhQ4R4l1Ff+2sSd6UFHiIEOyqqFgT01mEUMD+joy75jPhOA+oVVLm309FR4yVOlp4RhLiScNmSmaYF5Pw0STrOIoWMSR2UkRXOMp+M4SHW8o8Zoi6OZgjKOaFar8zZDzkWzvKOjkKBjmCXby8JahhjXULY4KlzgKLvAwxVGhvyd4zxB1d9T0piazmKLCVZY5sKiD0y2ZSYrkUEPUbIk+dlQ4SJHTR50k1DPaUWIdTZW9NJwnJMOECgd7ou/MnppMJ02O1VT4Wsh85MnZzcFTngpXGKo84qmwgKbCL/orR/SzJ2crA+t6Mp94KvxJUeIbT3CQu1uIdlQEOzlKfS3UMcrTiFmOuroocrZrT2AcmamOKg8YomeEKm/rlT2sociMaybaUlFhuqHCM2qIJ+rg4EcDFymiDSxzaHdPcpE62pD5kyM5SBMoA1PaUtfIthS85ig1VPiPPYXgYEMNk4Qq7TXBgo7oT57gPUdwgCHzhIVFPFU6OYJzHAX9m5oNrVjeE61miDrqQ4VSa1oiURTsKHC0IfjNwU2WzK6eqK8jWln4g15TVBnqmDteCJ501PGAocJhhqjZdtBEB6lnhLreFJKxmlKbeGrqLiSThVIbCdGzloasa6lpMQXHCME2boLpJgT7yWaemu6wBONbqGNVRS0PKIL7LckbjmQtR7K8I5qtqel+T/ChJTNIKLjdUMNIRyvOEko9YYl2cwQveBikCNawJKcLBbc7+JM92mysNvd/Fqp8a0k6CNEe7cnZrxlW0wQXaXjaktnRwNOGZKYiONwS7a1JVheq3WgJHlQUGKHKmp4KAxXR/ULURcNgoa4zhKSLpZR3kxRRb0NmD0OFn+UCS7CzI1nbP6+o4x47QZE5xRCt3ZagnYcvmpYQktXdk5YKXTzBC57kKEe0VVuiSYqapssMS3C9p2CKkHOg8B8Pa8p5atrIw3qezIWanMGa5HRDNF6RM9wcacl0N+Q8Z8hsIkSnaIIdHRUOEebAPy1zbCkhM062FCJtif7PU+UtoVXzWKqM1PxXO8cfdruhFQ/a6x3JKYagvVDhQEtNiyiiSQ7OsuRsZUku0CRNDs4Sog6KKjsZgk2bYJqijgsEenoKeniinRXBn/U3lgpPdyDZynQx8IiioMnCep5Ky8mjGs6Wty0l1hUQTcNWswS3WRp2kCNZwJG8omG8JphPUaFbC8lEfabwP7VtM9yoaNCAjpR41VNhrD9LkbN722v0CoZMByFzhaW+MyzRYEWFDQwN2M4/JiT76PuljT3VU/A36eaIThb+R9oZGOAJ9tewkgGvqOMNRWYjT/Cwu99Q8LqDE4TgbLWxJ1jaDDAERsFOFrobgjUsBScaguXU8kKm2RL19tRypSHnHNlHiIZqgufs4opgQdVdwxBNNFBR6kVFqb8ogimOzB6a6HTzrlDHEpYaxjiiA4TMQobkDg2vejjfwJGWmnbVFAw3H3hq2NyQfG7hz4aC+w3BbwbesG0swYayvpAs6++Ri1Vfzx93mFChvyN5xVHTS+0p9aqCAxyZ6ZacZyw5+7uuQkFPR9DDk9NOiE7X1PCYJVjVUqq7JlrHwWALF5nfHNGjApdpqgzx5OwilDhCiDYTgnc9waGW4BdLNNUQvOtpzDOWHDH8D7TR/A/85KljEQu3NREc4Pl/6B1Hhc8Umb5CsKMmGC9EPcxoT2amwHNCmeOEnOPbklnMkbOgIvO5UMOpQrS9UGVdt6iH/fURjhI/WOpaW9OKLYRod6HCUEdOX000wpDZQ6hwg6LgZfOqo1RfT/CrJzjekXOGhpc1VW71ZLbXyyp+93ILbC1kPtIEYx0FIx1VDrLoVzXRKRYWk809yYlC9ImcrinxtabKnzRJk3lAU1OLEN1j2zrYzr2myHRXJFf4h4QKT1qSTzTB5+ZNTzTRkAxX8FcLV2uS8eoQQ2aAkFzvCM72sJIcJET3WPjRk5wi32uSS9rfZajpWEvj9hW42F4o5NytSXYy8IKHay10VYdrcl4SkqscrXpMwyGOgtkajheSxdQqmpxP1L3t4R5PqasFnrQEjytq6qgp9Y09Qx9o4S1FzhUCn1kyHSzBWLemoSGvOqLNhZyBjmCaAUYpMgt4Ck7wBBMMwWKWgjsUwTaGVsxWC1mYoKiyqqeGKYqonSIRQ3KIkHO0pmAxTdBHkbOvfllfr+AA+7gnc50huVKYK393FOyg7rbPO/izI7hE4CnHHHnJ0ogNPRUGeUpsrZZTBJcrovUcJe51BPsr6GkJdhCCsZ6aTtMEb2pqWkqeVtDXE/QVggsU/Nl86d9RMF3DxvZTA58agu810RWawCiSzzXBeU3MMW9oyJUedvNEvQyNu1f10BSMddR1vaLCYpYa/mGocLSiYDcLbQz8aMn5iyF4xBNMs1P0QEOV7o5gaWGuzSeLue4tt3ro7y4Tgm4G/mopdZgl6q0o6KzJWE3mMksNr3r+a6CbT8g5wZNzT9O7fi/zpaOmnz3BRoqos+tv9zMbdpxsqDBOEewtJLt7cg5wtKKbvldpSzRRCD43VFheCI7yZLppggMVBS/KMAdHODJvOwq2NQSbKKKPLdFWQs7Fqo+mpl01JXYRgq8dnGLhTiFzqmWsUMdpllZdbKlyvSdYxhI9YghOtxR8LgSLWHK62mGGVoxzBE8LNWzqH9CUesQzFy5RQzTc56mhi6fgXEWwpKfE5Z7M05ZgZUPmo6auiv8YKzDYwWBLMErIbKHJvOwIrvEdhOBcQ9JdU1NHQ7CXn2XIDFBKU2WAgcX9UAUzDXWd5alwuyJ41Z9rjKLCL4aCp4WarhPm2rH+SaHUYE001JDZ2ZAzXPjdMpZWvC9wmqIB2lLhQ01D5jO06hghWMndbM7yRJMsoCj1vYbnFQVrW9jak3OlEJ3s/96+p33dEPRV5GxiqaGjIthUU6FFEZyqCa5qJrpBdzSw95IUnOPIrCUUjRZQFrbw5PR0R1qiYx3cb6nrWUMrBmmiBQxVHtTew5ICP/ip6g4hed/Akob/32wvBHsIOX83cI8hGeNeNPCIkPmXe8fPKx84OMSRM1MTdXSwjCZ4S30jVGhvqTRak/OVhgGazHuOCud5onEO1lJr6ecVyaOK6H7zqlBlIaHE0oroCgfvGJIdPcmfLNGLjpz7hZwZQpUbFME0A1cIJa7VNORkgfsMBatbKgwwJM9bSvQXeNOvbIjelg6WWvo5kvbKaJJNHexkKNHL9xRyFlH8Ti2riB5wVPhUk7nGkJnoCe428LR/wRGdYIlmWebCyxou1rCk4g/ShugBDX0V0ZQWkh0dOVsagkM0yV6OoLd5ye+pRlsCr0n+KiQrGuq5yJDzrTAXHtLUMduTDBVKrSm3eHL+6ijxhFDX9Z5gVU/wliHYTMiMFpKLNMEywu80wd3meoFmt6VbRMPenhrOc6DVe4pgXU8DnnHakLOIIrlF4FZPIw6R+zxBP0dyq6OOZ4Q5sLKCcz084ok+VsMMyQhNZmmBgX5xIXOEJTmi7VsGTvMTNdHHhpzdbE8Du2oKxgvBqQKdDDnTFOylCFaxR1syz2iqrOI/FEpNc3C6f11/7+ASS6l2inq2ciTrCCzgyemrCL5SVPjQkdPZUmGy2c9Sw9FtR1sS30RmsKPCS4rkIC/2U0MduwucYolGaPjKEyhzmiPYXagyWbYz8LWBDdzRimAXzxx4z8K9hpzlhLq+NiQ97HuKorMUfK/OVvC2JfiHUPCQI/q7J2gjK+tTDNxkCc4TMssqCs4TGtLVwQihyoAWgj9bosU80XGW6Ac9TJGziaUh5+hnFcHOnlaM1iRn29NaqGENTTTSUHCH2tWTeV0osUhH6psuVLjRUmGWhm6OZEshGeNowABHcJ2Bpy2ZszRcKkRXd2QuKVEeXnbfaEq825FguqfgfE2whlChSRMdron+LATTPQ2Z369t4B9C5gs/ylzv+CMmepIDPclFQl13W0rspPd1JOcbghGOEutqCv5qacURQl3dDKyvyJlqKXGPgcM9FfawJAMVmdcspcYKOZc4GjDYkFlK05olNMHyHn4zFNykyOxt99RkHlfwmiHo60l2EKI+mhreEKp080Tbug08BVPcgoqC5zWt+NLDTZ7oNSF51N1qie7Va3uCCwyZbkINf/NED6jzOsBdZjFN8oqG3wxVunqCSYYKf3EdhJyf9YWGf7tRU2oH3VHgPr1fe5J9hOgHd7xQ0y7qBwXr23aGErP0cm64JVjZwsOGqL+mhNgZmhJLW2oY4UhedsyBgzrCKrq7BmcpNVhR6jBPq64Vgi+kn6XE68pp8J5/+0wRHGOpsKenQn9DZntPzjRLZpDAdD2fnSgkG9tmIXnUwQ6WVighs7Yi2MxQ0N3CqYaCXkJ0oyOztMDJjmSSpcpvlrk0RMMOjmArQ04PRV1DO1FwhCVaUVPpKUM03JK5SxPsIWRu8/CGHi8UHChiqGFDTbSRJWeYUDDcH6vJWUxR4k1FXbMUwV6e4AJFXS8oMqsZKqzvYQ9DDQdZckY4aGsIhtlubbd2r3j4QBMoTamdPZk7O/Bf62lacZwneNjQoGcdVU7zJOd7ghsUHOkosagic6cnWc8+4gg285R6zZP5s1/LUbCKIznTwK36PkdwlOrl4U1LwfdCCa+IrvFkmgw1PCAUXKWo0sURXWcI2muKJlgyFzhynCY4RBOsqCjoI1R5zREco0n2Vt09BQtYSizgKNHfUmUrQ5UOCh51BFcLmY7umhYqXKQomOop8bUnWNNQcIiBcYaC6xzMNOS8JQQfeqKBmmglB+97ok/lfk3ygaHSyZaCRTzRxQo6GzLfa2jWBPepw+UmT7SQEJyiyRkhBLMVOfcoMjcK0eZChfUNzFAUzCsEN5vP/X1uP/n/aoMX+K+nw/Hjr/9xOo7j7Pju61tLcgvJpTWXNbfN5jLpi6VfCOviTktKlFusQixdEKWmEBUKNaIpjZRSSOXSgzaaKLdabrm1/9nZ+/f+vd/vz/v9+Xy+zZ7PRorYoZqyLrCwQdEAixxVOEXNNnjX2nUSRlkqGmWowk8lxR50JPy9Bo6qJXaXwNvREBvnThPEPrewryLhcAnj5WE15Fqi8W7R1sAuEu86S4ENikItFN4xkv9Af4nXSnUVcLiA9xzesFpivRRVeFKtsMRaKBhuSbjOELnAUtlSQUpXgdfB4Z1oSbnFEetbQ0IrAe+Y+pqnDcEJFj6S8LDZzZHwY4e3XONNlARraomNEt2bkvGsosA3ioyHm+6jCMbI59wqt4eeara28IzEmyPgoRaUOEDhTVdEJhmCoTWfC0p8aNkCp0oYqih2iqGi4yXeMkOsn4LdLLnmKfh/YogjNsPebeFGR4m9BJHLzB61XQ3BtpISfS2FugsK9FAtLWX1dCRcrCnUp44CNzuCowUZmxSRgYaE6Za0W2u/E7CVXCiI/UOR8aAm1+OSyE3mOUcwyc1zBBeoX1kiKy0Zfxck1Gsyulti11i83QTBF5Kg3pDQThFMVHiPSlK+0cSedng/VaS8bOZbtsBcTcZAR8JP5KeqQ1OYKAi20njdNNRpgnsU//K+JnaXJaGTomr7aYIphoRn9aeShJWKEq9LcozSF7QleEfDI5LYm5bgVkFkRwVDBCVu0DDIkGupo8TZBq+/pMQURYErJQmPKGKjNDkWOLx7Jd5QizdUweIaKrlP7SwJDhZvONjLkOsBBX9UpGxnydhXkfBLQ8IxgojQbLFnJf81JytSljclYYyEFyx0kVBvKWOFJmONpshGAcsduQY5giVNCV51eOdJYo/pLhbvM0uDHSevNKRcrKZIqnCtJeEsO95RoqcgGK4ocZcho1tTYtcZvH41pNQ7vA0WrhIfOSraIIntIAi+NXWCErdbkvrWwjRLrt0NKUdL6KSOscTOdMSOUtBHwL6OLA0vNSdynaWQEnCpIvKaIrJJEbvHkmuNhn6OjM8VkSGSqn1uYJCGHnq9I3aLhNME3t6GjIkO7xrNFumpyTNX/NrwX7CrIRiqqWijI9JO4d1iieykyfiposQIQ8YjjsjlBh6oHWbwRjgYJQn2NgSnNycmJAk3NiXhx44Sxykihxm8ybUwT1OVKySc7vi3OXVkdBJ4AyXBeksDXG0IhgtYY0lY5ahCD0ehborIk5aUWRJviMA7Xt5kyRjonrXENkm8yYqgs8VzgrJmClK20uMM3jRJ0FiQICQF9hdETlLQWRIb5ki6WDfWRPobvO6a4GP5mcOrNzDFELtTkONLh9dXE8xypEg7z8A9jkhrQ6Fhjlg/QVktJXxt4WXzT/03Q8IaQWSqIuEvloQ2mqC9Jfi7wRul4RX3pSPlzpoVlmCtI2jvKHCFhjcM3sN6lqF6HxnKelLjXWbwrpR4xzuCrTUZx2qq9oAh8p6ixCUGr78g8oyjRAtB5CZFwi80VerVpI0h+IeBxa6Zg6kWvpDHaioYYuEsRbDC3eOmC2JvGYLeioxGknL2UATNJN6hmtj1DlpLvDVmocYbrGCVJKOrg4X6DgddLA203BKMFngdJJFtFd7vJLm6KEpc5yjQrkk7M80SGe34X24nSex1Ra5Omgb71JKyg8SrU3i/kARKwWpH0kOGhKkObyfd0ZGjvyXlAkVZ4xRbYJ2irFMkFY1SwyWxr2oo4zlNiV+7zmaweFpT4kR3kaDAFW6xpSqzJay05FtYR4HmZhc9UxKbbfF2V8RG1MBmSaE+kmC6JnaRXK9gsiXhJHl/U0qM0WTcbyhwkYIvFGwjSbjfwhiJt8ZSQU+Bd5+marPMOkVkD0muxYLIfEuhh60x/J92itguihJSEMySVPQnTewnEm+620rTQEMsOfo4/kP/0ARvWjitlpSX7GxBgcMEsd3EEeYWvdytd+Saawi6aCIj1CkGb6Aj9rwhx16Cf3vAwFy5pyLhVonXzy51FDpdEblbkdJbUcEPDEFzQ8qNmhzzLTmmKWKbFCXeEuRabp6rxbvAtLF442QjQ+wEA9eL1xSR7Q0JXzlSHjJ4exq89yR0laScJ/FW6z4a73pFMEfDiRZvuvijIt86RaSFOl01riV2mD1UEvxGk/Geg5aWwGki1zgKPG9J2U8PEg8qYvMsZeytiTRXBMslCU8JSlxi8EabjwUldlDNLfzTUmCgxWsjqWCOHavYAqsknKFIO0yQ61VL5AVFxk6WhEaCAkdJgt9aSkzXlKNX2jEa79waYuc7gq0N3GDJGCBhoiTXUEPsdknCUE1CK0fwsiaylSF2uiDyO4XX3pFhNd7R4itFGc0k/ElBZwWvq+GC6szVeEoS/MZ+qylwpKNKv9Z469UOjqCjwlusicyTxG6VpNxcQ8IncoR4RhLbR+NdpGGmJWOcIzJGUuKPGpQg8rrG21dOMqQssJQ4RxH5jaUqnZuQ0F4Q+cjxLwPtpZbIAk3QTJHQWBE5S1BokoVtDd6lhqr9UpHSUxMcIYl9pojsb8h4SBOsMQcqvOWC2E8EVehqiJ1hrrAEbQxeK0NGZ0Gkq+guSRgniM23bIHVkqwx4hiHd7smaOyglyIyQuM978j4VS08J/A2G1KeMBRo4fBaSNhKUEZfQewVQ/C1I+MgfbEleEzCUw7mKXI0M3hd1EESVji8x5uQ41nxs1q4RMJCCXs7Iq9acpxn22oSDnQ/sJTxsCbHIYZiLyhY05TY0ZLIOQrGaSJDDN4t8pVaIrsqqFdEegtizc1iTew5Q4ayBDMUsQMkXocaYkc0hZua412siZ1rSXlR460zRJ5SlHGe5j801RLMlJTxtaOM3Q1pvxJ45zUlWFD7rsAbpfEm1JHxG0eh8w2R7QQVzBUw28FhFp5QZzq8t2rx2joqulYTWSuJdTYfWwqMFMcovFmSyJPNyLhE4E10pHzYjOC3huArRa571ZsGajQpQx38SBP5pyZB6lMU3khDnp0MBV51BE9o2E+TY5Ml2E8S7C0o6w1xvCZjf0HkVEHCzFoyNmqC+9wdcqN+Tp7jSDheE9ws8Y5V0NJCn2bk2tqSY4okdrEhx1iDN8cSudwepWmAGXKcJXK65H9to8jYQRH7SBF01ESUJdd0TayVInaWhLkOjlXE5irKGOnI6GSWGCJa482zBI9rCr0jyTVcEuzriC1vcr6mwFGSiqy5zMwxBH/TJHwjSPhL8+01kaaSUuMFKTcLEvaUePcrSmwn8DZrgikWb7CGPxkSjhQwrRk57tctmxLsb9sZvL9LSlyuSLlWkqOjwduo8b6Uv1DkmudIeFF2dHCgxVtk8dpIvHpBxhEOdhKk7OLIUSdJ+cSRY57B+0DgGUUlNfpthTfGkauzxrvTsUUaCVhlKeteTXCoJDCa2NOKhOmC4G1H8JBd4OBZReSRGkqcb/CO1PyLJTLB4j1q8JYaIutEjSLX8YKM+a6phdMsdLFUoV5RTm9JSkuDN8WcIon0NZMNZWh1q8C7SJEwV5HxrmnnTrf3KoJBlmCYI2ilSLlfEvlE4011NNgjgthzEua0oKK7JLE7HZHlEl60BLMVFewg4EWNt0ThrVNEVkkiTwpKXSWJzdRENgvKGq4IhjsiezgSFtsfCUq8qki5S1LRQeYQQ4nemmCkImWMw3tFUoUBZk4NOeZYEp4XRKTGa6wJjrWNHBVJR4m3FCnbuD6aak2WsMTh3SZImGCIPKNgsDpVwnsa70K31lCFJZYcwwSMFcQulGTsZuEaSdBXkPGZhu0FsdUO73RHjq8MPGGIfaGIbVTk6iuI3GFgucHrIQkmWSJdBd7BBu+uOryWAhY7+Lki9rK5wtEQzWwvtbqGhIMFwWRJsElsY4m9IIg9L6lCX0VklaPAYkfkZEGDnOWowlBJjtMUkcGK4Lg6EtoZInMUBVYLgn0UsdmCyCz7gIGHFfk+k1QwTh5We7A9x+IdJ6CvIkEagms0hR50eH9UnTQJ+2oiKyVlLFUE+8gBGu8MQ3CppUHesnjTHN4QB/UGPhCTHLFPHMFrCqa73gqObUJGa03wgbhHkrCfpEpzNLE7JDS25FMKhlhKKWKfCgqstLCPu1zBXy0J2ztwjtixBu8UTRn9LVtkmCN2iyFhtME70JHRQ1KVZXqKI/KNIKYMCYs1GUMEKbM1bKOI9LDXC7zbHS+bt+1MTWS9odA9DtrYtpbImQJ2VHh/lisEwaHqUk1kjKTAKknkBEXkbkdMGwq0dnhzLJF3NJH3JVwrqOB4Sca2hti75nmJN0WzxS6UxDYoEpxpa4htVlRjkYE7DZGzJVU72uC9IyhQL4i8YfGWSYLLNcHXloyz7QhNifmKSE9JgfGmuyLhc403Xm9vqcp6gXe3xuuv8F6VJNxkyTHEkHG2g0aKXL0MsXc1bGfgas2//dCONXiNLCX+5mB7eZIl1kHh7ajwpikyzlUUWOVOsjSQlsS+M0R+pPje/dzBXRZGO0rMtgQrLLG9VSu9n6CMXS3BhwYmSoIBhsjNBmZbgusE9BCPCP5triU4VhNbJfE+swSP27aayE8tuTpYYjtrYjMVGZdp2NpS1s6aBnKSHDsbKuplKbHM4a0wMFd/5/DmGyKrJSUaW4IBrqUhx0vyfzTBBLPIUcnZdrAkNsKR0sWRspumSns6Ch0v/qqIbBYUWKvPU/CFoyrDJGwSNFhbA/MlzKqjrO80hRbpKx0Jewsi/STftwGSlKc1JZyAzx05dhLEdnfQvhZOqiHWWEAHC7+30FuRcZUgaO5gpaIK+xsiHRUsqaPElTV40xQZQ107Q9BZE1nryDVGU9ZSQ47bmhBpLcYpUt7S+xuK/FiT8qKjwXYw5ypS2iuCv7q1gtgjhuBuB8LCFY5cUuCNtsQOFcT+4Ih9JX+k8Ea6v0iCIRZOtCT0Et00JW5UeC85Cg0ScK0k411HcG1zKtre3SeITBRk7WfwDhEvaYLTHP9le0m8By0JDwn4TlLW/aJOvGHxdjYUes+ScZigCkYQdNdEOhkiezgShqkx8ueKjI8lDfK2oNiOFvrZH1hS+tk7NV7nOmLHicGWEgubkXKdwdtZknCLJXaCpkrjZBtLZFsDP9CdxWsSr05Sxl6CMmoFbCOgryX40uDtamB7SVmXW4Ihlgpmq+00tBKUUa83WbjLUNkzDmY7cow1JDygyPGlhgGKYKz4vcV7QBNbJIgM11TUqZaMdwTeSguH6rOaw1JRKzaaGyxVm2EJ/uCIrVWUcZUkcp2grMsEjK+DMwS59jQk3Kd6SEq1d0S6uVmO4Bc1lDXTUcHjluCXEq+1OlBDj1pi9zgiXxnKuE0SqTXwhqbETW6RggMEnGl/q49UT2iCzgJvRwVXS2K/d6+ZkyUl7jawSVLit46EwxVljDZwoSQ20sDBihztHfk2yA8NVZghiXwrYHQdfKAOtzsayjhY9bY0yE2CWEeJ9xfzO423xhL5syS2TFJofO2pboHob0nY4GiAgRrvGQEDa/FWSsoaaYl0syRsEt3kWoH3B01shCXhTUWe9w3Bt44SC9QCh3eShQctwbaK2ApLroGCMlZrYqvlY3qYhM0aXpFkPOuoqJ3Dm6fxXrGwVF9gCWZagjPqznfkuMKQ8DPTQRO8ZqG1hPGKEm9IgpGW4DZDgTNriTxvFiq+Lz+0cKfp4wj6OCK9JSnzNSn9LFU7UhKZZMnYwcJ8s8yRsECScK4j5UOB95HFO0CzhY4xJxuCix0lDlEUeMdS6EZBkTsUkZ4K74dugyTXS7aNgL8aqjDfkCE0ZbwkCXpaWCKhl8P7VD5jxykivSyxyZrYERbe168LYu9ZYh86IkscgVLE7tWPKmJv11CgoyJltMEbrohtVAQfO4ImltiHEroYEs7RxAarVpY8AwXMcMReFOTYWe5iiLRQxJ5Q8DtJ8LQhWOhIeFESPGsILhbNDRljNbHzNRlTFbk2S3L0NOS6V1KFJYKUbSTcIIhM0wQ/s2TM0SRMNcQmSap3jCH4yhJZKSkwyRHpYYgsFeQ4U7xoCB7VVOExhXepo9ABBsYbvGWKXPME3lyH95YioZ0gssQRWWbI+FaSMkXijZXwgiTlYdPdkNLaETxlyDVIwqeaEus0aTcYcg0RVOkpR3CSJqIddK+90JCxzsDVloyrFd5ZAr4TBKfaWa6boEA7C7s6EpYaeFPjveooY72mjIccLHJ9HUwVlDhKkmutJDJBwnp1rvulJZggKDRfbXAkvC/4l3ozQOG9a8lxjx0i7nV4jSXc7vhe3OwIxjgSHjdEhhsif9YkPGlus3iLFDnWOFhtCZbJg0UbQcIaR67JjthoCyMEZRwhiXWyxO5QxI6w5NhT4U1WsJvDO60J34fW9hwzwlKij6ZAW9ne4L0s8C6XeBMEkd/LQy1VucBRot6QMlbivaBhoBgjqGiCJNhsqVp/S2SsG6DIONCR0dXhvWbJ+MRRZJkkuEjgDXJjFQW6SSL7GXK8Z2CZg7cVsbWGoKmEpzQ5elpiy8Ryg7dMkLLUEauzeO86CuwlSOlgYLojZWeJ9xM3S1PWfEfKl5ISLQ0MEKR8YOB2QfCxJBjrKPCN4f9MkaSsqoVXJBmP7EpFZ9UQfOoOFwSzBN4MQ8LsGrymlipcJQhmy0GaQjPqCHaXRwuCZwRbqK2Fg9wlClZqYicrIgMdZfxTQ0c7TBIbrChxmuzoKG8XRaSrIhhiyNFJkrC7oIAWMEOQa5aBekPCRknCo4IKPrYkvCDI8aYmY7WFtprgekcJZ3oLIqssCSMtFbQTJKwXYy3BY5oCh2iKPCpJOE+zRdpYgi6O2KmOAgvVCYaU4ySRek1sgyFhJ403QFHiVEmJHwtybO1gs8Hr5+BETQX3War0qZngYGgtVZtoqd6vFSk/UwdZElYqyjrF4HXUeFspIi9IGKf4j92pKGAdCYMVsbcV3kRF0N+R8LUd5PCsIGWoxDtBkCI0nKofdJQxT+LtZflvuc8Q3CjwWkq8KwUpHzkK/NmSsclCL0nseQdj5FRH5CNHSgtLiW80Of5HU9Hhlsga9bnBq3fEVltKfO5IaSTmGjjc4J0otcP7QsJUSQM8pEj5/wCuUuC2DWz8AAAAAElFTkSuQmCC\");}.ace-ambiance .ace_indent-guide {background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQUFD4z6Crq/sfAAuYAuYl+7lfAAAAAElFTkSuQmCC\") right repeat-y;}", e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/ambiance"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/sqlserver", [], (function(e, t, i) {
            t.isDark = !1, t.cssClass = "ace-sqlserver", t.cssText = '.ace-sqlserver .ace_gutter {background: #ebebeb;color: #333;overflow: hidden;}.ace-sqlserver .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-sqlserver {background-color: #FFFFFF;color: black;}.ace-sqlserver .ace_identifier {color: black;}.ace-sqlserver .ace_keyword {color: #0000FF;}.ace-sqlserver .ace_numeric {color: black;}.ace-sqlserver .ace_storage {color: #11B7BE;}.ace-sqlserver .ace_keyword.ace_operator,.ace-sqlserver .ace_lparen,.ace-sqlserver .ace_rparen,.ace-sqlserver .ace_punctuation {color: #808080;}.ace-sqlserver .ace_set.ace_statement {color: #0000FF;text-decoration: underline;}.ace-sqlserver .ace_cursor {color: black;}.ace-sqlserver .ace_invisible {color: rgb(191, 191, 191);}.ace-sqlserver .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-sqlserver .ace_constant.ace_language {color: #979797;}.ace-sqlserver .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-sqlserver .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-sqlserver .ace_support.ace_function {color: #FF00FF;}.ace-sqlserver .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-sqlserver .ace_class {color: #008080;}.ace-sqlserver .ace_support.ace_other {color: #6D79DE;}.ace-sqlserver .ace_variable.ace_parameter {font-style: italic;color: #FD971F;}.ace-sqlserver .ace_comment {color: #008000;}.ace-sqlserver .ace_constant.ace_numeric {color: black;}.ace-sqlserver .ace_variable {color: rgb(49, 132, 149);}.ace-sqlserver .ace_xml-pe {color: rgb(104, 104, 91);}.ace-sqlserver .ace_support.ace_storedprocedure {color: #800000;}.ace-sqlserver .ace_heading {color: rgb(12, 7, 255);}.ace-sqlserver .ace_list {color: rgb(185, 6, 144);}.ace-sqlserver .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-sqlserver .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-sqlserver .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-sqlserver .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-sqlserver .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-sqlserver .ace_gutter-active-line {background-color: #dcdcdc;}.ace-sqlserver .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-sqlserver .ace_meta.ace_tag {color: #0000FF;}.ace-sqlserver .ace_string.ace_regex {color: #FF0000;}.ace-sqlserver .ace_string {color: #FF0000;}.ace-sqlserver .ace_entity.ace_other.ace_attribute-name {color: #994409;}.ace-sqlserver .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/sqlserver"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/github", [], (function(e, t, i) {
            t.isDark = !1, t.cssClass = "ace-github", t.cssText = '.ace-github .ace_gutter {background: #e8e8e8;color: #AAA;}.ace-github  {background: #fff;color: #000;}.ace-github .ace_keyword {font-weight: bold;}.ace-github .ace_string {color: #D14;}.ace-github .ace_variable.ace_class {color: teal;}.ace-github .ace_constant.ace_numeric {color: #099;}.ace-github .ace_constant.ace_buildin {color: #0086B3;}.ace-github .ace_support.ace_function {color: #0086B3;}.ace-github .ace_comment {color: #998;font-style: italic;}.ace-github .ace_variable.ace_language  {color: #0086B3;}.ace-github .ace_paren {font-weight: bold;}.ace-github .ace_boolean {font-weight: bold;}.ace-github .ace_string.ace_regexp {color: #009926;font-weight: normal;}.ace-github .ace_variable.ace_instance {color: teal;}.ace-github .ace_constant.ace_language {font-weight: bold;}.ace-github .ace_cursor {color: black;}.ace-github.ace_focus .ace_marker-layer .ace_active-line {background: rgb(255, 255, 204);}.ace-github .ace_marker-layer .ace_active-line {background: rgb(245, 245, 245);}.ace-github .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-github.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-github.ace_nobold .ace_line > span {font-weight: normal !important;}.ace-github .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-github .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-github .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-github .ace_gutter-active-line {background-color : rgba(0, 0, 0, 0.07);}.ace-github .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-github .ace_invisible {color: #BFBFBF}.ace-github .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-github .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/github"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/solarized_light", [], (function(e, t, i) {
            t.isDark = !1, t.cssClass = "ace-solarized-light", t.cssText = ".ace-solarized-light .ace_gutter {background: #fbf1d3;color: #333}.ace-solarized-light .ace_print-margin {width: 1px;background: #e8e8e8}.ace-solarized-light {background-color: #FDF6E3;color: #586E75}.ace-solarized-light .ace_cursor {color: #000000}.ace-solarized-light .ace_marker-layer .ace_selection {background: rgba(7, 54, 67, 0.09)}.ace-solarized-light.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FDF6E3;}.ace-solarized-light .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-solarized-light .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(147, 161, 161, 0.50)}.ace-solarized-light .ace_marker-layer .ace_active-line {background: #EEE8D5}.ace-solarized-light .ace_gutter-active-line {background-color : #EDE5C1}.ace-solarized-light .ace_marker-layer .ace_selected-word {border: 1px solid #7f9390}.ace-solarized-light .ace_invisible {color: rgba(147, 161, 161, 0.50)}.ace-solarized-light .ace_keyword,.ace-solarized-light .ace_meta,.ace-solarized-light .ace_support.ace_class,.ace-solarized-light .ace_support.ace_type {color: #859900}.ace-solarized-light .ace_constant.ace_character,.ace-solarized-light .ace_constant.ace_other {color: #CB4B16}.ace-solarized-light .ace_constant.ace_language {color: #B58900}.ace-solarized-light .ace_constant.ace_numeric {color: #D33682}.ace-solarized-light .ace_fold {background-color: #268BD2;border-color: #586E75}.ace-solarized-light .ace_entity.ace_name.ace_function,.ace-solarized-light .ace_entity.ace_name.ace_tag,.ace-solarized-light .ace_support.ace_function,.ace-solarized-light .ace_variable,.ace-solarized-light .ace_variable.ace_language {color: #268BD2}.ace-solarized-light .ace_storage {color: #073642}.ace-solarized-light .ace_string {color: #2AA198}.ace-solarized-light .ace_string.ace_regexp {color: #D30102}.ace-solarized-light .ace_comment,.ace-solarized-light .ace_entity.ace_other.ace_attribute-name {color: #93A1A1}.ace-solarized-light .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHjy8NJ/AAjgA5fzQUmBAAAAAElFTkSuQmCC) right repeat-y}", e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/solarized_light"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/solarized_dark", [], (function(e, t, i) {
            t.isDark = !0, t.cssClass = "ace-solarized-dark", t.cssText = ".ace-solarized-dark .ace_gutter {background: #01313f;color: #d0edf7}.ace-solarized-dark .ace_print-margin {width: 1px;background: #33555E}.ace-solarized-dark {background-color: #002B36;color: #93A1A1}.ace-solarized-dark .ace_entity.ace_other.ace_attribute-name,.ace-solarized-dark .ace_storage {color: #93A1A1}.ace-solarized-dark .ace_cursor,.ace-solarized-dark .ace_string.ace_regexp {color: #D30102}.ace-solarized-dark .ace_marker-layer .ace_active-line,.ace-solarized-dark .ace_marker-layer .ace_selection {background: rgba(255, 255, 255, 0.1)}.ace-solarized-dark.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #002B36;}.ace-solarized-dark .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-solarized-dark .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(147, 161, 161, 0.50)}.ace-solarized-dark .ace_gutter-active-line {background-color: #0d3440}.ace-solarized-dark .ace_marker-layer .ace_selected-word {border: 1px solid #073642}.ace-solarized-dark .ace_invisible {color: rgba(147, 161, 161, 0.50)}.ace-solarized-dark .ace_keyword,.ace-solarized-dark .ace_meta,.ace-solarized-dark .ace_support.ace_class,.ace-solarized-dark .ace_support.ace_type {color: #859900}.ace-solarized-dark .ace_constant.ace_character,.ace-solarized-dark .ace_constant.ace_other {color: #CB4B16}.ace-solarized-dark .ace_constant.ace_language {color: #B58900}.ace-solarized-dark .ace_constant.ace_numeric {color: #D33682}.ace-solarized-dark .ace_fold {background-color: #268BD2;border-color: #93A1A1}.ace-solarized-dark .ace_entity.ace_name.ace_function,.ace-solarized-dark .ace_entity.ace_name.ace_tag,.ace-solarized-dark .ace_support.ace_function,.ace-solarized-dark .ace_variable,.ace-solarized-dark .ace_variable.ace_language {color: #268BD2}.ace-solarized-dark .ace_string {color: #2AA198}.ace-solarized-dark .ace_comment {font-style: italic;color: #657B83}.ace-solarized-dark .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNg0Db1ZVCxc/sPAAd4AlUHlLenAAAAAElFTkSuQmCC) right repeat-y}", e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/solarized_dark"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/theme/tomorrow_night_bright", [], (function(e, t, i) {
            t.isDark = !0, t.cssClass = "ace-tomorrow-night-bright", t.cssText = ".ace-tomorrow-night-bright .ace_gutter {background: #1a1a1a;color: #DEDEDE}.ace-tomorrow-night-bright .ace_print-margin {width: 1px;background: #1a1a1a}.ace-tomorrow-night-bright {background-color: #000000;color: #DEDEDE}.ace-tomorrow-night-bright .ace_cursor {color: #9F9F9F}.ace-tomorrow-night-bright .ace_marker-layer .ace_selection {background: #424242}.ace-tomorrow-night-bright.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #000000;}.ace-tomorrow-night-bright .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-tomorrow-night-bright .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #888888}.ace-tomorrow-night-bright .ace_marker-layer .ace_highlight {border: 1px solid rgb(110, 119, 0);border-bottom: 0;box-shadow: inset 0 -1px rgb(110, 119, 0);margin: -1px 0 0 -1px;background: rgba(255, 235, 0, 0.1)}.ace-tomorrow-night-bright .ace_marker-layer .ace_active-line {background: #2A2A2A}.ace-tomorrow-night-bright .ace_gutter-active-line {background-color: #2A2A2A}.ace-tomorrow-night-bright .ace_stack {background-color: rgb(66, 90, 44)}.ace-tomorrow-night-bright .ace_marker-layer .ace_selected-word {border: 1px solid #888888}.ace-tomorrow-night-bright .ace_invisible {color: #343434}.ace-tomorrow-night-bright .ace_keyword,.ace-tomorrow-night-bright .ace_meta,.ace-tomorrow-night-bright .ace_storage,.ace-tomorrow-night-bright .ace_storage.ace_type,.ace-tomorrow-night-bright .ace_support.ace_type {color: #C397D8}.ace-tomorrow-night-bright .ace_keyword.ace_operator {color: #70C0B1}.ace-tomorrow-night-bright .ace_constant.ace_character,.ace-tomorrow-night-bright .ace_constant.ace_language,.ace-tomorrow-night-bright .ace_constant.ace_numeric,.ace-tomorrow-night-bright .ace_keyword.ace_other.ace_unit,.ace-tomorrow-night-bright .ace_support.ace_constant,.ace-tomorrow-night-bright .ace_variable.ace_parameter {color: #E78C45}.ace-tomorrow-night-bright .ace_constant.ace_other {color: #EEEEEE}.ace-tomorrow-night-bright .ace_invalid {color: #CED2CF;background-color: #DF5F5F}.ace-tomorrow-night-bright .ace_invalid.ace_deprecated {color: #CED2CF;background-color: #B798BF}.ace-tomorrow-night-bright .ace_fold {background-color: #7AA6DA;border-color: #DEDEDE}.ace-tomorrow-night-bright .ace_entity.ace_name.ace_function,.ace-tomorrow-night-bright .ace_support.ace_function,.ace-tomorrow-night-bright .ace_variable {color: #7AA6DA}.ace-tomorrow-night-bright .ace_support.ace_class,.ace-tomorrow-night-bright .ace_support.ace_type {color: #E7C547}.ace-tomorrow-night-bright .ace_heading,.ace-tomorrow-night-bright .ace_markup.ace_heading,.ace-tomorrow-night-bright .ace_string {color: #B9CA4A}.ace-tomorrow-night-bright .ace_entity.ace_name.ace_tag,.ace-tomorrow-night-bright .ace_entity.ace_other.ace_attribute-name,.ace-tomorrow-night-bright .ace_meta.ace_tag,.ace-tomorrow-night-bright .ace_string.ace_regexp,.ace-tomorrow-night-bright .ace_variable {color: #D54E53}.ace-tomorrow-night-bright .ace_comment {color: #969896}.ace-tomorrow-night-bright .ace_c9searchresults.ace_keyword {color: #C2C280}.ace-tomorrow-night-bright .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y}", e("../lib/dom").importCssString(t.cssText, t.cssClass)
        })), ace.require(["ace/theme/tomorrow_night_bright"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/mode/lua_highlight_rules", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/oop"),
                r = e("./text_highlight_rules").TextHighlightRules,
                o = function() {
                    var e = this.createKeywordMapper({
                        keyword: "break|do|else|elseif|end|for|function|if|in|local|repeat|return|then|until|while|or|and|not",
                        "support.function": "string|xpcall|package|tostring|print|os|unpack|require|getfenv|setmetatable|next|assert|tonumber|io|rawequal|collectgarbage|getmetatable|module|rawset|math|debug|pcall|table|newproxy|type|coroutine|_G|select|gcinfo|pairs|rawget|loadstring|ipairs|_VERSION|dofile|setfenv|load|error|loadfile|sub|upper|len|gfind|rep|find|match|char|dump|gmatch|reverse|byte|format|gsub|lower|preload|loadlib|loaded|loaders|cpath|config|path|seeall|exit|setlocale|date|getenv|difftime|remove|time|clock|tmpname|rename|execute|lines|write|close|flush|open|output|type|read|stderr|stdin|input|stdout|popen|tmpfile|log|max|acos|huge|ldexp|pi|cos|tanh|pow|deg|tan|cosh|sinh|random|randomseed|frexp|ceil|floor|rad|abs|sqrt|modf|asin|min|mod|fmod|log10|atan2|exp|sin|atan|getupvalue|debug|sethook|getmetatable|gethook|setmetatable|setlocal|traceback|setfenv|getinfo|setupvalue|getlocal|getregistry|getfenv|setn|insert|getn|foreachi|maxn|foreach|concat|sort|remove|resume|yield|status|wrap|create|running|__add|__sub|__mod|__unm|__concat|__lt|__index|__call|__gc|__metatable|__mul|__div|__pow|__len|__eq|__le|__newindex|__tostring|__mode|__tonumber",
                        "keyword.deprecated": "setn|foreach|foreachi|gcinfo|log10|maxn",
                        "constant.library": "string|package|os|io|math|debug|table|coroutine",
                        "constant.language": "true|false|nil|_G|_VERSION",
                        "variable.language": "self"
                    }, "identifier");
                    this.$rules = {
                        start: [{
                            stateName: "bracketedComment",
                            onMatch: function(e, t, i) {
                                return i.unshift(this.next, e.length - 2, t), "comment"
                            },
                            regex: /\-\-\[=*\[/,
                            next: [{
                                onMatch: function(e, t, i) {
                                    return e.length == i[1] ? (i.shift(), i.shift(), this.next = i.shift()) : this.next = "", "comment"
                                },
                                regex: /\]=*\]/,
                                next: "start"
                            }, {
                                defaultToken: "comment"
                            }]
                        }, {
                            token: "comment",
                            regex: "\\-\\-.*$"
                        }, {
                            stateName: "bracketedString",
                            onMatch: function(e, t, i) {
                                return i.unshift(this.next, e.length, t), "string.start"
                            },
                            regex: /\[=*\[/,
                            next: [{
                                onMatch: function(e, t, i) {
                                    return e.length == i[1] ? (i.shift(), i.shift(), this.next = i.shift()) : this.next = "", "string.end"
                                },
                                regex: /\]=*\]/,
                                next: "start"
                            }, {
                                defaultToken: "string"
                            }]
                        }, {
                            token: "string",
                            regex: '"(?:[^\\\\]|\\\\.)*?"'
                        }, {
                            token: "string",
                            regex: "'(?:[^\\\\]|\\\\.)*?'"
                        }, {
                            token: "constant.numeric",
                            regex: "(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))"
                        }, {
                            token: "constant.numeric",
                            regex: "(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[xX][\\dA-Fa-f]+))\\b"
                        }, {
                            token: e,
                            regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                        }, {
                            token: "keyword.operator",
                            regex: "\\+|\\-|\\*|\\/|%|\\#|\\^|~|<|>|<=|=>|==|~=|=|\\:|\\.\\.\\.|\\.\\."
                        }, {
                            token: "paren.lparen",
                            regex: "[\\[\\(\\{]"
                        }, {
                            token: "paren.rparen",
                            regex: "[\\]\\)\\}]"
                        }, {
                            token: "text",
                            regex: "\\s+|\\w+"
                        }]
                    }, this.normalizeRules()
                };
            n.inherits(o, r), t.LuaHighlightRules = o
        })), ace.define("ace/mode/folding/lua", [], (function(e, t, i) {
            "use strict";
            var n = e("../../lib/oop"),
                r = e("./fold_mode").FoldMode,
                o = e("../../range").Range,
                s = e("../../token_iterator").TokenIterator,
                a = t.FoldMode = function() {};
            n.inherits(a, r),
                function() {
                    this.foldingStartMarker = /\b(function|then|do|repeat)\b|{\s*$|(\[=*\[)/, this.foldingStopMarker = /\bend\b|^\s*}|\]=*\]/, this.getFoldWidget = function(e, t, i) {
                        var n = e.getLine(i),
                            r = this.foldingStartMarker.test(n),
                            o = this.foldingStopMarker.test(n);
                        if (r && !o) {
                            var s;
                            if ("then" == (s = n.match(this.foldingStartMarker))[1] && /\belseif\b/.test(n)) return;
                            if (s[1]) {
                                if ("keyword" === e.getTokenAt(i, s.index + 1).type) return "start"
                            } else {
                                if (!s[2]) return "start";
                                if ("bracketedComment" == (a = e.bgTokenizer.getState(i) || "")[0] || "bracketedString" == a[0]) return "start"
                            }
                        }
                        if ("markbeginend" != t || !o || r && o) return "";
                        if ("end" === (s = n.match(this.foldingStopMarker))[0]) {
                            if ("keyword" === e.getTokenAt(i, s.index + 1).type) return "end"
                        } else {
                            if ("]" !== s[0][0]) return "end";
                            var a;
                            if ("bracketedComment" == (a = e.bgTokenizer.getState(i - 1) || "")[0] || "bracketedString" == a[0]) return "end"
                        }
                    }, this.getFoldWidgetRange = function(e, t, i) {
                        var n, r = e.doc.getLine(i);
                        return (n = this.foldingStartMarker.exec(r)) ? n[1] ? this.luaBlock(e, i, n.index + 1) : n[2] ? e.getCommentFoldRange(i, n.index + 1) : this.openingBracketBlock(e, "{", i, n.index) : (n = this.foldingStopMarker.exec(r)) ? "end" === n[0] && "keyword" === e.getTokenAt(i, n.index + 1).type ? this.luaBlock(e, i, n.index + 1) : "]" === n[0][0] ? e.getCommentFoldRange(i, n.index + 1) : this.closingBracketBlock(e, "}", i, n.index + n[0].length) : void 0
                    }, this.luaBlock = function(e, t, i, n) {
                        var r = new s(e, t, i),
                            a = {
                                function: 1,
                                do: 1,
                                then: 1,
                                elseif: -1,
                                end: -1,
                                repeat: 1,
                                until: -1
                            },
                            c = r.getCurrentToken();
                        if (c && "keyword" == c.type) {
                            var l = c.value,
                                h = [l],
                                u = a[l];
                            if (u) {
                                var d = -1 === u ? r.getCurrentTokenColumn() : e.getLine(t).length,
                                    g = t;
                                for (r.step = -1 === u ? r.stepBackward : r.stepForward; c = r.step();)
                                    if ("keyword" === c.type) {
                                        var f = u * a[c.value];
                                        if (f > 0) h.unshift(c.value);
                                        else if (f <= 0) {
                                            if (h.shift(), !h.length && "elseif" != c.value) break;
                                            0 === f && h.unshift(c.value)
                                        }
                                    } if (!c) return null;
                                if (n) return r.getCurrentTokenRange();
                                t = r.getCurrentTokenRow();
                                return -1 === u ? new o(t, e.getLine(t).length, g, d) : new o(g, d, t, r.getCurrentTokenColumn())
                            }
                        }
                    }
                }.call(a.prototype)
        })), ace.define("ace/mode/lua", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/oop"),
                r = e("./text").Mode,
                o = e("./lua_highlight_rules").LuaHighlightRules,
                s = e("./folding/lua").FoldMode,
                a = e("../range").Range,
                c = e("../worker/worker_client").WorkerClient,
                l = function() {
                    this.HighlightRules = o, this.foldingRules = new s, this.$behaviour = this.$defaultBehaviour
                };
            n.inherits(l, r),
                function() {
                    function e(e) {
                        for (var i = 0, n = 0; n < e.length; n++) {
                            var r = e[n];
                            "keyword" == r.type ? r.value in t && (i += t[r.value]) : "paren.lparen" == r.type ? i += r.value.length : "paren.rparen" == r.type && (i -= r.value.length)
                        }
                        return i < 0 ? -1 : i > 0 ? 1 : 0
                    }
                    this.lineCommentStart = "--", this.blockComment = {
                        start: "--[",
                        end: "]--"
                    };
                    var t = {
                            function: 1,
                            then: 1,
                            do: 1,
                            else: 1,
                            elseif: 1,
                            repeat: 1,
                            end: -1,
                            until: -1
                        },
                        i = ["else", "elseif", "end", "until"];
                    this.getNextLineIndent = function(t, i, n) {
                        var r = this.$getIndent(i),
                            o = 0,
                            s = this.getTokenizer().getLineTokens(i, t).tokens;
                        return "start" == t && (o = e(s)), o > 0 ? r + n : o < 0 && r.substr(r.length - n.length) == n && !this.checkOutdent(t, i, "\n") ? r.substr(0, r.length - n.length) : r
                    }, this.checkOutdent = function(e, t, n) {
                        if ("\n" != n && "\r" != n && "\r\n" != n) return !1;
                        if (t.match(/^\s*[\)\}\]]$/)) return !0;
                        var r = this.getTokenizer().getLineTokens(t.trim(), e).tokens;
                        return !(!r || !r.length) && ("keyword" == r[0].type && -1 != i.indexOf(r[0].value))
                    }, this.getMatching = function(e, i, n) {
                        if (null == i) {
                            var r = e.selection.lead;
                            n = r.column, i = r.row
                        }
                        var o = e.getTokenAt(i, n);
                        if (o && o.value in t) return this.foldingRules.luaBlock(e, i, n, !0)
                    }, this.autoOutdent = function(e, t, i) {
                        var n = t.getLine(i).match(/^\s*/)[0].length;
                        if (n && i) {
                            var r = this.getMatching(t, i, n + 1);
                            if (r && r.start.row != i) {
                                var o = this.$getIndent(t.getLine(r.start.row));
                                o.length != n && (t.replace(new a(i, 0, i, n), o), t.outdentRows(new a(i + 1, 0, i + 1, 0)))
                            }
                        }
                    }, this.createWorker = function(e) {
                        var t = new c(["ace"], "ace/mode/lua_worker", "Worker");
                        return t.attachToDocument(e.getDocument()), t.on("annotate", (function(t) {
                            e.setAnnotations(t.data)
                        })), t.on("terminate", (function() {
                            e.clearAnnotations()
                        })), t
                    }, this.$id = "ace/mode/lua"
                }.call(l.prototype), t.Mode = l
        })), ace.require(["ace/mode/lua"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/snippets/text", [], (function(e, t, i) {
            "use strict";
            t.snippetText = void 0, t.scope = "text"
        })), ace.require(["ace/snippets/text"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/snippets/lua", [], (function(e, t, i) {
            "use strict";
            t.snippetText = "snippet #!\n\t#!/usr/bin/env lua\n\t$1\nsnippet local\n\tlocal ${1:x} = ${2:1}\nsnippet fun\n\tfunction ${1:fname}(${2:...})\n\t\t${3:-- body}\n\tend\nsnippet for\n\tfor ${1:i}=${2:1},${3:10} do\n\t\t${4:print(i)}\n\tend\nsnippet forp\n\tfor ${1:i},${2:v} in pairs(${3:table_name}) do\n\t   ${4:-- body}\n\tend\nsnippet fori\n\tfor ${1:i},${2:v} in ipairs(${3:table_name}) do\n\t   ${4:-- body}\n\tend\n", t.scope = "lua"
        })), ace.require(["ace/snippets/lua"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    (function(e) {
        ace.define("ace/ext/searchbox", [], (function(e, t, i) {
            "use strict";
            var n = e("../lib/dom"),
                r = e("../lib/lang"),
                o = e("../lib/event"),
                s = '.ace_search {background-color: #ddd;color: #666;border: 1px solid #cbcbcb;border-top: 0 none;overflow: hidden;margin: 0;padding: 4px 6px 0 4px;position: absolute;top: 0;z-index: 99;white-space: normal;}.ace_search.left {border-left: 0 none;border-radius: 0px 0px 5px 0px;left: 0;}.ace_search.right {border-radius: 0px 0px 0px 5px;border-right: 0 none;right: 0;}.ace_search_form, .ace_replace_form {margin: 0 20px 4px 0;overflow: hidden;line-height: 1.9;}.ace_replace_form {margin-right: 0;}.ace_search_form.ace_nomatch {outline: 1px solid red;}.ace_search_field {border-radius: 3px 0 0 3px;background-color: white;color: black;border: 1px solid #cbcbcb;border-right: 0 none;outline: 0;padding: 0;font-size: inherit;margin: 0;line-height: inherit;padding: 0 6px;min-width: 17em;vertical-align: top;min-height: 1.8em;box-sizing: content-box;}.ace_searchbtn {border: 1px solid #cbcbcb;line-height: inherit;display: inline-block;padding: 0 6px;background: #fff;border-right: 0 none;border-left: 1px solid #dcdcdc;cursor: pointer;margin: 0;position: relative;color: #666;}.ace_searchbtn:last-child {border-radius: 0 3px 3px 0;border-right: 1px solid #cbcbcb;}.ace_searchbtn:disabled {background: none;cursor: default;}.ace_searchbtn:hover {background-color: #eef1f6;}.ace_searchbtn.prev, .ace_searchbtn.next {padding: 0px 0.7em}.ace_searchbtn.prev:after, .ace_searchbtn.next:after {content: "";border: solid 2px #888;width: 0.5em;height: 0.5em;border-width:  2px 0 0 2px;display:inline-block;transform: rotate(-45deg);}.ace_searchbtn.next:after {border-width: 0 2px 2px 0 ;}.ace_searchbtn_close {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;border-radius: 50%;border: 0 none;color: #656565;cursor: pointer;font: 16px/16px Arial;padding: 0;height: 14px;width: 14px;top: 9px;right: 7px;position: absolute;}.ace_searchbtn_close:hover {background-color: #656565;background-position: 50% 100%;color: white;}.ace_button {margin-left: 2px;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;overflow: hidden;opacity: 0.7;border: 1px solid rgba(100,100,100,0.23);padding: 1px;box-sizing:    border-box!important;color: black;}.ace_button:hover {background-color: #eee;opacity:1;}.ace_button:active {background-color: #ddd;}.ace_button.checked {border-color: #3399ff;opacity:1;}.ace_search_options{margin-bottom: 3px;text-align: right;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;clear: both;}.ace_search_counter {float: left;font-family: arial;padding: 0 8px;}',
                a = e("../keyboard/hash_handler").HashHandler,
                c = e("../lib/keys");
            n.importCssString(s, "ace_searchbox");
            var l = function(e, t, i) {
                var r = n.createElement("div");
                n.buildDom(["div", {
                        class: "ace_search right"
                    },
                    ["span", {
                        action: "hide",
                        class: "ace_searchbtn_close"
                    }],
                    ["div", {
                            class: "ace_search_form"
                        },
                        ["input", {
                            class: "ace_search_field",
                            placeholder: "Search for",
                            spellcheck: "false"
                        }],
                        ["span", {
                            action: "findPrev",
                            class: "ace_searchbtn prev"
                        }, "​"],
                        ["span", {
                            action: "findNext",
                            class: "ace_searchbtn next"
                        }, "​"],
                        ["span", {
                            action: "findAll",
                            class: "ace_searchbtn",
                            title: "Alt-Enter"
                        }, "All"]
                    ],
                    ["div", {
                            class: "ace_replace_form"
                        },
                        ["input", {
                            class: "ace_search_field",
                            placeholder: "Replace with",
                            spellcheck: "false"
                        }],
                        ["span", {
                            action: "replaceAndFindNext",
                            class: "ace_searchbtn"
                        }, "Replace"],
                        ["span", {
                            action: "replaceAll",
                            class: "ace_searchbtn"
                        }, "All"]
                    ],
                    ["div", {
                            class: "ace_search_options"
                        },
                        ["span", {
                            action: "toggleReplace",
                            class: "ace_button",
                            title: "Toggle Replace mode",
                            style: "float:left;margin-top:-2px;padding:0 5px;"
                        }, "+"],
                        ["span", {
                            class: "ace_search_counter"
                        }],
                        ["span", {
                            action: "toggleRegexpMode",
                            class: "ace_button",
                            title: "RegExp Search"
                        }, ".*"],
                        ["span", {
                            action: "toggleCaseSensitive",
                            class: "ace_button",
                            title: "CaseSensitive Search"
                        }, "Aa"],
                        ["span", {
                            action: "toggleWholeWords",
                            class: "ace_button",
                            title: "Whole Word Search"
                        }, "\\b"],
                        ["span", {
                            action: "searchInSelection",
                            class: "ace_button",
                            title: "Search In Selection"
                        }, "S"]
                    ]
                ], r), this.element = r.firstChild, this.setSession = this.setSession.bind(this), this.$init(), this.setEditor(e), n.importCssString(s, "ace_searchbox", e.container)
            };
            (function() {
                this.setEditor = function(e) {
                    e.searchBox = this, e.renderer.scroller.appendChild(this.element), this.editor = e
                }, this.setSession = function(e) {
                    this.searchRange = null, this.$syncOptions(!0)
                }, this.$initElements = function(e) {
                    this.searchBox = e.querySelector(".ace_search_form"), this.replaceBox = e.querySelector(".ace_replace_form"), this.searchOption = e.querySelector("[action=searchInSelection]"), this.replaceOption = e.querySelector("[action=toggleReplace]"), this.regExpOption = e.querySelector("[action=toggleRegexpMode]"), this.caseSensitiveOption = e.querySelector("[action=toggleCaseSensitive]"), this.wholeWordOption = e.querySelector("[action=toggleWholeWords]"), this.searchInput = this.searchBox.querySelector(".ace_search_field"), this.replaceInput = this.replaceBox.querySelector(".ace_search_field"), this.searchCounter = e.querySelector(".ace_search_counter")
                }, this.$init = function() {
                    var e = this.element;
                    this.$initElements(e);
                    var t = this;
                    o.addListener(e, "mousedown", (function(e) {
                        setTimeout((function() {
                            t.activeInput.focus()
                        }), 0), o.stopPropagation(e)
                    })), o.addListener(e, "click", (function(e) {
                        var i = (e.target || e.srcElement).getAttribute("action");
                        i && t[i] ? t[i]() : t.$searchBarKb.commands[i] && t.$searchBarKb.commands[i].exec(t), o.stopPropagation(e)
                    })), o.addCommandKeyListener(e, (function(e, i, n) {
                        var r = c.keyCodeToString(n),
                            s = t.$searchBarKb.findKeyCommand(i, r);
                        s && s.exec && (s.exec(t), o.stopEvent(e))
                    })), this.$onChange = r.delayedCall((function() {
                        t.find(!1, !1)
                    })), o.addListener(this.searchInput, "input", (function() {
                        t.$onChange.schedule(20)
                    })), o.addListener(this.searchInput, "focus", (function() {
                        t.activeInput = t.searchInput, t.searchInput.value && t.highlight()
                    })), o.addListener(this.replaceInput, "focus", (function() {
                        t.activeInput = t.replaceInput, t.searchInput.value && t.highlight()
                    }))
                }, this.$closeSearchBarKb = new a([{
                    bindKey: "Esc",
                    name: "closeSearchBar",
                    exec: function(e) {
                        e.searchBox.hide()
                    }
                }]), this.$searchBarKb = new a, this.$searchBarKb.bindKeys({
                    "Ctrl-f|Command-f": function(e) {
                        var t = e.isReplace = !e.isReplace;
                        e.replaceBox.style.display = t ? "" : "none", e.replaceOption.checked = !1, e.$syncOptions(), e.searchInput.focus()
                    },
                    "Ctrl-H|Command-Option-F": function(e) {
                        e.editor.getReadOnly() || (e.replaceOption.checked = !0, e.$syncOptions(), e.replaceInput.focus())
                    },
                    "Ctrl-G|Command-G": function(e) {
                        e.findNext()
                    },
                    "Ctrl-Shift-G|Command-Shift-G": function(e) {
                        e.findPrev()
                    },
                    esc: function(e) {
                        setTimeout((function() {
                            e.hide()
                        }))
                    },
                    Return: function(e) {
                        e.activeInput == e.replaceInput && e.replace(), e.findNext()
                    },
                    "Shift-Return": function(e) {
                        e.activeInput == e.replaceInput && e.replace(), e.findPrev()
                    },
                    "Alt-Return": function(e) {
                        e.activeInput == e.replaceInput && e.replaceAll(), e.findAll()
                    },
                    Tab: function(e) {
                        (e.activeInput == e.replaceInput ? e.searchInput : e.replaceInput).focus()
                    }
                }), this.$searchBarKb.addCommands([{
                    name: "toggleRegexpMode",
                    bindKey: {
                        win: "Alt-R|Alt-/",
                        mac: "Ctrl-Alt-R|Ctrl-Alt-/"
                    },
                    exec: function(e) {
                        e.regExpOption.checked = !e.regExpOption.checked, e.$syncOptions()
                    }
                }, {
                    name: "toggleCaseSensitive",
                    bindKey: {
                        win: "Alt-C|Alt-I",
                        mac: "Ctrl-Alt-R|Ctrl-Alt-I"
                    },
                    exec: function(e) {
                        e.caseSensitiveOption.checked = !e.caseSensitiveOption.checked, e.$syncOptions()
                    }
                }, {
                    name: "toggleWholeWords",
                    bindKey: {
                        win: "Alt-B|Alt-W",
                        mac: "Ctrl-Alt-B|Ctrl-Alt-W"
                    },
                    exec: function(e) {
                        e.wholeWordOption.checked = !e.wholeWordOption.checked, e.$syncOptions()
                    }
                }, {
                    name: "toggleReplace",
                    exec: function(e) {
                        e.replaceOption.checked = !e.replaceOption.checked, e.$syncOptions()
                    }
                }, {
                    name: "searchInSelection",
                    exec: function(e) {
                        e.searchOption.checked = !e.searchRange, e.setSearchRange(e.searchOption.checked && e.editor.getSelectionRange()), e.$syncOptions()
                    }
                }]), this.setSearchRange = function(e) {
                    this.searchRange = e, e ? this.searchRangeMarker = this.editor.session.addMarker(e, "ace_active-line") : this.searchRangeMarker && (this.editor.session.removeMarker(this.searchRangeMarker), this.searchRangeMarker = null)
                }, this.$syncOptions = function(e) {
                    n.setCssClass(this.replaceOption, "checked", this.searchRange), n.setCssClass(this.searchOption, "checked", this.searchOption.checked), this.replaceOption.textContent = this.replaceOption.checked ? "-" : "+", n.setCssClass(this.regExpOption, "checked", this.regExpOption.checked), n.setCssClass(this.wholeWordOption, "checked", this.wholeWordOption.checked), n.setCssClass(this.caseSensitiveOption, "checked", this.caseSensitiveOption.checked);
                    var t = this.editor.getReadOnly();
                    this.replaceOption.style.display = t ? "none" : "", this.replaceBox.style.display = this.replaceOption.checked && !t ? "" : "none", this.find(!1, !1, e)
                }, this.highlight = function(e) {
                    this.editor.session.highlight(e || this.editor.$search.$options.re), this.editor.renderer.updateBackMarkers()
                }, this.find = function(e, t, i) {
                    var r = !this.editor.find(this.searchInput.value, {
                        skipCurrent: e,
                        backwards: t,
                        wrap: !0,
                        regExp: this.regExpOption.checked,
                        caseSensitive: this.caseSensitiveOption.checked,
                        wholeWord: this.wholeWordOption.checked,
                        preventScroll: i,
                        range: this.searchRange
                    }) && this.searchInput.value;
                    n.setCssClass(this.searchBox, "ace_nomatch", r), this.editor._emit("findSearchBox", {
                        match: !r
                    }), this.highlight(), this.updateCounter()
                }, this.updateCounter = function() {
                    var e = this.editor,
                        t = e.$search.$options.re,
                        i = 0,
                        n = 0;
                    if (t) {
                        var r = this.searchRange ? e.session.getTextRange(this.searchRange) : e.getValue(),
                            o = e.session.doc.positionToIndex(e.selection.anchor);
                        this.searchRange && (o -= e.session.doc.positionToIndex(this.searchRange.start));
                        for (var s, a = t.lastIndex = 0;
                            (s = t.exec(r)) && (i++, (a = s.index) <= o && n++, !(i > 999)) && (s[0] || (t.lastIndex = a += 1, !(a >= r.length))););
                    }
                    this.searchCounter.textContent = n + " of " + (i > 999 ? "999+" : i)
                }, this.findNext = function() {
                    this.find(!0, !1)
                }, this.findPrev = function() {
                    this.find(!0, !0)
                }, this.findAll = function() {
                    var e = !this.editor.findAll(this.searchInput.value, {
                        regExp: this.regExpOption.checked,
                        caseSensitive: this.caseSensitiveOption.checked,
                        wholeWord: this.wholeWordOption.checked
                    }) && this.searchInput.value;
                    n.setCssClass(this.searchBox, "ace_nomatch", e), this.editor._emit("findSearchBox", {
                        match: !e
                    }), this.highlight(), this.hide()
                }, this.replace = function() {
                    this.editor.getReadOnly() || this.editor.replace(this.replaceInput.value)
                }, this.replaceAndFindNext = function() {
                    this.editor.getReadOnly() || (this.editor.replace(this.replaceInput.value), this.findNext())
                }, this.replaceAll = function() {
                    this.editor.getReadOnly() || this.editor.replaceAll(this.replaceInput.value)
                }, this.hide = function() {
                    this.active = !1, this.setSearchRange(null), this.editor.off("changeSession", this.setSession), this.element.style.display = "none", this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb), this.editor.focus()
                }, this.show = function(e, t) {
                    this.active = !0, this.editor.on("changeSession", this.setSession), this.element.style.display = "", this.replaceOption.checked = t, e && (this.searchInput.value = e), this.searchInput.focus(), this.searchInput.select(), this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb), this.$syncOptions(!0)
                }, this.isFocused = function() {
                    var e = document.activeElement;
                    return e == this.searchInput || e == this.replaceInput
                }
            }).call(l.prototype), t.SearchBox = l, t.Search = function(e, t) {
                (e.searchBox || new l(e)).show(e.session.getTextRange(), t)
            }
        })), ace.require(["ace/ext/searchbox"], (function(t) {
            e && (e.exports = t)
        }))
    }).call(this, i(4)(e))
}, function(e, t, i) {
    "use strict";
    var n = i(6),
        r = i(3),
        o = i(66),
        s = i(13),
        a = i(5),
        c = i(17),
        l = i(143),
        h = i(20),
        u = i(2),
        d = i(32),
        g = i(30).f,
        f = i(16).f,
        p = i(8).f,
        m = i(144).trim,
        v = r.Number,
        w = v.prototype,
        b = "Number" == c(d(w)),
        y = function(e) {
            var t, i, n, r, o, s, a, c, l = h(e, !1);
            if ("string" == typeof l && l.length > 2)
                if (43 === (t = (l = m(l)).charCodeAt(0)) || 45 === t) {
                    if (88 === (i = l.charCodeAt(2)) || 120 === i) return NaN
                } else if (48 === t) {
                switch (l.charCodeAt(1)) {
                    case 66:
                    case 98:
                        n = 2, r = 49;
                        break;
                    case 79:
                    case 111:
                        n = 8, r = 55;
                        break;
                    default:
                        return +l
                }
                for (s = (o = l.slice(2)).length, a = 0; a < s; a++)
                    if ((c = o.charCodeAt(a)) < 48 || c > r) return NaN;
                return parseInt(o, n)
            }
            return +l
        };
    if (o("Number", !v(" 0o1") || !v("0b1") || v("+0x1"))) {
        for (var C, S = function(e) {
                var t = arguments.length < 1 ? 0 : e,
                    i = this;
                return i instanceof S && (b ? u((function() {
                    w.valueOf.call(i)
                })) : "Number" != c(i)) ? l(new v(y(t)), i, S) : y(t)
            }, k = n ? g(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++) a(v, C = k[x]) && !a(S, C) && p(S, C, f(v, C));
        S.prototype = w, w.constructor = S, s(r, "Number", S)
    }
}, function(e, t, i) {
    var n = i(7),
        r = i(77);
    e.exports = function(e, t, i) {
        var o, s;
        return r && "function" == typeof(o = t.constructor) && o !== i && n(s = o.prototype) && s !== i.prototype && r(e, s), e
    }
}, function(e, t, i) {
    var n = i(18),
        r = "[" + i(145) + "]",
        o = RegExp("^" + r + r + "*"),
        s = RegExp(r + r + "*$"),
        a = function(e) {
            return function(t) {
                var i = String(n(t));
                return 1 & e && (i = i.replace(o, "")), 2 & e && (i = i.replace(s, "")), i
            }
        };
    e.exports = {
        start: a(1),
        end: a(2),
        trim: a(3)
    }
}, function(e, t) {
    e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
}, function(e, t, i) {}, function(e, t, i) {
    "use strict";
    i.r(t);
    i(39), i(95), i(96), i(97), i(73), i(78), i(52), i(80), i(107), i(53), i(110), i(111), i(83), i(116);
    var n = i(23),
        r = i.n(n),
        o = i(89),
        s = i.n(o);
    i(54), i(117), i(37), i(118), i(119), i(88), i(38);

    function a(e, t) {
        if (null == e) return {};
        var i, n, r = function(e, t) {
            if (null == e) return {};
            var i, n, r = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) i = o[n], t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++) i = o[n], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
        }
        return r
    }
    var c = Array.prototype.forEach,
        l = Array.prototype.slice,
        h = Array.prototype.filter,
        u = Array.prototype.find,
        d = function e(t) {
            var i = t.tag,
                n = t.text,
                r = a(t, ["tag", "text"]),
                o = "1" === (n ? "3" : "1") ? document.createElement(i) : document.createTextNode(n);
            return Object.keys(r).forEach((function(t) {
                var i = r[t];
                "children" === t ? i.map((function(t) {
                    return e(t)
                })).forEach((function(e) {
                    return o.appendChild(e)
                })) : "data" === t ? Object.keys(i).forEach((function(e) {
                    return o.dataset[e] = i[e]
                })) : o[t] = i
            })), o
        },
        g = function(e) {
            var t = document.createElement("textarea");
            document.body.appendChild(t), t.value = e, t.select(), document.execCommand("Copy"), t.remove()
        },
        f = function(e) {
            e.on("focus", (function() {
                var e = document.querySelectorAll(".menu-item-inner");
                e = h.call(e, (function(e) {
                    return !e.classList.contains("not-focus-hide")
                })), c.call(e, (function(e) {
                    e.classList.remove("show")
                }))
            }))
        };
    i(120), i(121), i(122), i(124), i(127), i(128);

    function p(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, n)
        }
        return i
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(i), !0).forEach((function(t) {
                v(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
        }
        return e
    }

    function v(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function w(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function b(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var y = {
            startX: 0,
            startY: 0,
            diffX: 0,
            diffY: 0,
            minLeft: 0,
            minTop: 0
        },
        C = function() {
            function e(t, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                w(this, e), this.dargTarget = t, this.container = i, this.options = m(m({}, y), n), this.isCanDrag = !1, this.enableDarg = this.enableDarg.bind(this), this.disableDarg = this.disableDarg.bind(this), this.handleDragTargetMousedown = this.handleDragTargetMousedown.bind(this), this.handleDocMousemove = this.handleDocMousemove.bind(this)
            }
            var t, i, n;
            return t = e, (i = [{
                key: "enableDarg",
                value: function() {
                    this.isCanDrag = !0
                }
            }, {
                key: "disableDarg",
                value: function() {
                    this.isCanDrag = !1
                }
            }, {
                key: "handleDragTargetMousedown",
                value: function(e) {
                    this.enableDarg();
                    var t = e.clientX,
                        i = e.clientY,
                        n = this.container,
                        r = n.offsetLeft,
                        o = n.offsetTop,
                        s = this.options,
                        a = t - r - s.startX,
                        c = i - o - s.startY;
                    this.options = m(m({}, this.options), {}, {
                        diffX: a,
                        diffY: c
                    })
                }
            }, {
                key: "handleDocMousemove",
                value: function(e) {
                    if (this.isCanDrag) {
                        var t = e.clientX,
                            i = e.clientY,
                            n = this.options,
                            r = n.startX,
                            o = n.startY,
                            s = t - n.diffX - r,
                            a = i - n.diffY - o,
                            c = this.options,
                            l = c.minLeft,
                            h = c.minTop,
                            u = document.body.clientWidth - r - this.container.offsetWidth,
                            d = document.body.clientHeight - o - this.container.offsetHeight;
                        s = s < l ? l : s > u ? u : s, a = a < h ? h : a > d ? d : a, this.container.style.left = s + "px", this.container.style.top = a + "px"
                    }
                }
            }, {
                key: "init",
                value: function() {
                    document.addEventListener("mouseup", this.disableDarg, !1), window.addEventListener("blur", this.disableDarg, !1), this.dargTarget.addEventListener("mousedown", this.handleDragTargetMousedown, !1), document.addEventListener("mousemove", this.handleDocMousemove, !1)
                }
            }, {
                key: "destory",
                value: function() {
                    document.removeEventListener("mouseup", this.disableDarg, !1), window.removeEventListener("blur", this.disableDarg, !1), this.dargTarget.removeEventListener("mousedown", this.handleDragTargetMousedown, !1), document.removeEventListener("mousemove", this.handleDocMousemove, !1)
                }
            }]) && b(t.prototype, i), n && b(t, n), e
        }(),
        S = window.NativeGetIDLibraryData ? JSON.parse(window.NativeGetIDLibraryData()) : [],
        k = document.getElementById("searchIdWrapper"),
        x = document.getElementById("searchIdTitle"),
        $ = document.getElementById("searchIdCloseIcon"),
        A = document.getElementById("searchIdInput"),
        E = document.getElementById("searchIdHistoryList"),
        L = document.getElementById("searchIdList"),
        R = function() {
            var e = window.localStorage.getItem("searchStorage");
            return e ? e.split(",") : []
        },
        _ = function() {
            var e = R();
            e.length && (E.innerHTML = "", e.forEach((function(e) {
                var t = {
                    tag: "div",
                    className: "history-item",
                    data: {
                        key: e
                    },
                    children: [{
                        text: e
                    }]
                };
                E.appendChild(d(t))
            })))
        },
        T = function() {
            E.style.display = "none"
        },
        M = !1,
        O = function() {
            k.style.display = "none", T()
        },
        F = function() {
            _(),
                function() {
                    A.addEventListener("click", (function(e) {
                        e.stopPropagation(), _(), E.style.display = "block"
                    }), !1), E.addEventListener("click", (function(e) {
                        var t = e.target.dataset.key,
                            i = void 0 === t ? "" : t;
                        A.value !== i && (A.value = i, T(), I(S, i), D())
                    }));
                    var e, t, i, n = !1;
                    A.addEventListener("compositionstart", (function() {
                        n = !0
                    }), !1), A.addEventListener("compositionend", (function() {
                        n = !1
                    }), !1), A.addEventListener("input", T, !1), A.addEventListener("input", (e = 500, t = function(e) {
                        if (!n) {
                            var t = e.target.value;
                            t ? (function(e) {
                                if (e) {
                                    var t = R();
                                    t.unshift(e), t = t.slice(0, 5), window.localStorage.setItem("searchStorage", t.join(","))
                                }
                            }(t), I(S, t), D()) : (I(S), D())
                        }
                    }, i = null, function() {
                        var n = this,
                            r = arguments;
                        clearTimeout(i), i = setTimeout((function() {
                            t.apply(n, r)
                        }), e)
                    }), !1)
                }()
        },
        I = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                i = e.reduce((function(e, t) {
                    return e = e.concat(t.Class || [])
                }), []),
                n = i;
            if (t) {
                var r = JSON.parse(JSON.stringify(i));
                r.forEach((function(e) {
                    e.DefList = e.DefList.filter((function(e) {
                        var i = e.ID,
                            n = e.Name;
                        return String(i).includes(t) || n.includes(t)
                    }))
                })), n = r
            }
            L.innerHTML = "";
            var o = document.createDocumentFragment();
            n.forEach((function(e) {
                var t = e.DefList,
                    i = void 0 === t ? [] : t,
                    n = e.Name;
                if (i.length) {
                    var r = d({
                        tag: "dt",
                        className: "d-title",
                        children: [{
                            text: n
                        }]
                    });
                    o.appendChild(r), i.forEach((function(e) {
                        var t = e.Name,
                            i = e.ID,
                            n = e.Level,
                            r = void 0 === n ? 0 : n,
                            s = d({
                                tag: "dd",
                                className: "d-item",
                                data: {
                                    id: i,
                                    level: r
                                },
                                children: [{
                                    text: "".concat(t, ": ").concat(i).concat(r > 0 ? "-".concat(r) : "")
                                }]
                            });
                        o.appendChild(s)
                    }))
                }
            })), L.appendChild(o)
        },
        W = function() {
            var e, t, i = k.offsetWidth,
                n = k.offsetHeight,
                r = window.innerWidth,
                o = window.innerHeight;
            e = (r - i) / 2, t = (o - n) / 2, k.style.top = t + "px", k.style.left = e + "px";
            new C(x, k, {
                startX: 0,
                startY: 0,
                diffX: 0,
                diffY: 0,
                minLeft: 0,
                minTop: 40
            }).init()
        },
        B = 0,
        N = function() {
            D();
            document.addEventListener("keydown", (function(e) {
                var t = "block" === k.style.display,
                    i = "block" === E.style.display;
                if (t && !i) {
                    var n = l.call(L.querySelectorAll(".d-item"));
                    if (n.length) {
                        switch (e.keyCode) {
                            case 38:
                                B = Math.max(B - 1, 0);
                                break;
                            case 40:
                                B = Math.min(B + 1, n.length - 1);
                                break;
                            case 13:
                                var r = n[B].dataset.id;
                                r && (O(), e.preventDefault(), window.JsInsertId(r))
                        }
                        n.forEach((function(e) {
                                return e.classList.remove("current")
                            })),
                            function(e, t) {
                                e[t].classList.add("current")
                            }(n, B), window.setTimeout((function() {
                                n[B].scrollIntoView({
                                    behavior: "smooth",
                                    block: "end",
                                    inline: "nearest"
                                })
                            }))
                    }
                }
            }), !1)
        },
        D = function() {
            var e = l.call(L.querySelectorAll(".d-item"));
            B = 0, e.length && e[B].classList.add("current")
        },
        P = function() {
            I(S), k.addEventListener("click", (function() {
                T()
            }), !1), $.addEventListener("click", (function(e) {
                e.stopPropagation(), O()
            }), !1), L.addEventListener("click", (function(e) {
                var t = e.target;
                if ("DD" === t.tagName) {
                    var i = t.dataset,
                        n = i.id,
                        r = i.level,
                        o = void 0 === r ? 0 : r;
                    if (n) {
                        O();
                        var s = n + (o > 0 ? ", ".concat(o) : "");
                        window.JsInsertId(s)
                    }
                }
            }), !1), F()
        },
        H = function(e) {
            e.commands.addCommand({
                name: "save",
                bindKey: {
                    win: "ctrl-s",
                    mac: "cmd-s"
                },
                exec: function() {
                    window.NativeSaveScript && window.NativeSaveScript(e.getValue())
                }
            }), e.commands.addCommand({
                name: "insert-id",
                bindKey: {
                    win: "ctrl-i",
                    mac: "cmd-i"
                },
                exec: function() {
                    k.style.display = "block", A.focus(), D(), M || (M = !0, W(), N())
                }
            })
        },
        z = (i(129), i(130), i(131), i(132), i(133), i(134), i(135), i(136), i(137), i(138), i(139), i(140), i(141), i.p + "ca8bf9308908594a0acd88fe68906a5a.js");
    r.a.config.setModuleUrl("ace/mode/lua_worker", z);
    var U = document.getElementById("codeEditor"),
        K = window.localStorage.getItem("currentFontSize") || "14px";
    U.style.fontSize = K;
    var V, G, j = (V = function() {
            var e = r.a.edit("codeEditor", {
                value: "",
                mode: "ace/mode/lua",
                useWorker: !0,
                enableBasicAutocompletion: !0,
                enableSnippets: !0,
                enableEmmet: !0,
                enableLiveAutocompletion: !0
            });
            s.a.addCompleter({
                getCompletions: function(e, t, i, n, r) {
                    r(null, GetGlobalVars()), r(null, window.GetServiceFuncs())
                }
            }), e.setTheme("ace/theme/".concat(window.localStorage.getItem("currentTheme") || "textmate")), f(e), H(e);
            var t = window.GetSnippetText();
            return function(e, t, i, n) {
                var o = r.a.require("ace/snippets").snippetManager,
                    s = t.$mode.$id || "",
                    a = o.files[s];
                a.scope = i, a.snippetText = n, a.snippet = o.parseSnippetFile(n, a.scope), o.register(a.snippet, a.scope)
            }(0, e.session, "lua", t), window.aceEditor = e, e
        }, function() {
            return G || (G = V())
        }),
        J = j,
        Y = !1,
        Q = document.getElementById("toggleWikiBtn"),
        q = document.getElementById("devWiki"),
        Z = document.getElementById("devWikiMask"),
        X = document.getElementById("devWikiBar");

    function ee() {
        X.addEventListener("mousedown", (function() {
            Y = !0, Z.classList.add("show")
        }), !1), window.addEventListener("mousemove", (function(e) {
            var t = e.pageX;
            if (Y) {
                var i = document.body.offsetWidth - t;
                q.style.width = i + "px"
            }
        }), !1), window.addEventListener("mouseup", (function() {
            Y && (Y = !1, Z.classList.remove("show"))
        }), !1), Q.addEventListener("click", (function(e) {
            e.preventDefault(), e.stopPropagation(), q.classList.toggle("show")
        }), !1)
    }
    var te = J(),
        ie = document.getElementById("themeWrapper"),
        ne = document.getElementById("themeInner"),
        re = document.getElementById("themeBtn"),
        oe = ne.querySelectorAll(".theme-item"),
        se = function() {
            ne.classList.remove("show")
        },
        ae = function() {
            re.addEventListener("click", (function() {
                ne.classList.toggle("show")
            }))
        },
        ce = function() {
            ne.addEventListener("click", (function(e) {
                var t = e.target.dataset.theme;
                window.localStorage.setItem("currentTheme", t), se(),
                    function(e) {
                        e = e || window.localStorage.getItem("currentTheme") || "textmate", c.call(oe, (function(t) {
                            t.classList.remove("current"), t.dataset.theme === e && t.classList.add("current")
                        }))
                    }(t), te.setTheme("ace/theme/".concat(t))
            }))
        };

    function le() {
        ae(), ie.addEventListener("mouseleave", (function() {
            se()
        })), ce()
    }
    var he = J(),
        ue = window.insertCodeConfig,
        de = document.getElementById("insertWrapper"),
        ge = document.getElementById("insertBtn"),
        fe = document.getElementById("insertInner"),
        pe = document.getElementById("insertInnerTop"),
        me = fe.querySelector(".parent"),
        ve = fe.querySelectorAll(".child"),
        we = function() {
            ge.addEventListener("click", (function() {
                fe.classList.toggle("show")
            }))
        },
        be = function() {
            pe.querySelector(".close-icon").addEventListener("click", (function(e) {
                e.stopPropagation(), fe.classList.remove("show")
            }))
        };

    function ye() {
        var e, t;
        we(), de.addEventListener("mouseleave", (function() {
            c.call(ve, (function(e) {
                return e.style.display = "none"
            }))
        })), me.addEventListener("mouseover", (function(e) {
            var t = e.target.dataset.insertType,
                i = u.call(ve, (function(e) {
                    return e.dataset.parentType === t
                }));
            c.call(ve, (function(e) {
                return e.style.display = "none"
            })), i.style.display = "inline-block"
        })), c.call(ve, (function(e) {
            e.addEventListener("click", (function(e) {
                var t = e.target.dataset.insertType;
                he.insert(ue[t])
            }))
        })), be(), e = de.offsetLeft, t = de.offsetHeight + de.offsetTop, new C(pe, fe, {
            startX: e,
            startY: t,
            diffX: 0,
            diffY: 0,
            minLeft: -72,
            minTop: 28
        }).init()
    }
    var Ce = J(),
        Se = document.getElementById("fontWrapper"),
        ke = document.getElementById("fontInner"),
        xe = document.getElementById("fontBtn"),
        $e = ke.querySelectorAll(".font-item"),
        Ae = function() {
            ke.classList.remove("show")
        },
        Ee = function() {
            xe.addEventListener("click", (function() {
                ke.classList.toggle("show")
            }))
        },
        Le = function() {
            ke.addEventListener("click", (function(e) {
                var t = e.target.dataset.size;
                window.localStorage.setItem("currentFontSize", t), Ae(),
                    function(e) {
                        e = e || window.localStorage.getItem("currentFontSize") || "textmate", c.call($e, (function(t) {
                            t.classList.remove("current"), t.dataset.size === e && t.classList.add("current")
                        }))
                    }(t), Ce.container.style.fontSize = t
            }))
        };

    function Re() {
        Ee(), Se.addEventListener("mouseleave", (function() {
            Ae()
        })), Le()
    }
    i(142);
    var _e = document.getElementById("idlibWrapper"),
        Te = document.getElementById("idlibInner"),
        Me = document.getElementById("idlibBtn"),
        Oe = function() {
            Te.classList.remove("show")
        },
        Fe = function() {
            Me.addEventListener("click", (function() {
                Te.classList.toggle("show")
            }))
        };

    function Ie() {
        Fe(), _e.addEventListener("mouseleave", (function() {
            Oe()
        })), Te.addEventListener("click", (function(e) {
            var t = e.target;
            Oe();
            var i = t.dataset.type;
            window.NativeOpenIDLibrary && window.NativeOpenIDLibrary(Number(i))
        }))
    }
    var We = [{
            tag: "li",
            className: "contextmenu-item",
            data: {
                name: "undo",
                key: "ctrl-z"
            },
            children: [{
                text: "撤销-Undo（Ctrl + Z）"
            }]
        }, {
            tag: "li",
            className: "contextmenu-item",
            data: {
                name: "cut",
                key: "ctrl-x"
            },
            children: [{
                text: "剪切-Cut（Ctrl + X）"
            }]
        }, {
            tag: "li",
            className: "contextmenu-item",
            data: {
                name: "copy",
                key: "ctrl-c"
            },
            children: [{
                text: "复制-Copy（Ctrl + C）"
            }]
        }, {
            tag: "li",
            className: "contextmenu-item",
            data: {
                name: "paste",
                key: "ctrl-v"
            },
            children: [{
                text: "粘贴-Paste（Ctrl + V）"
            }]
        }, {
            tag: "li",
            className: "contextmenu-item",
            data: {
                name: "insert-id",
                key: "ctrl-i"
            },
            children: [{
                text: "插入ID-InsertId（Ctrl + I）"
            }]
        }, {
            tag: "li",
            className: "contextmenu-item",
            data: {
                name: "find",
                key: "ctrl-f"
            },
            children: [{
                text: "查找-Find（Ctrl + F）"
            }]
        }, {
            tag: "li",
            className: "contextmenu-item",
            data: {
                name: "select-all",
                key: "ctrl-a"
            },
            children: [{
                text: "全选-SelectAll（Ctrl + A）"
            }]
        }],
        Be = function(e, t) {
            switch (t) {
                case "undo":
                    e.execCommand("undo");
                    break;
                case "cut":
                    var i = e.getSelectionRange(),
                        n = e.session.getTextRange(i);
                    g(n), e.execCommand("cut");
                    break;
                case "copy":
                    var r = e.getSelectionRange(),
                        o = e.session.getTextRange(r);
                    g(o), e.execCommand("copy");
                    break;
                case "paste":
                    var s = window.NativeGetClipBoardData();
                    s && (e.execCommand("paste", s), e.focus());
                    break;
                case "insert-id":
                    e.execCommand("insert-id");
                    break;
                case "find":
                    e.execCommand("find");
                    break;
                case "select-all":
                    e.selectAll()
            }
        },
        Ne = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = t.selector,
                n = void 0 === i ? "" : i,
                r = t.items,
                o = void 0 === r ? [] : r,
                s = t.callback,
                a = null,
                c = n ? document.querySelector(n) : document,
                l = function() {
                    a = d({
                        tag: "ul",
                        className: "contextmenu-wrapper"
                    }), o.forEach((function(e) {
                        var t = d(e);
                        a.appendChild(t)
                    })), a.addEventListener("click", (function(t) {
                        var i = t.target,
                            n = i.dataset;
                        "function" == typeof s && s.call(i, n);
                        var r = n.name;
                        Be(e, r)
                    })), document.body.appendChild(a)
                },
                h = function() {
                    a && (a.style.display = "block")
                },
                u = function() {
                    a && (a.style.display = "none")
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.x,
                        i = void 0 === t ? 0 : t,
                        n = e.y,
                        r = void 0 === n ? 0 : n;
                    a.style.left = i + "px", a.style.top = r + "px"
                },
                f = function(e) {
                    if (c.contains(e.target)) {
                        a || l(), e.preventDefault(), document.body.style.cursor = "auto", u();
                        var t = e.clientX,
                            i = e.clientY;
                        g({
                            x: t,
                            y: i
                        }), h()
                    }
                };
            document.addEventListener("contextmenu", f, !1), document.addEventListener("click", u, !1)
        },
        De = function() {
            var e = window.aceEditor;
            Ne(e, {
                selector: "#codeEditor",
                callback: function() {},
                items: We
            }), P()
        };
    i(146);

    function Pe(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var i = [],
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (r) throw o
                }
            }
            return i
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return He(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(i);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return He(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function He(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }
    var ze = J(),
        Ue = 0,
        Ke = 0;
    window.InitEditorContent = function() {
        if (window.NativeGetScript && (ze.setValue(window.NativeGetScript()), ze.clearSelection(), ze.getSession().setUndoManager(new r.a.UndoManager)), window.NativeGetCursor) {
            var e = window.NativeGetCursor(),
                t = Pe(e ? e.split(",") : [], 2),
                i = t[0];
            Ue = void 0 === i ? 0 : i;
            var n = t[1];
            Ke = void 0 === n ? 0 : n, window.JsSetCursorPosition(Ue, Ke)
        }
    }, window.JsGetScriptContent = function() {
        return ze.getValue()
    }, window.JsSetScriptContent = function(e) {
        ze.setValue(e), ze.clearSelection()
    }, window.JsGetCursorPosition = function() {
        var e = ze.getCursorPosition();
        return [e.row, e.column].join(",")
    }, window.JsSetCursorPosition = function(e, t) {
        ze.focus(), ze.moveCursorTo(e, t), ze.clearSelection()
    }, window.JsInsertId = function(e) {
        ze.insert(String(e)), ze.focus()
    }, document.addEventListener("DOMContentLoaded", (function() {
        window.InitEditorContent(), ee(), le(), ye(), Re(), Ie(), De()
    }), !1), window.addEventListener("resize", (function() {
        ze.resize()
    }), !1), window.addEventListener("load", (function() {
        ze.renderer.scrollToRow(Ue)
    }), !1)
}]);