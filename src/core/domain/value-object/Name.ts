export default class Name {
  private value: string

  constructor (name: string) {
    if (name.split(' ').length < 2) throw new Error('Invalid name')
    this.value = name
  }

  getValue (): string {
    return this.value
  }

  public toString (): string {
    return this.getValue()
  }
}
