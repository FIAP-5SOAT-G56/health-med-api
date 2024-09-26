import Medico from '@/core/domain/entities/doctor'
import Repository from '@/core/domain/repositories/imedico.repository'

export class MedicoGateway {
  constructor (private respository: Repository) {
  }

  findByCrm (id: string): Promise<Medico | undefined> {
    return this.respository.findByCrm(id)
  }

  findByUserId (userId: number): Promise<Medico | undefined> {
    return this.respository.findByUserId(userId)
  }

  create (input: Medico): Promise<Medico> {
    return this.respository.create(input)
  }
}
