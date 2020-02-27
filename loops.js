function forLoop (a = []) {

  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      a.push(`I am ${i} strange loop.`);
    } else {
      a.push(`I am ${i} strange loops.`);
    }
  }
  return a;
}
forLoop();

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown);
    }
  return "done";
}
whileLoop();

function doWhileLoop(num) {
  let i = 0;

  do {
    function incrementVariable() {
      i = i + 1;
      return i;

    }
    console.log(`I run once regardless.`);
  } while (incrementVariable() < num);
}
doWhileLoop();
