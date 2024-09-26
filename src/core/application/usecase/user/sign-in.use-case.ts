import SignInDto from '@/core/domain/dto/input/sign-in.dto'
import { JwtDto } from '@/core/domain/dto/output/jwt.dto'
import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'
import BusinessException from '@/core/domain/errors/business-exception'
import { JwtService } from '@/core/domain/service/jtw-service'
import Email from '@/core/domain/value-object/email'
import { Gateway } from '@/core/operation/gateway/gateway'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'

type Profiles = {
  [key: string]: string[];
}

export default class SignInUseCase {
  constructor (
    private readonly gateway: Gateway,
    private readonly patientGateway: PacienteGateway,
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
    const profiles: Profiles = {}
    const doctor = await this.gateway.medico.findByUserId(user.getId())

    if (doctor) {
      profiles[ProfileTypeEnum.MEDICO] = [doctor.crm]
    }

    const patient = await this.patientGateway.findByUserId(user.getId())

    if (patient) {
      profiles[ProfileTypeEnum.PACIENTE] = [patient.getId().toString()]
    }

    const payload = { sub: user.id, email: user.email.toString(), profiles }

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
