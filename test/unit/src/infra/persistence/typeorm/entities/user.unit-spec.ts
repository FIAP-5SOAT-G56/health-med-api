import { User } from '@/infra/persistence/typeorm/entities/user'

test('User class should be initialized through constructor', () => {

  const user = new User({
    id: 1,
    name: "Test Name",
    cpf: "905.489.213-77",
    email: "test@test.com",
    password: "123456789",
    salt: "123456789"
  })

  expect(user.id).toEqual(1)
  expect(user.name).toEqual("Test Name")
  expect(user.cpf).toEqual("905.489.213-77")
  expect(user.email).toEqual("test@test.com")
  expect(user.password).toEqual("123456789")
  expect(user.salt).toEqual("123456789")
})
