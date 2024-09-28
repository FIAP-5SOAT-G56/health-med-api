import { Patient } from '@/infra/persistence/typeorm/entities/patient'
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

  const patient = new Patient({
    id: 1,
    userId: 1,
    user: user
  })

  expect(patient.id).toEqual(1)
  expect(patient.userId).toEqual(1)
  expect(patient.user).toEqual(user)
})
