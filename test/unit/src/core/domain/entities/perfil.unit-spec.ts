import Perfil from '@/core/domain/entities/perfil'
import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'

describe('Test Perfil Entity Class', () => {

  it('Testing create static method', () => {
    const profile = Perfil.create(ProfileTypeEnum.MEDICO, '')
    expect(profile).toBeInstanceOf(Perfil)
  })

})