<template>
  <div>
    <span>{{ version }}</span>
    <v-tree :tree-data="tData" />
    <TemplateSFC />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, isVue3, isVue2, version } from "vue-demi";

export default defineComponent({
  name: "App",
  setup() {
    const tData = [
      {
        label: 'docs',
        id: 'node-1',
        level: 1
      },
      {
        label: 'packages',
        id: 'node-2',
        expanded: true,
        level: 1
      },
      {
        label: 'vite',
        id: 'node-2-1',
        parentId: 'node-2',
        expanded: true,
        level: 2
      },
      {
        label: 'README.md',
        id: 'node-2-1-1',
        parentId: 'node-2-1',
        isLeaf: true,
        level: 3
      },
      {
        label: 'scripts',
        id: 'node-3',
        level: 1
      },
      {
        label: 'pnpm-workspace.yaml',
        id: 'node-4',
        level: 1,
        isLeaf: true
      }
    ]
    console.log('vue3-playground', version)
    const versionStr = isVue2 ? "Vue2" : "Vue3";
    const Vue2Version = ref(versionStr);

    console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`);

    return {
      Vue2Version,
      tData,
      version
    };
  },
});
</script>

<style>
body > div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
