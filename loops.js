
function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if(i!=1){
      array.push('I am '+ i +' strange loops.');  
    }else{
      array.push('I am 1 strange loop.');
    }
  }  
  return array;
}

function whileLoop(num){
  while(num>0){
    console.log(--num);
  }
  return 'done';
}

function doWhileLoop(array){
  var i = 0;
  function incrementVariable() {
    array.pop();
  }
  
  do {
    incrementVariable();
  } while (array.length > 0);
  
  return array;
}