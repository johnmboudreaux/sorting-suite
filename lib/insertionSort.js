function insertionSort(array) {
  //moving along the array from 0 to the end
  for (let i = 0; i < array.length; i++) {

    //starting at the index prior to i, moving toward index 0
    for (let j = i - 1; j >= 0; j--) {
      // console.log(array)
      // if the current index is smaller that the index prior, swap places
      if (array[j + 1] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1] ]
      }
    }
  }
  return array
}

insertionSort([4, 3, 2, 1])


module.exports = insertionSort;
