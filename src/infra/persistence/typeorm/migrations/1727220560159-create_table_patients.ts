import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePatients1727220560159 implements MigrationInterface {
    name = 'CreateTablePatients1727220560159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`patients\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`REL_7fe1518dc780fd777669b5cb7a\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`doctors\` ADD UNIQUE INDEX \`IDX_653c27d1b10652eb0c7bbbc442\` (\`user_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_653c27d1b10652eb0c7bbbc442\` ON \`doctors\` (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`doctors\` ADD CONSTRAINT \`FK_653c27d1b10652eb0c7bbbc4427\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`patients\` ADD CONSTRAINT \`FK_7fe1518dc780fd777669b5cb7a0\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`patients\` DROP FOREIGN KEY \`FK_7fe1518dc780fd777669b5cb7a0\``);
        await queryRunner.query(`ALTER TABLE \`doctors\` DROP FOREIGN KEY \`FK_653c27d1b10652eb0c7bbbc4427\``);
        await queryRunner.query(`DROP INDEX \`REL_653c27d1b10652eb0c7bbbc442\` ON \`doctors\``);
        await queryRunner.query(`ALTER TABLE \`doctors\` DROP INDEX \`IDX_653c27d1b10652eb0c7bbbc442\``);
        await queryRunner.query(`DROP INDEX \`REL_7fe1518dc780fd777669b5cb7a\` ON \`patients\``);
        await queryRunner.query(`DROP TABLE \`patients\``);
    }

}
