function forLoop(arr){
 
  for (let i = 0; i < 25; i++){
    if(i !== 1){
      arr.push(`I am ${i} strange loops.`)
    }
    else {
      arr.push('I am 1 strange loop.')
    }
    
    
}
return arr

}



function whileLoop(number){
  counter = number
  while (counter > 0){
    console.log(counter)
    counter--
  }  
  
  return 'done'
}





function doWhileLoop(integer){
  
  var i = 0;
  
  function incrementVariable() {
  
  i = i + 1;
  return i;
}
  
  do {
    console.log('I run once regardless.')
  }
  
  while(incrementVariable() < integer  );
}
