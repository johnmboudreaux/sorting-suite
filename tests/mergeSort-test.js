const { assert, expect, should } = require ('chai');
const sortyMcSortFace = require ('../lib/mergeSort')
let randomArray = require('../lib/index')


describe('sortyMcSortFace', () => {

  it('should be a function', () => {

    assert.isFunction(sortyMcSortFace);

  });

  it('should sort an array numerically', () => {

    let mergeSort = sortyMcSortFace([1, 4, 2, 5, 3]);

    expect(mergeSort).to.deep.equal([1, 2, 3, 4, 5]);

    console.log(mergeSort);
  });

  it('should sort an array of letters', ()=> {
    let mergeSort = sortyMcSortFace(['E', 'A', 'D', 'C', 'B']);

    expect(mergeSort).to.deep.equal(['A', 'B', 'C', 'D', 'E']);

    console.log(mergeSort);
  });

  it('should sort auto generated random array of 10 nums', ()=> {
    let newArray = randomArray(10);

    console.log(newArray);

    let mergeSort = sortyMcSortFace(newArray)

    console.log(mergeSort);
  });

  it('should sort an array of 10,000 numbers', ()=> {
    let array = [];

    for (var i = 0; i < 10000; i++) {
      array.push(Math.floor(Math.random() * (100 - 1) + 1));
    }

    assert.deepEqual(sortyMcSortFace(array), array.sort((a, b) => a - b));
  });


});
