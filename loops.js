// // looping
// for (var i = 1; i < 100; i++) {
//   console.log("Hello World the " + i + " time");
// }

function forLoop(array){
  for (i = 0; i < 25; i++ ){
    if (i === 1){
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return(array) // you must return the answer by calling the argument / object. In this case array. 
}