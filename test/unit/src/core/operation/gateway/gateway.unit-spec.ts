import Repository from '@/core/domain/repositories/imedico.repository'
import UsuarioRepository from '@/core/domain/repositories/iusuario.repository'
import { Gateway } from '@/core/operation/gateway/gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'

describe('Test UsuarioGateway class', () => {
  let gateway:Gateway
  let mockUserRepository:jest.Mocked<UsuarioRepository>
  let mockDocRepository:jest.Mocked<Repository>
  beforeEach(() => {
    mockDocRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByUserId: jest.fn(),
      findByCrm: jest.fn()
    }

    mockUserRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
      findByCpf: jest.fn(),
      save: jest.fn()
    }

    gateway = new Gateway(new UsuarioGateway(mockUserRepository), new MedicoGateway(mockDocRepository))
  })

  it('Testing class constructor', () => {
    expect(gateway).toBeInstanceOf(Gateway)
  })
})
