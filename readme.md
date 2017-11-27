# nearest-number

From a list of numbers, picks the one closest to a given target. Packaged as a Node.js module.

## Installation

```bash
npm install nearest-number --save
```

## Usage

```javascript
const nearestNumber = require('nearest-number')

// Out of the numbers in the list, the number nearest to 13 is 10
nearestNumber([10, 25, 30], 13) // 10

// Returns the index of 10 in the array
nearestNumber([10, 25, 30], 13, {returnIndex: true}) // 0
```
