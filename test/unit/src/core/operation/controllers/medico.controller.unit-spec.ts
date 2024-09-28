import { CreateDoctorWithUserUseCase } from '@/core/application/usecase/medico/create-doctor-with-user.use-case'
import Create from '@/core/application/usecase/medico/create-medico.use-case'
import DoctorWithCreateDto from '@/core/domain/dto/input/doctor-with-user-create.dto'
import MedicoCreateDto from '@/core/domain/dto/input/medico-create.dto'
import Medico from '@/core/domain/entities/doctor'
import { MedicoController } from '@/core/operation/controllers/medico.controller'
import { Gateway } from '@/core/operation/gateway/gateway'

describe('Test for MedicoController Class', () => {
  let controller:MedicoController
  let mockGateway:jest.Mocked<Gateway>
  let mockUseCaseCreateHandle:jest.Mock<any>
  let mockUseCaseCreateDoctorHandle:jest.Mock<any>

  beforeEach(() => {
    jest.mock('@/core/application/usecase/user/create-usuario.use-case')
    jest.mock('@/core/application/usecase/medico/create-doctor-with-user.use-case')

    mockUseCaseCreateHandle = jest.fn()
    mockUseCaseCreateDoctorHandle = jest.fn()

    Create.prototype.handle = mockUseCaseCreateHandle
    CreateDoctorWithUserUseCase.prototype.handle = mockUseCaseCreateDoctorHandle

    controller = new MedicoController(mockGateway)
  })

  it('constructor class test', async () => {
    expect(controller).toBeInstanceOf(MedicoController)
  })

  it('create method test', async () => {
    const createDto: MedicoCreateDto = {
        userId: 1,
        crm: ''
    };

    const doctor = Medico.create(1, '')

    mockUseCaseCreateHandle.mockResolvedValue(doctor)

    const result = await controller.create(createDto)

    expect(mockUseCaseCreateHandle).toHaveBeenCalledTimes(1)
    expect(mockUseCaseCreateHandle).toHaveBeenCalledWith(createDto)
    expect(result).toEqual(doctor)
  })

  it('createDoctorWithUser method test', async () => {
    const dto: DoctorWithCreateDto = {
        crm: '',
        name: '',
        email: '',
        cpf: '',
        password: ''
    };

    const doctor = Medico.create(1, '');

    mockUseCaseCreateDoctorHandle.mockResolvedValue(doctor)

    const result = await controller.createDoctorWithUser(dto);

    expect(mockUseCaseCreateDoctorHandle).toHaveBeenCalledTimes(1)
    expect(mockUseCaseCreateDoctorHandle).toHaveBeenCalledWith(dto)
    expect(result).toEqual(doctor)
  })


})
