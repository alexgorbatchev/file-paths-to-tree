# file-paths-to-tree

A basic NPM module which converts list of file paths to a tree structure and also allows you to print it neatly.

Written in TypeScript ❤️

## Usage

```js
import { filePathsToTree, treeToString, printFilePathsAsTree } from 'file-paths-to-tree';

filePathsToTree(['foo/bar/baz', 'foo/bar/fuz']);

// [
//   {
//     "name": "foo",
//     "path": undefined,
//     "data": undefined,
//     "parent": undefined,
//     "children": [
//       {
//         "name": "bar",
//         "path": "foo/bar",
//         "data": undefined,
//         "parent": <ref to foo>,
//         "children": [
//           {
//             "name": "baz",
//             "path": "foo/bar/baz",
//             "data": undefined,
//             "children": [],
//             "parent": <ref to foo/bar>,
//           },
//           {
//             "name": "fuz",
//             "path": "foo/bar/fuz",
//             "data": undefined,
//             "children": [],
//             "parent": <ref to foo/bar>,
//           }
//         ]
//       }
//     ]
//   }
// ]

treeToString(filePathsToTree(['foo/bar/baz', 'foo/bar/fuz']));

// foo
// └── bar
//     ├── baz
//     └── fuz

printFilePathsAsTree(['foo/bar/baz', 'foo/bar/fuz']);

// prints the above to console
```

You can also attach own data to each node using a callback:

```ts
filePathsToTree<number>(['foo/bar/baz', 'foo/bar/fuz'], node => 10);

// [
//   {
//     "name": "foo",
//     "path": undefined,
//     "data": 10,
//     "parent": undefined,
//     "children": [
//       {
//         "name": "bar",
//         "path": "foo/bar",
//         "data": 10,
//         "parent": <ref to foo>,
//         "children": [
//           {
//             "name": "baz",
//             "path": "foo/bar/baz",
//             "data": 10,
//             "children": [],
//             "parent": <ref to foo/bar>,
//           },
//           {
//             "name": "fuz",
//             "path": "foo/bar/fuz",
//             "data": 10,
//             "children": [],
//             "parent": <ref to foo/bar>,
//           }
//         ]
//       }
//     ]
//   }
// ]
```
