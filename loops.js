let gifts= ["teddy bear", "drone", "doll"]
function wrapGift(gift) {
  for( let i=0; i<gifts.length; i++) {
  console.log(`Wrapped ${gift} and added a bow!`);
  }
}
function forLoop(array){
  for( let i=0; i<25; i++){
  if (i===1) array.push("I am 1 strange loop.");
  else array.push(`I am ${i} strange loops.`)
   }
   return array
}

for (let num = 1; num < 6; num += 1) {
  console.log(num)
}

let num = 1
 
while (num < 6) {
  console.log(num)
  num += 1
}

function whileLoop(n){
  let countdown= n ;
  while (countdown > 0) {
    console.log(countdown-=1)
     }
  return ("done")
}
let i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num){
  do { console.log("I run once regardless.")}
  while (incrementVariable()<= num);
}