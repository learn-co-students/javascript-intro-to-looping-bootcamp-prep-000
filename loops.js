var i = 0;
function whileLoop(n){
  while (n > 0){
    n = n -1;
    console.log(n);
  }
  return "done";
}

function doWhileLoop(array){
  do{
    array.splice( array.indexOf(i),1);
  }while(array.length > 0 && incrementVariable());
  return array;
}

function incrementVariable() {
  i = i + 1;
}

function forLoop(array){
  for (let i = 0; i < 25; i++){
    
    if(i === 1){
      array.push("I am 1 strange loop.");
    }else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}