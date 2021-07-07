function forLoop(aList){
    for(let i=0; i<25; i++){
        aList.push(`I am ${i} strange loop${i === 0 || i===1 ? '':'s'}`);
    }
    return aList;
}

function whileLoop(n){
  n -= 1;
  while (n > -1){
    console.log(n);
    n--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.shift();
  }while(array.length >= -1 && maybeTrue());
  return array;
}
