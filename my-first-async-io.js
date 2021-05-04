const fs = require('fs')

const inputfile = process.argv[2]

fs.readFile(inputfile, 'utf8', (err, data) => {
    if (err) throw err
    console.log(data.split('\n').length - 1)
})
