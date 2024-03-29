! function (a) {
    a.fn.extend({
        smoothproducts: function () {
            function b() {
                a(".sp-selected").removeClass("sp-selected"), a(".sp-lightbox").fadeOut(function () {
                    a(this).remove()
                })
            }

            function c(a) {
                return a.match(/url\([\"\']{0,1}(.+)[\"\']{0,1}\)+/i)[1]
            }
            a(".sp-loading").hide(), a(".sp-wrap").each(function () {
                a(this).addClass("sp-touch");
                var b = a("a", this).length;
                if (b > 1) {
                    var c, d, e = a("a.sp-default", this)[0] ? !0 : !1;
                    a(this).append('<div class="sp-large"></div><div class="sp-thumbs sp-tb-active"></div>'), a("a", this).each(function (b) {
                        var f = a("img", this).attr("src"),
                            g = a(this).attr("href"),
                            h = "";
                        (0 === b && !e || a(this).hasClass("sp-default")) && (h = ' class="sp-current"', c = g, d = a("img", this)[0].src), a(this).parents(".sp-wrap").find(".sp-thumbs").append('<a href="' + g + '" style="background-image:url(' + f + ')"' + h + "></a>"), a(this).remove()
                    }), a(".sp-large", this).append('<a href="' + c + '" class="sp-current-big"><img src="' + d + '" alt="" /></a>'), a(".sp-wrap").css("display", "inline-block")
                } else a(this).append('<div class="sp-large"></div>'), a("a", this).appendTo(a(".sp-large", this)).addClass(".sp-current-big"), a(".sp-wrap").css("display", "inline-block")
            }), a(document.body).on("click", ".sp-thumbs", function (a) {
                a.preventDefault()
            }), a(document.body).on("mouseover", function (b) {
                a(".sp-wrap").removeClass("sp-touch").addClass("sp-non-touch"), b.preventDefault()
            }), a(document.body).on("touchstart", function () {
                a(".sp-wrap").removeClass("sp-non-touch").addClass("sp-touch")
            }), a(document.body).on("click", ".sp-tb-active a", function (b) {
                b.preventDefault(), a(this).parent().find(".sp-current").removeClass(), a(this).addClass("sp-current"), a(this).parents(".sp-wrap").find(".sp-thumbs").removeClass("sp-tb-active"), a(this).parents(".sp-wrap").find(".sp-zoom").remove();
                var d = a(this).parents(".sp-wrap").find(".sp-large").height(),
                    e = a(this).parents(".sp-wrap").find(".sp-large").width();
                a(this).parents(".sp-wrap").find(".sp-large").css({
                    overflow: "hidden",
                    height: d + "px",
                    width: e + "px"
                }), a(this).addClass("sp-current").parents(".sp-wrap").find(".sp-large a").remove();
                var f = a(this).parent().find(".sp-current").attr("href"),
                    g = c(a(this).parent().find(".sp-current").css("backgroundImage"));
                a(this).parents(".sp-wrap").find(".sp-large").html('<a href="' + f + '" class="sp-current-big"><img src="' + g + '"/></a>'), a(this).parents(".sp-wrap").find(".sp-large").hide().fadeIn(250, function () {
                    var b = a(this).parents(".sp-wrap").find(".sp-large img").height();
                    a(this).parents(".sp-wrap").find(".sp-large").animate({
                        height: b
                    }, "fast", function () {
                        a(".sp-large").css({
                            height: "auto",
                            width: "auto"
                        })
                    }), a(this).parents(".sp-wrap").find(".sp-thumbs").addClass("sp-tb-active")
                })
            }), a(document.body).on("mouseenter", ".sp-non-touch .sp-large", function (b) {
                var c = a("a", this).attr("href");
                a(this).append('<div class="sp-zoom"><img src="' + c + '"/></div>'), a(this).find(".sp-zoom").fadeIn(250), b.preventDefault()
            }), a(document.body).on("mouseleave", ".sp-non-touch .sp-large", function (b) {
                a(this).find(".sp-zoom").fadeOut(250, function () {
                    a(this).remove()
                }), b.preventDefault()
            }), a(document.body).on("click", ".sp-non-touch .sp-zoom", function (b) {
                var c = a(this).html(),
                    d = a(this).parents(".sp-wrap").find(".sp-thumbs a").length,
                    e = a(this).parents(".sp-wrap").find(".sp-thumbs .sp-current").index() + 1;
                a(this).parents(".sp-wrap").addClass("sp-selected"), a("body").append("<div class='sp-lightbox' data-currenteq='" + e + "'>" + c + "</div>"), d > 1 && (a(".sp-lightbox").append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>"), 1 == e ? a("#sp-prev").css("opacity", ".1") : e == d && a("#sp-next").css("opacity", ".1")), a(".sp-lightbox").fadeIn(), b.preventDefault()
            }), a(document.body).on("click", ".sp-large a", function (b) {
                var c = a(this).attr("href"),
                    d = a(this).parents(".sp-wrap").find(".sp-thumbs a").length,
                    e = a(this).parents(".sp-wrap").find(".sp-thumbs .sp-current").index() + 1;
                a(this).parents(".sp-wrap").addClass("sp-selected"), a("body").append('<div class="sp-lightbox" data-currenteq="' + e + '"><img src="' + c + '"/></div>'), d > 1 && (a(".sp-lightbox").append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>"), 1 == e ? a("#sp-prev").css("opacity", ".1") : e == d && a("#sp-next").css("opacity", ".1")), a(".sp-lightbox").fadeIn(), b.preventDefault()
            }), a(document.body).on("click", "#sp-next", function (b) {
                b.stopPropagation();
                var d = a(".sp-lightbox").data("currenteq"),
                    e = a(".sp-selected .sp-thumbs a").length;
                if (d >= e);
                else {
                    var f = d + 1,
                        g = a(".sp-selected .sp-thumbs").find("a:eq(" + d + ")").attr("href"),
                        h = c(a(".sp-selected .sp-thumbs").find("a:eq(" + d + ")").css("backgroundImage"));
                    d == e - 1 && a("#sp-next").css("opacity", ".1"), a("#sp-prev").css("opacity", "1"), a(".sp-selected .sp-current").removeClass(), a(".sp-selected .sp-thumbs a:eq(" + d + ")").addClass("sp-current"), a(".sp-selected .sp-large").empty().append("<a href=" + g + '><img src="' + h + '"/></a>'), a(".sp-lightbox img").fadeOut(250, function () {
                        a(this).remove(), a(".sp-lightbox").data("currenteq", f).append('<img src="' + g + '"/>'), a(".sp-lightbox img").hide().fadeIn(250)
                    })
                }
                b.preventDefault()
            }), a(document.body).on("click", "#sp-prev", function (b) {
                b.stopPropagation();
                var d = a(".sp-lightbox").data("currenteq"),
                    d = d - 1;
                if (0 >= d);
                else {
                    1 == d && a("#sp-prev").css("opacity", ".1");
                    var e = d - 1,
                        f = a(".sp-selected .sp-thumbs").find("a:eq(" + e + ")").attr("href"),
                        g = c(a(".sp-selected .sp-thumbs").find("a:eq(" + e + ")").css("backgroundImage"));
                    a("#sp-next").css("opacity", "1"), a(".sp-selected .sp-current").removeClass(), a(".sp-selected .sp-thumbs a:eq(" + e + ")").addClass("sp-current"), a(".sp-selected .sp-large").empty().append("<a href=" + f + '><img src="' + g + '"/></a>'), a(".sp-lightbox img").fadeOut(250, function () {
                        a(this).remove(), a(".sp-lightbox").data("currenteq", d).append('<img src="' + f + '"/>'), a(".sp-lightbox img").hide().fadeIn(250)
                    })
                }
                b.preventDefault()
            }), a(document.body).on("click", ".sp-lightbox", function () {
                b()
            }), a(document).keydown(function (a) {
                return 27 == a.keyCode ? (b(), !1) : void 0
            }), a(".sp-large").mousemove(function (b) {
                var c = a(this).width(),
                    d = a(this).height(),
                    e = a(this).find(".sp-zoom").width(),
                    f = a(this).find(".sp-zoom").height(),
                    g = a(this).parent().offset(),
                    h = b.pageX - g.left,
                    i = b.pageY - g.top,
                    j = Math.floor(h * (c - e) / c),
                    k = Math.floor(i * (d - f) / d);
                a(this).find(".sp-zoom").css({
                    left: j,
                    top: k
                })
            })
        }
    })
}(jQuery);

/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.8.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
! function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.baguetteBox = e()
}(this, function () {
    "use strict";

    function t(t, n) {
        M.transforms = k(), M.svg = w(), i(), o(t), e(t, n)
    }

    function e(t, e) {
        var n = document.querySelectorAll(t),
            o = {
                galleries: [],
                nodeList: n
            };
        U[t] = o, [].forEach.call(n, function (t) {
            e && e.filter && (V = e.filter);
            var n = [];
            if (n = "A" === t.tagName ? [t] : t.getElementsByTagName("a"), n = [].filter.call(n, function (t) {
                    return V.test(t.href)
                }), 0 !== n.length) {
                var i = [];
                [].forEach.call(n, function (t, n) {
                    var o = function (t) {
                            t.preventDefault ? t.preventDefault() : t.returnValue = !1, u(i, e), c(n)
                        },
                        a = {
                            eventHandler: o,
                            imageElement: t
                        };
                    E(t, "click", o), i.push(a)
                }), o.galleries.push(i)
            }
        })
    }

    function n() {
        for (var t in U) U.hasOwnProperty(t) && o(t)
    }

    function o(t) {
        if (U.hasOwnProperty(t)) {
            var e = U[t].galleries;
            [].forEach.call(e, function (t) {
                [].forEach.call(t, function (t) {
                    B(t.imageElement, "click", t.eventHandler)
                }), R === t && (R = [])
            }), delete U[t]
        }
    }

    function i() {
        return (S = T("baguetteBox-overlay")) ? (P = T("baguetteBox-slider"), F = T("previous-button"), H = T("next-button"), void(L = T("close-button"))) : (S = N("div"), S.setAttribute("role", "dialog"), S.id = "baguetteBox-overlay", document.getElementsByTagName("body")[0].appendChild(S), P = N("div"), P.id = "baguetteBox-slider", S.appendChild(P), F = N("button"), F.setAttribute("type", "button"), F.id = "previous-button", F.setAttribute("aria-label", "Previous"), F.innerHTML = M.svg ? I : "&lt;", S.appendChild(F), H = N("button"), H.setAttribute("type", "button"), H.id = "next-button", H.setAttribute("aria-label", "Next"), H.innerHTML = M.svg ? Y : "&gt;", S.appendChild(H), L = N("button"), L.setAttribute("type", "button"), L.id = "close-button", L.setAttribute("aria-label", "Close"), L.innerHTML = M.svg ? q : "&times;", S.appendChild(L), F.className = H.className = L.className = "baguetteBox-button", void r())
    }

    function a(t) {
        switch (t.keyCode) {
            case 37:
                v();
                break;
            case 39:
                h();
                break;
            case 27:
                p()
        }
    }

    function r() {
        E(S, "click", J), E(F, "click", K), E(H, "click", Q), E(L, "click", Z), E(S, "touchstart", $), E(S, "touchmove", _), E(S, "touchend", tt), E(document, "focus", et, !0)
    }

    function l() {
        B(S, "click", J), B(F, "click", K), B(H, "click", Q), B(L, "click", Z), B(S, "touchstart", $), B(S, "touchmove", _), B(S, "touchend", tt), B(document, "focus", et, !0)
    }

    function u(t, e) {
        if (R !== t) {
            for (R = t, s(e); P.firstChild;) P.removeChild(P.firstChild);
            W.length = 0;
            for (var n, o = [], i = [], a = 0; a < t.length; a++) n = N("div"), n.className = "full-image", n.id = "baguette-img-" + a, W.push(n), o.push("baguetteBox-figure-" + a), i.push("baguetteBox-figcaption-" + a), P.appendChild(W[a]);
            S.setAttribute("aria-labelledby", o.join(" ")), S.setAttribute("aria-describedby", i.join(" "))
        }
    }

    function s(t) {
        t || (t = {});
        for (var e in X) j[e] = X[e], "undefined" != typeof t[e] && (j[e] = t[e]);
        P.style.transition = P.style.webkitTransition = "fadeIn" === j.animation ? "opacity .4s ease" : "slideIn" === j.animation ? "" : "none", "auto" === j.buttons && ("ontouchstart" in window || 1 === R.length) && (j.buttons = !1), F.style.display = H.style.display = j.buttons ? "" : "none";
        try {
            S.style.backgroundColor = j.overlayBackgroundColor
        } catch (t) {}
    }

    function c(t) {
        j.noScrollbars && (document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "scroll"), "block" !== S.style.display && (E(document, "keydown", a), z = t, D = {
            count: 0,
            startX: null,
            startY: null
        }, m(z, function () {
            x(z), C(z)
        }), y(), S.style.display = "block", j.fullScreen && f(), setTimeout(function () {
            S.className = "visible", j.afterShow && j.afterShow()
        }, 50), j.onChange && j.onChange(z, W.length), G = document.activeElement, d())
    }

    function d() {
        j.buttons ? F.focus() : L.focus()
    }

    function f() {
        S.requestFullscreen ? S.requestFullscreen() : S.webkitRequestFullscreen ? S.webkitRequestFullscreen() : S.mozRequestFullScreen && S.mozRequestFullScreen()
    }

    function g() {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }

    function p() {
        j.noScrollbars && (document.documentElement.style.overflowY = "auto", document.body.style.overflowY = "auto"), "none" !== S.style.display && (B(document, "keydown", a), S.className = "", setTimeout(function () {
            S.style.display = "none", g(), j.afterHide && j.afterHide()
        }, 500), G.focus())
    }

    function m(t, e) {
        var n = W[t];
        if ("undefined" != typeof n) {
            if (n.getElementsByTagName("img")[0]) return void(e && e());
            var o = R[t].imageElement,
                i = o.getElementsByTagName("img")[0],
                a = "function" == typeof j.captions ? j.captions.call(R, o) : o.getAttribute("data-caption") || o.title,
                r = b(o),
                l = N("figure");
            if (l.id = "baguetteBox-figure-" + t, l.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>', j.captions && a) {
                var u = N("figcaption");
                u.id = "baguetteBox-figcaption-" + t, u.innerHTML = a, l.appendChild(u)
            }
            n.appendChild(l);
            var s = N("img");
            s.onload = function () {
                var n = document.querySelector("#baguette-img-" + t + " .baguetteBox-spinner");
                l.removeChild(n), !j.async && e && e()
            }, s.setAttribute("src", r), s.alt = i ? i.alt || "" : "", j.titleTag && a && (s.title = a), l.appendChild(s), j.async && e && e()
        }
    }

    function b(t) {
        var e = t.href;
        if (t.dataset) {
            var n = [];
            for (var o in t.dataset) "at-" !== o.substring(0, 3) || isNaN(o.substring(3)) || (n[o.replace("at-", "")] = t.dataset[o]);
            for (var i = Object.keys(n).sort(function (t, e) {
                    return parseInt(t, 10) < parseInt(e, 10) ? -1 : 1
                }), a = window.innerWidth * window.devicePixelRatio, r = 0; r < i.length - 1 && i[r] < a;) r++;
            e = n[i[r]] || e
        }
        return e
    }

    function h() {
        var t;
        return z <= W.length - 2 ? (z++, y(), x(z), t = !0) : j.animation && (P.className = "bounce-from-right", setTimeout(function () {
            P.className = ""
        }, 400), t = !1), j.onChange && j.onChange(z, W.length), t
    }

    function v() {
        var t;
        return z >= 1 ? (z--, y(), C(z), t = !0) : j.animation && (P.className = "bounce-from-left", setTimeout(function () {
            P.className = ""
        }, 400), t = !1), j.onChange && j.onChange(z, W.length), t
    }

    function y() {
        var t = 100 * -z + "%";
        "fadeIn" === j.animation ? (P.style.opacity = 0, setTimeout(function () {
            M.transforms ? P.style.transform = P.style.webkitTransform = "translate3d(" + t + ",0,0)" : P.style.left = t, P.style.opacity = 1
        }, 400)) : M.transforms ? P.style.transform = P.style.webkitTransform = "translate3d(" + t + ",0,0)" : P.style.left = t
    }

    function k() {
        var t = N("div");
        return "undefined" != typeof t.style.perspective || "undefined" != typeof t.style.webkitPerspective
    }

    function w() {
        var t = N("div");
        return t.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (t.firstChild && t.firstChild.namespaceURI)
    }

    function x(t) {
        t - z >= j.preload || m(t + 1, function () {
            x(t + 1)
        })
    }

    function C(t) {
        z - t >= j.preload || m(t - 1, function () {
            C(t - 1)
        })
    }

    function E(t, e, n, o) {
        t.addEventListener ? t.addEventListener(e, n, o) : t.attachEvent("on" + e, n)
    }

    function B(t, e, n, o) {
        t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent("on" + e, n)
    }

    function T(t) {
        return document.getElementById(t)
    }

    function N(t) {
        return document.createElement(t)
    }

    function A() {
        l(), n(), B(document, "keydown", a), document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")), U = {}, R = [], z = 0
    }
    var S, P, F, H, L, I = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        Y = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        q = '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',
        j = {},
        X = {
            captions: !0,
            fullScreen: !1,
            noScrollbars: !1,
            titleTag: !1,
            buttons: "auto",
            async: !1,
            preload: 2,
            animation: "slideIn",
            afterShow: null,
            afterHide: null,
            onChange: null,
            overlayBackgroundColor: "rgba(0,0,0,.8)"
        },
        M = {},
        R = [],
        z = 0,
        D = {},
        O = !1,
        V = /.+\.(gif|jpe?g|png|webp)/i,
        U = {},
        W = [],
        G = null,
        J = function (t) {
            t.target.id.indexOf("baguette-img") !== -1 && p()
        },
        K = function (t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, v()
        },
        Q = function (t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, h()
        },
        Z = function (t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, p()
        },
        $ = function (t) {
            D.count++, D.count > 1 && (D.multitouch = !0), D.startX = t.changedTouches[0].pageX, D.startY = t.changedTouches[0].pageY
        },
        _ = function (t) {
            if (!O && !D.multitouch) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1;
                var e = t.touches[0] || t.changedTouches[0];
                e.pageX - D.startX > 40 ? (O = !0, v()) : e.pageX - D.startX < -40 ? (O = !0, h()) : D.startY - e.pageY > 100 && p()
            }
        },
        tt = function () {
            D.count--, D.count <= 0 && (D.multitouch = !1), O = !1
        },
        et = function (t) {
            "block" !== S.style.display || S.contains(t.target) || (t.stopPropagation(), d())
        };
    return [].forEach || (Array.prototype.forEach = function (t, e) {
        for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this)
    }), [].filter || (Array.prototype.filter = function (t, e, n, o, i) {
        for (n = this, o = [], i = 0; i < n.length; i++) t.call(e, n[i], i, n) && o.push(n[i]);
        return o
    }), {
        run: t,
        destroy: A,
        showNext: h,
        showPrevious: v
    }
});

// Custome theme code

if ($('.clean-gallery').length > 0) {
    baguetteBox.run('.clean-gallery', {
        animation: 'slideIn'
    });
}

if ($('.clean-product').length > 0) {
    $(window).on("load", function () {
        $('.sp-wrap').smoothproducts();
    });
}