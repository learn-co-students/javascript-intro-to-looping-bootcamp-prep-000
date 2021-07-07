/*
var gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

for(var i = 1; i < 100; i++) {
  console.log("Hello Word the " + i + "time");
}
*/

function forLoop (array) {
  for (let i = 0; i < 25; i++) {
   if(i === 1) {
     array.push(`I am 1 strange loop.`)
} else {
      array.push(`I am ${i} strange loops.`)

    }
  }
  
  return array
} 

function maybeTrue() {
  return Math.random() >= 0.5;
}

while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}

let countdown = 100; 

while(countdown > 0) {
  console.log(--countdown);
}

function whileLoop (number) {
  while (number > 0 ) {
    console.log(--number)
  }
  return "done"
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}

do {
  console.log("doo-bee-doo");
  incrementVariable();
} while (i < 5);

function doWhileLoop (array) {
  do {
    array.pop(array.length > 0 && incrementVariable()) 
} while (array > 0);

return array
}

