function forLoop(stuff) {
  for (let i = 0; i < 25; i++) {
    let appendix = "";
    if (i > 1) { appendix = "s"; }
    stuff.push(`I am ${i} strange loop${appendix}.`);
  }
  return stuff;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return "done"; 
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless."); 
    num--;
  } while (num > 0)
}
