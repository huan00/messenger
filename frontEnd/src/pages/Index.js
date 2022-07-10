import React from 'react'
import { Server } from 'socket.io'

const Index = () => {
  const io = new Server(3000)

  io.on('connection', (socket) => {
    socket.emit('hello', 'world')
  })

  socket.on('howdy', (arg) => {
    console.log(arg)
  })
  return <div>Index</div>
}

export default Index
