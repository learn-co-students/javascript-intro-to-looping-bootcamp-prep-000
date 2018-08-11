/*
1) loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`to an array 25 times:
     ReferenceError: forLoop is not defined
      at Context.it (test/loops-test.js:32:28)

  2) loops whileLoop(n) counts down from n to 0:
     ReferenceError: whileLoop is not defined
      at Context.it (test/loops-test.js:49:7)

  3) loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `incrementVariable()` returns `false`:
 */