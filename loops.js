/*for ([initialization]; [condition];
[iteration]) {
  [loopBody];
}*/

for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + "time")
}

//the above prints Hello World the n time
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
        array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}

let countdown = 100;

while (countdown > 0) {
  console.log(--countdown);
}

function whileLoop(number) {
  while (number > 0) {
    console.log(`${number}`)
    number--;
  }
  return "done"
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  i = 0;
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < num);
}
