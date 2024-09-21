module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    '@stylistic',
    '@typescript-eslint/eslint-plugin',
    'jest',
    'eslint-plugin-import-helpers',
  ],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'camelcase': 'warn',
    'complexity': ['warn', 8],
    'no-cond-assign': ['error', 'always'],
    'no-constant-condition': 'off',
    'no-dupe-else-if': 'error',
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],
    'no-nested-ternary': 'warn',
    'no-trailing-spaces': 'warn',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'warn',
    'space-before-function-paren': ['warn', 'always'],
    
    'indent': 'off',
    '@typescript-eslint/indent': ['warn', 2, {
      'SwitchCase': 1,
      'flatTernaryExpressions': false,
      'ignoredNodes': [
        'PropertyDefinition[decorators]',
        'TSUnionType',
        'FunctionExpression[params]:has(Identifier[decorators])'
      ]
    }],
    
    'comma-dangle': ['warn', 'only-multiline'],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    "@typescript-eslint/no-unused-vars": [
      "warn", // or "error"
      {
        ignoreRestSiblings: true,
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    '@typescript-eslint/no-unnecessary-condition': 'warn',

    'semi': 'off',
    '@stylistic/semi': ['warn', 'never'],

    'jest/expect-expect': 'error',
    'jest/no-alias-methods': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jasmine-globals': 'warn',
    'jest/no-standalone-expect': 'warn',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',

    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
        'warn',
        {
            'newlinesBetween': 'always',
            'groups': [
                '/^@nestjs/', // nestjs imports
                ['module'], // third-party imports
                '/^@/(?!test)/', // Custom modules imports without @test
                '/^@/test/', // @test module imports
                ['absolute', 'parent', 'sibling', 'index']
            ],
            'alphabetize': { 'order': 'asc', 'ignoreCase': true }
        }
    ],
  },
}
