import Medico from '@/core/domain/entities/doctor'

export default interface IMedicoRepository {
  create(input: Medico): Promise<Medico>;
  findByCrm(crm: string): Promise<Medico | undefined>;
}

export const IMedicoRepository = Symbol('IMedicoRepository')
