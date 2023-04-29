import totalReducer, { getTotal, plusNumber, minusNumber } from './total.slice'

describe('totalSlice reducer', () => {
  it('should return the initial state', () => {
    expect(totalReducer(undefined, {})).toEqual({
      total: 0
    })
  })

  it('should handle getTotal', () => {
    const actual = totalReducer(undefined, getTotal(10))
    expect(actual.total).toEqual(10)
  })

  it('should handle plusNumber', () => {
    const actual = totalReducer({total: 2}, plusNumber(5))
    expect(actual.total).toEqual(7)
  })

  it('should handle minusNumber', () => {
    const actual = totalReducer({total: 5}, minusNumber(3))
    expect(actual.total).toEqual(2)
  })
})
