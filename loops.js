function forLoop(array){
  for(let i=0; i<25; i++){
    array[i] = (i===1 ? "I am 1 strange loop" : "I am ${i} strange loops");
  }
  return array;
}

var parray =[];
forLoop(parray);
console.log(parray);

function whileLoop(n){
  while(n>0) {
    console.log(n-- + " done");
  }
}

whileLoop(5);

function maybeTrue(){
  return Math.random() >= 0.5;
}

function doWhileLoop(array1){
  do {
    array1.shift();
  } while(array1.length >0 && maybeTrue());
  return array1;
}

var karray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
doWhileLoop(karray);
console.log(karray);




