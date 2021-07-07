
var thing=[];
function forLoop(thing){
var i;
for (let i=0;i<25;i++){
 if (i==1){
   thing.push("I am 1 strange loop."); 
 } 
  else 
  {
    thing.push(`I am ${i} strange loops.`);
  }
}
  return thing;
}

function whileLoop (n){
  while (n>0){
    --n;
    console.log (n);
  }
  return "done";
}


var i=0;
function incrementVariable(){
  
  i=i+1;
  return i;
}

function doWhileLoop (n){
  do {
    console.log ("I run once regardless");
  }
    
  
  while (incrementVariable()<n+1)
  
}


