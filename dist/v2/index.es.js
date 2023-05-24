import u from "vue";
import C, { defineComponent as T, ref as b, computed as g, watch as $ } from "@vue/composition-api/dist/vue-composition-api.mjs";
function S(e) {
  e = e || u, e && !e.__composition_api_installed__ && e.use(C);
}
S(u);
var y = u.version;
const R = T({
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
  setup(e, { emit: o }) {
    const n = b(0), a = g(() => n.value * 2);
    function r() {
      n.value += 1;
    }
    function _() {
      n.value -= 1;
    }
    const c = "<b>Dec</b>";
    return $(n, (l) => o("update", l)), {
      decText: c,
      doubled: a,
      count: n,
      version: y,
      inc: r,
      dec: _
    };
  }
});
var V = function() {
  var e = this, o = e.$createElement, n = e._self._c || o;
  return n("div", [n("div", { staticClass: "template-component" }, [e._v(" Template Component. Vue version: " + e._s(e.version) + " ")]), n("div", [n("h3", [e._v(e._s(e.msg) + ", " + e._s(e.name))]), n("button", { on: { click: e.inc } }, [e._v(" Inc ")]), n("div", [e._v(e._s(e.count) + " x 2 = " + e._s(e.doubled))]), n("button", { domProps: { innerHTML: e._s(e.decText) }, on: { click: function(a) {
    return e.dec();
  } } })])]);
}, F = [];
function k(e, o, n, a, r, _, c, l) {
  var t = typeof e == "function" ? e.options : e;
  o && (t.render = o, t.staticRenderFns = n, t._compiled = !0), a && (t.functional = !0), _ && (t._scopeId = "data-v-" + _);
  var s;
  if (c ? (s = function(i) {
    i = i || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !i && typeof __VUE_SSR_CONTEXT__ < "u" && (i = __VUE_SSR_CONTEXT__), r && r.call(this, i), i && i._registeredComponents && i._registeredComponents.add(c);
  }, t._ssrRegister = s) : r && (s = l ? function() {
    r.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), s)
    if (t.functional) {
      t._injectStyles = s;
      var v = t.render;
      t.render = function(h, d) {
        return s.call(d), v(h, d);
      };
    } else {
      var p = t.beforeCreate;
      t.beforeCreate = p ? [].concat(p, s) : [s];
    }
  return {
    exports: e,
    options: t
  };
}
const f = {};
var w = /* @__PURE__ */ k(
  R,
  V,
  F,
  !1,
  E,
  "5dc660a4",
  null,
  null
);
function E(e) {
  for (let o in f)
    this[o] = f[o];
}
const m = /* @__PURE__ */ function() {
  return w.exports;
}();
const N = {
  install(e, o) {
    console.log(o), e.component(m.name, m);
  }
};
export {
  N as default
};
