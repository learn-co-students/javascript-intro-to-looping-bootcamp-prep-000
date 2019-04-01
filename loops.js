var gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5;
}
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return 'done'
}

function doWhileLoop(integer) {
  var i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
    } 
  
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < integer) {
     
  }
}