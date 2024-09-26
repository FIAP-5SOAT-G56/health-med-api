import PacienteCreateDto from '@/core/domain/dto/input/paciente-create.dto'
import Paciente from '@/core/domain/entities/paciente'
import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'
import BusinessException from '@/core/domain/errors/business-exception'
import { PatientGateway } from '@/core/operation/gateway/patient.gateway'

export default class CreateMedicoUseCase {
  constructor (
    private readonly gateway: PatientGateway,
  ) {}

  async handle (input: PacienteCreateDto): Promise<Paciente> {
    const usuario = await this.gateway.usuario.findById(input.userId)
    if (!usuario) {
      throw new BusinessException('Usuario não existe')
    }

    const paciente = Paciente.create(
      input.userId
    );

    usuario.addProfile(ProfileTypeEnum.PACIENTE, undefined)

    await this.gateway.paciente.create(paciente)
    await this.gateway.usuario.save(usuario)

    return paciente
  }
}
