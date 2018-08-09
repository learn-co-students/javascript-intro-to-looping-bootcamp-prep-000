
var myAray = [];

function forLoop(myArray) {
  for (let i = 1; i<26; i++) {
    if (i ==1) {
      myArray.push("I am 1 strange loop.");
    } else {
      myArray.push('I am ${i} strange loops.');
    }
  }
  return myArray;
}
console.log(forLoop(myArray))


function whileLoop(n) {
  while (n > 0) {
  console.log(--n);
  }
  return("done");
}

function incrementVariable() {
  let i = 0;
  i = i + 1;
}

function doWhileLoop(anArray) {
  do {
  incrementVariable();
  anArray.pop();
} while (anArray.length>0 && incrementVariable());
return anArray;
}

