function list (names) {
  let output = ''
  names.map((person, index) => {
    output += person.name
    if (index === names.length - 2) {
      output += ' & '
    } else if (index !== names.length - 1) {
      output += ', '
    }
  })
  return output
}

list()
