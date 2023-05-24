import { defineComponent as i, ref as d, computed as m, watch as v, version as _, openBlock as f, createElementBlock as T, createElementVNode as o, toDisplayString as l } from "vue";
const g = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, p] of n)
    t[s] = p;
  return t;
}, C = i({
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
  setup(e, { emit: n }) {
    const t = d(0), s = m(() => t.value * 2);
    function p() {
      t.value += 1;
    }
    function u() {
      t.value -= 1;
    }
    const c = "<b>Dec</b>";
    return v(t, (a) => n("update", a)), {
      decText: c,
      doubled: s,
      count: t,
      version: _,
      inc: p,
      dec: u
    };
  }
}), y = { class: "template-component" }, b = ["innerHTML"];
function k(e, n, t, s, p, u) {
  return f(), T("div", null, [
    o("div", y, " Template Component. Vue version: " + l(e.version), 1),
    o("div", null, [
      o("h3", null, l(e.msg) + ", " + l(e.name), 1),
      o("button", {
        onClick: n[0] || (n[0] = (...c) => e.inc && e.inc(...c))
      }, " Inc "),
      o("div", null, l(e.count) + " x 2 = " + l(e.doubled), 1),
      o("button", {
        onClick: n[1] || (n[1] = (c) => e.dec()),
        innerHTML: e.decText
      }, null, 8, b)
    ])
  ]);
}
const r = /* @__PURE__ */ g(C, [["render", k], ["__scopeId", "data-v-5dc660a4"]]);
const $ = {
  install(e, n) {
    console.log(n), e.component(r.name, r);
  }
};
export {
  $ as default
};
