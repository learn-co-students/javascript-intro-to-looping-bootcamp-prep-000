function forLoop (array) {
  x = "";
for (let i = 0; i < 25; i++) {
if (i === 1) { 
   	x = "I am " + parseInt(i) +" strange loop.";
 array.push(x);
      } else{x= "I am 24 strange loops.";
 array.push(x);
        }
        
  }
  return array.slice();
} 

function whileLoop(n) {
    let countdown = n+1;
  while (countdown > 1) {
    console.log(--countdown);
  }
  return "done";
}
function doWhileLoop(num) {
  function incrementVariable() {
  num = num + 1;
  return num;
}
  do { if (num === 10){
    for (let i = 0; i < 10; i++) {
console.log("I run once regardless.");
}} else {
  console.log("I run once regardless.");
}
} while (incrementVariable() < num);
}