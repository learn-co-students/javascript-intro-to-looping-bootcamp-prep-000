function forLoop(array){
  for (var index = 0;index < 25;index++){
    var str = `I am ${index+1} strange loop`;

    if (index === 0){
      array.push(str + ".");
    }
    else {
      array.push(str + "s.");
    
}
}return array;}

function whileLoop(num){
  while (num > 0){
    console.log(num);
    num--;
  } return "done";
}

function doWhileLoop(array){
     function maybeTrue() {
        return Math.random() >= 0.2;
    }
 
    do {
    array.pop();
    } while (maybeTrue() && array.length > 0);
    return array;
}
