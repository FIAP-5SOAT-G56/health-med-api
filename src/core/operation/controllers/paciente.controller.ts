import Create from '@/core/application/usecase/paciente/create-paciente.use-case'
import { CreatePatientrWithUserUseCase } from '@/core/application/usecase/paciente/create-patient-with-user.use-case'
import PacienteCreateDto from '@/core/domain/dto/input/paciente-create.dto'
import PatientWithCreateDto from '@/core/domain/dto/input/patient-with-user-create.dto'
import Paciente from '@/core/domain/entities/paciente'

import { PatientGateway } from '../gateway/patient.gateway'

export class PacienteController {
  constructor (
    private readonly gateway: PatientGateway,
  ) {}

  async create (
    input: PacienteCreateDto
  ): Promise<Paciente> {
    const useCase = new Create(
      this.gateway
    )

    const patient = await useCase.handle(input)

    return patient
  }

  async createPatientrWithUser (
    input: PatientWithCreateDto
  ): Promise<Paciente> {
    const useCase = new CreatePatientrWithUserUseCase(
      this.gateway
    )
    const patient = await useCase.handle(input)
    return patient
  }
}
