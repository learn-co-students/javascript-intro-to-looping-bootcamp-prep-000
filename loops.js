function forLoop(arr){
  for(var i=0;1<10;i++){
    if(i===1){
      arr.push("I am 1 strange loop");
    } else {
      arr.push(`I am ${i} strange loops`);
    }
  }
}

function whileLoop(num){
  while(num>0){
    console.log(--num);
  }
  return 'done';
}

