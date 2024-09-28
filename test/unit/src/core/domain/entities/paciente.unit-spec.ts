import Paciente from '@/core/domain/entities/paciente'

describe('Test Paciente Entity Class', () => {
  it('Testing class constructor', () => {
    const patient = new Paciente(1, 1)
    expect(patient).toBeInstanceOf(Paciente)
  })

  it('Testing create static method', () => {
    const patient = Paciente.create(1)
    expect(patient).toBeInstanceOf(Paciente)
  })

  it('Testing getId method', () => {
    const patient = Paciente.create(1)
    let id = patient.getId()
    expect(id).toBe(0);
  })
})
