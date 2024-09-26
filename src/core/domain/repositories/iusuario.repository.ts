import User from '@/core/domain/entities/usuario'

import Cpf from '../value-object/Cpf'
import Email from '../value-object/email'

export default interface IUserRepository {
  create(input: User): Promise<User>;
  findByEmail(email: Email): Promise<User | undefined>;
  findByCpf(cpf: Cpf): Promise<User | undefined>;
  findById(id: number): Promise<User | undefined>;
  save(input: User): Promise<void>;
}

export const IUserRepository = Symbol('IUserRepository')
