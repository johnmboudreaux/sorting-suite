//create function to create random arrays of
//numbers and letters
function randomArray(count) {
  let numbers = [];
  let max = 1000;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);

    numbers.push(randomNumber);
  }

  return numbers;
}


module.exports = randomArray;
