
function forLoop(a){
  for(let i=0; i<25; i++){
    if(i === 1){
      a.push("I am 1 strange loop.");
    }
    else{
      a.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
    }
  }
  return a;
}

function whileLoop(n){
  while(n > 0){
    console.log(--n);
  }
  return "done";
}

var i = 0;
function incrementVariable(){
  i = i + 1;
}

function doWhileLoop(a){
  do{
    a.pop();
  } while((a.length !== 0) || (incrementVariable() === false))
  
  return a;
}
