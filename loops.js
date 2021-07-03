function forLoop(array){
  for(let i = 0 ; i < 25 ; i++){
    var number = i === 1 ? 1 : i ;
    if(number != 1){
      array.push("I am ${number} strange loops.")
    } else {
      array.push("I am 1 strange loop.")
    }
  }
  return array;
}

function whileLoop(n){
  while(n != 0){
    console.log(n);
    n--;
  } 
  return "done";
}

function maybeTrue(){
  return Math.random() > 0.5;
}

function doWhileLoop(array){
  do{
    array.pop();
  } while (array.length > 0 || maybeTrue())
  return array;
}