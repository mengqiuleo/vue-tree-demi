import { defineComponent, toRefs } from "vue-demi";
import { TreeProps, treeProps } from './tree-type';

export default defineComponent({
  name: 'vTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props)
    return () => (
      <div class='v-tree'>
        {/* {data.value.map(treeNode => treeNode.label)} */}
        123
      </div>
    )
  }
})
