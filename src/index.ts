import { sep } from 'node:path';

interface Node<Data> {
  name: string;
  path: string;
  children: Node<Data>[];
  parent: Node<Data> | null;
  data?: Data;
}

/**
 * Takes a list of file paths and turns it into a tree. For each node you can attach own data using a callback.
 */
export const filePathsToTree = <Data>(paths: string[], getData?: (node: Node<Data>) => Data) => {
  const results: Node<Data>[] = [];

  return paths.reduce((currentResults, currentPath) => {
    const pathParts = currentPath.split(sep);
    const byPath: Record<string, Node<Data>> = {};

    pathParts.reduce((nodes, name, index, arr) => {
      let node: Node<Data> | undefined = nodes.find(node => node.name === name);
      const path = arr.slice(0, index + 1).join(sep);
      const parentPath = arr.slice(0, index).join(sep);

      if (!node) {
        node = {
          name,
          path,
          parent: byPath[parentPath],
          children: [],
        };

        node.data = getData?.(node);
        nodes.push(node);
      }

      byPath[path] = node;

      return node.children;
    }, currentResults);

    return currentResults;
  }, results);
};

/**
 * Converts a list of `Node` to a flat list of printable strings.
 */
export const treeToString = <Data>(nodes: Node<Data>[], level = 0, prefix = '') => {
  const nodesCount = nodes.length - 1;
  let results = '';

  nodes.forEach((node, nodeIndex) => {
    let line = node.name;
    let pointer = '';

    if (level > 0) {
      if (nodesCount > 0) {
        pointer = nodeIndex === nodesCount ? '└── ' : '├── ';
      } else {
        pointer = '└── ';
      }
    }

    results += prefix + pointer + line + '\n';

    if (node.children && node.children.length) {
      let newPrefix = prefix;

      if (level > 0) {
        newPrefix += `${nodeIndex === nodesCount ? ' ' : '│'}   `;
      }

      results += treeToString(node.children, level + 1, newPrefix);
    }
  });

  return results;
};

export const printFilePathsAsTree = (paths: string[]) => {
  console.log(treeToString(filePathsToTree(paths)));
};
