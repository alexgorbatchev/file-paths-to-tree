# file-paths-to-tree

This NPM module converts list of file path strings to a tree structure and also allows you to print it neatly. Zero dependencies.

Written in TypeScript and Bun ❤

## Installation

```shell
$ npm install file-paths-to-tree
$ bun install file-paths-to-tree
$ yarn install file-paths-to-tree
# etc...
```

## Usage

```js
import { filePathsToTree, treeToString, printFilePathsAsTree } from "file-paths-to-tree";

filePathsToTree(["foo/bar/baz", "foo/bar/fuz"]);

// [
//   {
//     "name": "foo",
//     "path": undefined,
//     "parent": undefined,
//     "children": [
//       {
//         "name": "bar",
//         "path": "foo/bar",
//         "parent": <ref to foo>,
//         "children": [
//           {
//             "name": "baz",
//             "path": "foo/bar/baz",
//             "children": [],
//             "parent": <ref to foo/bar>,
//           },
//           {
//             "name": "fuz",
//             "path": "foo/bar/fuz",
//             "children": [],
//             "parent": <ref to foo/bar>,
//           }
//         ]
//       }
//     ]
//   }
// ]

treeToString(filePathsToTree(["foo/bar/baz", "foo/bar/fuz"]));

// foo
// └── bar
//     ├── baz
//     └── fuz

printFilePathsAsTree(["foo/bar/baz", "foo/bar/fuz"]);

// prints the above to console
```

You can also pass options:

```ts
filePathsToTree(["foo/bar/baz", "foo/bar/fuz"], {
  formatLabel: (node) => node.name.toUpperCase(),
  connectors: {
    tee: "├── ",
    elbow: "└── ",
    line: "│",
    padding: "   ",
  },
});
```
