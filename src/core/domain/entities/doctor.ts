
export default class Medico {
  public constructor (
    public readonly id: number | undefined,
    public userId: number,
    public crm: string,
  ) {}

  static create (
    userId: number,
    crm: string,
  ): Medico {
    return new Medico(undefined, userId, crm)
  }

}
