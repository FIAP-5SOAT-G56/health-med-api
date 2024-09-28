import Agenda from '@/core/domain/entities/agenda'
import BusinessException from '@/core/domain/errors/business-exception'

describe('Test Agenda Entity Class', () => {
  it('Testing class constructor', () => {
    const agenda = new Agenda(1, 1, 1, false, new Date("October 15, 2024 11:22:00"), new Date("October 15, 2024 12:22:00"))
    expect(agenda).toBeInstanceOf(Agenda)
  })

  it('Testing class constructor exception', () => {
    expect(() => new Agenda(1, 1, 1, false, new Date("October 15, 2024 11:22:00"), new Date("October 14, 2024 12:22:00"))).toThrow(new BusinessException('Data do agendamento invalido'))
  })

  it('Testing create static method', () => {
    const agenda = Agenda.create(1, false, new Date("October 14, 2024 11:22:00"), new Date("October 14, 2024 12:22:00"))
    expect(agenda).toBeInstanceOf(Agenda)
  })

  it('Testing getDate method', () => {
    const agenda = Agenda.create(1, false, new Date("October 14, 2024 11:22:00"), new Date("October 14, 2024 12:22:00"))
    let date = agenda.getDate()
    expect(date).toBe('2024-10-14');
  })

  it('Testing getHoursStart method', () => {
    const agenda = Agenda.create(1, false, new Date("October 14, 2024 11:22:00"), new Date("October 14, 2024 12:22:00"))
    let date = agenda.getHoursStart()
    expect(date).toBe('11:22');
  })

  it('Testing getHoursFinish method', () => {
    const agenda = Agenda.create(1, false, new Date("October 14, 2024 11:22:00"), new Date("October 14, 2024 12:22:00"))
    let date = agenda.getHoursFinish()
    expect(date).toBe('12:22');
  })
})
