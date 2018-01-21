function forLoop(array){
 for (let i=1; i < array.length; i++){
 if(i===1){
   array.push("I am 1 strange loop.");
 } else {
   array.push(`I am ${i} strange loops.`);
 }
 }
 return array;
}

function whileLoop(n){
let countdown=n;

while (countdown===0){
  console.log("done");
}
}

function doWhileLoop(array){
function maybeTrue() {
  return Math.random() >= 0.5;
}
}