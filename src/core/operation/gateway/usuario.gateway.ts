import Usuario from '@/core/domain/entities/usuario'
import Repository from '@/core/domain/repositories/iusuario.repository'
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

}
