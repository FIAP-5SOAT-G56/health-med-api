import { ProfileTypeEnum } from '../enums/profile-status.enum'

export default class Perfil {
  private constructor (
    readonly id: string | undefined,
    readonly type: ProfileTypeEnum,
    readonly code: string | undefined,
  ) {
  }

  static create (type: ProfileTypeEnum, code: string | undefined) {
    return new Perfil(
      undefined,
      type,
      code
    )
  }
}
