var gifts = ["teddy bear", "drone", "doll"]

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`)
}

console.log(wrapGift(gifts[0]))
console.log(wrapGift(gifts[1]))
console.log(wrapGift(gifts[2]))

<<<<<<< HEAD
for([initialization]; [condition]; [iteration]) {
  [loopBody];
} 
=======
// for([initialization]; [condition]; [iteration]) {
//   [loopBody];
// } 
>>>>>>> 78e05736134a25bd5b96cda5ae99cb09f3fd4239

// i is set equal to 1
// as long as i is less than 100 execute the 
// code in the loopBody
// - which is print ("Hello World") 
  // [initialization] ; [condition] ; [iteration]
for(var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time")
}

// The above prints:
// Hello World the 1 time
// Hello World the 2 time
// Hello World the 3 time

<<<<<<< HEAD
=======
// while([condition]) {
//   [loopBody]
// }

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random
  // number between 0 (inclusive) and 1 (exclusive)
}

// run until `mayBeTrue() ` returns `false`
// (so the body of the loop might_never_run!)

while (maybeTrue()) {
  console.log("And I ran; I ran so far away!")
}

let countdown = 100;

while (countdown > 0) {
  console.log(--countdown)
}

// do {
//   [loopBody]
// } while([condition])

var i = 0;

function incrementVariable() {
  i = i + 1 
}

do {
  console.log("doo-bee-doo-bee-doo")
  incrementVariable()
} while(i < 5)
>>>>>>> 78e05736134a25bd5b96cda5ae99cb09f3fd4239

