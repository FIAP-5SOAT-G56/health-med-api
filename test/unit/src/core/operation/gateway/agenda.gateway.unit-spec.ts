import Agenda from '@/core/domain/entities/agenda'
import { Agendas } from '@/core/domain/entities/agendas'
import Repository from '@/core/domain/repositories/iagenda.repository'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'

describe('Test AgendaGateway class', () => {
  let gateway:AgendaGateway
  let mockRepository:jest.Mocked<Repository>

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      creates: jest.fn(),
      findById: jest.fn(),
      findByDoctor: jest.fn(),
      agendaConflict: jest.fn(),
      agendaPatientConflict: jest.fn(),
      agendaUpdateConflict: jest.fn(),
      save: jest.fn()
    }

    gateway = new AgendaGateway(mockRepository)
  })

  it('Testing class constructor', () => {
    expect(gateway).toBeInstanceOf(AgendaGateway)
  })

  it('Test create method', async () => {

    const agenda = new Agenda(
        1,
        1,
        1,
        false,
        new Date("October 15, 2024 11:22:00"),
        new Date("October 15, 2024 12:22:00")
    )

    mockRepository.create.mockResolvedValue(agenda)

    const result = await gateway.create(agenda)

    expect(mockRepository.create).toHaveBeenCalledWith(agenda)
    expect(mockRepository.create).toHaveBeenCalledTimes(1)
    expect(result).toEqual(agenda)
  })

  it('Test creates method', async () => {

    const agendas = new Agendas();

    agendas.push(1, false, new Date("October 15, 2024 11:22:00"), new Date("October 15, 2024 12:22:00"));

    await gateway.creates(agendas)

    expect(mockRepository.creates).toHaveBeenCalledWith(agendas)
    expect(mockRepository.creates).toHaveBeenCalledTimes(1)
  })

  it('Test update method', async () => {
    const agenda = new Agenda(
        1,
        1,
        1,
        false,
        new Date("October 15, 2024 11:22:00"),
        new Date("October 15, 2024 12:22:00")
    )

    mockRepository.save.mockResolvedValue(agenda)

    const result = await gateway.update(agenda)

    expect(mockRepository.save).toHaveBeenCalledWith(agenda)
    expect(mockRepository.save).toHaveBeenCalledTimes(1)
    expect(result).toEqual(agenda)
  })

  it('Test findByDoctor method', async () => {

    const agenda = new Agenda(
        1,
        1,
        1,
        false,
        new Date("October 15, 2024 11:22:00"),
        new Date("October 15, 2024 12:22:00")
    )

    mockRepository.findByDoctor.mockResolvedValue([agenda])

    const result = await gateway.findByDoctor(1)

    expect(mockRepository.findByDoctor).toHaveBeenCalledWith(1)
    expect(mockRepository.findByDoctor).toHaveBeenCalledTimes(1)
    expect(result).toEqual([agenda])
  })



  it('Test findById method', async () => {
    const agenda = new Agenda(
        1,
        1,
        1,
        false,
        new Date("October 15, 2024 11:22:00"),
        new Date("October 15, 2024 12:22:00")
    )

    mockRepository.findById.mockResolvedValue(agenda)

    const result = await gateway.findById(1)

    expect(mockRepository.findById).toHaveBeenCalledWith(1)
    expect(mockRepository.findById).toHaveBeenCalledTimes(1)
    expect(result).toEqual(agenda)
  })

  it('Test agendaConflict method', async () => {

    mockRepository.agendaConflict.mockResolvedValue(true)

    const result = await gateway.agendaConflict(
        1,
        new Date("October 15, 2024 11:22:00"),
        new Date("October 15, 2024 12:22:00")
    );

    expect(mockRepository.agendaConflict).toHaveBeenCalledTimes(1)
    expect(result).toEqual(true)
  })

  it('Test agendaPatientConflict method', async () => {

    mockRepository.agendaPatientConflict.mockResolvedValue(true)

    const result = await gateway.agendaPatientConflict(
        1,
        new Date("October 15, 2024 11:22:00"),
        new Date("October 15, 2024 12:22:00")
    );

    expect(mockRepository.agendaPatientConflict).toHaveBeenCalledTimes(1)
    expect(result).toEqual(true)
  })

  it('Test agendaUpdateConflict method', async () => {

    mockRepository.agendaUpdateConflict.mockResolvedValue(true)

    const result = await gateway.agendaUpdateConflict(
        1,
        1,
        new Date("October 15, 2024 11:22:00"),
        new Date("October 15, 2024 12:22:00")
    );

    expect(mockRepository.agendaUpdateConflict).toHaveBeenCalledTimes(1)
    expect(result).toEqual(true)
  })
})
