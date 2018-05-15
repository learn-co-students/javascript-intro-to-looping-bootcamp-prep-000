var n=["potato","tomato"];
var array=['Hey','brother'];

function forLoop(array) {
for (i=1; i<26; i++) {
      if (i===1){
      array.push(`I am ${i} strange loop.`)  
      }else{
      array.push(`I am ${i} strange loops.`)  
      }}
      return array;
}

/*
function forLoop(array){
  for(i=0;i<26;i++){  
    if(i==1){
    console.log(array + 'I am ' +i+ ' strange loop ${i===0}.')
    }else{
    console.log(array + 'I am '+i+' strange loops ${i===0}.')
     }  
  }
}
*/
function whileLoop(m){
  while (m>0) {
    console.log(--m);
  }
  return 'done';
}

function doWhileLoop(n){
  do{
  n.splice(0,n.length-1);
  return [n];
  }while(n.length>0);
}
