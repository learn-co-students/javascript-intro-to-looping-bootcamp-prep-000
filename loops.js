//i is set equal to 0
//as long as i is less than 25, exexute the code in the loopBody, giving total of 25 executions
// - which prints  "I am ${1} strange loops if i=1" and "I am ${i} strange loops." for any other value of i
function forLoop(array){
  for (i=0; i < 25; i++ ){
  if (i === 1){ 
  array.push("I am 1 strange loop");
    }else {array.push(`I am ${i} strange loops.`);
          }
}
return array
}


 
function whileLoop(n) {
 while (n > 0){
 console.log(--n)
 }
 return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
array.pop()
} while (array.length >0  && maybeTrue());
return array
}