function forLoop(array){
for(let i = 0; array.length < 25; i++){
//   console.log(array);
  if (array.length === 1){
    array.unshift("I am 1 strange loop");
   }else{
     array.push(`I am ${i} strange loops.`);
   }
  }
return array
}




