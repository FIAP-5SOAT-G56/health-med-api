// import { MigrationInterface, QueryRunner } from 'typeorm'

// import { Consumidor } from '@/infra/persistence/typeorm/entities/user'

// const consumidor = {
//   id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
//   nome: 'Consumidor Default',
//   email: 'consumidor@irango.com',
//   cpf: '123.456.789-00'
// }

// export class InsertDefaultConsumidor1706055453697 implements MigrationInterface {
//   public async up (queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.manager.save(new Consumidor(consumidor))
//   }

//   public async down (queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DELETE FROM "Consumidor" WHERE id = '${consumidor.id}';`)
//   }
// }
