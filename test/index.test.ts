import { pathsToTree, treeToPrintableLines } from '../src';

const paths = `core/console/src/__tests__/useFetchAppsForCurrentUser.test.tsx
core/console/src/useFetchAppsForCurrentUser.ts
core/helpers/src/nodeHostURL.ts
core/host-app/src/components/__tests__/Container.test.tsx
core/testing-helpers/src/fixtures/cluster.ts
core/testing-helpers/src/fixtures/deployableArtifact.ts
core/testing-helpers/src/fixtures/node.ts
core/testing-helpers/src/fixtures/replicationController.ts
core/ui/src/__tests__/GitCommitMessage.test.tsx
core/ui/src/__tests__/GitCommitTag.test.tsx
core/ui/src/__tests__/Avatar.test.tsx
core/ui/src/GitCommitMessage.tsx
core/ui/src/GitCommitTag.tsx
core/ui/src/LaunchableTag.tsx
core/ui/src/ScheduleCard.tsx
core/ui/src/Avatar.tsx`.split(/\n/gm);

describe('pathsToTree', () => {
  it('handles empty array', () => {
    expect(pathsToTree([])).toMatchObject([]);
  });

  it('parses multiple files', () => {
    expect(pathsToTree(paths)).toMatchObject([
      {
        name: 'core',
        children: [
          {
            name: 'console',
            children: [
              {
                name: 'src',
                children: [
                  {
                    name: '__tests__',
                    children: [
                      {
                        name: 'useFetchAppsForCurrentUser.test.tsx',
                        children: [],
                      },
                    ],
                  },
                  { name: 'useFetchAppsForCurrentUser.ts', children: [] },
                ],
              },
            ],
          },
          {
            name: 'helpers',
            children: [
              {
                name: 'src',
                children: [{ name: 'nodeHostURL.ts', children: [] }],
              },
            ],
          },
          {
            name: 'host-app',
            children: [
              {
                name: 'src',
                children: [
                  {
                    name: 'components',
                    children: [
                      {
                        name: '__tests__',
                        children: [
                          { name: 'Container.test.tsx', children: [] },
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
            children: [
              {
                name: 'src',
                children: [
                  {
                    name: 'fixtures',
                    children: [
                      { name: 'cluster.ts', children: [] },
                      { name: 'deployableArtifact.ts', children: [] },
                      { name: 'node.ts', children: [] },
                      { name: 'replicationController.ts', children: [] },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'ui',
            children: [
              {
                name: 'src',
                children: [
                  {
                    name: '__tests__',
                    children: [
                      { name: 'GitCommitMessage.test.tsx', children: [] },
                      { name: 'GitCommitTag.test.tsx', children: [] },
                      { name: 'Avatar.test.tsx', children: [] },
                    ],
                  },
                  { name: 'GitCommitMessage.tsx', children: [] },
                  { name: 'GitCommitTag.tsx', children: [] },
                  { name: 'LaunchableTag.tsx', children: [] },
                  { name: 'ScheduleCard.tsx', children: [] },
                  { name: 'Avatar.tsx', children: [] },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });
});

describe('treeToPrintableLines', () => {
  test('returns formatted lines', () => {
    expect(treeToPrintableLines(pathsToTree(paths))).toMatchObject([
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
    ]);
  });
});
