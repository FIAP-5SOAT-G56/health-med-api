import { CallHandler, ExecutionContext, Injectable, mixin, NestInterceptor, Type } from '@nestjs/common'

import { Observable } from 'rxjs'

import PaginationOptions from './PaginationOptions'

export function PaginationInterceptor (maxLimit = 10): Type<NestInterceptor> {
  @Injectable()
  class PaginationIntercept implements NestInterceptor {
    private readonly maxLimit: number

    constructor () {
      this.maxLimit = maxLimit
    }

    intercept (context: ExecutionContext, next: CallHandler): Observable<unknown> {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const req: any = context.switchToHttp().getRequest()

      const page = req.query.page ? parseInt(req.query.page) : 1

      let pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : this.maxLimit
      if (pageSize > this.maxLimit) pageSize = this.maxLimit

      req.pagination = new PaginationOptions(page, pageSize)

      return next.handle()
    }
  }

  return mixin(PaginationIntercept)
}
