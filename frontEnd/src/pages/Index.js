import { useState, useEffect } from 'react'
import { Box, Button, TextField, Chip, Avatar } from '@mui/material'
import { Container } from '@mui/system'
import io from 'socket.io-client'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const socket = io.connect('https://secret-waters-01768.herokuapp.com')

const Index = () => {
  const [msg, setMsg] = useState({ message: '', user: '' })
  const [chats, setChats] = useState([])
  const [userNameCheck, setUserNameCheck] = useState('')

  useEffect(() => {
    socket.on('message', ({ user, message }) => {
      setChats([...chats, { user, message }])
    })
  })

  console.log(chats)
  console.log(msg)

  const onMsgChange = (e) => {
    setMsg({ ...msg, [e.target.name]: e.target.value })
  }

  const nameCheck = () => {
    setUserNameCheck('Please enter Username first...')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (msg.user) {
      const { message, user } = msg
      socket.emit('message', { user, message })
      setMsg({ ...msg, message: '' })
    } else {
      nameCheck()
    }
  }

  return (
    <Container>
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingTop: 1
        }}
      >
        {msg.user ? (
          <Chip
            avatar={
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            }
            name="name"
            label={msg.user}
          />
        ) : (
          <>
            <TextField
              defaultValue="Enter UserName:"
              variant="standard"
              disabled
              sx={{ width: 130 }}
            />
            <TextField
              onBlur={onMsgChange}
              name="user"
              variant="standard"
              helperText={userNameCheck}
              error={userNameCheck ? true : false}
            />
          </>
        )}
      </Box>
      <Box
        sx={{
          width: '90%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: 75,
          border: '1px solid primary.dark',
          borderRadius: 5,
          overflow: 'auto'
        }}
      >
        <Box
          component="div"
          sx={{
            width: '95%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 2
          }}
        >
          {chats ? (
            chats.map((chat) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems:
                    chat.user === msg.user ? 'flex-end' : 'flex-start',
                  width: 'auto',
                  marginBottom: 1
                }}
              >
                <Chip
                  avatar={<Avatar>{chat.user[0]}</Avatar>}
                  label={chat.message}
                  sx={{
                    width: 'auto',
                    backgroundColor:
                      chat.user === msg.user ? 'green' : 'skyblue'
                  }}
                />
              </Box>
            ))
          ) : (
            <></>
          )}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        ></Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: '90%',
          // height: 200,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'absolute',
          bottom: 10
          // border: '1px solid black'
        }}
      >
        <TextField
          variant="outlined"
          label="messages"
          focused
          sx={{ width: '90%', height: 50, mr: 1 }}
          name="message"
          value={msg.message}
          onChange={onMsgChange}
        ></TextField>
        <Button
          onClick={onSubmit}
          variant="contained"
          sx={{
            height: 50,
            mt: 0.5,
            alignSelf: 'center',
            border: '1px solid black'
          }}
        >
          Send
        </Button>
      </Box>
    </Container>
  )
}

export default Index
