<template>
  <div>
    <span>{{ version }}</span>
    <v-tree :tree-data="treeData" checkable />
    <TemplateSFC />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, isVue3, isVue2, version } from "vue-demi";

export default defineComponent({
  name: "App",
  setup() {
    const treeData = [
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
                id: 'src'
              },
              {
                label: 'README.md',
                id: 'README.md',
                checked: true,
                children: [
                  {
                    label: 'index.md',
                    id: 'index.md'
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
    const versionStr = isVue2 ? "Vue2" : "Vue3";
    const Vue2Version = ref(versionStr);

    console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`);

    return {
      Vue2Version,
      treeData,
      version
    };
  },
});
</script>

<style>
</style>
