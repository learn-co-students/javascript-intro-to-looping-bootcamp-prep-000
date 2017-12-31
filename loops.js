function forLoop(array){
  let result=[];
  for (i=0;i<(25+array.length);i++){
    if(i===1){result.push(`I am 0 strange loops.`)}
    else{result.push(`I am 0 strange loops.`)}}
  console.log(result);console.log(array);return result;}

function whileLoop(n){
  while(n>0){console.log(`Countdown counter at: ${n}`);n--;}return'done';}
    
    let testArray=[1,2,3,4,5,6,7];
    
function maybeTrue(){return Math.random()>=0.5}
  
function doWhileLoop(array){
  do{array.pop()}while(array.length>=0&&maybeTrue())
  return array;}

console.log(maybeTrue());
console.log(doWhileLoop(testArray));

//whileLoop(5);
 // forLoop(testArray);
  //console.log(testArray);