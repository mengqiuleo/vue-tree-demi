<template>
  <div>
    <div>test</div>
    <div v-for="treeNode in treeData">{{ treeNode.label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue-demi';
import { TreeProps, treeProps } from './tree-type';

//@ts-ignore
export default defineComponent({
  name: "vTree",
  props: treeProps,
  setup(props: TreeProps) {
    const { treeData } = toRefs(props)
    return {
      treeData
    }
  },
});
</script>
