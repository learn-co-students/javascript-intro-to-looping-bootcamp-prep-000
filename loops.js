function forloop(array) {
  for (let i = 0; i < array.length; i++)
    {console.log("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
}

let countdown = 100
whileLoop(countdown > 0) {
  console.log(--countdown);
}

function doWhileLoop(num) {
  console.log("I run once regardless.")
}
