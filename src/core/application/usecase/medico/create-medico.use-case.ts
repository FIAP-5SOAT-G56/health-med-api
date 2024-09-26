import MedicoCreateDto from '@/core/domain/dto/input/medico-create.dto'
import Medico from '@/core/domain/entities/doctor'
import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'
import BusinessException from '@/core/domain/errors/business-exception'
import { Gateway } from '@/core/operation/gateway/gateway'

export default class CreateMedicoUseCase {
  constructor (
    private readonly gateway: Gateway,
  ) {}

  async handle (input: MedicoCreateDto): Promise<Medico> {
    const usuario = await this.gateway.usuario.findById(input.userId)
    if (!usuario) {
      throw new BusinessException('Usuario não existe')
    }

    const medico = Medico.create(
      input.userId,
      input.crm
    )

    usuario.addProfile(ProfileTypeEnum.MEDICO, input.crm)
    const findDoctor = await this.gateway.medico.findByUserId(usuario.getId())

    if (findDoctor) {
      throw new BusinessException('Médico já cadastrado')
    }

    await this.gateway.medico.create(medico)
    await this.gateway.usuario.save(usuario)

    return medico
  }
}
