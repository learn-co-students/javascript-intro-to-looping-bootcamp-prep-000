function forLoop(array){
  for(let i=0; i<25; i++){
    string = `I am ${i} strange loop${ i === 1 ? '' : 's' }.`
    array.push(string)
  }
  return array
}

function whileLoop(n){
  while(n>0){
    n--
    console.log(n)
  }
  return 'done'
}

function doWhileLoop(num){
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  
  let i = 0
  do{
    console.log("I run once regardless.")
  }while(incrementVariable() < num)
}