const { assert, expect } = require ('chai');
const quickSort = require ('../lib/quickSort')


describe('QuickSort', () => {

  it('should be a function', () => {


    assert.isFunction(quickSort);

  });

  it('should sort an array numerically', () => {
    let qSort = quickSort([1, 4, 2, 5, 3]);

    expect(qSort).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort an array of letters', ()=> {
    let qSort = quickSort(['e', 'a', 'd', 'c', 'b']);

    expect(qSort).to.deep.equal(['a', 'b', 'c', 'd', 'e']);
  });

  it('should not unsort a sorted array', ()=> {
    assert.deepEqual(quickSort([1, 3, 4, 5, 6, 8]), [1, 3, 4, 5, 6, 8]);
  });

  it('should sort an array of 10,000 numbers', ()=> {
    let array = [];

    for (var i = 0; i < 10000; i++) {
      array.push(Math.floor(Math.random() * (100 - 1) + 1));
    }
    assert.deepEqual(quickSort(array), array.sort((a, b) => a - b));
  });


});
