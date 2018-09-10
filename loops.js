function forLoop(array) {
  for (let i = 0; i < 25; i++){
    if (i ===1){
      array.push("I am 1 strange loop.");
    }else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}

function whileLoop(n) {
    while (n > 0) {
      console.log(--n);
    }
  return 'done'
}


function doWhileLoop(array) {
  var i = 0;
function incrementVariable() {
        i = i + 1;}
  var incrementvariable = function incrementVariable(){}
  do {
    array.length > 0 && incrementVariable();
  } while (i < 5) {
      array.splice(0)
  }
  return array
}