import UserCreateDto from '@/core/domain/dto/input/user-create.dto'
import Usuario from '@/core/domain/entities/usuario'
import BusinessException from '@/core/domain/errors/business-exception'
import Cpf from '@/core/domain/value-object/Cpf'
import Email from '@/core/domain/value-object/email'
import { Gateway } from '@/core/operation/gateway/gateway'

export default class CreateUsuarioUseCase {
  constructor (
    private readonly gateway: Gateway,
  ) {}

  async handle (input: UserCreateDto): Promise<Usuario> {
    const usuario = await this.gateway.usuario.findByEmail(new Email(input.email))
    if (usuario) {
      throw new BusinessException('Usuario já existe')
    }

    const usuarioByCpf = await this.gateway.usuario.findByCpf(new Cpf(input.cpf))
    if (usuarioByCpf) {
      throw new BusinessException('Usuario já existe')
    }

    const usuarioCriado = await Usuario.create(
      input.name,
      input.email,
      input.cpf,
      input.password,
    );

    await this.gateway.usuario.create(usuarioCriado)

    return usuarioCriado
  }
}
