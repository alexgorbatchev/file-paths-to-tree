import path from 'path';

interface Node {
  name: string;
  children: Node[];
}

/**
 * Takes a list of file paths and turns it into a tree with `{ name: string, children: Node[] }` format.
 */
export const pathsToTree = (paths: string[]) => {
  const results: Node[] = [];

  return paths.reduce((currentResults, currentPath) => {
    const pathParts = currentPath.split(path.sep);

    pathParts.reduce((nodes, name) => {
      let node = nodes.find(node => node.name === name);

      if (!node) {
        node = { name, children: [] };
        nodes.push(node);
      }

      return node.children;
    }, currentResults);

    return currentResults;
  }, results);
};

/**
 * Converts a list of `Node` to a flat list of printable strings.
 */
export const treeToString = (nodes: Node[], level = 0, prefix = '') => {
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

export const printPathsAsTree = (paths: string[]) => {
  console.log(treeToString(pathsToTree(paths)));
};
