import Name from '@/core/domain/value-object/Name'

describe('Test of Name Value-Object class', () => {
  it('Test constructor class', () => {
    const name = new Name('Name Test')
    expect(name).toBeInstanceOf(Name)
  })

  it('Test getValue method', () => {
    const name = new Name('Name Test')
    expect(name.getValue()).toBe('Name Test')
  })

  it('Test toString method', () => {
    const name = new Name('Name Test')
    expect(name.toString()).toEqual('Name Test')
  })
})
