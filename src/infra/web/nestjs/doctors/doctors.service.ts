import { PageService } from "@/infra/persistence/typeorm/service/page.service";
import { Injectable } from "@nestjs/common";
import { Between, ILike, LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import { Doctor as Entity } from '@/infra/persistence/typeorm/entities/doctor'
import { InjectRepository } from "@nestjs/typeorm";
import { GenericFilter } from "@/infra/persistence/typeorm/service/gereric.filter";
import { Generic } from "@/infra/persistence/typeorm/service/generic";

@Injectable()
export class DoctorPaginateService extends PageService {
  constructor(
    @InjectRepository(Entity) private readonly repository: Repository<Entity>
  ) {
    super();
  }

  async findAllPaginated(
    filter: GenericFilter & Generic,
  ) {
    const { ...params } = filter;

    return await this.paginate(
      this.repository,
      filter,
      this.createWhereQuery(params),
      {
        user: true,
        agendas:true
      },
      {
        user: {
          name: true,
        },
        agendas: false
      }
    );
  }
  
  private createWhereQuery(params: Generic) {
    const where: any = {};
    if (params.name) {
      where.user = {
        name:ILike(`%${params.name}%`)
      }
    }

    if (params.crm) {
      where.crm = ILike(`%${params.name}%`);
    }


    if (params.startAt && params.endAt) {
      const startAt = new Date(params.startAt)
      const endAt = new Date(params.endAt)

      where.agendas = {startAt: Between(startAt, endAt)}
    }

    if (params.startAt && !params.endAt) {
      const startAt = new Date(params.startAt)
      where.agendas=  {startAt: MoreThanOrEqual(startAt)}
      const dayBefore = new Date(params.startAt);
      dayBefore.setDate(startAt.getDate() - 1);
      where.agendas = {endAt: LessThanOrEqual(dayBefore)}
    }



    return where;
  }
}