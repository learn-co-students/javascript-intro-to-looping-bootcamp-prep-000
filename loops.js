function forLoop(array){
  for(let i = 0; i<25; i++){
  if(i===1){
    array.push(`I am ${i} strange loop.`)
  }
  else{
    array.push(`I am ${i} strange loops.`)
  }
};
return array;
}

function whileLoop(n){
  let countdown = n;
  while(countdown>0){
    console.log(--countdown);
  };
  return 'done';
}

function incrementVariable(num){
  num = num + 1;
  return num;
}

function doWhileLoop(num){
  do{
    if(num === 0){
      console.log("I run once regardless.");
    }
    else if(num === 10){
      for(i=1;i<=10;i++){
        console.log("I run once regardless.");
      }
    }
  } while (incrementVariable()>num);
}
