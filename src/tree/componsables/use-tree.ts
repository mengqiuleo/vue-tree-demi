import { ref, computed, Ref, unref } from 'vue-demi';
import { ITreeNode, IInnerTreeNode } from '../tree-type';
import { generateInnerTree } from '../utils';
export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]){
  const innerData = ref(generateInnerTree(unref(node))) //最初的拍平的数组
  console.log('拍平的结果', innerData)

  const toggleNode = (node: IInnerTreeNode) => { //用在 svg 上，控制图标展开折叠
    // 在原始的列表中获取该节点
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) cur.expanded = !cur.expanded
  }
  const expandedTree = computed(() => { //获取展开的节点列表，我们渲染的是这个树
    let excludeNodes: IInnerTreeNode[] = []
    const result = []
    for(const item of innerData.value){
      // 如果遍历的节点在排除列表中，跳过本次循环
      if (excludeNodes.map(node => node.id).includes(item.id)) {
        continue
      }
      if(item.expanded !== true){
        excludeNodes = getChildren(item)
      }
      result.push(item)
    }
    return result
  })
  const getChildren = (node: IInnerTreeNode): IInnerTreeNode[] => { // 获取那些展开的节点列表
    const result: IInnerTreeNode[] = []
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    //找到它后面所有的子节点
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      result.push(innerData.value[i])
    }
    return result
  }

  const toggleCheckNode = (node: IInnerTreeNode) => {  // CheckBox：父子之间联动
    node.checked = !node.checked //初始化，要不然可以生效，但是我们得先点一遍才能生效
    getChildren(node).forEach(child => { //获取子节点，同步他们的选中状态和父节点一致
      child.checked = node.checked
    })
  }

  return {
    innerData,
    toggleNode,
    expandedTree,
    getChildren,
    toggleCheckNode
  }
}