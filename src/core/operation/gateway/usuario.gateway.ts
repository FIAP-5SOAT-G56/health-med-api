import Usuario from '@/core/domain/entities/usuario'
import Repository from '@/core/domain/repositories/iusuario.repository'
import Cpf from '@/core/domain/value-object/Cpf'
import Email from '@/core/domain/value-object/email'

export class UsuarioGateway {
  constructor (private respository: Repository) { }

  findById (id: number): Promise<Usuario | undefined> {
    const produto = this.respository.findById(id)
    return produto
  }

  create (input: Usuario): Promise<Usuario> {
    return this.respository.create(input)
  }

  findByEmail (email: Email): Promise<Usuario | undefined> {
    return this.respository.findByEmail(email)
  }

  findByCpf (cpf: Cpf): Promise<Usuario | undefined> {
    return this.respository.findByCpf(cpf)
  }

  save (input: Usuario): Promise<void> {
    return this.respository.save(input)
  }
}
