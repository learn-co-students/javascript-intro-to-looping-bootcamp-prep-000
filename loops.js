
function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
var string = "done";
return string;
}


function forLoop(array) {
    //var string1 = "I am 1 strange loop.";
    //var stringOther = "I am ${i} strange loops.";

   for(var i = 0; i < 25; i++) {
     var string1 = "I am 1 strange loop.";
     var stringOther = "I am " + i + " strange loops.";

     if (i === 1) {
      array.push(string1);
    }

    else {
      array.push(stringOther);
    }

}
 return array;
}

function doWhileLoop(array) {

var i = 0;
function incrementVariable() {
  i = i + 1;
  }

  do {

    array.pop();
  }
  while(array.length > 0 && incrementVariable());

return array;
}
