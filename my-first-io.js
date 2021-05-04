const fs = require('fs')

let fileLines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

console.log(fileLines)