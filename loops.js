// strange loops

const myArray = [];

function forLoop () {

  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      myArray.push("I am 1 strange loop.");
    }else{
       myArray.push("I am " + i + " strange loops.");
    } 
  }
  return myArray;
}

 for (let i = 0; i < 25; i++) {
    if (i === 1) {
      console.log("I am 1 strange loop.");
    }else{
       console.log("I am " + i + " strange loops.");
    } 
  }
  
// while loop

function whileLoop (n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  } 
  return ("done")
}

// do while loop

