/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  setupFiles:  ['<rootDir>/src/jestSetupFiles.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/jestSetupFilesAfterEnv.ts'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};