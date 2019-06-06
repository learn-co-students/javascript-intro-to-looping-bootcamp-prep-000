function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push("I am 1 strange loop.");
    } else { array.push(`I am ${i} strange loops.`)}
}
  return array
} 
function whileLoop(num){
  let countdown = 20;
  while (countdown > num){
    console.log(--countdown)
  }
  return 'done'
}
function doWhileLoop(int){
  function incrementVariable() {
  int = int + 10;
  return int;
}
do {
  console.log("I run once regardless.")
} while (incrementVariable() < int)
return int
}