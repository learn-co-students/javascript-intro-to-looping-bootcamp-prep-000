/*
1) loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`to an array 25 times
 */
 
var array = {}

function forLoop(array) {

  for (let i = 0; i < 25; i++) {
    /*
    if (i === 1) {
      array[i] = "I am 1 strange loop.${i === 0 ? '' : 's'}."`
    } else {
      array[i] = `"I am ${i} strange loop${index === 0 ? '' : 's'}."`
  }
     */
  array[i] = "I am 1 strange loop.${i === 0 ? '' : 's'}."`
  return array
}

}

/*

  2) loops whileLoop(n) counts down from n to 0

  3) loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `incrementVariable()` returns `false`:
 */
 
 