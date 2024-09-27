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
    return repository.findAndCount({
      order: this.createOrderQuery(filter),
      skip: (filter.page - 1) * (filter.pageSize + 1),
      take: filter.pageSize,
      where,
      relations,
      select,
    })
  }
}
