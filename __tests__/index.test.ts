import { describe, expect, it } from "bun:test";
import { filePathsToTree, treeToString } from "../src/index.js";

const paths = [
  "core/console/src/__tests__/useFetchAppsForCurrentUser.test.tsx",
  "core/console/src/useFetchAppsForCurrentUser.ts",
  "core/helpers/src/nodeHostURL.ts",
  "core/host-app/src/components/__tests__/Container.test.tsx",
  "core/testing-helpers/src/fixtures/cluster.ts",
  "core/testing-helpers/src/fixtures/deployableArtifact.ts",
  "core/testing-helpers/src/fixtures/node.ts",
  "core/testing-helpers/src/fixtures/replicationController.ts",
  "core/ui/src/__tests__/GitCommitMessage.test.tsx",
  "core/ui/src/__tests__/GitCommitTag.test.tsx",
  "core/ui/src/__tests__/Avatar.test.tsx",
  "core/ui/src/GitCommitMessage.tsx",
  "core/ui/src/GitCommitTag.tsx",
  "core/ui/src/LaunchableTag.tsx",
  "core/ui/src/ScheduleCard.tsx",
  "core/ui/src/Avatar.tsx",
];

describe("filePathsToTree", () => {
  it("handles empty array", () => {
    expect(filePathsToTree([])).toMatchObject([]);
  });

  it("generates tree", () => {
    expect(filePathsToTree([paths[0]])).toMatchObject([
      {
        name: "core",
        path: "core",
        children: [
          {
            name: "console",
            path: "core/console",
            parent: expect.any(Object),
            children: [
              {
                name: "src",
                path: "core/console/src",
                parent: expect.any(Object),
                children: [
                  {
                    name: "__tests__",
                    path: "core/console/src/__tests__",
                    parent: expect.any(Object),
                    children: [
                      {
                        name: "useFetchAppsForCurrentUser.test.tsx",
                        path: "core/console/src/__tests__/useFetchAppsForCurrentUser.test.tsx",
                        parent: expect.any(Object),
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
    ]);
  });

  it("parses multiple files", () => {
    expect(filePathsToTree(paths)).toMatchObject([
      {
        name: "core",
        path: "core",
        children: [
          {
            name: "console",
            path: "core/console",
            parent: expect.any(Object),
            children: [
              {
                name: "src",
                path: "core/console/src",
                parent: expect.any(Object),
                children: [
                  {
                    name: "__tests__",
                    path: "core/console/src/__tests__",
                    parent: expect.any(Object),
                    children: [
                      {
                        name: "useFetchAppsForCurrentUser.test.tsx",
                        path: "core/console/src/__tests__/useFetchAppsForCurrentUser.test.tsx",
                        parent: expect.any(Object),
                        children: [],
                      },
                    ],
                  },
                  {
                    name: "useFetchAppsForCurrentUser.ts",
                    path: "core/console/src/useFetchAppsForCurrentUser.ts",
                    parent: expect.any(Object),
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            name: "helpers",
            path: "core/helpers",
            parent: expect.any(Object),
            children: [
              {
                name: "src",
                path: "core/helpers/src",
                parent: expect.any(Object),
                children: [
                  {
                    name: "nodeHostURL.ts",
                    path: "core/helpers/src/nodeHostURL.ts",
                    parent: expect.any(Object),
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            name: "host-app",
            path: "core/host-app",
            parent: expect.any(Object),
            children: [
              {
                name: "src",
                path: "core/host-app/src",
                parent: expect.any(Object),
                children: [
                  {
                    name: "components",
                    path: "core/host-app/src/components",
                    parent: expect.any(Object),
                    children: [
                      {
                        name: "__tests__",
                        path: "core/host-app/src/components/__tests__",
                        parent: expect.any(Object),
                        children: [
                          {
                            name: "Container.test.tsx",
                            path: "core/host-app/src/components/__tests__/Container.test.tsx",
                            parent: expect.any(Object),
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
            name: "testing-helpers",
            path: "core/testing-helpers",
            parent: expect.any(Object),
            children: [
              {
                name: "src",
                path: "core/testing-helpers/src",
                parent: expect.any(Object),
                children: [
                  {
                    name: "fixtures",
                    path: "core/testing-helpers/src/fixtures",
                    parent: expect.any(Object),
                    children: [
                      {
                        name: "cluster.ts",
                        path: "core/testing-helpers/src/fixtures/cluster.ts",
                        parent: expect.any(Object),
                        children: [],
                      },
                      {
                        name: "deployableArtifact.ts",
                        path: "core/testing-helpers/src/fixtures/deployableArtifact.ts",
                        parent: expect.any(Object),
                        children: [],
                      },
                      {
                        name: "node.ts",
                        path: "core/testing-helpers/src/fixtures/node.ts",
                        parent: expect.any(Object),
                        children: [],
                      },
                      {
                        name: "replicationController.ts",
                        path: "core/testing-helpers/src/fixtures/replicationController.ts",
                        parent: expect.any(Object),
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "ui",
            path: "core/ui",
            parent: expect.any(Object),
            children: [
              {
                name: "src",
                path: "core/ui/src",
                parent: expect.any(Object),
                children: [
                  {
                    name: "__tests__",
                    path: "core/ui/src/__tests__",
                    parent: expect.any(Object),
                    children: [
                      {
                        name: "GitCommitMessage.test.tsx",
                        path: "core/ui/src/__tests__/GitCommitMessage.test.tsx",
                        parent: expect.any(Object),
                        children: [],
                      },
                      {
                        name: "GitCommitTag.test.tsx",
                        path: "core/ui/src/__tests__/GitCommitTag.test.tsx",
                        parent: expect.any(Object),
                        children: [],
                      },
                      {
                        name: "Avatar.test.tsx",
                        path: "core/ui/src/__tests__/Avatar.test.tsx",
                        parent: expect.any(Object),
                        children: [],
                      },
                    ],
                  },
                  {
                    name: "GitCommitMessage.tsx",
                    path: "core/ui/src/GitCommitMessage.tsx",
                    parent: expect.any(Object),
                    children: [],
                  },
                  {
                    name: "GitCommitTag.tsx",
                    path: "core/ui/src/GitCommitTag.tsx",
                    parent: expect.any(Object),
                    children: [],
                  },
                  {
                    name: "LaunchableTag.tsx",
                    path: "core/ui/src/LaunchableTag.tsx",
                    parent: expect.any(Object),
                    children: [],
                  },
                  {
                    name: "ScheduleCard.tsx",
                    path: "core/ui/src/ScheduleCard.tsx",
                    parent: expect.any(Object),
                    children: [],
                  },
                  {
                    name: "Avatar.tsx",
                    path: "core/ui/src/Avatar.tsx",
                    parent: expect.any(Object),
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });
});

describe("treeToString", () => {
  it("returns formatted lines with default options", () => {
    expect(treeToString(filePathsToTree(paths))).toMatch(
      [
        "core",
        "├── console",
        "│   └── src",
        "│       ├── __tests__",
        "│       │   └── useFetchAppsForCurrentUser.test.tsx",
        "│       └── useFetchAppsForCurrentUser.ts",
        "├── helpers",
        "│   └── src",
        "│       └── nodeHostURL.ts",
        "├── host-app",
        "│   └── src",
        "│       └── components",
        "│           └── __tests__",
        "│               └── Container.test.tsx",
        "├── testing-helpers",
        "│   └── src",
        "│       └── fixtures",
        "│           ├── cluster.ts",
        "│           ├── deployableArtifact.ts",
        "│           ├── node.ts",
        "│           └── replicationController.ts",
        "└── ui",
        "    └── src",
        "        ├── __tests__",
        "        │   ├── GitCommitMessage.test.tsx",
        "        │   ├── GitCommitTag.test.tsx",
        "        │   └── Avatar.test.tsx",
        "        ├── GitCommitMessage.tsx",
        "        ├── GitCommitTag.tsx",
        "        ├── LaunchableTag.tsx",
        "        ├── ScheduleCard.tsx",
        "        └── Avatar.tsx",
      ].join("\n"),
    );
  });

  it("uses options", () => {
    expect(
      treeToString(filePathsToTree(paths), {
        formatLabel(node) {
          return node.name.toUpperCase();
        },
        connectors: {
          tee: "> ",
          elbow: "L ",
          line: "!",
        },
      }),
    ).toMatch(
      [
        "CORE",
        "> CONSOLE",
        "!   L SRC",
        "!       > __TESTS__",
        "!       !   L USEFETCHAPPSFORCURRENTUSER.TEST.TSX",
        "!       L USEFETCHAPPSFORCURRENTUSER.TS",
        "> HELPERS",
        "!   L SRC",
        "!       L NODEHOSTURL.TS",
        "> HOST-APP",
        "!   L SRC",
        "!       L COMPONENTS",
        "!           L __TESTS__",
        "!               L CONTAINER.TEST.TSX",
        "> TESTING-HELPERS",
        "!   L SRC",
        "!       L FIXTURES",
        "!           > CLUSTER.TS",
        "!           > DEPLOYABLEARTIFACT.TS",
        "!           > NODE.TS",
        "!           L REPLICATIONCONTROLLER.TS",
        "L UI",
        "    L SRC",
        "        > __TESTS__",
        "        !   > GITCOMMITMESSAGE.TEST.TSX",
        "        !   > GITCOMMITTAG.TEST.TSX",
        "        !   L AVATAR.TEST.TSX",
        "        > GITCOMMITMESSAGE.TSX",
        "        > GITCOMMITTAG.TSX",
        "        > LAUNCHABLETAG.TSX",
        "        > SCHEDULECARD.TSX",
        "        L AVATAR.TSX",
      ].join("\n"),
    );
  });
});
