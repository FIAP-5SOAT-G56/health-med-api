import Usuario from '@/core/domain/entities/usuario'
import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'

describe('Test Usuario Entity Class', () => {

  it('Testing create static method', async () => {
    const user = await Usuario.create('Test Name', 'test@test.com', '905.489.213-77', '123456789')
    expect(user).toBeInstanceOf(Usuario)
  })

  it('Testing getId method', async () => {
    const user = await Usuario.create('Test Name', 'test@test.com', '905.489.213-77', '123456789')
    let id = user.getId()
    expect(id).toBe(0);
  })

  it('Testing buildExistingUsuario method', async () => {
    const user = await Usuario.buildExistingUsuario(1, 'Test Name', 'test@test.com', '905.489.213-77', '12756312623562', '219837128937912')
    expect(user).toBeInstanceOf(Usuario)
  })

  it('Testing validatePassword method', async () => {
    const user = await Usuario.buildExistingUsuario(1, 'Test Name', 'test@test.com', '905.489.213-77', '12756312623562', '219837128937912')
    await user.validatePassword('');
  })

  it('Testing addProfile method', async () => {
    const user = await Usuario.buildExistingUsuario(1, 'Test Name', 'test@test.com', '905.489.213-77', '12756312623562', '219837128937912')
    user.addProfile(ProfileTypeEnum.MEDICO, '')
    expect(user.perfis.length).toBeGreaterThan(0);
  })
})
