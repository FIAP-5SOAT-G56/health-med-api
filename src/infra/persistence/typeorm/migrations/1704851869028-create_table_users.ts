import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableUser1704851869028 implements MigrationInterface {
    name = 'CreateTableUser1704851869028'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE `users` (' +
      '  `id` int NOT NULL AUTO_INCREMENT, ' +
      '  `name` varchar(255) NOT NULL,' +
      '  `cpf` varchar(255) NOT NULL,' +
      '  `email` varchar(255) NOT NULL,' +
      '  `password` varchar(255) NOT NULL,' +
      '  `salt` varchar(255) NOT NULL,' +
      '  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), ' +
      '  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), ' +

      '  PRIMARY KEY (`id`)' +
      ') ENGINE=InnoDB')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE `users`')
    }
}
