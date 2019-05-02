var forLoop = function(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop.`);
  }
  return array;
};

var whileLoop = function (number) {
  let countdown = number;
  while (countdown > 0) {
    console.log(number);
    countdown--;
  }
  return 'done';
};

var doWhileLoop = function (array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
   
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue());
  
  return array;
  
};