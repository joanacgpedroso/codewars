function duplicateCount (text) {
  let count = 0
  let lettersAlreadyCompared = []
  text = text.toLowerCase()
  text
    .split('')
    .forEach((letter) => {
      let firstOccurrence = text.indexOf(letter)
      let lastOccurrence = text.lastIndexOf(letter)

      if ((firstOccurrence !== lastOccurrence) && (!lettersAlreadyCompared.includes(letter))) {
        count++
        lettersAlreadyCompared.push(letter)
      }
    })
  return count
}

duplicateCount()
