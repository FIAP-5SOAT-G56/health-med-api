import Medico from '@/core/domain/entities/doctor'
import Repository from '@/core/domain/repositories/imedico.repository'

export class MedicoGateway {
  constructor (private respository: Repository) {
  }

  findByCrm (id: string): Promise<Medico | undefined> {
  return this.respository.findByCrm(id)
  }

  create (input: Medico): Promise<Medico> {
    return this.respository.create(input)
  }
}
