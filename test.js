'use strict'

const array = [-1, 0, 10]
const assert = require('assert')
const nearestNumber = require('.')

describe('nearestNumber', function () {
  it('should return the nearest number', () => {
    assert.strictEqual(nearestNumber(array, -2), -1)
    assert.strictEqual(nearestNumber(array, -1), -1)
    assert.strictEqual(nearestNumber(array, 0), 0)
    assert.strictEqual(nearestNumber(array, 1), 0)
    assert.strictEqual(nearestNumber(array, 5), 0)
    assert.strictEqual(nearestNumber(array, 10), 10)
    assert.strictEqual(nearestNumber(array, 1000), 10)
  })

  it('should return the index of the nearest number if `returnIndex` is true', () => {
    assert.strictEqual(nearestNumber(array, -2, {returnIndex: true}), 0)
    assert.strictEqual(nearestNumber(array, -1, {returnIndex: true}), 0)
    assert.strictEqual(nearestNumber(array, 0, {returnIndex: true}), 1)
    assert.strictEqual(nearestNumber(array, 1, {returnIndex: true}), 1)
    assert.strictEqual(nearestNumber(array, 5, {returnIndex: true}), 1)
    assert.strictEqual(nearestNumber(array, 10, {returnIndex: true}), 2)
    assert.strictEqual(nearestNumber(array, 1000, {returnIndex: true}), 2)
  })

  it('should return null if the numbers array is empty', () => {
    assert.strictEqual(nearestNumber([], 0), null)
  })
})
