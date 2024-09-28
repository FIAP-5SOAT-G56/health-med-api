import CreateConsultaPacienteUseCase from '@/core/application/usecase/agenda/create-consulta-paciente.use-case'
import CreateMedicoAgendaUseCase from '@/core/application/usecase/agenda/create-medico-agenda.use-case'
import CreateMedicoAgendasUseCase from '@/core/application/usecase/agenda/create-medico-agendas.use-case'
import ListMedicoAgendaUseCase from '@/core/application/usecase/agenda/list-medico-agenda.use-case'
import UpdateMedicoAgendaUseCase from '@/core/application/usecase/agenda/update-medico-agenda.use-case'
import AgendaConsultaPacienteDto from '@/core/domain/dto/input/agenda-consulta-paciente.dto'
import AgendaMedicoCreateDto from '@/core/domain/dto/input/agenda-medico-create.dto'
import AgendaMedicoListDto from '@/core/domain/dto/input/agenda-medico-list.dto'
import AgendaMedicoUpdateDto from '@/core/domain/dto/input/agenda-medico-update.dto'
import AgendasMedicoCreateDto from '@/core/domain/dto/input/agendas-medico-create.dto'
import Agenda from '@/core/domain/entities/agenda'
import { ScheduleService } from '@/core/domain/service/schedule-service'

import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'
import { Gateway } from '@/core/operation/gateway/gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'
import { AgendaController } from '@/core/operation/controllers/agenda.controller'

describe('Test for AgendaController Class', () => {
  let controller:AgendaController
  let mockAgendaGateway:jest.Mocked<AgendaGateway>
  let mockScheduleService:jest.Mocked<ScheduleService>
  let mockGateway:jest.Mocked<Gateway>
  let mockPacienteGateway:jest.Mocked<PacienteGateway>
  let mockMedicoGateway:jest.Mocked<MedicoGateway>

  let mockCreateMedicoAgendaUseCaseHandle:jest.Mock<any>
  let mockCreateConsultaPacienteUseCaseHandle:jest.Mock<any>
  let mockCreateMedicoAgendasUseCaseHandle:jest.Mock<any>
  let mockListMedicoAgendaUseCaseHandle:jest.Mock<any>
  let mockUpdateMedicoAgendaUseCaseHandle:jest.Mock<any>

  beforeEach(() => {
    jest.mock('@/core/application/usecase/agenda/create-consulta-paciente.use-case')
    jest.mock('@/core/application/usecase/agenda/create-medico-agenda.use-case')
    jest.mock('@/core/application/usecase/agenda/create-medico-agendas.use-case')
    jest.mock('@/core/application/usecase/agenda/list-medico-agenda.use-case')
    jest.mock('@/core/application/usecase/agenda/update-medico-agenda.use-case')

    mockCreateMedicoAgendaUseCaseHandle = jest.fn()
    mockCreateConsultaPacienteUseCaseHandle = jest.fn()
    mockCreateMedicoAgendasUseCaseHandle = jest.fn()
    mockListMedicoAgendaUseCaseHandle = jest.fn()
    mockUpdateMedicoAgendaUseCaseHandle = jest.fn()

    CreateConsultaPacienteUseCase.prototype.handle = mockCreateConsultaPacienteUseCaseHandle
    CreateMedicoAgendaUseCase.prototype.handle = mockCreateMedicoAgendaUseCaseHandle
    CreateMedicoAgendasUseCase.prototype.handle = mockCreateMedicoAgendasUseCaseHandle
    ListMedicoAgendaUseCase.prototype.handle = mockListMedicoAgendaUseCaseHandle
    UpdateMedicoAgendaUseCase.prototype.handle = mockUpdateMedicoAgendaUseCaseHandle

    controller = new AgendaController(mockAgendaGateway, mockMedicoGateway)
  })

  it('constructor class test', async () => {
    expect(controller).toBeInstanceOf(AgendaController)
  })

  it('create method test', async () => {
    const createDto: AgendaMedicoCreateDto = {
        crm: '',
        startAt: new Date("October 15, 2024 11:22:00"),
        endAt: new Date("October 15, 2024 12:22:00")
    };

    const agenda = Agenda.create(1, false, new Date("October 14, 2024 11:22:00"), new Date("October 14, 2024 12:22:00"))

    mockCreateMedicoAgendaUseCaseHandle.mockResolvedValue(agenda)

    const result = await controller.create(createDto)

    expect(mockCreateMedicoAgendaUseCaseHandle).toHaveBeenCalledTimes(1)
    expect(mockCreateMedicoAgendaUseCaseHandle).toHaveBeenCalledWith(createDto)
    expect(result).toEqual(agenda)
  })

  it('createAgendas method test', async () => {
    const createDto: AgendasMedicoCreateDto = {
        crm: '',
        dates: []
    };

    await controller.createAgendas(createDto)

    expect(mockCreateMedicoAgendasUseCaseHandle).toHaveBeenCalledTimes(1)
    expect(mockCreateMedicoAgendasUseCaseHandle).toHaveBeenCalledWith(createDto)
  })

  it('update method test', async () => {
    const createDto: AgendaMedicoUpdateDto = {
        agendaId: 1,
        startAt: new Date("October 15, 2024 11:22:00"),
        endAt: new Date("October 15, 2024 12:22:00")
    };

    const agenda = Agenda.create(1, false, new Date("October 14, 2024 11:22:00"), new Date("October 14, 2024 12:22:00"))

    mockUpdateMedicoAgendaUseCaseHandle.mockResolvedValue(agenda)

    let result = await controller.update(createDto)

    expect(mockUpdateMedicoAgendaUseCaseHandle).toHaveBeenCalledTimes(1)
    expect(mockUpdateMedicoAgendaUseCaseHandle).toHaveBeenCalledWith(createDto)
    expect(result).toEqual(agenda)
  })

  it('schedule method test', async () => {
    const createDto: AgendaConsultaPacienteDto = {
        agendaId: 1,
        pacienteId: 1
    };

    const agenda = Agenda.create(1, false, new Date("October 14, 2024 11:22:00"), new Date("October 14, 2024 12:22:00"))

    mockCreateConsultaPacienteUseCaseHandle.mockResolvedValue(agenda)

    let result = await controller.schedule(createDto,mockScheduleService, mockGateway, mockPacienteGateway);

    expect(mockCreateConsultaPacienteUseCaseHandle).toHaveBeenCalledTimes(1)
    expect(mockCreateConsultaPacienteUseCaseHandle).toHaveBeenCalledWith(createDto)
    expect(result).toEqual(agenda)
  })

  it('list method test', async () => {
    const dto: AgendaMedicoListDto = {
        doctorId: 1
    };

    mockListMedicoAgendaUseCaseHandle.mockResolvedValue([])

    let result = await controller.list(dto)

    expect(mockListMedicoAgendaUseCaseHandle).toHaveBeenCalledTimes(1)
    expect(mockListMedicoAgendaUseCaseHandle).toHaveBeenCalledWith(dto)
    expect(result).toEqual([])
  })




})
