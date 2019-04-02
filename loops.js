

function forLoop(array) {
  for (var i = 0; i<25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
    } else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}

function whileLoop(n){
 let countdown = n;
  while (countdown > 0){
    console.log(--countdown)
  }
  return "done"
}


function doWhileLoop(num) {
  
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 if ( num === 0 ){
   console.log("I run once regardless.")
 }
  else if (num === 10){
    for ( i = 0; i<10; i++){
       console.log("I run once regardless.")
    }
  }
}


