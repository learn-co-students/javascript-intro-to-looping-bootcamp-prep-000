for (let i = 0; i < 25; i++) {
  if (i = 1){
  console.log("I am 1 strange loop.");
  } else {
  console.log("I am ${i} strange loops.");
  }
}

function whileLoop(){
let countdown = 15;
while(countdown > 0) {
  console.log(--countdown);
  }
if(coundown = 0){
  console.log("done");
  }
}

function doWhileLoop(){
  function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("I run once regardless.");
} while (incrementVariable() < 6);
}