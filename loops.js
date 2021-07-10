

function forLoop(params){
  var i;
  for (i = 0; i < 25; i++){
      if (i === 1) {
        params.push(`I am ${i} strange loop.`);
    } else {
        params.push(`I am ${i} strange loops.`);
    }
  }
return params

}
n = 10
function whileLoop(n){
  while (n > 0){
    console.log(--n);
  }
  return 'done';
}




function doWhileLoop(arrayOne){
  do{ 
    arrayOne.shift();
    } while (arrayOne.length > 0 && incrementVariable());
    return arrayOne;
}

var i = 0; 
function incrementVariable() {

  i = i + 1;
  return true;
}
