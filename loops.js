function forLoop(array){
  var strangeArray = [...array, new Array(25)]
  for (let i = 0; i < array.length+25; i++){
    if (i === 1 || i === 11){
      strangeArray[i] = `I am 1 strange loop.`  
    }
    else if (i === 34){
      strangeArray[34] = `I am 24 strange loops.`
    } else { 
      strangeArray[i] = `"I am ${i} strange loops."` 
    }
  }
  return strangeArray;
}
function whileLoop(n){
  var contdown = n
  while (contdown>0){
    console.log(--contdown) 
  }
  return 'done'
}
var i = 0
function incrementVariable() {
  i = i + 1;
  return i;
}
function doWhileLoop(num){
  i = 0
  do {
    console.log(`doo-bee-doo-bee-doo=${num}`);
  } while (incrementVariable() < num);
}
