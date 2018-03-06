/*
var gifts = ["teddy bear", 'drone', "doll"]

function wrapGift (gift){
  console.log("wrapped ${gift} and added a bow!")
}

wrapGift(gifts[0])
wrapGift(gifts[1])
wrapGift(gifts[2])
*/

function forLoop (array){ 
for (let i = 0; i < 25; i++ ){
if (i===1){
  array.push("I am 1 strange loop.");
}
else{
    array.push("I am ${i} strange loops");
}    
  }
return array;
  }

function whileLoop(n){
   let countDown = n;
  while(countDown > 0){
    console.log(--countDown)
  }
  return "done";
}

function doWhileLoop (array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
 do{array.pop()
      }
while(array.length>-1 && maybeTrue());
return array
}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  

