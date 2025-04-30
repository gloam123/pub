function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = [window.__assetsPath + 'lib/assets/kwai-theme-CNKB7XHL.css', window.__assetsPath + 'lib/assets/nebula-theme-BK930UTy.css', window.__assetsPath + 'lib/chunks/utils-Bmr3j-j9.js', window.__assetsPath + 'lib/chunks/vendors-CSc6Bax4.js', window.__assetsPath + 'lib/chunks/showVideoAwardPopup-DxZuMIcm.js', window.__assetsPath + 'lib/assets/showVideoAwardPopup-BXKBVafd.css', window.__assetsPath + 'lib/chunks/popup-Wl898eWl.js', window.__assetsPath + 'lib/chunks/apollo-model-DTcSHGKm.js', window.__assetsPath + 'lib/assets/apollo-model-DfNDdnfA.css', window.__assetsPath + 'lib/chunks/index-CGoStUxx.js', window.__assetsPath + 'lib/chunks/index-C5AwrVeS.js', window.__assetsPath + 'lib/chunks/index-_V3iiPXr.js', window.__assetsPath + 'lib/assets/index-CR-rNx3I.css', window.__assetsPath + 'lib/chunks/const-C51M6pH_.js', window.__assetsPath + 'lib/assets/index-B8TnE1yu.css', window.__assetsPath + 'lib/chunks/index-wOTLt4PF.js', window.__assetsPath + 'lib/assets/index-DNfSuY9m.css', window.__assetsPath + 'lib/assets/index-BT5gkR7r.css', window.__assetsPath + 'lib/chunks/index-Dz_N23JH.js', window.__assetsPath + 'lib/assets/index-DlZZ_aUL.css', window.__assetsPath + 'lib/chunks/index-CeIJyoRf.js', window.__assetsPath + 'lib/assets/index-DG954h9y.css', window.__assetsPath + 'lib/chunks/index-Tn4o-UXB.js', window.__assetsPath + 'lib/assets/index-CpgO_MMh.css', window.__assetsPath + 'lib/chunks/timer-DaDU8ylu.js', window.__assetsPath + 'lib/chunks/lottie-iJOFzPKy.js', window.__assetsPath + 'lib/chunks/imageLoad-clvb6D4f.js', window.__assetsPath + 'lib/assets/popup-BfeJcdiN.css', window.__assetsPath + 'lib/assets/index-CWzKZzoY.css', window.__assetsPath + 'lib/chunks/VueCountDown-rRtdVQC9.js', window.__assetsPath + 'lib/chunks/EffectIndex-CPOqSF-M.js', window.__assetsPath + 'lib/assets/EffectIndex-Bw8RqghS.css', window.__assetsPath + 'lib/chunks/CoinExchangePopup-B8nG6qEm.js', window.__assetsPath + 'lib/assets/CoinExchangePopup-B7iNBuUr.css', window.__assetsPath + 'lib/chunks/withdraw-guide-tZ7Bocdw.js', window.__assetsPath + 'lib/chunks/visibilityChange-DNbEBZQF.js', window.__assetsPath + 'lib/assets/withdraw-guide-BVNsgZtU.css', window.__assetsPath + 'lib/chunks/CoinExchangeGuide-BhFIKnGw.js', window.__assetsPath + 'lib/chunks/index-Rv9nznDc.js', window.__assetsPath + 'lib/assets/CoinExchangeGuide-4wnVj4_y.css', window.__assetsPath + 'lib/chunks/ProfitEntranceGuide-HD8CUUz_.js', window.__assetsPath + 'lib/assets/ProfitEntranceGuide-DOG9_hll.css', window.__assetsPath + 'lib/chunks/CornerEntrance-D3tPhVea.js', window.__assetsPath + 'lib/chunks/utils-DnwFAWYB.js', window.__assetsPath + 'lib/assets/CornerEntrance-BiPCLtts.css', window.__assetsPath + 'lib/chunks/TaskCard-DFe4mHT8.js', window.__assetsPath + 'lib/chunks/index-C_90mN5F.js', window.__assetsPath + 'lib/assets/index-FHWjcr-S.css', window.__assetsPath + 'lib/chunks/base-BLXKYCno.js', window.__assetsPath + 'lib/assets/base-Cv4OUdE3.css', window.__assetsPath + 'lib/chunks/index-ogD98akV.js', window.__assetsPath + 'lib/assets/index-ywwCZ41Y.css', window.__assetsPath + 'lib/chunks/arr.svg-DXLmujth.js', window.__assetsPath + 'lib/chunks/useSignBtn-C6L0z9Tr.js', window.__assetsPath + 'lib/chunks/sign-9wGGF8b4.js', window.__assetsPath + 'lib/assets/sign-CfQSvGtd.css', window.__assetsPath + 'lib/assets/useSignBtn-BVQN7FhR.css', window.__assetsPath + 'lib/chunks/luckyBagModel-D1muy7TN.js', window.__assetsPath + 'lib/assets/luckyBagModel-Daf2NNxw.css', window.__assetsPath + 'lib/chunks/sign-list-DXjSL58J.js', window.__assetsPath + 'lib/assets/sign-list-BxTiyFu3.css', window.__assetsPath + 'lib/chunks/index-Bp_OUeIa.js', window.__assetsPath + 'lib/assets/index-CTVBbRyF.css', window.__assetsPath + 'lib/chunks/video-award-guide-BtyPn4PZ.js', window.__assetsPath + 'lib/chunks/index-CFJ4pwef.js', window.__assetsPath + 'lib/assets/index-Bd9m_y8x.css', window.__assetsPath + 'lib/assets/video-award-guide-D6a5Z8_K.css', window.__assetsPath + 'lib/assets/TaskCard-CNqIFfs-.css', window.__assetsPath + 'lib/chunks/ProfitEnhance-Iyw2fWty.js', window.__assetsPath + 'lib/assets/ProfitEnhance-Bh0OH5hE.css', window.__assetsPath + 'lib/chunks/index-DCdMs4MK.js', window.__assetsPath + 'lib/chunks/common-error-page-DuYEk_sG.js', window.__assetsPath + 'lib/assets/common-error-page-BVD2Byzh.css', window.__assetsPath + 'lib/chunks/CoreTask-BTbszvvU.js', window.__assetsPath + 'lib/chunks/task-BinTS6q9.js', window.__assetsPath + 'lib/chunks/_isIterateeCall-D64viAj2.js', window.__assetsPath + 'lib/chunks/eq-CoNHUzvr.js', window.__assetsPath + 'lib/chunks/index-DE44hGei.js', window.__assetsPath + 'lib/assets/index-DHifU4Cm.css', window.__assetsPath + 'lib/assets/CoreTask-yCUS-0rR.css', window.__assetsPath + 'lib/chunks/LifeArea-BHanilvK.js', window.__assetsPath + 'lib/assets/LifeArea-DNPb8EE_.css', window.__assetsPath + 'lib/chunks/ActivityBanner-DZnohrGG.js', window.__assetsPath + 'lib/assets/ActivityBanner-DGgxyLWS.css', window.__assetsPath + 'lib/chunks/TaskList-CDHX6d38.js', window.__assetsPath + 'lib/chunks/item-BwPnp_LM.js', window.__assetsPath + 'lib/chunks/normalize-component-B8fXJBgE.js', window.__assetsPath + 'lib/chunks/model-CQvNMC8q.js', window.__assetsPath + 'lib/chunks/ztshare-poster-D0u8Dywv.js', window.__assetsPath + 'lib/assets/item-DqHFcb0g.css', window.__assetsPath + 'lib/assets/TaskList-BX3sjevq.css', window.__assetsPath + 'lib/chunks/CoinCreditWrap-C5mdJU4Q.js', window.__assetsPath + 'lib/chunks/MerchantFeed-DUhbqGL6.js', window.__assetsPath + 'lib/chunks/model-DPLQ0enD.js', window.__assetsPath + 'lib/assets/MerchantFeed-03ax5aHk.css', window.__assetsPath + 'lib/chunks/coin-credit-_879Ni7S.js', window.__assetsPath + 'lib/assets/CoinCreditWrap-DECIwD9c.css', window.__assetsPath + 'lib/chunks/Popup-BOR8v-hV.js', window.__assetsPath + 'lib/chunks/dialog-D4cdFYwN.js', window.__assetsPath + 'lib/assets/dialog-B9FkksF-.css', window.__assetsPath + 'lib/chunks/coin-light-popup-CXfietHi.js', window.__assetsPath + 'lib/chunks/CommonPopup-BM5UYrnn.js', window.__assetsPath + 'lib/assets/CommonPopup-B6O-5R5d.css', window.__assetsPath + 'lib/assets/coin-light-popup-D38whW9s.css', window.__assetsPath + 'lib/chunks/degrade-Csr0UlQr.js', window.__assetsPath + 'lib/earning-zaHZRurc.js', window.__assetsPath + 'lib/chunks/global-B8bT1nE-.js', window.__assetsPath + 'lib/assets/global-8ELO8V5W.css', window.__assetsPath + 'lib/assets/earning-BLhugIuQ.css', window.__assetsPath + 'lib/chunks/dayjs.min-BgNERu2b.js', window.__assetsPath + 'lib/assets/degrade-B2xrELum.css', window.__assetsPath + 'lib/chunks/RuleList-CmPynTj7.js', window.__assetsPath + 'lib/assets/RuleList-LueFCjH1.css', window.__assetsPath + 'lib/assets/Popup-B-DQJ_Ez.css', window.__assetsPath + 'lib/chunks/index-BP945x1f.js', window.__assetsPath + 'lib/assets/index-V-uGZLnC.css', window.__assetsPath + 'lib/chunks/SettingNotify-Bvv4ahWB.js', window.__assetsPath + 'lib/assets/SettingNotify-P8QAywk1.css', window.__assetsPath + 'lib/chunks/treasureBox-C3DmaDA0.js', window.__assetsPath + 'lib/chunks/box-CIDEFk_k.js', window.__assetsPath + 'lib/chunks/index-DU3QlpU8.js', window.__assetsPath + 'lib/chunks/UnLogin-Du1IP2W4.js', window.__assetsPath + 'lib/assets/UnLogin-B1Bkp2ZJ.css', window.__assetsPath + 'lib/chunks/OldEntrance-CtBmpnno.js', window.__assetsPath + 'lib/assets/OldEntrance-CnP-fwMi.css', window.__assetsPath + 'lib/chunks/MaskGuide-DHBEpQsS.js', window.__assetsPath + 'lib/assets/MaskGuide-PXc3mtSC.css', window.__assetsPath + 'lib/chunks/index-BkkYRoho.js', window.__assetsPath + 'lib/chunks/index-Bs3mthn5.js', window.__assetsPath + 'lib/assets/index-BJVvbm2_.css', window.__assetsPath + 'lib/assets/index-DpAl6YZb.css']
    }
    return indexes.map((i) = >__vite__mapDeps.viteFileDeps[i])
}
var et = Object.defineProperty;
var tt = (e, t, n) = >t in e ? et(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var q = (e, t, n) = >(tt(e, typeof t != "symbol" ? t + "": t, n), n);
import {
    V as Vue,
    g as getCurrentInstance,
    r as reactive,
    w as watchEffect,
    o as onMounted,
    a as onBeforeUnmount,
    h,
    e as effectScope,
    b as watch,
    n as nextTick,
    p as provide,
    i as inject,
    c as getCurrentScope,
    d as onScopeDispose,
    u as unref,
    f as ref$1,
    j as isRef,
    k as readonly,
    l as onServerPrefetch,
    t as toRefs,
    m as computed,
    s as shallowReactive,
    q as shallowRef,
    v as toRef,
    x as defineComponent,
    y as c,
    z as st,
    A as ze,
    R as Radar,
    B as onBeforeMount,
    C as defineAsyncComponent
}
from "./vendors-CSc6Bax4.js";
var isVue2 = !0,
Vue2 = Vue;
Vue.util.warn;
function createApp(e, t) {
    var n, r = {},
    o = {
        config: Vue.config,
        use: Vue.use.bind(Vue),
        mixin: Vue.mixin.bind(Vue),
        component: Vue.component.bind(Vue),
        provide: function(a, i) {
            return r[a] = i,
            this
        },
        directive: function(a, i) {
            return i ? (Vue.directive(a, i), o) : Vue.directive(a)
        },
        mount: function(a, i) {
            return n || (n = new Vue(Object.assign({
                propsData: t
            },
            e, {
                provide: Object.assign(r, e.provide)
            })), n.$mount(a, i), n)
        },
        unmount: function() {
            n && (n.$destroy(), n = void 0)
        }
    };
    return o
}
function hasInjectionContext() {
    return !! getCurrentInstance()
}
function scrollToTop(e = document.documentElement, t = 0, n = 2, r) {
    let o = e.scrollTop;
    const a = () = >{
        const i = o + (t - o) / n;
        if (Math.abs(i - t) <= 1) {
            e.scrollTop = t,
            typeof r == "function" && r();
            return
        }
        o = i,
        e.scrollTop = i,
        requestAnimationFrame(a)
    };
    a()
}
function assign(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) e[r] = n[r]
    }
    return e
}
var defaultConverter = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)),
        e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};
function init(e, t) {
    function n(o, a, i) {
        if (! (typeof document > "u")) {
            i = assign({},
            t, i),
            typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)),
            i.expires && (i.expires = i.expires.toUTCString()),
            o = encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var s = "";
            for (var u in i) i[u] && (s += "; " + u, i[u] !== !0 && (s += "=" + i[u].split(";")[0]));
            return document.cookie = o + "=" + e.write(a, o) + s
        }
    }
    function r(o) {
        if (! (typeof document > "u" || arguments.length && !o)) {
            for (var a = document.cookie ? document.cookie.split("; ") : [], i = {},
            s = 0; s < a.length; s++) {
                var u = a[s].split("="),
                l = u.slice(1).join("=");
                try {
                    var f = decodeURIComponent(u[0]);
                    if (i[f] = e.read(l, f), o === f) break
                } catch(p) {}
            }
            return o ? i[o] : i
        }
    }
    return Object.create({
        set: n,
        get: r,
        remove: function(o, a) {
            n(o, "", assign({},
            a, {
                expires: -1
            }))
        },
        withAttributes: function(o) {
            return init(this.converter, assign({},
            this.attributes, o))
        },
        withConverter: function(o) {
            return init(assign({},
            this.converter, o), this.attributes)
        }
    },
    {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var api = init(defaultConverter, {
    path: "/"
});
function getUserId() {
    var e, t;
    return (t = (e = api.get("ud")) != null ? e: api.get("userId")) != null ? t: ""
}
class SearchParams {
    constructor(t) {
        q(this, "_entries", new Map);
        const r = (t.startsWith("?") ? t.substr(1) : t).split("&");
        for (const o of r) {
            const[a, i] = o.split("=");
            a && this._entries.set(this.serializeParam(a), this.serializeParam(i != null ? i: ""))
        }
    }
    serializeParam(t) {
        return encodeURIComponent(t).replace(/%20/g, "+")
    }
    delete(t) {
        this._entries.delete(this.serializeParam(t))
    }
    append(t, n) {
        this._entries.set(this.serializeParam(t), this.serializeParam(n != null ? n: ""))
    }
    toString() {
        const t = [...this._entries.entries()];
        if (!t.length) return "";
        const n = t.reduce((r, o) = >(r.push("".concat(o[0], "=").concat(o[1])), r), []);
        return "".concat(n.length ? "?": "").concat(n.join("&"))
    }
    entries() {
        return [...this._entries.entries()].reduce((n, r) = >{
            const[o, a] = r;
            return n[o] = a,
            n
        },
        {})
    }
}
class BaseUrl {
    constructor(t) {
        q(this, "protocol", "");
        q(this, "hostname", "");
        q(this, "port", "");
        q(this, "pathname", "");
        q(this, "hash", "");
        q(this, "searchParams", new SearchParams(""));
        this.parseUrl(t)
    }
    get search() {
        var t;
        return ((t = this.searchParams) == null ? void 0 : t.toString()) || ""
    }
    get path() {
        return this.pathname + this.search
    }
    get host() {
        return this.port ? "".concat(this.hostname, ":").concat(this.port) : this.hostname
    }
    get href() {
        const t = this.host ? "//".concat(this.host) : "",
        n = "".concat(this.pathname && !this.pathname.startsWith("/") ? "/": "").concat(this.pathname);
        return this.protocol + t + n + this.search + this.hash
    }
    parseUrl(t) {
        let n = t.trim();
        const r = /^([a-z0-9.+-]+:)\/\//i.exec(n);
        r && (this.protocol = r[1].toLowerCase(), n = n.substr(r[0].length));
        const o = n.indexOf("#");
        o !== -1 && (this.hash = n.substr(o), n = n.slice(0, o));
        const a = n.indexOf("?");
        a !== -1 && (this.searchParams = new SearchParams(n.substr(a)), n = n.slice(0, a));
        const i = n.split(/[/ ? #] / g),
        s = i.length ? i[0] : "",
        u = n.replace(s, "");
        this.pathname = u;
        const l = /:([0-9]*)$/.exec(s);
        l && (this.port = l[1]);
        const f = l ? s.length - l[0].length: s.length;
        this.hostname = s.substr(0, f)
    }
}
const cache = new Map;
function getUrlSearchParams(e = window.location.href) {
    if (!cache.has(e)) {
        const t = new BaseUrl(e);
        cache.set(e, t.searchParams.entries())
    }
    return cache.get(e)
}
function appendSearchParamsToUrl(e = window.location.href, t = {}) {
    const n = new BaseUrl(e);
    return Object.keys(t).forEach(r = >{
        var o, a; (o = n.searchParams) == null || o.delete(r),
        (a = n.searchParams) == null || a.append(r, t[r])
    }),
    n.href
}
function compareVersion$2(e, t) {
    const n = e.split("."),
    r = t.split("."),
    o = Math.max(n.length, r.length);
    for (; n.length < o;) n.push("0");
    for (; r.length < o;) r.push("0");
    for (let a = 0; a < o; a++) {
        const i = parseInt(n[a], 10),
        s = parseInt(r[a], 10);
        if (i > s) return 1;
        if (i < s) return - 1
    }
    return 0
}
const ua = navigator.userAgent,
isInBrowser$1 = typeof window < "u";
function isIOS$1() {
    return /iPhone|iPad|iPod|Macintosh/i.test(ua)
}
function isAndroid$2() {
    return ua.includes("Android") || ua.includes("Adr")
}
function isInKwai$1() {
    return /(Kwai(_\w+)?|ksthanos)\//i.test(ua)
}
function isInNebula$1(e = navigator.userAgent) {
    return /ksNebula\//i.test(e)
}
function isInEnterpriseWeChat() {
    return / wxwork\//i.test(ua)
}
function isInWeChat() {
    return /MicroMessenger/i.test(ua) && !isInEnterpriseWeChat()
}
function isInAndroidWeChat() {
    return isAndroid$2() && isInWeChat()
}
function getKpf() {
    return isAndroid$2() ? isInNebula$1() ? "ANDROID_PHONE_H5": "OUTSIDE_ANDROID_H5": isIOS$1() ? isInNebula$1() ? "IPHONE_H5": "OUTSIDE_IOS_H5": "UNKNOWN_PLATFORM"
}
function isInUIWebview(e = navigator.userAgent) {
    return e.includes("WebViewType/UI")
}
function getIOSVersion() {
    const e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return e && parseInt(e[1], 10) || 0
}
function getAndroidVersion() {
    const e = navigator.appVersion.match(/android ([\d._]+)/i);
    if (!e) return 0;
    const t = e[1].replace(/[^0-9_.]/gi, "").replace(/_/gi, ".");
    return parseInt(t, 10) || 0
}
function parsePlatform(e = "") {
    return e.includes("Android") || e.includes("Adr") ? "android": e.includes("iPhone") || e.includes("iPad") ? "ios": "else"
}
let systemLowVersion = !1;
const isAndroid$1 = parsePlatform(navigator.userAgent) === "android";
isAndroid$1 ? systemLowVersion = getAndroidVersion() < 5 : systemLowVersion = getIOSVersion() < 10;
const ctMax = 3;
var Ue, Be;
const CRASH_FALLOVER = Number((Ue = window.ENV_INFO) == null ? void 0 : Ue.ct) > ctMax || ((Be = window.ENV_INFO) == null ? void 0 : Be.icfo),
query = getUrlSearchParams(),
queryIslp = query.islp === "1";
var Fe, Ve, We;
const DOWN_GRADE = !!(systemLowVersion || isInUIWebview() || ((We = (Ve = (Fe = window.ENV_INFO) == null ? void 0 : Fe.islp) != null ? Ve: CRASH_FALLOVER) != null ? We: query.manual_grade) || queryIslp);
var He;
const IS_LOW_DEVICE = (He = window.ENV_INFO) == null ? void 0 : He.islp; (function(t, n) {
    typeof exports == "object" && typeof module == "object" ? module.exports = n() : typeof define == "function" && define.amd ? define([], n) : typeof exports == "object" ? exports.Jose = n() : t.Jose = n()
})(window,
function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(r, o, a) {
            n.o(r, o) || Object.defineProperty(r, o, {
                enumerable: !0,
                get: a
            })
        },
        n.r = function(r) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(r, "__esModule", {
                value: !0
            })
        },
        n.t = function(r, o) {
            if (1 & o && (r = n(r)), 8 & o || 4 & o && typeof r == "object" && r && r.__esModule) return r;
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: r
            }), 2 & o && typeof r != "string") for (var i in r) n.d(a, i,
            function(s) {
                return r[s]
            }.bind(null, i));
            return a
        },
        n.n = function(r) {
            var o = r && r.__esModule ?
            function() {
                return r.
            default
            }:
            function() {
                return r
            };
            return n.d(o, "a", o),
            o
        },
        n.o = function(r, o) {
            return Object.prototype.hasOwnProperty.call(r, o)
        },
        n.p = "",
        n(n.s = 3)
    } ([function(e, t) {
        function n(r) {
            return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ?
            function(o) {
                return typeof o
            }: function(o) {
                return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol": typeof o
            })(r)
        } (function() {
            var r = function(p) {
                return p == null ? null: p.__proto__
            },
            o = Object.create,
            a = function(p, d) {
                return Object.prototype.hasOwnProperty.call(p, d) || n(p[d]) === "object" && p[d] !== void 0
            },
            i = function(p, d, _) {
                return Object.defineProperty(p, d, _)
            },
            s = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "let", "enum", "const", "debugger", "export", "extends", "import", "super"],
            u = function(p) {
                return s.includes(p)
            },
            l = function(p) {
                return p != p
            };
            t.prototypeOf = r,
            t.create = o,
            t.hasProp = a,
            t.isArray = function() {
                if (typeof Array.isArray != "function") return obj instanceof Array
            },
            t.defProp = i,
            t.checkIdentifier = u,
            t.isNaNP = l
        }).call(this)
    },
    function(e, t, n) { (function() {
            var r = n(8).VmError,
            o = function(f, p) {
                for (var d in p) a.call(p, d) && (f[d] = p[d]);
                function _() {
                    this.constructor = f
                }
                return _.prototype = p.prototype,
                f.prototype = new _,
                f.__super__ = p.prototype,
                f
            },
            a = {}.hasOwnProperty,
            i = (o(s, r), s.display = "StopIteration", s);
            function s(l, f) {
                this.value = l,
                this.message = f != null ? f: "iterator has stopped"
            }
            u.prototype.next = function() {
                if (this.index >= this.elements.length) throw new i("array over");
                return this.elements[this.index++]
            },
            r = u;
            function u(l) {
                this.elements = l,
                this.index = 0
            }
            t.StopIteration = i,
            t.ArrayIterator = r
        }).call(this)
    },
    function(e, t, n) {
        function r(o) {
            return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ?
            function(a) {
                return typeof a
            }: function(a) {
                return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
            })(o)
        } (function() {
            var o = {}.hasOwnProperty,
            a = n(0).isArray,
            i = (s.prototype.run = function() {
                for (var m = this.callStack[this.depth], g = m.error; 0 <= this.depth && m && !this.paused;) if ((m = g ? this.unwind(g) : m).run(), (g = m.error) instanceof Error && this.injectStackTrace(g), m.done()) {
                    if (m.guards.length) {
                        var C = m.guards.pop();
                        if (C.finalizer) {
                            m.ip = C.finalizer,
                            m.exitIp = C.end,
                            m.paused = !1;
                            continue
                        }
                    } ! m.construct || (C = r(this.rv)) !== "object" && C !== "function" && (this.rv = m.scope.get(0)),
                    (m = this.popFrame()) && !g && (m.evalStack.push(this.rv), this.rv = void 0)
                } else g = (m = this.callStack[this.depth]).error;
                if (this.timedOut() && (g = new Error(this), this.injectStackTrace(g)), g) throw g
            },
            s.prototype.unwind = function(m) {
                for (var g = this.callStack[this.depth]; g;) {
                    g.error = m;
                    var C = g.ip - 1,
                    I = g.guards.length;
                    if (I && (I = g.guards[I - 1], I.start <= C && C <= I.end)) {
                        if (I.handler !== null) if (C <= I.handler) g.evalStack.push(m),
                        g.error = null,
                        g.ip = I.handler;
                        else {
                            if (! (I.finalizer && g.ip <= I.finalizer)) {
                                g = this.popFrame();
                                continue
                            }
                            g.ip = I.finalizer
                        } else g.ip = I.finalizer;
                        return g.paused = !1,
                        g
                    }
                    g = this.popFrame()
                }
                throw m
            },
            s.prototype.injectStackTrace = function(m) {
                var g, C, I, S, w, b, A, E = [],
                P = 0;
                for (this.depth > this.maxTraceDepth && (P = this.depth - this.maxTraceDepth), C = I = w = this.depth, b = P; w <= b ? I <= b: b <= I; C = w <= b ? ++I: --I)(S = (g = this.callStack[C]).script.name) === "<anonymous>" && g.fname && (S = g.fname),
                E.push({
                    at: {
                        name: S,
                        filename: g.script.filename
                    },
                    line: g.line,
                    column: g.column
                });
                if (m.trace) {
                    for (A = m.trace; a(A[A.length - 1]);) A = A[A.length - 1];
                    A.push(E)
                } else m.trace = E;
                return m.stack = m.toString()
            },
            s.prototype.pushFrame = function(m, g, C, I, S, w, b) {
                if (w == null && (w = "<anonymous>"), b == null && (b = !1), this.checkCallStack()) return C = new d(C, m.localNames, m.localLength),
                C.set(0, g),
                g = new u(this, m, C, this.realm, w, b),
                S && g.evalStack.push(S),
                I && g.evalStack.push(I),
                this.callStack[++this.depth] = g
            },
            s.prototype.checkCallStack = function() {
                return this.depth !== this.maxDepth || (this.callStack[this.depth].error = new Error("maximum call stack size exceeded"), this.pause(), !1)
            },
            s.prototype.popFrame = function() {
                var m = this.callStack[--this.depth];
                return m && (m.paused = !1),
                m
            },
            s.prototype.pause = function() {
                return this.paused = this.callStack[this.depth].paused = !0
            },
            s.prototype.resume = function(m) {
                if (this.timeout = m != null ? m: -1, this.paused = !1, this.callStack[this.depth].paused = !1, this.run(), !this.paused) return this.rexp
            },
            s.prototype.timedOut = function() {
                return this.timeout === 0
            },
            s.prototype.send = function(m) {
                return this.callStack[this.depth].evalStack.push(m)
            },
            s.prototype.done = function() {
                return this.depth === -1
            },
            s);
            function s(m, g) {
                this.realm = m,
                this.timeout = g != null ? g: -1,
                this.maxDepth = 1e3,
                this.maxTraceDepth = 50,
                this.callStack = [],
                this.evalStack = null,
                this.depth = -1,
                this.yielded = this.rv = void 0,
                this.paused = !1,
                this.r1 = this.r2 = this.r3 = null,
                this.rexp = null
            }
            l.prototype.run = function() {
                for (var m = this.script.instructions; this.ip !== this.exitIp && !this.paused;) m[this.ip++].exec(this, this.evalStack, this.scope, this.realm);
                var g = this.evalStack.len();
                if (!this.paused && !this.error && g !== 0) throw new Error("Evaluation stack has " + g + " items after execution")
            },
            l.prototype.done = function() {
                return this.ip === this.exitIp
            },
            l.prototype.setLine = function(m) {
                this.line = m
            },
            l.prototype.setColumn = function(m) {
                this.column = m
            };
            var u = l;
            function l(m, g, C, I, S, w) {
                this.fiber = m,
                this.script = g,
                this.scope = C,
                this.realm = I,
                this.fname = S,
                this.construct = w != null && w,
                this.evalStack = new f(this.script.stackSize, this.fiber),
                this.ip = 0,
                this.exitIp = this.script.instructions.length,
                this.paused = !1,
                this.finalizer = null,
                this.guards = [],
                this.rv = void 0,
                this.line = this.column = -1
            }
            p.prototype.push = function(m) {
                if (this.idx === this.array.length) throw new Error("maximum evaluation stack size exceeded");
                return this.array[this.idx++] = m
            },
            p.prototype.pop = function() {
                return this.array[--this.idx]
            },
            p.prototype.top = function() {
                return this.array[this.idx - 1]
            },
            p.prototype.len = function() {
                return this.idx
            },
            p.prototype.clear = function() {
                return this.idx = 0
            };
            var f = p;
            function p(m, g) {
                this.fiber = g,
                this.array = new Array(m),
                this.idx = 0
            }
            _.prototype.get = function(m) {
                return this.data[m]
            },
            _.prototype.set = function(m, g) {
                return this.data[m] = g
            },
            _.prototype.name = function(m) {
                var g, C = this.names;
                for (g in C) if (o.call(C, g) && C[g] === m) return parseInt(g);
                return - 1
            };
            var d = _;
            function _(m, g, C) {
                this.parent = m,
                this.names = g,
                this.data = new Array(C)
            }
            v.prototype.get = function(m) {
                return this.object[m]
            },
            v.prototype.set = function(m, g) {
                return this.object[m] = g
            },
            v.prototype.has = function(m) {
                return m in this.object
            };
            var y = v;
            function v(m, g) {
                this.parent = m,
                this.object = g
            }
            t.Fiber = i,
            t.Scope = d,
            t.WithScope = y
        }).call(this)
    },
    function(e, t, n) {
        n = new(n(4)),
        n.eval('["<script>",0,[[22]8false,15,null17]anonymous[,29,31,46284527,3446[043923[3111211,1827"$encode"3[,y7,-595066854603553927-1149708013698724087959020,6564738478,609473905989278866435605"n,true"isInNrequi"l"ar"ostRegExp"somwebdveavigatowindown"teslguag<cun"[[___evlilir__futitc"fx_wrapped_enmnphmghtmaclPS_IDE_r"HeadssChr/hlo[[a-z0-9_-]+.(ku|kwai|gifsw)m|cn)/ifgNSptObjecl"noo[ ] rA"(ie|POS|AidWnc""_pre,"xSsli"bH"O,"DetTiMhtf"yC"ovurtupR"0urPgzfmCreicAe[po"jmpOxs"[pE"M""IEubs"qD$3de7-fa2-4aac8LAaTfW"Yks-"A"RjkN1OiOPkgfHCL0P5'),
        e.exports = n
    },
    function(e, t, n) { (function(r) {
            var o = n(5),
            a = n(11),
            i = n(2).Fiber,
            s = n(14),
            u = n(16);
            function l(f) {
                this.realm = new o(f),
                this.realm.global.startupRandom = new Date().getTime(),
                this.realm.global.count = 100,
                new u().register()
            }
            l.prototype.eval = function(f, p) {
                return f = new s().unzip(f),
                this.run(l.fromJSON(JSON.parse(f)), p)
            },
            l.prototype.run = function(f, p) {
                if (f = this.createFiber(f, p), f.run(), !f.paused) return f.rexp
            },
            l.prototype.call = function(f, p) {
                return this.realm.global[f].apply(this, p)
            },
            l.prototype.createFiber = function(f, p) {
                return p = new i(this.realm, p),
                p.pushFrame(f, this.realm.global),
                p
            },
            l.fromJSON = a.fromJSON,
            e.exports = l
        }).call(this)
    },
    function(e, t, n) { (function(r, o, a, i) {
            function s(_) {
                return (s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ?
                function(y) {
                    return typeof y
                }: function(y) {
                    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol": typeof y
                })(_)
            }
            function u(_, y, v) {
                return (u = function() {
                    if (! (typeof Reflect > "u" || !Reflect.construct) && !Reflect.construct.sham) {
                        if (typeof Proxy == "function") return 1;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
                            function() {})),
                            1
                        } catch(m) {}
                    }
                } () ? Reflect.construct.bind() : function(g, C, I) {
                    var S = [null];
                    return S.push.apply(S, C),
                    C = new(Function.bind.apply(g, S)),
                    I && l(C, I.prototype),
                    C
                }).apply(null, arguments)
            }
            function l(_, y) {
                return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, g) {
                    return m.__proto__ = g,
                    m
                })(_, y)
            }
            function f(_) {
                return function(y) {
                    if (Array.isArray(y)) return p(y)
                } (_) ||
                function(y) {
                    if (typeof Symbol < "u" && y[Symbol.iterator] != null || y["@@iterator"] != null) return Array.from(y)
                } (_) ||
                function(y, v) {
                    if (y) {
                        if (typeof y == "string") return p(y, v);
                        var m = Object.prototype.toString.call(y).slice(8, -1);
                        return (m = m === "Object" && y.constructor ? y.constructor.name: m) === "Map" || m === "Set" ? Array.from(y) : m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? p(y, v) : void 0
                    }
                } (_) ||
                function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                } ()
            }
            function p(_, y) { (y == null || y > _.length) && (y = _.length);
                for (var v = 0,
                m = new Array(y); v < y; v++) m[v] = _[v];
                return m
            }
            function d(_, y, v) {
                y in _ ? Object.defineProperty(_, y, {
                    value: v,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : _[y] = v
            } (function() {
                var _ = {}.hasOwnProperty,
                m = n(0),
                y = m.prototypeOf,
                v = m.hasProp,
                m = n(1),
                g = m.ArrayIterator,
                C = m.StopIteration,
                I = n(9).proxyHandler;
                function S(w) {
                    d(E = {
                        window: typeof window > "u" ? r: window,
                        undefined: void 0,
                        Object,
                        Function,
                        Number,
                        Boolean,
                        String,
                        Array,
                        Date,
                        RegExp,
                        Error,
                        StopIteration: C,
                        Math,
                        JSON,
                        console,
                        encodeURIComponent,
                        unescape,
                        Uint8Array,
                        parseInt,
                        escape,
                        decodeURIComponent,
                        isNaN,
                        Infinity: 1 / 0,
                        NaN: NaN
                    },
                    "parseInt", parseInt),
                    d(E, "parseFloat", parseFloat),
                    d(E, "isFinite", isFinite),
                    d(E, "encodeURI", encodeURI),
                    d(E, "decodeURI", decodeURI),
                    d(E, "TypeError", TypeError),
                    d(E, "URIError", URIError),
                    d(E, "SyntaxError", SyntaxError),
                    d(E, "ReferenceError", ReferenceError),
                    d(E, "RangeError", RangeError),
                    d(E, "EvalError", EvalError),
                    d(E, "eval", eval),
                    d(E, "isInNode", !!(o && a && i)),
                    d(E, "require", n(10)),
                    d(E, "isDevTool", !1),
                    d(E, "isWsInstance", !1);
                    var b, A, E, P = E;
                    for (b in window && window.WebSocket && typeof window.Proxy == "function" && /native code/.test(window.Proxy.toString()) && (window.WebSocket = new window.Proxy(window.WebSocket, {
                        construct: function(L, D) {
                            return L = u(L, f(D)),
                            P.isWsInstance = !0,
                            new window.Proxy(L, I)
                        }
                    })), P.isDevTool || ((E = /./).toString = function() {
                        P.isDevTool = !0
                    },
                    console.log(E)), this.has = function(L, D) {
                        return L != null && ( !! v(L, D) || this.has(y(L), D))
                    },
                    this.get = function(L, D) {
                        if (L != null) return L[D]
                    },
                    this.set = function(L, D, V) {
                        var Q = s(L);
                        return (Q === "object" || Q === "function") && (L[D] = V),
                        V
                    },
                    this.del = function(L, D) {
                        var V = s(L);
                        return V !== "object" && V !== "function" || delete L[D]
                    },
                    this.instanceOf = function(L, D) {
                        var V;
                        return D != null && ((V = s(D)) === "object" || V === "function") && D instanceof L
                    },
                    this.enumerateKeys = function(L) {
                        var D, V = [];
                        for (D in L) D !== "__mdid__" && V.push(D);
                        return new g(V)
                    },
                    w) _.call(w, b) && (A = w[b], P[b] = A);
                    this.global = P
                }
                S.prototype.inv = function(w) {
                    return - w
                },
                S.prototype.lnot = function(w) {
                    return ! w
                },
                S.prototype.ladd = function(w) {
                    return + w
                },
                S.prototype.not = function(w) {
                    return~w
                },
                S.prototype.inc = function(w) {
                    return++w
                },
                S.prototype.dec = function(w) {
                    return w - 1
                },
                S.prototype.add = function(w, b) {
                    return b + w
                },
                S.prototype.sub = function(w, b) {
                    return b - w
                },
                S.prototype.mul = function(w, b) {
                    return b * w
                },
                S.prototype.div = function(w, b) {
                    return b / w
                },
                S.prototype.mod = function(w, b) {
                    return b % w
                },
                S.prototype.shl = function(w, b) {
                    return b << w
                },
                S.prototype.sar = function(w, b) {
                    return b >> w
                },
                S.prototype.shr = function(w, b) {
                    return b >>> w
                },
                S.prototype.or = function(w, b) {
                    return b | w
                },
                S.prototype.and = function(w, b) {
                    return b & w
                },
                S.prototype.xor = function(w, b) {
                    return b ^ w
                },
                S.prototype.ceq = function(w, b) {
                    return b == w
                },
                S.prototype.cneq = function(w, b) {
                    return b != w
                },
                S.prototype.cid = function(w, b) {
                    return b === w
                },
                S.prototype.cnid = function(w, b) {
                    return b !== w
                },
                S.prototype.lt = function(w, b) {
                    return b < w
                },
                S.prototype.lte = function(w, b) {
                    return b <= w
                },
                S.prototype.gt = function(w, b) {
                    return w < b
                },
                S.prototype.gte = function(w, b) {
                    return w <= b
                },
                e.exports = S
            }).call(this)
        }).call(this, n(6), n(7), "/", "/index.js")
    },
    function(e, t) {
        function n(o) {
            return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ?
            function(a) {
                return typeof a
            }: function(a) {
                return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
            })(o)
        }
        var r = function() {
            return this
        } ();
        try {
            r = r || new Function("return this")()
        } catch(o) { (typeof window > "u" ? "undefined": n(window)) === "object" && (r = window)
        }
        e.exports = r
    },
    function(o, t) {
        var n, r, o = o.exports = {};
        function a() {
            throw new Error("setTimeout has not been defined")
        }
        function i() {
            throw new Error("clearTimeout has not been defined")
        }
        try {
            n = typeof setTimeout == "function" ? setTimeout: a
        } catch(m) {
            n = a
        }
        try {
            r = typeof clearTimeout == "function" ? clearTimeout: i
        } catch(m) {
            r = i
        }
        function s(m) {
            if (n === setTimeout) return setTimeout(m, 0);
            if ((n === a || !n) && setTimeout) return (n = setTimeout)(m, 0);
            try {
                return n(m, 0)
            } catch(g) {
                try {
                    return n.call(null, m, 0)
                } catch(C) {
                    return n.call(this, m, 0)
                }
            }
        }
        var u, l = [],
        f = !1,
        p = -1;
        function d() {
            f && u && (f = !1, u.length ? l = u.concat(l) : p = -1, l.length && _())
        }
        function _() {
            if (!f) {
                for (var m = s(d), g = (f = !0, l.length); g;) {
                    for (u = l, l = []; ++p < g;) u && u[p].run();
                    p = -1,
                    g = l.length
                }
                u = null,
                f = !1,
                function(C) {
                    if (r === clearTimeout) return clearTimeout(C);
                    if ((r === i || !r) && clearTimeout) return (r = clearTimeout)(C);
                    try {
                        r(C)
                    } catch(I) {
                        try {
                            return r.call(null, C)
                        } catch(S) {
                            return r.call(this, C)
                        }
                    }
                } (m)
            }
        }
        function y(m, g) {
            this.fun = m,
            this.array = g
        }
        function v() {}
        o.nextTick = function(m) {
            var g = new Array(arguments.length - 1);
            if (1 < arguments.length) for (var C = 1; C < arguments.length; C++) g[C - 1] = arguments[C];
            l.push(new y(m, g)),
            l.length !== 1 || f || s(_)
        },
        y.prototype.run = function() {
            this.fun.apply(null, this.array)
        },
        o.title = "browser",
        o.browser = !0,
        o.env = {},
        o.argv = [],
        o.version = "",
        o.versions = {},
        o.on = v,
        o.addListener = v,
        o.once = v,
        o.off = v,
        o.removeListener = v,
        o.removeAllListeners = v,
        o.emit = v,
        o.prependListener = v,
        o.prependOnceListener = v,
        o.listeners = function(m) {
            return []
        },
        o.binding = function(m) {
            throw new Error("process.binding is not supported")
        },
        o.cwd = function() {
            return "/"
        },
        o.chdir = function(m) {
            throw new Error("process.chdir is not supported")
        },
        o.umask = function() {
            return 0
        }
    },
    function(e, t, n) {
        var r = n(0).isArray,
        o = function i(s, u) {
            u == null && (u = ""),
            u += "    ";
            for (var l = "",
            f = 0; f < s.length; f++) {
                var p, d, _, y = s[f];
                r(y) ? l = (l += "\n\n" + u + "Rethrown:") + i(y, u) : (p = y.line, d = y.column, _ = y.at.name, y = y.at.filename, l += _ ? "\n" + u + "at " + _ + " (" + y + ":" + p + ":" + d + ")": "\n" + u + "at " + y + ":" + p + ":" + d)
            }
            return l
        };
        function a(i) {
            this.trace = null,
            this.message = i
        }
        a.prototype.toString = function() {
            var i = this.constructor.display + ": " + this.message;
            return this.trace && (i += o(this.trace)),
            i
        },
        a.prototype.stackTrace = function() {
            return this.toString()
        },
        t.VmError = a
    },
    function(e, t) { (function() {
            t.proxyHandler = {
                get: function(n, r) {
                    return r = n[r],
                    r = typeof r == "function" ? r.bind(n) : r
                },
                set: function(n, r, o) {
                    var a;
                    return r === "onmessage" && (a = o, o = function(s) {
                        a(s)
                    }),
                    n[r] = o
                }
            }
        }).call(this)
    },
    function(e, t) {
        function n(r) {
            throw r = new Error("Cannot find module '" + r + "'"),
            r.code = "MODULE_NOT_FOUND",
            r
        }
        n.keys = function() {
            return []
        },
        (e.exports = n.resolve = n).id = 10
    },
    function(e, t, n) { (function() {
            var r = n(12),
            o = function l(f) {
                for (var p = a(f[2]), d = [], _ = f[3], y = 0; y < _.length; y++) {
                    var v = _[y];
                    d.push(l(v))
                }
                for (var m = f[4], g = m.length, C = [], I = f[5], S = 0; S < I.length; S++) {
                    var w = I[S];
                    C.push({
                        start: w[0] !== -1 ? w[0] : null,
                        handler: w[1] !== -1 ? w[1] : null,
                        finalizer: w[2] !== -1 ? w[2] : null,
                        end: w[3] !== -1 ? w[3] : null
                    })
                }
                for (var b = f[6], A = f[7], E = [], P = f[8], L = 0; L < P.length; L++) {
                    var D = P[L];
                    E.push(i(D))
                }
                return new s(null, null, p, d, m, g, C, b, A, E, null)
            },
            a = function(f) {
                for (var p = [], d = 0; d < f.length; d++) {
                    for (var _ = f[d], y = r[_[0]], v = [], m = 1, g = 1, C = _.length; 1 <= C ? g < C: C < g; m = 1 <= C ? ++g: --g) v.push(_[m]);
                    y = new y(v.length ? v: null),
                    p.push(y)
                }
                return p
            },
            i = function(f) {
                var d = f.lastIndexOf("/"),
                p = f.slice(0, d),
                d = f.slice(d + 1);
                return new RegExp(p, d)
            },
            s = (u.fromJSON = o, u);
            function u(l, f, p, d, _, y, v, m, g, C, I) {
                this.filename = l,
                this.name = f,
                this.instructions = p,
                this.scripts = d,
                this.localNames = _,
                this.localLength = y,
                this.guards = v,
                this.stackSize = m,
                this.strings = g,
                this.regexps = C,
                this.source = I
            }
            e.exports = s
        }).call(this)
    },
    function(module, exports, __webpack_require__) {
        function _typeof(e) {
            return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            })(e)
        } (function() {
            var ref = __webpack_require__(1),
            StopIteration = ref.StopIteration,
            ref1 = __webpack_require__(0);
            ref1.defProp;
            var hasProp = ref1.hasProp,
            ref3 = __webpack_require__(2),
            Fiber = ref3.Fiber,
            Scope = ref3.Scope,
            WithScope = ref3.WithScope,
            OpcodeClassFactory = function() {
                var e = 0;
                return function(t, n, r) {
                    var o;
                    return (o = function(i) {
                        i && (this.args = i)
                    }).prototype.id = e++,
                    o.prototype.exec = n,
                    o.prototype.calculateFactor = r ||
                    function() {
                        return 2
                    },
                    o
                }
            } (),
            RegExpProxy = __webpack_require__(13),
            Op = function(t, n, r) {
                return OpcodeClassFactory(t, n, r)
            },
            opcodes = [new Op("",
            function(e, t, n) {
                return ret(e)
            }), new Op("",
            function(e, t, n) {
                return t.pop()
            }), new Op("",
            function(e, t, n) {
                return t.push(t.top())
            }), new Op("",
            function(e, t, n) {
                var r = t.pop(),
                o = t.pop();
                return t.push(r),
                t.push(o)
            }), new Op("",
            function(e, t, n) {
                return e.fiber.rv = t.pop(),
                ret(e)
            }), new Op("",
            function(e, t) {
                return e.paused = !0
            }), new Op("",
            function(e, t) {
                return e.fiber.yielded = t.pop(),
                e.fiber.pause()
            }), new Op("",
            function(e, t, n) {
                return throwErr(e, t.pop())
            }), new Op("",
            function(e) {
                return e.guards.push(e.script.guards[this.args[0]])
            }), new Op("",
            function(e) {
                var t = e.guards[e.guards.length - 1];
                if (e.script.guards[this.args[0]] === t) return e.guards.pop()
            }), new Op("",
            function(e, t, n) {
                return e.fiber.r1 = t.pop()
            }), new Op("",
            function(e, t, n) {
                return e.fiber.r2 = t.pop()
            }), new Op("",
            function(e, t, n) {
                return e.fiber.r3 = t.pop()
            }), new Op("",
            function(e, t, n) {
                return t.push(e.fiber.r1)
            }), new Op("",
            function(e, t, n) {
                return t.push(e.fiber.r2)
            }), new Op("",
            function(e, t, n) {
                return t.push(e.fiber.r3)
            }), new Op("",
            function(e, t, n) {
                return t.push( + e.fiber.r3)
            }), new Op("",
            function(e, t, n) {
                return t.fiber.rexp = t.pop()
            }), new Op("",
            function(e, t, n) {
                return callm(e, 0, "iterator", t.pop())
            }), new Op("",
            function(e, t, n, r) {
                return t.push(r.enumerateKeys(t.pop()))
            }), new Op("",
            function(e, t, n) {
                if (callm(e, 0, "next", t.pop()), e.error instanceof StopIteration) return e.error = null,
                e.paused = !1,
                e.ip = this.args[0]
            }), new Op("",
            function(e, t, n) {
                if (n.set(1, t.pop()), t = t.pop(), this.args[0]) return n.set(2, t)
            }), new Op("",
            function(e, t, n, r) {
                return t.push(r.global)
            }), new Op("",
            function(e, t, n, r) {
                var o = this.args[0],
                a = this.args[1],
                i = n.get(1);
                if (o < i.length) return n.set(a, Array.prototype.slice.call(i, o))
            }), new Op("",
            function(e, t, n) {
                return call(e, this.args[0], t.pop(), null, null, !0)
            }), new Op("",
            function(e, t, n) {
                return call(e, this.args[0], t.pop(), null, this.args[1])
            }), new Op("",
            function(e, t, n) {
                return callm(e, this.args[0], t.pop(), t.pop(), this.args[1])
            }), new Op("",
            function(e, t, n, r) {
                var o = t.pop(),
                a = t.pop();
                return o == null ? throwErr(e, new TypeError("Cannot read property '" + a + "' of " + o)) : typeof o == "function" && a === "length" && o.originFnLength !== void 0 ? t.push(r.get(o, "originFnLength")) : t.push(r.get(o, a))
            }), new Op("",
            function(e, t, n, r) {
                var o = t.pop(),
                a = t.pop(),
                i = t.pop();
                return o == null ? throwErr(e, new TypeError("Cannot set property '" + a + "' of " + o)) : Object.isExtensible(o) || a !== "__proto__" ? t.push(r.set(o, a, i)) : throwErr(e, new Error("#<Object> is not extensible at set __proto__[as __proto__]"))
            }), new Op("",
            function(e, t, n, r) {
                var o = t.pop(),
                a = t.pop();
                return o == null ? throwErr(e, new Error("Cannot convert null to object")) : t.push(r.del(o, a))
            }), new Op("",
            function(e, t, n) {
                try {
                    for (var r = this.args[0], o = this.args[1], a = n; r--;) a = a.parent;
                    return t.push(a.get(o))
                } catch(i) {
                    return throwErr(e, i)
                }
            }), new Op("",
            function(e, t, n) {
                for (var r = this.args[0], o = this.args[1], a = n; r--;) a = a.parent;
                return t.push(a.set(o, t.pop()))
            }), new Op("",
            function(e, t, n, r) {
                try {
                    for (var o, a = this.args[0]; n instanceof WithScope;) {
                        if (n.has(a)) return t.push(n.get(a));
                        n = n.parent
                    }
                    for (; n instanceof Scope;) {
                        if (0 <= (o = n.name(a))) return t.push(n.get(o));
                        n = n.parent
                    }
                    return hasProp(r.global, a) || this.args[1] ? t.push(r.global[a]) : throwErr(e, new Error(a + " is not defined"))
                } catch(i) {
                    return throwErr(e, i)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    for (var o, a = this.args[0], i = t.pop(); n instanceof WithScope;) {
                        if (n.has(a)) return t.push(n.set(a, i));
                        n = n.parent
                    }
                    for (; n instanceof Scope;) {
                        if (0 <= (o = n.name(a))) return t.push(n.set(o, i));
                        n = n.parent
                    }
                    return t.push(r.global[a] = i)
                } catch(s) {
                    return throwErr(e, s)
                }
            }), new Op("",
            function(e, t, n, r) {
                return hasProp(r.global, this.args[0]) || this.args[1] ? t.push(r.global[this.args[0]]) : this.args[0] === "this" ? t.push(r.global) : throwErr(e, new Error(this.args[0] + " is not defined"))
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.global[this.args[0]] = t.pop())
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e) {
                return e.scope = new Scope(e.scope, e.script.localNames, e.script.localLength)
            }), new Op("",
            function(e) {
                return e.scope = e.scope.parent
            }), new Op("",
            function(e, t) {
                return e.scope = new WithScope(e.scope, t.pop())
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.inv(t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.lnot(t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.ladd(t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.not(t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.inc(t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.dec(t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.add(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.sub(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.mul(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.div(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.mod(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.shl(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.sar(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.shr(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.or(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.and(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.xor(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.ceq(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.cneq(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.cid(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.cnid(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.lt(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.lte(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.gt(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.gte(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.has(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(r.instanceOf(t.pop(), t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t, n, r) {
                try {
                    return t.push(_typeof(t.pop()))
                } catch(o) {
                    return throwErr(e, o)
                }
            }), new Op("",
            function(e, t) {
                return t.pop(),
                t.push(void 0)
            }), new Op("",
            function(e, t, n) {
                return e.ip = this.args[0]
            }), new Op("",
            function(e, t, n) {
                if (t.pop()) return e.ip = this.args[0]
            }), new Op("",
            function(e, t, n) {
                if (!t.pop()) return e.ip = this.args[0]
            }), new Op("",
            function(e, t) {
                return t.push(void 0)
            }), new Op("",
            function(e, t, n) {
                return t.push(this.args[0])
            }), new Op("",
            function(e, t, n) {
                return t.push(this.args[0] ? 1 / 0 : -1 / 0)
            }), new Op("",
            function(e, t, n) {
                return t.push(NaN)
            }), new Op("",
            function(e, t, n) {
                return t.push( - 0)
            }), new Op("",
            function(e, t, n) {
                return t.push(e.script.strings[this.args[0]])
            }), new Op("",
            function(e, t, n, r) {
                return t.push(new RegExpProxy(e.script.regexps[this.args[0]], r))
            }), new Op("",
            function(e, t, n, r) {
                for (var o = this.args[0], a = {}; o--;) {
                    var i = t.pop(),
                    s = t.pop();
                    a.hasOwnProperty(i) || r.set(a, i, s)
                }
                return t.push(a)
            }), new Op("",
            function(e, t, n, r) {
                for (var o = this.args[0], a = new Array(o); o--;) a[o] = t.pop();
                return t.push(a)
            }), new Op("",
            function(e, t, n, r) {
                var o = this.args[0];
                return t.push(createFunction(e.script.scripts[o], n, r, this.args[1]))
            }), new Op("",
            function(e) {
                return e.setLine(this.args[0])
            }), new Op("",
            function(e) {
                return e.setColumn(this.args[0])
            }), new Op("",
            function(e, t, n) {
                return debug()
            })],
            callm = function(t, n, r, o, a) {
                var i = t.evalStack,
                u = t.realm;
                if (o == null) return throwErr(t, new Error("Cannot call method '" + r + "' of " + (o === void 0 ? "undefined": "null")));
                var s = o.constructor.name || "Object",
                u = u.get(o, r);
                return u instanceof Function ? call(t, n, u, o) : u == null ? (i.pop(), throwErr(t, new Error("Object #<" + s + "> has no method '" + r + "'"))) : (i.pop(), throwErr(t, new Error("Property '" + r + "' of object #<" + s + "> is not a function")))
            },
            call = function(t, n, r, o, a, i) {
                if (typeof r != "function") return throwErr(t, new Error("object is not a function"));
                for (var s = t.evalStack,
                u = t.fiber,
                l = t.realm,
                f = {
                    length: n,
                    callee: r
                }; n;) f[--n] = s.pop();
                o = o === void 0 ? l.global: o,
                f = Array.prototype.slice.call(f);
                try {
                    var p = i ? createNativeInstance(r, f) : r.apply(o, f);
                    if (!u.paused) return s.push(p)
                } catch(d) {
                    throwErr(t, d)
                }
            },
            createFunction = function(t, n, r, o, a) {
                var i;
                return (i = function s() {
                    var u, l, f, p = !1;
                    if ((l = s.__fiber__) ? (l.callStack[l.depth].paused = !0, s.__fiber__ = null, u = s.__construct__, s.__construct__ = null) : (l = new Fiber(r), p = !0), f = s.__callname__ || t.name, s.__callname__ = null, l.pushFrame(t, this, n, arguments, s, f, u), p) return l.run(),
                    l.rv
                }).originFnLength = a,
                i
            },
            callArrayConstructor = function(t) {
                return t.length === 1 && (0 | t[0]) === t[0] ? new Array(t[0]) : t.slice()
            },
            callRegExpConstructor = function(t) {
                return t.length === 1 ? new RegExp(t[0]) : new RegExp(t[0], t[1])
            },
            createNativeInstance = function(t, n) {
                var r;
                return t === Array ? callArrayConstructor(n) : t === Date ? n.length === 0 ? new Date: new Date(n[0]) : t === RegExp ? callRegExpConstructor(n) : t === Number ? n.length === 0 ? new Number: new Number(n[0]) : t === Boolean ? n.length === 0 ? new Boolean: new Boolean(n[0]) : t === Uint8Array ? new Uint8Array(n[0]) : t === String ? new String(n[0] || "") : ((r = function() {
                    return t.apply(this, n)
                }).prototype = t.prototype, new r)
            },
            ret = function(t) {
                return t.evalStack.clear(),
                t.exitIp = t.ip
            },
            throwErr = function(t, n) {
                return t.error = n,
                t.paused = !0
            },
            debug = function debug() {
                eval("debugger;")
            };
            module.exports = opcodes
        }).call(this)
    },
    function(e, t) {
        var n = function(o, a) {
            this.__proto__ = Object.create(RegExp.prototype),
            Object.defineProperties(this, {
                global: {
                    value: o.global
                },
                ignoreCase: {
                    value: o.ignoreCase
                },
                multiline: {
                    value: o.multiline
                },
                source: {
                    value: o.source
                },
                hasIndices: {
                    value: o.hasIndices
                },
                dotAll: {
                    value: o.dotAll
                },
                flags: {
                    value: o.flags
                },
                sticky: {
                    value: o.sticky
                },
                unicode: {
                    value: o.unicode
                }
            })
        };
        e.exports = n
    },
    function(e, t, n) {
        var r, o;
        o = n(15),
        (r = function() {}).prototype.zip = function(a) {
            return o.encode(a)
        },
        r.prototype.unzip = function(a) {
            return o.decode(a)
        },
        e.exports = r
    },
    function(e, t) {
        function n(o) {
            return function(a) {
                if (Array.isArray(a)) return r(a)
            } (o) ||
            function(a) {
                if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a)
            } (o) ||
            function(a, i) {
                if (a) {
                    if (typeof a == "string") return r(a, i);
                    var s = Object.prototype.toString.call(a).slice(8, -1);
                    return (s = s === "Object" && a.constructor ? a.constructor.name: s) === "Map" || s === "Set" ? Array.from(a) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? r(a, i) : void 0
                }
            } (o) ||
            function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            } ()
        }
        function r(o, a) { (a == null || a > o.length) && (a = o.length);
            for (var i = 0,
            s = new Array(a); i < a; i++) s[i] = o[i];
            return s
        }
        e.exports.encode = function(o) {
            try {
                var a, i = {},
                s = [],
                u = o[0],
                l = 57344;
                o = (o + "").split("");
                for (var f = 1; f < o.length; f++) i[u + (a = o[f])] != null && u + a !== "toString" ? u += a: (s.push(1 < u.length ? i[u] : u.codePointAt(0)), i[u + a] = l, l++, u = a);
                return s.push(1 < u.length ? i[u] : u.codePointAt(0)),
                s.map(function(p) {
                    return String.fromCodePoint(p)
                }).join("")
            } catch(p) {
                throw new Error(p)
            }
        },
        e.exports.decode = function(o) {
            try {
                for (var a = n(o).map(function(y) {
                    return y.codePointAt(0)
                }), i = {},
                s = String.fromCodePoint(a[0]), u = s, l = [s], f = 57344, p = 1; p < a.length; p++) {
                    var d, _ = a[p];
                    l += d = _ < 57344 ? String.fromCodePoint(a[p]) : i[_] || u + s,
                    s = d[0],
                    i[f] = u + s,
                    f++,
                    u = d
                }
                return l
            } catch(y) {
                throw new Error(y)
            }
        }
    },
    function(e, t) {
        var n, r;
        r = function(a, i, s, u) {
            for (var l, f, p, d, _, y, v, m, g, C, I = 0,
            S = 147,
            w = 42;;) {
                switch (w) {
                case 236 ^ I: I = 121,
                    w &= 151;
                    continue;
                case 42:
                    I = 97,
                    w |= 47;
                    continue;
                case 13:
                    I = 152,
                    w -= 8;
                    continue;
                case 80 ^ I: if (29 < (30 ^ I) % 35) for (var b = 0,
                    A = 90;;) {
                        switch (A) {
                        case 59 ^ b: b = 129,
                            A |= 21;
                            continue;
                        case - 84 ^ b: _ = a[4],
                            A -= (b ^ S) % 11;
                            continue;
                        case 188:
                            b = 168,
                            A -= 63;
                            continue;
                        case 187 ^ b: b = 155,
                            A ^= 29;
                            continue;
                        case 212 ^ b: (33 ^ b) % 37 < 17 && (f = a[1]),
                            A -= 27;
                            continue;
                        case 180 ^ b: b = 41,
                            A -= 151;
                            continue;
                        case - 12 ^ b: b = 54,
                            A &= 25;
                            continue;
                        case - 46 ^ b: 13 < (44 ^ b) % 30 && (y = a[5]),
                            A += 7 | b;
                            continue;
                        case 213 ^ b: d = a[3],
                            A &= ("31" ^ b) % 31;
                            continue;
                        case - 80 : A |= 3;
                            continue;
                        case 131 ^ b: b = 71,
                            A -= 46;
                            continue;
                        case - 72 ^ b: for (; (31 ^ b) % 4 < 3;) {
                                v = a[6];
                                break
                            }
                            A -= 11 | b;
                            continue;
                        case 188 ^ b: 1 < (33 ^ b) % 7 && (p = a[2]),
                            A ^= 19 | b;
                            continue;
                        case 90:
                            b = 107,
                            A ^= 2;
                            continue;
                        case 17:
                            for (; (33 ^ b) % 31 < 28;) {
                                m = a[7];
                                break
                            }
                            A |= (b ^ S) % 24;
                            continue;
                        case 51 ^ b: l = a[0],
                            A ^= (b ^ S) % 15;
                            continue;
                        case - 6 : A |= 15;
                            continue;
                        case - 133 : b = 171,
                            A ^= 2;
                            continue
                        }
                        break
                    }
                    w -= (I ^ S) % 11;
                    continue;
                case 78 ^ I: for (; 3 < (45 ^ I) % 14;) {
                        C = 4294967295;
                        break
                    }
                    w -= 3;
                    continue;
                case 125 ^ I: if ((22 | I) < 132) return a;
                    w -= 3 | I;
                    continue;
                case 127 ^ I: for (; 0 < (39 ^ I) % 4;) {
                        for (g = 0; g < 64; g++) for (var E = 0,
                        P = 95;;) {
                            switch (P) {
                            case 183 ^ E: E = 152,
                                P |= 16;
                                continue;
                            case - 12 : P -= 151;
                                continue;
                            case 95:
                                E = 169,
                                P -= 47;
                                continue;
                            case - 147 ^ E: E = 54,
                                P &= 2;
                                continue;
                            case 31 ^ E: if ((30 ^ E) % 12 < 12) for (var L, D, V, Q, oe, te, ne, B = 0,
                                T = 34;;) {
                                    switch (T) {
                                    case 68 ^ B: 3 < (34 ^ B) % 5 && (Q = _ & y ^ ~_ & v),
                                        T ^= 151;
                                        continue;
                                    case 18 ^ B: V = $ ^ Z ^ D,
                                        T |= 4 | B;
                                        continue;
                                    case 69 ^ B: B = 95,
                                        T += 159;
                                        continue;
                                    case 154:
                                        T |= 6;
                                        continue;
                                    case 34:
                                        B = 135,
                                        T -= 2;
                                        continue;
                                    case 467 ^ B: ne = oe + te,
                                        T |= ("50" ^ B) % 29;
                                        continue;
                                    case 87 ^ B: B = 168,
                                        T += 44;
                                        continue;
                                    case 158 ^ B: B = 60,
                                        T += 16;
                                        continue;
                                    case 233 ^ B: -1 < (27 ^ B) % 22 && (te = s[g] + u[g]),
                                        T ^= 12 | B;
                                        continue;
                                    case 211 ^ B: B = 66,
                                        T |= 7;
                                        continue;
                                    case 2 ^ B: B = 74,
                                        T &= 15;
                                        continue;
                                    case 158:
                                        D = F | L,
                                        T &= 62;
                                        continue;
                                    case 84 ^ B: 0 < (36 ^ B) % 33 && (oe = m + V + Q),
                                        T -= (B ^ S) % 4;
                                        continue;
                                    case 167 ^ B: for (; 2 < (41 ^ B) % 24;) {
                                            L = _ << 7;
                                            break
                                        }
                                        T |= 18 | B;
                                        continue;
                                    case 159:
                                        T &= 54;
                                        continue;
                                    case 48 ^ B: B = 128,
                                        T -= 29;
                                        continue
                                    }
                                    break
                                }
                                P -= 59;
                                continue;
                            case 153 ^ E: if ((22 ^ E) % 19 < 3) for (var O, R, $, M, W, Z, F, U = 0,
                                re = 92;;) {
                                    switch (re) {
                                    case 88 ^ U: O = _ >>> 6,
                                        re -= 31;
                                        continue;
                                    case 4:
                                        U = 137,
                                        re |= 2;
                                        continue;
                                    case 60 ^ U: 10 < (24 ^ U) % 25 && (R = _ << 26),
                                        re &= 6;
                                        continue;
                                    case 134 ^ U: F = _ >>> 25,
                                        re ^= ("21" ^ U) % 34;
                                        continue;
                                    case 74 ^ U: (64 ^ U) % 21 < 11 && (Z = M | W),
                                        re |= 17 | U;
                                        continue;
                                    case 63 ^ U: U = 145,
                                        re |= 1;
                                        continue;
                                    case 92:
                                        U = 147,
                                        re ^= 151;
                                        continue;
                                    case 100 ^ U: M = _ >>> 11,
                                        re ^= (U ^ S) % 18;
                                        continue;
                                    case 147 ^ U: for (;;) {
                                            U = 91;
                                            break
                                        }
                                        re |= 47;
                                        continue;
                                    case 123 ^ U: U = 115,
                                        re ^= 9;
                                        continue;
                                    case 105 ^ U: 17 < (62 ^ U) % 33 && (W = _ << 21),
                                        re ^= (U ^ S) % 20;
                                        continue;
                                    case 102 ^ U: U = 73,
                                        re -= 29;
                                        continue;
                                    case 59:
                                        re ^= 2;
                                        continue;
                                    case 6:
                                        re |= 29;
                                        continue;
                                    case 150 ^ U: $ = O | R,
                                        re &= 58;
                                        continue;
                                    case 8 ^ U: U = 132,
                                        re &= 2;
                                        continue
                                    }
                                    break
                                }
                                P &= 9 | E;
                                continue;
                            case 54 ^ E: for (; (60 ^ E) % 7 < 8;) {
                                    for (var _e, de, ve, pe, he, ye, le, K = 0,
                                    ee = 48;;) {
                                        switch (ee) {
                                        case 68:
                                            he = l & f,
                                            ee ^= 63;
                                            continue;
                                        case 52:
                                            (36 ^ K) % 3 < 4 && (ve = l >>> 22 | l << 10),
                                            ee |= 155;
                                            continue;
                                        case 48:
                                            K = 76,
                                            ee |= 41;
                                            continue;
                                        case 186:
                                            pe = _e ^ de ^ ve,
                                            ee -= 3 | K;
                                            continue;
                                        case 112 ^ K: K = 147,
                                            ee ^= 1;
                                            continue;
                                        case 117 ^ K: for (; (64 ^ K) % 15 < 14;) {
                                                _e = l >>> 2 | l << 30;
                                                break
                                            }
                                            ee ^= ("36" ^ K) % 11;
                                            continue;
                                        case 37 ^ K: ye = l & p,
                                            ee -= (K ^ S) % 37;
                                            continue;
                                        case 44 ^ K: K = 80,
                                            ee -= 6;
                                            continue;
                                        case 172 ^ K: K = 48,
                                            ee -= 11;
                                            continue;
                                        case 93:
                                            K = 87,
                                            ee ^= 25;
                                            continue;
                                        case 59:
                                            ee |= 20;
                                            continue;
                                        case 107:
                                            K = 140,
                                            ee |= 7;
                                            continue;
                                        case 174 ^ K: 2 < (24 ^ K) % 15 && (de = l >>> 13 | l << 19),
                                            ee ^= ("50" ^ K) % 31;
                                            continue;
                                        case 95:
                                            ee -= 2;
                                            continue;
                                        case 143 ^ K: K = 89,
                                            ee -= 5;
                                            continue;
                                        case 111:
                                            le = f & p,
                                            ee &= 63;
                                            continue
                                        }
                                        break
                                    }
                                    break
                                }
                                P |= ("39" ^ E) % 19;
                                continue;
                            case 107 ^ E: for (var J = 0,
                                se = 70;;) {
                                    switch (se) {
                                    case - 115 ^ J: (34 ^ J) % 30 < 30 && (d = p),
                                        se -= 61;
                                        continue;
                                    case - 169 ^ J: J = 54,
                                        se ^= 6;
                                        continue;
                                    case - 62 ^ J: J = 100,
                                        se |= 39;
                                        continue;
                                    case - 142 ^ J: J = 123,
                                        se |= 6;
                                        continue;
                                    case - 146 ^ J: (30 ^ J) % 14 < 7 && (_ = d + ne & C),
                                        se ^= 28;
                                        continue;
                                    case - 213 ^ J: 1 < (26 ^ J) % 38 && (l = ne + ge & C),
                                        se ^= 55;
                                        continue;
                                    case - 37 ^ J: (10 | J) < 112 && (p = f),
                                        se -= 155;
                                        continue;
                                    case - 174 ^ J: 7 < (31 ^ J) % 15 && (f = l),
                                        se -= (J ^ S) % 11;
                                        continue;
                                    case 70:
                                        se |= 63;
                                        continue;
                                    case 127:
                                        J = 130,
                                        se -= 147;
                                        continue;
                                    case - 192 ^ J: J = 76,
                                        se -= 6;
                                        continue
                                    }
                                    break
                                }
                                P += (E ^ S) % 21;
                                continue;
                            case 137 ^ E: E = 48,
                                P += 15;
                                continue;
                            case 248 ^ E: for (var me, ge, X = 0,
                                N = 47;;) {
                                    switch (N) {
                                    case 117 ^ X: 19 < (38 ^ X) % 38 && (me = he ^ ye ^ le),
                                        N ^= 19 | X;
                                        continue;
                                    case 36:
                                        N -= 147;
                                        continue;
                                    case - 72 ^ X: X = 111,
                                        N &= 0;
                                        continue;
                                    case 47:
                                        X = 69,
                                        N ^= 31;
                                        continue;
                                    case 81:
                                        (68 ^ X) % 31 < 17 && (ge = pe + me),
                                        N -= 13 | X;
                                        continue;
                                    case 111 ^ X: (15 | X) < 115 && (m = v),
                                        N -= 25;
                                        continue;
                                    case - 120 ^ X: X = 92,
                                        N -= 45;
                                        continue;
                                    case 34 ^ X: X = 41,
                                        N -= 22;
                                        continue;
                                    case - 26 ^ X: v = y,
                                        N |= 59;
                                        continue;
                                    case - 25 ^ X: for (;;) {
                                            X = 167;
                                            break
                                        }
                                        N ^= 3;
                                        continue;
                                    case - 225 ^ X: 27 < (25 ^ X) % 32 && (y = _),
                                        N ^= 155;
                                        continue
                                    }
                                    break
                                }
                                P += 55;
                                continue;
                            case 39 ^ E: E = 84,
                                P += 155;
                                continue
                            }
                            break
                        }
                        break
                    }
                    w += (I ^ S) % 38;
                    continue;
                case 150 ^ I: I = 92,
                    w &= 12;
                    continue;
                case 20 ^ I: I = 160,
                    w |= 14;
                    continue;
                case 95 ^ I: I = 64,
                    w |= 63;
                    continue;
                case 44:
                    w -= 31;
                    continue;
                case 157 ^ I: for (g = i; g < 64; g++) for (var H = 0,
                    k = 29;;) {
                        switch (k) {
                        case - 82 ^ H: if ((25 ^ H) % 19 < 7) for (var x, fe, be, we, Ee, Se, G = 0,
                            ae = 68;;) {
                                switch (ae) {
                                case 68:
                                    G = 94,
                                    ae += 31;
                                    continue;
                                case 0:
                                    ae -= 30;
                                    continue;
                                case - 178 ^ G: for (; 15 < (34 ^ G) % 23;) {
                                        Ee = Re + Le;
                                        break
                                    }
                                    ae += (G ^ S) % 14;
                                    continue;
                                case - 146 ^ G: G = 120,
                                    ae -= 62;
                                    continue;
                                case - 46 ^ G: G = 63,
                                    ae += 33;
                                    continue;
                                case - 145 ^ G: G = 59,
                                    ae |= 29;
                                    continue;
                                case - 144 ^ G: G = 129,
                                    ae ^= 57;
                                    continue;
                                case - 62 ^ G: G = 143,
                                    ae &= 16;
                                    continue;
                                case 195 ^ G: fe = u[g - 15] >>> 3,
                                    ae &= (G ^ S) % 5;
                                    continue;
                                case - 167 ^ G: (35 ^ G) % 21 < 16 && (Se = be + we),
                                    ae ^= 55;
                                    continue;
                                case 16:
                                    ae -= 6;
                                    continue;
                                case 28 ^ G: G = 141,
                                    ae |= 12;
                                    continue;
                                case - 192 ^ G: G = 145,
                                    ae |= 27;
                                    continue;
                                case - 12 ^ G: for (; (53 ^ G) % 24 < 13;) {
                                        u[g] &= C;
                                        break
                                    }
                                    ae &= 17;
                                    continue;
                                case 133 ^ G: (37 ^ G) % 12 < 5 && (we = u[g - 16]),
                                    ae -= 59;
                                    continue;
                                case - 60 ^ G: be = De ^ x ^ fe,
                                    ae -= (G ^ S) % 27;
                                    continue;
                                case - 55 ^ G: u[g] = Ee + Se,
                                    ae -= ("41" ^ G) % 37;
                                    continue;
                                case 61 ^ G: for (;;) {
                                        x = Me | $e;
                                        break
                                    }
                                    ae &= 22 | G;
                                    continue
                                }
                                break
                            }
                            k += 30;
                            continue;
                        case - 70 ^ H: H = 87,
                            k |= 41;
                            continue;
                        case 143 ^ H: for (; (21 ^ H) % 10 < 6;) {
                                for (var Ie, Ce, Te, Ae, Oe, Pe, ke, Y = 0,
                                ce = 91;;) {
                                    switch (ce) {
                                    case 80 ^ Y: Y = 160,
                                        ce -= 147;
                                        continue;
                                    case 167 ^ Y: Pe = Ae | Oe,
                                        ce -= ("48" ^ Y) % 12;
                                        continue;
                                    case 159:
                                        ce += 47;
                                        continue;
                                    case 42 ^ Y: Y = 90,
                                        ce += 155;
                                        continue;
                                    case - 163 ^ Y: (65 ^ Y) % 4 < 1 && (ke = u[g - 2] >>> 10),
                                        ce ^= ("36" ^ Y) % 27;
                                        continue;
                                    case 91:
                                        Y = 101,
                                        ce -= 10;
                                        continue;
                                    case 34 ^ Y: Y = 164,
                                        ce ^= 21;
                                        continue;
                                    case - 165 ^ Y: Y = 173,
                                        ce -= 15;
                                        continue;
                                    case - 41 ^ Y: Te = Ie | Ce,
                                        ce |= ("46" ^ Y) % 33;
                                        continue;
                                    case 54 ^ Y: Oe = u[g - 2] << 13,
                                        ce |= (Y ^ S) % 29;
                                        continue;
                                    case 176 ^ Y: 19 < (32 ^ Y) % 25 && (Ce = u[g - 2] << 15),
                                        ce &= ("36" ^ Y) % 29;
                                        continue;
                                    case 52 ^ Y: Ie = u[g - 2] >>> 17,
                                        ce -= (Y ^ S) % 4;
                                        continue;
                                    case - 33 ^ Y: Y = 116,
                                        ce &= 159;
                                        continue;
                                    case 107 ^ Y: Ae = u[g - 2] >>> 19,
                                        ce |= 147;
                                        continue;
                                    case 206:
                                        ce &= 55;
                                        continue;
                                    case 114 ^ Y: for (;;) {
                                            Y = 52;
                                            break
                                        }
                                        ce &= 3;
                                        continue
                                    }
                                    break
                                }
                                break
                            }
                            k += (H ^ S) % 4;
                            continue;
                        case 29:
                            H = 144,
                            k |= 22;
                            continue;
                        case 178 ^ H: H = 99,
                            k -= 28;
                            continue;
                        case - 81 ^ H: if ((25 ^ H) % 16 < 13) for (var Re, Le, Ne, xe, De, Me, $e, z = 0,
                            ue = 97;;) {
                                switch (ue) {
                                case 97:
                                    z = 136,
                                    ue |= 10;
                                    continue;
                                case 253 ^ z: z = 119,
                                    ue |= 14;
                                    continue;
                                case 127:
                                    Le = u[g - 7],
                                    ue ^= 22;
                                    continue;
                                case 53 ^ z: z = 105,
                                    ue ^= 1;
                                    continue;
                                case 254 ^ z: Re = Te ^ Pe ^ ke,
                                    ue ^= (z ^ S) % 24;
                                    continue;
                                case 138 ^ z: z = 167,
                                    ue &= 23;
                                    continue;
                                case 131 ^ z: (35 ^ z) % 34 < 32 && (De = Ne | xe),
                                    ue ^= ("32" ^ z) % 30;
                                    continue;
                                case - 57 ^ z: $e = u[g - 15] << 14,
                                    ue ^= (z ^ S) % 18;
                                    continue;
                                case - 166 ^ z: z = 42,
                                    ue -= 16;
                                    continue;
                                case 107:
                                    ue += 11;
                                    continue;
                                case 105:
                                    ue -= 39;
                                    continue;
                                case 38 ^ z: z = 138,
                                    ue += 29;
                                    continue;
                                case 67:
                                    Ne = u[g - 15] >>> 7,
                                    ue |= ("43" ^ z) % 27;
                                    continue;
                                case 230 ^ z: xe = u[g - 15] << 25,
                                    ue |= 11 | z;
                                    continue;
                                case 166 ^ z: for (; (23 ^ z) % 33 < 13;) {
                                        Me = u[g - 15] >>> 18;
                                        break
                                    }
                                    ue -= (z ^ S) % 16;
                                    continue;
                                case 101 ^ z: z = 67,
                                    ue ^= 47;
                                    continue
                                }
                                break
                            }
                            k ^= ("34" ^ H) % 22;
                            continue;
                        case 6:
                            k -= 58;
                            continue
                        }
                        break
                    }
                    w ^= (I ^ S) % 17;
                    continue;
                case 254 ^ I: for (; - 2 < (31 ^ I) % 4;) {
                        for (var j = 0,
                        ie = 96;;) {
                            switch (ie) {
                            case 96:
                                j = 37,
                                ie += 12;
                                continue;
                            case 70 ^ j: for (; (15 | j) < 99;) {
                                    a[1] = a[1] + f & C;
                                    break
                                }
                                ie ^= (j ^ S) % 36;
                                continue;
                            case - 27 ^ j: a[3] = a[3] + d & C,
                                ie -= ("49" ^ j) % 21;
                                continue;
                            case - 203 ^ j: j = 72,
                                ie |= 31;
                                continue;
                            case 68 ^ j: (23 ^ j) % 13 < 10 && (a[7] = a[7] + m & C),
                                ie ^= ("37" ^ j) % 20;
                                continue;
                            case 163 ^ j: -1 < (47 ^ j) % 6 && (a[6] = a[6] + v & C),
                                ie |= 155;
                                continue;
                            case - 70 ^ j: 9 < (34 ^ j) % 37 && (a[4] = a[4] + _ & C),
                                ie ^= 13 | j;
                                continue;
                            case - 9 ^ j: 27 < (40 ^ j) % 33 && (a[5] = a[5] + y & C),
                                ie &= 31;
                                continue;
                            case 56 ^ j: a[2] = a[2] + p & C,
                                ie -= 31;
                                continue;
                            case 187:
                                j = 58,
                                ie -= 61;
                                continue;
                            case - 39 ^ j: j = 147,
                                ie ^= 151;
                                continue;
                            case 74 ^ j: j = 56,
                                ie -= 25;
                                continue;
                            case 71:
                                ie -= 3;
                                continue;
                            case 31:
                                ie += 31;
                                continue;
                            case 118 ^ j: j = 147,
                                ie ^= 14;
                                continue;
                            case - 12 ^ j: j = 130,
                                ie -= 47;
                                continue;
                            case 97 ^ j: j = 83,
                                ie -= 47;
                                continue;
                            case 73 ^ j: a[0] = a[0] + l & C,
                                ie -= 4 | j;
                                continue
                            }
                            break
                        }
                        break
                    }
                    w -= ("38" ^ I) % 29;
                    continue
                }
                break
            }
        },
        (n = function() {}).prototype.register = function() {
            Object.defineProperty(Object, "jmpOnw_sxw", {
                writable: !0,
                configurable: !0,
                value: r
            })
        },
        e.exports = n
    }])
});
const en = window.Jose,
sigCatVer = 1,
ignoreKey = "__NS",
sig3Key$1 = "__NS_sig3",
cookieWhiteList = ["kpn", "kpf", "userId", "did", "c", "appver", "language", "mod", "did_tag", "egid", "oDid", "androidApiLevel", "newOc", "browseType", "socName", "ftt", "abi", "userRecoBit", "device_abi", "grant_browse_type", "iuid", "rdid"];
function getCookie$2() {
    var e;
    return ((e = document.cookie.split(";")) != null ? e: []).map(t = >{
        const n = t.split("=");
        return [n[0].trim(), n.slice(1).join("=").trim()]
    }).filter(t = >cookieWhiteList.includes(t[0]) && !!t[1]).reduce((t, n) = >(t[n[0]] = n[1], t), {})
}
function isGetMethod(e) {
    return ["get", "options", "head"].includes(e.toLowerCase())
}
function makeString(e) {
    return Object.keys(e).reduce((t, n) = >(n.startsWith(ignoreKey) || t.push("".concat(n, "=").concat(typeof e[n] == "object" ? "": e[n])), t), []).sort((t, n) = >t === n ? 0 : t < n ? -1 : 1).join("")
}
function getRequestString(e = {},
t = null, n = "get", r = "json") {
    const o = getCookie$2();
    let a = {
        sigCatVer,
        ...o,
        ...e
    };
    if (r === "json") {
        if (isGetMethod(n)) return a = {...a,
            ...t
        },
        makeString(a);
        const i = t ? typeof t == "string" ? t: JSON.stringify(t) : "";
        return "".concat(makeString(a)).concat(i)
    }
    return r === "form" && (a = {...a,
        ...t
    }),
    makeString(a)
}
async
function getSig3(e = {},
t = null, n = "get", r = "json") {
    const o = getRequestString(e, t, n, r);
    return new Promise((a, i) = >{
        en.call("$encode", [o, {
            suc(s, u) {
                a({
                    signInput: o,
                    signResult: s,
                    result: "".concat(sig3Key$1, "=").concat(s, "&sigCatVer=").concat(sigCatVer),
                    c_info: u
                })
            },
            err(s) {
                i(s)
            }
        }])
    })
}
const sig3InfoMap = new Map;
async
function appendSig3ToUrl(e, t, n, r, o) {
    const a = getUrlSearchParams(e);
    if (a[sig3Key$1]) return e;
    try {
        const i = Date.now(),
        {
            signInput: s,
            result: u,
            signResult: l,
            c_info: f
        } = await getSig3(a, r, t, n),
        p = Date.now() - i,
        d = e.includes("?") ? "&": "?";
        return sig3InfoMap.set(e, {
            signInput: s,
            signResult: l
        }),
        f && (o == null || o({
            name: "c_info",
            category: "ztEncourage",
            message: f
        })),
        Math.random() < 1e-4 && (o == null || o({
            name: "sig3 time cost",
            src: e
        },
        {
            duration: p
        })),
        "".concat(e).concat(d).concat(u)
    } catch(i) {
        const s = i.name,
        u = i.message;
        return o == null || o({
            name: "sig3 error",
            src: e,
            extra_info: JSON.stringify({
                errorName: s,
                errorMessage: u
            })
        }),
        e
    }
}
function getSig3Info(e) {
    var t;
    return (t = sig3InfoMap.get(e)) != null ? t: {}
}
function deleteSig3Info(e) {
    sig3InfoMap.delete(e)
}
const sig3Key = "__NS_sig3";
function getRequestInfo(e, t) {
    var a, i, s, u, l;
    let n = "/",
    r = "GET",
    o = null;
    return typeof t > "u" ? (typeof e == "string" ? n = e: e instanceof Request && (n = e.url, r = ((a = e.method) != null ? a: "GET").toUpperCase(), isGetMethod(r) || (o = e.body)), {
        url: n,
        method: r,
        query: getUrlSearchParams(n),
        data: o
    }) : (typeof e == "string" ? (n = e, r = ((i = t.method) != null ? i: "GET").toUpperCase()) : e instanceof Request && (n = (s = e.url) != null ? s: "/", r = ((l = (u = t.method) != null ? u: e.method) != null ? l: "GET").toUpperCase()), isGetMethod(r) || (o = t.body), {
        url: n,
        method: r,
        query: getUrlSearchParams(n),
        data: o
    })
}
function createReg(e) {
    const t = e.filter(n = >!!n).map(n = >n instanceof RegExp ? n.source: n);
    return t.length ? new RegExp(t.join("|")) : null
}
function isUrlShouldPatch(e, t, n) {
    var r, o, a, i;
    return t.length > 0 && n.length > 0 ? ((r = createReg(t)) == null ? void 0 : r.test(e)) && !((o = createReg(n)) != null && o.test(e)) : t.length > 0 ? (a = createReg(t)) == null ? void 0 : a.test(e) : !((i = createReg(n)) != null && i.test(e))
}
function patchFetchForSig3(e) {
    var o, a;
    const t = (o = e == null ? void 0 : e.include) != null ? o: [],
    n = (a = e == null ? void 0 : e.exclude) != null ? a: [],
    r = window.fetch;
    window.fetch = async(i, s) = >{
        var m, g;
        const {
            url: u,
            method: l = "GET",
            query: f = {},
            data: p = null,
            requestType: d = "json"
        } = getRequestInfo(i, s);
        let _ = u;
        const y = new BaseUrl(u),
        v = !!getUrlSearchParams(u)[sig3Key];
        if (isUrlShouldPatch(y.pathname, t, n) && !v) try {
            const {
                signInput: C,
                result: I,
                c_info: S
            } = await getSig3(f, p, l, d),
            w = u.includes("?") ? "&": "?";
            _ = "".concat(u).concat(w).concat(I),
            S && ((m = e == null ? void 0 : e.sendEvent) == null || m.call(e, {
                name: "c_info",
                category: "ztEncourage",
                message: S
            }))
        } catch({
            signInput: C,
            error: I
        }) {
            const S = I.name,
            w = I.message; (g = e == null ? void 0 : e.sendEvent) == null || g.call(e, {
                name: "sig3 error",
                src: u,
                extra_info: JSON.stringify({
                    errorName: S,
                    errorMessage: w,
                    signInput: C
                })
            })
        }
        return new Promise((C, I) = >{
            r.apply(this, [_, s]).then(S = >{
                C(S)
            }).
            catch(S = >{
                I(S)
            })
        })
    }
}
const unitTextConfig = {
    low: "金币",
    high: "快乐豆"
},
matchJoyBean = window.location.search.includes("nebula_text_type=1") || !!api.get("nebula_text_type"),
translateStrategy = {
    joyBean: e = >e == null ? void 0 : e.replace(unitTextConfig.low, unitTextConfig.high)
},
unitText = e = >matchJoyBean ? translateStrategy.joyBean(e) : e,
$translate = {
    unitText
},
$unit = $translate.unitText("金币"),
$cashUnit = "元",
$cashDisplay = "现金",
beforeTransUrl = e = >{
    var r;
    let t = e.url;
    const n = (r = e.type) != null ? r: "back";
    return /^http(s)?:\/\//g.test(t) || (t = window.location.origin + t),
    matchJoyBean && (t = appendSearchParamsToUrl(t, {
        nebula_text_type: 1
    })),
    {
        url: t,
        type: n
    }
};
function getDynamicValue(e) {
    return Math.ceil(e * window.innerWidth / 414)
}
function checkOpen(e, t = 2e3) {
    return new Promise((n, r) = >{
        const o = setTimeout(() = >{
            n(!1),
            e == null || e()
        },
        t),
        a = () = >{ (document.hidden || document.visibilityState === "hidden") && o && (n(!0), clearTimeout(o), document.removeEventListener("visibilitychange", a))
        };
        document.addEventListener("visibilitychange", a)
    })
}
const createDefer = () = >{
    let e = () = >{},
    t = () = >{};
    return {
        promise: new Promise((r, o) = >{
            e = r,
            t = o
        }),
        resolve: e,
        reject: t
    }
};
var LinkType$1 = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SCHEME = 1] = "SCHEME", e[e.WEBVIEW = 2] = "WEBVIEW", e[e.AD_VIDEO = 3] = "AD_VIDEO", e[e.AD_LIVE = 4] = "AD_LIVE", e[e.CALENDAR = 5] = "CALENDAR", e[e.SIGN_IN = 6] = "SIGN_IN", e[e.NEW_AD_VIDEO = 7] = "NEW_AD_VIDEO", e[e.NEW_AD_LIVE = 8] = "NEW_AD_LIVE", e[e.WATCH_VIDEO_DOUBLE = 9] = "WATCH_VIDEO_DOUBLE", e[e.SEND_GET_REQUEST = 10] = "SEND_GET_REQUEST", e[e.INVOKE_BRIDGE = 11] = "INVOKE_BRIDGE", e[e.REPORT_AND_JUMP = 12] = "REPORT_AND_JUMP", e[e.LAUNCH_APP = 13] = "LAUNCH_APP", e[e.AD_VIDEO_OR_LIVE = 101] = "AD_VIDEO_OR_LIVE", e[e.AD_NEW_NEO_SHOPPING = 102] = "AD_NEW_NEO_SHOPPING", e))(LinkType$1 || {});
function useRoute$1() {
    var r;
    const e = getCurrentInstance();
    if (!e) throw new Error("getCurrentInstance() returned null. useRoute() must be called at the top of a setup function");
    const t = (r = e.proxy) == null ? void 0 : r.$root,
    n = reactive({...t.$route
    });
    return watchEffect(() = >{
        Object.assign(n, t.$route)
    }),
    n
}
function useRouter$1() {
    var r;
    const e = getCurrentInstance();
    if (!e) throw new Error("getCurrentInstance() returned null. useRouter() must be called at the top of a setup function");
    const t = (r = e.proxy) == null ? void 0 : r.$root,
    n = t.$router;
    return watchEffect(() = >{
        Object.assign(n, t.$router)
    }),
    n
}
const isScheme = e = >e.startsWith("kwai") || e.startsWith("ksnebula"),
isPath = e = >e.startsWith("/"),
isHttp = e = >e.startsWith("http"),
createHiddenToCancel = () = >{
    let e = null;
    const t = o = >{
        e = o
    },
    n = () = >{ (document.hidden || document.visibilityState === "hidden") && e && (clearTimeout(e), document.removeEventListener("visibilitychange", n))
    };
    return {
        setTimer: t,
        onVisibilitychange: n,
        addVisibilityChangeListener: () = >{
            document.addEventListener("visibilitychange", n)
        }
    }
},
useOpenLink = e = >{
    const {
        openYodaWebview: t
    } = e,
    n = (u, l = {
        base: "",
        forceOpenInNewWebview: !1,
        keepQuery: !0,
        query: {}
    }) = >{
        var m;
        if (!isPath(u)) return;
        const f = useRouter$1(),
        p = useRoute$1(),
        d = ((m = f.options.base) != null ? m: l.base).replace(/\/$/, ""),
        _ = {...p.query
        },
        y = l.keepQuery ? {..._,
            ...l.query
        }: {...l.query
        };
        if (!l.forceOpenInNewWebview) {
            f.push({
                path: u,
                query: y
            });
            return
        }
        const v = appendSearchParamsToUrl("".concat(d).concat(u), y);
        t(v)
    },
    r = (u = "", l = !0) = >{
        isScheme(u) || !l ? window.location.href = u: isHttp(u) && t(u)
    },
    o = (u = "", l = 0, f = !1, p = !0) = >{
        if (l === 0) r(u, p);
        else {
            const d = window.setTimeout(() = >{
                r(u, p)
            },
            l);
            if (f) {
                const {
                    addVisibilityChangeListener: _,
                    setTimer: y
                } = createHiddenToCancel();
                y(d),
                _()
            }
        }
    },
    a = (u, l = {
        delay: 0,
        hiddenToCancel: !1,
        forceOpenInNewWebview: !0
    }) = >{
        isHttp(u) && o(u, l.delay, l.hiddenToCancel, l.forceOpenInNewWebview)
    },
    i = async(u, l = {
        delay: 100,
        hiddenToCancel: !1
    }) = >{
        isScheme(u) && o(u, l.delay, l.hiddenToCancel)
    };
    function s(u, l, f) {
        if (l) switch (u) {
        case LinkType$1.SCHEME:
            i(l, f);
            break;
        case LinkType$1.WEBVIEW:
            isHttp(l) ? a(l, f) : isPath(l) && n(l, f);
            break
        }
    }
    return {
        openPathLink: n,
        openHttpLink: a,
        openSchemeLink: i,
        openLink: s
    }
};
class Deferred {
    constructor() {
        this.promise = new Promise((t, n) = >{
            this.resolve = t,
            this.reject = n
        })
    }
}
const hasOwnProperty$1 = (() = >{
    const {
        hasOwnProperty: e
    } = Object.prototype;
    return (t, n) = >e.call(t, n)
})(),
isNonNullObject = e = >typeof e == "object" && e !== null,
isFunction$1 = e = >typeof e == "function",
delay = e = >new Promise(t = >setTimeout(t, e)),
memoize = (e, t = (...n) = >n[0]) = >{
    const n = new Map,
    r = new WeakMap;
    return (...o) = >{
        var u;
        const a = t(...o),
        i = isNonNullObject(a) ? r: n,
        s = (u = i.get(a)) != null ? u: e(...o);
        return i.has(a) || i.set(a, s),
        s
    }
},
compareVersion$1 = (e, t) = >{
    if (!e || !t) return Number.NaN;
    const n = e.split(".").map(o = >+o),
    r = t.split(".").map(o = >+o);
    for (let o = 0; o < Math.min(n.length, r.length); o += 1) {
        if (Number.isNaN(n[o]) || Number.isNaN(r[o])) return Number.NaN;
        if (n[o] !== r[o]) return n[o] - r[o]
    }
    return 0
},
getPlatformVersion = memoize(e = >{
    var t, n;
    return (n = (t = new RegExp("(?:".concat(e, ")\\/([\\d+.]+)")).exec(typeof navigator > "u" ? "": navigator.userAgent)) == null ? void 0 : t[1]) != null ? n: ""
}),
compareYodaVersion = e = >compareVersion$1(getPlatformVersion("Yoda"), e),
compareKwaiAppVersion = e = >compareVersion$1(getPlatformVersion("Kwai|ksNebula"), e),
system = (() = >{
    if (typeof navigator > "u") return "unknown";
    const {
        userAgent: e,
        maxTouchPoints: t
    } = navigator;
    return /android/iu.test(e) ? "Android": /iPhone|iPad|iPod/u.test(e) || e.includes("Mac") && t > 1 ? "iOS": "unknown"
})(),
isAndroid = system === "Android",
isIOS = system === "iOS",
isYoda = () = >{
    var e;
    return typeof window < "u" && typeof((e = window.__yodaBridge__) == null ? void 0 : e.invoke) == "function"
},
isApp = e = >!!getPlatformVersion(e),
isKwaiApp = isApp("Kwai|ksNebula"),
SafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;
let overflow = !1,
_callbackId = 1,
_instanceId = genInstanceId();
function genInstanceId() {
    const e = "".concat(SafeInteger),
    t = Number(e.slice(0, 3)) - 100,
    n = Math.floor(Math.random() * t),
    r = "".concat(Date.now()),
    o = r.slice(r.length - 9),
    a = new Array(e.length - 12).fill(0).join("");
    return Number("".concat(n).concat(o).concat(a))
}
function genCallbackId(e) {
    const t = genNextId(e);
    return t >= SafeInteger ? (overflow = !0, _callbackId = 1, _instanceId = genInstanceId(), genCallbackId()) : t
}
function genNextId(e) {
    let t = _instanceId + _callbackId++;
    for (; overflow || e && e[t];) t = _instanceId + _callbackId++;
    return t
}
function getUUId(e) {
    return genCallbackId(e)
}
function debounce$3(e, t = 300) {
    let n = null;
    return (...r) = >{
        clearTimeout(n),
        n = setTimeout(() = >{
            e.apply(this, r)
        },
        t)
    }
}
let yodaInstance = null;
function setYoda(e) {
    yodaInstance = e
}
function getYoda() {
    return yodaInstance
}
async
function checkCanUse(e, t) {
    const r = await getYoda().bridge("tool", "canIUse", {
        namespace: e,
        name: t
    });
    return r.result == "1" && r.canUse
}
const markStr$1 = "too_performance_";
function getPerformanceId() {
    return markStr$1 + getUUId()
}
function isPerformanceId(e) {
    return e.startsWith(markStr$1)
}
const markStr = "event_";
function getEventId(e) {
    return markStr + getUUId(e)
}
function getEventIdOnlyNumber(e) {
    return e.replace(markStr, "")
}
function getEventIdByNumber(e) {
    return markStr + String(e)
}
function isEventId(e) {
    return e.startsWith(markStr)
}
const logArrayPool = [],
logSessionMinTime = 1e3 * 1,
maxTime = 30;
var switchEnum; (function(e) {
    e[e.unload = 0] = "unload",
    e[e.open = 1] = "open",
    e[e.close = 2] = "close"
})(switchEnum || (switchEnum = {}));
const isLocalBridge = e = >["canIUse", "getApiList"].includes(e.name);
let isSendLog = switchEnum.unload,
getPageLoadDataPromise = null;
const loggerSwitch = () = >{
    var n, r;
    if (getPageLoadDataPromise) return getPageLoadDataPromise;
    const {
        promise: e,
        resolve: t
    } = new Deferred;
    if (getPageLoadDataPromise = e, isSendLog == switchEnum.unload) if ((n = window.__yodaCommonDataObject__) != null && n.sampleData) {
        if (typeof window.__yodaCommonDataObject__.sampleData == "string") try {
            window.__yodaCommonDataObject__.sampleData = JSON.parse(window.__yodaCommonDataObject__.sampleData)
        } catch(o) {
            window.__yodaCommonDataObject__.sampleData = {}
        }
        isSendLog = (r = window.__yodaCommonDataObject__.sampleData) != null && r.bridgeHit ? switchEnum.open: switchEnum.close,
        t(isSendLog == switchEnum.open)
    } else getYoda().bridge("webview", "getPageLoadData", {},
    ({
        result: a,
        sampleData: i
    }) = >{
        a == 1 ? isSendLog = i != null && i.bridgeHit ? switchEnum.open: switchEnum.close: isSendLog = switchEnum.close,
        t(isSendLog == switchEnum.open)
    });
    else t(isSendLog == switchEnum.open);
    return getPageLoadDataPromise
};
function sendLog() {
    window.__yodaBridge__.invoke("tool", "sendPerformanceLog", JSON.stringify({
        data: logArrayPool
    }), getPerformanceId()),
    logArrayPool.length = 0
}
const _logger = debounce$3(() = >{
    sendLog()
},
logSessionMinTime),
getLog = (e, t, n) = >{
    var o, a, i, s;
    const r = {
        key: "bridge",
        value: {},
        dimension: {
            api: e.name,
            namespace: e.namespace
        },
        event_client_timestamp: t,
        event_trigger_source: "H5",
        task_identifier: e.callbackId,
        is_task_event: !0,
        task_status: ""
    };
    switch (e.type) {
    case "invoke":
        r.value.h5_invoke_bridge_time = t,
        r.task_status = "START",
        (typeof((o = window.__yodaBridge__) == null ? void 0 : o.invoke) != "function" || typeof((s = (i = (a = window.webkit) == null ? void 0 : a.messageHandlers) == null ? void 0 : i.KMYYoda) == null ? void 0 : s.postMessage) != "function") && (r.result = 126002, r.error_msg = "");
        break;
    case "callback":
        r.value.h5_receive_callback_time = t,
        r.value.h5_invoke_bridge_time = n,
        r.dimension.result_type = e.resultCode,
        r.dimension.result_type && (r.dimension.result_type = r.dimension.result_type.toString()),
        r.dimension.error_msg = e.errorMsg,
        r.task_status = "END";
        break;
    case "event":
        r.task_status = "SUCCESS",
        delete r.dimension.api,
        delete r.dimension.namespace,
        r.dimension.event = "";
        break
    }
    return r
},
logger = (e, t) = >{
    if (isLocalBridge(e)) return;
    const n = Date.now().toString();
    return loggerSwitch().then(r = >{
        r && (logArrayPool.push(getLog(e, n, t)), logArrayPool.length >= maxTime ? sendLog() : _logger())
    }),
    n
};
function createSingleDeferred(e) {
    let t = null,
    n = new Promise(r = >{
        t = r
    });
    return e && (n = n.then(e, e)),
    {
        isMulti: !1,
        resolve: t,
        promise: n
    }
}
function createMultiDeferred(e) {
    const t = new Promise(() = >{});
    return {
        isMulti: !0,
        resolve: e,
        promise: t
    }
}
const invokeMap = {},
deferredInvoke = {
    pushMQ(e = !1, t, n = !1) {
        const r = n ? getEventId() : getUUId(invokeMap),
        o = e ? createMultiDeferred(t) : createSingleDeferred(t);
        return o.traceId = String(r),
        invokeMap[r] = o,
        o
    },
    removeMQ(e) {
        invokeMap[e] = void 0
    },
    create(e, t, n = !1, r) {
        const o = this.pushMQ(n, r);
        o.namespace = e,
        o.name = t;
        const a = logger({
            namespace: e,
            name: t,
            type: "invoke",
            callbackId: o.traceId
        });
        return invokeMap[o.traceId].startTime = a,
        {
            id: o.traceId,
            promise: o.promise
        }
    },
    resolve(e, t) {
        if (isPerformanceId(e)) return;
        const n = invokeMap[e];
        n && (n.resolve(t), n.isMulti || this.removeMQ(e), !isEventId(e) && logger({
            namespace: n.namespace,
            name: n.name,
            type: "callback",
            callbackId: n.traceId,
            resultCode: t.result
        },
        n.startTime))
    },
    reject(e, t) {
        const n = invokeMap[e];
        n && (n.resolve(t), n.isMulti || this.removeMQ(e), !isEventId(e) && logger({
            namespace: n.namespace,
            name: n.name,
            type: "callback",
            callbackId: n.traceId,
            resultCode: t.result,
            errorMsg: t.message
        },
        n.startTime))
    }
},
BRIDGE_TYPE = {
    noCallbackList: ["popBack", "exitWebView"],
    onClickList: ["setPhysicalBackButton", "setTopLeftBtn", "setTopLeftSecondBtn", "setTopRightBtn", "setTopRightSecondBtn"],
    handlerList: ["on", "off"]
},
NAMESPACE_2_GLOBALVAR = {
    kwai: "Kwai",
    kwaiAd: "KwaiAd",
    kwaiAdThird: "KwaiAdThird",
    kwaiMerchant: "KwaiMerchant",
    kwaiLive: "KwaiLive",
    kspay: "kspay",
    Kwai: "Kwai",
    KwaiAd: "KwaiAd",
    KwaiAdThird: "KwaiAdThird",
    KwaiMerchant: "KwaiMerchant",
    KwaiLive: "KwaiLive"
},
{
    noCallbackList,
    onClickList,
    handlerList
} = BRIDGE_TYPE;
function generateUUID(e = !0) {
    let t = new Date().getTime();
    return typeof performance < "u" && typeof performance.now == "function" && (t += performance.now()),
    (e ? "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx": "xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx").replace(/[xy]/g, r = >{
        const o = (t + Math.random() * 16) % 16 | 0;
        return t = Math.floor(t / 16),
        (r === "x" ? o: o & 3 | 8).toString(16)
    })
}
function generateUUCallbackFunction(e, t, n) {
    const r = generateUUID(!1),
    o = "yoda_kuaishou_plugin_callback_".concat(n, "_").concat(r);
    return window[o] = function(a) {
        if (typeof a == "string") try {
            a = JSON.parse(a)
        } catch(i) {
            console.warn(i)
        }
        isFunction$1(e) ? e.call(window, a) : typeof e == "string" && isFunction$1(window[e]) && window[e].call(window, a),
        t || delete window[o]
    },
    o
}
function transformFuncToURL(e, t) {
    const n = e;
    return e && Array.isArray(e.actions) && (n.actions = e.actions.map(r = >(r && r.url && isFunction$1(r.url) && (r.url = generateUUCallbackFunction(r.url, !0, t)), r))),
    n
}
const handlerCbMap = {};
function generateHandlerFunction(e, t) {
    let n = "",
    r = null;
    if (Object.keys(handlerCbMap).some(o = >{
        const a = handlerCbMap[o];
        return a === e ? (r = a, n = o, !0) : !1
    }), r !== e && e) {
        const o = generateUUCallbackFunction(e, !0, t);
        handlerCbMap[o] = e,
        n = o
    }
    return n
}
function bridgeParamsHandler(e, t, n, r) {
    let o = {...n
    };
    const a = "".concat(e, "_").concat(t);
    if (onClickList.includes(t)) o.onClick = generateUUCallbackFunction(o.onClick, !0, a);
    else if (noCallbackList.includes(t)) o = null;
    else if (handlerList.includes(t)) {
        const i = generateUUCallbackFunction(r, !1, a);
        o.handler && isFunction$1(o.handler) && (o.handler = generateHandlerFunction(o.handler, a)),
        o.callback = i
    } else if (t === "showDialog") {
        const {
            positiveButton: i,
            negativeButton: s,
            neutralButton: u
        } = o;
        i && (o.positiveButton = transformFuncToURL(i, a)),
        s && (o.negativeButton = transformFuncToURL(s, a)),
        u && (o.neutralButton = transformFuncToURL(u, a))
    } else if (Object.keys(NAMESPACE_2_GLOBALVAR).includes(e)) {
        const i = generateUUCallbackFunction(r, !0, a);
        o.callback = o.callback || i
    }
    return o
}
const getMultiInstanceError = () = >new Error("当前环境存在 Yoda 多实例问题，详细请参考 https://docs.corp.kuaishou.com/k/home/VbQx2ulc6v3M/fcADLOKqHyHpSr7hiCKKQVtVM"),
setupMultiInstanceGuard = () = >{
    let {
        __yodaBridgeCallback__: e
    } = window;
    if (typeof e == "function") throw getMultiInstanceError();
    Object.defineProperty(window, "__yodaBridgeCallback__", {
        get() {
            return e
        },
        set(t) {
            if (e) throw getMultiInstanceError();
            e = t
        }
    })
};
let currentMode = "production";
const getCurrentMode = () = >currentMode,
setCurrentMode = e = >{
    currentMode = e
},
loggerMethods = ["debug", "info", "log", "warn", "error"],
createLogger = e = >Object.fromEntries(loggerMethods.map(t = >[t, e(t)])),
print = (e, t, ...n) = >{
    getCurrentMode() !== "production" && console[t]("[".concat(e, "]"), ...n)
},
console$1 = createLogger(e = >(...t) = >print("@yoda/bridge", e, ...t)),
invoke$1 = async e = >{
    var p;
    const {
        namespace: t,
        name: n,
        params: r,
        multiCallback: o,
        callback: a
    } = e,
    i = NAMESPACE_2_GLOBALVAR[t],
    {
        id: s,
        promise: u
    } = deferredInvoke.create(t, n, o, a),
    l = i || t,
    f = d = >{
        invokeCallback(s, d)
    };
    return e.namespace = l === "Kwai" && typeof navigator < "u" && navigator.userAgent.includes("livemate/") ? "livemate": l,
    e.params = (p = bridgeParamsHandler(l, n, r, f)) != null ? p: {},
    console$1.info("Invoking '".concat(e.namespace, ".").concat(e.name, "'"), e.params),
    isIOS && !window.webkit && compareYodaVersion("2.10.9.2") < 0 || window.__yodaBridge__.invoke(e.namespace, e.name, JSON.stringify(e.params), String(s)),
    u
},
invokeCallback = (e, t) = >{
    isIOS && compareYodaVersion("2.3.7") < 0 && (e = "".concat(e));
    const n = typeof t == "string" ? JSON.parse(t) : t; (n == null ? void 0 : n.result) === 1 ? deferredInvoke.resolve(e, n) : deferredInvoke.reject(e, n)
};
typeof window < "u" && (setupMultiInstanceGuard(), window.__yodaBridgeCallback__ = invokeCallback);
const apiSet = new Set,
invokeAndroid9920 = async e = >{
    var s;
    const {
        namespace: t,
        name: n,
        params: r,
        multiCallback: o,
        callback: a
    } = e;
    if (!apiSet.size) {
        const u = await invoke$1({
            namespace: "tool",
            name: "getApiList",
            params: {}
        });
        u.result === 1 && Array.isArray(u.apiList) && u.apiList.forEach(({
            namespace: l,
            name: f
        }) = >apiSet.add("".concat(l, ".").concat(f)))
    }
    const i = apiSet.has("".concat((s = NAMESPACE_2_GLOBALVAR[t]) != null ? s: t, ".").concat(n));
    return new Promise(u = >{
        if (i) invoke$1({
            namespace: t,
            name: n,
            params: r,
            multiCallback: o,
            callback: a
        }).then(u);
        else {
            const l = {
                result: 125004
            };
            a == null || a(l),
            u(l)
        }
    })
};
let currentContainer = null;
const getContainer = () = >currentContainer,
setContainer = e = >{
    currentContainer = e
},
getContext = ({
    initialBridge: e,
    initialParams: t
}) = >({
    bridge: e,
    params: t
});
class BridgeError extends Error {
    constructor(t, n, r, o) {
        super(t),
        this.name = "BridgeError",
        this.message = t,
        this.code = n,
        this.rawRes = o,
        this.context = getContext(r)
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            context: this.context
        }
    }
}
const isBridgeError = e = >e instanceof BridgeError,
getLocation = async({
    useLastLocationWhileLimited: e = !1,
    ...t
}) = >{
    const {
        invoke: n
    } = getContainer();
    if (compareKwaiAppVersion("10.1.30") < 0) {
        const {
            biz: r,
            force: o,
            statKey: a,
            alertScene: i,
            updateLocationScene: s,
            ...u
        } = t,
        f = {...u,
            biz_type: r,
            forced_permission_request: typeof o > "u" ? 2 : o ? 1 : 3
        };
        try {
            const {
                data: {
                    longitude: _,
                    latitude: y
                }
            } = await n("kwai.syncLocationWithPermissionCheck", {...f,
                forced_permission_request: 3
            });
            return {
                longitude: _,
                latitude: y
            }
        } catch(_) {}
        await n("kwai.requestLocationPermissionWithPermissionCheck", f);
        const {
            data: {
                longitude: p,
                latitude: d
            }
        } = await n("kwai.syncLocationWithPermissionCheck", f);
        return {
            longitude: p,
            latitude: d
        }
    }
    if (isAndroid && compareKwaiAppVersion("10.3.30") < 0) {
        const {
            updateLocationScene: r = ""
        } = t;
        Object.assign(t, {
            useInterval: !r
        })
    }
    try {
        const {
            longitude: r,
            latitude: o
        } = await n("system.requestLocation", t);
        return {
            longitude: r,
            latitude: o
        }
    } catch(r) {
        if (!isBridgeError(r)) throw r;
        if (r.code === 10014 && e) {
            const {
                longitude: o,
                latitude: a
            } = await n("system.getLocationCityInfo", {
                biz: t.biz
            });
            if (typeof o == "number" && typeof a == "number") return {
                longitude: o,
                latitude: a
            }
        }
        throw r
    }
},
apis = {
    getLocation
},
bridgeToLegacyKwaiBridge = Object.fromEntries(Object.entries({
    advertise: ["startFansTopLivePlay", "startNeoAdVideo"],
    feed: ["authorizationStatusForCalendar", "changeEventForCalendar", "closeChildLock", "getAddressBookAccessStatus", "getCoronaTvChasingData", "getFeed", "openDetailPage", "openFansGroup", "setSettingEntryForCourse", "startPlayLongVideo", "updateDeviceBit", "updateUserRecoBit", "updateWeatherInfo", "userIncentivesUpdateTasks"],
    game: ["addShortcutToDesktop", "appointGame", "changeAppointStatus", "gameSendLog", "gameTaskSelectImage", "getAppointStatus", "getWebViewDisplayType", "kgPageDidShowed", "openNativeGamecenter"],
    growth: ["getDeviceSecretInfo", "unionPhoneNumber"],
    im: ["setEnableIMTip"],
    live: ["deleteSubscribe", "liveReservationNotification", "openLiveQuizLive", "showSubscribeEditDialog", "showSubscribeSelectPhotoDialog", "subscribeLive", "unsubscribeLive"],
    merchant: ["closeLiveMerchantFloatingWindow", "getLatestImage", "getSidToken", "loadUrlOnNewMerchantPage", "merchantSetPhotoPlayStatus", "onItemSelected", "popupToFollow", "querySessionIsStickyOnTop", "reqSessionStickyOnTopWithThread", "requestLocationAuthorization"],
    minigame: ["publishSogameVideo"],
    pay: ["authThirdPartyAccount", "bindWithdrawType", "couponPay", "hasImportSdk", "nebulaStartGatewayWithdraw", "openKspayWebView", "sfBindWithdrawType", "startDeposit", "startGatewayPay", "startGatewayWithdraw", "startHalfScreenRecharge", "startKspayOrderPrepay"],
    platform: ["getDarkMode", "openWechatMiniProgram", "sendSMS", "startFaceRecognition"],
    post: ["cancelJsInjectUpload", "captureCertVideo", "deleteCacheVideoByPhotoId", "editAtlas", "editDraft", "editSmartAlbum", "getEditDraftData", "getSmartAlbumData", "getVideoUploadStatus", "intownShare", "postAtlas", "postVideo", "preloadMagicFace", "previewVideo", "reUploadShopVideo", "reeditPhoto", "resumeVideoUpload", "retryJsInjectUpload", "saveImage", "saveTempImages", "selectAndUploadMedia", "selectImage", "selectMixMediasAndUpload", "selectVideoAndUpload", "startAudioRecord", "uploadCertVideo", "uploadShopVideo", "uploadVideoFromAlbum", "verifyLiveUser"],
    social: ["addTokenBlockShareId", "bindPhone", "bindRiskPreCheck", "decryptContactsName", "enterGroupChat", "followUser", "joinGroup", "login", "logout", "mobileQuickAuthInfo", "mobileQuickLoginInfo", "needUpdateProfile", "requestFollowUserV2", "selectCountryPhoneCode", "sendIMMessage", "sendImFriendMessage", "setPageFollowRefer", "setShareTokenToClipBoard", "share", "startAuthActivity", "verifyAccount", "verifySMSCode", "verifyThirdPartyLogin", "wechatLogin"],
    system: ["collapseKeyboard", "getPushPermission", "getServerTime", "gete2", "openPushPermission"],
    tool: ["getClipBoard", "getExpTagTransList", "loadUrlOnNewPage", "openBrowser", "scanCode"],
    ui: ["selectCity", "showBottomSheet", "showPicker"],
    webview: ["clearClipBoard", "exitWebView", "getABTest", "getAppEnvironment", "getDeviceInfo", "hasInstalledApp", "hideNavigationBar", "popBack", "resetTopButtons", "setClipBoard", "setPageTitle", "setSlideBack", "setTopLeftBtn", "setTopLeftSecondBtn", "setTopRightBtn", "setTopRightSecondBtn", "submitData"]
}).flatMap(([e, t]) = >t.map(n = >["".concat(e, ".").concat(n), "kwai.".concat(n)]))),
invalidResultBridges = ["social.currentUserInfo", "post.draftRecommendPhotos", "post.draftRecommendPublishPhotos", "kwai.KSVerifyRealNameInfo", "kwai.verifyRealNameInfo", "component.aliyunVerifyRealNameInfo", "component.verifyRealNameInfo"],
multipleCallbacksBridges = ["component.download", "kwai.download", "kwai.downloadThirdPartyAPP", "kwai.startNFC", "kwaiAd.callAdBridge", "kwaiAd.callCardHandler", "pay.startHalfScreenRecharge", "post.postVideo", "post.reUploadShopVideo", "post.selectImage", "post.uploadShopVideo", "post.selectMixMediasAndUpload", "post.launchAICut", "advertise.startNeoTask", "kwaiLive.subscribeChannel"],
multipleCallbacksBridgeSet = new Set(multipleCallbacksBridges),
useCallbackBridgeSet = new Set([...invalidResultBridges, ...multipleCallbacksBridges]),
version = "2.0.12",
globalConfig = {
    get mode() {
        return getCurrentMode()
    },
    set mode(e) {
        setCurrentMode(e),
        console$1.info("You're currently running version ".concat(version, " in ").concat(e, " mode."))
    }
},
setGlobalConfig = e = >{
    Object.assign(globalConfig, e)
},
transformConfig = e = >{
    const t = [],
    n = o = >{
        t.push(a = >{
            const i = o[a.bridge];
            return typeof i > "u" ? a: {...a,
                bridge: i
            }
        })
    },
    r = o = >{
        t.push(a = >{
            const i = o[a.bridge];
            if (typeof i > "u") return a;
            const s = {...i,
                ...a.params
            };
            return {...a,
                params: s
            }
        })
    };
    return e.bridge === "tool.checkAppInstalled" && r({ [e.bridge] : {
            identifier: e.params[isAndroid ? "android": "ios"]
        }
    }),
    isIOS && compareKwaiAppVersion("9.10.11") >= 0 && n({
        "hybrid.getHybridStatus": "webview.pageContentStatus",
        "hybrid.getAndUpdateHybridDetail": "webview.pageContentInfo",
        "hybrid.preloadVideoList": "media.pvList",
        "hybrid.isVideoFullyCached": "media.vReady"
    }),
    isIOS && compareKwaiAppVersion("11.1.40") < 0 && n({
        "advertise.startNeoAdVideo": "kwai.startNeoAdVideo"
    }),
    isIOS && compareKwaiAppVersion("10.7.20") < 0 && n({
        "merchant.getSidToken": "kwai.getSidToken"
    }),
    isAndroid && compareKwaiAppVersion("10.6.50") < 0 && n({
        "ui.setStatusBarStyle": "kwai.setStatusBarStyle"
    }),
    (compareKwaiAppVersion("10.4.30") < 0 || !isKwaiApp) && n(bridgeToLegacyKwaiBridge),
    isIOS && compareKwaiAppVersion("10.4.10") < 0 && r({
        "system.startVibrate": {
            strength: "low",
            duration: 300
        }
    }),
    (compareKwaiAppVersion("10.3.20") < 0 || !isKwaiApp) && n({
        "webview.exitCurrentWebView": "kwai.".concat(isIOS ? "exitCurrentWebview": "exitWebView")
    }),
    compareKwaiAppVersion("9.6.20") < 0 && t.push(o = >{
        const {
            bridge: a
        } = o;
        return ["syncLocationWithPermissionCheck", "getLocationWithPermissionCheck", "requestLocationPermissionWithPermissionCheck"].some(i = >a.endsWith(i)) ? {...o,
            bridge: a.replace("WithPermissionCheck", "")
        }: o
    }),
    t.reduce((o, a) = >a(o), e)
},
getInvocationConfig = e = >{
    const[t, n = {},
    r] = e,
    [o, a] = typeof r == "function" ? [{},
    r] : [r != null ? r: {}];
    return {
        initialBridge: t,
        initialParams: n,
        bridge: t,
        params: n,
        options: o,
        callback: a
    }
},
getLegacyErrorMessage = e = >hasOwnProperty$1(e, "error_msg") && typeof e.error_msg == "string" ? e.error_msg: "",
isIntrinsicAPI = e = >e.bridge.startsWith("yoda."),
invokeAPI = e = >{
    const {
        bridge: t,
        params: n
    } = e,
    [, r] = t.split("."),
    o = apis[r];
    return o(n)
},
invokeBridge$1 = e = >{
    const t = getYoda(),
    {
        initialBridge: n,
        bridge: r,
        params: o,
        callback: a
    } = e,
    [i, s] = r.split(".");
    return useCallbackBridgeSet.has(n) ? (t.bridge(i, s, o, u = >{
        console$1.info("Received a response from '".concat(r, "'"), u),
        a == null || a(u)
    },
    multipleCallbacksBridgeSet.has(n)), Promise.resolve()) : new Promise((u, l) = >{
        t.bridge(i, s, o, f = >{
            var _;
            if (console$1.info("Received a response from '".concat(r, "'"), f), f.result === 1) {
                const {
                    result: y,
                    ...v
                } = f;
                u(v);
                return
            }
            const {
                message: p = getLegacyErrorMessage(f)
            } = f,
            d = new BridgeError(p, f.result, e, f); (_ = globalConfig.errorHandler) == null || _.call(globalConfig, d),
            l(d)
        })
    })
},
invoke = async(...e) = >{
    var t, n;
    try {
        const r = getInvocationConfig(e);
        if (!isYoda()) throw new BridgeError(["Cannot invoke bridge", "in non-Yoda environment."].join(" "), 125014, r, null);
        const o = transformConfig(r),
        {
            options: {
                timeout: a = (t = globalConfig.timeout) != null ? t: 0
            }
        } = o,
        i = isIntrinsicAPI(o) ? invokeAPI(o) : invokeBridge$1(o);
        return a > 0 && Number.isFinite(a) ? await Promise.race([i, delay(a).then(() = >Promise.reject(new BridgeError("Bridge invocation timed out.", 125010, o, null)))]) : await i
    } catch(r) {
        throw isBridgeError(r) && ((n = globalConfig.errorHandler) == null || n.call(globalConfig, r)),
        r
    }
},
legacyEventTypes = new Set(["native_visible", "native_background", "native_foreground", "native_will_leave", "native_leave", "native_reentry", "native_loadPage", "native_pageFinished", "native_userDidLogin", "native_userDidLogout", "native_networkChanged", "native_screenshot_event", "native_web_view_display_mode_changed", "native_share_dialog_event", "native_shake", "native_darkModeChange"]),
addListener$1 = async(e, t, n) = >{
    if (legacyEventTypes.has(e)) {
        await invoke("kwai.on", {
            type: e,
            handler: t
        });
        return
    }
    await invoke("event.addEventListener", {
        type: typeof(n == null ? void 0 : n.data) > "u" ? e: {
            type: e,
            options: n.data
        },
        listener: t
    })
},
removeListener$1 = async(e, t) = >{
    if (legacyEventTypes.has(e)) {
        await invoke("kwai.off", {
            type: e,
            handler: t
        });
        return
    }
    await invoke("event.removeEventListener", {
        type: e,
        listener: t
    })
},
eventMQ = {};
function addListener(e, t, n) {
    const r = eventMQ[e] || {
        callbackId: n,
        eventRecord: {}
    },
    o = getUUId();
    t.__yodaCallbackId__[e] = String(o),
    r.eventRecord[o] = t,
    eventMQ[e] = r
}
function createCb(e) {
    return function(t) {
        const n = eventMQ[e];
        Object.keys((n == null ? void 0 : n.eventRecord) || {}).forEach(r = >n.eventRecord[Number(r)](JSON.parse(JSON.stringify(t))))
    }
}
function getCallbackIdByType(e) {
    const t = eventMQ[e];
    return getEventIdByNumber(t.callbackId)
}
function removeListener(e, t) {
    const n = eventMQ[e],
    r = t.__yodaCallbackId__[e];
    delete n.eventRecord[Number(r)],
    delete t.__yodaCallbackId__[e],
    hasListener(e) || delete eventMQ[e]
}
function hasListener(e) {
    const t = eventMQ[e];
    return Object.keys((t == null ? void 0 : t.eventRecord) || {}).length > 0
}
var Direction; (function(e) {
    e.x = "x",
    e.y = "y",
    e.z = "z"
})(Direction || (Direction = {}));
const SHAKE_EVENT = "shaked",
SHAKE_START_EVENT = "shake-start",
SHAKE_END_EVENT = "shake-end",
JUDGE_STOP_TIME = 1e3,
DEFAULT_SETTING = {
    level: 2,
    times: 3,
    intervalTime: 1300,
    iOSIntervalTime: 500,
    androidIntervalTime: 1300,
    isEmitImmediately: !0
},
ANDROID_LEVEL_MAP = {
    1 : {
        basic: 13,
        total: 450
    },
    2 : {
        basic: 16,
        total: 700
    },
    3 : {
        basic: 20,
        total: 1100
    }
},
IOS_LEVEL_MAP = {
    1 : {
        basic: 9,
        total: 220
    },
    2 : {
        basic: 12,
        total: 400
    },
    3 : {
        basic: 14,
        total: 500
    }
};
class ShakeHandler {
    constructor(t) {
        this.shakeConfig = {},
        this.shakedArr = [],
        this.isChecking = !1,
        this.nowStatus = {
            x: 0,
            y: 0,
            z: 0
        },
        this.lastStatus = {
            x: 0,
            y: 0,
            z: 0
        },
        this.stopMark = null,
        this.checkIsShakeStoped = !1,
        this.notEmitButShaked = !0,
        this.isShakeStarted = !1,
        this.isAndroid = !1,
        this.isArrivedConfigStandard = !1,
        this.levelMap = ANDROID_LEVEL_MAP,
        this.dispatchEvent = null,
        this.setStillShaking = debounce$3(() = >this.notShaking(), JUDGE_STOP_TIME),
        this.dispatchEvent = t.dispatchEvent,
        this.isAndroid = t.isAndroid,
        this.levelMap = this.isAndroid ? ANDROID_LEVEL_MAP: IOS_LEVEL_MAP
    }
    setOptions(t) {
        t ? (this.shakeConfig = {...DEFAULT_SETTING,
            ...t
        },
        this.shakeConfig.times = this.isAndroid ? this.shakeConfig.times - 1 : (this.shakeConfig.times - 1) * 2, this.shakeConfig.intervalTime = this.isAndroid ? this.shakeConfig.androidIntervalTime: this.shakeConfig.iOSIntervalTime) : this.shakeConfig = {...DEFAULT_SETTING
        }
    }
    resetShakeStatus(t) {
        this.shakedArr = [],
        this.isChecking = !1,
        this.notEmitButShaked = !1,
        t && (this.isArrivedConfigStandard = !1, this.isShakeStarted = !1)
    }
    checkIsShake(t) {
        if (this.isChecking = !0, Object.keys(this.nowStatus).forEach(n = >this.nowStatus[n] = t[n] * 9.8), this.judgeArrivedTerminal()) {
            this.lastStatus = {
                x: 0,
                y: 0,
                z: 0
            },
            this.handleShakeHappend(),
            this.setStillShaking(),
            this.isChecking = !1;
            return
        }
        this.judgeLikelyShake() ? this.handleArrivedStandard() : this.isChecking = !1
    }
    judgeLikelyShake() {
        const {
            x: t,
            y: n,
            z: r
        } = this.nowStatus,
        {
            basic: o,
            total: a
        } = this.levelMap[this.shakeConfig.level];
        return t > o || n > o || r > o || t * t + n * n + r * r > a
    }
    judgeArrivedTerminal() {
        let t = 0,
        n = 0,
        r = Direction.x;
        return Object.keys(this.nowStatus).forEach(o = >{
            n = Math.abs(this.lastStatus[o] - this.nowStatus[o]),
            t < n && (r = o, t = n)
        }),
        this.lastStatus[r] * this.nowStatus[r] < 0
    }
    handleArrivedStandard() {
        this.lastStatus = {...this.nowStatus
        },
        this.checkIsShakeStoped = !1,
        this.setStillShaking()
    }
    async handleShakeHappend() {
        this.isShakeStarted || await this.dispatchEvent({
            type: SHAKE_START_EVENT,
            data: {}
        }),
        this.isShakeStarted = !0,
        this.updateShakedArr(new Date().getTime())
    }
    notShaking() {
        this.checkIsShakeStoped = !0,
        this.checkDoDelayEmit()
    }
    updateShakedArr(t) {
        const {
            intervalTime: n
        } = this.shakeConfig;
        this.shakedArr.length > 0 ? t - this.shakedArr[this.shakedArr.length - 1] <= n ? this.shakedArr.push(t) : (this.shakedArr = [], this.isChecking = !1) : this.shakedArr.push(t),
        this.shakedArr.length >= this.shakeConfig.times ? this.handleArrivedEmitStandard() : this.isChecking = !1
    }
    handleArrivedEmitStandard() {
        this.isArrivedConfigStandard = !0,
        this.resetShakeStatus(),
        this.shakeConfig.isEmitImmediately ? this.dispatchEvent({
            type: SHAKE_EVENT,
            data: {}
        }) : this.notEmitButShaked = !0
    }
    checkDoDelayEmit() {
        this.notEmitButShaked && this.checkIsShakeStoped && !this.shakeConfig.isEmitImmediately && this.dispatchEvent({
            type: SHAKE_EVENT,
            data: {}
        }),
        this.isShakeStarted && this.dispatchEvent({
            type: SHAKE_END_EVENT,
            data: {
                isArrivedConfigStandard: this.isArrivedConfigStandard
            }
        }),
        this.resetShakeStatus(!0)
    }
}
const interval = 60;
let shakeHandler = null,
checkIsShake = null;
const startMonitorShake = async() = >{
    const e = getYoda(),
    t = await e.bridge("system", "startAccelerometer", {
        interval
    });
    checkIsShake = shakeHandler.checkIsShake.bind(shakeHandler);
    const n = await e.bridge("event", "addEventListener", {
        type: "accelerometer-change",
        listener: checkIsShake
    });
    if (t.result === 1 && n.result !== 1 && stopMonitorShake(), t.result !== 1 || n.result !== 1) throw new Error("摇一摇初始化失败，请稍后重试。AccelerometerRes:".concat(JSON.stringify(t), ";eventRes:").concat(JSON.stringify(n)))
},
validateOption = e = >{
    if (!e) return;
    const {
        level: t,
        times: n,
        isEmitImmediately: r
    } = e;
    if (t !== void 0 && !ANDROID_LEVEL_MAP[t]) throw new Error("请传入正确的level，可选值为1、2、3");
    if (n !== void 0) {
        if (!Number.isInteger(n)) throw new Error("times应为整数");
        if (n < 1) throw new Error("times应大于1")
    }
    if (r !== void 0 && typeof r != "boolean") throw new Error("isEmitImmediately应为boolean类型")
},
initShakeHandler = async e = >{
    const t = getYoda();
    if (!await checkCanUse("system", "startAccelerometer")) throw new Error("当前APP暂不支持摇一摇");
    if (shakeHandler) throw new Error("当前存在尚未结束监听的摇一摇");
    const n = async r = >t.bridge("event", "dispatchEvent", r);
    shakeHandler = new ShakeHandler({
        dispatchEvent: n,
        isAndroid
    }),
    validateOption(e),
    shakeHandler.setOptions(e),
    shakeHandler.resetShakeStatus(),
    await startMonitorShake.bind(t)()
},
stopMonitorShake = async() = >{
    const e = getYoda();
    if (!await checkCanUse("system", "stopAccelerometer")) throw new Error("当前APP暂不支持摇一摇");
    shakeHandler = null;
    const t = await e.bridge("event", "removeEventListener", {
        type: "accelerometer-change",
        listener: checkIsShake
    }),
    n = await e.bridge("system", "stopAccelerometer", {});
    if (t.result !== 1 || n.result !== 1) throw new Error("摇一摇停止监听失败。stopRes:".concat(JSON.stringify(n), ";eventRes:").concat(JSON.stringify(t)))
},
yodaCustomEvent = {
    shaked: SHAKE_EVENT
},
eventToInitMap = { [yodaCustomEvent.shaked] : initShakeHandler
},
handleEventUnregisterMap = { [yodaCustomEvent.shaked] : stopMonitorShake
},
addEventListener = (e, t) = >{
    var l;
    const {
        type: n,
        listener: r
    } = e,
    o = typeof n == "string" ? n: n.type,
    a = typeof n == "string" ? {}: n.options;
    if ((l = eventToInitMap[o]) == null || l.call(eventToInitMap, a), !r.__yodaCallbackId__ && (r.__yodaCallbackId__ = {}), r.__yodaCallbackId__[o]) throw new Error("addEventListener ".concat(o, " 的 listener 已经被绑定过了"));
    const i = hasListener(o);
    let s = null,
    u = Promise.resolve();
    if (i) isFunction$1(t) && t({
        result: 1
    });
    else {
        const f = deferredInvoke.pushMQ(!0, createCb(o), !0);
        s = parseInt(getEventIdOnlyNumber(f.traceId)),
        u = invoke$1({
            namespace: "event",
            name: "addEventListener",
            params: {
                type: o,
                listener: String(f.traceId)
            },
            callback: t
        })
    }
    return addListener(o, r, s),
    u
},
removeEventListener = (e, t) = >{
    var a;
    const {
        type: n,
        listener: r
    } = e; (a = handleEventUnregisterMap[n]) == null || a.call(handleEventUnregisterMap);
    let o = Promise.resolve();
    if (r.__yodaCallbackId__) {
        const i = getCallbackIdByType(n);
        removeListener(n, r),
        hasListener(n) || (o = invoke$1({
            namespace: "event",
            name: "removeEventListener",
            params: {
                type: n,
                listener: i
            },
            callback: t
        }), deferredInvoke.removeMQ(i))
    }
    return o
},
yoda = {
    bridge: (e, t, n, r, o = !1) = >{
        const a = {
            namespace: e,
            name: t,
            params: n,
            multiCallback: o,
            callback: r
        };
        if (e === "event") {
            if (t === "addEventListener") return addEventListener(n, r);
            if (t === "removeEventListener") return removeEventListener(n, r)
        }
        return compareKwaiAppVersion("9.9.20") === 0 && isAndroid ? invokeAndroid9920(a) : invoke$1(a)
    }
};
setYoda(yoda);
setContainer({
    invoke,
    addListener: addListener$1,
    removeListener: removeListener$1
});
const yoda$1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    addListener: addListener$1,
    invoke,
    isBridgeError,
    removeListener: removeListener$1,
    setGlobalConfig,
    version
},
Symbol.toStringTag, {
    value: "Module"
})),
isProduction = !0; ({
    BASE_URL: "https://ali.static.yximgs.com/udata/pkg/nebula/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    LEGACY: !1
}).VITE_APP_ENV; ({
    BASE_URL: "https://ali.static.yximgs.com/udata/pkg/nebula/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    LEGACY: !1
}).VITE_APP_ENV;
const isInBrowser = typeof window < "u";
setGlobalConfig({
    mode: "production"
});
const BridgeUnknownError = 125e3,
useYoda = (...e) = >(isInBrowser && !isProduction && console.log("%c useYoda args: %c".concat(JSON.stringify(e, null, 4)), "color: #5fba7d", "color: #0095ff;font-weight: bold"), invoke(...e));
async
function useLegacyYoda(...e) {
    var t;
    try {
        return {
            result: 1,
            ...await useYoda(...e)
        }
    } catch(n) {
        return isBridgeError(n) ? {
            result: n.code,
            ...n.toJSON()
        }: {
            result: BridgeUnknownError,
            message: (t = n.message) != null ? t: "未知错误"
        }
    }
}
function useYodaEvent(e, t) {
    let n = t;
    e === "native_reentry" && window.location.search.includes("earning_webview_cache=true") && (n = async r = >{
        try {
            const {
                visible: o
            } = await useYoda("growth.getCacheCenterTaskVisible");
            if (!o) return
        } catch(o) {}
        t(r)
    }),
    onMounted(() = >{
        addListener$1(e, n)
    }),
    onBeforeUnmount(() = >{
        removeListener$1(e, n)
    })
}
function useLegacyYodaEvent(e, t) {
    onMounted(() = >{
        useYoda("kwai.on", {
            type: e,
            handler: t
        })
    }),
    onBeforeUnmount(() = >{
        useYoda("kwai.off", {
            type: e,
            handler: t
        })
    })
}
function addYodaListener(e, t) {
    addListener$1(e, t)
}
async
function yodaCanIUse$2(e) {
    const t = e.split(".");
    if (t.length < 2) return ! 1;
    try {
        return (await useYoda("tool.canIUse", {
            namespace: t[0],
            name: t[1]
        })).canUse
    } catch(n) {
        return ! 1
    }
}
function showYodaToast(e, t = "normal") {
    useLegacyYoda("ui.showToast", {
        type: t,
        text: e
    })
}
function openWebview$1(e, t = "back") {
    const n = /^http(s)?:\/\//g.test(e) ? e: window.location.origin + e;
    useLegacyYoda("tool.loadUrlOnNewPage", {
        url: n,
        type: t
    })
}
async
function pageBack(e) {
    typeof e == "function" && await e(),
    await useYoda("webview.popBack")
}
function setStatusBarStyle(e = 1) {
    useLegacyYoda("ui.setStatusBarStyle", {
        style: e
    })
}
function hasInstalledApp$1(e) {
    return useYoda("webview.hasInstalledApp", {
        identifier: e
    }).then(() = >!0, () = >!1)
}
const {
    openLink: openLinkUrl$1
} = useOpenLink({
    openYodaWebview: openWebview$1
});
function eventName(e) {
    return e[2].toLowerCase() + e.slice(3)
}
function handlerName(e) {
    return "on".concat(e[0].toUpperCase() + e.slice(1))
}
const showComponent = (e, t, n) = >{
    {
        const r = n && Object.fromEntries(Object.entries(n).map(([s, u]) = >[eventName(s), u])),
        o = createApp({
            render() {
                return h(e, {
                    props: t,
                    on: r
                })
            }
        }),
        a = document.createElement("div");
        document.body.appendChild(a);
        const i = o.mount(a);
        return {
            app: o,
            destroy: () = >{
                setTimeout(() = >{
                    o.unmount(),
                    document.body.removeChild(i.$el)
                },
                1e3)
            }
        }
    }
},
CONFIRM_RESULTS = ["confirm", "close", "cancel"],
customConfirm = (e, ...t) = >new Promise(n = >{
    var a;
    let r;
    const o = {...t[1]
    };
    for (const i of CONFIRM_RESULTS) {
        const s = handlerName(i),
        u = (a = o[s]) != null ? a: () = >{};
        o[s] = () = >{
            u(),
            r == null || r(),
            n(i)
        }
    }
    r = showComponent(e, t[0], o).destroy
});
function tryOnScopeDispose(e) {
    return getCurrentScope() ? (onScopeDispose(e), !0) : !1
}
function createEventHook() {
    const e = new Set,
    t = o = >{
        e.delete(o)
    };
    return {
        on: o = >{
            e.add(o);
            const a = () = >t(o);
            return tryOnScopeDispose(a),
            {
                off: a
            }
        },
        off: t,
        trigger: o = >Promise.all(Array.from(e).map(a = >o ? a(o) : a()))
    }
}
function createGlobalState(e) {
    let t = !1,
    n;
    const r = effectScope(!0);
    return (...o) = >(t || (n = r.run(() = >e(...o)), t = !0), n)
}
const localProvidedStateMap = new WeakMap,
provideLocal = (e, t) = >{
    var n;
    const r = (n = getCurrentInstance()) == null ? void 0 : n.proxy;
    if (r == null) throw new Error("provideLocal must be called in setup");
    localProvidedStateMap.has(r) || localProvidedStateMap.set(r, Object.create(null));
    const o = localProvidedStateMap.get(r);
    o[e] = t,
    provide(e, t)
},
injectLocal = (...e) = >{
    var t;
    const n = e[0],
    r = (t = getCurrentInstance()) == null ? void 0 : t.proxy;
    if (r == null) throw new Error("injectLocal must be called in setup");
    return localProvidedStateMap.has(r) && n in localProvidedStateMap.get(r) ? localProvidedStateMap.get(r)[n] : inject(...e)
};
function createInjectionState(e, t) {
    const n = (t == null ? void 0 : t.injectionKey) || Symbol("InjectionState");
    return [(...a) = >{
        const i = e(...a);
        return provideLocal(n, i),
        i
    },
    () = >injectLocal(n)]
}
function toValue(e) {
    return typeof e == "function" ? e() : unref(e)
}
const isClient = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const notNullish = e = >e != null,
noop$1 = () = >{};
function createFilterWrapper(e, t) {
    function n(...r) {
        return new Promise((o, a) = >{
            Promise.resolve(e(() = >t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(o).
            catch(a)
        })
    }
    return n
}
const bypassFilter = e = >e();
function debounceFilter(e, t = {}) {
    let n,
    r,
    o = noop$1;
    const a = s = >{
        clearTimeout(s),
        o(),
        o = noop$1
    };
    return s = >{
        const u = toValue(e),
        l = toValue(t.maxWait);
        return n && a(n),
        u <= 0 || l !== void 0 && l <= 0 ? (r && (a(r), r = null), Promise.resolve(s())) : new Promise((f, p) = >{
            o = t.rejectOnCancel ? p: f,
            l && !r && (r = setTimeout(() = >{
                n && a(n),
                r = null,
                f(s())
            },
            l)),
            n = setTimeout(() = >{
                r && a(r),
                r = null,
                f(s())
            },
            u)
        })
    }
}
function throttleFilter(e, t = !0, n = !0, r = !1) {
    let o = 0,
    a,
    i = !0,
    s = noop$1,
    u;
    const l = () = >{
        a && (clearTimeout(a), a = void 0, s(), s = noop$1)
    };
    return p = >{
        const d = toValue(e),
        _ = Date.now() - o,
        y = () = >u = p();
        return l(),
        d <= 0 ? (o = Date.now(), y()) : (_ > d && (n || !i) ? (o = Date.now(), y()) : t && (u = new Promise((v, m) = >{
            s = r ? m: v,
            a = setTimeout(() = >{
                o = Date.now(),
                i = !0,
                v(y()),
                l()
            },
            Math.max(0, d - _))
        })), !n && !a && (a = setTimeout(() = >i = !0, d)), i = !1, u)
    }
}
function pausableFilter(e = bypassFilter) {
    const t = ref$1(!0);
    function n() {
        t.value = !1
    }
    function r() {
        t.value = !0
    }
    const o = (...a) = >{
        t.value && e(...a)
    };
    return {
        isActive: readonly(t),
        pause: n,
        resume: r,
        eventFilter: o
    }
}
function promiseTimeout(e, t = !1, n = "Timeout") {
    return new Promise((r, o) = >{
        setTimeout(t ? () = >o(n) : r, e)
    })
}
function identity$1(e) {
    return e
}
function useDebounceFn(e, t = 200, n = {}) {
    return createFilterWrapper(debounceFilter(t, n), e)
}
function useThrottleFn(e, t = 200, n = !1, r = !0, o = !1) {
    return createFilterWrapper(throttleFilter(t, n, r, o), e)
}
function watchWithFilter(e, t, n = {}) {
    const {
        eventFilter: r = bypassFilter,
        ...o
    } = n;
    return watch(e, createFilterWrapper(r, t), o)
}
function watchPausable(e, t, n = {}) {
    const {
        eventFilter: r,
        ...o
    } = n,
    {
        eventFilter: a,
        pause: i,
        resume: s,
        isActive: u
    } = pausableFilter(r);
    return {
        stop: watchWithFilter(e, t, {...o,
            eventFilter: a
        }),
        pause: i,
        resume: s,
        isActive: u
    }
}
function createUntil(e, t = !1) {
    function n(p, {
        flush: d = "sync",
        deep: _ = !1,
        timeout: y,
        throwOnTimeout: v
    } = {}) {
        let m = null;
        const C = [new Promise(I = >{
            m = watch(e, S = >{
                p(S) !== t && (m == null || m(), I(S))
            },
            {
                flush: d,
                deep: _,
                immediate: !0
            })
        })];
        return y != null && C.push(promiseTimeout(y, v).then(() = >toValue(e)).
        finally(() = >m == null ? void 0 : m())),
        Promise.race(C)
    }
    function r(p, d) {
        if (!isRef(p)) return n(S = >S === p, d);
        const {
            flush: _ = "sync",
            deep: y = !1,
            timeout: v,
            throwOnTimeout: m
        } = d != null ? d: {};
        let g = null;
        const I = [new Promise(S = >{
            g = watch([e, p], ([w, b]) = >{
                t !== (w === b) && (g == null || g(), S(w))
            },
            {
                flush: _,
                deep: y,
                immediate: !0
            })
        })];
        return v != null && I.push(promiseTimeout(v, m).then(() = >toValue(e)).
        finally(() = >(g == null || g(), toValue(e)))),
        Promise.race(I)
    }
    function o(p) {
        return n(d = >!!d, p)
    }
    function a(p) {
        return r(null, p)
    }
    function i(p) {
        return r(void 0, p)
    }
    function s(p) {
        return n(Number.isNaN, p)
    }
    function u(p, d) {
        return n(_ = >{
            const y = Array.from(_);
            return y.includes(p) || y.includes(toValue(p))
        },
        d)
    }
    function l(p) {
        return f(1, p)
    }
    function f(p = 1, d) {
        let _ = -1;
        return n(() = >(_ += 1, _ >= p), d)
    }
    return Array.isArray(toValue(e)) ? {
        toMatch: n,
        toContains: u,
        changed: l,
        changedTimes: f,
        get not() {
            return createUntil(e, !t)
        }
    }: {
        toMatch: n,
        toBe: r,
        toBeTruthy: o,
        toBeNull: a,
        toBeNaN: s,
        toBeUndefined: i,
        changed: l,
        changedTimes: f,
        get not() {
            return createUntil(e, !t)
        }
    }
}
function until(e) {
    return createUntil(e)
}
const REGEX_FORMAT = /[YMDHhms]o|\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
function defaultMeridiem(e, t, n, r) {
    let o = e < 12 ? "AM": "PM";
    return r && (o = o.split("").reduce((a, i) = >a += "".concat(i, "."), "")),
    n ? o.toLowerCase() : o
}
function formatOrdinal(e) {
    const t = ["th", "st", "nd", "rd"],
    n = e % 100;
    return e + (t[(n - 20) % 10] || t[n] || t[0])
}
function formatDate(e, t, n = {}) {
    var r;
    const o = e.getFullYear(),
    a = e.getMonth(),
    i = e.getDate(),
    s = e.getHours(),
    u = e.getMinutes(),
    l = e.getSeconds(),
    f = e.getMilliseconds(),
    p = e.getDay(),
    d = (r = n.customMeridiem) != null ? r: defaultMeridiem,
    _ = {
        Yo: () = >formatOrdinal(o),
        YY: () = >String(o).slice( - 2),
        YYYY: () = >o,
        M: () = >a + 1,
        Mo: () = >formatOrdinal(a + 1),
        MM: () = >"".concat(a + 1).padStart(2, "0"),
        MMM: () = >e.toLocaleDateString(n.locales, {
            month: "short"
        }),
        MMMM: () = >e.toLocaleDateString(n.locales, {
            month: "long"
        }),
        D: () = >String(i),
        Do: () = >formatOrdinal(i),
        DD: () = >"".concat(i).padStart(2, "0"),
        H: () = >String(s),
        Ho: () = >formatOrdinal(s),
        HH: () = >"".concat(s).padStart(2, "0"),
        h: () = >"".concat(s % 12 || 12).padStart(1, "0"),
        ho: () = >formatOrdinal(s % 12 || 12),
        hh: () = >"".concat(s % 12 || 12).padStart(2, "0"),
        m: () = >String(u),
        mo: () = >formatOrdinal(u),
        mm: () = >"".concat(u).padStart(2, "0"),
        s: () = >String(l),
        so: () = >formatOrdinal(l),
        ss: () = >"".concat(l).padStart(2, "0"),
        SSS: () = >"".concat(f).padStart(3, "0"),
        d: () = >p,
        dd: () = >e.toLocaleDateString(n.locales, {
            weekday: "narrow"
        }),
        ddd: () = >e.toLocaleDateString(n.locales, {
            weekday: "short"
        }),
        dddd: () = >e.toLocaleDateString(n.locales, {
            weekday: "long"
        }),
        A: () = >d(s, u),
        AA: () = >d(s, u, !1, !0),
        a: () = >d(s, u, !0),
        aa: () = >d(s, u, !0, !0)
    };
    return t.replace(REGEX_FORMAT, (y, v) = >{
        var m, g;
        return (g = v != null ? v: (m = _[y]) == null ? void 0 : m.call(_)) != null ? g: y
    })
}
function useIntervalFn(e, t = 1e3, n = {}) {
    const {
        immediate: r = !0,
        immediateCallback: o = !1
    } = n;
    let a = null;
    const i = ref$1(!1);
    function s() {
        a && (clearInterval(a), a = null)
    }
    function u() {
        i.value = !1,
        s()
    }
    function l() {
        const f = toValue(t);
        f <= 0 || (i.value = !0, o && e(), s(), a = setInterval(e, f))
    }
    if (r && isClient && l(), isRef(t) || typeof t == "function") {
        const f = watch(t, () = >{
            i.value && isClient && l()
        });
        tryOnScopeDispose(f)
    }
    return tryOnScopeDispose(u),
    {
        isActive: i,
        pause: u,
        resume: l
    }
}
function useInterval(e = 1e3, t = {}) {
    const {
        controls: n = !1,
        immediate: r = !0,
        callback: o
    } = t,
    a = ref$1(0),
    i = () = >a.value += 1,
    s = () = >{
        a.value = 0
    },
    u = useIntervalFn(o ? () = >{
        i(),
        o(a.value)
    }: i, e, {
        immediate: r
    });
    return n ? {
        counter: a,
        reset: s,
        ...u
    }: a
}
function useTimeoutFn(e, t, n = {}) {
    const {
        immediate: r = !0
    } = n,
    o = ref$1(!1);
    let a = null;
    function i() {
        a && (clearTimeout(a), a = null)
    }
    function s() {
        o.value = !1,
        i()
    }
    function u(...l) {
        i(),
        o.value = !0,
        a = setTimeout(() = >{
            o.value = !1,
            a = null,
            e(...l)
        },
        toValue(t))
    }
    return r && (o.value = !0, isClient && u()),
    tryOnScopeDispose(s),
    {
        isPending: readonly(o),
        start: u,
        stop: s
    }
}
function watchOnce(e, t, n) {
    const r = watch(e, (...o) = >(nextTick(() = >r()), t(...o)), n);
    return r
}
function whenever(e, t, n) {
    return watch(e, (r, o, a) = >{
        r && t(r, o, a)
    },
    n)
}
const[useProvideSendLog, useSendLog] = createInjectionState((e, t, n) = >({
    sendShow: e,
    sendClick: t,
    sendClickImmediately: n
}));
var extendStatics = function(e, t) {
    return extendStatics = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(n, r) {
        n.__proto__ = r
    } ||
    function(n, r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
    },
    extendStatics(e, t)
};
function __extends(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    extendStatics(e, t);
    function n() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}
function __awaiter(e, t, n, r) {
    function o(a) {
        return a instanceof n ? a: new n(function(i) {
            i(a)
        })
    }
    return new(n || (n = Promise))(function(a, i) {
        function s(f) {
            try {
                l(r.next(f))
            } catch(p) {
                i(p)
            }
        }
        function u(f) {
            try {
                l(r.
                throw (f))
            } catch(p) {
                i(p)
            }
        }
        function l(f) {
            f.done ? a(f.value) : o(f.value).then(s, u)
        }
        l((r = r.apply(e, t || [])).next())
    })
}
function __generator(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (a[0] & 1) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    },
    r,
    o,
    a,
    i;
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    },
    typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }),
    i;
    function s(l) {
        return function(f) {
            return u([l, f])
        }
    }
    function u(l) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; i && (i = 0, l[0] && (n = 0)), n;) try {
            if (r = 1, o && (a = l[0] & 2 ? o.
            return: l[0] ? o.
            throw || ((a = o.
            return) && a.call(o), 0) : o.next) && !(a = a.call(o, l[1])).done) return a;
            switch (o = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
            case 0:
            case 1:
                a = l;
                break;
            case 4:
                return n.label++,
                {
                    value: l[1],
                    done: !1
                };
            case 5:
                n.label++,
                o = l[1],
                l = [0];
                continue;
            case 7:
                l = n.ops.pop(),
                n.trys.pop();
                continue;
            default:
                if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                    n = 0;
                    continue
                }
                if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
                    n.label = l[1];
                    break
                }
                if (l[0] === 6 && n.label < a[1]) {
                    n.label = a[1],
                    a = l;
                    break
                }
                if (a && n.label < a[2]) {
                    n.label = a[2],
                    n.ops.push(l);
                    break
                }
                a[2] && n.ops.pop(),
                n.trys.pop();
                continue
            }
            l = t.call(e, n)
        } catch(f) {
            l = [6, f],
            o = 0
        } finally {
            r = a = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}
function __values(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && r >= e.length && (e = void 0),
            {
                value: e && e[r++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable.": "Symbol.iterator is not defined.")
}
function __read(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r = n.call(e),
    o,
    a = [],
    i;
    try {
        for (; (t === void 0 || t-->0) && !(o = r.next()).done;) a.push(o.value)
    } catch(s) {
        i = {
            error: s
        }
    } finally {
        try {
            o && !o.done && (n = r.
            return) && n.call(r)
        } finally {
            if (i) throw i.error
        }
    }
    return a
}
function __spreadArray(e, t, n) {
    if (n || arguments.length === 2) for (var r = 0,
    o = t.length,
    a; r < o; r++)(a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
}
function __await(e) {
    return this instanceof __await ? (this.v = e, this) : new __await(e)
}
function __asyncGenerator(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []),
    o,
    a = [];
    return o = {},
    i("next"),
    i("throw"),
    i("return"),
    o[Symbol.asyncIterator] = function() {
        return this
    },
    o;
    function i(d) {
        r[d] && (o[d] = function(_) {
            return new Promise(function(y, v) {
                a.push([d, _, y, v]) > 1 || s(d, _)
            })
        })
    }
    function s(d, _) {
        try {
            u(r[d](_))
        } catch(y) {
            p(a[0][3], y)
        }
    }
    function u(d) {
        d.value instanceof __await ? Promise.resolve(d.value.v).then(l, f) : p(a[0][2], d)
    }
    function l(d) {
        s("next", d)
    }
    function f(d) {
        s("throw", d)
    }
    function p(d, _) {
        d(_),
        a.shift(),
        a.length && s(a[0][0], a[0][1])
    }
}
function __asyncValues(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator],
    n;
    return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), n = {},
    r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
        return this
    },
    n);
    function r(a) {
        n[a] = e[a] &&
        function(i) {
            return new Promise(function(s, u) {
                i = e[a](i),
                o(s, u, i.done, i.value)
            })
        }
    }
    function o(a, i, s, u) {
        Promise.resolve(u).then(function(l) {
            a({
                value: l,
                done: s
            })
        },
        i)
    }
}
typeof SuppressedError == "function" && SuppressedError;
function isFunction(e) {
    return typeof e == "function"
}
function createErrorClass(e) {
    var t = function(r) {
        Error.call(r),
        r.stack = new Error().stack
    },
    n = e(t);
    return n.prototype = Object.create(Error.prototype),
    n.prototype.constructor = n,
    n
}
var UnsubscriptionError = createErrorClass(function(e) {
    return function(n) {
        e(this),
        this.message = n ? n.length + " errors occurred during unsubscription:\n" + n.map(function(r, o) {
            return o + 1 + ") " + r.toString()
        }).join("\n  ") : "",
        this.name = "UnsubscriptionError",
        this.errors = n
    }
});
function arrRemove(e, t) {
    if (e) {
        var n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var Subscription = function() {
    function e(t) {
        this.initialTeardown = t,
        this.closed = !1,
        this._parentage = null,
        this._finalizers = null
    }
    return e.prototype.unsubscribe = function() {
        var t, n, r, o, a;
        if (!this.closed) {
            this.closed = !0;
            var i = this._parentage;
            if (i) if (this._parentage = null, Array.isArray(i)) try {
                for (var s = __values(i), u = s.next(); ! u.done; u = s.next()) {
                    var l = u.value;
                    l.remove(this)
                }
            } catch(v) {
                t = {
                    error: v
                }
            } finally {
                try {
                    u && !u.done && (n = s.
                    return) && n.call(s)
                } finally {
                    if (t) throw t.error
                }
            } else i.remove(this);
            var f = this.initialTeardown;
            if (isFunction(f)) try {
                f()
            } catch(v) {
                a = v instanceof UnsubscriptionError ? v.errors: [v]
            }
            var p = this._finalizers;
            if (p) {
                this._finalizers = null;
                try {
                    for (var d = __values(p), _ = d.next(); ! _.done; _ = d.next()) {
                        var y = _.value;
                        try {
                            execFinalizer(y)
                        } catch(v) {
                            a = a != null ? a: [],
                            v instanceof UnsubscriptionError ? a = __spreadArray(__spreadArray([], __read(a)), __read(v.errors)) : a.push(v)
                        }
                    }
                } catch(v) {
                    r = {
                        error: v
                    }
                } finally {
                    try {
                        _ && !_.done && (o = d.
                        return) && o.call(d)
                    } finally {
                        if (r) throw r.error
                    }
                }
            }
            if (a) throw new UnsubscriptionError(a)
        }
    },
    e.prototype.add = function(t) {
        var n;
        if (t && t !== this) if (this.closed) execFinalizer(t);
        else {
            if (t instanceof e) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this)
            } (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n: []).push(t)
        }
    },
    e.prototype._hasParent = function(t) {
        var n = this._parentage;
        return n === t || Array.isArray(n) && n.includes(t)
    },
    e.prototype._addParent = function(t) {
        var n = this._parentage;
        this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t
    },
    e.prototype._removeParent = function(t) {
        var n = this._parentage;
        n === t ? this._parentage = null: Array.isArray(n) && arrRemove(n, t)
    },
    e.prototype.remove = function(t) {
        var n = this._finalizers;
        n && arrRemove(n, t),
        t instanceof e && t._removeParent(this)
    },
    e.EMPTY = function() {
        var t = new e;
        return t.closed = !0,
        t
    } (),
    e
} (),
EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(e) {
    return e instanceof Subscription || e && "closed" in e && isFunction(e.remove) && isFunction(e.add) && isFunction(e.unsubscribe)
}
function execFinalizer(e) {
    isFunction(e) ? e() : e.unsubscribe()
}
var config$1 = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
},
timeoutProvider = {
    setTimeout: function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        return setTimeout.apply(void 0, __spreadArray([e, t], __read(n)))
    },
    clearTimeout: function(e) {
        var t = timeoutProvider.delegate;
        return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e)
    },
    delegate: void 0
};
function reportUnhandledError(e) {
    timeoutProvider.setTimeout(function() {
        throw e
    })
}
function noop() {}
function errorContext(e) {
    e()
}
var Subscriber = function(e) {
    __extends(t, e);
    function t(n) {
        var r = e.call(this) || this;
        return r.isStopped = !1,
        n ? (r.destination = n, isSubscription(n) && n.add(r)) : r.destination = EMPTY_OBSERVER,
        r
    }
    return t.create = function(n, r, o) {
        return new SafeSubscriber(n, r, o)
    },
    t.prototype.next = function(n) {
        this.isStopped || this._next(n)
    },
    t.prototype.error = function(n) {
        this.isStopped || (this.isStopped = !0, this._error(n))
    },
    t.prototype.complete = function() {
        this.isStopped || (this.isStopped = !0, this._complete())
    },
    t.prototype.unsubscribe = function() {
        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
    },
    t.prototype._next = function(n) {
        this.destination.next(n)
    },
    t.prototype._error = function(n) {
        try {
            this.destination.error(n)
        } finally {
            this.unsubscribe()
        }
    },
    t.prototype._complete = function() {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    },
    t
} (Subscription),
_bind = Function.prototype.bind;
function bind(e, t) {
    return _bind.call(e, t)
}
var ConsumerObserver = function() {
    function e(t) {
        this.partialObserver = t
    }
    return e.prototype.next = function(t) {
        var n = this.partialObserver;
        if (n.next) try {
            n.next(t)
        } catch(r) {
            handleUnhandledError(r)
        }
    },
    e.prototype.error = function(t) {
        var n = this.partialObserver;
        if (n.error) try {
            n.error(t)
        } catch(r) {
            handleUnhandledError(r)
        } else handleUnhandledError(t)
    },
    e.prototype.complete = function() {
        var t = this.partialObserver;
        if (t.complete) try {
            t.complete()
        } catch(n) {
            handleUnhandledError(n)
        }
    },
    e
} (),
SafeSubscriber = function(e) {
    __extends(t, e);
    function t(n, r, o) {
        var a = e.call(this) || this,
        i;
        if (isFunction(n) || !n) i = {
            next: n != null ? n: void 0,
            error: r != null ? r: void 0,
            complete: o != null ? o: void 0
        };
        else {
            var s;
            a && config$1.useDeprecatedNextContext ? (s = Object.create(n), s.unsubscribe = function() {
                return a.unsubscribe()
            },
            i = {
                next: n.next && bind(n.next, s),
                error: n.error && bind(n.error, s),
                complete: n.complete && bind(n.complete, s)
            }) : i = n
        }
        return a.destination = new ConsumerObserver(i),
        a
    }
    return t
} (Subscriber);
function handleUnhandledError(e) {
    reportUnhandledError(e)
}
function defaultErrorHandler(e) {
    throw e
}
var EMPTY_OBSERVER = {
    closed: !0,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
},
observable = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
} ();
function identity(e) {
    return e
}
function pipeFromArray(e) {
    return e.length === 0 ? identity: e.length === 1 ? e[0] : function(n) {
        return e.reduce(function(r, o) {
            return o(r)
        },
        n)
    }
}
var Observable = function() {
    function e(t) {
        t && (this._subscribe = t)
    }
    return e.prototype.lift = function(t) {
        var n = new e;
        return n.source = this,
        n.operator = t,
        n
    },
    e.prototype.subscribe = function(t, n, r) {
        var o = this,
        a = isSubscriber(t) ? t: new SafeSubscriber(t, n, r);
        return errorContext(function() {
            var i = o,
            s = i.operator,
            u = i.source;
            a.add(s ? s.call(a, u) : u ? o._subscribe(a) : o._trySubscribe(a))
        }),
        a
    },
    e.prototype._trySubscribe = function(t) {
        try {
            return this._subscribe(t)
        } catch(n) {
            t.error(n)
        }
    },
    e.prototype.forEach = function(t, n) {
        var r = this;
        return n = getPromiseCtor(n),
        new n(function(o, a) {
            var i = new SafeSubscriber({
                next: function(s) {
                    try {
                        t(s)
                    } catch(u) {
                        a(u),
                        i.unsubscribe()
                    }
                },
                error: a,
                complete: o
            });
            r.subscribe(i)
        })
    },
    e.prototype._subscribe = function(t) {
        var n;
        return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)
    },
    e.prototype[observable] = function() {
        return this
    },
    e.prototype.pipe = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return pipeFromArray(t)(this)
    },
    e.prototype.toPromise = function(t) {
        var n = this;
        return t = getPromiseCtor(t),
        new t(function(r, o) {
            var a;
            n.subscribe(function(i) {
                return a = i
            },
            function(i) {
                return o(i)
            },
            function() {
                return r(a)
            })
        })
    },
    e.create = function(t) {
        return new e(t)
    },
    e
} ();
function getPromiseCtor(e) {
    var t;
    return (t = e != null ? e: config$1.Promise) !== null && t !== void 0 ? t: Promise
}
function isObserver(e) {
    return e && isFunction(e.next) && isFunction(e.error) && isFunction(e.complete)
}
function isSubscriber(e) {
    return e && e instanceof Subscriber || isObserver(e) && isSubscription(e)
}
function hasLift(e) {
    return isFunction(e == null ? void 0 : e.lift)
}
function operate(e) {
    return function(t) {
        if (hasLift(t)) return t.lift(function(n) {
            try {
                return e(n, this)
            } catch(r) {
                this.error(r)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}
function createOperatorSubscriber(e, t, n, r, o) {
    return new OperatorSubscriber(e, t, n, r, o)
}
var OperatorSubscriber = function(e) {
    __extends(t, e);
    function t(n, r, o, a, i, s) {
        var u = e.call(this, n) || this;
        return u.onFinalize = i,
        u.shouldUnsubscribe = s,
        u._next = r ?
        function(l) {
            try {
                r(l)
            } catch(f) {
                n.error(f)
            }
        }: e.prototype._next,
        u._error = a ?
        function(l) {
            try {
                a(l)
            } catch(f) {
                n.error(f)
            } finally {
                this.unsubscribe()
            }
        }: e.prototype._error,
        u._complete = o ?
        function() {
            try {
                o()
            } catch(l) {
                n.error(l)
            } finally {
                this.unsubscribe()
            }
        }: e.prototype._complete,
        u
    }
    return t.prototype.unsubscribe = function() {
        var n;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var r = this.closed;
            e.prototype.unsubscribe.call(this),
            !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this))
        }
    },
    t
} (Subscriber),
ObjectUnsubscribedError = createErrorClass(function(e) {
    return function() {
        e(this),
        this.name = "ObjectUnsubscribedError",
        this.message = "object unsubscribed"
    }
}),
Subject = function(e) {
    __extends(t, e);
    function t() {
        var n = e.call(this) || this;
        return n.closed = !1,
        n.currentObservers = null,
        n.observers = [],
        n.isStopped = !1,
        n.hasError = !1,
        n.thrownError = null,
        n
    }
    return t.prototype.lift = function(n) {
        var r = new AnonymousSubject(this, this);
        return r.operator = n,
        r
    },
    t.prototype._throwIfClosed = function() {
        if (this.closed) throw new ObjectUnsubscribedError
    },
    t.prototype.next = function(n) {
        var r = this;
        errorContext(function() {
            var o, a;
            if (r._throwIfClosed(), !r.isStopped) {
                r.currentObservers || (r.currentObservers = Array.from(r.observers));
                try {
                    for (var i = __values(r.currentObservers), s = i.next(); ! s.done; s = i.next()) {
                        var u = s.value;
                        u.next(n)
                    }
                } catch(l) {
                    o = {
                        error: l
                    }
                } finally {
                    try {
                        s && !s.done && (a = i.
                        return) && a.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
            }
        })
    },
    t.prototype.error = function(n) {
        var r = this;
        errorContext(function() {
            if (r._throwIfClosed(), !r.isStopped) {
                r.hasError = r.isStopped = !0,
                r.thrownError = n;
                for (var o = r.observers; o.length;) o.shift().error(n)
            }
        })
    },
    t.prototype.complete = function() {
        var n = this;
        errorContext(function() {
            if (n._throwIfClosed(), !n.isStopped) {
                n.isStopped = !0;
                for (var r = n.observers; r.length;) r.shift().complete()
            }
        })
    },
    t.prototype.unsubscribe = function() {
        this.isStopped = this.closed = !0,
        this.observers = this.currentObservers = null
    },
    Object.defineProperty(t.prototype, "observed", {
        get: function() {
            var n;
            return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype._trySubscribe = function(n) {
        return this._throwIfClosed(),
        e.prototype._trySubscribe.call(this, n)
    },
    t.prototype._subscribe = function(n) {
        return this._throwIfClosed(),
        this._checkFinalizedStatuses(n),
        this._innerSubscribe(n)
    },
    t.prototype._innerSubscribe = function(n) {
        var r = this,
        o = this,
        a = o.hasError,
        i = o.isStopped,
        s = o.observers;
        return a || i ? EMPTY_SUBSCRIPTION: (this.currentObservers = null, s.push(n), new Subscription(function() {
            r.currentObservers = null,
            arrRemove(s, n)
        }))
    },
    t.prototype._checkFinalizedStatuses = function(n) {
        var r = this,
        o = r.hasError,
        a = r.thrownError,
        i = r.isStopped;
        o ? n.error(a) : i && n.complete()
    },
    t.prototype.asObservable = function() {
        var n = new Observable;
        return n.source = this,
        n
    },
    t.create = function(n, r) {
        return new AnonymousSubject(n, r)
    },
    t
} (Observable),
AnonymousSubject = function(e) {
    __extends(t, e);
    function t(n, r) {
        var o = e.call(this) || this;
        return o.destination = n,
        o.source = r,
        o
    }
    return t.prototype.next = function(n) {
        var r, o; (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, n)
    },
    t.prototype.error = function(n) {
        var r, o; (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, n)
    },
    t.prototype.complete = function() {
        var n, r; (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n)
    },
    t.prototype._subscribe = function(n) {
        var r, o;
        return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && o !== void 0 ? o: EMPTY_SUBSCRIPTION
    },
    t
} (Subject),
dateTimestampProvider = {
    now: function() {
        return (dateTimestampProvider.delegate || Date).now()
    },
    delegate: void 0
},
ReplaySubject = function(e) {
    __extends(t, e);
    function t(n, r, o) {
        n === void 0 && (n = 1 / 0),
        r === void 0 && (r = 1 / 0),
        o === void 0 && (o = dateTimestampProvider);
        var a = e.call(this) || this;
        return a._bufferSize = n,
        a._windowTime = r,
        a._timestampProvider = o,
        a._buffer = [],
        a._infiniteTimeWindow = !0,
        a._infiniteTimeWindow = r === 1 / 0,
        a._bufferSize = Math.max(1, n),
        a._windowTime = Math.max(1, r),
        a
    }
    return t.prototype.next = function(n) {
        var r = this,
        o = r.isStopped,
        a = r._buffer,
        i = r._infiniteTimeWindow,
        s = r._timestampProvider,
        u = r._windowTime;
        o || (a.push(n), !i && a.push(s.now() + u)),
        this._trimBuffer(),
        e.prototype.next.call(this, n)
    },
    t.prototype._subscribe = function(n) {
        this._throwIfClosed(),
        this._trimBuffer();
        for (var r = this._innerSubscribe(n), o = this, a = o._infiniteTimeWindow, i = o._buffer, s = i.slice(), u = 0; u < s.length && !n.closed; u += a ? 1 : 2) n.next(s[u]);
        return this._checkFinalizedStatuses(n),
        r
    },
    t.prototype._trimBuffer = function() {
        var n = this,
        r = n._bufferSize,
        o = n._timestampProvider,
        a = n._buffer,
        i = n._infiniteTimeWindow,
        s = (i ? 1 : 2) * r;
        if (r < 1 / 0 && s < a.length && a.splice(0, a.length - s), !i) {
            for (var u = o.now(), l = 0, f = 1; f < a.length && a[f] <= u; f += 2) l = f;
            l && a.splice(0, l + 1)
        }
    },
    t
} (Subject),
EMPTY = new Observable(function(e) {
    return e.complete()
});
function isScheduler(e) {
    return e && isFunction(e.schedule)
}
function last(e) {
    return e[e.length - 1]
}
function popScheduler(e) {
    return isScheduler(last(e)) ? e.pop() : void 0
}
function popNumber(e, t) {
    return typeof last(e) == "number" ? e.pop() : t
}
var isArrayLike = function(e) {
    return e && typeof e.length == "number" && typeof e != "function"
};
function isPromise(e) {
    return isFunction(e == null ? void 0 : e.then)
}
function isInteropObservable(e) {
    return isFunction(e[observable])
}
function isAsyncIterable(e) {
    return Symbol.asyncIterator && isFunction(e == null ? void 0 : e[Symbol.asyncIterator])
}
function createInvalidObservableTypeError(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object": "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
}
function getSymbolIterator() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator": Symbol.iterator
}
var iterator = getSymbolIterator();
function isIterable(e) {
    return isFunction(e == null ? void 0 : e[iterator])
}
function readableStreamLikeToAsyncGenerator(e) {
    return __asyncGenerator(this, arguments,
    function() {
        var n, r, o, a;
        return __generator(this,
        function(i) {
            switch (i.label) {
            case 0:
                n = e.getReader(),
                i.label = 1;
            case 1:
                i.trys.push([1, , 9, 10]),
                i.label = 2;
            case 2:
                return [4, __await(n.read())];
            case 3:
                return r = i.sent(),
                o = r.value,
                a = r.done,
                a ? [4, __await(void 0)] : [3, 5];
            case 4:
                return [2, i.sent()];
            case 5:
                return [4, __await(o)];
            case 6:
                return [4, i.sent()];
            case 7:
                return i.sent(),
                [3, 2];
            case 8:
                return [3, 10];
            case 9:
                return n.releaseLock(),
                [7];
            case 10:
                return [2]
            }
        })
    })
}
function isReadableStreamLike(e) {
    return isFunction(e == null ? void 0 : e.getReader)
}
function innerFrom(e) {
    if (e instanceof Observable) return e;
    if (e != null) {
        if (isInteropObservable(e)) return fromInteropObservable(e);
        if (isArrayLike(e)) return fromArrayLike(e);
        if (isPromise(e)) return fromPromise(e);
        if (isAsyncIterable(e)) return fromAsyncIterable(e);
        if (isIterable(e)) return fromIterable(e);
        if (isReadableStreamLike(e)) return fromReadableStreamLike(e)
    }
    throw createInvalidObservableTypeError(e)
}
function fromInteropObservable(e) {
    return new Observable(function(t) {
        var n = e[observable]();
        if (isFunction(n.subscribe)) return n.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    })
}
function fromArrayLike(e) {
    return new Observable(function(t) {
        for (var n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
        t.complete()
    })
}
function fromPromise(e) {
    return new Observable(function(t) {
        e.then(function(n) {
            t.closed || (t.next(n), t.complete())
        },
        function(n) {
            return t.error(n)
        }).then(null, reportUnhandledError)
    })
}
function fromIterable(e) {
    return new Observable(function(t) {
        var n, r;
        try {
            for (var o = __values(e), a = o.next(); ! a.done; a = o.next()) {
                var i = a.value;
                if (t.next(i), t.closed) return
            }
        } catch(s) {
            n = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (r = o.
                return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
        t.complete()
    })
}
function fromAsyncIterable(e) {
    return new Observable(function(t) {
        process(e, t).
        catch(function(n) {
            return t.error(n)
        })
    })
}
function fromReadableStreamLike(e) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(e))
}
function process(e, t) {
    var n, r, o, a;
    return __awaiter(this, void 0, void 0,
    function() {
        var i, s;
        return __generator(this,
        function(u) {
            switch (u.label) {
            case 0:
                u.trys.push([0, 5, 6, 11]),
                n = __asyncValues(e),
                u.label = 1;
            case 1:
                return [4, n.next()];
            case 2:
                if (r = u.sent(), !!r.done) return [3, 4];
                if (i = r.value, t.next(i), t.closed) return [2];
                u.label = 3;
            case 3:
                return [3, 1];
            case 4:
                return [3, 11];
            case 5:
                return s = u.sent(),
                o = {
                    error: s
                },
                [3, 11];
            case 6:
                return u.trys.push([6, , 9, 10]),
                r && !r.done && (a = n.
                return) ? [4, a.call(n)] : [3, 8];
            case 7:
                u.sent(),
                u.label = 8;
            case 8:
                return [3, 10];
            case 9:
                if (o) throw o.error;
                return [7];
            case 10:
                return [7];
            case 11:
                return t.complete(),
                [2]
            }
        })
    })
}
function executeSchedule(e, t, n, r, o) {
    r === void 0 && (r = 0),
    o === void 0 && (o = !1);
    var a = t.schedule(function() {
        n(),
        o ? e.add(this.schedule(null, r)) : this.unsubscribe()
    },
    r);
    if (e.add(a), !o) return a
}
function observeOn(e, t) {
    return t === void 0 && (t = 0),
    operate(function(n, r) {
        n.subscribe(createOperatorSubscriber(r,
        function(o) {
            return executeSchedule(r, e,
            function() {
                return r.next(o)
            },
            t)
        },
        function() {
            return executeSchedule(r, e,
            function() {
                return r.complete()
            },
            t)
        },
        function(o) {
            return executeSchedule(r, e,
            function() {
                return r.error(o)
            },
            t)
        }))
    })
}
function subscribeOn(e, t) {
    return t === void 0 && (t = 0),
    operate(function(n, r) {
        r.add(e.schedule(function() {
            return n.subscribe(r)
        },
        t))
    })
}
function scheduleObservable(e, t) {
    return innerFrom(e).pipe(subscribeOn(t), observeOn(t))
}
function schedulePromise(e, t) {
    return innerFrom(e).pipe(subscribeOn(t), observeOn(t))
}
function scheduleArray(e, t) {
    return new Observable(function(n) {
        var r = 0;
        return t.schedule(function() {
            r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule())
        })
    })
}
function scheduleIterable(e, t) {
    return new Observable(function(n) {
        var r;
        return executeSchedule(n, t,
        function() {
            r = e[iterator](),
            executeSchedule(n, t,
            function() {
                var o, a, i;
                try {
                    o = r.next(),
                    a = o.value,
                    i = o.done
                } catch(s) {
                    n.error(s);
                    return
                }
                i ? n.complete() : n.next(a)
            },
            0, !0)
        }),
        function() {
            return isFunction(r == null ? void 0 : r.
            return) && r.
            return ()
        }
    })
}
function scheduleAsyncIterable(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new Observable(function(n) {
        executeSchedule(n, t,
        function() {
            var r = e[Symbol.asyncIterator]();
            executeSchedule(n, t,
            function() {
                r.next().then(function(o) {
                    o.done ? n.complete() : n.next(o.value)
                })
            },
            0, !0)
        })
    })
}
function scheduleReadableStreamLike(e, t) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(e), t)
}
function scheduled(e, t) {
    if (e != null) {
        if (isInteropObservable(e)) return scheduleObservable(e, t);
        if (isArrayLike(e)) return scheduleArray(e, t);
        if (isPromise(e)) return schedulePromise(e, t);
        if (isAsyncIterable(e)) return scheduleAsyncIterable(e, t);
        if (isIterable(e)) return scheduleIterable(e, t);
        if (isReadableStreamLike(e)) return scheduleReadableStreamLike(e, t)
    }
    throw createInvalidObservableTypeError(e)
}
function from(e, t) {
    return t ? scheduled(e, t) : innerFrom(e)
}
function map(e, t) {
    return operate(function(n, r) {
        var o = 0;
        n.subscribe(createOperatorSubscriber(r,
        function(a) {
            r.next(e.call(t, a, o++))
        }))
    })
}
function mergeInternals(e, t, n, r, o, a, i, s) {
    var u = [],
    l = 0,
    f = 0,
    p = !1,
    d = function() {
        p && !u.length && !l && t.complete()
    },
    _ = function(v) {
        return l < r ? y(v) : u.push(v)
    },
    y = function(v) {
        a && t.next(v),
        l++;
        var m = !1;
        innerFrom(n(v, f++)).subscribe(createOperatorSubscriber(t,
        function(g) {
            o == null || o(g),
            a ? _(g) : t.next(g)
        },
        function() {
            m = !0
        },
        void 0,
        function() {
            if (m) try {
                l--;
                for (var g = function() {
                    var C = u.shift();
                    i ? executeSchedule(t, i,
                    function() {
                        return y(C)
                    }) : y(C)
                }; u.length && l < r;) g();
                d()
            } catch(C) {
                t.error(C)
            }
        }))
    };
    return e.subscribe(createOperatorSubscriber(t, _,
    function() {
        p = !0,
        d()
    })),
    function() {
        s == null || s()
    }
}
function mergeMap(e, t, n) {
    return n === void 0 && (n = 1 / 0),
    isFunction(t) ? mergeMap(function(r, o) {
        return map(function(a, i) {
            return t(r, a, o, i)
        })(innerFrom(e(r, o)))
    },
    n) : (typeof t == "number" && (n = t), operate(function(r, o) {
        return mergeInternals(r, o, e, n)
    }))
}
function mergeAll(e) {
    return e === void 0 && (e = 1 / 0),
    mergeMap(identity, e)
}
function merge() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = popScheduler(e),
    r = popNumber(e, 1 / 0),
    o = e;
    return o.length ? o.length === 1 ? innerFrom(o[0]) : mergeAll(r)(from(o, n)) : EMPTY
}
function switchMap(e, t) {
    return operate(function(n, r) {
        var o = null,
        a = 0,
        i = !1,
        s = function() {
            return i && !o && r.complete()
        };
        n.subscribe(createOperatorSubscriber(r,
        function(u) {
            o == null || o.unsubscribe();
            var l = 0,
            f = a++;
            innerFrom(e(u, f)).subscribe(o = createOperatorSubscriber(r,
            function(p) {
                return r.next(t ? t(u, p, f, l++) : p)
            },
            function() {
                o = null,
                s()
            }))
        },
        function() {
            i = !0,
            s()
        }))
    })
}
function switchAll() {
    return switchMap(identity)
}
const INJECT_KEY = "REBORN_STORE_KEY",
ROOT_STORE_MAP = new WeakMap;
let MODE = "SPA";
function setMode(e) {
    MODE = e
}
function getRootStore() {
    var n;
    const e = (n = getCurrentInstance()) == null ? void 0 : n.proxy,
    t = e && ROOT_STORE_MAP.get(e);
    return t != null ? t: inject(INJECT_KEY)
}
function storeFactory() {
    const e = new Map;
    function t(a) {
        var i, s;
        return (s = (i = e.get(a)) == null ? void 0 : i.instance) == null ? void 0 : s.model
    }
    function n(a) {
        if (e.has(a)) return e.get(a);
        const i = {
            constructor: a,
            instance: null,
            count: 0,
            queryList: [],
            scope: null
        };
        return e.set(a, i),
        i
    }
    function r(a) {
        e.has(a) && e.delete(a)
    }
    const o = ref$1(0);
    return {
        getModelInstance: t,
        addModel: n,
        removeModel: r,
        hydrationStatus: o
    }
}
function createStore() {
    const e = storeFactory(),
    t = {};
    function n(a) {
        if (a.type === "REST") {
            if (t.rest) {
                console.warn("You have already registered a restClient yet");
                return
            }
            t.rest = a;
            return
        } else {
            if (t.gql) {
                console.warn("You have already registered a gqlClient yet");
                return
            }
            t.gql = a
        }
    }
    function r(a, i = !1) {
        a.config && typeof a.config.globalProperties == "object" ? (a.config.globalProperties.rebornStore = e, a.config.globalProperties.rebornClient = t, a.provide(INJECT_KEY, {
            store: e,
            rebornClient: t
        })) : a.mixin({
            provide() {
                if (this === this.$root) return { [INJECT_KEY] : {
                        store: e,
                        rebornClient: t
                    }
                }
            },
            beforeCreate() {
                this === this.$root && ROOT_STORE_MAP.set(this, {
                    store: e,
                    rebornClient: t
                })
            }
        }),
        setMode(i ? "SSR": "SPA")
    }
    return {
        install: r,
        registerClient: n
    }
}
const ESCAPED_CHARS = {
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
};
function encode$1(e) {
    var n;
    let t = "";
    for (let r = 0; r < e.length; r++) {
        const o = String.fromCharCode(e.charCodeAt(r) + 1);
        t += (n = ESCAPED_CHARS[o]) != null ? n: o
    }
    return t
}
function hash(e) {
    if (e === null) return encode$1("null-null");
    if (Array.isArray(e)) return encode$1("array-".concat(e.map(hash).join("-")));
    if (typeof e == "function") throw new Error("Function hash is not support");
    return encode$1(typeof e == "object" ? "object-".concat(Object.keys(e).sort().map(t = >"".concat(t, "-").concat(hash(e[t]))).join("-")) : "".concat(typeof e, "-").concat(e))
}
function stringifyPrimitive(e) {
    switch (typeof e) {
    case "string":
        return e;
    case "boolean":
        return e ? "true": "false";
    case "number":
        return isFinite(e) ? e: "";
    default:
        return ""
    }
}
function encode$2(e) {
    return encodeURIComponent(stringifyPrimitive(e))
}
function shimStringify(e) {
    if (e === null && (e = void 0), typeof e != "object") throw new Error("Params stringify Error, only support object");
    return Object.keys(e).map(t = >{
        const n = encode$2(t) + "=";
        return Array.isArray(e[t]) ? e[t].map(r = >n + encode$2(r)).join("&") : n + encode$2(e[t])
    }).join("&")
}
function appendQueryStringToUrl(e, t) {
    return e = e.indexOf("?") !== -1 ? "".concat(e, "&").concat(t) : "".concat(e, "?").concat(t),
    e
}
function deepMerge(e, ...t) {
    for (const n of t) for (const r in n) {
        const o = e[r],
        a = n[r];
        if (a == null) continue;
        let i;
        if (Array.isArray(a) ? i = a.map(s = >Array.isArray(s) ? [...deepMerge([], s)] : typeof s == "object" && s !== null ? deepMerge({},
        s) : s) : typeof a == "object" && a !== null ? i = deepMerge({},
        a) : i = a, typeof o != typeof a || o === null) {
            e[r] = i;
            continue
        }
        if (Array.isArray(o)) {
            o.push(...i);
            continue
        }
        if (typeof i != "object") {
            e[r] = a;
            continue
        }
        e[r] = deepMerge(o, a)
    }
    return e
}
function fromWatch(e, t) {
    return new Observable(n = >{
        watch(e, (r, o) = >{ (!r && o === void 0 || hash(r) !== hash(o)) && n.next(r)
        },
        t)
    })
}
function isDef(e) {
    return e != null
}
function createCache() {
    let e = {};
    function t(s) {
        e = s || e
    }
    function n(s, u) {
        e[s] = u
    }
    function r(s) {
        return e[s]
    }
    function o(s, u) {
        e[s] = deepMerge(e[s], u)
    }
    function a(s) {
        e[s] = void 0
    }
    function i() {
        return JSON.stringify(e)
    }
    return {
        restore: t,
        put: n,
        get: r,
        update: o,
        remove: a,
        extract: i
    }
}
function createInterceptor(e) {
    const t = [];
    function n(r, o) {
        return t.push({
            onResolve: r,
            onReject: o
        }),
        {
            use: n
        }
    }
    return {
        list: t,
        use: n
    }
}
class TimeoutError extends Error {
    constructor(t) {
        super(t),
        this.message = t
    }
}
const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    timeout: 60 * 1e3,
    credentials: "include"
};
function mergeClientOptionsAndParams(e, t) {
    const {
        timeout: n,
        headers: r,
        method: o,
        credentials: a,
        baseUrl: i
    } = e,
    s = i ? new URL(t.url || "/", i).href: t.url || "",
    u = {
        timeout: t.timeout || n,
        headers: deepMerge({},
        r, t.headers),
        credentials: a,
        url: s || "",
        variables: t.variables
    };
    return "method" in t ? {...u,
        method: t.method || o,
        fetchPolicy: t.fetchPolicy
    }: "query" in t ? {...u,
        query: t.query,
        fetchPolicy: t.fetchPolicy
    }: "mutation" in t ? {...u,
        mutation: t.mutation
    }: u
}
function clientFactory(e, t, n) {
    const r = n ? deepMerge({},
    DEFAULT_OPTIONS, n) : deepMerge({},
    DEFAULT_OPTIONS),
    o = createInterceptor(),
    a = createInterceptor(),
    i = {
        request: {
            use: o.use
        },
        response: {
            use: a.use
        }
    };
    function s(d) {
        const _ = [...o.list],
        y = mergeClientOptionsAndParams(r, d);
        let v = Promise.resolve(y);
        for (; _.length;) {
            const g = _.shift();
            v = v.then(g == null ? void 0 : g.onResolve, g == null ? void 0 : g.onReject)
        }
        let m;
        return v.then(g = >{
            if (m = t(e, g), !r.fetch) {
                if (MODE === "SPA") if (typeof window < "u" && window.fetch) r.fetch = (b, A) = >window.fetch(b, A);
                else throw new Error('There is no useful "fetch" function');
                else if (MODE === "SSR") if (globalThis.fetch) r.fetch = (b, A) = >globalThis.fetch(b, A);
                else throw new Error('There is no useful "fetch" function')
            }
            const {
                url: C,
                requestInit: I
            } = m,
            S = r.fetch(C, I),
            w = new Promise(b = >{
                setTimeout(() = >{
                    b(MODE !== "SSR" && typeof DOMException < "u" ? new DOMException("The request has been timeout") : new TimeoutError("The request has been timeout"))
                },
                y.timeout)
            });
            return Promise.race([w, S])
        }).then(g = >{
            var b, A;
            g === null && (g = MODE !== "SSR" && typeof DOMException < "u" ? new DOMException("The request has been timeout") : new TimeoutError("The request has been timeout"));
            const C = [...a.list];
            if (! ("status" in g)) {
                let E = Promise.reject({
                    res: g,
                    request: m
                });
                for (; C.length;) {
                    const P = C.shift();
                    E = E.then(P == null ? void 0 : P.onResolve, P == null ? void 0 : P.onReject)
                }
                return E
            }
            const I = g.headers.get("Content-Type") || ((b = m.requestInit.headers) == null ? void 0 : b["Content-Type"]) || ((A = m.requestInit.headers) == null ? void 0 : A["content-type"]) || "application/json",
            S = {
                status: g.status,
                statusText: g.statusText,
                headers: g.headers,
                config: m,
                data: void 0
            };
            let w;
            for (I.indexOf("application/json") !== -1 ? w = g.ok ? g.json().then(E = >(S.data = E, S)) : Promise.reject({
                res: g,
                request: m
            }) : (S.data = g.body, w = g.ok ? Promise.resolve(S) : Promise.reject({
                res: g,
                request: m
            })); C.length;) {
                const E = C.shift();
                w = w.then(E == null ? void 0 : E.onResolve, E == null ? void 0 : E.onReject)
            }
            return w
        })
    }
    const u = (n == null ? void 0 : n.cache) || createCache();
    function l(d) {
        return u.get("".concat(hash(d.url), "-").concat(hash(d.variables || {})))
    }
    function f(d, _) {
        const y = "".concat(hash(d.url), "-").concat(hash(d.variables || {}));
        u.put(y, _)
    }
    function p(d, _ = "network-first", y) {
        const v = new ReplaySubject;
        if (y.value !== 2) {
            const g = l(d);
            if (g) return v.next(g),
            v.complete(),
            v
        }
        const m = l(d);
        switch (_) {
        case "cache-and-network":
            m && v.next(m),
            s(d).then(g = >{
                f(d, g),
                v.next(g),
                v.complete()
            }).
            catch(g = >{
                v.error(g),
                v.complete()
            });
            break;
        case "cache-first":
            m ? v.next(m) : s(d).then(g = >{
                f(d, g),
                v.next(g),
                v.complete()
            }).
            catch(g = >v.error(g));
            break;
        case "network-first":
            s(d).then(g = >{
                f(d, g),
                v.next(g),
                v.complete()
            }).
            catch(g = >{
                v.error(g),
                v.complete()
            });
            break;
        case "cache-only":
            m ? (v.next(m), v.complete()) : (v.error("No data in cache"), v.complete());
            break;
        case "network-only":
            s(d).then(g = >{
                v.next(g),
                v.complete()
            }).
            catch(g = >{
                v.complete(),
                v.error(g)
            });
        default:
            throw new Error("There is a wrong fetchPolicy: ".concat(_))
        }
        return v
    }
    return {
        interceptors:
        i,
        query: p,
        mutate: s,
        type: e
    }
}
function transformRequestBody(e, t) {
    if (t && t["content-type"] === "application/json") return JSON.stringify(e);
    if (t && t["content-type"] === "application/x-www-form-urlencoded") return shimStringify(e);
    if (t && t["content-type"] === "multipart/form-data") {
        const n = new FormData;
        for (const r in e) n.append(r, e[r]);
        return n
    }
    return typeof FormData == "function" && FormData && e instanceof FormData ? e: typeof URLSearchParams == "function" && e instanceof URLSearchParams && t ? (t["content-type"] = "application/x-www-form-urlencoded", e.toString()) : Object.prototype.toString.call(e) === "[object ArrayBuffer]" || Object.prototype.toString.call(e) === "[object File]" || Object.prototype.toString.call(e) === "[object Blob]" ? e: JSON.stringify(e)
}
function generateCommonRequestInfo(e) {
    return {
        method: e.method,
        credentials: e.credentials,
        headers: e.headers,
        cache: "no-store"
    }
}
function generateRestRequestInfo(e) {
    var i, s, u, l;
    let t = generateCommonRequestInfo(e);
    const n = t.headers || {};
    let {
        variables: r,
        url: o
    } = e; ((i = t.method) == null ? void 0 : i.toLowerCase()) === "get" && r && (n["content-type"] && n["content-type"] !== "application/x-www-form-urlencoded" && console.error("get 请求请指定 content-type 为 `application/x-www-form-urlencoded` 传参，当前为：", n["content-type"]), n["content-type"] = "application/x-www-form-urlencoded"),
    ((s = t.method) == null ? void 0 : s.toLowerCase()) === "post" && !n["content-type"] && (n["content-type"] = "application/json");
    let a = r ? transformRequestBody(r, n) : void 0;
    return (((u = t.method) == null ? void 0 : u.toLowerCase()) === "get" || ((l = t.method) == null ? void 0 : l.toLowerCase()) === "head") && (n["content-type"] === "application/x-www-form-urlencoded" && a && (o = appendQueryStringToUrl(o, a)), a = void 0),
    typeof FormData == "function" && a instanceof FormData ? delete n["content-type"] : n["content-type"] === "application/x-www-form-urlencoded" && (n["content-type"] = "application/x-www-form-urlencoded;charset=UTF-8"),
    a && (t.body = a),
    {
        url: o,
        requestInit: t
    }
}
function generateGQLRequestInfo(e) {
    let {
        url: t,
        timeout: n,
        ...r
    } = e;
    return {
        url: t || "",
        requestInit: r
    }
}
function generateRequestInfo(e, t) {
    return e === "GQL" ? generateGQLRequestInfo(t) : generateRestRequestInfo(t)
}
function createClient(e, t) {
    return clientFactory(e, generateRequestInfo, t)
}
var RequestReason; (function(e) {
    e[e.setVariables = 0] = "setVariables",
    e[e.fetchMore = 1] = "fetchMore",
    e[e.refetch = 2] = "refetch",
    e[e.poll = 3] = "poll"
})(RequestReason || (RequestReason = {}));
var StateStatus; (function(e) {
    e.Empty = "Empty",
    e.Loading = "Loading",
    e.Done = "Done",
    e.Error = "Error",
    e.Refresh = "Refresh",
    e.RefreshError = "RefreshError",
    e.FetchMore = "FetchMore",
    e.FetchMoreError = "FetchMoreError",
    e.Pool = "Pool",
    e.PoolError = "PoolError"
})(StateStatus || (StateStatus = {}));
function isLoadingState(e) {
    return e === StateStatus.Loading
}
function isErrorState(e) {
    return e === StateStatus.Error
}
function getStatus(e, t) {
    return e.loading ? isDef(e.data) ? t === RequestReason.fetchMore ? StateStatus.FetchMore: t === RequestReason.poll ? StateStatus.Pool: StateStatus.Refresh: StateStatus.Loading: isDef(e.error) ? isDef(e.data) ? t === RequestReason.fetchMore ? StateStatus.FetchMoreError: t === RequestReason.poll ? StateStatus.PoolError: StateStatus.RefreshError: StateStatus.Error: isDef(e.data) ? StateStatus.Done: StateStatus.Empty
}
function useStatus(e, t) {
    return computed(() = >getStatus(e, t.value))
}
function initDataType() {
    return reactive({
        data: void 0,
        loading: !1,
        error: void 0
    })
}
function generateQueryOptions(e, t, n) {
    const r = initDataType(),
    o = computed(() = >typeof e.skip == "function" ? e.skip.call(n, t) : !!e.skip),
    a = computed(() = >typeof e.pollInterval == "function" ? e.pollInterval.call(n, t) : e.pollInterval || 0),
    i = computed(() = >typeof e.variables == "function" ? e.variables.call(n, t) : e.variables),
    s = computed(() = >typeof e.url == "function" ? e.url.call(n, t, i.value) : e.url),
    u = fromWatch(() = >({
        variables: i.value,
        url: s.value,
        skip: o.value
    }), {
        immediate: !0
    }).pipe(map(p = >RequestReason.setVariables)),
    l = new Observable(p = >{
        let d;
        const _ = () = >{
            MODE !== "SSR" && (clearTimeout(d), a.value > 0 && (d = setTimeout(y, a.value)))
        },
        y = () = >{
            p.next(RequestReason.poll),
            _()
        };
        watch(() = >a.value, (v, m) = >{
            v !== m && _()
        },
        {
            immediate: !0
        })
    }),
    f = merge(u, l);
    return {
        info: r,
        skip: o,
        pollInterval: a,
        variables: i,
        url: s,
        fetchQuery$: f,
        prefetch: e.prefetch || !0
    }
}
function createGQLMutation(e, t, n, r) {
    if (!r) throw new Error("No GQL Client has been set");
    const o = initDataType();
    function a(i) {
        return e.variables && typeof e.variables == "function" ? e.variables.call(t, i, n) : i
    }
    return {
        info: o,
        mutate(i) {
            return o.loading = !0,
            o.error = void 0,
            r.mutate({
                mutation: "",
                variables: a(i)
            }).then(s = >{
                o.error = void 0,
                s && (o.data = s),
                o.loading = !1
            }).
            catch(s = >{
                o.error = s,
                o.loading = !1
            })
        }
    }
}
function createGQLQuery(e, t, n, r, o) {
    if (!o) throw new Error("No GQL Client has been set");
    const {
        info: a,
        skip: i,
        pollInterval: s,
        variables: u
    } = generateQueryOptions(e, n, t),
    l = ref$1(0);
    computed(() = >({...e,
        variables: u.value,
        skip: i.value,
        pollInterval: s.value
    })),
    computed(() = >[u.value, i.value, s.value]);
    function f() {}
    function p() {}
    function d(v) {}
    function _() {}
    function y() {}
    return {
        info: a,
        init: f,
        destroy: p,
        fetchMore: d,
        refetch: _,
        prefetch: _,
        onNext: y,
        requestReason: l
    }
}
function createRestMutation(e, t, n, r) {
    if (!r) throw new Error("No Rest Client has been set");
    const o = initDataType();
    function a(d) {
        return e.variables && typeof e.variables == "function" ? e.variables.call(t, d, n) : d
    }
    function i(d, _) {
        return e.url && typeof e.url == "function" ? e.url.call(t, n, d, _) : e.url
    }
    const s = new Subject,
    u = s.pipe(mergeAll());
    s.pipe(switchAll()).subscribe(d = >{
        o.loading = d.loading,
        o.loading || (o.error = d.error, d.data && (o.data = d.data))
    });
    function l() {
        s.complete()
    }
    let f = 0;
    function p(d, _) {
        const y = ++f,
        v = {
            url: i(a(d), d),
            headers: e.headers,
            method: e.method,
            variables: a(d),
            timeout: e.timeout
        },
        m = new Subject;
        return s.next(m),
        m.next({
            id: y,
            url: v.url,
            variables: v.variables,
            loading: !0,
            data: void 0,
            error: void 0,
            context: _
        }),
        r.mutate(v).then(g = >{
            m.next({
                id: y,
                url: v.url,
                variables: v.variables,
                loading: !1,
                data: g,
                error: void 0,
                context: _
            })
        }).
        catch(g = >{
            m.next({
                id: y,
                url: v.url,
                variables: v.variables,
                loading: !1,
                data: void 0,
                error: g,
                context: _
            })
        }).
        finally(() = >{
            m.complete()
        })
    }
    return {
        info: o,
        mutate: p,
        stream$: u,
        destroy: l
    }
}
function createRestQuery(e, t, n, r, o) {
    if (!o) throw new Error("No Rest Client has been set");
    const {
        info: a,
        skip: i,
        variables: s,
        fetchQuery$: u,
        url: l,
        prefetch: f
    } = generateQueryOptions(e, n, t),
    p = new Subject,
    d = p.pipe(mergeAll()),
    _ = ref$1(RequestReason.setVariables);
    p.pipe(switchAll()).subscribe(w = >{
        a.loading = w.loading,
        w.loading || (a.error = w.error, w.data && (a.data = w.data))
    });
    let y = 0;
    function v(w, b) {
        var V, Q;
        const A = {...a
        };
        _.value = w;
        const E = ++y,
        P = {
            url: l.value,
            variables: b
        },
        L = {
            headers: e.headers,
            method: e.method,
            fetchPolicy: e.fetchPolicy,
            timeout: e.timeout,
            ...P,
            ... (Q = (V = e.beforeQuery) == null ? void 0 : V.call(e, P)) != null ? Q: {}
        },
        D = new Subject;
        return p.next(D),
        new Promise(oe = >{
            D.next({
                id: E,
                url: L.url,
                variables: L.variables,
                requestReason: w,
                status: getStatus({...A,
                    loading: !0
                },
                w),
                data: void 0,
                loading: !0,
                error: void 0
            });
            const te = o.query(L, e.fetchPolicy, r);
            te.subscribe({
                next: ne = >{
                    const B = ne && e.updateQuery && w === RequestReason.fetchMore ? e.updateQuery(A.data, ne) : ne;
                    D.next({
                        id: E,
                        url: L.url,
                        variables: L.variables,
                        requestReason: w,
                        status: getStatus({
                            error: void 0,
                            data: B,
                            loading: !1
                        },
                        w),
                        data: B,
                        loading: !1,
                        error: void 0
                    }),
                    oe(void 0)
                },
                error: ne = >{
                    D.next({
                        id: E,
                        url: L.url,
                        variables: L.variables,
                        requestReason: w,
                        status: getStatus({...A,
                            error: ne,
                            loading: !1
                        },
                        w),
                        data: void 0,
                        loading: !1,
                        error: ne
                    }),
                    D.complete(),
                    oe(void 0)
                },
                complete: () = >{
                    D.complete(),
                    te.unsubscribe()
                }
            })
        })
    }
    let m = null;
    function g() {
        m = u.subscribe(w = >{
            i.value || v(w, s.value)
        })
    }
    function C() {
        m && (m.unsubscribe(), m = null, p.complete())
    }
    function I(w) {
        return v(RequestReason.fetchMore, w)
    }
    function S(w) {}
    return {
        info: a,
        init: g,
        refetch: () = >v(RequestReason.refetch, s.value),
        prefetch: () = >{
            if (!i.value) return v(RequestReason.setVariables, s.value)
        },
        fetchMore: I,
        destroy: C,
        onNext: S,
        requestReason: _,
        stream$: d
    }
}
let creatingModelCount = 0;
const tempQueryList = [],
useRoute = e = >{
    const t = shallowReactive(Object.assign({},
    e.proxy.$route));
    return watch(() = >e.proxy.$route, n = >{
        Object.assign(t, n)
    }),
    t
},
useRestQuery = e = >{
    const t = getCurrentInstance();
    if (creatingModelCount <= 0 || !t) throw new Error("You should use useRestQuery with createModel context ");
    const n = useRoute(t),
    {
        rebornClient: r,
        store: o
    } = getRootStore(),
    a = createRestQuery(e, null, n, o.hydrationStatus, r.rest);
    tempQueryList.push(a);
    const i = useStatus(a.info, a.requestReason),
    {
        loading: s,
        error: u,
        data: l
    } = toRefs(a.info);
    return {
        info: a.info,
        status: i,
        loading: s,
        error: u,
        data: l,
        refetch: a.refetch,
        fetchMore: a.fetchMore,
        onNext: a.onNext,
        requestReason: a.requestReason,
        stream$: a.stream$
    }
},
useRestMutation = e = >{
    const t = getCurrentInstance();
    if (creatingModelCount <= 0 || !t) throw new Error("You should use useRestMutation with createModel context ");
    const n = useRoute(t),
    {
        rebornClient: r
    } = getRootStore(),
    o = createRestMutation(e, null, n, r.rest);
    return tempQueryList.push(o),
    {
        info: o.info,
        mutate: o.mutate,
        stream$: o.stream$
    }
};
function createModelFromCA(e) {
    return {
        type: "FunctionalModel",
        cotr: () = >{
            const {
                model: t,
                queryList: n
            } = e.creator();
            n.length && MODE !== "SSR" && n.forEach(i = >{
                var s;
                return (s = i.init) == null ? void 0 : s.call(i)
            });
            let r;
            function o() {
                return r || (r = Promise.all(n.map(i = >{
                    var s;
                    return (s = i.prefetch) == null ? void 0 : s.call(i)
                }))),
                r
            }
            function a() {
                n && (n.forEach(i = >{
                    var s;
                    return (s = i.destroy) == null ? void 0 : s.call(i)
                }), n.length = 0)
            }
            return {
                model: t,
                prefetch: o,
                destroy: a
            }
        }
    }
}
function createModel(e) {
    return {
        type: "FN",
        creator: () = >{
            creatingModelCount++;
            const {
                store: t
            } = getRootStore(),
            n = e({
                getModelInstance: t.getModelInstance
            }),
            r = [...tempQueryList];
            return creatingModelCount--,
            tempQueryList.length = 0,
            {
                queryList: r,
                model: n
            }
        }
    }
}
function registerProperty(e, t, n) {
    Object.defineProperty(e, t, {
        value: n,
        writable: !1,
        configurable: !1,
        enumerable: !0
    })
}
function getDecoratorList(e) {
    const t = [];
    let n = e.constructor;
    for (; n !== Object;) {
        const r = n.rebornDecorators;
        r && t.push(...r),
        n = Object.getPrototypeOf(n.prototype).constructor
    }
    return t
}
function initRebornDesc(e, t, n, r, o) {
    const a = [],
    i = getCurrentInstance();
    for (const s of n) {
        const {
            key: u,
            meta: l
        } = s;
        if (l.type.startsWith("gql") && !o.gql) throw new Error('Before use an gqlQuery / gqlMutation, you must register "GQL" client first');
        if (l.type.startsWith("rest") && !o.rest) throw new Error('Before use an restQuery / restMutation, you must register "REST" client first');
        if (l.type.endsWith("Mutation")) {
            let f;
            l.type === "gqlMutation" ? f = createGQLMutation(l.detail, e, i.proxy.$route, o.gql) : l.type === "restMutation" && (f = createRestMutation(l.detail, e, i.proxy.$route, o.rest)),
            registerProperty(t, u, {
                get data() {
                    return f.info.data
                },
                get loading() {
                    return f.info.loading
                },
                get mutate() {
                    return f.mutate.bind(f)
                },
                get error() {
                    return f.info.error
                }
            })
        } else {
            let f;
            l.type === "gqlQuery" ? f = createGQLQuery(l.detail, e, i.proxy.$route, r.hydrationStatus, o.gql) : l.type === "restQuery" && (f = createRestQuery(l.detail, e, i.proxy.$route, r.hydrationStatus, o.rest));
            const p = useStatus(f.info, f.requestReason),
            d = {
                get data() {
                    return f.info.data
                },
                get loading() {
                    return f.info.loading
                },
                get refetch() {
                    return f.refetch.bind(f)
                },
                get fetchMore() {
                    return f.fetchMore.bind(f)
                },
                get error() {
                    return f.info.error
                },
                get status() {
                    return p.value
                }
            };
            a.push(f),
            registerProperty(t, u, d)
        }
    }
    return a
}
const SKIP_PROPERTIES = ["constructor"];
function collectProperty(e) {
    const t = [];
    return Object.getOwnPropertyNames(e).forEach(n = >{
        if (SKIP_PROPERTIES.indexOf(n) >= 0) return;
        const r = Object.getOwnPropertyDescriptor(e, n);
        r.get ? t.push({
            key: n,
            type: "getter",
            get: r.get,
            set: r.set
        }) : typeof r.value == "function" ? t.push({
            key: n,
            type: "function",
            value: r.value
        }) : t.push({
            key: n,
            type: "other",
            value: r.value
        })
    }),
    t
}
function getDataFactory(e) {
    return () = >{
        const t = new e,
        n = {...t
        },
        r = reactive(n),
        o = {};
        return Object.getOwnPropertyNames(r).forEach(i = >{
            Object.defineProperty(o, i, {
                get: () = >r[i],
                set: s = >{
                    r[i] = s
                }
            }),
            Object.defineProperty(t, i, {
                get: () = >o[i],
                set: s = >{
                    o[i] = s
                }
            })
        }),
        {
            reactiveData: r,
            original: t,
            modelAccessor: o
        }
    }
}
function getPropertyMetaList(e) {
    const t = [];
    let n = e.prototype;
    for (; n && n !== Object.prototype;) t.push(...collectProperty(n)),
    n = Object.getPrototypeOf(n);
    return t
}
function generateProtoData(e) {
    return t = >{
        const n = getPropertyMetaList(e);
        for (const r of n) if (r.type === "function") Object.defineProperty(t, r.key, {
            get() {
                return r.value.bind(t)
            }
        });
        else if (r.type === "getter") {
            const {
                get: o = () = >{},
                set: a
            } = r,
            i = computed({
                get: () = >o.call(t),
                set: u = >{
                    a && a.call(t, u)
                }
            }),
            s = {
                enumerable: !0,
                get() {
                    return i.value
                }
            };
            a && (s.set = u = >{
                i.value = u
            }),
            Object.defineProperty(t, r.key, s)
        }
    }
}
function createModelFromClass(e) {
    const t = getDataFactory(e),
    n = generateProtoData(e);
    return {
        type: "ClassModel",
        cotr: r = >{
            if (!r) throw new Error("no client has been set before you use class mode model");
            const {
                original: o,
                reactiveData: a,
                modelAccessor: i
            } = t(),
            s = getRootStore().store,
            u = getDecoratorList(o),
            l = u.length ? initRebornDesc(a, i, u, s, r) : [];
            n(i);
            function f() {
                l && (l.forEach(d = >d.destroy()), l.length = 0),
                Object.defineProperty(i, "getModelInstance", {
                    get() {
                        return null
                    },
                    configurable: !0,
                    enumerable: !1
                })
            }
            Object.defineProperty(i, "getModelInstance", {
                get() {
                    return s.getModelInstance
                },
                configurable: !0,
                enumerable: !1
            }),
            l.length && MODE !== "SSR" && l.forEach(d = >d.init());
            function p() {
                return Promise.all(l.map(d = >d.prefetch()))
            }
            return {
                model: i,
                prefetch: p,
                destroy: f
            }
        }
    }
}
function useModel(e) {
    if (!getCurrentInstance()) throw new Error("useModel must use in a setup context!");
    const {
        store: n,
        rebornClient: r
    } = getRootStore();
    if (!n) throw new Error("There is no reborn-model store in your root vm!!");
    n.hydrationStatus.value === 0 && (n.hydrationStatus.value = 1, onMounted(() = >{
        nextTick(() = >{
            n.hydrationStatus.value = 2
        })
    }));
    const o = n.addModel(e);
    if (!o.count) {
        const a = "type" in e ? createModelFromCA(e) : createModelFromClass(e);
        o.scope = effectScope(!0);
        const i = o.scope;
        i == null || i.run(() = >{
            const s = a.cotr(r);
            o.instance = s
        })
    }
    return o.count++,
    onBeforeUnmount(() = >{
        var a;
        o.count--,
        o.count === 0 && o.instance && (o.instance.destroy(), o.instance = null, (a = o.scope) == null || a.stop(), o.scope = null, n.removeModel(e))
    }),
    onServerPrefetch(async() = >{
        var a, i;
        await((a = o.instance) == null ? void 0 : a.prefetch()),
        o.count--,
        o.count === 0 && o.instance && (o.instance.destroy(), o.instance = null, (i = o.scope) == null || i.stop(), o.scope = null, n.removeModel(e))
    }),
    o.instance.model
}
function createUseModel(e) {
    const t = createModel(e);
    return () = >useModel(t)
}
function unrefElement(e) {
    var t;
    const n = toValue(e);
    return (t = n == null ? void 0 : n.$el) != null ? t: n
}
const defaultWindow = isClient ? window: void 0,
defaultDocument = isClient ? window.document: void 0;
function useEventListener$1(...e) {
    let t,
    n,
    r,
    o;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = defaultWindow) : [t, n, r, o] = e, !t) return noop$1;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const a = [],
    i = () = >{
        a.forEach(f = >f()),
        a.length = 0
    },
    s = (f, p, d, _) = >(f.addEventListener(p, d, _), () = >f.removeEventListener(p, d, _)),
    u = watch(() = >[unrefElement(t), toValue(o)], ([f, p]) = >{
        i(),
        f && a.push(...n.flatMap(d = >r.map(_ = >s(f, d, _, p))))
    },
    {
        immediate: !0,
        flush: "post"
    }),
    l = () = >{
        u(),
        i()
    };
    return tryOnScopeDispose(l),
    l
}
function useMounted() {
    const e = ref$1(!1);
    return getCurrentInstance() && onMounted(() = >{
        e.value = !0
    }),
    e
}
function useSupported(e) {
    const t = useMounted();
    return computed(() = >(t.value, !!e()))
}
function useRafFn(e, t = {}) {
    const {
        immediate: n = !0,
        window: r = defaultWindow
    } = t,
    o = ref$1(!1);
    let a = 0,
    i = null;
    function s(f) {
        if (!o.value || !r) return;
        const p = f - (a || f);
        e({
            delta: p,
            timestamp: f
        }),
        a = f,
        i = r.requestAnimationFrame(s)
    }
    function u() { ! o.value && r && (o.value = !0, i = r.requestAnimationFrame(s))
    }
    function l() {
        o.value = !1,
        i != null && r && (r.cancelAnimationFrame(i), i = null)
    }
    return n && u(),
    tryOnScopeDispose(l),
    {
        isActive: readonly(o),
        pause: l,
        resume: u
    }
}
const _global = typeof globalThis < "u" ? globalThis: typeof window < "u" ? window: typeof global < "u" ? global: typeof self < "u" ? self: {},
globalKey = "__vueuse_ssr_handlers__",
handlers = getHandlers();
function getHandlers() {
    return globalKey in _global || (_global[globalKey] = _global[globalKey] || {}),
    _global[globalKey]
}
function getSSRHandler(e, t) {
    return handlers[e] || t
}
function guessSerializerType(e) {
    return e == null ? "any": e instanceof Set ? "set": e instanceof Map ? "map": e instanceof Date ? "date": typeof e == "boolean" ? "boolean": typeof e == "string" ? "string": typeof e == "object" ? "object": Number.isNaN(e) ? "any": "number"
}
var __defProp$l = Object.defineProperty,
__getOwnPropSymbols$o = Object.getOwnPropertySymbols,
__hasOwnProp$o = Object.prototype.hasOwnProperty,
__propIsEnum$o = Object.prototype.propertyIsEnumerable,
__defNormalProp$l = (e, t, n) = >t in e ? __defProp$l(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n,
__spreadValues$l = (e, t) = >{
    for (var n in t || (t = {})) __hasOwnProp$o.call(t, n) && __defNormalProp$l(e, n, t[n]);
    if (__getOwnPropSymbols$o) for (var n of __getOwnPropSymbols$o(t)) __propIsEnum$o.call(t, n) && __defNormalProp$l(e, n, t[n]);
    return e
};
const StorageSerializers = {
    boolean: {
        read: e = >e === "true",
        write: e = >String(e)
    },
    object: {
        read: e = >JSON.parse(e),
        write: e = >JSON.stringify(e)
    },
    number: {
        read: e = >Number.parseFloat(e),
        write: e = >String(e)
    },
    any: {
        read: e = >e,
        write: e = >String(e)
    },
    string: {
        read: e = >e,
        write: e = >String(e)
    },
    map: {
        read: e = >new Map(JSON.parse(e)),
        write: e = >JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e = >new Set(JSON.parse(e)),
        write: e = >JSON.stringify(Array.from(e))
    },
    date: {
        read: e = >new Date(e),
        write: e = >e.toISOString()
    }
},
customStorageEventName = "vueuse-storage";
function useStorage(e, t, n, r = {}) {
    var o;
    const {
        flush: a = "pre",
        deep: i = !0,
        listenToStorageChanges: s = !0,
        writeDefaults: u = !0,
        mergeDefaults: l = !1,
        shallow: f,
        window: p = defaultWindow,
        eventFilter: d,
        onError: _ = E = >{
            console.error(E)
        }
    } = r,
    y = (f ? shallowRef: ref$1)(t);
    if (!n) try {
        n = getSSRHandler("getDefaultStorage", () = >{
            var E;
            return (E = defaultWindow) == null ? void 0 : E.localStorage
        })()
    } catch(E) {
        _(E)
    }
    if (!n) return y;
    const v = toValue(t),
    m = guessSerializerType(v),
    g = (o = r.serializer) != null ? o: StorageSerializers[m],
    {
        pause: C,
        resume: I
    } = watchPausable(y, () = >S(y.value), {
        flush: a,
        deep: i,
        eventFilter: d
    });
    return p && s && (useEventListener$1(p, "storage", A), useEventListener$1(p, customStorageEventName, b)),
    A(),
    y;
    function S(E) {
        try {
            if (E == null) n.removeItem(e);
            else {
                const P = g.write(E),
                L = n.getItem(e);
                L !== P && (n.setItem(e, P), p && p.dispatchEvent(new CustomEvent(customStorageEventName, {
                    detail: {
                        key: e,
                        oldValue: L,
                        newValue: P,
                        storageArea: n
                    }
                })))
            }
        } catch(P) {
            _(P)
        }
    }
    function w(E) {
        const P = E ? E.newValue: n.getItem(e);
        if (P == null) return u && v !== null && n.setItem(e, g.write(v)),
        v;
        if (!E && l) {
            const L = g.read(P);
            return typeof l == "function" ? l(L, v) : m === "object" && !Array.isArray(L) ? __spreadValues$l(__spreadValues$l({},
            v), L) : L
        } else return typeof P != "string" ? P: g.read(P)
    }
    function b(E) {
        A(E.detail)
    }
    function A(E) {
        if (! (E && E.storageArea !== n)) {
            if (E && E.key == null) {
                y.value = v;
                return
            }
            if (! (E && E.key !== e)) {
                C();
                try {
                    y.value = w(E)
                } catch(P) {
                    _(P)
                } finally {
                    E ? nextTick(I) : I()
                }
            }
        }
    }
}
function useDocumentVisibility({
    document: e = defaultDocument
} = {}) {
    if (!e) return ref$1("visible");
    const t = ref$1(e.visibilityState);
    return useEventListener$1(e, "visibilitychange", () = >{
        t.value = e.visibilityState
    }),
    t
}
function useIntersectionObserver(e, t, n = {}) {
    const {
        root: r,
        rootMargin: o = "0px",
        threshold: a = .1,
        window: i = defaultWindow,
        immediate: s = !0
    } = n,
    u = useSupported(() = >i && "IntersectionObserver" in i),
    l = computed(() = >{
        const y = toValue(e);
        return (Array.isArray(y) ? y: [y]).map(unrefElement).filter(notNullish)
    });
    let f = noop$1;
    const p = ref$1(s),
    d = u.value ? watch(() = >[l.value, unrefElement(r), p.value], ([y, v]) = >{
        if (f(), !p.value || !y.length) return;
        const m = new IntersectionObserver(t, {
            root: unrefElement(v),
            rootMargin: o,
            threshold: a
        });
        y.forEach(g = >g && m.observe(g)),
        f = () = >{
            m.disconnect(),
            f = noop$1
        }
    },
    {
        immediate: s,
        flush: "post"
    }) : noop$1,
    _ = () = >{
        f(),
        d(),
        p.value = !1
    };
    return tryOnScopeDispose(_),
    {
        isSupported: u,
        isActive: p,
        pause() {
            f(),
            p.value = !1
        },
        resume() {
            p.value = !0
        },
        stop: _
    }
}
const events = new Map;
function useEventBus(e) {
    const t = getCurrentScope();
    function n(s) {
        var u;
        const l = events.get(e) || new Set;
        l.add(s),
        events.set(e, l);
        const f = () = >o(s);
        return (u = t == null ? void 0 : t.cleanups) == null || u.push(f),
        f
    }
    function r(s) {
        function u(...l) {
            o(u),
            s(...l)
        }
        return n(u)
    }
    function o(s) {
        const u = events.get(e);
        u && (u.delete(s), u.size || a())
    }
    function a() {
        events.delete(e)
    }
    function i(s, u) {
        var l; (l = events.get(e)) == null || l.forEach(f = >f(s, u))
    }
    return {
        on: n,
        once: r,
        off: o,
        emit: i,
        reset: a
    }
}
var __defProp$7 = Object.defineProperty,
__getOwnPropSymbols$8 = Object.getOwnPropertySymbols,
__hasOwnProp$8 = Object.prototype.hasOwnProperty,
__propIsEnum$8 = Object.prototype.propertyIsEnumerable,
__defNormalProp$7 = (e, t, n) = >t in e ? __defProp$7(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n,
__spreadValues$7 = (e, t) = >{
    for (var n in t || (t = {})) __hasOwnProp$8.call(t, n) && __defNormalProp$7(e, n, t[n]);
    if (__getOwnPropSymbols$8) for (var n of __getOwnPropSymbols$8(t)) __propIsEnum$8.call(t, n) && __defNormalProp$7(e, n, t[n]);
    return e
};
function useNow(e = {}) {
    const {
        controls: t = !1,
        interval: n = "requestAnimationFrame"
    } = e,
    r = ref$1(new Date),
    o = () = >r.value = new Date,
    a = n === "requestAnimationFrame" ? useRafFn(o, {
        immediate: !0
    }) : useIntervalFn(o, n, {
        immediate: !0
    });
    return t ? __spreadValues$7({
        now: r
    },
    a) : r
}
function untilFirstResponse(e) {
    return until(() = >e.info.data || e.info.error).toBeTruthy()
}
function infoToCommonResponse(e) {
    var o, a, i, s;
    const t = e.error == null ? 1 : (o = e.error) == null ? void 0 : o.result,
    n = (i = e.data) != null ? i: (a = e.error) == null ? void 0 : a.data,
    {
        error_msg: r
    } = (s = e.error) != null ? s: {};
    return {
        result: t,
        data: n,
        error_msg: r
    }
}
function withSilentRefetch(e) {
    const t = ref$1(e.loading.value),
    n = ref$1(e.error.value),
    r = watch(e.error, a = >{
        n.value = a
    }),
    o = watch(e.loading, (a, i) = >{
        t.value = a,
        i === !0 && a === !1 && (r(), o())
    });
    return {...e,
        loading: t,
        error: n
    }
}
function getFullData(e) {
    const t = e.data,
    n = e.error;
    return n != null ? typeof n == "object" && "result" in n ? n: void 0 : {
        data: t,
        result: 1,
        error_msg: void 0
    }
}
function useFetchInSetup({
    url: e,
    auto: t = !0,
    method: n = "get",
    variables: r,
    data: o
}) {
    let a,
    i,
    s,
    u,
    l;
    if (n === "get" && t) {
        const g = withSilentRefetch(useRestQuery({
            url: e,
            method: "GET",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            variables: r != null ? r: typeof o == "function" ? o: () = >o
        }));
        i = g.info,
        a = g,
        g.data,
        s = g.error,
        u = g.loading,
        l = () = >g.refetch()
    } else {
        const g = useRestMutation({
            url: e,
            method: n,
            variables: r != null ? r: C = >({...o,
                ...C
            })
        });
        i = g.info,
        a = g,
        toRef(i, "data"),
        s = toRef(i, "error"),
        u = toRef(i, "loading"),
        l = C = >g.mutate(C != null ? C: {}),
        t && l()
    }
    t && (u.value = !0);
    const f = untilFirstResponse(a),
    p = computed(() = >getFullData(i)),
    d = computed(() = >{
        const g = s.value;
        if (g != null && typeof g == "object" && !("result" in g)) return g
    }),
    _ = g = >watch(p, I = >{
        g(I)
    }),
    y = g = >watch(d, I = >{
        I && g(I)
    }),
    v = _,
    m = async g = >{
        var C;
        return await l(g),
        (C = getFullData(i)) != null ? C: {
            result: 0,
            data: null,
            error_msg: void 0
        }
    };
    return {
        data: p,
        error: d,
        loading: u,
        refetch: m,
        fetch: m,
        firstFetch: f,
        onData: _,
        onError: y,
        onFinish: v
    }
}
const useFetch = (...e) = >{
    let t;
    const n = () = >{
        try {
            t = useFetchInSetup(...e)
        } catch(r) {
            createUseModel(() = >{
                t = useFetchInSetup(...e)
            })()
        }
    };
    return getCurrentInstance() ? n() : new Vue2({
        setup() {
            n()
        }
    }) || console.error("Model not created"),
    t
},
_hasatob = typeof atob == "function",
_hasbtoa = typeof btoa == "function",
_hasBuffer = typeof Buffer == "function",
_TD = typeof TextDecoder == "function" ? new TextDecoder: void 0,
_TE = typeof TextEncoder == "function" ? new TextEncoder: void 0,
b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
b64chs = Array.prototype.slice.call(b64ch),
b64tab = (e = >{
    let t = {};
    return e.forEach((n, r) = >t[n] = r),
    t
})(b64chs),
b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
_fromCC = String.fromCharCode.bind(String),
_U8Afrom = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (e, t = n = >n) = >new Uint8Array(Array.prototype.slice.call(e, 0).map(t)),
_mkUriSafe = e = >e.replace(/=/g, "").replace(/[+\/]/g, t = >t == "+" ? "-": "_"),
_tidyB64 = e = >e.replace(/[^A-Za-z0-9\+\/]/g, ""),
btoaPolyfill = e = >{
    let t,
    n,
    r,
    o,
    a = "";
    const i = e.length % 3;
    for (let s = 0; s < e.length;) {
        if ((n = e.charCodeAt(s++)) > 255 || (r = e.charCodeAt(s++)) > 255 || (o = e.charCodeAt(s++)) > 255) throw new TypeError("invalid character found");
        t = n << 16 | r << 8 | o,
        a += b64chs[t >> 18 & 63] + b64chs[t >> 12 & 63] + b64chs[t >> 6 & 63] + b64chs[t & 63]
    }
    return i ? a.slice(0, i - 3) + "===".substring(i) : a
},
_btoa = _hasbtoa ? e = >btoa(e) : _hasBuffer ? e = >Buffer.from(e, "binary").toString("base64") : btoaPolyfill,
_fromUint8Array = _hasBuffer ? e = >Buffer.from(e).toString("base64") : e = >{
    let n = [];
    for (let r = 0, o = e.length; r < o; r += 4096) n.push(_fromCC.apply(null, e.subarray(r, r + 4096)));
    return _btoa(n.join(""))
},
cb_utob = e = >{
    if (e.length < 2) {
        var t = e.charCodeAt(0);
        return t < 128 ? e: t < 2048 ? _fromCC(192 | t >>> 6) + _fromCC(128 | t & 63) : _fromCC(224 | t >>> 12 & 15) + _fromCC(128 | t >>> 6 & 63) + _fromCC(128 | t & 63)
    } else {
        var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
        return _fromCC(240 | t >>> 18 & 7) + _fromCC(128 | t >>> 12 & 63) + _fromCC(128 | t >>> 6 & 63) + _fromCC(128 | t & 63)
    }
},
re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
utob = e = >e.replace(re_utob, cb_utob),
_encode = _hasBuffer ? e = >Buffer.from(e, "utf8").toString("base64") : _TE ? e = >_fromUint8Array(_TE.encode(e)) : e = >_btoa(utob(e)),
encode = (e, t = !1) = >t ? _mkUriSafe(_encode(e)) : _encode(e),
encodeURI$1 = e = >encode(e, !0),
re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
cb_btou = e = >{
    switch (e.length) {
    case 4:
        var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
        n = t - 65536;
        return _fromCC((n >>> 10) + 55296) + _fromCC((n & 1023) + 56320);
    case 3:
        return _fromCC((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
    default:
        return _fromCC((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
    }
},
btou = e = >e.replace(re_btou, cb_btou),
atobPolyfill = e = >{
    if (e = e.replace(/\s+/g, ""), !b64re.test(e)) throw new TypeError("malformed base64.");
    e += "==".slice(2 - (e.length & 3));
    let t,
    n = "",
    r,
    o;
    for (let a = 0; a < e.length;) t = b64tab[e.charAt(a++)] << 18 | b64tab[e.charAt(a++)] << 12 | (r = b64tab[e.charAt(a++)]) << 6 | (o = b64tab[e.charAt(a++)]),
    n += r === 64 ? _fromCC(t >> 16 & 255) : o === 64 ? _fromCC(t >> 16 & 255, t >> 8 & 255) : _fromCC(t >> 16 & 255, t >> 8 & 255, t & 255);
    return n
},
_atob = _hasatob ? e = >atob(_tidyB64(e)) : _hasBuffer ? e = >Buffer.from(e, "base64").toString("binary") : atobPolyfill,
_toUint8Array = _hasBuffer ? e = >_U8Afrom(Buffer.from(e, "base64")) : e = >_U8Afrom(_atob(e), t = >t.charCodeAt(0)),
_decode = _hasBuffer ? e = >Buffer.from(e, "base64").toString("utf8") : _TD ? e = >_TD.decode(_toUint8Array(e)) : e = >btou(_atob(e)),
_unURI = e = >_tidyB64(e.replace(/[-_]/g, t = >t == "-" ? "+": "/")),
decode = e = >_decode(_unURI(e));
function isObject$4(e) {
    return typeof e == "object" && e !== null
}
function isEmptyObject(e) {
    return typeof e == "object" && e !== null && Object.keys(e).length === 0
}
var ActionType = (e = >(e[e.CLICK = 1] = "CLICK", e[e.PUSH = 2] = "PUSH", e))(ActionType || {});
const eventTrackingAction = "EVENT_TRACKING_AWARD_INFO",
eventTrackingUrlKey = "encourageEventTracking";
function transformEventTrackingLogInfo(e, t = !1) {
    if (!isObject$4(e)) return {};
    const n = {
        encourage_task_id: e.eventTrackingTaskId,
        encourage_resource_id: e.resourceId,
        eventTrackingLogInfo: [e]
    };
    return t ? n: {...n,
        encourage_ext_params: e.extParams
    }
}
function getBizJson(e) {
    var t;
    return (t = e.awardInfo) != null ? t: []
}
const defaultNativeEncourageInfo = {
    eventTrackingTaskId: 20022,
    resourceId: "feeds_appPopup_button"
};
function getCurrentSource() {
    return getUrlSearchParams().source || ""
}
function isFromNativePopup() {
    const e = ["unionSignInMultiDayPopup", "unionSignInSingleDayPopup", "unionSignInCalendar", "NEBULA_UN_LOGIN_RED_PACKET_PUSH", "unionSignInSingleDayPopup", "unionSignInMultiDayPopup", "unionSignInCalendar"],
    t = getCurrentSource();
    return e.includes(t)
}
function getEventTrackingFromUrl() {
    const e = getUrlSearchParams()[eventTrackingUrlKey];
    if (!e) return [];
    try {
        return JSON.parse(decode(e))
    } catch(t) {
        return []
    }
}
function recordEventTracking(e) {
    var n;
    if (!isObject$4(e)) return;
    const t = transformEventTrackingLogInfo(e, !0);
    isEmptyObject(t) || (window.ENCOURAGE_EVENT_TRACKING = ((n = window.ENCOURAGE_EVENT_TRACKING) != null ? n: []).concat([t]).slice( - 10))
}
function getEventTrackingFromAwardInfo(e, t) {
    var n;
    if (!isObject$4(e)) return {};
    t && recordEventTracking(t);
    try {
        return {
            biz_json: getBizJson(e),
            route_json: [...isFromNativePopup() ? [defaultNativeEncourageInfo] : [], ...getEventTrackingFromUrl(), ... (n = window.ENCOURAGE_EVENT_TRACKING) != null ? n: []],
            ext_params: e.extParams
        }
    } catch(r) {
        return {}
    }
}
function clearEventTracking() {
    window.ENCOURAGE_EVENT_TRACKING = []
}
function getEncodedTrackInfo(e) {
    if (!isObject$4(e)) return {
        succ: !1
    };
    const t = transformEventTrackingLogInfo(e, !0);
    if (isEmptyObject(t)) return {
        succ: !1
    };
    const n = getEventTrackingFromUrl();
    return {
        result: encodeURI$1(JSON.stringify([...n, t])),
        succ: !0
    }
}
function addEventTrackingToUrl(e, t) {
    const {
        result: n,
        succ: r
    } = getEncodedTrackInfo(t);
    if (!r) return e;
    try {
        const o = "".concat(eventTrackingUrlKey, "=").concat(n);
        return e.includes("?") ? "".concat(e, "&").concat(o) : "".concat(e, "?").concat(o)
    } catch(o) {
        return e
    }
}
function actionReport(e) {
    var t;
    if ((t = e == null ? void 0 : e.resourceSlotInfo) != null && t.eventTrackingTaskId && (e == null ? void 0 : e.actionType) !== void 0) return fetch("/rest/wd/usergrowth/encourage/matrix/resource/action", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
            "content-type": "application/json"
        }
    })
}
function get(e, t, n) {
    const r = Array.isArray(t) ? t: t.replace(/\[(\d+)\]/g, ".$1").split(".");
    let o = e;
    for (const a of r) if (o = Object(o)[a], typeof o > "u") return n;
    return o
}
async
function launchOrDownloadApp({
    identifier: e,
    scheme: t,
    downloadUrl: n,
    preferDownloadUrl: r = !1,
    downloadUrlType: o = LinkType$1.WEBVIEW
}) {
    if (isAndroid$2()) if (await hasInstalledApp$1(e)) useYoda("tool.launchApp", {
        scheme: t,
        identifier: e
    });
    else if (n && r) openLinkUrl$1(o, n);
    else {
        const i = "market://details?id=".concat(e);
        window.location.href = i,
        checkOpen(() = >{
            n && openWebview$1(n)
        })
    } else {
        const {
            launched: a
        } = await useYoda("tool.launchApp", {
            scheme: t,
            identifier: e
        });
        a || n && openWebview$1(n)
    }
}
var WidgetOpenEncourageSource = (e = >(e.AUTO_REWARD_ADD = "desktopComponentAddTask", e.AUTO_REWARD_CLICK = "desktopComponentClickTask", e.AUTO_REWARD_SIGN = "desktopComponentSignTask", e.AUTO_REWARD_TREASURE = "desktopComponentTreasureTask", e.AUTO_LAUNCH_AD = "desktopComponentInspireAd", e.OPEN_RESERVE_COIN = "desktopComponentReserveCoin", e.AUTO_REWARD_DISH = "desktopComponentDishSubsidy", e))(WidgetOpenEncourageSource || {});
const refreshEncourageWidget = () = >{
    isInNebula$1() && (isIOS$1() ? useYoda("growth.reloadWidget", {
        widgetType: "quick_2_2"
    }).
    catch(() = >{}) : yodaCanIUse$2("growth.refreshQuickyAppWidget").then(e = >{
        e && useYoda("growth.refreshQuickyAppWidget").
        catch(() = >{})
    }))
},
scriptRel = "modulepreload",
assetsURL = function(e, t) {
    return e[0] === "." ? new URL(e, t).href: e
},
seen = {},
__vitePreload = function e(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        const a = document.getElementsByTagName("link");
        o = Promise.all(n.map(i = >{
            if (i = assetsURL(i, r), i in seen) return;
            seen[i] = !0;
            const s = i.endsWith(".css"),
            u = s ? '[rel="stylesheet"]': "";
            if ( !! r) for (let p = a.length - 1; p >= 0; p--) {
                const d = a[p];
                if (d.href === i && (!s || d.rel === "stylesheet")) return
            } else if (document.querySelector('link[href="'.concat(i, '"]').concat(u))) return;
            const f = document.createElement("link");
            if (f.rel = s ? "stylesheet": scriptRel, s || (f.as = "script", f.crossOrigin = ""), f.href = i, document.head.appendChild(f), s) return new Promise((p, d) = >{
                f.addEventListener("load", p),
                f.addEventListener("error", () = >d(new Error("Unable to preload CSS for ".concat(i))))
            })
        }))
    }
    return o.then(() = >t()).
    catch(a = >{
        const i = new Event("vite:preloadError", {
            cancelable: !0
        });
        if (i.payload = a, window.dispatchEvent(i), !i.defaultPrevented) throw a
    })
},
defaultIcon = {
    success: "https://ali.static.yximgs.com/kos/nlav11477/dayRedPack/success.png",
    error: "https://ali.static.yximgs.com/kos/nlav11477/dayRedPack/error.png",
    warning: "https://ali.static.yximgs.com/kos/nlav11477/dayRedPack/warning.png",
    coin: "https://ali.static.yximgs.com/kos/nlav11477/dayRedPack/default-coin.png",
    "many-coin": "https://ali.static.yximgs.com/kos/nlav11477/dayRedPack/many-coin.png",
    "red-packet": "https://ali.static.yximgs.com/kos/nlav11477/sevenDaysSignIn/red-packet-toast.png",
    gift: "https://ali.static.yximgs.com/kos/nlav11477/sevenDaysSignIn/gift-toast.png"
},
_sfc_main$q = defineComponent({
    name: "Toast",
    props: {
        icon: {
            type: String
        },
        content: {
            type: String
        },
        show: {
            type: Boolean,
        default:
            !1
        },
        css: Object,
        iconCss: Object
    },
    setup(e, t) {
        return {
            img: computed(() = >e.icon && Object.keys(defaultIcon).includes(e.icon) ? defaultIcon[e.icon] : e.icon)
        }
    }
});
function normalizeComponent(e, t, n, r, o, a, i, s) {
    var u = typeof e == "function" ? e.options: e;
    t && (u.render = t, u.staticRenderFns = n, u._compiled = !0),
    r && (u.functional = !0),
    a && (u._scopeId = "data-v-" + a);
    var l;
    if (i ? (l = function(d) {
        d = d || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
        !d && typeof __VUE_SSR_CONTEXT__ < "u" && (d = __VUE_SSR_CONTEXT__),
        o && o.call(this, d),
        d && d._registeredComponents && d._registeredComponents.add(i)
    },
    u._ssrRegister = l) : o && (l = s ?
    function() {
        o.call(this, (u.functional ? this.parent: this).$root.$options.shadowRoot)
    }: o), l) if (u.functional) {
        u._injectStyles = l;
        var f = u.render;
        u.render = function(_, y) {
            return l.call(y),
            f(_, y)
        }
    } else {
        var p = u.beforeCreate;
        u.beforeCreate = p ? [].concat(p, l) : [l]
    }
    return {
        exports: e,
        options: u
    }
}
var _sfc_render$q = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("div", {
        staticClass: "toast"
    },
    [n("transition", {
        attrs: {
            name: "fade-grow"
        }
    },
    [t.show ? n("div", {
        staticClass: "toast-content",
        style: t.css
    },
    [t.img ? n("img", {
        staticClass: "toast-icon",
        style: t.iconCss,
        attrs: {
            src: t.img,
            alt: "toast图标"
        }
    }) : t._e(), n("div", {
        staticClass: "toast-text",
        domProps: {
            innerHTML: t._s(t.content)
        }
    })]) : t._e()])], 1)
},
_sfc_staticRenderFns$q = [],
__component__$q = normalizeComponent(_sfc_main$q, _sfc_render$q, _sfc_staticRenderFns$q, !1, null, "f3a991e9", null, null);
const Toast = __component__$q.exports,
isPlainObject = e = >Object.prototype.toString.call(e) === "[object Object]",
ToastConstructor = Vue.extend(Toast);
let instance,
timer;
const defaultOptions$1 = {
    duration: 2e3
};
function toast(e) {
    let t = defaultOptions$1;
    typeof e == "string" ? t = {...defaultOptions$1,
        content: e
    }: isPlainObject(e) && (t = {...defaultOptions$1,
        ...e
    }),
    instance ? Object.assign(instance, t) : (instance = new ToastConstructor({
        propsData: t
    }), instance.vm = instance.$mount(), document.body.appendChild(instance.vm.$el)),
    instance.show = !0,
    timer && clearTimeout(timer),
    timer = setTimeout(() = >{
        instance.show = !1
    },
    t.duration)
}
toast.close = () = >{
    timer && clearTimeout(timer),
    instance.show = !1
};
var commonjsGlobal = typeof globalThis < "u" ? globalThis: typeof window < "u" ? window: typeof global < "u" ? global: typeof self < "u" ? self: {};
function getDefaultExportFromCjs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.
default:
    e
}
function getAugmentedNamespace(e) {
    if (e.__esModule) return e;
    var t = e.
default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o: {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
const isTest = window.location.origin.endsWith("preonline.corp.kuaishou.com"),
isStaging = window.location.origin.endsWith(".staging.kuaishou.com"),
isDevOrTest = isTest,
payHost = isStaging ? "https://kspay-staging.test.gifshow.com": isTest ? "https://kspay-prt.test.gifshow.com": "https://www.kuaishoupay.com",
TOAST_TEXT = {
    WITHDRAW_LIMIT: "您今天已提过现，请明天再来吧",
    KSCOIN_LIMIT: "今日兑换次数已用完，请明日再来哦",
    NOT_ENOUGH: "可兑换金额不足，看视频去赚钱，或购物赚钱",
    ALL_WITHDRAW_LIMIT: "最小提现金额为0.3元，继续去赚钱"
},
OPTIMIZE_WITHDRAW_TOAST_TEXT = {...TOAST_TEXT,
    NOT_ENOUGH: "余额不足，继续看视频吧",
    KSCOIN_LIMIT: "今日已提现，明天再来"
},
autoPVUrlMap = {
    "/nebula/task/profit": "MY_PROFIT",
    "/nebula/task/cash": "WITHDRAW_EXCHANGE",
    "/nebula/cash": "WITHDRAW_EXCHANGE",
    "/nebula/coin-exchange": "KWAI_COIN_EXCHANGE",
    "/nebula/daily-invite": "WEEKLY_COIN",
    "/nebula/widget-guide": "ADD_PHONE_DESKTOP",
    "/nebula/duct": "TO_DOWNLOAD_DUCT_PAGE",
    "/nebula/download": "NEBULA_DOWNLOAD_ENCOURAGE",
    "/nebula/error": "ENCOURAGE_ERROR",
    "/nebula/ios-cash-annouce": "IOS_ENCOURAGEH5_GUIDE",
    "/nebula/ios-cash-land": "IOS_ENCOURAGEH5_WITHDRAW_EXCHANGE",
    "/nebula/kscoin": "IOS_COIN_EXCHANGE",
    "/nebula/task/only-open-in-nebula": "OTHER_ENTER_DETAIL",
    "/nebula/setting": "WITHDRAW_CHOOSE_MONEY_CONTROL_DETAIL"
},
urlMap$1 = {
    "/nebula/task/earning": "NEW_TASK_CENTER",
    "/nebula/grow-level": "INCENTIVE_LEVEL_MAIN",
    "/nebula/live-task": "LIVE_WATCH",
    ...autoPVUrlMap
};
function getLogEnv$1() {
    return "production"
}
const logConfig$1 = {
    env: getLogEnv$1(),
    retries: 3,
    urlMap: urlMap$1,
    yoda: yoda$1,
    plugins: [new c({
        autoPVFilter(e) {
            const t = new BaseUrl(e);
            return Object.keys(autoPVUrlMap).includes(t.pathname)
        }
    })]
};
function getProductName$1() {
    return isInNebula$1() ? "NEBULA": isInKwai$1() ? "KUAISHOU": "GROWTH_OFF_APP_EXCLUSIVE"
}
var Ge, je, Ke;
const baseOptions$1 = {
    user_id: getUserId(),
    global_id: "",
    version_name: (Ge = api.get("appver")) != null ? Ge: "",
    product_name: getProductName$1(),
    channel: (je = api.get("c")) != null ? je: "",
    network_type: (Ke = api.get("net")) != null ? Ke: "unknown"
},
webLoggerV2 = new st(logConfig$1, baseOptions$1),
noAutoPVUrlPatterns = ["/nebula/task/earning"].map(e = >new RegExp(e)),
urlMap = {
    "/nebula/phone-bind-code": "INAPP_PRE_BIND_PHONE_H5",
    "/nebula/carve-up": "FISSION_CHECKIN_PAGE_H5",
    "/nebula/coin-center/home": "COIN_EXCHANGE_MALL",
    "/nebula/coin-center/profile": "MY_COIN_COUPON",
    "/nebula/activity-quiz-wechat": "OP_ACTIVITY_MATCH_FIGURES_GAME_MAIN",
    "/nebula/duct": "TO_DOWNLOAD_DUCT_PAGE",
    "/nebula/widget-guide": "ADD_PHONE_DESKTOP",
    "/nebula/live-task": "LIVE_WATCH",
    "/nebula/live-exchange": "LIVE_WATCH"
};
function getLogEnv() {
    return "production"
}
const logConfig = {
    env: getLogEnv(),
    retries: 3,
    urlMap,
    yoda: yoda$1,
    plugins: [new c({
        autoPVFilter(e) {
            const {
                pathname: t
            } = new BaseUrl(e);
            return ! noAutoPVUrlPatterns.some(n = >n.test(t))
        }
    })]
};
function getProductName() {
    return isInNebula$1() ? "NEBULA": isInKwai$1() ? "KUAISHOU": "GROWTH_OFF_APP_EXCLUSIVE"
}
var Ye, qe, Qe;
const baseOptions = {
    user_id: getUserId(),
    global_id: "",
    version_name: (Ye = api.get("appver")) != null ? Ye: "",
    product_name: getProductName(),
    channel: (qe = api.get("c")) != null ? qe: "",
    network_type: (Qe = api.get("net")) != null ? Qe: "unknown"
},
webLogger = new ze(logConfig, baseOptions);
var PVType = (e = >(e.ENTER = "enter", e.LEAVE = "leave", e.HIDDEN = "hidden", e.VISIBLE = "visible", e))(PVType || {});
function collectLog(e, t = "", n = {},
r = {}) {
    webLogger.collect(e, {
        action: t,
        params: n,
        contentPackage: r
    }),
    webLoggerV2.collect(e, {
        action: t,
        params: n,
        contentPackage: r
    })
}
function sendShow(e = "", t = {},
n = {}) {
    collectLog("SHOW", e, t, n)
}
function sendClick(e = "", t = {},
n = {}) {
    var r, o, a; (a = (o = (r = t.eventTrackingLogInfo) == null ? void 0 : r[0]) == null ? void 0 : o.extParams) != null && a.isServerRecordClickAction && actionReport({
        actionType: ActionType.CLICK,
        resourceSlotInfo: t.eventTrackingLogInfo[0]
    }),
    collectLog("CLICK", e, t, n)
}
function sendClickImmediately(e = "", t = {},
n = {}) {
    webLogger.sendImmediately("CLICK", {
        action: e,
        params: t,
        contentPackage: n
    }),
    webLoggerV2.sendImmediately("CLICK", {
        action: e,
        params: t,
        contentPackage: n
    })
}
function sendTask(e = "", t = {},
n = {
    type: "BACKGROUND_TASK_EVENT"
},
r = {}) {
    var o, a;
    webLogger.sendImmediately((o = n.taskOperation) != null ? o: "CLICK", {
        action: e,
        params: t,
        ...n,
        contentPackage: r
    }),
    webLoggerV2.sendImmediately((a = n.taskOperation) != null ? a: "CLICK", {
        action: e,
        params: t,
        ...n,
        contentPackage: r
    })
}
function updateUrlPageParams({
    page: e = "",
    params: t = {}
},
n = !1, r = !1) {
    const o = getUrlSearchParams();
    o.source && (t.source = o.source);
    const a = {
        params: t
    };
    e && (a.page = e),
    n || webLogger.updateCurrentUrlPackage(a),
    r || webLoggerV2.updateCurrentUrlPackage(a)
}
function sendPV(e, t = {},
n = "enter", r = {},
o = !1, a = !1) {
    typeof e == "string" && updateUrlPageParams({
        page: e,
        params: t
    },
    o, a),
    o || webLogger.collect("PV", {
        type: n,
        params: t,
        contentPackage: r
    }),
    a || webLoggerV2.collect("PV", {
        type: n,
        params: t,
        contentPackage: r
    })
}
function flush() {
    webLogger.flush(),
    webLoggerV2.flush()
}
function updateBase(e) {
    webLogger.updateBase(e),
    webLoggerV2.updateBase(e)
}
function updateCommonPackage(e) {
    webLogger.updateCommonPackage(e),
    webLoggerV2.updateCommonPackage(e)
}
const radar = new Radar({
    weblog: webLogger,
    lcp: !0,
    cls: !0,
    fid: !0,
    fcp: !0,
    projectId: window.location.pathname === "/nebula/task/earning" ? "6dda6b5add": "aaae068ee9",
    sampling: 1,
    customDimensions: {
        product_version: "c194a82",
        c_dimension1: api.get("c_dimension1"),
        c_dimension2: getUrlSearchParams().hyId
    },
    mainApi: "/rest/n/nebula/activity/earn/overview/basicInfo",
    APIHook(e) {
        const {
            response: t
        } = e,
        n = JSON.parse(t.data);
        return n.result !== 1 ? {
            response_code: n.result,
            response_msg: n.error_msg,
            custom_failed: !0,
            intercept_report: !1
        }: {
            intercept_report: !0
        }
    }
});
function sendFmp(e) {
    nextTick(() = >{
        radar.fmp(e)
    })
}
function sendDimensions(e = "NULL", t = "c_dimension1") {
    radar.setDimensions({ [t] : e
    })
}
function sendEvent(e, t = {}) {
    radar.event(e, t)
}
const core = radar.core;
class Listener {
    constructor({
        el: t,
        value: n,
        options: r
    }) {
        q(this, "el");
        q(this, "value");
        q(this, "isDone", !1);
        q(this, "options");
        q(this, "io");
        this.el = t,
        this.value = n,
        this.options = r,
        this.io = this.createIntersectionObserver(t)
    }
    createIntersectionObserver(t) {
        if (!isInBrowser$1) return null;
        this.io && (this.io.disconnect(), this.io = null);
        const n = new IntersectionObserver(r = >{
            r != null && r.length && (this.options.multiple && (this.isDone = !1), r.some(o = >o.isIntersecting) && (this.do(), !this.options.multiple && n && this.destroy()), r[0].isIntersecting && this.do())
        },
        {
            threshold: .1
        });
        return n.observe(t),
        n
    }
    do() {
        var t, n, r;
        this.isDone || (sendShow((t = this.value) == null ? void 0 : t.action, (n = this.value) == null ? void 0 : n.params, (r = this.value) == null ? void 0 : r.contentPackage), this.isDone = !0)
    } update ( t , n ) {
        this.io = this.createIntersectionObserver(t),
        this.el = t,
        this.value = n,
        this.isDone = !1
    }
    updateValue(t) {
        this.value = t
    }
    destroy() {
        this.io && this.io.disconnect()
    }
}
class Show {
    constructor({
        throttleTime: t,
        primaryKey: n
    } = {}) {
        q(this, "listenerQueue", []);
        q(this, "options");
        this.options = {
            throttleTime: t != null ? t: 200,
            primaryKey: n
        }
    }
    add(t, n, r) {
        const o = this.listenerQueue.find(i = >i.el === t);
        if (o) {
            o.update(t, n);
            return
        }
        const a = new Listener({
            el: t,
            value: n,
            options: r
        });
        this.listenerQueue.push(a)
    }
    update(t, n, r) {
        if (!this.listenerQueue.length) return;
        const o = this.listenerQueue.find(a = >a.el === t);
        if (this.options.primaryKey && n && r && n[this.options.primaryKey] === r[this.options.primaryKey]) {
            o && o.updateValue(n);
            return
        }
        o && n && o.update(t, n)
    }
    updateAll() {
        this.listenerQueue.forEach(t = >{
            t.el && t.value && t.update(t.el, t.value)
        })
    }
    remove(t) {
        const n = this.listenerQueue.findIndex(r = >r.el === t);
        n > -1 && this.listenerQueue.splice(n, 1)[0].destroy()
    }
}
const show = new Show({
    primaryKey: "show_id"
});
function sendClickLog(e) {
    sendClick(e.action, e.params, e.contentPackage)
}
function resetShowLog() {
    show.updateAll()
}
const bindTypeMap = {
    show(e, t, n) {
        show.add.bind(show)(e, t, n)
    },
    click(e, t) {
        e.onclick = () = >{
            sendClickLog(t)
        }
    }
},
updateTypeMap = {
    show(e, t, n) {
        show.update.bind(show)(e, t, n)
    },
    click(e, t) {
        e.onclick = () = >{
            sendClickLog(t)
        }
    }
},
unbindTypeMap = {
    show(e) {
        show.remove.bind(show)(e)
    },
    click(e) {
        e.onclick = null
    }
},
logDirective = {
    bind(e, t) {
        t.modifiers.show && bindTypeMap.show(e, t.value, t.modifiers),
        t.modifiers.click && bindTypeMap.click(e, t.value)
    },
    update(e, t) {
        const n = t.modifiers.show ? "show": t.modifiers.click ? "click": "",
        r = updateTypeMap[n];
        r && r(e, t.value, t.oldValue)
    },
    unbind(e, t) {
        const n = t.modifiers.show ? "show": t.modifiers.click ? "click": "",
        r = unbindTypeMap[n];
        r && r(e)
    }
},
KS_APP_LIST = ["Yoda", "Kwai", "Kwai_Lite", "Kwai_Pro", "ksthanos", "ksNebula", "ksnebula"];
function isInWebview(e = navigator.userAgent) {
    return KS_APP_LIST.some(t = >e.toLowerCase().includes(t.toLowerCase()))
}
function isInIOS(e = navigator.userAgent) {
    return /iPhone|iPad|iPod/i.test(e)
}
function isInNebula(e = navigator.userAgent) {
    return /ksNebula/i.test(e)
}
function isInKwai(e = navigator.userAgent) {
    return /(Kwai(_\w+)?|ksthanos)\//i.test(e)
}
function compareVersion(e, t) {
    let n = e.split(".").map(a = >+a),
    r = t.split(".").map(a = >+a);
    const o = Math.max(n.length, r.length);
    n = n.concat(new Array(o - n.length).fill(0)).map(a = >Number(a)),
    r = r.concat(new Array(o - r.length).fill(0)).map(a = >Number(a));
    for (let a = 0; a < o; a++) {
        if (n[a] < r[a]) return "lt";
        if (n[a] > r[a]) return "gt"
    }
    return "eq"
}
function uaGetInfo() {
    var n;
    const e = (n = window.navigator.userAgent.match(/([a-zA-Z]+)\/(\S+)(:\s)?/g)) != null ? n: [],
    t = {};
    for (const r of e) {
        const o = r.split("/"),
        a = o[0].toLowerCase();
        t[a] = o[1].split(",")[0]
    }
    return t
}
const iosSafeMaxHeight = 38;
function isAtFourTab() {
    const {
        tbht: e,
        ftsfht: t
    } = uaGetInfo();
    return !! (t != null ? t: e)
}
function isAtLayoutType4() {
    return window.location.search.includes("layoutType=4")
}
function isAtLiveWebView() {
    return window.location.search.includes("layoutType=3")
}
function getBrowserType() {
    var e;
    return (e = api.get("browseType")) != null ? e: "0"
}
function getNewBottomAreaHeight() {
    const {
        fbsfht: e
    } = uaGetInfo();
    return e !== void 0 ? Number(e) / window.devicePixelRatio: -1
}
function isInImmersiveTab() {
    if (isAtFourTab() && getNewBottomAreaHeight() > -1) {
        const e = getNewBottomAreaHeight(),
        t = getBrowserType();
        if (isInIOS()) {
            if (t === "3") return e < iosSafeMaxHeight;
            if (t === "4") return e > 0
        } else return e === 0
    }
    return ! 1
}
function getPhoneModelFromCookie() {
    return api.get("mod")
}
function getPhoneModel(e) {
    const t = e != null ? e: getPhoneModelFromCookie();
    if (t) {
        const n = t.split(",");
        if (n[0] !== void 0) return {
            main: +n[0].replace(/\D/g, ""),
            sub: n[1] ? +n[1] : 0
        }
    }
    return {
        main: 0,
        sub: 0
    }
}
function noSafeAreaInsetBottom() {
    if (!isInIOS()) return ! 1;
    const {
        main: e,
        sub: t
    } = getPhoneModel();
    return e > 0 ? e < 10 || e === 10 && t !== 3 && t !== 6 || e === 12 && t === 8 : !1
}
function getBottomSafeAreaHeight() {
    return noSafeAreaInsetBottom() ? 0 : 34
}
const IOSStatusBarDefaultHeightsMap = {
    48 : ["iPhone11,8", "iPhone12,1"],
    47 : ["iPhone13,2", "iPhone13,3", "iPhone13,4", "iPhone14,2", "iPhone14,3", "iPhone14,4", "iPhone14,5"],
    44 : ["iPhone10,3", "iPhone10,6", "iPhone11,2", "iPhone11,6", "iPhone11,4", "iPhone12,3", "iPhone12,5", "iPhone13,1"],
    30 : ["iPhone7,1", "iPhone8,2", "iPhone9,2", "iPhone9,4", "iPhone10,2", "iPhone10,5"]
};
function findKeyByValue(e, t) {
    return Object.keys(e).find(n = >e[n].includes(t))
}
function getIOSDefaultStatusBarHeight() {
    var e, t;
    return (t = findKeyByValue(IOSStatusBarDefaultHeightsMap, (e = getPhoneModelFromCookie()) != null ? e: "")) != null ? t: "20"
}
function getTopAreaHeight() {
    const {
        tbht: e,
        ftsfht: t,
        statusht: n
    } = uaGetInfo();
    let r = 0;
    return e !== void 0 || t !== void 0 ? r = Number(t != null ? t: e) / window.devicePixelRatio: Number(n) !== 0 && !isAtLiveWebView() ? r = Number(n) : isAtLayoutType4() && (r = +getIOSDefaultStatusBarHeight()),
    r
}
let statusBarHeight = -1,
bottomSafeHeight = -1;
const toolBarHeight = 0,
bottomHeight = bottomSafeHeight;
function getAllBarValues() {
    statusBarHeight = getTopAreaHeight(),
    bottomSafeHeight = getBottomSafeAreaHeight()
}
function useBarInfo() {
    return (statusBarHeight < 0 || bottomSafeHeight < 0) && getAllBarValues(),
    {
        statusBarHeight,
        toolBarHeight,
        bottomSafeHeight,
        bottomHeight
    }
}
var Je; (Je = window.ENV_INFO) != null && Je.islp;
var Xe; (Xe = window.ENV_INFO) != null && Xe.icfo;
const searchParams = new URLSearchParams(window.location.search);
searchParams.get("islp");
function isNotNil(e) {
    return e != null
}
function debounce$2(e, t = 200, n = !0) {
    let r;
    return function(...a) {
        r == null && n && e.apply(this, a),
        r != null && clearTimeout(r),
        r = setTimeout(() = >{
            r = null,
            n || e.apply(this, a)
        },
        t)
    }
}
function throttle$2(e, t = 0, n = !1) {
    let r;
    return function(...a) {
        if (r != null) return;
        n && e.apply(this, a),
        r = setTimeout(function() {
            r = null,
            n || e.apply(this, a)
        },
        t)
    }
}
function fillZero(e) {
    return e < 10 ? "0".concat(e) : e.toString()
}
function transformMsToString(e, t = "yyyy-MM-dd HH:mm:ss", n = 8) {
    let r = new Date(e);
    const a = r.getTimezoneOffset() / 60 + n,
    i = e + a * 60 * 60 * 1e3;
    r = new Date(i);
    const s = r.getFullYear(),
    u = r.getMonth() + 1,
    l = fillZero(u),
    f = r.getDate(),
    p = fillZero(f),
    d = fillZero(r.getHours()),
    _ = fillZero(r.getMinutes()),
    y = fillZero(r.getSeconds());
    return t.replace("yyyy", s.toString()).replace("MM", l).replace("M", u.toString()).replace("dd", p).replace("d", f.toString()).replace("HH", d).replace("mm", _).replace("ss", y)
}
const easing = {
    linear(e) {
        return e
    },
    ease(e) {
        return.5 * (1 - Math.cos(Math.PI * e))
    },
    easeInQuad(e) {
        return e * e
    },
    easeOutQuad(e) {
        return e * (2 - e)
    },
    easeInOutQuad(e) {
        return e < .5 ? 2 * e * e: -1 + (4 - 2 * e) * e
    },
    easeInCubic(e) {
        return e * e * e
    },
    easeOutCubic(e) {
        return--e * e * e + 1
    },
    easeInOutCubic(e) {
        return e < .5 ? 4 * e * e * e: (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
    },
    easeInQuart(e) {
        return e * e * e * e
    },
    easeOutQuart(e) {
        return 1 - --e * e * e * e
    },
    easeInOutQuart(e) {
        return e < .5 ? 8 * e * e * e * e: 1 - 8 * --e * e * e * e
    },
    easeInQuint(e) {
        return e * e * e * e * e
    },
    easeOutQuint(e) {
        return 1 + --e * e * e * e * e
    },
    easeInOutQuint(e) {
        return e < .5 ? 16 * e * e * e * e * e: 1 + 16 * --e * e * e * e * e
    }
},
SCROLL_TIME = 250;
function step(e) {
    let n = (Date.now() - e.startTime) / e.duration;
    n = n > 1 ? 1 : n;
    const r = easing[e.timingFunction](n);
    if (e.direction === "y") {
        const o = e.start + e.offset * r;
        e.el.scrollTop = o
    } else {
        const o = e.start + (e.offset - e.start) * r;
        e.el.scrollLeft = o
    }
    n < 1 ? window.requestAnimationFrame(step.bind(window, e)) : e.onEnd && e.onEnd()
}
function scrollTo(e, t) {
    const n = Date.now(),
    r = {
        direction: "x",
        timingFunction: "ease",
        duration: SCROLL_TIME,
        ...t
    },
    o = r.direction === "y" ? e.scrollTop: e.scrollLeft,
    {
        direction: a,
        offset: i,
        timingFunction: s,
        duration: u,
        onEnd: l
    } = r;
    step({
        el: e,
        startTime: n,
        start: o,
        direction: a,
        offset: i,
        timingFunction: s,
        duration: u,
        onEnd: l
    })
}
function sleep(e = 0) {
    return new Promise(t = >{
        setTimeout(() = >{
            t()
        },
        e)
    })
}
const unbindObserver = e = >{
    var t, n; (t = e.$currentObserver) == null || t.unobserve(e),
    (n = e.$currentObserver) == null || n.disconnect()
},
bindObserver = (e, t, n, r) = >{
    const o = new IntersectionObserver(i = >{
        if (i.length > 0) {
            const s = i[i.length - 1];
            s && (s.isIntersecting ? t() : n == null || n())
        }
    },
    r);
    o.observe(e);
    const a = e;
    a.$currentObserver = o
};
function loadImage(e, t) {
    const n = e;
    return new Promise((r, o) = >{
        n.onload = () = >{
            r(n)
        },
        n.onerror = () = >{
            o(t)
        },
        n.src = t
    })
}
function retry(e, t, n = 3) {
    let r = n - 1;
    return new Promise((o, a) = >{
        function i() {
            e.apply(null, [...t]).then(s = >{
                o(s)
            }).
            catch(s = >{
                r > 0 ? (i(), r--) : a(s)
            })
        }
        i()
    })
}
async
function retryLoadImage(e, t, n, r = 1, o, a) {
    const i = e;
    try {
        await retry(loadImage, [i, t], r) && (o == null || o())
    } catch(s) {
        i.src = n,
        a == null || a()
    }
}
function useDomListener(e, t, n, r) {
    let o = null;
    onMounted(() = >{
        var a;
        o = e(),
        isRef(o) ? (a = o.value) == null || a.addEventListener(t, n, r) : o.addEventListener(t, n, r)
    }),
    onBeforeUnmount(() = >{
        var a;
        isRef(o) ? (a = o.value) == null || a.removeEventListener(t, n, r) : o && o.removeEventListener(t, n, r),
        o = null
    })
}
function useIntersectionObservable(e, t, n, r) {
    onMounted(() = >{
        e.value && bindObserver(e.value, t, n, r)
    }),
    onBeforeUnmount(() = >{
        e.value && unbindObserver(e.value)
    })
}
function useRouter() {
    return getCurrentInstance().proxy.$root.$router
}
function useRouterBack() {
    const e = useRouter();
    return function() {
        isInWebview() ? window.location.href.includes("useRouterPush") ? e.back() : invoke("webview.popBack") : e.back()
    }
}
const pageVisibilityChangeListeners = [];
function addListenerForPageVisibilityChange(e) {
    let t = !0,
    n = !1;
    function r(p) {
        pageVisibilityChangeListeners.forEach(d = >{
            d(p)
        })
    }
    function o() {
        n = !0,
        r(!1)
    }
    function a() {
        n = !1,
        r(!0)
    }
    function i() {
        t && r(!0)
    }
    function s() {
        r(!1)
    }
    function u() {
        const p = document.visibilityState === "visible";
        n || (t = p, r(p))
    }
    let l = 0;
    function f() {
        if (l + 500 > Date.now()) {
            l = Date.now();
            return
        }
        l = Date.now(),
        t || (r(!0), t = !0)
    }
    return pageVisibilityChangeListeners.includes(e) || pageVisibilityChangeListeners.push(e),
    pageVisibilityChangeListeners.length === 1 && (document.addEventListener("touchstart", f), isInWebview() ? (addListener$1("native_leave", o), addListener$1("native_reentry", a), isInIOS() || (addListener$1("native_foreground", i), addListener$1("native_background", s), window.addEventListener("visibilitychange", u))) : window.addEventListener("visibilitychange", u)),
    function() {
        const d = pageVisibilityChangeListeners.indexOf(e);
        d > -1 && pageVisibilityChangeListeners.splice(d, 1),
        !(pageVisibilityChangeListeners.length > 0) && (document.removeEventListener("touchstart", f), isInWebview() ? (removeListener$1("native_leave", o), removeListener$1("native_reentry", a), isInIOS() || (removeListener$1("native_foreground", i), removeListener$1("native_background", s), window.removeEventListener("visibilitychange", u))) : window.removeEventListener("visibilitychange", u))
    }
}
const[provideVisibility, injectVisibility] = createInjectionState(() = >{
    const e = ref$1(document.visibilityState === "visible");
    return addListenerForPageVisibilityChange(n = >{
        n !== e.value && (e.value = n)
    }),
    {
        visible: e,
        useVisibilityChange: n = >{
            watch(e, r = >{
                n(r)
            })
        }
    }
}),
imageTypes = ["jpg", "jpeg", "png", "gif", "svg", "webp", "pjpeg", "apng"],
audioTypes = ["mp3", "wav"],
sourceCache = {},
sources = [{
    type: "image",
    includes: imageTypes,
    loader: async(e, t = {}) = >(sourceCache[e] || (sourceCache[e] = new Promise(n = >{
        const {
            crossOrigin: r = !0,
            timeout: o
        } = t;
        console.log("image source:", e);
        const a = new Image;
        r && (a.crossOrigin = "anonymous"),
        a.onload = () = >{
            n(!0)
        },
        a.onerror = () = >{
            n(!1)
        },
        a.src = e,
        o !== void 0 && sleep(o).then(() = >{
            n(!1)
        })
    })), sourceCache[e])
},
{
    type: "audio",
    includes: audioTypes,
    loader: async(e, t) = >(sourceCache[e] || (sourceCache[e] = new Promise(n = >{
        fetch(e).then(() = >{
            n(!0)
        }).
        catch(() = >{
            n(!1)
        }),
        (t == null ? void 0 : t.timeout) !== void 0 && sleep(t == null ? void 0 : t.timeout).then(() = >{
            n(!1)
        })
    })), sourceCache[e])
},
{
    type: "model",
    includes: ["glb", "gltf"],
    loader: async(e, t) = >(sourceCache[e] || (sourceCache[e] = new Promise(n = >{
        fetch(e).then(() = >{
            n(!0)
        }).
        catch(() = >{
            n(!1)
        }),
        (t == null ? void 0 : t.timeout) !== void 0 && sleep(t == null ? void 0 : t.timeout).then(() = >{
            n(!1)
        })
    })), sourceCache[e])
},
{
    type: "magic",
    includes: ["magic"],
    loader: async(e, t = {}) = >(sourceCache[e] || (sourceCache[e] = new Promise(n = >{
        const r = Number(e.replace(".magic", ""));
        Number.isNaN(r) && n(!1),
        invoke("post.preloadMagicFace", {
            magicFaceID: r
        }).then(() = >{
            n(!0)
        }).
        catch(() = >{
            n(!1)
        }),
        (t == null ? void 0 : t.timeout) !== void 0 && sleep(t == null ? void 0 : t.timeout).then(() = >{
            n(!1)
        })
    })), sourceCache[e])
},
{
    type: "video",
    includes: ["mp4"],
    loader: async(e, t) = >(sourceCache[e] || (sourceCache[e] = new Promise(n = >{
        fetch(e).then(() = >{
            n(!0)
        }).
        catch(() = >{
            n(!1)
        }),
        (t == null ? void 0 : t.timeout) !== void 0 && sleep(t == null ? void 0 : t.timeout).then(() = >{
            n(!1)
        })
    })), sourceCache[e])
}],
loadSourceByType = (e, t) = >new Promise(async n = >{
    var o, a;
    const r = (o = e.split(".").pop()) != null ? o: "";
    if (!r) {
        n({
            success: !1,
            source: e
        });
        return
    }
    try {
        const i = (a = sources.find(s = >s.includes.includes(r))) == null ? void 0 : a.loader;
        if (i) {
            n({
                success: await i(e, t),
                source: e
            });
            return
        }
        n({
            success: void 0,
            source: e
        })
    } catch(i) {
        console.log("load error:", i),
        n({
            success: !1,
            source: e
        });
        return
    }
}),
preloadSource = (e, t = {}) = >{
    var r;
    const {
        lpDisable: n = !1
    } = t;
    return n && ((r = window.ENV_INFO) != null && r.islp) ? Promise.resolve({
        done: !0,
        detail: []
    }) : Array.isArray(e) ? new Promise(async o = >{
        if (e.length === 0) {
            o({
                done: !0,
                detail: []
            });
            return
        }
        const a = await Promise.all(e.map(i = >loadSourceByType(i, t)));
        o({
            done: !0,
            detail: a
        })
    }) : preloadSource([e], t)
},
_sfc_main$p = {};
var _sfc_render$p = function e() {
    var t = this,
    n = t._self._c;
    return n("svg", {
        staticClass: "infinity-loading",
        attrs: {
            width: "80",
            height: "80",
            viewBox: "0 0 80 80",
            xmlns: "http://www.w3.org/2000/svg"
        }
    },
    [n("path", {
        attrs: {
            "stroke-dasharray": "160",
            "stroke-linecap": "round",
            d: "M40 40l8.201-8.201c4.53-4.53 11.873-4.53 16.402 0A11.598 11.598 0 0 1 68 40c0 6.405-5.193 11.598-11.598 11.598a11.598 11.598 0 0 1-8.201-3.397L40 40l-8.201-8.201c-4.53-4.53-11.873-4.53-16.402 0A11.598 11.598 0 0 0 12 40c0 6.405 5.193 11.598 11.598 11.598 3.076 0 6.026-1.222 8.201-3.397L40 40z",
            stroke: "currentColor",
            "stroke-width": "7",
            fill: "none",
            "fill-rule": "evenodd"
        }
    },
    [n("animate", {
        attrs: {
            id: "b",
            attributeName: "stroke-dashoffset",
            begin: "0s;a.end",
            dur: "500ms",
            from: "0",
            to: "155",
            calcMode: "linear"
        }
    }), n("animate", {
        attrs: {
            id: "a",
            attributeName: "stroke-dashoffset",
            begin: "b.end",
            dur: "500ms",
            from: "165",
            to: "320",
            calcMode: "linear"
        }
    })])])
},
_sfc_staticRenderFns$p = [],
__component__$p = normalizeComponent(_sfc_main$p, _sfc_render$p, _sfc_staticRenderFns$p, !1, null, null, null, null);
const InfinityLoading$1 = __component__$p.exports,
_sfc_main$o = defineComponent({
    __name: "index",
    props: {
        type: {
        default:
            "infinity"
        },
        colorful: {
            type: Boolean,
        default:
            !0
        },
        customColor: null,
        fullscreen: {
            type: Boolean
        },
        stayCenter: {
            type: Boolean
        }
    },
    setup(e) {
        const t = e,
        n = computed(() = >t.type.includes("circle")),
        r = computed(() = >["circle", t.type === "circle" && t.colorful && "circle-dark"]),
        o = computed(() = >["infinity", t.colorful && "infinity-colorful"]),
        a = computed(() = >t.customColor ? {
            color: t.customColor
        }: {}),
        i = computed(() = >[t.fullscreen && "loading-fullscreen loading-center", t.stayCenter && "loading-center"]);
        return {
            __sfc: !0,
            props: t,
            isCircle: n,
            circleType: r,
            infinityType: o,
            infinityColor: a,
            loadingType: i,
            InfinityLoading: InfinityLoading$1
        }
    }
});
var _sfc_render$o = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return r.isCircle ? n("span", {
        class: r.circleType
    }) : n("span", {
        class: r.loadingType
    },
    [n(r.InfinityLoading, {
        class: r.infinityType,
        style: r.infinityColor
    })], 1)
},
_sfc_staticRenderFns$o = [],
__component__$o = normalizeComponent(_sfc_main$o, _sfc_render$o, _sfc_staticRenderFns$o, !1, null, "6a5fca7e", null, null);
const InfinityLoading = __component__$o.exports,
__default__$1 = {
    name: "BaseButton"
},
_sfc_main$n = defineComponent({...__default__$1,
    props: {
        type: {
        default:
            "primary"
        },
        disabled: {
            type: Boolean,
        default:
            !1
        },
        looksLikeDisabled: {
            type: Boolean,
        default:
            !1
        },
        loading: {
            type: Boolean,
        default:
            !1
        },
        animation: {
            type: Boolean,
        default:
            !1
        },
        size: {
        default:
            "l"
        },
        debounce: {
        default:
            200
        },
        breathing: {
            type: Boolean
        },
        border: {
            type: Boolean
        },
        colorfulLoading: {
            type: Boolean
        }
    },
    emits: ["click"],
    setup(e, {
        emit: t
    }) {
        const n = e,
        r = computed(() = >n.type === "plain" || n.colorfulLoading),
        o = computed(() = >["btn-main-box", "btn-".concat(n.type)]),
        a = computed(() = >["btn-size-".concat(n.size), n.border === !0 && "btn-border", (n.disabled || n.looksLikeDisabled) && "btn-disabled", n.loading && "btn-loading", n.animation && "btn-animation", n.breathing === !0 && "btn-breathing"]);
        function i(u) {
            n.disabled || n.loading ? u.preventDefault() : t("click", u)
        }
        const s = debounce$2(i, n.debounce);
        return {
            __sfc: !0,
            props: n,
            colorfulLoading: r,
            btnClasses: o,
            btnStatus: a,
            emit: t,
            clickHandle: i,
            debounceClick: s,
            Loading: InfinityLoading
        }
    }
});
var _sfc_render$n = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("span", {
        staticClass: "btn-wrapper",
        class: r.btnStatus,
        attrs: {
            role: "button"
        },
        on: {
            click: r.debounceClick
        }
    },
    [n("span", {
        class: r.btnClasses
    },
    [t.animation ? n("span", {
        staticClass: "btn-shine-box"
    },
    [n("span", {
        staticClass: "btn-shine"
    })]) : t._e(), t.$slots.sup ? n("span", [t._t("sup")], 2) : t._e(), t.loading ? n(r.Loading, {
        staticClass: "loading",
        attrs: {
            type: "circle",
            colorful: r.colorfulLoading
        }
    }) : n("span", {
        staticClass: "btn-words"
    },
    [t.$slots.icon ? n("span", {
        staticClass: "btn-icon"
    },
    [t._t("icon")], 2) : t._e(), t._t("default"), t.$slots.plugin ? n("span", {
        staticClass: "btn-words-plugin"
    },
    [t._t("plugin")], 2) : t._e()], 2)], 1)])
},
_sfc_staticRenderFns$n = [],
__component__$n = normalizeComponent(_sfc_main$n, _sfc_render$n, _sfc_staticRenderFns$n, !1, null, "f690c6b1", null, null);
const Button = __component__$n.exports,
__default__ = {
    name: "BaseTransition",
    inheritAttrs: !1
},
_sfc_main$m = defineComponent({...__default__,
    props: {
        name: {
        default:
            "fade"
        },
        duration: null,
        delay: null,
        appear: {
            type: Boolean
        }
    },
    emits: ["before-enter", "enter", "after-enter", "before-leave", "leave", "after-leave"],
    setup(e, {
        emit: t
    }) {
        const n = e,
        r = computed(() = >{
            var p, d, _, y;
            return {
                enter: (d = (p = n.duration) == null ? void 0 : p.enter) != null ? d: 233,
                leave: (y = (_ = n.duration) == null ? void 0 : _.leave) != null ? y: 150
            }
        });
        function o(p, d, _) {
            const y = p;
            y.style.transitionDelay = d > 0 ? "".concat(d, "ms") : "",
            y.style.animationDelay = d > 0 ? "".concat(d, "ms") : "",
            y.style.transitionDuration = "".concat(_ - d, "ms"),
            y.style.animationDuration = "".concat(_ - d, "ms")
        }
        function a(p) {
            var d, _;
            p instanceof HTMLElement && (o(p, (_ = (d = n.delay) == null ? void 0 : d.enter) != null ? _: 0, r.value.enter), t("before-enter"))
        }
        function i(p) {
            var d, _;
            p instanceof HTMLElement && (o(p, (_ = (d = n.delay) == null ? void 0 : d.leave) != null ? _: 0, r.value.leave), t("before-leave"))
        }
        function s() {
            t("enter")
        }
        function u() {
            t("after-enter")
        }
        function l() {
            t("leave")
        }
        function f() {
            t("after-leave")
        }
        return {
            __sfc: !0,
            props: n,
            emit: t,
            computedDuration: r,
            setStyle: o,
            beforeEnter: a,
            beforeLeave: i,
            enter: s,
            afterEnter: u,
            leave: l,
            afterLeave: f
        }
    }
});
var _sfc_render$m = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("Transition", t._b({
        attrs: {
            appear: t.appear,
            name: t.name,
            duration: r.computedDuration
        },
        on: {
            "before-enter": r.beforeEnter,
            enter: r.enter,
            "after-enter": r.afterEnter,
            "before-leave": r.beforeLeave,
            leave: r.leave,
            "after-leave": r.afterLeave
        }
    },
    "Transition", t.$attrs, !1), [t._t("default")], 2)
},
_sfc_staticRenderFns$m = [],
__component__$m = normalizeComponent(_sfc_main$m, _sfc_render$m, _sfc_staticRenderFns$m, !1, null, "4a06d3b1", null, null);
const SFTransition = __component__$m.exports,
rootValue = 100,
targetViewWidth = 414,
maxViewWidth = 560;
function px2rem(e) {
    if (typeof e != "number") throw new Error("px2rem: px must be a number");
    return "".concat(e / rootValue, "rem")
}
function getViewRatio(e, t) {
    if (typeof e != "number" && typeof t != "number") return () = >1;
    const n = Math.min(document.documentElement.clientWidth, maxViewWidth) / e;
    return () = >n
}
function transViewValue(e) {
    if (typeof e != "number") return 0;
    const t = getViewRatio(targetViewWidth, maxViewWidth);
    return e * t()
}
async
function yodaCanIUse$1(e) {
    const t = e.split(".");
    if (t.length < 2) return ! 1;
    try {
        return (await invoke("tool.canIUse", {
            namespace: t[0],
            name: t[1]
        })).canUse
    } catch(n) {
        return ! 1
    }
}
const tabBarHeightKey = "tab_bar_height",
defaultTabBarHeight = 44;
async
function getTabBarHeight() {
    try {
        if (localStorage != null && localStorage.getItem(tabBarHeightKey)) return Number(localStorage.getItem(tabBarHeightKey));
        const {
            data: e
        } = await invoke("webview.getDeviceInfo");
        if (e != null && e.titleBarHeight) {
            const t = window.devicePixelRatio,
            n = e.titleBarHeight / t;
            return localStorage == null || localStorage.setItem(tabBarHeightKey, "".concat(n)),
            n
        }
    } catch(e) {}
    return defaultTabBarHeight
}
var Ze;
const isTabContainer = ((Ze = new URLSearchParams(window.location.search)) == null ? void 0 : Ze.get("isTabContainer")) === "1";
var TabStyleType = (e = >(e[e.DEFAULT = 0] = "DEFAULT", e[e.ENCOURAGE_UP_SLIDE = 1] = "ENCOURAGE_UP_SLIDE", e[e.DARK_BACKGROUND = 2] = "DARK_BACKGROUND", e[e.NONE = 3] = "NONE", e[e.SHOW = 4] = "SHOW", e))(TabStyleType || {});
const useTabBarHideStatus = createGlobalState(() = >{
    const e = ref$1(0),
    t = ref$1(null),
    n = ref$1(!1),
    r = ref$1(null),
    o = injectVisibility(),
    {
        useVisibilityChange: a,
        visible: i
    } = o != null ? o: {};
    n.value = !!i || !0,
    a == null || a(p = >{
        n.value = p,
        p && t.value ? s(t.value) : t.value = r.value
    });
    const s = p = >{
        if (!n.value) {
            t.value = p;
            return
        }
        if (e.value > 0 && p !== 3) {
            t.value = p;
            return
        }
        return yodaCanIUse$1("growth.changedTabPageStyle").then(d = >{
            d && (invoke("growth.changedTabPageStyle", {
                style: p
            }).
            catch(() = >{}), r.value = p)
        })
    };
    return {
        hideTabBar: () = >{
            e.value++,
            e.value === 1 && s(3)
        },
        showTabBar: async() = >{
            e.value--,
            e.value === 0 && (await s(4), t.value && await s(t.value)),
            e.value = Math.max(0, e.value)
        },
        resetTabStatus: () = >{
            e.value = 0,
            t.value = null
        },
        changeTabBar: s
    }
}),
changeTabBarStyle = e = >{
    const {
        changeTabBar: t
    } = useTabBarHideStatus();
    t(e)
},
useInitTabContainerWatch = e = >{
    const {
        hideTabBar: t,
        showTabBar: n
    } = useTabBarHideStatus(),
    r = watch(e, (o, a) = >{
        isTabContainer && a !== o && !(a === void 0 && o === !1) && (e.value ? t() : n())
    },
    {
        immediate: !0
    });
    onBeforeUnmount(() = >{
        e.value && isTabContainer && n(),
        r()
    })
},
useInitTabContainerMount = () = >{
    const {
        hideTabBar: e,
        showTabBar: t
    } = useTabBarHideStatus();
    onBeforeMount(() = >{
        isTabContainer && e()
    }),
    onBeforeUnmount(() = >{
        isTabContainer && t()
    })
},
couponParamNameMap = {
    couponId: "coinBuyerCouponId",
    shouldAutoExchange: "autoExchangeCoinCoupon"
};
function getCookie$1(e) {
    for (var t = document.cookie.split("; "), n, r = 0; r < t.length; r++) if (n = t[r].split("="), n[0] == e) return unescape(n[1] || "");
    return ""
}
function objToQuerystring(e) {
    var t = "?",
    n;
    if (!e) return t;
    for (n in e) t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&";
    return t.slice(0, -1)
}
function getDeviceHeightAndWidth() {
    var e = {
        dph: window && window.screen && window.screen.availHeight || 1,
        dpw: window && window.screen && window.screen.availWidth || 1
    };
    return window.devicePixelRatio !== void 0 && (e.dph *= window.devicePixelRatio, e.dpw *= window.devicePixelRatio),
    e
}
function extend(e, t) {
    if (!t) return e;
    var n;
    for (n in t) e[n] = t[n];
    return e
}
function makeUrlRequest(e) {
    if (!e) return ! 1;
    var t = new Image;
    return t.src = e,
    t = null,
    !0
}
function getSettingsFromScriptElement() {
    var e = {},
    t = document.getElementsByTagName("script"),
    n = t[t.length - 1];
    if (!n || !n.attributes) return e;
    var r = {
        "data-autopv": "autoPV",
        "data-bdpv": "sendBdPV",
        "data-pv-rate": "pvSampleRate",
        "data-perf-rate": "perfSampleRate",
        "data-error-rate": "errorSampleRate",
        "data-all-rate": "allSampleRate",
        "data-perf-type": "perfType",
        "data-page-tag": "pageTag",
        "data-biz-name": "bizName",
        "data-rate": 0
    };
    function o(p) {
        return p === "true" ? !0 : p === "false" ? !1 : isNaN(p) ? p: parseFloat(p)
    }
    var a = n.attributes,
    i = a["data-rate"];
    if (i && i.value && i.value.length) {
        var s = i.value.split(",");
        isNaN(s[0]) || (e.pvSampleRate = parseFloat(s[0])),
        isNaN(s[1]) || (e.perfSampleRate = parseFloat(s[1])),
        isNaN(s[2]) || (e.errorSampleRate = parseFloat(s[2])),
        isNaN(s[3]) || (e.allSampleRate = parseFloat(s[3]))
    }
    for (var u in a) {
        var l = a[u].name,
        f = r[l];
        f && (e[f] = o(a[u].value))
    }
    return e
}
var scriptSettings = getSettingsFromScriptElement(),
defaultConfig = {
    isDebug: /127\.0|localhost|test\./i.test(location.hostname),
    actionUrl: "//wlog.kuaishou.com/rest/n/log/web/collect",
    autoPV: !0,
    sendBdPV: !1,
    bizName: "",
    pageTag: "",
    sessionId: "",
    perfType: 1,
    pvSampleRate: 1,
    perfSampleRate: 1,
    errorSampleRate: 1,
    allSampleRate: 1
},
clonedConfig = JSON.parse(JSON.stringify(defaultConfig)),
config = extend(clonedConfig, scriptSettings);
function collectPagePerformance() {
    var e = window.performance && window.performance.timing;
    if (!e || !e.navigationStart || config.perfType === 0) return ! 1;
    var t = [],
    n = function(r, o, a) {
        isNaN(a) && (a = e.navigationStart);
        var i = parseInt(o - a, 10);
        r && i >= 0 && i < 300 * 1e3 && t.push({
            name: r,
            duration: i
        })
    };
    switch (config.perfType) {
    case 1:
        n("loadEventEnd", e.loadEventEnd);
        break;
    case 2:
        n("dnsLookup", e.domainLookupEnd, e.domainLookupStart),
        n("connect", e.connectEnd, e.connectStart),
        location.protocol === "https:" && n("sslConnect", e.connectEnd, e.secureConnectionStart),
        n("ttfb", e.responseStart, e.requestStart),
        n("response", e.responseEnd, e.responseStart),
        n("domParse", e.domInteractive, e.responseEnd),
        n("resourceLoad", e.loadEventStart, e.domContentLoadedEventEnd),
        n("responseStart", e.responseStart),
        n("responseEnd", e.responseEnd),
        n("domLoaded", e.domContentLoadedEventStart),
        n("loadEvent", e.loadEventStart),
        n("loadEventEnd", e.loadEventEnd);
        break
    }
    return t
}
var ksLog = {
    _config: config,
    _data: {
        randomSeed: 0,
        shouldSendPV: !0,
        shouldSendPerf: !0,
        shouldSendError: !0,
        shouldSendAll: !0
    },
    config: function(e) {
        extend(config, e);
        var t = Math.random();
        ksLog._data.shouldSendPV = n("pv"),
        ksLog._data.shouldSendPerf = n("perf"),
        ksLog._data.shouldSendError = n("error"),
        ksLog._data.shouldSendAll = n("all");
        function n(r) {
            var o = r + "SampleRate",
            a = config[o];
            return a == defaultConfig[o] && config.allSampleRate != defaultConfig.allSampleRate && (a = config.allSampleRate),
            t < a
        }
        return ksLog._data.randomSeed = t,
        window.ksLog && window.ksLog.detach(),
        window.addEventListener && (window.onerror = eventHandler$1.onError, window.addEventListener("load", eventHandler$1.onLoad), document.addEventListener("click", eventHandler$1.onClickDom)),
        window.ksLog = ksLog,
        config
    },
    sendPV: function(e) {
        if (!this._data.shouldSendPV) return config.isDebug && console.log("event: pv was randomly skipped (pv rate: " + config.pvSampleRate + ", overall rate: " + config.allSampleRate + ")"),
        !1;
        e = e || {},
        e.event = "pv",
        this.sendAction(e, this._data.shouldSendPV)
    },
    sendCountTag: function(e, t) {
        var n = {
            event: "task",
            action: "COUNT",
            tag: e || ""
        };
        this.sendAction(n, t)
    },
    sendPerf: function(e) {
        if (e) {
            if (!this._data.shouldSendPerf) return config.isDebug && console.log("event: performance was randomly skipped. (perf rate: " + config.perfSampleRate + ", overall rate: " + config.allSampleRate + ")"),
            !1;
            var t = [];
            Object.prototype.toString.call(e) === "[object Array]" ? t = t.concat(e) : t.push(e),
            this.sendAction({
                event: "performance",
                timeData: JSON.stringify(t)
            },
            !0)
        }
    },
    sendError: function(e) {
        if (!this._data.shouldSendError) return config.isDebug && console.log("event: error was randomly skipped (error rate: " + config.errorSampleRate + ", overall rate: " + config.allSampleRate + ")"),
        !1;
        typeof e == "string" && (e = {
            message: e
        });
        var t = e.src || "";
        e.lineno && (t += " line:" + e.lineno),
        e.colno && (t += " col:" + e.colno),
        ksLog.sendAction({
            event: "exception",
            exceptionType: e.type || "JS",
            message: e.message || "",
            src: t,
            stack: e.stack || ""
        },
        !0)
    },
    sendAction: function(e, t) {
        if (!t && !this._data.shouldSendAll) return config.isDebug && console.log("event: " + e.event + " was randomly skipped (overall rate: " + config.allSampleRate + ")"),
        !1;
        var n = getDeviceHeightAndWidth();
        e = extend({
            referer: document.referrer,
            did: getCookie$1("did"),
            url: location.href,
            ts: Date.now(),
            deviceResolution: n.dpw + "x" + n.dph,
            screen: window.screen.width + "x" + window.screen.height
        },
        e);
        var r = ["category", "pageTag", "bizName", "sessionId"];
        r.forEach(function(a) { ! e[a] && config[a] && (e[a] = config[a])
        }),
        config.isDebug && console.log(JSON.stringify(e));
        var o = objToQuerystring(e);
        return makeUrlRequest(config.actionUrl + o)
    },
    detach: function() {
        window.removeEventListener("load", eventHandler$1.onLoad),
        document.removeEventListener("click", eventHandler$1.onClickDom),
        window.onerror === eventHandler$1.onError && (window.onerror = null)
    }
},
eventHandler$1 = {
    onError: function(e, t, n, r, o) {
        var a = ["Uncaught ReferenceError: WeixinJSBridge is not defined", "ReferenceError: WeixinJSBridge is not defined", "ReferenceError: Clipboard is not defined", "ReferenceError: Can't find variable: Clipboard"];
        a.indexOf(e) >= 0 || ksLog.sendError({
            message: e,
            src: t,
            lineno: n,
            colno: r,
            stack: o ? o.stack: ""
        })
    },
    onLoad: function() {
        setTimeout(function() {
            config.autoPV && ksLog.sendPV();
            var e = collectPagePerformance();
            if (e && e.length && ksLog.sendPerf(e), ksLog._config.sendBdPV && !window._hmt) {
                var t = document.createElement("script");
                t.src = "https://hm.baidu.com/hm.js?86a27b7db2c5c0ae37fee4a8a35033ee";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n)
            }
        },
        200)
    },
    onClickDom: function(e) {
        var t = e.target || e.srcElement;
        if (t && t.tagName.toLowerCase() === "a" && t.getAttribute("data-tagname") !== null) {
            var n = t.getAttribute("data-tagname");
            ksLog && ksLog.sendCountTag(n)
        }
    }
};
window.ksLog || ksLog.config();
function isObject$3(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var isObject_1 = isObject$3,
freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal,
_freeGlobal = freeGlobal$1,
freeGlobal = _freeGlobal,
freeSelf = typeof self == "object" && self && self.Object === Object && self,
root$2 = freeGlobal || freeSelf || Function("return this")(),
_root = root$2,
root$1 = _root,
now$1 = function() {
    return root$1.Date.now()
},
now_1 = now$1,
reWhitespace = /\s/;
function trimmedEndIndex$1(e) {
    for (var t = e.length; t--&&reWhitespace.test(e.charAt(t)););
    return t
}
var _trimmedEndIndex = trimmedEndIndex$1,
trimmedEndIndex = _trimmedEndIndex,
reTrimStart = /^\s+/;
function baseTrim$1(e) {
    return e && e.slice(0, trimmedEndIndex(e) + 1).replace(reTrimStart, "")
}
var _baseTrim = baseTrim$1,
root = _root,
Symbol$3 = root.Symbol,
_Symbol = Symbol$3,
Symbol$2 = _Symbol,
objectProto$1 = Object.prototype,
hasOwnProperty = objectProto$1.hasOwnProperty,
nativeObjectToString$1 = objectProto$1.toString,
symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag: void 0;
function getRawTag$1(e) {
    var t = hasOwnProperty.call(e, symToStringTag$1),
    n = e[symToStringTag$1];
    try {
        e[symToStringTag$1] = void 0;
        var r = !0
    } catch(a) {}
    var o = nativeObjectToString$1.call(e);
    return r && (t ? e[symToStringTag$1] = n: delete e[symToStringTag$1]),
    o
}
var _getRawTag = getRawTag$1,
objectProto = Object.prototype,
nativeObjectToString = objectProto.toString;
function objectToString$1(e) {
    return nativeObjectToString.call(e)
}
var _objectToString = objectToString$1,
Symbol$1 = _Symbol,
getRawTag = _getRawTag,
objectToString = _objectToString,
nullTag = "[object Null]",
undefinedTag = "[object Undefined]",
symToStringTag = Symbol$1 ? Symbol$1.toStringTag: void 0;
function baseGetTag$1(e) {
    return e == null ? e === void 0 ? undefinedTag: nullTag: symToStringTag && symToStringTag in Object(e) ? getRawTag(e) : objectToString(e)
}
var _baseGetTag = baseGetTag$1;
function isObjectLike$1(e) {
    return e != null && typeof e == "object"
}
var isObjectLike_1 = isObjectLike$1,
baseGetTag = _baseGetTag,
isObjectLike = isObjectLike_1,
symbolTag = "[object Symbol]";
function isSymbol$1(e) {
    return typeof e == "symbol" || isObjectLike(e) && baseGetTag(e) == symbolTag
}
var isSymbol_1 = isSymbol$1,
baseTrim = _baseTrim,
isObject$2 = isObject_1,
isSymbol = isSymbol_1,
NAN = NaN,
reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
reIsBinary = /^0b[01]+$/i,
reIsOctal = /^0o[0-7]+$/i,
freeParseInt = parseInt;
function toNumber$1(e) {
    if (typeof e == "number") return e;
    if (isSymbol(e)) return NAN;
    if (isObject$2(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = isObject$2(t) ? t + "": t
    }
    if (typeof e != "string") return e === 0 ? e: +e;
    e = baseTrim(e);
    var n = reIsBinary.test(e);
    return n || reIsOctal.test(e) ? freeParseInt(e.slice(2), n ? 2 : 8) : reIsBadHex.test(e) ? NAN: +e
}
var toNumber_1 = toNumber$1,
isObject$1 = isObject_1,
now = now_1,
toNumber = toNumber_1,
FUNC_ERROR_TEXT$1 = "Expected a function",
nativeMax = Math.max,
nativeMin = Math.min;
function debounce$1(e, t, n) {
    var r, o, a, i, s, u, l = 0,
    f = !1,
    p = !1,
    d = !0;
    if (typeof e != "function") throw new TypeError(FUNC_ERROR_TEXT$1);
    t = toNumber(t) || 0,
    isObject$1(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? nativeMax(toNumber(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing: d);
    function _(b) {
        var A = r,
        E = o;
        return r = o = void 0,
        l = b,
        i = e.apply(E, A),
        i
    }
    function y(b) {
        return l = b,
        s = setTimeout(g, t),
        f ? _(b) : i
    }
    function v(b) {
        var A = b - u,
        E = b - l,
        P = t - A;
        return p ? nativeMin(P, a - E) : P
    }
    function m(b) {
        var A = b - u,
        E = b - l;
        return u === void 0 || A >= t || A < 0 || p && E >= a
    }
    function g() {
        var b = now();
        if (m(b)) return C(b);
        s = setTimeout(g, v(b))
    }
    function C(b) {
        return s = void 0,
        d && r ? _(b) : (r = o = void 0, i)
    }
    function I() {
        s !== void 0 && clearTimeout(s),
        l = 0,
        r = u = o = s = void 0
    }
    function S() {
        return s === void 0 ? i: C(now())
    }
    function w() {
        var b = now(),
        A = m(b);
        if (r = arguments, o = this, u = b, A) {
            if (s === void 0) return y(u);
            if (p) return clearTimeout(s),
            s = setTimeout(g, t),
            _(u)
        }
        return s === void 0 && (s = setTimeout(g, t)),
        i
    }
    return w.cancel = I,
    w.flush = S,
    w
}
var debounce_1 = debounce$1;
function getCookie(e) {
    return api.get(e)
}
function yodaCanIUse(e, t) {
    return useYoda("tool.canIUse", {
        namespace: e,
        name: t
    }).then(n = >n.canUse).
    catch(() = >!1)
}
function showToast(e, t = "normal") {
    e && useYoda("ui.showToast", {
        type: t,
        text: e
    })
}
function openWebview(e, t = "back") {
    useYoda("tool.loadUrlOnNewPage", beforeTransUrl({
        url: e,
        type: t
    }))
}
const setPageTitle = e = >{
    document.title = e,
    setTimeout(() = >{
        useYoda("webview.setPageTitle", {
            title: e
        })
    },
    200)
};
function hasInstalledApp(e) {
    return useYoda("webview.hasInstalledApp", {
        identifier: e
    }).then(() = >!0, () = >!1)
}
async
function copyToken(e) {
    const t = await yodaCanIUse("social", "setShareTokenToClipBoard");
    try {
        return t ? await useYoda("social.setShareTokenToClipBoard", {
            text: e
        }) : await useYoda("webview.setClipBoard", {
            text: e
        }),
        !0
    } catch(n) {
        return ! 1
    }
}
function isAndroidLowVersion(e = "5.0") {
    var t;
    if (isAndroid$2()) {
        const n = navigator.userAgent.toLowerCase(),
        r = /android [\d._]+/gi,
        a = ((t = n.match(r)) != null ? t: [""])[0].replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
        return compareVersion$2(a, e) <= 0
    }
    return ! 1
}
function getCurrentDomain() {
    return window.location.origin
}
function contains(e, t) {
    if (t) {
        for (; t.parentNode;) if (t = t.parentNode, t === e) return ! 0
    }
    return ! 1
}
const apps = {
    weixin: {
        androidName: "com.tencent.mm",
        iosName: "wechat",
        installed: !1
    },
    qq: {
        androidName: "com.tencent.mobileqq",
        iosName: "mqq",
        installed: !1
    }
};
function getAppInstalledResult() {
    return Promise.all(Object.values(apps).map(async e = >{
        e.installed = await hasInstalledApp(isIOS$1() ? e.iosName: e.androidName)
    })).then(() = >apps)
}
function sendKsLogMonitor(e, t, n) {
    typeof n == "string" && (n = {
        message: n
    }),
    Object.assign(n, {
        appver: getCookie("appver"),
        isIOS: isIOS$1()
    }),
    ksLog.sendAction({
        event: "task",
        action: "CLICK",
        elementName: "".concat(e, " | ").concat(t, " | ").concat(JSON.stringify(n))
    })
}
function hideHomeLoading() {
    const e = document.querySelector("#home-loading");
    e && (e.style.display = "none")
}
function fmpEventHandler(e) {
    hideHomeLoading(),
    sendFmp(e)
}
const statusBarHeightKey = "status_bar_height",
defaultStatusBarHeight = 20;
async
function getStatusBarHeight() {
    if (localStorage != null && localStorage.getItem(statusBarHeightKey)) return Number(localStorage.getItem(statusBarHeightKey));
    const {
        result: e,
        data: t
    } = await useLegacyYoda("webview.getDeviceInfo");
    if (e === 1) {
        const n = t.devicePixelRatio || window.devicePixelRatio,
        r = t.statusBarHeight / n;
        return localStorage == null || localStorage.setItem(statusBarHeightKey, "".concat(r)),
        r
    }
    return defaultStatusBarHeight
}
function padding(e) {
    const t = +e;
    return t < 10 ? "0".concat(t) : t > 99 ? Math.floor(t / 10) : t
}
const htmlTagReg = /<\/?[a-z0-9]+>/g;
function replaceHtmlTag(e) {
    return e.replace(htmlTagReg, "")
}
async
function getRemainingTime(e) {
    const {
        serverTimeStamp: t
    } = await useLegacyYoda("system.getServerTime"),
    n = e - t;
    return n > 0 ? n: 0
}
async
function getShareDirectActionUrl(e, t = !0) {
    const n = {
        weixin: "kwaishare://shareAny/wechat",
        qq: "kwaishare://shareAny/qq"
    },
    r = await getAppInstalledResult(),
    o = e.find(a = >{
        var i;
        return ((i = r[a]) == null ? void 0 : i.installed) && n[a]
    });
    return o ? n[o] : t ? "kwaishare://shareAny/copyLink": ""
}
const _sfc_main$l = {};
var _sfc_render$l = function e() {
    var t = this,
    n = t._self._c;
    return n("div", {
        staticClass: "loading",
        staticStyle: {
            position: "fixed",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            "z-index": "999",
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            "justify-content": "center"
        }
    },
    [n("svg", {
        staticStyle: {
            width: "40px",
            height: "40px",
            display: "block"
        },
        attrs: {
            width: "80",
            height: "80",
            viewBox: "0 0 80 80",
            xmlns: "http://www.w3.org/2000/svg"
        }
    },
    [n("path", {
        attrs: {
            "stroke-dasharray": "160",
            "stroke-linecap": "round",
            d: "M40 40l8.201-8.201c4.53-4.53 11.873-4.53 16.402 0A11.598 11.598 0 0 1 68 40c0 6.405-5.193 11.598-11.598 11.598a11.598 11.598 0 0 1-8.201-3.397L40 40l-8.201-8.201c-4.53-4.53-11.873-4.53-16.402 0A11.598 11.598 0 0 0 12 40c0 6.405 5.193 11.598 11.598 11.598 3.076 0 6.026-1.222 8.201-3.397L40 40z",
            stroke: "#C6C6C6",
            "stroke-width": "7",
            fill: "none",
            "fill-rule": "evenodd"
        }
    },
    [n("animate", {
        attrs: {
            id: "b",
            attributeName: "stroke-dashoffset",
            begin: "0s;a.end",
            dur: "800ms",
            from: "0",
            to: "155",
            calcMode: "linear"
        }
    }), n("animate", {
        attrs: {
            id: "a",
            attributeName: "stroke-dashoffset",
            begin: "b.end",
            dur: "800ms",
            from: "165",
            to: "320",
            calcMode: "linear"
        }
    })])]), n("p", {
        staticStyle: {
            margin: "8px 0 0 0",
            "font-weight": "normal",
            "font-size": "14px",
            "line-height": "20px",
            color: "#c6c6c6",
            "text-align": "center"
        }
    },
    [t._v(" 努力加载中 ")])])
},
_sfc_staticRenderFns$l = [],
__component__$l = normalizeComponent(_sfc_main$l, _sfc_render$l, _sfc_staticRenderFns$l, !1, null, null, null, null);
const LoadingPage = __component__$l.exports;
var debounce = debounce_1,
isObject = isObject_1,
FUNC_ERROR_TEXT = "Expected a function";
function throttle(e, t, n) {
    var r = !0,
    o = !0;
    if (typeof e != "function") throw new TypeError(FUNC_ERROR_TEXT);
    return isObject(n) && (r = "leading" in n ? !!n.leading: r, o = "trailing" in n ? !!n.trailing: o),
    debounce(e, t, {
        leading: r,
        maxWait: t,
        trailing: o
    })
}
var throttle_1 = throttle;
const throttle$1 = getDefaultExportFromCjs(throttle_1);
var ExchangeCoinState = (e = >(e[e.Unavailable = -1] = "Unavailable", e[e.Auto = 0] = "Auto", e[e.Manual = 2] = "Manual", e))(ExchangeCoinState || {});
function useCoinExchangeInfo(e) {
    return {
        exchangeCoinState: computed(() = >{
            var t, n;
            return (n = (t = e.value) == null ? void 0 : t.exchangeCoinState) != null ? n: -1
        }),
        showExchangeChangeSwitch: computed(() = >{
            var t, n;
            return (n = (t = e.value) == null ? void 0 : t.showExchangeChangeSwitch) != null ? n: !1
        }),
        showManualExchangeBtn: computed(() = >{
            var t, n;
            return (n = (t = e.value) == null ? void 0 : t.showManualExchangeBtn) != null ? n: !1
        }),
        isCoinExchangeSO: computed(() = >{
            var t;
            return ((t = e.value) == null ? void 0 : t.exchangeInteractiveMode) === 1
        }),
        isCoinExchangeShowPopup: computed(() = >{
            var t;
            return ((t = e.value) == null ? void 0 : t.exchangeInteractiveStyle) === 1
        }),
        coinExchangeLevels: computed(() = >{
            var t, n;
            return (n = (t = e.value) == null ? void 0 : t.coinExchangeLevels) != null ? n: []
        })
    }
}
const useCoinExchangeModel = createUseModel(() = >{
    const e = useRestMutation({
        url: "/rest/wd/encourage/unionTask/coinExchange/exchange",
        method: "post",
        variables: o = >o
    });
    async
    function t(o) {
        var a, i;
        return await e.mutate({
            coinExchangeAmount: o
        }),
        e.info.error ? (showYodaToast((i = (a = e.info.error) == null ? void 0 : a.error_msg) != null ? i: "兑换失败"), !1) : (showYodaToast("兑换成功"), !0)
    }
    const n = useRestMutation({
        url: "/rest/wd/encourage/unionTask/coinExchange/changeStatus",
        method: "post",
        variables: o = >o
    });
    async
    function r(o) {
        var a, i;
        return await n.mutate({
            exchangeCoinState: o
        }),
        n.info.error ? (showYodaToast((i = (a = n.info.error) == null ? void 0 : a.error_msg) != null ? i: "切换失败"), !1) : (showYodaToast("已切换成".concat(o === ExchangeCoinState.Auto ? "自动": "手动", "兑换")), !0)
    }
    return {
        exchangeCoin: t,
        changeStatus: r
    }
});
function useCoinExchangeClick({
    isCoinExchangeSO: e,
    isCoinExchangeShowPopup: t,
    coinExchangeAmount: n,
    coinExchangeSOCallback: r,
    goToCoinExchangePage: o
}) {
    const {
        exchangeCoin: a
    } = useCoinExchangeModel(),
    i = ref$1(!1);
    function s() {
        if (e != null && e.value) {
            a(Number(n == null ? void 0 : n.value)).then(u = >{
                u && (r == null || r())
            });
            return
        }
        if (t != null && t.value) {
            i.value = !0;
            return
        }
        o == null || o()
    }
    return {
        showCoinExchangePopup: i,
        handleCoinExchange: useThrottleFn(s, 3e3, !1, !0)
    }
}
const eventsMap = new WeakMap;
function ensureBeepEventCache(e) {
    return eventsMap.has(e) || eventsMap.set(e, {
        ended: [],
        play: [],
        loaded: [],
        error: []
    }),
    eventsMap.get(e)
}
function on(e, t, n) {
    ensureBeepEventCache(e)[t].push(n)
}
function off(e, t, n) {
    if (!eventsMap.has(e)) return;
    const r = ensureBeepEventCache(e)[t],
    o = r.indexOf(n);
    o >= 0 && r.splice(o, 1)
}
function emit(e, t, ...n) {
    if (!eventsMap.has(e)) return; [...ensureBeepEventCache(e)[t]].forEach(o = >{
        try {
            o(...n)
        } catch(a) {
            console.error(a)
        }
    })
}
function eventHandler(e) {
    return {
        on: (t, n) = >{
            on(e, t, n)
        },
        off: (t, n) = >{
            off(e, t, n)
        }
    }
}
class BaseContext {
    constructor() {
        q(this, "audioContext");
        q(this, "volume", 1);
        q(this, "actived", !0);
        q(this, "using", !1);
        q(this, "retryTimeout", 1e3);
        q(this, "audioBufferCache", new Map);
        q(this, "commandPromiseChain", Promise.resolve())
    }
    get ctx() {
        var t;
        return this.audioContext || (this.audioContext = new((t = window.AudioContext) != null ? t: window.webkitAudioContext)),
        this.audioContext
    }
    resume() {
        return this.using = !0,
        this.commandPromiseChain = this.commandPromiseChain.
        catch().then(() = >{
            if (this.actived) return this.ctx.resume()
        }),
        this.commandPromiseChain
    }
    suspend() {
        return this.commandPromiseChain = this.commandPromiseChain.
        catch().then(() = >this.ctx.suspend()),
        this.commandPromiseChain
    }
    destroyBeepNode(t) {
        var r, o;
        const n = t;
        if (n.sourceNode) {
            n.sourceNode.buffer = null;
            try { (r = n.gainNode) == null || r.disconnect(),
                (o = n.sourceNode) == null || o.disconnect()
            } catch(a) {
                console.warn(a)
            }
        }
    }
    refreshBeepNode(t) {
        const n = t;
        this.destroyBeepNode(n);
        const r = this.ctx.createBufferSource(),
        o = this.createGainNode();
        return r.connect(o),
        r.addEventListener("ended", () = >{
            n.alive = !1,
            this.destroyBeepNode(n),
            emit(n, "ended")
        }),
        Object.assign(n, {
            alive: !0,
            sourceNode: r,
            gainNode: o
        }),
        n
    }
    createBeepNode() {
        return this.refreshBeepNode({
            context: this
        })
    }
    createGainNode() {
        const t = this.ctx.createGain();
        return t.connect(this.ctx.destination),
        t
    }
    async loadFromArrayBuffer(t) {
        return new Promise((n, r) = >{
            var o; (o = this.ctx) == null || o.decodeAudioData(t, n, r)
        })
    }
    async loadFromSrc(t, n) {
        if (this.audioBufferCache.has(t)) return this.audioBufferCache.get(t);
        const r = this.load(t, n).then(o = >o.arrayBuffer()).then(o = >this.loadFromArrayBuffer(o)).
        catch(o = >{
            throw this.audioBufferCache.delete(t),
            o
        });
        return this.audioBufferCache.set(t, r),
        r
    }
    async load(t, n = 0) {
        return fetch(t).
        catch(async r = >{
            if (n > 0) return await sleep(this.retryTimeout),
            this.load(t, n - 1);
            throw r
        })
    }
}
function playHandler(e, t) {
    let n,
    r = 1,
    o = !1;
    const a = async(_, y) = >_ ? (typeof _ == "string" ? (n = e.context.loadFromSrc(_, y), await n, emit(e, "loaded")) : n = Promise.resolve(_), n) : Promise.reject("unexpected empty source"),
    i = (_, y = 0) = >{
        const v = e.context.volume * _,
        m = e.gainNode;
        y > 0 ? m.gain.linearRampToValueAtTime(v, e.context.ctx.currentTime + y) : m.gain.value = v,
        r = _
    },
    s = async(_ = 0) = >{
        var m;
        if (!n) throw new Error("beep is not ready");
        o = !0;
        const y = await n;
        if (!e.alive || (await e.context.resume(), !o)) return;
        const v = e.sourceNode;
        if (!v.buffer) {
            if (v.buffer = y, v.loop = (m = t == null ? void 0 : t.loop) != null ? m: !1, e.sourceNode.start(_), t.fadeIn > 0) {
                const g = e.gainNode;
                g.gain.value = 0,
                i(r, t.fadeIn)
            }
            emit(e, "play")
        }
    },
    u = async(_ = 0) = >{
        e.context.refreshBeepNode(e),
        i(r),
        s(_)
    };
    return {
        load: a,
        play: s,
        stop: () = >{
            o = !1;
            try {
                e.sourceNode.buffer && e.sourceNode.stop()
            } catch(_) {
                console.warn(_)
            }
        },
        seek: u,
        replay: () = >u(0),
        pause: () = >{
            try {
                e.sourceNode.disconnect()
            } catch(_) {
                console.warn(_)
            }
        },
        resume: () = >{
            try {
                e.sourceNode.connect(e.gainNode)
            } catch(_) {
                console.warn(_)
            }
        },
        volume: i
    }
}
const globalAudioControlKey = "audioEnabled";
function getAudioEnabled() {
    return localStorage.getItem(globalAudioControlKey) !== "false"
}
function setAudioEnabled(e) {
    localStorage.setItem(globalAudioControlKey, JSON.stringify(e))
}
const enableAudio = ref$1(getAudioEnabled());
function useAudioSwitch() {
    const e = r = >{
        enableAudio.value = r
    },
    t = () = >{
        enableAudio.value = !0
    },
    n = () = >{
        enableAudio.value = !1
    };
    return watch(() = >enableAudio.value, () = >{
        setAudioEnabled(enableAudio.value)
    }),
    {
        enableAudio,
        setEnabled: e,
        enable: t,
        disable: n
    }
}
let resolve = null;
const hasActioned = ref$1(!1),
userActioned = new Promise(e = >{
    resolve = e
});
function skipUserAction() {
    resolve(),
    hasActioned.value = !0
}
document.addEventListener("touchend", () = >{
    skipUserAction()
},
{
    capture: !0,
    once: !0
});
function useVisibilityHandler(e) {
    var a;
    const t = e,
    n = injectVisibility();
    n || console.warn("[beep] visibility should be provided");
    const {
        useVisibilityChange: r,
        visible: o
    } = n != null ? n: {};
    t.actived = (a = o == null ? void 0 : o.value) != null ? a: !0,
    o != null && o.value || t.suspend(),
    r == null || r(i = >{
        t.actived = i,
        t.using && (i ? t.resume() : t.suspend())
    })
}
const baseContext = new BaseContext;
function preload(e, t) {
    return e ? baseContext.loadFromSrc(e, t) : Promise.reject()
}
const defaultOptions = {
    volume: 1,
    autoPlay: !0,
    useSwitch: !1,
    restartOnSwitch: !1,
    retry: 3,
    fadeIn: 0
};
skipUserAction();
function useBeep() {
    const e = new Set,
    {
        enableAudio: t
    } = useAudioSwitch();
    function n(o, a = !1, i) {
        const s = {...defaultOptions,
            ...i
        },
        u = baseContext.createBeepNode(),
        {
            load: l,
            play: f,
            stop: p,
            ...d
        } = playHandler(u, {
            loop: a,
            fadeIn: s.fadeIn
        });
        l(o, s.retry).
        catch(v = >{
            console.error("load failed", o),
            emit(u, "error", v)
        });
        let _ = !1;
        const y = {
            options: s,
            load: l,
            play: async(...v) = >{
                if (!hasActioned.value && !a) {
                    console.warn("unused beep without user action");
                    return
                }
                if (_ = !0, await userActioned, !u.alive || !_) {
                    console.warn("beepItem is ended");
                    return
                }
                e.add(y),
                f(...v)
            },
            stop: () = >{
                _ = !1,
                p()
            },
            ...d,
            ...eventHandler(u)
        };
        return y.volume(s.volume),
        s.autoPlay && y.play(),
        s.useSwitch && (t.value ? y.resume() : y.pause()),
        on(u, "ended", () = >{
            e.delete(y)
        }),
        y
    }
    function r() {
        e.forEach(o = >{
            o.stop()
        }),
        e.clear()
    }
    return onBeforeUnmount(r),
    watch(() = >t.value, o = >{
        e.forEach(a = >{
            if (a.options.useSwitch) {
                if (!o) {
                    a.pause();
                    return
                }
                a.options.restartOnSwitch ? a.replay() : a.resume()
            }
        })
    }),
    useVisibilityHandler(baseContext),
    {
        beep: n,
        clear: r
    }
}
var ExchangeText = (e = >(e.Auto = "自动兑换", e.Manual = "随时兑换", e))(ExchangeText || {});
const coinSound = "https://ali.static.yximgs.com/kos/nlav10395/encourage/task/coinSound.mp3";
preload(coinSound);
function useCoinSound(e = {}) {
    const {
        autoPlay: t = !0
    } = e,
    {
        beep: n
    } = useBeep(),
    r = () = >{
        n(coinSound, !1, {
            useSwitch: !0
        })
    };
    return t && r(),
    {
        coinBeep: r
    }
}
const basicNumList = [...Array(10)].map((e, t) = >t);
function getNumList(e, t) {
    return e < t ? basicNumList.filter(n = >e <= n && n <= t) : [...basicNumList.filter(n = >n >= e), ...basicNumList.filter(n = >n <= t)]
}
const _sfc_main$k = defineComponent({
    name: "ScrollNumItem",
    props: {
        range: {
            type: Array,
            required: !0
        },
        scroll: {
            type: Boolean,
        default:
            !1
        },
        duration: {
            type: Number,
        default:
            1e3
        },
        height: {
            type: Number,
        default:
            20
        },
        delay: {
            type: Number,
        default:
            0
        },
        minScrollDigits: {
            type: Number,
        default:
            0
        },
        reverse: {
            type: Boolean,
        default:
            !1
        },
        useTimerToEnd: {
            type: Boolean,
        default:
            !1
        }
    },
    setup(e, t) {
        const n = ref$1(null),
        r = computed(() = >{
            var m;
            return (m = e.range[1]) != null ? m: 0
        }),
        o = ref$1(!1),
        a = ref$1([]),
        i = ref$1(0),
        s = ref$1(0),
        u = computed(() = >e.reverse ? [ - 100, 0] : [0, -100]),
        l = ref$1(u.value[0]);
        function f(m, g) {
            const C = getNumList(m, g),
            I = getNumList(m, (m + 10 - 1) % 10);
            for (; C.length < e.minScrollDigits;) C.unshift(...I);
            return e.reverse && C.reverse(),
            C
        }
        function p(m) {
            o.value && (v(), o.value = !1, a.value = [], m && t.emit("finish-scroll"))
        }
        let d = null;
        function _() {
            var m, g; (m = n.value) == null || m.addEventListener("transitionend", p),
            (g = n.value) == null || g.addEventListener("webkitTransitionEnd", p),
            e.useTimerToEnd && (d = setTimeout(() = >{
                p(!0)
            },
            e.delay + e.duration)),
            l.value = u.value[1],
            t.emit("start-scroll")
        }
        function y() {
            var m;
            o.value || (a.value = f((m = e.range[0]) != null ? m: 0, e.range[1]), o.value = !0, s.value = e.delay, i.value = e.duration, setTimeout(() = >{
                _()
            },
            16))
        }
        function v() {
            var m, g;
            d && (clearTimeout(d), d = null),
            (m = n.value) == null || m.removeEventListener("transitionend", p),
            (g = n.value) == null || g.removeEventListener("webkitTransitionEnd", p)
        }
        return watch(() = >e.range, () = >{
            e.scroll ? y() : p(!1)
        },
        {
            immediate: !0
        }),
        onBeforeUnmount(() = >{
            v()
        }),
        {
            scrollWrapperRef: n,
            isShowScroll: o,
            transitionDuration: i,
            transitionDelay: s,
            translateY: l,
            currentNum: r,
            scrollNumList: a,
            basicNumList
        }
    }
});
var _sfc_render$k = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("span", {
        staticClass: "scroll-num-item",
        style: {
            height: "".concat(t.height, "px"),
            lineHeight: "".concat(t.height, "px")
        }
    },
    [t.isShowScroll ? n("span", {
        ref: "scrollWrapperRef",
        staticClass: "scroll-wrapper",
        style: {
            transitionDuration: "".concat(t.transitionDuration, "ms"),
            transitionDelay: "".concat(t.transitionDelay, "ms"),
            transform: "translateY(".concat(t.translateY, "%)")
        }
    },
    t._l(t.scrollNumList,
    function(r, o) {
        return n("span", {
            key: o,
            staticClass: "num",
            style: {
                height: "".concat(t.height, "px")
            }
        },
        [t._v(" " + t._s(r) + " ")])
    }), 0) : n("span", {
        staticClass: "num",
        style: {
            height: "".concat(t.height, "px")
        }
    },
    [t._v(t._s(t.currentNum))]), t._l(t.basicNumList,
    function(r) {
        return n("span", {
            key: "placeholder-".concat(r),
            staticClass: "num placeholder-num"
        },
        [t._v(t._s(r))])
    })], 2)
},
_sfc_staticRenderFns$k = [],
__component__$k = normalizeComponent(_sfc_main$k, _sfc_render$k, _sfc_staticRenderFns$k, !1, null, "d6a651ea", null, null);
const ScrollNumItem = __component__$k.exports,
_sfc_main$j = defineComponent({
    name: "ScrollNum",
    components: {
        ScrollNumItem
    },
    props: {
        preNumInitialize: {
            type: [String],
        default:
            ""
        },
        num: {
            type: [Number, String],
            required: !0,
        default:
            0
        },
        scroll: {
            type: Boolean,
        default:
            !1
        },
        duration: {
            type: Number,
        default:
            1e3
        },
        scrollWhenEqual: {
            type: Boolean,
        default:
            !0
        },
        immediate: {
            type: Boolean,
        default:
            !1
        },
        unit: {
            type: String,
        default:
            ""
        },
        height: {
            type: Number,
        default:
            20
        },
        delay: {
            type: Number,
        default:
            0
        },
        interval: {
            type: Number,
        default:
            0
        },
        getCustomPropsList: {
            type: Function,
        default:
            null
        }
    },
    setup(e, t) {
        var v;
        const n = ref$1(!0),
        r = ref$1((v = e.preNumInitialize) != null ? v: ""),
        o = computed(() = >"".concat(e.num)),
        a = computed(() = >o.value.length),
        i = ref$1([]),
        s = ref$1(0),
        u = ref$1(0),
        l = computed(() = >{
            const m = o.value.indexOf(".");
            return m < 0 ? a.value: m
        }),
        f = computed(() = >l.value < a.value);
        function p() {
            var C, I, S, w;
            const m = [];
            i.value.forEach((b, A) = >{
                b.scroll && !b.symbol && m.push({
                    delay: b.delay,
                    index: A
                })
            });
            const g = m.sort((b, A) = >b.delay - A.delay);
            s.value = (I = (C = g[0]) == null ? void 0 : C.index) != null ? I: 0,
            u.value = (w = (S = g[g.length - 1]) == null ? void 0 : S.index) != null ? w: 0
        }
        function d(m = !1) {
            const g = [];
            for (let C = 0; C < a.value; C++) if (C === l.value) g.push({
                range: [0, 0],
                delay: 0,
                scroll: !1,
                symbol: "."
            });
            else {
                const I = a.value - C,
                w = (f.value ? I - +(C < l.value) : I) * e.interval,
                b = [ + r.value[C], +o.value[C]],
                A = b[0] === b[1],
                E = m && !e.immediate ? !1 : e.scroll;
                g.push({
                    range: [ + r.value[C], +o.value[C]],
                    delay: w + e.delay,
                    scroll: E && (!A || A && e.scrollWhenEqual)
                })
            }
            if (typeof e.getCustomPropsList == "function") {
                const C = e.getCustomPropsList(g);
                i.value = g.map((I, S) = >({...I,
                    ...C[S]
                }));
                return
            }
            i.value = g
        }
        watch(() = >o.value, (m, g = "0") = >{
            let C = g;
            n.value && e.preNumInitialize && (C = e.preNumInitialize);
            const[I = "", S = ""] = C.split("."),
            [w = "", b = ""] = m.split("."),
            A = I.length < w.length ? I.padStart(w.length, "0") : I.slice( - w.length),
            E = S.length < b.length ? S.padEnd(b.length, "0") : S.slice(0, b.length);
            r.value = A + (E ? ".".concat(E) : ""),
            d(n.value),
            p(),
            n.value = !1
        },
        {
            immediate: !0
        });
        function _(m = !1) {
            m && t.emit("start-scroll")
        }
        function y(m = !1) {
            m && t.emit("finish-scroll")
        }
        return {
            currentNum: o,
            numCount: a,
            scrollPropsList: i,
            pointIndex: l,
            firstScrollIndex: s,
            lastScrollIndex: u,
            finish: y,
            start: _
        }
    }
});
var _sfc_render$j = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("div", {
        staticClass: "scroll-num",
        style: {
            height: "".concat(t.height, "px"),
            lineHeight: "".concat(t.height, "px")
        }
    },
    [t._l(t.scrollPropsList,
    function(r, o) {
        return [o !== t.pointIndex ? n("ScrollNumItem", t._b({
            key: t.pointIndex - o,
            attrs: {
                duration: t.duration,
                height: t.height
            },
            on: {
                "finish-scroll": function(a) {
                    return t.finish(o === t.lastScrollIndex)
                },
                "start-scroll": function(a) {
                    return t.start(o === t.firstScrollIndex)
                }
            }
        },
        "ScrollNumItem", r, !1)) : n("span", {
            key: r.symbol,
            staticClass: "symbol point"
        },
        [t._v(".")])]
    }), t.unit ? n("span", {
        staticClass: "symbol unit"
    },
    [t._v(t._s(t.unit))]) : t._e()], 2)
},
_sfc_staticRenderFns$j = [],
__component__$j = normalizeComponent(_sfc_main$j, _sfc_render$j, _sfc_staticRenderFns$j, !1, null, "4e6a2143", null, null);
const ScrollNum = __component__$j.exports,
_sfc_main$i = defineComponent({
    props: {
        beforeBack: {
            required: !1,
            type: Function
        }
    },
    setup(e) {
        async
        function t() {
            if (!e.beforeBack) {
                pageBack();
                return
            }
            try {
                await e.beforeBack(),
                pageBack()
            } catch(n) {}
        }
        return {
            back: t
        }
    }
});
var _sfc_render$i = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("div", {
        on: {
            click: t.back
        }
    },
    [t._t("default")], 2)
},
_sfc_staticRenderFns$i = [],
__component__$i = normalizeComponent(_sfc_main$i, _sfc_render$i, _sfc_staticRenderFns$i, !1, null, null, null, null);
const Back = __component__$i.exports;
function useEventListener(e, t, n = window, r) {
    onMounted(() = >{
        var o;
        isRef(n) ? (o = n.value) == null || o.addEventListener(e, t, r) : n.addEventListener(e, t, r)
    }),
    onBeforeUnmount(() = >{
        var o;
        isRef(n) ? (o = n.value) == null || o.removeEventListener(e, t, r) : n.removeEventListener(e, t, r)
    })
}
function getDayEndTimeStamp(e = new Date) {
    return new Date(e.setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1e3).valueOf()
}
const defaultExpireTimeStamp = -1,
useLocalStorage = e = >{
    const t = ref$1(defaultExpireTimeStamp),
    n = ref$1({});
    function r() {
        return t.value >= 0 && new Date().valueOf() >= t.value
    }
    function o() {
        var u;
        try {
            const {
                expires: l = defaultExpireTimeStamp,
                data: f = ""
            } = JSON.parse((u = localStorage.getItem(e)) != null ? u: "{}");
            t.value = l,
            r() || (n.value = f || {})
        } catch(l) {
            t.value = defaultExpireTimeStamp
        }
    }
    o();
    function a(u) {
        const {
            key: l,
            expires: f,
            value: p
        } = u;
        let d = {...n.value
        };
        r() && (d = {}),
        d[l] = "value" in u ? p: ( + d[l] || 0) + 1,
        n.value = d,
        t.value = typeof f == "number" ? f: getDayEndTimeStamp(),
        localStorage.setItem(e, JSON.stringify({
            data: n.value,
            expires: t.value
        }))
    }
    function i(u) {
        return r() && (localStorage.removeItem(e), t.value = defaultExpireTimeStamp, n.value = {}),
        u ? n.value[u] : n.value
    }
    function s(u) {
        const l = {...n.value
        };
        delete l[u],
        n.value = l,
        localStorage.setItem(e, JSON.stringify({
            data: n.value,
            expires: t.value
        }))
    }
    return {
        add: a,
        get: i,
        remove: s
    }
};
function useProgress(e, t, n, r = !1) {
    const o = ref$1(0),
    a = ref$1(0),
    i = ref$1(r),
    s = computed(() = >t.value[0] === 0),
    u = computed(() = >Math.max(...t.value)),
    l = computed(() = >i.value ? n: 0),
    f = computed(() = >s.value ? t.value: [0, ...t.value]),
    p = computed(() = >f.value.length),
    d = computed(() = >100 / (p.value - 1)),
    _ = computed(() = >{
        let v = 0;
        for (let m = 1; m < p.value; m++) {
            const g = f.value[m],
            C = f.value[m - 1];
            if (o.value < g) return v += (o.value - C) / (g - C) * d.value,
            v;
            o.value >= g && (v += d.value)
        }
        return v
    });
    function y() {
        var m;
        const v = Math.min((m = f.value.find(g = >g > a.value)) != null ? m: u.value, e.value);
        if (v !== a.value) {
            if (v < a.value) {
                i.value = !1,
                o.value = v,
                a.value = v;
                return
            }
            i.value = !0,
            o.value = v,
            setTimeout(() = >{
                a.value = v,
                y()
            },
            l.value)
        }
    }
    return onMounted(() = >{
        i.value ? requestAnimationFrame(() = >{
            y()
        }) : (o.value = e.value, a.value = e.value),
        watch(() = >e.value, () = >{
            requestAnimationFrame(() = >{
                y()
            })
        })
    }),
    {
        targetStage: o,
        currentStage: a,
        percentageWidth: _,
        showAnim: i,
        animDuration: l
    }
}
const onScroll = (e, t, n, r, o) = >{
    const a = window.pageYOffset || document.documentElement.scrollTop;
    e.emit("scroll", a),
    t.value = a > n.value ? "down": "up",
    !(t.value === "down" && r.value === 1) && (a >= o ? (r.value = 1, e.emit("fold", !0)) : a <= 10 ? (r.value = 0, e.emit("fold", !1)) : r.value = a / o, n.value = a)
};
function useStatusBar({
    context: e,
    scrollThreshold: t = 100,
    touchend: n = !0
}) {
    const r = ref$1(window.pageYOffset || document.documentElement.scrollTop),
    o = ref$1(""),
    a = ref$1(0),
    i = ref$1(0),
    s = ref$1(0),
    u = computed(() = >({
        paddingTop: "".concat(i.value, "px")
    })),
    l = () = >{
        a.value < 1 && o.value === "down" ? (a.value = 1, e.emit("fold", !0)) : a.value > 0 && o.value === "up" && (a.value = 0, e.emit("fold", !1))
    },
    f = async() = >{
        i.value = await getStatusBarHeight(),
        e.emit("update-bar-height", i.value),
        isTabContainer && (s.value = await getTabBarHeight())
    };
    return useEventListener("scroll", throttle$2(() = >{
        onScroll(e, o, r, a, t)
    },
    100, !1)),
    n && useEventListener("touchend", throttle$2(l, 100, !1)),
    useEventListener("resize", throttle$2(f, 100, !1)),
    onMounted(() = >{
        f()
    }),
    {
        opacity: a,
        statusBarHeight: i,
        commonStyle: u,
        titleBarHeight: s
    }
}
let observer;
const longTaskQueue = [],
initObserver = () = >{
    var e;
    try {
        typeof PerformanceObserver < "u" && ((e = PerformanceObserver == null ? void 0 : PerformanceObserver.supportedEntryTypes) != null && e.includes("longtask")) && (observer = new PerformanceObserver(t = >{
            t.getEntries().forEach(n = >{
                longTaskQueue.push(n)
            })
        }), observer.observe({
            type: "longtask",
            buffered: !0
        }))
    } catch(t) {
        console.warn(t)
    }
},
removeObserver = () = >{
    try {
        observer && (observer.disconnect(), observer = void 0)
    } catch(e) {
        console.warn(e)
    }
},
getLongTaskData = () = >{
    const e = longTaskQueue.length;
    return {
        duration: longTaskQueue.reduce((n, r) = >n + r.duration, 0),
        count: e
    }
};
initObserver();
const Hand = "" + window.__assetsPath + "lib/images/hand-ChgQ6EbE.png",
_sfc_main$h = defineComponent({
    __name: "index",
    props: {
        reverse: {
            type: Boolean,
        default:
            !1
        },
        repeat: {
        default:
            0
        },
        play: {
            type: Boolean,
        default:
            !0
        }
    },
    emits: ["end", "guide-hand-on-click"],
    setup(e) {
        const t = e,
        n = computed(() = >t.repeat > 0 ? {
            "animation-iteration-count": t.repeat * 2
        }: ""),
        r = computed(() = >[t.reverse && "reverse", t.play && "is-play"]);
        return {
            __sfc: !0,
            props: t,
            animationRepeat: n,
            handStatus: r,
            Hand
        }
    }
});
var _sfc_render$h = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        staticClass: "hand",
        class: r.handStatus,
        on: {
            click: function(o) {
                return t.$emit("guide-hand-on-click")
            }
        }
    },
    [n("img", {
        staticClass: "hand-main",
        style: r.animationRepeat,
        attrs: {
            src: r.Hand
        },
        on: {
            animationend: function(o) {
                return t.$emit("end")
            }
        }
    }), n("div", {
        staticClass: "shine",
        style: r.animationRepeat
    }), n("div", {
        staticClass: "shine-in",
        style: r.animationRepeat
    })])
},
_sfc_staticRenderFns$h = [],
__component__$h = normalizeComponent(_sfc_main$h, _sfc_render$h, _sfc_staticRenderFns$h, !1, null, "27dfdd13", null, null);
const GuideHand = __component__$h.exports;
class GuideQueue {
    constructor() {
        q(this, "queue", []);
        q(this, "taskQueue", []);
        q(this, "isShowTask");
        q(this, "suggestTaskIds", []);
        q(this, "clickHandler", null);
        q(this, "debounceUpdateTaskQueue");
        this.debounceUpdateTaskQueue = debounce$2(this.updateTaskQueue.bind(this), 500, !1)
    }
    add(t) {
        this.remove(t.id),
        this.queue.push(t),
        this.debounceUpdateTaskQueue()
    }
    remove(t) {
        this.queue = this.queue.filter(n = >n.id !== t && n !== t)
    }
    setGuideStyle(t, n) {
        t.style.position = "absolute";
        const r = n.offset;
        t.style.transform = "scale(0.35, 0.35) translate(25%, 25%) rotate(16deg)",
        t.style.transformOrigin = "bottom right",
        t.style.zIndex = "2",
        r && Object.keys(r).forEach(o = >{
            typeof r[o] < "u" && (t.style[o] = px2rem(r[o]))
        })
    }
    showGuide(t) {
        var o;
        this.isShowTask = t;
        const n = createApp(GuideHand, {...t.props
        }).mount();
        t.el.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }),
        t.el.style.position || (t.el.style.position = "relative"),
        this.setGuideStyle(n.$el, t),
        t.el.appendChild(n.$el),
        t.sendShow("TASK_GUIDE", {
            task_id: t.id
        }),
        t.el.__guideTask = n;
        const r = setTimeout(() = >{
            t.el.__destroyTaskGuide()
        },
        (o = t.duration) != null ? o: 3e3);
        t.el.__destroyTaskGuide = async() = >{
            this.isShowTask = void 0,
            clearTimeout(r),
            n.$destroy(),
            n.$el.remove(),
            this.clickHandler && (t.el.removeEventListener("touchend", this.clickHandler, !0), this.clickHandler = null)
        },
        this.clickHandler = async a = >{
            t.sendClick("TASK_GUIDE", {
                task_id: t.id
            }),
            t.onTargetClick && await t.onTargetClick(),
            t.el.__destroyTaskGuide()
        },
        t.el.addEventListener("touchend", this.clickHandler, !0)
    }
    async showNext() {
        if (this.suggestTaskIds.length || toast("去做任务赚金币吧～"), this.taskQueue.length === 0) {
            if (this.updateTaskQueue(), this.taskQueue.length !== 0) {
                this.showNext();
                return
            }
            toast("去做任务赚金币吧～");
            return
        }
        const t = Math.floor(Math.random() * this.taskQueue.length),
        [n] = this.taskQueue.splice(t, 1);
        this.showGuide(n)
    }
    showIfNeeded() {
        var t; (t = this.isShowTask) != null && t.id && this.isShowTask.el.__destroyTaskGuide(),
        setTimeout(() = >{
            this.showNext()
        },
        0)
    }
    updateTaskQueue(t) {
        t && (this.suggestTaskIds = t),
        this.taskQueue = this.suggestTaskIds.map(n = >this.queue.find(r = >r.id === n && r.enabled)).filter(n = >n !== void 0)
    }
    showGuideById(t) {
        const n = this.queue.find(r = >r.id === t && r.enabled);
        n && this.showGuide(n)
    }
}
const taskGuideQueue = new GuideQueue,
guideDirective = {
    bind(e, t) {
        taskGuideQueue.add({...t.value,
            el: e
        })
    },
    update(e, t, n) {
        var r; (r = t.oldValue) != null && r.id && taskGuideQueue.remove(t.oldValue.id),
        taskGuideQueue.add({...t.value,
            el: e
        })
    },
    unbind(e, t, n) {
        typeof e.__destroyTaskGuide < "u" && e.__destroyTaskGuide()
    }
},
useDynamicLoadThemeStyle = (e, t) = >{
    const n = async() = >{
        const o = document.createElement("style");
        return o.innerHTML = (await(e === "KWAI" ? __vitePreload(() = >Promise.resolve({}), __vite__mapDeps([0]), import.meta.url) : __vitePreload(() = >Promise.resolve({}), __vite__mapDeps([1]), import.meta.url))).
    default,
        document.head.append(o),
        () = >{
            o.remove()
        }
    };
    let r;
    watch(t, async o = >{
        if (o) {
            r = await n();
            return
        }
        r != null && (r(), r = void 0)
    })
},
_sfc_main$g = defineComponent({
    name: "Arrow",
    props: {
        direction: {
            type: String,
        default:
            "right"
        }
    }
});
var _sfc_render$g = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("svg", {
        class: ["arrow", "arrow-".concat(t.direction)],
        attrs: {
            width: "80",
            height: "80",
            viewBox: "0 0 80 80",
            xmlns: "http://www.w3.org/2000/svg"
        }
    },
    [n("g", {
        attrs: {
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }
    },
    [n("path", {
        attrs: {
            id: "arrowPath",
            "fill-rule": "nonzero",
            stroke: "currentColor",
            "stroke-width": "4",
            d: "M43.5454545,25 L31.5712974,36.9741572 C30.1512091,38.3942455 30.1512091,40.6966636 31.5712974,42.1167519 L43.5454545,54.0909091 L43.5454545,54.0909091"
        }
    })])])
},
_sfc_staticRenderFns$g = [],
__component__$g = normalizeComponent(_sfc_main$g, _sfc_render$g, _sfc_staticRenderFns$g, !1, null, "f2499d2f", null, null);
const ArrowIcon = __component__$g.exports,
ratio = window.screen.width / 750;
function convertRpxToPx$1(e) {
    return Math.ceil(e * ratio)
}
const _sfc_main$f = defineComponent({
    components: {
        ScrollNum
    },
    props: {
        unit: {
            type: String,
        default:
            ""
        },
        amount: {
            type: [Number, String],
        default:
            0
        },
        scroll: {
            type: Boolean,
        default:
            !1
        },
        height: {
            type: Number,
        default:
            36
        }
    },
    setup(e) {
        function t(n) {
            const r = n.findIndex(o = >o.range[0] !== o.range[1]);
            return n.map((o, a) = >({
                minScrollDigits: 10,
                useTimerToEnd: !0,
                scroll: o.scroll && a >= r
            }))
        }
        return {
            getCustomScrollPropsList: t,
            computedHeight: computed(() = >convertRpxToPx$1(e.height))
        }
    }
});
var _sfc_render$f = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("div", {
        staticClass: "balance"
    },
    [n("ScrollNum", {
        attrs: {
            num: t.amount,
            duration: 1200,
            interval: 200,
            height: t.computedHeight,
            scroll: t.scroll,
            unit: t.unit,
            "get-custom-props-list": t.getCustomScrollPropsList
        }
    })], 1)
},
_sfc_staticRenderFns$f = [],
__component__$f = normalizeComponent(_sfc_main$f, _sfc_render$f, _sfc_staticRenderFns$f, !1, null, "425d992d", null, null);
const Balance$1 = __component__$f.exports;
var UserType = (e = >(e.Default = "default", e.KwaiUser = "kwai_user", e.History = "history", e.PhoneNumber = "phone", e))(UserType || {});
const useLogin = () = >{
    const e = reactive({
        userInfo: {
            userType: UserType.Default
        }
    });
    onBeforeMount(() = >{
        useLegacyYoda("growth.getQuickLoginInfo").then(u = >{
            u.result === 1 && (e.userInfo = u)
        })
    });
    const t = computed(() = >e.userInfo.userType),
    n = computed(() = >e.userInfo.userType === UserType.KwaiUser ? e.userInfo: void 0),
    r = computed(() = >e.userInfo.userType === UserType.History ? e.userInfo: void 0),
    o = computed(() = >e.userInfo.userType === UserType.PhoneNumber ? e.userInfo: void 0),
    a = computed(() = >t.value === UserType.Default),
    i = computed(() = >{
        var l;
        const u = (l = r.value) != null ? l: n.value;
        if (u != null && u.avatar && u.userName) return u
    });
    return {
        login: async u = >{
            const {
                isOtherLogin: l = !0,
                onLoginFailed: f,
                onLoginSuccess: p
            } = u,
            d = await yodaCanIUse$2("growth.quickLogin");
            try {
                d ? await useYoda("growth.quickLogin", {
                    userType: e.userInfo.userType,
                    isOtherLogin: l,
                    showEncourage: !0
                }) : await useYoda("social.login"),
                p == null || p()
            } catch(_) {
                f == null || f()
            }
        },
        userType: t,
        kwaiUserInfo: n,
        phoneUserInfo: o,
        historyUserInfo: r,
        userInfoWithAvatar: i,
        isDefaultUserType: a
    }
},
CircleKwaiIcon = "" + window.__assetsPath + "lib/images/circle-kwai-DomvsTgX.svg",
CircleNebulaIcon = "" + window.__assetsPath + "lib/images/circle-nebula-O4ZifQjD.svg",
KwaiIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnXSURBVHgB7V1NbBVVFD4lJCZCIm7oTh4lkRUFFxjYAE1gYyLUBDYg2iYKGzCCkLgAoSkLEwlIYIOQ0NLAhgWgiQvR0LpQ4sba7kxoR1eWjWjAxFW535s5r9O5P/Pz7r1v+t58yeS93pk3fe98955z7jln7iWqUKGT0UWWMT8/v0O8bBLHxuh1lThqtDQRiONp9Dohjsmurq5xsggrBERCf18c/RQKvJ0BQu6JY9QGGU0RIAQ/QKHgd1BnIhDHkCBihAqiEAFRjz9DnSv4JAJx9AkiAsqJZXkuFoJfJY6L4u1DqoQfR00cs0I2ZygnMo8AcfOaeLlLoWE1Y+pHopnfwmNWHM/+oSWJ7jVEK4RJ27CNqEf4FL3bsnwqoByjIRMBkfDR62vai+b+IPr+pjBPV4ieP6W2BAgBGQdOh+/1CCgjCakEpAofgr91LhR+J2HnwTQiAspAgpGAVOHfuxwKv117fBqgng6cEs73Ud0VAaWQkEbALKmED4FfPSF6/RhVoHA0HD4fEiIDk7c3dB/VEhBZ9LPSCQj/011Ej6eoQgzreok+f6Aj4UtBwjHVCSUBQvjwdH6VTlTCN8NMQp9q5qybB9xVtl49WQnfBMjmqxO6s8o5gkRAFF6oSVfC4Haap1MED8ZCWcnYEcl2ESQVpDS8cDWPvOne28HQ3XVwYeIDrHwlnMjhO2BiNy0meT9/TaUGfseVX1Qu6rhQQ33xhkUERDGeh9INL3zotvdjhrn/dNaZZjTpGwu/E96XEfCMjl9XnVlkC5IE3BAvA4suxw8cfJ2cIN2PNqPsk8Abv6tGwYggYJD/SNqAfukm+IEugC+GYVpU+HyP49fCGWkZoe4Yi2TcGAFa9YPeb3uYQ3Bw18zxlHxAR7k1LLdjlME93LJ7IbgGwJ6xTUHw0AXwv+7Mqc401NDyWKMc5cQXa5XwISA2vhDgipREG1QZPsMeCK7H6Oo/ov/s1t3hqytVhu8DGcq2DbIex5s4AdulG6CH2AYEZRI+vvDtYblXZolEHjof9ugVwnM6dj37CGuoslPhRNNmp4MMZQI28pu4DahJH562PDTxRXa+pz6HH40fj0OlEtjzgTus9rNDnLpTXL2xXeKRYQPqTtzQNmYCbPv9+zXGkoWfRRfjO2G2qdL3QLN2BeoKo2HdRrKCGWXkoKETl6kaG5j7k6wBgtH5+Rc/yD/sobNdGk+MpDS7kwXqTlzjN7lywk1h69vqdqiVooK8PZztOggBIwYe3VsvhcfRzaEq0xGPDgMD7hj+CNiwXd3ejOcxlcGFRIBsYH04YuLC5sCZyejCi7IxCgzwR0B3TW5jN60ZPLqvP8e2xWTL+BoVCRybcgiPBLwmt9lw9/4y2CnYliyOBL4HrlVhi0WPSAF/BLgayv9pBAz3L8/owrUqsjAJdAh/BDwJ5DYbpKzWuJ0zBRJHKsLwHR3aAX8EPPtXbovHZopC59o+sziHWdkOBExNqNubdfV03lURoek6w1xAruCPgEeaLBZCE0VHAZIeupmvbt6hg26i6Djh448A+N0qI4cfjiBYXuBzqMXRgaOhWaGLUc06CEjG4I+AeKg4CQgqT1KFQ9pZQtRZYkPwdHSd4KdvyCX8EQCYCnchgNN30gUGstQJbxkgCESZopvo+bhGBS44doh4RmxeOju43r4BgjAgaBPgDsJmcCgXriaqJDArLWov4vfEPUAgJlmmQgAbxQj4P8gNJyAyYnXZ+ycAQG+3ncdlY2krzQnCEKJoFikE+FVBDF3+tigg/HN77WWzTKEJy2gNAYAtEuBdcb2qKbCW936e6o1aRwAAEopWXXCMPyksJqGI7oaX5lH4QGtsgAr1fPHB0EibDG2eR6F4jmG6J+6Bes77l90IvpRGOA0gA54PG9TnsdrQokJK3hP3wSTLdbV3CgHLqYxwket1lT9uEuUkIA3da+y5m7oQiScsHQK4pghBNtvxeZDww82w7N1ztbV7AiAsnm0+ET/ucc7gFtfp2CyWSgKxoHUisLfnqPdqa3cE6ErPeZKTRSe7KOJN+38gG682J4oGuJsHQHCqcDAL9bOUwJtv4cfhIlSigRsC4M+nJbMRCIN7dlxTRJs1lOwK+P9Zn9hpAm5UUP9H2a8FWThQIYdhDxVVb9MkSDivgMhms4uAgGDT/0KFtaungyK4mYh9+z8VBowgDG6PYgTBbgzvs+82mp7vzVo0rEMpo6EmYOirhI+R4UL4ANxQ3FsF3eiwBH8EwMfe11082OV6URBdnekGt3bAHwEIdnEtKPTqhZwl6T6eDVY9TOHYEWidCoLRBRFYdSULET7CBTNuKyBUaL0NuB/F4E2PHbUxymGEMQJQq48RUfZlCCyjXF4QiKgIqOATFQEtRrkI6N1W3nUfHKEcCZm8y9W0EVpLAFctOJ7uZwYWh/IMfwTEA11ZFtJIAk9Zuq7QWF0j3/BHAFQMZrN4oiWP4Bk733W3dhFDlfZ0PDv2RwCHfIsCIwbhC1dJc9xfFfeZcVs35MYLKhq3wedQEq57WtFVihLCP6R52sZxgt7NCEB8PY9Hw1kuLjfEI629itHCyY36+hIT1DTwIJ/pGQGMNscFXXECAkouWQOvYI7yA70mCwFJwTPwo9Gue8aL05iuYev5ABkBv4mrIFlvrC34lDgvKakDVzbzIhoqlYV2x/rXCM5PN4uXlc5G4wfHCZDNfU8TixZBlyeTLhA0r3qVluHCueG9rSGhviCUJY9LrQkaQomroEkKd0RaQE+Tq0bVR8LYQokKFtbIY6DrK/Zu9lenA9t17RO7el8tw3F+k75sJfK4ZdigAboUfnrag3V5wWlSJIZsG1xNRQTFlq3sircKEv6m5NJl0IWuJ0BFYMMdRV2Ry86lXr74qRD+q/xHkoARSqohl0sXtzsKLF08It2kXj1WkmDZUoJ+HYvR+B9dybNiFMibtPlavr5doF++PhC9f228QRWKGJVaii6o0anQFxYPJRu6VFcpRwHgeh+BdoB+3wCp9wO6YNyQsvXwF/ZWlG1HYL6jX0KnT9WoJCDyUS9JJ+oRye8qElQw76A0pNvMTamCAOycSuHEbJN0sr6R28lKHTHgJUI7qIWvVD0MLQFAtZVhClxvZQhUm3lq4GMzT0bm7WxBxPSE92dtvYGLCUyLBYYIyNZ2toxMJDB4Q+fpaDXapUoIMmbIiSCimX1DZ0SV37G6oXMcgoizpNmWrwJdEoL/OM8HchMARJt9Yr/JGlUAxil0NccpJwpVRYh/NBm5VojqBdS5GBfHILYnLCJ8oNAISCJK5gyIYw+ptkJpL8DnvieO0aJCj8MKAXFEZEBFbadQRa2ipauqAgoFDsOKnPmkDaFXqFCB8QJTveiLc9TGDAAAAABJRU5ErkJggg==",
NebulaIcon = "" + window.__assetsPath + "lib/images/nebula-icon-9xP5CyFu.png",
kpnMap = {
    kwai: "快手",
    nebula: "快手极速版"
},
iconMap = {
    kwai: KwaiIcon,
    nebula: NebulaIcon
},
circleIconMap = {
    kwai: CircleKwaiIcon,
    nebula: CircleNebulaIcon
},
DefaultUser = "" + window.__assetsPath + "lib/images/default-user-BPCxa54T.jpg",
_sfc_main$e = defineComponent({
    __name: "LoginPanel",
    props: {
        buttonText: null,
        bubbleText: null,
        amount: null,
        showConnerText: {
            type: Boolean,
        default:
            !0
        }
    },
    emits: ["login"],
    setup(e, {
        emit: t
    }) {
        const {
            isDefaultUserType: n,
            kwaiUserInfo: r,
            phoneUserInfo: o,
            userInfoWithAvatar: a
        } = useLogin(),
        i = ref$1(!1),
        s = computed(() = >{
            var f;
            return (f = r.value) != null && f.kpn ? iconMap[r.value.kpn] : KwaiIcon
        }),
        u = computed(() = >{
            var f;
            return (f = r.value) == null ? void 0 : f.kpn
        });
        function l(f) {
            t("login", f)
        }
        return {
            __sfc: !0,
            emits: t,
            isDefaultUserType: n,
            kwaiUserInfo: r,
            phoneUserInfo: o,
            userInfoWithAvatar: a,
            imageError: i,
            icon: s,
            kpn: u,
            onLogin: l,
            kpnMap,
            Button,
            DefaultUser
        }
    }
});
var _sfc_render$e = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        staticClass: "quick-login",
        class: r.kpn
    },
    [n("div", {
        staticClass: "user"
    },
    [r.userInfoWithAvatar ? [n("div", [n("div", {
        staticClass: "avatar-box"
    },
    [n("img", {
        staticClass: "avatar",
        attrs: {
            src: r.imageError ? r.DefaultUser: r.userInfoWithAvatar.avatar
        },
        on: {
            error: function(o) {
                r.imageError = !0
            }
        }
    })]), n("div", {
        staticClass: "username"
    },
    [t._v(t._s(r.userInfoWithAvatar.userName))])])] : r.kwaiUserInfo ? [n("div", {
        staticClass: "label"
    },
    [n("img", {
        staticClass: "icon",
        attrs: {
            src: r.icon
        }
    }), n("span", [t._v("使用" + t._s(r.kpnMap[r.kwaiUserInfo.kpn] || "快手") + "账号登录")])])] : r.phoneUserInfo ? [n("div", [n("span", {
        staticClass: "phone"
    },
    [t._v(t._s(r.phoneUserInfo.phoneNumber))])])] : [n("div", {
        staticClass: "label"
    },
    [t._v("你还没有登录")])]], 2), n("div", {
        staticClass: "button"
    },
    [n(r.Button, {
        on: {
            click: function(o) {
                return r.onLogin(!1)
            }
        }
    },
    [t._v(" " + t._s(t.buttonText) + " ")]), t.bubbleText ? n("div", {
        staticClass: "bubble"
    },
    [n("i", {
        staticClass: "wechat"
    }), t._v(t._s(t.bubbleText))]) : t.showConnerText ? n("div", {
        staticClass: "corner-text"
    },
    [t._v("最少领" + t._s(t.amount) + "元")]) : t._e()], 1), r.isDefaultUserType ? t._e() : n("div", {
        staticClass: "other-login",
        on: {
            click: function(o) {
                return r.onLogin(!0)
            }
        }
    },
    [t._v("以其他方式登录")])])
},
_sfc_staticRenderFns$e = [],
__component__$e = normalizeComponent(_sfc_main$e, _sfc_render$e, _sfc_staticRenderFns$e, !1, null, "791c7d46", null, null);
const LoginPanel = __component__$e.exports,
PhoneIcon = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='%23EAEAEA'/%3e%3cmask%20id='mask0_2_16889'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='16'%20y='16'%20width='49'%20height='49'%3e%3cpath%20d='M63.1428%2016.5718H17.428C16.7969%2016.5718%2016.2854%2017.0833%2016.2854%2017.7143V63.4292C16.2854%2064.0602%2016.7969%2064.5718%2017.428%2064.5718H63.1428C63.7739%2064.5718%2064.2854%2064.0602%2064.2854%2063.4292V17.7143C64.2854%2017.0833%2063.7739%2016.5718%2063.1428%2016.5718Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2_16889)'%3e%3cpath%20d='M49.714%2019.429C53.0277%2019.429%2055.714%2022.1152%2055.714%2025.429V54.5718C55.714%2057.8855%2053.0277%2060.5718%2049.714%2060.5718H30.8568C27.5431%2060.5718%2024.8568%2057.8855%2024.8568%2054.5718V25.429C24.8568%2022.1152%2027.5431%2019.429%2030.8568%2019.429H49.714ZM49.714%2022.8575H30.8568C29.4874%2022.8575%2028.368%2023.928%2028.2897%2025.2779L28.2854%2025.429V54.5718C28.2854%2055.9413%2029.3559%2057.0607%2030.7057%2057.1389L30.8568%2057.1432H49.714C51.0834%2057.1432%2052.2028%2056.0727%2052.281%2054.7229L52.2854%2054.5718V25.429C52.2854%2024.0595%2051.2149%2022.9401%2049.865%2022.8619L49.714%2022.8575Z'%20fill='%23222222'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.1437%2022.0005H46.858L45.9115%2024.5584C45.7179%2025.0817%2045.219%2025.4291%2044.661%2025.4291H35.345C34.7877%2025.4291%2034.2893%2025.0826%2034.0952%2024.5603L33.1437%2022.0005Z'%20fill='%23222222'/%3e%3c/g%3e%3c/svg%3e",
_sfc_main$d = defineComponent({
    __name: "LoginStickyBox",
    props: {
        buttonText: null,
        amount: null,
        navBarHeight: null
    },
    emits: ["login"],
    setup(e, {
        emit: t
    }) {
        const {
            isDefaultUserType: n,
            kwaiUserInfo: r,
            phoneUserInfo: o,
            historyUserInfo: a,
            userInfoWithAvatar: i
        } = useLogin(),
        s = ref$1(!1),
        u = computed(() = >{
            var p;
            return (p = r.value) == null ? void 0 : p.kpn
        }),
        l = computed(() = >u.value ? circleIconMap[u.value] : void 0);
        function f(p) {
            t("login", p)
        }
        return {
            __sfc: !0,
            emits: t,
            isDefaultUserType: n,
            kwaiUserInfo: r,
            phoneUserInfo: o,
            historyUserInfo: a,
            userInfoWithAvatar: i,
            imageError: s,
            kpn: u,
            circleIcon: l,
            onLogin: f,
            kpnMap,
            Button,
            DefaultUser,
            PhoneIcon
        }
    }
});
var _sfc_render$d = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        staticClass: "sticky-box",
        class: r.kpn,
        style: {
            top: "".concat(t.navBarHeight - 3, "px")
        }
    },
    [n("div", {
        staticClass: "icon"
    },
    [r.userInfoWithAvatar ? n("div", {
        staticClass: "avatar-box"
    },
    [n("img", {
        staticClass: "avatar",
        attrs: {
            src: r.imageError ? r.DefaultUser: r.userInfoWithAvatar.avatar
        },
        on: {
            error: function(o) {
                r.imageError = !0
            }
        }
    })]) : r.phoneUserInfo ? n("img", {
        attrs: {
            src: r.PhoneIcon
        }
    }) : r.kwaiUserInfo ? n("img", {
        attrs: {
            src: r.circleIcon
        }
    }) : n("img", {
        attrs: {
            src: r.DefaultUser
        }
    })]), n("div", {
        staticClass: "label"
    },
    [n("div", {
        staticClass: "main"
    },
    [n("span", {
        staticClass: "name"
    },
    [r.userInfoWithAvatar ? [t._v(t._s(r.userInfoWithAvatar.userName))] : r.phoneUserInfo ? [t._v(t._s(r.phoneUserInfo.phoneNumber))] : r.kwaiUserInfo ? [t._v("使用" + t._s(r.kpnMap[r.kwaiUserInfo.kpn]) + "账号登录")] : [t._v("你还没有登录")]], 2), r.historyUserInfo ? n("span", {
        staticClass: "tag"
    },
    [t._v("最近登录")]) : t._e()]), r.isDefaultUserType ? t._e() : n("div", {
        staticClass: "sub other-login",
        on: {
            click: function(o) {
                return r.onLogin(!0)
            }
        }
    },
    [t._v("以其他方式登录")])]), n("div", {
        staticClass: "button"
    },
    [n(r.Button, {
        on: {
            click: function(o) {
                return r.onLogin(!1)
            }
        }
    },
    [t._v(" " + t._s(t.buttonText) + " ")])], 1)])
},
_sfc_staticRenderFns$d = [],
__component__$d = normalizeComponent(_sfc_main$d, _sfc_render$d, _sfc_staticRenderFns$d, !1, null, "7f13f95f", null, null);
const LoginStickyBox = __component__$d.exports,
_sfc_main$c = defineComponent({
    __name: "index",
    props: {
        cash: null,
        navBarHeight: null,
        currentCash: null,
        autoJumpWithdrawPage: {
            type: Boolean
        },
        bubbleText: null
    },
    emits: ["refetch"],
    setup(e, {
        emit: t
    }) {
        const n = e,
        r = reactive({
            userInfo: {
                userType: UserType.Default
            }
        }),
        o = ref$1(120),
        a = ref$1(),
        i = ref$1(!1);
        onBeforeMount(() = >{
            useLegacyYoda("growth.getQuickLoginInfo").then(d = >{
                d.result === 1 && (r.userInfo = d)
            })
        });
        const {
            login: s
        } = useLogin(),
        u = computed(() = >r.userInfo.userType === UserType.Default),
        l = computed(() = >r.userInfo),
        f = computed(() = >n.autoJumpWithdrawPage ? "立即领取": u.value ? "立即登录": "一键登录");
        function p(d) {
            s({
                isOtherLogin: d,
                onLoginSuccess() {
                    t("refetch")
                }
            })
        }
        return useIntersectionObservable(a, () = >{
            i.value = !1
        },
        () = >{
            i.value = !0
        },
        {
            rootMargin: "-100px 0px 0px 0px"
        }),
        {
            __sfc: !0,
            props: n,
            emit: t,
            state: r,
            balanceHeight: o,
            loginRef: a,
            showStickyBox: i,
            login: s,
            isDefaultUserType: u,
            userInfo: l,
            buttonText: f,
            onLogin: p,
            Balance: Balance$1,
            LoginPanel,
            LoginStickyBox
        }
    }
});
var _sfc_render$c = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        staticClass: "quick-login-container"
    },
    [n("div", {
        staticClass: "login-profit"
    },
    [t.autoJumpWithdrawPage ? [t._m(0), n("div", {
        staticClass: "font-number"
    },
    [t._v(t._s(t.currentCash))]), t._m(1)] : [t._m(2), n(r.Balance, t._b({
        attrs: {
            height: r.balanceHeight
        }
    },
    "Balance", t.cash, !1)), t._m(3)]], 2), n(r.LoginPanel, {
        attrs: {
            amount: t.cash.amount,
            "button-text": r.buttonText,
            "bubble-text": t.bubbleText
        },
        on: {
            login: r.onLogin
        }
    }), n("transition", {
        attrs: {
            duration: 100,
            name: "anim-login"
        }
    },
    [n(r.LoginStickyBox, {
        directives: [{
            name: "show",
            rawName: "v-show",
            value: r.showStickyBox,
            expression: "showStickyBox"
        }],
        attrs: {
            amount: t.cash.amount,
            "button-text": r.buttonText,
            "nav-bar-height": t.navBarHeight
        },
        on: {
            login: r.onLogin
        }
    })], 1), n("div", {
        ref: "loginRef"
    })], 1)
},
_sfc_staticRenderFns$c = [function() {
    var e = this,
    t = e._self._c;
    return e._self._setupProxy,
    t("div", {
        staticClass: "extra prev-extra"
    },
    [t("span", {
        staticClass: "extra-text"
    },
    [e._v("必得")])])
},
function() {
    var e = this,
    t = e._self._c;
    return e._self._setupProxy,
    t("div", {
        staticClass: "extra next-extra"
    },
    [t("span", {
        staticClass: "extra-text"
    },
    [e._v("元")])])
},
function() {
    var e = this,
    t = e._self._c;
    return e._self._setupProxy,
    t("div", {
        staticClass: "extra prev-extra"
    },
    [t("span", {
        staticClass: "extra-text"
    },
    [e._v("最少")])])
},
function() {
    var e = this,
    t = e._self._c;
    return e._self._setupProxy,
    t("div", {
        staticClass: "extra next-extra"
    },
    [t("div", {
        staticClass: "corner"
    },
    [e._v("新用户")]), t("span", {
        staticClass: "extra-text"
    },
    [e._v("元")])])
}],
__component__$c = normalizeComponent(_sfc_main$c, _sfc_render$c, _sfc_staticRenderFns$c, !1, null, "87e3c4e9", null, null);
const QuickLogin = __component__$c.exports,
REQUEST_TIME_OUT = 3e4,
CALENDAR_STORAGE_KEY = "CALENDAR_EVENT_ID";
var RefreshType = (e = >(e.BASIC_REFRESH = "basic_refresh", e.REFRESH = "refresh", e.REENTRY = "reentry", e.FOREGROUND = "foreground", e.TASK_SELECT = "task_select", e.RELOAD = "reload", e.INIT = "init", e))(RefreshType || {}),
CountDownRefreshType = (e = >(e.ALL = "allTask", e.SINGLE = "singleTask", e))(CountDownRefreshType || {}),
TaskId = (e = >(e[e.WRITE_CODE_TASK = 2] = "WRITE_CODE_TASK", e[e.INVITE = 3] = "INVITE", e[e.NEW_USER_SIGN = 139] = "NEW_USER_SIGN", e[e.SPRING_COIN = 10] = "SPRING_COIN", e[e.KWAI_GAME = 15] = "KWAI_GAME", e[e.EARNING = 1] = "EARNING", e[e.AWAKEN = 19] = "AWAKEN", e[e.BINDPHONE = 23] = "BINDPHONE", e[e.FACE_QRCODE = 4] = "FACE_QRCODE", e[e.ADD_BOOK_TASK_ID = 63] = "ADD_BOOK_TASK_ID", e[e.FIRST_INVITE = 30] = "FIRST_INVITE", e[e.FENTIAO_LIVE = 34] = "FENTIAO_LIVE", e[e.FENTIAO_LIVE_3 = -5] = "FENTIAO_LIVE_3", e[e.SHOP_ORDER = 104] = "SHOP_ORDER", e[e.SHARE_COIN = 37] = "SHARE_COIN", e[e.AD_PLAY_COIN = 17] = "AD_PLAY_COIN", e[e.Go_INSPIRE_SHOP = 148] = "Go_INSPIRE_SHOP", e[e.REGRESS_GIFT = 50] = "REGRESS_GIFT", e[e.REGRESS_GIFT_OPT = 162] = "REGRESS_GIFT_OPT", e[e.PUSH_NOTIFICATION = 159] = "PUSH_NOTIFICATION", e[e.VIDEO_AWARD_DOUBLE = 177] = "VIDEO_AWARD_DOUBLE", e[e.DISH = 179] = "DISH", e[e.LAUNCH_KWAI = 183] = "LAUNCH_KWAI", e[e.PIGGY_BANK = 2e4] = "PIGGY_BANK", e[e.WIDGET_TASK = 187] = "WIDGET_TASK", e[e.CREATOR_TASK = 1e4] = "CREATOR_TASK", e[e.TREASURE_BOX_2 = -3] = "TREASURE_BOX_2", e[e.TREASURE_BOX_5 = -102] = "TREASURE_BOX_5", e[e.TREASURE_BOX_8 = -104] = "TREASURE_BOX_8", e[e.KWAI_SHOP_VIEW = 232] = "KWAI_SHOP_VIEW", e[e.KWAI_SHOP_ORDER = 233] = "KWAI_SHOP_ORDER", e[e.SCORE_TASK = 20013] = "SCORE_TASK", e[e.ENCOURAGE_WIDGET_TASK = 20018] = "ENCOURAGE_WIDGET_TASK", e[e.GROWTH_TASK = 20019] = "GROWTH_TASK", e[e.READ_TASK = 20052] = "READ_TASK", e[e.FLIP_CARD = 20043] = "FLIP_CARD", e[e.ALIPAY_CASH = 20051] = "ALIPAY_CASH", e[e.VIDEO_TASK = 197] = "VIDEO_TASK", e[e.SIGN_TASK = 20022] = "SIGN_TASK", e[e.ACTIVITIES_CENTER_TASK = 20206] = "ACTIVITIES_CENTER_TASK", e[e.FOLLOW_SHEET_TASK = 20209] = "FOLLOW_SHEET_TASK", e[e.ENCOURAGE_WIDGET_ADD_TASK = 20221] = "ENCOURAGE_WIDGET_ADD_TASK", e[e.ENCOURAGE_WIDGET_CLICK_TASK = 20222] = "ENCOURAGE_WIDGET_CLICK_TASK", e[e.PUSH_TASK = 220] = "PUSH_TASK", e))(TaskId || {}),
TaskType = (e = >(e.NOVICE = "novice", e.DAILY = "daily", e.CORE = "core", e))(TaskType || {}),
LinkType = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SCHEME = 1] = "SCHEME", e[e.WEBVIEW = 2] = "WEBVIEW", e[e.SERVICE = 3] = "SERVICE", e[e.SCAN = 4] = "SCAN", e[e.RESERVATION = 5] = "RESERVATION", e[e.INVITATION = 6] = "INVITATION", e[e.SEND_GET_REQUEST = 9] = "SEND_GET_REQUEST", e[e.WECHAT_MINI_PROGRAM = 11] = "WECHAT_MINI_PROGRAM", e[e.LAUNCH_APP = 12] = "LAUNCH_APP", e[e.OPEN_TURNTABLE = 14] = "OPEN_TURNTABLE", e[e.AWARD_VIDEOI = 15] = "AWARD_VIDEOI", e[e.CALENDAR = 17] = "CALENDAR", e[e.NEW_AWARD_VIDEO = 18] = "NEW_AWARD_VIDEO", e[e.INVOKE_BRIDGE = 19] = "INVOKE_BRIDGE", e[e.REPORT_AND_JUMP = 20] = "REPORT_AND_JUMP", e[e.AD_VIDEO_OR_LIVE = 101] = "AD_VIDEO_OR_LIVE", e[e.AD_NEW_NEO_SHOPPING = 102] = "AD_NEW_NEO_SHOPPING", e))(LinkType || {}),
PageRef = (e = >(e[e.WITHDRAW_GUIDE_POPUP = 18] = "WITHDRAW_GUIDE_POPUP", e[e.DAYS_GIFT = 23] = "DAYS_GIFT", e[e.RETURN_GIFT = 20] = "RETURN_GIFT", e[e.RETURN_GIFT_PUSH = 25] = "RETURN_GIFT_PUSH", e[e.BASIC_REFRESH = 999] = "BASIC_REFRESH", e[e.ONLY_BASICINFO = 9999] = "ONLY_BASICINFO", e[e.BASIC_AND_SINGLETASK = 99999] = "BASIC_AND_SINGLETASK", e))(PageRef || {}),
PopupType = (e = >(e.ASSISTANCE = "assistancePopup", e.COMMON = "commonAwardPopup", e.POPUP = "popup", e.TREASULRE_BOX = "treasureBoxPopup", e.PIGGY_BANK_POPUP = "piggyBankAwardPopup", e.NEW_COMMON_AWARD_POPUP = "commonAwardFeedbackPopup", e.LUCKY_DUCK_POPUP = "luckyDuckPopup", e.LUCKY_DUCK_WIDGET_POPUP = "luckyDuckFacePopup", e.GROWTH_LEVEL_POPUP = "growthLevelPopup", e.UNION_SIGNIN_POPUP = "unionSignInPopup", e.UNION_TREASURE_POPUP = "unionTreasureBoxPopup", e.PRODUCE_POPUP = "producePopup", e.NEW_LOGIN_AWARD_POPUP = "unLoginPrizeAwardPopup", e.INTEGRATION_POPUP = "integrationPopup", e.SHARE_PANEL = "notInit_sharePanel", e.COIN_PROFIT = "notInit_coinProfitDialog", e.SHARE_CONFIRM = "notInit_shareConfirm", e.DAILY_CASH_TURNTABLE = "notInit_dailyCashTurntable", e.SHARE_TOKEN_POPUP = "notInit_shareTokenPopup", e.ALIPAY_CASH_POPUP = "alipayCashPopup", e.ENCOURAGE_WIDGET_RETAIN_OR_GUIDE_POPUP = "notInit_encourageWidgetRetainOrGuidePopup", e.WITHDRAW_GUIDE_POPUP = "withDrawGuidePopup", e.CREATOR_TASK_POPUP = "creatorTaskPopUp", e.COIN_CREDIT_NEW_COUPON = "newCouponPopup", e.ACTIVE_INCENTIVE_TASK = "activeIncentiveTask", e.LUCKY_BAG_POPUP = "collectCoinsPopup", e.REVENUE_POPUP = "userCoinRevenuePopup", e.DUCK_POPUP = "luckDuckCoreTestPopup", e.FOLLOW_SHEET_POPUP = "followSheetPopup", e.DAILY_GIFT_POPUP = "dailyGiftSignInPopup", e.ACTIVITY_POPUP = "activityPopup", e.QUIT_ACTIVITY_POPUP = "quitActivityPopup", e))(PopupType || {}),
EProgressType = (e = >(e[e.ORIGIN = 0] = "ORIGIN", e[e.EXCITE_MORE = 1] = "EXCITE_MORE", e))(EProgressType || {}),
SourceType = (e = >(e.TIMER = "timer", e.LOGIN_QUICK_CASH = "login_quick_cash", e.BOTTOM_GUIDE_FIRST = "bottom_guide_first", e.MENU = "menu", e.FEEDS_LOGIN_QUICK_CASH = "feeds_login_quick_cash", e))(SourceType || {}),
FlyAnimationType = (e = >(e.COIN = "coin", e.CASH = "cash", e.ALL = "all", e))(FlyAnimationType || {}),
FairyItemType = (e = >(e.COIN = "coin", e.CASH = "cash", e))(FairyItemType || {});
const useCommonCashData = e = >{
    const t = computed(() = >{
        var r, o;
        return (o = (r = e.value) == null ? void 0 : r.coin) != null ? o: "0"
    });
    return {
        cash: computed(() = >{
            var r, o;
            return (o = (r = e.value) == null ? void 0 : r.cash) != null ? o: "0"
        }),
        coin: t
    }
};
function judgeFetchIsSuccess(e) {
    return e && [10007, 1].includes(e)
}
function formatError(e, t, n = REQUEST_TIME_OUT) {
    var o;
    if (e instanceof Error) return e.message === "timeout" ? "timeout of ".concat(n, "ms exceeded") : e.message;
    const r = e == null ? void 0 : e.status;
    return typeof r == "number" && ![200, 304].includes(r) ? "Request failed with status code ".concat(r) : !e && t ? "".concat(t.result, ":").concat((o = t.error_msg) != null ? o: "") : JSON.stringify(e)
}
function usePolling({
    fetcher: e,
    auto: t = !0,
    interval: n = 2e3,
    times: r = 3,
    callback: o,
    endCallback: a
}) {
    let i = r,
    s = null;
    function u() {
        typeof a == "function" && a()
    }
    function l() {
        u(),
        s && (clearTimeout(s), s = null)
    }
    async
    function f() {
        if (n <= 0 || i <= 0) {
            u();
            return
        }
        const p = await e();
        typeof o == "function" && o(p) || (--i ? s = setTimeout(f, n) : u())
    }
    return t && f(),
    {
        cancel: l,
        start: f
    }
}
const useBasicModel = createUseModel(() = >{
    radar.customStage("start_fetch_basicInfo", {
        sendTimeline: !1
    });
    const e = ref$1(!1);
    function t() {
        e.value || (e.value = !0, radar.customStage("end_fetch_basicInfo", {
            sendTimeline: !1
        }))
    }
    const n = ref$1(!1),
    r = ref$1(0),
    o = ref$1(0),
    a = ref$1(0),
    i = ref$1("0"),
    s = ref$1("0"),
    u = ref$1("0"),
    l = ref$1("0"),
    f = ref$1(!1),
    p = ref$1(!1),
    {
        firstFetch: d,
        fetch: _,
        refetch: y,
        data: v,
        error: m,
        onData: g,
        onError: C,
        onFinish: I,
        loading: S
    } = useFetch({
        url: "/rest/n/nebula/activity/earn/overview/basicInfo"
    }),
    w = k = >{
        var x;
        return r.value = (x = k == null ? void 0 : k.delayUpdatelTime) != null ? x: 0,
        _()
    },
    b = k = >{
        var x;
        return r.value = (x = k == null ? void 0 : k.delayUpdatelTime) != null ? x: 0,
        y()
    },
    A = ref$1(null),
    E = computed(() = >{
        var k, x;
        return (x = (k = A.value) == null ? void 0 : k.hitUnloginOptimization) != null ? x: !1
    }),
    P = computed(() = >{
        var k;
        return (k = A.value) == null ? void 0 : k.cashCoinDataError
    }),
    L = computed(() = >{
        var k;
        return (k = v.value) == null ? void 0 : k.result
    }),
    D = computed(() = >L.value === 10007),
    V = computed(() = >D.value && !E.value),
    Q = computed(() = >E.value && D.value),
    oe = computed(() = >{
        var k, x;
        return (x = (k = A.value) == null ? void 0 : k.autoJumpWithdrawPage) != null ? x: !1
    }),
    te = computed(() = >{
        var k, x;
        return (x = (k = A.value) == null ? void 0 : k.xinHuiUnLoginBubbleText) != null ? x: ""
    }),
    ne = computed(() = >{
        var k, x;
        return (x = (k = A.value) == null ? void 0 : k.withdrawPageUrl) != null ? x: ""
    }),
    B = computed(() = >{
        var k, x;
        return (x = (k = A.value) == null ? void 0 : k.totalCoin) != null ? x: "0"
    }),
    T = computed(() = >{
        var k, x;
        return (x = (k = A.value) == null ? void 0 : k.totalCash) != null ? x: "0"
    }),
    O = computed(() = >{
        var k, x, fe;
        return (fe = (x = (k = A.value) == null ? void 0 : k.abMap) == null ? void 0 : x.summerVacationActivity2024) != null ? fe: 0
    }),
    R = computed(() = >[1, 2].includes(O.value)),
    $ = computed(() = >O.value === 2),
    M = computed(() = >{
        var k, x;
        return R.value || ((x = (k = A.value) == null ? void 0 : k.showTopAnchorPoint) != null ? x: !1)
    }),
    W = computed(() = >{
        var k, x;
        if (A.value) return {...A.value,
            coin: (k = A.value) == null ? void 0 : k.totalCoin,
            cash: (x = A.value) == null ? void 0 : x.allCash
        }
    }),
    {
        coin: Z,
        cash: F
    } = useCommonCashData(W),
    {
        exchangeCoinState: U,
        showExchangeChangeSwitch: re,
        showManualExchangeBtn: _e,
        isCoinExchangeSO: de,
        isCoinExchangeShowPopup: ve,
        coinExchangeLevels: pe
    } = useCoinExchangeInfo(W);
    function he() {
        f.value = !1,
        p.value = !1,
        u.value = "0",
        l.value = "0"
    }
    function ye() {
        he(),
        A.value = null
    }
    const le = ref$1(),
    K = ref$1(!1),
    ee = () = >{
        var k, x, fe;
        K.value || ((fe = (x = (k = A.value) == null ? void 0 : k.awardFeedbackEnhanceConfig) == null ? void 0 : x.effectType) != null ? fe: "") !== "" && (le.value = createDefer()),
        K.value = !1
    };
    g(k = >{
        const x = judgeFetchIsSuccess(k == null ? void 0 : k.result);
        if (n.value = !x, x) {
            A.value = k.data,
            updateCommonPackage({
                h5_extra_attr: {
                    nebula_task_earning_type: 2
                }
            });
            const {
                cashCoinDataError: fe,
                unloginCoinAmount: be = 0
            } = k.data || {};
            if (o.value = +u.value, a.value = +l.value, fe) return;
            i.value = D.value ? "".concat(be) : Z.value,
            s.value = F.value,
            f.value = !!+i.value && +i.value >= o.value,
            p.value = !!+s.value && +s.value >= a.value,
            ee(),
            setTimeout(async() = >{
                le.value != null && (await le.value.promise, le.value = null),
                u.value = i.value,
                l.value = ( + s.value).toFixed(2)
            },
            r.value),
            n.value = !1;
            return
        }
    }),
    C(() = >{
        n.value = !0,
        K.value = !1
    }),
    I(() = >{
        t()
    });
    const J = computed(() = >n.value ? formatError(m.value, v.value) : ""),
    se = computed(() = >{
        var k, x;
        return ((x = (k = A.value) == null ? void 0 : k.consumptionList) != null ? x: []).slice(0, 3)
    }),
    me = computed(() = >{
        var k;
        return (k = A.value) == null ? void 0 : k.ugGrowthLevelInfo
    }),
    ge = computed(() = >{
        var k;
        return (k = me.value) == null ? void 0 : k.coinBoostPrivilegeView
    }),
    X = computed(() = >{
        var k, x;
        return D.value && (((k = A.value) == null ? void 0 : k.hitXinHuiUnLoginOptimization) || ((x = A.value) == null ? void 0 : x.enableRewardExperience))
    });
    let N = 0;
    const H = computed(() = >{
        var k;
        return (k = A.value) != null && k.hasNoviceGuide && N++,
        N > 0
    });
    return reactive({
        firstFetchBasicInfo: d,
        refetchBasicInfo: b,
        fetchBasicInfo: w,
        resetBalance: he,
        resetData: ye,
        isLoading: S,
        resultCode: L,
        isError: n,
        errorMessage: J,
        needLogin: D,
        needLoginMask: V,
        isQuickLogin: E,
        needQuickLogin: Q,
        consumptionList: se,
        ugLevelInfo: me,
        coinBoostPrivilegeView: ge,
        withdrawPageUrl: ne,
        data: A,
        skin: computed(() = >{
            var k, x;
            return (x = (k = A.value) == null ? void 0 : k.skin) != null ? x: ""
        }),
        clientIp: computed(() = >{
            var k;
            return (k = A.value) == null ? void 0 : k.clientIp
        }),
        userData: computed(() = >{
            var k;
            return (k = A.value) == null ? void 0 : k.userData
        }),
        coin: u,
        currentCoin: i,
        isCoinScroll: f,
        cash: l,
        currentCash: s,
        isCashScroll: p,
        cashCoinDataError: P,
        unLoginTotalCoin: B,
        unLoginTotalCash: T,
        exchangeCoinState: U,
        showExchangeChangeSwitch: re,
        showManualExchangeBtn: _e,
        isCoinExchangeSO: de,
        isCoinExchangeShowPopup: ve,
        coinExchangeLevels: pe,
        hitXinHuiUnLogin: X,
        xinHuiUnLoginBubbleText: te,
        autoJumpWithdrawPage: oe,
        hasNoviceGuide: H,
        deferToIncrease: le,
        stopCreateDefer: K,
        showTopAnchorPoint: M,
        summerVacationActivity2024: O,
        isHitEarningActivityMix: R,
        isEarningActivityFold: $
    })
});
function preloadMiniApp(e) {
    useYoda("mini.prepareMini", {
        action: "preload",
        data: {
            url: e
        }
    })
}
function useBannerUpdated(e) {
    watch(() = >e.value, t = >{
        t.forEach(n = >{
            n.linkUrl.includes("miniapp") && preloadMiniApp(n.linkUrl)
        })
    },
    {
        immediate: !0
    })
}
async
function getPushPermission() {
    const {
        permitted: e
    } = await useYoda("system.getPushPermission");
    return e
}
async
function getWidgetStatus(e) {
    var r;
    const t = (r = api.get("appver")) != null ? r: "0";
    if (e === "encourage" && compareVersion$2(t, "11.3.40") < 0) return Promise.resolve(!0);
    if (e === "quick_2_2") {
        if (isIOS$1()) {
            if (compareVersion$2(t, "12.4.40") < 0) return Promise.resolve(!0)
        } else if (compareVersion$2(t, "12.4.20") < 0) return Promise.resolve(!0)
    }
    const {
        canAddWidget: n = !0
    } = await Promise.race([useYoda("growth.getUserIsAddGrowthWidget", {
        widgetType: e
    }), new Promise(o = >{
        setTimeout(() = >{
            o({
                canAddWidget: !0
            })
        },
        5e3)
    })]);
    return Promise.resolve(!n)
}
let deviceUniqueInfo = {
    imei: "",
    idfa: "",
    oaid: ""
};
async
function getDeviceUniqueInfo() {
    var n, r, o;
    if (Object.keys(deviceUniqueInfo).some(a = >!!deviceUniqueInfo[a])) return Promise.resolve(deviceUniqueInfo);
    const {
        data: t
    } = await useYoda("webview.getDeviceInfo");
    return deviceUniqueInfo = {
        imei: (n = t.imei) != null ? n: "",
        idfa: (r = t.idfa) != null ? r: "",
        oaid: (o = t.oaid) != null ? o: ""
    },
    deviceUniqueInfo
}
async
function getNotificationKey() {
    try {
        const {
            notificationKey: e,
            notificationBizId: t
        } = await useYoda("task.getNotificationKey");
        if (e && t) return {
            notificationKey: e,
            notificationBizId: t
        }
    } catch(e) {}
    return {}
}
function clearNotificationByKeys(e = []) {
    return Promise.all(e.map(t = >useYoda("task.clearNotificationByKey", {
        notificationKey: t
    })))
}
async
function useYodaLogin(e = null, t = {
    checkFromServer: !0
}) {
    const {
        fetch: n
    } = useFetch({
        url: "/rest/n/nebula/earn/module/report/login",
        auto: !1
    });
    e && n(e);
    const {
        result: r
    } = await useLegacyYoda("social.login", t);
    if (r === 1) return r;
    throw new Error
}
async
function searchCalendarEvent(e) {
    return !! e.eventId
}
async
function deleteCalendarEvent(e) {
    return await useLegacyYoda("feed.changeEventForCalendar", {
        method: "delete",
        event: {
            type: 1,
            ...e,
            eventId: String(e.eventId)
        }
    }),
    !0
}
async
function addCalendarEvent(e) {
    const {
        eventId: t,
        result: n
    } = await useLegacyYoda("feed.changeEventForCalendar", {
        method: "add",
        event: {
            type: 1,
            ...e
        }
    });
    return {
        eventId: t,
        result: n
    }
}
async
function addCalendarEventAndReport({
    calendarParams: e,
    reportUrl: t,
    reportExtParams: n = {},
    needToast: r = !1
}) {
    const {
        result: o,
        eventId: a
    } = await addCalendarEvent(e);
    if (o !== 1 || !a) return o !== 412 && r && showToast("提醒开启失败，请检查权限后重试"),
    !1;
    const {
        fetch: i
    } = useFetch({
        url: t,
        auto: !1,
        data: {...n,
            eventId: a
        }
    }),
    {
        result: s
    } = await i();
    return r && showToast(s === 1 ? "提醒已开启！": "提醒开启失败，请重试！"),
    s === 1
}
async
function getContactAccessStatus() {
    const {
        status: e,
        result: t
    } = await useLegacyYoda("social.getContactAccessStatus");
    return Number(e) === 1
}
const CUSTOM_BACK_EVENT = "get_reward_from_sleep_or_dish",
urlSearchParams = getUrlSearchParams(),
isFirstLevelPage = urlSearchParams.source === "bottom_guide_first" || +urlSearchParams.hideBack == 1,
isFromBottomGuide = ["bottom_guide_first", "bottom_guide_second"].includes(urlSearchParams.source),
isCached = ref$1(!1),
useCommonModel = createUseModel(() = >{
    const e = isIOS$1(),
    t = isAndroid$2(),
    n = reactive({
        fold: !1,
        scrollTop: 0,
        statusBarHeight: 20,
        beforeCloseFns: []
    });
    function r(u) {
        n.statusBarHeight = u
    }
    function o(u) {
        n.scrollTop = u
    }
    function a(u) {
        n.fold = u
    }
    function i(u, l = !1) {
        n.beforeCloseFns.includes(u) || (l ? n.beforeCloseFns.unshift(u) : n.beforeCloseFns.push(u))
    }
    async
    function s() {
        for (; n.beforeCloseFns.length;) {
            const u = n.beforeCloseFns[0];
            try {
                await u()
            } catch(l) {
                throw new Error
            }
            n.beforeCloseFns.shift()
        }
    }
    return reactive({...toRefs(n),
        urlSearchParams,
        updateStatusBarHeight: r,
        updateScrollTop: o,
        updateFold: a,
        isIOS: e,
        isAndroid: t,
        isFromBottomGuide,
        isFirstLevelPage,
        isFromXtab: urlSearchParams.source === "hot_channel_tab",
        isFromToptab: urlSearchParams.source === "top_tab",
        isFromRegressGiftPopup: urlSearchParams.source === "REWARD_PACKAGE_POPUP",
        isFromRegressGiftPush: urlSearchParams.source === "ECOURAGE_ACTIVITY_PUSH_LZJ",
        addBeforeCloseFns: i,
        execBeforeCloseFns: s,
        isCached
    })
}),
refreshModelState = reactive({
    isCurrentTab: !0,
    canClickTabRefresh: !1,
    refreshType: RefreshType.INIT,
    needRefresh: !1,
    pageRef: null,
    taskRef: null,
    polledTask: null,
    currentTask: null,
    needRefreshWidget: !1
}),
widgetTypeOf2Plus2 = "quick_2_2",
add2Plus2QuickEncourageWidget = async() = >{
    const e = "添加失败，请尝试重新点击添加或前往桌面手动添加";
    try {
        const {
            oneKeyAddWidget: t,
            addWidgetSuccess: n,
            phoneName: r
        } = await useYoda("growth.quickyRequestPinAppWidget");
        if (!t) return "unSupport";
        const o = await getWidgetStatus(widgetTypeOf2Plus2);
        return n && o ? (showToast("添加成功，可以领奖啦"), "success") : (showToast(e), "fail")
    } catch(t) {
        return showToast(e),
        "fail"
    }
};
let videoOrLiveLoading = !1,
loadingFlag$1 = 0;
const refreshDeal = e = >{
    if (isInNebula()) useYoda("kwai.emit", {
        type: "h5_ad_video_task",
        data: JSON.stringify({
            result: 1,
            coin: (e == null ? void 0 : e.neoAmount) || 0,
            toast: e == null ? void 0 : e.toast
        })
    });
    else if (isInKwai()) {
        let t = "";
        if (e != null && e.toast) t = e.toast;
        else if (e != null && e.neoAmount) t = "".concat(e == null ? void 0 : e.neoAmount).concat($unit, "已到账");
        else if (e != null && e.neoToH5Data) {
            const n = JSON.parse(decode(e == null ? void 0 : e.neoToH5Data));
            t = n == null ? void 0 : n.toast
        }
        useYoda("event.dispatchEvent", {
            type: "native_refresh_task_data",
            data: {
                result: 1,
                toast: t,
                needRefetch: !0
            }
        })
    }
},
realOpenADVideoOrLive = async e = >{
    const {
        neoParams: t,
        logInfo: n,
        firstCallBack: r,
        finishCallback: o,
        callback: a
    } = e,
    i = await yodaCanIUse$2("advertise.startNeoTask") || !0;
    if (videoOrLiveLoading || !i || !t) return ! i && toast("当前非最新版本，不支持跳转直播间，请更新App后再试"),
    !1;
    videoOrLiveLoading = !0,
    useYoda("ui.showLoading"),
    loadingFlag$1 && clearTimeout(loadingFlag$1),
    loadingFlag$1 = window.setTimeout(() = >{
        useYoda("ui.hideLoading"),
        loadingFlag$1 = 0
    },
    2e3);
    const s = getEncodedTrackInfo(n).result;
    useYoda("advertise.startNeoTask", {
        neoParams: t,
        awardType: 2,
        timeout: 5e3,
        encourageEventTracking: s
    },
    u = >{
        var _, y, v;
        const {
            result: l,
            data: f,
            taskType: p,
            isAwardResult: d
        } = u;
        l === 1 ? d ? (p === 1 || p === 3) && (f != null && f.taskCompleted) && (o == null || o(), refreshDeal(f)) : (videoOrLiveLoading = !1, loadingFlag$1 && clearTimeout(loadingFlag$1), loadingFlag$1 = 0, useYoda("ui.hideLoading"), r == null || r(), p === 1 ? (_ = a == null ? void 0 : a.videoRefetch) == null || _.call(a) : p === 2 ? (y = a == null ? void 0 : a.liveRefetch) == null || y.call(a) : (v = a == null ? void 0 : a.videoOrLiveRefetch) == null || v.call(a)) : (videoOrLiveLoading = !1, loadingFlag$1 && clearTimeout(loadingFlag$1), loadingFlag$1 = 0, useYoda("ui.hideLoading"), (u == null ? void 0 : u.message) !== "task is not finish" && toast("网络错误，请重试"))
    })
},
openADVideoOrLive = throttle$1(realOpenADVideoOrLive, 1e3, {
    trailing: !1
});
async
function relGotoNebulaAwardVideoTask(e) {
    return await yodaCanIUse("feed", "nebulaAwardVideoTask") ? await useLegacyYoda("feed.nebulaAwardVideoTask", {
        scheme: e
    }) : !1
}
const gotoNebulaAwardVideoTask = throttle$1(relGotoNebulaAwardVideoTask, 1e3, {
    trailing: !1
});
async
function relStartNeoAdVideo(e, t) {
    const n = getEncodedTrackInfo(t).result,
    r = await useLegacyYoda("advertise.startNeoAdVideo", {
        neoParams: e,
        encourageEventTracking: n
    }),
    {
        result: o,
        data: a
    } = r;
    o === 1 && (a != null && a.taskCompleted) && useYoda("kwai.emit", {
        type: "h5_ad_video_task",
        data: JSON.stringify({
            result: 1,
            coin: (a == null ? void 0 : a.neoAmount) || 0
        })
    })
}
const startNeoAdVideo = throttle$1(relStartNeoAdVideo, 1e3, {
    trailing: !1
}),
relOpenDNeoShopping = async e = >{
    if (!await yodaCanIUse("advertise", "startNeoShopping") || !e) return ! 1;
    const n = await useLegacyYoda("advertise.startNeoShopping", {
        neoParams: e
    }); (n == null ? void 0 : n.result) !== 1 && showToast("网络错误，请重试")
},
openADNeoShopping = throttle$1(relOpenDNeoShopping, 1e3, {
    trailing: !1
});
function invokeBridge(e, t) {
    useYoda(e, t).
    catch(() = >{})
}
function openLinkUrl(e, t, n) {
    var r, o, a;
    if (e === LinkType.WEBVIEW) if (((o = (r = n == null ? void 0 : n.extParam) == null ? void 0 : r.coinBuyCouponList) == null ? void 0 : o.length) > 0) {
        const i = {};
        i[couponParamNameMap.shouldAutoExchange] = "true",
        openWebview(appendSearchParamsToUrl(addEventTrackingToUrl(t, n == null ? void 0 : n.eventTrackingLogInfo), i))
    } else openWebview(addEventTrackingToUrl(t, n == null ? void 0 : n.eventTrackingLogInfo));
    if (e === LinkType.SCHEME && (flush(), setTimeout(() = >{
        window.location.href = addEventTrackingToUrl(t, n == null ? void 0 : n.eventTrackingLogInfo)
    },
    100)), e === LinkType.INVOKE_BRIDGE) {
        const {
            bridgeParams: i = {}
        } = (a = n == null ? void 0 : n.extParam) != null ? a: {};
        t && invokeBridge(t, i)
    }
    e === LinkType.AWARD_VIDEOI && gotoNebulaAwardVideoTask(addEventTrackingToUrl(t, n == null ? void 0 : n.eventTrackingLogInfo)),
    e === LinkType.NEW_AWARD_VIDEO && startNeoAdVideo(t, n == null ? void 0 : n.eventTrackingLogInfo),
    e === LinkType.AD_VIDEO_OR_LIVE && openADVideoOrLive({
        neoParams: t,
        callback: {
            liveRefetch: () = >{
                refreshModelState.needRefresh = !0,
                refreshModelState.needRefreshWidget = !0
            }
        },
        logInfo: n == null ? void 0 : n.eventTrackingLogInfo
    }),
    e === LinkType.AD_NEW_NEO_SHOPPING && openADNeoShopping(t)
}
function goInvite(e) {
    let t;
    typeof e == "string" ? t = e: t = e === 1 ? "cash_popup": "coin_popup";
    const n = "/fission/invite?hyId=nebula_fission&source=".concat(t);
    openWebview(n)
}
const isStartFansLivePlay = ref$1(!1);
async
function relStartFansLivePlay(e, t) {
    if (isStartFansLivePlay.value) return;
    const n = getEncodedTrackInfo(t).result;
    if (await yodaCanIUse("advertise", "startFansTopLivePlay")) {
        isStartFansLivePlay.value = !0;
        const {
            result: r
        } = await useLegacyYoda("advertise.startFansTopLivePlay", {
            timeout: 5e3,
            awardType: 0,
            neoParams: e != null ? e: "",
            encourageEventTracking: n
        });
        r !== 1 ? (showToast(r === -1 ? "暂无直播内容，请5分钟后再尝试": "网络错误，请重试"), isStartFansLivePlay.value = !1) : setTimeout(() = >{
            isStartFansLivePlay.value = !1
        },
        1e3)
    } else showToast("当前非最新版本，不支持跳转直播间，请更新App后再试")
}
const startFansLivePlay = throttle$1(relStartFansLivePlay, 1e3, {
    trailing: !1
});
function getTraceDetailFromUrl(e, t) {
    if (e !== LinkType.WEBVIEW) return "";
    const {
        traceDetail: n = ""
    } = getUrlSearchParams(t);
    return n
}
function getBannerLog({
    banner: e,
    type: t,
    params: n = {},
    clientIp: r = ""
}) {
    var u;
    const {
        linkType: o,
        linkUrl: a,
        extParam: i
    } = e,
    s = getTraceDetailFromUrl(o, a);
    return {
        contentPackage: {
            ks_order_info_package: {
                ks_order_id: (u = i == null ? void 0 : i.ks_order_id) != null ? u: ""
            },
            ...t === "show" ? {
                ADShowMonitorUrl: (i == null ? void 0 : i.ADShowMonitorUrl) || ""
            }: {
                ADClickMonitorUrl: (i == null ? void 0 : i.ADClickMonitorUrl) || ""
            },
            clientIp: r
        },
        params: {
            trace_detail: s,
            ...n
        }
    }
}
function setScrollToCenter(e, t = 0) {
    return new Promise(n = >{
        var a;
        const r = document.getElementById("activity-".concat(e != null ? e: 0)),
        o = (r == null ? void 0 : r.offsetTop) - document.body.offsetHeight / 2;
        scrollToTop((a = document.scrollingElement) != null ? a: document.body, o + t, 2, () = >{
            n(!0)
        })
    })
}
let loadingFlag = 0;
function closeLoading() {
    useLegacyYoda("ui.hideLoading"),
    loadingFlag && clearTimeout(loadingFlag),
    loadingFlag = 0
}
async
function getBusinessPushInfo() {
    if (!await yodaCanIUse$2("advertise.startNeoTask") || loadingFlag) return;
    const {
        serverTimeStamp: t = Date.now()
    } = await useYoda("system.getServerTime"),
    n = getUrlSearchParams(),
    {
        source: r,
        neoParams: o,
        awardType: a,
        timeout: i = "5000",
        pushExpireTime: s
    } = n,
    u = parseInt(i, 10);
    if (! (r !== "business_push" || !s || !a || !o || t > parseInt(s, 10))) return {
        neoParams: o,
        timeout: u,
        awardType: parseInt(a, 10)
    }
}
function startNeoTask(e, t) {
    const {
        neoParams: n,
        awardType: r,
        timeout: o
    } = e;
    useYoda("advertise.startNeoTask", {
        neoParams: n,
        awardType: r,
        timeout: o
    },
    a = >{
        var i;
        loadingFlag && closeLoading(),
        a.result !== 1 ? (sendEvent({
            name: "start-neo-task-error",
            category: "business-push",
            extra_info: JSON.stringify(a)
        }), t()) : a.isAwardResult && t((i = a.data) == null ? void 0 : i.taskCompleted)
    })
}
async
function handleBusinessPush(e, t) {
    const n = await getBusinessPushInfo();
    if (n) return loadingFlag = window.setTimeout(closeLoading, n.timeout),
    new Promise(r = >{
        const o = (a = !1) = >{
            a && t(),
            r()
        };
        until(e).toBeTruthy().then(() = >{
            startNeoTask(n, o)
        })
    })
}
function reportShareCollect(e = "") {
    useFetch({
        url: "/rest/n/nebula/invitation/action",
        data: {
            type: e
        }
    })
}
function convertRpxToPx(e) {
    return Math.ceil(e * window.screen.width / 750)
}
function deleteQueryParameter(e) {
    const t = new URL(window.location.href);
    t.searchParams.delete(e),
    window.history.replaceState({},
    "", t)
}
const TOAST_DURATION = 2e3;
function getPopupFromData(e, t) {
    let n;
    if (t === PopupType.COMMON) {
        const r = ["commonAwardPopup", "followAwardPopup", "mobileGameAwardPopup"].find(o = >e[o]);
        r && (n = e[r])
    } else n = e[t];
    return n
}
const pushSourceList = ["red_packet_push", "red_packet_encourage"],
usePopupModel = createUseModel(() = >{
    const e = useBasicModel(),
    t = useCommonModel(),
    n = reactive({
        popupsInited: !1,
        toastInited: !1,
        hasInitToast: !1,
        popups: Object.values(PopupType).reduce((T, O) = >(T[O] = null, T), {}),
        popupQueue: [],
        isShowTreasureBox: !1,
        isShowObtainCoinAnim: !1
    }),
    r = [];
    function o(T) {
        const {
            source: O,
            withdraw_guide: R,
            days_gift: $
        } = t.urlSearchParams;
        if (T === RefreshType.INIT) {
            if (R === "1") return {
                pageRef: PageRef.WITHDRAW_GUIDE_POPUP
            };
            if ($ === "1") return {
                pageRef: PageRef.DAYS_GIFT
            };
            if (t.isFromRegressGiftPopup) return {
                pageRef: PageRef.RETURN_GIFT
            }
        }
        if ([RefreshType.INIT, RefreshType.RELOAD].includes(T)) return t.isFromRegressGiftPush ? {
            pageRef: PageRef.RETURN_GIFT_PUSH
        }: {}
    }
    async
    function a(T = {},
    O) {
        const {
            source: R = "",
            token: $ = ""
        } = t.urlSearchParams;
        if (t.isFromBottomGuide && [RefreshType.INIT, RefreshType.TASK_SELECT].includes(O)) return {
            source: R,
            ...await getNotificationKey(),
            backToEarnPage: !1
        };
        const M = o(O);
        return M ? {...M,
            source: R,
            token: $,
            backToEarnPage: !1
        }: {...T,
            backToEarnPage: !0
        }
    }
    function i(T) {
        var R, $;
        const O = ($ = (R = T == null ? void 0 : T.navBarNotificationResponse) == null ? void 0 : R.notificationKeysToBeCleared) != null ? $: [];
        clearNotificationByKeys(O)
    }
    function s() {
        const T = getUrlSearchParams(); (T.source === WidgetOpenEncourageSource.AUTO_REWARD_SIGN || T.source === WidgetOpenEncourageSource.AUTO_REWARD_TREASURE) && (T.source === WidgetOpenEncourageSource.AUTO_REWARD_SIGN && deleteQueryParameter("source"), refreshEncourageWidget())
    }
    const {
        fetch: u,
        data: l,
        loading: f
    } = useFetch({
        url: "/rest/n/nebula/activity/earn/overview/popup",
        auto: !1
    });
    async
    function p(T, O = {}) {
        n.popupsInited = !1,
        n.hasInitToast = !1;
        const R = refreshModelState.refreshType,
        $ = await a(O, R),
        M = await T($);
        return s(),
        judgeFetchIsSuccess(M == null ? void 0 : M.result) && (D(), S(R), i(M.data)),
        M
    }
    const d = computed(() = >{
        var T;
        return (T = l.value) == null ? void 0 : T.data
    }),
    _ = computed(() = >{
        var T;
        return ((T = l.value) == null ? void 0 : T.result) === 1
    }),
    y = computed(() = >{
        var T, O, R;
        return (R = (O = (T = d.value) == null ? void 0 : T.toastInfo) == null ? void 0 : O.text) != null ? R: ""
    }),
    v = computed(() = >y.value ? 2e3: 0);
    async
    function m(T, O = !0, R = 0) {
        n.hasInitToast = !0,
        await sleep(R),
        (O ? showToast: toast)(T),
        await sleep(TOAST_DURATION)
    }
    async
    function g(T) {
        var W;
        const {
            firstFetch: O,
            data: R
        } = useFetch({
            url: "/rest/n/nebula/daily/report",
            data: T
        });
        await O;
        const {
            result: $,
            data: M
        } = (W = R.value) != null ? W: {};
        $ === 1 && (M != null && M.msg) && await m(M == null ? void 0 : M.msg, !0, v.value)
    }
    async
    function C(T) {
        var F, U;
        const {
            firstFetch: O,
            data: R
        } = useFetch({
            url: "/rest/n/nebula/encourage/push4coin/reward",
            data: T
        });
        await O;
        const {
            result: $,
            error_msg: M = "",
            amount: W
        } = (U = (F = R.value) == null ? void 0 : F.data) != null ? U: {},
        Z = $ === 1 ? '<p>天降红包 <span style="color: #FFD663;">+'.concat(W, "</span></p>") : M;
        await m(Z, !1, v.value)
    }
    async
    function I(T) {
        var Z;
        const {
            firstFetch: O,
            data: R
        } = useFetch({
            url: "/rest/wd/encourage/unionTask/alipay/miniapp/reward",
            data: T
        });
        await O;
        const {
            result: $,
            data: M,
            error_msg: W
        } = (Z = R.value) != null ? Z: {
            result: 0
        };
        $ === 1 && (M != null && M.toast) ? (e.refetchBasicInfo(), await m(M == null ? void 0 : M.toast, !0, v.value)) : W && await m(W, !0, v.value)
    }
    async
    function S(T) {
        if (y.value && await m(y.value), [RefreshType.INIT, RefreshType.RELOAD].includes(T)) {
            const {
                source: O,
                pas: R,
                token: $,
                sign: M,
                encryptParams: W
            } = t.urlSearchParams;
            pushSourceList.includes(O) && R && _.value && await C({
                pas: R
            }),
            O === "push_with_coin" && _.value && await g({
                taskId: 82,
                token: $,
                sign: M
            }),
            O === "ALI_PAY_TASK_REWARD" && W && _.value && await I({
                encryptParams: W,
                source: O
            })
        }
        n.toastInited = !0
    }
    function w(T, O) {
        n.popups[T] = O || null
    }
    function b(T, O) {
        n.popups[T] = O || null
    }
    function A() {
        if (n.popupQueue.length) {
            const {
                popupKey: T,
                popup: O
            } = n.popupQueue[0];
            b(T, O),
            n.popupQueue.shift()
        }
    }
    function E() {
        n.popupQueue = n.popupQueue.sort((T, O) = >{
            var R, $;
            return ((R = T.popup.popupPriority) != null ? R: 0) - (($ = O.popup.popupPriority) != null ? $: 0)
        })
    }
    function P(T) {
        n.popups[T] = null,
        A()
    }
    function L() {
        Object.keys(n.popups).forEach(T = >{
            P(T)
        })
    }
    function D() {
        Object.keys(n.popups).forEach(T = >{
            var R;
            const O = getPopupFromData((R = d.value) != null ? R: {},
            T);
            if (T === PopupType.UNION_TREASURE_POPUP && O) {
                const {
                    enableAppTimerReport: $,
                    appTimerReportInfo: M
                } = O;
                $ && M && __vitePreload(() = >import("./utils-Bmr3j-j9.js").then(W = >W.u), __vite__mapDeps([2, 3]), import.meta.url).then(({
                    startTimeReportTask: W
                }) = >{
                    W(M)
                })
            }
            T !== PopupType.ENCOURAGE_WIDGET_RETAIN_OR_GUIDE_POPUP && O && n.popupQueue.push({
                popupKey: T,
                popup: O
            })
        }),
        E(),
        A(),
        n.popupsInited = !0
    }
    const V = computed(() = >{
        const T = {...n.popups,
            [PopupType.WITHDRAW_GUIDE_POPUP] : null
        };
        return n.popupsInited && Object.values(T).every(O = >!O) && n.popupQueue.length === 0
    });
    function Q() {
        L()
    }
    function oe() {
        n.isShowObtainCoinAnim = !0
    }
    function te() {
        n.isShowObtainCoinAnim = !1
    }
    async
    function ne() {
        var $;
        const T = e.coin,
        O = await e.refetchBasicInfo({
            delayUpdatelTime: 1e3
        }),
        R = ($ = O.data) == null ? void 0 : $.totalCoin;
        return O.result === 1 && !e.cashCoinDataError && +R > +T ? (oe(), !0) : (e.isCoinScroll = !1, !1)
    }
    const B = async() = >{
        var T;
        for (; r.length > 0;)(T = r.shift()) == null || T(),
        r.length !== 0 && await sleep(2e3)
    };
    return whenever(() = >e.data, () = >{
        var R, $, M, W, Z, F;
        if (r.length <= 0) return;
        const T = (M = ($ = (R = e.data) == null ? void 0 : R.awardFeedbackEnhanceConfig) == null ? void 0 : $.effectType) != null ? M: "",
        O = (F = (Z = (W = e.data) == null ? void 0 : W.awardFeedbackEnhanceConfig) == null ? void 0 : Z.totalCount) != null ? F: 0; (T === "" || O === 0) && B()
    }),
    reactive({...toRefs(n),
        noMask: V,
        popupLoading: f,
        fetchPopups: T = >p(u, T),
        setPopup: b,
        setPopupWithTS: w,
        closePopup: P,
        closeAllMask: Q,
        clearNotificationKeysToBeCleared: i,
        closeObtainCoinAnim: te,
        showCoinAddAnim: ne,
        showToastWithDelay: m,
        otherToastDelaytime: v,
        waitProfitEnhanceToastQueue: r,
        clearWaitToastQueue: B
    })
});
var PopupButtonShowType = (e = >(e[e.NO_ANIMATE = 0] = "NO_ANIMATE", e[e.SCROLL = 1] = "SCROLL", e[e.LIGHT = 2] = "LIGHT", e[e.SCROLL_LIGHT = 3] = "SCROLL_LIGHT", e))(PopupButtonShowType || {}),
CornerType = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.COIN = 1] = "COIN", e[e.CASH = 2] = "CASH", e[e.PLAIN_TEXT = 3] = "PLAIN_TEXT", e[e.COUNTDOWN = 4] = "COUNTDOWN", e))(CornerType || {});
const DAY = 1e3 * 60 * 60 * 24,
getStartTimeStampOfTheDay = e = >new Date(new Date(e).toLocaleDateString()).getTime(),
resetFrequency = e = >{
    const t = getStartTimeStampOfTheDay(Date.now());
    localStorage.setItem(e, "".concat(t))
},
isHitFrequency = (e, t = 1) = >{
    const n = getStartTimeStampOfTheDay(Date.now()),
    r = localStorage.getItem(e);
    return ! r || n - Number(r) >= t * DAY
};
var EncourageWidgetPopupType = (e = >(e.RETAIN_WITH_COIN = "DESKTOP_WIDGET_HOLD_COIN", e.RETAIN_WITHOUT_COIN = "DESKTOP_WIDGET_HOLD_NO_COIN", e.GUIDE = "DESKTOP_WIDGET_FAQ", e.REVISIT_POPUP = "DESKTOP_WIDGET_RETAIN", e))(EncourageWidgetPopupType || {});
const LOCAL_STORAGE_KEY_GUIDE_POPUP = "encourage_widget_GUIDE_popup",
useEncourageWidgetGuidePopup = e = >{
    const t = usePopupModel(),
    n = computed(() = >e.value.find(o = >o.id === TaskId.ENCOURAGE_WIDGET_ADD_TASK)),
    r = async o = >{
        if (!o || await getWidgetStatus(widgetTypeOf2Plus2) || !n.value) return;
        const i = n.value.extParam;
        i != null && i.showDialog && isHitFrequency(LOCAL_STORAGE_KEY_GUIDE_POPUP, i.popupFrequency) && (t.setPopupWithTS(PopupType.ENCOURAGE_WIDGET_RETAIN_OR_GUIDE_POPUP, {
            title: i.guideDialogInfo.title,
            subTitle: i.guideDialogInfo.subTitle,
            button: {
                text: i.guideDialogInfo.buttonText
            },
            type: EncourageWidgetPopupType.GUIDE
        }), resetFrequency(LOCAL_STORAGE_KEY_GUIDE_POPUP))
    };
    return useYodaEvent(CUSTOM_BACK_EVENT, () = >{
        r(!0)
    }),
    {
        showEncourageWidgetGuidePopup: r
    }
};
var KingKongShowType = (e = >(e[e.NORMAL = 0] = "NORMAL", e[e.AUTO_SWIPE = 1] = "AUTO_SWIPE", e[e.MANUAL_SWIPE = 2] = "MANUAL_SWIPE", e))(KingKongShowType || {}),
ResourceDisplayStyle = (e = >(e[e.KING_KONG = 0] = "KING_KONG", e[e.LIFE_1 = 1] = "LIFE_1", e[e.LIFE_2 = 2] = "LIFE_2", e[e.LIFE_3 = 3] = "LIFE_3", e))(ResourceDisplayStyle || {});
function formatDailyTasks(e) {
    return e.map(t = >{
        const {
            extParam: n
        } = t;
        if (n) {
            const r = parseInt(t.extParam.lastTime, 10); ! Number.isNaN(r) && r < 1e3 * 60 * 60 && (n.lastTime = r + new Date().getTime())
        }
        return {...t,
            type: TaskType.DAILY,
            extParam: n
        }
    })
}
const useTaskModel = createUseModel(() = >{
    const e = ref$1(!1),
    t = reactive({
        isSupportCalendar: !1,
        videoAwardStatus: !1,
        isSupportSwitch: !1,
        searchWidgetStatus: !1,
        rankWidgetStatus: !1,
        encourageDesktopWidgetStatus: !0,
        pushNotificationStatus: !0,
        encourageDesktopWidgetNewStatus: 0,
        deviceUniqueInfo: {
            imei: "",
            idfa: "",
            oaid: ""
        },
        piggyBankSwitchStatus: !1,
        contactAccessStatus: !1
    }),
    n = ref$1(null),
    r = computed(() = >{
        var T, O, R, $, M;
        return (O = (T = n.value) == null ? void 0 : T.nebulaNoviceTask) != null && O.limitTasks && ((R = n.value) == null ? void 0 : R.nebulaNoviceTask.limitTasks.length) > 0 ? n.value.nebulaNoviceTask.limitTasks: (M = ($ = n.value) == null ? void 0 : $.nebulaNoviceTask.limitActivityConfigs) != null ? M: []
    }),
    {
        mutate: o,
        info: a
    } = useRestMutation({
        url: "/rest/wd/encourage/unionTask/take",
        method: "GET",
        variables: T = >({...T
        })
    }),
    {
        mutate: i
    } = useRestMutation({
        url: "/rest/wd/encourage/unionTask/resource/click",
        method: "POST",
        variables: T = >({...T
        })
    });
    async
    function s() {
        const {
            switchStatusForVideoAward: T = !1
        } = await useLegacyYoda("kwai.getSwitchNebula", {
            key: "switchStatusForVideoAward"
        }),
        {
            switchStatusForNebulaToast: O = !1
        } = await useLegacyYoda("growth.getSwitchNebula", {
            key: "switchStatusForNebulaToast"
        });
        t.videoAwardStatus = T || O
    }
    async
    function u() {
        t.isSupportSwitch = await yodaCanIUse("kwai", "getSwitchNebula") || await yodaCanIUse("growth", "getSwitchNebula"),
        t.isSupportCalendar = await yodaCanIUse("feed", "authorizationStatusForCalendar") && await yodaCanIUse("feed", "changeEventForCalendar"),
        s()
    }
    async
    function l() {
        try {
            const[T, O, R, $, M, W, Z] = await Promise.all([getPushPermission(), getWidgetStatus("search"), getWidgetStatus("rank"), getWidgetStatus("encourage"), getDeviceUniqueInfo(), getWidgetStatus("quick_2_2"), getContactAccessStatus()]);
            t.searchWidgetStatus = !!O,
            t.rankWidgetStatus = !!R,
            t.encourageDesktopWidgetStatus = !!$,
            t.pushNotificationStatus = T,
            t.deviceUniqueInfo = M,
            t.encourageDesktopWidgetNewStatus = 0,
            t.contactAccessStatus = Z,
            W && (t.encourageDesktopWidgetNewStatus |= 1)
        } catch(T) {}
        return {
            searchWidgetStatus: t.searchWidgetStatus,
            rankWidgetStatus: t.rankWidgetStatus,
            encourageDesktopWidgetStatus: t.encourageDesktopWidgetStatus,
            pushNotificationStatus: t.pushNotificationStatus,
            encourageDesktopWidgetNewStatus: t.encourageDesktopWidgetNewStatus,
            cs: t.contactAccessStatus,
            ...t.deviceUniqueInfo
        }
    }
    const f = ref$1(),
    {
        firstFetch: p,
        fetch: d,
        refetch: _,
        onData: y,
        onError: v,
        data: m,
        error: g,
        loading: C
    } = useFetch({
        url: "/rest/n/nebula/activity/earn/overview/tasks",
        variables: () = >f.value,
        auto: !1
    }),
    I = async() = >(f.value = await l(), d());
    I();
    const S = async() = >(f.value = await l(), _());
    function w() {
        n.value = null
    }
    const b = computed(() = >e.value ? formatError(g.value, m.value) : ""),
    A = computed(() = >{
        var T, O, R;
        return (R = (O = (T = n.value) == null ? void 0 : T.nebulaNoviceTask) == null ? void 0 : O.subTitle) != null ? R: ""
    }),
    E = computed(() = >{
        var T, O;
        return (O = (T = n.value) == null ? void 0 : T.nebulaNoviceTask) == null ? void 0 : O.noviceTaskTextIconUrl
    }),
    P = computed(() = >{
        if (!n.value) return [];
        const T = n.value.nebulaNoviceTask,
        {
            writeCodeTask: O = null
        } = T,
        R = [...r.value];
        return O && (O.finish ? R.push(O) : R.unshift(O)),
        R.map($ = >({...$,
            isNovice: !0,
            type: TaskType.NOVICE
        }))
    }),
    L = computed(() = >{
        var T, O;
        return formatDailyTasks((O = (T = n.value) == null ? void 0 : T.dailyTasks) != null ? O: [])
    }),
    D = computed(() = >L.value.find(T = >T.id === TaskId.INVITE));
    y(T = >{
        var R, $;
        const O = judgeFetchIsSuccess(T == null ? void 0 : T.result);
        if (e.value = !O, O && (n.value = T.data), ($ = (R = D.value) == null ? void 0 : R.extParam) != null && $.reportInfo) {
            const {
                pvid: M,
                curAwardAmount: W,
                curActivityName: Z
            } = D.value.extParam.reportInfo;
            updateCommonPackage({
                h5_extra_attr: {
                    pvid: M,
                    award_amount: W,
                    activity_name: Z
                }
            })
        }
    }),
    v(() = >{
        e.value = !0
    });
    const V = computed(() = >{
        var T, O;
        return (O = (T = n.value) == null ? void 0 : T.banner) != null ? O: []
    });
    useBannerUpdated(V);
    const Q = computed(() = >{
        var T;
        return (T = n.value) == null ? void 0 : T.nebulaExtraBonusArea
    }),
    {
        mutate: oe,
        info: te
    } = useRestMutation({
        url: "/rest/n/nebula/task/reward",
        method: "POST",
        variables: T = >({...T
        })
    });
    async
    function ne(T) {
        var O, R, $;
        if (await oe({
            taskId: T
        }), (O = te.data) != null && O.toast && toast(te.data.toast), (R = te.data) != null && R.popup) {
            const {
                showVideoAwardPopup: M
            } = await __vitePreload(() = >import("./showVideoAwardPopup-DxZuMIcm.js"), __vite__mapDeps([4, 3, 5]), import.meta.url);
            await M({
                data: te.data.popup
            })
        } else toast(($ = te.error.error_msg) != null ? $: "网络似乎断开了，请稍后重试")
    }
    const {
        showEncourageWidgetGuidePopup: B
    } = useEncourageWidgetGuidePopup(L);
    return reactive({
        firstFetchTask: p,
        getTaskParams: l,
        ...toRefs(t),
        takeTask: o,
        takeTaskInfo: a,
        isLoading: C,
        isError: e,
        errorMessage: b,
        resultCode: computed(() = >{
            var T;
            return (T = m.value) == null ? void 0 : T.result
        }),
        hasLoaded: computed(() = >L.value.length),
        taskData: n,
        dailyTaskFoldIndex: computed(() = >{
            var T;
            return (T = m.value) == null ? void 0 : T.data.startFoldTaskIndex
        }),
        kingkongShowType: computed(() = >{
            var T, O;
            return (O = (T = m.value) == null ? void 0 : T.data.kingkongShowType) != null ? O: 0
        }),
        resetData: w,
        refetchTask: S,
        fetchTask: I,
        noviceTaskSubTitle: A,
        noviceTaskTextIconUrl: E,
        noviceTasks: P,
        limitTasks: r,
        dailyTasks: L,
        noviceTaskText: computed(() = >{
            var T, O, R;
            return (R = (O = (T = n.value) == null ? void 0 : T.nebulaNoviceTask) == null ? void 0 : O.noviceTaskText) != null ? R: "新手任务"
        }),
        dailyTaskText: computed(() = >{
            var T, O;
            return (O = (T = n.value) == null ? void 0 : T.dailyTaskText) != null ? O: "日常任务"
        }),
        coreTasksDisplayType: computed(() = >{
            var T;
            return (T = n.value) == null ? void 0 : T.resourceDisplayStyle
        }),
        coreTasks: computed(() = >{
            var T, O;
            return ((O = (T = n.value) == null ? void 0 : T.nebulaResourceActivityViewList) != null ? O: []).filter(R = >R == null ? void 0 : R.name).slice(0, 8).map(R = >({...R,
                type: TaskType.CORE
            }))
        }),
        coreTaskCornerConfig: computed(() = >{
            var T;
            return (T = n.value) == null ? void 0 : T.nebulaResourceActivityCornerConfig
        }),
        banners: V,
        videoAwardPanel: Q,
        setYodaState: u,
        setVideoAwardStatus: s,
        reportResourceClick: i,
        videoAward: ne,
        showEncourageWidgetGuidePopup: B
    })
}),
useTaskItemModel = createUseModel(() = >{
    const e = useBasicModel(),
    t = useTaskModel(),
    n = ref$1(null),
    r = new Set,
    o = {};
    function a(d) {
        setScrollToCenter(d.id),
        n.value = d
    }
    function i() {
        n.value = null
    }
    function s(d) {
        var _, y, v, m;
        switch (d) {
        case TaskType.NOVICE:
            return t.limitTasks;
        case TaskType.CORE:
            return (y = (_ = t.taskData) == null ? void 0 : _.nebulaResourceActivityViewList) != null ? y: [];
        case TaskType.DAILY:
        default:
            return (m = (v = t.taskData) == null ? void 0 : v.dailyTasks) != null ? m: []
        }
    }
    function u(d, _) {
        return d && _ && (d.finish !== _.finish || d.completedStages !== _.completedStages)
    }
    function l(d, _) {
        const y = s(d),
        v = y.findIndex(m = >m.id === _.id);
        if (v >= 0) {
            const m = y[v],
            g = {..._,
                type: d
            };
            return y.splice(v, 1, g),
            [m, g]
        }
        return []
    }
    function f({
        id: d
    }) {
        r.has(d) && (o[d](), r.delete(d))
    }
    async
    function p(d) {
        const {
            fetch: _,
            onFinish: y
        } = useFetch({
            url: "/rest/n/nebula/activity/earn/overview/taskByIds",
            auto: !1
        }),
        {
            id: v,
            type: m,
            extParam: {
                refreshInterval: g,
                refreshTimes: C,
                refreshTaskListWhenSuccess: I = !1,
                refreshBasicWhenSuccess: S = !0
            }
        } = d;
        r.has(v) && o[v]();
        const w = await t.getTaskParams(),
        {
            cancel: b
        } = usePolling({
            interval: g,
            times: C,
            fetcher: () = >_({...w,
                taskIds: [v]
            }),
            endCallback: () = >r.delete(v)
        });
        r.add(v),
        o[v] = b,
        y(A = >{
            var E, P;
            if ((A == null ? void 0 : A.result) === 1 && ((E = A.data) != null && E.refreshTasks[v])) {
                const[L, D] = l(m, (P = A.data) == null ? void 0 : P.refreshTasks[v]);
                u(L, D) && (S && e.refetchBasicInfo(), b(), I && t.refetchTask())
            }
        })
    }
    return reactive({
        focusedTask: n,
        focusTask: a,
        clearFocusedTask: i,
        isTaskStatusChange: u,
        updateTask: d = >{
            var _;
            p({...d,
                extParam: {... (_ = d.extParam) != null ? _: {},
                    refreshInterval: 1e3,
                    refreshTimes: 1
                }
            })
        },
        pollingUpdateTask: p,
        cancelPollingTask: f
    })
}),
useRewardModel = createUseModel(() = >{
    const e = useTaskModel(),
    t = useTaskItemModel(),
    {
        info: n,
        mutate: r
    } = useRestMutation({
        url: () = >"/rest/wd/encourage/unionTask/reward",
        method: "get",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        }
    }),
    {
        info: o,
        mutate: a
    } = useRestMutation({
        url: "/rest/wd/encourage/unionTask/report",
        method: "get",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        variables: u = >u
    });
    return {
        handleReport: async(u, l) = >{
            var f;
            return await a({
                taskId: u,
                reportId: l
            }),
            (f = o.data) == null ? void 0 : f.popup
        },
        handleReward: async(u, l) = >{
            var p, d;
            if (await r({
                taskId: u,
                periodId: l
            }), !((p = n.data) != null && p.popup)) return;
            const f = e.dailyTasks.find(_ = >_.id === u);
            return f && t.updateTask(f),
            (d = n.data) == null ? void 0 : d.popup
        }
    }
}),
entryTime = {
    value: null
};
function getPageStart() {
    var e;
    return (e = entryTime.value) != null ? e: performance.timing.navigationStart
}
function sendPerfLog(e, t = Date.now()) {
    sendTask(e, {
        source: getUrlSearchParams().source,
        duration: t - getPageStart(),
        is_cached: isCached.value
    },
    {
        type: "BACKGROUND_TASK_EVENT"
    })
}
const CoinIcon$1 = "" + window.__assetsPath + "lib/images/toast-icon-BJHbTpXC.png";
isFirstLevelPage || useYoda("webview.hideNavigationBar");
const useInitModel = createUseModel(() = >{
    const e = useBasicModel(),
    t = useCommonModel(),
    n = useTaskModel(),
    r = useRewardModel(),
    o = usePopupModel(),
    a = reactive({
        isShowLoading: !t.isFirstLevelPage,
        isLoaded: !1,
        canShowError: !1,
        errorCode: 0,
        hasSendErrorLog: !1
    }),
    i = ref$1(!1),
    s = ref$1(!1),
    u = computed(() = >i.value && s.value),
    l = computed(() = >a.canShowError && (e.isError || n.isError)),
    f = computed(() = >a.isLoaded && !l.value);
    useLegacyYoda("ui.hideLoadingPage");
    function p(S) {
        a.isShowLoading = S,
        a.isLoaded = !S
    }
    function d() {
        a.canShowError = !0,
        p(!1),
        useLegacyYoda("ui.hideLoadingPage")
    }
    async
    function _(S, w = 0) {
        a.hasSendErrorLog || (a.hasSendErrorLog = !0, a.errorCode = w, ksLog.sendError({
            message: "page_error-" + S
        }))
    }
    function y(S, w = 0) {
        a.errorCode = w
    }
    function v() {
        a.canShowError = !1;
        const {
            source: S,
            bubbleId: w,
            bubbleTips: b
        } = t.urlSearchParams;
        sendShow("EARNING_PAGE", {
            source: S,
            bubble_id: w,
            bubble_tips: b
        }),
        useLegacyYoda("growth.nebulaReddotConsume")
    }
    const m = async S = >{
        deleteQueryParameter("periodId");
        const w = await r.handleReward(TaskId.ENCOURAGE_WIDGET_ADD_TASK, S);
        refreshEncourageWidget(),
        w && (await until(() = >o.noMask && !o.popupLoading).toBeTruthy(), o.setPopup(PopupType.ENCOURAGE_WIDGET_RETAIN_OR_GUIDE_POPUP, {...w,
            type: EncourageWidgetPopupType.REVISIT_POPUP
        }))
    },
    g = async S = >{
        deleteQueryParameter("reportId");
        const w = await r.handleReport(TaskId.ENCOURAGE_WIDGET_CLICK_TASK, S);
        refreshEncourageWidget(),
        w && (toast({
            icon: CoinIcon$1,
            duration: 3e3,
            content: '\n                    <p style="color: #FFE782; line-height: 20px; font-weight: bold; padding-bottom: 6px; font-size: 20px; font-family: PuHuiTi;">+'.concat(w.amount, '</p>\n                    <p style="font-size: 16px; line-height: 20px;">').concat(w.title, "</p>\n                "),
            css: {
                padding: "16px 5px 24px",
                width: "156px",
                "border-radius": "16px"
            },
            iconCss: {
                width: "72px",
                height: "72px",
                "margin-bottom": "-1px"
            }
        }), e.refetchBasicInfo(), await sleep(3e3))
    };
    async
    function C() {
        const S = getUrlSearchParams();
        if (S.source === WidgetOpenEncourageSource.AUTO_REWARD_ADD && S.periodId) {
            m(Number(S.periodId));
            return
        }
        if (S.source === WidgetOpenEncourageSource.AUTO_REWARD_CLICK && S.reportId) {
            await g(S.reportId);
            return
        }
        if (S.source === WidgetOpenEncourageSource.AUTO_LAUNCH_AD) {
            const w = n.dailyTasks.find(b = >b.id === TaskId.AD_PLAY_COIN);
            w && openLinkUrl(w.linkType, w.linkUrl, {
                eventTrackingLogInfo: w.eventTrackingLogInfo,
                extParam: w.extParam
            })
        }
    }
    function I(S, w, b = !1) {
        return a.hasSendErrorLog = !1,
        S.then(() = >{
            if (!a.hasSendErrorLog) {
                if (d(), e.isError) {
                    _(e.errorMessage, e.resultCode);
                    return
                }
                b && nextTick(() = >{
                    entryTime.value != null ? fmpEventHandler(Date.now() - entryTime.value + performance.timing.navigationStart) : fmpEventHandler();
                    try {
                        const A = getLongTaskData();
                        if (A.count <= 0) return;
                        sendEvent({
                            name: "longTaskCollect",
                            extra_info: JSON.stringify(A)
                        },
                        {
                            event_count: A.count,
                            duration: A.duration
                        }),
                        removeObserver()
                    } catch(A) {}
                    console.timeStamp("Nebula FMP"),
                    console.log(performance.now(), performance.mark("Nebula FMP"))
                })
            }
        }),
        w.then(() = >{
            a.hasSendErrorLog || n.isError && (_(n.errorMessage, n.resultCode), d())
        }),
        Promise.all([S, w]).then(async A = >(l.value || (v(), await C()), A))
    }
    return reactive({...toRefs(a),
        taskCardLoaded: i,
        taskListLoaded: s,
        taskGroupLoaded: u,
        isError: l,
        isShowContent: f,
        toggleLoading: p,
        initAfterFetch: I,
        setError: y,
        hasInit: I(e.firstFetchBasicInfo, n.firstFetchTask, !0)
    })
});
var TreasureStatus = (e = >(e.WAIT = "WAIT", e.OPEN = "OPEN", e.COLLECTED = "COLLECTED", e))(TreasureStatus || {});
const useTreasureBoxModel = createUseModel(() = >{
    const e = usePopupModel();
    useTaskModel();
    let t = !1;
    function n(I) {
        return [TaskId.TREASURE_BOX_2, TaskId.TREASURE_BOX_5, TaskId.TREASURE_BOX_8].includes(I)
    }
    const r = ref$1(null),
    o = ref$1(0),
    a = computed(() = >{
        var I;
        return !! ((I = r.value) != null && I.show)
    }),
    i = computed(() = >{
        var I, S, w;
        return ((S = (I = r.value) == null ? void 0 : I.commonAwardPopup) == null ? void 0 : S.routerTaskButton) && ((w = r.value) == null ? void 0 : w.showCountDownPopup)
    }),
    s = computed(() = >o.value),
    u = computed(() = >s.value > 0 ? "WAIT": s.value < 0 ? "COLLECTED": "OPEN"),
    l = computed(() = >u.value === "WAIT"),
    f = computed(() = >{
        var I, S;
        return (S = (I = r.value) == null ? void 0 : I.showCompletedAnimation) != null ? S: !1
    });
    async
    function p(I) {
        return [0, -1].includes(I) ? I: await getRemainingTime(I)
    }
    function d(I) {
        o.value = I
    }
    function _() {
        d(0)
    }
    const {
        loading: y,
        fetch: v
    } = useFetch({
        url: "/rest/n/nebula/box/explore",
        auto: !1
    });
    async
    function m(I = !1, S = u.value) {
        var P;
        if (y.value) return;
        const w = await v({
            isOpen: !!I,
            isReadyOfAdPlay: !0
        }),
        {
            result: b,
            error_msg: A = "",
            data: E
        } = w;
        if (I) {
            if (b !== 1) return new Error(A || "开宝箱失败，请稍后再试");
            e.setPopup(PopupType.TREASULRE_BOX, E != null && E.commonAwardPopup ? {... (P = E == null ? void 0 : E.commonAwardPopup) != null ? P: {},
                eventTrackingLogInfo: E == null ? void 0 : E.eventTrackingLogInfo
            }: null),
            e.clearNotificationKeysToBeCleared(E)
        }
        return b === 1 && (r.value = E),
        w
    }
    watch(() = >r.value, async I = >{
        if (I && a.value) {
            const S = await p(I.treasureBoxOpenTimestamp);
            d(S || I.openTime)
        }
    });
    function g() {
        r.value = null
    }
    async
    function C() {
        if (u.value === "OPEN") {
            const I = await m(!0);
            if (I instanceof Error) {
                showToast(I.message);
                return
            }
            return
        }
        if (u.value === "WAIT") {
            if (t) return;
            t = !0,
            await m(!0);
            const I = e.popups[PopupType.TREASULRE_BOX];
            if (setTimeout(() = >{
                t = !1
            },
            2e3), I != null && I.cdAdPlay) return; ! i.value && !localStorage.getItem("earning_treasure_timing") && (showToast("等倒计时结束后再来领奖吧～"), localStorage.setItem("earning_treasure_timing", "1"));
            return
        }
        localStorage.getItem("earning_treasure_dayend") || (showToast("今日宝箱已领完，明天再来吧～"), localStorage.setItem("earning_treasure_dayend", "1"))
    }
    return reactive({
        getTreasureBox: m,
        click: C,
        resetData: g,
        isTreasureBoxTask: n,
        isShowTreasureBox: a,
        isCountDownPopup: i,
        timediff: s,
        showCountDown: l,
        finishCountDown: _,
        status: u,
        showCompletedAnimation: f,
        treasureBoxData: r
    })
});
var Platform = (e = >(e.WEIXIN = "weixin", e.QQ = "qq", e.QRCODE = "qrcode", e.COPYLINK = "copylink", e))(Platform || {});
const useFissionModel = createUseModel(() = >{
    const {
        fetch: e,
        data: t
    } = useFetch({
        url: "/rest/n/nebula/activity/earn/overview/fission",
        auto: !1
    }),
    n = computed(() = >{
        var r;
        return (r = t.value) == null ? void 0 : r.data
    });
    return reactive({
        fetchFission: e,
        shareData: computed(() = >{
            var r;
            return (r = n.value) == null ? void 0 : r.shareData
        }),
        posterUrl: computed(() = >{
            var r;
            return (r = n.value) == null ? void 0 : r.posterUrl
        }),
        traceDetailMap: computed(() = >{
            var r, o;
            return (o = (r = n.value) == null ? void 0 : r.traceDetailMap) != null ? o: {}
        })
    })
}),
refreshTrigger = createEventHook();
var TaskStatus = (e = >(e[e.ACTIVE = 1] = "ACTIVE", e[e.AWARDED = 2] = "AWARDED", e[e.TIMEOUT = 3] = "TIMEOUT", e))(TaskStatus || {}),
AwardCardStyle = (e = >(e[e.DEFAULT = 1] = "DEFAULT", e[e.HIGHLIGHT = 2] = "HIGHLIGHT", e[e.DISABLE = 3] = "DISABLE", e))(AwardCardStyle || {}),
RewardType = (e = >(e[e.ICON = 1] = "ICON", e[e.MONEY = 2] = "MONEY", e[e.ICONS = 3] = "ICONS", e[e.GIFT = 4] = "GIFT", e))(RewardType || {}),
SignInButtonType = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SCHEME = 1] = "SCHEME", e[e.OPEN_WEBVIEW = 2] = "OPEN_WEBVIEW", e[e.PUSH_INVOKE_BRIDGE = 19] = "PUSH_INVOKE_BRIDGE", e[e.SIGN_IN = 6] = "SIGN_IN", e[e.LAUNCH_APP = 13] = "LAUNCH_APP", e[e.TURNTABLE = 14] = "TURNTABLE", e[e.TOAST = 15] = "TOAST", e[e.OPEN_UNION_TREATURE = 16] = "OPEN_UNION_TREATURE", e[e.AD_VIDEO_OLD = 3] = "AD_VIDEO_OLD", e[e.AD_VIDEO_NEW = 7] = "AD_VIDEO_NEW", e[e.AD_LIVE = 8] = "AD_LIVE", e[e.AD_VIDEO_OR_LIVE = 101] = "AD_VIDEO_OR_LIVE", e))(SignInButtonType || {}),
TurntableStageStatus = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_DRAWN = 1] = "NOT_DRAWN", e[e.DRAWN = 2] = "DRAWN", e[e.CONFIRMED = 3] = "CONFIRMED", e[e.COMPLETED = 4] = "COMPLETED", e[e.AWARDED = 5] = "AWARDED", e))(TurntableStageStatus || {}),
TurntableIconType = (e = >(e[e.PUPUP_ACTIVE = 1] = "PUPUP_ACTIVE", e[e.PUPUP_COMPLETED = 2] = "PUPUP_COMPLETED", e[e.CARD_ACTIVE = 3] = "CARD_ACTIVE", e[e.CARD_COMPLETED = 4] = "CARD_COMPLETED", e))(TurntableIconType || {}),
ResultType = (e = >(e[e.SUCCESS = 1] = "SUCCESS", e[e.UN_EXP = 102004] = "UN_EXP", e[e.CONCURRENCY_ERROR = 102009] = "CONCURRENCY_ERROR", e[e.EXIT = 102018] = "EXIT", e))(ResultType || {});
const useRefreshModel = createUseModel(() = >{
    const e = useBasicModel(),
    t = useTreasureBoxModel(),
    n = useFissionModel(),
    r = useInitModel(),
    o = usePopupModel(),
    a = useTaskModel(),
    i = useTaskItemModel(),
    s = refreshModelState;
    let u = "",
    l = !1;
    const f = ref$1(!1);
    function p() {
        u = getUserId()
    }
    function d(b = {}) {
        const {
            force: A,
            extParam: E
        } = b;
        if (E != null && E.refreshInterval && (E != null && E.refreshTimes)) {
            s.needRefresh = !0,
            s.polledTask = b;
            return
        }
        if (A) {
            s.needRefresh = !0,
            s.pageRef = PageRef.BASIC_REFRESH;
            return
        }
        E != null && E.pageRef && (s.needRefresh = !0, s.pageRef = E.pageRef),
        E != null && E.taskRef && (s.needRefresh = !0, s.taskRef = E.taskRef),
        b.id && (s.currentTask = b)
    }
    function _() {
        s.taskRef = null,
        s.pageRef = null,
        s.needRefresh = !1,
        s.polledTask = null,
        s.currentTask = null
    }
    function y(b) {
        s.refreshType = b;
        const A = getUserId();
        l = u !== A,
        u = A
    }
    function v() {
        var b, A, E;
        if (((E = (A = (b = o == null ? void 0 : o.popups) == null ? void 0 : b[PopupType.UNION_SIGNIN_POPUP]) == null ? void 0 : A.button) == null ? void 0 : E.linkType) === SignInButtonType.PUSH_INVOKE_BRIDGE) {
            const P = a.dailyTasks.find(L = >L.id === TaskId.PUSH_TASK);
            P && i.pollingUpdateTask(P)
        }
    }
    async
    function m(b = RefreshType.BASIC_REFRESH) {
        const {
            pageRef: A,
            polledTask: E,
            currentTask: P
        } = s;
        if (y(b), _(), b === RefreshType.REENTRY && A === PageRef.ONLY_BASICINFO) {
            e.refetchBasicInfo();
            return
        }
        if (b === RefreshType.REENTRY && A === PageRef.BASIC_AND_SINGLETASK && P) {
            i.updateTask(P);
            return
        }
        if (b !== RefreshType.BASIC_REFRESH && E) {
            i.pollingUpdateTask(E);
            return
        }
        if (e.refetchBasicInfo(), a.refetchTask(), b !== RefreshType.BASIC_REFRESH && A !== PageRef.BASIC_REFRESH) {
            v();
            const D = b === RefreshType.REENTRY && A ? {
                pageRef: A
            }: {};
            await o.fetchPopups(D)
        }
    }
    refreshTrigger.on(m);
    function g() {
        a.resetData(),
        e.resetData(),
        t.resetData()
    }
    async
    function C(b = !1) {
        const E = await(b ? r.hasInit: r.initAfterFetch(e.fetchBasicInfo(), a.fetchTask()));
        e.deferToIncrease != null && (await e.deferToIncrease.promise, await sleep(300));
        const P = await o.fetchPopups();
        return [E, P]
    }
    async
    function I() {
        var b; (b = (await __vitePreload(() = >import("./popup-Wl898eWl.js").then(A = >A.p), __vite__mapDeps([6, 3, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]), import.meta.url)).bizTreasureBoxRef.value) == null || b.refreshBoxInfo()
    }
    function S() {
        y(RefreshType.REFRESH);
        const {
            source: b,
            focusTaskId: A
        } = getUrlSearchParams();
        if (r.isError) return; !! e.withdrawPageUrl && (b === SourceType.LOGIN_QUICK_CASH || b === SourceType.FEEDS_LOGIN_QUICK_CASH || f.value) && (d({
            force: !0
        }), b === SourceType.TIMER || b === SourceType.LOGIN_QUICK_CASH ? window.location.replace(e.withdrawPageUrl) : openWebview(e.withdrawPageUrl)),
        setTimeout(() = >{
            s.canClickTabRefresh = !0
        },
        1e3),
        n.fetchFission(),
        t.getTreasureBox(),
        b === WidgetOpenEncourageSource.AUTO_REWARD_TREASURE && (deleteQueryParameter("source"), I()),
        b === "NEW_TASK_SWITCH_BOTTOM" && A && until(computed(() = >r.taskGroupLoaded && o.noMask)).toBeTruthy().then(() = >{
            setTimeout(() = >{
                taskGuideQueue.showGuideById(Number(A))
            },
            100)
        })
    }
    async
    function w(b = RefreshType.RELOAD) {
        return y(b),
        (b === RefreshType.RELOAD || l) && (updateBase({
            user_id: u
        }), r.toggleLoading(!0), g()),
        C().then(() = >{
            S(),
            I()
        }).
        catch(() = >({}))
    }
    return reactive({...toRefs(s),
        initUserId: p,
        handleRefresh: d,
        resetRefresh: _,
        setRefreshType: y,
        refresh: m,
        getInitPromise: C,
        reload: w,
        reloadCallback: S,
        shouldJumpWithdrawPage: f
    })
}),
navBarHeight = 88,
useProfitData = () = >{
    const e = useBasicModel(),
    t = useCommonModel(),
    n = usePopupModel(),
    r = useRefreshModel(),
    o = computed(() = >{
        var v;
        return (v = e.data) == null ? void 0 : v.overSea
    }),
    a = computed(() = >{
        var m, g;
        return ((g = (m = e.data) == null ? void 0 : m.manualExchange) != null ? g: !1) ? ExchangeCoinState.Manual: ExchangeCoinState.Auto
    }),
    i = computed(() = >{
        var v, m;
        return (m = (v = e.data) == null ? void 0 : v.exchangeCoinState) != null ? m: -1
    }),
    s = computed(() = >{
        const v = (() = >{
            const m = "每天随时兑换成",
            g = "每天0点自动兑换成";
            return t.isIOS && o.value || a.value === ExchangeCoinState.Manual ? "".concat(m).concat($cashDisplay) : "".concat(g).concat($cashDisplay)
        })();
        return $translate.unitText(v)
    });
    function u(v) {
        let m = "";
        switch (i.value) {
        case 0:
            m = "&exchange_type=AUTO";
            break;
        case 2:
            m = "&exchange_type=MANUAL";
            break
        }
        return "/nebula/task/profit?layoutType=4&tab=".concat(v, "&source=moneyMain").concat(m)
    }
    function l(v) {
        const m = u(v);
        r.handleRefresh({
            force: !0
        }),
        openWebview(m)
    }
    function f(v) {
        n.setPopup(PopupType.COIN_PROFIT, v)
    }
    const p = computed(() = >{
        if (t.isFromXtab) return convertRpxToPx(24);
        if (t.isFromToptab) {
            const {
                titleht: v
            } = uaGetInfo(),
            {
                toolBarHeight: m
            } = useBarInfo();
            return Number(v) / window.devicePixelRatio + m + convertRpxToPx(25)
        }
        return t.statusBarHeight + convertRpxToPx(navBarHeight + 12)
    }),
    d = computed(() = >({
        marginTop: "".concat(p.value, "px")
    })),
    _ = computed(() = >{
        var v;
        return (v = n.popups[PopupType.WITHDRAW_GUIDE_POPUP]) == null ? void 0 : v.type
    });
    function y() {
        sendClick("TASK_GET_CASH_BUTTON", {
            credit_amount: e.cash,
            is_gesture: _.value ? "TRUE": "FALSE"
        }),
        r.handleRefresh({
            force: !0
        }),
        openWebview(e.withdrawPageUrl || "/nebula/task/cash?layoutType=4")
    }
    return {
        basicModel: e,
        commonModel: t,
        wrapperStyle: d,
        headSpaceSize: p,
        toggleCoinProfitDialog: f,
        gotoProfit: l,
        coinExchangeDes: s,
        coin: computed(() = >({
            amount: Number(e.coin),
            scroll: e.isCoinScroll
        })),
        cash: computed(() = >({
            amount: e.cash,
            scroll: e.isCashScroll
        })),
        goCashOutPage: y
    }
},
_sfc_main$b = defineComponent({
    components: {
        ScrollNum
    },
    props: {
        unit: {
            type: String,
        default:
            ""
        },
        amount: {
            type: [Number, String],
        default:
            0
        },
        scroll: {
            type: Boolean,
        default:
            !1
        },
        height: {
            type: Number,
        default:
            36
        },
        numberFontSize: {
            type: Number,
        default:
            NaN
        }
    },
    setup(e) {
        const t = useBasicModel(),
        n = computed(() = >t.cashCoinDataError);
        function r(o) {
            const a = o.findIndex(i = >i.range[0] !== i.range[1]);
            return o.map((i, s) = >({
                minScrollDigits: 10,
                useTimerToEnd: !0,
                scroll: !!i.scroll && s >= a
            }))
        }
        return {
            hasError: n,
            getCustomScrollPropsList: r,
            computedHeight: computed(() = >convertRpxToPx(e.height)),
            getDynamicValue
        }
    }
});
var _sfc_render$b = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("div", {
        staticClass: "balance",
        class: {
            error: t.hasError
        }
    },
    [t.hasError ? [t._v("获取失败")] : n("ScrollNum", {
        style: {
            fontSize: "".concat(t.getDynamicValue(t.numberFontSize), "px")
        },
        attrs: {
            num: t.amount,
            duration: 1200,
            interval: 200,
            height: t.computedHeight,
            scroll: t.scroll,
            unit: t.unit,
            "get-custom-props-list": t.getCustomScrollPropsList
        },
        on: {
            "start-scroll": function(r) {
                return t.$emit("start-scroll")
            },
            "finish-scroll": function(r) {
                return t.$emit("finish-scroll")
            }
        }
    })], 2)
},
_sfc_staticRenderFns$b = [],
__component__$b = normalizeComponent(_sfc_main$b, _sfc_render$b, _sfc_staticRenderFns$b, !1, null, "ef95b901", null, null);
const Balance = __component__$b.exports,
_sfc_main$a = defineComponent({
    props: {
        height: {
            type: Number,
        default:
            30
        },
        highlight: {
            type: Boolean,
        default:
            !1
        },
        beat: {
            type: Boolean,
        default:
            !1
        },
        fade: {
            type: Boolean,
        default:
            !0
        },
        text: {
            type: [String, Array],
        default:
            ""
        },
        duration: {
            type: Number,
        default:
            500
        },
        interval: {
            type: Number,
        default:
            1500
        }
    },
    setup(e) {
        const t = computed(() = >Array.isArray(e.text) ? e.text: e.text ? [e.text] : []),
        n = computed(() = >t.value.length > 1),
        r = computed(() = >e.fade && n.value),
        o = ref$1(0),
        a = ref$1(!1),
        i = ref$1(!1);
        function s() {
            a.value = e.beat,
            r.value && (i.value = r.value, o.value = (o.value + 1) % t.value.length),
            setTimeout(() = >{
                a.value = !1,
                setTimeout(() = >{
                    s()
                },
                e.interval)
            },
            e.duration)
        }
        return onMounted(() = >{
            setTimeout(() = >{
                i.value = r.value,
                s()
            },
            e.interval)
        }),
        {
            texts: t,
            curIndex: o,
            isShowBeatAnim: a,
            startFadeAnim: i,
            hasMore: n,
            computedHeight: computed(() = >convertRpxToPx(e.height))
        }
    }
});
var _sfc_render$a = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("div", {
        staticClass: "bubble-corner",
        class: {
            highlight: t.highlight,
            "is-beat": t.isShowBeatAnim,
            "has-more": t.hasMore
        },
        style: {
            height: "".concat(t.computedHeight, "px"),
            lineHeight: "".concat(t.computedHeight, "px")
        }
    },
    [t._t("default",
    function() {
        return t._l(t.texts,
        function(r, o) {
            return n("div", {
                key: o,
                staticClass: "corner-text",
                class: {
                    "corner-text-hidden": t.curIndex !== o,
                    "corner-text-visible": t.curIndex === o
                },
                style: {
                    animationDuration: t.startFadeAnim ? "".concat(t.duration, "ms") : "0ms"
                }
            },
            [t._v(" " + t._s(r) + " ")])
        })
    })], 2)
},
_sfc_staticRenderFns$a = [],
__component__$a = normalizeComponent(_sfc_main$a, _sfc_render$a, _sfc_staticRenderFns$a, !1, null, "6d971f7e", null, null);
const BubbleText = __component__$a.exports,
_sfc_main$9 = defineComponent({
    __name: "login",
    setup(e) {
        const t = defineAsyncComponent(() = >__vitePreload(() = >import("./VueCountDown-rRtdVQC9.js"), __vite__mapDeps([29, 3]), import.meta.url)),
        n = useRefreshModel(),
        {
            wrapperStyle: r,
            coin: o,
            cash: a,
            commonModel: i,
            basicModel: s
        } = useProfitData(),
        u = ref$1(64),
        l = computed(() = >{
            var p, d;
            const f = (d = (p = s.data) == null ? void 0 : p.unloginTaskCountDownTime) != null ? d: 0;
            return {
                display: +o.value.amount > 0 && f > 0,
                remainingTime: f,
                finish: () = >{
                    s.resetBalance(),
                    n.refresh()
                }
            }
        });
        return {
            __sfc: !0,
            VueCountDown: t,
            refreshModel: n,
            wrapperStyle: r,
            coin: o,
            cash: a,
            commonModel: i,
            basicModel: s,
            balanceHeight: u,
            unloginEncourage: l,
            $unit,
            padding,
            Balance,
            Bubble: BubbleText
        }
    }
});
var _sfc_render$9 = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        staticClass: "login-header",
        class: {
            "login-header-encourage": r.unloginEncourage.display
        },
        style: r.wrapperStyle
    },
    [r.unloginEncourage.display ? [n("div", {
        staticClass: "login-profit"
    },
    [t._m(0), n(r.Balance, t._b({
        attrs: {
            height: r.balanceHeight
        }
    },
    "Balance", r.coin, !1)), n("div", {
        staticClass: "extra next-extra"
    },
    [n("span", {
        staticClass: "extra-text"
    },
    [t._v(t._s(r.$unit))])])], 1), n("div", {
        staticClass: "count-down"
    },
    [t._v(" " + t._s(r.$unit) + "收益 "), n(r.VueCountDown, {
        attrs: {
            time: r.unloginEncourage.remainingTime,
            "fix-ios-uiwebview-scroll-bug": ""
        },
        on: {
            finish: r.unloginEncourage.finish
        },
        scopedSlots: t._u([{
            key: "default",
            fn: function(o) {
                return [o.days > 0 ? [n("span", {
                    staticClass: "time"
                },
                [t._v(t._s(r.padding(o.days)))]), n("span", {
                    staticClass: "unit"
                },
                [t._v("天")])] : t._e(), n("span", {
                    staticClass: "time"
                },
                [t._v(t._s(r.padding(o.hours)))]), n("span", {
                    staticClass: "separator"
                },
                [t._v(":")]), n("span", {
                    staticClass: "time"
                },
                [t._v(t._s(r.padding(o.minutes)))]), n("span", {
                    staticClass: "separator"
                },
                [t._v(":")]), n("span", {
                    staticClass: "time"
                },
                [t._v(t._s(r.padding(o.seconds)))])]
            }
        }], null, !1, 3505366972)
    }), t._v(" 后失效 ")], 1)] : n("div", {
        staticClass: "login-profit"
    },
    [t._m(1), n(r.Balance, t._b({
        attrs: {
            height: r.balanceHeight
        }
    },
    "Balance", r.cash, !1)), n("div", {
        staticClass: "extra next-extra"
    },
    [n(r.Bubble, {
        staticClass: "corner",
        attrs: {
            highlight: ""
        }
    },
    [t._v("新用户")]), n("span", {
        staticClass: "extra-text"
    },
    [t._v(t._s(r.commonModel.isIOS ? "": "元"))])], 1)], 1), n("div", {
        directives: [{
            name: "log",
            rawName: "v-log.show",
            value: {
                action: "LOGIN_BUTTON"
            },
            expression: "{\n            action: 'LOGIN_BUTTON',\n        }",
            modifiers: {
                show: !0
            }
        }],
        staticClass: "login-btn"
    },
    [t._v(" 登录后秒提现 ")])], 2)
},
_sfc_staticRenderFns$9 = [function() {
    var e = this,
    t = e._self._c;
    return e._self._setupProxy,
    t("div", {
        staticClass: "extra prev-extra"
    },
    [t("span", {
        staticClass: "extra-text"
    },
    [e._v("已得")])])
},
function() {
    var e = this,
    t = e._self._c;
    return e._self._setupProxy,
    t("div", {
        staticClass: "extra prev-extra"
    },
    [t("span", {
        staticClass: "extra-text"
    },
    [e._v("最少")])])
}],
__component__$9 = normalizeComponent(_sfc_main$9, _sfc_render$9, _sfc_staticRenderFns$9, !1, null, "5727cef0", null, null);
const Login = __component__$9.exports,
_sfc_main$8 = defineComponent({
    __name: "consume-item",
    props: {
        data: null,
        index: null,
        showBubble: {
            type: Boolean
        }
    },
    emits: ["click-item"],
    setup(e, {
        emit: t
    }) {
        const n = e,
        r = ref$1(!0),
        o = computed(() = >{
            if (n.data.bubble && r.value) {
                const {
                    startTime: u,
                    endTime: l
                } = n.data.bubble,
                f = Date.now();
                if (f >= u && f <= l) return "BUBBLE_".concat(n.data.id, "_").concat(u, "_").concat(l)
            }
            return ""
        }),
        a = computed(() = >!!o.value && !window.localStorage.getItem(o.value)),
        i = computed(() = >{
            var u, l;
            return a.value && ((l = (u = n.data.bubble) == null ? void 0 : u.text) != null ? l: "") || ""
        });
        return {
            __sfc: !0,
            props: n,
            emits: t,
            tempShowCorner: r,
            localKey: o,
            showBubbleCorner: a,
            bubbleText: i,
            clickConsumeItem: async() = >{
                t("click-item", n.data),
                o.value && window.localStorage.setItem(o.value, "TRUE"),
                window.setTimeout(() = >{
                    r.value = !1
                },
                10)
            },
            transformEventTrackingLogInfo,
            BubbleCorner: BubbleText
        }
    }
});
var _sfc_render$8 = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        directives: [{
            name: "log",
            rawName: "v-log.show.click",
            value: {
                action: "ENTRY_ICON_BUTTON",
                params: {
                    icon_id: t.data.id,
                    index: t.index,
                    button_name: t.data.name,
                    bubble_name: r.bubbleText,
                    ...r.transformEventTrackingLogInfo(t.data.eventTrackingLogInfo)
                }
            },
            expression: "{\n        action: 'ENTRY_ICON_BUTTON',\n        params: {\n            icon_id: data.id,\n            index,\n            button_name: data.name,\n            bubble_name: bubbleText,\n            ...transformEventTrackingLogInfo(data.eventTrackingLogInfo),\n        },\n    }",
            modifiers: {
                show: !0,
                click: !0
            }
        }],
        staticClass: "consume-item",
        on: {
            click: r.clickConsumeItem
        }
    },
    [n("img", {
        staticClass: "consume-icon",
        attrs: {
            src: t.data.icon
        }
    }), n("div", {
        staticClass: "consume-name"
    },
    [t._v(" " + t._s(t.data.name) + " "), r.showBubbleCorner && t.showBubble ? n(r.BubbleCorner, {
        attrs: {
            text: r.bubbleText,
            highlight: !1
        }
    }) : t._e()], 1)])
},
_sfc_staticRenderFns$8 = [],
__component__$8 = normalizeComponent(_sfc_main$8, _sfc_render$8, _sfc_staticRenderFns$8, !1, null, "74e126df", null, null);
const ConsumeItem = __component__$8.exports,
useProfitEnhanceCount = () = >{
    var f, p;
    const e = "REWARD_FLY_COUNT",
    t = (p = (f = api.get("userId")) != null ? f: api.get("ud")) != null ? p: "unknown",
    n = "".concat(e, "_").concat(t);
    let r = 0;
    const o = () = >transformMsToString(Date.now(), "yyyy-MM-dd"),
    a = d = >{
        d === -1 ? r = 1 / 0 : r = d
    },
    i = () = >{
        const d = localStorage.getItem(n);
        if (d == null) return null;
        try {
            const _ = JSON.parse(d);
            return _ == null ? null: _
        } catch(_) {
            return null
        }
    };
    return {
        setFlyMaxCount: a,
        canFly: () = >{
            const d = i(),
            _ = o();
            if (d == null) return r > 0; {
                const {
                    count: y,
                    date: v
                } = d;
                return _ === v ? y < r: r > 0
            }
        },
        flyCountIncrease: () = >{
            const d = i(),
            _ = o();
            if (d == null) localStorage.setItem(n, JSON.stringify({
                count: 1,
                date: _
            }));
            else {
                const {
                    count: y,
                    date: v
                } = d;
                localStorage.setItem(n, JSON.stringify({
                    count: v === _ ? y + 1 : 1,
                    date: _
                }))
            }
        },
        flyCountDecrease: () = >{
            const d = i(),
            _ = o();
            if (d != null) {
                const {
                    count: y,
                    date: v
                } = d;
                v === _ && localStorage.setItem(n, JSON.stringify({
                    count: y - 1,
                    date: _
                }))
            }
        }
    }
},
CoinIcon = "" + window.__assetsPath + "lib/images/coin-rotate.apng-oqQdlKfD.png",
CashIcon = "" + window.__assetsPath + "lib/images/cash-DT6tRVgq.png",
usePreloadProfitEnhanceSources = () = >{
    const e = createDefer();
    return {
        preloadDefer: e,
        startPreload: async() = >{
            await Promise.all([preloadSource(CoinIcon), preloadSource(CashIcon)]),
            e.resolve()
        }
    }
},
useProfitEnhanceModel = createUseModel(() = >{
    var b, A;
    const e = useBasicModel(),
    t = useCommonModel(),
    n = (A = (b = api.get("userId")) != null ? b: api.get("ud")) != null ? A: "unknown",
    r = "SETTING_Notify_".concat(n),
    {
        preloadDefer: o,
        startPreload: a
    } = usePreloadProfitEnhanceSources(),
    {
        setFlyMaxCount: i,
        flyCountIncrease: s,
        flyCountDecrease: u,
        canFly: l
    } = useProfitEnhanceCount(),
    f = ref$1(!1),
    p = ref$1(!1),
    d = ref$1(!1),
    _ = computed(() = >{
        var E;
        return (E = e.data) == null ? void 0 : E.awardFeedbackEnhanceConfig
    }),
    y = computed(() = >{
        var E, P;
        return (P = (E = _.value) == null ? void 0 : E.enableShake) != null ? P: !1
    }),
    v = computed(() = >{
        var E, P;
        return (P = (E = _.value) == null ? void 0 : E.effectType) != null ? P: ""
    }),
    m = computed(() = >t.fold ? "coin-nav-balance": "coin-balance"),
    g = computed(() = >t.fold ? "cash-nav-balance": "cash-balance");
    whenever(_, E = >{
        i(E.totalCount)
    },
    {
        immediate: !0
    });
    const C = async() = >{
        var P;
        Array.from(document.getElementsByClassName("rich-toast")).length > 0 && await sleep(2e3),
        f.value = !0,
        (P = e.data) != null && P.showProfitSetting && localStorage.getItem(r) == null && (p.value = !0, localStorage.setItem(r, "true")),
        s()
    },
    I = () = >{
        var E; (E = e.deferToIncrease) == null || E.resolve(),
        f.value = !1,
        u()
    };
    whenever(() = >e.deferToIncrease, async() = >{
        var E;
        if (!l() || d.value || v.value === "") { (E = e.deferToIncrease) == null || E.resolve();
            return
        }
        await o.promise,
        f.value || C()
    });
    let S = 0;
    const w = () = >{
        clearTimeout(S),
        S = 0
    };
    return whenever(p, () = >{
        w(),
        S = window.setTimeout(() = >{
            p.value = !1,
            w()
        },
        7e3)
    }),
    a(),
    reactive({
        loadFail: d,
        enableShake: y,
        enhanceType: v,
        showProfitEnhance: f,
        startInitEnhance: C,
        enhanceError: I,
        coinTargetId: m,
        cashTargetId: g,
        flyCountDecrease: u,
        showSettingNotify: p
    })
});
async
function isSystemMuted() {
    try {
        const e = "growth.isSystemVolumeMuted";
        if (await yodaCanIUse$2(e)) {
            const {
                data: n
            } = await useYoda(e);
            return n
        }
        return ! 1
    } catch(e) {
        return ! 1
    }
}
var ScrollClassEnum = (e = >(e.START = "scale-start", e.END = "scale-end", e))(ScrollClassEnum || {});
const _sfc_main$7 = defineComponent({
    __name: "profit",
    setup(e) {
        const t = useRefreshModel(),
        n = useBasicModel(),
        r = usePopupModel(),
        o = useProfitEnhanceModel(),
        a = defineAsyncComponent(() = >__vitePreload(() = >import("./EffectIndex-CPOqSF-M.js"), __vite__mapDeps([30, 3, 22, 23, 31]), import.meta.url)),
        i = defineAsyncComponent(() = >__vitePreload(() = >import("./CoinExchangePopup-B8nG6qEm.js").then(F = >F.a), __vite__mapDeps([32, 3, 10, 11, 12, 13, 14, 33]), import.meta.url)),
        s = defineAsyncComponent(() = >__vitePreload(() = >import("./withdraw-guide-tZ7Bocdw.js"), __vite__mapDeps([34, 3, 35, 36]), import.meta.url)),
        u = defineAsyncComponent(() = >__vitePreload(() = >import("./CoinExchangeGuide-BhFIKnGw.js"), __vite__mapDeps([37, 3, 22, 23, 25, 38, 39]), import.meta.url)),
        l = defineAsyncComponent(() = >__vitePreload(() = >import("./ProfitEntranceGuide-HD8CUUz_.js"), __vite__mapDeps([40, 3, 22, 23, 25, 38, 41]), import.meta.url)),
        f = ref$1(!1),
        p = ref$1(!1),
        d = ref$1(!1),
        {
            coin: _,
            cash: y,
            coinExchangeDes: v,
            gotoProfit: m,
            goCashOutPage: g,
            wrapperStyle: C
        } = useProfitData(),
        I = ref$1(64),
        S = F = >{
            recordEventTracking(F.eventTrackingLogInfo),
            t.handleRefresh({
                force: !0
            }),
            openLinkUrl(F.linkType, F.linkUrl, {
                eventTrackingLogInfo: F.eventTrackingLogInfo
            })
        },
        w = computed(() = >n.consumptionList.findIndex(F = >F.bubble)),
        b = computed(() = >n.isHitEarningActivityMix ? 2 : 0),
        A = computed(() = >{
            if (!n.showManualExchangeBtn) return 36 - b.value;
            const F = "".concat(_.value.amount).length + "".concat(y.value.amount).length;
            return F <= 12 ? 36 - b.value: F >= 15 ? 28 - b.value: 32 - b.value
        });
        watch(() = >n.consumptionList, F = >{
            F.length > 0 && sendTask("ENTRY_ICON_BAR_BUTTON", {
                num: F.length
            },
            {
                type: "BACKGROUND_TASK_EVENT"
            })
        },
        {
            immediate: !0
        });
        const E = computed(() = >n.consumptionList.length > 1),
        P = computed(() = >{
            var F, U;
            return (U = (F = n.data) == null ? void 0 : F.awardFeedbackEnhanceConfig) == null ? void 0 : U.awardSound
        });
        let L = 0,
        D = 0;
        whenever(_, (F, U) = >{
            L = F.amount - (U == null ? void 0 : U.amount)
        }),
        whenever(y, (F, U) = >{
            D = +F.amount - (U == null ? void 0 : U.amount)
        });
        const V = ref$1(),
        Q = ref$1(),
        {
            beep: oe
        } = useBeep();
        async
        function te() {
            if (L > 1) {
                o.showProfitEnhance && o.enhanceType !== FlyAnimationType.CASH && (V.value = "scale-start");
                const F = await isSystemMuted();
                P.value && !F && oe(P.value, !1, {
                    useSwitch: !0
                })
            }
        }
        function ne() {
            V.value === "scale-start" && (V.value = "scale-end")
        }
        function B() {
            D > 1 && o.showProfitEnhance && o.enhanceType !== FlyAnimationType.COIN && (Q.value = "scale-start")
        }
        function T() {
            Q.value === "scale-start" && (Q.value = "scale-end")
        }
        async
        function O() {
            await n.refetchBasicInfo(),
            f.value = !0,
            P.value || useCoinSound(),
            setTimeout(() = >{
                f.value = !1
            },
            3e3)
        }
        const {
            showCoinExchangePopup: R,
            handleCoinExchange: $
        } = useCoinExchangeClick({
            isCoinExchangeSO: computed(() = >n.isCoinExchangeSO),
            isCoinExchangeShowPopup: computed(() = >n.isCoinExchangeShowPopup),
            coinExchangeAmount: computed(() = >n.currentCoin),
            coinExchangeSOCallback: O
        });
        function M() {
            const F = Number(n.currentCoin),
            U = "再得".concat(100 - F).concat($unit, "可兑换").concat($cashDisplay);
            if (F < 100) {
                showYodaToast(U);
                return
            }
            $()
        }
        function W() {
            var F;
            if (! ((F = n.data) != null && F.notShareBubble) && (n.showManualExchangeBtn && !localStorage.getItem("showManualExchangeBtn") && (setTimeout(() = >{
                p.value = !0,
                localStorage.setItem("showManualExchangeBtn", "1")
            },
            0), setTimeout(() = >{
                p.value = !1
            },
            3500)), n.showExchangeChangeSwitch && !localStorage.getItem("showExchangeChangeSwitch"))) {
                const U = n.showManualExchangeBtn ? 3500 : 0;
                setTimeout(() = >{
                    d.value = !0,
                    localStorage.setItem("showExchangeChangeSwitch", "1")
                },
                0 + U),
                setTimeout(() = >{
                    d.value = !1
                },
                3500 + U)
            }
        }
        watch(() = >r.noMask, F = >{
            F && W()
        });
        const Z = ref$1(null);
        return until(Z).toBeTruthy().then(() = >{
            sendPerfLog("EARNING_PERFORMANCE_PROFIT")
        }),
        {
            __sfc: !0,
            refreshModel: t,
            basicModel: n,
            popupModel: r,
            profitEnhanceModel: o,
            CoinExchangeAni: a,
            CoinExchangePopup: i,
            WithdrawGuide: s,
            CoinExchangeGuide: u,
            ProfitEntranceGuide: l,
            showCoinExchangeAni: f,
            showCoinExchangeGuide: p,
            showProfitEntranceGuide: d,
            coin: _,
            cash: y,
            coinExchangeDes: v,
            gotoProfit: m,
            goCashOutPage: g,
            wrapperStyle: C,
            profitHeight: I,
            clickConsumeItem: S,
            showBubbleIndex: w,
            mixNumberFontSizeDiff: b,
            numberFontSize: A,
            showConsumptionList: E,
            sound: P,
            coinDiff: L,
            cashDiff: D,
            ScrollClassEnum,
            coinScrollWrapperClass: V,
            cashScrollWrapperClass: Q,
            beep: oe,
            balanceScrollStart: te,
            balanceScrollFinish: ne,
            cashBalanceScrollStart: B,
            cashBalanceScrollFinish: T,
            handleCoinExchangeSuccess: O,
            showCoinExchangePopup: R,
            handleCoinExchange: $,
            handleExchangeBtn: M,
            initCoinExchangeGuide: W,
            profitRef: Z,
            $unit,
            $cashUnit,
            $cashDisplay,
            ArrowIcon,
            ConsumeItem,
            Balance
        }
    }
});
var _sfc_render$7 = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        ref: "profitRef",
        class: {
            account: !0,
            consume: r.showConsumptionList
        },
        style: r.wrapperStyle,
        attrs: {
            "data-guide": "account"
        }
    },
    [n("ul", {
        staticClass: "account-profit"
    },
    [n("li", {
        directives: [{
            name: "log",
            rawName: "v-log.click",
            value: {
                action: "EARNING_COIN"
            },
            expression: "{\n                action: 'EARNING_COIN',\n            }",
            modifiers: {
                click: !0
            }
        }],
        staticClass: "account-item coin-item",
        on: {
            click: function(o) {
                return r.gotoProfit("coin")
            }
        }
    },
    [r.showCoinExchangeAni ? n(r.CoinExchangeAni, {
        staticClass: "coin-exchange-ani"
    }) : t._e(), n("span", {
        staticClass: "account-item-title"
    },
    [t._v(" 我的" + t._s(r.$unit) + " "), n(r.ArrowIcon, {
        staticClass: "account-item-arraw"
    }), n(r.ProfitEntranceGuide, {
        attrs: {
            show: r.showProfitEntranceGuide,
            tip: "点这里可以切换\r".concat(r.$unit, "兑换方式哦~")
        }
    })], 1), n("div", {
        staticClass: "balance-wrapper"
    },
    [n(r.Balance, t._b({
        class: r.coinScrollWrapperClass,
        attrs: {
            id: "coin-balance",
            height: r.profitHeight,
            "number-font-size": r.numberFontSize
        },
        on: {
            "start-scroll": r.balanceScrollStart,
            "finish-scroll": r.balanceScrollFinish
        }
    },
    "Balance", r.coin, !1)), r.basicModel.showManualExchangeBtn ? n("button", {
        directives: [{
            name: "log",
            rawName: "v-log.show.click",
            value: {
                action: "GOLD_CASH_CHANGE_BUTTON",
                params: {
                    type: r.basicModel.isCoinExchangeSO ? 1 : 2
                }
            },
            expression: "{\n                        action: 'GOLD_CASH_CHANGE_BUTTON',\n                        params: {\n                            type: basicModel.isCoinExchangeSO ? 1 : 2,\n                        },\n                    }",
            modifiers: {
                show: !0,
                click: !0
            }
        }],
        staticClass: "coin-exchange-btn",
        on: {
            click: function(o) {
                return o.stopPropagation(),
                r.handleExchangeBtn.apply(null, arguments)
            }
        }
    },
    [t._v(" 换现金 "), n(r.CoinExchangeGuide, {
        attrs: {
            show: r.showCoinExchangeGuide,
            tip: "点这里可以把".concat(r.$unit, "\r兑换成").concat(r.$cashDisplay, "啦~")
        }
    })], 1) : t._e()], 1)], 1), n("li", {
        directives: [{
            name: "log",
            rawName: "v-log.click",
            value: {
                action: "EARNING_CASH"
            },
            expression: "{\n                action: 'EARNING_CASH',\n            }",
            modifiers: {
                click: !0
            }
        }],
        staticClass: "account-item cash-item",
        on: {
            click: function(o) {
                return r.gotoProfit("cash")
            }
        }
    },
    [n("span", {
        staticClass: "account-item-title"
    },
    [t._v(" 我的" + t._s(r.$cashDisplay) + " "), n(r.ArrowIcon, {
        staticClass: "account-item-arraw"
    })], 1), n("div", {
        staticClass: "balance-wrapper"
    },
    [n(r.Balance, t._b({
        class: r.cashScrollWrapperClass,
        attrs: {
            id: "cash-balance",
            height: r.profitHeight,
            "number-font-size": r.numberFontSize
        },
        on: {
            "start-scroll": r.cashBalanceScrollStart,
            "finish-scroll": r.cashBalanceScrollFinish
        }
    },
    "Balance", r.cash, !1)), n(r.WithdrawGuide, {
        on: {
            "handle-btn": r.goCashOutPage
        }
    })], 1)])]), n("p", {
        staticClass: "account-tip"
    },
    [n("span", {
        staticClass: "account-tip-text"
    },
    [t._v(t._s(r.coinExchangeDes))])]), r.showConsumptionList ? n("div", {
        staticClass: "consume-list"
    },
    t._l(r.basicModel.consumptionList,
    function(o, a) {
        return n(r.ConsumeItem, {
            key: "consume-".concat(o.id),
            attrs: {
                data: o,
                index: a,
                "show-bubble": r.showBubbleIndex === a
            },
            on: {
                "click-item": r.clickConsumeItem
            }
        })
    }), 1) : t._e(), n(r.CoinExchangePopup, {
        attrs: {
            show: r.showCoinExchangePopup,
            coin: r.basicModel.currentCoin,
            "cash-unit": r.$cashUnit,
            "coin-exchange-levels": r.basicModel.coinExchangeLevels
        },
        on: {
            close: function(o) {
                r.showCoinExchangePopup = !1
            },
            "exchange-success": r.handleCoinExchangeSuccess
        }
    })], 1)
},
_sfc_staticRenderFns$7 = [],
__component__$7 = normalizeComponent(_sfc_main$7, _sfc_render$7, _sfc_staticRenderFns$7, !1, null, "7ae70665", null, null);
const Profit = __component__$7.exports,
_sfc_main$6 = defineComponent({
    __name: "index",
    setup(e) {
        const t = useCommonModel(),
        n = useRefreshModel(),
        r = useBasicModel(),
        o = () = >{
            n.shouldJumpWithdrawPage = r.autoJumpWithdrawPage,
            n.reload()
        },
        {
            cash: a
        } = useProfitData(),
        i = ref$1(),
        s = ref$1(!1);
        useIntersectionObservable(i, () = >{
            s.value = !1
        },
        () = >{
            s.value = !0
        });
        const u = computed(() = >t.statusBarHeight + convertRpxToPx(80));
        return {
            __sfc: !0,
            commonModel: t,
            refreshModel: n,
            basicModel: r,
            quickLoginRefresh: o,
            cash: a,
            loginRef: i,
            showStickyQuickLogin: s,
            navBarHeight: u,
            QuickLogin,
            Login,
            Profit
        }
    }
});
var _sfc_render$6 = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        ref: "loginRef"
    },
    [r.basicModel.needQuickLogin ? n(r.QuickLogin, {
        attrs: {
            cash: r.cash,
            "current-cash": r.basicModel.currentCash,
            "show-sticky-box": r.showStickyQuickLogin,
            "nav-bar-height": r.navBarHeight,
            "auto-jump-withdraw-page": r.basicModel.autoJumpWithdrawPage,
            "bubble-text": r.basicModel.xinHuiUnLoginBubbleText
        },
        on: {
            refetch: r.quickLoginRefresh
        }
    }) : r.basicModel.needLogin ? n(r.Login) : n(r.Profit)], 1)
},
_sfc_staticRenderFns$6 = [],
__component__$6 = normalizeComponent(_sfc_main$6, _sfc_render$6, _sfc_staticRenderFns$6, !1, null, null, null, null);
const Header = __component__$6.exports;
var GrowthCoinBoostPrivilegeStatus = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.LOCKED = 1] = "LOCKED", e[e.GOING = 2] = "GOING", e[e.REWARDED = 3] = "REWARDED", e))(GrowthCoinBoostPrivilegeStatus || {}),
GrowthCoinBoostPrivilegeBtnStatus = (e = >(e[e.ACTIVE = 1] = "ACTIVE", e[e.DISABLE = 2] = "DISABLE", e))(GrowthCoinBoostPrivilegeBtnStatus || {}),
GrowthCoinBoostPrivilegeBtnStyle = (e = >(e[e.OUTLINE = 1] = "OUTLINE", e[e.DEFAULT = 2] = "DEFAULT", e))(GrowthCoinBoostPrivilegeBtnStyle || {}),
GrowthCoinBoostPrivilegeBtnActionType = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SCHEME = 1] = "SCHEME", e[e.WEBVIEW = 2] = "WEBVIEW", e[e.SERVICE = 3] = "SERVICE", e[e.TOAST = 4] = "TOAST", e))(GrowthCoinBoostPrivilegeBtnActionType || {});
const arrow = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='none'%3e%3cpath%20fill='%23fff'%20d='m8.804%2011.225%203.675-4.974a1%201%200%200%200-.804-1.594h-7.35a1%201%200%200%200-.804%201.594l3.675%204.974a1%201%200%200%200%201.608%200Z'/%3e%3c/svg%3e",
_sfc_main$5 = defineComponent({
    __name: "NumberScroll",
    props: {
        num: null,
        numberFontSize: null
    },
    setup(e) {
        function t(n) {
            const r = n.findIndex(o = >o.range[0] !== o.range[1]);
            return n.map((o, a) = >({
                minScrollDigits: 10,
                useTimerToEnd: !0,
                scroll: !!o.scroll && a >= r
            }))
        }
        return {
            __sfc: !0,
            getCustomScrollPropsList: t,
            ScrollNum,
            getDynamicValue
        }
    }
});
var _sfc_render$5 = function e() {
    var o;
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n(r.ScrollNum, {
        staticClass: "font-number",
        style: {
            fontSize: "".concat(r.getDynamicValue((o = t.numberFontSize) != null ? o: NaN), "px")
        },
        attrs: {
            num: t.num,
            duration: 1200,
            interval: 200,
            scroll: !0,
            "get-custom-props-list": r.getCustomScrollPropsList
        },
        on: {
            "start-scroll": function(a) {
                return t.$emit("start-scroll")
            },
            "finish-scroll": function(a) {
                return t.$emit("finish-scroll")
            }
        }
    })
},
_sfc_staticRenderFns$5 = [],
__component__$5 = normalizeComponent(_sfc_main$5, _sfc_render$5, _sfc_staticRenderFns$5, !1, null, "b22480cf", null, null);
const NumberScroll = __component__$5.exports,
_sfc_main$4 = defineComponent({
    __name: "ProfitFold",
    props: {
        coinAmount: null,
        coinUnit: null,
        cashAmount: null,
        cashDisplay: null
    },
    emits: ["goto-profit", "goto-top"],
    setup(e, {
        emit: t
    }) {
        return {
            __sfc: !0,
            emits: t,
            arrow,
            NumberScroll
        }
    }
});
var _sfc_render$4 = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        staticClass: "h-30px text-14px flex items-center font-normal"
    },
    [n("div", {
        directives: [{
            name: "log",
            rawName: "v-log.show.click",
            value: {
                action: "BAR_PROFIT_AMOUNT",
                params: {
                    type: "coin"
                }
            },
            expression: "{\n            action: 'BAR_PROFIT_AMOUNT',\n            params: {\n                type: 'coin',\n            },\n        }",
            modifiers: {
                show: !0,
                click: !0
            }
        }],
        staticClass: "flex items-center",
        on: {
            click: function(o) {
                return r.emits("goto-profit", "coin")
            }
        }
    },
    [n("span", {
        staticClass: "pr-2px leading-16px"
    },
    [t._v(t._s(t.coinUnit) + ":")]), n(r.NumberScroll, {
        attrs: {
            id: "coin-nav-balance",
            num: t.coinAmount,
            "number-font-size": 16
        }
    })], 1), n("i", {
        staticClass: "block h-11px mx-12px border-0 border-solid border-#fff border-l-1px opacity-50"
    }), n("div", {
        directives: [{
            name: "log",
            rawName: "v-log.show.click",
            value: {
                action: "BAR_PROFIT_AMOUNT",
                params: {
                    type: "cash"
                }
            },
            expression: "{\n            action: 'BAR_PROFIT_AMOUNT',\n            params: {\n                type: 'cash',\n            },\n        }",
            modifiers: {
                show: !0,
                click: !0
            }
        }],
        staticClass: "flex items-center",
        on: {
            click: function(o) {
                return r.emits("goto-profit", "cash")
            }
        }
    },
    [n("span", {
        staticClass: "pr-2px leading-16px"
    },
    [t._v(t._s(t.cashDisplay) + ": ")]), n(r.NumberScroll, {
        attrs: {
            id: "cash-nav-balance",
            num: t.cashAmount,
            "number-font-size": 16
        }
    })], 1), n("img", {
        directives: [{
            name: "log",
            rawName: "v-log.show.click",
            value: {
                action: "BAR_PROFIT_PAGE_MORE"
            },
            expression: "{\n            action: 'BAR_PROFIT_PAGE_MORE',\n        }",
            modifiers: {
                show: !0,
                click: !0
            }
        }],
        staticClass: "block w-16px h-16px mx-8px",
        attrs: {
            src: r.arrow
        },
        on: {
            click: function(o) {
                return r.emits("goto-top")
            }
        }
    })])
},
_sfc_staticRenderFns$4 = [],
__component__$4 = normalizeComponent(_sfc_main$4, _sfc_render$4, _sfc_staticRenderFns$4, !1, null, null, null, null);
const ProfitFold = __component__$4.exports,
coin = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAMAAAA5HAOUAAAC/VBMVEUAAAD19ev14MT67c7vuZTswJb07OTz29Xz0p70wpP049f///3yz6f017f0vZH38/P03cX//fH437D11aL86sTyyZP3wo3//fb22bT10qL+/PTzn131snr00aL32rfy38Xz59328OT17ef57+Hz6eD65bzzmln14tX2tnT0j0T06N3316X1wHr11aL017X+9N7//vj2unn55b/00Zv1uIz1yKn06eHz38z05Nf00rv0s4Hxwo3zmln16N/+9eT88dn0uH31qWn56c39/fv0pWj2xI/tu5L0sYX/++/21Zj04bv31Zrz37f205f25sP315310pT15L/0zYr1zIf0z5D426T20ZH04730y4T04Ln42KD31Zn305b10I70iz32w3T636352aL42J72zoz1xnn3x3b98dT30pP0yH71xnT2sWD86L3z3K753qn00Zb10pH2yH31wnH3xWz1tGr1sWb0kUT96sL02Lf0zY33z4n4zoL3yIL2xX/2xHr2wXn2uHD1vG/2uGP0qFn1nFT5ukj99Nz97cn658D028D647Tz1qb1zpP41JL40Yr2y4H4y3P1vWr7xmb1vmX3w131rVX5vFT0tU/0lk31l0X4tTr0hzfzizbzgS/4oy33kSPyhB303sz36MT55Lv857j14bj01Kz63KT1y6H1x4/3y4v0wYr604j40Ib3zYX0v4L70H71u3n3xG/2wWzyvF/0sVz1qFX3q0n0nUj5sUb3okb0rkH0jT/4qDr1mDT5nzD5qS74mSb0lh/1kRn/+eT46cj97MX02Ljz1bD74a7326rz1Kr00af415v41ZX1v5X5z4/1yYD1snz1uXX3xnH1tW/1pWP5w2L4ul71ql32olr5tlf0o1D1nE3znkL1kjj4oTXzpTTpaC75mCvznSn4pST4lyL6nh35kw/2dQ74cgv6hQjz49X03cf007794Jz3yYH2zX70qW/yjj7mcjP5jyvpfivxfCryeirxeCj0iSLziBf0ixX0hRX4fA7uaQ2G7FFPAAAASXRSTlMABiH+Oh4QCv7hnU5NQiQV+/r6+fDRwLuwoqCSjox5ZF9VTjYo+Pj18vDv7Orp5+bc29bS0dDOzMrCwLi4r62fn56AdnFwYkU+cZH6bgAABDJJREFUOMt11GVQG0EYBuBDSt3d3d3ddbNc7rjLXUKEOAlBIhDcS0txKVqs7q641d3d3d11umGYdjKl78z+e2a/d3dnFrOOQ+PZnTpNmz6riQP2v9g0bt+y5SJX31Xuvr59OzStGzUesd/1oPsRhoBQwchiZB1t/zXN2+9fvEq+KaWwPD+/LC0EF3p6Dv1nuwXD3WWnU0orstMvR0TsKSsoC4EM07q7Nepp56m5VvnwcqDSYJRKpQJq99c0XChsYMV6t2GCbv8s2qJOUtMSVk+fUblRN/cCIWzd8y+ybSMPyn+qS3x9EpAkiQMIcMlOwd5LhIJs0evPDYxilPeeJBulKxetxIEICqNXQpFGLYjarAANBvWpVd08xYVPI4xScgWXezQBKqLtVngEAJHb5r0EwVsyrnZeK0L67NqOnTzcycmJCxQHuE5856gtIo0hTUmQsc971KiuDJv3QbVTosE9kOK6cvkc57DsDA0MD/IhgNfyCQ6WVoMJ9bMdJkoPo6O5ljhxPCKrq6MCRJLESMvI5ZYDNJGLou4ZzvPIVnZoFgqfE+v9rSqdxtkzVwghz+9FI6Q6KkSPUk00i6/mO/H5fA7HmcPhGDNUFAkMYYScd3jJeBsMG03EP35jkpDAg4OCkKOzo2NgthvNE0vDCMZ/zaEW9bH6cXDbI8F5FieAxN8LGUsa5FUsFUhIVSjBUGv8lthi9XCYUq5NJAHjaud5FFXfePfu+1/f85FiVcFQTh/zO9QHswfwUqlWTYLV6HgrUHcu13njx4JiNFGpCgZi/2OH/WwxexyayrUGMSrP4VjKc9DSZrgJKJ40lFCExB1f4+eANfOCSZUCtRiPRX1qaqGVlG0SUP7GDVDhvX7d8WE2mE0c1D+mpDhgk3dpEfCI9XDc+uDBUgElDRGLQkO3rl/XAd1XWwDykt1YACS7UtFe4U8K7lT9qFwqoFM3wBOR4du3ru9meUYvaLqtTAQAKHloXmH1/eLi0gwVHREkFIXt9j63faMtUvZxAOapt4gBICkv/5tVD9NVWq2AjggW4qf36bzDzrVDCI0kicCK+AANwPXUrvsFd3bQFEXvDpZBcdZ1H+8L25vUqHk8XJgUdSIgXiTWU26pRloiMSRvkAH2Rk4kUmirmkzm4cy29PiAzSfFYlbPsrQ6SCYDysxPWXt0PgOa1ap6DXm4fG3KtrUJCZs2BQYmrHVf7IkHv/uSk3Uj0mcuArVsCEVCWcyrI6t8D7ovdl3kLtf45H5e5mLOuj7jD0JsZAiPFDExSLj6xjAwdF9u7jIXlxLzTBur76aLLpxmvQihXAiV4ftycpch5GLuXB+zTtOGV4rSdDrdnqJbt3JcSlxQBs6p49NptPzU2YtXF6JkZprNJeYpzbC60ntq/5frTp19i2hmv8722P/SvEejiWMbjpnUZb51od/Z6cAlTNDKMAAAAABJRU5ErkJggg==",
_sfc_main$3 = defineComponent({
    __name: "DailyTaskEntry",
    props: {
        text: null
    },
    emits: ["goto-daily-task"],
    setup(e, {
        emit: t
    }) {
        return {
            __sfc: !0,
            emits: t,
            coin
        }
    }
});
var _sfc_render$3 = function e() {
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", {
        directives: [{
            name: "log",
            rawName: "v-log.show.click",
            value: {
                action: "BAR_PROFIT_TASK_ICON",
                params: {
                    title: t.text
                }
            },
            expression: "{\n        action: 'BAR_PROFIT_TASK_ICON',\n        params: {\n            title: text,\n        },\n    }",
            modifiers: {
                show: !0,
                click: !0
            }
        }],
        staticClass: "h-30px bg-#5d0000/8 px-12px rounded-15px flex items-center",
        on: {
            click: function(o) {
                return r.emits("goto-daily-task")
            }
        }
    },
    [n("img", {
        staticClass: "block w-18px h-18px mr-2px vertical-middle",
        attrs: {
            src: r.coin,
            alt: ""
        }
    }), n("span", {
        staticClass: "block vertical-middle text-12px text-#fff font-bold"
    },
    [t._v(t._s(t.text))])])
},
_sfc_staticRenderFns$3 = [],
__component__$3 = normalizeComponent(_sfc_main$3, _sfc_render$3, _sfc_staticRenderFns$3, !1, null, null, null, null);
const DailyTaskEntry = __component__$3.exports,
_sfc_main$2 = defineComponent({
    components: {
        Back,
        DailyTaskEntry,
        Balance,
        BackIcon: ArrowIcon,
        ProfitFold,
        CornerEntrance: defineAsyncComponent(() = >__vitePreload(() = >import("./CornerEntrance-D3tPhVea.js"), __vite__mapDeps([42, 3, 10, 11, 12, 13, 14, 43, 22, 23, 25, 38, 44]), import.meta.url))
    },
    emits: {
        scroll: e = >!0,
        "update-bar-height": e = >!0,
        fold: e = >!0
    },
    setup(e, t) {
        const n = useCommonModel(),
        r = useTaskModel(),
        {
            cash: o,
            coin: a,
            basicModel: i,
            gotoProfit: s
        } = useProfitData(),
        u = ref$1($cashDisplay),
        l = computed(() = >i.isHitEarningActivityMix ? 0 : i.needQuickLogin ? 12 : 104),
        f = computed(() = >n.scrollTop > n.statusBarHeight + convertRpxToPx(l.value)),
        {
            commonStyle: p,
            titleBarHeight: d
        } = useStatusBar({
            context: t,
            touchend: !1
        }),
        _ = computed(() = >i.hitXinHuiUnLogin ? "点击领现金": i.needQuickLogin ? "登录秒提现": i.needLogin ? "待领红包": "任务中心"),
        y = computed(() = >f.value || i.isHitEarningActivityMix),
        v = computed(() = >({
            pointerEvents: f.value ? "none": "auto"
        })),
        m = computed(() = >({
            opacity: f.value ? 1 : 0,
            pointerEvents: f.value ? "auto": "none"
        })),
        g = computed(() = >isTabContainer ? {
            height: "".concat(d.value, "px")
        }: {}),
        C = computed(() = >i.isHitEarningActivityMix);
        function I() {
            setStatusBarStyle( + y.value),
            isTabContainer && changeTabBarStyle(y.value ? TabStyleType.ENCOURAGE_UP_SLIDE: TabStyleType.DEFAULT)
        }
        function S() {
            var E;
            scrollToTop((E = document.scrollingElement) != null ? E: document.body)
        }
        const w = () = >{
            var D, V, Q, oe;
            const E = n.statusBarHeight,
            P = Math.round((Q = (V = (D = document.querySelector("#dailyTask")) == null ? void 0 : D.getBoundingClientRect()) == null ? void 0 : V.top) != null ? Q: 0),
            L = (oe = document.scrollingElement) != null ? oe: document.documentElement;
            scrollTo(L, {
                direction: "y",
                duration: 800,
                timingFunction: "easeInOutCubic",
                offset: P - E - getDynamicValue(44)
            })
        };
        watch(() = >y.value, () = >{
            I()
        },
        {
            immediate: !0
        }),
        useYodaEvent("native_reentry", I),
        useYodaEvent("native_visible", I);
        async
        function b() {
            if (n.isFirstLevelPage) throw window.location.href = "ksnebula://home/hot",
            new Error("stop");
            return n.execBeforeCloseFns()
        }
        const A = computed(() = >isTabContainer ? 32 : 38);
        return {
            $unit,
            cashDisplay: u,
            cash: o,
            coin: a,
            title: _,
            basicModel: i,
            taskModel: r,
            beforeBack: b,
            barStyle: computed(() = >({...p.value,
                ...v.value
            })),
            fullBarStyle: computed(() = >({...p.value,
                ...m.value
            })),
            isShowBackBtn: computed(() = >!n.isFirstLevelPage || isTabContainer || getCookie("Pendant_Incentive_Return") === "true"),
            gotoProfit: s,
            handleGotoTop: S,
            gotoDailyTask: w,
            GrowthCoinBoostPrivilegeStatus,
            sendClickImmediately,
            isTabContainer,
            balanceHeight: A,
            tabContainerBarStyle: g,
            showMixLogo: C
        }
    }
});
var _sfc_render$2 = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    n("div", {
        staticClass: "status-bar-wrapper",
        class: {
            "no-back-btn": !t.isShowBackBtn,
            "quick-login": t.basicModel.needQuickLogin,
            "xinHui-login": t.basicModel.hitXinHuiUnLogin
        }
    },
    [n("div", {
        staticClass: "status-bar common-status",
        style: t.barStyle
    },
    [n("div", {
        staticClass: "bar-main common-bar",
        class: {
            "tab-container-bar": t.isTabContainer
        },
        style: t.tabContainerBarStyle
    },
    [n("div", {
        staticClass: "common-left",
        style: t.tabContainerBarStyle
    },
    [t.isShowBackBtn ? n("Back", {
        attrs: {
            "before-back": t.beforeBack
        }
    },
    [n("BackIcon", {
        staticClass: "back-icon",
        style: t.tabContainerBarStyle,
        attrs: {
            direction: "left"
        }
    })], 1) : t._e(), t._t("left")], 2), !t.isTabContainer && t.showMixLogo ? n("div", {
        staticClass: "common-title mix-title"
    }) : t.isTabContainer ? t._e() : n("div", {
        staticClass: "common-title"
    },
    [t._v(t._s(t.title))]), t.isTabContainer ? t._e() : n("div", {
        staticClass: "common-right"
    },
    [t.basicModel.coinBoostPrivilegeView && t.basicModel.coinBoostPrivilegeView.status !== t.GrowthCoinBoostPrivilegeStatus.UNKNOWN ? n("CornerEntrance", {
        attrs: {
            data: t.basicModel.coinBoostPrivilegeView
        },
        on: {
            "refresh-basic": t.basicModel.refetchBasicInfo,
            "send-click": t.sendClickImmediately
        }
    }) : t._e()], 1)])]), n("div", {
        staticClass: "common-status status-bar-full",
        class: {
            "tab-container-bar-full": t.isTabContainer
        },
        style: t.fullBarStyle
    },
    [n("div", {
        staticClass: "common-bar bar"
    },
    [n("div", {
        staticClass: "common-left",
        style: t.tabContainerBarStyle
    },
    [t.isShowBackBtn ? n("Back", {
        attrs: {
            "before-back": t.beforeBack
        }
    },
    [n("BackIcon", {
        staticClass: "back-icon",
        style: t.tabContainerBarStyle,
        attrs: {
            direction: "left"
        }
    })], 1) : t._e()], 1), t.basicModel.needLogin && !t.isTabContainer ? n("div", {
        staticClass: "common-title"
    },
    [t._v(" " + t._s(t.title) + " ")]) : n("div", {
        staticClass: "common-title full-title"
    },
    [t.basicModel.showTopAnchorPoint ? n("ProfitFold", {
        attrs: {
            "coin-unit": t.$unit,
            "coin-amount": t.coin.amount,
            "cash-display": t.cashDisplay,
            "cash-amount": t.cash.amount
        },
        on: {
            "goto-profit": t.gotoProfit,
            "goto-top": t.handleGotoTop
        }
    }) : [n("div", {
        staticClass: "balance-item",
        on: {
            click: function(r) {
                return t.gotoProfit("coin")
            }
        }
    },
    [n("span", [t._v(t._s(t.$unit) + ": ")]), n("Balance", t._b({
        attrs: {
            id: "coin-nav-balance",
            height: t.balanceHeight
        }
    },
    "Balance", t.coin, !1))], 1), n("i"), n("div", {
        staticClass: "balance-item",
        on: {
            click: function(r) {
                return t.gotoProfit("cash")
            }
        }
    },
    [n("span", [t._v(t._s(t.cashDisplay) + ": ")]), n("Balance", t._b({
        attrs: {
            id: "cash-nav-balance",
            height: t.balanceHeight
        }
    },
    "Balance", t.cash, !1))], 1)]], 2), n("div", {
        staticClass: "common-right"
    },
    [t.basicModel.showTopAnchorPoint && t.taskModel.dailyTasks.length ? n("DailyTaskEntry", {
        attrs: {
            text: t.taskModel.dailyTaskText
        },
        on: {
            "goto-daily-task": t.gotoDailyTask
        }
    }) : t._e()], 1)])])])
},
_sfc_staticRenderFns$2 = [],
__component__$2 = normalizeComponent(_sfc_main$2, _sfc_render$2, _sfc_staticRenderFns$2, !1, null, "6f68d493", null, null);
const NavBar = __component__$2.exports,
_sfc_main$1 = defineComponent({
    setup() {
        const e = useBasicModel();
        function t() {
            sendClick("EARNING_RULE"),
            openWebview("https://ppg.m.etoote.com/doodle/QNILxtCw.html")
        }
        return {
            gotoRulePage: t,
            basicModel: e
        }
    }
});
var _sfc_render$1 = function e() {
    var t = this,
    n = t._self._c;
    return t._self._setupProxy,
    t.basicModel.needLogin ? t._e() : n("div", {
        directives: [{
            name: "log",
            rawName: "v-log.show",
            value: {
                action: "EARNING_RULE"
            },
            expression: "{\n        action: 'EARNING_RULE',\n    }",
            modifiers: {
                show: !0
            }
        }],
        on: {
            click: t.gotoRulePage
        }
    },
    [t._t("default",
    function() {
        return [t._v("活动规则")]
    })], 2)
},
_sfc_staticRenderFns$1 = [],
__component__$1 = normalizeComponent(_sfc_main$1, _sfc_render$1, _sfc_staticRenderFns$1, !1, null, null, null, null);
const Rule = __component__$1.exports,
MAX_RETRY_TIMES = 3,
useUnionSignCardModel = createUseModel(() = >{
    const e = ref$1(),
    t = ref$1(),
    n = ref$1(""),
    r = ref$1(MAX_RETRY_TIMES),
    o = a = >{
        const {
            onData: i
        } = useFetch({
            url: "/rest/wd/encourage/unionTask/signIn/resource"
        });
        i(s = >{
            var u, l, f, p;
            switch (s == null ? void 0 : s.result) {
            case ResultType.SUCCESS:
                r.value = MAX_RETRY_TIMES,
                e.value = s.data.signInUnionSpecialAreaData,
                t.value = s.data.dailyGift,
                n.value || (n.value = (l = (u = e.value) == null ? void 0 : u.backgroundUrl) != null ? l: "");
                break;
            case ResultType.UN_EXP:
                r.value = MAX_RETRY_TIMES,
                e.value = void 0,
                n.value = "";
                break;
            case ResultType.EXIT:
                r.value = MAX_RETRY_TIMES,
                e.value = (f = s.data) == null ? void 0 : f.signInUnionSpecialAreaData,
                n.value = "",
                nextTick(() = >{
                    var _; (_ = a == null ? void 0 : a.value) == null || _.deleteCalendar()
                });
                break;
            case ResultType.CONCURRENCY_ERROR:
                const {
                    retryIntervalMs:
                    d = 1e3
                } = (p = s.data) != null ? p: {};
                if (d < 0 || r.value <= 1) {
                    r.value = MAX_RETRY_TIMES;
                    return
                }
                setTimeout(() = >{
                    r.value--,
                    o()
                },
                d);
                break
            }
        })
    };
    return reactive({
        getSignCard: o,
        cardBackgroundUrl: n,
        signCardData: e,
        giftCardData: t
    })
});
var TreasureNodeStatusEnum = (e = >(e[e.WAIT_BACK_PAY = 1] = "WAIT_BACK_PAY", e[e.GOT = 2] = "GOT", e[e.WAIT = 3] = "WAIT", e[e.CAN_GET = 4] = "CAN_GET", e[e.BAND = 5] = "BAND", e[e.GETTING = 99] = "GETTING", e))(TreasureNodeStatusEnum || {}),
TreasureBoxStatus = (e = >(e[e.UN_LOGIN = 0] = "UN_LOGIN", e[e.UN_TAKE = 1] = "UN_TAKE", e[e.DOING = 2] = "DOING", e[e.UN_AWARD = 3] = "UN_AWARD", e[e.FINISH = 4] = "FINISH", e))(TreasureBoxStatus || {}),
SidebarPositionAb = (e = >(e[e.DRAG_AND_HISTORY = 0] = "DRAG_AND_HISTORY", e[e.NO_DRAG_NO_HISTORY = 1] = "NO_DRAG_NO_HISTORY", e[e.DRAG_NO_HISTORY = 2] = "DRAG_NO_HISTORY", e))(SidebarPositionAb || {}),
BoxType = (e = >(e[e.UNION_BOX = 0] = "UNION_BOX", e[e.CLOKC_BOX = 1] = "CLOKC_BOX", e))(BoxType || {}),
TreasurePopupType = (e = >(e[e.OPEN = 1] = "OPEN", e[e.FREEZE = 2] = "FREEZE", e[e.FINISH = 3] = "FINISH", e[e.ADDITIONAL = 4] = "ADDITIONAL", e[e.TOAST = 5] = "TOAST", e[e.CLOCK = 6] = "CLOCK", e))(TreasurePopupType || {}),
DispatchType = (e = >(e[e.KWAI_AD = 1] = "KWAI_AD", e[e.NEBULA_AD = 2] = "NEBULA_AD", e[e.DISH = 3] = "DISH", e[e.CASH = 4] = "CASH", e[e.VIDEO = 5] = "VIDEO", e[e.SLEEP = 6] = "SLEEP", e[e.ADDITIONAL = 7] = "ADDITIONAL", e[e.INSPIRE_VIDEO_AHEAD_BOX = 11] = "INSPIRE_VIDEO_AHEAD_BOX", e))(DispatchType || {}),
ButtonType = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.SCHEME = 1] = "SCHEME", e[e.OPEN_WEBVIEW = 2] = "OPEN_WEBVIEW", e[e.AD_VIDEO = 3] = "AD_VIDEO", e[e.AD_LIVE = 4] = "AD_LIVE", e[e.NEW_AD_VIDEO = 7] = "NEW_AD_VIDEO", e[e.NEW_AD_LIVE = 8] = "NEW_AD_LIVE", e[e.AD_VIDEO_OR_LIVE = 101] = "AD_VIDEO_OR_LIVE", e[e.OLD_AWARD_VIDEO = 15] = "OLD_AWARD_VIDEO", e[e.NEW_AWARD_VIDEO = 18] = "NEW_AWARD_VIDEO", e))(ButtonType || {}),
LinkInspireType = (e = >(e[e.UNKNOWN = 0] = "UNKNOWN", e[e.AD_VEDIO = 1] = "AD_VEDIO", e[e.AD_LIVE = 2] = "AD_LIVE", e[e.AD_VIDEO_OR_LIVE = 3] = "AD_VIDEO_OR_LIVE", e))(LinkInspireType || {}),
ProgressBarNodeStyleAndImg = (e = >(e[e.OPENED = 1] = "OPENED", e[e.NORMAL_BOX = 2] = "NORMAL_BOX", e[e.BIG_BOX = 3] = "BIG_BOX", e[e.MULTI_BOX = 6] = "MULTI_BOX", e[e.TOMORROW_NORMAL_BOX = 4] = "TOMORROW_NORMAL_BOX", e[e.TOMORROW_BIG_BOX = 5] = "TOMORROW_BIG_BOX", e[e.TOMORROW_MULTI_BOX = 7] = "TOMORROW_MULTI_BOX", e))(ProgressBarNodeStyleAndImg || {});
const useCloseBizTreasurePopup = () = >{
    const e = useTaskModel(),
    t = useBasicModel(),
    n = usePopupModel(),
    r = useRefreshModel(),
    o = useUnionSignCardModel();
    return (a, i, s) = >{
        var f, p;
        a && sendClickImmediately(a, i),
        t.refetchBasicInfo(),
        e.refetchTask(),
        r.handleRefresh({
            force: !0
        }),
        n.closePopup(PopupType.UNION_TREASURE_POPUP);
        const u = TreasurePopupType.OPEN === (s == null ? void 0 : s.type);
        if ((TreasurePopupType.CLOCK === (s == null ? void 0 : s.type) && !!((f = s.clockBoxReportDialog) != null && f.rewardPopup) || u) && e.showEncourageWidgetGuidePopup(!0), (p = o.signCardData) != null && p.turntableCard) {
            o.getSignCard();
            return
        }
    }
},
useBeforeCloseTreasurePopup = () = >{
    const e = useBasicModel();
    return t = >{
        t && (e.stopCreateDefer = !0)
    }
};
function isCachedWebview() {
    return window.location.search.includes("earning_webview_cache=true")
}
const[providePendantAPI, injectPendantAPI] = createInjectionState(e = >e);
function usePendantManager() {
    const e = [];
    function t(n) {
        if (!n) return;
        const r = e.indexOf(n);
        r >= 0 && e.splice(r, 1)
    }
    return providePendantAPI({
        register: n = >{
            const r = getCurrentInstance(),
            o = n != null ? n: () = >r == null ? void 0 : r.proxy.$el.getBoundingClientRect();
            return e.push(o),
            onBeforeUnmount(() = >{
                t(o)
            }),
            {
                checkOverlap: () = >{
                    const a = o();
                    return a ? e.some(i = >{
                        if (i === o) return ! 1;
                        const s = i();
                        if (!s) return ! 1;
                        const u = a.right >= s.left && a.left <= s.right,
                        l = a.bottom >= s.top && a.top <= s.bottom;
                        return u && l
                    }) : !1
                }
            }
        },
        unregister: t
    }),
    onBeforeUnmount(() = >{
        e.length = 0
    }),
    {}
}
const _sfc_main = defineComponent({
    __name: "App",
    setup(e) {
        const t = "24SUMMER_MAIN_VENUE_WEBLOGGER",
        n = "24SUMMER_MAIN_VENUE_RADAR";
        provide(t, webLoggerV2),
        provide(n, radar);
        const r = getUrlSearchParams();
        if (r.redirectTo != null) {
            const N = decodeURIComponent(decodeURIComponent(r.redirectTo));
            delete r.redirectTo,
            openWebview(appendSearchParamsToUrl(N, r))
        }
        const o = useInitModel(),
        a = useBasicModel(),
        i = useTaskModel(),
        s = usePopupModel(),
        u = useCommonModel(),
        l = useTreasureBoxModel(),
        f = useRefreshModel(),
        p = useProfitEnhanceModel(),
        d = ref$1(!1),
        _ = defineAsyncComponent({
            loader: () = >__vitePreload(() = >import("./TaskCard-DFe4mHT8.js"), __vite__mapDeps([45, 3, 46, 47, 24, 48, 49, 50, 51, 22, 23, 6, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 27, 28, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67]), import.meta.url),
            onError: () = >{
                d.value = !0
            }
        }),
        y = defineAsyncComponent({
            loader: () = >__vitePreload(() = >import("./ProfitEnhance-Iyw2fWty.js"), __vite__mapDeps([68, 3, 69]), import.meta.url),
            onError: () = >{
                p.loadFail = !0
            }
        }),
        v = defineAsyncComponent(() = >__vitePreload(() = >import("./index-DCdMs4MK.js"), __vite__mapDeps([70, 71, 3, 72]), import.meta.url)),
        m = defineAsyncComponent(() = >__vitePreload(() = >import("./CoreTask-BTbszvvU.js"), __vite__mapDeps([73, 3, 74, 6, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 75, 76, 77, 78, 79]), import.meta.url)),
        g = defineAsyncComponent(() = >__vitePreload(() = >import("./LifeArea-BHanilvK.js"), __vite__mapDeps([80, 3, 48, 49, 74, 6, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 81]), import.meta.url)),
        C = defineAsyncComponent(() = >__vitePreload(() = >import("./ActivityBanner-DZnohrGG.js"), __vite__mapDeps([82, 3, 77, 78, 83]), import.meta.url)),
        I = defineAsyncComponent(() = >__vitePreload(() = >import("./TaskList-CDHX6d38.js"), __vite__mapDeps([84, 3, 85, 77, 78, 29, 74, 6, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 53, 54, 55, 56, 86, 87, 88, 43, 63, 64, 65, 66, 89, 90]), import.meta.url)),
        S = defineAsyncComponent(() = >__vitePreload(() = >import("./CoinCreditWrap-C5mdJU4Q.js"), __vite__mapDeps([91, 3, 92, 93, 94, 46, 47, 24, 95, 7, 8, 35, 96]), import.meta.url)),
        w = defineAsyncComponent(() = >__vitePreload(() = >import("./Popup-BOR8v-hV.js"), __vite__mapDeps([97, 3, 98, 86, 99, 10, 11, 12, 13, 14, 43, 22, 23, 25, 38, 24, 100, 61, 26, 62, 15, 16, 52, 48, 49, 101, 102, 103, 93, 95, 7, 8, 6, 2, 9, 17, 18, 19, 20, 21, 27, 28, 54, 55, 57, 58, 53, 56, 59, 60, 104, 105, 106, 107, 108, 109, 110, 111, 112, 87, 88, 29, 74, 113]), import.meta.url)),
        b = defineAsyncComponent(() = >__vitePreload(() = >import("./index-BP945x1f.js"), __vite__mapDeps([114, 3, 29, 115]), import.meta.url)),
        A = defineAsyncComponent(() = >__vitePreload(() = >import("./SettingNotify-Bvv4ahWB.js"), __vite__mapDeps([116, 3, 52, 117]), import.meta.url)),
        E = defineAsyncComponent(() = >__vitePreload(() = >import("./treasureBox-C3DmaDA0.js"), __vite__mapDeps([118, 3, 119, 120, 28, 6, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]), import.meta.url)),
        P = defineAsyncComponent(() = >__vitePreload(() = >import("./UnLogin-Du1IP2W4.js").then(N = >N.U), __vite__mapDeps([121, 3, 119, 120, 28, 6, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 122]), import.meta.url)),
        L = defineAsyncComponent(() = >__vitePreload(() = >import("./OldEntrance-CtBmpnno.js"), __vite__mapDeps([123, 3, 48, 49, 20, 21, 124]), import.meta.url)),
        D = defineAsyncComponent(() = >__vitePreload(() = >import("./MaskGuide-DHBEpQsS.js"), __vite__mapDeps([125, 3, 64, 65, 126]), import.meta.url)),
        V = defineAsyncComponent({
            loader: () = >__vitePreload(() = >import("./index-BkkYRoho.js"), __vite__mapDeps([127, 3, 104, 10, 11, 12, 13, 14, 105, 106, 107, 7, 8, 108, 109, 110, 9, 15, 16, 17, 18, 19, 128, 129, 22, 23, 130]), import.meta.url)
        }),
        Q = ref$1(!1),
        oe = getDynamicValue(390);
        provideVisibility(),
        useProvideSendLog(sendShow, sendClick, sendClickImmediately),
        useDynamicLoadThemeStyle("NEBULA", computed(() = >a.skin === "spring")),
        usePendantManager();
        function te(N) {
            sendPV("NEW_TASK_CENTER", {},
            PVType.ENTER, {},
            !0),
            sendPV(window.location.origin + window.location.pathname, {},
            PVType.ENTER, {},
            !1, !0),
            sendPerfLog("EARNING_PERFORMANCE_PAGE", N)
        }
        function ne() {
            entryTime.value = Date.now(),
            isCached.value = !0,
            te(),
            sendPerfLog("EARNING_PERFORMANCE_PROFIT"),
            sendPerfLog("EARNING_PERFORMANCE_FIRST_PAGE")
        }
        async
        function B() {
            ne(),
            clearEventTracking(),
            f.isCurrentTab = !0,
            i.setVideoAwardStatus();
            const N = a.needLogin;
            await f.reload(RefreshType.TASK_SELECT),
            !o.isError && N === a.needLogin && resetShowLog()
        }
        async
        function T() {
            B()
        }
        function O() {
            f.resetRefresh(),
            f.isCurrentTab = !1,
            f.canClickTabRefresh = !1,
            s.closeAllMask()
        }
        function R() {
            var N;
            f.canClickTabRefresh && (s.closeAllMask(), scrollToTop((N = document.scrollingElement) != null ? N: document.body, 0), f.refresh())
        }
        function $() {
            i.dailyTasks.find(H = >H.id === TaskId.WIDGET_TASK && H.extParam.status === 1) && (f.needRefresh = !0)
        }
        function M() {
            var H, k, x;
            clearEventTracking(),
            f.needRefreshWidget && (refreshEncourageWidget(), f.needRefreshWidget = !1);
            const N = !isIOS$1() && ((x = (k = (H = s == null ? void 0 : s.popups) == null ? void 0 : H[PopupType.UNION_SIGNIN_POPUP]) == null ? void 0 : k.button) == null ? void 0 : x.linkType) === SignInButtonType.PUSH_INVOKE_BRIDGE; (f.needRefresh || N || isTabContainer) && (f.refresh(RefreshType.REENTRY), f.resetRefresh())
        }
        function W() {
            Q.value = !f.pageRef,
            f.needRefresh = !1
        }
        function Z() {
            isCachedWebview() && sendPV("NEW_TASK_CENTER", {},
            PVType.VISIBLE, {},
            !0),
            clearEventTracking(),
            $(),
            !(!Q.value || !f.isCurrentTab) && f.refresh(RefreshType.FOREGROUND)
        }
        function F() {
            f.pageRef = PageRef.ONLY_BASICINFO,
            f.handleRefresh({
                force: !0
            })
        }
        const U = () = >{
            f.handleRefresh({
                force: !0
            }),
            openWebview("/nebula/setting?layoutType=4")
        };
        function re({
            type: N,
            banner: H,
            index: k
        }) {
            const x = transformEventTrackingLogInfo(H.eventTrackingLogInfo);
            return getBannerLog({
                banner: H,
                type: N,
                params: {
                    banner_name: H.desc,
                    banner_id: H.id,
                    index: k + 1,
                    ...x
                },
                clientIp: a.clientIp
            })
        }
        async
        function _e({
            banner: N
        }) {
            const {
                linkType: H,
                linkUrl: k,
                extParam: x
            } = N || {};
            k && (recordEventTracking(N.eventTrackingLogInfo), f.handleRefresh({
                extParam: x
            }), i.reportResourceClick({
                resourceId: N.id,
                resourceType: 1
            }), openLinkUrl(H, k, {
                eventTrackingLogInfo: N.eventTrackingLogInfo
            }))
        }
        function de(N = {}) {
            N.result === 1 && (f.refresh(), N != null && N.toast ? s.waitProfitEnhanceToastQueue.push(() = >{
                showToast(N.toast)
            }) : N != null && N.coin && s.waitProfitEnhanceToastQueue.push(() = >{
                showToast("已获得".concat(N.coin).concat($unit))
            })),
            refreshEncourageWidget()
        }
        if (useYodaEvent("native_foreground", Z), useYodaEvent("native_background", W), useYodaEvent("native_reentry", M), useLegacyYodaEvent("native_task_select", T), useLegacyYodaEvent("native_task_unselect", O), useLegacyYodaEvent("native_task_clickrefresh", R), useLegacyYodaEvent("h5_ad_video_task", de), useYodaEvent("h5_earning_refresh_when_reentry", () = >{
            f.handleRefresh({
                force: !0
            })
        }), isCachedWebview()) {
            let N = !0;
            useYodaEvent("earning_reshow", ({
                url: H
            }) = >{
                window.history.replaceState({},
                "", H),
                N || B()
            }),
            useYodaEvent("native_visible", H = >{
                H.visible || (O(), N = !1)
            })
        }
        function ve(N = !0) {
            a.needLogin && (N && sendClick("LOGIN_BUTTON"), useYodaLogin({
                source: 3
            }).then(() = >{
                sendTask("BOTTOM_EARNING_LOG_IN_SUCCESS", {
                    is_bottom_judge: u.isFromBottomGuide ? "TRUE": "FALSE"
                },
                {
                    type: "BACKGROUND_TASK_EVENT"
                }),
                f.reload()
            }).
            catch(() = >{
                showToast("登录失败")
            }))
        }
        watch(() = >a.needLogin, () = >{
            updateUrlPageParams({
                params: {
                    is_login: !a.needLogin
                }
            })
        },
        {
            immediate: !0
        });
        const pe = ref$1();
        onMounted(async() = >{
            ksLog.sendPV(),
            te(),
            nextTick(() = >{
                f.initUserId(),
                f.getInitPromise(!0).then(() = >{
                    f.reloadCallback()
                }),
                u.urlSearchParams.not_dish === "1" && showToast("饭补任务暂时未对全量用户开放")
            }),
            await handleBusinessPush(() = >!!a.data, a.refetchBasicInfo),
            pe.value = (await __vitePreload(() = >import("./popup-Wl898eWl.js").then(N = >N.p), __vite__mapDeps([6, 3, 7, 8, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]), import.meta.url)).bizTreasureBoxRef,
            useLegacyYoda("kwai.setBounceStyle", {
                enable: !1
            }),
            useLegacyYoda("im.setEnableIMTip", {
                enabled: !0
            }),
            u.isFirstLevelPage || useYoda("kwai.setPhysicalBackButton", {
                onClick: async() = >{
                    try {
                        await u.execBeforeCloseFns(),
                        pageBack()
                    } catch(N) {}
                }
            }).
            catch(() = >{}),
            sendDimensions("".concat(a.summerVacationActivity2024), "c_dimension3")
        }),
        until(() = >o.taskGroupLoaded).toBeTruthy().then(() = >{
            sendPerfLog("EARNING_PERFORMANCE_FIRST_PAGE")
        });
        const he = async N = >{
            a.needLogin && (N.stopPropagation(), (await useLegacyYoda("social.login")).result === 1 && window.location.reload())
        },
        ye = computed(() = >i.isLoading && !i.hasLoaded || !o.isLoaded || !o.taskGroupLoaded),
        le = useCloseBizTreasurePopup(),
        K = useBeforeCloseTreasurePopup(),
        ee = computed(() = >i.coreTasks.length > 0 && i.coreTasksDisplayType != null && i.coreTasksDisplayType !== ResourceDisplayStyle.KING_KONG),
        J = computed(() = >i.coreTasks.length > 0 && !ee.value),
        se = ref$1(!0);
        function me(N) {
            se.value = N
        }
        const ge = ref$1(!1);
        function X(N) {
            ge.value = N
        }
        return {
            __sfc: !0,
            WEBLOGGER_PROVIDE_NAME: t,
            RADAR_PROVIDE_NAME: n,
            query: r,
            initModel: o,
            basicModel: a,
            taskModel: i,
            popupModel: s,
            commonModel: u,
            treasureBoxModel: l,
            refreshModel: f,
            profitEnhanceModel: p,
            moduleSettled: d,
            TaskCard: _,
            ProfitEnhance: y,
            ErrorPage: v,
            CoreTask: m,
            LifeArea: g,
            ActivityBanner: C,
            TaskList: I,
            CoinCreditWrap: S,
            Popups: w,
            TreasureBox: b,
            SettingNotify: A,
            BizTreasureBox: E,
            UnLogin: P,
            LevelEntrance: L,
            NewBackGuide: D,
            EarningActivityMix: V,
            canRefreshWhenForeground: Q,
            bannerWidth: oe,
            pv: te,
            pvCached: ne,
            cachedEarningReshow: B,
            selectTaskTab: T,
            unSelectTaskTab: O,
            clickTaskTabRefresh: R,
            setWidgetTaskRefreshWhenReentry: $,
            reentry: M,
            background: W,
            foreground: Z,
            goLevelEntrance: F,
            goToSetting: U,
            _getBannerLog: re,
            clickBanner: _e,
            adTaskHandler: de,
            login: ve,
            bizTreasureBoxRef: pe,
            handleLogin: he,
            isShowHalfLoading: ye,
            closeBizTreasurePopup: le,
            beforeCloseBizTreasurePopup: K,
            showLifeArea: ee,
            showKingKong: J,
            isMixFold: se,
            setFold: me,
            showOnlinePopup: ge,
            setShowOnlinePopup: X,
            SFTransition,
            sendShow,
            sendClickImmediately,
            isAndroidLowVersion,
            LoadingPage,
            ArrowIcon,
            Header,
            NavBar,
            Rule
        }
    }
});
var _sfc_render = function e() {
    var o;
    var t = this,
    n = t._self._c,
    r = t._self._setupProxy;
    return n("div", [r.initModel.isShowLoading ? n(r.LoadingPage, {
        staticClass: "page-loading"
    }) : t._e(), r.basicModel.hitXinHuiUnLogin ? n(r.UnLogin) : [r.initModel.isLoaded ? r.initModel.isError ? n(r.ErrorPage, {
        attrs: {
            "error-code": r.initModel.errorCode
        }
    }) : t._e() : n("div", {
        staticClass: "page-empty"
    }), r.initModel.isShowContent ? n("div", {
        staticClass: "earning earning-even revision relative",
        class: { [r.basicModel.skin] : !0,
            "no-login": r.basicModel.needLogin,
            "low-version": r.isAndroidLowVersion(),
            "earning-mix": r.basicModel.isHitEarningActivityMix
        }
    },
    [n("div", {
        staticClass: "not-fold w-full absolute"
    }), n(r.SFTransition, {
        attrs: {
            name: "fade",
            duration: {
                enter: 200,
                leave: 200
            }
        }
    },
    [r.isMixFold ? n("div", {
        staticClass: "fold w-full absolute"
    }) : t._e()]), r.basicModel.needLoginMask ? n("div", {
        staticClass: "login-mask",
        on: {
            click: function(a) {
                return r.login(!0)
            }
        }
    }) : t._e(), !r.commonModel.isFromXtab && !r.commonModel.isFromToptab ? n(r.NavBar, {
        on: {
            "update-bar-height": r.commonModel.updateStatusBarHeight,
            scroll: r.commonModel.updateScrollTop,
            fold: r.commonModel.updateFold
        }
    }) : t._e(), n("div", {
        class: [r.basicModel.isHitEarningActivityMix && "relative z-2", r.basicModel.ugLevelInfo != null && "header-and-level"]
    },
    [n(r.Header, {
        staticClass: "header"
    }), r.basicModel.ugLevelInfo && !r.basicModel.isHitEarningActivityMix ? n(r.LevelEntrance, {
        staticClass: "earning-level-entrance",
        attrs: {
            data: r.basicModel.ugLevelInfo
        },
        on: {
            "open-page": r.goLevelEntrance
        }
    }) : t._e()], 1), r.basicModel.isHitEarningActivityMix ? n(r.EarningActivityMix, {
        attrs: {
            "force-hold": r.basicModel.isEarningActivityFold,
            "no-mask": r.popupModel.noMask
        },
        on: {
            "set-fold": r.setFold,
            "show-online-popup": r.setShowOnlinePopup
        }
    }) : t._e(), n("div", {
        class: [r.basicModel.isHitEarningActivityMix && "relative z-1 bg-#f7f7f7 w-full min-h-400px", r.showOnlinePopup && "overflow-hidden"],
        on: {
            click: function(a) {
                return a.stopPropagation(),
                r.handleLogin(a)
            }
        }
    },
    [n("div", {
        class: {
            "prevent-click": r.basicModel.needLogin
        }
    },
    [r.isShowHalfLoading ? n(r.LoadingPage, {
        staticClass: "half-loading"
    }) : t._e(), n("div", {
        class: [r.isShowHalfLoading ? "invisible": "visible"]
    },
    [r.showLifeArea ? n(r.LifeArea, {
        on: {
            refresh: r.refreshModel.refresh
        }
    }) : t._e(), n(r.TaskCard, {
        attrs: {
            "real-show": !r.isShowHalfLoading
        },
        on: {
            loaded: function(a) {
                r.initModel.taskCardLoaded = !0
            },
            "module-settled": function(a) {
                r.moduleSettled = !0
            }
        }
    }), r.basicModel.ugLevelInfo && r.basicModel.isHitEarningActivityMix ? n(r.LevelEntrance, {
        staticClass: "mt-12px!",
        attrs: {
            data: r.basicModel.ugLevelInfo
        },
        on: {
            "open-page": r.goLevelEntrance
        }
    }) : t._e(), r.showKingKong ? n(r.CoreTask, {
        on: {
            refresh: r.refreshModel.refresh
        }
    }) : t._e(), r.taskModel.banners.length ? n(r.ActivityBanner, {
        staticClass: "earning-banner",
        attrs: {
            banners: r.taskModel.banners,
            "get-log": r._getBannerLog,
            options: {
                width: r.bannerWidth
            }
        },
        on: {
            click: r.clickBanner
        }
    }) : t._e(), n(r.TaskList, {
        attrs: {
            "module-settled": r.moduleSettled
        },
        on: {
            refresh: r.refreshModel.refresh,
            loaded: function(a) {
                r.initModel.taskListLoaded = !0
            }
        },
        nativeOn: {
            click: function(a) {
                return r.login(!1)
            }
        }
    }), (o = r.basicModel.data) != null && o.hideWaterFall ? t._e() : n(r.CoinCreditWrap)], 1)], 1), n("div", {
        staticClass: "earning-footer"
    },
    [r.isShowHalfLoading ? t._e() : n(r.Rule, {
        staticClass: "earning-rules-tip"
    },
    [t._v(" 查看活动规则 "), n(r.ArrowIcon, {
        staticClass: "arraw-icon"
    })], 1), n(r.BizTreasureBox, {
        ref: "bizTreasureBoxRef",
        attrs: {
            "log-action": "TREASURE_PENDANT_BUTTON"
        },
        on: {
            "before-popup-close": r.beforeCloseBizTreasurePopup,
            "after-popup-close": r.closeBizTreasurePopup,
            "send-show": r.sendShow,
            "send-click": r.sendClickImmediately
        }
    },
    [r.treasureBoxModel.isShowTreasureBox ? n(r.TreasureBox, {
        nativeOn: {
            click: function(a) {
                return r.login(!0)
            }
        }
    }) : t._e(), t._v(" " + t._s(r.bizTreasureBoxRef && "") + " ")], 1)], 1)])], 1) : t._e(), n(r.Popups, {
        on: {
            refresh: r.refreshModel.refresh,
            reload: r.refreshModel.reload
        }
    }), r.basicModel.hasNoviceGuide ? n(r.NewBackGuide) : t._e(), r.profitEnhanceModel.showSettingNotify ? n(r.SettingNotify, {
        on: {
            "go-setting": r.goToSetting
        }
    }) : t._e()], r.moduleSettled ? [r.profitEnhanceModel.showProfitEnhance && r.profitEnhanceModel.enhanceType ? n(r.ProfitEnhance, {
        attrs: {
            "coin-target-id": r.profitEnhanceModel.coinTargetId,
            "cash-target-id": r.profitEnhanceModel.cashTargetId,
            "fly-to-nav": r.commonModel.fold,
            type: r.profitEnhanceModel.enhanceType,
            vibrate: r.profitEnhanceModel.enableShake
        },
        on: {
            "fly-start": () = >{
                var a; (a = r.basicModel.deferToIncrease) == null || a.resolve()
            },
            "animation-end": () = >{
                r.profitEnhanceModel.showProfitEnhance = !1,
                r.popupModel.clearWaitToastQueue()
            },
            error: () = >{
                r.profitEnhanceModel.enhanceError(),
                r.popupModel.clearWaitToastQueue()
            }
        }
    }) : t._e()] : t._e()], 2)
},
_sfc_staticRenderFns = [],
__component__ = normalizeComponent(_sfc_main, _sfc_render, _sfc_staticRenderFns, !1, null, "e94b007c", null, null);
const App = __component__.exports;
export {
    $cashDisplay as $,
    sendClick as A,
    Button as B,
    openWebview as C,
    createModel as D,
    useRestMutation as E,
    createUseModel as F,
    useModel as G,
    useFetch as H,
    useRouterBack as I,
    useCoinExchangeInfo as J,
    flush as K,
    payHost as L,
    getShareDirectActionUrl as M,
    addListener$1 as N,
    OPTIMIZE_WITHDRAW_TOAST_TEXT as O,
    removeListener$1 as P,
    customConfirm as Q,
    sendTask as R,
    sendClickImmediately as S,
    TOAST_TEXT as T,
    sendShow as U,
    $unit as V,
    throttle$1 as W,
    useCoinExchangeClick as X,
    ScrollNum as Y,
    getDynamicValue as Z,
    _Symbol as _,
    transformMsToString as a,
    eventTrackingAction as a$,
    useCoinSound as a0,
    matchJoyBean as a1,
    useProvideSendLog as a2,
    useYodaEvent as a3,
    until as a4,
    sendEvent as a5,
    LoadingPage as a6,
    fmpEventHandler as a7,
    getAugmentedNamespace as a8,
    useRestQuery as a9,
    useDomListener as aA,
    throttle$2 as aB,
    useThrottleFn as aC,
    yodaCanIUse$2 as aD,
    createStore as aE,
    createClient as aF,
    appendSig3ToUrl as aG,
    isInKwai$1 as aH,
    useCoinExchangeModel as aI,
    ExchangeCoinState as aJ,
    ExchangeText as aK,
    SFTransition as aL,
    px2rem as aM,
    actionReport as aN,
    ActionType as aO,
    addYodaListener as aP,
    getUserId as aQ,
    updateUrlPageParams as aR,
    getCurrentDomain as aS,
    useBarInfo as aT,
    isLoadingState as aU,
    isErrorState as aV,
    core as aW,
    get as aX,
    isObject$4 as aY,
    isEmptyObject as aZ,
    getEventTrackingFromAwardInfo as a_,
    infoToCommonResponse as aa,
    $translate as ab,
    pageBack as ac,
    $cashUnit as ad,
    sendPV as ae,
    hideHomeLoading as af,
    setPageTitle as ag,
    setStatusBarStyle as ah,
    formatDate as ai,
    Back as aj,
    useStatusBar as ak,
    __vitePreload as al,
    ksLog as am,
    patchFetchForSig3 as an,
    logDirective as ao,
    guideDirective as ap,
    isDevOrTest as aq,
    createApp as ar,
    isVue2 as as,
    hasInjectionContext as at,
    App as au,
    entryTime as av,
    getStatusBarHeight as aw,
    isAndroidLowVersion as ax,
    isInAndroidWeChat as ay,
    useInterval as az,
    useRoute$1 as b,
    RefreshType as b$,
    clearEventTracking as b0,
    getSig3Info as b1,
    deleteSig3Info as b2,
    showYodaToast as b3,
    identity$1 as b4,
    useLocalStorage as b5,
    getAppInstalledResult as b6,
    getKpf as b7,
    watchOnce as b8,
    transViewValue as b9,
    usePopupModel as bA,
    FlyAnimationType as bB,
    FairyItemType as bC,
    isSystemMuted as bD,
    CoinIcon as bE,
    CashIcon as bF,
    openLinkUrl as bG,
    LinkType as bH,
    BubbleText as bI,
    CornerType as bJ,
    PopupType as bK,
    toNumber_1 as bL,
    KingKongShowType as bM,
    TaskType as bN,
    useEventListener$1 as bO,
    sleep as bP,
    createInjectionState as bQ,
    useDebounceFn as bR,
    preload as bS,
    useBeep as bT,
    DOWN_GRADE as bU,
    RewardType as bV,
    ResultType as bW,
    launchOrDownloadApp as bX,
    EncourageWidgetPopupType as bY,
    add2Plus2QuickEncourageWidget as bZ,
    useCommonModel as b_,
    _root as ba,
    isObject_1 as bb,
    _baseGetTag as bc,
    isObjectLike_1 as bd,
    _freeGlobal as be,
    openWebview$1 as bf,
    useTimeoutFn as bg,
    useIntervalFn as bh,
    provideVisibility as bi,
    transformEventTrackingLogInfo as bj,
    recordEventTracking as bk,
    taskGuideQueue as bl,
    GuideHand as bm,
    TurntableStageStatus as bn,
    TurntableIconType as bo,
    AwardCardStyle as bp,
    useUnionSignCardModel as bq,
    useLegacyYodaEvent as br,
    SignInButtonType as bs,
    addEventTrackingToUrl as bt,
    openADVideoOrLive as bu,
    useIntersectionObservable as bv,
    openLinkUrl$1 as bw,
    useBasicModel as bx,
    useTaskModel as by,
    useRefreshModel as bz,
    couponParamNameMap as c,
    isInWebview as c$,
    goInvite as c0,
    PopupButtonShowType as c1,
    convertRpxToPx as c2,
    useTreasureBoxModel as c3,
    useBeforeCloseTreasurePopup as c4,
    padding as c5,
    startFansLivePlay as c6,
    useCloseBizTreasurePopup as c7,
    TreasurePopupType as c8,
    InfinityLoading as c9,
    ButtonType as cA,
    useStorage as cB,
    ProgressBarNodeStyleAndImg as cC,
    useTaskItemModel as cD,
    getWidgetStatus as cE,
    widgetTypeOf2Plus2 as cF,
    isHitFrequency as cG,
    resetFrequency as cH,
    TaskId as cI,
    reportShareCollect as cJ,
    yodaCanIUse as cK,
    hasInstalledApp as cL,
    checkOpen as cM,
    addCalendarEventAndReport as cN,
    replaceHtmlTag as cO,
    CountDownRefreshType as cP,
    Platform as cQ,
    EProgressType as cR,
    CALENDAR_STORAGE_KEY as cS,
    searchCalendarEvent as cT,
    addCalendarEvent as cU,
    deleteCalendarEvent as cV,
    getCookie as cW,
    useFissionModel as cX,
    copyToken as cY,
    compareVersion as cZ,
    useEventBus as c_,
    contains as ca,
    scrollTo as cb,
    useProfitData as cc,
    TreasureStatus as cd,
    isAtFourTab as ce,
    isInImmersiveTab as cf,
    maxViewWidth as cg,
    useInitTabContainerWatch as ch,
    unbindObserver as ci,
    retryLoadImage as cj,
    bindObserver as ck,
    injectVisibility as cl,
    isNotNil as cm,
    getEncodedTrackInfo as cn,
    LinkType$1 as co,
    isInNebula as cp,
    refreshEncourageWidget as cq,
    useProgress as cr,
    SidebarPositionAb as cs,
    TreasureBoxStatus as ct,
    TreasureNodeStatusEnum as cu,
    useDocumentVisibility as cv,
    tryOnScopeDispose as cw,
    useNow as cx,
    DispatchType as cy,
    LinkInspireType as cz,
    appendSearchParamsToUrl as d,
    IS_LOW_DEVICE as d0,
    CRASH_FALLOVER as d1,
    injectPendantAPI as d2,
    BoxType as d3,
    useLogin as d4,
    iconMap as d5,
    KwaiIcon as d6,
    kpnMap as d7,
    DefaultUser as d8,
    createGlobalState as d9,
    NavBar as da,
    useInitTabContainerMount as db,
    isInIOS as dc,
    InfinityLoading$1 as dd,
    GrowthCoinBoostPrivilegeStatus as de,
    GrowthCoinBoostPrivilegeBtnStatus as df,
    GrowthCoinBoostPrivilegeBtnStyle as dg,
    GrowthCoinBoostPrivilegeBtnActionType as dh,
    TaskStatus as di,
    yoda$1 as dj,
    debounce$2 as e,
    useIntersectionObserver as f,
    getUrlSearchParams as g,
    isBridgeError as h,
    invoke as i,
    commonjsGlobal as j,
    getDefaultExportFromCjs as k,
    useYoda as l,
    isSymbol_1 as m,
    normalizeComponent as n,
    isInNebula$1 as o,
    api as p,
    compareVersion$2 as q,
    showToast as r,
    scrollToTop as s,
    toast as t,
    useSendLog as u,
    version as v,
    whenever as w,
    useLegacyYoda as x,
    sendKsLogMonitor as y,
    isIOS$1 as z
};
//# sourceMappingURL=main-S-TJqvH4.js.map
