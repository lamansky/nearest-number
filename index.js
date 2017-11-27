'use strict'

const toNumber = require('2/number')
const toArray = require('2/array')

module.exports = function nearestNumber (numbers, target, {returnIndex = false} = {}) {
  target = toNumber(target)
  let leastDifference = Infinity
  let nearest = null

  for (const [index, number] of toArray(numbers).entries()) {
    const difference = Math.abs(toNumber(number) - target)
    if (difference < leastDifference) {
      leastDifference = difference
      nearest = returnIndex ? index : number
    }
  }

  return nearest
}
