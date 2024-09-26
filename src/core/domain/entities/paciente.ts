export default class Paciente {
  public constructor (
        public readonly id: number | undefined,
        public userId: number
    ) {}

  static create (
        userId: number
    ): Paciente {
    return new Paciente(undefined, userId)
  }

  getId (): number {
    return this.id ?? 0
  }
}
