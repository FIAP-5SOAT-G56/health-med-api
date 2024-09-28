import CreateUsuarioUseCase from '@/core/application/usecase/user/create-usuario.use-case'
import SignInUseCase from '@/core/application/usecase/user/sign-in.use-case'
import UserCreateDto from '@/core/domain/dto/input/user-create.dto'
import SignInDto from '@/core/domain/dto/input/sign-in.dto'
import Usuario from '@/core/domain/entities/usuario'
import { JwtDto } from '@/core/domain/dto/output/jwt.dto'
import { UsuarioController } from '@/core/operation/controllers/usuario.controller'
import { Gateway } from '@/core/operation/gateway/gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'
import { JwtService } from '@/core/domain/service/jtw-service'

describe('Test for UsuarioController Class', () => {
  let controller:UsuarioController

  let mockGateway:jest.Mocked<Gateway>
  let mockPacienteGateway:jest.Mocked<PacienteGateway>
  let mockJwtService:jest.Mocked<JwtService>

  let mockGatewayCreate:jest.Mock<any>
  let mockGatewayfindById:jest.Mock<any>
  let mockGatewayfindByEmail:jest.Mock<any>
  let mockGatewaysave:jest.Mock<any>
  let mockGatewayfindByCpf:jest.Mock<any>

  let mockUseCaseCreateHandle:jest.Mock<any>
  let mockUseCaseSignInHandle:jest.Mock<any>

  beforeEach(() => {
    jest.mock('@/core/operation/gateway/usuario.gateway')
    jest.mock('@/core/application/usecase/user/create-usuario.use-case')

    mockGatewayCreate = jest.fn()
    mockGatewayfindById = jest.fn()
    mockGatewayfindByEmail = jest.fn()
    mockGatewaysave = jest.fn()
    mockGatewayfindByCpf = jest.fn()

    mockUseCaseCreateHandle = jest.fn()
    mockUseCaseSignInHandle = jest.fn()

    UsuarioGateway.prototype.create = mockGatewayCreate
    UsuarioGateway.prototype.findById = mockGatewayfindById
    UsuarioGateway.prototype.findByEmail = mockGatewayfindByEmail
    UsuarioGateway.prototype.save = mockGatewaysave
    UsuarioGateway.prototype.findByCpf = mockGatewayfindByCpf

    CreateUsuarioUseCase.prototype.handle = mockUseCaseCreateHandle
    SignInUseCase.prototype.handle = mockUseCaseSignInHandle

    controller = new UsuarioController(mockGateway)
  })

  it('constructor class test', async () => {
    expect(controller).toBeInstanceOf(UsuarioController)
  })

  it('create method test', async () => {
    const createDto: UserCreateDto = {
        name: '',
        email: '',
        cpf: '',
        password: ''
    };

    const user = await Usuario.buildExistingUsuario(1, 'Test Name', 'test@test.com', '905.489.213-77', '12756312623562', '219837128937912')

    mockUseCaseCreateHandle.mockResolvedValue(user)

    const result = await controller.create(createDto)

    expect(mockUseCaseCreateHandle).toHaveBeenCalledTimes(1)
    expect(mockUseCaseCreateHandle).toHaveBeenCalledWith(createDto)
    expect(result).toEqual(user)
  })

  it('signIn method test', async () => {
    const signInDto: SignInDto = {
        email: '',
        password: ''
    };

    const jwt: JwtDto = {
        access_token: ""
    };

    mockUseCaseSignInHandle.mockResolvedValue(jwt)

    const result = await controller.signIn(signInDto, mockJwtService, mockPacienteGateway)

    expect(mockUseCaseSignInHandle).toHaveBeenCalledTimes(1)
    expect(mockUseCaseSignInHandle).toHaveBeenCalledWith(signInDto)
    expect(result).toEqual(jwt)
  })


})
