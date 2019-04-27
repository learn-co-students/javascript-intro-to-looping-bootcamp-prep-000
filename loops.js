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
