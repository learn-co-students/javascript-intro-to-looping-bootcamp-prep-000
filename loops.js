//for ([initialization]; [condition]; [loopBody];){}

//for ( var i = 1; i<100; i++) {console.log("Hello World the " + i + "time");
  
//}

//for (let i = 0; 1 < 25; i++) {
  //if (i === 1){
    //console.log("I am 1 strange loop.");
  //} else {
    //console.log(`i am ${i} strange loops.`);
    
  //}
  
//}


function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push("I am 1 strange loop.");
      }else {
        array.push(`I am ${i} strange loops.`);
      }
    }
  return array;
  }

function whileLoop(n){
  while (n > 0) {console.log(--n)}
  return "done"
}

function doWhileLoop(array){
  do{array.pop()} while(array > 0)
  return array
}
