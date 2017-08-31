const { assert, expect, should } = require ('chai');
const insertionSort = require ('../lib/insertionSort')


describe('insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);

  });

  it('should sort the array', () => {
    let test = [4,3,2,1]
    assert.deepEqual(insertionSort(test), [1,2,3,4])
  })


});
