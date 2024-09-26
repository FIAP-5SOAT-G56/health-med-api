import Create from '@/core/application/usecase/medico/create-medico.use-case'
import MedicoCreateDto from '@/core/domain/dto/input/medico-create.dto'
import Medico from '@/core/domain/entities/doctor'

import { Gateway } from '../gateway/gateway'

export class MedicoController {
  constructor (
    private readonly gateway: Gateway,
  ) {}

  async create (
    input: MedicoCreateDto
  ): Promise<Medico> {
    const useCase = new Create(
      this.gateway
    )

    const doctor = await useCase.handle(input)

    return doctor
  }
}
