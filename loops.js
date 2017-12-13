//think about a function in terms of f(x) = output
//they want f(array) = an array where 25 strings were added to it 
//so if i input an array...
//i set up a loop of 25 i's and each i is going to add its unique string to the array known as 'array'
//now after I've created this function i want to return (array) as in I want to f(array) and hit enter

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
    //let s = (i === 1) ? "I am 1 strange loop." : `I am ${i} strange loops.`;
    //array.push(s);
  }
  return array;
}

function whileLoop(n) {
    while (n>0) {
      console.log(--n);
    }
    return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue())
  return array;
}