myArray = [];

function forLoop(array) {

for (let i = 0 ; i < 25 ; i++) {

  if (i === 1) {

    array.push("I am 1 strange loop.")
  }

else  {

    array.push("I am 24 strange loops.")

}



}

return array

}


forLoop(myArray);



function whileLoop(number) {


while (number > 0) {
  console.log(--number)
}

return "done"
}

whileLoop(100);

var i = 0;

function doWhileLoop(num) {
  i = i + 1;
  return i;
}

do {
  console.log("I run once regardeless.");
} while (doWhileLoop() < 9 );

doWhileLoop(1)
