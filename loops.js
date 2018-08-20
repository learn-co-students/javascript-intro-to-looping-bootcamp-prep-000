// Introduction
var gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

// The for Loop
// syntax
// use this every time you know how many times you want the loop to run (e.g. array of known size)
for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}

for (var i = 1; i < 10; i++) {
  console.log("Hello World the " + i + " time");
}

// TODO
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

// The while Loop
// syntax
// use this when we don't know how many times a loop needs to run - the condition is dependent on a dynamic function/return value
while ([condition]) {
  [loopBody];
}

function maybeTrue() {
  return Math.random() >= 0.5; // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}

let countdown = 100;

while (countdown > 0) {
  console.log(--countdown);
}

// TODO
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

// The Do-While Loop
// syntax
// similar to while, executed at least once before condition is tested - this is rare
do {
  [loopBody];
} while ([condition]);

var i = 0;

function incrementVariable() {
  i = i + 1;
}

do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 5);
// couldn't be sure this would be run with while loop using maybeTrue(); can be sure the body will run with do

// TODO
function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());
  return array;
}