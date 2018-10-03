function forLoop(array) {
  for(let i = 0; i < 25; i++){
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
  }

function whileLoop(numbah){
  while(numbah > 0){
    console.log(numbah);
    numbah --;
  }
  return 'done'
}

var i = 0;
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(xRay){
  do {
    xRay.shift();
  } while (xRay.length && incrementVariable());
  return xRay
}