import {TreeNode} from "../model/tree-node";

export class TreeUtil {

  public static createTreeFromFlatList<T>(dataList: any[], idKey: string = 'id',
                                          parentIdKey: string = 'parent_id',
                                          expanded: boolean = true, mapFunc: (data: any) => T = data => data, rootId?: string):
    {tree: TreeNode<T>[]; map: {[key: string]: TreeNode<T>}; root?: TreeNode<T>} {
    const tree: TreeNode<T>[] = [];
    const map: {[key: string]: TreeNode<T>} = {};
    dataList.forEach(data => {
      map[(data as any)[idKey]] = {
        data: mapFunc(data),
        children: [],
        level: 0,
        sequence: 0,
        isDisabled: {},
        isFixed: {},
        paddingBlock: {}
      };
    });
    Object.values(tree).forEach(node => {
      const parentNode: TreeNode<T> = map[(node.data as any)[parentIdKey]];
      if (parentNode) {
        parentNode.children.push(node);
      } else {
        tree.push(node);
      }
    })
    if (rootId) {
      const rootNode: TreeNode<T> = {
        data: {[idKey]: 'root', [parentIdKey]: null} as unknown as T,
        children: tree,
        level: -1,
        sequence: -1,
        isDisabled: {},
        isFixed: {},
        paddingBlock: {}
      }
      map[rootId] = rootNode;
      return {tree, map, root: rootNode};
    }
    return {tree, map};
  }

}