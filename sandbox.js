var gifts = ["ted", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`)
}

wrapGift(gifts[1]);

var i = 1;
for (i; i < 100; i = i+1) {
  console.log(i);
}

function forLoop(array) {
  var i = 0;
  for (i; i < 25; i = i+1) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
}

var i = 100;

while (i > 0) {
  i = i - 1;
  console.log(i);
}

function whileLoop(number) {
  while (number > 0) {
    number = number-1;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}