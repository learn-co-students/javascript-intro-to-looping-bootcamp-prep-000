function forLoop(strangeLoop) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      strangeLoop.push("I am 1 strange loop.")
    } else {
      strangeLoop.push(`I am ${i} strange loops.`)
    }
  }
  return strangeLoop;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done";
}

let i = 0; 

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= num);
}
