var forLoop = function(array){
  for (var count = 0; count < 25; count++){
    if (count === 1){
      array.push(`I am ${count} strange loop.`);

    } else {
      array.push(`I am ${count} strange loops.`);
    }
   
  }
   return array;
};


var whileLoop = function(n){
  while (n > 0){
    console.log(--n);
  }
  return "done";
};

var i = 0;

function incrementVariable() {
  i = i + 1;
}

var doWhileLoop = function(array){
do {
  array = array.slice(1);
  incrementVariable();
} while (array.length > 0 && incrementVariable());
 
return array;
};