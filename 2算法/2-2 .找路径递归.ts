interface Space {
  id: string;
  name: string;
  parentId: string;
  subSpaces: Space[];
  selected?: boolean; // 标记路径为 selected
}
// 例如
const spaceTreeList: Space[] = [
  {
    id: "1",
    name: "Space 1",
    parentId: "",
    subSpaces: [
      {
        id: "2",
        name: "Space 1.1",
        parentId: "1",
        selected: true,
        subSpaces: [
          {
            id: "3",
            name: "Space 1.1.1",
            parentId: "2",
            selected: true,
            subSpaces: [
              {
                id: "6",
                name: "Space 1.1.3.2.1",
                parentId: "1",
                selected: true,
                subSpaces: [
                  {
                    id: "8",
                    name: "Space 1.1.1",
                    parentId: "2",
                    selected: true,
                    subSpaces: [],
                  },
                ],
              },
              {
                id: "7",
                name: "Space 1.1.3.4.1",
                parentId: "1",
                selected: false,
                subSpaces: [
                  {
                    id: "9",
                    name: "Space 1.1.1",
                    parentId: "2",
                    selected: false,
                    subSpaces: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Space 2",
    parentId: "",
    subSpaces: [],
    selected: true,
  },
];

// 1. 完成下面方法，要求传入参数为任意的Space数组和一个id，返回仅包含从一级Space到目标Space的路径的数组
// 比如：以上面的 spaceTreeList 为例，当id为 ‘7’时，应返回 [{id: "1",...},{id: "2",...},{id: "3",...},{id: "7",...}]
export function getPaths(tree: Space[], id: string): Space[] { 
  const path:Space[]=[];
  // 递归查找
  function findRecursive(currentSpace:Space):boolean{
    path.push(currentSpace)
    if(currentSpace.id===id){
      return true
    }
    for(const childSpace of currentSpace.subSpaces){
      if(findRecursive(childSpace)){
        return true
      }
    }
    path.pop();
    return false
  }
  for(const space of tree){
    if(findRecursive(space)){
      return path;
    }
  }
  return [];
}



// 2. 写一个方法，要求传入参数为任意的Space数组和一个id，要求把在 从一级Space到目标Space的路径 上的所有Space的selected都设为true,其他空间selected都设为false
// 比如：以上面的 spaceTreeList 为例，当id为 ‘7’时，那么id为 1,2,3,7的Space的selected应该为true,其他Space的Selected都应为false

export function modify(tree: Space[], id: string): Space[] { 
  const path:Space[]=[];
  function findRecursive(currentSpace:Space):boolean{
    path.push(currentSpace)
    if(currentSpace.id===id){
      return true
    }
    for(const childSpace of currentSpace.subSpaces){
      if(findRecursive(childSpace)){
        return true
      }
    }
    path.pop();
    return false
  }
  for(const space of tree){
    if(findRecursive(space)){
      break
    }
  } 
  for(const space of tree){
      space.selected=path.includes(space)
      console.log(space)
  }
  return [];
}

