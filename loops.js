function forLoop(array){
  for (let i=0; i<25; i++){
    if (i === 1){
      array.push(`I am 1 strange loop.`);
    }else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n){
  var countdown = n;
  while (countdown > 0){
    console.log(--countdown);
  }
  if (countdown === 0);{
    return "done";
  }
}

function doWhileLoop(array){
  function incrementVariable (){
    var i=100;
    i=i-1;
  }
  do{
    array.pop();
  }while (array.length > 0 && incrementVariable());
  return array;
}

