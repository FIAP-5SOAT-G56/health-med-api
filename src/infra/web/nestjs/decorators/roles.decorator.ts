import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum';
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ProfileTypeEnum[]) => SetMetadata(ROLES_KEY, roles);