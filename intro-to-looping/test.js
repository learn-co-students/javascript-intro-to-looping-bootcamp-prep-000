var gifts = ["teddy bear", "drone", "doll"]

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`)
}

console.log(wrapGift(gifts[0]))
console.log(wrapGift(gifts[1]))
console.log(wrapGift(gifts[2]))

for([initialization]; [condition]; [iteration]) {
  [loopBody];
} 

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


