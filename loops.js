var gifts = ['teddy bear', 'drone', 'doll']

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`)
}

for (i = 0; i < 3; i = i + 1) {
  wrapGift(gifts[i]);
}

let j = 10
 while  (j > 3) {
  console.log(`${j}`);
  j = j - 1
}

i = 0;
do {
  wrapGift(gifts[i]);
  i = i + 1
} while  (i < 3) 

function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

function doWhileLoop(array) {
  return Math.random() >= 0.8
}
array = gifts; 
do {
  array.pop();
  console.log(array);
} while (array.length > 0 && maybeTrue());

function forLoop(array, i) {
  array.push("I am " + i + " strange loop")
}

for (i = 1; i<25 ; i++) {
  forLoop(array, i);
}
console.log(array);

function whileLoop(countdown) {
  while (countdown>0) {
    console.log(countdown);
    countdown = countdown - 1;
      if (countdown < 1) {console.log("done")
      }
  }
}
i = Math.random() * 20;
console.log(i);
// console.log((i));
whileLoop(Math.random() * 20);