function forLoop(array){
  for (let i = 0; i < 25; i++){
    let loopText = "loop"
    if  (i >= 2){
      loopText += "s"
    }
      array.push(`I am ${i} strange ${loopText}.`);
      }
    return array;
  }
  
  function whileLoop(n){
    while (n > 0){
      console.log(--n);
    }
    return "done";
  }
  
  let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;

}
  function doWhileLoop(num){
    
do {
  console.log("I run once regardless.");
} while (incrementVariable() <= num);

    }