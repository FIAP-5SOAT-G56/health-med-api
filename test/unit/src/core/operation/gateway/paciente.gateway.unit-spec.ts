import Paciente from '@/core/domain/entities/paciente'
import Repository from '@/core/domain/repositories/ipaciente.repository'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'

describe('Test PacienteGateway class', () => {
  let gateway:PacienteGateway
  let mockRepository:jest.Mocked<Repository>

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByUserId: jest.fn(),
    }

    gateway = new PacienteGateway(mockRepository)
  })

  it('Testing class constructor', () => {
    expect(gateway).toBeInstanceOf(PacienteGateway)
  })

  it('Test create method', async () => {
    const patient = Paciente.create(1)

    mockRepository.create.mockResolvedValue(patient)

    const result = await gateway.create(patient)

    expect(mockRepository.create).toHaveBeenCalledWith(patient)
    expect(mockRepository.create).toHaveBeenCalledTimes(1)
    expect(result).toEqual(patient)
  })

  it('Test findByUserId method', async () => {
    const patient = Paciente.create(1)

    mockRepository.findByUserId.mockResolvedValue(patient)

    const result = await gateway.findByUserId(1)

    expect(mockRepository.findByUserId).toHaveBeenCalledWith(1)
    expect(mockRepository.findByUserId).toHaveBeenCalledTimes(1)
    expect(result).toEqual(patient)
  })

  it('Test findById method', async () => {
    const patient = Paciente.create(1)

    mockRepository.findById.mockResolvedValue(patient)

    const result = await gateway.findById(1)

    expect(mockRepository.findById).toHaveBeenCalledWith(1)
    expect(mockRepository.findById).toHaveBeenCalledTimes(1)
    expect(result).toEqual(patient)
  })
})
