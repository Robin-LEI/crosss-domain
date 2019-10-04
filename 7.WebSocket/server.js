let express = require('express')
let wss = require('ws')
let app = express()


let socket = new wss.Server({port:3000})

socket.on('connection', function(ws) {
  ws.on('message', function(data) {
    console.log('a', data)
    ws.send('你好a，我收到了你的消息')
  })
})

