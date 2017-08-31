function sortyMcSortFace(array) {
  if (array.length < 2) {
    return array;
  }

  let middlePoint = parseInt(array.length / 2);
  let leftSide = array.slice(0, middlePoint);
  let rightSide = array.slice(middlePoint, array.length);

  return mergeSortedArrays(sortyMcSortFace(leftSide), sortyMcSortFace(rightSide))
}


function mergeSortedArrays(leftSide, rightSide) {
  let ghost = [];

  while (leftSide.length && rightSide.length) {
    if (leftSide[0] < rightSide[0]) {
      ghost.push(leftSide.shift());
    } else {
      ghost.push(rightSide.shift());
    }
  }

  while (leftSide.length) {
    ghost.push(leftSide.shift());
  }

  while (rightSide.length) {
    ghost.push(rightSide.shift());
  }

  return ghost;
}


module.exports = sortyMcSortFace, mergeSortedArrays;
