import { filePathsToTree, treeToString } from '../index.js';

const paths = [
  'core/console/src/__tests__/useFetchAppsForCurrentUser.test.tsx',
  'core/console/src/useFetchAppsForCurrentUser.ts',
  'core/helpers/src/nodeHostURL.ts',
  'core/host-app/src/components/__tests__/Container.test.tsx',
  'core/testing-helpers/src/fixtures/cluster.ts',
  'core/testing-helpers/src/fixtures/deployableArtifact.ts',
  'core/testing-helpers/src/fixtures/node.ts',
  'core/testing-helpers/src/fixtures/replicationController.ts',
  'core/ui/src/__tests__/GitCommitMessage.test.tsx',
  'core/ui/src/__tests__/GitCommitTag.test.tsx',
  'core/ui/src/__tests__/Avatar.test.tsx',
  'core/ui/src/GitCommitMessage.tsx',
  'core/ui/src/GitCommitTag.tsx',
  'core/ui/src/LaunchableTag.tsx',
  'core/ui/src/ScheduleCard.tsx',
  'core/ui/src/Avatar.tsx',
];

describe('filePathsToTree', () => {
  it('handles empty array', () => {
    expect(filePathsToTree([])).toMatchObject([]);
  });

  it('will attach data', () => {
    let counter = 0;

    expect(
      filePathsToTree<number>([paths[0]], node => {
        node.parent = node.parent?.path as any;
        return (counter += 1);
      }),
    ).toMatchObject([
      {
        name: 'core',
        path: 'core',
        children: [
          {
            name: 'console',
            path: 'core/console',
            parent: 'core',
            children: [
              {
                name: 'src',
                path: 'core/console/src',
                parent: 'core/console',
                children: [
                  {
                    name: '__tests__',
                    path: 'core/console/src/__tests__',
                    parent: 'core/console/src',
                    children: [
                      {
                        name: 'useFetchAppsForCurrentUser.test.tsx',
                        path: 'core/console/src/__tests__/useFetchAppsForCurrentUser.test.tsx',
                        parent: 'core/console/src/__tests__',
                        children: [],
                        data: 5,
                      },
                    ],
                    data: 4,
                  },
                ],
                data: 3,
              },
            ],
            data: 2,
          },
        ],
        data: 1,
      },
    ]);
  });

  it('parses multiple files', () => {
    expect(
      filePathsToTree(paths, node => {
        node.parent = node.parent?.path as any;
      }),
    ).toMatchObject([
      {
        name: 'core',
        path: 'core',
        children: [
          {
            name: 'console',
            path: 'core/console',
            parent: 'core',
            children: [
              {
                name: 'src',
                path: 'core/console/src',
                parent: 'core/console',
                children: [
                  {
                    name: '__tests__',
                    path: 'core/console/src/__tests__',
                    parent: 'core/console/src',
                    children: [
                      {
                        name: 'useFetchAppsForCurrentUser.test.tsx',
                        path: 'core/console/src/__tests__/useFetchAppsForCurrentUser.test.tsx',
                        parent: 'core/console/src/__tests__',
                        children: [],
                      },
                    ],
                  },
                  {
                    name: 'useFetchAppsForCurrentUser.ts',
                    path: 'core/console/src/useFetchAppsForCurrentUser.ts',
                    parent: 'core/console/src',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'helpers',
            path: 'core/helpers',
            parent: 'core',
            children: [
              {
                name: 'src',
                path: 'core/helpers/src',
                parent: 'core/helpers',
                children: [
                  {
                    name: 'nodeHostURL.ts',
                    path: 'core/helpers/src/nodeHostURL.ts',
                    parent: 'core/helpers/src',
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'host-app',
            path: 'core/host-app',
            parent: 'core',
            children: [
              {
                name: 'src',
                path: 'core/host-app/src',
                parent: 'core/host-app',
                children: [
                  {
                    name: 'components',
                    path: 'core/host-app/src/components',
                    parent: 'core/host-app/src',
                    children: [
                      {
                        name: '__tests__',
                        path: 'core/host-app/src/components/__tests__',
                        parent: 'core/host-app/src/components',
                        children: [
                          {
                            name: 'Container.test.tsx',
                            path: 'core/host-app/src/components/__tests__/Container.test.tsx',
                            parent: 'core/host-app/src/components/__tests__',
                            children: [],
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
            name: 'testing-helpers',
            path: 'core/testing-helpers',
            parent: 'core',
            children: [
              {
                name: 'src',
                path: 'core/testing-helpers/src',
                parent: 'core/testing-helpers',
                children: [
                  {
                    name: 'fixtures',
                    path: 'core/testing-helpers/src/fixtures',
                    parent: 'core/testing-helpers/src',
                    children: [
                      {
                        name: 'cluster.ts',
                        path: 'core/testing-helpers/src/fixtures/cluster.ts',
                        parent: 'core/testing-helpers/src/fixtures',
                        children: [],
                      },
                      {
                        name: 'deployableArtifact.ts',
                        path: 'core/testing-helpers/src/fixtures/deployableArtifact.ts',
                        parent: 'core/testing-helpers/src/fixtures',
                        children: [],
                      },
                      {
                        name: 'node.ts',
                        path: 'core/testing-helpers/src/fixtures/node.ts',
                        parent: 'core/testing-helpers/src/fixtures',
                        children: [],
                      },
                      {
                        name: 'replicationController.ts',
                        path: 'core/testing-helpers/src/fixtures/replicationController.ts',
                        parent: 'core/testing-helpers/src/fixtures',
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'ui',
            path: 'core/ui',
            parent: 'core',
            children: [
              {
                name: 'src',
                path: 'core/ui/src',
                parent: 'core/ui',
                children: [
                  {
                    name: '__tests__',
                    path: 'core/ui/src/__tests__',
                    parent: 'core/ui/src',
                    children: [
                      {
                        name: 'GitCommitMessage.test.tsx',
                        path: 'core/ui/src/__tests__/GitCommitMessage.test.tsx',
                        parent: 'core/ui/src/__tests__',
                        children: [],
                      },
                      {
                        name: 'GitCommitTag.test.tsx',
                        path: 'core/ui/src/__tests__/GitCommitTag.test.tsx',
                        parent: 'core/ui/src/__tests__',
                        children: [],
                      },
                      {
                        name: 'Avatar.test.tsx',
                        path: 'core/ui/src/__tests__/Avatar.test.tsx',
                        parent: 'core/ui/src/__tests__',
                        children: [],
                      },
                    ],
                  },
                  {
                    name: 'GitCommitMessage.tsx',
                    path: 'core/ui/src/GitCommitMessage.tsx',
                    parent: 'core/ui/src',
                    children: [],
                  },
                  {
                    name: 'GitCommitTag.tsx',
                    path: 'core/ui/src/GitCommitTag.tsx',
                    parent: 'core/ui/src',
                    children: [],
                  },
                  {
                    name: 'LaunchableTag.tsx',
                    path: 'core/ui/src/LaunchableTag.tsx',
                    parent: 'core/ui/src',
                    children: [],
                  },
                  {
                    name: 'ScheduleCard.tsx',
                    path: 'core/ui/src/ScheduleCard.tsx',
                    parent: 'core/ui/src',
                    children: [],
                  },
                  { name: 'Avatar.tsx', path: 'core/ui/src/Avatar.tsx', parent: 'core/ui/src', children: [] },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });
});

describe('treeToString', () => {
  test('returns formatted lines', () => {
    expect(treeToString(filePathsToTree(paths))).toMatch(
      [
        'core',
        '├── console',
        '│   └── src',
        '│       ├── __tests__',
        '│       │   └── useFetchAppsForCurrentUser.test.tsx',
        '│       └── useFetchAppsForCurrentUser.ts',
        '├── helpers',
        '│   └── src',
        '│       └── nodeHostURL.ts',
        '├── host-app',
        '│   └── src',
        '│       └── components',
        '│           └── __tests__',
        '│               └── Container.test.tsx',
        '├── testing-helpers',
        '│   └── src',
        '│       └── fixtures',
        '│           ├── cluster.ts',
        '│           ├── deployableArtifact.ts',
        '│           ├── node.ts',
        '│           └── replicationController.ts',
        '└── ui',
        '    └── src',
        '        ├── __tests__',
        '        │   ├── GitCommitMessage.test.tsx',
        '        │   ├── GitCommitTag.test.tsx',
        '        │   └── Avatar.test.tsx',
        '        ├── GitCommitMessage.tsx',
        '        ├── GitCommitTag.tsx',
        '        ├── LaunchableTag.tsx',
        '        ├── ScheduleCard.tsx',
        '        └── Avatar.tsx',
      ].join('\n'),
    );
  });
});
