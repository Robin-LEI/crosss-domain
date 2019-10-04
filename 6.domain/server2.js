let express = require('express')

let app=  express()

app.use(express.static(__dirname))

app.listen(4000, () => {
  console.log('running 4000 port')
})