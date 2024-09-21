import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export class CreateTableUser1704851869029 implements MigrationInterface {
    name = 'CreateTableUser1704851869029'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE `doctors` (' +
      '  `id` int NOT NULL AUTO_INCREMENT, ' +
      '  `crm` varchar(255) NOT NULL,' +
      '  `user_id` int NOT NULL,' +
      '  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), ' +
      '  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), ' +

      '  PRIMARY KEY (`id`)' +
      ') ENGINE=InnoDB')

      await queryRunner.createForeignKey(
        "users",
        new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
        }),
    )
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE `users`')
    }
}
