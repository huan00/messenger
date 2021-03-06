const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
const server = http.createServer(app)

app.use(cors())

const io = new Server(server, {
  cors: {
    origin: 'https://h-messenger.netlify.app',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  socket.on('message', ({ user, message }) => {
    io.emit('message', { user, message })
  })
})

server.listen(process.env.PORT || 4000, () => {
  console.log('listening on *: 4000')
})
