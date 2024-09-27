import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAgenda1727398750282 implements MigrationInterface {
    name = 'CreateTableAgenda1727398750282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`salt\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`doctors\` (\`id\` int NOT NULL AUTO_INCREMENT, \`crm\` varchar(255) NOT NULL, \`user_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`REL_653c27d1b10652eb0c7bbbc442\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`patients\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`REL_7fe1518dc780fd777669b5cb7a\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`agenda\` (\`id\` int NOT NULL AUTO_INCREMENT, \`doctor_id\` int NOT NULL, \`patient_id\` int NULL, \`liberada\` tinyint NOT NULL, \`start_at\` datetime NOT NULL, \`end_at\` datetime NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`doctors\` ADD CONSTRAINT \`FK_653c27d1b10652eb0c7bbbc4427\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`patients\` ADD CONSTRAINT \`FK_7fe1518dc780fd777669b5cb7a0\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`agenda\` ADD CONSTRAINT \`FK_7919bdd540c58edbfacbe0b0f66\` FOREIGN KEY (\`doctor_id\`) REFERENCES \`doctors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`agenda\` ADD CONSTRAINT \`FK_c653aa0683b7d1da8d5f341ca56\` FOREIGN KEY (\`patient_id\`) REFERENCES \`patients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agenda\` DROP FOREIGN KEY \`FK_c653aa0683b7d1da8d5f341ca56\``);
        await queryRunner.query(`ALTER TABLE \`agenda\` DROP FOREIGN KEY \`FK_7919bdd540c58edbfacbe0b0f66\``);
        await queryRunner.query(`ALTER TABLE \`patients\` DROP FOREIGN KEY \`FK_7fe1518dc780fd777669b5cb7a0\``);
        await queryRunner.query(`ALTER TABLE \`doctors\` DROP FOREIGN KEY \`FK_653c27d1b10652eb0c7bbbc4427\``);
        await queryRunner.query(`DROP TABLE \`agenda\``);
        await queryRunner.query(`DROP INDEX \`REL_7fe1518dc780fd777669b5cb7a\` ON \`patients\``);
        await queryRunner.query(`DROP TABLE \`patients\``);
        await queryRunner.query(`DROP INDEX \`REL_653c27d1b10652eb0c7bbbc442\` ON \`doctors\``);
        await queryRunner.query(`DROP TABLE \`doctors\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
