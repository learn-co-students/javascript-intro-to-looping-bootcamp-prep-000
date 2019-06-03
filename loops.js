var myArray = [];

for (let i = 0; i < 21; i++){
  myArray.push(i);
}

console.log(myArray);


function countdown(){
  let i = myArray.length;
while (i >= 0){
console.log('countdown ' + i);
i--;
}
}

countdown();


