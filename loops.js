function forLoop(array) {
  var array = '';
  for(var i=0; i<25;i++);
    if (i===1){
    array += "I am 1 strange loop"
  } else {
    array += "I am ${i} strange loops"
  }
  return array
}


function whileLoop() {
  let Spy = 60
    while (Spy > 0) {
    console.log("--Spy");
    Spy--;
  }
return "done"
}
