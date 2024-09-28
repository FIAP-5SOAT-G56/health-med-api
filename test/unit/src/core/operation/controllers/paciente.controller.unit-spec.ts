import Create from '@/core/application/usecase/paciente/create-paciente.use-case'
import { CreatePatientrWithUserUseCase } from '@/core/application/usecase/paciente/create-patient-with-user.use-case'
import PacienteCreateDto from '@/core/domain/dto/input/paciente-create.dto'
import PatientWithCreateDto from '@/core/domain/dto/input/patient-with-user-create.dto'
import Paciente from '@/core/domain/entities/paciente'
import Usuario from '@/core/domain/entities/usuario'
import { PacienteController } from '@/core/operation/controllers/paciente.controller'
import { PatientGateway } from '@/core/operation/gateway/patient.gateway'

describe('Test for PacienteController Class', () => {
  let controller:PacienteController

  let mockGateway:jest.Mocked<PatientGateway>

  let mockGatewayfindByCpf:jest.Mock<any>

  let mockUseCaseCreateHandle:jest.Mock<any>
  let mockUseCaseCreatePatientHandle:jest.Mock<any>

  beforeEach(() => {
    jest.mock('@/core/operation/gateway/usuario.gateway')
    jest.mock('@/core/application/usecase/user/create-usuario.use-case')

    mockGatewayfindByCpf = jest.fn()

    mockUseCaseCreateHandle = jest.fn()
    mockUseCaseCreatePatientHandle = jest.fn()

    PatientGateway.prototype.findByCpf = mockGatewayfindByCpf

    Create.prototype.handle = mockUseCaseCreateHandle
    CreatePatientrWithUserUseCase.prototype.handle = mockUseCaseCreatePatientHandle

    controller = new PacienteController(mockGateway)
  })

  it('constructor class test', async () => {
    expect(controller).toBeInstanceOf(PacienteController)
  })

  it('create method test', async () => {
    const createDto: PacienteCreateDto = {
      userId: 1
    }

    const patient = Paciente.create(1)

    mockUseCaseCreateHandle.mockResolvedValue(patient)

    const result = await controller.create(createDto)

    expect(mockUseCaseCreateHandle).toHaveBeenCalledTimes(1)
    expect(mockUseCaseCreateHandle).toHaveBeenCalledWith(createDto)
    expect(result).toEqual(patient)
  })

  it('createPatientrWithUser method test', async () => {
    const dto: PatientWithCreateDto = {
      name: '',
      email: '',
      cpf: '',
      password: ''
    }

    const user = await Usuario.buildExistingUsuario(1, 'Test Name', 'test@test.com', '905.489.213-77', '12756312623562', '219837128937912')

    mockUseCaseCreatePatientHandle.mockResolvedValue(user)

    const result = await controller.createPatientrWithUser(dto)

    expect(mockUseCaseCreatePatientHandle).toHaveBeenCalledTimes(1)
    expect(mockUseCaseCreatePatientHandle).toHaveBeenCalledWith(dto)
    expect(result).toEqual(user)
  })
})
