var qe = Object.defineProperty;
var ws = Object.getOwnPropertyDescriptor;
var bs = (i, t, e) =>
  t in i
    ? qe(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (i[t] = e);
var l = (i, t) => () => (i && (t = i((i = 0))), t);
var fe = (i, t) => {
  for (var e in t) qe(i, e, { get: t[e], enumerable: !0 });
};
var h = (i, t, e, r) => {
  for (
    var s = r > 1 ? void 0 : r ? ws(t, e) : t, o = i.length - 1, n;
    o >= 0;
    o--
  )
    (n = i[o]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && qe(t, e, s), s;
};
var Ne = (i, t, e) => (bs(i, typeof t != "symbol" ? t + "" : t, e), e);
var Xt,
  $e = l(() => {
    "use strict";
    Xt = class {
      static get uA() {
        return navigator.userAgent.toLowerCase();
      }
      static get pf() {
        return (
          window.navigator?.userAgentData?.platform || window.navigator.platform
        ).toLowerCase();
      }
      static get safari() {
        return /^((?!chrome|android).)*safari/.test(this.uA);
      }
      static get safariVersion() {
        return +(this.uA.match(/version\/[\d.]+.*safari/) || ["-1"])[0]
          .replace(/^version\//, "")
          .replace(/ safari$/, "");
      }
      static get firefox() {
        return this.uA.indexOf("firefox") > -1;
      }
      static get chrome() {
        return /chrome/.test(this.uA);
      }
      static get ie() {
        return /msie|trident/.test(this.uA);
      }
      static get ieMobile() {
        return /iemobile/.test(this.uA);
      }
      static get webkit() {
        return /webkit/.test(this.uA);
      }
      static get operaMini() {
        return /opera mini/.test(this.uA);
      }
      static get edge() {
        return /edge\/\d./.test(this.uA);
      }
      static get ios() {
        return /ip(hone|[ao]d)/.test(this.uA);
      }
      static get mac() {
        return this.pf.indexOf("mac") > -1;
      }
      static get windows() {
        return this.pf.indexOf("win") > -1;
      }
      static get android() {
        return /android/.test(this.uA);
      }
      static get androidMobile() {
        return /android.*mobile/.test(this.uA);
      }
      static get blackberry() {
        return /blackberry/.test(this.uA);
      }
      static get mobile() {
        return (
          this.ieMobile ||
          this.blackberry ||
          this.androidMobile ||
          this.ios ||
          this.operaMini
        );
      }
      static get mouseWheelEvent() {
        return "onmousewheel" in document;
      }
      static get wheelEvent() {
        return "onwheel" in document;
      }
      static get keydownEvent() {
        return "onkeydown" in document;
      }
      static get touchDevice() {
        return "ontouchstart" in window;
      }
      static get mutationObserver() {
        return "MutationObserver" in window;
      }
      static get resizeObserver() {
        return "ResizeObserver" in window;
      }
      static get intersectionObserver() {
        return "IntersectionObserver" in window;
      }
      static get client() {
        return typeof window < "u" && typeof window.document < "u";
      }
    };
  });
function z(i, t, e, r, s) {
  return r + ((s - r) / (e - t)) * (i - t);
}
function Pt(i, t, e) {
  return Math.min(Math.max(i, t), e);
}
function nt(i, t, e) {
  return i * (1 - e) + t * e;
}
function Ge(i, t, e, r) {
  return nt(i, t, 1 - Math.exp(-e * r));
}
function Wi(i, t, e, r = !1) {
  return r
    ? i >= Math.min(t, e) && i <= Math.max(t, e)
    : i > Math.min(t, e) && i < Math.max(t, e);
}
function Be(i, t = 0) {
  return parseFloat(i.toFixed(t));
}
function We(i, t) {
  return ((i % t) + t) % t;
}
var Ze = l(() => {
  "use strict";
});
var Zi = l(() => {
  "use strict";
});
var Ke,
  _s,
  Es,
  Qe,
  Je = l(() => {
    "use strict";
    (Ke = (i) => typeof i == "number"),
      (_s = (i) => Array.isArray(i)),
      (Es = (i) => i instanceof Element),
      (Qe = (i) => i && typeof i == "object" && !_s(i) && !Es(i));
  });
var Ki = l(() => {
  "use strict";
  Je();
});
function at(i, t) {
  return (t || document).querySelector(i);
}
function At(i, t) {
  return (t || document).querySelectorAll(i);
}
var Qi = l(() => {
  "use strict";
});
var Ji = l(() => {
  "use strict";
});
var tr = l(() => {
  "use strict";
  Ze();
});
var tt,
  er = l(() => {
    "use strict";
    tt = class {
      constructor() {
        (this._completed = !1),
          (this.promise = new Promise((t, e) => {
            (this._resolve = t), (this._reject = e);
          }));
      }
      resolve(t) {
        if (this._completed)
          throw new Error("Can't resolve promise. Already completed");
        return (this._completed = !0), this._resolve(t), this.promise;
      }
      reject(t) {
        if (this._completed)
          throw new Error("Can't reject promise. Already completed");
        return (this._completed = !0), this._reject(t), this.promise;
      }
      get completed() {
        return this._completed;
      }
    };
  });
var ti,
  ir = l(() => {
    "use strict";
    ti = class {
      static reset() {
        this.next = 0;
      }
      static get(t = "") {
        return t + (this.next++).toString(36);
      }
    };
    ti.next = 0;
  });
var rr = l(() => {
  "use strict";
});
function pe(i) {
  if (!Xt.client) throw new Error("URL has to be parsed on the client side");
  return (
    ct || (ct = document.createElement("a")),
    (ct.href = i),
    {
      protocol: ct.protocol,
      host: ct.host,
      hostname: ct.hostname,
      port: ct.port,
      pathname: ct.pathname,
      search: ct.search,
      hash: ct.hash,
    }
  );
}
function sr(i) {
  return `${i.protocol}//${i.host}${i.pathname}${i.search}${i.hash}`;
}
var ct,
  or = l(() => {
    "use strict";
    $e();
  });
var nr = l(() => {
  "use strict";
});
var C = l(() => {
  "use strict";
  $e();
  Ze();
  Zi();
  Ki();
  Qi();
  Ji();
  tr();
  er();
  ir();
  Je();
  rr();
  or();
  nr();
});
function F() {
  return Xt.mobile || window.innerWidth < 1024;
}
var Lt = l(() => {
  C();
});
function pt(i, t) {
  return (e, r) => {
    let s = Symbol(r);
    return (
      (e[i] = e[i] || {}),
      (e[i][r] = t),
      Object.defineProperty(e, r, {
        set(o) {
          this[s] = o;
        },
        get() {
          return this[s];
        },
      }),
      e
    );
  };
}
async function ie(i, t, e) {
  let r = t[i];
  for (let s in r) await e(s, r[s], t);
}
function Rt(i, t, e = [], r = !1, s) {
  return ie(i, t, async (o, n) => {
    let a = n.class,
      c = n.async === !0,
      f = e.find((u) => u instanceof a) || s;
    if (!(!a || !f))
      if (c && f instanceof Promise) {
        if (r)
          throw new Error(
            "await prevented! You can't wait for the injectables here, since there may be unresolved dependencies which would cause a block"
          );
        t[o] = await f;
      } else t[o] = f;
  });
}
var qt = l(() => {
  "use strict";
});
function m(i, t = !1) {
  return pt(re, { class: i, async: t });
}
var re,
  k,
  ei = l(() => {
    "use strict";
    qt();
    re = Symbol(void 0);
    k = class i extends Promise {
      constructor(t = {}, e) {
        let r, s;
        super((o, n) => {
          (r = o), (s = n);
        }),
          (this.config = t),
          (this.children = new Map()),
          (this._resolved = !1),
          (this._activated = !1),
          (this.defaultConfig = {}),
          (this.config = { ...this.defaultConfig, ...t }),
          (this.resolveFn = r),
          (this.rejectFn = s),
          e && this.resolve(e);
      }
      static get [Symbol.species]() {
        return Promise;
      }
      addChild(t, e = {}, r) {
        let s = new this.child(e, r);
        return this.children.set(t, s), s;
      }
      deleteChild(t) {
        let e;
        return (
          typeof t == "string"
            ? (e = t)
            : this.children.forEach((r, s) => {
                t === r && (e = s);
              }),
          e ? this.children.delete(e) : !1
        );
      }
      hasChild(t) {
        return this.children.has(t);
      }
      getChild(t, e) {
        return !t || (!this.hasChild(t) && e) ? e : this.children.get(t);
      }
      get available() {
        return this._resolved;
      }
      get activated() {
        return this._activated;
      }
      get child() {
        return i;
      }
      get name() {
        throw new Error(
          "service name not defined for " + this.constructor.name
        );
      }
      activate() {
        return (this._activated = !0), this;
      }
      async init() {}
      resolve(t) {
        return (
          this.resolveFn &&
            !this._resolved &&
            ((this._resolved = !0), this.resolveFn(t)),
          t
        );
      }
    };
  });
function S(i) {
  return (t) => (
    (i =
      typeof i == "string"
        ? {
            selector: `[data-${i}]`,
            dataset: i.replace(/-./g, (e) => e[1].toUpperCase()),
          }
        : i),
    (t[me] = i),
    t
  );
}
var me,
  ii = l(() => {
    "use strict";
    me = Symbol(void 0);
  });
function $(i, t = {}) {
  return pt(ri, { key: i, ...t });
}
var ri,
  si = l(() => {
    "use strict";
    qt();
    ri = Symbol(void 0);
  });
function U(i, t = {}) {
  return pt(oi, { selector: i, ...t });
}
function se(i, t = {}) {
  return pt(ni, { selector: i, ...t });
}
var oi,
  ni,
  Ct = l(() => {
    "use strict";
    qt();
    (oi = Symbol(void 0)), (ni = Symbol(void 0));
  });
function Y(i) {
  return (t, e) => {
    if (e) return pt(de, { class: Nt })(t, e);
    {
      let r = new Nt(i);
      return class extends t {
        constructor() {
          super(),
            Promise.all([
              Rt(de, this, [r]),
              ...r.services.map((s) => Rt(de, s, [r])),
              Rt(re, this, r.services, !0, r.voidService),
            ]).then(() => {
              typeof this.onCreate == "function" && this.onCreate();
            });
        }
      };
    }
  };
}
var de,
  ai,
  Nt,
  ar = l(() => {
    "use strict";
    ii();
    si();
    qt();
    Ct();
    ei();
    (de = Symbol(void 0)),
      (ai = (i, t = {}, e = !1) => {
        let r = t;
        if (i)
          try {
            r = JSON.parse(i);
          } catch (s) {
            e && console.warn("could not parse json:", s);
          }
        return r;
      });
    Nt = class {
      constructor(t = {}) {
        (this.config = t),
          (this.root = document.body),
          (this.components = []),
          (this.voidService = new k()),
          this.initServices(),
          t.initUpdate !== !1 && this.update();
      }
      get services() {
        return this.config.services || [];
      }
      async initServices() {
        let t = this.config.services;
        if (t) {
          let e = t.map((r) => r.name);
          if (e.length !== new Set(e).size)
            throw new Error("duplicate services found: " + e.join(", "));
          for (let r = 0, s = t.length; r < s; r++) t[r].activate();
          for (let r = 0, s = t.length; r < s; r++)
            await this.injectService(t[r]);
          for (let r = 0, s = t.length; r < s; r++) t[r].init();
        }
      }
      async injectService(t) {
        await Rt(re, t, this.config.services, !0, this.voidService);
      }
      async injectComponent(t) {
        return (
          await Promise.all([
            Rt(de, t.component, [this]),
            Rt(re, t.component, this.config.services, !1, this.voidService),
            ie(oi, t.component, async (e, r, s) => {
              let o = t.element.querySelector(r.selector);
              typeof r.parse == "function" && (o = r.parse(o)), o && (s[e] = o);
            }),
            ie(ni, t.component, async (e, r, s) => {
              let o = t.element.querySelectorAll(r.selector);
              typeof r.parse == "function" && (o = r.parse(o)), o && (s[e] = o);
            }),
            ie(ri, t.component, async (e, r, s) =>
              this.parseComponentConfig(t, e, r, s)
            ),
          ]),
          t
        );
      }
      parseComponentConfig(t, e, r, s) {
        let o = t.ctor,
          n = o[me].dataset;
        if (!n)
          throw new Error(
            `${o.name} component has no dataset attribute defined. Define it with "dataset" in the component decorator.`
          );
        let a = t.element.dataset[n],
          c = r.key.replace(/-./g, (v) => v[1].toUpperCase()),
          f = c.charAt(0).toUpperCase() + c.slice(1),
          u = t.element.dataset[`${n}${f}`],
          x = a ? ai(a) : {},
          d = r.type || String,
          p = u === void 0 ? x[r.key] : u;
        if (p !== void 0) {
          let v;
          d === Array ? (v = []) : d === Object ? (v = {}) : (v = d(p)),
            d === Boolean &&
              typeof p == "string" &&
              p.trim() === "" &&
              (v = !0),
            d === Boolean &&
              (p === "0" || p === "no" || p === "false") &&
              (v = !1),
            d === Array
              ? p instanceof Array
                ? (v = p)
                : typeof p == "string" &&
                  p.startsWith("[") &&
                  (v = ai(p, [], !0))
              : d === Object &&
                (p instanceof Object
                  ? (v = p)
                  : typeof p == "string" &&
                    p.startsWith("{") &&
                    (v = ai(p, {}, !0))),
            typeof r.parse == "function" && (v = r.parse(v)),
            (s[e] = v);
        }
      }
      update(t = this.root, e = !0, r = () => !0) {
        let s = [];
        return (
          this.collect(t, r, (o) => {
            this.injectComponent(o).then(() => {
              let n = Promise.resolve();
              if (typeof o.component.onCreate == "function") {
                let a = o.component.onCreate();
                a instanceof Promise && (n = a);
              }
              typeof o.component.onListen == "function" &&
                n.then(async () => {
                  let a = o.component.onListen();
                  a instanceof Promise
                    ? (o.unlisten = await a)
                    : (o.unlisten = a);
                });
            }),
              s.push(o),
              this.components.push(o);
          }),
          e && this.purge(),
          s
        );
      }
      collect(t, e, r) {
        (this.config.components || []).forEach((s) => {
          let o = s[me] || {};
          (o.condition && !o.condition()) ||
            t.querySelectorAll(o.selector).forEach((n) => {
              e(s) &&
                n instanceof HTMLElement &&
                !this.components.find(
                  (a) => a.component instanceof s && a.element === n
                ) &&
                r({ ctor: s, component: new s(n), config: o, element: n });
            });
        });
      }
      purge() {
        let t = [];
        this.components.forEach((e) => {
          if (
            !this.root.contains(e.element) ||
            !e.element.matches(e.config.selector)
          ) {
            let r = Promise.resolve();
            if (typeof e.component.onDestroy == "function") {
              let s = e.component.onDestroy();
              s instanceof Promise && (r = s);
            }
            r.then(() => {
              typeof e.unlisten == "function" &&
                (e.unlisten(), delete e.unlisten);
            }),
              t.push([e, r]);
          }
        });
        for (let e = t.length - 1; e >= 0; e--)
          t[e][1].then(() => {
            let r = this.components.indexOf(t[e][0]);
            r > -1 && this.components.splice(r, 1);
          });
      }
      query(t, e) {
        let r = [];
        return (
          this.components.forEach((s) => {
            (e && !e.contains(s.element) && s.element !== e) ||
              (s.component instanceof t && r.push({ ...s }));
          }),
          r
        );
      }
    };
  });
var L = l(() => {
  "use strict";
  ei();
  ii();
  ar();
  qt();
  si();
});
var D,
  cr = l(() => {
    "use strict";
    D = class {
      constructor() {
        (this.listeners = new Map()), (this.emitters = []);
      }
      emit(t, e) {
        let r = this.listeners.get(t);
        r && r.forEach((s) => s(e));
        for (let s of this.emitters) s.emit(t, e);
        return this;
      }
      on(t, e) {
        let r = this.listeners.get(t);
        return (
          r || ((r = new Set()), this.listeners.set(t, r)),
          r.add(e),
          () => this.off(t, e)
        );
      }
      off(t, e) {
        let r = this.listeners.get(t);
        return r ? r.delete(e) : !1;
      }
      hasEventListeners(t) {
        let e = this.listeners.get(t);
        return !!e && e.size > 0;
      }
      reflectEvents(...t) {
        this.emitters = t;
      }
      unreflectEvents() {
        this.emitters = [];
      }
    };
  });
var mt = l(() => {
  "use strict";
  cr();
});
var lr = l(() => {
  "use strict";
});
function g(i, t, e, r) {
  return (
    typeof t == "string" && (t = [t]),
    t.forEach((s) => i.addEventListener(s, e, r)),
    () =>
      t.forEach((s) => {
        i.removeEventListener(s, e, r);
      })
  );
}
var hr = l(() => {
  "use strict";
});
function w(...i) {
  return () => i.forEach((t) => typeof t == "function" && t());
}
var ur = l(() => {
  "use strict";
});
var j = l(() => {
  "use strict";
  lr();
  hr();
  ur();
});
var E = {};
fe(E, {
  easeInBack: () => $s,
  easeInBounce: () => Qs,
  easeInCirc: () => Xs,
  easeInCubic: () => ks,
  easeInElastic: () => Ws,
  easeInExpo: () => Ys,
  easeInOutBack: () => Bs,
  easeInOutBounce: () => Js,
  easeInOutCirc: () => Ns,
  easeInOutCubic: () => As,
  easeInOutElastic: () => Ks,
  easeInOutExpo: () => Us,
  easeInOutQuad: () => Os,
  easeInOutQuart: () => Ds,
  easeInOutQuint: () => Fs,
  easeInOutSine: () => zs,
  easeInQuad: () => Ls,
  easeInQuart: () => Rs,
  easeInQuint: () => Is,
  easeInSine: () => Ts,
  easeOutBack: () => Gs,
  easeOutBounce: () => ve,
  easeOutCirc: () => qs,
  easeOutCubic: () => Ps,
  easeOutElastic: () => Zs,
  easeOutExpo: () => Hs,
  easeOutQuad: () => Cs,
  easeOutQuart: () => Vs,
  easeOutQuint: () => js,
  easeOutSine: () => Ms,
  linear: () => Ss,
});
var Ss,
  Ts,
  Ms,
  zs,
  Ls,
  Cs,
  Os,
  ks,
  Ps,
  As,
  Rs,
  Vs,
  Ds,
  Is,
  js,
  Fs,
  Ys,
  Hs,
  Us,
  Xs,
  qs,
  Ns,
  $s,
  Gs,
  Bs,
  Ws,
  Zs,
  Ks,
  Qs,
  ve,
  Js,
  fr = l(() => {
    "use strict";
    (Ss = (i) => i),
      (Ts = (i) => 1 + Math.sin((Math.PI / 2) * i - Math.PI / 2)),
      (Ms = (i) => Math.sin((Math.PI / 2) * i)),
      (zs = (i) => (1 + Math.sin(Math.PI * i - Math.PI / 2)) / 2),
      (Ls = (i) => i * i),
      (Cs = (i) => i * (2 - i)),
      (Os = (i) => (i < 0.5 ? 2 * i * i : -1 + (4 - 2 * i) * i)),
      (ks = (i) => i * i * i),
      (Ps = (i) => --i * i * i + 1),
      (As = (i) =>
        i < 0.5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1),
      (Rs = (i) => i * i * i * i),
      (Vs = (i) => 1 - --i * i * i * i),
      (Ds = (i) => (i < 0.5 ? 8 * i * i * i * i : 1 - 8 * --i * i * i * i)),
      (Is = (i) => i * i * i * i * i),
      (js = (i) => 1 + --i * i * i * i * i),
      (Fs = (i) =>
        i < 0.5 ? 16 * i * i * i * i * i : 1 + 16 * --i * i * i * i * i),
      (Ys = (i) => (i === 0 ? 0 : Math.pow(2, 10 * i - 10))),
      (Hs = (i) => (i === 1 ? 1 : 1 - Math.pow(2, -10 * i))),
      (Us = (i) =>
        i === 0
          ? 0
          : i === 1
          ? 1
          : i < 0.5
          ? Math.pow(2, 20 * i - 10) / 2
          : (2 - Math.pow(2, -20 * i + 10)) / 2),
      (Xs = (i) => 1 - Math.sqrt(1 - Math.pow(i, 2))),
      (qs = (i) => Math.sqrt(1 - Math.pow(i - 1, 2))),
      (Ns = (i) =>
        i < 0.5
          ? (1 - Math.sqrt(1 - Math.pow(2 * i, 2))) / 2
          : (Math.sqrt(1 - Math.pow(-2 * i + 2, 2)) + 1) / 2),
      ($s = (i) => 2.70158 * i * i * i - 1.70158 * i * i),
      (Gs = (i) =>
        1 + 2.70158 * Math.pow(i - 1, 3) + 1.70158 * Math.pow(i - 1, 2)),
      (Bs = (i) => {
        let e = 2.5949095;
        return i < 0.5
          ? (Math.pow(2 * i, 2) * ((e + 1) * 2 * i - e)) / 2
          : (Math.pow(2 * i - 2, 2) * ((e + 1) * (i * 2 - 2) + e) + 2) / 2;
      }),
      (Ws = (i) => (0.04 - 0.04 / i) * Math.sin(25 * i) + 1),
      (Zs = (i) => ((0.04 * i) / --i) * Math.sin(25 * i)),
      (Ks = (i) =>
        (i -= 0.5) < 0
          ? (0.02 + 0.01 / i) * Math.sin(50 * i)
          : (0.02 - 0.01 / i) * Math.sin(50 * i) + 1),
      (Qs = (i) => 1 - ve(1 - i)),
      (ve = (i) =>
        i < 0.36363636363636365
          ? 7.5625 * i * i
          : i < 0.7272727272727273
          ? 7.5625 * (i -= 0.5454545454545454) * i + 0.75
          : i < 0.9090909090909091
          ? 7.5625 * (i -= 0.8181818181818182) * i + 0.9375
          : 7.5625 * (i -= 0.9545454545454546) * i + 0.984375),
      (Js = (i) =>
        i < 0.5 ? (1 - ve(1 - 2 * i)) / 2 : (1 + ve(2 * i - 1)) / 2);
  });
var pr,
  R,
  mr = l(() => {
    "use strict";
    (pr = class {
      constructor(i = !1) {
        (this.override = i),
          (this.ticking = !1),
          (this.tasks = []),
          (this.time = 0),
          this.override || this.loop();
      }
      static now() {
        return this.main.time;
      }
      tick(i) {
        for (let t = 0, e = this.tasks.length; t < e; t++) {
          let r = this.tasks[t];
          !r || r.dead || r.update(i - this.time, this.time - r.start, r.kill);
        }
        this.time = i;
      }
      loop() {
        (this.ticking = !0),
          window.requestAnimationFrame((i) => {
            this.tick(i), this.override ? (this.ticking = !1) : this.loop();
          });
      }
      add(i, t = 0) {
        let e = {
          update: i,
          order: t,
          start: this.time,
          dead: !1,
          kill: () => {
            (e.dead = !0), this.tasks.splice(this.tasks.indexOf(e), 1);
          },
        };
        return (
          this.tasks.push(e), this.tasks.sort((r, s) => r.order - s.order), e
        );
      }
    }),
      (R = pr);
    R.main = new pr();
  });
var dt = l(() => {
  "use strict";
  mr();
});
var K,
  $t = l(() => {
    "use strict";
    dt();
    K = class {
      constructor(t = {}) {
        (this.config = t),
          (this.ticker = R.main),
          (this._overridden = !1),
          (this._duration = 0),
          (this.listeners = new Map()),
          (this._resolved = !1),
          (this._paused = !1),
          (this._passed = 0),
          (this._progress = 0),
          (this._reversed = !1),
          (this._started = !1),
          (this.lastProgress = 0),
          (this.lastDelay = 0),
          (this._duration = typeof t.duration < "u" ? t.duration : 500);
      }
      callback(t, e = []) {
        typeof t == "function" && t(...e);
      }
      beforeStart() {}
      beforeStop() {}
      beforeSeek() {}
      onStart(t) {
        return this.setListener("onStart", t), this;
      }
      onComplete(t) {
        return this.setListener("onComplete", t), this;
      }
      onStop(t) {
        return this.setListener("onStop", t), this;
      }
      callListeners(t, e = []) {
        let r = this.listeners.get(t);
        r && r.forEach((s) => s(...e));
      }
      setListener(t, e) {
        this.listeners.has(t) || this.listeners.set(t, []),
          this.listeners.get(t).push(e);
      }
      get progress() {
        return this._progress;
      }
      get delay() {
        return this.config.delay || 0;
      }
      get duration() {
        return this._duration + this.delay;
      }
      get paused() {
        return this._paused;
      }
      get complete() {
        return this._resolved;
      }
      get passed() {
        return this._progress * this.duration;
      }
      get reversed() {
        return this._reversed;
      }
      get ticking() {
        return !!this.task;
      }
      resolve() {
        this.resolveFn && !this._resolved && this.resolveFn(),
          (this._resolved = !0);
      }
      override(t = !0) {
        return (this._overridden = t), this;
      }
      start(t = 0, e = !1) {
        return this._overridden
          ? this
          : ((this._paused = !1),
            this.beforeStart(),
            e || this.reset(0, !0),
            (this.task = this.ticker.add((r, s) => {
              this._paused || this.seek(t + s);
            })),
            this);
      }
      resume() {
        return this.pause(!1);
      }
      pause(t = !0) {
        return (
          this._paused !== t &&
            ((this._paused = t),
            t && this.task && (this.task.kill(), delete this.task),
            t
              ? this.callback(this.config.onPause)
              : this.callback(this.config.onResume),
            !t && !this.task && this.start(this._passed, !0)),
          this
        );
      }
      stop(t = !1) {
        let e = this.ticking,
          r = this._started;
        return (
          (this._started = !1),
          e && this.task && (this.task.kill(), delete this.task),
          this.beforeStop(),
          !t &&
            r &&
            (this.callback(this.config.onStop, [e]),
            this.callListeners("onStop", [e])),
          this
        );
      }
      hasStarted(t) {
        return (
          (!this._reversed && t > 0) || (this._reversed && t < this.duration)
        );
      }
      seekDelay(t, e = !1, r = !1) {
        let s = e ? 0 : this.delay;
        if (s > 0) {
          if (!e && t <= s)
            return (
              r || this.callback(this.config.onDelay, [t, t / s]),
              (this.lastDelay = t),
              !1
            );
          !e &&
            t >= s &&
            this.lastDelay !== s &&
            (r || this.callback(this.config.onDelay, [s, 1]),
            (this.lastDelay = s));
        }
        return !0;
      }
      preSeek(t, e = !1) {
        return this._resolved
          ? !1
          : (!this._started &&
              !e &&
              this.hasStarted(t) &&
              ((this._started = !0),
              this.callback(this.config.onStart),
              this.callListeners("onStart"),
              this.beforeSeek()),
            !0);
      }
      seek(t, e = !1, r = !1) {
        if (!this.preSeek(t, r)) return this;
        this._reversed && (t = this.duration - t);
        let s = e ? 0 : this.delay,
          o = Math.min(Math.max(t, 0), this.duration);
        return (
          (this._progress = Math.min(Math.max(t / this.duration, 0), 1)),
          (this._passed = o),
          r || this.callback(this.config.onSeek, [o, this._progress]),
          !r &&
          ((!this._reversed && o >= this.duration) ||
            (this._reversed && o <= 0))
            ? (this.process(this._reversed ? 0 : 1, this._reversed ? 0 : 1),
              this.stop(),
              this.resolve(),
              this.callback(this.config.onComplete),
              this.callListeners("onComplete"),
              this)
            : this.seekDelay(t, e, r)
            ? ((this.lastProgress = (o - s) / (this.duration - s)),
              this.process(
                this.config.easing
                  ? this.config.easing(this.lastProgress)
                  : this.lastProgress,
                this.lastProgress
              ),
              this)
            : (this.lastProgress !== 0 &&
                ((this.lastProgress = 0), this.process(0, 0)),
              this)
        );
      }
      reset(t = 0, e = !1) {
        let r = this._reversed ? 1 - this._progress : this._progress;
        return (
          (this._resolved = !1),
          (this.lastProgress = 0),
          (this.lastDelay = 0),
          e || this.callback(this.config.onReset),
          (this._started || r > 0) && this.seek(t, !0, e),
          this.task && this.stop(e),
          this
        );
      }
      reverse() {
        return (
          (this._reversed = !this._reversed), this.stop(!0), this.seek(0), this
        );
      }
      then(t) {
        let e = this,
          r = e.then;
        if (((e.then = void 0), this._resolved)) {
          t(this);
          let s = Promise.resolve(this);
          return (e.then = r), s;
        }
        return new Promise((s) => {
          this.resolveFn = () => {
            s(this), t(this), (e.then = r);
          };
        });
      }
      process(t, e) {
        return this;
      }
    };
  });
function to(i) {
  let t = dr.get(i);
  if (t) return t;
  let r = getComputedStyle(i).transform,
    s = {
      x: 0,
      y: 0,
      z: 0,
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    };
  if (r && r !== "none") {
    let o = r.includes("3d") ? "3d" : "2d",
      n = r.match(/matrix.*\((.+)\)/);
    if (!n) return s;
    let a = n[1].split(", ").map(Number);
    if (o === "2d") {
      let [c, f, u, x, d, p] = a;
      (s.x = d),
        (s.y = p),
        (s.scaleX = Math.sqrt(c * c + f * f)),
        (s.scaleY = Math.sqrt(u * u + x * x)),
        (s.rotateZ = Math.atan2(f, c) * (180 / Math.PI));
    } else if (o === "3d") {
      let [c, f, u, x, d, p, v, _, st, ot, ft, Yt, Ht, Ue, Ut, fs] = a;
      (s.x = Ht),
        (s.y = Ue),
        (s.z = Ut),
        (s.scaleX = Math.sqrt(c * c + f * f + u * u)),
        (s.scaleY = Math.sqrt(d * d + p * p + v * v)),
        (s.scaleZ = Math.sqrt(st * st + ot * ot + ft * ft)),
        (s.rotateY = Math.asin(-u)),
        Math.cos(s.rotateY) !== 0
          ? ((s.rotateX = Math.atan2(v, ft)), (s.rotateZ = Math.atan2(f, c)))
          : ((s.rotateX = 0), (s.rotateZ = Math.atan2(-d, p))),
        (s.rotateX *= 180 / Math.PI),
        (s.rotateY *= 180 / Math.PI),
        (s.rotateZ *= 180 / Math.PI);
    }
  }
  return (s.scale = s.scaleX), (s.rotate = s.rotateZ), dr.set(i, s), s;
}
function eo(i, t, e = {}) {
  let r = "",
    s = { ...t },
    o = li(i);
  if (
    ((s.rotateZ =
      s.rotateZ !== void 0 ? s.rotateZ : s.rotate !== void 0 ? s.rotate : 0),
    (s.scaleX =
      s.scaleX !== void 0 ? s.scaleX : s.scale !== void 0 ? s.scale : 1),
    (s.scaleY =
      s.scaleY !== void 0 ? s.scaleY : s.scale !== void 0 ? s.scale : 1),
    (s.scaleZ =
      s.scaleZ !== void 0 ? s.scaleZ : s.scale !== void 0 ? s.scale : 1),
    s.x !== void 0 || s.y !== void 0 || s.z !== void 0)
  ) {
    let n = s.x !== void 0 ? s.x : o.x,
      a = s.y !== void 0 ? s.y : o.y,
      c = s.z !== void 0 ? s.z : o.z,
      f = e.x || "px",
      u = e.y || "px",
      x = e.z || "px";
    (n !== 0 || a !== 0 || c !== 0) &&
      ((o.x = n),
      (o.y = a),
      (o.z = c),
      (r += ` translate3d(${n}${f}, ${a}${u}, ${c}${x})`));
  }
  if (s.rotateX !== void 0 && s.rotateX !== 0) {
    let n = e.rotateX || e.rotate || "deg";
    (o.rotateX = s.rotateX), (r += ` rotateX(${s.rotateX}${n})`);
  }
  if (s.rotateY !== void 0 && s.rotateY !== 0) {
    let n = e.rotateY || e.rotate || "deg";
    (o.rotateY = s.rotateY), (r += ` rotateY(${s.rotateY}${n})`);
  }
  if (s.rotateZ !== void 0 && s.rotateZ !== 0) {
    let n = e.rotateZ || e.rotate || "deg";
    (o.rotateZ = s.rotateZ), (r += ` rotateZ(${s.rotateZ}${n})`);
  }
  if (s.scaleX !== void 0 || s.scaleY !== void 0 || s.scaleZ !== void 0) {
    let n = s.scaleX !== void 0 ? s.scaleX : o.scaleX,
      a = s.scaleY !== void 0 ? s.scaleY : o.scaleY,
      c = s.scaleZ !== void 0 ? s.scaleZ : o.scaleZ;
    (n !== 1 || a !== 1 || c !== 1) &&
      ((o.scaleX = n),
      (o.scaleY = a),
      (o.scaleZ = c),
      (r += ` scale3d(${n}, ${a}, ${c})`));
  }
  i.style.transform = r.trim();
}
function ci(i, t) {
  let e = { ...i, ...t };
  return (
    typeof t.scale < "u" &&
      ((e.scaleX = t.scale), (e.scaleY = t.scale), (e.scaleZ = t.scale)),
    typeof t.rotate < "u" && (e.rotateZ = t.rotate),
    e
  );
}
function li(i) {
  let t = to(i),
    e = parseFloat(i.style.opacity);
  return (t.opacity = isNaN(e) ? 1 : e), t;
}
function ge(i, t, e = {}) {
  eo(i, t, e),
    typeof t.opacity < "u" &&
      (t.opacity === 1
        ? (i.style.opacity = "")
        : (i.style.opacity = t.opacity.toString()));
  for (let r in t)
    io.includes(r) ||
      (Object.prototype.hasOwnProperty.call(t, r) && (i.style[r] = t[r]));
}
var dr,
  io,
  hi = l(() => {
    "use strict";
    dr = new WeakMap();
    io = [
      "opacity",
      "x",
      "y",
      "z",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "scaleZ",
    ];
  });
function ui(i, t, e) {
  if (i instanceof HTMLElement) ge(i, t, e);
  else for (let r in t) i[r] = t[r];
}
function vr(i, t, e) {
  return new K({ duration: 0.001, onStart: () => ui(i, t, e) });
}
var gr = l(() => {
  "use strict";
  $t();
  hi();
});
function yr(i, t) {
  let e = {};
  for (let r in i)
    if (
      Object.prototype.hasOwnProperty.call(i, r) &&
      Object.prototype.hasOwnProperty.call(t, r)
    ) {
      let s = t[r] - i[r];
      s !== 0 && (e[r] = s);
    }
  return e;
}
var xr,
  oe,
  fi = l(() => {
    "use strict";
    $t();
    hi();
    (xr = class extends K {
      constructor(i) {
        super(i),
          (this.config = i),
          (this.registry = xr.registry),
          (this.originState = {}),
          (this.changedState = {}),
          (this.resultState = {}),
          this.update(),
          i.reversed && this.reverse(),
          i.initSeek && this.seek(0, !0, !0),
          i.autoStart !== !1 && this.start();
      }
      get key() {
        return this.config.key || this.config.target || this.config.from;
      }
      updateRegistry() {
        let i = this.registry.get(this.key);
        this.config.overwrite !== !1 && i && this.overwrite(this.key),
          this.registry.set(this.key, this);
      }
      beforeStop() {
        this.registry.delete(this.key);
      }
      beforeSeek() {
        this.updateRegistry(), this.config.seekUpdate !== !1 && this.update();
      }
      overwrite(i) {
        let t = this.registry.get(i);
        t &&
          (!this._overridden && t.ticking && t.stop(),
          this.registry.delete(i),
          this.callback(this.config.onOverwrite, [t]));
      }
      update() {
        let i = this.config,
          t = i.from;
        if (
          (i.target && i.target instanceof HTMLElement
            ? (this.domTarget = i.target)
            : t instanceof HTMLElement && (this.domTarget = t),
          this.domTarget)
        ) {
          let e = li(this.domTarget),
            r = t instanceof HTMLElement ? { ...e } : ci(e, t),
            s = ci(e, i.to),
            o = yr(r, s);
          (this.originState = r),
            (this.changedState = o),
            (this.resultState = { ...this.originState });
          for (let n in this.resultState)
            Object.hasOwnProperty.call(s, n) || delete this.resultState[n];
        } else {
          let e = t,
            r = i.to;
          (this.originState = { ...e }),
            (this.changedState = yr(this.originState, r)),
            i.target && !(i.target instanceof HTMLElement)
              ? (this.resultState = i.target)
              : (this.resultState =
                  i.mutate !== !1 ? e : { ...this.originState });
        }
        return this;
      }
      process(i, t) {
        let e = !1;
        for (let r in this.changedState)
          if (this.changedState[r] !== void 0) {
            let s = this.changedState[r],
              o = this.originState[r];
            o !== void 0 && ((this.resultState[r] = o + s * i), (e = !0));
          }
        return (
          this.domTarget &&
            e &&
            ge(this.domTarget, this.resultState, this.config.units),
          this.callback(this.config.onUpdate, [
            this.resultState,
            { target: this, linear: t, eased: i },
          ]),
          this
        );
      }
    }),
      (oe = xr);
    oe.registry = new WeakMap();
  });
function Gt(i, t, e = {}) {
  return new oe({ from: i, to: t, ...e });
}
function Bt(i, t, e, r = {}) {
  return new oe({ target: i, from: t, to: e, ...r });
}
function wr() {
  throw new Error("Not implemented yet");
}
function br() {
  return new K({ duration: 0.001 }).start();
}
function _r(i = 100, t = {}) {
  return new K({ duration: i, ...t }).start();
}
var ye = l(() => {
  "use strict";
  $t();
  fi();
});
var vt,
  pi = l(() => {
    "use strict";
    $t();
    ye();
    vt = class i extends K {
      constructor(t) {
        if (
          (super(t),
          (this.config = t),
          (this.items = []),
          (this.sideEffects = []),
          (this.timelineReversed = !1),
          (this._duration = 0),
          t.reversed && this.reverse(),
          t.items)
        )
          for (let e of t.items)
            e.controller
              ? this.add(e.controller, e.config)
              : e.dynamic && this.add(e.dynamic, e.config);
        t.autoStart !== !1 && requestAnimationFrame(() => this.start());
      }
      call(t, e = {}) {
        return (
          this.sideEffects.push({
            callback: t,
            config: e,
            called: !1,
            item: this.items[this.items.length - 1],
          }),
          this
        );
      }
      clear() {
        return (
          this.reset(),
          (this.items.length = 0),
          (this.sideEffects.length = 0),
          (this._duration = 0),
          this
        );
      }
      add(t, e = {}) {
        if (typeof t == "function")
          return this.items.push({ dynamic: t, config: e }), this;
        let r = Array.isArray(t) ? t : [t];
        for (let s = 0, o = r.length; s < o; s++) {
          let n = r[s].override().pause().reset(),
            a = { ...e };
          this.timelineReversed && !n.reversed && n.reverse(),
            s > 0 && (a.offset = -1),
            typeof a.offset < "u" &&
              (a.offset = Math.min(Math.max(a.offset, -1), 1)),
            this.items.push({ controller: n, config: a });
        }
        return this.updateDuration(), this;
      }
      to(t, e, r) {
        return this.add(Gt(t, e, r), r);
      }
      fromTo(t, e, r, s) {
        return this.add(Bt(t, e, r, s), s);
      }
      remove(t) {
        let e = this.items.findIndex((r) => r.controller === t);
        return (
          e !== -1 && (this.items.splice(e, 1), this.updateDuration()), this
        );
      }
      updateDuration() {
        let t = [];
        for (let e = 0; e < this.items.length; e++) {
          let r = this.items[e],
            s = r.controller;
          if (!s) continue;
          let o = r.config,
            n = s.duration,
            a = o.offset || 0;
          if (e === 0) {
            t.push([n, n]);
            continue;
          }
          if (t.length === 0) continue;
          let [c, f] = t[t.length - 1],
            u = f * a;
          t.push([c + u + n, n]);
        }
        this._duration = Math.max(...t.map((e) => e[0]));
      }
      revealAllItems() {
        for (let t of this.items) this.revealItem(t);
        return this.updateDuration(), this;
      }
      revealItem(t) {
        return (
          !t.controller &&
            t.dynamic &&
            ((t.controller = t.dynamic().override().reset()),
            t.controller instanceof i && t.controller.revealAllItems(),
            this.updateDuration()),
          t
        );
      }
      isDynamic() {
        return this.items.some((t) => t.dynamic);
      }
      getStartMs(t, e, r = !1) {
        let s = 0;
        for (let o = 0; o <= e; o++) {
          if (o - 1 < 0) continue;
          let a = this.revealItem(t[o - 1]).controller,
            c = t[o].config.offset || 0,
            f = a.duration - (r ? a.delay : 0);
          s += f + f * c;
        }
        return s;
      }
      callEffects(t, e) {
        for (let r of e) {
          let s = r.config.offset || 0,
            o = r.item?.controller,
            n = (r.item && o?.duration) || 0,
            a = n + n * s;
          !r.called && t >= a && (r.callback(), (r.called = !0));
        }
      }
      seek(t, e = !1, r = !1, s = !1) {
        if (!this.preSeek(t, r)) return this;
        if (
          ((this._passed = Math.min(t, this.duration)),
          (this._progress = this._passed / this.duration),
          r || this.callback(this.config.onSeek, [t, this._progress]),
          !this.seekDelay(t, e, r))
        )
          return this;
        t -= e ? 0 : this.delay;
        let o = this.items;
        for (let n = 0, a = o.length; n < a; n++) {
          let c = this.revealItem(o[n]),
            f = this.sideEffects.filter((ot) => ot.item === c),
            u = this.getStartMs(o, n, e),
            x = e ? c.controller.delay : 0,
            d = c.controller.duration - x,
            p = u + d,
            v = t - u;
          if (d === 0) continue;
          if (t > p) {
            c.controller.progress < 1 &&
              (c.controller instanceof i
                ? c.controller.seek(d, e, r, s)
                : c.controller.seek(d, e, r),
              this.callEffects(d, f));
            continue;
          }
          c.controller instanceof i
            ? c.controller.seek(v, e, r, s)
            : c.controller.seek(v, e, r),
            this.callEffects(v, f);
          let _ = o[n + 1],
            st = (_ && _.config.offset) || 0;
          if (!s && (!_ || p + st * d > t)) break;
        }
        return (
          (this._progress = this._passed / this.duration),
          this._progress >= 1 &&
            !r &&
            (this.stop(),
            this.resolve(),
            this.callback(this.config.onComplete),
            this.callListeners("onComplete")),
          this
        );
      }
      beforeStart() {
        this.resetEffects();
        for (let t of this.sideEffects.filter((e) => !e.item)) t.callback();
      }
      reverse() {
        this.timelineReversed = !this.timelineReversed;
        for (let { controller: t } of this.items) t && t.reverse();
        return this;
      }
      stop(t = !1) {
        super.stop();
        for (let { controller: e } of this.items) e && e.stop(t);
        return this;
      }
      resetEffects() {
        for (let t of this.sideEffects) t.called = !1;
      }
      reset(t = 0, e = !1) {
        super.reset(t, e);
        let r = this._reversed ? 1 - this._progress : this._progress,
          s = this.items.slice().reverse();
        (this._started || r > 0) && this.seek(t, !0, e, !0);
        for (let { controller: o } of s) o && o.reset(t, e);
        return this.resetEffects(), this;
      }
    };
  });
function Er(i = {}) {
  return new vt(i);
}
function Sr(i, t, e) {
  return new vt({
    ...e?.timeline,
    items: Array.from(i).map((r) => {
      let s = {
        offset: typeof e?.stagger?.offset < "u" ? -1 + e.stagger.offset : -1,
      };
      return { controller: Gt(r, t, e), config: s };
    }),
  });
}
function Tr(i, t, e, r) {
  return new vt({
    ...r?.timeline,
    items: Array.from(i).map((s) => {
      let o = {
        offset: typeof r?.stagger?.offset < "u" ? -1 + r.stagger.offset : -1,
      };
      return { controller: Bt(s, t, e, r), config: o };
    }),
  });
}
var Mr = l(() => {
  "use strict";
  pi();
  ye();
});
var y,
  zr = l(() => {
    "use strict";
    gr();
    Mr();
    ye();
    y = {
      to: Gt,
      fromTo: Bt,
      timeline: Er,
      from: wr,
      set: vr,
      setNow: ui,
      staggerTo: Sr,
      noop: br,
      delay: _r,
      staggerFromTo: Tr,
    };
  });
var X = l(() => {
  "use strict";
  fr();
  zr();
  fi();
  pi();
  $t();
});
function ne(i) {
  return (
    (i = typeof i == "string" ? pe(i) : i),
    { id: ro(i), url: `${i.pathname}${i.search}`, hash: i.hash, load: sr(i) }
  );
}
function Lr(i, t) {
  let e = document.createElement("div");
  e.innerHTML = i;
  let r = e.querySelector("title")?.innerText || "";
  return { outlet: e.querySelector(t) || void 0, title: r };
}
function Cr(i, t) {
  return i.url === t.url && i.hash === t.hash;
}
function ro(i) {
  return window.btoa(`${i.host}${i.pathname}${i.search}${i.hash}`);
}
function mi(i) {
  return (
    !i.startsWith("tel:") &&
    !i.startsWith("mailto:") &&
    !i.startsWith("javascript:")
  );
}
var di = l(() => {
  "use strict";
  C();
});
var xe,
  vi = l(() => {
    "use strict";
    j();
    C();
    di();
    xe = class {
      constructor(t, e) {
        (this.selector = t),
          (this.callback = e),
          (this.listeners = new Map()),
          this.update();
      }
      update(t = document.documentElement) {
        for (let [e] of this.listeners)
          document.documentElement.contains(e) || this.remove(e);
        At(this.selector, t).forEach((e) => {
          this.listeners.has(e) || this.add(e);
        });
      }
      add(t) {
        this.listeners.set(
          t,
          w(
            g(t, "click", (e) => {
              e.preventDefault();
              let r = e.currentTarget;
              if (r && this.callback) {
                let s = r.getAttribute("href") || r.dataset.routeUrl;
                s && mi(s) && this.callback(s, r, "click");
              }
            }),
            g(t, "mouseenter", (e) => {
              let r = e.currentTarget;
              if (r && this.callback) {
                let s = r.getAttribute("href") || r.dataset.routeUrl;
                s && mi(s) && this.callback(s, r, "hover");
              }
            })
          )
        );
      }
      remove(t) {
        let e = this.listeners.get(t);
        e && (e(), this.listeners.delete(t));
      }
      clear() {
        for (let t of this.listeners.values()) t();
        this.listeners.clear();
      }
    };
  });
var O,
  we,
  Or = l(() => {
    "use strict";
    mt();
    j();
    X();
    C();
    vi();
    di();
    (O = ((i) => (
      (i.TRIGGER_CLICK = "triggerclick"),
      (i.NAV_START = "navstart"),
      (i.NAV_END = "navend"),
      (i.NAV_CANCEL = "navcancel"),
      (i.NAV_SETTLED = "navsettled"),
      (i.NAV_PROGRESS = "navprogress"),
      (i.BEFORE_ENTER = "beforeenter"),
      (i.AFTER_ENTER = "afterenter"),
      (i.BEFORE_LEAVE = "beforeleave"),
      (i.AFTER_LEAVE = "afterleave"),
      (i.AFTER_RELEASE = "afterrelease"),
      i
    ))(O || {})),
      (we = class extends D {
        constructor(t = {}) {
          super(),
            (this.config = t),
            (this.animations = []),
            (this.keepViews = []),
            (this.changeStates = []),
            (this.viewCache = new Map()),
            (this.outletSelector = t.outlet || "main"),
            (this.viewSelector = t.view || ".router-view"),
            (this.triggerSelector =
              t.trigger || "a[href]:not([data-no-route])"),
            (this.baseUrl = pe(window.location.href)),
            (this._route = ne(this.baseUrl)),
            (this._outlet = at(this.outletSelector)),
            (this._view = this.queryView(this._outlet)),
            (this.unlisten = this.listen()),
            (this.trigger = new xe(this.triggerSelector, (e, r, s) => {
              s === "click"
                ? (this.emit("triggerclick", { url: e, target: r }), this.to(e))
                : s === "hover" && t.hoverPreload !== !1 && this.preload(e);
            })),
            this.viewCache.set(
              this._route.id,
              Promise.resolve({
                title: document.title,
                outlet: this._outlet,
                view: this._view,
              })
            ),
            window.history.replaceState(
              this._route,
              "",
              this._route.url + (this._route.hash || "")
            );
        }
        get route() {
          return { ...this._route };
        }
        get outlet() {
          return this._outlet;
        }
        get view() {
          return this._view;
        }
        listen() {
          return w(
            g(window, "popstate", (t) => {
              this.navigate(t.state, { trigger: "popstate" });
            })
          );
        }
        update(t) {
          this.trigger.update(t);
        }
        animate(...t) {
          t.forEach((e) => this.animations.push(e));
        }
        removeAnimation(t) {
          return this.animations.splice(
            this.animations.findIndex((e) => e.name === t),
            1
          )[0];
        }
        to(t, e) {
          let r = ne(t),
            s = e?.replace ? "replaceState" : "pushState";
          window.history[s](r, "", r.url + (r.hash || "")),
            this.navigate(r, { flags: e?.flags });
        }
        animateCycle(t, e, r) {
          t.call(() => this.emit("beforeenter", r)),
            this.animateHook(r, "append", t, e),
            t.call(() => this._outlet.append(r.toElement)),
            this.animateHook(r, "enter", t, e),
            t.call(() => {
              this.emit("afterenter", r), this.emit("beforeleave", r);
            }),
            this.animateHook(r, "leave", t, e),
            t.call(() => {
              this.detachView(r.fromElement), this.emit("afterleave", r);
            });
        }
        animateHook(t, e, r, s) {
          let o = [];
          for (let n of s) {
            let a = n[e];
            a instanceof Function &&
              o.push({
                dynamic: () => a(t) || y.noop(),
                config: { offset: -1 },
              });
          }
          o.length > 0 && r.add(() => y.timeline({ items: o }));
        }
        async preload(t) {
          return (
            typeof t == "string" && (t = ne(t)), !!(await this.findView(t))
          );
        }
        async render(t, e) {
          typeof t == "string" && (t = ne(t));
          let { view: r } = await this.findView(t);
          if (r) {
            if (
              (e?.keep !== !1 && this.keepViews.push(r), this.route.id !== t.id)
            )
              for (let [s, o] of Object.entries(e?.style || {})) r.style[s] = o;
            return this._outlet.append(r), !0;
          }
          return !1;
        }
        async navigate(t, e) {
          if (!t) return;
          let r = e?.trigger || "user",
            s = {
              outlet: this._outlet,
              fromElement: this.view,
              fromRoute: this._route,
              toRoute: t,
              trigger: r,
              flags: e?.flags || {},
            };
          if (Cr(this._route, t)) return 16;
          let o = s.fromElement,
            n = this._outlet.contains(o),
            a = { ...s, fromInDom: n },
            c = this.animations.filter((p) => (p.when ? p.when(s) : !0)),
            f = y.timeline({
              autoStart: !1,
              onComplete: () => {
                this.emit("navsettled", s), (this.changeStates = []);
              },
              onSeek: (p) => this.emit("navprogress", p),
              onStop: (p) => {
                if (
                  a.fromElement &&
                  !this.changeStates.some(
                    (_) =>
                      _.fromElement === a.fromElement ||
                      _.toElement === a.fromElement
                  )
                ) {
                  for (let _ of c) _.release && _.release(a.fromElement);
                  this.emit("afterrelease", s);
                }
                requestAnimationFrame(() => {
                  if (!f.complete && p) {
                    this.emit("navcancel", s);
                    for (let v of c) v.cancel && v.cancel(s);
                  }
                });
              },
            });
          (a.timeline = f),
            (this._route = t),
            this.emit("navstart", s),
            this.animateHook(s, "start", f, c);
          let { view: u, title: x } = await this.findView(t);
          document.title = x;
          for (let p of this.changeStates) p.timeline?.stop();
          if ((this.changeStates.push(a), !u)) return 8;
          let d = { toElement: u, fromInDom: n, ...s };
          (a.fromElement = o),
            (a.toElement = u),
            (this._view = u),
            this.animateCycle(f, c, d),
            this.trigger.update(u);
          for (let p of c) p.complete && f.call(() => p.complete?.(d));
          return (
            f.call(() => this.emit("navend", s)),
            f.start(),
            this.clearChangeStates([o, u]),
            1
          );
        }
        detachView(t) {
          t &&
            (this.keepViews.includes(t)
              ? (t.style.display = "none")
              : t.remove());
        }
        clearChangeStates(t) {
          for (let e of this.changeStates)
            t.includes(e.fromElement) || this.detachView(e.fromElement),
              t.includes(e.toElement) || this.detachView(e.toElement);
        }
        queryView(t) {
          return at(this.viewSelector, t);
        }
        async findView(t) {
          if (this.viewCache.has(t.id) && this.config.cache !== !1)
            return await this.viewCache.get(t.id);
          let e = this.load(t);
          return this.viewCache.set(t.id, e), await e;
        }
        async load(t) {
          this.abortController &&
            (this.abortController.abort(),
            (this.abortController = new AbortController()));
          let e = this.abortController?.signal,
            r = await fetch(t.load, { signal: e }),
            s = Lr(await r.text(), this.outletSelector);
          return { ...s, view: s.outlet ? this.queryView(s.outlet) : void 0 };
        }
        destroy() {
          this.trigger.clear(), this.unlisten();
        }
      });
  });
var kr = l(() => {
  "use strict";
});
var be = {};
fe(be, { fade: () => so });
var so,
  Pr = l(() => {
    "use strict";
    X();
    so = (i = {}) => ({
      name: i.name || "smoovy:fade",
      when: i.when,
      release: (t) => {
        (t.style.opacity = ""), (t.style.display = "");
      },
      append: ({ toElement: t }) => {
        (t.style.display = "none"),
          t.style.opacity === "" && (t.style.opacity = "0");
      },
      enter: ({ fromElement: t, fromInDom: e }) => {
        if (e && t.style.display !== "none")
          return y.to(
            t,
            { opacity: 0 },
            { duration: i.duration || 500, easing: i.easing }
          );
      },
      leave: ({ toElement: t, fromElement: e }) => (
        (t.style.display = ""),
        (e.style.display = "none"),
        y.to(
          t,
          { opacity: 1 },
          { duration: i.duration || 500, easing: i.easing }
        )
      ),
    });
  });
var gt = l(() => {
  "use strict";
  Or();
  kr();
  vi();
  Pr();
});
function yt(i, t, e, r) {
  var s = arguments.length,
    o =
      s < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, e)) : r,
    n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(i, t, e, r);
  else
    for (var a = i.length - 1; a >= 0; a--)
      (n = i[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, e, o) : n(t, e)) || o);
  return s > 3 && o && Object.defineProperty(t, e, o), o;
}
function xt(i, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, t);
}
function lt(i, t, e, r) {
  function s(o) {
    return o instanceof e
      ? o
      : new e(function (n) {
          n(o);
        });
  }
  return new (e || (e = Promise))(function (o, n) {
    function a(u) {
      try {
        f(r.next(u));
      } catch (x) {
        n(x);
      }
    }
    function c(u) {
      try {
        f(r.throw(u));
      } catch (x) {
        n(x);
      }
    }
    function f(u) {
      u.done ? o(u.value) : s(u.value).then(a, c);
    }
    f((r = r.apply(i, t || [])).next());
  });
}
var Wt = l(() => {});
var T,
  ht = l(() => {
    Wt();
    L();
    gt();
    T = class i extends k {
      get name() {
        return "router";
      }
      get child() {
        return i;
      }
      init() {
        return lt(this, void 0, void 0, function* () {
        
          let t = new we(this.config.routerConfig);
          t.animate(...(this.config.animations || [])),
            t.on(O.AFTER_ENTER, ({ toElement: e }) => {
              this.composer.update(e);
            }),
            this.resolve(t);
        });
      }
    };
    yt([Y(), xt("design:type", Nt)], T.prototype, "composer", void 0);
  });
function P(i, t) {
  return new gi({ target: i, ...(t || {}) });
}
function wt(i) {
  i.destroy();
}
var q,
  gi,
  Ar = l(() => {
    "use strict";
    mt();
    j();
    (q = class extends D {
      constructor(i) {
        super(),
          (this.config = i),
          (this.lastResize = 0),
          (this.visibilityTimer = -1),
          (this._left = 0),
          (this._top = 0),
          (this._width = 0),
          (this._height = 0),
       
          (this._visible = !1),
          (this._interecKey = "{}"),
          i.autoAttach !== !1 && this.attach();
      }
      static handleEntries(i, t, e) {
        i.forEach((r) => {
          let s = q.items.get(r.target);
          if (s) {
            e && (s = s.filter((o) => o.intersecKey === e));
            for (let o = 0, n = s.length; o < n; o++) t(s[o], r);
          }
        });
      }
      get resizeDebounce() {
        return this.config.resizeDebounce || 0;
      }
      get resizeDetection() {
        return this.config.resizeDetection;
      }
      get visibilityDelay() {
        return this.config.visibilityDelay || 0;
      }
      get visibilityThreshold() {
        return (
          (typeof this.config.visibilityDetection == "object" &&
            this.config.visibilityDetection.threshold) ||
          0
        );
      }
      get ref() {
        return this.config.target;
      }
      get visible() {
        return this._visible;
      }
      set visible(i) {
        i !== this._visible &&
          (clearTimeout(this.visibilityTimer),
          this.visibilityDelay > 0
            ? (this.visibilityTimer = setTimeout(
                () => this.emitVisibility(i),
                this.visibilityDelay
              ))
            : this.emitVisibility(i));
      }
      get left() {
        return this._left;
      }
      get top() {
        return this._top;
      }
      get x() {
        return this._left;
      }
      get y() {
        return this._top;
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
    
   
      get size() {
        return { width: this.width, height: this.height };
      }
      get pos() {
        return { left: this.left, top: this.top };
      }
      get coord() {
        return { x: this.left, y: this.top };
      }
      get intersecKey() {
        return this._interecKey;
      }
      attach() {
        let i = this.config;
        if (!(i.target instanceof HTMLElement) && !(i.target instanceof Window))
          throw new Error("target type is not valid: " + typeof i.target);
        if (
          (q.items.has(i.target)
            ? q.items.get(i.target)?.push(this)
            : q.items.set(i.target, [this]),
          i.visibilityDetection && i.target instanceof HTMLElement)
        ) {
          let e = q.intersecObservers,
            r = this.getIntersectionObserverConfig();
          (this._interecKey = this.getIdFromConfig(r)),
            e.has(this._interecKey) ||
              e.set(
                this._interecKey,
                new IntersectionObserver((s) => {
                  q.handleEntries(
                    s,
                    (o, n) => {
                      o.visible = n.isIntersecting;
                    },
                    this._interecKey
                  );
                }, r)
              ),
            (this.intersecObserver = e.get(this._interecKey)),
            this.intersecObserver?.observe(i.target);
        }
        i.resizeDetection &&
          (q.resizeObserver ||
            ((q.resizeObserver = new ResizeObserver((e) => {
              q.handleEntries(e, (r) => r.update());
            })),
            window &&
              window.addEventListener("resize", () => {
                q.items.forEach((e) => {
                  for (let r = 0, s = e.length; r < s; r++) {
                    let o = e[r];
                    if (o?.resizeDetection) {
                      let n =
                        typeof this.config.resizePeriods !== void 0
                          ? [250, 500]
                          : this.config.resizePeriods;
                      requestAnimationFrame(() => o.update()),
                        Array.isArray(n) &&
                          n.forEach((a) => {
                            setTimeout(() => o.update(), a);
                          });
                    }
                  }
                });
              })),
          i.target instanceof HTMLElement &&
            q.resizeObserver.observe(i.target, {
              ...(typeof i.resizeDetection == "object"
                ? i.resizeDetection
                : {}),
            }));
        let t =
          i.initUpdatePeriods !== void 0
            ? i.initUpdatePeriods
            : [50, 250, 500, 1e3];
        this.update(),
          requestAnimationFrame(() => this.update()),
          t.forEach((e) => setTimeout(() => this.update(), e));
      }
      onDimChange(i) {
        return this.on("dimensionschange", i);
      }
      onVisChange(i) {
        return this.on("visibilitychange", i);
      }
      onChange(i) {
        return w(this.onDimChange(i), this.onVisChange(i));
      }
      update() {
        let i = window.performance.now(),
          t;
        i - this.lastResize <= this.resizeDebounce ||
          ((this.lastResize = i),
          this.ref instanceof Window
            ? (t = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              })
            : this.config.useBounds !== !1
            ? (t = this.getElementOffset(this.ref))
            : (t = this.ref.getBoundingClientRect()),
          (t.left !== this._left ||
            t.top !== this._top ||
            t.width !== this._width ||
            t.height !== this._height) &&
            ((this._left = t.left),
            (this._top = t.top),
            (this._width = t.width),
            (this._height = t.height),
        
            this.emit("dimensionschange", this)));
      }
      destroy() {
        let i = q.items.get(this.ref);
        if (i) {
          let t = i.indexOf(this);
          t > -1 && i.splice(t, 1),
            this.ref instanceof HTMLElement &&
              (this.intersecObserver?.unobserve(this.ref),
              q.resizeObserver?.unobserve(this.ref)),
            i.length === 0 && q.items.delete(this.ref);
        }
      }
      emitVisibility(i) {
        (this._visible = i),
          i &&
            this.intersecObserver &&
            this.config.detectVisibilityOnce &&
            this.intersecObserver.unobserve(this.ref),
          this.emit("visibilitychange", this);
      }
      getIntersectionObserverConfig() {
        return {
          ...(typeof this.config.visibilityDetection == "object"
            ? this.config.visibilityDetection
            : {}),
        };
      }
      getIdFromConfig(i) {
        return JSON.stringify(i);
      }
      getElementOffset(i) {
        let t = 0,
          e = 0,
          r = i;
        do
          (t += r.offsetLeft || 0),
            (e += r.offsetTop || 0),
            (r = r.offsetParent);
        while (r);
        return {
          left: t,
          top: e,
          width: i.offsetWidth,
          height: i.offsetHeight,
        };
      }
    }),
      (gi = q);
    gi.items = new Map();
    gi.intersecObservers = new Map();
  });
var bt = l(() => {
  "use strict";
  Ar();
});
var G,
  Vt = l(() => {
    Wt();
    L();
    bt();
    G = class i extends k {
      get name() {
        return "viewport";
      }
      get child() {
        return i;
      }
      init() {
        return lt(this, void 0, void 0, function* () {
          let t = P(window, { resizeDetection: !0 });
          t.update(), this.resolve(t);
        });
      }
    };
  });
var yi,
  Dt,
  xi = l(() => {
    Wt();
    L();
    gt();
    ht();
    (yi = class {
      constructor() {
        this.scope = window;
      }
      enable() {
        let t = document.body.dataset.gtagId;
        if (t) {
          let e = `https://www.googletagmanager.com/gtag/js?id=${t}`,
            r = document.createElement("script"),
            s = document.createElement("script");
          (r.type = s.type = "text/javascript"),
            (r.async = !0),
            (r.src = e),
            (s.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${t}', { 'anonymize_ip': true });
      `),
            document.head.append(r, s);
        }
      }
      track(...t) {
        this.scope.dataLayer || (this.scope.dataLayer = []),
          this.scope.dataLayer.push(t);
      }
    }),
      (Dt = class i extends k {
        get name() {
          return "tracker";
        }
        get child() {
          return i;
        }
        init() {
          return lt(this, void 0, void 0, function* () {
            let t = new yi();
            if (this.router.activated) {
              let e = yield this.router;
              t.track("event", "page_view", { page_path: e.route.url }),
                e.on(O.NAV_START, (r) => {
                  t.track("event", "page_view", { page_path: r.toRoute.url });
                });
            }
            this.resolve(t);
          });
        }
      });
    yt([m(T), xt("design:type", T)], Dt.prototype, "router", void 0);
  });
var wi,
  oo,
  _e,
  Rr = l(() => {
    "use strict";
    mt();
    j();
    (wi = ((i) => ((i.DELTA = "delta"), i))(wi || {})),
      (oo = {
        eventTarget: window,
        pointerEvents: !1,
        touchDeltaMultiplier: 1,
        touchVelocityMultiplier: 20,
        pointerDeltaMultiplier: 1,
        pointerVelocityMultiplier: 25,
      }),
      (_e = class extends D {
        constructor(t) {
          super(),
            (this.down = !1),
            (this.velocity = { x: 0, y: 0 }),
            (this.startPos = { x: 0, y: 0 }),
            (this.config = { ...oo, ...t });
        }
        getPosition(t) {
          return t instanceof MouseEvent
            ? { pageX: t.pageX, pageY: t.pageY }
            : t.targetTouches
            ? t.targetTouches[0]
            : t;
        }
        listen() {
          let { pointerEvents: t, eventTarget: e } = this.config;
          return w(
            g(e, "touchstart", (r) => this.handleStart(r), { passive: !1 }),
            g(e, "touchmove", (r) => this.handleMove(r), { passive: !1 }),
            g(e, "touchend", () => this.handleEnd(), { passive: !1 }),
            t
              ? w(
                  g(e, "mousedown", (r) => this.handleStart(r, !0)),
                  g(e, "mousemove", (r) => this.handleMove(r, !0)),
                  g(e, ["mouseup", "mousecancel"], () => this.handleEnd())
                )
              : void 0
          );
        }
        handleStart(t, e = !1) {
          if (e && t instanceof MouseEvent && t.button !== 0) return;
          let r = this.getPosition(t);
          (this.startPos.x = r.pageX),
            (this.startPos.y = r.pageY),
            (this.down = !0);
        }
        handleEnd() {
          let t =
            Math.abs(this.velocity.x) > 0 || Math.abs(this.velocity.y) > 0;
          this.down &&
            t &&
            (this.emit("delta", this.velocity),
            requestAnimationFrame(() => {
              (this.velocity.x = 0), (this.velocity.y = 0);
            })),
            (this.down = !1);
        }
        handleMove(t, e = !1) {
          if (this.down) {
            t.preventDefault();
            let r = this.getPosition(t),
              s = { x: 0, y: 0 },
              {
                touchDeltaMultiplier: o,
                touchVelocityMultiplier: n,
                pointerDeltaMultiplier: a,
                pointerVelocityMultiplier: c,
              } = this.config,
              f = e ? a : o,
              u = e ? c : n;
            (s.x = (this.startPos.x - r.pageX) * f),
              (s.y = (this.startPos.y - r.pageY) * f),
              (this.velocity.x = (this.startPos.x - r.pageX) * u),
              (this.velocity.y = (this.startPos.y - r.pageY) * u),
              (this.startPos.x = r.pageX),
              (this.startPos.y = r.pageY),
              this.emit("delta", s);
          }
        }
      });
  });
var Zt,
  no,
  bi,
  Ee,
  _i = l(() => {
    "use strict";
    mt();
    j();
    dt();
    C();
    Rr();
    (Zt = ((i) => (
          (i.RESIZE = "resize"),
      (i.VIRTUAL = "virtual"),
      (i.LOCK = "lock"),
      i
    ))(Zt || {})),
      (no = {
        " ": { y: 55.875 },
        ArrowLeft: { x: -2.5 },
        ArrowRight: { x: 2.5 },
        ArrowDown: { y: 2.5 },
        ArrowUp: { y: -2.5 },
        PageDown: { y: 55.875 },
        PageUp: { y: -55.875 },
        Home: { y: -1 / 0 },
        End: { y: 1 / 0 },
      }),
      (bi = {
        autoStart: !0,
        frequency: 60,
        wheelMultiplier: 1,
        pointerEvents: !1,
        pointerMultiplier: 1,
        pointerVelocity: 25,
        touchMultiplier: 1,
        touchVelocity: 20,
        keyboardEvents: !0,
        touchEvents: !0,
        threshold: 0.001,
        lineHeight: 16,
        damping: 0.1,
      }),
      (Ee = class extends D {
        constructor(t = {}, e = !0) {
          super(),
            (this.virtual = { x: 0, y: 0 }),
            (this.output = { x: 0, y: 0 }),
            (this.animating = !1),
            (this.locks = { controls: new Set(), position: new Set() }),
            (this.config = { ...bi, ...t }),
            e && this.init();
        }
        init() {
          this.update(), this.config.autoStart && this.start();
        }
        start() {
          this.stop(), (this.ticker = R.main.add((t) => this.tick(t)));
        }
        onScroll(t) {
          return this.on("scroll", t);
        }
        onVirtual(t) {
          return this.on("virtual", t);
        }
        onLock(t) {
          return this.on("lock", t);
        }
        stop() {
          this.ticker && (this.ticker.kill(), delete this.ticker);
        }
        update() {
          return (
            this.unlisten && this.unlisten(),
            (this.inertia = new _e({
              pointerEvents: this.config.pointerEvents,
              pointerDeltaMultiplier: this.config.pointerMultiplier,
              pointerVelocityMultiplier: this.config.pointerVelocity,
              touchDeltaMultiplier: this.config.touchMultiplier,
              touchVelocityMultiplier: this.config.touchVelocity,
              ...(this.config.inertiaTarget
                ? { eventTarget: this.config.inertiaTarget }
                : {}),
            })),
            (this.unlisten = this.listen()),
            this
          );
        }
        get wheelTarget() {
          return this.config.wheelTarget || window;
        }
        get viewWidth() {
          return this.config.lineHeight * 24;
        }
        get viewHeight() {
          return this.config.lineHeight * 24;
        }
        listen() {
          return w(
            this.inertia.listen(),
            this.inertia.on(wi.DELTA, (t) => this.handleInertia(t)),
            g(this.wheelTarget, "wheel", (t) => this.handleWheel(t), {
              passive: !1,
            }),
            g(window, "keydown", (t) => this.handleKeyboard(t))
          );
        }
        tick(t = 1) {
          let e = Be(Math.abs(this.virtual.x - this.output.x), 4),
            r = Be(Math.abs(this.virtual.y - this.output.y), 4),
            s = this.config.threshold;
          if (((this.animating = e > s || r > s), this.animating)) {
            let o = this.config.damping * this.config.frequency;
            (this.output.x = Ge(this.output.x, this.virtual.x, o, t * 0.001)),
              (this.output.y = Ge(this.output.y, this.virtual.y, o, t * 0.001)),
              this.handleScroll(this.output);
          }
        }
        handleInertia(t) {
          this.addVirtual(t.x, t.y);
        }
        handleScroll(t = this.output) {
          this.emit("scroll", t);
        }
        handleKeyboard(t) {
          if (this.locks.controls.size > 0) return;
          let e = no[t.key];
          if (!e) return;
          let { lineHeight: r } = this.config,
            s = this.virtual.x + (e.x ? r * e.x : 0),
            o = this.virtual.y + (e.y ? r * e.y : 0);
          this.setVirtual(s, o);
        }
        handleWheel(t) {
          if (
            t.ctrlKey ||
            (t.preventDefault(),
            t.stopPropagation(),
            this.locks.controls.size > 0)
          )
            return;
          let { deltaX: e, deltaY: r, deltaMode: s } = t,
            { wheelMultiplier: o, lineHeight: n } = this.config;
          s === 1
            ? ((e *= n), (r *= n))
            : s === 2 && ((e *= this.viewWidth), (r *= this.viewHeight)),
            (e *= o),
            (r *= o),
            this.addVirtual(e, r);
        }
        addVirtual(t = 0, e = 0) {
          this.setVirtual(this.virtual.x + t, this.virtual.y + e);
        }
        setVirtual(t, e) {
          this.locks.position.size > 0 ||
            (typeof t < "u" && (this.virtual.x = t),
            typeof e < "u" && (this.virtual.y = e),
            this.emit("virtual", this.virtual));
        }
        scrollTo(t, e = !1) {
          this.setVirtual(t.x, t.y),
            e &&
              ((this.output.x = this.virtual.x),
              (this.output.y = this.virtual.y),
              this.handleScroll());
        }
        isLocked(t) {
          return t
            ? this.locks[t]
              ? this.locks[t].size > 0
              : !1
            : Object.values(this.locks).reduce((e, r) => e + r.size, 0) > 0;
        }
        lock(t = !0, e = "_") {
          for (let r in this.locks) {
            let s = r,
              o = this.locks[s];
            typeof t == "boolean"
              ? t
                ? o.add(e)
                : o.delete(e)
              : t[s] === !0
              ? o.add(e)
              : t[s] === !1 && o.delete(e);
          }
          this.emit("lock", { locked: this.isLocked() });
        }
        destroy() {
          this.unlisten && (this.unlisten(), delete this.unlisten),
            this.ticker && this.ticker.kill();
        }
      });
  });
var B,
  Ei,
  I,
  _t = l(() => {
    "use strict";
    L();
    mt();
    j();
    _i();
    Lt();
    (B = ((e) => (
      (e[(e.OUTPUT = Zt.SCROLL)] = "OUTPUT"),
      (e[(e.VIRTUAL = Zt.VIRTUAL)] = "VIRTUAL"),
      e
    ))(B || {})),
      (Ei = class extends D {
        constructor() {
          super(),
            F() &&
              g(window, "scroll", () => {
                let t = { x: window.scrollX, y: window.scrollY };
                this.emit(B.OUTPUT, t), this.emit(B.VIRTUAL, t);
              });
        }
      }),
      (I = class i extends k {
        get name() {
          return "scroll-emitter";
        }
        get child() {
          return i;
        }
        async init() {
          this.resolve(new Ei());
        }
      });
  });
function It() {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function Vr(i, t) {
  let e = Math.cos(i.x * 0.5),
    r = Math.sin(i.x * 0.5),
    s = Math.cos(i.y * 0.5),
    o = Math.sin(i.y * 0.5),
    n = Math.cos(i.z * 0.5),
    a = Math.sin(i.z * 0.5);
  return (
    (t.x = r * s * n - e * o * a),
    (t.y = e * o * n + r * s * a),
    (t.z = e * s * a - r * o * n),
    (t.w = e * s * n + r * o * a),
    t
  );
}
function Dr(i, t, e, r, s = i) {
  let o = e.x,
    n = e.y,
    a = e.z,
    c = e.w,
    f = o + o,
    u = n + n,
    x = a + a,
    d = o * f,
    p = o * u,
    v = o * x,
    _ = n * u,
    st = n * x,
    ot = a * x,
    ft = c * f,
    Yt = c * u,
    Ht = c * x;
  return (
    (s[0] = (1 - (_ + ot)) * t.x),
    (s[1] = (p + Ht) * t.x),
    (s[2] = (v - Yt) * t.x),
    (s[3] = 0),
    (s[4] = (p - Ht) * t.y),
    (s[5] = (1 - (d + ot)) * t.y),
    (s[6] = (st + ft) * t.y),
    (s[7] = 0),
    (s[8] = (v + Yt) * t.z),
    (s[9] = (st - ft) * t.z),
    (s[10] = (1 - (d + _)) * t.z),
    (s[11] = 0),
    (s[12] = r.x),
    (s[13] = r.y),
    (s[14] = r.z),
    (s[15] = 1),
    s
  );
}
function Ir(i, t, e, r, s = It()) {
  let o = 1 / Math.tan(i / 2);
  if (
    ((s[0] = o / t),
    (s[5] = o),
    (s[11] = -1),
    (s[1] = s[2] = s[3] = s[4] = s[6] = 0),
    (s[7] = s[8] = s[9] = s[15] = 0),
    r !== void 0 && r !== 1 / 0)
  ) {
    let n = 1 / (e - r);
    (s[10] = (r + e) * n), (s[14] = 2 * r * e * n);
  } else (s[10] = -1), (s[14] = -2 * e);
  return s;
}
var ae = l(() => {
  "use strict";
});
var Kt,
  Se = l(() => {
    "use strict";
    ae();
    Kt = class {
      constructor() {
        (this.position = Object.seal({ x: 0, y: 0, z: 0 })),
          (this.rotation = Object.seal({ x: 0, y: 0, z: 0 })),
          (this.scaling = Object.seal({ x: 1, y: 1, z: 1 })),
          (this.quaternion = Object.seal({ x: 0, y: 0, z: 0, w: 1 })),
          (this._model = It()),
          (this.state = 3);
      }
      set x(t) {
        this.position.x = t;
      }
      get x() {
        return this.position.x;
      }
      set y(t) {
        this.position.y = t;
      }
      get y() {
        return this.position.y;
      }
      set z(t) {
        this.position.z = t;
      }
      get z() {
        return this.position.z;
      }
      set scaleX(t) {
        this.scaling.x = t;
      }
      get scaleX() {
        return this.scaling.x;
      }
      set scaleY(t) {
        this.scaling.y = t;
      }
      get scaleY() {
        return this.scaling.y;
      }
      set scaleZ(t) {
        this.scaling.z = t;
      }
      get scaleZ() {
        return this.scaling.z;
      }
      set rotationX(t) {
        this.rotation.x = t;
      }
      get rotationX() {
        return this.rotation.x;
      }
      set rotationY(t) {
        this.rotation.y = t;
      }
      get rotationY() {
        return this.rotation.y;
      }
      set rotationZ(t) {
        this.rotation.z = t;
      }
      get rotationZ() {
        return this.rotation.z;
      }
      get model() {
        return this._model;
      }
      updateModelState() {
        let t = this.position,
          e = this.rotation,
          r = this.scaling;
        this.state = t.x + t.y + t.z + e.x + e.y + e.z + r.x + r.y + r.z;
      }
      updateModel() {
        let t = this.state;
        this.updateModelState(),
          t !== this.state &&
            (this.modelWillUpdate(),
            Dr(
              this._model,
              this.scaling,
              Vr(this.rotation, this.quaternion),
              this.position
            ));
      }
      modelWillUpdate() {}
    };
  });
var Qt,
  Te = l(() => {
    "use strict";
    C();
    ae();
    Se();
    Qt = class extends Kt {
      constructor(t = {}, e) {
        super(),
          (this.size = { width: 0, height: 0 }),
          (this.view = { width: 1, height: 1 }),
          (this._projection = It()),
          (this.config = { near: 0.1, far: 100, fov: 45, posZ: -3, ...t }),
          (this.position.z = this.config.posZ),
          this.updateView(e?.width, e?.height);
      }
      get projection() {
        return this._projection;
      }
      cw(t) {
        return (t / this.view.width) * this.size.width;
      }
      ch(t) {
        return (t / this.view.height) * this.size.height;
      }
      cx(t, e = 0) {
        let r = (this.config.fov * Math.PI) / 180,
          s = this.view.width / this.view.height,
          n = 2 * Math.tan(r / 2) * Math.abs(this.position.z + e) * s * 0.5,
          a = (t / this.view.width) * 2 - 1;
        return z(a, -1, 1, -n, n);
      }
      cy(t, e = 0) {
        let r = (this.config.fov * Math.PI) / 180,
          s = 2 * Math.tan(r / 2) * Math.abs(this.position.z + e) * 0.5,
          o = (t / this.view.height) * -1 * 2 + 1;
        return z(o, -1, 1, -s, s);
      }
      draw() {
        this.updateModel();
      }
      updateView(t, e) {
        typeof t == "number" && (this.view.width = t),
          typeof e == "number" && (this.view.height = e);
        let { near: r, far: s } = this.config,
          o = (this.config.fov * Math.PI) / 180,
          n = this.view.width / this.view.height;
        (this.size.height = 2 * Math.tan(o / 2) * Math.abs(this.position.z)),
          (this.size.width = this.size.height * n),
          (this._projection = Ir(o, n, r, s));
      }
    };
  });
function Fr(i) {
  if (i instanceof HTMLCanvasElement) return i;
  if (typeof i == "string") return document.querySelector(i);
  let t = document.createElement("canvas");
  return document.body.prepend(t), t;
}
function Ti(i, t, e) {
  let r = i.createShader(t);
  if (!r) throw new Error("failed to create shader");
  if (
    (i.shaderSource(r, e),
    i.compileShader(r),
    !i.getShaderParameter(r, i.COMPILE_STATUS))
  ) {
    let s = i.getShaderInfoLog(r);
    throw (i.deleteShader(r), new Error(`shader compile failed: ${s}`));
  }
  return r;
}
function Yr(i) {
  if (Qe(i) && !(i instanceof Float32Array || i instanceof Int32Array))
    if ("x" in i && "y" in i) {
      let t = i,
        e = [t.x, t.y];
      return (
        typeof t.z == "number" && e.push(t.z),
        typeof t.w == "number" && e.push(t.w),
        e
      );
    } else if ("width" in i && "height" in i) {
      let t = i;
      return [t.width, t.height];
    } else if ("r" in i && "g" in i && "b" in i) {
      let t = i,
        e = [t.r || 0, t.g || 0, t.b || 0];
      return "a" in t && e.push(t.a || 1), e;
    } else return Object.values(i);
  return i;
}
function Hr(i, t) {
  if (typeof i == "number") return `1${t === "i" ? "i" : "f"}`;
  if (Array.isArray(i) || i instanceof Float32Array) {
    let e = i.length;
    if (e <= 4 && e >= 2) return t === "m2" ? "Matrix2fv" : `${e}fv`;
    if (e === 9) return "Matrix3fv";
    if (e === 16) return "Matrix4fv";
  }
}
function Mi(i, t = !0, e = !0) {
  let r = `${t ? "c" : ""}${i.x}${i.y}`;
  if (e && Si[r]) return new Float32Array(Si[r]);
  let s = 1,
    o = 1,
    n = t ? -s * 0.5 : 0,
    a = t ? -o * 0.5 : 0,
    c = s / i.x,
    f = o / i.y,
    u = new Float32Array(18 * i.x * i.y),
    x = 0;
  for (let d = 0; d < i.y; d++) {
    let p = a + f * d;
    for (let v = 0; v < i.x; v++) {
      let _ = n + c * v;
      u.set(
        [
          _,
          p + f,
          0,
          _,
          p,
          0,
          _ + c,
          p + f,
          0,
          _ + c,
          p,
          0,
          _ + c,
          p + f,
          0,
          _,
          p,
          0,
        ],
        x
      ),
        (x += 18);
    }
  }
  return e && (Si[r] = u), new Float32Array(u);
}
function ce(i, t = !0) {
  !jr[i] && t && ((jr[i] = !0), console.warn(i));
}
var Si,
  jr,
  le = l(() => {
    "use strict";
    C();
    Si = {};
    jr = {};
  });
var Me,
  zi = l(() => {
    "use strict";
    le();
    Me = class {
      constructor(t, e, r) {
        if (
          ((this.gl = t),
          (this.buffers = {}),
          (this.attribs = {}),
          (this.uniforms = {}),
          (this.bound = !1),
          (this.vertex = Ti(t, t.VERTEX_SHADER, e)),
          (this.fragment = Ti(t, t.FRAGMENT_SHADER, r)),
          (this._program = t.createProgram()),
          t.attachShader(this._program, this.vertex),
          t.attachShader(this._program, this.fragment),
          t.linkProgram(this._program),
          !t.getProgramParameter(this._program, t.LINK_STATUS))
        ) {
          let s = t.getProgramInfoLog(this._program);
          throw new Error(`Error while creating shader program: ${s}`);
        }
        t.detachShader(this.program, this.vertex),
          t.detachShader(this.program, this.fragment),
          t.deleteShader(this.vertex),
          t.deleteShader(this.fragment);
      }
      bind() {
        this.gl.useProgram(this._program), (this.bound = !0);
      }
      unbind() {
        this.gl.useProgram(null), (this.bound = !1);
      }
      enableAttribs() {
        let t = this.gl,
          e = 0;
        for (let r in this.attribs) {
          let {
            buffer: s,
            size: o,
            location: n,
            count: a,
            type: c,
            stride: f,
            norm: u,
            offset: x,
          } = this.attribs[r];
          if (n === -1) {
            ce(`couldn't find attribute "${r}" in shader`);
            continue;
          }
          t.bindBuffer(t.ARRAY_BUFFER, s),
            t.enableVertexAttribArray(n),
            t.vertexAttribPointer(n, o, c, u, f, x),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            (e += a);
        }
        return e;
      }
      uniform(t, e, r, s = !0) {
        let o = this.gl;
        if (
          (this.uniforms[t] ||
            ((this.uniforms[t] = o.getUniformLocation(this._program, t)),
            this.uniforms[t] || ce(`couldn't find uniform ${t}`, s)),
          e && this.bound)
        ) {
          let n = Yr(e),
            a = Hr(n, r);
          if (!a) ce(`couldn't parse uniform method for ${t}`);
          else {
            let c = `uniform${a}`,
              f = this.uniforms[t];
            a.startsWith("Matrix") ? o[c](f, !1, n) : o[c](f, n);
          }
        } else
          e && !this.bound && ce(`program not bound, can't set uniform ${t}`);
        return this.uniforms[t];
      }
      attribute(
        t,
        e,
        r = 3,
        s = e instanceof Float32Array ? e.length / r : 0,
        o = !1,
        n = this.gl.FLOAT,
        a = 0,
        c = 0
      ) {
        this.attribs[t] = {
          location: this.gl.getAttribLocation(this._program, t),
          buffer: e instanceof Float32Array ? this.bufferData(t, e) : e,
          count: s,
          norm: o,
          offset: c,
          stride: a,
          size: r,
          type: n,
        };
      }
      bufferData(t, e) {
        let r = this.gl;
        return (
          (this.buffers[t] = this.buffers[t] || r.createBuffer()),
          r.bindBuffer(r.ARRAY_BUFFER, this.buffers[t]),
          r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW),
          r.bindBuffer(r.ARRAY_BUFFER, null),
          this.buffers[t]
        );
      }
      get program() {
        return this._program;
      }
      destroy() {
        let t = this.gl;
        for (let e of Object.values(this.attribs))
          t.disableVertexAttribArray(e.location);
        for (let e in this.buffers) t.deleteBuffer(this.buffers[e]);
        (this.attribs = {}), (this.buffers = {});
      }
    };
  });
var Ur,
  Xr,
  Jt,
  ze,
  jt,
  Le = l(() => {
    "use strict";
    dt();
    C();
    (Ur = class {
      static load(i) {
        let t = Ur.images;
        if (t.has(i)) return t.get(i);
        let e = new Image();
        (e.src = i), (e.crossOrigin = "anonymous");
        let r = new Promise((s, o) => {
          e.addEventListener("error", (n) => o(n)),
            e.addEventListener("load", () => s(e));
        });
        return t.set(i, r), r;
      }
    }),
      (Xr = Ur);
    Xr.images = new Map();
    (Jt = class {
      constructor(t, e) {
        (this.gl = t),
          (this.config = e),
          (this.resolver = new tt()),
          (this.texture = t.createTexture());
      }
      bind(t = 0, e) {
        let r = this.gl;
        r.activeTexture(r.TEXTURE0 + t),
          r.bindTexture(r.TEXTURE_2D, this.texture),
          e && r.uniform1i(e, t);
      }
      unbind(t = 0) {
        let e = this.gl;
        e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, null);
      }
      upload(t) {
        let e = this.gl,
          r = this.config,
          s = r.wrapS || e.CLAMP_TO_EDGE,
          o = r.wrapT || e.CLAMP_TO_EDGE,
          n = r.minFilter || e.LINEAR;
        e.bindTexture(e.TEXTURE_2D, this.texture),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, s),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, o),
          e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, r.unpackFlip !== !1),
          e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
          e.bindTexture(e.TEXTURE_2D, null),
          this.resolver.completed || this.resolver.resolve(!0);
      }
      get uploaded() {
        return this.resolver.promise;
      }
      destroy() {}
    }),
      (ze = class extends Jt {
        constructor(t, e) {
          super(t, e), e.load !== !1 && this.load();
        }
        load() {
          Xr.load(this.config.src).then((t) => {
            this.upload(t);
          });
        }
      }),
      (jt = class extends Jt {
        constructor(t, e) {
          if (
            (super(t, e),
            (this.rvfcSupported = !1),
            e.src instanceof HTMLVideoElement
              ? (this.video = e.src)
              : ((this.video = document.createElement("video")),
                (this.video.muted = !0),
                (this.video.src = e.src)),
            (this.rvfcSupported = "requestVideoFrameCallback" in this.video),
            (this.updateVideoCbRVFC = this.updateVideoRVFC.bind(this)),
            this.rvfcSupported)
          )
            this.video.requestVideoFrameCallback(() => this.updateVideoRVFC()),
              R.main.add((r, s, o) => {
                this.video.readyState >= this.video.HAVE_CURRENT_DATA &&
                  (this.updateVideo(), o());
              });
          else {
            let r = !0;
            R.main.add(() => {
              let s = this.video.readyState >= this.video.HAVE_CURRENT_DATA;
              ((s && !this.video.paused) || (s && r)) &&
                ((r = !1), this.updateVideo());
            });
          }
        }
        updateVideoRVFC() {
          this.updateVideo(),
            this.video.requestVideoFrameCallback(this.updateVideoCbRVFC);
        }
        updateVideo() {
          let t = this.gl,
            e = this.video;
          this.resolver.completed
            ? (t.bindTexture(t.TEXTURE_2D, this.texture),
              t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e),
              t.bindTexture(t.TEXTURE_2D, null))
            : this.upload(e);
        }
      });
  });
var Li,
  Ci,
  Ce = l(() => {
    "use strict";
    C();
    ae();
    Se();
    zi();
    Le();
    (Li = class extends Kt {
      constructor(i, t) {
        if (
          (super(),
          (this.gl = i),
          (this.config = t),
          (this.disables = new Set()),
          (this.screenPosition = {}),
          (this.textures = new Map()),
          (this.rawPosition = { x: 0, y: 0 }),
          !t.vertex || !t.fragment)
        )
          throw new Error("vertex and fragment shader required");
        (this.x = t.x || 0),
          (this.y = t.y || 0),
          (this.z = t.z || 0),
          (this.program = new Me(i, t.vertex, t.fragment)),
          this.initTextures();
      }
      initTextures() {
        let i = this.config.texture;
        if (i) {
          this.config.hideOnLoad !== !1 && this.disable("texture");
          let t = [];
          if (i instanceof Jt)
            this.textures.set(i, [this.program.uniform("u_texture"), 0]),
              t.push(i.uploaded);
          else {
            let e = 0;
            for (let [r, s] of Object.entries(i)) {
              let o = r.charAt(0).toUpperCase() + r.slice(1),
                a = `u_texture${r.toLowerCase() !== "default" ? `${o}` : ""}`;
              this.textures.set(s, [this.program.uniform(a), e++]),
                t.push(s.uploaded);
            }
          }
          this.config.hideOnLoad !== !1 &&
            Promise.all(t).then(() => this.enable("texture"));
        }
      }
      get disabled() {
        return this.disables.size > 0;
      }
      get mode() {
        return this.config.mode || this.gl.TRIANGLES;
      }
      get uniforms() {
        return this.config.uniforms || {};
      }
      get camera() {
        return this.config.camera;
      }
      get centerX() {
        return 0;
      }
      get centerY() {
        return 0;
      }
      screenX(i = 0) {
        return this.camera.cx(i, this.z) + this.camera.cw(this.centerX);
      }
      screenY(i = 0) {
        return this.camera.cy(i, this.z) - this.camera.ch(this.centerY);
      }
      set y(i) {
        (this.rawPosition.y = i),
          this.config.screen
            ? ((this.screenPosition.y = i), (this.config.y = i))
            : ((this.position.y = i - this.centerY),
              (this.config.y = i - this.centerY));
      }
      get y() {
        return this.rawPosition.y;
      }
      set x(i) {
        (this.rawPosition.x = i),
          this.config.screen
            ? ((this.screenPosition.x = i), (this.config.x = i))
            : ((this.position.x = i - this.centerX),
              (this.config.x = this.position.x));
      }
      get x() {
        return this.rawPosition.x;
      }
      updateGeometry() {}
      bind() {
        this.program.bind();
      }
      updateModel() {
        if (this.config.screen) {
          let { x: i, y: t } = this.screenPosition;
          Ke(i) &&
            ((this.position.x = this.screenX(i)), delete this.screenPosition.x),
            Ke(t) &&
              ((this.position.y = this.screenY(t)),
              delete this.screenPosition.y);
        }
        super.updateModel();
      }
      draw(i = 0, t = {}) {
        this.updateModel();
        let e = this.program,
          r = this.config.camera,
          s = r?.model || Li.defaultViewProj,
          o = r?.projection || Li.defaultViewProj;
        if (
          (e.uniform("u_time", i, "f", !1),
          e.uniform("u_res", r.view, "v2", !1),
          e.uniform("u_proj", o, "m4", !1),
          e.uniform("u_view", s, "m4", !1),
          e.uniform("u_model", this.model, "m4", !1),
          (t = { ...t, ...this.config.uniforms }),
          t)
        ) {
          let n = this.config.uniformTypes || {},
            a = this.config.uniformOptionals || {};
          for (let [c, f] of Object.entries(t)) {
            let u = n[c],
              x = !a[c];
            e.uniform(c, f, u, x);
          }
        }
        for (let [n, [a, c]] of this.textures) n.bind(c, a);
        this.beforeDraw(),
          this.gl.drawArrays(this.mode, 0, this.program.enableAttribs()),
          this.afterDraw();
      }
      beforeDraw() {}
      afterDraw() {}
      unbind() {
        this.program.unbind();
      }
      disable(i = "_") {
        this.disables.has(i) || this.disables.add(i);
      }
      enable(i = "_", t = !0) {
        t ? this.disables.delete(i) : this.disable(i);
      }
      destroy() {
        this.program.destroy();
      }
    }),
      (Ci = Li);
    Ci.defaultViewProj = It();
  });
var Oe,
  Oi = l(() => {
    "use strict";
    dt();
    Te();
    Oe = class {
      constructor(
        t,
        e,
        r = R.main,
        s = 100,
        o,
        n = { width: 0, height: 0 },
        a
      ) {
        (this.gl = t),
          (this.meshes = e),
          (this.ticker = r),
          (this.order = s),
          (this.uniforms = a),
          (this.cameras = {}),
          (this.cameras.main = new Qt(o, n));
      }
      get camera() {
        return this.cameras.main;
      }
      start() {
        this.ticker.add((t, e) => this.render(e / 1e3), this.order);
      }
      addCamera(t, e) {
        return (this.cameras[t] = e), e;
      }
      getCamera(t) {
        return this.cameras[t];
      }
      removeCamera(t) {
        delete this.cameras[t];
      }
      resize(t, e, r = 1) {
        this._resize = { width: t * r, height: e * r };
      }
      handleResize() {
        if (this._resize) {
          let { width: t, height: e } = this._resize,
            r = this.gl;
          (r.canvas.width = t), (r.canvas.height = e), r.viewport(0, 0, t, e);
          for (let s of Object.values(this.cameras)) s.updateView(t, e);
          for (let s of this.meshes) s.updateGeometry();
          delete this._resize;
        }
      }
      render(t = R.now()) {
        let e = this.gl;
        this.handleResize(), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
        for (let r of Object.values(this.cameras)) r.draw();
        for (let r of this.meshes.filter((s) => !s.disabled))
          r.bind(), r.draw(t, this.uniforms), r.unbind();
      }
    };
  });
var qr = l(() => {
  "use strict";
});
var ki,
  Pi = l(() => {
    "use strict";
    ki = {
      vertex: `#version 300 es
    in vec4 a_position;
    in vec3 a_normal;
    uniform mat4 u_proj;
    uniform mat4 u_view;
    uniform mat4 u_model;

    out vec3 v_normal;

    void main() {
      v_normal = a_normal;
      gl_Position = u_proj * u_view * u_model * a_position;
    }
  `,
      fragment: `#version 300 es
    precision mediump float;

    in vec3 v_normal;
    out vec4 fragColor;
    uniform vec4 u_color;
    uniform vec3 u_light;

    void main() {
      vec3 normal = normalize(v_normal);
      vec3 light = normalize(u_light);

      float intensity = dot(normal, light);

      fragColor = u_color;
      fragColor.rgb *= intensity;
    }
  `,
    };
  });
var Ai,
  Ri = l(() => {
    "use strict";
    Ai = {
      vertex: `#version 300 es
    in vec4 a_position;
    in vec2 a_texcoord;
    uniform float u_time;
    uniform mat4 u_proj;
    uniform mat4 u_view;
    uniform mat4 u_model;

    out vec2 v_texcoord;

    void main() {
      gl_Position = u_proj * u_view * u_model * a_position;
      v_texcoord = a_texcoord;
    }
  `,
      fragment: `#version 300 es
    precision mediump float;

    uniform sampler2D u_texture;
    uniform float u_alpha;
    out vec4 fragColor;
    in vec2 v_texcoord;

    void main() {
      vec4 color = texture(u_texture, v_texcoord);

      color.a *= u_alpha;

      fragColor = color;
    }
  `,
    };
  });
var ke,
  Vi = l(() => {
    "use strict";
    C();
    Ce();
    Pi();
    Ri();
    le();
    ke = class extends Ci {
      constructor(t, e) {
        let r = e.uniforms || {};
        typeof r.u_color > "u" && (r.u_color = [1, 0, 0, 1]),
          typeof r.u_alpha > "u" && (r.u_alpha = 1),
          super(t, {
            vertex: e.texture ? Ai.vertex : ki.vertex,
            fragment: e.texture ? Ai.fragment : ki.fragment,
            ...e,
            uniforms: r,
            uniformOptionals: {
              u_color: !0,
              u_alpha: !0,
              ...(e.uniformOptionals || {}),
            },
          }),
          (this.gl = t),
          this.updateGeometry();
      }
      set originX(t) {
        (this.config.originX = t), (this.x = this.rawPosition.x);
      }
      get originX() {
        let { originX: t } = this.config;
        return typeof t == "number" ? t : 0.5;
      }
      set originY(t) {
        (this.config.originY = t), (this.y = this.rawPosition.y);
      }
      get originY() {
        let { originY: t } = this.config;
        return typeof t == "number" ? t : 0.5;
      }
      get centerX() {
        let { screen: t, width: e } = this.config,
          r = z(this.originX, 0, 1, -0.5, 0.5);
        return t && (r *= -1), (e || 0) * r;
      }
      get centerY() {
        return (this.config.height || 0) * z(this.originY, 0, 1, 0.5, -0.5);
      }
      get density() {
        let { density: t } = this.config;
        return typeof t == "number" ? { x: t, y: t } : t || { x: 1, y: 1 };
      }
      set width(t) {
        this.config.width !== t &&
          ((this.config.width = t), this.updateGeometry());
      }
      get width() {
        let t = this.config.width;
        return this.config.screen
          ? this.camera.cw(t || 0)
          : typeof t == "number"
          ? t
          : 1;
      }
      set height(t) {
        this.config.height !== t &&
          ((this.config.height = t), this.updateGeometry());
      }
      get height() {
        let t = this.config.height;
        return this.config.screen
          ? this.camera.ch(t || 0)
          : typeof t == "number"
          ? t
          : 1;
      }
      scaleVertices(t, e, r) {
        for (let s = 0, o = t.length; s < o; s += 18)
          (t[s] *= e),
            (t[s + 1] *= r),
            (t[s + 3] *= e),
            (t[s + 4] *= r),
            (t[s + 6] *= e),
            (t[s + 7] *= r),
            (t[s + 9] *= e),
            (t[s + 10] *= r),
            (t[s + 12] *= e),
            (t[s + 13] *= r),
            (t[s + 15] *= e),
            (t[s + 16] *= r);
        return t;
      }
      parseNormals(t) {
        for (let e = 0, r = t.length; e < r; e += 18)
          (t[e] = 0),
            (t[e + 1] = 0),
            (t[e + 2] = 1),
            (t[e + 3] = 0),
            (t[e + 4] = 0),
            (t[e + 5] = 1),
            (t[e + 6] = 0),
            (t[e + 7] = 0),
            (t[e + 8] = 1),
            (t[e + 9] = 0),
            (t[e + 10] = 0),
            (t[e + 11] = 1),
            (t[e + 12] = 0),
            (t[e + 13] = 0),
            (t[e + 14] = 1),
            (t[e + 15] = 0),
            (t[e + 16] = 0),
            (t[e + 17] = 1);
        return t;
      }
      updateGeometry() {
        super.updateGeometry();
        let t = this.program,
          e = Mi(this.density),
          r = this.scaleVertices(e, this.width, this.height),
          s = this.parseNormals(new Float32Array(e));
        t.attribute("a_position", r, 3),
          t.attribute("a_normal", s, 3, 0),
          this.config.texture &&
            t.attribute("a_texcoord", Mi(this.density, !1), 3, 0);
      }
      beforeDraw() {
        this.program.uniform("u_plane", [this.width, this.height], "v2", !1);
      }
    };
  });
var Pe,
  Nr = l(() => {
    "use strict";
    mt();
    bt();
    dt();
    Te();
    Vi();
    Oi();
    Le();
    le();
    Pe = class extends D {
      constructor(t = {}) {
        super(),
          (this.meshes = []),
          (this.lastSize = { width: 0, height: 0 }),
          (this.config = {
            color: [0, 0, 0],
            alpha: !0,
            antialias: !0,
            premultipliedAlpha: !0,
            dpr: 1,
            depth: !0,
            ...t,
          }),
          (this.ticker = t.ticker || R.main),
          (this.canvas = Fr(t.canvas)),
          (this.observable = P(window, { resizeDetection: !0 })),
          (this.context =
            this.canvas.getContext("webgl2", t) ||
            this.canvas.getContext("webgl", t) ||
            this.canvas.getContext("webgl-experimental", t)),
          (this.renderer = new Oe(
            this.context,
            this.meshes,
            this.config.ticker,
            this.config.taskOrder,
            this.config.camera,
            this.observable.size,
            this.config.uniforms
          )),
          this.init(),
          this.start();
      }
      get uniforms() {
        return this.config.uniforms || {};
      }
      get ctx() {
        return this.context;
      }
      init() {
        if (this.config.autoSize !== !1) {
          let t = this.canvas.style,
            e = this.observable.size;
          (t.pointerEvents = "none"),
            (t.position = "fixed"),
            (t.left = "0px"),
            (t.top = "0px"),
            this.setSize(e.width, e.height),
            (this.unlisten = this.observable.onChange((r) => {
              this.setSize(r.width, r.height);
            }));
        }
      }
      start() {
        let t = this.context,
          e = this.config.color || [0, 0, 0],
          r = this.config.alpha;
        t.enable(t.BLEND),
          t.enable(t.CULL_FACE),
          t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA),
          t.clearColor(e[0], e[1], e[2], r ? 0 : 1),
          t.clear(t.COLOR_BUFFER_BIT),
          this.renderer.start();
      }
      setSize(t, e) {
        (this.lastSize.width === t && this.lastSize.height === e) ||
          ((this.canvas.style.width = `${t}px`),
          (this.canvas.style.height = `${e}px`),
          (this.lastSize.width = t),
          (this.lastSize.height = e),
          this.renderer.resize(t, e, this.config.dpr || 1));
      }
      remove(t) {
        let e = this.meshes.indexOf(t);
        return (
          e > -1 && this.meshes.splice(e, 1).forEach((r) => r.destroy()), this
        );
      }
      plane(t = {}) {
        let e = new ke(this.context, { camera: this.renderer.camera, ...t });
        return this.meshes.push(e), e;
      }
      camera(t, e) {
        return e
          ? this.renderer.addCamera(t, new Qt(e, this.observable.size))
          : this.renderer.getCamera(t);
      }
      image(t) {
        return new ze(this.context, t);
      }
      video(t) {
        return new jt(this.context, t);
      }
      destroy() {
        this.unlisten && (this.unlisten(), delete this.unlisten),
          this.task && (this.task.kill(), delete this.task);
      }
    };
  });
var Di = l(() => {
  "use strict";
  Te();
  Ce();
  ae();
  Ce();
  Se();
  zi();
  Oi();
  Le();
  qr();
  le();
  Nr();
  Vi();
  Pi();
  Ri();
});
var te,
  $r = l(() => {
    Wt();
    L();
    gt();
    ht();
    te = class i extends k {
      get name() {
        return "scroller";
      }
      get child() {
        return i;
      }
      init() {
        return lt(this, void 0, void 0, function* () {
          let t = this.config.scroller;
          this.router.activated &&
            this.config.reset &&
            (yield this.router).on(O.AFTER_ENTER, () => {
              setTimeout(() => t.scrollTo({ x: 0, y: 0 }, !0));
            }),
            this.resolve(t);
        });
      }
    };
    yt([m(T), xt("design:type", T)], te.prototype, "router", void 0);
  });
var N,
  ee = l(() => {
    Wt();
    L();
    Di();
    ht();
    $r();
    N = class i extends k {
      get name() {
        return "webgl";
      }
      get child() {
        return i;
      }
      init() {
        return lt(this, void 0, void 0, function* () {
          let t = new Pe(this.config);
          this.scroller.activated &&
            (yield this.scroller).onScroll((e) => t.scrollTo(e)),
            this.resolve(t);
        });
      }
    };
    yt([m(te), xt("design:type", te)], N.prototype, "scroller", void 0);
    yt([m(T), xt("design:type", T)], N.prototype, "router", void 0);
  });
var Ii,
  Et,
  Ae = l(() => {
    "use strict";
    C();
    (Ii = new tt()),
      (Et = {
        ready: Ii.promise,
        resolve: Ii.resolve.bind(Ii),
        map: new Map(),
      });
  });
var Re,
  Ve,
  et,
  he = l(() => {
    "use strict";
    L();
    C();
    ee();
    Ae();
    (Re = class {
      constructor(t) {
        this.webgl = t;
      }
      loaderResolver = new tt();
      resolver = new tt();
      loading = !1;
      async load(t) {
        if (this.resolver.completed || this.loading) return;
        this.loading = !0;
        let e = [],
          r = await fetch("https://zaki879.github.io/mainanimation/animation/static/projects.json"),
          s = Object.values(await r.json()),
          o =
            location.protocol +
            "//" +
            location.hostname +
            (location.port ? ":" + location.port : ""),
          n = [
            ...s.map((u) => o + u.teaser.url),
            ...JSON.parse(document.body.dataset.preload).map((u) => o + u),
          ],
          a = 3,
          c = n.length + a,
          f = 0;
        if (this.webgl)
          for (let u of n) {
            let x = /\.(mp4|webm)$/.test(u),
              d = x
                ? this.webgl.video({ src: u })
                : this.webgl.image({ src: u });
            Et.map.set(u.replace(o, ""), d),
              x
                ? t(++f / c, c)
                : (e.push(d.uploaded), d.uploaded.then(() => t(++f / c, c)));
          }
        Et.resolve();
        for (let u = 0; u < a; u++)
          await new Promise((d) => {
            setTimeout(() => d(), 100);
          }),
            t(++f / c, c);
        await Promise.all(e).then(() => this.loaderResolver.resolve());
      }
      resolve() {
        this.resolver.resolve();
      }
      loaded() {
        return this.loaderResolver.promise;
      }
      done() {
        return this.resolver.promise;
      }
    }),
      (Ve = class Ve extends k {
        get name() {
          return "preloader";
        }
        get child() {
          return Ve;
        }
        webgl;
        async init() {
          if (this.webgl.activated) {
            let t = await this.webgl;
            this.resolve(new Re(t));
          } else this.resolve(new Re());
        }
      });
    h([m(N)], Ve.prototype, "webgl", 2);
    et = Ve;
  });
var M,
  it = l(() => {
    "use strict";
    L();
    bt();
    X();
    Vt();
    he();
    M = class {
      constructor(t) {
        this.element = t;
        let e = "-5%";
        this.element.dataset.noScreenPadding === "1" && (e = "0px"),
          (this.animObservable = P(t, {
            visibilityDetection: { rootMargin: "0px 0px " + e },
          }));
      }
      onEnter = y.noop();
      onLeave = y.noop();
      locked = !1;
      overridden = !1;
      elementEntered = !1;
      unlistenEnter;
      animObservable;
      visibilityAnimation = !0;
      viewport;
      preloader;
      onCreate() {
        this.update();
      }
      recalc() {
        return this.animObservable.update(), this;
      }
      update() {
        this.elementEntered = !1;
        let t = this.onEnter,
          e = this.onLeave;
        return (
          e.stop(),
          t.stop(),
          t instanceof vt ? t.seek(0, !0, !0, !0) : t.reset().seek(0, !0, !0),
          e.onStop(() => this.listenForVisibility()),
          this.animObservable.visible
            ? requestAnimationFrame(() => {
                !this.locked &&
                  !this.elementEntered &&
                  ((this.elementEntered = !0),
                  this.preloader.done().then(() => {
                    this.overridden || t.start();
                  }));
              })
            : this.listenForVisibility(),
          this
        );
      }
      lock(t = !0) {
        return (this.locked = t), this;
      }
      override() {
        return (this.overridden = !0), this;
      }
      reset() {
        return (this.elementEntered = !1), this.onEnter.reset().stop(), this;
      }
      listenForVisibility() {
        this.visibilityAnimation &&
          (this.unlistenEnter && this.unlistenEnter(),
          (this.elementEntered = !1),
          (this.unlistenEnter = this.animObservable.onVisChange((t) => {
            t.visible &&
              (!this.locked &&
                !this.elementEntered &&
                ((this.elementEntered = !0),
                this.preloader.done().then(() => {
                  this.overridden || this.onEnter.start();
                })),
              this.unlistenEnter &&
                (this.unlistenEnter(), delete this.unlistenEnter));
          })));
      }
      isVisible() {
        return this.animObservable.visible;
      }
      isInEntry() {
        return (
          this.animObservable.update(),
          this.animObservable.y < (this.viewport?.height || window.innerHeight)
        );
      }
    };
    h([m(G, !0)], M.prototype, "viewport", 2),
      h([m(et, !0)], M.prototype, "preloader", 2);
  });
var ji,
  H,
  Fi = l(() => {
    "use strict";
    L();
    Ct();
    j();
    bt();
    dt();
    X();
    C();
    Lt();
    _t();
    it();
    (ji = [
      [1500, 200],
      [1310, 246],
      [1042, 254],
      [812, 327],
    ]),
      (H = class extends M {
        useMobile = F();
        markerState = { offset: 0, size: 0 };
        fadeState = { active: !1, progress: 0 };
        observable;
        wasVisible = !1;
        activeStage = 0;
        bendY1 = 0;
        bendY2 = 0;
        indicator;
        marker;
        nextBtn;
        prevBtn;
        stages = [];
        paths = [];
        points;
        scrollEmitter;
        constructor(t) {
          super(t),
            (this.observable = P(t, {
              resizeDetection: !0,
              visibilityDetection: !0,
            })),
            (this.onEnter = y.to(this.element, { opacity: 1 })),
            (this.onLeave = y.to(this.element, { opacity: 0 }));
        }
        onListen() {
          return this.useMobile
            ? w(
                g(this.nextBtn, "click", () =>
                  this.enableStage(We(this.activeStage + 1, ji.length))
                ),
                g(this.prevBtn, "click", () =>
                  this.enableStage(We(this.activeStage - 1, ji.length))
                )
              )
            : w(
                this.scrollEmitter.on(B.VIRTUAL, (t) => this.handleScroll(t)),
                g(window, "mousemove", (t) => this.handleMouseMove(t))
              );
        }
        onCreate() {
          super.onCreate(),
            this.useMobile
              ? (this.observable.ref.style.setProperty("--fade-progress", "1"),
                this.enableStage(0))
              : R.main.add((t) => this.handleTick(t));
        }
        onDestroy() {
          wt(this.observable);
        }
        enableStage(t) {
          this.activeStage = t;
          let e = this.indicator.style,
            r = ji[t];
          y.to(
            this.markerState,
            { offset: r[0], size: r[1] },
            {
              duration: 1500,
              easing: E.easeOutExpo,
              onUpdate: ({ offset: s, size: o }) => {
                (e.strokeDashoffset = `${s}`),
                  (e.strokeDasharray = `${o} 1300`);
              },
            }
          );
          for (let s of this.stages) {
            let o = parseInt(s.dataset.complacencyStage || "0");
            s.classList.toggle("is-active", o == t);
          }
        }
        handleMouseMove(t) {
          let r = (t.clientX - this.observable.x) / this.observable.width,
            s = 0;
          for (
            let o = 0, n = this.points.length;
            o < n && !(r <= this.points[o]);
            o++
          )
            s = o;
          s !== this.activeStage && this.enableStage(s);
        }
        handleTick(t = 1) {
          (this.bendY2 = nt(this.bendY2, this.bendY1, 0.05 * t * 0.06)),
            (this.wasVisible = !0);
          let e = parseFloat(this.bendY2.toFixed(3));
          if (this.observable.visible) {
            this.observable.ref.style.setProperty("--bend-progress", `${e}`);
            for (let r of this.paths)
              r.setAttribute(
                "d",
                `M39 307.126c432 0 514-${628.126 * e} 966-${42.126 * e}`
              );
          }
        }
        handleScroll(t) {
          let e = this.viewport.height,
            r = this.observable.height,
            s = this.observable.y,
            o = Pt(
              z(t.y + e, s + r - r * 0.15, s + r + e * 0.35 - r * 0.5, 0, 1),
              0,
              1
            );
          this.bendY1 = o;
          let n = o > 0.5;
          this.fadeState.active != n &&
            ((this.fadeState.active = n),
            y.to(
              this.fadeState,
              { progress: n ? 1 : 0 },
              {
                duration: 400,
                easing: E.easeOutSine,
                onUpdate: ({ progress: a }) => {
                  this.observable.ref.style.setProperty(
                    "--fade-progress",
                    `${a.toFixed(3)}`
                  );
                },
              }
            ));
        }
      });
    h([U("[data-complacency-indicator]")], H.prototype, "indicator", 2),
      h([U("[data-complacency-marker]")], H.prototype, "marker", 2),
      h([U("[data-complacency-next]")], H.prototype, "nextBtn", 2),
      h([U("[data-complacency-prev]")], H.prototype, "prevBtn", 2),
      h(
        [se("[data-complacency-stage]", { parse: Array.from })],
        H.prototype,
        "stages",
        2
      ),
      h([se("svg path", { parse: Array.from })], H.prototype, "paths", 2),
      h([$("points", { parse: JSON.parse })], H.prototype, "points", 2),
      h([m(I, !0)], H.prototype, "scrollEmitter", 2),
      (H = h([S("complacency")], H));
  });
function Gr(i, t, e = []) {
  let r = i;
  for (; r.shadowRoot && r.shadowRoot.activeElement; )
    r = r.shadowRoot.activeElement;
  if (!(r instanceof HTMLElement)) return;
  if (!e.map((o) => o.contains(r)).includes(!0) && r) {
    let o = r.getBoundingClientRect(),
      n = t.size,
      a = { x: 0, y: 0 },
      c = !1;
    if (
      ((o.right > 0 && o.left < n.width) ||
        ((a.x = o.left - n.width / 2), (c = !0)),
      (o.bottom > 0 && o.top < n.height) ||
        ((a.y = o.top - n.height / 2), (c = !0)),
      c)
    )
      return a;
  }
}
var Br = l(() => {
  "use strict";
});
var 
  De,
  Wr = l(() => {
    "use strict";
    j();
    bt();
    C();
    _i();
    Br();
   
      (De = class extends Ee {
        constructor(t, e = !0) {
          super({  ...t }, !1),
            (this.limit = { width: 0, height: 0 }),
            e && this.init();
        }
        update() {
          this.container && wt(this.container),
            this.wrapper && wt(this.wrapper);
          let { wrapper: t, container: e, styles: r } = this.config
          console.log(this.config);
          
          if (
            ((this.container = P(e || document.body)),
            this.container.ref instanceof Window)
          )
            throw new Error("container can't be the window");
         
          else {
            let o = document.createElement("div"),
              n = Array.from(this.container.ref.childNodes);
            this.container.ref.appendChild(o),
              o.append(...n),
              (this.wrapper = P(o));
          }
          if (r) for (let o in r) this.container.ref.style[o] = r[o];
          return (
            this.handleResize(),
            setTimeout(() => this.resetNativeScroll(), 10),
            this.config.inertiaTarget ||
              (this.config.inertiaTarget = this.container.ref),
            super.update()
          );
        }
        destroy() {
          super.destroy(),
            this.container && wt(this.container),
            this.wrapper && wt(this.wrapper);
        }
        listen() {
          let t = this.container.ref;
          return w(
            super.listen(),
            this.container.onDimChange(() => this.handleResize()),
            this.wrapper.onDimChange(() => this.handleResize()),
            this.config.focus
              ? g(t, "focus", (e) => this.handleFocus(e), !0)
              : void 0,
            g(t, "scroll", (e) => {
              e.preventDefault(), this.resetNativeScroll();
            })
          );
        }
        resetNativeScroll() {
          let t = this.container.ref,
            e = this.wrapper.ref,
            r = t.parentElement;
          (t.scrollLeft = t.scrollTop = 0),
            (e.scrollLeft = e.scrollTop = 0),
            r && (r.scrollLeft = r.scrollTop = 0);
        }
        async handleFocus(t) {
          this.resetNativeScroll(),
            requestAnimationFrame(() => {
              let e = Gr(t.target, this.container);
              e && this.addVirtual(e.x, e.y);
            });
        }
        setVirtual(t, e) {
          super.setVirtual(t, e),
            (this.virtual.x = Pt(this.virtual.x, 0, this.limit.width)),
            (this.virtual.y = Pt(this.virtual.y, 0, this.limit.height));
        }
        get wheelTarget() {
          return this.config.wheelTarget || this.container.ref || window;
        }
        get viewWidth() {
          return this.container.width;
        }
        get viewHeight() {
          return this.container.height;
        }
        handleResize() {
          (this.limit.width = this.wrapper.width - this.container.width),
            (this.limit.height = this.wrapper.height - this.container.height),
            this.emit(Zt.RESIZE);
        }
        handleScroll(t = this.output) {
          super.handleScroll(t),
            (this.wrapper.ref.style.transform = `translate3d(${-t.x}px, ${-t.y}px, 0)`);
        }
      });
  });
var V,
  ue = l(() => {
    "use strict";
    L();
    mt();
    j();
    Wr();
    C();
    ee();
    _t();
    V = class extends D {
      constructor(e) {
        super();
        this.element = e;
        this.scroller = new De({
          container: at("main"),
          wrapper: this.element,
          damping: 0.08,
          pointerEvents: !0,
          pointerMultiplier: 2,
        });
      }
      scroller;
      camera;
      name;
      webgl;
      emitter;
      onCreate() {
        (this.camera = this.webgl.camera(this.name, {})),
          this.scroller.reflectEvents(this, this.emitter);
      }
      onListen() {
        return w(
          this.scroller.onScroll(() => this.updateCamera()),
          this.scroller.on("resize", () => this.updateCamera())
        );
      }
      get scrollY() {
        return this.scroller.output.y;
      }
      updateCamera() {
        this.camera.y = this.camera.ch(this.scroller.output.y);
      }
      scrollToY(e, r = !1) {
        this.scroller.scrollTo({ y: e }, r);
      }
      lock(e = !0, r = !1) {
        this.scroller.lock({ controls: e, position: e && r });
      }
      onDestroy() {
        this.scroller.destroy();
      }
    };
    h([$("name")], V.prototype, "name", 2),
      h([m(N, !0)], V.prototype, "webgl", 2),
      h([m(I, !0)], V.prototype, "emitter", 2),
      (V = h([S("smooth-scroll")], V));
  });
var ut,
  Ie = l(() => {
    "use strict";
    L();
    X();
    it();
    Lt();
    ut = class extends M {
      onCreate() {
        super.onCreate(), (this.element.style.opacity = "0");
      }
      onEnter = y.to(
        this.element,
        { opacity: 1 },
        {
          duration: 1e3,
          delay:
            this.element.classList.contains("above-the-fold") && F()
              ? 0
              : parseInt(this.element.dataset.triggerOpacityDelay || "0") || 0,
          autoStart: !1,
          easing: E.easeOutSine,
          onStart: () => this.element.classList.add("is-active"),
          onComplete: () => {
            this.element.dataset.triggerOpacityKeep &&
              (this.element.style.opacity = "1");
          },
        }
      );
      onLeave = y.to(
        this.element,
        { opacity: 0 },
        {
          autoStart: !1,
          duration: 1e3,
          onStart: () => this.onEnter.stop(),
          easing: E.easeOutExpo,
          onComplete: () => {
            this.element.dataset.triggerOpacityKeep &&
              (this.element.style.opacity = "0");
          },
        }
      );
    };
    ut = h([S("trigger-opacity")], ut);
  });
var Z,
  Yi = l(() => {
    "use strict";
    L();
    Ct();
    j();
    gt();
    X();
    C();
    ht();
    Vt();
    _t();
    ue();
    Ie();
    Z = class {
      constructor(t) {
        this.element = t;
      }
      lastY = 0;
      logo;
      menuActive = !1;
      unlistenLinks;
      menuLogoLink;
      composer;
      scrollEmitter;
      viewport;
      router;
      onCreate() {
        let [t] = this.composer.query(ut, this.element);
        t && (this.logo = t.component),
          this.isHome && this.logo,
          this.updateLinks(),
          setTimeout(() => {
            this.handleScroll(0);
          });
      }
      onListen() {
        return w(
          this.scrollEmitter.on(B.OUTPUT, ({ y: t }) => this.handleScroll(t)),
          this.router.on(O.NAV_START, () => {
            setTimeout(() => this.handleScroll(0));
          }),
          this.router.on(O.AFTER_LEAVE, () => this.updateLinks()),
          this.router.on(O.AFTER_ENTER, ({ toElement: t }) =>
            this.updateLinks(t)
          ),
          this.router.on(O.BEFORE_ENTER, ({ toElement: t }) =>
            this.updateLinks(t)
          ),
          g(this.menuLogoLink, "click", (t) => {
            t.stopPropagation(),
              t.preventDefault(),
              this.router.route.url === "/" && this.scrollTo(0);
          })
        );
      }
      get isHome() {
        return this.router.route.url === "/";
      }
      updateLinks(t) {
        this.unlistenLinks && this.unlistenLinks();
        let e = at("[data-menu-trigger]");
        this.unlistenLinks = w(
          e ? g(e, "click", () => this.toggleMenu()) : void 0,
          ...Array.from(At("a", t))
            .filter((r) => r.getAttribute("href")?.startsWith("#"))
            .map((r) => g(r, "click", (s) => this.handleClick(s)))
        );
      }
      toggleMenu() {
        (this.menuActive =
          document.documentElement.classList.toggle("is-menu-active")),
          this.handleScroll();
      }
      handleScroll(t = this.lastY) {
        document.documentElement.classList.toggle(
          "is-logo-hidden",
          this.isHome && t < this.viewport.height && !this.menuActive
        ),
          (this.lastY = t);
      }
      handleClick(t) {
        t.preventDefault(), t.stopPropagation();
        let e = t.currentTarget,
          r = at(e.getAttribute("href") || "");
        this.scrollTo(r.offsetTop);
      }
      scrollTo(t) {
        let [e] = this.composer.query(V);
        e
          ? y.to(
              { y: e.component.scrollY },
              { y: t },
              {
                duration: 800,
                easing: E.easeOutSine,
                onUpdate: (r) => e.component.scrollToY(r.y),
              }
            )
          : window.scrollTo(0, t),
          this.menuActive && this.toggleMenu();
      }
    };
    h([U("[data-menu-logo-link]")], Z.prototype, "menuLogoLink", 2),
      h([Y()], Z.prototype, "composer", 2),
      h([m(I, !0)], Z.prototype, "scrollEmitter", 2),
      h([m(G, !0)], Z.prototype, "viewport", 2),
      h([m(T, !0)], Z.prototype, "router", 2),
      (Z = h([S("menu")], Z));
  });
var Ot,
  Hi = l(() => {
    "use strict";
    L();
    X();
    it();
    Lt();
    Ot = class extends M {
      lines = [];
      constructor(t) {
        super(t);
        let e = this.element.dataset.textSlideLines;
        e && (this.lines = Array.from(this.element.querySelectorAll(e))),
          (this.onEnter = y.staggerFromTo(
            this.lines,
            { y: 120 },
            { y: 0 },
            {
              units: { y: "%" },
              easing: E.easeOutExpo,
              initSeek: !0,
              autoStart: !1,
              duration: 1500,
              onStart: () => {
                this.lines.forEach((r) => r.classList.add("tsa")),
                  this.onLeave.stop();
              },
              stagger: { offset: 0.05 },
              timeline: {
                autoStart: !1,
                delay:
                  this.element.classList.contains("above-the-fold") && F()
                    ? 0
                    : parseFloat(this.element.dataset.textSlideDelay || "0") ||
                      0,
              },
            }
          )),
          (this.onLeave = y.staggerFromTo(
            this.lines,
            { y: 0 },
            { y: -120 },
            {
              units: { y: "%" },
              easing: E.easeOutExpo,
              onStart: () => this.onEnter.stop(),
              autoStart: !1,
              duration: 1e3,
              timeline: { autoStart: !1 },
            }
          ));
      }
    };
    Ot = h([S("text-slide")], Ot);
  });
var kt,
  Ui = l(() => {
    "use strict";
    L();
    it();
    X();
    kt = class extends M {
      onEnter = y.fromTo(
        this.element,
        { scaleX: 0 },
        { scaleX: 1 },
        {
          duration: 1e3,
          autoStart: !1,
          initSeek: !0,
          delay: parseFloat(this.element.dataset.triggerScaleDelay || "0") || 0,
          easing: E.easeOutExpo,
        }
      );
      onLeave = y.fromTo(
        this.element,
        { scaleX: 1 },
        { scaleX: 0 },
        {
          autoStart: !1,
          onStart: () => this.onEnter.stop(),
          duration: 1e3,
          easing: E.easeOutExpo,
        }
      );
    };
    kt = h([S("trigger-scale")], kt);
  });
var Xi,
  je,
  W,
  Ft = l(() => {
    "use strict";
    L();
    mt();
    j();
    dt();
    C();
    Vt();
    (Xi = class extends D {
      constructor(e) {
        super();
        this.viewport = e;
        g(window, "mousemove", ({ clientX: r, clientY: s }) => {
          (this.inputPosition.x = r),
            (this.inputPosition.y = s),
            this.firstMove &&
              ((this.outputPosition.x = this.inputPosition.x),
              (this.outputPosition.y = this.inputPosition.y),
              (this.firstMove = !1),
              this.emit("first", !0)),
            this.emit("move", this.inputPosition);
        }),
          this.ticker.add((r) => {
            this.animate(r * 0.06),
              this.emit("lerp", this.outputPosition),
              this.emit("velocity", this.velocity);
          });
      }
      position = [0, 0];
      glPosition = [0, 0];
      velocity = { x: 0, y: 0 };
      outputPosition = { x: 0, y: 0 };
      inputPosition = { x: 0, y: 0 };
      ticker = new R();
      firstMove = !0;
      damping = 0.095;
      animate(e = 1) {
        let r = this.inputPosition,
          s = this.outputPosition,
          o = this.velocity;
        (s.x = nt(s.x, r.x, this.damping * e)),
          (s.y = nt(s.y, r.y, this.damping * e)),
          (o.x = nt(
            o.x,
            z(r.x - s.x, -this.viewport.width, this.viewport.width, -1, 1),
            0.07 * e
          )),
          (o.y = nt(
            o.y,
            z(r.y - s.y, -this.viewport.height, this.viewport.height, -1, 1),
            0.07 * e
          )),
          (this.position[0] = s.x),
          (this.position[1] = s.y);
      }
    }),
      (je = class je extends k {
        get name() {
          return "mouse-emitter";
        }
        get child() {
          return je;
        }
        viewport;
        async init() {
          this.resolve(new Xi(await this.viewport));
        }
      });
    h([m(G)], je.prototype, "viewport", 2);
    W = je;
  });
var b,
  Fe = l(() => {
    "use strict";
    L();
    j();
    C();
    Ft();
    ht();
    gt();
    b = class {
      constructor(t) {
        this.element = t;
        b.target = t;
      }
      visible = !1;
      unlistenLinks;
      mouse;
      router;
      static addState(t, e) {
        this.states.find((r) => r[0] == t && r[1] == e) &&
          this.removeState(t, e),
          this.states.push([t, e]),
          this.updateState();
      }
      static removeState(t, e) {
        let r = this.states.filter((s) => s[0] === t && s[1] === e);
        for (let s of r) this.states.splice(this.states.indexOf(s), 1);
        this.updateState();
      }
      static updateState() {
        if (b.target) {
          let t = this.states[this.states.length - 1];
          b.target.classList.toggle("is-active", !!t),
            At("[data-cursor-state]").forEach((e) => {
              e.classList.toggle(
                "is-active",
                !!t && e.dataset.cursorState === t[1]
              );
            });
        }
      }
      onCreate() {
        this.updateLinkListeners();
      }
      onListen() {
        return w(
          this.router.on(O.AFTER_ENTER, () => {
            (b.states.length = 0), this.updateLinkListeners();
          }),
          this.mouse.on("move", (t) => {
            this.visible ||
              ((this.visible = !0), this.element.classList.add("is-visible")),
              this.handleMouseMove(t);
          }),
          this.mouse.on("lerp", (t) => this.handleMouseMove(t, "cursor-smooth"))
        );
      }
      onDestroy() {
        this.unlistenLinks();
      }
      updateLinkListeners() {
        this.unlistenLinks = w(
          ...Array.from(At("a")).map((t) =>
            w(
              g(t, "mouseenter", () => b.addState("a", "link")),
              g(t, ["mouseleave", "mousecancel"], () =>
                b.removeState("a", "link")
              )
            )
          )
        );
      }
      handleMouseMove(t, e = "cursor") {
        this.element.style.setProperty(`--${e}-x`, `${t.x.toFixed(3)}px`),
          this.element.style.setProperty(`--${e}-y`, `${t.y.toFixed(3)}px`);
      }
    };
    Ne(b, "states", []),
      Ne(b, "target"),
      h([m(W, !0)], b.prototype, "mouse", 2),
      h([m(T, !0)], b.prototype, "router", 2),
      (b = h([S("cursor")], b));
  });
var Q,
  Ni = l(() => {
    "use strict";
    L();
    Ct();
    j();
    gt();
    ht();
    Lt();
    it();
    Fe();
    Q = class {
      constructor(t) {
        this.element = t;
      }
      hovering = !1;
      video;
      viewAnim = [];
      isReel = !1;
      childVideo;
      router;
      composer;
      onListen() {
        return this.isReel
          ? void 0
          : w(
              this.router.on(O.NAV_START, () => this.video.pause()),
              g(this.element, "mouseenter", () => {
                (this.hovering = !0),
                  b.addState("reel", this.video.paused ? "play" : "close");
              }),
              g(this.element, ["mouseleave", "mousecancel"], () => {
                (this.hovering = !1),
                  b.removeState("reel", "play"),
                  b.removeState("reel", "close");
              }),
              g(this.video, "click", () =>
                this.video.paused ? this.video.play() : this.video.pause()
              ),
              g(this.video, ["play", "pause"], () => this.togglePlay())
            );
      }
      onCreate() {
        (this.isReel = this.element.dataset.reel !== void 0 && !F()),
          this.isReel ||
            ((this.video =
              this.element instanceof HTMLVideoElement
                ? this.element
                : this.childVideo),
            (this.viewAnim = this.composer
              .query(M, this.element)
              .map(({ component: t }) => t)));
      }
      togglePlay() {
        (this.video.volume = 0.25),
          F() && (this.video.controls = !this.video.paused),
          this.video.paused
            ? (b.removeState("reel", "close"),
              this.hovering && b.addState("reel", "play"))
            : b.addState("reel", "close");
        for (let t of this.viewAnim)
          t.lock(),
            this.video.paused
              ? (t.onLeave.stop(), t.onEnter.start())
              : (t.onEnter.stop(), t.onLeave.start());
      }
    };
    h([U("video")], Q.prototype, "childVideo", 2),
      h([m(T, !0)], Q.prototype, "router", 2),
      h([Y()], Q.prototype, "composer", 2),
      (Q = h([S("video")], Q));
  });
var Zr = {};
fe(Zr, { App: () => St, default: () => ho });
var St,
  ho,
  Kr = l(() => {
    "use strict";
    L();
    gt();
    ht();
    Vt();
    xi();
    Fi();
    Yi();
    Hi();
    Ie();
    Ui();
    Ni();
    he();
    _t();
    St = class {
      router;
      preloader;
      composer;
      async onCreate() {
        let t = await this.router;
        document.documentElement.classList.add("is-loaded"),
          (await this.preloader).resolve(),
          t.on(O.AFTER_ENTER, () => {
            this.composer.update();
          }),
          t.on(O.BEFORE_LEAVE, () => {
            (document.documentElement.style.scrollBehavior = "auto"),
              setTimeout(() => {
                window.scrollTo(0, 0),
                  setTimeout(() => {
                    document.documentElement.style.scrollBehavior = "";
                  });
              });
          });
      }
    };
    h([m(T)], St.prototype, "router", 2),
      h([m(et)], St.prototype, "preloader", 2),
      h([Y()], St.prototype, "composer", 2),
      (St = h(
        [
          Y({
            components: [Ot, kt, ut, H, Z, Q],
            services: [
              new Dt(),
              new G(),
              new I(),
              new et(),
              new T({
                routerConfig: {
                  trigger:
                    'a[href]:not([data-no-route]):not([target="_blank"]):not([target="blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])',
                },
                animations: [be.fade({ duration: 200 })],
              }),
            ],
          }),
        ],
        St
      ));
    ho = new St();
  });
var Ye,
  $i = l(() => {
    Ye = `#version 300 es
precision mediump float;
#define GLSLIFY 1
uniform sampler2D u_texture;uniform float u_alpha;uniform vec2 u_plane;uniform float u_time;uniform vec2 u_mouse;uniform vec2 u_velocity;uniform vec2 u_res;uniform vec2 u_mediaSize;uniform vec2 u_planeScale;uniform vec3 u_accentColor;uniform float u_fadeOut;out vec4 fragColor;in vec2 v_texcoord;vec2 cover(vec2 uv,vec2 size,vec2 area,bool fitHeight){float aspectSize=size.x/size.y;float aspectArea=area.x/area.y;bool match=aspectSize>aspectArea;if(fitHeight){match=aspectSize<aspectArea;}if(match){uv.x=uv.x*aspectArea/aspectSize+(1.-aspectArea/aspectSize)*0.5;}else{uv.y=uv.y*aspectSize/aspectArea+(1.-aspectSize/aspectArea)*0.5;}return uv;}vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+1.0*C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.+3.0*C.xxx;i=mod(i,289.0);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}float map(float value,vec2 from,vec2 to){return to.x+(to.y-to.x)/(from.y-from.x)*(value-from.x);}float circle(vec2 uv,vec2 center,float radius,float border){return smoothstep(radius+border,radius-border,distance(uv,center));}void main(){vec2 coords=cover(v_texcoord,u_mediaSize,u_plane*u_planeScale,false);float rs=u_res.x/u_res.y;vec2 pointer=vec2(u_mouse.x,(u_res.y-u_mouse.y)/rs)/u_res;vec2 center=vec2(gl_FragCoord.x/u_res.x,gl_FragCoord.y/u_res.y/rs);float mouse=circle(pointer,center,0.04,0.042);float n2=snoise(vec3(coords.x*3.,coords.y*3.,u_time*.2));float n2n=map(n2,vec2(-1.,1.),vec2(0.0,1.0));vec4 color=texture(u_texture,coords);float circ=mouse*2.*n2n*1.5*(abs(u_velocity.x)+abs(u_velocity.y))*10.;float rim=smoothstep(0.42,0.95,circ)-smoothstep(1.0,1.0,circ);color.rgb=mix(color.rgb,u_accentColor,clamp(rim,0.0,1.0));color.a=(1.0-circ+rim)*u_alpha;float circ2=n2n*map(u_fadeOut,vec2(1.0,0.),vec2(0.0,3.0));float rim2=smoothstep(0.42,0.95,circ2)-smoothstep(1.0,1.0,circ2);color.rgb=mix(color.rgb,u_accentColor,clamp(rim2,0.0,1.0));color.a*=1.0-circ2+rim2;fragColor=color;}`;
  });
var Jr,
  Qr = l(() => {
    Jr = `#version 300 es
precision mediump float;
#define GLSLIFY 1
in vec4 a_position;in vec2 a_texcoord;uniform float u_time;uniform mat4 u_proj;uniform vec2 u_mouseGl;uniform mat4 u_view;uniform float u_distort;uniform mat4 u_model;uniform float u_buldge;uniform vec2 u_plane;out vec2 v_texcoord;out float v_accent;vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+1.0*C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.+3.0*C.xxx;i=mod(i,289.0);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}void main(){vec4 model=u_model*a_position;float dist=length(u_mouseGl.xy-model.xy);model.z+=(1.0-smoothstep(0.0,u_plane.x,dist))*u_buldge;gl_Position=u_proj*u_view*model;v_texcoord=a_texcoord;}`;
  });
var A,
  He = l(() => {
    "use strict";
    L();
    j();
    bt();
    C();
    Di();
    ee();
    X();
    Ft();
    _t();
    Ae();
    $i();
    Qr();
    it();
    A = class extends M {
      video;
      plane;
      observable;
      uniforms;
      resolver = new tt();
      texture;
      mediaSize = [0, 0];
      mousePosGl = [0, 0];
      ready = this.resolver.promise;
      webgl;
      scrollEmitter;
      mouseEmitter;
      src;
      posZ = 0;
      size = { width: 0, height: 0 };
      nodistort = !1;
      parallax = 0;
      isVideo = !1;
      constructor(t, e = {}) {
        super(t),
          (this.observable = P(t, {
            resizeDetection: !0,
            visibilityDetection: !0,
          })),
          (this.uniforms = {
            u_mediaSize: this.mediaSize,
            u_velocity: [0, 0],
            u_planeScale: [1, 1],
            u_fadeOut: 1,
            u_distort: 0,
            u_buldge: 0,
            u_alpha: 0,
            ...e,
          }),
          (this.onEnter = y.to(
            this.uniforms,
            { u_alpha: 1 },
            { duration: 500 }
          )),
          (this.onLeave = y.to(
            this.uniforms,
            { u_alpha: 0 },
            { duration: 500 }
          ));
      }
      onListen() {
        return w(
          this.parallax > 0
            ? this.scrollEmitter.on(B.OUPUT, (t) => this.handleScroll(t))
            : void 0,
          this.mouseEmitter.on("lerp", (t) => this.updateMouse(t)),
          this.observable.onChange(() => this.updatePlane())
        );
      }
      onCreate() {
        super.onCreate(),
          (this.uniforms.u_distort = this.nodistort ? 0 : 1),
          (this.uniforms.u_mouseGl = this.mousePosGl),
          (this.uniforms.u_mouse = this.mouseEmitter.position),
          (this.uniforms.u_velocity = this.mouseEmitter.velocity),
          Et.ready.then(() => {
            let { x: t, y: e, width: r, height: s } = this.observable;
            (this.mediaSize[0] = this.size.width),
              (this.mediaSize[1] = this.size.height),
              (this.texture =
                Et.map.get(this.src) || this.webgl.image({ src: this.src })),
              this.texture instanceof jt && (this.video = this.texture.video);
            let o = this.element.closest("[data-smooth-scroll-name]"),
              n = this.webgl.camera(o?.dataset?.smoothScrollName || "main");
            (this.plane = this.webgl.plane({
              x: t,
              y: e,
              z: this.posZ,
              density: 20,
              width: r,
              height: s,
              originX: 0,
              originY: 0,
              screen: !0,
              camera: n,
              hideOnLoad: !1,
              texture: this.texture,
              uniforms: this.uniforms,
              fragment: this.fragment,
              vertex: this.vertex,
            })),
              this.observable.update(),
              this.updatePlane(),
              this.resolver.resolve(),
              setTimeout(() => {
                this.observable.update(), this.updatePlane();
              }, 100),
              setTimeout(() => {
                this.observable.update(), this.updatePlane();
              }, 200),
              setTimeout(() => {
                this.observable.update(), this.updatePlane();
              }, 500),
              setTimeout(() => {
                this.observable.update(), this.updatePlane();
              }, 1e3);
          });
      }
      handleScroll(t) {
        if (this.plane && this.parallax > 0) {
          let e = this.observable.height,
            s =
              (t.y + this.viewport.height * 0.5 - e * 0.5 - this.observable.y) *
              this.parallax;
          (this.plane.y = this.observable.y + s),
            (this.observable.ref.style.transform = `translate3d(0px, ${s}px, 0px)`);
        }
      }
      updatePlane() {
        let { x: t, y: e, width: r, height: s, visible: o } = this.observable;
        this.plane &&
          ((this.plane.x = t),
          (this.plane.y = e),
          (this.plane.width = r),
          (this.plane.height = s),
          this.plane.enable("_", o || this.texture instanceof jt));
      }
      updateMouse(t) {
        if (this.plane) {
          let e = this.plane.camera;
          (this.mousePosGl[0] = e.cx(t.x) + e.x),
            (this.mousePosGl[1] = e.cy(t.y) - e.y);
        }
      }
      get vertex() {
        return Jr;
      }
      get fragment() {
        return Ye;
      }
      onDestroy() {
        this.plane && this.plane.destroy();
      }
    };
    h([m(N, !0)], A.prototype, "webgl", 2),
      h([m(I, !0)], A.prototype, "scrollEmitter", 2),
      h([m(W, !0)], A.prototype, "mouseEmitter", 2),
      h([$("src")], A.prototype, "src", 2),
      h([$("z", { type: Number })], A.prototype, "posZ", 2),
      h([$("size", { type: Object })], A.prototype, "size", 2),
      h([$("nodistort", { type: Boolean })], A.prototype, "nodistort", 2),
      h([$("parallax", { type: Number })], A.prototype, "parallax", 2),
      h([$("video", { type: Boolean })], A.prototype, "isVideo", 2),
      (A = h([S("media-webgl")], A));
  });
var es,
  ts = l(() => {
    es = `#version 300 es
precision mediump float;
#define GLSLIFY 1
uniform sampler2D u_texture;uniform float u_alpha;uniform float u_texScale;uniform float u_time;uniform vec3 u_color;uniform vec2 u_mouse;uniform vec2 u_res;uniform float u_scale;uniform float u_bg;uniform vec3 u_accentColor;out vec4 fragColor;in vec2 v_texcoord;vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+1.0*C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.+3.0*C.xxx;i=mod(i,289.0);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}void main(){vec2 coord=v_texcoord;vec2 center=vec2(0.5);float scale=u_scale;if(u_bg==1.){scale*=.99;}coord=center+(coord-center)/u_texScale/scale;coord+=snoise(vec3(v_texcoord*1.2,scale*-.3))*(1.0-scale);float rs=u_res.x/u_res.y;vec2 mp=vec2(u_mouse.x,(u_res.y-u_mouse.y)/rs);vec2 st=vec2(gl_FragCoord.x/u_res.x,gl_FragCoord.y/u_res.y/rs);float md=distance(st,mp/u_res);float sm=smoothstep(0.05,0.0,md);float n2=snoise(vec3(v_texcoord,md+cos(u_time)*0.1))*sm*.5;if(u_bg==1.){n2=snoise(vec3(v_texcoord,md+cos(u_time)*0.15))*sm*.3;}coord.xy+=n2;if(coord.x<0.||coord.x>1.||coord.y<0.||coord.y>1.){discard;}vec4 color=texture(u_texture,coord);color.rgb=u_color/255.;color.rgb=mix(color.rgb,u_accentColor,min(1.0,smoothstep(0.1,0.0,md)));color.a*=pow(scale,u_bg==1.0 ? 4.0 : 2.0);fragColor=color;}`;
  });
var rs,
  is = l(() => {
    rs = `#version 300 es
precision mediump float;
#define GLSLIFY 1
in vec4 a_position;in vec2 a_texcoord;uniform float u_time;uniform float u_bg;uniform vec2 u_mouse;uniform vec2 u_mouseGl;uniform vec2 u_res;uniform mat4 u_proj;uniform mat4 u_view;uniform mat4 u_model;out vec2 v_texcoord;void main(){vec4 model=u_model*a_position;if(u_bg==1.){float d=length(u_mouseGl.xy-model.xy);float bulgeAmount=0.01;float bulgeRadius=0.1;float falloff=1.0-smoothstep(0.0,bulgeRadius,d);float displacement=falloff*bulgeAmount;model.z-=displacement;}vec4 position=u_proj*u_view*model;gl_Position=position;v_texcoord=a_texcoord;}`;
  });
var Tt,
  ss = l(() => {
    "use strict";
    L();
    Ft();
    He();
    X();
    ts();
    is();
    Tt = class extends A {
      color = [255, 0, 0];
      bg = !1;
      mouse;
      constructor(t) {
        super(t, {
          u_scale: 0,
          u_texScale: 0.5,
          u_mouse: [0, 0],
          u_color: [76,0,255],
        }),
          (this.onEnter = y.to(
            this.uniforms,
            { u_scale: 1 },
            { duration: 1800, easing: E.easeOutExpo }
          )),
          (this.onLeave = y.to(
            this.uniforms,
            { u_scale: 0 },
            { duration: 1200, easing: E.easeOutExpo }
          ));
      }
      onCreate() {
        super.onCreate(),
          (this.uniforms.u_mouse = this.mouse.position),
          (this.uniforms.u_color = this.color),
          (this.uniforms.u_bg = this.bg ? 1 : 0);
      }
      get vertex() {
        return rs;
      }
      get fragment() {
        return es;
      }
    };
    h([$("color", { parse: JSON.parse })], Tt.prototype, "color", 2),
      h([$("bg", { parse: Boolean })], Tt.prototype, "bg", 2),
      h([m(W, !0)], Tt.prototype, "mouse", 2),
      (Tt = h([S("logo")], Tt));
  });
function vo() {
  return new Promise((i, t) => {
    document.readyState !== "loading"
      ? document.fonts.ready.then(i)
      : document.addEventListener("DOMContentLoaded", () => {
          document.fonts.ready.then(i);
        });
  });
}
var go,
  Mt,
  os = l(() => {
    "use strict";
    L();
    Ct();
    X();
    Lt();
    he();
    ue();
    it();
    (go = !1),
      (Mt = class {
        constructor(t) {
          this.element = t;
        }
        animations;
        scroller;
        progressEl;
        service;
        composer;
        onCreate() {
          let [{ component: t }] = this.composer.query(V);
          (this.scroller = t),
            (this.animations = this.composer
              .query(M, this.element)
              .map(({ component: e }) => e)),
            this.scroller.scrollToY(0),
            this.scroller.lock(!0, !0),
            vo().then(async () => {
              if (((document.body.style.visibility = ""), go))
                this.service.load(() => {}),
                  this.service.resolve(),
                  this.element.classList.add("is-done"),
                  document.documentElement.classList.add("is-loaded"),
                  this.scroller.lock(!1, !0),
                  (this.element.style.display = "none");
              else {
                let e = !1;
                await Promise.all([
                  ...this.animations.map(
                    (r) => (r.lock().override(), r.onEnter.start())
                  ),
                  y.to(
                    this.progressEl,
                    { x: 80 },
                    {
                      duration: 1200,
                      units: { x: "%" },
                      easing: E.easeOutExpo,
                      onUpdate: (r, { linear: s }) => {
                        s > 0.7 &&
                          !e &&
                          ((e = !0),
                          this.service.load((o) => {
                            this.progressEl.textContent = `${Math.min(
                              o * 100,
                              99
                            ).toFixed(0)}`;
                          }));
                      },
                    }
                  ),
                ]),
                  F()
                    ? (this.service.load(() => {}),
                      this.service.resolve(),
                      this.element.classList.add("is-done"),
                      document.documentElement.classList.add("is-loaded"))
                    : Promise.all([this.service.loaded()]).then(() =>
                        this.done()
                      );
              }
            });
        }
        async done() {
          this.animations.map((e) => e.onLeave.start());
          let t = !1;
          y.timeline({
            onSeek: (e, r) => {
              r >= 0.4 &&
                !t &&
                ((t = !0),
                this.service.resolve(),
                this.scroller.lock(!1, !0),
                this.element.classList.add("will-be-done"),
                this.element.classList.add("is-done"),
                document.documentElement.classList.add("is-loaded"));
            },
          })
            .to(
              this.progressEl,
              { x: -20, scale: 2 },
              {
                duration: 1200,
                units: { x: "%" },
                easing: E.easeInOutExpo,
                delay: 200,
              }
            )
            .to(this.element, { opacity: 0 }, { duration: 1e3, offset: -1 });
        }
      });
    h([U("[data-preloader-progress]")], Mt.prototype, "progressEl", 2),
      h([m(et, !0)], Mt.prototype, "service", 2),
      h([Y()], Mt.prototype, "composer", 2),
      (Mt = h([S("preloader")], Mt));
  });
var as,
  ns = l(() => {
    as = `#version 300 es
precision mediump float;
#define GLSLIFY 1
in vec4 a_position;in vec2 a_texcoord;uniform float u_time;uniform float u_twist;uniform vec2 u_plane;uniform vec2 u_mouseGl;uniform mat4 u_proj;uniform mat4 u_view;uniform mat4 u_model;out vec2 v_texcoord;mat4 rotate(float angle,vec3 axis,vec3 origin){float c=cos(angle);float s=sin(angle);float t=1.0-c;vec3 normalizedAxis=normalize(axis);float x=normalizedAxis.x;float y=normalizedAxis.y;float z=normalizedAxis.z;mat4 translateToOrigin=mat4(1.0,0.0,0.0,-origin.x,0.0,1.0,0.0,-origin.y,0.0,0.0,1.0,-origin.z,0.0,0.0,0.0,1.0);mat4 rotationMatrix=mat4(t*x*x+c,t*x*y-s*z,t*x*z+s*y,0.0,t*x*y+s*z,t*y*y+c,t*y*z-s*x,0.0,t*x*z-s*y,t*y*z+s*x,t*z*z+c,0.0,0.0,0.0,0.0,1.0);mat4 translateBack=mat4(1.0,0.0,0.0,origin.x,0.0,1.0,0.0,origin.y,0.0,0.0,1.0,origin.z,0.0,0.0,0.0,1.0);return translateBack*rotationMatrix*translateToOrigin;}void main(){vec4 model=u_model*a_position;model*=rotate(a_position.y*u_twist*1.5,vec3(0.0,1.0,0.0),vec3(0.,0.,0.));gl_Position=u_proj*u_view*model;v_texcoord=a_texcoord;}`;
  });
var rt,
  cs = l(() => {
    "use strict";
    L();
    Ct();
    j();
    bt();
    C();
    ee();
    dt();
    X();
    _t();
    Ae();
    $i();
    ns();
    it();
    Ft();
    rt = class extends M {
      constructor(e) {
        super(e);
        this.element = e;
        (this.observable = P(this.element, { resizeDetection: !0 })),
          (this.onEnter = y.to(
            this.viewState,
            { progress: 1 },
            {
              autoStart: !1,
              duration: 800,
              easing: E.easeOutSine,
              onStart: () => (this.fading = !1),
              onUpdate: ({ progress: r }) => {
                this.element.style.opacity = `${r}`;
                for (let s of this.items) {
                  let o = this.teasers.get(s);
                  o && ((o.uniforms.u_alpha = r), (o.uniforms.u_fadeOut = r));
                }
              },
            }
          )),
          (this.onLeave = y.to(
            this.viewState,
            { progress: 0 },
            {
              autoStart: !1,
              duration: 800,
              easing: E.easeOutSine,
              onStart: () => (this.fading = !0),
              onUpdate: ({ progress: r }) => {
                this.element.style.opacity = `${r}`;
                for (let s of this.items) {
                  let o = this.teasers.get(s);
                  s.ref.style.setProperty(
                    "--title-y",
                    `${-100 * (1 - r) * 1.2}%`
                  ),
                    o && ((o.uniforms.u_alpha = r), (o.uniforms.u_fadeOut = r));
                }
              },
            }
          ));
      }
      observable;
      teasers = new Map();
      fading = !1;
      mousePos = [0, 0];
      titleLines = new Map();
      titlePos = new Map();
      viewState = { progress: 0 };
      items = [];
      container;
      mouseEmitter;
      webgl;
      scrollEmitter;
      onListen() {
        return w(
          this.scrollEmitter.on(B.OUTPUT, (e) => this.handleScroll(e)),
          this.scrollEmitter.on(B.VIRTUAL, (e) => this.handleVirtual(e)),
          this.mouseEmitter.on("lerp", (e) => this.updateMouse(e)),
          this.mouseEmitter.on("velocity", (e) => this.updateVelocity(e)),
          this.viewport.onDimChange(() => this.updateSize())
        );
      }
      onCreate() {
        super.onCreate(),
          Et.ready.then(() => {
            for (let e of this.items) {
              let r = e.ref.dataset.projectTeaser,
                s = at("[data-project-title] > div", e.ref);
              if (
                (this.titleLines.set(e, s),
                this.titlePos.set(e, [s, { t0: 0, t1: 0 }]),
                r)
              ) {
                let o = JSON.parse(r),
                  n = this.element.closest("[data-smooth-scroll-name]"),
                  a = this.webgl.camera(n?.dataset?.smoothScrollName || "main");
                this.teasers.set(
                  e,
                  this.webgl.plane({
                    x: 0,
                    y: e.y,
                    density: 20,
                    width: 600,
                    height: 600,
                    screen: !0,
                    texture:
                      Et.map.get(o.url) || this.webgl.image({ src: o.url }),
                    camera: a,
                    vertex: as,
                    fragment: Ye,
                    uniforms: {
                      u_velocity: [0, 0],
                      u_mediaSize: [600, 600],
                      u_planeScale: [1, 1],
                      u_mouseGl: this.mousePos,
                      u_mouse: this.mouseEmitter.position,
                      u_twist: 1,
                    },
                  })
                );
              }
            }
            this.updateSize(),
              this.handleScroll({ x: 0, y: 0 }, !0),
              this.handleVirtual({ x: 0, y: 0 }, !0),
              setTimeout(() => {
                this.handleScroll({ x: 0, y: 0 }, !0),
                  this.handleVirtual({ x: 0, y: 0 }, !0);
              }, 50),
              R.main.add((e) => this.handleTick(e));
          });
      }
      updateMouse(e) {
        if (this.teasers.size > 0) {
          let s = this.teasers.get(this.items[0]).camera;
          (this.mousePos[0] = s.cx(e.x) + s.x),
            (this.mousePos[1] = s.cy(e.y) - s.y);
        }
      }
      updateVelocity(e) {
        for (let [r, s] of this.teasers)
          (s.uniforms.u_velocity[0] = e.x), (s.uniforms.u_velocity[1] = e.y);
      }
      handleTick(e = 1) {
        for (let [r, [s, o]] of this.titlePos)
          if (!this.fading) {
            o.t1 = nt(o.t1, o.t0, 0.08 * e * 0.06);
            let n = 1 - Math.abs(z(o.t1, 105, -105, -1, 1));
            r.ref.style.setProperty("--item-visibility", `${n.toFixed(3)}`),
              r.ref.style.setProperty("--title-y", `${o.t1.toFixed(3)}%`);
          }
      }
      get maxHeight() {
        return this.items.length * this.viewport.height ;
      }
      updateSize() {
        this.element.style.height = `${this.maxHeight}px`;
      }
      getScrollProps(e) {
        let r = window.innerHeight,
          s = this.observable.y,
          o = this.observable.width,
          n =window.innerHeight,
          a = e + r * 0.5,
          c = this.maxHeight,
          f = z(a, s, s + c, 0, 1),
          u = (c - n) * f,
          x = z(e + r * 0.75, s, s + r * 0.25, 0, 1),
          d = z(e + r * 0.5, s + c, s + c + r * 0.5, 0, 1),
          p = !(x < -0.8 || d > 1.8);
        return {
          viewHeight: r,
          sectionY: s,
          sectionWidth: o,
          containerHeight: n,
          scrollY: a,
          maxHeight: c,
          progress: f,
          containerY: u,
          introProg: x,
          outroProg: d,
          active: p,
        };
      }
      handleVirtual({ y: e }, r = !1) {
        let { introProg: s, outroProg: o, active: n } = this.getScrollProps(e);
        if (!(!n && !r))
          for (let a = 0, c = this.items.length; a < c; a++) {
            let f = this.items[a],
              u = this.titlePos.get(f);
            if (u) {
              let x = Math.max(105 - s * 105, 0),
                d = Math.max(o * -105, -105),
                p = x <= 50 && d >= -50;
              f.ref.classList.toggle("is-active", p), (u[1].t0 = o > 0 ? d : x);
            }
          }
      }
      handleScroll({ y: e }, r = !1) {
        let {
          viewHeight: s,
          sectionY: o,
          sectionWidth: n,
          scrollY: a,
          containerY: c,
          active: f,
          introProg: u,
          outroProg: x,
        } = this.getScrollProps(e);
        console.log(this.getScrollProps(e))
        if (!(!f && !r))
          for (let d = 0, p = this.items.length; d < p; d++) {
            let v = this.items[d],
              _ = this.teasers.get(v),
              st = a,
              ot = c + v.y + v.height * 0.5,
              ft = Pt(z(st - ot, -v.height * 1.2, v.height * 1.2, 0, 1), 0, 1),
              Yt = -Math.pow(2 * ft - 1, 2) + 1,
              Ht = z(ft, 0, 1, -1, 1),
              Ue = -s * 0.15 * Ht;
            if (
              (v.ref.style.setProperty(
                "--item-progress",
                `${(Yt * 100).toFixed(3)}%`
              ),
              (v.ref.style.transform = `translate3d(0px, ${c}px, 0px)`),
              (v.ref.style.transform = `translate3d(0px, ${c + Ue}px, 0px)`),
              v.ref.classList.toggle("is-focus", Wi(Yt, 0.75, 1)),
              _)
            ) {
              let Ut = z(st - ot, -v.height * 2, v.height * 2, 0, 1);
              if (
                (_.enable("project-slider", Ut >= 0.15 && Ut <= 0.8),
                !_.disabled || r)
              ) {
                let ps = o + (a - o) + s * 0.5,
                  Xe = z(Ut, 0, 1, -1, 1),
                  ms = n,
                  ds = s * 0.5 + 600,
                  vs = n * 1.35,
                  gs = s * 0.5,
                  Bi = (z(Ut, 0, 1, 270, 90) * Math.PI) / 180,
                  ys = vs + ms * Math.cos(Bi),
                  xs = gs + ds * Math.sin(Bi);
                (_.x = this.observable.x + ys),
                  (_.y = ps - xs),
                  (_.rotationY = Xe * 4),
                  (_.rotationZ = -1.5 * Xe),
                  (_.uniforms.u_twist = Xe);
              }
            }
          }
      }
      onDestroy() {
        for (let e of this.items) {
          let r = this.teasers.get(e);
          wt(e), r && r.destroy();
        }
      }
    };
    h(
      [
        se("[data-project-item]", {
          parse: (i) => Array.from(i).map((t) => P(t, { resizeDetection: !0 })),
        }),
      ],
      rt.prototype,
      "items",
      2
    ),
      h(
        [
          U("[data-project-container]", {
            parse: (i) => P(i, { resizeDetection: !0 }),
          }),
        ],
        rt.prototype,
        "container",
        2
      ),
      h([m(W, !0)], rt.prototype, "mouseEmitter", 2),
      h([m(N, !0)], rt.prototype, "webgl", 2),
      h([m(I, !0)], rt.prototype, "scrollEmitter", 2),
      (rt = h([S("project-slider")], rt));
  });
var J,
  ls = l(() => {
    "use strict";
    L();
    Ct();
    j();
    bt();
    X();
    C();
    ht();
    Vt();
    Ft();
    _t();
    Fe();
    He();
    ue();
    it();
    J = class {
      media;
      element;
      firstMove = !0;
      hovering = !1;
      unlistenVideo;
      viewAnim = [];
      active = !1;
      scale = { progress: 0 };
      buldge = { progress: 0 };
      trigger;
      mouseEmitter;
      viewport;
      router;
      scrollEmitter;
      composer;
      constructor(t) {
        this.element = P(t, { resizeDetection: !0 });
      }
      onListen() {
        return w(
          this.mouseEmitter.on("lerp", (t) => this.handleMouseMove(t)),
          this.scrollEmitter.on(B.VIRTUAL, () => {
            !this.media.video.paused &&
              this.scale.progress > 0.5 &&
              this.togglePlay();
          }),
          g(this.trigger, "mouseenter", () => {
            (this.hovering = !0),
              b.addState("reel", this.media.video.paused ? "play" : "close");
          }),
          g(this.trigger, ["mouseleave", "mousecancel"], () => {
            (this.hovering = !1),
              b.removeState("reel", "play"),
              b.removeState("reel", "close");
          }),
          this.viewport.onDimChange(() => {
            if (this.active) {
              this.scaleTo(1);
              let [t] = this.composer.query(V, this.router.outlet);
              t && t.component.scrollToY(this.element.y, !0);
            }
          }),
          g(this.trigger, "click", () => this.togglePlay())
        );
      }
      onCreate() {
        let [{ component: t }] = this.composer.query(A, this.element.ref),
          e = this.composer.query(M, this.element.ref);
        t.ready.then(() => {
          this.unlistenVideo = g(t.video, "ended", () => {
            (t.video.currentTime = 0), this.toggleFullscreen(!1);
          });
        }),
          (this.media = t),
          (this.viewAnim = e
            .map(({ component: r }) => r)
            .filter((r) => !(r instanceof A)));
      }
      onDestroy() {
        this.unlistenVideo && this.unlistenVideo();
      }
      handleMouseMove({ x: t, y: e }) {
        if (this.firstMove) {
          let r = z(t, 0, this.viewport.width, -1, 1),
            s = z(e, 0, this.viewport.height, -1, 1);
          this.media.plane &&
            ((this.media.plane.rotationX =
              s * 0.15 * (1 - this.scale.progress)),
            (this.media.plane.rotationY =
              r * 0.15 * (1 - this.scale.progress)));
        }
      }
      scaleTo(t) {
        let e = this.media.observable.size,
          r = this.viewport.size,
          s = this.media.plane,
          o = this.active !== (t === 1),
          n = y.timeline();
        if (
          ((this.active = t === 1),
          n
            .to(
              this.buldge,
              { progress: t },
              {
                duration: 1e3,
                easing: E.easeOutSine,
                onUpdate: ({ progress: a }) => {
                  if (s) {
                    let c = -4 * Math.pow(a - 0.5, 2) + 1;
                    s.uniforms.u_buldge = t == 1 ? c : -c;
                  }
                },
              }
            )
            .to(
              this.scale,
              { progress: t },
              {
                duration: 1e3,
                offset: -1,
                easing: E.easeInOutExpo,
                onUpdate: ({ progress: a }) => {
                  if (s) {
                    let c = r.width / e.width,
                      f = r.height / e.height,
                      u = 1 + (c - 1) * a,
                      x = 1 + (f - 1) * a;
                    (s.scaleX = u),
                      (s.scaleY = x),
                      (s.uniforms.u_planeScale[0] = u),
                      (s.uniforms.u_planeScale[1] = x),
                      (s.uniforms.u_distort = 1 - a);
                  }
                },
              }
            ),
          o)
        )
          for (let a of this.viewAnim)
            a.lock().override(),
              t == 1
                ? (a.onEnter.stop(), a.onLeave.start())
                : (a.onLeave.stop(), a.onEnter.start());
      }
      togglePlay() {
        let t = this.media.video;
        t.paused
          ? ((t.muted = !1),
            (t.volume = 0.4),
            t.play(),
            this.toggleFullscreen(!0))
          : (t.pause(), this.toggleFullscreen(!1));
      }
      toggleFullscreen(t = !0) {
        let [e] = this.composer.query(V, this.router.outlet);
        t
          ? (this.scaleTo(1),
            b.addState("reel", "close"),
            e && (e.component.scrollToY(this.element.y), e.component.lock()))
          : (this.scaleTo(0),
            b.removeState("reel", "close"),
            e && e.component.lock(!1),
            this.hovering && b.addState("reel", "play"));
      }
    };
    h([U("[data-reel-trigger]")], J.prototype, "trigger", 2),
      h([m(W, !0)], J.prototype, "mouseEmitter", 2),
      h([m(G, !0)], J.prototype, "viewport", 2),
      h([m(T, !0)], J.prototype, "router", 2),
      h([m(I, !0)], J.prototype, "scrollEmitter", 2),
      h([Y()], J.prototype, "composer", 2),
      (J = h([S("reel")], J));
  });
var hs = {};
fe(hs, { App: () => zt, default: () => xo });
var zt,
  xo,
  us = l(() => {
    "use strict";
    L();
    gt();
    ht();
    Vt();
    ee();
    X();
    xi();
    Fi();
    Fe();
    ss();
    He();
    Yi();
    os();
    cs();
    ls();
    ue();
    Hi();
    Ie();
    Ui();
    Ni();
    it();
    Ft();
    he();
    _t();
    zt = class {
      router;
      webgl;
      composer;
      async onCreate() {
        let t = await this.router,
          e = await this.webgl;
        document.documentElement.classList.add("is-loaded"),
          t.on(O.AFTER_ENTER, () => this.composer.update()),
          t.on(O.AFTER_LEAVE, ({ fromElement: r }) =>
            this.composer.update(r, !0)
          ),
          t.animate({
            name: "glfade",
            enter: ({ toElement: r, fromElement: s }) => {
              this.composer.update(
                r,
                !1,
                (c) => c === V || c.prototype instanceof M
              );
              let o = this.composer
                  .query(M, r)
                  .map(
                    ({ component: c }) => (
                      c.lock(!1).reset(),
                      c.onLeave.override(!1),
                      c.isInEntry() || c.update(),
                      c
                    )
                  )
                  .filter((c) => c.isInEntry()),
                n = this.composer
                  .query(M, s)
                  .map(
                    ({ component: c }) => (c.lock(), c.onEnter.override(!1), c)
                  );
              this.composer.query(V, s).forEach(({ component: c }) => {
                c.lock(!0, !0);
              }),
                this.composer.query(V, r).forEach(({ component: c }) => {
                  c.scrollToY(0, !0), c.lock(!1, !0);
                });
              let a = y.timeline();
              return (
                n.length > 0 && a.add(n.map((c) => c.onLeave)),
                o.length > 0 &&
                  a.add(
                    o.map((c) => c.onEnter),
                    { offset: -0.8 }
                  ),
                a
              );
            },
          }),
          document.documentElement.classList.add("is-webgl"),
          e.ctx.disable(e.ctx.CULL_FACE),
          e.ctx.enable(e.ctx.DEPTH_TEST);
      }
    };
    h([m(T)], zt.prototype, "router", 2),
      h([m(N)], zt.prototype, "webgl", 2),
      h([Y()], zt.prototype, "composer", 2),
      (zt = h(
        [
          Y({
            components: [Ot, kt, ut, V, A, rt, Q, H, Z, J, b, Mt, Tt, Q],
            services: [
              new Dt(),
              new N({
                uniforms: {
                  u_accentColor: [0.51, 0.19, 0.75]  // #8131BF  
                }
              }),
              
              
              new G(),
              new I(),
              new W(),
              new et(),
              new T({
                routerConfig: {
                  trigger:
                    'a[href]:not([data-no-route]):not([target="_blank"]):not([target="blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])',
                },
              }),
            ],
          }),
        ],
        zt
      ));
    xo = new zt();
  });
Lt();
var Gi = !1;
async function wo() {
  F()
    ? ((Gi = !0), await Promise.resolve().then(() => (Kr(), Zr)))
    : await Promise.resolve().then(() => (us(), hs));
}
wo();
window.addEventListener("resize", () => {
  let i = F();
  ((i && !Gi) || (!i && Gi)) && window.location.reload();
});

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the animation
gsap.to('.cardparallax', {
  y: 300, // Move the card 300px down
  x: 300,
  scrollTrigger: {
    trigger: '#heeee', // Element that triggers the animation
    start: 'top top', // Animation starts when the top of #home hits the top of the viewport
    end: 'bottom bottom', // Animation ends when the bottom of #home hits the top of the viewport
    scrub: true, // Smoothly animate with the scroll
  }
});
