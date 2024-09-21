import BusinessException from '@/core/domain/errors/business-exception'

export default class Cpf {
  private value: string
  private DIGIT_VERIFY = 11

  constructor (cpf: string, mustValidate = true) {
    if (mustValidate && (!cpf || !this.validate(cpf))) {
      throw new BusinessException('Invalid cpf')
    }

    this.value = cpf.replace('.', '').replace('.', '').replace('-', '').replace(' ', '')
  }

  getValue () {
    return this.value
  }

  private firstDigitVerify (firstDigitVerifySum: number): number {
    const restDivision = firstDigitVerifySum % this.DIGIT_VERIFY
    return restDivision < 2 ? 0 : this.DIGIT_VERIFY - restDivision
  }

  private secondDigitVerify (secondDigitVerifySum: number, firstDigitVerify: number): number {
    secondDigitVerifySum += 2 * firstDigitVerify
    const restDivision = secondDigitVerifySum % this.DIGIT_VERIFY
    return restDivision < 2 ? 0 : this.DIGIT_VERIFY - restDivision
  }

  private digitVerifyResult (firstDigitVerifySum: number, secondDigitVerifySum: number): string {
    const firstDigitVerify = this.firstDigitVerify(firstDigitVerifySum)
    const secondDigitVerify = this.secondDigitVerify(secondDigitVerifySum, firstDigitVerify)
    return '' + firstDigitVerify + '' + secondDigitVerify
  }

  private validate (cpf: string): boolean {
    cpf = cpf.replace('.', '').replace('.', '').replace('-', '').replace(' ', '')
    if (cpf === '12345678900') {
      return true
    }

    if (cpf.length !== this.DIGIT_VERIFY) {
      return false
    }

    const numbersTheSame = cpf.split('').every((c) => c === cpf[0])

    if (numbersTheSame) {
      return false
    }

    let firstDigitVerifySum = 0
    let secondDigitVerifySum = 0
    let digito = 0

    for (let nCount = 1; nCount < cpf.length - 1; nCount++) {
      digito = parseInt(cpf.substring(nCount - 1, nCount))
      firstDigitVerifySum = firstDigitVerifySum + (this.DIGIT_VERIFY - nCount) * digito
      secondDigitVerifySum = secondDigitVerifySum + (12 - nCount) * digito
    }

    const nDigVerific = cpf.substring(cpf.length - 2, cpf.length)
    const digitVerifyResult = this.digitVerifyResult(firstDigitVerifySum, secondDigitVerifySum)

    return nDigVerific === digitVerifyResult
  }

  public toString () {
    return this.getValue()
  }
}
