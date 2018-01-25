for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}

//use {for} loop when you know how
//many times you need the event to execute
for (var i = 1; i < 100; i++){
  console.log("Hello World the " + i + "time");
}

function forLoop(array) {
  for (let i = 0; i < 25; i++) {      //this sets the 'standards'
    if (i === 1) {                    //this begins the first condition
      array.push("I am 1 strange loop.");
    } else {            //this represents the second level of conditions
      array.push(`I am ${i} strange loops.`);
    }
  }

  return array;
}
//
while ([condition]) {
  [loopBody];
}

function whileLoop(n){
  while (n > 0) {
    console.log(-- n);
  }  
  return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    array = array.slice(1);
  } while (array.length > 0 && maybeTrue());

  return array;
}


