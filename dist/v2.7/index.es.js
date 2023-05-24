import m, { defineComponent as h, ref as C, computed as T, watch as b, version as g } from "vue";
m.util.warn;
const $ = h({
  name: "TemplateSFC",
  props: {
    msg: {
      type: String,
      default: "hi"
    },
    name: {
      type: String,
      default: "pjy"
    }
  },
  setup(s, { emit: e }) {
    const n = C(0), a = T(() => n.value * 2);
    function i() {
      n.value += 1;
    }
    function _() {
      n.value -= 1;
    }
    const c = "<b>Dec</b>";
    return b(n, (u) => e("update", u)), {
      decText: c,
      doubled: a,
      count: n,
      version: g,
      inc: i,
      dec: _
    };
  }
});
function y(s, e, n, a, i, _, c, u) {
  var t = typeof s == "function" ? s.options : s;
  e && (t.render = e, t.staticRenderFns = n, t._compiled = !0), a && (t.functional = !0), _ && (t._scopeId = "data-v-" + _);
  var r;
  if (c ? (r = function(o) {
    o = o || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), i && i.call(this, o), o && o._registeredComponents && o._registeredComponents.add(c);
  }, t._ssrRegister = r) : i && (r = u ? function() {
    i.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), r)
    if (t.functional) {
      t._injectStyles = r;
      var f = t.render;
      t.render = function(v, d) {
        return r.call(d), f(v, d);
      };
    } else {
      var l = t.beforeCreate;
      t.beforeCreate = l ? [].concat(l, r) : [r];
    }
  return {
    exports: s,
    options: t
  };
}
var R = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("div", [n("div", { staticClass: "template-component" }, [e._v(" Template Component. Vue version: " + e._s(e.version) + " ")]), n("div", [n("h3", [e._v(e._s(e.msg) + ", " + e._s(e.name))]), n("button", { on: { click: e.inc } }, [e._v(" Inc ")]), n("div", [e._v(e._s(e.count) + " x 2 = " + e._s(e.doubled))]), n("button", { domProps: { innerHTML: e._s(e.decText) }, on: { click: function(a) {
    return e.dec();
  } } })])]);
}, S = [], F = /* @__PURE__ */ y(
  $,
  R,
  S,
  !1,
  null,
  "429cb9a1",
  null,
  null
);
const p = F.exports;
const k = {
  install(s, e) {
    console.log(e), s.component(p.name, p);
  }
};
export {
  k as default
};
