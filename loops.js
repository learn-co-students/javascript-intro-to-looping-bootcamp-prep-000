function forLoop (array) {
  for (var i = 0; i < 25; i++) {
    if (i != 1) {
      array.push(`I am ${i} strange loops.`)
    } 
    else {
      array.push('I am 1 strange loop.')
    }
  }
  return array;
}

function whileLoop (number) {
  while(number > 0){
    console.log(number);
    number--;
  }
  return 'done';
}

function doWhileLoop (arr) {
var i = 0;
function incrementVariable() {
i += i;
}
do {
    arr.pop();
	incrementVariable();
} while (arr.length > 0);
return arr
}