import { Injectable, Scope } from '@nestjs/common'

import { QueryRunner } from 'typeorm'

@Injectable({
  scope: Scope.REQUEST
})
export class Transaction {
  private queryRunner: QueryRunner
  setQueryRunner (queryRunner: QueryRunner) {
    this.queryRunner = queryRunner
  }

  getQueryRunner (): QueryRunner {
    return this.queryRunner
  }
}
