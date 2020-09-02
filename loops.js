let i = 0;

function forLoop(arr){
  for (let i=0; i<25; i++){
    let sent = `I am ${i} strange loop`
    if (i===1) sent = sent + ".";
    else sent = sent + "s.";
    arr.push(sent);
  }
  return arr;
}

function whileLoop(num){
  while (num>0){
    console.log(num);
    num--;
  }
  return 'done';
}

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num){
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= num);
}