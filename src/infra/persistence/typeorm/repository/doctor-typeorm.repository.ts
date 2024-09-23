import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import Doctor from '@/core/domain/entities/doctor'
import IDoctorRepository from '@/core/domain/repositories/imedico.repository'
import { Doctor as Entity } from '@/infra/persistence/typeorm/entities/doctor'

@Injectable()
export default class DoctorTypeormRepository implements IDoctorRepository {
  constructor (
    @InjectRepository(Entity) private readonly repository: Repository<Entity>
  ) {}

  async create (input: Doctor): Promise<Doctor> {
    await this.repository.insert({
      crm: input.crm,
      userId: input.userId,
    })

    return input
  }

  async findByCrm (crm: string): Promise<Doctor | undefined> {
    const doctor = await this.repository.findOneBy({
      crm: crm
    })

    return doctor ? new Doctor(doctor.id, doctor.userId, doctor.crm) : undefined
  }
}
