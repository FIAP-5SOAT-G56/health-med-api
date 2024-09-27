import Agenda from '@/core/domain/entities/agenda'
import { Agendas } from '@/core/domain/entities/agendas'
import BusinessException from '@/core/domain/errors/business-exception'

describe('Agendas', () => {
  it('Testa fora', () => {
    const agendas = new Agendas(
      [
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T10:00:00'), new Date('2024-12-17T10:30:00')),
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T14:00:00'), new Date('2024-12-17T14:30:00'))

      ]
    )

    agendas.push(1, true, new Date('2024-12-17T10:30:00'), new Date('2024-12-17T11:00:00'))
    expect(agendas.length()).toBe(3)
  })

  it('Testa dentro', () => {
    const agendas = new Agendas(
      [
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T10:00:00'), new Date('2024-12-17T10:30:00')),
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T14:00:00'), new Date('2024-12-17T14:30:00'))

      ]
    )

    expect(() => {
      agendas.push(1, true, new Date('2024-12-17T10:00:00'), new Date('2024-12-17T10:30:00'))
    }).toThrow(new BusinessException('Horario repetido'))
  })

  it('Testa dentro 2', () => {
    const agendas = new Agendas(
      [
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T10:00:00'), new Date('2024-12-17T10:30:00')),
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T14:00:00'), new Date('2024-12-17T14:30:00'))

      ]
    )

    expect(() => {
      agendas.push(1, true, new Date('2024-12-17T10:20:00'), new Date('2024-12-17T11:30:00'))
    }).toThrow(new BusinessException('Horario repetido'))
  })

  it('Horario igual', () => {
    const agendas = new Agendas(
      [
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T10:00:00'), new Date('2024-12-17T10:30:00')),
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T14:00:00'), new Date('2024-12-17T14:30:00'))

      ]
    )

    expect(() => {
      agendas.push(1, true, new Date('2024-12-17T10:00:00'), new Date('2024-12-17T10:30:00'))
    }).toThrow(new BusinessException('Horario repetido'))
  })

  it('Horario menor', () => {
    const agendas = new Agendas(
      [
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T10:00:00'), new Date('2024-12-17T10:30:00')),
        new Agenda(1, 1, undefined, true, new Date('2024-12-17T14:00:00'), new Date('2024-12-17T14:30:00'))

      ]
    )

    agendas.push(1, true, new Date('2024-12-17T09:30:00'), new Date('2024-12-17T10:00:00'))
    expect(agendas.length()).toBe(3)
  })
})
