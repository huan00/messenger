import React from 'react'
import { Box, Button, TextField, Chip, Avatar } from '@mui/material'
import { Container } from '@mui/system'

const Index = () => {
  return (
    <Container>
      <Box sx={{ width: '90%', position: 'absolute', bottom: '15%' }}>
        <Box
          sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}
        >
          <Chip
            avatar={<Avatar>N</Avatar>}
            label="Hello World"
            sx={{
              width: 'auto'
            }}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Chip
            label="Hello World..................."
            avatar={<Avatar>W</Avatar>}
            sx={{
              width: 'auto',
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'flex-start',
              paddingRight: 1
            }}
          />
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: '90%',
          height: 200,
          // padding: 2,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0
        }}
      >
        <TextField
          variant="outlined"
          label="messages"
          focused
          sx={{ width: '90%', height: 50 }}
        ></TextField>
        <Button variant="contained" sx={{ height: 50 }}>
          Send
        </Button>
      </Box>
    </Container>
  )
}

export default Index
