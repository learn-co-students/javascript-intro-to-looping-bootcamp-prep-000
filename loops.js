//"I am ${i} strange loops." 25 times. For 1, strange loop
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {array.push("I am " + i + " strange loop.")}
    else {array.push(`I am ${i} strange loops.`)}
  }
  return array
};
//count down (using console.log) from the passed in number to 0. Then return the string 'done'
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done'
};
//say "I run once regardless" num number of times.
//Will always run once because dowhile executes at least once before condition is tested.
function doWhileLoop(num){
  var i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
};
  do {console.log("I run once regardless.")}
  while (incrementVariable() < num);
};
