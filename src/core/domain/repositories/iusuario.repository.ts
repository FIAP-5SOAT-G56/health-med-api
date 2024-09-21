import User from '@/core/domain/entities/usuario'
import Email from '../value-object/email';

export default interface IUserRepository {
  create(input: User): Promise<User>;
  findByEmail(email: Email): Promise<User | undefined>;
  findById(id: number): Promise<User | undefined>;
}

export const IUserRepository = Symbol('IUserRepository')
