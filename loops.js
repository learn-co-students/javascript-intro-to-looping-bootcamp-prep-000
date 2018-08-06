
function forLoop (array) {
for (var i = 1; i < 26; i++) {
  i === 1 ? 
  array.push(`I am ${i} strange loop`) : 
  array.push(`I am ${i} strange loops`);
}
return array;
}

testArray=[];
console.log(forLoop(testArray));
 
function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done';
}

whileLoop(7);

function doWhileLoop (array) {
      function maybeTrue() {
      return Math.random() >= 0.5
    }
     
    do {
      array.pop();
    } while (array.length > 0 && maybeTrue())
    return array;
}

let testArray2 = [1,2,3,4,5];
doWhileLoop(testArray2);
