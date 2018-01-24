function forLoop(array){
  for(let i=0; i<25; i++){
    if(i===0){
      array[i]=`I am ${i} '' strange loop`;
    }
    else{
    array[i]=`I am ${i}'s' strange loop`;
    }
  }
  console.log(array);
  return array;
}
function whileLoop(number){
  while(number>0){
    console.log(number--);
  }
  return "done";
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5;
  }
  do{
    array.pop();
  }while(maybeTrue() || array.length === 0);
  return array;
}