function forLoop(array) {
for (let i = 0; i < 25; i++) {
    if(i===0) {
  }
  else if(i === 1) {
   array = [...array,"I am 1 strange loop."];
   }
  else {
   //array = [...array,"I am " + ${i} + " strange loops."];
   } 
 }
}
  
function whileLoop(n) {
while (n > 0) {
  console.log(--n);
 }
 return "done";
}

function doWhileLoop(array) {
 
var i = array.length;
 function incrementVariable() {
  i = --i;
 }

do {
  array.pop();
  array;
  incrementVariable();
 } while (array.length > 0 && incrementVariable());
}