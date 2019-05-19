function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  
  return array;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num = num - 1;
  }
  
  return 'done';
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= num);
}

var doint = 0;
 
function incrementVariable() {
  doint = doint + 1;
  return doint;
}
