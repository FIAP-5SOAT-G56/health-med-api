import PatientWithCreateDto from '@/core/domain/dto/input/patient-with-user-create.dto'
import UserCreateDto from '@/core/domain/dto/input/user-create.dto'
import Paciente from '@/core/domain/entities/paciente'
import Usuario from '@/core/domain/entities/usuario'
import BusinessException from '@/core/domain/errors/business-exception'
import Cpf from '@/core/domain/value-object/Cpf'
import Email from '@/core/domain/value-object/email'
import { PatientGateway } from '@/core/operation/gateway/patient.gateway'

export class CreatePatientrWithUserUseCase {
  constructor (
    private readonly gateway: PatientGateway,
  ) {}

  async handle (input: PatientWithCreateDto): Promise<Paciente> {
    const usuario = await this.findOrCreateUser(input)

    const findDoctor = await this.gateway.paciente.findByUserId(usuario.getId())

    if (findDoctor) {
      throw new BusinessException('Médico já cadastrado')
    }

    const paciente = Paciente.create(
      usuario.getId()
    )

    await this.gateway.paciente.create(paciente)
    return paciente
  }

  private async findOrCreateUser (input: UserCreateDto): Promise<Usuario> {
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
