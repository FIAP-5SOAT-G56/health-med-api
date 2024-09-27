import { FindOptionsRelations, FindOptionsSelect, FindOptionsWhere, Repository } from 'typeorm'

import { GenericFilter, SortOrder } from './gereric.filter'

export class PageService {
  protected createOrderQuery (filter: GenericFilter) {
    const order: any = {}

    if (filter.orderBy) {
      order[filter.orderBy] = filter.sortOrder
      return order
    }

    order.createdAt = SortOrder.DESC
    return order
  }

  protected paginate<Entity> (
    repository: Repository<any>,
    filter: GenericFilter,
    where: FindOptionsWhere<Entity>,
    relations?: FindOptionsRelations<Entity>| undefined,
    select?: FindOptionsSelect<Entity>
  ) {
    const page = filter.page ?? 1
    const pageSize = filter.pageSize ?? 10

    return repository.findAndCount({
      order: this.createOrderQuery(filter),
      skip: (page - 1) * (pageSize + 1),
      take: pageSize,
      where,
      relations,
      select,
    })
  }
}
