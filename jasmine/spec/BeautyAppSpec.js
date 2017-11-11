describe('makeASelection', function () {
  it('confirms if the user chose skin care', function () {
    expect(makeASelection(1)).toEqual('You have chosen skincare.')
  })
  it('confirms if the user chose nail art', function () {
    expect(makeASelection(2)).toEqual('You have chosen nail art.')
  })
  it('confirms if the user chose makeup', function () {
    expect(makeASelection(3)).toEqual('You have chosen makeup.')
  })
  it('confirms if the user chose an invalid value', function () {
    expect(makeASelection(4)).toEqual('You did not pick an appropriate value.')
  })
})
