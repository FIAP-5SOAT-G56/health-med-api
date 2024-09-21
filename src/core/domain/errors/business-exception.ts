export default class BusinessException extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'BusinessException'
  }

  public getMessages (): string[] {
    return [this.message]
  }
}
