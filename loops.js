const array = [];
function forLoop(array){
  for (let i = 0; i < 25; i++)
  {
    if (i === 1) {
    array.push( `I am ${i} strange loop.`);
    }
    else {
    array.push( `I am ${i} strange loops.`);
    }
  }
  return array;
}
let number = 10;
function whileLoop(number){
  while (number > 0)
  {console.log(number);
  number--;
}
return "done";
}

let integer = 10;
function doWhileLoop(integer) {
  let i = 0;
  do {
    console.log("I run once regardless.");
    i++;
  }while(integer > i);
}




