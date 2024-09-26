
type Profiles = {
  [key: string]: string[];
}
export class UserEntity {
  id: number
  email: string
  profiles: Profiles

  getKeyPatient (): number {
    return this.profiles.PACIENTE[0] ? parseInt(this.profiles.PACIENTE[0]) : 0
  }
}
