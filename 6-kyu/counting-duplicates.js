function duplicateCount (text) {
  let count = 0
  text = text.toLowerCase()

  // Iterate through all characters of text
  for (let i = 0; i < text.length; i++) {
    // Choose one character
    let firstCharacterToCompare = text.charAt(i)

    // Iterate through all characters of text
    for (let j = 0; j < text.length; j++) {
      let secondCharacterToCompare = text.charAt(j)
      // Check if same character
      if ((i !== j) && (firstCharacterToCompare === secondCharacterToCompare)) {
        count++
        // Replace all characters equal to compared character in text so it's not compared again
        text = text.replace(new RegExp(firstCharacterToCompare, 'g'), '')
        j++
        break
      }
    }
  }
  return count
}

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
