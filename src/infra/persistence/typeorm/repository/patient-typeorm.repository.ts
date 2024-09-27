import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import Paciente from '@/core/domain/entities/paciente'
import IPacienteRepository from '@/core/domain/repositories/ipaciente.repository'
import { Patient as Entity } from '@/infra/persistence/typeorm/entities/patient'

import { Transaction } from '../service/transaction'

@Injectable()
export default class PatientTypeormRepository implements IPacienteRepository {
  constructor (
    @InjectRepository(Entity) private readonly repository: Repository<Entity>,
    private readonly transaction: Transaction
  ) {}

  async create (input: Paciente): Promise<Paciente> {
    if (this.transaction.getQueryRunner().isTransactionActive) {
      const patient = await this.transaction.getQueryRunner().manager.save(
        Entity,
        { userId: input.userId })

      return new Paciente(patient.id, patient.userId)
    }
    await this.repository.insert({
      userId: input.userId,
    })

    return input
  }

  async findByUserId (userId: number): Promise<Paciente | undefined> {
    const patient = await this.repository.findOneBy({
      userId
    })

    return patient ? new Paciente(patient.id, patient.userId) : undefined
  }

  async findById (id: number): Promise<Paciente | undefined> {
    const patient = await this.repository.findOneBy({
      id
    })

    return patient ? new Paciente(patient.id, patient.userId) : undefined
  }
}
