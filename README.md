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
//     "children": [
//       {
//         "name": "bar",
//         "children": [
//           {
//             "name": "baz",
//             "children": []
//           },
//           {
//             "name": "fuz",
//             "children": []
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
