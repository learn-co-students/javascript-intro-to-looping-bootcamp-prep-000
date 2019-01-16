

array=[];
function forLoop(array) {

  for (let i = 0; i < 25; i++){
    if (i===1) {
      array.push(`I am 1 strange loop.`);
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }

return array
}

let n= Math.floor(Math.random() * 100)+99;
function whileLoop(n){


while (n)
   console.log(--n)

  return  "done"


}

let array =[1,2,3,4,6];
const l = array.length

 function doWhileLoop(array){
l=l-1;
 }
  do{
    doWhileLoop(array);

  }

  while(array.length>0);
