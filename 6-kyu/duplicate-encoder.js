function duplicateEncode (word) {
  let output = ''
  word = word.toLowerCase()
  word
    .split('')
    .forEach((letter) => {
      let firstOccurrence = word.indexOf(letter)
      let lastOccurrence = word.lastIndexOf(letter)
      output += (firstOccurrence === lastOccurrence) ? '(' : ')'
    })
  return output
}

duplicateEncode()
