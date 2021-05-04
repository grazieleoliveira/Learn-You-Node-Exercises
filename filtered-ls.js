const fs = require('fs')
const path = require('path')
const inputdir = process.argv[2]
const inputext = '.' + process.argv[3]


fs.readdir(inputdir, 'utf8', (err, list) => {
    if (err) throw err
    for(i = 0; i < list.length; i++) {
        if(inputext === path.extname(list[i]))
        console.log(list[i])
    }
})  


