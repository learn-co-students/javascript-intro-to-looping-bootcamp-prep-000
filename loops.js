// let gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//   console.log(`wrapped ${gift} and added a bow!`);
// }

// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for (let num = 1; num < 6; num += 1) {
//   console.log(num)
// }

// for (let i = 1; i < 100; i++) {
//   console.log("hello world the " + i + "time");
// }

// let gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gifts) {
// for (let i = 0; i < gifts.length; i++) {
//   console.log(`wrapped ${gifts[i]} and added a bow!`);
//   }
// }

// wrapGift(gifts)

function forLoop(array){
for (i = 0; i < 25; i++) {
if(i === 1) {
array.push('I am 1 strange loop.')
} else {
array.push(`I am ${i} strange loops.`)
}
}
return array;
}

function whileLoop (number){
  let countdown = number;
    while (countdown > 0) {
  console.log(--countdown)
}
      return 'done'
}


function doWhileLoop(num) {
  var i = 1;

  function incrementVariable() {
    i = i + 1
    return i;
  }
  do {
    console.log(i, "I run once regardless.");
  }
  while (incrementVariable() <= num);
}

doWhileLoop(num);