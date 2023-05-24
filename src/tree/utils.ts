import { IInnerTreeNode, ITreeNode } from './tree-type'

const data = [
  {
    label: 'docs',
    id: 'docs'
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
            id: 'README.md'
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

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0,
  path = [] as IInnerTreeNode[] // 标识递归过程的路径，用来标识
): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode
    o.level = level
    // if (level > 1 && parentNode) {
    //   o.parentId = parentNode.id
    // }
    if(path.length > 0 && path[path.length-1].level >= level){
      while(path.length) path.pop()
    }
    path.push(o)
    const parentNode = path[path.length-2]
    if(parentNode){
      o.parentId = parentNode.id
    }

    // 判断 cur 是否存在 children，如果存在则递归遍历
    if (o.children) {
      const children = generateInnerTree(o.children, level, path)
      delete o.children
      return prev.concat(o, children)
    } else {
      // 叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}

// export function generateInnerTree(
//   tree: ITreeNode[],
//   level = 0,
//   parentNode = {} as IInnerTreeNode // 标识递归过程的路径，用来标识
// ): IInnerTreeNode[] {
//   level++
//   return tree.reduce((prev, cur) => {
//     const o = { ...cur } as IInnerTreeNode
//     o.level = level
//     if (level > 1 && parentNode) {
//       o.parentId = parentNode.id
//     }
//     // 判断 cur 是否存在 children，如果存在则递归遍历
//     if (o.children) {
//       const children = generateInnerTree(o.children, level, o)
//       delete o.children
//       return prev.concat(o, children)
//     } else {
//       // 叶子节点
//       o.isLeaf = true
//       return prev.concat(o)
//     }
//   }, [] as IInnerTreeNode[])
// }