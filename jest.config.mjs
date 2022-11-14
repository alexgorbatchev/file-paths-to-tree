export default {
  rootDir: 'src',
  cache: true,
  verbose: true,
  cacheDirectory: 'tmp/jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // preset configs
  preset: 'ts-jest/presets/default-esm',
  // which files to test and which to ignore
  testMatch: ['**/__tests__/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/tmp/', '/coverage/'],
  // don't watch for file changes in node_modules
  watchPathIgnorePatterns: ['/node_modules/'],
  // jest automock settings
  automock: false,
  unmockedModulePathPatterns: ['/node_modules/'],
  // test environment setup
  collectCoverage: false,

  // https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: { '^(\\.{1,2}/.*)\\.js$': '$1' },

  // transformIgnorePatterns: ['/node_modules/(?!(globby)/).*'],
  transform: {
    '\\.(ts|tsx|js)$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};
