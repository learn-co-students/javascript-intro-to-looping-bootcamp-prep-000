function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`);
     } else {
       array.push(`I am ${i} strange loops.`);
     }
  }
  return array;
}
function whileLoop(n){
  while(n > 0){
    console.log (--n);
  }
  return 'done';
}
let i = 0
function doWhileLoop(array){
  array.length > 0 && incrementVariable();
}
do{
  console.log(i);
  {
  }
} while (i<5);
return false