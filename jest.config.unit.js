const config = require('./jest.config');

module.exports = {
  ...config,
  testRegex: '.unit-spec.ts$',
  setupFilesAfterEnv: ['<rootDir>/test/unit/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    "src/core/application/usecase/agenda/*",
    "src/core/application/usecase/medico/*",
    "src/core/application/usecase/paciente/*",
    "src/core/application/usecase/user/sign-in.use-case.ts*",
    "src/core/helpers/conflictArrayAgendaHelper.ts",
    "src/core/domain/value-object/Cpf.ts",
    "src/core/domain/value-object/Name.ts",
    "src/infra/persistence/typeorm/entities/*",
    "src/infra/web/nestjs/pedidos/dto/*"
  ]
};
