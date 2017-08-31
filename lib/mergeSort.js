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







































// function sortyMcSortFace(array) {
//   if(array.length < 2) {
//     return array;
//   }
//
//   let middlePoint = array.length / 2;
//   let leftSide = array.slice(0, middlePoint);
//   let rightSide = array.slice(middlePoint, array.length);
//
//   return mergeSortedArrays(sortyMcSortFace(leftSide), sortyMcSortFace(rightSide))
// }
//
// function mergeSortedArrays(leftSide, rightSide) {
//   let ghost = [];
//
//   while (leftSide.length && rightSide.length) {
//     if (leftSide[0] < rightSide[0]) {
//       ghost.push(leftSide.shift());
//     }else {
//       ghost.push(rightSide.shift());
//     }
//   }
//
//   while (leftSide.length) {
//     ghost.push(leftSide.shift());
//   }
//
//   while (rightSide.length) {
//     ghost.push(rightSide.shift());
//   }
//
//   return ghost;
// }


// function sortyMcSortFace(array) {
//   debugger;
//   if (array.length < 2) {
//     return array;
//   }
//
//   let middlePoint = parseInt(array.length / 2);
//   let leftSide = array.slice(0, middlePoint);
//   let rightSide = array.slice(middlePoint, array.length);
//
//   return mergeSortedArrays(sortyMcSortFace(leftSide), sortyMcSortFace(rightSide))
//
// }
//
// function mergeSortedArrays(leftSide, rightSide) {
//   debugger;
//   let ghost = [];
//
//   while (leftSide.length && rightSide.length) {
//     if (leftSide[0] < rightSide[0]) {
//       ghost.push(leftSide.shift())
//     }else {
//       ghost.push(rightSide.shift())
//     }
//   }
//
//   while (leftSide.length) {
//     ghost.push(leftSide.shift())
//   }
//
//   while (rightSide.length) {
//     ghost.push(rightSide.shift())
//   }
//
//   return ghost;
// }


// function sortyMcSortFace(array) {
//   if(array.length < 2) {
//     return array;
//   }
//
//   let middlePoint = parseInt(array.length / 2);
//   let leftOfPivot = array.slice(0, middlePoint);
//   let rightOfPivot = array.slice(middlePoint, array.length);
//
//   return mergeSortedArrays(sortyMcSortFace(leftOfPivot), sortyMcSortFace(rightOfPivot));
// }
//
//
// function mergeSortedArrays(leftOfPivot, rightOfPivot) {
//   let ghost = [];
//
//   while (leftOfPivot.length && rightOfPivot.length) {
//     if (leftOfPivot[0] < rightOfPivot[0]) {
//       ghost.push(leftOfPivot.shift());
//     }else {
//       ghost.push(rightOfPivot.shift());
//     }
//   }
//
//   while (leftOfPivot.length) {
//     ghost.push(leftOfPivot.shift());
//   }
//
//   while (rightOfPivot.length) {
//     ghost.push(rightOfPivot.shift());
//   }
//
//   return ghost;
// }


// function sortyMcSortFace(array) {
//   if(array.length < 2) {
//     return array;
//   }
//
//   let middlePoint = parseInt(array.length / 2);
//   let leftOfPivot = array.slice(0, middlePoint);
//   let rightOfPivot = array.slice(middlePoint, array.length);
//
//   return mergeSortedArrays(sortyMcSortFace(leftOfPivot), sortyMcSortFace(rightOfPivot))
// }
//
//
//
// function mergeSortedArrays(leftOfPivot, rightOfPivot) {
//   let ghost = [];
//
//   while(leftOfPivot.length && rightOfPivot.length) {
//     if(leftOfPivot[0] < rightOfPivot[0]) {
//       ghost.push(leftOfPivot.shift());
//     }else {
//       ghost.push(rightOfPivot.shift());
//     }
//   }
//
//   while(leftOfPivot.length) {
//     ghost.push(leftOfPivot.shift());
//   }
//
//   while(rightOfPivot.length) {
//     ghost.push(rightOfPivot.shift());
//   }
//
//   return ghost;
// }


// function sortyMcSortFace(array) {
//   if(array.length < 2) {
//     return array;
//   }
//
//   let middlePoint = parseInt(array.length / 2);
//   let leftSide = array.slice(0, middlePoint);
//   let rightSide = array.slice( middlePoint, array.length);
//
//   return mergeSortedArrays(sortyMcSortFace(leftSide), sortyMcSortFace(rightSide));
// }
//
//
// function mergeSortedArrays(leftSide, rightSide) {
//   let ghost = [];
//
//   while(leftSide.length && rightSide.length) {
//     if(leftSide[0] <= rightSide[0]) {
//       ghost.push(leftSide.shift());
//     }else {
//       ghost.push(rightSide.shift())
//     }
//   }
//
//   while(leftSide.length) {
//     ghost.push(leftSide.shift());
//   }
//
//   while(rightSide.length) {
//     ghost.push(rightSide.shift())
//   }
//
//   return ghost;
// }


// function sortyMcSortFace(array){
//   if (array.length < 2) {
//       return array;
//     }
//   let middlePoint = parseInt(array.length / 2);
//   let leftSide   = array.slice(0, middlePoint);
//   let rightSide  = array.slice(middlePoint, array.length);
//
//   return mergeSortedArrays(sortyMcSortFace(leftSide), sortyMcSortFace(rightSide));
// }
//
// function mergeSortedArrays(leftSide, rightSide){
//   let ghost = [];
//
//   while (leftSide.length && rightSide.length) {
//       if (leftSide[0] <= rightSide[0]) {
//           ghost.push(leftSide.shift());
//       } else {
//           ghost.push(rightSide.shift());
//       }
//   }
//
//   while (leftSide.length)
//       ghost.push(leftSide.shift());
//
//   while (rightSide.length)
//       ghost.push(rightSide.shift());
//
//   return ghost;
// }




module.exports = sortyMcSortFace, mergeSortedArrays;
