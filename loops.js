function forLoop(ar) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      ar.push("I am a 1 strange loop");
    } else {
      ar.push("I am a ${i} strange loops");
    }
  }
  return ar;
}

function whileLoop(n) {
	let countdown = n;
	while (countdown > 0) {
  		console.log(--countdown);
	}
	return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}

