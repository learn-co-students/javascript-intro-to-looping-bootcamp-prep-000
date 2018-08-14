function forLoop (array) {
  for (i = 0; i < 25; i++) {
    if (i == 1) {
      return 'I am a strange loop.'
    }
    else {
      return 'I am ${i} strange loops.'
    }
  }
}