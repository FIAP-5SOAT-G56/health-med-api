import SignInDto from '@/core/domain/dto/input/sign-in.dto'
import { JwtDto } from '@/core/domain/dto/output/jwt.dto'
import Usuario from '@/core/domain/entities/usuario'
import Medico from '@/core/domain/entities/doctor'
import Paciente from '@/core/domain/entities/paciente'
import Email from '@/core/domain/value-object/email'
import { Gateway } from '@/core/operation/gateway/gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
import IPacienteRepository from '@/core/domain/repositories/ipaciente.repository'
import IMedicoRepository from '@/core/domain/repositories/imedico.repository'
import IUsuarioRepository from '@/core/domain/repositories/iusuario.repository'
import SignInUseCase from '@/core/application/usecase/user/sign-in.use-case'
import BusinessException from '@/core/domain/errors/business-exception'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'
import { JwtService } from '@/core/domain/service/jtw-service'

describe('SignInUseCase Test Case', () => {

    let gateway:Gateway;
    let jwtService:jest.Mocked<JwtService>;
    let pacientGateway:PacienteGateway;

    let mockPacientRepository:jest.Mocked<IPacienteRepository>
    let mockMedicoRepository:jest.Mocked<IMedicoRepository>
    let mockUsuarioRepository:jest.Mocked<IUsuarioRepository>

    let mockUsuarioGatewayfindById:jest.Mock<any>
    let mockUsuarioGatewaycreate:jest.Mock<any>
    let mockUsuarioGatewayfindByEmail:jest.Mock<any>
    let mockUsuarioGatewayfindByCpf:jest.Mock<any>
    let mockUsuarioGatewaysave:jest.Mock<any>

    let mockMedicofindByCrm:jest.Mock<any>
    let mockMedicofindByUserId:jest.Mock<any>
    let mockMedicocreate:jest.Mock<any>
    let mockMedicofindById:jest.Mock<any>

    let mockPacientefindByUserId:jest.Mock<any>
    let mockPacientecreate:jest.Mock<any>
    let mockPacientefindById:jest.Mock<any>
  

    beforeEach(() => {

        jest.mock('@/core/operation/gateway/usuario.gateway')
        jest.mock('@/core/operation/gateway/medico.gateway')
        jest.mock('@/core/operation/gateway/paciente.gateway')
    
        mockUsuarioGatewayfindById = jest.fn()
        mockUsuarioGatewaycreate = jest.fn()
        mockUsuarioGatewayfindByEmail = jest.fn()
        mockUsuarioGatewayfindByCpf = jest.fn()
        mockUsuarioGatewaysave = jest.fn()

        mockMedicofindByCrm = jest.fn()
        mockMedicofindByUserId = jest.fn()
        mockMedicocreate = jest.fn()
        mockMedicofindById = jest.fn()

        mockPacientefindByUserId = jest.fn()
        mockPacientecreate = jest.fn()
        mockPacientefindById = jest.fn()
    
        UsuarioGateway.prototype.create = mockUsuarioGatewaycreate
        UsuarioGateway.prototype.findByCpf = mockUsuarioGatewayfindByCpf
        UsuarioGateway.prototype.findByEmail = mockUsuarioGatewayfindByEmail
        UsuarioGateway.prototype.findById = mockUsuarioGatewayfindById
        UsuarioGateway.prototype.save = mockUsuarioGatewaysave

        MedicoGateway.prototype.create= mockMedicocreate
        MedicoGateway.prototype.findByCrm = mockMedicofindByCrm
        MedicoGateway.prototype.findByUserId = mockMedicofindByUserId
        MedicoGateway.prototype.findById = mockMedicofindById

        PacienteGateway.prototype.create= mockPacientecreate
        PacienteGateway.prototype.findByUserId = mockPacientefindByUserId
        PacienteGateway.prototype.findById = mockPacientefindById

        jwtService = {
            signAsync: jest.fn()
        }
    
        gateway = new Gateway(new UsuarioGateway(mockUsuarioRepository), new MedicoGateway(mockMedicoRepository))
        pacientGateway = new PacienteGateway(mockPacientRepository)
      })

    test('SignInUseCase handler', async () => {
        let useCase = new SignInUseCase(gateway, pacientGateway, jwtService);

        let email = new Email("test@test.com")

        let dto:SignInDto = {
            email: "test@test.com",
            password: "123456789"
        }

        const token: JwtDto = {
            access_token: "token"
        }

        const usuarioCriado = await Usuario.create(
            "Test Name",
            "test@test.com",
            "905.489.213-77",
            "123456789"
        )

        const doctor = Medico.create(1, '12334567')

        const patient = Paciente.create(1)

        mockUsuarioGatewayfindByEmail.mockResolvedValue(usuarioCriado)
        mockMedicofindByUserId.mockResolvedValue(doctor)
        mockPacientefindByUserId.mockResolvedValue(patient)
        jwtService.signAsync.mockResolvedValue("token")

        let result = await useCase.handle(dto);

        expect(mockUsuarioGatewayfindByEmail).toHaveBeenCalledWith(email)
        expect(mockUsuarioGatewayfindByEmail).toHaveBeenCalledTimes(1)

        expect(mockMedicofindByUserId).toHaveBeenCalledWith(0)
        expect(mockMedicofindByUserId).toHaveBeenCalledTimes(1)

        expect(mockPacientefindByUserId).toHaveBeenCalledWith(0)
        expect(mockPacientefindByUserId).toHaveBeenCalledTimes(1)

        expect(jwtService.signAsync).toHaveBeenCalledTimes(1)

        expect(result).toEqual(token)
        
  
    })

    test('SignInUseCase first exception', async () => {
        let useCase = new SignInUseCase(gateway, pacientGateway, jwtService);

        let dto:SignInDto = {
            email: "test@test.com",
            password: "123456789"
        }

        mockUsuarioGatewayfindByEmail.mockResolvedValue(undefined)

        await expect(async () => {
            await useCase.handle(dto);
        }).rejects.toThrow(new BusinessException('Invalid'))
  
    })

})