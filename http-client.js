const http = require('http')
const inputurl = process.argv[2]

http.get(inputurl, (res) =>{
    res.on('data', data => console.log(data)).setEncoding('utf8')
})
