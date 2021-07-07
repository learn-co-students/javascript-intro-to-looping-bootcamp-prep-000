var i = 0;

function incrementVariable() {
i = i + 1;
}

function forLoop(myArray){
  for(let i=0;i<25;i++){
    if(i == 1){
      myArray.push(`I am ${i} strange loop.`); 
    }else{
     myArray.push(`I am ${i} strange loops.`);  
    }
    
  }
  return myArray;
}

function whileLoop(number){
  while(number>0){
    console.log(number)
    number--;
  }
  return "done"
}

function doWhileLoop(array){
  do{
    array.splice(i,1);
  }
  while(array.length > 0 && incrementVariable() );
  console.log(array);
  return array;
}
