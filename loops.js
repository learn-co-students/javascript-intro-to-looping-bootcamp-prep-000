function forLoop(arr){
  var i = 0;
  for(i=0; i<25; i++){
    arr.push("I am ${i} strange loops.");
  }
  return arr;
}

function whileLoop(num){
  while(num>0){
    console.log(--num);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

var cars = ["Saab", "Volvo", "BMW"];

function doWhileLoop(cars){
  do{
    cars.shift();
  }while(cars.length > 0 || maybeTrue());
}