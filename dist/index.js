module.exports = (function(t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  return (
    (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function(n) {
              return t[n];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ""),
    e((e.s = 4))
  );
})([
  function(t, n, e) {
    t.exports = e(2)();
  },
  function(t, n) {
    t.exports = require("react");
  },
  function(t, n, e) {
    "use strict";
    var r = e(3);
    function o() {}
    function i() {}
    (i.resetWarningCache = o),
      (t.exports = function() {
        function t(t, n, e, o, i, a) {
          if (a !== r) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((u.name = "Invariant Violation"), u);
          }
        }
        function n() {
          return t;
        }
        t.isRequired = t;
        var e = {
          array: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: n,
          element: t,
          elementType: t,
          instanceOf: n,
          node: t,
          objectOf: n,
          oneOf: n,
          oneOfType: n,
          shape: n,
          exact: n,
          checkPropTypes: i,
          resetWarningCache: o
        };
        return (e.PropTypes = e), e;
      });
  },
  function(t, n, e) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function(t, n, e) {
    "use strict";
    e.r(n),
      e.d(n, "useAnimate", function() {
        return v;
      });
    var r = e(1),
      o = e.n(r);
    function i(t, n) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n &&
          (r = r.filter(function(n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          e.push.apply(e, r);
      }
      return e;
    }
    function a(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? i(Object(e), !0).forEach(function(n) {
              u(t, n, e[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : i(Object(e)).forEach(function(n) {
              Object.defineProperty(
                t,
                n,
                Object.getOwnPropertyDescriptor(e, n)
              );
            });
      }
      return t;
    }
    function u(t, n, e) {
      return (
        n in t
          ? Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[n] = e),
        t
      );
    }
    function c(t, n) {
      return (
        (function(t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function(t, n) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var e = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = t[Symbol.iterator]();
              !(r = (a = u.next()).done) &&
              (e.push(a.value), !n || e.length !== n);
              r = !0
            );
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return e;
        })(t, n) ||
        (function(t, n) {
          if (!t) return;
          if ("string" == typeof t) return l(t, n);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === e && t.constructor && (e = t.constructor.name);
          if ("Map" === e || "Set" === e) return Array.from(t);
          if (
            "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          )
            return l(t, n);
        })(t, n) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function l(t, n) {
      (null == n || n > t.length) && (n = t.length);
      for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
      return r;
    }
    var f = "fade",
      s = 1e3,
      p = 0,
      y = !0,
      m = "forwards",
      d = "linear",
      b = "running\t",
      O = "normal",
      g = "initial",
      v = function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = Object(r.useState)({
            name: t.name || f,
            duration: t.duration || s,
            delay: t.delay || p,
            fillMode: t.fillMode || m,
            timingFunction: t.timingFunction || d,
            playState: t.playState || b,
            direction: t.direction || O,
            count: t.count || g
          }),
          e = c(n, 2),
          o = e[0],
          i = e[1],
          u = Object(r.useState)(t.enter || y),
          l = c(u, 2),
          v = l[0],
          h = l[1];
        return {
          style: {
            animationName: "".concat(o.name).concat(v ? "In" : "Out"),
            animationDuration: "".concat(o.duration, "ms"),
            animationDelay: "".concat(o.delay, "ms"),
            animationFillMode: o.fillMode,
            animationTimingFunction: o.timingFunction,
            animationPlayState: o.playState,
            animationDirection: o.direction,
            animationIterationCount: o.count
          },
          setEnter: function(t) {
            return h(function() {
              return t;
            });
          },
          enter: v,
          setOptions: function(t) {
            return i(function(n) {
              return a(a({}, n), t);
            });
          }
        };
      },
      h = e(0),
      j = e.n(h),
      S = ["initial", "inherit"],
      P = {
        fillMode: ["none", "forwards", "backwards", "both"].concat(S),
        playState: ["paused", "running"].concat(S),
        direction: [
          "normal",
          "reverse",
          "alternate",
          "alternate-reverse\t"
        ].concat(S),
        count: ["infinite"].concat(S)
      };
    function w() {
      return (w =
        Object.assign ||
        function(t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          }
          return t;
        }).apply(this, arguments);
    }
    function M(t, n) {
      return (
        (function(t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function(t, n) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var e = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, u = t[Symbol.iterator]();
              !(r = (a = u.next()).done) &&
              (e.push(a.value), !n || e.length !== n);
              r = !0
            );
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return e;
        })(t, n) ||
        (function(t, n) {
          if (!t) return;
          if ("string" == typeof t) return x(t, n);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === e && t.constructor && (e = t.constructor.name);
          if ("Map" === e || "Set" === e) return Array.from(t);
          if (
            "Arguments" === e ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          )
            return x(t, n);
        })(t, n) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function x(t, n) {
      (null == n || n > t.length) && (n = t.length);
      for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
      return r;
    }
    function E(t, n) {
      if (null == t) return {};
      var e,
        r,
        o = (function(t, n) {
          if (null == t) return {};
          var e,
            r,
            o = {},
            i = Object.keys(t);
          for (r = 0; r < i.length; r++)
            (e = i[r]), n.indexOf(e) >= 0 || (o[e] = t[e]);
          return o;
        })(t, n);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (r = 0; r < i.length; r++)
          (e = i[r]),
            n.indexOf(e) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(t, e) &&
                (o[e] = t[e]));
      }
      return o;
    }
    var T = function(t) {
      var n = t.enter,
        e = t.animation,
        i = t.unMountOnExit,
        a = t.options,
        u = t.children,
        c = E(t, [
          "enter",
          "animation",
          "unMountOnExit",
          "options",
          "children"
        ]),
        l = M(Object(r.useState)(!0), 2),
        f = l[0],
        s = l[1],
        p = {
          animationName: "".concat(e).concat(n ? "In" : "Out"),
          animationDuration: "".concat(a.duration, "ms"),
          animationDelay: "".concat(a.delay, "ms"),
          animationFillMode: a.fillMode,
          animationTimingFunction: a.timingFunction,
          animationPlayState: a.playState,
          animationDirection: a.direction,
          animationIterationCount: a.count
        };
      return (
        Object(r.useEffect)(
          function() {
            f || s(!0);
          },
          [n]
        ),
        o.a.createElement(
          o.a.Fragment,
          null,
          f &&
            o.a.createElement(
              "div",
              w({}, c, {
                style: p,
                onAnimationEnd: function() {
                  return !n && i && s(!1);
                }
              }),
              u
            )
        )
      );
    };
    (T.protoTypes = {
      enter: j.a.bool,
      animation: j.a.string,
      unMountOnExit: j.a.bool,
      options: j.a.shape({
        duration: j.a.number,
        delay: j.a.number,
        fillMode: j.a.oneOf(P.fillMode),
        timingFunction: j.a.string,
        playState: j.a.oneOf(P.playState),
        direction: j.a.oneOf(P.direction),
        count: j.a.oneOfType([j.a.number, j.a.oneOf(P.count)])
      })
    }),
      (T.defaultProps = {
        enter: !0,
        animation: "fade",
        unMountOnExit: !1,
        options: {
          duration: 1e3,
          delay: 0,
          fillMode: "forwards",
          timingFunction: "linear",
          playState: "running\t",
          direction: "normal",
          count: "initial"
        }
      });
    var A = T;
    n.default = A;
  }
]);
