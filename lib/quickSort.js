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



































// function quickSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//
//   let pivot = array[array.length - 1];
//   let leftOfPivot = [];
//   let rightOfPivot = [];
//
//   for (var i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       leftOfPivot.push(array[i])
//     } else {
//       rightOfPivot.push(array[i])
//     }
//   }
//
//   return [...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot)]
// }


























// function quickSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//
//   let pivot = array[array.length - 1];
//   let leftOfPivot = [];
//   let rightOfPivot = [];
//
//   for (var i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       leftOfPivot.push(array[i])
//     }else {
//       rightOfPivot.push(array[i])
//     }
//   }
//
//   return [...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot)]
//}


// function quickSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//
//   let pivot = array[array.length - 1];
//   let leftOfPivot = [];
//   let rightOfPivot = [];
//
//   for (var i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       leftOfPivot.push(array[i]);
//     }else {
//       rightOfPivot.push(array[i]);
//     }
//   }
//
//   return [...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot)]
// }


// function quickSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//
//   let pivot = array[array.length - 1];
//   let leftOfPivot = [];
//   let rightOfPivot = [];
//
//   for (var i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       leftOfPivot.push(array[i])
//     }else {
//       rightOfPivot.push(array[i])
//     }
//   }
//
//   return [...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot)]
// }


// function quickSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//
//   let pivot = array[array.length - 1];
//   let leftOfPivot = [];
//   let rightOfPivot = [];
//
//   for (var i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       leftOfPivot.push(array[i]);
//     }else {
//       rightOfPivot.push(array[i]);
//     }
//   }
//
//   return [...quickSort(leftOfPivot), pivot,  ...quickSort(rightOfPivot)];
// }


// function quickSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//
//   let pivot = array[array.length - 1];
//   let leftOfPivot = [];
//   let rightOfPivot = [];
//
//
//   for (var i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       leftOfPivot.push(array[i]);
//     }else {
//       rightOfPivot.push(array[i]);
//     }
//   }
//
//   return [...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot)];
// }


// let array = require('./index.js')
//
// function quickSort(array) {
//   if(array.length < 2) {
//     return array;
//   }
//
//   let pivot  = array[array.length - 1];
//   let leftOfPivot = [];
//   let rightOfPivot = [];
//
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot) {
//       leftOfPivot.push(array[i]);
//     }else {
//       rightOfPivot.push(array[i]);
//     }
//   }
//
//   return [ ...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot) ];
// }


//
// function quickSort(array) {
//   if (array.length < 2) return array;
//
//   var pivot = array[array.length - 1];
//   var leftOfPivot = [];
//   var rightOfPivot = [];
//
//   for ( var i = 0; i < array.length - 1; i++) {
//     if (array[i] <= pivot) {
//       leftOfPivot.push(array[i])
//     }
//     else rightOfPivot.push(array[i])
//   }
//
//
//     var result = [...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot)]
// 	return result;
//
// }





module.exports = quickSort;
