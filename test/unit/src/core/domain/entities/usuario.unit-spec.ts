import Usuario from '@/core/domain/entities/usuario'
import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'

describe('Test Usuario Entity Class', () => {
  it('Testing getId method', async () => {
    const user = await Usuario.create('Test Name', 'test@test.com', '905.489.213-77', '123456789')
    const id = user.getId()
    expect(id).toBe(0)
  })

  it('Testing buildExistingUsuario method', async () => {
    const user = await Usuario.buildExistingUsuario(1, 'Test Name', 'test@test.com', '905.489.213-77', '12756312623562', '219837128937912')
    expect(user).toBeInstanceOf(Usuario)
  })

  it('Testing addProfile method', async () => {
    const user = await Usuario.buildExistingUsuario(1, 'Test Name', 'test@test.com', '905.489.213-77', '12756312623562', '219837128937912')
    user.addProfile(ProfileTypeEnum.MEDICO, '')
    expect(user.perfis.length).toBeGreaterThan(0)
  })
})
