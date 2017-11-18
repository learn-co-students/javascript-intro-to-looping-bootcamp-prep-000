
function forLoop(anArray){

  for (let i = 0; i < 25; i++) {
    if (i === 1){
    anArray.push (`"I am 1 strange loop."`);
} else {
  anArray.push(`"I am ${i} strange loops."`);
}
}
return anArray
};

function whileLoop(number){
let countdown= number
  while (countdown>0){
    console.log(--countdown);
  }
  return `done`
};

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
 do {
  array.pop()
} while (array.length>0 && maybeTrue());
return array
}
