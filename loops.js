function forLoop (arr){
  for (let i=0;i<25;i++) {
    if (i===1){
      arr.push('I am 1 strange loop.');
    }
   else {
     arr.push(`I am ${i} strange loops.`);
   }
  
  }
  return arr; 
}


function whileLoop(n){
let countdown = n;

while(countdown>0){
  console.log(--countdown)
 
  if (countdown===0){
    return 'done'
  }
  
}}


function doWhileLoop (array){
 
 function maybeTrue() {
  return Math.random() >= 0.5;
}
 
do {
  array.pop();
  
} while (array.length > 0 && maybeTrue());
return array;

}








