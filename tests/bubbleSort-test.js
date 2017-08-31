const { assert, expect, should } = require ('chai');
const bubbleSort = require('../lib/bubbleSort');

describe('bubbleSort', () => {
  console.log(bubbleSort);

  it('should be a function', () => {
    assert.isFunction(bubbleSort);

  });

  it('should sort the array', () => {
    let test = [4,3,2,1]
    assert.deepEqual(bubbleSort(test), [1,2,3,4])
  })


});
