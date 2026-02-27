var Du = Array.isArray, D0 = Array.prototype.indexOf, Ou = Array.from, Da = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Oa = Object.getOwnPropertyDescriptors, O0 = Object.prototype, R0 = Array.prototype, Ru = Object.getPrototypeOf, _o = Object.isExtensible;
function $r(e) {
  return typeof e == "function";
}
const yr = () => {
};
function M0(e) {
  return e();
}
function $i(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const nn = 2, Ra = 4, os = 8, Mu = 16, Dn = 32, Rr = 64, Wi = 128, Pt = 256, Vi = 512, At = 1024, An = 2048, or = 4096, Cn = 8192, as = 16384, F0 = 32768, ci = 65536, N0 = 1 << 17, I0 = 1 << 19, Ma = 1 << 20, cu = 1 << 21, $n = Symbol("$state"), Fa = Symbol("legacy props"), P0 = Symbol("");
function Na(e) {
  return e === this.v;
}
function Ia(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Fu(e) {
  return !Ia(e, this.v);
}
function L0(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function B0() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function q0(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function z0() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function j0(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function U0() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function H0() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $0() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Mr = !1;
function W0() {
  Mr = !0;
}
const Nu = 1, Iu = 2, Pa = 4, V0 = 8, G0 = 16, Y0 = 1, K0 = 2, La = 4, Z0 = 8, X0 = 16, J0 = 1, Q0 = 2, Et = Symbol(), ed = "http://www.w3.org/1999/xhtml", td = "http://www.w3.org/2000/svg";
function Ba(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ze = null;
function vo(e) {
  ze = e;
}
function ar(e, t = !1, n) {
  var r = ze = {
    p: ze,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Mr && !t && (ze.l = {
    s: null,
    u: null,
    r1: [],
    r2: Er(!1)
  }), Bu(() => {
    r.d = !0;
  });
}
function cr(e) {
  const t = ze;
  if (t !== null) {
    const u = t.e;
    if (u !== null) {
      var n = Ae, r = Ne;
      t.e = null;
      try {
        for (var i = 0; i < u.length; i++) {
          var s = u[i];
          Wn(s.effect), _n(s.reaction), qu(s.fn);
        }
      } finally {
        Wn(n), _n(r);
      }
    }
    ze = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function li() {
  return !Mr || ze !== null && ze.l === null;
}
function er(e) {
  if (typeof e != "object" || e === null || $n in e)
    return e;
  const t = Ru(e);
  if (t !== O0 && t !== R0)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Du(e), i = /* @__PURE__ */ Se(0), s = Ne, u = (a) => {
    var c = Ne;
    _n(s);
    var d = a();
    return _n(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && U0();
        var h = n.get(c);
        return h === void 0 ? (h = u(() => /* @__PURE__ */ Se(d.value)), n.set(c, h)) : H(
          h,
          u(() => er(d.value))
        ), !0;
      },
      deleteProperty(a, c) {
        var d = n.get(c);
        if (d === void 0)
          c in a && (n.set(
            c,
            u(() => /* @__PURE__ */ Se(Et))
          ), qs(i));
        else {
          if (r && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(c);
            Number.isInteger(p) && p < h.v && H(h, p);
          }
          H(d, Et), qs(i);
        }
        return !0;
      },
      get(a, c, d) {
        if (c === $n)
          return e;
        var h = n.get(c), p = c in a;
        if (h === void 0 && (!p || Hn(a, c)?.writable) && (h = u(() => /* @__PURE__ */ Se(er(p ? a[c] : Et))), n.set(c, h)), h !== void 0) {
          var b = C(h);
          return b === Et ? void 0 : b;
        }
        return Reflect.get(a, c, d);
      },
      getOwnPropertyDescriptor(a, c) {
        var d = Reflect.getOwnPropertyDescriptor(a, c);
        if (d && "value" in d) {
          var h = n.get(c);
          h && (d.value = C(h));
        } else if (d === void 0) {
          var p = n.get(c), b = p?.v;
          if (p !== void 0 && b !== Et)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return d;
      },
      has(a, c) {
        if (c === $n)
          return !0;
        var d = n.get(c), h = d !== void 0 && d.v !== Et || Reflect.has(a, c);
        if (d !== void 0 || Ae !== null && (!h || Hn(a, c)?.writable)) {
          d === void 0 && (d = u(() => /* @__PURE__ */ Se(h ? er(a[c]) : Et)), n.set(c, d));
          var p = C(d);
          if (p === Et)
            return !1;
        }
        return h;
      },
      set(a, c, d, h) {
        var p = n.get(c), b = c in a;
        if (r && c === "length")
          for (var _ = d; _ < /** @type {Source<number>} */
          p.v; _ += 1) {
            var g = n.get(_ + "");
            g !== void 0 ? H(g, Et) : _ in a && (g = u(() => /* @__PURE__ */ Se(Et)), n.set(_ + "", g));
          }
        p === void 0 ? (!b || Hn(a, c)?.writable) && (p = u(() => /* @__PURE__ */ Se(void 0)), H(
          p,
          u(() => er(d))
        ), n.set(c, p)) : (b = p.v !== Et, H(
          p,
          u(() => er(d))
        ));
        var w = Reflect.getOwnPropertyDescriptor(a, c);
        if (w?.set && w.set.call(h, d), !b) {
          if (r && typeof c == "string") {
            var v = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(c);
            Number.isInteger(E) && E >= v.v && H(v, E + 1);
          }
          qs(i);
        }
        return !0;
      },
      ownKeys(a) {
        C(i);
        var c = Reflect.ownKeys(a).filter((p) => {
          var b = n.get(p);
          return b === void 0 || b.v !== Et;
        });
        for (var [d, h] of n)
          h.v !== Et && !(d in a) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        H0();
      }
    }
  );
}
function qs(e, t = 1) {
  H(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  var t = nn | An, n = Ne !== null && (Ne.f & nn) !== 0 ? (
    /** @type {Derived} */
    Ne
  ) : null;
  return Ae === null || n !== null && (n.f & Pt) !== 0 ? t |= Pt : Ae.f |= Ma, {
    ctx: ze,
    deps: null,
    effects: null,
    equals: Na,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Ae
  };
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  const t = /* @__PURE__ */ kr(e);
  return ec(t), t;
}
// @__NO_SIDE_EFFECTS__
function Pu(e) {
  const t = /* @__PURE__ */ kr(e);
  return t.equals = Fu, t;
}
function qa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Tn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function nd(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & nn) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function za(e) {
  var t, n = Ae;
  Wn(nd(e));
  try {
    qa(e), t = ic(e);
  } finally {
    Wn(n);
  }
  return t;
}
function ja(e) {
  var t = za(e), n = (jn || (e.f & Pt) !== 0) && e.deps !== null ? or : At;
  rn(e, n), e.equals(t) || (e.v = t, e.wv = nc());
}
const ei = /* @__PURE__ */ new Map();
function Er(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Na,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  const n = Er(e);
  return ec(n), n;
}
// @__NO_SIDE_EFFECTS__
function Lu(e, t = !1) {
  const n = Er(e);
  return t || (n.equals = Fu), Mr && ze !== null && ze.l !== null && (ze.l.s ??= []).push(n), n;
}
function H(e, t, n = !1) {
  Ne !== null && !hn && li() && (Ne.f & (nn | Mu)) !== 0 && !Sn?.includes(e) && $0();
  let r = n ? er(t) : t;
  return lu(e, r);
}
function lu(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    hi ? ei.set(e, t) : ei.set(e, n), e.v = t, (e.f & nn) !== 0 && ((e.f & An) !== 0 && za(
      /** @type {Derived} */
      e
    ), rn(e, (e.f & Pt) === 0 ? At : or)), e.wv = nc(), Ua(e, An), li() && Ae !== null && (Ae.f & At) !== 0 && (Ae.f & (Dn | Rr)) === 0 && (Wt === null ? dd([e]) : Wt.push(e));
  }
  return t;
}
function xo(e, t = 1) {
  var n = C(e), r = t === 1 ? n++ : n--;
  return H(e, n), r;
}
function Ua(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = li(), i = n.length, s = 0; s < i; s++) {
      var u = n[s], a = u.f;
      (a & An) === 0 && (!r && u === Ae || (rn(u, t), (a & (At | Pt)) !== 0 && ((a & nn) !== 0 ? Ua(
        /** @type {Derived} */
        u,
        or
      ) : fs(
        /** @type {Effect} */
        u
      ))));
    }
}
let rd = !1;
var yo, Ha, $a, Wa;
function id() {
  if (yo === void 0) {
    yo = window, Ha = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $a = Hn(t, "firstChild").get, Wa = Hn(t, "nextSibling").get, _o(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _o(n) && (n.__t = void 0);
  }
}
function cs(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  return $a.call(e);
}
// @__NO_SIDE_EFFECTS__
function ls(e) {
  return Wa.call(e);
}
function G(e, t) {
  return /* @__PURE__ */ pn(e);
}
function Ie(e, t) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pn(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ls(n) : n;
  }
}
function ie(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ls(r);
  return r;
}
function sd(e) {
  e.textContent = "";
}
function Va(e) {
  Ae === null && Ne === null && q0(), Ne !== null && (Ne.f & Pt) !== 0 && Ae === null && B0(), hi && L0();
}
function ud(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Fr(e, t, n, r = !0) {
  var i = Ae, s = {
    ctx: ze,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | An,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Uu(s), s.f |= F0;
    } catch (c) {
      throw Tn(s), c;
    }
  else t !== null && fs(s);
  var u = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Ma | Wi)) === 0;
  if (!u && r && (i !== null && ud(s, i), Ne !== null && (Ne.f & nn) !== 0)) {
    var a = (
      /** @type {Derived} */
      Ne
    );
    (a.effects ??= []).push(s);
  }
  return s;
}
function Bu(e) {
  const t = Fr(os, null, !1);
  return rn(t, At), t.teardown = e, t;
}
function en(e) {
  Va();
  var t = Ae !== null && (Ae.f & Dn) !== 0 && ze !== null && !ze.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      ze
    );
    (n.e ??= []).push({
      fn: e,
      effect: Ae,
      reaction: Ne
    });
  } else {
    var r = qu(e);
    return r;
  }
}
function od(e) {
  return Va(), zu(e);
}
function ad(e) {
  const t = Fr(Rr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Cr(t, () => {
      Tn(t), r(void 0);
    }) : (Tn(t), r(void 0));
  });
}
function qu(e) {
  return Fr(Ra, e, !1);
}
function zu(e) {
  return Fr(os, e, !0);
}
function de(e, t = [], n = kr) {
  const r = t.map(n);
  return di(() => e(...r.map(C)));
}
function di(e, t = 0) {
  return Fr(os | Mu | t, e, !0);
}
function ir(e, t = !0) {
  return Fr(os | Dn, e, !0, t);
}
function Ga(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = hi, r = Ne;
    ko(!0), _n(null);
    try {
      t.call(null);
    } finally {
      ko(n), _n(r);
    }
  }
}
function Ya(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    (n.f & Rr) !== 0 ? n.parent = null : Tn(n, t), n = r;
  }
}
function cd(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Dn) === 0 && Tn(t), t = n;
  }
}
function Tn(e, t = !0) {
  var n = !1;
  (t || (e.f & I0) !== 0) && e.nodes_start !== null && (Ka(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Ya(e, t && !n), Zi(e, 0), rn(e, as);
  var r = e.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  Ga(e);
  var i = e.parent;
  i !== null && i.first !== null && Za(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ka(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ls(e)
    );
    e.remove(), e = n;
  }
}
function Za(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Cr(e, t) {
  var n = [];
  ju(e, n, !0), Xa(n, () => {
    Tn(e), t && t();
  });
}
function Xa(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function ju(e, t, n) {
  if ((e.f & Cn) === 0) {
    if (e.f ^= Cn, e.transitions !== null)
      for (const u of e.transitions)
        (u.is_global || n) && t.push(u);
    for (var r = e.first; r !== null; ) {
      var i = r.next, s = (r.f & ci) !== 0 || (r.f & Dn) !== 0;
      ju(r, t, s ? n : !1), r = i;
    }
  }
}
function ti(e) {
  Ja(e, !0);
}
function Ja(e, t) {
  if ((e.f & Cn) !== 0) {
    e.f ^= Cn, (e.f & At) === 0 && (e.f ^= At), pi(e) && (rn(e, An), fs(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & ci) !== 0 || (n.f & Dn) !== 0;
      Ja(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
let ni = [], du = [];
function Qa() {
  var e = ni;
  ni = [], $i(e);
}
function ld() {
  var e = du;
  du = [], $i(e);
}
function fi(e) {
  ni.length === 0 && queueMicrotask(Qa), ni.push(e);
}
function wo() {
  ni.length > 0 && Qa(), du.length > 0 && ld();
}
let Bi = !1, Gi = !1, Yi = null, nr = !1, hi = !1;
function ko(e) {
  hi = e;
}
let Jr = [];
let Ne = null, hn = !1;
function _n(e) {
  Ne = e;
}
let Ae = null;
function Wn(e) {
  Ae = e;
}
let Sn = null;
function ec(e) {
  Ne !== null && Ne.f & cu && (Sn === null ? Sn = [e] : Sn.push(e));
}
let xt = null, It = 0, Wt = null;
function dd(e) {
  Wt = e;
}
let tc = 1, Ki = 0, jn = !1;
function nc() {
  return ++tc;
}
function pi(e) {
  var t = e.f;
  if ((t & An) !== 0)
    return !0;
  if ((t & or) !== 0) {
    var n = e.deps, r = (t & Pt) !== 0;
    if (n !== null) {
      var i, s, u = (t & Vi) !== 0, a = r && Ae !== null && !jn, c = n.length;
      if (u || a) {
        var d = (
          /** @type {Derived} */
          e
        ), h = d.parent;
        for (i = 0; i < c; i++)
          s = n[i], (u || !s?.reactions?.includes(d)) && (s.reactions ??= []).push(d);
        u && (d.f ^= Vi), a && h !== null && (h.f & Pt) === 0 && (d.f ^= Pt);
      }
      for (i = 0; i < c; i++)
        if (s = n[i], pi(
          /** @type {Derived} */
          s
        ) && ja(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!r || Ae !== null && !jn) && rn(e, At);
  }
  return !1;
}
function fd(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & Wi) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Wi;
      }
    n = n.parent;
  }
  throw Bi = !1, e;
}
function Eo(e) {
  return (e.f & as) === 0 && (e.parent === null || (e.parent.f & Wi) === 0);
}
function ds(e, t, n, r) {
  if (Bi) {
    if (n === null && (Bi = !1), Eo(t))
      throw e;
    return;
  }
  if (n !== null && (Bi = !0), fd(e, t), Eo(t))
    throw e;
}
function rc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      Sn?.includes(e) || ((s.f & nn) !== 0 ? rc(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? rn(s, An) : (s.f & At) !== 0 && rn(s, or), fs(
        /** @type {Effect} */
        s
      )));
    }
}
function ic(e) {
  var t = xt, n = It, r = Wt, i = Ne, s = jn, u = Sn, a = ze, c = hn, d = e.f;
  xt = /** @type {null | Value[]} */
  null, It = 0, Wt = null, jn = (d & Pt) !== 0 && (hn || !nr || Ne === null), Ne = (d & (Dn | Rr)) === 0 ? e : null, Sn = null, vo(e.ctx), hn = !1, Ki++, e.f |= cu;
  try {
    var h = (
      /** @type {Function} */
      (0, e.fn)()
    ), p = e.deps;
    if (xt !== null) {
      var b;
      if (Zi(e, It), p !== null && It > 0)
        for (p.length = It + xt.length, b = 0; b < xt.length; b++)
          p[It + b] = xt[b];
      else
        e.deps = p = xt;
      if (!jn)
        for (b = It; b < p.length; b++)
          (p[b].reactions ??= []).push(e);
    } else p !== null && It < p.length && (Zi(e, It), p.length = It);
    if (li() && Wt !== null && !hn && p !== null && (e.f & (nn | or | An)) === 0)
      for (b = 0; b < /** @type {Source[]} */
      Wt.length; b++)
        rc(
          Wt[b],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ki++, Wt !== null && (r === null ? r = Wt : r.push(.../** @type {Source[]} */
    Wt))), h;
  } finally {
    xt = t, It = n, Wt = r, Ne = i, jn = s, Sn = u, vo(a), hn = c, e.f ^= cu;
  }
}
function hd(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = D0.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & nn) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (rn(t, or), (t.f & (Pt | Vi)) === 0 && (t.f ^= Vi), qa(
    /** @type {Derived} **/
    t
  ), Zi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Zi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      hd(e, n[r]);
}
function Uu(e) {
  var t = e.f;
  if ((t & as) === 0) {
    rn(e, At);
    var n = Ae, r = ze, i = nr;
    Ae = e, nr = !0;
    try {
      (t & Mu) !== 0 ? cd(e) : Ya(e), Ga(e);
      var s = ic(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = tc;
      var u = e.deps, a;
    } catch (c) {
      ds(c, e, n, r || e.ctx);
    } finally {
      nr = i, Ae = n;
    }
  }
}
function pd() {
  try {
    z0();
  } catch (e) {
    if (Yi !== null)
      ds(e, Yi, null);
    else
      throw e;
  }
}
function sc() {
  var e = nr;
  try {
    var t = 0;
    for (nr = !0; Jr.length > 0; ) {
      t++ > 1e3 && pd();
      var n = Jr, r = n.length;
      Jr = [];
      for (var i = 0; i < r; i++) {
        var s = bd(n[i]);
        gd(s);
      }
      ei.clear();
    }
  } finally {
    Gi = !1, nr = e, Yi = null;
  }
}
function gd(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (as | Cn)) === 0)
        try {
          pi(r) && (Uu(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Za(r) : r.fn = null));
        } catch (i) {
          ds(i, r, null, r.ctx);
        }
    }
}
function fs(e) {
  Gi || (Gi = !0, queueMicrotask(sc));
  for (var t = Yi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (Rr | Dn)) !== 0) {
      if ((n & At) === 0) return;
      t.f ^= At;
    }
  }
  Jr.push(t);
}
function bd(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, i = (r & (Dn | Rr)) !== 0, s = i && (r & At) !== 0;
    if (!s && (r & Cn) === 0) {
      if ((r & Ra) !== 0)
        t.push(n);
      else if (i)
        n.f ^= At;
      else
        try {
          pi(n) && Uu(n);
        } catch (c) {
          ds(c, n, null, n.ctx);
        }
      var u = n.first;
      if (u !== null) {
        n = u;
        continue;
      }
    }
    var a = n.parent;
    for (n = n.next; n === null && a !== null; )
      n = a.next, a = a.parent;
  }
  return t;
}
function md(e) {
  var t;
  for (wo(); Jr.length > 0; )
    Gi = !0, sc(), wo();
  return (
    /** @type {T} */
    t
  );
}
async function zs() {
  await Promise.resolve(), md();
}
function C(e) {
  var t = e.f, n = (t & nn) !== 0;
  if (Ne !== null && !hn) {
    if (!Sn?.includes(e)) {
      var r = Ne.deps;
      e.rv < Ki && (e.rv = Ki, xt === null && r !== null && r[It] === e ? It++ : xt === null ? xt = [e] : (!jn || !xt.includes(e)) && xt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), s = i.parent;
    s !== null && (s.f & Pt) === 0 && (i.f ^= Pt);
  }
  return n && (i = /** @type {Derived} */
  e, pi(i) && ja(i)), hi && ei.has(e) ? ei.get(e) : e.v;
}
function Vn(e) {
  var t = hn;
  try {
    return hn = !0, e();
  } finally {
    hn = t;
  }
}
const _d = -7169;
function rn(e, t) {
  e.f = e.f & _d | t;
}
function vd(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if ($n in e)
      fu(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && $n in n && fu(n);
      }
  }
}
function fu(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        fu(e[r], t);
      } catch {
      }
    const n = Ru(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Oa(n);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(e);
          } catch {
          }
      }
    }
  }
}
function xd(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const yd = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function wd(e) {
  return yd.includes(e);
}
const kd = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Ed(e) {
  return e = e.toLowerCase(), kd[e] ?? e;
}
const Cd = ["touchstart", "touchmove"];
function Sd(e) {
  return Cd.includes(e);
}
function Ad(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, fi(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Co = !1;
function Td() {
  Co || (Co = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function uc(e) {
  var t = Ne, n = Ae;
  _n(null), Wn(null);
  try {
    return e();
  } finally {
    _n(t), Wn(n);
  }
}
function Dd(e, t, n, r = n) {
  e.addEventListener(t, () => uc(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Td();
}
const oc = /* @__PURE__ */ new Set(), hu = /* @__PURE__ */ new Set();
function ac(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || Zr.call(t, s), !s.cancelBubble)
      return uc(() => n?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? fi(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Ri(e, t, n, r, i) {
  var s = { capture: r, passive: i }, u = ac(e, t, n, s);
  (t === document.body || t === window || t === document) && Bu(() => {
    t.removeEventListener(e, u, s);
  });
}
function gi(e) {
  for (var t = 0; t < e.length; t++)
    oc.add(e[t]);
  for (var n of hu)
    n(e);
}
function Zr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), u = 0, a = e.__root;
  if (a) {
    var c = i.indexOf(a);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    c <= d && (u = c);
  }
  if (s = /** @type {Element} */
  i[u] || e.target, s !== t) {
    Da(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var h = Ne, p = Ae;
    _n(null), Wn(null);
    try {
      for (var b, _ = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = s["__" + r];
          if (w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Du(w)) {
              var [v, ...E] = w;
              v.apply(s, [e, ...E]);
            } else
              w.call(s, e);
        } catch (y) {
          b ? _.push(y) : b = y;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        s = g;
      }
      if (b) {
        for (let y of _)
          queueMicrotask(() => {
            throw y;
          });
        throw b;
      }
    } finally {
      e.__root = t, delete e.currentTarget, _n(h), Wn(p);
    }
  }
}
function Hu(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Sr(e, t) {
  var n = (
    /** @type {Effect} */
    Ae
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ae(e, t) {
  var n = (t & J0) !== 0, r = (t & Q0) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Hu(s ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ pn(i)));
    var u = (
      /** @type {TemplateNode} */
      r || Ha ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pn(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Sr(a, c);
    } else
      Sr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Od(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var u = (
        /** @type {DocumentFragment} */
        Hu(i)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ pn(u)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ pn(a);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Sr(c, c), c;
  };
}
function He() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = cs();
  return e.append(t, n), Sr(t, n), e;
}
function W(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function gt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function js(e, t) {
  return Rd(e, t);
}
const mr = /* @__PURE__ */ new Map();
function Rd(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: u = !0 }) {
  id();
  var a = /* @__PURE__ */ new Set(), c = (p) => {
    for (var b = 0; b < p.length; b++) {
      var _ = p[b];
      if (!a.has(_)) {
        a.add(_);
        var g = Sd(_);
        t.addEventListener(_, Zr, { passive: g });
        var w = mr.get(_);
        w === void 0 ? (document.addEventListener(_, Zr, { passive: g }), mr.set(_, 1)) : mr.set(_, w + 1);
      }
    }
  };
  c(Ou(oc)), hu.add(c);
  var d = void 0, h = ad(() => {
    var p = n ?? t.appendChild(cs());
    return ir(() => {
      if (s) {
        ar({});
        var b = (
          /** @type {ComponentContext} */
          ze
        );
        b.c = s;
      }
      i && (r.$$events = i), d = e(p, r) || {}, s && cr();
    }), () => {
      for (var b of a) {
        t.removeEventListener(b, Zr);
        var _ = (
          /** @type {number} */
          mr.get(b)
        );
        --_ === 0 ? (document.removeEventListener(b, Zr), mr.delete(b)) : mr.set(b, _);
      }
      hu.delete(c), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return Md.set(d, h), d;
}
let Md = /* @__PURE__ */ new WeakMap();
function fe(e, t, [n, r] = [0, 0]) {
  var i = e, s = null, u = null, a = Et, c = n > 0 ? ci : 0, d = !1;
  const h = (b, _ = !0) => {
    d = !0, p(_, b);
  }, p = (b, _) => {
    a !== (a = b) && (a ? (s ? ti(s) : _ && (s = ir(() => _(i))), u && Cr(u, () => {
      u = null;
    })) : (u ? ti(u) : _ && (u = ir(() => _(i, [n + 1, r]))), s && Cr(s, () => {
      s = null;
    })));
  };
  di(() => {
    d = !1, t(h), d || p(null, null);
  }, c);
}
function $u(e, t) {
  return t;
}
function Fd(e, t, n, r) {
  for (var i = [], s = t.length, u = 0; u < s; u++)
    ju(t[u].e, i, !0);
  var a = s > 0 && i.length === 0 && n !== null;
  if (a) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    sd(c), c.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(e, t[0].prev, t[s - 1].next);
  }
  Xa(i, () => {
    for (var d = 0; d < s; d++) {
      var h = t[d];
      a || (r.delete(h.k), Bn(e, h.prev, h.next)), Tn(h.e, !a);
    }
  });
}
function Xi(e, t, n, r, i, s = null) {
  var u = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, c = (t & Pa) !== 0;
  if (c) {
    var d = (
      /** @type {Element} */
      e
    );
    u = d.appendChild(cs());
  }
  var h = null, p = !1, b = /* @__PURE__ */ Pu(() => {
    var _ = n();
    return Du(_) ? _ : _ == null ? [] : Ou(_);
  });
  di(() => {
    var _ = C(b), g = _.length;
    p && g === 0 || (p = g === 0, Nd(_, a, u, i, t, r, n), s !== null && (g === 0 ? h ? ti(h) : h = ir(() => s(u)) : h !== null && Cr(h, () => {
      h = null;
    })), C(b));
  });
}
function Nd(e, t, n, r, i, s, u) {
  var a = (i & V0) !== 0, c = (i & (Nu | Iu)) !== 0, d = e.length, h = t.items, p = t.first, b = p, _, g = null, w, v = [], E = [], y, S, D, A;
  if (a)
    for (A = 0; A < d; A += 1)
      y = e[A], S = s(y, A), D = h.get(S), D !== void 0 && (D.a?.measure(), (w ??= /* @__PURE__ */ new Set()).add(D));
  for (A = 0; A < d; A += 1) {
    if (y = e[A], S = s(y, A), D = h.get(S), D === void 0) {
      var T = b ? (
        /** @type {TemplateNode} */
        b.e.nodes_start
      ) : n;
      g = Pd(
        T,
        t,
        g,
        g === null ? t.first : g.next,
        y,
        S,
        A,
        r,
        i,
        u
      ), h.set(S, g), v = [], E = [], b = g.next;
      continue;
    }
    if (c && Id(D, y, A, i), (D.e.f & Cn) !== 0 && (ti(D.e), a && (D.a?.unfix(), (w ??= /* @__PURE__ */ new Set()).delete(D))), D !== b) {
      if (_ !== void 0 && _.has(D)) {
        if (v.length < E.length) {
          var P = E[0], j;
          g = P.prev;
          var J = v[0], te = v[v.length - 1];
          for (j = 0; j < v.length; j += 1)
            So(v[j], P, n);
          for (j = 0; j < E.length; j += 1)
            _.delete(E[j]);
          Bn(t, J.prev, te.next), Bn(t, g, J), Bn(t, te, P), b = P, g = te, A -= 1, v = [], E = [];
        } else
          _.delete(D), So(D, b, n), Bn(t, D.prev, D.next), Bn(t, D, g === null ? t.first : g.next), Bn(t, g, D), g = D;
        continue;
      }
      for (v = [], E = []; b !== null && b.k !== S; )
        (b.e.f & Cn) === 0 && (_ ??= /* @__PURE__ */ new Set()).add(b), E.push(b), b = b.next;
      if (b === null)
        continue;
      D = b;
    }
    v.push(D), g = D, b = D.next;
  }
  if (b !== null || _ !== void 0) {
    for (var _e = _ === void 0 ? [] : Ou(_); b !== null; )
      (b.e.f & Cn) === 0 && _e.push(b), b = b.next;
    var we = _e.length;
    if (we > 0) {
      var je = (i & Pa) !== 0 && d === 0 ? n : null;
      if (a) {
        for (A = 0; A < we; A += 1)
          _e[A].a?.measure();
        for (A = 0; A < we; A += 1)
          _e[A].a?.fix();
      }
      Fd(t, _e, je, h);
    }
  }
  a && fi(() => {
    if (w !== void 0)
      for (D of w)
        D.a?.apply();
  }), Ae.first = t.first && t.first.e, Ae.last = g && g.e;
}
function Id(e, t, n, r) {
  (r & Nu) !== 0 && lu(e.v, t), (r & Iu) !== 0 ? lu(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Pd(e, t, n, r, i, s, u, a, c, d) {
  var h = (c & Nu) !== 0, p = (c & G0) === 0, b = h ? p ? /* @__PURE__ */ Lu(i) : Er(i) : i, _ = (c & Iu) === 0 ? u : Er(u), g = {
    i: _,
    v: b,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return g.e = ir(() => a(e, b, _, d), rd), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? t.first = g : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function So(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== r; ) {
    var u = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ls(s)
    );
    i.before(s), s = u;
  }
}
function Bn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ld(e, t, n = !1, r = !1, i = !1) {
  var s = e, u = "";
  de(() => {
    var a = (
      /** @type {Effect} */
      Ae
    );
    if (u !== (u = t() ?? "") && (a.nodes_start !== null && (Ka(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), u !== "")) {
      var c = u + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var d = Hu(c);
      if ((n || r) && (d = /** @type {Element} */
      /* @__PURE__ */ pn(d)), Sr(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pn(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), n || r)
        for (; /* @__PURE__ */ pn(d); )
          s.before(
            /** @type {Node} */
            /* @__PURE__ */ pn(d)
          );
      else
        s.before(d);
    }
  });
}
function et(e, t, n, r, i) {
  var s = t.$$slots?.[n], u = !1;
  s === !0 && (s = t.children, u = !0), s === void 0 || s(e, u ? () => r : r);
}
function Bd(e, t, n) {
  var r = e, i, s;
  di(() => {
    i !== (i = t()) && (s && (Cr(s), s = null), i && (s = ir(() => n(r, i))));
  }, ci);
}
function qd(e, t, n, r, i, s) {
  var u, a, c = null, d = (
    /** @type {TemplateNode} */
    e
  ), h;
  di(() => {
    const p = t() || null;
    var b = td;
    p !== u && (h && (p === null ? Cr(h, () => {
      h = null, a = null;
    }) : p === a ? ti(h) : Tn(h)), p && p !== a && (h = ir(() => {
      if (c = document.createElementNS(b, p), Sr(c, c), r) {
        var _ = (
          /** @type {TemplateNode} */
          c.appendChild(cs())
        );
        r(c, _);
      }
      Ae.nodes_end = c, d.before(c);
    })), u = p, u && (a = u));
  }, ci);
}
function bi(e, t) {
  fi(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
function cc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = cc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function zd() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = cc(e)) && (r && (r += " "), r += t);
  return r;
}
function jd(e) {
  return typeof e == "object" ? zd(e) : e ?? "";
}
const Ao = [...` 	
\r\f \v\uFEFF`];
function Ud(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, u = 0; (u = r.indexOf(i, u)) >= 0; ) {
          var a = u + s;
          (u === 0 || Ao.includes(r[u - 1])) && (a === r.length || Ao.includes(r[a])) ? r = (u === 0 ? "" : r.substring(0, u)) + r.substring(a + 1) : u = a;
        }
  }
  return r === "" ? null : r;
}
function To(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Us(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Hd(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, u = 0, a = !1, c = [];
      r && c.push(...Object.keys(r).map(Us)), i && c.push(...Object.keys(i).map(Us));
      var d = 0, h = -1;
      const w = e.length;
      for (var p = 0; p < w; p++) {
        var b = e[p];
        if (a ? b === "/" && e[p - 1] === "*" && (a = !1) : s ? s === b && (s = !1) : b === "/" && e[p + 1] === "*" ? a = !0 : b === '"' || b === "'" ? s = b : b === "(" ? u++ : b === ")" && u--, !a && s === !1 && u === 0) {
          if (b === ":" && h === -1)
            h = p;
          else if (b === ";" || p === w - 1) {
            if (h !== -1) {
              var _ = Us(e.substring(d, h).trim());
              if (!c.includes(_)) {
                b !== ";" && p++;
                var g = e.substring(d, p).trim();
                n += " " + g + ";";
              }
            }
            d = p + 1, h = -1;
          }
        }
      }
    }
    return r && (n += To(r)), i && (n += To(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Qt(e, t, n, r, i, s) {
  var u = e.__className;
  if (u !== n || u === void 0) {
    var a = Ud(n, r, s);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (s && i !== s)
    for (var c in s) {
      var d = !!s[c];
      (i == null || d !== !!i[c]) && e.classList.toggle(c, d);
    }
  return s;
}
function Hs(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function bt(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var s = Hd(t, r);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  } else r && (Array.isArray(r) ? (Hs(e, n?.[0], r[0]), Hs(e, n?.[1], r[1], "important")) : Hs(e, n, r));
  return r;
}
const Wr = Symbol("class"), Vr = Symbol("style"), lc = Symbol("is custom element"), dc = Symbol("is html");
function $d(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ke(e, t, n, r) {
  var i = fc(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[P0] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && hc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Do(e, t, n, r, i = !1) {
  var s = fc(e), u = s[lc], a = !s[dc], c = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = jd(n.class) : n[Wr] && (n.class = null), n[Vr] && (n.style ??= null);
  var p = hc(e);
  for (const y in n) {
    let S = n[y];
    if (d && y === "value" && S == null) {
      e.value = e.__value = "", c[y] = S;
      continue;
    }
    if (y === "class") {
      var b = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Qt(e, b, S, r, t?.[Wr], n[Wr]), c[y] = S, c[Wr] = n[Wr];
      continue;
    }
    if (y === "style") {
      bt(e, S, t?.[Vr], n[Vr]), c[y] = S, c[Vr] = n[Vr];
      continue;
    }
    var _ = c[y];
    if (S !== _) {
      c[y] = S;
      var g = y[0] + y[1];
      if (g !== "$$")
        if (g === "on") {
          const D = {}, A = "$$" + y;
          let T = y.slice(2);
          var w = wd(T);
          if (xd(T) && (T = T.slice(0, -7), D.capture = !0), !w && _) {
            if (S != null) continue;
            e.removeEventListener(T, c[A], D), c[A] = null;
          }
          if (S != null)
            if (w)
              e[`__${T}`] = S, gi([T]);
            else {
              let P = function(j) {
                c[y].call(this, j);
              };
              c[A] = ac(T, e, P, D);
            }
          else w && (e[`__${T}`] = void 0);
        } else if (y === "style")
          Ke(e, y, S);
        else if (y === "autofocus")
          Ad(
            /** @type {HTMLElement} */
            e,
            !!S
          );
        else if (!u && (y === "__value" || y === "value" && S != null))
          e.value = e.__value = S;
        else if (y === "selected" && d)
          $d(
            /** @type {HTMLOptionElement} */
            e,
            S
          );
        else {
          var v = y;
          a || (v = Ed(v));
          var E = v === "defaultValue" || v === "defaultChecked";
          if (S == null && !u && !E)
            if (s[y] = null, v === "value" || v === "checked") {
              let D = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (v === "value") {
                let T = D.defaultValue;
                D.removeAttribute(v), D.defaultValue = T, D.value = D.__value = A ? T : null;
              } else {
                let T = D.defaultChecked;
                D.removeAttribute(v), D.defaultChecked = T, D.checked = A ? T : !1;
              }
            } else
              e.removeAttribute(y);
          else E || p.includes(v) && (u || typeof S != "string") ? e[v] = S : typeof S != "function" && Ke(e, v, S);
        }
    }
  }
  return c;
}
function fc(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [lc]: e.nodeName.includes("-"),
      [dc]: e.namespaceURI === ed
    }
  );
}
var Oo = /* @__PURE__ */ new Map();
function hc(e) {
  var t = Oo.get(e.nodeName);
  if (t) return t;
  Oo.set(e.nodeName, t = []);
  for (var n, r = e, i = Element.prototype; i !== r; ) {
    n = Oa(r);
    for (var s in n)
      n[s].set && t.push(s);
    r = Ru(r);
  }
  return t;
}
function pu(e, t, n = t) {
  var r = li();
  Dd(e, "input", (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = $s(e) ? Ws(s) : s, n(s), r && s !== (s = t())) {
      var u = e.selectionStart, a = e.selectionEnd;
      e.value = s ?? "", a !== null && (e.selectionStart = u, e.selectionEnd = Math.min(a, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Vn(t) == null && e.value && n($s(e) ? Ws(e.value) : e.value), zu(() => {
    var i = t();
    $s(e) && i === Ws(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function $s(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ws(e) {
  return e === "" ? null : +e;
}
function Ro(e, t) {
  return e === t || e?.[$n] === t;
}
function Xr(e = {}, t, n, r) {
  return qu(() => {
    var i, s;
    return zu(() => {
      i = s, s = [], Vn(() => {
        e !== n(...s) && (t(e, ...s), i && Ro(n(...i), e) && t(null, ...i));
      });
    }), () => {
      fi(() => {
        s && Ro(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
function Wd(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ze
  ), n = t.l.u;
  if (!n) return;
  let r = () => vd(t.s);
  if (e) {
    let i = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const u = /* @__PURE__ */ kr(() => {
      let a = !1;
      const c = t.s;
      for (const d in c)
        c[d] !== s[d] && (s[d] = c[d], a = !0);
      return a && i++, i;
    });
    r = () => C(u);
  }
  n.b.length && od(() => {
    Mo(t, r), $i(n.b);
  }), en(() => {
    const i = Vn(() => n.m.map(M0));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), n.a.length && en(() => {
    Mo(t, r), $i(n.a);
  });
}
function Mo(e, t) {
  if (e.l.s)
    for (const n of e.l.s) C(n);
  t();
}
function pc(e, t, n) {
  if (e == null)
    return t(void 0), yr;
  const r = Vn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const _r = [];
function Vd(e, t = yr) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (Ia(e, a) && (e = a, n)) {
      const c = !_r.length;
      for (const d of r)
        d[1](), _r.push(d, e);
      if (c) {
        for (let d = 0; d < _r.length; d += 2)
          _r[d][0](_r[d + 1]);
        _r.length = 0;
      }
    }
  }
  function s(a) {
    i(a(
      /** @type {T} */
      e
    ));
  }
  function u(a, c = yr) {
    const d = [a, c];
    return r.add(d), r.size === 1 && (n = t(i, s) || yr), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(d), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: u };
}
function gn(e) {
  let t;
  return pc(e, (n) => t = n)(), t;
}
let Mi = !1, gu = Symbol();
function Gd(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ Lu(void 0),
    unsubscribe: yr
  };
  if (r.store !== e && !(gu in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = yr;
    else {
      var i = !0;
      r.unsubscribe = pc(e, (s) => {
        i ? r.source.v = s : H(r.source, s);
      }), i = !1;
    }
  return e && gu in n ? gn(e) : C(r.source);
}
function Yd() {
  const e = {};
  function t() {
    Bu(() => {
      for (var n in e)
        e[n].unsubscribe();
      Da(e, gu, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Kd(e) {
  var t = Mi;
  try {
    return Mi = !1, [e(), Mi];
  } finally {
    Mi = t;
  }
}
const Zd = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function Xd(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Zd
  );
}
const Jd = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return C(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = fn(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      La
    )), e.special[t](n), xo(e.version), !0;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  deleteProperty(e, t) {
    return e.exclude.includes(t) || (e.exclude.push(t), xo(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Ze(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Er(0) }, Jd);
}
const Qd = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ($r(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      $r(i) && (i = i());
      const s = Hn(i, t);
      if (s && s.set)
        return s.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ($r(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const i = Hn(r, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === $n || t === Fa) return !1;
    for (let n of e.props)
      if ($r(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      $r(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function rt(...e) {
  return new Proxy({ props: e }, Qd);
}
function Fo(e) {
  return e.ctx?.d ?? !1;
}
function fn(e, t, n, r) {
  var i = (n & Y0) !== 0, s = !Mr || (n & K0) !== 0, u = (n & Z0) !== 0, a = (n & X0) !== 0, c = !1, d;
  u ? [d, c] = Kd(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var h = $n in e || Fa in e, p = u && (Hn(e, t)?.set ?? (h && t in e && ((T) => e[t] = T))) || void 0, b = (
    /** @type {V} */
    r
  ), _ = !0, g = !1, w = () => (g = !0, _ && (_ = !1, a ? b = Vn(
    /** @type {() => V} */
    r
  ) : b = /** @type {V} */
  r), b);
  d === void 0 && r !== void 0 && (p && s && j0(), d = w(), p && p(d));
  var v;
  if (s)
    v = () => {
      var T = (
        /** @type {V} */
        e[t]
      );
      return T === void 0 ? w() : (_ = !0, g = !1, T);
    };
  else {
    var E = (i ? kr : Pu)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    E.f |= N0, v = () => {
      var T = C(E);
      return T !== void 0 && (b = /** @type {V} */
      void 0), T === void 0 ? b : T;
    };
  }
  if ((n & La) === 0)
    return v;
  if (p) {
    var y = e.$$legacy;
    return function(T, P) {
      return arguments.length > 0 ? ((!s || !P || y || c) && p(P ? v() : T), T) : v();
    };
  }
  var S = !1, D = /* @__PURE__ */ Lu(d), A = /* @__PURE__ */ kr(() => {
    var T = v(), P = C(D);
    return S ? (S = !1, P) : D.v = T;
  });
  return u && C(A), i || (A.equals = Fu), function(T, P) {
    if (arguments.length > 0) {
      const j = P ? C(A) : s && u ? er(T) : T;
      if (!A.equals(j)) {
        if (S = !0, H(D, j), g && b !== void 0 && (b = j), Fo(A))
          return T;
        Vn(() => C(A));
      }
      return T;
    }
    return Fo(A) ? A.v : C(A);
  };
}
function Wu(e) {
  ze === null && Ba(), Mr && ze.l !== null ? tf(ze).m.push(e) : en(() => {
    const t = Vn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ef(e) {
  ze === null && Ba(), Wu(() => () => Vn(e));
}
function tf(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const nf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(nf);
function gc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: rf } = Object.prototype, { getPrototypeOf: Vu } = Object, { iterator: hs, toStringTag: bc } = Symbol, ps = /* @__PURE__ */ ((e) => (t) => {
  const n = rf.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sn = (e) => (e = e.toLowerCase(), (t) => ps(t) === e), gs = (e) => (t) => typeof t === e, { isArray: Nr } = Array, ri = gs("undefined");
function sf(e) {
  return e !== null && !ri(e) && e.constructor !== null && !ri(e.constructor) && Ct(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const mc = sn("ArrayBuffer");
function uf(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && mc(e.buffer), t;
}
const of = gs("string"), Ct = gs("function"), _c = gs("number"), bs = (e) => e !== null && typeof e == "object", af = (e) => e === !0 || e === !1, qi = (e) => {
  if (ps(e) !== "object")
    return !1;
  const t = Vu(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(bc in e) && !(hs in e);
}, cf = sn("Date"), lf = sn("File"), df = sn("Blob"), ff = sn("FileList"), hf = (e) => bs(e) && Ct(e.pipe), pf = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ct(e.append) && ((t = ps(e)) === "formdata" || // detect form-data instance
  t === "object" && Ct(e.toString) && e.toString() === "[object FormData]"));
}, gf = sn("URLSearchParams"), [bf, mf, _f, vf] = ["ReadableStream", "Request", "Response", "Headers"].map(sn), xf = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), Nr(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), u = s.length;
    let a;
    for (r = 0; r < u; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function vc(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const tr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xc = (e) => !ri(e) && e !== tr;
function bu() {
  const { caseless: e } = xc(this) && this || {}, t = {}, n = (r, i) => {
    const s = e && vc(t, i) || i;
    qi(t[s]) && qi(r) ? t[s] = bu(t[s], r) : qi(r) ? t[s] = bu({}, r) : Nr(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && mi(arguments[r], n);
  return t;
}
const yf = (e, t, n, { allOwnKeys: r } = {}) => (mi(t, (i, s) => {
  n && Ct(i) ? e[s] = gc(i, n) : e[s] = i;
}, { allOwnKeys: r }), e), wf = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), kf = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ef = (e, t, n, r) => {
  let i, s, u;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      u = i[s], (!r || r(u, e, t)) && !a[u] && (t[u] = e[u], a[u] = !0);
    e = n !== !1 && Vu(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Cf = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Sf = (e) => {
  if (!e) return null;
  if (Nr(e)) return e;
  let t = e.length;
  if (!_c(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Af = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Vu(Uint8Array)), Tf = (e, t) => {
  const r = (e && e[hs]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, Df = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Of = sn("HTMLFormElement"), Rf = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), No = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Mf = sn("RegExp"), yc = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  mi(n, (i, s) => {
    let u;
    (u = t(i, s, e)) !== !1 && (r[s] = u || i);
  }), Object.defineProperties(e, r);
}, Ff = (e) => {
  yc(e, (t, n) => {
    if (Ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ct(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Nf = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return Nr(e) ? r(e) : r(String(e).split(t)), n;
}, If = () => {
}, Pf = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Lf(e) {
  return !!(e && Ct(e.append) && e[bc] === "FormData" && e[hs]);
}
const Bf = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (bs(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const s = Nr(r) ? [] : {};
        return mi(r, (u, a) => {
          const c = n(u, i + 1);
          !ri(c) && (s[a] = c);
        }), t[i] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, qf = sn("AsyncFunction"), zf = (e) => e && (bs(e) || Ct(e)) && Ct(e.then) && Ct(e.catch), wc = ((e, t) => e ? setImmediate : t ? ((n, r) => (tr.addEventListener("message", ({ source: i, data: s }) => {
  i === tr && s === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), tr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ct(tr.postMessage)
), jf = typeof queueMicrotask < "u" ? queueMicrotask.bind(tr) : typeof process < "u" && process.nextTick || wc, Uf = (e) => e != null && Ct(e[hs]), O = {
  isArray: Nr,
  isArrayBuffer: mc,
  isBuffer: sf,
  isFormData: pf,
  isArrayBufferView: uf,
  isString: of,
  isNumber: _c,
  isBoolean: af,
  isObject: bs,
  isPlainObject: qi,
  isReadableStream: bf,
  isRequest: mf,
  isResponse: _f,
  isHeaders: vf,
  isUndefined: ri,
  isDate: cf,
  isFile: lf,
  isBlob: df,
  isRegExp: Mf,
  isFunction: Ct,
  isStream: hf,
  isURLSearchParams: gf,
  isTypedArray: Af,
  isFileList: ff,
  forEach: mi,
  merge: bu,
  extend: yf,
  trim: xf,
  stripBOM: wf,
  inherits: kf,
  toFlatObject: Ef,
  kindOf: ps,
  kindOfTest: sn,
  endsWith: Cf,
  toArray: Sf,
  forEachEntry: Tf,
  matchAll: Df,
  isHTMLForm: Of,
  hasOwnProperty: No,
  hasOwnProp: No,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yc,
  freezeMethods: Ff,
  toObjectSet: Nf,
  toCamelCase: Rf,
  noop: If,
  toFiniteNumber: Pf,
  findKey: vc,
  global: tr,
  isContextDefined: xc,
  isSpecCompliantForm: Lf,
  toJSONObject: Bf,
  isAsyncFn: qf,
  isThenable: zf,
  setImmediate: wc,
  asap: jf,
  isIterable: Uf
};
function oe(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null);
}
O.inherits(oe, Error, {
  toJSON: function() {
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
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const kc = oe.prototype, Ec = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ec[e] = { value: e };
});
Object.defineProperties(oe, Ec);
Object.defineProperty(kc, "isAxiosError", { value: !0 });
oe.from = (e, t, n, r, i, s) => {
  const u = Object.create(kc);
  return O.toFlatObject(e, u, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), oe.call(u, e.message, t, n, r, i), u.cause = e, u.name = e.name, s && Object.assign(u, s), u;
};
const Hf = null;
function mu(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function Cc(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Io(e, t, n) {
  return e ? e.concat(t).map(function(i, s) {
    return i = Cc(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function $f(e) {
  return O.isArray(e) && !e.some(mu);
}
const Wf = O.toFlatObject(O, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ms(e, t, n) {
  if (!O.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = O.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, v) {
    return !O.isUndefined(v[w]);
  });
  const r = n.metaTokens, i = n.visitor || h, s = n.dots, u = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
  if (!O.isFunction(i))
    throw new TypeError("visitor must be a function");
  function d(g) {
    if (g === null) return "";
    if (O.isDate(g))
      return g.toISOString();
    if (!c && O.isBlob(g))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(g) || O.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function h(g, w, v) {
    let E = g;
    if (g && !v && typeof g == "object") {
      if (O.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), g = JSON.stringify(g);
      else if (O.isArray(g) && $f(g) || (O.isFileList(g) || O.endsWith(w, "[]")) && (E = O.toArray(g)))
        return w = Cc(w), E.forEach(function(S, D) {
          !(O.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? Io([w], D, s) : u === null ? w : w + "[]",
            d(S)
          );
        }), !1;
    }
    return mu(g) ? !0 : (t.append(Io(v, w, s), d(g)), !1);
  }
  const p = [], b = Object.assign(Wf, {
    defaultVisitor: h,
    convertValue: d,
    isVisitable: mu
  });
  function _(g, w) {
    if (!O.isUndefined(g)) {
      if (p.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      p.push(g), O.forEach(g, function(E, y) {
        (!(O.isUndefined(E) || E === null) && i.call(
          t,
          E,
          O.isString(y) ? y.trim() : y,
          w,
          b
        )) === !0 && _(E, w ? w.concat(y) : [y]);
      }), p.pop();
    }
  }
  if (!O.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Po(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Gu(e, t) {
  this._pairs = [], e && ms(e, this, t);
}
const Sc = Gu.prototype;
Sc.append = function(t, n) {
  this._pairs.push([t, n]);
};
Sc.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Po);
  } : Po;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function Vf(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ac(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Vf;
  O.isFunction(n) && (n = {
    serialize: n
  });
  const i = n && n.serialize;
  let s;
  if (i ? s = i(t, n) : s = O.isURLSearchParams(t) ? t.toString() : new Gu(t, n).toString(r), s) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Lo {
  constructor() {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    O.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Tc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Gf = typeof URLSearchParams < "u" ? URLSearchParams : Gu, Yf = typeof FormData < "u" ? FormData : null, Kf = typeof Blob < "u" ? Blob : null, Zf = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Gf,
    FormData: Yf,
    Blob: Kf
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Yu = typeof window < "u" && typeof document < "u", _u = typeof navigator == "object" && navigator || void 0, Xf = Yu && (!_u || ["ReactNative", "NativeScript", "NS"].indexOf(_u.product) < 0), Jf = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Qf = Yu && window.location.href || "http://localhost", eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Yu,
  hasStandardBrowserEnv: Xf,
  hasStandardBrowserWebWorkerEnv: Jf,
  navigator: _u,
  origin: Qf
}, Symbol.toStringTag, { value: "Module" })), mt = {
  ...eh,
  ...Zf
};
function th(e, t) {
  return ms(e, new mt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, s) {
      return mt.isNode && O.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function nh(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function rh(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Dc(e) {
  function t(n, r, i, s) {
    let u = n[s++];
    if (u === "__proto__") return !0;
    const a = Number.isFinite(+u), c = s >= n.length;
    return u = !u && O.isArray(i) ? i.length : u, c ? (O.hasOwnProp(i, u) ? i[u] = [i[u], r] : i[u] = r, !a) : ((!i[u] || !O.isObject(i[u])) && (i[u] = []), t(n, r, i[u], s) && O.isArray(i[u]) && (i[u] = rh(i[u])), !a);
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const n = {};
    return O.forEachEntry(e, (r, i) => {
      t(nh(r), i, n, 0);
    }), n;
  }
  return null;
}
function ih(e, t, n) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const _i = {
  transitional: Tc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = O.isObject(t);
    if (s && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t))
      return i ? JSON.stringify(Dc(t)) : t;
    if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t) || O.isReadableStream(t))
      return t;
    if (O.isArrayBufferView(t))
      return t.buffer;
    if (O.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return th(t, this.formSerializer).toString();
      if ((a = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ms(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || i ? (n.setContentType("application/json", !1), ih(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || _i.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (O.isResponse(t) || O.isReadableStream(t))
      return t;
    if (t && O.isString(t) && (r && !this.responseType || i)) {
      const u = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (u)
          throw a.name === "SyntaxError" ? oe.from(a, oe.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: mt.classes.FormData,
    Blob: mt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
O.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  _i.headers[e] = {};
});
const sh = O.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), uh = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(u) {
    i = u.indexOf(":"), n = u.substring(0, i).trim().toLowerCase(), r = u.substring(i + 1).trim(), !(!n || t[n] && sh[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Bo = Symbol("internals");
function Gr(e) {
  return e && String(e).trim().toLowerCase();
}
function zi(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(zi) : String(e);
}
function oh(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ah = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Vs(e, t, n, r, i) {
  if (O.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!O.isString(t)) {
    if (O.isString(r))
      return t.indexOf(r) !== -1;
    if (O.isRegExp(r))
      return r.test(t);
  }
}
function ch(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function lh(e, t) {
  const n = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, s, u) {
        return this[r].call(this, t, i, s, u);
      },
      configurable: !0
    });
  });
}
let St = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(a, c, d) {
      const h = Gr(c);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const p = O.findKey(i, h);
      (!p || i[p] === void 0 || d === !0 || d === void 0 && i[p] !== !1) && (i[p || c] = zi(a));
    }
    const u = (a, c) => O.forEach(a, (d, h) => s(d, h, c));
    if (O.isPlainObject(t) || t instanceof this.constructor)
      u(t, n);
    else if (O.isString(t) && (t = t.trim()) && !ah(t))
      u(uh(t), n);
    else if (O.isObject(t) && O.isIterable(t)) {
      let a = {}, c, d;
      for (const h of t) {
        if (!O.isArray(h))
          throw TypeError("Object iterator must return a key-value pair");
        a[d = h[0]] = (c = a[d]) ? O.isArray(c) ? [...c, h[1]] : [c, h[1]] : h[1];
      }
      u(a, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Gr(t), t) {
      const r = O.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return oh(i);
        if (O.isFunction(n))
          return n.call(this, i, r);
        if (O.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Gr(t), t) {
      const r = O.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Vs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(u) {
      if (u = Gr(u), u) {
        const a = O.findKey(r, u);
        a && (!n || Vs(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return O.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Vs(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return O.forEach(this, (i, s) => {
      const u = O.findKey(r, s);
      if (u) {
        n[u] = zi(i), delete n[s];
        return;
      }
      const a = t ? ch(s) : String(s).trim();
      a !== s && delete n[s], n[a] = zi(i), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && O.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Bo] = this[Bo] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(u) {
      const a = Gr(u);
      r[a] || (lh(i, u), r[a] = !0);
    }
    return O.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
St.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(St.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
O.freezeMethods(St);
function Gs(e, t) {
  const n = this || _i, r = t || n, i = St.from(r.headers);
  let s = r.data;
  return O.forEach(e, function(a) {
    s = a.call(n, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function Oc(e) {
  return !!(e && e.__CANCEL__);
}
function Ir(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
O.inherits(Ir, oe, {
  __CANCEL__: !0
});
function Rc(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new oe(
    "Request failed with status code " + n.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function dh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function fh(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, s = 0, u;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const d = Date.now(), h = r[s];
    u || (u = d), n[i] = c, r[i] = d;
    let p = s, b = 0;
    for (; p !== i; )
      b += n[p++], p = p % e;
    if (i = (i + 1) % e, i === s && (s = (s + 1) % e), d - u < t)
      return;
    const _ = h && d - h;
    return _ ? Math.round(b * 1e3 / _) : void 0;
  };
}
function hh(e, t) {
  let n = 0, r = 1e3 / t, i, s;
  const u = (d, h = Date.now()) => {
    n = h, i = null, s && (clearTimeout(s), s = null), e.apply(null, d);
  };
  return [(...d) => {
    const h = Date.now(), p = h - n;
    p >= r ? u(d, h) : (i = d, s || (s = setTimeout(() => {
      s = null, u(i);
    }, r - p)));
  }, () => i && u(i)];
}
const Ji = (e, t, n = 3) => {
  let r = 0;
  const i = fh(50, 250);
  return hh((s) => {
    const u = s.loaded, a = s.lengthComputable ? s.total : void 0, c = u - r, d = i(c), h = u <= a;
    r = u;
    const p = {
      loaded: u,
      total: a,
      progress: a ? u / a : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && a && h ? (a - u) / d : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, qo = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, zo = (e) => (...t) => O.asap(() => e(...t)), ph = mt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, mt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(mt.origin),
  mt.navigator && /(msie|trident)/i.test(mt.navigator.userAgent)
) : () => !0, gh = mt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, s) {
      const u = [e + "=" + encodeURIComponent(t)];
      O.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), O.isString(r) && u.push("path=" + r), O.isString(i) && u.push("domain=" + i), s === !0 && u.push("secure"), document.cookie = u.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function bh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function mh(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mc(e, t, n) {
  let r = !bh(t);
  return e && (r || n == !1) ? mh(e, t) : t;
}
const jo = (e) => e instanceof St ? { ...e } : e;
function sr(e, t) {
  t = t || {};
  const n = {};
  function r(d, h, p, b) {
    return O.isPlainObject(d) && O.isPlainObject(h) ? O.merge.call({ caseless: b }, d, h) : O.isPlainObject(h) ? O.merge({}, h) : O.isArray(h) ? h.slice() : h;
  }
  function i(d, h, p, b) {
    if (O.isUndefined(h)) {
      if (!O.isUndefined(d))
        return r(void 0, d, p, b);
    } else return r(d, h, p, b);
  }
  function s(d, h) {
    if (!O.isUndefined(h))
      return r(void 0, h);
  }
  function u(d, h) {
    if (O.isUndefined(h)) {
      if (!O.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, h);
  }
  function a(d, h, p) {
    if (p in t)
      return r(d, h);
    if (p in e)
      return r(void 0, d);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: a,
    headers: (d, h, p) => i(jo(d), jo(h), p, !0)
  };
  return O.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const p = c[h] || i, b = p(e[h], t[h], h);
    O.isUndefined(b) && p !== a || (n[h] = b);
  }), n;
}
const Fc = (e) => {
  const t = sr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: s, headers: u, auth: a } = t;
  t.headers = u = St.from(u), t.url = Ac(Mc(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && u.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (O.isFormData(n)) {
    if (mt.hasStandardBrowserEnv || mt.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if ((c = u.getContentType()) !== !1) {
      const [d, ...h] = c ? c.split(";").map((p) => p.trim()).filter(Boolean) : [];
      u.setContentType([d || "multipart/form-data", ...h].join("; "));
    }
  }
  if (mt.hasStandardBrowserEnv && (r && O.isFunction(r) && (r = r(t)), r || r !== !1 && ph(t.url))) {
    const d = i && s && gh.read(s);
    d && u.set(i, d);
  }
  return t;
}, _h = typeof XMLHttpRequest < "u", vh = _h && function(e) {
  return new Promise(function(n, r) {
    const i = Fc(e);
    let s = i.data;
    const u = St.from(i.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: d } = i, h, p, b, _, g;
    function w() {
      _ && _(), g && g(), i.cancelToken && i.cancelToken.unsubscribe(h), i.signal && i.signal.removeEventListener("abort", h);
    }
    let v = new XMLHttpRequest();
    v.open(i.method.toUpperCase(), i.url, !0), v.timeout = i.timeout;
    function E() {
      if (!v)
        return;
      const S = St.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), A = {
        data: !a || a === "text" || a === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: S,
        config: e,
        request: v
      };
      Rc(function(P) {
        n(P), w();
      }, function(P) {
        r(P), w();
      }, A), v = null;
    }
    "onloadend" in v ? v.onloadend = E : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, v.onabort = function() {
      v && (r(new oe("Request aborted", oe.ECONNABORTED, e, v)), v = null);
    }, v.onerror = function() {
      r(new oe("Network Error", oe.ERR_NETWORK, e, v)), v = null;
    }, v.ontimeout = function() {
      let D = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const A = i.transitional || Tc;
      i.timeoutErrorMessage && (D = i.timeoutErrorMessage), r(new oe(
        D,
        A.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        v
      )), v = null;
    }, s === void 0 && u.setContentType(null), "setRequestHeader" in v && O.forEach(u.toJSON(), function(D, A) {
      v.setRequestHeader(A, D);
    }), O.isUndefined(i.withCredentials) || (v.withCredentials = !!i.withCredentials), a && a !== "json" && (v.responseType = i.responseType), d && ([b, g] = Ji(d, !0), v.addEventListener("progress", b)), c && v.upload && ([p, _] = Ji(c), v.upload.addEventListener("progress", p), v.upload.addEventListener("loadend", _)), (i.cancelToken || i.signal) && (h = (S) => {
      v && (r(!S || S.type ? new Ir(null, e, v) : S), v.abort(), v = null);
    }, i.cancelToken && i.cancelToken.subscribe(h), i.signal && (i.signal.aborted ? h() : i.signal.addEventListener("abort", h)));
    const y = dh(i.url);
    if (y && mt.protocols.indexOf(y) === -1) {
      r(new oe("Unsupported protocol " + y + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    v.send(s || null);
  });
}, xh = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), i;
    const s = function(d) {
      if (!i) {
        i = !0, a();
        const h = d instanceof Error ? d : this.reason;
        r.abort(h instanceof oe ? h : new Ir(h instanceof Error ? h.message : h));
      }
    };
    let u = t && setTimeout(() => {
      u = null, s(new oe(`timeout ${t} of ms exceeded`, oe.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (u && clearTimeout(u), u = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(s) : d.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", s));
    const { signal: c } = r;
    return c.unsubscribe = () => O.asap(a), c;
  }
}, yh = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, wh = async function* (e, t) {
  for await (const n of kh(e))
    yield* yh(n, t);
}, kh = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Uo = (e, t, n, r) => {
  const i = wh(e, t);
  let s = 0, u, a = (c) => {
    u || (u = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: d, value: h } = await i.next();
        if (d) {
          a(), c.close();
          return;
        }
        let p = h.byteLength;
        if (n) {
          let b = s += p;
          n(b);
        }
        c.enqueue(new Uint8Array(h));
      } catch (d) {
        throw a(d), d;
      }
    },
    cancel(c) {
      return a(c), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, _s = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Nc = _s && typeof ReadableStream == "function", Eh = _s && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ic = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ch = Nc && Ic(() => {
  let e = !1;
  const t = new Request(mt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ho = 64 * 1024, vu = Nc && Ic(() => O.isReadableStream(new Response("").body)), Qi = {
  stream: vu && ((e) => e.body)
};
_s && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Qi[t] && (Qi[t] = O.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new oe(`Response type '${t}' is not supported`, oe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Sh = async (e) => {
  if (e == null)
    return 0;
  if (O.isBlob(e))
    return e.size;
  if (O.isSpecCompliantForm(e))
    return (await new Request(mt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (O.isArrayBufferView(e) || O.isArrayBuffer(e))
    return e.byteLength;
  if (O.isURLSearchParams(e) && (e = e + ""), O.isString(e))
    return (await Eh(e)).byteLength;
}, Ah = async (e, t) => {
  const n = O.toFiniteNumber(e.getContentLength());
  return n ?? Sh(t);
}, Th = _s && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: i,
    cancelToken: s,
    timeout: u,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: d,
    headers: h,
    withCredentials: p = "same-origin",
    fetchOptions: b
  } = Fc(e);
  d = d ? (d + "").toLowerCase() : "text";
  let _ = xh([i, s && s.toAbortSignal()], u), g;
  const w = _ && _.unsubscribe && (() => {
    _.unsubscribe();
  });
  let v;
  try {
    if (c && Ch && n !== "get" && n !== "head" && (v = await Ah(h, r)) !== 0) {
      let A = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), T;
      if (O.isFormData(r) && (T = A.headers.get("content-type")) && h.setContentType(T), A.body) {
        const [P, j] = qo(
          v,
          Ji(zo(c))
        );
        r = Uo(A.body, Ho, P, j);
      }
    }
    O.isString(p) || (p = p ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    g = new Request(t, {
      ...b,
      signal: _,
      method: n.toUpperCase(),
      headers: h.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: E ? p : void 0
    });
    let y = await fetch(g);
    const S = vu && (d === "stream" || d === "response");
    if (vu && (a || S && w)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((J) => {
        A[J] = y[J];
      });
      const T = O.toFiniteNumber(y.headers.get("content-length")), [P, j] = a && qo(
        T,
        Ji(zo(a), !0)
      ) || [];
      y = new Response(
        Uo(y.body, Ho, P, () => {
          j && j(), w && w();
        }),
        A
      );
    }
    d = d || "text";
    let D = await Qi[O.findKey(Qi, d) || "text"](y, e);
    return !S && w && w(), await new Promise((A, T) => {
      Rc(A, T, {
        data: D,
        headers: St.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: g
      });
    });
  } catch (E) {
    throw w && w(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
      new oe("Network Error", oe.ERR_NETWORK, e, g),
      {
        cause: E.cause || E
      }
    ) : oe.from(E, E && E.code, e, g);
  }
}), xu = {
  http: Hf,
  xhr: vh,
  fetch: Th
};
O.forEach(xu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const $o = (e) => `- ${e}`, Dh = (e) => O.isFunction(e) || e === null || e === !1, Pc = {
  getAdapter: (e) => {
    e = O.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let u;
      if (r = n, !Dh(n) && (r = xu[(u = String(n)).toLowerCase()], r === void 0))
        throw new oe(`Unknown adapter '${u}'`);
      if (r)
        break;
      i[u || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(i).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = t ? s.length > 1 ? `since :
` + s.map($o).join(`
`) : " " + $o(s[0]) : "as no adapter specified";
      throw new oe(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: xu
};
function Ys(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ir(null, e);
}
function Wo(e) {
  return Ys(e), e.headers = St.from(e.headers), e.data = Gs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pc.getAdapter(e.adapter || _i.adapter)(e).then(function(r) {
    return Ys(e), r.data = Gs.call(
      e,
      e.transformResponse,
      r
    ), r.headers = St.from(r.headers), r;
  }, function(r) {
    return Oc(r) || (Ys(e), r && r.response && (r.response.data = Gs.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = St.from(r.response.headers))), Promise.reject(r);
  });
}
const Lc = "1.9.0", vs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  vs[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Vo = {};
vs.transitional = function(t, n, r) {
  function i(s, u) {
    return "[Axios v" + Lc + "] Transitional option '" + s + "'" + u + (r ? ". " + r : "");
  }
  return (s, u, a) => {
    if (t === !1)
      throw new oe(
        i(u, " has been removed" + (n ? " in " + n : "")),
        oe.ERR_DEPRECATED
      );
    return n && !Vo[u] && (Vo[u] = !0, console.warn(
      i(
        u,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, u, a) : !0;
  };
};
vs.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Oh(e, t, n) {
  if (typeof e != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], u = t[s];
    if (u) {
      const a = e[s], c = a === void 0 || u(a, s, e);
      if (c !== !0)
        throw new oe("option " + s + " must be " + c, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new oe("Unknown option " + s, oe.ERR_BAD_OPTION);
  }
}
const ji = {
  assertOptions: Oh,
  validators: vs
}, ln = ji.validators;
let rr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Lo(),
      response: new Lo()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = sr(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && ji.assertOptions(r, {
      silentJSONParsing: ln.transitional(ln.boolean),
      forcedJSONParsing: ln.transitional(ln.boolean),
      clarifyTimeoutError: ln.transitional(ln.boolean)
    }, !1), i != null && (O.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : ji.assertOptions(i, {
      encode: ln.function,
      serialize: ln.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ji.assertOptions(n, {
      baseUrl: ln.spelling("baseURL"),
      withXsrfToken: ln.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let u = s && O.merge(
      s.common,
      s[n.method]
    );
    s && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), n.headers = St.concat(u, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (c = c && w.synchronous, a.unshift(w.fulfilled, w.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(w) {
      d.push(w.fulfilled, w.rejected);
    });
    let h, p = 0, b;
    if (!c) {
      const g = [Wo.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, d), b = g.length, h = Promise.resolve(n); p < b; )
        h = h.then(g[p++], g[p++]);
      return h;
    }
    b = a.length;
    let _ = n;
    for (p = 0; p < b; ) {
      const g = a[p++], w = a[p++];
      try {
        _ = g(_);
      } catch (v) {
        w.call(this, v);
        break;
      }
    }
    try {
      h = Wo.call(this, _);
    } catch (g) {
      return Promise.reject(g);
    }
    for (p = 0, b = d.length; p < b; )
      h = h.then(d[p++], d[p++]);
    return h;
  }
  getUri(t) {
    t = sr(this.defaults, t);
    const n = Mc(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ac(n, t.params, t.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(t) {
  rr.prototype[t] = function(n, r) {
    return this.request(sr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, u, a) {
      return this.request(sr(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: u
      }));
    };
  }
  rr.prototype[t] = n(), rr.prototype[t + "Form"] = n(!0);
});
let Rh = class Bc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const u = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(i);
      return u.cancel = function() {
        r.unsubscribe(s);
      }, u;
    }, t(function(s, u, a) {
      r.reason || (r.reason = new Ir(s, u, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Bc(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function Mh(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Fh(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const yu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(yu).forEach(([e, t]) => {
  yu[t] = e;
});
function qc(e) {
  const t = new rr(e), n = gc(rr.prototype.request, t);
  return O.extend(n, rr.prototype, t, { allOwnKeys: !0 }), O.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return qc(sr(e, i));
  }, n;
}
const Ve = qc(_i);
Ve.Axios = rr;
Ve.CanceledError = Ir;
Ve.CancelToken = Rh;
Ve.isCancel = Oc;
Ve.VERSION = Lc;
Ve.toFormData = ms;
Ve.AxiosError = oe;
Ve.Cancel = Ve.CanceledError;
Ve.all = function(t) {
  return Promise.all(t);
};
Ve.spread = Mh;
Ve.isAxiosError = Fh;
Ve.mergeConfig = sr;
Ve.AxiosHeaders = St;
Ve.formToJSON = (e) => Dc(O.isHTMLForm(e) ? new FormData(e) : e);
Ve.getAdapter = Pc.getAdapter;
Ve.HttpStatusCode = yu;
Ve.default = Ve;
const {
  Axios: t_,
  AxiosError: n_,
  CanceledError: r_,
  isCancel: i_,
  CancelToken: s_,
  VERSION: u_,
  all: o_,
  Cancel: a_,
  isAxiosError: c_,
  spread: l_,
  toFormData: d_,
  AxiosHeaders: f_,
  HttpStatusCode: h_,
  formToJSON: p_,
  getAdapter: g_,
  mergeConfig: b_
} = Ve, Nh = Ve.create({
  baseURL: "https://staging.fluentbot.ai",
  headers: {
    "Content-Type": "application/json"
  },
  // Widget APIs are authenticated via session_token payload/localStorage,
  // so avoid cross-site cookies in embedded contexts.
  withCredentials: !1
}), ur = Ve.create({
  baseURL: "https://staging.fluentbot.ai",
  headers: {
    "Content-Type": "application/json"
  },
  // Widget APIs are authenticated via session_token payload/localStorage,
  // so avoid cross-site cookies in embedded contexts.
  withCredentials: !1
});
class Ku {
  constructor() {
    this.notificationCreatedEvent = ".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated";
  }
  /**
   * Listen for a whisper event on the channel instance.
   */
  listenForWhisper(t, n) {
    return this.listen(".client-" + t, n);
  }
  /**
   * Listen for an event on the channel instance.
   */
  notification(t) {
    return this.listen(this.notificationCreatedEvent, t);
  }
  /**
   * Stop listening for notification events on the channel instance.
   */
  stopListeningForNotification(t) {
    return this.stopListening(this.notificationCreatedEvent, t);
  }
  /**
   * Stop listening for a whisper event on the channel instance.
   */
  stopListeningForWhisper(t, n) {
    return this.stopListening(".client-" + t, n);
  }
}
class zc {
  /**
   * Create a new class instance.
   */
  constructor(t) {
    this.namespace = t;
  }
  /**
   * Format the given event name.
   */
  format(t) {
    return [".", "\\"].includes(t.charAt(0)) ? t.substring(1) : (this.namespace && (t = this.namespace + "." + t), t.replace(/\./g, "\\"));
  }
  /**
   * Set the event namespace.
   */
  setNamespace(t) {
    this.namespace = t;
  }
}
function Ih(e) {
  try {
    new e();
  } catch (t) {
    if (t instanceof Error && t.message.includes("is not a constructor"))
      return !1;
  }
  return !0;
}
class Zu extends Ku {
  /**
   * Create a new class instance.
   */
  constructor(t, n, r) {
    super(), this.name = n, this.pusher = t, this.options = r, this.eventFormatter = new zc(this.options.namespace), this.subscribe();
  }
  /**
   * Subscribe to a Pusher channel.
   */
  subscribe() {
    this.subscription = this.pusher.subscribe(this.name);
  }
  /**
   * Unsubscribe from a Pusher channel.
   */
  unsubscribe() {
    this.pusher.unsubscribe(this.name);
  }
  /**
   * Listen for an event on the channel instance.
   */
  listen(t, n) {
    return this.on(this.eventFormatter.format(t), n), this;
  }
  /**
   * Listen for all events on the channel instance.
   */
  listenToAll(t) {
    return this.subscription.bind_global((n, r) => {
      if (n.startsWith("pusher:"))
        return;
      let i = String(this.options.namespace ?? "").replace(
        /\./g,
        "\\"
      ), s = n.startsWith(i) ? n.substring(i.length + 1) : "." + n;
      t(s, r);
    }), this;
  }
  /**
   * Stop listening for an event on the channel instance.
   */
  stopListening(t, n) {
    return n ? this.subscription.unbind(
      this.eventFormatter.format(t),
      n
    ) : this.subscription.unbind(this.eventFormatter.format(t)), this;
  }
  /**
   * Stop listening for all events on the channel instance.
   */
  stopListeningToAll(t) {
    return t ? this.subscription.unbind_global(t) : this.subscription.unbind_global(), this;
  }
  /**
   * Register a callback to be called anytime a subscription succeeds.
   */
  subscribed(t) {
    return this.on("pusher:subscription_succeeded", () => {
      t();
    }), this;
  }
  /**
   * Register a callback to be called anytime a subscription error occurs.
   */
  error(t) {
    return this.on("pusher:subscription_error", (n) => {
      t(n);
    }), this;
  }
  /**
   * Bind a channel to an event.
   */
  on(t, n) {
    return this.subscription.bind(t, n), this;
  }
}
class jc extends Zu {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(t, n) {
    return this.pusher.channels.channels[this.name].trigger(
      `client-${t}`,
      n
    ), this;
  }
}
class Ph extends Zu {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(t, n) {
    return this.pusher.channels.channels[this.name].trigger(
      `client-${t}`,
      n
    ), this;
  }
}
class Lh extends jc {
  /**
   * Register a callback to be called anytime the member list changes.
   */
  here(t) {
    return this.on("pusher:subscription_succeeded", (n) => {
      t(Object.keys(n.members).map((r) => n.members[r]));
    }), this;
  }
  /**
   * Listen for someone joining the channel.
   */
  joining(t) {
    return this.on("pusher:member_added", (n) => {
      t(n.info);
    }), this;
  }
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(t, n) {
    return this.pusher.channels.channels[this.name].trigger(
      `client-${t}`,
      n
    ), this;
  }
  /**
   * Listen for someone leaving the channel.
   */
  leaving(t) {
    return this.on("pusher:member_removed", (n) => {
      t(n.info);
    }), this;
  }
}
class Uc extends Ku {
  /**
   * Create a new class instance.
   */
  constructor(t, n, r) {
    super(), this.events = {}, this.listeners = {}, this.name = n, this.socket = t, this.options = r, this.eventFormatter = new zc(this.options.namespace), this.subscribe();
  }
  /**
   * Subscribe to a Socket.io channel.
   */
  subscribe() {
    this.socket.emit("subscribe", {
      channel: this.name,
      auth: this.options.auth || {}
    });
  }
  /**
   * Unsubscribe from channel and ubind event callbacks.
   */
  unsubscribe() {
    this.unbind(), this.socket.emit("unsubscribe", {
      channel: this.name,
      auth: this.options.auth || {}
    });
  }
  /**
   * Listen for an event on the channel instance.
   */
  listen(t, n) {
    return this.on(this.eventFormatter.format(t), n), this;
  }
  /**
   * Stop listening for an event on the channel instance.
   */
  stopListening(t, n) {
    return this.unbindEvent(this.eventFormatter.format(t), n), this;
  }
  /**
   * Register a callback to be called anytime a subscription succeeds.
   */
  subscribed(t) {
    return this.on("connect", (n) => {
      t(n);
    }), this;
  }
  /**
   * Register a callback to be called anytime an error occurs.
   */
  error(t) {
    return this;
  }
  /**
   * Bind the channel's socket to an event and store the callback.
   */
  on(t, n) {
    return this.listeners[t] = this.listeners[t] || [], this.events[t] || (this.events[t] = (r, i) => {
      this.name === r && this.listeners[t] && this.listeners[t].forEach((s) => s(i));
    }, this.socket.on(t, this.events[t])), this.listeners[t].push(n), this;
  }
  /**
   * Unbind the channel's socket from all stored event callbacks.
   */
  unbind() {
    Object.keys(this.events).forEach((t) => {
      this.unbindEvent(t);
    });
  }
  /**
   * Unbind the listeners for the given event.
   */
  unbindEvent(t, n) {
    this.listeners[t] = this.listeners[t] || [], n && (this.listeners[t] = this.listeners[t].filter(
      (r) => r !== n
    )), (!n || this.listeners[t].length === 0) && (this.events[t] && (this.socket.removeListener(t, this.events[t]), delete this.events[t]), delete this.listeners[t]);
  }
}
class Hc extends Uc {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(t, n) {
    return this.socket.emit("client event", {
      channel: this.name,
      event: `client-${t}`,
      data: n
    }), this;
  }
}
class Bh extends Hc {
  /**
   * Register a callback to be called anytime the member list changes.
   */
  here(t) {
    return this.on("presence:subscribed", (n) => {
      t(n.map((r) => r.user_info));
    }), this;
  }
  /**
   * Listen for someone joining the channel.
   */
  joining(t) {
    return this.on(
      "presence:joining",
      (n) => t(n.user_info)
    ), this;
  }
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(t, n) {
    return this.socket.emit("client event", {
      channel: this.name,
      event: `client-${t}`,
      data: n
    }), this;
  }
  /**
   * Listen for someone leaving the channel.
   */
  leaving(t) {
    return this.on(
      "presence:leaving",
      (n) => t(n.user_info)
    ), this;
  }
}
class es extends Ku {
  /**
   * Subscribe to a channel.
   */
  subscribe() {
  }
  /**
   * Unsubscribe from a channel.
   */
  unsubscribe() {
  }
  /**
   * Listen for an event on the channel instance.
   */
  listen(t, n) {
    return this;
  }
  /**
   * Listen for all events on the channel instance.
   */
  listenToAll(t) {
    return this;
  }
  /**
   * Stop listening for an event on the channel instance.
   */
  stopListening(t, n) {
    return this;
  }
  /**
   * Register a callback to be called anytime a subscription succeeds.
   */
  subscribed(t) {
    return this;
  }
  /**
   * Register a callback to be called anytime an error occurs.
   */
  error(t) {
    return this;
  }
  /**
   * Bind a channel to an event.
   */
  on(t, n) {
    return this;
  }
}
class $c extends es {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(t, n) {
    return this;
  }
}
class qh extends es {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(t, n) {
    return this;
  }
}
class zh extends $c {
  /**
   * Register a callback to be called anytime the member list changes.
   */
  here(t) {
    return this;
  }
  /**
   * Listen for someone joining the channel.
   */
  joining(t) {
    return this;
  }
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(t, n) {
    return this;
  }
  /**
   * Listen for someone leaving the channel.
   */
  leaving(t) {
    return this;
  }
}
const Wc = class Vc {
  /**
   * Create a new class instance.
   */
  constructor(t) {
    this.setOptions(t), this.connect();
  }
  /**
   * Merge the custom options with the defaults.
   */
  setOptions(t) {
    this.options = {
      ...Vc._defaultOptions,
      ...t,
      broadcaster: t.broadcaster
    };
    let n = this.csrfToken();
    n && (this.options.auth.headers["X-CSRF-TOKEN"] = n, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = n), n = this.options.bearerToken, n && (this.options.auth.headers.Authorization = "Bearer " + n, this.options.userAuthentication.headers.Authorization = "Bearer " + n);
  }
  /**
   * Extract the CSRF token from the page.
   */
  csrfToken() {
    var t, n;
    return typeof window < "u" && (t = window.Laravel) != null && t.csrfToken ? window.Laravel.csrfToken : this.options.csrfToken ? this.options.csrfToken : typeof document < "u" && typeof document.querySelector == "function" ? ((n = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : n.getAttribute("content")) ?? null : null;
  }
};
Wc._defaultOptions = {
  auth: {
    headers: {}
  },
  authEndpoint: "/broadcasting/auth",
  userAuthentication: {
    endpoint: "/broadcasting/user-auth",
    headers: {}
  },
  csrfToken: null,
  bearerToken: null,
  host: null,
  key: null,
  namespace: "App.Events"
};
let Xu = Wc;
class Fi extends Xu {
  constructor() {
    super(...arguments), this.channels = {};
  }
  /**
   * Create a fresh Pusher connection.
   */
  connect() {
    if (typeof this.options.client < "u")
      this.pusher = this.options.client;
    else if (this.options.Pusher)
      this.pusher = new this.options.Pusher(
        this.options.key,
        this.options
      );
    else if (typeof window < "u" && typeof window.Pusher < "u")
      this.pusher = new window.Pusher(this.options.key, this.options);
    else
      throw new Error(
        "Pusher client not found. Should be globally available or passed via options.client"
      );
  }
  /**
   * Sign in the user via Pusher user authentication (https://pusher.com/docs/channels/using_channels/user-authentication/).
   */
  signin() {
    this.pusher.signin();
  }
  /**
   * Listen for an event on a channel instance.
   */
  listen(t, n, r) {
    return this.channel(t).listen(n, r);
  }
  /**
   * Get a channel instance by name.
   */
  channel(t) {
    return this.channels[t] || (this.channels[t] = new Zu(
      this.pusher,
      t,
      this.options
    )), this.channels[t];
  }
  /**
   * Get a private channel instance by name.
   */
  privateChannel(t) {
    return this.channels["private-" + t] || (this.channels["private-" + t] = new jc(
      this.pusher,
      "private-" + t,
      this.options
    )), this.channels["private-" + t];
  }
  /**
   * Get a private encrypted channel instance by name.
   */
  encryptedPrivateChannel(t) {
    return this.channels["private-encrypted-" + t] || (this.channels["private-encrypted-" + t] = new Ph(
      this.pusher,
      "private-encrypted-" + t,
      this.options
    )), this.channels["private-encrypted-" + t];
  }
  /**
   * Get a presence channel instance by name.
   */
  presenceChannel(t) {
    return this.channels["presence-" + t] || (this.channels["presence-" + t] = new Lh(
      this.pusher,
      "presence-" + t,
      this.options
    )), this.channels["presence-" + t];
  }
  /**
   * Leave the given channel, as well as its private and presence variants.
   */
  leave(t) {
    [
      t,
      "private-" + t,
      "private-encrypted-" + t,
      "presence-" + t
    ].forEach((n) => {
      this.leaveChannel(n);
    });
  }
  /**
   * Leave the given channel.
   */
  leaveChannel(t) {
    this.channels[t] && (this.channels[t].unsubscribe(), delete this.channels[t]);
  }
  /**
   * Get the socket ID for the connection.
   */
  socketId() {
    return this.pusher.connection.socket_id;
  }
  /**
   * Get the current connection status.
   */
  connectionStatus() {
    const t = this.pusher.connection.state;
    switch (t) {
      case "connected":
      case "connecting":
        return t;
      case "failed":
      case "unavailable":
        return "failed";
      default:
        return "disconnected";
    }
  }
  /**
   * Subscribe to connection status changes.
   */
  onConnectionChange(t) {
    const n = () => {
      t(this.connectionStatus());
    }, r = ["state_change", "connected", "disconnected"];
    return r.forEach((i) => {
      this.pusher.connection.bind(i, n);
    }), () => {
      r.forEach((i) => {
        this.pusher.connection.unbind(i, n);
      });
    };
  }
  /**
   * Disconnect Pusher connection.
   */
  disconnect() {
    this.pusher.disconnect();
  }
}
class jh extends Xu {
  constructor() {
    super(...arguments), this.channels = {};
  }
  /**
   * Create a fresh Socket.io connection.
   */
  connect() {
    let t = this.getSocketIO();
    this.socket = t(
      this.options.host ?? void 0,
      this.options
    ), this.socket.io.on("reconnect", () => {
      Object.values(this.channels).forEach((n) => {
        n.subscribe();
      });
    });
  }
  /**
   * Get socket.io module from global scope or options.
   */
  getSocketIO() {
    if (typeof this.options.client < "u")
      return this.options.client;
    if (typeof window < "u" && typeof window.io < "u")
      return window.io;
    throw new Error(
      "Socket.io client not found. Should be globally available or passed via options.client"
    );
  }
  /**
   * Listen for an event on a channel instance.
   */
  listen(t, n, r) {
    return this.channel(t).listen(n, r);
  }
  /**
   * Get a channel instance by name.
   */
  channel(t) {
    return this.channels[t] || (this.channels[t] = new Uc(
      this.socket,
      t,
      this.options
    )), this.channels[t];
  }
  /**
   * Get a private channel instance by name.
   */
  privateChannel(t) {
    return this.channels["private-" + t] || (this.channels["private-" + t] = new Hc(
      this.socket,
      "private-" + t,
      this.options
    )), this.channels["private-" + t];
  }
  /**
   * Get a presence channel instance by name.
   */
  presenceChannel(t) {
    return this.channels["presence-" + t] || (this.channels["presence-" + t] = new Bh(
      this.socket,
      "presence-" + t,
      this.options
    )), this.channels["presence-" + t];
  }
  /**
   * Leave the given channel, as well as its private and presence variants.
   */
  leave(t) {
    [t, "private-" + t, "presence-" + t].forEach((n) => {
      this.leaveChannel(n);
    });
  }
  /**
   * Leave the given channel.
   */
  leaveChannel(t) {
    this.channels[t] && (this.channels[t].unsubscribe(), delete this.channels[t]);
  }
  /**
   * Get the socket ID for the connection.
   */
  socketId() {
    return this.socket.id;
  }
  /**
   * Get the current connection status.
   */
  connectionStatus() {
    return this.socket.connected ? "connected" : this.socket.io._reconnecting ? "reconnecting" : this.socket.id !== void 0 ? "disconnected" : "connecting";
  }
  /**
   * Subscribe to connection status changes.
   */
  onConnectionChange(t) {
    const n = () => {
      t(this.connectionStatus());
    }, r = [
      "connect",
      "disconnect",
      "connect_error",
      "reconnect_attempt",
      "reconnect",
      "reconnect_error",
      "reconnect_failed"
    ];
    return r.forEach((i) => {
      this.socket.on(i, n);
    }), () => {
      r.forEach((i) => {
        this.socket.off(i, n);
      });
    };
  }
  /**
   * Disconnect Socketio connection.
   */
  disconnect() {
    this.socket.disconnect();
  }
}
class Go extends Xu {
  constructor() {
    super(...arguments), this.channels = {};
  }
  /**
   * Create a fresh connection.
   */
  connect() {
  }
  /**
   * Listen for an event on a channel instance.
   */
  listen(t, n, r) {
    return new es();
  }
  /**
   * Get a channel instance by name.
   */
  channel(t) {
    return new es();
  }
  /**
   * Get a private channel instance by name.
   */
  privateChannel(t) {
    return new $c();
  }
  /**
   * Get a private encrypted channel instance by name.
   */
  encryptedPrivateChannel(t) {
    return new qh();
  }
  /**
   * Get a presence channel instance by name.
   */
  presenceChannel(t) {
    return new zh();
  }
  /**
   * Leave the given channel, as well as its private and presence variants.
   */
  leave(t) {
  }
  /**
   * Leave the given channel.
   */
  leaveChannel(t) {
  }
  /**
   * Get the socket ID for the connection.
   */
  socketId() {
    return "fake-socket-id";
  }
  /**
   * Get the current connection status.
   */
  connectionStatus() {
    return "connected";
  }
  /**
   * Subscribe to connection status changes.
   */
  onConnectionChange(t) {
    return () => {
    };
  }
  /**
   * Disconnect the connection.
   */
  disconnect() {
  }
}
class Uh {
  /**
   * Create a new class instance.
   */
  constructor(t) {
    this.options = t, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  /**
   * Get a channel instance by name.
   */
  channel(t) {
    return this.connector.channel(t);
  }
  /**
   * Create a new connection.
   */
  connect() {
    if (this.options.broadcaster === "reverb")
      this.connector = new Fi({
        ...this.options,
        cluster: ""
      });
    else if (this.options.broadcaster === "pusher")
      this.connector = new Fi(this.options);
    else if (this.options.broadcaster === "ably")
      this.connector = new Fi({
        ...this.options,
        cluster: "",
        broadcaster: "pusher"
      });
    else if (this.options.broadcaster === "socket.io")
      this.connector = new jh(this.options);
    else if (this.options.broadcaster === "null")
      this.connector = new Go(this.options);
    else if (typeof this.options.broadcaster == "function" && Ih(this.options.broadcaster))
      this.connector = new this.options.broadcaster(this.options);
    else
      throw new Error(
        `Broadcaster ${typeof this.options.broadcaster} ${String(this.options.broadcaster)} is not supported.`
      );
  }
  /**
   * Disconnect from the Echo server.
   */
  disconnect() {
    this.connector.disconnect();
  }
  /**
   * Get a presence channel instance by name.
   */
  join(t) {
    return this.connector.presenceChannel(t);
  }
  /**
   * Leave the given channel, as well as its private and presence variants.
   */
  leave(t) {
    this.connector.leave(t);
  }
  /**
   * Leave the given channel.
   */
  leaveChannel(t) {
    this.connector.leaveChannel(t);
  }
  /**
   * Leave all channels.
   */
  leaveAllChannels() {
    for (const t in this.connector.channels)
      this.leaveChannel(t);
  }
  /**
   * Listen for an event on a channel instance.
   */
  listen(t, n, r) {
    return this.connector.listen(t, n, r);
  }
  /**
   * Get a private channel instance by name.
   */
  private(t) {
    return this.connector.privateChannel(t);
  }
  /**
   * Get a private encrypted channel instance by name.
   */
  encryptedPrivate(t) {
    if (this.connectorSupportsEncryptedPrivateChannels(this.connector))
      return this.connector.encryptedPrivateChannel(t);
    throw new Error(
      `Broadcaster ${typeof this.options.broadcaster} ${String(
        this.options.broadcaster
      )} does not support encrypted private channels.`
    );
  }
  connectorSupportsEncryptedPrivateChannels(t) {
    return t instanceof Fi || t instanceof Go;
  }
  /**
   * Get the Socket ID for the connection.
   */
  socketId() {
    return this.connector.socketId();
  }
  /**
   * Get the current connection status.
   */
  connectionStatus() {
    return this.connector.connectionStatus();
  }
  /**
   * Register 3rd party request interceptors. These are used to automatically
   * send a connections socket id to a Laravel app with a X-Socket-Id header.
   */
  registerInterceptors() {
    typeof Vue < "u" && Vue != null && Vue.http && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), typeof Turbo == "object" && this.registerTurboRequestInterceptor();
  }
  /**
   * Register a Vue HTTP interceptor to add the X-Socket-ID header.
   */
  registerVueRequestInterceptor() {
    Vue.http.interceptors.push(
      (t, n) => {
        this.socketId() && t.headers.set("X-Socket-ID", this.socketId()), n();
      }
    );
  }
  /**
   * Register an Axios HTTP interceptor to add the X-Socket-ID header.
   */
  registerAxiosRequestInterceptor() {
    axios.interceptors.request.use(
      (t) => (this.socketId() && (t.headers["X-Socket-Id"] = this.socketId()), t)
    );
  }
  /**
   * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
   */
  registerjQueryAjaxSetup() {
    typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(
      (t, n, r) => {
        this.socketId() && r.setRequestHeader("X-Socket-Id", this.socketId());
      }
    );
  }
  /**
   * Register the Turbo Request interceptor to add the X-Socket-ID header.
   */
  registerTurboRequestInterceptor() {
    document.addEventListener(
      "turbo:before-fetch-request",
      (t) => {
        t.detail.fetchOptions.headers["X-Socket-Id"] = this.socketId();
      }
    );
  }
}
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ks = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
var Yo;
function Hh() {
  return Yo || (Yo = 1, function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(window, function() {
      return (
        /******/
        function(n) {
          var r = {};
          function i(s) {
            if (r[s])
              return r[s].exports;
            var u = r[s] = {
              /******/
              i: s,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return n[s].call(u.exports, u, u.exports, i), u.l = !0, u.exports;
          }
          return i.m = n, i.c = r, i.d = function(s, u, a) {
            i.o(s, u) || Object.defineProperty(s, u, { enumerable: !0, get: a });
          }, i.r = function(s) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
          }, i.t = function(s, u) {
            if (u & 1 && (s = i(s)), u & 8 || u & 4 && typeof s == "object" && s && s.__esModule) return s;
            var a = /* @__PURE__ */ Object.create(null);
            if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), u & 2 && typeof s != "string") for (var c in s) i.d(a, c, function(d) {
              return s[d];
            }.bind(null, c));
            return a;
          }, i.n = function(s) {
            var u = s && s.__esModule ? (
              /******/
              function() {
                return s.default;
              }
            ) : (
              /******/
              function() {
                return s;
              }
            );
            return i.d(u, "a", u), u;
          }, i.o = function(s, u) {
            return Object.prototype.hasOwnProperty.call(s, u);
          }, i.p = "", i(i.s = 2);
        }([
          /* 0 */
          /***/
          function(n, r, i) {
            var s = this && this.__extends || /* @__PURE__ */ function() {
              var w = function(v, E) {
                return w = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, S) {
                  y.__proto__ = S;
                } || function(y, S) {
                  for (var D in S) S.hasOwnProperty(D) && (y[D] = S[D]);
                }, w(v, E);
              };
              return function(v, E) {
                w(v, E);
                function y() {
                  this.constructor = v;
                }
                v.prototype = E === null ? Object.create(E) : (y.prototype = E.prototype, new y());
              };
            }();
            Object.defineProperty(r, "__esModule", { value: !0 });
            var u = 256, a = (
              /** @class */
              function() {
                function w(v) {
                  v === void 0 && (v = "="), this._paddingCharacter = v;
                }
                return w.prototype.encodedLength = function(v) {
                  return this._paddingCharacter ? (v + 2) / 3 * 4 | 0 : (v * 8 + 5) / 6 | 0;
                }, w.prototype.encode = function(v) {
                  for (var E = "", y = 0; y < v.length - 2; y += 3) {
                    var S = v[y] << 16 | v[y + 1] << 8 | v[y + 2];
                    E += this._encodeByte(S >>> 3 * 6 & 63), E += this._encodeByte(S >>> 2 * 6 & 63), E += this._encodeByte(S >>> 1 * 6 & 63), E += this._encodeByte(S >>> 0 * 6 & 63);
                  }
                  var D = v.length - y;
                  if (D > 0) {
                    var S = v[y] << 16 | (D === 2 ? v[y + 1] << 8 : 0);
                    E += this._encodeByte(S >>> 3 * 6 & 63), E += this._encodeByte(S >>> 2 * 6 & 63), D === 2 ? E += this._encodeByte(S >>> 1 * 6 & 63) : E += this._paddingCharacter || "", E += this._paddingCharacter || "";
                  }
                  return E;
                }, w.prototype.maxDecodedLength = function(v) {
                  return this._paddingCharacter ? v / 4 * 3 | 0 : (v * 6 + 7) / 8 | 0;
                }, w.prototype.decodedLength = function(v) {
                  return this.maxDecodedLength(v.length - this._getPaddingLength(v));
                }, w.prototype.decode = function(v) {
                  if (v.length === 0)
                    return new Uint8Array(0);
                  for (var E = this._getPaddingLength(v), y = v.length - E, S = new Uint8Array(this.maxDecodedLength(y)), D = 0, A = 0, T = 0, P = 0, j = 0, J = 0, te = 0; A < y - 4; A += 4)
                    P = this._decodeChar(v.charCodeAt(A + 0)), j = this._decodeChar(v.charCodeAt(A + 1)), J = this._decodeChar(v.charCodeAt(A + 2)), te = this._decodeChar(v.charCodeAt(A + 3)), S[D++] = P << 2 | j >>> 4, S[D++] = j << 4 | J >>> 2, S[D++] = J << 6 | te, T |= P & u, T |= j & u, T |= J & u, T |= te & u;
                  if (A < y - 1 && (P = this._decodeChar(v.charCodeAt(A)), j = this._decodeChar(v.charCodeAt(A + 1)), S[D++] = P << 2 | j >>> 4, T |= P & u, T |= j & u), A < y - 2 && (J = this._decodeChar(v.charCodeAt(A + 2)), S[D++] = j << 4 | J >>> 2, T |= J & u), A < y - 3 && (te = this._decodeChar(v.charCodeAt(A + 3)), S[D++] = J << 6 | te, T |= te & u), T !== 0)
                    throw new Error("Base64Coder: incorrect characters for decoding");
                  return S;
                }, w.prototype._encodeByte = function(v) {
                  var E = v;
                  return E += 65, E += 25 - v >>> 8 & 6, E += 51 - v >>> 8 & -75, E += 61 - v >>> 8 & -15, E += 62 - v >>> 8 & 3, String.fromCharCode(E);
                }, w.prototype._decodeChar = function(v) {
                  var E = u;
                  return E += (42 - v & v - 44) >>> 8 & -256 + v - 43 + 62, E += (46 - v & v - 48) >>> 8 & -256 + v - 47 + 63, E += (47 - v & v - 58) >>> 8 & -256 + v - 48 + 52, E += (64 - v & v - 91) >>> 8 & -256 + v - 65 + 0, E += (96 - v & v - 123) >>> 8 & -256 + v - 97 + 26, E;
                }, w.prototype._getPaddingLength = function(v) {
                  var E = 0;
                  if (this._paddingCharacter) {
                    for (var y = v.length - 1; y >= 0 && v[y] === this._paddingCharacter; y--)
                      E++;
                    if (v.length < 4 || E > 2)
                      throw new Error("Base64Coder: incorrect padding");
                  }
                  return E;
                }, w;
              }()
            );
            r.Coder = a;
            var c = new a();
            function d(w) {
              return c.encode(w);
            }
            r.encode = d;
            function h(w) {
              return c.decode(w);
            }
            r.decode = h;
            var p = (
              /** @class */
              function(w) {
                s(v, w);
                function v() {
                  return w !== null && w.apply(this, arguments) || this;
                }
                return v.prototype._encodeByte = function(E) {
                  var y = E;
                  return y += 65, y += 25 - E >>> 8 & 6, y += 51 - E >>> 8 & -75, y += 61 - E >>> 8 & -13, y += 62 - E >>> 8 & 49, String.fromCharCode(y);
                }, v.prototype._decodeChar = function(E) {
                  var y = u;
                  return y += (44 - E & E - 46) >>> 8 & -256 + E - 45 + 62, y += (94 - E & E - 96) >>> 8 & -256 + E - 95 + 63, y += (47 - E & E - 58) >>> 8 & -256 + E - 48 + 52, y += (64 - E & E - 91) >>> 8 & -256 + E - 65 + 0, y += (96 - E & E - 123) >>> 8 & -256 + E - 97 + 26, y;
                }, v;
              }(a)
            );
            r.URLSafeCoder = p;
            var b = new p();
            function _(w) {
              return b.encode(w);
            }
            r.encodeURLSafe = _;
            function g(w) {
              return b.decode(w);
            }
            r.decodeURLSafe = g, r.encodedLength = function(w) {
              return c.encodedLength(w);
            }, r.maxDecodedLength = function(w) {
              return c.maxDecodedLength(w);
            }, r.decodedLength = function(w) {
              return c.decodedLength(w);
            };
          },
          /* 1 */
          /***/
          function(n, r, i) {
            Object.defineProperty(r, "__esModule", { value: !0 });
            var s = "utf8: invalid string", u = "utf8: invalid source encoding";
            function a(h) {
              for (var p = new Uint8Array(c(h)), b = 0, _ = 0; _ < h.length; _++) {
                var g = h.charCodeAt(_);
                g < 128 ? p[b++] = g : g < 2048 ? (p[b++] = 192 | g >> 6, p[b++] = 128 | g & 63) : g < 55296 ? (p[b++] = 224 | g >> 12, p[b++] = 128 | g >> 6 & 63, p[b++] = 128 | g & 63) : (_++, g = (g & 1023) << 10, g |= h.charCodeAt(_) & 1023, g += 65536, p[b++] = 240 | g >> 18, p[b++] = 128 | g >> 12 & 63, p[b++] = 128 | g >> 6 & 63, p[b++] = 128 | g & 63);
              }
              return p;
            }
            r.encode = a;
            function c(h) {
              for (var p = 0, b = 0; b < h.length; b++) {
                var _ = h.charCodeAt(b);
                if (_ < 128)
                  p += 1;
                else if (_ < 2048)
                  p += 2;
                else if (_ < 55296)
                  p += 3;
                else if (_ <= 57343) {
                  if (b >= h.length - 1)
                    throw new Error(s);
                  b++, p += 4;
                } else
                  throw new Error(s);
              }
              return p;
            }
            r.encodedLength = c;
            function d(h) {
              for (var p = [], b = 0; b < h.length; b++) {
                var _ = h[b];
                if (_ & 128) {
                  var g = void 0;
                  if (_ < 224) {
                    if (b >= h.length)
                      throw new Error(u);
                    var w = h[++b];
                    if ((w & 192) !== 128)
                      throw new Error(u);
                    _ = (_ & 31) << 6 | w & 63, g = 128;
                  } else if (_ < 240) {
                    if (b >= h.length - 1)
                      throw new Error(u);
                    var w = h[++b], v = h[++b];
                    if ((w & 192) !== 128 || (v & 192) !== 128)
                      throw new Error(u);
                    _ = (_ & 15) << 12 | (w & 63) << 6 | v & 63, g = 2048;
                  } else if (_ < 248) {
                    if (b >= h.length - 2)
                      throw new Error(u);
                    var w = h[++b], v = h[++b], E = h[++b];
                    if ((w & 192) !== 128 || (v & 192) !== 128 || (E & 192) !== 128)
                      throw new Error(u);
                    _ = (_ & 15) << 18 | (w & 63) << 12 | (v & 63) << 6 | E & 63, g = 65536;
                  } else
                    throw new Error(u);
                  if (_ < g || _ >= 55296 && _ <= 57343)
                    throw new Error(u);
                  if (_ >= 65536) {
                    if (_ > 1114111)
                      throw new Error(u);
                    _ -= 65536, p.push(String.fromCharCode(55296 | _ >> 10)), _ = 56320 | _ & 1023;
                  }
                }
                p.push(String.fromCharCode(_));
              }
              return p.join("");
            }
            r.decode = d;
          },
          /* 2 */
          /***/
          function(n, r, i) {
            n.exports = i(3).default;
          },
          /* 3 */
          /***/
          function(n, r, i) {
            i.r(r);
            class s {
              constructor(o, l) {
                this.lastId = 0, this.prefix = o, this.name = l;
              }
              create(o) {
                this.lastId++;
                var l = this.lastId, m = this.prefix + l, x = this.name + "[" + l + "]", F = !1, q = function() {
                  F || (o.apply(null, arguments), F = !0);
                };
                return this[l] = q, { number: l, id: m, name: x, callback: q };
              }
              remove(o) {
                delete this[o.number];
              }
            }
            var u = new s("_pusher_script_", "Pusher.ScriptReceivers"), a = {
              VERSION: "8.4.0",
              PROTOCOL: 7,
              wsPort: 80,
              wssPort: 443,
              wsPath: "",
              httpHost: "sockjs.pusher.com",
              httpPort: 80,
              httpsPort: 443,
              httpPath: "/pusher",
              stats_host: "stats.pusher.com",
              authEndpoint: "/pusher/auth",
              authTransport: "ajax",
              activityTimeout: 12e4,
              pongTimeout: 3e4,
              unavailableTimeout: 1e4,
              userAuthentication: {
                endpoint: "/pusher/user-auth",
                transport: "ajax"
              },
              channelAuthorization: {
                endpoint: "/pusher/auth",
                transport: "ajax"
              },
              cdn_http: "http://js.pusher.com",
              cdn_https: "https://js.pusher.com",
              dependency_suffix: ""
            }, c = a;
            class d {
              constructor(o) {
                this.options = o, this.receivers = o.receivers || u, this.loading = {};
              }
              load(o, l, m) {
                var x = this;
                if (x.loading[o] && x.loading[o].length > 0)
                  x.loading[o].push(m);
                else {
                  x.loading[o] = [m];
                  var F = ue.createScriptRequest(x.getPath(o, l)), q = x.receivers.create(function(Y) {
                    if (x.receivers.remove(q), x.loading[o]) {
                      var re = x.loading[o];
                      delete x.loading[o];
                      for (var xe = function(Qe) {
                        Qe || F.cleanup();
                      }, Ee = 0; Ee < re.length; Ee++)
                        re[Ee](Y, xe);
                    }
                  });
                  F.send(q);
                }
              }
              getRoot(o) {
                var l, m = ue.getDocument().location.protocol;
                return o && o.useTLS || m === "https:" ? l = this.options.cdn_https : l = this.options.cdn_http, l.replace(/\/*$/, "") + "/" + this.options.version;
              }
              getPath(o, l) {
                return this.getRoot(l) + "/" + o + this.options.suffix + ".js";
              }
            }
            var h = new s("_pusher_dependencies", "Pusher.DependenciesReceivers"), p = new d({
              cdn_http: c.cdn_http,
              cdn_https: c.cdn_https,
              version: c.VERSION,
              suffix: c.dependency_suffix,
              receivers: h
            });
            const b = {
              baseUrl: "https://pusher.com",
              urls: {
                authenticationEndpoint: {
                  path: "/docs/channels/server_api/authenticating_users"
                },
                authorizationEndpoint: {
                  path: "/docs/channels/server_api/authorizing-users/"
                },
                javascriptQuickStart: {
                  path: "/docs/javascript_quick_start"
                },
                triggeringClientEvents: {
                  path: "/docs/client_api_guide/client_events#trigger-events"
                },
                encryptedChannelSupport: {
                  fullUrl: "https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"
                }
              }
            };
            var g = { buildLogSuffix: function(f) {
              const o = "See:", l = b.urls[f];
              if (!l)
                return "";
              let m;
              return l.fullUrl ? m = l.fullUrl : l.path && (m = b.baseUrl + l.path), m ? `${o} ${m}` : "";
            } }, w;
            (function(f) {
              f.UserAuthentication = "user-authentication", f.ChannelAuthorization = "channel-authorization";
            })(w || (w = {}));
            class v extends Error {
              constructor(o) {
                super(o), Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class E extends Error {
              constructor(o) {
                super(o), Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class y extends Error {
              constructor(o) {
                super(o), Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class S extends Error {
              constructor(o) {
                super(o), Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class D extends Error {
              constructor(o) {
                super(o), Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class A extends Error {
              constructor(o) {
                super(o), Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class T extends Error {
              constructor(o) {
                super(o), Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class P extends Error {
              constructor(o) {
                super(o), Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class j extends Error {
              constructor(o, l) {
                super(l), this.status = o, Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            var te = function(f, o, l, m, x) {
              const F = ue.createXHR();
              F.open("POST", l.endpoint, !0), F.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
              for (var q in l.headers)
                F.setRequestHeader(q, l.headers[q]);
              if (l.headersProvider != null) {
                let Y = l.headersProvider();
                for (var q in Y)
                  F.setRequestHeader(q, Y[q]);
              }
              return F.onreadystatechange = function() {
                if (F.readyState === 4)
                  if (F.status === 200) {
                    let Y, re = !1;
                    try {
                      Y = JSON.parse(F.responseText), re = !0;
                    } catch {
                      x(new j(200, `JSON returned from ${m.toString()} endpoint was invalid, yet status code was 200. Data was: ${F.responseText}`), null);
                    }
                    re && x(null, Y);
                  } else {
                    let Y = "";
                    switch (m) {
                      case w.UserAuthentication:
                        Y = g.buildLogSuffix("authenticationEndpoint");
                        break;
                      case w.ChannelAuthorization:
                        Y = `Clients must be authorized to join private or presence channels. ${g.buildLogSuffix("authorizationEndpoint")}`;
                        break;
                    }
                    x(new j(F.status, `Unable to retrieve auth string from ${m.toString()} endpoint - received status: ${F.status} from ${l.endpoint}. ${Y}`), null);
                  }
              }, F.send(o), F;
            };
            function _e(f) {
              return Bt(ke(f));
            }
            var we = String.fromCharCode, je = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Te = function(f) {
              var o = f.charCodeAt(0);
              return o < 128 ? f : o < 2048 ? we(192 | o >>> 6) + we(128 | o & 63) : we(224 | o >>> 12 & 15) + we(128 | o >>> 6 & 63) + we(128 | o & 63);
            }, ke = function(f) {
              return f.replace(/[^\x00-\x7F]/g, Te);
            }, tt = function(f) {
              var o = [0, 2, 1][f.length % 3], l = f.charCodeAt(0) << 16 | (f.length > 1 ? f.charCodeAt(1) : 0) << 8 | (f.length > 2 ? f.charCodeAt(2) : 0), m = [
                je.charAt(l >>> 18),
                je.charAt(l >>> 12 & 63),
                o >= 2 ? "=" : je.charAt(l >>> 6 & 63),
                o >= 1 ? "=" : je.charAt(l & 63)
              ];
              return m.join("");
            }, Bt = window.btoa || function(f) {
              return f.replace(/[\s\S]{1,3}/g, tt);
            };
            class qe {
              constructor(o, l, m, x) {
                this.clear = l, this.timer = o(() => {
                  this.timer && (this.timer = x(this.timer));
                }, m);
              }
              isRunning() {
                return this.timer !== null;
              }
              ensureAborted() {
                this.timer && (this.clear(this.timer), this.timer = null);
              }
            }
            var nt = qe;
            function Dt(f) {
              window.clearTimeout(f);
            }
            function qt(f) {
              window.clearInterval(f);
            }
            class st extends nt {
              constructor(o, l) {
                super(setTimeout, Dt, o, function(m) {
                  return l(), null;
                });
              }
            }
            class zt extends nt {
              constructor(o, l) {
                super(setInterval, qt, o, function(m) {
                  return l(), m;
                });
              }
            }
            var On = {
              now() {
                return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf();
              },
              defer(f) {
                return new st(0, f);
              },
              method(f, ...o) {
                var l = Array.prototype.slice.call(arguments, 1);
                return function(m) {
                  return m[f].apply(m, l.concat(arguments));
                };
              }
            }, $e = On;
            function De(f, ...o) {
              for (var l = 0; l < o.length; l++) {
                var m = o[l];
                for (var x in m)
                  m[x] && m[x].constructor && m[x].constructor === Object ? f[x] = De(f[x] || {}, m[x]) : f[x] = m[x];
              }
              return f;
            }
            function Kn() {
              for (var f = ["Pusher"], o = 0; o < arguments.length; o++)
                typeof arguments[o] == "string" ? f.push(arguments[o]) : f.push(Re(arguments[o]));
              return f.join(" : ");
            }
            function Rn(f, o) {
              var l = Array.prototype.indexOf;
              if (f === null)
                return -1;
              if (l && f.indexOf === l)
                return f.indexOf(o);
              for (var m = 0, x = f.length; m < x; m++)
                if (f[m] === o)
                  return m;
              return -1;
            }
            function Fe(f, o) {
              for (var l in f)
                Object.prototype.hasOwnProperty.call(f, l) && o(f[l], l, f);
            }
            function Ot(f) {
              var o = [];
              return Fe(f, function(l, m) {
                o.push(m);
              }), o;
            }
            function Zn(f) {
              var o = [];
              return Fe(f, function(l) {
                o.push(l);
              }), o;
            }
            function yt(f, o, l) {
              for (var m = 0; m < f.length; m++)
                o.call(l || window, f[m], m, f);
            }
            function Mn(f, o) {
              for (var l = [], m = 0; m < f.length; m++)
                l.push(o(f[m], m, f, l));
              return l;
            }
            function yn(f, o) {
              var l = {};
              return Fe(f, function(m, x) {
                l[x] = o(m);
              }), l;
            }
            function Fn(f, o) {
              o = o || function(x) {
                return !!x;
              };
              for (var l = [], m = 0; m < f.length; m++)
                o(f[m], m, f, l) && l.push(f[m]);
              return l;
            }
            function Z(f, o) {
              var l = {};
              return Fe(f, function(m, x) {
                (o && o(m, x, f, l) || m) && (l[x] = m);
              }), l;
            }
            function ne(f) {
              var o = [];
              return Fe(f, function(l, m) {
                o.push([m, l]);
              }), o;
            }
            function ve(f, o) {
              for (var l = 0; l < f.length; l++)
                if (o(f[l], l, f))
                  return !0;
              return !1;
            }
            function Pe(f, o) {
              for (var l = 0; l < f.length; l++)
                if (!o(f[l], l, f))
                  return !1;
              return !0;
            }
            function ge(f) {
              return yn(f, function(o) {
                return typeof o == "object" && (o = Re(o)), encodeURIComponent(_e(o.toString()));
              });
            }
            function Oe(f) {
              var o = Z(f, function(m) {
                return m !== void 0;
              }), l = Mn(ne(ge(o)), $e.method("join", "=")).join("&");
              return l;
            }
            function Le(f) {
              var o = [], l = [];
              return function m(x, F) {
                var q, Y, re;
                switch (typeof x) {
                  case "object":
                    if (!x)
                      return null;
                    for (q = 0; q < o.length; q += 1)
                      if (o[q] === x)
                        return { $ref: l[q] };
                    if (o.push(x), l.push(F), Object.prototype.toString.apply(x) === "[object Array]")
                      for (re = [], q = 0; q < x.length; q += 1)
                        re[q] = m(x[q], F + "[" + q + "]");
                    else {
                      re = {};
                      for (Y in x)
                        Object.prototype.hasOwnProperty.call(x, Y) && (re[Y] = m(x[Y], F + "[" + JSON.stringify(Y) + "]"));
                    }
                    return re;
                  case "number":
                  case "string":
                  case "boolean":
                    return x;
                }
              }(f, "$");
            }
            function Re(f) {
              try {
                return JSON.stringify(f);
              } catch {
                return JSON.stringify(Le(f));
              }
            }
            class Xe {
              constructor() {
                this.globalLog = (o) => {
                  window.console && window.console.log && window.console.log(o);
                };
              }
              debug(...o) {
                this.log(this.globalLog, o);
              }
              warn(...o) {
                this.log(this.globalLogWarn, o);
              }
              error(...o) {
                this.log(this.globalLogError, o);
              }
              globalLogWarn(o) {
                window.console && window.console.warn ? window.console.warn(o) : this.globalLog(o);
              }
              globalLogError(o) {
                window.console && window.console.error ? window.console.error(o) : this.globalLogWarn(o);
              }
              log(o, ...l) {
                var m = Kn.apply(this, arguments);
                Ps.log ? Ps.log(m) : Ps.logToConsole && o.bind(this)(m);
              }
            }
            var ce = new Xe(), Ge = function(f, o, l, m, x) {
              (l.headers !== void 0 || l.headersProvider != null) && ce.warn(`To send headers with the ${m.toString()} request, you must use AJAX, rather than JSONP.`);
              var F = f.nextAuthCallbackID.toString();
              f.nextAuthCallbackID++;
              var q = f.getDocument(), Y = q.createElement("script");
              f.auth_callbacks[F] = function(Ee) {
                x(null, Ee);
              };
              var re = "Pusher.auth_callbacks['" + F + "']";
              Y.src = l.endpoint + "?callback=" + encodeURIComponent(re) + "&" + o;
              var xe = q.getElementsByTagName("head")[0] || q.documentElement;
              xe.insertBefore(Y, xe.firstChild);
            }, ut = Ge;
            class Rt {
              constructor(o) {
                this.src = o;
              }
              send(o) {
                var l = this, m = "Error loading " + l.src;
                l.script = document.createElement("script"), l.script.id = o.id, l.script.src = l.src, l.script.type = "text/javascript", l.script.charset = "UTF-8", l.script.addEventListener ? (l.script.onerror = function() {
                  o.callback(m);
                }, l.script.onload = function() {
                  o.callback(null);
                }) : l.script.onreadystatechange = function() {
                  (l.script.readyState === "loaded" || l.script.readyState === "complete") && o.callback(null);
                }, l.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent) ? (l.errorScript = document.createElement("script"), l.errorScript.id = o.id + "_error", l.errorScript.text = o.name + "('" + m + "');", l.script.async = l.errorScript.async = !1) : l.script.async = !0;
                var x = document.getElementsByTagName("head")[0];
                x.insertBefore(l.script, x.firstChild), l.errorScript && x.insertBefore(l.errorScript, l.script.nextSibling);
              }
              cleanup() {
                this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null;
              }
            }
            class wt {
              constructor(o, l) {
                this.url = o, this.data = l;
              }
              send(o) {
                if (!this.request) {
                  var l = Oe(this.data), m = this.url + "/" + o.number + "?" + l;
                  this.request = ue.createScriptRequest(m), this.request.send(o);
                }
              }
              cleanup() {
                this.request && this.request.cleanup();
              }
            }
            var ot = function(f, o) {
              return function(l, m) {
                var x = "http" + (o ? "s" : "") + "://", F = x + (f.host || f.options.host) + f.options.path, q = ue.createJSONPRequest(F, l), Y = ue.ScriptReceivers.create(function(re, xe) {
                  u.remove(Y), q.cleanup(), xe && xe.host && (f.host = xe.host), m && m(re, xe);
                });
                q.send(Y);
              };
            }, jt = {
              name: "jsonp",
              getAgent: ot
            }, Gt = jt;
            function wn(f, o, l) {
              var m = f + (o.useTLS ? "s" : ""), x = o.useTLS ? o.hostTLS : o.hostNonTLS;
              return m + "://" + x + l;
            }
            function Yt(f, o) {
              var l = "/app/" + f, m = "?protocol=" + c.PROTOCOL + "&client=js&version=" + c.VERSION + (o ? "&" + o : "");
              return l + m;
            }
            var Ut = {
              getInitial: function(f, o) {
                var l = (o.httpPath || "") + Yt(f, "flash=false");
                return wn("ws", o, l);
              }
            }, Mt = {
              getInitial: function(f, o) {
                var l = (o.httpPath || "/pusher") + Yt(f);
                return wn("http", o, l);
              }
            }, kn = {
              getInitial: function(f, o) {
                return wn("http", o, o.httpPath || "/pusher");
              },
              getPath: function(f, o) {
                return Yt(f);
              }
            };
            class Nn {
              constructor() {
                this._callbacks = {};
              }
              get(o) {
                return this._callbacks[In(o)];
              }
              add(o, l, m) {
                var x = In(o);
                this._callbacks[x] = this._callbacks[x] || [], this._callbacks[x].push({
                  fn: l,
                  context: m
                });
              }
              remove(o, l, m) {
                if (!o && !l && !m) {
                  this._callbacks = {};
                  return;
                }
                var x = o ? [In(o)] : Ot(this._callbacks);
                l || m ? this.removeCallback(x, l, m) : this.removeAllCallbacks(x);
              }
              removeCallback(o, l, m) {
                yt(o, function(x) {
                  this._callbacks[x] = Fn(this._callbacks[x] || [], function(F) {
                    return l && l !== F.fn || m && m !== F.context;
                  }), this._callbacks[x].length === 0 && delete this._callbacks[x];
                }, this);
              }
              removeAllCallbacks(o) {
                yt(o, function(l) {
                  delete this._callbacks[l];
                }, this);
              }
            }
            function In(f) {
              return "_" + f;
            }
            class ft {
              constructor(o) {
                this.callbacks = new Nn(), this.global_callbacks = [], this.failThrough = o;
              }
              bind(o, l, m) {
                return this.callbacks.add(o, l, m), this;
              }
              bind_global(o) {
                return this.global_callbacks.push(o), this;
              }
              unbind(o, l, m) {
                return this.callbacks.remove(o, l, m), this;
              }
              unbind_global(o) {
                return o ? (this.global_callbacks = Fn(this.global_callbacks || [], (l) => l !== o), this) : (this.global_callbacks = [], this);
              }
              unbind_all() {
                return this.unbind(), this.unbind_global(), this;
              }
              emit(o, l, m) {
                for (var x = 0; x < this.global_callbacks.length; x++)
                  this.global_callbacks[x](o, l);
                var F = this.callbacks.get(o), q = [];
                if (m ? q.push(l, m) : l && q.push(l), F && F.length > 0)
                  for (var x = 0; x < F.length; x++)
                    F[x].fn.apply(F[x].context || window, q);
                else this.failThrough && this.failThrough(o, l);
                return this;
              }
            }
            class lr extends ft {
              constructor(o, l, m, x, F) {
                super(), this.initialize = ue.transportConnectionInitializer, this.hooks = o, this.name = l, this.priority = m, this.key = x, this.options = F, this.state = "new", this.timeline = F.timeline, this.activityTimeout = F.activityTimeout, this.id = this.timeline.generateUniqueID();
              }
              handlesActivityChecks() {
                return !!this.hooks.handlesActivityChecks;
              }
              supportsPing() {
                return !!this.hooks.supportsPing;
              }
              connect() {
                if (this.socket || this.state !== "initialized")
                  return !1;
                var o = this.hooks.urls.getInitial(this.key, this.options);
                try {
                  this.socket = this.hooks.getSocket(o, this.options);
                } catch (l) {
                  return $e.defer(() => {
                    this.onError(l), this.changeState("closed");
                  }), !1;
                }
                return this.bindListeners(), ce.debug("Connecting", { transport: this.name, url: o }), this.changeState("connecting"), !0;
              }
              close() {
                return this.socket ? (this.socket.close(), !0) : !1;
              }
              send(o) {
                return this.state === "open" ? ($e.defer(() => {
                  this.socket && this.socket.send(o);
                }), !0) : !1;
              }
              ping() {
                this.state === "open" && this.supportsPing() && this.socket.ping();
              }
              onOpen() {
                this.hooks.beforeOpen && this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options)), this.changeState("open"), this.socket.onopen = void 0;
              }
              onError(o) {
                this.emit("error", { type: "WebSocketError", error: o }), this.timeline.error(this.buildTimelineMessage({ error: o.toString() }));
              }
              onClose(o) {
                o ? this.changeState("closed", {
                  code: o.code,
                  reason: o.reason,
                  wasClean: o.wasClean
                }) : this.changeState("closed"), this.unbindListeners(), this.socket = void 0;
              }
              onMessage(o) {
                this.emit("message", o);
              }
              onActivity() {
                this.emit("activity");
              }
              bindListeners() {
                this.socket.onopen = () => {
                  this.onOpen();
                }, this.socket.onerror = (o) => {
                  this.onError(o);
                }, this.socket.onclose = (o) => {
                  this.onClose(o);
                }, this.socket.onmessage = (o) => {
                  this.onMessage(o);
                }, this.supportsPing() && (this.socket.onactivity = () => {
                  this.onActivity();
                });
              }
              unbindListeners() {
                this.socket && (this.socket.onopen = void 0, this.socket.onerror = void 0, this.socket.onclose = void 0, this.socket.onmessage = void 0, this.supportsPing() && (this.socket.onactivity = void 0));
              }
              changeState(o, l) {
                this.state = o, this.timeline.info(this.buildTimelineMessage({
                  state: o,
                  params: l
                })), this.emit(o, l);
              }
              buildTimelineMessage(o) {
                return De({ cid: this.id }, o);
              }
            }
            class Kt {
              constructor(o) {
                this.hooks = o;
              }
              isSupported(o) {
                return this.hooks.isSupported(o);
              }
              createConnection(o, l, m, x) {
                return new lr(this.hooks, o, l, m, x);
              }
            }
            var at = new Kt({
              urls: Ut,
              handlesActivityChecks: !1,
              supportsPing: !1,
              isInitialized: function() {
                return !!ue.getWebSocketAPI();
              },
              isSupported: function() {
                return !!ue.getWebSocketAPI();
              },
              getSocket: function(f) {
                return ue.createWebSocket(f);
              }
            }), k = {
              urls: Mt,
              handlesActivityChecks: !1,
              supportsPing: !0,
              isInitialized: function() {
                return !0;
              }
            }, N = De({
              getSocket: function(f) {
                return ue.HTTPFactory.createStreamingSocket(f);
              }
            }, k), z = De({
              getSocket: function(f) {
                return ue.HTTPFactory.createPollingSocket(f);
              }
            }, k), X = {
              isSupported: function() {
                return ue.isXHRSupported();
              }
            }, R = new Kt(De({}, N, X)), B = new Kt(De({}, z, X)), M = {
              ws: at,
              xhr_streaming: R,
              xhr_polling: B
            }, I = M, $ = new Kt({
              file: "sockjs",
              urls: kn,
              handlesActivityChecks: !0,
              supportsPing: !1,
              isSupported: function() {
                return !0;
              },
              isInitialized: function() {
                return window.SockJS !== void 0;
              },
              getSocket: function(f, o) {
                return new window.SockJS(f, null, {
                  js_path: p.getPath("sockjs", {
                    useTLS: o.useTLS
                  }),
                  ignore_null_origin: o.ignoreNullOrigin
                });
              },
              beforeOpen: function(f, o) {
                f.send(JSON.stringify({
                  path: o
                }));
              }
            }), he = {
              isSupported: function(f) {
                var o = ue.isXDRSupported(f.useTLS);
                return o;
              }
            }, pe = new Kt(De({}, N, he)), Je = new Kt(De({}, z, he));
            I.xdr_streaming = pe, I.xdr_polling = Je, I.sockjs = $;
            var We = I;
            class Ht extends ft {
              constructor() {
                super();
                var o = this;
                window.addEventListener !== void 0 && (window.addEventListener("online", function() {
                  o.emit("online");
                }, !1), window.addEventListener("offline", function() {
                  o.emit("offline");
                }, !1));
              }
              isOnline() {
                return window.navigator.onLine === void 0 ? !0 : window.navigator.onLine;
              }
            }
            var Ft = new Ht();
            class Zt {
              constructor(o, l, m) {
                this.manager = o, this.transport = l, this.minPingDelay = m.minPingDelay, this.maxPingDelay = m.maxPingDelay, this.pingDelay = void 0;
              }
              createConnection(o, l, m, x) {
                x = De({}, x, {
                  activityTimeout: this.pingDelay
                });
                var F = this.transport.createConnection(o, l, m, x), q = null, Y = function() {
                  F.unbind("open", Y), F.bind("closed", re), q = $e.now();
                }, re = (xe) => {
                  if (F.unbind("closed", re), xe.code === 1002 || xe.code === 1003)
                    this.manager.reportDeath();
                  else if (!xe.wasClean && q) {
                    var Ee = $e.now() - q;
                    Ee < 2 * this.maxPingDelay && (this.manager.reportDeath(), this.pingDelay = Math.max(Ee / 2, this.minPingDelay));
                  }
                };
                return F.bind("open", Y), F;
              }
              isSupported(o) {
                return this.manager.isAlive() && this.transport.isSupported(o);
              }
            }
            const Pn = {
              decodeMessage: function(f) {
                try {
                  var o = JSON.parse(f.data), l = o.data;
                  if (typeof l == "string")
                    try {
                      l = JSON.parse(o.data);
                    } catch {
                    }
                  var m = {
                    event: o.event,
                    channel: o.channel,
                    data: l
                  };
                  return o.user_id && (m.user_id = o.user_id), m;
                } catch (x) {
                  throw { type: "MessageParseError", error: x, data: f.data };
                }
              },
              encodeMessage: function(f) {
                return JSON.stringify(f);
              },
              processHandshake: function(f) {
                var o = Pn.decodeMessage(f);
                if (o.event === "pusher:connection_established") {
                  if (!o.data.activity_timeout)
                    throw "No activity timeout specified in handshake";
                  return {
                    action: "connected",
                    id: o.data.socket_id,
                    activityTimeout: o.data.activity_timeout * 1e3
                  };
                } else {
                  if (o.event === "pusher:error")
                    return {
                      action: this.getCloseAction(o.data),
                      error: this.getCloseError(o.data)
                    };
                  throw "Invalid handshake";
                }
              },
              getCloseAction: function(f) {
                return f.code < 4e3 ? f.code >= 1002 && f.code <= 1004 ? "backoff" : null : f.code === 4e3 ? "tls_only" : f.code < 4100 ? "refused" : f.code < 4200 ? "backoff" : f.code < 4300 ? "retry" : "refused";
              },
              getCloseError: function(f) {
                return f.code !== 1e3 && f.code !== 1001 ? {
                  type: "PusherError",
                  data: {
                    code: f.code,
                    message: f.reason || f.message
                  }
                } : null;
              }
            };
            var Xt = Pn;
            class Ss extends ft {
              constructor(o, l) {
                super(), this.id = o, this.transport = l, this.activityTimeout = l.activityTimeout, this.bindListeners();
              }
              handlesActivityChecks() {
                return this.transport.handlesActivityChecks();
              }
              send(o) {
                return this.transport.send(o);
              }
              send_event(o, l, m) {
                var x = { event: o, data: l };
                return m && (x.channel = m), ce.debug("Event sent", x), this.send(Xt.encodeMessage(x));
              }
              ping() {
                this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {});
              }
              close() {
                this.transport.close();
              }
              bindListeners() {
                var o = {
                  message: (m) => {
                    var x;
                    try {
                      x = Xt.decodeMessage(m);
                    } catch (F) {
                      this.emit("error", {
                        type: "MessageParseError",
                        error: F,
                        data: m.data
                      });
                    }
                    if (x !== void 0) {
                      switch (ce.debug("Event recd", x), x.event) {
                        case "pusher:error":
                          this.emit("error", {
                            type: "PusherError",
                            data: x.data
                          });
                          break;
                        case "pusher:ping":
                          this.emit("ping");
                          break;
                        case "pusher:pong":
                          this.emit("pong");
                          break;
                      }
                      this.emit("message", x);
                    }
                  },
                  activity: () => {
                    this.emit("activity");
                  },
                  error: (m) => {
                    this.emit("error", m);
                  },
                  closed: (m) => {
                    l(), m && m.code && this.handleCloseEvent(m), this.transport = null, this.emit("closed");
                  }
                }, l = () => {
                  Fe(o, (m, x) => {
                    this.transport.unbind(x, m);
                  });
                };
                Fe(o, (m, x) => {
                  this.transport.bind(x, m);
                });
              }
              handleCloseEvent(o) {
                var l = Xt.getCloseAction(o), m = Xt.getCloseError(o);
                m && this.emit("error", m), l && this.emit(l, { action: l, error: m });
              }
            }
            class wi {
              constructor(o, l) {
                this.transport = o, this.callback = l, this.bindListeners();
              }
              close() {
                this.unbindListeners(), this.transport.close();
              }
              bindListeners() {
                this.onMessage = (o) => {
                  this.unbindListeners();
                  var l;
                  try {
                    l = Xt.processHandshake(o);
                  } catch (m) {
                    this.finish("error", { error: m }), this.transport.close();
                    return;
                  }
                  l.action === "connected" ? this.finish("connected", {
                    connection: new Ss(l.id, this.transport),
                    activityTimeout: l.activityTimeout
                  }) : (this.finish(l.action, { error: l.error }), this.transport.close());
                }, this.onClosed = (o) => {
                  this.unbindListeners();
                  var l = Xt.getCloseAction(o) || "backoff", m = Xt.getCloseError(o);
                  this.finish(l, { error: m });
                }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed);
              }
              unbindListeners() {
                this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed);
              }
              finish(o, l) {
                this.callback(De({ transport: this.transport, action: o }, l));
              }
            }
            class dr {
              constructor(o, l) {
                this.timeline = o, this.options = l || {};
              }
              send(o, l) {
                this.timeline.isEmpty() || this.timeline.send(ue.TimelineTransport.getAgent(this, o), l);
              }
            }
            class Lr extends ft {
              constructor(o, l) {
                super(function(m, x) {
                  ce.debug("No callbacks on " + o + " for " + m);
                }), this.name = o, this.pusher = l, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1;
              }
              authorize(o, l) {
                return l(null, { auth: "" });
              }
              trigger(o, l) {
                if (o.indexOf("client-") !== 0)
                  throw new v("Event '" + o + "' does not start with 'client-'");
                if (!this.subscribed) {
                  var m = g.buildLogSuffix("triggeringClientEvents");
                  ce.warn(`Client event triggered before channel 'subscription_succeeded' event . ${m}`);
                }
                return this.pusher.send_event(o, l, this.name);
              }
              disconnect() {
                this.subscribed = !1, this.subscriptionPending = !1;
              }
              handleEvent(o) {
                var l = o.event, m = o.data;
                if (l === "pusher_internal:subscription_succeeded")
                  this.handleSubscriptionSucceededEvent(o);
                else if (l === "pusher_internal:subscription_count")
                  this.handleSubscriptionCountEvent(o);
                else if (l.indexOf("pusher_internal:") !== 0) {
                  var x = {};
                  this.emit(l, m, x);
                }
              }
              handleSubscriptionSucceededEvent(o) {
                this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", o.data);
              }
              handleSubscriptionCountEvent(o) {
                o.data.subscription_count && (this.subscriptionCount = o.data.subscription_count), this.emit("pusher:subscription_count", o.data);
              }
              subscribe() {
                this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, (o, l) => {
                  o ? (this.subscriptionPending = !1, ce.error(o.toString()), this.emit("pusher:subscription_error", Object.assign({}, {
                    type: "AuthError",
                    error: o.message
                  }, o instanceof j ? { status: o.status } : {}))) : this.pusher.send_event("pusher:subscribe", {
                    auth: l.auth,
                    channel_data: l.channel_data,
                    channel: this.name
                  });
                }));
              }
              unsubscribe() {
                this.subscribed = !1, this.pusher.send_event("pusher:unsubscribe", {
                  channel: this.name
                });
              }
              cancelSubscription() {
                this.subscriptionCancelled = !0;
              }
              reinstateSubscription() {
                this.subscriptionCancelled = !1;
              }
            }
            class Br extends Lr {
              authorize(o, l) {
                return this.pusher.config.channelAuthorizer({
                  channelName: this.name,
                  socketId: o
                }, l);
              }
            }
            class As {
              constructor() {
                this.reset();
              }
              get(o) {
                return Object.prototype.hasOwnProperty.call(this.members, o) ? {
                  id: o,
                  info: this.members[o]
                } : null;
              }
              each(o) {
                Fe(this.members, (l, m) => {
                  o(this.get(m));
                });
              }
              setMyID(o) {
                this.myID = o;
              }
              onSubscription(o) {
                this.members = o.presence.hash, this.count = o.presence.count, this.me = this.get(this.myID);
              }
              addMember(o) {
                return this.get(o.user_id) === null && this.count++, this.members[o.user_id] = o.user_info, this.get(o.user_id);
              }
              removeMember(o) {
                var l = this.get(o.user_id);
                return l && (delete this.members[o.user_id], this.count--), l;
              }
              reset() {
                this.members = {}, this.count = 0, this.myID = null, this.me = null;
              }
            }
            var an = function(f, o, l, m) {
              function x(F) {
                return F instanceof l ? F : new l(function(q) {
                  q(F);
                });
              }
              return new (l || (l = Promise))(function(F, q) {
                function Y(Ee) {
                  try {
                    xe(m.next(Ee));
                  } catch (Qe) {
                    q(Qe);
                  }
                }
                function re(Ee) {
                  try {
                    xe(m.throw(Ee));
                  } catch (Qe) {
                    q(Qe);
                  }
                }
                function xe(Ee) {
                  Ee.done ? F(Ee.value) : x(Ee.value).then(Y, re);
                }
                xe((m = m.apply(f, o || [])).next());
              });
            };
            class ki extends Br {
              constructor(o, l) {
                super(o, l), this.members = new As();
              }
              authorize(o, l) {
                super.authorize(o, (m, x) => an(this, void 0, void 0, function* () {
                  if (!m)
                    if (x = x, x.channel_data != null) {
                      var F = JSON.parse(x.channel_data);
                      this.members.setMyID(F.user_id);
                    } else if (yield this.pusher.user.signinDonePromise, this.pusher.user.user_data != null)
                      this.members.setMyID(this.pusher.user.user_data.id);
                    else {
                      let q = g.buildLogSuffix("authorizationEndpoint");
                      ce.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${q}, or the user should be signed in.`), l("Invalid auth response");
                      return;
                    }
                  l(m, x);
                }));
              }
              handleEvent(o) {
                var l = o.event;
                if (l.indexOf("pusher_internal:") === 0)
                  this.handleInternalEvent(o);
                else {
                  var m = o.data, x = {};
                  o.user_id && (x.user_id = o.user_id), this.emit(l, m, x);
                }
              }
              handleInternalEvent(o) {
                var l = o.event, m = o.data;
                switch (l) {
                  case "pusher_internal:subscription_succeeded":
                    this.handleSubscriptionSucceededEvent(o);
                    break;
                  case "pusher_internal:subscription_count":
                    this.handleSubscriptionCountEvent(o);
                    break;
                  case "pusher_internal:member_added":
                    var x = this.members.addMember(m);
                    this.emit("pusher:member_added", x);
                    break;
                  case "pusher_internal:member_removed":
                    var F = this.members.removeMember(m);
                    F && this.emit("pusher:member_removed", F);
                    break;
                }
              }
              handleSubscriptionSucceededEvent(o) {
                this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : (this.members.onSubscription(o.data), this.emit("pusher:subscription_succeeded", this.members));
              }
              disconnect() {
                this.members.reset(), super.disconnect();
              }
            }
            var Ei = i(1), qr = i(0);
            class Ts extends Br {
              constructor(o, l, m) {
                super(o, l), this.key = null, this.nacl = m;
              }
              authorize(o, l) {
                super.authorize(o, (m, x) => {
                  if (m) {
                    l(m, x);
                    return;
                  }
                  let F = x.shared_secret;
                  if (!F) {
                    l(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                    return;
                  }
                  this.key = Object(qr.decode)(F), delete x.shared_secret, l(null, x);
                });
              }
              trigger(o, l) {
                throw new A("Client events are not currently supported for encrypted channels");
              }
              handleEvent(o) {
                var l = o.event, m = o.data;
                if (l.indexOf("pusher_internal:") === 0 || l.indexOf("pusher:") === 0) {
                  super.handleEvent(o);
                  return;
                }
                this.handleEncryptedEvent(l, m);
              }
              handleEncryptedEvent(o, l) {
                if (!this.key) {
                  ce.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                  return;
                }
                if (!l.ciphertext || !l.nonce) {
                  ce.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + l);
                  return;
                }
                let m = Object(qr.decode)(l.ciphertext);
                if (m.length < this.nacl.secretbox.overheadLength) {
                  ce.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${m.length}`);
                  return;
                }
                let x = Object(qr.decode)(l.nonce);
                if (x.length < this.nacl.secretbox.nonceLength) {
                  ce.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${x.length}`);
                  return;
                }
                let F = this.nacl.secretbox.open(m, x, this.key);
                if (F === null) {
                  ce.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), this.authorize(this.pusher.connection.socket_id, (q, Y) => {
                    if (q) {
                      ce.error(`Failed to make a request to the authEndpoint: ${Y}. Unable to fetch new key, so dropping encrypted event`);
                      return;
                    }
                    if (F = this.nacl.secretbox.open(m, x, this.key), F === null) {
                      ce.error("Failed to decrypt event with new key. Dropping encrypted event");
                      return;
                    }
                    this.emit(o, this.getDataToEmit(F));
                  });
                  return;
                }
                this.emit(o, this.getDataToEmit(F));
              }
              getDataToEmit(o) {
                let l = Object(Ei.decode)(o);
                try {
                  return JSON.parse(l);
                } catch {
                  return l;
                }
              }
            }
            class Ds extends ft {
              constructor(o, l) {
                super(), this.state = "initialized", this.connection = null, this.key = o, this.options = l, this.timeline = this.options.timeline, this.usingTLS = this.options.useTLS, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
                var m = ue.getNetwork();
                m.bind("online", () => {
                  this.timeline.info({ netinfo: "online" }), (this.state === "connecting" || this.state === "unavailable") && this.retryIn(0);
                }), m.bind("offline", () => {
                  this.timeline.info({ netinfo: "offline" }), this.connection && this.sendActivityCheck();
                }), this.updateStrategy();
              }
              connect() {
                if (!(this.connection || this.runner)) {
                  if (!this.strategy.isSupported()) {
                    this.updateState("failed");
                    return;
                  }
                  this.updateState("connecting"), this.startConnecting(), this.setUnavailableTimer();
                }
              }
              send(o) {
                return this.connection ? this.connection.send(o) : !1;
              }
              send_event(o, l, m) {
                return this.connection ? this.connection.send_event(o, l, m) : !1;
              }
              disconnect() {
                this.disconnectInternally(), this.updateState("disconnected");
              }
              isUsingTLS() {
                return this.usingTLS;
              }
              startConnecting() {
                var o = (l, m) => {
                  l ? this.runner = this.strategy.connect(0, o) : m.action === "error" ? (this.emit("error", {
                    type: "HandshakeError",
                    error: m.error
                  }), this.timeline.error({ handshakeError: m.error })) : (this.abortConnecting(), this.handshakeCallbacks[m.action](m));
                };
                this.runner = this.strategy.connect(0, o);
              }
              abortConnecting() {
                this.runner && (this.runner.abort(), this.runner = null);
              }
              disconnectInternally() {
                if (this.abortConnecting(), this.clearRetryTimer(), this.clearUnavailableTimer(), this.connection) {
                  var o = this.abandonConnection();
                  o.close();
                }
              }
              updateStrategy() {
                this.strategy = this.options.getStrategy({
                  key: this.key,
                  timeline: this.timeline,
                  useTLS: this.usingTLS
                });
              }
              retryIn(o) {
                this.timeline.info({ action: "retry", delay: o }), o > 0 && this.emit("connecting_in", Math.round(o / 1e3)), this.retryTimer = new st(o || 0, () => {
                  this.disconnectInternally(), this.connect();
                });
              }
              clearRetryTimer() {
                this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null);
              }
              setUnavailableTimer() {
                this.unavailableTimer = new st(this.options.unavailableTimeout, () => {
                  this.updateState("unavailable");
                });
              }
              clearUnavailableTimer() {
                this.unavailableTimer && this.unavailableTimer.ensureAborted();
              }
              sendActivityCheck() {
                this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new st(this.options.pongTimeout, () => {
                  this.timeline.error({ pong_timed_out: this.options.pongTimeout }), this.retryIn(0);
                });
              }
              resetActivityCheck() {
                this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new st(this.activityTimeout, () => {
                  this.sendActivityCheck();
                }));
              }
              stopActivityCheck() {
                this.activityTimer && this.activityTimer.ensureAborted();
              }
              buildConnectionCallbacks(o) {
                return De({}, o, {
                  message: (l) => {
                    this.resetActivityCheck(), this.emit("message", l);
                  },
                  ping: () => {
                    this.send_event("pusher:pong", {});
                  },
                  activity: () => {
                    this.resetActivityCheck();
                  },
                  error: (l) => {
                    this.emit("error", l);
                  },
                  closed: () => {
                    this.abandonConnection(), this.shouldRetry() && this.retryIn(1e3);
                  }
                });
              }
              buildHandshakeCallbacks(o) {
                return De({}, o, {
                  connected: (l) => {
                    this.activityTimeout = Math.min(this.options.activityTimeout, l.activityTimeout, l.connection.activityTimeout || 1 / 0), this.clearUnavailableTimer(), this.setConnection(l.connection), this.socket_id = this.connection.id, this.updateState("connected", { socket_id: this.socket_id });
                  }
                });
              }
              buildErrorCallbacks() {
                let o = (l) => (m) => {
                  m.error && this.emit("error", { type: "WebSocketError", error: m.error }), l(m);
                };
                return {
                  tls_only: o(() => {
                    this.usingTLS = !0, this.updateStrategy(), this.retryIn(0);
                  }),
                  refused: o(() => {
                    this.disconnect();
                  }),
                  backoff: o(() => {
                    this.retryIn(1e3);
                  }),
                  retry: o(() => {
                    this.retryIn(0);
                  })
                };
              }
              setConnection(o) {
                this.connection = o;
                for (var l in this.connectionCallbacks)
                  this.connection.bind(l, this.connectionCallbacks[l]);
                this.resetActivityCheck();
              }
              abandonConnection() {
                if (this.connection) {
                  this.stopActivityCheck();
                  for (var o in this.connectionCallbacks)
                    this.connection.unbind(o, this.connectionCallbacks[o]);
                  var l = this.connection;
                  return this.connection = null, l;
                }
              }
              updateState(o, l) {
                var m = this.state;
                if (this.state = o, m !== o) {
                  var x = o;
                  x === "connected" && (x += " with new socket ID " + l.socket_id), ce.debug("State changed", m + " -> " + x), this.timeline.info({ state: o, params: l }), this.emit("state_change", { previous: m, current: o }), this.emit(o, l);
                }
              }
              shouldRetry() {
                return this.state === "connecting" || this.state === "connected";
              }
            }
            class fr {
              constructor() {
                this.channels = {};
              }
              add(o, l) {
                return this.channels[o] || (this.channels[o] = Os(o, l)), this.channels[o];
              }
              all() {
                return Zn(this.channels);
              }
              find(o) {
                return this.channels[o];
              }
              remove(o) {
                var l = this.channels[o];
                return delete this.channels[o], l;
              }
              disconnect() {
                Fe(this.channels, function(o) {
                  o.disconnect();
                });
              }
            }
            function Os(f, o) {
              if (f.indexOf("private-encrypted-") === 0) {
                if (o.config.nacl)
                  return V.createEncryptedChannel(f, o, o.config.nacl);
                let l = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available", m = g.buildLogSuffix("encryptedChannelSupport");
                throw new A(`${l}. ${m}`);
              } else {
                if (f.indexOf("private-") === 0)
                  return V.createPrivateChannel(f, o);
                if (f.indexOf("presence-") === 0)
                  return V.createPresenceChannel(f, o);
                if (f.indexOf("#") === 0)
                  throw new E('Cannot create a channel with name "' + f + '".');
                return V.createChannel(f, o);
              }
            }
            var L = {
              createChannels() {
                return new fr();
              },
              createConnectionManager(f, o) {
                return new Ds(f, o);
              },
              createChannel(f, o) {
                return new Lr(f, o);
              },
              createPrivateChannel(f, o) {
                return new Br(f, o);
              },
              createPresenceChannel(f, o) {
                return new ki(f, o);
              },
              createEncryptedChannel(f, o, l) {
                return new Ts(f, o, l);
              },
              createTimelineSender(f, o) {
                return new dr(f, o);
              },
              createHandshake(f, o) {
                return new wi(f, o);
              },
              createAssistantToTheTransportManager(f, o, l) {
                return new Zt(f, o, l);
              }
            }, V = L;
            class le {
              constructor(o) {
                this.options = o || {}, this.livesLeft = this.options.lives || 1 / 0;
              }
              getAssistant(o) {
                return V.createAssistantToTheTransportManager(this, o, {
                  minPingDelay: this.options.minPingDelay,
                  maxPingDelay: this.options.maxPingDelay
                });
              }
              isAlive() {
                return this.livesLeft > 0;
              }
              reportDeath() {
                this.livesLeft -= 1;
              }
            }
            class be {
              constructor(o, l) {
                this.strategies = o, this.loop = !!l.loop, this.failFast = !!l.failFast, this.timeout = l.timeout, this.timeoutLimit = l.timeoutLimit;
              }
              isSupported() {
                return ve(this.strategies, $e.method("isSupported"));
              }
              connect(o, l) {
                var m = this.strategies, x = 0, F = this.timeout, q = null, Y = (re, xe) => {
                  xe ? l(null, xe) : (x = x + 1, this.loop && (x = x % m.length), x < m.length ? (F && (F = F * 2, this.timeoutLimit && (F = Math.min(F, this.timeoutLimit))), q = this.tryStrategy(m[x], o, { timeout: F, failFast: this.failFast }, Y)) : l(!0));
                };
                return q = this.tryStrategy(m[x], o, { timeout: F, failFast: this.failFast }, Y), {
                  abort: function() {
                    q.abort();
                  },
                  forceMinPriority: function(re) {
                    o = re, q && q.forceMinPriority(re);
                  }
                };
              }
              tryStrategy(o, l, m, x) {
                var F = null, q = null;
                return m.timeout > 0 && (F = new st(m.timeout, function() {
                  q.abort(), x(!0);
                })), q = o.connect(l, function(Y, re) {
                  Y && F && F.isRunning() && !m.failFast || (F && F.ensureAborted(), x(Y, re));
                }), {
                  abort: function() {
                    F && F.ensureAborted(), q.abort();
                  },
                  forceMinPriority: function(Y) {
                    q.forceMinPriority(Y);
                  }
                };
              }
            }
            class Ue {
              constructor(o) {
                this.strategies = o;
              }
              isSupported() {
                return ve(this.strategies, $e.method("isSupported"));
              }
              connect(o, l) {
                return Nt(this.strategies, o, function(m, x) {
                  return function(F, q) {
                    if (x[m].error = F, F) {
                      cn(x) && l(!0);
                      return;
                    }
                    yt(x, function(Y) {
                      Y.forceMinPriority(q.transport.priority);
                    }), l(null, q);
                  };
                });
              }
            }
            function Nt(f, o, l) {
              var m = Mn(f, function(x, F, q, Y) {
                return x.connect(o, l(F, Y));
              });
              return {
                abort: function() {
                  yt(m, hr);
                },
                forceMinPriority: function(x) {
                  yt(m, function(F) {
                    F.forceMinPriority(x);
                  });
                }
              };
            }
            function cn(f) {
              return Pe(f, function(o) {
                return !!o.error;
              });
            }
            function hr(f) {
              !f.error && !f.aborted && (f.abort(), f.aborted = !0);
            }
            class vt {
              constructor(o, l, m) {
                this.strategy = o, this.transports = l, this.ttl = m.ttl || 1800 * 1e3, this.usingTLS = m.useTLS, this.timeline = m.timeline;
              }
              isSupported() {
                return this.strategy.isSupported();
              }
              connect(o, l) {
                var m = this.usingTLS, x = Ci(m), F = x && x.cacheSkipCount ? x.cacheSkipCount : 0, q = [this.strategy];
                if (x && x.timestamp + this.ttl >= $e.now()) {
                  var Y = this.transports[x.transport];
                  Y && (["ws", "wss"].includes(x.transport) || F > 3 ? (this.timeline.info({
                    cached: !0,
                    transport: x.transport,
                    latency: x.latency
                  }), q.push(new be([Y], {
                    timeout: x.latency * 2 + 1e3,
                    failFast: !0
                  }))) : F++);
                }
                var re = $e.now(), xe = q.pop().connect(o, function Ee(Qe, Oi) {
                  Qe ? (zr(m), q.length > 0 ? (re = $e.now(), xe = q.pop().connect(o, Ee)) : l(Qe)) : (Si(m, Oi.transport.name, $e.now() - re, F), l(null, Oi));
                });
                return {
                  abort: function() {
                    xe.abort();
                  },
                  forceMinPriority: function(Ee) {
                    o = Ee, xe && xe.forceMinPriority(Ee);
                  }
                };
              }
            }
            function kt(f) {
              return "pusherTransport" + (f ? "TLS" : "NonTLS");
            }
            function Ci(f) {
              var o = ue.getLocalStorage();
              if (o)
                try {
                  var l = o[kt(f)];
                  if (l)
                    return JSON.parse(l);
                } catch {
                  zr(f);
                }
              return null;
            }
            function Si(f, o, l, m) {
              var x = ue.getLocalStorage();
              if (x)
                try {
                  x[kt(f)] = Re({
                    timestamp: $e.now(),
                    transport: o,
                    latency: l,
                    cacheSkipCount: m
                  });
                } catch {
                }
            }
            function zr(f) {
              var o = ue.getLocalStorage();
              if (o)
                try {
                  delete o[kt(f)];
                } catch {
                }
            }
            class pr {
              constructor(o, { delay: l }) {
                this.strategy = o, this.options = { delay: l };
              }
              isSupported() {
                return this.strategy.isSupported();
              }
              connect(o, l) {
                var m = this.strategy, x, F = new st(this.options.delay, function() {
                  x = m.connect(o, l);
                });
                return {
                  abort: function() {
                    F.ensureAborted(), x && x.abort();
                  },
                  forceMinPriority: function(q) {
                    o = q, x && x.forceMinPriority(q);
                  }
                };
              }
            }
            class Xn {
              constructor(o, l, m) {
                this.test = o, this.trueBranch = l, this.falseBranch = m;
              }
              isSupported() {
                var o = this.test() ? this.trueBranch : this.falseBranch;
                return o.isSupported();
              }
              connect(o, l) {
                var m = this.test() ? this.trueBranch : this.falseBranch;
                return m.connect(o, l);
              }
            }
            class Rs {
              constructor(o) {
                this.strategy = o;
              }
              isSupported() {
                return this.strategy.isSupported();
              }
              connect(o, l) {
                var m = this.strategy.connect(o, function(x, F) {
                  F && m.abort(), l(x, F);
                });
                return m;
              }
            }
            function Jn(f) {
              return function() {
                return f.isSupported();
              };
            }
            var gr = function(f, o, l) {
              var m = {};
              function x(bo, C0, S0, A0, T0) {
                var mo = l(f, bo, C0, S0, A0, T0);
                return m[bo] = mo, mo;
              }
              var F = Object.assign({}, o, {
                hostNonTLS: f.wsHost + ":" + f.wsPort,
                hostTLS: f.wsHost + ":" + f.wssPort,
                httpPath: f.wsPath
              }), q = Object.assign({}, F, {
                useTLS: !0
              }), Y = Object.assign({}, o, {
                hostNonTLS: f.httpHost + ":" + f.httpPort,
                hostTLS: f.httpHost + ":" + f.httpsPort,
                httpPath: f.httpPath
              }), re = {
                loop: !0,
                timeout: 15e3,
                timeoutLimit: 6e4
              }, xe = new le({
                minPingDelay: 1e4,
                maxPingDelay: f.activityTimeout
              }), Ee = new le({
                lives: 2,
                minPingDelay: 1e4,
                maxPingDelay: f.activityTimeout
              }), Qe = x("ws", "ws", 3, F, xe), Oi = x("wss", "ws", 3, q, xe), x0 = x("sockjs", "sockjs", 1, Y), co = x("xhr_streaming", "xhr_streaming", 1, Y, Ee), y0 = x("xdr_streaming", "xdr_streaming", 1, Y, Ee), lo = x("xhr_polling", "xhr_polling", 1, Y), w0 = x("xdr_polling", "xdr_polling", 1, Y), fo = new be([Qe], re), k0 = new be([Oi], re), E0 = new be([x0], re), ho = new be([
                new Xn(Jn(co), co, y0)
              ], re), po = new be([
                new Xn(Jn(lo), lo, w0)
              ], re), go = new be([
                new Xn(Jn(ho), new Ue([
                  ho,
                  new pr(po, { delay: 4e3 })
                ]), po)
              ], re), Ls = new Xn(Jn(go), go, E0), Bs;
              return o.useTLS ? Bs = new Ue([
                fo,
                new pr(Ls, { delay: 2e3 })
              ]) : Bs = new Ue([
                fo,
                new pr(k0, { delay: 2e3 }),
                new pr(Ls, { delay: 5e3 })
              ]), new vt(new Rs(new Xn(Jn(Qe), Bs, Ls)), m, {
                ttl: 18e5,
                timeline: o.timeline,
                useTLS: o.useTLS
              });
            }, Ai = gr, $t = function() {
              var f = this;
              f.timeline.info(f.buildTimelineMessage({
                transport: f.name + (f.options.useTLS ? "s" : "")
              })), f.hooks.isInitialized() ? f.changeState("initialized") : f.hooks.file ? (f.changeState("initializing"), p.load(f.hooks.file, { useTLS: f.options.useTLS }, function(o, l) {
                f.hooks.isInitialized() ? (f.changeState("initialized"), l(!0)) : (o && f.onError(o), f.onClose(), l(!1));
              })) : f.onClose();
            }, Ms = {
              getRequest: function(f) {
                var o = new window.XDomainRequest();
                return o.ontimeout = function() {
                  f.emit("error", new y()), f.close();
                }, o.onerror = function(l) {
                  f.emit("error", l), f.close();
                }, o.onprogress = function() {
                  o.responseText && o.responseText.length > 0 && f.onChunk(200, o.responseText);
                }, o.onload = function() {
                  o.responseText && o.responseText.length > 0 && f.onChunk(200, o.responseText), f.emit("finished", 200), f.close();
                }, o;
              },
              abortRequest: function(f) {
                f.ontimeout = f.onerror = f.onprogress = f.onload = null, f.abort();
              }
            }, jr = Ms;
            const ee = 256 * 1024;
            class Ti extends ft {
              constructor(o, l, m) {
                super(), this.hooks = o, this.method = l, this.url = m;
              }
              start(o) {
                this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = () => {
                  this.close();
                }, ue.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(o);
              }
              close() {
                this.unloader && (ue.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null);
              }
              onChunk(o, l) {
                for (; ; ) {
                  var m = this.advanceBuffer(l);
                  if (m)
                    this.emit("chunk", { status: o, data: m });
                  else
                    break;
                }
                this.isBufferTooLong(l) && this.emit("buffer_too_long");
              }
              advanceBuffer(o) {
                var l = o.slice(this.position), m = l.indexOf(`
`);
                return m !== -1 ? (this.position += m + 1, l.slice(0, m)) : null;
              }
              isBufferTooLong(o) {
                return this.position === o.length && o.length > ee;
              }
            }
            var Ye;
            (function(f) {
              f[f.CONNECTING = 0] = "CONNECTING", f[f.OPEN = 1] = "OPEN", f[f.CLOSED = 3] = "CLOSED";
            })(Ye || (Ye = {}));
            var me = Ye, br = 1;
            class En {
              constructor(o, l) {
                this.hooks = o, this.session = se(1e3) + "/" + ye(8), this.location = Ur(l), this.readyState = me.CONNECTING, this.openStream();
              }
              send(o) {
                return this.sendRaw(JSON.stringify([o]));
              }
              ping() {
                this.hooks.sendHeartbeat(this);
              }
              close(o, l) {
                this.onClose(o, l, !0);
              }
              sendRaw(o) {
                if (this.readyState === me.OPEN)
                  try {
                    return ue.createSocketRequest("POST", U(Hr(this.location, this.session))).start(o), !0;
                  } catch {
                    return !1;
                  }
                else
                  return !1;
              }
              reconnect() {
                this.closeStream(), this.openStream();
              }
              onClose(o, l, m) {
                this.closeStream(), this.readyState = me.CLOSED, this.onclose && this.onclose({
                  code: o,
                  reason: l,
                  wasClean: m
                });
              }
              onChunk(o) {
                if (o.status === 200) {
                  this.readyState === me.OPEN && this.onActivity();
                  var l, m = o.data.slice(0, 1);
                  switch (m) {
                    case "o":
                      l = JSON.parse(o.data.slice(1) || "{}"), this.onOpen(l);
                      break;
                    case "a":
                      l = JSON.parse(o.data.slice(1) || "[]");
                      for (var x = 0; x < l.length; x++)
                        this.onEvent(l[x]);
                      break;
                    case "m":
                      l = JSON.parse(o.data.slice(1) || "null"), this.onEvent(l);
                      break;
                    case "h":
                      this.hooks.onHeartbeat(this);
                      break;
                    case "c":
                      l = JSON.parse(o.data.slice(1) || "[]"), this.onClose(l[0], l[1], !0);
                      break;
                  }
                }
              }
              onOpen(o) {
                this.readyState === me.CONNECTING ? (o && o.hostname && (this.location.base = K(this.location.base, o.hostname)), this.readyState = me.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0);
              }
              onEvent(o) {
                this.readyState === me.OPEN && this.onmessage && this.onmessage({ data: o });
              }
              onActivity() {
                this.onactivity && this.onactivity();
              }
              onError(o) {
                this.onerror && this.onerror(o);
              }
              openStream() {
                this.stream = ue.createSocketRequest("POST", U(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (o) => {
                  this.onChunk(o);
                }), this.stream.bind("finished", (o) => {
                  this.hooks.onFinished(this, o);
                }), this.stream.bind("buffer_too_long", () => {
                  this.reconnect();
                });
                try {
                  this.stream.start();
                } catch (o) {
                  $e.defer(() => {
                    this.onError(o), this.onClose(1006, "Could not start streaming", !1);
                  });
                }
              }
              closeStream() {
                this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null);
              }
            }
            function Ur(f) {
              var o = /([^\?]*)\/*(\??.*)/.exec(f);
              return {
                base: o[1],
                queryString: o[2]
              };
            }
            function Hr(f, o) {
              return f.base + "/" + o + "/xhr_send";
            }
            function U(f) {
              var o = f.indexOf("?") === -1 ? "?" : "&";
              return f + o + "t=" + +/* @__PURE__ */ new Date() + "&n=" + br++;
            }
            function K(f, o) {
              var l = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(f);
              return l[1] + o + l[3];
            }
            function se(f) {
              return ue.randomInt(f);
            }
            function ye(f) {
              for (var o = [], l = 0; l < f; l++)
                o.push(se(32).toString(32));
              return o.join("");
            }
            var ct = En, Jt = {
              getReceiveURL: function(f, o) {
                return f.base + "/" + o + "/xhr_streaming" + f.queryString;
              },
              onHeartbeat: function(f) {
                f.sendRaw("[]");
              },
              sendHeartbeat: function(f) {
                f.sendRaw("[]");
              },
              onFinished: function(f, o) {
                f.onClose(1006, "Connection interrupted (" + o + ")", !1);
              }
            }, Fs = Jt, Ns = {
              getReceiveURL: function(f, o) {
                return f.base + "/" + o + "/xhr" + f.queryString;
              },
              onHeartbeat: function() {
              },
              sendHeartbeat: function(f) {
                f.sendRaw("[]");
              },
              onFinished: function(f, o) {
                o === 200 ? f.reconnect() : f.onClose(1006, "Connection interrupted (" + o + ")", !1);
              }
            }, Hl = Ns, $l = {
              getRequest: function(f) {
                var o = ue.getXHRAPI(), l = new o();
                return l.onreadystatechange = l.onprogress = function() {
                  switch (l.readyState) {
                    case 3:
                      l.responseText && l.responseText.length > 0 && f.onChunk(l.status, l.responseText);
                      break;
                    case 4:
                      l.responseText && l.responseText.length > 0 && f.onChunk(l.status, l.responseText), f.emit("finished", l.status), f.close();
                      break;
                  }
                }, l;
              },
              abortRequest: function(f) {
                f.onreadystatechange = null, f.abort();
              }
            }, Wl = $l, Vl = {
              createStreamingSocket(f) {
                return this.createSocket(Fs, f);
              },
              createPollingSocket(f) {
                return this.createSocket(Hl, f);
              },
              createSocket(f, o) {
                return new ct(f, o);
              },
              createXHR(f, o) {
                return this.createRequest(Wl, f, o);
              },
              createRequest(f, o, l) {
                return new Ti(f, o, l);
              }
            }, oo = Vl;
            oo.createXDR = function(f, o) {
              return this.createRequest(jr, f, o);
            };
            var Gl = oo, Yl = {
              nextAuthCallbackID: 1,
              auth_callbacks: {},
              ScriptReceivers: u,
              DependenciesReceivers: h,
              getDefaultStrategy: Ai,
              Transports: We,
              transportConnectionInitializer: $t,
              HTTPFactory: Gl,
              TimelineTransport: Gt,
              getXHRAPI() {
                return window.XMLHttpRequest;
              },
              getWebSocketAPI() {
                return window.WebSocket || window.MozWebSocket;
              },
              setup(f) {
                window.Pusher = f;
                var o = () => {
                  this.onDocumentBody(f.ready);
                };
                window.JSON ? o() : p.load("json2", {}, o);
              },
              getDocument() {
                return document;
              },
              getProtocol() {
                return this.getDocument().location.protocol;
              },
              getAuthorizers() {
                return { ajax: te, jsonp: ut };
              },
              onDocumentBody(f) {
                document.body ? f() : setTimeout(() => {
                  this.onDocumentBody(f);
                }, 0);
              },
              createJSONPRequest(f, o) {
                return new wt(f, o);
              },
              createScriptRequest(f) {
                return new Rt(f);
              },
              getLocalStorage() {
                try {
                  return window.localStorage;
                } catch {
                  return;
                }
              },
              createXHR() {
                return this.getXHRAPI() ? this.createXMLHttpRequest() : this.createMicrosoftXHR();
              },
              createXMLHttpRequest() {
                var f = this.getXHRAPI();
                return new f();
              },
              createMicrosoftXHR() {
                return new ActiveXObject("Microsoft.XMLHTTP");
              },
              getNetwork() {
                return Ft;
              },
              createWebSocket(f) {
                var o = this.getWebSocketAPI();
                return new o(f);
              },
              createSocketRequest(f, o) {
                if (this.isXHRSupported())
                  return this.HTTPFactory.createXHR(f, o);
                if (this.isXDRSupported(o.indexOf("https:") === 0))
                  return this.HTTPFactory.createXDR(f, o);
                throw "Cross-origin HTTP requests are not supported";
              },
              isXHRSupported() {
                var f = this.getXHRAPI();
                return !!f && new f().withCredentials !== void 0;
              },
              isXDRSupported(f) {
                var o = f ? "https:" : "http:", l = this.getProtocol();
                return !!window.XDomainRequest && l === o;
              },
              addUnloadListener(f) {
                window.addEventListener !== void 0 ? window.addEventListener("unload", f, !1) : window.attachEvent !== void 0 && window.attachEvent("onunload", f);
              },
              removeUnloadListener(f) {
                window.addEventListener !== void 0 ? window.removeEventListener("unload", f, !1) : window.detachEvent !== void 0 && window.detachEvent("onunload", f);
              },
              randomInt(f) {
                return Math.floor(function() {
                  return (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32);
                }() * f);
              }
            }, ue = Yl, Is;
            (function(f) {
              f[f.ERROR = 3] = "ERROR", f[f.INFO = 6] = "INFO", f[f.DEBUG = 7] = "DEBUG";
            })(Is || (Is = {}));
            var Di = Is;
            class Kl {
              constructor(o, l, m) {
                this.key = o, this.session = l, this.events = [], this.options = m || {}, this.sent = 0, this.uniqueID = 0;
              }
              log(o, l) {
                o <= this.options.level && (this.events.push(De({}, l, { timestamp: $e.now() })), this.options.limit && this.events.length > this.options.limit && this.events.shift());
              }
              error(o) {
                this.log(Di.ERROR, o);
              }
              info(o) {
                this.log(Di.INFO, o);
              }
              debug(o) {
                this.log(Di.DEBUG, o);
              }
              isEmpty() {
                return this.events.length === 0;
              }
              send(o, l) {
                var m = De({
                  session: this.session,
                  bundle: this.sent + 1,
                  key: this.key,
                  lib: "js",
                  version: this.options.version,
                  cluster: this.options.cluster,
                  features: this.options.features,
                  timeline: this.events
                }, this.options.params);
                return this.events = [], o(m, (x, F) => {
                  x || this.sent++, l && l(x, F);
                }), !0;
              }
              generateUniqueID() {
                return this.uniqueID++, this.uniqueID;
              }
            }
            class Zl {
              constructor(o, l, m, x) {
                this.name = o, this.priority = l, this.transport = m, this.options = x || {};
              }
              isSupported() {
                return this.transport.isSupported({
                  useTLS: this.options.useTLS
                });
              }
              connect(o, l) {
                if (this.isSupported()) {
                  if (this.priority < o)
                    return ao(new S(), l);
                } else return ao(new P(), l);
                var m = !1, x = this.transport.createConnection(this.name, this.priority, this.options.key, this.options), F = null, q = function() {
                  x.unbind("initialized", q), x.connect();
                }, Y = function() {
                  F = V.createHandshake(x, function(Qe) {
                    m = !0, Ee(), l(null, Qe);
                  });
                }, re = function(Qe) {
                  Ee(), l(Qe);
                }, xe = function() {
                  Ee();
                  var Qe;
                  Qe = Re(x), l(new D(Qe));
                }, Ee = function() {
                  x.unbind("initialized", q), x.unbind("open", Y), x.unbind("error", re), x.unbind("closed", xe);
                };
                return x.bind("initialized", q), x.bind("open", Y), x.bind("error", re), x.bind("closed", xe), x.initialize(), {
                  abort: () => {
                    m || (Ee(), F ? F.close() : x.close());
                  },
                  forceMinPriority: (Qe) => {
                    m || this.priority < Qe && (F ? F.close() : x.close());
                  }
                };
              }
            }
            function ao(f, o) {
              return $e.defer(function() {
                o(f);
              }), {
                abort: function() {
                },
                forceMinPriority: function() {
                }
              };
            }
            const { Transports: Xl } = ue;
            var Jl = function(f, o, l, m, x, F) {
              var q = Xl[l];
              if (!q)
                throw new T(l);
              var Y = (!f.enabledTransports || Rn(f.enabledTransports, o) !== -1) && (!f.disabledTransports || Rn(f.disabledTransports, o) === -1), re;
              return Y ? (x = Object.assign({ ignoreNullOrigin: f.ignoreNullOrigin }, x), re = new Zl(o, m, F ? F.getAssistant(q) : q, x)) : re = Ql, re;
            }, Ql = {
              isSupported: function() {
                return !1;
              },
              connect: function(f, o) {
                var l = $e.defer(function() {
                  o(new P());
                });
                return {
                  abort: function() {
                    l.ensureAborted();
                  },
                  forceMinPriority: function() {
                  }
                };
              }
            };
            function e0(f) {
              if (f == null)
                throw "You must pass an options object";
              if (f.cluster == null)
                throw "Options object must provide a cluster";
              "disableStats" in f && ce.warn("The disableStats option is deprecated in favor of enableStats");
            }
            const t0 = (f, o) => {
              var l = "socket_id=" + encodeURIComponent(f.socketId);
              for (var m in o.params)
                l += "&" + encodeURIComponent(m) + "=" + encodeURIComponent(o.params[m]);
              if (o.paramsProvider != null) {
                let x = o.paramsProvider();
                for (var m in x)
                  l += "&" + encodeURIComponent(m) + "=" + encodeURIComponent(x[m]);
              }
              return l;
            };
            var n0 = (f) => {
              if (typeof ue.getAuthorizers()[f.transport] > "u")
                throw `'${f.transport}' is not a recognized auth transport`;
              return (o, l) => {
                const m = t0(o, f);
                ue.getAuthorizers()[f.transport](ue, m, f, w.UserAuthentication, l);
              };
            };
            const r0 = (f, o) => {
              var l = "socket_id=" + encodeURIComponent(f.socketId);
              l += "&channel_name=" + encodeURIComponent(f.channelName);
              for (var m in o.params)
                l += "&" + encodeURIComponent(m) + "=" + encodeURIComponent(o.params[m]);
              if (o.paramsProvider != null) {
                let x = o.paramsProvider();
                for (var m in x)
                  l += "&" + encodeURIComponent(m) + "=" + encodeURIComponent(x[m]);
              }
              return l;
            };
            var i0 = (f) => {
              if (typeof ue.getAuthorizers()[f.transport] > "u")
                throw `'${f.transport}' is not a recognized auth transport`;
              return (o, l) => {
                const m = r0(o, f);
                ue.getAuthorizers()[f.transport](ue, m, f, w.ChannelAuthorization, l);
              };
            };
            const s0 = (f, o, l) => {
              const m = {
                authTransport: o.transport,
                authEndpoint: o.endpoint,
                auth: {
                  params: o.params,
                  headers: o.headers
                }
              };
              return (x, F) => {
                const q = f.channel(x.channelName);
                l(q, m).authorize(x.socketId, F);
              };
            };
            function u0(f, o) {
              let l = {
                activityTimeout: f.activityTimeout || c.activityTimeout,
                cluster: f.cluster,
                httpPath: f.httpPath || c.httpPath,
                httpPort: f.httpPort || c.httpPort,
                httpsPort: f.httpsPort || c.httpsPort,
                pongTimeout: f.pongTimeout || c.pongTimeout,
                statsHost: f.statsHost || c.stats_host,
                unavailableTimeout: f.unavailableTimeout || c.unavailableTimeout,
                wsPath: f.wsPath || c.wsPath,
                wsPort: f.wsPort || c.wsPort,
                wssPort: f.wssPort || c.wssPort,
                enableStats: d0(f),
                httpHost: o0(f),
                useTLS: l0(f),
                wsHost: a0(f),
                userAuthenticator: f0(f),
                channelAuthorizer: p0(f, o)
              };
              return "disabledTransports" in f && (l.disabledTransports = f.disabledTransports), "enabledTransports" in f && (l.enabledTransports = f.enabledTransports), "ignoreNullOrigin" in f && (l.ignoreNullOrigin = f.ignoreNullOrigin), "timelineParams" in f && (l.timelineParams = f.timelineParams), "nacl" in f && (l.nacl = f.nacl), l;
            }
            function o0(f) {
              return f.httpHost ? f.httpHost : f.cluster ? `sockjs-${f.cluster}.pusher.com` : c.httpHost;
            }
            function a0(f) {
              return f.wsHost ? f.wsHost : c0(f.cluster);
            }
            function c0(f) {
              return `ws-${f}.pusher.com`;
            }
            function l0(f) {
              return ue.getProtocol() === "https:" ? !0 : f.forceTLS !== !1;
            }
            function d0(f) {
              return "enableStats" in f ? f.enableStats : "disableStats" in f ? !f.disableStats : !1;
            }
            function f0(f) {
              const o = Object.assign(Object.assign({}, c.userAuthentication), f.userAuthentication);
              return "customHandler" in o && o.customHandler != null ? o.customHandler : n0(o);
            }
            function h0(f, o) {
              let l;
              return "channelAuthorization" in f ? l = Object.assign(Object.assign({}, c.channelAuthorization), f.channelAuthorization) : (l = {
                transport: f.authTransport || c.authTransport,
                endpoint: f.authEndpoint || c.authEndpoint
              }, "auth" in f && ("params" in f.auth && (l.params = f.auth.params), "headers" in f.auth && (l.headers = f.auth.headers)), "authorizer" in f && (l.customHandler = s0(o, l, f.authorizer))), l;
            }
            function p0(f, o) {
              const l = h0(f, o);
              return "customHandler" in l && l.customHandler != null ? l.customHandler : i0(l);
            }
            class g0 extends ft {
              constructor(o) {
                super(function(l, m) {
                  ce.debug(`No callbacks on watchlist events for ${l}`);
                }), this.pusher = o, this.bindWatchlistInternalEvent();
              }
              handleEvent(o) {
                o.data.events.forEach((l) => {
                  this.emit(l.name, l);
                });
              }
              bindWatchlistInternalEvent() {
                this.pusher.connection.bind("message", (o) => {
                  var l = o.event;
                  l === "pusher_internal:watchlist_events" && this.handleEvent(o);
                });
              }
            }
            function b0() {
              let f, o;
              return { promise: new Promise((m, x) => {
                f = m, o = x;
              }), resolve: f, reject: o };
            }
            var m0 = b0;
            class _0 extends ft {
              constructor(o) {
                super(function(l, m) {
                  ce.debug("No callbacks on user for " + l);
                }), this.signin_requested = !1, this.user_data = null, this.serverToUserChannel = null, this.signinDonePromise = null, this._signinDoneResolve = null, this._onAuthorize = (l, m) => {
                  if (l) {
                    ce.warn(`Error during signin: ${l}`), this._cleanup();
                    return;
                  }
                  this.pusher.send_event("pusher:signin", {
                    auth: m.auth,
                    user_data: m.user_data
                  });
                }, this.pusher = o, this.pusher.connection.bind("state_change", ({ previous: l, current: m }) => {
                  l !== "connected" && m === "connected" && this._signin(), l === "connected" && m !== "connected" && (this._cleanup(), this._newSigninPromiseIfNeeded());
                }), this.watchlist = new g0(o), this.pusher.connection.bind("message", (l) => {
                  var m = l.event;
                  m === "pusher:signin_success" && this._onSigninSuccess(l.data), this.serverToUserChannel && this.serverToUserChannel.name === l.channel && this.serverToUserChannel.handleEvent(l);
                });
              }
              signin() {
                this.signin_requested || (this.signin_requested = !0, this._signin());
              }
              _signin() {
                this.signin_requested && (this._newSigninPromiseIfNeeded(), this.pusher.connection.state === "connected" && this.pusher.config.userAuthenticator({
                  socketId: this.pusher.connection.socket_id
                }, this._onAuthorize));
              }
              _onSigninSuccess(o) {
                try {
                  this.user_data = JSON.parse(o.user_data);
                } catch {
                  ce.error(`Failed parsing user data after signin: ${o.user_data}`), this._cleanup();
                  return;
                }
                if (typeof this.user_data.id != "string" || this.user_data.id === "") {
                  ce.error(`user_data doesn't contain an id. user_data: ${this.user_data}`), this._cleanup();
                  return;
                }
                this._signinDoneResolve(), this._subscribeChannels();
              }
              _subscribeChannels() {
                const o = (l) => {
                  l.subscriptionPending && l.subscriptionCancelled ? l.reinstateSubscription() : !l.subscriptionPending && this.pusher.connection.state === "connected" && l.subscribe();
                };
                this.serverToUserChannel = new Lr(`#server-to-user-${this.user_data.id}`, this.pusher), this.serverToUserChannel.bind_global((l, m) => {
                  l.indexOf("pusher_internal:") === 0 || l.indexOf("pusher:") === 0 || this.emit(l, m);
                }), o(this.serverToUserChannel);
              }
              _cleanup() {
                this.user_data = null, this.serverToUserChannel && (this.serverToUserChannel.unbind_all(), this.serverToUserChannel.disconnect(), this.serverToUserChannel = null), this.signin_requested && this._signinDoneResolve();
              }
              _newSigninPromiseIfNeeded() {
                if (!this.signin_requested || this.signinDonePromise && !this.signinDonePromise.done)
                  return;
                const { promise: o, resolve: l } = m0();
                o.done = !1;
                const m = () => {
                  o.done = !0;
                };
                o.then(m).catch(m), this.signinDonePromise = o, this._signinDoneResolve = l;
              }
            }
            class ht {
              static ready() {
                ht.isReady = !0;
                for (var o = 0, l = ht.instances.length; o < l; o++)
                  ht.instances[o].connect();
              }
              static getClientFeatures() {
                return Ot(Z({ ws: ue.Transports.ws }, function(o) {
                  return o.isSupported({});
                }));
              }
              constructor(o, l) {
                v0(o), e0(l), this.key = o, this.config = u0(l, this), this.channels = V.createChannels(), this.global_emitter = new ft(), this.sessionID = ue.randomInt(1e9), this.timeline = new Kl(this.key, this.sessionID, {
                  cluster: this.config.cluster,
                  features: ht.getClientFeatures(),
                  params: this.config.timelineParams || {},
                  limit: 50,
                  level: Di.INFO,
                  version: c.VERSION
                }), this.config.enableStats && (this.timelineSender = V.createTimelineSender(this.timeline, {
                  host: this.config.statsHost,
                  path: "/timeline/v2/" + ue.TimelineTransport.name
                }));
                var m = (x) => ue.getDefaultStrategy(this.config, x, Jl);
                this.connection = V.createConnectionManager(this.key, {
                  getStrategy: m,
                  timeline: this.timeline,
                  activityTimeout: this.config.activityTimeout,
                  pongTimeout: this.config.pongTimeout,
                  unavailableTimeout: this.config.unavailableTimeout,
                  useTLS: !!this.config.useTLS
                }), this.connection.bind("connected", () => {
                  this.subscribeAll(), this.timelineSender && this.timelineSender.send(this.connection.isUsingTLS());
                }), this.connection.bind("message", (x) => {
                  var F = x.event, q = F.indexOf("pusher_internal:") === 0;
                  if (x.channel) {
                    var Y = this.channel(x.channel);
                    Y && Y.handleEvent(x);
                  }
                  q || this.global_emitter.emit(x.event, x.data);
                }), this.connection.bind("connecting", () => {
                  this.channels.disconnect();
                }), this.connection.bind("disconnected", () => {
                  this.channels.disconnect();
                }), this.connection.bind("error", (x) => {
                  ce.warn(x);
                }), ht.instances.push(this), this.timeline.info({ instances: ht.instances.length }), this.user = new _0(this), ht.isReady && this.connect();
              }
              channel(o) {
                return this.channels.find(o);
              }
              allChannels() {
                return this.channels.all();
              }
              connect() {
                if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
                  var o = this.connection.isUsingTLS(), l = this.timelineSender;
                  this.timelineSenderTimer = new zt(6e4, function() {
                    l.send(o);
                  });
                }
              }
              disconnect() {
                this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null);
              }
              bind(o, l, m) {
                return this.global_emitter.bind(o, l, m), this;
              }
              unbind(o, l, m) {
                return this.global_emitter.unbind(o, l, m), this;
              }
              bind_global(o) {
                return this.global_emitter.bind_global(o), this;
              }
              unbind_global(o) {
                return this.global_emitter.unbind_global(o), this;
              }
              unbind_all(o) {
                return this.global_emitter.unbind_all(), this;
              }
              subscribeAll() {
                var o;
                for (o in this.channels.channels)
                  this.channels.channels.hasOwnProperty(o) && this.subscribe(o);
              }
              subscribe(o) {
                var l = this.channels.add(o, this);
                return l.subscriptionPending && l.subscriptionCancelled ? l.reinstateSubscription() : !l.subscriptionPending && this.connection.state === "connected" && l.subscribe(), l;
              }
              unsubscribe(o) {
                var l = this.channels.find(o);
                l && l.subscriptionPending ? l.cancelSubscription() : (l = this.channels.remove(o), l && l.subscribed && l.unsubscribe());
              }
              send_event(o, l, m) {
                return this.connection.send_event(o, l, m);
              }
              shouldUseTLS() {
                return this.config.useTLS;
              }
              signin() {
                this.user.signin();
              }
            }
            ht.instances = [], ht.isReady = !1, ht.logToConsole = !1, ht.Runtime = ue, ht.ScriptReceivers = ue.ScriptReceivers, ht.DependenciesReceivers = ue.DependenciesReceivers, ht.auth_callbacks = ue.auth_callbacks;
            var Ps = r.default = ht;
            function v0(f) {
              if (f == null)
                throw "You must pass your app key when you instantiate Pusher.";
            }
            ue.setup(ht);
          }
          /******/
        ])
      );
    });
  }(Ks)), Ks.exports;
}
var $h = Hh();
const Wh = /* @__PURE__ */ Gc($h);
window.Pusher = Wh;
const Ko = "fbt_session_token", Zo = "session_token", Ar = "fbt_chat_id", Tr = "chat_id";
let wu = null;
const xs = () => {
  const e = localStorage.getItem(Ko);
  if (e)
    return e;
  const t = localStorage.getItem(Zo);
  return t ? (localStorage.setItem(Ko, t), localStorage.removeItem(Zo), t) : null;
}, Vh = () => {
  const e = localStorage.getItem(Ar);
  if (e)
    return e;
  const t = localStorage.getItem(Tr);
  return t ? (localStorage.setItem(Ar, t), localStorage.removeItem(Tr), t) : null;
}, Gh = () => {
  localStorage.removeItem(Ar), localStorage.removeItem(Tr);
}, Yc = (e) => {
  if (e instanceof ku)
    return e.status;
  if (e && typeof e == "object") {
    const t = e.response?.status ?? e.status;
    return typeof t == "number" ? t : null;
  }
  return null;
}, Kc = () => {
  wu ? wu() : (Gh(), Xc(), sl()), Q.update((e) => ({
    ...e,
    error: "Your previous conversation expired. A new chat has been started."
  }));
};
class ku extends Error {
  status;
  constructor(t, n) {
    super(n), this.name = "HttpStatusError", this.status = t;
  }
}
const Zc = {
  messages: [],
  isLoading: !1,
  chat_id: null,
  session_token: null,
  error: null,
  hasMore: !0,
  nextCursor: null,
  // Escalation state
  escalationStatus: "none",
  currentAgent: null,
  showEscalationButton: !1,
  escalationRequestId: null,
  escalationTriggerType: null,
  agentTyping: !1,
  escalationSocketConnected: !1
}, Q = Vd(Zc), Xc = () => {
  const e = xs(), t = Vh();
  Q.set({
    ...Zc,
    chat_id: t,
    session_token: e
  });
}, Yh = (e) => {
  wu = e;
}, Kh = async (e, t) => {
  const n = t.bot_id;
  if (!n)
    throw new Error("Bot ID is required");
  Q.update((i) => {
    const s = !["pending", "unresolved"].includes(i.escalationStatus), u = [
      ...i.messages,
      {
        role: "visitor",
        content: e,
        timestamp: /* @__PURE__ */ new Date()
      }
    ];
    return s && u.push({
      role: "ai",
      content: "",
      timestamp: /* @__PURE__ */ new Date(),
      isStreaming: !0,
      hasReceivedFirstEvent: !1
    }), {
      ...i,
      messages: u,
      isLoading: !0
    };
  });
  let r = "";
  try {
    const i = gn(Q).session_token || xs();
    if (!i)
      throw new Error("Session token is missing. Please refresh the widget.");
    const s = {
      bot_id: n,
      prompt: e,
      stream: !0,
      chat_id: gn(Q).chat_id,
      cache: !0,
      page_url: window.location.href,
      session_token: i
    }, a = await fetch("https://staging.fluentbot.ai/api/chat/widget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream, application/json",
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(s)
    });
    if (!a.ok) {
      if ((a.headers.get("content-type") || "").includes("application/json")) {
        const v = await a.json();
        throw new ku(
          a.status,
          v.message || v.error || `Request failed: ${a.status}`
        );
      }
      throw new ku(a.status, `Request failed: ${a.status} ${a.statusText}`);
    }
    if ((a.headers.get("content-type") || "").includes("application/json")) {
      const w = await a.json(), v = w.escalation_status, E = w.escalation_connection, y = (v === "pending" || v === "unresolved") && E !== "cancelled", S = w.chat_id || gn(Q).chat_id;
      return Q.update((D) => {
        const A = [...D.messages];
        if (y) {
          const T = [...A].map((P, j) => ({ msg: P, index: j })).reverse().find(({ msg: P }) => P.role === "visitor")?.index;
          T !== void 0 && (A[T] = {
            ...A[T],
            id: w.message_id || A[T].id,
            escalationMessageStatus: "sent"
          });
        }
        return {
          ...D,
          isLoading: !1,
          escalationStatus: v || D.escalationStatus,
          messages: y ? A.filter((T) => !T.isStreaming) : A,
          // Update chat_id if provided
          chat_id: S
        };
      }), y && S && il(S), w;
    }
    if (!a.body)
      throw new Error("Response body is null");
    const d = a.body.getReader(), h = new TextDecoder();
    let p = "", b = "", _ = [];
    const g = () => {
      if (!b && _.length === 0) return;
      const w = _.join(`
`), v = b || "message";
      if (_.length > 0 && Q.update((E) => ({
        ...E,
        messages: E.messages.map(
          (y) => y.isStreaming ? { ...y, hasReceivedFirstEvent: !0 } : y
        )
      })), v === "message")
        w && w.length > 0 && (r += w, Q.update((E) => ({
          ...E,
          messages: E.messages.map((y) => y.isStreaming ? { ...y, content: r } : y)
        })));
      else if (v === "sources")
        try {
          const E = JSON.parse(w);
          Array.isArray(E) && Q.update((y) => ({
            ...y,
            messages: y.messages.map((S) => S.isStreaming ? { ...S, sources: E } : S)
          }));
        } catch {
        }
      else if (v === "chat_id") {
        const E = w.trim();
        localStorage.setItem(Ar, E), localStorage.removeItem(Tr), Q.update((y) => ({
          ...y,
          chat_id: E
        }));
      } else if (v === "response_id")
        try {
          const E = parseInt(w.trim(), 10);
          isNaN(E) || Q.update((y) => ({
            ...y,
            messages: y.messages.map((S) => S.isStreaming ? { ...S, id: E } : S)
          }));
        } catch {
        }
      else if (v !== "token_usage") {
        if (v === "show_escalation_button")
          try {
            const E = JSON.parse(w);
            Xo(E.trigger_type || "keyword"), Q.update((y) => ({
              ...y,
              messages: y.messages.map((S) => S.isStreaming ? { ...S, showEscalationButton: !0 } : S)
            }));
          } catch {
            Xo("keyword"), Q.update((E) => ({
              ...E,
              messages: E.messages.map((y) => y.isStreaming ? { ...y, showEscalationButton: !0 } : y)
            }));
          }
        else if (v === "escalation_status")
          try {
            const E = JSON.parse(w);
            tp(E.status, E.escalation_id);
          } catch {
          }
        else if (v === "error")
          try {
            const y = JSON.parse(w).message || "An error occurred while processing your request.";
            Q.update((S) => ({
              ...S,
              error: y,
              isLoading: !1,
              // Remove the streaming placeholder message
              messages: S.messages.filter((D) => !D.isStreaming)
            }));
          } catch {
            Q.update((E) => ({
              ...E,
              error: "An error occurred while processing your request.",
              isLoading: !1,
              messages: E.messages.filter((y) => !y.isStreaming)
            }));
          }
      }
      b = "", _ = [];
    };
    for (; ; ) {
      const { value: w, done: v } = await d.read();
      if (v) break;
      p += h.decode(w, { stream: !0 });
      const E = p.split(/\r?\n/);
      p = E.pop() ?? "";
      for (const y of E)
        if (y.startsWith("event:"))
          g(), b = y.slice(6).trim();
        else if (y.startsWith("data:")) {
          const S = y.slice(5);
          _.push(S.startsWith(" ") ? S.slice(1) : S);
        } else y.trim() === "" && g();
    }
    if (p.length > 0) {
      const w = p.trimEnd();
      if (w) {
        const v = w.split(/\r?\n/);
        for (const E of v)
          if (E.startsWith("event:"))
            g(), b = E.slice(6).trim();
          else if (E.startsWith("data:")) {
            const y = E.slice(5);
            _.push(y.startsWith(" ") ? y.slice(1) : y);
          }
      }
    }
    g(), Q.update((w) => {
      const v = w.messages.find((y) => y.isStreaming);
      if (!v)
        return { ...w, isLoading: !1 };
      const E = {
        id: v.id,
        role: "ai",
        content: r,
        timestamp: /* @__PURE__ */ new Date(),
        sources: v.sources || void 0,
        showEscalationButton: v.showEscalationButton || !1
      };
      return {
        ...w,
        messages: w.messages.map((y) => y.isStreaming ? E : y),
        isLoading: !1
      };
    });
  } catch (i) {
    if (console.error("Error sending message:", i), Yc(i) === 404 && gn(Q).chat_id)
      throw Kc(), i;
    let s = "An error occurred while sending your message.";
    throw i instanceof Error && (s = i.message), Q.update((u) => ({
      ...u,
      isLoading: !1,
      error: s,
      messages: u.messages.filter((a) => !a.isStreaming)
    })), i;
  }
}, Jc = async (e, t, n = 20, r = null) => {
  try {
    const i = { per_page: n };
    r != null && (i.cursor = r);
    const s = await ur.get(`/api/bots/${e}/chats/${t}/messages`, { params: i }), u = s.data.data, a = s.data?.next_cursor ?? null, c = u.map((d) => ({
      ...d,
      agentInfo: d.agent ?? null,
      showEscalationButton: d.show_escalation_button ?? !1,
      escalationMessageStatus: d.role === "visitor" ? d.read_at ? "read" : d.delivered_at ? "delivered" : void 0 : void 0
    }));
    Q.update((d) => ({
      ...d,
      messages: r ? [...c, ...d.messages] : c,
      hasMore: !!a,
      nextCursor: a,
      chat_id: t
    })), localStorage.setItem(Ar, t), localStorage.removeItem(Tr), Zh(c);
  } catch (i) {
    if (console.error("Error loading chat history:", i), Yc(i) === 404) {
      Kc();
      return;
    }
    Q.update((s) => ({
      ...s,
      error: "Failed to load chat history"
    }));
  }
}, Zh = (e) => {
  if (!(!Array.isArray(e) || e.length === 0)) {
    rl();
    for (const t of e) {
      if (t.role !== "agent" || !t.id)
        continue;
      const n = Number(t.id);
      !Number.isFinite(n) || n <= 0 || (t.delivered_at || el(n), t.read_at || nl(n));
    }
  }
};
let pt = null, dn = null, Ui = null, Eu = null, Qc = null, Zs = !1, Hi = null;
const Qr = /* @__PURE__ */ new Set();
let ts = !1;
const Ni = (e) => {
  const t = "Connection established. You can now send messages to a human agent.";
  Q.update((n) => {
    const r = n.escalationSocketConnected ? n : {
      ...n,
      escalationSocketConnected: !0
    };
    if (Hi === e)
      return r;
    const i = r.messages[r.messages.length - 1];
    return i && i.role === "ai" && i.content === t ? (Hi = e, r) : (Hi = e, {
      ...r,
      messages: [
        ...r.messages,
        {
          role: "ai",
          content: t,
          timestamp: /* @__PURE__ */ new Date()
        }
      ]
    });
  });
}, el = async (e) => {
  try {
    await ur.post(`/api/widget/messages/${e}/delivered`);
  } catch (t) {
    console.error("Failed to mark agent message as delivered:", t);
  }
}, Xh = async (e) => {
  try {
    await ur.post(`/api/widget/messages/${e}/read`);
  } catch (t) {
    console.error("Failed to mark agent message as read:", t);
  }
}, Jh = () => typeof document > "u" ? !0 : document.visibilityState === "visible" && document.hasFocus(), tl = () => {
  if (!Jh() || Qr.size === 0)
    return;
  const e = Array.from(Qr);
  Qr.clear();
  for (const t of e)
    Xh(t);
}, nl = (e) => {
  Qr.add(e), tl();
}, ns = () => {
  tl();
}, rl = () => {
  ts || typeof window > "u" || typeof document > "u" || (window.addEventListener("focus", ns), document.addEventListener("visibilitychange", ns), ts = !0);
}, Qh = () => {
  !ts || typeof window > "u" || typeof document > "u" || (window.removeEventListener("focus", ns), document.removeEventListener("visibilitychange", ns), ts = !1);
}, ep = async (e, t) => {
  try {
    Q.update((h) => ({
      ...h,
      isLoading: !0,
      escalationStatus: "pending"
    }));
    const n = gn(Q).session_token || xs();
    if (!n)
      throw new Error("Session token is missing. Please refresh the widget.");
    const i = (await ur.post("/api/widget/escalations", {
      bot_id: e,
      chat_id: t || void 0,
      session_token: n
    }))?.data || {}, s = i?.escalation || {}, u = i.escalation_id || s.id || null, a = i.chat_id || s.chat_id || null, c = i.status || s.status;
    a && (localStorage.setItem(Ar, a), localStorage.removeItem(Tr)), Q.update((h) => ({
      ...h,
      isLoading: !1,
      chat_id: a || h.chat_id,
      escalationRequestId: u,
      escalationStatus: c || "pending",
      showEscalationButton: !1,
      escalationSocketConnected: !1,
      messages: [
        ...h.messages,
        {
          role: "ai",
          content: "Connecting you to an agent... Please wait.",
          timestamp: /* @__PURE__ */ new Date()
        }
      ]
    }));
    const d = a || t || gn(Q).chat_id;
    d && il(d);
  } catch (n) {
    throw Q.update((r) => ({
      ...r,
      isLoading: !1,
      error: "Failed to request agent assistance. Please try again."
    })), n;
  }
}, il = (e) => {
  const t = `widget-chat.${e}`, r = (pt?.connector?.pusher?.connection?.connection?.transport?.socket || pt?.connector?.pusher?.connection?.transport?.socket)?.readyState;
  if (pt && Eu === t && (r === 0 || r === 1)) {
    Ni(t);
    return;
  }
  pt && sl();
  try {
    rl();
    const s = {
      key: "app_v7xTzGYzKVjvhk4m",
      cluster: "mt1",
      wsHost: "ws.fluentsocket.com",
      wsPort: parseInt("443", 10),
      wssPort: parseInt("443", 10),
      forceTLS: !0
    }, u = {
      broadcaster: "pusher",
      key: s.key,
      cluster: s.cluster,
      forceTLS: s.forceTLS
    };
    s.wsHost && (u.wsHost = s.wsHost, u.wsPort = s.wsPort, u.wssPort = s.wssPort, u.disableStats = !0, u.enabledTransports = ["ws", "wss"]), pt = new Uh(u);
    const a = t;
    dn = pt.channel(a), Eu = a, typeof dn?.subscribed == "function" && dn.subscribed(() => {
      Ni(a);
    });
    const c = `messages.${e}`;
    Ui = pt.channel(c), Qc = c, dn.listen(".message.visitor", (d) => {
      const h = Number(d?.message_id);
      h && Q.update((p) => ({
        ...p,
        messages: p.messages.map(
          (b) => b.role === "visitor" && b.id === h ? { ...b, escalationMessageStatus: b.escalationMessageStatus === "read" ? "read" : "delivered" } : b
        )
      }));
    }), dn.listen(".escalation.accepted", (d) => {
      Q.update((h) => ({
        ...h,
        escalationStatus: "unresolved",
        currentAgent: d.agent || null,
        messages: [
          ...h.messages,
          {
            role: "ai",
            content: `You are now connected to ${d.agent?.name || "an agent"}. You can send messages now.`,
            timestamp: /* @__PURE__ */ new Date()
          }
        ]
      }));
    }), dn.listen(".message.agent", (d) => {
      const h = {
        id: d.id || Date.now(),
        role: "agent",
        content: d.content,
        timestamp: new Date(d.timestamp || Date.now()),
        agentInfo: d.agent || gn(Q).currentAgent
      };
      Q.update((b) => ({
        ...b,
        messages: [...b.messages, h],
        agentTyping: !1
      }));
      const p = Number(d?.id);
      Number.isFinite(p) && p > 0 && (el(p), nl(p));
    }), Ui.listen(".message.status", (d) => {
      const h = Number(d?.message_id), p = d?.status;
      !h || p !== "delivered" && p !== "read" || Q.update((b) => ({
        ...b,
        messages: b.messages.map(
          (_) => _.role === "visitor" && _.id === h ? { ..._, escalationMessageStatus: p } : _
        )
      }));
    }), Ui.listen(".messages.bulk.status", (d) => {
      const h = d?.status;
      if (h !== "delivered" && h !== "read") return;
      const p = Array.isArray(d?.message_ids) ? d.message_ids.map((_) => Number(_)).filter((_) => Number.isFinite(_)) : [];
      if (p.length === 0) return;
      const b = new Set(p);
      Q.update((_) => ({
        ..._,
        messages: _.messages.map(
          (g) => g.role === "visitor" && g.id && b.has(Number(g.id)) ? { ...g, escalationMessageStatus: h } : g
        )
      }));
    }), dn.listen(".escalation.transferred", (d) => {
      Q.update((p) => ({
        ...p,
        currentAgent: d.new_agent || null
      }));
      const h = {
        role: "ai",
        content: `Chat transferred to ${d.new_agent?.name || "another agent"}${d.reason ? `: ${d.reason}` : ""}`,
        timestamp: /* @__PURE__ */ new Date()
      };
      Q.update((p) => ({
        ...p,
        messages: [...p.messages, h]
      }));
    }), dn.listen(".escalation.resolved", (d) => {
      Q.update((h) => ({
        ...h,
        escalationStatus: "resolved",
        currentAgent: null,
        agentTyping: !1,
        escalationSocketConnected: !1
      }));
    }), dn.listen(".agent.status.changed", (d) => {
      d.status === "typing" ? Q.update((h) => ({ ...h, agentTyping: !0 })) : d.status === "stopped_typing" && Q.update((h) => ({ ...h, agentTyping: !1 }));
    }), pt.connector.pusher.connection.bind("connected", () => {
      Ni(a);
    }), pt.connector.pusher.connection.state === "connected" && Ni(a), pt.connector.pusher.connection.bind("state_change", (d) => {
    }), pt.connector.pusher.connection.bind("error", (d) => {
    });
  } catch {
  }
}, sl = () => {
  if (!Zs) {
    Zs = !0;
    try {
      if (pt) {
        const e = pt?.connector?.pusher?.connection?.state, n = (pt?.connector?.pusher?.connection?.connection?.transport?.socket || pt?.connector?.pusher?.connection?.transport?.socket)?.readyState;
        if ((n === 0 || n === 1) && e !== "disconnected" && e !== "failed")
          try {
            pt.disconnect();
          } catch {
          }
        pt = null;
      }
    } finally {
      Zs = !1;
    }
    dn = null, Ui = null, Eu = null, Qc = null, Hi = null, Q.update((e) => ({
      ...e,
      escalationSocketConnected: !1
    })), Qr.clear(), Qh();
  }
}, Xo = (e) => {
  Q.update((t) => ({
    ...t,
    showEscalationButton: !0,
    escalationTriggerType: e,
    escalationStatus: "suggested"
  }));
}, tp = (e, t) => {
  Q.update((n) => ({
    ...n,
    escalationStatus: e,
    escalationRequestId: t || n.escalationRequestId
  }));
}, np = async () => {
  const e = gn(Q);
  if (!(!e.chat_id || !["pending", "unresolved"].includes(e.escalationStatus)))
    try {
      const t = `https://staging.fluentbot.ai/api/widget/escalations/${e.chat_id}/disconnect`;
      navigator.sendBeacon ? navigator.sendBeacon(t) : await fetch(t, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: !0
      });
    } catch (t) {
      console.error("Failed to notify disconnect:", t);
    }
}, rp = async (e, t) => {
  const n = gn(Q).session_token || xs();
  if (!n)
    throw new Error("Session token is missing. Please refresh the widget.");
  const i = (await ur.post("/api/widget/visitor/email", {
    bot_id: e,
    session_token: n,
    email: t
  }))?.data?.data?.email || t;
  return String(i);
};
W0();
/**
 * @license lucide-svelte v0.503.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const ip = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var sp = /* @__PURE__ */ Od("<svg><!><!></svg>");
function it(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Ze(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  ar(t, !1);
  let i = fn(t, "name", 8, void 0), s = fn(t, "color", 8, "currentColor"), u = fn(t, "size", 8, 24), a = fn(t, "strokeWidth", 8, 2), c = fn(t, "absoluteStrokeWidth", 8, !1), d = fn(t, "iconNode", 24, () => []);
  const h = (...w) => w.filter((v, E, y) => !!v && y.indexOf(v) === E).join(" ");
  Wd();
  var p = sp();
  let b;
  var _ = G(p);
  Xi(_, 1, d, $u, (w, v) => {
    let E = () => C(v)[0], y = () => C(v)[1];
    var S = He(), D = Ie(S);
    qd(D, E, !0, (A, T) => {
      let P;
      de(() => P = Do(A, P, { ...y() }));
    }), W(w, S);
  });
  var g = ie(_);
  et(g, t, "default", {}), de(
    (w, v) => b = Do(p, b, {
      ...ip,
      ...r,
      width: u(),
      height: u(),
      stroke: s(),
      "stroke-width": w,
      class: v
    }),
    [
      () => c() ? Number(a()) * 24 / Number(u()) : a(),
      () => h("lucide-icon", "lucide", i() ? `lucide-${i()}` : "", n.class)
    ],
    Pu
  ), W(e, p), cr();
}
function ul(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "bot-message-square" }, () => n, {
    iconNode: [
      ["path", { d: "M12 6V2H8" }],
      [
        "path",
        {
          d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
        }
      ],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "M9 11v2" }],
      ["path", { d: "M15 11v2" }],
      ["path", { d: "M20 12h2" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function Cu(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "bot" }, () => n, {
    iconNode: [
      ["path", { d: "M12 8V4H8" }],
      [
        "rect",
        {
          width: "16",
          height: "12",
          x: "4",
          y: "8",
          rx: "2"
        }
      ],
      ["path", { d: "M2 14h2" }],
      ["path", { d: "M20 14h2" }],
      ["path", { d: "M15 13v2" }],
      ["path", { d: "M9 13v2" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function up(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "mail" }, () => n, {
    iconNode: [
      [
        "rect",
        {
          width: "20",
          height: "16",
          x: "2",
          y: "4",
          rx: "2"
        }
      ],
      [
        "path",
        {
          d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function op(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "maximize" }, () => n, {
    iconNode: [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function ap(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "message-circle-more" }, () => n, {
    iconNode: [
      [
        "path",
        { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
      ],
      ["path", { d: "M8 12h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 12h.01" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function cp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "message-circle" }, () => n, {
    iconNode: [
      [
        "path",
        { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function lp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "message-square-more" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M8 10h.01" }],
      ["path", { d: "M12 10h.01" }],
      ["path", { d: "M16 10h.01" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function dp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "messages-square" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
        }
      ],
      [
        "path",
        {
          d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
        }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function Jo(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "message-square" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function fp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "minimize" }, () => n, {
    iconNode: [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function hp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "plus" }, () => n, {
    iconNode: [
      ["path", { d: "M5 12h14" }],
      ["path", { d: "M12 5v14" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function pp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "send" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
        }
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function ol(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "sparkle" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function al(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "sparkles" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ],
      ["path", { d: "M20 3v4" }],
      ["path", { d: "M22 5h-4" }],
      ["path", { d: "M4 17v2" }],
      ["path", { d: "M5 18H3" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function gp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "thumbs-down" }, () => n, {
    iconNode: [
      ["path", { d: "M17 14V2" }],
      [
        "path",
        {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
        }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function bp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "thumbs-up" }, () => n, {
    iconNode: [
      ["path", { d: "M7 10v12" }],
      [
        "path",
        {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
        }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function mp(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "trash-2" }, () => n, {
    iconNode: [
      ["path", { d: "M3 6h18" }],
      [
        "path",
        { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }
      ],
      [
        "path",
        { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }
      ],
      [
        "line",
        {
          x1: "10",
          x2: "10",
          y1: "11",
          y2: "17"
        }
      ],
      [
        "line",
        {
          x1: "14",
          x2: "14",
          y1: "11",
          y2: "17"
        }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function cl(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "user-plus" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        }
      ],
      ["circle", { cx: "9", cy: "7", r: "4" }],
      [
        "line",
        {
          x1: "19",
          x2: "19",
          y1: "8",
          y2: "14"
        }
      ],
      [
        "line",
        {
          x1: "22",
          x2: "16",
          y1: "11",
          y2: "11"
        }
      ]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
function Ju(e, t) {
  const n = Ze(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  it(e, rt({ name: "x" }, () => n, {
    iconNode: [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ],
    children: (i, s) => {
      var u = He(), a = Ie(u);
      et(a, t, "default", {}), W(i, u);
    },
    $$slots: { default: !0 }
  }));
}
const Qo = {};
function _p(e) {
  let t = Qo[e];
  if (t)
    return t;
  t = Qo[e] = [];
  for (let n = 0; n < 128; n++) {
    const r = String.fromCharCode(n);
    t.push(r);
  }
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function Dr(e, t) {
  typeof t != "string" && (t = Dr.defaultChars);
  const n = _p(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    let i = "";
    for (let s = 0, u = r.length; s < u; s += 3) {
      const a = parseInt(r.slice(s + 1, s + 3), 16);
      if (a < 128) {
        i += n[a];
        continue;
      }
      if ((a & 224) === 192 && s + 3 < u) {
        const c = parseInt(r.slice(s + 4, s + 6), 16);
        if ((c & 192) === 128) {
          const d = a << 6 & 1984 | c & 63;
          d < 128 ? i += "��" : i += String.fromCharCode(d), s += 3;
          continue;
        }
      }
      if ((a & 240) === 224 && s + 6 < u) {
        const c = parseInt(r.slice(s + 4, s + 6), 16), d = parseInt(r.slice(s + 7, s + 9), 16);
        if ((c & 192) === 128 && (d & 192) === 128) {
          const h = a << 12 & 61440 | c << 6 & 4032 | d & 63;
          h < 2048 || h >= 55296 && h <= 57343 ? i += "���" : i += String.fromCharCode(h), s += 6;
          continue;
        }
      }
      if ((a & 248) === 240 && s + 9 < u) {
        const c = parseInt(r.slice(s + 4, s + 6), 16), d = parseInt(r.slice(s + 7, s + 9), 16), h = parseInt(r.slice(s + 10, s + 12), 16);
        if ((c & 192) === 128 && (d & 192) === 128 && (h & 192) === 128) {
          let p = a << 18 & 1835008 | c << 12 & 258048 | d << 6 & 4032 | h & 63;
          p < 65536 || p > 1114111 ? i += "����" : (p -= 65536, i += String.fromCharCode(55296 + (p >> 10), 56320 + (p & 1023))), s += 9;
          continue;
        }
      }
      i += "�";
    }
    return i;
  });
}
Dr.defaultChars = ";/?:@&=+$,#";
Dr.componentChars = "";
const ea = {};
function vp(e) {
  let t = ea[e];
  if (t)
    return t;
  t = ea[e] = [];
  for (let n = 0; n < 128; n++) {
    const r = String.fromCharCode(n);
    /^[0-9a-z]$/i.test(r) ? t.push(r) : t.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  }
  for (let n = 0; n < e.length; n++)
    t[e.charCodeAt(n)] = e[n];
  return t;
}
function vi(e, t, n) {
  typeof t != "string" && (n = t, t = vi.defaultChars), typeof n > "u" && (n = !0);
  const r = vp(t);
  let i = "";
  for (let s = 0, u = e.length; s < u; s++) {
    const a = e.charCodeAt(s);
    if (n && a === 37 && s + 2 < u && /^[0-9a-f]{2}$/i.test(e.slice(s + 1, s + 3))) {
      i += e.slice(s, s + 3), s += 2;
      continue;
    }
    if (a < 128) {
      i += r[a];
      continue;
    }
    if (a >= 55296 && a <= 57343) {
      if (a >= 55296 && a <= 56319 && s + 1 < u) {
        const c = e.charCodeAt(s + 1);
        if (c >= 56320 && c <= 57343) {
          i += encodeURIComponent(e[s] + e[s + 1]), s++;
          continue;
        }
      }
      i += "%EF%BF%BD";
      continue;
    }
    i += encodeURIComponent(e[s]);
  }
  return i;
}
vi.defaultChars = ";/?:@&=+$,-_.!~*'()#";
vi.componentChars = "-_.!~*'()";
function Qu(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function rs() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const xp = /^([a-z0-9.+-]+:)/i, yp = /:[0-9]*$/, wp = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, kp = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Ep = ["{", "}", "|", "\\", "^", "`"].concat(kp), Cp = ["'"].concat(Ep), ta = ["%", "/", "?", ";", "#"].concat(Cp), na = ["/", "?", "#"], Sp = 255, ra = /^[+a-z0-9A-Z_-]{0,63}$/, Ap = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, ia = {
  javascript: !0,
  "javascript:": !0
}, sa = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function eo(e, t) {
  if (e && e instanceof rs) return e;
  const n = new rs();
  return n.parse(e, t), n;
}
rs.prototype.parse = function(e, t) {
  let n, r, i, s = e;
  if (s = s.trim(), !t && e.split("#").length === 1) {
    const d = wp.exec(s);
    if (d)
      return this.pathname = d[1], d[2] && (this.search = d[2]), this;
  }
  let u = xp.exec(s);
  if (u && (u = u[0], n = u.toLowerCase(), this.protocol = u, s = s.substr(u.length)), (t || u || s.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = s.substr(0, 2) === "//", i && !(u && ia[u]) && (s = s.substr(2), this.slashes = !0)), !ia[u] && (i || u && !sa[u])) {
    let d = -1;
    for (let g = 0; g < na.length; g++)
      r = s.indexOf(na[g]), r !== -1 && (d === -1 || r < d) && (d = r);
    let h, p;
    d === -1 ? p = s.lastIndexOf("@") : p = s.lastIndexOf("@", d), p !== -1 && (h = s.slice(0, p), s = s.slice(p + 1), this.auth = h), d = -1;
    for (let g = 0; g < ta.length; g++)
      r = s.indexOf(ta[g]), r !== -1 && (d === -1 || r < d) && (d = r);
    d === -1 && (d = s.length), s[d - 1] === ":" && d--;
    const b = s.slice(0, d);
    s = s.slice(d), this.parseHost(b), this.hostname = this.hostname || "";
    const _ = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!_) {
      const g = this.hostname.split(/\./);
      for (let w = 0, v = g.length; w < v; w++) {
        const E = g[w];
        if (E && !E.match(ra)) {
          let y = "";
          for (let S = 0, D = E.length; S < D; S++)
            E.charCodeAt(S) > 127 ? y += "x" : y += E[S];
          if (!y.match(ra)) {
            const S = g.slice(0, w), D = g.slice(w + 1), A = E.match(Ap);
            A && (S.push(A[1]), D.unshift(A[2])), D.length && (s = D.join(".") + s), this.hostname = S.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Sp && (this.hostname = ""), _ && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const a = s.indexOf("#");
  a !== -1 && (this.hash = s.substr(a), s = s.slice(0, a));
  const c = s.indexOf("?");
  return c !== -1 && (this.search = s.substr(c), s = s.slice(0, c)), s && (this.pathname = s), sa[n] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
rs.prototype.parseHost = function(e) {
  let t = yp.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Dr,
  encode: vi,
  format: Qu,
  parse: eo
}, Symbol.toStringTag, { value: "Module" })), ll = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, dl = /[\0-\x1F\x7F-\x9F]/, Dp = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, to = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, fl = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, hl = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: ll,
  Cc: dl,
  Cf: Dp,
  P: to,
  S: fl,
  Z: hl
}, Symbol.toStringTag, { value: "Module" })), Rp = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Mp = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var Xs;
const Fp = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Np = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Xs = String.fromCodePoint) !== null && Xs !== void 0 ? Xs : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Ip(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Fp.get(e)) !== null && t !== void 0 ? t : e;
}
var dt;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(dt || (dt = {}));
const Pp = 32;
var Un;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Un || (Un = {}));
function Su(e) {
  return e >= dt.ZERO && e <= dt.NINE;
}
function Lp(e) {
  return e >= dt.UPPER_A && e <= dt.UPPER_F || e >= dt.LOWER_A && e <= dt.LOWER_F;
}
function Bp(e) {
  return e >= dt.UPPER_A && e <= dt.UPPER_Z || e >= dt.LOWER_A && e <= dt.LOWER_Z || Su(e);
}
function qp(e) {
  return e === dt.EQUALS || Bp(e);
}
var lt;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(lt || (lt = {}));
var zn;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(zn || (zn = {}));
class zp {
  constructor(t, n, r) {
    this.decodeTree = t, this.emitCodePoint = n, this.errors = r, this.state = lt.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = zn.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = lt.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, n) {
    switch (this.state) {
      case lt.EntityStart:
        return t.charCodeAt(n) === dt.NUM ? (this.state = lt.NumericStart, this.consumed += 1, this.stateNumericStart(t, n + 1)) : (this.state = lt.NamedEntity, this.stateNamedEntity(t, n));
      case lt.NumericStart:
        return this.stateNumericStart(t, n);
      case lt.NumericDecimal:
        return this.stateNumericDecimal(t, n);
      case lt.NumericHex:
        return this.stateNumericHex(t, n);
      case lt.NamedEntity:
        return this.stateNamedEntity(t, n);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, n) {
    return n >= t.length ? -1 : (t.charCodeAt(n) | Pp) === dt.LOWER_X ? (this.state = lt.NumericHex, this.consumed += 1, this.stateNumericHex(t, n + 1)) : (this.state = lt.NumericDecimal, this.stateNumericDecimal(t, n));
  }
  addToNumericResult(t, n, r, i) {
    if (n !== r) {
      const s = r - n;
      this.result = this.result * Math.pow(i, s) + parseInt(t.substr(n, s), i), this.consumed += s;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, n) {
    const r = n;
    for (; n < t.length; ) {
      const i = t.charCodeAt(n);
      if (Su(i) || Lp(i))
        n += 1;
      else
        return this.addToNumericResult(t, r, n, 16), this.emitNumericEntity(i, 3);
    }
    return this.addToNumericResult(t, r, n, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, n) {
    const r = n;
    for (; n < t.length; ) {
      const i = t.charCodeAt(n);
      if (Su(i))
        n += 1;
      else
        return this.addToNumericResult(t, r, n, 10), this.emitNumericEntity(i, 2);
    }
    return this.addToNumericResult(t, r, n, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, n) {
    var r;
    if (this.consumed <= n)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === dt.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === zn.Strict)
      return 0;
    return this.emitCodePoint(Ip(this.result), this.consumed), this.errors && (t !== dt.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, n) {
    const { decodeTree: r } = this;
    let i = r[this.treeIndex], s = (i & Un.VALUE_LENGTH) >> 14;
    for (; n < t.length; n++, this.excess++) {
      const u = t.charCodeAt(n);
      if (this.treeIndex = jp(r, i, this.treeIndex + Math.max(1, s), u), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === zn.Attribute && // We shouldn't have consumed any characters after the entity,
        (s === 0 || // And there should be no invalid characters.
        qp(u)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (i = r[this.treeIndex], s = (i & Un.VALUE_LENGTH) >> 14, s !== 0) {
        if (u === dt.SEMI)
          return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
        this.decodeMode !== zn.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: n, decodeTree: r } = this, i = (r[n] & Un.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, i, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, n, r) {
    const { decodeTree: i } = this;
    return this.emitCodePoint(n === 1 ? i[t] & ~Un.VALUE_LENGTH : i[t + 1], r), n === 3 && this.emitCodePoint(i[t + 2], r), r;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case lt.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== zn.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case lt.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case lt.NumericHex:
        return this.emitNumericEntity(0, 3);
      case lt.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case lt.EntityStart:
        return 0;
    }
  }
}
function pl(e) {
  let t = "";
  const n = new zp(e, (r) => t += Np(r));
  return function(i, s) {
    let u = 0, a = 0;
    for (; (a = i.indexOf("&", a)) >= 0; ) {
      t += i.slice(u, a), n.startEntity(s);
      const d = n.write(
        i,
        // Skip the "&"
        a + 1
      );
      if (d < 0) {
        u = a + n.end();
        break;
      }
      u = a + d, a = d === 0 ? u + 1 : u;
    }
    const c = t + i.slice(u);
    return t = "", c;
  };
}
function jp(e, t, n, r) {
  const i = (t & Un.BRANCH_LENGTH) >> 7, s = t & Un.JUMP_TABLE;
  if (i === 0)
    return s !== 0 && r === s ? n : -1;
  if (s) {
    const c = r - s;
    return c < 0 || c >= i ? -1 : e[n + c] - 1;
  }
  let u = n, a = u + i - 1;
  for (; u <= a; ) {
    const c = u + a >>> 1, d = e[c];
    if (d < r)
      u = c + 1;
    else if (d > r)
      a = c - 1;
    else
      return e[c + i];
  }
  return -1;
}
const Up = pl(Rp);
pl(Mp);
function gl(e, t = zn.Legacy) {
  return Up(e, t);
}
function Hp(e) {
  return Object.prototype.toString.call(e);
}
function no(e) {
  return Hp(e) === "[object String]";
}
const $p = Object.prototype.hasOwnProperty;
function Wp(e, t) {
  return $p.call(e, t);
}
function ys(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    if (n) {
      if (typeof n != "object")
        throw new TypeError(n + "must be object");
      Object.keys(n).forEach(function(r) {
        e[r] = n[r];
      });
    }
  }), e;
}
function bl(e, t, n) {
  return [].concat(e.slice(0, t), n, e.slice(t + 1));
}
function ro(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function is(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), n = 56320 + (e & 1023);
    return String.fromCharCode(t, n);
  }
  return String.fromCharCode(e);
}
const ml = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Vp = /&([a-z#][a-z0-9]{1,31});/gi, Gp = new RegExp(ml.source + "|" + Vp.source, "gi"), Yp = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Kp(e, t) {
  if (t.charCodeAt(0) === 35 && Yp.test(t)) {
    const r = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return ro(r) ? is(r) : e;
  }
  const n = gl(e);
  return n !== e ? n : e;
}
function Zp(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(ml, "$1");
}
function Or(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Gp, function(t, n, r) {
    return n || Kp(t, r);
  });
}
const Xp = /[&<>"]/, Jp = /[&<>"]/g, Qp = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function e1(e) {
  return Qp[e];
}
function Gn(e) {
  return Xp.test(e) ? e.replace(Jp, e1) : e;
}
const t1 = /[.?*+^$[\]\\(){}|-]/g;
function n1(e) {
  return e.replace(t1, "\\$&");
}
function Be(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function ii(e) {
  if (e >= 8192 && e <= 8202)
    return !0;
  switch (e) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function si(e) {
  return to.test(e) || fl.test(e);
}
function ui(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function ws(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const r1 = { mdurl: Tp, ucmicro: Op }, i1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: bl,
  assign: ys,
  escapeHtml: Gn,
  escapeRE: n1,
  fromCodePoint: is,
  has: Wp,
  isMdAsciiPunct: ui,
  isPunctChar: si,
  isSpace: Be,
  isString: no,
  isValidEntityCode: ro,
  isWhiteSpace: ii,
  lib: r1,
  normalizeReference: ws,
  unescapeAll: Or,
  unescapeMd: Zp
}, Symbol.toStringTag, { value: "Module" }));
function s1(e, t, n) {
  let r, i, s, u;
  const a = e.posMax, c = e.pos;
  for (e.pos = t + 1, r = 1; e.pos < a; ) {
    if (s = e.src.charCodeAt(e.pos), s === 93 && (r--, r === 0)) {
      i = !0;
      break;
    }
    if (u = e.pos, e.md.inline.skipToken(e), s === 91) {
      if (u === e.pos - 1)
        r++;
      else if (n)
        return e.pos = c, -1;
    }
  }
  let d = -1;
  return i && (d = e.pos), e.pos = c, d;
}
function u1(e, t, n) {
  let r, i = t;
  const s = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(i) === 60) {
    for (i++; i < n; ) {
      if (r = e.charCodeAt(i), r === 10 || r === 60)
        return s;
      if (r === 62)
        return s.pos = i + 1, s.str = Or(e.slice(t + 1, i)), s.ok = !0, s;
      if (r === 92 && i + 1 < n) {
        i += 2;
        continue;
      }
      i++;
    }
    return s;
  }
  let u = 0;
  for (; i < n && (r = e.charCodeAt(i), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && i + 1 < n) {
      if (e.charCodeAt(i + 1) === 32)
        break;
      i += 2;
      continue;
    }
    if (r === 40 && (u++, u > 32))
      return s;
    if (r === 41) {
      if (u === 0)
        break;
      u--;
    }
    i++;
  }
  return t === i || u !== 0 || (s.str = Or(e.slice(t, i)), s.pos = i, s.ok = !0), s;
}
function o1(e, t, n, r) {
  let i, s = t;
  const u = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (r)
    u.str = r.str, u.marker = r.marker;
  else {
    if (s >= n)
      return u;
    let a = e.charCodeAt(s);
    if (a !== 34 && a !== 39 && a !== 40)
      return u;
    t++, s++, a === 40 && (a = 41), u.marker = a;
  }
  for (; s < n; ) {
    if (i = e.charCodeAt(s), i === u.marker)
      return u.pos = s + 1, u.str += Or(e.slice(t, s)), u.ok = !0, u;
    if (i === 40 && u.marker === 41)
      return u;
    i === 92 && s + 1 < n && s++, s++;
  }
  return u.can_continue = !0, u.str += Or(e.slice(t, s)), u;
}
const a1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: u1,
  parseLinkLabel: s1,
  parseLinkTitle: o1
}, Symbol.toStringTag, { value: "Module" })), vn = {};
vn.code_inline = function(e, t, n, r, i) {
  const s = e[t];
  return "<code" + i.renderAttrs(s) + ">" + Gn(s.content) + "</code>";
};
vn.code_block = function(e, t, n, r, i) {
  const s = e[t];
  return "<pre" + i.renderAttrs(s) + "><code>" + Gn(e[t].content) + `</code></pre>
`;
};
vn.fence = function(e, t, n, r, i) {
  const s = e[t], u = s.info ? Or(s.info).trim() : "";
  let a = "", c = "";
  if (u) {
    const h = u.split(/(\s+)/g);
    a = h[0], c = h.slice(2).join("");
  }
  let d;
  if (n.highlight ? d = n.highlight(s.content, a, c) || Gn(s.content) : d = Gn(s.content), d.indexOf("<pre") === 0)
    return d + `
`;
  if (u) {
    const h = s.attrIndex("class"), p = s.attrs ? s.attrs.slice() : [];
    h < 0 ? p.push(["class", n.langPrefix + a]) : (p[h] = p[h].slice(), p[h][1] += " " + n.langPrefix + a);
    const b = {
      attrs: p
    };
    return `<pre><code${i.renderAttrs(b)}>${d}</code></pre>
`;
  }
  return `<pre><code${i.renderAttrs(s)}>${d}</code></pre>
`;
};
vn.image = function(e, t, n, r, i) {
  const s = e[t];
  return s.attrs[s.attrIndex("alt")][1] = i.renderInlineAsText(s.children, n, r), i.renderToken(e, t, n);
};
vn.hardbreak = function(e, t, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
vn.softbreak = function(e, t, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
vn.text = function(e, t) {
  return Gn(e[t].content);
};
vn.html_block = function(e, t) {
  return e[t].content;
};
vn.html_inline = function(e, t) {
  return e[t].content;
};
function Pr() {
  this.rules = ys({}, vn);
}
Pr.prototype.renderAttrs = function(t) {
  let n, r, i;
  if (!t.attrs)
    return "";
  for (i = "", n = 0, r = t.attrs.length; n < r; n++)
    i += " " + Gn(t.attrs[n][0]) + '="' + Gn(t.attrs[n][1]) + '"';
  return i;
};
Pr.prototype.renderToken = function(t, n, r) {
  const i = t[n];
  let s = "";
  if (i.hidden)
    return "";
  i.block && i.nesting !== -1 && n && t[n - 1].hidden && (s += `
`), s += (i.nesting === -1 ? "</" : "<") + i.tag, s += this.renderAttrs(i), i.nesting === 0 && r.xhtmlOut && (s += " /");
  let u = !1;
  if (i.block && (u = !0, i.nesting === 1 && n + 1 < t.length)) {
    const a = t[n + 1];
    (a.type === "inline" || a.hidden || a.nesting === -1 && a.tag === i.tag) && (u = !1);
  }
  return s += u ? `>
` : ">", s;
};
Pr.prototype.renderInline = function(e, t, n) {
  let r = "";
  const i = this.rules;
  for (let s = 0, u = e.length; s < u; s++) {
    const a = e[s].type;
    typeof i[a] < "u" ? r += i[a](e, s, t, n, this) : r += this.renderToken(e, s, t);
  }
  return r;
};
Pr.prototype.renderInlineAsText = function(e, t, n) {
  let r = "";
  for (let i = 0, s = e.length; i < s; i++)
    switch (e[i].type) {
      case "text":
        r += e[i].content;
        break;
      case "image":
        r += this.renderInlineAsText(e[i].children, t, n);
        break;
      case "html_inline":
      case "html_block":
        r += e[i].content;
        break;
      case "softbreak":
      case "hardbreak":
        r += `
`;
        break;
    }
  return r;
};
Pr.prototype.render = function(e, t, n) {
  let r = "";
  const i = this.rules;
  for (let s = 0, u = e.length; s < u; s++) {
    const a = e[s].type;
    a === "inline" ? r += this.renderInline(e[s].children, t, n) : typeof i[a] < "u" ? r += i[a](e, s, t, n, this) : r += this.renderToken(e, s, t, n);
  }
  return r;
};
function Tt() {
  this.__rules__ = [], this.__cache__ = null;
}
Tt.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Tt.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(n) {
    n.enabled && n.alt.forEach(function(r) {
      t.indexOf(r) < 0 && t.push(r);
    });
  }), e.__cache__ = {}, t.forEach(function(n) {
    e.__cache__[n] = [], e.__rules__.forEach(function(r) {
      r.enabled && (n && r.alt.indexOf(n) < 0 || e.__cache__[n].push(r.fn));
    });
  });
};
Tt.prototype.at = function(e, t, n) {
  const r = this.__find__(e), i = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[r].fn = t, this.__rules__[r].alt = i.alt || [], this.__cache__ = null;
};
Tt.prototype.before = function(e, t, n, r) {
  const i = this.__find__(e), s = r || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(i, 0, {
    name: t,
    enabled: !0,
    fn: n,
    alt: s.alt || []
  }), this.__cache__ = null;
};
Tt.prototype.after = function(e, t, n, r) {
  const i = this.__find__(e), s = r || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(i + 1, 0, {
    name: t,
    enabled: !0,
    fn: n,
    alt: s.alt || []
  }), this.__cache__ = null;
};
Tt.prototype.push = function(e, t, n) {
  const r = n || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: r.alt || []
  }), this.__cache__ = null;
};
Tt.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const n = [];
  return e.forEach(function(r) {
    const i = this.__find__(r);
    if (i < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[i].enabled = !0, n.push(r);
  }, this), this.__cache__ = null, n;
};
Tt.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(e, t);
};
Tt.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const n = [];
  return e.forEach(function(r) {
    const i = this.__find__(r);
    if (i < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[i].enabled = !1, n.push(r);
  }, this), this.__cache__ = null, n;
};
Tt.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function un(e, t, n) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
un.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const n = this.attrs;
  for (let r = 0, i = n.length; r < i; r++)
    if (n[r][0] === t)
      return r;
  return -1;
};
un.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
un.prototype.attrSet = function(t, n) {
  const r = this.attrIndex(t), i = [t, n];
  r < 0 ? this.attrPush(i) : this.attrs[r] = i;
};
un.prototype.attrGet = function(t) {
  const n = this.attrIndex(t);
  let r = null;
  return n >= 0 && (r = this.attrs[n][1]), r;
};
un.prototype.attrJoin = function(t, n) {
  const r = this.attrIndex(t);
  r < 0 ? this.attrPush([t, n]) : this.attrs[r][1] = this.attrs[r][1] + " " + n;
};
function _l(e, t, n) {
  this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t;
}
_l.prototype.Token = un;
const c1 = /\r\n?|\n/g, l1 = /\0/g;
function d1(e) {
  let t;
  t = e.src.replace(c1, `
`), t = t.replace(l1, "�"), e.src = t;
}
function f1(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function h1(e) {
  const t = e.tokens;
  for (let n = 0, r = t.length; n < r; n++) {
    const i = t[n];
    i.type === "inline" && e.md.inline.parse(i.content, e.md, e.env, i.children);
  }
}
function p1(e) {
  return /^<a[>\s]/i.test(e);
}
function g1(e) {
  return /^<\/a\s*>/i.test(e);
}
function b1(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let n = 0, r = t.length; n < r; n++) {
      if (t[n].type !== "inline" || !e.md.linkify.pretest(t[n].content))
        continue;
      let i = t[n].children, s = 0;
      for (let u = i.length - 1; u >= 0; u--) {
        const a = i[u];
        if (a.type === "link_close") {
          for (u--; i[u].level !== a.level && i[u].type !== "link_open"; )
            u--;
          continue;
        }
        if (a.type === "html_inline" && (p1(a.content) && s > 0 && s--, g1(a.content) && s++), !(s > 0) && a.type === "text" && e.md.linkify.test(a.content)) {
          const c = a.content;
          let d = e.md.linkify.match(c);
          const h = [];
          let p = a.level, b = 0;
          d.length > 0 && d[0].index === 0 && u > 0 && i[u - 1].type === "text_special" && (d = d.slice(1));
          for (let _ = 0; _ < d.length; _++) {
            const g = d[_].url, w = e.md.normalizeLink(g);
            if (!e.md.validateLink(w))
              continue;
            let v = d[_].text;
            d[_].schema ? d[_].schema === "mailto:" && !/^mailto:/i.test(v) ? v = e.md.normalizeLinkText("mailto:" + v).replace(/^mailto:/, "") : v = e.md.normalizeLinkText(v) : v = e.md.normalizeLinkText("http://" + v).replace(/^http:\/\//, "");
            const E = d[_].index;
            if (E > b) {
              const A = new e.Token("text", "", 0);
              A.content = c.slice(b, E), A.level = p, h.push(A);
            }
            const y = new e.Token("link_open", "a", 1);
            y.attrs = [["href", w]], y.level = p++, y.markup = "linkify", y.info = "auto", h.push(y);
            const S = new e.Token("text", "", 0);
            S.content = v, S.level = p, h.push(S);
            const D = new e.Token("link_close", "a", -1);
            D.level = --p, D.markup = "linkify", D.info = "auto", h.push(D), b = d[_].lastIndex;
          }
          if (b < c.length) {
            const _ = new e.Token("text", "", 0);
            _.content = c.slice(b), _.level = p, h.push(_);
          }
          t[n].children = i = bl(i, u, h);
        }
      }
    }
}
const vl = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, m1 = /\((c|tm|r)\)/i, _1 = /\((c|tm|r)\)/ig, v1 = {
  c: "©",
  r: "®",
  tm: "™"
};
function x1(e, t) {
  return v1[t.toLowerCase()];
}
function y1(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const r = e[n];
    r.type === "text" && !t && (r.content = r.content.replace(_1, x1)), r.type === "link_open" && r.info === "auto" && t--, r.type === "link_close" && r.info === "auto" && t++;
  }
}
function w1(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const r = e[n];
    r.type === "text" && !t && vl.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), r.type === "link_open" && r.info === "auto" && t--, r.type === "link_close" && r.info === "auto" && t++;
  }
}
function k1(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (m1.test(e.tokens[t].content) && y1(e.tokens[t].children), vl.test(e.tokens[t].content) && w1(e.tokens[t].children));
}
const E1 = /['"]/, ua = /['"]/g, oa = "’";
function Ii(e, t, n) {
  return e.slice(0, t) + n + e.slice(t + 1);
}
function C1(e, t) {
  let n;
  const r = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i], u = e[i].level;
    for (n = r.length - 1; n >= 0 && !(r[n].level <= u); n--)
      ;
    if (r.length = n + 1, s.type !== "text")
      continue;
    let a = s.content, c = 0, d = a.length;
    e:
      for (; c < d; ) {
        ua.lastIndex = c;
        const h = ua.exec(a);
        if (!h)
          break;
        let p = !0, b = !0;
        c = h.index + 1;
        const _ = h[0] === "'";
        let g = 32;
        if (h.index - 1 >= 0)
          g = a.charCodeAt(h.index - 1);
        else
          for (n = i - 1; n >= 0 && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n--)
            if (e[n].content) {
              g = e[n].content.charCodeAt(e[n].content.length - 1);
              break;
            }
        let w = 32;
        if (c < d)
          w = a.charCodeAt(c);
        else
          for (n = i + 1; n < e.length && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n++)
            if (e[n].content) {
              w = e[n].content.charCodeAt(0);
              break;
            }
        const v = ui(g) || si(String.fromCharCode(g)), E = ui(w) || si(String.fromCharCode(w)), y = ii(g), S = ii(w);
        if (S ? p = !1 : E && (y || v || (p = !1)), y ? b = !1 : v && (S || E || (b = !1)), w === 34 && h[0] === '"' && g >= 48 && g <= 57 && (b = p = !1), p && b && (p = v, b = E), !p && !b) {
          _ && (s.content = Ii(s.content, h.index, oa));
          continue;
        }
        if (b)
          for (n = r.length - 1; n >= 0; n--) {
            let D = r[n];
            if (r[n].level < u)
              break;
            if (D.single === _ && r[n].level === u) {
              D = r[n];
              let A, T;
              _ ? (A = t.md.options.quotes[2], T = t.md.options.quotes[3]) : (A = t.md.options.quotes[0], T = t.md.options.quotes[1]), s.content = Ii(s.content, h.index, T), e[D.token].content = Ii(
                e[D.token].content,
                D.pos,
                A
              ), c += T.length - 1, D.token === i && (c += A.length - 1), a = s.content, d = a.length, r.length = n;
              continue e;
            }
          }
        p ? r.push({
          token: i,
          pos: h.index,
          single: _,
          level: u
        }) : b && _ && (s.content = Ii(s.content, h.index, oa));
      }
  }
}
function S1(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !E1.test(e.tokens[t].content) || C1(e.tokens[t].children, e);
}
function A1(e) {
  let t, n;
  const r = e.tokens, i = r.length;
  for (let s = 0; s < i; s++) {
    if (r[s].type !== "inline") continue;
    const u = r[s].children, a = u.length;
    for (t = 0; t < a; t++)
      u[t].type === "text_special" && (u[t].type = "text");
    for (t = n = 0; t < a; t++)
      u[t].type === "text" && t + 1 < a && u[t + 1].type === "text" ? u[t + 1].content = u[t].content + u[t + 1].content : (t !== n && (u[n] = u[t]), n++);
    t !== n && (u.length = n);
  }
}
const Js = [
  ["normalize", d1],
  ["block", f1],
  ["inline", h1],
  ["linkify", b1],
  ["replacements", k1],
  ["smartquotes", S1],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", A1]
];
function io() {
  this.ruler = new Tt();
  for (let e = 0; e < Js.length; e++)
    this.ruler.push(Js[e][0], Js[e][1]);
}
io.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let n = 0, r = t.length; n < r; n++)
    t[n](e);
};
io.prototype.State = _l;
function xn(e, t, n, r) {
  this.src = e, this.md = t, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const i = this.src;
  for (let s = 0, u = 0, a = 0, c = 0, d = i.length, h = !1; u < d; u++) {
    const p = i.charCodeAt(u);
    if (!h)
      if (Be(p)) {
        a++, p === 9 ? c += 4 - c % 4 : c++;
        continue;
      } else
        h = !0;
    (p === 10 || u === d - 1) && (p !== 10 && u++, this.bMarks.push(s), this.eMarks.push(u), this.tShift.push(a), this.sCount.push(c), this.bsCount.push(0), h = !1, a = 0, c = 0, s = u + 1);
  }
  this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
xn.prototype.push = function(e, t, n) {
  const r = new un(e, t, n);
  return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r;
};
xn.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
xn.prototype.skipEmptyLines = function(t) {
  for (let n = this.lineMax; t < n && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
xn.prototype.skipSpaces = function(t) {
  for (let n = this.src.length; t < n; t++) {
    const r = this.src.charCodeAt(t);
    if (!Be(r))
      break;
  }
  return t;
};
xn.prototype.skipSpacesBack = function(t, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (!Be(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
xn.prototype.skipChars = function(t, n) {
  for (let r = this.src.length; t < r && this.src.charCodeAt(t) === n; t++)
    ;
  return t;
};
xn.prototype.skipCharsBack = function(t, n, r) {
  if (t <= r)
    return t;
  for (; t > r; )
    if (n !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
xn.prototype.getLines = function(t, n, r, i) {
  if (t >= n)
    return "";
  const s = new Array(n - t);
  for (let u = 0, a = t; a < n; a++, u++) {
    let c = 0;
    const d = this.bMarks[a];
    let h = d, p;
    for (a + 1 < n || i ? p = this.eMarks[a] + 1 : p = this.eMarks[a]; h < p && c < r; ) {
      const b = this.src.charCodeAt(h);
      if (Be(b))
        b === 9 ? c += 4 - (c + this.bsCount[a]) % 4 : c++;
      else if (h - d < this.tShift[a])
        c++;
      else
        break;
      h++;
    }
    c > r ? s[u] = new Array(c - r + 1).join(" ") + this.src.slice(h, p) : s[u] = this.src.slice(h, p);
  }
  return s.join("");
};
xn.prototype.Token = un;
const T1 = 65536;
function Qs(e, t) {
  const n = e.bMarks[t] + e.tShift[t], r = e.eMarks[t];
  return e.src.slice(n, r);
}
function aa(e) {
  const t = [], n = e.length;
  let r = 0, i = e.charCodeAt(r), s = !1, u = 0, a = "";
  for (; r < n; )
    i === 124 && (s ? (a += e.substring(u, r - 1), u = r) : (t.push(a + e.substring(u, r)), a = "", u = r + 1)), s = i === 92, r++, i = e.charCodeAt(r);
  return t.push(a + e.substring(u)), t;
}
function D1(e, t, n, r) {
  if (t + 2 > n)
    return !1;
  let i = t + 1;
  if (e.sCount[i] < e.blkIndent || e.sCount[i] - e.blkIndent >= 4)
    return !1;
  let s = e.bMarks[i] + e.tShift[i];
  if (s >= e.eMarks[i])
    return !1;
  const u = e.src.charCodeAt(s++);
  if (u !== 124 && u !== 45 && u !== 58 || s >= e.eMarks[i])
    return !1;
  const a = e.src.charCodeAt(s++);
  if (a !== 124 && a !== 45 && a !== 58 && !Be(a) || u === 45 && Be(a))
    return !1;
  for (; s < e.eMarks[i]; ) {
    const D = e.src.charCodeAt(s);
    if (D !== 124 && D !== 45 && D !== 58 && !Be(D))
      return !1;
    s++;
  }
  let c = Qs(e, t + 1), d = c.split("|");
  const h = [];
  for (let D = 0; D < d.length; D++) {
    const A = d[D].trim();
    if (!A) {
      if (D === 0 || D === d.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(A))
      return !1;
    A.charCodeAt(A.length - 1) === 58 ? h.push(A.charCodeAt(0) === 58 ? "center" : "right") : A.charCodeAt(0) === 58 ? h.push("left") : h.push("");
  }
  if (c = Qs(e, t).trim(), c.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  d = aa(c), d.length && d[0] === "" && d.shift(), d.length && d[d.length - 1] === "" && d.pop();
  const p = d.length;
  if (p === 0 || p !== h.length)
    return !1;
  if (r)
    return !0;
  const b = e.parentType;
  e.parentType = "table";
  const _ = e.md.block.ruler.getRules("blockquote"), g = e.push("table_open", "table", 1), w = [t, 0];
  g.map = w;
  const v = e.push("thead_open", "thead", 1);
  v.map = [t, t + 1];
  const E = e.push("tr_open", "tr", 1);
  E.map = [t, t + 1];
  for (let D = 0; D < d.length; D++) {
    const A = e.push("th_open", "th", 1);
    h[D] && (A.attrs = [["style", "text-align:" + h[D]]]);
    const T = e.push("inline", "", 0);
    T.content = d[D].trim(), T.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let y, S = 0;
  for (i = t + 2; i < n && !(e.sCount[i] < e.blkIndent); i++) {
    let D = !1;
    for (let T = 0, P = _.length; T < P; T++)
      if (_[T](e, i, n, !0)) {
        D = !0;
        break;
      }
    if (D || (c = Qs(e, i).trim(), !c) || e.sCount[i] - e.blkIndent >= 4 || (d = aa(c), d.length && d[0] === "" && d.shift(), d.length && d[d.length - 1] === "" && d.pop(), S += p - d.length, S > T1))
      break;
    if (i === t + 2) {
      const T = e.push("tbody_open", "tbody", 1);
      T.map = y = [t + 2, 0];
    }
    const A = e.push("tr_open", "tr", 1);
    A.map = [i, i + 1];
    for (let T = 0; T < p; T++) {
      const P = e.push("td_open", "td", 1);
      h[T] && (P.attrs = [["style", "text-align:" + h[T]]]);
      const j = e.push("inline", "", 0);
      j.content = d[T] ? d[T].trim() : "", j.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return y && (e.push("tbody_close", "tbody", -1), y[1] = i), e.push("table_close", "table", -1), w[1] = i, e.parentType = b, e.line = i, !0;
}
function O1(e, t, n) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let r = t + 1, i = r;
  for (; r < n; ) {
    if (e.isEmpty(r)) {
      r++;
      continue;
    }
    if (e.sCount[r] - e.blkIndent >= 4) {
      r++, i = r;
      continue;
    }
    break;
  }
  e.line = i;
  const s = e.push("code_block", "code", 0);
  return s.content = e.getLines(t, i, 4 + e.blkIndent, !1) + `
`, s.map = [t, e.line], !0;
}
function R1(e, t, n, r) {
  let i = e.bMarks[t] + e.tShift[t], s = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || i + 3 > s)
    return !1;
  const u = e.src.charCodeAt(i);
  if (u !== 126 && u !== 96)
    return !1;
  let a = i;
  i = e.skipChars(i, u);
  let c = i - a;
  if (c < 3)
    return !1;
  const d = e.src.slice(a, i), h = e.src.slice(i, s);
  if (u === 96 && h.indexOf(String.fromCharCode(u)) >= 0)
    return !1;
  if (r)
    return !0;
  let p = t, b = !1;
  for (; p++, !(p >= n || (i = a = e.bMarks[p] + e.tShift[p], s = e.eMarks[p], i < s && e.sCount[p] < e.blkIndent)); )
    if (e.src.charCodeAt(i) === u && !(e.sCount[p] - e.blkIndent >= 4) && (i = e.skipChars(i, u), !(i - a < c) && (i = e.skipSpaces(i), !(i < s)))) {
      b = !0;
      break;
    }
  c = e.sCount[t], e.line = p + (b ? 1 : 0);
  const _ = e.push("fence", "code", 0);
  return _.info = h, _.content = e.getLines(t + 1, p, c, !0), _.markup = d, _.map = [t, e.line], !0;
}
function M1(e, t, n, r) {
  let i = e.bMarks[t] + e.tShift[t], s = e.eMarks[t];
  const u = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(i) !== 62)
    return !1;
  if (r)
    return !0;
  const a = [], c = [], d = [], h = [], p = e.md.block.ruler.getRules("blockquote"), b = e.parentType;
  e.parentType = "blockquote";
  let _ = !1, g;
  for (g = t; g < n; g++) {
    const S = e.sCount[g] < e.blkIndent;
    if (i = e.bMarks[g] + e.tShift[g], s = e.eMarks[g], i >= s)
      break;
    if (e.src.charCodeAt(i++) === 62 && !S) {
      let A = e.sCount[g] + 1, T, P;
      e.src.charCodeAt(i) === 32 ? (i++, A++, P = !1, T = !0) : e.src.charCodeAt(i) === 9 ? (T = !0, (e.bsCount[g] + A) % 4 === 3 ? (i++, A++, P = !1) : P = !0) : T = !1;
      let j = A;
      for (a.push(e.bMarks[g]), e.bMarks[g] = i; i < s; ) {
        const J = e.src.charCodeAt(i);
        if (Be(J))
          J === 9 ? j += 4 - (j + e.bsCount[g] + (P ? 1 : 0)) % 4 : j++;
        else
          break;
        i++;
      }
      _ = i >= s, c.push(e.bsCount[g]), e.bsCount[g] = e.sCount[g] + 1 + (T ? 1 : 0), d.push(e.sCount[g]), e.sCount[g] = j - A, h.push(e.tShift[g]), e.tShift[g] = i - e.bMarks[g];
      continue;
    }
    if (_)
      break;
    let D = !1;
    for (let A = 0, T = p.length; A < T; A++)
      if (p[A](e, g, n, !0)) {
        D = !0;
        break;
      }
    if (D) {
      e.lineMax = g, e.blkIndent !== 0 && (a.push(e.bMarks[g]), c.push(e.bsCount[g]), h.push(e.tShift[g]), d.push(e.sCount[g]), e.sCount[g] -= e.blkIndent);
      break;
    }
    a.push(e.bMarks[g]), c.push(e.bsCount[g]), h.push(e.tShift[g]), d.push(e.sCount[g]), e.sCount[g] = -1;
  }
  const w = e.blkIndent;
  e.blkIndent = 0;
  const v = e.push("blockquote_open", "blockquote", 1);
  v.markup = ">";
  const E = [t, 0];
  v.map = E, e.md.block.tokenize(e, t, g);
  const y = e.push("blockquote_close", "blockquote", -1);
  y.markup = ">", e.lineMax = u, e.parentType = b, E[1] = e.line;
  for (let S = 0; S < h.length; S++)
    e.bMarks[S + t] = a[S], e.tShift[S + t] = h[S], e.sCount[S + t] = d[S], e.bsCount[S + t] = c[S];
  return e.blkIndent = w, !0;
}
function F1(e, t, n, r) {
  const i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let s = e.bMarks[t] + e.tShift[t];
  const u = e.src.charCodeAt(s++);
  if (u !== 42 && u !== 45 && u !== 95)
    return !1;
  let a = 1;
  for (; s < i; ) {
    const d = e.src.charCodeAt(s++);
    if (d !== u && !Be(d))
      return !1;
    d === u && a++;
  }
  if (a < 3)
    return !1;
  if (r)
    return !0;
  e.line = t + 1;
  const c = e.push("hr", "hr", 0);
  return c.map = [t, e.line], c.markup = Array(a + 1).join(String.fromCharCode(u)), !0;
}
function ca(e, t) {
  const n = e.eMarks[t];
  let r = e.bMarks[t] + e.tShift[t];
  const i = e.src.charCodeAt(r++);
  if (i !== 42 && i !== 45 && i !== 43)
    return -1;
  if (r < n) {
    const s = e.src.charCodeAt(r);
    if (!Be(s))
      return -1;
  }
  return r;
}
function la(e, t) {
  const n = e.bMarks[t] + e.tShift[t], r = e.eMarks[t];
  let i = n;
  if (i + 1 >= r)
    return -1;
  let s = e.src.charCodeAt(i++);
  if (s < 48 || s > 57)
    return -1;
  for (; ; ) {
    if (i >= r)
      return -1;
    if (s = e.src.charCodeAt(i++), s >= 48 && s <= 57) {
      if (i - n >= 10)
        return -1;
      continue;
    }
    if (s === 41 || s === 46)
      break;
    return -1;
  }
  return i < r && (s = e.src.charCodeAt(i), !Be(s)) ? -1 : i;
}
function N1(e, t) {
  const n = e.level + 2;
  for (let r = t + 2, i = e.tokens.length - 2; r < i; r++)
    e.tokens[r].level === n && e.tokens[r].type === "paragraph_open" && (e.tokens[r + 2].hidden = !0, e.tokens[r].hidden = !0, r += 2);
}
function I1(e, t, n, r) {
  let i, s, u, a, c = t, d = !0;
  if (e.sCount[c] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[c] - e.listIndent >= 4 && e.sCount[c] < e.blkIndent)
    return !1;
  let h = !1;
  r && e.parentType === "paragraph" && e.sCount[c] >= e.blkIndent && (h = !0);
  let p, b, _;
  if ((_ = la(e, c)) >= 0) {
    if (p = !0, u = e.bMarks[c] + e.tShift[c], b = Number(e.src.slice(u, _ - 1)), h && b !== 1) return !1;
  } else if ((_ = ca(e, c)) >= 0)
    p = !1;
  else
    return !1;
  if (h && e.skipSpaces(_) >= e.eMarks[c])
    return !1;
  if (r)
    return !0;
  const g = e.src.charCodeAt(_ - 1), w = e.tokens.length;
  p ? (a = e.push("ordered_list_open", "ol", 1), b !== 1 && (a.attrs = [["start", b]])) : a = e.push("bullet_list_open", "ul", 1);
  const v = [c, 0];
  a.map = v, a.markup = String.fromCharCode(g);
  let E = !1;
  const y = e.md.block.ruler.getRules("list"), S = e.parentType;
  for (e.parentType = "list"; c < n; ) {
    s = _, i = e.eMarks[c];
    const D = e.sCount[c] + _ - (e.bMarks[c] + e.tShift[c]);
    let A = D;
    for (; s < i; ) {
      const ke = e.src.charCodeAt(s);
      if (ke === 9)
        A += 4 - (A + e.bsCount[c]) % 4;
      else if (ke === 32)
        A++;
      else
        break;
      s++;
    }
    const T = s;
    let P;
    T >= i ? P = 1 : P = A - D, P > 4 && (P = 1);
    const j = D + P;
    a = e.push("list_item_open", "li", 1), a.markup = String.fromCharCode(g);
    const J = [c, 0];
    a.map = J, p && (a.info = e.src.slice(u, _ - 1));
    const te = e.tight, _e = e.tShift[c], we = e.sCount[c], je = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = j, e.tight = !0, e.tShift[c] = T - e.bMarks[c], e.sCount[c] = A, T >= i && e.isEmpty(c + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, c, n, !0), (!e.tight || E) && (d = !1), E = e.line - c > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = je, e.tShift[c] = _e, e.sCount[c] = we, e.tight = te, a = e.push("list_item_close", "li", -1), a.markup = String.fromCharCode(g), c = e.line, J[1] = c, c >= n || e.sCount[c] < e.blkIndent || e.sCount[c] - e.blkIndent >= 4)
      break;
    let Te = !1;
    for (let ke = 0, tt = y.length; ke < tt; ke++)
      if (y[ke](e, c, n, !0)) {
        Te = !0;
        break;
      }
    if (Te)
      break;
    if (p) {
      if (_ = la(e, c), _ < 0)
        break;
      u = e.bMarks[c] + e.tShift[c];
    } else if (_ = ca(e, c), _ < 0)
      break;
    if (g !== e.src.charCodeAt(_ - 1))
      break;
  }
  return p ? a = e.push("ordered_list_close", "ol", -1) : a = e.push("bullet_list_close", "ul", -1), a.markup = String.fromCharCode(g), v[1] = c, e.line = c, e.parentType = S, d && N1(e, w), !0;
}
function P1(e, t, n, r) {
  let i = e.bMarks[t] + e.tShift[t], s = e.eMarks[t], u = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(i) !== 91)
    return !1;
  function a(y) {
    const S = e.lineMax;
    if (y >= S || e.isEmpty(y))
      return null;
    let D = !1;
    if (e.sCount[y] - e.blkIndent > 3 && (D = !0), e.sCount[y] < 0 && (D = !0), !D) {
      const P = e.md.block.ruler.getRules("reference"), j = e.parentType;
      e.parentType = "reference";
      let J = !1;
      for (let te = 0, _e = P.length; te < _e; te++)
        if (P[te](e, y, S, !0)) {
          J = !0;
          break;
        }
      if (e.parentType = j, J)
        return null;
    }
    const A = e.bMarks[y] + e.tShift[y], T = e.eMarks[y];
    return e.src.slice(A, T + 1);
  }
  let c = e.src.slice(i, s + 1);
  s = c.length;
  let d = -1;
  for (i = 1; i < s; i++) {
    const y = c.charCodeAt(i);
    if (y === 91)
      return !1;
    if (y === 93) {
      d = i;
      break;
    } else if (y === 10) {
      const S = a(u);
      S !== null && (c += S, s = c.length, u++);
    } else if (y === 92 && (i++, i < s && c.charCodeAt(i) === 10)) {
      const S = a(u);
      S !== null && (c += S, s = c.length, u++);
    }
  }
  if (d < 0 || c.charCodeAt(d + 1) !== 58)
    return !1;
  for (i = d + 2; i < s; i++) {
    const y = c.charCodeAt(i);
    if (y === 10) {
      const S = a(u);
      S !== null && (c += S, s = c.length, u++);
    } else if (!Be(y)) break;
  }
  const h = e.md.helpers.parseLinkDestination(c, i, s);
  if (!h.ok)
    return !1;
  const p = e.md.normalizeLink(h.str);
  if (!e.md.validateLink(p))
    return !1;
  i = h.pos;
  const b = i, _ = u, g = i;
  for (; i < s; i++) {
    const y = c.charCodeAt(i);
    if (y === 10) {
      const S = a(u);
      S !== null && (c += S, s = c.length, u++);
    } else if (!Be(y)) break;
  }
  let w = e.md.helpers.parseLinkTitle(c, i, s);
  for (; w.can_continue; ) {
    const y = a(u);
    if (y === null) break;
    c += y, i = s, s = c.length, u++, w = e.md.helpers.parseLinkTitle(c, i, s, w);
  }
  let v;
  for (i < s && g !== i && w.ok ? (v = w.str, i = w.pos) : (v = "", i = b, u = _); i < s; ) {
    const y = c.charCodeAt(i);
    if (!Be(y))
      break;
    i++;
  }
  if (i < s && c.charCodeAt(i) !== 10 && v)
    for (v = "", i = b, u = _; i < s; ) {
      const y = c.charCodeAt(i);
      if (!Be(y))
        break;
      i++;
    }
  if (i < s && c.charCodeAt(i) !== 10)
    return !1;
  const E = ws(c.slice(1, d));
  return E ? (r || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[E] > "u" && (e.env.references[E] = { title: v, href: p }), e.line = u), !0) : !1;
}
const L1 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], B1 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", q1 = "[^\"'=<>`\\x00-\\x20]+", z1 = "'[^']*'", j1 = '"[^"]*"', U1 = "(?:" + q1 + "|" + z1 + "|" + j1 + ")", H1 = "(?:\\s+" + B1 + "(?:\\s*=\\s*" + U1 + ")?)", xl = "<[A-Za-z][A-Za-z0-9\\-]*" + H1 + "*\\s*\\/?>", yl = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", $1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", W1 = "<[?][\\s\\S]*?[?]>", V1 = "<![A-Za-z][^>]*>", G1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Y1 = new RegExp("^(?:" + xl + "|" + yl + "|" + $1 + "|" + W1 + "|" + V1 + "|" + G1 + ")"), K1 = new RegExp("^(?:" + xl + "|" + yl + ")"), vr = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + L1.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(K1.source + "\\s*$"), /^$/, !1]
];
function Z1(e, t, n, r) {
  let i = e.bMarks[t] + e.tShift[t], s = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(i) !== 60)
    return !1;
  let u = e.src.slice(i, s), a = 0;
  for (; a < vr.length && !vr[a][0].test(u); a++)
    ;
  if (a === vr.length)
    return !1;
  if (r)
    return vr[a][2];
  let c = t + 1;
  if (!vr[a][1].test(u)) {
    for (; c < n && !(e.sCount[c] < e.blkIndent); c++)
      if (i = e.bMarks[c] + e.tShift[c], s = e.eMarks[c], u = e.src.slice(i, s), vr[a][1].test(u)) {
        u.length !== 0 && c++;
        break;
      }
  }
  e.line = c;
  const d = e.push("html_block", "", 0);
  return d.map = [t, c], d.content = e.getLines(t, c, e.blkIndent, !0), !0;
}
function X1(e, t, n, r) {
  let i = e.bMarks[t] + e.tShift[t], s = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let u = e.src.charCodeAt(i);
  if (u !== 35 || i >= s)
    return !1;
  let a = 1;
  for (u = e.src.charCodeAt(++i); u === 35 && i < s && a <= 6; )
    a++, u = e.src.charCodeAt(++i);
  if (a > 6 || i < s && !Be(u))
    return !1;
  if (r)
    return !0;
  s = e.skipSpacesBack(s, i);
  const c = e.skipCharsBack(s, 35, i);
  c > i && Be(e.src.charCodeAt(c - 1)) && (s = c), e.line = t + 1;
  const d = e.push("heading_open", "h" + String(a), 1);
  d.markup = "########".slice(0, a), d.map = [t, e.line];
  const h = e.push("inline", "", 0);
  h.content = e.src.slice(i, s).trim(), h.map = [t, e.line], h.children = [];
  const p = e.push("heading_close", "h" + String(a), -1);
  return p.markup = "########".slice(0, a), !0;
}
function J1(e, t, n) {
  const r = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const i = e.parentType;
  e.parentType = "paragraph";
  let s = 0, u, a = t + 1;
  for (; a < n && !e.isEmpty(a); a++) {
    if (e.sCount[a] - e.blkIndent > 3)
      continue;
    if (e.sCount[a] >= e.blkIndent) {
      let _ = e.bMarks[a] + e.tShift[a];
      const g = e.eMarks[a];
      if (_ < g && (u = e.src.charCodeAt(_), (u === 45 || u === 61) && (_ = e.skipChars(_, u), _ = e.skipSpaces(_), _ >= g))) {
        s = u === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[a] < 0)
      continue;
    let b = !1;
    for (let _ = 0, g = r.length; _ < g; _++)
      if (r[_](e, a, n, !0)) {
        b = !0;
        break;
      }
    if (b)
      break;
  }
  if (!s)
    return !1;
  const c = e.getLines(t, a, e.blkIndent, !1).trim();
  e.line = a + 1;
  const d = e.push("heading_open", "h" + String(s), 1);
  d.markup = String.fromCharCode(u), d.map = [t, e.line];
  const h = e.push("inline", "", 0);
  h.content = c, h.map = [t, e.line - 1], h.children = [];
  const p = e.push("heading_close", "h" + String(s), -1);
  return p.markup = String.fromCharCode(u), e.parentType = i, !0;
}
function Q1(e, t, n) {
  const r = e.md.block.ruler.getRules("paragraph"), i = e.parentType;
  let s = t + 1;
  for (e.parentType = "paragraph"; s < n && !e.isEmpty(s); s++) {
    if (e.sCount[s] - e.blkIndent > 3 || e.sCount[s] < 0)
      continue;
    let d = !1;
    for (let h = 0, p = r.length; h < p; h++)
      if (r[h](e, s, n, !0)) {
        d = !0;
        break;
      }
    if (d)
      break;
  }
  const u = e.getLines(t, s, e.blkIndent, !1).trim();
  e.line = s;
  const a = e.push("paragraph_open", "p", 1);
  a.map = [t, e.line];
  const c = e.push("inline", "", 0);
  return c.content = u, c.map = [t, e.line], c.children = [], e.push("paragraph_close", "p", -1), e.parentType = i, !0;
}
const Pi = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", D1, ["paragraph", "reference"]],
  ["code", O1],
  ["fence", R1, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", M1, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", F1, ["paragraph", "reference", "blockquote", "list"]],
  ["list", I1, ["paragraph", "reference", "blockquote"]],
  ["reference", P1],
  ["html_block", Z1, ["paragraph", "reference", "blockquote"]],
  ["heading", X1, ["paragraph", "reference", "blockquote"]],
  ["lheading", J1],
  ["paragraph", Q1]
];
function ks() {
  this.ruler = new Tt();
  for (let e = 0; e < Pi.length; e++)
    this.ruler.push(Pi[e][0], Pi[e][1], { alt: (Pi[e][2] || []).slice() });
}
ks.prototype.tokenize = function(e, t, n) {
  const r = this.ruler.getRules(""), i = r.length, s = e.md.options.maxNesting;
  let u = t, a = !1;
  for (; u < n && (e.line = u = e.skipEmptyLines(u), !(u >= n || e.sCount[u] < e.blkIndent)); ) {
    if (e.level >= s) {
      e.line = n;
      break;
    }
    const c = e.line;
    let d = !1;
    for (let h = 0; h < i; h++)
      if (d = r[h](e, u, n, !1), d) {
        if (c >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!d) throw new Error("none of the block rules matched");
    e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), u = e.line, u < n && e.isEmpty(u) && (a = !0, u++, e.line = u);
  }
};
ks.prototype.parse = function(e, t, n, r) {
  if (!e)
    return;
  const i = new this.State(e, t, n, r);
  this.tokenize(i, i.line, i.lineMax);
};
ks.prototype.State = xn;
function xi(e, t, n, r) {
  this.src = e, this.env = n, this.md = t, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
xi.prototype.pushPending = function() {
  const e = new un("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
xi.prototype.push = function(e, t, n) {
  this.pending && this.pushPending();
  const r = new un(e, t, n);
  let i = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(i), r;
};
xi.prototype.scanDelims = function(e, t) {
  const n = this.posMax, r = this.src.charCodeAt(e), i = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let s = e;
  for (; s < n && this.src.charCodeAt(s) === r; )
    s++;
  const u = s - e, a = s < n ? this.src.charCodeAt(s) : 32, c = ui(i) || si(String.fromCharCode(i)), d = ui(a) || si(String.fromCharCode(a)), h = ii(i), p = ii(a), b = !p && (!d || h || c), _ = !h && (!c || p || d);
  return { can_open: b && (t || !_ || c), can_close: _ && (t || !b || d), length: u };
};
xi.prototype.Token = un;
function eg(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function tg(e, t) {
  let n = e.pos;
  for (; n < e.posMax && !eg(e.src.charCodeAt(n)); )
    n++;
  return n === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0);
}
const ng = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function rg(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const n = e.pos, r = e.posMax;
  if (n + 3 > r || e.src.charCodeAt(n) !== 58 || e.src.charCodeAt(n + 1) !== 47 || e.src.charCodeAt(n + 2) !== 47) return !1;
  const i = e.pending.match(ng);
  if (!i) return !1;
  const s = i[1], u = e.md.linkify.matchAtStart(e.src.slice(n - s.length));
  if (!u) return !1;
  let a = u.url;
  if (a.length <= s.length) return !1;
  a = a.replace(/\*+$/, "");
  const c = e.md.normalizeLink(a);
  if (!e.md.validateLink(c)) return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -s.length);
    const d = e.push("link_open", "a", 1);
    d.attrs = [["href", c]], d.markup = "linkify", d.info = "auto";
    const h = e.push("text", "", 0);
    h.content = e.md.normalizeLinkText(a);
    const p = e.push("link_close", "a", -1);
    p.markup = "linkify", p.info = "auto";
  }
  return e.pos += a.length - s.length, !0;
}
function ig(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 10)
    return !1;
  const r = e.pending.length - 1, i = e.posMax;
  if (!t)
    if (r >= 0 && e.pending.charCodeAt(r) === 32)
      if (r >= 1 && e.pending.charCodeAt(r - 1) === 32) {
        let s = r - 1;
        for (; s >= 1 && e.pending.charCodeAt(s - 1) === 32; ) s--;
        e.pending = e.pending.slice(0, s), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (n++; n < i && Be(e.src.charCodeAt(n)); )
    n++;
  return e.pos = n, !0;
}
const so = [];
for (let e = 0; e < 256; e++)
  so.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  so[e.charCodeAt(0)] = 1;
});
function sg(e, t) {
  let n = e.pos;
  const r = e.posMax;
  if (e.src.charCodeAt(n) !== 92 || (n++, n >= r)) return !1;
  let i = e.src.charCodeAt(n);
  if (i === 10) {
    for (t || e.push("hardbreak", "br", 0), n++; n < r && (i = e.src.charCodeAt(n), !!Be(i)); )
      n++;
    return e.pos = n, !0;
  }
  let s = e.src[n];
  if (i >= 55296 && i <= 56319 && n + 1 < r) {
    const a = e.src.charCodeAt(n + 1);
    a >= 56320 && a <= 57343 && (s += e.src[n + 1], n++);
  }
  const u = "\\" + s;
  if (!t) {
    const a = e.push("text_special", "", 0);
    i < 256 && so[i] !== 0 ? a.content = s : a.content = u, a.markup = u, a.info = "escape";
  }
  return e.pos = n + 1, !0;
}
function ug(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 96)
    return !1;
  const i = n;
  n++;
  const s = e.posMax;
  for (; n < s && e.src.charCodeAt(n) === 96; )
    n++;
  const u = e.src.slice(i, n), a = u.length;
  if (e.backticksScanned && (e.backticks[a] || 0) <= i)
    return t || (e.pending += u), e.pos += a, !0;
  let c = n, d;
  for (; (d = e.src.indexOf("`", c)) !== -1; ) {
    for (c = d + 1; c < s && e.src.charCodeAt(c) === 96; )
      c++;
    const h = c - d;
    if (h === a) {
      if (!t) {
        const p = e.push("code_inline", "code", 0);
        p.markup = u, p.content = e.src.slice(n, d).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = c, !0;
    }
    e.backticks[h] = d;
  }
  return e.backticksScanned = !0, t || (e.pending += u), e.pos += a, !0;
}
function og(e, t) {
  const n = e.pos, r = e.src.charCodeAt(n);
  if (t || r !== 126)
    return !1;
  const i = e.scanDelims(e.pos, !0);
  let s = i.length;
  const u = String.fromCharCode(r);
  if (s < 2)
    return !1;
  let a;
  s % 2 && (a = e.push("text", "", 0), a.content = u, s--);
  for (let c = 0; c < s; c += 2)
    a = e.push("text", "", 0), a.content = u + u, e.delimiters.push({
      marker: r,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: i.can_open,
      close: i.can_close
    });
  return e.pos += i.length, !0;
}
function da(e, t) {
  let n;
  const r = [], i = t.length;
  for (let s = 0; s < i; s++) {
    const u = t[s];
    if (u.marker !== 126 || u.end === -1)
      continue;
    const a = t[u.end];
    n = e.tokens[u.token], n.type = "s_open", n.tag = "s", n.nesting = 1, n.markup = "~~", n.content = "", n = e.tokens[a.token], n.type = "s_close", n.tag = "s", n.nesting = -1, n.markup = "~~", n.content = "", e.tokens[a.token - 1].type === "text" && e.tokens[a.token - 1].content === "~" && r.push(a.token - 1);
  }
  for (; r.length; ) {
    const s = r.pop();
    let u = s + 1;
    for (; u < e.tokens.length && e.tokens[u].type === "s_close"; )
      u++;
    u--, s !== u && (n = e.tokens[u], e.tokens[u] = e.tokens[s], e.tokens[s] = n);
  }
}
function ag(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  da(e, e.delimiters);
  for (let r = 0; r < n; r++)
    t[r] && t[r].delimiters && da(e, t[r].delimiters);
}
const wl = {
  tokenize: og,
  postProcess: ag
};
function cg(e, t) {
  const n = e.pos, r = e.src.charCodeAt(n);
  if (t || r !== 95 && r !== 42)
    return !1;
  const i = e.scanDelims(e.pos, r === 42);
  for (let s = 0; s < i.length; s++) {
    const u = e.push("text", "", 0);
    u.content = String.fromCharCode(r), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: r,
      // Total length of these series of delimiters.
      //
      length: i.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: i.can_open,
      close: i.can_close
    });
  }
  return e.pos += i.length, !0;
}
function fa(e, t) {
  const n = t.length;
  for (let r = n - 1; r >= 0; r--) {
    const i = t[r];
    if (i.marker !== 95 && i.marker !== 42 || i.end === -1)
      continue;
    const s = t[i.end], u = r > 0 && t[r - 1].end === i.end + 1 && // check that first two markers match and adjacent
    t[r - 1].marker === i.marker && t[r - 1].token === i.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[i.end + 1].token === s.token + 1, a = String.fromCharCode(i.marker), c = e.tokens[i.token];
    c.type = u ? "strong_open" : "em_open", c.tag = u ? "strong" : "em", c.nesting = 1, c.markup = u ? a + a : a, c.content = "";
    const d = e.tokens[s.token];
    d.type = u ? "strong_close" : "em_close", d.tag = u ? "strong" : "em", d.nesting = -1, d.markup = u ? a + a : a, d.content = "", u && (e.tokens[t[r - 1].token].content = "", e.tokens[t[i.end + 1].token].content = "", r--);
  }
}
function lg(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  fa(e, e.delimiters);
  for (let r = 0; r < n; r++)
    t[r] && t[r].delimiters && fa(e, t[r].delimiters);
}
const kl = {
  tokenize: cg,
  postProcess: lg
};
function dg(e, t) {
  let n, r, i, s, u = "", a = "", c = e.pos, d = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const h = e.pos, p = e.posMax, b = e.pos + 1, _ = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (_ < 0)
    return !1;
  let g = _ + 1;
  if (g < p && e.src.charCodeAt(g) === 40) {
    for (d = !1, g++; g < p && (n = e.src.charCodeAt(g), !(!Be(n) && n !== 10)); g++)
      ;
    if (g >= p)
      return !1;
    if (c = g, i = e.md.helpers.parseLinkDestination(e.src, g, e.posMax), i.ok) {
      for (u = e.md.normalizeLink(i.str), e.md.validateLink(u) ? g = i.pos : u = "", c = g; g < p && (n = e.src.charCodeAt(g), !(!Be(n) && n !== 10)); g++)
        ;
      if (i = e.md.helpers.parseLinkTitle(e.src, g, e.posMax), g < p && c !== g && i.ok)
        for (a = i.str, g = i.pos; g < p && (n = e.src.charCodeAt(g), !(!Be(n) && n !== 10)); g++)
          ;
    }
    (g >= p || e.src.charCodeAt(g) !== 41) && (d = !0), g++;
  }
  if (d) {
    if (typeof e.env.references > "u")
      return !1;
    if (g < p && e.src.charCodeAt(g) === 91 ? (c = g + 1, g = e.md.helpers.parseLinkLabel(e, g), g >= 0 ? r = e.src.slice(c, g++) : g = _ + 1) : g = _ + 1, r || (r = e.src.slice(b, _)), s = e.env.references[ws(r)], !s)
      return e.pos = h, !1;
    u = s.href, a = s.title;
  }
  if (!t) {
    e.pos = b, e.posMax = _;
    const w = e.push("link_open", "a", 1), v = [["href", u]];
    w.attrs = v, a && v.push(["title", a]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = g, e.posMax = p, !0;
}
function fg(e, t) {
  let n, r, i, s, u, a, c, d, h = "";
  const p = e.pos, b = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const _ = e.pos + 2, g = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (g < 0)
    return !1;
  if (s = g + 1, s < b && e.src.charCodeAt(s) === 40) {
    for (s++; s < b && (n = e.src.charCodeAt(s), !(!Be(n) && n !== 10)); s++)
      ;
    if (s >= b)
      return !1;
    for (d = s, a = e.md.helpers.parseLinkDestination(e.src, s, e.posMax), a.ok && (h = e.md.normalizeLink(a.str), e.md.validateLink(h) ? s = a.pos : h = ""), d = s; s < b && (n = e.src.charCodeAt(s), !(!Be(n) && n !== 10)); s++)
      ;
    if (a = e.md.helpers.parseLinkTitle(e.src, s, e.posMax), s < b && d !== s && a.ok)
      for (c = a.str, s = a.pos; s < b && (n = e.src.charCodeAt(s), !(!Be(n) && n !== 10)); s++)
        ;
    else
      c = "";
    if (s >= b || e.src.charCodeAt(s) !== 41)
      return e.pos = p, !1;
    s++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (s < b && e.src.charCodeAt(s) === 91 ? (d = s + 1, s = e.md.helpers.parseLinkLabel(e, s), s >= 0 ? i = e.src.slice(d, s++) : s = g + 1) : s = g + 1, i || (i = e.src.slice(_, g)), u = e.env.references[ws(i)], !u)
      return e.pos = p, !1;
    h = u.href, c = u.title;
  }
  if (!t) {
    r = e.src.slice(_, g);
    const w = [];
    e.md.inline.parse(
      r,
      e.md,
      e.env,
      w
    );
    const v = e.push("image", "img", 0), E = [["src", h], ["alt", ""]];
    v.attrs = E, v.children = w, v.content = r, c && E.push(["title", c]);
  }
  return e.pos = s, e.posMax = b, !0;
}
const hg = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, pg = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function gg(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 60)
    return !1;
  const r = e.pos, i = e.posMax;
  for (; ; ) {
    if (++n >= i) return !1;
    const u = e.src.charCodeAt(n);
    if (u === 60) return !1;
    if (u === 62) break;
  }
  const s = e.src.slice(r + 1, n);
  if (pg.test(s)) {
    const u = e.md.normalizeLink(s);
    if (!e.md.validateLink(u))
      return !1;
    if (!t) {
      const a = e.push("link_open", "a", 1);
      a.attrs = [["href", u]], a.markup = "autolink", a.info = "auto";
      const c = e.push("text", "", 0);
      c.content = e.md.normalizeLinkText(s);
      const d = e.push("link_close", "a", -1);
      d.markup = "autolink", d.info = "auto";
    }
    return e.pos += s.length + 2, !0;
  }
  if (hg.test(s)) {
    const u = e.md.normalizeLink("mailto:" + s);
    if (!e.md.validateLink(u))
      return !1;
    if (!t) {
      const a = e.push("link_open", "a", 1);
      a.attrs = [["href", u]], a.markup = "autolink", a.info = "auto";
      const c = e.push("text", "", 0);
      c.content = e.md.normalizeLinkText(s);
      const d = e.push("link_close", "a", -1);
      d.markup = "autolink", d.info = "auto";
    }
    return e.pos += s.length + 2, !0;
  }
  return !1;
}
function bg(e) {
  return /^<a[>\s]/i.test(e);
}
function mg(e) {
  return /^<\/a\s*>/i.test(e);
}
function _g(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function vg(e, t) {
  if (!e.md.options.html)
    return !1;
  const n = e.posMax, r = e.pos;
  if (e.src.charCodeAt(r) !== 60 || r + 2 >= n)
    return !1;
  const i = e.src.charCodeAt(r + 1);
  if (i !== 33 && i !== 63 && i !== 47 && !_g(i))
    return !1;
  const s = e.src.slice(r).match(Y1);
  if (!s)
    return !1;
  if (!t) {
    const u = e.push("html_inline", "", 0);
    u.content = s[0], bg(u.content) && e.linkLevel++, mg(u.content) && e.linkLevel--;
  }
  return e.pos += s[0].length, !0;
}
const xg = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, yg = /^&([a-z][a-z0-9]{1,31});/i;
function wg(e, t) {
  const n = e.pos, r = e.posMax;
  if (e.src.charCodeAt(n) !== 38 || n + 1 >= r) return !1;
  if (e.src.charCodeAt(n + 1) === 35) {
    const s = e.src.slice(n).match(xg);
    if (s) {
      if (!t) {
        const u = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), a = e.push("text_special", "", 0);
        a.content = ro(u) ? is(u) : is(65533), a.markup = s[0], a.info = "entity";
      }
      return e.pos += s[0].length, !0;
    }
  } else {
    const s = e.src.slice(n).match(yg);
    if (s) {
      const u = gl(s[0]);
      if (u !== s[0]) {
        if (!t) {
          const a = e.push("text_special", "", 0);
          a.content = u, a.markup = s[0], a.info = "entity";
        }
        return e.pos += s[0].length, !0;
      }
    }
  }
  return !1;
}
function ha(e) {
  const t = {}, n = e.length;
  if (!n) return;
  let r = 0, i = -2;
  const s = [];
  for (let u = 0; u < n; u++) {
    const a = e[u];
    if (s.push(0), (e[r].marker !== a.marker || i !== a.token - 1) && (r = u), i = a.token, a.length = a.length || 0, !a.close) continue;
    t.hasOwnProperty(a.marker) || (t[a.marker] = [-1, -1, -1, -1, -1, -1]);
    const c = t[a.marker][(a.open ? 3 : 0) + a.length % 3];
    let d = r - s[r] - 1, h = d;
    for (; d > c; d -= s[d] + 1) {
      const p = e[d];
      if (p.marker === a.marker && p.open && p.end < 0) {
        let b = !1;
        if ((p.close || a.open) && (p.length + a.length) % 3 === 0 && (p.length % 3 !== 0 || a.length % 3 !== 0) && (b = !0), !b) {
          const _ = d > 0 && !e[d - 1].open ? s[d - 1] + 1 : 0;
          s[u] = u - d + _, s[d] = _, a.open = !1, p.end = u, p.close = !1, h = -1, i = -2;
          break;
        }
      }
    }
    h !== -1 && (t[a.marker][(a.open ? 3 : 0) + (a.length || 0) % 3] = h);
  }
}
function kg(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  ha(e.delimiters);
  for (let r = 0; r < n; r++)
    t[r] && t[r].delimiters && ha(t[r].delimiters);
}
function Eg(e) {
  let t, n, r = 0;
  const i = e.tokens, s = e.tokens.length;
  for (t = n = 0; t < s; t++)
    i[t].nesting < 0 && r--, i[t].level = r, i[t].nesting > 0 && r++, i[t].type === "text" && t + 1 < s && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== n && (i[n] = i[t]), n++);
  t !== n && (i.length = n);
}
const eu = [
  ["text", tg],
  ["linkify", rg],
  ["newline", ig],
  ["escape", sg],
  ["backticks", ug],
  ["strikethrough", wl.tokenize],
  ["emphasis", kl.tokenize],
  ["link", dg],
  ["image", fg],
  ["autolink", gg],
  ["html_inline", vg],
  ["entity", wg]
], tu = [
  ["balance_pairs", kg],
  ["strikethrough", wl.postProcess],
  ["emphasis", kl.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", Eg]
];
function yi() {
  this.ruler = new Tt();
  for (let e = 0; e < eu.length; e++)
    this.ruler.push(eu[e][0], eu[e][1]);
  this.ruler2 = new Tt();
  for (let e = 0; e < tu.length; e++)
    this.ruler2.push(tu[e][0], tu[e][1]);
}
yi.prototype.skipToken = function(e) {
  const t = e.pos, n = this.ruler.getRules(""), r = n.length, i = e.md.options.maxNesting, s = e.cache;
  if (typeof s[t] < "u") {
    e.pos = s[t];
    return;
  }
  let u = !1;
  if (e.level < i) {
    for (let a = 0; a < r; a++)
      if (e.level++, u = n[a](e, !0), e.level--, u) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  u || e.pos++, s[t] = e.pos;
};
yi.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), n = t.length, r = e.posMax, i = e.md.options.maxNesting;
  for (; e.pos < r; ) {
    const s = e.pos;
    let u = !1;
    if (e.level < i) {
      for (let a = 0; a < n; a++)
        if (u = t[a](e, !1), u) {
          if (s >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (u) {
      if (e.pos >= r)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
yi.prototype.parse = function(e, t, n, r) {
  const i = new this.State(e, t, n, r);
  this.tokenize(i);
  const s = this.ruler2.getRules(""), u = s.length;
  for (let a = 0; a < u; a++)
    s[a](i);
};
yi.prototype.State = xi;
function Cg(e) {
  const t = {};
  e = e || {}, t.src_Any = ll.source, t.src_Cc = dl.source, t.src_Z = hl.source, t.src_P = to.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const n = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Au(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    n && Object.keys(n).forEach(function(r) {
      e[r] = n[r];
    });
  }), e;
}
function Es(e) {
  return Object.prototype.toString.call(e);
}
function Sg(e) {
  return Es(e) === "[object String]";
}
function Ag(e) {
  return Es(e) === "[object Object]";
}
function Tg(e) {
  return Es(e) === "[object RegExp]";
}
function pa(e) {
  return Es(e) === "[object Function]";
}
function Dg(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const El = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Og(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t || El.hasOwnProperty(n);
  }, !1);
}
const Rg = {
  "http:": {
    validate: function(e, t, n) {
      const r = e.slice(t);
      return n.re.http || (n.re.http = new RegExp(
        "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
        "i"
      )), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, n) {
      const r = e.slice(t);
      return n.re.no_http || (n.re.no_http = new RegExp(
        "^" + n.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
        "i"
      )), n.re.no_http.test(r) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, n) {
      const r = e.slice(t);
      return n.re.mailto || (n.re.mailto = new RegExp(
        "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
        "i"
      )), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0;
    }
  }
}, Mg = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Fg = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function Ng(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function Ig(e) {
  return function(t, n) {
    const r = t.slice(n);
    return e.test(r) ? r.match(e)[0].length : 0;
  };
}
function ga() {
  return function(e, t) {
    t.normalize(e);
  };
}
function ss(e) {
  const t = e.re = Cg(e.__opts__), n = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || n.push(Mg), n.push(t.src_xn), t.src_tlds = n.join("|");
  function r(a) {
    return a.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
  const i = [];
  e.__compiled__ = {};
  function s(a, c) {
    throw new Error('(LinkifyIt) Invalid schema "' + a + '": ' + c);
  }
  Object.keys(e.__schemas__).forEach(function(a) {
    const c = e.__schemas__[a];
    if (c === null)
      return;
    const d = { validate: null, link: null };
    if (e.__compiled__[a] = d, Ag(c)) {
      Tg(c.validate) ? d.validate = Ig(c.validate) : pa(c.validate) ? d.validate = c.validate : s(a, c), pa(c.normalize) ? d.normalize = c.normalize : c.normalize ? s(a, c) : d.normalize = ga();
      return;
    }
    if (Sg(c)) {
      i.push(a);
      return;
    }
    s(a, c);
  }), i.forEach(function(a) {
    e.__compiled__[e.__schemas__[a]] && (e.__compiled__[a].validate = e.__compiled__[e.__schemas__[a]].validate, e.__compiled__[a].normalize = e.__compiled__[e.__schemas__[a]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: ga() };
  const u = Object.keys(e.__compiled__).filter(function(a) {
    return a.length > 0 && e.__compiled__[a];
  }).map(Dg).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Ng(e);
}
function Pg(e, t) {
  const n = e.__index__, r = e.__last_index__, i = e.__text_cache__.slice(n, r);
  this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = i, this.text = i, this.url = i;
}
function Tu(e, t) {
  const n = new Pg(e, t);
  return e.__compiled__[n.schema].normalize(n, e), n;
}
function Lt(e, t) {
  if (!(this instanceof Lt))
    return new Lt(e, t);
  t || Og(e) && (t = e, e = {}), this.__opts__ = Au({}, El, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Au({}, Rg, e), this.__compiled__ = {}, this.__tlds__ = Fg, this.__tlds_replaced__ = !1, this.re = {}, ss(this);
}
Lt.prototype.add = function(t, n) {
  return this.__schemas__[t] = n, ss(this), this;
};
Lt.prototype.set = function(t) {
  return this.__opts__ = Au(this.__opts__, t), this;
};
Lt.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let n, r, i, s, u, a, c, d, h;
  if (this.re.schema_test.test(t)) {
    for (c = this.re.schema_search, c.lastIndex = 0; (n = c.exec(t)) !== null; )
      if (s = this.testSchemaAt(t, n[2], c.lastIndex), s) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + s;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = t.search(this.re.host_fuzzy_test), d >= 0 && (this.__index__ < 0 || d < this.__index__) && (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (u = r.index + r[1].length, (this.__index__ < 0 || u < this.__index__) && (this.__schema__ = "", this.__index__ = u, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (h = t.indexOf("@"), h >= 0 && (i = t.match(this.re.email_fuzzy)) !== null && (u = i.index + i[1].length, a = i.index + i[0].length, (this.__index__ < 0 || u < this.__index__ || u === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = u, this.__last_index__ = a))), this.__index__ >= 0;
};
Lt.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Lt.prototype.testSchemaAt = function(t, n, r) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(t, r, this) : 0;
};
Lt.prototype.match = function(t) {
  const n = [];
  let r = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (n.push(Tu(this, r)), r = this.__last_index__);
  let i = r ? t.slice(r) : t;
  for (; this.test(i); )
    n.push(Tu(this, r)), i = i.slice(this.__last_index__), r += this.__last_index__;
  return n.length ? n : null;
};
Lt.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const n = this.re.schema_at_start.exec(t);
  if (!n) return null;
  const r = this.testSchemaAt(t, n[2], n[0].length);
  return r ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + r, Tu(this, 0)) : null;
};
Lt.prototype.tlds = function(t, n) {
  return t = Array.isArray(t) ? t : [t], n ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(r, i, s) {
    return r !== s[i - 1];
  }).reverse(), ss(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, ss(this), this);
};
Lt.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Lt.prototype.onCompile = function() {
};
const wr = 2147483647, bn = 36, uo = 1, oi = 26, Lg = 38, Bg = 700, Cl = 72, Sl = 128, Al = "-", qg = /^xn--/, zg = /[^\0-\x7F]/, jg = /[\x2E\u3002\uFF0E\uFF61]/g, Ug = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, nu = bn - uo, mn = Math.floor, ru = String.fromCharCode;
function qn(e) {
  throw new RangeError(Ug[e]);
}
function Hg(e, t) {
  const n = [];
  let r = e.length;
  for (; r--; )
    n[r] = t(e[r]);
  return n;
}
function Tl(e, t) {
  const n = e.split("@");
  let r = "";
  n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(jg, ".");
  const i = e.split("."), s = Hg(i, t).join(".");
  return r + s;
}
function Dl(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320 ? t.push(((i & 1023) << 10) + (s & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
const $g = (e) => String.fromCodePoint(...e), Wg = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : bn;
}, ba = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, Ol = function(e, t, n) {
  let r = 0;
  for (e = n ? mn(e / Bg) : e >> 1, e += mn(e / t); e > nu * oi >> 1; r += bn)
    e = mn(e / nu);
  return mn(r + (nu + 1) * e / (e + Lg));
}, Rl = function(e) {
  const t = [], n = e.length;
  let r = 0, i = Sl, s = Cl, u = e.lastIndexOf(Al);
  u < 0 && (u = 0);
  for (let a = 0; a < u; ++a)
    e.charCodeAt(a) >= 128 && qn("not-basic"), t.push(e.charCodeAt(a));
  for (let a = u > 0 ? u + 1 : 0; a < n; ) {
    const c = r;
    for (let h = 1, p = bn; ; p += bn) {
      a >= n && qn("invalid-input");
      const b = Wg(e.charCodeAt(a++));
      b >= bn && qn("invalid-input"), b > mn((wr - r) / h) && qn("overflow"), r += b * h;
      const _ = p <= s ? uo : p >= s + oi ? oi : p - s;
      if (b < _)
        break;
      const g = bn - _;
      h > mn(wr / g) && qn("overflow"), h *= g;
    }
    const d = t.length + 1;
    s = Ol(r - c, d, c == 0), mn(r / d) > wr - i && qn("overflow"), i += mn(r / d), r %= d, t.splice(r++, 0, i);
  }
  return String.fromCodePoint(...t);
}, Ml = function(e) {
  const t = [];
  e = Dl(e);
  const n = e.length;
  let r = Sl, i = 0, s = Cl;
  for (const c of e)
    c < 128 && t.push(ru(c));
  const u = t.length;
  let a = u;
  for (u && t.push(Al); a < n; ) {
    let c = wr;
    for (const h of e)
      h >= r && h < c && (c = h);
    const d = a + 1;
    c - r > mn((wr - i) / d) && qn("overflow"), i += (c - r) * d, r = c;
    for (const h of e)
      if (h < r && ++i > wr && qn("overflow"), h === r) {
        let p = i;
        for (let b = bn; ; b += bn) {
          const _ = b <= s ? uo : b >= s + oi ? oi : b - s;
          if (p < _)
            break;
          const g = p - _, w = bn - _;
          t.push(
            ru(ba(_ + g % w, 0))
          ), p = mn(g / w);
        }
        t.push(ru(ba(p, 0))), s = Ol(i, d, a === u), i = 0, ++a;
      }
    ++i, ++r;
  }
  return t.join("");
}, Vg = function(e) {
  return Tl(e, function(t) {
    return qg.test(t) ? Rl(t.slice(4).toLowerCase()) : t;
  });
}, Gg = function(e) {
  return Tl(e, function(t) {
    return zg.test(t) ? "xn--" + Ml(t) : t;
  });
}, Fl = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Dl,
    encode: $g
  },
  decode: Rl,
  encode: Ml,
  toASCII: Gg,
  toUnicode: Vg
}, Yg = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Kg = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, Zg = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Xg = {
  default: Yg,
  zero: Kg,
  commonmark: Zg
}, Jg = /^(vbscript|javascript|file|data):/, Qg = /^data:image\/(gif|png|jpeg|webp);/;
function eb(e) {
  const t = e.trim().toLowerCase();
  return Jg.test(t) ? Qg.test(t) : !0;
}
const Nl = ["http:", "https:", "mailto:"];
function tb(e) {
  const t = eo(e, !0);
  if (t.hostname && (!t.protocol || Nl.indexOf(t.protocol) >= 0))
    try {
      t.hostname = Fl.toASCII(t.hostname);
    } catch {
    }
  return vi(Qu(t));
}
function nb(e) {
  const t = eo(e, !0);
  if (t.hostname && (!t.protocol || Nl.indexOf(t.protocol) >= 0))
    try {
      t.hostname = Fl.toUnicode(t.hostname);
    } catch {
    }
  return Dr(Qu(t), Dr.defaultChars + "%");
}
function Vt(e, t) {
  if (!(this instanceof Vt))
    return new Vt(e, t);
  t || no(e) || (t = e || {}, e = "default"), this.inline = new yi(), this.block = new ks(), this.core = new io(), this.renderer = new Pr(), this.linkify = new Lt(), this.validateLink = eb, this.normalizeLink = tb, this.normalizeLinkText = nb, this.utils = i1, this.helpers = ys({}, a1), this.options = {}, this.configure(e), t && this.set(t);
}
Vt.prototype.set = function(e) {
  return ys(this.options, e), this;
};
Vt.prototype.configure = function(e) {
  const t = this;
  if (no(e)) {
    const n = e;
    if (e = Xg[n], !e)
      throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(n) {
    e.components[n].rules && t[n].ruler.enableOnly(e.components[n].rules), e.components[n].rules2 && t[n].ruler2.enableOnly(e.components[n].rules2);
  }), this;
};
Vt.prototype.enable = function(e, t) {
  let n = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(i) {
    n = n.concat(this[i].ruler.enable(e, !0));
  }, this), n = n.concat(this.inline.ruler2.enable(e, !0));
  const r = e.filter(function(i) {
    return n.indexOf(i) < 0;
  });
  if (r.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
Vt.prototype.disable = function(e, t) {
  let n = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(i) {
    n = n.concat(this[i].ruler.disable(e, !0));
  }, this), n = n.concat(this.inline.ruler2.disable(e, !0));
  const r = e.filter(function(i) {
    return n.indexOf(i) < 0;
  });
  if (r.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
Vt.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
Vt.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const n = new this.core.State(e, this, t);
  return this.core.process(n), n.tokens;
};
Vt.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
Vt.prototype.parseInline = function(e, t) {
  const n = new this.core.State(e, this, t);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
Vt.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
var iu, ma;
function rb() {
  if (ma) return iu;
  ma = 1;
  function e(k) {
    return k instanceof Map ? k.clear = k.delete = k.set = function() {
      throw new Error("map is read-only");
    } : k instanceof Set && (k.add = k.clear = k.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(k), Object.getOwnPropertyNames(k).forEach((N) => {
      const z = k[N], X = typeof z;
      (X === "object" || X === "function") && !Object.isFrozen(z) && e(z);
    }), k;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(N) {
      N.data === void 0 && (N.data = {}), this.data = N.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(k) {
    return k.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(k, ...N) {
    const z = /* @__PURE__ */ Object.create(null);
    for (const X in k)
      z[X] = k[X];
    return N.forEach(function(X) {
      for (const R in X)
        z[R] = X[R];
    }), /** @type {T} */
    z;
  }
  const i = "</span>", s = (k) => !!k.scope, u = (k, { prefix: N }) => {
    if (k.startsWith("language:"))
      return k.replace("language:", "language-");
    if (k.includes(".")) {
      const z = k.split(".");
      return [
        `${N}${z.shift()}`,
        ...z.map((X, R) => `${X}${"_".repeat(R + 1)}`)
      ].join(" ");
    }
    return `${N}${k}`;
  };
  class a {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(N, z) {
      this.buffer = "", this.classPrefix = z.classPrefix, N.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(N) {
      this.buffer += n(N);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(N) {
      if (!s(N)) return;
      const z = u(
        N.scope,
        { prefix: this.classPrefix }
      );
      this.span(z);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(N) {
      s(N) && (this.buffer += i);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(N) {
      this.buffer += `<span class="${N}">`;
    }
  }
  const c = (k = {}) => {
    const N = { children: [] };
    return Object.assign(N, k), N;
  };
  class d {
    constructor() {
      this.rootNode = c(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(N) {
      this.top.children.push(N);
    }
    /** @param {string} scope */
    openNode(N) {
      const z = c({ scope: N });
      this.add(z), this.stack.push(z);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(N) {
      return this.constructor._walk(N, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(N, z) {
      return typeof z == "string" ? N.addText(z) : z.children && (N.openNode(z), z.children.forEach((X) => this._walk(N, X)), N.closeNode(z)), N;
    }
    /**
     * @param {Node} node
     */
    static _collapse(N) {
      typeof N != "string" && N.children && (N.children.every((z) => typeof z == "string") ? N.children = [N.children.join("")] : N.children.forEach((z) => {
        d._collapse(z);
      }));
    }
  }
  class h extends d {
    /**
     * @param {*} options
     */
    constructor(N) {
      super(), this.options = N;
    }
    /**
     * @param {string} text
     */
    addText(N) {
      N !== "" && this.add(N);
    }
    /** @param {string} scope */
    startScope(N) {
      this.openNode(N);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(N, z) {
      const X = N.root;
      z && (X.scope = `language:${z}`), this.add(X);
    }
    toHTML() {
      return new a(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function p(k) {
    return k ? typeof k == "string" ? k : k.source : null;
  }
  function b(k) {
    return w("(?=", k, ")");
  }
  function _(k) {
    return w("(?:", k, ")*");
  }
  function g(k) {
    return w("(?:", k, ")?");
  }
  function w(...k) {
    return k.map((z) => p(z)).join("");
  }
  function v(k) {
    const N = k[k.length - 1];
    return typeof N == "object" && N.constructor === Object ? (k.splice(k.length - 1, 1), N) : {};
  }
  function E(...k) {
    return "(" + (v(k).capture ? "" : "?:") + k.map((X) => p(X)).join("|") + ")";
  }
  function y(k) {
    return new RegExp(k.toString() + "|").exec("").length - 1;
  }
  function S(k, N) {
    const z = k && k.exec(N);
    return z && z.index === 0;
  }
  const D = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function A(k, { joinWith: N }) {
    let z = 0;
    return k.map((X) => {
      z += 1;
      const R = z;
      let B = p(X), M = "";
      for (; B.length > 0; ) {
        const I = D.exec(B);
        if (!I) {
          M += B;
          break;
        }
        M += B.substring(0, I.index), B = B.substring(I.index + I[0].length), I[0][0] === "\\" && I[1] ? M += "\\" + String(Number(I[1]) + R) : (M += I[0], I[0] === "(" && z++);
      }
      return M;
    }).map((X) => `(${X})`).join(N);
  }
  const T = /\b\B/, P = "[a-zA-Z]\\w*", j = "[a-zA-Z_]\\w*", J = "\\b\\d+(\\.\\d+)?", te = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", _e = "\\b(0b[01]+)", we = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", je = (k = {}) => {
    const N = /^#![ ]*\//;
    return k.binary && (k.begin = w(
      N,
      /.*\b/,
      k.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: N,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (z, X) => {
        z.index !== 0 && X.ignoreMatch();
      }
    }, k);
  }, Te = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, ke = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [Te]
  }, tt = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [Te]
  }, Bt = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, qe = function(k, N, z = {}) {
    const X = r(
      {
        scope: "comment",
        begin: k,
        end: N,
        contains: []
      },
      z
    );
    X.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const R = E(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return X.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: w(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          R,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), X;
  }, nt = qe("//", "$"), Dt = qe("/\\*", "\\*/"), qt = qe("#", "$"), st = {
    scope: "number",
    begin: J,
    relevance: 0
  }, zt = {
    scope: "number",
    begin: te,
    relevance: 0
  }, On = {
    scope: "number",
    begin: _e,
    relevance: 0
  }, $e = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      Te,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [Te]
      }
    ]
  }, De = {
    scope: "title",
    begin: P,
    relevance: 0
  }, Kn = {
    scope: "title",
    begin: j,
    relevance: 0
  }, Rn = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + j,
    relevance: 0
  };
  var Ot = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: ke,
    BACKSLASH_ESCAPE: Te,
    BINARY_NUMBER_MODE: On,
    BINARY_NUMBER_RE: _e,
    COMMENT: qe,
    C_BLOCK_COMMENT_MODE: Dt,
    C_LINE_COMMENT_MODE: nt,
    C_NUMBER_MODE: zt,
    C_NUMBER_RE: te,
    END_SAME_AS_BEGIN: function(k) {
      return Object.assign(
        k,
        {
          /** @type {ModeCallback} */
          "on:begin": (N, z) => {
            z.data._beginMatch = N[1];
          },
          /** @type {ModeCallback} */
          "on:end": (N, z) => {
            z.data._beginMatch !== N[1] && z.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: qt,
    IDENT_RE: P,
    MATCH_NOTHING_RE: T,
    METHOD_GUARD: Rn,
    NUMBER_MODE: st,
    NUMBER_RE: J,
    PHRASAL_WORDS_MODE: Bt,
    QUOTE_STRING_MODE: tt,
    REGEXP_MODE: $e,
    RE_STARTERS_RE: we,
    SHEBANG: je,
    TITLE_MODE: De,
    UNDERSCORE_IDENT_RE: j,
    UNDERSCORE_TITLE_MODE: Kn
  });
  function Zn(k, N) {
    k.input[k.index - 1] === "." && N.ignoreMatch();
  }
  function yt(k, N) {
    k.className !== void 0 && (k.scope = k.className, delete k.className);
  }
  function Mn(k, N) {
    N && k.beginKeywords && (k.begin = "\\b(" + k.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", k.__beforeBegin = Zn, k.keywords = k.keywords || k.beginKeywords, delete k.beginKeywords, k.relevance === void 0 && (k.relevance = 0));
  }
  function yn(k, N) {
    Array.isArray(k.illegal) && (k.illegal = E(...k.illegal));
  }
  function Fn(k, N) {
    if (k.match) {
      if (k.begin || k.end) throw new Error("begin & end are not supported with match");
      k.begin = k.match, delete k.match;
    }
  }
  function Z(k, N) {
    k.relevance === void 0 && (k.relevance = 1);
  }
  const ne = (k, N) => {
    if (!k.beforeMatch) return;
    if (k.starts) throw new Error("beforeMatch cannot be used with starts");
    const z = Object.assign({}, k);
    Object.keys(k).forEach((X) => {
      delete k[X];
    }), k.keywords = z.keywords, k.begin = w(z.beforeMatch, b(z.begin)), k.starts = {
      relevance: 0,
      contains: [
        Object.assign(z, { endsParent: !0 })
      ]
    }, k.relevance = 0, delete z.beforeMatch;
  }, ve = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Pe = "keyword";
  function ge(k, N, z = Pe) {
    const X = /* @__PURE__ */ Object.create(null);
    return typeof k == "string" ? R(z, k.split(" ")) : Array.isArray(k) ? R(z, k) : Object.keys(k).forEach(function(B) {
      Object.assign(
        X,
        ge(k[B], N, B)
      );
    }), X;
    function R(B, M) {
      N && (M = M.map((I) => I.toLowerCase())), M.forEach(function(I) {
        const $ = I.split("|");
        X[$[0]] = [B, Oe($[0], $[1])];
      });
    }
  }
  function Oe(k, N) {
    return N ? Number(N) : Le(k) ? 0 : 1;
  }
  function Le(k) {
    return ve.includes(k.toLowerCase());
  }
  const Re = {}, Xe = (k) => {
    console.error(k);
  }, ce = (k, ...N) => {
    console.log(`WARN: ${k}`, ...N);
  }, Ge = (k, N) => {
    Re[`${k}/${N}`] || (console.log(`Deprecated as of ${k}. ${N}`), Re[`${k}/${N}`] = !0);
  }, ut = new Error();
  function Rt(k, N, { key: z }) {
    let X = 0;
    const R = k[z], B = {}, M = {};
    for (let I = 1; I <= N.length; I++)
      M[I + X] = R[I], B[I + X] = !0, X += y(N[I - 1]);
    k[z] = M, k[z]._emit = B, k[z]._multi = !0;
  }
  function wt(k) {
    if (Array.isArray(k.begin)) {
      if (k.skip || k.excludeBegin || k.returnBegin)
        throw Xe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ut;
      if (typeof k.beginScope != "object" || k.beginScope === null)
        throw Xe("beginScope must be object"), ut;
      Rt(k, k.begin, { key: "beginScope" }), k.begin = A(k.begin, { joinWith: "" });
    }
  }
  function ot(k) {
    if (Array.isArray(k.end)) {
      if (k.skip || k.excludeEnd || k.returnEnd)
        throw Xe("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ut;
      if (typeof k.endScope != "object" || k.endScope === null)
        throw Xe("endScope must be object"), ut;
      Rt(k, k.end, { key: "endScope" }), k.end = A(k.end, { joinWith: "" });
    }
  }
  function jt(k) {
    k.scope && typeof k.scope == "object" && k.scope !== null && (k.beginScope = k.scope, delete k.scope);
  }
  function Gt(k) {
    jt(k), typeof k.beginScope == "string" && (k.beginScope = { _wrap: k.beginScope }), typeof k.endScope == "string" && (k.endScope = { _wrap: k.endScope }), wt(k), ot(k);
  }
  function wn(k) {
    function N(M, I) {
      return new RegExp(
        p(M),
        "m" + (k.case_insensitive ? "i" : "") + (k.unicodeRegex ? "u" : "") + (I ? "g" : "")
      );
    }
    class z {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(I, $) {
        $.position = this.position++, this.matchIndexes[this.matchAt] = $, this.regexes.push([$, I]), this.matchAt += y(I) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const I = this.regexes.map(($) => $[1]);
        this.matcherRe = N(A(I, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(I) {
        this.matcherRe.lastIndex = this.lastIndex;
        const $ = this.matcherRe.exec(I);
        if (!$)
          return null;
        const he = $.findIndex((Je, We) => We > 0 && Je !== void 0), pe = this.matchIndexes[he];
        return $.splice(0, he), Object.assign($, pe);
      }
    }
    class X {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(I) {
        if (this.multiRegexes[I]) return this.multiRegexes[I];
        const $ = new z();
        return this.rules.slice(I).forEach(([he, pe]) => $.addRule(he, pe)), $.compile(), this.multiRegexes[I] = $, $;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(I, $) {
        this.rules.push([I, $]), $.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(I) {
        const $ = this.getMatcher(this.regexIndex);
        $.lastIndex = this.lastIndex;
        let he = $.exec(I);
        if (this.resumingScanAtSamePosition() && !(he && he.index === this.lastIndex)) {
          const pe = this.getMatcher(0);
          pe.lastIndex = this.lastIndex + 1, he = pe.exec(I);
        }
        return he && (this.regexIndex += he.position + 1, this.regexIndex === this.count && this.considerAll()), he;
      }
    }
    function R(M) {
      const I = new X();
      return M.contains.forEach(($) => I.addRule($.begin, { rule: $, type: "begin" })), M.terminatorEnd && I.addRule(M.terminatorEnd, { type: "end" }), M.illegal && I.addRule(M.illegal, { type: "illegal" }), I;
    }
    function B(M, I) {
      const $ = (
        /** @type CompiledMode */
        M
      );
      if (M.isCompiled) return $;
      [
        yt,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Fn,
        Gt,
        ne
      ].forEach((pe) => pe(M, I)), k.compilerExtensions.forEach((pe) => pe(M, I)), M.__beforeBegin = null, [
        Mn,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        yn,
        // default to 1 relevance if not specified
        Z
      ].forEach((pe) => pe(M, I)), M.isCompiled = !0;
      let he = null;
      return typeof M.keywords == "object" && M.keywords.$pattern && (M.keywords = Object.assign({}, M.keywords), he = M.keywords.$pattern, delete M.keywords.$pattern), he = he || /\w+/, M.keywords && (M.keywords = ge(M.keywords, k.case_insensitive)), $.keywordPatternRe = N(he, !0), I && (M.begin || (M.begin = /\B|\b/), $.beginRe = N($.begin), !M.end && !M.endsWithParent && (M.end = /\B|\b/), M.end && ($.endRe = N($.end)), $.terminatorEnd = p($.end) || "", M.endsWithParent && I.terminatorEnd && ($.terminatorEnd += (M.end ? "|" : "") + I.terminatorEnd)), M.illegal && ($.illegalRe = N(
        /** @type {RegExp | string} */
        M.illegal
      )), M.contains || (M.contains = []), M.contains = [].concat(...M.contains.map(function(pe) {
        return Ut(pe === "self" ? M : pe);
      })), M.contains.forEach(function(pe) {
        B(
          /** @type Mode */
          pe,
          $
        );
      }), M.starts && B(M.starts, I), $.matcher = R($), $;
    }
    if (k.compilerExtensions || (k.compilerExtensions = []), k.contains && k.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return k.classNameAliases = r(k.classNameAliases || {}), B(
      /** @type Mode */
      k
    );
  }
  function Yt(k) {
    return k ? k.endsWithParent || Yt(k.starts) : !1;
  }
  function Ut(k) {
    return k.variants && !k.cachedVariants && (k.cachedVariants = k.variants.map(function(N) {
      return r(k, { variants: null }, N);
    })), k.cachedVariants ? k.cachedVariants : Yt(k) ? r(k, { starts: k.starts ? r(k.starts) : null }) : Object.isFrozen(k) ? r(k) : k;
  }
  var Mt = "11.11.1";
  class kn extends Error {
    constructor(N, z) {
      super(N), this.name = "HTMLInjectionError", this.html = z;
    }
  }
  const Nn = n, In = r, ft = Symbol("nomatch"), lr = 7, Kt = function(k) {
    const N = /* @__PURE__ */ Object.create(null), z = /* @__PURE__ */ Object.create(null), X = [];
    let R = !0;
    const B = "Could not find the language '{}', did you forget to load/include a language module?", M = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let I = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: h
    };
    function $(L) {
      return I.noHighlightRe.test(L);
    }
    function he(L) {
      let V = L.className + " ";
      V += L.parentNode ? L.parentNode.className : "";
      const le = I.languageDetectRe.exec(V);
      if (le) {
        const be = an(le[1]);
        return be || (ce(B.replace("{}", le[1])), ce("Falling back to no-highlight mode for this block.", L)), be ? le[1] : "no-highlight";
      }
      return V.split(/\s+/).find((be) => $(be) || an(be));
    }
    function pe(L, V, le) {
      let be = "", Ue = "";
      typeof V == "object" ? (be = L, le = V.ignoreIllegals, Ue = V.language) : (Ge("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Ge("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), Ue = L, be = V), le === void 0 && (le = !0);
      const Nt = {
        code: be,
        language: Ue
      };
      fr("before:highlight", Nt);
      const cn = Nt.result ? Nt.result : Je(Nt.language, Nt.code, le);
      return cn.code = Nt.code, fr("after:highlight", cn), cn;
    }
    function Je(L, V, le, be) {
      const Ue = /* @__PURE__ */ Object.create(null);
      function Nt(U, K) {
        return U.keywords[K];
      }
      function cn() {
        if (!ee.keywords) {
          Ye.addText(me);
          return;
        }
        let U = 0;
        ee.keywordPatternRe.lastIndex = 0;
        let K = ee.keywordPatternRe.exec(me), se = "";
        for (; K; ) {
          se += me.substring(U, K.index);
          const ye = $t.case_insensitive ? K[0].toLowerCase() : K[0], ct = Nt(ee, ye);
          if (ct) {
            const [Jt, Fs] = ct;
            if (Ye.addText(se), se = "", Ue[ye] = (Ue[ye] || 0) + 1, Ue[ye] <= lr && (br += Fs), Jt.startsWith("_"))
              se += K[0];
            else {
              const Ns = $t.classNameAliases[Jt] || Jt;
              kt(K[0], Ns);
            }
          } else
            se += K[0];
          U = ee.keywordPatternRe.lastIndex, K = ee.keywordPatternRe.exec(me);
        }
        se += me.substring(U), Ye.addText(se);
      }
      function hr() {
        if (me === "") return;
        let U = null;
        if (typeof ee.subLanguage == "string") {
          if (!N[ee.subLanguage]) {
            Ye.addText(me);
            return;
          }
          U = Je(ee.subLanguage, me, !0, Ti[ee.subLanguage]), Ti[ee.subLanguage] = /** @type {CompiledMode} */
          U._top;
        } else
          U = Ht(me, ee.subLanguage.length ? ee.subLanguage : null);
        ee.relevance > 0 && (br += U.relevance), Ye.__addSublanguage(U._emitter, U.language);
      }
      function vt() {
        ee.subLanguage != null ? hr() : cn(), me = "";
      }
      function kt(U, K) {
        U !== "" && (Ye.startScope(K), Ye.addText(U), Ye.endScope());
      }
      function Ci(U, K) {
        let se = 1;
        const ye = K.length - 1;
        for (; se <= ye; ) {
          if (!U._emit[se]) {
            se++;
            continue;
          }
          const ct = $t.classNameAliases[U[se]] || U[se], Jt = K[se];
          ct ? kt(Jt, ct) : (me = Jt, cn(), me = ""), se++;
        }
      }
      function Si(U, K) {
        return U.scope && typeof U.scope == "string" && Ye.openNode($t.classNameAliases[U.scope] || U.scope), U.beginScope && (U.beginScope._wrap ? (kt(me, $t.classNameAliases[U.beginScope._wrap] || U.beginScope._wrap), me = "") : U.beginScope._multi && (Ci(U.beginScope, K), me = "")), ee = Object.create(U, { parent: { value: ee } }), ee;
      }
      function zr(U, K, se) {
        let ye = S(U.endRe, se);
        if (ye) {
          if (U["on:end"]) {
            const ct = new t(U);
            U["on:end"](K, ct), ct.isMatchIgnored && (ye = !1);
          }
          if (ye) {
            for (; U.endsParent && U.parent; )
              U = U.parent;
            return U;
          }
        }
        if (U.endsWithParent)
          return zr(U.parent, K, se);
      }
      function pr(U) {
        return ee.matcher.regexIndex === 0 ? (me += U[0], 1) : (Hr = !0, 0);
      }
      function Xn(U) {
        const K = U[0], se = U.rule, ye = new t(se), ct = [se.__beforeBegin, se["on:begin"]];
        for (const Jt of ct)
          if (Jt && (Jt(U, ye), ye.isMatchIgnored))
            return pr(K);
        return se.skip ? me += K : (se.excludeBegin && (me += K), vt(), !se.returnBegin && !se.excludeBegin && (me = K)), Si(se, U), se.returnBegin ? 0 : K.length;
      }
      function Rs(U) {
        const K = U[0], se = V.substring(U.index), ye = zr(ee, U, se);
        if (!ye)
          return ft;
        const ct = ee;
        ee.endScope && ee.endScope._wrap ? (vt(), kt(K, ee.endScope._wrap)) : ee.endScope && ee.endScope._multi ? (vt(), Ci(ee.endScope, U)) : ct.skip ? me += K : (ct.returnEnd || ct.excludeEnd || (me += K), vt(), ct.excludeEnd && (me = K));
        do
          ee.scope && Ye.closeNode(), !ee.skip && !ee.subLanguage && (br += ee.relevance), ee = ee.parent;
        while (ee !== ye.parent);
        return ye.starts && Si(ye.starts, U), ct.returnEnd ? 0 : K.length;
      }
      function Jn() {
        const U = [];
        for (let K = ee; K !== $t; K = K.parent)
          K.scope && U.unshift(K.scope);
        U.forEach((K) => Ye.openNode(K));
      }
      let gr = {};
      function Ai(U, K) {
        const se = K && K[0];
        if (me += U, se == null)
          return vt(), 0;
        if (gr.type === "begin" && K.type === "end" && gr.index === K.index && se === "") {
          if (me += V.slice(K.index, K.index + 1), !R) {
            const ye = new Error(`0 width match regex (${L})`);
            throw ye.languageName = L, ye.badRule = gr.rule, ye;
          }
          return 1;
        }
        if (gr = K, K.type === "begin")
          return Xn(K);
        if (K.type === "illegal" && !le) {
          const ye = new Error('Illegal lexeme "' + se + '" for mode "' + (ee.scope || "<unnamed>") + '"');
          throw ye.mode = ee, ye;
        } else if (K.type === "end") {
          const ye = Rs(K);
          if (ye !== ft)
            return ye;
        }
        if (K.type === "illegal" && se === "")
          return me += `
`, 1;
        if (Ur > 1e5 && Ur > K.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return me += se, se.length;
      }
      const $t = an(L);
      if (!$t)
        throw Xe(B.replace("{}", L)), new Error('Unknown language: "' + L + '"');
      const Ms = wn($t);
      let jr = "", ee = be || Ms;
      const Ti = {}, Ye = new I.__emitter(I);
      Jn();
      let me = "", br = 0, En = 0, Ur = 0, Hr = !1;
      try {
        if ($t.__emitTokens)
          $t.__emitTokens(V, Ye);
        else {
          for (ee.matcher.considerAll(); ; ) {
            Ur++, Hr ? Hr = !1 : ee.matcher.considerAll(), ee.matcher.lastIndex = En;
            const U = ee.matcher.exec(V);
            if (!U) break;
            const K = V.substring(En, U.index), se = Ai(K, U);
            En = U.index + se;
          }
          Ai(V.substring(En));
        }
        return Ye.finalize(), jr = Ye.toHTML(), {
          language: L,
          value: jr,
          relevance: br,
          illegal: !1,
          _emitter: Ye,
          _top: ee
        };
      } catch (U) {
        if (U.message && U.message.includes("Illegal"))
          return {
            language: L,
            value: Nn(V),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: U.message,
              index: En,
              context: V.slice(En - 100, En + 100),
              mode: U.mode,
              resultSoFar: jr
            },
            _emitter: Ye
          };
        if (R)
          return {
            language: L,
            value: Nn(V),
            illegal: !1,
            relevance: 0,
            errorRaised: U,
            _emitter: Ye,
            _top: ee
          };
        throw U;
      }
    }
    function We(L) {
      const V = {
        value: Nn(L),
        illegal: !1,
        relevance: 0,
        _top: M,
        _emitter: new I.__emitter(I)
      };
      return V._emitter.addText(L), V;
    }
    function Ht(L, V) {
      V = V || I.languages || Object.keys(N);
      const le = We(L), be = V.filter(an).filter(Ei).map(
        (vt) => Je(vt, L, !1)
      );
      be.unshift(le);
      const Ue = be.sort((vt, kt) => {
        if (vt.relevance !== kt.relevance) return kt.relevance - vt.relevance;
        if (vt.language && kt.language) {
          if (an(vt.language).supersetOf === kt.language)
            return 1;
          if (an(kt.language).supersetOf === vt.language)
            return -1;
        }
        return 0;
      }), [Nt, cn] = Ue, hr = Nt;
      return hr.secondBest = cn, hr;
    }
    function Ft(L, V, le) {
      const be = V && z[V] || le;
      L.classList.add("hljs"), L.classList.add(`language-${be}`);
    }
    function Zt(L) {
      let V = null;
      const le = he(L);
      if ($(le)) return;
      if (fr(
        "before:highlightElement",
        { el: L, language: le }
      ), L.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", L);
        return;
      }
      if (L.children.length > 0 && (I.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(L)), I.throwUnescapedHTML))
        throw new kn(
          "One of your code blocks includes unescaped HTML.",
          L.innerHTML
        );
      V = L;
      const be = V.textContent, Ue = le ? pe(be, { language: le, ignoreIllegals: !0 }) : Ht(be);
      L.innerHTML = Ue.value, L.dataset.highlighted = "yes", Ft(L, le, Ue.language), L.result = {
        language: Ue.language,
        // TODO: remove with version 11.0
        re: Ue.relevance,
        relevance: Ue.relevance
      }, Ue.secondBest && (L.secondBest = {
        language: Ue.secondBest.language,
        relevance: Ue.secondBest.relevance
      }), fr("after:highlightElement", { el: L, result: Ue, text: be });
    }
    function Pn(L) {
      I = In(I, L);
    }
    const Xt = () => {
      dr(), Ge("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Ss() {
      dr(), Ge("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wi = !1;
    function dr() {
      function L() {
        dr();
      }
      if (document.readyState === "loading") {
        wi || window.addEventListener("DOMContentLoaded", L, !1), wi = !0;
        return;
      }
      document.querySelectorAll(I.cssSelector).forEach(Zt);
    }
    function Lr(L, V) {
      let le = null;
      try {
        le = V(k);
      } catch (be) {
        if (Xe("Language definition for '{}' could not be registered.".replace("{}", L)), R)
          Xe(be);
        else
          throw be;
        le = M;
      }
      le.name || (le.name = L), N[L] = le, le.rawDefinition = V.bind(null, k), le.aliases && ki(le.aliases, { languageName: L });
    }
    function Br(L) {
      delete N[L];
      for (const V of Object.keys(z))
        z[V] === L && delete z[V];
    }
    function As() {
      return Object.keys(N);
    }
    function an(L) {
      return L = (L || "").toLowerCase(), N[L] || N[z[L]];
    }
    function ki(L, { languageName: V }) {
      typeof L == "string" && (L = [L]), L.forEach((le) => {
        z[le.toLowerCase()] = V;
      });
    }
    function Ei(L) {
      const V = an(L);
      return V && !V.disableAutodetect;
    }
    function qr(L) {
      L["before:highlightBlock"] && !L["before:highlightElement"] && (L["before:highlightElement"] = (V) => {
        L["before:highlightBlock"](
          Object.assign({ block: V.el }, V)
        );
      }), L["after:highlightBlock"] && !L["after:highlightElement"] && (L["after:highlightElement"] = (V) => {
        L["after:highlightBlock"](
          Object.assign({ block: V.el }, V)
        );
      });
    }
    function Ts(L) {
      qr(L), X.push(L);
    }
    function Ds(L) {
      const V = X.indexOf(L);
      V !== -1 && X.splice(V, 1);
    }
    function fr(L, V) {
      const le = L;
      X.forEach(function(be) {
        be[le] && be[le](V);
      });
    }
    function Os(L) {
      return Ge("10.7.0", "highlightBlock will be removed entirely in v12.0"), Ge("10.7.0", "Please use highlightElement now."), Zt(L);
    }
    Object.assign(k, {
      highlight: pe,
      highlightAuto: Ht,
      highlightAll: dr,
      highlightElement: Zt,
      // TODO: Remove with v12 API
      highlightBlock: Os,
      configure: Pn,
      initHighlighting: Xt,
      initHighlightingOnLoad: Ss,
      registerLanguage: Lr,
      unregisterLanguage: Br,
      listLanguages: As,
      getLanguage: an,
      registerAliases: ki,
      autoDetection: Ei,
      inherit: In,
      addPlugin: Ts,
      removePlugin: Ds
    }), k.debugMode = function() {
      R = !1;
    }, k.safeMode = function() {
      R = !0;
    }, k.versionString = Mt, k.regex = {
      concat: w,
      lookahead: b,
      either: E,
      optional: g,
      anyNumberOfTimes: _
    };
    for (const L in Ot)
      typeof Ot[L] == "object" && e(Ot[L]);
    return Object.assign(k, Ot), k;
  }, at = Kt({});
  return at.newInstance = () => Kt({}), iu = at, at.HighlightJS = at, at.default = at, iu;
}
var ib = /* @__PURE__ */ rb();
const _t = /* @__PURE__ */ Gc(ib), _a = "[A-Za-z$_][0-9A-Za-z$_]*", sb = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], ub = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Il = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Pl = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Ll = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], ob = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], ab = [].concat(
  Ll,
  Il,
  Pl
);
function cb(e) {
  const t = e.regex, n = (qe, { after: nt }) => {
    const Dt = "</" + qe[0].slice(1);
    return qe.input.indexOf(Dt, nt) !== -1;
  }, r = _a, i = {
    begin: "<>",
    end: "</>"
  }, s = /<[A-Za-z0-9\\._:-]+\s*\/>/, u = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (qe, nt) => {
      const Dt = qe[0].length + qe.index, qt = qe.input[Dt];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        qt === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        qt === ","
      ) {
        nt.ignoreMatch();
        return;
      }
      qt === ">" && (n(qe, { after: Dt }) || nt.ignoreMatch());
      let st;
      const zt = qe.input.substring(Dt);
      if (st = zt.match(/^\s*=/)) {
        nt.ignoreMatch();
        return;
      }
      if ((st = zt.match(/^\s+extends\s+/)) && st.index === 0) {
        nt.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: _a,
    keyword: sb,
    literal: ub,
    built_in: ab,
    "variable.language": ob
  }, c = "[0-9](_?[0-9])*", d = `\\.(${c})`, h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", p = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, b = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, _ = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "css"
    }
  }, w = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "graphql"
    }
  }, v = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      b
    ]
  }, y = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, S = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    _,
    g,
    w,
    v,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    p
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  b.contains = S.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(S)
  });
  const D = [].concat(y, b.contains), A = D.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(D)
    }
  ]), T = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: A
  }, P = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, j = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Il,
        ...Pl
      ]
    }
  }, J = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, te = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [T],
    illegal: /%/
  }, _e = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function we(qe) {
    return t.concat("(?!", qe.join("|"), ")");
  }
  const je = {
    match: t.concat(
      /\b/,
      we([
        ...Ll,
        "super",
        "import"
      ].map((qe) => `${qe}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, Te = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ke = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      T
    ]
  }, tt = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", Bt = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(tt)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      T
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: A, CLASS_REFERENCE: j },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      J,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      _,
      g,
      w,
      v,
      y,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      p,
      j,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      Bt,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          y,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: tt,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: A
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: s },
              {
                begin: u.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": u.isTrulyOpeningTag,
                end: u.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: u.begin,
                end: u.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      te,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          T,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      Te,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [T]
      },
      je,
      _e,
      P,
      ke,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function lb(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, n = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, r = [
    "true",
    "false",
    "null"
  ], i = {
    scope: "literal",
    beginKeywords: r.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: r
    },
    contains: [
      t,
      n,
      e.QUOTE_STRING_MODE,
      i,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
function Bl(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, i = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, s = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, u = e.inherit(s, {
    begin: /\(/,
    end: /\)/
  }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), c = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), d = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [i]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [i]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          s,
          c,
          a,
          u,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  s,
                  u,
                  c,
                  a
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      i,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              c
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [d],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [d],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: d
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const db = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), fb = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], hb = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], pb = [
  ...fb,
  ...hb
], gb = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), bb = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), mb = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), _b = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function vb(e) {
  const t = e.regex, n = db(e), r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", s = /@-?\w[\w]*(-\w+)*/, u = "[a-zA-Z-][a-zA-Z0-9_-]*", a = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      n.BLOCK_COMMENT,
      r,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + u,
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + bb.join("|") + ")" },
          { begin: ":(:)?(" + mb.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + _b.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...a,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...a,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          n.FUNCTION_DISPATCH
        ]
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: s
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: i,
              attribute: gb.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...a,
              n.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + pb.join("|") + ")\\b"
      }
    ]
  };
}
function xb(e) {
  const t = e.regex, n = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, r = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, i = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, s = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, u = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, a = /[A-Za-z][A-Za-z0-9+.-]*/, c = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: t.concat(/\[.+?\]\(/, a, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, d = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  }, h = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  }, p = e.inherit(d, { contains: [] }), b = e.inherit(h, { contains: [] });
  d.contains.push(b), h.contains.push(p);
  let _ = [
    n,
    c
  ];
  return [
    d,
    h,
    p,
    b
  ].forEach((E) => {
    E.contains = E.contains.concat(_);
  }), _ = _.concat(d, h), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: _
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: _
              }
            ]
          }
        ]
      },
      n,
      s,
      d,
      h,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: _,
        end: "$"
      },
      i,
      r,
      c,
      u,
      {
        //https://spec.commonmark.org/0.31.2/#entity-references
        scope: "literal",
        match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
      }
    ]
  };
}
function yb(e) {
  const t = e.regex, n = /(?![A-Za-z0-9])(?![$])/, r = t.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    n
  ), i = t.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    n
  ), s = t.concat(
    /[A-Z]+/,
    n
  ), u = {
    scope: "variable",
    match: "\\$+" + r
  }, a = {
    scope: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?=/ },
      // less relevant per PSR-1 which says not to use short-tags
      { begin: /<\?/, relevance: 0.1 },
      { begin: /\?>/ }
      // end php tag
    ]
  }, c = {
    scope: "subst",
    variants: [
      { begin: /\$\w+/ },
      {
        begin: /\{\$/,
        end: /\}/
      }
    ]
  }, d = e.inherit(e.APOS_STRING_MODE, { illegal: null }), h = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(c)
  }), p = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(c),
    "on:begin": (Te, ke) => {
      ke.data._beginMatch = Te[1] || Te[2];
    },
    "on:end": (Te, ke) => {
      ke.data._beginMatch !== Te[1] && ke.ignoreMatch();
    }
  }, b = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), _ = `[ 	
]`, g = {
    scope: "string",
    variants: [
      h,
      d,
      p,
      b
    ]
  }, w = {
    scope: "number",
    variants: [
      { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
      // Binary w/ underscore support
      { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
      // Octals w/ underscore support
      { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
    ],
    relevance: 0
  }, v = [
    "false",
    "null",
    "true"
  ], E = [
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__FUNCTION__",
    "__COMPILER_HALT_OFFSET__",
    "__LINE__",
    "__METHOD__",
    "__NAMESPACE__",
    "__TRAIT__",
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    "die",
    "echo",
    "exit",
    "include",
    "include_once",
    "print",
    "require",
    "require_once",
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    "array",
    "abstract",
    "and",
    "as",
    "binary",
    "bool",
    "boolean",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "double",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "foreach",
    "from",
    "global",
    "goto",
    "if",
    "implements",
    "instanceof",
    "insteadof",
    "int",
    "integer",
    "interface",
    "isset",
    "iterable",
    "list",
    "match|0",
    "mixed",
    "new",
    "never",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "real",
    "return",
    "string",
    "switch",
    "throw",
    "trait",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ], y = [
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    "Error|0",
    "AppendIterator",
    "ArgumentCountError",
    "ArithmeticError",
    "ArrayIterator",
    "ArrayObject",
    "AssertionError",
    "BadFunctionCallException",
    "BadMethodCallException",
    "CachingIterator",
    "CallbackFilterIterator",
    "CompileError",
    "Countable",
    "DirectoryIterator",
    "DivisionByZeroError",
    "DomainException",
    "EmptyIterator",
    "ErrorException",
    "Exception",
    "FilesystemIterator",
    "FilterIterator",
    "GlobIterator",
    "InfiniteIterator",
    "InvalidArgumentException",
    "IteratorIterator",
    "LengthException",
    "LimitIterator",
    "LogicException",
    "MultipleIterator",
    "NoRewindIterator",
    "OutOfBoundsException",
    "OutOfRangeException",
    "OuterIterator",
    "OverflowException",
    "ParentIterator",
    "ParseError",
    "RangeException",
    "RecursiveArrayIterator",
    "RecursiveCachingIterator",
    "RecursiveCallbackFilterIterator",
    "RecursiveDirectoryIterator",
    "RecursiveFilterIterator",
    "RecursiveIterator",
    "RecursiveIteratorIterator",
    "RecursiveRegexIterator",
    "RecursiveTreeIterator",
    "RegexIterator",
    "RuntimeException",
    "SeekableIterator",
    "SplDoublyLinkedList",
    "SplFileInfo",
    "SplFileObject",
    "SplFixedArray",
    "SplHeap",
    "SplMaxHeap",
    "SplMinHeap",
    "SplObjectStorage",
    "SplObserver",
    "SplPriorityQueue",
    "SplQueue",
    "SplStack",
    "SplSubject",
    "SplTempFileObject",
    "TypeError",
    "UnderflowException",
    "UnexpectedValueException",
    "UnhandledMatchError",
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    "ArrayAccess",
    "BackedEnum",
    "Closure",
    "Fiber",
    "Generator",
    "Iterator",
    "IteratorAggregate",
    "Serializable",
    "Stringable",
    "Throwable",
    "Traversable",
    "UnitEnum",
    "WeakReference",
    "WeakMap",
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    "Directory",
    "__PHP_Incomplete_Class",
    "parent",
    "php_user_filter",
    "self",
    "static",
    "stdClass"
  ], D = {
    keyword: E,
    literal: ((Te) => {
      const ke = [];
      return Te.forEach((tt) => {
        ke.push(tt), tt.toLowerCase() === tt ? ke.push(tt.toUpperCase()) : ke.push(tt.toLowerCase());
      }), ke;
    })(v),
    built_in: y
  }, A = (Te) => Te.map((ke) => ke.replace(/\|\d+$/, "")), T = { variants: [
    {
      match: [
        /new/,
        t.concat(_, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", A(y).join("\\b|"), "\\b)"),
        i
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, P = t.concat(r, "\\b(?!\\()"), j = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        P
      ],
      scope: { 2: "variable.constant" }
    },
    {
      match: [
        /::/,
        /class/
      ],
      scope: { 2: "variable.language" }
    },
    {
      match: [
        i,
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        P
      ],
      scope: {
        1: "title.class",
        3: "variable.constant"
      }
    },
    {
      match: [
        i,
        t.concat(
          "::",
          t.lookahead(/(?!class\b)/)
        )
      ],
      scope: { 1: "title.class" }
    },
    {
      match: [
        i,
        /::/,
        /class/
      ],
      scope: {
        1: "title.class",
        3: "variable.language"
      }
    }
  ] }, J = {
    scope: "attr",
    match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, te = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: D,
    contains: [
      J,
      u,
      j,
      e.C_BLOCK_COMMENT_MODE,
      g,
      w,
      T
    ]
  }, _e = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", A(E).join("\\b|"), "|", A(y).join("\\b|"), "\\b)"),
      r,
      t.concat(_, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [te]
  };
  te.contains.push(_e);
  const we = [
    J,
    j,
    e.C_BLOCK_COMMENT_MODE,
    g,
    w,
    T
  ], je = {
    begin: t.concat(
      /#\[\s*\\?/,
      t.either(
        i,
        s
      )
    ),
    beginScope: "meta",
    end: /]/,
    endScope: "meta",
    keywords: {
      literal: v,
      keyword: [
        "new",
        "array"
      ]
    },
    contains: [
      {
        begin: /\[/,
        end: /]/,
        keywords: {
          literal: v,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...we
        ]
      },
      ...we,
      {
        scope: "meta",
        variants: [
          { match: i },
          { match: s }
        ]
      }
    ]
  };
  return {
    case_insensitive: !1,
    keywords: D,
    contains: [
      je,
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$"),
      e.COMMENT(
        "/\\*",
        "\\*/",
        { contains: [
          {
            scope: "doctag",
            match: "@[A-Za-z]+"
          }
        ] }
      ),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: e.MATCH_NOTHING_RE,
          contains: [
            {
              match: /\?>/,
              scope: "meta",
              endsParent: !0
            }
          ]
        }
      },
      a,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      u,
      _e,
      j,
      {
        match: [
          /const/,
          /\s/,
          r
        ],
        scope: {
          1: "keyword",
          3: "variable.constant"
        }
      },
      T,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          e.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: !0
          },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: D,
            contains: [
              "self",
              je,
              u,
              j,
              e.C_BLOCK_COMMENT_MODE,
              g,
              w
            ]
          }
        ]
      },
      {
        scope: "class",
        variants: [
          {
            beginKeywords: "enum",
            illegal: /[($"]/
          },
          {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      // both use and namespace still use "old style" rules (vs multi-match)
      // because the namespace name can include `\` and we still want each
      // element to be treated as its own *individual* title
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          // TODO: title.function vs title.class
          {
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          },
          // TODO: could be title.class or title.function
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      g,
      w
    ]
  };
}
function wb(e) {
  const t = e.regex, n = e.COMMENT("--", "$"), r = {
    scope: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/ }]
      }
    ]
  }, i = {
    begin: /"/,
    end: /"/,
    contains: [{ match: /""/ }]
  }, s = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ], u = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ], a = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ], c = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ], d = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ], h = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ], p = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ], b = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ], _ = h, g = [
    ...d,
    ...c
  ].filter((A) => !h.includes(A)), w = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, v = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, E = {
    match: t.concat(/\b/, t.either(..._), /\s*\(/),
    relevance: 0,
    keywords: { built_in: _ }
  };
  function y(A) {
    return t.concat(
      /\b/,
      t.either(...A.map((T) => T.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const S = {
    scope: "keyword",
    match: y(b),
    relevance: 0
  };
  function D(A, {
    exceptions: T,
    when: P
  } = {}) {
    const j = P;
    return T = T || [], A.map((J) => J.match(/\|\d+$/) || T.includes(J) ? J : j(J) ? `${J}|0` : J);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: D(g, { when: (A) => A.length < 3 }),
      literal: s,
      type: a,
      built_in: p
    },
    contains: [
      {
        scope: "type",
        match: y(u)
      },
      S,
      E,
      w,
      r,
      i,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      n,
      v
    ]
  };
}
_t.registerLanguage("javascript", cb);
_t.registerLanguage("json", lb);
_t.registerLanguage("xml", Bl);
_t.registerLanguage("html", Bl);
_t.registerLanguage("css", vb);
_t.registerLanguage("markdown", xb);
_t.registerLanguage("php", yb);
_t.registerLanguage("sql", wb);
const tn = new Vt({
  html: !1,
  linkify: !0,
  typographer: !0,
  langPrefix: "language-",
  highlight: function(e, t) {
    try {
      return t && _t.getLanguage(t) ? _t.highlight(e, {
        language: t,
        ignoreIllegals: !0
      }).value : _t.highlightAuto(e, _t.listLanguages()).value;
    } catch {
      return tn.utils.escapeHtml(e);
    }
  }
});
tn.enable(["table", "strikethrough"]);
tn.renderer.rules.code_inline = function(e, t) {
  const n = e[t];
  return `<code class="md-inline-code">${tn.utils.escapeHtml(n.content)}</code>`;
};
tn.renderer.rules.fence = function(e, t) {
  const n = e[t], r = n.info ? n.info.trim() : "", i = n.content || "", s = r.split(/\s+/g)[0] || "";
  let u = "", a = "plaintext";
  try {
    if (s && _t.getLanguage(s))
      a = s, u = _t.highlight(i, {
        language: s,
        ignoreIllegals: !0
      }).value;
    else {
      const d = _t.highlightAuto(i, _t.listLanguages());
      a = d.language || "plaintext", u = d.value;
    }
  } catch {
    u = tn.utils.escapeHtml(i), a = "plaintext";
  }
  const c = tn.utils.escapeHtml(i);
  return `<div class="md-codeblock"><div class="md-codeblock-header"><span class="md-codeblock-lang">${a}</span><button type="button" class="copy-code" data-code="${c}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="copy-label">Copy Code</span></button></div><pre class="md-pre"><code class="hljs language-${a}">${u}</code></pre></div>`;
};
tn.renderer.rules.link_open = function(e, t) {
  const n = e[t], r = n.attrIndex("href");
  if (r >= 0) {
    const i = n.attrs[r][1];
    n.attrs[r][1] = tn.utils.escapeHtml(i);
  }
  return n.attrIndex("target") < 0 && n.attrPush(["target", "_blank"]), n.attrIndex("rel") < 0 && n.attrPush(["rel", "noopener noreferrer"]), tn.renderer.renderToken(e, t, {});
};
function kb(e) {
  return e ? tn.render(e) : "";
}
const ql = 6048e5, Eb = 864e5, va = Symbol.for("constructDateFrom");
function Yn(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && va in e ? e[va](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function on(e, t) {
  return Yn(t || e, e);
}
let Cb = {};
function Cs() {
  return Cb;
}
function ai(e, t) {
  const n = Cs(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = on(e, t?.in), s = i.getDay(), u = (s < r ? 7 : 0) + s - r;
  return i.setDate(i.getDate() - u), i.setHours(0, 0, 0, 0), i;
}
function us(e, t) {
  return ai(e, { ...t, weekStartsOn: 1 });
}
function zl(e, t) {
  const n = on(e, t?.in), r = n.getFullYear(), i = Yn(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const s = us(i), u = Yn(n, 0);
  u.setFullYear(r, 0, 4), u.setHours(0, 0, 0, 0);
  const a = us(u);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= a.getTime() ? r : r - 1;
}
function xa(e) {
  const t = on(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Sb(e, ...t) {
  const n = Yn.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function ya(e, t) {
  const n = on(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Ab(e, t, n) {
  const [r, i] = Sb(
    n?.in,
    e,
    t
  ), s = ya(r), u = ya(i), a = +s - xa(s), c = +u - xa(u);
  return Math.round((a - c) / Eb);
}
function Tb(e, t) {
  const n = zl(e, t), r = Yn(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), us(r);
}
function Db(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ob(e) {
  return !(!Db(e) && typeof e != "number" || isNaN(+on(e)));
}
function Rb(e, t) {
  const n = on(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Mb = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Fb = (e, t, n) => {
  let r;
  const i = Mb[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function su(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Nb = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ib = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Pb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Lb = {
  date: su({
    formats: Nb,
    defaultWidth: "full"
  }),
  time: su({
    formats: Ib,
    defaultWidth: "full"
  }),
  dateTime: su({
    formats: Pb,
    defaultWidth: "full"
  })
}, Bb = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, qb = (e, t, n, r) => Bb[e];
function Yr(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const u = e.defaultFormattingWidth || e.defaultWidth, a = n?.width ? String(n.width) : u;
      i = e.formattingValues[a] || e.formattingValues[u];
    } else {
      const u = e.defaultWidth, a = n?.width ? String(n.width) : e.defaultWidth;
      i = e.values[a] || e.values[u];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[s];
  };
}
const zb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, jb = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ub = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Hb = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, $b = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Wb = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Vb = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Gb = {
  ordinalNumber: Vb,
  era: Yr({
    values: zb,
    defaultWidth: "wide"
  }),
  quarter: Yr({
    values: jb,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Yr({
    values: Ub,
    defaultWidth: "wide"
  }),
  day: Yr({
    values: Hb,
    defaultWidth: "wide"
  }),
  dayPeriod: Yr({
    values: $b,
    defaultWidth: "wide",
    formattingValues: Wb,
    defaultFormattingWidth: "wide"
  })
};
function Kr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(i);
    if (!s)
      return null;
    const u = s[0], a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(a) ? Kb(a, (p) => p.test(u)) : (
      // [TODO] -- I challenge you to fix the type
      Yb(a, (p) => p.test(u))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const h = t.slice(u.length);
    return { value: d, rest: h };
  };
}
function Yb(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Kb(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Zb(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let u = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    u = n.valueCallback ? n.valueCallback(u) : u;
    const a = t.slice(i.length);
    return { value: u, rest: a };
  };
}
const Xb = /^(\d+)(th|st|nd|rd)?/i, Jb = /\d+/i, Qb = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, em = {
  any: [/^b/i, /^(a|c)/i]
}, tm = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, nm = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, rm = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, im = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, sm = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, um = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, om = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, am = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, cm = {
  ordinalNumber: Zb({
    matchPattern: Xb,
    parsePattern: Jb,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Kr({
    matchPatterns: Qb,
    defaultMatchWidth: "wide",
    parsePatterns: em,
    defaultParseWidth: "any"
  }),
  quarter: Kr({
    matchPatterns: tm,
    defaultMatchWidth: "wide",
    parsePatterns: nm,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Kr({
    matchPatterns: rm,
    defaultMatchWidth: "wide",
    parsePatterns: im,
    defaultParseWidth: "any"
  }),
  day: Kr({
    matchPatterns: sm,
    defaultMatchWidth: "wide",
    parsePatterns: um,
    defaultParseWidth: "any"
  }),
  dayPeriod: Kr({
    matchPatterns: om,
    defaultMatchWidth: "any",
    parsePatterns: am,
    defaultParseWidth: "any"
  })
}, lm = {
  code: "en-US",
  formatDistance: Fb,
  formatLong: Lb,
  formatRelative: qb,
  localize: Gb,
  match: cm,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function dm(e, t) {
  const n = on(e, t?.in);
  return Ab(n, Rb(n)) + 1;
}
function fm(e, t) {
  const n = on(e, t?.in), r = +us(n) - +Tb(n);
  return Math.round(r / ql) + 1;
}
function jl(e, t) {
  const n = on(e, t?.in), r = n.getFullYear(), i = Cs(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, u = Yn(t?.in || e, 0);
  u.setFullYear(r + 1, 0, s), u.setHours(0, 0, 0, 0);
  const a = ai(u, t), c = Yn(t?.in || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const d = ai(c, t);
  return +n >= +a ? r + 1 : +n >= +d ? r : r - 1;
}
function hm(e, t) {
  const n = Cs(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = jl(e, t), s = Yn(t?.in || e, 0);
  return s.setFullYear(i, 0, r), s.setHours(0, 0, 0, 0), ai(s, t);
}
function pm(e, t) {
  const n = on(e, t?.in), r = +ai(n, t) - +hm(n, t);
  return Math.round(r / ql) + 1;
}
function Ce(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ln = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ce(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ce(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ce(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Ce(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ce(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ce(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ce(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ce(i, t.length);
  }
}, xr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, wa = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), i = r > 0 ? r : 1 - r;
      return n.ordinalNumber(i, { unit: "year" });
    }
    return Ln.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = jl(e, r), s = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const u = s % 100;
      return Ce(u, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Ce(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = zl(e);
    return Ce(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Ce(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return Ce(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return Ce(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ln.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return Ce(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const i = pm(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Ce(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = fm(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ce(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ln.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = dm(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ce(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const i = e.getDay(), s = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return Ce(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const i = e.getDay(), s = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return Ce(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), i = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(i);
      // 02
      case "ii":
        return Ce(i, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(i, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r === 12 ? i = xr.noon : r === 0 ? i = xr.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r >= 17 ? i = xr.evening : r >= 12 ? i = xr.afternoon : r >= 4 ? i = xr.morning : i = xr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Ln.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ln.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ce(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ce(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ln.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ln.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ln.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Ea(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Qn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Qn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Ea(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Qn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Qn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ka(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Qn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ka(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Qn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Ce(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Ce(+e, t.length);
  }
};
function ka(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(i) : n + String(i) + t + Ce(s, 2);
}
function Ea(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ce(Math.abs(e) / 60, 2) : Qn(e, t);
}
function Qn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Ce(Math.trunc(r / 60), 2), s = Ce(r % 60, 2);
  return n + i + t + s;
}
const Ca = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Ul = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, gm = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return Ca(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Ca(r, t)).replace("{{time}}", Ul(i, t));
}, bm = {
  p: Ul,
  P: gm
}, mm = /^D+$/, _m = /^Y+$/, vm = ["D", "DD", "YY", "YYYY"];
function xm(e) {
  return mm.test(e);
}
function ym(e) {
  return _m.test(e);
}
function wm(e, t, n) {
  const r = km(e, t, n);
  if (console.warn(r), vm.includes(e)) throw new RangeError(r);
}
function km(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Em = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Cm = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Sm = /^'([^]*?)'?$/, Am = /''/g, Tm = /[a-zA-Z]/;
function Dm(e, t, n) {
  const r = Cs(), i = r.locale ?? lm, s = r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, u = r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = on(e, n?.in);
  if (!Ob(a))
    throw new RangeError("Invalid time value");
  let c = t.match(Cm).map((h) => {
    const p = h[0];
    if (p === "p" || p === "P") {
      const b = bm[p];
      return b(h, i.formatLong);
    }
    return h;
  }).join("").match(Em).map((h) => {
    if (h === "''")
      return { isToken: !1, value: "'" };
    const p = h[0];
    if (p === "'")
      return { isToken: !1, value: Om(h) };
    if (wa[p])
      return { isToken: !0, value: h };
    if (p.match(Tm))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: h };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(a, c));
  const d = {
    firstWeekContainsDate: s,
    weekStartsOn: u,
    locale: i
  };
  return c.map((h) => {
    if (!h.isToken) return h.value;
    const p = h.value;
    (ym(p) || xm(p)) && wm(p, t, String(e));
    const b = wa[p[0]];
    return b(a, p, i.localize, d);
  }).join("");
}
function Om(e) {
  const t = e.match(Sm);
  return t ? t[1].replace(Am, "'") : e;
}
function Rm(e) {
  const t = new Date(e);
  return isNaN(t.getTime()) ? "-" : Dm(t, "dd-MM-yyyy hh:mm a");
}
function Mm(e) {
  if (e === null || typeof e > "u") return "-";
  const t = new Date(e);
  if (isNaN(t.getTime())) return "-";
  const r = Math.floor(((/* @__PURE__ */ new Date()).getTime() - t.getTime()) / (1e3 * 60));
  if (r < 1) return "Just now";
  if (r < 60) return `${r}m ago`;
  const i = Math.floor(r / 60);
  return i < 24 ? `${i}h ago` : Rm(t);
}
function Fm(e, t, n, r, i, s) {
  if (C(t) === "up") {
    H(t, null), n({
      message: r.message,
      feedback: null,
      action: "delete",
      feedback_id: r.message?.feedback?.id ?? null
    });
    return;
  }
  H(t, "up"), H(i, !1), H(s, ""), n({ message: r.message, feedback: "up" });
}
function Nm(e, t, n, r, i, s) {
  if (C(t) === "down") {
    H(t, null), H(n, !1), H(r, ""), i({
      message: s.message,
      feedback: null,
      action: "delete",
      feedback_id: s.message?.feedback?.id ?? null
    });
    return;
  }
  H(t, "down"), H(n, !0);
}
function Im(e, t, n, r, i) {
  t({
    message: n.message,
    feedback: "down",
    comment: C(r)
  }), H(i, !1), H(r, "");
}
function Pm(e, t, n, r, i) {
  t({ message: n.message, feedback: "down" }), H(r, !1), H(i, "");
}
var Lm = /* @__PURE__ */ ae('<img class="avatar-image svelte-1ng5a28">'), Bm = /* @__PURE__ */ ae('<div class="agent-avatar-text svelte-1ng5a28"> </div>'), qm = /* @__PURE__ */ ae('<img alt="Bot Icon" class="avatar-image svelte-1ng5a28">'), zm = /* @__PURE__ */ ae("<div><!></div>"), jm = /* @__PURE__ */ ae('<div class="agent-message-name svelte-1ng5a28"> </div>'), Um = /* @__PURE__ */ ae('<div class="text svelte-1ng5a28"> </div>'), Hm = /* @__PURE__ */ ae('<div class="thinking svelte-1ng5a28"><span class="svelte-1ng5a28">Thinking</span> <div class="dots-container svelte-1ng5a28"><span class="dot svelte-1ng5a28"></span> <span class="dot svelte-1ng5a28"></span> <span class="dot svelte-1ng5a28"></span></div></div>'), $m = /* @__PURE__ */ ae('<a target="_blank" rel="noopener noreferrer" class="svelte-1ng5a28"> </a>'), Wm = /* @__PURE__ */ ae('<span class="svelte-1ng5a28"> </span>'), Vm = /* @__PURE__ */ ae('<li class="source-item svelte-1ng5a28"><!></li>'), Gm = /* @__PURE__ */ ae('<div class="sources-block svelte-1ng5a28"><div class="sources-title svelte-1ng5a28">Sources</div> <ul class="sources-list svelte-1ng5a28"></ul></div>'), Ym = /* @__PURE__ */ ae("<div><!></div> <!>", 1), Km = /* @__PURE__ */ ae('<span class="delivery-status svelte-1ng5a28"> </span> <span class="meta-separator svelte-1ng5a28">•</span>', 1), Zm = /* @__PURE__ */ ae('<button title="Positive"><!></button>'), Xm = /* @__PURE__ */ ae('<button title="Negative"><!></button>'), Jm = /* @__PURE__ */ ae('<div class="feedback-row svelte-1ng5a28" role="group" aria-label="Message feedback"><!> <!></div>'), Qm = /* @__PURE__ */ ae('<button type="button" class="escalation-action-btn svelte-1ng5a28"><!> <span class="svelte-1ng5a28"> </span></button>'), e2 = /* @__PURE__ */ ae('<button type="button" class="escalation-action-btn svelte-1ng5a28"><!> <span class="svelte-1ng5a28">Email</span></button>'), t2 = /* @__PURE__ */ ae(`<div class="feedback-dialog-overlay svelte-1ng5a28" role="dialog" aria-modal="true"><div class="feedback-dialog svelte-1ng5a28" role="document"><div class="feedback-dialog-title svelte-1ng5a28">We're sorry — can you tell us what went wrong?</div> <textarea class="feedback-textarea svelte-1ng5a28" placeholder="Optional: add details to help us improve..."></textarea> <div class="feedback-dialog-actions svelte-1ng5a28"><button class="btn btn-secondary svelte-1ng5a28">Cancel</button> <button class="btn btn-primary svelte-1ng5a28">Submit</button></div></div></div>`), n2 = /* @__PURE__ */ ae('<div><div><!> <div><!> <div><!></div> <div><!> <span class="timestamp svelte-1ng5a28"> </span> <!></div> <!> <!></div></div></div> <!>', 1);
const r2 = {
  hash: "svelte-1ng5a28",
  code: `.message-container.svelte-1ng5a28 {display:flex;padding:0.25rem 0;}.visitor-message.svelte-1ng5a28 {justify-content:flex-end;}.ai-message.svelte-1ng5a28 {justify-content:flex-start;}.message-content.svelte-1ng5a28 {display:flex;align-items:flex-start;gap:0.25rem;max-width:85%;}.visitor-content.svelte-1ng5a28 {flex-direction:row-reverse;}.ai-content.svelte-1ng5a28 {flex-direction:row;}

  /* Match WidgetView preview: square avatar with rounded-md corners (size-8 equivalent) */.avatar.svelte-1ng5a28 {width:2rem; /* size-8 */height:2rem; /* size-8 */border-radius:0.5rem; /* rounded-md */border-top-right-radius:0.15rem;display:flex;align-items:center;justify-content:center;color:inherit;font-weight:600;flex-shrink:0;background-color:var(--primary-color);overflow:hidden;}.avatar.icon-url.svelte-1ng5a28 {background-color:transparent;overflow:hidden;}.avatar-image.svelte-1ng5a28 {width:100%;height:100%;object-fit:cover;display:block;}.agent-avatar-text.svelte-1ng5a28 {font-size:1rem;font-weight:600;color:inherit;}.agent-message-name.svelte-1ng5a28 {font-weight:600;color:#6b7280;font-size:0.8rem;line-height:1;margin-bottom:0.18rem;}.meta-separator.svelte-1ng5a28 {color:#999;margin:0 0.25rem;}

  /* New flex-based body */.message-body.svelte-1ng5a28 {display:flex;flex-direction:column;align-items:flex-start;gap:2px;max-width:100%;}.visitor-body.svelte-1ng5a28 {align-items:flex-end;}.ai-body.svelte-1ng5a28 {align-items:flex-start;}.bubble.svelte-1ng5a28 {padding:0.5rem;border-radius:0.5rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);line-height:1.5;display:inline-flex;flex-direction:column;background-color:var(--message-color);color:var(--text-color);max-width:85%; /* reduce message width to fit better in smaller widget */position:relative;
    /* 0.92rem ≈ 14.7px -> use 15px */font-size:15px;}.visitor-bubble.svelte-1ng5a28 {border-top-right-radius:0.15rem;}.ai-bubble.svelte-1ng5a28 {border-top-left-radius:0.15rem;}.text.svelte-1ng5a28 {white-space:pre-wrap;word-break:break-word;margin:0;padding:0;}.markdown.svelte-1ng5a28 {width:100%;}.meta-row.svelte-1ng5a28 {display:flex;width:100%;
    /* Reserve space for the timestamp so revealing it doesn't shift layout */min-height:10px; /* reserve approx line-height of timestamp */align-items:center;opacity:1;margin-top:2px;
    /* keep it in flow (visibility on/off only affects hit-testing), don't change height */visibility:visible;transition:opacity 120ms ease;}.visitor-meta.svelte-1ng5a28 {justify-content:flex-end;}.ai-meta.svelte-1ng5a28 {justify-content:flex-start;}.timestamp.svelte-1ng5a28 {font-size:0.625rem;line-height:1;color:#6b7280;}.delivery-status.svelte-1ng5a28 {font-size:0.625rem;line-height:1;color:#6b7280;text-transform:capitalize;}

  /* Global styles for markdown content to mirror Messages.vue */.message-markdown {
    /* Match user message font size (0.92rem ≈ 15px) */font-size:15px;line-height:1.625; /* leading-relaxed */color:#525866; /* match Messages.vue */word-break:break-word; /* break-words */width:100%;min-width:0;}.message-markdown h1 {font-weight:600; /* font-semibold */font-size:20px; /* 1.25rem */margin:0.75rem 0 0.5rem 0;}.message-markdown h2 {font-weight:600;font-size:18px; /* 1.125rem */margin:0.75rem 0 0.5rem 0;}.message-markdown h3 {font-weight:600;font-size:16px; /* 1rem */margin:0.75rem 0 0.5rem 0;}.message-markdown p {margin:0;padding:0;color:inherit;}.message-markdown p + p {margin-top:0.75rem;}.message-markdown ul,
  .message-markdown ol {margin:0.75rem 0;padding-left:1.25rem;}.message-markdown ul {list-style:disc;}.message-markdown ol {list-style:decimal;}.message-markdown li + li {margin-top:0.25rem;}.message-markdown blockquote {border-left:4px solid #cbd5e1; /* border-slate-300 */padding-left:0.75rem; /* pl-3 */background-color:#f8fafc; /* bg-slate-50 */border-radius:0.25rem; /* rounded */color:#6b7280;}.message-markdown table {width:100%;font-size:15px; /* 0.95rem ≈ 15.2px */display:block; /* make scrollable if overflow */overflow-x:auto;border-collapse:collapse;}.message-markdown th,
  .message-markdown td {border:1px solid #e5e7eb; /* border-slate-200 */padding:0.375rem 0.5rem;}.message-markdown th {background-color:#f1f5f9;font-weight:600;}.message-markdown hr {margin:1rem 0;border:none;border-top:1px solid #e5e7eb;}.message-markdown a {word-break:break-all;color:#2563eb;text-decoration:none;}.message-markdown a:hover {text-decoration:underline;}.message-markdown code {word-break:break-word; /* break-words */white-space:pre-wrap; /* whitespace-pre-wrap */}
  /* Plain CSS for markdown code UI (not nested) */.message-markdown .md-inline-code {background-color:#f3f4f6;padding:0.2rem 0.4rem;border-radius:0.25rem;
    /* 0.875em of parent (~15px) ≈ 13px */font-size:13px;color:#1f2937;border:1px solid #e5e7eb;}.message-markdown .md-codeblock {margin:0.5rem 0;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:visible;}.message-markdown .md-codeblock-header {display:flex;align-items:center;justify-content:space-between;padding:0.375rem 0.75rem;background:#f8fafc;border-bottom:1px solid #e5e7eb;}.message-markdown .md-codeblock-lang {display:inline-block;border-radius:0.25rem;background:#dbeafe; /* blue-100 */color:#1d4ed8; /* blue-700 */font-weight:600;padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:0.03em;font-size:10px;}.message-markdown .copy-code {-webkit-appearance:none;appearance:none;border:none;border-radius:0.25rem;background:#0f172a; /* slate-900 */color:#ffffff;padding:0.25rem 0.5rem;display:inline-flex;align-items:center;gap:0.25rem;cursor:pointer;font-size:12px;}.message-markdown .copy-code:hover {background:#1e293b;}.message-markdown .copy-code:focus-visible {outline:2px solid #93c5fd; /* blue-300 */outline-offset:2px;}.message-markdown .copy-code:active {transform:scale(0.98);}.message-markdown .md-pre {overflow-x:auto;font-size:15px;line-height:1.625;margin:0; /* remove default ~1em margin around pre */border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;}.message-markdown pre {overflow-x:auto; /* overflow-x-auto */max-width:100%; /* max-w-full */background-color:#f8fafc; /* light bg similar to Vue */}.message-markdown pre code {color:#1f2937;white-space:pre; /* ensure no wrapping inside code blocks */word-break:normal;overflow-wrap:normal;}.message-markdown img {max-width:100%;height:auto;}.streaming.svelte-1ng5a28 {
    animation: svelte-1ng5a28-pulse 2s infinite ease-in-out;}
  @keyframes svelte-1ng5a28-pulse {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }.thinking.svelte-1ng5a28 {display:flex;align-items:center;gap:0.5rem;color:#1f2937;font-size:0.95rem;padding:0.25rem 0;}.sources-block.svelte-1ng5a28 {border-top:1px solid #e5e7eb;margin-top:8px;padding-top:6px;}.sources-title.svelte-1ng5a28 {font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#374151;margin-bottom:4px;}.sources-list.svelte-1ng5a28 {list-style:disc;padding-left:1.1rem;margin:0;display:flex;flex-direction:column;gap:2px;}.source-item.svelte-1ng5a28 a:where(.svelte-1ng5a28) {font-size:11px;color:#2563eb;text-decoration:none;word-break:break-all;}.source-item.svelte-1ng5a28 a:where(.svelte-1ng5a28):hover {text-decoration:underline;}.dots-container.svelte-1ng5a28 {display:flex;align-items:center;gap:0.25rem;}.dot.svelte-1ng5a28 {width:4px;height:4px;background-color:#1f2937;border-radius:50%;display:inline-block;
    animation: svelte-1ng5a28-bounce 1.4s infinite ease-in-out both;}.dot.svelte-1ng5a28:nth-child(1) {animation-delay:-0.32s;}.dot.svelte-1ng5a28:nth-child(2) {animation-delay:-0.16s;}

  @keyframes svelte-1ng5a28-bounce {
    0%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 0.35;
    }
    40% {
      transform: translateY(-3px);
      opacity: 1;
    }
  }.typing-animation.svelte-1ng5a28 {
    animation: svelte-1ng5a28-typing 0.5s ease-in-out;}
  @keyframes svelte-1ng5a28-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Feedback buttons (shown with timestamp on hover) */.feedback-row.svelte-1ng5a28 {display:inline-flex;gap:6px;margin-left:8px;align-items:center;}.feedback-btn.svelte-1ng5a28 {-webkit-appearance:none;appearance:none;border:none;background:transparent;padding:4px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:#9ca3af; /* gray-400 */}.feedback-btn.svelte-1ng5a28:hover {background:rgba(0, 0, 0, 0.04);color:#374151; /* gray-700 */}.feedback-btn.selected.svelte-1ng5a28 {background:rgba(37, 99, 235, 0.12); /* blue-100 */color:#2563eb; /* blue-600 */}.feedback-btn.down.selected.svelte-1ng5a28 {background:rgba(239, 68, 68, 0.1); /* red-100 */color:#dc2626; /* red-600 */}

  /* Feedback dialog overlay and box */.feedback-dialog-overlay.svelte-1ng5a28 {position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15, 23, 42, 0.5);z-index:99999;padding:20px;}.feedback-dialog.svelte-1ng5a28 {width:100%;max-width:720px;background:#ffffff;border-radius:10px;padding:18px;box-shadow:0 8px 30px rgba(2, 6, 23, 0.2);display:flex;flex-direction:column;gap:12px;box-sizing:border-box;}.feedback-dialog-title.svelte-1ng5a28 {font-weight:600;color:#111827;}.feedback-textarea.svelte-1ng5a28 {width:100%;max-width:100%;box-sizing:border-box;min-height:100px;resize:vertical;border:1px solid #e5e7eb;border-radius:8px;padding:10px;font-size:14px;color:#111827;background:#ffffff;}.feedback-dialog-actions.svelte-1ng5a28 {display:flex;justify-content:flex-end;gap:8px;}.btn.svelte-1ng5a28 {padding:8px 12px;border-radius:8px;border:none;cursor:pointer;font-weight:600;}.btn-primary.svelte-1ng5a28 {background:#2563eb;color:white;}.btn-secondary.svelte-1ng5a28 {background:transparent;color:#374151;}

  /* Escalation action button */.escalation-action-btn.svelte-1ng5a28 {display:inline-flex;align-items:center;gap:0.4rem;margin-top:0.5rem;padding:0.4rem 0.75rem;border:1px solid var(--theme-color, #3b82f6);border-radius:1rem;background:transparent;color:var(--theme-color, #3b82f6);font-size:0.8rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;}.escalation-action-btn.svelte-1ng5a28:hover {background:var(--theme-color, #3b82f6);color:white;}.escalation-action-btn.svelte-1ng5a28:active {transform:scale(0.98);}`
};
function i2(e, t) {
  ar(t, !0), bi(e, r2);
  const n = fn(t, "enableHumanEscalation", 3, !1), r = fn(t, "escalationButtonText", 3, "Talk to a human"), i = /* @__PURE__ */ Me(() => t.message.content), s = /* @__PURE__ */ Me(() => t.message.role), u = /* @__PURE__ */ Me(() => !!t.message.isStreaming), a = /* @__PURE__ */ Me(() => !!t.message.hasReceivedFirstEvent), c = /* @__PURE__ */ Me(() => C(u) && !C(a)), d = /* @__PURE__ */ Me(() => t.message.escalationMessageStatus), h = /* @__PURE__ */ Me(() => C(s) === "visitor" && !!C(d)), p = /* @__PURE__ */ Me(() => t.message.sources), b = /* @__PURE__ */ Me(() => C(s) === "agent"), _ = /* @__PURE__ */ Me(() => t.message.agentInfo), g = /* @__PURE__ */ Me(() => C(_)?.name || "Agent"), w = /* @__PURE__ */ Me(() => n() && t.message.showEscalationButton && !C(u)), v = /* @__PURE__ */ Me(() => C(s) !== "visitor" && !!t.message.showEmailCaptureButton && !C(u)), E = { Bot: Cu, BotMessageSquare: ul, Sparkle: ol, Sparkles: al }, y = t.botIcon && (t.botIcon.startsWith("http://") || t.botIcon.startsWith("https://")), S = !y && t.botIcon && E[t.botIcon] ? E[t.botIcon] : Cu, D = /* @__PURE__ */ Me(() => C(s) === "ai" || C(s) === "agent" ? kb(C(i)) : C(i));
  let A = /* @__PURE__ */ Se(null), T = /* @__PURE__ */ Se(!1), P = /* @__PURE__ */ Se("");
  function j(Z) {
    try {
      const ne = new CustomEvent("message-feedback", { detail: Z });
      document.dispatchEvent(ne);
    } catch {
      console.log("feedback", Z);
    }
  }
  function J(Z) {
    const ve = Z.target?.closest?.(".copy-code");
    if (!ve) return;
    const Pe = ve.getAttribute("data-code") || "", ge = ve.querySelector(".copy-label"), Oe = ge ? ge.textContent : "";
    navigator?.clipboard?.writeText && navigator.clipboard.writeText(Pe).then(() => {
      ge && (ge.textContent = "Copied"), setTimeout(
        () => {
          ge && (ge.textContent = Oe || "Copy Code");
        },
        1500
      );
    }).catch(() => {
      ge && (ge.textContent = "Failed"), setTimeout(
        () => {
          ge && (ge.textContent = Oe || "Copy Code");
        },
        1500
      );
    });
  }
  let te = /* @__PURE__ */ Se(null);
  en(() => {
    const Z = C(te);
    if (!Z) return;
    const ne = (ve) => J(ve);
    return Z.addEventListener("click", ne), () => {
      Z.removeEventListener("click", ne);
    };
  }), en(() => {
    const Z = t.message?.feedback;
    Z && (H(A, Z.reaction === "positive" ? "up" : "down", !0), H(T, !1));
  });
  var _e = n2(), we = Ie(_e), je = G(we), Te = G(je);
  {
    var ke = (Z) => {
      var ne = zm(), ve = G(ne);
      {
        var Pe = (Oe) => {
          var Le = Lm();
          de(() => {
            Ke(Le, "src", C(_).avatar), Ke(Le, "alt", C(_).name);
          }), W(Oe, Le);
        }, ge = (Oe, Le) => {
          {
            var Re = (ce) => {
              var Ge = Bm(), ut = G(Ge);
              de((Rt) => gt(ut, Rt), [
                () => C(_).name.charAt(0).toUpperCase()
              ]), W(ce, Ge);
            }, Xe = (ce, Ge) => {
              {
                var ut = (wt) => {
                  var ot = qm();
                  de(() => Ke(ot, "src", t.botIcon)), W(wt, ot);
                }, Rt = (wt, ot) => {
                  {
                    var jt = (Gt) => {
                      S(Gt, {
                        size: 20,
                        strokeWidth: 2,
                        get color() {
                          return t.onPrimaryColor;
                        }
                      });
                    };
                    fe(
                      wt,
                      (Gt) => {
                        S && Gt(jt);
                      },
                      ot
                    );
                  }
                };
                fe(
                  ce,
                  (wt) => {
                    y ? wt(ut) : wt(Rt, !1);
                  },
                  Ge
                );
              }
            };
            fe(
              Oe,
              (ce) => {
                C(b) && C(_)?.name ? ce(Re) : ce(Xe, !1);
              },
              Le
            );
          }
        };
        fe(ve, (Oe) => {
          C(b) && C(_)?.avatar ? Oe(Pe) : Oe(ge, !1);
        });
      }
      de(() => {
        Qt(ne, 1, `avatar ${y || C(_)?.avatar ? "icon-url" : ""}`, "svelte-1ng5a28"), bt(ne, `background-color: ${(y || C(_)?.avatar ? "transparent" : t.primaryColor) ?? ""}; color: ${(y || C(_)?.avatar ? "inherit" : t.onPrimaryColor) ?? ""}`);
      }), W(Z, ne);
    };
    fe(Te, (Z) => {
      (C(s) === "ai" || C(b)) && (t.botIcon || C(_)) && Z(ke);
    });
  }
  var tt = ie(Te, 2), Bt = G(tt);
  {
    var qe = (Z) => {
      var ne = jm(), ve = G(ne);
      de(() => gt(ve, C(g))), W(Z, ne);
    };
    fe(Bt, (Z) => {
      C(b) && Z(qe);
    });
  }
  var nt = ie(Bt, 2), Dt = G(nt);
  {
    var qt = (Z) => {
      var ne = Um(), ve = G(ne);
      de(() => gt(ve, C(i))), W(Z, ne);
    }, st = (Z, ne) => {
      {
        var ve = (ge) => {
          var Oe = Hm();
          W(ge, Oe);
        }, Pe = (ge) => {
          var Oe = Ym(), Le = Ie(Oe), Re = G(Le);
          Ld(Re, () => C(D)), Xr(Le, (Ge) => H(te, Ge), () => C(te));
          var Xe = ie(Le, 2);
          {
            var ce = (Ge) => {
              var ut = Gm(), Rt = ie(G(ut), 2);
              Xi(Rt, 21, () => C(p), $u, (wt, ot) => {
                var jt = Vm(), Gt = G(jt);
                {
                  var wn = (Ut) => {
                    var Mt = $m(), kn = G(Mt);
                    de(() => {
                      Ke(Mt, "href", C(ot).source), gt(kn, C(ot).title || C(ot).source);
                    }), W(Ut, Mt);
                  }, Yt = (Ut) => {
                    var Mt = Wm(), kn = G(Mt);
                    de(() => gt(kn, C(ot).title || "Untitled")), W(Ut, Mt);
                  };
                  fe(Gt, (Ut) => {
                    C(ot).source ? Ut(wn) : Ut(Yt, !1);
                  });
                }
                de(() => Ke(jt, "title", C(ot).source || "")), W(wt, jt);
              }), W(Ge, ut);
            };
            fe(Xe, (Ge) => {
              t.showSources && C(p) && C(p).length > 0 && Ge(ce);
            });
          }
          de(() => Qt(Le, 1, `message-markdown markdown ${C(u) ? "typing-animation" : ""}`, "svelte-1ng5a28")), W(ge, Oe);
        };
        fe(
          Z,
          (ge) => {
            C(c) ? ge(ve) : ge(Pe, !1);
          },
          ne
        );
      }
    };
    fe(Dt, (Z) => {
      C(s) === "visitor" ? Z(qt) : Z(st, !1);
    });
  }
  var zt = ie(nt, 2), On = G(zt);
  {
    var $e = (Z) => {
      var ne = Km(), ve = Ie(ne), Pe = G(ve);
      de(() => gt(Pe, C(d))), W(Z, ne);
    };
    fe(On, (Z) => {
      C(h) && Z($e);
    });
  }
  var De = ie(On, 2), Kn = G(De), Rn = ie(De, 2);
  {
    var Fe = (Z) => {
      var ne = Jm(), ve = G(ne);
      {
        var Pe = (Le) => {
          var Re = Zm();
          Re.__click = [
            Fm,
            A,
            j,
            t,
            T,
            P
          ];
          var Xe = G(Re);
          bp(Xe, { size: 14 }), de(() => {
            Qt(Re, 1, `feedback-btn up ${C(A) === "up" ? "selected" : ""}`, "svelte-1ng5a28"), Ke(Re, "aria-pressed", C(A) === "up");
          }), W(Le, Re);
        };
        fe(ve, (Le) => {
          C(A) !== "down" && Le(Pe);
        });
      }
      var ge = ie(ve, 2);
      {
        var Oe = (Le) => {
          var Re = Xm();
          Re.__click = [
            Nm,
            A,
            T,
            P,
            j,
            t
          ];
          var Xe = G(Re);
          gp(Xe, { size: 14 }), de(() => {
            Qt(Re, 1, `feedback-btn down ${C(A) === "down" ? "selected" : ""}`, "svelte-1ng5a28"), Ke(Re, "aria-pressed", C(A) === "down");
          }), W(Le, Re);
        };
        fe(ge, (Le) => {
          C(A) !== "up" && Le(Oe);
        });
      }
      W(Z, ne);
    };
    fe(Rn, (Z) => {
      (C(s) === "ai" || C(b)) && t.message.id && Z(Fe);
    });
  }
  var Ot = ie(zt, 2);
  {
    var Zn = (Z) => {
      var ne = Qm();
      ne.__click = function(...Oe) {
        t.onEscalationClick?.apply(this, Oe);
      };
      var ve = G(ne);
      cl(ve, { size: 16 });
      var Pe = ie(ve, 2), ge = G(Pe);
      de(() => {
        bt(ne, `--theme-color: ${t.primaryColor ?? ""}`), gt(ge, r());
      }), W(Z, ne);
    };
    fe(Ot, (Z) => {
      C(w) && Z(Zn);
    });
  }
  var yt = ie(Ot, 2);
  {
    var Mn = (Z) => {
      var ne = e2();
      ne.__click = function(...Pe) {
        t.onEmailCaptureClick?.apply(this, Pe);
      };
      var ve = G(ne);
      up(ve, { size: 16 }), de(() => bt(ne, `--theme-color: ${t.primaryColor ?? ""}`)), W(Z, ne);
    };
    fe(yt, (Z) => {
      C(v) && Z(Mn);
    });
  }
  var yn = ie(we, 2);
  {
    var Fn = (Z) => {
      var ne = t2(), ve = G(ne), Pe = ie(G(ve), 2);
      Ke(Pe, "rows", 5);
      var ge = ie(Pe, 2), Oe = G(ge);
      Oe.__click = [
        Pm,
        j,
        t,
        T,
        P
      ];
      var Le = ie(Oe, 2);
      Le.__click = [
        Im,
        j,
        t,
        P,
        T
      ], pu(Pe, () => C(P), (Re) => H(P, Re)), W(Z, ne);
    };
    fe(yn, (Z) => {
      C(T) && Z(Fn);
    });
  }
  de(
    (Z) => {
      Qt(we, 1, `message-container ${C(s) === "visitor" ? "visitor-message" : "ai-message"} ${C(b) ? "agent-message" : ""}`, "svelte-1ng5a28"), Qt(je, 1, `message-content ${C(s) === "visitor" ? "visitor-content" : "ai-content"}`, "svelte-1ng5a28"), Qt(tt, 1, `message-body ${C(s) ?? ""}-body`, "svelte-1ng5a28"), Qt(nt, 1, `bubble ${C(s) ?? ""}-bubble ${C(u) ? "streaming" : ""}`, "svelte-1ng5a28"), bt(nt, `--message-color: ${(C(s) === "visitor" ? t.secondaryColor : "white") ?? ""}; --text-color: ${(C(s) === "visitor" ? t.onSecondaryColor : "#1f2937") ?? ""}`), Qt(zt, 1, `meta-row ${C(s) ?? ""}-meta`, "svelte-1ng5a28"), gt(Kn, Z);
    },
    [
      () => Mm(t.message.timestamp)
    ]
  ), W(e, _e), cr();
}
gi(["click"]);
var s2 = /* @__PURE__ */ ae('<img class="svelte-8xr0xq">'), u2 = /* @__PURE__ */ ae('<div class="avatar-placeholder svelte-8xr0xq"> </div>'), o2 = /* @__PURE__ */ ae('<div class="agent-typing svelte-8xr0xq"><div class="typing-avatar svelte-8xr0xq"><!></div> <div class="typing-content svelte-8xr0xq"><span class="typing-text svelte-8xr0xq"></span> <div class="typing-dots svelte-8xr0xq"><span class="dot svelte-8xr0xq"></span> <span class="dot svelte-8xr0xq"></span> <span class="dot svelte-8xr0xq"></span></div></div></div>');
const a2 = {
  hash: "svelte-8xr0xq",
  code: `.agent-typing.svelte-8xr0xq {display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;margin:0.5rem 1rem;background-color:#f8f9fa;border-radius:8px;
    animation: svelte-8xr0xq-fadeIn 0.3s ease-in-out;}

  @keyframes svelte-8xr0xq-fadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }.typing-avatar.svelte-8xr0xq {flex-shrink:0;}.typing-avatar.svelte-8xr0xq img:where(.svelte-8xr0xq) {width:28px;height:28px;border-radius:50%;object-fit:cover;}.avatar-placeholder.svelte-8xr0xq {width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:600;}.typing-content.svelte-8xr0xq {display:flex;align-items:center;gap:0.5rem;}.typing-text.svelte-8xr0xq {font-size:0.9rem;color:#666;font-style:italic;}.typing-dots.svelte-8xr0xq {display:flex;gap:0.25rem;align-items:center;}.dot.svelte-8xr0xq {width:6px;height:6px;border-radius:50%;background-color:#999;
    animation: svelte-8xr0xq-typing 1.4s ease-in-out infinite;}.dot.svelte-8xr0xq:nth-child(1) {animation-delay:0s;}.dot.svelte-8xr0xq:nth-child(2) {animation-delay:0.2s;}.dot.svelte-8xr0xq:nth-child(3) {animation-delay:0.4s;}

  @keyframes svelte-8xr0xq-typing {
    0%,
    60%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    30% {
      opacity: 1;
      transform: scale(1.2);
    }
  }`
};
function c2(e, t) {
  ar(t, !0), bi(e, a2);
  let n = fn(t, "agent", 3, null);
  const r = n()?.name || "Agent";
  var i = o2(), s = G(i), u = G(s);
  {
    var a = (p) => {
      var b = s2();
      Ke(b, "alt", r), de(() => Ke(b, "src", n().avatar)), W(p, b);
    }, c = (p) => {
      var b = u2(), _ = G(b);
      de((g) => gt(_, g), [
        () => r.charAt(0).toUpperCase()
      ]), W(p, b);
    };
    fe(u, (p) => {
      n()?.avatar ? p(a) : p(c, !1);
    });
  }
  var d = ie(s, 2), h = G(d);
  h.textContent = `${r} is typing`, W(e, i), cr();
}
const l2 = (e, t, n) => {
  H(t, !1), H(n, null);
}, d2 = (e, t, n) => {
  H(t, !0), H(n, null);
};
var f2 = /* @__PURE__ */ ae('<div class="error-banner svelte-1ni34yq"><span class="error-text svelte-1ni34yq"> </span> <button type="button" class="error-dismiss svelte-1ni34yq" aria-label="Dismiss error">✕</button></div>'), h2 = /* @__PURE__ */ ae('<div class="loading-more svelte-1ni34yq"><div class="loading-spinner svelte-1ni34yq"></div> <span>Loading previous messages...</span></div>'), p2 = /* @__PURE__ */ ae('<div class="date-separator svelte-1ni34yq"><div class="date-separator-line svelte-1ni34yq"></div> <span class="date-separator-label svelte-1ni34yq"> </span> <div class="date-separator-line svelte-1ni34yq"></div></div>'), g2 = (e, t, n) => t(C(n)), b2 = /* @__PURE__ */ ae('<button type="button" class="quick-question svelte-1ni34yq"> </button>'), m2 = /* @__PURE__ */ ae('<div class="quick-questions svelte-1ni34yq"><!> <div class="ai-disclaimer svelte-1ni34yq">Responses are generated using AI and may contain mistakes.</div></div>'), _2 = (e, t, n) => e.key === "Enter" && !C(t) && n(), v2 = /* @__PURE__ */ ae('<p class="email-capture-error svelte-1ni34yq"> </p>'), x2 = /* @__PURE__ */ ae('<div class="email-capture-overlay svelte-1ni34yq"><div class="email-capture-box svelte-1ni34yq"><h3 class="svelte-1ni34yq">What is your email address?</h3> <p class="svelte-1ni34yq">Enter your email to know when we reply.</p> <input type="email" class="email-capture-input svelte-1ni34yq" placeholder="Enter your email address..."> <!> <div class="email-capture-actions svelte-1ni34yq"><button type="button" class="email-capture-save svelte-1ni34yq"> </button> <button type="button" class="email-capture-skip svelte-1ni34yq">Skip</button></div></div></div>'), y2 = /* @__PURE__ */ ae('<button type="button" class="email-reminder-banner svelte-1ni34yq">🔔 Click to set your email to get notifications.</button>'), w2 = (e, t) => {
  e.stopPropagation(), H(t, !C(t));
}, k2 = (e, t, n) => {
  H(t, !1), n();
}, E2 = /* @__PURE__ */ ae('<div class="attachment-menu svelte-1ni34yq"><button type="button" class="attachment-menu-item svelte-1ni34yq"><!> <span> </span></button></div>'), C2 = /* @__PURE__ */ ae('<div class="attachment-menu-wrapper svelte-1ni34yq"><button type="button" class="attachment-toggle svelte-1ni34yq"><!></button> <!></div>'), S2 = (e, t, n, r) => {
  ((s) => s && (s.length === 1 || s === "Backspace" || s === "Delete"))(e.key) && (H(t, !0), n()), e.key === "Enter" && (e.shiftKey || (e.preventDefault(), r()));
}, A2 = /* @__PURE__ */ ae('<div class="branding svelte-1ni34yq">Powered by <a target="_blank" rel="noopener noreferrer" class="branding-link svelte-1ni34yq"></a></div>'), T2 = /* @__PURE__ */ ae('<div class="chat-container svelte-1ni34yq"><!> <div class="messages-container svelte-1ni34yq"><!> <!> <!> <div class="bottom-anchor"></div></div> <!> <!> <!> <form class="input-container svelte-1ni34yq"><!> <textarea class="message-input svelte-1ni34yq" rows="1"></textarea> <button type="submit" class="send-button svelte-1ni34yq" aria-label="Send message" title="Send"><!></button></form> <!></div>');
const D2 = {
  hash: "svelte-1ni34yq",
  code: `.chat-container.svelte-1ni34yq {height:100%;display:flex;flex-direction:column;overflow:hidden;position:relative;}.messages-container.svelte-1ni34yq {flex:1;overflow-y:auto;
    /* Reduced horizontal padding (was 0.75rem) to tighten message list */padding:0.5rem 0.5rem;background-color:#f7f7f7;display:flex;flex-direction:column;width:100%;box-sizing:border-box;min-height:0; /* Important for flex container */}.quick-questions.svelte-1ni34yq {background-color:#f7f7f7;padding:0.25rem 0.75rem 0.5rem 0.75rem;display:flex;flex-direction:column;gap:0.15rem;}.date-separator.svelte-1ni34yq {display:flex;align-items:center;gap:0.5rem;padding:0.25rem 0;}.date-separator-line.svelte-1ni34yq {height:1px;flex:1;background-color:#e5e7eb;}.date-separator-label.svelte-1ni34yq {background-color:#ffffff;color:#6b7280;border-radius:9999px;font-size:0.75rem;line-height:1rem;padding:0.125rem 0.75rem;box-shadow:0 1px 2px rgba(0, 0, 0, 0.06);white-space:nowrap;}.quick-question.svelte-1ni34yq {background:transparent;border:none;padding:2px 0;text-align:left;font-size:0.7rem; /* ~11px similar to vue preview */font-weight:500;line-height:1.35;color:var(--theme-color, #3b82f6);cursor:pointer;white-space:normal;word-break:break-word;}.quick-question.svelte-1ni34yq:hover,
  .quick-question.svelte-1ni34yq:focus-visible {text-decoration:underline;outline:none;}.email-capture-overlay.svelte-1ni34yq {position:absolute;inset:0;z-index:40;display:flex;align-items:flex-end;justify-content:center;padding:0.35rem;background:rgba(15, 23, 42, 0.2);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);}.email-capture-box.svelte-1ni34yq {width:100%;max-width:100%;margin:0;padding:0.75rem;border-radius:0.75rem;border:1px solid #e5e7eb;background-color:#ffffff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.08);
    animation: svelte-1ni34yq-email-sheet-in 0.18s ease-out;}.email-capture-box.svelte-1ni34yq h3:where(.svelte-1ni34yq) {margin:0;font-size:1rem;line-height:1.3;text-align:center;color:#1f2937;}.email-capture-box.svelte-1ni34yq p:where(.svelte-1ni34yq) {margin:0.4rem 0 0;font-size:0.82rem;color:#374151;text-align:center;}.email-capture-input.svelte-1ni34yq {margin-top:0.6rem;width:100%;padding:0.52rem 0.65rem;border:1px solid #d1d5db;border-radius:0.65rem;box-sizing:border-box;font-size:0.86rem;}.email-capture-input.svelte-1ni34yq:focus {outline:none;border-color:var(--theme-color, #3b82f6);}.email-capture-error.svelte-1ni34yq {margin-top:0.5rem !important;color:#b91c1c !important;font-size:0.85rem !important;text-align:left !important;}.email-capture-actions.svelte-1ni34yq {margin-top:0.65rem;display:flex;gap:0.5rem;}.email-capture-save.svelte-1ni34yq,
  .email-capture-skip.svelte-1ni34yq {flex:1;height:2.2rem;border-radius:0.65rem;font-weight:700;font-size:0.86rem;border:1px solid transparent;cursor:pointer;}.email-capture-save.svelte-1ni34yq {background-color:var(--theme-color, #3b82f6);color:#ffffff;}.email-capture-save.svelte-1ni34yq:disabled {opacity:0.75;cursor:not-allowed;}.email-capture-skip.svelte-1ni34yq {background-color:#ffffff;border-color:#d1d5db;color:#1f2937;}.email-reminder-banner.svelte-1ni34yq {margin:0.2rem 0.5rem 0.2rem;width:calc(100% - 1rem);border:1px solid #e8dfb5;border-radius:0.45rem;background:#f3ebc8;color:#1f2f46;font-size:0.74rem;font-weight:600;line-height:1.2;padding:0.34rem 0.65rem;text-align:center;cursor:pointer;}.email-reminder-banner.svelte-1ni34yq:hover {filter:brightness(0.98);}

  @keyframes svelte-1ni34yq-email-sheet-in {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }.input-container.svelte-1ni34yq {flex-shrink:0;border-top:1px solid #e5e7eb;background-color:#f7f7f7;padding:0.25rem;width:100%;box-sizing:border-box;position:relative;display:flex;align-items:flex-end;gap:0.25rem;}

  /* Attachment menu wrapper */.attachment-menu-wrapper.svelte-1ni34yq {position:relative;flex-shrink:0;}.attachment-toggle.svelte-1ni34yq {width:2.25rem;height:2.25rem;border:none;border-radius:50%;background-color:#e5e7eb;color:#6b7280;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease;}.attachment-toggle.svelte-1ni34yq:hover {background-color:#d1d5db;color:#374151;}.attachment-menu.svelte-1ni34yq {position:absolute;bottom:100%;left:0;margin-bottom:0.5rem;background:white;border:1px solid #e5e7eb;border-radius:0.5rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);min-width:180px;z-index:10;overflow:hidden;}.attachment-menu-item.svelte-1ni34yq {display:flex;align-items:center;gap:0.5rem;width:100%;padding:0.75rem 1rem;border:none;background:transparent;color:var(--theme-color, #3b82f6);font-size:0.9rem;font-weight:500;cursor:pointer;transition:background-color 0.15s ease;text-align:left;}.attachment-menu-item.svelte-1ni34yq:hover {background-color:#f3f4f6;}.message-input.svelte-1ni34yq {flex:1;padding:0.5rem 2.25rem 0.5rem 0.5rem; /* add right padding for send button */border:1px solid #e5e7eb;border-radius:0.5rem;box-sizing:border-box;font-size:0.875rem;resize:none;min-height:2.5rem;max-height:120px;line-height:1.5;overflow-y:auto;transition:height 0.1s ease;display:block;}.message-input.svelte-1ni34yq:focus {outline:none;border-color:var(--theme-color);}.message-input.svelte-1ni34yq:disabled {background-color:#f9fafb;cursor:not-allowed;}.send-button.svelte-1ni34yq {position:absolute;right:0.25rem;top:50%;transform:translateY(-50%);width:2rem;height:2rem;border:none;display:flex;align-items:center;justify-content:center;color:var(--theme-color);background:transparent;cursor:pointer;transition:background-color 0.15s ease,
      transform 0.15s ease,
      opacity 0.15s ease;}

  /* Hover effect removed as requested */.send-button.svelte-1ni34yq:disabled {opacity:0.5;cursor:not-allowed;}.loading-more.svelte-1ni34yq {display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.5rem;color:#6b7280;font-size:0.875rem;}.loading-spinner.svelte-1ni34yq {width:1rem;height:1rem;border:2px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;
    animation: svelte-1ni34yq-spin 1s linear infinite;}

  @keyframes svelte-1ni34yq-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Branding line below the input */.branding.svelte-1ni34yq {text-align:center;color:black; /* slate-400 */font-size:11px;margin:0.1rem 0 0.1rem 0;}.branding-link.svelte-1ni34yq {font-weight:600;color:var(--theme-color, #3b82f6);text-decoration:none;margin-left:0.25rem;font-size:inherit;display:inline-block;}

  /* Small muted disclaimer under quick questions */.ai-disclaimer.svelte-1ni34yq {font-size:0.7rem; /* ~11px */color:#6b7280; /* slate-500 */text-align:center;margin-top:0.15rem;}

  /* Error banner styles */.error-banner.svelte-1ni34yq {display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding:0.75rem 1rem;background-color:#fef2f2;border-bottom:1px solid #fecaca;color:#991b1b;font-size:0.875rem;}.error-text.svelte-1ni34yq {flex:1;}.error-dismiss.svelte-1ni34yq {background:none;border:none;color:#991b1b;cursor:pointer;font-size:1rem;padding:0.25rem;line-height:1;opacity:0.7;transition:opacity 0.15s ease;}.error-dismiss.svelte-1ni34yq:hover {opacity:1;}`
};
function O2(e, t) {
  ar(t, !0), bi(e, D2);
  const [n, r] = Yd(), i = () => Gd(Q, "$chatStore", n), s = "fluentBot", u = "https://staging.fluentbot.ai";
  let a = /* @__PURE__ */ Se(""), c = /* @__PURE__ */ Se("What do you want to know?"), d = 0, h = !1, p = null, b = /* @__PURE__ */ Se(!1), _, g, w = /* @__PURE__ */ Se(!1), v = /* @__PURE__ */ Se(!0), E = /* @__PURE__ */ Se(!1), y;
  const S = `fbt_visitor_email_${t.settings.bot_id}`;
  let D = /* @__PURE__ */ Se(""), A = /* @__PURE__ */ Se(""), T = /* @__PURE__ */ Se(!1), P = /* @__PURE__ */ Se(!1), j = /* @__PURE__ */ Se(null), J = /* @__PURE__ */ Se(!1), te = null, _e = /* @__PURE__ */ Se(!1), we = /* @__PURE__ */ Se(void 0);
  const je = (R) => {
    C(_e) && C(we) && !C(we).contains(R.target) && H(_e, !1);
  };
  en(() => {
    if (C(_e))
      return document.addEventListener("click", je), () => document.removeEventListener("click", je);
  });
  let Te = /* @__PURE__ */ Me(() => i().messages), ke = /* @__PURE__ */ Me(() => i().isLoading), tt = /* @__PURE__ */ Me(() => i().hasMore), Bt = /* @__PURE__ */ Me(() => i().chat_id), qe = /* @__PURE__ */ Me(() => i().error);
  const nt = /* @__PURE__ */ Me(() => C(Te).some((R) => R.role === "visitor")), Dt = new Intl.DateTimeFormat(void 0, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }), qt = (R) => {
    const B = R?.timestamp || R?.created_at;
    if (!B)
      return null;
    const M = new Date(B);
    return Number.isNaN(M.getTime()) ? null : M;
  }, st = (R) => new Date(R.getFullYear(), R.getMonth(), R.getDate()), zt = (R) => {
    const B = String(R.getMonth() + 1).padStart(2, "0"), M = String(R.getDate()).padStart(2, "0");
    return `${R.getFullYear()}-${B}-${M}`;
  }, On = (R) => {
    const B = st(/* @__PURE__ */ new Date()), M = st(R), I = Math.round((B.getTime() - M.getTime()) / (1e3 * 60 * 60 * 24));
    return I === 0 ? "Today" : I === 1 ? "Yesterday" : Dt.format(R);
  };
  let $e = /* @__PURE__ */ Me(() => {
    const R = [];
    let B = null;
    return C(Te).forEach((M, I) => {
      const $ = qt(M), he = $ ? zt($) : "unknown";
      he !== B && (R.push({
        type: "separator",
        key: `sep-${he}-${I}`,
        label: $ ? On($) : "Unknown date"
      }), B = he), R.push({
        type: "message",
        key: `msg-${M?.id ?? I}`,
        message: M
      });
    }), R;
  }), De = /* @__PURE__ */ Me(() => i().escalationStatus), Kn = /* @__PURE__ */ Me(() => i().currentAgent), Rn = /* @__PURE__ */ Me(() => i().agentTyping), Fe = null;
  en(() => {
    if (!C(qe)) {
      Fe && (clearTimeout(Fe), Fe = null);
      return;
    }
    return Fe && (clearTimeout(Fe), Fe = null), Fe = setTimeout(
      () => {
        Fe = null, Ot();
      },
      5e3
    ), () => {
      Fe && (clearTimeout(Fe), Fe = null);
    };
  });
  const Ot = () => {
    Fe && (clearTimeout(Fe), Fe = null), Q.update((R) => ({ ...R, error: null }));
  }, Zn = () => {
    if (!_) return !0;
    const R = 80, { scrollTop: B, scrollHeight: M, clientHeight: I } = _;
    return M - (B + I) <= R;
  }, yt = (R = !1) => {
    if (!_) return;
    if (y) {
      y.scrollIntoView({
        behavior: R ? "smooth" : "auto",
        block: "end"
      });
      return;
    }
    const B = _.scrollHeight;
    R ? _.scrollTo({ top: B, behavior: "smooth" }) : _.scrollTop = B;
  }, Mn = async () => {
    if (!_ || (C(E) && H(v, Zn(), !0), C(w) || !C(tt))) return;
    const { scrollTop: R } = _;
    if (R === 0 && C(Bt)) {
      H(w, !0);
      const B = _.scrollHeight, M = _.scrollTop;
      await Jc(t.settings.bot_id, C(Bt), 20, i().nextCursor), await zs();
      const $ = _.scrollHeight - B;
      $ > 0 && (_.scrollTop = M + $), H(w, !1);
    }
  };
  Wu(() => {
    const R = localStorage.getItem(S) || "";
    R.trim() && H(D, R.trim(), !0);
    const B = () => {
      np();
    };
    window.addEventListener("beforeunload", B), requestAnimationFrame(() => yt(!1));
    const M = new ResizeObserver(() => {
      C(v) && yt(!1);
    });
    return _ && M.observe(_), () => {
      M.disconnect(), window.removeEventListener("beforeunload", B);
    };
  });
  const yn = () => {
    if (g) {
      g.style.height = "auto";
      const R = 120, M = Math.max(40, Math.min(g.scrollHeight, R));
      g.style.height = `${M}px`, g.style.overflowY = g.scrollHeight > R ? "auto" : "hidden";
    }
  }, Fn = () => {
    if (!g) return;
    const R = 40;
    g.value = "", g.style.height = `${R}px`, g.style.overflowY = "hidden";
  }, Z = () => {
    p && (clearTimeout(p), p = null);
  }, ne = async (R) => {
    let B = "";
    for (let M = 0; M < R.length; M++) {
      if (!h || C(b) || C(a).trim()) return;
      B += R[M], H(c, B + "|"), await new Promise((I) => p = setTimeout(I, 40));
    }
    H(c, B, !0), await new Promise((M) => p = setTimeout(M, 1400));
    for (let M = B.length; M >= 0; M--) {
      if (!h || C(b) || C(a).trim()) return;
      H(c, B.slice(0, M) + (M ? "|" : "")), await new Promise((I) => p = setTimeout(I, 25));
    }
    H(c, "");
  }, ve = async () => {
    const R = (t.settings?.quick_questions || []).slice(0, 10);
    if (!(!R || R.length === 0) && !h)
      for (h = !0; h; ) {
        if (C(b) || C(a).trim()) {
          await new Promise((M) => p = setTimeout(M, 500));
          continue;
        }
        const B = R[d % R.length] || R[0];
        await ne(B), d = (d + 1) % R.length, await new Promise((M) => p = setTimeout(M, 300));
      }
  }, Pe = () => {
    h = !1, Z();
  };
  en(() => {
    yn();
  }), en(() => {
    t.settings && t.settings.quick_questions && t.settings.quick_questions.length && !C(a).trim() && !C(b) ? ve() : (Pe(), C(a).trim() || H(c, "What do you want to know?"));
  }), ef(() => {
    Pe(), te && (clearTimeout(te), te = null);
  }), en(() => {
    const R = C(Te).length;
    if (!C(E) && R > 0) {
      zs().then(() => {
        requestAnimationFrame(() => {
          yt(!1), H(v, !0), H(E, !0);
        });
      });
      return;
    }
    C(v) && requestAnimationFrame(() => yt(!1));
  });
  const ge = async () => {
    if (!C(a).trim()) return;
    const R = C(a).trim(), B = C(De) === "pending" || C(De) === "unresolved";
    H(v, !0), H(a, ""), Fn();
    try {
      await Kh(R, t.settings), !C(D) && B && !C(J) && (H(J, !0), te && clearTimeout(te), te = setTimeout(
        () => {
          C(D) || (H(T, !0), H(j, null)), te = null;
        },
        1500
      ));
    } catch {
      H(a, R, !0), await zs(), yn();
    }
  }, Oe = async () => {
    const R = C(A).trim();
    if (!R) {
      H(j, "Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(R)) {
      H(j, "Enter a valid email address");
      return;
    }
    H(P, !0), H(j, null);
    try {
      const M = await rp(t.settings.bot_id, R);
      H(D, M, !0), localStorage.setItem(S, M), te && (clearTimeout(te), te = null), H(T, !1), H(A, "");
    } catch {
      H(j, "Could not save email. Please try again.");
    } finally {
      H(P, !1);
    }
  }, Le = (R) => {
    R && (H(a, R, !0), ge());
  }, Re = async () => {
    if (!(C(De) === "pending" || C(De) === "unresolved"))
      try {
        await ep(t.settings.bot_id, C(Bt));
      } catch (R) {
        console.error("Escalation request failed:", R);
      }
  };
  var Xe = T2(), ce = G(Xe);
  {
    var Ge = (R) => {
      var B = f2(), M = G(B), I = G(M), $ = ie(M, 2);
      $.__click = Ot, de(() => gt(I, C(qe))), W(R, B);
    };
    fe(ce, (R) => {
      C(qe) && R(Ge);
    });
  }
  var ut = ie(ce, 2), Rt = G(ut);
  {
    var wt = (R) => {
      var B = h2();
      W(R, B);
    };
    fe(Rt, (R) => {
      C(w) && R(wt);
    });
  }
  var ot = ie(Rt, 2);
  Xi(ot, 17, () => C($e), (R) => R.key, (R, B) => {
    var M = He(), I = Ie(M);
    {
      var $ = (pe) => {
        var Je = p2(), We = ie(G(Je), 2), Ht = G(We);
        de(() => gt(Ht, C(B).label)), W(pe, Je);
      }, he = (pe) => {
        const Je = /* @__PURE__ */ Me(() => t.settings.escalation_button_text || "Talk to a human");
        i2(pe, {
          get message() {
            return C(B).message;
          },
          get botIcon() {
            return t.settings.bot_icon;
          },
          get primaryColor() {
            return t.settings.primary_color;
          },
          get secondaryColor() {
            return t.settings.secondary_color;
          },
          get onPrimaryColor() {
            return t.settings.on_primary_color;
          },
          get onSecondaryColor() {
            return t.settings.on_secondary_color;
          },
          get showSources() {
            return t.settings.show_sources;
          },
          get enableHumanEscalation() {
            return t.settings.enable_human_escalation;
          },
          get escalationButtonText() {
            return C(Je);
          },
          onEscalationClick: Re
        });
      };
      fe(I, (pe) => {
        C(B).type === "separator" ? pe($) : pe(he, !1);
      });
    }
    W(R, M);
  });
  var jt = ie(ot, 2);
  {
    var Gt = (R) => {
      var B = He(), M = Ie(B);
      {
        var I = ($) => {
          c2($, {
            get agent() {
              return C(Kn);
            }
          });
        };
        fe(M, ($) => {
          C(De) === "unresolved" && C(Rn) && $(I);
        });
      }
      W(R, B);
    };
    fe(jt, (R) => {
      t.settings.enable_human_escalation && R(Gt);
    });
  }
  var wn = ie(jt, 2);
  Xr(wn, (R) => y = R, () => y), Xr(ut, (R) => _ = R, () => _);
  var Yt = ie(ut, 2);
  {
    var Ut = (R) => {
      var B = m2(), M = G(B);
      Xi(M, 17, () => t.settings.quick_questions.slice(0, 3), $u, (I, $) => {
        var he = b2();
        he.__click = [g2, Le, $];
        var pe = G(he);
        de(() => {
          bt(he, `--theme-color: ${t.settings.primary_color ?? ""}`), gt(pe, C($));
        }), W(I, he);
      }), W(R, B);
    };
    fe(Yt, (R) => {
      !C(nt) && t.settings.quick_questions && t.settings.quick_questions.length && R(Ut);
    });
  }
  var Mt = ie(Yt, 2);
  {
    var kn = (R) => {
      var B = x2(), M = G(B), I = ie(G(M), 4);
      I.__keydown = [_2, P, Oe];
      var $ = ie(I, 2);
      {
        var he = (Ft) => {
          var Zt = v2(), Pn = G(Zt);
          de(() => gt(Pn, C(j))), W(Ft, Zt);
        };
        fe($, (Ft) => {
          C(j) && Ft(he);
        });
      }
      var pe = ie($, 2), Je = G(pe);
      Je.__click = Oe;
      var We = G(Je), Ht = ie(Je, 2);
      Ht.__click = [
        l2,
        T,
        j
      ], de(() => {
        bt(Je, `--theme-color: ${t.settings.primary_color ?? ""}`), Je.disabled = C(P), gt(We, C(P) ? "Saving..." : "Set my email");
      }), pu(I, () => C(A), (Ft) => H(A, Ft)), W(R, B);
    };
    fe(Mt, (R) => {
      C(T) && R(kn);
    });
  }
  var Nn = ie(Mt, 2);
  {
    var In = (R) => {
      var B = y2();
      B.__click = [d2, T, j], de(() => bt(B, `--theme-color: ${t.settings.primary_color ?? ""}; --theme-soft: ${t.settings.secondary_color ?? ""}`)), W(R, B);
    };
    fe(Nn, (R) => {
      C(nt) && (C(De) === "pending" || C(De) === "unresolved") && !C(D) && !C(T) && R(In);
    });
  }
  var ft = ie(Nn, 2), lr = G(ft);
  {
    var Kt = (R) => {
      var B = C2(), M = G(B);
      M.__click = [w2, _e];
      var I = G(M);
      {
        var $ = (We) => {
          Ju(We, { size: 20, strokeWidth: 2 });
        }, he = (We) => {
          hp(We, { size: 20, strokeWidth: 2 });
        };
        fe(I, (We) => {
          C(_e) ? We($) : We(he, !1);
        });
      }
      var pe = ie(M, 2);
      {
        var Je = (We) => {
          var Ht = E2(), Ft = G(Ht);
          Ft.__click = [
            k2,
            _e,
            Re
          ];
          var Zt = G(Ft);
          cl(Zt, { size: 18 });
          var Pn = ie(Zt, 2), Xt = G(Pn);
          de(() => {
            bt(Ft, `--theme-color: ${t.settings.primary_color ?? ""}`), gt(Xt, t.settings.escalation_button_text || "Talk to a human");
          }), W(We, Ht);
        };
        fe(pe, (We) => {
          C(_e) && We(Je);
        });
      }
      Xr(B, (We) => H(we, We), () => C(we)), de(() => Ke(M, "aria-label", C(_e) ? "Close menu" : "Open menu")), W(R, B);
    };
    fe(lr, (R) => {
      t.settings.enable_human_escalation && C(De) !== "resolved" && R(Kt);
    });
  }
  var at = ie(lr, 2);
  at.__input = yn, at.__keydown = [
    S2,
    b,
    Pe,
    ge
  ], Xr(at, (R) => g = R, () => g);
  var k = ie(at, 2), N = G(k);
  pp(N, { size: 18, strokeWidth: 2 });
  var z = ie(ft, 2);
  {
    var X = (R) => {
      var B = A2(), M = ie(G(B));
      Ke(M, "href", u), M.textContent = s, de(() => bt(M, `color: ${t.settings.primary_color ?? ""}`)), W(R, B);
    };
    fe(z, (R) => {
      t.settings.show_branding && R(X);
    });
  }
  de(
    (R) => {
      bt(ft, `--theme-color: ${t.settings.primary_color ?? ""}; --hover-color: ${t.settings.secondary_color ?? ""}`), Ke(at, "placeholder", C(c)), at.disabled = C(ke), k.disabled = R;
    },
    [
      () => C(ke) || !C(a).trim()
    ]
  ), Ri("scroll", ut, Mn), Ri("submit", ft, (R) => {
    R.preventDefault(), ge();
  }), Ri("focus", at, () => {
    H(b, !0), Pe();
  }), Ri("blur", at, () => {
    H(b, !1);
  }), pu(at, () => C(a), (R) => H(a, R)), W(e, Xe), cr(), r();
}
gi(["click", "keydown", "input"]);
const uu = "fbt_chat_id", Sa = ["chat_id", "currentChatId"], ou = "fbt_session_token", Aa = "session_token";
class R2 {
  settings;
  constructor(t) {
    this.settings = t, Yh(this.resetChat.bind(this));
  }
  async initialize() {
    let t = localStorage.getItem(uu);
    if (!t)
      for (const r of Sa) {
        const i = localStorage.getItem(r);
        if (i) {
          t = i, localStorage.setItem(uu, i), localStorage.removeItem(r);
          break;
        }
      }
    const n = localStorage.getItem(ou) || localStorage.getItem(Aa);
    !localStorage.getItem(ou) && n && (localStorage.setItem(ou, n), localStorage.removeItem(Aa)), n && Q.update((r) => ({
      ...r,
      session_token: n
    })), t ? await Jc(this.settings.bot_id, t, 20, null) : this.settings.first_message && this.addInitialMessage();
  }
  addInitialMessage() {
    this.settings.first_message && Q.update((t) => ({
      ...t,
      messages: [
        {
          role: "ai",
          content: this.settings.first_message,
          timestamp: /* @__PURE__ */ new Date()
        }
      ]
    }));
  }
  resetChat() {
    Q.update((t) => ({
      ...t,
      messages: []
    })), localStorage.removeItem(uu);
    for (const t of Sa)
      localStorage.removeItem(t);
    Xc(), this.settings.first_message && this.addInitialMessage();
  }
}
const M2 = (e, t) => {
  t.resetChat();
}, F2 = (e, t) => {
  if (C(t)) {
    const n = new CustomEvent("minimize-widget");
    document.dispatchEvent(n), H(t, !1);
  } else {
    const n = new CustomEvent("maximize-widget");
    document.dispatchEvent(n), H(t, !0);
  }
};
var N2 = /* @__PURE__ */ ae('<img class="logo svelte-nnvbbk" loading="lazy" decoding="async">'), I2 = () => document.dispatchEvent(new CustomEvent("close-widget")), P2 = /* @__PURE__ */ ae('<main class="svelte-nnvbbk"><header class="main-header svelte-nnvbbk"><div class="brand svelte-nnvbbk"><!> <div class="title svelte-nnvbbk"> </div></div> <div class="button-group svelte-nnvbbk"><button class="icon-button svelte-nnvbbk"><!></button> <button class="icon-button reset-mobile svelte-nnvbbk" aria-label="Reset chat"><!></button> <button class="icon-button close-mobile svelte-nnvbbk" aria-label="Close chat"><!></button></div></header> <div class="content svelte-nnvbbk"><!></div></main>');
const L2 = {
  hash: "svelte-nnvbbk",
  code: `main.svelte-nnvbbk {height:100vh;display:flex;flex-direction:column;background-color:#f7f7f7; /* gray-50 */overflow:hidden; /* preserve container rounded-corner clipping */}header.svelte-nnvbbk {color:inherit;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;}.main-header.svelte-nnvbbk {color:inherit;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;position:relative; /* ensure tooltips appear above content */z-index:2;}.brand.svelte-nnvbbk {display:flex;align-items:center;gap:0.5rem;min-width:0; /* allow children to truncate */}

  /* Constrain header logo so large images don't expand the header
     - Keep a sensible height, allow width to scale, and use object-fit
       so logos preserve aspect ratio without distortion. */.brand.svelte-nnvbbk .logo:where(.svelte-nnvbbk) {display:block;height:2rem; /* 32px - fits header comfortably */max-height:2.5rem; /* allow slightly taller logos on high-DPI */width:auto;max-width:12rem; /* avoid extremely wide logos pushing controls off-screen */object-fit:contain;}.title.svelte-nnvbbk {font-size:1.125rem;font-weight:600;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;}.button-group.svelte-nnvbbk {margin-left:auto;display:flex;gap:0.5rem;}

  /* Close button: always visible and placed to the right of Reset */.close-mobile.svelte-nnvbbk {display:inline-flex; /* show on all screen sizes */order:1; /* ensure it's placed after the reset button */}

  /* Ensure regular controls are visible on large screens */.button-group.svelte-nnvbbk .icon-button:where(.svelte-nnvbbk) {display:inline-flex;}

  @media screen and (max-width: 640px) {.close-mobile.svelte-nnvbbk {display:inline-flex !important;}

    /* hide regular maximize/minimize controls on mobile to reduce clutter (keep reset visible) */.button-group.svelte-nnvbbk .icon-button:where(.svelte-nnvbbk):not(.close-mobile):not(.reset-mobile) {display:none !important;}

    /* Show reset on mobile and keep it left of the close button */.reset-mobile.svelte-nnvbbk {display:inline-flex !important;order:0;margin-right:0; /* spacing handled on the close button */}.close-mobile.svelte-nnvbbk {order:1;}
  }.icon-button.svelte-nnvbbk {background:transparent;border:none;color:inherit; /* follow header on_primary_color */cursor:pointer;position:relative; /* enable tooltip positioning */display:inline-flex;align-items:center;justify-content:center;}

  /* Custom tooltip using aria-label as content */.icon-button.svelte-nnvbbk::after {content:attr(aria-label);position:absolute;top:calc(
      100% + 8px
    ); /* place tooltip below to avoid clipping by container */left:50%;transform:translateX(-50%);background-color:rgba(17, 24, 39, 0.95); /* near-black */color:#fff;padding:6px 8px; /* padding as requested */border-radius:6px; /* rounded corners as requested */font-size:12px;line-height:1;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity 150ms ease,
      transform 150ms ease;z-index:1000;}.icon-button.svelte-nnvbbk:hover::after,
  .icon-button.svelte-nnvbbk:focus-visible::after {opacity:1;transform:translateX(-50%) translateY(2px); /* slight downward nudge */}

  /* Keep the right-most tooltip inside the container by aligning it to the right edge of the button */.button-group.svelte-nnvbbk .icon-button:where(.svelte-nnvbbk):last-child::after {left:auto;right:0;transform:translateY(2px);}.content.svelte-nnvbbk {flex:1;overflow:hidden; /* keep scrolling content masked while tooltips can overflow from header */}`
};
function B2(e, t) {
  ar(t, !0), bi(e, L2);
  const n = new R2(t.settings);
  let r = /* @__PURE__ */ Se(!1);
  Wu(async () => {
    await n.initialize();
  });
  var i = P2(), s = G(i), u = G(s), a = G(u);
  {
    var c = (T) => {
      var P = N2();
      de(() => {
        Ke(P, "src", t.settings.header_logo), Ke(P, "alt", t.settings.title_text ? t.settings.title_text + " logo" : "Logo");
      }), W(T, P);
    };
    fe(a, (T) => {
      t.settings.header_logo && T(c);
    });
  }
  var d = ie(a, 2), h = G(d), p = ie(u, 2), b = G(p);
  b.__click = [F2, r];
  var _ = G(b);
  {
    var g = (T) => {
      fp(T, { size: 16 });
    }, w = (T) => {
      op(T, { size: 16 });
    };
    fe(_, (T) => {
      C(r) ? T(g) : T(w, !1);
    });
  }
  var v = ie(b, 2);
  v.__click = [M2, n];
  var E = G(v);
  mp(E, { size: 16 });
  var y = ie(v, 2);
  y.__click = [I2];
  var S = G(y);
  Ju(S, { size: 16 });
  var D = ie(s, 2), A = G(D);
  O2(A, {
    get settings() {
      return t.settings;
    }
  }), de(() => {
    bt(s, `background-color: ${t.settings.primary_color ?? ""}; color: ${t.settings.on_primary_color ?? ""};`), Ke(d, "title", t.settings.title_text), gt(h, t.settings.title_text), Ke(b, "aria-label", C(r) ? "Collapse chat" : "Expand chat");
  }), W(e, i), cr();
}
gi(["click"]);
const q2 = "html,body{height:100%;margin:0;overflow:hidden}", z2 = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#fefefe;color:#545454}.hljs-comment,.hljs-quote{color:#696969}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#d91e18}.hljs-number,.hljs-built_in,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link,.hljs-attribute{color:#aa5d00}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:green}.hljs-title,.hljs-section{color:#007faa}.hljs-keyword,.hljs-selector-tag{color:#7928a1}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}`;
var j2 = (e, t, n) => {
  n.onToggle?.();
}, U2 = /* @__PURE__ */ ae('<div class="close-icon svelte-1ofuhp"><!></div>'), H2 = /* @__PURE__ */ ae('<img alt="Chat Icon" class="icon-image svelte-1ofuhp">'), $2 = /* @__PURE__ */ ae('<span class="button-text svelte-1ofuhp"> </span>'), W2 = /* @__PURE__ */ ae('<div class="chat-icon svelte-1ofuhp"><!></div> <!>', 1), V2 = /* @__PURE__ */ ae('<button id="chat-button"><!></button>');
const G2 = {
  hash: "svelte-1ofuhp",
  code: `#chat-button.svelte-1ofuhp {display:flex;align-items:center;justify-content:center;gap:8px;min-width:3.5rem;height:3.5rem;padding:0;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    /* Animate size/padding/gap changes when breakpoints change */transition:min-width 180ms ease,
      height 180ms ease,
      padding 180ms ease,
      gap 180ms ease,
      border-radius 180ms ease;z-index:10000;}#chat-button.with-text.svelte-1ofuhp {padding:0 1.25rem;border-radius:100px;}.button-text.svelte-1ofuhp {
    /* Responsive text: clamp(min, fluid, max) so it scales smoothly between viewports */
    /* min 14px, fluid around viewport width, max 18px for large screens */font-size:18px;white-space:nowrap;transition:font-size 180ms ease;}

  /* icon wrappers get a scale variable so we can animate size changes smoothly */.chat-icon.svelte-1ofuhp,
  .close-icon.svelte-1ofuhp {display:flex;align-items:center;justify-content:center;transition:transform 180ms ease;transform-origin:center;
    /* default scale is 1; set inline via style attribute when needed */}

  /* image transition for smooth width/height change */.icon-image.svelte-1ofuhp {transition:width 180ms ease,
      height 180ms ease;display:block;}#chat-button.svelte-1ofuhp:hover {transform:translateY(-1px);}

  /* Tablet and below: ensure text is reduced for mid-size screens and reduce button size */
  @media (max-width: 1024px) {.button-text.svelte-1ofuhp {font-size:16px;}

    /* make the button slightly smaller on tablet and laptop widths */#chat-button.svelte-1ofuhp {min-width:3rem;height:3rem;padding:0 0.6rem;border-radius:50%;}#chat-button.with-text.svelte-1ofuhp {padding:0 0.6rem;}
  }

  /* Mobile: reduce button size and typography to fit smaller screens */
  @media (max-width: 480px) {#chat-button.svelte-1ofuhp {min-width:2.6rem;height:2.6rem;padding:0 0.5rem;gap:6px;border-radius:9px;}#chat-button.with-text.svelte-1ofuhp {padding:0 0.5rem;}.button-text.svelte-1ofuhp {font-size:13px;}
  }

  /* Very small screens: make the button even more compact */
  @media (max-width: 360px) {#chat-button.svelte-1ofuhp {min-width:2.4rem;height:2.4rem;padding:0 0.5rem;border-radius:8px;}

    /* hide text to preserve space */#chat-button.with-text.svelte-1ofuhp .button-text:where(.svelte-1ofuhp) {display:none;}
  }`
};
function Ta(e, t) {
  ar(t, !0), bi(e, G2);
  const n = /* @__PURE__ */ Xd(t, ["$$slots", "$$events", "$$legacy"]), r = {
    MessageSquare: Jo,
    MessageSquareMore: lp,
    MessageCircle: cp,
    MessageCircleMore: ap,
    MessagesSquare: dp,
    Bot: Cu,
    BotMessageSquare: ul,
    Sparkle: ol,
    Sparkles: al
  }, i = /* @__PURE__ */ Me(() => !!t.buttonIcon && t.buttonIcon.startsWith("https://")), s = /* @__PURE__ */ Me(() => C(i) ? null : r[t.buttonIcon || "MessageSquare"] || Jo);
  let u = /* @__PURE__ */ Se(24), a = /* @__PURE__ */ Se(1);
  function c() {
    try {
      const g = typeof window < "u" ? window.innerWidth : 9999;
      g <= 480 ? H(u, 18) : g <= 1024 ? H(u, 20) : H(u, 24), H(a, C(u) / 24);
    } catch {
      H(u, 24);
    }
  }
  c(), typeof window < "u" && (window.addEventListener("resize", c), en(() => () => window.removeEventListener("resize", c)));
  var d = V2();
  d.__click = [j2, n, t];
  let h;
  var p = G(d);
  {
    var b = (g) => {
      var w = U2(), v = G(w);
      const E = /* @__PURE__ */ Me(() => C(u) + 4);
      Ju(v, {
        get size() {
          return C(E);
        },
        strokeWidth: 2
      }), de(() => bt(w, `--icon-scale: ${C(a) ?? ""}; transform: scale(var(--icon-scale));`)), W(g, w);
    }, _ = (g) => {
      var w = W2(), v = Ie(w), E = G(v);
      {
        var y = (T) => {
          var P = H2();
          de(() => {
            Ke(P, "src", t.buttonIcon), bt(P, `width: ${C(u) ?? ""}px; height: ${C(u) ?? ""}px;`);
          }), W(T, P);
        }, S = (T, P) => {
          {
            var j = (J) => {
              var te = He(), _e = Ie(te);
              Bd(_e, () => C(s), (we, je) => {
                je(we, {
                  get size() {
                    return C(u);
                  },
                  strokeWidth: 2
                });
              }), W(J, te);
            };
            fe(
              T,
              (J) => {
                C(s) && J(j);
              },
              P
            );
          }
        };
        fe(E, (T) => {
          C(i) ? T(y) : T(S, !1);
        });
      }
      var D = ie(v, 2);
      {
        var A = (T) => {
          var P = $2(), j = G(P);
          de(() => gt(j, t.buttonText)), W(T, P);
        };
        fe(D, (T) => {
          t.showButtonText && !t.isOpen && T(A);
        });
      }
      de(() => bt(v, `--icon-scale: ${C(a) ?? ""}; transform: scale(var(--icon-scale));`)), W(g, w);
    };
    fe(p, (g) => {
      t.isOpen ? g(b) : g(_, !1);
    });
  }
  de(
    (g) => {
      Ke(d, "aria-label", t.isOpen ? "Close chat" : "Open chat"), bt(d, `background-color: ${t.primaryColor ?? ""}; color: ${t.onPrimaryColor ?? ""};`), h = Qt(d, 1, "svelte-1ofuhp", null, h, g);
    },
    [
      () => ({
        active: t.isOpen,
        "with-text": t.showButtonText && !t.isOpen,
        "with-icon-url": C(i)
      })
    ]
  ), W(e, d), cr();
}
gi(["click"]);
const Li = "fbt_session_token", au = "session_token", Y2 = "fbt_visitor_email_";
class K2 {
  botId;
  container = null;
  buttonContainer = null;
  isOpen = !1;
  isMaximized = !1;
  clickHandler;
  maximizeHandler;
  minimizeHandler;
  closeHandler;
  feedbackHandler;
  settings = null;
  chatButtonInstance = null;
  constructor(t) {
    this.botId = t, this.clickHandler = this.handleClickOutside.bind(this), this.maximizeHandler = this.maximizeWidget.bind(this), this.minimizeHandler = this.minimizeWidget.bind(this), this.closeHandler = () => {
      this.isOpen && this.toggleWidget();
    }, this.feedbackHandler = this.handleMessageFeedback.bind(this), this.initialize(t);
  }
  async fetchSettings(t) {
    try {
      const n = new URLSearchParams(), r = localStorage.getItem(Li) || localStorage.getItem(au);
      !localStorage.getItem(Li) && r && (localStorage.setItem(Li, r), localStorage.removeItem(au)), r && n.set("session_token", r), n.set("page_url", window.location.href), n.set("page_title", document.title || window.location.pathname || "Untitled Page");
      const s = (await Nh.get(`/api/bots/${t}/widget-init?${n.toString()}`)).data.data, u = s?.widget_settings ?? null;
      return s?.session_token && (localStorage.setItem(Li, String(s.session_token)), localStorage.removeItem(au)), typeof s?.visitor_email == "string" && s.visitor_email.trim() !== "" && localStorage.setItem(`${Y2}${t}`, s.visitor_email.trim()), u;
    } catch (n) {
      return console.error("Error fetching widget settings:", n), null;
    }
  }
  handleClickOutside(t) {
    !t.composedPath().some(
      (i) => i === this.container || i === this.buttonContainer || i instanceof HTMLElement && (i.closest("#fluent-bot-chat-widget") === this.container || // Treat clicks on the chat button as inside
      i.closest("#chat-button") !== null)
    ) && this.isOpen && this.toggleWidget();
  }
  toggleWidget() {
    if (this.isOpen, this.isOpen = !this.isOpen, this.container && (this.isOpen ? (this.container.style.display = "flex", setTimeout(() => {
      this.container.style.opacity = "1", this.container.style.transform = "translateY(0) scale(1)";
    }, 0)) : (this.container.style.opacity = "0", this.container.style.transform = "translateY(20px) scale(0.95)", setTimeout(() => {
      this.container.style.display = "none";
    }, 600))), this.chatButtonInstance)
      if (typeof this.chatButtonInstance.update == "function")
        this.chatButtonInstance.update({ isOpen: this.isOpen });
      else {
        try {
          typeof this.chatButtonInstance.destroy == "function" && this.chatButtonInstance.destroy();
        } catch {
        }
        if (this.chatButtonInstance = null, this.buttonContainer) {
          try {
            this.buttonContainer.innerHTML = "";
          } catch {
          }
          const t = {
            target: this.buttonContainer,
            props: {
              isOpen: this.isOpen,
              onToggle: () => this.toggleWidget(),
              buttonIcon: this.settings?.button_icon,
              showButtonText: this.settings?.show_button_text,
              buttonText: this.settings?.button_text,
              primaryColor: this.settings?.primary_color,
              onPrimaryColor: this.settings?.on_primary_color
            }
          };
          this.chatButtonInstance = js(Ta, t);
        }
      }
  }
  createStyles() {
    const t = document.createElement("style");
    return t.textContent = `
            :host {
                position: fixed;
                bottom: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
            }

            :host(.align-right) {
                right: 20px;
                align-items: flex-end;
            }

            :host(.align-left) {
                left: 20px;
                align-items: flex-start;
            }

            #fluent-bot-chat-widget {
                width: 20vw;
                min-width: 400px;
                height: 55vh;
                min-height: 600px;
                overflow: hidden;
                display: none;
                flex-direction: column;
                position: relative;
                border-radius: 0.5rem;
                box-shadow: 
                    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                margin-bottom: 1rem;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                transform-origin: bottom;
                transition: opacity 0.7s ease,
                            transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
                            width 0.7s ease,
                            height 0.7s ease,
                            max-height 0.7s ease;
                will-change: width, height, transform, opacity;
                font-family: inherit;
            }

            :host(.align-right) #fluent-bot-chat-widget {
                transform-origin: bottom right;
            }

            :host(.align-left) #fluent-bot-chat-widget {
                transform-origin: bottom left;
            }

            /* Maximized state */
            #fluent-bot-chat-widget.maximized {
                width: 55vw;
                height: 85vh;
                max-height: 85vh;
                animation: fb-maximize-pop 1s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            @keyframes fb-maximize-pop {
                0% { transform: translateY(0) scale(1); }
                60% { transform: translateY(0) scale(1.012); }
                100% { transform: translateY(0) scale(1); }
            }

            

            /* Mobile and small device styles */
            @media screen and (max-width: 640px) {
                :host {
                    bottom: 0;
                    left: 0 !important;
                    right: 0 !important;
                    width: 100%;
                    height: 100%;
                    align-items: stretch !important;
                }

                #fluent-bot-chat-widget {
                    width: 100%;
                    height: 100%;
                    max-height: 100%;
                    margin: 0;
                    border-radius: 0;
                    transform: translateY(100%);
                }

                :host(.align-right) #fluent-bot-chat-widget,
                :host(.align-left) #fluent-bot-chat-widget {
                    transform-origin: bottom;
                }

                #fluent-bot-chat-widget[style*="display: flex"] {
                    transform: translateY(0) !important;
                }

                /* Hide chat button when widget is open on mobile */
                #fluent-bot-chat-widget[style*="display: flex"] ~ #chat-button-container {
                    display: none;
                }

                /* Reset chat button container position when widget is closed */
                #chat-button-container {
                    position: fixed;
                    bottom: 20px;
                    z-index: 9999;
                }

                :host(.align-right) #chat-button-container {
                    right: 20px;
                }

                :host(.align-left) #chat-button-container {
                    left: 20px;
                }

                /* Ignore maximized on small screens - always take full screen */
                #fluent-bot-chat-widget.maximized {
                    width: 100%;
                    height: 100%;
                    max-height: 100%;
                }
            }

            ${z2}
            ${q2}
        `, t;
  }
  async initialize(t) {
    if (this.settings = await this.fetchSettings(t), !this.settings) {
      console.warn("No widget settings found, widget will not be initialized");
      return;
    }
    const n = document.createElement("div");
    n.id = "fluent-bot-chat-widget-container", n.classList.add(`align-${this.settings.button_alignment}`);
    const r = n.attachShadow({ mode: "open" }), i = document.createElement("div");
    i.id = "fluent-bot-chat-widget";
    const s = document.createElement("div");
    s.id = "chat-button-container", r.appendChild(this.createStyles()), r.appendChild(i), r.appendChild(s), document.body.appendChild(n), this.container = i, this.buttonContainer = s, document.addEventListener("click", this.clickHandler, !0), document.addEventListener("close-widget", this.closeHandler), document.addEventListener("maximize-widget", this.maximizeHandler), document.addEventListener("minimize-widget", this.minimizeHandler), document.addEventListener("message-feedback", this.feedbackHandler), js(B2, {
      target: i,
      props: {
        settings: this.settings
      }
    });
    const u = {
      target: s,
      props: {
        isOpen: this.isOpen,
        onToggle: () => this.toggleWidget(),
        buttonIcon: this.settings.button_icon,
        showButtonText: this.settings.show_button_text,
        buttonText: this.settings.button_text,
        primaryColor: this.settings.primary_color,
        onPrimaryColor: this.settings.on_primary_color
      }
    };
    this.chatButtonInstance = js(Ta, u);
  }
  maximizeWidget() {
    !this.container || this.isMaximized || (this.isMaximized = !0, this.container.classList.add("maximized"));
  }
  minimizeWidget() {
    !this.container || !this.isMaximized || (this.isMaximized = !1, this.container.classList.remove("maximized"));
  }
  destroy() {
    if (this.container) {
      const t = this.container.closest(
        "#fluent-bot-chat-widget-container"
      );
      t && t.remove();
    }
    this.chatButtonInstance && typeof this.chatButtonInstance.destroy == "function" && (this.chatButtonInstance.destroy(), this.chatButtonInstance = null), document.removeEventListener("click", this.clickHandler, !0), document.removeEventListener("close-widget", this.closeHandler), document.removeEventListener("maximize-widget", this.maximizeHandler), document.removeEventListener("minimize-widget", this.minimizeHandler), document.removeEventListener("message-feedback", this.feedbackHandler);
  }
  async handleMessageFeedback(t) {
    try {
      const r = t.detail || {}, i = r.message || null, s = r.feedback || null, u = r.comment || r.comments || null, a = r.action || null, c = r.feedback_id || r.feedbackId || null;
      if (a === "delete") {
        if (!c) {
          console.warn("Delete feedback action received but no feedback id present", i);
          return;
        }
        try {
          await ur.delete(`/api/feedbacks/${c}`);
        } catch (b) {
          console.error("Failed to delete feedback", b);
        }
        return;
      }
      if (!i || !s)
        return;
      const d = s === "up" ? "positive" : s === "down" ? "negative" : null;
      if (!d) return;
      const h = i.id ?? i.message_id ?? null;
      if (!h) {
        console.warn("Feedback event missing message id, skipping send", i);
        return;
      }
      const p = {
        message_id: h,
        reaction: d,
        comments: u
      };
      await ur.post("/api/feedbacks", p);
    } catch (n) {
      console.error("Failed to send feedback", n);
    }
  }
}
const Z2 = () => document.querySelector(
  "#fluent-bot-chat-widget-container"
), m_ = (e) => {
  Z2() || new K2(e);
};
export {
  K2 as FluentBotChatWidget,
  m_ as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
