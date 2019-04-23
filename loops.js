function forLoop(array) {
  for (let i = 0; i <=25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}`);
  }
  return array
}

/*
let countdown = n
function whileLoop(n > 0); {
  while (countdown > 0) {
    console.log("Done");
  }
}

var i= 0;
function doWhileLoop(num); {
  i = i + 1;
  return i;
}
  do {
    console.log("I run once regardless.");
  }
  while (incrementVariable() < 1);
}


var i= 0;
function doWhileLoop(num); {
  i = i + 1;
  return i;
}
  do {
    console.log("I run once regardless.");
  }
  while (incrementVariable() < 10);
}
*/
