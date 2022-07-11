const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
const server = http.createServer(app)

app.use(cors())

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  socket.on('message', ({ user, message }) => {
    io.emit('message', { user, message })
  })
})

server.listen(4000, () => {
  console.log('listening on *: 4000')
})
