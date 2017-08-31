function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[array.length - 1];
  let leftOfPivot = []
  let rightOfPivot = []

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftOfPivot.push(array[i])
    } else {
      rightOfPivot.push(array[i])
    }
  }

  return [...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot)]
}


module.exports = quickSort;
