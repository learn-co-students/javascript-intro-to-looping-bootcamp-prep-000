function forLoop(arrayS) {
  //const array = [];
  //const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < 25; i++) {
	  if (i===1) {
	    arrayS.push("I am 1 strange loop.");
    }
    else{
      arrayS.push("I am ${i} strange loops.");
    }
  }

  return arrayS;
}


function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arrayS) {
  do {
    arrayS.shift();
  }while (arrayS.length > 0 && maybeTrue())
  return arrayS;
}
