function forLoop(array){
  for (let i=0; i<25; i++){
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
return array;
}

function whileLoop (n){
  let countdown = 100;
  while (countdown > 0){
    console.log(--countdown)
  }
}