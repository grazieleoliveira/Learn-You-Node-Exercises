const mymodule = require ('./mymodule.js')

const inputdir = process.argv[2]
const inputext = process.argv[3]

mymodule(inputdir, inputext, (err, data) => {
    if (err) throw err
    data.forEach(file => {
        console.log(file)
    })
})