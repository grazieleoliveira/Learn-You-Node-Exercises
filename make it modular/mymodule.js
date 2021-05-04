const fs = require('fs')
const path = require('path')

module.exports = (inputdir, inputext, callback) => {
    fs.readdir(inputdir, (err, filesList) => {
        if (err) return callback(err)

        filesList = filesList.filter(file => {
            return path.extname(file) === '.' + inputext
        })

        callback(null, filesList)
    })
}