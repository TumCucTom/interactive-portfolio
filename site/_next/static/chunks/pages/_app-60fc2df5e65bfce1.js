(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6840: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return t(3847)
            }])
        },
        3847: function(n, e, t) {
            "use strict";
            t.r(e);
            var r = t(5893);
            t(6774), t(4408);

            function u(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            e.default = function(n) {
                var e = n.Component,
                    t = n.pageProps;
                return (0, r.jsx)(e, function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })))), r.forEach((function(e) {
                            u(n, e, t[e])
                        }))
                    }
                    return n
                }({}, t))
            }
        },
        6774: function() {},
        4408: function() {}
    },
    function(n) {
        var e = function(e) {
            return n(n.s = e)
        };
        n.O(0, [774, 179], (function() {
            return e(6840), e(880)
        }));
        var t = n.O();
        _N_E = t
    }
]);
//# sourceMappingURL=_app-60fc2df5e65bfce1.js.map