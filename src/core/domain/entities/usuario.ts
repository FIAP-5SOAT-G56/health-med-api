import Password from '../value-object/Password';
import Email from '../value-object/email';
import Name from '../value-object/Name';
import Cpf from '../value-object/Cpf';
import { ProfileTypeEnum } from '../enums/profile-status.enum';
import Perfil from './perfil';

export default class Usuario {
  private constructor(
    readonly id: number | undefined,
    readonly name: Name,
    readonly email: Email,
    readonly cpf: Cpf,
    readonly password: Password,
    readonly perfis: Perfil[],

  ) {
  }

  static async create(name: string, email: string,cpf: string, password: string) {
    return new Usuario(
      undefined,
      new Name(name),
      new Email(email),
      new Cpf(cpf),
      await Password.create(password, 'salt'),
      []
    );
  }

  static async buildExistingUsuario(
    userId: number,
    name: string,
    email: string,
    cpf: string,
    hashPassword: string,
    salt: string,
  ) {
    return new Usuario(
      userId,
      new Name(name),
      new Email(email),
      new Cpf(cpf),
      new Password(hashPassword, salt),
      [],
    );
  }

  async validatePassword(password: string) {
    return this.password.validate(password);
  }

  addProfile(type: ProfileTypeEnum, code: string | undefined) {
    const profile = Perfil.create(type, code)
    this.perfis.push(profile)
  }
}
