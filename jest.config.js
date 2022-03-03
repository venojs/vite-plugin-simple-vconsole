module.exports = {
    verbose: true,
    preset: 'ts-jest',
    // setupFilesAfterEnv: ['./src/test-utils/jest.setup.ts'],
    // projects: ['<rootDir>/packages/*'],
    testMatch: ['**/__tests__/**/?(*.)+(spec|test).+(ts|tsx|js)'],
    collectCoverage: false,
    collectCoverageFrom: ['./src/**/*.+(ts|tsx|js)'],
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text'],
    globals: {
        __DEV__: true,
    },
};
