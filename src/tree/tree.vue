<template>
  <div>
    <div class="v-tree" v-for="treeNode in expandedTree" :key="treeNode.id">
      <div class="v-tree-node  relative leading-7 flex items-center" :style="{ paddingLeft: NODE_INDENT * (treeNode.level - 1) + 'px' }">
        <!-- 折叠图标: 先判断当前节点是叶子节点 -->
        <span v-if="treeNode.isLeaf" style="display: inline-block; width: 18px"></span>
        <svg v-else
          @click="toggleNode(treeNode)"
          :style="{
            width: '18px',
            height: '18px',
            display: 'inline-block',
            transform: treeNode.expanded ? 'rotate(90deg)' : ''
          }"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
        </svg>

        <!-- 连接线 -->
        <span v-if="!treeNode.isLeaf && treeNode.expanded"
          class="v-tree-node__vine absolute w-px bg-slate-300"
          :style="{ height: `${NODE_HEIGHT * getChildren(treeNode).length}px`,
                  left: `${NODE_INDENT * (treeNode.level - 1) + 8}px`,
                  top: `${NODE_HEIGHT}px` }"></span>

        <!-- 勾选：checkbox -->
        <input v-if="checkable" type="checkbox" v-model="treeNode.checked" @click="toggleCheckNode(treeNode)"/>

        <!-- 标签 -->
        <div class="hover:bg-slate-200 border-rd px-1">{{ treeNode.label }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs  } from 'vue-demi';
import { TreeProps, treeProps } from './tree-type';
import { useTree } from './componsables/use-tree';

//@ts-ignore
export default defineComponent({
  name: "vTree",
  props: treeProps,
  setup(props: TreeProps) {
    const NODE_INDENT = 24 // 节点宽度
    const NODE_HEIGHT = 28 // 节点高度
    const { treeData, checkable } = toRefs(props)
    const { expandedTree, toggleNode, getChildren, toggleCheckNode  } = useTree(treeData)
    
    return {
      NODE_INDENT,
      NODE_HEIGHT,
      expandedTree,
      toggleNode, 
      getChildren,
      checkable,
      toggleCheckNode
    }
  },
});
</script>
