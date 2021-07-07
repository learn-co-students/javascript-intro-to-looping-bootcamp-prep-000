var array = [];
function forLoop(array){
  
for(var i = 0; i < 25; i++){
  if(i === 0){
  array.push("I am a strange loop.");
  } else
   array.push("I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.")

}
return array
}


function whileLoop(n){
  
  while(n > 0){
        console.log(--n);
    }
    return "done";
}


var arr = [1,2,3,4,5,6];

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}


function doWhileLoop(arr){
  
  do{
    
    arr.pop();
    
  } while (arr.length > 0 && maybeTrue());
  
  return arr;
}

