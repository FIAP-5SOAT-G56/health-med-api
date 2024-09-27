import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { InjectDataSource } from '@nestjs/typeorm'

import { Observable, catchError, concatMap, finalize } from 'rxjs'
import { DataSource } from 'typeorm'

import { Transaction } from '@/infra/persistence/typeorm/service/transaction'

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor (
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly transaction: Transaction
  ) {}

  async intercept(_: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const queryRunner = this.dataSource.createQueryRunner()

    await queryRunner.startTransaction()
    this.transaction.setQueryRunner(queryRunner)
    return next.handle().pipe(
      // concatMap gets called when route handler completes successfully
      concatMap(async (data) => {
        await queryRunner.commitTransaction()
        return data
      }),
      // catchError gets called when route handler throws an exception
      catchError(async (e) => {
        await queryRunner.rollbackTransaction()
        throw e
      }),
      // always executed, even if catchError method throws an exception
      finalize(async () => {
        await queryRunner.release()
      }),
    )
  }
}
