var gifts = ['teddy bear', 'drone', 'doll'];
var array = [];
function forLoop(array) {
  for (var i=0; i<25;i++) {
  if (i==1)  array.push('I am 1 strange loop.');
  else
    array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop(x) {
  while(x>0){
    console.log(x)
    x--
    }
     return 'done'
  }

  function maybeTrue() {
  return Math.random() >= 0.5
}

  function doWhileLoop(array) {
  do {
    if (array.length>0) array.pop();
    else 
    return array;
    
}   while (maybeTrue());
return array
}