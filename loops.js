function forLoop(array) {
  for (let i = 0; i < 26; i++ ) 
    if( i === 0) { 
      array.push(`" I am 1 starnge wood"`)
    } else {
      array.push(`" I am  ${i} starnghe loops."`)
    }
}

return array;