import Repository from '@/core/domain/repositories/ipaciente.repository'
import UsuarioRepository from '@/core/domain/repositories/iusuario.repository'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'
import { PatientGateway } from '@/core/operation/gateway/patient.gateway'
import Usuario from '@/core/domain/entities/usuario'
import Cpf from '@/core/domain/value-object/Cpf'

describe('Test UsuarioGateway class', () => {
  let gateway:PatientGateway
  let mockUserRepository:jest.Mocked<UsuarioRepository>
  let mockPatientRepository:jest.Mocked<Repository>
  beforeEach(() => {

    mockPatientRepository = {
        create: jest.fn(),
        findById: jest.fn(),
        findByUserId: jest.fn(),
    }

    mockUserRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
      findByCpf: jest.fn(),
      save: jest.fn()
    }

    gateway = new PatientGateway(new UsuarioGateway(mockUserRepository), new PacienteGateway(mockPatientRepository))
  })

  it('Testing class constructor', () => {
    expect(gateway).toBeInstanceOf(PatientGateway)
  })

  it('Test findByCpf method', async () => {
    const cpf = new Cpf('905.489.213-77')
    const user = await Usuario.create('Test Name', 'test@test.com', '905.489.213-77', '123456789')

    mockUserRepository.findByCpf.mockResolvedValue(user)

    const result = await gateway.findByCpf(cpf)

    expect(mockUserRepository.findByCpf).toHaveBeenCalledWith(cpf)
    expect(mockUserRepository.findByCpf).toHaveBeenCalledTimes(1)
    expect(result).toEqual(user)
  })

})
