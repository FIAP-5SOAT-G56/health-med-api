import Password from '@/core/domain/value-object/Password'

describe('Test of Password Value-Object class', () => {
  it('Test constructor class', () => {
    const password = new Password('123456789', '12631212838127')
    expect(password).toBeInstanceOf(Password)
  })

  it('Test constructor class with validate as false', async () => {
    const password = await Password.create('123456789')
    expect(password).toBeInstanceOf(Password)
  })

  it('Test constructor class using invalid password', async () => {
    await expect(async () => {
        await Password.create('1234')
    }).rejects.toThrow(new Error('Invalid password'))
  })

  it('Test validate method', async () => {
    const password = await Password.create('123456789')
    expect(password.validate('123456789')).resolves;
  })
})
