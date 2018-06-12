

function forLoop (array){
for (let i = 0; i < 25; i++){
  if (i < 1) {
    array.push("I am" +i+ "strange loop");
  }else{
     array.push("I am ${i} strange loops");
}

}
return array;
}


var countdown = 23;

function whileLoop(countdown){
  while (countdown >0){
    console.log(--countdown);
  }
  return 'done';
}

function doWhileLoop (array){
  do{
    console.log(array);
  }while (array.pop(length>0 && maybeTrue()));

return array;
}

