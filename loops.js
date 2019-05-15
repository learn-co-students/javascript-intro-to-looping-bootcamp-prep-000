function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

function whileLoop(n){
 let countDown = n
     while (countDown >0) {
      console.log(--countDown)
      if(countDown === 0){
        "I run once regardless."
      }
    }
    return "done";
}

 
var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
function doWhileLoop(n) {

do {
  
  console.log("I run once regardless." + i)
   incrementVariable()
} while (i <= n){
  
}

}