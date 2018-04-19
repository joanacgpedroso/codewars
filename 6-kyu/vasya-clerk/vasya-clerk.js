function tickets (peopleInLine) {
  let output = 'YES'
  let bank = []
  let ticket = 25
  peopleInLine.some((bill) => {
    let change = bill - ticket
    console.log('gets', bill, 'returns', change, 'bank', bank)
    if (change !== 0) { // change needs to be returned
      let bankMoney = bank.reduce((amount, total) => amount + total, 0)
      if (change <= bankMoney) { // there's money
        let billNeeded = change
        while (change !== 0) {
          if (bank.indexOf(billNeeded) !== -1) { // bill exists
            change = change - billNeeded // recalculate change
            bank.splice(bank.indexOf(billNeeded), 1) // remove bill
          } else { // change bill
            billNeeded = billNeeded - 25
            if (billNeeded === 0) {
              output = 'NO'
              return true
            }
          }
        }
      } else { // there's no money, stop checking anything
        output = 'NO'
        return true
      }
    }
    bank.push(bill)
  })

  return output
}

tickets()
