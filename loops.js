var array = [];

function forLoop(array){
    for(let i = 0; i < 25; i++){

    if (i === 1){
        array.push(`I am ${i} strange loop`);
      }
    else{
        array.push(`I am ${i} strange loops`)
    }
  }
  return array;
}

let number = 50;

function whileLoop(number){
  while(number > 0){
    console.log(--number);
  }
  while(number === 0){
    return "done";
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
  } while (array.length > 0 && maybeTrue() === true);
  return array;
}
