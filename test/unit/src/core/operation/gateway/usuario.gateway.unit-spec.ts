import Usuario from '@/core/domain/entities/usuario'
import Repository from '@/core/domain/repositories/iusuario.repository'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'
import Cpf from '@/core/domain/value-object/Cpf'
import Email from '@/core/domain/value-object/email'

describe('Test UsuarioGateway class', () => {
  let gateway:UsuarioGateway
  let mockRepository:jest.Mocked<Repository>

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
      findByCpf: jest.fn(),
      save: jest.fn()
    }

    gateway = new UsuarioGateway(mockRepository)
  })

  it('Testing class constructor', () => {
    expect(gateway).toBeInstanceOf(UsuarioGateway)
  })

  it('Test create method', async () => {

    const user = await Usuario.create('Test Name', 'test@test.com', '905.489.213-77', '123456789')

    mockRepository.create.mockResolvedValue(user)

    const result = await gateway.create(user)

    expect(mockRepository.create).toHaveBeenCalledWith(user)
    expect(mockRepository.create).toHaveBeenCalledTimes(1)
    expect(result).toEqual(user)
  })

  it('Test save method', async () => {
    const user = await Usuario.create('Test Name', 'test@test.com', '905.489.213-77', '123456789')
    await gateway.save(user)
    expect(mockRepository.save).toHaveBeenCalledWith(user)
    expect(mockRepository.save).toHaveBeenCalledTimes(1)
  })

  it('Test findByEmail method', async () => {

    const email = new Email('test@test.com');
    const user = await Usuario.create('Test Name', 'test@test.com', '905.489.213-77', '123456789')

    mockRepository.findByEmail.mockResolvedValue(user)

    const result = await gateway.findByEmail(email)

    expect(mockRepository.findByEmail).toHaveBeenCalledWith(email)
    expect(mockRepository.findByEmail).toHaveBeenCalledTimes(1)
    expect(result).toEqual(user)
  })

  it('Test findByCpf method', async () => {

    const cpf = new Cpf('57965568438')
    const user = await Usuario.create('Test Name', 'test@test.com', '57965568438', '123456789')

    mockRepository.findByCpf.mockResolvedValue(user)

    const result = await gateway.findByCpf(cpf)

    expect(mockRepository.findByCpf).toHaveBeenCalledWith(cpf)
    expect(mockRepository.findByCpf).toHaveBeenCalledTimes(1)
    expect(result).toEqual(user)
  })



  it('Test findById method', async () => {
    const user = await Usuario.create('Test Name', 'test@test.com', '905.489.213-77', '123456789')

    mockRepository.findById.mockResolvedValue(user)

    const result = await gateway.findById(1)

    expect(mockRepository.findById).toHaveBeenCalledWith(1)
    expect(mockRepository.findById).toHaveBeenCalledTimes(1)
    expect(result).toEqual(user)
  })

})
