
function forLoop(array){
  for(var i = 0; i < 25; i++){
    var string = `I am ${i} strange loop`;
    if(i != 1){
      string += "s";
    }
    string += ".";
    array.push(string);
  }
  
    return array
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  if(n === 0){
    n = 'done'
    return n;
  }
}

var i = 0;

function doWhileLoop(array){
  do {
    array.pop()
  } while (array.length > 0)
  
  return array
}

function incrementVariable(){
  i++;
} 