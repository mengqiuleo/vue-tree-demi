<template>
  <div>
    <span>vue版本: {{ version }}</span>
    <v-tree :tree-data="data" checkable />
    <TemplateSFC />
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { defineComponent, ref, isVue3, isVue2, version } from "vue-demi";

/* @ts-ignore */
export default defineComponent({
  name: "App",
  setup() {
    const data = [
      {
        label: 'docs',
        id: 'docs',
        checked: true
      },
      {
        label: 'packages',
        id: 'packages',
        expanded: true,
        children: [
          {
            label: 'plugin-vue',
            id: 'plugin-vue'
          },
          {
            label: 'vite',
            id: 'vite',
            expanded: true,
            children: [
              {
                label: 'src',
                id: 'src',
                checked: true
              },
              {
                label: 'README.md',
                id: 'README.md',
                children: [
                  {
                    label: 'index.md',
                    id: 'index.md',
                    checked: true
                  }
                ]
              }
            ]
          },
          {
            label: 'vite1',
            id: 'vite1',
            expanded: true,
            children: [
              {
                label: 'src1',
                id: 'src1'
              },
              {
                label: 'README.md1',
                id: 'README.md1',
                checked: true,
                children: [
                  {
                    label: 'index.md1',
                    id: 'index.md1'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'scripts',
        id: 'scripts',
        children: [
          {
            label: 'release.ts',
            id: 'release.ts'
          },
          {
            label: 'verifyCommit.ts',
            id: 'verifyCommit.ts'
          }
        ]
      },
      {
        label: 'pnpm-workspace.yaml',
        id: 'pnpm-workspace.yaml'
      }
    ]
    const vueVersion = ref(isVue2 ? "Vue2" : "Vue3");

    //@ts-ignore
    console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`);

    return {
      vueVersion,
      data,
      version
    };
  },
})
</script>

<style>
</style>
