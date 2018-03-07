function forLoop(arg){
  for (var i = 1; i < 25; i++){
    if (i === 1){
    console.log(`I am a ${i} strange loop`);
    }
    if (i > 1){
    console.log(`I am a ${i}  strange loops.`);
  }
}}
function whileLoop(num){
  while(num > 0){
    console.log(num)
    num--
  } console.log("done")
}
function doWhileLoop(arg){
 console.log("idk wtf should go here")
  while(arg.length > 0);{
    delete arg[arg.length - 1]
  }
}

function maybeTrue() {
  return Math.random() >= 0.5 
}
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}

