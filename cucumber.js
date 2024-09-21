
// let common = [
//     'test/acceptance/features/**/*.feature', // Specify our feature files
//     '--require-module ts-node/register tsconfig-paths/register', // Load TypeScript module
//     '--require test/acceptance/step-definitions/**/*.ts', // Load step definitions
//     '--format progress-bar', // Load custom formatter
//     '--format node_modules/cucumber-pretty', // Load custom formatter
//     '--config tsconfig.cucumber.json'
//   ].join(' ');
  
//   module.exports = {
//     default: common
//   };

  

//   'use strict';

module.exports = {
  default: {
    paths: ['test/acceptance/features/**/*.feature'],
    requireModule: ['ts-node/register', 'tsconfig-paths/register', __dirname + "/register.js", __dirname + '/jestGlobal.js'],
    require: ['test/acceptance/step-definitions/**/*.ts', 'jest.config.integration.js'],
  },
};
