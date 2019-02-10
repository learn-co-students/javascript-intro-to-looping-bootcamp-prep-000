function forLoop(array){
  for (let i = 0; i < 25; i++){
   if (i !== 1){
     array.push(`I am ${i} strange loops.`)
    }else if(i === 1){
      array.push("I am 1 strange loop.")
    } 
  }return array
}


function whileLoop(x){
  while (x > 0){
  console.log(--x); 
  } return "done"
}

// Test 3


var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}


function doWhileLoop(y){
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= y)
}







