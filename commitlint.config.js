module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'scope-enum': [
      2,
      'always',
      [
      ]
    ],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'chore',
        'test',
        'revert',
        'perf'
      ]
    ],
  },
}
