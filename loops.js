function forLoop (array) {
  for (let i = 1; i < 26; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops`)
    }
  }
  return array;
}
