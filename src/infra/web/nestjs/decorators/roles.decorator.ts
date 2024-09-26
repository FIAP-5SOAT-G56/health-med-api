import { SetMetadata } from '@nestjs/common'

import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'

export const ROLES_KEY = 'roles'
export const Roles = (...roles: ProfileTypeEnum[]) => SetMetadata(ROLES_KEY, roles)
