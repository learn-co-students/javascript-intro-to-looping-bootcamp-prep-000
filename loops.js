var forLoop = array => {
  for (let counter = 0; counter < 25; counter++) {
    // if (counter === 1) {
    //   array.push("I am 1 strange loop.")
    // } else {
    //   array.push(`I am ${counter} strange loops.`)
    // }
    array.push(`I am ${counter} strange loop${counter === 1 ? '' : 's'}.`)
  }
  return array
}

var whileLoop = number => {
  while (number) {
    console.log(number)
    number -= 1
  }
  return 'done'
}

let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

var doWhileLoop = number => {
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= number)
} 
