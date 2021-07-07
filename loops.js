// for ([initialization]; [condition]; [iteration]) {
//   [loopBody];
// }

// for (var i = 1; i < 100; i++) {
//   console.log("Hello World the " + i + " time");
// }
// use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size)

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
var myFavoriteWord = "cats"
forLoop(myFavoriteWord)



function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}




let array = [1, 2, 3, 4, 5, 6, 7, 8]
function doWhileLoop(array) {

  var i = 0;
  function incrementVariable() {
    i = i + 1;
  }

do {
   console.log('array.length = ' + array.length + ' and i = ' + i)
   array = array.slice(1)
   incrementVariable()
} while (array.length > 0 && i < 5)
return array
}