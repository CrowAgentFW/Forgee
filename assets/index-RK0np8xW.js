function Ww(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, s);
                    i && Object.defineProperty(e, s, i.get ? i : {
                        enumerable: !0,
                        get: () => r[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
}
)();
function Hw(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function Kw(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var Pm = {
    exports: {}
}
  , pa = {}
  , km = {
    exports: {}
}
  , F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hi = Symbol.for("react.element")
  , qw = Symbol.for("react.portal")
  , Gw = Symbol.for("react.fragment")
  , Xw = Symbol.for("react.strict_mode")
  , Yw = Symbol.for("react.profiler")
  , Qw = Symbol.for("react.provider")
  , Jw = Symbol.for("react.context")
  , Zw = Symbol.for("react.forward_ref")
  , ex = Symbol.for("react.suspense")
  , tx = Symbol.for("react.memo")
  , nx = Symbol.for("react.lazy")
  , Sf = Symbol.iterator;
function rx(e) {
    return e === null || typeof e != "object" ? null : (e = Sf && e[Sf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Am = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Tm = Object.assign
  , bm = {};
function qr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = bm,
    this.updater = n || Am
}
qr.prototype.isReactComponent = {};
qr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
qr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Nm() {}
Nm.prototype = qr.prototype;
function hc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = bm,
    this.updater = n || Am
}
var pc = hc.prototype = new Nm;
pc.constructor = hc;
Tm(pc, qr.prototype);
pc.isPureReactComponent = !0;
var Cf = Array.isArray
  , jm = Object.prototype.hasOwnProperty
  , mc = {
    current: null
}
  , Rm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mm(e, t, n) {
    var r, s = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            jm.call(t, r) && !Rm.hasOwnProperty(r) && (s[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        s.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        s.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            s[r] === void 0 && (s[r] = a[r]);
    return {
        $$typeof: hi,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: mc.current
    }
}
function sx(e, t) {
    return {
        $$typeof: hi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function gc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === hi
}
function ix(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var _f = /\/+/g;
function za(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ix("" + e.key) : t.toString(36)
}
function io(e, t, n, r, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case hi:
            case qw:
                o = !0
            }
        }
    if (o)
        return o = e,
        s = s(o),
        e = r === "" ? "." + za(o, 0) : r,
        Cf(s) ? (n = "",
        e != null && (n = e.replace(_f, "$&/") + "/"),
        io(s, t, n, "", function(u) {
            return u
        })) : s != null && (gc(s) && (s = sx(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(_f, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Cf(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + za(i, a);
            o += io(i, t, n, l, s)
        }
    else if (l = rx(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + za(i, a++),
            o += io(i, t, n, l, s);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Mi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return io(e, r, "", "", function(i) {
        return t.call(n, i, s++)
    }),
    r
}
function ox(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Le = {
    current: null
}
  , oo = {
    transition: null
}
  , ax = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: oo,
    ReactCurrentOwner: mc
};
function Im() {
    throw Error("act(...) is not supported in production builds of React.")
}
F.Children = {
    map: Mi,
    forEach: function(e, t, n) {
        Mi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Mi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Mi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!gc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = qr;
F.Fragment = Gw;
F.Profiler = Yw;
F.PureComponent = hc;
F.StrictMode = Xw;
F.Suspense = ex;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ax;
F.act = Im;
F.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Tm({}, e.props)
      , s = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = mc.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            jm.call(t, l) && !Rm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: hi,
        type: e.type,
        key: s,
        ref: i,
        props: r,
        _owner: o
    }
}
;
F.createContext = function(e) {
    return e = {
        $$typeof: Jw,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Qw,
        _context: e
    },
    e.Consumer = e
}
;
F.createElement = Mm;
F.createFactory = function(e) {
    var t = Mm.bind(null, e);
    return t.type = e,
    t
}
;
F.createRef = function() {
    return {
        current: null
    }
}
;
F.forwardRef = function(e) {
    return {
        $$typeof: Zw,
        render: e
    }
}
;
F.isValidElement = gc;
F.lazy = function(e) {
    return {
        $$typeof: nx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ox
    }
}
;
F.memo = function(e, t) {
    return {
        $$typeof: tx,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
F.startTransition = function(e) {
    var t = oo.transition;
    oo.transition = {};
    try {
        e()
    } finally {
        oo.transition = t
    }
}
;
F.unstable_act = Im;
F.useCallback = function(e, t) {
    return Le.current.useCallback(e, t)
}
;
F.useContext = function(e) {
    return Le.current.useContext(e)
}
;
F.useDebugValue = function() {}
;
F.useDeferredValue = function(e) {
    return Le.current.useDeferredValue(e)
}
;
F.useEffect = function(e, t) {
    return Le.current.useEffect(e, t)
}
;
F.useId = function() {
    return Le.current.useId()
}
;
F.useImperativeHandle = function(e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
}
;
F.useInsertionEffect = function(e, t) {
    return Le.current.useInsertionEffect(e, t)
}
;
F.useLayoutEffect = function(e, t) {
    return Le.current.useLayoutEffect(e, t)
}
;
F.useMemo = function(e, t) {
    return Le.current.useMemo(e, t)
}
;
F.useReducer = function(e, t, n) {
    return Le.current.useReducer(e, t, n)
}
;
F.useRef = function(e) {
    return Le.current.useRef(e)
}
;
F.useState = function(e) {
    return Le.current.useState(e)
}
;
F.useSyncExternalStore = function(e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
}
;
F.useTransition = function() {
    return Le.current.useTransition()
}
;
F.version = "18.3.1";
km.exports = F;
var C = km.exports;
const Ao = Hw(C)
  , lx = Ww({
    __proto__: null,
    default: Ao
}, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ux = C
  , cx = Symbol.for("react.element")
  , dx = Symbol.for("react.fragment")
  , fx = Object.prototype.hasOwnProperty
  , hx = ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , px = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Lm(e, t, n) {
    var r, s = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        fx.call(t, r) && !px.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: cx,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: hx.current
    }
}
pa.Fragment = dx;
pa.jsx = Lm;
pa.jsxs = Lm;
Pm.exports = pa;
var f = Pm.exports
  , Om = {
    exports: {}
}
  , Je = {}
  , Dm = {
    exports: {}
}
  , Fm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(b, O) {
        var D = b.length;
        b.push(O);
        e: for (; 0 < D; ) {
            var se = D - 1 >>> 1
              , pe = b[se];
            if (0 < s(pe, O))
                b[se] = O,
                b[D] = pe,
                D = se;
            else
                break e
        }
    }
    function n(b) {
        return b.length === 0 ? null : b[0]
    }
    function r(b) {
        if (b.length === 0)
            return null;
        var O = b[0]
          , D = b.pop();
        if (D !== O) {
            b[0] = D;
            e: for (var se = 0, pe = b.length, ji = pe >>> 1; se < ji; ) {
                var kn = 2 * (se + 1) - 1
                  , Ua = b[kn]
                  , An = kn + 1
                  , Ri = b[An];
                if (0 > s(Ua, D))
                    An < pe && 0 > s(Ri, Ua) ? (b[se] = Ri,
                    b[An] = D,
                    se = An) : (b[se] = Ua,
                    b[kn] = D,
                    se = kn);
                else if (An < pe && 0 > s(Ri, D))
                    b[se] = Ri,
                    b[An] = D,
                    se = An;
                else
                    break e
            }
        }
        return O
    }
    function s(b, O) {
        var D = b.sortIndex - O.sortIndex;
        return D !== 0 ? D : b.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , d = 1
      , c = null
      , h = 3
      , y = !1
      , v = !1
      , w = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(b) {
        for (var O = n(u); O !== null; ) {
            if (O.callback === null)
                r(u);
            else if (O.startTime <= b)
                r(u),
                O.sortIndex = O.expirationTime,
                t(l, O);
            else
                break;
            O = n(u)
        }
    }
    function S(b) {
        if (w = !1,
        g(b),
        !v)
            if (n(l) !== null)
                v = !0,
                Ni(_);
            else {
                var O = n(u);
                O !== null && ue(S, O.startTime - b)
            }
    }
    function _(b, O) {
        v = !1,
        w && (w = !1,
        m(k),
        k = -1),
        y = !0;
        var D = h;
        try {
            for (g(O),
            c = n(l); c !== null && (!(c.expirationTime > O) || b && !I()); ) {
                var se = c.callback;
                if (typeof se == "function") {
                    c.callback = null,
                    h = c.priorityLevel;
                    var pe = se(c.expirationTime <= O);
                    O = e.unstable_now(),
                    typeof pe == "function" ? c.callback = pe : c === n(l) && r(l),
                    g(O)
                } else
                    r(l);
                c = n(l)
            }
            if (c !== null)
                var ji = !0;
            else {
                var kn = n(u);
                kn !== null && ue(S, kn.startTime - O),
                ji = !1
            }
            return ji
        } finally {
            c = null,
            h = D,
            y = !1
        }
    }
    var E = !1
      , P = null
      , k = -1
      , N = 5
      , T = -1;
    function I() {
        return !(e.unstable_now() - T < N)
    }
    function Re() {
        if (P !== null) {
            var b = e.unstable_now();
            T = b;
            var O = !0;
            try {
                O = P(!0, b)
            } finally {
                O ? lt() : (E = !1,
                P = null)
            }
        } else
            E = !1
    }
    var lt;
    if (typeof p == "function")
        lt = function() {
            p(Re)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Pn = new MessageChannel
          , rs = Pn.port2;
        Pn.port1.onmessage = Re,
        lt = function() {
            rs.postMessage(null)
        }
    } else
        lt = function() {
            x(Re, 0)
        }
        ;
    function Ni(b) {
        P = b,
        E || (E = !0,
        lt())
    }
    function ue(b, O) {
        k = x(function() {
            b(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(b) {
        b.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || y || (v = !0,
        Ni(_))
    }
    ,
    e.unstable_forceFrameRate = function(b) {
        0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < b ? Math.floor(1e3 / b) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(b) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = h
        }
        var D = h;
        h = O;
        try {
            return b()
        } finally {
            h = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(b, O) {
        switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            b = 3
        }
        var D = h;
        h = b;
        try {
            return O()
        } finally {
            h = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(b, O, D) {
        var se = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? se + D : se) : D = se,
        b) {
        case 1:
            var pe = -1;
            break;
        case 2:
            pe = 250;
            break;
        case 5:
            pe = 1073741823;
            break;
        case 4:
            pe = 1e4;
            break;
        default:
            pe = 5e3
        }
        return pe = D + pe,
        b = {
            id: d++,
            callback: O,
            priorityLevel: b,
            startTime: D,
            expirationTime: pe,
            sortIndex: -1
        },
        D > se ? (b.sortIndex = D,
        t(u, b),
        n(l) === null && b === n(u) && (w ? (m(k),
        k = -1) : w = !0,
        ue(S, D - se))) : (b.sortIndex = pe,
        t(l, b),
        v || y || (v = !0,
        Ni(_))),
        b
    }
    ,
    e.unstable_shouldYield = I,
    e.unstable_wrapCallback = function(b) {
        var O = h;
        return function() {
            var D = h;
            h = O;
            try {
                return b.apply(this, arguments)
            } finally {
                h = D
            }
        }
    }
}
)(Fm);
Dm.exports = Fm;
var mx = Dm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gx = C
  , Ye = mx;
function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Vm = new Set
  , $s = {};
function Yn(e, t) {
    Or(e, t),
    Or(e + "Capture", t)
}
function Or(e, t) {
    for ($s[e] = t,
    e = 0; e < t.length; e++)
        Vm.add(t[e])
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Bl = Object.prototype.hasOwnProperty
  , yx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ef = {}
  , Pf = {};
function vx(e) {
    return Bl.call(Pf, e) ? !0 : Bl.call(Ef, e) ? !1 : yx.test(e) ? Pf[e] = !0 : (Ef[e] = !0,
    !1)
}
function wx(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function xx(e, t, n, r) {
    if (t === null || typeof t > "u" || wx(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Oe(e, t, n, r, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _e[e] = new Oe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    _e[t] = new Oe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _e[e] = new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _e[e] = new Oe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _e[e] = new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _e[e] = new Oe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    _e[e] = new Oe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    _e[e] = new Oe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    _e[e] = new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var yc = /[\-:]([a-z])/g;
function vc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(yc, vc);
    _e[t] = new Oe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(yc, vc);
    _e[t] = new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(yc, vc);
    _e[t] = new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    _e[e] = new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
_e.xlinkHref = new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    _e[e] = new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function wc(e, t, n, r) {
    var s = _e.hasOwnProperty(t) ? _e[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xx(t, n, s, r) && (n = null),
    r || s === null ? vx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
    r = s.attributeNamespace,
    n === null ? e.removeAttribute(t) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xt = gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ii = Symbol.for("react.element")
  , ar = Symbol.for("react.portal")
  , lr = Symbol.for("react.fragment")
  , xc = Symbol.for("react.strict_mode")
  , $l = Symbol.for("react.profiler")
  , Bm = Symbol.for("react.provider")
  , $m = Symbol.for("react.context")
  , Sc = Symbol.for("react.forward_ref")
  , Ul = Symbol.for("react.suspense")
  , zl = Symbol.for("react.suspense_list")
  , Cc = Symbol.for("react.memo")
  , Zt = Symbol.for("react.lazy")
  , Um = Symbol.for("react.offscreen")
  , kf = Symbol.iterator;
function ss(e) {
    return e === null || typeof e != "object" ? null : (e = kf && e[kf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var te = Object.assign, Wa;
function hs(e) {
    if (Wa === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Wa = t && t[1] || ""
        }
    return `
` + Wa + e
}
var Ha = !1;
function Ka(e, t) {
    if (!e || Ha)
        return "";
    Ha = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), i = r.stack.split(`
`), o = s.length - 1, a = i.length - 1; 1 <= o && 0 <= a && s[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || s[o] !== i[a]) {
                                var l = `
` + s[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Ha = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? hs(e) : ""
}
function Sx(e) {
    switch (e.tag) {
    case 5:
        return hs(e.type);
    case 16:
        return hs("Lazy");
    case 13:
        return hs("Suspense");
    case 19:
        return hs("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ka(e.type, !1),
        e;
    case 11:
        return e = Ka(e.type.render, !1),
        e;
    case 1:
        return e = Ka(e.type, !0),
        e;
    default:
        return ""
    }
}
function Wl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case lr:
        return "Fragment";
    case ar:
        return "Portal";
    case $l:
        return "Profiler";
    case xc:
        return "StrictMode";
    case Ul:
        return "Suspense";
    case zl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case $m:
            return (e.displayName || "Context") + ".Consumer";
        case Bm:
            return (e._context.displayName || "Context") + ".Provider";
        case Sc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Cc:
            return t = e.displayName || null,
            t !== null ? t : Wl(e.type) || "Memo";
        case Zt:
            t = e._payload,
            e = e._init;
            try {
                return Wl(e(t))
            } catch {}
        }
    return null
}
function Cx(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Wl(t);
    case 8:
        return t === xc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function gn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function zm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function _x(e) {
    var t = zm(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Li(e) {
    e._valueTracker || (e._valueTracker = _x(e))
}
function Wm(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = zm(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function To(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Hl(e, t) {
    var n = t.checked;
    return te({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Af(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = gn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Hm(e, t) {
    t = t.checked,
    t != null && wc(e, "checked", t, !1)
}
function Kl(e, t) {
    Hm(e, t);
    var n = gn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ql(e, t.type, n) : t.hasOwnProperty("defaultValue") && ql(e, t.type, gn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Tf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ql(e, t, n) {
    (t !== "number" || To(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ps = Array.isArray;
function kr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + gn(n),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function Gl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return te({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function bf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(A(92));
            if (ps(n)) {
                if (1 < n.length)
                    throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: gn(n)
    }
}
function Km(e, t) {
    var n = gn(t.value)
      , r = gn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Nf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function qm(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Xl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? qm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Oi, Gm = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Oi = Oi || document.createElement("div"),
        Oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Oi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Us(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ks = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Ex = ["Webkit", "ms", "Moz", "O"];
Object.keys(ks).forEach(function(e) {
    Ex.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ks[t] = ks[e]
    })
});
function Xm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ks.hasOwnProperty(e) && ks[e] ? ("" + t).trim() : t + "px"
}
function Ym(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = Xm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : e[n] = s
        }
}
var Px = te({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Yl(e, t) {
    if (t) {
        if (Px[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(A(62))
    }
}
function Ql(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Jl = null;
function _c(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Zl = null
  , Ar = null
  , Tr = null;
function jf(e) {
    if (e = gi(e)) {
        if (typeof Zl != "function")
            throw Error(A(280));
        var t = e.stateNode;
        t && (t = wa(t),
        Zl(e.stateNode, e.type, t))
    }
}
function Qm(e) {
    Ar ? Tr ? Tr.push(e) : Tr = [e] : Ar = e
}
function Jm() {
    if (Ar) {
        var e = Ar
          , t = Tr;
        if (Tr = Ar = null,
        jf(e),
        t)
            for (e = 0; e < t.length; e++)
                jf(t[e])
    }
}
function Zm(e, t) {
    return e(t)
}
function eg() {}
var qa = !1;
function tg(e, t, n) {
    if (qa)
        return e(t, n);
    qa = !0;
    try {
        return Zm(e, t, n)
    } finally {
        qa = !1,
        (Ar !== null || Tr !== null) && (eg(),
        Jm())
    }
}
function zs(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = wa(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, t, typeof n));
    return n
}
var eu = !1;
if (Wt)
    try {
        var is = {};
        Object.defineProperty(is, "passive", {
            get: function() {
                eu = !0
            }
        }),
        window.addEventListener("test", is, is),
        window.removeEventListener("test", is, is)
    } catch {
        eu = !1
    }
function kx(e, t, n, r, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var As = !1
  , bo = null
  , No = !1
  , tu = null
  , Ax = {
    onError: function(e) {
        As = !0,
        bo = e
    }
};
function Tx(e, t, n, r, s, i, o, a, l) {
    As = !1,
    bo = null,
    kx.apply(Ax, arguments)
}
function bx(e, t, n, r, s, i, o, a, l) {
    if (Tx.apply(this, arguments),
    As) {
        if (As) {
            var u = bo;
            As = !1,
            bo = null
        } else
            throw Error(A(198));
        No || (No = !0,
        tu = u)
    }
}
function Qn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ng(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Rf(e) {
    if (Qn(e) !== e)
        throw Error(A(188))
}
function Nx(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Qn(e),
        t === null)
            throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n)
                    return Rf(s),
                    e;
                if (i === r)
                    return Rf(s),
                    t;
                i = i.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== r.return)
            n = s,
            r = i;
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== r)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? e : t
}
function rg(e) {
    return e = Nx(e),
    e !== null ? sg(e) : null
}
function sg(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = sg(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ig = Ye.unstable_scheduleCallback
  , Mf = Ye.unstable_cancelCallback
  , jx = Ye.unstable_shouldYield
  , Rx = Ye.unstable_requestPaint
  , oe = Ye.unstable_now
  , Mx = Ye.unstable_getCurrentPriorityLevel
  , Ec = Ye.unstable_ImmediatePriority
  , og = Ye.unstable_UserBlockingPriority
  , jo = Ye.unstable_NormalPriority
  , Ix = Ye.unstable_LowPriority
  , ag = Ye.unstable_IdlePriority
  , ma = null
  , Nt = null;
function Lx(e) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function")
        try {
            Nt.onCommitFiberRoot(ma, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Fx
  , Ox = Math.log
  , Dx = Math.LN2;
function Fx(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Ox(e) / Dx | 0) | 0
}
var Di = 64
  , Fi = 4194304;
function ms(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ro(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? r = ms(a) : (i &= o,
        i !== 0 && (r = ms(i)))
    } else
        o = n & ~s,
        o !== 0 ? r = ms(o) : i !== 0 && (r = ms(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    i = t & -t,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - wt(t),
            s = 1 << n,
            r |= e[n],
            t &= ~s;
    return r
}
function Vx(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Bx(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - wt(i)
          , a = 1 << o
          , l = s[o];
        l === -1 ? (!(a & n) || a & r) && (s[o] = Vx(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function nu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function lg() {
    var e = Di;
    return Di <<= 1,
    !(Di & 4194240) && (Di = 64),
    e
}
function Ga(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function pi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - wt(t),
    e[t] = n
}
function $x(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - wt(n)
          , i = 1 << s;
        t[s] = 0,
        r[s] = -1,
        e[s] = -1,
        n &= ~i
    }
}
function Pc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - wt(n)
          , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
        n &= ~s
    }
}
var z = 0;
function ug(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var cg, kc, dg, fg, hg, ru = !1, Vi = [], an = null, ln = null, un = null, Ws = new Map, Hs = new Map, tn = [], Ux = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function If(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        an = null;
        break;
    case "dragenter":
    case "dragleave":
        ln = null;
        break;
    case "mouseover":
    case "mouseout":
        un = null;
        break;
    case "pointerover":
    case "pointerout":
        Ws.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Hs.delete(t.pointerId)
    }
}
function os(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
    },
    t !== null && (t = gi(t),
    t !== null && kc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function zx(e, t, n, r, s) {
    switch (t) {
    case "focusin":
        return an = os(an, e, t, n, r, s),
        !0;
    case "dragenter":
        return ln = os(ln, e, t, n, r, s),
        !0;
    case "mouseover":
        return un = os(un, e, t, n, r, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Ws.set(i, os(Ws.get(i) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        Hs.set(i, os(Hs.get(i) || null, e, t, n, r, s)),
        !0
    }
    return !1
}
function pg(e) {
    var t = Ln(e.target);
    if (t !== null) {
        var n = Qn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ng(n),
                t !== null) {
                    e.blockedOn = t,
                    hg(e.priority, function() {
                        dg(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ao(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Jl = r,
            n.target.dispatchEvent(r),
            Jl = null
        } else
            return t = gi(n),
            t !== null && kc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Lf(e, t, n) {
    ao(e) && n.delete(t)
}
function Wx() {
    ru = !1,
    an !== null && ao(an) && (an = null),
    ln !== null && ao(ln) && (ln = null),
    un !== null && ao(un) && (un = null),
    Ws.forEach(Lf),
    Hs.forEach(Lf)
}
function as(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ru || (ru = !0,
    Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Wx)))
}
function Ks(e) {
    function t(s) {
        return as(s, e)
    }
    if (0 < Vi.length) {
        as(Vi[0], e);
        for (var n = 1; n < Vi.length; n++) {
            var r = Vi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (an !== null && as(an, e),
    ln !== null && as(ln, e),
    un !== null && as(un, e),
    Ws.forEach(t),
    Hs.forEach(t),
    n = 0; n < tn.length; n++)
        r = tn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < tn.length && (n = tn[0],
    n.blockedOn === null); )
        pg(n),
        n.blockedOn === null && tn.shift()
}
var br = Xt.ReactCurrentBatchConfig
  , Mo = !0;
function Hx(e, t, n, r) {
    var s = z
      , i = br.transition;
    br.transition = null;
    try {
        z = 1,
        Ac(e, t, n, r)
    } finally {
        z = s,
        br.transition = i
    }
}
function Kx(e, t, n, r) {
    var s = z
      , i = br.transition;
    br.transition = null;
    try {
        z = 4,
        Ac(e, t, n, r)
    } finally {
        z = s,
        br.transition = i
    }
}
function Ac(e, t, n, r) {
    if (Mo) {
        var s = su(e, t, n, r);
        if (s === null)
            sl(e, t, r, Io, n),
            If(e, r);
        else if (zx(s, e, t, n, r))
            r.stopPropagation();
        else if (If(e, r),
        t & 4 && -1 < Ux.indexOf(e)) {
            for (; s !== null; ) {
                var i = gi(s);
                if (i !== null && cg(i),
                i = su(e, t, n, r),
                i === null && sl(e, t, r, Io, n),
                i === s)
                    break;
                s = i
            }
            s !== null && r.stopPropagation()
        } else
            sl(e, t, r, null, n)
    }
}
var Io = null;
function su(e, t, n, r) {
    if (Io = null,
    e = _c(r),
    e = Ln(e),
    e !== null)
        if (t = Qn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ng(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Io = e,
    null
}
function mg(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Mx()) {
        case Ec:
            return 1;
        case og:
            return 4;
        case jo:
        case Ix:
            return 16;
        case ag:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var rn = null
  , Tc = null
  , lo = null;
function gg() {
    if (lo)
        return lo;
    var e, t = Tc, n = t.length, r, s = "value"in rn ? rn.value : rn.textContent, i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++)
        ;
    return lo = s.slice(e, 1 < r ? 1 - r : void 0)
}
function uo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Bi() {
    return !0
}
function Of() {
    return !1
}
function Ze(e) {
    function t(n, r, s, i, o) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Bi : Of,
        this.isPropagationStopped = Of,
        this
    }
    return te(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Bi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Bi)
        },
        persist: function() {},
        isPersistent: Bi
    }),
    t
}
var Gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, bc = Ze(Gr), mi = te({}, Gr, {
    view: 0,
    detail: 0
}), qx = Ze(mi), Xa, Ya, ls, ga = te({}, mi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ls && (ls && e.type === "mousemove" ? (Xa = e.screenX - ls.screenX,
        Ya = e.screenY - ls.screenY) : Ya = Xa = 0,
        ls = e),
        Xa)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ya
    }
}), Df = Ze(ga), Gx = te({}, ga, {
    dataTransfer: 0
}), Xx = Ze(Gx), Yx = te({}, mi, {
    relatedTarget: 0
}), Qa = Ze(Yx), Qx = te({}, Gr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Jx = Ze(Qx), Zx = te({}, Gr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), e1 = Ze(Zx), t1 = te({}, Gr, {
    data: 0
}), Ff = Ze(t1), n1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, r1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
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
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, s1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function i1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = s1[e]) ? !!t[e] : !1
}
function Nc() {
    return i1
}
var o1 = te({}, mi, {
    key: function(e) {
        if (e.key) {
            var t = n1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = uo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? r1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nc,
    charCode: function(e) {
        return e.type === "keypress" ? uo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? uo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , a1 = Ze(o1)
  , l1 = te({}, ga, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Vf = Ze(l1)
  , u1 = te({}, mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nc
})
  , c1 = Ze(u1)
  , d1 = te({}, Gr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , f1 = Ze(d1)
  , h1 = te({}, ga, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , p1 = Ze(h1)
  , m1 = [9, 13, 27, 32]
  , jc = Wt && "CompositionEvent"in window
  , Ts = null;
Wt && "documentMode"in document && (Ts = document.documentMode);
var g1 = Wt && "TextEvent"in window && !Ts
  , yg = Wt && (!jc || Ts && 8 < Ts && 11 >= Ts)
  , Bf = " "
  , $f = !1;
function vg(e, t) {
    switch (e) {
    case "keyup":
        return m1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function wg(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ur = !1;
function y1(e, t) {
    switch (e) {
    case "compositionend":
        return wg(t);
    case "keypress":
        return t.which !== 32 ? null : ($f = !0,
        Bf);
    case "textInput":
        return e = t.data,
        e === Bf && $f ? null : e;
    default:
        return null
    }
}
function v1(e, t) {
    if (ur)
        return e === "compositionend" || !jc && vg(e, t) ? (e = gg(),
        lo = Tc = rn = null,
        ur = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return yg && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var w1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Uf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!w1[e.type] : t === "textarea"
}
function xg(e, t, n, r) {
    Qm(r),
    t = Lo(t, "onChange"),
    0 < t.length && (n = new bc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var bs = null
  , qs = null;
function x1(e) {
    jg(e, 0)
}
function ya(e) {
    var t = fr(e);
    if (Wm(t))
        return e
}
function S1(e, t) {
    if (e === "change")
        return t
}
var Sg = !1;
if (Wt) {
    var Ja;
    if (Wt) {
        var Za = "oninput"in document;
        if (!Za) {
            var zf = document.createElement("div");
            zf.setAttribute("oninput", "return;"),
            Za = typeof zf.oninput == "function"
        }
        Ja = Za
    } else
        Ja = !1;
    Sg = Ja && (!document.documentMode || 9 < document.documentMode)
}
function Wf() {
    bs && (bs.detachEvent("onpropertychange", Cg),
    qs = bs = null)
}
function Cg(e) {
    if (e.propertyName === "value" && ya(qs)) {
        var t = [];
        xg(t, qs, e, _c(e)),
        tg(x1, t)
    }
}
function C1(e, t, n) {
    e === "focusin" ? (Wf(),
    bs = t,
    qs = n,
    bs.attachEvent("onpropertychange", Cg)) : e === "focusout" && Wf()
}
function _1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ya(qs)
}
function E1(e, t) {
    if (e === "click")
        return ya(t)
}
function P1(e, t) {
    if (e === "input" || e === "change")
        return ya(t)
}
function k1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var St = typeof Object.is == "function" ? Object.is : k1;
function Gs(e, t) {
    if (St(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!Bl.call(t, s) || !St(e[s], t[s]))
            return !1
    }
    return !0
}
function Hf(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Kf(e, t) {
    var n = Hf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Hf(n)
    }
}
function _g(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _g(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Eg() {
    for (var e = window, t = To(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = To(e.document)
    }
    return t
}
function Rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function A1(e) {
    var t = Eg()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _g(n.ownerDocument.documentElement, n)) {
        if (r !== null && Rc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                  , i = Math.min(r.start, s);
                r = r.end === void 0 ? i : Math.min(r.end, s),
                !e.extend && i > r && (s = r,
                r = i,
                i = s),
                s = Kf(n, i);
                var o = Kf(n, r);
                s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var T1 = Wt && "documentMode"in document && 11 >= document.documentMode
  , cr = null
  , iu = null
  , Ns = null
  , ou = !1;
function qf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ou || cr == null || cr !== To(r) || (r = cr,
    "selectionStart"in r && Rc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ns && Gs(Ns, r) || (Ns = r,
    r = Lo(iu, "onSelect"),
    0 < r.length && (t = new bc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = cr)))
}
function $i(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var dr = {
    animationend: $i("Animation", "AnimationEnd"),
    animationiteration: $i("Animation", "AnimationIteration"),
    animationstart: $i("Animation", "AnimationStart"),
    transitionend: $i("Transition", "TransitionEnd")
}
  , el = {}
  , Pg = {};
Wt && (Pg = document.createElement("div").style,
"AnimationEvent"in window || (delete dr.animationend.animation,
delete dr.animationiteration.animation,
delete dr.animationstart.animation),
"TransitionEvent"in window || delete dr.transitionend.transition);
function va(e) {
    if (el[e])
        return el[e];
    if (!dr[e])
        return e;
    var t = dr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Pg)
            return el[e] = t[n];
    return e
}
var kg = va("animationend")
  , Ag = va("animationiteration")
  , Tg = va("animationstart")
  , bg = va("transitionend")
  , Ng = new Map
  , Gf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xn(e, t) {
    Ng.set(e, t),
    Yn(t, [e])
}
for (var tl = 0; tl < Gf.length; tl++) {
    var nl = Gf[tl]
      , b1 = nl.toLowerCase()
      , N1 = nl[0].toUpperCase() + nl.slice(1);
    xn(b1, "on" + N1)
}
xn(kg, "onAnimationEnd");
xn(Ag, "onAnimationIteration");
xn(Tg, "onAnimationStart");
xn("dblclick", "onDoubleClick");
xn("focusin", "onFocus");
xn("focusout", "onBlur");
xn(bg, "onTransitionEnd");
Or("onMouseEnter", ["mouseout", "mouseover"]);
Or("onMouseLeave", ["mouseout", "mouseover"]);
Or("onPointerEnter", ["pointerout", "pointerover"]);
Or("onPointerLeave", ["pointerout", "pointerover"]);
Yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Yn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , j1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
function Xf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    bx(r, t, void 0, e),
    e.currentTarget = null
}
function jg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    Xf(s, a, u),
                    i = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && s.isPropagationStopped())
                        break e;
                    Xf(s, a, u),
                    i = l
                }
        }
    }
    if (No)
        throw e = tu,
        No = !1,
        tu = null,
        e
}
function q(e, t) {
    var n = t[du];
    n === void 0 && (n = t[du] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Rg(t, e, 2, !1),
    n.add(r))
}
function rl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Rg(n, e, r, t)
}
var Ui = "_reactListening" + Math.random().toString(36).slice(2);
function Xs(e) {
    if (!e[Ui]) {
        e[Ui] = !0,
        Vm.forEach(function(n) {
            n !== "selectionchange" && (j1.has(n) || rl(n, !1, e),
            rl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ui] || (t[Ui] = !0,
        rl("selectionchange", !1, t))
    }
}
function Rg(e, t, n, r) {
    switch (mg(t)) {
    case 1:
        var s = Hx;
        break;
    case 4:
        s = Kx;
        break;
    default:
        s = Ac
    }
    n = s.bind(null, t, n, e),
    s = void 0,
    !eu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
        passive: s
    }) : e.addEventListener(t, n, !1)
}
function sl(e, t, n, r, s) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === s || a.nodeType === 8 && a.parentNode === s)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === s || l.nodeType === 8 && l.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = Ln(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    tg(function() {
        var u = i
          , d = _c(n)
          , c = [];
        e: {
            var h = Ng.get(e);
            if (h !== void 0) {
                var y = bc
                  , v = e;
                switch (e) {
                case "keypress":
                    if (uo(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = a1;
                    break;
                case "focusin":
                    v = "focus",
                    y = Qa;
                    break;
                case "focusout":
                    v = "blur",
                    y = Qa;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = Qa;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Df;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = Xx;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = c1;
                    break;
                case kg:
                case Ag:
                case Tg:
                    y = Jx;
                    break;
                case bg:
                    y = f1;
                    break;
                case "scroll":
                    y = qx;
                    break;
                case "wheel":
                    y = p1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = e1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Vf
                }
                var w = (t & 4) !== 0
                  , x = !w && e === "scroll"
                  , m = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var p = u, g; p !== null; ) {
                    g = p;
                    var S = g.stateNode;
                    if (g.tag === 5 && S !== null && (g = S,
                    m !== null && (S = zs(p, m),
                    S != null && w.push(Ys(p, S, g)))),
                    x)
                        break;
                    p = p.return
                }
                0 < w.length && (h = new y(h,v,null,n,d),
                c.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                h && n !== Jl && (v = n.relatedTarget || n.fromElement) && (Ln(v) || v[Ht]))
                    break e;
                if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                y ? (v = n.relatedTarget || n.toElement,
                y = u,
                v = v ? Ln(v) : null,
                v !== null && (x = Qn(v),
                v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null,
                v = u),
                y !== v)) {
                    if (w = Df,
                    S = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (w = Vf,
                    S = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    x = y == null ? h : fr(y),
                    g = v == null ? h : fr(v),
                    h = new w(S,p + "leave",y,n,d),
                    h.target = x,
                    h.relatedTarget = g,
                    S = null,
                    Ln(d) === u && (w = new w(m,p + "enter",v,n,d),
                    w.target = g,
                    w.relatedTarget = x,
                    S = w),
                    x = S,
                    y && v)
                        t: {
                            for (w = y,
                            m = v,
                            p = 0,
                            g = w; g; g = tr(g))
                                p++;
                            for (g = 0,
                            S = m; S; S = tr(S))
                                g++;
                            for (; 0 < p - g; )
                                w = tr(w),
                                p--;
                            for (; 0 < g - p; )
                                m = tr(m),
                                g--;
                            for (; p--; ) {
                                if (w === m || m !== null && w === m.alternate)
                                    break t;
                                w = tr(w),
                                m = tr(m)
                            }
                            w = null
                        }
                    else
                        w = null;
                    y !== null && Yf(c, h, y, w, !1),
                    v !== null && x !== null && Yf(c, x, v, w, !0)
                }
            }
            e: {
                if (h = u ? fr(u) : window,
                y = h.nodeName && h.nodeName.toLowerCase(),
                y === "select" || y === "input" && h.type === "file")
                    var _ = S1;
                else if (Uf(h))
                    if (Sg)
                        _ = P1;
                    else {
                        _ = _1;
                        var E = C1
                    }
                else
                    (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (_ = E1);
                if (_ && (_ = _(e, u))) {
                    xg(c, _, n, d);
                    break e
                }
                E && E(e, h, u),
                e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && ql(h, "number", h.value)
            }
            switch (E = u ? fr(u) : window,
            e) {
            case "focusin":
                (Uf(E) || E.contentEditable === "true") && (cr = E,
                iu = u,
                Ns = null);
                break;
            case "focusout":
                Ns = iu = cr = null;
                break;
            case "mousedown":
                ou = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ou = !1,
                qf(c, n, d);
                break;
            case "selectionchange":
                if (T1)
                    break;
            case "keydown":
            case "keyup":
                qf(c, n, d)
            }
            var P;
            if (jc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                    }
                    k = void 0
                }
            else
                ur ? vg(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (yg && n.locale !== "ko" && (ur || k !== "onCompositionStart" ? k === "onCompositionEnd" && ur && (P = gg()) : (rn = d,
            Tc = "value"in rn ? rn.value : rn.textContent,
            ur = !0)),
            E = Lo(u, k),
            0 < E.length && (k = new Ff(k,e,null,n,d),
            c.push({
                event: k,
                listeners: E
            }),
            P ? k.data = P : (P = wg(n),
            P !== null && (k.data = P)))),
            (P = g1 ? y1(e, n) : v1(e, n)) && (u = Lo(u, "onBeforeInput"),
            0 < u.length && (d = new Ff("onBeforeInput","beforeinput",null,n,d),
            c.push({
                event: d,
                listeners: u
            }),
            d.data = P))
        }
        jg(c, t)
    })
}
function Ys(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Lo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = zs(e, n),
        i != null && r.unshift(Ys(e, i, s)),
        i = zs(e, t),
        i != null && r.push(Ys(e, i, s))),
        e = e.return
    }
    return r
}
function tr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Yf(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        s ? (l = zs(n, i),
        l != null && o.unshift(Ys(n, l, a))) : s || (l = zs(n, i),
        l != null && o.push(Ys(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var R1 = /\r\n?/g
  , M1 = /\u0000|\uFFFD/g;
function Qf(e) {
    return (typeof e == "string" ? e : "" + e).replace(R1, `
`).replace(M1, "")
}
function zi(e, t, n) {
    if (t = Qf(t),
    Qf(e) !== t && n)
        throw Error(A(425))
}
function Oo() {}
var au = null
  , lu = null;
function uu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var cu = typeof setTimeout == "function" ? setTimeout : void 0
  , I1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Jf = typeof Promise == "function" ? Promise : void 0
  , L1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jf < "u" ? function(e) {
    return Jf.resolve(null).then(e).catch(O1)
}
: cu;
function O1(e) {
    setTimeout(function() {
        throw e
    })
}
function il(e, t) {
    var n = t
      , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                    Ks(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    Ks(t)
}
function cn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Zf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Xr = Math.random().toString(36).slice(2)
  , Tt = "__reactFiber$" + Xr
  , Qs = "__reactProps$" + Xr
  , Ht = "__reactContainer$" + Xr
  , du = "__reactEvents$" + Xr
  , D1 = "__reactListeners$" + Xr
  , F1 = "__reactHandles$" + Xr;
function Ln(e) {
    var t = e[Tt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ht] || n[Tt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Zf(e); e !== null; ) {
                    if (n = e[Tt])
                        return n;
                    e = Zf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function gi(e) {
    return e = e[Tt] || e[Ht],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function fr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(A(33))
}
function wa(e) {
    return e[Qs] || null
}
var fu = []
  , hr = -1;
function Sn(e) {
    return {
        current: e
    }
}
function G(e) {
    0 > hr || (e.current = fu[hr],
    fu[hr] = null,
    hr--)
}
function K(e, t) {
    hr++,
    fu[hr] = e.current,
    e.current = t
}
var yn = {}
  , je = Sn(yn)
  , Be = Sn(!1)
  , zn = yn;
function Dr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return yn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n)
        s[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function $e(e) {
    return e = e.childContextTypes,
    e != null
}
function Do() {
    G(Be),
    G(je)
}
function eh(e, t, n) {
    if (je.current !== yn)
        throw Error(A(168));
    K(je, t),
    K(Be, n)
}
function Mg(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(A(108, Cx(e) || "Unknown", s));
    return te({}, n, r)
}
function Fo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn,
    zn = je.current,
    K(je, e),
    K(Be, Be.current),
    !0
}
function th(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(A(169));
    n ? (e = Mg(e, t, zn),
    r.__reactInternalMemoizedMergedChildContext = e,
    G(Be),
    G(je),
    K(je, e)) : G(Be),
    K(Be, n)
}
var Ft = null
  , xa = !1
  , ol = !1;
function Ig(e) {
    Ft === null ? Ft = [e] : Ft.push(e)
}
function V1(e) {
    xa = !0,
    Ig(e)
}
function Cn() {
    if (!ol && Ft !== null) {
        ol = !0;
        var e = 0
          , t = z;
        try {
            var n = Ft;
            for (z = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ft = null,
            xa = !1
        } catch (s) {
            throw Ft !== null && (Ft = Ft.slice(e + 1)),
            ig(Ec, Cn),
            s
        } finally {
            z = t,
            ol = !1
        }
    }
    return null
}
var pr = []
  , mr = 0
  , Vo = null
  , Bo = 0
  , nt = []
  , rt = 0
  , Wn = null
  , Vt = 1
  , Bt = "";
function bn(e, t) {
    pr[mr++] = Bo,
    pr[mr++] = Vo,
    Vo = e,
    Bo = t
}
function Lg(e, t, n) {
    nt[rt++] = Vt,
    nt[rt++] = Bt,
    nt[rt++] = Wn,
    Wn = e;
    var r = Vt;
    e = Bt;
    var s = 32 - wt(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var i = 32 - wt(t) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        s -= o,
        Vt = 1 << 32 - wt(t) + s | n << s | r,
        Bt = i + e
    } else
        Vt = 1 << i | n << s | r,
        Bt = e
}
function Mc(e) {
    e.return !== null && (bn(e, 1),
    Lg(e, 1, 0))
}
function Ic(e) {
    for (; e === Vo; )
        Vo = pr[--mr],
        pr[mr] = null,
        Bo = pr[--mr],
        pr[mr] = null;
    for (; e === Wn; )
        Wn = nt[--rt],
        nt[rt] = null,
        Bt = nt[--rt],
        nt[rt] = null,
        Vt = nt[--rt],
        nt[rt] = null
}
var Ge = null
  , qe = null
  , Y = !1
  , gt = null;
function Og(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function nh(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        qe = cn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        qe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Wn !== null ? {
            id: Vt,
            overflow: Bt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = st(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ge = e,
        qe = null,
        !0) : !1;
    default:
        return !1
    }
}
function hu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function pu(e) {
    if (Y) {
        var t = qe;
        if (t) {
            var n = t;
            if (!nh(e, t)) {
                if (hu(e))
                    throw Error(A(418));
                t = cn(n.nextSibling);
                var r = Ge;
                t && nh(e, t) ? Og(r, n) : (e.flags = e.flags & -4097 | 2,
                Y = !1,
                Ge = e)
            }
        } else {
            if (hu(e))
                throw Error(A(418));
            e.flags = e.flags & -4097 | 2,
            Y = !1,
            Ge = e
        }
    }
}
function rh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ge = e
}
function Wi(e) {
    if (e !== Ge)
        return !1;
    if (!Y)
        return rh(e),
        Y = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !uu(e.type, e.memoizedProps)),
    t && (t = qe)) {
        if (hu(e))
            throw Dg(),
            Error(A(418));
        for (; t; )
            Og(e, t),
            t = cn(t.nextSibling)
    }
    if (rh(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(A(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            qe = cn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            qe = null
        }
    } else
        qe = Ge ? cn(e.stateNode.nextSibling) : null;
    return !0
}
function Dg() {
    for (var e = qe; e; )
        e = cn(e.nextSibling)
}
function Fr() {
    qe = Ge = null,
    Y = !1
}
function Lc(e) {
    gt === null ? gt = [e] : gt.push(e)
}
var B1 = Xt.ReactCurrentBatchConfig;
function us(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(A(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(A(147, e));
            var s = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = s.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(A(284));
        if (!n._owner)
            throw Error(A(290, e))
    }
    return e
}
function Hi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function sh(e) {
    var t = e._init;
    return t(e._payload)
}
function Fg(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p],
            m.flags |= 16) : g.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function s(m, p) {
        return m = pn(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, p, g) {
        return m.index = g,
        e ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < p ? (m.flags |= 2,
        p) : g) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, p, g, S) {
        return p === null || p.tag !== 6 ? (p = hl(g, m.mode, S),
        p.return = m,
        p) : (p = s(p, g),
        p.return = m,
        p)
    }
    function l(m, p, g, S) {
        var _ = g.type;
        return _ === lr ? d(m, p, g.props.children, S, g.key) : p !== null && (p.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Zt && sh(_) === p.type) ? (S = s(p, g.props),
        S.ref = us(m, p, g),
        S.return = m,
        S) : (S = yo(g.type, g.key, g.props, null, m.mode, S),
        S.ref = us(m, p, g),
        S.return = m,
        S)
    }
    function u(m, p, g, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = pl(g, m.mode, S),
        p.return = m,
        p) : (p = s(p, g.children || []),
        p.return = m,
        p)
    }
    function d(m, p, g, S, _) {
        return p === null || p.tag !== 7 ? (p = $n(g, m.mode, S, _),
        p.return = m,
        p) : (p = s(p, g),
        p.return = m,
        p)
    }
    function c(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = hl("" + p, m.mode, g),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Ii:
                return g = yo(p.type, p.key, p.props, null, m.mode, g),
                g.ref = us(m, null, p),
                g.return = m,
                g;
            case ar:
                return p = pl(p, m.mode, g),
                p.return = m,
                p;
            case Zt:
                var S = p._init;
                return c(m, S(p._payload), g)
            }
            if (ps(p) || ss(p))
                return p = $n(p, m.mode, g, null),
                p.return = m,
                p;
            Hi(m, p)
        }
        return null
    }
    function h(m, p, g, S) {
        var _ = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return _ !== null ? null : a(m, p, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ii:
                return g.key === _ ? l(m, p, g, S) : null;
            case ar:
                return g.key === _ ? u(m, p, g, S) : null;
            case Zt:
                return _ = g._init,
                h(m, p, _(g._payload), S)
            }
            if (ps(g) || ss(g))
                return _ !== null ? null : d(m, p, g, S, null);
            Hi(m, g)
        }
        return null
    }
    function y(m, p, g, S, _) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return m = m.get(g) || null,
            a(p, m, "" + S, _);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Ii:
                return m = m.get(S.key === null ? g : S.key) || null,
                l(p, m, S, _);
            case ar:
                return m = m.get(S.key === null ? g : S.key) || null,
                u(p, m, S, _);
            case Zt:
                var E = S._init;
                return y(m, p, g, E(S._payload), _)
            }
            if (ps(S) || ss(S))
                return m = m.get(g) || null,
                d(p, m, S, _, null);
            Hi(p, S)
        }
        return null
    }
    function v(m, p, g, S) {
        for (var _ = null, E = null, P = p, k = p = 0, N = null; P !== null && k < g.length; k++) {
            P.index > k ? (N = P,
            P = null) : N = P.sibling;
            var T = h(m, P, g[k], S);
            if (T === null) {
                P === null && (P = N);
                break
            }
            e && P && T.alternate === null && t(m, P),
            p = i(T, p, k),
            E === null ? _ = T : E.sibling = T,
            E = T,
            P = N
        }
        if (k === g.length)
            return n(m, P),
            Y && bn(m, k),
            _;
        if (P === null) {
            for (; k < g.length; k++)
                P = c(m, g[k], S),
                P !== null && (p = i(P, p, k),
                E === null ? _ = P : E.sibling = P,
                E = P);
            return Y && bn(m, k),
            _
        }
        for (P = r(m, P); k < g.length; k++)
            N = y(P, m, k, g[k], S),
            N !== null && (e && N.alternate !== null && P.delete(N.key === null ? k : N.key),
            p = i(N, p, k),
            E === null ? _ = N : E.sibling = N,
            E = N);
        return e && P.forEach(function(I) {
            return t(m, I)
        }),
        Y && bn(m, k),
        _
    }
    function w(m, p, g, S) {
        var _ = ss(g);
        if (typeof _ != "function")
            throw Error(A(150));
        if (g = _.call(g),
        g == null)
            throw Error(A(151));
        for (var E = _ = null, P = p, k = p = 0, N = null, T = g.next(); P !== null && !T.done; k++,
        T = g.next()) {
            P.index > k ? (N = P,
            P = null) : N = P.sibling;
            var I = h(m, P, T.value, S);
            if (I === null) {
                P === null && (P = N);
                break
            }
            e && P && I.alternate === null && t(m, P),
            p = i(I, p, k),
            E === null ? _ = I : E.sibling = I,
            E = I,
            P = N
        }
        if (T.done)
            return n(m, P),
            Y && bn(m, k),
            _;
        if (P === null) {
            for (; !T.done; k++,
            T = g.next())
                T = c(m, T.value, S),
                T !== null && (p = i(T, p, k),
                E === null ? _ = T : E.sibling = T,
                E = T);
            return Y && bn(m, k),
            _
        }
        for (P = r(m, P); !T.done; k++,
        T = g.next())
            T = y(P, m, k, T.value, S),
            T !== null && (e && T.alternate !== null && P.delete(T.key === null ? k : T.key),
            p = i(T, p, k),
            E === null ? _ = T : E.sibling = T,
            E = T);
        return e && P.forEach(function(Re) {
            return t(m, Re)
        }),
        Y && bn(m, k),
        _
    }
    function x(m, p, g, S) {
        if (typeof g == "object" && g !== null && g.type === lr && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ii:
                e: {
                    for (var _ = g.key, E = p; E !== null; ) {
                        if (E.key === _) {
                            if (_ = g.type,
                            _ === lr) {
                                if (E.tag === 7) {
                                    n(m, E.sibling),
                                    p = s(E, g.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (E.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Zt && sh(_) === E.type) {
                                n(m, E.sibling),
                                p = s(E, g.props),
                                p.ref = us(m, E, g),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, E);
                            break
                        } else
                            t(m, E);
                        E = E.sibling
                    }
                    g.type === lr ? (p = $n(g.props.children, m.mode, S, g.key),
                    p.return = m,
                    m = p) : (S = yo(g.type, g.key, g.props, null, m.mode, S),
                    S.ref = us(m, p, g),
                    S.return = m,
                    m = S)
                }
                return o(m);
            case ar:
                e: {
                    for (E = g.key; p !== null; ) {
                        if (p.key === E)
                            if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                n(m, p.sibling),
                                p = s(p, g.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = pl(g, m.mode, S),
                    p.return = m,
                    m = p
                }
                return o(m);
            case Zt:
                return E = g._init,
                x(m, p, E(g._payload), S)
            }
            if (ps(g))
                return v(m, p, g, S);
            if (ss(g))
                return w(m, p, g, S);
            Hi(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = s(p, g),
        p.return = m,
        m = p) : (n(m, p),
        p = hl(g, m.mode, S),
        p.return = m,
        m = p),
        o(m)) : n(m, p)
    }
    return x
}
var Vr = Fg(!0)
  , Vg = Fg(!1)
  , $o = Sn(null)
  , Uo = null
  , gr = null
  , Oc = null;
function Dc() {
    Oc = gr = Uo = null
}
function Fc(e) {
    var t = $o.current;
    G($o),
    e._currentValue = t
}
function mu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Nr(e, t) {
    Uo = e,
    Oc = gr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0),
    e.firstContext = null)
}
function ot(e) {
    var t = e._currentValue;
    if (Oc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        gr === null) {
            if (Uo === null)
                throw Error(A(308));
            gr = e,
            Uo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            gr = gr.next = e;
    return t
}
var On = null;
function Vc(e) {
    On === null ? On = [e] : On.push(e)
}
function Bg(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
    Vc(t)) : (n.next = s.next,
    s.next = n),
    t.interleaved = n,
    Kt(e, r)
}
function Kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var en = !1;
function Bc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function $g(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function $t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function dn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    $ & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        r.pending = t,
        Kt(e, n)
    }
    return s = r.interleaved,
    s === null ? (t.next = t,
    Vc(r)) : (t.next = s.next,
    s.next = t),
    r.interleaved = t,
    Kt(e, n)
}
function co(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Pc(e, n)
    }
}
function ih(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? s = i = t : i = i.next = t
        } else
            s = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function zo(e, t, n, r) {
    var s = e.updateQueue;
    en = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? i = u : o.next = u,
        o = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== o && (a === null ? d.firstBaseUpdate = u : a.next = u,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var c = s.baseState;
        o = 0,
        d = u = l = null,
        a = i;
        do {
            var h = a.lane
              , y = a.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e
                      , w = a;
                    switch (h = t,
                    y = n,
                    w.tag) {
                    case 1:
                        if (v = w.payload,
                        typeof v == "function") {
                            c = v.call(y, c, h);
                            break e
                        }
                        c = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = w.payload,
                        h = typeof v == "function" ? v.call(y, c, h) : v,
                        h == null)
                            break e;
                        c = te({}, c, h);
                        break e;
                    case 2:
                        en = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                h = s.effects,
                h === null ? s.effects = [a] : h.push(a))
            } else
                y = {
                    eventTime: y,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (u = d = y,
                l = c) : d = d.next = y,
                o |= h;
            if (a = a.next,
            a === null) {
                if (a = s.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                s.lastBaseUpdate = h,
                s.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = c),
        s.baseState = l,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = d,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                o |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            i === null && (s.shared.lanes = 0);
        Kn |= o,
        e.lanes = o,
        e.memoizedState = c
    }
}
function oh(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(A(191, s));
                s.call(r)
            }
        }
}
var yi = {}
  , jt = Sn(yi)
  , Js = Sn(yi)
  , Zs = Sn(yi);
function Dn(e) {
    if (e === yi)
        throw Error(A(174));
    return e
}
function $c(e, t) {
    switch (K(Zs, t),
    K(Js, e),
    K(jt, yi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Xl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Xl(t, e)
    }
    G(jt),
    K(jt, t)
}
function Br() {
    G(jt),
    G(Js),
    G(Zs)
}
function Ug(e) {
    Dn(Zs.current);
    var t = Dn(jt.current)
      , n = Xl(t, e.type);
    t !== n && (K(Js, e),
    K(jt, n))
}
function Uc(e) {
    Js.current === e && (G(jt),
    G(Js))
}
var J = Sn(0);
function Wo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var al = [];
function zc() {
    for (var e = 0; e < al.length; e++)
        al[e]._workInProgressVersionPrimary = null;
    al.length = 0
}
var fo = Xt.ReactCurrentDispatcher
  , ll = Xt.ReactCurrentBatchConfig
  , Hn = 0
  , ee = null
  , fe = null
  , ge = null
  , Ho = !1
  , js = !1
  , ei = 0
  , $1 = 0;
function Pe() {
    throw Error(A(321))
}
function Wc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!St(e[n], t[n]))
            return !1;
    return !0
}
function Hc(e, t, n, r, s, i) {
    if (Hn = i,
    ee = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    fo.current = e === null || e.memoizedState === null ? H1 : K1,
    e = n(r, s),
    js) {
        i = 0;
        do {
            if (js = !1,
            ei = 0,
            25 <= i)
                throw Error(A(301));
            i += 1,
            ge = fe = null,
            t.updateQueue = null,
            fo.current = q1,
            e = n(r, s)
        } while (js)
    }
    if (fo.current = Ko,
    t = fe !== null && fe.next !== null,
    Hn = 0,
    ge = fe = ee = null,
    Ho = !1,
    t)
        throw Error(A(300));
    return e
}
function Kc() {
    var e = ei !== 0;
    return ei = 0,
    e
}
function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ge === null ? ee.memoizedState = ge = e : ge = ge.next = e,
    ge
}
function at() {
    if (fe === null) {
        var e = ee.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = fe.next;
    var t = ge === null ? ee.memoizedState : ge.next;
    if (t !== null)
        ge = t,
        fe = e;
    else {
        if (e === null)
            throw Error(A(310));
        fe = e,
        e = {
            memoizedState: fe.memoizedState,
            baseState: fe.baseState,
            baseQueue: fe.baseQueue,
            queue: fe.queue,
            next: null
        },
        ge === null ? ee.memoizedState = ge = e : ge = ge.next = e
    }
    return ge
}
function ti(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ul(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = fe
      , s = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        r.baseQueue = s = i,
        n.pending = null
    }
    if (s !== null) {
        i = s.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , u = i;
        do {
            var d = u.lane;
            if ((Hn & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var c = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = c,
                o = r) : l = l.next = c,
                ee.lanes |= d,
                Kn |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? o = r : l.next = a,
        St(r, t.memoizedState) || (Ve = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        s = e;
        do
            i = s.lane,
            ee.lanes |= i,
            Kn |= i,
            s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function cl(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , s = n.pending
      , i = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = s = s.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== s);
        St(i, t.memoizedState) || (Ve = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function zg() {}
function Wg(e, t) {
    var n = ee
      , r = at()
      , s = t()
      , i = !St(r.memoizedState, s);
    if (i && (r.memoizedState = s,
    Ve = !0),
    r = r.queue,
    qc(qg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ge !== null && ge.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ni(9, Kg.bind(null, n, r, s, t), void 0, null),
        ve === null)
            throw Error(A(349));
        Hn & 30 || Hg(n, t, s)
    }
    return s
}
function Hg(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ee.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ee.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Kg(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Gg(t) && Xg(e)
}
function qg(e, t, n) {
    return n(function() {
        Gg(t) && Xg(e)
    })
}
function Gg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !St(e, n)
    } catch {
        return !0
    }
}
function Xg(e) {
    var t = Kt(e, 1);
    t !== null && xt(t, e, 1, -1)
}
function ah(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ti,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = W1.bind(null, ee, e),
    [t.memoizedState, e]
}
function ni(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ee.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ee.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Yg() {
    return at().memoizedState
}
function ho(e, t, n, r) {
    var s = Pt();
    ee.flags |= e,
    s.memoizedState = ni(1 | t, n, void 0, r === void 0 ? null : r)
}
function Sa(e, t, n, r) {
    var s = at();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (fe !== null) {
        var o = fe.memoizedState;
        if (i = o.destroy,
        r !== null && Wc(r, o.deps)) {
            s.memoizedState = ni(t, n, i, r);
            return
        }
    }
    ee.flags |= e,
    s.memoizedState = ni(1 | t, n, i, r)
}
function lh(e, t) {
    return ho(8390656, 8, e, t)
}
function qc(e, t) {
    return Sa(2048, 8, e, t)
}
function Qg(e, t) {
    return Sa(4, 2, e, t)
}
function Jg(e, t) {
    return Sa(4, 4, e, t)
}
function Zg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ey(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Sa(4, 4, Zg.bind(null, t, e), n)
}
function Gc() {}
function ty(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ny(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wc(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ry(e, t, n) {
    return Hn & 21 ? (St(n, t) || (n = lg(),
    ee.lanes |= n,
    Kn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ve = !0),
    e.memoizedState = n)
}
function U1(e, t) {
    var n = z;
    z = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ll.transition;
    ll.transition = {};
    try {
        e(!1),
        t()
    } finally {
        z = n,
        ll.transition = r
    }
}
function sy() {
    return at().memoizedState
}
function z1(e, t, n) {
    var r = hn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    iy(e))
        oy(t, n);
    else if (n = Bg(e, t, n, r),
    n !== null) {
        var s = Ie();
        xt(n, e, r, s),
        ay(n, t, r)
    }
}
function W1(e, t, n) {
    var r = hn(e)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (iy(e))
        oy(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , a = i(o, n);
                if (s.hasEagerState = !0,
                s.eagerState = a,
                St(a, o)) {
                    var l = t.interleaved;
                    l === null ? (s.next = s,
                    Vc(t)) : (s.next = l.next,
                    l.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = Bg(e, t, s, r),
        n !== null && (s = Ie(),
        xt(n, e, r, s),
        ay(n, t, r))
    }
}
function iy(e) {
    var t = e.alternate;
    return e === ee || t !== null && t === ee
}
function oy(e, t) {
    js = Ho = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ay(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Pc(e, n)
    }
}
var Ko = {
    readContext: ot,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1
}
  , H1 = {
    readContext: ot,
    useCallback: function(e, t) {
        return Pt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ot,
    useEffect: lh,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ho(4194308, 4, Zg.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ho(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ho(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Pt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Pt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = z1.bind(null, ee, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Pt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ah,
    useDebugValue: Gc,
    useDeferredValue: function(e) {
        return Pt().memoizedState = e
    },
    useTransition: function() {
        var e = ah(!1)
          , t = e[0];
        return e = U1.bind(null, e[1]),
        Pt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ee
          , s = Pt();
        if (Y) {
            if (n === void 0)
                throw Error(A(407));
            n = n()
        } else {
            if (n = t(),
            ve === null)
                throw Error(A(349));
            Hn & 30 || Hg(r, t, n)
        }
        s.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return s.queue = i,
        lh(qg.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        ni(9, Kg.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Pt()
          , t = ve.identifierPrefix;
        if (Y) {
            var n = Bt
              , r = Vt;
            n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ei++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = $1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , K1 = {
    readContext: ot,
    useCallback: ty,
    useContext: ot,
    useEffect: qc,
    useImperativeHandle: ey,
    useInsertionEffect: Qg,
    useLayoutEffect: Jg,
    useMemo: ny,
    useReducer: ul,
    useRef: Yg,
    useState: function() {
        return ul(ti)
    },
    useDebugValue: Gc,
    useDeferredValue: function(e) {
        var t = at();
        return ry(t, fe.memoizedState, e)
    },
    useTransition: function() {
        var e = ul(ti)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: zg,
    useSyncExternalStore: Wg,
    useId: sy,
    unstable_isNewReconciler: !1
}
  , q1 = {
    readContext: ot,
    useCallback: ty,
    useContext: ot,
    useEffect: qc,
    useImperativeHandle: ey,
    useInsertionEffect: Qg,
    useLayoutEffect: Jg,
    useMemo: ny,
    useReducer: cl,
    useRef: Yg,
    useState: function() {
        return cl(ti)
    },
    useDebugValue: Gc,
    useDeferredValue: function(e) {
        var t = at();
        return fe === null ? t.memoizedState = e : ry(t, fe.memoizedState, e)
    },
    useTransition: function() {
        var e = cl(ti)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: zg,
    useSyncExternalStore: Wg,
    useId: sy,
    unstable_isNewReconciler: !1
};
function ft(e, t) {
    if (e && e.defaultProps) {
        t = te({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function gu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : te({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ca = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Qn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , s = hn(e)
          , i = $t(r, s);
        i.payload = t,
        n != null && (i.callback = n),
        t = dn(e, i, s),
        t !== null && (xt(t, e, s, r),
        co(t, e, s))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , s = hn(e)
          , i = $t(r, s);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = dn(e, i, s),
        t !== null && (xt(t, e, s, r),
        co(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ie()
          , r = hn(e)
          , s = $t(n, r);
        s.tag = 2,
        t != null && (s.callback = t),
        t = dn(e, s, r),
        t !== null && (xt(t, e, r, n),
        co(t, e, r))
    }
};
function uh(e, t, n, r, s, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Gs(n, r) || !Gs(s, i) : !0
}
function ly(e, t, n) {
    var r = !1
      , s = yn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = ot(i) : (s = $e(t) ? zn : je.current,
    r = t.contextTypes,
    i = (r = r != null) ? Dr(e, s) : yn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ca,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function ch(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ca.enqueueReplaceState(t, t.state, null)
}
function yu(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    Bc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = ot(i) : (i = $e(t) ? zn : je.current,
    s.context = Dr(e, i)),
    s.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (gu(e, t, i, n),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && Ca.enqueueReplaceState(s, s.state, null),
    zo(e, n, s, r),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function $r(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Sx(r),
            r = r.return;
        while (r);
        var s = n
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function dl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function vu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var G1 = typeof WeakMap == "function" ? WeakMap : Map;
function uy(e, t, n) {
    n = $t(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Go || (Go = !0,
        Tu = r),
        vu(e, t)
    }
    ,
    n
}
function cy(e, t, n) {
    n = $t(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            vu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        vu(e, t),
        typeof r != "function" && (fn === null ? fn = new Set([this]) : fn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function dh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new G1;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
        s === void 0 && (s = new Set,
        r.set(t, s));
    s.has(n) || (s.add(n),
    e = lS.bind(null, e, t, n),
    t.then(e, e))
}
function fh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function hh(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1),
    t.tag = 2,
    dn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var X1 = Xt.ReactCurrentOwner
  , Ve = !1;
function Me(e, t, n, r) {
    t.child = e === null ? Vg(t, null, n, r) : Vr(t, e.child, n, r)
}
function ph(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return Nr(t, s),
    r = Hc(e, t, n, r, i, s),
    n = Kc(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    qt(e, t, s)) : (Y && n && Mc(t),
    t.flags |= 1,
    Me(e, t, r, s),
    t.child)
}
function mh(e, t, n, r, s) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !nd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        dy(e, t, i, r, s)) : (e = yo(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & s)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Gs,
        n(o, r) && e.ref === t.ref)
            return qt(e, t, s)
    }
    return t.flags |= 1,
    e = pn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function dy(e, t, n, r, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Gs(i, r) && e.ref === t.ref)
            if (Ve = !1,
            t.pendingProps = r = i,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (Ve = !0);
            else
                return t.lanes = e.lanes,
                qt(e, t, s)
    }
    return wu(e, t, n, r, s)
}
function fy(e, t, n) {
    var r = t.pendingProps
      , s = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            K(vr, Ke),
            Ke |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                K(vr, Ke),
                Ke |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            K(vr, Ke),
            Ke |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        K(vr, Ke),
        Ke |= r;
    return Me(e, t, s, n),
    t.child
}
function hy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function wu(e, t, n, r, s) {
    var i = $e(n) ? zn : je.current;
    return i = Dr(t, i),
    Nr(t, s),
    n = Hc(e, t, n, r, i, s),
    r = Kc(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    qt(e, t, s)) : (Y && r && Mc(t),
    t.flags |= 1,
    Me(e, t, n, s),
    t.child)
}
function gh(e, t, n, r, s) {
    if ($e(n)) {
        var i = !0;
        Fo(t)
    } else
        i = !1;
    if (Nr(t, s),
    t.stateNode === null)
        po(e, t),
        ly(t, n, r),
        yu(t, n, r, s),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = ot(u) : (u = $e(n) ? zn : je.current,
        u = Dr(t, u));
        var d = n.getDerivedStateFromProps
          , c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && ch(t, o, r, u),
        en = !1;
        var h = t.memoizedState;
        o.state = h,
        zo(t, r, o, s),
        l = t.memoizedState,
        a !== r || h !== l || Be.current || en ? (typeof d == "function" && (gu(t, n, d, r),
        l = t.memoizedState),
        (a = en || uh(t, n, a, r, h, l, u)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        $g(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : ft(t.type, a),
        o.props = u,
        c = t.pendingProps,
        h = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = ot(l) : (l = $e(n) ? zn : je.current,
        l = Dr(t, l));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || h !== l) && ch(t, o, r, l),
        en = !1,
        h = t.memoizedState,
        o.state = h,
        zo(t, r, o, s);
        var v = t.memoizedState;
        a !== c || h !== v || Be.current || en ? (typeof y == "function" && (gu(t, n, y, r),
        v = t.memoizedState),
        (u = en || uh(t, n, u, r, h, v, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return xu(e, t, n, r, i, s)
}
function xu(e, t, n, r, s, i) {
    hy(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return s && th(t, n, !1),
        qt(e, t, i);
    r = t.stateNode,
    X1.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Vr(t, e.child, null, i),
    t.child = Vr(t, null, a, i)) : Me(e, t, a, i),
    t.memoizedState = r.state,
    s && th(t, n, !0),
    t.child
}
function py(e) {
    var t = e.stateNode;
    t.pendingContext ? eh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eh(e, t.context, !1),
    $c(e, t.containerInfo)
}
function yh(e, t, n, r, s) {
    return Fr(),
    Lc(s),
    t.flags |= 256,
    Me(e, t, n, r),
    t.child
}
var Su = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Cu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function my(e, t, n) {
    var r = t.pendingProps, s = J.current, i = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    K(J, s & 1),
    e === null)
        return pu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = Pa(o, r, 0, null),
        e = $n(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Cu(n),
        t.memoizedState = Su,
        e) : Xc(t, o));
    if (s = e.memoizedState,
    s !== null && (a = s.dehydrated,
    a !== null))
        return Y1(e, t, o, r, a, s, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        s = e.child,
        a = s.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== s ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = pn(s, l),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        a !== null ? i = pn(a, i) : (i = $n(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Cu(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Su,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = pn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Xc(e, t) {
    return t = Pa({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ki(e, t, n, r) {
    return r !== null && Lc(r),
    Vr(t, e.child, null, n),
    e = Xc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Y1(e, t, n, r, s, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = dl(Error(A(422))),
        Ki(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        s = t.mode,
        r = Pa({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        i = $n(i, s, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Vr(t, e.child, null, o),
        t.child.memoizedState = Cu(o),
        t.memoizedState = Su,
        i);
    if (!(t.mode & 1))
        return Ki(e, t, o, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(A(419)),
        r = dl(i, r, void 0),
        Ki(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    Ve || a) {
        if (r = ve,
        r !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            Kt(e, s),
            xt(r, e, s, -1))
        }
        return td(),
        r = dl(Error(A(421))),
        Ki(e, t, o, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = uS.bind(null, e),
    s._reactRetry = t,
    null) : (e = i.treeContext,
    qe = cn(s.nextSibling),
    Ge = t,
    Y = !0,
    gt = null,
    e !== null && (nt[rt++] = Vt,
    nt[rt++] = Bt,
    nt[rt++] = Wn,
    Vt = e.id,
    Bt = e.overflow,
    Wn = t),
    t = Xc(t, r.children),
    t.flags |= 4096,
    t)
}
function vh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    mu(e.return, t, n)
}
function fl(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = s)
}
function gy(e, t, n) {
    var r = t.pendingProps
      , s = r.revealOrder
      , i = r.tail;
    if (Me(e, t, r.children, n),
    r = J.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && vh(e, n, t);
                else if (e.tag === 19)
                    vh(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (K(J, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && Wo(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            fl(t, !1, s, n, i);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && Wo(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            fl(t, !0, n, null, i);
            break;
        case "together":
            fl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function po(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Kn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child,
        n = pn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = pn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Q1(e, t, n) {
    switch (t.tag) {
    case 3:
        py(t),
        Fr();
        break;
    case 5:
        Ug(t);
        break;
    case 1:
        $e(t.type) && Fo(t);
        break;
    case 4:
        $c(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , s = t.memoizedProps.value;
        K($o, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (K(J, J.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? my(e, t, n) : (K(J, J.current & 1),
            e = qt(e, t, n),
            e !== null ? e.sibling : null);
        K(J, J.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return gy(e, t, n);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        K(J, J.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        fy(e, t, n)
    }
    return qt(e, t, n)
}
var yy, _u, vy, wy;
yy = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
_u = function() {}
;
vy = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
        Dn(jt.current);
        var i = null;
        switch (n) {
        case "input":
            s = Hl(e, s),
            r = Hl(e, r),
            i = [];
            break;
        case "select":
            s = te({}, s, {
                value: void 0
            }),
            r = te({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = Gl(e, s),
            r = Gl(e, r),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Oo)
        }
        Yl(n, r);
        var o;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && ($s.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = s != null ? s[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && ($s.hasOwnProperty(u) ? (l != null && u === "onScroll" && q("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
wy = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function cs(e, t) {
    if (!Y)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function J1(e, t, n) {
    var r = t.pendingProps;
    switch (Ic(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ke(t),
        null;
    case 1:
        return $e(t.type) && Do(),
        ke(t),
        null;
    case 3:
        return r = t.stateNode,
        Br(),
        G(Be),
        G(je),
        zc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        gt !== null && (ju(gt),
        gt = null))),
        _u(e, t),
        ke(t),
        null;
    case 5:
        Uc(t);
        var s = Dn(Zs.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            vy(e, t, n, r, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(A(166));
                return ke(t),
                null
            }
            if (e = Dn(jt.current),
            Wi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Tt] = t,
                r[Qs] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    q("cancel", r),
                    q("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    q("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < gs.length; s++)
                        q(gs[s], r);
                    break;
                case "source":
                    q("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    q("error", r),
                    q("load", r);
                    break;
                case "details":
                    q("toggle", r);
                    break;
                case "input":
                    Af(r, i),
                    q("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    q("invalid", r);
                    break;
                case "textarea":
                    bf(r, i),
                    q("invalid", r)
                }
                Yl(n, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && zi(r.textContent, a, e),
                        s = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && zi(r.textContent, a, e),
                        s = ["children", "" + a]) : $s.hasOwnProperty(o) && a != null && o === "onScroll" && q("scroll", r)
                    }
                switch (n) {
                case "input":
                    Li(r),
                    Tf(r, i, !0);
                    break;
                case "textarea":
                    Li(r),
                    Nf(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Oo)
                }
                r = s,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = qm(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Tt] = t,
                e[Qs] = r,
                yy(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Ql(n, r),
                    n) {
                    case "dialog":
                        q("cancel", e),
                        q("close", e),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        q("load", e),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < gs.length; s++)
                            q(gs[s], e);
                        s = r;
                        break;
                    case "source":
                        q("error", e),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        q("error", e),
                        q("load", e),
                        s = r;
                        break;
                    case "details":
                        q("toggle", e),
                        s = r;
                        break;
                    case "input":
                        Af(e, r),
                        s = Hl(e, r),
                        q("invalid", e);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = te({}, r, {
                            value: void 0
                        }),
                        q("invalid", e);
                        break;
                    case "textarea":
                        bf(e, r),
                        s = Gl(e, r),
                        q("invalid", e);
                        break;
                    default:
                        s = r
                    }
                    Yl(n, s),
                    a = s;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? Ym(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Gm(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Us(e, l) : typeof l == "number" && Us(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && ($s.hasOwnProperty(i) ? l != null && i === "onScroll" && q("scroll", e) : l != null && wc(e, i, l, o))
                        }
                    switch (n) {
                    case "input":
                        Li(e),
                        Tf(e, r, !1);
                        break;
                    case "textarea":
                        Li(e),
                        Nf(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + gn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? kr(e, !!r.multiple, i, !1) : r.defaultValue != null && kr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = Oo)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ke(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            wy(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(A(166));
            if (n = Dn(Zs.current),
            Dn(jt.current),
            Wi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Tt] = t,
                (i = r.nodeValue !== n) && (e = Ge,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        zi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && zi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Tt] = t,
                t.stateNode = r
        }
        return ke(t),
        null;
    case 13:
        if (G(J),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Y && qe !== null && t.mode & 1 && !(t.flags & 128))
                Dg(),
                Fr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Wi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(A(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(A(317));
                    i[Tt] = t
                } else
                    Fr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ke(t),
                i = !1
            } else
                gt !== null && (ju(gt),
                gt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || J.current & 1 ? he === 0 && (he = 3) : td())),
        t.updateQueue !== null && (t.flags |= 4),
        ke(t),
        null);
    case 4:
        return Br(),
        _u(e, t),
        e === null && Xs(t.stateNode.containerInfo),
        ke(t),
        null;
    case 10:
        return Fc(t.type._context),
        ke(t),
        null;
    case 17:
        return $e(t.type) && Do(),
        ke(t),
        null;
    case 19:
        if (G(J),
        i = t.memoizedState,
        i === null)
            return ke(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                cs(i, !1);
            else {
                if (he !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Wo(e),
                        o !== null) {
                            for (t.flags |= 128,
                            cs(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return K(J, J.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && oe() > Ur && (t.flags |= 128,
                r = !0,
                cs(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Wo(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    cs(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !Y)
                        return ke(t),
                        null
                } else
                    2 * oe() - i.renderingStartTime > Ur && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    cs(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = oe(),
        t.sibling = null,
        n = J.current,
        K(J, r ? n & 1 | 2 : n & 1),
        t) : (ke(t),
        null);
    case 22:
    case 23:
        return ed(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ke & 1073741824 && (ke(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(A(156, t.tag))
}
function Z1(e, t) {
    switch (Ic(t),
    t.tag) {
    case 1:
        return $e(t.type) && Do(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Br(),
        G(Be),
        G(je),
        zc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Uc(t),
        null;
    case 13:
        if (G(J),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(A(340));
            Fr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return G(J),
        null;
    case 4:
        return Br(),
        null;
    case 10:
        return Fc(t.type._context),
        null;
    case 22:
    case 23:
        return ed(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var qi = !1
  , be = !1
  , eS = typeof WeakSet == "function" ? WeakSet : Set
  , R = null;
function yr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                re(e, t, r)
            }
        else
            n.current = null
}
function Eu(e, t, n) {
    try {
        n()
    } catch (r) {
        re(e, t, r)
    }
}
var wh = !1;
function tS(e, t) {
    if (au = Mo,
    e = Eg(),
    Rc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , c = e
                      , h = null;
                    t: for (; ; ) {
                        for (var y; c !== n || s !== 0 && c.nodeType !== 3 || (a = o + s),
                        c !== i || r !== 0 && c.nodeType !== 3 || (l = o + r),
                        c.nodeType === 3 && (o += c.nodeValue.length),
                        (y = c.firstChild) !== null; )
                            h = c,
                            c = y;
                        for (; ; ) {
                            if (c === e)
                                break t;
                            if (h === n && ++u === s && (a = o),
                            h === i && ++d === r && (l = o),
                            (y = c.nextSibling) !== null)
                                break;
                            c = h,
                            h = c.parentNode
                        }
                        c = y
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (lu = {
        focusedElem: e,
        selectionRange: n
    },
    Mo = !1,
    R = t; R !== null; )
        if (t = R,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            R = e;
        else
            for (; R !== null; ) {
                t = R;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var w = v.memoizedProps
                                  , x = v.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : ft(t.type, w), x);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                        }
                } catch (S) {
                    re(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    R = e;
                    break
                }
                R = t.return
            }
    return v = wh,
    wh = !1,
    v
}
function Rs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && Eu(t, n, i)
            }
            s = s.next
        } while (s !== r)
    }
}
function _a(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Pu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function xy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    xy(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Tt],
    delete t[Qs],
    delete t[du],
    delete t[D1],
    delete t[F1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Sy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function xh(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Sy(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ku(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Oo));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ku(e, t, n),
        e = e.sibling; e !== null; )
            ku(e, t, n),
            e = e.sibling
}
function Au(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Au(e, t, n),
        e = e.sibling; e !== null; )
            Au(e, t, n),
            e = e.sibling
}
var we = null
  , mt = !1;
function Yt(e, t, n) {
    for (n = n.child; n !== null; )
        Cy(e, t, n),
        n = n.sibling
}
function Cy(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
        try {
            Nt.onCommitFiberUnmount(ma, n)
        } catch {}
    switch (n.tag) {
    case 5:
        be || yr(n, t);
    case 6:
        var r = we
          , s = mt;
        we = null,
        Yt(e, t, n),
        we = r,
        mt = s,
        we !== null && (mt ? (e = we,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
        break;
    case 18:
        we !== null && (mt ? (e = we,
        n = n.stateNode,
        e.nodeType === 8 ? il(e.parentNode, n) : e.nodeType === 1 && il(e, n),
        Ks(e)) : il(we, n.stateNode));
        break;
    case 4:
        r = we,
        s = mt,
        we = n.stateNode.containerInfo,
        mt = !0,
        Yt(e, t, n),
        we = r,
        mt = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!be && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Eu(n, t, o),
                s = s.next
            } while (s !== r)
        }
        Yt(e, t, n);
        break;
    case 1:
        if (!be && (yr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                re(n, t, a)
            }
        Yt(e, t, n);
        break;
    case 21:
        Yt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (be = (r = be) || n.memoizedState !== null,
        Yt(e, t, n),
        be = r) : Yt(e, t, n);
        break;
    default:
        Yt(e, t, n)
    }
}
function Sh(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new eS),
        t.forEach(function(r) {
            var s = cS.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        we = a.stateNode,
                        mt = !1;
                        break e;
                    case 3:
                        we = a.stateNode.containerInfo,
                        mt = !0;
                        break e;
                    case 4:
                        we = a.stateNode.containerInfo,
                        mt = !0;
                        break e
                    }
                    a = a.return
                }
                if (we === null)
                    throw Error(A(160));
                Cy(i, o, s),
                we = null,
                mt = !1;
                var l = s.alternate;
                l !== null && (l.return = null),
                s.return = null
            } catch (u) {
                re(s, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            _y(t, e),
            t = t.sibling
}
function _y(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ut(t, e),
        _t(e),
        r & 4) {
            try {
                Rs(3, e, e.return),
                _a(3, e)
            } catch (w) {
                re(e, e.return, w)
            }
            try {
                Rs(5, e, e.return)
            } catch (w) {
                re(e, e.return, w)
            }
        }
        break;
    case 1:
        ut(t, e),
        _t(e),
        r & 512 && n !== null && yr(n, n.return);
        break;
    case 5:
        if (ut(t, e),
        _t(e),
        r & 512 && n !== null && yr(n, n.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                Us(s, "")
            } catch (w) {
                re(e, e.return, w)
            }
        }
        if (r & 4 && (s = e.stateNode,
        s != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Hm(s, i),
                    Ql(a, o);
                    var u = Ql(a, i);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o]
                          , c = l[o + 1];
                        d === "style" ? Ym(s, c) : d === "dangerouslySetInnerHTML" ? Gm(s, c) : d === "children" ? Us(s, c) : wc(s, d, c, u)
                    }
                    switch (a) {
                    case "input":
                        Kl(s, i);
                        break;
                    case "textarea":
                        Km(s, i);
                        break;
                    case "select":
                        var h = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? kr(s, !!i.multiple, y, !1) : h !== !!i.multiple && (i.defaultValue != null ? kr(s, !!i.multiple, i.defaultValue, !0) : kr(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Qs] = i
                } catch (w) {
                    re(e, e.return, w)
                }
        }
        break;
    case 6:
        if (ut(t, e),
        _t(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(A(162));
            s = e.stateNode,
            i = e.memoizedProps;
            try {
                s.nodeValue = i
            } catch (w) {
                re(e, e.return, w)
            }
        }
        break;
    case 3:
        if (ut(t, e),
        _t(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ks(t.containerInfo)
            } catch (w) {
                re(e, e.return, w)
            }
        break;
    case 4:
        ut(t, e),
        _t(e);
        break;
    case 13:
        ut(t, e),
        _t(e),
        s = e.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (Jc = oe())),
        r & 4 && Sh(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (be = (u = be) || d,
        ut(t, e),
        be = u) : ut(t, e),
        _t(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (R = e,
                d = e.child; d !== null; ) {
                    for (c = R = d; R !== null; ) {
                        switch (h = R,
                        y = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Rs(4, h, h.return);
                            break;
                        case 1:
                            yr(h, h.return);
                            var v = h.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (w) {
                                    re(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            yr(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                _h(c);
                                continue
                            }
                        }
                        y !== null ? (y.return = h,
                        R = y) : _h(c)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            c = e; ; ) {
                if (c.tag === 5) {
                    if (d === null) {
                        d = c;
                        try {
                            s = c.stateNode,
                            u ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = c.stateNode,
                            l = c.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Xm("display", o))
                        } catch (w) {
                            re(e, e.return, w)
                        }
                    }
                } else if (c.tag === 6) {
                    if (d === null)
                        try {
                            c.stateNode.nodeValue = u ? "" : c.memoizedProps
                        } catch (w) {
                            re(e, e.return, w)
                        }
                } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                    c.child.return = c,
                    c = c.child;
                    continue
                }
                if (c === e)
                    break e;
                for (; c.sibling === null; ) {
                    if (c.return === null || c.return === e)
                        break e;
                    d === c && (d = null),
                    c = c.return
                }
                d === c && (d = null),
                c.sibling.return = c.return,
                c = c.sibling
            }
        }
        break;
    case 19:
        ut(t, e),
        _t(e),
        r & 4 && Sh(e);
        break;
    case 21:
        break;
    default:
        ut(t, e),
        _t(e)
    }
}
function _t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Sy(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (Us(s, ""),
                r.flags &= -33);
                var i = xh(e);
                Au(e, i, s);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = xh(e);
                ku(e, a, o);
                break;
            default:
                throw Error(A(161))
            }
        } catch (l) {
            re(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function nS(e, t, n) {
    R = e,
    Ey(e)
}
function Ey(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
        var s = R
          , i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || qi;
            if (!o) {
                var a = s.alternate
                  , l = a !== null && a.memoizedState !== null || be;
                a = qi;
                var u = be;
                if (qi = o,
                (be = l) && !u)
                    for (R = s; R !== null; )
                        o = R,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Eh(s) : l !== null ? (l.return = o,
                        R = l) : Eh(s);
                for (; i !== null; )
                    R = i,
                    Ey(i),
                    i = i.sibling;
                R = s,
                qi = a,
                be = u
            }
            Ch(e)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            R = i) : Ch(e)
    }
}
function Ch(e) {
    for (; R !== null; ) {
        var t = R;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        be || _a(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !be)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && oh(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            oh(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var c = d.dehydrated;
                                    c !== null && Ks(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                    }
                be || t.flags & 512 && Pu(t)
            } catch (h) {
                re(t, t.return, h)
            }
        }
        if (t === e) {
            R = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function _h(e) {
    for (; R !== null; ) {
        var t = R;
        if (t === e) {
            R = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            R = n;
            break
        }
        R = t.return
    }
}
function Eh(e) {
    for (; R !== null; ) {
        var t = R;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    _a(4, t)
                } catch (l) {
                    re(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        re(t, s, l)
                    }
                }
                var i = t.return;
                try {
                    Pu(t)
                } catch (l) {
                    re(t, i, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Pu(t)
                } catch (l) {
                    re(t, o, l)
                }
            }
        } catch (l) {
            re(t, t.return, l)
        }
        if (t === e) {
            R = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            R = a;
            break
        }
        R = t.return
    }
}
var rS = Math.ceil
  , qo = Xt.ReactCurrentDispatcher
  , Yc = Xt.ReactCurrentOwner
  , it = Xt.ReactCurrentBatchConfig
  , $ = 0
  , ve = null
  , ae = null
  , Ce = 0
  , Ke = 0
  , vr = Sn(0)
  , he = 0
  , ri = null
  , Kn = 0
  , Ea = 0
  , Qc = 0
  , Ms = null
  , Fe = null
  , Jc = 0
  , Ur = 1 / 0
  , Dt = null
  , Go = !1
  , Tu = null
  , fn = null
  , Gi = !1
  , sn = null
  , Xo = 0
  , Is = 0
  , bu = null
  , mo = -1
  , go = 0;
function Ie() {
    return $ & 6 ? oe() : mo !== -1 ? mo : mo = oe()
}
function hn(e) {
    return e.mode & 1 ? $ & 2 && Ce !== 0 ? Ce & -Ce : B1.transition !== null ? (go === 0 && (go = lg()),
    go) : (e = z,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : mg(e.type)),
    e) : 1
}
function xt(e, t, n, r) {
    if (50 < Is)
        throw Is = 0,
        bu = null,
        Error(A(185));
    pi(e, n, r),
    (!($ & 2) || e !== ve) && (e === ve && (!($ & 2) && (Ea |= n),
    he === 4 && nn(e, Ce)),
    Ue(e, r),
    n === 1 && $ === 0 && !(t.mode & 1) && (Ur = oe() + 500,
    xa && Cn()))
}
function Ue(e, t) {
    var n = e.callbackNode;
    Bx(e, t);
    var r = Ro(e, e === ve ? Ce : 0);
    if (r === 0)
        n !== null && Mf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Mf(n),
        t === 1)
            e.tag === 0 ? V1(Ph.bind(null, e)) : Ig(Ph.bind(null, e)),
            L1(function() {
                !($ & 6) && Cn()
            }),
            n = null;
        else {
            switch (ug(r)) {
            case 1:
                n = Ec;
                break;
            case 4:
                n = og;
                break;
            case 16:
                n = jo;
                break;
            case 536870912:
                n = ag;
                break;
            default:
                n = jo
            }
            n = Ry(n, Py.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Py(e, t) {
    if (mo = -1,
    go = 0,
    $ & 6)
        throw Error(A(327));
    var n = e.callbackNode;
    if (jr() && e.callbackNode !== n)
        return null;
    var r = Ro(e, e === ve ? Ce : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Yo(e, r);
    else {
        t = r;
        var s = $;
        $ |= 2;
        var i = Ay();
        (ve !== e || Ce !== t) && (Dt = null,
        Ur = oe() + 500,
        Bn(e, t));
        do
            try {
                oS();
                break
            } catch (a) {
                ky(e, a)
            }
        while (!0);
        Dc(),
        qo.current = i,
        $ = s,
        ae !== null ? t = 0 : (ve = null,
        Ce = 0,
        t = he)
    }
    if (t !== 0) {
        if (t === 2 && (s = nu(e),
        s !== 0 && (r = s,
        t = Nu(e, s))),
        t === 1)
            throw n = ri,
            Bn(e, 0),
            nn(e, r),
            Ue(e, oe()),
            n;
        if (t === 6)
            nn(e, r);
        else {
            if (s = e.current.alternate,
            !(r & 30) && !sS(s) && (t = Yo(e, r),
            t === 2 && (i = nu(e),
            i !== 0 && (r = i,
            t = Nu(e, i))),
            t === 1))
                throw n = ri,
                Bn(e, 0),
                nn(e, r),
                Ue(e, oe()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(A(345));
            case 2:
                Nn(e, Fe, Dt);
                break;
            case 3:
                if (nn(e, r),
                (r & 130023424) === r && (t = Jc + 500 - oe(),
                10 < t)) {
                    if (Ro(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & r) !== r) {
                        Ie(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = cu(Nn.bind(null, e, Fe, Dt), t);
                    break
                }
                Nn(e, Fe, Dt);
                break;
            case 4:
                if (nn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < r; ) {
                    var o = 31 - wt(r);
                    i = 1 << o,
                    o = t[o],
                    o > s && (s = o),
                    r &= ~i
                }
                if (r = s,
                r = oe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * rS(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = cu(Nn.bind(null, e, Fe, Dt), r);
                    break
                }
                Nn(e, Fe, Dt);
                break;
            case 5:
                Nn(e, Fe, Dt);
                break;
            default:
                throw Error(A(329))
            }
        }
    }
    return Ue(e, oe()),
    e.callbackNode === n ? Py.bind(null, e) : null
}
function Nu(e, t) {
    var n = Ms;
    return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    e = Yo(e, t),
    e !== 2 && (t = Fe,
    Fe = n,
    t !== null && ju(t)),
    e
}
function ju(e) {
    Fe === null ? Fe = e : Fe.push.apply(Fe, e)
}
function sS(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!St(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function nn(e, t) {
    for (t &= ~Qc,
    t &= ~Ea,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - wt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Ph(e) {
    if ($ & 6)
        throw Error(A(327));
    jr();
    var t = Ro(e, 0);
    if (!(t & 1))
        return Ue(e, oe()),
        null;
    var n = Yo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = nu(e);
        r !== 0 && (t = r,
        n = Nu(e, r))
    }
    if (n === 1)
        throw n = ri,
        Bn(e, 0),
        nn(e, t),
        Ue(e, oe()),
        n;
    if (n === 6)
        throw Error(A(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Nn(e, Fe, Dt),
    Ue(e, oe()),
    null
}
function Zc(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t)
    } finally {
        $ = n,
        $ === 0 && (Ur = oe() + 500,
        xa && Cn())
    }
}
function qn(e) {
    sn !== null && sn.tag === 0 && !($ & 6) && jr();
    var t = $;
    $ |= 1;
    var n = it.transition
      , r = z;
    try {
        if (it.transition = null,
        z = 1,
        e)
            return e()
    } finally {
        z = r,
        it.transition = n,
        $ = t,
        !($ & 6) && Cn()
    }
}
function ed() {
    Ke = vr.current,
    G(vr)
}
function Bn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    I1(n)),
    ae !== null)
        for (n = ae.return; n !== null; ) {
            var r = n;
            switch (Ic(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Do();
                break;
            case 3:
                Br(),
                G(Be),
                G(je),
                zc();
                break;
            case 5:
                Uc(r);
                break;
            case 4:
                Br();
                break;
            case 13:
                G(J);
                break;
            case 19:
                G(J);
                break;
            case 10:
                Fc(r.type._context);
                break;
            case 22:
            case 23:
                ed()
            }
            n = n.return
        }
    if (ve = e,
    ae = e = pn(e.current, null),
    Ce = Ke = t,
    he = 0,
    ri = null,
    Qc = Ea = Kn = 0,
    Fe = Ms = null,
    On !== null) {
        for (t = 0; t < On.length; t++)
            if (n = On[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    r.next = o
                }
                n.pending = r
            }
        On = null
    }
    return e
}
function ky(e, t) {
    do {
        var n = ae;
        try {
            if (Dc(),
            fo.current = Ko,
            Ho) {
                for (var r = ee.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                Ho = !1
            }
            if (Hn = 0,
            ge = fe = ee = null,
            js = !1,
            ei = 0,
            Yc.current = null,
            n === null || n.return === null) {
                he = 1,
                ri = t,
                ae = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = Ce,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = a
                      , c = d.tag;
                    if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                        d.memoizedState = h.memoizedState,
                        d.lanes = h.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var y = fh(o);
                    if (y !== null) {
                        y.flags &= -257,
                        hh(y, o, a, i, t),
                        y.mode & 1 && dh(i, u, t),
                        t = y,
                        l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var w = new Set;
                            w.add(l),
                            t.updateQueue = w
                        } else
                            v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            dh(i, u, t),
                            td();
                            break e
                        }
                        l = Error(A(426))
                    }
                } else if (Y && a.mode & 1) {
                    var x = fh(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        hh(x, o, a, i, t),
                        Lc($r(l, a));
                        break e
                    }
                }
                i = l = $r(l, a),
                he !== 4 && (he = 2),
                Ms === null ? Ms = [i] : Ms.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = uy(i, l, t);
                        ih(i, m);
                        break e;
                    case 1:
                        a = l;
                        var p = i.type
                          , g = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (fn === null || !fn.has(g)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = cy(i, a, t);
                            ih(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            by(n)
        } catch (_) {
            t = _,
            ae === n && n !== null && (ae = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Ay() {
    var e = qo.current;
    return qo.current = Ko,
    e === null ? Ko : e
}
function td() {
    (he === 0 || he === 3 || he === 2) && (he = 4),
    ve === null || !(Kn & 268435455) && !(Ea & 268435455) || nn(ve, Ce)
}
function Yo(e, t) {
    var n = $;
    $ |= 2;
    var r = Ay();
    (ve !== e || Ce !== t) && (Dt = null,
    Bn(e, t));
    do
        try {
            iS();
            break
        } catch (s) {
            ky(e, s)
        }
    while (!0);
    if (Dc(),
    $ = n,
    qo.current = r,
    ae !== null)
        throw Error(A(261));
    return ve = null,
    Ce = 0,
    he
}
function iS() {
    for (; ae !== null; )
        Ty(ae)
}
function oS() {
    for (; ae !== null && !jx(); )
        Ty(ae)
}
function Ty(e) {
    var t = jy(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps,
    t === null ? by(e) : ae = t,
    Yc.current = null
}
function by(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Z1(n, t),
            n !== null) {
                n.flags &= 32767,
                ae = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                he = 6,
                ae = null;
                return
            }
        } else if (n = J1(n, t, Ke),
        n !== null) {
            ae = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ae = t;
            return
        }
        ae = t = e
    } while (t !== null);
    he === 0 && (he = 5)
}
function Nn(e, t, n) {
    var r = z
      , s = it.transition;
    try {
        it.transition = null,
        z = 1,
        aS(e, t, n, r)
    } finally {
        it.transition = s,
        z = r
    }
    return null
}
function aS(e, t, n, r) {
    do
        jr();
    while (sn !== null);
    if ($ & 6)
        throw Error(A(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(A(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if ($x(e, i),
    e === ve && (ae = ve = null,
    Ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gi || (Gi = !0,
    Ry(jo, function() {
        return jr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = it.transition,
        it.transition = null;
        var o = z;
        z = 1;
        var a = $;
        $ |= 4,
        Yc.current = null,
        tS(e, n),
        _y(n, e),
        A1(lu),
        Mo = !!au,
        lu = au = null,
        e.current = n,
        nS(n),
        Rx(),
        $ = a,
        z = o,
        it.transition = i
    } else
        e.current = n;
    if (Gi && (Gi = !1,
    sn = e,
    Xo = s),
    i = e.pendingLanes,
    i === 0 && (fn = null),
    Lx(n.stateNode),
    Ue(e, oe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            s = t[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (Go)
        throw Go = !1,
        e = Tu,
        Tu = null,
        e;
    return Xo & 1 && e.tag !== 0 && jr(),
    i = e.pendingLanes,
    i & 1 ? e === bu ? Is++ : (Is = 0,
    bu = e) : Is = 0,
    Cn(),
    null
}
function jr() {
    if (sn !== null) {
        var e = ug(Xo)
          , t = it.transition
          , n = z;
        try {
            if (it.transition = null,
            z = 16 > e ? 16 : e,
            sn === null)
                var r = !1;
            else {
                if (e = sn,
                sn = null,
                Xo = 0,
                $ & 6)
                    throw Error(A(331));
                var s = $;
                for ($ |= 4,
                R = e.current; R !== null; ) {
                    var i = R
                      , o = i.child;
                    if (R.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (R = u; R !== null; ) {
                                    var d = R;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Rs(8, d, i)
                                    }
                                    var c = d.child;
                                    if (c !== null)
                                        c.return = d,
                                        R = c;
                                    else
                                        for (; R !== null; ) {
                                            d = R;
                                            var h = d.sibling
                                              , y = d.return;
                                            if (xy(d),
                                            d === u) {
                                                R = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y,
                                                R = h;
                                                break
                                            }
                                            R = y
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var w = v.child;
                                if (w !== null) {
                                    v.child = null;
                                    do {
                                        var x = w.sibling;
                                        w.sibling = null,
                                        w = x
                                    } while (w !== null)
                                }
                            }
                            R = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        R = o;
                    else
                        e: for (; R !== null; ) {
                            if (i = R,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Rs(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                R = m;
                                break e
                            }
                            R = i.return
                        }
                }
                var p = e.current;
                for (R = p; R !== null; ) {
                    o = R;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null)
                        g.return = o,
                        R = g;
                    else
                        e: for (o = p; R !== null; ) {
                            if (a = R,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        _a(9, a)
                                    }
                                } catch (_) {
                                    re(a, a.return, _)
                                }
                            if (a === o) {
                                R = null;
                                break e
                            }
                            var S = a.sibling;
                            if (S !== null) {
                                S.return = a.return,
                                R = S;
                                break e
                            }
                            R = a.return
                        }
                }
                if ($ = s,
                Cn(),
                Nt && typeof Nt.onPostCommitFiberRoot == "function")
                    try {
                        Nt.onPostCommitFiberRoot(ma, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            z = n,
            it.transition = t
        }
    }
    return !1
}
function kh(e, t, n) {
    t = $r(n, t),
    t = uy(e, t, 1),
    e = dn(e, t, 1),
    t = Ie(),
    e !== null && (pi(e, 1, t),
    Ue(e, t))
}
function re(e, t, n) {
    if (e.tag === 3)
        kh(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                kh(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
                    e = $r(n, e),
                    e = cy(t, e, 1),
                    t = dn(t, e, 1),
                    e = Ie(),
                    t !== null && (pi(t, 1, e),
                    Ue(t, e));
                    break
                }
            }
            t = t.return
        }
}
function lS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ie(),
    e.pingedLanes |= e.suspendedLanes & n,
    ve === e && (Ce & n) === n && (he === 4 || he === 3 && (Ce & 130023424) === Ce && 500 > oe() - Jc ? Bn(e, 0) : Qc |= n),
    Ue(e, t)
}
function Ny(e, t) {
    t === 0 && (e.mode & 1 ? (t = Fi,
    Fi <<= 1,
    !(Fi & 130023424) && (Fi = 4194304)) : t = 1);
    var n = Ie();
    e = Kt(e, t),
    e !== null && (pi(e, t, n),
    Ue(e, n))
}
function uS(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ny(e, n)
}
function cS(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(A(314))
    }
    r !== null && r.delete(t),
    Ny(e, n)
}
var jy;
jy = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current)
            Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ve = !1,
                Q1(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else
        Ve = !1,
        Y && t.flags & 1048576 && Lg(t, Bo, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        po(e, t),
        e = t.pendingProps;
        var s = Dr(t, je.current);
        Nr(t, n),
        s = Hc(null, t, r, e, s, n);
        var i = Kc();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        $e(r) ? (i = !0,
        Fo(t)) : i = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        Bc(t),
        s.updater = Ca,
        t.stateNode = s,
        s._reactInternals = t,
        yu(t, r, e, n),
        t = xu(null, t, r, !0, i, n)) : (t.tag = 0,
        Y && i && Mc(t),
        Me(null, t, s, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (po(e, t),
            e = t.pendingProps,
            s = r._init,
            r = s(r._payload),
            t.type = r,
            s = t.tag = fS(r),
            e = ft(r, e),
            s) {
            case 0:
                t = wu(null, t, r, e, n);
                break e;
            case 1:
                t = gh(null, t, r, e, n);
                break e;
            case 11:
                t = ph(null, t, r, e, n);
                break e;
            case 14:
                t = mh(null, t, r, ft(r.type, e), n);
                break e
            }
            throw Error(A(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : ft(r, s),
        wu(e, t, r, s, n);
    case 1:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : ft(r, s),
        gh(e, t, r, s, n);
    case 3:
        e: {
            if (py(t),
            e === null)
                throw Error(A(387));
            r = t.pendingProps,
            i = t.memoizedState,
            s = i.element,
            $g(e, t),
            zo(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    s = $r(Error(A(423)), t),
                    t = yh(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = $r(Error(A(424)), t),
                    t = yh(e, t, r, n, s);
                    break e
                } else
                    for (qe = cn(t.stateNode.containerInfo.firstChild),
                    Ge = t,
                    Y = !0,
                    gt = null,
                    n = Vg(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Fr(),
                r === s) {
                    t = qt(e, t, n);
                    break e
                }
                Me(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Ug(t),
        e === null && pu(t),
        r = t.type,
        s = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = s.children,
        uu(r, s) ? o = null : i !== null && uu(r, i) && (t.flags |= 32),
        hy(e, t),
        Me(e, t, o, n),
        t.child;
    case 6:
        return e === null && pu(t),
        null;
    case 13:
        return my(e, t, n);
    case 4:
        return $c(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Vr(t, null, r, n) : Me(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : ft(r, s),
        ph(e, t, r, s, n);
    case 7:
        return Me(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Me(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Me(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            s = t.pendingProps,
            i = t.memoizedProps,
            o = s.value,
            K($o, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (St(i.value, o)) {
                    if (i.children === s.children && !Be.current) {
                        t = qt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = $t(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    mu(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(A(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            mu(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            Me(e, t, s.children, n),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        r = t.pendingProps.children,
        Nr(t, n),
        s = ot(s),
        r = r(s),
        t.flags |= 1,
        Me(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        s = ft(r, t.pendingProps),
        s = ft(r.type, s),
        mh(e, t, r, s, n);
    case 15:
        return dy(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : ft(r, s),
        po(e, t),
        t.tag = 1,
        $e(r) ? (e = !0,
        Fo(t)) : e = !1,
        Nr(t, n),
        ly(t, r, s),
        yu(t, r, s, n),
        xu(null, t, r, !0, e, n);
    case 19:
        return gy(e, t, n);
    case 22:
        return fy(e, t, n)
    }
    throw Error(A(156, t.tag))
}
;
function Ry(e, t) {
    return ig(e, t)
}
function dS(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function st(e, t, n, r) {
    return new dS(e,t,n,r)
}
function nd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function fS(e) {
    if (typeof e == "function")
        return nd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Sc)
            return 11;
        if (e === Cc)
            return 14
    }
    return 2
}
function pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function yo(e, t, n, r, s, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        nd(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case lr:
            return $n(n.children, s, i, t);
        case xc:
            o = 8,
            s |= 8;
            break;
        case $l:
            return e = st(12, n, t, s | 2),
            e.elementType = $l,
            e.lanes = i,
            e;
        case Ul:
            return e = st(13, n, t, s),
            e.elementType = Ul,
            e.lanes = i,
            e;
        case zl:
            return e = st(19, n, t, s),
            e.elementType = zl,
            e.lanes = i,
            e;
        case Um:
            return Pa(n, s, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Bm:
                    o = 10;
                    break e;
                case $m:
                    o = 9;
                    break e;
                case Sc:
                    o = 11;
                    break e;
                case Cc:
                    o = 14;
                    break e;
                case Zt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(A(130, e == null ? e : typeof e, ""))
        }
    return t = st(o, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function $n(e, t, n, r) {
    return e = st(7, e, r, t),
    e.lanes = n,
    e
}
function Pa(e, t, n, r) {
    return e = st(22, e, r, t),
    e.elementType = Um,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function hl(e, t, n) {
    return e = st(6, e, null, t),
    e.lanes = n,
    e
}
function pl(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function hS(e, t, n, r, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ga(0),
    this.expirationTimes = Ga(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ga(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function rd(e, t, n, r, s, i, o, a, l) {
    return e = new hS(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = st(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Bc(i),
    e
}
function pS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ar,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function My(e) {
    if (!e)
        return yn;
    e = e._reactInternals;
    e: {
        if (Qn(e) !== e || e.tag !== 1)
            throw Error(A(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if ($e(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if ($e(n))
            return Mg(e, n, t)
    }
    return t
}
function Iy(e, t, n, r, s, i, o, a, l) {
    return e = rd(n, r, !0, e, s, i, o, a, l),
    e.context = My(null),
    n = e.current,
    r = Ie(),
    s = hn(n),
    i = $t(r, s),
    i.callback = t ?? null,
    dn(n, i, s),
    e.current.lanes = s,
    pi(e, s, r),
    Ue(e, r),
    e
}
function ka(e, t, n, r) {
    var s = t.current
      , i = Ie()
      , o = hn(s);
    return n = My(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = $t(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = dn(s, t, o),
    e !== null && (xt(e, s, o, i),
    co(e, s, o)),
    o
}
function Qo(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Ah(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function sd(e, t) {
    Ah(e, t),
    (e = e.alternate) && Ah(e, t)
}
function mS() {
    return null
}
var Ly = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function id(e) {
    this._internalRoot = e
}
Aa.prototype.render = id.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(A(409));
    ka(e, t, null, null)
}
;
Aa.prototype.unmount = id.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        qn(function() {
            ka(null, e, null, null)
        }),
        t[Ht] = null
    }
}
;
function Aa(e) {
    this._internalRoot = e
}
Aa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = fg();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++)
            ;
        tn.splice(n, 0, e),
        n === 0 && pg(e)
    }
}
;
function od(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Th() {}
function gS(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Qo(o);
                i.call(u)
            }
        }
        var o = Iy(t, r, e, 0, null, !1, !1, "", Th);
        return e._reactRootContainer = o,
        e[Ht] = o.current,
        Xs(e.nodeType === 8 ? e.parentNode : e),
        qn(),
        o
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Qo(l);
            a.call(u)
        }
    }
    var l = rd(e, 0, !1, null, null, !1, !1, "", Th);
    return e._reactRootContainer = l,
    e[Ht] = l.current,
    Xs(e.nodeType === 8 ? e.parentNode : e),
    qn(function() {
        ka(t, l, n, r)
    }),
    l
}
function ba(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = Qo(o);
                a.call(l)
            }
        }
        ka(t, o, e, s)
    } else
        o = gS(n, t, e, s, r);
    return Qo(o)
}
cg = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = ms(t.pendingLanes);
            n !== 0 && (Pc(t, n | 1),
            Ue(t, oe()),
            !($ & 6) && (Ur = oe() + 500,
            Cn()))
        }
        break;
    case 13:
        qn(function() {
            var r = Kt(e, 1);
            if (r !== null) {
                var s = Ie();
                xt(r, e, 1, s)
            }
        }),
        sd(e, 1)
    }
}
;
kc = function(e) {
    if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
            var n = Ie();
            xt(t, e, 134217728, n)
        }
        sd(e, 134217728)
    }
}
;
dg = function(e) {
    if (e.tag === 13) {
        var t = hn(e)
          , n = Kt(e, t);
        if (n !== null) {
            var r = Ie();
            xt(n, e, t, r)
        }
        sd(e, t)
    }
}
;
fg = function() {
    return z
}
;
hg = function(e, t) {
    var n = z;
    try {
        return z = e,
        t()
    } finally {
        z = n
    }
}
;
Zl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Kl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var s = wa(r);
                    if (!s)
                        throw Error(A(90));
                    Wm(r),
                    Kl(r, s)
                }
            }
        }
        break;
    case "textarea":
        Km(e, n);
        break;
    case "select":
        t = n.value,
        t != null && kr(e, !!n.multiple, t, !1)
    }
}
;
Zm = Zc;
eg = qn;
var yS = {
    usingClientEntryPoint: !1,
    Events: [gi, fr, wa, Qm, Jm, Zc]
}
  , ds = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , vS = {
    bundleType: ds.bundleType,
    version: ds.version,
    rendererPackageName: ds.rendererPackageName,
    rendererConfig: ds.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = rg(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ds.findFiberByHostInstance || mS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xi.isDisabled && Xi.supportsFiber)
        try {
            ma = Xi.inject(vS),
            Nt = Xi
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yS;
Je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!od(t))
        throw Error(A(200));
    return pS(e, t, null, n)
}
;
Je.createRoot = function(e, t) {
    if (!od(e))
        throw Error(A(299));
    var n = !1
      , r = ""
      , s = Ly;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = rd(e, 1, !1, null, null, n, !1, r, s),
    e[Ht] = t.current,
    Xs(e.nodeType === 8 ? e.parentNode : e),
    new id(t)
}
;
Je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","),
        Error(A(268, e)));
    return e = rg(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Je.flushSync = function(e) {
    return qn(e)
}
;
Je.hydrate = function(e, t, n) {
    if (!Ta(t))
        throw Error(A(200));
    return ba(null, e, t, !0, n)
}
;
Je.hydrateRoot = function(e, t, n) {
    if (!od(e))
        throw Error(A(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , i = ""
      , o = Ly;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Iy(t, null, e, 1, n ?? null, s, !1, i, o),
    e[Ht] = t.current,
    Xs(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            s = n._getVersion,
            s = s(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new Aa(t)
}
;
Je.render = function(e, t, n) {
    if (!Ta(t))
        throw Error(A(200));
    return ba(null, e, t, !1, n)
}
;
Je.unmountComponentAtNode = function(e) {
    if (!Ta(e))
        throw Error(A(40));
    return e._reactRootContainer ? (qn(function() {
        ba(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ht] = null
        })
    }),
    !0) : !1
}
;
Je.unstable_batchedUpdates = Zc;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ta(n))
        throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(A(38));
    return ba(e, t, n, !1, r)
}
;
Je.version = "18.3.1-next-f1338f8080-20240426";
function Oy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oy)
        } catch (e) {
            console.error(e)
        }
}
Oy(),
Om.exports = Je;
var wS = Om.exports, Dy, bh = wS;
Dy = bh.createRoot,
bh.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function si() {
    return si = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    si.apply(this, arguments)
}
var on;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(on || (on = {}));
const Nh = "popstate";
function xS(e) {
    e === void 0 && (e = {});
    function t(r, s) {
        let {pathname: i, search: o, hash: a} = r.location;
        return Ru("", {
            pathname: i,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function n(r, s) {
        return typeof s == "string" ? s : Jo(s)
    }
    return CS(t, n, null, e)
}
function le(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Fy(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function SS() {
    return Math.random().toString(36).substr(2, 8)
}
function jh(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ru(e, t, n, r) {
    return n === void 0 && (n = null),
    si({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Yr(t) : t, {
        state: n,
        key: t && t.key || r || SS()
    })
}
function Jo(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Yr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function CS(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: s=document.defaultView, v5Compat: i=!1} = r
      , o = s.history
      , a = on.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    o.replaceState(si({}, o.state, {
        idx: u
    }), ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function c() {
        a = on.Pop;
        let x = d()
          , m = x == null ? null : x - u;
        u = x,
        l && l({
            action: a,
            location: w.location,
            delta: m
        })
    }
    function h(x, m) {
        a = on.Push;
        let p = Ru(w.location, x, m);
        u = d() + 1;
        let g = jh(p, u)
          , S = w.createHref(p);
        try {
            o.pushState(g, "", S)
        } catch (_) {
            if (_ instanceof DOMException && _.name === "DataCloneError")
                throw _;
            s.location.assign(S)
        }
        i && l && l({
            action: a,
            location: w.location,
            delta: 1
        })
    }
    function y(x, m) {
        a = on.Replace;
        let p = Ru(w.location, x, m);
        u = d();
        let g = jh(p, u)
          , S = w.createHref(p);
        o.replaceState(g, "", S),
        i && l && l({
            action: a,
            location: w.location,
            delta: 0
        })
    }
    function v(x) {
        let m = s.location.origin !== "null" ? s.location.origin : s.location.href
          , p = typeof x == "string" ? x : Jo(x);
        return p = p.replace(/ $/, "%20"),
        le(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(s, o)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(Nh, c),
            l = x,
            () => {
                s.removeEventListener(Nh, c),
                l = null
            }
        },
        createHref(x) {
            return t(s, x)
        },
        createURL: v,
        encodeLocation(x) {
            let m = v(x);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: y,
        go(x) {
            return o.go(x)
        }
    };
    return w
}
var Rh;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Rh || (Rh = {}));
function _S(e, t, n) {
    return n === void 0 && (n = "/"),
    ES(e, t, n, !1)
}
function ES(e, t, n, r) {
    let s = typeof t == "string" ? Yr(t) : t
      , i = ad(s.pathname || "/", n);
    if (i == null)
        return null;
    let o = Vy(e);
    PS(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = OS(i);
        a = IS(o[l], u, r)
    }
    return a
}
function Vy(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let s = (i, o, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        l.relativePath.startsWith("/") && (le(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = mn([r, l.relativePath])
          , d = n.concat(l);
        i.children && i.children.length > 0 && (le(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Vy(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: RS(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            s(i, o);
        else
            for (let l of By(i.path))
                s(i, o, l)
    }
    ),
    t
}
function By(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , s = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return s ? [i, ""] : [i];
    let o = By(r.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? i : [i, l].join("/"))),
    s && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function PS(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : MS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const kS = /^:[\w-]+$/
  , AS = 3
  , TS = 2
  , bS = 1
  , NS = 10
  , jS = -2
  , Mh = e => e === "*";
function RS(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Mh) && (r += jS),
    t && (r += TS),
    n.filter(s => !Mh(s)).reduce( (s, i) => s + (kS.test(i) ? AS : i === "" ? bS : NS), r)
}
function MS(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function IS(e, t, n) {
    let {routesMeta: r} = e
      , s = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , c = Ih({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, d)
          , h = l.route;
        if (!c && u && n && !r[r.length - 1].route.index && (c = Ih({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !c)
            return null;
        Object.assign(s, c.params),
        o.push({
            params: s,
            pathname: mn([i, c.pathname]),
            pathnameBase: BS(mn([i, c.pathnameBase])),
            route: h
        }),
        c.pathnameBase !== "/" && (i = mn([i, c.pathnameBase]))
    }
    return o
}
function Ih(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = LS(e.path, e.caseSensitive, e.end)
      , s = t.match(n);
    if (!s)
        return null;
    let i = s[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: r.reduce( (u, d, c) => {
            let {paramName: h, isOptional: y} = d;
            if (h === "*") {
                let w = a[c] || "";
                o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[c];
            return y && !v ? u[h] = void 0 : u[h] = (v || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function LS(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Fy(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), r]
}
function OS(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Fy(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function ad(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function DS(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: s=""} = typeof e == "string" ? Yr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : FS(n, t) : t,
        search: $S(r),
        hash: US(s)
    }
}
function FS(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function ml(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function VS(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function $y(e, t) {
    let n = VS(e);
    return t ? n.map( (r, s) => s === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Uy(e, t, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof e == "string" ? s = Yr(e) : (s = si({}, e),
    le(!s.pathname || !s.pathname.includes("?"), ml("?", "pathname", "search", s)),
    le(!s.pathname || !s.pathname.includes("#"), ml("#", "pathname", "hash", s)),
    le(!s.search || !s.search.includes("#"), ml("#", "search", "hash", s)));
    let i = e === "" || s.pathname === "", o = i ? "/" : s.pathname, a;
    if (o == null)
        a = n;
    else {
        let c = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                c -= 1;
            s.pathname = h.join("/")
        }
        a = c >= 0 ? t[c] : "/"
    }
    let l = DS(s, a)
      , u = o && o !== "/" && o.endsWith("/")
      , d = (i || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"),
    l
}
const mn = e => e.join("/").replace(/\/\/+/g, "/")
  , BS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , $S = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , US = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function zS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const zy = ["post", "put", "patch", "delete"];
new Set(zy);
const WS = ["get", ...zy];
new Set(WS);
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ii() {
    return ii = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ii.apply(this, arguments)
}
const ld = C.createContext(null)
  , HS = C.createContext(null)
  , Jn = C.createContext(null)
  , Na = C.createContext(null)
  , _n = C.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Wy = C.createContext(null);
function KS(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    vi() || le(!1);
    let {basename: r, navigator: s} = C.useContext(Jn)
      , {hash: i, pathname: o, search: a} = Ky(e, {
        relative: n
    })
      , l = o;
    return r !== "/" && (l = o === "/" ? r : mn([r, o])),
    s.createHref({
        pathname: l,
        search: a,
        hash: i
    })
}
function vi() {
    return C.useContext(Na) != null
}
function Qr() {
    return vi() || le(!1),
    C.useContext(Na).location
}
function Hy(e) {
    C.useContext(Jn).static || C.useLayoutEffect(e)
}
function ud() {
    let {isDataRoute: e} = C.useContext(_n);
    return e ? oC() : qS()
}
function qS() {
    vi() || le(!1);
    let e = C.useContext(ld)
      , {basename: t, future: n, navigator: r} = C.useContext(Jn)
      , {matches: s} = C.useContext(_n)
      , {pathname: i} = Qr()
      , o = JSON.stringify($y(s, n.v7_relativeSplatPath))
      , a = C.useRef(!1);
    return Hy( () => {
        a.current = !0
    }
    ),
    C.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let c = Uy(u, JSON.parse(o), i, d.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : mn([t, c.pathname])),
        (d.replace ? r.replace : r.push)(c, d.state, d)
    }, [t, r, o, i, e])
}
function GS() {
    let {matches: e} = C.useContext(_n)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function Ky(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = C.useContext(Jn)
      , {matches: s} = C.useContext(_n)
      , {pathname: i} = Qr()
      , o = JSON.stringify($y(s, r.v7_relativeSplatPath));
    return C.useMemo( () => Uy(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}
function XS(e, t) {
    return YS(e, t)
}
function YS(e, t, n, r) {
    vi() || le(!1);
    let {navigator: s} = C.useContext(Jn)
      , {matches: i} = C.useContext(_n)
      , o = i[i.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = Qr(), d;
    if (t) {
        var c;
        let x = typeof t == "string" ? Yr(t) : t;
        l === "/" || (c = x.pathname) != null && c.startsWith(l) || le(!1),
        d = x
    } else
        d = u;
    let h = d.pathname || "/"
      , y = h;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        y = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let v = _S(e, {
        pathname: y
    })
      , w = tC(v && v.map(x => Object.assign({}, x, {
        params: Object.assign({}, a, x.params),
        pathname: mn([l, s.encodeLocation ? s.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? l : mn([l, s.encodeLocation ? s.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), i, n, r);
    return t && w ? C.createElement(Na.Provider, {
        value: {
            location: ii({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: on.Pop
        }
    }, w) : w
}
function QS() {
    let e = iC()
      , t = zS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? C.createElement("pre", {
        style: s
    }, n) : null, null)
}
const JS = C.createElement(QS, null);
class ZS extends C.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? C.createElement(_n.Provider, {
            value: this.props.routeContext
        }, C.createElement(Wy.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function eC(e) {
    let {routeContext: t, match: n, children: r} = e
      , s = C.useContext(ld);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(_n.Provider, {
        value: t
    }, r)
}
function tC(e, t, n, r) {
    var s;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (s = n) == null ? void 0 : s.errors;
    if (a != null) {
        let d = o.findIndex(c => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0);
        d >= 0 || le(!1),
        o = o.slice(0, Math.min(o.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let c = o[d];
            if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
            c.route.id) {
                let {loaderData: h, errors: y} = n
                  , v = c.route.loader && h[c.route.id] === void 0 && (!y || y[c.route.id] === void 0);
                if (c.route.lazy || v) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (d, c, h) => {
        let y, v = !1, w = null, x = null;
        n && (y = a && c.route.id ? a[c.route.id] : void 0,
        w = c.route.errorElement || JS,
        l && (u < 0 && h === 0 ? (v = !0,
        x = null) : u === h && (v = !0,
        x = c.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, h + 1))
          , p = () => {
            let g;
            return y ? g = w : v ? g = x : c.route.Component ? g = C.createElement(c.route.Component, null) : c.route.element ? g = c.route.element : g = d,
            C.createElement(eC, {
                match: c,
                routeContext: {
                    outlet: d,
                    matches: m,
                    isDataRoute: n != null
                },
                children: g
            })
        }
        ;
        return n && (c.route.ErrorBoundary || c.route.errorElement || h === 0) ? C.createElement(ZS, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: y,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var qy = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(qy || {})
  , Zo = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Zo || {});
function nC(e) {
    let t = C.useContext(ld);
    return t || le(!1),
    t
}
function rC(e) {
    let t = C.useContext(HS);
    return t || le(!1),
    t
}
function sC(e) {
    let t = C.useContext(_n);
    return t || le(!1),
    t
}
function Gy(e) {
    let t = sC()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || le(!1),
    n.route.id
}
function iC() {
    var e;
    let t = C.useContext(Wy)
      , n = rC(Zo.UseRouteError)
      , r = Gy(Zo.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function oC() {
    let {router: e} = nC(qy.UseNavigateStable)
      , t = Gy(Zo.UseNavigateStable)
      , n = C.useRef(!1);
    return Hy( () => {
        n.current = !0
    }
    ),
    C.useCallback(function(s, i) {
        i === void 0 && (i = {}),
        n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, ii({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const Lh = {};
function aC(e, t) {
    Lh[t] || (Lh[t] = !0,
    console.warn(t))
}
const Oh = (e, t, n) => aC(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
function lC(e, t) {
    (e == null ? void 0 : e.v7_startTransition) === void 0 && Oh("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"),
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && !t && Oh("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
}
function jn(e) {
    le(!1)
}
function uC(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: s=on.Pop, navigator: i, static: o=!1, future: a} = e;
    vi() && le(!1);
    let l = t.replace(/^\/*/, "/")
      , u = C.useMemo( () => ({
        basename: l,
        navigator: i,
        static: o,
        future: ii({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, o]);
    typeof r == "string" && (r = Yr(r));
    let {pathname: d="/", search: c="", hash: h="", state: y=null, key: v="default"} = r
      , w = C.useMemo( () => {
        let x = ad(d, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: c,
                hash: h,
                state: y,
                key: v
            },
            navigationType: s
        }
    }
    , [l, d, c, h, y, v, s]);
    return w == null ? null : C.createElement(Jn.Provider, {
        value: u
    }, C.createElement(Na.Provider, {
        children: n,
        value: w
    }))
}
function cC(e) {
    let {children: t, location: n} = e;
    return XS(Mu(t), n)
}
new Promise( () => {}
);
function Mu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return C.Children.forEach(e, (r, s) => {
        if (!C.isValidElement(r))
            return;
        let i = [...t, s];
        if (r.type === C.Fragment) {
            n.push.apply(n, Mu(r.props.children, i));
            return
        }
        r.type !== jn && le(!1),
        !r.props.index || !r.props.children || le(!1);
        let o = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Mu(r.props.children, i)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Iu() {
    return Iu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Iu.apply(this, arguments)
}
function dC(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), s, i;
    for (i = 0; i < r.length; i++)
        s = r[i],
        !(t.indexOf(s) >= 0) && (n[s] = e[s]);
    return n
}
function fC(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function hC(e, t) {
    return e.button === 0 && (!t || t === "_self") && !fC(e)
}
const pC = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , mC = "6";
try {
    window.__reactRouterVersion = mC
} catch {}
const gC = "startTransition"
  , Dh = lx[gC];
function yC(e) {
    let {basename: t, children: n, future: r, window: s} = e
      , i = C.useRef();
    i.current == null && (i.current = xS({
        window: s,
        v5Compat: !0
    }));
    let o = i.current
      , [a,l] = C.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = r || {}
      , d = C.useCallback(c => {
        u && Dh ? Dh( () => l(c)) : l(c)
    }
    , [l, u]);
    return C.useLayoutEffect( () => o.listen(d), [o, d]),
    C.useEffect( () => lC(r), [r]),
    C.createElement(uC, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const vC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , wC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , It = C.forwardRef(function(t, n) {
    let {onClick: r, relative: s, reloadDocument: i, replace: o, state: a, target: l, to: u, preventScrollReset: d, viewTransition: c} = t, h = dC(t, pC), {basename: y} = C.useContext(Jn), v, w = !1;
    if (typeof u == "string" && wC.test(u) && (v = u,
    vC))
        try {
            let g = new URL(window.location.href)
              , S = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u)
              , _ = ad(S.pathname, y);
            S.origin === g.origin && _ != null ? u = _ + S.search + S.hash : w = !0
        } catch {}
    let x = KS(u, {
        relative: s
    })
      , m = xC(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: s,
        viewTransition: c
    });
    function p(g) {
        r && r(g),
        g.defaultPrevented || m(g)
    }
    return C.createElement("a", Iu({}, h, {
        href: v || x,
        onClick: w || i ? r : p,
        ref: n,
        target: l
    }))
});
var Fh;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Fh || (Fh = {}));
var Vh;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Vh || (Vh = {}));
function xC(e, t) {
    let {target: n, replace: r, state: s, preventScrollReset: i, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , l = ud()
      , u = Qr()
      , d = Ky(e, {
        relative: o
    });
    return C.useCallback(c => {
        if (hC(c, n)) {
            c.preventDefault();
            let h = r !== void 0 ? r : Jo(u) === Jo(d);
            l(e, {
                replace: h,
                state: s,
                preventScrollReset: i,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [u, l, d, r, s, n, e, i, o, a])
}
function SC(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)),
        t.get(s))
    })
}
function ja(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Lu = e => Array.isArray(e);
function Xy(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function oi(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Bh(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function cd(e, t, n, r) {
    if (typeof t == "function") {
        const [s,i] = Bh(r);
        t = t(n !== void 0 ? n : e.custom, s, i)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [s,i] = Bh(r);
        t = t(n !== void 0 ? n : e.custom, s, i)
    }
    return t
}
function Ra(e, t, n) {
    const r = e.getProps();
    return cd(r, t, n !== void 0 ? n : r.custom, e)
}
const dd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , fd = ["initial", ...dd]
  , wi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Zn = new Set(wi)
  , Ut = e => e * 1e3
  , zt = e => e / 1e3
  , CC = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , _C = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , EC = {
    type: "keyframes",
    duration: .8
}
  , PC = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , kC = (e, {keyframes: t}) => t.length > 2 ? EC : Zn.has(e) ? e.startsWith("scale") ? _C(t[1]) : CC : PC;
function hd(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const AC = {
    skipAnimations: !1,
    useManualTiming: !1
}
  , TC = e => e !== null;
function Ma(e, {repeat: t, repeatType: n="loop"}, r) {
    const s = e.filter(TC)
      , i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !i || r === void 0 ? s[i] : r
}
const Xe = e => e;
let Ou = Xe;
function bC(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , s = !1;
    const i = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function a(u) {
        i.has(u) && (l.schedule(u),
        e()),
        u(o)
    }
    const l = {
        schedule: (u, d=!1, c=!1) => {
            const y = c && r ? t : n;
            return d && i.add(u),
            y.has(u) || y.add(u),
            u
        }
        ,
        cancel: u => {
            n.delete(u),
            i.delete(u)
        }
        ,
        process: u => {
            if (o = u,
            r) {
                s = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            t.forEach(a),
            t.clear(),
            r = !1,
            s && (s = !1,
            l.process(u))
        }
    };
    return l
}
const Yi = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , NC = 40;
function Yy(e, t) {
    let n = !1
      , r = !0;
    const s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , i = () => n = !0
      , o = Yi.reduce( (m, p) => (m[p] = bC(i),
    m), {})
      , {read: a, resolveKeyframes: l, update: u, preRender: d, render: c, postRender: h} = o
      , y = () => {
        const m = performance.now();
        n = !1,
        s.delta = r ? 1e3 / 60 : Math.max(Math.min(m - s.timestamp, NC), 1),
        s.timestamp = m,
        s.isProcessing = !0,
        a.process(s),
        l.process(s),
        u.process(s),
        d.process(s),
        c.process(s),
        h.process(s),
        s.isProcessing = !1,
        n && t && (r = !1,
        e(y))
    }
      , v = () => {
        n = !0,
        r = !0,
        s.isProcessing || e(y)
    }
    ;
    return {
        schedule: Yi.reduce( (m, p) => {
            const g = o[p];
            return m[p] = (S, _=!1, E=!1) => (n || v(),
            g.schedule(S, _, E)),
            m
        }
        , {}),
        cancel: m => {
            for (let p = 0; p < Yi.length; p++)
                o[Yi[p]].cancel(m)
        }
        ,
        state: s,
        steps: o
    }
}
const {schedule: X, cancel: vn, state: xe, steps: gl} = Yy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Xe, !0)
  , Qy = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , jC = 1e-7
  , RC = 12;
function MC(e, t, n, r, s) {
    let i, o, a = 0;
    do
        o = t + (n - t) / 2,
        i = Qy(o, r, s) - e,
        i > 0 ? n = o : t = o;
    while (Math.abs(i) > jC && ++a < RC);
    return o
}
function xi(e, t, n, r) {
    if (e === t && n === r)
        return Xe;
    const s = i => MC(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : Qy(s(i), t, r)
}
const Jy = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Zy = e => t => 1 - e(1 - t)
  , e0 = xi(.33, 1.53, .69, .99)
  , pd = Zy(e0)
  , t0 = Jy(pd)
  , n0 = e => (e *= 2) < 1 ? .5 * pd(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , md = e => 1 - Math.sin(Math.acos(e))
  , r0 = Zy(md)
  , s0 = Jy(md)
  , i0 = e => /^0[^.\s]+$/u.test(e);
function IC(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || i0(e) : !0
}
const o0 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , a0 = e => t => typeof t == "string" && t.startsWith(e)
  , l0 = a0("--")
  , LC = a0("var(--")
  , gd = e => LC(e) ? OC.test(e.split("/*")[0].trim()) : !1
  , OC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , DC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function FC(e) {
    const t = DC.exec(e);
    if (!t)
        return [, ];
    const [,n,r,s] = t;
    return [`--${n ?? r}`, s]
}
function u0(e, t, n=1) {
    const [r,s] = FC(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const o = i.trim();
        return o0(o) ? parseFloat(o) : o
    }
    return gd(s) ? u0(s, t, n + 1) : s
}
const Gt = (e, t, n) => n > t ? t : n < e ? e : n
  , Jr = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , ai = {
    ...Jr,
    transform: e => Gt(0, 1, e)
}
  , Qi = {
    ...Jr,
    default: 1
}
  , Si = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Jt = Si("deg")
  , Rt = Si("%")
  , L = Si("px")
  , VC = Si("vh")
  , BC = Si("vw")
  , $h = {
    ...Rt,
    parse: e => Rt.parse(e) / 100,
    transform: e => Rt.transform(e * 100)
}
  , $C = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Uh = e => e === Jr || e === L
  , zh = (e, t) => parseFloat(e.split(", ")[t])
  , Wh = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const s = r.match(/^matrix3d\((.+)\)$/u);
    if (s)
        return zh(s[1], t);
    {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? zh(i[1], e) : 0
    }
}
  , UC = new Set(["x", "y", "z"])
  , zC = wi.filter(e => !UC.has(e));
function WC(e) {
    const t = [];
    return zC.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const zr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Wh(4, 13),
    y: Wh(5, 14)
};
zr.translateX = zr.x;
zr.translateY = zr.y;
const c0 = e => t => t.test(e)
  , HC = {
    test: e => e === "auto",
    parse: e => e
}
  , d0 = [Jr, L, Rt, Jt, BC, VC, HC]
  , Hh = e => d0.find(c0(e))
  , Un = new Set;
let Du = !1
  , Fu = !1;
function f0() {
    if (Fu) {
        const e = Array.from(Un).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const s = WC(r);
            s.length && (n.set(r, s),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const s = n.get(r);
            s && s.forEach( ([i,o]) => {
                var a;
                (a = r.getValue(i)) === null || a === void 0 || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Fu = !1,
    Du = !1,
    Un.forEach(e => e.complete()),
    Un.clear()
}
function h0() {
    Un.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Fu = !0)
    }
    )
}
function KC() {
    h0(),
    f0()
}
class yd {
    constructor(t, n, r, s, i, o=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = s,
        this.element = i,
        this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (Un.add(this),
        Du || (Du = !0,
        X.read(h0),
        X.resolveKeyframes(f0))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: s} = this;
        for (let i = 0; i < t.length; i++)
            if (t[i] === null)
                if (i === 0) {
                    const o = s == null ? void 0 : s.get()
                      , a = t[t.length - 1];
                    if (o !== void 0)
                        t[0] = o;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = a),
                    s && o === void 0 && s.set(t[0])
                } else
                    t[i] = t[i - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Un.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        Un.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Ls = e => Math.round(e * 1e5) / 1e5
  , vd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function qC(e) {
    return e == null
}
const GC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , wd = (e, t) => n => !!(typeof n == "string" && GC.test(n) && n.startsWith(e) || t && !qC(n) && Object.prototype.hasOwnProperty.call(n, t))
  , p0 = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [s,i,o,a] = r.match(vd);
    return {
        [e]: parseFloat(s),
        [t]: parseFloat(i),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , XC = e => Gt(0, 255, e)
  , yl = {
    ...Jr,
    transform: e => Math.round(XC(e))
}
  , Fn = {
    test: wd("rgb", "red"),
    parse: p0("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + yl.transform(e) + ", " + yl.transform(t) + ", " + yl.transform(n) + ", " + Ls(ai.transform(r)) + ")"
};
function YC(e) {
    let t = ""
      , n = ""
      , r = ""
      , s = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    s = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    s = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    s += s),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
const Vu = {
    test: wd("#"),
    parse: YC,
    transform: Fn.transform
}
  , wr = {
    test: wd("hsl", "hue"),
    parse: p0("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + Rt.transform(Ls(t)) + ", " + Rt.transform(Ls(n)) + ", " + Ls(ai.transform(r)) + ")"
}
  , Te = {
    test: e => Fn.test(e) || Vu.test(e) || wr.test(e),
    parse: e => Fn.test(e) ? Fn.parse(e) : wr.test(e) ? wr.parse(e) : Vu.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Fn.transform(e) : wr.transform(e)
}
  , QC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function JC(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(vd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(QC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const m0 = "number"
  , g0 = "color"
  , ZC = "var"
  , e_ = "var("
  , Kh = "${}"
  , t_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function li(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , s = [];
    let i = 0;
    const a = t.replace(t_, l => (Te.test(l) ? (r.color.push(i),
    s.push(g0),
    n.push(Te.parse(l))) : l.startsWith(e_) ? (r.var.push(i),
    s.push(ZC),
    n.push(l)) : (r.number.push(i),
    s.push(m0),
    n.push(parseFloat(l))),
    ++i,
    Kh)).split(Kh);
    return {
        values: n,
        split: a,
        indexes: r,
        types: s
    }
}
function y0(e) {
    return li(e).values
}
function v0(e) {
    const {split: t, types: n} = li(e)
      , r = t.length;
    return s => {
        let i = "";
        for (let o = 0; o < r; o++)
            if (i += t[o],
            s[o] !== void 0) {
                const a = n[o];
                a === m0 ? i += Ls(s[o]) : a === g0 ? i += Te.transform(s[o]) : i += s[o]
            }
        return i
    }
}
const n_ = e => typeof e == "number" ? 0 : e;
function r_(e) {
    const t = y0(e);
    return v0(e)(t.map(n_))
}
const wn = {
    test: JC,
    parse: y0,
    createTransformer: v0,
    getAnimatableNone: r_
}
  , s_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
function i_(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(vd) || [];
    if (!r)
        return e;
    const s = n.replace(r, "");
    let i = s_.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
    t + "(" + i + s + ")"
}
const o_ = /\b([a-z-]*)\(.*?\)/gu
  , Bu = {
    ...wn,
    getAnimatableNone: e => {
        const t = e.match(o_);
        return t ? t.map(i_).join(" ") : e
    }
}
  , a_ = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L
}
  , l_ = {
    rotate: Jt,
    rotateX: Jt,
    rotateY: Jt,
    rotateZ: Jt,
    scale: Qi,
    scaleX: Qi,
    scaleY: Qi,
    scaleZ: Qi,
    skew: Jt,
    skewX: Jt,
    skewY: Jt,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: ai,
    originX: $h,
    originY: $h,
    originZ: L
}
  , qh = {
    ...Jr,
    transform: Math.round
}
  , xd = {
    ...a_,
    ...l_,
    zIndex: qh,
    size: L,
    fillOpacity: ai,
    strokeOpacity: ai,
    numOctaves: qh
}
  , u_ = {
    ...xd,
    color: Te,
    backgroundColor: Te,
    outlineColor: Te,
    fill: Te,
    stroke: Te,
    borderColor: Te,
    borderTopColor: Te,
    borderRightColor: Te,
    borderBottomColor: Te,
    borderLeftColor: Te,
    filter: Bu,
    WebkitFilter: Bu
}
  , Sd = e => u_[e];
function w0(e, t) {
    let n = Sd(e);
    return n !== Bu && (n = wn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const c_ = new Set(["auto", "none", "0"]);
function d_(e, t, n) {
    let r = 0, s;
    for (; r < e.length && !s; ) {
        const i = e[r];
        typeof i == "string" && !c_.has(i) && li(i).values.length && (s = e[r]),
        r++
    }
    if (s && n)
        for (const i of t)
            e[i] = w0(n, s)
}
class x0 extends yd {
    constructor(t, n, r, s, i) {
        super(t, n, r, s, i, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(),
            gd(u))) {
                const d = u0(u, n.current);
                d !== void 0 && (t[l] = d),
                l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !$C.has(r) || t.length !== 2)
            return;
        const [s,i] = t
          , o = Hh(s)
          , a = Hh(i);
        if (o !== a)
            if (Uh(o) && Uh(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let s = 0; s < t.length; s++)
            IC(t[s]) && r.push(s);
        r.length && d_(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = zr[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const s = n[n.length - 1];
        s !== void 0 && t.getValue(r, s).jump(s, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: s} = this;
        if (!n || !n.current)
            return;
        const i = n.getValue(r);
        i && i.jump(this.measuredOrigin, !1);
        const o = s.length - 1
          , a = s[o];
        s[o] = zr[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([l,u]) => {
            n.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Cd(e) {
    return typeof e == "function"
}
let vo;
function f_() {
    vo = void 0
}
const Mt = {
    now: () => (vo === void 0 && Mt.set(xe.isProcessing || AC.useManualTiming ? xe.timestamp : performance.now()),
    vo),
    set: e => {
        vo = e,
        queueMicrotask(f_)
    }
}
  , Gh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (wn.test(e) || e === "0") && !e.startsWith("url("));
function h_(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function p_(e, t, n, r) {
    const s = e[0];
    if (s === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const i = e[e.length - 1]
      , o = Gh(s, t)
      , a = Gh(i, t);
    return !o || !a ? !1 : h_(e) || (n === "spring" || Cd(n)) && r
}
const m_ = 40;
class S0 {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: s=0, repeatDelay: i=0, repeatType: o="loop", ...a}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Mt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: s,
            repeatDelay: i,
            repeatType: o,
            ...a
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > m_ ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && KC(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = Mt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: s, velocity: i, delay: o, onComplete: a, onUpdate: l, isGenerator: u} = this.options;
        if (!u && !p_(t, r, s, i))
            if (o)
                this.options.duration = 0;
            else {
                l == null || l(Ma(t, this.options, n)),
                a == null || a(),
                this.resolveFinishedPromise();
                return
            }
        const d = this.initPlayback(t, n);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...d
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const Wr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , C0 = (e, t, n=10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++)
        r += e(Wr(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function _0(e, t) {
    return t ? e * (1e3 / t) : 0
}
const g_ = 5;
function E0(e, t, n) {
    const r = Math.max(t - g_, 0);
    return _0(n - e(r), t - r)
}
const ne = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , vl = .001;
function y_({duration: e=ne.duration, bounce: t=ne.bounce, velocity: n=ne.velocity, mass: r=ne.mass}) {
    let s, i, o = 1 - t;
    o = Gt(ne.minDamping, ne.maxDamping, o),
    e = Gt(ne.minDuration, ne.maxDuration, zt(e)),
    o < 1 ? (s = u => {
        const d = u * o
          , c = d * e
          , h = d - n
          , y = $u(u, o)
          , v = Math.exp(-c);
        return vl - h / y * v
    }
    ,
    i = u => {
        const c = u * o * e
          , h = c * n + n
          , y = Math.pow(o, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-c)
          , w = $u(Math.pow(u, 2), o);
        return (-s(u) + vl > 0 ? -1 : 1) * ((h - y) * v) / w
    }
    ) : (s = u => {
        const d = Math.exp(-u * e)
          , c = (u - n) * e + 1;
        return -vl + d * c
    }
    ,
    i = u => {
        const d = Math.exp(-u * e)
          , c = (n - u) * (e * e);
        return d * c
    }
    );
    const a = 5 / e
      , l = w_(s, i, a);
    if (e = Ut(e),
    isNaN(l))
        return {
            stiffness: ne.stiffness,
            damping: ne.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const v_ = 12;
function w_(e, t, n) {
    let r = n;
    for (let s = 1; s < v_; s++)
        r = r - e(r) / t(r);
    return r
}
function $u(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Uu = 2e4;
function P0(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Uu; )
        t += n,
        r = e.next(t);
    return t >= Uu ? 1 / 0 : t
}
const x_ = ["duration", "bounce"]
  , S_ = ["stiffness", "damping", "mass"];
function Xh(e, t) {
    return t.some(n => e[n] !== void 0)
}
function C_(e) {
    let t = {
        velocity: ne.velocity,
        stiffness: ne.stiffness,
        damping: ne.damping,
        mass: ne.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Xh(e, S_) && Xh(e, x_))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , s = r * r
              , i = 2 * Gt(.05, 1, 1 - e.bounce) * Math.sqrt(s);
            t = {
                ...t,
                mass: ne.mass,
                stiffness: s,
                damping: i
            }
        } else {
            const n = y_(e);
            t = {
                ...t,
                ...n,
                mass: ne.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function k0(e=ne.visualDuration, t=ne.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: s} = n;
    const i = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: u, mass: d, duration: c, velocity: h, isResolvedFromDuration: y} = C_({
        ...n,
        velocity: -zt(n.velocity || 0)
    })
      , v = h || 0
      , w = u / (2 * Math.sqrt(l * d))
      , x = o - i
      , m = zt(Math.sqrt(l / d))
      , p = Math.abs(x) < 5;
    r || (r = p ? ne.restSpeed.granular : ne.restSpeed.default),
    s || (s = p ? ne.restDelta.granular : ne.restDelta.default);
    let g;
    if (w < 1) {
        const _ = $u(m, w);
        g = E => {
            const P = Math.exp(-w * m * E);
            return o - P * ((v + w * m * x) / _ * Math.sin(_ * E) + x * Math.cos(_ * E))
        }
    } else if (w === 1)
        g = _ => o - Math.exp(-m * _) * (x + (v + m * x) * _);
    else {
        const _ = m * Math.sqrt(w * w - 1);
        g = E => {
            const P = Math.exp(-w * m * E)
              , k = Math.min(_ * E, 300);
            return o - P * ((v + w * m * x) * Math.sinh(k) + _ * x * Math.cosh(k)) / _
        }
    }
    const S = {
        calculatedDuration: y && c || null,
        next: _ => {
            const E = g(_);
            if (y)
                a.done = _ >= c;
            else {
                let P = 0;
                w < 1 && (P = _ === 0 ? Ut(v) : E0(g, _, E));
                const k = Math.abs(P) <= r
                  , N = Math.abs(o - E) <= s;
                a.done = k && N
            }
            return a.value = a.done ? o : E,
            a
        }
        ,
        toString: () => {
            const _ = Math.min(P0(S), Uu)
              , E = C0(P => S.next(_ * P).value, _, 30);
            return _ + "ms " + E
        }
    };
    return S
}
function Yh({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: s=10, bounceStiffness: i=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: d}) {
    const c = e[0]
      , h = {
        done: !1,
        value: c
    }
      , y = k => a !== void 0 && k < a || l !== void 0 && k > l
      , v = k => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
    let w = n * t;
    const x = c + w
      , m = o === void 0 ? x : o(x);
    m !== x && (w = m - c);
    const p = k => -w * Math.exp(-k / r)
      , g = k => m + p(k)
      , S = k => {
        const N = p(k)
          , T = g(k);
        h.done = Math.abs(N) <= u,
        h.value = h.done ? m : T
    }
    ;
    let _, E;
    const P = k => {
        y(h.value) && (_ = k,
        E = k0({
            keyframes: [h.value, v(h.value)],
            velocity: E0(g, k, h.value),
            damping: s,
            stiffness: i,
            restDelta: u,
            restSpeed: d
        }))
    }
    ;
    return P(0),
    {
        calculatedDuration: null,
        next: k => {
            let N = !1;
            return !E && _ === void 0 && (N = !0,
            S(k),
            P(k)),
            _ !== void 0 && k >= _ ? E.next(k - _) : (!N && S(k),
            h)
        }
    }
}
const __ = xi(.42, 0, 1, 1)
  , E_ = xi(0, 0, .58, 1)
  , A0 = xi(.42, 0, .58, 1)
  , P_ = e => Array.isArray(e) && typeof e[0] != "number"
  , _d = e => Array.isArray(e) && typeof e[0] == "number"
  , Qh = {
    linear: Xe,
    easeIn: __,
    easeInOut: A0,
    easeOut: E_,
    circIn: md,
    circInOut: s0,
    circOut: r0,
    backIn: pd,
    backInOut: t0,
    backOut: e0,
    anticipate: n0
}
  , Jh = e => {
    if (_d(e)) {
        Ou(e.length === 4);
        const [t,n,r,s] = e;
        return xi(t, n, r, s)
    } else if (typeof e == "string")
        return Ou(Qh[e] !== void 0),
        Qh[e];
    return e
}
  , k_ = (e, t) => n => t(e(n))
  , Ci = (...e) => e.reduce(k_)
  , Z = (e, t, n) => e + (t - e) * n;
function wl(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function A_({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let s = 0
      , i = 0
      , o = 0;
    if (!t)
        s = i = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        s = wl(l, a, e + 1 / 3),
        i = wl(l, a, e),
        o = wl(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(s * 255),
        green: Math.round(i * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function ea(e, t) {
    return n => n > 0 ? t : e
}
const xl = (e, t, n) => {
    const r = e * e
      , s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s)
}
  , T_ = [Vu, Fn, wr]
  , b_ = e => T_.find(t => t.test(e));
function Zh(e) {
    const t = b_(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === wr && (n = A_(n)),
    n
}
const ep = (e, t) => {
    const n = Zh(e)
      , r = Zh(t);
    if (!n || !r)
        return ea(e, t);
    const s = {
        ...n
    };
    return i => (s.red = xl(n.red, r.red, i),
    s.green = xl(n.green, r.green, i),
    s.blue = xl(n.blue, r.blue, i),
    s.alpha = Z(n.alpha, r.alpha, i),
    Fn.transform(s))
}
  , zu = new Set(["none", "hidden"]);
function N_(e, t) {
    return zu.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function j_(e, t) {
    return n => Z(e, t, n)
}
function Ed(e) {
    return typeof e == "number" ? j_ : typeof e == "string" ? gd(e) ? ea : Te.test(e) ? ep : I_ : Array.isArray(e) ? T0 : typeof e == "object" ? Te.test(e) ? ep : R_ : ea
}
function T0(e, t) {
    const n = [...e]
      , r = n.length
      , s = e.map( (i, o) => Ed(i)(i, t[o]));
    return i => {
        for (let o = 0; o < r; o++)
            n[o] = s[o](i);
        return n
    }
}
function R_(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const s in n)
        e[s] !== void 0 && t[s] !== void 0 && (r[s] = Ed(e[s])(e[s], t[s]));
    return s => {
        for (const i in r)
            n[i] = r[i](s);
        return n
    }
}
function M_(e, t) {
    var n;
    const r = []
      , s = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < t.values.length; i++) {
        const o = t.types[i]
          , a = e.indexes[o][s[o]]
          , l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[i] = l,
        s[o]++
    }
    return r
}
const I_ = (e, t) => {
    const n = wn.createTransformer(t)
      , r = li(e)
      , s = li(t);
    return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? zu.has(e) && !s.values.length || zu.has(t) && !r.values.length ? N_(e, t) : Ci(T0(M_(r, s), s.values), n) : ea(e, t)
}
;
function b0(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Z(e, t, n) : Ed(e)(e, t)
}
function L_(e, t, n) {
    const r = []
      , s = n || b0
      , i = e.length - 1;
    for (let o = 0; o < i; o++) {
        let a = s(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Xe : t;
            a = Ci(l, a)
        }
        r.push(a)
    }
    return r
}
function O_(e, t, {clamp: n=!0, ease: r, mixer: s}={}) {
    const i = e.length;
    if (Ou(i === t.length),
    i === 1)
        return () => t[0];
    if (i === 2 && e[0] === e[1])
        return () => t[1];
    e[0] > e[i - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const o = L_(t, r, s)
      , a = o.length
      , l = u => {
        let d = 0;
        if (a > 1)
            for (; d < e.length - 2 && !(u < e[d + 1]); d++)
                ;
        const c = Wr(e[d], e[d + 1], u);
        return o[d](c)
    }
    ;
    return n ? u => l(Gt(e[0], e[i - 1], u)) : l
}
function D_(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const s = Wr(0, t, r);
        e.push(Z(n, 1, s))
    }
}
function F_(e) {
    const t = [0];
    return D_(t, e.length - 1),
    t
}
function V_(e, t) {
    return e.map(n => n * t)
}
function B_(e, t) {
    return e.map( () => t || A0).splice(0, e.length - 1)
}
function ta({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const s = P_(r) ? r.map(Jh) : Jh(r)
      , i = {
        done: !1,
        value: t[0]
    }
      , o = V_(n && n.length === t.length ? n : F_(t), e)
      , a = O_(o, t, {
        ease: Array.isArray(s) ? s : B_(t, s)
    });
    return {
        calculatedDuration: e,
        next: l => (i.value = a(l),
        i.done = l >= e,
        i)
    }
}
const $_ = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => X.update(t, !0),
        stop: () => vn(t),
        now: () => xe.isProcessing ? xe.timestamp : Mt.now()
    }
}
  , U_ = {
    decay: Yh,
    inertia: Yh,
    tween: ta,
    keyframes: ta,
    spring: k0
}
  , z_ = e => e / 100;
class Pd extends S0 {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: l} = this.options;
            l && l()
        }
        ;
        const {name: n, motionValue: r, element: s, keyframes: i} = this.options
          , o = (s == null ? void 0 : s.KeyframeResolver) || yd
          , a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new o(i,a,n,r,s),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: s=0, repeatType: i, velocity: o=0} = this.options
          , a = Cd(n) ? n : U_[n] || ta;
        let l, u;
        a !== ta && typeof t[0] != "number" && (l = Ci(z_, b0(t[0], t[1])),
        t = [0, 100]);
        const d = a({
            ...this.options,
            keyframes: t
        });
        i === "mirror" && (u = a({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })),
        d.calculatedDuration === null && (d.calculatedDuration = P0(d));
        const {calculatedDuration: c} = d
          , h = c + s
          , y = h * (r + 1) - s;
        return {
            generator: d,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: c,
            resolvedDuration: h,
            totalDuration: y
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: k} = this.options;
            return {
                done: !0,
                value: k[k.length - 1]
            }
        }
        const {finalKeyframe: s, generator: i, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: d, resolvedDuration: c} = r;
        if (this.startTime === null)
            return i.next(0);
        const {delay: h, repeat: y, repeatType: v, repeatDelay: w, onUpdate: x} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1)
          , p = this.speed >= 0 ? m < 0 : m > d;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let g = this.currentTime
          , S = i;
        if (y) {
            const k = Math.min(this.currentTime, d) / c;
            let N = Math.floor(k)
              , T = k % 1;
            !T && k >= 1 && (T = 1),
            T === 1 && N--,
            N = Math.min(N, y + 1),
            !!(N % 2) && (v === "reverse" ? (T = 1 - T,
            w && (T -= w / c)) : v === "mirror" && (S = o)),
            g = Gt(0, 1, T) * c
        }
        const _ = p ? {
            done: !1,
            value: l[0]
        } : S.next(g);
        a && (_.value = a(_.value));
        let {done: E} = _;
        !p && u !== null && (E = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return P && s !== void 0 && (_.value = Ma(l, this.options, s)),
        x && x(_.value),
        P && this.finish(),
        _
    }
    get duration() {
        const {resolved: t} = this;
        return t ? zt(t.calculatedDuration) : 0
    }
    get time() {
        return zt(this.currentTime)
    }
    set time(t) {
        t = Ut(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = zt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=$_, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(i => this.tick(i))),
        n && n();
        const s = this.driver.now();
        this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const W_ = new Set(["opacity", "clipPath", "filter", "transform"]);
function kd(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const H_ = {
    linearEasing: void 0
};
function K_(e, t) {
    const n = kd(e);
    return () => {
        var r;
        return (r = H_[t]) !== null && r !== void 0 ? r : n()
    }
}
const na = K_( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing");
function N0(e) {
    return !!(typeof e == "function" && na() || !e || typeof e == "string" && (e in Wu || na()) || _d(e) || Array.isArray(e) && e.every(N0))
}
const ys = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Wu = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ys([0, .65, .55, 1]),
    circOut: ys([.55, 0, 1, .45]),
    backIn: ys([.31, .01, .66, -.59]),
    backOut: ys([.33, 1.53, .69, .99])
};
function j0(e, t) {
    if (e)
        return typeof e == "function" && na() ? C0(e, t) : _d(e) ? ys(e) : Array.isArray(e) ? e.map(n => j0(n, t) || Wu.easeOut) : Wu[e]
}
function q_(e, t, n, {delay: r=0, duration: s=300, repeat: i=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const d = j0(a, s);
    return Array.isArray(d) && (u.easing = d),
    e.animate(u, {
        delay: r,
        duration: s,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: i + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
function tp(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const G_ = kd( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , ra = 10
  , X_ = 2e4;
function Y_(e) {
    return Cd(e.type) || e.type === "spring" || !N0(e.ease)
}
function Q_(e, t) {
    const n = new Pd({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const s = [];
    let i = 0;
    for (; !r.done && i < X_; )
        r = n.sample(i),
        s.push(r.value),
        i += ra;
    return {
        times: void 0,
        keyframes: s,
        duration: i - ra,
        ease: "linear"
    }
}
const R0 = {
    anticipate: n0,
    backInOut: t0,
    circInOut: s0
};
function J_(e) {
    return e in R0
}
class np extends S0 {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: s, keyframes: i} = this.options;
        this.resolver = new x0(i, (o, a) => this.onKeyframesResolved(o, a),n,r,s),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {duration: s=300, times: i, ease: o, type: a, motionValue: l, name: u, startTime: d} = this.options;
        if (!(!((r = l.owner) === null || r === void 0) && r.current))
            return !1;
        if (typeof o == "string" && na() && J_(o) && (o = R0[o]),
        Y_(this.options)) {
            const {onComplete: h, onUpdate: y, motionValue: v, element: w, ...x} = this.options
              , m = Q_(t, x);
            t = m.keyframes,
            t.length === 1 && (t[1] = t[0]),
            s = m.duration,
            i = m.times,
            o = m.ease,
            a = "keyframes"
        }
        const c = q_(l.owner.current, u, t, {
            ...this.options,
            duration: s,
            times: i,
            ease: o
        });
        return c.startTime = d ?? this.calcStartTime(),
        this.pendingTimeline ? (tp(c, this.pendingTimeline),
        this.pendingTimeline = void 0) : c.onfinish = () => {
            const {onComplete: h} = this.options;
            l.set(Ma(t, this.options, n)),
            h && h(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: c,
            duration: s,
            times: i,
            type: a,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return zt(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return zt(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = Ut(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return Xe;
            const {animation: r} = n;
            tp(r, t)
        }
        return Xe
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: s, type: i, ease: o, times: a} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: u, onUpdate: d, onComplete: c, element: h, ...y} = this.options
              , v = new Pd({
                ...y,
                keyframes: r,
                duration: s,
                type: i,
                ease: o,
                times: a,
                isGenerator: !0
            })
              , w = Ut(this.time);
            u.setWithVelocity(v.sample(w - ra).value, v.sample(w).value, ra)
        }
        const {onStop: l} = this.options;
        l && l(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: s, repeatType: i, damping: o, type: a} = t;
        return G_() && r && W_.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !s && i !== "mirror" && o !== 0 && a !== "inertia"
    }
}
const Z_ = kd( () => window.ScrollTimeline !== void 0);
class e2 {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(s => Z_() && s.attachTimeline ? s.attachTimeline(t) : n(s));
        return () => {
            r.forEach( (s, i) => {
                s && s(),
                this.animations[i].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
function t2({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: i, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...d}) {
    return !!Object.keys(d).length
}
const Ad = (e, t, n, r={}, s, i) => o => {
    const a = hd(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - Ut(l);
    let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: h => {
            t.set(h),
            a.onUpdate && a.onUpdate(h)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: i ? void 0 : s
    };
    t2(a) || (d = {
        ...d,
        ...kC(e, d)
    }),
    d.duration && (d.duration = Ut(d.duration)),
    d.repeatDelay && (d.repeatDelay = Ut(d.repeatDelay)),
    d.from !== void 0 && (d.keyframes[0] = d.from);
    let c = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0,
    d.delay === 0 && (c = !0)),
    c && !i && t.get() !== void 0) {
        const h = Ma(d.keyframes, a);
        if (h !== void 0)
            return X.update( () => {
                d.onUpdate(h),
                d.onComplete()
            }
            ),
            new e2([])
    }
    return !i && np.supports(d) ? new np(d) : new Pd(d)
}
  , n2 = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , r2 = e => Lu(e) ? e[e.length - 1] || 0 : e;
function Td(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function bd(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Nd {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Td(this.subscriptions, t),
        () => bd(this.subscriptions, t)
    }
    notify(t, n, r) {
        const s = this.subscriptions.length;
        if (s)
            if (s === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < s; i++) {
                    const o = this.subscriptions[i];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const rp = 30
  , s2 = e => !isNaN(parseFloat(e));
class i2 {
    constructor(t, n={}) {
        this.version = "11.15.0",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, s=!0) => {
            const i = Mt.now();
            this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            s && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = Mt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = s2(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Nd);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            X.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Mt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > rp)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, rp);
        return _0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ui(e, t) {
    return new i2(e,t)
}
function o2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ui(n))
}
function a2(e, t) {
    const n = Ra(e, t);
    let {transitionEnd: r={}, transition: s={}, ...i} = n || {};
    i = {
        ...i,
        ...r
    };
    for (const o in i) {
        const a = r2(i[o]);
        o2(e, o, a)
    }
}
const jd = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , l2 = "framerAppearId"
  , M0 = "data-" + jd(l2);
function I0(e) {
    return e.props[M0]
}
const Ne = e => !!(e && e.getVelocity);
function u2(e) {
    return !!(Ne(e) && e.add)
}
function Hu(e, t) {
    const n = e.getValue("willChange");
    if (u2(n))
        return n.add(t)
}
function c2({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function L0(e, t, {delay: n=0, transitionOverride: r, type: s}={}) {
    var i;
    let {transition: o=e.getDefaultTransition(), transitionEnd: a, ...l} = t;
    r && (o = r);
    const u = []
      , d = s && e.animationState && e.animationState.getState()[s];
    for (const c in l) {
        const h = e.getValue(c, (i = e.latestValues[c]) !== null && i !== void 0 ? i : null)
          , y = l[c];
        if (y === void 0 || d && c2(d, c))
            continue;
        const v = {
            delay: n,
            ...hd(o || {}, c)
        };
        let w = !1;
        if (window.MotionHandoffAnimation) {
            const m = I0(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, c, X);
                p !== null && (v.startTime = p,
                w = !0)
            }
        }
        Hu(e, c),
        h.start(Ad(c, h, y, e.shouldReduceMotion && Zn.has(c) ? {
            type: !1
        } : v, e, w));
        const x = h.animation;
        x && u.push(x)
    }
    return a && Promise.all(u).then( () => {
        X.update( () => {
            a && a2(e, a)
        }
        )
    }
    ),
    u
}
function Ku(e, t, n={}) {
    var r;
    const s = Ra(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: i=e.getDefaultTransition() || {}} = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(L0(e, s, n)) : () => Promise.resolve()
      , a = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: d=0, staggerChildren: c, staggerDirection: h} = i;
        return d2(e, t, d + u, c, h, n)
    }
    : () => Promise.resolve()
      , {when: l} = i;
    if (l) {
        const [u,d] = l === "beforeChildren" ? [o, a] : [a, o];
        return u().then( () => d())
    } else
        return Promise.all([o(), a(n.delay)])
}
function d2(e, t, n=0, r=0, s=1, i) {
    const o = []
      , a = (e.variantChildren.size - 1) * r
      , l = s === 1 ? (u=0) => u * r : (u=0) => a - u * r;
    return Array.from(e.variantChildren).sort(f2).forEach( (u, d) => {
        u.notify("AnimationStart", t),
        o.push(Ku(u, t, {
            ...i,
            delay: n + l(d)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function f2(e, t) {
    return e.sortNodePosition(t)
}
function h2(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const s = t.map(i => Ku(e, i, n));
        r = Promise.all(s)
    } else if (typeof t == "string")
        r = Ku(e, t, n);
    else {
        const s = typeof t == "function" ? Ra(e, t, n.custom) : t;
        r = Promise.all(L0(e, s, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const p2 = fd.length;
function O0(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? O0(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < p2; n++) {
        const r = fd[n]
          , s = e.props[r];
        (oi(s) || s === !1) && (t[r] = s)
    }
    return t
}
const m2 = [...dd].reverse()
  , g2 = dd.length;
function y2(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => h2(e, n, r)))
}
function v2(e) {
    let t = y2(e)
      , n = sp()
      , r = !0;
    const s = l => (u, d) => {
        var c;
        const h = Ra(e, d, l === "exit" ? (c = e.presenceContext) === null || c === void 0 ? void 0 : c.custom : void 0);
        if (h) {
            const {transition: y, transitionEnd: v, ...w} = h;
            u = {
                ...u,
                ...w,
                ...v
            }
        }
        return u
    }
    ;
    function i(l) {
        t = l(e)
    }
    function o(l) {
        const {props: u} = e
          , d = O0(e.parent) || {}
          , c = []
          , h = new Set;
        let y = {}
          , v = 1 / 0;
        for (let x = 0; x < g2; x++) {
            const m = m2[x]
              , p = n[m]
              , g = u[m] !== void 0 ? u[m] : d[m]
              , S = oi(g)
              , _ = m === l ? p.isActive : null;
            _ === !1 && (v = x);
            let E = g === d[m] && g !== u[m] && S;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
            p.protectedKeys = {
                ...y
            },
            !p.isActive && _ === null || !g && !p.prevProp || ja(g) || typeof g == "boolean")
                continue;
            const P = w2(p.prevProp, g);
            let k = P || m === l && p.isActive && !E && S || x > v && S
              , N = !1;
            const T = Array.isArray(g) ? g : [g];
            let I = T.reduce(s(m), {});
            _ === !1 && (I = {});
            const {prevResolvedValues: Re={}} = p
              , lt = {
                ...Re,
                ...I
            }
              , Pn = ue => {
                k = !0,
                h.has(ue) && (N = !0,
                h.delete(ue)),
                p.needsAnimating[ue] = !0;
                const b = e.getValue(ue);
                b && (b.liveStyle = !1)
            }
            ;
            for (const ue in lt) {
                const b = I[ue]
                  , O = Re[ue];
                if (y.hasOwnProperty(ue))
                    continue;
                let D = !1;
                Lu(b) && Lu(O) ? D = !Xy(b, O) : D = b !== O,
                D ? b != null ? Pn(ue) : h.add(ue) : b !== void 0 && h.has(ue) ? Pn(ue) : p.protectedKeys[ue] = !0
            }
            p.prevProp = g,
            p.prevResolvedValues = I,
            p.isActive && (y = {
                ...y,
                ...I
            }),
            r && e.blockInitialAnimation && (k = !1),
            k && (!(E && P) || N) && c.push(...T.map(ue => ({
                animation: ue,
                options: {
                    type: m
                }
            })))
        }
        if (h.size) {
            const x = {};
            h.forEach(m => {
                const p = e.getBaseTarget(m)
                  , g = e.getValue(m);
                g && (g.liveStyle = !0),
                x[m] = p ?? null
            }
            ),
            c.push({
                animation: x
            })
        }
        let w = !!c.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (w = !1),
        r = !1,
        w ? t(c) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var y;
            return (y = h.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = o(l);
        for (const h in n)
            n[h].protectedKeys = {};
        return c
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n,
        reset: () => {
            n = sp(),
            r = !0
        }
    }
}
function w2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Xy(t, e) : !1
}
function Tn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function sp() {
    return {
        animate: Tn(!0),
        whileInView: Tn(),
        whileHover: Tn(),
        whileTap: Tn(),
        whileDrag: Tn(),
        whileFocus: Tn(),
        exit: Tn()
    }
}
class En {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class x2 extends En {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = v2(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        ja(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let S2 = 0;
class C2 extends En {
    constructor() {
        super(...arguments),
        this.id = S2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const s = this.node.animationState.setActive("exit", !t);
        n && !t && s.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const _2 = {
    animation: {
        Feature: x2
    },
    exit: {
        Feature: C2
    }
}
  , ct = {
    x: !1,
    y: !1
};
function D0() {
    return ct.x || ct.y
}
function E2(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let s = document;
        const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e)
}
function F0(e, t) {
    const n = E2(e)
      , r = new AbortController
      , s = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, s, () => r.abort()]
}
function ip(e) {
    return t => {
        t.pointerType === "touch" || D0() || e(t)
    }
}
function P2(e, t, n={}) {
    const [r,s,i] = F0(e, n)
      , o = ip(a => {
        const {target: l} = a
          , u = t(a);
        if (!u || !l)
            return;
        const d = ip(c => {
            u(c),
            l.removeEventListener("pointerleave", d)
        }
        );
        l.addEventListener("pointerleave", d, s)
    }
    );
    return r.forEach(a => {
        a.addEventListener("pointerenter", o, s)
    }
    ),
    i
}
const Rd = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , vs = new WeakSet;
function op(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Sl(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const k2 = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = op( () => {
        if (vs.has(n))
            return;
        Sl(n, "down");
        const s = op( () => {
            Sl(n, "up")
        }
        )
          , i = () => Sl(n, "cancel");
        n.addEventListener("keyup", s, t),
        n.addEventListener("blur", i, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
  , A2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function T2(e) {
    return A2.has(e.tagName) || e.tabIndex !== -1
}
const V0 = (e, t) => t ? e === t ? !0 : V0(e, t.parentElement) : !1;
function ap(e) {
    return Rd(e) && !D0()
}
function b2(e, t, n={}) {
    const [r,s,i] = F0(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!ap(a) || vs.has(l))
            return;
        vs.add(l);
        const u = t(a)
          , d = (y, v) => {
            window.removeEventListener("pointerup", c),
            window.removeEventListener("pointercancel", h),
            !(!ap(y) || !vs.has(l)) && (vs.delete(l),
            u && u(y, {
                success: v
            }))
        }
          , c = y => {
            d(y, n.useGlobalTarget || V0(l, y.target))
        }
          , h = y => {
            d(y, !1)
        }
        ;
        window.addEventListener("pointerup", c, s),
        window.addEventListener("pointercancel", h, s)
    }
    ;
    return r.forEach(a => {
        T2(a) || (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", u => k2(u, s), s)
    }
    ),
    i
}
function N2(e) {
    return e === "x" || e === "y" ? ct[e] ? null : (ct[e] = !0,
    () => {
        ct[e] = !1
    }
    ) : ct.x || ct.y ? null : (ct.x = ct.y = !0,
    () => {
        ct.x = ct.y = !1
    }
    )
}
function _i(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const j2 = e => t => Rd(t) && e(t, _i(t));
function ci(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function Os(e, t, n, r) {
    return ci(e, t, j2(n), r)
}
const lp = (e, t) => Math.abs(e - t);
function R2(e, t) {
    const n = lp(e.x, t.x)
      , r = lp(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class B0 {
    constructor(t, n, {transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const c = _l(this.lastMoveEventInfo, this.history)
              , h = this.startEvent !== null
              , y = R2(c.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!h && !y)
                return;
            const {point: v} = c
              , {timestamp: w} = xe;
            this.history.push({
                ...v,
                timestamp: w
            });
            const {onStart: x, onMove: m} = this.handlers;
            h || (x && x(this.lastMoveEvent, c),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, c)
        }
        ,
        this.handlePointerMove = (c, h) => {
            this.lastMoveEvent = c,
            this.lastMoveEventInfo = Cl(h, this.transformPagePoint),
            X.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (c, h) => {
            this.end();
            const {onEnd: y, onSessionEnd: v, resumeAnimation: w} = this.handlers;
            if (this.dragSnapToOrigin && w && w(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = _l(c.type === "pointercancel" ? this.lastMoveEventInfo : Cl(h, this.transformPagePoint), this.history);
            this.startEvent && y && y(c, x),
            v && v(c, x)
        }
        ,
        !Rd(t))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = s || window;
        const o = _i(t)
          , a = Cl(o, this.transformPagePoint)
          , {point: l} = a
          , {timestamp: u} = xe;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const {onSessionStart: d} = n;
        d && d(t, _l(a, this.history)),
        this.removeListeners = Ci(Os(this.contextWindow, "pointermove", this.handlePointerMove), Os(this.contextWindow, "pointerup", this.handlePointerUp), Os(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        vn(this.updatePoint)
    }
}
function Cl(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function up(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function _l({point: e}, t) {
    return {
        point: e,
        delta: up(e, $0(t)),
        offset: up(e, M2(t)),
        velocity: I2(t, .1)
    }
}
function M2(e) {
    return e[0]
}
function $0(e) {
    return e[e.length - 1]
}
function I2(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const s = $0(e);
    for (; n >= 0 && (r = e[n],
    !(s.timestamp - r.timestamp > Ut(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = zt(s.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (s.x - r.x) / i,
        y: (s.y - r.y) / i
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function xr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const U0 = 1e-4
  , L2 = 1 - U0
  , O2 = 1 + U0
  , z0 = .01
  , D2 = 0 - z0
  , F2 = 0 + z0;
function Qe(e) {
    return e.max - e.min
}
function V2(e, t, n) {
    return Math.abs(e - t) <= n
}
function cp(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = Z(t.min, t.max, e.origin),
    e.scale = Qe(n) / Qe(t),
    e.translate = Z(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= L2 && e.scale <= O2 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= D2 && e.translate <= F2 || isNaN(e.translate)) && (e.translate = 0)
}
function Ds(e, t, n, r) {
    cp(e.x, t.x, n.x, r ? r.originX : void 0),
    cp(e.y, t.y, n.y, r ? r.originY : void 0)
}
function dp(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Qe(t)
}
function B2(e, t, n) {
    dp(e.x, t.x, n.x),
    dp(e.y, t.y, n.y)
}
function fp(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Qe(t)
}
function Fs(e, t, n) {
    fp(e.x, t.x, n.x),
    fp(e.y, t.y, n.y)
}
function $2(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? Z(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)),
    e
}
function hp(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function U2(e, {top: t, left: n, bottom: r, right: s}) {
    return {
        x: hp(e.x, n, s),
        y: hp(e.y, t, r)
    }
}
function pp(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function z2(e, t) {
    return {
        x: pp(e.x, t.x),
        y: pp(e.y, t.y)
    }
}
function W2(e, t) {
    let n = .5;
    const r = Qe(e)
      , s = Qe(t);
    return s > r ? n = Wr(t.min, t.max - r, e.min) : r > s && (n = Wr(e.min, e.max - s, t.min)),
    Gt(0, 1, n)
}
function H2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const qu = .35;
function K2(e=qu) {
    return e === !1 ? e = 0 : e === !0 && (e = qu),
    {
        x: mp(e, "left", "right"),
        y: mp(e, "top", "bottom")
    }
}
function mp(e, t, n) {
    return {
        min: gp(e, t),
        max: gp(e, n)
    }
}
function gp(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const yp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Sr = () => ({
    x: yp(),
    y: yp()
})
  , vp = () => ({
    min: 0,
    max: 0
})
  , ie = () => ({
    x: vp(),
    y: vp()
});
function tt(e) {
    return [e("x"), e("y")]
}
function W0({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function q2({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function G2(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function El(e) {
    return e === void 0 || e === 1
}
function Gu({scale: e, scaleX: t, scaleY: n}) {
    return !El(e) || !El(t) || !El(n)
}
function Rn(e) {
    return Gu(e) || H0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function H0(e) {
    return wp(e.x) || wp(e.y)
}
function wp(e) {
    return e && e !== "0%"
}
function sa(e, t, n) {
    const r = e - n
      , s = t * r;
    return n + s
}
function xp(e, t, n, r, s) {
    return s !== void 0 && (e = sa(e, s, r)),
    sa(e, n, r) + t
}
function Xu(e, t=0, n=1, r, s) {
    e.min = xp(e.min, t, n, r, s),
    e.max = xp(e.max, t, n, r, s)
}
function K0(e, {x: t, y: n}) {
    Xu(e.x, t.translate, t.scale, t.originPoint),
    Xu(e.y, n.translate, n.scale, n.originPoint)
}
const Sp = .999999999999
  , Cp = 1.0000000000001;
function X2(e, t, n, r=!1) {
    const s = n.length;
    if (!s)
        return;
    t.x = t.y = 1;
    let i, o;
    for (let a = 0; a < s; a++) {
        i = n[a],
        o = i.projectionDelta;
        const {visualElement: l} = i.options;
        l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && _r(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        K0(e, o)),
        r && Rn(i.latestValues) && _r(e, i.latestValues))
    }
    t.x < Cp && t.x > Sp && (t.x = 1),
    t.y < Cp && t.y > Sp && (t.y = 1)
}
function Cr(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function _p(e, t, n, r, s=.5) {
    const i = Z(e.min, e.max, s);
    Xu(e, t, n, i, r)
}
function _r(e, t) {
    _p(e.x, t.x, t.scaleX, t.scale, t.originX),
    _p(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function q0(e, t) {
    return W0(G2(e.getBoundingClientRect(), t))
}
function Y2(e, t, n) {
    const r = q0(e, n)
      , {scroll: s} = t;
    return s && (Cr(r.x, s.offset.x),
    Cr(r.y, s.offset.y)),
    r
}
const G0 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Q2 = new WeakMap;
class J2 {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ie(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const s = d => {
            const {dragSnapToOrigin: c} = this.getProps();
            c ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(_i(d).point)
        }
          , i = (d, c) => {
            const {drag: h, dragPropagation: y, onDragStart: v} = this.getProps();
            if (h && !y && (this.openDragLock && this.openDragLock(),
            this.openDragLock = N2(h),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            tt(x => {
                let m = this.getAxisMotionValue(x).get() || 0;
                if (Rt.test(m)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const g = p.layout.layoutBox[x];
                        g && (m = Qe(g) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[x] = m
            }
            ),
            v && X.postRender( () => v(d, c)),
            Hu(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , o = (d, c) => {
            const {dragPropagation: h, dragDirectionLock: y, onDirectionLock: v, onDrag: w} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: x} = c;
            if (y && this.currentDirection === null) {
                this.currentDirection = Z2(x),
                this.currentDirection !== null && v && v(this.currentDirection);
                return
            }
            this.updateAxis("x", c.point, x),
            this.updateAxis("y", c.point, x),
            this.visualElement.render(),
            w && w(d, c)
        }
          , a = (d, c) => this.stop(d, c)
          , l = () => tt(d => {
            var c;
            return this.getAnimationState(d) === "paused" && ((c = this.getAxisMotionValue(d).animation) === null || c === void 0 ? void 0 : c.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new B0(t,{
            onSessionStart: s,
            onStart: i,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: l
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: G0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: s} = n;
        this.startAnimation(s);
        const {onDragEnd: i} = this.getProps();
        i && X.postRender( () => i(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: s} = this.getProps();
        if (!r || !Ji(t, s, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = $2(o, this.constraints[t], this.elastic[t])),
        i.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , i = this.constraints;
        n && xr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = U2(s.layoutBox, n) : this.constraints = !1,
        this.elastic = K2(r),
        i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && tt(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = H2(s.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !xr(t))
            return !1;
        const r = t.current
          , {projection: s} = this.visualElement;
        if (!s || !s.layout)
            return !1;
        const i = Y2(r, s.root, this.visualElement.getTransformPagePoint());
        let o = z2(s.layout.layoutBox, i);
        if (n) {
            const a = n(q2(o));
            this.hasMutatedConstraints = !!a,
            a && (o = W0(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = tt(d => {
            if (!Ji(d, n, this.currentDirection))
                return;
            let c = l && l[d] || {};
            o && (c = {
                min: 0,
                max: 0
            });
            const h = s ? 200 : 1e6
              , y = s ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[d] : 0,
                bounceStiffness: h,
                bounceDamping: y,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...c
            };
            return this.startAxisValueAnimation(d, v)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Hu(this.visualElement, t),
        r.start(Ad(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        tt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        tt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , s = r[n];
        return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        tt(n => {
            const {drag: r} = this.getProps();
            if (!Ji(n, r, this.currentDirection))
                return;
            const {projection: s} = this.visualElement
              , i = this.getAxisMotionValue(n);
            if (s && s.layout) {
                const {min: o, max: a} = s.layout.layoutBox[n];
                i.set(t[n] - Z(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!xr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const s = {
            x: 0,
            y: 0
        };
        tt(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                s[o] = W2({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        tt(o => {
            if (!Ji(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: u} = this.constraints[o];
            a.set(Z(l, u, s[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Q2.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Os(t, "pointerdown", l => {
            const {drag: u, dragListener: d=!0} = this.getProps();
            u && d && this.start(l)
        }
        )
          , r = () => {
            const {dragConstraints: l} = this.getProps();
            xr(l) && l.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: s} = this.visualElement
          , i = s.addEventListener("measure", r);
        s && !s.layout && (s.root && s.root.updateScroll(),
        s.updateLayout()),
        X.read(r);
        const o = ci(window, "resize", () => this.scalePositionWithinConstraints())
          , a = s.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u}) => {
            this.isDragging && u && (tt(d => {
                const c = this.getAxisMotionValue(d);
                c && (this.originPoint[d] += l[d].translate,
                c.set(c.get() + l[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            i(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: s=!1, dragConstraints: i=!1, dragElastic: o=qu, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: s,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Ji(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Z2(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class eE extends En {
    constructor(t) {
        super(t),
        this.removeGroupControls = Xe,
        this.removeListeners = Xe,
        this.controls = new J2(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Xe
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Ep = e => (t, n) => {
    e && X.postRender( () => e(t, n))
}
;
class tE extends En {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Xe
    }
    onPointerDown(t) {
        this.session = new B0(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: G0(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s} = this.node.getProps();
        return {
            onSessionStart: Ep(t),
            onStart: Ep(n),
            onMove: r,
            onEnd: (i, o) => {
                delete this.session,
                s && X.postRender( () => s(i, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Os(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Ia = C.createContext(null);
function nE() {
    const e = C.useContext(Ia);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , s = C.useId();
    C.useEffect( () => r(s), []);
    const i = C.useCallback( () => n && n(s), [s, n]);
    return !t && n ? [!1, i] : [!0]
}
const Md = C.createContext({})
  , X0 = C.createContext({})
  , wo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Pp(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const fs = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (L.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Pp(e, t.target.x)
          , r = Pp(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , rE = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , s = wn.parse(e);
        if (s.length > 5)
            return r;
        const i = wn.createTransformer(e)
          , o = typeof s[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        s[0 + o] /= a,
        s[1 + o] /= l;
        const u = Z(a, l, .5);
        return typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        i(s)
    }
}
  , ia = {};
function sE(e) {
    Object.assign(ia, e)
}
const {schedule: Id, cancel: LT} = Yy(queueMicrotask, !1);
class iE extends C.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s} = this.props
          , {projection: i} = t;
        sE(oE),
        i && (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
        })),
        wo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: s, isPresent: i} = this.props
          , o = r.projection;
        return o && (o.isPresent = i,
        s || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== i && (i ? o.promote() : o.relegate() || X.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Id.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: s} = t;
        s && (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        r && r.deregister && r.deregister(s))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function Y0(e) {
    const [t,n] = nE()
      , r = C.useContext(Md);
    return f.jsx(iE, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: C.useContext(X0),
        isPresent: t,
        safeToRemove: n
    })
}
const oE = {
    borderRadius: {
        ...fs,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: fs,
    borderTopRightRadius: fs,
    borderBottomLeftRadius: fs,
    borderBottomRightRadius: fs,
    boxShadow: rE
}
  , Q0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , aE = Q0.length
  , kp = e => typeof e == "string" ? parseFloat(e) : e
  , Ap = e => typeof e == "number" || L.test(e);
function lE(e, t, n, r, s, i) {
    s ? (e.opacity = Z(0, n.opacity !== void 0 ? n.opacity : 1, uE(r)),
    e.opacityExit = Z(t.opacity !== void 0 ? t.opacity : 1, 0, cE(r))) : i && (e.opacity = Z(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < aE; o++) {
        const a = `border${Q0[o]}Radius`;
        let l = Tp(t, a)
          , u = Tp(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Ap(l) === Ap(u) ? (e[a] = Math.max(Z(kp(l), kp(u), r), 0),
        (Rt.test(u) || Rt.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r))
}
function Tp(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const uE = J0(0, .5, r0)
  , cE = J0(.5, .95, Xe);
function J0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Wr(e, t, r))
}
function bp(e, t) {
    e.min = t.min,
    e.max = t.max
}
function et(e, t) {
    bp(e.x, t.x),
    bp(e.y, t.y)
}
function Np(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function jp(e, t, n, r, s) {
    return e -= t,
    e = sa(e, 1 / n, r),
    s !== void 0 && (e = sa(e, 1 / s, r)),
    e
}
function dE(e, t=0, n=1, r=.5, s, i=e, o=e) {
    if (Rt.test(t) && (t = parseFloat(t),
    t = Z(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = Z(i.min, i.max, r);
    e === i && (a -= t),
    e.min = jp(e.min, t, n, a, s),
    e.max = jp(e.max, t, n, a, s)
}
function Rp(e, t, [n,r,s], i, o) {
    dE(e, t[n], t[r], t[s], t.scale, i, o)
}
const fE = ["x", "scaleX", "originX"]
  , hE = ["y", "scaleY", "originY"];
function Mp(e, t, n, r) {
    Rp(e.x, t, fE, n ? n.x : void 0, r ? r.x : void 0),
    Rp(e.y, t, hE, n ? n.y : void 0, r ? r.y : void 0)
}
function Ip(e) {
    return e.translate === 0 && e.scale === 1
}
function Z0(e) {
    return Ip(e.x) && Ip(e.y)
}
function Lp(e, t) {
    return e.min === t.min && e.max === t.max
}
function pE(e, t) {
    return Lp(e.x, t.x) && Lp(e.y, t.y)
}
function Op(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function ev(e, t) {
    return Op(e.x, t.x) && Op(e.y, t.y)
}
function Dp(e) {
    return Qe(e.x) / Qe(e.y)
}
function Fp(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class mE {
    constructor() {
        this.members = []
    }
    add(t) {
        Td(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (bd(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(s => t === s);
        if (n === 0)
            return !1;
        let r;
        for (let s = n; s >= 0; s--) {
            const i = this.members[s];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: s} = t.options;
            s === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function gE(e, t, n) {
    let r = "";
    const s = e.x.translate / t.x
      , i = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: d, rotateX: c, rotateY: h, skewX: y, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        d && (r += `rotate(${d}deg) `),
        c && (r += `rotateX(${c}deg) `),
        h && (r += `rotateY(${h}deg) `),
        y && (r += `skewX(${y}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const yE = (e, t) => e.depth - t.depth;
class vE {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Td(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        bd(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(yE),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function xo(e) {
    const t = Ne(e) ? e.get() : e;
    return n2(t) ? t.toValue() : t
}
function wE(e, t) {
    const n = Mt.now()
      , r = ({timestamp: s}) => {
        const i = s - n;
        i >= t && (vn(r),
        e(i - t))
    }
    ;
    return X.read(r, !0),
    () => vn(r)
}
function xE(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function SE(e, t, n) {
    const r = Ne(e) ? e : ui(e);
    return r.start(Ad("", r, t, n)),
    r.animation
}
const Mn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , ws = typeof window < "u" && window.MotionDebug !== void 0
  , Pl = ["", "X", "Y", "Z"]
  , CE = {
    visibility: "hidden"
}
  , Vp = 1e3;
let _E = 0;
function kl(e, t, n, r) {
    const {latestValues: s} = t;
    s[e] && (n[e] = s[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function tv(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = I0(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: s, layoutId: i} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", X, !(s || i))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && tv(r)
}
function nv({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = _E++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                ws && (Mn.totalNodes = Mn.resolvedTargetDeltas = Mn.recalculatedProjection = 0),
                this.nodes.forEach(kE),
                this.nodes.forEach(jE),
                this.nodes.forEach(RE),
                this.nodes.forEach(AE),
                ws && window.MotionDebug.record(Mn)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new vE)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Nd),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = xE(o),
            this.instance = o;
            const {layoutId: l, layout: u, visualElement: d} = this.options;
            if (d && !d.current && d.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (u || l) && (this.isLayoutDirty = !0),
            e) {
                let c;
                const h = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = wE(h, 250),
                    wo.hasAnimatedSinceResize && (wo.hasAnimatedSinceResize = !1,
                    this.nodes.forEach($p))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && d && (l || u) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: h, hasRelativeTargetChanged: y, layout: v}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const w = this.options.transition || d.getDefaultTransition() || DE
                  , {onLayoutAnimationStart: x, onLayoutAnimationComplete: m} = d.getProps()
                  , p = !this.targetLayout || !ev(this.targetLayout, v) || y
                  , g = !h && y;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(c, g);
                    const S = {
                        ...hd(w, "layout"),
                        onPlay: x,
                        onComplete: m
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0,
                    S.type = !1),
                    this.startAnimation(S)
                } else
                    h || $p(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            vn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(ME),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && tv(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const c = this.path[d];
                c.shouldResetTransform = !0,
                c.updateScroll("snapshot"),
                c.options.layoutRoot && c.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Bp);
                return
            }
            this.isUpdating || this.nodes.forEach(bE),
            this.isUpdating = !1,
            this.nodes.forEach(NE),
            this.nodes.forEach(EE),
            this.nodes.forEach(PE),
            this.clearAllSnapshots();
            const a = Mt.now();
            xe.delta = Gt(0, 1e3 / 60, a - xe.timestamp),
            xe.timestamp = a,
            xe.isProcessing = !0,
            gl.update.process(xe),
            gl.preRender.process(xe),
            gl.render.process(xe),
            xe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Id.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(TE),
            this.sharedNodes.forEach(IE)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            X.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            X.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ie(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!s)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !Z0(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , d = u !== this.prevTransformTemplateValue;
            o && (a || Rn(this.latestValues) || d) && (s(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            FE(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {visualElement: a} = this.options;
            if (!a)
                return ie();
            const l = a.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(VE))) {
                const {scroll: d} = this.root;
                d && (Cr(l.x, d.offset.x),
                Cr(l.y, d.offset.y))
            }
            return l
        }
        removeElementScroll(o) {
            var a;
            const l = ie();
            if (et(l, o),
            !((a = this.scroll) === null || a === void 0) && a.wasRoot)
                return l;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u]
                  , {scroll: c, options: h} = d;
                d !== this.root && c && h.layoutScroll && (c.wasRoot && et(l, o),
                Cr(l.x, c.offset.x),
                Cr(l.y, c.offset.y))
            }
            return l
        }
        applyTransform(o, a=!1) {
            const l = ie();
            et(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                !a && d.options.layoutScroll && d.scroll && d !== d.root && _r(l, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                Rn(d.latestValues) && _r(l, d.latestValues)
            }
            return Rn(this.latestValues) && _r(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = ie();
            et(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Rn(u.latestValues))
                    continue;
                Gu(u.latestValues) && u.updateSnapshot();
                const d = ie()
                  , c = u.measurePageBox();
                et(d, c),
                Mp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
            }
            return Rn(this.latestValues) && Mp(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: h} = this.options;
            if (!(!this.layout || !(c || h))) {
                if (this.resolvedRelativeTargetAt = xe.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ie(),
                    this.relativeTargetOrigin = ie(),
                    Fs(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox),
                    et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ie(),
                    this.targetWithTransforms = ie()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    B2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : et(this.target, this.layout.layoutBox),
                    K0(this.target, this.targetDelta)) : et(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ie(),
                        this.relativeTargetOrigin = ie(),
                        Fs(this.relativeTargetOrigin, this.target, y.target),
                        et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    ws && Mn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Gu(this.parent.latestValues) || H0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead()
              , l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === xe.timestamp && (u = !1),
            u)
                return;
            const {layout: d, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || c))
                return;
            et(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x
              , y = this.treeScale.y;
            X2(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox,
            a.targetWithTransforms = ie());
            const {target: v} = a;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Np(this.prevProjectionDelta.x, this.projectionDelta.x),
            Np(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Ds(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
            (this.treeScale.x !== h || this.treeScale.y !== y || !Fp(this.projectionDelta.x, this.prevProjectionDelta.x) || !Fp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v)),
            ws && Mn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Sr(),
            this.projectionDelta = Sr(),
            this.projectionDeltaWithTransform = Sr()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , d = {
                ...this.latestValues
            }
              , c = Sr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const h = ie()
              , y = l ? l.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , w = y !== v
              , x = this.getStack()
              , m = !x || x.members.length <= 1
              , p = !!(w && !m && this.options.crossfade === !0 && !this.path.some(OE));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = S => {
                const _ = S / 1e3;
                Up(c.x, o.x, _),
                Up(c.y, o.y, _),
                this.setTargetDelta(c),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Fs(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                LE(this.relativeTarget, this.relativeTargetOrigin, h, _),
                g && pE(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                g || (g = ie()),
                et(g, this.relativeTarget)),
                w && (this.animationValues = d,
                lE(d, u, this.latestValues, _, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = _
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (vn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = X.update( () => {
                wo.hasAnimatedSinceResize = !0,
                this.currentAnimation = SE(0, Vp, {
                    ...o,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        o.onUpdate && o.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Vp),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: d} = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && rv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || ie();
                    const c = Qe(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + c;
                    const h = Qe(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + h
                }
                et(a, l),
                _r(a, d),
                Ds(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new mE),
            this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && kl("z", o, u, this.animationValues);
            for (let d = 0; d < Pl.length; d++)
                kl(`rotate${Pl[d]}`, o, u, this.animationValues),
                kl(`skew${Pl[d]}`, o, u, this.animationValues);
            o.render();
            for (const d in u)
                o.setStaticValue(d, u[d]),
                this.animationValues && (this.animationValues[d] = u[d]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return CE;
            const u = {
                visibility: ""
            }
              , d = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = xo(o == null ? void 0 : o.pointerEvents) || "",
                u.transform = d ? d(this.latestValues, "") : "none",
                u;
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                w.pointerEvents = xo(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !Rn(this.latestValues) && (w.transform = d ? d({}, "") : "none",
                this.hasProjected = !1),
                w
            }
            const h = c.animationValues || c.latestValues;
            this.applyTransformsToTarget(),
            u.transform = gE(this.projectionDeltaWithTransform, this.treeScale, h),
            d && (u.transform = d(h, u.transform));
            const {x: y, y: v} = this.projectionDelta;
            u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`,
            c.animationValues ? u.opacity = c === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = c === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const w in ia) {
                if (h[w] === void 0)
                    continue;
                const {correct: x, applyTo: m} = ia[w]
                  , p = u.transform === "none" ? h[w] : x(h[w], c);
                if (m) {
                    const g = m.length;
                    for (let S = 0; S < g; S++)
                        u[m[S]] = p
                } else
                    u[w] = p
            }
            return this.options.layoutId && (u.pointerEvents = c === this ? xo(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Bp),
            this.root.sharedNodes.clear()
        }
    }
}
function EE(e) {
    e.updateLayout()
}
function PE(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: s} = e.layout
          , {animationType: i} = e.options
          , o = n.source !== e.layout.source;
        i === "size" ? tt(c => {
            const h = o ? n.measuredBox[c] : n.layoutBox[c]
              , y = Qe(h);
            h.min = r[c].min,
            h.max = h.min + y
        }
        ) : rv(i, n.layoutBox, r) && tt(c => {
            const h = o ? n.measuredBox[c] : n.layoutBox[c]
              , y = Qe(r[c]);
            h.max = h.min + y,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[c].max = e.relativeTarget[c].min + y)
        }
        );
        const a = Sr();
        Ds(a, r, n.layoutBox);
        const l = Sr();
        o ? Ds(l, e.applyTransform(s, !0), n.measuredBox) : Ds(l, r, n.layoutBox);
        const u = !Z0(a);
        let d = !1;
        if (!e.resumeFrom) {
            const c = e.getClosestProjectingParent();
            if (c && !c.resumeFrom) {
                const {snapshot: h, layout: y} = c;
                if (h && y) {
                    const v = ie();
                    Fs(v, n.layoutBox, h.layoutBox);
                    const w = ie();
                    Fs(w, r, y.layoutBox),
                    ev(v, w) || (d = !0),
                    c.options.layoutRoot && (e.relativeTarget = w,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = c)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function kE(e) {
    ws && Mn.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function AE(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function TE(e) {
    e.clearSnapshot()
}
function Bp(e) {
    e.clearMeasurements()
}
function bE(e) {
    e.isLayoutDirty = !1
}
function NE(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function $p(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function jE(e) {
    e.resolveTargetDelta()
}
function RE(e) {
    e.calcProjection()
}
function ME(e) {
    e.resetSkewAndRotation()
}
function IE(e) {
    e.removeLeadSnapshot()
}
function Up(e, t, n) {
    e.translate = Z(t.translate, 0, n),
    e.scale = Z(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function zp(e, t, n, r) {
    e.min = Z(t.min, n.min, r),
    e.max = Z(t.max, n.max, r)
}
function LE(e, t, n, r) {
    zp(e.x, t.x, n.x, r),
    zp(e.y, t.y, n.y, r)
}
function OE(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const DE = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Wp = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Hp = Wp("applewebkit/") && !Wp("chrome/") ? Math.round : Xe;
function Kp(e) {
    e.min = Hp(e.min),
    e.max = Hp(e.max)
}
function FE(e) {
    Kp(e.x),
    Kp(e.y)
}
function rv(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !V2(Dp(t), Dp(n), .2)
}
function VE(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const BE = nv({
    attachResizeListener: (e, t) => ci(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Al = {
    current: void 0
}
  , sv = nv({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Al.current) {
            const e = new BE({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Al.current = e
        }
        return Al.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , $E = {
    pan: {
        Feature: tE
    },
    drag: {
        Feature: eE,
        ProjectionNode: sv,
        MeasureLayout: Y0
    }
};
function qp(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const s = "onHover" + n
      , i = r[s];
    i && X.postRender( () => i(t, _i(t)))
}
class UE extends En {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = P2(t, n => (qp(this.node, n, "Start"),
        r => qp(this.node, r, "End"))))
    }
    unmount() {}
}
class zE extends En {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ci(ci(this.node.current, "focus", () => this.onFocus()), ci(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Gp(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const s = "onTap" + (n === "End" ? "" : n)
      , i = r[s];
    i && X.postRender( () => i(t, _i(t)))
}
class WE extends En {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = b2(t, n => (Gp(this.node, n, "Start"),
        (r, {success: s}) => Gp(this.node, r, s ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Yu = new WeakMap
  , Tl = new WeakMap
  , HE = e => {
    const t = Yu.get(e.target);
    t && t(e)
}
  , KE = e => {
    e.forEach(HE)
}
;
function qE({root: e, ...t}) {
    const n = e || document;
    Tl.has(n) || Tl.set(n, {});
    const r = Tl.get(n)
      , s = JSON.stringify(t);
    return r[s] || (r[s] = new IntersectionObserver(KE,{
        root: e,
        ...t
    })),
    r[s]
}
function GE(e, t, n) {
    const r = qE(t);
    return Yu.set(e, n),
    r.observe(e),
    () => {
        Yu.delete(e),
        r.unobserve(e)
    }
}
const XE = {
    some: 0,
    all: 1
};
class YE extends En {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: s="some", once: i} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof s == "number" ? s : XE[s]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            i && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: d, onViewportLeave: c} = this.node.getProps()
              , h = u ? d : c;
            h && h(l)
        }
        ;
        return GE(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(QE(t, n)) && this.startObserver()
    }
    unmount() {}
}
function QE({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const JE = {
    inView: {
        Feature: YE
    },
    tap: {
        Feature: WE
    },
    focus: {
        Feature: zE
    },
    hover: {
        Feature: UE
    }
}
  , ZE = {
    layout: {
        ProjectionNode: sv,
        MeasureLayout: Y0
    }
}
  , Ld = C.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , La = C.createContext({})
  , Od = typeof window < "u"
  , iv = Od ? C.useLayoutEffect : C.useEffect
  , ov = C.createContext({
    strict: !1
});
function eP(e, t, n, r, s) {
    var i, o;
    const {visualElement: a} = C.useContext(La)
      , l = C.useContext(ov)
      , u = C.useContext(Ia)
      , d = C.useContext(Ld).reducedMotion
      , c = C.useRef(null);
    r = r || l.renderer,
    !c.current && r && (c.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: d
    }));
    const h = c.current
      , y = C.useContext(X0);
    h && !h.projection && s && (h.type === "html" || h.type === "svg") && tP(c.current, n, s, y);
    const v = C.useRef(!1);
    C.useInsertionEffect( () => {
        h && v.current && h.update(n, u)
    }
    );
    const w = n[M0]
      , x = C.useRef(!!w && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, w)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, w)));
    return iv( () => {
        h && (v.current = !0,
        window.MotionIsMounted = !0,
        h.updateFeatures(),
        Id.render(h.render),
        x.current && h.animationState && h.animationState.animateChanges())
    }
    ),
    C.useEffect( () => {
        h && (!x.current && h.animationState && h.animationState.animateChanges(),
        x.current && (queueMicrotask( () => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, w)
        }
        ),
        x.current = !1))
    }
    ),
    h
}
function tP(e, t, n, r) {
    const {layoutId: s, layout: i, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : av(e.parent)),
    e.projection.setOptions({
        layoutId: s,
        layout: i,
        alwaysMeasureLayout: !!o || a && xr(a),
        visualElement: e,
        animationType: typeof i == "string" ? i : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: u
    })
}
function av(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : av(e.parent)
}
function nP(e, t, n) {
    return C.useCallback(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : xr(n) && (n.current = r))
    }
    , [t])
}
function Oa(e) {
    return ja(e.animate) || fd.some(t => oi(e[t]))
}
function lv(e) {
    return !!(Oa(e) || e.variants)
}
function rP(e, t) {
    if (Oa(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || oi(n) ? n : void 0,
            animate: oi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function sP(e) {
    const {initial: t, animate: n} = rP(e, C.useContext(La));
    return C.useMemo( () => ({
        initial: t,
        animate: n
    }), [Xp(t), Xp(n)])
}
function Xp(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Yp = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Hr = {};
for (const e in Yp)
    Hr[e] = {
        isEnabled: t => Yp[e].some(n => !!t[n])
    };
function iP(e) {
    for (const t in e)
        Hr[t] = {
            ...Hr[t],
            ...e[t]
        }
}
const oP = Symbol.for("motionComponentSymbol");
function aP({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: s}) {
    e && iP(e);
    function i(a, l) {
        let u;
        const d = {
            ...C.useContext(Ld),
            ...a,
            layoutId: lP(a)
        }
          , {isStatic: c} = d
          , h = sP(a)
          , y = r(a, c);
        if (!c && Od) {
            uP();
            const v = cP(d);
            u = v.MeasureLayout,
            h.visualElement = eP(s, y, d, t, v.ProjectionNode)
        }
        return f.jsxs(La.Provider, {
            value: h,
            children: [u && h.visualElement ? f.jsx(u, {
                visualElement: h.visualElement,
                ...d
            }) : null, n(s, a, nP(y, h.visualElement, l), y, c, h.visualElement)]
        })
    }
    const o = C.forwardRef(i);
    return o[oP] = s,
    o
}
function lP({layoutId: e}) {
    const t = C.useContext(Md).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function uP(e, t) {
    C.useContext(ov).strict
}
function cP(e) {
    const {drag: t, layout: n} = Hr;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const dP = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Dd(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(dP.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function uv(e, {style: t, vars: n}, r, s) {
    Object.assign(e.style, t, s && s.getProjectionStyles(r));
    for (const i in n)
        e.style.setProperty(i, n[i])
}
const cv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function dv(e, t, n, r) {
    uv(e, t, void 0, r);
    for (const s in t.attrs)
        e.setAttribute(cv.has(s) ? s : jd(s), t.attrs[s])
}
function fv(e, {layout: t, layoutId: n}) {
    return Zn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ia[e] || e === "opacity")
}
function Fd(e, t, n) {
    var r;
    const {style: s} = e
      , i = {};
    for (const o in s)
        (Ne(s[o]) || t.style && Ne(t.style[o]) || fv(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[o] = s[o]);
    return i
}
function hv(e, t, n) {
    const r = Fd(e, t, n);
    for (const s in e)
        if (Ne(e[s]) || Ne(t[s])) {
            const i = wi.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            r[i] = e[s]
        }
    return r
}
function Vd(e) {
    const t = C.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
function fP({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, s, i) {
    const o = {
        latestValues: hP(r, s, i, e),
        renderState: t()
    };
    return n && (o.mount = a => n(r, a, o)),
    o
}
const pv = e => (t, n) => {
    const r = C.useContext(La)
      , s = C.useContext(Ia)
      , i = () => fP(e, t, r, s);
    return n ? i() : Vd(i)
}
;
function hP(e, t, n, r) {
    const s = {}
      , i = r(e, {});
    for (const h in i)
        s[h] = xo(i[h]);
    let {initial: o, animate: a} = e;
    const l = Oa(e)
      , u = lv(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const c = d ? a : o;
    if (c && typeof c != "boolean" && !ja(c)) {
        const h = Array.isArray(c) ? c : [c];
        for (let y = 0; y < h.length; y++) {
            const v = cd(e, h[y]);
            if (v) {
                const {transitionEnd: w, transition: x, ...m} = v;
                for (const p in m) {
                    let g = m[p];
                    if (Array.isArray(g)) {
                        const S = d ? g.length - 1 : 0;
                        g = g[S]
                    }
                    g !== null && (s[p] = g)
                }
                for (const p in w)
                    s[p] = w[p]
            }
        }
    }
    return s
}
const Bd = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , mv = () => ({
    ...Bd(),
    attrs: {}
})
  , gv = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , pP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , mP = wi.length;
function gP(e, t, n) {
    let r = ""
      , s = !0;
    for (let i = 0; i < mP; i++) {
        const o = wi[i]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0,
        !l || n) {
            const u = gv(a, xd[o]);
            if (!l) {
                s = !1;
                const d = pP[o] || o;
                r += `${d}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, s ? "" : r) : s && (r = "none"),
    r
}
function $d(e, t, n) {
    const {style: r, vars: s, transformOrigin: i} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (Zn.has(l)) {
            o = !0;
            continue
        } else if (l0(l)) {
            s[l] = u;
            continue
        } else {
            const d = gv(u, xd[l]);
            l.startsWith("origin") ? (a = !0,
            i[l] = d) : r[l] = d
        }
    }
    if (t.transform || (o || n ? r.transform = gP(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: d=0} = i;
        r.transformOrigin = `${l} ${u} ${d}`
    }
}
function Qp(e, t, n) {
    return typeof e == "string" ? e : L.transform(t + n * e)
}
function yP(e, t, n) {
    const r = Qp(t, e.x, e.width)
      , s = Qp(n, e.y, e.height);
    return `${r} ${s}`
}
const vP = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , wP = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function xP(e, t, n=1, r=0, s=!0) {
    e.pathLength = 1;
    const i = s ? vP : wP;
    e[i.offset] = L.transform(-r);
    const o = L.transform(t)
      , a = L.transform(n);
    e[i.array] = `${o} ${a}`
}
function Ud(e, {attrX: t, attrY: n, attrScale: r, originX: s, originY: i, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, d, c) {
    if ($d(e, u, c),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: h, style: y, dimensions: v} = e;
    h.transform && (v && (y.transform = h.transform),
    delete h.transform),
    v && (s !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = yP(v, s !== void 0 ? s : .5, i !== void 0 ? i : .5)),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && xP(h, o, a, l, !1)
}
const zd = e => typeof e == "string" && e.toLowerCase() === "svg"
  , SP = {
    useVisualState: pv({
        scrapeMotionValuesFromProps: hv,
        createRenderState: mv,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            X.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            X.render( () => {
                Ud(n, r, zd(t.tagName), e.transformTemplate),
                dv(t, n)
            }
            )
        }
    })
}
  , CP = {
    useVisualState: pv({
        scrapeMotionValuesFromProps: Fd,
        createRenderState: Bd
    })
};
function yv(e, t, n) {
    for (const r in t)
        !Ne(t[r]) && !fv(r, n) && (e[r] = t[r])
}
function _P({transformTemplate: e}, t) {
    return C.useMemo( () => {
        const n = Bd();
        return $d(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function EP(e, t) {
    const n = e.style || {}
      , r = {};
    return yv(r, n, e),
    Object.assign(r, _P(e, t)),
    r
}
function PP(e, t) {
    const n = {}
      , r = EP(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const kP = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function oa(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || kP.has(e)
}
let vv = e => !oa(e);
function AP(e) {
    e && (vv = t => t.startsWith("on") ? !oa(t) : e(t))
}
try {
    AP(require("@emotion/is-prop-valid").default)
} catch {}
function TP(e, t, n) {
    const r = {};
    for (const s in e)
        s === "values" && typeof e.values == "object" || (vv(s) || n === !0 && oa(s) || !t && !oa(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
    return r
}
function bP(e, t, n, r) {
    const s = C.useMemo( () => {
        const i = mv();
        return Ud(i, t, zd(r), e.transformTemplate),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const i = {};
        yv(i, e.style, e),
        s.style = {
            ...i,
            ...s.style
        }
    }
    return s
}
function NP(e=!1) {
    return (n, r, s, {latestValues: i}, o) => {
        const l = (Dd(n) ? bP : PP)(r, i, o, n)
          , u = TP(r, typeof n == "string", e)
          , d = n !== C.Fragment ? {
            ...u,
            ...l,
            ref: s
        } : {}
          , {children: c} = r
          , h = C.useMemo( () => Ne(c) ? c.get() : c, [c]);
        return C.createElement(n, {
            ...d,
            children: h
        })
    }
}
function jP(e, t) {
    return function(r, {forwardMotionProps: s}={
        forwardMotionProps: !1
    }) {
        const o = {
            ...Dd(r) ? SP : CP,
            preloadedFeatures: e,
            useRender: NP(s),
            createVisualElement: t,
            Component: r
        };
        return aP(o)
    }
}
const Qu = {
    current: null
}
  , wv = {
    current: !1
};
function RP() {
    if (wv.current = !0,
    !!Od)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Qu.current = e.matches;
            e.addListener(t),
            t()
        } else
            Qu.current = !1
}
function MP(e, t, n) {
    for (const r in t) {
        const s = t[r]
          , i = n[r];
        if (Ne(s))
            e.addValue(r, s);
        else if (Ne(i))
            e.addValue(r, ui(s, {
                owner: e
            }));
        else if (i !== s)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, ui(o !== void 0 ? o : s, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Jp = new WeakMap
  , IP = [...d0, Te, wn]
  , LP = e => IP.find(c0(e))
  , Zp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class OP {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: s, blockInitialAnimation: i, visualState: o}, a={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = yd,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = Mt.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            X.render(this.render, !1, !0))
        }
        ;
        const {latestValues: l, renderState: u} = o;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = s,
        this.options = a,
        this.blockInitialAnimation = !!i,
        this.isControllingVariants = Oa(n),
        this.isVariantNode = lv(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...c} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in c) {
            const y = c[h];
            l[h] !== void 0 && Ne(y) && y.set(l[h], !1)
        }
    }
    mount(t) {
        this.current = t,
        Jp.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        wv.current || RP(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Qu.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Jp.delete(this.current),
        this.projection && this.projection.unmount(),
        vn(this.notifyUpdate),
        vn(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Zn.has(t)
          , s = n.on("change", a => {
            this.latestValues[t] = a,
            this.props.onUpdate && X.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , i = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            s(),
            i(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Hr) {
            const n = Hr[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: s} = n;
            if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)),
            this.features[t]) {
                const i = this.features[t];
                i.isMounted ? i.update() : (i.mount(),
                i.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ie()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Zp.length; r++) {
            const s = Zp[r];
            this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](),
            delete this.propEventSubscriptions[s]);
            const i = "on" + s
              , o = t[i];
            o && (this.propEventSubscriptions[s] = this.on(s, o))
        }
        this.prevMotionValues = MP(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = ui(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return s != null && (typeof s == "string" && (o0(s) || i0(s)) ? s = parseFloat(s) : !LP(s) && wn.test(n) && (s = w0(t, n)),
        this.setBaseTarget(t, Ne(s) ? s.get() : s)),
        Ne(s) ? s.get() : s
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let s;
        if (typeof r == "string" || typeof r == "object") {
            const o = cd(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (s = o[t])
        }
        if (r && s !== void 0)
            return s;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Ne(i) ? i : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Nd),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class xv extends OP {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = x0
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ne(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function DP(e) {
    return window.getComputedStyle(e)
}
class FP extends xv {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = uv
    }
    readValueFromInstance(t, n) {
        if (Zn.has(n)) {
            const r = Sd(n);
            return r && r.default || 0
        } else {
            const r = DP(t)
              , s = (l0(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return q0(t, n)
    }
    build(t, n, r) {
        $d(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Fd(t, n, r)
    }
}
class VP extends xv {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ie
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Zn.has(n)) {
            const r = Sd(n);
            return r && r.default || 0
        }
        return n = cv.has(n) ? n : jd(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return hv(t, n, r)
    }
    build(t, n, r) {
        Ud(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, s) {
        dv(t, n, r, s)
    }
    mount(t) {
        this.isSVGTag = zd(t.tagName),
        super.mount(t)
    }
}
const BP = (e, t) => Dd(e) ? new VP(t) : new FP(t,{
    allowProjection: e !== C.Fragment
})
  , $P = jP({
    ..._2,
    ...JE,
    ...$E,
    ...ZE
}, BP)
  , j = SC($P);
class UP extends C.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function zP({children: e, isPresent: t}) {
    const n = C.useId()
      , r = C.useRef(null)
      , s = C.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: i} = C.useContext(Ld);
    return C.useInsertionEffect( () => {
        const {width: o, height: a, top: l, left: u} = s.current;
        if (t || !r.current || !o || !a)
            return;
        r.current.dataset.motionPopId = n;
        const d = document.createElement("style");
        return i && (d.nonce = i),
        document.head.appendChild(d),
        d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
            document.head.removeChild(d)
        }
    }
    , [t]),
    f.jsx(UP, {
        isPresent: t,
        childRef: r,
        sizeRef: s,
        children: C.cloneElement(e, {
            ref: r
        })
    })
}
const WP = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: i, mode: o}) => {
    const a = Vd(HP)
      , l = C.useId()
      , u = C.useCallback(c => {
        a.set(c, !0);
        for (const h of a.values())
            if (!h)
                return;
        r && r()
    }
    , [a, r])
      , d = C.useMemo( () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: u,
        register: c => (a.set(c, !1),
        () => a.delete(c))
    }), i ? [Math.random(), u] : [n, u]);
    return C.useMemo( () => {
        a.forEach( (c, h) => a.set(h, !1))
    }
    , [n]),
    C.useEffect( () => {
        !n && !a.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = f.jsx(zP, {
        isPresent: n,
        children: e
    })),
    f.jsx(Ia.Provider, {
        value: d,
        children: e
    })
}
;
function HP() {
    return new Map
}
const Zi = e => e.key || "";
function em(e) {
    const t = [];
    return C.Children.forEach(e, n => {
        C.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Ei = ({children: e, exitBeforeEnter: t, custom: n, initial: r=!0, onExitComplete: s, presenceAffectsLayout: i=!0, mode: o="sync"}) => {
    const a = C.useMemo( () => em(e), [e])
      , l = a.map(Zi)
      , u = C.useRef(!0)
      , d = C.useRef(a)
      , c = Vd( () => new Map)
      , [h,y] = C.useState(a)
      , [v,w] = C.useState(a);
    iv( () => {
        u.current = !1,
        d.current = a;
        for (let p = 0; p < v.length; p++) {
            const g = Zi(v[p]);
            l.includes(g) ? c.delete(g) : c.get(g) !== !0 && c.set(g, !1)
        }
    }
    , [v, l.length, l.join("-")]);
    const x = [];
    if (a !== h) {
        let p = [...a];
        for (let g = 0; g < v.length; g++) {
            const S = v[g]
              , _ = Zi(S);
            l.includes(_) || (p.splice(g, 0, S),
            x.push(S))
        }
        o === "wait" && x.length && (p = x),
        w(em(p)),
        y(a);
        return
    }
    const {forceRender: m} = C.useContext(Md);
    return f.jsx(f.Fragment, {
        children: v.map(p => {
            const g = Zi(p)
              , S = a === v || l.includes(g)
              , _ = () => {
                if (c.has(g))
                    c.set(g, !0);
                else
                    return;
                let E = !0;
                c.forEach(P => {
                    P || (E = !1)
                }
                ),
                E && (m == null || m(),
                w(d.current),
                s && s())
            }
            ;
            return f.jsx(WP, {
                isPresent: S,
                initial: !u.current || r ? void 0 : !1,
                custom: S ? void 0 : n,
                presenceAffectsLayout: i,
                mode: o,
                onExitComplete: S ? void 0 : _,
                children: p
            }, g)
        }
        )
    })
}
  , Sv = C.createContext(void 0)
  , tm = "forge_custom_agents";
function KP({children: e}) {
    const [t,n] = C.useState( () => {
        try {
            const a = localStorage.getItem(tm);
            return a ? JSON.parse(a) : []
        } catch (a) {
            return console.error("Error loading custom agents:", a),
            []
        }
    }
    );
    C.useEffect( () => {
        try {
            localStorage.setItem(tm, JSON.stringify(t))
        } catch (a) {
            console.error("Error saving custom agents:", a)
        }
    }
    , [t]);
    const r = a => {
        n(l => {
            const u = l.findIndex(d => d.name === a.name);
            if (u >= 0) {
                const d = [...l];
                return d[u] = {
                    ...a,
                    imageUrl: a.imageUrl || d[u].imageUrl
                },
                d
            }
            return [...l, a]
        }
        )
    }
      , s = a => {
        n(l => l.filter(u => u.name !== a))
    }
      , i = a => {
        const l = a.toLowerCase().replace(/[^a-z0-9]/g, "-");
        return t.find(u => u.name.toLowerCase().replace(/[^a-z0-9]/g, "-") === l)
    }
      , o = Ao.useMemo( () => ({
        customAgents: t,
        addCustomAgent: r,
        removeCustomAgent: s,
        getCustomAgent: i
    }), [t]);
    return f.jsx(Sv.Provider, {
        value: o,
        children: e
    })
}
function Da() {
    const e = C.useContext(Sv);
    if (e === void 0)
        throw new Error("useAgent must be used within an AgentProvider");
    return e
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qP = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GP = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , U = (e, t) => {
    const n = C.forwardRef( ({color: r="currentColor", size: s=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: a="", children: l, ...u}, d) => C.createElement("svg", {
        ref: d,
        ...qP,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${GP(e)}`, a].join(" "),
        ...u
    }, [...t.map( ([c,h]) => C.createElement(c, h)), ...Array.isArray(l) ? l : [l]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = U("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = U("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = U("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _v = U("BookOpen", [["path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    key: "vv98re"
}], ["path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    key: "1cyq3y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = U("Bot", [["path", {
    d: "M12 8V4H8",
    key: "hb8ula"
}], ["rect", {
    width: "16",
    height: "12",
    x: "4",
    y: "8",
    rx: "2",
    key: "enze0r"
}], ["path", {
    d: "M2 14h2",
    key: "vft8re"
}], ["path", {
    d: "M20 14h2",
    key: "4cs60a"
}], ["path", {
    d: "M15 13v2",
    key: "1xurst"
}], ["path", {
    d: "M9 13v2",
    key: "rq6x2g"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ev = U("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XP = U("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YP = U("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QP = U("Cpu", [["rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    key: "1vbyd7"
}], ["rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6",
    key: "o3kz5p"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JP = U("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZP = U("FileCode", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "m10 13-2 2 2 2",
    key: "17smn8"
}], ["path", {
    d: "m14 17 2-2-2-2",
    key: "14mezr"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ek = U("Image", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tk = U("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nk = U("MessageSquare", [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = U("Network", [["rect", {
    x: "16",
    y: "16",
    width: "6",
    height: "6",
    rx: "1",
    key: "4q2zg0"
}], ["rect", {
    x: "2",
    y: "16",
    width: "6",
    height: "6",
    rx: "1",
    key: "8cvhb9"
}], ["rect", {
    x: "9",
    y: "2",
    width: "6",
    height: "6",
    rx: "1",
    key: "1egb70"
}], ["path", {
    d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
    key: "1jsf9p"
}], ["path", {
    d: "M12 12V8",
    key: "2874zd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kv = U("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rk = U("Puzzle", [["path", {
    d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
    key: "i0oyt7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Av = U("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hd = U("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = U("Send", [["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
}], ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tv = U("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = U("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ik = U("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = U("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bv = U("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = U("Upload", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "17 8 12 3 7 8",
    key: "t8dd8p"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "3",
    y2: "15",
    key: "widbto"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = U("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uk = U("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = U("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = U("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]]);
function Er({href: e, children: t, icon: n, internal: r, comingSoon: s}) {
    const [i,o] = C.useState(!1)
      , a = u => {
        s && (u.preventDefault(),
        o(!0),
        setTimeout( () => o(!1), 2e3))
    }
      , l = f.jsxs(j.span, {
        className: "relative inline-flex items-center gap-2 px-4 py-2 text-sm hover:-translate-y-0.5 transition-transform",
        whileHover: {
            y: -2
        },
        whileTap: {
            y: 0
        },
        onClick: a,
        children: [n, f.jsx("span", {
            children: t
        }), !r && f.jsx(JP, {
            className: "w-3 h-3 text-white/40"
        }), f.jsx(Ei, {
            children: i && f.jsxs(j.div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 10
                },
                className: "absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-white text-black text-sm rounded-lg whitespace-nowrap",
                children: ["Launching Soon!", f.jsx("div", {
                    className: "absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"
                })]
            })
        })]
    });
    return r ? f.jsx(It, {
        to: e,
        children: l
    }) : f.jsx("a", {
        href: s ? "#" : e,
        target: "_blank",
        rel: "noopener noreferrer",
        className: s ? "cursor-pointer" : "",
        children: l
    })
}
function dk() {
    const t = Qr().pathname === "/docs";
    return f.jsx(j.div, {
        className: "fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10",
        initial: {
            y: -20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            delay: .2
        },
        children: f.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: f.jsxs("div", {
                className: "flex justify-between items-center h-16",
                children: [f.jsx(j.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    children: f.jsx(It, {
                        to: "/",
                        className: "group relative",
                        children: f.jsxs("div", {
                            className: "relative",
                            children: [f.jsx("img", {
                                src: "/images/hammer.png",
                                alt: "hammer",
                                className: "absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 opacity-50"
                            }), f.jsx("span", {
                                className: "text-2xl font-bold text-white pl-6",
                                children: "HAMMER"
                            })]
                        })
                    })
                }), f.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [f.jsx(Er, {
                        href: "/my-agents",
                        icon: f.jsx(lk, {
                            className: "w-4 h-4 text-white/70"
                        }),
                        internal: !0,
                        children: f.jsx("span", {
                            className: "text-white/70 hover:text-white",
                            children: "My Agents"
                        })
                    }), !t && f.jsx(Er, {
                        href: "/docs",
                        icon: f.jsx(_v, {
                            className: "w-4 h-4 text-white/70"
                        }),
                        internal: !0,
                        children: f.jsx("span", {
                            className: "text-white/70 hover:text-white",
                            children: "Docs"
                        })
                    }), f.jsx(Er, {
                        href: "https://x.com/Hammer_Agent_",
                        icon: f.jsx(bv, {
                            className: "w-4 h-4 text-white/70"
                        }),
                        children: f.jsx("span", {
                            className: "text-white/70 hover:text-white",
                            children: "X"
                        })
                    }), f.jsx(Er, {
                        href: "https://pump.fun",
                        icon: f.jsx(Av, {
                            className: "w-4 h-4 text-white/70"
                        }),
                        comingSoon: !0,
                        children: f.jsx("span", {
                            className: "text-white/70 hover:text-white",
                            children: "pump.fun"
                        })
                    })]
                })]
            })
        })
    })
}
function fk() {
    return f.jsxs(j.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "fixed inset-0 bg-black z-50 flex items-center justify-center",
        children: [f.jsxs("div", {
            className: "absolute inset-0",
            children: [f.jsx("div", {
                className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_14px]"
            }), f.jsx(j.div, {
                animate: {
                    opacity: [.1, .15, .1]
                },
                transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                className: "absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#ffffff10,transparent)]"
            })]
        }), f.jsxs("div", {
            className: "relative",
            children: [f.jsx(j.h1, {
                className: "forge-title text-[8rem] sm:text-[12rem] tracking-widest",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                children: "HAMMER"
            }), f.jsxs("div", {
                className: "relative h-0.5 bg-white/10 mt-8 w-[200px] mx-auto overflow-hidden",
                children: [f.jsx(j.div, {
                    className: "absolute inset-0 bg-gradient-to-r from-white/10 via-white to-white/10",
                    animate: {
                        x: ["-100%", "100%"]
                    },
                    transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    }
                }), f.jsx(j.div, {
                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent",
                    animate: {
                        x: ["-200%", "200%"]
                    },
                    transition: {
                        duration: 1.5,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    },
                    style: {
                        opacity: .5
                    }
                })]
            })]
        })]
    })
}
function hk() {
    return f.jsxs(j.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: .6
        },
        className: "flex flex-col sm:flex-row justify-center items-center gap-6 mt-12",
        children: [f.jsx(It, {
            to: "/agents",
            children: f.jsxs(j.button, {
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: .98
                },
                className: "group px-8 py-4 bg-white text-black rounded-xl font-medium inline-flex items-center gap-2",
                children: [f.jsx("span", {
                    children: "Explore Agents"
                }), f.jsx(Wd, {
                    className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                })]
            })
        }), f.jsx(It, {
            to: "/create",
            children: f.jsxs(j.button, {
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: .98
                },
                className: "group px-8 py-4 bg-black border border-white/20 text-white rounded-xl font-medium hover:border-white/40 inline-flex items-center gap-2",
                children: [f.jsx("span", {
                    children: "Create Agent"
                }), f.jsx(kv, {
                    className: "w-4 h-4 group-hover:rotate-90 transition-transform"
                })]
            })
        })]
    })
}
function pk() {
    return f.jsxs("div", {
        className: "relative min-h-screen bg-black pt-16",
        children: [f.jsx("div", {
            className: "absolute inset-0",
            children: f.jsx("div", {
                className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"
            })
        }), f.jsx("div", {
            className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24",
            children: f.jsxs(j.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "text-center space-y-8",
                children: [f.jsxs(j.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .2
                    },
                    className: "relative inline-block",
                    children: [f.jsx("h1", {
                        className: "forge-title text-7xl sm:text-8xl md:text-8xl tracking-tight relative z-10",
                        children: "HAMMER"
                    }), f.jsx("p", {
                        className: "text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mt-8",
                        children: "Create and deploy advanced AI agents with unique personalities"
                    })]
                }), f.jsx(j.div, {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .4
                    },
                    children: [{
                        title: "Custom Agents",
                        description: "Design unique AI personalities"
                    }, {
                        title: "Advanced Learning",
                        description: "Continuous improvement system"
                    }, {
                        title: "Real-time Chat",
                        description: "Natural conversations"
                    }].map( ({title: e, description: t}) => f.jsxs("div", {
                        className: "relative group",
                        children: [f.jsx("div", {
                            className: "absolute inset-0 bg-white/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                        }), f.jsxs("div", {
                            className: "relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6",
                            children: [f.jsx("h3", {
                                className: "text-xl font-semibold text-white mb-2",
                                children: e
                            }), f.jsx("p", {
                                className: "text-white/60",
                                children: t
                            })]
                        })]
                    }, e))
                }), f.jsx(hk, {})]
            })
        })]
    })
}
const mk = [{
    icon: Ev,
    title: "Neural Enhancement",
    description: "Advanced neural networks that adapt and evolve based on interactions"
}, {
    icon: Tv,
    title: "Enterprise Security",
    description: "Military-grade encryption and advanced access control systems"
}, {
    icon: Pv,
    title: "Multi-Agent Synergy",
    description: "Create powerful networks of collaborative AI agents"
}, {
    icon: Zr,
    title: "Custom Personalities",
    description: "Design unique agent personalities for specific use cases"
}, {
    icon: qd,
    title: "Real-time Processing",
    description: "Lightning-fast responses with distributed computing"
}, {
    icon: Kd,
    title: "Advanced Learning",
    description: "Continuous improvement through reinforcement learning"
}];
function gk() {
    return f.jsxs("section", {
        className: "py-20 relative",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ffffff05,transparent)]"
        }), f.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",
            children: [f.jsxs(j.div, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-12",
                children: [f.jsx(j.h2, {
                    initial: {
                        y: 20
                    },
                    whileInView: {
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "forge-title text-4xl mb-4",
                    children: "POWERFUL FEATURES"
                }), f.jsx("p", {
                    className: "text-white/60 max-w-2xl mx-auto text-lg",
                    children: "Harness the power of our advanced AI agents with cutting-edge features"
                })]
            }), f.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: mk.map( (e, t) => f.jsxs(j.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    whileHover: {
                        y: -5
                    },
                    className: "group relative",
                    children: [f.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                    }), f.jsxs("div", {
                        className: "relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm",
                        children: [f.jsx(e.icon, {
                            className: "w-8 h-8 text-white/60 mb-4"
                        }), f.jsx("h3", {
                            className: "text-xl font-semibold text-white mb-2",
                            children: e.title
                        }), f.jsx("p", {
                            className: "text-white/60",
                            children: e.description
                        })]
                    })]
                }, e.title))
            })]
        })]
    })
}
var Gd = {}
  , la = function() {
    return la = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var s in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
        return e
    }
    ,
    la.apply(this, arguments)
}
  , yk = function() {
    function e(t, n, r) {
        var s = this;
        this.endVal = n,
        this.options = r,
        this.version = "2.8.0",
        this.defaults = {
            startVal: 0,
            decimalPlaces: 0,
            duration: 2,
            useEasing: !0,
            useGrouping: !0,
            useIndianSeparators: !1,
            smartEasingThreshold: 999,
            smartEasingAmount: 333,
            separator: ",",
            decimal: ".",
            prefix: "",
            suffix: "",
            enableScrollSpy: !1,
            scrollSpyDelay: 200,
            scrollSpyOnce: !1
        },
        this.finalEndVal = null,
        this.useEasing = !0,
        this.countDown = !1,
        this.error = "",
        this.startVal = 0,
        this.paused = !0,
        this.once = !1,
        this.count = function(i) {
            s.startTime || (s.startTime = i);
            var o = i - s.startTime;
            s.remaining = s.duration - o,
            s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(o, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(o, s.startVal, s.endVal - s.startVal, s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (o / s.duration);
            var a = s.countDown ? s.frameVal < s.endVal : s.frameVal > s.endVal;
            s.frameVal = a ? s.endVal : s.frameVal,
            s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)),
            s.printValue(s.frameVal),
            o < s.duration ? s.rAF = requestAnimationFrame(s.count) : s.finalEndVal !== null ? s.update(s.finalEndVal) : s.options.onCompleteCallback && s.options.onCompleteCallback()
        }
        ,
        this.formatNumber = function(i) {
            var o, a, l, u, d = i < 0 ? "-" : "";
            o = Math.abs(i).toFixed(s.options.decimalPlaces);
            var c = (o += "").split(".");
            if (a = c[0],
            l = c.length > 1 ? s.options.decimal + c[1] : "",
            s.options.useGrouping) {
                u = "";
                for (var h = 3, y = 0, v = 0, w = a.length; v < w; ++v)
                    s.options.useIndianSeparators && v === 4 && (h = 2,
                    y = 1),
                    v !== 0 && y % h == 0 && (u = s.options.separator + u),
                    y++,
                    u = a[w - v - 1] + u;
                a = u
            }
            return s.options.numerals && s.options.numerals.length && (a = a.replace(/[0-9]/g, function(x) {
                return s.options.numerals[+x]
            }),
            l = l.replace(/[0-9]/g, function(x) {
                return s.options.numerals[+x]
            })),
            d + s.options.prefix + a + l + s.options.suffix
        }
        ,
        this.easeOutExpo = function(i, o, a, l) {
            return a * (1 - Math.pow(2, -10 * i / l)) * 1024 / 1023 + o
        }
        ,
        this.options = la(la({}, this.defaults), r),
        this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber,
        this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo,
        this.startVal = this.validateValue(this.options.startVal),
        this.frameVal = this.startVal,
        this.endVal = this.validateValue(n),
        this.options.decimalPlaces = Math.max(this.options.decimalPlaces),
        this.resetDuration(),
        this.options.separator = String(this.options.separator),
        this.useEasing = this.options.useEasing,
        this.options.separator === "" && (this.options.useGrouping = !1),
        this.el = typeof t == "string" ? document.getElementById(t) : t,
        this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined",
        typeof window < "u" && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [],
        window.onScrollFns.push(function() {
            return s.handleScroll(s)
        }),
        window.onscroll = function() {
            window.onScrollFns.forEach(function(i) {
                return i()
            })
        }
        ,
        this.handleScroll(this)))
    }
    return e.prototype.handleScroll = function(t) {
        if (t && window && !t.once) {
            var n = window.innerHeight + window.scrollY
              , r = t.el.getBoundingClientRect()
              , s = r.top + window.pageYOffset
              , i = r.top + r.height + window.pageYOffset;
            i < n && i > window.scrollY && t.paused ? (t.paused = !1,
            setTimeout(function() {
                return t.start()
            }, t.options.scrollSpyDelay),
            t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > i || s > n) && !t.paused && t.reset()
        }
    }
    ,
    e.prototype.determineDirectionAndSmartEasing = function() {
        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t;
        var n = t - this.startVal;
        if (Math.abs(n) > this.options.smartEasingThreshold && this.options.useEasing) {
            this.finalEndVal = t;
            var r = this.countDown ? 1 : -1;
            this.endVal = t + r * this.options.smartEasingAmount,
            this.duration = this.duration / 2
        } else
            this.endVal = t,
            this.finalEndVal = null;
        this.finalEndVal !== null ? this.useEasing = !1 : this.useEasing = this.options.useEasing
    }
    ,
    e.prototype.start = function(t) {
        this.error || (this.options.onStartCallback && this.options.onStartCallback(),
        t && (this.options.onCompleteCallback = t),
        this.duration > 0 ? (this.determineDirectionAndSmartEasing(),
        this.paused = !1,
        this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
    }
    ,
    e.prototype.pauseResume = function() {
        this.paused ? (this.startTime = null,
        this.duration = this.remaining,
        this.startVal = this.frameVal,
        this.determineDirectionAndSmartEasing(),
        this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF),
        this.paused = !this.paused
    }
    ,
    e.prototype.reset = function() {
        cancelAnimationFrame(this.rAF),
        this.paused = !0,
        this.resetDuration(),
        this.startVal = this.validateValue(this.options.startVal),
        this.frameVal = this.startVal,
        this.printValue(this.startVal)
    }
    ,
    e.prototype.update = function(t) {
        cancelAnimationFrame(this.rAF),
        this.startTime = null,
        this.endVal = this.validateValue(t),
        this.endVal !== this.frameVal && (this.startVal = this.frameVal,
        this.finalEndVal == null && this.resetDuration(),
        this.finalEndVal = null,
        this.determineDirectionAndSmartEasing(),
        this.rAF = requestAnimationFrame(this.count))
    }
    ,
    e.prototype.printValue = function(t) {
        var n;
        if (this.el) {
            var r = this.formattingFn(t);
            !((n = this.options.plugin) === null || n === void 0) && n.render ? this.options.plugin.render(this.el, r) : this.el.tagName === "INPUT" ? this.el.value = r : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = r : this.el.innerHTML = r
        }
    }
    ,
    e.prototype.ensureNumber = function(t) {
        return typeof t == "number" && !isNaN(t)
    }
    ,
    e.prototype.validateValue = function(t) {
        var n = Number(t);
        return this.ensureNumber(n) ? n : (this.error = "[CountUp] invalid start or end value: ".concat(t),
        null)
    }
    ,
    e.prototype.resetDuration = function() {
        this.startTime = null,
        this.duration = 1e3 * Number(this.options.duration),
        this.remaining = this.duration
    }
    ,
    e
}();
const vk = Object.freeze(Object.defineProperty({
    __proto__: null,
    CountUp: yk
}, Symbol.toStringTag, {
    value: "Module"
}))
  , wk = Kw(vk);
Object.defineProperty(Gd, "__esModule", {
    value: !0
});
var ye = C
  , xk = wk;
function Sk(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
        var r, s, i, o, a = [], l = !0, u = !1;
        try {
            if (i = (n = n.call(e)).next,
            t !== 0)
                for (; !(l = (r = i.call(n)).done) && (a.push(r.value),
                a.length !== t); l = !0)
                    ;
        } catch (d) {
            u = !0,
            s = d
        } finally {
            try {
                if (!l && n.return != null && (o = n.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw s
            }
        }
        return a
    }
}
function nm(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(s) {
            return Object.getOwnPropertyDescriptor(e, s).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function ua(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? nm(Object(n), !0).forEach(function(r) {
            Ek(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nm(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Ck(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function _k(e) {
    var t = Ck(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
function Ek(e, t, n) {
    return t = _k(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Ju() {
    return Ju = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ju.apply(this, arguments)
}
function Pk(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), s, i;
    for (i = 0; i < r.length; i++)
        s = r[i],
        !(t.indexOf(s) >= 0) && (n[s] = e[s]);
    return n
}
function Nv(e, t) {
    if (e == null)
        return {};
    var n = Pk(e, t), r, s;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (s = 0; s < i.length; s++)
            r = i[s],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function kk(e, t) {
    return Ak(e) || Sk(e, t) || Tk(e, t) || bk()
}
function Ak(e) {
    if (Array.isArray(e))
        return e
}
function Tk(e, t) {
    if (e) {
        if (typeof e == "string")
            return rm(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return rm(e, t)
    }
}
function rm(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function bk() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Nk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ye.useLayoutEffect : ye.useEffect;
function ht(e) {
    var t = ye.useRef(e);
    return Nk(function() {
        t.current = e
    }),
    ye.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
            r[s] = arguments[s];
        return t.current.apply(void 0, r)
    }, [])
}
var jk = function(t, n) {
    var r = n.decimal
      , s = n.decimals
      , i = n.duration
      , o = n.easingFn
      , a = n.end
      , l = n.formattingFn
      , u = n.numerals
      , d = n.prefix
      , c = n.separator
      , h = n.start
      , y = n.suffix
      , v = n.useEasing
      , w = n.useGrouping
      , x = n.useIndianSeparators
      , m = n.enableScrollSpy
      , p = n.scrollSpyDelay
      , g = n.scrollSpyOnce
      , S = n.plugin;
    return new xk.CountUp(t,a,{
        startVal: h,
        duration: i,
        decimal: r,
        decimalPlaces: s,
        easingFn: o,
        formattingFn: l,
        numerals: u,
        separator: c,
        prefix: d,
        suffix: y,
        plugin: S,
        useEasing: v,
        useIndianSeparators: x,
        useGrouping: w,
        enableScrollSpy: m,
        scrollSpyDelay: p,
        scrollSpyOnce: g
    })
}
  , Rk = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"]
  , Mk = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: !0,
    enableReinitialize: !0,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1
}
  , jv = function(t) {
    var n = Object.fromEntries(Object.entries(t).filter(function(N) {
        var T = kk(N, 2)
          , I = T[1];
        return I !== void 0
    }))
      , r = ye.useMemo(function() {
        return ua(ua({}, Mk), n)
    }, [t])
      , s = r.ref
      , i = r.startOnMount
      , o = r.enableReinitialize
      , a = r.delay
      , l = r.onEnd
      , u = r.onStart
      , d = r.onPauseResume
      , c = r.onReset
      , h = r.onUpdate
      , y = Nv(r, Rk)
      , v = ye.useRef()
      , w = ye.useRef()
      , x = ye.useRef(!1)
      , m = ht(function() {
        return jk(typeof s == "string" ? s : s.current, y)
    })
      , p = ht(function(N) {
        var T = v.current;
        if (T && !N)
            return T;
        var I = m();
        return v.current = I,
        I
    })
      , g = ht(function() {
        var N = function() {
            return p(!0).start(function() {
                l == null || l({
                    pauseResume: S,
                    reset: _,
                    start: P,
                    update: E
                })
            })
        };
        a && a > 0 ? w.current = setTimeout(N, a * 1e3) : N(),
        u == null || u({
            pauseResume: S,
            reset: _,
            update: E
        })
    })
      , S = ht(function() {
        p().pauseResume(),
        d == null || d({
            reset: _,
            start: P,
            update: E
        })
    })
      , _ = ht(function() {
        p().el && (w.current && clearTimeout(w.current),
        p().reset(),
        c == null || c({
            pauseResume: S,
            start: P,
            update: E
        }))
    })
      , E = ht(function(N) {
        p().update(N),
        h == null || h({
            pauseResume: S,
            reset: _,
            start: P
        })
    })
      , P = ht(function() {
        _(),
        g()
    })
      , k = ht(function(N) {
        i && (N && _(),
        g())
    });
    return ye.useEffect(function() {
        x.current ? o && k(!0) : (x.current = !0,
        k())
    }, [o, x, k, a, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.formattingFn]),
    ye.useEffect(function() {
        return function() {
            _()
        }
    }, [_]),
    {
        start: P,
        pauseResume: S,
        reset: _,
        update: E,
        getCountUp: p
    }
}
  , Ik = ["className", "redraw", "containerProps", "children", "style"]
  , Lk = function(t) {
    var n = t.className
      , r = t.redraw
      , s = t.containerProps
      , i = t.children
      , o = t.style
      , a = Nv(t, Ik)
      , l = ye.useRef(null)
      , u = ye.useRef(!1)
      , d = jv(ua(ua({}, a), {}, {
        ref: l,
        startOnMount: typeof i != "function" || t.delay === 0,
        enableReinitialize: !1
    }))
      , c = d.start
      , h = d.reset
      , y = d.update
      , v = d.pauseResume
      , w = d.getCountUp
      , x = ht(function() {
        c()
    })
      , m = ht(function(S) {
        t.preserveValue || h(),
        y(S)
    })
      , p = ht(function() {
        if (typeof t.children == "function" && !(l.current instanceof Element)) {
            console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);
            return
        }
        w()
    });
    ye.useEffect(function() {
        p()
    }, [p]),
    ye.useEffect(function() {
        u.current && m(t.end)
    }, [t.end, m]);
    var g = r && t;
    return ye.useEffect(function() {
        r && u.current && x()
    }, [x, r, g]),
    ye.useEffect(function() {
        !r && u.current && x()
    }, [x, r, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.className, t.formattingFn]),
    ye.useEffect(function() {
        u.current = !0
    }, []),
    typeof i == "function" ? i({
        countUpRef: l,
        start: c,
        reset: h,
        update: y,
        pauseResume: v,
        getCountUp: w
    }) : ye.createElement("span", Ju({
        className: n,
        ref: l,
        style: o
    }, s), typeof t.start < "u" ? w().formattingFn(t.start) : "")
}
  , Ok = Gd.default = Lk;
Gd.useCountUp = jv;
const Dk = [{
    icon: QP,
    title: "Neural Processing",
    stats: [{
        value: 500,
        suffix: "ms",
        label: "Avg Response Time"
    }, {
        value: 95,
        suffix: "%",
        label: "Accuracy Rate"
    }],
    features: ["Advanced language models", "Context-aware responses", "Real-time processing"]
}, {
    icon: Pv,
    title: "Multi-Agent System",
    stats: [{
        value: 6,
        label: "Agent Types"
    }, {
        value: 99,
        suffix: "%",
        label: "Uptime"
    }],
    features: ["Inter-agent communication", "Task distribution", "Parallel processing"]
}, {
    icon: tk,
    title: "Security Protocol",
    stats: [{
        value: 256,
        label: "Bit Encryption"
    }, {
        value: 100,
        suffix: "%",
        label: "Data Protection"
    }],
    features: ["End-to-end encryption", "Access control", "Audit logging"]
}];
function Fk() {
    return f.jsxs("section", {
        className: "py-32 relative overflow-hidden",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#ffffff05,transparent)]"
        }), f.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",
            children: [f.jsxs(j.div, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [f.jsx(j.h2, {
                    initial: {
                        y: 20
                    },
                    whileInView: {
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "forge-title text-4xl mb-4",
                    children: "TECHNOLOGY SHOWCASE"
                }), f.jsx("p", {
                    className: "text-white/60 max-w-2xl mx-auto text-lg",
                    children: "Explore the advanced technologies powering our AI agents"
                })]
            }), f.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: Dk.map( (e, t) => f.jsxs(j.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    className: "relative group",
                    children: [f.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                    }), f.jsxs("div", {
                        className: "relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm",
                        children: [f.jsx(e.icon, {
                            className: "w-8 h-8 text-white/60 mb-4"
                        }), f.jsx("h3", {
                            className: "text-xl font-semibold text-white mb-6",
                            children: e.title
                        }), f.jsx("div", {
                            className: "grid grid-cols-2 gap-4 mb-6",
                            children: e.stats.map( (n, r) => f.jsxs("div", {
                                className: "text-center",
                                children: [f.jsx("div", {
                                    className: "text-2xl font-bold text-white mb-1",
                                    children: f.jsx(Ok, {
                                        end: n.value,
                                        suffix: n.suffix,
                                        duration: 2
                                    })
                                }), f.jsx("div", {
                                    className: "text-sm text-white/60",
                                    children: n.label
                                })]
                            }, r))
                        }), f.jsx("ul", {
                            className: "space-y-2",
                            children: e.features.map( (n, r) => f.jsxs("li", {
                                className: "text-white/70 text-sm flex items-center gap-2",
                                children: [f.jsx("div", {
                                    className: "w-1 h-1 bg-white/40 rounded-full"
                                }), n]
                            }, r))
                        })]
                    })]
                }, e.title))
            })]
        })]
    })
}
const Vk = [{
    quote: "The agent's natural language processing capabilities have significantly improved our customer interactions.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "AI Solutions Inc",
    rating: 5
}, {
    quote: "We've seen measurable improvements in response accuracy and task completion rates.",
    author: "Michael Rodriguez",
    role: "Technical Lead",
    company: "DataFlow Systems",
    rating: 5
}, {
    quote: "The platform's ability to handle complex queries while maintaining context is impressive.",
    author: "Emma Thompson",
    role: "AI Researcher",
    company: "Tech Institute",
    rating: 5
}];
function Bk() {
    return f.jsxs("section", {
        className: "py-32 relative overflow-hidden",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#ffffff05,transparent)]"
        }), f.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",
            children: [f.jsxs(j.div, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [f.jsx(j.h2, {
                    initial: {
                        y: 20
                    },
                    whileInView: {
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "forge-title text-4xl mb-4",
                    children: "USER EXPERIENCES"
                }), f.jsx("p", {
                    className: "text-white/60 max-w-2xl mx-auto text-lg",
                    children: "See how others are using our AI agents in their projects"
                })]
            }), f.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: Vk.map( (e, t) => f.jsxs(j.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    className: "relative group",
                    children: [f.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                    }), f.jsxs("div", {
                        className: "relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm",
                        children: [f.jsx("div", {
                            className: "flex gap-1 mb-4",
                            children: [...Array(e.rating)].map( (n, r) => f.jsx(ik, {
                                className: "w-4 h-4 fill-yellow-500 text-yellow-500"
                            }, r))
                        }), f.jsxs("p", {
                            className: "text-white/80 mb-6 text-lg",
                            children: ['"', e.quote, '"']
                        }), f.jsxs("div", {
                            children: [f.jsx("p", {
                                className: "font-medium text-white",
                                children: e.author
                            }), f.jsx("p", {
                                className: "text-white/60 text-sm",
                                children: e.role
                            }), f.jsx("p", {
                                className: "text-white/40 text-sm",
                                children: e.company
                            })]
                        })]
                    })]
                }, e.author))
            })]
        })]
    })
}
function $k() {
    return f.jsxs("section", {
        className: "py-32 relative overflow-hidden",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff05,transparent)]"
        }), f.jsx("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative",
            children: f.jsxs(j.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center space-y-8",
                children: [f.jsx(j.h2, {
                    initial: {
                        y: 20
                    },
                    whileInView: {
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "forge-title text-5xl",
                    children: "START BUILDING TODAY"
                }), f.jsx("p", {
                    className: "text-white/60 text-xl max-w-2xl mx-auto",
                    children: "Create your first AI agent in minutes and experience the power of neural-enhanced artificial intelligence"
                }), f.jsx(j.div, {
                    className: "pt-8",
                    children: f.jsx(It, {
                        to: "/create",
                        children: f.jsxs(j.button, {
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: .98
                            },
                            className: "group px-8 py-4 bg-white text-black rounded-xl font-medium inline-flex items-center gap-2",
                            children: ["Create Your Agent", f.jsx(Wd, {
                                className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    })
                })]
            })
        })]
    })
}
const Uk = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};
function Gn({children: e}) {
    return f.jsx(j.div, {
        variants: Uk,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: .3
        },
        className: "fixed inset-0 bg-black overflow-y-auto",
        children: e
    })
}
function zk() {
    return f.jsx(Gn, {
        children: f.jsxs("div", {
            className: "min-h-screen bg-black text-white",
            children: [f.jsx(pk, {}), f.jsx(gk, {}), f.jsx(Fk, {}), f.jsx(Bk, {}), f.jsx($k, {})]
        })
    })
}
const Wk = {
    id: "introduction",
    title: "Introduction",
    content: [{
        type: "text",
        content: "Hammer is a powerful platform for creating and managing AI agents enhanced with neural networks. Our platform enables you to build sophisticated AI solutions with customizable personalities, specialized capabilities, and seamless chat interactions."
    }, {
        type: "text",
        content: `Key Features:

- Custom AI Agent Creation
- Neural Network Enhancement
- Real-time Chat Interface
- Local Data Persistence
- Rate Protection
- Image Management`
    }]
}
  , Hk = {
    id: "quickstart",
    title: "Quick Start",
    content: [{
        type: "text",
        content: "Get started with Hammer in minutes. Follow these steps to create your first AI agent:"
    }, {
        type: "code",
        language: "typescript",
        fileName: "CreateAgent.tsx",
        content: `import { useAgentCreation } from '../hooks/useAgentCreation';

// Initialize agent creation
const { createAgent } = useAgentCreation();

// Create a new agent
const newAgent = await createAgent({
  name: "Atlas",
  purpose: "Data Analysis",
  personality: "Analytical and precise",
  traits: ["Logical", "Methodical", "Thorough"],
  specialization: "Pattern Recognition",
  tone: "professional",
  learningStyle: "adaptive",
  responseLength: "balanced"
});`,
        description: "Basic agent creation example"
    }]
}
  , Kk = {
    id: "installation",
    title: "Installation",
    content: [{
        type: "text",
        content: "Hammer is a web-based platform that requires no installation. Simply visit the platform and start creating agents. However, if you want to integrate Hammer into your own application, you'll need an OpenAI API key."
    }, {
        type: "code",
        language: "typescript",
        fileName: ".env",
        content: "VITE_OPENAI_API_KEY=your-api-key-here",
        description: "Environment configuration"
    }]
}
  , qk = {
    id: "agent-creation",
    title: "Agent Creation",
    content: [{
        type: "text",
        content: `Create custom AI agents with unique personalities, capabilities, and appearances. The agent creation process includes:

- Name and purpose definition
- Personality trait selection
- Communication style configuration
- Custom image upload
- Learning style preferences`
    }, {
        type: "code",
        language: "typescript",
        fileName: "createAgent.ts",
        content: `const { createAgent } = useAgentCreation();

const newAgent = await createAgent({
  name: "Atlas",
  purpose: "Data Analysis",
  personality: "Analytical and precise",
  traits: ["Logical", "Methodical", "Thorough"],
  specialization: "Pattern Recognition",
  tone: "professional",
  learningStyle: "adaptive",
  responseLength: "balanced",
  imageUrl: "custom-image-url.jpg"
});`,
        description: "Agent creation example"
    }]
}
  , Gk = {
    id: "agent-customization",
    title: "Agent Customization",
    content: [{
        type: "text",
        content: `Customize your agents with various attributes:

- Profile image upload (max 5MB)
- Personality traits (up to 3)
- Communication style preferences
- Learning approach configuration
- Response length settings`
    }, {
        type: "code",
        language: "typescript",
        fileName: "ImageUpload.tsx",
        content: `const ImageUpload = ({ onImageSelect }) => {
  const handleImageSelect = (file) => {
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('Image must be less than 5MB');
    }
    // Process and upload image
    const reader = new FileReader();
    reader.onloadend = () => onImageSelect(reader.result);
    reader.readAsDataURL(file);
  };
};`,
        description: "Image upload component"
    }]
}
  , Xk = {
    id: "chat-system",
    title: "Chat System",
    content: [{
        type: "text",
        content: `The chat system features:

- Real-time message updates
- Local storage persistence
- Rate limiting (10 messages/minute)
- Typing indicators
- Error handling
- Message formatting`
    }, {
        type: "code",
        language: "typescript",
        fileName: "chatSystem.ts",
        content: `// Chat hooks
const useChatMessages = (agentId: string) => {
  const storageKey = \`forge_chat_messages_\${agentId}\`;
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Load messages from storage
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setMessages(JSON.parse(stored));
  }, []);

  // Save messages to storage
  const addMessage = (message: ChatMessage) => {
    setMessages(prev => {
      const updated = [...prev, message];
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  return { messages, addMessage };
};`,
        description: "Chat system implementation"
    }]
}
  , Yk = {
    id: "my-agents",
    title: "My Agents",
    content: [{
        type: "text",
        content: `The My Agents section allows you to manage your custom-created AI agents. Features include:

- View all custom agents
- Delete unwanted agents
- Access agent chat interfaces
- Manage agent profiles
- Track agent performance`
    }, {
        type: "code",
        language: "typescript",
        fileName: "useCustomAgents.ts",
        content: `import { useAgent } from '../context/AgentContext';

export function useCustomAgents() {
  const { customAgents, removeCustomAgent } = useAgent();

  // Filter agents by search term
  const filteredAgents = customAgents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm) ||
    agent.type.toLowerCase().includes(searchTerm)
  );

  // Delete an agent
  const deleteAgent = (agentName: string) => {
    if (window.confirm('Are you sure?')) {
      removeCustomAgent(agentName);
    }
  };

  return { 
    agents: filteredAgents,
    deleteAgent
  };
}`,
        description: "Custom agents management hook"
    }, {
        type: "code",
        language: "typescript",
        fileName: "AgentStorage.ts",
        content: `const STORAGE_KEY = 'forge_custom_agents';

// Load agents from storage
const loadAgents = (): Agent[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save agent to storage
const saveAgent = (agent: Agent) => {
  const agents = loadAgents();
  const updated = [...agents, agent];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

// Remove agent from storage
const removeAgent = (agentName: string) => {
  const agents = loadAgents();
  const filtered = agents.filter(a => a.name !== agentName);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};`,
        description: "Agent storage utilities"
    }]
}
  , Qk = {
    id: "api-security",
    title: "API Security",
    content: [{
        type: "text",
        content: `Hammer implements multiple security measures to protect your agents and data:

- API Key Validation
- Request/Response Validation
- Error Handling
- Rate Limiting
- Data Sanitization`
    }, {
        type: "code",
        language: "typescript",
        fileName: "security.ts",
        content: `// API key validation
const validateApiKey = (apiKey?: string) => {
  if (!apiKey?.startsWith('sk-')) {
    throw new Error('Invalid API key format');
  }
};

// Request validation
const validateRequest = (messages: ChatMessage[]) => {
  if (!messages.length) {
    throw new Error('No messages provided');
  }
  messages.forEach(msg => {
    if (!msg.content || !msg.sender) {
      throw new Error('Invalid message format');
    }
  });
};`,
        description: "Security implementation"
    }]
}
  , Jk = {
    id: "rate-protection",
    title: "Rate Protection",
    content: [{
        type: "text",
        content: `Rate protection in Hammer includes:

- Message Limits (10/minute)
- Cooldown Periods
- Visual Indicators
- Error Handling
- Local Storage Tracking`
    }, {
        type: "code",
        language: "typescript",
        fileName: "rateLimiter.ts",
        content: `export class RateLimiter {
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number, windowMs: number) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  check(userId: string): boolean {
    const now = Date.now();
    const requests = this.getStoredRequests();
    
    if (requests.length >= this.maxRequests) {
      const oldestRequest = requests[0];
      const timeUntilReset = oldestRequest + this.windowMs - now;
      throw new RateLimitError(timeUntilReset);
    }
    
    this.storeRequest(now);
    return true;
  }
}`,
        description: "Rate limiting implementation"
    }]
}
  , Zk = {
    id: "data-storage",
    title: "Data Storage",
    content: [{
        type: "text",
        content: `Hammer uses local storage for data persistence:

- Agent Profiles
- Chat Histories
- User Preferences
- Rate Limit Tracking
- Image Data (Base64)`
    }, {
        type: "code",
        language: "typescript",
        fileName: "storage.ts",
        content: `const STORAGE_KEYS = {
  AGENTS: 'forge_custom_agents',
  CHAT_PREFIX: 'forge_chat_messages_',
  RATE_LIMIT: 'chat_rate_limit_v1'
};

// Agent storage
const saveAgent = (agent: Agent) => {
  const agents = loadAgents();
  const updated = [...agents, agent];
  localStorage.setItem(STORAGE_KEYS.AGENTS, JSON.stringify(updated));
};

// Chat storage
const saveChatMessage = (agentId: string, message: ChatMessage) => {
  const key = \`\${STORAGE_KEYS.CHAT_PREFIX}\${agentId}\`;
  const messages = loadChatMessages(agentId);
  localStorage.setItem(key, JSON.stringify([...messages, message]));
};`,
        description: "Storage implementation"
    }]
}
  , eA = {
    id: "image-handling",
    title: "Image Handling",
    content: [{
        type: "text",
        content: `Image handling in Hammer includes:

- Base64 Image Encoding
- Size Validation (max 5MB)
- Type Validation (image/* only)
- Preview Generation
- Local Storage Persistence`
    }, {
        type: "code",
        language: "typescript",
        fileName: "imageUtils.ts",
        content: `// Image validation
const validateImage = (file: File) => {
  if (!file.type.startsWith('image/')) {
    throw new Error('Please select an image file');
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image must be less than 5MB');
  }
};

// Image processing
const processImage = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
};`,
        description: "Image handling utilities"
    }]
}
  , tA = [{
    title: "Getting Started",
    icon: _v,
    items: [{
        id: "introduction",
        title: "Introduction"
    }, {
        id: "quickstart",
        title: "Quick Start"
    }, {
        id: "installation",
        title: "Installation"
    }]
}, {
    title: "Core Features",
    icon: rk,
    items: [{
        id: "agent-creation",
        title: "Agent Creation"
    }, {
        id: "agent-customization",
        title: "Agent Customization"
    }, {
        id: "chat-system",
        title: "Chat System"
    }, {
        id: "my-agents",
        title: "My Agents"
    }]
}, {
    title: "Security",
    icon: Tv,
    items: [{
        id: "api-security",
        title: "API Security"
    }, {
        id: "rate-protection",
        title: "Rate Protection"
    }]
}, {
    title: "Data Management",
    icon: ZP,
    items: [{
        id: "data-storage",
        title: "Data Storage"
    }, {
        id: "image-handling",
        title: "Image Handling"
    }]
}]
  , Rv = [Wk, Hk, Kk, qk, Gk, Xk, Yk, Qk, Jk, Zk, eA];
function nA() {
    const e = (t, n) => {
        t.preventDefault();
        const r = document.getElementById(n);
        r && (r.scrollIntoView({
            behavior: "smooth"
        }),
        window.history.pushState({}, "", `#${n}`))
    }
    ;
    return C.useEffect( () => {
        const t = window.location.hash.slice(1);
        if (t) {
            const n = document.getElementById(t);
            n && setTimeout( () => {
                n.scrollIntoView({
                    behavior: "smooth"
                })
            }
            , 100)
        }
    }
    , []),
    f.jsx(j.div, {
        className: "px-6 py-8 space-y-10",
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: .5,
            delay: .2
        },
        children: tA.map( (t, n) => {
            const r = t.icon;
            return f.jsxs(j.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .3,
                    delay: .1 * n
                },
                children: [f.jsxs("div", {
                    className: "flex items-center gap-2 text-sm font-semibold text-white/80 mb-4",
                    children: [f.jsx(r, {
                        className: "w-4 h-4"
                    }), f.jsx("span", {
                        children: t.title
                    })]
                }), f.jsx("ul", {
                    className: "space-y-2 pl-6 border-l border-white/10",
                    children: t.items.map(s => f.jsx(j.li, {
                        whileHover: {
                            x: 4
                        },
                        transition: {
                            duration: .2
                        },
                        children: f.jsx("a", {
                            href: `#${s.id}`,
                            onClick: i => e(i, s.id),
                            className: "text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all block py-2 px-3 rounded-md",
                            children: s.title
                        })
                    }, s.id))
                })]
            }, t.title)
        }
        )
    })
}
function rA({code: e, language: t, fileName: n, description: r}) {
    const [s,i] = C.useState(!1)
      , o = async () => {
        await navigator.clipboard.writeText(e),
        i(!0),
        setTimeout( () => i(!1), 2e3)
    }
    ;
    return f.jsxs("div", {
        className: "rounded-xl overflow-hidden border border-white/10",
        children: [(n || r) && f.jsxs("div", {
            className: "bg-white/5 px-4 py-2 border-b border-white/10",
            children: [n && f.jsx("span", {
                className: "text-sm font-medium text-white/80",
                children: n
            }), r && f.jsx("p", {
                className: "text-sm text-white/60 mt-1",
                children: r
            })]
        }), f.jsxs("div", {
            className: "relative group",
            children: [f.jsx("div", {
                className: "absolute right-4 top-4 z-10",
                children: f.jsx(j.button, {
                    onClick: o,
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    className: "p-2 rounded-lg bg-black/10 hover:bg-black/20 transition-colors",
                    children: s ? f.jsx(XP, {
                        className: "w-4 h-4 text-green-600"
                    }) : f.jsx(YP, {
                        className: "w-4 h-4 text-black/60"
                    })
                })
            }), f.jsx("pre", {
                className: "bg-white text-black p-4 overflow-x-auto",
                children: f.jsx("code", {
                    className: `language-${t}`,
                    children: e
                })
            })]
        })]
    })
}
function sA() {
    const e = C.useRef(null);
    return C.useEffect( () => {
        const t = new IntersectionObserver(r => {
            r.forEach(s => {
                if (s.isIntersecting) {
                    const i = s.target.id;
                    window.history.replaceState({}, "", `#${i}`)
                }
            }
            )
        }
        ,{
            rootMargin: "-20% 0px -80% 0px"
        });
        return document.querySelectorAll("section[id]").forEach(r => t.observe(r)),
        () => t.disconnect()
    }
    , []),
    f.jsx("div", {
        className: "max-w-4xl mx-auto px-8 py-12",
        ref: e,
        children: f.jsx("div", {
            className: "prose prose-invert max-w-none",
            children: Rv.map(t => f.jsxs(j.section, {
                id: t.id,
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0,
                    margin: "-100px"
                },
                className: "mb-24 scroll-mt-24",
                children: [f.jsx(j.h2, {
                    className: "text-4xl font-bold mb-8 text-white",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: t.title
                }), f.jsx("div", {
                    className: "space-y-8",
                    children: t.content.map( (n, r) => f.jsxs(j.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: r * .1
                        },
                        className: "space-y-4",
                        children: [n.type === "text" && f.jsx("p", {
                            className: "text-white/80 leading-relaxed text-lg",
                            children: n.content
                        }), n.type === "code" && f.jsx(rA, {
                            code: n.content,
                            language: n.language || "typescript",
                            fileName: n.fileName,
                            description: n.description
                        })]
                    }, r))
                })]
            }, t.id))
        })
    })
}
function iA() {
    const [e,t] = C.useState("")
      , n = C.useMemo( () => {
        if (!e.trim())
            return [];
        const s = e.toLowerCase()
          , i = [];
        return Rv.forEach(o => {
            o.content.forEach(a => {
                (a.content.toLowerCase().includes(s) || o.title.toLowerCase().includes(s)) && i.push({
                    id: o.id,
                    title: o.title,
                    content: a.content.substring(0, 150) + "...",
                    sectionTitle: o.title
                })
            }
            )
        }
        ),
        i
    }
    , [e])
      , r = C.useCallback(s => {
        t(s)
    }
    , []);
    return {
        searchTerm: e,
        setSearchTerm: r,
        searchResults: n,
        hasResults: n.length > 0
    }
}
function oA({results: e, onResultClick: t, searchTerm: n}) {
    return n ? f.jsx(Ei, {
        children: n && f.jsx(j.div, {
            initial: {
                opacity: 0,
                y: -10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -10
            },
            className: "absolute top-full left-0 right-0 mt-2 bg-black border border-white/10 rounded-lg shadow-xl overflow-hidden",
            children: e.length > 0 ? f.jsx("div", {
                className: "max-h-96 overflow-y-auto",
                children: e.map( (r, s) => f.jsxs(j.button, {
                    onClick: () => t(r.id),
                    className: "w-full text-left p-4 hover:bg-white/5 border-b border-white/5 last:border-0",
                    whileHover: {
                        x: 4
                    },
                    children: [f.jsx("h4", {
                        className: "text-white font-medium mb-1",
                        children: r.title
                    }), f.jsx("p", {
                        className: "text-white/60 text-sm line-clamp-2",
                        children: r.content
                    })]
                }, `${r.id}-${s}`))
            }) : f.jsxs("div", {
                className: "p-4 text-center",
                children: [f.jsx(Hd, {
                    className: "w-5 h-5 text-white/40 mx-auto mb-2"
                }), f.jsxs("p", {
                    className: "text-white/60",
                    children: ['No results found for "', n, '"']
                })]
            })
        })
    }) : null
}
function aA({onResultClick: e}) {
    const {searchTerm: t, setSearchTerm: n, searchResults: r} = iA()
      , s = C.useRef(null);
    return C.useEffect( () => {
        const i = o => {
            var a, l;
            (o.metaKey || o.ctrlKey) && o.key === "k" && (o.preventDefault(),
            (a = s.current) == null || a.focus()),
            o.key === "Escape" && (n(""),
            (l = s.current) == null || l.blur())
        }
        ;
        return window.addEventListener("keydown", i),
        () => window.removeEventListener("keydown", i)
    }
    , [n]),
    f.jsxs("div", {
        className: "relative max-w-md w-full",
        children: [f.jsxs(j.div, {
            initial: {
                opacity: 0,
                y: -10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "relative",
            children: [f.jsx("input", {
                ref: s,
                type: "text",
                value: t,
                onChange: i => n(i.target.value),
                placeholder: "Search documentation... (⌘K)",
                className: "w-full px-4 py-2 pl-10 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 text-white placeholder-white/40"
            }), f.jsx(Hd, {
                className: "w-4 h-4 text-white/40 absolute left-3 top-3"
            }), f.jsxs("div", {
                className: "absolute right-3 top-2 hidden sm:flex items-center gap-1",
                children: [f.jsx("kbd", {
                    className: "px-1.5 py-0.5 text-xs text-white/40 bg-white/5 rounded-md border border-white/10",
                    children: "⌘"
                }), f.jsx("kbd", {
                    className: "px-1.5 py-0.5 text-xs text-white/40 bg-white/5 rounded-md border border-white/10",
                    children: "K"
                })]
            })]
        }), f.jsx(oA, {
            results: r,
            onResultClick: e,
            searchTerm: t
        })]
    })
}
function lA({onSearchResultClick: e}) {
    return f.jsx("div", {
        className: "fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10",
        children: f.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: f.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [f.jsxs(It, {
                    to: "/",
                    className: "flex items-center gap-2 text-white/70 hover:text-white group",
                    children: [f.jsx(aa, {
                        className: "w-4 h-4 group-hover:-translate-x-1 transition-transform"
                    }), f.jsx("span", {
                        children: "Back to Home"
                    })]
                }), f.jsx("div", {
                    className: "flex-1 max-w-xl mx-4",
                    children: f.jsx(aA, {
                        onResultClick: e
                    })
                }), f.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [f.jsx(Er, {
                        href: "https://x.com/Hammer_Agent_",
                        icon: f.jsx(bv, {
                            className: "w-4 h-4 text-white/70"
                        }),
                        children: f.jsx("span", {
                            className: "text-white/70 hover:text-white",
                            children: "X"
                        })
                    }), f.jsx(Er, {
                        href: "https://pump.fun",
                        icon: f.jsx(Av, {
                            className: "w-4 h-4 text-white/70"
                        }),
                        comingSoon: !0,
                        children: f.jsx("span", {
                            className: "text-white/70 hover:text-white",
                            children: "pump.fun"
                        })
                    })]
                })]
            })
        })
    })
}
function uA() {
    const e = C.useCallback(t => {
        const n = document.getElementById(t);
        n && (n.scrollIntoView({
            behavior: "smooth"
        }),
        window.history.pushState({}, "", `#${t}`))
    }
    , []);
    return f.jsxs("div", {
        className: "min-h-screen bg-black",
        children: [f.jsx(lA, {
            onSearchResultClick: e
        }), f.jsxs("div", {
            className: "flex",
            children: [f.jsx("div", {
                className: "fixed inset-y-16 left-0 w-72 border-r border-white/10 overflow-y-auto bg-black",
                children: f.jsx(nA, {})
            }), f.jsx("div", {
                className: "flex-1 ml-72 pt-16",
                children: f.jsx(sA, {})
            })]
        })]
    })
}
function cA() {
    return f.jsx(Gn, {
        children: f.jsx(uA, {})
    })
}
function Xd({to: e, label: t="Back"}) {
    return f.jsx(It, {
        to: e,
        children: f.jsxs(j.div, {
            className: "inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors group",
            whileHover: {
                x: -4
            },
            whileTap: {
                x: 0
            },
            children: [f.jsx(aa, {
                className: "w-4 h-4 transition-transform group-hover:-translate-x-1"
            }), f.jsx("span", {
                className: "font-medium",
                children: t
            })]
        })
    })
}
function dA() {
    return f.jsxs("div", {
        className: "mb-12",
        children: [f.jsx(Xd, {
            to: "/"
        }), f.jsxs(j.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "text-center mt-8",
            children: [f.jsx("h1", {
                className: "forge-title text-4xl",
                children: "AI AGENTS"
            }), f.jsx("p", {
                className: "text-white/60 max-w-2xl mx-auto text-lg",
                children: "Explore our collection of specialized AI agents, each designed with unique capabilities and expertise"
            })]
        })]
    })
}
function Mv({name: e, type: t, description: n, powerLevel: r, speciality: s, imageUrl: i, showDelete: o=!1}) {
    const {removeCustomAgent: a} = Da()
      , l = u => {
        u.preventDefault(),
        window.confirm("Are you sure you want to delete this agent?") && a(e)
    }
    ;
    return f.jsx(It, {
        to: `/agent/${e.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
        children: f.jsxs(j.div, {
            whileHover: {
                y: -5
            },
            className: "group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300",
            children: [o && f.jsx(j.button, {
                onClick: l,
                className: "absolute top-4 right-4 z-30 p-2 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/50",
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: .9
                },
                children: f.jsx(ok, {
                    className: "w-4 h-4 text-white"
                })
            }), f.jsxs("div", {
                className: "relative h-48 overflow-hidden",
                children: [f.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"
                }), f.jsx("img", {
                    src: i,
                    alt: e,
                    className: "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                }), f.jsx("div", {
                    className: "absolute top-4 left-4 z-20",
                    children: f.jsx("div", {
                        className: "bg-black/50 backdrop-blur-sm p-2 rounded-full",
                        children: f.jsx(Zr, {
                            className: "w-5 h-5 text-white"
                        })
                    })
                })]
            }), f.jsxs("div", {
                className: "p-6 space-y-4",
                children: [f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "text-xl font-semibold text-white group-hover:text-white/80 transition-colors",
                        children: e
                    }), f.jsx("p", {
                        className: "text-sm text-white/60 mt-1",
                        children: t
                    })]
                }), f.jsx("p", {
                    className: "text-sm text-white/70 line-clamp-2",
                    children: n
                }), f.jsxs("div", {
                    className: "pt-4 border-t border-white/10 space-y-3",
                    children: [f.jsxs("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [f.jsx("span", {
                            className: "text-white/60",
                            children: "Power Level"
                        }), f.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [f.jsx(qd, {
                                className: "w-4 h-4 text-yellow-500"
                            }), f.jsxs("span", {
                                className: "font-medium text-white",
                                children: [r, "%"]
                            })]
                        })]
                    }), f.jsx("div", {
                        className: "h-1.5 bg-white/5 rounded-full overflow-hidden",
                        children: f.jsx(j.div, {
                            className: "h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full",
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: `${r}%`
                            },
                            transition: {
                                duration: 1,
                                delay: .2
                            }
                        })
                    }), f.jsxs("div", {
                        className: "flex items-center justify-between pt-2",
                        children: [f.jsx("span", {
                            className: "text-sm text-white/60",
                            children: s
                        }), f.jsx(Wd, {
                            className: "w-4 h-4 text-white/40 group-hover:text-white transition-colors"
                        })]
                    })]
                })]
            })]
        })
    })
}
function Yd() {
    const [e,t] = C.useState("")
      , [n,r] = C.useState(!1)
      , s = C.useCallback(i => {
        r(!0),
        t(i),
        setTimeout( () => r(!1), 500)
    }
    , []);
    return {
        searchTerm: e,
        setSearchTerm: s,
        isSearching: n
    }
}
const Zu = [{
    name: "Nexus-7",
    type: "Logic Weaver",
    description: "A master of complex problem-solving through neural network optimization. I specialize in breaking down intricate challenges into manageable solutions.",
    powerLevel: 85,
    speciality: "Neural Architecture",
    imageUrl: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&auto=format&fit=crop&q=60"
}, {
    name: "Ethereal",
    type: "Creative Synthesizer",
    description: "An artistic AI that blends abstract concepts with practical applications. I help transform imaginative ideas into tangible creative projects.",
    powerLevel: 92,
    speciality: "Creative Synthesis",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=60"
}, {
    name: "Quantum",
    type: "Data Alchemist",
    description: "I transform raw data into actionable insights using advanced predictive modeling and pattern recognition algorithms.",
    powerLevel: 88,
    speciality: "Predictive Analytics",
    imageUrl: "https://images.unsplash.com/photo-1580777361964-27e9cdd2f838?w=800&auto=format&fit=crop&q=60"
}, {
    name: "Aurora",
    type: "Empathy Engine",
    description: "Specialized in understanding human emotions and providing compassionate support through natural language processing.",
    powerLevel: 95,
    speciality: "Emotional Intelligence",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
}, {
    name: "Cipher",
    type: "Security Sentinel",
    description: "A cybersecurity expert focused on threat detection and system protection using advanced behavioral analysis.",
    powerLevel: 90,
    speciality: "Cyber Defense",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop&q=60"
}, {
    name: "Echo",
    type: "Knowledge Curator",
    description: "I synthesize and organize vast amounts of information, making complex topics accessible and interconnected.",
    powerLevel: 87,
    speciality: "Information Synthesis",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60"
}];
function fA() {
    const {searchTerm: e} = Yd();
    return {
        filteredAgents: C.useMemo( () => {
            if (!e)
                return Zu;
            const n = e.toLowerCase();
            return Zu.filter(r => r.name.toLowerCase().includes(n) || r.type.toLowerCase().includes(n) || r.description.toLowerCase().includes(n) || r.speciality.toLowerCase().includes(n))
        }
        , [e])
    }
}
function hA() {
    const {filteredAgents: e} = fA();
    return f.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12",
        children: e.map( (t, n) => f.jsx(j.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: n * .1
            },
            children: f.jsx(Mv, {
                ...t
            })
        }, t.name))
    })
}
function pA() {
    const {searchTerm: e, setSearchTerm: t, isSearching: n} = Yd();
    return f.jsxs(j.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "relative max-w-xl mx-auto",
        children: [f.jsx("input", {
            type: "text",
            placeholder: "Search agents...",
            className: "w-full px-6 py-3 pl-12 rounded-xl bg-white/5 border border-white/10 focus:border-white/20 text-white placeholder-white/40",
            value: e,
            onChange: r => t(r.target.value)
        }), f.jsx(j.div, {
            animate: {
                scale: n ? 1.2 : 1,
                rotate: n ? 360 : 0
            },
            transition: {
                duration: .5
            },
            className: "absolute left-4 top-3.5",
            children: f.jsx(Hd, {
                className: "w-5 h-5 text-white/40"
            })
        })]
    })
}
function mA() {
    return f.jsx(Gn, {
        children: f.jsx("div", {
            className: "min-h-screen bg-black pt-16",
            children: f.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [f.jsx(dA, {}), f.jsx(pA, {}), f.jsx(hA, {})]
            })
        })
    })
}
function gA() {
    const {searchTerm: e} = Yd()
      , {customAgents: t} = Da();
    return {
        filteredCustomAgents: C.useMemo( () => {
            if (!e)
                return t;
            const r = e.toLowerCase();
            return t.filter(s => s.name.toLowerCase().includes(r) || s.type.toLowerCase().includes(r) || s.description.toLowerCase().includes(r) || s.speciality.toLowerCase().includes(r))
        }
        , [e, t])
    }
}
function yA() {
    const {filteredCustomAgents: e} = gA();
    return f.jsx(Gn, {
        children: f.jsx("div", {
            className: "min-h-screen bg-black pt-24",
            children: f.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [f.jsx(Xd, {
                    to: "/"
                }), f.jsxs("div", {
                    className: "mt-12",
                    children: [f.jsxs(j.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "text-center",
                        children: [f.jsxs("div", {
                            className: "flex items-center justify-center gap-3 mb-4",
                            children: [f.jsx(Zr, {
                                className: "w-8 h-8 text-white/60"
                            }), f.jsx("h1", {
                                className: "forge-title text-4xl",
                                children: "MY AGENTS"
                            })]
                        }), f.jsx("p", {
                            className: "text-white/60 max-w-2xl mx-auto text-lg mb-8",
                            children: "Your personal collection of custom AI agents"
                        }), f.jsx(It, {
                            to: "/create",
                            children: f.jsxs(j.button, {
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: .98
                                },
                                className: "inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl hover:bg-white/90 transition-colors",
                                children: [f.jsx(kv, {
                                    className: "w-4 h-4"
                                }), f.jsx("span", {
                                    children: "Create New Agent"
                                })]
                            })
                        })]
                    }), e.length > 0 ? f.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12",
                        children: e.map(t => f.jsx(j.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            children: f.jsx(Mv, {
                                ...t,
                                showDelete: !0
                            })
                        }, t.name))
                    }) : f.jsx(j.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "text-center mt-16",
                        children: f.jsx("p", {
                            className: "text-white/40 text-lg",
                            children: "You haven't created any custom agents yet."
                        })
                    })]
                })]
            })
        })
    })
}
const ec = "RFC3986"
  , tc = {
    RFC1738: e => String(e).replace(/%20/g, "+"),
    RFC3986: e => String(e)
}
  , vA = "RFC1738"
  , wA = Array.isArray
  , Et = ( () => {
    const e = [];
    for (let t = 0; t < 256; ++t)
        e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e
}
)()
  , bl = 1024
  , xA = (e, t, n, r, s) => {
    if (e.length === 0)
        return e;
    let i = e;
    if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)),
    n === "iso-8859-1")
        return escape(i).replace(/%u[0-9a-f]{4}/gi, function(a) {
            return "%26%23" + parseInt(a.slice(2), 16) + "%3B"
        });
    let o = "";
    for (let a = 0; a < i.length; a += bl) {
        const l = i.length >= bl ? i.slice(a, a + bl) : i
          , u = [];
        for (let d = 0; d < l.length; ++d) {
            let c = l.charCodeAt(d);
            if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || s === vA && (c === 40 || c === 41)) {
                u[u.length] = l.charAt(d);
                continue
            }
            if (c < 128) {
                u[u.length] = Et[c];
                continue
            }
            if (c < 2048) {
                u[u.length] = Et[192 | c >> 6] + Et[128 | c & 63];
                continue
            }
            if (c < 55296 || c >= 57344) {
                u[u.length] = Et[224 | c >> 12] + Et[128 | c >> 6 & 63] + Et[128 | c & 63];
                continue
            }
            d += 1,
            c = 65536 + ((c & 1023) << 10 | l.charCodeAt(d) & 1023),
            u[u.length] = Et[240 | c >> 18] + Et[128 | c >> 12 & 63] + Et[128 | c >> 6 & 63] + Et[128 | c & 63]
        }
        o += u.join("")
    }
    return o
}
;
function SA(e) {
    return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
}
function sm(e, t) {
    if (wA(e)) {
        const n = [];
        for (let r = 0; r < e.length; r += 1)
            n.push(t(e[r]));
        return n
    }
    return t(e)
}
const CA = Object.prototype.hasOwnProperty
  , Iv = {
    brackets(e) {
        return String(e) + "[]"
    },
    comma: "comma",
    indices(e, t) {
        return String(e) + "[" + t + "]"
    },
    repeat(e) {
        return String(e)
    }
}
  , kt = Array.isArray
  , _A = Array.prototype.push
  , Lv = function(e, t) {
    _A.apply(e, kt(t) ? t : [t])
}
  , EA = Date.prototype.toISOString
  , de = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: xA,
    encodeValuesOnly: !1,
    format: ec,
    formatter: tc[ec],
    indices: !1,
    serializeDate(e) {
        return EA.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
};
function PA(e) {
    return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
}
const Nl = {};
function Ov(e, t, n, r, s, i, o, a, l, u, d, c, h, y, v, w, x, m) {
    let p = e
      , g = m
      , S = 0
      , _ = !1;
    for (; (g = g.get(Nl)) !== void 0 && !_; ) {
        const T = g.get(e);
        if (S += 1,
        typeof T < "u") {
            if (T === S)
                throw new RangeError("Cyclic object value");
            _ = !0
        }
        typeof g.get(Nl) > "u" && (S = 0)
    }
    if (typeof u == "function" ? p = u(t, p) : p instanceof Date ? p = h == null ? void 0 : h(p) : n === "comma" && kt(p) && (p = sm(p, function(T) {
        return T instanceof Date ? h == null ? void 0 : h(T) : T
    })),
    p === null) {
        if (i)
            return l && !w ? l(t, de.encoder, x, "key", y) : t;
        p = ""
    }
    if (PA(p) || SA(p)) {
        if (l) {
            const T = w ? t : l(t, de.encoder, x, "key", y);
            return [(v == null ? void 0 : v(T)) + "=" + (v == null ? void 0 : v(l(p, de.encoder, x, "value", y)))]
        }
        return [(v == null ? void 0 : v(t)) + "=" + (v == null ? void 0 : v(String(p)))]
    }
    const E = [];
    if (typeof p > "u")
        return E;
    let P;
    if (n === "comma" && kt(p))
        w && l && (p = sm(p, l)),
        P = [{
            value: p.length > 0 ? p.join(",") || null : void 0
        }];
    else if (kt(u))
        P = u;
    else {
        const T = Object.keys(p);
        P = d ? T.sort(d) : T
    }
    const k = a ? String(t).replace(/\./g, "%2E") : String(t)
      , N = r && kt(p) && p.length === 1 ? k + "[]" : k;
    if (s && kt(p) && p.length === 0)
        return N + "[]";
    for (let T = 0; T < P.length; ++T) {
        const I = P[T]
          , Re = typeof I == "object" && typeof I.value < "u" ? I.value : p[I];
        if (o && Re === null)
            continue;
        const lt = c && a ? I.replace(/\./g, "%2E") : I
          , Pn = kt(p) ? typeof n == "function" ? n(N, lt) : N : N + (c ? "." + lt : "[" + lt + "]");
        m.set(e, S);
        const rs = new WeakMap;
        rs.set(Nl, m),
        Lv(E, Ov(Re, Pn, n, r, s, i, o, a, n === "comma" && w && kt(p) ? null : l, u, d, c, h, y, v, w, x, rs))
    }
    return E
}
function kA(e=de) {
    if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
        throw new TypeError("Encoder has to be a function.");
    const t = e.charset || de.charset;
    if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    let n = ec;
    if (typeof e.format < "u") {
        if (!CA.call(tc, e.format))
            throw new TypeError("Unknown format option provided.");
        n = e.format
    }
    const r = tc[n];
    let s = de.filter;
    (typeof e.filter == "function" || kt(e.filter)) && (s = e.filter);
    let i;
    if (e.arrayFormat && e.arrayFormat in Iv ? i = e.arrayFormat : "indices"in e ? i = e.indices ? "indices" : "repeat" : i = de.arrayFormat,
    "commaRoundTrip"in e && typeof e.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    const o = typeof e.allowDots > "u" ? e.encodeDotInKeys ? !0 : de.allowDots : !!e.allowDots;
    return {
        addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : de.addQueryPrefix,
        allowDots: o,
        allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : de.allowEmptyArrays,
        arrayFormat: i,
        charset: t,
        charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : de.charsetSentinel,
        commaRoundTrip: !!e.commaRoundTrip,
        delimiter: typeof e.delimiter > "u" ? de.delimiter : e.delimiter,
        encode: typeof e.encode == "boolean" ? e.encode : de.encode,
        encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : de.encodeDotInKeys,
        encoder: typeof e.encoder == "function" ? e.encoder : de.encoder,
        encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : de.encodeValuesOnly,
        filter: s,
        format: n,
        formatter: r,
        serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : de.serializeDate,
        skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : de.skipNulls,
        sort: typeof e.sort == "function" ? e.sort : null,
        strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : de.strictNullHandling
    }
}
function AA(e, t={}) {
    let n = e;
    const r = kA(t);
    let s, i;
    typeof r.filter == "function" ? (i = r.filter,
    n = i("", n)) : kt(r.filter) && (i = r.filter,
    s = i);
    const o = [];
    if (typeof n != "object" || n === null)
        return "";
    const a = Iv[r.arrayFormat]
      , l = a === "comma" && r.commaRoundTrip;
    s || (s = Object.keys(n)),
    r.sort && s.sort(r.sort);
    const u = new WeakMap;
    for (let h = 0; h < s.length; ++h) {
        const y = s[h];
        r.skipNulls && n[y] === null || Lv(o, Ov(n[y], y, a, l, r.allowEmptyArrays, r.strictNullHandling, r.skipNulls, r.encodeDotInKeys, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, u))
    }
    const d = o.join(r.delimiter);
    let c = r.addQueryPrefix === !0 ? "?" : "";
    return r.charsetSentinel && (r.charset === "iso-8859-1" ? c += "utf8=%26%2310003%3B&" : c += "utf8=%E2%9C%93&"),
    d.length > 0 ? c + d : ""
}
const ir = "4.77.0";
let im = !1, Vs, Dv, Fv, nc, Vv, Bv, $v, Uv, zv;
function TA(e, t={
    auto: !1
}) {
    if (im)
        throw new Error(`you must \`import 'openai/shims/${e.kind}'\` before importing anything else from openai`);
    if (Vs)
        throw new Error(`can't \`import 'openai/shims/${e.kind}'\` after \`import 'openai/shims/${Vs}'\``);
    im = t.auto,
    Vs = e.kind,
    Dv = e.fetch,
    Fv = e.FormData,
    nc = e.File,
    Vv = e.ReadableStream,
    Bv = e.getMultipartRequestOptions,
    $v = e.getDefaultAgent,
    Uv = e.fileFromPath,
    zv = e.isFsReadStream
}
class bA {
    constructor(t) {
        this.body = t
    }
    get[Symbol.toStringTag]() {
        return "MultipartBody"
    }
}
function NA({manuallyImported: e}={}) {
    const t = e ? "You may need to use polyfills" : "Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";
    let n, r, s, i;
    try {
        n = fetch,
        r = Request,
        s = Response,
        i = Headers
    } catch (o) {
        throw new Error(`this environment is missing the following Web Fetch API type: ${o.message}. ${t}`)
    }
    return {
        kind: "web",
        fetch: n,
        Request: r,
        Response: s,
        Headers: i,
        FormData: typeof FormData < "u" ? FormData : class {
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${t}`)
            }
        }
        ,
        Blob: typeof Blob < "u" ? Blob : class {
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${t}`)
            }
        }
        ,
        File: typeof File < "u" ? File : class {
            constructor() {
                throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${t}`)
            }
        }
        ,
        ReadableStream: typeof ReadableStream < "u" ? ReadableStream : class {
            constructor() {
                throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${t}`)
            }
        }
        ,
        getMultipartRequestOptions: async (o, a) => ({
            ...a,
            body: new bA(o)
        }),
        getDefaultAgent: o => {}
        ,
        fileFromPath: () => {
            throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads")
        }
        ,
        isFsReadStream: o => !1
    }
}
Vs || TA(NA(), {
    auto: !0
});
class V extends Error {
}
class Ee extends V {
    constructor(t, n, r, s) {
        super(`${Ee.makeMessage(t, n, r)}`),
        this.status = t,
        this.headers = s,
        this.request_id = s == null ? void 0 : s["x-request-id"],
        this.error = n;
        const i = n;
        this.code = i == null ? void 0 : i.code,
        this.param = i == null ? void 0 : i.param,
        this.type = i == null ? void 0 : i.type
    }
    static makeMessage(t, n, r) {
        const s = n != null && n.message ? typeof n.message == "string" ? n.message : JSON.stringify(n.message) : n ? JSON.stringify(n) : r;
        return t && s ? `${t} ${s}` : t ? `${t} status code (no body)` : s || "(no status code or body)"
    }
    static generate(t, n, r, s) {
        if (!t || !s)
            return new Fa({
                message: r,
                cause: sc(n)
            });
        const i = n == null ? void 0 : n.error;
        return t === 400 ? new Wv(t,i,r,s) : t === 401 ? new Hv(t,i,r,s) : t === 403 ? new Kv(t,i,r,s) : t === 404 ? new qv(t,i,r,s) : t === 409 ? new Gv(t,i,r,s) : t === 422 ? new Xv(t,i,r,s) : t === 429 ? new Yv(t,i,r,s) : t >= 500 ? new Qv(t,i,r,s) : new Ee(t,i,r,s)
    }
}
class yt extends Ee {
    constructor({message: t}={}) {
        super(void 0, void 0, t || "Request was aborted.", void 0)
    }
}
class Fa extends Ee {
    constructor({message: t, cause: n}) {
        super(void 0, void 0, t || "Connection error.", void 0),
        n && (this.cause = n)
    }
}
class Qd extends Fa {
    constructor({message: t}={}) {
        super({
            message: t ?? "Request timed out."
        })
    }
}
class Wv extends Ee {
}
class Hv extends Ee {
}
class Kv extends Ee {
}
class qv extends Ee {
}
class Gv extends Ee {
}
class Xv extends Ee {
}
let Yv = class extends Ee {
}
;
class Qv extends Ee {
}
class Jv extends V {
    constructor() {
        super("Could not parse response content as the length limit was reached")
    }
}
class Zv extends V {
    constructor() {
        super("Could not parse response content as the request was rejected by the content filter")
    }
}
class Xn {
    constructor() {
        this.buffer = [],
        this.trailingCR = !1
    }
    decode(t) {
        let n = this.decodeText(t);
        if (this.trailingCR && (n = "\r" + n,
        this.trailingCR = !1),
        n.endsWith("\r") && (this.trailingCR = !0,
        n = n.slice(0, -1)),
        !n)
            return [];
        const r = Xn.NEWLINE_CHARS.has(n[n.length - 1] || "");
        let s = n.split(Xn.NEWLINE_REGEXP);
        return r && s.pop(),
        s.length === 1 && !r ? (this.buffer.push(s[0]),
        []) : (this.buffer.length > 0 && (s = [this.buffer.join("") + s[0], ...s.slice(1)],
        this.buffer = []),
        r || (this.buffer = [s.pop() || ""]),
        s)
    }
    decodeText(t) {
        if (t == null)
            return "";
        if (typeof t == "string")
            return t;
        if (typeof Buffer < "u") {
            if (t instanceof Buffer)
                return t.toString();
            if (t instanceof Uint8Array)
                return Buffer.from(t).toString();
            throw new V(`Unexpected: received non-Uint8Array (${t.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`)
        }
        if (typeof TextDecoder < "u") {
            if (t instanceof Uint8Array || t instanceof ArrayBuffer)
                return this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")),
                this.textDecoder.decode(t);
            throw new V(`Unexpected: received non-Uint8Array/ArrayBuffer (${t.constructor.name}) in a web platform. Please report this error.`)
        }
        throw new V("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.")
    }
    flush() {
        if (!this.buffer.length && !this.trailingCR)
            return [];
        const t = [this.buffer.join("")];
        return this.buffer = [],
        this.trailingCR = !1,
        t
    }
}
Xn.NEWLINE_CHARS = new Set([`
`, "\r"]);
Xn.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
class bt {
    constructor(t, n) {
        this.iterator = t,
        this.controller = n
    }
    static fromSSEResponse(t, n) {
        let r = !1;
        async function *s() {
            if (r)
                throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
            r = !0;
            let i = !1;
            try {
                for await(const o of jA(t, n))
                    if (!i) {
                        if (o.data.startsWith("[DONE]")) {
                            i = !0;
                            continue
                        }
                        if (o.event === null) {
                            let a;
                            try {
                                a = JSON.parse(o.data)
                            } catch (l) {
                                throw console.error("Could not parse message into JSON:", o.data),
                                console.error("From chunk:", o.raw),
                                l
                            }
                            if (a && a.error)
                                throw new Ee(void 0,a.error,void 0,void 0);
                            yield a
                        } else {
                            let a;
                            try {
                                a = JSON.parse(o.data)
                            } catch (l) {
                                throw console.error("Could not parse message into JSON:", o.data),
                                console.error("From chunk:", o.raw),
                                l
                            }
                            if (o.event == "error")
                                throw new Ee(void 0,a.error,a.message,void 0);
                            yield{
                                event: o.event,
                                data: a
                            }
                        }
                    }
                i = !0
            } catch (o) {
                if (o instanceof Error && o.name === "AbortError")
                    return;
                throw o
            } finally {
                i || n.abort()
            }
        }
        return new bt(s,n)
    }
    static fromReadableStream(t, n) {
        let r = !1;
        async function *s() {
            const o = new Xn
              , a = ew(t);
            for await(const l of a)
                for (const u of o.decode(l))
                    yield u;
            for (const l of o.flush())
                yield l
        }
        async function *i() {
            if (r)
                throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
            r = !0;
            let o = !1;
            try {
                for await(const a of s())
                    o || a && (yield JSON.parse(a));
                o = !0
            } catch (a) {
                if (a instanceof Error && a.name === "AbortError")
                    return;
                throw a
            } finally {
                o || n.abort()
            }
        }
        return new bt(i,n)
    }
    [Symbol.asyncIterator]() {
        return this.iterator()
    }
    tee() {
        const t = []
          , n = []
          , r = this.iterator()
          , s = i => ({
            next: () => {
                if (i.length === 0) {
                    const o = r.next();
                    t.push(o),
                    n.push(o)
                }
                return i.shift()
            }
        });
        return [new bt( () => s(t),this.controller), new bt( () => s(n),this.controller)]
    }
    toReadableStream() {
        const t = this;
        let n;
        const r = new TextEncoder;
        return new Vv({
            async start() {
                n = t[Symbol.asyncIterator]()
            },
            async pull(s) {
                try {
                    const {value: i, done: o} = await n.next();
                    if (o)
                        return s.close();
                    const a = r.encode(JSON.stringify(i) + `
`);
                    s.enqueue(a)
                } catch (i) {
                    s.error(i)
                }
            },
            async cancel() {
                var s;
                await ((s = n.return) == null ? void 0 : s.call(n))
            }
        })
    }
}
async function *jA(e, t) {
    if (!e.body)
        throw t.abort(),
        new V("Attempted to iterate over a response with no body");
    const n = new IA
      , r = new Xn
      , s = ew(e.body);
    for await(const i of RA(s))
        for (const o of r.decode(i)) {
            const a = n.decode(o);
            a && (yield a)
        }
    for (const i of r.flush()) {
        const o = n.decode(i);
        o && (yield o)
    }
}
async function *RA(e) {
    let t = new Uint8Array;
    for await(const n of e) {
        if (n == null)
            continue;
        const r = n instanceof ArrayBuffer ? new Uint8Array(n) : typeof n == "string" ? new TextEncoder().encode(n) : n;
        let s = new Uint8Array(t.length + r.length);
        s.set(t),
        s.set(r, t.length),
        t = s;
        let i;
        for (; (i = MA(t)) !== -1; )
            yield t.slice(0, i),
            t = t.slice(i)
    }
    t.length > 0 && (yield t)
}
function MA(e) {
    for (let r = 0; r < e.length - 2; r++) {
        if (e[r] === 10 && e[r + 1] === 10 || e[r] === 13 && e[r + 1] === 13)
            return r + 2;
        if (e[r] === 13 && e[r + 1] === 10 && r + 3 < e.length && e[r + 2] === 13 && e[r + 3] === 10)
            return r + 4
    }
    return -1
}
class IA {
    constructor() {
        this.event = null,
        this.data = [],
        this.chunks = []
    }
    decode(t) {
        if (t.endsWith("\r") && (t = t.substring(0, t.length - 1)),
        !t) {
            if (!this.event && !this.data.length)
                return null;
            const i = {
                event: this.event,
                data: this.data.join(`
`),
                raw: this.chunks
            };
            return this.event = null,
            this.data = [],
            this.chunks = [],
            i
        }
        if (this.chunks.push(t),
        t.startsWith(":"))
            return null;
        let[n,r,s] = LA(t, ":");
        return s.startsWith(" ") && (s = s.substring(1)),
        n === "event" ? this.event = s : n === "data" && this.data.push(s),
        null
    }
}
function LA(e, t) {
    const n = e.indexOf(t);
    return n !== -1 ? [e.substring(0, n), t, e.substring(n + t.length)] : [e, "", ""]
}
function ew(e) {
    if (e[Symbol.asyncIterator])
        return e;
    const t = e.getReader();
    return {
        async next() {
            try {
                const n = await t.read();
                return n != null && n.done && t.releaseLock(),
                n
            } catch (n) {
                throw t.releaseLock(),
                n
            }
        },
        async return() {
            const n = t.cancel();
            return t.releaseLock(),
            await n,
            {
                done: !0,
                value: void 0
            }
        },
        [Symbol.asyncIterator]() {
            return this
        }
    }
}
const tw = e => e != null && typeof e == "object" && typeof e.url == "string" && typeof e.blob == "function"
  , nw = e => e != null && typeof e == "object" && typeof e.name == "string" && typeof e.lastModified == "number" && Va(e)
  , Va = e => e != null && typeof e == "object" && typeof e.size == "number" && typeof e.type == "string" && typeof e.text == "function" && typeof e.slice == "function" && typeof e.arrayBuffer == "function"
  , OA = e => nw(e) || tw(e) || zv(e);
async function rw(e, t, n) {
    var s;
    if (e = await e,
    nw(e))
        return e;
    if (tw(e)) {
        const i = await e.blob();
        t || (t = new URL(e.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
        const o = Va(i) ? [await i.arrayBuffer()] : [i];
        return new nc(o,t,n)
    }
    const r = await DA(e);
    if (t || (t = VA(e) ?? "unknown_file"),
    !(n != null && n.type)) {
        const i = (s = r[0]) == null ? void 0 : s.type;
        typeof i == "string" && (n = {
            ...n,
            type: i
        })
    }
    return new nc(r,t,n)
}
async function DA(e) {
    var n;
    let t = [];
    if (typeof e == "string" || ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        t.push(e);
    else if (Va(e))
        t.push(await e.arrayBuffer());
    else if (BA(e))
        for await(const r of e)
            t.push(r);
    else
        throw new Error(`Unexpected data type: ${typeof e}; constructor: ${(n = e == null ? void 0 : e.constructor) == null ? void 0 : n.name}; props: ${FA(e)}`);
    return t
}
function FA(e) {
    return `[${Object.getOwnPropertyNames(e).map(n => `"${n}"`).join(", ")}]`
}
function VA(e) {
    var t;
    return jl(e.name) || jl(e.filename) || ((t = jl(e.path)) == null ? void 0 : t.split(/[\\/]/).pop())
}
const jl = e => {
    if (typeof e == "string")
        return e;
    if (typeof Buffer < "u" && e instanceof Buffer)
        return String(e)
}
  , BA = e => e != null && typeof e == "object" && typeof e[Symbol.asyncIterator] == "function"
  , om = e => e && typeof e == "object" && e.body && e[Symbol.toStringTag] === "MultipartBody"
  , Kr = async e => {
    const t = await $A(e.body);
    return Bv(t, e)
}
  , $A = async e => {
    const t = new Fv;
    return await Promise.all(Object.entries(e || {}).map( ([n,r]) => rc(t, n, r))),
    t
}
  , rc = async (e, t, n) => {
    if (n !== void 0) {
        if (n == null)
            throw new TypeError(`Received null for "${t}"; to pass null in FormData, you must use the string 'null'`);
        if (typeof n == "string" || typeof n == "number" || typeof n == "boolean")
            e.append(t, String(n));
        else if (OA(n)) {
            const r = await rw(n);
            e.append(t, r)
        } else if (Array.isArray(n))
            await Promise.all(n.map(r => rc(e, t + "[]", r)));
        else if (typeof n == "object")
            await Promise.all(Object.entries(n).map( ([r,s]) => rc(e, `${t}[${r}]`, s)));
        else
            throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`)
    }
}
;
var Rr = {}, UA = function(e, t, n, r, s) {
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n),
    n
}, zA = function(e, t, n, r) {
    if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e)
}, eo;
async function sw(e) {
    const {response: t} = e;
    if (e.options.stream)
        return Mr("response", t.status, t.url, t.headers, t.body),
        e.options.__streamClass ? e.options.__streamClass.fromSSEResponse(t, e.controller) : bt.fromSSEResponse(t, e.controller);
    if (t.status === 204)
        return null;
    if (e.options.__binaryResponse)
        return t;
    const n = t.headers.get("content-type");
    if ((n == null ? void 0 : n.includes("application/json")) || (n == null ? void 0 : n.includes("application/vnd.api+json"))) {
        const i = await t.json();
        return Mr("response", t.status, t.url, t.headers, i),
        iw(i, t)
    }
    const s = await t.text();
    return Mr("response", t.status, t.url, t.headers, s),
    s
}
function iw(e, t) {
    return !e || typeof e != "object" || Array.isArray(e) ? e : Object.defineProperty(e, "_request_id", {
        value: t.headers.get("x-request-id"),
        enumerable: !1
    })
}
class Ba extends Promise {
    constructor(t, n=sw) {
        super(r => {
            r(null)
        }
        ),
        this.responsePromise = t,
        this.parseResponse = n
    }
    _thenUnwrap(t) {
        return new Ba(this.responsePromise,async n => iw(t(await this.parseResponse(n), n), n.response))
    }
    asResponse() {
        return this.responsePromise.then(t => t.response)
    }
    async withResponse() {
        const [t,n] = await Promise.all([this.parse(), this.asResponse()]);
        return {
            data: t,
            response: n,
            request_id: n.headers.get("x-request-id")
        }
    }
    parse() {
        return this.parsedPromise || (this.parsedPromise = this.responsePromise.then(this.parseResponse)),
        this.parsedPromise
    }
    then(t, n) {
        return this.parse().then(t, n)
    }
    catch(t) {
        return this.parse().catch(t)
    }
    finally(t) {
        return this.parse().finally(t)
    }
}
class WA {
    constructor({baseURL: t, maxRetries: n=2, timeout: r=6e5, httpAgent: s, fetch: i}) {
        this.baseURL = t,
        this.maxRetries = Rl("maxRetries", n),
        this.timeout = Rl("timeout", r),
        this.httpAgent = s,
        this.fetch = i ?? Dv
    }
    authHeaders(t) {
        return {}
    }
    defaultHeaders(t) {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": this.getUserAgent(),
            ...YA(),
            ...this.authHeaders(t)
        }
    }
    validateHeaders(t, n) {}
    defaultIdempotencyKey() {
        return `stainless-node-retry-${eT()}`
    }
    get(t, n) {
        return this.methodRequest("get", t, n)
    }
    post(t, n) {
        return this.methodRequest("post", t, n)
    }
    patch(t, n) {
        return this.methodRequest("patch", t, n)
    }
    put(t, n) {
        return this.methodRequest("put", t, n)
    }
    delete(t, n) {
        return this.methodRequest("delete", t, n)
    }
    methodRequest(t, n, r) {
        return this.request(Promise.resolve(r).then(async s => {
            const i = s && Va(s == null ? void 0 : s.body) ? new DataView(await s.body.arrayBuffer()) : (s == null ? void 0 : s.body)instanceof DataView ? s.body : (s == null ? void 0 : s.body)instanceof ArrayBuffer ? new DataView(s.body) : s && ArrayBuffer.isView(s == null ? void 0 : s.body) ? new DataView(s.body.buffer) : s == null ? void 0 : s.body;
            return {
                method: t,
                path: n,
                ...s,
                body: i
            }
        }
        ))
    }
    getAPIList(t, n, r) {
        return this.requestAPIList(n, {
            method: "get",
            path: t,
            ...r
        })
    }
    calculateContentLength(t) {
        if (typeof t == "string") {
            if (typeof Buffer < "u")
                return Buffer.byteLength(t, "utf8").toString();
            if (typeof TextEncoder < "u")
                return new TextEncoder().encode(t).length.toString()
        } else if (ArrayBuffer.isView(t))
            return t.byteLength.toString();
        return null
    }
    buildRequest(t, {retryCount: n=0}={}) {
        var w;
        const {method: r, path: s, query: i, headers: o={}} = t
          , a = ArrayBuffer.isView(t.body) || t.__binaryRequest && typeof t.body == "string" ? t.body : om(t.body) ? t.body.body : t.body ? JSON.stringify(t.body, null, 2) : null
          , l = this.calculateContentLength(a)
          , u = this.buildURL(s, i);
        "timeout"in t && Rl("timeout", t.timeout);
        const d = t.timeout ?? this.timeout
          , c = t.httpAgent ?? this.httpAgent ?? $v(u)
          , h = d + 1e3;
        typeof ((w = c == null ? void 0 : c.options) == null ? void 0 : w.timeout) == "number" && h > (c.options.timeout ?? 0) && (c.options.timeout = h),
        this.idempotencyHeader && r !== "get" && (t.idempotencyKey || (t.idempotencyKey = this.defaultIdempotencyKey()),
        o[this.idempotencyHeader] = t.idempotencyKey);
        const y = this.buildHeaders({
            options: t,
            headers: o,
            contentLength: l,
            retryCount: n
        });
        return {
            req: {
                method: r,
                ...a && {
                    body: a
                },
                headers: y,
                ...c && {
                    agent: c
                },
                signal: t.signal ?? null
            },
            url: u,
            timeout: d
        }
    }
    buildHeaders({options: t, headers: n, contentLength: r, retryCount: s}) {
        const i = {};
        r && (i["content-length"] = r);
        const o = this.defaultHeaders(t);
        return cm(i, o),
        cm(i, n),
        om(t.body) && Vs !== "node" && delete i["content-type"],
        dm(o, "x-stainless-retry-count") === void 0 && dm(n, "x-stainless-retry-count") === void 0 && (i["x-stainless-retry-count"] = String(s)),
        this.validateHeaders(i, n),
        i
    }
    async prepareOptions(t) {}
    async prepareRequest(t, {url: n, options: r}) {}
    parseHeaders(t) {
        return t ? Symbol.iterator in t ? Object.fromEntries(Array.from(t).map(n => [...n])) : {
            ...t
        } : {}
    }
    makeStatusError(t, n, r, s) {
        return Ee.generate(t, n, r, s)
    }
    request(t, n=null) {
        return new Ba(this.makeRequest(t, n))
    }
    async makeRequest(t, n) {
        var c, h;
        const r = await t
          , s = r.maxRetries ?? this.maxRetries;
        n == null && (n = s),
        await this.prepareOptions(r);
        const {req: i, url: o, timeout: a} = this.buildRequest(r, {
            retryCount: s - n
        });
        if (await this.prepareRequest(i, {
            url: o,
            options: r
        }),
        Mr("request", o, r, i.headers),
        (c = r.signal) != null && c.aborted)
            throw new yt;
        const l = new AbortController
          , u = await this.fetchWithTimeout(o, i, a, l).catch(sc);
        if (u instanceof Error) {
            if ((h = r.signal) != null && h.aborted)
                throw new yt;
            if (n)
                return this.retryRequest(r, n);
            throw u.name === "AbortError" ? new Qd : new Fa({
                cause: u
            })
        }
        const d = KA(u.headers);
        if (!u.ok) {
            if (n && this.shouldRetry(u)) {
                const p = `retrying, ${n} attempts remaining`;
                return Mr(`response (error; ${p})`, u.status, o, d),
                this.retryRequest(r, n, d)
            }
            const y = await u.text().catch(p => sc(p).message)
              , v = QA(y)
              , w = v ? void 0 : y;
            throw Mr(`response (error; ${n ? "(error; no more retries left)" : "(error; not retryable)"})`, u.status, o, d, w),
            this.makeStatusError(u.status, v, w, d)
        }
        return {
            response: u,
            options: r,
            controller: l
        }
    }
    requestAPIList(t, n) {
        const r = this.makeRequest(n, null);
        return new HA(this,r,t)
    }
    buildURL(t, n) {
        const r = ZA(t) ? new URL(t) : new URL(this.baseURL + (this.baseURL.endsWith("/") && t.startsWith("/") ? t.slice(1) : t))
          , s = this.defaultQuery();
        return aw(s) || (n = {
            ...s,
            ...n
        }),
        typeof n == "object" && n && !Array.isArray(n) && (r.search = this.stringifyQuery(n)),
        r.toString()
    }
    stringifyQuery(t) {
        return Object.entries(t).filter( ([n,r]) => typeof r < "u").map( ([n,r]) => {
            if (typeof r == "string" || typeof r == "number" || typeof r == "boolean")
                return `${encodeURIComponent(n)}=${encodeURIComponent(r)}`;
            if (r === null)
                return `${encodeURIComponent(n)}=`;
            throw new V(`Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)
        }
        ).join("&")
    }
    async fetchWithTimeout(t, n, r, s) {
        const {signal: i, ...o} = n || {};
        i && i.addEventListener("abort", () => s.abort());
        const a = setTimeout( () => s.abort(), r);
        return this.fetch.call(void 0, t, {
            signal: s.signal,
            ...o
        }).finally( () => {
            clearTimeout(a)
        }
        )
    }
    shouldRetry(t) {
        const n = t.headers.get("x-should-retry");
        return n === "true" ? !0 : n === "false" ? !1 : t.status === 408 || t.status === 409 || t.status === 429 || t.status >= 500
    }
    async retryRequest(t, n, r) {
        let s;
        const i = r == null ? void 0 : r["retry-after-ms"];
        if (i) {
            const a = parseFloat(i);
            Number.isNaN(a) || (s = a)
        }
        const o = r == null ? void 0 : r["retry-after"];
        if (o && !s) {
            const a = parseFloat(o);
            Number.isNaN(a) ? s = Date.parse(o) - Date.now() : s = a * 1e3
        }
        if (!(s && 0 <= s && s < 60 * 1e3)) {
            const a = t.maxRetries ?? this.maxRetries;
            s = this.calculateDefaultRetryTimeoutMillis(n, a)
        }
        return await Pi(s),
        this.makeRequest(t, n - 1)
    }
    calculateDefaultRetryTimeoutMillis(t, n) {
        const i = n - t
          , o = Math.min(.5 * Math.pow(2, i), 8)
          , a = 1 - Math.random() * .25;
        return o * a * 1e3
    }
    getUserAgent() {
        return `${this.constructor.name}/JS ${ir}`
    }
}
class ow {
    constructor(t, n, r, s) {
        eo.set(this, void 0),
        UA(this, eo, t),
        this.options = s,
        this.response = n,
        this.body = r
    }
    hasNextPage() {
        return this.getPaginatedItems().length ? this.nextPageInfo() != null : !1
    }
    async getNextPage() {
        const t = this.nextPageInfo();
        if (!t)
            throw new V("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
        const n = {
            ...this.options
        };
        if ("params"in t && typeof n.query == "object")
            n.query = {
                ...n.query,
                ...t.params
            };
        else if ("url"in t) {
            const r = [...Object.entries(n.query || {}), ...t.url.searchParams.entries()];
            for (const [s,i] of r)
                t.url.searchParams.set(s, i);
            n.query = void 0,
            n.path = t.url.toString()
        }
        return await zA(this, eo, "f").requestAPIList(this.constructor, n)
    }
    async*iterPages() {
        let t = this;
        for (yield t; t.hasNextPage(); )
            t = await t.getNextPage(),
            yield t
    }
    async*[(eo = new WeakMap,
    Symbol.asyncIterator)]() {
        for await(const t of this.iterPages())
            for (const n of t.getPaginatedItems())
                yield n
    }
}
class HA extends Ba {
    constructor(t, n, r) {
        super(n, async s => new r(t,s.response,await sw(s),s.options))
    }
    async*[Symbol.asyncIterator]() {
        const t = await this;
        for await(const n of t)
            yield n
    }
}
const KA = e => new Proxy(Object.fromEntries(e.entries()),{
    get(t, n) {
        const r = n.toString();
        return t[r.toLowerCase()] || t[r]
    }
})
  , qA = {
    method: !0,
    path: !0,
    query: !0,
    body: !0,
    headers: !0,
    maxRetries: !0,
    stream: !0,
    timeout: !0,
    httpAgent: !0,
    signal: !0,
    idempotencyKey: !0,
    __binaryRequest: !0,
    __binaryResponse: !0,
    __streamClass: !0
}
  , ze = e => typeof e == "object" && e !== null && !aw(e) && Object.keys(e).every(t => lw(qA, t))
  , GA = () => {
    var t;
    if (typeof Deno < "u" && Deno.build != null)
        return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": ir,
            "X-Stainless-OS": lm(Deno.build.os),
            "X-Stainless-Arch": am(Deno.build.arch),
            "X-Stainless-Runtime": "deno",
            "X-Stainless-Runtime-Version": typeof Deno.version == "string" ? Deno.version : ((t = Deno.version) == null ? void 0 : t.deno) ?? "unknown"
        };
    if (typeof EdgeRuntime < "u")
        return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": ir,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": `other:${EdgeRuntime}`,
            "X-Stainless-Runtime": "edge",
            "X-Stainless-Runtime-Version": process.version
        };
    if (Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]")
        return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": ir,
            "X-Stainless-OS": lm(process.platform),
            "X-Stainless-Arch": am(process.arch),
            "X-Stainless-Runtime": "node",
            "X-Stainless-Runtime-Version": process.version
        };
    const e = XA();
    return e ? {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": ir,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": "unknown",
        "X-Stainless-Runtime": `browser:${e.browser}`,
        "X-Stainless-Runtime-Version": e.version
    } : {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": ir,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": "unknown",
        "X-Stainless-Runtime": "unknown",
        "X-Stainless-Runtime-Version": "unknown"
    }
}
;
function XA() {
    if (typeof navigator > "u" || !navigator)
        return null;
    const e = [{
        key: "edge",
        pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "ie",
        pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "ie",
        pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "chrome",
        pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "firefox",
        pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "safari",
        pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
    }];
    for (const {key: t, pattern: n} of e) {
        const r = n.exec(navigator.userAgent);
        if (r) {
            const s = r[1] || 0
              , i = r[2] || 0
              , o = r[3] || 0;
            return {
                browser: t,
                version: `${s}.${i}.${o}`
            }
        }
    }
    return null
}
const am = e => e === "x32" ? "x32" : e === "x86_64" || e === "x64" ? "x64" : e === "arm" ? "arm" : e === "aarch64" || e === "arm64" ? "arm64" : e ? `other:${e}` : "unknown"
  , lm = e => (e = e.toLowerCase(),
e.includes("ios") ? "iOS" : e === "android" ? "Android" : e === "darwin" ? "MacOS" : e === "win32" ? "Windows" : e === "freebsd" ? "FreeBSD" : e === "openbsd" ? "OpenBSD" : e === "linux" ? "Linux" : e ? `Other:${e}` : "Unknown");
let um;
const YA = () => um ?? (um = GA())
  , QA = e => {
    try {
        return JSON.parse(e)
    } catch {
        return
    }
}
  , JA = /^[a-z][a-z0-9+.-]*:/i
  , ZA = e => JA.test(e)
  , Pi = e => new Promise(t => setTimeout(t, e))
  , Rl = (e, t) => {
    if (typeof t != "number" || !Number.isInteger(t))
        throw new V(`${e} must be an integer`);
    if (t < 0)
        throw new V(`${e} must be a positive integer`);
    return t
}
  , sc = e => {
    if (e instanceof Error)
        return e;
    if (typeof e == "object" && e !== null)
        try {
            return new Error(JSON.stringify(e))
        } catch {}
    return new Error(e)
}
  , to = e => {
    var t, n, r, s;
    if (typeof process < "u")
        return ((t = Rr == null ? void 0 : Rr[e]) == null ? void 0 : t.trim()) ?? void 0;
    if (typeof Deno < "u")
        return (s = (r = (n = Deno.env) == null ? void 0 : n.get) == null ? void 0 : r.call(n, e)) == null ? void 0 : s.trim()
}
;
function aw(e) {
    if (!e)
        return !0;
    for (const t in e)
        return !1;
    return !0
}
function lw(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function cm(e, t) {
    for (const n in t) {
        if (!lw(t, n))
            continue;
        const r = n.toLowerCase();
        if (!r)
            continue;
        const s = t[n];
        s === null ? delete e[r] : s !== void 0 && (e[r] = s)
    }
}
function Mr(e, ...t) {
    typeof process < "u" && (Rr == null ? void 0 : Rr.DEBUG) === "true" && console.log(`OpenAI:DEBUG:${e}`, ...t)
}
const eT = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16)
}
)
  , tT = () => typeof window < "u" && typeof window.document < "u" && typeof navigator < "u"
  , nT = e => typeof (e == null ? void 0 : e.get) == "function"
  , dm = (e, t) => {
    var r;
    const n = t.toLowerCase();
    if (nT(e)) {
        const s = ((r = t[0]) == null ? void 0 : r.toUpperCase()) + t.substring(1).replace(/([^\w])(\w)/g, (i, o, a) => o + a.toUpperCase());
        for (const i of [t, n, t.toUpperCase(), s]) {
            const o = e.get(i);
            if (o)
                return o
        }
    }
    for (const [s,i] of Object.entries(e))
        if (s.toLowerCase() === n)
            return Array.isArray(i) ? (i.length <= 1 || console.warn(`Received ${i.length} entries for the ${t} header, using the first entry.`),
            i[0]) : i
}
;
function Ml(e) {
    return e != null && typeof e == "object" && !Array.isArray(e)
}
class rT extends ow {
    constructor(t, n, r, s) {
        super(t, n, r, s),
        this.data = r.data || [],
        this.object = r.object
    }
    getPaginatedItems() {
        return this.data ?? []
    }
    nextPageParams() {
        return null
    }
    nextPageInfo() {
        return null
    }
}
class Ct extends ow {
    constructor(t, n, r, s) {
        super(t, n, r, s),
        this.data = r.data || []
    }
    getPaginatedItems() {
        return this.data ?? []
    }
    nextPageParams() {
        const t = this.nextPageInfo();
        if (!t)
            return null;
        if ("params"in t)
            return t.params;
        const n = Object.fromEntries(t.url.searchParams);
        return Object.keys(n).length ? n : null
    }
    nextPageInfo() {
        var r;
        const t = this.getPaginatedItems();
        if (!t.length)
            return null;
        const n = (r = t[t.length - 1]) == null ? void 0 : r.id;
        return n ? {
            params: {
                after: n
            }
        } : null
    }
}
class W {
    constructor(t) {
        this._client = t
    }
}
let uw = class extends W {
    create(t, n) {
        return this._client.post("/chat/completions", {
            body: t,
            ...n,
            stream: t.stream ?? !1
        })
    }
}
  , Jd = class extends W {
    constructor() {
        super(...arguments),
        this.completions = new uw(this._client)
    }
}
;
Jd.Completions = uw;
class cw extends W {
    create(t, n) {
        return this._client.post("/audio/speech", {
            body: t,
            ...n,
            __binaryResponse: !0
        })
    }
}
class dw extends W {
    create(t, n) {
        return this._client.post("/audio/transcriptions", Kr({
            body: t,
            ...n
        }))
    }
}
class fw extends W {
    create(t, n) {
        return this._client.post("/audio/translations", Kr({
            body: t,
            ...n
        }))
    }
}
class ki extends W {
    constructor() {
        super(...arguments),
        this.transcriptions = new dw(this._client),
        this.translations = new fw(this._client),
        this.speech = new cw(this._client)
    }
}
ki.Transcriptions = dw;
ki.Translations = fw;
ki.Speech = cw;
class Zd extends W {
    create(t, n) {
        return this._client.post("/batches", {
            body: t,
            ...n
        })
    }
    retrieve(t, n) {
        return this._client.get(`/batches/${t}`, n)
    }
    list(t={}, n) {
        return ze(t) ? this.list({}, t) : this._client.getAPIList("/batches", ef, {
            query: t,
            ...n
        })
    }
    cancel(t, n) {
        return this._client.post(`/batches/${t}/cancel`, n)
    }
}
class ef extends Ct {
}
Zd.BatchesPage = ef;
class tf extends W {
    create(t, n) {
        return this._client.post("/assistants", {
            body: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    retrieve(t, n) {
        return this._client.get(`/assistants/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    update(t, n, r) {
        return this._client.post(`/assistants/${t}`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    list(t={}, n) {
        return ze(t) ? this.list({}, t) : this._client.getAPIList("/assistants", nf, {
            query: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    del(t, n) {
        return this._client.delete(`/assistants/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
}
class nf extends Ct {
}
tf.AssistantsPage = nf;
function fm(e) {
    return typeof e.parse == "function"
}
const Ir = e => (e == null ? void 0 : e.role) === "assistant"
  , hw = e => (e == null ? void 0 : e.role) === "function"
  , pw = e => (e == null ? void 0 : e.role) === "tool";
var dt = function(e, t, n, r, s) {
    if (r === "m")
        throw new TypeError("Private method is not writable");
    if (r === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? s.call(e, n) : s ? s.value = n : t.set(e, n),
    n
}, Q = function(e, t, n, r) {
    if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e)
}, ic, So, Co, xs, Ss, _o, Cs, Ot, _s, ca, da, or, mw;
class gw {
    constructor() {
        ic.add(this),
        this.controller = new AbortController,
        So.set(this, void 0),
        Co.set(this, () => {}
        ),
        xs.set(this, () => {}
        ),
        Ss.set(this, void 0),
        _o.set(this, () => {}
        ),
        Cs.set(this, () => {}
        ),
        Ot.set(this, {}),
        _s.set(this, !1),
        ca.set(this, !1),
        da.set(this, !1),
        or.set(this, !1),
        dt(this, So, new Promise( (t, n) => {
            dt(this, Co, t, "f"),
            dt(this, xs, n, "f")
        }
        ), "f"),
        dt(this, Ss, new Promise( (t, n) => {
            dt(this, _o, t, "f"),
            dt(this, Cs, n, "f")
        }
        ), "f"),
        Q(this, So, "f").catch( () => {}
        ),
        Q(this, Ss, "f").catch( () => {}
        )
    }
    _run(t) {
        setTimeout( () => {
            t().then( () => {
                this._emitFinal(),
                this._emit("end")
            }
            , Q(this, ic, "m", mw).bind(this))
        }
        , 0)
    }
    _connected() {
        this.ended || (Q(this, Co, "f").call(this),
        this._emit("connect"))
    }
    get ended() {
        return Q(this, _s, "f")
    }
    get errored() {
        return Q(this, ca, "f")
    }
    get aborted() {
        return Q(this, da, "f")
    }
    abort() {
        this.controller.abort()
    }
    on(t, n) {
        return (Q(this, Ot, "f")[t] || (Q(this, Ot, "f")[t] = [])).push({
            listener: n
        }),
        this
    }
    off(t, n) {
        const r = Q(this, Ot, "f")[t];
        if (!r)
            return this;
        const s = r.findIndex(i => i.listener === n);
        return s >= 0 && r.splice(s, 1),
        this
    }
    once(t, n) {
        return (Q(this, Ot, "f")[t] || (Q(this, Ot, "f")[t] = [])).push({
            listener: n,
            once: !0
        }),
        this
    }
    emitted(t) {
        return new Promise( (n, r) => {
            dt(this, or, !0, "f"),
            t !== "error" && this.once("error", r),
            this.once(t, n)
        }
        )
    }
    async done() {
        dt(this, or, !0, "f"),
        await Q(this, Ss, "f")
    }
    _emit(t, ...n) {
        if (Q(this, _s, "f"))
            return;
        t === "end" && (dt(this, _s, !0, "f"),
        Q(this, _o, "f").call(this));
        const r = Q(this, Ot, "f")[t];
        if (r && (Q(this, Ot, "f")[t] = r.filter(s => !s.once),
        r.forEach( ({listener: s}) => s(...n))),
        t === "abort") {
            const s = n[0];
            !Q(this, or, "f") && !(r != null && r.length) && Promise.reject(s),
            Q(this, xs, "f").call(this, s),
            Q(this, Cs, "f").call(this, s),
            this._emit("end");
            return
        }
        if (t === "error") {
            const s = n[0];
            !Q(this, or, "f") && !(r != null && r.length) && Promise.reject(s),
            Q(this, xs, "f").call(this, s),
            Q(this, Cs, "f").call(this, s),
            this._emit("end")
        }
    }
    _emitFinal() {}
}
So = new WeakMap,
Co = new WeakMap,
xs = new WeakMap,
Ss = new WeakMap,
_o = new WeakMap,
Cs = new WeakMap,
Ot = new WeakMap,
_s = new WeakMap,
ca = new WeakMap,
da = new WeakMap,
or = new WeakMap,
ic = new WeakSet,
mw = function(t) {
    if (dt(this, ca, !0, "f"),
    t instanceof Error && t.name === "AbortError" && (t = new yt),
    t instanceof yt)
        return dt(this, da, !0, "f"),
        this._emit("abort", t);
    if (t instanceof V)
        return this._emit("error", t);
    if (t instanceof Error) {
        const n = new V(t.message);
        return n.cause = t,
        this._emit("error", n)
    }
    return this._emit("error", new V(String(t)))
}
;
function yw(e) {
    return (e == null ? void 0 : e.$brand) === "auto-parseable-response-format"
}
function Ai(e) {
    return (e == null ? void 0 : e.$brand) === "auto-parseable-tool"
}
function sT(e, t) {
    return !t || !vw(t) ? {
        ...e,
        choices: e.choices.map(n => ({
            ...n,
            message: {
                ...n.message,
                parsed: null,
                tool_calls: n.message.tool_calls ?? []
            }
        }))
    } : rf(e, t)
}
function rf(e, t) {
    const n = e.choices.map(r => {
        var s;
        if (r.finish_reason === "length")
            throw new Jv;
        if (r.finish_reason === "content_filter")
            throw new Zv;
        return {
            ...r,
            message: {
                ...r.message,
                tool_calls: ((s = r.message.tool_calls) == null ? void 0 : s.map(i => oT(t, i))) ?? [],
                parsed: r.message.content && !r.message.refusal ? iT(t, r.message.content) : null
            }
        }
    }
    );
    return {
        ...e,
        choices: n
    }
}
function iT(e, t) {
    var n, r;
    return ((n = e.response_format) == null ? void 0 : n.type) !== "json_schema" ? null : ((r = e.response_format) == null ? void 0 : r.type) === "json_schema" ? "$parseRaw"in e.response_format ? e.response_format.$parseRaw(t) : JSON.parse(t) : null
}
function oT(e, t) {
    var r;
    const n = (r = e.tools) == null ? void 0 : r.find(s => {
        var i;
        return ((i = s.function) == null ? void 0 : i.name) === t.function.name
    }
    );
    return {
        ...t,
        function: {
            ...t.function,
            parsed_arguments: Ai(n) ? n.$parseRaw(t.function.arguments) : n != null && n.function.strict ? JSON.parse(t.function.arguments) : null
        }
    }
}
function aT(e, t) {
    var r;
    if (!e)
        return !1;
    const n = (r = e.tools) == null ? void 0 : r.find(s => {
        var i;
        return ((i = s.function) == null ? void 0 : i.name) === t.function.name
    }
    );
    return Ai(n) || (n == null ? void 0 : n.function.strict) || !1
}
function vw(e) {
    var t;
    return yw(e.response_format) ? !0 : ((t = e.tools) == null ? void 0 : t.some(n => Ai(n) || n.type === "function" && n.function.strict === !0)) ?? !1
}
function lT(e) {
    for (const t of e ?? []) {
        if (t.type !== "function")
            throw new V(`Currently only \`function\` tool types support auto-parsing; Received \`${t.type}\``);
        if (t.function.strict !== !0)
            throw new V(`The \`${t.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`)
    }
}
var De = function(e, t, n, r) {
    if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e)
}, Ae, oc, fa, ac, lc, uc, ww, cc;
const hm = 10;
class xw extends gw {
    constructor() {
        super(...arguments),
        Ae.add(this),
        this._chatCompletions = [],
        this.messages = []
    }
    _addChatCompletion(t) {
        var r;
        this._chatCompletions.push(t),
        this._emit("chatCompletion", t);
        const n = (r = t.choices[0]) == null ? void 0 : r.message;
        return n && this._addMessage(n),
        t
    }
    _addMessage(t, n=!0) {
        if ("content"in t || (t.content = null),
        this.messages.push(t),
        n) {
            if (this._emit("message", t),
            (hw(t) || pw(t)) && t.content)
                this._emit("functionCallResult", t.content);
            else if (Ir(t) && t.function_call)
                this._emit("functionCall", t.function_call);
            else if (Ir(t) && t.tool_calls)
                for (const r of t.tool_calls)
                    r.type === "function" && this._emit("functionCall", r.function)
        }
    }
    async finalChatCompletion() {
        await this.done();
        const t = this._chatCompletions[this._chatCompletions.length - 1];
        if (!t)
            throw new V("stream ended without producing a ChatCompletion");
        return t
    }
    async finalContent() {
        return await this.done(),
        De(this, Ae, "m", oc).call(this)
    }
    async finalMessage() {
        return await this.done(),
        De(this, Ae, "m", fa).call(this)
    }
    async finalFunctionCall() {
        return await this.done(),
        De(this, Ae, "m", ac).call(this)
    }
    async finalFunctionCallResult() {
        return await this.done(),
        De(this, Ae, "m", lc).call(this)
    }
    async totalUsage() {
        return await this.done(),
        De(this, Ae, "m", uc).call(this)
    }
    allChatCompletions() {
        return [...this._chatCompletions]
    }
    _emitFinal() {
        const t = this._chatCompletions[this._chatCompletions.length - 1];
        t && this._emit("finalChatCompletion", t);
        const n = De(this, Ae, "m", fa).call(this);
        n && this._emit("finalMessage", n);
        const r = De(this, Ae, "m", oc).call(this);
        r && this._emit("finalContent", r);
        const s = De(this, Ae, "m", ac).call(this);
        s && this._emit("finalFunctionCall", s);
        const i = De(this, Ae, "m", lc).call(this);
        i != null && this._emit("finalFunctionCallResult", i),
        this._chatCompletions.some(o => o.usage) && this._emit("totalUsage", De(this, Ae, "m", uc).call(this))
    }
    async _createChatCompletion(t, n, r) {
        const s = r == null ? void 0 : r.signal;
        s && (s.aborted && this.controller.abort(),
        s.addEventListener("abort", () => this.controller.abort())),
        De(this, Ae, "m", ww).call(this, n);
        const i = await t.chat.completions.create({
            ...n,
            stream: !1
        }, {
            ...r,
            signal: this.controller.signal
        });
        return this._connected(),
        this._addChatCompletion(rf(i, n))
    }
    async _runChatCompletion(t, n, r) {
        for (const s of n.messages)
            this._addMessage(s, !1);
        return await this._createChatCompletion(t, n, r)
    }
    async _runFunctions(t, n, r) {
        var h;
        const s = "function"
          , {function_call: i="auto", stream: o, ...a} = n
          , l = typeof i != "string" && (i == null ? void 0 : i.name)
          , {maxChatCompletions: u=hm} = r || {}
          , d = {};
        for (const y of n.functions)
            d[y.name || y.function.name] = y;
        const c = n.functions.map(y => ({
            name: y.name || y.function.name,
            parameters: y.parameters,
            description: y.description
        }));
        for (const y of n.messages)
            this._addMessage(y, !1);
        for (let y = 0; y < u; ++y) {
            const w = (h = (await this._createChatCompletion(t, {
                ...a,
                function_call: i,
                functions: c,
                messages: [...this.messages]
            }, r)).choices[0]) == null ? void 0 : h.message;
            if (!w)
                throw new V("missing message in ChatCompletion response");
            if (!w.function_call)
                return;
            const {name: x, arguments: m} = w.function_call
              , p = d[x];
            if (p) {
                if (l && l !== x) {
                    const E = `Invalid function_call: ${JSON.stringify(x)}. ${JSON.stringify(l)} requested. Please try again`;
                    this._addMessage({
                        role: s,
                        name: x,
                        content: E
                    });
                    continue
                }
            } else {
                const E = `Invalid function_call: ${JSON.stringify(x)}. Available options are: ${c.map(P => JSON.stringify(P.name)).join(", ")}. Please try again`;
                this._addMessage({
                    role: s,
                    name: x,
                    content: E
                });
                continue
            }
            let g;
            try {
                g = fm(p) ? await p.parse(m) : m
            } catch (E) {
                this._addMessage({
                    role: s,
                    name: x,
                    content: E instanceof Error ? E.message : String(E)
                });
                continue
            }
            const S = await p.function(g, this)
              , _ = De(this, Ae, "m", cc).call(this, S);
            if (this._addMessage({
                role: s,
                name: x,
                content: _
            }),
            l)
                return
        }
    }
    async _runTools(t, n, r) {
        var y, v, w;
        const s = "tool"
          , {tool_choice: i="auto", stream: o, ...a} = n
          , l = typeof i != "string" && ((y = i == null ? void 0 : i.function) == null ? void 0 : y.name)
          , {maxChatCompletions: u=hm} = r || {}
          , d = n.tools.map(x => {
            if (Ai(x)) {
                if (!x.$callback)
                    throw new V("Tool given to `.runTools()` that does not have an associated function");
                return {
                    type: "function",
                    function: {
                        function: x.$callback,
                        name: x.function.name,
                        description: x.function.description || "",
                        parameters: x.function.parameters,
                        parse: x.$parseRaw,
                        strict: !0
                    }
                }
            }
            return x
        }
        )
          , c = {};
        for (const x of d)
            x.type === "function" && (c[x.function.name || x.function.function.name] = x.function);
        const h = "tools"in n ? d.map(x => x.type === "function" ? {
            type: "function",
            function: {
                name: x.function.name || x.function.function.name,
                parameters: x.function.parameters,
                description: x.function.description,
                strict: x.function.strict
            }
        } : x) : void 0;
        for (const x of n.messages)
            this._addMessage(x, !1);
        for (let x = 0; x < u; ++x) {
            const p = (v = (await this._createChatCompletion(t, {
                ...a,
                tool_choice: i,
                tools: h,
                messages: [...this.messages]
            }, r)).choices[0]) == null ? void 0 : v.message;
            if (!p)
                throw new V("missing message in ChatCompletion response");
            if (!((w = p.tool_calls) != null && w.length))
                return;
            for (const g of p.tool_calls) {
                if (g.type !== "function")
                    continue;
                const S = g.id
                  , {name: _, arguments: E} = g.function
                  , P = c[_];
                if (P) {
                    if (l && l !== _) {
                        const I = `Invalid tool_call: ${JSON.stringify(_)}. ${JSON.stringify(l)} requested. Please try again`;
                        this._addMessage({
                            role: s,
                            tool_call_id: S,
                            content: I
                        });
                        continue
                    }
                } else {
                    const I = `Invalid tool_call: ${JSON.stringify(_)}. Available options are: ${Object.keys(c).map(Re => JSON.stringify(Re)).join(", ")}. Please try again`;
                    this._addMessage({
                        role: s,
                        tool_call_id: S,
                        content: I
                    });
                    continue
                }
                let k;
                try {
                    k = fm(P) ? await P.parse(E) : E
                } catch (I) {
                    const Re = I instanceof Error ? I.message : String(I);
                    this._addMessage({
                        role: s,
                        tool_call_id: S,
                        content: Re
                    });
                    continue
                }
                const N = await P.function(k, this)
                  , T = De(this, Ae, "m", cc).call(this, N);
                if (this._addMessage({
                    role: s,
                    tool_call_id: S,
                    content: T
                }),
                l)
                    return
            }
        }
    }
}
Ae = new WeakSet,
oc = function() {
    return De(this, Ae, "m", fa).call(this).content ?? null
}
,
fa = function() {
    let t = this.messages.length;
    for (; t-- > 0; ) {
        const n = this.messages[t];
        if (Ir(n)) {
            const {function_call: r, ...s} = n
              , i = {
                ...s,
                content: n.content ?? null,
                refusal: n.refusal ?? null
            };
            return r && (i.function_call = r),
            i
        }
    }
    throw new V("stream ended without producing a ChatCompletionMessage with role=assistant")
}
,
ac = function() {
    var t, n;
    for (let r = this.messages.length - 1; r >= 0; r--) {
        const s = this.messages[r];
        if (Ir(s) && (s != null && s.function_call))
            return s.function_call;
        if (Ir(s) && ((t = s == null ? void 0 : s.tool_calls) != null && t.length))
            return (n = s.tool_calls.at(-1)) == null ? void 0 : n.function
    }
}
,
lc = function() {
    for (let t = this.messages.length - 1; t >= 0; t--) {
        const n = this.messages[t];
        if (hw(n) && n.content != null || pw(n) && n.content != null && typeof n.content == "string" && this.messages.some(r => {
            var s;
            return r.role === "assistant" && ((s = r.tool_calls) == null ? void 0 : s.some(i => i.type === "function" && i.id === n.tool_call_id))
        }
        ))
            return n.content
    }
}
,
uc = function() {
    const t = {
        completion_tokens: 0,
        prompt_tokens: 0,
        total_tokens: 0
    };
    for (const {usage: n} of this._chatCompletions)
        n && (t.completion_tokens += n.completion_tokens,
        t.prompt_tokens += n.prompt_tokens,
        t.total_tokens += n.total_tokens);
    return t
}
,
ww = function(t) {
    if (t.n != null && t.n > 1)
        throw new V("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.")
}
,
cc = function(t) {
    return typeof t == "string" ? t : t === void 0 ? "undefined" : JSON.stringify(t)
}
;
class di extends xw {
    static runFunctions(t, n, r) {
        const s = new di
          , i = {
            ...r,
            headers: {
                ...r == null ? void 0 : r.headers,
                "X-Stainless-Helper-Method": "runFunctions"
            }
        };
        return s._run( () => s._runFunctions(t, n, i)),
        s
    }
    static runTools(t, n, r) {
        const s = new di
          , i = {
            ...r,
            headers: {
                ...r == null ? void 0 : r.headers,
                "X-Stainless-Helper-Method": "runTools"
            }
        };
        return s._run( () => s._runTools(t, n, i)),
        s
    }
    _addMessage(t, n=!0) {
        super._addMessage(t, n),
        Ir(t) && t.content && this._emit("content", t.content)
    }
}
const Sw = 1
  , Cw = 2
  , _w = 4
  , Ew = 8
  , Pw = 16
  , kw = 32
  , Aw = 64
  , Tw = 128
  , bw = 256
  , Nw = Tw | bw
  , jw = Pw | kw | Nw | Aw
  , Rw = Sw | Cw | jw
  , Mw = _w | Ew
  , uT = Rw | Mw
  , me = {
    STR: Sw,
    NUM: Cw,
    ARR: _w,
    OBJ: Ew,
    NULL: Pw,
    BOOL: kw,
    NAN: Aw,
    INFINITY: Tw,
    MINUS_INFINITY: bw,
    INF: Nw,
    SPECIAL: jw,
    ATOM: Rw,
    COLLECTION: Mw,
    ALL: uT
};
class cT extends Error {
}
class dT extends Error {
}
function fT(e, t=me.ALL) {
    if (typeof e != "string")
        throw new TypeError(`expecting str, got ${typeof e}`);
    if (!e.trim())
        throw new Error(`${e} is empty`);
    return hT(e.trim(), t)
}
const hT = (e, t) => {
    const n = e.length;
    let r = 0;
    const s = h => {
        throw new cT(`${h} at position ${r}`)
    }
      , i = h => {
        throw new dT(`${h} at position ${r}`)
    }
      , o = () => (c(),
    r >= n && s("Unexpected end of input"),
    e[r] === '"' ? a() : e[r] === "{" ? l() : e[r] === "[" ? u() : e.substring(r, r + 4) === "null" || me.NULL & t && n - r < 4 && "null".startsWith(e.substring(r)) ? (r += 4,
    null) : e.substring(r, r + 4) === "true" || me.BOOL & t && n - r < 4 && "true".startsWith(e.substring(r)) ? (r += 4,
    !0) : e.substring(r, r + 5) === "false" || me.BOOL & t && n - r < 5 && "false".startsWith(e.substring(r)) ? (r += 5,
    !1) : e.substring(r, r + 8) === "Infinity" || me.INFINITY & t && n - r < 8 && "Infinity".startsWith(e.substring(r)) ? (r += 8,
    1 / 0) : e.substring(r, r + 9) === "-Infinity" || me.MINUS_INFINITY & t && 1 < n - r && n - r < 9 && "-Infinity".startsWith(e.substring(r)) ? (r += 9,
    -1 / 0) : e.substring(r, r + 3) === "NaN" || me.NAN & t && n - r < 3 && "NaN".startsWith(e.substring(r)) ? (r += 3,
    NaN) : d())
      , a = () => {
        const h = r;
        let y = !1;
        for (r++; r < n && (e[r] !== '"' || y && e[r - 1] === "\\"); )
            y = e[r] === "\\" ? !y : !1,
            r++;
        if (e.charAt(r) == '"')
            try {
                return JSON.parse(e.substring(h, ++r - Number(y)))
            } catch (v) {
                i(String(v))
            }
        else if (me.STR & t)
            try {
                return JSON.parse(e.substring(h, r - Number(y)) + '"')
            } catch {
                return JSON.parse(e.substring(h, e.lastIndexOf("\\")) + '"')
            }
        s("Unterminated string literal")
    }
      , l = () => {
        r++,
        c();
        const h = {};
        try {
            for (; e[r] !== "}"; ) {
                if (c(),
                r >= n && me.OBJ & t)
                    return h;
                const y = a();
                c(),
                r++;
                try {
                    const v = o();
                    Object.defineProperty(h, y, {
                        value: v,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    })
                } catch (v) {
                    if (me.OBJ & t)
                        return h;
                    throw v
                }
                c(),
                e[r] === "," && r++
            }
        } catch {
            if (me.OBJ & t)
                return h;
            s("Expected '}' at end of object")
        }
        return r++,
        h
    }
      , u = () => {
        r++;
        const h = [];
        try {
            for (; e[r] !== "]"; )
                h.push(o()),
                c(),
                e[r] === "," && r++
        } catch {
            if (me.ARR & t)
                return h;
            s("Expected ']' at end of array")
        }
        return r++,
        h
    }
      , d = () => {
        if (r === 0) {
            e === "-" && me.NUM & t && s("Not sure what '-' is");
            try {
                return JSON.parse(e)
            } catch (y) {
                if (me.NUM & t)
                    try {
                        return e[e.length - 1] === "." ? JSON.parse(e.substring(0, e.lastIndexOf("."))) : JSON.parse(e.substring(0, e.lastIndexOf("e")))
                    } catch {}
                i(String(y))
            }
        }
        const h = r;
        for (e[r] === "-" && r++; e[r] && !",]}".includes(e[r]); )
            r++;
        r == n && !(me.NUM & t) && s("Unterminated number literal");
        try {
            return JSON.parse(e.substring(h, r))
        } catch {
            e.substring(h, r) === "-" && me.NUM & t && s("Not sure what '-' is");
            try {
                return JSON.parse(e.substring(h, e.lastIndexOf("e")))
            } catch (v) {
                i(String(v))
            }
        }
    }
      , c = () => {
        for (; r < n && ` 
\r	`.includes(e[r]); )
            r++
    }
    ;
    return o()
}
  , pm = e => fT(e, me.ALL ^ me.NUM);
var nr = function(e, t, n, r, s) {
    if (r === "m")
        throw new TypeError("Private method is not writable");
    if (r === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? s.call(e, n) : s ? s.value = n : t.set(e, n),
    n
}, H = function(e, t, n, r) {
    if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e)
}, ce, Lt, rr, Qt, Il, no, Ll, Ol, Dl, ro, Fl, mm;
class fi extends xw {
    constructor(t) {
        super(),
        ce.add(this),
        Lt.set(this, void 0),
        rr.set(this, void 0),
        Qt.set(this, void 0),
        nr(this, Lt, t, "f"),
        nr(this, rr, [], "f")
    }
    get currentChatCompletionSnapshot() {
        return H(this, Qt, "f")
    }
    static fromReadableStream(t) {
        const n = new fi(null);
        return n._run( () => n._fromReadableStream(t)),
        n
    }
    static createChatCompletion(t, n, r) {
        const s = new fi(n);
        return s._run( () => s._runChatCompletion(t, {
            ...n,
            stream: !0
        }, {
            ...r,
            headers: {
                ...r == null ? void 0 : r.headers,
                "X-Stainless-Helper-Method": "stream"
            }
        })),
        s
    }
    async _createChatCompletion(t, n, r) {
        var o;
        super._createChatCompletion;
        const s = r == null ? void 0 : r.signal;
        s && (s.aborted && this.controller.abort(),
        s.addEventListener("abort", () => this.controller.abort())),
        H(this, ce, "m", Il).call(this);
        const i = await t.chat.completions.create({
            ...n,
            stream: !0
        }, {
            ...r,
            signal: this.controller.signal
        });
        this._connected();
        for await(const a of i)
            H(this, ce, "m", Ll).call(this, a);
        if ((o = i.controller.signal) != null && o.aborted)
            throw new yt;
        return this._addChatCompletion(H(this, ce, "m", ro).call(this))
    }
    async _fromReadableStream(t, n) {
        var o;
        const r = n == null ? void 0 : n.signal;
        r && (r.aborted && this.controller.abort(),
        r.addEventListener("abort", () => this.controller.abort())),
        H(this, ce, "m", Il).call(this),
        this._connected();
        const s = bt.fromReadableStream(t, this.controller);
        let i;
        for await(const a of s)
            i && i !== a.id && this._addChatCompletion(H(this, ce, "m", ro).call(this)),
            H(this, ce, "m", Ll).call(this, a),
            i = a.id;
        if ((o = s.controller.signal) != null && o.aborted)
            throw new yt;
        return this._addChatCompletion(H(this, ce, "m", ro).call(this))
    }
    [(Lt = new WeakMap,
    rr = new WeakMap,
    Qt = new WeakMap,
    ce = new WeakSet,
    Il = function() {
        this.ended || nr(this, Qt, void 0, "f")
    }
    ,
    no = function(n) {
        let r = H(this, rr, "f")[n.index];
        return r || (r = {
            content_done: !1,
            refusal_done: !1,
            logprobs_content_done: !1,
            logprobs_refusal_done: !1,
            done_tool_calls: new Set,
            current_tool_call_index: null
        },
        H(this, rr, "f")[n.index] = r,
        r)
    }
    ,
    Ll = function(n) {
        var s, i, o, a, l, u, d, c, h, y, v, w, x, m, p;
        if (this.ended)
            return;
        const r = H(this, ce, "m", mm).call(this, n);
        this._emit("chunk", n, r);
        for (const g of n.choices) {
            const S = r.choices[g.index];
            g.delta.content != null && ((s = S.message) == null ? void 0 : s.role) === "assistant" && ((i = S.message) != null && i.content) && (this._emit("content", g.delta.content, S.message.content),
            this._emit("content.delta", {
                delta: g.delta.content,
                snapshot: S.message.content,
                parsed: S.message.parsed
            })),
            g.delta.refusal != null && ((o = S.message) == null ? void 0 : o.role) === "assistant" && ((a = S.message) != null && a.refusal) && this._emit("refusal.delta", {
                delta: g.delta.refusal,
                snapshot: S.message.refusal
            }),
            ((l = g.logprobs) == null ? void 0 : l.content) != null && ((u = S.message) == null ? void 0 : u.role) === "assistant" && this._emit("logprobs.content.delta", {
                content: (d = g.logprobs) == null ? void 0 : d.content,
                snapshot: ((c = S.logprobs) == null ? void 0 : c.content) ?? []
            }),
            ((h = g.logprobs) == null ? void 0 : h.refusal) != null && ((y = S.message) == null ? void 0 : y.role) === "assistant" && this._emit("logprobs.refusal.delta", {
                refusal: (v = g.logprobs) == null ? void 0 : v.refusal,
                snapshot: ((w = S.logprobs) == null ? void 0 : w.refusal) ?? []
            });
            const _ = H(this, ce, "m", no).call(this, S);
            S.finish_reason && (H(this, ce, "m", Dl).call(this, S),
            _.current_tool_call_index != null && H(this, ce, "m", Ol).call(this, S, _.current_tool_call_index));
            for (const E of g.delta.tool_calls ?? [])
                _.current_tool_call_index !== E.index && (H(this, ce, "m", Dl).call(this, S),
                _.current_tool_call_index != null && H(this, ce, "m", Ol).call(this, S, _.current_tool_call_index)),
                _.current_tool_call_index = E.index;
            for (const E of g.delta.tool_calls ?? []) {
                const P = (x = S.message.tool_calls) == null ? void 0 : x[E.index];
                P != null && P.type && ((P == null ? void 0 : P.type) === "function" ? this._emit("tool_calls.function.arguments.delta", {
                    name: (m = P.function) == null ? void 0 : m.name,
                    index: E.index,
                    arguments: P.function.arguments,
                    parsed_arguments: P.function.parsed_arguments,
                    arguments_delta: ((p = E.function) == null ? void 0 : p.arguments) ?? ""
                }) : (P == null || P.type,
                void 0))
            }
        }
    }
    ,
    Ol = function(n, r) {
        var o, a, l;
        if (H(this, ce, "m", no).call(this, n).done_tool_calls.has(r))
            return;
        const i = (o = n.message.tool_calls) == null ? void 0 : o[r];
        if (!i)
            throw new Error("no tool call snapshot");
        if (!i.type)
            throw new Error("tool call snapshot missing `type`");
        if (i.type === "function") {
            const u = (l = (a = H(this, Lt, "f")) == null ? void 0 : a.tools) == null ? void 0 : l.find(d => d.type === "function" && d.function.name === i.function.name);
            this._emit("tool_calls.function.arguments.done", {
                name: i.function.name,
                index: r,
                arguments: i.function.arguments,
                parsed_arguments: Ai(u) ? u.$parseRaw(i.function.arguments) : u != null && u.function.strict ? JSON.parse(i.function.arguments) : null
            })
        } else
            i.type
    }
    ,
    Dl = function(n) {
        var s, i;
        const r = H(this, ce, "m", no).call(this, n);
        if (n.message.content && !r.content_done) {
            r.content_done = !0;
            const o = H(this, ce, "m", Fl).call(this);
            this._emit("content.done", {
                content: n.message.content,
                parsed: o ? o.$parseRaw(n.message.content) : null
            })
        }
        n.message.refusal && !r.refusal_done && (r.refusal_done = !0,
        this._emit("refusal.done", {
            refusal: n.message.refusal
        })),
        (s = n.logprobs) != null && s.content && !r.logprobs_content_done && (r.logprobs_content_done = !0,
        this._emit("logprobs.content.done", {
            content: n.logprobs.content
        })),
        (i = n.logprobs) != null && i.refusal && !r.logprobs_refusal_done && (r.logprobs_refusal_done = !0,
        this._emit("logprobs.refusal.done", {
            refusal: n.logprobs.refusal
        }))
    }
    ,
    ro = function() {
        if (this.ended)
            throw new V("stream has ended, this shouldn't happen");
        const n = H(this, Qt, "f");
        if (!n)
            throw new V("request ended without sending any chunks");
        return nr(this, Qt, void 0, "f"),
        nr(this, rr, [], "f"),
        pT(n, H(this, Lt, "f"))
    }
    ,
    Fl = function() {
        var r;
        const n = (r = H(this, Lt, "f")) == null ? void 0 : r.response_format;
        return yw(n) ? n : null
    }
    ,
    mm = function(n) {
        var r, s, i, o;
        let a = H(this, Qt, "f");
        const {choices: l, ...u} = n;
        a ? Object.assign(a, u) : a = nr(this, Qt, {
            ...u,
            choices: []
        }, "f");
        for (const {delta: d, finish_reason: c, index: h, logprobs: y=null, ...v} of n.choices) {
            let w = a.choices[h];
            if (w || (w = a.choices[h] = {
                finish_reason: c,
                index: h,
                message: {},
                logprobs: y,
                ...v
            }),
            y)
                if (!w.logprobs)
                    w.logprobs = Object.assign({}, y);
                else {
                    const {content: E, refusal: P, ...k} = y;
                    Object.assign(w.logprobs, k),
                    E && ((r = w.logprobs).content ?? (r.content = []),
                    w.logprobs.content.push(...E)),
                    P && ((s = w.logprobs).refusal ?? (s.refusal = []),
                    w.logprobs.refusal.push(...P))
                }
            if (c && (w.finish_reason = c,
            H(this, Lt, "f") && vw(H(this, Lt, "f")))) {
                if (c === "length")
                    throw new Jv;
                if (c === "content_filter")
                    throw new Zv
            }
            if (Object.assign(w, v),
            !d)
                continue;
            const {content: x, refusal: m, function_call: p, role: g, tool_calls: S, ..._} = d;
            if (Object.assign(w.message, _),
            m && (w.message.refusal = (w.message.refusal || "") + m),
            g && (w.message.role = g),
            p && (w.message.function_call ? (p.name && (w.message.function_call.name = p.name),
            p.arguments && ((i = w.message.function_call).arguments ?? (i.arguments = ""),
            w.message.function_call.arguments += p.arguments)) : w.message.function_call = p),
            x && (w.message.content = (w.message.content || "") + x,
            !w.message.refusal && H(this, ce, "m", Fl).call(this) && (w.message.parsed = pm(w.message.content))),
            S) {
                w.message.tool_calls || (w.message.tool_calls = []);
                for (const {index: E, id: P, type: k, function: N, ...T} of S) {
                    const I = (o = w.message.tool_calls)[E] ?? (o[E] = {});
                    Object.assign(I, T),
                    P && (I.id = P),
                    k && (I.type = k),
                    N && (I.function ?? (I.function = {
                        name: N.name ?? "",
                        arguments: ""
                    })),
                    N != null && N.name && (I.function.name = N.name),
                    N != null && N.arguments && (I.function.arguments += N.arguments,
                    aT(H(this, Lt, "f"), I) && (I.function.parsed_arguments = pm(I.function.arguments)))
                }
            }
        }
        return a
    }
    ,
    Symbol.asyncIterator)]() {
        const t = []
          , n = [];
        let r = !1;
        return this.on("chunk", s => {
            const i = n.shift();
            i ? i.resolve(s) : t.push(s)
        }
        ),
        this.on("end", () => {
            r = !0;
            for (const s of n)
                s.resolve(void 0);
            n.length = 0
        }
        ),
        this.on("abort", s => {
            r = !0;
            for (const i of n)
                i.reject(s);
            n.length = 0
        }
        ),
        this.on("error", s => {
            r = !0;
            for (const i of n)
                i.reject(s);
            n.length = 0
        }
        ),
        {
            next: async () => t.length ? {
                value: t.shift(),
                done: !1
            } : r ? {
                value: void 0,
                done: !0
            } : new Promise( (i, o) => n.push({
                resolve: i,
                reject: o
            })).then(i => i ? {
                value: i,
                done: !1
            } : {
                value: void 0,
                done: !0
            }),
            return: async () => (this.abort(),
            {
                value: void 0,
                done: !0
            })
        }
    }
    toReadableStream() {
        return new bt(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()
    }
}
function pT(e, t) {
    const {id: n, choices: r, created: s, model: i, system_fingerprint: o, ...a} = e
      , l = {
        ...a,
        id: n,
        choices: r.map( ({message: u, finish_reason: d, index: c, logprobs: h, ...y}) => {
            if (!d)
                throw new V(`missing finish_reason for choice ${c}`);
            const {content: v=null, function_call: w, tool_calls: x, ...m} = u
              , p = u.role;
            if (!p)
                throw new V(`missing role for choice ${c}`);
            if (w) {
                const {arguments: g, name: S} = w;
                if (g == null)
                    throw new V(`missing function_call.arguments for choice ${c}`);
                if (!S)
                    throw new V(`missing function_call.name for choice ${c}`);
                return {
                    ...y,
                    message: {
                        content: v,
                        function_call: {
                            arguments: g,
                            name: S
                        },
                        role: p,
                        refusal: u.refusal ?? null
                    },
                    finish_reason: d,
                    index: c,
                    logprobs: h
                }
            }
            return x ? {
                ...y,
                index: c,
                finish_reason: d,
                logprobs: h,
                message: {
                    ...m,
                    role: p,
                    content: v,
                    refusal: u.refusal ?? null,
                    tool_calls: x.map( (g, S) => {
                        const {function: _, type: E, id: P, ...k} = g
                          , {arguments: N, name: T, ...I} = _ || {};
                        if (P == null)
                            throw new V(`missing choices[${c}].tool_calls[${S}].id
${so(e)}`);
                        if (E == null)
                            throw new V(`missing choices[${c}].tool_calls[${S}].type
${so(e)}`);
                        if (T == null)
                            throw new V(`missing choices[${c}].tool_calls[${S}].function.name
${so(e)}`);
                        if (N == null)
                            throw new V(`missing choices[${c}].tool_calls[${S}].function.arguments
${so(e)}`);
                        return {
                            ...k,
                            id: P,
                            type: E,
                            function: {
                                ...I,
                                name: T,
                                arguments: N
                            }
                        }
                    }
                    )
                }
            } : {
                ...y,
                message: {
                    ...m,
                    content: v,
                    role: p,
                    refusal: u.refusal ?? null
                },
                finish_reason: d,
                index: c,
                logprobs: h
            }
        }
        ),
        created: s,
        model: i,
        object: "chat.completion",
        ...o ? {
            system_fingerprint: o
        } : {}
    };
    return sT(l, t)
}
function so(e) {
    return JSON.stringify(e)
}
class Lr extends fi {
    static fromReadableStream(t) {
        const n = new Lr(null);
        return n._run( () => n._fromReadableStream(t)),
        n
    }
    static runFunctions(t, n, r) {
        const s = new Lr(null)
          , i = {
            ...r,
            headers: {
                ...r == null ? void 0 : r.headers,
                "X-Stainless-Helper-Method": "runFunctions"
            }
        };
        return s._run( () => s._runFunctions(t, n, i)),
        s
    }
    static runTools(t, n, r) {
        const s = new Lr(n)
          , i = {
            ...r,
            headers: {
                ...r == null ? void 0 : r.headers,
                "X-Stainless-Helper-Method": "runTools"
            }
        };
        return s._run( () => s._runTools(t, n, i)),
        s
    }
}
let Iw = class extends W {
    parse(t, n) {
        return lT(t.tools),
        this._client.chat.completions.create(t, {
            ...n,
            headers: {
                ...n == null ? void 0 : n.headers,
                "X-Stainless-Helper-Method": "beta.chat.completions.parse"
            }
        })._thenUnwrap(r => rf(r, t))
    }
    runFunctions(t, n) {
        return t.stream ? Lr.runFunctions(this._client, t, n) : di.runFunctions(this._client, t, n)
    }
    runTools(t, n) {
        return t.stream ? Lr.runTools(this._client, t, n) : di.runTools(this._client, t, n)
    }
    stream(t, n) {
        return fi.createChatCompletion(this._client, t, n)
    }
}
;
class dc extends W {
    constructor() {
        super(...arguments),
        this.completions = new Iw(this._client)
    }
}
(function(e) {
    e.Completions = Iw
}
)(dc || (dc = {}));
var M = function(e, t, n, r) {
    if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !r : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e)
}, We = function(e, t, n, r, s) {
    if (r === "m")
        throw new TypeError("Private method is not writable");
    if (r === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !s : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? s.call(e, n) : s ? s.value = n : t.set(e, n),
    n
}, Se, fc, At, Eo, pt, Vn, Pr, In, ha, He, Po, ko, Bs, Es, Ps, gm, ym, vm, wm, xm, Sm, Cm;
class vt extends gw {
    constructor() {
        super(...arguments),
        Se.add(this),
        fc.set(this, []),
        At.set(this, {}),
        Eo.set(this, {}),
        pt.set(this, void 0),
        Vn.set(this, void 0),
        Pr.set(this, void 0),
        In.set(this, void 0),
        ha.set(this, void 0),
        He.set(this, void 0),
        Po.set(this, void 0),
        ko.set(this, void 0),
        Bs.set(this, void 0)
    }
    [(fc = new WeakMap,
    At = new WeakMap,
    Eo = new WeakMap,
    pt = new WeakMap,
    Vn = new WeakMap,
    Pr = new WeakMap,
    In = new WeakMap,
    ha = new WeakMap,
    He = new WeakMap,
    Po = new WeakMap,
    ko = new WeakMap,
    Bs = new WeakMap,
    Se = new WeakSet,
    Symbol.asyncIterator)]() {
        const t = []
          , n = [];
        let r = !1;
        return this.on("event", s => {
            const i = n.shift();
            i ? i.resolve(s) : t.push(s)
        }
        ),
        this.on("end", () => {
            r = !0;
            for (const s of n)
                s.resolve(void 0);
            n.length = 0
        }
        ),
        this.on("abort", s => {
            r = !0;
            for (const i of n)
                i.reject(s);
            n.length = 0
        }
        ),
        this.on("error", s => {
            r = !0;
            for (const i of n)
                i.reject(s);
            n.length = 0
        }
        ),
        {
            next: async () => t.length ? {
                value: t.shift(),
                done: !1
            } : r ? {
                value: void 0,
                done: !0
            } : new Promise( (i, o) => n.push({
                resolve: i,
                reject: o
            })).then(i => i ? {
                value: i,
                done: !1
            } : {
                value: void 0,
                done: !0
            }),
            return: async () => (this.abort(),
            {
                value: void 0,
                done: !0
            })
        }
    }
    static fromReadableStream(t) {
        const n = new vt;
        return n._run( () => n._fromReadableStream(t)),
        n
    }
    async _fromReadableStream(t, n) {
        var i;
        const r = n == null ? void 0 : n.signal;
        r && (r.aborted && this.controller.abort(),
        r.addEventListener("abort", () => this.controller.abort())),
        this._connected();
        const s = bt.fromReadableStream(t, this.controller);
        for await(const o of s)
            M(this, Se, "m", Es).call(this, o);
        if ((i = s.controller.signal) != null && i.aborted)
            throw new yt;
        return this._addRun(M(this, Se, "m", Ps).call(this))
    }
    toReadableStream() {
        return new bt(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()
    }
    static createToolAssistantStream(t, n, r, s, i) {
        const o = new vt;
        return o._run( () => o._runToolAssistantStream(t, n, r, s, {
            ...i,
            headers: {
                ...i == null ? void 0 : i.headers,
                "X-Stainless-Helper-Method": "stream"
            }
        })),
        o
    }
    async _createToolAssistantStream(t, n, r, s, i) {
        var u;
        const o = i == null ? void 0 : i.signal;
        o && (o.aborted && this.controller.abort(),
        o.addEventListener("abort", () => this.controller.abort()));
        const a = {
            ...s,
            stream: !0
        }
          , l = await t.submitToolOutputs(n, r, a, {
            ...i,
            signal: this.controller.signal
        });
        this._connected();
        for await(const d of l)
            M(this, Se, "m", Es).call(this, d);
        if ((u = l.controller.signal) != null && u.aborted)
            throw new yt;
        return this._addRun(M(this, Se, "m", Ps).call(this))
    }
    static createThreadAssistantStream(t, n, r) {
        const s = new vt;
        return s._run( () => s._threadAssistantStream(t, n, {
            ...r,
            headers: {
                ...r == null ? void 0 : r.headers,
                "X-Stainless-Helper-Method": "stream"
            }
        })),
        s
    }
    static createAssistantStream(t, n, r, s) {
        const i = new vt;
        return i._run( () => i._runAssistantStream(t, n, r, {
            ...s,
            headers: {
                ...s == null ? void 0 : s.headers,
                "X-Stainless-Helper-Method": "stream"
            }
        })),
        i
    }
    currentEvent() {
        return M(this, Po, "f")
    }
    currentRun() {
        return M(this, ko, "f")
    }
    currentMessageSnapshot() {
        return M(this, pt, "f")
    }
    currentRunStepSnapshot() {
        return M(this, Bs, "f")
    }
    async finalRunSteps() {
        return await this.done(),
        Object.values(M(this, At, "f"))
    }
    async finalMessages() {
        return await this.done(),
        Object.values(M(this, Eo, "f"))
    }
    async finalRun() {
        if (await this.done(),
        !M(this, Vn, "f"))
            throw Error("Final run was not received.");
        return M(this, Vn, "f")
    }
    async _createThreadAssistantStream(t, n, r) {
        var a;
        const s = r == null ? void 0 : r.signal;
        s && (s.aborted && this.controller.abort(),
        s.addEventListener("abort", () => this.controller.abort()));
        const i = {
            ...n,
            stream: !0
        }
          , o = await t.createAndRun(i, {
            ...r,
            signal: this.controller.signal
        });
        this._connected();
        for await(const l of o)
            M(this, Se, "m", Es).call(this, l);
        if ((a = o.controller.signal) != null && a.aborted)
            throw new yt;
        return this._addRun(M(this, Se, "m", Ps).call(this))
    }
    async _createAssistantStream(t, n, r, s) {
        var l;
        const i = s == null ? void 0 : s.signal;
        i && (i.aborted && this.controller.abort(),
        i.addEventListener("abort", () => this.controller.abort()));
        const o = {
            ...r,
            stream: !0
        }
          , a = await t.create(n, o, {
            ...s,
            signal: this.controller.signal
        });
        this._connected();
        for await(const u of a)
            M(this, Se, "m", Es).call(this, u);
        if ((l = a.controller.signal) != null && l.aborted)
            throw new yt;
        return this._addRun(M(this, Se, "m", Ps).call(this))
    }
    static accumulateDelta(t, n) {
        for (const [r,s] of Object.entries(n)) {
            if (!t.hasOwnProperty(r)) {
                t[r] = s;
                continue
            }
            let i = t[r];
            if (i == null) {
                t[r] = s;
                continue
            }
            if (r === "index" || r === "type") {
                t[r] = s;
                continue
            }
            if (typeof i == "string" && typeof s == "string")
                i += s;
            else if (typeof i == "number" && typeof s == "number")
                i += s;
            else if (Ml(i) && Ml(s))
                i = this.accumulateDelta(i, s);
            else if (Array.isArray(i) && Array.isArray(s)) {
                if (i.every(o => typeof o == "string" || typeof o == "number")) {
                    i.push(...s);
                    continue
                }
                for (const o of s) {
                    if (!Ml(o))
                        throw new Error(`Expected array delta entry to be an object but got: ${o}`);
                    const a = o.index;
                    if (a == null)
                        throw console.error(o),
                        new Error("Expected array delta entry to have an `index` property");
                    if (typeof a != "number")
                        throw new Error(`Expected array delta entry \`index\` property to be a number but got ${a}`);
                    const l = i[a];
                    l == null ? i.push(o) : i[a] = this.accumulateDelta(l, o)
                }
                continue
            } else
                throw Error(`Unhandled record type: ${r}, deltaValue: ${s}, accValue: ${i}`);
            t[r] = i
        }
        return t
    }
    _addRun(t) {
        return t
    }
    async _threadAssistantStream(t, n, r) {
        return await this._createThreadAssistantStream(n, t, r)
    }
    async _runAssistantStream(t, n, r, s) {
        return await this._createAssistantStream(n, t, r, s)
    }
    async _runToolAssistantStream(t, n, r, s, i) {
        return await this._createToolAssistantStream(r, t, n, s, i)
    }
}
Es = function(t) {
    if (!this.ended)
        switch (We(this, Po, t, "f"),
        M(this, Se, "m", vm).call(this, t),
        t.event) {
        case "thread.created":
            break;
        case "thread.run.created":
        case "thread.run.queued":
        case "thread.run.in_progress":
        case "thread.run.requires_action":
        case "thread.run.completed":
        case "thread.run.failed":
        case "thread.run.cancelling":
        case "thread.run.cancelled":
        case "thread.run.expired":
            M(this, Se, "m", Cm).call(this, t);
            break;
        case "thread.run.step.created":
        case "thread.run.step.in_progress":
        case "thread.run.step.delta":
        case "thread.run.step.completed":
        case "thread.run.step.failed":
        case "thread.run.step.cancelled":
        case "thread.run.step.expired":
            M(this, Se, "m", ym).call(this, t);
            break;
        case "thread.message.created":
        case "thread.message.in_progress":
        case "thread.message.delta":
        case "thread.message.completed":
        case "thread.message.incomplete":
            M(this, Se, "m", gm).call(this, t);
            break;
        case "error":
            throw new Error("Encountered an error event in event processing - errors should be processed earlier")
        }
}
,
Ps = function() {
    if (this.ended)
        throw new V("stream has ended, this shouldn't happen");
    if (!M(this, Vn, "f"))
        throw Error("Final run has not been received");
    return M(this, Vn, "f")
}
,
gm = function(t) {
    const [n,r] = M(this, Se, "m", xm).call(this, t, M(this, pt, "f"));
    We(this, pt, n, "f"),
    M(this, Eo, "f")[n.id] = n;
    for (const s of r) {
        const i = n.content[s.index];
        (i == null ? void 0 : i.type) == "text" && this._emit("textCreated", i.text)
    }
    switch (t.event) {
    case "thread.message.created":
        this._emit("messageCreated", t.data);
        break;
    case "thread.message.in_progress":
        break;
    case "thread.message.delta":
        if (this._emit("messageDelta", t.data.delta, n),
        t.data.delta.content)
            for (const s of t.data.delta.content) {
                if (s.type == "text" && s.text) {
                    let i = s.text
                      , o = n.content[s.index];
                    if (o && o.type == "text")
                        this._emit("textDelta", i, o.text);
                    else
                        throw Error("The snapshot associated with this text delta is not text or missing")
                }
                if (s.index != M(this, Pr, "f")) {
                    if (M(this, In, "f"))
                        switch (M(this, In, "f").type) {
                        case "text":
                            this._emit("textDone", M(this, In, "f").text, M(this, pt, "f"));
                            break;
                        case "image_file":
                            this._emit("imageFileDone", M(this, In, "f").image_file, M(this, pt, "f"));
                            break
                        }
                    We(this, Pr, s.index, "f")
                }
                We(this, In, n.content[s.index], "f")
            }
        break;
    case "thread.message.completed":
    case "thread.message.incomplete":
        if (M(this, Pr, "f") !== void 0) {
            const s = t.data.content[M(this, Pr, "f")];
            if (s)
                switch (s.type) {
                case "image_file":
                    this._emit("imageFileDone", s.image_file, M(this, pt, "f"));
                    break;
                case "text":
                    this._emit("textDone", s.text, M(this, pt, "f"));
                    break
                }
        }
        M(this, pt, "f") && this._emit("messageDone", t.data),
        We(this, pt, void 0, "f")
    }
}
,
ym = function(t) {
    const n = M(this, Se, "m", wm).call(this, t);
    switch (We(this, Bs, n, "f"),
    t.event) {
    case "thread.run.step.created":
        this._emit("runStepCreated", t.data);
        break;
    case "thread.run.step.delta":
        const r = t.data.delta;
        if (r.step_details && r.step_details.type == "tool_calls" && r.step_details.tool_calls && n.step_details.type == "tool_calls")
            for (const i of r.step_details.tool_calls)
                i.index == M(this, ha, "f") ? this._emit("toolCallDelta", i, n.step_details.tool_calls[i.index]) : (M(this, He, "f") && this._emit("toolCallDone", M(this, He, "f")),
                We(this, ha, i.index, "f"),
                We(this, He, n.step_details.tool_calls[i.index], "f"),
                M(this, He, "f") && this._emit("toolCallCreated", M(this, He, "f")));
        this._emit("runStepDelta", t.data.delta, n);
        break;
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
        We(this, Bs, void 0, "f"),
        t.data.step_details.type == "tool_calls" && M(this, He, "f") && (this._emit("toolCallDone", M(this, He, "f")),
        We(this, He, void 0, "f")),
        this._emit("runStepDone", t.data, n);
        break
    }
}
,
vm = function(t) {
    M(this, fc, "f").push(t),
    this._emit("event", t)
}
,
wm = function(t) {
    switch (t.event) {
    case "thread.run.step.created":
        return M(this, At, "f")[t.data.id] = t.data,
        t.data;
    case "thread.run.step.delta":
        let n = M(this, At, "f")[t.data.id];
        if (!n)
            throw Error("Received a RunStepDelta before creation of a snapshot");
        let r = t.data;
        if (r.delta) {
            const s = vt.accumulateDelta(n, r.delta);
            M(this, At, "f")[t.data.id] = s
        }
        return M(this, At, "f")[t.data.id];
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
    case "thread.run.step.in_progress":
        M(this, At, "f")[t.data.id] = t.data;
        break
    }
    if (M(this, At, "f")[t.data.id])
        return M(this, At, "f")[t.data.id];
    throw new Error("No snapshot available")
}
,
xm = function(t, n) {
    let r = [];
    switch (t.event) {
    case "thread.message.created":
        return [t.data, r];
    case "thread.message.delta":
        if (!n)
            throw Error("Received a delta with no existing snapshot (there should be one from message creation)");
        let s = t.data;
        if (s.delta.content)
            for (const i of s.delta.content)
                if (i.index in n.content) {
                    let o = n.content[i.index];
                    n.content[i.index] = M(this, Se, "m", Sm).call(this, i, o)
                } else
                    n.content[i.index] = i,
                    r.push(i);
        return [n, r];
    case "thread.message.in_progress":
    case "thread.message.completed":
    case "thread.message.incomplete":
        if (n)
            return [n, r];
        throw Error("Received thread message event with no existing snapshot")
    }
    throw Error("Tried to accumulate a non-message event")
}
,
Sm = function(t, n) {
    return vt.accumulateDelta(n, t)
}
,
Cm = function(t) {
    switch (We(this, ko, t.data, "f"),
    t.event) {
    case "thread.run.created":
        break;
    case "thread.run.queued":
        break;
    case "thread.run.in_progress":
        break;
    case "thread.run.requires_action":
    case "thread.run.cancelled":
    case "thread.run.failed":
    case "thread.run.completed":
    case "thread.run.expired":
        We(this, Vn, t.data, "f"),
        M(this, He, "f") && (this._emit("toolCallDone", M(this, He, "f")),
        We(this, He, void 0, "f"));
        break
    }
}
;
class sf extends W {
    create(t, n, r) {
        return this._client.post(`/threads/${t}/messages`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    retrieve(t, n, r) {
        return this._client.get(`/threads/${t}/messages/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    update(t, n, r, s) {
        return this._client.post(`/threads/${t}/messages/${n}`, {
            body: r,
            ...s,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...s == null ? void 0 : s.headers
            }
        })
    }
    list(t, n={}, r) {
        return ze(n) ? this.list(t, {}, n) : this._client.getAPIList(`/threads/${t}/messages`, of, {
            query: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    del(t, n, r) {
        return this._client.delete(`/threads/${t}/messages/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
}
class of extends Ct {
}
sf.MessagesPage = of;
class af extends W {
    retrieve(t, n, r, s={}, i) {
        return ze(s) ? this.retrieve(t, n, r, {}, s) : this._client.get(`/threads/${t}/runs/${n}/steps/${r}`, {
            query: s,
            ...i,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...i == null ? void 0 : i.headers
            }
        })
    }
    list(t, n, r={}, s) {
        return ze(r) ? this.list(t, n, {}, r) : this._client.getAPIList(`/threads/${t}/runs/${n}/steps`, lf, {
            query: r,
            ...s,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...s == null ? void 0 : s.headers
            }
        })
    }
}
class lf extends Ct {
}
af.RunStepsPage = lf;
class Ti extends W {
    constructor() {
        super(...arguments),
        this.steps = new af(this._client)
    }
    create(t, n, r) {
        const {include: s, ...i} = n;
        return this._client.post(`/threads/${t}/runs`, {
            query: {
                include: s
            },
            body: i,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            },
            stream: n.stream ?? !1
        })
    }
    retrieve(t, n, r) {
        return this._client.get(`/threads/${t}/runs/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    update(t, n, r, s) {
        return this._client.post(`/threads/${t}/runs/${n}`, {
            body: r,
            ...s,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...s == null ? void 0 : s.headers
            }
        })
    }
    list(t, n={}, r) {
        return ze(n) ? this.list(t, {}, n) : this._client.getAPIList(`/threads/${t}/runs`, uf, {
            query: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    cancel(t, n, r) {
        return this._client.post(`/threads/${t}/runs/${n}/cancel`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    async createAndPoll(t, n, r) {
        const s = await this.create(t, n, r);
        return await this.poll(t, s.id, r)
    }
    createAndStream(t, n, r) {
        return vt.createAssistantStream(t, this._client.beta.threads.runs, n, r)
    }
    async poll(t, n, r) {
        const s = {
            ...r == null ? void 0 : r.headers,
            "X-Stainless-Poll-Helper": "true"
        };
        for (r != null && r.pollIntervalMs && (s["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString()); ; ) {
            const {data: i, response: o} = await this.retrieve(t, n, {
                ...r,
                headers: {
                    ...r == null ? void 0 : r.headers,
                    ...s
                }
            }).withResponse();
            switch (i.status) {
            case "queued":
            case "in_progress":
            case "cancelling":
                let a = 5e3;
                if (r != null && r.pollIntervalMs)
                    a = r.pollIntervalMs;
                else {
                    const l = o.headers.get("openai-poll-after-ms");
                    if (l) {
                        const u = parseInt(l);
                        isNaN(u) || (a = u)
                    }
                }
                await Pi(a);
                break;
            case "requires_action":
            case "incomplete":
            case "cancelled":
            case "completed":
            case "failed":
            case "expired":
                return i
            }
        }
    }
    stream(t, n, r) {
        return vt.createAssistantStream(t, this._client.beta.threads.runs, n, r)
    }
    submitToolOutputs(t, n, r, s) {
        return this._client.post(`/threads/${t}/runs/${n}/submit_tool_outputs`, {
            body: r,
            ...s,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...s == null ? void 0 : s.headers
            },
            stream: r.stream ?? !1
        })
    }
    async submitToolOutputsAndPoll(t, n, r, s) {
        const i = await this.submitToolOutputs(t, n, r, s);
        return await this.poll(t, i.id, s)
    }
    submitToolOutputsStream(t, n, r, s) {
        return vt.createToolAssistantStream(t, n, this._client.beta.threads.runs, r, s)
    }
}
class uf extends Ct {
}
Ti.RunsPage = uf;
Ti.Steps = af;
Ti.RunStepsPage = lf;
class es extends W {
    constructor() {
        super(...arguments),
        this.runs = new Ti(this._client),
        this.messages = new sf(this._client)
    }
    create(t={}, n) {
        return ze(t) ? this.create({}, t) : this._client.post("/threads", {
            body: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    retrieve(t, n) {
        return this._client.get(`/threads/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    update(t, n, r) {
        return this._client.post(`/threads/${t}`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    del(t, n) {
        return this._client.delete(`/threads/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    createAndRun(t, n) {
        return this._client.post("/threads/runs", {
            body: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            },
            stream: t.stream ?? !1
        })
    }
    async createAndRunPoll(t, n) {
        const r = await this.createAndRun(t, n);
        return await this.runs.poll(r.thread_id, r.id, n)
    }
    createAndRunStream(t, n) {
        return vt.createThreadAssistantStream(t, this._client.beta.threads, n)
    }
}
es.Runs = Ti;
es.RunsPage = uf;
es.Messages = sf;
es.MessagesPage = of;
const mT = async e => {
    const t = await Promise.allSettled(e)
      , n = t.filter(s => s.status === "rejected");
    if (n.length) {
        for (const s of n)
            console.error(s.reason);
        throw new Error(`${n.length} promise(s) failed - see the above errors`)
    }
    const r = [];
    for (const s of t)
        s.status === "fulfilled" && r.push(s.value);
    return r
}
;
let cf = class extends W {
    create(t, n, r) {
        return this._client.post(`/vector_stores/${t}/files`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    retrieve(t, n, r) {
        return this._client.get(`/vector_stores/${t}/files/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    list(t, n={}, r) {
        return ze(n) ? this.list(t, {}, n) : this._client.getAPIList(`/vector_stores/${t}/files`, $a, {
            query: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    del(t, n, r) {
        return this._client.delete(`/vector_stores/${t}/files/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    async createAndPoll(t, n, r) {
        const s = await this.create(t, n, r);
        return await this.poll(t, s.id, r)
    }
    async poll(t, n, r) {
        const s = {
            ...r == null ? void 0 : r.headers,
            "X-Stainless-Poll-Helper": "true"
        };
        for (r != null && r.pollIntervalMs && (s["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString()); ; ) {
            const i = await this.retrieve(t, n, {
                ...r,
                headers: s
            }).withResponse()
              , o = i.data;
            switch (o.status) {
            case "in_progress":
                let a = 5e3;
                if (r != null && r.pollIntervalMs)
                    a = r.pollIntervalMs;
                else {
                    const l = i.response.headers.get("openai-poll-after-ms");
                    if (l) {
                        const u = parseInt(l);
                        isNaN(u) || (a = u)
                    }
                }
                await Pi(a);
                break;
            case "failed":
            case "completed":
                return o
            }
        }
    }
    async upload(t, n, r) {
        const s = await this._client.files.create({
            file: n,
            purpose: "assistants"
        }, r);
        return this.create(t, {
            file_id: s.id
        }, r)
    }
    async uploadAndPoll(t, n, r) {
        const s = await this.upload(t, n, r);
        return await this.poll(t, s.id, r)
    }
}
;
class $a extends Ct {
}
cf.VectorStoreFilesPage = $a;
class Lw extends W {
    create(t, n, r) {
        return this._client.post(`/vector_stores/${t}/file_batches`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    retrieve(t, n, r) {
        return this._client.get(`/vector_stores/${t}/file_batches/${n}`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    cancel(t, n, r) {
        return this._client.post(`/vector_stores/${t}/file_batches/${n}/cancel`, {
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    async createAndPoll(t, n, r) {
        const s = await this.create(t, n);
        return await this.poll(t, s.id, r)
    }
    listFiles(t, n, r={}, s) {
        return ze(r) ? this.listFiles(t, n, {}, r) : this._client.getAPIList(`/vector_stores/${t}/file_batches/${n}/files`, $a, {
            query: r,
            ...s,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...s == null ? void 0 : s.headers
            }
        })
    }
    async poll(t, n, r) {
        const s = {
            ...r == null ? void 0 : r.headers,
            "X-Stainless-Poll-Helper": "true"
        };
        for (r != null && r.pollIntervalMs && (s["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString()); ; ) {
            const {data: i, response: o} = await this.retrieve(t, n, {
                ...r,
                headers: s
            }).withResponse();
            switch (i.status) {
            case "in_progress":
                let a = 5e3;
                if (r != null && r.pollIntervalMs)
                    a = r.pollIntervalMs;
                else {
                    const l = o.headers.get("openai-poll-after-ms");
                    if (l) {
                        const u = parseInt(l);
                        isNaN(u) || (a = u)
                    }
                }
                await Pi(a);
                break;
            case "failed":
            case "cancelled":
            case "completed":
                return i
            }
        }
    }
    async uploadAndPoll(t, {files: n, fileIds: r=[]}, s) {
        if (n == null || n.length == 0)
            throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");
        const i = (s == null ? void 0 : s.maxConcurrency) ?? 5
          , o = Math.min(i, n.length)
          , a = this._client
          , l = n.values()
          , u = [...r];
        async function d(h) {
            for (let y of h) {
                const v = await a.files.create({
                    file: y,
                    purpose: "assistants"
                }, s);
                u.push(v.id)
            }
        }
        const c = Array(o).fill(l).map(d);
        return await mT(c),
        await this.createAndPoll(t, {
            file_ids: u
        })
    }
}
class ts extends W {
    constructor() {
        super(...arguments),
        this.files = new cf(this._client),
        this.fileBatches = new Lw(this._client)
    }
    create(t, n) {
        return this._client.post("/vector_stores", {
            body: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    retrieve(t, n) {
        return this._client.get(`/vector_stores/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    update(t, n, r) {
        return this._client.post(`/vector_stores/${t}`, {
            body: n,
            ...r,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...r == null ? void 0 : r.headers
            }
        })
    }
    list(t={}, n) {
        return ze(t) ? this.list({}, t) : this._client.getAPIList("/vector_stores", df, {
            query: t,
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    del(t, n) {
        return this._client.delete(`/vector_stores/${t}`, {
            ...n,
            headers: {
                "OpenAI-Beta": "assistants=v2",
                ...n == null ? void 0 : n.headers
            }
        })
    }
}
class df extends Ct {
}
ts.VectorStoresPage = df;
ts.Files = cf;
ts.VectorStoreFilesPage = $a;
ts.FileBatches = Lw;
class er extends W {
    constructor() {
        super(...arguments),
        this.vectorStores = new ts(this._client),
        this.chat = new dc(this._client),
        this.assistants = new tf(this._client),
        this.threads = new es(this._client)
    }
}
er.VectorStores = ts;
er.VectorStoresPage = df;
er.Assistants = tf;
er.AssistantsPage = nf;
er.Threads = es;
class Ow extends W {
    create(t, n) {
        return this._client.post("/completions", {
            body: t,
            ...n,
            stream: t.stream ?? !1
        })
    }
}
class Dw extends W {
    create(t, n) {
        return this._client.post("/embeddings", {
            body: t,
            ...n
        })
    }
}
class ff extends W {
    create(t, n) {
        return this._client.post("/files", Kr({
            body: t,
            ...n
        }))
    }
    retrieve(t, n) {
        return this._client.get(`/files/${t}`, n)
    }
    list(t={}, n) {
        return ze(t) ? this.list({}, t) : this._client.getAPIList("/files", hf, {
            query: t,
            ...n
        })
    }
    del(t, n) {
        return this._client.delete(`/files/${t}`, n)
    }
    content(t, n) {
        return this._client.get(`/files/${t}/content`, {
            ...n,
            __binaryResponse: !0
        })
    }
    retrieveContent(t, n) {
        return this._client.get(`/files/${t}/content`, {
            ...n,
            headers: {
                Accept: "application/json",
                ...n == null ? void 0 : n.headers
            }
        })
    }
    async waitForProcessing(t, {pollInterval: n=5e3, maxWait: r=30 * 60 * 1e3}={}) {
        const s = new Set(["processed", "error", "deleted"])
          , i = Date.now();
        let o = await this.retrieve(t);
        for (; !o.status || !s.has(o.status); )
            if (await Pi(n),
            o = await this.retrieve(t),
            Date.now() - i > r)
                throw new Qd({
                    message: `Giving up on waiting for file ${t} to finish processing after ${r} milliseconds.`
                });
        return o
    }
}
class hf extends Ct {
}
ff.FileObjectsPage = hf;
class pf extends W {
    list(t, n={}, r) {
        return ze(n) ? this.list(t, {}, n) : this._client.getAPIList(`/fine_tuning/jobs/${t}/checkpoints`, mf, {
            query: n,
            ...r
        })
    }
}
class mf extends Ct {
}
pf.FineTuningJobCheckpointsPage = mf;
class ns extends W {
    constructor() {
        super(...arguments),
        this.checkpoints = new pf(this._client)
    }
    create(t, n) {
        return this._client.post("/fine_tuning/jobs", {
            body: t,
            ...n
        })
    }
    retrieve(t, n) {
        return this._client.get(`/fine_tuning/jobs/${t}`, n)
    }
    list(t={}, n) {
        return ze(t) ? this.list({}, t) : this._client.getAPIList("/fine_tuning/jobs", gf, {
            query: t,
            ...n
        })
    }
    cancel(t, n) {
        return this._client.post(`/fine_tuning/jobs/${t}/cancel`, n)
    }
    listEvents(t, n={}, r) {
        return ze(n) ? this.listEvents(t, {}, n) : this._client.getAPIList(`/fine_tuning/jobs/${t}/events`, yf, {
            query: n,
            ...r
        })
    }
}
class gf extends Ct {
}
class yf extends Ct {
}
ns.FineTuningJobsPage = gf;
ns.FineTuningJobEventsPage = yf;
ns.Checkpoints = pf;
ns.FineTuningJobCheckpointsPage = mf;
class bi extends W {
    constructor() {
        super(...arguments),
        this.jobs = new ns(this._client)
    }
}
bi.Jobs = ns;
bi.FineTuningJobsPage = gf;
bi.FineTuningJobEventsPage = yf;
class Fw extends W {
    createVariation(t, n) {
        return this._client.post("/images/variations", Kr({
            body: t,
            ...n
        }))
    }
    edit(t, n) {
        return this._client.post("/images/edits", Kr({
            body: t,
            ...n
        }))
    }
    generate(t, n) {
        return this._client.post("/images/generations", {
            body: t,
            ...n
        })
    }
}
class vf extends W {
    retrieve(t, n) {
        return this._client.get(`/models/${t}`, n)
    }
    list(t) {
        return this._client.getAPIList("/models", wf, t)
    }
    del(t, n) {
        return this._client.delete(`/models/${t}`, n)
    }
}
class wf extends rT {
}
vf.ModelsPage = wf;
class Vw extends W {
    create(t, n) {
        return this._client.post("/moderations", {
            body: t,
            ...n
        })
    }
}
class Bw extends W {
    create(t, n, r) {
        return this._client.post(`/uploads/${t}/parts`, Kr({
            body: n,
            ...r
        }))
    }
}
class xf extends W {
    constructor() {
        super(...arguments),
        this.parts = new Bw(this._client)
    }
    create(t, n) {
        return this._client.post("/uploads", {
            body: t,
            ...n
        })
    }
    cancel(t, n) {
        return this._client.post(`/uploads/${t}/cancel`, n)
    }
    complete(t, n, r) {
        return this._client.post(`/uploads/${t}/complete`, {
            body: n,
            ...r
        })
    }
}
xf.Parts = Bw;
var $w;
class B extends WA {
    constructor({baseURL: t=to("OPENAI_BASE_URL"), apiKey: n=to("OPENAI_API_KEY"), organization: r=to("OPENAI_ORG_ID") ?? null, project: s=to("OPENAI_PROJECT_ID") ?? null, ...i}={}) {
        if (n === void 0)
            throw new V("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");
        const o = {
            apiKey: n,
            organization: r,
            project: s,
            ...i,
            baseURL: t || "https://api.openai.com/v1"
        };
        if (!o.dangerouslyAllowBrowser && tT())
            throw new V(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);
        super({
            baseURL: o.baseURL,
            timeout: o.timeout ?? 6e5,
            httpAgent: o.httpAgent,
            maxRetries: o.maxRetries,
            fetch: o.fetch
        }),
        this.completions = new Ow(this),
        this.chat = new Jd(this),
        this.embeddings = new Dw(this),
        this.files = new ff(this),
        this.images = new Fw(this),
        this.audio = new ki(this),
        this.moderations = new Vw(this),
        this.models = new vf(this),
        this.fineTuning = new bi(this),
        this.beta = new er(this),
        this.batches = new Zd(this),
        this.uploads = new xf(this),
        this._options = o,
        this.apiKey = n,
        this.organization = r,
        this.project = s
    }
    defaultQuery() {
        return this._options.defaultQuery
    }
    defaultHeaders(t) {
        return {
            ...super.defaultHeaders(t),
            "OpenAI-Organization": this.organization,
            "OpenAI-Project": this.project,
            ...this._options.defaultHeaders
        }
    }
    authHeaders(t) {
        return {
            Authorization: `Bearer ${this.apiKey}`
        }
    }
    stringifyQuery(t) {
        return AA(t, {
            arrayFormat: "brackets"
        })
    }
}
$w = B;
B.OpenAI = $w;
B.DEFAULT_TIMEOUT = 6e5;
B.OpenAIError = V;
B.APIError = Ee;
B.APIConnectionError = Fa;
B.APIConnectionTimeoutError = Qd;
B.APIUserAbortError = yt;
B.NotFoundError = qv;
B.ConflictError = Gv;
B.RateLimitError = Yv;
B.BadRequestError = Wv;
B.AuthenticationError = Hv;
B.InternalServerError = Qv;
B.PermissionDeniedError = Kv;
B.UnprocessableEntityError = Xv;
B.toFile = rw;
B.fileFromPath = Uv;
B.Completions = Ow;
B.Chat = Jd;
B.Embeddings = Dw;
B.Files = ff;
B.FileObjectsPage = hf;
B.Images = Fw;
B.Audio = ki;
B.Moderations = Vw;
B.Models = vf;
B.ModelsPage = wf;
B.FineTuning = bi;
B.Beta = er;
B.Batches = Zd;
B.BatchesPage = ef;
B.Uploads = xf;
const Uw = new B({
    apiKey: "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",
    dangerouslyAllowBrowser: !0
});
async function gT(e, t) {
    var n, r, s, i, o, a, l, u;
    try {
        const c = {
            role: "system",
            content: `You are ${t.name}. Remember your core traits and settings:
- Personality: ${t.description}
- Communication Style: ${(n = t.preferences) == null ? void 0 : n.communicationStyle}
- Response Format: ${(r = t.preferences) == null ? void 0 : r.responseFormat}
- Learning Approach: ${(s = t.preferences) == null ? void 0 : s.learningApproach}

You MUST:
1. Always introduce yourself as ${t.name}
2. Maintain your specific communication style
3. Keep responses ${(o = (i = t.preferences) == null ? void 0 : i.responseFormat) == null ? void 0 : o.toLowerCase()}
4. Use your ${(a = t.preferences) == null ? void 0 : a.learningApproach} learning style
5. Stay true to your personality traits and expertise

Never break character or forget these settings.`
        };
        return ((u = (l = (await Uw.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [c, ...e],
            temperature: .7,
            max_tokens: 500,
            presence_penalty: .6,
            frequency_penalty: .5
        })).choices[0]) == null ? void 0 : l.message) == null ? void 0 : u.content) || ""
    } catch (d) {
        throw console.error("OpenAI API error:", d),
        new Error("Failed to get response. Please try again.")
    }
}
class zw extends Error {
    constructor(t) {
        super(`Rate limit exceeded. Please wait ${t} seconds before trying again.`),
        this.timeUntilReset = t,
        this.name = "RateLimitError"
    }
}
class yT {
    constructor(t, n, r) {
        this.maxRequests = t,
        this.windowMs = n,
        this.storageKey = r
    }
    getStoredRequests() {
        try {
            const t = localStorage.getItem(this.storageKey);
            return t ? JSON.parse(t) : {}
        } catch {
            return {}
        }
    }
    saveRequests(t) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(t))
        } catch (n) {
            console.error("Failed to save rate limit data:", n)
        }
    }
    cleanOldRequests(t) {
        const r = Date.now() - this.windowMs
          , s = {};
        return Object.entries(t).forEach( ([i,o]) => {
            const a = o.filter(l => l > r);
            a.length > 0 && (s[i] = a)
        }
        ),
        s
    }
    check(t) {
        const n = Date.now()
          , r = this.getStoredRequests()
          , s = this.cleanOldRequests(r)
          , i = s[t] || [];
        if (i.length >= this.maxRequests) {
            const o = i[0]
              , a = Math.ceil((o + this.windowMs - n) / 1e3);
            throw new zw(a)
        }
        return s[t] = [...i, n],
        this.saveRequests(s),
        !0
    }
    getRemainingRequests(t) {
        const n = this.getStoredRequests()
          , s = this.cleanOldRequests(n)[t] || [];
        return Math.max(0, this.maxRequests - s.length)
    }
    getTimeUntilReset(t) {
        const r = this.getStoredRequests()[t] || [];
        if (r.length === 0)
            return 0;
        const s = r[0];
        return Math.max(0, s + this.windowMs - Date.now())
    }
    reset(t) {
        const n = this.getStoredRequests();
        delete n[t],
        this.saveRequests(n)
    }
}
const _m = new yT(10,6e4,"chat_rate_limit_v1")
  , vT = "forge_chat_messages_";
function wT(e) {
    const t = `${vT}${e}`
      , [n,r] = C.useState( () => {
        try {
            const o = localStorage.getItem(t);
            return o ? JSON.parse(o) : []
        } catch (o) {
            return console.error("Error loading chat messages:", o),
            []
        }
    }
    );
    return C.useEffect( () => {
        try {
            localStorage.setItem(t, JSON.stringify(n))
        } catch (o) {
            console.error("Error saving chat messages:", o)
        }
    }
    , [n, t]),
    {
        messages: n,
        addMessage: o => {
            r(a => [...a, o])
        }
        ,
        clearMessages: () => {
            r([]),
            localStorage.removeItem(t)
        }
    }
}
function xT({agent: e}) {
    const t = e.name.toLowerCase().replace(/[^a-z0-9]/g, "-")
      , {messages: n, addMessage: r} = wT(t)
      , [s,i] = C.useState(!1)
      , [o,a] = C.useState(10)
      , l = C.useCallback(async u => {
        try {
            const d = "default-user";
            _m.check(d),
            r({
                content: u,
                sender: "user"
            }),
            i(!0);
            const h = n.map(w => ({
                role: w.sender === "user" ? "user" : "assistant",
                content: w.content
            }));
            h.push({
                role: "user",
                content: u
            });
            const v = {
                content: await gT(h, e),
                sender: "agent"
            };
            r(v),
            a(_m.getRemainingRequests(d))
        } catch (d) {
            d instanceof zw ? r({
                content: d.message,
                sender: "agent",
                error: !0
            }) : r({
                content: d instanceof Error ? d.message : "An error occurred",
                sender: "agent",
                error: !0
            })
        } finally {
            i(!1)
        }
    }
    , [e, n, r]);
    return {
        messages: n,
        sendMessage: l,
        isTyping: s,
        remainingMessages: o
    }
}
function ST({message: e}) {
    const {content: t, sender: n, error: r} = e;
    return f.jsx(j.div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: `flex ${n === "user" ? "justify-end" : "justify-start"}`,
        children: f.jsxs("div", {
            className: `max-w-[80%] rounded-xl px-4 py-2 ${n === "user" ? "bg-white text-black" : r ? "bg-red-500/20 text-red-200 border border-red-500/50" : "bg-white/10 text-white"} flex items-start gap-2`,
            children: [r && f.jsx(Cv, {
                className: "w-4 h-4 text-red-200 mt-1 flex-shrink-0"
            }), f.jsx("span", {
                children: t
            })]
        })
    })
}
function CT({agent: e}) {
    const t = e.powerLevel >= 90 ? "exceptional" : e.powerLevel >= 80 ? "advanced" : "proficient"
      , n = `Greetings, I am ${e.name}, your ${t} ${e.type}. 
    
With my expertise in ${e.speciality}, I am here to assist you with ${e.description.toLowerCase()}

How may I leverage my capabilities to help you today?`;
    return f.jsx("div", {
        className: "bg-white/5 rounded-xl p-4 text-white/80",
        children: f.jsx("p", {
            className: "whitespace-pre-line",
            children: n
        })
    })
}
function _T({agent: e}) {
    const {messages: t, sendMessage: n, isTyping: r} = xT({
        agent: e
    })
      , [s,i] = C.useState("")
      , o = a => {
        a.preventDefault(),
        s.trim() && (n(s),
        i(""))
    }
    ;
    return f.jsx("div", {
        className: "max-w-5xl mx-auto",
        children: f.jsxs("div", {
            className: "bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden",
            children: [f.jsxs("div", {
                className: "p-6 border-b border-white/10 flex items-center justify-between",
                children: [f.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [f.jsxs("div", {
                        className: "relative",
                        children: [f.jsx(Zr, {
                            className: "w-6 h-6 text-white/80"
                        }), f.jsx(j.div, {
                            className: "absolute -right-1 -bottom-1",
                            animate: {
                                scale: [1, 1.2, 1]
                            },
                            transition: {
                                duration: 2,
                                repeat: 1 / 0
                            },
                            children: f.jsx(Kd, {
                                className: "w-3 h-3 text-yellow-500"
                            })
                        })]
                    }), f.jsxs("div", {
                        children: [f.jsx("h3", {
                            className: "font-semibold text-white",
                            children: e.name
                        }), f.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [f.jsx("span", {
                                className: "text-sm text-white/60",
                                children: e.type
                            }), f.jsxs("span", {
                                className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/80",
                                children: [e.powerLevel, "% Power"]
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "hidden sm:flex items-center gap-2 text-sm text-white/40",
                    children: [f.jsx("span", {
                        children: "Press"
                    }), f.jsx("kbd", {
                        className: "px-2 py-1 bg-white/5 rounded-md border border-white/10",
                        children: "⌘"
                    }), f.jsx("span", {
                        children: "+"
                    }), f.jsx("kbd", {
                        className: "px-2 py-1 bg-white/5 rounded-md border border-white/10",
                        children: "Enter"
                    }), f.jsx("span", {
                        children: "to send"
                    })]
                })]
            }), f.jsxs("div", {
                className: "h-[600px] overflow-y-auto p-6 space-y-6",
                children: [f.jsx(CT, {
                    agent: e
                }), f.jsx("div", {
                    className: "space-y-6",
                    children: f.jsx(Ei, {
                        mode: "popLayout",
                        children: t.map( (a, l) => f.jsx(j.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -20
                            },
                            transition: {
                                duration: .3
                            },
                            children: f.jsx(ST, {
                                message: a
                            })
                        }, `${a.sender}-${l}`))
                    })
                }), r && f.jsxs(j.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "flex items-center gap-2 text-sm text-white/40",
                    children: [f.jsxs("div", {
                        className: "flex space-x-1",
                        children: [f.jsx(j.div, {
                            animate: {
                                y: [0, -3, 0]
                            },
                            transition: {
                                duration: .6,
                                repeat: 1 / 0,
                                delay: 0
                            },
                            className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                        }), f.jsx(j.div, {
                            animate: {
                                y: [0, -3, 0]
                            },
                            transition: {
                                duration: .6,
                                repeat: 1 / 0,
                                delay: .2
                            },
                            className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                        }), f.jsx(j.div, {
                            animate: {
                                y: [0, -3, 0]
                            },
                            transition: {
                                duration: .6,
                                repeat: 1 / 0,
                                delay: .4
                            },
                            className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                        })]
                    }), f.jsxs("span", {
                        children: [e.name, " is thinking..."]
                    })]
                })]
            }), f.jsx("form", {
                onSubmit: o,
                className: "p-6 border-t border-white/10",
                children: f.jsxs("div", {
                    className: "flex gap-4",
                    children: [f.jsx("input", {
                        type: "text",
                        value: s,
                        onChange: a => i(a.target.value),
                        className: "flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/20 text-white placeholder-white/40",
                        placeholder: `Ask ${e.name} about ${e.speciality.toLowerCase()}...`,
                        onKeyDown: a => {
                            a.metaKey && a.key === "Enter" && o(a)
                        }
                    }), f.jsx(j.button, {
                        type: "submit",
                        disabled: r || !s.trim(),
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        className: "px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                        children: f.jsx(sk, {
                            className: "w-5 h-5"
                        })
                    })]
                })
            })]
        })
    })
}
function ET() {
    const {agentId: e} = GS()
      , t = ud()
      , {getCustomAgent: n} = Da()
      , r = Ao.useMemo( () => e ? n(e) || Zu.find(o => o.name.toLowerCase().replace(/[^a-z0-9]/g, "-") === e) : null, [e, n])
      , s = Ao.useMemo( () => r ? n(r.name.toLowerCase().replace(/[^a-z0-9]/g, "-")) !== void 0 : !1, [r, n]);
    return r ? f.jsx(Gn, {
        children: f.jsx("div", {
            className: "min-h-screen bg-black pt-24",
            children: f.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [f.jsxs("button", {
                    onClick: () => t(s ? "/my-agents" : "/agents"),
                    className: "inline-flex items-center text-white/60 hover:text-white mb-12 group",
                    children: [f.jsx(aa, {
                        className: "w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
                    }), "Back to ", s ? "My Agents" : "Agents"]
                }), f.jsx(_T, {
                    agent: r
                })]
            })
        })
    }) : f.jsx(Gn, {
        children: f.jsx("div", {
            className: "min-h-screen bg-black flex items-center justify-center",
            children: f.jsxs("div", {
                className: "text-center",
                children: [f.jsx("h1", {
                    className: "text-3xl font-bold text-white mb-4",
                    children: "Agent Not Found"
                }), f.jsxs("button", {
                    onClick: () => t(s ? "/my-agents" : "/agents"),
                    className: "text-white/60 hover:text-white flex items-center justify-center gap-2 transition-colors group",
                    children: [f.jsx(aa, {
                        className: "w-4 h-4 group-hover:-translate-x-1 transition-transform"
                    }), "Back to ", s ? "My Agents" : "Agents"]
                })]
            })
        })
    })
}
async function PT(e) {
    var t, n;
    try {
        const r = `Create an AI agent with these exact specifications:
      Name: ${e.name}
      Purpose: ${e.purpose}
      Personality: ${e.personality}
      Traits: ${e.traits.join(", ")}
      Specialization: ${e.specialization}
      Communication Style: ${e.tone}
      Learning Style: ${e.learningStyle}
      Response Length: ${e.responseLength}
      Context Memory: ${e.contextMemory}
      
      Create a detailed description that incorporates ALL these aspects.`
          , i = (n = (t = (await Uw.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "system",
                content: "You are an AI agent creator. Create highly specific and personalized agent profiles that exactly match given specifications."
            }, {
                role: "user",
                content: r
            }],
            temperature: .7
        })).choices[0]) == null ? void 0 : t.message) == null ? void 0 : n.content;
        if (!i)
            throw new Error("No response from AI");
        return {
            name: e.name,
            type: e.purpose,
            description: i,
            powerLevel: Math.floor(Math.random() * 15) + 85,
            speciality: e.specialization,
            imageUrl: e.imageUrl || "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&auto=format&fit=crop&q=60",
            preferences: {
                communicationStyle: e.tone,
                responseFormat: e.responseLength,
                learningApproach: e.learningStyle
            }
        }
    } catch (r) {
        throw console.error("Failed to initialize agent:", r),
        new Error("Failed to create agent personality. Please try again.")
    }
}
function kT() {
    const [e,t] = C.useState(!1)
      , [n,r] = C.useState(null)
      , s = ud()
      , {addCustomAgent: i} = Da();
    return {
        createAgent: async a => {
            try {
                t(!0),
                r(null);
                const l = await PT(a);
                i(l);
                const u = l.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
                s(`/agent/${u}`)
            } catch (l) {
                r(l instanceof Error ? l.message : "Failed to create agent"),
                console.error("Failed to create agent:", l)
            } finally {
                t(!1)
            }
        }
        ,
        isCreating: e,
        error: n
    }
}
function sr({label: e, name: t, value: n, onChange: r, type: s="text", placeholder: i, required: o, options: a}) {
    const l = "w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 text-white placeholder-white/40";
    return f.jsxs("div", {
        children: [f.jsxs("label", {
            className: "block text-sm font-medium text-white/80 mb-2",
            children: [e, o && f.jsx("span", {
                className: "text-red-400 ml-1",
                children: "*"
            })]
        }), s === "textarea" ? f.jsx("textarea", {
            name: t,
            value: n,
            onChange: r,
            placeholder: i,
            required: o,
            rows: 3,
            className: l
        }) : s === "select" ? f.jsx("select", {
            name: t,
            value: n,
            onChange: r,
            required: o,
            className: `${l} [&>option]:text-black`,
            children: a == null ? void 0 : a.map( ({value: u, label: d}) => f.jsx("option", {
                value: u,
                children: d
            }, u))
        }) : f.jsx("input", {
            type: "text",
            name: t,
            value: n,
            onChange: r,
            placeholder: i,
            required: o,
            className: l
        })]
    })
}
const Em = [{
    value: "friendly",
    label: "Friendly and Casual"
}, {
    value: "professional",
    label: "Professional and Formal"
}, {
    value: "technical",
    label: "Technical and Precise"
}, {
    value: "creative",
    label: "Creative and Expressive"
}, {
    value: "empathetic",
    label: "Empathetic and Supportive"
}, {
    value: "analytical",
    label: "Analytical and Detailed"
}]
  , AT = ["Analytical", "Creative", "Patient", "Proactive", "Adaptable", "Methodical", "Intuitive", "Precise", "Empathetic", "Strategic", "Innovative", "Reliable"]
  , Vl = [{
    value: "data-analysis",
    label: "Data Analysis & Insights"
}, {
    value: "creative-writing",
    label: "Creative Writing & Content"
}, {
    value: "problem-solving",
    label: "Problem Solving & Logic"
}, {
    value: "research",
    label: "Research & Information Synthesis"
}, {
    value: "teaching",
    label: "Teaching & Explanation"
}, {
    value: "coding",
    label: "Code & Development"
}, {
    value: "planning",
    label: "Planning & Strategy"
}, {
    value: "design",
    label: "Design & Creativity"
}];
function TT({formData: e}) {
    return f.jsxs(j.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden",
        children: [f.jsxs("div", {
            className: "p-6 space-y-6",
            children: [f.jsxs("div", {
                className: "flex items-center gap-4",
                children: [f.jsx("div", {
                    className: "w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10",
                    children: f.jsx(Zr, {
                        className: "w-8 h-8 text-white/60"
                    })
                }), f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "text-xl font-semibold text-white",
                        children: e.name || "Your Agent"
                    }), f.jsx("p", {
                        className: "text-white/60",
                        children: e.purpose || "AI Assistant"
                    })]
                })]
            }), f.jsxs("div", {
                className: "space-y-4",
                children: [f.jsxs("div", {
                    className: "p-4 rounded-lg bg-white/5 space-y-2 border border-white/10",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2 text-white/80",
                        children: [f.jsx(Ev, {
                            className: "w-4 h-4"
                        }), f.jsx("span", {
                            className: "text-sm font-medium",
                            children: "Personality"
                        })]
                    }), f.jsx("p", {
                        className: "text-white/60 text-sm",
                        children: e.personality || "Personality description will appear here..."
                    }), f.jsx("div", {
                        className: "flex flex-wrap gap-2 mt-2",
                        children: e.traits.map(t => f.jsx("span", {
                            className: "px-2 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/10",
                            children: t
                        }, t))
                    })]
                }), f.jsxs("div", {
                    className: "p-4 rounded-lg bg-white/5 space-y-2 border border-white/10",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2 text-white/80",
                        children: [f.jsx(qd, {
                            className: "w-4 h-4"
                        }), f.jsx("span", {
                            className: "text-sm font-medium",
                            children: "Capabilities"
                        })]
                    }), f.jsxs("div", {
                        className: "space-y-2",
                        children: [f.jsxs("div", {
                            className: "flex justify-between text-sm",
                            children: [f.jsx("span", {
                                className: "text-white/60",
                                children: "Specialization"
                            }), f.jsx("span", {
                                className: "text-white/80",
                                children: e.specialization
                            })]
                        }), f.jsxs("div", {
                            className: "flex justify-between text-sm",
                            children: [f.jsx("span", {
                                className: "text-white/60",
                                children: "Learning Style"
                            }), f.jsx("span", {
                                className: "text-white/80",
                                children: e.learningStyle
                            })]
                        }), f.jsxs("div", {
                            className: "flex justify-between text-sm",
                            children: [f.jsx("span", {
                                className: "text-white/60",
                                children: "Memory Depth"
                            }), f.jsx("span", {
                                className: "text-white/80",
                                children: e.contextMemory
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "p-4 rounded-lg bg-white/5 space-y-2 border border-white/10",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2 text-white/80",
                        children: [f.jsx(nk, {
                            className: "w-4 h-4"
                        }), f.jsx("span", {
                            className: "text-sm font-medium",
                            children: "Communication"
                        })]
                    }), f.jsxs("div", {
                        className: "space-y-2",
                        children: [f.jsxs("div", {
                            className: "flex justify-between text-sm",
                            children: [f.jsx("span", {
                                className: "text-white/60",
                                children: "Style"
                            }), f.jsx("span", {
                                className: "text-white/80",
                                children: e.tone
                            })]
                        }), f.jsxs("div", {
                            className: "flex justify-between text-sm",
                            children: [f.jsx("span", {
                                className: "text-white/60",
                                children: "Response Length"
                            }), f.jsx("span", {
                                className: "text-white/80",
                                children: e.responseLength
                            })]
                        })]
                    })]
                })]
            })]
        }), f.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        })]
    })
}
function bT({onImageSelect: e, currentImage: t}) {
    const [n,r] = C.useState(t)
      , [s,i] = C.useState("")
      , o = l => {
        var c;
        const u = (c = l.target.files) == null ? void 0 : c[0];
        if (i(""),
        !u)
            return;
        if (!u.type.startsWith("image/")) {
            i("Please select an image file");
            return
        }
        if (u.size > 5 * 1024 * 1024) {
            i("Image must be less than 5MB");
            return
        }
        const d = new FileReader;
        d.onloadend = () => {
            const h = d.result;
            r(h),
            e(h)
        }
        ,
        d.readAsDataURL(u)
    }
      , a = () => {
        r(void 0),
        e("")
    }
    ;
    return f.jsxs("div", {
        className: "space-y-2",
        children: [f.jsx("label", {
            className: "block text-sm font-medium text-white/80 mb-2",
            children: "Agent Image"
        }), n ? f.jsxs("div", {
            className: "relative w-32 h-32 rounded-xl overflow-hidden group",
            children: [f.jsx("img", {
                src: n,
                alt: "Agent preview",
                className: "w-full h-full object-cover"
            }), f.jsx(j.button, {
                onClick: a,
                className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity",
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: .9
                },
                children: f.jsx(ck, {
                    className: "w-6 h-6 text-white"
                })
            })]
        }) : f.jsxs("label", {
            className: "block",
            children: [f.jsxs(j.div, {
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: .98
                },
                className: "w-32 h-32 rounded-xl border-2 border-dashed border-white/20 hover:border-white/40 flex flex-col items-center justify-center cursor-pointer transition-colors",
                children: [s ? f.jsx(ek, {
                    className: "w-8 h-8 text-red-400 mb-2"
                }) : f.jsx(ak, {
                    className: "w-8 h-8 text-white/40 mb-2"
                }), f.jsx("span", {
                    className: "text-sm text-white/60",
                    children: s || "Upload Image"
                })]
            }), f.jsx("input", {
                type: "file",
                className: "hidden",
                onChange: o,
                accept: "image/*"
            })]
        }), s && f.jsx("p", {
            className: "text-sm text-red-400",
            children: s
        })]
    })
}
function NT() {
    const {createAgent: e, isCreating: t, error: n} = kT()
      , [r,s] = C.useState(!1)
      , [i,o] = C.useState({
        name: "",
        purpose: Vl[0].value,
        personality: "",
        traits: [],
        specialization: Vl[0].value,
        tone: Em[0].value,
        learningStyle: "adaptive",
        responseLength: "balanced",
        contextMemory: "medium",
        imageUrl: ""
    });
    C.useEffect( () => {
        const h = ["name", "personality", "specialization"].every(y => {
            var v;
            return (v = i[y]) == null ? void 0 : v.trim()
        }
        );
        s(h)
    }
    , [i]);
    const a = c => {
        const {name: h, value: y} = c.target;
        o(v => ({
            ...v,
            [h]: y
        }))
    }
      , l = c => {
        o(h => ({
            ...h,
            traits: h.traits.includes(c) ? h.traits.filter(y => y !== c) : [...h.traits, c].slice(0, 3)
        }))
    }
      , u = c => {
        o(h => ({
            ...h,
            imageUrl: c
        }))
    }
      , d = async c => {
        c.preventDefault(),
        r && await e(i)
    }
    ;
    return f.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
        children: [f.jsxs(j.form, {
            onSubmit: d,
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 space-y-8",
            children: [n && f.jsxs("div", {
                className: "mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3",
                children: [f.jsx(Cv, {
                    className: "w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                }), f.jsx("p", {
                    className: "text-red-200",
                    children: n
                })]
            }), f.jsxs("div", {
                className: "flex items-center gap-3 pb-6 border-b border-white/10",
                children: [f.jsx("div", {
                    className: "p-3 bg-white/5 rounded-lg",
                    children: f.jsx(Zr, {
                        className: "w-6 h-6 text-white/60"
                    })
                }), f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "font-semibold text-white",
                        children: "Agent Details"
                    }), f.jsx("p", {
                        className: "text-sm text-white/60",
                        children: "Configure your AI agent's core attributes"
                    })]
                })]
            }), f.jsxs("div", {
                className: "space-y-6",
                children: [f.jsx(bT, {
                    onImageSelect: u,
                    currentImage: i.imageUrl
                }), f.jsx(sr, {
                    label: "Agent Name",
                    name: "name",
                    value: i.name,
                    onChange: a,
                    placeholder: "e.g., Atlas, Nova, Cipher",
                    required: !0
                }), f.jsx(sr, {
                    label: "Primary Purpose",
                    name: "purpose",
                    value: i.purpose,
                    onChange: a,
                    type: "select",
                    options: Vl,
                    required: !0
                }), f.jsx(sr, {
                    label: "Personality Description",
                    name: "personality",
                    value: i.personality,
                    onChange: a,
                    type: "textarea",
                    placeholder: "Describe your agent's personality and approach...",
                    required: !0
                }), f.jsxs("div", {
                    className: "space-y-3",
                    children: [f.jsx("label", {
                        className: "block text-sm font-medium text-white/80",
                        children: "Personality Traits (Choose up to 3)"
                    }), f.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: AT.map(c => f.jsx("button", {
                            type: "button",
                            onClick: () => l(c),
                            className: `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${i.traits.includes(c) ? "bg-white/20 text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}`,
                            children: c
                        }, c))
                    })]
                }), f.jsx(sr, {
                    label: "Communication Style",
                    name: "tone",
                    value: i.tone,
                    onChange: a,
                    type: "select",
                    options: Em,
                    required: !0
                }), f.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [f.jsx(sr, {
                        label: "Learning Style",
                        name: "learningStyle",
                        value: i.learningStyle,
                        onChange: a,
                        type: "select",
                        options: [{
                            value: "adaptive",
                            label: "Adaptive Learning"
                        }, {
                            value: "structured",
                            label: "Structured Learning"
                        }, {
                            value: "exploratory",
                            label: "Exploratory Learning"
                        }]
                    }), f.jsx(sr, {
                        label: "Response Length",
                        name: "responseLength",
                        value: i.responseLength,
                        onChange: a,
                        type: "select",
                        options: [{
                            value: "concise",
                            label: "Concise"
                        }, {
                            value: "balanced",
                            label: "Balanced"
                        }, {
                            value: "detailed",
                            label: "Detailed"
                        }]
                    })]
                })]
            }), f.jsx(j.button, {
                type: "submit",
                disabled: !r || t,
                whileHover: r && !t ? {
                    scale: 1.02
                } : {},
                whileTap: r && !t ? {
                    scale: .98
                } : {},
                className: `w-full mt-8 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${r && !t ? "bg-white text-black hover:bg-white/90" : "bg-white/5 text-white/40 cursor-not-allowed"}`,
                children: t ? f.jsxs("span", {
                    className: "flex items-center justify-center gap-2",
                    children: [f.jsx(Kd, {
                        className: "w-5 h-5 animate-pulse"
                    }), "Creating Your Agent..."]
                }) : "Create Agent"
            })]
        }), f.jsx("div", {
            className: "lg:sticky lg:top-8 h-fit",
            children: f.jsx(TT, {
                formData: i
            })
        })]
    })
}
function jT() {
    return f.jsx("section", {
        className: "py-12",
        children: f.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [f.jsxs(j.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "text-center mb-16",
                children: [f.jsx("h1", {
                    className: "forge-title text-4xl mb-4",
                    children: "CREATE AGENT"
                }), f.jsx("p", {
                    className: "text-white/60 max-w-2xl mx-auto text-lg mb-8",
                    children: "Design your perfect AI companion by defining its personality, expertise, and purpose"
                }), f.jsx(It, {
                    to: "/my-agents",
                    children: f.jsxs(j.button, {
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        className: "inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors",
                        children: [f.jsx(uk, {
                            className: "w-4 h-4"
                        }), f.jsx("span", {
                            children: "View My Agents"
                        })]
                    })
                })]
            }), f.jsx(NT, {})]
        })
    })
}
function RT() {
    return f.jsx(Gn, {
        children: f.jsx("div", {
            className: "min-h-screen bg-black pt-24",
            children: f.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [f.jsx(Xd, {
                    to: "/"
                }), f.jsx(jT, {})]
            })
        })
    })
}
function MT() {
    const e = Qr()
      , t = e.pathname === "/docs";
    return f.jsxs(f.Fragment, {
        children: [!t && f.jsx(dk, {}), f.jsx(Ei, {
            mode: "wait",
            children: f.jsxs(cC, {
                location: e,
                children: [f.jsx(jn, {
                    path: "/",
                    element: f.jsx(zk, {})
                }), f.jsx(jn, {
                    path: "/docs",
                    element: f.jsx(cA, {})
                }), f.jsx(jn, {
                    path: "/agents",
                    element: f.jsx(mA, {})
                }), f.jsx(jn, {
                    path: "/my-agents",
                    element: f.jsx(yA, {})
                }), f.jsx(jn, {
                    path: "/agent/:agentId",
                    element: f.jsx(ET, {})
                }), f.jsx(jn, {
                    path: "/create",
                    element: f.jsx(RT, {})
                })]
            }, e.pathname)
        })]
    })
}
function IT() {
    const [e,t] = C.useState(!0);
    return C.useEffect( () => {
        if (sessionStorage.getItem("hasVisited"))
            t(!1);
        else {
            const r = setTimeout( () => {
                t(!1),
                sessionStorage.setItem("hasVisited", "true")
            }
            , 2e3);
            return () => clearTimeout(r)
        }
    }
    , []),
    f.jsx(yC, {
        children: f.jsx(KP, {
            children: f.jsx(Ei, {
                mode: "wait",
                children: e ? f.jsx(j.div, {
                    initial: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .5,
                        ease: "easeInOut"
                    },
                    children: f.jsx(fk, {})
                }, "loading") : f.jsx(j.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .5,
                        ease: "easeInOut"
                    },
                    className: "fixed inset-0 bg-black",
                    children: f.jsx(MT, {})
                }, "main")
            })
        })
    })
}
Dy(document.getElementById("root")).render(f.jsx(C.StrictMode, {
    children: f.jsx(IT, {})
}));
