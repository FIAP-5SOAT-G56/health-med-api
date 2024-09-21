import { JwtService } from "@/core/domain/service/jtw-service";
import { JwtService as JwtNestRealService } from '@nestjs/jwt';

export class JwtNestService implements JwtService {

  constructor(private jwtService: JwtNestRealService) {

  }
  signAsync(payload: any): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

}