var strangeArray = [];


function forLoop(array){
  for (var i = 1; i <= 25; i++){
    if (i == 1){
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("I am " + i + " strange loops.");
    }
  }
  return array;
}

//forLoop(strangeArray);
//console.log(strangeArray);

function whileLoop (number){
  let countdown = number;
  while (countdown > 0){
    console.log(--countdown);
  }
  return 'done';
}
//whileLoop(10);

function maybeTrue(){
  return Math.random() >= 0.5;
}

function doWhileLoop(array){
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array;
}
