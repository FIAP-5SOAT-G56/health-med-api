import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import Paciente from '@/core/domain/entities/paciente'
import IPacienteRepository from '@/core/domain/repositories/ipaciente.repository'
import { Patient as Entity } from '@/infra/persistence/typeorm/entities/patient'

@Injectable()
export default class PatientTypeormRepository implements IPacienteRepository {
  constructor (
    @InjectRepository(Entity) private readonly repository: Repository<Entity>
  ) {}

  async create (input: Paciente): Promise<Paciente> {
    await this.repository.insert({
      userId: input.userId,
    })

    return input
  }

  async findByUserId(userId: number): Promise<Paciente | undefined> {
    const patient = await this.repository.findOneBy({
      userId: userId
    })

    return patient ? new Paciente(patient.id, patient.userId) : undefined
  }
}
