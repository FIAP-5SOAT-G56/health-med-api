// import { MigrationInterface, QueryRunner } from 'typeorm'
// import { v4 as uuidv4 } from 'uuid'

// import { Ingrediente } from '@/infra/persistence/typeorm/entities/ingrediente'
// import { Produto } from '@/infra/persistence/typeorm/entities/produto'
// import { produtos } from '@/infra/persistence/typeorm/seeds/data/1705359271906-produtos'

// export class InsertProdutosIniciais1705359271906 implements MigrationInterface {
//   public async up (queryRunner: QueryRunner): Promise<void> {
//     for (const product of produtos) {
//       const { ingredientes, ...params } = product
//       let entity = new Produto(params)
//       entity.id = uuidv4()
//       entity = await queryRunner.manager.save(entity)

//       for (const ingrediente of (ingredientes ?? [])) {
//         let ingredienteEntity = new Ingrediente({ ...ingrediente, produto: entity })
//         ingredienteEntity.id = uuidv4()
//         ingredienteEntity = await queryRunner.manager.save(ingredienteEntity)
//       }
//     }
//   }

//   public async down (queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query('DELETE FROM ProdutoIngrediente;')
//     await queryRunner.query('DELETE FROM Produto;')
//   }
// }
