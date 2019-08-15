function forLoop(array){
  for(let i=0; i<25;i++){
    if(i===1){
      array.push(`I am ${i} strange loop.`);
    }
  else
  {
    array.push(`I am ${i} strange loops.`);
  }

  }
  return array;
}

function whileLoop(number){
  while(number>0){
    console.log(--number);
  }
  return "done";
}

function doWhileLoop(num){

  function incrementVariable(){
    num =num -1;
    return num;


  }
  do{
    console.log("I run once regardless.");
  }
  while(incrementVariable()>0);
}