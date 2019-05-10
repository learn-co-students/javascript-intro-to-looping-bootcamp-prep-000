// let array = []
// function forLoop(array){
// for(let i = 0; array.length < 25; i++){
// //   console.log(array);
//   if (array.length === 0){
//     array.unshift("I am 1 strange loop");
//   }else{
//     array.push(`I am ${i} strange loop.`);
//   }
//   }
// return array
//}

let array = []
function forLoop(array){
  for(let i = 0; i < 25; i += 1 ){

 array.push(`${i}`);
if ( array[i] == 1){
  console.log('I am 1 strange loop.');
  }else if(array[i] > 1)
 console.log(`"I am ${i} strange loops."`);
 
}
return array
}
//forLoop(array);

// //works dont edit - while looop
// function whileLoop(n){
// while ( 0 < n ){
//   console.log(--n);
// }
// if (n <= 1 ){
// return 'done';
//   }
// }

 //while do Loop

function doWhileLoop(num) {
 var i = 0;
  i = i + 1;
  return i;
}

do{
  console.log("I run once regardless. ");

  
}while (doWhileLoop() < num);

