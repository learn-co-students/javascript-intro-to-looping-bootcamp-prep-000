function forLoop(arr) {
  for (var i = 0; i < 25 ; i++) {
    arr.push(`I am ${i} starnge loop.`);
  } // end for
  return arr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(`${num}
      `);
    /*In ES6/ES2015 you can use string literal syntax called template literals.
    Template strings use backtick character instead of single quote or double quote marks.
    They also preserve new line and tab */

    // or console.log(num + "<br>");
    // or console.log(num + '\n');
    num--;
  } // end while
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr) {
  do {
    if (arr.length === 0) arr.push(1); // to ensure arr is not empty
    arr.shift(); // remove first element of array
  } while (arr.length > 0 && maybeTrue());
  return arr;
}
