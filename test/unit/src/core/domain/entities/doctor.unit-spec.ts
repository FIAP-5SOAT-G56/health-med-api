import Medico from '@/core/domain/entities/doctor'

describe('Test Medico Entity Class', () => {
  it('Testing class constructor', () => {
    const doctor = new Medico(1, 1, '')
    expect(doctor).toBeInstanceOf(Medico)
  })

  it('Testing create static method', () => {
    const doctor = Medico.create(1, '')
    expect(doctor).toBeInstanceOf(Medico)
  })

  it('Testing getId method', () => {
    const doctor = Medico.create(1, '')
    let id = doctor.getId()
    expect(id).toBe(0);
  })
})
