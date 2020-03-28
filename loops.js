var array=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
function forLoop(array){
  for (let i = 0; i < array.length; i++) {
    if (array[i]==1){
      array.push(`I am ${i} strange loop.`)
    }else{
 array.push(`I am ${i} strange loops.`)
    }
    }
    return array
}