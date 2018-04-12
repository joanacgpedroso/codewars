function duplicateCountSolution (text) {
  let count = 0
  text = text.toLowerCase()

  // Iterate through all characters of text
  for (let i = 0; i < text.length; i++) {
    // Choose one character
    let character = text.charAt(i)

    // Iterate through all characters of text
    for (let j = 0; j < text.length; j++) {
      // Check if same character
      if ((i !== j) && (character !== '0')) {
        console.log(character, ' to compare')
        if (character === text.charAt(j)) {
          console.log(character, ' equal ', text.charAt(j))
          count++
          text = text.replace(new RegExp(character, 'g'), '0')
          console.log(text)
          break
        }
      }
      console.log('switch')
    }

  }
  return count
}

function duplicateCount2 (text) {
  let count = 0

  text
    .toLowerCase()
    .split('')
    .forEach((letter, index, array) => {
      console.log('Letter: ', letter)
      console.log('Index: ', index)
      console.log('Array: ', array)

      array.forEach((l) => {
        console.log((l === letter) && (index !== array.indexOf(l)))
      })
    })
}

function duplicateCount3 () {
    let lettersAlreadyCompared = []
    text
      .toLowerCase()
      .split('')
      .forEach((letter, index, array) => {
        console.log('Array: ', array)
  
        array.some((l) => {
          //console.log((l === letter) && (index !== array.indexOf(l)))
          console.log('Letters already compared: ', lettersAlreadyCompared)      
          console.log('-Letter: ', letter, l, l === letter)
          //console.log('-Index: ', index, array.indexOf(l), index === array.indexOf(l))
          console.log((letter !== lettersAlreadyCompared[i]))
          for (var i = 0; i < lettersAlreadyCompared.length; i++) {
          lettersAlreadyCompared.push(letter)
            if ((letter !== lettersAlreadyCompared[i]) && (l === letter)) {
               lettersAlreadyCompared.push(letter) 
            } else {
              console.log('skip up')
              lettersAlreadyCompared.push(letter)
              return true
            }
            lettersAlreadyCompared.push(letter)
          }
          lettersAlreadyCompared.push(letter)
          //if (index === array.indexOf(l)) return true
        })
      })
}