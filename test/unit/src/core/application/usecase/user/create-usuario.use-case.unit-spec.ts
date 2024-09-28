import UserCreateDto from '@/core/domain/dto/input/user-create.dto'
import Usuario from '@/core/domain/entities/usuario'
import Cpf from '@/core/domain/value-object/Cpf'
import Email from '@/core/domain/value-object/email'
import { Gateway } from '@/core/operation/gateway/gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
import IMedicoRepository from '@/core/domain/repositories/imedico.repository'
import IUsuarioRepository from '@/core/domain/repositories/iusuario.repository'
import CreateUsuarioUseCase from '@/core/application/usecase/user/create-usuario.use-case'
import BusinessException from '@/core/domain/errors/business-exception'

describe('CreateUsuarioUseCase Test Case', () => {

    let gateway:Gateway;
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
  

    beforeEach(() => {

        jest.mock('@/core/operation/gateway/usuario.gateway')
        jest.mock('@/core/operation/gateway/medico.gateway')
    
        mockUsuarioGatewayfindById = jest.fn()
        mockUsuarioGatewaycreate = jest.fn()
        mockUsuarioGatewayfindByEmail = jest.fn()
        mockUsuarioGatewayfindByCpf = jest.fn()
        mockUsuarioGatewaysave = jest.fn()

        mockMedicofindByCrm = jest.fn()
        mockMedicofindByUserId = jest.fn()
        mockMedicocreate = jest.fn()
        mockMedicofindById = jest.fn()
    
        UsuarioGateway.prototype.create = mockUsuarioGatewaycreate
        UsuarioGateway.prototype.findByCpf = mockUsuarioGatewayfindByCpf
        UsuarioGateway.prototype.findByEmail = mockUsuarioGatewayfindByEmail
        UsuarioGateway.prototype.findById = mockUsuarioGatewayfindById
        UsuarioGateway.prototype.save = mockUsuarioGatewaysave

        MedicoGateway.prototype.create= mockMedicocreate
        MedicoGateway.prototype.findByCrm = mockMedicofindByCrm
        MedicoGateway.prototype.findByUserId = mockMedicofindByUserId
        MedicoGateway.prototype.findById = mockMedicofindById
    
        gateway = new Gateway(new UsuarioGateway(mockUsuarioRepository), new MedicoGateway(mockMedicoRepository))
      })

    test('CreateUsuarioUseCase constructor', async () => {
        let useCase = new CreateUsuarioUseCase(gateway);

        let email = new Email("test@test.com")
        let cpf = new Cpf("905.489.213-77")

        let dto:UserCreateDto = {
            name: "Test Name",
            email: "test@test.com",
            cpf: "905.489.213-77",
            password: "123456789"
        }

        const usuarioCriado = await Usuario.create(
            "Test Name",
            "test@test.com",
            "905.489.213-77",
            "123456789"
        )

        mockUsuarioGatewayfindByEmail.mockResolvedValue(undefined)
        mockUsuarioGatewayfindByCpf.mockResolvedValue(undefined)
        mockUsuarioGatewaycreate.mockResolvedValue(usuarioCriado)

        let result = await useCase.handle(dto);

        expect(mockUsuarioGatewayfindByEmail).toHaveBeenCalledWith(email)
        expect(mockUsuarioGatewayfindByEmail).toHaveBeenCalledTimes(1)

        expect(mockUsuarioGatewayfindByCpf).toHaveBeenCalledWith(cpf)
        expect(mockUsuarioGatewayfindByCpf).toHaveBeenCalledTimes(1)

        expect(mockUsuarioGatewaycreate).toHaveBeenCalledTimes(1)
        expect(result).toEqual(usuarioCriado)
        
  
    })

    test('CreateUsuarioUseCase User found by email', async () => {
        let useCase = new CreateUsuarioUseCase(gateway);

        let dto:UserCreateDto = {
            name: "Test Name",
            email: "test@test.com",
            cpf: "905.489.213-77",
            password: "123456789"
        }

        const usuarioCriado = await Usuario.create(
            "Test Name",
            "test@test.com",
            "905.489.213-77",
            "123456789"
        )

        mockUsuarioGatewayfindByEmail.mockResolvedValue(usuarioCriado)
        mockUsuarioGatewayfindByCpf.mockResolvedValue(usuarioCriado)
        mockUsuarioGatewaycreate.mockResolvedValue(usuarioCriado)

        await expect(async () => {
            await useCase.handle(dto);
        }).rejects.toThrow(new BusinessException('Usuario já existe'))
        
  
    })

    test('CreateUsuarioUseCase user found by Cpf', async () => {
        let useCase = new CreateUsuarioUseCase(gateway);

        let dto:UserCreateDto = {
            name: "Test Name",
            email: "test@test.com",
            cpf: "905.489.213-77",
            password: "123456789"
        }

        const usuarioCriado = await Usuario.create(
            "Test Name",
            "test@test.com",
            "905.489.213-77",
            "123456789"
        )

        mockUsuarioGatewayfindByEmail.mockResolvedValue(undefined)
        mockUsuarioGatewayfindByCpf.mockResolvedValue(usuarioCriado)
        mockUsuarioGatewaycreate.mockResolvedValue(usuarioCriado)

        await expect(async () => {
            await useCase.handle(dto);
        }).rejects.toThrow(new BusinessException('Usuario já existe'))
        
  
    })

})