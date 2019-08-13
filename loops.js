

function forLoop(array){
  for(i=1;i<26;i++){
    if(i==1){
    array.push("I am "+i+"strange loop")
    }
    else{
     array.push("I am "+i+"strange loops") 
    }
  }
  return array
}

function whileLoop(n){
  while(n>0){
    console.log(--n)
  }
  return "done"
}

function mayBeTrue(){
  return Math.random()>=1
}

function doWhileLoop(array){
  do{
    array.splice(1,1)
  }
  while(array.length > 0 && mayBeTrue());
  return array
}