import BusinessException from '@/core/domain/errors/business-exception'

export default class Email {
  constructor (private value: string, mustValidate = true) {
    if (mustValidate && (!value || !this.validate())) {
      throw new BusinessException('Invalid Email')
    }
  }

  /**
   * toStrings
   */
  public toString (): string {
    return this.value
  }

  private validate (): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return regexEmail.test(this.value)
  }
}
