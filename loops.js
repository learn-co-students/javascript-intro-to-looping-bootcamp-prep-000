function forLoop(a){

for (let i = 0; i < 25; i++){
 if (i == 1){
 a.push("I am 1 strange loop.")}
 else{
   a.push("I am 24 strange loops.")}
   
}
return a 
}


function whileLoop(num){
  while (num > 0){
    console.log(--num)
  }
var s = "done"
return s
}

function doWhileLoop(num){
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
 return i;
}
 
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
  
}

