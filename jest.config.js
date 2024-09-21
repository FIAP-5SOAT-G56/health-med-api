const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['src', 'node_modules', 'test'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.spec.ts$',
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/test/jest.resets.ts'],
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest', {
        tsconfig: './tsconfig.json'
      }
    ]
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    }
  },
}
