/*Adding an Element
JavaScript allows us to push elements onto the end of an array:
1.	var superheroines = ["catwoman", "she-hulk", "mystique"];
2.	 
3.	superheroines.push("wonder woman");
4.	// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"] */


// loops
//    forLoop(array)
//      1) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times
//    whileLoop(n)
/*gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gifts){
    for (let i=0;i<gifts.length; i++){
        console.log('Wrapped ${gifts[i]} and added bow!');
    }
} */

array=["hi","hello"];

function forLoop(array){
  for (let i=0; i < 25; i++){
    if (i===1){
    array.push(`I am 1 strange loop.`)
    } else if (i != 1) {
    array.push(`I am ${i} strange loops.`)
   }
  }
  return array
}

//  2) loops
//       whileLoop(n)
//         counts down from n to 0:
//     ReferenceError: whileLoop is not defined
//      at Context.it (test/loops-test.js:49:7)
function whileLoop(n){
  while (n>0){
    console.log(--n)
  }
  return "done"
}

//  3) loops
//       doWhileLoop(num)
//         console logs "I run once regardless." 1 time when passed an integer of0 as a parameter.:
//     ReferenceError: doWhileLoop is not defined
//      at Context.it (test/loops-test.js:59:9)

function doWhileLoop(num) {
  let i=0;
 function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}

