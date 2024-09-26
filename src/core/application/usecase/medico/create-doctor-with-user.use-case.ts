import DoctorWithCreateDto from '@/core/domain/dto/input/doctor-with-user-create.dto'
import UserCreateDto from '@/core/domain/dto/input/user-create.dto'
import Medico from '@/core/domain/entities/doctor'
import Usuario from '@/core/domain/entities/usuario'
import BusinessException from '@/core/domain/errors/business-exception'
import Cpf from '@/core/domain/value-object/Cpf'
import Email from '@/core/domain/value-object/email'
import { Gateway } from '@/core/operation/gateway/gateway'

export  class CreateDoctorWithUserUseCase {
  constructor (
    private readonly gateway: Gateway,
  ) {}

  async handle (input: DoctorWithCreateDto): Promise<Medico> {
    const usuario = await this.findOrCreateUser(input);

    const findDoctor = await this.gateway.medico.findByUserId(usuario.getId())

    if (findDoctor) {
      throw new BusinessException('Médico já cadastrado')
    }
    
    const medico = Medico.create(
      usuario.getId(),
      input.crm
    )

    await this.gateway.medico.create(medico)
    return medico
  }


  private async findOrCreateUser(input: UserCreateDto): Promise<Usuario> {
    const usuario = await this.gateway.usuario.findByEmail(new Email(input.email))
    if (usuario) {
      usuario
    }

    const usuarioByCpf = await this.gateway.usuario.findByCpf(new Cpf(input.cpf))
    if (usuarioByCpf) {
      usuario
    }

    const usuarioCriado = await Usuario.create(
      input.name,
      input.email,
      input.cpf,
      input.password,
    )

    return this.gateway.usuario.create(usuarioCriado)
  }
}
