/*
1) loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`to an array 25 times
 */
 
var array = {}

function forLoop(array) {

for (let index = 0; index < 25; index++) {
  array[index] = `"I am ${index} strange loop${index === 0 ? '' : 's'}."`
  return array
}

}

/*

  2) loops whileLoop(n) counts down from n to 0

  3) loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `incrementVariable()` returns `false`:
 */
 
 