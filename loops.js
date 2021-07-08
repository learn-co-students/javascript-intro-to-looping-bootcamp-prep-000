var temp ="";
function forLoop(array){
  for (var i = 0; i < 25; i++) {
    temp = `I am ${i} strange loop`;
    if(i > 1){
      temp += 's';
    }
    array.push(temp);
  }
  return array;
}

function whileLoop(n){
 while(n >= 1){
   console.log(n);
   n--;
 }
 return 'done';
}
//console.log(forLoop({}));

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop();
  } while (maybeTrue() && array.length > 0)
  return array;
}
