import { Injectable } from '@nestjs/common'
import { JwtService as JwtNestRealService } from '@nestjs/jwt'

import { JwtService } from '@/core/domain/service/jtw-service'

@Injectable()
export class JwtNestService implements JwtService {
  constructor (private jwtService: JwtNestRealService) {}
  signAsync (payload: any): Promise<string> {
    return this.jwtService.signAsync(payload)
  }
}
