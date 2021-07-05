// var array = {"I am 1 strange loop."};

function forLoop(array){
   for (let i = 0; i < 25; i++){
      if (i === 0) {array.push("I am a strange loop")}
      else if (i === 1) {array.push(`I am 1 strange loop`)}
      else { array.push(`I am ${i} strange loops`)};
   }
   return array;
}

function whileLoop(num){
   while(num > 0){
      console.log(num--);
   }
   return `done`;
}

function maybeTrue(){
   return Math.random() >= 0.5;
}

function doWhileLoop(array){
   do{
      array.pop();
   }while ((array.length > 0) && maybeTrue());
   return array;
}

var array = [];
var array2 = ["I am a strange loop","I am 1 strange loop","I am 2 strange loop","I am 3 strange loop","I am 4 strange loop","I am 5 strange loop"];
console.log(forLoop(array));
console.log(whileLoop(10));
console.log(doWhileLoop(array2));
