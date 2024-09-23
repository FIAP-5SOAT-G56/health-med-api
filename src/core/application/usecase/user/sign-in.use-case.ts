import SignInDto from '@/core/domain/dto/input/sign-in.dto'
import { JwtDto } from '@/core/domain/dto/output/jwt.dto'
import BusinessException from '@/core/domain/errors/business-exception'
import { JwtService } from '@/core/domain/service/jtw-service'
import Email from '@/core/domain/value-object/email'
import { Gateway } from '@/core/operation/gateway/gateway'

export default class SignInUseCase {
  constructor (
    private readonly gateway: Gateway,
    private readonly jwtService: JwtService,
  ) {}

  async handle (input: SignInDto): Promise<JwtDto> {
    const user = await this.gateway.usuario.findByEmail(new Email(input.email))
    if (!user) {
      throw new BusinessException('Invalid')
    }

    if (!user.password.validate(input.password)) {
      throw new BusinessException('Invalid')
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
