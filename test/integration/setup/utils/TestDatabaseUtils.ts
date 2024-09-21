import { Injectable } from '@nestjs/common'

import { DataSource } from 'typeorm'

@Injectable()
export class TestDatabaseUtils {
  constructor (private dataSource: DataSource) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('ERROR-TEST-UTILS-ONLY-FOR-DEV-AND-TESTS')
    }
  }

  async truncateAll () {
    try {
      const entities = this.dataSource.entityMetadatas
      for (const entity of entities) {
        const repository = this.dataSource.getRepository(entity.name)
        await repository.query(`DELETE FROM ${entity.tableName};`)
      }
    } catch (error) {
      throw new Error(`ERROR: Cleaning test database: ${error}`)
    }
  }
}
