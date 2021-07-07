function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }

  return array
}


function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }

  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}



// var array = []
// function forLoop(array){
// 	for (let i = 0; i<25;i++){
//     if (i===1){
// 		array[i] = `I am 1 strange loop.`
// 	} else if (i===0) {
//      array[i] = `I am ${i} strange loop.`
//   }
//   else {
// 		array[i] = `I am ${i} strange loops.`
//     // array[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`
// 	}
// 	// array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
// }
// return array
// }
//
// //loops whileLoop(n) counts down from n to 0:
// function whileLoop(n){
//   x = 'done'
//   while(n > -1){
//     if (n == 0){
// 			console.log(x)
//       return console.log(x)
//     } else{
//       console.log(n--)
//     }
//   }
// }
// //loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`:
// function maybeTrue() {
//   return Math.random() >= 0.5
// }
//
// do {
// 	while (array.length > 0){
// 		array.length = array.length - 1
// 	}
//
// } while (array.length > 0 || maybeTrue());
