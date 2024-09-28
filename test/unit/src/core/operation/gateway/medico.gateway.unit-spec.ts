import Medico from '@/core/domain/entities/doctor'
import Repository from '@/core/domain/repositories/imedico.repository'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'


describe('Test MedicoGateway class', () => {
  let gateway:MedicoGateway
  let mockRepository:jest.Mocked<Repository>

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByUserId: jest.fn(),
      findByCrm: jest.fn()
    }

    gateway = new MedicoGateway(mockRepository)
  })

  it('Testing class constructor', () => {
    expect(gateway).toBeInstanceOf(MedicoGateway)
  })

  it('Test create method', async () => {

    const doctor = new Medico(1, 1, '')

    mockRepository.create.mockResolvedValue(doctor)

    const result = await gateway.create(doctor)

    expect(mockRepository.create).toHaveBeenCalledWith(doctor)
    expect(mockRepository.create).toHaveBeenCalledTimes(1)
    expect(result).toEqual(doctor)
  })

  it('Test findByCrm method', async () => {

    const doctor = new Medico(1, 1, '2312412343')
    mockRepository.findByCrm.mockResolvedValue(doctor)
    const result = await gateway.findByCrm('2312412343')
    expect(mockRepository.findByCrm).toHaveBeenCalledWith('2312412343')
    expect(mockRepository.findByCrm).toHaveBeenCalledTimes(1)
    expect(result).toEqual(doctor)

  })

  it('Test findByUserId method', async () => {

    const doctor = new Medico(1, 1, '2312412343')
    mockRepository.findByUserId.mockResolvedValue(doctor)
    const result = await gateway.findByUserId(1)
    expect(mockRepository.findByUserId).toHaveBeenCalledWith(1)
    expect(mockRepository.findByUserId).toHaveBeenCalledTimes(1)
    expect(result).toEqual(doctor)

  })

  it('Test findById method', async () => {
    const doctor = new Medico(1, 1, '2312412343')

    mockRepository.findById.mockResolvedValue(doctor)

    const result = await gateway.findById(1)

    expect(mockRepository.findById).toHaveBeenCalledWith(1)
    expect(mockRepository.findById).toHaveBeenCalledTimes(1)
    expect(result).toEqual(doctor)
  })

})
